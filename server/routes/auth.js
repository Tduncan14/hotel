const express = require('express');
const {showMessage,register} = require('../controllers/auth');
const router = express.Router();




router.get('/:message',showMessage);
router.post('/register', register)


module.exports = router;