const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/auth");
const Cart = require("../model/Cart");
const mongoose = require("mongoose");

router.get("/", verifyToken, async (req, res) => {
  const id = req.userId;
  try {
    const cart = await Cart.find({ userid: id });
    return res.json({ success: true, cart });
  } catch (error) {
    return res.json({ success: false, error: error.message });
  }
});

router.put("/:cart_id", async (req, res) => {
  const cartId = req.params.cart_id;
  const quantity = req.body.quantity;
  try {
    const cartUpdate = await Cart.findOneAndUpdate(
      { _id: mongoose.Types.ObjectId(cartId) },
      {
        $set: {
          quantity: quantity,
        },
      },
      {
        new: true,
      }
    );
    return res.json({ success: true, cartUpdate });
  } catch (error) {
    return res.json({ success: false, error: error.message });
  }
});

router.delete("/:cart_id", verifyToken, async (req, res) => {
  const cartId = req.params.cart_id;
  try {
    const deleteProduct = await Cart.findByIdAndDelete(cartId);
    return res.json({ success: true, deleteProduct });
  } catch (error) {
    return res.json({ success: false, error: error.message });
  }
});

router.post("/:product_id", verifyToken, async (req, res) => {
  const productId = req.params.product_id;
  const userid = req.userId;
  try {
    const { url, name, price, quantity, tenquan, restaurantId, sellerId } =
      req.body;
    const newAddProduct = new Cart({
      userid,
      tenquan,
      productid: productId,
      url,
      name,
      price,
      quantity,
      restaurantid: restaurantId,
      sellerid: sellerId,
    });
    await newAddProduct.save();
    return res.json({ success: true, newAddProduct });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
});

module.exports = router;
