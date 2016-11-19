//Dig.JS
//Este script es pura trampa

var cmd = require('node-cmd');
var fs = require('fs');
var net = require('net');
var prompt = require('prompt');

const execSync = require('child_process').execSync;

var resultado = []
var dnsList = [ '8.8.8.8', 
				'8.8.4.4', 
				'200.44.32.12', 
				'200.44.32.13', 
				'192.168.2.110'
			  ];

var cb;

var opcion;

cb = fs.readFileSync('/etc/resolv.conf', 'utf8');
cb = cb.replace(/(\r|\n)/g,"");
cb = cb.split('nameserver');
//console.log(cb);

for (i = 0; i< cb.length; i++){
	cb[i] = cb[i].trim();
	//console.log(cb[i]);
	//cb[i] = cb[i].split(' ').join('');
	if(net.isIP(cb[i])>0){
		dnsList.push(cb[i]);
	}
}

console.log(dnsList);
if(process.argv[2]){
	console.log(process.argv[2]);

	for (i = 0; i < dnsList.length; i++){
		console.log('server: ' + dnsList[i]);
		resultado.push(execSync('dig @'+dnsList[i]+' '+process.argv[2]+' +short').toString());
		console.log('result: ' + execSync('dig @'+dnsList[i]+' '+process.argv[2]+' +short').toString());
	}
} 
else {
	console.log('non argv');
}
console.log(resultado);
