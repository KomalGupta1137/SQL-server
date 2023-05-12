const connection = require('./connection')
const bodyParser = require('body-parser')
const express = require('express')
var app = express();

app.use(bodyParser.json())


//Request for all users from Users Table
app.get('/users', (request, response) => {
    connection.query('SELECT * FROM Users', (err, rows) => {
        if(err){
            console.log(err)
        }
        else{
            response.send(rows)
        }
    })
})


//Request for some specific users by id
app.get('/user/:id', (request, response) => {
    const id = request.params.id
    connection.query('SELECT * FROM Users WHERE Id=?',[request.params.id], (err, rows) => {
        if(err){
            console.log(err)
        }
        else{
            response.send(rows)
        }
    })
})











app.listen(3000, (req,res) => {
    console.log("server is running")
})