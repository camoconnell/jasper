define([
    'underscore',
    'global',
    'backbone',
    'models/modules/category/listItem'
], function(
    _,
    global,
    Backbone,
    CategorylistItemModel
){
    "use strict";

	var CategoryWidgetCollection = Backbone.Collection.extend({

        model: CategorylistItemModel,

        initialize : function(models, options) {
            this.on( "change:current", this.changeSelected );
        },

        url : function() {
            return global.url+'/?json=get_category_index';
        },

        parse : function(data) {
            var filteredResults = this.filterResults( data );
            return filteredResults;
        },

        filterResults: function( results ) {
            var filteredResults = [];
            _.each( results.categories, function(category){
                filteredResults.push({
                    catId		: category.id,
                    slug		: category.slug,
                    title   : category.title,
                    description	: category.description,
                    post_count  : category.post_count,
                    current : false
                });
            });
            return filteredResults;
        },

        changeSelected: function( model, val){
            var that = this;
            if( val ){
                this.each( function( e ){
                    if( e !== model && e.get( "current" ) ){
                        e.set( "current", false );
                        console.log(e);
                    }
                });
            }
        }
    });

    return CategoryWidgetCollection;
});