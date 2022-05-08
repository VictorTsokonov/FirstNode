const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop/products-list', {
            products: products,
            pageTitle: "Products",
            path: "/products",
       });
    });
}

exports.getCart = (req, res, next) => {
    res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Cart'
    });
};

exports.getIndex = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop/index', {
            products: products,
            pageTitle: "Shop",
            path: "/index",
       });
    });
};

exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout',  {
        path: '/checkout',
        pageTitle: 'Checkout'
    });
};
    
