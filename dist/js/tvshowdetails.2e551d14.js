(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["tvshowdetails"],{1992:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{attrs:{row:"",wrap:""}},t._l(t.itemList,function(e,s){return a("v-flex",{key:s,attrs:{"d-flex":"",xs12:"",sm6:"",xl4:""}},[a("v-card",{staticClass:"ml-3 mr-3 mt-2 br20",attrs:{hover:!0},on:{click:function(a){"TV"===t.type?t.getTVShowDetails(e,s):t.getMovieDetails(e,s)}}},[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:"",sm5:""}},[a("v-img",{attrs:{src:t.appendedUrl+e.poster_path,contain:""}})],1),a("v-flex",{staticClass:"flex-card-content",attrs:{"ml-3":"","mt-2":"",xs12:"",sm7:""}},[a("v-layout",{attrs:{row:"","align-center":"","justify-center":"","mb-4":""}},[t.mode?t._e():a("v-flex",{attrs:{xs12:"",sm3:""}},[a("v-progress-circular",{attrs:{rotate:-90,size:70,width:10,value:10*e.vote_average,color:t.color(e.vote_average)}},[t._v("\n                  "+t._s(e.vote_average?10*e.vote_average+"%":"NR")+"\n                ")])],1),a("v-flex",{class:t.mode?"":"ml-2",attrs:{sm9:"",xs12:""}},[a("div",{staticClass:"title font-weight-regular"},[t._v(t._s("TV"===t.type?e.name:e.title))]),"TV"===t.type&&"season"===t.mode?a("div",{staticClass:"font-weight-light"},[t._v("("+t._s(e.air_date.split("-")[0])+")")]):"TV"===t.type?a("div",{staticClass:"font-weight-light"},[t._v("("+t._s(e.first_air_date.split("-")[0])+")")]):a("div",{staticClass:"font-weight-light"},[t._v(t._s(new Date(e.release_date).toGMTString().split(" ").splice(0,4).join(" ")))])])],1),a("v-layout",[a("v-flex",{staticClass:"mr-1"},[a("div",[a("span",[a("v-subheader",{staticClass:"pl-0"},[t._v("Overview:")])],1),t._v(t._s(t.text_truncate(e.overview))+"\n                ")])])],1),a("v-layout",{staticClass:"flex-button-align-end",attrs:{"mr-2":""}},[a("v-flex",[a("v-btn",{attrs:{color:t.darkMode?"":"primary",loading:t.isLoading[s],round:"",block:""},on:{click:function(a){"TV"===t.type?t.getTVShowDetails(e,s):t.getMovieDetails(e,s)}}},[t._v("more info "),a("v-icon",[t._v("keyboard_arrow_right")])],1)],1)],1)],1)],1)],1)],1)}),1),a("v-layout",{attrs:{"mt-2":""}},[a("v-flex",{staticClass:"pagination-center"},[t.showPagination?a("v-pagination",{attrs:{"total-visible":"6",length:"in-theatre"===t.$route.params.type?5:t.totalPages},on:{input:function(e){"TV"===t.type?t.getMoreTVShows():t.getMoreMovies()}},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}}):t._e()],1)],1)],1)},i=[],r=a("a34a"),o=a.n(r),n=a("2f62");function l(t,e,a,s,i,r,o){try{var n=t[r](o),l=n.value}catch(c){return void a(c)}n.done?e(l):Promise.resolve(l).then(s,i)}function c(t){return function(){var e=this,a=arguments;return new Promise(function(s,i){var r=t.apply(e,a);function o(t){l(r,s,i,o,n,"next",t)}function n(t){l(r,s,i,o,n,"throw",t)}o(void 0)})}}function v(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},s=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(a).filter(function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),s.forEach(function(e){u(t,e,a[e])})}return t}function u(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var h={name:"ItemsList",props:["itemList","showPagination","pageNumber","totalPages","type","mode"],computed:v({},Object(n["b"])({darkMode:"darkMode"})),data:function(){return{appendedUrl:"https://image.tmdb.org/t/p/w342",isLoading:{},page:1}},watch:{pageNumber:function(){this.page=this.pageNumber}},methods:{color:function(t){if(0===t)return"info";var e=10*t;return e>=70?"success":e>30&&e<70?"lime accent-2":"red"},createobj:function(t){for(var e=0;e<t;e++)this.$set(this.isLoading,e,!1)},text_truncate:function(t,e,a){return null==e&&(e=160),null==a&&(a="..."),t.length>e?t.substring(0,e-a.length)+a:t},getMovieDetails:function(){var t=c(o.a.mark(function t(e,a){return o.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.isLoading[a]=!0,t.next=3,this.$store.dispatch("ACTION_GET_MOVIE_DETAILS",e);case 3:this.isLoading[a]=!1,this.$router.push({name:"MovieDetails",params:{id:e.id}});case 5:case"end":return t.stop()}},t,this)}));function e(e,a){return t.apply(this,arguments)}return e}(),getTVShowDetails:function(){var t=c(o.a.mark(function t(e,a){return o.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.isLoading[a]=!0,t.next=3,this.$store.dispatch("ACTION_GET_TV_SHOW_DETAILS",e);case 3:this.isLoading[a]=!1,this.$router.push({name:"TVShowDetails",params:{id:e.id}});case 5:case"end":return t.stop()}},t,this)}));function e(e,a){return t.apply(this,arguments)}return e}(),getMoreMovies:function(){"top-rated"===this.$route.params.type?this.$store.dispatch("ACTION_GET_TOP_RATED_MOVIES",{page:this.page}):"popular"===this.$route.params.type?this.$store.dispatch("ACTION_GET_POPULAR_MOVIES",{page:this.page}):this.$store.dispatch("ACTION_GET_IN_THEATRE_MOVIES",{page:this.page})},getMoreTVShows:function(){"top-rated"===this.$route.params.type?this.$store.dispatch("ACTION_GET_TOP_RATED_TVSHOWS",{page:this.page}):"popular"===this.$route.params.type?this.$store.dispatch("ACTION_GET_POPULAR_TVSHOWS",{page:this.page}):this.$route.params&&"on-the-air"===this.$route.params.type?this.$store.dispatch("ACTION_GET_ON_AIR_TVSHOWS",{page:this.page}):this.$store.dispatch("ACTION_GET_AIRING_TODAY_TVSHOWS",{page:this.page})}},mounted:function(){this.page=this.pageNumber,this.createobj(this.itemList.length)}},p=h,d=(a("2a56"),a("2877")),_=Object(d["a"])(p,s,i,!1,null,null,null);_.options.__file="Brief-view.vue";e["a"]=_.exports},"2a56":function(t,e,a){"use strict";var s=a("5b4b"),i=a.n(s);i.a},"5b4b":function(t,e,a){},c121:function(t,e,a){},d4fc:function(t,e,a){},df7a:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.TVShowDetails&&Object.keys(t.TVShowDetails).length>0?a("v-container",{staticClass:"white--text"},[a("v-layout",{staticClass:"mb-5",attrs:{id:"tvDetails",row:"",wrap:""}},[a("v-flex",{attrs:{xs3:""}},[a("v-img",{attrs:{src:t.appendUrl+t.TVShowDetails.poster_path}})],1),a("v-flex",{staticClass:"ml-5",attrs:{xs7:""}},[a("h1",{staticClass:"mt-3 mb-3 display-2"},[t._v(t._s(t.TVShowDetails.name)+" "),a("span",{staticClass:"headline"},[t._v("("+t._s(new Date(t.TVShowDetails.first_air_date).getFullYear())+")")])]),a("v-menu",{attrs:{light:"","open-on-hover":"",right:"","offset-x":""}},[a("v-progress-circular",{attrs:{slot:"activator",rotate:-90,size:70,width:10,value:10*t.TVShowDetails.vote_average,color:t.color(t.TVShowDetails.vote_average)},slot:"activator"},[t._v("\n          "+t._s(10*t.TVShowDetails.vote_average)+"%\n        ")]),a("v-card",[a("v-card-text",[a("p",[t._v("\n              Number of users who rated this show: "+t._s(t.TVShowDetails.vote_count)+"\n            ")]),a("p",[t._v("\n              Average rating: "+t._s(t.TVShowDetails.vote_average)+"\n            ")]),a("div",[t._v("\n              *Rating source is a community driven open source platform. "),a("br"),t._v("\n              *You will be able to rate movies and add reviews on CineFlick in the next update.")])])],1)],1),a("span",{staticClass:"body-2 ml-2"},[t._v("User Score")]),a("v-menu",{staticClass:"br20",attrs:{"offset-x":"",right:"",light:"","open-on-hover":""}},[a("v-btn",{staticClass:"ml-5",attrs:{slot:"activator",dark:"",outline:"",fab:""},slot:"activator"},[a("v-icon",[t._v("list")])],1),a("v-list",[a("v-list-tile",{on:{click:function(e){t.eventBus.$emit("addToPlaylist",{data:t.TVShowDetails,type:"tv"})}}},[a("v-list-tile-action",[a("v-icon",{attrs:{color:"primary"}},[t._v("add")])],1),a("v-list-tile-content",[a("v-list-tile-title",{attrs:{"text-color":"primary"}},[t._v("ADD TO PLAYLIST")]),a("v-list-tile-sub-title",[t._v("Add this tv show to an already created playlist.")])],1)],1)],1)],1),t.watchlistTVObj[t.TVShowDetails.id]?a("v-tooltip",{attrs:{bottom:""}},[a("v-btn",{attrs:{slot:"activator",dark:"",outline:"",fab:""},on:{click:t.removeFromWatchlist},slot:"activator"},[a("v-icon",[t._v("bookmark")])],1),a("span",[t._v("Remove from Watchlist")])],1):a("v-tooltip",{attrs:{bottom:""}},[a("v-btn",{attrs:{slot:"activator",dark:"",outline:"",fab:""},on:{click:t.addToWatchlist},slot:"activator"},[a("v-icon",[t._v("bookmark_border")])],1),a("span",[t._v("Add to Watchlist")])],1),t.favTVObj[t.TVShowDetails.id]?a("v-tooltip",{attrs:{bottom:""}},[a("v-btn",{attrs:{slot:"activator",outline:"",fab:"",dark:""},on:{click:t.removeFromFavourites},slot:"activator"},[a("v-icon",[t._v("favorite")])],1),a("span",[t._v("Remove from Favourites")])],1):a("v-tooltip",{attrs:{bottom:""}},[a("v-btn",{attrs:{slot:"activator",outline:"",fab:"",dark:""},on:{click:t.addToFavourites},slot:"activator"},[a("v-icon",[t._v("favorite_border")])],1),a("span",[t._v("Add to Favourites")])],1),t.TVShowDetails.videos.results.length>0?a("v-tooltip",{attrs:{right:""}},[a("v-btn",{attrs:{slot:"activator",outline:"",fab:"",dark:""},on:{click:function(e){t.eventBus.$emit("playTrailer",{videoid:t.TVShowDetails.videos.results[0].key,size:t.playerSize})}},slot:"activator"},[a("v-icon",[t._v("play_arrow")])],1),a("span",[t._v("Play Trailer")])],1):a("v-tooltip",{attrs:{right:""}},[a("v-btn",{attrs:{slot:"activator",outline:"",fab:"",dark:""},slot:"activator"},[a("v-icon",[t._v("play_arrow")])],1),a("span",[t._v("Trailer not available.")])],1),a("v-subheader",{staticClass:"pl-0 white--text"},[t._v("Overview:")]),a("p",[t._v(t._s(t.TVShowDetails.overview))]),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("h1",{staticClass:"headline"},[t._v("Stats")])]),a("v-flex",{staticClass:"mt-2",attrs:{xs4:""}},[a("h2",{staticClass:"subheading"},[t._v(t._s(t.TVShowDetails.number_of_episodes))]),a("h3",{staticClass:"caption"},[t._v("Episode Count")])]),a("v-flex",{staticClass:"mt-2",attrs:{xs4:""}},[a("h2",{staticClass:"subheading"},[t._v(t._s(t.TVShowDetails.number_of_seasons))]),a("h3",{staticClass:"caption"},[t._v("Total Seasons")])]),a("v-flex",{staticClass:"mt-2",attrs:{xs4:""}},[a("h2",{staticClass:"subheading"},[t._v(t._s(t.TVShowDetails.first_air_date))]),a("h3",{staticClass:"caption"},[t._v("First Air Date")])]),t.TVShowDetails.last_episode_to_air?a("v-flex",{staticClass:"mt-2",attrs:{xs4:""}},[a("h2",{staticClass:"subheading"},[t._v(t._s(t.TVShowDetails.last_episode_to_air.air_date))]),a("h3",{staticClass:"caption"},[t._v("Last Episode Air Date")])]):t._e(),t.TVShowDetails.next_episode_to_air?a("v-flex",{staticClass:"mt-2",attrs:{xs4:""}},[a("h2",{staticClass:"subheading"},[t._v(t._s(t.TVShowDetails.next_episode_to_air.air_date))]),a("h3",{staticClass:"caption"},[t._v("Next Episode Air Date")])]):t._e()],1)],1)],1),a("v-divider"),a("v-layout",{attrs:{"mt-5":"",row:"",wrap:""}},[a("v-flex",{attrs:{"mt-3":"",xs12:""}},[a("div",{staticClass:"title"},[t._v("Cast Overview:")])]),a("v-flex",{attrs:{xs7:""}},[a("v-layout",{attrs:{row:"",wrap:""}},[t._l(t.TVShowDetails.credits.cast.slice(0,8),function(e,s){return a("v-flex",{key:s+"b",attrs:{"d-flex":"",xs3:""}},[t.showCast?a("v-card",{staticClass:"mt-3 br20 ml-3"},[a("v-img",{attrs:{src:t.appendProfileUrl+e.profile_path}}),a("v-card-text",{staticClass:"text-xs-center",attrs:{"primary-title":""}},[a("div",[a("div",[t._v(t._s(e.name))]),a("div",[t._v("as")]),a("div",[t._v(t._s(e.character))])])])],1):t._e()],1)}),t.showCast?t._e():a("v-flex",{attrs:{"mt-5":""}},[a("h1",{staticClass:"headline font-weight-regular"},[t._v("Oops, No cast found for this show.")])]),a("v-flex",{attrs:{"mr-2":"",xs12:""}},[t.showCastButton?a("v-btn",{staticClass:"ml-3 mt-3",attrs:{color:t.darkMode?"":"primary",block:"",round:""},on:{click:t.redirectToCast}},[t._v("View Full Cast and Crew  "),a("v-icon",[t._v("keyboard_arrow_right")])],1):t._e()],1)],2)],1),a("v-flex",{attrs:{"mt-3":"","ml-3":"",xs4:""}},[a("v-card",{staticClass:"br20"},[a("v-card-title",{staticClass:"headline"},[t._v("Stats")]),a("v-list",{attrs:{"two-line":""}},[a("v-list-tile",[a("v-list-tile-content",[a("v-list-tile-title",[t._v("Homepage")]),a("v-list-tile-sub-title",[a("a",{attrs:{target:"_blank",href:t.TVShowDetails.homepage}},[t._v(t._s(t.TVShowDetails.homepage))])])],1)],1),a("v-list-tile",[a("v-list-tile-content",[a("v-list-tile-title",[t._v("Status")]),a("v-list-tile-sub-title",[t._v(t._s(t.TVShowDetails.in_production?"In Production":"Ended"))])],1)],1),a("v-list-tile",[a("v-list-tile-content",[a("v-list-tile-title",[t._v("First Air Date")]),a("v-list-tile-sub-title",[t._v(t._s(t.TVShowDetails.first_air_date))])],1)],1),a("v-list-tile",[a("v-list-tile-content",[a("v-list-tile-title",[t._v("Runtime")]),a("v-list-tile-sub-title",[t._v(t._s(t.toHoursMinutes(t.TVShowDetails.episode_run_time[0])))])],1)],1),a("v-list-tile",[a("v-list-tile-content",[a("v-list-tile-title",[t._v("Type")]),a("v-list-tile-sub-title",[t._v(t._s(t.TVShowDetails.type))])],1)],1)],1),a("v-card-text",[a("div",{staticClass:"title font-weight-regular"},[t._v("Networks:")]),a("div",[a("v-layout",{attrs:{row:"",wrap:""}},t._l(t.TVShowDetails.networks,function(e,s){return a("v-flex",{key:s+"f",attrs:{"ml-2":"","mt-1":"",xs4:"","d-flex":"","align-center":"","justify-center":""}},[a("v-img",{attrs:{contain:"",height:"50px",src:t.appendLogoUrl+e.logo_path}})],1)}),1)],1),a("div",{staticClass:"title font-weight-regular mt-2"},[t._v("Genre:")]),t._l(t.TVShowDetails.genres,function(e,s){return a("v-chip",{key:s+"c",staticClass:"mt-3 ",attrs:{color:"teal lighten-2"},on:{click:function(a){t.searchGenre(e)}}},[t._v("\n            "+t._s(e?e.name:null)+"\n          ")])}),a("div",{staticClass:"title font-weight-regular mt-3"},[t._v("Keywords:")]),t._l(t.TVShowDetails.keywords.results,function(e,s){return a("v-chip",{key:s+"d",staticClass:"mt-3 ",attrs:{color:"teal lighten-2"},on:{click:function(a){t.searchKeyword(e)}}},[t._v("\n            "+t._s(e?e.name:null)+"\n          ")])})],2)],1)],1)],1),t.TVShowDetails.seasons.length>0?a("v-layout",{staticClass:"mt-5",attrs:{"justify-center":"","align-center":"",row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("h1",{staticClass:"mt-3 font-weight-light"},[t._v("Seasons:")])]),a("v-flex",{attrs:{xs12:""}},[a("SeasonsList",{attrs:{seasons:t.TVShowDetails.seasons,appendUrl:t.appendProfileUrl}})],1)],1):t._e(),t.TVShowDetails.similar.results.length>0?a("v-layout",{staticClass:"mt-5",attrs:{id:"tvEnd","justify-center":"","align-center":"",row:"",wrap:""}},[a("h1",{staticClass:"mt-3 font-weight-light"},[t._v("Recommendations")]),a("v-flex",{attrs:{s12:""}},[a("items-list",{attrs:{showPagination:!1,type:"TV",itemList:t.TVShowDetails.similar.results.slice(0,6)}})],1)],1):t._e()],1):t._e()},i=[],r=a("a34a"),o=a.n(r),n=a("56d7"),l=a("2f62"),c=a("1992"),v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{row:"",wrap:""}},t._l(t.seasons,function(e,s){return a("v-flex",{key:s,attrs:{"d-flex":"",xs2:""}},[e.episode_count?a("v-card",{staticClass:"mt-3 br20 ml-3"},[a("v-img",{attrs:{src:t.appendUrl+e.poster_path}}),a("v-card-text",{staticClass:"text-xs-center",attrs:{"primary-title":""}},[a("div",[a("div",[t._v(t._s(e.name)+" "),e.air_date?a("span",[t._v("("+t._s(e.air_date.split("-")[0])+")")]):t._e()]),a("div",[t._v("Episode Count: "+t._s(e.episode_count))])])])],1):t._e()],1)}),1)},u=[],h={props:["seasons","appendUrl"],data:function(){return{yoo:""}},methods:{y:function(){}}},p=h,d=(a("edb0"),a("2877")),_=Object(d["a"])(p,v,u,!1,null,null,null);_.options.__file="SeasonsList.vue";var f=_.exports;function m(t){return T(t)||g(t)||w()}function w(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function g(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function T(t){if(Array.isArray(t)){for(var e=0,a=new Array(t.length);e<t.length;e++)a[e]=t[e];return a}}function b(t,e,a,s,i,r,o){try{var n=t[r](o),l=n.value}catch(c){return void a(c)}n.done?e(l):Promise.resolve(l).then(s,i)}function y(t){return function(){var e=this,a=arguments;return new Promise(function(s,i){var r=t.apply(e,a);function o(t){b(r,s,i,o,n,"next",t)}function n(t){b(r,s,i,o,n,"throw",t)}o(void 0)})}}function S(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},s=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(a).filter(function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),s.forEach(function(e){V(t,e,a[e])})}return t}function V(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var x={name:"TVShowDetails",components:{ItemsList:c["a"],SeasonsList:f},computed:S({},Object(l["b"])({TVShowDetails:"getTVShowDetails",TVWatchlist:"getTVWatchlist",TVFavourites:"getTVFavourites",watchlistTVObj:"getWatchlistTVObj",favTVObj:"getFavTVObj",darkMode:"darkMode"}),{playerSize:function(){return{width:.8*window.outerWidth,height:.6*window.outerHeight}},showCastButton:function(){var t=this.TVShowDetails.credits.cast,e=this.TVShowDetails.credits.crew;return t.length>0||e.length>0},showCast:function(){var t=this.TVShowDetails.credits.cast;return t.length>0}}),data:function(){return{appendUrl:"https://image.tmdb.org/t/p/w342/",appendProfileUrl:"https://image.tmdb.org/t/p/w185/",appendLogoUrl:"https://image.tmdb.org/t/p/w92/",playTrailer:!1,Id:"",eventBus:n["eventBus"]}},watch:{deep:!0,TVShowDetails:function(){window.scroll(0,0);var t="https://image.tmdb.org/t/p/w1280/".concat(this.TVShowDetails.backdrop_path),e=document.getElementsByClassName("v-content__wrap")[0];e.style["background-image"]="url(".concat(t,")")}},methods:{redirectToCast:function(){this.$store.commit("MUTATION_SET_CAST_AND_CREW",this.TVShowDetails.credits),this.$router.push({name:"CastAndCrew"})},searchKeyword:function(){var t=y(o.a.mark(function t(e){return o.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("ACTION_SEARCH_KEYWORD",{type:"TV",id:e.id});case 2:this.$router.push({name:"SearchResult",params:{type:"keyword-".concat(e.name.split(" ").join("-"),"-").concat(e.id)}});case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),searchGenre:function(){var t=y(o.a.mark(function t(e){return o.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("ACTION_SEARCH_GENRE",{type:"TV",id:e.id});case 2:this.$router.push({name:"SearchResult",params:{type:"genre-".concat(e.name.split(" ").join("-"),"-").concat(e.id)}});case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),getSpokenLanguage:function(){var t=this,e=this.TVShowDetails.spoken_languages?this.TVShowDetails.spoken_languages.find(function(e){return e.iso_639_1===t.TVShowDetails.original_language}):null;return e?e.name:null},toHoursMinutes:function(t){var e=Math.floor(t/60),a=Math.floor(t%60);return"".concat(e,"h ").concat(a,"m")},play:function(){this.playTrailer=!0},addToWatchlist:function(){var t=[this.TVShowDetails].concat(m(this.TVWatchlist)),e={fileName:"my_tv_watchlist.json",data:t,options:{encrypt:!0}};this.$store.dispatch("ACTION_SET_TV_WATCHLIST",e)},removeFromWatchlist:function(){var t=this,e=this.TVWatchlist.filter(function(e){return e.id!==t.TVShowDetails.id}),a={fileName:"my_tv_watchlist.json",data:m(e),options:{encrypt:!0}};this.$store.dispatch("ACTION_SET_TV_WATCHLIST",a)},addToFavourites:function(){var t=[this.TVShowDetails].concat(m(this.TVFavourites)),e={fileName:"my_tv_favourites.json",data:t,options:{encrypt:!0}};this.$store.dispatch("ACTION_SET_TV_FAVOURITES",e)},removeFromFavourites:function(){var t=this,e=this.TVFavourites.filter(function(e){return e.id!==t.TVShowDetails.id}),a={fileName:"my_tv_favourites.json",data:m(e),options:{encrypt:!0}};this.$store.dispatch("ACTION_SET_TV_FAVOURITES",a)},color:function(t){var e=10*t;return e>=70?"success":e>30&&e<70?"lime accent-2":"red"}},mounted:function(){var t="".concat(window.innerHeight-document.getElementById("toolbar").offsetHeight),e=document.body.scrollHeight,a=t-document.getElementById("tvDetails").offsetHeight;document.getElementById("tvEnd").style["marginTop"]="".concat(a,"px"),window.scroll(0,0);var s="https://image.tmdb.org/t/p/w1280/".concat(this.TVShowDetails.backdrop_path),i=document.getElementsByClassName("v-content__wrap")[0];i.style["background-image"]="url(".concat(s,")"),i.style["background-size"]="100% 100vh",i.style["box-shadow"]="inset 0 ".concat(e+1e3,"px 0 0 rgba(65, 63, 64, 0.9)")},destroyed:function(){var t=document.getElementsByClassName("v-content__wrap")[0];t.style["background-image"]="url('')",t.style["background-size"]="initial",t.style["background-position"]="",t.style["box-shadow"]="initial"},created:function(){this.TVShowDetails&&Object.keys(this.TVShowDetails).length>0||(this.$route.params.id?this.$store.dispatch("ACTION_GET_MOVIE_DETAILS",{id:this.$route.params.id}):this.$router.push({name:"Home"}))}},C=x,D=(a("e9ea"),Object(d["a"])(C,s,i,!1,null,null,null));D.options.__file="TVShowDetails.vue";e["default"]=D.exports},e9ea:function(t,e,a){"use strict";var s=a("d4fc"),i=a.n(s);i.a},edb0:function(t,e,a){"use strict";var s=a("c121"),i=a.n(s);i.a}}]);
//# sourceMappingURL=tvshowdetails.2e551d14.js.map