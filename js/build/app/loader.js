require.config({

    urlArgs: "bust=" + (new Date()).getTime(),

    baseUrl: WP.THEME_URL + "/js/build/app",

    paths: {
        global: "config",
        jquery: '../bower_components/jquery/dist/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',
        // handlebars: '../bower_components/handlebars/handlebars',
        // tweenmax: '../bower_components/greensock/src/uncompressed/TweenMax',
        // draggable: '../bower_components/greensock/src/uncompressed/utils/Draggable',
        lazylinepainter: '../bower_components/lazy-line-painter/jquery.lazylinepainter-1.5.0',
        lettering: '../bower_components/Lettering.js/jquery.lettering',
        fitVids: '../bower_components/fitvids/jquery.fitvids',
        plugins: "lib/plugins",
        text: '../bower_components/requirejs-text/text',
        templates: "../../../templates"
    },

    shim: {
        underscore: {
            "exports": "_"
        },
        jquery: {
            "exports": "$"
        },
        backbone: {
            "deps": ["jquery", "underscore"],
            "exports": "Backbone"
        },
        lazylinepainter: {
            "deps": ["jquery"]
        }
    }
});

require([
    'jquery',
    'global',
    'underscore',
    'backbone',
    'main'
], function(
    $,
    global,
    _,
    Backbone,
    Main
) {
    "use strict";
    Main.initialize();
});