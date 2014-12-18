define([
    'underscore',
    'global',
    'backbone',
    'plugins'

], function(
    _,
    global,
    Backbone
) {

    return Backbone.Model.extend({

        defaults: {
            category: '',
            post_count: 0,
            timer: null
        }
    });
});