var jobSearch = angular.module('jobSearch', ['ui.router']);

jobSearch.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/welcome')

    $stateProvider

    .state('welcome', {
            url: '/welcome',
            templateUrl: 'partials/welcome.html'
        })

    .state('search', {
            url: '/search',
            templateUrl: 'partials/search.html'
        })

    	.state('search.results', {
    			url: '/results',
    			templateURL: 'partials/search.results.html',
    			controller: 'SearchCtrl'
    	})
})