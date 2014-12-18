// Filename: models / widgets / scrollbar
define([
    'underscore',
    'backbone'
], function( _ , Backbone ){
 

    // Scrollbar Model
    var ScrollbarModel = Backbone.Model.extend({
        defaults : {
            id : 'none',
            scrollbarHeight : 0,
            inertia : 0,
            animating: false
        }
    });
    
    return ScrollbarModel;
});