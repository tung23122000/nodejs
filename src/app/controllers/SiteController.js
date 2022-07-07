const Product = require('../models/Product');
const {mutipleMongooseToObject} = require('../../util/mongoose')

class SiteController {
    //GET /
    index(req, res, next) {
        // Product.find({}, function (err, product) {
        //     if (!err) {
        //         res.json(product);
        //     } else {
        //         next(err);s
        //     }
        // });

        Product.find({})
            .then(products => {
                products = mutipleMongooseToObject(products);
                res.render('home', { products })
            })
            .catch( next);
            // .then(product => res.render(product))
            // res.render('home');
    }

    //[GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
