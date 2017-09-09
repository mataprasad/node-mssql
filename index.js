var express = require("express");
const sql = require('mssql')

var app = express();

app.set('view engine', 'ejs');


// Enable tcp protocol for sql server, set the sttaic port to 1433 for all ips, restart the server

//const DbConnectionString = 'mssql://{user-name}:{password}@{db-server-ip}:{sql-server-port}/{db-name}';
const DbConnectionString = 'mssql://sa:sequel@192.168.1.103:1433/DbScott';

sql.on('error', err => {
    console.dir(err);
    sql.close();
});

app.get("/", function(req, res) {
    sql.connect(DbConnectionString).then(pool => {
        return pool.request()
            .query('select * from emp;');
    }).then(result => {
        sql.close();
        res.render("data", { model: result.recordset });
    }).catch(err => {
        console.dir(err);
        sql.close();
    });
});

app.listen("4501", function() {
    console.log("node server listening at port : 4501");
});