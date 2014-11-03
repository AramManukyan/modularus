sbAdmin.common

.controller("HeaderCtrl", HeaderCtrl);

function HeaderCtrl ($location,$log,headerService) {

	var header = this;

	headerService.get(function(data){
		header.notes = data;
	});

	header.headerCollapsed = false;
	header.navbarCollapsed = false;

	header.collapseHeader = function(data){
		$log.log(data);
		header.headerCollapsed = data;
	}

	header.setCollapsed = function(data){
		header.navbarCollapsed = data;
	}

	header.isActive = function(route) {
        return route === $location.path();
    }

}