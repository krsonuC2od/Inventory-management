import path from 'path';
import ProductModel from '../Models/product.model.js';
    export default class ProductController{
    getProducts(req,res){
      let products = ProductModel.get();
      // rendering product model  to products.ejs file help of Ejs Engine
       res.render('products',{products:products});

    //  return res.sendFile(path.join(path.resolve(),'src','Views','products.html'),);
    }
    getAddForm(req,res,next){
    return res.render('new-product',{errorMessage:null});
    }
     addNewProduct(req,res,next){
      ProductModel.add(req.body);
        // console.log(req.body);
        let products = ProductModel.get();
       return res.render('products',{products});
        

    }
}