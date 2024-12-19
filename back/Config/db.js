const dotenv = require("dotenv"); 
dotenv.config({ path: "./.env" });

const mongoose = require("mongoose");

console.log("Database URI:", process.env.DATABASE);

const DB = process.env.DATABASE.replace(
  "<db_password>",
  process.env.DATABASE_PASSWORD
);

const connectDB = () => {
  mongoose
    .connect(DB)
    .then(() => {
      console.log("connection secured!!!!");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDB;

