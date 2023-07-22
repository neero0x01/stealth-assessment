const { DATA_SERVER_DOWN, DATA_FILLED, DATA_ADD_WRONG } = require("../util/constant");
const Product = require("../models/product.model");
const User = require("../models/user.model");
const Order = require("../models/order.model");
const {
  generateFakeProducts,
  generateFakeUsers,
  getAllProductAndUserIDs,
  generateFakeOrders,
} = require("../util/helper");

exports.addFakeProducts = async (req: any, res: any) => {
  try {
    const productData = await generateFakeProducts(10);
    const dataAdded = await Product.insertMany(productData);

    if (!dataAdded)
      res
        .status(300)
        .json({ message: DATA_ADD_WRONG });

    res.status(200).json({ message: DATA_FILLED });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: DATA_SERVER_DOWN });
  }
};

exports.addFakeUsers = async (req: any, res: any) => {
  try {
    const userData = await generateFakeUsers(700);
    const dataAdded = await User.insertMany(userData);

    if (!dataAdded)
      res
        .status(300)
        .json({ message: DATA_ADD_WRONG });

    res.status(200).json({ message: DATA_FILLED });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: DATA_SERVER_DOWN });
  }
};

exports.addFakeOrders = async (req: any, res: any) => {
  try {
    const { productIdList, userIdList } = await getAllProductAndUserIDs();
    const orderData = await generateFakeOrders(10, userIdList, productIdList);
    const dataAdded = await Order.insertMany(orderData);

    if (!dataAdded)
      res
        .status(300)
        .json({ message: DATA_ADD_WRONG });

    res.status(200).json({ message: DATA_FILLED });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: DATA_SERVER_DOWN });
  }
};
