//var repair_page = require('./pages/repair_page.js');
//var repairPageObj;

describe('Test for Login', function() {
	var url = 'https://www-uat.tecprotec.co/';
	beforeEach(function() {
		console.log("before each case");
	//	repairPageObj = new repair_page();
		browser.waitForAngularEnabled(false);
		
		browser.manage().window().maximize();
		browser.get(url);
	});
	
	it('Test for Login', function() {
		console.log("Inside the Login section");
		
		browser.sleep(9000);
		var EC = protractor.ExpectedConditions;
		var loginButton = 	element(by.cssContainingText('.display-desktop .login-btn','Sign In'));
		browser.wait(EC.elementToBeClickable(loginButton), 9000);
		loginButton.click();
		browser.sleep(5000);
		
		element(by.xpath("//*[@id='isLogin']/app-login/div/div/div[2]/form/div[1]/input")).sendKeys("+601117812690");
		
		element(by.xpath("//*[@id='isLogin']/app-login/div/div/div[2]/form/div[2]/input")).sendKeys("Krishna@123");
		browser.sleep(5000);
		element(by.xpath("//*[@id='isLogin']/app-login/div/div/div[2]/form/div[3]/button")).click();
		browser.sleep(5000);
		browser.get(url+'user/profile');
	/*	element(by.css('.lc-19t2ho9 .e1m5b1js0')).click();
		
		browser.sleep(5000);
		var profile = element(by.xpath("//a[contains(.,'My Account')]"));
		profile.click();*/
		browser.sleep(5000);
	//	element.all(by.css('.display-desktop')).get(0).click().then(function() {
			//console.log("Text"+text.length);
			
			/*this.myElement = element.all(by.xpath("//*[@id='loginSignupModal']/button[1]")).first();
			var EC = protractor.ExpectedConditions;
			var isClickable = EC.elementToBeClickable(this.myElement);
			browser.wait(isClickable, 30000);
			browser.actions().mouseMove(this.myElement).perform();
			this.myElement.click();	*/	
	//	});
		
		
		
				
		//element(by.xpath("//button[normalize-space(text()='Sign In'])[1]"))
  //element(by.buttonText('SIGN IN')).click();
  //	element(by.xpath("//*[@class='userModalBtn text-center display-desktop']/button[1]")).click();
	
//	var EC = protractor.ExpectedConditions;

	// open sidebar menu
	/*	var menuToggleButton = element(by.css('ion-side-menus [nav-bar="active"] [menu-toggle="left"]'));
	menuToggleButton.click();*/
	
	/*element(by.css('.container-fluid')).all(by.css('#loginSignupModal')).get(0).getText().then(function(text){
	        if(text==='Sign In')
	            element(by.css('.btn login-btn')).get(0).click();
	       else
	           element(by.css('.btn signin-btn')).get(0).click();
	});*/

	//var settingsLink = element(by.xpath("//button[normalize-space(text()='Sign In'])[1]"));
	
	//console.log("====="+settingsLink.getText());
/*	
	var isSettingsLinkClickable = EC.elementToBeClickable(settingsLink);

	browser.wait(isSettingsLinkClickable, 9000); //wait for the element to become clickable

	settingsLink.click();
*/	
	//$$('#loginSignupModal').get(0).$$('.btn.login-btn').click();
	
	
	
	//browser.actions().mouseMove(executeScript(e1)).click();
		
		/*browser.wait(protractor.ExpectedConditions.elementToBeClickable(ele), 8000, 'Element not clickable');
		ele.click();	*/	
		
		
	/*	element.all(by.css('.lc-1vdo6ze e5ibypu0')).get(0).click();
		browser.sleep(3000);*/
						
/*	  element.all(by.xpath("//*[@id='loginSignupModal']/button[1]")).first().click().then(function (ele, timeout) {
		    browser.wait(EC.elementToBeClickable(ele), timeout);
		    return true;
		});

	  browser.actions().mouseMove(element).click();
*/
	   
		//button[contains(.,'        Sign In      ')]

		//	var ele = element(by.xpath("(//button[normalize-space(text())='Sign In'])[1]"));
	
/*	var waitUntilElementInVisible = function(ele,timeout=6000){
		//>>>>>>> 0b2587a54cfd10b3a32628b1e3688301c9b0f9be
		    //await browser.waitForAngular();
		     browser.wait(EC.invisibilityOf(ele), timeout).catch(function (err) {
		        throw new Error("Error occured while waiting for element with locator:" + ele.locator() + " to disappear, Exception message:" + err + " stackTrace: " + err.stack);
		    });
		    return true;
		};*/
		
		/*		
	     
			var waitUntilElementClickable = function (ele, timeout) {
			    browser.wait(EC.elementToBeClickable(ele), timeout).catch(function (err) {
			        throw new Error("Error occured while waiting for element to be clickable with locator:" + ele.locator() + ", Exception message:" + err + " stackTrace: " + err.stack);
			    });
			    return true;
			};

			var isElementVisible = function (ele, timeout) {
			    var isVisible = false;
			    isVisible = await browser.wait(EC.visibilityOf(ele), timeout).catch(function (err) {
			        "use strict";
			        return false;
			    });
			    return isVisible;

			};*/
		
		/*var EC = protractor.ExpectedConditions;
		// Waits for the element with id 'abc' to be clickable.
		browser.wait(EC.elementToBeClickable($('#abc')), 5000);
		var element = $('#div')*/;
		
			
		//element(by.xpath("//div[@class='userModalBtn']//div[@class='btn login-btn']")).click();
		
		
		/*var waitUntilElementInVisible = async function(ele,timeout=60000){
			>>>>>>> 0b2587a54cfd10b3a32628b1e3688301c9b0f9be
			    //await browser.waitForAngular();
			    await browser.wait(EC.invisibilityOf(ele), timeout).catch(function (err) {
			        throw new Error("Error occured while waiting for element with locator:" + ele.locator() + " to disappear, Exception message:" + err + " stackTrace: " + err.stack);
			    });
			    return true;
			};

			var waitUntilElementClickable = async function (ele, timeout) {
			    await browser.wait(EC.elementToBeClickable(ele), timeout).catch(function (err) {
			        throw new Error("Error occured while waiting for element to be clickable with locator:" + ele.locator() + ", Exception message:" + err + " stackTrace: " + err.stack);
			    });
			    return true;
			};

			var isElementVisible = async function (ele, timeout) {
			    var isVisible = false;
			    isVisible = await browser.wait(EC.visibilityOf(ele), timeout).catch(function (err) {
			        "use strict";
			        return false;
			    });
			    return isVisible;

			};*/
			
		//repairPageObj.bookButton();
		//element(by.css('.html body app-root div app-about-us app-header nav.navbar.navbar-fixed-top.navbar-expand-lg div.container-fluid div#loginSignupModal.userModalBtn.text-center.display-desktop button.btn.login-btn')).click();
		/*	var li = element(by.xpath("//*[@id='navbarSupportedContent']/ul[1]/li[4]/a[1]"));
		
		$('button[name="LOG IN"]').click();
		
		console.log("After claim" + li.getText());*/
		/*	li.getAttribute('value').then(function (value) {
		    console.log(value);
		});
		li.click();*/
		/*element(by.xpath('//*[@id="loginSignupModal"]')).click().then(function(test) {
			console.log("Size is"+test.count());
		*/
		
		//$$('button#login-btn').get(0).click();
		/*
		element(by.xpath("//button[contains(.,'Sign In')]")).click().then(function(text){
			expect(text.trim().toEqual("Login"));
			console.log("Lenght is "+text.count());
		});*/
		
		//browser.actions().mouseMove(element(by.xpath(".//*[text()='SIGN IN']"))).click().perform();
//		element.all(by.id('loginSignupModal')).get(0).click().then(function(text) {
//			browser.sleep(3000);
//			expect(text.toEqual("SIGN IN"));
//			element(by.xpath(".//*[text()='Sign In']")).click();		
//		});
		
		//var foo = element(by.id('loginSignupModal'));
		//expect(foo.getAttribute('class')).toEqual('login-btn');
		/*	
	browser.wait(function() {
			   return element(by.css('./login-btn')).isPresent();
			}, 5000);
			   
		var f1 = element(by.buttonText('Sign In'));
		expect(f1.isSelected()).toBe(false);
		f1.click();
		//var el = var tag = browser.executeScript('return arguments[0].getText()', el);
		//expect(tag).toEqual('Sign In');
		//el.click();
		
		browser.sleep(6000);
	var EC = protractor.ExpectedConditions;
		var signinButton = element(by.id('loginSignupModal'));
		// waiting for 10 seconds that the button will be visible
		browser.wait(EC.visibilityOf(signinButton ), 10000, "Button signin not visible");
		    browser.executeScript('document.querySelector("#loginSignupModal").scrollIntoView()').then(function() {
		  signinButton.click().then(function() {
		    console.log('button has been clicked here');
		  });
		}); */
		
		//	element(by.xpath(".//*[text()='SIGN IN']")).click();
		//browser.actions().mouseMove(element.all(by.xpath("//*[@id='loginSignupModal']/button[1]"))).get(0).click().perform();	
		//element(by.css('#loginSignupModal > button.btn.login-btn')).click();
		/*element.all(by.xpath("//*[@id='loginSignupModal']/button[1]")).get(0).click().then(function() {
			browser.sleep(3000);
			browser.actions().mouseMove(element(by.xpath(".//*[text()='Sign In']"))).click().perform();		
		});*/
		
		/*element.all(by.css('.col-md-6')).get(1).click().then(function() {
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
		});*/
	});
});