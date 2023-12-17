// import here
import express from 'express'
import ProductController from './src/Controllers/product.controller.js'
import ejsLayouts from 'express-ejs-layouts'
import path from 'path'
const Port =3100;
const app = express()

//setup view engine setting
app.set("view engine", 'ejs')
app.set('views', path.join(path.resolve(),'src','Views'))
app.use(ejsLayouts)
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