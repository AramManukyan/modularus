sbAdmin.common

.controller("HeaderCtrl", HeaderCtrl);

function HeaderCtrl ($location,$log) {

	var header = this;

	header.navbarCollapsed = false;

	header.setCollapsed = function(data){
		header.navbarCollapsed = data;
	}

	header.isActive = function(route) {
        return route === $location.path();
    }

}