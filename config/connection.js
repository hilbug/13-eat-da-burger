const mysql = require('mysql');
const connection;

if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
		host: "localhost",
		user: "root",
		password: "root12345",
		database: "burgers_db"
	});
}

module.exports = connection;