const mongoose = require("mongoose");
require("dotenv").config({ path: "./configurations/.env" });

const dbURL = process.env.MONGO_DB_URL;
console.log("dbURL: " + dbURL);

const configDatabase = async () => {
  try {
    await mongoose.connect(dbURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true
    });
    console.log("Database connected");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = configDatabase;
