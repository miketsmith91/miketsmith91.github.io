// script.js

// create the module and name it michaelApp

var michaelApp = angular.module('michaelApp', ['ngRoute']);

michaelApp.config(function($routeProvider) {
  $routeProvider

    // route for the home page
    .when('/', {
      templateUrl : 'components/home/homeView.html'
      controller : 'mainController'
    })

    // route for the projects page
    .when('/projects', {
      templateUrl : 'components/projects/projectsView.html';
      controller : 'projectsController'
    });
});

// create the controller and inject Angular's $scope

michaelApp.controller('mainController', function($scope) {

  // create a message to display in our view
  $scope.message = "Hey everyone, come and see how good I look!";
});

michaelApp.controller('projectsController', function($scope) {
  $scope.message = 'Look! I am a projects page!';
});
