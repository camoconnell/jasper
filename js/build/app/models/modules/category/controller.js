// Filename: models / widgets / category / controller  

define([
    'underscore',
    'global',
    'backbone',
    'plugins'

], function( _ , global, Backbone ){

    // Pages Model
    var CategoryWidgetModel = Backbone.Model.extend({
        
        defaults : {
            category : '',
            post_count: 0,
            timer: null
        }
    });
    
    return CategoryWidgetModel;
});