(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{164:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return s}),a.d(t,"query",function(){return u});var n=a(8),r=a.n(n),l=a(0),i=a.n(l),c=a(36),o=a(176),m=a(174),s=(a(180),a(216),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement(o.a,null,i.a.createElement(m.a,{title:"Input Type | 实验室",keywords:this.props.data.site.siteMetadata.keywords}),i.a.createElement("div",{className:"mf-content lab-item",id:"lab-html5-input"},i.a.createElement("article",null,i.a.createElement(c.Link,{to:"/lab",className:"back"},"« Back"),i.a.createElement("h1",null,"Input"),i.a.createElement("label",{htmlFor:"text"},"text"),i.a.createElement("input",{type:"text",name:"text",id:"text",placeholder:"text"}),">",i.a.createElement("label",{htmlFor:"password"},"password"),i.a.createElement("input",{type:"password",name:"password",id:"password",placeholder:"password"}),i.a.createElement("label",{htmlFor:"tel"},"tel"),i.a.createElement("input",{type:"tel",name:"tel",id:"tel",placeholder:"tel"}),i.a.createElement("label",{htmlFor:"email"},"email"),i.a.createElement("input",{type:"email",name:"email",id:"email",placeholder:"email"}),i.a.createElement("label",{htmlFor:"file"},"file"),i.a.createElement("input",{type:"file",name:"file",id:"file",placeholder:"file"}),i.a.createElement("label",{htmlFor:"date"},"date"),i.a.createElement("input",{type:"date",name:"date",id:"date",placeholder:"date"}),i.a.createElement("label",{htmlFor:"datetime"},"datetime"),i.a.createElement("input",{type:"datetime",name:"datetime",id:"datetime",placeholder:"datetime"}),i.a.createElement("label",{htmlFor:"number"},"number"),i.a.createElement("input",{type:"number",name:"number",id:"number",placeholder:"number"}),i.a.createElement("label",{htmlFor:"url"},"url"),i.a.createElement("input",{type:"url",name:"url",id:"url",placeholder:"url"}),i.a.createElement("label",{htmlFor:"search"},"search"),i.a.createElement("input",{type:"search",name:"search",id:"search",placeholder:"search"}),i.a.createElement("label",{htmlFor:"range"},"range"),i.a.createElement("input",{type:"range",name:"range",id:"range",placeholder:"range"}),i.a.createElement("label",{htmlFor:"color"},"color"),i.a.createElement("input",{type:"color",name:"color",id:"color",placeholder:"color"}))))},t}(l.PureComponent)),u="3336653186"},169:function(e){e.exports={data:{site:{siteMetadata:{title:"童话说"}}}}},170:function(e,t,a){e.exports=a.p+"static/logo-8503f6989dba3ce27939964a48c8b787.png"},171:function(e,t,a){},172:function(e,t,a){},173:function(e,t,a){},174:function(e,t,a){"use strict";var n=a(175),r=a(0),l=a.n(r),i=a(1),c=a.n(i),o=a(179),m=a.n(o),s=a(36);function u(e){var t=e.description,a=e.lang,r=e.meta,i=e.keywords,c=e.title;return l.a.createElement(s.StaticQuery,{query:p,render:function(e){var n=t||e.site.siteMetadata.description;return l.a.createElement(m.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:c},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:n}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})},data:n})}u.defaultProps={lang:"zh",meta:[],keywords:[]},u.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=u;var p="1025518380"},175:function(e){e.exports={data:{site:{siteMetadata:{title:"童话说",description:"Washington Hua 的个人博客，专注大前端技术",author:"Washington Hua"}}}}},176:function(e,t,a){"use strict";var n=a(169),r=a(0),l=a.n(r),i=a(1),c=a.n(i),o=a(36),m=a(8),s=a.n(m),u=a(170),p=a.n(u),d=(a(171),function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).menus=[{to:"/blog",text:"博客"},{to:"/project",text:"代表作"},{to:"/lab",text:"实验室"},{to:"/friend",text:"朋友"},{to:"/about",text:"我"}],t.state={navMenuOpen:!1},t.toggle=function(e){e&&e.stopPropagation(),t.setState({navMenuOpen:!t.state.navMenuOpen})},t.close=function(e){e&&e.stopPropagation(),t.setState({navMenuOpen:!1})},t.isMenuActive=function(e){return e.isPartiallyCurrent?{className:"menu active"}:{className:"menu"}},t}return s()(t,e),t.prototype.render=function(){var e=this,t=this.state.navMenuOpen;return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{id:"mf-header"},l.a.createElement("div",{className:"mf-header-wrapper"},l.a.createElement(o.Link,{to:"/",className:"logo"},l.a.createElement("img",{src:p.a,alt:""}),l.a.createElement("span",null,"童话说")),l.a.createElement("div",{className:"hamberger"+(t?" open":""),onClick:this.toggle},l.a.createElement("div",{className:"bar"}),l.a.createElement("div",{className:"bar"}),l.a.createElement("div",{className:"bar"})),l.a.createElement("nav",{className:"nav-menu"+(t?" open":"")},l.a.createElement("div",{className:"menus"},this.menus.map(function(t){return l.a.createElement(o.Link,{key:t.to,to:t.to,getProps:e.isMenuActive,onClick:e.close},t.text)}))))),l.a.createElement("section",{id:"mf-header-placeholder"}))},t}(r.PureComponent)),h=(a(177),a(178),a(172),a(173),function(e){var t=e.children;return l.a.createElement(o.StaticQuery,{query:"755544856",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(d,null),l.a.createElement("main",null,t))},data:n})});h.propTypes={children:c.a.node.isRequired};t.a=h},180:function(e,t,a){},216:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-lab-html-5-input-js-6f0a119aec1e7c492857.js.map