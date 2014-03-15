define([
    'jquery',
    'global',
    'underscore',
    'backbone',
    'models/modules/postsLayout',
    'plugins'
],function(
    $,
    global,
    _,
    Backbone,
    PostsLayoutModel,
    Plugins
){
    "use strict";

    var PostsLayout = Backbone.View.extend({

        model: new PostsLayoutModel(),
 
        initialize: function( options ){
            _.bindAll(this);
            this.$reLayoutBtn = options.reLayoutBtn;
            this.scrollbarView = options.scrollbarView;
            this.setter( 'post_count' , options.postCount );
            this.render();
        },

        render : function(){

            var that = this;
            this.changeColCnt();

            var posts = this.getter('posts');
            posts.push({ 'id' : 'posts', 'callback' : this.changeColCnt });
            this.setter( 'posts' , posts );

            this.build();

            $(window).smartresize(function( e ){
                that.$el.isotope({
                    masonry: { columnWidth: that.calcColWidth() }
                });
            });
 
            setTimeout( function(){ 
                if( !global.smart.phone ){
                    that.scrollbarView.update();
                }
                $(window).trigger('resize');  
            },300);

            this.calcLayout();
            this.enable();

            return this;
        },
       
        update : function () { 

            var size = ( this.getter( 'size' ) === 'small' ) ? 'large' : 'small',
                layoutSize = this.getter( size ),
                that = this,
                collInfo = this.getter( 'columnInfo' );
 
            $.each( collInfo , function(key, value) {  
                this.breakpoint = layoutSize[ key ]; 
            }); 
 
            this.setter('columnInfo', collInfo);
            this.setter('size', size);

            $(window).trigger('resize');
            setTimeout( function(){ 
                if( !global.smart.phone ){
                    that.scrollbarView.update();
                }
                $(window).trigger('resize');  
            
            }, 600 ); // the timeout duration must happen after the transition set in scss/modules/_base.scss
 
            return this;
        },

       
        onresize : function () {
            $.each( this.getter('posts') , function(k, v) {  
                this.callback(); 
            });
        },


        calcColWidth : function(){

            var colWidth = this.$el.width() / this.model.get('numOfColumns');

            return colWidth;
        },

  
        changeColCnt : function() { 
         
            var w = this.$el.width(),
                columnInfo = this.model.get('columnInfo'),
                that = this; 

            $.each( columnInfo , function(key, value) {

                if(key === 0 ){ 

                    if( w <= this.breakpoint) 
                        that.setColWidths(this);

                }else if(key == (columnInfo.length-1)) {

                    if (w >= this.breakpoint )
                        that.setColWidths(this);

                }else if( w >= ((columnInfo[key-1].breakpoint)+1) && w <= this.breakpoint) { 
                    that.setColWidths(this);
                } 
            });
        },
      

        setColWidths : function(data){

            this.setter( 'numOfColumns' , data.numOfCols );  

            this.$el.children().removeClass('whole half third quarter');
                if( !this.$el.children().hasClass('selected') ) {
                this.$el.children().addClass(data.pWidth);
            } else {
                var $selected = this.$el.children().closest('.selected');
                this.$el.children().not($selected).addClass(data.pWidth);
            }
        },
        
       
        build : function() { 

            var that = this;

            this.$el.imagesLoaded( function(){
                that.$el.isotope({
                    itemSelector : '.post-wrap',
 
                    // use own css transitions
                    transformsEnabled : false,

                    // disable normal resizing
                    resizable: false,

                    // set columnWidth to a percentage of container width
                    masonry: { columnWidth: that.calcColWidth } 
                });

                setTimeout(function(){
                    that.$el.css({ 'opacity' : 1 });  
                }, 800 );
            });  
        },


        insert : function(data){
            this.$el.isotope('insert',data.entry);
            this.$el.css({'opacity':1});
 
            // Calculate layout
            // if post count is less than 3 use large layout
            this.setter('post_count',data.count);
            this.calcLayout();

            if( !global.smart.phone ){
                this.scrollbarView.update(); 
            }
            $(window).trigger('resize');
        },


        calcLayout : function(){

            var post_count = this.getter('post_count'); 
            
            if( post_count < 3 ){
                // simulate togge behavour, so set the opposite - todo - revisit
                this.setter( 'size' , 'small' ); 
                this.update();
                this.$reLayoutBtn.addClass('hide');
            } else {
                this.$reLayoutBtn.removeClass('hide');
            }
        },
        
        
        destroy : function( options ){
 
            var that = this;

            this.$el.css({ 'opacity' : 0 });

            setTimeout(function(){
                that.$el.isotope( 'remove',  that.$el.children() , options.onComplete );
            }, 500);
        },


        updateLayout : function(){

            var $old = $('.layout .display'); 
            $old.removeClass('display');

            var $new = ( $old.hasClass('large') ) ? $('.layout .small') : $('.layout .large');
            $new.addClass('display');

            this.update();
        },

 
        enable : function(){ 
 
            // add listeners
            this.$reLayoutBtn.on( 'click' , this.updateLayout );

            // add resize to resize stack & call resize
            global.handlers.resize.add({ 
                'id'      : 'postLayout',
                'callback': this.onresize 
            });
            $(window).trigger('resize'); 
        },


        disable : function(){     

            // remove listeners
            this.$reLayoutBtn.off();

            // remove from resize stack
            global.handlers.resize.remove( 'postLayout' ); 
        },

        
        getter : function( value ){ 
            return this.model.get( value );
        },

        setter : function( target , value ){ 
            this.model.set( target , value );
        }
    });
    
    return PostsLayout;
});