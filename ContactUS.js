var contactus_page = require('./pages/contactus_page.js');
var contactusPageObj;

describe('Test suite for ContactUS', function() {

	beforeEach(function() {
		console.log("before each case");
		contactusPageObj = new contactus_page();
		var url = 'https://www-uat.tecprotec.co/contact-us';
		browser.manage().window().maximize();
		browser.get(url);
	});

	it('Contact US', function() {
		console.log("Inside the ContactUS section");
		
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
		
		element(by.xpath('//app-thankyou/div/div/div/div[2]/h2')).getText().then(function(text1) {
			browser.sleep(3000);
			console.log("Text is "+text1);
			expect(text1.trim()).toEqual("Thank you for contacting us!");
		});
		
	});
});