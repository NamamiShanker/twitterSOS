const Pool = require('pg').Pool;

const pool = new Pool({
	user: process.env.DATABASE_USER,
	password: process.env.DATABASE_PASSWORD,
	host: process.env.DATABASE_HOST,
	port: process.env.DATABASE_PORT,
	database: 'twitter',
});

module.exports = pool;
