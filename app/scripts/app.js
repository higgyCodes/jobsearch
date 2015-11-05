var jobSearch = angular.module('jobSearch', ['ui.router']);

jobSearch.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home')

    $stateProvider

    .state('home', {
            url: '/home',
            templateUrl: 'partials/home.html'
        })
})