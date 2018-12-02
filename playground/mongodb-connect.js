
const {MongoClient} = require('mongodb');       // '{}'' is called object destructuring,can pull out certain attribute into a variable.
												// Pulling out MongoClient which lets you connect mongo server 
    											// and issue command to manuplate the database

MongoClient.connect('mongodb://localhost',(err, client) => {
  if (err){
  	return console.log(err);
  } 

  var db = client.db('TodoApp');

  db.collection('Users').insertOne({
		name: 'Hina',
		mobile_no : '9599498718'
	}, (err, result) => {
		if(err){
			return console.log(err);
		}

		console.log(result.ops[0]._id.getTimestamp());  // result.ops , ops attribute is going to store all pf the docs
 	   														 // that were inserted
		client.close();

  
}); 

  }); 