export default class ProductModel{
constructor(_id,_name,_disc,_price,_imageUrl){
    this.id=_id;
    this.name=_name;
    this.disc=_disc;
    this.price=_price;
    this.imageUrl = _imageUrl;
}

static get(){
  return products;
}}

var products = [
    new ProductModel(
        1,
        "Iphone 8",
        "high demand phone",
        10000,
        "https//image.png"
    )
]
