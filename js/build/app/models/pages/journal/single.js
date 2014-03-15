define([
	'jquery',
    'underscore',
    'global',
    'backbone'
], function(
	$,
    _,
    global,
    Backbone
){
    "use strict";
 
	var SingleModel = Backbone.Model.extend({

		MODEL_READY: 'model:ready',
 
        initialize:function(){
			_.bindAll(this, 
				'onFetchSuccess'
			);
        },

        fetch : function() {
			$.ajax({
				type : "get", 
				dataType : "json",
				url: window.location+'?json=get_single',
				success: this.onFetchSuccess
			});
		},

		onFetchSuccess: function(response){
			this.setAttributes(response);
			this.trigger(this.MODEL_READY);
		},

        setAttributes:function(response){
			var result = response.post;
            var slides = this.getSlides(result.acf);
            var excerpt = this.getExcerpt(result.acf.copy);
            var date = this.getDate(result.date);
            this.set('id',result.id);
            this.set('slug',result.slug);
            this.set('url',result.url);
            this.set('title',result.title);
            this.set('slides',slides);
            this.set('content',result.acf.copy);
            this.set('excerpt',excerpt);
            this.set('acf',result.acf);
            this.set('attachments',result.attachments);
            this.set('date',date);
            this.set('categories',result.categories);
        },
 
        getSlides:function(results){
            var embed = results.video;
            var slides = _.map(results.gallery,this.getSlide,this);
            if(embed !== ""){
                var obj = {
                    'type':'video',
                    'embed':embed
                };
                slides.unshift(obj);
            }
            return slides;
        },

        getSlide:function(item){
            var slide = {};
            if(global.smart.tablet){
                slide.url = item.gallery_image.sizes.large;
                slide.height = item.gallery_image.sizes['large-height'];
                slide.width = item.gallery_image.sizes['large-width'];
            } else if(global.smart.phone){
                slide.url = item.gallery_image.sizes.medium;
                slide.height = item.gallery_image.sizes['medium-height'];
                slide.width = item.gallery_image.sizes['medium-width'];
            } else {
                slide.url = item.gallery_image.url;
                slide.height = item.gallery_image.height;
                slide.width = item.gallery_image.width;
            }
            slide.type = 'image';
            slide.caption = item.caption;
            slide.description = item.description;
            return slide;
        },

        getExcerpt:function(content){
            var excerptLength = 240;
            if(content.length > excerptLength){
                content = content.substring(0,excerptLength) + "...";
            }
            return content;
        },

        getDate:function(results){
            var date = results.split(' ');
            date = date[0];
            date = date.split('-');
            date = [ parseInt(date[2], 10) , parseInt(date[1], 10) , date[0] ];
            date = date.join('.');
            return date;
        }
    });

    return SingleModel;
});