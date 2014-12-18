define([
    'jquery',
    'global',
    'underscore',
    'backbone',
    'plugins',
    'models/modules/scrollbar'
], function(
    $,
    global,
    _,
    Backbone,
    Plugins,
    ScrollbarModel
) {

    "use strict";

    return Backbone.View.extend({

        model: new ScrollbarModel(),

        initialize: function(options) {

            _.bindAll(this,
                'update',
                'onScroll',
                'onresize',
                'enable',
                'disable'
            );

            this.callbacks = options.callbacks;
            this.toTop = options.toTop;
            this.toTopVisible = false;

            // set unique id
            var timestamp = new Date().getUTCMilliseconds();
            timestamp = 'scrollbar-' + String(timestamp);
            this.id = timestamp;
        },

        render: function() {

            var that = this,
                callbacks = {
                    onScroll: _.throttle(function() {

                        // if return to top arrow exist
                        if (that.toTop)
                            that.onScroll();
                    }, 300)
                };

            // merge custom callbacks into default
            $.extend(callbacks, this.callbacks);

            // Scroll bar
            this.$el.mCustomScrollbar({
                scrollInertia: this.getter('inertia'),
                callbacks: callbacks
            });

            this.$el.find('.mCSB_scrollTools').addClass('tAll');

            //this.enable();

            var update = function() {
                that.update();
                $(window).trigger('resize');
            }
            setTimeout(update, 300);
        },


        update: function() {

            var that = this;

            var dBounce = _.debounce(function() {
                that.onresize();
                that.$el.mCustomScrollbar("update");
            }, 1000);

            dBounce();

            return this;
        },


        scrollTo: function(target) {

            if (this.getter('animating'))
                return;

            var that = this;

            // easing (non standard func)
            // add/remove css3 top transition properties
            this.setter('animating', true);

            var $mCSB_container = this.$el.find('.mCSB_container');
            $mCSB_container.addClass('mCSB_scrollTo');
            this.$el.mCustomScrollbar("scrollTo", target);

            setTimeout(function() {
                $mCSB_container.removeClass('mCSB_scrollTo');

                that.setter('animating', false);
            }, 1000);
        },

        onScroll: function() {
            if (mcs.draggerTop > 20 && !this.toTopVisible) {
                this.toTop.addClass('enable');
                this.toTop.stop(true, true).fadeIn(400)
                this.toTopVisible = true;
            } else if (mcs.draggerTop < 20 && this.toTopVisible) {
                this.toTop.removeClass('enable');
                this.toTop.stop(true, true).fadeOut(200);
                this.toTopVisible = false;
            }
        },

        onresize: function() {
            this.$el.find('.mCSB_scrollTools').css('height', (global.screen.height - 200));
        },

        enable: function() {

            // if return to top arrow exist
            if (this.toTop) {
                var that = this;
                this.toTop.on('click', function() {
                    that.scrollTo(0);
                });
            }

            this.$el.mCustomScrollbar("update");
            global.handlers.resize.add({
                'id': this.id,
                'callback': this.onresize
            });
        },

        disable: function() {

            // if return to top arrow exist
            if (this.toTop)
                this.toTop.off();

            this.$el.mCustomScrollbar("disable");
            global.handlers.resize.remove(this.id);
        },

        setter: function(target, value) {
            this.model.set(target, value);
        },

        getter: function(target) {
            return this.model.get(target);
        }
    });
});