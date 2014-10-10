exampleApp.header

.controller("HeaderCtrl", function($scope, $log, $routeParams) {

	$scope.navbarCollapsed = true;
	
	$scope.isActive = function(route) {
		if(typeof $routeParams.reportId === "undefined"){
        	$routeParams.reportId = "0";
        }
        return route === $routeParams.reportId;
    }

});