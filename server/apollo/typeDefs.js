const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Restaurant {
    id: ID
    matp: String
    tenqa: String
    loaimonan: String
    diachi: String
    dienthoai: String
    thoigianphucvu: String
    dattoithieu: String
    star: Int
    nguoisohuu: String
    urlhinhanh: String
  }
  type TypeFood {
    id: ID
    tenloai: String
    url: String
  }
  type Food {
    id: ID
    maqa: String
    tenmonan: String
    gia: Int
    urlhinhanh: String
  }
  type Cart {
    id: ID
    userid: String
    productid: String
    tenquan: String
    restaurantid: String
    sellerid: String
    url: String
    name: String
    price: Int
    quantity: Int
  }
  type Payment {
    id: ID
    cartid: [Cart]
    seller: String
    userid: String
    status: String
    total: Int
  }
  type Query {
    hello: String
    login(username: String!, password: String!): AuthData
    getAllUser: [User]

    getAllRestaurant: [Restaurant]
    getRestaurant(id: ID): Restaurant

    getAllTypeFood: [TypeFood]

    getAllFood: [Food]
    getFood(id: ID): Food

    getAllCart: [Cart]

    getAllPayment: [Payment]
  }

  input RestaurantInput {
    matp: String!
    tenqa: String!
    loaimonan: String!
    diachi: String!
    dienthoai: String!
    thoigianphucvu: String!
    dattoithieu: Int!
    star: Int!
    nguoisohuu: String!
    urlhinhanh: String!
  }

  input TypeFoodInput {
    tenloai: String!
    url: String!
  }

  input FoodInput {
    maqa: String!
    tenmonan: String!
    gia: Int!
    urlhinhanh: String!
  }

  type Mutation {
    register(user: UserInput): User
    createRestaurant(restaurant: RestaurantInput): Restaurant
    createTypeFood(type: TypeFoodInput): TypeFood
    createFood(food: FoodInput): Food
    deleteRestaurant(id: ID!): Restaurant
    deleteTypeFood(id: ID!): TypeFood
    deleteCart(id: ID!): Cart
  }
`;

module.exports = typeDefs;
