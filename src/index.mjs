import express from 'express';
import mongoose from 'mongoose';

const app = express();

mongoose.connect("mongodb://localhost:27017/express_tutorial")
.then(()=>console.log("connected to database"))
.catch((err)=>console.log())

const PORT= process.env.PORT || 3000;



app.listen( PORT,()=>{
console.log(`Runnig on port ${PORT}`);
});

