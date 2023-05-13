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
    connection.query('SELECT * FROM Users WHERE Id=?',[id], (err, rows) => {
        if(err){
            console.log(err)
        }
        else{
            response.send(rows)
        }
    })
})


//Request for deleting  row in tables
app.delete('/user/:id',(request,response) => {
    var id = request.params.id
    var query = 'DELETE FROM Users WHERE Id =?'
    connection.query(query,id,(error, rows) => {
        if(error){
            console.log(error)
        }
        else{
            response.send(rows)
        }
    })
})


//Request for storing row in specific tables by id
app.post('/user', (request, response) => {
     var bodyData = request.body
     var userData = [bodyData.Id, bodyData.Name, bodyData.Age]
     var query = 'INSERT INTO Users(Id, Name, Age) VALUES(?)'
     connection.query(query,[userData] ,(error, rows) => {
        if(error){
            console.log(error)
        }else{
            response.send(rows)
            console.log(rows)
        }
    })

})


//Updating the rows of table by id
app.put('/user/:id',(request, response) => {
    var bodyData = request.body
    var query = 'UPDATE Users SET ? WHERE Id = ' + bodyData.id
    connection.query(query,[bodyData], (error,rows) => {
        if (error){
            console.log(error)
        }else{
            response.send(rows)
        }
    })

})


app.listen(3000, (req,res) => {
    console.log("server is running")
})