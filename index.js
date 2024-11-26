
const express = require("express");

const app = express();

app.listen(3400);

// Min hem-route
app.get("/", (req, res)=>{
    res.send("HOME");
})

// Min aobut-route
app.get("/about", (req, res)=>{
    res.send("ABOUT");
})

// min viktiga route.....
app.get("/important", (req, res)=>{
    res.send("Important stuff....");
})