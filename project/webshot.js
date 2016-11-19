var Pageres = require('pageres');
 
var pageres = new Pageres()
    .src('google.com', ['640x480'])
    .dest(__dirname)
    .run();