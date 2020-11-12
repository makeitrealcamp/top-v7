const router = require('express').Router();
const bookController = require('../controllers/book.controller');

router.route('/').get(bookController.list);
router.route('/:bookId').get(bookController.show);
router.route('/').post(bookController.create);
router.route('/:bookId').put(bookController.update);
router.route('/:bookId').delete(bookController.destroy);

module.exports = router;
