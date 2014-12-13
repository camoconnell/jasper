define([
    'jquery',
    'global',
    'underscore',
    'backbone',
    'models/svg',
    'plugins',
    'utils/utils',
    'collections/categories',
    'views/modules/category/listItem',
    'models/modules/category/controller'
], function(
    $,
    global,
    _,
    Backbone,
    svg,
    Plugins,
    Utils,
    CategoryWidgetCollection,
    CategoryWidgetItem,
    CategoryWidgetModel
) {

    "use strict";

    return Backbone.View.extend({

        model: new CategoryWidgetModel(),

        ON_LOAD_COMPLETE: 'load:complete',

        initialize: function(options) {

            _.bindAll(this,
                'onCollectionLoaded'
            );

            this.model.set('category', options.category);
            this._views = {}; // child views
            this.$mover = this.$el.find('.mover');
            this.collection = new CategoryWidgetCollection();
            this.collection.fetch({
                success: this.onCollectionLoaded,
                dataType: "jsonp"
            });
        },

        onCollectionLoaded: function() {
            this.build();
            this.enable();
            this.trigger(this.ON_LOAD_COMPLETE);
        },

        build: function() {
            this.collection.each(function(categoryModel) {
                var categoryWidgetItem = new CategoryWidgetItem({
                    model: categoryModel
                });
                this._views[categoryModel.get('slug')] = categoryWidgetItem;
                if (this.getter('category') === categoryModel.get('slug')) {
                    categoryWidgetItem.setCurrent();
                    this.select(categoryModel);
                }
            }, this);
        },

        update: function(e) {
            // change:current fires twice,
            // Don't call setCategory if category hasn't changed
            if (e.get('slug') !== this.getter('category')) {
                this.select(e);
                this.$mover.removeClass('display');
            }
        },

        select: function(categoryModel) {
            this.$el.find('.description .info h2').html(categoryModel.get('title'));
            this.$el.find('.description .info p').html(categoryModel.get('description'));

            this.setter('category', categoryModel.get('slug'));
            this.setter('post_count', categoryModel.get('post_count'));

            if (!global.firstPageLoad) {
                this.saveUrl();
            } else {
                global.firstPageLoad = false;
            }
        },

        saveUrl: function() {
            var category = this.getter('category');
            Backbone.history.navigate('journal/' + category);
            document.title = 'NMF / ' + category.capitalize();
        },

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
        },

        setter: function(target, value) {
            this.model.set(target, value);
        },

        getter: function(target) {
            return this.model.get(target);
        },

        getCategory: function() {
            return this.model.get('category');
        }
    });
});