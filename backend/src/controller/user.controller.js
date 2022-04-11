const express=require('express');

const router=express.Router();

const User=require('../models/user.model');

router.get('/res',(req,res)=>{
    
    let user=User.find();
    res.send(user)
    
})





module.exports=router;