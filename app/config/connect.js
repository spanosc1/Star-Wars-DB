var mysql = require('mysql');

var source = {
	localhost: {
		port: 3306,
		host: 'localhost',
		user: 'root',
		password: '13748abc',
		database: 'starwars'
	},
	jawsDB: {
		port: 3306,
		host: 'l9dwvv6j64hlhpul.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
		user: 'yw8amioux4x36kvt',
		password: 'orh1zpd2u52t0cvp',
		database: 'ta3fnb4w38no1l01'
	}
}

var connection = mysql.createConnection(source.jawsDB);

connection.connect(function(err) {
	if (err)
	{
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('connected as id ' + connection.threadId);
});

module.exports = connection;

host: 'l9dwvv6j64hlhpul.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
	user: 'yw8amioux4x36kvt',
	password: 'orh1zpd2u52t0cvp',
	database: 'ta3fnb4w38no1l01'