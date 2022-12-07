const express = require('express');
const router = express.Router();

const SongsController = require('../controllers/songs');

router.get('/new', SongsController.New);
router.post('/new', SongsController.Create);
router.post('/vote', SongsController.Vote);
router.get('/', SongsController.Index);


module.exports = router;