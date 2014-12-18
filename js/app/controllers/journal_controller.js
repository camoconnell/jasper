define([
    'jquery',
    'underscore',
    'global',
    'data/events',
    'collections/posts',
    'collections/categories'
], function(
    $,
    _,
    global,
    Events,
    PostsCollection,
    CategoriesCollection
) {

    'use strict';

    var controller = {

        postsCollection: null,
        categoriesCollection: null,

        currentCategory: null,

        // Pagination vars
        postsPerPage: Number(global.bootstrap.numOfPosts),
        postCount: -1,
        numOfPages: -1,
        pageIndex: 1,

        initialize: function(options) {

            _.bindAll(this,
                'onPostsSuccess',
                'onPostsError',
                'onCategoriesSuccess',
                'onCategoriesError'
            );

            this.eventHandler = options.eventHandler;

            var self = this;

            this.onJournalReady = _.after(2, this.onJournalReady);

            // init & fetch categories
            this.postsCollection = new PostsCollection();
            this.postsCollection.fetch({
                success: function() {
                    self.onPostsSuccess();
                    self.onJournalReady();
                },
                error: this.onPostsError,
                data: {
                    slug: this.currentCategory,
                    page: this.pageIndex
                }
            });

            // init & fetch posts
            this.categoriesCollection = new CategoriesCollection();
            this.categoriesCollection.fetch({
                success: function() {
                    self.onCategoriesSuccess();
                    self.onJournalReady();
                },
                error: this.onCategoriesError
            });
        },

        onJournalReady: function() {
            this.eventHandler.trigger(Events.Journal.Ready);
        },

        /**
         * lazyload
         * Fetch posts if the current pageIndex is less than the total number of pages.
         */
        lazyload: function() {
            if (this.pageIndex < this.getNumOfPages()) {
                this.pageIndex++;
                this.fetchPosts();
            }
        },

        fetchPosts: function() {
            this.postsCollection.fetch({
                success: this.onPostsSuccess,
                error: this.onPostsError,
                data: {
                    slug: this.currentCategory,
                    page: this.pageIndex
                }
            });
        },

        onPostsSuccess: function() {
            console.log("onPostsSuccess");
            this.eventHandler.trigger(Events.Posts.Fetched);
            this.navigateTo();
        },

        navigateTo: function() {
            Backbone.history.navigate('journal/' + this.currentCategory);
            document.title = 'NMF / ' + this.currentCategory.capitalize();
        },

        onPostsError: function() {
            console.log("onPostsError");
        },

        onCategoriesSuccess: function() {
            console.log("onCategoriesSuccess");
        },

        onCategoriesError: function() {
            console.log("onCategoriesError");
        },

        setCurrentCategory: function(category) {
            this.currentCategory = category;
        },

        getCurrentCategory: function() {
            return this.currentCategory;
        },

        getNumOfPages: function() {
            return this.postsCollection.numOfPages;
        },

        isPaginated: function() {
            return (this.numOfPages > 1 && this.pageIndex !== this.numOfPages);
        },

        resetPageIndex: function() {
            this.pageIndex = 1;
        }
    };

    _.extend(controller, Backbone.Events);
    return controller;
});