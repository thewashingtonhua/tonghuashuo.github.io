(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{100:function(e,t){},77:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return c});var r=n(15),i=n(0),a=n.n(i),s=n(25),d=n(92),o=n(90);n(102),n(100);t.default=function(e){var t=Object(i.useState)(""),n=Object(r.a)(t,2),c=n[0],m=n[1],l=Object(i.useState)(""),u=Object(r.a)(l,2),b=u[0],f=u[1],h=Object(i.useState)(""),w=Object(r.a)(h,2),x=w[0],O=w[1],p=Object(i.useState)(""),g=Object(r.a)(p,2),E=g[0],v=g[1],B=Object(i.useState)(""),k=Object(r.a)(B,2),y=k[0],C=k[1],S=function(e,t){var n="";if(e.indexOf("qqbrowser")>-1&&(n=e.match(/qqbrowser\/\d+(.\d+)+/)[0].substr(10),e.indexOf("mobile")>-1&&(n+="(mobile)"),t="QQ Browser "+n+" / Chrome "+e.match(/chrome\/\d+(.\d+)+/)[0].substr(7)),e.indexOf("micromessenger")>-1&&(t="WeiXin "+e.match(/micromessenger\/\d+(.\d+)+/)[0].substr(15)+" / wekit "+e.match(/webkit\/\d+(.\d+)+/)[0].substr(7)),e.indexOf("qq/")>-1&&(t="QQ "+e.match(/qq\/\d+(.\d+)+/)[0].substr(3)+" / wekit "+e.match(/webkit\/\d+(.\d+)+/)[0].substr(7)),e.indexOf("miui")>-1&&(t="XiaoMi MIUI Browser "+n+" / Chrome "+e.match(/chrome\/\d+(.\d+)+/)[0].substr(7)),e.indexOf("ucbrowser")>-1||e.indexOf(" ubrowser")>-1)if(n=e.match(/browser\/\d+(.\d+)+/)[0].substr(8),e.indexOf("mobile")>-1){n+=" (mobile)";var r=e.match(/u\d\/\d+(.\d+)+/),i="";r&&(i=r[0].substr(1).replace("/"," ")),t="UC Browser "+n+" / U"+i}else e.indexOf("chrome")>-1?t="UC Browser "+n+" / Chrome "+e.match(/chrome\/\d+(.\d+)+/)[0].substr(7):e.indexOf("edge")>-1?t="UC Browser "+n+" / edge "+e.match(/edge\/\d+(.\d+)+/)[0].substr(5):e.indexOf("msie")>-1?t="UC Browser "+n+" / IE "+e.match(/msie\s\d+/)[0].substr(5):e.indexOf("trident")>-1&&(t="UC Browser "+n+" / IE 11");return(e.indexOf("sogou")>-1||e.indexOf(" se ")>-1)&&(e.indexOf("mobile")>-1?(n=e.match(/browser\/\d+(.\d+)+/)[0].substr(8),t="Sogou Browser "+(n+=" (mobile)")+" / Webkit "+e.match(/webkit\/\d+(.\d+)+/)[0].substr(7)):e.indexOf("chrome")>-1?t="Sogou Browser / Chrome "+e.match(/chrome\/\d+(.\d+)+/)[0].substr(7):e.indexOf("edge")>-1?t="Sogou Browser / edge "+e.match(/edge\/\d+(.\d+)+/)[0].substr(5):e.indexOf("msie")>-1?t="Sogou Browser / IE "+e.match(/msie\s\d+/)[0].substr(5):e.indexOf("trident")>-1&&(t="Sogou Browser / IE 11")),e.indexOf("360 aphone browser")>-1&&(n=e.match(/browser\s\(\d+(.\d+)+\)/)[0].toString().slice(9,-1),e.indexOf("mobile")>-1&&(n+=" (mobile)"),t="360 Browser "+n+" / Chrome "+e.match(/chrome\/\d+(.\d+)+/)[0].substr(7)),e.indexOf("lbbrowser")>-1&&(t="LieBao Browser / Chrome "+e.match(/chrome\/\d+(.\d+)+/)[0].substr(7)),e.indexOf("liebao")>-1&&(n=e.match(/liebaofast\/\d+(.\d+)+/)[0].substr(10),e.indexOf("mobile")>-1&&(n+=" (mobile)"),t="LieBao Fast Browser "+n+" / Chrome "+e.match(/chrome\/\d+(.\d+)+/)[0].substr(7)),e.indexOf("bidu")>-1&&(e.indexOf("chrome")>-1?t="Baidu Browser "+(n=e.match(/browser\/\d+(.\d+)+/)[0].substr(8))+" / Chrome "+e.match(/chrome\/\d+(.\d+)+/)[0].substr(7):e.indexOf("edge")>-1?t="Baidu Browser "+(n=e.match(/browser\s\d+(.\d+)+/)[0].substr(8))+" / edge "+e.match(/edge\/\d+(.\d+)+/)[0].substr(5):e.indexOf("msie")>-1?t="Baidu Browser "+(n=e.match(/browser\s\d+(.\d+)+/)[0].substr(8))+" / IE "+e.match(/msie\s\d+/)[0].substr(5):e.indexOf("trident")>-1&&(t="Baidu Browser "+(n=e.match(/browser\s\d+(.\d+)+/)[0].substr(8))+" / IE 11")),e.indexOf("baidu")>-1&&(n=e.match(/browser\/\d+(.\d+)+/)[0].substr(8),e.indexOf("mobile")>-1&&(n+=" (mobile)"),t="Baidu Browser "+n+" / Chrome "+e.match(/chrome\/\d+(.\d+)+/)[0].substr(7)),e.indexOf("maxthon")>-1&&(n=e.match(/maxthon\/\d+(.\d+)+/)[0].substr(8),e.indexOf("mobile")>-1&&(n+=" (mobile)"),t="Maxthon "+n+" / Chrome "+e.match(/chrome\/\d+(.\d+)+/)[0].substr(7)),e.indexOf("mxbrowser")>-1&&(n=e.match(/mxbrowser\/\d+(.\d+)+/)[0].substr(10),e.indexOf("mobile")>-1&&(n+=" (mobile)"),t="Maxthon "+n+" / Chrome "+e.match(/chrome\/\d+(.\d+)+/)[0].substr(7)),e.indexOf("dolphin")>-1&&(t="Dolphin Browser "+(n=e.match(/dolphinbrowsercn\/\d+(.\d+)+/)[0].substr(17))+" / Chrome "+e.match(/chrome\/\d+(.\d+)+/)[0].substr(7)),e.indexOf("theworld")>-1&&(n=e.match(/theworld\s\d+/)[0].substr(8),e.indexOf("mobile")>-1&&(n+=" (mobile)"),t="The World "+n+" / wekit "+e.match(/webkit\/\d+(.\d+)+/)[0].substr(7)),t};return Object(i.useEffect)(function(){if(window.navigator){var e=window.navigator,t=e.userAgent,n=e.platform;try{m(function(e){var t="Unknown",n="";return e.indexOf("edge")>-1?t="Microsoft Edge "+(n=e.match(/edge\/\d+(.\d+)+/)[0].substr(5)):e.indexOf("edgios")>-1?t="Edge for iOS "+e.match(/edgios\/\d+(.\d+)+/)[0].substr(7):e.indexOf("msie")>-1?t="IE "+(n=e.match(/msie\s\d+/)[0].substr(5)):e.indexOf("trident")>-1?t="IE 11":e.indexOf("firefox")>-1?(n=e.match(/firefox\/\d+(.\d+)+/)[0].substr(8),e.indexOf("mobile")>-1&&(n+=" (mobile)"),t="Firefox "+n):e.indexOf("opera")>-1?(n=e.match(/opera\/\d+(.\d+)+/)[0].substr(6),Number(n)>=9.8&&(n=e.match(/version\/\d+(.\d+)+/)[0].substr(8)),e.indexOf("mini")>-1&&(n="mini "+e.match(/mini\/\d+(.\d+)+/)[0].substr(5)),t="Opera "+n):e.indexOf("opr")>-1?(n=e.match(/opr\/\d+(.\d+)+/)[0].substr(4),e.indexOf("dev")>-1?n+=" (edition developer)":e.indexOf("beta")>-1&&(n+=" (edition beta)"),e.indexOf("mobile")>-1&&(n+=" (mobile)"),t="Opera "+n):e.indexOf("chrome")>-1?(n=e.match(/chrome\/\d+(.\d+)+/)[0].substr(7),e.indexOf("mobile")>-1&&(n+=" (mobile)"),t="Chrome "+n):e.indexOf("safari")>-1&&(t=e.indexOf("blackberry")>-1||e.indexOf("bb10")>-1||e.indexOf("playbook")>-1?"BlackBerry built-in / Webkit "+e.match(/webkit\/\d+(.\d+)+/)[0].substr(7):"Safari "+(n=e.match(/safari\/\d+(.\d+)+/)[0].substr(7))),t=S(e,t)}(t.toLowerCase())),f(function(e,t){var n="Unknown OS",r="Win32"===t||"Windows"===t,i="Mac68K"===t||"MacPPC"===t||"Macintosh"===t||"MacIntel"===t,a="X11"===t&&!r&&!i,s=t.toLowerCase().indexOf("linux")>-1||e.indexOf("linux")>-1,d=e.indexOf("android")>-1,o=e.indexOf("iphone")>-1,c=e.indexOf("ipod")>-1,m=e.indexOf("ipad")>-1,l=o||m||c,u=e.indexOf("windows phone")>-1,b=e.indexOf("xbox")>-1,f=e.indexOf("blackberry")>-1||e.indexOf("bb10")>-1||e.indexOf("playbook")>-1,h=e.indexOf("meego")>-1,w=e.indexOf("symbian")>-1;if(i){n="Mac";var x=e.match(/mac\sos\sx\s[0-9]{1,2}(_[0-9]{1,2})+/);return x&&x.length&&(n=n+" "+x[0].replace(/mac\sos\sx\s/,"").replace(/_/g,".")),n}if(a)return n="Unix";if(s&&!d)return n="Linux",e.indexOf("kf")>-1&&(n+="/Amazon Kindle"),n;if(r)return n="Windows",e.indexOf("windows nt 5.0")>-1||e.indexOf("windows 2000")>-1?n="Windows 2000":e.indexOf("windows nt 5.1")>-1||e.indexOf("windows xp")>-1?n="Windows XP":e.indexOf("windows nt 5.2")>-1||e.indexOf("windows 2003")>-1?n="Windows 2003":e.indexOf("windows nt 6.0")>-1||e.indexOf("windows Vista")>-1?n="Windows Vista":e.indexOf("windows nt 6.1")>-1||e.indexOf("windows 7")>-1?n="Windows 7":e.indexOf("windows nt 6.2")>-1||e.indexOf("Windows 8")>-1?n="Windows 8":e.indexOf("windows nt 6.3")>-1||e.indexOf("windows 8.1")>-1?n="Windows 8.1":(e.indexOf("windows nt 6.4")>-1||e.indexOf("windows nt 10.0")>-1||e.indexOf("windows 10")>-1)&&(n="Windows 10"),n;if(d){n="Android";var O=e.match(/android\s[\.\d]+/)[0].substr(8);return O&&(n=n+" "+O),n}if(l){var p="";if(o){var g=e.match(/cpu\siphone\sos\s\d+(_\d+)+/);g[0].length&&(p=g[0].substr(14).replace(/_/g,".")),n="iOS "+p+" / iPhone"}else if(m){var E=e.match(/cpu\sos\s\d+(_\d+)+/);E[0].length&&(p=E[0].substr(6).replace(/_/g,".")),n="iOS "+p+" / iPad"}else if(c){var v=e.match(/cpu\siphone\sos\s\d+(_\d+)+/);v[0].length&&(p=v[0].substr(6).replace(/_/g,".")),n="iOS "+p+" / iPod"}else n="iOS";return n}if(u){var B=e.substr(e.indexOf("windows phone")+14,7);return n="Windows Phone "+/\d+(.\d)+/.exec(B)[0]}return w?n="Symbian S"+e.match(/series\d+/)[0].toString().substr(6):f?(n="BlackBerry",e.indexOf("playbook")>-1?n+=" / PlayBook":e.indexOf("bb10")>-1&&(n+=" / BB10"),n):b?(n="XBox",e.indexOf("xbox one")>-1?n+=" One":n+=" 360",n):h?n="MeeGo":n}(t.toLowerCase(),n)),O(t),v(n)}catch(r){console.error("Caught Error",r)}}else C("Browser info not detected.")},[]),a.a.createElement(d.a,null,a.a.createElement(o.a,{title:"User Agent | 实验室",keywords:e.data.site.siteMetadata.keywords}),a.a.createElement("div",{className:"mf-content lab-item"},a.a.createElement("article",null,a.a.createElement(s.Link,{to:"/lab",className:"back"},"« Back"),a.a.createElement("h1",null,"UserAgent"),a.a.createElement("p",null,"Browser: ",a.a.createElement("span",{id:"browser"},c||"Detecting ...")),a.a.createElement("p",null,"OS: ",a.a.createElement("span",{id:"os"},b||"Detecting ...")),a.a.createElement("p",null,"UA: ",a.a.createElement("span",{id:"ua"},x||"Detecting ...")),a.a.createElement("p",null,"Platform: ",a.a.createElement("span",{id:"platform"},E||"Detecting ...")),a.a.createElement("p",{id:"error"},y))))};var c="1448345702"},87:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r=!0},88:function(e){e.exports={data:{site:{siteMetadata:{title:"童话说"}}}}},89:function(e,t,n){e.exports=n.p+"static/logo-8503f6989dba3ce27939964a48c8b787.png"},90:function(e,t,n){"use strict";var r=n(91),i=n(0),a=n.n(i),s=n(98),d=n.n(s),o=n(25);t.a=function(e){var t=e.description,n=void 0===t?"":t,i=e.lang,s=void 0===i?"zh":i,m=e.meta,l=void 0===m?[]:m,u=e.keywords,b=void 0===u?[]:u,f=e.title,h=void 0===f?"":f,w=e.exactTitle,x=void 0!==w&&w;return a.a.createElement(o.StaticQuery,{query:c,render:function(e){var t=n||e.site.siteMetadata.description;return a.a.createElement(d.a,{htmlAttributes:{lang:s},title:h,titleTemplate:x?"":"%s | ".concat(e.site.siteMetadata.title),meta:[{name:"description",content:t},{property:"og:title",content:h},{property:"og:description",content:t},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:h},{name:"twitter:description",content:t}].concat(b.length>0?{name:"keywords",content:b.join(",")}:[]).concat(l)})},data:r})};var c="1025518380"},91:function(e){e.exports={data:{site:{siteMetadata:{title:"童话说",description:"Washington Hua 的个人博客，专注大前端技术",author:"Washington Hua"}}}}},92:function(e,t,n){"use strict";var r=n(88),i=n(0),a=n.n(i),s=n(25),d=n(142),o=(n(95),n(96),n(15)),c=n(89),m=n.n(c),l=(n(97),[{to:"/blog",text:"博客"},{to:"/project",text:"代表作"},{to:"/lab",text:"实验室"},{to:"/friend",text:"朋友"},{to:"/about",text:"我"}]),u=function(){var e=Object(i.useState)(!1),t=Object(o.a)(e,2),n=t[0],r=t[1];function d(e){e&&e.stopPropagation(),r(!1)}function c(e){return e.isPartiallyCurrent?{className:"menu-link active"}:{className:"menu-link"}}return a.a.createElement(a.a.Fragment,null,a.a.createElement("header",{id:"mf-header"},a.a.createElement("div",{className:"mf-header-wrapper"},a.a.createElement(s.Link,{to:"/",className:"logo"},a.a.createElement("img",{src:m.a,alt:""}),a.a.createElement("span",null,"童话说")),a.a.createElement("div",{className:"hamberger"+(n?" open":""),onClick:function(e){e&&e.stopPropagation(),r(!n)}},a.a.createElement("div",{className:"bar"}),a.a.createElement("div",{className:"bar"}),a.a.createElement("div",{className:"bar"})),a.a.createElement("nav",{className:"nav-menu"+(n?" open":"")},a.a.createElement("ul",{className:"menus"},l.map(function(e){return a.a.createElement("li",{className:"menu",key:e.to},a.a.createElement(s.Link,{to:e.to,getProps:c,onClick:d},e.text))}))))),a.a.createElement("section",{id:"mf-header-placeholder"}))};n(87).a&&d.a({dsn:"https://9638de4372be4acebf892d0732a86a4a@sentry.io/1450204"});t.a=function(e){var t=e.children;return a.a.createElement(s.StaticQuery,{query:"755544856",render:function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(u,null),a.a.createElement("main",null,t))},data:r})}}}]);
//# sourceMappingURL=component---src-pages-lab-browser-ua-js-998bf09a01b87ad4872f.js.map