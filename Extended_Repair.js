describe('Test suite for CSP',function() {
	var url = 'https://www-uat.tecprotec.co/';
			beforeEach(function() {
			console.log("before each case");
			browser.waitForAngularEnabled(false);
			browser.manage().window().maximize();
			browser.get(url);
			});

			it('Extended Repair',function() {
				browser.sleep(3000);
				console.log("Inside the CSR Section test");
				var driver = browser.driver;
				var EC = protractor.ExpectedConditions;
				var loginButton = element(by.cssContainingText('.display-desktop .login-btn','Sign In'));
				browser.wait(EC.elementToBeClickable(loginButton), 9000);
				loginButton.click();
				browser.sleep(3000);
				
				element(by.xpath("//*[@id='isLogin']/app-login/div/div/div[2]/form/div[1]/input")).sendKeys("+601117812690");
				
				element(by.xpath("//*[@id='isLogin']/app-login/div/div/div[2]/form/div[2]/input")).sendKeys("Krishna@123");
				browser.sleep(5000);
				element(by.xpath("//*[@id='isLogin']/app-login/div/div/div[2]/form/div[3]/button")).click();
				browser.sleep(5000);
				
				element(by.css("#navbarDropdown")).click().then(function() {
					browser.sleep(3000);
					element(by.xpath("//*[@id='navbarSupportedContent']/ul/li[2]/div/a[3]")).click();		
				});
			
				browser.sleep(3000);
				element(by.cssContainingText('option','RM 3001.00 - RM 4000.00')).click();
				browser.sleep(3000);
				
				element.all(by.cssContainingText('button', 'Buy Now')).get(1).click();
				browser.sleep(3000);

				element(by.xpath("//input[@formcontrolname='deviceIMEI']")).sendKeys("546436655777778");
				
				element.all(by.xpath("//input[@formcontrolname='deviceBrand']")).then(function() {
					browser.sleep(3000);
					element(by.xpath(".//*[text()='Apple']")).click();		
				});
				
				element.all(by.xpath("//input[@formcontrolname='deviceModel']")).then(function() {
					browser.sleep(3000);
					element(by.xpath(".//*[text()='iPhone 6-32GB']")).click();		
				});
				
				element.all(by.xpath("//input[@formcontrolname='devicePrice']")).sendKeys("1222");
				browser.sleep(3000);
				browser.actions().sendKeys(protractor.Key.TAB).perform();
				
				browser.sleep(3000);
				element(by.xpath("//button[contains(@data-date,'2018-12-03')]")).click();
				browser.sleep(3000);
				
				element(by.xpath("//input[@formcontrolname='invoiceImageUrl']")).sendKeys("C:\\Users\\krishnaprasad\\Pictures\\Capture 2.PNG");
							
				browser.sleep(3000);
								
				console.log("After click button");
				
				//element(by.xpath(".//span[contains(@class,'checkmark')]")).click();
				browser.sleep(8000);
				element(by.css('.checkbox .checkmark')).click();
				
				element.all(by.xpath("//input[@formcontrolname='paymentMethod']")).then(function() {
					browser.sleep(3000);
					element(by.xpath(".//*[text()='Credit card / debit card']")).click();		
				});
				
				element(by.xpath("//button[contains(.,'Buy Now')]")).click();
				browser.sleep(8000);
				
				var amount = element(by.css('div.col-sm-5 div.col-6.text-right h4')).getText();
				console.log("Amount is "+amount);
				browser.sleep(3000);
				element(by.css('#braintree__card-view-input__cardholder-name')).sendKeys("TestABC");
				browser.sleep(3000);
								
				var CNumLoc = by.xpath("//*[@id='braintree-hosted-field-number']");
				var e1l = driver.findElement(CNumLoc);
				browser.switchTo().frame(e1l);

				driver.findElement(by.xpath("//*[@id='credit-card-number']")).sendKeys("4111111111111111");
				
				browser.switchTo().defaultContent();
				browser.waitForAngular();
				
				var ExpLoc= by.xpath("//*[@id='braintree-hosted-field-expirationDate']");
				var el2 = driver.findElement(ExpLoc);
				browser.switchTo().frame(el2);

				driver.findElement(by.xpath("//*[@id='expiration']")).sendKeys('12/22');
				
				browser.switchTo().defaultContent();
				browser.waitForAngular();
				
				browser.sleep(3000);
				browser.switchTo().defaultContent();
				
				var CVVLoc= by.xpath("//*[@id='braintree-hosted-field-cvv']");
				var el2 = driver.findElement(CVVLoc);
				browser.switchTo().frame(el2);

				driver.findElement(by.xpath("//*[@id='cvv']")).sendKeys('122');
				
				browser.switchTo().defaultContent();
				browser.waitForAngular();
				
				browser.sleep(3000);
				element(by.css('#submit-button')).click();
				browser.sleep(50000);
				browser.waitForAngular();
				
				$(".paymentStatus").getText().then(function(text){
				console.log("Policy status is ==>"+text);
				expect(text.trim()).toEqual("Payment Successful!");
				});
			
			 element.all(by.css(".heading")).get(0).getText().then(function(text){
				console.log(text);
			 });
			 
				element.all(by.css(".heading")).get(1).getText().then(function(text){
				console.log(text);
				browser.sleep(3000);
				});
				
				browser.switchTo().frame(driver.findElement(by.name('chat-widget'))).then(function() {
				element.all(by.css('.lc-1k5fzox svg')).get(1).click();
				browser.sleep(3000);
				browser.switchTo().defaultContent();
				browser.waitForAngular();
				});
				
				element(by.css(".display-desktop .loggedInUser")).click().then(function() {
					browser.sleep(3000);
					element.all(by.xpath("//a[@href='/user/profile']")).get(1).click();		
				});
				
				browser.sleep(3000);
				element(by.xpath("//app-profile/section/div/div/div[1]/div[2]")).click();
				browser.sleep(3000);
				
				element.all(by.css('.col-md-6 p')).get(0).getText().then(function(text){
				console.log(text);
				});
				
				browser.sleep(3000);
				element(by.xpath("//app-profile/section/div/div/div[1]/div[3]")).click();
				browser.sleep(3000);
				
				element(by.xpath("//app-profile/section/div/div/div[2]/div/div[1]/table/thead/tr/th[1]")).getText().then(function(text){
				console.log(text);
				
				});
			});
		});