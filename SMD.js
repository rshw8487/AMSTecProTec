var sellmydevice_page = require('./pages/sellmydevice_page.js');

var SMDPageObj;
describe('test', function() {

	beforeEach(function() {
		console.log("before each case");
		SMDPageObj = new sellmydevice_page();
		var url = 'https://www-uat.tecprotec.co/sell-my-device';
		browser.manage().window().maximize();
		browser.get(url);
	});
	/*
	 * beforeEach(function(){ console.log("before each case"); var
	 * url='https://www-uat.tecprotec.co/sell-my-device';
	 * browser.manage().window().maximize(); browser.get(url); })
	 */

	it('test', function() {
		console.log("Inside the SMD section test1");

		SMDPageObj.brandName();
		browser.sleep(2000);
		SMDPageObj.deviceName();
		browser.sleep(2000);
		SMDPageObj.deviceCondition();
		browser.sleep(2000);
		SMDPageObj.getName();
		browser.sleep(5000);
		SMDPageObj.getEmail();
		browser.sleep(5000);
		SMDPageObj.getMobileNum();
		browser.sleep(5000);
		element.all(by.css('.vs-dropdown')).get(2).click().then(
				function() {
					browser.sleep(5000);
					browser.actions().mouseMove(
							element(by.xpath(".//*[text()='BATU 3']"))).click()
							.perform();
				});

		browser.sleep(2000);
		SMDPageObj.getDate();
		browser.sleep(2000);
		browser.actions().sendKeys(protractor.Key.TAB).perform();
		browser.sleep(2000);
		SMDPageObj.getTime();
		browser.sleep(2000);
		browser.actions().sendKeys(protractor.Key.TAB).perform();
		browser.sleep(5000);
		SMDPageObj.getSubmit();
		browser.sleep(8000);
	});

});