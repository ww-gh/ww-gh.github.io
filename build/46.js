webpackJsonp([46],{741:function(n,l,e){"use strict";function a(n){return u["ɵvid"](0,[(n()(),u["ɵted"](-1,null,["\n"])),(n()(),u["ɵeld"](1,0,null,null,10,"ion-header",[],null,null,null,null,null)),u["ɵdid"](2,16384,null,0,v.a,[g.a,u.ElementRef,u.Renderer,[2,A.a]],null,null),(n()(),u["ɵted"](-1,null,["\n\n  "])),(n()(),u["ɵeld"](4,0,null,null,6,"ion-navbar",[["class","toolbar"],["color","primary"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,F.b,F.a)),u["ɵdid"](5,49152,null,0,C.a,[E.a,[2,A.a],[2,_.a],g.a,u.ElementRef,u.Renderer],{color:[0,"color"]},null),(n()(),u["ɵted"](-1,3,["\n    "])),(n()(),u["ɵeld"](7,0,null,3,2,"ion-title",[],null,null,null,q.b,q.a)),u["ɵdid"](8,49152,null,0,M.a,[g.a,u.ElementRef,u.Renderer,[2,L.a],[2,C.a]],null,null),(n()(),u["ɵted"](-1,0,["location-accuracy"])),(n()(),u["ɵted"](-1,3,["\n  "])),(n()(),u["ɵted"](-1,null,["\n\n"])),(n()(),u["ɵted"](-1,null,["\n\n\n"])),(n()(),u["ɵeld"](13,0,null,null,6,"ion-content",[["padding",""]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,P.b,P.a)),u["ɵdid"](14,4374528,null,0,w.a,[g.a,k.a,I.a,u.ElementRef,u.Renderer,E.a,N.a,u.NgZone,[2,A.a],[2,_.a]],null,null),(n()(),u["ɵted"](-1,1,["\n  "])),(n()(),u["ɵeld"](16,0,null,1,2,"button",[["full",""],["ion-button",""]],null,[[null,"click"]],function(n,l,e){var a=!0;if("click"===l){a=!1!==n.component.requestLocationAccuracy()&&a}return a},O.b,O.a)),u["ɵdid"](17,1097728,null,0,B.a,[[8,""],g.a,u.ElementRef,u.Renderer],{full:[0,"full"]},null),(n()(),u["ɵted"](-1,0,["请求精确定位"])),(n()(),u["ɵted"](-1,1,["\n"])),(n()(),u["ɵted"](-1,null,["\n"]))],function(n,l){n(l,5,0,"primary");n(l,17,0,"")},function(n,l){n(l,4,0,u["ɵnov"](l,5)._hidden,u["ɵnov"](l,5)._sbPadding);n(l,13,0,u["ɵnov"](l,14).statusbarPadding,u["ɵnov"](l,14)._hasRefresher)})}Object.defineProperty(l,"__esModule",{value:!0});var u=e(1),t=(e(0),e(19),e(242)),o=e(45),r=e(32),c=function(){function n(n,l,e,a,u){this.navCtrl=n,this.navParams=l,this.locationAccuracy=e,this.platform=a,this.utils=u}return n.prototype.ionViewDidLoad=function(){},n.prototype.requestLocationAccuracy=function(){var n=this;(this.platform.is("ios")||this.platform.is("android"))&&this.locationAccuracy.canRequest().then(function(l){l&&n.locationAccuracy.isRequesting().then(function(l){l?n.utils.showAlert("上次的还在处理中"):n.locationAccuracy.request(n.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(function(l){o.a.log(l),n.utils.showAlert("Request successful")},function(l){o.a.error(l),n.utils.showAlert("Error requesting location permissions")})})})},n}(),i=function(){return function(){}}(),d=e(397),s=e(398),f=e(399),m=e(400),p=e(401),R=e(402),h=e(403),y=e(404),b=e(405),v=e(123),g=e(3),A=e(7),F=e(407),C=e(44),E=e(13),_=e(28),q=e(406),M=e(85),L=e(59),P=e(195),w=e(35),k=e(6),I=e(14),N=e(38),O=e(52),B=e(33),D=e(17),H=u["ɵcrt"]({encapsulation:2,styles:[],data:{}}),T=u["ɵccf"]("page-location-accuracy",c,function(n){return u["ɵvid"](0,[(n()(),u["ɵeld"](0,0,null,null,1,"page-location-accuracy",[],null,null,null,a,H)),u["ɵdid"](1,49152,null,0,c,[_.a,D.a,t.a,k.a,r.a],null,null)],null,null)},{},{},[]),U=e(21),Y=e(31),j=e(194),G=e(60);e.d(l,"LocationAccuracyPageModuleNgFactory",function(){return J});var J=u["ɵcmf"](i,[],function(n){return u["ɵmod"]([u["ɵmpd"](512,u.ComponentFactoryResolver,u["ɵCodegenComponentFactoryResolver"],[[8,[d.a,s.a,f.a,m.a,p.a,R.a,h.a,y.a,b.a,T]],[3,u.ComponentFactoryResolver],u.NgModuleRef]),u["ɵmpd"](4608,U.l,U.k,[u.LOCALE_ID,[2,U.t]]),u["ɵmpd"](4608,Y["ɵi"],Y["ɵi"],[]),u["ɵmpd"](4608,Y.FormBuilder,Y.FormBuilder,[]),u["ɵmpd"](512,U.b,U.b,[]),u["ɵmpd"](512,Y["ɵba"],Y["ɵba"],[]),u["ɵmpd"](512,Y.FormsModule,Y.FormsModule,[]),u["ɵmpd"](512,Y.ReactiveFormsModule,Y.ReactiveFormsModule,[]),u["ɵmpd"](512,j.a,j.a,[]),u["ɵmpd"](512,j.b,j.b,[]),u["ɵmpd"](512,i,i,[]),u["ɵmpd"](256,G.a,c,[])])})}});