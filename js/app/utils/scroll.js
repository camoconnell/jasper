/*
* Utilies / Scroll
* - - - - - - - - - - - - - -
*/

define(["jquery"],function ($) {   
  
    var scrollItems = [],
        scrollDirection = 0,
        scrollTop = $(this).scrollTop(),
        update = function () {
             
            scrollTop = $(this).scrollTop();
        
            for (i = 0; i < scrollItems.length; i++) {
                var item = scrollItems[i];
                if (item.start && scrollTop < item.start) continue;
                if (item.end && scrollTop > item.end) continue;
                if (item.condition && !item.condition(scrollTop, scrollDirection)) continue;
        
                item.callback(scrollTop, scrollDirection);
            }
        };
        
    return {
        update : update,
        add : function( item ) { scrollItems.push( item ) }
    }
});