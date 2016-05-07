var mysql = require('mysql');
var connection = mysql.createConnection({
	port: 3306,
	host: 'l9dwvv6j64hlhpul.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
	user: 'yw8amioux4x36kvt',
	password: 'orh1zpd2u52t0cvp',
	database: 'ta3fnb4w38no1l01'
});

connection.connect(function(err) {
	if (err)
	{
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('connected as id ' + connection.threadId);
});

module.exports = connection;