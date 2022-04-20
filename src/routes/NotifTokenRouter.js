const express = require('express');
const NotifTokenController = require('../controllers/NotifTokenController');
const router = express.Router();

// router.post('/', RegisterController.register);
router.get('/', NotifTokenController.getAll);
router.post('/', NotifTokenController.addNew);
router.delete('/', NotifTokenController.delete);
router.put('/:id', NotifTokenController.update);

module.exports = router;