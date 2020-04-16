var MongoClient = require("mongodb").MongoClient;
var dbname = "psalmy2595";
var url = "mongodb://localhost:27017/" + dbname;

MongoClient.connect(url, function (err, client) {
  if (err) throw err;
  var db = client.db(dbname);
  
  var movieCollection = db.collection("myMovies")
  // Find the document abd replace it with the second object
  movieCollection.findOneAndReplace(
    { movie: "The Banker" },
    { movie: "Narcos", year: "2019", rating: 10 },
    function (err, replaceData) {
      console.log("replaceData", replaceData);
      client.close();

     }
  );   
});






  