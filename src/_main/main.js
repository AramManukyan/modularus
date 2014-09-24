var exampleApp = {};

exampleApp.main = angular.module("exampleApp", [

	// Library modules
	
	
	// Application modules
	"exampleApp.home",
	"exampleApp.about",
	"exampleApp.contact"
]);

// Home module
exampleApp.home = angular.module("exampleApp.home", []);

// About module
exampleApp.about = angular.module("exampleApp.about", []);

// Contact module
exampleApp.contact = angular.module("exampleApp.contact", []);