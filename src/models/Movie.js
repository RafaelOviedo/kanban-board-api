const mongoose = require('mongoose');
const { Schema } = mongoose;

const movieSchema = new Schema({
  name: { type: String, required: true, minLength: 3 },
  category: { type: String, required: true, minLength: 3 },
  category_name: { type: String, required: true, minLength: 3 },
  year: { type: Number, required: true, min: 1900  },
  director: { type: String, required: true, minLength: 3 },
})

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;