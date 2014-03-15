define([
    'jquery',
    'underscore',
    'backbone',
    'models/pages/about/position',
    'text!templates/pages/about/position.html'
],function(
    $,
    _,
    Backbone,
    Model,
    Template
){
    "use strict";
     
    var Positions = Backbone.View.extend({
        
        tagName: 'div',
        className: 'position skew',

        model: new Model(),

        my_template: _.template(Template),

        initialize: function(options){
            this.model.setData(options.data);
            this.render();
        },

        render: function(){
            this.$el.html( this.my_template(this.model.toJSON()));
        }
    });
    
    return Positions;
});