const mongoose = require('mongoose');

const SpeciesSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    trim: true,
    required: true,
    unique: true
  },
  classification: {
    type: String,
    trim: true,
    required: true
  },
  eye_colors: {
    type: String,
    trim: true,
    required: true

  },
  hair_colors: {
    type: String,
    trim: true,
    required: true

  }
}, { versionKey: false });

module.exports = mongoose.model('Species', SpeciesSchema);