(function(e){function t(t){for(var n,i,o=t[0],u=t[1],s=t[2],d=0,b=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&b.push(c[i][0]),c[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);l&&l(t);while(b.length)b.shift()();return r.push.apply(r,s||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,o=1;o<a.length;o++){var u=a[o];0!==c[u]&&(n=!1)}n&&(r.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},c={app:0},r=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var s=0;s<o.length;s++)t(o[s]);var l=u;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"02b5":function(e,t,a){"use strict";a("4d4d")},"0397":function(e,t,a){},"320f":function(e,t,a){"use strict";a("73d5")},"3cc2":function(e,t,a){"use strict";a("64e5")},"4d4d":function(e,t,a){},5654:function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("7a23"),c=a("ecee"),r=a("c074"),i=a("ad3d");function o(e,t,a,c,r,i){var o=Object(n["w"])("router-view");return Object(n["p"])(),Object(n["d"])(o)}a("64be");const u={};u.render=o;var s=u,l=a("6c02");function d(e,t,a,c,r,i){var o=Object(n["w"])("Masthead"),u=Object(n["w"])("RecipeList");return Object(n["p"])(),Object(n["d"])(n["a"],null,[Object(n["g"])(o),r.loading?Object(n["e"])("",!0):(Object(n["p"])(),Object(n["d"])(u,{key:0}))],64)}var b=Object(n["D"])("data-v-7db00504");Object(n["s"])("data-v-7db00504");var p=Object(n["g"])("div",{class:"title-ctr"},[Object(n["g"])("h1",null,"Great British Bake-off Recipes"),Object(n["g"])("p",null,"The Unofficial Online Recipe Book for your Favorite Show!")],-1);Object(n["q"])();var O=b((function(e,t,a,c,r,i){var o=Object(n["w"])("NavBar");return Object(n["p"])(),Object(n["d"])(n["a"],null,[p,Object(n["g"])(o)],64)})),j=(a("b0c0"),Object(n["D"])("data-v-621a5662"));Object(n["s"])("data-v-621a5662");var v={class:"nav-ctr"},f={class:"nav-items"},g={class:"auth-ctr"},h={key:0,class:"auth-items"},m={class:"auth-greeting"},y={key:1,class:"auth-items"},w=Object(n["g"])("div",{class:"auth-greeting"},null,-1);Object(n["q"])();var _=j((function(e,t,a,c,r,i){var o=Object(n["w"])("NavItem");return Object(n["p"])(),Object(n["d"])("div",v,[Object(n["g"])("div",f,[(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["v"])(r.items,(function(e){return Object(n["p"])(),Object(n["d"])(o,{key:e.key,name:e.name,path:e.path},null,8,["name","path"])})),128))]),Object(n["g"])("div",g,[e.$api.isAuthenticated()?(Object(n["p"])(),Object(n["d"])("div",h,[Object(n["g"])("button",{onClick:t[1]||(t[1]=function(){return i.logout.apply(i,arguments)})},"Logout"),Object(n["g"])("div",m,"Hello, "+Object(n["y"])(i.userName)+".",1)])):(Object(n["p"])(),Object(n["d"])("div",y,[Object(n["g"])("button",{onClick:t[2]||(t[2]=function(){return i.login.apply(i,arguments)})},"Login"),w]))])])})),k=Object(n["D"])("data-v-35a1429a"),D=k((function(e,t,a,c,r,i){var o=Object(n["w"])("router-link");return Object(n["p"])(),Object(n["d"])(o,{class:"nav-link",to:a.path},{default:k((function(){return[Object(n["f"])(Object(n["y"])(a.name),1)]})),_:1},8,["to"])})),I={name:"NavItem",props:{name:{type:String,required:!0},path:{type:String,required:!0}},methods:{navToPath:function(){this.$router.push({name:this.path})}},computed:{isActive:function(){return this.$route.name===this.name}}};a("02b5");I.render=D,I.__scopeId="data-v-35a1429a";var C=I,S={name:"NavBar",components:{NavItem:C},data:function(){return{items:[{name:"Home",key:"home-link",path:"/"},{name:"About",key:"about-link",path:"/about"},{name:"Favorites",key:"favorites-link",path:"/favorites"},{name:"Cart",key:"cart-link",path:"/cart"}]}},methods:{login:function(){this.$api.login()},logout:function(){this.$api.logout()}},computed:{userName:function(){return this.$api.getUser().name}}};a("9730");S.render=_,S.__scopeId="data-v-621a5662";var R=S,M={name:"MastHead",components:{NavBar:R}};a("320f");M.render=O,M.__scopeId="data-v-7db00504";var q=M,N=Object(n["D"])("data-v-020e9a99");Object(n["s"])("data-v-020e9a99");var $={key:0,class:"recipe-list-ctr"},P={class:"categories-ctr"},x=Object(n["g"])("h4",{class:"section-header"},"Categories",-1),A={key:0,class:"recipes-ctr"},F={key:1,class:"empty-recipes-ctr"},T=Object(n["g"])("h3",null,"No recipes match that query! Please adjust filter settings.",-1);Object(n["q"])();var B=N((function(e,t,a,c,r,i){var o=Object(n["w"])("RecipeCard");return r.loading?Object(n["e"])("",!0):(Object(n["p"])(),Object(n["d"])("div",$,[Object(n["g"])("div",P,[x,(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["v"])(i.allCategories,(function(e){return Object(n["p"])(),Object(n["d"])("span",{key:e},[Object(n["C"])(Object(n["g"])("input",{type:"checkbox",class:"category-checkbox",id:e,value:e,"onUpdate:modelValue":t[1]||(t[1]=function(e){return r.selectedCategories=e})},null,8,["id","value"]),[[n["A"],r.selectedCategories]]),Object(n["g"])("label",{class:"category-label",for:e},Object(n["y"])(e),9,["for"])])})),128))]),i.filteredRecipes.length?(Object(n["p"])(),Object(n["d"])("div",A,[(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["v"])(i.filteredRecipes,(function(e){return Object(n["p"])(),Object(n["d"])(o,{key:e.sku,recipeData:e,mini:!0},null,8,["recipeData"])})),128))])):(Object(n["p"])(),Object(n["d"])("div",F,[T]))]))})),H=(a("4de4"),a("0481"),a("4160"),a("a630"),a("caad"),a("45fc"),a("4069"),a("d3b7"),a("ac1f"),a("6062"),a("2532"),a("3ca3"),a("1276"),a("159b"),a("ddb0"),a("a4d3"),a("e01a"),Object(n["D"])("data-v-5e13cc39"));Object(n["s"])("data-v-5e13cc39");var L={class:"card-content"},U={key:0,class:"card-section"},J={class:"ingredients-ctr"},z=Object(n["g"])("h4",null,"Ingredients",-1),E={class:"directions-ctr"},G=Object(n["g"])("h4",null,"Directions",-1),V={class:"card-icons"};Object(n["q"])();var K=H((function(e,t,a,c,r,i){var o=Object(n["w"])("font-awesome-icon");return Object(n["p"])(),Object(n["d"])("div",{class:"card",onClick:t[1]||(t[1]=function(){return i.navToItemDetail.apply(i,arguments)})},[Object(n["g"])("img",{class:"card-img",src:a.recipeData.src,alt:a.recipeData.name},null,8,["src","alt"]),Object(n["g"])("div",L,[Object(n["g"])("h3",null,Object(n["y"])(a.recipeData.name),1),Object(n["g"])("p",null,Object(n["y"])(a.recipeData.description),1),a.mini?Object(n["e"])("",!0):(Object(n["p"])(),Object(n["d"])("div",U,[Object(n["g"])("div",J,[z,Object(n["g"])("ul",null,[(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["v"])(i.ingredients,(function(e){return Object(n["p"])(),Object(n["d"])("li",{key:e},Object(n["y"])(e),1)})),128))])]),Object(n["g"])("div",E,[G,Object(n["f"])(" "+Object(n["y"])(a.recipeData.directions),1)])]))]),Object(n["g"])("div",V,[Object(n["g"])(o,{icon:"heart",class:"test"}),Object(n["g"])(o,{icon:"shopping-cart",class:"test"})])])})),Q={name:"RecipeCard",props:{recipeData:{type:Object,required:!0},mini:{type:Boolean,required:!1,default:!1}},computed:{ingredients:function(){return this.recipeData.ingredients.split(",")}},methods:{navToItemDetail:function(){this.$router.push({name:"RecipeDetail",params:{id:this.recipeData.id}})}}};a("3cc2");Q.render=K,Q.__scopeId="data-v-5e13cc39";var W=Q,X={name:"RecipeList",components:{RecipeCard:W},data:function(){return{loading:!1,recipes:null,selectedCategories:[]}},computed:{filteredRecipes:function(){var e=this,t=this.recipes.filter((function(t){var a=t.categories.split(","),n=e.selectedCategories;return a.some((function(e){return n.includes(e)}))}));return t},allCategories:function(){var e=[];return this.recipes&&this.recipes.forEach((function(t){var a=t.categories.split(",");e.push(a)})),Array.from(new Set(e.flat()))}},created:function(){this.loading=!0},mounted:function(){var e=this;this.$api.getRecipe().then((function(t){return e.recipes=t})).then((function(){return e.selectedCategories=e.allCategories})).then((function(){return e.loading=!1}))}};a("f8be");X.render=B,X.__scopeId="data-v-020e9a99";var Y=X,Z={name:"Home",components:{Masthead:q,RecipeList:Y},data:function(){return{loading:!1}},created:function(){this.loading=!0},mounted:function(){this.loading=!1}};Z.render=d;var ee=Z,te=Object(n["g"])("div",{class:"about"},[Object(n["g"])("h1",null,"This is an about page")],-1);function ae(e,t,a,c,r,i){var o=Object(n["w"])("Masthead");return Object(n["p"])(),Object(n["d"])(n["a"],null,[Object(n["g"])(o),te],64)}var ne={name:"Home",components:{Masthead:q}};ne.render=ae;var ce=ne,re=Object(n["D"])("data-v-59d001b1");Object(n["s"])("data-v-59d001b1");var ie=Object(n["g"])("h1",null,"Favorites",-1);Object(n["q"])();var oe=re((function(e,t,a,c,r,i){var o=Object(n["w"])("Masthead");return Object(n["p"])(),Object(n["d"])(n["a"],null,[Object(n["g"])(o),ie],64)})),ue={name:"Favorites",components:{Masthead:q}};ue.render=oe,ue.__scopeId="data-v-59d001b1";var se=ue,le=Object(n["D"])("data-v-75ea6bf4");Object(n["s"])("data-v-75ea6bf4");var de=Object(n["g"])("h1",null,"Cart",-1);Object(n["q"])();var be=le((function(e,t,a,c,r,i){var o=Object(n["w"])("Masthead");return Object(n["p"])(),Object(n["d"])(n["a"],null,[Object(n["g"])(o),de],64)})),pe={name:"Cart",components:{Masthead:q}};pe.render=be,pe.__scopeId="data-v-75ea6bf4";var Oe=pe,je=Object(n["D"])("data-v-75b3a936");Object(n["s"])("data-v-75b3a936");var ve={class:"detail-ctr"};Object(n["q"])();var fe=je((function(e,t,a,c,r,i){var o=Object(n["w"])("Masthead"),u=Object(n["w"])("RecipeCard");return Object(n["p"])(),Object(n["d"])(n["a"],null,[Object(n["g"])(o),Object(n["g"])("div",ve,[r.loading?Object(n["e"])("",!0):(Object(n["p"])(),Object(n["d"])(u,{key:0,recipeData:r.recipe,mini:!1},null,8,["recipeData"]))])],64)})),ge={name:"recipeDetail",components:{Masthead:q,RecipeCard:W},props:{id:String},data:function(){return{loading:!1,recipe:{}}},created:function(){this.loading=!0},mounted:function(){var e=this;this.$api.getRecipe(this.id).then((function(t){return e.recipe=t})).then((function(){return e.$nextTick((function(){return e.loading=!1}))}))}};a("af0a");ge.render=fe,ge.__scopeId="data-v-75b3a936";var he=ge;function me(e,t,a,c,r,i){return Object(n["p"])(),Object(n["d"])("h1",null,"Not Found")}var ye={name:"NotFound"};ye.render=me;var we=ye,_e=[{path:"/",name:"Home",component:ee},{path:"/about",name:"About",component:ce},{path:"/favorites",name:"Favorites",component:se},{path:"/Cart",name:"Cart",component:Oe},{path:"/recipe-detail/:id",name:"RecipeDetail",component:he,props:!0},{path:"/404",name:"NotFound",component:we},{path:"/:pathMatch(.*)*",name:"not-found",component:we}],ke=Object(l["a"])({history:Object(l["b"])("/"),routes:_e}),De=ke,Ie=a("d4ec"),Ce=a("bee2"),Se=a("bc3a"),Re=a.n(Se),Me=function(){function e(){Object(Ie["a"])(this,e)}return Object(Ce["a"])(e,[{key:"getRecipe",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t="http://e28-api.vueserver.com/recipe";return e&&(t+="/".concat(e)),Re.a.get(t).then((function(e){return e.data.recipe}))}},{key:"isAuthenticated",value:function(){var e=window.localStorage.getItem("gb_auth_token"),t=window.localStorage.getItem("gb_auth_name"),a=window.localStorage.getItem("gb_auth_email");return e&&t&&a}},{key:"getUser",value:function(){if(this.isAuthenticated()){var e=window.localStorage.getItem("gb_auth_name"),t=window.localStorage.getItem("gb_auth_email");return{name:e,email:t}}return null}},{key:"login",value:function(){var e="http://e28-api.vueserver.com/login",t={email:"jill@harvard.edu",password:"asdfasdf"};Re.a.post(e,t).then((function(e){var t=e.data,a=t.token,n=t.user,c=n.name,r=n.email;window.localStorage.setItem("gb_auth_token",a),window.localStorage.setItem("gb_auth_name",c),window.localStorage.setItem("gb_auth_email",r)})).catch((function(e){return console.error(e)}))}},{key:"logout",value:function(){var e="http://e28-api.vueserver.com/logout",t=window.localStorage.getItem("gb_auth_token");Re.a.post(e,{headers:{Authorization:"bearer ".concat(t)}}).then((function(){window.localStorage.removeItem("gb_auth_token"),window.localStorage.removeItem("gb_auth_name"),window.localStorage.removeItem("gb_auth_email")})).catch((function(e){return console.error(e)}))}}]),e}();a("f5df1"),a("0397");c["c"].add(r["a"]),c["c"].add(r["b"]);var qe=new Me,Ne=Object(n["c"])(s);Ne.config.globalProperties.$api=qe,Ne.component("font-awesome-icon",i["a"]),Ne.use(De).mount("#app")},"5f80":function(e,t,a){},"64be":function(e,t,a){"use strict";a("c894")},"64e5":function(e,t,a){},6807:function(e,t,a){},"73d5":function(e,t,a){},9730:function(e,t,a){"use strict";a("5f80")},af0a:function(e,t,a){"use strict";a("5654")},c894:function(e,t,a){},f8be:function(e,t,a){"use strict";a("6807")}});
//# sourceMappingURL=app.4e7cdf0a.js.map