const mongoose = require("mongoose");
const data = require("./data.js"); // Imported data.js
const Listing = require("../models/listing.js");
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
    .then(() => {
        console.log("connected to DB");
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(MONGO_URL);
}

// to initialise data
const initDB = async () => {
    await Listing.deleteMany({});
    await Listing.insertMany(data); // Use `data` directly
    console.log("data was initialised");
};

initDB();