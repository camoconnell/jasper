require.config({
    
    urlArgs: "bust=" + (new Date()).getTime(),
    
    baseUrl: WP.THEME_URL+"/js/build/app",
    
    paths: {
        "global"      : "config",
        "jquery"      : "lib/jquery-2.1.0",
        "underscore"  : "lib/underscore-min",
        "backbone"    : "lib/backbone",
        "plugins"     : "lib/plugins",
        "text"        : "lib/text",
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
    'main'
],function(
    $,
    global,
    _,
    Backbone,
    Main
){
    "use strict";
    Main.initialize();
});