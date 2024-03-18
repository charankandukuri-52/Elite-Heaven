import express from 'express';
import { 
    getHotelData, 
    getHotelDataByCity, 
    getHotelDataByNeighborhood, 
    getHotelDataByDistance, 
    getHotelDataByGuestsIncluded, 
    filterByCheckInOutDates, 
    filterByAvailabilityDates, 
    filterByPropertyType, 
    filterByGuests, 
    filterByBedrooms, 
    filterByBeds, 
    filterByBathrooms, 
    filterByMinAndMaxPrice, 
    filterByPriceRange, 
    filterByMinRating, 
    filterBySuperhostStatus, 
    filterByReviewCount, 
    filterByReviewScore, 
    filterByInstantBook, 
    filterByCancellationPolicy, 
    filterByAccessibility, 
    filterByHouseRules, 
    filterByPropertyFacilities 
} from '../Controllers/hotelController.js';

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
router.get('/accommodations/min-max', filterByMinAndMaxPrice);
router.get('/accommodations/price-range', filterByPriceRange);
router.get('/accommodations/min-rating', filterByMinRating);
router.get('/accommodations/superhost', filterBySuperhostStatus);
router.get('/accommodations/reviews', filterByReviewCount);
router.get('/accommodations/review-score', filterByReviewScore);
router.get('/accommodations/instant-book', filterByInstantBook);
router.get('/accommodations/cancellation-policy', filterByCancellationPolicy);
router.get('/accommodations/accessibility', filterByAccessibility);
router.get('/accommodations/house-rules', filterByHouseRules);
router.get('/accommodations/property-facilities', filterByPropertyFacilities);

export default router;
