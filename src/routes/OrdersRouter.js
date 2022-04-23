const express = require('express');
const OrderController = require('../controllers/OrderController');
const router = express.Router();

// router.post('/', RegisterController.register);
router.get('/', OrderController.getAll);
router.get('/not-finished/:id', OrderController.getNotFinished);
router.get('/need-proceed/:id', OrderController.getNeedToProcess);
router.get('/history/:id', OrderController.getHistory);
router.post('/', OrderController.addNew);
router.delete('/:id', OrderController.delete);
router.put('/', OrderController.update);
router.put('/set-progress/:id', OrderController.updateProgress);
router.post('/pay-order/:id', OrderController.payTransaction);

module.exports = router;