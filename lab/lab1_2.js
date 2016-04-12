	//stub for lab 1_2
	var AWS = require('aws-sdk');

	AWS.config.loadFromPath('./config.json');

	var task =  function(request, callback){

		var params = {
	  DryRun: true || false,
	  Filters: [
	    {
	      /*Name: 'STRING_VALUE',
	      Values: [
	        'STRING_VALUE',
	         more items 
	      ]*/
	    },
	    /* more items */
	  ],
	  InstanceIds: [
	   /* 'STRING_VALUE',
	     more items */
	  ],
	  MaxResults: 10,
	  NextToken: 'STRING_VALUE'
	};

		ec2.describeInstances(params, function(err, data) {
		  if (err) {
		  	console.log(err, err.stack)
		  }
		  else     {
		  console.log(data);      
		  }     // successful response
		
		
	}

	exports.lab = task