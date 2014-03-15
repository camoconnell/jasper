define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/modules/follow_me.html'
],function(
    $,
    _,
    Backbone,
    Template
){
    "use strict";
     
    var FollowMe = Backbone.View.extend({
        
        tagName: 'div',
        
        className: 'follow-me-js',
        
        my_template: _.template(Template),

        events: {},

        initialize: function(options){
            this.render();
        },

        render: function(){
            this.$el.html(this.my_template());
        }
    });
    
    return FollowMe;
});