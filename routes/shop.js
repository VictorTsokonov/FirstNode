const path = require("path");

const express = require('express');

const rootDir = require('../utils/path');
const adminData = require('./admin');

const router = express.Router();

router.get("/",(req, res, next) => {
    // ...
    // console.log(adminData.products)
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    const hasProducts = adminData.products.length > 0;
    res.render('shop', {prods: adminData.products, pageTitle: "Shop" , path: "/", hasProducts: hasProducts });
});

module.exports = router;