const Product = require('../models/Product');
const { mongooseToObject } = require('../../util/mongoose');
const { response } = require('express');

class ProductController {
    //[GET] /product/:slug
    show(req, res, next) {
        // res.send(req.params.slug);
        Product.findOne({ slug: req.params.slug })
            .then((product) => {
                product = mongooseToObject(product);
                res.render('products/show', { product });
            })
            .catch(next);
    }

    //[GET] /product/create
    create(req, res, next) {
      
        res.render('products/create');
        
    }

     //[POST] /product/store
    store(req, res, next) {
        const product = new Product(req.body);
        product.save()
            .then(() => res.redirect('/'))
            .catch(error => {

            });

    }
}

module.exports = new ProductController();
