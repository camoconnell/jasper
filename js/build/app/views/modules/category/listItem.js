define([
    'jquery',
    'global',
    'underscore',
    'backbone',
    'models/svg',
    'plugins',
    'models/modules/category/listItem',
    'utils/utils'
], function(
    $,
    global,
    _,
    Backbone,
    svg,
    Plugins,
    CategorylistItemModel,
    Utils
) {

    "use strict";

    return Backbone.View.extend({

        model: new CategorylistItemModel(),

        tagName: 'div',

        attributes: {
            class: "listItem"
        },

        events: {
            'click .hitArea': 'onSelect',
            'mouseover .hitArea': 'onMouseover',
            'mouseout  .hitArea': 'onMouseout'
        },

        initialize: function() {
            _.bindAll(this,
                'update'
            );
            this.$el.append('<div class="hitArea"></div>');
            this.$el.attr('id', 'icon-' + this.model.get('slug'));
            // Render on content change
            this.listenTo(this.model, 'change:current', this.update);
            this.render();
        },

        update: function(e) {
            if (e.get('selected')) {
                this.onMouseover();
            } else {
                this.onMouseout();
            }
        },

        render: function() {
            $('.categoryWidget .categories').append(this.$el);
            this.buildIcon();
        },

        buildIcon: function() {
            this.$el.lazylinepainter({
                'svgData': global.misc.lazylinedata,
                'strokeWidth': 1.5,
                'strokeColor': '#fefbf2'
            }).lazylinepainter('paint');
        },

        onSelect: function() {
            this.setCurrent();
        },

        setCurrent: function() {
            var that = this;
            this.setter('current', true);

            setTimeout(function() {
                that.$el.addClass('selected');
            }, 2000);
        },

        onMouseover: function() {
            if (!this.getter('current')) {
                this.setter('mouseover', true);
                this.$el.addClass('selected');
            }
        },

        onMouseout: function() {
            if (!this.getter('current')) {
                this.setter('mouseover', false);
                this.$el.removeClass('selected');
            }
        },

        setter: function(target, value) {
            this.model.set(target, value);
        },

        getter: function(target) {
            return this.model.get(target);
        }
    });
});