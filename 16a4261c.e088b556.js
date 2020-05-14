(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{102:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var o=n(1),r=n(6),i=(n(0),n(163)),a={title:"Motivation"},c={id:"introduction/motivation",title:"Motivation",description:"Managing state is hard. As your app grows, you'll discover interconnected data dependencies between deeply nested components. You can promote this common data to React Context, but in doing so you'll end up coupling the top of your component tree (your providers) with the leaves of the tree (your consumers), making it difficult to code-split.",source:"@site/docs/introduction/motivation.md",permalink:"/docs/introduction/motivation",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/introduction/motivation.md",sidebar:"someSidebar",next:{title:"Core Concepts",permalink:"/docs/introduction/core-concepts"}},s=[],u={rightToc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Managing state is hard. As your app grows, you'll discover interconnected data dependencies between deeply nested components. You can promote this common data to React Context, but in doing so you'll end up coupling the top of your component tree (your providers) with the leaves of the tree (your consumers), making it difficult to code-split."),Object(i.b)("p",null,"Popular state management libraries tend to require too much boilerplate and/or don't support common patterns out of the box, including ",Object(i.b)("strong",{parentName:"p"},"persistence")," (i.e saving state to the URL), ",Object(i.b)("strong",{parentName:"p"},"code-splitting"),", and first-class support for managing asynchronous state using hooks and Suspense."),Object(i.b)("p",null,"Recoil was created to solve these issues. Below are some highlights:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Recoil has minimal boilerplate."),Object(i.b)("li",{parentName:"ul"},"Recoil exposes a simple get/set interface, similar to React state."),Object(i.b)("li",{parentName:"ul"},"Recoil is built with Suspense, Concurrent Rendering, and Hooks in mind."),Object(i.b)("li",{parentName:"ul"},"Derived state in recoil can move between being synchronous and asynchronous without modifying the components that use it."),Object(i.b)("li",{parentName:"ul"},"Recoil's state definition is incremental and distributed, making code-splitting possible."),Object(i.b)("li",{parentName:"ul"},"Recoil treats browser navigation as a first-class concept. You can encode state transitions into links, which can then be opened in a new tab."),Object(i.b)("li",{parentName:"ul"},"Recoil makes it easy to persist the entire application state in a way that is backwards-compatible, so persisted states can survive application changes.")))}p.isMDXComponent=!0},163:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var o=n(0),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),p=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},l=function(e){var t=p(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(n),m=o,b=l["".concat(a,".").concat(m)]||l[m]||d[m]||i;return n?r.a.createElement(b,c({ref:t},u,{components:n})):r.a.createElement(b,c({ref:t},u))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);