angular.module('WASDVision').config(function(
  $stateProvider,
  $urlRouterProvider
) {
  // default route
  $urlRouterProvider.otherwise('/');

  // states
  $stateProvider
    .state('application', {
      controller: 'ApplicationController',
      templateUrl: 'partials/application.html'
    })
    .state('home', {
      url: '/',
      parent: 'application',
      controller: 'HomeController',
      templateUrl: 'partials/home.html'
    })
    .state('features', {
      url: '/features',
      parent: 'application',
      controller: 'FeaturesController',
      templateUrl: 'partials/features.html'
    })
    .state('download', {
      url: '/download',
      parent: 'application',
      controller: 'DownloadController',
      templateUrl: 'partials/download.html'
    })
    .state('credits', {
      url: '/credits',
      parent: 'application',
      controller: 'CreditsController',
      templateUrl: 'partials/credits.html'
    })
    .state('faq', {
      url: '/faq',
      parent: 'application',
      controller: 'FAQController',
      templateUrl: 'partials/faq.html'
    });
});
