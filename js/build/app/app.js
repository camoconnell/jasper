define([
    'jquery',
    'global',
    'underscore',
    'backbone',
    'controller',
    'router'
], function(
    $,
    global,
    _,
    Backbone,
    Controller,
    Router
){
    "use strict";
  
    var initialize = function(){

        var controller = new Controller({ el: $('body') });
        var onDomReady = function() {
            controller.onReady();
            var router = new Router({'controller':controller});
        };
        $(document).ready(onDomReady);
    };

    return {
        initialize: initialize
    };
});