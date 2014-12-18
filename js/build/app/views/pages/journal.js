define([
    'jquery',
    'global',
    'underscore',
    'data/events',
    'views/pages/page',
    'collections/posts',
    'views/modules/pagination',
    'views/modules/category/controller',
    'views/modules/postsLayout',
    'controllers/journal_controller'
], function(
    $,
    global,
    _,
    Events,
    PageView,
    PostsCollection,
    PaginationView,
    CategoryWidgetView,
    PostsLayoutView,
    JournalController
) {

    'use strict';

    return PageView.extend({

        attributes: {
            class: "journal-category"
        },

        ENTRY_SELECTED: 'select:entry',

        categoryWidgetView: null,
        paginationView: null,
        postsView: null,

        $postsWrap: null,
        $categoryWidget: null,

        initialize: function(options) {

            _.bindAll(this,
                'onPostsFetched',
                'onJournalReady',
                'onTotalScroll'
            );

            this.eventHandler = {};
            _.extend(this.eventHandler, Backbone.Events);

            this.setAttributes(options);
        },

        render: function() {

            this.$postsWrap = this.$('#posts-wrap');
            this.$categoryWidget = this.$('.categoryWidget');
            this.$scrollpane = this.$('.scrollpane');
            this.$arrowUp = this.$('.arrow-up');
            this.$pagination = this.$('.pagination');

            this.parseUrlForCategory();

            this.listenToOnce(this.eventHandler, Events.Journal.Ready, this.onJournalReady);
            JournalController.initialize({
                eventHandler: this.eventHandler
            });
        },

        /**
         * parseUrlForCategory
         * Category will be the second index within the url array,
         * if no 2nd index exists default to 'all'.
         */
        parseUrlForCategory: function() {
            var urlValues = this.model.get('urlValues');
            var category = (urlValues[1] === undefined) ? 'all' : urlValues[1];
            JournalController.setCurrentCategory(category);
        },

        onJournalReady: function() {
            this.createCategoryWidget();
            this.createPagination();
            this.createScrollbar();
            this.createPostsView();
        },

        createCategoryWidget: function() {

            this.categoryWidgetView = new CategoryWidgetView({
                el: this.$categoryWidget,
                collection: JournalController.categoriesCollection,
                eventHandler: this.eventHandler
            });

            this.categoryWidgetView.render();
            this.listenTo(this.eventHandler, Events.Category.Change, this.onCategoryChange);

            this.addInstance({
                hook: 'categoryWidget',
                obj: this.categoryWidgetView
            });
        },

        getSelected: function() {
            return this.model.getSelected();
        },

        createPagination: function() {
            this.paginationView = new PaginationView({
                el: this.$pagination
            });
            this.paginationView.render();
        },

        createScrollbar: function() {
            this.addScrollbar({
                el: this.$scrollpane,
                toTop: this.$arrowUp,
                callbacks: {
                    onTotalScroll: _.throttle(this.onTotalScroll, 4000)
                }
            });
        },

        onTotalScroll: function() {
            this.model.set('updateType', 'paginate');
            JournalController.lazyload();
        },

        onCategoryChange: function() {
            this.model.set('updateType', 'categoryChange');
            JournalController.resetPageIndex();
            JournalController.fetchPosts();
        },

        onPostsFetched: function() {

            // if category change, remove old posts
            if (this.model.get('updateType') === 'categoryChange') {
                this.postsView.removePosts();
            }

            this.postsView.insertPosts();
            // this.paginationView.render();
        },

        createPostsView: function() {

            this.postsView = new PostsLayoutView({
                el: this.$postsWrap,
                scrollbarView: (global.smart.phone) ? null : this.scrollbarView
            });

            this.addInstance({
                hook: 'postsLayoutView',
                obj: this.postsView
            });

            this.listenTo(this.eventHandler, Events.Posts.Fetched, this.onPostsFetched);
            this.postsView.insertPosts();
            this.paginationView.render();
        }
    });
});