(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2311c8"],{eec5:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",{attrs:{justify:"center",align:"center"}},[n("h1",{staticClass:"h2 indigo--text text--darken-4"},[t._v("Welcome")])]),n("v-row",{attrs:{justify:"center",align:"center"}},[n("h1",{staticClass:"headline indigo--text text--darken-4"},[t._v(t._s(t.userEmail))])]),n("v-row",{staticClass:"ma-4",attrs:{justify:"center",align:"center"}}),n("v-row",{attrs:{justify:"center",align:"center"}},[n("v-btn",{attrs:{depressed:"",color:"primary"},on:{click:t.logOutAction}},[t._v(" Log out ")])],1)],1)},a=[],o={data:function(){return{userEmail:""}},methods:{logOutAction:function(){localStorage.removeItem("user"),this.$router.push("/login")}},beforeRouteEnter:function(t,e,n){localStorage.getItem("user")?n():n({name:"Login"})},created:function(){console.log(),this.userEmail=JSON.parse(localStorage.getItem("user")).email}},s=o,i=n("2877"),c=n("6544"),l=n.n(c),u=n("8336"),g=n("a523"),d=n("0fd9"),f=Object(i["a"])(s,r,a,!1,null,null,null);e["default"]=f.exports;l()(f,{VBtn:u["a"],VContainer:g["a"],VRow:d["a"]})}}]);
//# sourceMappingURL=chunk-2d2311c8.2db9cead.js.map