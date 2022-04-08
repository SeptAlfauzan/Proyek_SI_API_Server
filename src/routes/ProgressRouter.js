const express = require('express');
const ProgressController = require('../controllers/ProgressController');
const router = express.Router();

// router.post('/', RegisterController.register);
router.get('/', ProgressController.getAll);
router.post('/', ProgressController.addNew);
router.delete('/:id', ProgressController.delete);
router.put('/:id', ProgressController.update);

module.exports = router;