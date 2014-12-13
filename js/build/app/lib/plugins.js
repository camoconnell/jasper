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




        /*!
         * Socialite v2.0
         * http://socialitejs.com
         * Copyright (c) 2011 David Bushell
         * Dual-licensed under the BSD or MIT licenses: http://socialitejs.com/license.txt
         */
        window.Socialite = function(a, b, c) {
            "use strict";
            var d = 0,
                e = [],
                f = {},
                g = {},
                h = /^($|loaded|complete)/,
                i = a.encodeURIComponent,
                j = {
                    settings: {},
                    trim: function(a) {
                        return a.trim ? a.trim() : a.replace(/^\s+|\s+$/g, "")
                    },
                    hasClass: function(a, b) {
                        return (" " + a.className + " ").indexOf(" " + b + " ") !== -1
                    },
                    addClass: function(a, b) {
                        j.hasClass(a, b) || (a.className = a.className === "" ? b : a.className + " " + b)
                    },
                    removeClass: function(a, b) {
                        a.className = j.trim(" " + a.className + " ".replace(" " + b + " ", " "))
                    },
                    extendObject: function(a, b, d) {
                        for (var e in b) {
                            var f = a[e] !== c;
                            if (f && typeof b[e] == "object") j.extendObject(a[e], b[e], d);
                            else if (d || !f) a[e] = b[e]
                        }
                    },
                    getElements: function(a, b) {
                        var c = 0,
                            d = [],
                            e = !!a.getElementsByClassName,
                            f = e ? a.getElementsByClassName(b) : a.getElementsByTagName("*");
                        for (; c < f.length; c++)(e || j.hasClass(f[c], b)) && d.push(f[c]);
                        return d
                    },
                    getDataAttributes: function(a, b, c) {
                        var d = 0,
                            e = "",
                            f = {},
                            g = a.attributes;
                        for (; d < g.length; d++) {
                            var h = g[d].name,
                                j = g[d].value;
                            j.length && h.indexOf("data-") === 0 && (b && (h = h.substring(5)), c ? f[h] = j : e += i(h) + "=" + i(j) + "&")
                        }
                        return c ? f : e
                    },
                    copyDataAttributes: function(a, b, c, d) {
                        var e = j.getDataAttributes(a, c, !0);
                        for (var f in e) b.setAttribute(d ? f.replace(/-/g, "_") : f, e[f])
                    },
                    createIframe: function(a, c) {
                        var d = b.createElement("iframe");
                        return d.style.cssText = "overflow: hidden; border: none;", j.extendObject(d, {
                            src: a,
                            allowtransparency: "true",
                            frameborder: "0",
                            scrolling: "no"
                        }, !0), c && (d.onload = d.onreadystatechange = function() {
                            h.test(d.readyState || "") && (d.onload = d.onreadystatechange = null, j.activateInstance(c))
                        }), d
                    },
                    networkReady: function(a) {
                        return f[a] ? f[a].loaded : c
                    },
                    appendNetwork: function(a) {
                        if (!a || a.appended) return;
                        if (typeof a.append == "function" && a.append(a) === !1) {
                            a.appended = a.loaded = !0, j.activateAll(a);
                            return
                        }
                        a.script && (a.el = b.createElement("script"), j.extendObject(a.el, a.script, !0), a.el.async = !0, a.el.onload = a.el.onreadystatechange = function() {
                            if (h.test(a.el.readyState || "")) {
                                a.el.onload = a.el.onreadystatechange = null, a.loaded = !0;
                                if (typeof a.onload == "function" && a.onload(a) === !1) return;
                                j.activateAll(a)
                            }
                        }, b.body.appendChild(a.el)), a.appended = !0
                    },
                    removeNetwork: function(a) {
                        return j.networkReady(a.name) ? (a.el.parentNode.removeChild(a.el), !(a.appended = a.loaded = !1)) : !1
                    },
                    reloadNetwork: function(a) {
                        var b = f[a];
                        b && j.removeNetwork(b) && j.appendNetwork(b)
                    },
                    createInstance: function(a, b) {
                        var f = !0,
                            g = {
                                el: a,
                                uid: d++,
                                widget: b
                            };
                        return e.push(g), b.process !== c && (f = typeof b.process == "function" ? b.process(g) : !1), f && j.processInstance(g), g.el.setAttribute("data-socialite", g.uid), g.el.className = "socialite " + b.name + " socialite-instance", g
                    },
                    processInstance: function(a) {
                        var c = a.el;
                        a.el = b.createElement("div"), a.el.className = c.className, j.copyDataAttributes(c, a.el), c.nodeName.toLowerCase() === "a" && !c.getAttribute("data-default-href") && a.el.setAttribute("data-default-href", c.getAttribute("href"));
                        var d = c.parentNode;
                        d.insertBefore(a.el, c), d.removeChild(c)
                    },
                    activateInstance: function(a) {
                        if (a && !a.loaded) return a.loaded = !0, typeof a.widget.activate == "function" && a.widget.activate(a), j.addClass(a.el, "socialite-loaded"), a.onload ? a.onload(a.el) : null
                    },
                    activateAll: function(a) {
                        typeof a == "string" && (a = f[a]);
                        for (var b = 0; b < e.length; b++) {
                            var c = e[b];
                            c.init && c.widget.network === a && j.activateInstance(c)
                        }
                    },
                    load: function(a, c, d, f, h) {
                        a = a && typeof a == "object" && a.nodeType === 1 ? a : b;
                        if (!c || typeof c != "object") {
                            j.load(a, j.getElements(a, "socialite"), d, f, h);
                            return
                        }
                        var i;
                        if (/Array/.test(Object.prototype.toString.call(c))) {
                            for (i = 0; i < c.length; i++) j.load(a, c[i], d, f, h);
                            return
                        }
                        if (c.nodeType !== 1) return;
                        if (!d || !g[d]) {
                            d = null;
                            var k = c.className.split(" ");
                            for (i = 0; i < k.length; i++)
                                if (g[k[i]]) {
                                    d = k[i];
                                    break
                                }
                            if (!d) return
                        }
                        var l, m = g[d],
                            n = parseInt(c.getAttribute("data-socialite"), 10);
                        if (!isNaN(n)) {
                            for (i = 0; i < e.length; i++)
                                if (e[i].uid === n) {
                                    l = e[i];
                                    break
                                }
                        } else l = j.createInstance(c, m); if (h || !l) return;
                        l.init || (l.init = !0, l.onload = typeof f == "function" ? f : null, m.init(l)), m.network.appended ? j.networkReady(m.network.name) && j.activateInstance(l) : j.appendNetwork(m.network)
                    },
                    activate: function(b, c, d) {
                        a.Socialite.load(null, b, c, d)
                    },
                    process: function(b, c, d) {
                        a.Socialite.load(b, c, d, null, !0)
                    },
                    network: function(a, b) {
                        f[a] = {
                            name: a,
                            el: null,
                            appended: !1,
                            loaded: !1,
                            widgets: {}
                        }, b && j.extendObject(f[a], b)
                    },
                    widget: function(a, b, c) {
                        c.name = a + "-" + b;
                        if (!f[a] || g[c.name]) return;
                        c.network = f[a], f[a].widgets[b] = g[c.name] = c
                    },
                    setup: function(a) {
                        j.extendObject(j.settings, a, !0)
                    }
                };
            return j
        }(window, window.document),
        function(a, b, c, d) {
            c.setup({
                facebook: {
                    lang: "en_GB",
                    appId: null
                },
                twitter: {
                    lang: "en"
                },
                googleplus: {
                    lang: "en-GB"
                }
            }), c.network("facebook", {
                script: {
                    src: "//connect.facebook.net/{{language}}/all.js",
                    id: "facebook-jssdk"
                },
                append: function(d) {
                    var e = b.createElement("div"),
                        f = c.settings.facebook,
                        g = {
                            onlike: "edge.create",
                            onunlike: "edge.remove",
                            onsend: "message.send"
                        };
                    e.id = "fb-root", b.body.appendChild(e), d.script.src = d.script.src.replace("{{language}}", f.lang), a.fbAsyncInit = function() {
                        a.FB.init({
                            appId: f.appId,
                            xfbml: !0
                        });
                        for (var b in g) typeof f[b] == "function" && a.FB.Event.subscribe(g[b], f[b])
                    }
                }
            }), c.widget("facebook", "like", {
                init: function(d) {
                    var e = b.createElement("div");
                    e.className = "fb-like", c.copyDataAttributes(d.el, e), d.el.appendChild(e), a.FB && a.FB.XFBML && a.FB.XFBML.parse(d.el)
                }
            }), c.network("twitter", {
                script: {
                    src: "//platform.twitter.com/widgets.js",
                    id: "twitter-wjs",
                    charset: "utf-8"
                },
                append: function() {
                    var b = typeof a.twttr != "object",
                        d = c.settings.twitter,
                        e = ["click", "tweet", "retweet", "favorite", "follow"];
                    return b && (a.twttr = t = {
                        _e: [],
                        ready: function(a) {
                            t._e.push(a)
                        }
                    }), a.twttr.ready(function(a) {
                        for (var b = 0; b < e.length; b++) {
                            var f = e[b];
                            typeof d["on" + f] == "function" && a.events.bind(f, d["on" + f])
                        }
                        c.activateAll("twitter")
                    }), b
                }
            });
            var e = function(a) {
                    var d = b.createElement("a");
                    d.className = a.widget.name + "-button", c.copyDataAttributes(a.el, d), d.setAttribute("href", a.el.getAttribute("data-default-href")), d.setAttribute("data-lang", a.el.getAttribute("data-lang") || c.settings.twitter.lang), a.el.appendChild(d)
                },
                f = function(b) {
                    a.twttr && typeof a.twttr.widgets == "object" && typeof a.twttr.widgets.load == "function" && a.twttr.widgets.load()
                };
            c.widget("twitter", "share", {
                init: e,
                activate: f
            }), c.widget("twitter", "follow", {
                init: e,
                activate: f
            }), c.widget("twitter", "hashtag", {
                init: e,
                activate: f
            }), c.widget("twitter", "mention", {
                init: e,
                activate: f
            }), c.widget("twitter", "embed", {
                process: function(a) {
                    a.innerEl = a.el, a.innerEl.getAttribute("data-lang") || a.innerEl.setAttribute("data-lang", c.settings.twitter.lang), a.el = b.createElement("div"), a.el.className = a.innerEl.className, a.innerEl.className = "", a.innerEl.parentNode.insertBefore(a.el, a.innerEl), a.el.appendChild(a.innerEl)
                },
                init: function(a) {
                    a.innerEl.className = "twitter-tweet"
                },
                activate: f
            }), c.network("googleplus", {
                script: {
                    src: "//apis.google.com/js/plusone.js"
                },
                append: function(b) {
                    if (a.gapi) return !1;
                    a.___gcfg = {
                        lang: c.settings.googleplus.lang,
                        parsetags: "explicit"
                    }
                }
            });
            var g = function(a) {
                    var d = b.createElement("div");
                    d.className = "g-" + a.widget.gtype, c.copyDataAttributes(a.el, d), a.el.appendChild(d), a.gplusEl = d
                },
                h = function(a, b) {
                    return typeof b != "function" ? null : function(c) {
                        b(a.el, c)
                    }
                },
                i = function(b) {
                    var d = b.widget.gtype;
                    if (a.gapi && a.gapi[d]) {
                        var e = c.settings.googleplus,
                            f = c.getDataAttributes(b.el, !0, !0),
                            g = ["onstartinteraction", "onendinteraction", "callback"];
                        for (var i = 0; i < g.length; i++) f[g[i]] = h(b, e[g[i]]);
                        a.gapi[d].render(b.gplusEl, f)
                    }
                };
            c.widget("googleplus", "one", {
                init: g,
                activate: i,
                gtype: "plusone"
            }), c.widget("googleplus", "share", {
                init: g,
                activate: i,
                gtype: "plus"
            }), c.widget("googleplus", "badge", {
                init: g,
                activate: i,
                gtype: "plus"
            }), c.network("linkedin", {
                script: {
                    src: "//platform.linkedin.com/in.js"
                }
            });
            var j = function(d) {
                var e = b.createElement("script");
                e.type = "IN/" + d.widget.intype, c.copyDataAttributes(d.el, e), d.el.appendChild(e), typeof a.IN == "object" && typeof a.IN.parse == "function" && (a.IN.parse(d.el), c.activateInstance(d))
            };
            c.widget("linkedin", "share", {
                init: j,
                intype: "Share"
            }), c.widget("linkedin", "recommend", {
                init: j,
                intype: "RecommendProduct"
            })
        }(window, window.document, window.Socialite),
        function() {
            var a = window._socialite;
            if (/Array/.test(Object.prototype.toString.call(a)))
                for (var b = 0, c = a.length; b < c; b++) typeof a[b] == "function" && a[b]()
        }();



        /**
         * Copyright (c) 2007-2012 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
         * Dual licensed under MIT and GPL.
         * @author Ariel Flesler
         * @version 1.4.3.1
         */
        (function($) {
            var h = $.scrollTo = function(a, b, c) {
                $(window).scrollTo(a, b, c)
            };
            h.defaults = {
                axis: 'xy',
                duration: parseFloat($.fn.jquery) >= 1.3 ? 0 : 1,
                limit: true
            };
            h.window = function(a) {
                return $(window)._scrollable()
            };
            $.fn._scrollable = function() {
                return this.map(function() {
                    var a = this,
                        isWin = !a.nodeName || $.inArray(a.nodeName.toLowerCase(), ['iframe', '#document', 'html', 'body']) != -1;
                    if (!isWin) return a;
                    var b = (a.contentWindow || a).document || a.ownerDocument || a;
                    return /webkit/i.test(navigator.userAgent) || b.compatMode == 'BackCompat' ? b.body : b.documentElement
                })
            };
            $.fn.scrollTo = function(e, f, g) {
                if (typeof f == 'object') {
                    g = f;
                    f = 0
                }
                if (typeof g == 'function') g = {
                    onAfter: g
                };
                if (e == 'max') e = 9e9;
                g = $.extend({}, h.defaults, g);
                f = f || g.duration;
                g.queue = g.queue && g.axis.length > 1;
                if (g.queue) f /= 2;
                g.offset = both(g.offset);
                g.over = both(g.over);
                return this._scrollable().each(function() {
                    if (e == null) return;
                    var d = this,
                        $elem = $(d),
                        targ = e,
                        toff, attr = {},
                        win = $elem.is('html,body');
                    switch (typeof targ) {
                        case 'number':
                        case 'string':
                            if (/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(targ)) {
                                targ = both(targ);
                                break
                            }
                            targ = $(targ, this);
                            if (!targ.length) return;
                        case 'object':
                            if (targ.is || targ.style) toff = (targ = $(targ)).offset()
                    }
                    $.each(g.axis.split(''), function(i, a) {
                        var b = a == 'x' ? 'Left' : 'Top',
                            pos = b.toLowerCase(),
                            key = 'scroll' + b,
                            old = d[key],
                            max = h.max(d, a);
                        if (toff) {
                            attr[key] = toff[pos] + (win ? 0 : old - $elem.offset()[pos]);
                            if (g.margin) {
                                attr[key] -= parseInt(targ.css('margin' + b)) || 0;
                                attr[key] -= parseInt(targ.css('border' + b + 'Width')) || 0
                            }
                            attr[key] += g.offset[pos] || 0;
                            if (g.over[pos]) attr[key] += targ[a == 'x' ? 'width' : 'height']() * g.over[pos]
                        } else {
                            var c = targ[pos];
                            attr[key] = c.slice && c.slice(-1) == '%' ? parseFloat(c) / 100 * max : c
                        } if (g.limit && /^\d+$/.test(attr[key])) attr[key] = attr[key] <= 0 ? 0 : Math.min(attr[key], max);
                        if (!i && g.queue) {
                            if (old != attr[key]) animate(g.onAfterFirst);
                            delete attr[key]
                        }
                    });
                    animate(g.onAfter);

                    function animate(a) {
                        $elem.animate(attr, f, g.easing, a && function() {
                            a.call(this, e, g)
                        })
                    }
                }).end()
            };
            h.max = function(a, b) {
                var c = b == 'x' ? 'Width' : 'Height',
                    scroll = 'scroll' + c;
                if (!$(a).is('html,body')) return a[scroll] - $(a)[c.toLowerCase()]();
                var d = 'client' + c,
                    html = a.ownerDocument.documentElement,
                    body = a.ownerDocument.body;
                return Math.max(html[scroll], body[scroll]) - Math.min(html[d], body[d])
            };

            function both(a) {
                return typeof a == 'object' ? a : {
                    top: a,
                    left: a
                }
            }
        })(jQuery);





        /*! jQuery Color v@2.1.2 http://github.com/jquery/jquery-color | jquery.org/license */
        (function(a, b) {
            function m(a, b, c) {
                var d = h[b.type] || {};
                return a == null ? c || !b.def ? null : b.def : (a = d.floor ? ~~a : parseFloat(a), isNaN(a) ? b.def : d.mod ? (a + d.mod) % d.mod : 0 > a ? 0 : d.max < a ? d.max : a)
            }

            function n(b) {
                var c = f(),
                    d = c._rgba = [];
                return b = b.toLowerCase(), l(e, function(a, e) {
                    var f, h = e.re.exec(b),
                        i = h && e.parse(h),
                        j = e.space || "rgba";
                    if (i) return f = c[j](i), c[g[j].cache] = f[g[j].cache], d = c._rgba = f._rgba, !1
                }), d.length ? (d.join() === "0,0,0,0" && a.extend(d, k.transparent), c) : k[b]
            }

            function o(a, b, c) {
                return c = (c + 1) % 1, c * 6 < 1 ? a + (b - a) * c * 6 : c * 2 < 1 ? b : c * 3 < 2 ? a + (b - a) * (2 / 3 - c) * 6 : a
            }
            var c = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
                d = /^([\-+])=\s*(\d+\.?\d*)/,
                e = [{
                    re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    parse: function(a) {
                        return [a[1], a[2], a[3], a[4]]
                    }
                }, {
                    re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    parse: function(a) {
                        return [a[1] * 2.55, a[2] * 2.55, a[3] * 2.55, a[4]]
                    }
                }, {
                    re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                    parse: function(a) {
                        return [parseInt(a[1], 16), parseInt(a[2], 16), parseInt(a[3], 16)]
                    }
                }, {
                    re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                    parse: function(a) {
                        return [parseInt(a[1] + a[1], 16), parseInt(a[2] + a[2], 16), parseInt(a[3] + a[3], 16)]
                    }
                }, {
                    re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    space: "hsla",
                    parse: function(a) {
                        return [a[1], a[2] / 100, a[3] / 100, a[4]]
                    }
                }],
                f = a.Color = function(b, c, d, e) {
                    return new a.Color.fn.parse(b, c, d, e)
                },
                g = {
                    rgba: {
                        props: {
                            red: {
                                idx: 0,
                                type: "byte"
                            },
                            green: {
                                idx: 1,
                                type: "byte"
                            },
                            blue: {
                                idx: 2,
                                type: "byte"
                            }
                        }
                    },
                    hsla: {
                        props: {
                            hue: {
                                idx: 0,
                                type: "degrees"
                            },
                            saturation: {
                                idx: 1,
                                type: "percent"
                            },
                            lightness: {
                                idx: 2,
                                type: "percent"
                            }
                        }
                    }
                },
                h = {
                    "byte": {
                        floor: !0,
                        max: 255
                    },
                    percent: {
                        max: 1
                    },
                    degrees: {
                        mod: 360,
                        floor: !0
                    }
                },
                i = f.support = {},
                j = a("<p>")[0],
                k, l = a.each;
            j.style.cssText = "background-color:rgba(1,1,1,.5)", i.rgba = j.style.backgroundColor.indexOf("rgba") > -1, l(g, function(a, b) {
                b.cache = "_" + a, b.props.alpha = {
                    idx: 3,
                    type: "percent",
                    def: 1
                }
            }), f.fn = a.extend(f.prototype, {
                parse: function(c, d, e, h) {
                    if (c === b) return this._rgba = [null, null, null, null], this;
                    if (c.jquery || c.nodeType) c = a(c).css(d), d = b;
                    var i = this,
                        j = a.type(c),
                        o = this._rgba = [];
                    d !== b && (c = [c, d, e, h], j = "array");
                    if (j === "string") return this.parse(n(c) || k._default);
                    if (j === "array") return l(g.rgba.props, function(a, b) {
                        o[b.idx] = m(c[b.idx], b)
                    }), this;
                    if (j === "object") return c instanceof f ? l(g, function(a, b) {
                        c[b.cache] && (i[b.cache] = c[b.cache].slice())
                    }) : l(g, function(b, d) {
                        var e = d.cache;
                        l(d.props, function(a, b) {
                            if (!i[e] && d.to) {
                                if (a === "alpha" || c[a] == null) return;
                                i[e] = d.to(i._rgba)
                            }
                            i[e][b.idx] = m(c[a], b, !0)
                        }), i[e] && a.inArray(null, i[e].slice(0, 3)) < 0 && (i[e][3] = 1, d.from && (i._rgba = d.from(i[e])))
                    }), this
                },
                is: function(a) {
                    var b = f(a),
                        c = !0,
                        d = this;
                    return l(g, function(a, e) {
                        var f, g = b[e.cache];
                        return g && (f = d[e.cache] || e.to && e.to(d._rgba) || [], l(e.props, function(a, b) {
                            if (g[b.idx] != null) return c = g[b.idx] === f[b.idx], c
                        })), c
                    }), c
                },
                _space: function() {
                    var a = [],
                        b = this;
                    return l(g, function(c, d) {
                        b[d.cache] && a.push(c)
                    }), a.pop()
                },
                transition: function(a, b) {
                    var c = f(a),
                        d = c._space(),
                        e = g[d],
                        i = this.alpha() === 0 ? f("transparent") : this,
                        j = i[e.cache] || e.to(i._rgba),
                        k = j.slice();
                    return c = c[e.cache], l(e.props, function(a, d) {
                        var e = d.idx,
                            f = j[e],
                            g = c[e],
                            i = h[d.type] || {};
                        if (g === null) return;
                        f === null ? k[e] = g : (i.mod && (g - f > i.mod / 2 ? f += i.mod : f - g > i.mod / 2 && (f -= i.mod)), k[e] = m((g - f) * b + f, d))
                    }), this[d](k)
                },
                blend: function(b) {
                    if (this._rgba[3] === 1) return this;
                    var c = this._rgba.slice(),
                        d = c.pop(),
                        e = f(b)._rgba;
                    return f(a.map(c, function(a, b) {
                        return (1 - d) * e[b] + d * a
                    }))
                },
                toRgbaString: function() {
                    var b = "rgba(",
                        c = a.map(this._rgba, function(a, b) {
                            return a == null ? b > 2 ? 1 : 0 : a
                        });
                    return c[3] === 1 && (c.pop(), b = "rgb("), b + c.join() + ")"
                },
                toHslaString: function() {
                    var b = "hsla(",
                        c = a.map(this.hsla(), function(a, b) {
                            return a == null && (a = b > 2 ? 1 : 0), b && b < 3 && (a = Math.round(a * 100) + "%"), a
                        });
                    return c[3] === 1 && (c.pop(), b = "hsl("), b + c.join() + ")"
                },
                toHexString: function(b) {
                    var c = this._rgba.slice(),
                        d = c.pop();
                    return b && c.push(~~(d * 255)), "#" + a.map(c, function(a) {
                        return a = (a || 0).toString(16), a.length === 1 ? "0" + a : a
                    }).join("")
                },
                toString: function() {
                    return this._rgba[3] === 0 ? "transparent" : this.toRgbaString()
                }
            }), f.fn.parse.prototype = f.fn, g.hsla.to = function(a) {
                if (a[0] == null || a[1] == null || a[2] == null) return [null, null, null, a[3]];
                var b = a[0] / 255,
                    c = a[1] / 255,
                    d = a[2] / 255,
                    e = a[3],
                    f = Math.max(b, c, d),
                    g = Math.min(b, c, d),
                    h = f - g,
                    i = f + g,
                    j = i * .5,
                    k, l;
                return g === f ? k = 0 : b === f ? k = 60 * (c - d) / h + 360 : c === f ? k = 60 * (d - b) / h + 120 : k = 60 * (b - c) / h + 240, h === 0 ? l = 0 : j <= .5 ? l = h / i : l = h / (2 - i), [Math.round(k) % 360, l, j, e == null ? 1 : e]
            }, g.hsla.from = function(a) {
                if (a[0] == null || a[1] == null || a[2] == null) return [null, null, null, a[3]];
                var b = a[0] / 360,
                    c = a[1],
                    d = a[2],
                    e = a[3],
                    f = d <= .5 ? d * (1 + c) : d + c - d * c,
                    g = 2 * d - f;
                return [Math.round(o(g, f, b + 1 / 3) * 255), Math.round(o(g, f, b) * 255), Math.round(o(g, f, b - 1 / 3) * 255), e]
            }, l(g, function(c, e) {
                var g = e.props,
                    h = e.cache,
                    i = e.to,
                    j = e.from;
                f.fn[c] = function(c) {
                    i && !this[h] && (this[h] = i(this._rgba));
                    if (c === b) return this[h].slice();
                    var d, e = a.type(c),
                        k = e === "array" || e === "object" ? c : arguments,
                        n = this[h].slice();
                    return l(g, function(a, b) {
                        var c = k[e === "object" ? a : b.idx];
                        c == null && (c = n[b.idx]), n[b.idx] = m(c, b)
                    }), j ? (d = f(j(n)), d[h] = n, d) : f(n)
                }, l(g, function(b, e) {
                    if (f.fn[b]) return;
                    f.fn[b] = function(f) {
                        var g = a.type(f),
                            h = b === "alpha" ? this._hsla ? "hsla" : "rgba" : c,
                            i = this[h](),
                            j = i[e.idx],
                            k;
                        return g === "undefined" ? j : (g === "function" && (f = f.call(this, j), g = a.type(f)), f == null && e.empty ? this : (g === "string" && (k = d.exec(f), k && (f = j + parseFloat(k[2]) * (k[1] === "+" ? 1 : -1))), i[e.idx] = f, this[h](i)))
                    }
                })
            }), f.hook = function(b) {
                var c = b.split(" ");
                l(c, function(b, c) {
                    a.cssHooks[c] = {
                        set: function(b, d) {
                            var e, g, h = "";
                            if (d !== "transparent" && (a.type(d) !== "string" || (e = n(d)))) {
                                d = f(e || d);
                                if (!i.rgba && d._rgba[3] !== 1) {
                                    g = c === "backgroundColor" ? b.parentNode : b;
                                    while ((h === "" || h === "transparent") && g && g.style) try {
                                        h = a.css(g, "backgroundColor"), g = g.parentNode
                                    } catch (j) {}
                                    d = d.blend(h && h !== "transparent" ? h : "_default")
                                }
                                d = d.toRgbaString()
                            }
                            try {
                                b.style[c] = d
                            } catch (j) {}
                        }
                    }, a.fx.step[c] = function(b) {
                        b.colorInit || (b.start = f(b.elem, c), b.end = f(b.end), b.colorInit = !0), a.cssHooks[c].set(b.elem, b.start.transition(b.end, b.pos))
                    }
                })
            }, f.hook(c), a.cssHooks.borderColor = {
                expand: function(a) {
                    var b = {};
                    return l(["Top", "Right", "Bottom", "Left"], function(c, d) {
                        b["border" + d + "Color"] = a
                    }), b
                }
            }, k = a.Color.names = {
                aqua: "#00ffff",
                black: "#000000",
                blue: "#0000ff",
                fuchsia: "#ff00ff",
                gray: "#808080",
                green: "#008000",
                lime: "#00ff00",
                maroon: "#800000",
                navy: "#000080",
                olive: "#808000",
                purple: "#800080",
                red: "#ff0000",
                silver: "#c0c0c0",
                teal: "#008080",
                white: "#ffffff",
                yellow: "#ffff00",
                transparent: [null, null, null, 0],
                _default: "#ffffff"
            }
        })(jQuery);



        /**
         * Isotope v1.5.25
         * An exquisite jQuery plugin for magical layouts
         * http://isotope.metafizzy.co
         *
         * Commercial use requires one-time license fee
         * http://metafizzy.co/#licenses
         *
         * Copyright 2012 David DeSandro / Metafizzy
         */
        (function(a, b, c) {
            "use strict";
            var d = a.document,
                e = a.Modernizr,
                f = function(a) {
                    return a.charAt(0).toUpperCase() + a.slice(1)
                },
                g = "Moz Webkit O Ms".split(" "),
                h = function(a) {
                    var b = d.documentElement.style,
                        c;
                    if (typeof b[a] == "string") return a;
                    a = f(a);
                    for (var e = 0, h = g.length; e < h; e++) {
                        c = g[e] + a;
                        if (typeof b[c] == "string") return c
                    }
                },
                i = h("transform"),
                j = h("transitionProperty"),
                k = {
                    csstransforms: function() {
                        return !!i
                    },
                    csstransforms3d: function() {
                        var a = !!h("perspective");
                        if (a) {
                            var c = " -o- -moz- -ms- -webkit- -khtml- ".split(" "),
                                d = "@media (" + c.join("transform-3d),(") + "modernizr)",
                                e = b("<style>" + d + "{#modernizr{height:3px}}" + "</style>").appendTo("head"),
                                f = b('<div id="modernizr" />').appendTo("html");
                            a = f.height() === 3, f.remove(), e.remove()
                        }
                        return a
                    },
                    csstransitions: function() {
                        return !!j
                    }
                },
                l;
            if (e)
                for (l in k) e.hasOwnProperty(l) || e.addTest(l, k[l]);
            else {
                e = a.Modernizr = {
                    _version: "1.6ish: miniModernizr for Isotope"
                };
                var m = " ",
                    n;
                for (l in k) n = k[l](), e[l] = n, m += " " + (n ? "" : "no-") + l;
                b("html").addClass(m)
            } if (e.csstransforms) {
                var o = e.csstransforms3d ? {
                        translate: function(a) {
                            return "translate3d(" + a[0] + "px, " + a[1] + "px, 0) "
                        },
                        scale: function(a) {
                            return "scale3d(" + a + ", " + a + ", 1) "
                        }
                    } : {
                        translate: function(a) {
                            return "translate(" + a[0] + "px, " + a[1] + "px) "
                        },
                        scale: function(a) {
                            return "scale(" + a + ") "
                        }
                    },
                    p = function(a, c, d) {
                        var e = b.data(a, "isoTransform") || {},
                            f = {},
                            g, h = {},
                            j;
                        f[c] = d, b.extend(e, f);
                        for (g in e) j = e[g], h[g] = o[g](j);
                        var k = h.translate || "",
                            l = h.scale || "",
                            m = k + l;
                        b.data(a, "isoTransform", e), a.style[i] = m
                    };
                b.cssNumber.scale = !0, b.cssHooks.scale = {
                    set: function(a, b) {
                        p(a, "scale", b)
                    },
                    get: function(a, c) {
                        var d = b.data(a, "isoTransform");
                        return d && d.scale ? d.scale : 1
                    }
                }, b.fx.step.scale = function(a) {
                    b.cssHooks.scale.set(a.elem, a.now + a.unit)
                }, b.cssNumber.translate = !0, b.cssHooks.translate = {
                    set: function(a, b) {
                        p(a, "translate", b)
                    },
                    get: function(a, c) {
                        var d = b.data(a, "isoTransform");
                        return d && d.translate ? d.translate : [0, 0]
                    }
                }
            }
            var q, r;
            e.csstransitions && (q = {
                WebkitTransitionProperty: "webkitTransitionEnd",
                MozTransitionProperty: "transitionend",
                OTransitionProperty: "oTransitionEnd otransitionend",
                transitionProperty: "transitionend"
            }[j], r = h("transitionDuration"));
            var s = b.event,
                t = b.event.handle ? "handle" : "dispatch",
                u;
            s.special.smartresize = {
                setup: function() {
                    b(this).bind("resize", s.special.smartresize.handler)
                },
                teardown: function() {
                    b(this).unbind("resize", s.special.smartresize.handler)
                },
                handler: function(a, b) {
                    var c = this,
                        d = arguments;
                    a.type = "smartresize", u && clearTimeout(u), u = setTimeout(function() {
                        s[t].apply(c, d)
                    }, b === "execAsap" ? 0 : 100)
                }
            }, b.fn.smartresize = function(a) {
                return a ? this.bind("smartresize", a) : this.trigger("smartresize", ["execAsap"])
            }, b.Isotope = function(a, c, d) {
                this.element = b(c), this._create(a), this._init(d)
            };
            var v = ["width", "height"],
                w = b(a);
            b.Isotope.settings = {
                resizable: !0,
                layoutMode: "masonry",
                containerClass: "isotope",
                itemClass: "isotope-item",
                hiddenClass: "isotope-hidden",
                hiddenStyle: {
                    opacity: 0,
                    scale: .001
                },
                visibleStyle: {
                    opacity: 1,
                    scale: 1
                },
                containerStyle: {
                    position: "relative",
                    overflow: "hidden"
                },
                animationEngine: "best-available",
                animationOptions: {
                    queue: !1,
                    duration: 800
                },
                sortBy: "original-order",
                sortAscending: !0,
                resizesContainer: !0,
                transformsEnabled: !0,
                itemPositionDataEnabled: !1
            }, b.Isotope.prototype = {
                _create: function(a) {
                    this.options = b.extend({}, b.Isotope.settings, a), this.styleQueue = [], this.elemCount = 0;
                    var c = this.element[0].style;
                    this.originalStyle = {};
                    var d = v.slice(0);
                    for (var e in this.options.containerStyle) d.push(e);
                    for (var f = 0, g = d.length; f < g; f++) e = d[f], this.originalStyle[e] = c[e] || "";
                    this.element.css(this.options.containerStyle), this._updateAnimationEngine(), this._updateUsingTransforms();
                    var h = {
                        "original-order": function(a, b) {
                            return b.elemCount++, b.elemCount
                        },
                        random: function() {
                            return Math.random()
                        }
                    };
                    this.options.getSortData = b.extend(this.options.getSortData, h), this.reloadItems(), this.offset = {
                        left: parseInt(this.element.css("padding-left") || 0, 10),
                        top: parseInt(this.element.css("padding-top") || 0, 10)
                    };
                    var i = this;
                    setTimeout(function() {
                        i.element.addClass(i.options.containerClass)
                    }, 0), this.options.resizable && w.bind("smartresize.isotope", function() {
                        i.resize()
                    }), this.element.delegate("." + this.options.hiddenClass, "click", function() {
                        return !1
                    })
                },
                _getAtoms: function(a) {
                    var b = this.options.itemSelector,
                        c = b ? a.filter(b).add(a.find(b)) : a,
                        d = {
                            position: "absolute"
                        };
                    return c = c.filter(function(a, b) {
                        return b.nodeType === 1
                    }), this.usingTransforms && (d.left = 0, d.top = 0), c.css(d).addClass(this.options.itemClass), this.updateSortData(c, !0), c
                },
                _init: function(a) {
                    this.$filteredAtoms = this._filter(this.$allAtoms), this._sort(), this.reLayout(a)
                },
                option: function(a) {
                    if (b.isPlainObject(a)) {
                        this.options = b.extend(!0, this.options, a);
                        var c;
                        for (var d in a) c = "_update" + f(d), this[c] && this[c]()
                    }
                },
                _updateAnimationEngine: function() {
                    var a = this.options.animationEngine.toLowerCase().replace(/[ _\-]/g, ""),
                        b;
                    switch (a) {
                        case "css":
                        case "none":
                            b = !1;
                            break;
                        case "jquery":
                            b = !0;
                            break;
                        default:
                            b = !e.csstransitions
                    }
                    this.isUsingJQueryAnimation = b, this._updateUsingTransforms()
                },
                _updateTransformsEnabled: function() {
                    this._updateUsingTransforms()
                },
                _updateUsingTransforms: function() {
                    var a = this.usingTransforms = this.options.transformsEnabled && e.csstransforms && e.csstransitions && !this.isUsingJQueryAnimation;
                    a || (delete this.options.hiddenStyle.scale, delete this.options.visibleStyle.scale), this.getPositionStyles = a ? this._translate : this._positionAbs
                },
                _filter: function(a) {
                    var b = this.options.filter === "" ? "*" : this.options.filter;
                    if (!b) return a;
                    var c = this.options.hiddenClass,
                        d = "." + c,
                        e = a.filter(d),
                        f = e;
                    if (b !== "*") {
                        f = e.filter(b);
                        var g = a.not(d).not(b).addClass(c);
                        this.styleQueue.push({
                            $el: g,
                            style: this.options.hiddenStyle
                        })
                    }
                    return this.styleQueue.push({
                        $el: f,
                        style: this.options.visibleStyle
                    }), f.removeClass(c), a.filter(b)
                },
                updateSortData: function(a, c) {
                    var d = this,
                        e = this.options.getSortData,
                        f, g;
                    a.each(function() {
                        f = b(this), g = {};
                        for (var a in e)!c && a === "original-order" ? g[a] = b.data(this, "isotope-sort-data")[a] : g[a] = e[a](f, d);
                        b.data(this, "isotope-sort-data", g)
                    })
                },
                _sort: function() {
                    var a = this.options.sortBy,
                        b = this._getSorter,
                        c = this.options.sortAscending ? 1 : -1,
                        d = function(d, e) {
                            var f = b(d, a),
                                g = b(e, a);
                            return f === g && a !== "original-order" && (f = b(d, "original-order"), g = b(e, "original-order")), (f > g ? 1 : f < g ? -1 : 0) * c
                        };
                    this.$filteredAtoms.sort(d)
                },
                _getSorter: function(a, c) {
                    return b.data(a, "isotope-sort-data")[c]
                },
                _translate: function(a, b) {
                    return {
                        translate: [a, b]
                    }
                },
                _positionAbs: function(a, b) {
                    return {
                        left: a,
                        top: b
                    }
                },
                _pushPosition: function(a, b, c) {
                    b = Math.round(b + this.offset.left), c = Math.round(c + this.offset.top);
                    var d = this.getPositionStyles(b, c);
                    this.styleQueue.push({
                        $el: a,
                        style: d
                    }), this.options.itemPositionDataEnabled && a.data("isotope-item-position", {
                        x: b,
                        y: c
                    })
                },
                layout: function(a, b) {
                    var c = this.options.layoutMode;
                    this["_" + c + "Layout"](a);
                    if (this.options.resizesContainer) {
                        var d = this["_" + c + "GetContainerSize"]();
                        this.styleQueue.push({
                            $el: this.element,
                            style: d
                        })
                    }
                    this._processStyleQueue(a, b), this.isLaidOut = !0
                },
                _processStyleQueue: function(a, c) {
                    var d = this.isLaidOut ? this.isUsingJQueryAnimation ? "animate" : "css" : "css",
                        f = this.options.animationOptions,
                        g = this.options.onLayout,
                        h, i, j, k;
                    i = function(a, b) {
                        b.$el[d](b.style, f)
                    };
                    if (this._isInserting && this.isUsingJQueryAnimation) i = function(a, b) {
                        h = b.$el.hasClass("no-transition") ? "css" : d, b.$el[h](b.style, f)
                    };
                    else if (c || g || f.complete) {
                        var l = !1,
                            m = [c, g, f.complete],
                            n = this;
                        j = !0, k = function() {
                            if (l) return;
                            var b;
                            for (var c = 0, d = m.length; c < d; c++) b = m[c], typeof b == "function" && b.call(n.element, a, n);
                            l = !0
                        };
                        if (this.isUsingJQueryAnimation && d === "animate") f.complete = k, j = !1;
                        else if (e.csstransitions) {
                            var o = 0,
                                p = this.styleQueue[0],
                                s = p && p.$el,
                                t;
                            while (!s || !s.length) {
                                t = this.styleQueue[o++];
                                if (!t) return;
                                s = t.$el
                            }
                            var u = parseFloat(getComputedStyle(s[0])[r]);
                            u > 0 && (i = function(a, b) {
                                b.$el[d](b.style, f).one(q, k)
                            }, j = !1)
                        }
                    }
                    b.each(this.styleQueue, i), j && k(), this.styleQueue = []
                },
                resize: function() {
                    this["_" + this.options.layoutMode + "ResizeChanged"]() && this.reLayout()
                },
                reLayout: function(a) {
                    this["_" + this.options.layoutMode + "Reset"](), this.layout(this.$filteredAtoms, a)
                },
                addItems: function(a, b) {
                    var c = this._getAtoms(a);
                    this.$allAtoms = this.$allAtoms.add(c), b && b(c)
                },
                insert: function(a, b) {
                    this.element.append(a);
                    var c = this;
                    this.addItems(a, function(a) {
                        var d = c._filter(a);
                        c._addHideAppended(d), c._sort(), c.reLayout(), c._revealAppended(d, b)
                    })
                },
                appended: function(a, b) {
                    var c = this;
                    this.addItems(a, function(a) {
                        c._addHideAppended(a), c.layout(a), c._revealAppended(a, b)
                    })
                },
                _addHideAppended: function(a) {
                    this.$filteredAtoms = this.$filteredAtoms.add(a), a.addClass("no-transition"), this._isInserting = !0, this.styleQueue.push({
                        $el: a,
                        style: this.options.hiddenStyle
                    })
                },
                _revealAppended: function(a, b) {
                    var c = this;
                    setTimeout(function() {
                        a.removeClass("no-transition"), c.styleQueue.push({
                            $el: a,
                            style: c.options.visibleStyle
                        }), c._isInserting = !1, c._processStyleQueue(a, b)
                    }, 10)
                },
                reloadItems: function() {
                    this.$allAtoms = this._getAtoms(this.element.children())
                },
                remove: function(a, b) {
                    this.$allAtoms = this.$allAtoms.not(a), this.$filteredAtoms = this.$filteredAtoms.not(a);
                    var c = this,
                        d = function() {
                            a.remove(), b && b.call(c.element)
                        };
                    a.filter(":not(." + this.options.hiddenClass + ")").length ? (this.styleQueue.push({
                        $el: a,
                        style: this.options.hiddenStyle
                    }), this._sort(), this.reLayout(d)) : d()
                },
                shuffle: function(a) {
                    this.updateSortData(this.$allAtoms), this.options.sortBy = "random", this._sort(), this.reLayout(a)
                },
                destroy: function() {
                    var a = this.usingTransforms,
                        b = this.options;
                    this.$allAtoms.removeClass(b.hiddenClass + " " + b.itemClass).each(function() {
                        var b = this.style;
                        b.position = "", b.top = "", b.left = "", b.opacity = "", a && (b[i] = "")
                    });
                    var c = this.element[0].style;
                    for (var d in this.originalStyle) c[d] = this.originalStyle[d];
                    this.element.unbind(".isotope").undelegate("." + b.hiddenClass, "click").removeClass(b.containerClass).removeData("isotope"), w.unbind(".isotope")
                },
                _getSegments: function(a) {
                    var b = this.options.layoutMode,
                        c = a ? "rowHeight" : "columnWidth",
                        d = a ? "height" : "width",
                        e = a ? "rows" : "cols",
                        g = this.element[d](),
                        h, i = this.options[b] && this.options[b][c] || this.$filteredAtoms["outer" + f(d)](!0) || g;
                    h = Math.floor(g / i), h = Math.max(h, 1), this[b][e] = h, this[b][c] = i
                },
                _checkIfSegmentsChanged: function(a) {
                    var b = this.options.layoutMode,
                        c = a ? "rows" : "cols",
                        d = this[b][c];
                    return this._getSegments(a), this[b][c] !== d
                },
                _masonryReset: function() {
                    this.masonry = {}, this._getSegments();
                    var a = this.masonry.cols;
                    this.masonry.colYs = [];
                    while (a--) this.masonry.colYs.push(0)
                },
                _masonryLayout: function(a) {
                    var c = this,
                        d = c.masonry;
                    a.each(function() {
                        var a = b(this),
                            e = Math.ceil(a.outerWidth(!0) / d.columnWidth);
                        e = Math.min(e, d.cols);
                        if (e === 1) c._masonryPlaceBrick(a, d.colYs);
                        else {
                            var f = d.cols + 1 - e,
                                g = [],
                                h, i;
                            for (i = 0; i < f; i++) h = d.colYs.slice(i, i + e), g[i] = Math.max.apply(Math, h);
                            c._masonryPlaceBrick(a, g)
                        }
                    })
                },
                _masonryPlaceBrick: function(a, b) {
                    var c = Math.min.apply(Math, b),
                        d = 0;
                    for (var e = 0, f = b.length; e < f; e++)
                        if (b[e] === c) {
                            d = e;
                            break
                        }
                    var g = this.masonry.columnWidth * d,
                        h = c;
                    this._pushPosition(a, g, h);
                    var i = c + a.outerHeight(!0),
                        j = this.masonry.cols + 1 - f;
                    for (e = 0; e < j; e++) this.masonry.colYs[d + e] = i
                },
                _masonryGetContainerSize: function() {
                    var a = Math.max.apply(Math, this.masonry.colYs);
                    return {
                        height: a
                    }
                },
                _masonryResizeChanged: function() {
                    return this._checkIfSegmentsChanged()
                },
                _fitRowsReset: function() {
                    this.fitRows = {
                        x: 0,
                        y: 0,
                        height: 0
                    }
                },
                _fitRowsLayout: function(a) {
                    var c = this,
                        d = this.element.width(),
                        e = this.fitRows;
                    a.each(function() {
                        var a = b(this),
                            f = a.outerWidth(!0),
                            g = a.outerHeight(!0);
                        e.x !== 0 && f + e.x > d && (e.x = 0, e.y = e.height), c._pushPosition(a, e.x, e.y), e.height = Math.max(e.y + g, e.height), e.x += f
                    })
                },
                _fitRowsGetContainerSize: function() {
                    return {
                        height: this.fitRows.height
                    }
                },
                _fitRowsResizeChanged: function() {
                    return !0
                },
                _cellsByRowReset: function() {
                    this.cellsByRow = {
                        index: 0
                    }, this._getSegments(), this._getSegments(!0)
                },
                _cellsByRowLayout: function(a) {
                    var c = this,
                        d = this.cellsByRow;
                    a.each(function() {
                        var a = b(this),
                            e = d.index % d.cols,
                            f = Math.floor(d.index / d.cols),
                            g = (e + .5) * d.columnWidth - a.outerWidth(!0) / 2,
                            h = (f + .5) * d.rowHeight - a.outerHeight(!0) / 2;
                        c._pushPosition(a, g, h), d.index++
                    })
                },
                _cellsByRowGetContainerSize: function() {
                    return {
                        height: Math.ceil(this.$filteredAtoms.length / this.cellsByRow.cols) * this.cellsByRow.rowHeight + this.offset.top
                    }
                },
                _cellsByRowResizeChanged: function() {
                    return this._checkIfSegmentsChanged()
                },
                _straightDownReset: function() {
                    this.straightDown = {
                        y: 0
                    }
                },
                _straightDownLayout: function(a) {
                    var c = this;
                    a.each(function(a) {
                        var d = b(this);
                        c._pushPosition(d, 0, c.straightDown.y), c.straightDown.y += d.outerHeight(!0)
                    })
                },
                _straightDownGetContainerSize: function() {
                    return {
                        height: this.straightDown.y
                    }
                },
                _straightDownResizeChanged: function() {
                    return !0
                },
                _masonryHorizontalReset: function() {
                    this.masonryHorizontal = {}, this._getSegments(!0);
                    var a = this.masonryHorizontal.rows;
                    this.masonryHorizontal.rowXs = [];
                    while (a--) this.masonryHorizontal.rowXs.push(0)
                },
                _masonryHorizontalLayout: function(a) {
                    var c = this,
                        d = c.masonryHorizontal;
                    a.each(function() {
                        var a = b(this),
                            e = Math.ceil(a.outerHeight(!0) / d.rowHeight);
                        e = Math.min(e, d.rows);
                        if (e === 1) c._masonryHorizontalPlaceBrick(a, d.rowXs);
                        else {
                            var f = d.rows + 1 - e,
                                g = [],
                                h, i;
                            for (i = 0; i < f; i++) h = d.rowXs.slice(i, i + e), g[i] = Math.max.apply(Math, h);
                            c._masonryHorizontalPlaceBrick(a, g)
                        }
                    })
                },
                _masonryHorizontalPlaceBrick: function(a, b) {
                    var c = Math.min.apply(Math, b),
                        d = 0;
                    for (var e = 0, f = b.length; e < f; e++)
                        if (b[e] === c) {
                            d = e;
                            break
                        }
                    var g = c,
                        h = this.masonryHorizontal.rowHeight * d;
                    this._pushPosition(a, g, h);
                    var i = c + a.outerWidth(!0),
                        j = this.masonryHorizontal.rows + 1 - f;
                    for (e = 0; e < j; e++) this.masonryHorizontal.rowXs[d + e] = i
                },
                _masonryHorizontalGetContainerSize: function() {
                    var a = Math.max.apply(Math, this.masonryHorizontal.rowXs);
                    return {
                        width: a
                    }
                },
                _masonryHorizontalResizeChanged: function() {
                    return this._checkIfSegmentsChanged(!0)
                },
                _fitColumnsReset: function() {
                    this.fitColumns = {
                        x: 0,
                        y: 0,
                        width: 0
                    }
                },
                _fitColumnsLayout: function(a) {
                    var c = this,
                        d = this.element.height(),
                        e = this.fitColumns;
                    a.each(function() {
                        var a = b(this),
                            f = a.outerWidth(!0),
                            g = a.outerHeight(!0);
                        e.y !== 0 && g + e.y > d && (e.x = e.width, e.y = 0), c._pushPosition(a, e.x, e.y), e.width = Math.max(e.x + f, e.width), e.y += g
                    })
                },
                _fitColumnsGetContainerSize: function() {
                    return {
                        width: this.fitColumns.width
                    }
                },
                _fitColumnsResizeChanged: function() {
                    return !0
                },
                _cellsByColumnReset: function() {
                    this.cellsByColumn = {
                        index: 0
                    }, this._getSegments(), this._getSegments(!0)
                },
                _cellsByColumnLayout: function(a) {
                    var c = this,
                        d = this.cellsByColumn;
                    a.each(function() {
                        var a = b(this),
                            e = Math.floor(d.index / d.rows),
                            f = d.index % d.rows,
                            g = (e + .5) * d.columnWidth - a.outerWidth(!0) / 2,
                            h = (f + .5) * d.rowHeight - a.outerHeight(!0) / 2;
                        c._pushPosition(a, g, h), d.index++
                    })
                },
                _cellsByColumnGetContainerSize: function() {
                    return {
                        width: Math.ceil(this.$filteredAtoms.length / this.cellsByColumn.rows) * this.cellsByColumn.columnWidth
                    }
                },
                _cellsByColumnResizeChanged: function() {
                    return this._checkIfSegmentsChanged(!0)
                },
                _straightAcrossReset: function() {
                    this.straightAcross = {
                        x: 0
                    }
                },
                _straightAcrossLayout: function(a) {
                    var c = this;
                    a.each(function(a) {
                        var d = b(this);
                        c._pushPosition(d, c.straightAcross.x, 0), c.straightAcross.x += d.outerWidth(!0)
                    })
                },
                _straightAcrossGetContainerSize: function() {
                    return {
                        width: this.straightAcross.x
                    }
                },
                _straightAcrossResizeChanged: function() {
                    return !0
                }
            }, b.fn.imagesLoaded = function(a) {
                function h() {
                    a.call(c, d)
                }

                function i(a) {
                    var c = a.target;
                    c.src !== f && b.inArray(c, g) === -1 && (g.push(c), --e <= 0 && (setTimeout(h), d.unbind(".imagesLoaded", i)))
                }
                var c = this,
                    d = c.find("img").add(c.filter("img")),
                    e = d.length,
                    f = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",
                    g = [];
                return e || h(), d.bind("load.imagesLoaded error.imagesLoaded", i).each(function() {
                    var a = this.src;
                    this.src = f, this.src = a
                }), c
            };
            var x = function(b) {
                a.console && a.console.error(b)
            };
            b.fn.isotope = function(a, c) {
                if (typeof a == "string") {
                    var d = Array.prototype.slice.call(arguments, 1);
                    this.each(function() {
                        var c = b.data(this, "isotope");
                        if (!c) {
                            x("cannot call methods on isotope prior to initialization; attempted to call method '" + a + "'");
                            return
                        }
                        if (!b.isFunction(c[a]) || a.charAt(0) === "_") {
                            x("no such method '" + a + "' for isotope instance");
                            return
                        }
                        c[a].apply(c, d)
                    })
                } else this.each(function() {
                    var d = b.data(this, "isotope");
                    d ? (d.option(a), d._init(c)) : b.data(this, "isotope", new b.Isotope(a, this, c))
                });
                return this
            }
        })(window, jQuery);





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