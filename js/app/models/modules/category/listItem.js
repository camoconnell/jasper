// Filename: models / widgets / category / listItem  

define([
    'underscore',
    'backbone'
], function( _ , Backbone ){
  
    // Menu Model
    var CategoryItemModel = Backbone.Model.extend({ 
        defaults : {
            catId       : -1,
            slug        : 'none',
            title       : 'none',
            description : 'none',
            post_count  : 0,
            mouseover: false,
            urlValues   : []
        }
    });
    
    return CategoryItemModel;
});