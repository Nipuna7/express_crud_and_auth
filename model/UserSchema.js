const mongoose=require('mongoose');
const CustomerSchema=new mongoose.Schema({
    email:{type:String,required:true},
    password:{type:String,required:true},
    fullName:{type:Number,required:true}
});
module.exports=mongoose.model('user',CustomerSchema);