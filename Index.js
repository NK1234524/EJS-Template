const express = require("express");
const app = express();
const port = 8080;

app.listen(port,()=>{
    console.log(`The poprt ${port} is being initialised`);
})

app.get("/",(req,res)=>{
    res.send("Hi how can I help you");
    console.log("The request achieved");
})

