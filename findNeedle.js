var request = require('request')
var requestPost = require('requestPost')
var fs = require('fs')

var apiKey = fs.readFileSync ('apikey.txt', 'utf8').trim();

var url = 'http://challenge.code2040.org/api/haystack';

var postToken = {
	'token': apiKey
}

requestPost (url, postToken, bodyCallback);

function bodyCallback (body) {
	var needle = body['needle'];
	var haystack = body['haystack'];
	var numHay = haystack.length;
	var newUrl = 'http://challenge.code2040.org/api/haystack/validate';
	
	//Once the matching "needle" is found it is POSTed back to the endpoint.
	for (i = 0; i < numHay; i++) {
		if (haystack[i] == needle) {
			var postData = {
				'token': apiKey,
				'needle': i.toString()
			}
			requestPost (newUrl, postData);
		}
	}
}
