var express = require("express");
const sql = require('mysql')

var app = express();

app.set('view engine', 'ejs');

//const con = sql.createConnection({
    const pool = sql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "root",
    database: "db-scott",
    connectionLimit : 10
  });


app.get("/", function(req, res) {
    //con.connect(function(err) {
        pool.getConnection(function(err,con) {
        if (err) throw err;
        con.query("SELECT * FROM emp", function (err, result, fields) {
          if (err) throw err;
          //console.log(result);
          con.release();
          res.render("data", { model: result });
        });
    });
});

app.listen("4502", function() {
    console.log("node server listening at port : 4502");
});