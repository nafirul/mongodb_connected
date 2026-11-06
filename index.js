const express= require("express");
const mongoose = require('mongoose');
const app= express();
const port = 30002;
const mongoodb= async ()=>{
    try {
     await mongoose.connect('mongodb://127.0.0.1:27017/test');
     console.log('db is connected');
    } catch (error) {
      console.log('db is not connected');
      console.log(error.message);
      process.exit(1);
      
        
    }
}



app.get("/",(req,res)=>{
    res.send('welcome to server is a running');
})

app.listen(port,async()=>{
    console.log(`server is running http://localhost:${port}`);
   await mongoodb();
    
})