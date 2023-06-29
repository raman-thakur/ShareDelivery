const mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String },
  email: {
    type: String,
    unique: true,
  },
  phonenumber: {type: String},
  pincode: {type: String},
  city: { type: String },
  landmark: {type: String},
  password: { type: String },
}, {
  versionKey: false 
});

module.exports = mongoose.model("users", userSchema);