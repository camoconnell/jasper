define([
    'jquery',
    'global',
    'underscore',
    'backbone'
], function($, global, _, Backbone) {

    "use strict";

    var Router = Backbone.Router.extend({

        routes: {
            '*variables': 'parseUrl'
        },

        initialize: function(options) {
            this.controller = options.controller;
            Backbone.history.start({
                pushState: true
            });
        },

        parseUrl: function(result) {

            var values;

            if (result === null) {
                values = ['home']; // on homepage if result is empty
            } else {
                values = result.split("/"); // create an array of url values
                values.pop(); // remove empty value
            }

            this.controller.update(values);
        }
    });

    return Router;
});