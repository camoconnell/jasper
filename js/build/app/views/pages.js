define([
    'jquery',
    'global',
    'underscore',
    'backbone',
    'plugins',
    'models/pages',
    'utils/utils',
    'collections/pages',
    'views/modules/pageTransition',
    'views/pages/home',
    'views/pages/about',
    'views/pages/journal',
    'views/pages/training',
    'views/pages/goodwords',
    'views/pages/single',
    'utils/event_bus'
],function(
    $,
    global,
    _,
    Backbone,
    Plugins,
    PagesModel,
    Utils,
    PagesCollection,
    PageTransition,
    HomeView,
    AboutView,
    JournalView,
    TrainingView,
    GoodwordsView,
    SingleView,
    Bus
){
    "use strict";

    var PagesView = Backbone.View.extend({

        model: new PagesModel(),
                
        initialize: function( options ){

            _.bindAll(this);
            this.pages = {}; // child views

            this.menuView = options.menu;

            this.collection = new PagesCollection();
            this.collection.fetch({success : this.render, dataType: "jsonp"});
        },

        // Public method
        update: function( urlValues ){
 
            // if selected item is not 'say hi'
            if( urlValues === null || urlValues[0] === global.bootstrap.sayhiSlug ){
                return;
            }

            this.setter( 'urlValues', urlValues );
            return this;
        },

        parseValues: function( model, val, opts ){
            var urlValues = val;
            var type = ( urlValues.length > 2 ) ? 'single' : urlValues[0];
            this.pages[ type ].update( urlValues );
        },
 
        render: function(){
 
            $('#content > section').addClass('current-page');
            this.$el.animate({'opacity':1},500);
            $('.preloader').fadeOut(500);
 
            this.collection.each( this.initView );

            var isSingle = $('body').hasClass('single');
            var currentPage = (isSingle) ? true : false;
            if(isSingle){
                this.setter('type','single');
                this.pages.single = new SingleView({
                    'currentPage':currentPage, 
                    el: $('#single')
                });
                this.pages.single.setter('type','single');
            } else {
                this.pages.single = new SingleView({'currentPage':currentPage});
                this.$el.append(this.pages.single.el);
            }
            this.collection.add(this.pages.single.model);
            Bus.on('entry:selected',this.onEntrySelected,this);

            // init page transition
            this.transition = new PageTransition({ pages: this.pages });

            // enable listeners
            // INTERNAL navigation : on current page change transition views 
            this.listenTo( this.collection, 'change:current' , this.doTransition );
            // EXTERNAL ( from router of menu into pagesView ) : on urlValue change call pageView
            this.listenTo( this.model, 'change:urlValues' , this.parseValues );

            // begin firstload 
            var urlValues = this.getter( 'urlValues' );
            var type = ( urlValues.length > 2 ) ? 'single' : urlValues[0];
 
            this.pages[ type ].update( urlValues );
        },

        setColour: function( mouseover, _target ){

            var target = _target[0];
            var original = this.getter('urlValues')[0];
            var that = this;

            // if mouseover true - use menuItem slug as target colour
            // else if mouseout false - return colour to selected page
            target = ( mouseover ) ? target : original;

            if ( target === global.bootstrap.sayhiSlug ){
                $('body').removeClass();
                $('body').addClass( 'say-hi' );
                return false;
            } else {
                if( typeof this.pages[ target ] !== "undefined" ){
                    this.pages[ target ].setClass();
                }
            }
 
            // use pageId to reference page & set pageColour
            _.each(this.collection.models, function( model ){
                if( model.get('slug') === target ){
                    this.pages[ target ].setFavicon();
                }
            }, this );

            return this;
        },

        doTransition: function ( model, val, opts ) {
 
            // CSS Page transitions  
            // if first page load return
            if (this.getter('firstPageLoad')) {
                this.setter('firstPageLoad', false);
                return false;
            }

            if ( !val ){
                return;
            }

            this.transition.render( model.get('type') );
        },

        // append pages to the DOM from PagesCollection models,
        // except the currentpage, which is already on the DOM
        initView: function (model) {

            var slug = model.get('slug');
            var urlValue = this.getter('urlValues');
            var currentPage = ( urlValue[0] === slug ) ? true : false;
            var page;

            switch (slug) {
            case 'home':
                page = new HomeView({'model':model,'currentPage':currentPage});
                break;
            case 'about':
                page = new AboutView({'model':model,'currentPage':currentPage});
                break;
            case 'journal':
                page = new JournalView({'model':model,'currentPage':currentPage});
                break;
            case 'training':
                page = new TrainingView({'model':model,'currentPage':currentPage});
                break;
            case 'good-words':
                page = new GoodwordsView({'model':model,'currentPage':currentPage});
                break;
            }
 
            if ( !currentPage ){
                this.$el.append( page.el );
            }

            this.pages[slug] = page;
        },

        onEntrySelected:function(){
            var selectedModel = this.pages.journal.getSelected();
            this.pages.single.setModel(selectedModel);
            // controller listens for single selection to deselect menu widget
            this.setter('type','single');
            // deselect menu
            this.menuView.deselect();
            // setting urlValues calls  > parseValues > update 
            var urlVal = this.pages.single.model.get('urlValues');
            this.setter('urlValues',urlVal);
        },

        getter : function( value ){
            return this.model.get( value );
        },

        setter : function( target , value ){
            this.model.set( target , value );
        }
    });  
            
    return PagesView;
  
});