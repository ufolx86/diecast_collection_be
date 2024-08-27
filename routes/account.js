const express = require('express');
const { body } = require('express-validator/check')

const accountController = require('../controllers/account');
const collectionController = require('../controllers/collection');

const router = express.Router();

router.get('/profile', accountController.getProfile);
// TODO: ADD PROPER VALIDATION, CHECK IF MATCHES WITH FRONT END VALIDATION
router.patch('/profile', [
  body('name').trim().isLength({min:5})
], accountController.patchProfile);

router.get('/collection', collectionController.getCollection);

module.exports = router; 