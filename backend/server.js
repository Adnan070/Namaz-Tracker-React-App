// All Require Files are here... 👇👇👇👇
// =====================================

var express = require('express')
var app = require('express')();
var cors = require('cors');
var bodyParser = require('body-parser');
require('./utils/admin.js');

// Congigurtion 👇👇👇👇
// ====================

var port = process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded(true))

// var corsOptions = {
//     origin: 'http://example.com',
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }


// Get all Handlers here 👇👇👇👇
// ==============================

// var {
//     postOneProduct,
//     getProducts
// } = require('./handlers/products');


// Call above handlers here 👇👇👇👇
// =================================

// 1. All Post Routes are here 👇👇👇👇
// ----------------------------------

// app.post('/product',postOneProduct);

// 2. All Get Routes are here 👇👇👇👇
// ----------------------------------

// app.get('/product',getProducts)


app.listen(5000, () => console.log(`Tracker App Running on port ${port}!`))