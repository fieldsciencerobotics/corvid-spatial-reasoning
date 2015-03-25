var myApp = angular.module('myApp', ['ngAnimate', 'ui.bootstrap', 'ui.router']);

// configuring routes 
// =============================================================================
myApp.config(function($stateProvider, $urlRouterProvider) {

    // catch all route 
    $urlRouterProvider.otherwise('experiment');

    $stateProvider 
        // Explore inputs and research tasks
        .state('experiment', {
            url: '/experiment',
            templateUrl: 'partials/experiment.html'
        })

        // Explore outputs
        .state('data', {
            url: '/data',
            templateUrl: 'partials/data.html'
        })
        
        // splash screen
        .state('feeders', {
            url: '/feeders',
            templateUrl: 'partials/feeders.html'
        });
});