const Post = require('../models/post.models');
const User = require('../models/user.models');

module.exports = {
  list(req, res) {
    Post
      .find()
      .populate('author', 'email')
      .then(posts => res.status(200).json(posts))
      .catch(err => res.status(500).json(err))
  },
  show(req, res) {
    const { postId } = req.params;

    Post
      .findById(postId)
      .populate({ path: 'author', select: 'posts', populate: { path: 'posts' } })
      .then(post => res.status(200).json(post))
      .catch(err => res.status(404).json(err))
  },
  create(req, res) {
    const { userId } = req.params;

    Post
      .create({ ...req.body, author: userId })
      .then(post => {
        User
          .findById(userId)
          .then(user => {
            user.posts.push(post);
            user
              .save({ validateBeforeSave: false })
              .then(() => res.status(201).json(post))
          })
      })
      .catch(err => res.status(400).json(err))
  }
}
