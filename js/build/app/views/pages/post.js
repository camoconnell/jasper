define([
    'jquery',
    'underscore',
    'backbone',
    'models/svg',
    'plugins',
    'models/post',
    'utils/utils'
], function(
    $,
    _,
    Backbone,
    svg,
    Plugins,
    PostModel,
    Utils
) {

    return Backbone.View.extend({

        model: new PostModel(),

        initialize: function() {
            // _.bindAll(this);

            this.render();
        },

        render: function() {},

        enable: function() {

            var that = this;

            this.$el.on('click', '.post-wrap .continue-read', function(event) {
                event.preventDefault();

                // find post id data
                var $post = $(this).parents('.post-wrap'),
                    _id = $post.attr('data-id');

                // send data
                that.trigger('change:selected', {
                    id: Number(_id)
                });
            })
        },

        disable: function() {
            this.$el.off('click', '.post-wrap .continue-read');
        },

        getter: function(target) {
            return this.model.get(target);
        },

        setter: function(target, value) {
            this.model.set(target, value);
        }
    });
});