define(["angular","devConfig","pathConfig","jquery"],function(e){e.module("ppt-9-module",[]).controller("ppt-9-ctrl",["$scope","$location","$$console","$timeout","$interval","$$ls","$q",function(e,o,n,t,a){{var l=e._f;e.s={}}l.pageRotate().nextPageAnimate().pageSlideLeftPop(),e.$on("$destroy",function(){a.cancel()})}])});