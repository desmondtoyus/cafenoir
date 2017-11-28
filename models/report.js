const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reportSchema = new Schema({
  useremail: { type: String, required: true },
  location: { type: String, required: true },
  phone: { type: String},
  email: { type: String},
  description: { type: String, required: true },
  category: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Report = mongoose.model("report", reportSchema);

module.exports = Report;
