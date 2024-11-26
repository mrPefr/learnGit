
const express = require("express");

const app = express();

app.listen(3400);

app.get("/", (req, res)=>{
    res.send("HOME");
})

app.get("/about", (req, res)=>{
    res.send("ABOUT");
})