var claims_page = require('./pages/claims_page.js');

var claimsPageObj;
describe('Regressio test suite', function() {

	beforeEach(function() {
		console.log("before each case");
		claimsPageObj = new claims_page();
		var url = 'https://www-uat.tecprotec.co/claim';
		browser.manage().window().maximize();
		browser.get(url);
	});

	it('test1', function() {
		console.log("Inside the Claims section test1");

		claimsPageObj.claimButton();
		browser.sleep(5000);
		claimsPageObj.getName();
		browser.sleep(5000);
		claimsPageObj.getEmail();
		browser.sleep(5000);
		claimsPageObj.getMobileNum();
		browser.sleep(5000);
		claimsPageObj.getMessage();
		browser.sleep(2000);
		claimsPageObj.getSubmit();
		browser.sleep(5000);

	});
});