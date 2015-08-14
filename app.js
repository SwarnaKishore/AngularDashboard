var app = angular.module('app', ['ngRoute']);


app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/careerAgentPostAndCommentsActivity', {
	templateUrl: 'templates/careerAgentPostAndCommentsActivity.html'
      }).
      when('/viewContacts', {
	templateUrl: 'templates/viewContacts.html'
      }).
       when('/createGroup', {
	templateUrl: 'templates/createGroup.html'
      }).
      when('/viewContacts', {
	templateUrl: 'templates/viewContacts.html'
      }).
       when('/groupsView', {
	templateUrl: 'templates/groupsView.html'
      }).
      when('/groupsBroadcast', {
	templateUrl: 'templates/groupsBroadcast.html'
      }).
        when('/customerPostSomething', {
	templateUrl: 'templates/customerPostSomething.html'
      }).
      when('/viewCustomerActivityStream', {
	templateUrl: 'templates/viewCustomerActivityStream.html'
      }).
      otherwise({
	redirectTo: '/careerAgentPostAndCommentsActivity'
      });
}]);