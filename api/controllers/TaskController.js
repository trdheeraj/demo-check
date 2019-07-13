/**
 * TaskController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  	getQuote: function(req, res) {
  		var parser = require('xml2json');
      return res.json({ quote: usps_api.callApi(function(response){
          console.log(response);
          // var ans = parser.toJson(response);
          // console.log(ans);
          res.write(response);
          res.end();
      	}) 
    	});
    }

};

