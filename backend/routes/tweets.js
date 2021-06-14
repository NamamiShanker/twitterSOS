var express = require('express');
var router = express.Router();
const pool = require("../db");

router.get('/', async(req, res) => {
    try {
        const allTweets = await pool.query("SELECT * FROM test");
        res.json(allTweets.rows);
    } catch (err) {
        console.error(err.message);
    }
   
});

module.exports = router;
