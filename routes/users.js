const express = require('express')
const router = express.Router()

// connects to the controller
const SessionsController = require('../controllers/users')

router.get('/new', SessionsController.New)
router.post('/', SessionsController.Create)

module.exports = router
