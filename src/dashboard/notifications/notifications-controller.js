sbAdmin.dashboard

.controller("DashboardNotificationsCtrl", function($log, $sce) {

	var vm = this;

	var notifications = [
		{
			type: "info",
			content: '<strong>Like SB Admin?</strong> Try out for <a href="http://startbootstrap.com/template-overviews/sb-admin-2" class="alert-link">SB Admin 2</a> additional features!'
		},
		{
			type: "success",
			content: '<strong>Like SB Admin?</strong> Try out <a href="http://startbootstrap.com/template-overviews/sb-admin-2" class="alert-link">SB Admin 2</a> for additional features!'
		}
	];

	for(var i in notifications) {
		notifications[i].content = $sce.trustAsHtml(notifications[i].content);
	}

	vm.notifications = notifications;


	vm.dismiss = function(index) {
		vm.notifications.splice(index, 1);
	}

});