var mysql = require('mysql')

var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Mysql@1137',
    database:'user'

})

module.exports = connection