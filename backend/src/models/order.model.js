const mongoose=require('mongoose')


const orderSchema=new mongoose.Schema({
    orderId:{type:'number',required:true},
    paymentMode:{type:'string',required:true},
    orderData:{type:'data',required:true}
})

module.exports=mongoose.model("order",orderSchema)