// Filename: models / pages / about
define([
    'underscore',
    'backbone',
    'models/pages/base'
], function( _ , Backbone, BasePageModel ){
  
    // About Model
    var AboutModel = BasePageModel.extend({
        
        defaults : {}
    });
    
    return AboutModel;
});