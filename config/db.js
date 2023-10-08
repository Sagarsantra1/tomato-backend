require('dotenv').config(); // Load environment variables from .env file

module.exports = {
    mongodbURI: process.env.MONGODB_URI || 'mongodb://localhost:27017/mydb',
  };
  