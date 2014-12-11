define(["angular","alertify","devConfig","jquery"],function(t,e,n){t.module("ppt-module",["ngRoute","ngAnimate","ngSanitize","ngResource","ngCheck","ngConsole","ngStorage","ngDirective","baseInterceptor","defInterceptor","ppt-welcome-module","ppt-beach-module","ppt-1-module","ppt-2-module","ppt-3-module","ppt-4-module","ppt-5-module","ppt-6-module","ppt-7-module","ppt-8-module","ppt-9-module","ppt-10-module"]).config(["$routeProvider",function(t){t.when("/welcome",{templateUrl:"ppt-welcome.html",controller:"ppt-welcome-ctrl"}).when("/beach",{templateUrl:"ppt-beach.html",controller:"ppt-beach-ctrl"}).when("/1",{templateUrl:"ppt-1.html",controller:"ppt-1-ctrl"}).when("/2",{templateUrl:"ppt-2.html",controller:"ppt-2-ctrl"}).when("/3",{templateUrl:"ppt-3.html",controller:"ppt-3-ctrl"}).when("/4",{templateUrl:"ppt-4.html",controller:"ppt-4-ctrl"}).when("/5",{templateUrl:"ppt-5.html",controller:"ppt-5-ctrl"}).when("/6",{templateUrl:"ppt-6.html",controller:"ppt-6-ctrl"}).when("/7",{templateUrl:"ppt-7.html",controller:"ppt-7-ctrl"}).when("/8",{templateUrl:"ppt-8.html",controller:"ppt-8-ctrl"}).when("/9",{templateUrl:"ppt-9.html",controller:"ppt-9-ctrl"}).when("/10",{templateUrl:"ppt-10.html",controller:"ppt-10-ctrl"}).otherwise({redirectTo:"/welcome"})}]).config(["$httpProvider",function(t){t.interceptors.push("baseInterceptor")}]).config(["$locationProvider",function(t){t.html5Mode(!1)}]).controller("mo-ctrl",["$scope","$http","$location","$timeout","$q","$$ls","$interval",function(t,n,r,o,i,a,c){t._s={title:"css基础",bodyOh:!1,viewSwitchAnimate:-1,viewSwitchTransform:!1};var l=t._f={viewSwitchAnimate:function(e){return t._s.viewSwitchTransform?(o(function(){t._s.viewSwitchAnimate=e},1100),t._s.viewSwitchTransform=!1,this):(t._s.viewSwitchAnimate=e,this)},nextPageAnimate:function(){return t._s.viewSwitchTransform=!0,this},pageSlideLeft:function(){return l.viewSwitchAnimate(0)},pageSlideRight:function(){return l.viewSwitchAnimate(1)},pageSlideUp:function(){return l.viewSwitchAnimate(2)},pageSlideDown:function(){return l.viewSwitchAnimate(3)},pagePop:function(){return l.viewSwitchAnimate(4)},pageFade:function(){return l.viewSwitchAnimate(5)},pageFlipX:function(){return l.viewSwitchAnimate(6)},pageFlipY:function(){return l.viewSwitchAnimate(7)},pageRotate:function(){return l.viewSwitchAnimate(8)},pageSlideLeftPop:function(){return l.viewSwitchAnimate(9)},title:function(e){return t._s.title=e,this},refresh:function(t){var e=r.search().refresh_sign;return e=e?window.parseInt(e)+1:1,t&&"string"==typeof t?r.path(t):"",r.search("refresh_sign",e),this},alert:function(){return e.alert.apply(this,arguments),this},prompt:function(){return e.prompt.apply(this,arguments),this},confirm:function(){return e.confirm.apply(this,arguments),this},log:function(){return e.log.apply(this,arguments),this},success:function(){return e.success.apply(this,arguments),this},error:function(){return e.error.apply(this,arguments),this},defers:[],deferPre:i.defer(),catchFun:function(){},then:function(t,e){var n=this.defers;return n[n.length]={func:t,delay:e||0},this},"catch":function(t){return this.catchFun="function"==typeof t?t:this.catchFun,this},go:function(t){var e=this,n=e.defers.length;e.defers.forEach(function(r,a){var c=e.deferPre,l=i.defer(),p=r.func,u=r.delay;c.promise.then(function(t){var n=i.defer();o(function(){return p(t,n)},u),n.promise.then(function(t){l.resolve(t)}).catch(function(t){e.catchFun(t)})}),e.deferPre=l,0===a&&c.resolve(t),a+1===n&&(e.defers=[],e.deferPre=i.defer())})},ajaxConc:{waitForAjaxReturn:!1,ajaxNumInRoute:-1},htmlConc:{isAllViewSwitchAnimateFinished:!1,waitForAjaxHtmlReturn:!1,ajaxHtmlNumInRoute:-1},ajaxRetDefer:function(){var t=this,e=c(function(){t.htmlConc.waitForAjaxReturn&&(c.cancel(e),defer.resolve())},100)},ajaxHtmlRetDefer:function(t){var e=this,n=c(function(){e.htmlConc.waitForAjaxHtmlReturn&&(c.cancel(n),t.resolve())},100)},showAllViewSwitchAnimate:function(){var t=this;t.htmlConc.ajaxHtmlNumInRoute=1,t.then(function(e,n){r.path("/1"),t.ajaxHtmlRetDefer(n)},1200).then(function(e,n){r.path("/2"),t.ajaxHtmlRetDefer(n)},1200).then(function(t,e){r.path("/3"),e.resolve()},1200).then(function(t,e){r.path("/4"),e.resolve()},1200).then(function(t,e){r.path("/5"),e.resolve()},1200).then(function(t,e){r.path("/6"),e.resolve()},1200).then(function(t,e){r.path("/7"),e.resolve()},1200).then(function(t,e){r.path("/8"),e.resolve()},1200).then(function(t,e){r.path("/9"),e.resolve()},1200).then(function(t,e){r.path("/10"),e.resolve()},1200).then(function(e,n){t.htmlConc.isAllViewSwitchAnimateFinished=!0,r.path("/welcome"),t.htmlConc.ajaxHtmlNumInRoute=-1,n.resolve()},1200).go()}};t.$on("$routeChangeStart",function(){t._s.bodyOh=!0,t._s.waitForAjaxReturn=!1;var e="_html_ajax_request_in_route_count",n="_html_ajax_response_in_route_count";a.removeItem([e,n]);var r=c(function(){var t=parseInt(a.item(e)),o=parseInt(a.item(n));t===o&&o===l.htmlConc.ajaxHtmlNumInRoute&&(l.htmlConc.waitForAjaxHtmlReturn=!0,c.cancel(r))},100)}),t.$on("$routeChangeSuccess",function(){window.scrollTo(0,0);var e="_ajax_request_in_route_count",n="_ajax_response_in_route_count";a.removeItem([e,n]);var r=c(function(){var t=parseInt(a.item(e)),o=parseInt(a.item(n));t===o&&o===l.ajaxNumInRoute&&(l.waitForAjaxReturn=!0,c.cancel(r))},100);o(function(){t._s.bodyOh=!1},1100)})}]),e.set(n.alertifyConf),Array.prototype.grep=function(t,e){var n=this,r=[];return this.forEach(function(o,i){o[t]===e&&r.push(n[i])}),r},String.prototype.toDate=function(){var t,e=this;if(t=Date.parse(e),isNaN(t)){var n=e.split(/[^0-9]/).map(function(t){return parseInt(t,10)});return n.length>1?new Date(n[0],n[1]-1||0,n[2]||1,n[3]||0,n[4]||0,n[5]||0,n[6]||0):new Date}return new Date(t)},Date.prototype.format=function(t){t=t&&"string"==typeof t?t:"yyyy年MM月dd日";var e={"M+":this.getMonth()+1,"d+":this.getDate(),"H+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length)));for(var n in e)new RegExp("("+n+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[n]:("00"+e[n]).substr((""+e[n]).length)));return t}});