define([
    'jquery',
    'global',
    'underscore',
    'backbone',
    'text!templates/modules/content_slider.html',
    'fitVids'
], function(
    $,
    global,
    _,
    Backbone,
    Template,
    fitVids
) {

    "use strict";

    return Backbone.View.extend({

        tagName: 'div',

        className: 'content-slider',

        my_template: _.template(Template),

        events: {},

        slides: null,
        video: null,
        animating: false,
        current_slide: 1,
        num_of_slides: 0,
        dir: 'right',

        $mover: null,
        $left: null,
        $right: null,

        initialize: function(options) {

            _.bindAll(this,
                'onclick',
                'enable',
                'disable',
                'onresize',
                'onmouseenter',
                'onmouseover',
                'onmouseout'
            );

            this.slides = options.slides;
            this.setup();
            this.render();
        },

        setup: function() {
            // set unique id, so we can find this resize instance and remove from resize stack
            var timestamp = new Date().getUTCMilliseconds();
            timestamp = 'slideshow-' + String(timestamp);
            this.id = timestamp;

            if (global.smart.device) {
                this.swipe();
            }
        },

        render: function() {
            this.$el.html(this.my_template());
            this.$mover = this.$el.find('.mover-js');
            this.$left = this.$el.find('.left-js');
            this.$right = this.$el.find('.right-js');
            this.addSlides();
            this.onresize();
        },

        addSlides: function() {
            _.each(this.slides, function(slide) {
                var node;
                if (slide.type === 'video') {
                    node = '<div class="slide video">' + slide.embed + '</div>';
                } else if (slide.type === 'image') {
                    node = '<div class="slide"><img src="' + slide.url + '" /></div>';
                }
                this.$mover.append(node);
            }, this);

            $(".video").fitVids();

            this.num_of_slides = this.slides.length;

            if (this.num_of_slides <= 1) {
                this.$right.addClass('disabled');
                this.$el.find('.hotspot').hide();
            } else {
                this.$right.fadeIn(500);
            }
        },

        onmouseenter: function() {
            if (this.current_slide === 1) {
                this.$el.addClass('reveal');
            }
        },

        onmouseleave: function() {
            if (this.current_slide === 1) {
                this.$el.removeClass('reveal');
            }
        },

        onmouseover: function(e) {
            var $this = $(e.currentTarget),
                position = this.$mover.position(),
                offset = 50;

            this.dir = this.direction($this);

            if ($this.hasClass('disabled') || this.animating) {
                return;
            }

            position = (this.dir === 'left') ? (position.left + offset) : (position.left - offset);

            this.$mover.addClass('speedup');
            this.$mover.css('left', position);
        },

        onmouseout: function(e) {
            var $this = $(e.currentTarget);
            if ($this.hasClass('disabled') || this.animating) {
                return;
            }
            this.onresize();
        },

        onclick: function(e) {
            var $this = $(e.currentTarget),
                that = this;

            this.dir = this.direction($this);
            if ($this.hasClass('disabled') || this.animating) {
                return;
            }

            this.$mover.removeClass('speedup');
            //this.beforeComplete();
            this.nextSlide();

            if (this.dir === 'left') {
                if (this.current_slide === 1) {
                    $this.addClass('disabled');
                    $this.fadeOut(500);
                }
                this.$right.removeClass('disabled');
                this.$right.fadeIn(500);
            } else {
                if (this.current_slide === this.num_of_slides) {
                    $this.addClass('disabled');
                    $this.fadeOut(500);
                }
                this.$left.removeClass('disabled');
                this.$left.fadeIn(500);
            }
            this.onresize();
        },

        nextSlide: function() {
            var that = this;
            this.animating = true;

            if (this.dir === 'left') {
                // left
                this.current_slide--;

            } else {
                // right
                this.current_slide++;
            }

            setTimeout(function() {
                //that.onComplete();
                that.animating = false;
            }, 1500);
        },

        /* onComplete : function(){
            if( this.options.onComplete ){
                this.options.onComplete( this.dir );
            }
        },

        beforeComplete : function(){
            if( this.options.beforeComplete ){
                this.options.beforeComplete( this.dir );
            }
        },
*/
        onresize: function() {

            var that = this;
            this.$mover.css({
                'left': -(this.current_slide - 1) * this.$el.outerWidth()
            });
            this.$mover.css({
                'width': this.num_of_slides * this.$el.outerWidth()
            });

            $.each(this.$el.find('.slide'), function() {
                $(this).css({
                    'width': that.$el.outerWidth()
                });
            });

            $.each(this.$el.find('.video'), function() {
                $(this).fitVids();
            });
        },

        enable: function() {

            global.handlers.resize.add({
                'id': this.id,
                'callback': this.onresize
            });

            if (global.smart.device) {
                this.$el.swipe("enable");
            } else {
                this.$left.on('click', this.onclick);
                this.$right.on('click', this.onclick);
                this.$el.on('mouseover', this.onmouseenter).on('mouseout', this.onmouseleave);
                this.$left.on('mouseenter', this.onmouseover).on('mouseleave', this.onmouseout);
                this.$right.on('mouseenter', this.onmouseover).on('mouseleave', this.onmouseout);
            }

            this.onresize();
        },

        disable: function() {
            global.handlers.resize.remove(this.id);
            if (global.smart.device) {
                this.$el.swipe("disable");
            } else {
                this.$el.off();
                this.$right.off();
                this.$left.off();
            }
        },

        direction: function($target) {
            return ($target.hasClass('left')) ? 'left' : 'right';
        },

        totals: function($target) {
            this.$el.find('');
        },

        swipe: function() {

            var that = this;
            this.right = true;
            this.left = false;
            if (this.num_of_slides === 1) {
                this.right = false;
            }
            this.$el.swipe({
                allowPageScroll: 'vertical',
                swipe: function(event, direction, distance, duration, fingerCount) {

                    var opposite = (direction === 'left') ? 'right' : 'left';

                    if (that.animating || that[opposite] === false)
                        return;

                    that.dir = opposite;

                    that.nextSlide();

                    if (opposite === 'left') {

                        if (that.current_slide === 1)
                            that.left = false;

                        that.right = true;
                    } else {

                        if (that.current_slide === that.num_of_slides)
                            that.right = false;

                        that.left = true;
                    }

                    that.onresize();
                },
                threshold: 100
            });
        }
    });
});