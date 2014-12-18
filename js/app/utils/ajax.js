define([
     "jquery"
    ,"global"
    ],function ( $ , global ) {   
  
    var processing = false;
    
    var process = function( options ){
     
        if( processing ) 
            return;

        processing = true;

        preloader();

        $.ajax( options.params )
        .done(function( data ) {
            return options.callbacks.done( data );
        })
        .fail(function(jqXHR, textStatus) {
            // alert( "Request failed: " + textStatus );
            return options.callbacks.fail();
        })
        .always(function() {
            processing = false;
            preloader();
        })
    }
 
    var post = function( options ){

        var postData = {
            action : 'request_handler',
            ajaxCustomNonce : global.nonce
        };

        // merge customData into default
        $.extend( postData , options.data ); 

        process({ 
            params : {
                type : 'post',
                url  : global.ajaxurl,
                data : postData
            },
            callbacks : options.callbacks
        });
    };
        
    var preloader = function(){
        if ( processing ) 
            $('.preloader').fadeIn(500); 
        else
            $('.preloader').fadeOut(500);
    };

        
    return {
        post : post,
        get : function( options ){
            process({ 
                params : {
                    type : 'get',
                    url  : options.url
                },
                callbacks : options.callbacks
            });
        }
    }
});