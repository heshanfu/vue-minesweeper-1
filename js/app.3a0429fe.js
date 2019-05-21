(function(t){function e(e){for(var n,r,a=e[0],c=e[1],l=e[2],m=0,b=[];m<a.length;m++)r=a[m],i[r]&&b.push(i[r][0]),i[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(b.length)b.shift()();return o.push.apply(o,l||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],n=!0,a=1;a<s.length;a++){var c=s[a];0!==i[c]&&(n=!1)}n&&(o.splice(e--,1),t=r(r.s=s[0]))}return t}var n={},i={app:0},o=[];function r(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=n,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(s,n,function(e){return t[e]}.bind(null,n));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var u=c;o.push(["a1ec","chunk-vendors"]),s()})({"52df":function(t,e,s){},a1ec:function(t,e,s){"use strict";s.r(e);var n=s("2b0e"),i=s("8c4f"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[t._m(0),s("div",{staticClass:"bg-light"},[s("div",{staticClass:"container py-3"},[s("div",{staticClass:"btn-group"},[s("router-link",{staticClass:"btn btn-outline-success",attrs:{href:"#",to:{name:"game",params:{rows:9,cols:9,bombs:10}}}},[t._v("\n          Beginner\n        ")]),s("router-link",{staticClass:"btn btn-outline-success",attrs:{href:"#",to:{name:"game",params:{rows:16,cols:16,bombs:40}}}},[t._v("\n          Intermediate\n        ")]),s("router-link",{staticClass:"btn btn-outline-success",attrs:{href:"#",to:{name:"game",params:{rows:16,cols:30,bombs:99}}}},[t._v("\n          Expert\n        ")])],1)])]),s("router-view"),s("div",{staticClass:"bg-light"},[s("div",{staticClass:"container py-3"},[s("h3",{staticClass:"m-1"},[t._v("Helpful links")]),s("a",{staticClass:"btn btn-outline-secondary m-1",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.share()}}},[s("i",{staticClass:"fa fa-share-alt"}),t._v(" share\n      ")]),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5)])]),s("br"),s("br"),s("br"),s("br"),s("br"),s("br")],1)},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container py-3"},[s("h1",[t._v("Vue minesweeper")]),s("p",{staticClass:"lead"},[t._v("\n      A simple minesweeper game.\n    ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"btn btn-outline-secondary m-1",attrs:{href:"https://github.com/disjfa/vue-minesweeper"}},[s("i",{staticClass:"fab fa-github"}),t._v(" github\n      ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"btn btn-outline-secondary m-1",attrs:{href:"https://www.npmjs.com/package/vue-minesweeper"}},[s("i",{staticClass:"fab fa-npm"}),t._v(" npm\n      ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"btn btn-outline-secondary m-1",attrs:{href:"https://codepen.io/disjfa/pen/axdmob"}},[s("i",{staticClass:"fab fa-codepen"}),t._v(" codepen\n      ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"btn btn-outline-secondary m-1",attrs:{href:"https://medium.com/@disjfa/vue-creating-custom-component-bc939e40421a"}},[s("i",{staticClass:"fab fa-medium"}),t._v(" medium\n      ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"btn btn-outline-secondary m-1",attrs:{href:"https://github.com/disjfa/vue-minesweeper/issues"}},[s("i",{staticClass:"fa fa-exclamation-circle"}),t._v(" issues?\n      ")])}],a={name:"app",methods:{share:function(){navigator.share({title:"Vue minesweeper",text:"A simple minesweeper game.",url:document.location})}}},c=a,l=s("2877"),u=Object(l["a"])(c,o,r,!1,null,null,null),m=u.exports,b=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"bg-light"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"form-group col"},[s("label",{attrs:{for:"input-rows"}},[t._v("Rows")]),s("input",{directives:[{name:"model",rawName:"v-model.number",value:t.rows,expression:"rows",modifiers:{number:!0}}],staticClass:"form-control",attrs:{type:"number",min:"1",max:"50",id:"input-rows"},domProps:{value:t.rows},on:{input:function(e){e.target.composing||(t.rows=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})]),s("div",{staticClass:"form-group col"},[s("label",{attrs:{for:"input-cols"}},[t._v("Cols")]),s("input",{directives:[{name:"model",rawName:"v-model.number",value:t.cols,expression:"cols",modifiers:{number:!0}}],staticClass:"form-control",attrs:{type:"number",min:"1",max:"50",id:"input-cols"},domProps:{value:t.cols},on:{input:function(e){e.target.composing||(t.cols=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})]),s("div",{staticClass:"form-group col"},[s("label",{attrs:{for:"input-bombs"}},[t._v("Bombs")]),s("input",{directives:[{name:"model",rawName:"v-model.number",value:t.bombs,expression:"bombs",modifiers:{number:!0}}],staticClass:"form-control",attrs:{type:"number",min:"1",max:"99",id:"input-bombs"},domProps:{value:t.bombs},on:{input:function(e){e.target.composing||(t.bombs=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})])])])]),s("div",{staticClass:"container py-3"},[s("h3",{staticClass:"text-center"},[t._v("The game")]),s("div",{staticClass:"row justify-content-md-center"},[t.doesItFit()?s("div",{staticClass:"col",class:{"col-md-9 col-lg-7":t.cols<14}},[s("minesweeper-game",{attrs:{rows:t.rows,cols:t.cols,bombs:t.bombs}})],1):s("div",[s("h3",{staticClass:"text-center"},[t._v("416: Out of range")]),s("p",[t._v("Cols and rows are max 50. But you may have 99 bombs!")]),s("br"),s("img",{staticClass:"img-fluid",attrs:{src:"https://http.cat/416",alt:"Out of range"}})])])])])},f=[],h={name:"game",data:function(){return{rows:9,cols:9,bombs:10}},mounted:function(){this.initParams(this.$route.params)},methods:{doesItFit:function(){var t=this.rows,e=this.cols,s=this.bombs;return!(t*e<s)&&(!(t>50)&&(!(e>50)&&!(s>99)))},initParams:function(t){var e=t.rows,s=t.cols,n=t.bombs;this.rows=parseInt(e)||9,this.cols=parseInt(s)||9,this.bombs=parseInt(n)||10},updateRoute:function(t){var e=this.rows,s=this.cols,n=this.bombs,i=Object.assign({rows:e,cols:s,bombs:n},t);this.$router.push({name:"game",params:i})}},watch:{rows:function(t){this.updateRoute({rows:t})},cols:function(t){this.updateRoute({cols:t})},bombs:function(t){this.updateRoute({bombs:t})},$route:function(t){this.initParams(t.params)}}},d=h,p=Object(l["a"])(d,b,f,!1,null,null,null),v=p.exports,g=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"minesweeper"},[s("div",{staticClass:"minesweeper-status"},[s("div",{staticClass:"minesweeper-bombcount"},[t._v("\n      "+t._s(t.bombCount)+"\n    ")]),s("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.initGrid(e)}}},[t._v("\n      ☺\n    ")]),s("div",{staticClass:"minesweeper-timer"},[t._v("0")])]),s("div",{staticClass:"minesweeper-grid",style:t.getGridStyle()},t._l(t.grid,function(e,n){return s("minesweeper-cell",{key:n,attrs:{cell:e},nativeOn:{click:function(s){return t.clickCell(e,n)},contextmenu:[function(s){return t.addFlag(e)},function(t){t.preventDefault()}],dblclick:function(s){return s.preventDefault(),t.doubleClick(e,n)}}})}),1)])},w=[],C=(s("ac6a"),s("c5f6"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"minesweeper-cell",class:t.getClass()},[t.cell.isOpen&&t.cell.bombCount?s("div",[t._v("\n    "+t._s(t.cell.bombCount)+"\n  ")]):t._e(),t.cell.hasFlag?s("div",[t._v("\n    ⚑\n  ")]):t._e()])}),_=[],y={name:"minesweeper-cell",props:{cell:{type:Object,required:!0}},methods:{getClass:function(){var t=this.cell;return t.isOpen&&t.hasBomb?"minesweeper-bomb":t.isOpen?"minesweeper-open":t.hasFlag?"minesweeper-flag":""}}},O=y,x=(s("a8de"),Object(l["a"])(O,C,_,!1,null,null,null)),k=x.exports,j={name:"minesweeper-game",components:{MinesweeperCell:k},props:{cols:{type:Number,default:9},rows:{type:Number,default:9},bombs:{type:Number,default:10}},data:function(){return{bombCount:0,finished:!1,won:!1,grid:[]}},mounted:function(){this.initGrid()},methods:{getGridStyle:function(){var t=this.cols;return"grid-template-columns: repeat(".concat(t,", 1fr);")},initGrid:function(){var t=this.bombs,e=this.cols,s=this.rows,n=s*e,i=[];if(t>n)console.log("more bombs than space on the grid!");else{for(var o=0;o<n;o+=1)i.push({hasBomb:!1,isOpen:!1,hasFlag:!1,bombCount:0,neighborhood:null});while(t>0){var r=Math.floor(Math.random()*n);!1===i[r].hasBomb&&(t-=1,i[r].hasBomb=!0)}this.grid=i,this.finished=!1,this.won=!1,this.bombCount=this.bombs}},addFlag:function(t){if(!this.finished&&!t.isOpen){t.hasFlag=!t.hasFlag;var e=this.grid,s=e.reduce(function(t,e){return e.hasFlag?t+1:t},0);this.bombCount=this.bombs-s}},doubleClick:function(t,e){if(!this.finished&&!1!==t.isOpen&&(this.setNeighborhood(t,e),t.bombCount)){var s=this.grid,n=0;t.neighborhood.forEach(function(t){s[t].hasFlag&&(n+=1)}),n===t.bombCount&&this.checkNeighborhood(t,!0)}},clickCell:function(t,e){if(!this.finished&&!t.hasFlag&&!t.isOpen){if(t.hasBomb){var s=this.grid;return s.forEach(function(t){t.hasBomb&&(t.isOpen=!0)}),void(this.finished=!0)}this.setNeighborhood(t,e),t.isOpen=!0,this.checkNeighborhood(t)}},checkNeighborhood:function(t,e){var s=this;if(0===t.bombCount||!0===e){var n=this.grid;t.neighborhood.forEach(function(t){s.clickCell(n[t],t)})}},setNeighborhood:function(t,e){if(null===t.neighborhood){for(var s=this.grid,n=[],i=0,o=-1;o<2;o+=1)for(var r=-1;r<2;r+=1){var a=this.getIndex(e,o,r);!1!==a&&(n.push(a),s[a].hasBomb&&(i+=1))}t.bombCount=i,t.neighborhood=n}},getIndex:function(t,e,s){var n=this.cols,i=this.rows;return(0!==e||0!==s)&&(!(t%n+e<0||t%n+e>=n)&&(!(Math.floor(t/n)+s<0||Math.floor(t/n)+s>=i)&&t+(s*n+e)))}},watch:{rows:function(){this.initGrid()},cols:function(){this.initGrid()},bombs:function(){this.initGrid()}}},$=j,E=(s("c3a2"),Object(l["a"])($,g,w,!1,null,null,null)),F=E.exports;function N(t){arguments.length>1&&void 0!==arguments[1]&&arguments[1];t.component("MinesweeperGame",F)}"undefined"!==typeof window&&window.Vue&&window.Vue===n["a"]&&N(window.Vue);var P=N;n["a"].config.productionTip=!1,n["a"].use(i["a"]),n["a"].use(P);var B=new i["a"]({routes:[{path:"/:rows/:cols/:bombs",name:"game",component:v},{path:"*",redirect:{name:"game",params:{rows:9,cols:9,bombs:10}}}]});new n["a"]({render:function(t){return t(m)},router:B}).$mount("#app")},a8de:function(t,e,s){"use strict";var n=s("52df"),i=s.n(n);i.a},a9d3:function(t,e,s){},c3a2:function(t,e,s){"use strict";var n=s("a9d3"),i=s.n(n);i.a}});
//# sourceMappingURL=app.3a0429fe.js.map