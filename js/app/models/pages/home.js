// Filename: models / pages / home
define([
    'underscore',
    'backbone',
    'models/pages/base'
], function( _ , Backbone, BasePageModel ){
  
    // Page Model
    var HomeModel = BasePageModel.extend({
        defaults : {
            decorations : {
                containers : {
                    right: $("#right-motif"),
                    left: $("#left-motif")
                },
                motifs : [
                    "dressing-up-jump",
                    "dressing-down-jump",
                    "dressing-down-scribble",
                    "dressing-up-zag",
                    "dressing-down-zag"
                ],
                delay : 2500 
            },

            instances : []
        }
    });
    
    return HomeModel;
});