// jshint version:6
const bodyParser = require("body-parser");
const express = require("express");
const app =express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
    res.sendFile(__dirname+"/bmi.html");
})
app.post("/",function(req,res){
    var h = parseFloat(req.body.height);
    var w = parseFloat(req.body.weight);
    var result= w/(h*h);
    res.send("Your BMI is:"+result)
})
app.listen(4000,function(){
    console.log("Chalu ho gaya");
})
