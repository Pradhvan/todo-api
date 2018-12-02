const {ObjectID} = require('mongodb');


var {mongooose} = require('./../server/db/mongoose');
var {Todo} = require('./../server/models/todos');


var id = "5bea8a31902af52e690c42bb" ;

if(!ObjectID.isValid(id)){
	return console.log('Invalid ID');
}

Todo.find({
	_id: id
}).then((doc) => {

	console.log('doc', doc);

}, (e) => {

	console.log(e);

});