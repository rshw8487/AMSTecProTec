var repair_page = require('./pages/repair_page.js');
var repairPageObj;

describe('Test suite for Repair', function() {
	
	beforeEach(function() {
		console.log("before each case");
		browser.waitForAngularEnabled(false);
		repairPageObj = new repair_page();
		var url = 'https://www-uat.tecprotec.co/';
		browser.manage().window().maximize();
		browser.get(url);
	});
	
	it('test2', function() {
		console.log("Inside the Repair section");
		element(by.linkText('REPAIR')).click();
		browser.sleep(3000);
		repairPageObj.bookButton();
		
		element.all(by.css('.col-md-6')).get(0).click().then(function() {
			browser.sleep(3000);
			browser.actions().mouseMove(element(by.xpath(".//*[text()='BATU KAWA']"))).click().perform();		
		});
		
		element.all(by.css('.col-md-6')).get(1).click().then(function() {
			browser.sleep(3000);
			element(by.xpath(".//*[text()='APPLE']")).click();		
		});
		
		element.all(by.css('.col-md-6')).get(2).click().then(function() {
			browser.sleep(3000);
			element(by.xpath(".//*[text()='IPHONE 5 16GB']")).click();		
		});
		
		element.all(by.css('.col-md-6')).get(3).click().then(function() {
			browser.sleep(3000);
			element(by.xpath(".//*[text()='Screen replacement']")).click();		
		});
		
		element(by.css('.repairType')).getText().then(function(text){
			console.log("Repair type is "+text);
		});
		
		element(by.css('.money')).getText().then(function(money){
			console.log("Money is "+money);	
		});
		
		browser.sleep(3000);
		repairPageObj.getName();
		browser.sleep(3000);
		repairPageObj.getEmail();
		browser.sleep(3000);
		repairPageObj.getMobileNum();
		browser.sleep(3000);
		repairPageObj.getMessage();
		browser.sleep(3000);
		repairPageObj.getSubmit();
		
		element(by.xpath('//app-thankyou/div/div/div/div[2]/h2')).getText().then(function(text) {
			browser.sleep(3000);
			console.log("Text is "+text.trim());
			expect(text.trim()).toEqual("Thank you for booking a repair session with our trusted TecPro! We'll contact you within 60 minutes.");
		});
			
		element(by.xpath('//app-thankyou/div/div/div/div[2]/p')).getText().then(function(text1) {
			browser.sleep(3000);
			console.log("Text is "+text1);
			expect(text1.trim()).toEqual("Available from Monday to Sunday, 9am to 6pm, excluding Public Holidays.");
		});
	});
});