define([
    'underscore',
    'backbone'
], function( _ , Backbone ){
  
    // Page Model
    var PostModel = Backbone.Model.extend({
        defaults : {
            id      : -1, 
            slug    : 'none',
            url     : 'none',
            title   : 'none',
            content     : 'none',
            date        : 'none',
            categories  : []
        }
    });
    
    return PostModel;
});