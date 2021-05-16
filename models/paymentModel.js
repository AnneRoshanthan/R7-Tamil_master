const mongoose = require('mongoose')

const paymentSchema = new mongoose.Schema({
    
    user_id:{type:String,required:true},
    paymentID:{type:String,required:true},
    email:{type:String,required:true},
    address:{type:Object,required:true},
    cart:{type:Array,default:[]},
    status:{type:Boolean,default:false},

    delivery_status:{
        
            type: String,
            required:true,
            default: "ordered",
          },
          

},{
    timestamps: true
})


module.exports = mongoose.model("Payments",paymentSchema)