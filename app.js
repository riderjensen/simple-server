const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const editRoute = require('./routes/edit.route');
const instRoute = require('./routes/inst.route');
const itemModel = require('./models/item.model');

const app = express();

app.use(bodyParser.urlencoded({
	extended: false,
	useNewUrlParser: true
}));

app.use('/edit', editRoute);

app.use('/instructions', instRoute);

app.get('/', (req, res, next) => {
	itemModel.find().then(response => {
		res.status(200).send(response);
	})
});


mongoose.connect('mongodb+srv://test-user:12345678Ah@nodecourse-zfafv.mongodb.net/store?retryWrites=true', {
		useNewUrlParser: true
	})
	.then(result => {
		app.listen(process.env.PORT || 5000);
	})
	.catch(err => console.log(err));