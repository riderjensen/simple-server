const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const item = new Schema({
	name: {
		type: String,
		required: true
	},
	price: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('item', item);