const { Schema, model } = require('mongoose');

const bookSchema = new Schema({
  title: String,
  overview: [String],
  rating: Number,
  isNew: Boolean,
  published: Date,
}, {
  timestamps: true,
});

const Book = model('Book', bookSchema);

// Book -> books

module.exports = Book;
