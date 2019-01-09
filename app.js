const http = require('http');

const ourServer = http.createServer((req, res) => {
	if (req.url == '/api') {
		res.setHeader('Content-Type', 'application/json');
		res.write(JSON.stringify({
			oneItem: 'here is the first item',
			twoItem: 'here is the second item',
			threeItem: 'here is the third item'
		}));
		return res.end();
	} else if (req.url == '/') {
		res.setHeader('Content-Type', 'text/html');
		res.write('<!DOCTYPE html> <html lang = "en" > ')
		res.write('<head></head><body>');
		res.write('<h1>Welcome to my simple server</h1>');
		res.write('</body></html>')
		return res.end();
	} else {
		res.setHeader('Content-Type', 'text/html');
		res.write('<!DOCTYPE html> <html lang = "en" > ')
		res.write('<head></head><body>');
		res.write('<h1>404</h1>');
		res.write('</body></html>')
	}
});

ourServer.listen(5000, () => console.log('run it'));