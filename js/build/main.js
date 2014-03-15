require.config({
    
    urlArgs: "bust=" + (new Date()).getTime(),
    
    baseUrl: WP.THEME_URL+"/js/build/app",
    
    // The shim config allows us to configure dependencies for
	// scripts that do not call define() to register a module
    
    paths: {
        "app"         : "app",
        "jquery"      : "../lib/jquery-2.1.0",
        "global"      : "global",
        "underscore"  : "../lib/underscore-min",
        "backbone"    : "../lib/backbone",
        "plugins"     : "../lib/plugins",
        "text"        : "../lib/text",
        "templates"   : "../../../templates"
    },

    shim: {
        "underscore" :{
            "exports" : "_"
        },
        "jquery" : {
            "exports" : "$"
        },
        "backbone": {
            "deps" : [ "jquery" , "underscore" ],
            "exports" : "Backbone"
        }  
    }
});


require([   
    'jquery',
    'global',
    'underscore',
    'backbone',
    'app'], function( $ , global,  _ , Backbone , App ){
    
    App.initialize();
});