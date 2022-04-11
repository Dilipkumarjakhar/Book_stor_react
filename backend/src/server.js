
const express=require('express');

const connect=require('./config/db')
const bookController=require('../src/controller/books.controller')
const userController=require('../src/controller/user.controller')
let port =5000;

const app = express();
app.use(express.json())

app.use("/",bookController)
// app.use('/res',userController)

app.listen(port,()=>{
    try{
        connect();
        console.log('listening on port',port)
    }catch(err){
        console.log({e:"error"})
    }
})