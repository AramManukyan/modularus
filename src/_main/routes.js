sbAdmin.main

.config(function($routeProvider) {
	
	$routeProvider

	.when('/dashboard', {
		templateUrl: 'templates/dashboard/dashboard.html',
		controller: 'DashboardCtrl',
		title: 'Dashboard',
		faIcon: 'fa-dashboard'
	})
	.when('/tables', {
		templateUrl: 'templates/tables/tables.html',
		controller: 'TablesCtrl',
		title: 'Table',
		faIcon: 'fa-table'
	})
	.when('/charts', {
		templateUrl: 'templates/charts/charts.html',
		controller: 'ChartsCtrl',
		title: 'Charts',
		faIcon: 'fa-bar-chart-o'
	})

	.when('/forms', {
		templateUrl: 'templates/forms/forms.html',
		controller: 'FormsCtrl',
		title: 'Forms',
		faIcon: 'fa-edit'
	})
	.when('/bootstrap-elements', {
		templateUrl: 'templates/bootstrap-elements/bootstrap-elements.html',
		controller: 'BootstrapElementsCtrl',
		title: 'Bootstrap Elements',
		faIcon: 'fa-desktop'
	})
	.when('/bootstrap-grid', {
		templateUrl: 'templates/bootstrap-grid/bootstrap-grid.html',
		controller: 'BootstrapGridCtrl',
		title: 'Bootstrap Grid',
		faIcon: 'fa-wrench'
	})
	.when('/blank-page', {
		templateUrl: 'templates/blank-page/blank-page.html',
		controller: 'BlankPageCtrl',
		title: 'Blank Page',
		faIcon: 'fa-file'
	})

	.otherwise({
		redirectTo: '/dashboard'
	});
	
})

.run(function ($rootScope, $route) {

	$rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.uiState.title = current.$$route.title;
        $rootScope.uiState.faIcon = current.$$route.faIcon;
    });

})

;