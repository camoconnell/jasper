define([
    'jquery',
    'global',
    'underscore',
    'backbone',
    'models/svg',
    'plugins',
    'views/pages/page',
    'views/modules/follow_me'
], function(
    $,
    global,
    _,
    Backbone,
    svg,
    Plugins,
    PageView,
    FollowMe
) {

    'use strict';

    return PageView.extend({

        initialize: function(options) {
            this.setAttributes(options);
            // _.bindAll(this);
        },

        render: function() {
            this.motifs();
            this.addScrollbar({
                el: this.$el.find('.scrollpane')
            });
            this.followMe = new FollowMe();
            this.$el.append(this.followMe.el);
            return this;
        },

        onscroll: function(scrollTop, scrollDirection) {},

        onresize: function() {},

        motifs: function() {
            $('#one').lazylinepainter({
                "svgData": global.misc.lazylinedata,
                "strokeWidth": 2,
                "strokeColor": "#fefbf2"
            }).lazylinepainter('paint');

            $('#two').lazylinepainter({
                "svgData": global.misc.lazylinedata,
                "strokeWidth": 2,
                "strokeColor": "#fefbf2"
            }).lazylinepainter('paint');
        }
    });
});