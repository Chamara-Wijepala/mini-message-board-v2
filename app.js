require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Temporary. Delete later
const messages = [
	{
		text: 'Hi there!',
		user: 'Amando',
		added: new Date(),
	},
	{
		text: 'Hello World!',
		user: 'Charles',
		added: new Date(),
	},
];

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	res.render('index', { messages });
});

app.listen(PORT, () => console.log('Server running on port:', PORT));
