sbAdmin.main

.config(function($routeProvider) {
	
	$routeProvider

	.when('/dashboard', {
		templateUrl: 'templates/dashboard/dashboard.html',
		controller: 'DashboardCtrl',
		title: 'Dashboard'
	})
	.when('/tables', {
		templateUrl: 'templates/tables/tables.html',
		controller: 'TablesCtrl',
		title: 'Table'
	})

	.when('/forms', {
		templateUrl: 'templates/forms/forms.html',
		controller: 'FormsCtrl',
		title: 'Forms'
	})
	.when('/bootstrap-elements', {
		templateUrl: 'templates/bootstrap-elements/bootstrap-elements.html',
		controller: 'BootstrapElementsCtrl',
		title: 'Bootstrap Elements'
	})
	.when('/bootstrap-grid', {
		templateUrl: 'templates/bootstrap-grid/bootstrap-grid.html',
		controller: 'BootstrapGridCtrl',
		title: 'Bootstrap Grid'
	})
	.when('/blank-page', {
		templateUrl: 'templates/blank-page/blank-page.html',
		controller: 'BlankPageCtrl',
		title: 'Blank Page'
	})

	.otherwise({
		redirectTo: '/dashboard'
	});
	
})

.run(function ($rootScope, $route) {

	$rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.uiState.title = current.$$route.title;
    });

})

;