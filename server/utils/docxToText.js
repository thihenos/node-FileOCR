//Lib for DOCX reading
var mammoth = require('mammoth');

module.exports = function (file,res){
	mammoth.extractRawText({path: './src/temp/'+file+''}).then(function(data){
		res.json(data.value);
	}).done();
};
