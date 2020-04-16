var MongoClient = require('mongodb').MongoClient;
var dbname ="psalmy2595";
var url = "mongodb://localhost:27017/" + dbname;

MongoClient.connect(url, function(err, client) {
    if (err) throw err;
    var db = client.db(dbname);
    //Create a collection name "myMovies":
  db.createCollection("myMovies", function (err, res) {
      if (err) throw err;
        //insert many documents into the collection
        db.collection("myMovies").insertMany([
          { movie: "The Banker", year: "2020", rating: 8 },
          { movie: "Bad Boys", year: "2020", rating: 7 },
          { movie: "The Hunt", year: "2020", rating: 7 },
          { movie: "Bloodshot", year: "2020", rating: 7.5 },
          { movie: "First Cow", year: "2020", rating: 6.5 },
        ], function(err, insertedDocs){
          // print result of insertion to console
          console.log('insertedDocs', insertedDocs);
      });     client.close();
  });
});
