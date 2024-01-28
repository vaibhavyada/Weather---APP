// jshint version:6
const bodyParser = require("body-parser");
const express = require("express");
const app =express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
    res.sendFile(__dirname+"/cal.html");
})
app.post("/",function(req,res){
    var a =req.body.num1;
    var b =req.body.num2;
    var result=Number(a)+Number(b);
    res.send("the output is:"+result);
})
app.listen(3000,function(){
    console.log("Started");
})