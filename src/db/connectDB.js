const mongoose = require("mongoose");
require("dotenv").config();

const getConnectionString = () => {
  let connectionUrl = process.env.DATABASE_LOCAL;

  // Replacing placeholders with actual username and password from environment variables
  connectionUrl = connectionUrl.replace(
    "<username>",
    process.env.DATABASE_LOCAL_USERNAME
  );
  connectionUrl = connectionUrl.replace(
    "<password>",
    process.env.DATABASE_LOCAL_PASSWORD
  );

  console.log("Database Connection URL:", connectionUrl); // Log for debugging purposes
  return connectionUrl;
};

const connectDB = async () => {
  try {
    console.log("Connecting to database...");
    const mongoURI = getConnectionString();

    await mongoose.connect(mongoURI, {
      dbName: process.env.DB_NAME,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to database");
  } catch (error) {
    console.error("Error connecting to database:", error.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
