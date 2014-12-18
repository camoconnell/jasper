define([
    'jquery',
    'global',
    'underscore',
    'backbone'
], function(
    $,
    global,
    _,
    Backbone
) {

    "use strict";

    return Backbone.View.extend({

        addInstance: function(arg) {

            this.model.addInstance({
                hook: arg.hook,
                enable: arg.obj.enable,
                disable: arg.obj.disable
            });
        },


        _enable: function() {

            // call childs enable
            if (this.enable) {
                this.enable();
            }

            var instances = this.getter('instances');

            $.each(instances, function() {
                this.enable();
            });
        },


        _disable: function() {

            // call childs disable
            if (this.disable) {
                this.disable();
            }

            var instances = this.getter('instances');

            $.each(instances, function() {
                this.disable();
            });
        },

        getter: function(target) {
            return this.model.get(target);
        },

        setter: function(target, value) {
            this.model.set(target, value);
        }

    });
});