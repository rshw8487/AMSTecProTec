var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
		directConnect: true,
		
		framework: 'jasmine',
		seleniumAddress: 'http://localhost:4444/wd/hub',
		
		specs: ['AboutUS.js'],
		specs: ['Claims.js'],
		specs: ['ContactUS.js'],
		specs: ['CrackedScreen_Repair.js'],
		specs: ['Damage_Repair.js'],
		specs: ['Extended_Repair.js'],
		specs: ['Guest_CrackedScreenRepair.js'],
		specs: ['Guest_Damage_Repair.js'],
		specs: ['Guest_ExtendedRepair.js'],
		specs: ['SMD.js'],
		specs: ['TermsofUse.js'],
		specs: ['CSR.js'],
		specs: ['Damage_Protection.js'],
		specs: ['Login.js'],
		specs: ['Guest_CSR.js'],
		
		allScriptsTimeout: 190000,
	    getPageTimeout: 25000,
		
		capabilities: {
			browserName: 'chrome'	
		},
		
		jasmineNodeOpts: {
		    showColors: true,   // Use colors in the command line report.  
		    defaultTimeoutInterval: 190000   // Default time to wait in ms before a test fails.
		    
	},
		//for reports
		onPrepare: function(){
		    return new Promise(function(fulfill, reject) {
		      browser.getCapabilities().then(function(value) {
		    	  
	    	  var today = new Date();
	    	  timeStamp = today.getMonth() + 1 + '-' + today.getDate() + '-' + today.getFullYear() + '-' + today.getHours() + 'h-' + today.getMinutes() + 'm';
		       
	    	  reportName = 'protractor-report-' + '_' + value.get('browserName') + '_' + timeStamp;
		        
	    	  jasmine.getEnv().addReporter(
		          new Jasmine2HtmlReporter({
		        	  
		            savePath: './reports',
		            docTitle: 'Web TecProtec Test Report',
		            screenshotsFolder: './screenshots',
		            //takeScreenshots: true,
		            takeScreenshotsOnlyOnFailures: true,
		            consolidate: true,
		            consolidateAll: true,
		            preserveDirectory: true,
		            cleanDirectory: false,
		            //fixedScreenshotName: true,
		            fileName: "TecProtec-report.html",
		            fileNamePrefix: reportName
		          })
		        );
		        fulfill();
		      });
		    });
		  },

		  afterLaunch: function afterLaunch() {
		    var fs = require('fs');
		    var output = '';
		    
		    fs.readdirSync('./reports/').forEach(function (file) {
		      if (!(fs.lstatSync('./reports/' + file).isDirectory()))
		        output = output + fs.readFileSync('./reports/' + file);
		    });
		    fs.writeFileSync('./reports/ConsolidatedReport.html', output, 'utf8');
		  }
			/*
			jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
				savePath: './reports',
				takeScreenshots : true,
				fixedScreenshotName:true,
				consolidateAll : true
			})
			);*/
	};
