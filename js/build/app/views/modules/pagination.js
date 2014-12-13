define([
    'jquery',
    'global',
    'underscore',
    'backbone',
    'models/modules/pagination',
    'plugins'
], function(
    $,
    global,
    _,
    Backbone,
    PaginationModel,
    Plugins
) {

    "use strict";

    return Backbone.View.extend({

        model: new PaginationModel(),

        initialize: function() {
            // _.bindAll(this);
        },

        render: function(postCount) {

            var maxNumOfPosts = global.bootstrap.numOfPosts;
            var numOfPages = postCount / maxNumOfPosts;

            numOfPages = (numOfPages < 1) ? 1 : Math.ceil(numOfPages);

            // page count relative to category selected
            this.setter('numOfPages', numOfPages);

            // reset page index to the first page
            this.setter('pageIndex', 1);

            this.update();
        },


        update: function() {

            var pageIndex = this.getter('pageIndex'),
                numOfPages = this.getter('numOfPages');

            if (numOfPages > 1 && pageIndex !== numOfPages)
                this.$el.css('opacity', 1);
            else
                this.$el.css('opacity', 0);
        },


        load: function() {

            var pageIndex = this.getter('pageIndex'),
                numOfPages = this.getter('numOfPages');

            if (pageIndex < numOfPages) {
                pageIndex++;
                this.setter('pageIndex', pageIndex);
            }
        },


        getter: function(value) {
            return this.model.get(value);
        },

        setter: function(target, value) {
            this.model.set(target, value);
        }

    });
});