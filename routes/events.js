const express = require('express');
const router = express.Router();

const EventsController = require('../controllers/events');

router.get('/new', EventsController.New);
router.post('/new', EventsController.Create);
router.get('/', EventsController.Index);


module.exports = router;