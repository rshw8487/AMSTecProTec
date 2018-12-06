var product_page = require('./pages/product_page.js');
var guestCSRPageObj;
var driver = browser.driver;

describe('Test suite for Guest CSR', function() {

	beforeEach(function() {
		browser.waitForAngularEnabled(false);
		guestCSRPageObj = new product_page();
		
		var url = 'https://www-uat.tecprotec.co/';
		browser.manage().window().maximize();
		browser.get(url);
	});

	it('Guest CSR', function() {
		console.log("Guest Cracked Screen Repair started");
		browser.sleep(3000);
		
		element(by.css('#navbarDropdown')).click().then(function() {
			browser.sleep(3000);
			element(by.xpath("//*[@id='navbarSupportedContent']/ul/li[2]/div/a[1]")).click();
		});
		
		browser.sleep(3000);
		guestCSRPageObj.getPriceRange(); 
		
		browser.sleep(3000);
		guestCSRPageObj.getBuyNowCSRButton();
		
		browser.sleep(3000);
		browser.actions().mouseMove(element(by.xpath("//button[contains(.,'Continue as Guest')]"))).click().perform();
		browser.sleep(3000);
		
		guestCSRPageObj.getIMEI();
		browser.sleep(2000);
		
		element.all(by.xpath("//input[@formcontrolname='deviceBrand']")).then(function() {
			browser.sleep(3000);
			element(by.xpath(".//*[text()='Apple']")).click();
		});
		
		element.all(by.xpath("//input[@formcontrolname='deviceModel']")).then(function() {
			browser.sleep(3000);
			element(by.xpath(".//*[text()='iPhone 6-32GB']")).click();		
		});
		browser.sleep(3000);
		guestCSRPageObj.getDevicePrice();
		
		browser.sleep(3000);
		browser.actions().sendKeys(protractor.Key.TAB).perform();
		browser.sleep(3000);
		
		element(by.xpath("//button[contains(@data-date,'2018-12-03')]")).click();
		browser.sleep(3000);
		
		element(by.xpath("//input[@formcontrolname='invoiceImageUrl']")).sendKeys("C:\\Users\\krishnaprasad\\Pictures\\Capture 2.PNG");
		browser.sleep(3000);	
		
		guestCSRPageObj.getPersonalName();
		browser.sleep(3000);

		guestCSRPageObj.getPersonalMobileNum();
		browser.sleep(3000);
		
		guestCSRPageObj.getPersonalEmail();
		
		browser.sleep(3000);
		
		browser.switchTo().frame(driver.findElement(by.name('chat-widget'))).then(function() {
			try{
		element.all(by.css('.lc-1k5fzox svg')).get(1).click();
		browser.sleep(3000);
			}catch(err) {
				console.log('In catch block');
			}
		browser.switchTo().defaultContent();
		browser.waitForAngular();
		}, function(err) {
			console.info('Chat Box not displayed on page. Proceeding with default Code');
		});
		
		element(by.css('.checkbox .checkmark')).click();
		browser.sleep(3000);
		
		element.all(by.xpath("//input[@formcontrolname='paymentMethod']")).then(function() {
			browser.sleep(3000);
			element(by.xpath(".//*[text()='Credit card / debit card']")).click();		
		});
		
		element(by.xpath("//button[contains(.,'Buy Now')]")).click();
		browser.sleep(5000);
		
		element(by.xpath("//ngx-braintree/div/div/div[1]/div/div[4]/div/div[2]/div/div[2]/h4")).getText().then(function(text){
			console.log("Amount is "+text);
			browser.sleep(3000);
		});
		
		browser.sleep(3000);
		guestCSRPageObj.getCardHolderName();
		
		browser.sleep(3000);
						
		var CNumLoc = by.xpath("//*[@id='braintree-hosted-field-number']");
		browser.switchTo().frame(driver.findElement(CNumLoc));
		driver.findElement(by.xpath("//*[@id='credit-card-number']")).sendKeys('4111111111111111');
		browser.switchTo().defaultContent();
		browser.waitForAngular();
		
		var ExpLoc= by.xpath("//*[@id='braintree-hosted-field-expirationDate']");
		browser.switchTo().frame(driver.findElement(ExpLoc));

		driver.findElement(by.xpath("//*[@id='expiration']")).sendKeys('12/22');
		
		browser.switchTo().defaultContent();
		browser.waitForAngular();
		browser.sleep(3000);
		browser.switchTo().defaultContent();
		
		var CVVLoc= by.xpath("//*[@id='braintree-hosted-field-cvv']");
		browser.switchTo().frame(driver.findElement(CVVLoc));

		driver.findElement(by.xpath("//*[@id='cvv']")).sendKeys('122');
		
		browser.switchTo().defaultContent();
		browser.waitForAngular();
		
		browser.sleep(3000);
		element(by.css('#submit-button')).click();
		browser.sleep(50000);
		browser.waitForAngular();
		
		$(".paymentStatus").getText().then(function(text){
		console.log("Response status is ===>"+text);
		expect(text.trim()).toEqual("Payment Successful!");
		});
		
		 element.all(by.css(".heading")).get(0).getText().then(function(text){
			console.log(text);
		 });
	 
		element.all(by.css(".heading")).get(1).getText().then(function(text){
		console.log(text);
		browser.sleep(3000);
		});
	
	});
});