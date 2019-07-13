const request = require('request');
 
_EXTERNAL_URL = ['http://production.shippingapis.com/ShippingApi.dll?API=TrackV2&XML=<TrackRequest USERID="163SERVI0710"><TrackID ID="9261292700521704012877"> </TrackID></TrackRequest>',
									'http://production.shippingapis.com/ShippingApi.dll?API=TrackV2&XML=<TrackRequest USERID="163SERVI0710"><TrackID ID="9261292700521704012877"> </TrackID></TrackRequest>'];

const callExternalApiUsingRequest = (callback) => {
	var parser = require('xml2json');
	var answer = {'quote': []};
	for (var name in _EXTERNAL_URL) {
	  request(_EXTERNAL_URL[name], { json: false }, (err, res, body) => {
		  if (err) { 
		    return callback(err);
		  }
		  var ans = parser.toJson(body);
		  console.log(ans);
		  answer['quote'].push("Hai");
	  });
	}
	return answer;
}

module.exports.callApi = callExternalApiUsingRequest;