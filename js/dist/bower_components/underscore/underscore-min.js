(function(){var e=this,t=e._,n=Array.prototype,r=Object.prototype,i=Function.prototype,s=n.push,o=n.slice,u=n.concat,a=r.toString,f=r.hasOwnProperty,l=Array.isArray,c=Object.keys,h=i.bind,p=function(e){return e instanceof p?e:this instanceof p?void (this._wrapped=e):new p(e)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=p),exports._=p):e._=p,p.VERSION="1.7.0";var d=function(e,t,n){if(t===void 0)return e;switch(null==n?3:n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,i){return e.call(t,n,r,i)};case 4:return function(n,r,i,s){return e.call(t,n,r,i,s)}}return function(){return e.apply(t,arguments)}};p.iteratee=function(e,t,n){return null==e?p.identity:p.isFunction(e)?d(e,t,n):p.isObject(e)?p.matches(e):p.property(e)},p.each=p.forEach=function(e,t,n){if(null==e)return e;t=d(t,n);var r,i=e.length;if(i===+i)for(r=0;i>r;r++)t(e[r],r,e);else{var s=p.keys(e);for(r=0,i=s.length;i>r;r++)t(e[s[r]],s[r],e)}return e},p.map=p.collect=function(e,t,n){if(null==e)return[];t=p.iteratee(t,n);for(var r,i=e.length!==+e.length&&p.keys(e),s=(i||e).length,o=Array(s),u=0;s>u;u++)r=i?i[u]:u,o[u]=t(e[r],r,e);return o};var v="Reduce of empty array with no initial value";p.reduce=p.foldl=p.inject=function(e,t,n,r){null==e&&(e=[]),t=d(t,r,4);var i,s=e.length!==+e.length&&p.keys(e),o=(s||e).length,u=0;if(arguments.length<3){if(!o)throw new TypeError(v);n=e[s?s[u++]:u++]}for(;o>u;u++)i=s?s[u]:u,n=t(n,e[i],i,e);return n},p.reduceRight=p.foldr=function(e,t,n,r){null==e&&(e=[]),t=d(t,r,4);var i,s=e.length!==+e.length&&p.keys(e),o=(s||e).length;if(arguments.length<3){if(!o)throw new TypeError(v);n=e[s?s[--o]:--o]}for(;o--;)i=s?s[o]:o,n=t(n,e[i],i,e);return n},p.find=p.detect=function(e,t,n){var r;return t=p.iteratee(t,n),p.some(e,function(e,n,i){return t(e,n,i)?(r=e,!0):void 0}),r},p.filter=p.select=function(e,t,n){var r=[];return null==e?r:(t=p.iteratee(t,n),p.each(e,function(e,n,i){t(e,n,i)&&r.push(e)}),r)},p.reject=function(e,t,n){return p.filter(e,p.negate(p.iteratee(t)),n)},p.every=p.all=function(e,t,n){if(null==e)return!0;t=p.iteratee(t,n);var r,i,s=e.length!==+e.length&&p.keys(e),o=(s||e).length;for(r=0;o>r;r++)if(i=s?s[r]:r,!t(e[i],i,e))return!1;return!0},p.some=p.any=function(e,t,n){if(null==e)return!1;t=p.iteratee(t,n);var r,i,s=e.length!==+e.length&&p.keys(e),o=(s||e).length;for(r=0;o>r;r++)if(i=s?s[r]:r,t(e[i],i,e))return!0;return!1},p.contains=p.include=function(e,t){return null==e?!1:(e.length!==+e.length&&(e=p.values(e)),p.indexOf(e,t)>=0)},p.invoke=function(e,t){var n=o.call(arguments,2),r=p.isFunction(t);return p.map(e,function(e){return(r?t:e[t]).apply(e,n)})},p.pluck=function(e,t){return p.map(e,p.property(t))},p.where=function(e,t){return p.filter(e,p.matches(t))},p.findWhere=function(e,t){return p.find(e,p.matches(t))},p.max=function(e,t,n){var r,i,s=-1/0,o=-1/0;if(null==t&&null!=e){e=e.length===+e.length?e:p.values(e);for(var u=0,a=e.length;a>u;u++)r=e[u],r>s&&(s=r)}else t=p.iteratee(t,n),p.each(e,function(e,n,r){i=t(e,n,r),(i>o||i===-1/0&&s===-1/0)&&(s=e,o=i)});return s},p.min=function(e,t,n){var r,i,s=1/0,o=1/0;if(null==t&&null!=e){e=e.length===+e.length?e:p.values(e);for(var u=0,a=e.length;a>u;u++)r=e[u],s>r&&(s=r)}else t=p.iteratee(t,n),p.each(e,function(e,n,r){i=t(e,n,r),(o>i||1/0===i&&1/0===s)&&(s=e,o=i)});return s},p.shuffle=function(e){for(var t,n=e&&e.length===+e.length?e:p.values(e),r=n.length,i=Array(r),s=0;r>s;s++)t=p.random(0,s),t!==s&&(i[s]=i[t]),i[t]=n[s];return i},p.sample=function(e,t,n){return null==t||n?(e.length!==+e.length&&(e=p.values(e)),e[p.random(e.length-1)]):p.shuffle(e).slice(0,Math.max(0,t))},p.sortBy=function(e,t,n){return t=p.iteratee(t,n),p.pluck(p.map(e,function(e,n,r){return{value:e,index:n,criteria:t(e,n,r)}}).sort(function(e,t){var n=e.criteria,r=t.criteria;if(n!==r){if(n>r||n===void 0)return 1;if(r>n||r===void 0)return-1}return e.index-t.index}),"value")};var m=function(e){return function(t,n,r){var i={};return n=p.iteratee(n,r),p.each(t,function(r,s){var o=n(r,s,t);e(i,r,o)}),i}};p.groupBy=m(function(e,t,n){p.has(e,n)?e[n].push(t):e[n]=[t]}),p.indexBy=m(function(e,t,n){e[n]=t}),p.countBy=m(function(e,t,n){p.has(e,n)?e[n]++:e[n]=1}),p.sortedIndex=function(e,t,n,r){n=p.iteratee(n,r,1);for(var i=n(t),s=0,o=e.length;o>s;){var u=s+o>>>1;n(e[u])<i?s=u+1:o=u}return s},p.toArray=function(e){return e?p.isArray(e)?o.call(e):e.length===+e.length?p.map(e,p.identity):p.values(e):[]},p.size=function(e){return null==e?0:e.length===+e.length?e.length:p.keys(e).length},p.partition=function(e,t,n){t=p.iteratee(t,n);var r=[],i=[];return p.each(e,function(e,n,s){(t(e,n,s)?r:i).push(e)}),[r,i]},p.first=p.head=p.take=function(e,t,n){return null==e?void 0:null==t||n?e[0]:0>t?[]:o.call(e,0,t)},p.initial=function(e,t,n){return o.call(e,0,Math.max(0,e.length-(null==t||n?1:t)))},p.last=function(e,t,n){return null==e?void 0:null==t||n?e[e.length-1]:o.call(e,Math.max(e.length-t,0))},p.rest=p.tail=p.drop=function(e,t,n){return o.call(e,null==t||n?1:t)},p.compact=function(e){return p.filter(e,p.identity)};var g=function(e,t,n,r){if(t&&p.every(e,p.isArray))return u.apply(r,e);for(var i=0,o=e.length;o>i;i++){var a=e[i];p.isArray(a)||p.isArguments(a)?t?s.apply(r,a):g(a,t,n,r):n||r.push(a)}return r};p.flatten=function(e,t){return g(e,t,!1,[])},p.without=function(e){return p.difference(e,o.call(arguments,1))},p.uniq=p.unique=function(e,t,n,r){if(null==e)return[];p.isBoolean(t)||(r=n,n=t,t=!1),null!=n&&(n=p.iteratee(n,r));for(var i=[],s=[],o=0,u=e.length;u>o;o++){var a=e[o];if(t)o&&s===a||i.push(a),s=a;else if(n){var f=n(a,o,e);p.indexOf(s,f)<0&&(s.push(f),i.push(a))}else p.indexOf(i,a)<0&&i.push(a)}return i},p.union=function(){return p.uniq(g(arguments,!0,!0,[]))},p.intersection=function(e){if(null==e)return[];for(var t=[],n=arguments.length,r=0,i=e.length;i>r;r++){var s=e[r];if(!p.contains(t,s)){for(var o=1;n>o&&p.contains(arguments[o],s);o++);o===n&&t.push(s)}}return t},p.difference=function(e){var t=g(o.call(arguments,1),!0,!0,[]);return p.filter(e,function(e){return!p.contains(t,e)})},p.zip=function(e){if(null==e)return[];for(var t=p.max(arguments,"length").length,n=Array(t),r=0;t>r;r++)n[r]=p.pluck(arguments,r);return n},p.object=function(e,t){if(null==e)return{};for(var n={},r=0,i=e.length;i>r;r++)t?n[e[r]]=t[r]:n[e[r][0]]=e[r][1];return n},p.indexOf=function(e,t,n){if(null==e)return-1;var r=0,i=e.length;if(n){if("number"!=typeof n)return r=p.sortedIndex(e,t),e[r]===t?r:-1;r=0>n?Math.max(0,i+n):n}for(;i>r;r++)if(e[r]===t)return r;return-1},p.lastIndexOf=function(e,t,n){if(null==e)return-1;var r=e.length;for("number"==typeof n&&(r=0>n?r+n+1:Math.min(r,n+1));--r>=0;)if(e[r]===t)return r;return-1},p.range=function(e,t,n){arguments.length<=1&&(t=e||0,e=0),n=n||1;for(var r=Math.max(Math.ceil((t-e)/n),0),i=Array(r),s=0;r>s;s++,e+=n)i[s]=e;return i};var y=function(){};p.bind=function(e,t){var n,r;if(h&&e.bind===h)return h.apply(e,o.call(arguments,1));if(!p.isFunction(e))throw new TypeError("Bind must be called on a function");return n=o.call(arguments,2),r=function(){if(this instanceof r){y.prototype=e.prototype;var i=new y;y.prototype=null;var s=e.apply(i,n.concat(o.call(arguments)));return p.isObject(s)?s:i}return e.apply(t,n.concat(o.call(arguments)))}},p.partial=function(e){var t=o.call(arguments,1);return function(){for(var n=0,r=t.slice(),i=0,s=r.length;s>i;i++)r[i]===p&&(r[i]=arguments[n++]);for(;n<arguments.length;)r.push(arguments[n++]);return e.apply(this,r)}},p.bindAll=function(e){var t,n,r=arguments.length;if(1>=r)throw new Error("bindAll must be passed function names");for(t=1;r>t;t++)n=arguments[t],e[n]=p.bind(e[n],e);return e},p.memoize=function(e,t){var n=function(r){var i=n.cache,s=t?t.apply(this,arguments):r;return p.has(i,s)||(i[s]=e.apply(this,arguments)),i[s]};return n.cache={},n},p.delay=function(e,t){var n=o.call(arguments,2);return setTimeout(function(){return e.apply(null,n)},t)},p.defer=function(e){return p.delay.apply(p,[e,1].concat(o.call(arguments,1)))},p.throttle=function(e,t,n){var r,i,s,o=null,u=0;n||(n={});var a=function(){u=n.leading===!1?0:p.now(),o=null,s=e.apply(r,i),o||(r=i=null)};return function(){var f=p.now();u||n.leading!==!1||(u=f);var l=t-(f-u);return r=this,i=arguments,0>=l||l>t?(clearTimeout(o),o=null,u=f,s=e.apply(r,i),o||(r=i=null)):o||n.trailing===!1||(o=setTimeout(a,l)),s}},p.debounce=function(e,t,n){var r,i,s,o,u,a=function(){var f=p.now()-o;t>f&&f>0?r=setTimeout(a,t-f):(r=null,n||(u=e.apply(s,i),r||(s=i=null)))};return function(){s=this,i=arguments,o=p.now();var f=n&&!r;return r||(r=setTimeout(a,t)),f&&(u=e.apply(s,i),s=i=null),u}},p.wrap=function(e,t){return p.partial(t,e)},p.negate=function(e){return function(){return!e.apply(this,arguments)}},p.compose=function(){var e=arguments,t=e.length-1;return function(){for(var n=t,r=e[t].apply(this,arguments);n--;)r=e[n].call(this,r);return r}},p.after=function(e,t){return function(){return--e<1?t.apply(this,arguments):void 0}},p.before=function(e,t){var n;return function(){return--e>0?n=t.apply(this,arguments):t=null,n}},p.once=p.partial(p.before,2),p.keys=function(e){if(!p.isObject(e))return[];if(c)return c(e);var t=[];for(var n in e)p.has(e,n)&&t.push(n);return t},p.values=function(e){for(var t=p.keys(e),n=t.length,r=Array(n),i=0;n>i;i++)r[i]=e[t[i]];return r},p.pairs=function(e){for(var t=p.keys(e),n=t.length,r=Array(n),i=0;n>i;i++)r[i]=[t[i],e[t[i]]];return r},p.invert=function(e){for(var t={},n=p.keys(e),r=0,i=n.length;i>r;r++)t[e[n[r]]]=n[r];return t},p.functions=p.methods=function(e){var t=[];for(var n in e)p.isFunction(e[n])&&t.push(n);return t.sort()},p.extend=function(e){if(!p.isObject(e))return e;for(var t,n,r=1,i=arguments.length;i>r;r++){t=arguments[r];for(n in t)f.call(t,n)&&(e[n]=t[n])}return e},p.pick=function(e,t,n){var r,i={};if(null==e)return i;if(p.isFunction(t)){t=d(t,n);for(r in e){var s=e[r];t(s,r,e)&&(i[r]=s)}}else{var a=u.apply([],o.call(arguments,1));e=new Object(e);for(var f=0,l=a.length;l>f;f++)r=a[f],r in e&&(i[r]=e[r])}return i},p.omit=function(e,t,n){if(p.isFunction(t))t=p.negate(t);else{var r=p.map(u.apply([],o.call(arguments,1)),String);t=function(e,t){return!p.contains(r,t)}}return p.pick(e,t,n)},p.defaults=function(e){if(!p.isObject(e))return e;for(var t=1,n=arguments.length;n>t;t++){var r=arguments[t];for(var i in r)e[i]===void 0&&(e[i]=r[i])}return e},p.clone=function(e){return p.isObject(e)?p.isArray(e)?e.slice():p.extend({},e):e},p.tap=function(e,t){return t(e),e};var b=function(e,t,n,r){if(e===t)return 0!==e||1/e===1/t;if(null==e||null==t)return e===t;e instanceof p&&(e=e._wrapped),t instanceof p&&(t=t._wrapped);var i=a.call(e);if(i!==a.call(t))return!1;switch(i){case"[object RegExp]":case"[object String]":return""+e==""+t;case"[object Number]":return+e!==+e?+t!==+t:0===+e?1/+e===1/t:+e===+t;case"[object Date]":case"[object Boolean]":return+e===+t}if("object"!=typeof e||"object"!=typeof t)return!1;for(var s=n.length;s--;)if(n[s]===e)return r[s]===t;var o=e.constructor,u=t.constructor;if(o!==u&&"constructor"in e&&"constructor"in t&&!(p.isFunction(o)&&o instanceof o&&p.isFunction(u)&&u instanceof u))return!1;n.push(e),r.push(t);var f,l;if("[object Array]"===i){if(f=e.length,l=f===t.length)for(;f--&&(l=b(e[f],t[f],n,r)););}else{var c,h=p.keys(e);if(f=h.length,l=p.keys(t).length===f)for(;f--&&(c=h[f],l=p.has(t,c)&&b(e[c],t[c],n,r)););}return n.pop(),r.pop(),l};p.isEqual=function(e,t){return b(e,t,[],[])},p.isEmpty=function(e){if(null==e)return!0;if(p.isArray(e)||p.isString(e)||p.isArguments(e))return 0===e.length;for(var t in e)if(p.has(e,t))return!1;return!0},p.isElement=function(e){return!!e&&1===e.nodeType},p.isArray=l||function(e){return"[object Array]"===a.call(e)},p.isObject=function(e){var t=typeof e;return"function"===t||"object"===t&&!!e},p.each(["Arguments","Function","String","Number","Date","RegExp"],function(e){p["is"+e]=function(t){return a.call(t)==="[object "+e+"]"}}),p.isArguments(arguments)||(p.isArguments=function(e){return p.has(e,"callee")}),"function"!=typeof /./&&(p.isFunction=function(e){return"function"==typeof e||!1}),p.isFinite=function(e){return isFinite(e)&&!isNaN(parseFloat(e))},p.isNaN=function(e){return p.isNumber(e)&&e!==+e},p.isBoolean=function(e){return e===!0||e===!1||"[object Boolean]"===a.call(e)},p.isNull=function(e){return null===e},p.isUndefined=function(e){return e===void 0},p.has=function(e,t){return null!=e&&f.call(e,t)},p.noConflict=function(){return e._=t,this},p.identity=function(e){return e},p.constant=function(e){return function(){return e}},p.noop=function(){},p.property=function(e){return function(t){return t[e]}},p.matches=function(e){var t=p.pairs(e),n=t.length;return function(e){if(null==e)return!n;e=new Object(e);for(var r=0;n>r;r++){var i=t[r],s=i[0];if(i[1]!==e[s]||!(s in e))return!1}return!0}},p.times=function(e,t,n){var r=Array(Math.max(0,e));t=d(t,n,1);for(var i=0;e>i;i++)r[i]=t(i);return r},p.random=function(e,t){return null==t&&(t=e,e=0),e+Math.floor(Math.random()*(t-e+1))},p.now=Date.now||function(){return(new Date).getTime()};var w={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},E=p.invert(w),S=function(e){var t=function(t){return e[t]},n="(?:"+p.keys(e).join("|")+")",r=RegExp(n),i=RegExp(n,"g");return function(e){return e=null==e?"":""+e,r.test(e)?e.replace(i,t):e}};p.escape=S(w),p.unescape=S(E),p.result=function(e,t){if(null==e)return void 0;var n=e[t];return p.isFunction(n)?e[t]():n};var x=0;p.uniqueId=function(e){var t=++x+"";return e?e+t:t},p.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var T=/(.)^/,N={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},C=/\\|'|\r|\n|\u2028|\u2029/g,k=function(e){return"\\"+N[e]};p.template=function(e,t,n){!t&&n&&(t=n),t=p.defaults({},t,p.templateSettings);var r=RegExp([(t.escape||T).source,(t.interpolate||T).source,(t.evaluate||T).source].join("|")+"|$","g"),i=0,s="__p+='";e.replace(r,function(t,n,r,o,u){return s+=e.slice(i,u).replace(C,k),i=u+t.length,n?s+="'+\n((__t=("+n+"))==null?'':_.escape(__t))+\n'":r?s+="'+\n((__t=("+r+"))==null?'':__t)+\n'":o&&(s+="';\n"+o+"\n__p+='"),t}),s+="';\n",t.variable||(s="with(obj||{}){\n"+s+"}\n"),s="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+s+"return __p;\n";try{var o=new Function(t.variable||"obj","_",s)}catch(u){throw u.source=s,u}var a=function(e){return o.call(this,e,p)},f=t.variable||"obj";return a.source="function("+f+"){\n"+s+"}",a},p.chain=function(e){var t=p(e);return t._chain=!0,t};var L=function(e){return this._chain?p(e).chain():e};p.mixin=function(e){p.each(p.functions(e),function(t){var n=p[t]=e[t];p.prototype[t]=function(){var e=[this._wrapped];return s.apply(e,arguments),L.call(this,n.apply(p,e))}})},p.mixin(p),p.each(["pop","push","reverse","shift","sort","splice","unshift"],function(e){var t=n[e];p.prototype[e]=function(){var n=this._wrapped;return t.apply(n,arguments),"shift"!==e&&"splice"!==e||0!==n.length||delete n[0],L.call(this,n)}}),p.each(["concat","join","slice"],function(e){var t=n[e];p.prototype[e]=function(){return L.call(this,t.apply(this._wrapped,arguments))}}),p.prototype.value=function(){return this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return p})}).call(this);