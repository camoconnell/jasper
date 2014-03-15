define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/pages/goodwords/word.html'
],function(
    $,
    _,
    Backbone,
    Template
){
    "use strict";
     
    var Skills = Backbone.View.extend({
        
        tagName: 'div',
        
        className: 'word skew',

        my_template: _.template(Template),

        initialize: function(options){
            this.render(options.data);
        },

        render: function(data){
            this.$el.html( this.my_template({'data':data}));
        }
    });
    
    return Skills;
});