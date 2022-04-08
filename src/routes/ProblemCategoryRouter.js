const express = require('express');
const ProblemCategoryController = require('../controllers/ProblemCategoryController');
const router = express.Router();

// router.post('/', RegisterController.register);
router.get('/', ProblemCategoryController.getAll);
router.post('/', ProblemCategoryController.addNew);
router.delete('/:id', ProblemCategoryController.delete);
router.put('/:id', ProblemCategoryController.update);

module.exports = router;