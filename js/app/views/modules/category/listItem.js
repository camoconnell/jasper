define([
    'jquery',
    'global',
    'underscore',
    'backbone',
    'models/svg',
    'plugins',
    'models/modules/category/listItem',
    'utils/utils',
    'data/events',
    'controllers/journal_controller'
], function(
    $,
    global,
    _,
    Backbone,
    svg,
    Plugins,
    CategorylistItemModel,
    Utils,
    Events,
    JournalController
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

        initialize: function(options) {
            _.bindAll(this,
                'update'
            );

            this.eventHandler = options.eventHandler;
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
            this.model.set('current', true);

            setTimeout(function() {
                that.$el.addClass('selected');
            }, 2000);

            console.log(this.model.get('slug'));

            JournalController.setCurrentCategory(this.model.get('slug'));
            this.eventHandler.trigger(Events.Category.Change);
        },

        onMouseover: function() {
            if (!this.model.get('current')) {
                this.model.set('mouseover', true);
                this.$el.addClass('selected');
            }
        },

        onMouseout: function() {
            if (!this.model.get('current')) {
                this.model.set('mouseover', false);
                this.$el.removeClass('selected');
            }
        }
    });
});