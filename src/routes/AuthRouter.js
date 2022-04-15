const express = require('express');
const AuthController = require('../controllers/AuthController');
const router = express.Router();
// middleware
const AuthMiddleware = require('./../middlewares/AuthMiddleware');

router.post('/', AuthController.login)
router.post('/token', AuthController.getToken);
router.get('/verify', AuthMiddleware.auth, AuthController.giveRespond);
router.post('/refresh', AuthMiddleware.auth, AuthController.refreshToken);
// router to check both refresh-token and access-token is valid 

module.exports = router;