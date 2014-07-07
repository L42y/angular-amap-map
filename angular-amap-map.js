angular.module('l42y.amap.map', [
]).directive('amapMap', function (
  $window
) {
  return {
    restrict: 'EA',
    controller: function ($scope, $element, $attrs) {
      var mapOptions = $scope.$eval($attrs.amapMapOptions);
      this.map = new $window.AMap.Map($element[0], mapOptions);
    },
    controllerAs: 'amap'
  };
});
