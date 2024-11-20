// Requiring packages
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing=require("./models/listing.js");

//creating database
const MONGO_URL="mongodb://127.0.0.1:27017/wanderlust";

//to call main function
main().then(()=>
{
    console.log("connected to Db");
}

)
.catch((err)=>
{
console.log(err);
});

//CONNECTING database
async function main() {
    await mongoose.connect(MONGO_URL);
    
}
// Making API
app.get("/", (req, res) => {
    res.send("API is working");
});

app.get("/testListing", async(req,res)=>
{
    let sampleListing=new Listing(
        {
            title:"my home",
            description:"by beach",
            price:1299,
            location:"goa",
            country:"India",
        }
    );

    await sampleListing.save();
    console.log("sample was saved");
    res.send("successfull testing");


});

// Starting server
app.listen(8080, () => {
    console.log("Server is listening on port 8080");
});