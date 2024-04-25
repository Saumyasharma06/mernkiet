const reviewsModel = require('../models/reviewsModel');

const getAllReviews = async (req, res) => {
    try{
        const data = await reviewsModel.getAllReviews();
        res.status(200);
        res.json({
            status: 'success',
            results: data.length,
            data: {
                reviews: data,
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

const addReview = async (req, res) => {
    try{
        const data = req.body;
        const dataObj = await reviewsModel.addReview(data);
        res.json({
            status: 'success',
            results: 1,
            data: {
                newProduct: data,
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

const updateReview = async (req, res)=>{
    try{
        const reqId = req.params.id;
        const data = req.body;
        const dataObj = await reviewsModel.updateReview(reqId, data);
        res.json({
            status: 'success',
            results: 1,
            data: {
                newProduct: data,
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

const deleteReview = async (req, res)=>{
    try{
        const reqId = req.params.id;
        const dataObj = await reviewsModel.deleteReview(reqId);
        res.json({
            status: 'success',
            results: 1,
            data: {
                newProduct: data,
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
    getAllReviews,
    addReview,
    updateReview,
    deleteReview,
}