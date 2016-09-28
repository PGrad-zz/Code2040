var request = require('request');
var requestPost = require('requestPost');
var moment = require('moment');
var fs = require('fs');

var url = 'http://challenge.code2040.org/api/dating';
var apikey = fs.readFileSync ('apikey.txt', 'utf8').trim();

var postToken = {
        'token': apikey
}

requestPost (url, postToken, bodyCallback);

function bodyCallback (body) {
        var datestamp = body['datestamp'];
	var interval = body['interval'];
	var newUrl = 'http://challenge.code2040.org/api/dating/validate';
	
	/*The original offset is found to set the offset of the Date object returned from moment.
	Otherwise, moment returns a Date with the current location's offset.*/
	var offset = moment.parseZone(datestamp).utcOffset();
	var newDatestamp = moment (datestamp).utcOffset(offset).add (interval, 'seconds').format().toString();
	
	var postData = {
                'token': apikey,
                'datestamp': newDatestamp
        }
        requestPost (newUrl, postData);
}
