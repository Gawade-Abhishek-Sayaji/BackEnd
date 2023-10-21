const express = require('express')
const app = express()
const cors = require('cors');
require("./db/config");
const User=require("./db/user");

app.use(express.json());
app.use(cors());
app.post('/login', async(req, res) => {
    console.log(req.body)
    let user=new User(req.body);
    const loggedUser=await user.save();
    res.send(loggedUser);
    console.log("loggedUser",loggedUser)
    
})
app.get('/', async(req, res) => {
    
    res.send("Hello");
})

app.listen(5000);