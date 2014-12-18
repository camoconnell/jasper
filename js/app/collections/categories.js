define([
    'underscore',
    'global',
    'backbone',
    'models/modules/category/listItem'
], function(
    _,
    global,
    Backbone,
    CategorylistItemModel
) {

    'use strict';

    return Backbone.Collection.extend({

        model: CategorylistItemModel,

        initialize: function(models, options) {
            this.on("change:current", this.changeSelected);
        },

        url: function() {
            return global.url + '/?json=get_category_index';
        },

        parse: function(data) {
            return this.filterCategories(data.categories);
        },

        filterCategories: function(categories) {
            return _.map(categories, function(category) {
                return {
                    catId: category.id,
                    slug: category.slug,
                    title: category.title,
                    description: category.description,
                    post_count: category.post_count,
                    current: false
                };
            });
        },

        changeSelected: function(model, val) {
            var that = this;
            if (val) {
                this.each(function(e) {
                    if (e !== model && e.get("current")) {
                        e.set("current", false);
                    }
                });
            }
        }
    });
});