define([
    'jquery',
    'underscore',
    'backbone',
    'data/events',
    'views/modules/share',
    'text!templates/pages/journal/entry.html'
], function(
    $,
    _,
    Backbone,
    Events,
    Share,
    Template
) {

    "use strict";

    return Backbone.View.extend({

        tagName: 'div',

        className: 'post-wrap',

        my_template: _.template(Template),

        events: {
            'click .continue-read': 'onSelect'
        },

        initialize: function(options) {
            this.render();
        },

        render: function() {
            this.$el.html(this.my_template(this.model.toJSON()));
            this.addShareBtns();
        },

        onSelect: function(event) {
            event.preventDefault();
            this.model.set('current', true);
            Backbone.trigger(Events.Posts.Selected, this.model);
        },

        addShareBtns: function() {
            this.share = new Share({
                'shareUrl': this.model.get('url'),
                'twitterMsg': 'Check out ' + this.model.get('title') + ' on Nick Morrison Fitness'
            });
            var $postImg = this.$el.find('.post-img');
            this.share.$el.insertAfter($postImg);
        }
    });
});