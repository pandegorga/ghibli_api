const mongoose = require('mongoose');

const FilmSchema = new mongoose.Schema({
  id: {
    type: String,
    required:true,
    trim: true,
  },
  title: {
    type: String,
    trim: true,
    // unique: true
  },
  description: {
    type: String,
    trim: true,
  },
  director: {
    type: String,
    trim: true,
  },
  producer: {
    type: String,
    trim: true,
  },
  release_date: {
    type: Date,
    trim: true,
  },
  rt_score: {
    type: Number,
    trim:true
  },
  people: {type: mongoose.Schema.Types.ObjectId, ref:'People'},
  location: {type: mongoose.Schema.Types.ObjectId, ref: 'Location' },    
  species: {type: mongoose.Schema.Types.ObjectId, ref: 'Species' },    
}, { versionKey: false });

module.exports = mongoose.model('Film', FilmSchema);