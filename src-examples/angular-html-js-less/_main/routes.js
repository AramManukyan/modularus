exampleApp.main

.config(function($routeProvider) {
	
	$routeProvider.
	when('/', {
		templateUrl: 'templates/home/home.html',
		controller: 'HomeCtrl'
	}).

	when('/about', {
		templateUrl: 'templates/about/about.html',
		controller: 'AboutCtrl',
	}).

	when('/contact', {
		templateUrl: 'templates/contact/contact.html',
		controller: 'ContactCtrl',
	})

	.when('/login', {
		templateUrl: 'templates/login/login.html',
		controller: 'LoginCtrl'
	})

	.when('/products', {
		templateUrl: 'templates/products/products.html',
		controller: 'ProductsCtrl'
	})

	.when('/products/:productId', {
        templateUrl: 'templates/products/details/details.html',
        controller: 'ProductDetailCtrl'
	})

	.otherwise({
		redirectTo: '/'
	});
});