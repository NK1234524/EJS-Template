const express = require("express");
const app = express();
const port = 8080;

app.listen(port,()=>{
    console.log("We have entered to the server of instagram port ",port);
})


app.get("/",(req,res)=>{
    res.send("Welcome to page");
    console.log("New request");
});
app.set("view engine","ejs");
        
app.get("/ig/:username",(req,res)=>{
    let {username}=req.params;
    const instaData = require("./data.json");
    const data =instaData[username];

    if(data){
        console.log(`The result is provided`);
        res.render("InstagramPage.ejs",{data});   
    } 
    else{
        console.log(`No post as such`);
        res.render("error.ejs");
    }
})
