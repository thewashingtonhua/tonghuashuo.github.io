(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{100:function(e,t){},83:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return s});var n=a(15),r=a(0),i=a.n(r),c=a(25),o=a(92),l=a(90);a(102),a(133),a(100);t.default=function(e){var t=Object(r.useState)(""),a=Object(n.a)(t,2),s=a[0],m=a[1],u=function(e){var t=navigator.onLine?"online":"offline";m(t)};return Object(r.useEffect)(function(){return u(),window.addEventListener("online",u),window.addEventListener("offline",u),function(){window.removeEventListener("online",u),window.removeEventListener("offline",u)}},[]),i.a.createElement(o.a,null,i.a.createElement(l.a,{title:"Input Type | 实验室",keywords:e.data.site.siteMetadata.keywords}),i.a.createElement("div",{className:"mf-content lab-item",id:"lab-html5-online"},i.a.createElement("article",null,i.a.createElement(c.Link,{to:"/lab",className:"back"},"« Back"),i.a.createElement("h1",null,"Online"),i.a.createElement("p",null,"Status: ",i.a.createElement("span",{id:"status",className:s},s)))))};var s="3336653186"},87:function(e,t,a){"use strict";a.d(t,"a",function(){return n});var n=!0},88:function(e){e.exports={data:{site:{siteMetadata:{title:"童话说"}}}}},89:function(e,t,a){e.exports=a.p+"static/logo-8503f6989dba3ce27939964a48c8b787.png"},90:function(e,t,a){"use strict";var n=a(91),r=a(0),i=a.n(r),c=a(98),o=a.n(c),l=a(25);t.a=function(e){var t=e.description,a=void 0===t?"":t,r=e.lang,c=void 0===r?"zh":r,m=e.meta,u=void 0===m?[]:m,d=e.keywords,p=void 0===d?[]:d,f=e.title,v=void 0===f?"":f,E=e.exactTitle,b=void 0!==E&&E;return i.a.createElement(l.StaticQuery,{query:s,render:function(e){var t=a||e.site.siteMetadata.description;return i.a.createElement(o.a,{htmlAttributes:{lang:c},title:v,titleTemplate:b?"":"%s | ".concat(e.site.siteMetadata.title),meta:[{name:"description",content:t},{property:"og:title",content:v},{property:"og:description",content:t},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:v},{name:"twitter:description",content:t}].concat(p.length>0?{name:"keywords",content:p.join(",")}:[]).concat(u)})},data:n})};var s="1025518380"},91:function(e){e.exports={data:{site:{siteMetadata:{title:"童话说",description:"Washington Hua 的个人博客，专注大前端技术",author:"Washington Hua"}}}}},92:function(e,t,a){"use strict";var n=a(88),r=a(0),i=a.n(r),c=a(25),o=a(142),l=(a(95),a(96),a(15)),s=a(89),m=a.n(s),u=(a(97),[{to:"/blog",text:"博客"},{to:"/project",text:"代表作"},{to:"/lab",text:"实验室"},{to:"/friend",text:"朋友"},{to:"/about",text:"我"}]),d=function(){var e=Object(r.useState)(!1),t=Object(l.a)(e,2),a=t[0],n=t[1];function o(e){e&&e.stopPropagation(),n(!1)}function s(e){return e.isPartiallyCurrent?{className:"menu-link active"}:{className:"menu-link"}}return i.a.createElement(i.a.Fragment,null,i.a.createElement("header",{id:"mf-header"},i.a.createElement("div",{className:"mf-header-wrapper"},i.a.createElement(c.Link,{to:"/",className:"logo"},i.a.createElement("img",{src:m.a,alt:""}),i.a.createElement("span",null,"童话说")),i.a.createElement("div",{className:"hamberger"+(a?" open":""),onClick:function(e){e&&e.stopPropagation(),n(!a)}},i.a.createElement("div",{className:"bar"}),i.a.createElement("div",{className:"bar"}),i.a.createElement("div",{className:"bar"})),i.a.createElement("nav",{className:"nav-menu"+(a?" open":"")},i.a.createElement("ul",{className:"menus"},u.map(function(e){return i.a.createElement("li",{className:"menu",key:e.to},i.a.createElement(c.Link,{to:e.to,getProps:s,onClick:o},e.text))}))))),i.a.createElement("section",{id:"mf-header-placeholder"}))};a(87).a&&o.a({dsn:"https://9638de4372be4acebf892d0732a86a4a@sentry.io/1450204"});t.a=function(e){var t=e.children;return i.a.createElement(c.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(d,null),i.a.createElement("main",null,t))},data:n})}}}]);
//# sourceMappingURL=component---src-pages-lab-html-5-online-js-247818da55383e9994ab.js.map