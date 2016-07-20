angular
.module('WASDVision', ['ui.router'])
.controller('ApplicationController', function(
  $rootScope
) {
  // scroll to top of page on state change success
  $rootScope.$on('$stateChangeSuccess', function() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  });
});
