const Product = require('../models/Product');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class MeController {
    //[GET] /me/stored/product
    storeProduct(req, res, next) {
        Product.find({})
            .then((product) =>
                res.render('me/store-product', {
                    product: mutipleMongooseToObject(product),
                }),
            )
            .catch(next);
    }
}
module.exports = new MeController();
