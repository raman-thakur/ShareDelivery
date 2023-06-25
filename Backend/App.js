const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://raman11012001:Raman111@sharedelivery.hhx0ejz.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.warn("you are sucessfully connected to mongodb atlas");
  });


  app.get("/", (req, res) => {
    res.send("i love you   but you don't");
  });

  app.listen(8000);