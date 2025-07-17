const mongoose = require("mongoose");
require('dotenv').config()

// Insert your connection string inside this variable
const connectionString = 'mongodb+srv://guimeyer64:ltGcDQzb95gqs7bD@cluster0.p63mzk5.mongodb.net/hackatweet';

mongoose.set("strictQuery", true); // Remove Mongoose warning in console

mongoose
    .connect(connectionString, { connectTimeoutMS: 2000 })
    .then(() => console.log("Database connected"))
    .catch(error => console.error(error));


module.exports = connectionString; // Do not edit/remove this line
