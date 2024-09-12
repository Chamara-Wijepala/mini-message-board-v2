const { Pool } = require('pg');

module.exports = new Pool({
	// host: process.env.HOST,
	// port: process.env.DB_PORT,
	// database: process.env.DATABASE,
	// user: process.env.USER,
	// password: process.env.PASSWORD,
	// ssl: {
	// 	require: true,
	// },
	connectionString: process.env.PGURI,
});
