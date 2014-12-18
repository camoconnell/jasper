define([
    'jquery',
    'global',
    'underscore',
    'backbone',
    'models/svg',
    'plugins',
    'utils/utils',
    'views/modules/category/listItem',
    'models/modules/category/controller',
    'controllers/journal_controller'
], function(
    $,
    global,
    _,
    Backbone,
    svg,
    Plugins,
    Utils,
    CategoryWidgetItem,
    CategoryWidgetModel,
    JournalController
) {

    'use strict';

    return Backbone.View.extend({

        model: new CategoryWidgetModel(),

        initialize: function(options) {

            _.bindAll(this,
                'disable',
                'enable'
            );

            this.eventHandler = options.eventHandler;
            this._views = {}; // child views
            this.$mover = this.$('.mover');
        },

        render: function() {

            this.collection.each(function(categoryModel) {

                var categoryWidgetItem = new CategoryWidgetItem({
                    model: categoryModel,
                    eventHandler: this.eventHandler
                });

                this._views[categoryModel.get('slug')] = categoryWidgetItem;

                if (JournalController.getCurrentCategory() === categoryModel.get('slug')) {
                    categoryWidgetItem.setCurrent();
                    this.select(categoryModel);
                }
            }, this);

            this.enable();
        },

        update: function(e) {
            // change:current fires twice,
            // Don't call setCategory if category hasn't changed
            if (JournalController.getCurrentCategory() !== e.get('slug')) {
                this.select(e);
                this.$mover.removeClass('display');
            }
        },

        select: function(categoryModel) {
            this.$el.find('.description .info h2').html(categoryModel.get('title'));
            this.$el.find('.description .info p').html(categoryModel.get('description'));

            this.model.set('category', categoryModel.get('slug'));
            this.model.set('post_count', categoryModel.get('post_count'));

            /*if (!global.firstPageLoad) {
                this.saveUrl();
            } else {
                global.firstPageLoad = false;
            }*/
        },

        /*saveUrl: function() {
            var category = JournalController.getCurrentCategory();
            Backbone.history.navigate('journal/' + category);
            document.title = 'NMF / ' + category.capitalize();
        },*/

        enable: function() {
            this.listenTo(this.collection, 'change:current', this.update);
            this.listenTo(this.collection, 'change:mouseover', this.updateMouseover);
        },

        disable: function() {
            this.stopListening();
        },

        updateMouseover: function(e) {
            if (e.get('mouseover')) {
                this.$el.find('.update h1').html(e.get('title'));
                this.$el.find('.update .date').html(e.get('post_count'));

                this.$mover.removeClass('delay');
                this.$mover.addClass('display');
            } else {
                this.$mover.addClass('delay');
                this.$mover.removeClass('display');
            }
        }
    });
});