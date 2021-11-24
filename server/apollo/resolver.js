const QuanAn = require("../model/QuanAn");
const LoaiMonAn = require("../model/LoaiMonAn");
const MonAn = require("../model/MonAn");
const Cart = require("../model/Cart");
const Payment = require("../model/Payment");
const User = require("../model/User");
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

const resolvers = {
  Query: {
    hello: (args, req, context) => {
      return "Hello world";
    },
    login: async (parent, args) => {
      const { username, password } = args;
      const user = await User.findOne({ username });
      if (!user) {
        throw new Error("User does not exist");
      }
      const check = await argon2.verify(user.password, password);
      if (!check) {
        throw new Error("Wrong password");
      }
      const token = jwt.sign(
        { userId: user._id, role: user.role },
        "somesecretkey",
        {
          expiresIn: "1h",
        }
      );
      return { userId: user._id, token, tokenExpiration: 1 };
    },

    getAllUser: async (args, req, context) => {
      if (!context.isAuth || context.role === "client") {
        throw new Error("Not authenticated");
      }
      return await User.find();
    },

    getAllRestaurant: async () => {
      return await QuanAn.find();
    },
    getRestaurant: async (parent, args) => {
      return await QuanAn.findById(args.id);
    },
    getAllTypeFood: async () => {
      return await LoaiMonAn.find();
    },

    getAllFood: async () => {
      return await MonAn.find().limit(4);
    },
    getFood: async (parent, args) => {
      return await MonAn.findById(args.id);
    },

    getAllCart: async () => {
      return await Cart.find();
    },

    getAllPayment: async () => {
      return await Payment.find().sort({ createAt: -1 }).limit(10);
    },
  },

  Mutation: {
    register: async (parent, args) => {
      const { username, password } = args.user;
      const user = await User.findOne({ username: username });
      if (user !== null) {
        throw new Error("Đã có người đăng kí với tài khoản này");
      }
      const hashPassword = await argon2.hash(password);
      const newUser = new User({
        username,
        password: hashPassword,
      });
      await newUser.save();
      return newUser;
    },

    createRestaurant: async (parent, args) => {
      const newRestaurant = new QuanAn(args.restaurant);
      await newRestaurant.save();
      return newRestaurant;
    },
    createTypeFood: async (parent, args) => {
      const newTypeFood = new LoaiMonAn(args.type);
      await newTypeFood.save();
      return newTypeFood;
    },
    createFood: async (parent, args) => {
      const newFood = new MonAn(args.food);
      await newFood.save();
      return newFood;
    },
    deleteRestaurant: async (parent, args) => {
      const restaurant = await QuanAn.findByIdAndDelete(args.id);
      if (!restaurant) {
        throw new Error("Không thấy nhà hàng này");
      }
      return restaurant;
    },
    deleteTypeFood: async (parent, args) => {
      const typeFood = await LoaiMonAn.findByIdAndDelete(args.id);
      if (!typeFood) {
        throw new Error("Không thấy loại món ăn này");
      }
      return typeFood;
    },
    deleteCart: async (parent, args) => {
      const cart = await Cart.findByIdAndDelete(args.id);
      if (!cart) {
        throw new Error("Không có sản phẩm này trong giỏ hàng");
      }
      return cart;
    },
  },
};

module.exports = resolvers;
