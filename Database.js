describe('Test suite for Terms of Use', function() {

	it('testdb', function() {
		console.log("Inside the DB page");

		var pg1 = require('pg');
		
		var connectionString = "postgres://root:password@fom-digital-dev.cqawwlhgqyb6.ap-southeast-1.rds.amazonaws.com:5432/Prod-Test";
		
		//var pool = new Pool(connectionString);
		
		var client = new pg1.Client(connectionString);
		client.connect(function(err){
			if(err){
				console.log("Return connection error"+err);
			}
			
		var sql = "select * from d2c_payment_customer_mobile_otp where mobile_no=' 601117812690'";
		
		client.query(sql, function(err,rows){
			if(!err){
				Object.keys(rows).forEach(function(keyItem){
					var row = rows[keyItem];
					console.log(row.otp);
				});
				console.log("Value is "+rows.count());
			}
		});

		});
				
	});
});