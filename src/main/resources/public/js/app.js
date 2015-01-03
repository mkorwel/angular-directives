angular.module('sampleDirectives', [])
.controller('Controller', function($scope) {
  $scope.person = {
    name: 'Hello',
    surname: 'World'
  };
})
.directive('inputText', function() {
  return {
	restrict: 'E',
	scope: {
	    label: '@',
	    value: '='
	},
    templateUrl: 'directives/inputText.html'
  };
});