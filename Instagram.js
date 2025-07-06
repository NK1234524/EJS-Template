const express = require("express");
const app = express();
const port = 8080;

app.set("view engine","ejs");

app.listen(port,()=>{
    console.log(`The port ${port} is initialised`);
});

app.get("/",(req,res)=>{
    res.send("Welcome to the Instagram");
    console.log("The request acheived");
})

app.get("/instagram/:username",(req,res)=>{
    let {username}=req.params;
    res.render("Instagram.ejs",{username});
    console.log(`Hello ${username}`);
})