(function(e){"use strict";function t(e){var t=e.create("fitRows");return t.prototype._resetLayout=function(){this.x=0,this.y=0,this.maxY=0,this._getMeasurement("gutter","outerWidth")},t.prototype._getItemLayoutPosition=function(e){e.getSize();var t=e.size.outerWidth+this.gutter,n=this.isotope.size.innerWidth+this.gutter;this.x!==0&&t+this.x>n&&(this.x=0,this.y=this.maxY);var r={x:this.x,y:this.y};return this.maxY=Math.max(this.maxY,this.y+e.size.outerHeight),this.x+=t,r},t.prototype._getContainerSize=function(){return{height:this.maxY}},t}typeof define=="function"&&define.amd?define(["../layout-mode"],t):typeof exports=="object"?module.exports=t(require("../layout-mode")):t(e.Isotope.LayoutMode)})(window);