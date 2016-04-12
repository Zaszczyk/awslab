	//stub for lab 1_2
	var AWS = require('aws-sdk');

	AWS.config.loadFromPath('./config.json');

	var task =  function(request, callback){

		var params = {
	  DryRun: false,

	  MaxResults: 10,
	};
var ec2 = new AWS.EC2();

		ec2.describeInstances(params, function(err, data) {
		  if (err) {
				callback(null, err.stack)
		  }
		  else     {
		  callback(null, data);
		  }     // successful response


	}
}
	exports.lab = task
