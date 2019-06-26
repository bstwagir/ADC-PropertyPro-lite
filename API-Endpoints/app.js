const express = require('express')
const bodyParser = require("body-parser");
//const User= require('./Entities/User.js')
const app = express()
const port = 3000
const userList=[]
//const propertyList=[]
class User{
    constructor(address,isAdmin){
      /*  this.id = id;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.phoneNumber = phoneNumber;
        */

        this.address = address;
        this.isAdmin = isAdmin;
       }
   }

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//API Endpoint: Create a User

app.post('/auth/signup',function(req,res){

    const address=req.body.address;
    const isAdmin=req.body.isAdmin;
    console.log(address);
console.log(new User);

  //let user = new User(id,email,firstName,lastName,password,phoneNumber,address,
  //                      isAdmin)
  let user = new User(address,isAdmin)
  userList.push(user)
  console.log(userList)
  res.send(
    {
        "status":"success",
        "data": JSON.stringify(user)
    });
    console.log(res.status);
});


app.listen(port, () => console.log(`listening on port ${port}!`))
