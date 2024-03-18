// routes/hotelRoutes.js
import express from 'express';
import { getHotelData } from '../controllers/hotelController.js';

const router = express.Router();

router.get('/hotels', getHotelData);

export default router;
