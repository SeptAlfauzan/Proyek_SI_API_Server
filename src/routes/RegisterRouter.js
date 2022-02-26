const express = require('express');
const RegisterController = require('../controllers/RegisterController');
const router = express.Router();

router.post('/', RegisterController.register);
router.get('/', RegisterController.checkUsernameTaken);
router.get('/connection', RegisterController.checkConnection)

module.exports = router;