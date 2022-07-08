const mongoose = require("mongoose");
const  slug = require('mongoose-slug-generator');

const Schema = mongoose.Schema;

mongoose.plugin(slug);
const Product = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, maxLength: 255 },
    img: { type: String, required: true },
    // role: { type: String },
    price: { type: String, required: true },
    slug: { type: String, slug: 'name' },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", Product);