const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  category: String,
  group: String,
  subgroup: String,
  indicator: String,
  sources: String,
  baseline: String,
  //BASELINE IS 2013
  firstUpdate: String,
  //FIRST UPDATE IS YEAR 2017
  secondUpdate: String,
  //SECOND UPDATE IS YEAR 2020
  notes: String
})

const Data = mongoose.model('Data', dataSchema)

module.exports = Data;