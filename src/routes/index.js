const newsRouter = require('./new');
const siteRouter = require('./site');
const productRouter = require('./product');

function route(app) {
    app.use('/news', newsRouter);

    app.use('/product', productRouter);

    app.use('/', siteRouter);
}

module.exports = route;
