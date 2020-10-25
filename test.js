var mysql = require ("mysql")
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Abcd1234",
    database: "tech_blog_db",

})

connection.connect(function(error) {
    if (error) throw (error)
    console.log("connection id", connection.threadId)
    start()
})

function start() {
    connection.query("select * from test", function(error, data) {
        console.table(data)
    })
}