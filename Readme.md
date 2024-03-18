# Accommodations API Documentation

## Introduction

This API provides endpoints to fetch and filter accommodations data. Accommodations include hotels, apartments, houses, etc., available for rent or booking.

## Hotel Data API

### Get All Hotel Data

```
GET /api/hotels
```

This endpoint retrieves all hotel data from the database.

## Accommodations API

### Filter by City

```
GET /api/accommodations/city?city={city_name}
```

Filters accommodations based on the specified city.

### Filter by Neighborhood

```
GET /api/accommodations/neighborhood?neighborhood={neighborhood_name}
```

Filters accommodations based on the specified neighborhood.

### Filter by Distance from a Specific Point

```
GET /api/accommodations/distance?distance={longitude},{latitude}
```

Filters accommodations based on the distance from a specific point specified by longitude and latitude coordinates.

### Filter by Guests Included

```
GET /api/accommodations/guests_included?guests_included={guest_count}
```

Filters accommodations based on the number of guests included.

### Filter by Check-in and Check-out Dates

```
GET /api/accommodations/checkInOut?check_in={check_in_date}&check_out={check_out_date}
```

Filters accommodations based on the availability for the specified check-in and check-out dates.

### Filter by Availability for Specific Dates

```
GET /api/accommodations/availability?available_from={start_date}&available_to={end_date}
```

Filters accommodations based on availability for the specified start and end dates.

### Filter by Property Type

```
GET /api/accommodations?type={property_type}
```

Filters accommodations based on the specified property type (e.g., entire_home, private_room, shared_room, unique_stays).

### Filter by Guests

```
GET /api/accommodations/guests?guests={guest_count}
```

Filters accommodations based on the number of guests.

### Filter by Bedrooms

```
GET /api/accommodations/bedrooms?bedrooms={bedroom_count}
```

Filters accommodations based on the number of bedrooms.

### Filter by Beds

```
GET /api/accommodations/beds?beds={bed_count}
```

Filters accommodations based on the number of beds.

### Filter by Bathrooms

```
GET /api/accommodations/bathrooms?bathrooms={bathroom_count}
```

Filters accommodations based on the number of bathrooms.

### Filter by Minimum and Maximum Price

```
GET /api/accommodations/min-max?min_price={min_price}&max_price={max_price}
```

Filters accommodations based on the minimum and maximum price range.

### Filter by Price Range

```
GET /api/accommodations/price-range?price_range={min_price}-{max_price}
```

Filters accommodations based on the specified price range.

### Filter by Minimum Rating

```
GET /api/accommodations/min-rating?min_rating={min_rating}
```

Filters accommodations based on the minimum rating.

### Filter by Superhost Status

```
GET /api/accommodations/superhost?superhost=true
```

Filters accommodations based on superhost status.

### Filter by Number of Reviews

```
GET /api/accommodations/reviews?reviews={review_count}
```

Filters accommodations based on the number of reviews.

### Filter by Review Score

```
GET /api/accommodations/review-score?review_score={score_value}
```

Filters accommodations based on the review score.

### Filter by Instant Bookable Listings

```
GET /api/accommodations/instant-book?instant_book=true
```

Filters accommodations based on instant bookable listings.

### Filter by Cancellation Policy

```
GET /api/accommodations/cancellation-policy?cancellation_policy={policy}
```

Filters accommodations based on the specified cancellation policy (e.g., flexible, moderate, strict).

### Filter by Accessibility Features

```
GET /api/accommodations/accessibility?accessibility_features={feature}
```

Filters accommodations based on accessibility features.

### Filter by House Rules

```
GET /api/accommodations/house-rules?{rule}=true
```

Filters accommodations based on house rules (e.g., smoking allowed, pets allowed, suitable for events).

### Filter by Property Facilities

```
GET /api/accommodations/property-facilities?facilities={facility}
```

Filters accommodations based on property facilities (e.g., gym, hot tub, fireplace, air conditioning).
