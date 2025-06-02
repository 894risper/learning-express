import express from 'express';

const app = express();

const PORT= process.env.PORT || 3000;

const mockUsers =[
    {id:1,username:"risper" ,displayName:"Reezie"},
    {id:2,username:"faith" ,displayName:"fayee"},
    {id:3,username:"isaac" ,displayName:"izo"}  
]

app.get('/',(req,res)=>{

   res.send("hello ris")
});

app.get('/api/users',(request,response)=>{
    response.send(mockUsers)
});
app.get('/api/users/:id',(req,res)=>{
    console.log(req.params);
    const parsedId = parseInt(res.params.id)

    console.log(parsedId);
    if(isNaN(parsedId))return response.status(400).send({
        msg:"Bad Request.Invalid ID"

       
    });

});

app.get('/api/products',(req,res)=>{
    res.send([


     {id:123 ,name:"milk" ,price:126}   
    ])
})
app.listen( PORT,()=>{
console.log(`Runnig on port ${PORT}`);
});

