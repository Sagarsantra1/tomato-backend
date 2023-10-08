const mongoose = require('mongoose');

// Define the city schema
const citySchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true, 
    required: true, 
  },
  slug: {
    type: String,
    unique: true, 
    required: true, 
  },
});

// Create the city model
const City = mongoose.model('City', citySchema);

module.exports = City;
