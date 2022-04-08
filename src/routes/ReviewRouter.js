const express = require('express');
const ReviewController = require('../controllers/ReviewController');
const router = express.Router();

// router.post('/', RegisterController.register);
router.get('/', ReviewController.getAll);
router.post('/', ReviewController.addNew);
router.delete('/:id', ReviewController.delete);
router.put('/:id', ReviewController.update);

module.exports = router;