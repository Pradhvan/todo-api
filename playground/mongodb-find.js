
const {MongoClient} = require('mongodb');       
												 
    											

MongoClient.connect('mongodb://localhost',(err, client) => {
  if (err){
  	return console.log(err);
  } 

  var db = client.db('TodoApp');

  db.collection('Users').find().toArray().then((docs) => {

  	console.log('Users');
  	console.log(JSON.stringify(docs, undefined, 2));

  },(err) => {

  	console.log('Unable to fetch data',err);

  });
  

  }); 