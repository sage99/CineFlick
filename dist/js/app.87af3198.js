(function(t){function e(e){for(var n,r,s=e[0],l=e[1],c=e[2],v=0,f=[];v<s.length;v++)r=s[v],o[r]&&f.push(o[r][0]),o[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(f.length)f.shift()();return a.push.apply(a,c||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],n=!0,s=1;s<i.length;s++){var l=i[s];0!==o[l]&&(n=!1)}n&&(a.splice(e--,1),t=r(r.s=i[0]))}return t}var n={},o={app:0},a=[];function r(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=n,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(i,n,function(e){return t[e]}.bind(null,n));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"077c":function(t,e,i){"use strict";var n=i("e7d2"),o=i.n(n);o.a},1:function(t,e){},2:function(t,e){},3:function(t,e){},"30d6":function(t,e,i){},3565:function(t,e,i){},4:function(t,e){},5:function(t,e){},5338:function(t,e,i){"use strict";var n=i("f9cc"),o=i.n(n);o.a},"56d7":function(t,e,i){"use strict";i.r(e);var n=i("2b0e"),o=i("d437"),a=i.n(o),r=i("d421"),s=i.n(r),l=i("535c"),c=i.n(l),u=i("e1f0"),v=i.n(u),f=i("c713"),p=i.n(f),m=i("8f6b"),d=i.n(m),h=i("db3b"),_=i.n(h),g=i("5d92"),b=i.n(g),O=i("6a6f"),y=i.n(O),w=i("d553"),T=i.n(w),M=i("12d0"),k=i.n(M),I=i("25b1"),E=i.n(I),S=i("fa50"),j=i.n(S),A=i("68d6"),P=i.n(A),x=i("2330"),D=i.n(x),C=i("9861"),N=i.n(C),V=i("3e8b"),L=i.n(V),F=i("49f8"),$=i.n(F),U=i("341d"),W=i.n(U),R=i("4ec6"),H=i.n(R),G=i("9f3b"),z=i.n(G),B=i("10a1"),J=i.n(B),K=i("ba6e"),q=i.n(K),Y=i("cf3f"),Q=i.n(Y);i("da64");n["default"].use(a.a,{components:{VApp:s.a,VNavigationDrawer:c.a,VList:v.a,VCard:p.a,VForm:d.a,VTextField:_.a,VBtn:b.a,VIcon:y.a,VGrid:T.a,VToolbar:k.a,VSnackbar:E.a,VImg:j.a,VDivider:P.a,transitions:D.a,VMenu:N.a,VAvatar:L.a,VSubheader:$.a,VProgressCircular:W.a,VTooltip:H.a,VSwitch:z.a,VCheckbox:J.a,VPagination:q.a,VDialog:Q.a},iconfont:"md"});var X=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",{attrs:{dark:t.darkMode}},[t.blockstack.isUserSignedIn()?i("div",[i("Navbar",{staticClass:"hidden-sm-and-up",attrs:{drawer:t.drawer}}),i("toolbar",{attrs:{dark:t.darkMode},on:{toggleDrawer:function(e){t.drawer=!t.drawer}}})],1):t._e(),i("v-content",{class:t.blockstack.isUserSignedIn()?"":t.res,attrs:{id:"backImage"}},[i("v-container",{attrs:{fluid:"","fill-height":""}},[i("v-layout",{attrs:{"justify-center":"","align-center":""}},[i("v-flex",{attrs:{shrink:""}},[i("router-view")],1)],1)],1)],1)],1)},Z=[],tt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-navigation-drawer",{attrs:{clipped:"",fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[i("v-list",[i("v-list-tile",{on:{click:t.dummyFunction}},[i("v-list-tile-action",[i("v-icon",[t._v("dashboard")])],1),i("v-list-tile-content",[i("v-list-tile-title",[t._v("Dashboard")])],1)],1),i("v-list-tile",{on:{click:t.dummyFunction}},[i("v-list-tile-action",[i("v-icon",[t._v("settings")])],1),i("v-list-tile-content",[i("v-list-tile-title",[t._v("Settings")])],1)],1)],1)],1)],1)},et=[],it={name:"navbar",data:function(){return{}},props:["drawer"]},nt=it,ot=(i("5dfc"),i("2877")),at=Object(ot["a"])(nt,tt,et,!1,null,null,null);at.options.__file="Navbar.vue";var rt=at.exports,st=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-toolbar",{attrs:{dark:"",app:"",fixed:"","clipped-left":""}},[i("v-toolbar-side-icon",{staticClass:"hidden-sm-and-up",on:{click:function(e){t.$emit("toggleDrawer")}}}),i("v-toolbar-title",[i("a",{staticClass:"title1",on:{click:function(e){t.getMovies("IN_THEATRE_MOVIES","in-theatre")}}},[t._v("CineFlick")])]),i("v-spacer"),i("v-menu",{attrs:{transition:"slide-y-transition",bottom:"","min-width":"20"}},[i("v-btn",{attrs:{slot:"activator",flat:""},slot:"activator"},[t._v("\n      Watch List\n    ")]),i("v-list",[i("v-list-tile",{on:{click:t.getMovieWatchlist}},[i("v-list-tile-title",[t._v("Movies")])],1),i("v-list-tile",[i("v-list-tile-title",[t._v("TV Shows (Coming Soon...)")])],1)],1)],1),i("v-menu",{attrs:{transition:"slide-y-transition",bottom:"","min-width":"20"}},[i("v-btn",{attrs:{slot:"activator",flat:""},slot:"activator"},[t._v("\n      Favourites\n    ")]),i("v-list",[i("v-list-tile",{on:{click:t.getFavouriteMovies}},[i("v-list-tile-title",[t._v("Movies")])],1),i("v-list-tile",[i("v-list-tile-title",[t._v("TV Shows (Coming Soon...)")])],1)],1)],1),i("v-menu",{attrs:{transition:"slide-y-transition",bottom:"","min-width":"20"}},[i("v-btn",{attrs:{slot:"activator",flat:""},slot:"activator"},[t._v("\n      Movies\n    ")]),i("v-list",[i("v-list-tile",{on:{click:function(e){t.getMovies("IN_THEATRE_MOVIES","in-theatres")}}},[i("v-list-tile-title",[t._v("In Theaters")])],1),i("v-list-tile",{on:{click:function(e){t.getMovies("POPULAR_MOVIES","popular")}}},[i("v-list-tile-title",[t._v("Popular")])],1),i("v-list-tile",{on:{click:function(e){t.getMovies("TOP_RATED_MOVIES","top-rated")}}},[i("v-list-tile-title",[t._v("Top Rated")])],1)],1)],1),i("v-menu",{attrs:{transition:"slide-y-transition",bottom:"","min-width":"20"}},[i("v-btn",{attrs:{slot:"activator",flat:""},slot:"activator"},[t._v("\n      TV Shows\n    ")]),i("v-list",[i("v-list-tile",[i("v-list-tile-title",[t._v("In Theaters (Coming Soon...)")])],1),i("v-list-tile",[i("v-list-tile-title",[t._v("Popular (Coming Soon...)")])],1),i("v-list-tile",[i("v-list-tile-title",[t._v("Top Rated (Coming Soon...)")])],1)],1)],1),i("avatar-menu")],1)},lt=[],ct=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-menu",{attrs:{bottom:"",left:"","min-width":"200"}},[i("v-btn",{attrs:{slot:"activator",icon:""},slot:"activator"},[i("v-avatar",{attrs:{size:"32px"}},[t.profileData.hasOwnProperty("profile")&&t.profileData.profile.hasOwnProperty("image")?i("img",{attrs:{src:t.profileData.profile.image[0].contentUrl,alt:"avatar"}}):i("v-icon",[t._v("account_circle")])],1)],1),i("v-list",[i("v-list-tile",{on:{click:t.showProfile}},[i("v-list-tile-action",[i("v-icon",[t._v("person")])],1),i("v-list-tile-content",[i("v-list-tile-title",[t._v("Profile (coming soon...)")])],1)],1),i("v-list-tile",{on:{click:t.dummyFunction}},[i("v-list-tile-action",[i("v-icon",[t._v("list")])],1),i("v-list-tile-content",[i("v-list-tile-title",[t._v("Playlist (coming soon...)")])],1)],1),i("v-list-tile",{attrs:{"three-lines":""},on:{click:function(e){t.dark=!t.dark}}},[i("v-list-tile-action",[i("v-checkbox",{staticClass:"mt-3",attrs:{color:"blue",type:"checkbox"},model:{value:t.dark,callback:function(e){t.dark=e},expression:"dark"}})],1),i("v-list-tile-content",[i("v-list-tile-title",[t._v("Dark Mode")])],1)],1),i("v-divider"),i("v-list-tile",{on:{click:t.signOut}},[i("v-list-tile-action",[i("v-icon",[t._v("exit_to_app")])],1),i("v-list-tile-content",[i("v-list-tile-title",[t._v("Logout")])],1)],1)],1)],1)},ut=[],vt=i("2f62");function ft(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},n=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),n.forEach(function(e){pt(t,e,i[e])})}return t}function pt(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var mt={computed:ft({},Object(vt["b"])({profileData:"getProfileData",darkMode:"darkMode"})),watch:{dark:function(){this.$store.commit("MUTATION_SET_DARK_MODE",this.dark)}},data:function(){return{dark:!1}},methods:{showProfile:function(){},signOut:function(){this.blockstack.signUserOut(window.location.href),window.location.href="/"}},mounted:function(){this.dark=this.darkMode}},dt=mt,ht=(i("83e8"),Object(ot["a"])(dt,ct,ut,!1,null,null,null));ht.options.__file="AvatarMenu.vue";var _t=ht.exports,gt={name:"Toolbar",components:{AvatarMenu:_t},methods:{getMovies:function(t,e){this.$store.dispatch("ACTION_GET_".concat(t),{page:1}),this.$router.push({name:"Home",params:{type:e}})},getMovieWatchlist:function(){this.$router.push({name:"MoviesWatchlist"})},getFavouriteMovies:function(){this.$router.push({name:"FavouriteMovies"})}}},bt=gt,Ot=(i("60f8"),Object(ot["a"])(bt,st,lt,!1,null,null,null));Ot.options.__file="Toolbar.vue";var yt=Ot.exports;function wt(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},n=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),n.forEach(function(e){Tt(t,e,i[e])})}return t}function Tt(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var Mt={name:"App",components:{Navbar:rt,Toolbar:yt},computed:wt({},Object(vt["b"])({darkMode:"darkMode"}),{res:function(){switch(this.$vuetify.breakpoint.name){case"xs":return"xsh1";case"sm":return"smh1";default:return"mdh1"}}}),data:function(){return{drawer:!1}},mounted:function(){this.blockstack.isUserSignedIn()?(this.getWatchlist(),this.getFavourites(),this.userData=this.blockstack.loadUserData(),this.$store.commit("MUTATION_SET_PROFILE_DATA",this.userData),this.$route.name||this.$router.push({name:"Home",params:{type:"in-theatre"}})):this.blockstack.isSignInPending()?this.blockstack.handlePendingSignIn().then(function(){window.location=window.location.origin}):this.$router.push({name:"Login"})},methods:{getWatchlist:function(){var t={fileName:"my_movie_watchlist.json",options:{decrypt:!0}};this.$store.dispatch("ACTION_GET_MOVIE_WATCHLIST",t)},getFavourites:function(){var t={fileName:"my_movie_favourites.json",options:{decrypt:!0}};this.$store.dispatch("ACTION_GET_MOVIE_FAVOURITES",t)}}},kt=Mt,It=(i("5c0b"),Object(ot["a"])(kt,X,Z,!1,null,null,null));It.options.__file="App.vue";var Et=It.exports,St=i("8c4f"),jt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h1",{staticClass:"headline ml-5 font-weight-regular"},[t._v(t._s(t.movies.title))]),t.movies.data.length>0?i("items-list",{attrs:{showPagination:!0,pageNumber:t.movies.page,totalPages:t.movies.max_pages,itemList:t.movies.data}}):t._e()],1)},At=[],Pt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("v-layout",{attrs:{row:"",wrap:""}},[t._l(t.itemList,function(e,n){return i("v-flex",{key:n,attrs:{xs12:"",sm6:""}},[i("v-card",{staticClass:"ml-3 mt-2 br20",attrs:{hover:!0}},[i("v-layout",{attrs:{row:""}},[i("v-flex",{attrs:{xs12:"",sm5:""}},[i("v-img",{attrs:{src:t.appendedUrl+e.poster_path,contain:""}})],1),i("v-flex",{attrs:{"ml-3":"","mt-2":"",xs12:"",sm7:""}},[i("v-layout",{attrs:{row:"","align-center":"","justify-center":"","mb-4":""}},[i("v-flex",{attrs:{xs12:"",sm3:""}},[i("v-progress-circular",{attrs:{rotate:-90,size:70,width:10,value:10*e.vote_average,color:t.color(e.vote_average)}},[t._v("\n                  "+t._s(10*e.vote_average)+"%\n                ")])],1),i("v-flex",{attrs:{"ml-2":"",sm9:"",xs12:""}},[i("div",{staticClass:"title font-weight-regular"},[t._v(t._s(e.original_title))]),i("div",{staticClass:"font-weight-light"},[t._v(t._s(new Date(e.release_date).toGMTString().split(" ").splice(0,4).join(" ")))])])],1),i("v-layout",[i("v-flex",[i("div",[i("span",[i("v-subheader",{staticClass:"pl-0"},[t._v("Overview:")])],1),t._v(t._s(t.text_truncate(e.overview))+"\n                ")])])],1),i("v-layout",{attrs:{"mt-5":"","mr-2":""}},[i("v-flex",[i("v-btn",{attrs:{color:t.darkMode?"":"primary",loading:t.isLoading[n],round:"",block:""},on:{click:function(i){t.getDetails(e,n)}}},[t._v("more info "),i("v-icon",[t._v("keyboard_arrow_right")])],1)],1)],1)],1)],1)],1)],1)}),i("v-flex",{attrs:{xs12:"",sm4:""}}),i("v-flex",{attrs:{xs12:"",sm4:""}},[t.showPagination?i("v-pagination",{attrs:{"total-visible":"6",length:"in-theatre"===t.$route.params.type?5:t.totalPages},on:{input:t.getMoreMovies},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}}):t._e()],1)],2)],1)},xt=[],Dt=i("a34a"),Ct=i.n(Dt);function Nt(t,e,i,n,o,a,r){try{var s=t[a](r),l=s.value}catch(c){return void i(c)}s.done?e(l):Promise.resolve(l).then(n,o)}function Vt(t){return function(){var e=this,i=arguments;return new Promise(function(n,o){var a=t.apply(e,i);function r(t){Nt(a,n,o,r,s,"next",t)}function s(t){Nt(a,n,o,r,s,"throw",t)}r(void 0)})}}function Lt(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},n=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),n.forEach(function(e){Ft(t,e,i[e])})}return t}function Ft(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var $t={name:"ItemsList",props:["itemList","showPagination","pageNumber","totalPages"],computed:Lt({},Object(vt["b"])({darkMode:"darkMode"})),data:function(){return{appendedUrl:"https://image.tmdb.org/t/p/w342",isLoading:{},page:1}},watch:{pageNumber:function(){this.page=this.pageNumber}},methods:{color:function(t){var e=10*t;return e>=70?"success":e>30&&e<70?"lime accent-2":"red"},createobj:function(t){for(var e=0;e<t;e++)this.$set(this.isLoading,e,!1)},text_truncate:function(t,e,i){return null==e&&(e=160),null==i&&(i="..."),t.length>e?t.substring(0,e-i.length)+i:t},getDetails:function(){var t=Vt(Ct.a.mark(function t(e,i){return Ct.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.isLoading[i]=!0,t.next=3,this.$store.dispatch("ACTION_GET_MOVIE_DETAILS",e);case 3:this.isLoading[i]=!1,this.$router.push({name:"MovieDetails",params:{id:e.id}});case 5:case"end":return t.stop()}},t,this)}));function e(e,i){return t.apply(this,arguments)}return e}(),getMoreMovies:function(){"top-rated"===this.$route.params.type?this.$store.dispatch("ACTION_GET_TOP_RATED_MOVIES",{page:this.page}):"popular"===this.$route.params.type?this.$store.dispatch("ACTION_GET_POPULAR_MOVIES",{page:this.page}):this.$store.dispatch("ACTION_GET_IN_THEATRE_MOVIES",{page:this.page})}},mounted:function(){this.page=this.pageNumber,this.createobj(this.itemList.length)}},Ut=$t,Wt=(i("077c"),Object(ot["a"])(Ut,Pt,xt,!1,null,null,null));Wt.options.__file="ItemsList.vue";var Rt=Wt.exports;function Ht(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},n=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),n.forEach(function(e){Gt(t,e,i[e])})}return t}function Gt(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var zt={name:"Home",components:{ItemsList:Rt},computed:Ht({},Object(vt["b"])({movies:"getMovieList"})),data:function(){return{title:"In Theatres",page:1}},mounted:function(){this.$route.params&&"popular"===this.$route.params.type?this.$store.dispatch("ACTION_GET_POPULAR_MOVIES",{page:1}):this.$route.params&&"top-rated"===this.$route.params.type?this.$store.dispatch("ACTION_GET_TOP_RATED_MOVIES",{page:1}):(this.$store.dispatch("ACTION_GET_IN_THEATRE_MOVIES",{page:1}),this.$router.push({name:"Home",params:{type:"in-theatre"}}))}},Bt=zt,Jt=(i("dbc2"),Object(ot["a"])(Bt,jt,At,!1,null,null,null));Jt.options.__file="Home.vue";var Kt=Jt.exports,qt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.movieDetails&&Object.keys(t.movieDetails).length>0?i("v-container",{staticClass:"white--text"},[i("v-layout",{staticClass:"mb-5",attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs3:""}},[i("v-img",{attrs:{src:t.appendUrl+t.movieDetails.poster_path}})],1),i("v-flex",{staticClass:"ml-5",attrs:{xs7:""}},[i("h1",{staticClass:"mt-3 mb-3 display-2"},[t._v(t._s(t.movieDetails.original_title)+" "),i("span",{staticClass:"headline"},[t._v("("+t._s(new Date(t.movieDetails.release_date).getFullYear())+")")])]),i("v-progress-circular",{attrs:{rotate:-90,size:70,width:10,value:10*t.movieDetails.vote_average,color:t.color(t.movieDetails.vote_average)}},[t._v("\n        "+t._s(10*t.movieDetails.vote_average)+"%\n      ")]),i("span",{staticClass:"body-2 ml-2"},[t._v("User Score")]),i("v-tooltip",{attrs:{bottom:""}},[i("v-btn",{staticClass:"ml-5",attrs:{slot:"activator",dark:"",outline:"",fab:""},slot:"activator"},[i("v-icon",[t._v("list")])],1),i("span",[t._v("Add to playlist or Create one (Coming Soon...)")])],1),t.watchlistMovieObj[t.movieDetails.id]?i("v-tooltip",{attrs:{bottom:""}},[i("v-btn",{attrs:{slot:"activator",dark:"",outline:"",fab:""},on:{click:t.removeFromWatchlist},slot:"activator"},[i("v-icon",[t._v("bookmark")])],1),i("span",[t._v("Remove from Watchlist")])],1):i("v-tooltip",{attrs:{bottom:""}},[i("v-btn",{attrs:{slot:"activator",dark:"",outline:"",fab:""},on:{click:t.addToWatchlist},slot:"activator"},[i("v-icon",[t._v("bookmark_border")])],1),i("span",[t._v("Add to Watchlist")])],1),t.favMovieObj[t.movieDetails.id]?i("v-tooltip",{attrs:{bottom:""}},[i("v-btn",{attrs:{slot:"activator",outline:"",fab:"",dark:""},on:{click:t.removeFromFavourites},slot:"activator"},[i("v-icon",[t._v("favorite")])],1),i("span",[t._v("Remove from Favourites")])],1):i("v-tooltip",{attrs:{bottom:""}},[i("v-btn",{attrs:{slot:"activator",outline:"",fab:"",dark:""},on:{click:t.addToFavourites},slot:"activator"},[i("v-icon",[t._v("favorite_border")])],1),i("span",[t._v("Add to Favourites")])],1),i("v-tooltip",{attrs:{right:""}},[i("v-btn",{attrs:{slot:"activator",outline:"",fab:"",dark:""},slot:"activator"},[i("v-icon",[t._v("play_arrow")])],1),i("span",[t._v("Play Trailer (Coming Soon...)")])],1),i("v-subheader",{staticClass:"pl-0 white--text"},[t._v("Overview:")]),i("p",[t._v(t._s(t.movieDetails.overview))]),i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs12:""}},[i("h1",{staticClass:"headline"},[t._v("Featured Crew")])]),t._l(t.movieDetails.credits.crew.slice(0,6),function(e,n){return i("v-flex",{key:n,staticClass:"mt-2",attrs:{xs4:""}},[i("h2",{staticClass:"subheading"},[t._v(t._s(e.name))]),i("h3",{staticClass:"caption"},[t._v(t._s(e.department))])])})],2)],1)],1),i("v-divider"),t.movieDetails.similar.results.length>0?i("v-layout",{staticClass:"mt-5",attrs:{"justify-center":"","align-center":"",row:"",wrap:""}},[i("h1",{staticClass:"mt-3"},[t._v("Similar Movies")]),i("v-flex",{attrs:{s12:""}},[i("items-list",{attrs:{showPagination:!1,itemList:t.movieDetails.similar.results.slice(0,6)}})],1)],1):t._e(),i("player",{attrs:{playTrailer:t.playTrailer,trailerId:t.Id}})],1):t._e()},Yt=[],Qt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-dialog",{model:{value:t.player,callback:function(e){t.player=e},expression:"player"}},[i("v-card",[t._v("\n      YOOOOOOOOOOOOOOOO\n    ")])],1)],1)},Xt=[],Zt={name:"Player",props:["playTrailer"],data:function(){return{player:!1}},watch:{playTrailer:function(){this.player=this.playTrailer}},methods:{close:function(){this.player=!1}}},te=Zt,ee=(i("6131"),Object(ot["a"])(te,Qt,Xt,!1,null,null,null));ee.options.__file="Player.vue";var ie=ee.exports;function ne(t){return re(t)||ae(t)||oe()}function oe(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function ae(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function re(t){if(Array.isArray(t)){for(var e=0,i=new Array(t.length);e<t.length;e++)i[e]=t[e];return i}}function se(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},n=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),n.forEach(function(e){le(t,e,i[e])})}return t}function le(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var ce={name:"MovieDetails",components:{ItemsList:Rt,Player:ie},computed:se({},Object(vt["b"])({movieDetails:"getMovieDetails",movieWatchlist:"getMovieWatchlist",movieFavourites:"getMovieFavourites",watchlistMovieObj:"getWatchlistMovieObj",favMovieObj:"getFavMovieObj"})),data:function(){return{appendUrl:"https://image.tmdb.org/t/p/w342/",appendProfileUrl:"https://image.tmdb.org/t/p/w185/",playTrailer:!1,Id:""}},watch:{deep:!0,movieDetails:function(){window.scroll(0,0);var t="https://image.tmdb.org/t/p/w1280/".concat(this.movieDetails.backdrop_path),e=document.getElementsByClassName("v-content__wrap")[0];e.style["background-image"]="url(".concat(t,")")}},methods:{play:function(){this.playTrailer=!0},addToWatchlist:function(){var t=[this.movieDetails].concat(ne(this.movieWatchlist)),e={fileName:"my_movie_watchlist.json",data:t,options:{encrypt:!0}};this.$store.dispatch("ACTION_SET_MOVIE_WATCHLIST",e)},removeFromWatchlist:function(){var t=this,e=this.movieWatchlist.filter(function(e){return e.id!==t.movieDetails.id}),i={fileName:"my_movie_watchlist.json",data:e,options:{encrypt:!0}};this.$store.dispatch("ACTION_SET_MOVIE_WATCHLIST",i)},addToFavourites:function(){var t=[this.movieDetails].concat(ne(this.movieFavourites)),e={fileName:"my_movie_favourites.json",data:t,options:{encrypt:!0}};this.$store.dispatch("ACTION_SET_MOVIE_FAVOURITES",e)},removeFromFavourites:function(){var t=this,e=this.movieFavourites.filter(function(e){return e.id!==t.movieDetails.id}),i={fileName:"my_movie_favourites.json",data:ne(e),options:{encrypt:!0}};this.$store.dispatch("ACTION_SET_MOVIE_FAVOURITES",i)},color:function(t){var e=10*t;return e>=70?"success":e>30&&e<70?"lime accent-2":"red"}},mounted:function(){window.scroll(0,0);var t="https://image.tmdb.org/t/p/w1280/".concat(this.movieDetails.backdrop_path),e=document.getElementsByClassName("v-content__wrap")[0];e.style["background-image"]="url(".concat(t,")"),e.style["background-size"]="100% 100vh",e.style["box-shadow"]="inset 0 100vh 0 0 rgba(65, 63, 64, 0.9)"},destroyed:function(){var t=document.getElementsByClassName("v-content__wrap")[0];t.style["background-image"]="url('')",t.style["background-size"]="initial",t.style["background-position"]="",t.style["box-shadow"]="initial"},created:function(){this.movieDetails&&Object.keys(this.movieDetails).length>0||(this.$route.params.id?this.$store.dispatch("ACTION_GET_MOVIE_DETAILS",{id:this.$route.params.id}):this.$router.push({name:"Home"}))}},ue=ce,ve=(i("6174"),Object(ot["a"])(ue,qt,Yt,!1,null,null,null));ve.options.__file="MovieDetails.vue";var fe=ve.exports,pe=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:"","fill-height":""}},[n("v-layout",{attrs:{row:"",wrap:"","justify-center":"","align-center":""}},[n("v-flex",{attrs:{"text-xs-center":""}},[n("img",{attrs:{src:i("a7f5")}}),n("div",{staticClass:"custom"},[n("h1",[t._v("CINEFLICK")])]),n("p",[t._v("A decentralized solution for your daily movie needs.")]),n("v-btn",{attrs:{round:""},on:{click:t.signIn}},[t._v("Sign in with blockstack "),n("v-icon",{attrs:{right:""}},[t._v("arrow_forward")])],1)],1)],1)],1)},me=[],de={name:"Login",data:function(){return{}},computed:{res:function(){switch(this.$vuetify.breakpoint.name){case"xs":return"xs";case"sm":return"sm";default:return"md"}}},methods:{signIn:function(){var t=window.location.origin;this.blockstack.redirectToSignIn(t,"".concat(t,"/manifest.json"),["store_write","publish_data"])}}},he=de,_e=(i("5338"),Object(ot["a"])(he,pe,me,!1,null,null,null));_e.options.__file="Login.vue";var ge=_e.exports,be=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.favouriteMovies&&t.favouriteMovies.length>0?i("h1",{staticClass:"headline ml-5 font-weight-regular"},[t._v("Favourite Movies")]):i("h2",{staticClass:"title ml-5 font-weight-light"},[t._v("Oops, Looks like you have not added any favourite movies yet.")]),t.favouriteMovies&&t.favouriteMovies.length>0?i("items-list",{attrs:{showPagination:!1,itemList:t.favouriteMovies}}):t._e()],1)},Oe=[];function ye(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},n=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),n.forEach(function(e){we(t,e,i[e])})}return t}function we(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var Te={name:"MoviesFavourites",components:{ItemsList:Rt},computed:ye({},Object(vt["b"])({favouriteMovies:"getMovieFavourites"}))},Me=Te,ke=Object(ot["a"])(Me,be,Oe,!1,null,null,null);ke.options.__file="MoviesFavourites.vue";var Ie=ke.exports,Ee=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.movieWatchlist&&t.movieWatchlist.length>0?i("h1",{staticClass:"headline ml-5 font-weight-regular"},[t._v("Watchlist")]):i("h2",{staticClass:"title ml-5 font-weight-light"},[t._v("Oops, Looks like you have not added any movies to your Watchlist yet.")]),t.movieWatchlist&&t.movieWatchlist.length>0?i("items-list",{attrs:{showPagination:!1,itemList:t.movieWatchlist}}):t._e()],1)},Se=[];function je(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},n=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),n.forEach(function(e){Ae(t,e,i[e])})}return t}function Ae(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var Pe={name:"MoviesWatchlist",components:{ItemsList:Rt},computed:je({},Object(vt["b"])({movieWatchlist:"getMovieWatchlist"}))},xe=Pe,De=Object(ot["a"])(xe,Ee,Se,!1,null,null,null);De.options.__file="MoviesWatchlist.vue";var Ce=De.exports;n["default"].use(St["a"]);var Ne=new St["a"]({routes:[{path:"/login",name:"Login",component:ge},{path:"/movies/:type",name:"Home",component:Kt},{path:"/movie/:id",name:"MovieDetails",component:fe},{path:"/favourite-movies",name:"FavouriteMovies",component:Ie},{path:"/movie-watchlist",name:"MoviesWatchlist",component:Ce}]});Ne.beforeEach(function(t,e,i){"Login"===t.name&&window.blockstack.isUserSignedIn()?Ne.push({name:"Home",params:{type:"in-theatre"}}):"Home"!==t.name||window.blockstack.isUserSignedIn()?i():Ne.push({name:"Login"})});var Ve=Ne,Le={state:{profileData:{}},mutations:{MUTATION_SET_PROFILE_DATA:function(t,e){t.profileData=e}},actions:{},getters:{getProfileData:function(t){return t.profileData}}},Fe=Le,$e=i("bc3a"),Ue=i.n($e),We=Ue.a.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"13e556517a6530f85508fc4c4c6e1a7d"},headers:{"Content-Type":"application/json"}});We.interceptors.request.use(function(t){return t},function(t){return Promise.reject(t)}),We.interceptors.response.use(function(t){return Promise.resolve(t)},function(t){return Promise.reject(t)});var Re=We;function He(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},n=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),n.forEach(function(e){Ge(t,e,i[e])})}return t}function Ge(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var ze={getInTheatreMovies:function(t){return Re.get("movie/now_playing",{params:He({language:"en-US"},t)})},getPopularMovies:function(t){return Re.get("movie/popular",{params:He({language:"en-US"},t)})},getTopRatedMovies:function(t){return Re.get("movie/top_rated",{params:He({language:"en-US"},t)})},getMovieDetails:function(t){return Re.get("movie/".concat(t.id),{params:{language:"en-US",append_to_response:"credits,videos,similar"}})}},Be=ze;function Je(t,e,i,n,o,a,r){try{var s=t[a](r),l=s.value}catch(c){return void i(c)}s.done?e(l):Promise.resolve(l).then(n,o)}function Ke(t){return function(){var e=this,i=arguments;return new Promise(function(n,o){var a=t.apply(e,i);function r(t){Je(a,n,o,r,s,"next",t)}function s(t){Je(a,n,o,r,s,"throw",t)}r(void 0)})}}var qe={state:{movieList:{title:"",data:[]},movieDetails:{}},mutations:{MUTATION_SET_MOVIE_LIST:function(t,e){t.movieList.title=e.title,t.movieList.data=e.data.results,t.movieList.page=e.data.page,t.movieList.max_pages=e.data.total_pages},MUTATION_SET_POPULAR_MOVIES:function(t,e){t.movieList=e.filter(function(t){return"en"===t.original_language})},MUTATION_SET_CONTENT_DETAILS:function(t,e){t.movieDetails=e}},actions:{ACTION_GET_IN_THEATRE_MOVIES:function(){var t=Ke(Ct.a.mark(function t(e,i){var n,o;return Ct.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,Be.getInTheatreMovies(i);case 3:o=t.sent,o.data.results.sort(function(t,e){return new Date(e.release_date)-new Date(t.release_date)}),n("MUTATION_SET_MOVIE_LIST",{title:"In Theatres",data:o.data});case 6:case"end":return t.stop()}},t,this)}));function e(e,i){return t.apply(this,arguments)}return e}(),ACTION_GET_POPULAR_MOVIES:function(){var t=Ke(Ct.a.mark(function t(e,i){var n,o;return Ct.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,Be.getPopularMovies(i);case 3:o=t.sent,n("MUTATION_SET_MOVIE_LIST",{title:"Popular Movies",data:o.data});case 5:case"end":return t.stop()}},t,this)}));function e(e,i){return t.apply(this,arguments)}return e}(),ACTION_GET_TOP_RATED_MOVIES:function(){var t=Ke(Ct.a.mark(function t(e,i){var n,o;return Ct.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,Be.getTopRatedMovies(i);case 3:o=t.sent,n("MUTATION_SET_MOVIE_LIST",{title:"Top Rated",data:o.data});case 5:case"end":return t.stop()}},t,this)}));function e(e,i){return t.apply(this,arguments)}return e}(),ACTION_GET_MOVIE_DETAILS:function(){var t=Ke(Ct.a.mark(function t(e,i){var n,o;return Ct.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,Be.getMovieDetails(i);case 3:return o=t.sent,n("MUTATION_SET_CONTENT_DETAILS",o.data),t.abrupt("return",o);case 6:case"end":return t.stop()}},t,this)}));function e(e,i){return t.apply(this,arguments)}return e}()},getters:{getMovieList:function(t){return t.movieList},getMovieDetails:function(t){return t.movieDetails}}},Ye=qe,Qe={putFile:function(t){var e=t.fileName,i=t.data,n=t.options;window.blockstack.putFile(e,JSON.stringify(i),n)},getFile:function(t){var e=t.fileName,i=t.options;return window.blockstack.getFile(e,i).then(function(t){return JSON.parse(t)})}},Xe=Qe;function Ze(t,e,i,n,o,a,r){try{var s=t[a](r),l=s.value}catch(c){return void i(c)}s.done?e(l):Promise.resolve(l).then(n,o)}function ti(t){return function(){var e=this,i=arguments;return new Promise(function(n,o){var a=t.apply(e,i);function r(t){Ze(a,n,o,r,s,"next",t)}function s(t){Ze(a,n,o,r,s,"throw",t)}r(void 0)})}}var ei={state:{movieWatchlist:[],movieFavourites:[],favMovieObj:{},watchlistMovieObj:{}},mutations:{MUTATION_SET_MOVIE_WATCHLIST:function(t,e){t.movieWatchlist=e||[],e&&e.length>0?t.watchlistMovieObj=e.reduce(function(t,e){return t[e.id]=e.id,t},{}):t.watchlistMovieObj={}},MUTATION_SET_MOVIE_FAVOURITES:function(t,e){t.movieFavourites=e||[],e&&e.length>0?t.favMovieObj=e.reduce(function(t,e){return t[e.id]=e.id,t},{}):t.favMovieObj={}}},actions:{ACTION_SET_MOVIE_WATCHLIST:function(t,e){var i=t.commit;Xe.putFile(e),i("MUTATION_SET_MOVIE_WATCHLIST",e.data)},ACTION_SET_MOVIE_FAVOURITES:function(t,e){var i=t.commit;Xe.putFile(e),i("MUTATION_SET_MOVIE_FAVOURITES",e.data)},ACTION_GET_MOVIE_WATCHLIST:function(){var t=ti(Ct.a.mark(function t(e,i){var n,o;return Ct.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,Xe.getFile(i);case 3:o=t.sent,n("MUTATION_SET_MOVIE_WATCHLIST",o);case 5:case"end":return t.stop()}},t,this)}));function e(e,i){return t.apply(this,arguments)}return e}(),ACTION_GET_MOVIE_FAVOURITES:function(){var t=ti(Ct.a.mark(function t(e,i){var n,o;return Ct.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,Xe.getFile(i);case 3:o=t.sent,n("MUTATION_SET_MOVIE_FAVOURITES",o);case 5:case"end":return t.stop()}},t,this)}));function e(e,i){return t.apply(this,arguments)}return e}()},getters:{getMovieWatchlist:function(t){return t.movieWatchlist},getMovieFavourites:function(t){return t.movieFavourites},getWatchlistMovieObj:function(t){return t.watchlistMovieObj},getFavMovieObj:function(t){return t.favMovieObj}}},ii=ei;n["default"].use(vt["a"]);var ni=new vt["a"].Store({modules:{profileHandler:Fe,movieHandler:Ye,storageHandler:ii},state:{darkMode:!0},mutations:{MUTATION_SET_DARK_MODE:function(t,e){t.darkMode=e}},getters:{darkMode:function(t){return t.darkMode}}}),oi=i("9483");Object(oi["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});i("d5e8"),i("d1e7");i.d(e,"eventBus",function(){return ai}),n["default"].config.productionTip=!1,n["default"].prototype.dummyFunction=function(){},n["default"].prototype.blockstack=i("e4d3"),window.blockstack=i("e4d3");var ai=new n["default"];new n["default"]({router:Ve,store:ni,render:function(t){return t(Et)}}).$mount("#app")},"5a96":function(t,e,i){},"5c0b":function(t,e,i){"use strict";var n=i("5e27"),o=i.n(n);o.a},"5dfc":function(t,e,i){"use strict";var n=i("30d6"),o=i.n(n);o.a},"5e27":function(t,e,i){},"60f8":function(t,e,i){"use strict";var n=i("632e"),o=i.n(n);o.a},6131:function(t,e,i){"use strict";var n=i("bf75"),o=i.n(n);o.a},6174:function(t,e,i){"use strict";var n=i("3565"),o=i.n(n);o.a},"632e":function(t,e,i){},"83e8":function(t,e,i){"use strict";var n=i("5a96"),o=i.n(n);o.a},a7f5:function(t,e,i){t.exports=i.p+"img/heroes.76c7dd16.gif"},bf75:function(t,e,i){},dbc2:function(t,e,i){"use strict";var n=i("ea59"),o=i.n(n);o.a},e7d2:function(t,e,i){},ea59:function(t,e,i){},f9cc:function(t,e,i){}});
//# sourceMappingURL=app.87af3198.js.map