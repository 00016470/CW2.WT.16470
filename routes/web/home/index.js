const express = require('express');
const router = express.Router();
const home_controller = require('../../../controllers/web/home');
//redirect to localhost:3000/
router.get('/', home_controller.index);

module.exports = router;