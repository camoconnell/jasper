define([
    'jquery',
    'underscore',
    'backbone',
    'utils/event_bus',
    'views/modules/share',
    'text!templates/pages/journal/entry.html'
],function(
    $,
    _,
    Backbone,
    Bus,
    Share,
    Template
){
    "use strict";
     
    var Entry = Backbone.View.extend({
        
        tagName: 'div',
        
        className: 'post-wrap',
        
        my_template: _.template(Template),

        events: {
            'click .continue-read':'onSelect'
        },

        initialize:function(options){
            this.render();
        },

        render:function(){
            this.$el.html(this.my_template(this.model.toJSON()));
            this.addShareBtns();
        },

        onSelect:function(event){
            event.preventDefault();
            this.model.set('current', true);
            Bus.trigger('entry:selected');
        },

        addShareBtns:function(){
            this.share = new Share({
                'shareUrl':this.model.get('url'),
                'twitterMsg':'Check out '+this.model.get('title')+' on Nick Morrison Fitness'
            });
            var $postImg = this.$el.find('.post-img');
            this.share.$el.insertAfter($postImg);
        }
    });
    
    return Entry;
});