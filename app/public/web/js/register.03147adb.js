(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["register"],{"0309":function(e,t,o){"use strict";o.r(t);var r=o("6a59"),c=function(e){return Object(r["pushScopeId"])("data-v-4bff3eda"),e=e(),Object(r["popScopeId"])(),e},n={class:"loginBox"},l={class:"loginMain"},i=c((function(){return Object(r["createElementVNode"])("div",{class:"loginTitle"},[Object(r["createElementVNode"])("span",null,"E-API"),Object(r["createElementVNode"])("span",{class:"el-icon-close loginTitleIcon"})],-1)})),a=c((function(){return Object(r["createElementVNode"])("div",{class:"loginTag"}," 注册新用户 ",-1)})),d={class:"loginMainContent"},s={class:"wxBoxFoot"},u=Object(r["createTextVNode"])("已有账号,去登陆");function m(e,t){var o=Object(r["resolveComponent"])("RegisterUser"),c=Object(r["resolveComponent"])("el-link");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",n,[Object(r["createElementVNode"])("div",l,[i,a,Object(r["createElementVNode"])("div",d,[Object(r["createVNode"])(o)]),Object(r["createElementVNode"])("div",s,[Object(r["createVNode"])(c,{type:"primary",href:"#/login"},{default:Object(r["withCtx"])((function(){return[u]})),_:1})])])])}var f={class:"wxBox"},b={class:"wxFrom"},p=Object(r["createTextVNode"])("立即注册");function g(e,t){var o=this,c=Object(r["resolveComponent"])("el-input"),n=Object(r["resolveComponent"])("el-form-item"),l=Object(r["resolveComponent"])("el-col"),i=Object(r["resolveComponent"])("el-button"),a=Object(r["resolveComponent"])("el-form");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",f,[Object(r["createElementVNode"])("div",b,[Object(r["createVNode"])(a,{model:e.loginFrom,rules:e.rulesFrom,ref:"ruleForm",class:"demo-ruleForm"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(n,{prop:"email"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(c,{spellcheck:"false",modelValue:e.loginFrom.email,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.loginFrom.email=t}),modelModifiers:{trim:!0},disabled:e.codeLand,placeholder:"请输入邮箱(推荐QQ邮箱，其他可能不成功)地址"},null,8,["modelValue","disabled"])]})),_:1}),Object(r["createVNode"])(n,{prop:"code",style:{display:"flex","justify-content":"flex-start"}},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(l,{span:11},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(c,{spellcheck:"false",style:{width:"100%"},modelValue:e.loginFrom.code,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.loginFrom.code=t}),modelModifiers:{trim:!0,number:!0},placeholder:"请输入验证码"},null,8,["modelValue"])]})),_:1}),Object(r["createVNode"])(l,{span:2}),Object(r["createVNode"])(l,{span:11},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(i,{type:"primary",style:{width:"100%"},onClick:e.sendCode,loading:e.codeLand},{default:Object(r["withCtx"])((function(){return[Object(r["createTextVNode"])(Object(r["toDisplayString"])(e.codeText),1)]})),_:1},8,["onClick","loading"])]})),_:1})]})),_:1}),Object(r["createVNode"])(n,{prop:"password",style:{"margin-bottom":"50px"}},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(c,{spellcheck:"false",style:{width:"100%"},modelValue:e.loginFrom.password,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.loginFrom.password=t}),modelModifiers:{trim:!0},placeholder:"请输入密码"},null,8,["modelValue"])]})),_:1}),Object(r["createVNode"])(n,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(i,{type:"primary",style:{width:"100%"},disabled:0==o.codeId.length,loading:e.isRegister,onClick:t[3]||(t[3]=function(t){return e.submitForm("ruleForm")})},{default:Object(r["withCtx"])((function(){return[p]})),_:1},8,["disabled","loading"])]})),_:1})]})),_:1},8,["model","rules"])])])}var j=o("6afb"),O=(o("665c"),o("d6b0"),o("f236")),v={data:function(){var e=function(e,t,o){if(!t)return o(new Error("密码不能为空"));var r=/^[a-zA-Z0-9_-]{6,18}$/;r.test(t)?o():o(new Error("密码须为6~18位的字数、数字或者下划线"))};return{loginFrom:{email:null,password:null,code:null},rulesFrom:{email:[{type:"email",required:!0,message:"请输入邮箱地址",trigger:"blur"}],code:[{required:!0,message:"请输入验证码",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{validator:e,trigger:"blur"}]},codeText:"发送验证码",codeTime:null,codeLand:!1,isRegister:!1,codeId:""}},methods:{submitForm:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;t.isRegister=!0,Object(O["l"])(Object(j["a"])(Object(j["a"])({},t.loginFrom),{},{uuid:t.codeId})).then((function(e){200==e.status?(t.$toast.success(e.message),t.loginFrom={email:null,password:null,code:null},clearInterval(t.codeTime),t.codeText="获取验证码",t.$router.push("/login")):(t.$toast.fail(e.message),clearInterval(t.codeTime),t.codeText="获取验证码",t.codeLand=!1,t.isRegister=!1),t.isRegister=!1}),(function(e){clearInterval(t.codeTime),t.codeText="获取验证码",t.isRegister=!1}))}))},sendCode:function(){var e=this,t=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;if(!this.loginFrom.email||!t.test(this.loginFrom.email))return this.$toast.fail("邮箱地址错误"),!1;this.codeLand=!0,Object(O["m"])({email:this.loginFrom.email}).then((function(t){if(200==t.status){e.$toast.success("发送成功");var o=e,r=120;clearInterval(e.codeTime),e.codeTime=setInterval((function(){r>0?(r-=1,o.codeText=r+"S后失效"):(o.codeText="重新获取验证码",clearInterval(o.codeTime),o.codeLand=!1)}),1e3),e.codeId=t.data.uuid}else e.$toast.fail(t.message),e.codeLand=!1,clearInterval(e.codeTime),e.codeText="获取验证码",e.isRegister=!1}),(function(t){e.codeLand=!1,clearInterval(e.codeTime),e.codeText="获取验证码",e.isRegister=fal}))}},destroyed:function(){clearInterval(this.codeTime),this.codeText="获取验证码"}};o("450c");v.render=g,v.__scopeId="data-v-caf6c050";var h=v,V={components:{RegisterUser:h},data:function(){return{}}};o("12e1");V.render=m,V.__scopeId="data-v-4bff3eda";t["default"]=V},"12e1":function(e,t,o){"use strict";o("cdcd")},"450c":function(e,t,o){"use strict";o("dd15")},cdcd:function(e,t,o){},dd15:function(e,t,o){}}]);
//# sourceMappingURL=register.03147adb.js.map