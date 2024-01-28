// jshint version:6
const express = require("express");
const app =express();
const https=require("https");

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/app.html");  
});
app.post("/",function(req,res){
    const q = req.body.city
    const url ="https://api.openweathermap.org/data/2.5/weather?q="+q+"&appid=f932095c430d79081dc4af15fe58f9e9&units=metric"
    https.get(url,function(response){
        console.log(response.statusCode);
        response.on("data",function(data){
            const weatherdata=JSON.parse(data);
            const temp = weatherdata.main.temp;
            const cond = weatherdata.weather[0].description
            const icon = weatherdata.weather[0].icon
            const imgurl = "https://openweathermap.org/img/wn/" + icon + "@2x.png"
            res.write("<h1>Weather Data</h1>");
            res.write("<h3> The temperature in "+q+" is : "+temp+"</h3>");
            res.write("<p>Weather conditions are : "+cond+"</p>");
            res.write("<img src=" + imgurl + ">");
            res.send()
        })
    })
});
app.listen(3000,function(){
    console.log("Chalu ho gaya");
})