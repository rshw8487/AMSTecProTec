var contactus_page = require('./pages/contactus_page.js');
var contactusPageObj;

describe('Regressio test suite', function() {

	beforeEach(function() {
		console.log("before each case");
		contactusPageObj = new contactus_page();
		var url = 'https://www-uat.tecprotec.co/contact-us';
		browser.manage().window().maximize();
		browser.get(url);
	});

	it('test1', function() {
		console.log("Inside the ContactUS section test1");
		
		contactusPageObj.getName();
		browser.sleep(5000);
		contactusPageObj.getEmail();
		browser.sleep(5000);
		contactusPageObj.getMobileNum();
		browser.sleep(5000);
		contactusPageObj.getMessage();
		browser.sleep(2000);
		contactusPageObj.getSubmit();
		browser.sleep(5000);
		
	});
});