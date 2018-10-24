describe(
		'test',
		function() {
			beforeEach(function() {
			console.log("before each case");
			var url = 'https://www-uat.tecprotec.co/protect/cracked-screen-protection';
			browser.manage().window().maximize();
			browser.get(url);
			});

			it('test',function() {
				browser.sleep(3000);
				console.log("Inside the CSP section test1");
				element(by.cssContainingText('option','RM 3001.00 - RM 4000.00')).click();
				browser.sleep(3000);
				element(by.cssContainingText('button', 'Buy Now')).click();
				browser.sleep(3000);

				browser.actions().mouseMove(element(by.xpath("//button[contains(.,'Continue as Guest')]"))).click().perform();
				
				browser.sleep(6000);

				element(by.xpath("//input[@formcontrolname='deviceIMEI']")).sendKeys("546436655777778");
				
				element.all(by.xpath("//input[@formcontrolname='deviceBrand']")).then(function() {
					browser.sleep(3000);
					element(by.xpath(".//*[text()='Apple']")).click();		
				});
				
				element.all(by.xpath("//input[@formcontrolname='deviceModel']")).then(function() {
					browser.sleep(3000);
					element(by.xpath(".//*[text()='iPhone 6']")).click();		
				});
				
				element.all(by.xpath("//input[@formcontrolname='priceRange']")).then(function() {
					browser.sleep(3000);
					element(by.xpath(".//*[text()='RM 1001.00 - RM 1500.00']")).click();		
				});
				
				element(by.xpath("//input[@placeholder='Purchase Date']")).sendKeys("2018-10-25");
				browser.sleep(3000);
				
				element(by.xpath("//input[@placeholder='Your Name']")).sendKeys("Test sample");
				browser.sleep(3000);
				
				element(by.xpath("//input[@placeholder='Mobile No.']")).sendKeys("02223456793");
				browser.sleep(3000);
				
				element(by.css()).sendKeys("02223456793");
				browser.sleep(3000);
				
				/*var form = driver.findElement(By.css('form'));
				var element = form.findElement(By.css('input[type=file]'));
				element.sendKeys('/path/to/file.txt');
				form.submit();*/
				
				browser.sleep(8000);
			});

		});