var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')               
       .on('error', function (err) {                                  
         throw err; 
       })
       .on('response', function (response) {                           
         console.log('Response Status Code: ', response.statusMessage, '\nContent Type:', response.headers['content-type']);
       })
       .on('data', function (response) {                           
         console.log('Downloading Content...');
       })
       .on('end', function (response) {                           
         console.log('Download Complete!');
       })
       .pipe(fs.createWriteStream('./future.jpg'));               
