!function(e){function t(r){if(n[r])return n[r].exports;var s=n[r]={exports:{},id:r,loaded:!1};return e[r].call(s.exports,s,s.exports,t),s.loaded=!0,s.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";n(8),n(9),n(10)},,,,,,,,function(e,t){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e,t,r){function s(e,t){return("undefined"==typeof e?"undefined":n(e))===t}function i(){var e,t,n,r,i,a,o;for(var c in w)if(w.hasOwnProperty(c)){if(e=[],t=w[c],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=s(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)a=e[i],o=a.split("."),1===o.length?C[o[0]]=r:(!C[o[0]]||C[o[0]]instanceof Boolean||(C[o[0]]=new Boolean(C[o[0]])),C[o[0]][o[1]]=r),S.push((r?"":"no-")+o.join("-"))}}function a(e){var t=b.className,n=C._config.classPrefix||"";if(E&&(t=t.baseVal),C._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}C._config.enableClasses&&(t+=" "+n+e.join(" "+n),E?b.className.baseVal=t:b.className=t)}function o(e,t){return!!~(""+e).indexOf(t)}function c(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):E?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function u(){var e=t.body;return e||(e=c(E?"svg":"body"),e.fake=!0),e}function l(e,n,r,s){var i,a,o,l,f="modernizr",d=c("div"),p=u();if(parseInt(r,10))for(;r--;)o=c("div"),o.id=s?s[r]:f+(r+1),d.appendChild(o);return i=c("style"),i.type="text/css",i.id="s"+f,(p.fake?p:d).appendChild(i),p.appendChild(d),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(t.createTextNode(e)),d.id=f,p.fake&&(p.style.background="",p.style.overflow="hidden",l=b.style.overflow,b.style.overflow="hidden",b.appendChild(p)),a=n(d,e),p.fake?(p.parentNode.removeChild(p),b.style.overflow=l,b.offsetHeight):d.parentNode.removeChild(d),!!a}function f(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function d(t,n){var s=t.length;if("CSS"in e&&"supports"in e.CSS){for(;s--;)if(e.CSS.supports(f(t[s]),n))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];s--;)i.push("("+f(t[s])+":"+n+")");return i=i.join(" or "),l("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return r}function p(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function m(e,t,n,i){function a(){l&&(delete M.style,delete M.modElem)}if(i=!s(i,"undefined")&&i,!s(n,"undefined")){var u=d(e,n);if(!s(u,"undefined"))return u}for(var l,f,m,h,A,g=["modernizr","tspan"];!M.style;)l=!0,M.modElem=c(g.shift()),M.style=M.modElem.style;for(m=e.length,f=0;f<m;f++)if(h=e[f],A=M.style[h],o(h,"-")&&(h=p(h)),M.style[h]!==r){if(i||s(n,"undefined"))return a(),"pfx"!=t||h;try{M.style[h]=n}catch(e){}if(M.style[h]!=A)return a(),"pfx"!=t||h}return a(),!1}function h(e,t){return function(){return e.apply(t,arguments)}}function A(e,t,n){var r;for(var i in e)if(e[i]in t)return n===!1?e[i]:(r=t[e[i]],s(r,"function")?h(r,n||t):r);return!1}function g(e,t,n,r,i){var a=e.charAt(0).toUpperCase()+e.slice(1),o=(e+" "+T.join(a+" ")+a).split(" ");return s(t,"string")||s(t,"undefined")?m(o,t,r,i):(o=(e+" "+P.join(a+" ")+a).split(" "),A(o,t,n))}function v(e,t,n){return g(e,r,r,t,n)}function y(e,t){if("object"==("undefined"==typeof e?"undefined":n(e)))for(var r in e)R(e,r)&&y(r,e[r]);else{e=e.toLowerCase();var s=e.split("."),i=C[s[0]];if(2==s.length&&(i=i[s[1]]),"undefined"!=typeof i)return C;t="function"==typeof t?t():t,1==s.length?C[s[0]]=t:(!C[s[0]]||C[s[0]]instanceof Boolean||(C[s[0]]=new Boolean(C[s[0]])),C[s[0]][s[1]]=t),a([(t&&0!=t?"":"no-")+s.join("-")]),C._trigger(e,t)}return C}var w=[],z={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){w.push({name:e,fn:t,options:n})},addAsyncTest:function(e){w.push({name:null,fn:e})}},C=function(){};C.prototype=z,C=new C;var S=[],b=t.documentElement,E="svg"===b.nodeName.toLowerCase();C.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect);var x="Moz O ms Webkit",T=z._config.usePrefixes?x.split(" "):[];z._cssomPrefixes=T;var _={elem:c("modernizr")};C._q.push(function(){delete _.elem});var M={style:_.elem.style};C._q.unshift(function(){delete M.style});var P=z._config.usePrefixes?x.toLowerCase().split(" "):[];z._domPrefixes=P,z.testAllProps=g,z.testAllProps=v,C.addTest("flexbox",v("flexBasis","1px",!0));var B="CSS"in e&&"supports"in e.CSS,L="supportsCSS"in e;C.addTest("supports",B||L),C.addTest("srcset","srcset"in c("img")),C.addTest("target",function(){var t=e.document;if(!("querySelectorAll"in t))return!1;try{return t.querySelectorAll(":target"),!0}catch(e){return!1}}),C.addTest("hidden","hidden"in c("a"));var R;!function(){var e={}.hasOwnProperty;R=s(e,"undefined")||s(e.call,"undefined")?function(e,t){return t in e&&s(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}(),z._l={},z.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),C.hasOwnProperty(e)&&setTimeout(function(){C._trigger(e,C[e])},0)},z._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e,r;for(e=0;e<n.length;e++)(r=n[e])(t)},0),delete this._l[e]}},C._q.push(function(){z.addTest=y}),C.addAsyncTest(function(){var e,t,n,r=c("img"),s="sizes"in r;!s&&"srcset"in r?(t="data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==",e="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",n=function(){y("sizes",2==r.width)},r.onload=n,r.onerror=n,r.setAttribute("sizes","9px"),r.srcset=e+" 1w,"+t+" 8w",r.src=e):y("sizes",s)}),i(),a(S),delete z.addTest,delete z.addAsyncTest;for(var N=0;N<C._q.length;N++)C._q[N]();e.Modernizr=C}(window,document)},function(e,t,n){var r;!function(e){var t=navigator.userAgent;e.HTMLPictureElement&&/ecko/.test(t)&&t.match(/rv\:(\d+)/)&&RegExp.$1<45&&addEventListener("resize",function(){var t,n=document.createElement("source"),r=function(e){var t,r,s=e.parentNode;"PICTURE"===s.nodeName.toUpperCase()?(t=n.cloneNode(),s.insertBefore(t,s.firstElementChild),setTimeout(function(){s.removeChild(t)})):(!e._pfLastSize||e.offsetWidth>e._pfLastSize)&&(e._pfLastSize=e.offsetWidth,r=e.sizes,e.sizes+=",100vw",setTimeout(function(){e.sizes=r}))},s=function(){var e,t=document.querySelectorAll("picture > img, img[srcset][sizes]");for(e=0;e<t.length;e++)r(t[e])},i=function(){clearTimeout(t),t=setTimeout(s,99)},a=e.matchMedia&&matchMedia("(orientation: landscape)"),o=function(){i(),a&&a.addListener&&a.addListener(i)};return n.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?o():document.addEventListener("DOMContentLoaded",o),i}())}(window),function(s,i,a){"use strict";function o(e){return" "===e||"\t"===e||"\n"===e||"\f"===e||"\r"===e}function c(e,t){var n=new s.Image;return n.onerror=function(){P[e]=!1,ie()},n.onload=function(){P[e]=1===n.width,ie()},n.src=t,"pending"}function u(){q=!1,j=s.devicePixelRatio,F={},H={},C.DPR=j||1,G.width=Math.max(s.innerWidth||0,M.clientWidth),G.height=Math.max(s.innerHeight||0,M.clientHeight),G.vw=G.width/100,G.vh=G.height/100,z=[G.height,G.width,j].join("-"),G.em=C.getEmValue(),G.rem=G.em}function l(e,t,n,r){var s,i,a,o;return"saveData"===B.algorithm?e>2.7?o=n+1:(i=t-n,s=Math.pow(e-.6,1.5),a=i*s,r&&(a+=.1*s),o=e+a):o=n>1?Math.sqrt(e*t):e,o>n}function f(e){var t,n=C.getSet(e),r=!1;"pending"!==n&&(r=z,n&&(t=C.setRes(n),C.applySetCandidate(t,e))),e[C.ns].evaled=r}function d(e,t){return e.res-t.res}function p(e,t,n){var r;return!n&&t&&(n=e[C.ns].sets,n=n&&n[n.length-1]),r=m(t,n),r&&(t=C.makeUrl(t),e[C.ns].curSrc=t,e[C.ns].curCan=r,r.res||se(r,r.set.sizes)),r}function m(e,t){var n,r,s;if(e&&t)for(s=C.parseSet(t),e=C.makeUrl(e),n=0;n<s.length;n++)if(e===C.makeUrl(s[n].url)){r=s[n];break}return r}function h(e,t){var n,r,s,i,a=e.getElementsByTagName("source");for(n=0,r=a.length;n<r;n++)s=a[n],s[C.ns]=!0,i=s.getAttribute("srcset"),i&&t.push({srcset:i,media:s.getAttribute("media"),type:s.getAttribute("type"),sizes:s.getAttribute("sizes")})}function A(e,t){function n(t){var n,r=t.exec(e.substring(d));if(r)return n=r[0],d+=n.length,n}function r(){var e,n,r,s,o,c,u,l,f,d=!1,m={};for(s=0;s<a.length;s++)o=a[s],c=o[o.length-1],u=o.substring(0,o.length-1),l=parseInt(u,10),f=parseFloat(u),Y.test(u)&&"w"===c?((e||n)&&(d=!0),0===l?d=!0:e=l):ee.test(u)&&"x"===c?((e||n||r)&&(d=!0),f<0?d=!0:n=f):Y.test(u)&&"h"===c?((r||n)&&(d=!0),0===l?d=!0:r=l):d=!0;d||(m.url=i,e&&(m.w=e),n&&(m.d=n),r&&(m.h=r),r||n||e||(m.d=1),1===m.d&&(t.has1x=!0),m.set=t,p.push(m))}function s(){for(n(J),c="",u="in descriptor";;){if(l=e.charAt(d),"in descriptor"===u)if(o(l))c&&(a.push(c),c="",u="after descriptor");else{if(","===l)return d+=1,c&&a.push(c),void r();if("("===l)c+=l,u="in parens";else{if(""===l)return c&&a.push(c),void r();c+=l}}else if("in parens"===u)if(")"===l)c+=l,u="in descriptor";else{if(""===l)return a.push(c),void r();c+=l}else if("after descriptor"===u)if(o(l));else{if(""===l)return void r();u="in descriptor",d-=1}d+=1}}for(var i,a,c,u,l,f=e.length,d=0,p=[];;){if(n(K),d>=f)return p;i=n(X),a=[],","===i.slice(-1)?(i=i.replace(Z,""),r()):s()}}function g(e){function t(e){function t(){s&&(i.push(s),s="")}function n(){i[0]&&(a.push(i),i=[])}for(var r,s="",i=[],a=[],c=0,u=0,l=!1;;){if(r=e.charAt(u),""===r)return t(),n(),a;if(l){if("*"===r&&"/"===e[u+1]){l=!1,u+=2,t();continue}u+=1}else{if(o(r)){if(e.charAt(u-1)&&o(e.charAt(u-1))||!s){u+=1;continue}if(0===c){t(),u+=1;continue}r=" "}else if("("===r)c+=1;else if(")"===r)c-=1;else{if(","===r){t(),n(),u+=1;continue}if("/"===r&&"*"===e.charAt(u+1)){l=!0,u+=2;continue}}s+=r,u+=1}}}function n(e){return!!(l.test(e)&&parseFloat(e)>=0)||(!!f.test(e)||("0"===e||"-0"===e||"+0"===e))}var r,s,i,a,c,u,l=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,f=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;for(s=t(e),i=s.length,r=0;r<i;r++)if(a=s[r],c=a[a.length-1],n(c)){if(u=c,a.pop(),0===a.length)return u;if(a=a.join(" "),C.matchesMedia(a))return u}return"100vw"}i.createElement("picture");var v,y,w,z,C={},S=!1,b=function(){},E=i.createElement("img"),x=E.getAttribute,T=E.setAttribute,_=E.removeAttribute,M=i.documentElement,P={},B={algorithm:""},L="data-pfsrc",R=L+"set",N=navigator.userAgent,k=/rident/.test(N)||/ecko/.test(N)&&N.match(/rv\:(\d+)/)&&RegExp.$1>35,W="currentSrc",D=/\s+\+?\d+(e\d+)?w/,$=/(\([^)]+\))?\s*(.+)/,I=s.picturefillCFG,O="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",U="font-size:100%!important;",q=!0,F={},H={},j=s.devicePixelRatio,G={px:1,in:96},Q=i.createElement("a"),V=!1,J=/^[ \t\n\r\u000c]+/,K=/^[, \t\n\r\u000c]+/,X=/^[^ \t\n\r\u000c]+/,Z=/[,]+$/,Y=/^\d+$/,ee=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,te=function(e,t,n,r){e.addEventListener?e.addEventListener(t,n,r||!1):e.attachEvent&&e.attachEvent("on"+t,n)},ne=function(e){var t={};return function(n){return n in t||(t[n]=e(n)),t[n]}},re=function(){var e=/^([\d\.]+)(em|vw|px)$/,t=function(){for(var e=arguments,t=0,n=e[0];++t in e;)n=n.replace(e[t],e[++t]);return n},n=ne(function(e){return"return "+t((e||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"});return function(t,r){var s;if(!(t in F))if(F[t]=!1,r&&(s=t.match(e)))F[t]=s[1]*G[s[2]];else try{F[t]=new Function("e",n(t))(G)}catch(e){}return F[t]}}(),se=function(e,t){return e.w?(e.cWidth=C.calcListLength(t||"100vw"),e.res=e.w/e.cWidth):e.res=e.d,e},ie=function(e){if(S){var t,n,r,s=e||{};if(s.elements&&1===s.elements.nodeType&&("IMG"===s.elements.nodeName.toUpperCase()?s.elements=[s.elements]:(s.context=s.elements,s.elements=null)),t=s.elements||C.qsa(s.context||i,s.reevaluate||s.reselect?C.sel:C.selShort),r=t.length){for(C.setupRun(s),V=!0,n=0;n<r;n++)C.fillImg(t[n],s);C.teardownRun(s)}}};v=s.console&&console.warn?function(e){console.warn(e)}:b,W in E||(W="src"),P["image/jpeg"]=!0,P["image/gif"]=!0,P["image/png"]=!0,P["image/svg+xml"]=i.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),C.ns=("pf"+(new Date).getTime()).substr(0,9),C.supSrcset="srcset"in E,C.supSizes="sizes"in E,C.supPicture=!!s.HTMLPictureElement,C.supSrcset&&C.supPicture&&!C.supSizes&&!function(e){E.srcset="data:,a",e.src="data:,a",C.supSrcset=E.complete===e.complete,C.supPicture=C.supSrcset&&C.supPicture}(i.createElement("img")),C.supSrcset&&!C.supSizes?!function(){var e="data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==",t="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",n=i.createElement("img"),r=function(){var e=n.width;2===e&&(C.supSizes=!0),w=C.supSrcset&&!C.supSizes,S=!0,setTimeout(ie)};n.onload=r,n.onerror=r,n.setAttribute("sizes","9px"),n.srcset=t+" 1w,"+e+" 9w",n.src=t}():S=!0,C.selShort="picture>img,img[srcset]",C.sel=C.selShort,C.cfg=B,C.DPR=j||1,C.u=G,C.types=P,C.setSize=b,C.makeUrl=ne(function(e){return Q.href=e,Q.href}),C.qsa=function(e,t){return"querySelector"in e?e.querySelectorAll(t):[]},C.matchesMedia=function(){return s.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?C.matchesMedia=function(e){return!e||matchMedia(e).matches}:C.matchesMedia=C.mMQ,C.matchesMedia.apply(this,arguments)},C.mMQ=function(e){return!e||re(e)},C.calcLength=function(e){var t=re(e,!0)||!1;return t<0&&(t=!1),t},C.supportsType=function(e){return!e||P[e]},C.parseSize=ne(function(e){var t=(e||"").match($);return{media:t&&t[1],length:t&&t[2]}}),C.parseSet=function(e){return e.cands||(e.cands=A(e.srcset,e)),e.cands},C.getEmValue=function(){var e;if(!y&&(e=i.body)){var t=i.createElement("div"),n=M.style.cssText,r=e.style.cssText;t.style.cssText=O,M.style.cssText=U,e.style.cssText=U,e.appendChild(t),y=t.offsetWidth,e.removeChild(t),y=parseFloat(y,10),M.style.cssText=n,e.style.cssText=r}return y||16},C.calcListLength=function(e){if(!(e in H)||B.uT){var t=C.calcLength(g(e));H[e]=t?t:G.width}return H[e]},C.setRes=function(e){var t;if(e){t=C.parseSet(e);for(var n=0,r=t.length;n<r;n++)se(t[n],e.sizes)}return t},C.setRes.res=se,C.applySetCandidate=function(e,t){if(e.length){var n,r,s,i,a,o,c,u,f,m=t[C.ns],h=C.DPR;if(o=m.curSrc||t[W],c=m.curCan||p(t,o,e[0].set),c&&c.set===e[0].set&&(f=k&&!t.complete&&c.res-.1>h,f||(c.cached=!0,c.res>=h&&(a=c))),!a)for(e.sort(d),i=e.length,a=e[i-1],r=0;r<i;r++)if(n=e[r],n.res>=h){s=r-1,a=e[s]&&(f||o!==C.makeUrl(n.url))&&l(e[s].res,n.res,h,e[s].cached)?e[s]:n;break}a&&(u=C.makeUrl(a.url),m.curSrc=u,m.curCan=a,u!==o&&C.setSrc(t,a),C.setSize(t))}},C.setSrc=function(e,t){var n;e.src=t.url,"image/svg+xml"===t.set.type&&(n=e.style.width,e.style.width=e.offsetWidth+1+"px",e.offsetWidth+1&&(e.style.width=n))},C.getSet=function(e){var t,n,r,s=!1,i=e[C.ns].sets;for(t=0;t<i.length&&!s;t++)if(n=i[t],n.srcset&&C.matchesMedia(n.media)&&(r=C.supportsType(n.type))){"pending"===r&&(n=r),s=n;break}return s},C.parseSets=function(e,t,n){var r,s,i,o,c=t&&"PICTURE"===t.nodeName.toUpperCase(),u=e[C.ns];(u.src===a||n.src)&&(u.src=x.call(e,"src"),u.src?T.call(e,L,u.src):_.call(e,L)),(u.srcset===a||n.srcset||!C.supSrcset||e.srcset)&&(r=x.call(e,"srcset"),u.srcset=r,o=!0),u.sets=[],c&&(u.pic=!0,h(t,u.sets)),u.srcset?(s={srcset:u.srcset,sizes:x.call(e,"sizes")},u.sets.push(s),i=(w||u.src)&&D.test(u.srcset||""),i||!u.src||m(u.src,s)||s.has1x||(s.srcset+=", "+u.src,s.cands.push({url:u.src,d:1,set:s}))):u.src&&u.sets.push({srcset:u.src,sizes:null}),u.curCan=null,u.curSrc=a,u.supported=!(c||s&&!C.supSrcset||i&&!C.supSizes),o&&C.supSrcset&&!u.supported&&(r?(T.call(e,R,r),e.srcset=""):_.call(e,R)),u.supported&&!u.srcset&&(!u.src&&e.src||e.src!==C.makeUrl(u.src))&&(null===u.src?e.removeAttribute("src"):e.src=u.src),u.parsed=!0},C.fillImg=function(e,t){var n,r=t.reselect||t.reevaluate;e[C.ns]||(e[C.ns]={}),n=e[C.ns],(r||n.evaled!==z)&&(n.parsed&&!t.reevaluate||C.parseSets(e,e.parentNode,t),n.supported?n.evaled=z:f(e))},C.setupRun=function(){V&&!q&&j===s.devicePixelRatio||u()},C.supPicture?(ie=b,C.fillImg=b):!function(){var e,t=s.attachEvent?/d$|^c/:/d$|^c|^i/,n=function(){var s=i.readyState||"";r=setTimeout(n,"loading"===s?200:999),i.body&&(C.fillImgs(),e=e||t.test(s),e&&clearTimeout(r))},r=setTimeout(n,i.body?9:99),a=function(e,t){var n,r,s=function(){var i=new Date-r;i<t?n=setTimeout(s,t-i):(n=null,e())};return function(){r=new Date,n||(n=setTimeout(s,t))}},o=M.clientHeight,c=function(){q=Math.max(s.innerWidth||0,M.clientWidth)!==G.width||M.clientHeight!==o,o=M.clientHeight,q&&C.fillImgs()};te(s,"resize",a(c,99)),te(i,"readystatechange",n)}(),C.picturefill=ie,C.fillImgs=ie,C.teardownRun=b,ie._=C,s.picturefillCFG={pf:C,push:function(e){var t=e.shift();"function"==typeof C[t]?C[t].apply(C,e):(B[t]=e[0],V&&C.fillImgs({reselect:!0}))}};for(;I&&I.length;)s.picturefillCFG.push(I.shift());s.picturefill=ie,"object"==typeof e&&"object"==typeof e.exports?e.exports=ie:(r=function(){return ie}.call(t,n,t,e),!(r!==a&&(e.exports=r))),C.supPicture||(P["image/webp"]=c("image/webp","data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="))}(window,document)},function(e,t){!function(t,n){var r=n(t,t.document);t.lazySizes=r,"object"==typeof e&&e.exports&&(e.exports=r)}(window,function(e,t){"use strict";if(t.getElementsByClassName){var n,r=t.documentElement,s=e.Date,i=e.HTMLPictureElement,a="addEventListener",o="getAttribute",c=e[a],u=e.setTimeout,l=e.requestAnimationFrame||u,f=e.requestIdleCallback,d=/^picture$/i,p=["load","error","lazyincluded","_lazyloaded"],m={},h=Array.prototype.forEach,A=function(e,t){return m[t]||(m[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),m[t].test(e[o]("class")||"")&&m[t]},g=function(e,t){A(e,t)||e.setAttribute("class",(e[o]("class")||"").trim()+" "+t)},v=function(e,t){var n;(n=A(e,t))&&e.setAttribute("class",(e[o]("class")||"").replace(n," "))},y=function(e,t,n){var r=n?a:"removeEventListener";n&&y(e,t),p.forEach(function(n){e[r](n,t)})},w=function(e,n,r,s,i){var a=t.createEvent("CustomEvent");return a.initCustomEvent(n,!s,!i,r||{}),e.dispatchEvent(a),a},z=function(t,r){var s;!i&&(s=e.picturefill||n.pf)?s({reevaluate:!0,elements:[t]}):r&&r.src&&(t.src=r.src)},C=function(e,t){return(getComputedStyle(e,null)||{})[t]},S=function(e,t,r){for(r=r||e.offsetWidth;r<n.minSize&&t&&!e._lazysizesWidth;)r=t.offsetWidth,t=t.parentNode;return r},b=function(){var e,n,r=[],s=[],i=r,a=function(){var t=i;for(i=r.length?s:r,e=!0,n=!1;t.length;)t.shift()();e=!1},o=function(r,s){e&&!s?r.apply(this,arguments):(i.push(r),n||(n=!0,(t.hidden?u:l)(a)))};return o._lsFlush=a,o}(),E=function(e,t){return t?function(){b(e)}:function(){var t=this,n=arguments;b(function(){e.apply(t,n)})}},x=function(e){var t,n=0,r=125,i=666,a=i,o=function(){t=!1,n=s.now(),e()},c=f?function(){f(o,{timeout:a}),a!==i&&(a=i)}:E(function(){u(o)},!0);return function(e){var i;(e=e===!0)&&(a=44),t||(t=!0,i=r-(s.now()-n),i<0&&(i=0),e||i<9&&f?c():u(c,i))}},T=function(e){var t,n,r=99,i=function(){t=null,e()},a=function(){var e=s.now()-n;e<r?u(a,r-e):(f||i)(i)};return function(){n=s.now(),t||(t=u(a,r))}},_=function(){var i,l,f,p,m,S,_,P,B,L,R,N,k,W,D,$=/^img$/i,I=/^iframe$/i,O="onscroll"in e&&!/glebot/.test(navigator.userAgent),U=0,q=0,F=0,H=-1,j=function(e){F--,e&&e.target&&y(e.target,j),(!e||F<0||!e.target)&&(F=0)},G=function(e,n){var s,i=e,a="hidden"==C(t.body,"visibility")||"hidden"!=C(e,"visibility");for(B-=n,N+=n,L-=n,R+=n;a&&(i=i.offsetParent)&&i!=t.body&&i!=r;)a=(C(i,"opacity")||1)>0,a&&"visible"!=C(i,"overflow")&&(s=i.getBoundingClientRect(),a=R>s.left&&L<s.right&&N>s.top-1&&B<s.bottom+1);return a},Q=function(){var e,s,a,c,u,d,p,h,A;if((m=n.loadMode)&&F<8&&(e=i.length)){s=0,H++,null==W&&("expand"in n||(n.expand=r.clientHeight>500&&r.clientWidth>500?500:370),k=n.expand,W=k*n.expFactor),q<W&&F<1&&H>2&&m>2&&!t.hidden?(q=W,H=0):q=m>1&&H>1&&F<6?k:U;for(;s<e;s++)if(i[s]&&!i[s]._lazyRace)if(O)if((h=i[s][o]("data-expand"))&&(d=1*h)||(d=q),A!==d&&(_=innerWidth+d*D,P=innerHeight+d,p=d*-1,A=d),a=i[s].getBoundingClientRect(),(N=a.bottom)>=p&&(B=a.top)<=P&&(R=a.right)>=p*D&&(L=a.left)<=_&&(N||R||L||B)&&(f&&F<3&&!h&&(m<3||H<4)||G(i[s],d))){if(te(i[s]),u=!0,F>9)break}else!u&&f&&!c&&F<4&&H<4&&m>2&&(l[0]||n.preloadAfterLoad)&&(l[0]||!h&&(N||R||L||B||"auto"!=i[s][o](n.sizesAttr)))&&(c=l[0]||i[s]);else te(i[s]);c&&!u&&te(c)}},V=x(Q),J=function(e){g(e.target,n.loadedClass),v(e.target,n.loadingClass),y(e.target,X)},K=E(J),X=function(e){K({target:e.target})},Z=function(e,t){try{e.contentWindow.location.replace(t)}catch(n){e.src=t}},Y=function(e){var t,r,s=e[o](n.srcsetAttr);(t=n.customMedia[e[o]("data-media")||e[o]("media")])&&e.setAttribute("media",t),s&&e.setAttribute("srcset",s),t&&(r=e.parentNode,r.insertBefore(e.cloneNode(),e),r.removeChild(e))},ee=E(function(e,t,r,s,i){var a,c,l,f,m,A;(m=w(e,"lazybeforeunveil",t)).defaultPrevented||(s&&(r?g(e,n.autosizesClass):e.setAttribute("sizes",s)),c=e[o](n.srcsetAttr),a=e[o](n.srcAttr),i&&(l=e.parentNode,f=l&&d.test(l.nodeName||"")),A=t.firesLoad||"src"in e&&(c||a||f),m={target:e},A&&(y(e,j,!0),clearTimeout(p),p=u(j,2500),g(e,n.loadingClass),y(e,X,!0)),f&&h.call(l.getElementsByTagName("source"),Y),c?e.setAttribute("srcset",c):a&&!f&&(I.test(e.nodeName)?Z(e,a):e.src=a),(c||f)&&z(e,{src:a})),e._lazyRace&&delete e._lazyRace,v(e,n.lazyClass),b(function(){(!A||e.complete&&e.naturalWidth>1)&&(A?j(m):F--,J(m))},!0)}),te=function(e){var t,r=$.test(e.nodeName),s=r&&(e[o](n.sizesAttr)||e[o]("sizes")),i="auto"==s;(!i&&f||!r||!e.src&&!e.srcset||e.complete||A(e,n.errorClass))&&(t=w(e,"lazyunveilread").detail,i&&M.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,F++,ee(e,t,i,s,r))},ne=function(){if(!f){if(s.now()-S<999)return void u(ne,999);var e=T(function(){n.loadMode=3,V()});f=!0,n.loadMode=3,V(),c("scroll",function(){3==n.loadMode&&(n.loadMode=2),e()},!0)}};return{_:function(){S=s.now(),i=t.getElementsByClassName(n.lazyClass),l=t.getElementsByClassName(n.lazyClass+" "+n.preloadClass),D=n.hFac,c("scroll",V,!0),c("resize",V,!0),e.MutationObserver?new MutationObserver(V).observe(r,{childList:!0,subtree:!0,attributes:!0}):(r[a]("DOMNodeInserted",V,!0),r[a]("DOMAttrModified",V,!0),setInterval(V,999)),c("hashchange",V,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(e){t[a](e,V,!0)}),/d$|^c/.test(t.readyState)?ne():(c("load",ne),t[a]("DOMContentLoaded",V),u(ne,2e4)),i.length?(Q(),b._lsFlush()):V()},checkElems:V,unveil:te}}(),M=function(){var e,r=E(function(e,t,n,r){var s,i,a;if(e._lazysizesWidth=r,r+="px",e.setAttribute("sizes",r),d.test(t.nodeName||""))for(s=t.getElementsByTagName("source"),i=0,a=s.length;i<a;i++)s[i].setAttribute("sizes",r);n.detail.dataAttr||z(e,n.detail)}),s=function(e,t,n){var s,i=e.parentNode;i&&(n=S(e,i,n),s=w(e,"lazybeforesizes",{width:n,dataAttr:!!t}),s.defaultPrevented||(n=s.detail.width,n&&n!==e._lazysizesWidth&&r(e,i,s,n)))},i=function(){var t,n=e.length;if(n)for(t=0;t<n;t++)s(e[t])},a=T(i);return{_:function(){e=t.getElementsByClassName(n.autosizesClass),c("resize",a)},checkElems:a,updateElem:s}}(),P=function(){P.i||(P.i=!0,M._(),_._())};return function(){var t,r={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2};n=e.lazySizesConfig||e.lazysizesConfig||{};for(t in r)t in n||(n[t]=r[t]);e.lazySizesConfig=n,u(function(){n.init&&P()})}(),{cfg:n,autoSizer:M,loader:_,init:P,uP:z,aC:g,rC:v,hC:A,fire:w,gW:S,rAF:b}}})}]);