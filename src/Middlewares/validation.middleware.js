import { body , validationResult} from "express-validator";
const validateRequest = async(req,res,next)=>{

// validate data using express validator

// 1. Setup rule for validation
 const rules=[
  body('name').notEmpty().withMessage('Name is required'),
  body('price').isFloat({gt: 0 }).withMessage('Price should be positive value '),
  body('imageUrl').isURL().withMessage('Invalid url')
 ]

//2. Run those rule
await Promise.all(rules.map((rule)=>rule.run(req)));

//3. check if There are any error after running rule
var validationErrors =validationResult(req);
     if(!validationErrors.isEmpty()){
      return res.render('new-product',{errorMessage : validationErrors.array()[0].msg})
     }
     next();
};

export default validateRequest;