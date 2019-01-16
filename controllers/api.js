exports.sendApiData = (req, res, next) => {
	res.send({
		oneItem: 'HECK',
		twoItem: 'OFF',
		threeItem: 'NERD'
	});
}