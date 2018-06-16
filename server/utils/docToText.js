//Lib for DOC reading
var WordExtractor = require('word-extractor');

module.exports = function (file,res){
	var docExtractor = new WordExtractor();
	docExtractor.extract('./src/temp/'+file+'').then(function(data){
		res.json(data.getBody());
	});
};