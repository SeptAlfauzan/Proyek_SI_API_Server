const express = require('express');
const GadgetTypesController = require('../controllers/GadgetTypesController');
const router = express.Router();

// router.post('/', RegisterController.register);
router.get('/', GadgetTypesController.getAll);
router.post('/', GadgetTypesController.addNew);
router.delete('/:id', GadgetTypesController.delete);
router.put('/:id', GadgetTypesController.update);

module.exports = router;