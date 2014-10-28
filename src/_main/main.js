var sbAdmin = {};

sbAdmin.main = angular.module("exampleApp", [

	// Library modules
	"ngRoute",
	
	// Application modules
	"sbAdmin.common",
	"sbAdmin.dashboard",
	"sbAdmin.tables",
	"sbAdmin.forms",
	// "exampleApp.reports",
	// "exampleApp.widgets",
]);

// Common components module
sbAdmin.common = angular.module("sbAdmin.common", []);

// Dashboard module
sbAdmin.dashboard = angular.module("sbAdmin.dashboard", []);

// Tables module
sbAdmin.tables = angular.module("sbAdmin.tables", []);

// Forms module
sbAdmin.forms = angular.module("sbAdmin.forms", []);


// Reports module
// sbAdmin.reports = angular.module("exampleApp.reports", []);

// Widgets module
// sbAdmin.widgets = angular.module("exampleApp.widgets", []);