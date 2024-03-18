import connectDB from '../Config/db.js';

export const getHotelData = async (req, res) => {
    try {
        const db = await connectDB();
        const collection = db.collection(process.env.Collection_Name);
        const data = await collection.find({}).toArray();
        res.json(data);
    } catch (error) {
        console.error('Error fetching hotel data:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const filterByQueryParameter = async (req, res, queryField, queryValue) => {
    try {
        const db = await connectDB();
        const collection = db.collection(process.env.Collection_Name);
        const query = {};
        query[queryField] = queryValue;
        const data = await collection.find(query).toArray();
        res.json(data);
    } catch (error) {
        console.error(`Error filtering by ${queryField}:`, error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const getHotelDataByCity = async (req, res) => {
    const { city } = req.query;
    filterByQueryParameter(req, res, 'city', city);
};

export const getHotelDataByNeighborhood = async (req, res) => {
    const { neighborhood } = req.query;
    filterByQueryParameter(req, res, 'neighborhood', neighborhood);
};

export const getHotelDataByDistance = async (req, res) => {
    try {
        const { distance } = req.query;
        const [longitude, latitude] = distance.split(',').map(parseFloat);
        const db = await connectDB();
        const collection = db.collection(process.env.Collection_Name);
        const query = {
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude]
                    }
                }
            }
        };
        const data = await collection.find(query).toArray();
        res.json(data);
    } catch (error) {
        console.error('Error fetching hotel data by distance:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const getHotelDataByGuestsIncluded = async (req, res) => {
    const { guests_included } = req.query;
    filterByQueryParameter(req, res, 'guests_included', parseInt(guests_included));
};

export const filterByCheckInOutDates = async (req, res) => {
    const { check_in, check_out } = req.query;
    const checkInDate = new Date(check_in);
    const checkOutDate = new Date(check_out);
    try {
        const db = await connectDB();
        const collection = db.collection(process.env.Collection_Name);
        const data = await collection.find({
            check_in_date: { $lte: checkOutDate },
            check_out_date: { $gte: checkInDate }
        }).toArray();
        res.json(data);
    } catch (error) {
        console.error('Error filtering by check-in and check-out dates:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const filterByAvailabilityDates = async (req, res) => {
    const { available_from, available_to } = req.query;
    const startDate = new Date(available_from);
    const endDate = new Date(available_to);
    filterByQueryParameter(req, res, {
        available_from: { $lte: endDate },
        available_to: { $gte: startDate }
    });
};

export const filterByPropertyType = async (req, res) => {
    const { type } = req.query;
    filterByQueryParameter(req, res, 'property_type', type);
};

export const filterByGuests = async (req, res) => {
    const { guests } = req.query;
    filterByQueryParameter(req, res, 'guests_included', parseInt(guests));
};

export const filterByBedrooms = async (req, res) => {
    const { bedrooms } = req.query;
    filterByQueryParameter(req, res, 'bedrooms', parseInt(bedrooms));
};

export const filterByBeds = async (req, res) => {
    const { beds } = req.query;
    filterByQueryParameter(req, res, 'beds', parseInt(beds));
};

export const filterByBathrooms = async (req, res) => {
    const { bathrooms } = req.query;
    filterByQueryParameter(req, res, 'bathrooms', parseInt(bathrooms));
};

export const getRandomAmenities = async (req, res) => {
    try {
        const amenities = ["TV", "Wifi", "Kitchen", "Heating", "Family/kid friendly", "Washer", "Essentials", "Hangers", "Hair dryer", "Iron", "Hot water", "Bed linens", "Microwave", "Coffee maker", "Refrigerator", "Dishwasher", "Oven", "Stove"];
        const basicAmenity = amenities[Math.floor(Math.random() * amenities.length)];
        const additionalAmenity = amenities[Math.floor(Math.random() * amenities.length)];
        const db = await connectDB();
        const collection = db.collection(process.env.Collection_Name);
        const data = await collection.find({ basic_amenities: basicAmenity, additional_amenities: additionalAmenity }).toArray();
        res.json(data);
    } catch (error) {
        console.error('Error getting random amenities:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const filterByMinAndMaxPrice = async (req, res) => {
    const { min_price, max_price } = req.query;
    const minPrice = parseFloat(min_price);
    const maxPrice = parseFloat(max_price);
    filterByQueryParameter(req, res, 'price', { $gte: minPrice, $lte: maxPrice });
};

export const filterByPriceRange = async (req, res) => {
    const { price_range } = req.query;
    const [minPrice, maxPrice] = price_range.split('-').map(parseFloat);
    filterByQueryParameter(req, res, 'price', { $gte: minPrice, $lte: maxPrice });
};

export const filterByMinRating = async (req, res) => {
    const { min_rating } = req.query;
    filterByQueryParameter(req, res, 'rating', { $gte: min_rating });
};

export const filterBySuperhostStatus = async (req, res) => {
    filterByQueryParameter(req, res, 'superhost', true);
};

export const filterByReviewCount = async (req, res) => {
    const { reviews } = req.query;
    filterByQueryParameter(req, res, 'review_count', reviews);
};

export const filterByReviewScore = async (req, res) => {
    const { review_score } = req.query;
    filterByQueryParameter(req, res, 'review_score', review_score);
};
export const filterByInstantBook = async (req, res) => {
    filterByQueryParameter(req, res, 'instant_book', true);
};

export const filterByCancellationPolicy = async (req, res) => {
    const { cancellation_policy } = req.query;
    filterByQueryParameter(req, res, 'cancellation_policy', cancellation_policy);
};

export const filterByAccessibility = async (req, res) => {
    const { accessibility } = req.query;
    filterByQueryParameter(req, res, 'accessibility', accessibility);
};

export const filterByHouseRules = async (req, res) => {
    const { smoking_allowed, pets_allowed, events_allowed } = req.query;
    const query = {};
    if (smoking_allowed) query.smoking_allowed = true;
    if (pets_allowed) query.pets_allowed = true;
    if (events_allowed) query.events_allowed = true;
    filterByQueryParameter(req, res, query);
};

export const filterByPropertyFacilities = async (req, res) => {
    const { facilities } = req.query;
    filterByQueryParameter(req, res, 'facilities', facilities);
};
