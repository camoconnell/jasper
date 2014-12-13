define([
    'jquery',
    'global',
    'underscore',
    'plugins',
    'views/pages/page',
    'views/pages/journal/entry',
    'collections/posts',
    'views/modules/pagination',
    'views/modules/category/controller',
    'views/modules/postsLayout'
], function(
    $,
    global,
    _,
    Plugins,
    PageView,
    EntryView,
    PostsCollection,
    PaginationView,
    CategoryWidgetView,
    PostsLayoutView
) {

    "use strict";

    return PageView.extend({

        attributes: {
            class: "journal-category"
        },

        ENTRY_SELECTED: 'select:entry',

        categoryWidgetView: null,
        paginationView: null,
        postsLayoutView: null,

        $postsWrap: null,
        $categoryWidget: null,

        initialize: function(options) {

            _.bindAll(this,
                'onPostSelected',
                'onPaginateChange',
                'onPostsDone',
                'onPostsFail',
                'onCategoryWidgetLoaded'
            );

            this.setAttributes(options);
        },

        render: function() {
            // category will be the second index with the url value,
            // if no 2nd index exists default to all
            this.$postsWrap = this.$el.find('#posts-wrap');
            this.$categoryWidget = this.$el.find('.categoryWidget');

            var urlValues = this.getter('urlValues');
            var category = (urlValues[1] === undefined) ? 'all' : urlValues[1];
            this.setter('category', category);

            this.collection = new PostsCollection();
            this.listenTo(this.collection, 'change:current', this.onPostSelected);

            this.setCategoryWidget();
            this.setPagination();
            this.setScrollbar();
            this.setLayout();
            this.loadPosts();
        },

        onPostSelected: function(model) {
            this.model.setSelected(model);
            this.trigger(this.ENTRY_SELECTED);
        },

        getSelected: function() {
            return this.model.getSelected();
        },

        setCategoryWidget: function() {
            this.categoryWidgetView = new CategoryWidgetView({
                el: this.$categoryWidget,
                category: this.getter('category')
            });
            this.categoryWidgetView.on(this.categoryWidgetView.ON_LOAD_COMPLETE, this.onCategoryWidgetLoaded);
        },

        setPagination: function() {
            this.paginationView = new PaginationView({
                el: $('.pagination')
            });
            this.listenTo(this.paginationView.model, 'change:pageIndex', this.onPaginateChange);
        },

        setScrollbar: function() {
            this.addScrollbar({
                el: this.$el.find('.scrollpane'),
                toTop: this.$el.find('.arrow-up'),
                callbacks: {
                    onTotalScroll: _.throttle(this.paginationView.load, 4000)
                }
            });

            console.log(this.scrollbarView);
        },

        onPaginateChange: function() {
            this.setter('updateType', 'paginate');
            this.loadPosts();
        },

        onCategoryWidgetLoaded: function() {
            this.categoryWidgetView.off(this.categoryWidgetView.ON_LOAD_COMPLETE);
            // listen to category change after render ( fetched )
            this.listenTo(this.categoryWidgetView.model, 'change:category', this.onCategoryChange);
            this.addInstance({
                hook: 'categoryWidget',
                obj: this.categoryWidgetView
            });
        },

        onCategoryChange: function() {
            var newCategory = this.categoryWidgetView.getCategory();
            var currentCategory = this.getter('category');
            // Don't call loadPosts if category hasn't changed
            if (newCategory === currentCategory) {
                return;
            }
            // post count changes with each category selection
            this.setter('updateType', 'categoryChange');
            this.setter('category', newCategory);
            this.loadPosts();
        },

        loadPosts: function() {
            var category = this.getter('category');
            this.collection.setQueryString(category);
            this.collection.fetch({
                'success': this.onPostsDone,
                'error': this.onPostsFail,
                'dataType': "jsonp"
            });
        },

        onPostsDone: function() {
            var that = this;
            // if category change, remove old posts
            if (this.getter('updateType') === 'categoryChange') {
                this.postsLayoutView.destroy({
                    onComplete: function() {
                        that.insertPosts();
                        that.paginationView.render(that.returnPostCount());
                    }
                });
            } else {
                this.insertPosts();
                this.paginationView.update();
            }
        },

        onPostsFail: function() {},

        insertPosts: function() {
            var postCount = this.returnPostCount();
            this.collection.each(function(postModel) {
                var entry = new EntryView({
                    model: postModel
                });
                this.postsLayoutView.insert({
                    entry: entry.$el,
                    count: postCount
                });
            }, this);
        },

        returnPostCount: function() {
            this.setter('categoryPostCount', this.categoryWidgetView.getter('post_count'));
            return this.getter('categoryPostCount');
        },

        setLayout: function() {

            this.postsLayoutView = new PostsLayoutView({
                el: this.$postsWrap,
                reLayoutBtn: $('.layout'),
                scrollbarView: (global.smart.phone) ? null : this.scrollbarView,
                postCount: this.returnPostCount()
            });

            this.addInstance({
                hook: 'postsLayoutView',
                obj: this.postsLayoutView
            });
        }
    });
});