var sbAdmin = {};

sbAdmin.main = angular.module("exampleApp", [

	// Library modules
	"ngRoute",
	
	// Application modules
	"sbAdmin.common",
	"sbAdmin.dashboard"
	// "exampleApp.reports",
	// "exampleApp.widgets",
]);

// Common components module
sbAdmin.common = angular.module("sbAdmin.common", []);

// Dashboard module
sbAdmin.dashboard = angular.module("sbAdmin.dashboard", []);


// Reports module
// sbAdmin.reports = angular.module("exampleApp.reports", []);

// Widgets module
// sbAdmin.widgets = angular.module("exampleApp.widgets", []);