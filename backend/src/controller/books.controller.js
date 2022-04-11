
const express=require('express');

const router=express.Router();

const Book=require('../models/Books.model');

router.get('/',async(req,res)=>{
    let book=await Book.find()
    res.status(200).send(book)
})
router.post('/book',async(req,res)=>{
    try{

        const book=await Book.create(req.body);
        res.status(201).send(book)
    }catch(err){
        
        res.status(500).send({mess:"err"})
    }
})



module.exports = router;