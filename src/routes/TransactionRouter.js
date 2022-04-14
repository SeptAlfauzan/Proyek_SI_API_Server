const express = require('express');
const TransactionController = require('../controllers/TransactionController');
const router = express.Router();

// router.post('/', RegisterController.register);
router.get('/send-invoice', TransactionController.sendInvoice);

module.exports = router;