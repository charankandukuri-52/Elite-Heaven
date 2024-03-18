// routes/hotelRoutes.js
import express from 'express';
import {getHotelData, filterByPropertyType,getHotelDataByCity, getHotelDataByNeighborhood, getHotelDataByDistance,filterByGuests, filterByBedrooms, filterByBeds, filterByBathrooms, getHotelDataByGuestsIncluded,filterByCheckInOutDates, filterByAvailabilityDates } from '../Controllers/hotelController.js';

const router = express.Router();

router.get('/hotels', getHotelData);
router.get('/accommodations/city', getHotelDataByCity);
router.get('/accommodations/neighborhood', getHotelDataByNeighborhood);
router.get('/accommodations/distance', getHotelDataByDistance);
router.get('/accommodations/guests_included', getHotelDataByGuestsIncluded);
router.get('/accommodations/checkInOut', filterByCheckInOutDates);
router.get('/accommodations/availability', filterByAvailabilityDates);
router.get('/accommodations', filterByPropertyType);
router.get('/accommodations/guests', filterByGuests);
router.get('/accommodations/bedrooms', filterByBedrooms);
router.get('/accommodations/beds', filterByBeds);
router.get('/accommodations/bathrooms', filterByBathrooms);

export default router;
