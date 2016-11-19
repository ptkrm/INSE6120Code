var dns = require('dns');

dns.lookup('google.com', function (err, add){
	console.log(add)
});