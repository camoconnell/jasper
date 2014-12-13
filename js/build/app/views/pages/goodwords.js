define([
    'jquery',
    'underscore',
    'backbone',
    'plugins',
    'views/pages/page',
    'views/pages/goodwords/word',
    'views/modules/follow_me'
], function(
    $,
    _,
    Backbone,
    Plugins,
    PageView,
    WordsView,
    FollowMe
) {

    "use strict";

    return PageView.extend({

        initialize: function(options) {
            this.setAttributes(options);
            // _.bindAll(this);
        },

        render: function(options) {
            this.addScrollbar({
                el: this.$el.find('.scrollpane')
            });

            this.appendWords();
            this.followMe = new FollowMe();
            this.$el.append(this.followMe.el);
        },

        appendWords: function(options) {
            var acf = this.model.get('acf');
            var $words = this.$el.find('.words-js');
            _.each(acf.good_words, function(wordData) {
                var words = new WordsView({
                    data: wordData
                });
                $words.append(words.el);
            });
        },
    });
});