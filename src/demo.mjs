import express from "express"

const app =express();

const PORT= process.env.PORT || 3000

const mockUsers=[
    {id:1,username:"anson", course:"CS"},
         {id:2,username:"Victor", course:"tie"},
          {id:3,username:"Joshua", course:"civil"}
]

const products= [
          {id:1,name:"milk"},
        {id:2,name:"bread"},
         {id:3,name:"meat"},
        {id:4,name:"banana"}
    
]

app.get("/",(req,res)=>{
    res.send("hello world")
});

app.get("/api/users",(req,res)=>{
    res.send(mockUsers)
});

app.get("/api/users/:id",(req,res)=>{
    console.log(req.params)

    const parsedId= parseInt(req.params.id);

    if(isNaN(parsedId)) return res.status(400).send({msg:"bad request"})

    console.log(parsedId)

    const findUser= mockUsers.find((user)=>user.id===parsedId);

    if (!findUser) return res.sendStatus(404);

    return res.send(findUser)
})



app.get("/api/products",(req,res)=>{
    res.send(products)
});

app.get("/api/products/:id",(req,res)=>{
    console.log(req.params);

    const parsedId= parseInt(req.params.id);
    if (isNaN(parsedId)) return res.status(400).send({msg :"bad request"});

    console.log(parsedId);

    const findProduct= products.find((product)=>product.id===parsedId)
    if (!findProduct) return res.sendStatus(404);

    return res.send(findProduct)
});

app.get('/api/posts',async(req, res)=>{
    try{
        const response= await fetch(`https://jsonplaceholder.typicode.com/posts`);

        const data = await response.json();
        res.json(data)
        
    }catch(error){
        res.status(500).json({msg:'failed to fetch comments',error:error.message})

    }
})

app.listen(PORT,()=>{
    console.log(`running on Port ${PORT}`)
})