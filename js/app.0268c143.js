(function(e){function t(t){for(var s,c,o=t[0],r=t[1],u=t[2],d=0,m=[];d<o.length;d++)c=o[d],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&m.push(i[c][0]),i[c]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s]);l&&l(t);while(m.length)m.shift()();return n.push.apply(n,u||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],s=!0,o=1;o<a.length;o++){var r=a[o];0!==i[r]&&(s=!1)}s&&(n.splice(t--,1),e=c(c.s=a[0]))}return e}var s={},i={app:0},n=[];function c(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=e,c.c=s,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)c.d(a,s,function(t){return e[t]}.bind(null,s));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/youtube-clone-vue/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],r=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=r;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"2a2a":function(e,t,a){"use strict";a("f030")},"418e":function(e,t,a){"use strict";a("7cb8")},4678:function(e,t,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function i(e){var t=n(e);return a(t)}function n(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}i.keys=function(){return Object.keys(s)},i.resolve=n,e.exports=i,i.id="4678"},"4c21":function(e,t,a){"use strict";a("ef4b")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("7a23"),i=(a("ab8b"),a("7b17"),{class:"navbar navbar-dark sticky-top myMenu flex-md-nowrap p-2 shadow search"}),n=Object(s["h"])("YouTubeClone"),c=Object(s["g"])('<button class="navbar-toggler position-absolute d-md-none collapsed mb-4" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><input class="form-control form-control-dark w-100 bla" type="text" placeholder="Search" aria-label="Search"><div class="navbar-nav"><div class="nav-item text-nowrap"><a class="nav-link px-3" href="#">Sign out</a></div></div>',3),o={id:"links",class:"container-fluid"},r={class:"row"},u={id:"sidebarMenu",class:"col-md-3 col-lg-2 d-md-block myMenu sidebar collapse"},l={class:"position-sticky pt-3"},d={class:"nav flex-column"},m={class:"nav-item"},b=Object(s["h"])("Home"),p={class:"nav-item"},f=Object(s["h"])("About"),j=Object(s["g"])('<li class="nav-item"><a class="nav-link" href="#"><span data-feather="shopping-cart"></span> Subscriptions </a></li><li class="nav-item"><a class="nav-link" href="#"><span data-feather="users"></span> Library </a></li><li class="nav-item"><a class="nav-link" href="#"><span data-feather="bar-chart-2"></span> History </a></li><li class="nav-item"><a class="nav-link" href="#"><span data-feather="layers"></span> Your Videos </a></li><li class="nav-item"><a class="nav-link" href="#"><span data-feather="layers"></span> Watch Later </a></li><li class="nav-item"><a class="nav-link" href="#"><span data-feather="layers"></span> Liked Videos </a></li>',6),v=Object(s["g"])('<h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"><span class="homeSpan">Subscriptions</span><a class="link-secondary" href="#" aria-label="Add a new report"><span data-feather="plus-circle"></span></a></h6><ul class="nav flex-column mb-2"><li class="nav-item"><a class="nav-link" href="#"><span data-feather="file-text"></span> Blaž Kmetič </a></li><li class="nav-item"><a class="nav-link" href="#"><span data-feather="file-text"></span> Someone Else </a></li><li class="nav-item"><a class="nav-link" href="#"><span data-feather="file-text"></span> And Someone Else </a></li></ul>',2),h={class:"col-md-9 ms-sm-auto col-lg-10 px-md-4 main-change"},O=Object(s["g"])('<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"><h1 class="h2 yt">YoutubeClone</h1><div class="btn-toolbar mb-2 mb-md-0"><div class="btn-group me-2"><button type="button" class="btn btn-sm btn-outline-secondary"> Share </button><button type="button" class="btn btn-sm btn-outline-secondary"> Export </button></div><button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle"><span data-feather="calendar"></span> This week </button></div></div>',1),g={class:"content-style"};function y(e,t){var a=Object(s["y"])("router-link"),y=Object(s["y"])("router-view");return Object(s["r"])(),Object(s["e"])(s["a"],null,[Object(s["f"])("header",i,[Object(s["i"])(a,{class:"navbar-brand col-md-3 col-lg-2 me-0 px-3",to:{name:"Home"}},{default:Object(s["D"])((function(){return[n]})),_:1}),c]),Object(s["f"])("div",o,[Object(s["f"])("div",r,[Object(s["f"])("nav",u,[Object(s["f"])("div",l,[Object(s["f"])("ul",d,[Object(s["f"])("li",m,[Object(s["i"])(a,{to:{name:"Home"},class:"nav-link active","aria-current":"page"},{default:Object(s["D"])((function(){return[b]})),_:1})]),Object(s["f"])("li",p,[Object(s["i"])(a,{to:{name:"About"},class:"nav-link"},{default:Object(s["D"])((function(){return[f]})),_:1})]),j]),v])]),Object(s["f"])("main",h,[O,Object(s["f"])("div",g,[Object(s["i"])(y)])])])])],64)}a("2a2a");var q=a("6b0d"),w=a.n(q);const k={},x=w()(k,[["render",y]]);var D=x,V=a("6c02"),I={class:"row g-4 row-cols-1 row-cols-sm-4"};function S(e,t,a,i,n,c){var o=Object(s["y"])("ShowVideo");return Object(s["r"])(),Object(s["e"])("div",I,[(Object(s["r"])(!0),Object(s["e"])(s["a"],null,Object(s["x"])(e.allVideosIds,(function(e){return Object(s["r"])(),Object(s["e"])("div",{key:e},[Object(s["i"])(o,{showVideoId:e,class:"animate__animated animate__fadeInTopLeft"},null,8,["showVideoId"])])})),128))])}var _=a("5530"),A=a("5502"),z={key:0},C={key:0,id:"sidebar"},M={class:"row g-0"},U={class:"col-lg-6"},N=["src"],H={class:"card-text"},T={class:"cardName"},L={class:"col-lg-6 bottom"},Y={class:"card-body"},K={class:"card-title"},Z={key:1,id:"showVideo"},E={class:"my-card"},R={class:"card",style:{}},P={class:"card h-100"},G=["src"],Q={class:"card-body"},W={class:"card-title"},F={class:"card-text"},J={class:"cardName"};function B(e,t,a,i,n,c){var o=this,r=Object(s["y"])("router-link");return n.videoData?(Object(s["r"])(),Object(s["e"])("div",z,[Object(s["i"])(r,{to:{name:"ChosenVideo",params:{detailsId:this.showVideoId}}},{default:Object(s["D"])((function(){return[o.sidebar?(Object(s["r"])(),Object(s["e"])("div",C,[Object(s["f"])("div",M,[Object(s["f"])("div",U,[Object(s["f"])("img",{src:n.videoData.items[0].snippet.thumbnails.maxres.url,class:"img-fluid rounded-start",alt:"..."},null,8,N),Object(s["f"])("p",H,[Object(s["f"])("span",T,[Object(s["f"])("p",null,Object(s["A"])(n.videoData.items[0].statistics.viewCount)+" Views",1),Object(s["f"])("p",null,Object(s["A"])(c.correctData),1)])])]),Object(s["f"])("div",L,[Object(s["f"])("div",Y,[Object(s["f"])("div",K,Object(s["A"])(n.videoData.items[0].snippet.title.substring(0,45)),1)])])])])):(Object(s["r"])(),Object(s["e"])("div",Z,[Object(s["f"])("div",E,[Object(s["f"])("div",R,[Object(s["f"])("div",P,[Object(s["f"])("img",{src:n.videoData.items[0].snippet.thumbnails.maxres.url,class:"card-img-top my-img",alt:"..."},null,8,G),Object(s["f"])("div",Q,[Object(s["f"])("h5",W,Object(s["A"])(n.videoData.items[0].snippet.title),1),Object(s["f"])("p",F,[Object(s["f"])("span",J,[Object(s["f"])("p",null,Object(s["A"])(n.videoData.items[0].statistics.viewCount)+" Views",1),Object(s["f"])("p",null,Object(s["A"])(c.correctData),1)])])])])])])]))]})),_:1},8,["to"])])):Object(s["d"])("",!0)}var X=a("1da1"),$=(a("96cf"),a("99af"),a("bc3a")),ee=a.n($),te=a("c1df"),ae=a.n(te),se={name:"ShowVideos",props:["showVideoId","sidebar"],computed:{correctData:function(){var e=new Date(this.videoData.items[0].snippet.publishedAt);return ae()(e).format("DD-MM-YYYY")}},created:function(){this.getVideos()},data:function(){return{url:"https://www.googleapis.com/youtube/v3/videos?id=",apiKey:"AIzaSyCrq46vpCpa50Z4t-GQ_GNuqZHIeyZWg14",endUrl:"&part=snippet,contentDetails,statistics,status",videoData:null}},methods:{getVideos:function(){var e=this;return Object(X["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,ee.a.get("".concat(e.url).concat(e.showVideoId,"&key=").concat(e.apiKey).concat(e.endUrl));case 2:a=t.sent,e.videoData=a.data,console.log(e.videoData);case 5:case"end":return t.stop()}}),t)})))()}}};a("4c21");const ie=w()(se,[["render",B]]);var ne=ie,ce={name:"Home",components:{ShowVideo:ne},computed:Object(_["a"])({},Object(A["b"])(["allVideosIds","videoData"]))};a("418e");const oe=w()(ce,[["render",S]]);var re=oe,ue=(a("a4d3"),a("e01a"),{id:"chosenVideo"}),le={key:0,class:"row g-4 row-cols-sm-1 mt-4"},de={class:"row"},me={class:"col-md-8"},be={class:"card-img mb-3 animate__animated animate__fadeInTopLeft"},pe=["src"],fe={class:"card-body"},je={class:"card-title"},ve={class:"card-text"},he={class:"card-text details"},Oe={class:"text-muted"},ge={class:"far fa-thumbs-up"},ye={class:"fas fa-thumbs-down"},qe={class:"col-md-4"},we={class:"card border-0 mb-3"};function ke(e,t,a,i,n,c){var o=Object(s["y"])("SidebarVideo");return Object(s["r"])(),Object(s["e"])("div",ue,[n.videoData?(Object(s["r"])(),Object(s["e"])("div",le,[Object(s["f"])("div",de,[Object(s["f"])("div",me,[Object(s["f"])("div",be,[Object(s["f"])("iframe",{width:"100%",height:"450vh",src:n.embedUrl+a.detailsId,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},null,8,pe),Object(s["f"])("div",fe,[Object(s["f"])("h5",je,Object(s["A"])(n.videoData.items[0].snippet.title)+" plus "+Object(s["A"])(this.detailsId),1),Object(s["f"])("p",ve,Object(s["A"])(n.videoData.items[0].snippet.description.substring(0,250)),1),Object(s["f"])("div",he,[Object(s["f"])("p",null,Object(s["A"])(n.videoData.items[0].statistics.viewCount)+" Views",1),Object(s["f"])("small",Oe,[Object(s["f"])("i",ge,Object(s["A"])(n.videoData.items[0].statistics.likeCount),1),Object(s["f"])("i",ye,Object(s["A"])(n.videoData.items[0].statistics.dislikeCount),1)])])])])]),Object(s["f"])("div",qe,[Object(s["f"])("div",we,[Object(s["i"])(o,{class:"animate__animated animate__lightSpeedInLeft"})])])])])):Object(s["d"])("",!0)])}function xe(e,t,a,i,n,c){var o=Object(s["y"])("ShowVideo");return Object(s["r"])(),Object(s["e"])("div",null,[(Object(s["r"])(!0),Object(s["e"])(s["a"],null,Object(s["x"])(e.allVideosIds,(function(e){return Object(s["r"])(),Object(s["e"])("div",{key:e},[Object(s["i"])(o,{showVideoId:e,sidebar:!0},null,8,["showVideoId"])])})),128))])}var De={name:"SidebarVideo",components:{ShowVideo:ne},computed:Object(_["a"])({},Object(A["b"])(["allVideosIds"]))};const Ve=w()(De,[["render",xe]]);var Ie=Ve,Se={props:["detailsId"],name:"ChosenVideo",components:{SidebarVideo:Ie},computed:Object(_["a"])({},Object(A["b"])(["allVideosIds"])),created:function(){this.videoDetail()},watch:{detailsId:function(e,t){this.videoDetail()}},mounted:function(){console.log("mounted cycle")},data:function(){return{url:"https://www.googleapis.com/youtube/v3/videos?id=",apiKey:"AIzaSyCrq46vpCpa50Z4t-GQ_GNuqZHIeyZWg14",endUrl:"&part=snippet,contentDetails,statistics,status",videoData:null,embedUrl:"https://www.youtube.com/embed/"}},methods:{videoDetail:function(){var e=this;return Object(X["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,ee.a.get("".concat(e.url).concat(e.detailsId,"&key=").concat(e.apiKey).concat(e.endUrl));case 2:a=t.sent,e.videoData=a.data,console.log(e.videoData);case 5:case"end":return t.stop()}}),t)})))()}}};a("9592");const _e=w()(Se,[["render",ke]]);var Ae=_e,ze=function(e){return Object(s["u"])("data-v-117cb7f1"),e=e(),Object(s["s"])(),e},Ce=ze((function(){return Object(s["f"])("h2",null,"About",-1)})),Me=ze((function(){return Object(s["f"])("p",null," Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus quo debitis obcaecati dicta dolores commodi quod aliquid quasi ipsum incidunt illum aspernatur, impedit aperiam voluptatibus consequatur distinctio! Iste quo accusantium nemo molestiae ullam optio doloremque minus. Unde, quaerat cumque excepturi fugit tempore natus aperiam quo! Laudantium, voluptatum ducimus temporibus tempora repellat rerum, corrupti nostrum officiis incidunt velit numquam eum expedita iusto cupiditate reiciendis ullam esse, explicabo illo possimus quo excepturi. Asperiores numquam quas, id sint deserunt animi pariatur est consequatur eaque reiciendis quaerat similique hic, voluptatem eum eligendi, sed culpa molestias voluptate. Reiciendis nobis eligendi ipsa porro ullam, vitae necessitatibus maiores, cumque dolorum, quia ducimus! Molestiae inventore accusamus voluptates vel itaque aliquam magnam natus, fugit ipsa, labore autem ex quam. Cupiditate ea excepturi dolor eveniet esse odio deleniti, fuga laborum asperiores accusamus deserunt id eum animi officiis aut! Ex nulla alias neque sunt explicabo dolorum voluptate, aliquid cupiditate temporibus non. Voluptate veniam, adipisci eos facere quae ea quidem provident soluta perferendis accusamus accusantium cupiditate, aliquid velit, expedita eius? Numquam sit quo repellendus sint. Omnis unde eligendi odit, quae doloremque libero ea illo facilis veniam repellendus soluta natus nihil velit provident praesentium temporibus minima quas ducimus error nostrum? Dolor eos officia temporibus, quae alias qui natus fugiat sint nostrum eaque iste animi itaque commodi! Dolor provident aperiam recusandae consequuntur pariatur expedita vero architecto doloremque, illum iusto tenetur, minus eaque dignissimos voluptates? Assumenda cum magni mollitia blanditiis ex dolores non excepturi vitae atque iure iste impedit magnam, velit sit adipisci, fuga suscipit aspernatur iusto vel deserunt. Minima dolore blanditiis hic temporibus non dignissimos quae itaque earum magnam magni commodi, molestiae perspiciatis, minus deserunt? Sint voluptas natus officiis porro. Eius suscipit necessitatibus facere exercitationem sunt corporis doloremque? Exercitationem labore eum adipisci voluptates quam, ad facilis quisquam placeat voluptatibus. Voluptatum cumque voluptate sed ratione placeat aperiam nostrum quod explicabo sapiente libero, praesentium doloribus pariatur atque animi distinctio officiis. Saepe, nemo consequuntur! Exercitationem itaque nam eum enim numquam minus, commodi perspiciatis quibusdam quia dolorum! Dicta blanditiis odio provident exercitationem nemo ipsa dolore, dolorum reiciendis, fugit facilis beatae ea. Nemo nesciunt maxime aperiam sint temporibus laboriosam? Rem voluptatem odit iste tempora, molestiae numquam architecto? Autem distinctio, quod quam vero amet molestiae repellat doloribus earum provident nemo enim dolore cumque adipisci voluptatem eos, incidunt illo dolores alias, nulla accusamus placeat vitae neque! Quasi, quos placeat sed, quas earum provident non unde incidunt corrupti nemo enim ipsam itaque cum accusamus veritatis eum aspernatur amet? Magni asperiores eligendi maxime placeat? Non veritatis mollitia minima earum cupiditate. Aspernatur commodi ullam, iste itaque vero ipsam dolor! Inventore earum non quasi accusantium provident sint harum similique exercitationem tenetur libero. Tenetur facere, nesciunt nisi culpa fugit soluta nobis minus omnis sint eveniet libero, fugiat veritatis incidunt possimus rerum magni alias molestiae atque mollitia illum dolore! Dicta corrupti consequuntur error voluptatibus accusantium rem provident nam, tempore perspiciatis in natus harum aspernatur hic unde sed inventore quam quos sint! Nostrum, non qui, perferendis accusamus nisi amet laborum modi totam, deleniti sapiente dolorem esse quo odit illo vel porro autem temporibus facilis omnis unde ut quidem voluptas. Suscipit libero nesciunt quis sed obcaecati incidunt sit, nihil architecto placeat. Nesciunt dolores quaerat officia. Deserunt tempore quisquam veniam, distinctio voluptates doloremque vero temporibus necessitatibus, a minus, eaque nisi consectetur eligendi similique in facere ipsum ipsam explicabo quaerat fugiat dolore! Illum fuga repudiandae quasi, sapiente maxime fugiat inventore amet dolorum suscipit nulla, blanditiis voluptas. ",-1)}));function Ue(e,t,a,i,n,c){return Object(s["r"])(),Object(s["e"])(s["a"],null,[Ce,Me],64)}var Ne={name:"About"};a("997f");const He=w()(Ne,[["render",Ue],["__scopeId","data-v-117cb7f1"]]);var Te=He,Le=[{path:"/",name:"Home",component:re},{path:"/about",name:"About",component:Te},{path:"/chosen-video/:detailsId",name:"ChosenVideo",component:Ae,props:!0}],Ye=Object(V["a"])({history:Object(V["b"])("/youtube-clone-vue/"),routes:Le}),Ke=Ye,Ze=Object(A["a"])({state:{allVideosIds:["uXjLfSFkqTs","6oo323AQ0JI","kft2AkvKhWU","TNzgUCU5TVs","HHs1ftjayUw","O5HY_TRov2c","LrNkecdU6mI","VXKBaVGWSk0","MHpHPj-DosY","NM71cqoNt3w","FZ0YtjgO0DQ","9wKivv-vvhU"],url:"https://www.googleapis.com/youtube/v3/videos?id=",apiKey:"AIzaSyCrq46vpCpa50Z4t-GQ_GNuqZHIeyZWg14",endUrl:"&part=snippet,contentDetails,statistics,status",videoData:null},mutations:{setVideoData:function(e,t){e.videoData=t}},actions:{fetchVideoData:function(e,t){return Object(X["a"])(regeneratorRuntime.mark((function a(){var s,i,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return s=e.commit,i=e.state,a.next=3,ee.a.get("".concat(i.url).concat(t,"&key=").concat(i.apiKey).concat(i.endUrl));case 3:n=a.sent,s("setVideoData",n);case 5:case"end":return a.stop()}}),a)})))()}},getters:{getVideoData:function(e){return e.videoData}},modules:{}}),Ee=(a("aede"),Object(s["c"])(D));Ee.use(Ze),Ee.use(Ke),Ee.mount("#app")},"7cb8":function(e,t,a){},9592:function(e,t,a){"use strict";a("a02f")},"997f":function(e,t,a){"use strict";a("c622")},a02f:function(e,t,a){},aede:function(e,t,a){},c622:function(e,t,a){},ef4b:function(e,t,a){},f030:function(e,t,a){}});
//# sourceMappingURL=app.0268c143.js.map