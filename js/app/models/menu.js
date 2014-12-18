// Filename: models/menu
define([
    'underscore',
    'backbone'
], function( _ , Backbone ){
  
    // Menu Model
    var MenuModel = Backbone.Model.extend({ 
        defaults : {
            selected: false,
            slug    : '',
            pageId  : 0,
            idAttr  : '',
            delay : 0,
            sayhi: 'closed'
        }
    });
    
    return MenuModel;
});