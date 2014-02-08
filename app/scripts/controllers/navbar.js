'use strict';

angular.module('myApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
