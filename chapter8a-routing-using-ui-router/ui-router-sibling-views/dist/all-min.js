angular.module("demoApp",["ui.router"]),angular.module("demoApp").config(function(e,t){t.otherwise("/"),e.state("state1",{url:"/",views:{header:{template:'<div class="header">Header1</div>'},nav:{templateUrl:"templates/nav1.html",controller:"navCtrl"},body:{templateUrl:"templates/body.html",controller:"bodyCtrl"},footer:{template:'<div class="footer">Footer1</div>'}}}).state("state2",{url:"/url2",views:{header:{template:'<div class="header">Header2</div>'},nav:{templateUrl:"templates/nav2.html",controller:"navCtrl"},body:{templateUrl:"templates/body.html",controller:"bodyCtrl"},footer:{template:'<div class="footer">Footer2</div>'}}})}),angular.module("demoApp").controller("bodyCtrl",function(e,t){e.style=t.getStyle(),console.log("hello")}),angular.module("demoApp").controller("navCtrl",function(e,t){e.setSize=function(e){t.setSize(e)},e.setColor=function(e){t.setColor(e)}}),angular.module("demoApp").service("bodyStyle",function(){var e={};this.setSize=function(t){e.size=t},this.setColor=function(t){e.color=t},this.getStyle=function(){return e}});