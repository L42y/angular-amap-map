angular.module('l42y.amap.map', [
  'l42y.amap'
]).directive('amapMap', function (
  $window,
  Amap
) {
  return {
    scope: {
      fitView: '=amapMapFitView'
    },
    restrict: 'EA',
    template: '<div ng-transclude></div>',
    transclude: true,
    controller: function ($scope, $element, $attrs) {
      var self = this;
      var mapOptions = $scope.$eval($attrs.amapMapOptions);

      Amap.promise.then(function () {
        self.map = new $window.AMap.Map($element[0], mapOptions);

        $scope.$watchCollection('fitView', function (overlays) {
          if (overlays) {
            self.map.setFitView(overlays);
          };
        });
      });
    },
    controllerAs: 'amap'
  };
});
