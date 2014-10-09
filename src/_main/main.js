var exampleApp = {};

exampleApp.main = angular.module("exampleApp", [

	// Library modules
	"ngRoute",
	
	// Application modules
	"exampleApp.header",
	"exampleApp.home"
]);

// Header module
exampleApp.header = angular.module("exampleApp.header", []);

// Home module
exampleApp.home = angular.module("exampleApp.home", []);
