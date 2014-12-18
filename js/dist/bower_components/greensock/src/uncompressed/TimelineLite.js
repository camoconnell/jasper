var _gsScope=typeof module!="undefined"&&module.exports&&typeof global!="undefined"?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(e,t,n){var r=function(e){t.call(this,e),this._labels={},this.autoRemoveChildren=this.vars.autoRemoveChildren===!0,this.smoothChildTiming=this.vars.smoothChildTiming===!0,this._sortChildren=!0,this._onUpdate=this.vars.onUpdate;var n=this.vars,r,i;for(i in n)r=n[i],u(r)&&r.join("").indexOf("{self}")!==-1&&(n[i]=this._swapSelfInParams(r));u(n.tweens)&&this.add(n.tweens,0,n.align,n.stagger)},i=1e-10,s=n._internals,o=s.isSelector,u=s.isArray,a=s.lazyTweens,f=s.lazyRender,l=[],c=_gsScope._gsDefine.globals,h=function(e){var t={},n;for(n in e)t[n]=e[n];return t},p=function(e,t,n,r){var i=e._timeline,s=i._totalTime;(t||!this._forcingPlayhead)&&i._rawPrevTime!==e._startTime&&(i.pause(e._startTime),t&&t.apply(r||i,n||l),this._forcingPlayhead&&i.seek(s))},d=function(e){var t=[],n=e.length,r;for(r=0;r!==n;t.push(e[r++]));return t},v=r.prototype=new t;return r.version="1.15.0",v.constructor=r,v.kill()._gc=v._forcingPlayhead=!1,v.to=function(e,t,r,i){var s=r.repeat&&c.TweenMax||n;return t?this.add(new s(e,t,r),i):this.set(e,r,i)},v.from=function(e,t,r,i){return this.add((r.repeat&&c.TweenMax||n).from(e,t,r),i)},v.fromTo=function(e,t,r,i,s){var o=i.repeat&&c.TweenMax||n;return t?this.add(o.fromTo(e,t,r,i),s):this.set(e,i,s)},v.staggerTo=function(e,t,i,s,u,a,f,l){var c=new r({onComplete:a,onCompleteParams:f,onCompleteScope:l,smoothChildTiming:this.smoothChildTiming}),p;typeof e=="string"&&(e=n.selector(e)||e),e=e||[],o(e)&&(e=d(e)),s=s||0,s<0&&(e=d(e),e.reverse(),s*=-1);for(p=0;p<e.length;p++)i.startAt&&(i.startAt=h(i.startAt)),c.to(e[p],t,h(i),p*s);return this.add(c,u)},v.staggerFrom=function(e,t,n,r,i,s,o,u){return n.immediateRender=n.immediateRender!=0,n.runBackwards=!0,this.staggerTo(e,t,n,r,i,s,o,u)},v.staggerFromTo=function(e,t,n,r,i,s,o,u,a){return r.startAt=n,r.immediateRender=r.immediateRender!=0&&n.immediateRender!=0,this.staggerTo(e,t,r,i,s,o,u,a)},v.call=function(e,t,r,i){return this.add(n.delayedCall(0,e,t,r),i)},v.set=function(e,t,r){return r=this._parseTimeOrLabel(r,0,!0),t.immediateRender==null&&(t.immediateRender=r===this._time&&!this._paused),this.add(new n(e,0,t),r)},r.exportRoot=function(e,t){e=e||{},e.smoothChildTiming==null&&(e.smoothChildTiming=!0);var i=new r(e),s=i._timeline,o,u;t==null&&(t=!0),s._remove(i,!0),i._startTime=0,i._rawPrevTime=i._time=i._totalTime=s._time,o=s._first;while(o)u=o._next,(!t||!(o instanceof n&&o.target===o.vars.onComplete))&&i.add(o,o._startTime-o._delay),o=u;return s.add(i,0),i},v.add=function(i,s,o,a){var f,l,c,h,p,d;typeof s!="number"&&(s=this._parseTimeOrLabel(s,0,!0,i));if(!(i instanceof e)){if(i instanceof Array||i&&i.push&&u(i)){o=o||"normal",a=a||0,f=s,l=i.length;for(c=0;c<l;c++)u(h=i[c])&&(h=new r({tweens:h})),this.add(h,f),typeof h!="string"&&typeof h!="function"&&(o==="sequence"?f=h._startTime+h.totalDuration()/h._timeScale:o==="start"&&(h._startTime-=h.delay())),f+=a;return this._uncache(!0)}if(typeof i=="string")return this.addLabel(i,s);if(typeof i!="function")throw"Cannot add "+i+" into the timeline; it is not a tween, timeline, function, or string.";i=n.delayedCall(0,i)}t.prototype.add.call(this,i,s);if(this._gc||this._time===this._duration)if(!this._paused&&this._duration<this.duration()){p=this,d=p.rawTime()>i._startTime;while(p._timeline)d&&p._timeline.smoothChildTiming?p.totalTime(p._totalTime,!0):p._gc&&p._enabled(!0,!1),p=p._timeline}return this},v.remove=function(t){if(t instanceof e)return this._remove(t,!1);if(t instanceof Array||t&&t.push&&u(t)){var n=t.length;while(--n>-1)this.remove(t[n]);return this}return typeof t=="string"?this.removeLabel(t):this.kill(null,t)},v._remove=function(e,n){t.prototype._remove.call(this,e,n);var r=this._last;return r?this._time>r._startTime+r._totalDuration/r._timeScale&&(this._time=this.duration(),this._totalTime=this._totalDuration):this._time=this._totalTime=this._duration=this._totalDuration=0,this},v.append=function(e,t){return this.add(e,this._parseTimeOrLabel(null,t,!0,e))},v.insert=v.insertMultiple=function(e,t,n,r){return this.add(e,t||0,n,r)},v.appendMultiple=function(e,t,n,r){return this.add(e,this._parseTimeOrLabel(null,t,!0,e),n,r)},v.addLabel=function(e,t){return this._labels[e]=this._parseTimeOrLabel(t),this},v.addPause=function(e,t,r,i){var s=n.delayedCall(0,p,["{self}",t,r,i],this);return s.data="isPause",this.add(s,e)},v.removeLabel=function(e){return delete this._labels[e],this},v.getLabelTime=function(e){return this._labels[e]!=null?this._labels[e]:-1},v._parseTimeOrLabel=function(t,n,r,i){var s;if(i instanceof e&&i.timeline===this)this.remove(i);else if(i&&(i instanceof Array||i.push&&u(i))){s=i.length;while(--s>-1)i[s]instanceof e&&i[s].timeline===this&&this.remove(i[s])}if(typeof n=="string")return this._parseTimeOrLabel(n,r&&typeof t=="number"&&this._labels[n]==null?t-this.duration():0,r);n=n||0;if(typeof t!="string"||!isNaN(t)&&this._labels[t]==null)t==null&&(t=this.duration());else{s=t.indexOf("=");if(s===-1)return this._labels[t]==null?r?this._labels[t]=this.duration()+n:n:this._labels[t]+n;n=parseInt(t.charAt(s-1)+"1",10)*Number(t.substr(s+1)),t=s>1?this._parseTimeOrLabel(t.substr(0,s-1),0,r):this.duration()}return Number(t)+n},v.seek=function(e,t){return this.totalTime(typeof e=="number"?e:this._parseTimeOrLabel(e),t!==!1)},v.stop=function(){return this.paused(!0)},v.gotoAndPlay=function(e,t){return this.play(e,t)},v.gotoAndStop=function(e,t){return this.pause(e,t)},v.render=function(e,t,n){this._gc&&this._enabled(!0,!1);var r=this._dirty?this.totalDuration():this._totalDuration,s=this._time,o=this._startTime,u=this._timeScale,c=this._paused,h,p,d,v,m;if(e>=r)this._totalTime=this._time=r,this._reversed||this._hasPausedChild()||(p=!0,v="onComplete",this._duration===0&&(e===0||this._rawPrevTime<0||this._rawPrevTime===i)&&this._rawPrevTime!==e&&this._first&&(m=!0,this._rawPrevTime>i&&(v="onReverseComplete"))),this._rawPrevTime=this._duration||!t||e||this._rawPrevTime===e?e:i,e=r+1e-4;else if(e<1e-7){this._totalTime=this._time=0;if(s!==0||this._duration===0&&this._rawPrevTime!==i&&(this._rawPrevTime>0||e<0&&this._rawPrevTime>=0))v="onReverseComplete",p=this._reversed;e<0?(this._active=!1,this._rawPrevTime>=0&&this._first&&(m=!0),this._rawPrevTime=e):(this._rawPrevTime=this._duration||!t||e||this._rawPrevTime===e?e:i,e=0,this._initted||(m=!0))}else this._totalTime=this._time=this._rawPrevTime=e;if((this._time===s||!this._first)&&!n&&!m)return;this._initted||(this._initted=!0),this._active||!this._paused&&this._time!==s&&e>0&&(this._active=!0),s===0&&this.vars.onStart&&this._time!==0&&(t||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||l));if(this._time>=s){h=this._first;while(h){d=h._next;if(this._paused&&!c)break;if(h._active||h._startTime<=this._time&&!h._paused&&!h._gc)h._reversed?h.render((h._dirty?h.totalDuration():h._totalDuration)-(e-h._startTime)*h._timeScale,t,n):h.render((e-h._startTime)*h._timeScale,t,n);h=d}}else{h=this._last;while(h){d=h._prev;if(this._paused&&!c)break;if(h._active||h._startTime<=s&&!h._paused&&!h._gc)h._reversed?h.render((h._dirty?h.totalDuration():h._totalDuration)-(e-h._startTime)*h._timeScale,t,n):h.render((e-h._startTime)*h._timeScale,t,n);h=d}}this._onUpdate&&(t||(a.length&&f(),this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||l))),v&&!this._gc&&(o===this._startTime||u!==this._timeScale)&&(this._time===0||r>=this.totalDuration())&&(p&&(a.length&&f(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!t&&this.vars[v]&&this.vars[v].apply(this.vars[v+"Scope"]||this,this.vars[v+"Params"]||l))},v._hasPausedChild=function(){var e=this._first;while(e){if(e._paused||e instanceof r&&e._hasPausedChild())return!0;e=e._next}return!1},v.getChildren=function(e,t,r,i){i=i||-9999999999;var s=[],o=this._first,u=0;while(o)o._startTime<i||(o instanceof n?t!==!1&&(s[u++]=o):(r!==!1&&(s[u++]=o),e!==!1&&(s=s.concat(o.getChildren(!0,t,r)),u=s.length))),o=o._next;return s},v.getTweensOf=function(e,t){var r=this._gc,i=[],s=0,o,u;r&&this._enabled(!0,!0),o=n.getTweensOf(e),u=o.length;while(--u>-1)if(o[u].timeline===this||t&&this._contains(o[u]))i[s++]=o[u];return r&&this._enabled(!1,!0),i},v.recent=function(){return this._recent},v._contains=function(e){var t=e.timeline;while(t){if(t===this)return!0;t=t.timeline}return!1},v.shiftChildren=function(e,t,n){n=n||0;var r=this._first,i=this._labels,s;while(r)r._startTime>=n&&(r._startTime+=e),r=r._next;if(t)for(s in i)i[s]>=n&&(i[s]+=e);return this._uncache(!0)},v._kill=function(e,t){if(!e&&!t)return this._enabled(!1,!1);var n=t?this.getTweensOf(t):this.getChildren(!0,!0,!1),r=n.length,i=!1;while(--r>-1)n[r]._kill(e,t)&&(i=!0);return i},v.clear=function(e){var t=this.getChildren(!1,!0,!0),n=t.length;this._time=this._totalTime=0;while(--n>-1)t[n]._enabled(!1,!1);return e!==!1&&(this._labels={}),this._uncache(!0)},v.invalidate=function(){var t=this._first;while(t)t.invalidate(),t=t._next;return e.prototype.invalidate.call(this)},v._enabled=function(e,n){if(e===this._gc){var r=this._first;while(r)r._enabled(e,!0),r=r._next}return t.prototype._enabled.call(this,e,n)},v.totalTime=function(t,n,r){this._forcingPlayhead=!0;var i=e.prototype.totalTime.apply(this,arguments);return this._forcingPlayhead=!1,i},v.duration=function(e){return arguments.length?(this.duration()!==0&&e!==0&&this.timeScale(this._duration/e),this):(this._dirty&&this.totalDuration(),this._duration)},v.totalDuration=function(e){if(!arguments.length){if(this._dirty){var t=0,n=this._last,r=999999999999,i,s;while(n)i=n._prev,n._dirty&&n.totalDuration(),n._startTime>r&&this._sortChildren&&!n._paused?this.add(n,n._startTime-n._delay):r=n._startTime,n._startTime<0&&!n._paused&&(t-=n._startTime,this._timeline.smoothChildTiming&&(this._startTime+=n._startTime/this._timeScale),this.shiftChildren(-n._startTime,!1,-9999999999),r=0),s=n._startTime+n._totalDuration/n._timeScale,s>t&&(t=s),n=i;this._duration=this._totalDuration=t,this._dirty=!1}return this._totalDuration}return this.totalDuration()!==0&&e!==0&&this.timeScale(this._totalDuration/e),this},v.usesFrames=function(){var t=this._timeline;while(t._timeline)t=t._timeline;return t===e._rootFramesTimeline},v.rawTime=function(){return this._paused?this._totalTime:(this._timeline.rawTime()-this._startTime)*this._timeScale},r},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(e){"use strict";var t=function(){return(_gsScope.GreenSockGlobals||_gsScope)[e]};typeof define=="function"&&define.amd?define(["TweenLite"],t):typeof module!="undefined"&&module.exports&&(require("./TweenLite.js"),module.exports=t())}("TimelineLite");