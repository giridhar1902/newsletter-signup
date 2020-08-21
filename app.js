const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");


const app = express();
 app.use(express.static("public"));
 app.use(bodyParser.urlencoded({extended:true}))

app.get("/", function(req, res){
  res.sendFile(__dirname + "/signup.html")
})

app.post("/", function(req, res){

  var firstName = req.body.fname;
  var lastName = req.body.lname;
  var email = req.body.email;



})

app.listen(3000, function(){
  console.log("server up and running on 3000");
})
























// Unique id
// dcb0c50198

// API Key
// 9881b94949fdb76247806286cacb6deb-us17
