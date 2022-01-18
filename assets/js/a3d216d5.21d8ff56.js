"use strict";(self.webpackChunkublacklist_website=self.webpackChunkublacklist_website||[]).push([[8],{5318:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,k=c["".concat(o,".").concat(m)]||c[m]||u[m]||l;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3879:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return d},default:function(){return c}});var a=n(5773),r=n(808),l=(n(7378),n(5318)),i=["components"],s={title:"Advanced Features",sidebar_position:2},o=void 0,p={unversionedId:"advanced-features",id:"advanced-features",title:"Advanced Features",description:"Rules",source:"@site/docs/advanced-features.md",sourceDirName:".",slug:"/advanced-features",permalink:"/ublacklist/docs/advanced-features",editUrl:"https://github.com/iorate/ublacklist/edit/master/website/docs/advanced-features.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Advanced Features",sidebar_position:2},sidebar:"mySidebar",previous:{title:"Getting Started",permalink:"/ublacklist/docs/getting-started"}},d=[{value:"Rules",id:"rules",children:[{value:"Match patterns",id:"match-patterns",children:[],level:3},{value:"Regular expressions",id:"regular-expressions",children:[],level:3},{value:"Regular expressions for page titles",id:"regular-expressions-for-page-titles",children:[],level:3},{value:"Unblock rules",id:"unblock-rules",children:[],level:3},{value:"Highlighting rules",id:"highlighting-rules",children:[],level:3},{value:"Comments",id:"comments",children:[],level:3}],level:2},{value:"Other search engines",id:"other-search-engines",children:[{value:"Bing",id:"bing",children:[],level:3},{value:"DuckDuckGo",id:"duckduckgo",children:[],level:3},{value:"Ecosia",id:"ecosia",children:[],level:3},{value:"Qwant",id:"qwant",children:[],level:3},{value:"Startpage.com",id:"startpagecom",children:[],level:3}],level:2},{value:"Sync",id:"sync",children:[{value:"Google Drive",id:"google-drive",children:[],level:3},{value:"Dropbox",id:"dropbox",children:[],level:3}],level:2},{value:"Subscription",id:"subscription",children:[{value:"Publish a subscription",id:"publish-a-subscription",children:[],level:3}],level:2}],u={toc:d};function c(e){var t=e.components,s=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"rules"},"Rules"),(0,l.kt)("p",null,'You can edit rules to block sites in the options page, as well as in the "Block this site" dialog.'),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"rule editor",src:n(3021).Z})),(0,l.kt)("p",null,"You can write rules by ",(0,l.kt)("a",{parentName:"p",href:"#match-patterns"},"match patterns")," or ",(0,l.kt)("a",{parentName:"p",href:"#regular-expressions"},"regular expressions"),"."),(0,l.kt)("h3",{id:"match-patterns"},"Match patterns"),(0,l.kt)("p",null,"Match patterns are URLs including wildcards. You can see the details in ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns"},"MDN web docs"),"."),(0,l.kt)("p",null,"Here are examples of ",(0,l.kt)("strong",{parentName:"p"},"valid")," match patterns."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Pattern"),(0,l.kt)("th",{parentName:"tr",align:null},"Example matches"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"*://example.com/*"),(0,l.kt)("br",null),(0,l.kt)("br",null),"(URLs hosted at ",(0,l.kt)("inlineCode",{parentName:"td"},"example.com"),")"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"http://example.com/"),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"https://example.com/hoge"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"*://*.example.net/*"),(0,l.kt)("br",null),(0,l.kt)("br",null),"(URLs hosted at ",(0,l.kt)("inlineCode",{parentName:"td"},"example.net")," or its subdomain)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"http://example.net/"),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"https://foo.example.net/hoge"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"*://example.org/hoge/*"),(0,l.kt)("br",null),(0,l.kt)("br",null),"(URLs hosted at ",(0,l.kt)("inlineCode",{parentName:"td"},"example.org")," and whose path starts with ",(0,l.kt)("inlineCode",{parentName:"td"},"/hoge/"),")"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"http://example.org/hoge/fuga.html"))))),(0,l.kt)("p",null,"Here are examples of ",(0,l.kt)("strong",{parentName:"p"},"invalid")," match patterns."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Invalid pattern"),(0,l.kt)("th",{parentName:"tr",align:null},"Reason"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"*://www.qinterest.*/")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"*")," is not at the start. Use ",(0,l.kt)("a",{parentName:"td",href:"#regular-expressions"},"regular expressions")," instead.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"<all_urls>")),(0,l.kt)("td",{parentName:"tr",align:null},"Not supported.")))),(0,l.kt)("h3",{id:"regular-expressions"},"Regular expressions"),(0,l.kt)("p",null,"You can write more flexible rules by ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions"},"regular expressions"),"."),(0,l.kt)("p",null,"Note that regular expression rules shall be regular expression ",(0,l.kt)("strong",{parentName:"p"},"literals")," in JavaScript, surrounded by ",(0,l.kt)("inlineCode",{parentName:"p"},"/")," (e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},"/example\\.(net|org)/"),")."),(0,l.kt)("p",null,"Here are examples of ",(0,l.kt)("strong",{parentName:"p"},"valid")," regular expressions."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Regular expression"),(0,l.kt)("th",{parentName:"tr",align:null},"Example matches"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/^https:\\/\\/www\\.qinterest\\./"),(0,l.kt)("br",null),(0,l.kt)("br",null),"(URLs starting with ",(0,l.kt)("inlineCode",{parentName:"td"},"https://www.qinterest."),")"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"https://www.qinterest.com/"),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"https://www.qinterest.jp/hoge"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/^https?:\\/\\/([^/.]+\\.)*?xn--/"),(0,l.kt)("br",null),(0,l.kt)("br",null),"(URLs including internationalized domain names)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"http://\u4f8b.\u30c6\u30b9\u30c8/"))))),(0,l.kt)("p",null,"Here are examples of ",(0,l.kt)("strong",{parentName:"p"},"invalid")," regular expressions."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Invalid regular expressions"),(0,l.kt)("th",{parentName:"tr",align:null},"Reason"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"^https?:\\/\\/example\\.com\\/")),(0,l.kt)("td",{parentName:"tr",align:null},"Not surrounded by ",(0,l.kt)("inlineCode",{parentName:"td"},"/"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/^https?://example\\.com//")),(0,l.kt)("td",{parentName:"tr",align:null},"Inner ",(0,l.kt)("inlineCode",{parentName:"td"},"/")," are not escaped.")))),(0,l.kt)("h3",{id:"regular-expressions-for-page-titles"},"Regular expressions for page titles"),(0,l.kt)("p",null,"To block sites with specific titles, use regular expressions preceded by ",(0,l.kt)("inlineCode",{parentName:"p"},"title"),"."),(0,l.kt)("p",null,"For example, ",(0,l.kt)("inlineCode",{parentName:"p"},"title/example domain/i"),' blocks sites which titles include "example domain" in a case-insensitive manner.'),(0,l.kt)("h3",{id:"unblock-rules"},"Unblock rules"),(0,l.kt)("p",null,"Match patterns or regular expressions preceded by ",(0,l.kt)("inlineCode",{parentName:"p"},"@")," mean that the specified sites are not blocked."),(0,l.kt)("p",null,"They can be used to unblock sites that are blocked by ",(0,l.kt)("a",{parentName:"p",href:"#subscription"},"subscriptions"),". For example, if ",(0,l.kt)("inlineCode",{parentName:"p"},"http://example.com/")," is blocked by a subscription, you can unblock it by ",(0,l.kt)("inlineCode",{parentName:"p"},"@*://example.com/*"),"."),(0,l.kt)("h3",{id:"highlighting-rules"},"Highlighting rules"),(0,l.kt)("p",null,"Match patterns or regular expressions preceded by ",(0,l.kt)("inlineCode",{parentName:"p"},"@N")," (N=1,2,3,...) mean that the specified sites are highlighted."),(0,l.kt)("p",null,"For example, you can highlight GitHub by ",(0,l.kt)("inlineCode",{parentName:"p"},"@1*://github.com/*"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"highlight GitHub",src:n(7487).Z})),(0,l.kt)("p",null,"By default, only ",(0,l.kt)("inlineCode",{parentName:"p"},"@1"),' (blue) is available. To change or add highlighting colors, see the "Appearance" section in the options page.'),(0,l.kt)("h3",{id:"comments"},"Comments"),(0,l.kt)("p",null,"Comments begin with ",(0,l.kt)("inlineCode",{parentName:"p"},"#"),". Although any line that cannot be interpreted as a rule is effectively a comment, a ",(0,l.kt)("inlineCode",{parentName:"p"},"#")," comment is better in two ways."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"#")," comments are guaranteed to be comments even if new syntax is introduced in the future."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"#")," comments can be placed after rules.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# Block pages which URLs are hosted at example.com or its subdomain\n*://*.example.com/*\n\n/example\\.(net|org)/ # Block pages which URLs contain example.net or example.org\n")),(0,l.kt)("h2",{id:"other-search-engines"},"Other search engines"),(0,l.kt)("p",null,"This extension supports ",(0,l.kt)("a",{parentName:"p",href:"#bing"},"Bing"),", ",(0,l.kt)("a",{parentName:"p",href:"#duckduckgo"},"DuckDuckGo"),", ",(0,l.kt)("a",{parentName:"p",href:"#ecosia"},"Ecosia")," (partially), ",(0,l.kt)("a",{parentName:"p",href:"#qwant"},"Qwant")," and ",(0,l.kt)("a",{parentName:"p",href:"#startpagecom"},"Startpage.com"),". This feature is disabled by default and can be enabled in the options page."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"other search engines",src:n(1095).Z})),(0,l.kt)("h3",{id:"bing"},"Bing"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"bing",src:n(881).Z})),(0,l.kt)("h3",{id:"duckduckgo"},"DuckDuckGo"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"duckduckgo",src:n(5796).Z})),(0,l.kt)("h3",{id:"ecosia"},"Ecosia"),(0,l.kt)("p",null,'For now, search scopes other than "Web" (e.g. "Images" and "Videos") are not supported.'),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"ecosia",src:n(8662).Z})),(0,l.kt)("h3",{id:"qwant"},"Qwant"),(0,l.kt)("p",null,'"Videos" search will only work if you disable qwant custom links by clicking on "Always read on Qwant.com".'),(0,l.kt)("p",null,"With the lite version of Qwant, the extension only work with web search not news, images, videos as the link used a proxy."),(0,l.kt)("h3",{id:"startpagecom"},"Startpage.com"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"startpage",src:n(1516).Z})),(0,l.kt)("h2",{id:"sync"},"Sync"),(0,l.kt)("p",null,"You can synchronize rulesets among devices using Google Drive or Dropbox."),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"For technical reasons, sync is not available in Firefox for Android."))),(0,l.kt)("p",null,'To turn on sync, click the "Turn on sync" button in the options page and select a cloud.'),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"turn on sync",src:n(5373).Z})),(0,l.kt)("p",null,"Follow the instructions on the dialog to authenticate."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"authenticate",src:n(5500).Z})),(0,l.kt)("p",null,"Once authentication succeeds, your ruleset will be regularly synchronized with the selected cloud."),(0,l.kt)("h3",{id:"google-drive"},"Google Drive"),(0,l.kt)("p",null,"If you use Firefox or its derivative, you will be required to permit access to ",(0,l.kt)("inlineCode",{parentName:"p"},"https://www.googleapis.com"),"."),(0,l.kt)("p",null,"The ruleset is saved in the application data folder on your Google Drive. It is hidden from you, although you can delete it in the settings page of Google Drive."),(0,l.kt)("h3",{id:"dropbox"},"Dropbox"),(0,l.kt)("p",null,"The ruleset is saved in the ",(0,l.kt)("inlineCode",{parentName:"p"},"/Apps/uBlacklist/")," folder on your Dropbox. The folder name may be different depending on your language."),(0,l.kt)("h2",{id:"subscription"},"Subscription"),(0,l.kt)("p",null,"You can subscribe to public rulesets."),(0,l.kt)("p",null,'To add a subscription, click the "Add subscription" button and enter the name and URL. You will be required to permit access to the origin of the URL.'),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"add subscription",src:n(888).Z})),(0,l.kt)("p",null,"You can show, update or remove a subscription."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"manage subscription",src:n(7594).Z})),(0,l.kt)("h3",{id:"publish-a-subscription"},"Publish a subscription"),(0,l.kt)("p",null,"To publish a ruleset as a subscription, place a ruleset file encoded in UTF-8 on a suitable HTTP(S) server, and publish the URL."),(0,l.kt)("p",null,"It is a good idea to host your subscription on GitHub. Make sure that you publish the ",(0,l.kt)("strong",{parentName:"p"},"raw")," URL (e.g. ",(0,l.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/iorate/ublacklist-example-subscription/master/uBlacklist.txt"},"https://raw.githubusercontent.com/iorate/ublacklist-example-subscription/master/uBlacklist.txt"),")."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"raw url",src:n(6043).Z})))}c.isMDXComponent=!0},881:function(e,t,n){t.Z=n.p+"assets/images/bing-6189bb0d95c701f289b3d0ad12e233e3.png"},5796:function(e,t,n){t.Z=n.p+"assets/images/duckduckgo-a4a6ec74c9f53caf5e4e42039e7d2b72.png"},8662:function(e,t,n){t.Z=n.p+"assets/images/ecosia-209fd307ebdb36855a758098f1b7d675.png"},7487:function(e,t,n){t.Z=n.p+"assets/images/highlight-59f6b6de12cce6ab491fedcf495cf1a4.png"},1095:function(e,t,n){t.Z=n.p+"assets/images/other-search-engines-1-cdda1a219d8845db300c14f6c83712c4.png"},3021:function(e,t,n){t.Z=n.p+"assets/images/rules-1-d3d371ce9e1f408d82eaa3dcb5803231.png"},1516:function(e,t,n){t.Z=n.p+"assets/images/startpage-0787173feec50ebcde5d46193505c22d.png"},888:function(e,t,n){t.Z=n.p+"assets/images/subscription-1-82885e6afffb080cc2b32a2080e18263.png"},7594:function(e,t,n){t.Z=n.p+"assets/images/subscription-2-ed1cd9c9408204d0f9c0213b362b5d56.png"},6043:function(e,t,n){t.Z=n.p+"assets/images/subscription-3-82ea441ac6a3ea38e20dff1d5650b881.png"},5373:function(e,t,n){t.Z=n.p+"assets/images/sync-1-f402431e921dc19245398403d191dd26.png"},5500:function(e,t,n){t.Z=n.p+"assets/images/sync-2-74d5a77c3465fc782c884a7e54da6f0d.png"}}]);