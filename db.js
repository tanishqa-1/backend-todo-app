const mongoose = require('mongoose');
const dbUrl = process.env.MONGO_URL;

const connectDb = async() => {
  try {
    const connect = await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("error--", error);
    process.exit(1);
  }
}

module.exports = connectDb;