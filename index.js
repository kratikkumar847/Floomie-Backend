require("dotenv").config()

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());


// mongoDB connection 
mongoose.set('strictQuery', true);
mongoose.connect(process.env.DB_URI, ()=>{
    console.log("MongoDB is Connected");
})



const homeRoutes = require("./routes/home.router");
const userAuth = require("./routes/auth.user.router");
const renterAuth = require("./routes/auth.renter.router");
const postrouter = require("./routes/post.router");


app.use( homeRoutes );
app.use('/floomie/v1/api', userAuth)
app.use('/floomie/v1/api', renterAuth)
app.use('/floomie/v1/api', postrouter)



app.listen(process.env.PORT, ()=>{
    console.log(`Floomie backend server is started on http://localhost:${process.env.PORT}`);
})