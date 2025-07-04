const express = require("express");
const app = express();
const port = 8080;

// const path = require("path");
// app.set("views",path.join(EJS-Template,"/views"));

app.get("/",(req,res)=>{
    res.send("Welcome");
    console.log("The request achieved");
})

app.set("view engine","ejs");
app.get("/Home",(req,res)=>{
    res.render("Home.ejs");    
    console.log("Request achieved");
})

app.listen(port,()=>{
    console.log(`The port ${port} is being initialised`);
})