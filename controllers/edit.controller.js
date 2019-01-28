const itemModel = require('../models/item.model');

exports.doEdit = (req, res, next) => {

	// show all products with an edit button
	itemModel.find().then(response => {
		res.send(response);
	})
}

exports.editOne = (req, res, next) => {
	// get the id and edit the information
	const theId = req.params.id;

	const newTitle = req.body.title;
	const newPrice = req.body.price;

	if (newTitle == null || newPrice == null) {
		return res.status(500).send({
			message: 'Please check your data and make sure you are sending title and price in the body'
		});
	}

	itemModel.findOneAndUpdate(theId, {
		name: newTitle,
		price: newPrice
	}).then(item => {
		res.send(item);
	})

}

exports.deleteOne = (req, res, next) => {
	// get the id and delete the one
	const theId = req.params.id;
	itemModel.findByIdAndDelete(theId).then(response => {
		if (!response) {
			//error
			return
		}
		res.send(response);
	});

}

exports.createOne = (req, res, next) => {
	// get the id and delete the one
	const title = req.body.title;
	const price = req.body.price;
	const myNewItem = new itemModel({
		name: title,
		price: price
	});
	myNewItem.save().then(response => {
		res.send(response);
	});
}