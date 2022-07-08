const Product = require('../models/Product');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    //GET /
    index(req, res, next) {
        Product.find({})
            .then((products) => {
                products = mutipleMongooseToObject(products);
                res.render('home', { products });
            })
            .catch(next);
    }

    //[GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();