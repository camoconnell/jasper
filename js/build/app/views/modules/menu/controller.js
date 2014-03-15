define( function (require) {

    var $           = require("jquery"),
        global      = require("global"),
        _           = require("underscore"),
        Backbone    = require("backbone"),
        MenuCollection = require('collections/menu');
    
    //  The View the Menu 
    
    var MenuView = Backbone.View.extend({
 
        initialize: function(){
            _.bindAll(this);
            this._views = {}; // child views
            this.collection = new MenuCollection( this.getItems() );
            this.render();
        },


        getItems: function(){

            var items = [];
 
            $('#menu-nmf-menu a').each(function(){
                items.push({            
                    selected: ( $(this).parent().hasClass('current-menu-item') ) ? true : false,
                    slug    : $(this).data('slug'),
                    urlValues : [ $(this).data('slug') ], // in the future nested menu items wil be added to this array 
                    pageId  : $(this).data('pageid'),
                    idAttr  : '#'+$(this).parent().attr('id')
                });
            });

            return items;
        },


        render : function(){

            // delay
            var d = ( global.smart.device ) ? 0 : 400;
            var that = this;
            this.collection.each(function( menuItem ){

                menuItem.set('delay', d);

                var MenuItemView = require('views/modules/menu/listItem');
                var menuItemView = new MenuItemView({
                    el: $(menuItem.get('idAttr')),
                    model: menuItem
                });

                that._views[menuItem.get('pageId')] = menuItemView;
                
                d += 600;
            });
            
            $('header .inner').animate({'opacity':1},850);
            $('header .mini-menu').on('click', function(){
                $('html').toggleClass('menu-open');
            });
        },
 
 
        // Public, called from controller
        deselect : function(){
            this.collection.each(function( menuItem ){
                menuItem.set( 'selected' , false );
            });
        }
    });
    
    return MenuView;
});

