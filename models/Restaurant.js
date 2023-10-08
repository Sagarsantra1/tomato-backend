const mongoose = require('mongoose');

// Define the Restaurant schema
const restaurantSchema = new mongoose.Schema({
  city: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  restaurantImage: {
    type: String,
    required: true,
  },
  cuisine: [
    {
      type: String,
      required: true,
    }
  ],
  rating: {
    type: Number,
    required: true,
  },
  costPerPerson: {
    type: Number,
    required: true,
  },
  deliveryTime: {
    type: Number,
    required: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
    required: true,
  },
  images: [
    {
      type: String,
      required: true,
    },
  ],
  menu: [
    {
      image: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      category: {
        type: String,
        required: true,
      },
    },
  ],
});

// Create the Restaurant model
const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;
