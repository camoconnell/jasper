var _gsScope=typeof module!="undefined"&&module.exports&&typeof global!="undefined"?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";var e=180/Math.PI,t=[],n=[],r=[],i={},s=_gsScope._gsDefine.globals,o=function(e,t,n,r){this.a=e,this.b=t,this.c=n,this.d=r,this.da=r-e,this.ca=n-e,this.ba=t-e},u=",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",a=function(e,t,n,r){var i={a:e},s={},o={},u={c:r},a=(e+t)/2,f=(t+n)/2,l=(n+r)/2,c=(a+f)/2,h=(f+l)/2,p=(h-c)/8;return i.b=a+(e-a)/4,s.b=c+p,i.c=s.a=(i.b+s.b)/2,s.c=o.a=(c+h)/2,o.b=h-p,u.b=l+(r-l)/4,o.c=u.a=(o.b+u.b)/2,[i,s,o,u]},f=function(e,i,s,o,u){var f=e.length-1,l=0,c=e[0].a,h,p,d,v,m,g,y,b,w,E,S,x,T;for(h=0;h<f;h++)m=e[l],p=m.a,d=m.d,v=e[l+1].d,u?(S=t[h],x=n[h],T=(x+S)*i*.25/(o?.5:r[h]||.5),g=d-(d-p)*(o?i*.5:S!==0?T/S:0),y=d+(v-d)*(o?i*.5:x!==0?T/x:0),b=d-(g+((y-g)*(S*3/(S+x)+.5)/4||0))):(g=d-(d-p)*i*.5,y=d+(v-d)*i*.5,b=d-(g+y)/2),g+=b,y+=b,m.c=w=g,h!==0?m.b=c:m.b=c=m.a+(m.c-m.a)*.6,m.da=d-p,m.ca=w-p,m.ba=c-p,s?(E=a(p,c,w,d),e.splice(l,1,E[0],E[1],E[2],E[3]),l+=4):l++,c=y;m=e[l],m.b=c,m.c=c+(m.d-c)*.4,m.da=m.d-m.a,m.ca=m.c-m.a,m.ba=c-m.a,s&&(E=a(m.a,c,m.c,m.d),e.splice(l,1,E[0],E[1],E[2],E[3]))},l=function(e,r,i,s){var u=[],a,f,l,c,h,p;if(s){e=[s].concat(e),f=e.length;while(--f>-1)typeof (p=e[f][r])=="string"&&p.charAt(1)==="="&&(e[f][r]=s[r]+Number(p.charAt(0)+p.substr(2)))}a=e.length-2;if(a<0)return u[0]=new o(e[0][r],0,0,e[a<-1?0:1][r]),u;for(f=0;f<a;f++)l=e[f][r],c=e[f+1][r],u[f]=new o(l,0,0,c),i&&(h=e[f+2][r],t[f]=(t[f]||0)+(c-l)*(c-l),n[f]=(n[f]||0)+(h-c)*(h-c));return u[f]=new o(e[f][r],0,0,e[f+1][r]),u},c=function(e,s,o,a,c,h){var p={},d=[],v=h||e[0],m,g,y,b,w,E,S,x;c=typeof c=="string"?","+c+",":u,s==null&&(s=1);for(g in e[0])d.push(g);if(e.length>1){x=e[e.length-1],S=!0,m=d.length;while(--m>-1){g=d[m];if(Math.abs(v[g]-x[g])>.05){S=!1;break}}S&&(e=e.concat(),h&&e.unshift(h),e.push(e[1]),h=e[e.length-3])}t.length=n.length=r.length=0,m=d.length;while(--m>-1)g=d[m],i[g]=c.indexOf(","+g+",")!==-1,p[g]=l(e,g,i[g],h);m=t.length;while(--m>-1)t[m]=Math.sqrt(t[m]),n[m]=Math.sqrt(n[m]);if(!a){m=d.length;while(--m>-1)if(i[g]){y=p[d[m]],E=y.length-1;for(b=0;b<E;b++)w=y[b+1].da/n[b]+y[b].da/t[b],r[b]=(r[b]||0)+w*w}m=r.length;while(--m>-1)r[m]=Math.sqrt(r[m])}m=d.length,b=o?4:1;while(--m>-1)g=d[m],y=p[g],f(y,s,o,a,i[g]),S&&(y.splice(0,b),y.splice(y.length-b,b));return p},h=function(e,t,n){t=t||"soft";var r={},i=t==="cubic"?3:2,s=t==="soft",u=[],a,f,l,c,h,p,d,v,m,g,y;s&&n&&(e=[n].concat(e));if(e==null||e.length<i+1)throw"invalid Bezier data";for(m in e[0])u.push(m);p=u.length;while(--p>-1){m=u[p],r[m]=h=[],g=0,v=e.length;for(d=0;d<v;d++)a=n==null?e[d][m]:typeof (y=e[d][m])=="string"&&y.charAt(1)==="="?n[m]+Number(y.charAt(0)+y.substr(2)):Number(y),s&&d>1&&d<v-1&&(h[g++]=(a+h[g-2])/2),h[g++]=a;v=g-i+1,g=0;for(d=0;d<v;d+=i)a=h[d],f=h[d+1],l=h[d+2],c=i===2?0:h[d+3],h[g++]=y=i===3?new o(a,f,l,c):new o(a,(2*f+a)/3,(2*f+l)/3,l);h.length=g}return r},p=function(e,t,n){var r=1/n,i=e.length,s,o,u,a,f,l,c,h,p,d,v;while(--i>-1){d=e[i],u=d.a,a=d.d-u,f=d.c-u,l=d.b-u,s=o=0;for(h=1;h<=n;h++)c=r*h,p=1-c,s=o-(o=(c*c*a+3*p*(c*f+p*l))*c),v=i*n+h-1,t[v]=(t[v]||0)+s*s}},d=function(e,t){t=t>>0||6;var n=[],r=[],i=0,s=0,o=t-1,u=[],a=[],f,l,c,h;for(f in e)p(e[f],n,t);c=n.length;for(l=0;l<c;l++)i+=Math.sqrt(n[l]),h=l%t,a[h]=i,h===o&&(s+=i,h=l/t>>0,u[h]=a,r[h]=s,i=0,a=[]);return{length:s,lengths:r,segments:u}},v=_gsScope._gsDefine.plugin({propName:"bezier",priority:-1,version:"1.3.4",API:2,global:!0,init:function(e,t,n){this._target=e,t instanceof Array&&(t={values:t}),this._func={},this._round={},this._props=[],this._timeRes=t.timeResolution==null?6:parseInt(t.timeResolution,10);var r=t.values||[],i={},s=r[0],o=t.autoRotate||n.vars.orientToBezier,u,a,f,l,p;this._autoRotate=o?o instanceof Array?o:[["x","y","rotation",o===!0?0:Number(o)||0]]:null;for(u in s)this._props.push(u);f=this._props.length;while(--f>-1)u=this._props[f],this._overwriteProps.push(u),a=this._func[u]=typeof e[u]=="function",i[u]=a?e[u.indexOf("set")||typeof e["get"+u.substr(3)]!="function"?u:"get"+u.substr(3)]():parseFloat(e[u]),p||i[u]!==r[0][u]&&(p=i);this._beziers=t.type!=="cubic"&&t.type!=="quadratic"&&t.type!=="soft"?c(r,isNaN(t.curviness)?1:t.curviness,!1,t.type==="thruBasic",t.correlate,p):h(r,t.type,i),this._segCount=this._beziers[u].length;if(this._timeRes){var v=d(this._beziers,this._timeRes);this._length=v.length,this._lengths=v.lengths,this._segments=v.segments,this._l1=this._li=this._s1=this._si=0,this._l2=this._lengths[0],this._curSeg=this._segments[0],this._s2=this._curSeg[0],this._prec=1/this._curSeg.length}if(o=this._autoRotate){this._initialRotations=[],o[0]instanceof Array||(this._autoRotate=o=[o]),f=o.length;while(--f>-1){for(l=0;l<3;l++)u=o[f][l],this._func[u]=typeof e[u]=="function"?e[u.indexOf("set")||typeof e["get"+u.substr(3)]!="function"?u:"get"+u.substr(3)]:!1;u=o[f][2],this._initialRotations[f]=this._func[u]?this._func[u].call(this._target):this._target[u]}}return this._startRatio=n.vars.runBackwards?1:0,!0},set:function(t){var n=this._segCount,r=this._func,i=this._target,s=t!==this._startRatio,o,u,a,f,l,c,h,p,d,v;if(!this._timeRes)o=t<0?0:t>=1?n-1:n*t>>0,c=(t-o*(1/n))*n;else{d=this._lengths,v=this._curSeg,t*=this._length,a=this._li;if(t>this._l2&&a<n-1){p=n-1;while(a<p&&(this._l2=d[++a])<=t);this._l1=d[a-1],this._li=a,this._curSeg=v=this._segments[a],this._s2=v[this._s1=this._si=0]}else if(t<this._l1&&a>0){while(a>0&&(this._l1=d[--a])>=t);a===0&&t<this._l1?this._l1=0:a++,this._l2=d[a],this._li=a,this._curSeg=v=this._segments[a],this._s1=v[(this._si=v.length-1)-1]||0,this._s2=v[this._si]}o=a,t-=this._l1,a=this._si;if(t>this._s2&&a<v.length-1){p=v.length-1;while(a<p&&(this._s2=v[++a])<=t);this._s1=v[a-1],this._si=a}else if(t<this._s1&&a>0){while(a>0&&(this._s1=v[--a])>=t);a===0&&t<this._s1?this._s1=0:a++,this._s2=v[a],this._si=a}c=(a+(t-this._s1)/(this._s2-this._s1))*this._prec}u=1-c,a=this._props.length;while(--a>-1)f=this._props[a],l=this._beziers[f][o],h=(c*c*l.da+3*u*(c*l.ca+u*l.ba))*c+l.a,this._round[f]&&(h=Math.round(h)),r[f]?i[f](h):i[f]=h;if(this._autoRotate){var m=this._autoRotate,g,y,b,w,E,S,x;a=m.length;while(--a>-1)f=m[a][2],S=m[a][3]||0,x=m[a][4]===!0?1:e,l=this._beziers[m[a][0]],g=this._beziers[m[a][1]],l&&g&&(l=l[o],g=g[o],y=l.a+(l.b-l.a)*c,w=l.b+(l.c-l.b)*c,y+=(w-y)*c,w+=(l.c+(l.d-l.c)*c-w)*c,b=g.a+(g.b-g.a)*c,E=g.b+(g.c-g.b)*c,b+=(E-b)*c,E+=(g.c+(g.d-g.c)*c-E)*c,h=s?Math.atan2(E-b,w-y)*x+S:this._initialRotations[a],r[f]?i[f](h):i[f]=h)}}}),m=v.prototype;v.bezierThrough=c,v.cubicToQuadratic=a,v._autoCSS=!0,v.quadraticToCubic=function(e,t,n){return new o(e,(2*t+e)/3,(2*t+n)/3,n)},v._cssRegister=function(){var e=s.CSSPlugin;if(!e)return;var t=e._internals,n=t._parseToProxy,r=t._setPluginRatio,i=t.CSSPropTween;t._registerComplexSpecialProp("bezier",{parser:function(e,t,s,o,u,a){t instanceof Array&&(t={values:t}),a=new v;var f=t.values,l=f.length-1,c=[],h={},p,d,m;if(l<0)return u;for(p=0;p<=l;p++)m=n(e,f[p],o,u,a,l!==p),c[p]=m.end;for(d in t)h[d]=t[d];return h.values=c,u=new i(e,"bezier",0,0,m.pt,2),u.data=m,u.plugin=a,u.setRatio=r,h.autoRotate===0&&(h.autoRotate=!0),h.autoRotate&&!(h.autoRotate instanceof Array)&&(p=h.autoRotate===!0?0:Number(h.autoRotate),h.autoRotate=m.end.left!=null?[["left","top","rotation",p,!1]]:m.end.x!=null?[["x","y","rotation",p,!1]]:!1),h.autoRotate&&(o._transform||o._enableTransforms(!1),m.autoRotate=o._target._gsTransform),a._onInitTween(m.proxy,h,o._tween),u}})},m._roundProps=function(e,t){var n=this._overwriteProps,r=n.length;while(--r>-1)if(e[n[r]]||e.bezier||e.bezierThrough)this._round[n[r]]=t},m._kill=function(e){var t=this._props,n,r;for(n in this._beziers)if(n in e){delete this._beziers[n],delete this._func[n],r=t.length;while(--r>-1)t[r]===n&&t.splice(r,1)}return this._super._kill.call(this,e)}}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(e){"use strict";var t=function(){return(_gsScope.GreenSockGlobals||_gsScope)[e]};typeof define=="function"&&define.amd?define(["TweenLite"],t):typeof module!="undefined"&&module.exports&&(require("../TweenLite.js"),module.exports=t())}("BezierPlugin");