const express = require('express');
const UserController = require('../controllers/UserController');
const router = express.Router();

// router.post('/', RegisterController.register);
router.get('/', UserController.getAll);
router.get('/user/:email/:username', UserController.getUser);

module.exports = router;