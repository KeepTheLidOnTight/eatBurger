let mysql = require("mysql");

//working with the jawsdb heroku
if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "Jefferson@16",
        database: "burgers_db",
    });


    };

    //making connection
connection.connect(function(err) {     
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
  
  //export to ORM
  module.exports = connection;   