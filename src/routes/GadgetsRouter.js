const express = require('express');
const GadgetController = require('../controllers/GadgetController');
const router = express.Router();

// router.post('/', RegisterController.register);
router.get('/', GadgetController.getAll);
router.post('/', GadgetController.addNew);
router.delete('/:id', GadgetController.delete);
router.put('/:id', GadgetController.update);

module.exports = router;