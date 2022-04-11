const mongoose=require('mongoose');

const bookSchema = new mongoose.Schema({
    bookimage:{type: 'string',required: true},
    bookName:{type: 'string',required: true},
    autherName:{type: 'string',required: true},
    bookPrice:{type: 'number',required: true},
    publisher:{type: 'string',required: true},
    
})

module.exports=mongoose.model("book",bookSchema)