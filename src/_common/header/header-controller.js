sbAdmin.common

.controller("HeaderCtrl", HeaderCtrl);

function HeaderCtrl () {

	var header = this;

	header.navbarCollapsed = false;

	header.setCollapsed = function(data){
		header.navbarCollapsed = data;
	}

}