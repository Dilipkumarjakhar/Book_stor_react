const mongoose=require('mongoose');

module.exports = function(){
   return mongoose.connect("mongodb+srv://dilipbook:dilipbook123@cluster0.fsuqg.mongodb.net/Book_Store")
   
}