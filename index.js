const express = require('express');
const app = express();
require("dotenv").config();

app.get('/' , (req , res) => {
    res.json({
        message : "We are on the main route"
    })
})

app.get('/home' , (req , res) => {
    res.json({
        message : "We are on the  home route"
    })
})

app.listen(3000 , () => {
    console.log("App is listening on the PORT:3000");
})