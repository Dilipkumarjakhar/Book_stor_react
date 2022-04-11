
const mongoose=require('mongoose');


const userSchema = new mongoose.Schema({
    userName:{type:'string',required:true},
    // userEmail:{type:"string",required:true},
    userMobile:{type:'number',required:true},
    userAddress:{type:'string',required:true},
    
})

module.exports =mongoose.model("user",userSchema);