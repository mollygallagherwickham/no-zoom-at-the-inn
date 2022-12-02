const express = require('express')
const router = express.Router()

// connects to the controller
const UsersController = require('../controllers/users')

router.get('/new', UsersController.New)
router.post('/', UsersController.Create)
router.get('/all', UsersController.All)
router.post('/addfriend', UsersController.AddFriend)

module.exports = router
