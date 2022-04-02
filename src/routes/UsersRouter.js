const express = require('express');
const UserController = require('../controllers/UserController');
const router = express.Router();

// router.post('/', RegisterController.register);
router.get('/', UserController.getAll);
router.get('/user/:email/:username', UserController.getUser);
router.put('/user/verify/:username', UserController.verify);
router.get('/user/reset-password', (req, res) => {
    res.send('test');
});

module.exports = router;