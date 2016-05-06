var connection = require('./connect.js');

var tableName = 'allcharacters';

var orm = {

	allCharacters: function(callback) {
		var s = 'SELECT * FROM ' + tableName;
		connection.query(s, function(err, result) {
			callback(result);
		});
	},

	searchCharacter: function(name, callback) {
		var s = 'select * from ' + tableName + ' where routeName=?';
		connection.query(s,[name], function(err, result) {
			callback(result);
		});
	},

	addCharacter: function(character, callback) {
		var routeName = character.name.replace(/\s+/g, '').toLowerCase();
		var s = "INSERT INTO " + tableName + " (routeName, name, role, age, forcePoints) VALUES (?,?,?,?,?)";
		connection.query(s,[routeName, character.name, character.role, character.age, character.forcePoints], function(err, result) {
			callback(result);
		});
	}
};

module.exports = orm;