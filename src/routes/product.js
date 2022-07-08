const express = require('express');
const route = express.Router();

const productController = require('../app/controllers/ProductController');

route.get('/create', productController.create);

route.post('/store', productController.store);

route.get('/:slug', productController.show);

module.exports = route;
