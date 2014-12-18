define([
    'jquery',
    'global',
    'underscore',
    'backbone',
    'views/pages/journal/entry',
    'isotope',
    'bridget',
    'controllers/journal_controller'
    /*'imagesloaded'*/
], function(
    $,
    global,
    _,
    Backbone,
    EntryView,
    Isotope,
    bridget,
    JournalController
    /* Imagesloaded*/
) {

    "use strict";

    return Backbone.View.extend({

        initialize: function(options) {

            _.bindAll(this,
                'updateLayout',
                'enable',
                'disable',
                'onresize'
            );

            $.bridget('isotope', Isotope);
            /*$.bridget('imagesLoaded', Imagesloaded);*/

            this.scrollbarView = options.scrollbarView;

            this.render();
        },

        render: function() {

            this.$el.isotope({
                itemSelector: '.post-wrap',
                transitionDuration: 0
            });

            this.enable();
        },


        update: function() {

            var that = this;

            $(window).trigger('resize');
            setTimeout(function() {
                if (!global.smart.phone) {
                    that.scrollbarView.update();
                }
                $(window).trigger('resize');

            }, 600); // the timeout duration must happen after the transition set in scss/modules/_base.scss
        },

        onresize: function() {},

        insertPosts: function() {

            var postsCollection = JournalController.postsCollection;
            postsCollection.each(function(postModel, index) {
                var entry = new EntryView({
                    model: postModel
                });
                this.$el.isotope('insert', entry.el);
                TweenMax.fromTo(entry.el, 1.2, {
                    y: '100%',
                    opacity: 0
                }, {
                    y: '0%',
                    opacity: 1,
                    force3D: true,
                    ease: Expo.easeOut,
                    delay: 0.15 + (index * 0.1)
                });
            }, this);

            var self = this;
            _.delay(function() {
                self.$el.isotope('layout');
            }, 1000);

            if (!global.smart.phone) {
                this.scrollbarView.update();
            }
        },

        removePosts: function() {
            this.$el.isotope('remove', this.$el.children());
        },

        updateLayout: function() {

            var $old = $('.layout .display');
            $old.removeClass('display');

            var $new = ($old.hasClass('large')) ? $('.layout .small') : $('.layout .large');
            $new.addClass('display');

            this.update();
        },


        enable: function() {

            // add resize to resize stack & call resize
            global.handlers.resize.add({
                'id': 'postLayout',
                'callback': this.onresize
            });
            $(window).trigger('resize');
        },


        disable: function() {

            // remove from resize stack
            global.handlers.resize.remove('postLayout');
        }
    });
});