exampleApp.header

.controller("HeaderCtrl", function($scope, $location) {

	$scope.navbarCollapsed = true;
	$scope.isActive = function(route) {
        return route === $location.path();
    }

});