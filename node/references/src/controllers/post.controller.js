const Post = require('../models/post.models');
const User = require('../models/user.models');

module.exports = {
  async list(req, res) {
    const posts = await Post.find().populate('author', 'email').catch(err => {
      res.status(500).json(err)
    });
    res.status(200).json(posts);
    // Post
    //   .find()
    //   .populate('author', 'email')
    //   .then(posts => res.status(200).json(posts))
    //   .catch(err => res.status(500).json(err))
  },
  async show(req, res) {
    const { postId } = req.params;

    const post = await Post.findById(postId).populate({
      path: 'author',
      select: 'posts',
      populate: { path: 'posts' }
    })

    res.status(200).json(post)
    // Post
    //   .findById(postId)
    //   .populate({ path: 'author', select: 'posts', populate: { path: 'posts' } })
    //   .then(post => res.status(200).json(post))
    //   .catch(err => res.status(404).json(err))
  },
  async create(req, res) {
    try {
      const { userId } = req.params;

      const user = await User.findById(userId)

      if(!user) {
        throw new Error('Invalid user')
      }

      const post = await Post.create({ ...req.body, author: user })

      user.posts.push(post);
      await user.save({ validateBeforeSave: false })

      res.status(201).json(post)
    } catch(error) {
      res.status(400).json({ message: error.message })
    }
    // Post
    //   .create({ ...req.body, author: userId })
    //   .then(post => {
        // User
        //   .findById(userId)
        //   .then(user => {
            // user
            //   .save({ validateBeforeSave: false })
            //   .then(() => res.status(201).json(post))
      //     })
      // })
      // .catch(err => res.status(400).json(err))
  }
}
