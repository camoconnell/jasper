define([], function() {

    'use strict';

    var data = {
        Journal: {
            Ready: 'journal:ready'
        },
        Category: {
            Change: 'category:change'
        },
        Posts: {
            Fetched: 'posts:fetched',
            Selected: 'posts:selected'
        },
        Pagination: {
            Change: 'pagination:change'
        }
    };

    return data;
});