const express = require('express')
const router = express.Router()

// connects to the controller
const UsersController = require('../controllers/users')


router.get('/new', UsersController.New)
router.get('/all', UsersController.All)
router.post('/addfriend', UsersController.AddFriend)
router.get('/profile', UsersController.Profile)
router.post('/wishlist', UsersController.WishList)
router.post('/dietaryrequirements', UsersController.DietaryRequirements)

router.post('/', UsersController.Create)


module.exports = router
