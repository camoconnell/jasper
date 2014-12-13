define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/modules/share.html',
    'utils/utils'
], function(
    $,
    _,
    Backbone,
    Template,
    Utils
) {

    "use strict";

    return Backbone.View.extend({

        tagName: 'div',

        className: 'social-media-icons-js',

        my_template: _.template(Template),

        events: {
            'click .facebook-btn-js': 'onFacebookClick',
            'click .twitter-btn-js': 'onTwitterClick',
            'click .gplus-btn-js': 'onGplusClick'
        },

        initialize: function(options) {
            this.shareUrl = options.shareUrl;
            this.twitterMsg = options.twitterMsg;
            this.render();
        },

        render: function() {
            var templateData = {
                'share_url': encodeURIComponent(this.shareUrl),
                'twitter_msg': this.twitterMsg
            };
            this.$el.html(this.my_template(templateData));
        },

        onTwitterClick: function(e) {
            e.preventDefault();
            Utils.openPopup($(e.currentTarget).attr('href'), 800, 300);
        },

        onFacebookClick: function(e) {
            e.preventDefault();
            Utils.openPopup($(e.currentTarget).attr('href'), 800, 300);
        },

        onGplusClick: function(e) {
            e.preventDefault();
            Utils.openPopup($(e.currentTarget).attr('href'), 800, 600);
        }
    });
});