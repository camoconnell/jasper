var _gsScope=typeof module!="undefined"&&module.exports&&typeof global!="undefined"?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(e,t){var n=function(){e.call(this,"css"),this._overwriteProps.length=0,this.setRatio=n.prototype.setRatio},r=_gsScope._gsDefine.globals,i,s,o,u,a={},f=n.prototype=new e("css");f.constructor=n,n.version="1.15.0",n.API=2,n.defaultTransformPerspective=0,n.defaultSkewType="compensated",f="px",n.suffixMap={top:f,right:f,bottom:f,left:f,width:f,height:f,fontSize:f,padding:f,margin:f,perspective:f,lineHeight:""};var l=/(?:\d|\-\d|\.\d|\-\.\d)+/g,c=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,h=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,p=/(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,d=/(?:\d|\-|\+|=|#|\.)*/g,v=/opacity *= *([^)]*)/i,m=/opacity:([^;]*)/i,g=/alpha\(opacity *=.+?\)/i,y=/^(rgb|hsl)/,b=/([A-Z])/g,w=/-([a-z])/gi,E=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,S=function(e,t){return t.toUpperCase()},x=/(?:Left|Right|Width)/i,T=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,N=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,C=/,(?=[^\)]*(?:\(|$))/gi,k=Math.PI/180,L=180/Math.PI,A={},O=document,M=function(e){return O.createElementNS?O.createElementNS("http://www.w3.org/1999/xhtml",e):O.createElement(e)},_=M("div"),D=M("img"),P=n._internals={_specialProps:a},H=navigator.userAgent,B,j,F,I,q,R,U=function(){var e=H.indexOf("Android"),t=M("a");F=H.indexOf("Safari")!==-1&&H.indexOf("Chrome")===-1&&(e===-1||Number(H.substr(e+8,1))>3),q=F&&Number(H.substr(H.indexOf("Version/")+8,1))<6,I=H.indexOf("Firefox")!==-1;if(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(H)||/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(H))R=parseFloat(RegExp.$1);return t?(t.style.cssText="top:1px;opacity:.55;",/^0.55/.test(t.style.opacity)):!1}(),z=function(e){return v.test(typeof e=="string"?e:(e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?parseFloat(RegExp.$1)/100:1},W=function(e){window.console&&console.log(e)},X="",V="",$=function(e,t){t=t||_;var n=t.style,r,i;if(n[e]!==undefined)return e;e=e.charAt(0).toUpperCase()+e.substr(1),r=["O","Moz","ms","Ms","Webkit"],i=5;while(--i>-1&&n[r[i]+e]===undefined);return i>=0?(V=i===3?"ms":r[i],X="-"+V.toLowerCase()+"-",V+e):null},J=O.defaultView?O.defaultView.getComputedStyle:function(){},K=n.getStyle=function(e,t,n,r,i){var s;return!U&&t==="opacity"?z(e):(!r&&e.style[t]?s=e.style[t]:(n=n||J(e))?s=n[t]||n.getPropertyValue(t)||n.getPropertyValue(t.replace(b,"-$1").toLowerCase()):e.currentStyle&&(s=e.currentStyle[t]),i==null||!!s&&s!=="none"&&s!=="auto"&&s!=="auto auto"?s:i)},Q=P.convertToPixels=function(e,r,i,s,o){if(s==="px"||!s)return i;if(s==="auto"||!i)return 0;var u=x.test(r),a=e,f=_.style,l=i<0,c,h,p;l&&(i=-i);if(s==="%"&&r.indexOf("border")!==-1)c=i/100*(u?e.clientWidth:e.clientHeight);else{f.cssText="border:0 solid red;position:"+K(e,"position")+";line-height:0;";if(s==="%"||!a.appendChild){a=e.parentNode||O.body,h=a._gsCache,p=t.ticker.frame;if(h&&u&&h.time===p)return h.width*i/100;f[u?"width":"height"]=i+s}else f[u?"borderLeftWidth":"borderTopWidth"]=i+s;a.appendChild(_),c=parseFloat(_[u?"offsetWidth":"offsetHeight"]),a.removeChild(_),u&&s==="%"&&n.cacheWidths!==!1&&(h=a._gsCache=a._gsCache||{},h.time=p,h.width=c/i*100),c===0&&!o&&(c=Q(e,r,i,s,!0))}return l?-c:c},G=P.calculateOffset=function(e,t,n){if(K(e,"position",n)!=="absolute")return 0;var r=t==="left"?"Left":"Top",i=K(e,"margin"+r,n);return e["offset"+r]-(Q(e,t,parseFloat(i),i.replace(d,""))||0)},Y=function(e,t){var n={},r,i;if(t=t||J(e,null))if(r=t.length)while(--r>-1)n[t[r].replace(w,S)]=t.getPropertyValue(t[r]);else for(r in t)n[r]=t[r];else if(t=e.currentStyle||e.style)for(r in t)typeof r=="string"&&n[r]===undefined&&(n[r.replace(w,S)]=t[r]);return U||(n.opacity=z(e)),i=Pt(e,t,!1),n.rotation=i.rotation,n.skewX=i.skewX,n.scaleX=i.scaleX,n.scaleY=i.scaleY,n.x=i.x,n.y=i.y,Ct&&(n.z=i.z,n.rotationX=i.rotationX,n.rotationY=i.rotationY,n.scaleZ=i.scaleZ),n.filters&&delete n.filters,n},Z=function(e,t,n,r,i){var s={},o=e.style,u,a,f;for(a in n)a!=="cssText"&&a!=="length"&&isNaN(a)&&(t[a]!==(u=n[a])||i&&i[a])&&a.indexOf("Origin")===-1&&(typeof u=="number"||typeof u=="string")&&(s[a]=u!=="auto"||a!=="left"&&a!=="top"?u!==""&&u!=="auto"&&u!=="none"||typeof t[a]!="string"||t[a].replace(p,"")===""?u:0:G(e,a),o[a]!==undefined&&(f=new dt(o,a,o[a],f)));if(r)for(a in r)a!=="className"&&(s[a]=r[a]);return{difs:s,firstMPT:f}},et={width:["Left","Right"],height:["Top","Bottom"]},tt=["marginLeft","marginRight","marginTop","marginBottom"],nt=function(e,t,n){var r=parseFloat(t==="width"?e.offsetWidth:e.offsetHeight),i=et[t],s=i.length;n=n||J(e,null);while(--s>-1)r-=parseFloat(K(e,"padding"+i[s],n,!0))||0,r-=parseFloat(K(e,"border"+i[s]+"Width",n,!0))||0;return r},rt=function(e,t){if(e==null||e===""||e==="auto"||e==="auto auto")e="0 0";var n=e.split(" "),r=e.indexOf("left")!==-1?"0%":e.indexOf("right")!==-1?"100%":n[0],i=e.indexOf("top")!==-1?"0%":e.indexOf("bottom")!==-1?"100%":n[1];i==null?i="0":i==="center"&&(i="50%");if(r==="center"||isNaN(parseFloat(r))&&(r+"").indexOf("=")===-1)r="50%";return t&&(t.oxp=r.indexOf("%")!==-1,t.oyp=i.indexOf("%")!==-1,t.oxr=r.charAt(1)==="=",t.oyr=i.charAt(1)==="=",t.ox=parseFloat(r.replace(p,"")),t.oy=parseFloat(i.replace(p,""))),r+" "+i+(n.length>2?" "+n[2]:"")},it=function(e,t){return typeof e=="string"&&e.charAt(1)==="="?parseInt(e.charAt(0)+"1",10)*parseFloat(e.substr(2)):parseFloat(e)-parseFloat(t)},st=function(e,t){return e==null?t:typeof e=="string"&&e.charAt(1)==="="?parseInt(e.charAt(0)+"1",10)*parseFloat(e.substr(2))+t:parseFloat(e)},ot=function(e,t,n,r){var i=1e-6,s,o,u,a;return e==null?a=t:typeof e=="number"?a=e:(s=360,o=e.split("_"),u=Number(o[0].replace(p,""))*(e.indexOf("rad")===-1?1:L)-(e.charAt(1)==="="?0:t),o.length&&(r&&(r[n]=t+u),e.indexOf("short")!==-1&&(u%=s,u!==u%(s/2)&&(u=u<0?u+s:u-s)),e.indexOf("_cw")!==-1&&u<0?u=(u+s*9999999999)%s-(u/s|0)*s:e.indexOf("ccw")!==-1&&u>0&&(u=(u-s*9999999999)%s-(u/s|0)*s)),a=t+u),a<i&&a>-i&&(a=0),a},ut={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},at=function(e,t,n){return e=e<0?e+1:e>1?e-1:e,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*255+.5|0},ft=n.parseColor=function(e){var t,n,r,i,s,o;return!e||e===""?ut.black:typeof e=="number"?[e>>16,e>>8&255,e&255]:(e.charAt(e.length-1)===","&&(e=e.substr(0,e.length-1)),ut[e]?ut[e]:e.charAt(0)==="#"?(e.length===4&&(t=e.charAt(1),n=e.charAt(2),r=e.charAt(3),e="#"+t+t+n+n+r+r),e=parseInt(e.substr(1),16),[e>>16,e>>8&255,e&255]):e.substr(0,3)==="hsl"?(e=e.match(l),i=Number(e[0])%360/360,s=Number(e[1])/100,o=Number(e[2])/100,n=o<=.5?o*(s+1):o+s-o*s,t=o*2-n,e.length>3&&(e[3]=Number(e[3])),e[0]=at(i+1/3,t,n),e[1]=at(i,t,n),e[2]=at(i-1/3,t,n),e):(e=e.match(l)||ut.transparent,e[0]=Number(e[0]),e[1]=Number(e[1]),e[2]=Number(e[2]),e.length>3&&(e[3]=Number(e[3])),e))},lt="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";for(f in ut)lt+="|"+f+"\\b";lt=new RegExp(lt+")","gi");var ct=function(e,t,n,r){if(e==null)return function(e){return e};var i=t?(e.match(lt)||[""])[0]:"",s=e.split(i).join("").match(h)||[],o=e.substr(0,e.indexOf(s[0])),u=e.charAt(e.length-1)===")"?")":"",a=e.indexOf(" ")!==-1?" ":",",f=s.length,c=f>0?s[0].replace(l,""):"",p;return f?t?(p=function(e){var t,l,d,v;if(typeof e=="number")e+=c;else if(r&&C.test(e)){v=e.replace(C,"|").split("|");for(d=0;d<v.length;d++)v[d]=p(v[d]);return v.join(",")}t=(e.match(lt)||[i])[0],l=e.split(t).join("").match(h)||[],d=l.length;if(f>d--)while(++d<f)l[d]=n?l[(d-1)/2|0]:s[d];return o+l.join(a)+a+t+u+(e.indexOf("inset")!==-1?" inset":"")},p):(p=function(e){var t,i,l;if(typeof e=="number")e+=c;else if(r&&C.test(e)){i=e.replace(C,"|").split("|");for(l=0;l<i.length;l++)i[l]=p(i[l]);return i.join(",")}t=e.match(h)||[],l=t.length;if(f>l--)while(++l<f)t[l]=n?t[(l-1)/2|0]:s[l];return o+t.join(a)+u},p):function(e){return e}},ht=function(e){return e=e.split(","),function(t,n,r,i,s,o,u){var a=(n+"").split(" "),f;u={};for(f=0;f<4;f++)u[e[f]]=a[f]=a[f]||a[(f-1)/2>>0];return i.parse(t,u,s,o)}},pt=P._setPluginRatio=function(e){this.plugin.setRatio(e);var t=this.data,n=t.proxy,r=t.firstMPT,i=1e-6,s,o,u,a;while(r)s=n[r.v],r.r?s=Math.round(s):s<i&&s>-i&&(s=0),r.t[r.p]=s,r=r._next;t.autoRotate&&(t.autoRotate.rotation=n.rotation);if(e===1){r=t.firstMPT;while(r){o=r.t;if(!o.type)o.e=o.s+o.xs0;else if(o.type===1){a=o.xs0+o.s+o.xs1;for(u=1;u<o.l;u++)a+=o["xn"+u]+o["xs"+(u+1)];o.e=a}r=r._next}}},dt=function(e,t,n,r,i){this.t=e,this.p=t,this.v=n,this.r=i,r&&(r._prev=this,this._next=r)},vt=P._parseToProxy=function(e,t,n,r,i,s){var o=r,u={},a={},f=n._transform,l=A,c,h,p,d,v;n._transform=null,A=t,r=v=n.parse(e,t,r,i),A=l,s&&(n._transform=f,o&&(o._prev=null,o._prev&&(o._prev._next=null)));while(r&&r!==o){if(r.type<=1){h=r.p,a[h]=r.s+r.c,u[h]=r.s,s||(d=new dt(r,"s",h,d,r.r),r.c=0);if(r.type===1){c=r.l;while(--c>0)p="xn"+c,h=r.p+"_"+p,a[h]=r.data[p],u[h]=r[p],s||(d=new dt(r,p,h,d,r.rxp[p]))}}r=r._next}return{proxy:u,end:a,firstMPT:d,pt:v}},mt=P.CSSPropTween=function(e,t,n,r,s,o,a,f,l,c,h){this.t=e,this.p=t,this.s=n,this.c=r,this.n=a||t,e instanceof mt||u.push(this.n),this.r=f,this.type=o||0,l&&(this.pr=l,i=!0),this.b=c===undefined?n:c,this.e=h===undefined?n+r:h,s&&(this._next=s,s._prev=this)},gt=n.parseComplex=function(e,t,n,r,i,s,o,u,a,f){n=n||s||"",o=new mt(e,t,0,0,o,f?2:1,null,!1,u,n,r),r+="";var h=n.split(", ").join(",").split(" "),p=r.split(", ").join(",").split(" "),d=h.length,v=B!==!1,m,g,b,w,E,S,x,T,N,k,L,A;if(r.indexOf(",")!==-1||n.indexOf(",")!==-1)h=h.join(" ").replace(C,", ").split(" "),p=p.join(" ").replace(C,", ").split(" "),d=h.length;d!==p.length&&(h=(s||"").split(" "),d=h.length),o.plugin=a,o.setRatio=f;for(m=0;m<d;m++){w=h[m],E=p[m],T=parseFloat(w);if(T||T===0)o.appendXtra("",T,it(E,T),E.replace(c,""),v&&E.indexOf("px")!==-1,!0);else if(i&&(w.charAt(0)==="#"||ut[w]||y.test(w)))A=E.charAt(E.length-1)===","?"),":")",w=ft(w),E=ft(E),N=w.length+E.length>6,N&&!U&&E[3]===0?(o["xs"+o.l]+=o.l?" transparent":"transparent",o.e=o.e.split(p[m]).join("transparent")):(U||(N=!1),o.appendXtra(N?"rgba(":"rgb(",w[0],E[0]-w[0],",",!0,!0).appendXtra("",w[1],E[1]-w[1],",",!0).appendXtra("",w[2],E[2]-w[2],N?",":A,!0),N&&(w=w.length<4?1:w[3],o.appendXtra("",w,(E.length<4?1:E[3])-w,A,!1)));else{S=w.match(l);if(!S)o["xs"+o.l]+=o.l?" "+w:w;else{x=E.match(c);if(!x||x.length!==S.length)return o;b=0;for(g=0;g<S.length;g++)L=S[g],k=w.indexOf(L,b),o.appendXtra(w.substr(b,k-b),Number(L),it(x[g],L),"",v&&w.substr(k+L.length,2)==="px",g===0),b=k+L.length;o["xs"+o.l]+=w.substr(b)}}}if(r.indexOf("=")!==-1&&o.data){A=o.xs0+o.data.s;for(m=1;m<o.l;m++)A+=o["xs"+m]+o.data["xn"+m];o.e=A+o["xs"+m]}return o.l||(o.type=-1,o.xs0=o.e),o.xfirst||o},yt=9;f=mt.prototype,f.l=f.pr=0;while(--yt>0)f["xn"+yt]=0,f["xs"+yt]="";f.xs0="",f._next=f._prev=f.xfirst=f.data=f.plugin=f.setRatio=f.rxp=null,f.appendXtra=function(e,t,n,r,i,s){var o=this,u=o.l;return o["xs"+u]+=s&&u?" "+e:e||"",!n&&u!==0&&!o.plugin?(o["xs"+u]+=t+(r||""),o):(o.l++,o.type=o.setRatio?2:1,o["xs"+o.l]=r||"",u>0?(o.data["xn"+u]=t+n,o.rxp["xn"+u]=i,o["xn"+u]=t,o.plugin||(o.xfirst=new mt(o,"xn"+u,t,n,o.xfirst||o,0,o.n,i,o.pr),o.xfirst.xs0=0),o):(o.data={s:t+n},o.rxp={},o.s=t,o.c=n,o.r=i,o))};var bt=function(e,t){t=t||{},this.p=t.prefix?$(e)||e:e,a[e]=a[this.p]=this,this.format=t.formatter||ct(t.defaultValue,t.color,t.collapsible,t.multi),t.parser&&(this.parse=t.parser),this.clrs=t.color,this.multi=t.multi,this.keyword=t.keyword,this.dflt=t.defaultValue,this.pr=t.priority||0},wt=P._registerComplexSpecialProp=function(e,t,n){typeof t!="object"&&(t={parser:n});var r=e.split(","),i=t.defaultValue,s,o;n=n||[i];for(s=0;s<r.length;s++)t.prefix=s===0&&t.prefix,t.defaultValue=n[s]||i,o=new bt(r[s],t)},Et=function(e){if(!a[e]){var t=e.charAt(0).toUpperCase()+e.substr(1)+"Plugin";wt(e,{parser:function(e,n,i,s,o,u,f){var l=r.com.greensock.plugins[t];return l?(l._cssRegister(),a[i].parse(e,n,i,s,o,u,f)):(W("Error: "+t+" js file not loaded."),o)}})}};f=bt.prototype,f.parseComplex=function(e,t,n,r,i,s){var o=this.keyword,u,a,f,l,c,h;this.multi&&(C.test(n)||C.test(t)?(a=t.replace(C,"|").split("|"),f=n.replace(C,"|").split("|")):o&&(a=[t],f=[n]));if(f){l=f.length>a.length?f.length:a.length;for(u=0;u<l;u++)t=a[u]=a[u]||this.dflt,n=f[u]=f[u]||this.dflt,o&&(c=t.indexOf(o),h=n.indexOf(o),c!==h&&(n=h===-1?f:a,n[u]+=" "+o));t=a.join(", "),n=f.join(", ")}return gt(e,this.p,t,n,this.clrs,this.dflt,r,this.pr,i,s)},f.parse=function(e,t,n,r,i,s,u){return this.parseComplex(e.style,this.format(K(e,this.p,o,!1,this.dflt)),this.format(t),i,s)},n.registerSpecialProp=function(e,t,n){wt(e,{parser:function(e,r,i,s,o,u,a){var f=new mt(e,i,0,0,o,2,i,!1,n);return f.plugin=u,f.setRatio=t(e,r,s._tween,i),f},priority:n})};var St="scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),xt=$("transform"),Tt=X+"transform",Nt=$("transformOrigin"),Ct=$("perspective")!==null,kt=P.Transform=function(){this.perspective=parseFloat(n.defaultTransformPerspective)||0,this.force3D=n.defaultForce3D===!1||!Ct?!1:n.defaultForce3D||"auto"},Lt=window.SVGElement,At,Ot=function(e,t,n){var r=O.createElementNS("http://www.w3.org/2000/svg",e),i=/([a-z])([A-Z])/g,s;for(s in n)r.setAttributeNS(null,s.replace(i,"$1-$2").toLowerCase(),n[s]);return t.appendChild(r),r},Mt=document.documentElement,_t=function(){var e=R||/Android/i.test(H)&&!window.chrome,t,n,r;return O.createElementNS&&!e&&(t=Ot("svg",Mt),n=Ot("rect",t,{width:100,height:50,x:100}),r=n.getBoundingClientRect().width,n.style[Nt]="50% 50%",n.style[xt]="scaleX(0.5)",e=r===n.getBoundingClientRect().width,Mt.removeChild(t)),e}(),Dt=function(e,t,n){var r=e.getBBox();t=rt(t).split(" "),n.xOrigin=(t[0].indexOf("%")!==-1?parseFloat(t[0])/100*r.width:parseFloat(t[0]))+r.x,n.yOrigin=(t[1].indexOf("%")!==-1?parseFloat(t[1])/100*r.height:parseFloat(t[1]))+r.y},Pt=P.getTransform=function(e,t,r,i){if(e._gsTransform&&r&&!i)return e._gsTransform;var s=r?e._gsTransform||new kt:new kt,u=s.scaleX<0,a=2e-5,f=1e5,l=179.99,c=l*k,h=Ct?parseFloat(K(e,Nt,t,!1,"0 0 0").split(" ")[2])||s.zOrigin||0:0,p=parseFloat(n.defaultTransformPerspective)||0,d,v,m,g,y,b,w,E,S,x;xt?v=K(e,Tt,t,!0):e.currentStyle&&(v=e.currentStyle.filter.match(T),v=v&&v.length===4?[v[0].substr(4),Number(v[2].substr(4)),Number(v[1].substr(4)),v[3].substr(4),s.x||0,s.y||0].join(","):""),d=!v||v==="none"||v==="matrix(1, 0, 0, 1, 0, 0)",s.svg=!!(Lt&&typeof e.getBBox=="function"&&e.getCTM&&(!e.parentNode||e.parentNode.getBBox&&e.parentNode.getCTM)),s.svg&&(Dt(e,K(e,Nt,o,!1,"50% 50%")+"",s),At=n.useSVGTransformAttr||_t,m=e.getAttribute("transform"),d&&m&&m.indexOf("matrix")!==-1&&(v=m,d=0));if(!d){m=(v||"").match(/(?:\-|\b)[\d\-\.e]+\b/gi)||[],g=m.length;while(--g>-1)y=Number(m[g]),m[g]=(b=y-(y|=0))?(b*f+(b<0?-0.5:.5)|0)/f+y:y;if(m.length===16){var N=m[8],C=m[9],A=m[10],O=m[12],M=m[13],_=m[14];s.zOrigin&&(_=-s.zOrigin,O=N*_-m[12],M=C*_-m[13],_=A*_+s.zOrigin-m[14]);var D=m[0],P=m[1],H=m[2],B=m[3],j=m[4],F=m[5],I=m[6],q=m[7],R=m[11],U=Math.atan2(P,F),z,W,X,V,$;s.rotation=U*L,U&&(V=Math.cos(-U),$=Math.sin(-U),D=D*V+j*$,W=P*V+F*$,F=P*-$+F*V,I=H*-$+I*V,P=W),U=Math.atan2(N,D),s.rotationY=U*L,U&&(V=Math.cos(-U),$=Math.sin(-U),z=D*V-N*$,W=P*V-C*$,X=H*V-A*$,C=P*$+C*V,A=H*$+A*V,R=B*$+R*V,D=z,P=W,H=X),U=Math.atan2(I,A),s.rotationX=U*L,U&&(V=Math.cos(-U),$=Math.sin(-U),z=j*V+N*$,W=F*V+C*$,X=I*V+A*$,N=j*-$+N*V,C=F*-$+C*V,A=I*-$+A*V,R=q*-$+R*V,j=z,F=W,I=X),s.scaleX=(Math.sqrt(D*D+P*P)*f+.5|0)/f,s.scaleY=(Math.sqrt(F*F+C*C)*f+.5|0)/f,s.scaleZ=(Math.sqrt(I*I+A*A)*f+.5|0)/f,s.skewX=0,s.perspective=R?1/(R<0?-R:R):0,s.x=O,s.y=M,s.z=_}else if((!Ct||i||!m.length||s.x!==m[4]||s.y!==m[5]||!s.rotationX&&!s.rotationY)&&(s.x===undefined||K(e,"display",t)!=="none")){var J=m.length>=6,Q=J?m[0]:1,G=m[1]||0,Y=m[2]||0,Z=J?m[3]:1;s.x=m[4]||0,s.y=m[5]||0,w=Math.sqrt(Q*Q+G*G),E=Math.sqrt(Z*Z+Y*Y),S=Q||G?Math.atan2(G,Q)*L:s.rotation||0,x=Y||Z?Math.atan2(Y,Z)*L+S:s.skewX||0,Math.abs(x)>90&&Math.abs(x)<270&&(u?(w*=-1,x+=S<=0?180:-180,S+=S<=0?180:-180):(E*=-1,x+=x<=0?180:-180)),s.scaleX=w,s.scaleY=E,s.rotation=S,s.skewX=x,Ct&&(s.rotationX=s.rotationY=s.z=0,s.perspective=p,s.scaleZ=1)}s.zOrigin=h;for(g in s)s[g]<a&&s[g]>-a&&(s[g]=0)}return r&&(e._gsTransform=s),s},Ht=function(e){var t=this.data,n=-t.rotation*k,r=n+t.skewX*k,i=1e5,s=(Math.cos(n)*t.scaleX*i|0)/i,o=(Math.sin(n)*t.scaleX*i|0)/i,u=(Math.sin(r)*-t.scaleY*i|0)/i,a=(Math.cos(r)*t.scaleY*i|0)/i,f=this.t.style,l=this.t.currentStyle,c,h;if(!l)return;h=o,o=-u,u=-h,c=l.filter,f.filter="";var p=this.t.offsetWidth,m=this.t.offsetHeight,g=l.position!=="absolute",y="progid:DXImageTransform.Microsoft.Matrix(M11="+s+", M12="+o+", M21="+u+", M22="+a,b=t.x+p*t.xPercent/100,w=t.y+m*t.yPercent/100,E,S;t.ox!=null&&(E=(t.oxp?p*t.ox*.01:t.ox)-p/2,S=(t.oyp?m*t.oy*.01:t.oy)-m/2,b+=E-(E*s+S*o),w+=S-(E*u+S*a)),g?(E=p/2,S=m/2,y+=", Dx="+(E-(E*s+S*o)+b)+", Dy="+(S-(E*u+S*a)+w)+")"):y+=", sizingMethod='auto expand')",c.indexOf("DXImageTransform.Microsoft.Matrix(")!==-1?f.filter=c.replace(N,y):f.filter=y+" "+c,(e===0||e===1)&&s===1&&o===0&&u===0&&a===1&&(!g||y.indexOf("Dx=0, Dy=0")!==-1)&&(!v.test(c)||parseFloat(RegExp.$1)===100)&&c.indexOf(c.indexOf("Alpha"))===-1&&f.removeAttribute("filter");if(!g){var x=R<8?1:-1,T,C,L;E=t.ieOffsetX||0,S=t.ieOffsetY||0,t.ieOffsetX=Math.round((p-((s<0?-s:s)*p+(o<0?-o:o)*m))/2+b),t.ieOffsetY=Math.round((m-((a<0?-a:a)*m+(u<0?-u:u)*p))/2+w);for(yt=0;yt<4;yt++)C=tt[yt],T=l[C],h=T.indexOf("px")!==-1?parseFloat(T):Q(this.t,C,parseFloat(T),T.replace(d,""))||0,h!==t[C]?L=yt<2?-t.ieOffsetX:-t.ieOffsetY:L=yt<2?E-t.ieOffsetX:S-t.ieOffsetY,f[C]=(t[C]=Math.round(h-L*(yt===0||yt===2?1:x)))+"px"}},Bt=P.set3DTransformRatio=function(e){var t=this.data,n=this.t.style,r=t.rotation*k,i=t.scaleX,s=t.scaleY,o=t.scaleZ,u=t.x,a=t.y,f=t.z,l=t.perspective,c,h,p,d,v,m,g,y,b,w,E,S,x,T,N,C,L,A,O,M,_,D,P,H,B;if(e===1||e===0)if(t.force3D==="auto"&&!t.rotationY&&!t.rotationX&&o===1&&!l&&!f){jt.call(this,e);return}if(I){var j=1e-4;i<j&&i>-j&&(i=o=2e-5),s<j&&s>-j&&(s=o=2e-5),l&&!t.z&&!t.rotationX&&!t.rotationY&&(l=0)}if(r||t.skewX)A=Math.cos(r),O=Math.sin(r),c=A,v=O,t.skewX&&(r-=t.skewX*k,A=Math.cos(r),O=Math.sin(r),t.skewType==="simple"&&(M=Math.tan(t.skewX*k),M=Math.sqrt(1+M*M),A*=M,O*=M)),h=-O,m=A;else{if(!t.rotationY&&!t.rotationX&&o===1&&!l&&!t.svg){n[xt]=(t.xPercent||t.yPercent?"translate("+t.xPercent+"%,"+t.yPercent+"%) translate3d(":"translate3d(")+u+"px,"+a+"px,"+f+"px)"+(i!==1||s!==1?" scale("+i+","+s+")":"");return}c=m=1,h=v=0}E=1,p=d=g=y=b=w=S=x=T=0,N=l?-1/l:0,C=t.zOrigin,L=1e5,B=",",r=t.rotationY*k,r&&(A=Math.cos(r),O=Math.sin(r),b=E*-O,x=N*-O,p=c*O,g=v*O,E*=A,N*=A,c*=A,v*=A),r=t.rotationX*k,r&&(A=Math.cos(r),O=Math.sin(r),M=h*A+p*O,_=m*A+g*O,D=w*A+E*O,P=T*A+N*O,p=h*-O+p*A,g=m*-O+g*A,E=w*-O+E*A,N=T*-O+N*A,h=M,m=_,w=D,T=P),o!==1&&(p*=o,g*=o,E*=o,N*=o),s!==1&&(h*=s,m*=s,w*=s,T*=s),i!==1&&(c*=i,v*=i,b*=i,x*=i),C&&(S-=C,d=p*S,y=g*S,S=E*S+C),t.svg&&(d+=t.xOrigin-(t.xOrigin*c+t.yOrigin*h),y+=t.yOrigin-(t.xOrigin*v+t.yOrigin*m)),d=(M=(d+=u)-(d|=0))?(M*L+(M<0?-0.5:.5)|0)/L+d:d,y=(M=(y+=a)-(y|=0))?(M*L+(M<0?-0.5:.5)|0)/L+y:y,S=(M=(S+=f)-(S|=0))?(M*L+(M<0?-0.5:.5)|0)/L+S:S,H=t.xPercent||t.yPercent?"translate("+t.xPercent+"%,"+t.yPercent+"%) matrix3d(":"matrix3d(",H+=(c*L|0)/L+B+(v*L|0)/L+B+(b*L|0)/L,H+=B+(x*L|0)/L+B+(h*L|0)/L+B+(m*L|0)/L,H+=B+(w*L|0)/L+B+(T*L|0)/L+B+(p*L|0)/L,H+=B+(g*L|0)/L+B+(E*L|0)/L+B+(N*L|0)/L,H+=B+d+B+y+B+S+B+(l?1+ -S/l:1)+")",n[xt]=H},jt=P.set2DTransformRatio=function(e){var t=this.data,n=this.t,r=n.style,i=t.x,s=t.y,o,u,a,f,l,c,h,p,d,v,m;if((t.rotationX||t.rotationY||t.z||t.force3D===!0||t.force3D==="auto"&&e!==1&&e!==0)&&(!t.svg||!At)&&Ct){this.setRatio=Bt,Bt.call(this,e);return}f=t.scaleX,l=t.scaleY,t.rotation||t.skewX||t.svg?(o=t.rotation*k,u=o-t.skewX*k,a=1e5,c=Math.cos(o)*f,h=Math.sin(o)*f,p=Math.sin(u)*-l,d=Math.cos(u)*l,t.svg&&(i+=t.xOrigin-(t.xOrigin*c+t.yOrigin*p),s+=t.yOrigin-(t.xOrigin*h+t.yOrigin*d),m=1e-6,i<m&&i>-m&&(i=0),s<m&&s>-m&&(s=0)),v=(c*a|0)/a+","+(h*a|0)/a+","+(p*a|0)/a+","+(d*a|0)/a+","+i+","+s+")",t.svg&&At?n.setAttribute("transform","matrix("+v):r[xt]=(t.xPercent||t.yPercent?"translate("+t.xPercent+"%,"+t.yPercent+"%) matrix(":"matrix(")+v):r[xt]=(t.xPercent||t.yPercent?"translate("+t.xPercent+"%,"+t.yPercent+"%) matrix(":"matrix(")+f+",0,0,"+l+","+i+","+s+")"};f=kt.prototype,f.x=f.y=f.z=f.skewX=f.skewY=f.rotation=f.rotationX=f.rotationY=f.zOrigin=f.xPercent=f.yPercent=0,f.scaleX=f.scaleY=f.scaleZ=1,wt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent",{parser:function(e,t,r,i,s,u,a){if(i._lastParsedTransform===a)return s;i._lastParsedTransform=a;var f=i._transform=Pt(e,o,!0,a.parseTransform),l=e.style,c=1e-6,h=St.length,p=a,d={},v,m,g,y,b,w,E;if(typeof p.transform=="string"&&xt)g=_.style,g[xt]=p.transform,g.display="block",g.position="absolute",O.body.appendChild(_),v=Pt(_,null,!1),O.body.removeChild(_);else if(typeof p=="object"){v={scaleX:st(p.scaleX!=null?p.scaleX:p.scale,f.scaleX),scaleY:st(p.scaleY!=null?p.scaleY:p.scale,f.scaleY),scaleZ:st(p.scaleZ,f.scaleZ),x:st(p.x,f.x),y:st(p.y,f.y),z:st(p.z,f.z),xPercent:st(p.xPercent,f.xPercent),yPercent:st(p.yPercent,f.yPercent),perspective:st(p.transformPerspective,f.perspective)},E=p.directionalRotation;if(E!=null)if(typeof E=="object")for(g in E)p[g]=E[g];else p.rotation=E;typeof p.x=="string"&&p.x.indexOf("%")!==-1&&(v.x=0,v.xPercent=st(p.x,f.xPercent)),typeof p.y=="string"&&p.y.indexOf("%")!==-1&&(v.y=0,v.yPercent=st(p.y,f.yPercent)),v.rotation=ot("rotation"in p?p.rotation:"shortRotation"in p?p.shortRotation+"_short":"rotationZ"in p?p.rotationZ:f.rotation,f.rotation,"rotation",d),Ct&&(v.rotationX=ot("rotationX"in p?p.rotationX:"shortRotationX"in p?p.shortRotationX+"_short":f.rotationX||0,f.rotationX,"rotationX",d),v.rotationY=ot("rotationY"in p?p.rotationY:"shortRotationY"in p?p.shortRotationY+"_short":f.rotationY||0,f.rotationY,"rotationY",d)),v.skewX=p.skewX==null?f.skewX:ot(p.skewX,f.skewX),v.skewY=p.skewY==null?f.skewY:ot(p.skewY,f.skewY);if(m=v.skewY-f.skewY)v.skewX+=m,v.rotation+=m}Ct&&p.force3D!=null&&(f.force3D=p.force3D,w=!0),f.skewType=p.skewType||f.skewType||n.defaultSkewType,b=f.force3D||f.z||f.rotationX||f.rotationY||v.z||v.rotationX||v.rotationY||v.perspective,!b&&p.scale!=null&&(v.scaleZ=1);while(--h>-1){r=St[h],y=v[r]-f[r];if(y>c||y<-c||p[r]!=null||A[r]!=null)w=!0,s=new mt(f,r,f[r],y,s),r in d&&(s.e=d[r]),s.xs0=0,s.plugin=u,i._overwriteProps.push(s.n)}y=p.transformOrigin,y&&f.svg&&(Dt(e,y,v),s=new mt(f,"xOrigin",f.xOrigin,v.xOrigin-f.xOrigin,s,-1,"transformOrigin"),s.b=f.xOrigin,s.e=s.xs0=v.xOrigin,s=new mt(f,"yOrigin",f.yOrigin,v.yOrigin-f.yOrigin,s,-1,"transformOrigin"),s.b=f.yOrigin,s.e=s.xs0=v.yOrigin,y="0px 0px");if(y||Ct&&b&&f.zOrigin)xt?(w=!0,r=Nt,y=(y||K(e,r,o,!1,"50% 50%"))+"",s=new mt(l,r,0,0,s,-1,"transformOrigin"),s.b=l[r],s.plugin=u,Ct?(g=f.zOrigin,y=y.split(" "),f.zOrigin=(y.length>2&&(g===0||y[2]!=="0px")?parseFloat(y[2]):g)||0,s.xs0=s.e=y[0]+" "+(y[1]||"50%")+" 0px",s=new mt(f,"zOrigin",0,0,s,-1,s.n),s.b=g,s.xs0=s.e=f.zOrigin):s.xs0=s.e=y):rt(y+"",f);return w&&(i._transformType=!!f.svg&&!!At||!b&&this._transformType!==3?2:3),s},prefix:!0}),wt("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),wt("borderRadius",{defaultValue:"0px",parser:function(e,t,n,r,i,u){t=this.format(t);var a=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],f=e.style,l,c,h,p,d,v,m,g,y,b,w,E,S,x,T,N;y=parseFloat(e.offsetWidth),b=parseFloat(e.offsetHeight),l=t.split(" ");for(c=0;c<a.length;c++)this.p.indexOf("border")&&(a[c]=$(a[c])),d=p=K(e,a[c],o,!1,"0px"),d.indexOf(" ")!==-1&&(p=d.split(" "),d=p[0],p=p[1]),v=h=l[c],m=parseFloat(d),E=d.substr((m+"").length),S=v.charAt(1)==="=",S?(g=parseInt(v.charAt(0)+"1",10),v=v.substr(2),g*=parseFloat(v),w=v.substr((g+"").length-(g<0?1:0))||""):(g=parseFloat(v),w=v.substr((g+"").length)),w===""&&(w=s[n]||E),w!==E&&(x=Q(e,"borderLeft",m,E),T=Q(e,"borderTop",m,E),w==="%"?(d=x/y*100+"%",p=T/b*100+"%"):w==="em"?(N=Q(e,"borderLeft",1,"em"),d=x/N+"em",p=T/N+"em"):(d=x+"px",p=T+"px"),S&&(v=parseFloat(d)+g+w,h=parseFloat(p)+g+w)),i=gt(f,a[c],d+" "+p,v+" "+h,!1,"0px",i);return i},prefix:!0,formatter:ct("0px 0px 0px 0px",!1,!0)}),wt("backgroundPosition",{defaultValue:"0 0",parser:function(e,t,n,r,i,s){var u="background-position",a=o||J(e,null),f=this.format((a?R?a.getPropertyValue(u+"-x")+" "+a.getPropertyValue(u+"-y"):a.getPropertyValue(u):e.currentStyle.backgroundPositionX+" "+e.currentStyle.backgroundPositionY)||"0 0"),l=this.format(t),c,h,p,d,v,m;if(f.indexOf("%")!==-1!=(l.indexOf("%")!==-1)){m=K(e,"backgroundImage").replace(E,"");if(m&&m!=="none"){c=f.split(" "),h=l.split(" "),D.setAttribute("src",m),p=2;while(--p>-1)f=c[p],d=f.indexOf("%")!==-1,d!==(h[p].indexOf("%")!==-1)&&(v=p===0?e.offsetWidth-D.width:e.offsetHeight-D.height,c[p]=d?parseFloat(f)/100*v+"px":parseFloat(f)/v*100+"%");f=c.join(" ")}}return this.parseComplex(e.style,f,l,i,s)},formatter:rt}),wt("backgroundSize",{defaultValue:"0 0",formatter:rt}),wt("perspective",{defaultValue:"0px",prefix:!0}),wt("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),wt("transformStyle",{prefix:!0}),wt("backfaceVisibility",{prefix:!0}),wt("userSelect",{prefix:!0}),wt("margin",{parser:ht("marginTop,marginRight,marginBottom,marginLeft")}),wt("padding",{parser:ht("paddingTop,paddingRight,paddingBottom,paddingLeft")}),wt("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(e,t,n,r,i,s){var u,a,f;return R<9?(a=e.currentStyle,f=R<8?" ":",",u="rect("+a.clipTop+f+a.clipRight+f+a.clipBottom+f+a.clipLeft+")",t=this.format(t).split(",").join(f)):(u=this.format(K(e,this.p,o,!1,this.dflt)),t=this.format(t)),this.parseComplex(e.style,u,t,i,s)}}),wt("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),wt("autoRound,strictUnits",{parser:function(e,t,n,r,i){return i}}),wt("border",{defaultValue:"0px solid #000",parser:function(e,t,n,r,i,s){return this.parseComplex(e.style,this.format(K(e,"borderTopWidth",o,!1,"0px")+" "+K(e,"borderTopStyle",o,!1,"solid")+" "+K(e,"borderTopColor",o,!1,"#000")),this.format(t),i,s)},color:!0,formatter:function(e){var t=e.split(" ");return t[0]+" "+(t[1]||"solid")+" "+(e.match(lt)||["#000"])[0]}}),wt("borderWidth",{parser:ht("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}),wt("float,cssFloat,styleFloat",{parser:function(e,t,n,r,i,s){var o=e.style,u="cssFloat"in o?"cssFloat":"styleFloat";return new mt(o,u,0,0,i,-1,n,!1,0,o[u],t)}});var Ft=function(e){var t=this.t,n=t.filter||K(this.data,"filter")||"",r=this.s+this.c*e|0,i;r===100&&(n.indexOf("atrix(")===-1&&n.indexOf("radient(")===-1&&n.indexOf("oader(")===-1?(t.removeAttribute("filter"),i=!K(this.data,"filter")):(t.filter=n.replace(g,""),i=!0));if(!i){this.xn1&&(t.filter=n=n||"alpha(opacity="+r+")");if(n.indexOf("pacity")===-1){if(r!==0||!this.xn1)t.filter=n+" alpha(opacity="+r+")"}else t.filter=n.replace(v,"opacity="+r)}};wt("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(e,t,n,r,i,s){var u=parseFloat(K(e,"opacity",o,!1,"1")),a=e.style,f=n==="autoAlpha";return typeof t=="string"&&t.charAt(1)==="="&&(t=(t.charAt(0)==="-"?-1:1)*parseFloat(t.substr(2))+u),f&&u===1&&K(e,"visibility",o)==="hidden"&&t!==0&&(u=0),U?i=new mt(a,"opacity",u,t-u,i):(i=new mt(a,"opacity",u*100,(t-u)*100,i),i.xn1=f?1:0,a.zoom=1,i.type=2,i.b="alpha(opacity="+i.s+")",i.e="alpha(opacity="+(i.s+i.c)+")",i.data=e,i.plugin=s,i.setRatio=Ft),f&&(i=new mt(a,"visibility",0,0,i,-1,null,!1,0,u!==0?"inherit":"hidden",t===0?"hidden":"inherit"),i.xs0="inherit",r._overwriteProps.push(i.n),r._overwriteProps.push(n)),i}});var It=function(e,t){t&&(e.removeProperty?(t.substr(0,2)==="ms"&&(t="M"+t.substr(1)),e.removeProperty(t.replace(b,"-$1").toLowerCase())):e.removeAttribute(t))},qt=function(e){this.t._gsClassPT=this;if(e===1||e===0){this.t.setAttribute("class",e===0?this.b:this.e);var t=this.data,n=this.t.style;while(t)t.v?n[t.p]=t.v:It(n,t.p),t=t._next;e===1&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)}else this.t.getAttribute("class")!==this.e&&this.t.setAttribute("class",this.e)};wt("className",{parser:function(e,t,n,r,s,u,a){var f=e.getAttribute("class")||"",l=e.style.cssText,c,h,p,d,v;s=r._classNamePT=new mt(e,n,0,0,s,2),s.setRatio=qt,s.pr=-11,i=!0,s.b=f,h=Y(e,o),p=e._gsClassPT;if(p){d={},v=p.data;while(v)d[v.p]=1,v=v._next;p.setRatio(1)}return e._gsClassPT=s,s.e=t.charAt(1)!=="="?t:f.replace(new RegExp("\\s*\\b"+t.substr(2)+"\\b"),"")+(t.charAt(0)==="+"?" "+t.substr(2):""),r._tween._duration&&(e.setAttribute("class",s.e),c=Z(e,h,Y(e),a,d),e.setAttribute("class",f),s.data=c.firstMPT,e.style.cssText=l,s=s.xfirst=r.parse(e,c.difs,s,u)),s}});var Rt=function(e){if(e===1||e===0)if(this.data._totalTime===this.data._totalDuration&&this.data.data!=="isFromStart"){var t=this.t.style,n=a.transform.parse,r,i,s,o;if(this.e==="all")t.cssText="",o=!0;else{r=this.e.split(" ").join("").split(","),s=r.length;while(--s>-1)i=r[s],a[i]&&(a[i].parse===n?o=!0:i=i==="transformOrigin"?Nt:a[i].p),It(t,i)}o&&(It(t,xt),this.t._gsTransform&&delete this.t._gsTransform)}};wt("clearProps",{parser:function(e,t,n,r,s){return s=new mt(e,n,0,0,s,2),s.setRatio=Rt,s.e=t,s.pr=-10,s.data=r._tween,i=!0,s}}),f="bezier,throwProps,physicsProps,physics2D".split(","),yt=f.length;while(yt--)Et(f[yt]);f=n.prototype,f._firstPT=f._lastParsedTransform=f._transform=null,f._onInitTween=function(e,t,r){if(!e.nodeType)return!1;this._target=e,this._tween=r,this._vars=t,B=t.autoRound,i=!1,s=t.suffixMap||n.suffixMap,o=J(e,""),u=this._overwriteProps;var a=e.style,f,l,c,h,p,d,v,g,y;j&&a.zIndex===""&&(f=K(e,"zIndex",o),(f==="auto"||f==="")&&this._addLazySet(a,"zIndex",0)),typeof t=="string"&&(h=a.cssText,f=Y(e,o),a.cssText=h+";"+t,f=Z(e,f,Y(e)).difs,!U&&m.test(t)&&(f.opacity=parseFloat(RegExp.$1)),t=f,a.cssText=h),this._firstPT=l=this.parse(e,t,null);if(this._transformType){y=this._transformType===3,xt?F&&(j=!0,a.zIndex===""&&(v=K(e,"zIndex",o),(v==="auto"||v==="")&&this._addLazySet(a,"zIndex",0)),q&&this._addLazySet(a,"WebkitBackfaceVisibility",this._vars.WebkitBackfaceVisibility||(y?"visible":"hidden"))):a.zoom=1,c=l;while(c&&c._next)c=c._next;g=new mt(e,"transform",0,0,null,2),this._linkCSSP(g,null,c),g.setRatio=y&&Ct?Bt:xt?jt:Ht,g.data=this._transform||Pt(e,o,!0),u.pop()}if(i){while(l){d=l._next,c=h;while(c&&c.pr>l.pr)c=c._next;(l._prev=c?c._prev:p)?l._prev._next=l:h=l,(l._next=c)?c._prev=l:p=l,l=d}this._firstPT=h}return!0},f.parse=function(e,t,n,r){var i=e.style,u,f,l,c,h,p,v,m,g,b;for(u in t){p=t[u],f=a[u];if(f)n=f.parse(e,p,u,this,n,r,t);else{h=K(e,u,o)+"",g=typeof p=="string";if(u==="color"||u==="fill"||u==="stroke"||u.indexOf("Color")!==-1||g&&y.test(p))g||(p=ft(p),p=(p.length>3?"rgba(":"rgb(")+p.join(",")+")"),n=gt(i,u,h,p,!0,"transparent",n,0,r);else if(!g||p.indexOf(" ")===-1&&p.indexOf(",")===-1){l=parseFloat(h),v=l||l===0?h.substr((l+"").length):"";if(h===""||h==="auto")u==="width"||u==="height"?(l=nt(e,u,o),v="px"):u==="left"||u==="top"?(l=G(e,u,o),v="px"):(l=u!=="opacity"?0:1,v="");b=g&&p.charAt(1)==="=",b?(c=parseInt(p.charAt(0)+"1",10),p=p.substr(2),c*=parseFloat(p),m=p.replace(d,"")):(c=parseFloat(p),m=g?p.substr((c+"").length)||"":""),m===""&&(m=u in s?s[u]:v),p=c||c===0?(b?c+l:c)+m:t[u],v!==m&&m!==""&&(c||c===0)&&l&&(l=Q(e,u,l,v),m==="%"?(l/=Q(e,u,100,"%")/100,t.strictUnits!==!0&&(h=l+"%")):m==="em"?l/=Q(e,u,1,"em"):m!=="px"&&(c=Q(e,u,c,m),m="px"),b&&(c||c===0)&&(p=c+l+m)),b&&(c+=l),!l&&l!==0||!c&&c!==0?i[u]===undefined||!p&&(p+""=="NaN"||p==null)?W("invalid "+u+" tween value: "+t[u]):(n=new mt(i,u,c||l||0,0,n,-1,u,!1,0,h,p),n.xs0=p!=="none"||u!=="display"&&u.indexOf("Style")===-1?p:h):(n=new mt(i,u,l,c-l,n,0,u,B!==!1&&(m==="px"||u==="zIndex"),0,h,p),n.xs0=m)}else n=gt(i,u,h,p,!0,null,n,0,r)}r&&n&&!n.plugin&&(n.plugin=r)}return n},f.setRatio=function(e){var t=this._firstPT,n=1e-6,r,i,s;if(e!==1||this._tween._time!==this._tween._duration&&this._tween._time!==0)if(e||this._tween._time!==this._tween._duration&&this._tween._time!==0||this._tween._rawPrevTime===-0.000001)while(t){r=t.c*e+t.s,t.r?r=Math.round(r):r<n&&r>-n&&(r=0);if(!t.type)t.t[t.p]=r+t.xs0;else if(t.type===1){s=t.l;if(s===2)t.t[t.p]=t.xs0+r+t.xs1+t.xn1+t.xs2;else if(s===3)t.t[t.p]=t.xs0+r+t.xs1+t.xn1+t.xs2+t.xn2+t.xs3;else if(s===4)t.t[t.p]=t.xs0+r+t.xs1+t.xn1+t.xs2+t.xn2+t.xs3+t.xn3+t.xs4;else if(s===5)t.t[t.p]=t.xs0+r+t.xs1+t.xn1+t.xs2+t.xn2+t.xs3+t.xn3+t.xs4+t.xn4+t.xs5;else{i=t.xs0+r+t.xs1;for(s=1;s<t.l;s++)i+=t["xn"+s]+t["xs"+(s+1)];t.t[t.p]=i}}else t.type===-1?t.t[t.p]=t.xs0:t.setRatio&&t.setRatio(e);t=t._next}else while(t)t.type!==2?t.t[t.p]=t.b:t.setRatio(e),t=t._next;else while(t)t.type!==2?t.t[t.p]=t.e:t.setRatio(e),t=t._next},f._enableTransforms=function(e){this._transform=this._transform||Pt(this._target,o,!0),this._transformType=!!this._transform.svg&&!!At||!e&&this._transformType!==3?2:3};var Ut=function(e){this.t[this.p]=this.e,this.data._linkCSSP(this,this._next,null,!0)};f._addLazySet=function(e,t,n){var r=this._firstPT=new mt(e,t,0,0,this._firstPT,2);r.e=n,r.setRatio=Ut,r.data=this},f._linkCSSP=function(e,t,n,r){return e&&(t&&(t._prev=e),e._next&&(e._next._prev=e._prev),e._prev?e._prev._next=e._next:this._firstPT===e&&(this._firstPT=e._next,r=!0),n?n._next=e:!r&&this._firstPT===null&&(this._firstPT=e),e._next=t,e._prev=n),e},f._kill=function(t){var n=t,r,i,s;if(t.autoAlpha||t.alpha){n={};for(i in t)n[i]=t[i];n.opacity=1,n.autoAlpha&&(n.visibility=1)}return t.className&&(r=this._classNamePT)&&(s=r.xfirst,s&&s._prev?this._linkCSSP(s._prev,r._next,s._prev._prev):s===this._firstPT&&(this._firstPT=r._next),r._next&&this._linkCSSP(r._next,r._next._next,s._prev),this._classNamePT=null),e.prototype._kill.call(this,n)};var zt=function(e,t,n){var r,i,s,o;if(e.slice){i=e.length;while(--i>-1)zt(e[i],t,n);return}r=e.childNodes,i=r.length;while(--i>-1)s=r[i],o=s.type,s.style&&(t.push(Y(s)),n&&n.push(s)),(o===1||o===9||o===11)&&s.childNodes.length&&zt(s,t,n)};return n.cascadeTo=function(e,n,r){var i=t.to(e,n,r),s=[i],o=[],u=[],a=[],f=t._internals.reservedProps,l,c,h;e=i._targets||i.target,zt(e,o,a),i.render(n,!0),zt(e,u),i.render(0,!0),i._enabled(!0),l=a.length;while(--l>-1){c=Z(a[l],o[l],u[l]);if(c.firstMPT){c=c.difs;for(h in r)f[h]&&(c[h]=r[h]);s.push(t.to(a[l],n,c))}}return s},e.activate([n]),n},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(e){"use strict";var t=function(){return(_gsScope.GreenSockGlobals||_gsScope)[e]};typeof define=="function"&&define.amd?define(["TweenLite"],t):typeof module!="undefined"&&module.exports&&(require("../TweenLite.js"),module.exports=t())}("CSSPlugin");