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
  try{
      const data = req.body;
      const dataObj = await userModel.addUser(data);
      res.json({
          status: 'success',
          results: 1,
          data: {
              newUser: data,
          }
      });
  }
  catch(err){
      res.status(400);
      res.json({
          status: 'fail',
          message: err.message,
      });
  }
}
const updateUser = async (req, res)=>{
  try{
      const reqId = req.params.id;
      const data = req.body;
      const dataObj = await userModel.updateUser(reqId, data);
      res.json({
          status: 'success',
          results: 1,
          data: {
              newUser: data,
          }
      });
  }
  catch(err){
      res.status(400);
      res.json({
          status: 'fail',
          message: err.message,
      });
  }
}

const deleteUser = async (req, res)=>{
  try{
      const reqId = req.params.id;
      const dataObj = await userModel.deleteUser(reqId);
      res.json({
          status: 'success',
          results: 1,
          data: {
              newUser: data,
          }
      });
  }
  catch(err){
      res.status(400);
      res.json({
          status: 'fail',
          message: err.message,
      });
  }
}

module.exports = {
  getAllUsers,
  addUser,
  updateUser,
  deleteUser,
  
};
