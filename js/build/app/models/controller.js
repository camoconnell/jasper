// Filename: models/controller
define([
    'underscore',
    'backbone'
], function( _ , Backbone ){
  
    // Controller Model
    var ControllerModel = Backbone.Model.extend({
        defaults : {
            pageId  : -1,
            slug : 'none',
            onready : false,
            onload  : false
        }
    });
    
    return ControllerModel;
});