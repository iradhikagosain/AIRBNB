const mongoose = require("mongoose"); // Import mongoose
const Schema = mongoose.Schema; // Destructure Schema from mongoose

// Define the schema FIRST
const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        default: "No description provided.",
    },
    image: {
        type: String,
        set: (v) =>
            v === ""
                ? "https://unsplash.com/photos/a-red-blue-and-green-fluid-painting-on-a-black-background-hoS3dzgpHzw"
                : v,
    },
    price: {
        type: Number,
        default: 0,
    },
    location: {
        type: String,
        default: "Unknown",
    },
    country: {
        type: String,
        default: "Unknown",
    },
});

// Create the model AFTER the schema is fully declared
const Listing = mongoose.model("Listing", listingSchema);

// Export the model for use in other files
module.exports = Listing;