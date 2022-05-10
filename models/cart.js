const fs = require('fs');
const path = require('path');
const Product = require('./product');

const p = path.join(
  path.dirname(require.main.filename),
  'data',
  'cart.json'
);

module.exports = class Cart {
    static addProduct(id, productPrice){
        fs.readFile(p, (err, data) => {
            let cart = {products: [], totalPrice: 0};
            if(!err){
                cart = JSON.parse(data);
            }
            const existingProductIndex = cart.products.findIndex(product => {return product.id === id});
            if(existingProductIndex !== -1){
                cart.products[existingProductIndex].qty += 1;
            }else{
                cart.products.push({id: id, qty: 1});
            }
            cart.totalPrice += +productPrice; 
            fs.writeFile(p, JSON.stringify(cart), (err) => {
                console.log(err);
            });
        });
    }

    static deleteProduct(id, price) {
        fs.readFile(p, (err, data) => {
            const updatedCart = {...JSON.parse(data)};
            const product = updatedCart.products.find(product => { return product.id === id});
            const productQty = product.qty;
            updatedCart.products = updatedCart.products.filter((product) => { return product.id !== id} );
            updatedCart.totalPrice -= price * productQty; 
            fs.writeFile(p, JSON.stringify(updatedCart), (err) => {
                console.log(err);
            });

        });
    }

    


}