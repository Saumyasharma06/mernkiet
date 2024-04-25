const express = require('express');

const reviewController = require('../controllers/reviewsController.js');

const reviewRouter = express.Router();

reviewRouter.route('/')
.get(reviewController.getAllReviews)
.post(reviewController.addReview)

reviewRouter.route('/:id')
.put(reviewController.updateReview)
.delete(reviewController.deleteReview)

module.exports = reviewRouter;
