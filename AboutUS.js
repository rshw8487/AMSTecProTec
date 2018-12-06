describe('Regression test suite', function() {

	beforeEach(function() {
		console.log("before each case");
		var url = 'https://www-uat.tecprotec.co/about-us';
		browser.manage().window().maximize();
		browser.get(url);
	});

	it('test1', function() {
		console.log("Inside the AboutUS page");
		browser.executeScript('window.scrollTo(400,400)');
		
		browser.sleep(8000);
		
	});
});