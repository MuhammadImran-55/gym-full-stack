let mongoose=require('mongoose')

const customerSchema = new mongoose.Schema(
  {
    name:   { type: String, required: true, trim: true, minlength: 2 },
    email:  { type: String, required: true, unique: true, lowercase: true },
    address:{ type: String, required: true },
    city:   { type: String, required: true },
    state:  { type: String, required: true },
    zip:    { type: String, required: true, match: /^[0-9]{5,6}$/ }
  },
  { timestamps: true }
);

 const productSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,require:true,unique:true},
    quantity:{type:Number,required:true}
 });

let customerModel = mongoose.model("Customer", customerSchema);
let productModel=mongoose.model('product',productSchema);
module.exports={customerModel, productModel}