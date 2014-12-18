define([
        "jquery"
    ],
    function($) {

        /* Modernizr 2.6.2 (Custom Build) | MIT & BSD
         * Build: http://modernizr.com/download/#-cssanimations-csstransitions-touch-shiv-cssclasses-prefixed-teststyles-testprop-testallprops-prefixes-domprefixes-load
         */
        ;
        window.Modernizr = function(a, b, c) {
            function z(a) {
                j.cssText = a
            }

            function A(a, b) {
                return z(m.join(a + ";") + (b || ""))
            }

            function B(a, b) {
                return typeof a === b
            }

            function C(a, b) {
                return !!~("" + a).indexOf(b)
            }

            function D(a, b) {
                for (var d in a) {
                    var e = a[d];
                    if (!C(e, "-") && j[e] !== c) return b == "pfx" ? e : !0
                }
                return !1
            }

            function E(a, b, d) {
                for (var e in a) {
                    var f = b[a[e]];
                    if (f !== c) return d === !1 ? a[e] : B(f, "function") ? f.bind(d || b) : f
                }
                return !1
            }

            function F(a, b, c) {
                var d = a.charAt(0).toUpperCase() + a.slice(1),
                    e = (a + " " + o.join(d + " ") + d).split(" ");
                return B(b, "string") || B(b, "undefined") ? D(e, b) : (e = (a + " " + p.join(d + " ") + d).split(" "), E(e, b, c))
            }
            var d = "2.6.2",
                e = {},
                f = !0,
                g = b.documentElement,
                h = "modernizr",
                i = b.createElement(h),
                j = i.style,
                k, l = {}.toString,
                m = " -webkit- -moz- -o- -ms- ".split(" "),
                n = "Webkit Moz O ms",
                o = n.split(" "),
                p = n.toLowerCase().split(" "),
                q = {},
                r = {},
                s = {},
                t = [],
                u = t.slice,
                v, w = function(a, c, d, e) {
                    var f, i, j, k, l = b.createElement("div"),
                        m = b.body,
                        n = m || b.createElement("body");
                    if (parseInt(d, 10))
                        while (d--) j = b.createElement("div"), j.id = e ? e[d] : h + (d + 1), l.appendChild(j);
                    return f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join(""), l.id = h, (m ? l : n).innerHTML += f, n.appendChild(l), m || (n.style.background = "", n.style.overflow = "hidden", k = g.style.overflow, g.style.overflow = "hidden", g.appendChild(n)), i = c(l, a), m ? l.parentNode.removeChild(l) : (n.parentNode.removeChild(n), g.style.overflow = k), !!i
                },
                x = {}.hasOwnProperty,
                y;
            !B(x, "undefined") && !B(x.call, "undefined") ? y = function(a, b) {
                return x.call(a, b)
            } : y = function(a, b) {
                return b in a && B(a.constructor.prototype[b], "undefined")
            }, Function.prototype.bind || (Function.prototype.bind = function(b) {
                var c = this;
                if (typeof c != "function") throw new TypeError;
                var d = u.call(arguments, 1),
                    e = function() {
                        if (this instanceof e) {
                            var a = function() {};
                            a.prototype = c.prototype;
                            var f = new a,
                                g = c.apply(f, d.concat(u.call(arguments)));
                            return Object(g) === g ? g : f
                        }
                        return c.apply(b, d.concat(u.call(arguments)))
                    };
                return e
            }), q.touch = function() {
                var c;
                return "ontouchstart" in a || a.DocumentTouch && b instanceof DocumentTouch ? c = !0 : w(["@media (", m.join("touch-enabled),("), h, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(a) {
                    c = a.offsetTop === 9
                }), c
            }, q.cssanimations = function() {
                return F("animationName")
            }, q.csstransitions = function() {
                return F("transition")
            };
            for (var G in q) y(q, G) && (v = G.toLowerCase(), e[v] = q[G](), t.push((e[v] ? "" : "no-") + v));
            return e.addTest = function(a, b) {
                    if (typeof a == "object")
                        for (var d in a) y(a, d) && e.addTest(d, a[d]);
                    else {
                        a = a.toLowerCase();
                        if (e[a] !== c) return e;
                        b = typeof b == "function" ? b() : b, typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a), e[a] = b
                    }
                    return e
                }, z(""), i = k = null,
                function(a, b) {
                    function k(a, b) {
                        var c = a.createElement("p"),
                            d = a.getElementsByTagName("head")[0] || a.documentElement;
                        return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
                    }

                    function l() {
                        var a = r.elements;
                        return typeof a == "string" ? a.split(" ") : a
                    }

                    function m(a) {
                        var b = i[a[g]];
                        return b || (b = {}, h++, a[g] = h, i[h] = b), b
                    }

                    function n(a, c, f) {
                        c || (c = b);
                        if (j) return c.createElement(a);
                        f || (f = m(c));
                        var g;
                        return f.cache[a] ? g = f.cache[a].cloneNode() : e.test(a) ? g = (f.cache[a] = f.createElem(a)).cloneNode() : g = f.createElem(a), g.canHaveChildren && !d.test(a) ? f.frag.appendChild(g) : g
                    }

                    function o(a, c) {
                        a || (a = b);
                        if (j) return a.createDocumentFragment();
                        c = c || m(a);
                        var d = c.frag.cloneNode(),
                            e = 0,
                            f = l(),
                            g = f.length;
                        for (; e < g; e++) d.createElement(f[e]);
                        return d
                    }

                    function p(a, b) {
                        b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function(c) {
                            return r.shivMethods ? n(c, a, b) : b.createElem(c)
                        }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + l().join().replace(/\w+/g, function(a) {
                            return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
                        }) + ");return n}")(r, b.frag)
                    }

                    function q(a) {
                        a || (a = b);
                        var c = m(a);
                        return r.shivCSS && !f && !c.hasCSS && (c.hasCSS = !!k(a, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), j || p(a, c), a
                    }
                    var c = a.html5 || {},
                        d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                        e = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                        f, g = "_html5shiv",
                        h = 0,
                        i = {},
                        j;
                    (function() {
                        try {
                            var a = b.createElement("a");
                            a.innerHTML = "<xyz></xyz>", f = "hidden" in a, j = a.childNodes.length == 1 || function() {
                                b.createElement("a");
                                var a = b.createDocumentFragment();
                                return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined"
                            }()
                        } catch (c) {
                            f = !0, j = !0
                        }
                    })();
                    var r = {
                        elements: c.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
                        shivCSS: c.shivCSS !== !1,
                        supportsUnknownElements: j,
                        shivMethods: c.shivMethods !== !1,
                        type: "default",
                        shivDocument: q,
                        createElement: n,
                        createDocumentFragment: o
                    };
                    a.html5 = r, q(b)
                }(this, b), e._version = d, e._prefixes = m, e._domPrefixes = p, e._cssomPrefixes = o, e.testProp = function(a) {
                    return D([a])
                }, e.testAllProps = F, e.testStyles = w, e.prefixed = function(a, b, c) {
                    return b ? F(a, b, c) : F(a, "pfx")
                }, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + t.join(" ") : ""), e
        }(this, this.document),
        function(a, b, c) {
            function d(a) {
                return "[object Function]" == o.call(a)
            }

            function e(a) {
                return "string" == typeof a
            }

            function f() {}

            function g(a) {
                return !a || "loaded" == a || "complete" == a || "uninitialized" == a
            }

            function h() {
                var a = p.shift();
                q = 1, a ? a.t ? m(function() {
                    ("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
                }, 0) : (a(), h()) : q = 0
            }

            function i(a, c, d, e, f, i, j) {
                function k(b) {
                    if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
                        "img" != a && m(function() {
                            t.removeChild(l)
                        }, 50);
                        for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload()
                    }
                }
                var j = j || B.errorTimeout,
                    l = b.createElement(a),
                    o = 0,
                    r = 0,
                    u = {
                        t: d,
                        s: c,
                        e: f,
                        a: i,
                        x: j
                    };
                1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function() {
                    k.call(this, r)
                }, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l))
            }

            function j(a, b, c, d, f) {
                return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this
            }

            function k() {
                var a = B;
                return a.loader = {
                    load: j,
                    i: 0
                }, a
            }
            var l = b.documentElement,
                m = a.setTimeout,
                n = b.getElementsByTagName("script")[0],
                o = {}.toString,
                p = [],
                q = 0,
                r = "MozAppearance" in l.style,
                s = r && !!b.createRange().compareNode,
                t = s ? l : n.parentNode,
                l = a.opera && "[object Opera]" == o.call(a.opera),
                l = !!b.attachEvent && !l,
                u = r ? "object" : l ? "script" : "img",
                v = l ? "script" : u,
                w = Array.isArray || function(a) {
                    return "[object Array]" == o.call(a)
                },
                x = [],
                y = {},
                z = {
                    timeout: function(a, b) {
                        return b.length && (a.timeout = b[0]), a
                    }
                },
                A, B;
            B = function(a) {
                function b(a) {
                    var a = a.split("!"),
                        b = x.length,
                        c = a.pop(),
                        d = a.length,
                        c = {
                            url: c,
                            origUrl: c,
                            prefixes: a
                        },
                        e, f, g;
                    for (f = 0; f < d; f++) g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g));
                    for (f = 0; f < b; f++) c = x[f](c);
                    return c
                }

                function g(a, e, f, g, h) {
                    var i = b(a),
                        j = i.autoCallback;
                    i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function() {
                        k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2
                    })))
                }

                function h(a, b) {
                    function c(a, c) {
                        if (a) {
                            if (e(a)) c || (j = function() {
                                var a = [].slice.call(arguments);
                                k.apply(this, a), l()
                            }), g(a, j, b, 0, h);
                            else if (Object(a) === a)
                                for (n in m = function() {
                                    var b = 0,
                                        c;
                                    for (c in a) a.hasOwnProperty(c) && b++;
                                    return b
                                }(), a) a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function() {
                                    var a = [].slice.call(arguments);
                                    k.apply(this, a), l()
                                } : j[n] = function(a) {
                                    return function() {
                                        var b = [].slice.call(arguments);
                                        a && a.apply(this, b), l()
                                    }
                                }(k[n])), g(a[n], j, b, n, h))
                        } else !c && l()
                    }
                    var h = !!a.test,
                        i = a.load || a.both,
                        j = a.callback || f,
                        k = j,
                        l = a.complete || f,
                        m, n;
                    c(h ? a.yep : a.nope, !!i), i && c(i)
                }
                var i, j, l = this.yepnope.loader;
                if (e(a)) g(a, 0, l, 0);
                else if (w(a))
                    for (i = 0; i < a.length; i++) j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l);
                else Object(a) === a && h(a, l)
            }, B.addPrefix = function(a, b) {
                z[a] = b
            }, B.addFilter = function(a) {
                x.push(a)
            }, B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function() {
                b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete"
            }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function(a, c, d, e, i, j) {
                var k = b.createElement("script"),
                    l, o, e = e || B.errorTimeout;
                k.src = a;
                for (o in d) k.setAttribute(o, d[o]);
                c = j ? h : c || f, k.onreadystatechange = k.onload = function() {
                    !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null)
                }, m(function() {
                    l || (l = 1, c(1))
                }, e), i ? k.onload() : n.parentNode.insertBefore(k, n)
            }, a.yepnope.injectCss = function(a, c, d, e, g, i) {
                var e = b.createElement("link"),
                    j, c = i ? h : c || f;
                e.href = a, e.rel = "stylesheet", e.type = "text/css";
                for (j in d) e.setAttribute(j, d[j]);
                g || (n.parentNode.insertBefore(e, n), m(c, 0))
            }
        }(this, document), Modernizr.load = function() {
            yepnope.apply(window, [].slice.call(arguments, 0))
        };


        /*mousewheel*/
        (function(a) {
            function d(b) {
                var c = b || window.event,
                    d = [].slice.call(arguments, 1),
                    e = 0,
                    f = !0,
                    g = 0,
                    h = 0;
                return b = a.event.fix(c), b.type = "mousewheel", c.wheelDelta && (e = c.wheelDelta / 120), c.detail && (e = -c.detail / 3), h = e, c.axis !== undefined && c.axis === c.HORIZONTAL_AXIS && (h = 0, g = -1 * e), c.wheelDeltaY !== undefined && (h = c.wheelDeltaY / 120), c.wheelDeltaX !== undefined && (g = -1 * c.wheelDeltaX / 120), d.unshift(b, e, g, h), (a.event.dispatch || a.event.handle).apply(this, d)
            }
            var b = ["DOMMouseScroll", "mousewheel"];
            if (a.event.fixHooks)
                for (var c = b.length; c;) a.event.fixHooks[b[--c]] = a.event.mouseHooks;
            a.event.special.mousewheel = {
                setup: function() {
                    if (this.addEventListener)
                        for (var a = b.length; a;) this.addEventListener(b[--a], d, !1);
                    else this.onmousewheel = d
                },
                teardown: function() {
                    if (this.removeEventListener)
                        for (var a = b.length; a;) this.removeEventListener(b[--a], d, !1);
                    else this.onmousewheel = null
                }
            }, a.fn.extend({
                mousewheel: function(a) {
                    return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
                },
                unmousewheel: function(a) {
                    return this.unbind("mousewheel", a)
                }
            })
        })(jQuery);
        /*custom scrollbar*/
        (function(c) {
            var b = {
                    init: function(e) {
                        var f = {
                                set_width: false,
                                set_height: false,
                                horizontalScroll: false,
                                scrollInertia: 950,
                                mouseWheel: true,
                                mouseWheelPixels: "auto",
                                autoDraggerLength: true,
                                autoHideScrollbar: false,
                                snapAmount: null,
                                snapOffset: 0,
                                scrollButtons: {
                                    enable: false,
                                    scrollType: "continuous",
                                    scrollSpeed: "auto",
                                    scrollAmount: 40
                                },
                                advanced: {
                                    updateOnBrowserResize: true,
                                    updateOnContentResize: false,
                                    autoExpandHorizontalScroll: false,
                                    autoScrollOnFocus: true,
                                    normalizeMouseWheelDelta: false
                                },
                                contentTouchScroll: true,
                                callbacks: {
                                    onScrollStart: function() {},
                                    onScroll: function() {},
                                    onTotalScroll: function() {},
                                    onTotalScrollBack: function() {},
                                    onTotalScrollOffset: 0,
                                    onTotalScrollBackOffset: 0,
                                    whileScrolling: function() {}
                                },
                                theme: "light"
                            },
                            e = c.extend(true, f, e);
                        return this.each(function() {
                            var m = c(this);
                            if (e.set_width) {
                                m.css("width", e.set_width)
                            }
                            if (e.set_height) {
                                m.css("height", e.set_height)
                            }
                            if (!c(document).data("mCustomScrollbar-index")) {
                                c(document).data("mCustomScrollbar-index", "1")
                            } else {
                                var t = parseInt(c(document).data("mCustomScrollbar-index"));
                                c(document).data("mCustomScrollbar-index", t + 1)
                            }
                            m.wrapInner("<div class='mCustomScrollBox mCS-" + e.theme + "' id='mCSB_" + c(document).data("mCustomScrollbar-index") + "' style='position:relative; height:100%; overflow:hidden; max-width:100%;' />").addClass("mCustomScrollbar _mCS_" + c(document).data("mCustomScrollbar-index"));
                            var g = m.children(".mCustomScrollBox");
                            if (e.horizontalScroll) {
                                g.addClass("mCSB_horizontal").wrapInner("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />");
                                var k = g.children(".mCSB_h_wrapper");
                                k.wrapInner("<div class='mCSB_container' style='position:absolute; left:0;' />").children(".mCSB_container").css({
                                    width: k.children().outerWidth(),
                                    position: "relative"
                                }).unwrap()
                            } else {
                                g.wrapInner("<div class='mCSB_container' style='position:relative; top:0;' />")
                            }
                            var o = g.children(".mCSB_container");
                            if (c.support.touch) {
                                o.addClass("mCS_touch")
                            }
                            o.after("<div class='mCSB_scrollTools' style='position:absolute;'><div class='mCSB_draggerContainer'><div class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' style='position:relative;'></div></div><div class='mCSB_draggerRail'></div></div></div>");
                            var l = g.children(".mCSB_scrollTools"),
                                h = l.children(".mCSB_draggerContainer"),
                                q = h.children(".mCSB_dragger");
                            if (e.horizontalScroll) {
                                q.data("minDraggerWidth", q.width())
                            } else {
                                q.data("minDraggerHeight", q.height())
                            } if (e.scrollButtons.enable) {
                                if (e.horizontalScroll) {
                                    l.prepend("<a class='mCSB_buttonLeft' oncontextmenu='return false;'></a>").append("<a class='mCSB_buttonRight' oncontextmenu='return false;'></a>")
                                } else {
                                    l.prepend("<a class='mCSB_buttonUp' oncontextmenu='return false;'></a>").append("<a class='mCSB_buttonDown' oncontextmenu='return false;'></a>")
                                }
                            }
                            g.bind("scroll", function() {
                                if (!m.is(".mCS_disabled")) {
                                    g.scrollTop(0).scrollLeft(0)
                                }
                            });
                            m.data({
                                mCS_Init: true,
                                mCustomScrollbarIndex: c(document).data("mCustomScrollbar-index"),
                                horizontalScroll: e.horizontalScroll,
                                scrollInertia: e.scrollInertia,
                                scrollEasing: "mcsEaseOut",
                                mouseWheel: e.mouseWheel,
                                mouseWheelPixels: e.mouseWheelPixels,
                                autoDraggerLength: e.autoDraggerLength,
                                autoHideScrollbar: e.autoHideScrollbar,
                                snapAmount: e.snapAmount,
                                snapOffset: e.snapOffset,
                                scrollButtons_enable: e.scrollButtons.enable,
                                scrollButtons_scrollType: e.scrollButtons.scrollType,
                                scrollButtons_scrollSpeed: e.scrollButtons.scrollSpeed,
                                scrollButtons_scrollAmount: e.scrollButtons.scrollAmount,
                                autoExpandHorizontalScroll: e.advanced.autoExpandHorizontalScroll,
                                autoScrollOnFocus: e.advanced.autoScrollOnFocus,
                                normalizeMouseWheelDelta: e.advanced.normalizeMouseWheelDelta,
                                contentTouchScroll: e.contentTouchScroll,
                                onScrollStart_Callback: e.callbacks.onScrollStart,
                                onScroll_Callback: e.callbacks.onScroll,
                                onTotalScroll_Callback: e.callbacks.onTotalScroll,
                                onTotalScrollBack_Callback: e.callbacks.onTotalScrollBack,
                                onTotalScroll_Offset: e.callbacks.onTotalScrollOffset,
                                onTotalScrollBack_Offset: e.callbacks.onTotalScrollBackOffset,
                                whileScrolling_Callback: e.callbacks.whileScrolling,
                                bindEvent_scrollbar_drag: false,
                                bindEvent_content_touch: false,
                                bindEvent_scrollbar_click: false,
                                bindEvent_mousewheel: false,
                                bindEvent_buttonsContinuous_y: false,
                                bindEvent_buttonsContinuous_x: false,
                                bindEvent_buttonsPixels_y: false,
                                bindEvent_buttonsPixels_x: false,
                                bindEvent_focusin: false,
                                bindEvent_autoHideScrollbar: false,
                                mCSB_buttonScrollRight: false,
                                mCSB_buttonScrollLeft: false,
                                mCSB_buttonScrollDown: false,
                                mCSB_buttonScrollUp: false
                            });
                            if (e.horizontalScroll) {
                                if (m.css("max-width") !== "none") {
                                    if (!e.advanced.updateOnContentResize) {
                                        e.advanced.updateOnContentResize = true
                                    }
                                }
                            } else {
                                if (m.css("max-height") !== "none") {
                                    var s = false,
                                        r = parseInt(m.css("max-height"));
                                    if (m.css("max-height").indexOf("%") >= 0) {
                                        s = r, r = m.parent().height() * s / 100
                                    }
                                    m.css("overflow", "hidden");
                                    g.css("max-height", r)
                                }
                            }
                            m.mCustomScrollbar("update");
                            if (e.advanced.updateOnBrowserResize) {
                                var i, j = c(window).width(),
                                    u = c(window).height();
                                c(window).bind("resize." + m.data("mCustomScrollbarIndex"), function() {
                                    if (i) {
                                        clearTimeout(i)
                                    }
                                    i = setTimeout(function() {
                                        if (!m.is(".mCS_disabled") && !m.is(".mCS_destroyed")) {
                                            var w = c(window).width(),
                                                v = c(window).height();
                                            if (j !== w || u !== v) {
                                                if (m.css("max-height") !== "none" && s) {
                                                    g.css("max-height", m.parent().height() * s / 100)
                                                }
                                                m.mCustomScrollbar("update");
                                                j = w;
                                                u = v
                                            }
                                        }
                                    }, 150)
                                })
                            }
                            if (e.advanced.updateOnContentResize) {
                                var p;
                                if (e.horizontalScroll) {
                                    var n = o.outerWidth()
                                } else {
                                    var n = o.outerHeight()
                                }
                                p = setInterval(function() {
                                    if (e.horizontalScroll) {
                                        if (e.advanced.autoExpandHorizontalScroll) {
                                            o.css({
                                                position: "absolute",
                                                width: "auto"
                                            }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
                                                width: o.outerWidth(),
                                                position: "relative"
                                            }).unwrap()
                                        }
                                        var v = o.outerWidth()
                                    } else {
                                        var v = o.outerHeight()
                                    } if (v != n) {
                                        m.mCustomScrollbar("update");
                                        n = v
                                    }
                                }, 300)
                            }
                        })
                    },
                    update: function() {
                        var n = c(this),
                            k = n.children(".mCustomScrollBox"),
                            q = k.children(".mCSB_container");
                        q.removeClass("mCS_no_scrollbar");
                        n.removeClass("mCS_disabled mCS_destroyed");
                        k.scrollTop(0).scrollLeft(0);
                        var y = k.children(".mCSB_scrollTools"),
                            o = y.children(".mCSB_draggerContainer"),
                            m = o.children(".mCSB_dragger");
                        if (n.data("horizontalScroll")) {
                            var A = y.children(".mCSB_buttonLeft"),
                                t = y.children(".mCSB_buttonRight"),
                                f = k.width();
                            if (n.data("autoExpandHorizontalScroll")) {
                                q.css({
                                    position: "absolute",
                                    width: "auto"
                                }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
                                    width: q.outerWidth(),
                                    position: "relative"
                                }).unwrap()
                            }
                            var z = q.outerWidth()
                        } else {
                            var w = y.children(".mCSB_buttonUp"),
                                g = y.children(".mCSB_buttonDown"),
                                r = k.height(),
                                i = q.outerHeight()
                        } if (i > r && !n.data("horizontalScroll")) {
                            y.css("display", "block");
                            var s = o.height();
                            if (n.data("autoDraggerLength")) {
                                var u = Math.round(r / i * s),
                                    l = m.data("minDraggerHeight");
                                if (u <= l) {
                                    m.css({
                                        height: l
                                    })
                                } else {
                                    if (u >= s - 10) {
                                        var p = s - 10;
                                        m.css({
                                            height: p
                                        })
                                    } else {
                                        m.css({
                                            height: u
                                        })
                                    }
                                }
                                m.children(".mCSB_dragger_bar").css({
                                    "line-height": m.height() + "px"
                                })
                            }
                            var B = m.height(),
                                x = (i - r) / (s - B);
                            n.data("scrollAmount", x).mCustomScrollbar("scrolling", k, q, o, m, w, g, A, t);
                            var D = Math.abs(q.position().top);
                            n.mCustomScrollbar("scrollTo", D, {
                                scrollInertia: 0,
                                trigger: "internal"
                            })
                        } else {
                            if (z > f && n.data("horizontalScroll")) {
                                y.css("display", "block");
                                var h = o.width();
                                if (n.data("autoDraggerLength")) {
                                    var j = Math.round(f / z * h),
                                        C = m.data("minDraggerWidth");
                                    if (j <= C) {
                                        m.css({
                                            width: C
                                        })
                                    } else {
                                        if (j >= h - 10) {
                                            var e = h - 10;
                                            m.css({
                                                width: e
                                            })
                                        } else {
                                            m.css({
                                                width: j
                                            })
                                        }
                                    }
                                }
                                var v = m.width(),
                                    x = (z - f) / (h - v);
                                n.data("scrollAmount", x).mCustomScrollbar("scrolling", k, q, o, m, w, g, A, t);
                                var D = Math.abs(q.position().left);
                                n.mCustomScrollbar("scrollTo", D, {
                                    scrollInertia: 0,
                                    trigger: "internal"
                                })
                            } else {
                                k.unbind("mousewheel focusin");
                                if (n.data("horizontalScroll")) {
                                    m.add(q).css("left", 0)
                                } else {
                                    m.add(q).css("top", 0)
                                }
                                y.css("display", "none");
                                q.addClass("mCS_no_scrollbar");
                                n.data({
                                    bindEvent_mousewheel: false,
                                    bindEvent_focusin: false
                                })
                            }
                        }
                    },
                    scrolling: function(h, p, m, j, w, e, A, v) {
                        var k = c(this);
                        if (!k.data("bindEvent_scrollbar_drag")) {
                            var n, o;
                            if (c.support.msPointer) {
                                j.bind("MSPointerDown", function(H) {
                                    H.preventDefault();
                                    k.data({
                                        on_drag: true
                                    });
                                    j.addClass("mCSB_dragger_onDrag");
                                    var G = c(this),
                                        J = G.offset(),
                                        F = H.originalEvent.pageX - J.left,
                                        I = H.originalEvent.pageY - J.top;
                                    if (F < G.width() && F > 0 && I < G.height() && I > 0) {
                                        n = I;
                                        o = F
                                    }
                                });
                                c(document).bind("MSPointerMove." + k.data("mCustomScrollbarIndex"), function(H) {
                                    H.preventDefault();
                                    if (k.data("on_drag")) {
                                        var G = j,
                                            J = G.offset(),
                                            F = H.originalEvent.pageX - J.left,
                                            I = H.originalEvent.pageY - J.top;
                                        D(n, o, I, F)
                                    }
                                }).bind("MSPointerUp." + k.data("mCustomScrollbarIndex"), function(x) {
                                    k.data({
                                        on_drag: false
                                    });
                                    j.removeClass("mCSB_dragger_onDrag")
                                })
                            } else {
                                j.bind("mousedown touchstart", function(H) {
                                    H.preventDefault();
                                    H.stopImmediatePropagation();
                                    var G = c(this),
                                        K = G.offset(),
                                        F, J;
                                    if (H.type === "touchstart") {
                                        var I = H.originalEvent.touches[0] || H.originalEvent.changedTouches[0];
                                        F = I.pageX - K.left;
                                        J = I.pageY - K.top
                                    } else {
                                        k.data({
                                            on_drag: true
                                        });
                                        j.addClass("mCSB_dragger_onDrag");
                                        F = H.pageX - K.left;
                                        J = H.pageY - K.top
                                    } if (F < G.width() && F > 0 && J < G.height() && J > 0) {
                                        n = J;
                                        o = F
                                    }
                                }).bind("touchmove", function(H) {
                                    H.preventDefault();
                                    H.stopImmediatePropagation();
                                    var K = H.originalEvent.touches[0] || H.originalEvent.changedTouches[0],
                                        G = c(this),
                                        J = G.offset(),
                                        F = K.pageX - J.left,
                                        I = K.pageY - J.top;
                                    D(n, o, I, F)
                                });
                                c(document).bind("mousemove." + k.data("mCustomScrollbarIndex"), function(H) {
                                    if (k.data("on_drag")) {
                                        var G = j,
                                            J = G.offset(),
                                            F = H.pageX - J.left,
                                            I = H.pageY - J.top;
                                        D(n, o, I, F)
                                    }
                                }).bind("mouseup." + k.data("mCustomScrollbarIndex"), function(x) {
                                    k.data({
                                        on_drag: false
                                    });
                                    j.removeClass("mCSB_dragger_onDrag")
                                })
                            }
                            k.data({
                                bindEvent_scrollbar_drag: true
                            })
                        }

                        function D(G, H, I, F) {
                            if (k.data("horizontalScroll")) {
                                k.mCustomScrollbar("scrollTo", (j.position().left - (H)) + F, {
                                    moveDragger: true,
                                    trigger: "internal"
                                })
                            } else {
                                k.mCustomScrollbar("scrollTo", (j.position().top - (G)) + I, {
                                    moveDragger: true,
                                    trigger: "internal"
                                })
                            }
                        }
                        if (c.support.touch && k.data("contentTouchScroll")) {
                            if (!k.data("bindEvent_content_touch")) {
                                var l, B, r, s, u, C, E;
                                p.bind("touchstart", function(x) {
                                    x.stopImmediatePropagation();
                                    l = x.originalEvent.touches[0] || x.originalEvent.changedTouches[0];
                                    B = c(this);
                                    r = B.offset();
                                    u = l.pageX - r.left;
                                    s = l.pageY - r.top;
                                    C = s;
                                    E = u
                                });
                                p.bind("touchmove", function(x) {
                                    x.preventDefault();
                                    x.stopImmediatePropagation();
                                    l = x.originalEvent.touches[0] || x.originalEvent.changedTouches[0];
                                    B = c(this).parent();
                                    r = B.offset();
                                    u = l.pageX - r.left;
                                    s = l.pageY - r.top;
                                    if (k.data("horizontalScroll")) {
                                        k.mCustomScrollbar("scrollTo", E - u, {
                                            trigger: "internal"
                                        })
                                    } else {
                                        k.mCustomScrollbar("scrollTo", C - s, {
                                            trigger: "internal"
                                        })
                                    }
                                })
                            }
                        }
                        if (!k.data("bindEvent_scrollbar_click")) {
                            m.bind("click", function(F) {
                                var x = (F.pageY - m.offset().top) * k.data("scrollAmount"),
                                    y = c(F.target);
                                if (k.data("horizontalScroll")) {
                                    x = (F.pageX - m.offset().left) * k.data("scrollAmount")
                                }
                                if (y.hasClass("mCSB_draggerContainer") || y.hasClass("mCSB_draggerRail")) {
                                    k.mCustomScrollbar("scrollTo", x, {
                                        trigger: "internal",
                                        scrollEasing: "draggerRailEase"
                                    })
                                }
                            });
                            k.data({
                                bindEvent_scrollbar_click: true
                            })
                        }
                        if (k.data("mouseWheel")) {
                            if (!k.data("bindEvent_mousewheel")) {
                                h.bind("mousewheel", function(H, J) {
                                    var G, F = k.data("mouseWheelPixels"),
                                        x = Math.abs(p.position().top),
                                        I = j.position().top,
                                        y = m.height() - j.height();
                                    if (k.data("normalizeMouseWheelDelta")) {
                                        if (J < 0) {
                                            J = -1
                                        } else {
                                            J = 1
                                        }
                                    }
                                    if (F === "auto") {
                                        F = 100 + Math.round(k.data("scrollAmount") / 2)
                                    }
                                    if (k.data("horizontalScroll")) {
                                        I = j.position().left;
                                        y = m.width() - j.width();
                                        x = Math.abs(p.position().left)
                                    }
                                    if ((J > 0 && I !== 0) || (J < 0 && I !== y)) {
                                        H.preventDefault();
                                        H.stopImmediatePropagation()
                                    }
                                    G = x - (J * F);
                                    k.mCustomScrollbar("scrollTo", G, {
                                        trigger: "internal"
                                    })
                                });
                                k.data({
                                    bindEvent_mousewheel: true
                                })
                            }
                        }
                        if (k.data("scrollButtons_enable")) {
                            if (k.data("scrollButtons_scrollType") === "pixels") {
                                if (k.data("horizontalScroll")) {
                                    v.add(A).unbind("mousedown touchstart MSPointerDown mouseup MSPointerUp mouseout MSPointerOut touchend", i, g);
                                    k.data({
                                        bindEvent_buttonsContinuous_x: false
                                    });
                                    if (!k.data("bindEvent_buttonsPixels_x")) {
                                        v.bind("click", function(x) {
                                            x.preventDefault();
                                            q(Math.abs(p.position().left) + k.data("scrollButtons_scrollAmount"))
                                        });
                                        A.bind("click", function(x) {
                                            x.preventDefault();
                                            q(Math.abs(p.position().left) - k.data("scrollButtons_scrollAmount"))
                                        });
                                        k.data({
                                            bindEvent_buttonsPixels_x: true
                                        })
                                    }
                                } else {
                                    e.add(w).unbind("mousedown touchstart MSPointerDown mouseup MSPointerUp mouseout MSPointerOut touchend", i, g);
                                    k.data({
                                        bindEvent_buttonsContinuous_y: false
                                    });
                                    if (!k.data("bindEvent_buttonsPixels_y")) {
                                        e.bind("click", function(x) {
                                            x.preventDefault();
                                            q(Math.abs(p.position().top) + k.data("scrollButtons_scrollAmount"))
                                        });
                                        w.bind("click", function(x) {
                                            x.preventDefault();
                                            q(Math.abs(p.position().top) - k.data("scrollButtons_scrollAmount"))
                                        });
                                        k.data({
                                            bindEvent_buttonsPixels_y: true
                                        })
                                    }
                                }

                                function q(x) {
                                    if (!j.data("preventAction")) {
                                        j.data("preventAction", true);
                                        k.mCustomScrollbar("scrollTo", x, {
                                            trigger: "internal"
                                        })
                                    }
                                }
                            } else {
                                if (k.data("horizontalScroll")) {
                                    v.add(A).unbind("click");
                                    k.data({
                                        bindEvent_buttonsPixels_x: false
                                    });
                                    if (!k.data("bindEvent_buttonsContinuous_x")) {
                                        v.bind("mousedown touchstart MSPointerDown", function(y) {
                                            y.preventDefault();
                                            var x = z();
                                            k.data({
                                                mCSB_buttonScrollRight: setInterval(function() {
                                                    k.mCustomScrollbar("scrollTo", Math.abs(p.position().left) + x, {
                                                        trigger: "internal",
                                                        scrollEasing: "easeOutCirc"
                                                    })
                                                }, 17)
                                            })
                                        });
                                        var i = function(x) {
                                            x.preventDefault();
                                            clearInterval(k.data("mCSB_buttonScrollRight"))
                                        };
                                        v.bind("mouseup touchend MSPointerUp mouseout MSPointerOut", i);
                                        A.bind("mousedown touchstart MSPointerDown", function(y) {
                                            y.preventDefault();
                                            var x = z();
                                            k.data({
                                                mCSB_buttonScrollLeft: setInterval(function() {
                                                    k.mCustomScrollbar("scrollTo", Math.abs(p.position().left) - x, {
                                                        trigger: "internal",
                                                        scrollEasing: "easeOutCirc"
                                                    })
                                                }, 17)
                                            })
                                        });
                                        var g = function(x) {
                                            x.preventDefault();
                                            clearInterval(k.data("mCSB_buttonScrollLeft"))
                                        };
                                        A.bind("mouseup touchend MSPointerUp mouseout MSPointerOut", g);
                                        k.data({
                                            bindEvent_buttonsContinuous_x: true
                                        })
                                    }
                                } else {
                                    e.add(w).unbind("click");
                                    k.data({
                                        bindEvent_buttonsPixels_y: false
                                    });
                                    if (!k.data("bindEvent_buttonsContinuous_y")) {
                                        e.bind("mousedown touchstart MSPointerDown", function(y) {
                                            y.preventDefault();
                                            var x = z();
                                            k.data({
                                                mCSB_buttonScrollDown: setInterval(function() {
                                                    k.mCustomScrollbar("scrollTo", Math.abs(p.position().top) + x, {
                                                        trigger: "internal",
                                                        scrollEasing: "easeOutCirc"
                                                    })
                                                }, 17)
                                            })
                                        });
                                        var t = function(x) {
                                            x.preventDefault();
                                            clearInterval(k.data("mCSB_buttonScrollDown"))
                                        };
                                        e.bind("mouseup touchend MSPointerUp mouseout MSPointerOut", t);
                                        w.bind("mousedown touchstart MSPointerDown", function(y) {
                                            y.preventDefault();
                                            var x = z();
                                            k.data({
                                                mCSB_buttonScrollUp: setInterval(function() {
                                                    k.mCustomScrollbar("scrollTo", Math.abs(p.position().top) - x, {
                                                        trigger: "internal",
                                                        scrollEasing: "easeOutCirc"
                                                    })
                                                }, 17)
                                            })
                                        });
                                        var f = function(x) {
                                            x.preventDefault();
                                            clearInterval(k.data("mCSB_buttonScrollUp"))
                                        };
                                        w.bind("mouseup touchend MSPointerUp mouseout MSPointerOut", f);
                                        k.data({
                                            bindEvent_buttonsContinuous_y: true
                                        })
                                    }
                                }

                                function z() {
                                    var x = k.data("scrollButtons_scrollSpeed");
                                    if (k.data("scrollButtons_scrollSpeed") === "auto") {
                                        x = Math.round((k.data("scrollInertia") + 100) / 40)
                                    }
                                    return x
                                }
                            }
                        }
                        if (k.data("autoScrollOnFocus")) {
                            if (!k.data("bindEvent_focusin")) {
                                h.bind("focusin", function() {
                                    h.scrollTop(0).scrollLeft(0);
                                    var x = c(document.activeElement);
                                    if (x.is("input,textarea,select,button,a[tabindex],area,object")) {
                                        var G = p.position().top,
                                            y = x.position().top,
                                            F = h.height() - x.outerHeight();
                                        if (k.data("horizontalScroll")) {
                                            G = p.position().left;
                                            y = x.position().left;
                                            F = h.width() - x.outerWidth()
                                        }
                                        if (G + y < 0 || G + y > F) {
                                            k.mCustomScrollbar("scrollTo", y, {
                                                trigger: "internal"
                                            })
                                        }
                                    }
                                });
                                k.data({
                                    bindEvent_focusin: true
                                })
                            }
                        }
                        if (k.data("autoHideScrollbar")) {
                            if (!k.data("bindEvent_autoHideScrollbar")) {
                                h.bind("mouseenter", function(x) {
                                    h.addClass("mCS-mouse-over");
                                    d.showScrollbar.call(h.children(".mCSB_scrollTools"))
                                }).bind("mouseleave touchend", function(x) {
                                    h.removeClass("mCS-mouse-over");
                                    if (x.type === "mouseleave") {
                                        d.hideScrollbar.call(h.children(".mCSB_scrollTools"))
                                    }
                                });
                                k.data({
                                    bindEvent_autoHideScrollbar: true
                                })
                            }
                        }
                    },
                    scrollTo: function(e, f) {
                        var i = c(this),
                            o = {
                                moveDragger: false,
                                trigger: "external",
                                callbacks: true,
                                scrollInertia: i.data("scrollInertia"),
                                scrollEasing: i.data("scrollEasing")
                            },
                            f = c.extend(o, f),
                            p, g = i.children(".mCustomScrollBox"),
                            k = g.children(".mCSB_container"),
                            r = g.children(".mCSB_scrollTools"),
                            j = r.children(".mCSB_draggerContainer"),
                            h = j.children(".mCSB_dragger"),
                            t = draggerSpeed = f.scrollInertia,
                            q, s, m, l;
                        if (!k.hasClass("mCS_no_scrollbar")) {
                            i.data({
                                mCS_trigger: f.trigger
                            });
                            if (i.data("mCS_Init")) {
                                f.callbacks = false
                            }
                            if (e || e === 0) {
                                if (typeof(e) === "number") {
                                    if (f.moveDragger) {
                                        p = e;
                                        if (i.data("horizontalScroll")) {
                                            e = h.position().left * i.data("scrollAmount")
                                        } else {
                                            e = h.position().top * i.data("scrollAmount")
                                        }
                                        draggerSpeed = 0
                                    } else {
                                        p = e / i.data("scrollAmount")
                                    }
                                } else {
                                    if (typeof(e) === "string") {
                                        var v;
                                        if (e === "top") {
                                            v = 0
                                        } else {
                                            if (e === "bottom" && !i.data("horizontalScroll")) {
                                                v = k.outerHeight() - g.height()
                                            } else {
                                                if (e === "left") {
                                                    v = 0
                                                } else {
                                                    if (e === "right" && i.data("horizontalScroll")) {
                                                        v = k.outerWidth() - g.width()
                                                    } else {
                                                        if (e === "first") {
                                                            v = i.find(".mCSB_container").find(":first")
                                                        } else {
                                                            if (e === "last") {
                                                                v = i.find(".mCSB_container").find(":last")
                                                            } else {
                                                                v = i.find(e)
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        } if (v.length === 1) {
                                            if (i.data("horizontalScroll")) {
                                                e = v.position().left
                                            } else {
                                                e = v.position().top
                                            }
                                            p = e / i.data("scrollAmount")
                                        } else {
                                            p = e = v
                                        }
                                    }
                                } if (i.data("horizontalScroll")) {
                                    if (i.data("onTotalScrollBack_Offset")) {
                                        s = -i.data("onTotalScrollBack_Offset")
                                    }
                                    if (i.data("onTotalScroll_Offset")) {
                                        l = g.width() - k.outerWidth() + i.data("onTotalScroll_Offset")
                                    }
                                    if (p < 0) {
                                        p = e = 0;
                                        clearInterval(i.data("mCSB_buttonScrollLeft"));
                                        if (!s) {
                                            q = true
                                        }
                                    } else {
                                        if (p >= j.width() - h.width()) {
                                            p = j.width() - h.width();
                                            e = g.width() - k.outerWidth();
                                            clearInterval(i.data("mCSB_buttonScrollRight"));
                                            if (!l) {
                                                m = true
                                            }
                                        } else {
                                            e = -e
                                        }
                                    }
                                    var n = i.data("snapAmount");
                                    if (n) {
                                        e = Math.round(e / n) * n - i.data("snapOffset")
                                    }
                                    d.mTweenAxis.call(this, h[0], "left", Math.round(p), draggerSpeed, f.scrollEasing);
                                    d.mTweenAxis.call(this, k[0], "left", Math.round(e), t, f.scrollEasing, {
                                        onStart: function() {
                                            if (f.callbacks && !i.data("mCS_tweenRunning")) {
                                                u("onScrollStart")
                                            }
                                            if (i.data("autoHideScrollbar")) {
                                                d.showScrollbar.call(r)
                                            }
                                        },
                                        onUpdate: function() {
                                            if (f.callbacks) {
                                                u("whileScrolling")
                                            }
                                        },
                                        onComplete: function() {
                                            if (f.callbacks) {
                                                u("onScroll");
                                                if (q || (s && k.position().left >= s)) {
                                                    u("onTotalScrollBack")
                                                }
                                                if (m || (l && k.position().left <= l)) {
                                                    u("onTotalScroll")
                                                }
                                            }
                                            h.data("preventAction", false);
                                            i.data("mCS_tweenRunning", false);
                                            if (i.data("autoHideScrollbar")) {
                                                if (!g.hasClass("mCS-mouse-over")) {
                                                    d.hideScrollbar.call(r)
                                                }
                                            }
                                        }
                                    })
                                } else {
                                    if (i.data("onTotalScrollBack_Offset")) {
                                        s = -i.data("onTotalScrollBack_Offset")
                                    }
                                    if (i.data("onTotalScroll_Offset")) {
                                        l = g.height() - k.outerHeight() + i.data("onTotalScroll_Offset")
                                    }
                                    if (p < 0) {
                                        p = e = 0;
                                        clearInterval(i.data("mCSB_buttonScrollUp"));
                                        if (!s) {
                                            q = true
                                        }
                                    } else {
                                        if (p >= j.height() - h.height()) {
                                            p = j.height() - h.height();
                                            e = g.height() - k.outerHeight();
                                            clearInterval(i.data("mCSB_buttonScrollDown"));
                                            if (!l) {
                                                m = true
                                            }
                                        } else {
                                            e = -e
                                        }
                                    }
                                    var n = i.data("snapAmount");
                                    if (n) {
                                        e = Math.round(e / n) * n - i.data("snapOffset")
                                    }
                                    d.mTweenAxis.call(this, h[0], "top", Math.round(p), draggerSpeed, f.scrollEasing);
                                    d.mTweenAxis.call(this, k[0], "top", Math.round(e), t, f.scrollEasing, {
                                        onStart: function() {
                                            if (f.callbacks && !i.data("mCS_tweenRunning")) {
                                                u("onScrollStart")
                                            }
                                            if (i.data("autoHideScrollbar")) {
                                                d.showScrollbar.call(r)
                                            }
                                        },
                                        onUpdate: function() {
                                            if (f.callbacks) {
                                                u("whileScrolling")
                                            }
                                        },
                                        onComplete: function() {
                                            if (f.callbacks) {
                                                u("onScroll");
                                                if (q || (s && k.position().top >= s)) {
                                                    u("onTotalScrollBack")
                                                }
                                                if (m || (l && k.position().top <= l)) {
                                                    u("onTotalScroll")
                                                }
                                            }
                                            h.data("preventAction", false);
                                            i.data("mCS_tweenRunning", false);
                                            if (i.data("autoHideScrollbar")) {
                                                if (!g.hasClass("mCS-mouse-over")) {
                                                    d.hideScrollbar.call(r)
                                                }
                                            }
                                        }
                                    })
                                } if (i.data("mCS_Init")) {
                                    i.data({
                                        mCS_Init: false
                                    })
                                }
                            }
                        }

                        function u(w) {
                            this.mcs = {
                                top: k.position().top,
                                left: k.position().left,
                                draggerTop: h.position().top,
                                draggerLeft: h.position().left,
                                topPct: Math.round((100 * Math.abs(k.position().top)) / Math.abs(k.outerHeight() - g.height())),
                                leftPct: Math.round((100 * Math.abs(k.position().left)) / Math.abs(k.outerWidth() - g.width()))
                            };
                            switch (w) {
                                case "onScrollStart":
                                    i.data("mCS_tweenRunning", true).data("onScrollStart_Callback").call(i, this.mcs);
                                    break;
                                case "whileScrolling":
                                    i.data("whileScrolling_Callback").call(i, this.mcs);
                                    break;
                                case "onScroll":
                                    i.data("onScroll_Callback").call(i, this.mcs);
                                    break;
                                case "onTotalScrollBack":
                                    i.data("onTotalScrollBack_Callback").call(i, this.mcs);
                                    break;
                                case "onTotalScroll":
                                    i.data("onTotalScroll_Callback").call(i, this.mcs);
                                    break
                            }
                        }
                    },
                    stop: function() {
                        var g = c(this),
                            e = g.children().children(".mCSB_container"),
                            f = g.children().children().children().children(".mCSB_dragger");
                        d.mTweenAxisStop.call(this, e[0]);
                        d.mTweenAxisStop.call(this, f[0])
                    },
                    disable: function(e) {
                        var j = c(this),
                            f = j.children(".mCustomScrollBox"),
                            h = f.children(".mCSB_container"),
                            g = f.children(".mCSB_scrollTools"),
                            i = g.children().children(".mCSB_dragger");
                        f.unbind("mousewheel focusin mouseenter mouseleave touchend");
                        h.unbind("touchstart touchmove");
                        if (e) {
                            if (j.data("horizontalScroll")) {
                                i.add(h).css("left", 0)
                            } else {
                                i.add(h).css("top", 0)
                            }
                        }
                        g.css("display", "none");
                        h.addClass("mCS_no_scrollbar");
                        j.data({
                            bindEvent_mousewheel: false,
                            bindEvent_focusin: false,
                            bindEvent_content_touch: false,
                            bindEvent_autoHideScrollbar: false
                        }).addClass("mCS_disabled")
                    },
                    destroy: function() {
                        var e = c(this);
                        e.removeClass("mCustomScrollbar _mCS_" + e.data("mCustomScrollbarIndex")).addClass("mCS_destroyed").children().children(".mCSB_container").unwrap().children().unwrap().siblings(".mCSB_scrollTools").remove();
                        c(document).unbind("mousemove." + e.data("mCustomScrollbarIndex") + " mouseup." + e.data("mCustomScrollbarIndex") + " MSPointerMove." + e.data("mCustomScrollbarIndex") + " MSPointerUp." + e.data("mCustomScrollbarIndex"));
                        c(window).unbind("resize." + e.data("mCustomScrollbarIndex"))
                    }
                },
                d = {
                    showScrollbar: function() {
                        this.stop().animate({
                            opacity: 1
                        }, "fast")
                    },
                    hideScrollbar: function() {
                        this.stop().animate({
                            opacity: 0
                        }, "fast")
                    },
                    mTweenAxis: function(g, i, h, f, o, y) {
                        var y = y || {},
                            v = y.onStart || function() {},
                            p = y.onUpdate || function() {},
                            w = y.onComplete || function() {};
                        var n = t(),
                            l, j = 0,
                            r = g.offsetTop,
                            s = g.style;
                        if (i === "left") {
                            r = g.offsetLeft
                        }
                        var m = h - r;
                        q();
                        e();

                        function t() {
                            if (window.performance && window.performance.now) {
                                return window.performance.now()
                            } else {
                                if (window.performance && window.performance.webkitNow) {
                                    return window.performance.webkitNow()
                                } else {
                                    if (Date.now) {
                                        return Date.now()
                                    } else {
                                        return new Date().getTime()
                                    }
                                }
                            }
                        }

                        function x() {
                            if (!j) {
                                v.call()
                            }
                            j = t() - n;
                            u();
                            if (j >= g._time) {
                                g._time = (j > g._time) ? j + l - (j - g._time) : j + l - 1;
                                if (g._time < j + 1) {
                                    g._time = j + 1
                                }
                            }
                            if (g._time < f) {
                                g._id = _request(x)
                            } else {
                                w.call()
                            }
                        }

                        function u() {
                            if (f > 0) {
                                g.currVal = k(g._time, r, m, f, o);
                                s[i] = Math.round(g.currVal) + "px"
                            } else {
                                s[i] = h + "px"
                            }
                            p.call()
                        }

                        function e() {
                            l = 1000 / 60;
                            g._time = j + l;
                            _request = (!window.requestAnimationFrame) ? function(z) {
                                u();
                                return setTimeout(z, 0.01)
                            } : window.requestAnimationFrame;
                            g._id = _request(x)
                        }

                        function q() {
                            if (g._id == null) {
                                return
                            }
                            if (!window.requestAnimationFrame) {
                                clearTimeout(g._id)
                            } else {
                                window.cancelAnimationFrame(g._id)
                            }
                            g._id = null
                        }

                        function k(B, A, F, E, C) {
                            switch (C) {
                                case "linear":
                                    return F * B / E + A;
                                    break;
                                case "easeOutQuad":
                                    B /= E;
                                    return -F * B * (B - 2) + A;
                                    break;
                                case "easeInOutQuad":
                                    B /= E / 2;
                                    if (B < 1) {
                                        return F / 2 * B * B + A
                                    }
                                    B--;
                                    return -F / 2 * (B * (B - 2) - 1) + A;
                                    break;
                                case "easeOutCubic":
                                    B /= E;
                                    B--;
                                    return F * (B * B * B + 1) + A;
                                    break;
                                case "easeOutQuart":
                                    B /= E;
                                    B--;
                                    return -F * (B * B * B * B - 1) + A;
                                    break;
                                case "easeOutQuint":
                                    B /= E;
                                    B--;
                                    return F * (B * B * B * B * B + 1) + A;
                                    break;
                                case "easeOutCirc":
                                    B /= E;
                                    B--;
                                    return F * Math.sqrt(1 - B * B) + A;
                                    break;
                                case "easeOutSine":
                                    return F * Math.sin(B / E * (Math.PI / 2)) + A;
                                    break;
                                case "easeOutExpo":
                                    return F * (-Math.pow(2, -10 * B / E) + 1) + A;
                                    break;
                                case "mcsEaseOut":
                                    var D = (B /= E) * B,
                                        z = D * B;
                                    return A + F * (0.499999999999997 * z * D + -2.5 * D * D + 5.5 * z + -6.5 * D + 4 * B);
                                    break;
                                case "draggerRailEase":
                                    B /= E / 2;
                                    if (B < 1) {
                                        return F / 2 * B * B * B + A
                                    }
                                    B -= 2;
                                    return F / 2 * (B * B * B + 2) + A;
                                    break
                            }
                        }
                    },
                    mTweenAxisStop: function(e) {
                        if (e._id == null) {
                            return
                        }
                        if (!window.requestAnimationFrame) {
                            clearTimeout(e._id)
                        } else {
                            window.cancelAnimationFrame(e._id)
                        }
                        e._id = null
                    },
                    rafPolyfill: function() {
                        var f = ["ms", "moz", "webkit", "o"],
                            e = f.length;
                        while (--e > -1 && !window.requestAnimationFrame) {
                            window.requestAnimationFrame = window[f[e] + "RequestAnimationFrame"];
                            window.cancelAnimationFrame = window[f[e] + "CancelAnimationFrame"] || window[f[e] + "CancelRequestAnimationFrame"]
                        }
                    }
                };
            d.rafPolyfill.call();
            c.support.touch = !!("ontouchstart" in window);
            c.support.msPointer = window.navigator.msPointerEnabled;
            var a = ("https:" == document.location.protocol) ? "https:" : "http:";
            c.event.special.mousewheel || document.write('<script src="' + a + '//cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.0.6/jquery.mousewheel.min.js"><\/script>');
            c.fn.mCustomScrollbar = function(e) {
                if (b[e]) {
                    return b[e].apply(this, Array.prototype.slice.call(arguments, 1))
                } else {
                    if (typeof e === "object" || !e) {
                        return b.init.apply(this, arguments)
                    } else {
                        c.error("Method " + e + " does not exist")
                    }
                }
            }
        })(jQuery);
        /*touchswipe*/
        (function(e) {
            var o = "left",
                n = "right",
                d = "up",
                v = "down",
                c = "in",
                w = "out",
                l = "none",
                r = "auto",
                k = "swipe",
                s = "pinch",
                x = "tap",
                i = "doubletap",
                b = "longtap",
                A = "horizontal",
                t = "vertical",
                h = "all",
                q = 10,
                f = "start",
                j = "move",
                g = "end",
                p = "cancel",
                a = "ontouchstart" in window,
                y = "TouchSwipe";
            var m = {
                fingers: 1,
                threshold: 75,
                cancelThreshold: null,
                pinchThreshold: 20,
                maxTimeThreshold: null,
                fingerReleaseThreshold: 250,
                longTapThreshold: 500,
                doubleTapThreshold: 200,
                swipe: null,
                swipeLeft: null,
                swipeRight: null,
                swipeUp: null,
                swipeDown: null,
                swipeStatus: null,
                pinchIn: null,
                pinchOut: null,
                pinchStatus: null,
                click: null,
                tap: null,
                doubleTap: null,
                longTap: null,
                triggerOnTouchEnd: true,
                triggerOnTouchLeave: false,
                allowPageScroll: "auto",
                fallbackToMouseEvents: true,
                excludedElements: "button, input, select, textarea, a, .noSwipe"
            };
            e.fn.swipe = function(D) {
                var C = e(this),
                    B = C.data(y);
                if (B && typeof D === "string") {
                    if (B[D]) {
                        return B[D].apply(this, Array.prototype.slice.call(arguments, 1))
                    } else {
                        e.error("Method " + D + " does not exist on jQuery.swipe")
                    }
                } else {
                    if (!B && (typeof D === "object" || !D)) {
                        return u.apply(this, arguments)
                    }
                }
                return C
            };
            e.fn.swipe.defaults = m;
            e.fn.swipe.phases = {
                PHASE_START: f,
                PHASE_MOVE: j,
                PHASE_END: g,
                PHASE_CANCEL: p
            };
            e.fn.swipe.directions = {
                LEFT: o,
                RIGHT: n,
                UP: d,
                DOWN: v,
                IN: c,
                OUT: w
            };
            e.fn.swipe.pageScroll = {
                NONE: l,
                HORIZONTAL: A,
                VERTICAL: t,
                AUTO: r
            };
            e.fn.swipe.fingers = {
                ONE: 1,
                TWO: 2,
                THREE: 3,
                ALL: h
            };

            function u(B) {
                if (B && (B.allowPageScroll === undefined && (B.swipe !== undefined || B.swipeStatus !== undefined))) {
                    B.allowPageScroll = l
                }
                if (B.click !== undefined && B.tap === undefined) {
                    B.tap = B.click
                }
                if (!B) {
                    B = {}
                }
                B = e.extend({}, e.fn.swipe.defaults, B);
                return this.each(function() {
                    var D = e(this);
                    var C = D.data(y);
                    if (!C) {
                        C = new z(this, B);
                        D.data(y, C)
                    }
                })
            }

            function z(a0, aq) {
                var av = (a || !aq.fallbackToMouseEvents),
                    G = av ? "touchstart" : "mousedown",
                    au = av ? "touchmove" : "mousemove",
                    R = av ? "touchend" : "mouseup",
                    P = av ? null : "mouseleave",
                    az = "touchcancel";
                var ac = 0,
                    aL = null,
                    Y = 0,
                    aX = 0,
                    aV = 0,
                    D = 1,
                    am = 0,
                    aF = 0,
                    J = null;
                var aN = e(a0);
                var W = "start";
                var T = 0;
                var aM = null;
                var Q = 0,
                    aY = 0,
                    a1 = 0,
                    aa = 0,
                    K = 0;
                var aS = null;
                try {
                    aN.bind(G, aJ);
                    aN.bind(az, a5)
                } catch (ag) {
                    e.error("events not supported " + G + "," + az + " on jQuery.swipe")
                }
                this.enable = function() {
                    aN.bind(G, aJ);
                    aN.bind(az, a5);
                    return aN
                };
                this.disable = function() {
                    aG();
                    return aN
                };
                this.destroy = function() {
                    aG();
                    aN.data(y, null);
                    return aN
                };
                this.option = function(a8, a7) {
                    if (aq[a8] !== undefined) {
                        if (a7 === undefined) {
                            return aq[a8]
                        } else {
                            aq[a8] = a7
                        }
                    } else {
                        e.error("Option " + a8 + " does not exist on jQuery.swipe.options")
                    }
                };

                function aJ(a9) {
                    if (ax()) {
                        return
                    }
                    if (e(a9.target).closest(aq.excludedElements, aN).length > 0) {
                        return
                    }
                    var ba = a9.originalEvent ? a9.originalEvent : a9;
                    var a8, a7 = a ? ba.touches[0] : ba;
                    W = f;
                    if (a) {
                        T = ba.touches.length
                    } else {
                        a9.preventDefault()
                    }
                    ac = 0;
                    aL = null;
                    aF = null;
                    Y = 0;
                    aX = 0;
                    aV = 0;
                    D = 1;
                    am = 0;
                    aM = af();
                    J = X();
                    O();
                    if (!a || (T === aq.fingers || aq.fingers === h) || aT()) {
                        ae(0, a7);
                        Q = ao();
                        if (T == 2) {
                            ae(1, ba.touches[1]);
                            aX = aV = ap(aM[0].start, aM[1].start)
                        }
                        if (aq.swipeStatus || aq.pinchStatus) {
                            a8 = L(ba, W)
                        }
                    } else {
                        a8 = false
                    } if (a8 === false) {
                        W = p;
                        L(ba, W);
                        return a8
                    } else {
                        ak(true)
                    }
                }

                function aZ(ba) {
                    var bd = ba.originalEvent ? ba.originalEvent : ba;
                    if (W === g || W === p || ai()) {
                        return
                    }
                    var a9, a8 = a ? bd.touches[0] : bd;
                    var bb = aD(a8);
                    aY = ao();
                    if (a) {
                        T = bd.touches.length
                    }
                    W = j;
                    if (T == 2) {
                        if (aX == 0) {
                            ae(1, bd.touches[1]);
                            aX = aV = ap(aM[0].start, aM[1].start)
                        } else {
                            aD(bd.touches[1]);
                            aV = ap(aM[0].end, aM[1].end);
                            aF = an(aM[0].end, aM[1].end)
                        }
                        D = a3(aX, aV);
                        am = Math.abs(aX - aV)
                    }
                    if ((T === aq.fingers || aq.fingers === h) || !a || aT()) {
                        aL = aH(bb.start, bb.end);
                        ah(ba, aL);
                        ac = aO(bb.start, bb.end);
                        Y = aI();
                        aE(aL, ac);
                        if (aq.swipeStatus || aq.pinchStatus) {
                            a9 = L(bd, W)
                        }
                        if (!aq.triggerOnTouchEnd || aq.triggerOnTouchLeave) {
                            var a7 = true;
                            if (aq.triggerOnTouchLeave) {
                                var bc = aU(this);
                                a7 = B(bb.end, bc)
                            }
                            if (!aq.triggerOnTouchEnd && a7) {
                                W = ay(j)
                            } else {
                                if (aq.triggerOnTouchLeave && !a7) {
                                    W = ay(g)
                                }
                            } if (W == p || W == g) {
                                L(bd, W)
                            }
                        }
                    } else {
                        W = p;
                        L(bd, W)
                    } if (a9 === false) {
                        W = p;
                        L(bd, W)
                    }
                }

                function I(a7) {
                    var a8 = a7.originalEvent;
                    if (a) {
                        if (a8.touches.length > 0) {
                            C();
                            return true
                        }
                    }
                    if (ai()) {
                        T = aa
                    }
                    a7.preventDefault();
                    aY = ao();
                    Y = aI();
                    if (a6()) {
                        W = p;
                        L(a8, W)
                    } else {
                        if (aq.triggerOnTouchEnd || (aq.triggerOnTouchEnd == false && W === j)) {
                            W = g;
                            L(a8, W)
                        } else {
                            if (!aq.triggerOnTouchEnd && a2()) {
                                W = g;
                                aB(a8, W, x)
                            } else {
                                if (W === j) {
                                    W = p;
                                    L(a8, W)
                                }
                            }
                        }
                    }
                    ak(false)
                }

                function a5() {
                    T = 0;
                    aY = 0;
                    Q = 0;
                    aX = 0;
                    aV = 0;
                    D = 1;
                    O();
                    ak(false)
                }

                function H(a7) {
                    var a8 = a7.originalEvent;
                    if (aq.triggerOnTouchLeave) {
                        W = ay(g);
                        L(a8, W)
                    }
                }

                function aG() {
                    aN.unbind(G, aJ);
                    aN.unbind(az, a5);
                    aN.unbind(au, aZ);
                    aN.unbind(R, I);
                    if (P) {
                        aN.unbind(P, H)
                    }
                    ak(false)
                }

                function ay(bb) {
                    var ba = bb;
                    var a9 = aw();
                    var a8 = aj();
                    var a7 = a6();
                    if (!a9 || a7) {
                        ba = p
                    } else {
                        if (a8 && bb == j && (!aq.triggerOnTouchEnd || aq.triggerOnTouchLeave)) {
                            ba = g
                        } else {
                            if (!a8 && bb == g && aq.triggerOnTouchLeave) {
                                ba = p
                            }
                        }
                    }
                    return ba
                }

                function L(a9, a7) {
                    var a8 = undefined;
                    if (F() || S()) {
                        a8 = aB(a9, a7, k)
                    } else {
                        if ((M() || aT()) && a8 !== false) {
                            a8 = aB(a9, a7, s)
                        }
                    } if (aC() && a8 !== false) {
                        a8 = aB(a9, a7, i)
                    } else {
                        if (al() && a8 !== false) {
                            a8 = aB(a9, a7, b)
                        } else {
                            if (ad() && a8 !== false) {
                                a8 = aB(a9, a7, x)
                            }
                        }
                    } if (a7 === p) {
                        a5(a9)
                    }
                    if (a7 === g) {
                        if (a) {
                            if (a9.touches.length == 0) {
                                a5(a9)
                            }
                        } else {
                            a5(a9)
                        }
                    }
                    return a8
                }

                function aB(ba, a7, a9) {
                    var a8 = undefined;
                    if (a9 == k) {
                        aN.trigger("swipeStatus", [a7, aL || null, ac || 0, Y || 0, T]);
                        if (aq.swipeStatus) {
                            a8 = aq.swipeStatus.call(aN, ba, a7, aL || null, ac || 0, Y || 0, T);
                            if (a8 === false) {
                                return false
                            }
                        }
                        if (a7 == g && aR()) {
                            aN.trigger("swipe", [aL, ac, Y, T]);
                            if (aq.swipe) {
                                a8 = aq.swipe.call(aN, ba, aL, ac, Y, T);
                                if (a8 === false) {
                                    return false
                                }
                            }
                            switch (aL) {
                                case o:
                                    aN.trigger("swipeLeft", [aL, ac, Y, T]);
                                    if (aq.swipeLeft) {
                                        a8 = aq.swipeLeft.call(aN, ba, aL, ac, Y, T)
                                    }
                                    break;
                                case n:
                                    aN.trigger("swipeRight", [aL, ac, Y, T]);
                                    if (aq.swipeRight) {
                                        a8 = aq.swipeRight.call(aN, ba, aL, ac, Y, T)
                                    }
                                    break;
                                case d:
                                    aN.trigger("swipeUp", [aL, ac, Y, T]);
                                    if (aq.swipeUp) {
                                        a8 = aq.swipeUp.call(aN, ba, aL, ac, Y, T)
                                    }
                                    break;
                                case v:
                                    aN.trigger("swipeDown", [aL, ac, Y, T]);
                                    if (aq.swipeDown) {
                                        a8 = aq.swipeDown.call(aN, ba, aL, ac, Y, T)
                                    }
                                    break
                            }
                        }
                    }
                    if (a9 == s) {
                        aN.trigger("pinchStatus", [a7, aF || null, am || 0, Y || 0, T, D]);
                        if (aq.pinchStatus) {
                            a8 = aq.pinchStatus.call(aN, ba, a7, aF || null, am || 0, Y || 0, T, D);
                            if (a8 === false) {
                                return false
                            }
                        }
                        if (a7 == g && a4()) {
                            switch (aF) {
                                case c:
                                    aN.trigger("pinchIn", [aF || null, am || 0, Y || 0, T, D]);
                                    if (aq.pinchIn) {
                                        a8 = aq.pinchIn.call(aN, ba, aF || null, am || 0, Y || 0, T, D)
                                    }
                                    break;
                                case w:
                                    aN.trigger("pinchOut", [aF || null, am || 0, Y || 0, T, D]);
                                    if (aq.pinchOut) {
                                        a8 = aq.pinchOut.call(aN, ba, aF || null, am || 0, Y || 0, T, D)
                                    }
                                    break
                            }
                        }
                    }
                    if (a9 == x) {
                        if (a7 === p || a7 === g) {
                            clearTimeout(aS);
                            if (V() && !E()) {
                                K = ao();
                                aS = setTimeout(e.proxy(function() {
                                    K = null;
                                    aN.trigger("tap", [ba.target]);
                                    if (aq.tap) {
                                        a8 = aq.tap.call(aN, ba, ba.target)
                                    }
                                }, this), aq.doubleTapThreshold)
                            } else {
                                K = null;
                                aN.trigger("tap", [ba.target]);
                                if (aq.tap) {
                                    a8 = aq.tap.call(aN, ba, ba.target)
                                }
                            }
                        }
                    } else {
                        if (a9 == i) {
                            if (a7 === p || a7 === g) {
                                clearTimeout(aS);
                                K = null;
                                aN.trigger("doubletap", [ba.target]);
                                if (aq.doubleTap) {
                                    a8 = aq.doubleTap.call(aN, ba, ba.target)
                                }
                            }
                        } else {
                            if (a9 == b) {
                                if (a7 === p || a7 === g) {
                                    clearTimeout(aS);
                                    K = null;
                                    aN.trigger("longtap", [ba.target]);
                                    if (aq.longTap) {
                                        a8 = aq.longTap.call(aN, ba, ba.target)
                                    }
                                }
                            }
                        }
                    }
                    return a8
                }

                function aj() {
                    var a7 = true;
                    if (aq.threshold !== null) {
                        a7 = ac >= aq.threshold
                    }
                    return a7
                }

                function a6() {
                    var a7 = false;
                    if (aq.cancelThreshold !== null && aL !== null) {
                        a7 = (aP(aL) - ac) >= aq.cancelThreshold
                    }
                    return a7
                }

                function ab() {
                    if (aq.pinchThreshold !== null) {
                        return am >= aq.pinchThreshold
                    }
                    return true
                }

                function aw() {
                    var a7;
                    if (aq.maxTimeThreshold) {
                        if (Y >= aq.maxTimeThreshold) {
                            a7 = false
                        } else {
                            a7 = true
                        }
                    } else {
                        a7 = true
                    }
                    return a7
                }

                function ah(a7, a8) {
                    if (aq.allowPageScroll === l || aT()) {
                        a7.preventDefault()
                    } else {
                        var a9 = aq.allowPageScroll === r;
                        switch (a8) {
                            case o:
                                if ((aq.swipeLeft && a9) || (!a9 && aq.allowPageScroll != A)) {
                                    a7.preventDefault()
                                }
                                break;
                            case n:
                                if ((aq.swipeRight && a9) || (!a9 && aq.allowPageScroll != A)) {
                                    a7.preventDefault()
                                }
                                break;
                            case d:
                                if ((aq.swipeUp && a9) || (!a9 && aq.allowPageScroll != t)) {
                                    a7.preventDefault()
                                }
                                break;
                            case v:
                                if ((aq.swipeDown && a9) || (!a9 && aq.allowPageScroll != t)) {
                                    a7.preventDefault()
                                }
                                break
                        }
                    }
                }

                function a4() {
                    var a8 = aK();
                    var a7 = U();
                    var a9 = ab();
                    return a8 && a7 && a9
                }

                function aT() {
                    return !!(aq.pinchStatus || aq.pinchIn || aq.pinchOut)
                }

                function M() {
                    return !!(a4() && aT())
                }

                function aR() {
                    var ba = aw();
                    var bc = aj();
                    var a9 = aK();
                    var a7 = U();
                    var a8 = a6();
                    var bb = !a8 && a7 && a9 && bc && ba;
                    return bb
                }

                function S() {
                    return !!(aq.swipe || aq.swipeStatus || aq.swipeLeft || aq.swipeRight || aq.swipeUp || aq.swipeDown)
                }

                function F() {
                    return !!(aR() && S())
                }

                function aK() {
                    return ((T === aq.fingers || aq.fingers === h) || !a)
                }

                function U() {
                    return aM[0].end.x !== 0
                }

                function a2() {
                    return !!(aq.tap)
                }

                function V() {
                    return !!(aq.doubleTap)
                }

                function aQ() {
                    return !!(aq.longTap)
                }

                function N() {
                    if (K == null) {
                        return false
                    }
                    var a7 = ao();
                    return (V() && ((a7 - K) <= aq.doubleTapThreshold))
                }

                function E() {
                    return N()
                }

                function at() {
                    return ((T === 1 || !a) && (isNaN(ac) || ac === 0))
                }

                function aW() {
                    return ((Y > aq.longTapThreshold) && (ac < q))
                }

                function ad() {
                    return !!(at() && a2())
                }

                function aC() {
                    return !!(N() && V())
                }

                function al() {
                    return !!(aW() && aQ())
                }

                function C() {
                    a1 = ao();
                    aa = event.touches.length + 1
                }

                function O() {
                    a1 = 0;
                    aa = 0
                }

                function ai() {
                    var a7 = false;
                    if (a1) {
                        var a8 = ao() - a1;
                        if (a8 <= aq.fingerReleaseThreshold) {
                            a7 = true
                        }
                    }
                    return a7
                }

                function ax() {
                    return !!(aN.data(y + "_intouch") === true)
                }

                function ak(a7) {
                    if (a7 === true) {
                        aN.bind(au, aZ);
                        aN.bind(R, I);
                        if (P) {
                            aN.bind(P, H)
                        }
                    } else {
                        aN.unbind(au, aZ, false);
                        aN.unbind(R, I, false);
                        if (P) {
                            aN.unbind(P, H, false)
                        }
                    }
                    aN.data(y + "_intouch", a7 === true)
                }

                function ae(a8, a7) {
                    var a9 = a7.identifier !== undefined ? a7.identifier : 0;
                    aM[a8].identifier = a9;
                    aM[a8].start.x = aM[a8].end.x = a7.pageX || a7.clientX;
                    aM[a8].start.y = aM[a8].end.y = a7.pageY || a7.clientY;
                    return aM[a8]
                }

                function aD(a7) {
                    var a9 = a7.identifier !== undefined ? a7.identifier : 0;
                    var a8 = Z(a9);
                    a8.end.x = a7.pageX || a7.clientX;
                    a8.end.y = a7.pageY || a7.clientY;
                    return a8
                }

                function Z(a8) {
                    for (var a7 = 0; a7 < aM.length; a7++) {
                        if (aM[a7].identifier == a8) {
                            return aM[a7]
                        }
                    }
                }

                function af() {
                    var a7 = [];
                    for (var a8 = 0; a8 <= 5; a8++) {
                        a7.push({
                            start: {
                                x: 0,
                                y: 0
                            },
                            end: {
                                x: 0,
                                y: 0
                            },
                            identifier: 0
                        })
                    }
                    return a7
                }

                function aE(a7, a8) {
                    a8 = Math.max(a8, aP(a7));
                    J[a7].distance = a8
                }

                function aP(a7) {
                    return J[a7].distance
                }

                function X() {
                    var a7 = {};
                    a7[o] = ar(o);
                    a7[n] = ar(n);
                    a7[d] = ar(d);
                    a7[v] = ar(v);
                    return a7
                }

                function ar(a7) {
                    return {
                        direction: a7,
                        distance: 0
                    }
                }

                function aI() {
                    return aY - Q
                }

                function ap(ba, a9) {
                    var a8 = Math.abs(ba.x - a9.x);
                    var a7 = Math.abs(ba.y - a9.y);
                    return Math.round(Math.sqrt(a8 * a8 + a7 * a7))
                }

                function a3(a7, a8) {
                    var a9 = (a8 / a7) * 1;
                    return a9.toFixed(2)
                }

                function an() {
                    if (D < 1) {
                        return w
                    } else {
                        return c
                    }
                }

                function aO(a8, a7) {
                    return Math.round(Math.sqrt(Math.pow(a7.x - a8.x, 2) + Math.pow(a7.y - a8.y, 2)))
                }

                function aA(ba, a8) {
                    var a7 = ba.x - a8.x;
                    var bc = a8.y - ba.y;
                    var a9 = Math.atan2(bc, a7);
                    var bb = Math.round(a9 * 180 / Math.PI);
                    if (bb < 0) {
                        bb = 360 - Math.abs(bb)
                    }
                    return bb
                }

                function aH(a8, a7) {
                    var a9 = aA(a8, a7);
                    if ((a9 <= 45) && (a9 >= 0)) {
                        return o
                    } else {
                        if ((a9 <= 360) && (a9 >= 315)) {
                            return o
                        } else {
                            if ((a9 >= 135) && (a9 <= 225)) {
                                return n
                            } else {
                                if ((a9 > 45) && (a9 < 135)) {
                                    return v
                                } else {
                                    return d
                                }
                            }
                        }
                    }
                }

                function ao() {
                    var a7 = new Date();
                    return a7.getTime()
                }

                function aU(a7) {
                    a7 = e(a7);
                    var a9 = a7.offset();
                    var a8 = {
                        left: a9.left,
                        right: a9.left + a7.outerWidth(),
                        top: a9.top,
                        bottom: a9.top + a7.outerHeight()
                    };
                    return a8
                }

                function B(a7, a8) {
                    return (a7.x > a8.left && a7.x < a8.right && a7.y > a8.top && a7.y < a8.bottom)
                }
            }
        })(jQuery);





    });