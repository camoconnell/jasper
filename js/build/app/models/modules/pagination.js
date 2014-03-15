define([
    'underscore',
    'global',
    'backbone'
], function(
    _,
    global,
    Backbone
){
    "use strict";

    var PaginationModel = Backbone.Model.extend({
        defaults:{
            // set on Wordpress @ Settings > Reading
            maxNumOfPosts  : global.bootstrap.numOfPosts,
            numOfPages  : 1,
            pageIndex   : 1
        }
    });
    
    return PaginationModel;
});