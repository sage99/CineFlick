(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["movie_favourites"],{1992:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{attrs:{row:"",wrap:""}},t._l(t.itemList,function(e,i){return a("v-flex",{key:i,attrs:{"d-flex":"",xs12:"",sm6:"",xl4:""}},[a("v-card",{staticClass:"ml-3 mr-3 mt-2 br20",attrs:{hover:!0},on:{click:function(a){"TV"===t.type?t.getTVShowDetails(e,i):t.getMovieDetails(e,i)}}},[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:"",sm5:""}},[a("v-img",{attrs:{src:t.appendedUrl+e.poster_path,contain:""}})],1),a("v-flex",{staticClass:"flex-card-content",attrs:{"ml-3":"","mt-2":"",xs12:"",sm7:""}},[a("v-layout",{attrs:{row:"","align-center":"","justify-center":"","mb-4":""}},[t.mode?t._e():a("v-flex",{attrs:{xs12:"",sm3:""}},[a("v-progress-circular",{attrs:{rotate:-90,size:70,width:10,value:10*e.vote_average,color:t.color(e.vote_average)}},[t._v("\n                  "+t._s(e.vote_average?10*e.vote_average+"%":"NR")+"\n                ")])],1),a("v-flex",{class:t.mode?"":"ml-2",attrs:{sm9:"",xs12:""}},[a("div",{staticClass:"title font-weight-regular"},[t._v(t._s("TV"===t.type?e.name:e.title))]),"TV"===t.type&&"season"===t.mode?a("div",{staticClass:"font-weight-light"},[t._v("("+t._s(e.air_date.split("-")[0])+")")]):"TV"===t.type?a("div",{staticClass:"font-weight-light"},[t._v("("+t._s(e.first_air_date.split("-")[0])+")")]):a("div",{staticClass:"font-weight-light"},[t._v(t._s(new Date(e.release_date).toGMTString().split(" ").splice(0,4).join(" ")))])])],1),a("v-layout",[a("v-flex",{staticClass:"mr-1"},[a("div",[a("span",[a("v-subheader",{staticClass:"pl-0"},[t._v("Overview:")])],1),t._v(t._s(t.text_truncate(e.overview))+"\n                ")])])],1),a("v-layout",{staticClass:"flex-button-align-end",attrs:{"mr-2":""}},[a("v-flex",[a("v-btn",{attrs:{color:t.darkMode?"":"primary",loading:t.isLoading[i],round:"",block:""},on:{click:function(a){"TV"===t.type?t.getTVShowDetails(e,i):t.getMovieDetails(e,i)}}},[t._v("more info "),a("v-icon",[t._v("keyboard_arrow_right")])],1)],1)],1)],1)],1)],1)],1)}),1),a("v-layout",{attrs:{"mt-2":""}},[a("v-flex",{staticClass:"pagination-center"},[t.showPagination?a("v-pagination",{attrs:{"total-visible":"6",length:"in-theatre"===t.$route.params.type?5:t.totalPages},on:{input:function(e){"TV"===t.type?t.getMoreTVShows():t.getMoreMovies()}},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}}):t._e()],1)],1)],1)},s=[],r=a("a34a"),o=a.n(r),n=a("2f62");function l(t,e,a,i,s,r,o){try{var n=t[r](o),l=n.value}catch(c){return void a(c)}n.done?e(l):Promise.resolve(l).then(i,s)}function c(t){return function(){var e=this,a=arguments;return new Promise(function(i,s){var r=t.apply(e,a);function o(t){l(r,i,s,o,n,"next",t)}function n(t){l(r,i,s,o,n,"throw",t)}o(void 0)})}}function u(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},i=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(a).filter(function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),i.forEach(function(e){p(t,e,a[e])})}return t}function p(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var v={name:"ItemsList",props:["itemList","showPagination","pageNumber","totalPages","type","mode"],computed:u({},Object(n["b"])({darkMode:"darkMode"})),data:function(){return{appendedUrl:"https://image.tmdb.org/t/p/w342",isLoading:{},page:1}},watch:{pageNumber:function(){this.page=this.pageNumber}},methods:{color:function(t){if(0===t)return"info";var e=10*t;return e>=70?"success":e>30&&e<70?"lime accent-2":"red"},createobj:function(t){for(var e=0;e<t;e++)this.$set(this.isLoading,e,!1)},text_truncate:function(t,e,a){return null==e&&(e=160),null==a&&(a="..."),t.length>e?t.substring(0,e-a.length)+a:t},getMovieDetails:function(){var t=c(o.a.mark(function t(e,a){return o.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.isLoading[a]=!0,t.next=3,this.$store.dispatch("ACTION_GET_MOVIE_DETAILS",e);case 3:this.isLoading[a]=!1,this.$router.push({name:"MovieDetails",params:{id:e.id}});case 5:case"end":return t.stop()}},t,this)}));function e(e,a){return t.apply(this,arguments)}return e}(),getTVShowDetails:function(){var t=c(o.a.mark(function t(e,a){return o.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.isLoading[a]=!0,t.next=3,this.$store.dispatch("ACTION_GET_TV_SHOW_DETAILS",e);case 3:this.isLoading[a]=!1,this.$router.push({name:"TVShowDetails",params:{id:e.id}});case 5:case"end":return t.stop()}},t,this)}));function e(e,a){return t.apply(this,arguments)}return e}(),getMoreMovies:function(){"top-rated"===this.$route.params.type?this.$store.dispatch("ACTION_GET_TOP_RATED_MOVIES",{page:this.page}):"popular"===this.$route.params.type?this.$store.dispatch("ACTION_GET_POPULAR_MOVIES",{page:this.page}):this.$store.dispatch("ACTION_GET_IN_THEATRE_MOVIES",{page:this.page})},getMoreTVShows:function(){"top-rated"===this.$route.params.type?this.$store.dispatch("ACTION_GET_TOP_RATED_TVSHOWS",{page:this.page}):"popular"===this.$route.params.type?this.$store.dispatch("ACTION_GET_POPULAR_TVSHOWS",{page:this.page}):this.$route.params&&"on-the-air"===this.$route.params.type?this.$store.dispatch("ACTION_GET_ON_AIR_TVSHOWS",{page:this.page}):this.$store.dispatch("ACTION_GET_AIRING_TODAY_TVSHOWS",{page:this.page})}},mounted:function(){this.page=this.pageNumber,this.createobj(this.itemList.length)}},h=v,f=(a("2a56"),a("2877")),g=Object(f["a"])(h,i,s,!1,null,null,null);g.options.__file="Brief-view.vue";e["a"]=g.exports},"2a56":function(t,e,a){"use strict";var i=a("5b4b"),s=a.n(i);s.a},"2da2":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{staticClass:"position-center",attrs:{row:"",wrap:""}},[t.favouriteMovies&&t.favouriteMovies.length>0?a("v-flex",[a("h1",{staticClass:"headline ml-5 font-weight-regular"},[t._v("Favourite Movies")]),t.favouriteMovies&&t.favouriteMovies.length>0?a("items-list",{attrs:{showPagination:!1,itemList:t.favouriteMovies}}):t._e()],1):a("v-flex",{staticClass:"position-center"},[a("h2",{staticClass:"title ml-5 font-weight-light"},[t._v("Oops, Looks like you have not added any favourite movies yet.")])])],1)},s=[],r=a("1992"),o=a("2f62");function n(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},i=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(a).filter(function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),i.forEach(function(e){l(t,e,a[e])})}return t}function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var c={name:"MoviesFavourites",components:{ItemsList:r["a"]},computed:n({},Object(o["b"])({favouriteMovies:"getMovieFavourites"}))},u=c,p=a("2877"),v=Object(p["a"])(u,i,s,!1,null,null,null);v.options.__file="MoviesFavourites.vue";e["default"]=v.exports},"5b4b":function(t,e,a){}}]);
//# sourceMappingURL=movie_favourites.5a278374.js.map