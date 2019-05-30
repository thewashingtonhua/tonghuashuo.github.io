(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{164:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return u}),a.d(t,"query",function(){return d});var n=a(8),r=a.n(n),o=a(0),c=a.n(o),i=a(55),l=a(174),s=a(172),u=(a(179),function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={latitude:null,longitude:null,accuracy:null,altitude:null,altitudeAccuracy:null,heading:null,speed:null,error:""},t}r()(t,e);var a=t.prototype;return a.render=function(){var e=this.state,t=e.latitude,a=e.longitude,n=e.accuracy,r=e.altitude,o=e.altitudeAccuracy,u=e.heading,d=e.speed,m=e.error;return c.a.createElement(l.a,null,c.a.createElement(s.a,{title:"Geolocation | 实验室",keywords:this.props.data.site.siteMetadata.keywords}),c.a.createElement("div",{className:"mf-content lab-item"},c.a.createElement("article",null,c.a.createElement(i.Link,{to:"/lab",className:"back"},"« Back"),c.a.createElement("h1",null,"Geolocation"),c.a.createElement("p",null,"Latitude: ",t),c.a.createElement("p",null,"Longtitude: ",a),c.a.createElement("p",null,"Accuracy: ",n),c.a.createElement("p",null,"Altitude: ",r),c.a.createElement("p",null,"Altitude Accuracy: ",o),c.a.createElement("p",null,"Heading: ",u),c.a.createElement("p",null,"Speed: ",d),c.a.createElement("p",{id:"error"},m))))},a.componentDidMount=function(){var e=this;navigator.geolocation?navigator.geolocation.getCurrentPosition(function(t){var a={latitude:t.coords.latitude,longitude:t.coords.longitude,accuracy:t.coords.accuracy,altitude:t.coords.altitude,altitudeAccuracy:t.coords.altitudeAccuracy,heading:t.coords.heading,speed:t.coords.speed};e.setState(a)},function(t){e.setState({error:"[Error] "+{1:"service denied",2:"cannot access geolocation info",3:"timeout"}[t.code]})},{enableHighAcuracy:!0}):this.setState({error:"[Error] Geolocation is not supported on this browser."})},t}(o.PureComponent)),d="3336653186"},170:function(e){e.exports={data:{site:{siteMetadata:{title:"童话说"}}}}},171:function(e,t,a){e.exports=a.p+"static/logo-8503f6989dba3ce27939964a48c8b787.png"},172:function(e,t,a){"use strict";var n=a(173),r=a(0),o=a.n(r),c=a(1),i=a.n(c),l=a(178),s=a.n(l),u=a(55);function d(e){var t=e.description,a=e.lang,r=e.meta,c=e.keywords,i=e.title,l=e.exactTitle;return o.a.createElement(u.StaticQuery,{query:m,render:function(e){var n=t||e.site.siteMetadata.description;return o.a.createElement(s.a,{htmlAttributes:{lang:a},title:i,titleTemplate:l?"":"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:i},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:n}].concat(c.length>0?{name:"keywords",content:c.join(", ")}:[]).concat(r)})},data:n})}d.defaultProps={lang:"zh",meta:[],keywords:[]},d.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.array,keywords:i.a.arrayOf(i.a.string),title:i.a.string.isRequired},t.a=d;var m="1025518380"},173:function(e){e.exports={data:{site:{siteMetadata:{title:"童话说",description:"Washington Hua 的个人博客，专注大前端技术",author:"Washington Hua"}}}}},174:function(e,t,a){"use strict";var n=a(170),r=a(0),o=a.n(r),c=a(1),i=a.n(c),l=a(55),s=a(8),u=a.n(s),d=a(171),m=a.n(d),p=(a(175),function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).menus=[{to:"/blog",text:"博客"},{to:"/project",text:"代表作"},{to:"/lab",text:"实验室"},{to:"/friend",text:"朋友"},{to:"/about",text:"我"}],t.state={navMenuOpen:!1},t.toggle=function(e){e&&e.stopPropagation(),t.setState({navMenuOpen:!t.state.navMenuOpen})},t.close=function(e){e&&e.stopPropagation(),t.setState({navMenuOpen:!1})},t.isMenuActive=function(e){return e.isPartiallyCurrent?{className:"menu active"}:{className:"menu"}},t}return u()(t,e),t.prototype.render=function(){var e=this,t=this.state.navMenuOpen;return o.a.createElement(o.a.Fragment,null,o.a.createElement("header",{id:"mf-header"},o.a.createElement("div",{className:"mf-header-wrapper"},o.a.createElement(l.Link,{to:"/",className:"logo"},o.a.createElement("img",{src:m.a,alt:""}),o.a.createElement("span",null,"童话说")),o.a.createElement("div",{className:"hamberger"+(t?" open":""),onClick:this.toggle},o.a.createElement("div",{className:"bar"}),o.a.createElement("div",{className:"bar"}),o.a.createElement("div",{className:"bar"})),o.a.createElement("nav",{className:"nav-menu"+(t?" open":"")},o.a.createElement("div",{className:"menus"},this.menus.map(function(t){return o.a.createElement(l.Link,{key:t.to,to:t.to,getProps:e.isMenuActive,onClick:e.close},t.text)}))))),o.a.createElement("section",{id:"mf-header-placeholder"}))},t}(r.PureComponent)),g=(a(176),a(177),function(e){var t=e.children;return o.a.createElement(l.StaticQuery,{query:"755544856",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(p,null),o.a.createElement("main",null,t))},data:n})});g.propTypes={children:i.a.node.isRequired};t.a=g}}]);
//# sourceMappingURL=component---src-pages-lab-html-5-geolocation-js-77e2c41d5c4234b633e6.js.map