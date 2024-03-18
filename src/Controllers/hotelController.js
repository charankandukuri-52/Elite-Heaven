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


export const getHotelDataByCity = async (req, res) => {
    try {
        const { city } = req.query;
        const db = await connectDB();
        const collection = db.collection(process.env.Collection_Name);
        const data = await collection.find({ city }).toArray();
        res.json(data);
    } catch (error) {
        console.error('Error fetching hotel data by city:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const getHotelDataByNeighborhood = async (req, res) => {
    try {
        const { neighborhood } = req.query;
        const db = await connectDB();
        const collection = db.collection(process.env.Collection_Name);
        const data = await collection.find({ neighborhood }).toArray();
        res.json(data);
    } catch (error) {
        console.error('Error fetching hotel data by neighborhood:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


export const getHotelDataByDistance = async (req, res) => {
    try {
        const { distance } = req.query;
        const db = await connectDB();
        const collection = db.collection(process.env.Collection_Name);
        const [longitude, latitude] = distance.split(',').map(parseFloat);
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
    try {
        const { guests_included } = req.query;
        const db = await connectDB();
        const collection = db.collection(process.env.Collection_Name);
        const data = await collection.find({ guests_included: parseInt(guests_included) }).toArray();
        res.json(data);
    } catch (error) {
        console.error('Error fetching hotel data:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const filterByCheckInOutDates = async (req, res) => {
    try {
        const { check_in, check_out } = req.query;
        const checkInDate = new Date(check_in);
        const checkOutDate = new Date(check_out);
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
    try {
        const { available_from, available_to } = req.query;
        const startDate = new Date(available_from);
        const endDate = new Date(available_to);
        const db = await connectDB();
        const collection = db.collection(process.env.Collection_Name);
        const data = await collection.find({
            available_from: { $lte: endDate },
            available_to: { $gte: startDate }
        }).toArray();
        res.json(data);
    } catch (error) {
        console.error('Error filtering by availability dates:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
export const filterByPropertyType = async (req, res) => {
    try {
        const { type } = req.query;
        const db = await connectDB();
        const collection = db.collection(process.env.Collection_Name);
        const data = await collection.find({ property_type: type }).toArray();
        res.json(data);
    } catch (error) {
        console.error('Error filtering by property type:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


export const filterByGuests = async (req, res) => {
    try {
        const { guests } = req.query;
        const db = await connectDB();
        const collection = db.collection(process.env.Collection_Name);
        const data = await collection.find({ guests_included: parseInt(guests) }).toArray();
        res.json(data);
    } catch (error) {
        console.error('Error filtering by guests:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const filterByBedrooms = async (req, res) => {
    try {
        const { bedrooms } = req.query;
        const db = await connectDB();
        const collection = db.collection(process.env.Collection_Name);
        const data = await collection.find({ bedrooms: parseInt(bedrooms) }).toArray();
        res.json(data);
    } catch (error) {
        console.error('Error filtering by bedrooms:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const filterByBeds = async (req, res) => {
    try {
        const { beds } = req.query;
        const db = await connectDB();
        const collection = db.collection(process.env.Collection_Name);
        const data = await collection.find({ beds: parseInt(beds) }).toArray();
        res.json(data);
    } catch (error) {
        console.error('Error filtering by beds:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const filterByBathrooms = async (req, res) => {
    try {
        const { bathrooms } = req.query;
        const db = await connectDB();
        const collection = db.collection(process.env.Collection_Name);
        const data = await collection.find({ bathrooms: parseInt(bathrooms) }).toArray();
        res.json(data);
    } catch (error) {
        console.error('Error filtering by bathrooms:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
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
    try {
        const { min_price, max_price } = req.query;
        const db = await connectDB();
        const collection = db.collection(process.env.Collection_Name);
        
        const minPrice = parseFloat(min_price);
        const maxPrice = parseFloat(max_price);
        const data = await collection.find({ 
            price: { $gte: minPrice, $lte: maxPrice } 
        }).toArray();

        res.json(data);
    } catch (error) {
        console.error('Error filtering by price range:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
export const filterByPriceRange = async (req, res) => {
    try {
        const { price_range } = req.query;
        const db = await connectDB();
        const collection = db.collection(process.env.Collection_Name);
        const [minPrice, maxPrice] = price_range.split('-').map(parseFloat);
        const data = await collection.find({ 
            price: { $gte: minPrice, $lte: maxPrice } 
        }).toArray();

        res.json(data);
    } catch (error) {
        console.error('Error filtering by price range:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
export const filterByMinRating = async (req, res) => {
    try {
        const { min_rating } = req.query;
        const db = await connectDB();
        const collection = db.collection(process.env.Collection_Name);
        const data = await collection.find({ rating: { $gte: min_rating } }).toArray();
        res.json(data);
    } catch (error) {
        console.error('Error filtering by minimum rating:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const filterBySuperhostStatus = async (req, res) => {
    try {
        const db = await connectDB();
        const collection = db.collection(process.env.Collection_Name);
        const data = await collection.find({ superhost: true }).toArray();
        res.json(data);
    } catch (error) {
        console.error('Error filtering by superhost status:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const filterByReviewCount = async (req, res) => {
    try {
        const { reviews } = req.query;
        const db = await connectDB();
        const collection = db.collection(process.env.Collection_Name);
        const data = await collection.find({ review_count: reviews }).toArray();
        res.json(data);
    } catch (error) {
        console.error('Error filtering by review count:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const filterByReviewScore = async (req, res) => {
    try {
        const { review_score } = req.query;
        const db = await connectDB();
        const collection = db.collection(process.env.Collection_Name);
        const data = await collection.find({ review_score: review_score }).toArray();
        res.json(data);
    } catch (error) {
        console.error('Error filtering by review score:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};