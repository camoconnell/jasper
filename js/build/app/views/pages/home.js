define([
    'jquery',
    'global',
    'underscore',
    'models/svg',
    'plugins',
    'models/pages/home',
    'views/pages/page',
    'views/modules/follow_me',
    'views/modules/share'
],function(
    $,
    global,
    _,
    svg,
    Plugins,
    HomeModel,
    PageView,
    FollowMe,
    Share
){
    
    "use strict";
      
    var Home = PageView.extend({

        model: new HomeModel(),

        events:{},

        initialize: function( options ){
            this.setAttributes( options );
            _.bindAll(this);
        },

        render : function(){
            // Render SVG graphics 
            svg.build('logo');

            $("#intro h1").lettering();

            this.addScrollbar({
                el : this.$el.find('.scrollpane')
            });

            this.followMe = new FollowMe();
            this.$el.append(this.followMe.el);

            this.addShareBtns();

            return this;
        },

        addShareBtns:function(){
            this.share = new Share({
                'shareUrl':window.location,
                'twitterMsg':'Nick Morrison Fitness - Organic Health  '
            });
            var $content = this.$el.find('.content');
            $content.append(this.share.el);
        }
    });

    return Home;
});