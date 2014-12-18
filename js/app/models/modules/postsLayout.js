// Filename: models / widgets / pagination
define([
    'underscore',
    'backbone'
], function( _ , Backbone ){
  
    // Menu Model
    var PostsLayout = Backbone.Model.extend({ 
        defaults : { 
            
            // width breakpoints, need to corrospond with css media queries
            // numOfCols are the number of columns it breaks to when breakpoint reached
            columnInfo : [
                {
                    'numOfCols': 1,
                    'breakpoint': 900,
                    'pWidth': 'whole'
                },
                {
                    'numOfCols': 2,
                    'breakpoint': 1400,
                    'pWidth': 'half'
                },
                {
                    'numOfCols': 3,
                    'breakpoint': 1600,
                    'pWidth': 'third'
                },
                {
                    'numOfCols': 4,
                    'breakpoint': 1601,
                    'pWidth': 'forth'
                }
            ],
            posts : [],
            numOfColumns : 0,
            small : [ 900 , 1000 , 1300 , 1301 ],
            large : [ 900 , 1400 , 1600 , 1601 ],
            size : 'large',
            d : 0,
            scrollbarView : {}
        }
    });
    
    return PostsLayout;
});