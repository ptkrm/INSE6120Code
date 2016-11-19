//server.js
//Recibir comandos

var express = require('express');
var dns = require('dns');
var Pageres = require('pageres');

var server = express();

server.get("/", function(req, res){
	res.send("Hola Mundo");
	console.log(req.ip);
	console.log('req recibido');
});

server.get("/dig/:host/:ip", function(req, res){
	//console.log(req.params);
	dns.lookup(req.params["host"], function(err, add){
		if(req.params["ip"] != add.toString()){
			var pageres = new Pageres()
    		.src(req.params["ip"], ['640x480'], {crop: true})
    		.dest(__dirname)
    		.run();
			console.log('missmatch: '+req.params["host"]+': '+ req.params["ip"] +' || ' +add);
		}
	});
	res.send('!');
});

server.listen(3000, function(){
	console.log('server running on port 3000!!')
});