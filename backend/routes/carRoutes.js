import express from 'express';
const router = express.Router();
import Car from '../models/carModel.js';
import asyncHandler from '../middleware/asyncHandler.js';

router.get('/',asyncHandler(async (req, res) => {
    console.log('Before querying the database');
    const cars = await Car.find({});
    console.log('after querying the database');

    res.json(cars);
  }))

// router.route('/').get(getProducts).post(protect, admin, createProduct);
// router.get('/top',getTopProducts);
// router.route('/:id').get(checkObjectId, getProductById)
//                     .put(protect, admin, checkObjectId, updateProduct)
//                     .delete(protect, admin, checkObjectId, deleteProduct);
// router.route('/:id/reviews').post(protect, checkObjectId, createProductReview);

export default router;
