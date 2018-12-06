describe('Test suite for Terms of Use', function() {

	beforeEach(function() {
		console.log("before each case");
		var url = 'https://www-uat.tecprotec.co/terms-of-use';
		browser.manage().window().maximize();
		browser.get(url);
	});

	it('test1', function() {
		console.log("Inside the TermsofUse page");
		browser.executeScript('window.scrollTo(400,400)');
		browser.sleep(8000);
		
	});
});