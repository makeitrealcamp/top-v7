const Book = require('../models/book.model');
// const axios = require('axios')

module.exports = {
  list(req, res) {
    // axios({
    //   method: 'GET',
    //   baseURL: 'https://jsonplaceholder.typicode.com',
    //   url: '/posts'
    // })
    //   .then(response => console.log(response))
    Book
      .find()
      .then(books => {
        res.status(200).json({ message: 'books found', data: books })
      })
      .catch(err => {
        res.status(404).json({ message: 'books not found' })
      });
  },
  show(req, res) {
    const { bookId } = req.params;

    Book
      .findById(bookId)
      .then(book => {
        res.status(200).json({ message: 'book found', data: book })
      })
      .catch(err => {
        res.status(404).json({ message: 'book not found' })
      })
  },
  create(req, res) {
    const data = req.body;

    const newBook = {
      ...data,
      published: Date.now(),
    };

    Book
      .create(newBook)
      .then(book => {
        res.status(201).json({ message: 'book created', data: book })
      })
      .catch(err => {
        res.status(400).json({ message: 'book could not be created' })
      });
  },
  update(req, res) {
    const { bookId } = req.params;

    Book
      .findByIdAndUpdate(bookId, req.body, { new: true })
      .then(book => {
        res.status(200).json({ message: 'book updated', data: book })
      })
      .catch(err => {
        res.status(400).json({ message: 'book could not be updated' })
      });
  },
  destroy(req, res) {
    const { bookId } = req.params;

    Book
      .findByIdAndDelete(bookId)
      .then(book => {
        res.status(200).json({ message: 'book deleted', data: book })
      })
      .catch(err => {
        res.status(400).json({ message: 'book could not be deleted' })
      });
  }
}
