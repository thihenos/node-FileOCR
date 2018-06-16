'use strict';

module.exports = function (app) {

	//Using multer for file upload
	let multer = require('multer');

	/* 
	* Pointing the folder we want to save the files
	* I am using ./src only, because in app.js file, in line 24, we point to node consider the folder src static
	*/
	let upload = multer({dest:'./src/temp'});

	//FileStreaming LIb
	let fs = require("fs");

	//Route Example
	
	//Getting the page for multiples upload example
	app.get('/files/',function(req, res) {
	  	res.render('multFiles');
	});

	//Getting the page for single upload example
	app.get('/file/',function(req, res) {
	  	res.render('file');
	});

	/* 
	* Example with one file upload
	* In this example, inside single() function, we use the name of the name of the element in the html
	* which we are sending the post, in this case, it is called file ( check line 19 of file.dust file )
	*/
	app.post('/file', upload.single('file'),function(req, res) {
	  	if(req.file){
	  		console.log(req.file)
		  		let fileExt = req.file.originalname.slice((req.file.originalname.lastIndexOf(".") - 1 >>> 0) + 2);
		  		console.log(fileExt)
				//Verifying if it is a PDF
				if(fileExt === 'pdf'){
					require('../server/utils/pdfToText')(req.file.filename,res);
				}else
				//Verifying if it is a DOCX
				if(fileExt === 'docx'){
					require('../server/utils/docxToText')(req.file.filename,res);
				}else
				//Verifying if it is a DOC
				if(fileExt === 'doc'){
					require('../server/utils/docToText')(req.file.filename,res);
				}else
				//Verifying if it is a TXT
				if(fileExt === 'txt'){
					require('../server/utils/txtToText')(req.file.filename,res);
				}else
				//Verifying if it is a Image
				if(fileExt === 'jpeg' || fileExt === 'jpg' || fileExt === 'png'){
					require('../server/utils/imgToText')(req.file.filename,res);
				}
		}
	});

	/* Example with multi file upload
	* Using any() function, this make all elements that handle woth file in body tag
	* to be uploaded
	*/
	app.post('/files',upload.any(),function(req, res) {
		if(req.files){
	  		req.files.forEach(function(data) {
				let fileExt = data.originalname.slice((data.originalname.lastIndexOf(".") - 1 >>> 0) + 2);
				//Verifying if it is a PDF
				if(fileExt === 'pdf'){
					require('../server/utils/pdfToText')(data.filename,res);
				}else
				//Verifying if it is a DOCX
				if(fileExt === 'docx'){
					require('../server/utils/docxToText')(data.filename,res);
				}else
				//Verifying if it is a DOC
				if(fileExt === 'doc'){
					require('../server/utils/docToText')(data.filename,res);
				}else
				//Verifying if it is a TXT
				if(fileExt === 'txt'){
					require('../server/utils/txtToText')(data.filename,res);
				}else
				//Verifying if it is a Image
				if(fileExt === 'jpeg' || fileExt === 'jpg' || fileExt === 'png'){
					require('../server/utils/imgToText')(data.filename,res);
				}
			});
		}
	});

};