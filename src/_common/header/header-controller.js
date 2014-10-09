exampleApp.header

.controller("HeaderCtrl", function($scope, $log, $location) {

	$scope.navbarCollapsed = true;
	
	$scope.isActive = function(route) {
        return route === $location.path();
    }

});