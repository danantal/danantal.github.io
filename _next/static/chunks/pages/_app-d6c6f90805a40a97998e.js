(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{9272:function(e,t,n){"use strict";n.d(t,{r:function(){return f}});var r=n(2809);function o(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n(7294);var i=n(1664),l=n(1847),s=n(5893),a=["href","children"];function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u=(0,l.zo)("a",{padding:"8px 16px",textDecoration:"none","&:hover":{textDecoration:"underline"},variants:{color:{dark:{color:"$blue-30"},light:{color:"$blue-10"}},size:{1:{fontSize:"$1"},2:{fontSize:"$2"},3:{fontSize:"$3"}}},defaultVariants:{color:"dark",size:2}}),f=function(e){var t=e.href,n=e.children,r=o(e,a);return(0,s.jsx)(i.default,{href:t,passHref:!0,children:(0,s.jsx)(u,d(d({},r),{},{children:n}))})}},2167:function(e,t,n){"use strict";var r=n(3848);t.default=void 0;var o,i=(o=n(7294))&&o.__esModule?o:{default:o},l=n(1063),s=n(4651),a=n(7426);var c={};function d(e,t,n,r){if(e&&l.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;c[t+"%"+n+(o?"%"+o:"")]=!0}}var u=function(e){var t,n=!1!==e.prefetch,o=s.useRouter(),u=i.default.useMemo((function(){var t=l.resolveHref(o,e.href,!0),n=r(t,2),i=n[0],s=n[1];return{href:i,as:e.as?l.resolveHref(o,e.as):s||i}}),[o,e.href,e.as]),f=u.href,p=u.as,g=e.children,h=e.replace,b=e.shallow,m=e.scroll,S=e.locale;"string"===typeof g&&(g=i.default.createElement("a",null,g));var y=(t=i.default.Children.only(g))&&"object"===typeof t&&t.ref,x=a.useIntersection({rootMargin:"200px"}),k=r(x,2),v=k[0],j=k[1],R=i.default.useCallback((function(e){v(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,v]);i.default.useEffect((function(){var e=j&&n&&l.isLocalURL(f),t="undefined"!==typeof S?S:o&&o.locale,r=c[f+"%"+p+(t?"%"+t:"")];e&&!r&&d(o,f,p,{locale:t})}),[p,f,j,S,n,o]);var B={ref:R,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,i,s,a){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(n))&&(e.preventDefault(),null==s&&r.indexOf("#")>=0&&(s=!1),t[o?"replace":"push"](n,r,{shallow:i,locale:a,scroll:s}))}(e,o,f,p,h,b,m,S)},onMouseEnter:function(e){l.isLocalURL(f)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),d(o,f,p,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var $="undefined"!==typeof S?S:o&&o.locale,w=o&&o.isLocaleDomain&&l.getDomainLocale(p,$,o&&o.locales,o&&o.domainLocales);B.href=w||l.addBasePath(l.addLocale(p,$,o&&o.defaultLocale))}return i.default.cloneElement(t,B)};t.default=u},7426:function(e,t,n){"use strict";var r=n(3848);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!l,a=o.useRef(),c=o.useState(!1),d=r(c,2),u=d[0],f=d[1],p=o.useCallback((function(e){a.current&&(a.current(),a.current=void 0),n||u||e&&e.tagName&&(a.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,i=r.observer,l=r.elements;return l.set(e,t),i.observe(e),function(){l.delete(e),i.unobserve(e),0===l.size&&(i.disconnect(),s.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,u]);return o.useEffect((function(){if(!l&&!u){var e=i.requestIdleCallback((function(){return f(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[u]),[p,u]};var o=n(7294),i=n(3447),l="undefined"!==typeof IntersectionObserver;var s=new Map},1426:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var r=n(2809),o=(n(7294),n(1847)),i=n(9272),l=n(5893),s=(0,o.zo)("nav",{display:"flex",width:"100vw",height:80}),a=function(){return(0,l.jsx)(s,{children:(0,l.jsxs)("ul",{className:(0,o.iv)({display:"flex",flexGrow:999,alignItems:"center",justifyContent:"center",boxShadow:"$10",backgroundColor:"$blue-30",letterSpacing:3})(),children:[(0,l.jsx)("li",{children:(0,l.jsx)(i.r,{href:"/",color:"light",size:3,children:"ABOUT ME"})}),(0,l.jsx)("li",{children:(0,l.jsx)(i.r,{href:"/contact",color:"light",size:3,children:"CONTACT"})})]})})},c=(0,o.zo)("div",{minHeight:"100vh",display:"flex",flexDirection:"column"}),d=(0,o.zo)("main",{display:"flex",flexDirection:"column",padding:32,flexGrow:999}),u=function(e){var t=e.children;return(0,l.jsxs)(c,{children:[(0,l.jsx)(a,{}),(0,l.jsx)(d,{children:t})]})};function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g=(0,o.zY)({"*":{margin:0,padding:0,boxSizing:"border-box",fontFamily:"$inter"},li:{listStyle:"none"}});var h=function(e){var t=e.Component,n=e.pageProps;return g(),(0,l.jsx)(u,{children:(0,l.jsx)(t,p({},n))})}},1847:function(e,t,n){"use strict";n.d(t,{iv:function(){return Q},zY:function(){return ee},zo:function(){return q}});var r=n(7294),o="colors",i="sizes",l="space",s={gap:l,gridGap:l,columnGap:l,gridColumnGap:l,rowGap:l,gridRowGap:l,inset:l,insetBlock:l,insetBlockEnd:l,insetBlockStart:l,insetInline:l,insetInlineEnd:l,insetInlineStart:l,margin:l,marginTop:l,marginRight:l,marginBottom:l,marginLeft:l,marginBlock:l,marginBlockEnd:l,marginBlockStart:l,marginInline:l,marginInlineEnd:l,marginInlineStart:l,padding:l,paddingTop:l,paddingRight:l,paddingBottom:l,paddingLeft:l,paddingBlock:l,paddingBlockEnd:l,paddingBlockStart:l,paddingInline:l,paddingInlineEnd:l,paddingInlineStart:l,top:l,right:l,bottom:l,left:l,scrollMargin:l,scrollMarginTop:l,scrollMarginRight:l,scrollMarginBottom:l,scrollMarginLeft:l,scrollMarginX:l,scrollMarginY:l,scrollMarginBlock:l,scrollMarginBlockEnd:l,scrollMarginBlockStart:l,scrollMarginInline:l,scrollMarginInlineEnd:l,scrollMarginInlineStart:l,scrollPadding:l,scrollPaddingTop:l,scrollPaddingRight:l,scrollPaddingBottom:l,scrollPaddingLeft:l,scrollPaddingX:l,scrollPaddingY:l,scrollPaddingBlock:l,scrollPaddingBlockEnd:l,scrollPaddingBlockStart:l,scrollPaddingInline:l,scrollPaddingInlineEnd:l,scrollPaddingInlineStart:l,fontSize:"fontSizes",background:o,backgroundColor:o,backgroundImage:o,borderImage:o,border:o,borderBlock:o,borderBlockEnd:o,borderBlockStart:o,borderBottom:o,borderBottomColor:o,borderColor:o,borderInline:o,borderInlineEnd:o,borderInlineStart:o,borderLeft:o,borderLeftColor:o,borderRight:o,borderRightColor:o,borderTop:o,borderTopColor:o,caretColor:o,color:o,columnRuleColor:o,fill:o,outline:o,outlineColor:o,stroke:o,textDecorationColor:o,fontFamily:"fonts",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",blockSize:i,minBlockSize:i,maxBlockSize:i,inlineSize:i,minInlineSize:i,maxInlineSize:i,width:i,minWidth:i,maxWidth:i,height:i,minHeight:i,maxHeight:i,flexBasis:i,gridTemplateColumns:i,gridTemplateRows:i,borderWidth:"borderWidths",borderTopWidth:"borderWidths",borderRightWidth:"borderWidths",borderBottomWidth:"borderWidths",borderLeftWidth:"borderWidths",borderStyle:"borderStyles",borderTopStyle:"borderStyles",borderRightStyle:"borderStyles",borderBottomStyle:"borderStyles",borderLeftStyle:"borderStyles",borderRadius:"radii",borderTopLeftRadius:"radii",borderTopRightRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",boxShadow:"shadows",textShadow:"shadows",transition:"transitions",zIndex:"zIndices"},a=(e,t)=>"function"==typeof t?{"()":Function.prototype.toString.call(t)}:t,c=()=>{const e=Object.create(null);return(t,n,...r)=>{const o=(e=>JSON.stringify(e,a))(t);return o in e?e[o]:e[o]=n(t,...r)}},d=Symbol.for("sxs.internal"),u=(e,t)=>Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)),f=e=>{for(const t in e)return!0;return!1},{hasOwnProperty:p}=Object.prototype,g=e=>e.includes("-")?e:e.replace(/[A-Z]/g,(e=>"-"+e.toLowerCase())),h=/\s+(?![^()]*\))/,b=e=>t=>e(..."string"==typeof t?String(t).split(h):[t]),m={appearance:e=>({WebkitAppearance:e,appearance:e}),backfaceVisibility:e=>({WebkitBackfaceVisibility:e,backfaceVisibility:e}),backdropFilter:e=>({WebkitBackdropFilter:e,backdropFilter:e}),backgroundClip:e=>({WebkitBackgroundClip:e,backgroundClip:e}),boxDecorationBreak:e=>({WebkitBoxDecorationBreak:e,boxDecorationBreak:e}),clipPath:e=>({WebkitClipPath:e,clipPath:e}),content:e=>({content:e.includes('"')||e.includes("'")||/^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e)?e:`"${e}"`}),hyphens:e=>({WebkitHyphens:e,hyphens:e}),maskImage:e=>({WebkitMaskImage:e,maskImage:e}),tabSize:e=>({MozTabSize:e,tabSize:e}),textSizeAdjust:e=>({WebkitTextSizeAdjust:e,textSizeAdjust:e}),userSelect:e=>({WebkitUserSelect:e,userSelect:e}),marginBlock:b(((e,t)=>({marginBlockStart:e,marginBlockEnd:t||e}))),marginInline:b(((e,t)=>({marginInlineStart:e,marginInlineEnd:t||e}))),maxSize:b(((e,t)=>({maxBlockSize:e,maxInlineSize:t||e}))),minSize:b(((e,t)=>({minBlockSize:e,minInlineSize:t||e}))),paddingBlock:b(((e,t)=>({paddingBlockStart:e,paddingBlockEnd:t||e}))),paddingInline:b(((e,t)=>({paddingInlineStart:e,paddingInlineEnd:t||e})))},S=/([\d.]+)([^]*)/,y=(e,t)=>e.length?e.reduce(((e,n)=>(e.push(...t.map((e=>e.includes("&")?e.replace(/&/g,/[ +>|~]/.test(n)&&/&.*&/.test(e)?`:is(${n})`:n):n+" "+e))),e)),[]):t,x=(e,t)=>e in k&&"string"==typeof t?t.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/,((t,n,r,o)=>n+("stretch"===r?`-moz-available${o};${g(e)}:${n}-webkit-fill-available`:`-moz-fit-content${o};${g(e)}:${n}fit-content`)+o)):String(t),k={blockSize:1,height:1,inlineSize:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,width:1},v=e=>e?e+"-":"",j=(e,t,n)=>e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g,((e,r,o,i,l)=>"$"==i==!!o?e:(r||"--"==i?"calc(":"")+"var(--"+("$"===i?v(t)+(l.includes("$")?"":v(n))+l.replace(/\$/g,"-"):l)+")"+(r||"--"==i?"*"+(r||"")+(o||"1")+")":""))),R=/\s*,\s*(?![^()]*\))/,B=Object.prototype.toString,$=(e,t,n,r,o)=>{let i,l,s;const a=(e,t,n)=>{let c,d;const u=e=>{for(c in e){const h=64===c.charCodeAt(0),b=h&&Array.isArray(e[c])?e[c]:[e[c]];for(d of b){const e="object"==typeof d&&d&&d.toString===B,b=/[A-Z]/.test(p=c)?p:p.replace(/-[^]/g,(e=>e[1].toUpperCase()));if(b in r.utils){const e=r.utils[b];if(e!==l){l=e,u(e(d)),l=null;continue}}else if(b in m){const e=m[b];if(e!==s){s=e,u(e(d)),s=null;continue}}if(h&&(f=c.slice(1)in r.media?"@media "+r.media[c.slice(1)]:c,c=f.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g,((e,t,n,r,o,i)=>{const l=S.test(t),s=.0625*(l?-1:1),[a,c]=l?[r,t]:[t,r];return"("+("="===n[0]?"":">"===n[0]===l?"max-":"min-")+a+":"+("="!==n[0]&&1===n.length?c.replace(S,((e,t,r)=>Number(t)+s*(">"===n?1:-1)+r)):c)+(o?") and ("+(">"===o[0]?"min-":"max-")+a+":"+(1===o.length?i.replace(S,((e,t,n)=>Number(t)+s*(">"===o?-1:1)+n)):i):"")+")"}))),e){const e=h?n.concat(c):[...n],r=h?[...t]:y(t,c.split(R));void 0!==i&&o(w(...i)),i=void 0,a(d,r,e)}else void 0===i&&(i=[[],t,n]),c=h||36!==c.charCodeAt(0)?c:`--${v(r.prefix)}${c.slice(1).replace(/\$/g,"-")}`,d=e?d:"number"==typeof d?d&&b in I?String(d)+"px":String(d):j(x(b,null==d?"":d),r.prefix,r.themeMap[b]),i[0].push(`${h?`${c} `:`${g(c)}:`}${d}`)}}var f,p};u(e),void 0!==i&&o(w(...i)),i=void 0};a(e,t,n)},w=(e,t,n)=>`${n.map((e=>`${e}{`)).join("")}${t.length?`${t.join(",")}{`:""}${e.join(";")}${t.length?"}":""}${Array(n.length?n.length+1:0).join("}")}`,I={animationDelay:1,animationDuration:1,backgroundSize:1,blockSize:1,border:1,borderBlock:1,borderBlockEnd:1,borderBlockEndWidth:1,borderBlockStart:1,borderBlockStartWidth:1,borderBlockWidth:1,borderBottom:1,borderBottomLeftRadius:1,borderBottomRightRadius:1,borderBottomWidth:1,borderEndEndRadius:1,borderEndStartRadius:1,borderInlineEnd:1,borderInlineEndWidth:1,borderInlineStart:1,borderInlineStartWidth:1,borderInlineWidth:1,borderLeft:1,borderLeftWidth:1,borderRadius:1,borderRight:1,borderRightWidth:1,borderSpacing:1,borderStartEndRadius:1,borderStartStartRadius:1,borderTop:1,borderTopLeftRadius:1,borderTopRightRadius:1,borderTopWidth:1,borderWidth:1,bottom:1,columnGap:1,columnRule:1,columnRuleWidth:1,columnWidth:1,containIntrinsicSize:1,flexBasis:1,fontSize:1,gap:1,gridAutoColumns:1,gridAutoRows:1,gridTemplateColumns:1,gridTemplateRows:1,height:1,inlineSize:1,inset:1,insetBlock:1,insetBlockEnd:1,insetBlockStart:1,insetInline:1,insetInlineEnd:1,insetInlineStart:1,left:1,letterSpacing:1,margin:1,marginBlock:1,marginBlockEnd:1,marginBlockStart:1,marginBottom:1,marginInline:1,marginInlineEnd:1,marginInlineStart:1,marginLeft:1,marginRight:1,marginTop:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,offsetDistance:1,offsetRotate:1,outline:1,outlineOffset:1,outlineWidth:1,overflowClipMargin:1,padding:1,paddingBlock:1,paddingBlockEnd:1,paddingBlockStart:1,paddingBottom:1,paddingInline:1,paddingInlineEnd:1,paddingInlineStart:1,paddingLeft:1,paddingRight:1,paddingTop:1,perspective:1,right:1,rowGap:1,scrollMargin:1,scrollMarginBlock:1,scrollMarginBlockEnd:1,scrollMarginBlockStart:1,scrollMarginBottom:1,scrollMarginInline:1,scrollMarginInlineEnd:1,scrollMarginInlineStart:1,scrollMarginLeft:1,scrollMarginRight:1,scrollMarginTop:1,scrollPadding:1,scrollPaddingBlock:1,scrollPaddingBlockEnd:1,scrollPaddingBlockStart:1,scrollPaddingBottom:1,scrollPaddingInline:1,scrollPaddingInlineEnd:1,scrollPaddingInlineStart:1,scrollPaddingLeft:1,scrollPaddingRight:1,scrollPaddingTop:1,shapeMargin:1,textDecoration:1,textDecorationThickness:1,textIndent:1,textUnderlineOffset:1,top:1,transitionDelay:1,transitionDuration:1,verticalAlign:1,width:1,wordSpacing:1},O=e=>String.fromCharCode(e+(e>25?39:97)),z=e=>(e=>{let t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=O(t%52)+n;return O(t%52)+n})(((e,t)=>{let n=t.length;for(;n;)e=33*e^t.charCodeAt(--n);return e})(5381,JSON.stringify(e))>>>0),E=c(),P=(e,t)=>E(e,(()=>(...n)=>{let r={type:null,composers:new Set};for(const t of n)if(null!=t)if(t[d]){null==r.type&&(r.type=t[d].type);for(const e of t[d].composers)r.composers.add(e)}else t.constructor!==Object||t.$$typeof?null==r.type&&(r.type=t):r.composers.add(C(t,e));return null==r.type&&(r.type="span"),r.composers.size||r.composers.add(["PJLV",{},[],[],{},[]]),W(e,r,t)})),C=({variants:e,compoundVariants:t,defaultVariants:n,...r},o)=>{const i=`${v(o.prefix)}c-${z(r)}`,l=[],s=[],a=Object.create(null),c=[];for(const f in n)a[f]=String(n[f]);if("object"==typeof e&&e)for(const g in e){d=a,u=g,p.call(d,u)||(a[g]="undefined");const t=e[g];for(const e in t){const n={[g]:String(e)};"undefined"===String(e)&&c.push(g);const r=t[e],o=[n,r,!f(r)];l.push(o)}}var d,u;if("object"==typeof t&&t)for(const p of t){let{css:e,...t}=p;e="object"==typeof e&&e||{};for(const r in t)t[r]=String(t[r]);const n=[t,e,!f(e)];s.push(n)}return[i,r,l,s,a,c]},W=(e,t,n)=>{const[r,o,i,l]=M(t.composers),s=`.${r}${o.length>1?`:where(.${o.slice(1).join(".")})`:""}`,a=a=>{a="object"==typeof a&&a||L;const{css:c,...d}=a,u={};for(const e in i)if(delete d[e],e in a){let t=a[e];"object"==typeof t&&t?u[e]={"@initial":i[e],...t}:(t=String(t),u[e]="undefined"!==t||l.has(e)?t:i[e])}else u[e]=i[e];const f=new Set([...o]);for(const[r,o,i,l]of t.composers){n.rules.styled.cache.has(r)||(n.rules.styled.cache.add(r),$(o,[`.${r}`],[],e,(e=>{n.rules.styled.apply(e)})));const t=T(i,u,e.media),s=T(l,u,e.media,!0);for(const o of t)if(void 0!==o)for(const[t,i]of o){const o=`${r}-${z(i)}-${t}`;f.add(o),n.rules.onevar.cache.has(o)||(n.rules.onevar.cache.add(o),$(i,[`.${o}`],[],e,(e=>{n.rules.onevar.apply(e)})))}for(const o of s)if(void 0!==o)for(const[t,i]of o){const o=`${r}-${z(i)}-${t}`;f.add(o),n.rules.allvar.cache.has(o)||(n.rules.allvar.cache.add(o),$(i,[`.${o}`],[],e,(e=>{n.rules.allvar.apply(e)})))}}if("object"==typeof c&&c){const t=`${r}-i${z(c)}-css`;f.add(t),n.rules.inline.cache.has(t)||(n.rules.inline.cache.add(t),$(c,[`.${t}`],[],e,(e=>{n.rules.inline.apply(e)})))}for(const e of String(a.className||"").trim().split(/\s+/))e&&f.add(e);const p=d.className=[...f].join(" ");return{type:t.type,className:p,selector:s,props:d,toString:()=>p}};return u(a,{className:r,selector:s,[d]:t,toString:()=>(n.rules.styled.cache.has(r)||a(),r)})},M=e=>{let t="";const n=[],r={},o=[];for(const[i,,,,l,s]of e){""===t&&(t=i),n.push(i),o.push(...s);for(const e in l){const t=l[e];(void 0===r[e]||"undefined"!==t||s.includes(t))&&(r[e]=t)}}return[t,n,r,new Set(o)]},T=(e,t,n,r)=>{const o=[];e:for(let[i,l,s]of e){if(s)continue;let e,a=0;for(e in i){const r=i[e];let o=t[e];if(o!==r){if("object"!=typeof o||!o)continue e;{let e,t=0;for(const i in o)r===String(o[i])&&("@initial"!==i&&(l={[i in n?n[i]:i]:l}),a+=t,e=!0),++t;if(!e)continue e}}}(o[a]=o[a]||[]).push([r?"cv":`${e}-${i[e]}`,l])}return o},L={},D=c(),N=(e,t)=>D(e,(()=>(...n)=>{const r=()=>{for(let r of n){r="object"==typeof r&&r||{};let n=z(r);if(!t.rules.global.cache.has(n)){if(t.rules.global.cache.add(n),"@import"in r){let e=[].indexOf.call(t.sheet.cssRules,t.rules.themed.group)-1;for(let n of[].concat(r["@import"]))n=n.includes('"')||n.includes("'")?n:`"${n}"`,t.sheet.insertRule(`@import ${n};`,e++);delete r["@import"]}$(r,[],[],e,(e=>{t.rules.global.apply(e)}))}}return""};return u(r,{toString:r})})),A=c(),_=(e,t)=>A(e,(()=>n=>{const r=`${v(e.prefix)}k-${z(n)}`,o=()=>{if(!t.rules.global.cache.has(r)){t.rules.global.cache.add(r);const o=[];$(n,[],[],e,(e=>o.push(e)));const i=`@keyframes ${r}{${o.join("")}}`;t.rules.global.apply(i)}return r};return u(o,{get name(){return o()},toString:o})})),H=class{constructor(e,t,n,r){this.token=null==e?"":String(e),this.value=null==t?"":String(t),this.scale=null==n?"":String(n),this.prefix=null==r?"":String(r)}get computedValue(){return"var("+this.variable+")"}get variable(){return"--"+v(this.prefix)+v(this.scale)+this.token}toString(){return this.computedValue}},F=c(),G=(e,t)=>F(e,(()=>(n,r)=>{r="object"==typeof n&&n||Object(r);const o=`.${n=(n="string"==typeof n?n:"")||`${v(e.prefix)}t-${z(r)}`}`,i={},l=[];for(const t in r){i[t]={};for(const n in r[t]){const o=`--${v(e.prefix)}${t}-${n}`,s=j(String(r[t][n]),e.prefix,t);i[t][n]=new H(n,s,t,e.prefix),l.push(`${o}:${s}`)}}const s=()=>{if(l.length&&!t.rules.themed.cache.has(n)){t.rules.themed.cache.add(n);const o=`${r===e.theme?":root,":""}.${n}{${l.join(";")}}`;t.rules.themed.apply(o)}return n};return{...i,get className(){return s()},selector:o,toString:s}})),V=["themed","global","styled","onevar","allvar","inline"],U=e=>{let t;const n=()=>{if(t){const{rules:e,sheet:n}=t;if(!n.deleteRule){for(;3===Object(Object(n.cssRules)[0]).type;)n.cssRules.splice(0,1);n.cssRules=[]}for(const t in e)delete e[t];n.ownerRule&&(n.ownerRule.textContent=n.ownerRule.textContent)}const r=Object(e).styleSheets||[];for(const e of r)if(!e.href||e.href.startsWith(location.origin)){for(let r=0,o=e.cssRules;o[r];++r){const i=Object(o[r]);if(1!==i.type)continue;const l=Object(o[r+1]);if(4!==l.type)continue;++r;const{cssText:s}=i;if(!s.startsWith("--sxs"))continue;const a=s.slice(14,-3).trim().split(/\s+/),c=V[a[0]];c&&(t||(t={sheet:e,reset:n,rules:{}}),t.rules[c]={group:l,index:r,cache:new Set(a)})}if(t)break}if(!t){const r=(e,t)=>({type:t,cssRules:[],insertRule(e,t){this.cssRules.splice(t,0,r(e,{import:3,undefined:1}[(e.toLowerCase().match(/^@([a-z]+)/)||[])[1]]||4))},get cssText(){return"@media{}"===e?`@media{${[].map.call(this.cssRules,(e=>e.cssText)).join("")}}`:e}});t={sheet:e?(e.head||e).appendChild(document.createElement("style")).sheet:r("","text/css"),rules:{},reset:n,toString(){const{cssRules:e}=t.sheet;return[].map.call(e,((n,r)=>{const{cssText:o}=n;let i="";if(o.startsWith("--sxs"))return"";if(e[r-1]&&(i=e[r-1].cssText).startsWith("--sxs")){if(!n.cssRules.length)return"";for(const e in t.rules)if(t.rules[e].group===n)return`--sxs{--sxs:${[...t.rules[e].cache].join(" ")}}${o}`;return n.cssRules.length?`${i}${o}`:""}return o})).join("")}}}const{sheet:o,rules:i}=t;if(!i.inline){const e=o.cssRules.length;o.insertRule("@media{}",e),o.insertRule("--sxs{--sxs:5}",e),i.inline={index:e,group:o.cssRules[e+1],cache:new Set([5])}}if(Z(i.inline),!i.allvar){const e=i.inline.index;o.insertRule("@media{}",e),o.insertRule("--sxs{--sxs:4}",e),i.allvar={index:e,group:o.cssRules[e+1],cache:new Set([4])}}if(Z(i.allvar),!i.onevar){const e=i.allvar.index;o.insertRule("@media{}",e),o.insertRule("--sxs{--sxs:3}",e),i.onevar={index:e,group:o.cssRules[e+1],cache:new Set([3])}}if(Z(i.onevar),!i.styled){const e=i.onevar.index;o.insertRule("@media{}",e),o.insertRule("--sxs{--sxs:2}",e),i.styled={index:e,group:o.cssRules[e+1],cache:new Set([2])}}if(Z(i.styled),!i.global){const e=i.styled.index;o.insertRule("@media{}",e),o.insertRule("--sxs{--sxs:1}",e),i.global={index:e,group:o.cssRules[e+1],cache:new Set([1])}}if(Z(i.global),!i.themed){const e=i.global.index;o.insertRule("@media{}",e),o.insertRule("--sxs{--sxs:0}",e),i.themed={index:e,group:o.cssRules[e+1],cache:new Set([0])}}Z(i.themed)};return n(),t},Z=e=>{const t=e.group;let n=t.cssRules.length;e.apply=e=>{try{t.insertRule(e,n),++n}catch{}}},K=c(),X=c(),Y=e=>{const t=(e=>{let t=!1;const n=K(e,(e=>{t=!0;const n="prefix"in(e="object"==typeof e&&e||{})?String(e.prefix):"",r="object"==typeof e.media&&e.media||{},o="object"==typeof e.root?e.root||null:globalThis.document||null,i="object"==typeof e.theme&&e.theme||{},l={prefix:n,media:r,root:o,theme:i,themeMap:"object"==typeof e.themeMap&&e.themeMap||{...s},utils:"object"==typeof e.utils&&e.utils||{}},a=U(o),c={css:P(l,a),globalCss:N(l,a),keyframes:_(l,a),createTheme:G(l,a),reset(){a.reset(),c.theme.toString()},theme:{},sheet:a,config:l,prefix:n,getCssText:a.toString,toString:a.toString};return String(c.theme=c.createTheme(i)),c}));return t||n.reset(),n})(e);return t.styled=(({config:e,sheet:t})=>X(e,(()=>{const n=P(e,t);return(...e)=>{const t=n(...e),o=t[d].type,i=r.forwardRef(((e,n)=>{const i=e&&e.as||o,l=t(e).props;return delete l.as,l.ref=n,r.createElement(i,l)}));return i.className=t.className,i.displayName=`Styled.${o.displayName||o.name||o}`,i.selector=t.selector,i.toString=()=>t.selector,i[d]=t[d],i}})))(t),t},J=Y({theme:{fonts:{inter:"Inter, sans-serif"},colors:{black:"black",white:"white","blue-10":"#EBF7FFFF","blue-20":"#5fa8d3ff","blue-30":"#1b4965ff"},fontWeights:{regular:300,bold:700},fontSizes:{root:"16px",1:"0.85rem",2:"$root",3:"1.15rem"},shadows:{10:"0 1px 3px hsla(0,0%,0%,0.2)"}}}),q=J.styled,Q=J.css,ee=J.globalCss;J.getCssText},6363:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(1426)}])},1664:function(e,t,n){e.exports=n(2167)},2809:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return r}})}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(6363),t(4651)}));var n=e.O();_N_E=n}]);