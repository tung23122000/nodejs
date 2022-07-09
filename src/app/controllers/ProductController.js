const Product = require("../models/Product");
const { mongooseToObject } = require("../../util/mongoose");

class ProductController {
  //[GET] /product/:slug
  show(req, res, next) {
    // res.send(req.params.slug);
    Product.findOne({ slug: req.params.slug })
      .then((product) => {
        product = mongooseToObject(product);
        res.render("products/show", { product });
      })
      .catch(next);
  }

  //[GET] /product/create
  create(req, res, next) {
    res.render("products/create");
  }

  //[POST] /product/store
  store(req, res, next) {
    const product = new Product(req.body);
    product
      .save()
      .then(() => res.redirect("/"))
      .catch(next);
  }

  //[GET] /product/:id/edit
  edit(req, res, next) {
    Product.findById(req.params.id)
      .then((product) =>
        res.render("products/edit", {
          product: mongooseToObject(product),
        })
      )
      .catch(next);
  }

  //[PUT] /product/:id
  update(req, res, next) {
    Product.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("/me/stored/product"))
      .catch(next);
  }

  //[DELETE] /product/:id
  delete(req, res, next) {
    Product.deleteOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("/me/stored/product"))
      .catch(next);
  }
}

module.exports = new ProductController();
