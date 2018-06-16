//Lib for PDF readind
var pdfUtil = require('pdf-to-text');

module.exports = function (file,res){
	pdfUtil.pdfToText('./src/temp/'+file+'', function(err,data){
		if(err){
			//throw(err);
		}else{
			//rendering in the web the result
			res.json(data);
		}
	}).done();
};