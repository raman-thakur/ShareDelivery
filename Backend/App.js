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
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
app.use(cookieParser());
const methodOverride = require("method-override");
app.use(methodOverride("_method"));
const http = require("http");
const cors = require("cors");
app.use(cors({ credentials: true, origin: ("http://localhost:"+process.env.frontendport) }));

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

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////TESTING ROUTES/////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

  app.get("/", (req, res) => {
    res.send("this is the landing page");
  });

  app.get("/login", (req, res) => {
    res.send("login page");
  });

  app.get("/register", (req, res) => {
    res.send("new user registeration page");
  });

 



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////USER ROUTES//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  app.get("/users", (req, res) => {
    User.find().then((data) => {
      console.log(data);
      res.send(data);
    });
  });

  app.get("/user/:id", jasonParser, (req, res) => {
    const { id } = req.params;
    User.findById(id).then((data) => {
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
  
    User.findOne({ email: req.body.email }).then((existingUser) => {
      if (existingUser)
      {
        console.log("user already exist with given email kindly login")
        res.send("login page")
      } 
      else
      {
        bcrypt.hash(req.body.password, Number(process.env.SaltRounds), function (err, hash) {
          if (err) throw err;
      
          data.password = hash;
          data.save().then((result) => {
            // jwt.sign(
            //   { result },
            //   process.env.jwtkey,
            //   { expiresIn: "30000d" },
            //   (err, token) => {
            //     res.cookie("jwt", token);
            //     res.redirect("http://localhost:3000/");
            //   }
            // );
            console.log(result)
            res.send("data saved succesfully")
          });
        });
      }
    });
  });
  
  app.put("/user/:id", jasonParser, async (req, res) => {
    let { id } = req.params; //this is for production
    // id = id.slice(1, id.length); //this is for running
  
    const prevcustomer = await User.findById(id);
    await User.findByIdAndUpdate(id, req.body, {
      runValidators: true,
      new: true,
    });
    res.send("user detail updated!!");
  });
  
  ////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////REQUEST ROUTES/////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////
  app.get("/requests", (req, res) => {
    Request.find().then((data) => {
      console.log(data);
      res.send(data);
    });
  });

  app.get("/request/:id", jasonParser, (req, res) => {
    const { id } = req.params;
    Request.findById(id).then((data) => {
      res.send(data);
    });
  });

  app.post("/request", jasonParser, function (req, res) {
    let data = new Request({
      _id: new mongoose.Types.ObjectId(),
      requestedby: req.body.requestedby,
      requiredvalue: req.body.requiredvalue,
      raisedate: new Date(),
      deadlinehours: req.body.deadlinehours,
      website: req.body.website,
    });
    
    data.save().then((result)=>{
      console.log(result)
      res.send("new request generated")
    })
  });

  app.put("/request/:id", jasonParser, async (req, res) => {
    let { id } = req.params; //this is for production
    // id = id.slice(1, id.length); //this is for running
  
    const prevcustomer = await Request.findById(id);
    let data = new Request({
      _id: id,
      requestedby: req.body.requestedby,
      requiredvalue: req.body.requiredvalue,
      raisedate: new Date(),
      deadlinehours: req.body.deadlinehours,
      website: req.body.website,
    });
    await Request.findByIdAndUpdate(id, data, {
      runValidators: true,
      new: true,
    });
    res.send("request updated!!");
  });

  app.delete("/request/delete/:id", jasonParser, async (req, res) => {
    let { id } = req.params;
    // id = id.slice(1, id.length);
    await Request.findByIdAndDelete(id);
    res.send("request deleted");
  });

  app.listen(process.env.PORT);

