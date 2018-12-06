var claims_page = require('./pages/claims_page.js');

var claimsPageObj;

describe('Test suite for Claims', function() {

	beforeEach(function() {
		console.log("before each case");
		browser.waitForAngularEnabled(false);
		claimsPageObj = new claims_page();
		
		var url = 'https://www-uat.tecprotec.co/';
		browser.manage().window().maximize();
		browser.get(url);
	});

	it('Claims', function() {
		console.log("Inside the Claims section test1");
		browser.sleep(3000);
		element(by.linkText('CLAIM')).click();
		claimsPageObj.claimButton();
		browser.sleep(3000);
		claimsPageObj.getName();
		browser.sleep(3000);
		claimsPageObj.getEmail();
		browser.sleep(3000);
		claimsPageObj.getMobileNum();
		browser.sleep(3000);
		claimsPageObj.getMessage();
		browser.sleep(2000);
		claimsPageObj.getSubmit();
		browser.sleep(3000);

		element(by.xpath('//app-thankyou/div/div/div/div[1]/h2')).getText().then(function(text) {
			browser.sleep(3000);
			console.log("Text1 is "+text.trim());
			expect(text.trim()).toEqual("Thanks for submitting your claim details! We'll be in touch with you within 1 business day.");
		});
			
		element(by.xpath('//app-thankyou/div/div/div/div[1]/p')).getText().then(function(text1) {
			browser.sleep(3000);
			console.log("Text2 is "+text1);
			expect(text1.trim()).toEqual("Available from Monday to Sunday, 9am to 6pm, excluding Public Holidays.");
		});
	});
});