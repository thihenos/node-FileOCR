//File Streaming lib
var fs = require('fs');

module.exports = function (file,res){
	fs.readFile('./src/temp/'+file,'utf8', function(err,data){
			res.file(data);
	});
};