define([
    'jquery',
    'global',
    'underscore',
    'backbone',
    'plugins',
    'models/page',
    'models/pages/journal/single',
    'utils/utils',
    'views/modules/contentSlider',
    'views/pages/page',
    'collections/posts',
    'text!templates/pages/journal/single.html',
    'views/modules/follow_me',
    'views/modules/share'
], function(
    $,
    global,
    _,
    Backbone,
    Plugins,
    PageModel,
    SingleModel,
    Utils,
    SliderView,
    PageView,
    PostsCollection,
    Template,
    FollowMe,
    Share
) {
    "use strict";

    return PageView.extend({

        model: new PageModel(),

        tagName: 'section',

        className: "page single",

        my_template: _.template(Template),

        events: {},

        selectedModel: null,

        initialize: function(options) {

            _.bindAll(this,
                'setScrollbar'
            );

            this.setAttributes(options);
            this.$el.attr('id', 'single');
        },

        setModel: function(model) {
            this.selectedModel = model;
            this.parseUrl();
            this.render();
        },

        parseUrl: function() {
            var postUrl = this.selectedModel.get('url').split('/');
            postUrl.pop();

            var slug = postUrl[postUrl.length - 1],
                month = postUrl[postUrl.length - 2],
                year = postUrl[postUrl.length - 3],
                urlValues = [year, month, slug];

            slug = slug.replace('-', ' ');
            this.model.set('urlValues', urlValues);
            this.model.set('slug', slug);
            this.model.set('type', 'single');
            this.model.set('attachments', this.selectedModel.get('attachments'));
        },

        render: function() {
            if (this.selectedModel) {
                this.$el.html(this.my_template(this.selectedModel.toJSON()));
                this.setup();
            } else {
                this.selectedModel = new SingleModel();
                this.selectedModel.on(this.selectedModel.MODEL_READY, this.onModelReady, this);
                this.selectedModel.fetch();
            }

            this.followMe = new FollowMe();
            this.$el.append(this.followMe.el);
        },

        onModelReady: function() {
            this.selectedModel.off(this.selectedModel.MODEL_READY);
            this.setup();
        },

        setup: function() {
            if (!global.smart.phone) {
                setTimeout(this.setScrollbar, 1000);
                this.addScrollbar({
                    el: this.$el.find('.scrollpane')
                });
                this.setSlideShow();
            }
            this.addShareBtns();
        },

        addShareBtns: function() {
            this.share = new Share({
                'shareUrl': this.selectedModel.get('url'),
                'twitterMsg': 'Check out ' + this.selectedModel.get('title') + ' on NMF'
            });
            var $postTitle = this.$el.find('.post-title-wrap');
            this.share.$el.insertAfter($postTitle);
        },

        setSlideShow: function() {
            var slides = this.selectedModel.get('slides');
            var $slideShow = this.$el.find('.slideshow');
            this.sliderView = new SliderView({
                slides: slides
            });
            $slideShow.append(this.sliderView.el);
            this.addInstance({
                hook: 'postView',
                obj: this.sliderView
            });
        },

        setScrollbar: function() {
            this.closed = false;
            this.scrollbarView.update();
        },

        buildIcons: function() {
            $.each(this.model.get('categoryIcons'), function() {
                $('icon-' + this).lazylinepainter({
                    'svgData': global.misc.lazylinedata,
                    'strokeWidth': 1.5,
                    'strokeColor': '#000'
                }).lazylinepainter(global.misc.applyline);
            });
        },

        onresize: function() {
            // if( this.closed )
            //   this.$el.css('top',global.screen.height);
        }
    });
});