define([
    'jquery',
    'underscore',
    'backbone',
    'models/pages/about',
    'plugins',
    'views/pages/page',
    'views/pages/about/position',
    'views/pages/about/skill',
    'views/modules/follow_me'
], function(
    $,
    _,
    Backbone,
    AboutModel,
    Plugins,
    PageView,
    PositionView,
    SkillView,
    FollowMe
) {

    "use strict";

    return PageView.extend({

        model: new AboutModel(),

        events: {
            'click .content-selector p': 'onContentSelect'
        },

        initialize: function(options) {
            _.bindAll(this,
                'onContentSelect'
            );

            this.setAttributes(options);
        },

        render: function() {
            this.addScrollbar({
                el: this.$el.find('.scrollpane')
            });
            this.followMe = new FollowMe();
            this.$el.append(this.followMe.el);
            this.appendSkills();
            this.appendPositions();
        },

        appendSkills: function() {
            var acf = this.model.get('acf');
            var $skills = this.$el.find('.skills-js');
            _.each(acf.skills, function(obj) {
                var skill = new SkillView({
                    data: obj
                });
                $skills.append(skill.el);
            });
        },

        appendPositions: function() {
            var acf = this.model.get('acf');
            var $positions = this.$el.find('.positions-js');
            _.each(acf.positions, function(obj) {
                var position = new PositionView({
                    data: obj
                });
                $positions.append(position.el);
            });
        },

        onContentSelect: function(event) {
            var target = $(event.currentTarget).find('.large').text().toLowerCase();
            this.scrollbarView.scrollTo("#about-" + target);
            $('.content-selector .current').removeClass('current');
            $(event.currentTarget).addClass('current');
        }
    });
});