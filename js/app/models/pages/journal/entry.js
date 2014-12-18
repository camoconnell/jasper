define([
    'underscore',
    'backbone'
], function(
	_,
	Backbone
){
	"use strict";

    return Backbone.Model.extend({
        defaults : {
            current : false, // selected state
            title: null,
            business: null,
            description: null,
            dateTo: null,
            dateFrom: null,
            location: null
        }
    });
});