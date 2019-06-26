//Calling dependencies

const express = require('express')
const bodyParser = require("body-parser");
const User= require('./Entities/User')
const app = express()
const port = 3000
const userList=[]
const propertyList=[]


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//API Endpoint: Create a User

app.post('/auth/signup',function(req,res){
  var token=req.body.token;
  var id=userList.length;
  var firstName=req.body.first_name;
  var lastName=req.body.last_name;
  var email=req.body.email;
  var password=req.body.password;
  var phoneNumber=req.body.phoneNumber;
  var address=req.body.address;
  var isAdmin=req.body.isAdmin;


  let user = new User(id,email,firstName,lastName,password,phoneNumber,address,
                        isAdmin)
  userList.push(user)
  console.log(userList)
  res.send(
    {
        "status":"success",
        "data": JSON.stringify(user)
    });
});


//API Endpoint: Login a user

app.post('/auth/signin',function(req,res){
  var token=req.body.token;
  var id=userList.length;
  var firstName=req.body.first_name;
  var lastName=req.body.last_name;
  var email=req.body.email;
  var password=req.body.password;
  var phoneNumber=req.body.phoneNumber;
  var address=req.body.address;
  var isAdmin=req.body.isAdmin;


  let user = new User(id,email,firstName,lastName,password,phoneNumber,address,
                        isAdmin)
  userList.push(user)
  console.log(userList)
  res.send(
    {
        "status":"success",
        "data": JSON.stringify(user)
    });
});


//API ENpoint: Create property ad

app.post('/property',function(req,res){
  var token=req.body.token;
  var id=userList.length;
  var firstName=req.body.first_name;
  var lastName=req.body.last_name;
  var email=req.body.email;
  var password=req.body.password;
  var phoneNumber=req.body.phoneNumber;
  var address=req.body.address;
  var isAdmin=req.body.isAdmin;


  let property = new Property (id,owner,status,price,state,city,address,type,
                                createdOn,imageUrl)
  userList.push(property)
  console.log(propertyList)
  res.send(
    {
        "status":"success",
        "data": JSON.stringify(property)
    });
});

app.listen(port, () => console.log(`listening on port ${port}!`))
