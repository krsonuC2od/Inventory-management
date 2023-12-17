import path from 'path';
import ProductModel from '../Models/product.model.js';
    export default class ProductController{
       getProducts(req,res){
      let products = ProductModel.get();
       console.log(products);
     return res.sendFile(path.join(path.resolve(),'src','Views','products.html'),);
    }
}