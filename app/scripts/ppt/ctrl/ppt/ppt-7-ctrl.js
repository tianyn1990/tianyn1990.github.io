define(
    ["angular", "devConfig", "pathConfig", "jquery"],
    function (ng, config, path, $) {
        "use strict";
        ng.module("ppt-7-module", []).controller("ppt-7-ctrl",
            ['$scope', '$location', '$$console', '$timeout', '$interval', '$$ls', '$q',
                function ($scope, $location, $$console, $timeout, $interval, $$ls, $q) {

                    var ff = $scope._f;
                    var s = $scope.s = {
                        step: 1,
                        qnCount: 0,
                        qnPc: 0
                    };
                    ff.pageSlideUp().nextPageAnimate().pageSlideLeft();

                    $scope.chooseQn = function (e) {
                        e = $(e.target);
                        s.qnCount = e.hasClass("sq-hover") ? s.qnCount - 1 : s.qnCount + 1;
                        e.toggleClass("sq-hover");
                    };

                    $scope.preStep = function () {
                        s.step--;
                        if (s.step < 1) {
                            $location.path("/ppt/6");
                        }
                    };
                    $scope.nextStep = function () {
                        s.step++;
//                        if (s.step === 11) {
//                            $location.path("/ppt/7");
//                        }
                    };

                    $scope.$on('$destroy', function () {
                        $interval.cancel();
                    });
                }]);

    }
);
