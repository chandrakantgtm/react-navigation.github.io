(window.webpackJsonp=window.webpackJsonp||[]).push([[320],{446:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return l}));var n=a(1),i=a(9),r=(a(0),a(468)),o={id:"pitch",title:"Pitch & anti-pitch",sidebar_label:"Pitch & anti-pitch"},s={id:"version-5.x/pitch",title:"Pitch & anti-pitch",description:'It\'s useful when considering whether or not to use a project to understand the tradeoffs that the developers of the project made when building it. What problems does it explicitly try to solve for you, and which ones does it ignore? What are the current limitations of the project and common problems that people encounter? These are the kinds of questions that we believe you should have answers to when making an important technology decision for your project, and so we have documented answers to these questions as best we can here, in the form of a "pitch" (why you should use it) and "anti-pitch" (why you should not use it). Please [submit a pull request](https://github.com/react-navigation/react-navigation.github.io) if you believe we have omitted important information!',source:"@site/versioned_docs/version-5.x/pitch.md",permalink:"/docs/pitch",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/source/versioned_docs/version-5.x/pitch.md",version:"5.x",sidebar_label:"Pitch & anti-pitch",sidebar:"version-5.x/docs",previous:{title:"More Resources",permalink:"/docs/more-resources"},next:{title:"Alternative libraries",permalink:"/docs/alternatives"}},c=[{value:"Pitch",id:"pitch",children:[]},{value:"Anti-pitch",id:"anti-pitch",children:[]}],h={rightToc:c};function l(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},h,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,'It\'s useful when considering whether or not to use a project to understand the tradeoffs that the developers of the project made when building it. What problems does it explicitly try to solve for you, and which ones does it ignore? What are the current limitations of the project and common problems that people encounter? These are the kinds of questions that we believe you should have answers to when making an important technology decision for your project, and so we have documented answers to these questions as best we can here, in the form of a "pitch" (why you should use it) and "anti-pitch" (why you should not use it). Please ',Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/react-navigation/react-navigation.github.io"}),"submit a pull request")," if you believe we have omitted important information!"),Object(r.b)("h2",{id:"pitch"},"Pitch"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"React Navigation doesn't include any native code in the library itself, but we use many native libraries such as ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://software-mansion.github.io/react-native-reanimated/"}),"Reanimated"),", ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://software-mansion.github.io/react-native-gesture-handler/"}),"Gesture Handler"),", ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/software-mansion/react-native-screens"}),"Screens")," etc. to implement performant animations and gestures. Depending on the navigator, many UI components are written in JavaScript on top of React Native primitives. This has a lot of benefits:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Easy OTA updates"),Object(r.b)("li",{parentName:"ul"},"Debuggable"),Object(r.b)("li",{parentName:"ul"},"Customizable"))),Object(r.b)("li",{parentName:"ul"},"Most apps heavily customize navigation, to do this with an API that wraps native navigation you will need to write a lot of native code. In React Navigation, we provide navigators written fully with JavaScript (e.g. ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/stack-navigator"}),"Stack Navigator"),") and navigators implemented on top of platform navigation primitives (e.g. ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/software-mansion/react-native-screens/tree/master/native-stack"}),"Native Stack Navigator"),"). This lets you pick the navigators suitable for your use case, depending on whether you want native platform behavior or full customizability."),Object(r.b)("li",{parentName:"ul"},"It's easy to write your own navigators that integrate cleanly with standard navigators, or to fork the standard navigators and create your own version of them with the exact look and feel you want in your app.")),Object(r.b)("h2",{id:"anti-pitch"},"Anti-pitch"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Improvements may require breaking changes. We are working to make ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.quora.com/What-is-the-origin-of-the-phrase-make-the-easy-things-easy-and-the-hard-things-possible"}),'"easy things easy and hard things possible"')," and this may require us to change the API at times."),Object(r.b)("li",{parentName:"ul"},"Many navigators don't directly use the native navigation APIs on iOS and Android; rather, they use the lowest level pieces and then re-creates some subset of the APIs on top. This is a conscious choice in order to make it possible for users to customize any part of the navigation experience (because it's implemented in JavaScript) and to be able to debug issues that they encounter without needing to learn Objective C / Swift / Java / Kotlin.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"If you need the exact platform behavior, you can choose to use the navigators that use native platform primitives (e.g. ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/software-mansion/react-native-screens/tree/master/native-stack"}),"Native Stack Navigator"),"), or use another library that wraps the platform APIs. Read more about these in ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/alternatives"}),"Alternatives")," and be sure to understand the tradeoffs that they make before digging in!"))),Object(r.b)("li",{parentName:"ul"},"There are other limitations which you may want to consider, see ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/limitations"}),"Limitations")," for more details.")))}l.isMDXComponent=!0},468:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return d}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var h=i.a.createContext({}),l=function(e){var t=i.a.useContext(h),a=t;return e&&(a="function"==typeof e?e(t):s({},t,{},e)),a},u=function(e){var t=l(e.components);return i.a.createElement(h.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,h=c(e,["components","mdxType","originalType","parentName"]),u=l(a),b=n,d=u["".concat(o,".").concat(b)]||u[b]||p[b]||r;return a?i.a.createElement(d,s({ref:t},h,{components:a})):i.a.createElement(d,s({ref:t},h))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var h=2;h<r;h++)o[h]=a[h];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);