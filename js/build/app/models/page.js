// Filename: models/page
define([
    'underscore',
    'backbone'
], function( _ , Backbone ){
  
    // Page Model
    var PageModel = Backbone.Model.extend({
        defaults : {
            current : false, // selected state
            loaded  : false, // loaded state
            firstLoad : true,
            rendered: false, // specific page view functionality initiated 
            slug    : 'none', // used to set page title
            type    : 'none', // used to reference section div
            acf     : '',
            content : 'none',
            animationType:'',
            originalClassList: '',
            faviUrl : '',
            urlValues : [],
            selected : null // pages.js listens for post change to load single view
        },

        setSelected:function(model){
            this.set('selected', model);
        },

        getSelected:function(){
            return this.get('selected');
        },

        parse: function( data ){
            if(data.slug === 'sample-page'){
                data.slug = 'home';
            }

            return data;
        },
        // used to push new obj's into instance stack ,
        // we loop through these objs and disable / enable them when needed
        // ie - the custom scrollbar on each page
        addInstance : function( item ){
            var instances = this.get('instances');
            instances.push( item );
            this.set( 'instances' , instances );
        },

        initialize: function(){
            var instances = [];
            this.set('instances',instances);
        }
    });
    
    return PageModel;
});