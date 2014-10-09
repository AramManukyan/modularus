var exampleApp = {};

exampleApp.main = angular.module("exampleApp", [

	// Library modules
	"ngRoute",
	
	// Application modules
	"exampleApp.header",
	"exampleApp.reports",
]);

// Header module
exampleApp.header = angular.module("exampleApp.header", []);

// Reports module
exampleApp.reports = angular.module("exampleApp.reports", []);
