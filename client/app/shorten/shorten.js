angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
////////////////////////////////////////////////////////////
////Might need to pass a link into addLink to make it work//
////////////////////////////////////////////////////////////
  $scope.link = {};
  $scope.addLink = function() {
    Links.addOne();
  };
});
