const express = require('express');
const bodyParser = require('body-parser');
const apiRoute = require('./routes/api');

const app = express();

app.use(bodyParser.urlencoded({
	extended: false,
	useNewUrlParser: true
}));

app.use('/api', apiRoute)

app.get('/', (req, res, next) => {
	res.send('<h1>HULLO??? Get the heckin heck off my server!</h1');
});


app.listen(5000);