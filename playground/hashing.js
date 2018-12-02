// const {SHA256} = require('crypto-js');


// var message = 'I am great';

// var hash = SHA256(message).toString();

// console.log(hash);


// var data = {
// 	id : 6
// };


// var token = {
// 	data,
// 	hash: SHA256(JSON.stringify(data + 'some secret')).toString()
// }


// var resulthash = SHA256(JSON.stringify(token.data + 'some secret')).toString();


// if (resulthash !== token.hash) {
// 	return console.log('Do not trust');
// }

// console.log('valid user' + resulthash);


//----------------------------------------------------------------------------------------------------------------------




// ********************************** USING LIBRARY ///[jsonwebtoken]\\\\***************************



const jwt = require('jsonwebtoken');




var data = {
	id: 10
}


var token = jwt.sign(data, 'secret');

var decoded = jwt.verify(token, 'secret'); 


console.log(decoded);














