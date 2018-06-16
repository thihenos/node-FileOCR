//Vision Lib
const Vision = require('node-google-vision');

//Parameters of config, please, check node-google-vision documentation on NPM 
const GoogleParameter = {
	keyFilename: "./server/secure/key.json",
	projectID: '448008553338'
};

const vision = new Vision(GoogleParameter);

//Observation, the image can be a local image path, a HTTPS/HTTP Url or even a google cloud storaged image

module.exports = function (image){
	let auxJson = [];
	vision.faceDetection(image).then(function(result){
		auxJson.push(result);
	}).catch(function(error){
		console.log(error);
	});
	vision.safeSearchDetection(image).then(function(result){
		auxJson.push(result);
	}).catch(function(error){
		console.log(error);
	});
	vision.logoDetection(image).then(function(result){
		auxJson.push(result);
	}).catch(function(error){
		console.log(error);
	});
	vision.labelDetection(image).then(function(result){
		auxJson.push(result);
	}).catch(function(error){
		console.log(error);
	});
	vision.landmarkDetection(image).then(function(result){
		auxJson.push(result);
	}).catch(function(error){
		console.log(error);
	});
	vision.textDetection(image).then(function(result){
		auxJson.push(result);
	}).catch(function(error){
		console.log(error);
	});
	vision.imageProperties(image).then(function(result){
		auxJson.push(result);
	}).catch(function(error){
		console.log(error);
	});
	vision.webDetection(image).then(function(result){
		auxJson.push(result);
	}).catch(function(error){
		console.log(error);
	});
	vision.documentTextDetection(image).then(function(result){
		auxJson.push(result);
	}).catch(function(error){
		console.log(error);
	});
	res.json(auxJson);
};