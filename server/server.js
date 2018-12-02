const  express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');
const _ = require('lodash');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todos');
var {User} = require('./models/users');


var app = express();

app.use(bodyParser.json());

app.post('/todos', (req,res) => {
	var todo = new Todo({
		text: req.body.text,
		completed: req.body.completed
	});

	todo.save().then((doc) => {
		res.send(doc);
	}, (e) => {
		res.status(400).send(e);
	});
});




app.post('/users', (req,res) => {
	
	var body = _.pick(req.body, ['email', 'password'])
	var user = new User(body); 

	user.save().then((doc) => {
		res.send(doc);
	}, (e) => {
		res.status(400).send(e);
	});
});





app.get('/todos/:id',(req,res) => {
	//res.send(req.params);                              // req.params conatins the object having key value pair , where key is the url parameter and value will be the id that is put in

	var id = req.params.id;

	if(!ObjectID.isValid(id)) {
		return console.log('Invalid Id');
	}

	Todo.find({
		_id: id
	}).then((doc) => {
		res.send({doc});
	}, (e) => {
		res.status(404).send(e);
	});


});



app.get('/todos', (req,res) => {
	Todo.find().then((todos) => {
		res.send({todos});                  //sending todos as {todos} that is as an object provides us with more options using which we can add new information
	}, (e) => {
		res.status(400).send(e);
	});
});

app.listen(4000,() => {
	console.log('Server started at port 4000');
});



