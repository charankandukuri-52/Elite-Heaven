import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({ path: '../../.env' });

const hotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    summary: String,
    description: String,
    address: {
        street: String,
        city: String,
        state: String,
        country: String,
        postalCode: String
    },
    location: {
        type: { type: String },
        coordinates: [Number]
    },
    propertyType: {
        type: String,
        enum: ['Entire home/apt', 'Private room', 'Shared room', 'Treehouse', 'Boat', 'Other']
    },
    roomType: String,
    price: Number,
    currency: String,
    minimumNights: Number,
    maximumNights: Number,
    capacity: {
        guests: Number,
        bedrooms: Number,
        beds: Number,
        bathrooms: Number
    },
    amenities: [String],
    photos: [String],
    reviews: [{
        rating: Number,
        comment: String,
        date: Date
    }],
    superhost: Boolean,
    instantBook: Boolean,
    cancellationPolicy: {
        type: String,
        enum: ['flexible', 'moderate', 'strict']
    },
    houseRules: {
        smokingAllowed: Boolean,
        petsAllowed: Boolean,
        suitableForEvents: Boolean
    },
    facilities: [String],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const HotelSchema = mongoose.model('Hotel', hotelSchema);

export default HotelSchema;
