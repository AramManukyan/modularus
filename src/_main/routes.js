exampleApp.main

.config(function($routeProvider) {


	$routeProvider.
	when('/', {
		templateUrl: 'templates/home/home.html',
		controller: 'HomeCtrl'
	}).
	when('/about', {
		templateUrl: 'templates/about/about.html',
		controller: 'AboutCtrl'
	}).
	when('/contact', {
		templateUrl: 'templates/contact/contact.html',
		controller: 'ContactCtrl'
	}).
	otherwise({
		redirectTo: '/'
	});

})

;