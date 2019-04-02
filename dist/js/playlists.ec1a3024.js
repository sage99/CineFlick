(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["playlists"],{"63b2":function(t,e,i){"use strict";var a=i("bee1"),l=i.n(a);l.a},"6bce":function(t,e,i){"use strict";var a=i("c6c7"),l=i.n(a);l.a},b474:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-layout",{attrs:{row:"",wrap:""}},[i("v-dialog",{attrs:{"max-width":"500"},model:{value:t.deleteItem,callback:function(e){t.deleteItem=e},expression:"deleteItem"}},[i("v-card",{staticClass:"br20"},[i("v-card-title",{staticClass:"headline"},[t._v("\n        Delete Playlist\n      ")]),i("v-card-text",[t._v("\n        Are you sure, you want to delete this playlist?\n      ")]),i("v-card-actions",[i("v-btn",{attrs:{loading:t.loading,round:"",color:"error"},on:{click:function(e){t.deletePlaylist(t.playlistToDelete)}}},[t._v("Delete"),i("v-icon",{staticClass:"ml-1"},[t._v("delete")])],1),i("v-btn",{attrs:{flat:""},on:{click:function(e){t.deleteItem=!1}}},[t._v("Cancel")])],1)],1)],1),t.playlists&&t.playlists.length>0?i("v-flex",{attrs:{xs12:""}},[i("div",[i("h1",{staticClass:"headline font-weight-regular"},[t._v("Playlists")]),i("v-btn",{staticClass:"mt-5",attrs:{color:t.darkMode?"":"primary",fab:"",right:"",top:"",absolute:""},on:{click:function(e){t.eventBus.$emit("createPlaylist")}}},[i("v-icon",[t._v("add")])],1),i("v-flex",{attrs:{"mt-3":""}},[i("v-data-table",{staticClass:"elevation-4 br20",attrs:{headers:t.headers,items:t.playlists},scopedSlots:t._u([{key:"items",fn:function(e){return[i("tr",{on:{click:function(i){t.setPlaylist(e.item)}}},[i("td",[t._v(t._s(e.index+1))]),i("td",[t._v(t._s(e.item.name))]),i("td",[t._v(t._s(e.item.description||"- - - - -"))]),i("td",[t._v(t._s(e.item.movies.length))]),i("td",[t._v(t._s(e.item.tv.length))]),i("td",{staticClass:"justify-center align-center layout px-0"},[i("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(i){i.stopPropagation(),t.edit(e.item)}}},[t._v("edit")]),i("v-icon",{attrs:{small:""},on:{click:function(i){i.stopPropagation(),t.deleteP(e.item)}}},[t._v("delete")])],1)])]}}])})],1)],1)]):i("v-flex",{staticClass:"position-center",attrs:{xs12:""}},[i("div",[i("h2",{staticClass:"title text-xs-center font-weight-light"},[t._v("Oops, Looks like you have not created any playlist yet.")]),i("v-btn",{attrs:{color:t.darkMode?"":"primary",round:"",block:""},on:{click:function(e){t.eventBus.$emit("createPlaylist")}}},[i("v-icon",{attrs:{left:""}},[t._v("add")]),t._v("Create new playlist\n      ")],1)],1)]),i("createPlaylist")],1)},l=[],s=i("2f62"),n=i("56d7"),r=i("0553"),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-dialog",{attrs:{persistent:"","max-width":"500"},model:{value:t.createPlaylist,callback:function(e){t.createPlaylist=e},expression:"createPlaylist"}},[i("v-card",{staticClass:"br20"},[i("v-card-title",{staticClass:"headline"},[t._v("Create New Playlist")]),i("v-card-text",[i("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[i("v-text-field",{attrs:{rules:t.nameRule,label:"Enter Playlist Name*",color:t.darkMode?"white":"primary"},model:{value:t.playlistForm.name,callback:function(e){t.$set(t.playlistForm,"name",e)},expression:"playlistForm.name"}}),i("v-text-field",{attrs:{label:"Enter Playlist Description",color:t.darkMode?"white":"primary"},model:{value:t.playlistForm.description,callback:function(e){t.$set(t.playlistForm,"description",e)},expression:"playlistForm.description"}}),i("v-combobox",{attrs:{items:t.genreList,color:t.darkMode?"white":"primary",chips:"","item-text":"name",multiple:"","return-object":"",label:"Select Genres"},scopedSlots:t._u([{key:"selection",fn:function(e){return[i("v-chip",{key:JSON.stringify(e.item.id),staticClass:"v-chip--select-multi ",attrs:{selected:e.selected.name,disabled:e.disabled,close:""},on:{input:function(t){e.parent.selectItem(e.item)}}},[i("v-avatar",{class:t.darkMode?"accent white--text":"primary white--text"},[t._v("\n                  "+t._s(e.item.name.slice(0,1).toUpperCase())+"\n                ")]),t._v("\n                "+t._s(e.item.name)+"\n              ")],1)]}}]),model:{value:t.playlistForm.genres,callback:function(e){t.$set(t.playlistForm,"genres",e)},expression:"playlistForm.genres"}})],1)],1),i("v-card-actions",[i("v-btn",{attrs:{loading:t.isLoading,round:"",color:t.darkMode?"":"primary"},on:{click:t.validate}},[t._v(t._s(t.isEditing?"Save":"Create"))]),i("v-btn",{attrs:{flat:"",color:t.darkMode?"":"primary"},on:{click:function(e){t.createPlaylist=!1}}},[t._v("close")])],1)],1)],1)],1)},c=[];function d(t){return m(t)||p(t)||u()}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function p(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function m(t){if(Array.isArray(t)){for(var e=0,i=new Array(t.length);e<t.length;e++)i[e]=t[e];return i}}function y(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},a=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),a.forEach(function(e){v(t,e,i[e])})}return t}function v(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var f={data:function(){return{createPlaylist:!1,playlistForm:{name:null,description:null,genres:[]},valid:!1,nameRule:[function(t){return!!t||"Playlist name is required"}],isLoading:!1,playlistIndex:null,isEditing:!1}},computed:y({},Object(s["b"])({darkMode:"darkMode",genreList:"getGenre",playlists:"getPlaylists",profileData:"getProfileData"})),watch:{createPlaylist:function(){this.createPlaylist||(this.isLoading=!1,this.$refs.form.reset(),this.isEditing=!1,this.playlistIndex=null)}},mounted:function(){var t=this;n["eventBus"].$on("createPlaylist",function(){t.createPlaylist=!0}),n["eventBus"].$on("editPlaylist",function(e){t.isEditing=!0,t.playlistForm=y({},e),t.playlistIndex=t.playlists.indexOf(e),t.createPlaylist=!0})},destroyed:function(){n["eventBus"].$off("createPlaylist")},methods:{validate:function(){var t=this;if(this.$refs.form.validate()){this.isLoading=!0;var e=[];this.isEditing?(this.playlistForm["updatedAt"]=+new Date,e=d(this.playlists),e[this.playlistIndex]=y({},this.playlistForm)):(this.playlistForm["creatorName"]=this.profileData.profile.name,this.playlistForm["creatorId"]=this.profileData.username,this.playlistForm["votes"]={likes:0,dislikes:0},this.playlistForm["createdAt"]=+new Date,this.playlistForm["updatedAt"]=+new Date,this.playlistForm["id"]=+new Date,this.playlistForm["movies"]=[],this.playlistForm["tv"]=[],e=[y({},this.playlistForm)].concat(d(this.playlists))),this.$store.commit("MUTATION_SET_PLAYLISTS",e),this.$store.dispatch("ACTION_CREATE_PUBLIC_PLAYLIST",y({},this.playlistForm)),r["a"].putFile({fileName:"my_playlist.json",data:e,options:{encrypt:!1}}).then(function(){t.isLoading=!1,t.createPlaylist=!1})}}}},h=f,b=(i("63b2"),i("2877")),_=Object(b["a"])(h,o,c,!1,null,null,null);_.options.__file="CreatePlaylist.vue";var g=_.exports;function P(t){return k(t)||x(t)||w()}function w(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function x(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function k(t){if(Array.isArray(t)){for(var e=0,i=new Array(t.length);e<t.length;e++)i[e]=t[e];return i}}function O(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},a=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),a.forEach(function(e){T(t,e,i[e])})}return t}function T(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var I={data:function(){return{eventBus:n["eventBus"],deleteItem:!1,headers:[{text:"S. No.",value:"index"},{text:"Name",value:"name"},{text:"Description",value:"description"},{text:"Movies Count",value:"movies"},{text:"TV Shows Count",value:"tv"},{text:"Actions",value:"name",sortable:!1}],playlistToDelete:null,loading:!1}},components:{createPlaylist:g},computed:O({},Object(s["b"])({playlists:"getPlaylists",darkMode:"darkMode"})),created:function(){var t=this;this.$store.dispatch("ACTION_GET_GENRE"),r["a"].getFile({fileName:"my_playlist.json",options:{decrypt:!1}}).then(function(e){e?t.$store.commit("MUTATION_SET_PLAYLISTS",e):(t.$store.commit("MUTATION_SET_PLAYLISTS",[]),t.createFile())})},methods:{edit:function(t){n["eventBus"].$emit("editPlaylist",t)},deleteP:function(t){this.playlistToDelete=t,this.deleteItem=!0},setPlaylist:function(t){this.$store.commit("MUTATION_SET_PLAYLIST_DETAILS",t),this.$router.push({name:"Playlist",params:{id:t.id}})},createFile:function(){r["a"].putFile({fileName:"my_playlist.json",data:[],options:{encrypt:!1}})},deletePlaylist:function(t){var e=this;this.loading=!0;var i=P(this.playlists);i.splice(this.playlists.indexOf(t),1),this.$store.commit("MUTATION_SET_PLAYLISTS",i),this.$store.dispatch("ACTION_DELETE_PUBLIC_PLAYLIST",O({},t)),r["a"].putFile({fileName:"my_playlist.json",data:i,options:{encrypt:!1}}).then(function(){e.loading=!1,e.deleteItem=!1})}}},A=I,S=(i("6bce"),Object(b["a"])(A,a,l,!1,null,null,null));S.options.__file="Playlists.vue";e["default"]=S.exports},bee1:function(t,e,i){},c6c7:function(t,e,i){}}]);
//# sourceMappingURL=playlists.ec1a3024.js.map