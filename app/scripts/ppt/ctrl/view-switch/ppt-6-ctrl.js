define(
    ["angular", "devConfig", "pathConfig", "jquery"],
    function (ng, config, path, $) {
        "use strict";
        ng.module("switch-view-6-module", []).controller("switch-view-6-ctrl",
            ['$scope', '$location', '$$console', '$timeout', '$interval', '$$ls', '$q',
                function ($scope, $location, $$console, $timeout, $interval, $$ls, $q) {

                    var ff = $scope._f;
                    var s = $scope.s = {
                    };
                    ff.pageFade().nextPageAnimate().pageFlipX();
                    $scope.$on('$destroy', function () {
                        $interval.cancel();
                    });
                }]);

    }
);
