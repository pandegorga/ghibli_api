const mongoose = require('mongoose');

const VehicleSchema = new mongoose.Schema({
  id: {
    type: String,
    trim: true,
    required: true
  },
  name: {
    type: String,
    trim: true,
    unique: true,    
    required: true
  },
  vehicle_class: {
    type: String,
    trim: true,
    required: true
  },
  length: {
    type: String,
    trim: true,
    required: true
  },
  pilot: {type: mongoose.Schema.Types.ObjectId, ref: 'Person' },  
  film: { type: mongoose.Schema.Types.ObjectId, ref: 'Film' } 
}, { versionKey: false });

module.exports = mongoose.model('Vehicle', VehicleSchema);