(function(t){function e(e){for(var s,i,a=e[0],c=e[1],l=e[2],m=0,b=[];m<a.length;m++)i=a[m],o[i]&&b.push(o[i][0]),o[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(b.length)b.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],s=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(s=!1)}s&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var s={},o={app:0},r=[];function i(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=s,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(n,s,function(e){return t[e]}.bind(null,s));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var u=c;r.push(["a1ec","chunk-vendors"]),n()})({"52df":function(t,e,n){},a1ec:function(t,e,n){"use strict";n.r(e);var s=n("2b0e"),o=n("8c4f"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t._m(0),n("div",{staticClass:"bg-light"},[n("div",{staticClass:"container py-3"},[n("div",{staticClass:"btn-group"},[n("router-link",{staticClass:"btn btn-outline-success",attrs:{href:"#",to:{name:"game",params:{rows:9,cols:9,bombs:10}}}},[t._v("\n          Beginner\n        ")]),n("router-link",{staticClass:"btn btn-outline-success",attrs:{href:"#",to:{name:"game",params:{rows:16,cols:16,bombs:40}}}},[t._v("\n          Intermediate\n        ")]),n("router-link",{staticClass:"btn btn-outline-success",attrs:{href:"#",to:{name:"game",params:{rows:16,cols:30,bombs:99}}}},[t._v("\n          Expert\n        ")])],1)])]),n("router-view"),t._m(1),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")],1)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container py-3"},[n("h1",[t._v("Vue minesweeper")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-light"},[n("div",{staticClass:"container py-3"},[n("h3",[t._v("Instalation")]),n("code",[t._v("npm i vue-minesweeper")])])])}],a={name:"app"},c=a,l=n("2877"),u=Object(l["a"])(c,r,i,!1,null,null,null),m=u.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"bg-light"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"form-group col"},[n("label",{attrs:{for:"input-rows"}},[t._v("Rows")]),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.rows,expression:"rows",modifiers:{number:!0}}],staticClass:"form-control",attrs:{type:"number",min:"1",max:"50",id:"input-rows"},domProps:{value:t.rows},on:{input:function(e){e.target.composing||(t.rows=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})]),n("div",{staticClass:"form-group col"},[n("label",{attrs:{for:"input-cols"}},[t._v("Cols")]),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.cols,expression:"cols",modifiers:{number:!0}}],staticClass:"form-control",attrs:{type:"number",min:"1",max:"50",id:"input-cols"},domProps:{value:t.cols},on:{input:function(e){e.target.composing||(t.cols=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})]),n("div",{staticClass:"form-group col"},[n("label",{attrs:{for:"input-bombs"}},[t._v("Bombs")]),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.bombs,expression:"bombs",modifiers:{number:!0}}],staticClass:"form-control",attrs:{type:"number",min:"1",max:"99",id:"input-bombs"},domProps:{value:t.bombs},on:{input:function(e){e.target.composing||(t.bombs=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})])])])]),n("div",{staticClass:"container py-3"},[n("h3",{staticClass:"text-center"},[t._v("The game")]),n("div",{staticClass:"row justify-content-md-center"},[t.doesItFit()?n("div",{staticClass:"col",class:{"col-md-9 col-lg-7":t.cols<14}},[n("minesweeper-game",{attrs:{rows:t.rows,cols:t.cols,bombs:t.bombs}})],1):n("div",[n("h3",{staticClass:"text-center"},[t._v("416: Out of range")]),n("p",[t._v("Cols and rows are max 50. But you may have 99 bombs!")]),n("br"),n("img",{staticClass:"img-fluid",attrs:{src:"https://http.cat/416",alt:"Out of range"}})])])])])},d=[],h={name:"game",data:function(){return{rows:9,cols:9,bombs:10}},mounted:function(){this.initParams(this.$route.params)},methods:{doesItFit:function(){var t=this.rows,e=this.cols,n=this.bombs;return!(t*e<n)&&(!(t>50)&&(!(e>50)&&!(n>99)))},initParams:function(t){var e=t.rows,n=t.cols,s=t.bombs;this.rows=parseInt(e)||9,this.cols=parseInt(n)||9,this.bombs=parseInt(s)||10},updateRoute:function(t){var e=this.rows,n=this.cols,s=this.bombs,o=Object.assign({rows:e,cols:n,bombs:s},t);this.$router.push({name:"game",params:o})}},watch:{rows:function(t){this.updateRoute({rows:t})},cols:function(t){this.updateRoute({cols:t})},bombs:function(t){this.updateRoute({bombs:t})},$route:function(t){this.initParams(t.params)}}},f=h,p=Object(l["a"])(f,b,d,!1,null,null,null),v=p.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"minesweeper"},[n("div",{staticClass:"minesweeper-status"},[n("div",{staticClass:"minesweeper-bombcount"},[t._v("\n      "+t._s(t.bombCount)+"\n    ")]),n("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.initGrid(e)}}},[t._v("\n      ☺\n    ")]),n("div",{staticClass:"minesweeper-timer"},[t._v("0")])]),n("div",{staticClass:"minesweeper-grid",style:t.getGridStyle()},t._l(t.grid,function(e,s){return n("minesweeper-cell",{key:s,attrs:{cell:e},nativeOn:{click:function(n){return t.clickCell(e,s)},contextmenu:[function(n){return t.addFlag(e)},function(t){t.preventDefault()}],dblclick:function(n){return n.preventDefault(),t.doubleClick(e,s)}}})}),1)])},w=[],C=(n("ac6a"),n("c5f6"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"minesweeper-cell",class:t.getClass()},[t.cell.isOpen&&t.cell.bombCount?n("div",[t._v("\n    "+t._s(t.cell.bombCount)+"\n  ")]):t._e(),t.cell.hasFlag?n("div",[t._v("\n    ⚑\n  ")]):t._e()])}),_=[],y={name:"minesweeper-cell",props:{cell:{type:Object,required:!0}},methods:{getClass:function(){var t=this.cell;return t.isOpen&&t.hasBomb?"minesweeper-bomb":t.isOpen?"minesweeper-open":t.hasFlag?"minesweeper-flag":""}}},O=y,x=(n("a8de"),Object(l["a"])(O,C,_,!1,null,null,null)),k=x.exports,j={name:"minesweeper-game",components:{MinesweeperCell:k},props:{cols:{type:Number,default:9},rows:{type:Number,default:9},bombs:{type:Number,default:10}},data:function(){return{bombCount:0,finished:!1,won:!1,grid:[]}},mounted:function(){this.initGrid()},methods:{getGridStyle:function(){var t=this.cols;return"grid-template-columns: repeat(".concat(t,", 1fr);")},initGrid:function(){var t=this.bombs,e=this.cols,n=this.rows,s=n*e,o=[];if(t>s)console.log("more bombs than space on the grid!");else{for(var r=0;r<s;r+=1)o.push({hasBomb:!1,isOpen:!1,hasFlag:!1,bombCount:0,neighborhood:null});while(t>0){var i=Math.floor(Math.random()*s);!1===o[i].hasBomb&&(t-=1,o[i].hasBomb=!0)}this.grid=o,this.finished=!1,this.won=!1,this.bombCount=this.bombs}},addFlag:function(t){if(!this.finished&&!t.isOpen){t.hasFlag=!t.hasFlag;var e=this.grid,n=e.reduce(function(t,e){return e.hasFlag?t+1:t},0);this.bombCount=this.bombs-n}},doubleClick:function(t,e){if(!this.finished&&!1!==t.isOpen&&(this.setNeighborhood(t,e),t.bombCount)){var n=this.grid,s=0;t.neighborhood.forEach(function(t){n[t].hasFlag&&(s+=1)}),s===t.bombCount&&this.checkNeighborhood(t,!0)}},clickCell:function(t,e){if(!this.finished&&!t.hasFlag&&!t.isOpen){if(t.hasBomb){var n=this.grid;return n.forEach(function(t){t.hasBomb&&(t.isOpen=!0)}),void(this.finished=!0)}this.setNeighborhood(t,e),t.isOpen=!0,this.checkNeighborhood(t)}},checkNeighborhood:function(t,e){var n=this;if(0===t.bombCount||!0===e){var s=this.grid;t.neighborhood.forEach(function(t){n.clickCell(s[t],t)})}},setNeighborhood:function(t,e){if(null===t.neighborhood){for(var n=this.grid,s=[],o=0,r=-1;r<2;r+=1)for(var i=-1;i<2;i+=1){var a=this.getIndex(e,r,i);!1!==a&&(s.push(a),n[a].hasBomb&&(o+=1))}t.bombCount=o,t.neighborhood=s}},getIndex:function(t,e,n){var s=this.cols,o=this.rows;return(0!==e||0!==n)&&(!(t%s+e<0||t%s+e>=s)&&(!(Math.floor(t/s)+n<0||Math.floor(t/s)+n>=o)&&t+(n*s+e)))}},watch:{rows:function(){this.initGrid()},cols:function(){this.initGrid()},bombs:function(){this.initGrid()}}},$=j,F=(n("c3a2"),Object(l["a"])($,g,w,!1,null,null,null)),N=F.exports;function P(t){arguments.length>1&&void 0!==arguments[1]&&arguments[1];t.component("MinesweeperGame",N)}"undefined"!==typeof window&&window.Vue&&window.Vue===s["a"]&&P(window.Vue);var B=P;s["a"].config.productionTip=!1,s["a"].use(o["a"]),s["a"].use(B);var E=new o["a"]({mode:"history",routes:[{path:"/:rows/:cols/:bombs",name:"game",component:v},{path:"*",redirect:{name:"game",params:{rows:9,cols:9,bombs:10}}}]});new s["a"]({render:function(t){return t(m)},router:E}).$mount("#app")},a8de:function(t,e,n){"use strict";var s=n("52df"),o=n.n(s);o.a},a9d3:function(t,e,n){},c3a2:function(t,e,n){"use strict";var s=n("a9d3"),o=n.n(s);o.a}});
//# sourceMappingURL=app.3407760a.js.map