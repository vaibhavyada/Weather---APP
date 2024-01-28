// jshint version:6
const express = require("express");
const app =express();
app.get("/", function(request,response){
    response.send("<h1>hello</h1>");
});
app.get("/hatt",function(req,res){
    res.send("teri maa ki");
});
app.get("/about",function(req,res){
    res.send("i m 20 years old.");
});
app.get("/contact",function(req,res){
    res.send("contact me on yadavvaibhav930@gmail.com");
});
app.listen(3000, function(){
    console.log("server started on port 3000")
});