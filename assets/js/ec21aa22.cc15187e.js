(self.webpackChunkdocusaurus_websites=self.webpackChunkdocusaurus_websites||[]).push([[146],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),u=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(a.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,a=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=u(r),m=o,y=f["".concat(a,".").concat(m)]||f[m]||l[m]||c;return r?n.createElement(y,s(s({ref:t},p),{},{components:r})):n.createElement(y,s({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,s=new Array(c);s[0]=f;var i={};for(var a in t)hasOwnProperty.call(t,a)&&(i[a]=t[a]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<c;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7209:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return a},toc:function(){return u},default:function(){return l}});var n=r(2122),o=r(9756),c=(r(7294),r(3905)),s=["components"],i={sidebar_position:6},a={unversionedId:"API-reference/compose",id:"API-reference/compose",isDocsHomePage:!1,title:"compose",description:"Compose diferent static and dynamic styles.",source:"@site/docs/API-reference/compose.md",sourceDirName:"API-reference",slug:"/API-reference/compose",permalink:"/fly-jss-documentation/docs/API-reference/compose",editUrl:"https://github.com/jhony-24/fly-jss-documentation/docs/API-reference/compose.md",version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"using styles",permalink:"/fly-jss-documentation/docs/API-reference/using-styles"},next:{title:"Getting started",permalink:"/fly-jss-documentation/docs/Introduction/getting-started"}},u=[],p={toc:u};function l(e){var t=e.components,r=(0,o.Z)(e,s);return(0,c.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Compose diferent static and dynamic styles."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-js"},'import fly from "fly-jss"\n\nfly.compose(\n  styles("prop1"), // static style\n  styles("prop2"),  // static style\n  styles({ // dynamic style\n    square : "20px"\n  })\n);\n')))}l.isMDXComponent=!0}}]);