const express=require("express");
const app=express();
const cors=require("cors");
const port=process.env.PORT||3000;

app.use(cors());

const apiData=require("./data.json");

app.get("/",(req,res)=>{
    res.send("hello i am priyanka");
});

app.get("/service",(req,res)=>{
    res.send(apiData);
});

app.listen(port,()=>{
    console.log(`i am live again`);
});