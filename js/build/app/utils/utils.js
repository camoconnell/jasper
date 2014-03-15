/*
 * Utilies 
 * - - - - - - - - - - - - - -
 */
 
define(['jquery', 'underscore', 'plugins'], function($, _ ) {
    
  // Animate standard bg images
  $.fn.animateBG = function(x, y, speed) {
      var pos = this.css('background-position').split(' ');
      this.x = pos[0] || 0,
      this.y = pos[1] || 0;
      $.Animation( this, {
          x: x,
          y: y
        }, { 
          duration: speed
        }).progress(function(e) {
            this.css('background-position', e.tweens[0].now+'px '+'bottom');
      });
      return this;
  };

  // Animate svg bg pattern
  $.fn.animateSvgBG = function( speed ) {

    if( this.data("animateSvg") )
      return;

    this.data("animateSvg", true);

    var count = 1,
        interval = 20,
        duration  = Math.round( speed / (interval/2) ), 
        dist,
        that = this,
        intervalID = setInterval(function(){
       
        dist = 3*count;

        that.attr('x', dist);
        count++; 
               
        if(count === duration)
          killAnimation();

      }, interval);

    function killAnimation(){ 
      clearInterval( intervalID ); 
      that.data("animateSvg", false);
    }
          
    return this;
  };


  var hex2rgba = function( hex , opacity ) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
        rgba: parseInt(result[1], 16) + ", " + parseInt(result[2], 16) + ", " + parseInt(result[3], 16) + ", " + opacity
    } : null;
  }; 

  String.prototype.capitalize = function() {
      return this.charAt(0).toUpperCase() + this.slice(1);
  };


 
      
    return {
        hex2rgba : hex2rgba,
        openPopup:function(href, width, height, other){
            var _other = ''|| other;
            var newWindow = window.open(href,'name','width='+width+',height='+height + _other);
            if (window.focus) {
                newWindow.focus();
            }
        }
    }; 
});