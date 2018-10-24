var sellmydevice_page = function() {
    
    this.brand = element(by.cssContainingText('option', 'Apple'));
	this.device =  element.all(by.cssContainingText('option', 'iPad 16GB WiFi')).first();
    this.condition = element.all(by.cssContainingText('option', 'Working ')).first();
    this.name =  element(by.xpath("//input[@placeholder='Name*']"));
    this.email = element(by.xpath("//input[@placeholder='Email*']"));
    this.number = element(by.xpath("//input[@placeholder='Phone*']"));
    this.date = element(by.xpath("//input[@placeholder='Select preferred date']"));
    this.time = element(by.cssContainingText('option', '9 AM - 11 AM'));
    	
    this.submit = element(by.xpath("//button[contains(.,'SUBMIT')]"));
    
    
    this.brandName = function() {
        return this.brand.click();
    };
      
    this.deviceName = function() {
    	return this.device.click();
    };
    
    this.deviceCondition = function() {
    	return this.condition.click();;
    };
    
    this.getName = function() {
    	return this.name.sendKeys("Test2");;
    };
    
    this.getEmail = function() {
    	return this.email.sendKeys("abc@gmail.com");
    };
    
    
    this.getMobileNum = function() {
    	return this.number.sendKeys("099494959696");
    };
    
    this.getDate = function() {
    	return this.date.sendKeys("2018-10-25");
    };
    
    this.getTime = function() {
    	return this.time.click();
    };
    
    this.getSubmit = function() {
    	return this.submit.click();
    };
};

module.exports = sellmydevice_page;