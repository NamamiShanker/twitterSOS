const Pool = require('pg').Pool;

const pool = new Pool({
    user:"postgres",
    password:"cE097C237CP78C3W8O3g8CG87CGF3W",
    host:"3.142.236.77",
    port: 5432,
    database:"twitter",
});

module.exports = pool;