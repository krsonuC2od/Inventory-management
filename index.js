// import here
import express from 'express'
import ProductController from './src/Controllers/product.controller.js'
import ejsLayouts from 'express-ejs-layouts'
import path from 'path'
import validationMiddleware from './src/Middlewares/validation.middleware.js'
const Port =3100;
const app = express()
//parse form data
app.use(express.urlencoded({extended:true}))

//setup view engine setting
app.set("view engine", 'ejs')
app.set('views', path.join(path.resolve(),'src','Views'))
app.use(ejsLayouts)
 // instance of productController for use class product controller
const productController = new ProductController();
//default req
app.get('/',productController.getProducts)
app.get('/new',productController.getAddForm)
app.post('/',validationMiddleware,productController.addNewProduct)



// Middleware for use static file
app.use(express.static('src/Views'));









// server running 
app.listen(Port,()=>{
    console.log(`your server is running on ${Port}`);
})