define(["angular","devConfig","pathConfig","jquery"],function(t,n,e,o){t.module("ppt-4-module",[]).controller("ppt-4-ctrl",["$scope","$location","$$console","$timeout","$interval","$$ls","$q",function(t,n,e,p,s){var a=t._f,i=t.s={step:1,qnCount:0,qnPc:0};a.pageSlideRight().nextPageAnimate().pageSlideRight(),t.chooseQn=function(t){t=o(t.target),i.qnCount=t.hasClass("sq-hover")?i.qnCount-1:i.qnCount+1,t.toggleClass("sq-hover")},t.preStep=function(){i.step--,i.step<1&&n.path("/ppt/3")},t.nextStep=function(){i.step++,12===i.step&&n.path("/ppt/5")},t.$on("$destroy",function(){s.cancel()})}])});