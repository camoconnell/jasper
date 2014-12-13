// Filename: controller
define([
    'jquery',
    'global',
    'underscore',
    'backbone',
    'views/pages',
    'views/footer',
    'views/modules/menu/controller',
    'utils/resize',
    'utils/ajax'
], function(
    $,
    global,
    _,
    Backbone,
    PagesView,
    FooterView,
    MenuView,
    resizeHandler,
    ajaxHandler
) {

    var Controller = Backbone.View.extend({

        initialize: function() {

            _.bindAll(this,
                'menuMouseover',
                'menuSelect'
            );
        },

        onReady: function() {

            var that = this;

            // Initial Resize instance
            global.handlers.resize = resizeHandler;
            global.el.win.resize(_.throttle(global.handlers.resize.update, 200));

            // Initial Ajax instance
            global.handlers.ajax = ajaxHandler;

            // apply either paint or stamp according to device used
            global.misc.applyline = (global.smart.device) ? 'stamp' : 'paint';

            // Menu View
            this.menuView = new MenuView({
                el: $('#site-navigation')
            });
            this.listenTo(this.menuView.collection, 'change:mouseover', this.menuMouseover);
            this.listenTo(this.menuView.collection, 'change:selected change:sayhi', this.menuSelect);

            // Pages view
            this.pagesView = new PagesView({
                el: $('article#content'),
                menu: this.menuView
            });

            // Footer view
            this.footerView = new FooterView({
                el: $('footer')
            });

            // call resize after init Views
            global.handlers.resize.update();

            return this;
        },


        // updates coming from Menu
        menuMouseover: function(e) {

            var mouseover = e.get('mouseover'),
                urlValues = e.get('urlValues');

            if (!this.footerView.getter('selected'))
                this.pagesView.setColour(mouseover, urlValues);

            this.footerView.onMouseover(mouseover, urlValues, this.pagesView.getter('pageColour'));
        },


        menuSelect: function(model, val, opts) {

            // if true - update pages & footer Views
            if (val) {
                var selected = model.get('selected'),
                    urlValues = model.get('urlValues');

                this.update(urlValues);
                this.footerView.update(selected, urlValues);
            }
        },


        // Update page state - called by menuSelect() & router
        update: function(urlValues) {

            this.pagesView.update(urlValues);

            return this;
        }

    });

    return Controller;

});