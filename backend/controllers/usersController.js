const userModel = require("../models/userModel.js");

const getAllUsers = async (req, res) => {
  let user = await userModel.find();

  res.status(200);
  res.json({
    status: "success",
    data: {
      users: user,
    },
  });
};
const addUser = async (req, res) => {
  try {
    const { _id, ...data } = await userModel.create(req.body);
    console.log(data);
    res.json({
      status: "success",
      results: 1,
      data: {
        products: data,
      },
    });
  } catch (err) {
    res.status(403);
    console.log(err);
    res.json({
      status: "failed",
      message: JSON.stringify(err),
    });
  }
};
const deleteUser = async (req, res) => {
    try {
      const reqId = req.params.id;
      const result = await userModel.findOneAndDelete({ _id: reqId });
      res.json({
        status: "User Deleted",
        data: result,
      });
    } catch (err) {
      res.status(500);
      res.json({
        status: "fail",
        message: JSON.stringify(err),
      });
    }
  };

module.exports = {
  getAllUsers,
  addUser,
  deleteUser,
  
};
