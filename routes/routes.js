const express = require('express');
const router = express.Router();
const cityController = require('../controllers/cityController'); // Import city controller
const restaurantController = require('../controllers/restaurantController'); // Import restaurant controller

// Cities Routes
router.get('/cities', cityController.getAllCities);
router.get('/cities/:id', cityController.getCityById);

// Restaurants Routes
router.get('/restaurants', restaurantController.getAllRestaurants);
router.get('/restaurants/:city', restaurantController.getRestaurantByCity);
router.get('/restaurants/:city/:slug', restaurantController.getRestaurantBySlug);


module.exports = router;
