const express = require('express');
const users = require ('./users')

const router = express.Router();
const usermodel = require('./usermodel')


router.post('/signup', function(request,response){
    let NewUsers = {username : request.body.username, password:request.body.password, id:request.body.id, name : request.body.name}
    users.push({NewUsers})
    console.log (NewUsers)
    console.log (users)
    response.status(200).send({message :"New user Added" ,Data: NewUsers})
})



module.exports = router