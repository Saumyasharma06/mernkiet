const productModel = require("../models/productsModel.js");

const getAllProducts = async (req, res) => {
  const tmpQ = req.query;
  const {
    sort = "price",
    page = tmpQ.page,
    pageSize = 3,
    fields,
    ...q
  } = req.query;
  const sortStr = sort.split(",").join(" ");
  const fieldsStr = fields.split(",").join(" ");

  let query = productModel.find(q);
  query = query.sort(sortStr);

  const skip = pageSize * (page - 1);

  query = query.skip(skip).limit(pageSize);

  query = query.select(fieldsStr);

  const products = await query;
  const totalResults = await productModel.countDocuments();

  res.json({
    status: "success",
    results: products.length,

    data: {
      products,
    },
    totalResults,
    pageSize,
    page,
  });
};
const addProduct = async (req, res) => {
  try {
    const { _id, ...data } = await productModel.create(req.body);
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

const replaceProduct = async (req, res) => {
  try {
    const reqId = req.params.id;
    const data = { ...req.body, _id: reqId };
    const result = await productModel.findOneAndUpdate({ _id: reqId }, data);
    console.log(req);
    res.json({
      status: "success",
      data: {
        products: result,
      },
    });
  } catch (err) {
    res.status(500);
    res.json({
      status: "fail",
      message: JSON.stringify(err),
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const reqId = req.params.id;
    const result = await productModel.findOneAndDelete({ _id: reqId });
    res.json({
      status: "Data Deleted",
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
  getAllProducts,
  addProduct,
  replaceProduct,
  deleteProduct,
};
