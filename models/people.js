const mongoose = require('mongoose');


const PeopleSchema = new mongoose.Schema({
  id: {
    type: String,
    trim: true,
    required: true
  },
  name: {
    type: String,
    trim: true,
    required: true,
    unique: true
  },
  gender: {
    type: String,
    trim: true,
    required: true
  },
  age: {
    type: String,
    trim: true,
    required: true

  },
  eye_color: {
    type: String,
    trim: true,
    required: true

  },
  hair_color: {
    type: String,
    trim: true,
    required: true
  },
  species: {type: mongoose.Schema.Types.ObjectId, ref: 'Species' },    
}, { versionKey: false });

module.exports = mongoose.model('People', PeopleSchema);