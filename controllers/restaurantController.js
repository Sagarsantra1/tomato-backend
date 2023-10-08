const Restaurant = require('../models/Restaurant');

// Get all restaurants
exports.getAllRestaurants = async (req, res) => {
    try {
        const restaurants = await Restaurant.find();
        res.json(restaurants);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Get a single restaurant by city
exports.getRestaurantByCity = async (req, res) => {
    try {
        const { select, cuisine, CostPerPersonmin, CostPerPersonmax, q, sort, order, rating } = req.query;
        let selectedFields = select ? select.split(',') : [];

        const query = { city: req.params.city };

        if (cuisine) {
            query.cuisine = { $in: cuisine };
        }
        if (rating) {
            query.rating = { $gte: parseFloat(rating) };
        }
        if (CostPerPersonmin && CostPerPersonmax) {
            query.costPerPerson = { $gte: parseFloat(CostPerPersonmin), $lte: parseFloat(CostPerPersonmax) };
        }
        if (q) {
            const regexPattern = new RegExp(`.*${q}.*`, 'i');
            query.name = { $regex: regexPattern };
        }

        const sortOptions = sort ? { [sort]: order ? parseInt(order) : 1 } : {};

        const restaurants = await Restaurant.find(query, selectedFields).sort(sortOptions);
        if (!restaurants) {
            res.status(404).json({ error: 'Restaurant not found' });
        } else {
            res.json(restaurants);
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Get a single restaurant by slug
exports.getRestaurantBySlug = async (req, res) => {
    try {
        const { select } = req.query;
        let selectedFields = select ? select.split(',') : [];

        const restaurant = await Restaurant.findOne({ slug: req.params.slug }, selectedFields);
        if (!restaurant) {
            res.status(404).json({ error: 'Restaurant not found' });
        } else {
            res.json(restaurant);
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
