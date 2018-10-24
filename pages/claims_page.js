var claims_page = function() {
    
    this.button = element(by.xpath("//a[contains(.,'Claim Now')]"));
    this.name =  element(by.xpath("//input[@placeholder='Name*']"));
    this.email = element(by.xpath(".//*[@id='claimForm']/div/div/div/form/div[1]/div[2]/input"));
    this.number = element(by.xpath("//input[@formcontrolname='mobileNo']"));
    this.message = element(by.xpath("//textarea[@formcontrolname='message']"));
    this.submit = element(by.xpath("//button[contains(.,'SUBMIT')]"));
    
    this.claimButton = function() {
        return this.button.click();
    };
    
    this.getName = function() {
    	return this.name.sendKeys("Test2");
    };
    
    this.getEmail = function() {
    	return this.email.sendKeys("abc@gmail.com");
    };
    
    this.getMobileNum = function() {
    	return this.number.sendKeys("099494959696");
    };
    
    this.getMessage = function() {
    	return this.message.sendKeys("Test demo 1");
    };
    
    this.getSubmit = function() {
    	return this.submit.click();
    };
        
};

module.exports = claims_page;