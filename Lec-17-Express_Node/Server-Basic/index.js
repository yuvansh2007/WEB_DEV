const express = require("express")
const app = express();

app.use(express.bodyParser())

app.get("/" , (req,res)=>{
    console.log("hello request",req);

    console.log("hello response",res);
    
    res.send("hello to server");
})

app.get("/" , (req,res)=>{
    console.log("hello request",req.query);
    const {name,age} = req.query;
    res.send(`hello ${name} of Age - ${age}`)
})

app.listen(3000,()=>{
    console.log("server listening on prt 3000, http://localhost:3000/");
})