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
            title: null,
            business: null,
            description: null,
            dateTo: null,
            dateFrom: null,
            location: null
        },

        setData:function(data){
			this.set('title', data.title);
            this.set('business', data.business);
            this.set('location', data.location);
            this.set('dateFrom', this.parseDate(data.date_from));
            this.set('dateTo', this.parseDate(data.date_to));
            this.set('description', data.description);
        },

        parseDate:function(date){
			var d = date.split('');
			var year = d[0]+d[1]+d[2]+d[3];
			var month = d[4]+d[5];
			var day = d[6]+d[7];
			
			return day + '/' + month + '/' + year;
        }
    });
});