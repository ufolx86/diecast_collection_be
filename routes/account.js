const express = require('express');

const accountController = require('../controllers/account');
const collectionController = require('../controllers/collection');

const router = express.Router();

router.get('/profile', accountController.getProfile);

router.get('/collection', collectionController.getCollection);

module.exports = router; 