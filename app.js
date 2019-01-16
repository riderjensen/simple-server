const express = require('express');

const app = express();
const apiRoute = require('./routes/api');

app.use('/api', apiRoute)

app.get('/', (req, res, next) => {
	res.send('<h1>HULLO??? Get the heckin heck off my server!</h1');
});


app.listen(5000);