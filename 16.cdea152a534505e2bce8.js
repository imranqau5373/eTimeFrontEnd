(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"f+ep":function(n,l,o){"use strict";o.r(l);var t=o("CcnG"),e=function(){},u=o("pMnS"),i=o("gIcY"),r=o("5G77"),a=function(){function n(n,l){this._httpService=n,this.router=l,this.userName="",this.status=""}return n.prototype.ngOnInit=function(){},n.prototype.onLoggedin=function(){var n=this;this._httpService.anonymousPost("api/Account/login",{UserName:this.userName}).subscribe(function(l){localStorage.setItem("loggedInUserId",l.UserId),localStorage.setItem("loggedInUserName",l.UserName),n.router.navigate(["/e-time/time"])},function(l){n.status="Invalid User Name",console.error(l.text())})},n}(),s=o("ZYCi"),g=t["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block}.login-page[_ngcontent-%COMP%]{position:absolute;top:0;left:0;right:0;bottom:0;overflow:auto;background:#222;text-align:center;color:#fff;padding:3em}.login-page[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]{padding:0}.login-page[_ngcontent-%COMP%]   .input-lg[_ngcontent-%COMP%]{height:46px;padding:10px 16px;font-size:18px;line-height:1.3333333;border-radius:0}.login-page[_ngcontent-%COMP%]   .input-underline[_ngcontent-%COMP%]{background:0 0;border:none;box-shadow:none;border-bottom:2px solid rgba(255,255,255,.5);color:#fff;border-radius:0}.login-page[_ngcontent-%COMP%]   .input-underline[_ngcontent-%COMP%]:focus{border-bottom:2px solid #fff;box-shadow:none}.login-page[_ngcontent-%COMP%]   .rounded-btn[_ngcontent-%COMP%]{border-radius:50px;color:rgba(255,255,255,.8);background:#222;border:2px solid rgba(255,255,255,.8);font-size:18px;line-height:40px;padding:0 25px}.login-page[_ngcontent-%COMP%]   .rounded-btn[_ngcontent-%COMP%]:active, .login-page[_ngcontent-%COMP%]   .rounded-btn[_ngcontent-%COMP%]:focus, .login-page[_ngcontent-%COMP%]   .rounded-btn[_ngcontent-%COMP%]:hover, .login-page[_ngcontent-%COMP%]   .rounded-btn[_ngcontent-%COMP%]:visited{color:#fff;border:2px solid #fff;outline:0}.login-page[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-weight:300;margin-top:20px;margin-bottom:10px;font-size:36px}.login-page[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{color:rgba(255,255,255,.7)}.login-page[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{padding:8px 0}.login-page[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder{color:rgba(255,255,255,.6)!important}.login-page[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-moz-placeholder{color:rgba(255,255,255,.6)!important}.login-page[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder{color:rgba(255,255,255,.6)!important}.login-page[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-ms-input-placeholder{color:rgba(255,255,255,.6)!important}.login-page[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]{padding:40px 0}.login-page[_ngcontent-%COMP%]   .user-avatar[_ngcontent-%COMP%]{border-radius:50%;border:2px solid #fff}"]],data:{animation:[{type:7,name:"routerTransition",definitions:[{type:0,name:"void",styles:{type:6,styles:{},offset:null},options:void 0},{type:0,name:"*",styles:{type:6,styles:{},offset:null},options:void 0},{type:1,expr:":enter",animation:[{type:6,styles:{transform:"translateY(100%)"},offset:null},{type:4,styles:{type:6,styles:{transform:"translateY(0%)"},offset:null},timings:"0.5s ease-in-out"}],options:null},{type:1,expr:":leave",animation:[{type:6,styles:{transform:"translateY(0%)"},offset:null},{type:4,styles:{type:6,styles:{transform:"translateY(-100%)"},offset:null},timings:"0.5s ease-in-out"}],options:null}],options:{}}]}});function d(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,25,"div",[["class","login-page"]],[[24,"@routerTransition",0]],null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,24,"div",[["class","row justify-content-md-center"]],null,null,null,null,null)),(n()(),t["\u0275eld"](2,0,null,null,23,"div",[["class","col-md-4"]],null,null,null,null,null)),(n()(),t["\u0275eld"](3,0,null,null,0,"img",[["class","user-avatar"],["src","assets/images/logo.png"],["width","150px"]],null,null,null,null,null)),(n()(),t["\u0275eld"](4,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["eTime"])),(n()(),t["\u0275eld"](6,0,null,null,19,"form",[["novalidate",""],["role","form"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(n,l,o){var e=!0;return"submit"===l&&(e=!1!==t["\u0275nov"](n,8).onSubmit(o)&&e),"reset"===l&&(e=!1!==t["\u0275nov"](n,8).onReset()&&e),e},null,null)),t["\u0275did"](7,16384,null,0,i.u,[],null,null),t["\u0275did"](8,4210688,null,0,i.m,[[8,null],[8,null]],null,null),t["\u0275prd"](2048,null,i.b,null,[i.m]),t["\u0275did"](10,16384,null,0,i.l,[[4,i.b]],null,null),(n()(),t["\u0275eld"](11,0,null,null,12,"div",[["class","form-content"]],null,null,null,null,null)),(n()(),t["\u0275eld"](12,0,null,null,9,"div",[["class","form-group"]],null,null,null,null,null)),(n()(),t["\u0275eld"](13,0,null,null,8,"input",[["class","form-control input-underline input-lg"],["id","txtUserName"],["name","UserName"],["placeholder","User Name"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,o){var e=!0,u=n.component;return"input"===l&&(e=!1!==t["\u0275nov"](n,14)._handleInput(o.target.value)&&e),"blur"===l&&(e=!1!==t["\u0275nov"](n,14).onTouched()&&e),"compositionstart"===l&&(e=!1!==t["\u0275nov"](n,14)._compositionStart()&&e),"compositionend"===l&&(e=!1!==t["\u0275nov"](n,14)._compositionEnd(o.target.value)&&e),"ngModelChange"===l&&(e=!1!==(u.userName=o)&&e),e},null,null)),t["\u0275did"](14,16384,null,0,i.c,[t.Renderer2,t.ElementRef,[2,i.a]],null,null),t["\u0275did"](15,16384,null,0,i.q,[],{required:[0,"required"]},null),t["\u0275prd"](1024,null,i.h,function(n){return[n]},[i.q]),t["\u0275prd"](1024,null,i.i,function(n){return[n]},[i.c]),t["\u0275did"](18,671744,null,0,i.n,[[2,i.b],[6,i.h],[8,null],[6,i.i]],{name:[0,"name"],model:[1,"model"],options:[2,"options"]},{update:"ngModelChange"}),t["\u0275pod"](19,{standalone:0}),t["\u0275prd"](2048,null,i.j,null,[i.n]),t["\u0275did"](21,16384,null,0,i.k,[[4,i.j]],null,null),(n()(),t["\u0275eld"](22,0,null,null,1,"span",[["class","text-danger"]],null,null,null,null,null)),(n()(),t["\u0275ted"](23,null,["",""])),(n()(),t["\u0275eld"](24,0,null,null,1,"a",[["class","btn rounded-btn"]],null,[[null,"click"]],function(n,l,o){var t=!0;return"click"===l&&(t=!1!==n.component.onLoggedin()&&t),t},null,null)),(n()(),t["\u0275ted"](-1,null,[" Log in "]))],function(n,l){var o=l.component;n(l,15,0,""),n(l,18,0,"UserName",o.userName,n(l,19,0,!0))},function(n,l){var o=l.component;n(l,0,0,void 0),n(l,6,0,t["\u0275nov"](l,10).ngClassUntouched,t["\u0275nov"](l,10).ngClassTouched,t["\u0275nov"](l,10).ngClassPristine,t["\u0275nov"](l,10).ngClassDirty,t["\u0275nov"](l,10).ngClassValid,t["\u0275nov"](l,10).ngClassInvalid,t["\u0275nov"](l,10).ngClassPending),n(l,13,0,t["\u0275nov"](l,15).required?"":null,t["\u0275nov"](l,21).ngClassUntouched,t["\u0275nov"](l,21).ngClassTouched,t["\u0275nov"](l,21).ngClassPristine,t["\u0275nov"](l,21).ngClassDirty,t["\u0275nov"](l,21).ngClassValid,t["\u0275nov"](l,21).ngClassInvalid,t["\u0275nov"](l,21).ngClassPending),n(l,23,0,o.status)})}var p=t["\u0275ccf"]("app-login",a,function(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"app-login",[],null,null,null,d,g)),t["\u0275did"](1,114688,null,0,a,[r.a,s.l],null,null)],function(n,l){n(l,1,0)},null)},{},{},[]),c=o("Ip0R"),m=o("sE5F"),f=function(){};o.d(l,"LoginModuleNgFactory",function(){return C});var C=t["\u0275cmf"](e,[],function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[u.a,p]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,c.o,c.n,[t.LOCALE_ID,[2,c.x]]),t["\u0275mpd"](4608,m.c,m.c,[]),t["\u0275mpd"](4608,m.h,m.b,[]),t["\u0275mpd"](5120,m.j,m.k,[]),t["\u0275mpd"](4608,m.i,m.i,[m.c,m.h,m.j]),t["\u0275mpd"](4608,m.g,m.a,[]),t["\u0275mpd"](5120,m.e,m.l,[m.i,m.g]),t["\u0275mpd"](4608,i.v,i.v,[]),t["\u0275mpd"](4608,r.a,r.a,[m.e,s.l]),t["\u0275mpd"](1073742336,c.b,c.b,[]),t["\u0275mpd"](1073742336,s.o,s.o,[[2,s.u],[2,s.l]]),t["\u0275mpd"](1073742336,f,f,[]),t["\u0275mpd"](1073742336,m.f,m.f,[]),t["\u0275mpd"](1073742336,i.s,i.s,[]),t["\u0275mpd"](1073742336,i.g,i.g,[]),t["\u0275mpd"](1073742336,e,e,[]),t["\u0275mpd"](1024,s.j,function(){return[[{path:"",component:a}]]},[])])})}}]);