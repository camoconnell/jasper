require.config({
    deps: ['../main'], //load main.js

    locale: 'en-us',

    keepBuildDir: true,

    waitSeconds: 60,

    //TODO remove
    // urlArgs: "bust="+ (new Date()).getTime(), //cache killer

    // Paths that contain the various different javascript files.
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