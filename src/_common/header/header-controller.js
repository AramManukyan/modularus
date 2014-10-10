exampleApp.header

.controller("HeaderCtrl", function($scope, $log, $routeParams) {

	$scope.navbarCollapsed = true;
	
	$scope.isActive = function(route) {
		if(typeof $routeParams.reportId === "undefined"){
        	$routeParams.reportId = "prices";
        }
        return route === $routeParams.reportId;
    }

});