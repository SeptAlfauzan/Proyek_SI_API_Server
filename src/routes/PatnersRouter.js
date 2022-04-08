const express = require('express');
const PatnersController = require('../controllers/PatnersController');
const router = express.Router();

// router.post('/', RegisterController.register);
router.get('/', PatnersController.getAll);
router.get('/patner/:email/:username', PatnersController.getPatners);
router.get('/order/:username', PatnersController.orders);
router.get('/user/reset-password', (req, res) => {
    res.send('test');
});

module.exports = router;