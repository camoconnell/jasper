define([
    'underscore',
    'global',
    'backbone'
], function(
    _,
    global,
    Backbone
) {

    "use strict";

    return Backbone.Model.extend({
        defaults: {
            // set on Wordpress @ Settings > Reading
            maxNumOfPosts: global.bootstrap.numOfPosts,
            numOfPages: 1,
            pageIndex: 1
        }
    });
});