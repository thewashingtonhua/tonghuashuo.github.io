(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{162:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return u}),a.d(t,"query",function(){return m});var n=a(8),r=a.n(n),i=a(0),o=a.n(i),c=a(36),s=a(176),l=a(174),u=(a(179),function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).canvas=o.a.createRef(),t.draw=function(){var e=t.canvas.current;if(e.getContext){var a=e.getContext("2d");a.fillStyle="#999",a.font="18px Arial",a.fillText("This browser supports canvas.",25,100)}},t}r()(t,e);var a=t.prototype;return a.render=function(){return o.a.createElement(s.a,null,o.a.createElement(l.a,{title:"Canvas | 实验室",keywords:this.props.data.site.siteMetadata.keywords}),o.a.createElement("div",{className:"mf-content lab-item"},o.a.createElement("article",null,o.a.createElement(c.Link,{to:"/lab",className:"back"},"« Back"),o.a.createElement("h1",null,"Canvas"),o.a.createElement("canvas",{ref:this.canvas,height:"200",width:"300",style:{backgroundColor:"#DDD",marginTop:"20px"}},"Canvas is not supported on this browser"))))},a.componentDidMount=function(){this.draw()},t}(i.PureComponent)),m="3336653186"},170:function(e){e.exports={data:{site:{siteMetadata:{title:"童话说"}}}}},171:function(e,t,a){e.exports=a.p+"static/logo-8503f6989dba3ce27939964a48c8b787.png"},172:function(e,t,a){},173:function(e,t,a){},174:function(e,t,a){"use strict";var n=a(175),r=a(0),i=a.n(r),o=a(1),c=a.n(o),s=a(178),l=a.n(s),u=a(36);function m(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,c=e.title,s=e.exactTitle;return i.a.createElement(u.StaticQuery,{query:p,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:c,titleTemplate:s?"":"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:c},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:n})}m.defaultProps={lang:"zh",meta:[],keywords:[]},m.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=m;var p="1025518380"},175:function(e){e.exports={data:{site:{siteMetadata:{title:"童话说",description:"Washington Hua 的个人博客，专注大前端技术",author:"Washington Hua"}}}}},176:function(e,t,a){"use strict";var n=a(170),r=a(0),i=a.n(r),o=a(1),c=a.n(o),s=a(36),l=a(8),u=a.n(l),m=a(171),p=a.n(m),d=(a(172),function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).menus=[{to:"/blog",text:"博客"},{to:"/project",text:"代表作"},{to:"/lab",text:"实验室"},{to:"/friend",text:"朋友"},{to:"/about",text:"我"}],t.state={navMenuOpen:!1},t.toggle=function(e){e&&e.stopPropagation(),t.setState({navMenuOpen:!t.state.navMenuOpen})},t.close=function(e){e&&e.stopPropagation(),t.setState({navMenuOpen:!1})},t.isMenuActive=function(e){return e.isPartiallyCurrent?{className:"menu active"}:{className:"menu"}},t}return u()(t,e),t.prototype.render=function(){var e=this,t=this.state.navMenuOpen;return i.a.createElement(i.a.Fragment,null,i.a.createElement("header",{id:"mf-header"},i.a.createElement("div",{className:"mf-header-wrapper"},i.a.createElement(s.Link,{to:"/",className:"logo"},i.a.createElement("img",{src:p.a,alt:""}),i.a.createElement("span",null,"童话说")),i.a.createElement("div",{className:"hamberger"+(t?" open":""),onClick:this.toggle},i.a.createElement("div",{className:"bar"}),i.a.createElement("div",{className:"bar"}),i.a.createElement("div",{className:"bar"})),i.a.createElement("nav",{className:"nav-menu"+(t?" open":"")},i.a.createElement("div",{className:"menus"},this.menus.map(function(t){return i.a.createElement(s.Link,{key:t.to,to:t.to,getProps:e.isMenuActive,onClick:e.close},t.text)}))))),i.a.createElement("section",{id:"mf-header-placeholder"}))},t}(r.PureComponent)),f=(a(177),a(173),function(e){var t=e.children;return i.a.createElement(s.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(d,null),i.a.createElement("main",null,t))},data:n})});f.propTypes={children:c.a.node.isRequired};t.a=f},179:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-lab-html-5-canvas-js-54cb54ec6d8aac0e9ba5.js.map