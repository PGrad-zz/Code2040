var request = require('request')
var requestPost = require('requestPost')
var fs = require('fs')

var apiKey = fs.readFileSync ('apikey.txt', 'utf8').trim();

var url = 'http://challenge.code2040.org/api/prefix';

var postToken = {
        'token': apiKey
}

requestPost (url, postToken, bodyCallback);

function bodyCallback (body) {
        var prefix = body['prefix'];
        var array = body['array'];
        var arrayLen = array.length;
        var newUrl = 'http://challenge.code2040.org/api/prefix/validate';
        var newArray = [];

	//The built-in startsWith function is used to find if a string begins with the prefix.
	for (i = 0; i < arrayLen; i++) {
        	if (!array[i].startsWith(prefix))
			newArray.push (array[i]);	
	}
	var postData = {
		'token': apiKey,
		'array': newArray
	}
	requestPost (newUrl, postData);
}
