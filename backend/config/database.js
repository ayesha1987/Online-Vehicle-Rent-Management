const mongoose = require('mongoose');
require('dotenv').config()

const DB_connection = async () => {
  try {
    const connect = await mongoose.connect(process.env.DATABASE);
    console.log(`MongoDB database connection established successfully!`);
  } catch (err) {
    console.log('Error connecting to MongoDB');
    console.error(err.message);
    process.exit(1)
    
  }
};

module.exports=DB_connection;