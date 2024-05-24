const mongoose = require('mongoose');
const { Schema } = mongoose;

const movieCategoryColumnSchema = new Schema({
  column: { type: String, required: true, minLength: 3 },
  column_name: { type: String, required: true, minLength: 3 }
})

const MovieCategoryColumn = mongoose.model('MovieCategoryColumn', movieCategoryColumnSchema);

module.exports = MovieCategoryColumn;