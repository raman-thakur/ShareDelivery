const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const Request = require("./models/requests");
const User = require("./models/users");
const bodyParser = require("body-parser");
app.use(express.urlencoded({ extended: true }));
const jasonParser = bodyParser.json();

mongoose
  .connect(
    "mongodb+srv://"+process.env.DBUser+":"+process.env.DBPassword+"@sharedelivery.hhx0ejz.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.warn("you are sucessfully connected to mongodb atlas");
  });


  app.get("/", (req, res) => {
    res.send("this is the landing page");
  });

  app.get("/login", (req, res) => {
    res.send("login page");
  });

  app.get("/register", (req, res) => {
    res.send("new user registeration page");
  });

  app.get("/user", (req, res) => {
    User.find().then((data) => {
      console.log(data);
      res.send(data);
    });
  });

  app.post("/register", jasonParser, function (req, res) {
    let data = new User({
      _id: new mongoose.Types.ObjectId(),
      name: req.body.name,
      email: req.body.email,
      phonenumber: req.body.phonenumber,
      pincode: req.body.pincode,
      city: req.body.city,
      landmark: req.body.landmark,
      password: req.body.password,
    });
  
    
      data.save().then((result) => {
        console.log(result);
        res.send("data saved sucessfully")
      });
  });
  
  app.listen(process.env.PORT);