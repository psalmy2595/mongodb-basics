var MongoClient = require("mongodb").MongoClient;
var dbname = "psalmy2595";
var url = "mongodb://localhost:27017/" + dbname;

MongoClient.connect(url, function (err, client) {
  if (err) throw err;
  var db = client.db(dbname);

  var movieCollection = db.collection("myMovies")
  // Find the first document in the collection
  movieCollection
    .find()
    .limit(1)
    .toArray(function (err, doc) {
      console.log("First document in the collection", doc);
      console.log('===========================================')
    });


  // Find all movies with a rating of 7
  movieCollection
    .find({ rating: 7 })
    .toArray(function (err, doc) {
      console.log("Movies with a rating of 7", doc);
      console.log('===========================================')

    });

  // Return only movie titles and nothing else
  movieCollection
    .find()
    .project({ 'movie' : 1, '_id': 0 })
    .toArray(function (err, doc) {
      console.log("All documents showing only title", doc);
      client.close();
    });
  
});