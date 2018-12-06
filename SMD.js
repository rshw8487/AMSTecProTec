var sellmydevice_page = require('./pages/sellmydevice_page.js');

var SMDPageObj;
describe('Test suite for SMD', function() {

	beforeEach(function() {
		console.log("before each case");
		SMDPageObj = new sellmydevice_page();
		var url = 'https://www-uat.tecprotec.co/sell-my-device';
		browser.manage().window().maximize();
		browser.get(url);
	});

	it('test', function() {
		console.log("Inside the SMD section test1");

		SMDPageObj.brandName();
		browser.sleep(2000);
		SMDPageObj.deviceName();
		browser.sleep(2000);
		SMDPageObj.deviceCondition();
		browser.sleep(2000);
		SMDPageObj.getName();
		browser.sleep(3000);
		SMDPageObj.getEmail();
		browser.sleep(3000);
		SMDPageObj.getMobileNum();
		browser.sleep(3000);
		element.all(by.css('.vs-dropdown')).get(2).click().then(
				function() {
					browser.sleep(3000);
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
		browser.sleep(3000);
		SMDPageObj.getSubmit();
		browser.sleep(4000);
		
		element(by.xpath('//app-thankyou/div/div/div/div[2]/h2')).getText().then(function(text) {
			browser.sleep(3000);
			console.log("Thank you Text1 is:- "+text.trim());
			expect(text.trim()).toEqual("Thank you for submitting your details! We'll be in touch with you within 60 minutes.");
		});
			
		element(by.xpath('//app-thankyou/div/div/div/div[2]/p')).getText().then(function(text1) {
			browser.sleep(3000);
			console.log("Thank you Text2 is "+text1);
			expect(text1.trim()).toEqual("Available from Monday to Sunday, 9am to 6pm, excluding Public Holidays.");
		});
	});

});