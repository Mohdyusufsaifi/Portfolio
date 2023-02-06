const express = require('express');
const router = express.Router();
const emailController = require('../controllers/mail.js');

router.post('/Contact', emailController.sendEmail);

module.exports = router;
