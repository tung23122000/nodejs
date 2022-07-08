const newsRouter = require('./new');
const siteRouter = require('./site');
const productRouter = require('./product');
const meRouter = require('./me');

function route(app) {
    app.use('/news', newsRouter);

    app.use('/product', productRouter);

    app.use('/me', meRouter);

    app.use('/', siteRouter);
}

module.exports = route;
