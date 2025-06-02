import express from "express"

const app =express();

const PORT= process.env.PORT || 3000

const mockUsers=[
    {id:1,username:"anson", course:"CS"},
         {id:2,username:"Victor", course:"tie"},
          {id:3,username:"Joshua", course:"civil"}
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
    res.send([
        {id:123,name:"milk"},
        {id:124,name:"bread"}
    ])
})

app.listen(PORT,()=>{
    console.log(`running on Port ${PORT}`)
})