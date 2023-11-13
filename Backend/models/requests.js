const mongoose = require("mongoose");

let requestSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  requestedby: {type: String},
  requiredvalue: { type: Number },
  raisedate: { type: Date },
  deadlinehours: {type: Number},
  address: {type: String},
  requester: {type: String},
  pincode: {type: Number},
  contact: {type: Number},
  location:{type: String},
  website: { type: String }
}, {
  versionKey: false 
});

module.exports = mongoose.model("requests", requestSchema);