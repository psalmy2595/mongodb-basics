var MongoClient = require('mongodb').MongoClient;
var dbname ="psalmy2595"
var url = "mongodb://localhost:27017/"+ dbname;

MongoClient.connect(url, function(err, client) {
  if (err) throw err;
  var db = client.db(dbname);
  //Create a collection name "interns":
  db.createCollection("interns", function(err, res) {
    if (err) throw err;
    console.log("Interns Collection Created");
    client.close();
  });
});
