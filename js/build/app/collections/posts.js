define([
    'underscore',
    'global',
    'backbone',
    'models/post'
], function(
    _,
    global,
    Backbone,
    PostModel
) {
    "use strict";

    var PostCollection = Backbone.Collection.extend({

        model: PostModel,
        url_querystring: null,

        initialize: function() {
            //this.on("change:current",this.changeSelected);
        },

        setQueryString: function(category) {
            var intRegex = /^\d+$/;
            if (intRegex.test(category)) {
                this.url_querystring = '?id=' + category;
            } else {
                this.url_querystring = '?slug=' + category;
            }
        },

        url: function() {
            return '/api/core/get_category_posts/' + this.url_querystring;
        },

        parse: function(results) {
            return _.map(results.posts, this.applyFilter, this);
        },

        applyFilter: function(results) {
            var slides = this.getSlides(results.acf);
            return {
                id: results.id,
                slug: results.slug,
                url: results.url,
                title: results.title,
                slides: slides,
                content: results.acf.copy,
                excerpt: this.getExcerpt(results.acf.copy),
                acf: results.acf,
                attachments: results.attachments,
                date: this.getDate(results.date),
                categories: results.categories
            };
        },

        getSlides: function(results) {
            var embed = results.video;
            var slides = _.map(results.gallery, this.getSlide, this);
            if (embed !== "") {
                var obj = {
                    'type': 'video',
                    'embed': embed
                };
                slides.unshift(obj);
            }
            return slides;
        },

        getSlide: function(item) {
            var slide = {};
            if (global.smart.tablet) {
                slide.url = item.gallery_image.sizes.large;
                slide.height = item.gallery_image.sizes['large-height'];
                slide.width = item.gallery_image.sizes['large-width'];
            } else if (global.smart.phone) {
                slide.url = item.gallery_image.sizes.medium;
                slide.height = item.gallery_image.sizes['medium-height'];
                slide.width = item.gallery_image.sizes['medium-width'];
            } else {
                slide.url = item.gallery_image.url;
                slide.height = item.gallery_image.height;
                slide.width = item.gallery_image.width;
            }
            slide.type = 'image';
            slide.caption = item.caption;
            slide.description = item.description;
            return slide;
        },

        getExcerpt: function(content) {
            var excerptLength = 240;
            if (content.length > excerptLength) {
                content = content.substring(0, excerptLength) + "...";
            }
            return content;
        },

        getDate: function(results) {
            var date = results.split(' ');
            date = date[0];
            date = date.split('-');
            date = [parseInt(date[2], 10), parseInt(date[1], 10), date[0]];
            date = date.join('.');
            return date;
        },

        changeSelected: function(model, val) {
            if (val) {
                this.each(function(e) {
                    if (e !== model && e.get("current")) {
                        e.set("current", false);
                    }
                });
            }
        }
    });

    return PostCollection;
});