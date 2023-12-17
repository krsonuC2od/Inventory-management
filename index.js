// const express  = require('express')
import express from 'express';
import ProductController from './src/Controllers/product.controller.js';
const Port =3100;
const app = express();
 // instance of productController for use class product controller
const productController = new ProductController();
//default req
app.use('/',productController.getProducts)

// Middleware for use static file
app.use(express.static('src/Views'));









// server running 
app.listen(Port,()=>{
    console.log(`your server is running on ${Port}`);
})