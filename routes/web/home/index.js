const express = require('express');
const router = express.Router();
const home_controller = require('../../../controllers/web/home');
//redirect to localhost:3000/
router.get('/', home_controller.index);
//redirect to localhost:3000/add
router.get('/add', home_controller.add);
//redirect to localhost:3000/update
router.get('/update', home_controller.update);
router.get('/update/:id', home_controller.update);

module.exports = router;