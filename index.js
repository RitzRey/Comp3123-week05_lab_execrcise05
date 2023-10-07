const express = require('express');
const app = express();
const router = express.Router();
const fs = require('fs')

/*
- Create new html file name home.html 
- add <h1> tag with message "Welcome to ExpressJs Tutorial"
- Return home.html page to client
*/

// Static middleware
app.use(express.static('./public'))
app.use(express.json())

//http://localhost:8081/home/
router.get('/home', (req,res) => {
  res.sendFile(__dirname + "/public/home.html")
});

/*
- Return all details from user.json file to client as JSON format
*/

const user_details = require('./user.json')

//http://localhost:8081/profile/
router.get('/profile', (req,res) => {
  res.send(user_details);
});

/*
- Modify /login router to accept username and password as query string parameter
- Read data from user.json file
- If username and  passsword is valid then send response as below 
    {
        status: true,
        message: "User Is valid"
    }
- If username is invalid then send response as below 
    {
        status: false,
        message: "User Name is invalid"
    }
- If passsword is invalid then send response as below 
    {
        status: false,
        message: "Password is invalid"
    }
*/
//http://localhost:8081/login/
//http://localhost:8081/login?username=bret&password=bret@123


router.get('/login', (req, res) => {
  res.send("This is login router")
})

/*
- Modify /logout route to accept username as parameter and display message
    in HTML format like <b>${username} successfully logout.<b>
*/
//http://localhost:8081/logout/username
router.get('/logout:username', (req,res) => {
  const {username} = req.params
  
  const logoutMsg = `<b>${username} successfully logged out</b>`

  res.send(logoutMsg)

});

app.use('/', router);

app.listen(process.env.port || 8081);

console.log('Web Server is listening at port '+ (process.env.port || 8081));