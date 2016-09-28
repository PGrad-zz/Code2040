var request = require('request')
var requestPost = require('requestPost')
var fs = require ('fs')

var url = 'http://challenge.code2040.org/api/register';

//To protect my API key, it is read from a file not synced with version control (not public).
var apiKey = fs.readFileSync ('apikey.txt', 'utf8').trim(); 

var postData = {
	'token': apiKey,
	'github': 'https://github.com/PGrad/Code2040'
}

//I created this module to handle POST requests.
requestPost (url, postData);
