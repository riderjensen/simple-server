exports.instHome = (req, res, next) => {
	res.send(`<h1>Welcome to the instruction area!</h1> <ul>
	<li> / - Gets all the products in the store</li>
	<li> /instructions - get some basic instructions on how this api works</li>
	<li> /edit/create/ - create a new product, requires title and price as strings to be sent in the body</li>
	<li> /edit/update/:id - select the item that you want to update and pass along a title and price in the body</li>
	<li> /edit/delete/:id - delete the item from the database</li>
	</ul>`)
}