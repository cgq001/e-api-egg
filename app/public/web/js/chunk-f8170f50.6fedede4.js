(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f8170f50"],{"03dc":function(e,t,n){"use strict";n.r(t);var d=n("6a59"),i=function(e){return Object(d["pushScopeId"])("data-v-35a25398"),e=e(),Object(d["popScopeId"])(),e},c={class:"wordIndex"},a={class:"wordIndexAside"},o=Object(d["createStaticVNode"])('<div class="wordIndexAsideTitle" data-v-35a25398><div class="wordIndexAsideTitleItem wordIndexAsideTitleItemActive" data-v-35a25398> 公开的 </div><div class="wordIndexAsideTitleItem" data-v-35a25398> 私有的 </div></div><div class="wordIndexAsideMainNew" data-v-35a25398><span class="iconfont icon-jiahao wordIndexAsideMainNewIcon" title="新建文件夹" data-v-35a25398></span><span data-v-35a25398>  新建文件夹</span></div>',2),s={class:"wordIndexAsideMain"},r=i((function(){return Object(d["createElementVNode"])("span",{class:"iconfont icon-wenjian wordIndexAsideMainItemIcon"},null,-1)})),l={class:"wordIndexAside"},u=i((function(){return Object(d["createElementVNode"])("div",{class:"wordIndexAsideMainNew"},[Object(d["createElementVNode"])("span",{class:"iconfont icon-jiahao wordIndexAsideMainNewIcon",title:"新建文档"}),Object(d["createElementVNode"])("span",null,"  新建文档")],-1)})),b={class:"wordIndexAsideMainWord"},v=i((function(){return Object(d["createElementVNode"])("span",{class:"iconfont icon-wendang wordIndexAsideMainItemIcon",style:{color:"#F78A09"}},null,-1)})),f={class:"wordIndexContent"};function p(e,t){var n=Object(d["resolveComponent"])("el-scrollbar"),i=Object(d["resolveComponent"])("WordEdit");return Object(d["openBlock"])(),Object(d["createElementBlock"])("div",c,[Object(d["createElementVNode"])("div",a,[o,Object(d["createElementVNode"])("div",s,[Object(d["createVNode"])(n,{style:{height:"100%"}},{default:Object(d["withCtx"])((function(){return[(Object(d["openBlock"])(),Object(d["createElementBlock"])(d["Fragment"],null,Object(d["renderList"])(100,(function(e){return Object(d["createElementVNode"])("div",{class:"wordIndexAsideMainItem",key:e},[r,Object(d["createElementVNode"])("span",null,"工台面板"+Object(d["toDisplayString"])(e),1)])})),64))]})),_:1})])]),Object(d["createElementVNode"])("div",l,[u,Object(d["createElementVNode"])("div",b,[Object(d["createVNode"])(n,{style:{height:"100%"}},{default:Object(d["withCtx"])((function(){return[(Object(d["openBlock"])(),Object(d["createElementBlock"])(d["Fragment"],null,Object(d["renderList"])(100,(function(e){return Object(d["createElementVNode"])("div",{class:"wordIndexAsideMainItemWord",key:e},[v,Object(d["createElementVNode"])("span",null,"工台面板"+Object(d["toDisplayString"])(e),1)])})),64))]})),_:1})])]),Object(d["createElementVNode"])("div",f,[Object(d["createVNode"])(i)])])}var j=function(e){return Object(d["pushScopeId"])("data-v-28be79a5"),e=e(),Object(d["popScopeId"])(),e},I={class:"editIndex"},O={class:"editIndexTitle"},m=j((function(){return Object(d["createElementVNode"])("div",{class:"editIndexTitleName"},[Object(d["createElementVNode"])("input",{type:"text",placeholder:"请输入文档标题",class:"editIndexTitleNameInput"})],-1)})),x={class:"editIndexTitleCan"},h=Object(d["createTextVNode"])("保存文档"),w={class:"editIndexContent",ref:"wordEditText"},N=j((function(){return Object(d["createElementVNode"])("div",{class:"editIndexFill"},null,-1)}));function E(e,t){var n=Object(d["resolveComponent"])("el-button");return Object(d["openBlock"])(),Object(d["createElementBlock"])("div",I,[Object(d["createElementVNode"])("div",O,[m,Object(d["createElementVNode"])("div",x,[Object(d["createVNode"])(n,{type:"primary",size:"mini"},{default:Object(d["withCtx"])((function(){return[h]})),_:1})])]),Object(d["createElementVNode"])("div",w,null,512),N])}var V=n("3158"),T=n.n(V),g=n("73df"),k=n.n(g),A={data:function(){return{editor:null}},mounted:function(){var e=this;this.$nextTick((function(){e.getEditor()})),console.log()},methods:{getEditor:function(){this.editor=new T.a(this.$refs.wordEditText),this.editor.config.placeholder="请输入文档内容",this.editor.config.menus=["head","bold","fontSize","italic","underline","strikeThrough","indent","lineHeight","foreColor","backColor","link","list","todo","justify","quote","emoticon","image","video","table","code","splitLine","undo","redo"],this.editor.config.showFullScreen=!1,this.editor.highlight=k.a,this.editor.config.height=this.$refs.wordEditText.offsetHeight-40,this.editor.create()}}};n("4d31");A.render=E,A.__scopeId="data-v-28be79a5";var C=A,S={class:"editIndex"},y=Object(d["createStaticVNode"])('<div class="editIndexTitle" data-v-5b7172f8><div class="editIndexTitleName" data-v-5b7172f8> 请输入文档标题 </div><div class="editIndexTitleCan" data-v-5b7172f8><span class="editIndexTitleCanSpan" data-v-5b7172f8>张三</span><span class="editIndexTitleCanSpan" data-v-5b7172f8>2022-01-20 12:00:00</span><span class="editIndexTitleCanSpan" style="color:#158FFE;" data-v-5b7172f8>编辑</span><span class="editIndexTitleCanSpan" style="color:red;" data-v-5b7172f8>删除</span></div></div><div class="editIndexContent" data-v-5b7172f8></div><div class="editIndexFill" data-v-5b7172f8></div>',3),B=[y];function M(e,t){return Object(d["openBlock"])(),Object(d["createElementBlock"])("div",S,B)}var _={data:function(){return{}},mounted:function(){},methods:{}};n("d6da");_.render=M,_.__scopeId="data-v-5b7172f8";var F=_,W={components:{WordEdit:C,WordText:F}};n("c67c");W.render=p,W.__scopeId="data-v-35a25398";t["default"]=W},"145e":function(e,t,n){},"4d31":function(e,t,n){"use strict";n("99ba")},"99ba":function(e,t,n){},c67c:function(e,t,n){"use strict";n("145e")},d6da:function(e,t,n){"use strict";n("e5c4")},e5c4:function(e,t,n){}}]);
//# sourceMappingURL=chunk-f8170f50.6fedede4.js.map