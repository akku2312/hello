/*database connection creation*/

var mysquel = require('mysequel');

var db = mysquel({
	url:'mysql://root:@localhost/demoappdb',
	connections: { min: 1, max: 20}
});

console.log("connection established");


module.exports = db;