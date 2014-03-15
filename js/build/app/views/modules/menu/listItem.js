define( function (require) {

    var $           = require("jquery"),
        global      = require("global"),
        _           = require("underscore"),
        Backbone    = require("backbone"),
        MenuItemModel = require('models/MenuItem');
 
        
    var MenuItemView = Backbone.View.extend({

        model : new MenuItemModel(),

        events : {
            'click a'       : 'selected',
            'mouseover a'   : 'onMouseover',
            'mouseout a'    : 'onMouseout'
        },

        initialize: function(){
               
            _.bindAll(this);

            this.sayhi = (this.model.get('slug') === 'say-hi') ? true : false;
            
            // Render on content change
            this.listenTo( this.model , 'change:selected' , this.update );

            this.render();
        },

        update : function (e) {
            if( e.get('selected') ){
                this.$el.addClass('current-menu-item current_page_item');
            } else {
                this.$el.removeClass('current-menu-item current_page_item');
            }
        },

        selected : function (e) {

            e.preventDefault();

            if( global.misc.isAnimating ){
                return;
            }
            
            if( this.sayhi ){
                this.model.set('sayhi', ( this.model.get('sayhi') === 'open' ) ?  'close' : 'open' );
            } else {
                this.model.set('selected', true);
            }

            if( $('html').hasClass('menu-open') ){
                $('html').removeClass('menu-open');
            }
        },
  
        render : function(){
            this.$el.find('a').lazylinepainter({
                'svgData' : global.misc.lazylinedata,
                'strokeWidth':1.5,
                'strokeColor': '#fefbf2',
                'overrideKey':'icon-'+this.model.get('slug'),
                'width':'auto',
                'delay':this.model.get('delay')
            }).lazylinepainter( global.misc.applyline );
            
            return this;
        },

        onMouseover : function(){
            this.model.set('mouseover', true );
        },

        onMouseout : function(){
            this.model.set('mouseover', false);
        }
    });

    return MenuItemView;
});