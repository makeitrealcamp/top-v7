const router = require('express').Router();
const userController = require('../controllers/user.controller');

router.route('/').post(userController.create)
router.route('/:id').put(userController.enable2fa)
router.route('/:id').post(userController.verify)

module.exports = router;
