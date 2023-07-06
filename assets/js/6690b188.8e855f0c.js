"use strict";(self.webpackChunkk_3_s_website=self.webpackChunkk_3_s_website||[]).push([[100],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=o,b=u["".concat(c,".").concat(d)]||u[d]||g[d]||a;return n?r.createElement(b,i(i({ref:t},p),{},{components:n})):r.createElement(b,i({ref:t},p))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1525:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={title:"Introduction to s3gw",description:"Introductory blog post on the s3gw Project, a standalone S3 service based in the RADOS Gateway project.",slug:"introduction-to-s3gw",authors:[{name:"The s3gw team"}],tags:["blog","s3gw","Rancher","introduction"],hide_table_of_contents:!1},i="What is s3gw?",s={permalink:"/blog/introduction-to-s3gw",source:"@site/blog/2022-11-21-introduction-to-s3gw.md",title:"Introduction to s3gw",description:"Introductory blog post on the s3gw Project, a standalone S3 service based in the RADOS Gateway project.",date:"2022-11-21T00:00:00.000Z",formattedDate:"November 21, 2022",tags:[{label:"blog",permalink:"/blog/tags/blog"},{label:"s3gw",permalink:"/blog/tags/s-3-gw"},{label:"Rancher",permalink:"/blog/tags/rancher"},{label:"introduction",permalink:"/blog/tags/introduction"}],readingTime:2.525,hasTruncateMarker:!0,authors:[{name:"The s3gw team"}],frontMatter:{title:"Introduction to s3gw",description:"Introductory blog post on the s3gw Project, a standalone S3 service based in the RADOS Gateway project.",slug:"introduction-to-s3gw",authors:[{name:"The s3gw team"}],tags:["blog","s3gw","Rancher","introduction"],hide_table_of_contents:!1},prevItem:{title:"Release Notes - v0.9.0",permalink:"/blog/release-notes-v0.9"},nextItem:{title:"Release Notes - v0.8.0",permalink:"/blog/release-notes-v0.8"}},c={authorsImageUrls:[void 0]},l=[],p={toc:l},u="wrapper";function g(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"s3gw is an S3-compatible service focused on deployments in a Kubernetes environment backed by any PVC, including\xa0",(0,o.kt)("a",{parentName:"p",href:"https://longhorn.io/"},"Longhorn"),".\xa0Since its inception,\xa0the primary focus has been on cloud native deployments. However, the s3gw can be deployed in a myriad of scenarios, provided some form of storage is attached."))}g.isMDXComponent=!0}}]);