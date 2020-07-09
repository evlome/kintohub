(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{155:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(9),i=(n(0),n(198)),o={id:"metrics",title:"Metrics"},c={id:"anatomy/metrics",isDocsHomePage:!1,title:"Metrics",description:"Metrics provides near real-time information about vCPU and Memory that your service uses.",source:"@site/docs/anatomy/anatomy-metrics.md",permalink:"/anatomy/metrics",sidebar:"someSidebar",previous:{title:"Deploy",permalink:"/anatomy/deploy"},next:{title:"Releases",permalink:"/anatomy/releases"}},l=[{value:"View Metrics",id:"view-metrics",children:[]},{value:"Metrics Information",id:"metrics-information",children:[{value:"Summary",id:"summary",children:[]},{value:"Instances",id:"instances",children:[]}]}],s={rightToc:l};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Metrics provides near real-time information about vCPU and Memory that your service uses.\nThis information is valuable as you will be able to optimize your cost by viewing your actual usage compared to what you are paying for.\nIn addition to cost savings, you may also detect issues with your service by seeing how many times it has restarted.\nA ",Object(i.b)("strong",{parentName:"p"},"Restart")," is when your service has crashed and KintoHub has automatically brought it back online."),Object(i.b)("h2",{id:"view-metrics"},"View Metrics"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Login to KintoHub"),Object(i.b)("li",{parentName:"ol"},"Choose your environment you are interested in deploying into at the top left."),Object(i.b)("li",{parentName:"ol"},"Create any service or select a previous service you have made."),Object(i.b)("li",{parentName:"ol"},"By default, you will be placed on the ",Object(i.b)("strong",{parentName:"li"},"Overview")," tab.")),Object(i.b)("h2",{id:"metrics-information"},"Metrics Information"),Object(i.b)("h3",{id:"summary"},"Summary"),Object(i.b)("p",null,"Shows the total amount of resources that your entire service is taking up."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Memory")," - The total memory and memory usage our service is using"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"CPU")," - The total CPU and CPU usage your service is using and ",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"When CPU is shared, the value will be shown as ",Object(i.b)("strong",{parentName:"li"},"SHARED")," and you will not be able to monitor usage.")))),Object(i.b)("h3",{id:"instances"},"Instances"),Object(i.b)("p",null,"Instances are individual live and running apps that make up your service."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Name/Instance")," - The unique name and instance identifier"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"CPU")," - Usage and dedicated vCPU allocated to your instance.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"When vCPU is shared, the value will be shown as ",Object(i.b)("strong",{parentName:"li"},"SHARED")," and you will not be able to monitor usage."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Memory")," -  Usage and dedicated memory allocated to your instance"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Restarts")," - Number of times your service has crashed and recovered"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Status")," - The health of your instance",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Healthy")," - Readily available to serve traffic"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Unhealthy")," - Currently not available and is either starting up or has crashed"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Completed")," - Service has been terminated due to a ",Object(i.b)("inlineCode",{parentName:"li"},"Deploy")," or ",Object(i.b)("inlineCode",{parentName:"li"},"Restart")," action"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Actions")," - ",Object(i.b)("inlineCode",{parentName:"li"},"...")," Provides actions you can execute on your instance",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Restart Instance")," - If there is an issue, you can force an instance restart"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"View Console")," - Takes you to your ",Object(i.b)("strong",{parentName:"li"},"Console")," tab and filters the logs with the instance you specified. ")))))}b.isMDXComponent=!0},198:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=b(n),p=a,d=u["".concat(o,".").concat(p)]||u[p]||m[p]||i;return n?r.a.createElement(d,c(c({ref:t},s),{},{components:n})):r.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);