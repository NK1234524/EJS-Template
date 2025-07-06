const express  = require("express");
const app = express();
const port = 8080;

app.listen(port,()=>{
    console.log(`The request from client to port ${port}`);
})

app.set("views engine","ejs");


app.get("/rolldice",(req,res)=>{
    let num = Math.floor(Math.random()*6+1);
    console.log(`The output provided is ${num}`);
    res.render("rolldice.ejs",{diceVal: num});
})

app.get("/",(req,res)=>{
    res.send("Welcome to home page");
    console.log("response provided");
})