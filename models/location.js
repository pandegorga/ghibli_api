const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema({
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
  climate: {
    type: String,
    trim: true,
    required: true
  },
  terrain: {
    type: String,
    trim: true,
    required: true

  },
  surface_water: {
    type: String,
    trim: true,
    required: true

  }
}, { versionKey: false });

module.exports = mongoose.model('Location', LocationSchema);