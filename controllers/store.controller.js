const itemModel = require('../models/item.model');


exports.storeHome = (req, res, next) => {
	// send all items that we are selling
	itemModel.find().then(response => {
		res.send(response);
	})
}