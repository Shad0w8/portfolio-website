const express = require('express');
const router = express.Router();
const serviceDescriptionController = require('../controllers/serviceDescriptionController');

// Route for creating a service description
router.post('/', serviceDescriptionController.createServiceDescription);

// Route for getting service descriptions by username
router.get('/:username', serviceDescriptionController.getServiceDescriptionsByUsername);

module.exports = router;
