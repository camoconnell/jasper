define([
    'jquery',
    'global',
    'underscore',
    'backbone',
    'controllers/journal_controller'
], function(
    $,
    global,
    _,
    Backbone,
    JournalController
) {

    'use strict';

    return Backbone.View.extend({

        initialize: function() {},

        render: function() {

            var isPaginated = JournalController.isPaginated();
            if (isPaginated) {
                this.$el.css('opacity', 1);
            } else {
                this.$el.css('opacity', 0);
            }
        }
    });
});