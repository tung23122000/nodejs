const express = require('express');
const route = express.Router();

const meController = require('../app/controllers/MeController');

route.get('/stored/product', meController.storeProduct);

module.exports = route;
