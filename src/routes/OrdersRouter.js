const express = require('express');
const OrderController = require('../controllers/OrderController');
const router = express.Router();

// router.post('/', RegisterController.register);
router.get('/', OrderController.getAll);
router.post('/', OrderController.addNew);
router.delete('/:id', OrderController.delete);
router.put('/:id', OrderController.update);

module.exports = router;