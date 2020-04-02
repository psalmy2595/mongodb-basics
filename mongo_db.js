
var MongoClient = require('mongodb').MongoClient;
var dbname ="psalmy2595";
var url = "mongodb://localhost:27017/"+ dbname;

//this creates the database
MongoClient.connect(url, function(err, db) {  
     if (err) throw err; 
    console.log("Database created by samuel johnson!");
    db.close(); 
});
