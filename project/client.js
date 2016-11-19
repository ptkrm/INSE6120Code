//client.js

var dns = require('dns');
var http = require('http');
var wait = require('wait.for');

var hostend = ['facebook.com', 'google.com', 'meneame.net', 'noticierodigital.com'];
var result;


function dnsDemo(){
	for (i=0; i<hostend.length; i++){
		var result = wait.for(dns.lookup, hostend[i]);
		console.log(result);		
		var options = {
			host: '192.168.2.10',
			port: 3000,
			path: '/dig/'+hostend[i]+'/'+result
			};
		var req = http.request(options);
		req.end();
	};
};

wait.launchFiber(dnsDemo);