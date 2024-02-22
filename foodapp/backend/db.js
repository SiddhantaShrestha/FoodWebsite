const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://foodWeb:Sid_markys123@cluster0.wn50i14.mongodb.net/foodWEB?retryWrites=true&w=majority";

const mongoDB = async () => {
  try {
    // Connect to MongoDB Atlas
    await mongoose.connect(mongoURI);

    console.log("Connected successfully");

    // Access the MongoDB collection
    const fetched_data = mongoose.connection.db.collection("food_items");

    // Use .find to query documents
    const data = await fetched_data.find({}).toArray();

    const foodCategory = await mongoose.connection.db.collection(
      "food_category"
    );
    const catData = await foodCategory.find({}).toArray();

    global.food_items = data;
    global.foodCategory = catData;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = mongoDB;
