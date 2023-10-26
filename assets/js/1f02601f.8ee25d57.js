"use strict";(self.webpackChunkk_3_s_website=self.webpackChunkk_3_s_website||[]).push([[5679],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(i,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:r,s[1]=l;for(var u=2;u<o;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3538:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const o={title:"Release Notes - v0.3.0",description:"Release notes for v.0.3.0",slug:"release-notes-v0.3",authors:[{name:"The s3gw team"}],tags:["release-notes"],hide_table_of_contents:!1},s="Release Notes - v0.3.0",l={permalink:"/blog/release-notes-v0.3",source:"@site/blog/2022-08-05-release-notes-0.3.md",title:"Release Notes - v0.3.0",description:"Release notes for v.0.3.0",date:"2022-08-05T00:00:00.000Z",formattedDate:"August 5, 2022",tags:[{label:"release-notes",permalink:"/blog/tags/release-notes"}],readingTime:1.645,hasTruncateMarker:!0,authors:[{name:"The s3gw team"}],frontMatter:{title:"Release Notes - v0.3.0",description:"Release notes for v.0.3.0",slug:"release-notes-v0.3",authors:[{name:"The s3gw team"}],tags:["release-notes"],hide_table_of_contents:!1},prevItem:{title:"Release Notes - v0.4.0",permalink:"/blog/release-notes-v0.4"},nextItem:{title:"Does your PV need S3 access? We\u2019ve got you covered",permalink:"/blog/does-your-pv-need-s3-access"}},i={authorsImageUrls:[void 0]},u=[{value:"s3gw",id:"s3gw",level:2},{value:"What we support",id:"what-we-support",level:3},{value:"What we don&#39;t support",id:"what-we-dont-support",level:3},{value:"What Changed",id:"what-changed",level:3},{value:"Added",id:"added",level:4},{value:"Known Issues",id:"known-issues",level:4},{value:"Changed",id:"changed",level:4},{value:"Removed",id:"removed",level:4},{value:"s3gw-ui",id:"s3gw-ui",level:2},{value:"Deploying",id:"deploying",level:2}],p={toc:u},d="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"With v0.3.0 a few things changed in the overall project:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"s3gw-core")," repository has been renamed ",(0,r.kt)("inlineCode",{parentName:"li"},"s3gw-tools"),";"),(0,r.kt)("li",{parentName:"ul"},"the main repository is now ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/aquarist-labs/s3gw"},"s3gw"),";"),(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"s3gw")," repository contains documentation and all other s3gw-related\nprojects as submodules.")),(0,r.kt)("p",null,"We are also releasing containers for ",(0,r.kt)("inlineCode",{parentName:"p"},"s3gw")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"s3gw-ui")," with this version.\nRead below for more information."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"This release is meant for testing and feedback gathering. It is not\nrecommended for production use.")),(0,r.kt)("p",null,"Should a bug be found and not expected to be related to the list below, one\nshould feel encouraged to file an issue in our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/aquarist-labs/s3gw"},"github repository"),"."),(0,r.kt)("h2",{id:"s3gw"},"s3gw"),(0,r.kt)("h3",{id:"what-we-support"},"What we support"),(0,r.kt)("p",null,"At the moment we support creating buckets, doing basic operations on objects\n(PUT/GET/DELETE), and listing bucket contents."),(0,r.kt)("h3",{id:"what-we-dont-support"},"What we don't support"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"deleting buckets."),(0,r.kt)("li",{parentName:"ul"},"multipart uploads."),(0,r.kt)("li",{parentName:"ul"},"everything else not specified in the previous section.")),(0,r.kt)("h3",{id:"what-changed"},"What Changed"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"This version introduces a new on-disk format for s3gw. Previous deployments\nwill not work and will need to be redeployed.")),(0,r.kt)("h4",{id:"added"},"Added"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"rgw/sfs: new on-disk format, based on filesystem hash tree for data\nand sqlite for metadata."),(0,r.kt)("li",{parentName:"ul"},"rgw/sfs: maintain one single sqlite database connection."),(0,r.kt)("li",{parentName:"ul"},"rgw/sfs: protect sqlite access with 'std::shared_lock'; allows multiple\nparallel reads, but only one write at a time."),(0,r.kt)("li",{parentName:"ul"},"rgw/sfs: allow copying objects; the current implementation breaks S3\nsemantics by returning EEXIST if the destination object exists.")),(0,r.kt)("h4",{id:"known-issues"},"Known Issues"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"object copy fails if the destination object exists; this will be addressed at\na later stage.")),(0,r.kt)("h4",{id:"changed"},"Changed"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"rgw/sfs: no longer create directory hierarchy when initing the store; instead,\nensure the sfs path exists by creating its directory if missing.")),(0,r.kt)("h4",{id:"removed"},"Removed"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"rgw/sfs: remove unused data and metadata functions, artifacts from our\nprevious file-based implementation.")),(0,r.kt)("h2",{id:"s3gw-ui"},"s3gw-ui"),(0,r.kt)("p",null,"The UI has seen several improvements and fixes."),(0,r.kt)("h2",{id:"deploying"},"Deploying"),(0,r.kt)("p",null,"Please refer to our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/aquarist-labs/s3gw#quickstart"},"documentation")," on how to start playing with the s3gw.\nFor Helm chart fans, information can be found ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/aquarist-labs/s3gw-charts#install"},"here"),"."))}c.isMDXComponent=!0}}]);