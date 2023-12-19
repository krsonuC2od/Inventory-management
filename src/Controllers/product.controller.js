import path from 'path';
import ProductModel from '../Models/product.model.js';
    export default class ProductController{
    getProducts(req,res){
      let products = ProductModel.get();
      // rendering product model  to products.ejs file help of Ejs Engine
       res.render('products',{products:products});

    //  return res.sendFile(path.join(path.resolve(),'src','Views','products.html'),);
    }
    getAddForm(req,res){
    return res.render('new-product');
    }
    addNewProduct(req,res){
       
        ProductModel.add(req.body);
        let products = ProductModel.get();
       return res.render('products',{products});
        

    }
}