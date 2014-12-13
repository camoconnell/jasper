define([
    'jquery',
    'global',
    'underscore',
    'backbone',
    'utils/utils',
    'views/base',
    'views/modules/scrollbar'
], function(
    $,
    global,
    _,
    Backbone,
    utils,
    BaseView,
    ScrollbarView
) {

    "use strict";

    return BaseView.extend({

        events: {},
        tagName: 'section',
        attributes: {
            class: "page"
        },

        initialize: function(options) {
            _.bindAll(this,
                'current'
            );
        },

        setAttributes: function(options) {
            if (options.currentPage) {
                this.$el = $('.current-page');
                this.setter('loaded', true);
            } else {
                this.$el.attr('id', this.getter('slug'));
            }
        },

        update: function(urlValues) {
            this.setClass();
            this.setter('urlValues', urlValues);
            this.setUrl();
            var loaded = this.getter('loaded');
            var rendered = this.getter('rendered');

            if (loaded) {
                if (rendered) {
                    this._refresh();
                } else {
                    this._render();
                }
            } else {
                this.load();
            }

            return this;
        },

        _render: function() {
            var that = this;
            this.setter('rendered', true);
            this.setter('urlValues', this.getter('urlValues'));
            this.listenTo(this.model, 'change:current', this.current);

            // give the transition time do its thing
            setTimeout(function() {
                that.render();
                that._refresh();
            }, (global.firstPageLoad) ? 0 : 2000);
        },

        _refresh: function() {
            if (this.refresh) {
                this.refresh();
            }
            $('.current-page .content-wrap').delay(1000).fadeIn(500);
            this.setClass();
            // used to trigger transition from PagesView
            this.setter('current', true);
            this.saveUrl();
            this.setTitle();
            this.setFavicon();
        },

        setClass: function() {
            $('body').removeClass();
            $('body').addClass(this.getter('type').toLowerCase());
        },

        setUrl: function() {
            var urlValues = this.getter('urlValues');
            this.setter('url', global.url + '/' + urlValues.join('/'));
        },

        saveUrl: function() {
            var urlValues = this.getter('urlValues');
            if (!global.firstPageLoad) {
                Backbone.history.navigate((urlValues[0] === 'home') ? '' : urlValues.join('/'));
            } else {
                global.firstPageLoad = false;
            }
        },

        load: function() {
            this.beforeLoad();
            global.handlers.ajax.get({
                url: this.getter('url'),
                callbacks: {
                    done: _.bind(this._onPageDone, this),
                    fail: _.bind(this._onPageFail, this)
                }
            });
        },

        _onPageDone: function(data) {
            var response = $(data);
            response = response.find('.page > .inner');

            this.setter('loaded', true);
            this.$el.html(response);

            if (this.onPageDone) {
                this.onPageDone();
            }

            this.afterLoad();
        },

        _onPageFail: function() {
            if (this.onPageFail) {
                this.onPageFail();
            }
        },

        beforeLoad: function() {
            // fade out content
            $('.current-page .content-wrap').fadeOut(500);
        },

        afterLoad: function() {

            // build background
            var attachments = this.getter('attachments');
            var backgroundUrl = (global.smart.phone) ? attachments.large : attachments.full;
            var that = this;

            // WP serves attachments with dimensions, [0] refers to url
            backgroundUrl = backgroundUrl[0];
            this.$el.append('<div class="background" />');
            var bgImg = new Image();
            bgImg.src = backgroundUrl;

            bgImg.onload = function() {
                that.$el.find('.background').attr('style', 'background-image:url(' + bgImg.src + ')');
                that._render();
            };
        },

        // Enable / Disable pages
        current: function(model, val, opts) {

            var self = this;

            // call _enable and _disable from baseView
            if (val) {
                this._enable();
            } else {

                // disable approx after transition
                setTimeout(function() {
                    self._disable();
                }, 1000);
            }
        },

        setFavicon: function() {
            $('head link[type="image/x-icon"]').remove();
            var link = document.createElement('link');
            link.type = 'image/x-icon';
            link.rel = 'shortcut icon';
            link.href = this.getter('faviUrl');
            document.getElementsByTagName('head')[0].appendChild(link);
        },

        setTitle: function() {
            // TO DO - give each section a title, to differentiate from slug
            var title = this.getter('slug');
            if (title === 'single') {
                title = this.getter('title');
            }
            var pageTitle = title.replace(/\-/g, ' ');
            pageTitle = 'NMF / ' + pageTitle.capitalize();
            document.title = pageTitle;
        },

        addScrollbar: function(options) {
            if (!global.smart.phone) {
                this.scrollbarView = new ScrollbarView(options);
                this.scrollbarView.render();
                // Add scrollbarView obj to instance stack in model.
                // BaseView enable / disable will fire scrollbarViews enable / disable callbacks on page change
                this.addInstance({
                    hook: this.scrollbarView.id,
                    obj: this.scrollbarView
                });
            }
        },

        destroy: function() {
            this.undelegateEvents();
            this.$el.removeData().unbind();
            this.remove();
            Backbone.View.prototype.remove.call(this);
        }
    });
});