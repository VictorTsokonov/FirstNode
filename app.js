const path = require("path");

const express = require('express');
const bodyParser = require('body-parser');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.set('view engine', 'ejs'); // <-- IMPORTANT! --> that's how you initialize the file extension also: .hbs
app.set('views', 'views')

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use("/admin",adminData.routes);
app.use(shopRoutes);
app.use((req, res, next) => {
    res.status(404).render('404', {pageTitle: "404"});
});


app.listen(3000);