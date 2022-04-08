const express = require('express');
const OrderStatusController = require('../controllers/OrderStatusController');
const router = express.Router();

// router.post('/', RegisterController.register);
router.get('/', OrderStatusController.getAll);
router.post('/', OrderStatusController.addNew);
router.delete('/:id', OrderStatusController.delete);
router.put('/:id', OrderStatusController.update);

module.exports = router;