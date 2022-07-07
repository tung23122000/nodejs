const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
    name: { type: String, maxLength: 255 },
    description: { type: String, maxLength: 255 },
    img: { type: String, maxLength: 255 },
    createAt: { type: Date, default: Date.now },
    UpdateAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Product', Product);
