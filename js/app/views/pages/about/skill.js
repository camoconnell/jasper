define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/pages/about/skill.html'
], function(
    $,
    _,
    Backbone,
    Template
) {

    "use strict";

    return Backbone.View.extend({

        tagName: 'li',

        className: 'skill',

        my_template: _.template(Template),

        initialize: function(options) {
            this.render(options.data.skill);
        },

        render: function(skill) {
            this.$el.html(this.my_template({
                'skill': skill
            }));
        }
    });
});