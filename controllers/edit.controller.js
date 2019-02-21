const itemModel = require('../models/item.model');

exports.doEdit = (req, res, next) => {
	const theId = req.params.id;
	itemModel.findById(theId).then(response => {
		res.status(200).send(response);
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
	itemModel.findByIdAndUpdate(theId, {
		name: newTitle,
		price: newPrice
	}).then(item => {
		res.status(201).send(item);
	})

}

exports.deleteOne = (req, res, next) => {
	// get the id and delete the one
	const theId = req.params.id;
	itemModel.findByIdAndDelete(theId).then(response => {
		if (!response) {
			return res.status(500).send({
				message: 'Error in deleting'
			});
		}
		res.status(200).send(response);
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
		if (!response) {
			return res.status(500).send({
				message: 'Error in deleting'
			});
		}
		res.status(201).send(response);
	});
}