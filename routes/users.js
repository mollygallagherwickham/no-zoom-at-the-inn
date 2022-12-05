const express = require('express')
const router = express.Router()

// connects to the controller
const UsersController = require('../controllers/users')

router.get('/new', UsersController.New)
router.post('/', UsersController.Create)
router.get('/profile', UsersController.Profile)
router.post('/dietaryrequirements', UsersController.DietaryRequirements)
router.post('/wishlist', UsersController.WishList)

module.exports = router
