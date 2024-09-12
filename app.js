require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const pool = require('./db/pool');
const queries = require('./db/queries');

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
	const { rows } = await pool.query(queries.getAllMessages);
	res.render('index', { messages: rows });
});

app.get('/new', (req, res) => {
	res.render('form');
});

app.post('/new', async (req, res) => {
	const { username, message } = req.body;
	await pool.query(queries.insertMessage, [username, message, new Date()]);
	res.redirect('/');
});

app.listen(PORT, () => console.log('Server running on port:', PORT));
