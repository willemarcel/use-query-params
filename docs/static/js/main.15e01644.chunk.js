(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=t(0);function a(e){return{replace:function(r){e.navigate("".concat(r.protocol,"//").concat(r.host).concat(r.pathname).concat(r.search),{replace:!0})},push:function(r){e.navigate("".concat(r.protocol,"//").concat(r.host).concat(r.pathname).concat(r.search),{replace:!1})}}}function c(){var e,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},r);return"undefined"!==typeof window&&(t.history||(t.history=(e=window.history,{replace:function(r){e.replaceState(r.state,"","".concat(r.protocol,"//").concat(r.host).concat(r.pathname).concat(r.search))},push:function(r){e.pushState(r.state,"","".concat(r.protocol,"//").concat(r.host).concat(r.pathname).concat(r.search))}})),t.location||(t.location=window.location)),t}function o(e){var t=e.children,o=e.ReactRouterRoute,u=e.reachHistory,i=e.history,l=e.location;return o?n.createElement(o,null,function(e){return n.createElement(r.QueryParamContext.Provider,{value:c(e)},t)}):u?n.createElement(r.QueryParamContext.Provider,{value:c({history:a(u),location:l})},t):n.createElement(r.QueryParamContext.Provider,{value:c({history:i,location:l})},t)}r.QueryParamContext=n.createContext(c()),r.QueryParamProvider=o,r.default=o},11:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=t(7);function a(e,r,t){switch(arguments.length>3&&void 0!==arguments[3]?arguments[3]:"replaceIn"){case"replaceIn":t.replace(n.updateInLocation(e,r));break;case"pushIn":t.push(n.updateInLocation(e,r));break;case"replace":t.replace(n.updateLocation(e,r));break;case"push":t.push(n.updateLocation(e,r))}}r.updateUrlQuery=a,r.default=a},12:function(e,r,t){"use strict";var n=t(13),a=t(36),c=t(14);function o(e){if(null!=e){var r=e instanceof Array?e[0]:e;if(null!=r&&""!==r){var t=+r;if(!isNaN(t))return t}}}function u(e){if(e)return e instanceof Array?e.map(function(e){return""===e?void 0:e}).filter(function(e){return void 0!==e}):[e]}function i(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"_";if(e)return e.join(r)}function l(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"_";if(null!=e){var t=e instanceof Array?e[0]:e;if(t)return t.split(r).map(function(e){return""===e?void 0:e}).filter(function(e){return void 0!==e})}}function d(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"_";if(e&&Object.keys(e).length)return Object.keys(e).map(function(t){return"".concat(t).concat(r).concat(e[t])}).join(t)}function s(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"_";if(null!=e){var a=e instanceof Array?e[0]:e;if(a&&a.length){var c={};return a.split(t).forEach(function(e){var t=e.split(r),a=n(t,2),o=a[0],u=a[1];c[o]=""===u?void 0:u}),c}}}Object.defineProperty(r,"__esModule",{value:!0}),r.encodeDate=function(e){if(null!=e){var r=e.getFullYear(),t=e.getMonth()+1,n=e.getDate();return"".concat(r,"-").concat(t<10?"0".concat(t):t,"-").concat(n<10?"0".concat(n):n)}},r.decodeDate=function(e){if(null!=e&&e.length){var r=e instanceof Array?e[0]:e;if(null!=r&&r.length){var t=r.split("-");null!=t[1]?t[1]-=1:(t[1]=0,t[2]=1);var n=a(Date,c(t));if(!isNaN(n.getTime()))return n}}},r.encodeBoolean=function(e){if(void 0!==e)return e?"1":"0"},r.decodeBoolean=function(e){if(null!=e){var r=e instanceof Array?e[0]:e;return"1"===r||"0"!==r&&void 0}},r.encodeNumber=function(e){if(null!=e)return String(e)},r.decodeNumber=o,r.encodeString=function(e){if(null!=e)return String(e)},r.decodeString=function(e){if(null!=e){var r=e instanceof Array?e[0]:e;if(null!=r)return String(r)}},r.encodeJson=function(e){if(null!=e)return JSON.stringify(e)},r.decodeJson=function(e){if(null!=e){var r=e instanceof Array?e[0]:e;if(r){var t;try{t=JSON.parse(r)}catch(n){}return t}}},r.encodeArray=function(e){if(e)return e},r.decodeArray=u,r.encodeNumericArray=function(e){if(e)return e.map(function(e){return"".concat(e)})},r.decodeNumericArray=function(e){var r=u(e);if(r)return r.map(function(e){return+e}).filter(function(e){return void 0!==e&&!isNaN(e)})},r.encodeDelimitedArray=i,r.decodeDelimitedArray=l,r.encodeDelimitedNumericArray=i,r.decodeDelimitedNumericArray=function(e){var r=l(e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:"_");if(r)return r.map(function(e){return null==e?void 0:+e}).filter(function(e){return void 0!==e&&!isNaN(e)})},r.encodeObject=d,r.decodeObject=s,r.encodeNumericObject=d,r.decodeNumericObject=function(e){var r=s(e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-",arguments.length>2&&void 0!==arguments[2]?arguments[2]:"_");if(r)return Object.keys(r).forEach(function(e){void 0!==r[e]&&(r[e]=o(r[e]))}),r}},16:function(e,r,t){"use strict";var n=t(17);Object.defineProperty(r,"__esModule",{value:!0});var a=t(0),c=t(7),o=t(10),u=t(11);r.useQueryParam=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c.StringParam,t=arguments.length>2?arguments[2]:void 0,i=a.useContext(o.QueryParamContext),l=i.history,d=i.location;t||(t=a.useMemo(function(){return c.parse(d.search)||{}},[d.search]));var s=t[e];return[a.useMemo(function(){if(null!=s)return r.decode(s)},[s instanceof Array?c.stringify({name:s}):s]),a.useCallback(function(t,a){var c=r.encode(t);u.updateUrlQuery(n({},e,c),d,l,a)},[d])]}},238:function(e,r,t){},239:function(e,r,t){},243:function(e,r,t){"use strict";t.r(r);var n=t(0),a=t.n(n),c=t(18),o=t.n(c),u=t(246),i=t(248),l=t(6),d=t(3),s=t(247),m=t(245),f=t(8),y=t.n(f),v=function(){var e=Object(d.useQueryParam)("foo",d.StringParam),r=Object(l.a)(e,2),t=r[0],a=r[1],c=Object(d.useQueryParam)("arr",d.NumericArrayParam),o=Object(l.a)(c,2),u=o[0],i=o[1],f=n.useRef(u);n.useEffect(function(){f.current!==u?console.log("new array. was:",f.current,"now:",u):console.log("same array"),f.current=u});var v=y()(4),p=[Math.round(100*Math.random()),Math.round(100*Math.random()),Math.round(100*Math.random())];return n.createElement("div",{className:"UseQueryParamExample"},n.createElement("h2",{className:"text-center"},"useQueryParam Example"),n.createElement("div",{className:"example-block"},n.createElement(s.a,{language:"javascript",style:m.a},"const [foo, setFoo] = useQueryParam('foo', StringParam)"),n.createElement("div",null,"The value of ",n.createElement("b",null,"foo")," is"," ",n.createElement("code",null,void 0===t?"undefined":JSON.stringify(t)),n.createElement("button",{className:"set-btn",onClick:function(){return a(v)}},"setFoo(",JSON.stringify(v),")"))),n.createElement("div",{className:"example-block"},n.createElement(s.a,{language:"javascript",style:m.a},"const [arr, setArr] = useQueryParam('arr', NumericArrayParam)"),n.createElement("div",null,"The value of ",n.createElement("b",null,"arr")," is"," ",n.createElement("code",null,void 0===u?"undefined":JSON.stringify(u)),n.createElement("button",{className:"set-btn",onClick:function(){return i(p,"push")}},"setArr(",JSON.stringify(p),", 'push')"),n.createElement("p",null,"Since we specify the update type as ",n.createElement("code",null,"push"),", the back button will work. If we used ",n.createElement("code",null,"pushIn"),", the value of"," ",n.createElement("b",null,"foo")," would be retained."),n.createElement("button",{className:"set-btn",onClick:function(){return i(p,"pushIn")}},"setArr(",JSON.stringify(p),", 'pushIn')"))))},p=function(){var e=Object(d.useQueryParams)({foo:d.StringParam,arr:d.NumericArrayParam}),r=Object(l.a)(e,2),t=r[0],a=r[1],c=t.foo,o=t.arr,u=n.useRef(o);n.useEffect(function(){u.current!==o?console.log("new array. was:",u.current,"now:",o):console.log("same array"),u.current=o});var i=y()(4),f=[Math.round(100*Math.random()),Math.round(100*Math.random()),Math.round(100*Math.random())];return n.createElement("div",{className:"UseQueryParamsExample"},n.createElement("h2",{className:"text-center"},"useQueryParams Example"),n.createElement("div",{className:"example-block"},n.createElement(s.a,{language:"javascript",style:m.a},"const [query, setQuery] = useQueryParams({\n  foo: StringParam,\n  arr: NumericArrayParam,\n});\nconst { foo, arr } = query;"),n.createElement("div",null,"The value of ",n.createElement("b",null,"foo")," is"," ",n.createElement("code",null,void 0===c?"undefined":JSON.stringify(c)),n.createElement("button",{className:"set-btn",onClick:function(){return a({foo:i})}},"setQuery(",JSON.stringify({foo:i},null,2),")"))),n.createElement("div",{className:"example-block"},n.createElement("div",null,"The value of ",n.createElement("b",null,"arr")," is"," ",n.createElement("code",null,void 0===o?"undefined":JSON.stringify(o)),n.createElement("button",{className:"set-btn",onClick:function(){return a({arr:f},"push")}},"setQuery(",JSON.stringify({arr:f},null,2),", 'push')"),n.createElement("p",null,"Since we specify the update type as ",n.createElement("code",null,"push"),", the back button will work. If we used ",n.createElement("code",null,"pushIn"),", the value of"," ",n.createElement("b",null,"foo")," would be retained."),n.createElement("button",{className:"set-btn",onClick:function(){return a({arr:f},"pushIn")}},"setQuery(",JSON.stringify({arr:f},null,2),", 'pushIn')"),n.createElement("p",null,"With ",n.createElement("code",null,"setQuery"),", we can update multiple parameters at once."),n.createElement("button",{className:"set-btn",onClick:function(){return a({arr:f,foo:i})}},"setQuery(",JSON.stringify({arr:f,foo:i},null,2),")"))))},h=(t(238),function(e){var r=n.useState(0),t=Object(l.a)(r,2),a=t[0],c=t[1];return n.createElement("div",{className:"App"},n.createElement("header",{className:"text-center"},n.createElement("h1",null,"useQueryParams"),n.createElement("div",{className:"ext-nav"},n.createElement("a",{href:"https://github.com/pbeshai/use-query-params"},"GitHub")),n.createElement("div",{className:"nav"},n.createElement("button",{className:0===a?"active":void 0,onClick:function(){return c(0)}},"useQueryParam"),n.createElement("button",{className:1===a?"active":void 0,onClick:function(){return c(1)}},"useQueryParams"))),n.createElement("div",null,0===a&&n.createElement(v,null),1===a&&n.createElement(p,null)))});t(239);o.a.render(a.a.createElement(u.a,null,a.a.createElement(d.QueryParamProvider,{ReactRouterRoute:i.a},a.a.createElement(h,null))),document.getElementById("root"))},25:function(e,r,t){e.exports=t(243)},3:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),function(e){for(var t in e)r.hasOwnProperty(t)||(r[t]=e[t])}(t(7));var n=t(16);r.useQueryParam=n.useQueryParam;var a=t(47);r.useQueryParams=a.useQueryParams;var c=t(11);r.updateUrlQuery=c.updateUrlQuery;var o=t(10);r.QueryParamProvider=o.QueryParamProvider,r.QueryParamContext=o.QueryParamContext},41:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=t(12);r.StringParam={encode:n.encodeString,decode:n.decodeString},r.NumberParam={encode:n.encodeNumber,decode:n.decodeNumber},r.ObjectParam={encode:n.encodeObject,decode:n.decodeObject},r.ArrayParam={encode:n.encodeArray,decode:n.decodeArray},r.NumericArrayParam={encode:n.encodeNumericArray,decode:n.decodeNumericArray},r.JsonParam={encode:n.encodeJson,decode:n.decodeJson},r.DateParam={encode:n.encodeDate,decode:n.decodeDate},r.BooleanParam={encode:n.encodeBoolean,decode:n.decodeBoolean},r.NumericObjectParam={encode:n.encodeNumericObject,decode:n.decodeNumericObject},r.DelimitedArrayParam={encode:n.encodeDelimitedArray,decode:n.decodeDelimitedArray},r.DelimitedNumericArrayParam={encode:n.encodeDelimitedNumericArray,decode:n.decodeDelimitedNumericArray}},42:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=t(15);function a(e){return Object.keys(e).reduce(function(r,t){var n=e[t];return null!=n&&""!==n&&(r[t]=n),r},{})}function c(e,r){var t=n.stringify(a(e));return Object.assign({},r,{key:"".concat(Date.now()),search:t.length?"?".concat(t):""})}r.updateLocation=c,r.updateInLocation=function(e,r){var t=r.query||n.parse(r.search);return c(a(Object.assign({},t,e)),r)}},45:function(e,r,t){"use strict";function n(e,r){for(var t={},n=Object.keys(r),a=0;a<n.length;a++){var c=n[a],o=r[c];null!=o?e[c]?t[c]=e[c].encode(r[c]):t[c]=String(o):t[c]=void 0}return t}Object.defineProperty(r,"__esModule",{value:!0}),r.encodeQueryParams=n,r.default=n},46:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.decodeQueryParams=function(e,r){for(var t={},n=Object.keys(r),a=0;a<n.length;a++){var c=n[a],o=r[c];null!=o?e[c]?t[c]=e[c].decode(o):t[c]=o:t[c]=void 0}return t}},47:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=t(0),a=t(7),c=t(16),o=t(11),u=t(10);r.useQueryParams=function(e){for(var r=n.useContext(u.QueryParamContext),t=r.history,i=r.location,l=n.useMemo(function(){return a.parse(i.search)||{}},[i.search]),d=Object.keys(e),s={},m=0;m<d.length;m++){var f=d[m];s[f]=c.useQueryParam(f,e[f],l)[0]}return[s,n.useCallback(function(r,n){var c=a.encodeQueryParams(e,r);o.default(c,i,t,n)},[i])]},r.default=r.useQueryParams},7:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=t(12);r.encodeDate=n.encodeDate,r.decodeDate=n.decodeDate,r.encodeBoolean=n.encodeBoolean,r.decodeBoolean=n.decodeBoolean,r.encodeNumber=n.encodeNumber,r.decodeNumber=n.decodeNumber,r.encodeString=n.encodeString,r.decodeString=n.decodeString,r.encodeJson=n.encodeJson,r.decodeJson=n.decodeJson,r.encodeArray=n.encodeArray,r.decodeArray=n.decodeArray,r.encodeNumericArray=n.encodeNumericArray,r.decodeNumericArray=n.decodeNumericArray,r.encodeDelimitedArray=n.encodeDelimitedArray,r.decodeDelimitedArray=n.decodeDelimitedArray,r.encodeDelimitedNumericArray=n.encodeDelimitedNumericArray,r.decodeDelimitedNumericArray=n.decodeDelimitedNumericArray,r.encodeObject=n.encodeObject,r.decodeObject=n.decodeObject,r.encodeNumericObject=n.encodeNumericObject,r.decodeNumericObject=n.decodeNumericObject;var a=t(41);r.StringParam=a.StringParam,r.NumberParam=a.NumberParam,r.ObjectParam=a.ObjectParam,r.ArrayParam=a.ArrayParam,r.NumericArrayParam=a.NumericArrayParam,r.JsonParam=a.JsonParam,r.DateParam=a.DateParam,r.BooleanParam=a.BooleanParam,r.NumericObjectParam=a.NumericObjectParam,r.DelimitedArrayParam=a.DelimitedArrayParam,r.DelimitedNumericArrayParam=a.DelimitedNumericArrayParam;var c=t(42);r.updateLocation=c.updateLocation,r.updateInLocation=c.updateInLocation;var o=t(45);r.encodeQueryParams=o.encodeQueryParams;var u=t(46);r.decodeQueryParams=u.decodeQueryParams;var i=t(15);r.stringify=i.stringify,r.parse=i.parse,r.parseUrl=i.parseUrl,r.extract=i.extract}},[[25,1,2]]]);
//# sourceMappingURL=main.15e01644.chunk.js.map