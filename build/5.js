webpackJsonp([5],{750:function(l,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),e.d(n,"GridsMenuEditModuleNgFactory",function(){return A});var t=e(1),u=e(852),i=e(397),r=e(398),d=e(399),o=e(400),s=e(401),a=e(402),c=e(403),h=e(404),m=e(405),f=e(876),g=e(21),p=e(31),y=e(194),v=e(825),R=e(60),b=e(811),A=t["ɵcmf"](u.a,[],function(l){return t["ɵmod"]([t["ɵmpd"](512,t.ComponentFactoryResolver,t["ɵCodegenComponentFactoryResolver"],[[8,[i.a,r.a,d.a,o.a,s.a,a.a,c.a,h.a,m.a,f.a]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["ɵmpd"](4608,g.l,g.k,[t.LOCALE_ID,[2,g.t]]),t["ɵmpd"](4608,p["ɵi"],p["ɵi"],[]),t["ɵmpd"](4608,p.FormBuilder,p.FormBuilder,[]),t["ɵmpd"](512,g.b,g.b,[]),t["ɵmpd"](512,p["ɵba"],p["ɵba"],[]),t["ɵmpd"](512,p.FormsModule,p.FormsModule,[]),t["ɵmpd"](512,p.ReactiveFormsModule,p.ReactiveFormsModule,[]),t["ɵmpd"](512,y.a,y.a,[]),t["ɵmpd"](512,y.b,y.b,[]),t["ɵmpd"](512,v.a,v.a,[]),t["ɵmpd"](512,u.a,u.a,[]),t["ɵmpd"](256,R.a,b.a,[])])})},811:function(l,n,e){"use strict";e.d(n,"a",function(){return u});e(0),e(19),e(32),e(126),e(201);var t=e(54),u=function(){function l(l,n,e,u,i,r,d){var o=this;this.navCtrl=l,this.params=n,this.utils=e,this.localStorage=u,this.funManager=i,this.events=r,this.localStorge=d,this.allMenus=[],this.mySelectedGridsArr=[],this.myUnselectedGridsArr=[],this.mySelectedRowsArr=[],this.myUnselectedRowsArr=[],this.rowNum=0,this.colNum=4,this.maxGridsItemNum=3*this.colNum-1,this.getMenuIco=function(l){var n=l.ico;return n=n&&n.startsWith("~/")?t.a.ROOT_URL+n.replace("~/","/"):"assets/image/"+o.funManager.getMenuDefaultIco(l.key)},this.allMenus=this.localStorage.getUserInfo().menu,this.distinguishMenuArr(this.allMenus),this.getGridsRowsArr()}return l.prototype.ionViewDidEnter=function(){},l.prototype.ionViewDidLeave=function(){this.events.publish("update:home-grids")},l.prototype.distinguishMenuArr=function(l){var n=this;l.forEach(function(l,e){l.child&&l.child.length>0?n.distinguishMenuArr(l.child):l.isIndex&&(n.localStorge.getIsHomeGridsMenu(l.key,!1)?n.mySelectedGridsArr.push(l):n.myUnselectedGridsArr.push(l))})},l.prototype.onSelectedGridsItemClick=function(l,n,e){this.localStorage.setIsHomeGridsMenu(l.key,!1),this.mySelectedGridsArr.splice(0,this.mySelectedGridsArr.length),this.myUnselectedGridsArr.splice(0,this.myUnselectedGridsArr.length),this.distinguishMenuArr(this.allMenus),this.getGridsRowsArr()},l.prototype.onUnSelectedGridsItemClick=function(l,n,e){this.mySelectedGridsArr.length>=this.maxGridsItemNum?this.utils.showAlert("最多选择"+this.maxGridsItemNum+"项"):(this.localStorage.setIsHomeGridsMenu(l.key,!0),this.mySelectedGridsArr.splice(0,this.mySelectedGridsArr.length),this.myUnselectedGridsArr.splice(0,this.myUnselectedGridsArr.length),this.distinguishMenuArr(this.allMenus),this.getGridsRowsArr())},l.prototype.getGridsRowsArr=function(){var l;this.mySelectedRowsArr.splice(0,this.mySelectedRowsArr.length),this.rowNum=Math.ceil(this.mySelectedGridsArr.length/this.colNum);for(var n=0;n<this.rowNum;n++)l=n==this.rowNum-1?this.mySelectedGridsArr.slice(n*this.colNum):this.mySelectedGridsArr.slice(n*this.colNum,n*this.colNum+this.colNum),this.mySelectedRowsArr.push(l);this.myUnselectedRowsArr.splice(0,this.myUnselectedRowsArr.length),this.rowNum=Math.ceil(this.myUnselectedGridsArr.length/this.colNum);for(n=0;n<this.rowNum;n++)l=n==this.rowNum-1?this.myUnselectedGridsArr.slice(n*this.colNum):this.myUnselectedGridsArr.slice(n*this.colNum,n*this.colNum+this.colNum),this.myUnselectedRowsArr.push(l)},l}()},812:function(l,n,e){"use strict";e.d(n,"a",function(){return t});e(0);var t=function(){function l(){this._bgColor="#e8e8e8",this._hdlHeight="5px",this.myStyle=this.getMyStyle()}return Object.defineProperty(l.prototype,"bgColor",{set:function(l){this._bgColor=l,this.myStyle=this.getMyStyle()},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"hdlHeight",{set:function(l){this._hdlHeight=l,this.myStyle=this.getMyStyle()},enumerable:!0,configurable:!0}),l.prototype.getMyStyle=function(){return{width:"100%",height:this._hdlHeight,"background-color":this._bgColor}},l}()},825:function(l,n,e){"use strict";e.d(n,"a",function(){return t});e(0),e(19);var t=function(){return function(){}}()},852:function(l,n,e){"use strict";e.d(n,"a",function(){return u});e(0),e(19),e(825);var t=[e(811).a],u=function(){function l(){}return n=l,l.forRoot=function(){return{ngModule:n,providers:t.slice()}},l;var n}()},853:function(l,n,e){"use strict";function t(l){return u["ɵvid"](0,[(l()(),u["ɵeld"](0,0,null,null,1,"div",[],null,null,null,null,null)),u["ɵdid"](1,278528,null,0,i.m,[u.KeyValueDiffers,u.ElementRef,u.Renderer2],{ngStyle:[0,"ngStyle"]},null)],function(l,n){l(n,1,0,n.component.myStyle)},null)}e.d(n,"a",function(){return r}),n.b=t;var u=e(1),i=e(21),r=u["ɵcrt"]({encapsulation:2,styles:[],data:{}})},876:function(l,n,e){"use strict";function t(l){return o["ɵvid"](0,[(l()(),o["ɵeld"](0,0,null,null,13,"ion-col",[["class","col"],["col-3",""]],null,null,null,null,null)),o["ɵdid"](1,16384,null,0,s.a,[],null,null),(l()(),o["ɵted"](-1,null,["\n                "])),(l()(),o["ɵeld"](3,0,null,null,9,"div",[["class","grid-col-item"]],null,null,null,null,null)),(l()(),o["ɵted"](-1,null,["\n                    "])),(l()(),o["ɵeld"](5,0,null,null,1,"div",[["class","badge"]],null,[[null,"click"]],function(l,n,e){var t=!0;if("click"===n){t=!1!==l.component.onSelectedGridsItemClick(l.context.$implicit,l.parent.context.index,l.context.index)&&t}return t},null,null)),(l()(),o["ɵted"](-1,null,["\n                        -\n                    "])),(l()(),o["ɵted"](-1,null,["\n                    "])),(l()(),o["ɵeld"](8,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),o["ɵted"](-1,null,["\n                    "])),(l()(),o["ɵeld"](10,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),o["ɵted"](11,null,["",""])),(l()(),o["ɵted"](-1,null,["\n                "])),(l()(),o["ɵted"](-1,null,["\n            "]))],null,function(l,n){l(n,8,0,n.component.getMenuIco(n.context.$implicit));l(n,11,0,n.context.$implicit.name)})}function u(l){return o["ɵvid"](0,[(l()(),o["ɵeld"](0,0,null,null,5,"ion-row",[["class","row"]],null,null,null,null,null)),o["ɵdid"](1,16384,null,0,a.a,[],null,null),(l()(),o["ɵted"](-1,null,["\n            "])),(l()(),o["ɵand"](16777216,null,null,1,null,t)),o["ɵdid"](4,802816,null,0,c.i,[o.ViewContainerRef,o.TemplateRef,o.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),o["ɵted"](-1,null,["\n        "]))],function(l,n){l(n,4,0,n.context.$implicit)},null)}function i(l){return o["ɵvid"](0,[(l()(),o["ɵeld"](0,0,null,null,13,"ion-col",[["class","col"],["col-3",""]],null,null,null,null,null)),o["ɵdid"](1,16384,null,0,s.a,[],null,null),(l()(),o["ɵted"](-1,null,["\n                "])),(l()(),o["ɵeld"](3,0,null,null,9,"div",[["class","grid-col-item"]],null,null,null,null,null)),(l()(),o["ɵted"](-1,null,["\n                    "])),(l()(),o["ɵeld"](5,0,null,null,1,"div",[["class","badge"]],null,[[null,"click"]],function(l,n,e){var t=!0;if("click"===n){t=!1!==l.component.onUnSelectedGridsItemClick(l.context.$implicit,l.parent.context.index,l.context.index)&&t}return t},null,null)),(l()(),o["ɵted"](-1,null,["\n                        +\n                    "])),(l()(),o["ɵted"](-1,null,["\n                    "])),(l()(),o["ɵeld"](8,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),o["ɵted"](-1,null,["\n                    "])),(l()(),o["ɵeld"](10,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),o["ɵted"](11,null,["",""])),(l()(),o["ɵted"](-1,null,["\n                "])),(l()(),o["ɵted"](-1,null,["\n            "]))],null,function(l,n){l(n,8,0,n.component.getMenuIco(n.context.$implicit));l(n,11,0,n.context.$implicit.name)})}function r(l){return o["ɵvid"](0,[(l()(),o["ɵeld"](0,0,null,null,5,"ion-row",[["class","row"]],null,null,null,null,null)),o["ɵdid"](1,16384,null,0,a.a,[],null,null),(l()(),o["ɵted"](-1,null,["\n            "])),(l()(),o["ɵand"](16777216,null,null,1,null,i)),o["ɵdid"](4,802816,null,0,c.i,[o.ViewContainerRef,o.TemplateRef,o.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),o["ɵted"](-1,null,["\n        "]))],function(l,n){l(n,4,0,n.context.$implicit)},null)}function d(l){return o["ɵvid"](0,[(l()(),o["ɵeld"](0,0,null,null,10,"ion-header",[],null,null,null,null,null)),o["ɵdid"](1,16384,null,0,h.a,[m.a,o.ElementRef,o.Renderer,[2,f.a]],null,null),(l()(),o["ɵted"](-1,null,["\n    "])),(l()(),o["ɵeld"](3,0,null,null,6,"ion-navbar",[["class","toolbar"],["color","primary"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,g.b,g.a)),o["ɵdid"](4,49152,null,0,p.a,[y.a,[2,f.a],[2,v.a],m.a,o.ElementRef,o.Renderer],{color:[0,"color"]},null),(l()(),o["ɵted"](-1,3,["\n        "])),(l()(),o["ɵeld"](6,0,null,3,2,"ion-title",[],null,null,null,R.b,R.a)),o["ɵdid"](7,49152,null,0,b.a,[m.a,o.ElementRef,o.Renderer,[2,A.a],[2,p.a]],null,null),(l()(),o["ɵted"](-1,0,["gridsmenu-edit"])),(l()(),o["ɵted"](-1,3,["\n    "])),(l()(),o["ɵted"](-1,null,["\n"])),(l()(),o["ɵted"](-1,null,["\n"])),(l()(),o["ɵeld"](12,0,null,null,39,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,S.b,S.a)),o["ɵdid"](13,4374528,null,0,w.a,[m.a,G.a,M.a,o.ElementRef,o.Renderer,y.a,N.a,o.NgZone,[2,f.a],[2,v.a]],null,null),(l()(),o["ɵted"](-1,1,["\n    "])),(l()(),o["ɵeld"](15,0,null,1,1,"horizontal-division-line",[],null,null,null,x.b,x.a)),o["ɵdid"](16,49152,null,0,I.a,[],null,null),(l()(),o["ɵted"](-1,1,["\n    "])),(l()(),o["ɵeld"](18,0,null,1,2,"ion-label",[],null,null,null,null,null)),o["ɵdid"](19,16384,null,0,C.a,[m.a,o.ElementRef,o.Renderer,[8,null],[8,null],[8,null],[8,null]],null,null),(l()(),o["ɵted"](-1,null,["--可删除展示在首页的选项"])),(l()(),o["ɵted"](-1,1,["\n    "])),(l()(),o["ɵeld"](22,0,null,1,1,"horizontal-division-line",[],null,null,null,x.b,x.a)),o["ɵdid"](23,49152,null,0,I.a,[],null,null),(l()(),o["ɵted"](-1,1,["\n    "])),(l()(),o["ɵeld"](25,0,null,1,5,"ion-grid",[["class","grid"],["no-padding",""]],null,null,null,null,null)),o["ɵdid"](26,16384,null,0,F.a,[],null,null),(l()(),o["ɵted"](-1,null,["\n        "])),(l()(),o["ɵand"](16777216,null,null,1,null,u)),o["ɵdid"](29,802816,null,0,c.i,[o.ViewContainerRef,o.TemplateRef,o.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),o["ɵted"](-1,null,["\n    "])),(l()(),o["ɵted"](-1,1,["\n    "])),(l()(),o["ɵeld"](32,0,null,1,1,"horizontal-division-line",[],null,null,null,x.b,x.a)),o["ɵdid"](33,49152,null,0,I.a,[],null,null),(l()(),o["ɵted"](-1,1,["\n    "])),(l()(),o["ɵeld"](35,0,null,1,2,"ion-label",[],null,null,null,null,null)),o["ɵdid"](36,16384,null,0,C.a,[m.a,o.ElementRef,o.Renderer,[8,null],[8,null],[8,null],[8,null]],null,null),(l()(),o["ɵted"](-1,null,["--添加要展示在首页的选项"])),(l()(),o["ɵted"](-1,1,["\n    "])),(l()(),o["ɵeld"](39,0,null,1,1,"horizontal-division-line",[],null,null,null,x.b,x.a)),o["ɵdid"](40,49152,null,0,I.a,[],null,null),(l()(),o["ɵted"](-1,1,["\n    "])),(l()(),o["ɵeld"](42,0,null,1,5,"ion-grid",[["class","grid"],["no-padding",""]],null,null,null,null,null)),o["ɵdid"](43,16384,null,0,F.a,[],null,null),(l()(),o["ɵted"](-1,null,["\n        "])),(l()(),o["ɵand"](16777216,null,null,1,null,r)),o["ɵdid"](46,802816,null,0,c.i,[o.ViewContainerRef,o.TemplateRef,o.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),o["ɵted"](-1,null,["\n    "])),(l()(),o["ɵted"](-1,1,["\n    "])),(l()(),o["ɵeld"](49,0,null,1,1,"horizontal-division-line",[["hdlHeight","54px"]],null,null,null,x.b,x.a)),o["ɵdid"](50,49152,null,0,I.a,[],{hdlHeight:[0,"hdlHeight"]},null),(l()(),o["ɵted"](-1,1,["\n"]))],function(l,n){var e=n.component;l(n,4,0,"primary");l(n,29,0,e.mySelectedRowsArr);l(n,46,0,e.myUnselectedRowsArr);l(n,50,0,"54px")},function(l,n){l(n,3,0,o["ɵnov"](n,4)._hidden,o["ɵnov"](n,4)._sbPadding);l(n,12,0,o["ɵnov"](n,13).statusbarPadding,o["ɵnov"](n,13)._hasRefresher)})}e.d(n,"a",function(){return $});var o=e(1),s=e(209),a=e(211),c=e(21),h=e(123),m=e(3),f=e(7),g=e(407),p=e(44),y=e(13),v=e(28),R=e(406),b=e(85),A=e(59),S=e(195),w=e(35),G=e(6),M=e(14),N=e(38),x=e(853),I=e(812),C=e(66),F=e(210),U=e(811),k=e(17),O=e(32),_=e(126),E=e(201),H=e(127),D=o["ɵcrt"]({encapsulation:2,styles:[],data:{}}),$=o["ɵccf"]("page-gridsmenu-edit",U.a,function(l){return o["ɵvid"](0,[(l()(),o["ɵeld"](0,0,null,null,1,"page-gridsmenu-edit",[],null,null,null,d,D)),o["ɵdid"](1,49152,null,0,U.a,[v.a,k.a,O.a,_.a,E.a,H.a,_.a],null,null)],null,null)},{},{},[])}});