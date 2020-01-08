const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  indicator: String,
  sources: String,
  year: String,
  group: String,
  value: String,
  notes: String,
  baseline: String,
  category: String
})

const Data = mongoose.model('Data', dataSchema)

module.exports = Data;