! function(t, e) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, (function(t, e) {
    "use strict";
    var n = [],
        i = Object.getPrototypeOf,
        r = n.slice,
        o = n.flat ? function(t) {
            return n.flat.call(t)
        } : function(t) {
            return n.concat.apply([], t)
        },
        s = n.push,
        a = n.indexOf,
        l = {},
        c = l.toString,
        h = l.hasOwnProperty,
        u = h.toString,
        d = u.call(Object),
        f = {},
        p = function(t) {
            return "function" == typeof t && "number" != typeof t.nodeType
        },
        g = function(t) {
            return null != t && t === t.window
        },
        v = t.document,
        m = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };

    function w(t, e, n) {
        var i, r, o = (n = n || v).createElement("script");
        if (o.text = t, e)
            for (i in m)(r = e[i] || e.getAttribute && e.getAttribute(i)) && o.setAttribute(i, r);
        n.head.appendChild(o).parentNode.removeChild(o)
    }

    function y(t) {
        return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? l[c.call(t)] || "object" : typeof t
    }
    var b = function(t, e) {
        return new b.fn.init(t, e)
    };

    function x(t) {
        var e = !!t && "length" in t && t.length,
            n = y(t);
        return !p(t) && !g(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
    }
    b.fn = b.prototype = {
        jquery: "3.5.1",
        constructor: b,
        length: 0,
        toArray: function() {
            return r.call(this)
        },
        get: function(t) {
            return null == t ? r.call(this) : t < 0 ? this[t + this.length] : this[t]
        },
        pushStack: function(t) {
            var e = b.merge(this.constructor(), t);
            return e.prevObject = this, e
        },
        each: function(t) {
            return b.each(this, t)
        },
        map: function(t) {
            return this.pushStack(b.map(this, (function(e, n) {
                return t.call(e, n, e)
            })))
        },
        slice: function() {
            return this.pushStack(r.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(b.grep(this, (function(t, e) {
                return (e + 1) % 2
            })))
        },
        odd: function() {
            return this.pushStack(b.grep(this, (function(t, e) {
                return e % 2
            })))
        },
        eq: function(t) {
            var e = this.length,
                n = +t + (t < 0 ? e : 0);
            return this.pushStack(n >= 0 && n < e ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: s,
        sort: n.sort,
        splice: n.splice
    }, b.extend = b.fn.extend = function() {
        var t, e, n, i, r, o, s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || p(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
            if (null != (t = arguments[a]))
                for (e in t) i = t[e], "__proto__" !== e && s !== i && (c && i && (b.isPlainObject(i) || (r = Array.isArray(i))) ? (n = s[e], o = r && !Array.isArray(n) ? [] : r || b.isPlainObject(n) ? n : {}, r = !1, s[e] = b.extend(c, o, i)) : void 0 !== i && (s[e] = i));
        return s
    }, b.extend({
        expando: "jQuery" + ("3.5.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isPlainObject: function(t) {
            var e, n;
            return !(!t || "[object Object]" !== c.call(t) || (e = i(t)) && ("function" != typeof(n = h.call(e, "constructor") && e.constructor) || u.call(n) !== d))
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        globalEval: function(t, e, n) {
            w(t, {
                nonce: e && e.nonce
            }, n)
        },
        each: function(t, e) {
            var n, i = 0;
            if (x(t))
                for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++);
            else
                for (i in t)
                    if (!1 === e.call(t[i], i, t[i])) break;
            return t
        },
        makeArray: function(t, e) {
            var n = e || [];
            return null != t && (x(Object(t)) ? b.merge(n, "string" == typeof t ? [t] : t) : s.call(n, t)), n
        },
        inArray: function(t, e, n) {
            return null == e ? -1 : a.call(e, t, n)
        },
        merge: function(t, e) {
            for (var n = +e.length, i = 0, r = t.length; i < n; i++) t[r++] = e[i];
            return t.length = r, t
        },
        grep: function(t, e, n) {
            for (var i = [], r = 0, o = t.length, s = !n; r < o; r++) !e(t[r], r) !== s && i.push(t[r]);
            return i
        },
        map: function(t, e, n) {
            var i, r, s = 0,
                a = [];
            if (x(t))
                for (i = t.length; s < i; s++) null != (r = e(t[s], s, n)) && a.push(r);
            else
                for (s in t) null != (r = e(t[s], s, n)) && a.push(r);
            return o(a)
        },
        guid: 1,
        support: f
    }), "function" == typeof Symbol && (b.fn[Symbol.iterator] = n[Symbol.iterator]), b.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(t, e) {
        l["[object " + e + "]"] = e.toLowerCase()
    }));
    var C = function(t) {
        var e, n, i, r, o, s, a, l, c, h, u, d, f, p, g, v, m, w, y, b = "sizzle" + 1 * new Date,
            x = t.document,
            C = 0,
            _ = 0,
            k = lt(),
            E = lt(),
            T = lt(),
            L = lt(),
            S = function(t, e) {
                return t === e && (u = !0), 0
            },
            A = {}.hasOwnProperty,
            N = [],
            D = N.pop,
            I = N.push,
            M = N.push,
            $ = N.slice,
            B = function(t, e) {
                for (var n = 0, i = t.length; n < i; n++)
                    if (t[n] === e) return n;
                return -1
            },
            O = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            j = "[\\x20\\t\\r\\n\\f]",
            P = "(?:\\\\[\\da-fA-F]{1,6}" + j + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            H = "\\[" + j + "*(" + P + ")(?:" + j + "*([*^$|!~]?=)" + j + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + P + "))|)" + j + "*\\]",
            z = ":(" + P + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + H + ")*)|.*)\\)|)",
            q = new RegExp(j + "+", "g"),
            F = new RegExp("^" + j + "+|((?:^|[^\\\\])(?:\\\\.)*)" + j + "+$", "g"),
            R = new RegExp("^" + j + "*," + j + "*"),
            W = new RegExp("^" + j + "*([>+~]|" + j + ")" + j + "*"),
            V = new RegExp(j + "|>"),
            U = new RegExp(z),
            Z = new RegExp("^" + P + "$"),
            Q = {
                ID: new RegExp("^#(" + P + ")"),
                CLASS: new RegExp("^\\.(" + P + ")"),
                TAG: new RegExp("^(" + P + "|[*])"),
                ATTR: new RegExp("^" + H),
                PSEUDO: new RegExp("^" + z),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + j + "*(even|odd|(([+-]|)(\\d*)n|)" + j + "*(?:([+-]|)" + j + "*(\\d+)|))" + j + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + O + ")$", "i"),
                needsContext: new RegExp("^" + j + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + j + "*((?:-\\d)?\\d*)" + j + "*\\)|)(?=[^-]|$)", "i")
            },
            Y = /HTML$/i,
            X = /^(?:input|select|textarea|button)$/i,
            K = /^h\d$/i,
            G = /^[^{]+\{\s*\[native \w/,
            J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            tt = /[+~]/,
            et = new RegExp("\\\\[\\da-fA-F]{1,6}" + j + "?|\\\\([^\\r\\n\\f])", "g"),
            nt = function(t, e) {
                var n = "0x" + t.slice(1) - 65536;
                return e || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
            },
            it = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            rt = function(t, e) {
                return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
            },
            ot = function() {
                d()
            },
            st = bt((function(t) {
                return !0 === t.disabled && "fieldset" === t.nodeName.toLowerCase()
            }), {
                dir: "parentNode",
                next: "legend"
            });
        try {
            M.apply(N = $.call(x.childNodes), x.childNodes)
        } catch (Et) {
            M = {
                apply: N.length ? function(t, e) {
                    I.apply(t, $.call(e))
                } : function(t, e) {
                    for (var n = t.length, i = 0; t[n++] = e[i++];);
                    t.length = n - 1
                }
            }
        }

        function at(t, e, i, r) {
            var o, a, c, h, u, p, m, w = e && e.ownerDocument,
                x = e ? e.nodeType : 9;
            if (i = i || [], "string" != typeof t || !t || 1 !== x && 9 !== x && 11 !== x) return i;
            if (!r && (d(e), e = e || f, g)) {
                if (11 !== x && (u = J.exec(t)))
                    if (o = u[1]) {
                        if (9 === x) {
                            if (!(c = e.getElementById(o))) return i;
                            if (c.id === o) return i.push(c), i
                        } else if (w && (c = w.getElementById(o)) && y(e, c) && c.id === o) return i.push(c), i
                    } else {
                        if (u[2]) return M.apply(i, e.getElementsByTagName(t)), i;
                        if ((o = u[3]) && n.getElementsByClassName && e.getElementsByClassName) return M.apply(i, e.getElementsByClassName(o)), i
                    }
                if (n.qsa && !L[t + " "] && (!v || !v.test(t)) && (1 !== x || "object" !== e.nodeName.toLowerCase())) {
                    if (m = t, w = e, 1 === x && (V.test(t) || W.test(t))) {
                        for ((w = tt.test(t) && mt(e.parentNode) || e) === e && n.scope || ((h = e.getAttribute("id")) ? h = h.replace(it, rt) : e.setAttribute("id", h = b)), a = (p = s(t)).length; a--;) p[a] = (h ? "#" + h : ":scope") + " " + yt(p[a]);
                        m = p.join(",")
                    }
                    try {
                        return M.apply(i, w.querySelectorAll(m)), i
                    } catch (C) {
                        L(t, !0)
                    } finally {
                        h === b && e.removeAttribute("id")
                    }
                }
            }
            return l(t.replace(F, "$1"), e, i, r)
        }

        function lt() {
            var t = [];
            return function e(n, r) {
                return t.push(n + " ") > i.cacheLength && delete e[t.shift()], e[n + " "] = r
            }
        }

        function ct(t) {
            return t[b] = !0, t
        }

        function ht(t) {
            var e = f.createElement("fieldset");
            try {
                return !!t(e)
            } catch (Et) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function ut(t, e) {
            for (var n = t.split("|"), r = n.length; r--;) i.attrHandle[n[r]] = e
        }

        function dt(t, e) {
            var n = e && t,
                i = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === e) return -1;
            return t ? 1 : -1
        }

        function ft(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function pt(t) {
            return function(e) {
                var n = e.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && e.type === t
            }
        }

        function gt(t) {
            return function(e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && st(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function vt(t) {
            return ct((function(e) {
                return e = +e, ct((function(n, i) {
                    for (var r, o = t([], n.length, e), s = o.length; s--;) n[r = o[s]] && (n[r] = !(i[r] = n[r]))
                }))
            }))
        }

        function mt(t) {
            return t && void 0 !== t.getElementsByTagName && t
        }
        for (e in n = at.support = {}, o = at.isXML = function(t) {
                var e = (t.ownerDocument || t).documentElement;
                return !Y.test(t.namespaceURI || e && e.nodeName || "HTML")
            }, d = at.setDocument = function(t) {
                var e, r, s = t ? t.ownerDocument || t : x;
                return s != f && 9 === s.nodeType && s.documentElement ? (p = (f = s).documentElement, g = !o(f), x != f && (r = f.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", ot, !1) : r.attachEvent && r.attachEvent("onunload", ot)), n.scope = ht((function(t) {
                    return p.appendChild(t).appendChild(f.createElement("div")), void 0 !== t.querySelectorAll && !t.querySelectorAll(":scope fieldset div").length
                })), n.attributes = ht((function(t) {
                    return t.className = "i", !t.getAttribute("className")
                })), n.getElementsByTagName = ht((function(t) {
                    return t.appendChild(f.createComment("")), !t.getElementsByTagName("*").length
                })), n.getElementsByClassName = G.test(f.getElementsByClassName), n.getById = ht((function(t) {
                    return p.appendChild(t).id = b, !f.getElementsByName || !f.getElementsByName(b).length
                })), n.getById ? (i.filter.ID = function(t) {
                    var e = t.replace(et, nt);
                    return function(t) {
                        return t.getAttribute("id") === e
                    }
                }, i.find.ID = function(t, e) {
                    if (void 0 !== e.getElementById && g) {
                        var n = e.getElementById(t);
                        return n ? [n] : []
                    }
                }) : (i.filter.ID = function(t) {
                    var e = t.replace(et, nt);
                    return function(t) {
                        var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                        return n && n.value === e
                    }
                }, i.find.ID = function(t, e) {
                    if (void 0 !== e.getElementById && g) {
                        var n, i, r, o = e.getElementById(t);
                        if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === t) return [o];
                            for (r = e.getElementsByName(t), i = 0; o = r[i++];)
                                if ((n = o.getAttributeNode("id")) && n.value === t) return [o]
                        }
                        return []
                    }
                }), i.find.TAG = n.getElementsByTagName ? function(t, e) {
                    return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : n.qsa ? e.querySelectorAll(t) : void 0
                } : function(t, e) {
                    var n, i = [],
                        r = 0,
                        o = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return o
                }, i.find.CLASS = n.getElementsByClassName && function(t, e) {
                    if (void 0 !== e.getElementsByClassName && g) return e.getElementsByClassName(t)
                }, m = [], v = [], (n.qsa = G.test(f.querySelectorAll)) && (ht((function(t) {
                    var e;
                    p.appendChild(t).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + j + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || v.push("\\[" + j + "*(?:value|" + O + ")"), t.querySelectorAll("[id~=" + b + "-]").length || v.push("~="), (e = f.createElement("input")).setAttribute("name", ""), t.appendChild(e), t.querySelectorAll("[name='']").length || v.push("\\[" + j + "*name" + j + "*=" + j + "*(?:''|\"\")"), t.querySelectorAll(":checked").length || v.push(":checked"), t.querySelectorAll("a#" + b + "+*").length || v.push(".#.+[+~]"), t.querySelectorAll("\\\f"), v.push("[\\r\\n\\f]")
                })), ht((function(t) {
                    t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var e = f.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && v.push("name" + j + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), p.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), v.push(",.*:")
                }))), (n.matchesSelector = G.test(w = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && ht((function(t) {
                    n.disconnectedMatch = w.call(t, "*"), w.call(t, "[s!='']:x"), m.push("!=", z)
                })), v = v.length && new RegExp(v.join("|")), m = m.length && new RegExp(m.join("|")), e = G.test(p.compareDocumentPosition), y = e || G.test(p.contains) ? function(t, e) {
                    var n = 9 === t.nodeType ? t.documentElement : t,
                        i = e && e.parentNode;
                    return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                } : function(t, e) {
                    if (e)
                        for (; e = e.parentNode;)
                            if (e === t) return !0;
                    return !1
                }, S = e ? function(t, e) {
                    if (t === e) return u = !0, 0;
                    var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return i || (1 & (i = (t.ownerDocument || t) == (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !n.sortDetached && e.compareDocumentPosition(t) === i ? t == f || t.ownerDocument == x && y(x, t) ? -1 : e == f || e.ownerDocument == x && y(x, e) ? 1 : h ? B(h, t) - B(h, e) : 0 : 4 & i ? -1 : 1)
                } : function(t, e) {
                    if (t === e) return u = !0, 0;
                    var n, i = 0,
                        r = t.parentNode,
                        o = e.parentNode,
                        s = [t],
                        a = [e];
                    if (!r || !o) return t == f ? -1 : e == f ? 1 : r ? -1 : o ? 1 : h ? B(h, t) - B(h, e) : 0;
                    if (r === o) return dt(t, e);
                    for (n = t; n = n.parentNode;) s.unshift(n);
                    for (n = e; n = n.parentNode;) a.unshift(n);
                    for (; s[i] === a[i];) i++;
                    return i ? dt(s[i], a[i]) : s[i] == x ? -1 : a[i] == x ? 1 : 0
                }, f) : f
            }, at.matches = function(t, e) {
                return at(t, null, null, e)
            }, at.matchesSelector = function(t, e) {
                if (d(t), n.matchesSelector && g && !L[e + " "] && (!m || !m.test(e)) && (!v || !v.test(e))) try {
                    var i = w.call(t, e);
                    if (i || n.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
                } catch (Et) {
                    L(e, !0)
                }
                return at(e, f, null, [t]).length > 0
            }, at.contains = function(t, e) {
                return (t.ownerDocument || t) != f && d(t), y(t, e)
            }, at.attr = function(t, e) {
                (t.ownerDocument || t) != f && d(t);
                var r = i.attrHandle[e.toLowerCase()],
                    o = r && A.call(i.attrHandle, e.toLowerCase()) ? r(t, e, !g) : void 0;
                return void 0 !== o ? o : n.attributes || !g ? t.getAttribute(e) : (o = t.getAttributeNode(e)) && o.specified ? o.value : null
            }, at.escape = function(t) {
                return (t + "").replace(it, rt)
            }, at.error = function(t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, at.uniqueSort = function(t) {
                var e, i = [],
                    r = 0,
                    o = 0;
                if (u = !n.detectDuplicates, h = !n.sortStable && t.slice(0), t.sort(S), u) {
                    for (; e = t[o++];) e === t[o] && (r = i.push(o));
                    for (; r--;) t.splice(i[r], 1)
                }
                return h = null, t
            }, r = at.getText = function(t) {
                var e, n = "",
                    i = 0,
                    o = t.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) n += r(t)
                    } else if (3 === o || 4 === o) return t.nodeValue
                } else
                    for (; e = t[i++];) n += r(e);
                return n
            }, (i = at.selectors = {
                cacheLength: 50,
                createPseudo: ct,
                match: Q,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(t) {
                        return t[1] = t[1].replace(et, nt), t[3] = (t[3] || t[4] || t[5] || "").replace(et, nt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    },
                    CHILD: function(t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || at.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && at.error(t[0]), t
                    },
                    PSEUDO: function(t) {
                        var e, n = !t[6] && t[2];
                        return Q.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && U.test(n) && (e = s(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(t) {
                        var e = t.replace(et, nt).toLowerCase();
                        return "*" === t ? function() {
                            return !0
                        } : function(t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    },
                    CLASS: function(t) {
                        var e = k[t + " "];
                        return e || (e = new RegExp("(^|" + j + ")" + t + "(" + j + "|$)")) && k(t, (function(t) {
                            return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                        }))
                    },
                    ATTR: function(t, e, n) {
                        return function(i) {
                            var r = at.attr(i, t);
                            return null == r ? "!=" === e : !e || (r += "", "=" === e ? r === n : "!=" === e ? r !== n : "^=" === e ? n && 0 === r.indexOf(n) : "*=" === e ? n && r.indexOf(n) > -1 : "$=" === e ? n && r.slice(-n.length) === n : "~=" === e ? (" " + r.replace(q, " ") + " ").indexOf(n) > -1 : "|=" === e && (r === n || r.slice(0, n.length + 1) === n + "-"))
                        }
                    },
                    CHILD: function(t, e, n, i, r) {
                        var o = "nth" !== t.slice(0, 3),
                            s = "last" !== t.slice(-4),
                            a = "of-type" === e;
                        return 1 === i && 0 === r ? function(t) {
                            return !!t.parentNode
                        } : function(e, n, l) {
                            var c, h, u, d, f, p, g = o !== s ? "nextSibling" : "previousSibling",
                                v = e.parentNode,
                                m = a && e.nodeName.toLowerCase(),
                                w = !l && !a,
                                y = !1;
                            if (v) {
                                if (o) {
                                    for (; g;) {
                                        for (d = e; d = d[g];)
                                            if (a ? d.nodeName.toLowerCase() === m : 1 === d.nodeType) return !1;
                                        p = g = "only" === t && !p && "nextSibling"
                                    }
                                    return !0
                                }
                                if (p = [s ? v.firstChild : v.lastChild], s && w) {
                                    for (y = (f = (c = (h = (u = (d = v)[b] || (d[b] = {}))[d.uniqueID] || (u[d.uniqueID] = {}))[t] || [])[0] === C && c[1]) && c[2], d = f && v.childNodes[f]; d = ++f && d && d[g] || (y = f = 0) || p.pop();)
                                        if (1 === d.nodeType && ++y && d === e) {
                                            h[t] = [C, f, y];
                                            break
                                        }
                                } else if (w && (y = f = (c = (h = (u = (d = e)[b] || (d[b] = {}))[d.uniqueID] || (u[d.uniqueID] = {}))[t] || [])[0] === C && c[1]), !1 === y)
                                    for (;
                                        (d = ++f && d && d[g] || (y = f = 0) || p.pop()) && ((a ? d.nodeName.toLowerCase() !== m : 1 !== d.nodeType) || !++y || (w && ((h = (u = d[b] || (d[b] = {}))[d.uniqueID] || (u[d.uniqueID] = {}))[t] = [C, y]), d !== e)););
                                return (y -= r) === i || y % i == 0 && y / i >= 0
                            }
                        }
                    },
                    PSEUDO: function(t, e) {
                        var n, r = i.pseudos[t] || i.setFilters[t.toLowerCase()] || at.error("unsupported pseudo: " + t);
                        return r[b] ? r(e) : r.length > 1 ? (n = [t, t, "", e], i.setFilters.hasOwnProperty(t.toLowerCase()) ? ct((function(t, n) {
                            for (var i, o = r(t, e), s = o.length; s--;) t[i = B(t, o[s])] = !(n[i] = o[s])
                        })) : function(t) {
                            return r(t, 0, n)
                        }) : r
                    }
                },
                pseudos: {
                    not: ct((function(t) {
                        var e = [],
                            n = [],
                            i = a(t.replace(F, "$1"));
                        return i[b] ? ct((function(t, e, n, r) {
                            for (var o, s = i(t, null, r, []), a = t.length; a--;)(o = s[a]) && (t[a] = !(e[a] = o))
                        })) : function(t, r, o) {
                            return e[0] = t, i(e, null, o, n), e[0] = null, !n.pop()
                        }
                    })),
                    has: ct((function(t) {
                        return function(e) {
                            return at(t, e).length > 0
                        }
                    })),
                    contains: ct((function(t) {
                        return t = t.replace(et, nt),
                            function(e) {
                                return (e.textContent || r(e)).indexOf(t) > -1
                            }
                    })),
                    lang: ct((function(t) {
                        return Z.test(t || "") || at.error("unsupported lang: " + t), t = t.replace(et, nt).toLowerCase(),
                            function(e) {
                                var n;
                                do {
                                    if (n = g ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    })),
                    target: function(e) {
                        var n = t.location && t.location.hash;
                        return n && n.slice(1) === e.id
                    },
                    root: function(t) {
                        return t === p
                    },
                    focus: function(t) {
                        return t === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    },
                    enabled: gt(!1),
                    disabled: gt(!0),
                    checked: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    },
                    selected: function(t) {
                        return !0 === t.selected
                    },
                    empty: function(t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(t) {
                        return !i.pseudos.empty(t)
                    },
                    header: function(t) {
                        return K.test(t.nodeName)
                    },
                    input: function(t) {
                        return X.test(t.nodeName)
                    },
                    button: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },
                    text: function(t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    },
                    first: vt((function() {
                        return [0]
                    })),
                    last: vt((function(t, e) {
                        return [e - 1]
                    })),
                    eq: vt((function(t, e, n) {
                        return [n < 0 ? n + e : n]
                    })),
                    even: vt((function(t, e) {
                        for (var n = 0; n < e; n += 2) t.push(n);
                        return t
                    })),
                    odd: vt((function(t, e) {
                        for (var n = 1; n < e; n += 2) t.push(n);
                        return t
                    })),
                    lt: vt((function(t, e, n) {
                        for (var i = n < 0 ? n + e : n > e ? e : n; --i >= 0;) t.push(i);
                        return t
                    })),
                    gt: vt((function(t, e, n) {
                        for (var i = n < 0 ? n + e : n; ++i < e;) t.push(i);
                        return t
                    }))
                }
            }).pseudos.nth = i.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) i.pseudos[e] = ft(e);
        for (e in {
                submit: !0,
                reset: !0
            }) i.pseudos[e] = pt(e);

        function wt() {}

        function yt(t) {
            for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
            return i
        }

        function bt(t, e, n) {
            var i = e.dir,
                r = e.next,
                o = r || i,
                s = n && "parentNode" === o,
                a = _++;
            return e.first ? function(e, n, r) {
                for (; e = e[i];)
                    if (1 === e.nodeType || s) return t(e, n, r);
                return !1
            } : function(e, n, l) {
                var c, h, u, d = [C, a];
                if (l) {
                    for (; e = e[i];)
                        if ((1 === e.nodeType || s) && t(e, n, l)) return !0
                } else
                    for (; e = e[i];)
                        if (1 === e.nodeType || s)
                            if (h = (u = e[b] || (e[b] = {}))[e.uniqueID] || (u[e.uniqueID] = {}), r && r === e.nodeName.toLowerCase()) e = e[i] || e;
                            else {
                                if ((c = h[o]) && c[0] === C && c[1] === a) return d[2] = c[2];
                                if (h[o] = d, d[2] = t(e, n, l)) return !0
                            } return !1
            }
        }

        function xt(t) {
            return t.length > 1 ? function(e, n, i) {
                for (var r = t.length; r--;)
                    if (!t[r](e, n, i)) return !1;
                return !0
            } : t[0]
        }

        function Ct(t, e, n, i, r) {
            for (var o, s = [], a = 0, l = t.length, c = null != e; a < l; a++)(o = t[a]) && (n && !n(o, i, r) || (s.push(o), c && e.push(a)));
            return s
        }

        function _t(t, e, n, i, r, o) {
            return i && !i[b] && (i = _t(i)), r && !r[b] && (r = _t(r, o)), ct((function(o, s, a, l) {
                var c, h, u, d = [],
                    f = [],
                    p = s.length,
                    g = o || function(t, e, n) {
                        for (var i = 0, r = e.length; i < r; i++) at(t, e[i], n);
                        return n
                    }(e || "*", a.nodeType ? [a] : a, []),
                    v = !t || !o && e ? g : Ct(g, d, t, a, l),
                    m = n ? r || (o ? t : p || i) ? [] : s : v;
                if (n && n(v, m, a, l), i)
                    for (c = Ct(m, f), i(c, [], a, l), h = c.length; h--;)(u = c[h]) && (m[f[h]] = !(v[f[h]] = u));
                if (o) {
                    if (r || t) {
                        if (r) {
                            for (c = [], h = m.length; h--;)(u = m[h]) && c.push(v[h] = u);
                            r(null, m = [], c, l)
                        }
                        for (h = m.length; h--;)(u = m[h]) && (c = r ? B(o, u) : d[h]) > -1 && (o[c] = !(s[c] = u))
                    }
                } else m = Ct(m === s ? m.splice(p, m.length) : m), r ? r(null, s, m, l) : M.apply(s, m)
            }))
        }

        function kt(t) {
            for (var e, n, r, o = t.length, s = i.relative[t[0].type], a = s || i.relative[" "], l = s ? 1 : 0, h = bt((function(t) {
                    return t === e
                }), a, !0), u = bt((function(t) {
                    return B(e, t) > -1
                }), a, !0), d = [function(t, n, i) {
                    var r = !s && (i || n !== c) || ((e = n).nodeType ? h(t, n, i) : u(t, n, i));
                    return e = null, r
                }]; l < o; l++)
                if (n = i.relative[t[l].type]) d = [bt(xt(d), n)];
                else {
                    if ((n = i.filter[t[l].type].apply(null, t[l].matches))[b]) {
                        for (r = ++l; r < o && !i.relative[t[r].type]; r++);
                        return _t(l > 1 && xt(d), l > 1 && yt(t.slice(0, l - 1).concat({
                            value: " " === t[l - 2].type ? "*" : ""
                        })).replace(F, "$1"), n, l < r && kt(t.slice(l, r)), r < o && kt(t = t.slice(r)), r < o && yt(t))
                    }
                    d.push(n)
                }
            return xt(d)
        }
        return wt.prototype = i.filters = i.pseudos, i.setFilters = new wt, s = at.tokenize = function(t, e) {
            var n, r, o, s, a, l, c, h = E[t + " "];
            if (h) return e ? 0 : h.slice(0);
            for (a = t, l = [], c = i.preFilter; a;) {
                for (s in n && !(r = R.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(o = [])), n = !1, (r = W.exec(a)) && (n = r.shift(), o.push({
                        value: n,
                        type: r[0].replace(F, " ")
                    }), a = a.slice(n.length)), i.filter) !(r = Q[s].exec(a)) || c[s] && !(r = c[s](r)) || (n = r.shift(), o.push({
                    value: n,
                    type: s,
                    matches: r
                }), a = a.slice(n.length));
                if (!n) break
            }
            return e ? a.length : a ? at.error(t) : E(t, l).slice(0)
        }, a = at.compile = function(t, e) {
            var n, r = [],
                o = [],
                a = T[t + " "];
            if (!a) {
                for (e || (e = s(t)), n = e.length; n--;)(a = kt(e[n]))[b] ? r.push(a) : o.push(a);
                (a = T(t, function(t, e) {
                    var n = e.length > 0,
                        r = t.length > 0,
                        o = function(o, s, a, l, h) {
                            var u, p, v, m = 0,
                                w = "0",
                                y = o && [],
                                b = [],
                                x = c,
                                _ = o || r && i.find.TAG("*", h),
                                k = C += null == x ? 1 : Math.random() || .1,
                                E = _.length;
                            for (h && (c = s == f || s || h); w !== E && null != (u = _[w]); w++) {
                                if (r && u) {
                                    for (p = 0, s || u.ownerDocument == f || (d(u), a = !g); v = t[p++];)
                                        if (v(u, s || f, a)) {
                                            l.push(u);
                                            break
                                        }
                                    h && (C = k)
                                }
                                n && ((u = !v && u) && m--, o && y.push(u))
                            }
                            if (m += w, n && w !== m) {
                                for (p = 0; v = e[p++];) v(y, b, s, a);
                                if (o) {
                                    if (m > 0)
                                        for (; w--;) y[w] || b[w] || (b[w] = D.call(l));
                                    b = Ct(b)
                                }
                                M.apply(l, b), h && !o && b.length > 0 && m + e.length > 1 && at.uniqueSort(l)
                            }
                            return h && (C = k, c = x), y
                        };
                    return n ? ct(o) : o
                }(o, r))).selector = t
            }
            return a
        }, l = at.select = function(t, e, n, r) {
            var o, l, c, h, u, d = "function" == typeof t && t,
                f = !r && s(t = d.selector || t);
            if (n = n || [], 1 === f.length) {
                if ((l = f[0] = f[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === e.nodeType && g && i.relative[l[1].type]) {
                    if (!(e = (i.find.ID(c.matches[0].replace(et, nt), e) || [])[0])) return n;
                    d && (e = e.parentNode), t = t.slice(l.shift().value.length)
                }
                for (o = Q.needsContext.test(t) ? 0 : l.length; o-- && !i.relative[h = (c = l[o]).type];)
                    if ((u = i.find[h]) && (r = u(c.matches[0].replace(et, nt), tt.test(l[0].type) && mt(e.parentNode) || e))) {
                        if (l.splice(o, 1), !(t = r.length && yt(l))) return M.apply(n, r), n;
                        break
                    }
            }
            return (d || a(t, f))(r, e, !g, n, !e || tt.test(t) && mt(e.parentNode) || e), n
        }, n.sortStable = b.split("").sort(S).join("") === b, n.detectDuplicates = !!u, d(), n.sortDetached = ht((function(t) {
            return 1 & t.compareDocumentPosition(f.createElement("fieldset"))
        })), ht((function(t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        })) || ut("type|href|height|width", (function(t, e, n) {
            if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        })), n.attributes && ht((function(t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        })) || ut("value", (function(t, e, n) {
            if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue
        })), ht((function(t) {
            return null == t.getAttribute("disabled")
        })) || ut(O, (function(t, e, n) {
            var i;
            if (!n) return !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        })), at
    }(t);
    b.find = C, b.expr = C.selectors, b.expr[":"] = b.expr.pseudos, b.uniqueSort = b.unique = C.uniqueSort, b.text = C.getText, b.isXMLDoc = C.isXML, b.contains = C.contains, b.escapeSelector = C.escape;
    var _ = function(t, e, n) {
            for (var i = [], r = void 0 !== n;
                (t = t[e]) && 9 !== t.nodeType;)
                if (1 === t.nodeType) {
                    if (r && b(t).is(n)) break;
                    i.push(t)
                }
            return i
        },
        k = function(t, e) {
            for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
            return n
        },
        E = b.expr.match.needsContext;

    function T(t, e) {
        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
    }
    var L = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function S(t, e, n) {
        return p(e) ? b.grep(t, (function(t, i) {
            return !!e.call(t, i, t) !== n
        })) : e.nodeType ? b.grep(t, (function(t) {
            return t === e !== n
        })) : "string" != typeof e ? b.grep(t, (function(t) {
            return a.call(e, t) > -1 !== n
        })) : b.filter(e, t, n)
    }
    b.filter = function(t, e, n) {
        var i = e[0];
        return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? b.find.matchesSelector(i, t) ? [i] : [] : b.find.matches(t, b.grep(e, (function(t) {
            return 1 === t.nodeType
        })))
    }, b.fn.extend({
        find: function(t) {
            var e, n, i = this.length,
                r = this;
            if ("string" != typeof t) return this.pushStack(b(t).filter((function() {
                for (e = 0; e < i; e++)
                    if (b.contains(r[e], this)) return !0
            })));
            for (n = this.pushStack([]), e = 0; e < i; e++) b.find(t, r[e], n);
            return i > 1 ? b.uniqueSort(n) : n
        },
        filter: function(t) {
            return this.pushStack(S(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(S(this, t || [], !0))
        },
        is: function(t) {
            return !!S(this, "string" == typeof t && E.test(t) ? b(t) : t || [], !1).length
        }
    });
    var A, N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (b.fn.init = function(t, e, n) {
        var i, r;
        if (!t) return this;
        if (n = n || A, "string" == typeof t) {
            if (!(i = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : N.exec(t)) || !i[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
            if (i[1]) {
                if (b.merge(this, b.parseHTML(i[1], (e = e instanceof b ? e[0] : e) && e.nodeType ? e.ownerDocument || e : v, !0)), L.test(i[1]) && b.isPlainObject(e))
                    for (i in e) p(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                return this
            }
            return (r = v.getElementById(i[2])) && (this[0] = r, this.length = 1), this
        }
        return t.nodeType ? (this[0] = t, this.length = 1, this) : p(t) ? void 0 !== n.ready ? n.ready(t) : t(b) : b.makeArray(t, this)
    }).prototype = b.fn, A = b(v);
    var D = /^(?:parents|prev(?:Until|All))/,
        I = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function M(t, e) {
        for (;
            (t = t[e]) && 1 !== t.nodeType;);
        return t
    }
    b.fn.extend({
        has: function(t) {
            var e = b(t, this),
                n = e.length;
            return this.filter((function() {
                for (var t = 0; t < n; t++)
                    if (b.contains(this, e[t])) return !0
            }))
        },
        closest: function(t, e) {
            var n, i = 0,
                r = this.length,
                o = [],
                s = "string" != typeof t && b(t);
            if (!E.test(t))
                for (; i < r; i++)
                    for (n = this[i]; n && n !== e; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && b.find.matchesSelector(n, t))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(o.length > 1 ? b.uniqueSort(o) : o)
        },
        index: function(t) {
            return t ? "string" == typeof t ? a.call(b(t), this[0]) : a.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            return this.pushStack(b.uniqueSort(b.merge(this.get(), b(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), b.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return _(t, "parentNode")
        },
        parentsUntil: function(t, e, n) {
            return _(t, "parentNode", n)
        },
        next: function(t) {
            return M(t, "nextSibling")
        },
        prev: function(t) {
            return M(t, "previousSibling")
        },
        nextAll: function(t) {
            return _(t, "nextSibling")
        },
        prevAll: function(t) {
            return _(t, "previousSibling")
        },
        nextUntil: function(t, e, n) {
            return _(t, "nextSibling", n)
        },
        prevUntil: function(t, e, n) {
            return _(t, "previousSibling", n)
        },
        siblings: function(t) {
            return k((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return k(t.firstChild)
        },
        contents: function(t) {
            return null != t.contentDocument && i(t.contentDocument) ? t.contentDocument : (T(t, "template") && (t = t.content || t), b.merge([], t.childNodes))
        }
    }, (function(t, e) {
        b.fn[t] = function(n, i) {
            var r = b.map(this, e, n);
            return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (r = b.filter(i, r)), this.length > 1 && (I[t] || b.uniqueSort(r), D.test(t) && r.reverse()), this.pushStack(r)
        }
    }));
    var $ = /[^\x20\t\r\n\f]+/g;

    function B(t) {
        return t
    }

    function O(t) {
        throw t
    }

    function j(t, e, n, i) {
        var r;
        try {
            t && p(r = t.promise) ? r.call(t).done(e).fail(n) : t && p(r = t.then) ? r.call(t, e, n) : e.apply(void 0, [t].slice(i))
        } catch (t) {
            n.apply(void 0, [t])
        }
    }
    b.Callbacks = function(t) {
        t = "string" == typeof t ? function(t) {
            var e = {};
            return b.each(t.match($) || [], (function(t, n) {
                e[n] = !0
            })), e
        }(t) : b.extend({}, t);
        var e, n, i, r, o = [],
            s = [],
            a = -1,
            l = function() {
                for (r = r || t.once, i = e = !0; s.length; a = -1)
                    for (n = s.shift(); ++a < o.length;) !1 === o[a].apply(n[0], n[1]) && t.stopOnFalse && (a = o.length, n = !1);
                t.memory || (n = !1), e = !1, r && (o = n ? [] : "")
            },
            c = {
                add: function() {
                    return o && (n && !e && (a = o.length - 1, s.push(n)), function e(n) {
                        b.each(n, (function(n, i) {
                            p(i) ? t.unique && c.has(i) || o.push(i) : i && i.length && "string" !== y(i) && e(i)
                        }))
                    }(arguments), n && !e && l()), this
                },
                remove: function() {
                    return b.each(arguments, (function(t, e) {
                        for (var n;
                            (n = b.inArray(e, o, n)) > -1;) o.splice(n, 1), n <= a && a--
                    })), this
                },
                has: function(t) {
                    return t ? b.inArray(t, o) > -1 : o.length > 0
                },
                empty: function() {
                    return o && (o = []), this
                },
                disable: function() {
                    return r = s = [], o = n = "", this
                },
                disabled: function() {
                    return !o
                },
                lock: function() {
                    return r = s = [], n || e || (o = n = ""), this
                },
                locked: function() {
                    return !!r
                },
                fireWith: function(t, n) {
                    return r || (n = [t, (n = n || []).slice ? n.slice() : n], s.push(n), e || l()), this
                },
                fire: function() {
                    return c.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
        return c
    }, b.extend({
        Deferred: function(e) {
            var n = [
                    ["notify", "progress", b.Callbacks("memory"), b.Callbacks("memory"), 2],
                    ["resolve", "done", b.Callbacks("once memory"), b.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", b.Callbacks("once memory"), b.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                r = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments), this
                    },
                    catch: function(t) {
                        return r.then(null, t)
                    },
                    pipe: function() {
                        var t = arguments;
                        return b.Deferred((function(e) {
                            b.each(n, (function(n, i) {
                                var r = p(t[i[4]]) && t[i[4]];
                                o[i[1]]((function() {
                                    var t = r && r.apply(this, arguments);
                                    t && p(t.promise) ? t.promise().progress(e.notify).done(e.resolve).fail(e.reject) : e[i[0] + "With"](this, r ? [t] : arguments)
                                }))
                            })), t = null
                        })).promise()
                    },
                    then: function(e, i, r) {
                        var o = 0;

                        function s(e, n, i, r) {
                            return function() {
                                var a = this,
                                    l = arguments,
                                    c = function() {
                                        var t, c;
                                        if (!(e < o)) {
                                            if ((t = i.apply(a, l)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                            p(c = t && ("object" == typeof t || "function" == typeof t) && t.then) ? r ? c.call(t, s(o, n, B, r), s(o, n, O, r)) : (o++, c.call(t, s(o, n, B, r), s(o, n, O, r), s(o, n, B, n.notifyWith))) : (i !== B && (a = void 0, l = [t]), (r || n.resolveWith)(a, l))
                                        }
                                    },
                                    h = r ? c : function() {
                                        try {
                                            c()
                                        } catch (t) {
                                            b.Deferred.exceptionHook && b.Deferred.exceptionHook(t, h.stackTrace), e + 1 >= o && (i !== O && (a = void 0, l = [t]), n.rejectWith(a, l))
                                        }
                                    };
                                e ? h() : (b.Deferred.getStackHook && (h.stackTrace = b.Deferred.getStackHook()), t.setTimeout(h))
                            }
                        }
                        return b.Deferred((function(t) {
                            n[0][3].add(s(0, t, p(r) ? r : B, t.notifyWith)), n[1][3].add(s(0, t, p(e) ? e : B)), n[2][3].add(s(0, t, p(i) ? i : O))
                        })).promise()
                    },
                    promise: function(t) {
                        return null != t ? b.extend(t, r) : r
                    }
                },
                o = {};
            return b.each(n, (function(t, e) {
                var s = e[2],
                    a = e[5];
                r[e[1]] = s.add, a && s.add((function() {
                    i = a
                }), n[3 - t][2].disable, n[3 - t][3].disable, n[0][2].lock, n[0][3].lock), s.add(e[3].fire), o[e[0]] = function() {
                    return o[e[0] + "With"](this === o ? void 0 : this, arguments), this
                }, o[e[0] + "With"] = s.fireWith
            })), r.promise(o), e && e.call(o, o), o
        },
        when: function(t) {
            var e = arguments.length,
                n = e,
                i = Array(n),
                o = r.call(arguments),
                s = b.Deferred(),
                a = function(t) {
                    return function(n) {
                        i[t] = this, o[t] = arguments.length > 1 ? r.call(arguments) : n, --e || s.resolveWith(i, o)
                    }
                };
            if (e <= 1 && (j(t, s.done(a(n)).resolve, s.reject, !e), "pending" === s.state() || p(o[n] && o[n].then))) return s.then();
            for (; n--;) j(o[n], a(n), s.reject);
            return s.promise()
        }
    });
    var P = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    b.Deferred.exceptionHook = function(e, n) {
        t.console && t.console.warn && e && P.test(e.name) && t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, n)
    }, b.readyException = function(e) {
        t.setTimeout((function() {
            throw e
        }))
    };
    var H = b.Deferred();

    function z() {
        v.removeEventListener("DOMContentLoaded", z), t.removeEventListener("load", z), b.ready()
    }
    b.fn.ready = function(t) {
        return H.then(t).catch((function(t) {
            b.readyException(t)
        })), this
    }, b.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(t) {
            (!0 === t ? --b.readyWait : b.isReady) || (b.isReady = !0, !0 !== t && --b.readyWait > 0 || H.resolveWith(v, [b]))
        }
    }), b.ready.then = H.then, "complete" === v.readyState || "loading" !== v.readyState && !v.documentElement.doScroll ? t.setTimeout(b.ready) : (v.addEventListener("DOMContentLoaded", z), t.addEventListener("load", z));
    var q = function(t, e, n, i, r, o, s) {
            var a = 0,
                l = t.length,
                c = null == n;
            if ("object" === y(n))
                for (a in r = !0, n) q(t, e, a, n[a], !0, o, s);
            else if (void 0 !== i && (r = !0, p(i) || (s = !0), c && (s ? (e.call(t, i), e = null) : (c = e, e = function(t, e, n) {
                    return c.call(b(t), n)
                })), e))
                for (; a < l; a++) e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
            return r ? t : c ? e.call(t) : l ? e(t[0], n) : o
        },
        F = /^-ms-/,
        R = /-([a-z])/g;

    function W(t, e) {
        return e.toUpperCase()
    }

    function V(t) {
        return t.replace(F, "ms-").replace(R, W)
    }
    var U = function(t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
    };

    function Z() {
        this.expando = b.expando + Z.uid++
    }
    Z.uid = 1, Z.prototype = {
        cache: function(t) {
            var e = t[this.expando];
            return e || (e = {}, U(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                value: e,
                configurable: !0
            }))), e
        },
        set: function(t, e, n) {
            var i, r = this.cache(t);
            if ("string" == typeof e) r[V(e)] = n;
            else
                for (i in e) r[V(i)] = e[i];
            return r
        },
        get: function(t, e) {
            return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][V(e)]
        },
        access: function(t, e, n) {
            return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n), void 0 !== n ? n : e)
        },
        remove: function(t, e) {
            var n, i = t[this.expando];
            if (void 0 !== i) {
                if (void 0 !== e) {
                    n = (e = Array.isArray(e) ? e.map(V) : (e = V(e)) in i ? [e] : e.match($) || []).length;
                    for (; n--;) delete i[e[n]]
                }(void 0 === e || b.isEmptyObject(i)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
            }
        },
        hasData: function(t) {
            var e = t[this.expando];
            return void 0 !== e && !b.isEmptyObject(e)
        }
    };
    var Q = new Z,
        Y = new Z,
        X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        K = /[A-Z]/g;

    function G(t, e, n) {
        var i;
        if (void 0 === n && 1 === t.nodeType)
            if (i = "data-" + e.replace(K, "-$&").toLowerCase(), "string" == typeof(n = t.getAttribute(i))) {
                try {
                    n = function(t) {
                        return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : X.test(t) ? JSON.parse(t) : t)
                    }(n)
                } catch (r) {}
                Y.set(t, e, n)
            } else n = void 0;
        return n
    }
    b.extend({
        hasData: function(t) {
            return Y.hasData(t) || Q.hasData(t)
        },
        data: function(t, e, n) {
            return Y.access(t, e, n)
        },
        removeData: function(t, e) {
            Y.remove(t, e)
        },
        _data: function(t, e, n) {
            return Q.access(t, e, n)
        },
        _removeData: function(t, e) {
            Q.remove(t, e)
        }
    }), b.fn.extend({
        data: function(t, e) {
            var n, i, r, o = this[0],
                s = o && o.attributes;
            if (void 0 === t) {
                if (this.length && (r = Y.get(o), 1 === o.nodeType && !Q.get(o, "hasDataAttrs"))) {
                    for (n = s.length; n--;) s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = V(i.slice(5)), G(o, i, r[i]));
                    Q.set(o, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof t ? this.each((function() {
                Y.set(this, t)
            })) : q(this, (function(e) {
                var n;
                if (o && void 0 === e) return void 0 !== (n = Y.get(o, t)) || void 0 !== (n = G(o, t)) ? n : void 0;
                this.each((function() {
                    Y.set(this, t, e)
                }))
            }), null, e, arguments.length > 1, null, !0)
        },
        removeData: function(t) {
            return this.each((function() {
                Y.remove(this, t)
            }))
        }
    }), b.extend({
        queue: function(t, e, n) {
            var i;
            if (t) return i = Q.get(t, e = (e || "fx") + "queue"), n && (!i || Array.isArray(n) ? i = Q.access(t, e, b.makeArray(n)) : i.push(n)), i || []
        },
        dequeue: function(t, e) {
            var n = b.queue(t, e = e || "fx"),
                i = n.length,
                r = n.shift(),
                o = b._queueHooks(t, e);
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === e && n.unshift("inprogress"), delete o.stop, r.call(t, (function() {
                b.dequeue(t, e)
            }), o)), !i && o && o.empty.fire()
        },
        _queueHooks: function(t, e) {
            var n = e + "queueHooks";
            return Q.get(t, n) || Q.access(t, n, {
                empty: b.Callbacks("once memory").add((function() {
                    Q.remove(t, [e + "queue", n])
                }))
            })
        }
    }), b.fn.extend({
        queue: function(t, e) {
            var n = 2;
            return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? b.queue(this[0], t) : void 0 === e ? this : this.each((function() {
                var n = b.queue(this, t, e);
                b._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && b.dequeue(this, t)
            }))
        },
        dequeue: function(t) {
            return this.each((function() {
                b.dequeue(this, t)
            }))
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            var n, i = 1,
                r = b.Deferred(),
                o = this,
                s = this.length,
                a = function() {
                    --i || r.resolveWith(o, [o])
                };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;)(n = Q.get(o[s], t + "queueHooks")) && n.empty && (i++, n.empty.add(a));
            return a(), r.promise(e)
        }
    });
    var J = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        tt = new RegExp("^(?:([+-])=|)(" + J + ")([a-z%]*)$", "i"),
        et = ["Top", "Right", "Bottom", "Left"],
        nt = v.documentElement,
        it = function(t) {
            return b.contains(t.ownerDocument, t)
        },
        rt = {
            composed: !0
        };
    nt.getRootNode && (it = function(t) {
        return b.contains(t.ownerDocument, t) || t.getRootNode(rt) === t.ownerDocument
    });
    var ot = function(t, e) {
        return "none" === (t = e || t).style.display || "" === t.style.display && it(t) && "none" === b.css(t, "display")
    };

    function st(t, e, n, i) {
        var r, o, s = 20,
            a = i ? function() {
                return i.cur()
            } : function() {
                return b.css(t, e, "")
            },
            l = a(),
            c = n && n[3] || (b.cssNumber[e] ? "" : "px"),
            h = t.nodeType && (b.cssNumber[e] || "px" !== c && +l) && tt.exec(b.css(t, e));
        if (h && h[3] !== c) {
            for (c = c || h[3], h = +(l /= 2) || 1; s--;) b.style(t, e, h + c), (1 - o) * (1 - (o = a() / l || .5)) <= 0 && (s = 0), h /= o;
            b.style(t, e, (h *= 2) + c), n = n || []
        }
        return n && (h = +h || +l || 0, r = n[1] ? h + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = h, i.end = r)), r
    }
    var at = {};

    function lt(t) {
        var e, n = t.ownerDocument,
            i = t.nodeName,
            r = at[i];
        return r || (e = n.body.appendChild(n.createElement(i)), r = b.css(e, "display"), e.parentNode.removeChild(e), "none" === r && (r = "block"), at[i] = r, r)
    }

    function ct(t, e) {
        for (var n, i, r = [], o = 0, s = t.length; o < s; o++)(i = t[o]).style && (n = i.style.display, e ? ("none" === n && (r[o] = Q.get(i, "display") || null, r[o] || (i.style.display = "")), "" === i.style.display && ot(i) && (r[o] = lt(i))) : "none" !== n && (r[o] = "none", Q.set(i, "display", n)));
        for (o = 0; o < s; o++) null != r[o] && (t[o].style.display = r[o]);
        return t
    }
    b.fn.extend({
        show: function() {
            return ct(this, !0)
        },
        hide: function() {
            return ct(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each((function() {
                ot(this) ? b(this).show() : b(this).hide()
            }))
        }
    });
    var ht, ut, dt = /^(?:checkbox|radio)$/i,
        ft = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        pt = /^$|^module$|\/(?:java|ecma)script/i;
    ht = v.createDocumentFragment().appendChild(v.createElement("div")), (ut = v.createElement("input")).setAttribute("type", "radio"), ut.setAttribute("checked", "checked"), ut.setAttribute("name", "t"), ht.appendChild(ut), f.checkClone = ht.cloneNode(!0).cloneNode(!0).lastChild.checked, ht.innerHTML = "<textarea>x</textarea>", f.noCloneChecked = !!ht.cloneNode(!0).lastChild.defaultValue, ht.innerHTML = "<option></option>", f.option = !!ht.lastChild;
    var gt = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };

    function vt(t, e) {
        var n;
        return n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && T(t, e) ? b.merge([t], n) : n
    }

    function mt(t, e) {
        for (var n = 0, i = t.length; n < i; n++) Q.set(t[n], "globalEval", !e || Q.get(e[n], "globalEval"))
    }
    gt.tbody = gt.tfoot = gt.colgroup = gt.caption = gt.thead, gt.th = gt.td, f.option || (gt.optgroup = gt.option = [1, "<select multiple='multiple'>", "</select>"]);
    var wt = /<|&#?\w+;/;

    function yt(t, e, n, i, r) {
        for (var o, s, a, l, c, h, u = e.createDocumentFragment(), d = [], f = 0, p = t.length; f < p; f++)
            if ((o = t[f]) || 0 === o)
                if ("object" === y(o)) b.merge(d, o.nodeType ? [o] : o);
                else if (wt.test(o)) {
            for (s = s || u.appendChild(e.createElement("div")), a = (ft.exec(o) || ["", ""])[1].toLowerCase(), s.innerHTML = (l = gt[a] || gt._default)[1] + b.htmlPrefilter(o) + l[2], h = l[0]; h--;) s = s.lastChild;
            b.merge(d, s.childNodes), (s = u.firstChild).textContent = ""
        } else d.push(e.createTextNode(o));
        for (u.textContent = "", f = 0; o = d[f++];)
            if (i && b.inArray(o, i) > -1) r && r.push(o);
            else if (c = it(o), s = vt(u.appendChild(o), "script"), c && mt(s), n)
            for (h = 0; o = s[h++];) pt.test(o.type || "") && n.push(o);
        return u
    }
    var bt = /^key/,
        xt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ct = /^([^.]*)(?:\.(.+)|)/;

    function _t() {
        return !0
    }

    function kt() {
        return !1
    }

    function Et(t, e) {
        return t === function() {
            try {
                return v.activeElement
            } catch (t) {}
        }() == ("focus" === e)
    }

    function Tt(t, e, n, i, r, o) {
        var s, a;
        if ("object" == typeof e) {
            for (a in "string" != typeof n && (i = i || n, n = void 0), e) Tt(t, a, n, i, e[a], o);
            return t
        }
        if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = kt;
        else if (!r) return t;
        return 1 === o && (s = r, (r = function(t) {
            return b().off(t), s.apply(this, arguments)
        }).guid = s.guid || (s.guid = b.guid++)), t.each((function() {
            b.event.add(this, e, r, i, n)
        }))
    }

    function Lt(t, e, n) {
        n ? (Q.set(t, e, !1), b.event.add(t, e, {
            namespace: !1,
            handler: function(t) {
                var i, o, s = Q.get(this, e);
                if (1 & t.isTrigger && this[e]) {
                    if (s.length)(b.event.special[e] || {}).delegateType && t.stopPropagation();
                    else if (s = r.call(arguments), Q.set(this, e, s), i = n(this, e), this[e](), s !== (o = Q.get(this, e)) || i ? Q.set(this, e, !1) : o = {}, s !== o) return t.stopImmediatePropagation(), t.preventDefault(), o.value
                } else s.length && (Q.set(this, e, {
                    value: b.event.trigger(b.extend(s[0], b.Event.prototype), s.slice(1), this)
                }), t.stopImmediatePropagation())
            }
        })) : void 0 === Q.get(t, e) && b.event.add(t, e, _t)
    }
    b.event = {
        global: {},
        add: function(t, e, n, i, r) {
            var o, s, a, l, c, h, u, d, f, p, g, v = Q.get(t);
            if (U(t))
                for (n.handler && (n = (o = n).handler, r = o.selector), r && b.find.matchesSelector(nt, r), n.guid || (n.guid = b.guid++), (l = v.events) || (l = v.events = Object.create(null)), (s = v.handle) || (s = v.handle = function(e) {
                        return void 0 !== b && b.event.triggered !== e.type ? b.event.dispatch.apply(t, arguments) : void 0
                    }), c = (e = (e || "").match($) || [""]).length; c--;) f = g = (a = Ct.exec(e[c]) || [])[1], p = (a[2] || "").split(".").sort(), f && (u = b.event.special[f] || {}, u = b.event.special[f = (r ? u.delegateType : u.bindType) || f] || {}, h = b.extend({
                    type: f,
                    origType: g,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && b.expr.match.needsContext.test(r),
                    namespace: p.join(".")
                }, o), (d = l[f]) || ((d = l[f] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(t, i, p, s) || t.addEventListener && t.addEventListener(f, s)), u.add && (u.add.call(t, h), h.handler.guid || (h.handler.guid = n.guid)), r ? d.splice(d.delegateCount++, 0, h) : d.push(h), b.event.global[f] = !0)
        },
        remove: function(t, e, n, i, r) {
            var o, s, a, l, c, h, u, d, f, p, g, v = Q.hasData(t) && Q.get(t);
            if (v && (l = v.events)) {
                for (c = (e = (e || "").match($) || [""]).length; c--;)
                    if (f = g = (a = Ct.exec(e[c]) || [])[1], p = (a[2] || "").split(".").sort(), f) {
                        for (u = b.event.special[f] || {}, d = l[f = (i ? u.delegateType : u.bindType) || f] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = d.length; o--;) h = d[o], !r && g !== h.origType || n && n.guid !== h.guid || a && !a.test(h.namespace) || i && i !== h.selector && ("**" !== i || !h.selector) || (d.splice(o, 1), h.selector && d.delegateCount--, u.remove && u.remove.call(t, h));
                        s && !d.length && (u.teardown && !1 !== u.teardown.call(t, p, v.handle) || b.removeEvent(t, f, v.handle), delete l[f])
                    } else
                        for (f in l) b.event.remove(t, f + e[c], n, i, !0);
                b.isEmptyObject(l) && Q.remove(t, "handle events")
            }
        },
        dispatch: function(t) {
            var e, n, i, r, o, s, a = new Array(arguments.length),
                l = b.event.fix(t),
                c = (Q.get(this, "events") || Object.create(null))[l.type] || [],
                h = b.event.special[l.type] || {};
            for (a[0] = l, e = 1; e < arguments.length; e++) a[e] = arguments[e];
            if (l.delegateTarget = this, !h.preDispatch || !1 !== h.preDispatch.call(this, l)) {
                for (s = b.event.handlers.call(this, l, c), e = 0;
                    (r = s[e++]) && !l.isPropagationStopped();)
                    for (l.currentTarget = r.elem, n = 0;
                        (o = r.handlers[n++]) && !l.isImmediatePropagationStopped();) l.rnamespace && !1 !== o.namespace && !l.rnamespace.test(o.namespace) || (l.handleObj = o, l.data = o.data, void 0 !== (i = ((b.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, a)) && !1 === (l.result = i) && (l.preventDefault(), l.stopPropagation()));
                return h.postDispatch && h.postDispatch.call(this, l), l.result
            }
        },
        handlers: function(t, e) {
            var n, i, r, o, s, a = [],
                l = e.delegateCount,
                c = t.target;
            if (l && c.nodeType && !("click" === t.type && t.button >= 1))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== t.type || !0 !== c.disabled)) {
                        for (o = [], s = {}, n = 0; n < l; n++) void 0 === s[r = (i = e[n]).selector + " "] && (s[r] = i.needsContext ? b(r, this).index(c) > -1 : b.find(r, this, null, [c]).length), s[r] && o.push(i);
                        o.length && a.push({
                            elem: c,
                            handlers: o
                        })
                    }
            return c = this, l < e.length && a.push({
                elem: c,
                handlers: e.slice(l)
            }), a
        },
        addProp: function(t, e) {
            Object.defineProperty(b.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: p(e) ? function() {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[t]
                },
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(t) {
            return t[b.expando] ? t : new b.Event(t)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(t) {
                    var e = this || t;
                    return dt.test(e.type) && e.click && T(e, "input") && Lt(e, "click", _t), !1
                },
                trigger: function(t) {
                    var e = this || t;
                    return dt.test(e.type) && e.click && T(e, "input") && Lt(e, "click"), !0
                },
                _default: function(t) {
                    var e = t.target;
                    return dt.test(e.type) && e.click && T(e, "input") && Q.get(e, "click") || T(e, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        }
    }, b.removeEvent = function(t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n)
    }, b.Event = function(t, e) {
        if (!(this instanceof b.Event)) return new b.Event(t, e);
        t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? _t : kt, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && b.extend(this, e), this.timeStamp = t && t.timeStamp || Date.now(), this[b.expando] = !0
    }, b.Event.prototype = {
        constructor: b.Event,
        isDefaultPrevented: kt,
        isPropagationStopped: kt,
        isImmediatePropagationStopped: kt,
        isSimulated: !1,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = _t, t && !this.isSimulated && t.preventDefault()
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = _t, t && !this.isSimulated && t.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = _t, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, b.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(t) {
            var e = t.button;
            return null == t.which && bt.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && xt.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
        }
    }, b.event.addProp), b.each({
        focus: "focusin",
        blur: "focusout"
    }, (function(t, e) {
        b.event.special[t] = {
            setup: function() {
                return Lt(this, t, Et), !1
            },
            trigger: function() {
                return Lt(this, t), !0
            },
            delegateType: e
        }
    })), b.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, (function(t, e) {
        b.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var n, i = this,
                    r = t.relatedTarget,
                    o = t.handleObj;
                return r && (r === i || b.contains(i, r)) || (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n
            }
        }
    })), b.fn.extend({
        on: function(t, e, n, i) {
            return Tt(this, t, e, n, i)
        },
        one: function(t, e, n, i) {
            return Tt(this, t, e, n, i, 1)
        },
        off: function(t, e, n) {
            var i, r;
            if (t && t.preventDefault && t.handleObj) return i = t.handleObj, b(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof t) {
                for (r in t) this.off(r, e, t[r]);
                return this
            }
            return !1 !== e && "function" != typeof e || (n = e, e = void 0), !1 === n && (n = kt), this.each((function() {
                b.event.remove(this, t, n, e)
            }))
        }
    });
    var St = /<script|<style|<link/i,
        At = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Nt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Dt(t, e) {
        return T(t, "table") && T(11 !== e.nodeType ? e : e.firstChild, "tr") && b(t).children("tbody")[0] || t
    }

    function It(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
    }

    function Mt(t) {
        return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"), t
    }

    function $t(t, e) {
        var n, i, r, o, s, a;
        if (1 === e.nodeType) {
            if (Q.hasData(t) && (a = Q.get(t).events))
                for (r in Q.remove(e, "handle events"), a)
                    for (n = 0, i = a[r].length; n < i; n++) b.event.add(e, r, a[r][n]);
            Y.hasData(t) && (o = Y.access(t), s = b.extend({}, o), Y.set(e, s))
        }
    }

    function Bt(t, e) {
        var n = e.nodeName.toLowerCase();
        "input" === n && dt.test(t.type) ? e.checked = t.checked : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
    }

    function Ot(t, e, n, i) {
        e = o(e);
        var r, s, a, l, c, h, u = 0,
            d = t.length,
            g = d - 1,
            v = e[0],
            m = p(v);
        if (m || d > 1 && "string" == typeof v && !f.checkClone && At.test(v)) return t.each((function(r) {
            var o = t.eq(r);
            m && (e[0] = v.call(this, r, o.html())), Ot(o, e, n, i)
        }));
        if (d && (s = (r = yt(e, t[0].ownerDocument, !1, t, i)).firstChild, 1 === r.childNodes.length && (r = s), s || i)) {
            for (l = (a = b.map(vt(r, "script"), It)).length; u < d; u++) c = r, u !== g && (c = b.clone(c, !0, !0), l && b.merge(a, vt(c, "script"))), n.call(t[u], c, u);
            if (l)
                for (h = a[a.length - 1].ownerDocument, b.map(a, Mt), u = 0; u < l; u++) pt.test((c = a[u]).type || "") && !Q.access(c, "globalEval") && b.contains(h, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? b._evalUrl && !c.noModule && b._evalUrl(c.src, {
                    nonce: c.nonce || c.getAttribute("nonce")
                }, h) : w(c.textContent.replace(Nt, ""), c, h))
        }
        return t
    }

    function jt(t, e, n) {
        for (var i, r = e ? b.filter(e, t) : t, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || b.cleanData(vt(i)), i.parentNode && (n && it(i) && mt(vt(i, "script")), i.parentNode.removeChild(i));
        return t
    }
    b.extend({
        htmlPrefilter: function(t) {
            return t
        },
        clone: function(t, e, n) {
            var i, r, o, s, a = t.cloneNode(!0),
                l = it(t);
            if (!(f.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || b.isXMLDoc(t)))
                for (s = vt(a), i = 0, r = (o = vt(t)).length; i < r; i++) Bt(o[i], s[i]);
            if (e)
                if (n)
                    for (o = o || vt(t), s = s || vt(a), i = 0, r = o.length; i < r; i++) $t(o[i], s[i]);
                else $t(t, a);
            return (s = vt(a, "script")).length > 0 && mt(s, !l && vt(t, "script")), a
        },
        cleanData: function(t) {
            for (var e, n, i, r = b.event.special, o = 0; void 0 !== (n = t[o]); o++)
                if (U(n)) {
                    if (e = n[Q.expando]) {
                        if (e.events)
                            for (i in e.events) r[i] ? b.event.remove(n, i) : b.removeEvent(n, i, e.handle);
                        n[Q.expando] = void 0
                    }
                    n[Y.expando] && (n[Y.expando] = void 0)
                }
        }
    }), b.fn.extend({
        detach: function(t) {
            return jt(this, t, !0)
        },
        remove: function(t) {
            return jt(this, t)
        },
        text: function(t) {
            return q(this, (function(t) {
                return void 0 === t ? b.text(this) : this.empty().each((function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                }))
            }), null, t, arguments.length)
        },
        append: function() {
            return Ot(this, arguments, (function(t) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Dt(this, t).appendChild(t)
            }))
        },
        prepend: function() {
            return Ot(this, arguments, (function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = Dt(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            }))
        },
        before: function() {
            return Ot(this, arguments, (function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            }))
        },
        after: function() {
            return Ot(this, arguments, (function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            }))
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (b.cleanData(vt(t, !1)), t.textContent = "");
            return this
        },
        clone: function(t, e) {
            return t = null != t && t, e = null == e ? t : e, this.map((function() {
                return b.clone(this, t, e)
            }))
        },
        html: function(t) {
            return q(this, (function(t) {
                var e = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if ("string" == typeof t && !St.test(t) && !gt[(ft.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = b.htmlPrefilter(t);
                    try {
                        for (; n < i; n++) 1 === (e = this[n] || {}).nodeType && (b.cleanData(vt(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (r) {}
                }
                e && this.empty().append(t)
            }), null, t, arguments.length)
        },
        replaceWith: function() {
            var t = [];
            return Ot(this, arguments, (function(e) {
                var n = this.parentNode;
                b.inArray(this, t) < 0 && (b.cleanData(vt(this)), n && n.replaceChild(e, this))
            }), t)
        }
    }), b.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, (function(t, e) {
        b.fn[t] = function(t) {
            for (var n, i = [], r = b(t), o = r.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), b(r[a])[e](n), s.apply(i, n.get());
            return this.pushStack(i)
        }
    }));
    var Pt = new RegExp("^(" + J + ")(?!px)[a-z%]+$", "i"),
        Ht = function(e) {
            var n = e.ownerDocument.defaultView;
            return n && n.opener || (n = t), n.getComputedStyle(e)
        },
        zt = function(t, e, n) {
            var i, r, o = {};
            for (r in e) o[r] = t.style[r], t.style[r] = e[r];
            for (r in i = n.call(t), e) t.style[r] = o[r];
            return i
        },
        qt = new RegExp(et.join("|"), "i");

    function Ft(t, e, n) {
        var i, r, o, s, a = t.style;
        return (n = n || Ht(t)) && ("" !== (s = n.getPropertyValue(e) || n[e]) || it(t) || (s = b.style(t, e)), !f.pixelBoxStyles() && Pt.test(s) && qt.test(e) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o)), void 0 !== s ? s + "" : s
    }

    function Rt(t, e) {
        return {
            get: function() {
                if (!t()) return (this.get = e).apply(this, arguments);
                delete this.get
            }
        }
    }! function() {
        function e() {
            if (h) {
                c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", h.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", nt.appendChild(c).appendChild(h);
                var e = t.getComputedStyle(h);
                i = "1%" !== e.top, l = 12 === n(e.marginLeft), h.style.right = "60%", s = 36 === n(e.right), r = 36 === n(e.width), h.style.position = "absolute", o = 12 === n(h.offsetWidth / 3), nt.removeChild(c), h = null
            }
        }

        function n(t) {
            return Math.round(parseFloat(t))
        }
        var i, r, o, s, a, l, c = v.createElement("div"),
            h = v.createElement("div");
        h.style && (h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", f.clearCloneStyle = "content-box" === h.style.backgroundClip, b.extend(f, {
            boxSizingReliable: function() {
                return e(), r
            },
            pixelBoxStyles: function() {
                return e(), s
            },
            pixelPosition: function() {
                return e(), i
            },
            reliableMarginLeft: function() {
                return e(), l
            },
            scrollboxSize: function() {
                return e(), o
            },
            reliableTrDimensions: function() {
                var e, n, i, r;
                return null == a && (e = v.createElement("table"), n = v.createElement("tr"), i = v.createElement("div"), e.style.cssText = "position:absolute;left:-11111px", n.style.height = "1px", i.style.height = "9px", nt.appendChild(e).appendChild(n).appendChild(i), r = t.getComputedStyle(n), a = parseInt(r.height) > 3, nt.removeChild(e)), a
            }
        }))
    }();
    var Wt = ["Webkit", "Moz", "ms"],
        Vt = v.createElement("div").style,
        Ut = {};

    function Zt(t) {
        return b.cssProps[t] || Ut[t] || (t in Vt ? t : Ut[t] = function(t) {
            for (var e = t[0].toUpperCase() + t.slice(1), n = Wt.length; n--;)
                if ((t = Wt[n] + e) in Vt) return t
        }(t) || t)
    }
    var Qt = /^(none|table(?!-c[ea]).+)/,
        Yt = /^--/,
        Xt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Kt = {
            letterSpacing: "0",
            fontWeight: "400"
        };

    function Gt(t, e, n) {
        var i = tt.exec(e);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e
    }

    function Jt(t, e, n, i, r, o) {
        var s = "width" === e ? 1 : 0,
            a = 0,
            l = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (; s < 4; s += 2) "margin" === n && (l += b.css(t, n + et[s], !0, r)), i ? ("content" === n && (l -= b.css(t, "padding" + et[s], !0, r)), "margin" !== n && (l -= b.css(t, "border" + et[s] + "Width", !0, r))) : (l += b.css(t, "padding" + et[s], !0, r), "padding" !== n ? l += b.css(t, "border" + et[s] + "Width", !0, r) : a += b.css(t, "border" + et[s] + "Width", !0, r));
        return !i && o >= 0 && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - o - l - a - .5)) || 0), l
    }

    function te(t, e, n) {
        var i = Ht(t),
            r = (!f.boxSizingReliable() || n) && "border-box" === b.css(t, "boxSizing", !1, i),
            o = r,
            s = Ft(t, e, i),
            a = "offset" + e[0].toUpperCase() + e.slice(1);
        if (Pt.test(s)) {
            if (!n) return s;
            s = "auto"
        }
        return (!f.boxSizingReliable() && r || !f.reliableTrDimensions() && T(t, "tr") || "auto" === s || !parseFloat(s) && "inline" === b.css(t, "display", !1, i)) && t.getClientRects().length && (r = "border-box" === b.css(t, "boxSizing", !1, i), (o = a in t) && (s = t[a])), (s = parseFloat(s) || 0) + Jt(t, e, n || (r ? "border" : "content"), o, i, s) + "px"
    }

    function ee(t, e, n, i, r) {
        return new ee.prototype.init(t, e, n, i, r)
    }
    b.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var n = Ft(t, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(t, e, n, i) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var r, o, s, a = V(e),
                    l = Yt.test(e),
                    c = t.style;
                if (l || (e = Zt(a)), s = b.cssHooks[e] || b.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (r = s.get(t, !1, i)) ? r : c[e];
                "string" == (o = typeof n) && (r = tt.exec(n)) && r[1] && (n = st(t, e, r), o = "number"), null != n && n == n && ("number" !== o || l || (n += r && r[3] || (b.cssNumber[a] ? "" : "px")), f.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (c[e] = "inherit"), s && "set" in s && void 0 === (n = s.set(t, n, i)) || (l ? c.setProperty(e, n) : c[e] = n))
            }
        },
        css: function(t, e, n, i) {
            var r, o, s, a = V(e);
            return Yt.test(e) || (e = Zt(a)), (s = b.cssHooks[e] || b.cssHooks[a]) && "get" in s && (r = s.get(t, !0, n)), void 0 === r && (r = Ft(t, e, i)), "normal" === r && e in Kt && (r = Kt[e]), "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r
        }
    }), b.each(["height", "width"], (function(t, e) {
        b.cssHooks[e] = {
            get: function(t, n, i) {
                if (n) return !Qt.test(b.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? te(t, e, i) : zt(t, Xt, (function() {
                    return te(t, e, i)
                }))
            },
            set: function(t, n, i) {
                var r, o = Ht(t),
                    s = !f.scrollboxSize() && "absolute" === o.position,
                    a = (s || i) && "border-box" === b.css(t, "boxSizing", !1, o),
                    l = i ? Jt(t, e, i, a, o) : 0;
                return a && s && (l -= Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - parseFloat(o[e]) - Jt(t, e, "border", !1, o) - .5)), l && (r = tt.exec(n)) && "px" !== (r[3] || "px") && (t.style[e] = n, n = b.css(t, e)), Gt(0, n, l)
            }
        }
    })), b.cssHooks.marginLeft = Rt(f.reliableMarginLeft, (function(t, e) {
        if (e) return (parseFloat(Ft(t, "marginLeft")) || t.getBoundingClientRect().left - zt(t, {
            marginLeft: 0
        }, (function() {
            return t.getBoundingClientRect().left
        }))) + "px"
    })), b.each({
        margin: "",
        padding: "",
        border: "Width"
    }, (function(t, e) {
        b.cssHooks[t + e] = {
            expand: function(n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[t + et[i] + e] = o[i] || o[i - 2] || o[0];
                return r
            }
        }, "margin" !== t && (b.cssHooks[t + e].set = Gt)
    })), b.fn.extend({
        css: function(t, e) {
            return q(this, (function(t, e, n) {
                var i, r, o = {},
                    s = 0;
                if (Array.isArray(e)) {
                    for (i = Ht(t), r = e.length; s < r; s++) o[e[s]] = b.css(t, e[s], !1, i);
                    return o
                }
                return void 0 !== n ? b.style(t, e, n) : b.css(t, e)
            }), t, e, arguments.length > 1)
        }
    }), b.Tween = ee, (ee.prototype = {
        constructor: ee,
        init: function(t, e, n, i, r, o) {
            this.elem = t, this.prop = n, this.easing = r || b.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = o || (b.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var t = ee.propHooks[this.prop];
            return t && t.get ? t.get(this) : ee.propHooks._default.get(this)
        },
        run: function(t) {
            var e, n = ee.propHooks[this.prop];
            return this.pos = e = this.options.duration ? b.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : ee.propHooks._default.set(this), this
        }
    }).init.prototype = ee.prototype, (ee.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = b.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
            },
            set: function(t) {
                b.fx.step[t.prop] ? b.fx.step[t.prop](t) : 1 !== t.elem.nodeType || !b.cssHooks[t.prop] && null == t.elem.style[Zt(t.prop)] ? t.elem[t.prop] = t.now : b.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    }).scrollTop = ee.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, b.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        },
        _default: "swing"
    }, b.fx = ee.prototype.init, b.fx.step = {};
    var ne, ie, re = /^(?:toggle|show|hide)$/,
        oe = /queueHooks$/;

    function se() {
        ie && (!1 === v.hidden && t.requestAnimationFrame ? t.requestAnimationFrame(se) : t.setTimeout(se, b.fx.interval), b.fx.tick())
    }

    function ae() {
        return t.setTimeout((function() {
            ne = void 0
        })), ne = Date.now()
    }

    function le(t, e) {
        var n, i = 0,
            r = {
                height: t
            };
        for (e = e ? 1 : 0; i < 4; i += 2 - e) r["margin" + (n = et[i])] = r["padding" + n] = t;
        return e && (r.opacity = r.width = t), r
    }

    function ce(t, e, n) {
        for (var i, r = (he.tweeners[e] || []).concat(he.tweeners["*"]), o = 0, s = r.length; o < s; o++)
            if (i = r[o].call(n, e, t)) return i
    }

    function he(t, e, n) {
        var i, r, o = 0,
            s = he.prefilters.length,
            a = b.Deferred().always((function() {
                delete l.elem
            })),
            l = function() {
                if (r) return !1;
                for (var e = ne || ae(), n = Math.max(0, c.startTime + c.duration - e), i = 1 - (n / c.duration || 0), o = 0, s = c.tweens.length; o < s; o++) c.tweens[o].run(i);
                return a.notifyWith(t, [c, i, n]), i < 1 && s ? n : (s || a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c]), !1)
            },
            c = a.promise({
                elem: t,
                props: b.extend({}, e),
                opts: b.extend(!0, {
                    specialEasing: {},
                    easing: b.easing._default
                }, n),
                originalProperties: e,
                originalOptions: n,
                startTime: ne || ae(),
                duration: n.duration,
                tweens: [],
                createTween: function(e, n) {
                    var i = b.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);
                    return c.tweens.push(i), i
                },
                stop: function(e) {
                    var n = 0,
                        i = e ? c.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; n < i; n++) c.tweens[n].run(1);
                    return e ? (a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c, e])) : a.rejectWith(t, [c, e]), this
                }
            }),
            h = c.props;
        for (function(t, e) {
                var n, i, r, o, s;
                for (n in t)
                    if (r = e[i = V(n)], o = t[n], Array.isArray(o) && (r = o[1], o = t[n] = o[0]), n !== i && (t[i] = o, delete t[n]), (s = b.cssHooks[i]) && "expand" in s)
                        for (n in o = s.expand(o), delete t[i], o) n in t || (t[n] = o[n], e[n] = r);
                    else e[i] = r
            }(h, c.opts.specialEasing); o < s; o++)
            if (i = he.prefilters[o].call(c, t, h, c.opts)) return p(i.stop) && (b._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)), i;
        return b.map(h, ce, c), p(c.opts.start) && c.opts.start.call(t, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), b.fx.timer(b.extend(l, {
            elem: t,
            anim: c,
            queue: c.opts.queue
        })), c
    }
    b.Animation = b.extend(he, {
            tweeners: {
                "*": [function(t, e) {
                    var n = this.createTween(t, e);
                    return st(n.elem, t, tt.exec(e), n), n
                }]
            },
            tweener: function(t, e) {
                p(t) ? (e = t, t = ["*"]) : t = t.match($);
                for (var n, i = 0, r = t.length; i < r; i++)(he.tweeners[n = t[i]] = he.tweeners[n] || []).unshift(e)
            },
            prefilters: [function(t, e, n) {
                var i, r, o, s, a, l, c, h, u = "width" in e || "height" in e,
                    d = this,
                    f = {},
                    p = t.style,
                    g = t.nodeType && ot(t),
                    v = Q.get(t, "fxshow");
                for (i in n.queue || (null == (s = b._queueHooks(t, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function() {
                        s.unqueued || a()
                    }), s.unqueued++, d.always((function() {
                        d.always((function() {
                            s.unqueued--, b.queue(t, "fx").length || s.empty.fire()
                        }))
                    }))), e)
                    if (re.test(r = e[i])) {
                        if (delete e[i], o = o || "toggle" === r, r === (g ? "hide" : "show")) {
                            if ("show" !== r || !v || void 0 === v[i]) continue;
                            g = !0
                        }
                        f[i] = v && v[i] || b.style(t, i)
                    }
                if ((l = !b.isEmptyObject(e)) || !b.isEmptyObject(f))
                    for (i in u && 1 === t.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (c = v && v.display) && (c = Q.get(t, "display")), "none" === (h = b.css(t, "display")) && (c ? h = c : (ct([t], !0), c = t.style.display || c, h = b.css(t, "display"), ct([t]))), ("inline" === h || "inline-block" === h && null != c) && "none" === b.css(t, "float") && (l || (d.done((function() {
                            p.display = c
                        })), null == c && (c = "none" === (h = p.display) ? "" : h)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", d.always((function() {
                            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                        }))), l = !1, f) l || (v ? "hidden" in v && (g = v.hidden) : v = Q.access(t, "fxshow", {
                        display: c
                    }), o && (v.hidden = !g), g && ct([t], !0), d.done((function() {
                        for (i in g || ct([t]), Q.remove(t, "fxshow"), f) b.style(t, i, f[i])
                    }))), l = ce(g ? v[i] : 0, i, d), i in v || (v[i] = l.start, g && (l.end = l.start, l.start = 0))
            }],
            prefilter: function(t, e) {
                e ? he.prefilters.unshift(t) : he.prefilters.push(t)
            }
        }), b.speed = function(t, e, n) {
            var i = t && "object" == typeof t ? b.extend({}, t) : {
                complete: n || !n && e || p(t) && t,
                duration: t,
                easing: n && e || e && !p(e) && e
            };
            return b.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration = i.duration in b.fx.speeds ? b.fx.speeds[i.duration] : b.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                p(i.old) && i.old.call(this), i.queue && b.dequeue(this, i.queue)
            }, i
        }, b.fn.extend({
            fadeTo: function(t, e, n, i) {
                return this.filter(ot).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, n, i)
            },
            animate: function(t, e, n, i) {
                var r = b.isEmptyObject(t),
                    o = b.speed(e, n, i),
                    s = function() {
                        var e = he(this, b.extend({}, t), o);
                        (r || Q.get(this, "finish")) && e.stop(!0)
                    };
                return s.finish = s, r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
            },
            stop: function(t, e, n) {
                var i = function(t) {
                    var e = t.stop;
                    delete t.stop, e(n)
                };
                return "string" != typeof t && (n = e, e = t, t = void 0), e && this.queue(t || "fx", []), this.each((function() {
                    var e = !0,
                        r = null != t && t + "queueHooks",
                        o = b.timers,
                        s = Q.get(this);
                    if (r) s[r] && s[r].stop && i(s[r]);
                    else
                        for (r in s) s[r] && s[r].stop && oe.test(r) && i(s[r]);
                    for (r = o.length; r--;) o[r].elem !== this || null != t && o[r].queue !== t || (o[r].anim.stop(n), e = !1, o.splice(r, 1));
                    !e && n || b.dequeue(this, t)
                }))
            },
            finish: function(t) {
                return !1 !== t && (t = t || "fx"), this.each((function() {
                    var e, n = Q.get(this),
                        i = n[t + "queue"],
                        r = n[t + "queueHooks"],
                        o = b.timers,
                        s = i ? i.length : 0;
                    for (n.finish = !0, b.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                    for (e = 0; e < s; e++) i[e] && i[e].finish && i[e].finish.call(this);
                    delete n.finish
                }))
            }
        }), b.each(["toggle", "show", "hide"], (function(t, e) {
            var n = b.fn[e];
            b.fn[e] = function(t, i, r) {
                return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(le(e, !0), t, i, r)
            }
        })), b.each({
            slideDown: le("show"),
            slideUp: le("hide"),
            slideToggle: le("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, (function(t, e) {
            b.fn[t] = function(t, n, i) {
                return this.animate(e, t, n, i)
            }
        })), b.timers = [], b.fx.tick = function() {
            var t, e = 0,
                n = b.timers;
            for (ne = Date.now(); e < n.length; e++)(t = n[e])() || n[e] !== t || n.splice(e--, 1);
            n.length || b.fx.stop(), ne = void 0
        }, b.fx.timer = function(t) {
            b.timers.push(t), b.fx.start()
        }, b.fx.interval = 13, b.fx.start = function() {
            ie || (ie = !0, se())
        }, b.fx.stop = function() {
            ie = null
        }, b.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, b.fn.delay = function(e, n) {
            return e = b.fx && b.fx.speeds[e] || e, this.queue(n = n || "fx", (function(n, i) {
                var r = t.setTimeout(n, e);
                i.stop = function() {
                    t.clearTimeout(r)
                }
            }))
        },
        function() {
            var t = v.createElement("input"),
                e = v.createElement("select").appendChild(v.createElement("option"));
            t.type = "checkbox", f.checkOn = "" !== t.value, f.optSelected = e.selected, (t = v.createElement("input")).value = "t", t.type = "radio", f.radioValue = "t" === t.value
        }();
    var ue, de = b.expr.attrHandle;
    b.fn.extend({
        attr: function(t, e) {
            return q(this, b.attr, t, e, arguments.length > 1)
        },
        removeAttr: function(t) {
            return this.each((function() {
                b.removeAttr(this, t)
            }))
        }
    }), b.extend({
        attr: function(t, e, n) {
            var i, r, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === t.getAttribute ? b.prop(t, e, n) : (1 === o && b.isXMLDoc(t) || (r = b.attrHooks[e.toLowerCase()] || (b.expr.match.bool.test(e) ? ue : void 0)), void 0 !== n ? null === n ? void b.removeAttr(t, e) : r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : r && "get" in r && null !== (i = r.get(t, e)) ? i : null == (i = b.find.attr(t, e)) ? void 0 : i)
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!f.radioValue && "radio" === e && T(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e), n && (t.value = n), e
                    }
                }
            }
        },
        removeAttr: function(t, e) {
            var n, i = 0,
                r = e && e.match($);
            if (r && 1 === t.nodeType)
                for (; n = r[i++];) t.removeAttribute(n)
        }
    }), ue = {
        set: function(t, e, n) {
            return !1 === e ? b.removeAttr(t, n) : t.setAttribute(n, n), n
        }
    }, b.each(b.expr.match.bool.source.match(/\w+/g), (function(t, e) {
        var n = de[e] || b.find.attr;
        de[e] = function(t, e, i) {
            var r, o, s = e.toLowerCase();
            return i || (o = de[s], de[s] = r, r = null != n(t, e, i) ? s : null, de[s] = o), r
        }
    }));
    var fe = /^(?:input|select|textarea|button)$/i,
        pe = /^(?:a|area)$/i;

    function ge(t) {
        return (t.match($) || []).join(" ")
    }

    function ve(t) {
        return t.getAttribute && t.getAttribute("class") || ""
    }

    function me(t) {
        return Array.isArray(t) ? t : "string" == typeof t && t.match($) || []
    }
    b.fn.extend({
        prop: function(t, e) {
            return q(this, b.prop, t, e, arguments.length > 1)
        },
        removeProp: function(t) {
            return this.each((function() {
                delete this[b.propFix[t] || t]
            }))
        }
    }), b.extend({
        prop: function(t, e, n) {
            var i, r, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && b.isXMLDoc(t) || (r = b.propHooks[e = b.propFix[e] || e]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : t[e] = n : r && "get" in r && null !== (i = r.get(t, e)) ? i : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = b.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : fe.test(t.nodeName) || pe.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), f.optSelected || (b.propHooks.selected = {
        get: function(t) {
            return null
        },
        set: function(t) {}
    }), b.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
        b.propFix[this.toLowerCase()] = this
    })), b.fn.extend({
        addClass: function(t) {
            var e, n, i, r, o, s, a, l = 0;
            if (p(t)) return this.each((function(e) {
                b(this).addClass(t.call(this, e, ve(this)))
            }));
            if ((e = me(t)).length)
                for (; n = this[l++];)
                    if (r = ve(n), i = 1 === n.nodeType && " " + ge(r) + " ") {
                        for (s = 0; o = e[s++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        r !== (a = ge(i)) && n.setAttribute("class", a)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, i, r, o, s, a, l = 0;
            if (p(t)) return this.each((function(e) {
                b(this).removeClass(t.call(this, e, ve(this)))
            }));
            if (!arguments.length) return this.attr("class", "");
            if ((e = me(t)).length)
                for (; n = this[l++];)
                    if (r = ve(n), i = 1 === n.nodeType && " " + ge(r) + " ") {
                        for (s = 0; o = e[s++];)
                            for (; i.indexOf(" " + o + " ") > -1;) i = i.replace(" " + o + " ", " ");
                        r !== (a = ge(i)) && n.setAttribute("class", a)
                    }
            return this
        },
        toggleClass: function(t, e) {
            var n = typeof t,
                i = "string" === n || Array.isArray(t);
            return "boolean" == typeof e && i ? e ? this.addClass(t) : this.removeClass(t) : p(t) ? this.each((function(n) {
                b(this).toggleClass(t.call(this, n, ve(this), e), e)
            })) : this.each((function() {
                var e, r, o, s;
                if (i)
                    for (r = 0, o = b(this), s = me(t); e = s[r++];) o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                else void 0 !== t && "boolean" !== n || ((e = ve(this)) && Q.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : Q.get(this, "__className__") || ""))
            }))
        },
        hasClass: function(t) {
            var e, n, i = 0;
            for (e = " " + t + " "; n = this[i++];)
                if (1 === n.nodeType && (" " + ge(ve(n)) + " ").indexOf(e) > -1) return !0;
            return !1
        }
    });
    var we = /\r/g;
    b.fn.extend({
        val: function(t) {
            var e, n, i, r = this[0];
            return arguments.length ? (i = p(t), this.each((function(n) {
                var r;
                1 === this.nodeType && (null == (r = i ? t.call(this, n, b(this).val()) : t) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = b.map(r, (function(t) {
                    return null == t ? "" : t + ""
                }))), (e = b.valHooks[this.type] || b.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r))
            }))) : r ? (e = b.valHooks[r.type] || b.valHooks[r.nodeName.toLowerCase()]) && "get" in e && void 0 !== (n = e.get(r, "value")) ? n : "string" == typeof(n = r.value) ? n.replace(we, "") : null == n ? "" : n : void 0
        }
    }), b.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = b.find.attr(t, "value");
                    return null != e ? e : ge(b.text(t))
                }
            },
            select: {
                get: function(t) {
                    var e, n, i, r = t.options,
                        o = t.selectedIndex,
                        s = "select-one" === t.type,
                        a = s ? null : [],
                        l = s ? o + 1 : r.length;
                    for (i = o < 0 ? l : s ? o : 0; i < l; i++)
                        if (((n = r[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !T(n.parentNode, "optgroup"))) {
                            if (e = b(n).val(), s) return e;
                            a.push(e)
                        }
                    return a
                },
                set: function(t, e) {
                    for (var n, i, r = t.options, o = b.makeArray(e), s = r.length; s--;)((i = r[s]).selected = b.inArray(b.valHooks.option.get(i), o) > -1) && (n = !0);
                    return n || (t.selectedIndex = -1), o
                }
            }
        }
    }), b.each(["radio", "checkbox"], (function() {
        b.valHooks[this] = {
            set: function(t, e) {
                if (Array.isArray(e)) return t.checked = b.inArray(b(t).val(), e) > -1
            }
        }, f.checkOn || (b.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    })), f.focusin = "onfocusin" in t;
    var ye = /^(?:focusinfocus|focusoutblur)$/,
        be = function(t) {
            t.stopPropagation()
        };
    b.extend(b.event, {
        trigger: function(e, n, i, r) {
            var o, s, a, l, c, u, d, f, m = [i || v],
                w = h.call(e, "type") ? e.type : e,
                y = h.call(e, "namespace") ? e.namespace.split(".") : [];
            if (s = f = a = i = i || v, 3 !== i.nodeType && 8 !== i.nodeType && !ye.test(w + b.event.triggered) && (w.indexOf(".") > -1 && (y = w.split("."), w = y.shift(), y.sort()), c = w.indexOf(":") < 0 && "on" + w, (e = e[b.expando] ? e : new b.Event(w, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = y.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null == n ? [e] : b.makeArray(n, [e]), d = b.event.special[w] || {}, r || !d.trigger || !1 !== d.trigger.apply(i, n))) {
                if (!r && !d.noBubble && !g(i)) {
                    for (ye.test((l = d.delegateType || w) + w) || (s = s.parentNode); s; s = s.parentNode) m.push(s), a = s;
                    a === (i.ownerDocument || v) && m.push(a.defaultView || a.parentWindow || t)
                }
                for (o = 0;
                    (s = m[o++]) && !e.isPropagationStopped();) f = s, e.type = o > 1 ? l : d.bindType || w, (u = (Q.get(s, "events") || Object.create(null))[e.type] && Q.get(s, "handle")) && u.apply(s, n), (u = c && s[c]) && u.apply && U(s) && (e.result = u.apply(s, n), !1 === e.result && e.preventDefault());
                return e.type = w, r || e.isDefaultPrevented() || d._default && !1 !== d._default.apply(m.pop(), n) || !U(i) || c && p(i[w]) && !g(i) && ((a = i[c]) && (i[c] = null), b.event.triggered = w, e.isPropagationStopped() && f.addEventListener(w, be), i[w](), e.isPropagationStopped() && f.removeEventListener(w, be), b.event.triggered = void 0, a && (i[c] = a)), e.result
            }
        },
        simulate: function(t, e, n) {
            var i = b.extend(new b.Event, n, {
                type: t,
                isSimulated: !0
            });
            b.event.trigger(i, null, e)
        }
    }), b.fn.extend({
        trigger: function(t, e) {
            return this.each((function() {
                b.event.trigger(t, e, this)
            }))
        },
        triggerHandler: function(t, e) {
            var n = this[0];
            if (n) return b.event.trigger(t, e, n, !0)
        }
    }), f.focusin || b.each({
        focus: "focusin",
        blur: "focusout"
    }, (function(t, e) {
        var n = function(t) {
            b.event.simulate(e, t.target, b.event.fix(t))
        };
        b.event.special[e] = {
            setup: function() {
                var i = this.ownerDocument || this.document || this,
                    r = Q.access(i, e);
                r || i.addEventListener(t, n, !0), Q.access(i, e, (r || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this.document || this,
                    r = Q.access(i, e) - 1;
                r ? Q.access(i, e, r) : (i.removeEventListener(t, n, !0), Q.remove(i, e))
            }
        }
    }));
    var xe = t.location,
        Ce = {
            guid: Date.now()
        },
        _e = /\?/;
    b.parseXML = function(e) {
        var n;
        if (!e || "string" != typeof e) return null;
        try {
            n = (new t.DOMParser).parseFromString(e, "text/xml")
        } catch (i) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || b.error("Invalid XML: " + e), n
    };
    var ke = /\[\]$/,
        Ee = /\r?\n/g,
        Te = /^(?:submit|button|image|reset|file)$/i,
        Le = /^(?:input|select|textarea|keygen)/i;

    function Se(t, e, n, i) {
        var r;
        if (Array.isArray(e)) b.each(e, (function(e, r) {
            n || ke.test(t) ? i(t, r) : Se(t + "[" + ("object" == typeof r && null != r ? e : "") + "]", r, n, i)
        }));
        else if (n || "object" !== y(e)) i(t, e);
        else
            for (r in e) Se(t + "[" + r + "]", e[r], n, i)
    }
    b.param = function(t, e) {
        var n, i = [],
            r = function(t, e) {
                var n = p(e) ? e() : e;
                i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (null == t) return "";
        if (Array.isArray(t) || t.jquery && !b.isPlainObject(t)) b.each(t, (function() {
            r(this.name, this.value)
        }));
        else
            for (n in t) Se(n, t[n], e, r);
        return i.join("&")
    }, b.fn.extend({
        serialize: function() {
            return b.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map((function() {
                var t = b.prop(this, "elements");
                return t ? b.makeArray(t) : this
            })).filter((function() {
                var t = this.type;
                return this.name && !b(this).is(":disabled") && Le.test(this.nodeName) && !Te.test(t) && (this.checked || !dt.test(t))
            })).map((function(t, e) {
                var n = b(this).val();
                return null == n ? null : Array.isArray(n) ? b.map(n, (function(t) {
                    return {
                        name: e.name,
                        value: t.replace(Ee, "\r\n")
                    }
                })) : {
                    name: e.name,
                    value: n.replace(Ee, "\r\n")
                }
            })).get()
        }
    });
    var Ae = /%20/g,
        Ne = /#.*$/,
        De = /([?&])_=[^&]*/,
        Ie = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Me = /^(?:GET|HEAD)$/,
        $e = /^\/\//,
        Be = {},
        Oe = {},
        je = "*/".concat("*"),
        Pe = v.createElement("a");

    function He(t) {
        return function(e, n) {
            "string" != typeof e && (n = e, e = "*");
            var i, r = 0,
                o = e.toLowerCase().match($) || [];
            if (p(n))
                for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
        }
    }

    function ze(t, e, n, i) {
        var r = {},
            o = t === Oe;

        function s(a) {
            var l;
            return r[a] = !0, b.each(t[a] || [], (function(t, a) {
                var c = a(e, n, i);
                return "string" != typeof c || o || r[c] ? o ? !(l = c) : void 0 : (e.dataTypes.unshift(c), s(c), !1)
            })), l
        }
        return s(e.dataTypes[0]) || !r["*"] && s("*")
    }

    function qe(t, e) {
        var n, i, r = b.ajaxSettings.flatOptions || {};
        for (n in e) void 0 !== e[n] && ((r[n] ? t : i || (i = {}))[n] = e[n]);
        return i && b.extend(!0, t, i), t
    }
    Pe.href = xe.href, b.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: xe.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(xe.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": je,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": b.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? qe(qe(t, b.ajaxSettings), e) : qe(b.ajaxSettings, t)
        },
        ajaxPrefilter: He(Be),
        ajaxTransport: He(Oe),
        ajax: function(e, n) {
            "object" == typeof e && (n = e, e = void 0);
            var i, r, o, s, a, l, c, h, u, d, f = b.ajaxSetup({}, n = n || {}),
                p = f.context || f,
                g = f.context && (p.nodeType || p.jquery) ? b(p) : b.event,
                m = b.Deferred(),
                w = b.Callbacks("once memory"),
                y = f.statusCode || {},
                x = {},
                C = {},
                _ = "canceled",
                k = {
                    readyState: 0,
                    getResponseHeader: function(t) {
                        var e;
                        if (c) {
                            if (!s)
                                for (s = {}; e = Ie.exec(o);) s[e[1].toLowerCase() + " "] = (s[e[1].toLowerCase() + " "] || []).concat(e[2]);
                            e = s[t.toLowerCase() + " "]
                        }
                        return null == e ? null : e.join(", ")
                    },
                    getAllResponseHeaders: function() {
                        return c ? o : null
                    },
                    setRequestHeader: function(t, e) {
                        return null == c && (t = C[t.toLowerCase()] = C[t.toLowerCase()] || t, x[t] = e), this
                    },
                    overrideMimeType: function(t) {
                        return null == c && (f.mimeType = t), this
                    },
                    statusCode: function(t) {
                        var e;
                        if (t)
                            if (c) k.always(t[k.status]);
                            else
                                for (e in t) y[e] = [y[e], t[e]];
                        return this
                    },
                    abort: function(t) {
                        var e = t || _;
                        return i && i.abort(e), E(0, e), this
                    }
                };
            if (m.promise(k), f.url = ((e || f.url || xe.href) + "").replace($e, xe.protocol + "//"), f.type = n.method || n.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match($) || [""], null == f.crossDomain) {
                l = v.createElement("a");
                try {
                    l.href = f.url, l.href = l.href, f.crossDomain = Pe.protocol + "//" + Pe.host != l.protocol + "//" + l.host
                } catch (T) {
                    f.crossDomain = !0
                }
            }
            if (f.data && f.processData && "string" != typeof f.data && (f.data = b.param(f.data, f.traditional)), ze(Be, f, n, k), c) return k;
            for (u in (h = b.event && f.global) && 0 == b.active++ && b.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Me.test(f.type), r = f.url.replace(Ne, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(Ae, "+")) : (d = f.url.slice(r.length), f.data && (f.processData || "string" == typeof f.data) && (r += (_e.test(r) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (r = r.replace(De, "$1"), d = (_e.test(r) ? "&" : "?") + "_=" + Ce.guid++ + d), f.url = r + d), f.ifModified && (b.lastModified[r] && k.setRequestHeader("If-Modified-Since", b.lastModified[r]), b.etag[r] && k.setRequestHeader("If-None-Match", b.etag[r])), (f.data && f.hasContent && !1 !== f.contentType || n.contentType) && k.setRequestHeader("Content-Type", f.contentType), k.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + je + "; q=0.01" : "") : f.accepts["*"]), f.headers) k.setRequestHeader(u, f.headers[u]);
            if (f.beforeSend && (!1 === f.beforeSend.call(p, k, f) || c)) return k.abort();
            if (_ = "abort", w.add(f.complete), k.done(f.success), k.fail(f.error), i = ze(Oe, f, n, k)) {
                if (k.readyState = 1, h && g.trigger("ajaxSend", [k, f]), c) return k;
                f.async && f.timeout > 0 && (a = t.setTimeout((function() {
                    k.abort("timeout")
                }), f.timeout));
                try {
                    c = !1, i.send(x, E)
                } catch (T) {
                    if (c) throw T;
                    E(-1, T)
                }
            } else E(-1, "No Transport");

            function E(e, n, s, l) {
                var u, d, v, x, C, _ = n;
                c || (c = !0, a && t.clearTimeout(a), i = void 0, o = l || "", k.readyState = e > 0 ? 4 : 0, u = e >= 200 && e < 300 || 304 === e, s && (x = function(t, e, n) {
                    for (var i, r, o, s, a = t.contents, l = t.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
                    if (i)
                        for (r in a)
                            if (a[r] && a[r].test(i)) {
                                l.unshift(r);
                                break
                            }
                    if (l[0] in n) o = l[0];
                    else {
                        for (r in n) {
                            if (!l[0] || t.converters[r + " " + l[0]]) {
                                o = r;
                                break
                            }
                            s || (s = r)
                        }
                        o = o || s
                    }
                    if (o) return o !== l[0] && l.unshift(o), n[o]
                }(f, k, s)), !u && b.inArray("script", f.dataTypes) > -1 && (f.converters["text script"] = function() {}), x = function(t, e, n, i) {
                    var r, o, s, a, l, c = {},
                        h = t.dataTypes.slice();
                    if (h[1])
                        for (s in t.converters) c[s.toLowerCase()] = t.converters[s];
                    for (o = h.shift(); o;)
                        if (t.responseFields[o] && (n[t.responseFields[o]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = h.shift())
                            if ("*" === o) o = l;
                            else if ("*" !== l && l !== o) {
                        if (!(s = c[l + " " + o] || c["* " + o]))
                            for (r in c)
                                if ((a = r.split(" "))[1] === o && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                    !0 === s ? s = c[r] : !0 !== c[r] && (o = a[0], h.unshift(a[1]));
                                    break
                                }
                        if (!0 !== s)
                            if (s && t.throws) e = s(e);
                            else try {
                                e = s(e)
                            } catch (T) {
                                return {
                                    state: "parsererror",
                                    error: s ? T : "No conversion from " + l + " to " + o
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: e
                    }
                }(f, x, k, u), u ? (f.ifModified && ((C = k.getResponseHeader("Last-Modified")) && (b.lastModified[r] = C), (C = k.getResponseHeader("etag")) && (b.etag[r] = C)), 204 === e || "HEAD" === f.type ? _ = "nocontent" : 304 === e ? _ = "notmodified" : (_ = x.state, d = x.data, u = !(v = x.error))) : (v = _, !e && _ || (_ = "error", e < 0 && (e = 0))), k.status = e, k.statusText = (n || _) + "", u ? m.resolveWith(p, [d, _, k]) : m.rejectWith(p, [k, _, v]), k.statusCode(y), y = void 0, h && g.trigger(u ? "ajaxSuccess" : "ajaxError", [k, f, u ? d : v]), w.fireWith(p, [k, _]), h && (g.trigger("ajaxComplete", [k, f]), --b.active || b.event.trigger("ajaxStop")))
            }
            return k
        },
        getJSON: function(t, e, n) {
            return b.get(t, e, n, "json")
        },
        getScript: function(t, e) {
            return b.get(t, void 0, e, "script")
        }
    }), b.each(["get", "post"], (function(t, e) {
        b[e] = function(t, n, i, r) {
            return p(n) && (r = r || i, i = n, n = void 0), b.ajax(b.extend({
                url: t,
                type: e,
                dataType: r,
                data: n,
                success: i
            }, b.isPlainObject(t) && t))
        }
    })), b.ajaxPrefilter((function(t) {
        var e;
        for (e in t.headers) "content-type" === e.toLowerCase() && (t.contentType = t.headers[e] || "")
    })), b._evalUrl = function(t, e, n) {
        return b.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(t) {
                b.globalEval(t, e, n)
            }
        })
    }, b.fn.extend({
        wrapAll: function(t) {
            var e;
            return this[0] && (p(t) && (t = t.call(this[0])), e = b(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map((function() {
                for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                return t
            })).append(this)), this
        },
        wrapInner: function(t) {
            return p(t) ? this.each((function(e) {
                b(this).wrapInner(t.call(this, e))
            })) : this.each((function() {
                var e = b(this),
                    n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t)
            }))
        },
        wrap: function(t) {
            var e = p(t);
            return this.each((function(n) {
                b(this).wrapAll(e ? t.call(this, n) : t)
            }))
        },
        unwrap: function(t) {
            return this.parent(t).not("body").each((function() {
                b(this).replaceWith(this.childNodes)
            })), this
        }
    }), b.expr.pseudos.hidden = function(t) {
        return !b.expr.pseudos.visible(t)
    }, b.expr.pseudos.visible = function(t) {
        return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
    }, b.ajaxSettings.xhr = function() {
        try {
            return new t.XMLHttpRequest
        } catch (e) {}
    };
    var Fe = {
            0: 200,
            1223: 204
        },
        Re = b.ajaxSettings.xhr();
    f.cors = !!Re && "withCredentials" in Re, f.ajax = Re = !!Re, b.ajaxTransport((function(e) {
        var n, i;
        if (f.cors || Re && !e.crossDomain) return {
            send: function(r, o) {
                var s, a = e.xhr();
                if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                    for (s in e.xhrFields) a[s] = e.xhrFields[s];
                for (s in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r) a.setRequestHeader(s, r[s]);
                n = function(t) {
                    return function() {
                        n && (n = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Fe[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                            binary: a.response
                        } : {
                            text: a.responseText
                        }, a.getAllResponseHeaders()))
                    }
                }, a.onload = n(), i = a.onerror = a.ontimeout = n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function() {
                    4 === a.readyState && t.setTimeout((function() {
                        n && i()
                    }))
                }, n = n("abort");
                try {
                    a.send(e.hasContent && e.data || null)
                } catch (l) {
                    if (n) throw l
                }
            },
            abort: function() {
                n && n()
            }
        }
    })), b.ajaxPrefilter((function(t) {
        t.crossDomain && (t.contents.script = !1)
    })), b.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(t) {
                return b.globalEval(t), t
            }
        }
    }), b.ajaxPrefilter("script", (function(t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
    })), b.ajaxTransport("script", (function(t) {
        var e, n;
        if (t.crossDomain || t.scriptAttrs) return {
            send: function(i, r) {
                e = b("<script>").attr(t.scriptAttrs || {}).prop({
                    charset: t.scriptCharset,
                    src: t.url
                }).on("load error", n = function(t) {
                    e.remove(), n = null, t && r("error" === t.type ? 404 : 200, t.type)
                }), v.head.appendChild(e[0])
            },
            abort: function() {
                n && n()
            }
        }
    }));
    var We, Ve = [],
        Ue = /(=)\?(?=&|$)|\?\?/;
    b.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = Ve.pop() || b.expando + "_" + Ce.guid++;
            return this[t] = !0, t
        }
    }), b.ajaxPrefilter("json jsonp", (function(e, n, i) {
        var r, o, s, a = !1 !== e.jsonp && (Ue.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ue.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = p(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Ue, "$1" + r) : !1 !== e.jsonp && (e.url += (_e.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
            return s || b.error(r + " was not called"), s[0]
        }, e.dataTypes[0] = "json", o = t[r], t[r] = function() {
            s = arguments
        }, i.always((function() {
            void 0 === o ? b(t).removeProp(r) : t[r] = o, e[r] && (e.jsonpCallback = n.jsonpCallback, Ve.push(r)), s && p(o) && o(s[0]), s = o = void 0
        })), "script"
    })), f.createHTMLDocument = ((We = v.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === We.childNodes.length), b.parseHTML = function(t, e, n) {
        return "string" != typeof t ? [] : ("boolean" == typeof e && (n = e, e = !1), e || (f.createHTMLDocument ? ((i = (e = v.implementation.createHTMLDocument("")).createElement("base")).href = v.location.href, e.head.appendChild(i)) : e = v), o = !n && [], (r = L.exec(t)) ? [e.createElement(r[1])] : (r = yt([t], e, o), o && o.length && b(o).remove(), b.merge([], r.childNodes)));
        var i, r, o
    }, b.fn.load = function(t, e, n) {
        var i, r, o, s = this,
            a = t.indexOf(" ");
        return a > -1 && (i = ge(t.slice(a)), t = t.slice(0, a)), p(e) ? (n = e, e = void 0) : e && "object" == typeof e && (r = "POST"), s.length > 0 && b.ajax({
            url: t,
            type: r || "GET",
            dataType: "html",
            data: e
        }).done((function(t) {
            o = arguments, s.html(i ? b("<div>").append(b.parseHTML(t)).find(i) : t)
        })).always(n && function(t, e) {
            s.each((function() {
                n.apply(this, o || [t.responseText, e, t])
            }))
        }), this
    }, b.expr.pseudos.animated = function(t) {
        return b.grep(b.timers, (function(e) {
            return t === e.elem
        })).length
    }, b.offset = {
        setOffset: function(t, e, n) {
            var i, r, o, s, a, l, c = b.css(t, "position"),
                h = b(t),
                u = {};
            "static" === c && (t.style.position = "relative"), a = h.offset(), o = b.css(t, "top"), l = b.css(t, "left"), ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1 ? (s = (i = h.position()).top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), p(e) && (e = e.call(t, n, b.extend({}, a))), null != e.top && (u.top = e.top - a.top + s), null != e.left && (u.left = e.left - a.left + r), "using" in e ? e.using.call(t, u) : ("number" == typeof u.top && (u.top += "px"), "number" == typeof u.left && (u.left += "px"), h.css(u))
        }
    }, b.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each((function(e) {
                b.offset.setOffset(this, t, e)
            }));
            var e, n, i = this[0];
            return i ? i.getClientRects().length ? {
                top: (e = i.getBoundingClientRect()).top + (n = i.ownerDocument.defaultView).pageYOffset,
                left: e.left + n.pageXOffset
            } : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var t, e, n, i = this[0],
                    r = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === b.css(i, "position")) e = i.getBoundingClientRect();
                else {
                    for (e = this.offset(), n = i.ownerDocument, t = i.offsetParent || n.documentElement; t && (t === n.body || t === n.documentElement) && "static" === b.css(t, "position");) t = t.parentNode;
                    t && t !== i && 1 === t.nodeType && ((r = b(t).offset()).top += b.css(t, "borderTopWidth", !0), r.left += b.css(t, "borderLeftWidth", !0))
                }
                return {
                    top: e.top - r.top - b.css(i, "marginTop", !0),
                    left: e.left - r.left - b.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map((function() {
                for (var t = this.offsetParent; t && "static" === b.css(t, "position");) t = t.offsetParent;
                return t || nt
            }))
        }
    }), b.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, (function(t, e) {
        var n = "pageYOffset" === e;
        b.fn[t] = function(i) {
            return q(this, (function(t, i, r) {
                var o;
                if (g(t) ? o = t : 9 === t.nodeType && (o = t.defaultView), void 0 === r) return o ? o[e] : t[i];
                o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : t[i] = r
            }), t, i, arguments.length)
        }
    })), b.each(["top", "left"], (function(t, e) {
        b.cssHooks[e] = Rt(f.pixelPosition, (function(t, n) {
            if (n) return n = Ft(t, e), Pt.test(n) ? b(t).position()[e] + "px" : n
        }))
    })), b.each({
        Height: "height",
        Width: "width"
    }, (function(t, e) {
        b.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, (function(n, i) {
            b.fn[i] = function(r, o) {
                var s = arguments.length && (n || "boolean" != typeof r),
                    a = n || (!0 === r || !0 === o ? "margin" : "border");
                return q(this, (function(e, n, r) {
                    var o;
                    return g(e) ? 0 === i.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === r ? b.css(e, n, a) : b.style(e, n, r, a)
                }), e, s ? r : void 0, s)
            }
        }))
    })), b.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(t, e) {
        b.fn[e] = function(t) {
            return this.on(e, t)
        }
    })), b.fn.extend({
        bind: function(t, e, n) {
            return this.on(t, null, e, n)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, n, i) {
            return this.on(e, t, n, i)
        },
        undelegate: function(t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        },
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    }), b.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(t, e) {
        b.fn[e] = function(t, n) {
            return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
        }
    }));
    var Ze = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    b.proxy = function(t, e) {
        var n, i, o;
        if ("string" == typeof e && (n = t[e], e = t, t = n), p(t)) return i = r.call(arguments, 2), (o = function() {
            return t.apply(e || this, i.concat(r.call(arguments)))
        }).guid = t.guid = t.guid || b.guid++, o
    }, b.holdReady = function(t) {
        t ? b.readyWait++ : b.ready(!0)
    }, b.isArray = Array.isArray, b.parseJSON = JSON.parse, b.nodeName = T, b.isFunction = p, b.isWindow = g, b.camelCase = V, b.type = y, b.now = Date.now, b.isNumeric = function(t) {
        var e = b.type(t);
        return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
    }, b.trim = function(t) {
        return null == t ? "" : (t + "").replace(Ze, "")
    }, "function" == typeof define && define.amd && define("jquery", [], (function() {
        return b
    }));
    var Qe = t.jQuery,
        Ye = t.$;
    return b.noConflict = function(e) {
        return t.$ === b && (t.$ = Ye), e && t.jQuery === b && (t.jQuery = Qe), b
    }, void 0 === e && (t.jQuery = t.$ = b), b
})),
function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery")) : "function" == typeof define && define.amd ? define(["exports", "jquery"], e) : e((t = t || self).bootstrap = {}, t.jQuery)
}(this, (function(t, e) {
    "use strict";

    function n(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }

    function i(t, e, i) {
        return e && n(t.prototype, e), i && n(t, i), t
    }

    function r(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }

    function o(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(t);
            e && (i = i.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), n.push.apply(n, i)
        }
        return n
    }

    function s(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? o(Object(n), !0).forEach((function(e) {
                r(t, e, n[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }))
        }
        return t
    }
    e = e && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
    var a = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function(t) {
            do {
                t += ~~(1e6 * Math.random())
            } while (document.getElementById(t));
            return t
        },
        getSelectorFromElement: function(t) {
            var e = t.getAttribute("data-target");
            if (!e || "#" === e) {
                var n = t.getAttribute("href");
                e = n && "#" !== n ? n.trim() : ""
            }
            try {
                return document.querySelector(e) ? e : null
            } catch (t) {
                return null
            }
        },
        getTransitionDurationFromElement: function(t) {
            if (!t) return 0;
            var n = e(t).css("transition-duration"),
                i = e(t).css("transition-delay"),
                r = parseFloat(n),
                o = parseFloat(i);
            return r || o ? (n = n.split(",")[0], i = i.split(",")[0], 1e3 * (parseFloat(n) + parseFloat(i))) : 0
        },
        reflow: function(t) {
            return t.offsetHeight
        },
        triggerTransitionEnd: function(t) {
            e(t).trigger("transitionend")
        },
        supportsTransitionEnd: function() {
            return Boolean("transitionend")
        },
        isElement: function(t) {
            return (t[0] || t).nodeType
        },
        typeCheckConfig: function(t, e, n) {
            for (var i in n)
                if (Object.prototype.hasOwnProperty.call(n, i)) {
                    var r = n[i],
                        o = e[i],
                        s = o && a.isElement(o) ? "element" : null === (l = o) || void 0 === l ? "" + l : {}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase();
                    if (!new RegExp(r).test(s)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + r + '".')
                }
            var l
        },
        findShadowRoot: function(t) {
            if (!document.documentElement.attachShadow) return null;
            if ("function" == typeof t.getRootNode) {
                var e = t.getRootNode();
                return e instanceof ShadowRoot ? e : null
            }
            return t instanceof ShadowRoot ? t : t.parentNode ? a.findShadowRoot(t.parentNode) : null
        },
        jQueryDetection: function() {
            if (void 0 === e) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
            var t = e.fn.jquery.split(" ")[0].split(".");
            if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || t[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
        }
    };
    a.jQueryDetection(), e.fn.emulateTransitionEnd = function(t) {
        var n = this,
            i = !1;
        return e(this).one(a.TRANSITION_END, (function() {
            i = !0
        })), setTimeout((function() {
            i || a.triggerTransitionEnd(n)
        }), t), this
    }, e.event.special[a.TRANSITION_END] = {
        bindType: "transitionend",
        delegateType: "transitionend",
        handle: function(t) {
            if (e(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
        }
    };
    var l = "alert",
        c = e.fn[l],
        h = function() {
            function t(t) {
                this._element = t
            }
            var n = t.prototype;
            return n.close = function(t) {
                var e = this._element;
                t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
            }, n.dispose = function() {
                e.removeData(this._element, "bs.alert"), this._element = null
            }, n._getRootElement = function(t) {
                var n = a.getSelectorFromElement(t),
                    i = !1;
                return n && (i = document.querySelector(n)), i || (i = e(t).closest(".alert")[0]), i
            }, n._triggerCloseEvent = function(t) {
                var n = e.Event("close.bs.alert");
                return e(t).trigger(n), n
            }, n._removeElement = function(t) {
                var n = this;
                if (e(t).removeClass("show"), e(t).hasClass("fade")) {
                    var i = a.getTransitionDurationFromElement(t);
                    e(t).one(a.TRANSITION_END, (function(e) {
                        return n._destroyElement(t, e)
                    })).emulateTransitionEnd(i)
                } else this._destroyElement(t)
            }, n._destroyElement = function(t) {
                e(t).detach().trigger("closed.bs.alert").remove()
            }, t._jQueryInterface = function(n) {
                return this.each((function() {
                    var i = e(this),
                        r = i.data("bs.alert");
                    r || (r = new t(this), i.data("bs.alert", r)), "close" === n && r[n](this)
                }))
            }, t._handleDismiss = function(t) {
                return function(e) {
                    e && e.preventDefault(), t.close(this)
                }
            }, i(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.5.0"
                }
            }]), t
        }();
    e(document).on("click.bs.alert.data-api", '[data-dismiss="alert"]', h._handleDismiss(new h)), e.fn[l] = h._jQueryInterface, e.fn[l].Constructor = h, e.fn[l].noConflict = function() {
        return e.fn[l] = c, h._jQueryInterface
    };
    var u = e.fn.button,
        d = function() {
            function t(t) {
                this._element = t
            }
            var n = t.prototype;
            return n.toggle = function() {
                var t = !0,
                    n = !0,
                    i = e(this._element).closest('[data-toggle="buttons"]')[0];
                if (i) {
                    var r = this._element.querySelector('input:not([type="hidden"])');
                    if (r) {
                        if ("radio" === r.type)
                            if (r.checked && this._element.classList.contains("active")) t = !1;
                            else {
                                var o = i.querySelector(".active");
                                o && e(o).removeClass("active")
                            }
                        t && ("checkbox" !== r.type && "radio" !== r.type || (r.checked = !this._element.classList.contains("active")), e(r).trigger("change")), r.focus(), n = !1
                    }
                }
                this._element.hasAttribute("disabled") || this._element.classList.contains("disabled") || (n && this._element.setAttribute("aria-pressed", !this._element.classList.contains("active")), t && e(this._element).toggleClass("active"))
            }, n.dispose = function() {
                e.removeData(this._element, "bs.button"), this._element = null
            }, t._jQueryInterface = function(n) {
                return this.each((function() {
                    var i = e(this).data("bs.button");
                    i || (i = new t(this), e(this).data("bs.button", i)), "toggle" === n && i[n]()
                }))
            }, i(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.5.0"
                }
            }]), t
        }();
    e(document).on("click.bs.button.data-api", '[data-toggle^="button"]', (function(t) {
        var n = t.target,
            i = n;
        if (e(n).hasClass("btn") || (n = e(n).closest(".btn")[0]), !n || n.hasAttribute("disabled") || n.classList.contains("disabled")) t.preventDefault();
        else {
            var r = n.querySelector('input:not([type="hidden"])');
            if (r && (r.hasAttribute("disabled") || r.classList.contains("disabled"))) return void t.preventDefault();
            "LABEL" === i.tagName && r && "checkbox" === r.type && t.preventDefault(), d._jQueryInterface.call(e(n), "toggle")
        }
    })).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', (function(t) {
        var n = e(t.target).closest(".btn")[0];
        e(n).toggleClass("focus", /^focus(in)?$/.test(t.type))
    })), e(window).on("load.bs.button.data-api", (function() {
        for (var t = [].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')), e = 0, n = t.length; e < n; e++) {
            var i = t[e],
                r = i.querySelector('input:not([type="hidden"])');
            r.checked || r.hasAttribute("checked") ? i.classList.add("active") : i.classList.remove("active")
        }
        for (var o = 0, s = (t = [].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length; o < s; o++) {
            var a = t[o];
            "true" === a.getAttribute("aria-pressed") ? a.classList.add("active") : a.classList.remove("active")
        }
    })), e.fn.button = d._jQueryInterface, e.fn.button.Constructor = d, e.fn.button.noConflict = function() {
        return e.fn.button = u, d._jQueryInterface
    };
    var f = "carousel",
        p = e.fn[f],
        g = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0,
            touch: !0
        },
        v = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
            touch: "boolean"
        },
        m = {
            TOUCH: "touch",
            PEN: "pen"
        },
        w = function() {
            function t(t, e) {
                this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._element = t, this._indicatorsElement = this._element.querySelector(".carousel-indicators"), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners()
            }
            var n = t.prototype;
            return n.next = function() {
                this._isSliding || this._slide("next")
            }, n.nextWhenVisible = function() {
                !document.hidden && e(this._element).is(":visible") && "hidden" !== e(this._element).css("visibility") && this.next()
            }, n.prev = function() {
                this._isSliding || this._slide("prev")
            }, n.pause = function(t) {
                t || (this._isPaused = !0), this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (a.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
            }, n.cycle = function(t) {
                t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
            }, n.to = function(t) {
                var n = this;
                this._activeElement = this._element.querySelector(".active.carousel-item");
                var i = this._getItemIndex(this._activeElement);
                if (!(t > this._items.length - 1 || t < 0))
                    if (this._isSliding) e(this._element).one("slid.bs.carousel", (function() {
                        return n.to(t)
                    }));
                    else {
                        if (i === t) return this.pause(), void this.cycle();
                        this._slide(t > i ? "next" : "prev", this._items[t])
                    }
            }, n.dispose = function() {
                e(this._element).off(".bs.carousel"), e.removeData(this._element, "bs.carousel"), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
            }, n._getConfig = function(t) {
                return t = s(s({}, g), t), a.typeCheckConfig(f, t, v), t
            }, n._handleSwipe = function() {
                var t = Math.abs(this.touchDeltaX);
                if (!(t <= 40)) {
                    var e = t / this.touchDeltaX;
                    this.touchDeltaX = 0, e > 0 && this.prev(), e < 0 && this.next()
                }
            }, n._addEventListeners = function() {
                var t = this;
                this._config.keyboard && e(this._element).on("keydown.bs.carousel", (function(e) {
                    return t._keydown(e)
                })), "hover" === this._config.pause && e(this._element).on("mouseenter.bs.carousel", (function(e) {
                    return t.pause(e)
                })).on("mouseleave.bs.carousel", (function(e) {
                    return t.cycle(e)
                })), this._config.touch && this._addTouchEventListeners()
            }, n._addTouchEventListeners = function() {
                var t = this;
                if (this._touchSupported) {
                    var n = function(e) {
                            t._pointerEvent && m[e.originalEvent.pointerType.toUpperCase()] ? t.touchStartX = e.originalEvent.clientX : t._pointerEvent || (t.touchStartX = e.originalEvent.touches[0].clientX)
                        },
                        i = function(e) {
                            t._pointerEvent && m[e.originalEvent.pointerType.toUpperCase()] && (t.touchDeltaX = e.originalEvent.clientX - t.touchStartX), t._handleSwipe(), "hover" === t._config.pause && (t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout((function(e) {
                                return t.cycle(e)
                            }), 500 + t._config.interval))
                        };
                    e(this._element.querySelectorAll(".carousel-item img")).on("dragstart.bs.carousel", (function(t) {
                        return t.preventDefault()
                    })), this._pointerEvent ? (e(this._element).on("pointerdown.bs.carousel", (function(t) {
                        return n(t)
                    })), e(this._element).on("pointerup.bs.carousel", (function(t) {
                        return i(t)
                    })), this._element.classList.add("pointer-event")) : (e(this._element).on("touchstart.bs.carousel", (function(t) {
                        return n(t)
                    })), e(this._element).on("touchmove.bs.carousel", (function(e) {
                        return function(e) {
                            t.touchDeltaX = e.originalEvent.touches && e.originalEvent.touches.length > 1 ? 0 : e.originalEvent.touches[0].clientX - t.touchStartX
                        }(e)
                    })), e(this._element).on("touchend.bs.carousel", (function(t) {
                        return i(t)
                    })))
                }
            }, n._keydown = function(t) {
                if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
                    case 37:
                        t.preventDefault(), this.prev();
                        break;
                    case 39:
                        t.preventDefault(), this.next()
                }
            }, n._getItemIndex = function(t) {
                return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(".carousel-item")) : [], this._items.indexOf(t)
            }, n._getItemByDirection = function(t, e) {
                var n = "next" === t,
                    i = "prev" === t,
                    r = this._getItemIndex(e);
                if ((i && 0 === r || n && r === this._items.length - 1) && !this._config.wrap) return e;
                var o = (r + ("prev" === t ? -1 : 1)) % this._items.length;
                return -1 === o ? this._items[this._items.length - 1] : this._items[o]
            }, n._triggerSlideEvent = function(t, n) {
                var i = this._getItemIndex(t),
                    r = this._getItemIndex(this._element.querySelector(".active.carousel-item")),
                    o = e.Event("slide.bs.carousel", {
                        relatedTarget: t,
                        direction: n,
                        from: r,
                        to: i
                    });
                return e(this._element).trigger(o), o
            }, n._setActiveIndicatorElement = function(t) {
                if (this._indicatorsElement) {
                    var n = [].slice.call(this._indicatorsElement.querySelectorAll(".active"));
                    e(n).removeClass("active");
                    var i = this._indicatorsElement.children[this._getItemIndex(t)];
                    i && e(i).addClass("active")
                }
            }, n._slide = function(t, n) {
                var i, r, o, s = this,
                    l = this._element.querySelector(".active.carousel-item"),
                    c = this._getItemIndex(l),
                    h = n || l && this._getItemByDirection(t, l),
                    u = this._getItemIndex(h),
                    d = Boolean(this._interval);
                if ("next" === t ? (i = "carousel-item-left", r = "carousel-item-next", o = "left") : (i = "carousel-item-right", r = "carousel-item-prev", o = "right"), h && e(h).hasClass("active")) this._isSliding = !1;
                else if (!this._triggerSlideEvent(h, o).isDefaultPrevented() && l && h) {
                    this._isSliding = !0, d && this.pause(), this._setActiveIndicatorElement(h);
                    var f = e.Event("slid.bs.carousel", {
                        relatedTarget: h,
                        direction: o,
                        from: c,
                        to: u
                    });
                    if (e(this._element).hasClass("slide")) {
                        e(h).addClass(r), a.reflow(h), e(l).addClass(i), e(h).addClass(i);
                        var p = parseInt(h.getAttribute("data-interval"), 10);
                        p ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = p) : this._config.interval = this._config.defaultInterval || this._config.interval;
                        var g = a.getTransitionDurationFromElement(l);
                        e(l).one(a.TRANSITION_END, (function() {
                            e(h).removeClass(i + " " + r).addClass("active"), e(l).removeClass("active " + r + " " + i), s._isSliding = !1, setTimeout((function() {
                                return e(s._element).trigger(f)
                            }), 0)
                        })).emulateTransitionEnd(g)
                    } else e(l).removeClass("active"), e(h).addClass("active"), this._isSliding = !1, e(this._element).trigger(f);
                    d && this.cycle()
                }
            }, t._jQueryInterface = function(n) {
                return this.each((function() {
                    var i = e(this).data("bs.carousel"),
                        r = s(s({}, g), e(this).data());
                    "object" == typeof n && (r = s(s({}, r), n));
                    var o = "string" == typeof n ? n : r.slide;
                    if (i || (i = new t(this, r), e(this).data("bs.carousel", i)), "number" == typeof n) i.to(n);
                    else if ("string" == typeof o) {
                        if (void 0 === i[o]) throw new TypeError('No method named "' + o + '"');
                        i[o]()
                    } else r.interval && r.ride && (i.pause(), i.cycle())
                }))
            }, t._dataApiClickHandler = function(n) {
                var i = a.getSelectorFromElement(this);
                if (i) {
                    var r = e(i)[0];
                    if (r && e(r).hasClass("carousel")) {
                        var o = s(s({}, e(r).data()), e(this).data()),
                            l = this.getAttribute("data-slide-to");
                        l && (o.interval = !1), t._jQueryInterface.call(e(r), o), l && e(r).data("bs.carousel").to(l), n.preventDefault()
                    }
                }
            }, i(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.5.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return g
                }
            }]), t
        }();
    e(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", w._dataApiClickHandler), e(window).on("load.bs.carousel.data-api", (function() {
        for (var t = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), n = 0, i = t.length; n < i; n++) {
            var r = e(t[n]);
            w._jQueryInterface.call(r, r.data())
        }
    })), e.fn[f] = w._jQueryInterface, e.fn[f].Constructor = w, e.fn[f].noConflict = function() {
        return e.fn[f] = p, w._jQueryInterface
    };
    var y = "collapse",
        b = e.fn[y],
        x = {
            toggle: !0,
            parent: ""
        },
        C = {
            toggle: "boolean",
            parent: "(string|element)"
        },
        _ = function() {
            function t(t, e) {
                this._isTransitioning = !1, this._element = t, this._config = this._getConfig(e), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
                for (var n = [].slice.call(document.querySelectorAll('[data-toggle="collapse"]')), i = 0, r = n.length; i < r; i++) {
                    var o = n[i],
                        s = a.getSelectorFromElement(o),
                        l = [].slice.call(document.querySelectorAll(s)).filter((function(e) {
                            return e === t
                        }));
                    null !== s && l.length > 0 && (this._selector = s, this._triggerArray.push(o))
                }
                this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
            }
            var n = t.prototype;
            return n.toggle = function() {
                e(this._element).hasClass("show") ? this.hide() : this.show()
            }, n.show = function() {
                var n, i, r = this;
                if (!(this._isTransitioning || e(this._element).hasClass("show") || (this._parent && 0 === (n = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter((function(t) {
                        return "string" == typeof r._config.parent ? t.getAttribute("data-parent") === r._config.parent : t.classList.contains("collapse")
                    }))).length && (n = null), n && (i = e(n).not(this._selector).data("bs.collapse")) && i._isTransitioning))) {
                    var o = e.Event("show.bs.collapse");
                    if (e(this._element).trigger(o), !o.isDefaultPrevented()) {
                        n && (t._jQueryInterface.call(e(n).not(this._selector), "hide"), i || e(n).data("bs.collapse", null));
                        var s = this._getDimension();
                        e(this._element).removeClass("collapse").addClass("collapsing"), this._element.style[s] = 0, this._triggerArray.length && e(this._triggerArray).removeClass("collapsed").attr("aria-expanded", !0), this.setTransitioning(!0);
                        var l = "scroll" + (s[0].toUpperCase() + s.slice(1)),
                            c = a.getTransitionDurationFromElement(this._element);
                        e(this._element).one(a.TRANSITION_END, (function() {
                            e(r._element).removeClass("collapsing").addClass("collapse show"), r._element.style[s] = "", r.setTransitioning(!1), e(r._element).trigger("shown.bs.collapse")
                        })).emulateTransitionEnd(c), this._element.style[s] = this._element[l] + "px"
                    }
                }
            }, n.hide = function() {
                var t = this;
                if (!this._isTransitioning && e(this._element).hasClass("show")) {
                    var n = e.Event("hide.bs.collapse");
                    if (e(this._element).trigger(n), !n.isDefaultPrevented()) {
                        var i = this._getDimension();
                        this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", a.reflow(this._element), e(this._element).addClass("collapsing").removeClass("collapse show");
                        var r = this._triggerArray.length;
                        if (r > 0)
                            for (var o = 0; o < r; o++) {
                                var s = this._triggerArray[o],
                                    l = a.getSelectorFromElement(s);
                                null !== l && (e([].slice.call(document.querySelectorAll(l))).hasClass("show") || e(s).addClass("collapsed").attr("aria-expanded", !1))
                            }
                        this.setTransitioning(!0), this._element.style[i] = "";
                        var c = a.getTransitionDurationFromElement(this._element);
                        e(this._element).one(a.TRANSITION_END, (function() {
                            t.setTransitioning(!1), e(t._element).removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                        })).emulateTransitionEnd(c)
                    }
                }
            }, n.setTransitioning = function(t) {
                this._isTransitioning = t
            }, n.dispose = function() {
                e.removeData(this._element, "bs.collapse"), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
            }, n._getConfig = function(t) {
                return (t = s(s({}, x), t)).toggle = Boolean(t.toggle), a.typeCheckConfig(y, t, C), t
            }, n._getDimension = function() {
                return e(this._element).hasClass("width") ? "width" : "height"
            }, n._getParent = function() {
                var n, i = this;
                a.isElement(this._config.parent) ? (n = this._config.parent, void 0 !== this._config.parent.jquery && (n = this._config.parent[0])) : n = document.querySelector(this._config.parent);
                var r = [].slice.call(n.querySelectorAll('[data-toggle="collapse"][data-parent="' + this._config.parent + '"]'));
                return e(r).each((function(e, n) {
                    i._addAriaAndCollapsedClass(t._getTargetFromElement(n), [n])
                })), n
            }, n._addAriaAndCollapsedClass = function(t, n) {
                var i = e(t).hasClass("show");
                n.length && e(n).toggleClass("collapsed", !i).attr("aria-expanded", i)
            }, t._getTargetFromElement = function(t) {
                var e = a.getSelectorFromElement(t);
                return e ? document.querySelector(e) : null
            }, t._jQueryInterface = function(n) {
                return this.each((function() {
                    var i = e(this),
                        r = i.data("bs.collapse"),
                        o = s(s(s({}, x), i.data()), "object" == typeof n && n ? n : {});
                    if (!r && o.toggle && "string" == typeof n && /show|hide/.test(n) && (o.toggle = !1), r || (r = new t(this, o), i.data("bs.collapse", r)), "string" == typeof n) {
                        if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');
                        r[n]()
                    }
                }))
            }, i(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.5.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return x
                }
            }]), t
        }();
    e(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', (function(t) {
        "A" === t.currentTarget.tagName && t.preventDefault();
        var n = e(this),
            i = a.getSelectorFromElement(this),
            r = [].slice.call(document.querySelectorAll(i));
        e(r).each((function() {
            var t = e(this),
                i = t.data("bs.collapse") ? "toggle" : n.data();
            _._jQueryInterface.call(t, i)
        }))
    })), e.fn[y] = _._jQueryInterface, e.fn[y].Constructor = _, e.fn[y].noConflict = function() {
        return e.fn[y] = b, _._jQueryInterface
    };
    var k = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator,
        E = function() {
            for (var t = ["Edge", "Trident", "Firefox"], e = 0; e < t.length; e += 1)
                if (k && navigator.userAgent.indexOf(t[e]) >= 0) return 1;
            return 0
        }(),
        T = k && window.Promise ? function(t) {
            var e = !1;
            return function() {
                e || (e = !0, window.Promise.resolve().then((function() {
                    e = !1, t()
                })))
            }
        } : function(t) {
            var e = !1;
            return function() {
                e || (e = !0, setTimeout((function() {
                    e = !1, t()
                }), E))
            }
        };

    function L(t) {
        return t && "[object Function]" === {}.toString.call(t)
    }

    function S(t, e) {
        if (1 !== t.nodeType) return [];
        var n = t.ownerDocument.defaultView.getComputedStyle(t, null);
        return e ? n[e] : n
    }

    function A(t) {
        return "HTML" === t.nodeName ? t : t.parentNode || t.host
    }

    function N(t) {
        if (!t) return document.body;
        switch (t.nodeName) {
            case "HTML":
            case "BODY":
                return t.ownerDocument.body;
            case "#document":
                return t.body
        }
        var e = S(t);
        return /(auto|scroll|overlay)/.test(e.overflow + e.overflowY + e.overflowX) ? t : N(A(t))
    }

    function D(t) {
        return t && t.referenceNode ? t.referenceNode : t
    }
    var I = k && !(!window.MSInputMethodContext || !document.documentMode),
        M = k && /MSIE 10/.test(navigator.userAgent);

    function $(t) {
        return 11 === t ? I : 10 === t ? M : I || M
    }

    function B(t) {
        if (!t) return document.documentElement;
        for (var e = $(10) ? document.body : null, n = t.offsetParent || null; n === e && t.nextElementSibling;) n = (t = t.nextElementSibling).offsetParent;
        var i = n && n.nodeName;
        return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === S(n, "position") ? B(n) : n : t ? t.ownerDocument.documentElement : document.documentElement
    }

    function O(t) {
        return null !== t.parentNode ? O(t.parentNode) : t
    }

    function j(t, e) {
        if (!(t && t.nodeType && e && e.nodeType)) return document.documentElement;
        var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
            i = n ? t : e,
            r = n ? e : t,
            o = document.createRange();
        o.setStart(i, 0), o.setEnd(r, 0);
        var s, a, l = o.commonAncestorContainer;
        if (t !== l && e !== l || i.contains(r)) return "BODY" === (a = (s = l).nodeName) || "HTML" !== a && B(s.firstElementChild) !== s ? B(l) : l;
        var c = O(t);
        return c.host ? j(c.host, e) : j(t, O(e).host)
    }

    function P(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
            n = "top" === e ? "scrollTop" : "scrollLeft",
            i = t.nodeName;
        if ("BODY" === i || "HTML" === i) {
            var r = t.ownerDocument.documentElement,
                o = t.ownerDocument.scrollingElement || r;
            return o[n]
        }
        return t[n]
    }

    function H(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = P(e, "top"),
            r = P(e, "left"),
            o = n ? -1 : 1;
        return t.top += i * o, t.bottom += i * o, t.left += r * o, t.right += r * o, t
    }

    function z(t, e) {
        var n = "x" === e ? "Left" : "Top",
            i = "Left" === n ? "Right" : "Bottom";
        return parseFloat(t["border" + n + "Width"], 10) + parseFloat(t["border" + i + "Width"], 10)
    }

    function q(t, e, n, i) {
        return Math.max(e["offset" + t], e["scroll" + t], n["client" + t], n["offset" + t], n["scroll" + t], $(10) ? parseInt(n["offset" + t]) + parseInt(i["margin" + ("Height" === t ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === t ? "Bottom" : "Right")]) : 0)
    }

    function F(t) {
        var e = t.body,
            n = t.documentElement,
            i = $(10) && getComputedStyle(n);
        return {
            height: q("Height", e, n, i),
            width: q("Width", e, n, i)
        }
    }
    var R = function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        },
        W = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(),
        V = function(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        },
        U = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
            }
            return t
        };

    function Z(t) {
        return U({}, t, {
            right: t.left + t.width,
            bottom: t.top + t.height
        })
    }

    function Q(t) {
        var e = {};
        try {
            if ($(10)) {
                e = t.getBoundingClientRect();
                var n = P(t, "top"),
                    i = P(t, "left");
                e.top += n, e.left += i, e.bottom += n, e.right += i
            } else e = t.getBoundingClientRect()
        } catch (t) {}
        var r = {
                left: e.left,
                top: e.top,
                width: e.right - e.left,
                height: e.bottom - e.top
            },
            o = "HTML" === t.nodeName ? F(t.ownerDocument) : {},
            s = t.offsetWidth - (o.width || t.clientWidth || r.width),
            a = t.offsetHeight - (o.height || t.clientHeight || r.height);
        if (s || a) {
            var l = S(t);
            s -= z(l, "x"), a -= z(l, "y"), r.width -= s, r.height -= a
        }
        return Z(r)
    }

    function Y(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = $(10),
            r = "HTML" === e.nodeName,
            o = Q(t),
            s = Q(e),
            a = N(t),
            l = S(e),
            c = parseFloat(l.borderTopWidth, 10),
            h = parseFloat(l.borderLeftWidth, 10);
        n && r && (s.top = Math.max(s.top, 0), s.left = Math.max(s.left, 0));
        var u = Z({
            top: o.top - s.top - c,
            left: o.left - s.left - h,
            width: o.width,
            height: o.height
        });
        if (u.marginTop = 0, u.marginLeft = 0, !i && r) {
            var d = parseFloat(l.marginTop, 10),
                f = parseFloat(l.marginLeft, 10);
            u.top -= c - d, u.bottom -= c - d, u.left -= h - f, u.right -= h - f, u.marginTop = d, u.marginLeft = f
        }
        return (i && !n ? e.contains(a) : e === a && "BODY" !== a.nodeName) && (u = H(u, e)), u
    }

    function X(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = t.ownerDocument.documentElement,
            i = Y(t, n),
            r = Math.max(n.clientWidth, window.innerWidth || 0),
            o = Math.max(n.clientHeight, window.innerHeight || 0),
            s = e ? 0 : P(n),
            a = e ? 0 : P(n, "left"),
            l = {
                top: s - i.top + i.marginTop,
                left: a - i.left + i.marginLeft,
                width: r,
                height: o
            };
        return Z(l)
    }

    function K(t) {
        var e = t.nodeName;
        if ("BODY" === e || "HTML" === e) return !1;
        if ("fixed" === S(t, "position")) return !0;
        var n = A(t);
        return !!n && K(n)
    }

    function G(t) {
        if (!t || !t.parentElement || $()) return document.documentElement;
        for (var e = t.parentElement; e && "none" === S(e, "transform");) e = e.parentElement;
        return e || document.documentElement
    }

    function J(t, e, n, i) {
        var r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            o = {
                top: 0,
                left: 0
            },
            s = r ? G(t) : j(t, D(e));
        if ("viewport" === i) o = X(s, r);
        else {
            var a = void 0;
            "scrollParent" === i ? "BODY" === (a = N(A(e))).nodeName && (a = t.ownerDocument.documentElement) : a = "window" === i ? t.ownerDocument.documentElement : i;
            var l = Y(a, s, r);
            if ("HTML" !== a.nodeName || K(s)) o = l;
            else {
                var c = F(t.ownerDocument),
                    h = c.height,
                    u = c.width;
                o.top += l.top - l.marginTop, o.bottom = h + l.top, o.left += l.left - l.marginLeft, o.right = u + l.left
            }
        }
        var d = "number" == typeof(n = n || 0);
        return o.left += d ? n : n.left || 0, o.top += d ? n : n.top || 0, o.right -= d ? n : n.right || 0, o.bottom -= d ? n : n.bottom || 0, o
    }

    function tt(t) {
        return t.width * t.height
    }

    function et(t, e, n, i, r) {
        var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === t.indexOf("auto")) return t;
        var s = J(n, i, o, r),
            a = {
                top: {
                    width: s.width,
                    height: e.top - s.top
                },
                right: {
                    width: s.right - e.right,
                    height: s.height
                },
                bottom: {
                    width: s.width,
                    height: s.bottom - e.bottom
                },
                left: {
                    width: e.left - s.left,
                    height: s.height
                }
            },
            l = Object.keys(a).map((function(t) {
                return U({
                    key: t
                }, a[t], {
                    area: tt(a[t])
                })
            })).sort((function(t, e) {
                return e.area - t.area
            })),
            c = l.filter((function(t) {
                return t.width >= n.clientWidth && t.height >= n.clientHeight
            })),
            h = c.length > 0 ? c[0].key : l[0].key,
            u = t.split("-")[1];
        return h + (u ? "-" + u : "")
    }

    function nt(t, e, n) {
        var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            r = i ? G(e) : j(e, D(n));
        return Y(n, r, i)
    }

    function it(t) {
        var e = t.ownerDocument.defaultView.getComputedStyle(t),
            n = parseFloat(e.marginTop || 0) + parseFloat(e.marginBottom || 0),
            i = parseFloat(e.marginLeft || 0) + parseFloat(e.marginRight || 0);
        return {
            width: t.offsetWidth + i,
            height: t.offsetHeight + n
        }
    }

    function rt(t) {
        var e = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        return t.replace(/left|right|bottom|top/g, (function(t) {
            return e[t]
        }))
    }

    function ot(t, e, n) {
        n = n.split("-")[0];
        var i = it(t),
            r = {
                width: i.width,
                height: i.height
            },
            o = -1 !== ["right", "left"].indexOf(n),
            s = o ? "top" : "left",
            a = o ? "left" : "top",
            l = o ? "height" : "width",
            c = o ? "width" : "height";
        return r[s] = e[s] + e[l] / 2 - i[l] / 2, r[a] = n === a ? e[a] - i[c] : e[rt(a)], r
    }

    function st(t, e) {
        return Array.prototype.find ? t.find(e) : t.filter(e)[0]
    }

    function at(t, e, n) {
        return (void 0 === n ? t : t.slice(0, function(t, e, n) {
            if (Array.prototype.findIndex) return t.findIndex((function(t) {
                return t[e] === n
            }));
            var i = st(t, (function(t) {
                return t[e] === n
            }));
            return t.indexOf(i)
        }(t, "name", n))).forEach((function(t) {
            t.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var n = t.function || t.fn;
            t.enabled && L(n) && (e.offsets.popper = Z(e.offsets.popper), e.offsets.reference = Z(e.offsets.reference), e = n(e, t))
        })), e
    }

    function lt() {
        if (!this.state.isDestroyed) {
            var t = {
                instance: this,
                styles: {},
                arrowStyles: {},
                attributes: {},
                flipped: !1,
                offsets: {}
            };
            t.offsets.reference = nt(this.state, this.popper, this.reference, this.options.positionFixed), t.placement = et(this.options.placement, t.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), t.originalPlacement = t.placement, t.positionFixed = this.options.positionFixed, t.offsets.popper = ot(this.popper, t.offsets.reference, t.placement), t.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", t = at(this.modifiers, t), this.state.isCreated ? this.options.onUpdate(t) : (this.state.isCreated = !0, this.options.onCreate(t))
        }
    }

    function ct(t, e) {
        return t.some((function(t) {
            return t.enabled && t.name === e
        }))
    }

    function ht(t) {
        for (var e = [!1, "ms", "Webkit", "Moz", "O"], n = t.charAt(0).toUpperCase() + t.slice(1), i = 0; i < e.length; i++) {
            var r = e[i],
                o = r ? "" + r + n : t;
            if (void 0 !== document.body.style[o]) return o
        }
        return null
    }

    function ut() {
        return this.state.isDestroyed = !0, ct(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[ht("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
    }

    function dt(t) {
        var e = t.ownerDocument;
        return e ? e.defaultView : window
    }

    function ft() {
        this.state.eventsEnabled || (this.state = function(t, e, n, i) {
            n.updateBound = i, dt(t).addEventListener("resize", n.updateBound, {
                passive: !0
            });
            var r = N(t);
            return function t(e, n, i, r) {
                var o = "BODY" === e.nodeName,
                    s = o ? e.ownerDocument.defaultView : e;
                s.addEventListener(n, i, {
                    passive: !0
                }), o || t(N(s.parentNode), n, i, r), r.push(s)
            }(r, "scroll", n.updateBound, n.scrollParents), n.scrollElement = r, n.eventsEnabled = !0, n
        }(this.reference, 0, this.state, this.scheduleUpdate))
    }

    function pt() {
        var t;
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (t = this.state, dt(this.reference).removeEventListener("resize", t.updateBound), t.scrollParents.forEach((function(e) {
            e.removeEventListener("scroll", t.updateBound)
        })), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t))
    }

    function gt(t) {
        return "" !== t && !isNaN(parseFloat(t)) && isFinite(t)
    }

    function vt(t, e) {
        Object.keys(e).forEach((function(n) {
            var i = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && gt(e[n]) && (i = "px"), t.style[n] = e[n] + i
        }))
    }
    var mt = k && /Firefox/i.test(navigator.userAgent);

    function wt(t, e, n) {
        var i = st(t, (function(t) {
                return t.name === e
            })),
            r = !!i && t.some((function(t) {
                return t.name === n && t.enabled && t.order < i.order
            }));
        if (!r) {
            var o = "`" + e + "`";
            console.warn("`" + n + "` modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!")
        }
        return r
    }
    var yt = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        bt = yt.slice(3);

    function xt(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = bt.indexOf(t),
            i = bt.slice(n + 1).concat(bt.slice(0, n));
        return e ? i.reverse() : i
    }
    var Ct = {
            placement: "bottom",
            positionFixed: !1,
            eventsEnabled: !0,
            removeOnDestroy: !1,
            onCreate: function() {},
            onUpdate: function() {},
            modifiers: {
                shift: {
                    order: 100,
                    enabled: !0,
                    fn: function(t) {
                        var e = t.placement,
                            n = e.split("-")[0],
                            i = e.split("-")[1];
                        if (i) {
                            var r = t.offsets,
                                o = r.reference,
                                s = r.popper,
                                a = -1 !== ["bottom", "top"].indexOf(n),
                                l = a ? "left" : "top",
                                c = a ? "width" : "height",
                                h = {
                                    start: V({}, l, o[l]),
                                    end: V({}, l, o[l] + o[c] - s[c])
                                };
                            t.offsets.popper = U({}, s, h[i])
                        }
                        return t
                    }
                },
                offset: {
                    order: 200,
                    enabled: !0,
                    fn: function(t, e) {
                        var n, i = e.offset,
                            r = t.offsets,
                            o = r.popper,
                            s = r.reference,
                            a = t.placement.split("-")[0];
                        return n = gt(+i) ? [+i, 0] : function(t, e, n, i) {
                            var r = [0, 0],
                                o = -1 !== ["right", "left"].indexOf(i),
                                s = t.split(/(\+|\-)/).map((function(t) {
                                    return t.trim()
                                })),
                                a = s.indexOf(st(s, (function(t) {
                                    return -1 !== t.search(/,|\s/)
                                })));
                            s[a] && -1 === s[a].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
                            var l = /\s*,\s*|\s+/,
                                c = -1 !== a ? [s.slice(0, a).concat([s[a].split(l)[0]]), [s[a].split(l)[1]].concat(s.slice(a + 1))] : [s];
                            return (c = c.map((function(t, i) {
                                var r = (1 === i ? !o : o) ? "height" : "width",
                                    s = !1;
                                return t.reduce((function(t, e) {
                                    return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e) ? (t[t.length - 1] = e, s = !0, t) : s ? (t[t.length - 1] += e, s = !1, t) : t.concat(e)
                                }), []).map((function(t) {
                                    return function(t, e, n, i) {
                                        var r = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                                            o = +r[1],
                                            s = r[2];
                                        if (!o) return t;
                                        if (0 === s.indexOf("%")) {
                                            var a = void 0;
                                            switch (s) {
                                                case "%p":
                                                    a = n;
                                                    break;
                                                case "%":
                                                case "%r":
                                                default:
                                                    a = i
                                            }
                                            return Z(a)[e] / 100 * o
                                        }
                                        return "vh" === s || "vw" === s ? ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o : o
                                    }(t, r, e, n)
                                }))
                            }))).forEach((function(t, e) {
                                t.forEach((function(n, i) {
                                    gt(n) && (r[e] += n * ("-" === t[i - 1] ? -1 : 1))
                                }))
                            })), r
                        }(i, o, s, a), "left" === a ? (o.top += n[0], o.left -= n[1]) : "right" === a ? (o.top += n[0], o.left += n[1]) : "top" === a ? (o.left += n[0], o.top -= n[1]) : "bottom" === a && (o.left += n[0], o.top += n[1]), t.popper = o, t
                    },
                    offset: 0
                },
                preventOverflow: {
                    order: 300,
                    enabled: !0,
                    fn: function(t, e) {
                        var n = e.boundariesElement || B(t.instance.popper);
                        t.instance.reference === n && (n = B(n));
                        var i = ht("transform"),
                            r = t.instance.popper.style,
                            o = r.top,
                            s = r.left,
                            a = r[i];
                        r.top = "", r.left = "", r[i] = "";
                        var l = J(t.instance.popper, t.instance.reference, e.padding, n, t.positionFixed);
                        r.top = o, r.left = s, r[i] = a, e.boundaries = l;
                        var c = t.offsets.popper,
                            h = {
                                primary: function(t) {
                                    var n = c[t];
                                    return c[t] < l[t] && !e.escapeWithReference && (n = Math.max(c[t], l[t])), V({}, t, n)
                                },
                                secondary: function(t) {
                                    var n = "right" === t ? "left" : "top",
                                        i = c[n];
                                    return c[t] > l[t] && !e.escapeWithReference && (i = Math.min(c[n], l[t] - ("right" === t ? c.width : c.height))), V({}, n, i)
                                }
                            };
                        return e.priority.forEach((function(t) {
                            var e = -1 !== ["left", "top"].indexOf(t) ? "primary" : "secondary";
                            c = U({}, c, h[e](t))
                        })), t.offsets.popper = c, t
                    },
                    priority: ["left", "right", "top", "bottom"],
                    padding: 5,
                    boundariesElement: "scrollParent"
                },
                keepTogether: {
                    order: 400,
                    enabled: !0,
                    fn: function(t) {
                        var e = t.offsets,
                            n = e.popper,
                            i = e.reference,
                            r = t.placement.split("-")[0],
                            o = Math.floor,
                            s = -1 !== ["top", "bottom"].indexOf(r),
                            a = s ? "right" : "bottom",
                            l = s ? "left" : "top",
                            c = s ? "width" : "height";
                        return n[a] < o(i[l]) && (t.offsets.popper[l] = o(i[l]) - n[c]), n[l] > o(i[a]) && (t.offsets.popper[l] = o(i[a])), t
                    }
                },
                arrow: {
                    order: 500,
                    enabled: !0,
                    fn: function(t, e) {
                        var n;
                        if (!wt(t.instance.modifiers, "arrow", "keepTogether")) return t;
                        var i = e.element;
                        if ("string" == typeof i) {
                            if (!(i = t.instance.popper.querySelector(i))) return t
                        } else if (!t.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), t;
                        var r = t.placement.split("-")[0],
                            o = t.offsets,
                            s = o.popper,
                            a = o.reference,
                            l = -1 !== ["left", "right"].indexOf(r),
                            c = l ? "height" : "width",
                            h = l ? "Top" : "Left",
                            u = h.toLowerCase(),
                            d = l ? "left" : "top",
                            f = l ? "bottom" : "right",
                            p = it(i)[c];
                        a[f] - p < s[u] && (t.offsets.popper[u] -= s[u] - (a[f] - p)), a[u] + p > s[f] && (t.offsets.popper[u] += a[u] + p - s[f]), t.offsets.popper = Z(t.offsets.popper);
                        var g = a[u] + a[c] / 2 - p / 2,
                            v = S(t.instance.popper),
                            m = parseFloat(v["margin" + h], 10),
                            w = parseFloat(v["border" + h + "Width"], 10),
                            y = g - t.offsets.popper[u] - m - w;
                        return y = Math.max(Math.min(s[c] - p, y), 0), t.arrowElement = i, t.offsets.arrow = (V(n = {}, u, Math.round(y)), V(n, d, ""), n), t
                    },
                    element: "[x-arrow]"
                },
                flip: {
                    order: 600,
                    enabled: !0,
                    fn: function(t, e) {
                        if (ct(t.instance.modifiers, "inner")) return t;
                        if (t.flipped && t.placement === t.originalPlacement) return t;
                        var n = J(t.instance.popper, t.instance.reference, e.padding, e.boundariesElement, t.positionFixed),
                            i = t.placement.split("-")[0],
                            r = rt(i),
                            o = t.placement.split("-")[1] || "",
                            s = [];
                        switch (e.behavior) {
                            case "flip":
                                s = [i, r];
                                break;
                            case "clockwise":
                                s = xt(i);
                                break;
                            case "counterclockwise":
                                s = xt(i, !0);
                                break;
                            default:
                                s = e.behavior
                        }
                        return s.forEach((function(a, l) {
                            if (i !== a || s.length === l + 1) return t;
                            i = t.placement.split("-")[0], r = rt(i);
                            var c = t.offsets.popper,
                                h = t.offsets.reference,
                                u = Math.floor,
                                d = "left" === i && u(c.right) > u(h.left) || "right" === i && u(c.left) < u(h.right) || "top" === i && u(c.bottom) > u(h.top) || "bottom" === i && u(c.top) < u(h.bottom),
                                f = u(c.left) < u(n.left),
                                p = u(c.right) > u(n.right),
                                g = u(c.top) < u(n.top),
                                v = u(c.bottom) > u(n.bottom),
                                m = "left" === i && f || "right" === i && p || "top" === i && g || "bottom" === i && v,
                                w = -1 !== ["top", "bottom"].indexOf(i),
                                y = !!e.flipVariations && (w && "start" === o && f || w && "end" === o && p || !w && "start" === o && g || !w && "end" === o && v) || !!e.flipVariationsByContent && (w && "start" === o && p || w && "end" === o && f || !w && "start" === o && v || !w && "end" === o && g);
                            (d || m || y) && (t.flipped = !0, (d || m) && (i = s[l + 1]), y && (o = function(t) {
                                return "end" === t ? "start" : "start" === t ? "end" : t
                            }(o)), t.placement = i + (o ? "-" + o : ""), t.offsets.popper = U({}, t.offsets.popper, ot(t.instance.popper, t.offsets.reference, t.placement)), t = at(t.instance.modifiers, t, "flip"))
                        })), t
                    },
                    behavior: "flip",
                    padding: 5,
                    boundariesElement: "viewport",
                    flipVariations: !1,
                    flipVariationsByContent: !1
                },
                inner: {
                    order: 700,
                    enabled: !1,
                    fn: function(t) {
                        var e = t.placement,
                            n = e.split("-")[0],
                            i = t.offsets,
                            r = i.popper,
                            o = i.reference,
                            s = -1 !== ["left", "right"].indexOf(n),
                            a = -1 === ["top", "left"].indexOf(n);
                        return r[s ? "left" : "top"] = o[n] - (a ? r[s ? "width" : "height"] : 0), t.placement = rt(e), t.offsets.popper = Z(r), t
                    }
                },
                hide: {
                    order: 800,
                    enabled: !0,
                    fn: function(t) {
                        if (!wt(t.instance.modifiers, "hide", "preventOverflow")) return t;
                        var e = t.offsets.reference,
                            n = st(t.instance.modifiers, (function(t) {
                                return "preventOverflow" === t.name
                            })).boundaries;
                        if (e.bottom < n.top || e.left > n.right || e.top > n.bottom || e.right < n.left) {
                            if (!0 === t.hide) return t;
                            t.hide = !0, t.attributes["x-out-of-boundaries"] = ""
                        } else {
                            if (!1 === t.hide) return t;
                            t.hide = !1, t.attributes["x-out-of-boundaries"] = !1
                        }
                        return t
                    }
                },
                computeStyle: {
                    order: 850,
                    enabled: !0,
                    fn: function(t, e) {
                        var n = e.x,
                            i = e.y,
                            r = t.offsets.popper,
                            o = st(t.instance.modifiers, (function(t) {
                                return "applyStyle" === t.name
                            })).gpuAcceleration;
                        void 0 !== o && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                        var s, a, l = void 0 !== o ? o : e.gpuAcceleration,
                            c = B(t.instance.popper),
                            h = Q(c),
                            u = {
                                position: r.position
                            },
                            d = function(t, e) {
                                var n = t.offsets,
                                    i = n.popper,
                                    r = Math.round,
                                    o = Math.floor,
                                    s = function(t) {
                                        return t
                                    },
                                    a = r(n.reference.width),
                                    l = r(i.width),
                                    c = -1 !== ["left", "right"].indexOf(t.placement),
                                    h = -1 !== t.placement.indexOf("-"),
                                    u = e ? c || h || a % 2 == l % 2 ? r : o : s,
                                    d = e ? r : s;
                                return {
                                    left: u(a % 2 == 1 && l % 2 == 1 && !h && e ? i.left - 1 : i.left),
                                    top: d(i.top),
                                    bottom: d(i.bottom),
                                    right: u(i.right)
                                }
                            }(t, window.devicePixelRatio < 2 || !mt),
                            f = "bottom" === n ? "top" : "bottom",
                            p = "right" === i ? "left" : "right",
                            g = ht("transform");
                        if (a = "bottom" === f ? "HTML" === c.nodeName ? -c.clientHeight + d.bottom : -h.height + d.bottom : d.top, s = "right" === p ? "HTML" === c.nodeName ? -c.clientWidth + d.right : -h.width + d.right : d.left, l && g) u[g] = "translate3d(" + s + "px, " + a + "px, 0)", u[f] = 0, u[p] = 0, u.willChange = "transform";
                        else {
                            var v = "right" === p ? -1 : 1;
                            u[f] = a * ("bottom" === f ? -1 : 1), u[p] = s * v, u.willChange = f + ", " + p
                        }
                        return t.attributes = U({}, {
                            "x-placement": t.placement
                        }, t.attributes), t.styles = U({}, u, t.styles), t.arrowStyles = U({}, t.offsets.arrow, t.arrowStyles), t
                    },
                    gpuAcceleration: !0,
                    x: "bottom",
                    y: "right"
                },
                applyStyle: {
                    order: 900,
                    enabled: !0,
                    fn: function(t) {
                        var e, n;
                        return vt(t.instance.popper, t.styles), e = t.instance.popper, n = t.attributes, Object.keys(n).forEach((function(t) {
                            !1 !== n[t] ? e.setAttribute(t, n[t]) : e.removeAttribute(t)
                        })), t.arrowElement && Object.keys(t.arrowStyles).length && vt(t.arrowElement, t.arrowStyles), t
                    },
                    onLoad: function(t, e, n, i, r) {
                        var o = nt(r, e, t, n.positionFixed),
                            s = et(n.placement, o, e, t, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                        return e.setAttribute("x-placement", s), vt(e, {
                            position: n.positionFixed ? "fixed" : "absolute"
                        }), n
                    },
                    gpuAcceleration: void 0
                }
            }
        },
        _t = function() {
            function t(e, n) {
                var i = this,
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                R(this, t), this.scheduleUpdate = function() {
                    return requestAnimationFrame(i.update)
                }, this.update = T(this.update.bind(this)), this.options = U({}, t.Defaults, r), this.state = {
                    isDestroyed: !1,
                    isCreated: !1,
                    scrollParents: []
                }, this.reference = e && e.jquery ? e[0] : e, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(U({}, t.Defaults.modifiers, r.modifiers)).forEach((function(e) {
                    i.options.modifiers[e] = U({}, t.Defaults.modifiers[e] || {}, r.modifiers ? r.modifiers[e] : {})
                })), this.modifiers = Object.keys(this.options.modifiers).map((function(t) {
                    return U({
                        name: t
                    }, i.options.modifiers[t])
                })).sort((function(t, e) {
                    return t.order - e.order
                })), this.modifiers.forEach((function(t) {
                    t.enabled && L(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state)
                })), this.update();
                var o = this.options.eventsEnabled;
                o && this.enableEventListeners(), this.state.eventsEnabled = o
            }
            return W(t, [{
                key: "update",
                value: function() {
                    return lt.call(this)
                }
            }, {
                key: "destroy",
                value: function() {
                    return ut.call(this)
                }
            }, {
                key: "enableEventListeners",
                value: function() {
                    return ft.call(this)
                }
            }, {
                key: "disableEventListeners",
                value: function() {
                    return pt.call(this)
                }
            }]), t
        }();
    _t.Utils = ("undefined" != typeof window ? window : global).PopperUtils, _t.placements = yt, _t.Defaults = Ct;
    var kt = "dropdown",
        Et = e.fn[kt],
        Tt = new RegExp("38|40|27"),
        Lt = {
            offset: 0,
            flip: !0,
            boundary: "scrollParent",
            reference: "toggle",
            display: "dynamic",
            popperConfig: null
        },
        St = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
            reference: "(string|element)",
            display: "string",
            popperConfig: "(null|object)"
        },
        At = function() {
            function t(t, e) {
                this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
            }
            var n = t.prototype;
            return n.toggle = function() {
                if (!this._element.disabled && !e(this._element).hasClass("disabled")) {
                    var n = e(this._menu).hasClass("show");
                    t._clearMenus(), n || this.show(!0)
                }
            }, n.show = function(n) {
                if (void 0 === n && (n = !1), !(this._element.disabled || e(this._element).hasClass("disabled") || e(this._menu).hasClass("show"))) {
                    var i = {
                            relatedTarget: this._element
                        },
                        r = e.Event("show.bs.dropdown", i),
                        o = t._getParentFromElement(this._element);
                    if (e(o).trigger(r), !r.isDefaultPrevented()) {
                        if (!this._inNavbar && n) {
                            if (void 0 === _t) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                            var s = this._element;
                            "parent" === this._config.reference ? s = o : a.isElement(this._config.reference) && (s = this._config.reference, void 0 !== this._config.reference.jquery && (s = this._config.reference[0])), "scrollParent" !== this._config.boundary && e(o).addClass("position-static"), this._popper = new _t(s, this._menu, this._getPopperConfig())
                        }
                        "ontouchstart" in document.documentElement && 0 === e(o).closest(".navbar-nav").length && e(document.body).children().on("mouseover", null, e.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), e(this._menu).toggleClass("show"), e(o).toggleClass("show").trigger(e.Event("shown.bs.dropdown", i))
                    }
                }
            }, n.hide = function() {
                if (!this._element.disabled && !e(this._element).hasClass("disabled") && e(this._menu).hasClass("show")) {
                    var n = {
                            relatedTarget: this._element
                        },
                        i = e.Event("hide.bs.dropdown", n),
                        r = t._getParentFromElement(this._element);
                    e(r).trigger(i), i.isDefaultPrevented() || (this._popper && this._popper.destroy(), e(this._menu).toggleClass("show"), e(r).toggleClass("show").trigger(e.Event("hidden.bs.dropdown", n)))
                }
            }, n.dispose = function() {
                e.removeData(this._element, "bs.dropdown"), e(this._element).off(".bs.dropdown"), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null)
            }, n.update = function() {
                this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
            }, n._addEventListeners = function() {
                var t = this;
                e(this._element).on("click.bs.dropdown", (function(e) {
                    e.preventDefault(), e.stopPropagation(), t.toggle()
                }))
            }, n._getConfig = function(t) {
                return t = s(s(s({}, this.constructor.Default), e(this._element).data()), t), a.typeCheckConfig(kt, t, this.constructor.DefaultType), t
            }, n._getMenuElement = function() {
                if (!this._menu) {
                    var e = t._getParentFromElement(this._element);
                    e && (this._menu = e.querySelector(".dropdown-menu"))
                }
                return this._menu
            }, n._getPlacement = function() {
                var t = e(this._element.parentNode),
                    n = "bottom-start";
                return t.hasClass("dropup") ? n = e(this._menu).hasClass("dropdown-menu-right") ? "top-end" : "top-start" : t.hasClass("dropright") ? n = "right-start" : t.hasClass("dropleft") ? n = "left-start" : e(this._menu).hasClass("dropdown-menu-right") && (n = "bottom-end"), n
            }, n._detectNavbar = function() {
                return e(this._element).closest(".navbar").length > 0
            }, n._getOffset = function() {
                var t = this,
                    e = {};
                return "function" == typeof this._config.offset ? e.fn = function(e) {
                    return e.offsets = s(s({}, e.offsets), t._config.offset(e.offsets, t._element) || {}), e
                } : e.offset = this._config.offset, e
            }, n._getPopperConfig = function() {
                var t = {
                    placement: this._getPlacement(),
                    modifiers: {
                        offset: this._getOffset(),
                        flip: {
                            enabled: this._config.flip
                        },
                        preventOverflow: {
                            boundariesElement: this._config.boundary
                        }
                    }
                };
                return "static" === this._config.display && (t.modifiers.applyStyle = {
                    enabled: !1
                }), s(s({}, t), this._config.popperConfig)
            }, t._jQueryInterface = function(n) {
                return this.each((function() {
                    var i = e(this).data("bs.dropdown");
                    if (i || (i = new t(this, "object" == typeof n ? n : null), e(this).data("bs.dropdown", i)), "string" == typeof n) {
                        if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                        i[n]()
                    }
                }))
            }, t._clearMenus = function(n) {
                if (!n || 3 !== n.which && ("keyup" !== n.type || 9 === n.which))
                    for (var i = [].slice.call(document.querySelectorAll('[data-toggle="dropdown"]')), r = 0, o = i.length; r < o; r++) {
                        var s = t._getParentFromElement(i[r]),
                            a = e(i[r]).data("bs.dropdown"),
                            l = {
                                relatedTarget: i[r]
                            };
                        if (n && "click" === n.type && (l.clickEvent = n), a) {
                            var c = a._menu;
                            if (e(s).hasClass("show") && !(n && ("click" === n.type && /input|textarea/i.test(n.target.tagName) || "keyup" === n.type && 9 === n.which) && e.contains(s, n.target))) {
                                var h = e.Event("hide.bs.dropdown", l);
                                e(s).trigger(h), h.isDefaultPrevented() || ("ontouchstart" in document.documentElement && e(document.body).children().off("mouseover", null, e.noop), i[r].setAttribute("aria-expanded", "false"), a._popper && a._popper.destroy(), e(c).removeClass("show"), e(s).removeClass("show").trigger(e.Event("hidden.bs.dropdown", l)))
                            }
                        }
                    }
            }, t._getParentFromElement = function(t) {
                var e, n = a.getSelectorFromElement(t);
                return n && (e = document.querySelector(n)), e || t.parentNode
            }, t._dataApiKeydownHandler = function(n) {
                if (!(/input|textarea/i.test(n.target.tagName) ? 32 === n.which || 27 !== n.which && (40 !== n.which && 38 !== n.which || e(n.target).closest(".dropdown-menu").length) : !Tt.test(n.which)) && !this.disabled && !e(this).hasClass("disabled")) {
                    var i = t._getParentFromElement(this),
                        r = e(i).hasClass("show");
                    if (r || 27 !== n.which) {
                        if (n.preventDefault(), n.stopPropagation(), !r || r && (27 === n.which || 32 === n.which)) return 27 === n.which && e(i.querySelector('[data-toggle="dropdown"]')).trigger("focus"), void e(this).trigger("click");
                        var o = [].slice.call(i.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter((function(t) {
                            return e(t).is(":visible")
                        }));
                        if (0 !== o.length) {
                            var s = o.indexOf(n.target);
                            38 === n.which && s > 0 && s--, 40 === n.which && s < o.length - 1 && s++, s < 0 && (s = 0), o[s].focus()
                        }
                    }
                }
            }, i(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.5.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return Lt
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return St
                }
            }]), t
        }();
    e(document).on("keydown.bs.dropdown.data-api", '[data-toggle="dropdown"]', At._dataApiKeydownHandler).on("keydown.bs.dropdown.data-api", ".dropdown-menu", At._dataApiKeydownHandler).on("click.bs.dropdown.data-api keyup.bs.dropdown.data-api", At._clearMenus).on("click.bs.dropdown.data-api", '[data-toggle="dropdown"]', (function(t) {
        t.preventDefault(), t.stopPropagation(), At._jQueryInterface.call(e(this), "toggle")
    })).on("click.bs.dropdown.data-api", ".dropdown form", (function(t) {
        t.stopPropagation()
    })), e.fn[kt] = At._jQueryInterface, e.fn[kt].Constructor = At, e.fn[kt].noConflict = function() {
        return e.fn[kt] = Et, At._jQueryInterface
    };
    var Nt = e.fn.modal,
        Dt = {
            backdrop: !0,
            keyboard: !0,
            focus: !0,
            show: !0
        },
        It = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
        },
        Mt = function() {
            function t(t, e) {
                this._config = this._getConfig(e), this._element = t, this._dialog = t.querySelector(".modal-dialog"), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0
            }
            var n = t.prototype;
            return n.toggle = function(t) {
                return this._isShown ? this.hide() : this.show(t)
            }, n.show = function(t) {
                var n = this;
                if (!this._isShown && !this._isTransitioning) {
                    e(this._element).hasClass("fade") && (this._isTransitioning = !0);
                    var i = e.Event("show.bs.modal", {
                        relatedTarget: t
                    });
                    e(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), e(this._element).on("click.dismiss.bs.modal", '[data-dismiss="modal"]', (function(t) {
                        return n.hide(t)
                    })), e(this._dialog).on("mousedown.dismiss.bs.modal", (function() {
                        e(n._element).one("mouseup.dismiss.bs.modal", (function(t) {
                            e(t.target).is(n._element) && (n._ignoreBackdropClick = !0)
                        }))
                    })), this._showBackdrop((function() {
                        return n._showElement(t)
                    })))
                }
            }, n.hide = function(t) {
                var n = this;
                if (t && t.preventDefault(), this._isShown && !this._isTransitioning) {
                    var i = e.Event("hide.bs.modal");
                    if (e(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) {
                        this._isShown = !1;
                        var r = e(this._element).hasClass("fade");
                        if (r && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), e(document).off("focusin.bs.modal"), e(this._element).removeClass("show"), e(this._element).off("click.dismiss.bs.modal"), e(this._dialog).off("mousedown.dismiss.bs.modal"), r) {
                            var o = a.getTransitionDurationFromElement(this._element);
                            e(this._element).one(a.TRANSITION_END, (function(t) {
                                return n._hideModal(t)
                            })).emulateTransitionEnd(o)
                        } else this._hideModal()
                    }
                }
            }, n.dispose = function() {
                [window, this._element, this._dialog].forEach((function(t) {
                    return e(t).off(".bs.modal")
                })), e(document).off("focusin.bs.modal"), e.removeData(this._element, "bs.modal"), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
            }, n.handleUpdate = function() {
                this._adjustDialog()
            }, n._getConfig = function(t) {
                return t = s(s({}, Dt), t), a.typeCheckConfig("modal", t, It), t
            }, n._triggerBackdropTransition = function() {
                var t = this;
                if ("static" === this._config.backdrop) {
                    var n = e.Event("hidePrevented.bs.modal");
                    if (e(this._element).trigger(n), n.defaultPrevented) return;
                    this._element.classList.add("modal-static");
                    var i = a.getTransitionDurationFromElement(this._element);
                    e(this._element).one(a.TRANSITION_END, (function() {
                        t._element.classList.remove("modal-static")
                    })).emulateTransitionEnd(i), this._element.focus()
                } else this.hide()
            }, n._showElement = function(t) {
                var n = this,
                    i = e(this._element).hasClass("fade"),
                    r = this._dialog ? this._dialog.querySelector(".modal-body") : null;
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), e(this._dialog).hasClass("modal-dialog-scrollable") && r ? r.scrollTop = 0 : this._element.scrollTop = 0, i && a.reflow(this._element), e(this._element).addClass("show"), this._config.focus && this._enforceFocus();
                var o = e.Event("shown.bs.modal", {
                        relatedTarget: t
                    }),
                    s = function() {
                        n._config.focus && n._element.focus(), n._isTransitioning = !1, e(n._element).trigger(o)
                    };
                if (i) {
                    var l = a.getTransitionDurationFromElement(this._dialog);
                    e(this._dialog).one(a.TRANSITION_END, s).emulateTransitionEnd(l)
                } else s()
            }, n._enforceFocus = function() {
                var t = this;
                e(document).off("focusin.bs.modal").on("focusin.bs.modal", (function(n) {
                    document !== n.target && t._element !== n.target && 0 === e(t._element).has(n.target).length && t._element.focus()
                }))
            }, n._setEscapeEvent = function() {
                var t = this;
                this._isShown ? e(this._element).on("keydown.dismiss.bs.modal", (function(e) {
                    t._config.keyboard && 27 === e.which ? (e.preventDefault(), t.hide()) : t._config.keyboard || 27 !== e.which || t._triggerBackdropTransition()
                })) : this._isShown || e(this._element).off("keydown.dismiss.bs.modal")
            }, n._setResizeEvent = function() {
                var t = this;
                this._isShown ? e(window).on("resize.bs.modal", (function(e) {
                    return t.handleUpdate(e)
                })) : e(window).off("resize.bs.modal")
            }, n._hideModal = function() {
                var t = this;
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._isTransitioning = !1, this._showBackdrop((function() {
                    e(document.body).removeClass("modal-open"), t._resetAdjustments(), t._resetScrollbar(), e(t._element).trigger("hidden.bs.modal")
                }))
            }, n._removeBackdrop = function() {
                this._backdrop && (e(this._backdrop).remove(), this._backdrop = null)
            }, n._showBackdrop = function(t) {
                var n = this,
                    i = e(this._element).hasClass("fade") ? "fade" : "";
                if (this._isShown && this._config.backdrop) {
                    if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", i && this._backdrop.classList.add(i), e(this._backdrop).appendTo(document.body), e(this._element).on("click.dismiss.bs.modal", (function(t) {
                            n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : t.target === t.currentTarget && n._triggerBackdropTransition()
                        })), i && a.reflow(this._backdrop), e(this._backdrop).addClass("show"), !t) return;
                    if (!i) return void t();
                    var r = a.getTransitionDurationFromElement(this._backdrop);
                    e(this._backdrop).one(a.TRANSITION_END, t).emulateTransitionEnd(r)
                } else if (!this._isShown && this._backdrop) {
                    e(this._backdrop).removeClass("show");
                    var o = function() {
                        n._removeBackdrop(), t && t()
                    };
                    if (e(this._element).hasClass("fade")) {
                        var s = a.getTransitionDurationFromElement(this._backdrop);
                        e(this._backdrop).one(a.TRANSITION_END, o).emulateTransitionEnd(s)
                    } else o()
                } else t && t()
            }, n._adjustDialog = function() {
                var t = this._element.scrollHeight > document.documentElement.clientHeight;
                !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
            }, n._resetAdjustments = function() {
                this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
            }, n._checkScrollbar = function() {
                var t = document.body.getBoundingClientRect();
                this._isBodyOverflowing = Math.round(t.left + t.right) < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
            }, n._setScrollbar = function() {
                var t = this;
                if (this._isBodyOverflowing) {
                    var n = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")),
                        i = [].slice.call(document.querySelectorAll(".sticky-top"));
                    e(n).each((function(n, i) {
                        var r = i.style.paddingRight,
                            o = e(i).css("padding-right");
                        e(i).data("padding-right", r).css("padding-right", parseFloat(o) + t._scrollbarWidth + "px")
                    })), e(i).each((function(n, i) {
                        var r = i.style.marginRight,
                            o = e(i).css("margin-right");
                        e(i).data("margin-right", r).css("margin-right", parseFloat(o) - t._scrollbarWidth + "px")
                    }));
                    var r = document.body.style.paddingRight,
                        o = e(document.body).css("padding-right");
                    e(document.body).data("padding-right", r).css("padding-right", parseFloat(o) + this._scrollbarWidth + "px")
                }
                e(document.body).addClass("modal-open")
            }, n._resetScrollbar = function() {
                var t = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"));
                e(t).each((function(t, n) {
                    var i = e(n).data("padding-right");
                    e(n).removeData("padding-right"), n.style.paddingRight = i || ""
                }));
                var n = [].slice.call(document.querySelectorAll(".sticky-top"));
                e(n).each((function(t, n) {
                    var i = e(n).data("margin-right");
                    void 0 !== i && e(n).css("margin-right", i).removeData("margin-right")
                }));
                var i = e(document.body).data("padding-right");
                e(document.body).removeData("padding-right"), document.body.style.paddingRight = i || ""
            }, n._getScrollbarWidth = function() {
                var t = document.createElement("div");
                t.className = "modal-scrollbar-measure", document.body.appendChild(t);
                var e = t.getBoundingClientRect().width - t.clientWidth;
                return document.body.removeChild(t), e
            }, t._jQueryInterface = function(n, i) {
                return this.each((function() {
                    var r = e(this).data("bs.modal"),
                        o = s(s(s({}, Dt), e(this).data()), "object" == typeof n && n ? n : {});
                    if (r || (r = new t(this, o), e(this).data("bs.modal", r)), "string" == typeof n) {
                        if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');
                        r[n](i)
                    } else o.show && r.show(i)
                }))
            }, i(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.5.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return Dt
                }
            }]), t
        }();
    e(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', (function(t) {
        var n, i = this,
            r = a.getSelectorFromElement(this);
        r && (n = document.querySelector(r));
        var o = e(n).data("bs.modal") ? "toggle" : s(s({}, e(n).data()), e(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
        var l = e(n).one("show.bs.modal", (function(t) {
            t.isDefaultPrevented() || l.one("hidden.bs.modal", (function() {
                e(i).is(":visible") && i.focus()
            }))
        }));
        Mt._jQueryInterface.call(e(n), o, this)
    })), e.fn.modal = Mt._jQueryInterface, e.fn.modal.Constructor = Mt, e.fn.modal.noConflict = function() {
        return e.fn.modal = Nt, Mt._jQueryInterface
    };
    var $t = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
        Bt = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
        Ot = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

    function jt(t, e, n) {
        if (0 === t.length) return t;
        if (n && "function" == typeof n) return n(t);
        for (var i = (new window.DOMParser).parseFromString(t, "text/html"), r = Object.keys(e), o = [].slice.call(i.body.querySelectorAll("*")), s = function(t, n) {
                var i = o[t],
                    s = i.nodeName.toLowerCase();
                if (-1 === r.indexOf(i.nodeName.toLowerCase())) return i.parentNode.removeChild(i), "continue";
                var a = [].slice.call(i.attributes),
                    l = [].concat(e["*"] || [], e[s] || []);
                a.forEach((function(t) {
                    (function(t, e) {
                        var n = t.nodeName.toLowerCase();
                        if (-1 !== e.indexOf(n)) return -1 === $t.indexOf(n) || Boolean(t.nodeValue.match(Bt) || t.nodeValue.match(Ot));
                        for (var i = e.filter((function(t) {
                                return t instanceof RegExp
                            })), r = 0, o = i.length; r < o; r++)
                            if (n.match(i[r])) return !0;
                        return !1
                    })(t, l) || i.removeAttribute(t.nodeName)
                }))
            }, a = 0, l = o.length; a < l; a++) s(a);
        return i.body.innerHTML
    }
    var Pt = "tooltip",
        Ht = e.fn[Pt],
        zt = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
        qt = ["sanitize", "whiteList", "sanitizeFn"],
        Ft = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string|function)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            whiteList: "object",
            popperConfig: "(null|object)"
        },
        Rt = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: "right",
            BOTTOM: "bottom",
            LEFT: "left"
        },
        Wt = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent",
            sanitize: !0,
            sanitizeFn: null,
            whiteList: {
                "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                a: ["target", "href", "title", "rel"],
                area: [],
                b: [],
                br: [],
                col: [],
                code: [],
                div: [],
                em: [],
                hr: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                i: [],
                img: ["src", "srcset", "alt", "title", "width", "height"],
                li: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                small: [],
                span: [],
                sub: [],
                sup: [],
                strong: [],
                u: [],
                ul: []
            },
            popperConfig: null
        },
        Vt = {
            HIDE: "hide.bs.tooltip",
            HIDDEN: "hidden.bs.tooltip",
            SHOW: "show.bs.tooltip",
            SHOWN: "shown.bs.tooltip",
            INSERTED: "inserted.bs.tooltip",
            CLICK: "click.bs.tooltip",
            FOCUSIN: "focusin.bs.tooltip",
            FOCUSOUT: "focusout.bs.tooltip",
            MOUSEENTER: "mouseenter.bs.tooltip",
            MOUSELEAVE: "mouseleave.bs.tooltip"
        },
        Ut = function() {
            function t(t, e) {
                if (void 0 === _t) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
                this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners()
            }
            var n = t.prototype;
            return n.enable = function() {
                this._isEnabled = !0
            }, n.disable = function() {
                this._isEnabled = !1
            }, n.toggleEnabled = function() {
                this._isEnabled = !this._isEnabled
            }, n.toggle = function(t) {
                if (this._isEnabled)
                    if (t) {
                        var n = this.constructor.DATA_KEY,
                            i = e(t.currentTarget).data(n);
                        i || (i = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
                    } else {
                        if (e(this.getTipElement()).hasClass("show")) return void this._leave(null, this);
                        this._enter(null, this)
                    }
            }, n.dispose = function() {
                clearTimeout(this._timeout), e.removeData(this.element, this.constructor.DATA_KEY), e(this.element).off(this.constructor.EVENT_KEY), e(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler), this.tip && e(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
            }, n.show = function() {
                var t = this;
                if ("none" === e(this.element).css("display")) throw new Error("Please use show on visible elements");
                var n = e.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                    e(this.element).trigger(n);
                    var i = a.findShadowRoot(this.element),
                        r = e.contains(null !== i ? i : this.element.ownerDocument.documentElement, this.element);
                    if (n.isDefaultPrevented() || !r) return;
                    var o = this.getTipElement(),
                        s = a.getUID(this.constructor.NAME);
                    o.setAttribute("id", s), this.element.setAttribute("aria-describedby", s), this.setContent(), this.config.animation && e(o).addClass("fade");
                    var l = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement,
                        c = this._getAttachment(l);
                    this.addAttachmentClass(c);
                    var h = this._getContainer();
                    e(o).data(this.constructor.DATA_KEY, this), e.contains(this.element.ownerDocument.documentElement, this.tip) || e(o).appendTo(h), e(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new _t(this.element, o, this._getPopperConfig(c)), e(o).addClass("show"), "ontouchstart" in document.documentElement && e(document.body).children().on("mouseover", null, e.noop);
                    var u = function() {
                        t.config.animation && t._fixTransition();
                        var n = t._hoverState;
                        t._hoverState = null, e(t.element).trigger(t.constructor.Event.SHOWN), "out" === n && t._leave(null, t)
                    };
                    if (e(this.tip).hasClass("fade")) {
                        var d = a.getTransitionDurationFromElement(this.tip);
                        e(this.tip).one(a.TRANSITION_END, u).emulateTransitionEnd(d)
                    } else u()
                }
            }, n.hide = function(t) {
                var n = this,
                    i = this.getTipElement(),
                    r = e.Event(this.constructor.Event.HIDE),
                    o = function() {
                        "show" !== n._hoverState && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), e(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), t && t()
                    };
                if (e(this.element).trigger(r), !r.isDefaultPrevented()) {
                    if (e(i).removeClass("show"), "ontouchstart" in document.documentElement && e(document.body).children().off("mouseover", null, e.noop), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, e(this.tip).hasClass("fade")) {
                        var s = a.getTransitionDurationFromElement(i);
                        e(i).one(a.TRANSITION_END, o).emulateTransitionEnd(s)
                    } else o();
                    this._hoverState = ""
                }
            }, n.update = function() {
                null !== this._popper && this._popper.scheduleUpdate()
            }, n.isWithContent = function() {
                return Boolean(this.getTitle())
            }, n.addAttachmentClass = function(t) {
                e(this.getTipElement()).addClass("bs-tooltip-" + t)
            }, n.getTipElement = function() {
                return this.tip = this.tip || e(this.config.template)[0], this.tip
            }, n.setContent = function() {
                var t = this.getTipElement();
                this.setElementContent(e(t.querySelectorAll(".tooltip-inner")), this.getTitle()), e(t).removeClass("fade show")
            }, n.setElementContent = function(t, n) {
                "object" != typeof n || !n.nodeType && !n.jquery ? this.config.html ? (this.config.sanitize && (n = jt(n, this.config.whiteList, this.config.sanitizeFn)), t.html(n)) : t.text(n) : this.config.html ? e(n).parent().is(t) || t.empty().append(n) : t.text(e(n).text())
            }, n.getTitle = function() {
                var t = this.element.getAttribute("data-original-title");
                return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t
            }, n._getPopperConfig = function(t) {
                var e = this;
                return s(s({}, {
                    placement: t,
                    modifiers: {
                        offset: this._getOffset(),
                        flip: {
                            behavior: this.config.fallbackPlacement
                        },
                        arrow: {
                            element: ".arrow"
                        },
                        preventOverflow: {
                            boundariesElement: this.config.boundary
                        }
                    },
                    onCreate: function(t) {
                        t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
                    },
                    onUpdate: function(t) {
                        return e._handlePopperPlacementChange(t)
                    }
                }), this.config.popperConfig)
            }, n._getOffset = function() {
                var t = this,
                    e = {};
                return "function" == typeof this.config.offset ? e.fn = function(e) {
                    return e.offsets = s(s({}, e.offsets), t.config.offset(e.offsets, t.element) || {}), e
                } : e.offset = this.config.offset, e
            }, n._getContainer = function() {
                return !1 === this.config.container ? document.body : a.isElement(this.config.container) ? e(this.config.container) : e(document).find(this.config.container)
            }, n._getAttachment = function(t) {
                return Rt[t.toUpperCase()]
            }, n._setListeners = function() {
                var t = this;
                this.config.trigger.split(" ").forEach((function(n) {
                    if ("click" === n) e(t.element).on(t.constructor.Event.CLICK, t.config.selector, (function(e) {
                        return t.toggle(e)
                    }));
                    else if ("manual" !== n) {
                        var i = "hover" === n ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
                            r = "hover" === n ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
                        e(t.element).on(i, t.config.selector, (function(e) {
                            return t._enter(e)
                        })).on(r, t.config.selector, (function(e) {
                            return t._leave(e)
                        }))
                    }
                })), this._hideModalHandler = function() {
                    t.element && t.hide()
                }, e(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = s(s({}, this.config), {}, {
                    trigger: "manual",
                    selector: ""
                }) : this._fixTitle()
            }, n._fixTitle = function() {
                var t = typeof this.element.getAttribute("data-original-title");
                (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
            }, n._enter = function(t, n) {
                var i = this.constructor.DATA_KEY;
                (n = n || e(t.currentTarget).data(i)) || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(i, n)), t && (n._activeTrigger["focusin" === t.type ? "focus" : "hover"] = !0), e(n.getTipElement()).hasClass("show") || "show" === n._hoverState ? n._hoverState = "show" : (clearTimeout(n._timeout), n._hoverState = "show", n.config.delay && n.config.delay.show ? n._timeout = setTimeout((function() {
                    "show" === n._hoverState && n.show()
                }), n.config.delay.show) : n.show())
            }, n._leave = function(t, n) {
                var i = this.constructor.DATA_KEY;
                (n = n || e(t.currentTarget).data(i)) || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(i, n)), t && (n._activeTrigger["focusout" === t.type ? "focus" : "hover"] = !1), n._isWithActiveTrigger() || (clearTimeout(n._timeout), n._hoverState = "out", n.config.delay && n.config.delay.hide ? n._timeout = setTimeout((function() {
                    "out" === n._hoverState && n.hide()
                }), n.config.delay.hide) : n.hide())
            }, n._isWithActiveTrigger = function() {
                for (var t in this._activeTrigger)
                    if (this._activeTrigger[t]) return !0;
                return !1
            }, n._getConfig = function(t) {
                var n = e(this.element).data();
                return Object.keys(n).forEach((function(t) {
                    -1 !== qt.indexOf(t) && delete n[t]
                })), "number" == typeof(t = s(s(s({}, this.constructor.Default), n), "object" == typeof t && t ? t : {})).delay && (t.delay = {
                    show: t.delay,
                    hide: t.delay
                }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), a.typeCheckConfig(Pt, t, this.constructor.DefaultType), t.sanitize && (t.template = jt(t.template, t.whiteList, t.sanitizeFn)), t
            }, n._getDelegateConfig = function() {
                var t = {};
                if (this.config)
                    for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                return t
            }, n._cleanTipClass = function() {
                var t = e(this.getTipElement()),
                    n = t.attr("class").match(zt);
                null !== n && n.length && t.removeClass(n.join(""))
            }, n._handlePopperPlacementChange = function(t) {
                this.tip = t.instance.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement))
            }, n._fixTransition = function() {
                var t = this.getTipElement(),
                    n = this.config.animation;
                null === t.getAttribute("x-placement") && (e(t).removeClass("fade"), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n)
            }, t._jQueryInterface = function(n) {
                return this.each((function() {
                    var i = e(this).data("bs.tooltip"),
                        r = "object" == typeof n && n;
                    if ((i || !/dispose|hide/.test(n)) && (i || (i = new t(this, r), e(this).data("bs.tooltip", i)), "string" == typeof n)) {
                        if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                        i[n]()
                    }
                }))
            }, i(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.5.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return Wt
                }
            }, {
                key: "NAME",
                get: function() {
                    return Pt
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return "bs.tooltip"
                }
            }, {
                key: "Event",
                get: function() {
                    return Vt
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return ".bs.tooltip"
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return Ft
                }
            }]), t
        }();
    e.fn[Pt] = Ut._jQueryInterface, e.fn[Pt].Constructor = Ut, e.fn[Pt].noConflict = function() {
        return e.fn[Pt] = Ht, Ut._jQueryInterface
    };
    var Zt = "popover",
        Qt = e.fn[Zt],
        Yt = new RegExp("(^|\\s)bs-popover\\S+", "g"),
        Xt = s(s({}, Ut.Default), {}, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        }),
        Kt = s(s({}, Ut.DefaultType), {}, {
            content: "(string|element|function)"
        }),
        Gt = {
            HIDE: "hide.bs.popover",
            HIDDEN: "hidden.bs.popover",
            SHOW: "show.bs.popover",
            SHOWN: "shown.bs.popover",
            INSERTED: "inserted.bs.popover",
            CLICK: "click.bs.popover",
            FOCUSIN: "focusin.bs.popover",
            FOCUSOUT: "focusout.bs.popover",
            MOUSEENTER: "mouseenter.bs.popover",
            MOUSELEAVE: "mouseleave.bs.popover"
        },
        Jt = function(t) {
            var n, r;

            function o() {
                return t.apply(this, arguments) || this
            }
            r = t, (n = o).prototype = Object.create(r.prototype), n.prototype.constructor = n, n.__proto__ = r;
            var s = o.prototype;
            return s.isWithContent = function() {
                return this.getTitle() || this._getContent()
            }, s.addAttachmentClass = function(t) {
                e(this.getTipElement()).addClass("bs-popover-" + t)
            }, s.getTipElement = function() {
                return this.tip = this.tip || e(this.config.template)[0], this.tip
            }, s.setContent = function() {
                var t = e(this.getTipElement());
                this.setElementContent(t.find(".popover-header"), this.getTitle());
                var n = this._getContent();
                "function" == typeof n && (n = n.call(this.element)), this.setElementContent(t.find(".popover-body"), n), t.removeClass("fade show")
            }, s._getContent = function() {
                return this.element.getAttribute("data-content") || this.config.content
            }, s._cleanTipClass = function() {
                var t = e(this.getTipElement()),
                    n = t.attr("class").match(Yt);
                null !== n && n.length > 0 && t.removeClass(n.join(""))
            }, o._jQueryInterface = function(t) {
                return this.each((function() {
                    var n = e(this).data("bs.popover"),
                        i = "object" == typeof t ? t : null;
                    if ((n || !/dispose|hide/.test(t)) && (n || (n = new o(this, i), e(this).data("bs.popover", n)), "string" == typeof t)) {
                        if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                        n[t]()
                    }
                }))
            }, i(o, null, [{
                key: "VERSION",
                get: function() {
                    return "4.5.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return Xt
                }
            }, {
                key: "NAME",
                get: function() {
                    return Zt
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return "bs.popover"
                }
            }, {
                key: "Event",
                get: function() {
                    return Gt
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return ".bs.popover"
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return Kt
                }
            }]), o
        }(Ut);
    e.fn[Zt] = Jt._jQueryInterface, e.fn[Zt].Constructor = Jt, e.fn[Zt].noConflict = function() {
        return e.fn[Zt] = Qt, Jt._jQueryInterface
    };
    var te = "scrollspy",
        ee = e.fn[te],
        ne = {
            offset: 10,
            method: "auto",
            target: ""
        },
        ie = {
            offset: "number",
            method: "string",
            target: "(string|element)"
        },
        re = function() {
            function t(t, n) {
                var i = this;
                this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(n), this._selector = this._config.target + " .nav-link," + this._config.target + " .list-group-item," + this._config.target + " .dropdown-item", this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, e(this._scrollElement).on("scroll.bs.scrollspy", (function(t) {
                    return i._process(t)
                })), this.refresh(), this._process()
            }
            var n = t.prototype;
            return n.refresh = function() {
                var t = this,
                    n = "auto" === this._config.method ? this._scrollElement === this._scrollElement.window ? "offset" : "position" : this._config.method,
                    i = "position" === n ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map((function(t) {
                    var r, o = a.getSelectorFromElement(t);
                    if (o && (r = document.querySelector(o)), r) {
                        var s = r.getBoundingClientRect();
                        if (s.width || s.height) return [e(r)[n]().top + i, o]
                    }
                    return null
                })).filter((function(t) {
                    return t
                })).sort((function(t, e) {
                    return t[0] - e[0]
                })).forEach((function(e) {
                    t._offsets.push(e[0]), t._targets.push(e[1])
                }))
            }, n.dispose = function() {
                e.removeData(this._element, "bs.scrollspy"), e(this._scrollElement).off(".bs.scrollspy"), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
            }, n._getConfig = function(t) {
                if ("string" != typeof(t = s(s({}, ne), "object" == typeof t && t ? t : {})).target && a.isElement(t.target)) {
                    var n = e(t.target).attr("id");
                    n || (n = a.getUID(te), e(t.target).attr("id", n)), t.target = "#" + n
                }
                return a.typeCheckConfig(te, t, ie), t
            }, n._getScrollTop = function() {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
            }, n._getScrollHeight = function() {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            }, n._getOffsetHeight = function() {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
            }, n._process = function() {
                var t = this._getScrollTop() + this._config.offset,
                    e = this._getScrollHeight(),
                    n = this._config.offset + e - this._getOffsetHeight();
                if (this._scrollHeight !== e && this.refresh(), t >= n) {
                    var i = this._targets[this._targets.length - 1];
                    this._activeTarget !== i && this._activate(i)
                } else {
                    if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                    for (var r = this._offsets.length; r--;) this._activeTarget !== this._targets[r] && t >= this._offsets[r] && (void 0 === this._offsets[r + 1] || t < this._offsets[r + 1]) && this._activate(this._targets[r])
                }
            }, n._activate = function(t) {
                this._activeTarget = t, this._clear();
                var n = this._selector.split(",").map((function(e) {
                        return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
                    })),
                    i = e([].slice.call(document.querySelectorAll(n.join(","))));
                i.hasClass("dropdown-item") ? (i.closest(".dropdown").find(".dropdown-toggle").addClass("active"), i.addClass("active")) : (i.addClass("active"), i.parents(".nav, .list-group").prev(".nav-link, .list-group-item").addClass("active"), i.parents(".nav, .list-group").prev(".nav-item").children(".nav-link").addClass("active")), e(this._scrollElement).trigger("activate.bs.scrollspy", {
                    relatedTarget: t
                })
            }, n._clear = function() {
                [].slice.call(document.querySelectorAll(this._selector)).filter((function(t) {
                    return t.classList.contains("active")
                })).forEach((function(t) {
                    return t.classList.remove("active")
                }))
            }, t._jQueryInterface = function(n) {
                return this.each((function() {
                    var i = e(this).data("bs.scrollspy");
                    if (i || (i = new t(this, "object" == typeof n && n), e(this).data("bs.scrollspy", i)), "string" == typeof n) {
                        if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                        i[n]()
                    }
                }))
            }, i(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.5.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return ne
                }
            }]), t
        }();
    e(window).on("load.bs.scrollspy.data-api", (function() {
        for (var t = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), n = t.length; n--;) {
            var i = e(t[n]);
            re._jQueryInterface.call(i, i.data())
        }
    })), e.fn[te] = re._jQueryInterface, e.fn[te].Constructor = re, e.fn[te].noConflict = function() {
        return e.fn[te] = ee, re._jQueryInterface
    };
    var oe = e.fn.tab,
        se = function() {
            function t(t) {
                this._element = t
            }
            var n = t.prototype;
            return n.show = function() {
                var t = this;
                if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && e(this._element).hasClass("active") || e(this._element).hasClass("disabled"))) {
                    var n, i, r = e(this._element).closest(".nav, .list-group")[0],
                        o = a.getSelectorFromElement(this._element);
                    if (r) {
                        var s = "UL" === r.nodeName || "OL" === r.nodeName ? "> li > .active" : ".active";
                        i = (i = e.makeArray(e(r).find(s)))[i.length - 1]
                    }
                    var l = e.Event("hide.bs.tab", {
                            relatedTarget: this._element
                        }),
                        c = e.Event("show.bs.tab", {
                            relatedTarget: i
                        });
                    if (i && e(i).trigger(l), e(this._element).trigger(c), !c.isDefaultPrevented() && !l.isDefaultPrevented()) {
                        o && (n = document.querySelector(o)), this._activate(this._element, r);
                        var h = function() {
                            var n = e.Event("hidden.bs.tab", {
                                    relatedTarget: t._element
                                }),
                                r = e.Event("shown.bs.tab", {
                                    relatedTarget: i
                                });
                            e(i).trigger(n), e(t._element).trigger(r)
                        };
                        n ? this._activate(n, n.parentNode, h) : h()
                    }
                }
            }, n.dispose = function() {
                e.removeData(this._element, "bs.tab"), this._element = null
            }, n._activate = function(t, n, i) {
                var r = this,
                    o = (!n || "UL" !== n.nodeName && "OL" !== n.nodeName ? e(n).children(".active") : e(n).find("> li > .active"))[0],
                    s = i && o && e(o).hasClass("fade"),
                    l = function() {
                        return r._transitionComplete(t, o, i)
                    };
                if (o && s) {
                    var c = a.getTransitionDurationFromElement(o);
                    e(o).removeClass("show").one(a.TRANSITION_END, l).emulateTransitionEnd(c)
                } else l()
            }, n._transitionComplete = function(t, n, i) {
                if (n) {
                    e(n).removeClass("active");
                    var r = e(n.parentNode).find("> .dropdown-menu .active")[0];
                    r && e(r).removeClass("active"), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1)
                }
                if (e(t).addClass("active"), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), a.reflow(t), t.classList.contains("fade") && t.classList.add("show"), t.parentNode && e(t.parentNode).hasClass("dropdown-menu")) {
                    var o = e(t).closest(".dropdown")[0];
                    if (o) {
                        var s = [].slice.call(o.querySelectorAll(".dropdown-toggle"));
                        e(s).addClass("active")
                    }
                    t.setAttribute("aria-expanded", !0)
                }
                i && i()
            }, t._jQueryInterface = function(n) {
                return this.each((function() {
                    var i = e(this),
                        r = i.data("bs.tab");
                    if (r || (r = new t(this), i.data("bs.tab", r)), "string" == typeof n) {
                        if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');
                        r[n]()
                    }
                }))
            }, i(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.5.0"
                }
            }]), t
        }();
    e(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', (function(t) {
        t.preventDefault(), se._jQueryInterface.call(e(this), "show")
    })), e.fn.tab = se._jQueryInterface, e.fn.tab.Constructor = se, e.fn.tab.noConflict = function() {
        return e.fn.tab = oe, se._jQueryInterface
    };
    var ae = e.fn.toast,
        le = {
            animation: "boolean",
            autohide: "boolean",
            delay: "number"
        },
        ce = {
            animation: !0,
            autohide: !0,
            delay: 500
        },
        he = function() {
            function t(t, e) {
                this._element = t, this._config = this._getConfig(e), this._timeout = null, this._setListeners()
            }
            var n = t.prototype;
            return n.show = function() {
                var t = this,
                    n = e.Event("show.bs.toast");
                if (e(this._element).trigger(n), !n.isDefaultPrevented()) {
                    this._config.animation && this._element.classList.add("fade");
                    var i = function() {
                        t._element.classList.remove("showing"), t._element.classList.add("show"), e(t._element).trigger("shown.bs.toast"), t._config.autohide && (t._timeout = setTimeout((function() {
                            t.hide()
                        }), t._config.delay))
                    };
                    if (this._element.classList.remove("hide"), a.reflow(this._element), this._element.classList.add("showing"), this._config.animation) {
                        var r = a.getTransitionDurationFromElement(this._element);
                        e(this._element).one(a.TRANSITION_END, i).emulateTransitionEnd(r)
                    } else i()
                }
            }, n.hide = function() {
                if (this._element.classList.contains("show")) {
                    var t = e.Event("hide.bs.toast");
                    e(this._element).trigger(t), t.isDefaultPrevented() || this._close()
                }
            }, n.dispose = function() {
                clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains("show") && this._element.classList.remove("show"), e(this._element).off("click.dismiss.bs.toast"), e.removeData(this._element, "bs.toast"), this._element = null, this._config = null
            }, n._getConfig = function(t) {
                return t = s(s(s({}, ce), e(this._element).data()), "object" == typeof t && t ? t : {}), a.typeCheckConfig("toast", t, this.constructor.DefaultType), t
            }, n._setListeners = function() {
                var t = this;
                e(this._element).on("click.dismiss.bs.toast", '[data-dismiss="toast"]', (function() {
                    return t.hide()
                }))
            }, n._close = function() {
                var t = this,
                    n = function() {
                        t._element.classList.add("hide"), e(t._element).trigger("hidden.bs.toast")
                    };
                if (this._element.classList.remove("show"), this._config.animation) {
                    var i = a.getTransitionDurationFromElement(this._element);
                    e(this._element).one(a.TRANSITION_END, n).emulateTransitionEnd(i)
                } else n()
            }, t._jQueryInterface = function(n) {
                return this.each((function() {
                    var i = e(this),
                        r = i.data("bs.toast");
                    if (r || (r = new t(this, "object" == typeof n && n), i.data("bs.toast", r)), "string" == typeof n) {
                        if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');
                        r[n](this)
                    }
                }))
            }, i(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.5.0"
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return le
                }
            }, {
                key: "Default",
                get: function() {
                    return ce
                }
            }]), t
        }();
    e.fn.toast = he._jQueryInterface, e.fn.toast.Constructor = he, e.fn.toast.noConflict = function() {
        return e.fn.toast = ae, he._jQueryInterface
    }, t.Alert = h, t.Button = d, t.Carousel = w, t.Collapse = _, t.Dropdown = At, t.Modal = Mt, t.Popover = Jt, t.Scrollspy = re, t.Tab = se, t.Toast = he, t.Tooltip = Ut, t.Util = a, Object.defineProperty(t, "__esModule", {
        value: !0
    })
})),
function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("uikit", e) : (t = t || self).UIkit = e()
}(this, (function() {
    "use strict";
    var t = Object.prototype,
        e = t.hasOwnProperty;

    function n(t, n) {
        return e.call(t, n)
    }
    var i = {},
        r = /([a-z\d])([A-Z])/g;

    function o(t) {
        return t in i || (i[t] = t.replace(r, "$1-$2").toLowerCase()), i[t]
    }
    var s = /-(\w)/g;

    function a(t) {
        return t.replace(s, l)
    }

    function l(t, e) {
        return e ? e.toUpperCase() : ""
    }

    function c(t) {
        return t.length ? l(0, t.charAt(0)) + t.slice(1) : ""
    }
    var h = String.prototype,
        u = h.startsWith || function(t) {
            return 0 === this.lastIndexOf(t, 0)
        };

    function d(t, e) {
        return u.call(t, e)
    }
    var f = h.endsWith || function(t) {
        return this.substr(-t.length) === t
    };

    function p(t, e) {
        return f.call(t, e)
    }

    function g(t, e) {
        return !!~this.indexOf(t, e)
    }
    var v = Array.prototype,
        m = h.includes || g,
        w = v.includes || g;

    function y(t, e) {
        return t && ($(t) ? m : w).call(t, e)
    }
    var b = v.findIndex || function(t) {
        for (var e = arguments, n = 0; n < this.length; n++)
            if (t.call(e[1], this[n], n, this)) return n;
        return -1
    };

    function x(t, e) {
        return b.call(t, e)
    }
    var C = Array.isArray;

    function _(t) {
        return "function" == typeof t
    }

    function k(t) {
        return null !== t && "object" == typeof t
    }
    var E = t.toString;

    function T(t) {
        return "[object Object]" === E.call(t)
    }

    function L(t) {
        return k(t) && t === t.window
    }

    function S(t) {
        return k(t) && 9 === t.nodeType
    }

    function A(t) {
        return k(t) && !!t.jquery
    }

    function N(t) {
        return k(t) && 1 <= t.nodeType
    }

    function D(t) {
        return k(t) && 1 === t.nodeType
    }

    function I(t) {
        return E.call(t).match(/^\[object (NodeList|HTMLCollection)\]$/)
    }

    function M(t) {
        return "boolean" == typeof t
    }

    function $(t) {
        return "string" == typeof t
    }

    function B(t) {
        return "number" == typeof t
    }

    function O(t) {
        return B(t) || $(t) && !isNaN(t - parseFloat(t))
    }

    function j(t) {
        return !(C(t) ? t.length : k(t) && Object.keys(t).length)
    }

    function P(t) {
        return void 0 === t
    }

    function H(t) {
        return M(t) ? t : "true" === t || "1" === t || "" === t || "false" !== t && "0" !== t && t
    }

    function z(t) {
        var e = Number(t);
        return !isNaN(e) && e
    }

    function q(t) {
        return parseFloat(t) || 0
    }

    function F(t) {
        return N(t) ? t : I(t) || A(t) ? t[0] : C(t) ? F(t[0]) : null
    }

    function R(t) {
        return N(t) ? [t] : I(t) ? v.slice.call(t) : C(t) ? t.map(F).filter(Boolean) : A(t) ? t.toArray() : []
    }

    function W(t) {
        return L(t) ? t : (t = F(t)) ? (S(t) ? t : t.ownerDocument).defaultView : window
    }

    function V(t) {
        return C(t) ? t : $(t) ? t.split(/,(?![^(]*\))/).map((function(t) {
            return O(t) ? z(t) : H(t.trim())
        })) : [t]
    }

    function U(t) {
        return t ? p(t, "ms") ? q(t) : 1e3 * q(t) : 0
    }

    function Z(t, e) {
        return t === e || k(t) && k(e) && Object.keys(t).length === Object.keys(e).length && K(t, (function(t, n) {
            return t === e[n]
        }))
    }

    function Q(t, e, n) {
        return t.replace(new RegExp(e + "|" + n, "g"), (function(t) {
            return t === e ? n : e
        }))
    }
    var Y = Object.assign || function(t) {
        for (var e = [], i = arguments.length - 1; 0 < i--;) e[i] = arguments[i + 1];
        t = Object(t);
        for (var r = 0; r < e.length; r++) {
            var o = e[r];
            if (null !== o)
                for (var s in o) n(o, s) && (t[s] = o[s])
        }
        return t
    };

    function X(t) {
        return t[t.length - 1]
    }

    function K(t, e) {
        for (var n in t)
            if (!1 === e(t[n], n)) return !1;
        return !0
    }

    function G(t, e) {
        return t.sort((function(t, n) {
            var i = t[e];
            void 0 === i && (i = 0);
            var r = n[e];
            return void 0 === r && (r = 0), r < i ? 1 : i < r ? -1 : 0
        }))
    }

    function J(t, e) {
        var n = new Set;
        return t.filter((function(t) {
            var i = t[e];
            return !n.has(i) && (n.add(i) || !0)
        }))
    }

    function tt(t, e, n) {
        return void 0 === e && (e = 0), void 0 === n && (n = 1), Math.min(Math.max(z(t) || 0, e), n)
    }

    function et() {}

    function nt(t, e) {
        return t.left < e.right && t.right > e.left && t.top < e.bottom && t.bottom > e.top
    }

    function it(t, e) {
        return t.x <= e.right && t.x >= e.left && t.y <= e.bottom && t.y >= e.top
    }
    var rt = {
        ratio: function(t, e, n) {
            var i = "width" === e ? "height" : "width",
                r = {};
            return r[i] = t[e] ? Math.round(n * t[i] / t[e]) : t[i], r[e] = n, r
        },
        contain: function(t, e) {
            var n = this;
            return K(t = Y({}, t), (function(i, r) {
                return t = t[r] > e[r] ? n.ratio(t, r, e[r]) : t
            })), t
        },
        cover: function(t, e) {
            var n = this;
            return K(t = this.contain(t, e), (function(i, r) {
                return t = t[r] < e[r] ? n.ratio(t, r, e[r]) : t
            })), t
        }
    };

    function ot(t, e, n) {
        if (k(e))
            for (var i in e) ot(t, i, e[i]);
        else {
            if (P(n)) return (t = F(t)) && t.getAttribute(e);
            R(t).forEach((function(t) {
                _(n) && (n = n.call(t, ot(t, e))), null === n ? at(t, e) : t.setAttribute(e, n)
            }))
        }
    }

    function st(t, e) {
        return R(t).some((function(t) {
            return t.hasAttribute(e)
        }))
    }

    function at(t, e) {
        t = R(t), e.split(" ").forEach((function(e) {
            return t.forEach((function(t) {
                return t.hasAttribute(e) && t.removeAttribute(e)
            }))
        }))
    }

    function lt(t, e) {
        for (var n = 0, i = [e, "data-" + e]; n < i.length; n++)
            if (st(t, i[n])) return ot(t, i[n])
    }
    var ct = "undefined" != typeof window,
        ht = ct && /msie|trident/i.test(window.navigator.userAgent),
        ut = ct && "rtl" === ot(document.documentElement, "dir"),
        dt = ct && "ontouchstart" in window,
        ft = ct && window.PointerEvent,
        pt = ct && (dt || window.DocumentTouch && document instanceof DocumentTouch || navigator.maxTouchPoints),
        gt = ft ? "pointerdown" : dt ? "touchstart" : "mousedown",
        vt = ft ? "pointermove" : dt ? "touchmove" : "mousemove",
        mt = ft ? "pointerup" : dt ? "touchend" : "mouseup",
        wt = ft ? "pointerenter" : dt ? "" : "mouseenter",
        yt = ft ? "pointerleave" : dt ? "" : "mouseleave",
        bt = ft ? "pointercancel" : "touchcancel";

    function xt(t, e) {
        return F(t) || kt(t, _t(t, e))
    }

    function Ct(t, e) {
        var n = R(t);
        return n.length && n || Et(t, _t(t, e))
    }

    function _t(t, e) {
        return void 0 === e && (e = document), At(t) || S(e) ? e : e.ownerDocument
    }

    function kt(t, e) {
        return F(Tt(t, e, "querySelector"))
    }

    function Et(t, e) {
        return R(Tt(t, e, "querySelectorAll"))
    }

    function Tt(t, e, n) {
        if (void 0 === e && (e = document), !t || !$(t)) return null;
        var i;
        At(t = t.replace(St, "$1 *")) && (i = [], t = t.match(Nt).map((function(t) {
            return t.replace(/,$/, "").trim()
        })).map((function(t, n) {
            var r, o, s, a = e;
            return "!" === t[0] && (r = t.substr(1).trim().split(" "), a = Bt(Ot(e), r[0]), t = r.slice(1).join(" ").trim()), "-" === t[0] && (o = t.substr(1).trim().split(" "), a = Mt(s = (a || e).previousElementSibling, t.substr(1)) ? s : null, t = o.slice(1).join(" ")), a ? (a.id || (a.id = "uk-" + Date.now() + n, i.push((function() {
                return at(a, "id")
            }))), "#" + Pt(a.id) + " " + t) : null
        })).filter(Boolean).join(","), e = document);
        try {
            return e[n](t)
        } catch (t) {
            return null
        } finally {
            i && i.forEach((function(t) {
                return t()
            }))
        }
    }
    var Lt = /(^|[^\\],)\s*[!>+~-]/,
        St = /([!>+~-])(?=\s+[!>+~-]|\s*$)/g;

    function At(t) {
        return $(t) && t.match(Lt)
    }
    var Nt = /.*?[^\\](?:,|$)/g,
        Dt = ct ? Element.prototype : {},
        It = Dt.matches || Dt.webkitMatchesSelector || Dt.msMatchesSelector || et;

    function Mt(t, e) {
        return R(t).some((function(t) {
            return It.call(t, e)
        }))
    }
    var $t = Dt.closest || function(t) {
        var e = this;
        do {
            if (Mt(e, t)) return e
        } while (e = Ot(e))
    };

    function Bt(t, e) {
        return d(e, ">") && (e = e.slice(1)), D(t) ? $t.call(t, e) : R(t).map((function(t) {
            return Bt(t, e)
        })).filter(Boolean)
    }

    function Ot(t) {
        return (t = F(t)) && D(t.parentNode) && t.parentNode
    }
    var jt = ct && window.CSS && CSS.escape || function(t) {
        return t.replace(/([^\x7f-\uFFFF\w-])/g, (function(t) {
            return "\\" + t
        }))
    };

    function Pt(t) {
        return $(t) ? jt.call(null, t) : ""
    }
    var Ht = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        menuitem: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    };

    function zt(t) {
        return R(t).some((function(t) {
            return Ht[t.tagName.toLowerCase()]
        }))
    }

    function qt(t) {
        return R(t).some((function(t) {
            return t.offsetWidth || t.offsetHeight || t.getClientRects().length
        }))
    }
    var Ft = "input,select,textarea,button";

    function Rt(t) {
        return R(t).some((function(t) {
            return Mt(t, Ft)
        }))
    }

    function Wt(t, e) {
        return R(t).filter((function(t) {
            return Mt(t, e)
        }))
    }

    function Vt(t, e) {
        return $(e) ? Mt(t, e) || Bt(t, e) : t === e || (S(e) ? e.documentElement : F(e)).contains(F(t))
    }

    function Ut(t, e) {
        for (var n = []; t = Ot(t);) e && !Mt(t, e) || n.push(t);
        return n
    }

    function Zt(t, e) {
        var n = (t = F(t)) ? R(t.children) : [];
        return e ? Wt(n, e) : n
    }

    function Qt() {
        for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
        var n, i, r = Jt(t),
            o = r[1],
            s = r[2],
            a = r[3],
            l = r[4],
            c = ie(c = r[0]);
        return 1 < a.length && (n = a, a = function(t) {
                return C(t.detail) ? n.apply(void 0, [t].concat(t.detail)) : n(t)
            }), l && l.self && (i = a, a = function(t) {
                if (t.target === t.currentTarget || t.target === t.current) return i.call(null, t)
            }), s && (a = function(t, e, n) {
                var i = this;
                return function(r) {
                    t.forEach((function(t) {
                        var o = ">" === e[0] ? Et(e, t).reverse().filter((function(t) {
                            return Vt(r.target, t)
                        }))[0] : Bt(r.target, e);
                        o && (r.delegate = t, r.current = o, n.call(i, r))
                    }))
                }
            }(c, s, a)), l = te(l), o.split(" ").forEach((function(t) {
                return c.forEach((function(e) {
                    return e.addEventListener(t, a, l)
                }))
            })),
            function() {
                return Yt(c, o, a, l)
            }
    }

    function Yt(t, e, n, i) {
        void 0 === i && (i = !1), i = te(i), t = ie(t), e.split(" ").forEach((function(e) {
            return t.forEach((function(t) {
                return t.removeEventListener(e, n, i)
            }))
        }))
    }

    function Xt() {
        for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
        var n = Jt(t),
            i = n[0],
            r = n[1],
            o = n[2],
            s = n[3],
            a = n[4],
            l = n[5],
            c = Qt(i, r, o, (function(t) {
                var e = !l || l(t);
                e && (c(), s(t, e))
            }), a);
        return c
    }

    function Kt(t, e, n) {
        return ie(t).reduce((function(t, i) {
            return t && i.dispatchEvent(Gt(e, !0, !0, n))
        }), !0)
    }

    function Gt(t, e, n, i) {
        var r;
        return void 0 === e && (e = !0), void 0 === n && (n = !1), $(t) && ((r = document.createEvent("CustomEvent")).initCustomEvent(t, e, n, i), t = r), t
    }

    function Jt(t) {
        return _(t[2]) && t.splice(2, 0, !1), t
    }

    function te(t) {
        return t && ht && !M(t) ? !!t.capture : t
    }

    function ee(t) {
        return t && "addEventListener" in t
    }

    function ne(t) {
        return ee(t) ? t : F(t)
    }

    function ie(t) {
        return C(t) ? t.map(ne).filter(Boolean) : $(t) ? Et(t) : ee(t) ? [t] : R(t)
    }

    function re(t) {
        return "touch" === t.pointerType || !!t.touches
    }

    function oe(t) {
        var e = t.touches,
            n = t.changedTouches,
            i = e && e[0] || n && n[0] || t;
        return {
            x: i.clientX,
            y: i.clientY
        }
    }

    function se() {
        var t = this;
        this.promise = new ae((function(e, n) {
            t.reject = n, t.resolve = e
        }))
    }
    var ae = ct && window.Promise || ce,
        le = ct && window.setImmediate || setTimeout;

    function ce(t) {
        this.state = 2, this.value = void 0, this.deferred = [];
        var e = this;
        try {
            t((function(t) {
                e.resolve(t)
            }), (function(t) {
                e.reject(t)
            }))
        } catch (t) {
            e.reject(t)
        }
    }
    ce.reject = function(t) {
        return new ce((function(e, n) {
            n(t)
        }))
    }, ce.resolve = function(t) {
        return new ce((function(e, n) {
            e(t)
        }))
    }, ce.all = function(t) {
        return new ce((function(e, n) {
            var i = [],
                r = 0;

            function o(n) {
                return function(o) {
                    i[n] = o, (r += 1) === t.length && e(i)
                }
            }
            0 === t.length && e(i);
            for (var s = 0; s < t.length; s += 1) ce.resolve(t[s]).then(o(s), n)
        }))
    }, ce.race = function(t) {
        return new ce((function(e, n) {
            for (var i = 0; i < t.length; i += 1) ce.resolve(t[i]).then(e, n)
        }))
    };
    var he = ce.prototype;

    function ue(t, e) {
        return new ae((function(n, i) {
            var r = Y({
                data: null,
                method: "GET",
                headers: {},
                xhr: new XMLHttpRequest,
                beforeSend: et,
                responseType: ""
            }, e);
            r.beforeSend(r);
            var o = r.xhr;
            for (var s in r)
                if (s in o) try {
                    o[s] = r[s]
                } catch (n) {}
            for (var a in o.open(r.method.toUpperCase(), t), r.headers) o.setRequestHeader(a, r.headers[a]);
            Qt(o, "load", (function() {
                0 === o.status || 200 <= o.status && o.status < 300 || 304 === o.status ? n(o) : i(Y(Error(o.statusText), {
                    xhr: o,
                    status: o.status
                }))
            })), Qt(o, "error", (function() {
                return i(Y(Error("Network Error"), {
                    xhr: o
                }))
            })), Qt(o, "timeout", (function() {
                return i(Y(Error("Network Timeout"), {
                    xhr: o
                }))
            })), o.send(r.data)
        }))
    }

    function de(t, e, n) {
        return new ae((function(i, r) {
            var o = new Image;
            o.onerror = r, o.onload = function() {
                return i(o)
            }, n && (o.sizes = n), e && (o.srcset = e), o.src = t
        }))
    }

    function fe(t) {
        var e;
        "loading" === document.readyState ? e = Qt(document, "DOMContentLoaded", (function() {
            e(), t()
        })) : t()
    }

    function pe(t, e) {
        return e ? R(t).indexOf(F(e)) : Zt(Ot(t)).indexOf(t)
    }

    function ge(t, e, n, i) {
        void 0 === n && (n = 0), void 0 === i && (i = !1);
        var r = (e = R(e)).length;
        return t = O(t) ? z(t) : "next" === t ? n + 1 : "previous" === t ? n - 1 : pe(e, t), i ? tt(t, 0, r - 1) : (t %= r) < 0 ? t + r : t
    }

    function ve(t) {
        return (t = Ne(t)).innerHTML = "", t
    }

    function me(t, e) {
        return t = Ne(t), P(e) ? t.innerHTML : we(t.hasChildNodes() ? ve(t) : t, e)
    }

    function we(t, e) {
        return t = Ne(t), xe(e, (function(e) {
            return t.appendChild(e)
        }))
    }

    function ye(t, e) {
        return t = Ne(t), xe(e, (function(e) {
            return t.parentNode.insertBefore(e, t)
        }))
    }

    function be(t, e) {
        return t = Ne(t), xe(e, (function(e) {
            return t.nextSibling ? ye(t.nextSibling, e) : we(t.parentNode, e)
        }))
    }

    function xe(t, e) {
        return (t = $(t) ? Se(t) : t) ? "length" in t ? R(t).map(e) : e(t) : null
    }

    function Ce(t) {
        R(t).map((function(t) {
            return t.parentNode && t.parentNode.removeChild(t)
        }))
    }

    function _e(t, e) {
        for (e = F(ye(t, e)); e.firstChild;) e = e.firstChild;
        return we(e, t), e
    }

    function ke(t, e) {
        return R(R(t).map((function(t) {
            return t.hasChildNodes ? _e(R(t.childNodes), e) : we(t, e)
        })))
    }

    function Ee(t) {
        R(t).map(Ot).filter((function(t, e, n) {
            return n.indexOf(t) === e
        })).forEach((function(t) {
            ye(t, t.childNodes), Ce(t)
        }))
    }
    he.resolve = function(t) {
        var e = this;
        if (2 === e.state) {
            if (t === e) throw new TypeError("Promise settled with itself.");
            var n = !1;
            try {
                var i = t && t.then;
                if (null !== t && k(t) && _(i)) return void i.call(t, (function(t) {
                    n || e.resolve(t), n = !0
                }), (function(t) {
                    n || e.reject(t), n = !0
                }))
            } catch (t) {
                return void(n || e.reject(t))
            }
            e.state = 0, e.value = t, e.notify()
        }
    }, he.reject = function(t) {
        var e = this;
        if (2 === e.state) {
            if (t === e) throw new TypeError("Promise settled with itself.");
            e.state = 1, e.value = t, e.notify()
        }
    }, he.notify = function() {
        var t = this;
        le((function() {
            if (2 !== t.state)
                for (; t.deferred.length;) {
                    var e = t.deferred.shift(),
                        n = e[0],
                        i = e[1],
                        r = e[2],
                        o = e[3];
                    try {
                        0 === t.state ? _(n) ? r(n.call(void 0, t.value)) : r(t.value) : 1 === t.state && (_(i) ? r(i.call(void 0, t.value)) : o(t.value))
                    } catch (e) {
                        o(e)
                    }
                }
        }))
    }, he.then = function(t, e) {
        var n = this;
        return new ce((function(i, r) {
            n.deferred.push([t, e, i, r]), n.notify()
        }))
    }, he.catch = function(t) {
        return this.then(void 0, t)
    };
    var Te = /^\s*<(\w+|!)[^>]*>/,
        Le = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;

    function Se(t) {
        var e = Le.exec(t);
        if (e) return document.createElement(e[1]);
        var n = document.createElement("div");
        return Te.test(t) ? n.insertAdjacentHTML("beforeend", t.trim()) : n.textContent = t, 1 < n.childNodes.length ? R(n.childNodes) : n.firstChild
    }

    function Ae(t, e) {
        if (D(t))
            for (e(t), t = t.firstElementChild; t;) {
                var n = t.nextElementSibling;
                Ae(t, e), t = n
            }
    }

    function Ne(t, e) {
        return $(t) ? Ie(t) ? F(Se(t)) : kt(t, e) : F(t)
    }

    function De(t, e) {
        return $(t) ? Ie(t) ? R(Se(t)) : Et(t, e) : R(t)
    }

    function Ie(t) {
        return "<" === t[0] || t.match(/^\s*</)
    }

    function Me(t) {
        for (var e = [], n = arguments.length - 1; 0 < n--;) e[n] = arguments[n + 1];
        He(t, e, "add")
    }

    function $e(t) {
        for (var e = [], n = arguments.length - 1; 0 < n--;) e[n] = arguments[n + 1];
        He(t, e, "remove")
    }

    function Be(t, e) {
        ot(t, "class", (function(t) {
            return (t || "").replace(new RegExp("\\b" + e + "\\b", "g"), "")
        }))
    }

    function Oe(t) {
        for (var e = [], n = arguments.length - 1; 0 < n--;) e[n] = arguments[n + 1];
        e[0] && $e(t, e[0]), e[1] && Me(t, e[1])
    }

    function je(t, e) {
        return e && R(t).some((function(t) {
            return t.classList.contains(e.split(" ")[0])
        }))
    }

    function Pe(t) {
        for (var e, n = [], i = arguments.length - 1; 0 < i--;) n[i] = arguments[i + 1];
        n.length && (e = $(X(n = ze(n))) ? [] : n.pop(), n = n.filter(Boolean), R(t).forEach((function(t) {
            for (var i = t.classList, r = 0; r < n.length; r++) qe.Force ? i.toggle.apply(i, [n[r]].concat(e)) : i[(P(e) ? !i.contains(n[r]) : e) ? "add" : "remove"](n[r])
        })))
    }

    function He(t, e, n) {
        (e = ze(e).filter(Boolean)).length && R(t).forEach((function(t) {
            var i = t.classList;
            qe.Multiple ? i[n].apply(i, e) : e.forEach((function(t) {
                return i[n](t)
            }))
        }))
    }

    function ze(t) {
        return t.reduce((function(t, e) {
            return t.concat.call(t, $(e) && y(e, " ") ? e.trim().split(" ") : e)
        }), [])
    }
    var qe = {
            get Multiple() {
                return this.get("_multiple")
            },
            get Force() {
                return this.get("_force")
            },
            get: function(t) {
                var e;
                return n(this, t) || ((e = document.createElement("_").classList).add("a", "b"), e.toggle("c", !1), this._multiple = e.contains("b"), this._force = !e.contains("c")), this[t]
            }
        },
        Fe = {
            "animation-iteration-count": !0,
            "column-count": !0,
            "fill-opacity": !0,
            "flex-grow": !0,
            "flex-shrink": !0,
            "font-weight": !0,
            "line-height": !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            "stroke-dasharray": !0,
            "stroke-dashoffset": !0,
            widows: !0,
            "z-index": !0,
            zoom: !0
        };

    function Re(t, e, n) {
        return R(t).map((function(t) {
            if ($(e)) {
                if (e = Ye(e), P(n)) return Ve(t, e);
                n || B(n) ? t.style[e] = O(n) && !Fe[e] ? n + "px" : n : t.style.removeProperty(e)
            } else {
                if (C(e)) {
                    var i = We(t);
                    return e.reduce((function(t, e) {
                        return t[e] = i[Ye(e)], t
                    }), {})
                }
                k(e) && K(e, (function(e, n) {
                    return Re(t, n, e)
                }))
            }
            return t
        }))[0]
    }

    function We(t, e) {
        return (t = F(t)).ownerDocument.defaultView.getComputedStyle(t, e)
    }

    function Ve(t, e, n) {
        return We(t, n)[e]
    }
    var Ue = {};

    function Ze(t) {
        var e, n = document.documentElement;
        return ht ? (t in Ue || (Me(e = we(n, document.createElement("div")), "uk-" + t), Ue[t] = Ve(e, "content", ":before").replace(/^["'](.*)["']$/, "$1"), Ce(e)), Ue[t]) : We(n).getPropertyValue("--uk-" + t)
    }
    var Qe = {};

    function Ye(t) {
        return Qe[t] || (Qe[t] = function(t) {
            t = o(t);
            var e = document.documentElement.style;
            if (t in e) return t;
            for (var n, i = Xe.length; i--;)
                if ((n = "-" + Xe[i] + "-" + t) in e) return n
        }(t) || t)
    }
    var Xe = ["webkit", "moz", "ms"];

    function Ke(t, e, n, i) {
        return void 0 === n && (n = 400), void 0 === i && (i = "linear"), ae.all(R(t).map((function(t) {
            return new ae((function(r, o) {
                for (var s in e) {
                    var a = Re(t, s);
                    "" === a && Re(t, s, a)
                }
                var l = setTimeout((function() {
                    return Kt(t, "transitionend")
                }), n);
                Xt(t, "transitionend transitioncanceled", (function(e) {
                    var n = e.type;
                    clearTimeout(l), $e(t, "uk-transition"), Re(t, {
                        transitionProperty: "",
                        transitionDuration: "",
                        transitionTimingFunction: ""
                    }), ("transitioncanceled" === n ? o : r)()
                }), {
                    self: !0
                }), Me(t, "uk-transition"), Re(t, Y({
                    transitionProperty: Object.keys(e).map(Ye).join(","),
                    transitionDuration: n + "ms",
                    transitionTimingFunction: i
                }, e))
            }))
        })))
    }
    var Ge = {
            start: Ke,
            stop: function(t) {
                return Kt(t, "transitionend"), ae.resolve()
            },
            cancel: function(t) {
                Kt(t, "transitioncanceled")
            },
            inProgress: function(t) {
                return je(t, "uk-transition")
            }
        },
        Je = "uk-animation-";

    function tn(t, e, n, i, r) {
        return void 0 === n && (n = 200), ae.all(R(t).map((function(t) {
            return new ae((function(o, s) {
                function a() {
                    Re(t, "animationDuration", ""), Be(t, Je + "\\S*")
                }
                a(), Xt(t, "animationend animationcancel", (function(t) {
                    ("animationcancel" === t.type ? s : o)(), a()
                }), {
                    self: !0
                }), Re(t, "animationDuration", n + "ms"), Me(t, e, Je + (r ? "leave" : "enter")), d(e, Je) && Me(t, i && "uk-transform-origin-" + i, r && Je + "reverse")
            }))
        })))
    }
    var en = new RegExp(Je + "(enter|leave)"),
        nn = { in: function(t, e, n, i) {
                return tn(t, e, n, i, !1)
            },
            out: function(t, e, n, i) {
                return tn(t, e, n, i, !0)
            },
            inProgress: function(t) {
                return en.test(ot(t, "class"))
            },
            cancel: function(t) {
                Kt(t, "animationcancel")
            }
        },
        rn = {
            width: ["x", "left", "right"],
            height: ["y", "top", "bottom"]
        };

    function on(t, e, n, i, r, o, s, a) {
        n = gn(n), i = gn(i);
        var l = {
            element: n,
            target: i
        };
        if (!t || !e) return l;
        var c, h = an(t),
            u = an(e),
            d = u;
        return pn(d, n, h, -1), pn(d, i, u, 1), r = vn(r, h.width, h.height), o = vn(o, u.width, u.height), r.x += o.x, r.y += o.y, d.left += r.x, d.top += r.y, s && (c = [an(W(t))], a && c.unshift(an(a)), K(rn, (function(t, e) {
            var o = t[0],
                a = t[1],
                f = t[2];
            !0 !== s && !y(s, o) || c.some((function(t) {
                var s = n[o] === a ? -h[e] : n[o] === f ? h[e] : 0,
                    c = i[o] === a ? u[e] : i[o] === f ? -u[e] : 0;
                if (d[a] < t[a] || d[a] + h[e] > t[f]) {
                    var p = h[e] / 2,
                        g = "center" === i[o] ? -u[e] / 2 : 0;
                    return "center" === n[o] && (v(p, g) || v(-p, -g)) || v(s, c)
                }

                function v(n, i) {
                    var s = d[a] + n + i - 2 * r[o];
                    if (s >= t[a] && s + h[e] <= t[f]) return d[a] = s, ["element", "target"].forEach((function(t) {
                        l[t][o] = n ? l[t][o] === rn[e][1] ? rn[e][2] : rn[e][1] : l[t][o]
                    })), !0
                }
            }))
        }))), sn(t, d), l
    }

    function sn(t, e) {
        if (!e) return an(t);
        var n = sn(t),
            i = Re(t, "position");
        ["left", "top"].forEach((function(r) {
            var o;
            r in e && (o = Re(t, r), Re(t, r, e[r] - n[r] + q("absolute" === i && "auto" === o ? ln(t)[r] : o)))
        }))
    }

    function an(t) {
        if (!t) return {};
        var e, n, i = W(t),
            r = i.pageYOffset,
            o = i.pageXOffset;
        if (L(t)) {
            var s = t.innerHeight,
                a = t.innerWidth;
            return {
                top: r,
                left: o,
                height: s,
                width: a,
                bottom: r + s,
                right: o + a
            }
        }
        qt(t) || "none" !== Re(t, "display") || (e = ot(t, "style"), n = ot(t, "hidden"), ot(t, {
            style: (e || "") + ";display:block !important;",
            hidden: null
        }));
        var l = (t = F(t)).getBoundingClientRect();
        return P(e) || ot(t, {
            style: e,
            hidden: n
        }), {
            height: l.height,
            width: l.width,
            top: l.top + r,
            left: l.left + o,
            bottom: l.bottom + r,
            right: l.right + o
        }
    }

    function ln(t, e) {
        e = e || F(t).offsetParent || W(t).document.documentElement;
        var n = sn(t),
            i = sn(e);
        return {
            top: n.top - i.top - q(Re(e, "borderTopWidth")),
            left: n.left - i.left - q(Re(e, "borderLeftWidth"))
        }
    }

    function cn(t) {
        var e = [0, 0];
        t = F(t);
        do {
            if (e[0] += t.offsetTop, e[1] += t.offsetLeft, "fixed" === Re(t, "position")) {
                var n = W(t);
                return e[0] += n.pageYOffset, e[1] += n.pageXOffset, e
            }
        } while (t = t.offsetParent);
        return e
    }
    var hn = dn("height"),
        un = dn("width");

    function dn(t) {
        var e = c(t);
        return function(n, i) {
            if (P(i)) {
                if (L(n)) return n["inner" + e];
                if (S(n)) {
                    var r = n.documentElement;
                    return Math.max(r["offset" + e], r["scroll" + e])
                }
                return (i = "auto" === (i = Re(n = F(n), t)) ? n["offset" + e] : q(i) || 0) - fn(n, t)
            }
            Re(n, t, i || 0 === i ? +i + fn(n, t) + "px" : "")
        }
    }

    function fn(t, e, n) {
        return void 0 === n && (n = "border-box"), Re(t, "boxSizing") === n ? rn[e].slice(1).map(c).reduce((function(e, n) {
            return e + q(Re(t, "padding" + n)) + q(Re(t, "border" + n + "Width"))
        }), 0) : 0
    }

    function pn(t, e, n, i) {
        K(rn, (function(r, o) {
            var s = r[0],
                a = r[1];
            e[s] === r[2] ? t[a] += n[o] * i : "center" === e[s] && (t[a] += n[o] * i / 2)
        }))
    }

    function gn(t) {
        var e = /left|center|right/,
            n = /top|center|bottom/;
        return 1 === (t = (t || "").split(" ")).length && (t = e.test(t[0]) ? t.concat("center") : n.test(t[0]) ? ["center"].concat(t) : ["center", "center"]), {
            x: e.test(t[0]) ? t[0] : "center",
            y: n.test(t[1]) ? t[1] : "center"
        }
    }

    function vn(t, e, n) {
        var i = (t || "").split(" "),
            r = i[0],
            o = i[1];
        return {
            x: r ? q(r) * (p(r, "%") ? e / 100 : 1) : 0,
            y: o ? q(o) * (p(o, "%") ? n / 100 : 1) : 0
        }
    }

    function mn(t) {
        switch (t) {
            case "left":
                return "right";
            case "right":
                return "left";
            case "top":
                return "bottom";
            case "bottom":
                return "top";
            default:
                return t
        }
    }

    function wn(t, e, n) {
        return void 0 === e && (e = "width"), void 0 === n && (n = window), O(t) ? +t : p(t, "vh") ? yn(hn(W(n)), t) : p(t, "vw") ? yn(un(W(n)), t) : p(t, "%") ? yn(an(n)[e], t) : q(t)
    }

    function yn(t, e) {
        return t * q(e) / 100
    }
    var bn = {
        reads: [],
        writes: [],
        read: function(t) {
            return this.reads.push(t), Cn(), t
        },
        write: function(t) {
            return this.writes.push(t), Cn(), t
        },
        clear: function(t) {
            return kn(this.reads, t) || kn(this.writes, t)
        },
        flush: xn
    };

    function xn(t) {
        void 0 === t && (t = 1), _n(bn.reads), _n(bn.writes.splice(0, bn.writes.length)), bn.scheduled = !1, (bn.reads.length || bn.writes.length) && Cn(t + 1)
    }

    function Cn(t) {
        if (!bn.scheduled) {
            if (bn.scheduled = !0, 5 < t) throw new Error("Maximum recursion limit reached.");
            t ? ae.resolve().then((function() {
                return xn(t)
            })) : requestAnimationFrame((function() {
                return xn()
            }))
        }
    }

    function _n(t) {
        for (var e; e = t.shift();) e()
    }

    function kn(t, e) {
        var n = t.indexOf(e);
        return !!~n && !!t.splice(n, 1)
    }

    function En() {}
    En.prototype = {
        positions: [],
        init: function() {
            var t, e = this;
            this.positions = [], this.unbind = Qt(document, "mousemove", (function(e) {
                return t = oe(e)
            })), this.interval = setInterval((function() {
                t && (e.positions.push(t), 5 < e.positions.length && e.positions.shift())
            }), 50)
        },
        cancel: function() {
            this.unbind && this.unbind(), this.interval && clearInterval(this.interval)
        },
        movesTo: function(t) {
            if (this.positions.length < 2) return !1;
            var e = t.getBoundingClientRect(),
                n = e.left,
                i = e.right,
                r = e.top,
                o = e.bottom,
                s = this.positions[0],
                a = X(this.positions),
                l = [s, a];
            return !it(a, e) && [
                [{
                    x: n,
                    y: r
                }, {
                    x: i,
                    y: o
                }],
                [{
                    x: n,
                    y: o
                }, {
                    x: i,
                    y: r
                }]
            ].some((function(t) {
                var n = function(t, e) {
                    var n = t[0],
                        i = n.x,
                        r = n.y,
                        o = t[1],
                        s = o.x,
                        a = o.y,
                        l = e[0],
                        c = l.x,
                        h = l.y,
                        u = e[1],
                        d = u.x,
                        f = u.y,
                        p = (f - h) * (s - i) - (d - c) * (a - r);
                    if (0 == p) return !1;
                    var g = ((d - c) * (r - h) - (f - h) * (i - c)) / p;
                    return !(g < 0) && {
                        x: i + g * (s - i),
                        y: r + g * (a - r)
                    }
                }(l, t);
                return n && it(n, e)
            }))
        }
    };
    var Tn = {};

    function Ln(t, e, n) {
        return Tn.computed(_(t) ? t.call(n, n) : t, _(e) ? e.call(n, n) : e)
    }

    function Sn(t, e) {
        return t = t && !C(t) ? [t] : t, e ? t ? t.concat(e) : C(e) ? e : [e] : t
    }

    function An(t, e, i) {
        var r = {};
        if (_(e) && (e = e.options), e.extends && (t = An(t, e.extends, i)), e.mixins)
            for (var o = 0, s = e.mixins.length; o < s; o++) t = An(t, e.mixins[o], i);
        for (var a in t) c(a);
        for (var l in e) n(t, l) || c(l);

        function c(n) {
            r[n] = (Tn[n] || function(t, e) {
                return P(e) ? t : e
            })(t[n], e[n], i)
        }
        return r
    }

    function Nn(t, e) {
        var n;
        void 0 === e && (e = []);
        try {
            return t ? d(t, "{") ? JSON.parse(t) : e.length && !y(t, ":") ? ((n = {})[e[0]] = t, n) : t.split(";").reduce((function(t, e) {
                var n = e.split(/:(.*)/),
                    i = n[0],
                    r = n[1];
                return i && !P(r) && (t[i.trim()] = r.trim()), t
            }), {}) : {}
        } catch (t) {
            return {}
        }
    }

    function Dn(t) {
        this.id = ++In, this.el = F(t)
    }
    Tn.events = Tn.created = Tn.beforeConnect = Tn.connected = Tn.beforeDisconnect = Tn.disconnected = Tn.destroy = Sn, Tn.args = function(t, e) {
        return !1 !== e && Sn(e || t)
    }, Tn.update = function(t, e) {
        return G(Sn(t, _(e) ? {
            read: e
        } : e), "order")
    }, Tn.props = function(t, e) {
        return C(e) && (e = e.reduce((function(t, e) {
            return t[e] = String, t
        }), {})), Tn.methods(t, e)
    }, Tn.computed = Tn.methods = function(t, e) {
        return e ? t ? Y({}, t, e) : e : t
    }, Tn.data = function(t, e, n) {
        return n ? Ln(t, e, n) : e ? t ? function(n) {
            return Ln(t, e, n)
        } : e : t
    };
    var In = 0;

    function Mn(t, e) {
        try {
            t.contentWindow.postMessage(JSON.stringify(Y({
                event: "command"
            }, e)), "*")
        } catch (t) {}
    }

    function $n(t, e, n) {
        if (void 0 === e && (e = 0), void 0 === n && (n = 0), !qt(t)) return !1;
        var i = zn(t);
        return i.every((function(r, o) {
            var s = sn(i[o + 1] || t),
                a = sn(Hn(r));
            return nt(s, {
                top: a.top - e,
                left: a.left - n,
                bottom: a.bottom + e,
                right: a.right + n
            })
        }))
    }

    function Bn(t, e) {
        (t = (L(t) || S(t) ? qn : F)(t)).scrollTop = e
    }

    function On(t, e) {
        void 0 === e && (e = {});
        var n = e.offset;
        if (void 0 === n && (n = 0), qt(t)) {
            for (var i = zn(t).concat(t), r = ae.resolve(), o = function(t) {
                    r = r.then((function() {
                        return new ae((function(e) {
                            var r, o = i[t],
                                s = o.scrollTop,
                                a = Math.ceil(ln(i[t + 1], Hn(o)).top - n),
                                l = (r = Math.abs(a), 40 * Math.pow(r, .375)),
                                c = Date.now(),
                                h = function() {
                                    var t, n = (t = tt((Date.now() - c) / l), .5 * (1 - Math.cos(Math.PI * t)));
                                    Bn(o, s + a * n), 1 != n ? requestAnimationFrame(h) : e()
                                };
                            h()
                        }))
                    }))
                }, s = 0; s < i.length - 1; s++) o(s);
            return r
        }
    }

    function jn(t, e) {
        if (void 0 === e && (e = 0), !qt(t)) return 0;
        var n = X(Pn(t)),
            i = n.scrollHeight,
            r = n.scrollTop,
            o = sn(Hn(n)).height,
            s = cn(t)[0] - r - cn(n)[0],
            a = Math.min(o, s + r);
        return tt(-1 * (s - a) / Math.min(sn(t).height + e + a, i - (s + r), i - o))
    }

    function Pn(t, e) {
        void 0 === e && (e = /auto|scroll/);
        var n = qn(t),
            i = Ut(t).filter((function(t) {
                return t === n || e.test(Re(t, "overflow")) && t.scrollHeight > Math.round(sn(t).height)
            })).reverse();
        return i.length ? i : [n]
    }

    function Hn(t) {
        return t === qn(t) ? window : t
    }

    function zn(t) {
        return Pn(t, /auto|scroll|hidden/)
    }

    function qn(t) {
        var e = W(t).document;
        return e.scrollingElement || e.documentElement
    }
    Dn.prototype.isVideo = function() {
        return this.isYoutube() || this.isVimeo() || this.isHTML5()
    }, Dn.prototype.isHTML5 = function() {
        return "VIDEO" === this.el.tagName
    }, Dn.prototype.isIFrame = function() {
        return "IFRAME" === this.el.tagName
    }, Dn.prototype.isYoutube = function() {
        return this.isIFrame() && !!this.el.src.match(/\/\/.*?youtube(-nocookie)?\.[a-z]+\/(watch\?v=[^&\s]+|embed)|youtu\.be\/.*/)
    }, Dn.prototype.isVimeo = function() {
        return this.isIFrame() && !!this.el.src.match(/vimeo\.com\/video\/.*/)
    }, Dn.prototype.enableApi = function() {
        var t = this;
        if (this.ready) return this.ready;
        var e, n = this.isYoutube(),
            i = this.isVimeo();
        return n || i ? this.ready = new ae((function(r) {
            var o;
            Xt(t.el, "load", (function() {
                var i;
                n && (i = function() {
                    return Mn(t.el, {
                        event: "listening",
                        id: t.id
                    })
                }, e = setInterval(i, 100), i())
            })), o = function(e) {
                return n && e.id === t.id && "onReady" === e.event || i && Number(e.player_id) === t.id
            }, new ae((function(t) {
                return Xt(window, "message", (function(e, n) {
                    return t(n)
                }), !1, (function(t) {
                    var e = t.data;
                    if (e && $(e)) {
                        try {
                            e = JSON.parse(e)
                        } catch (t) {
                            return
                        }
                        return e && o(e)
                    }
                }))
            })).then((function() {
                r(), e && clearInterval(e)
            })), ot(t.el, "src", t.el.src + (y(t.el.src, "?") ? "&" : "?") + (n ? "enablejsapi=1" : "api=1&player_id=" + t.id))
        })) : ae.resolve()
    }, Dn.prototype.play = function() {
        var t = this;
        if (this.isVideo())
            if (this.isIFrame()) this.enableApi().then((function() {
                return Mn(t.el, {
                    func: "playVideo",
                    method: "play"
                })
            }));
            else if (this.isHTML5()) try {
            var e = this.el.play();
            e && e.catch(et)
        } catch (t) {}
    }, Dn.prototype.pause = function() {
        var t = this;
        this.isVideo() && (this.isIFrame() ? this.enableApi().then((function() {
            return Mn(t.el, {
                func: "pauseVideo",
                method: "pause"
            })
        })) : this.isHTML5() && this.el.pause())
    }, Dn.prototype.mute = function() {
        var t = this;
        this.isVideo() && (this.isIFrame() ? this.enableApi().then((function() {
            return Mn(t.el, {
                func: "mute",
                method: "setVolume",
                value: 0
            })
        })) : this.isHTML5() && (this.el.muted = !0, ot(this.el, "muted", "")))
    };
    var Fn, Rn, Wn, Vn, Un, Zn, Qn, Yn, Xn, Kn = ct && window.IntersectionObserver || function() {
        function t(t, e) {
            var n = this;
            void 0 === e && (e = {});
            var i = e.rootMargin;
            void 0 === i && (i = "0 0"), this.targets = [];
            var r, o = (i || "0 0").split(" ").map(q),
                s = o[1];
            this.offsetTop = o[0], this.offsetLeft = s, this.apply = function() {
                r = r || requestAnimationFrame((function() {
                    return setTimeout((function() {
                        var e = n.takeRecords();
                        e.length && t(e, n), r = !1
                    }))
                }))
            }, this.off = Qt(window, "scroll resize load", this.apply, {
                passive: !0,
                capture: !0
            })
        }
        return t.prototype.takeRecords = function() {
            var t = this;
            return this.targets.filter((function(e) {
                var n = $n(e.target, t.offsetTop, t.offsetLeft);
                if (null === e.isIntersecting || n ^ e.isIntersecting) return e.isIntersecting = n, !0
            }))
        }, t.prototype.observe = function(t) {
            this.targets.push({
                target: t,
                isIntersecting: null
            }), this.apply()
        }, t.prototype.disconnect = function() {
            this.targets = [], this.off()
        }, t
    }();

    function Gn(t) {
        return !(!d(t, "uk-") && !d(t, "data-uk-")) && a(t.replace("data-uk-", "").replace("uk-", ""))
    }

    function Jn(t) {
        this._init(t)
    }

    function ti(t, e) {
        if (t)
            for (var n in t) t[n]._connected && t[n]._callUpdate(e)
    }

    function ei(t, e) {
        var n = {},
            i = t.args;
        void 0 === i && (i = []);
        var r = t.props;
        void 0 === r && (r = {});
        var s = t.el;
        if (!r) return n;
        for (var l in r) {
            var c = o(l),
                h = lt(s, c);
            P(h) || (h = r[l] === Boolean && "" === h || oi(r[l], h), ("target" !== c || h && !d(h, "_")) && (n[l] = h))
        }
        var u = Nn(lt(s, e), i);
        for (var f in u) {
            var p = a(f);
            void 0 !== r[p] && (n[p] = oi(r[p], u[f]))
        }
        return n
    }

    function ni(t, e, i) {
        Object.defineProperty(t, e, {
            enumerable: !0,
            get: function() {
                var r = t._computeds,
                    o = t.$props,
                    s = t.$el;
                return n(r, e) || (r[e] = (i.get || i).call(t, o, s)), r[e]
            },
            set: function(n) {
                var r = t._computeds;
                r[e] = i.set ? i.set.call(t, n) : n, P(r[e]) && delete r[e]
            }
        })
    }

    function ii(t, e, n) {
        T(e) || (e = {
            name: n,
            handler: e
        });
        var i = e.name,
            r = e.handler,
            o = e.capture,
            s = e.passive,
            a = e.delegate,
            l = e.filter,
            c = e.self,
            h = _(h = e.el) ? h.call(t) : h || t.$el;
        C(h) ? h.forEach((function(i) {
            return ii(t, Y({}, e, {
                el: i
            }), n)
        })) : !h || l && !l.call(t) || t._events.push(Qt(h, i, a ? $(a) ? a : a.call(t) : null, $(r) ? t[r] : r.bind(t), {
            passive: s,
            capture: o,
            self: c
        }))
    }

    function ri(t, e) {
        return t.every((function(t) {
            return !t || !n(t, e)
        }))
    }

    function oi(t, e) {
        return t === Boolean ? H(e) : t === Number ? z(e) : "list" === t ? V(e) : t ? t(e) : e
    }
    Jn.util = Object.freeze({
            __proto__: null,
            ajax: ue,
            getImage: de,
            transition: Ke,
            Transition: Ge,
            animate: tn,
            Animation: nn,
            attr: ot,
            hasAttr: st,
            removeAttr: at,
            data: lt,
            addClass: Me,
            removeClass: $e,
            removeClasses: Be,
            replaceClass: Oe,
            hasClass: je,
            toggleClass: Pe,
            positionAt: on,
            offset: sn,
            position: ln,
            offsetPosition: cn,
            height: hn,
            width: un,
            boxModelAdjust: fn,
            flipPosition: mn,
            toPx: wn,
            ready: fe,
            index: pe,
            getIndex: ge,
            empty: ve,
            html: me,
            prepend: function(t, e) {
                return (t = Ne(t)).hasChildNodes() ? xe(e, (function(e) {
                    return t.insertBefore(e, t.firstChild)
                })) : we(t, e)
            },
            append: we,
            before: ye,
            after: be,
            remove: Ce,
            wrapAll: _e,
            wrapInner: ke,
            unwrap: Ee,
            fragment: Se,
            apply: Ae,
            $: Ne,
            $$: De,
            inBrowser: ct,
            isIE: ht,
            isRtl: ut,
            hasTouch: pt,
            pointerDown: gt,
            pointerMove: vt,
            pointerUp: mt,
            pointerEnter: wt,
            pointerLeave: yt,
            pointerCancel: bt,
            on: Qt,
            off: Yt,
            once: Xt,
            trigger: Kt,
            createEvent: Gt,
            toEventTargets: ie,
            isTouch: re,
            getEventPos: oe,
            fastdom: bn,
            isVoidElement: zt,
            isVisible: qt,
            selInput: Ft,
            isInput: Rt,
            filter: Wt,
            within: Vt,
            parents: Ut,
            children: Zt,
            hasOwn: n,
            hyphenate: o,
            camelize: a,
            ucfirst: c,
            startsWith: d,
            endsWith: p,
            includes: y,
            findIndex: x,
            isArray: C,
            isFunction: _,
            isObject: k,
            isPlainObject: T,
            isWindow: L,
            isDocument: S,
            isJQuery: A,
            isNode: N,
            isElement: D,
            isNodeCollection: I,
            isBoolean: M,
            isString: $,
            isNumber: B,
            isNumeric: O,
            isEmpty: j,
            isUndefined: P,
            toBoolean: H,
            toNumber: z,
            toFloat: q,
            toNode: F,
            toNodes: R,
            toWindow: W,
            toList: V,
            toMs: U,
            isEqual: Z,
            swap: Q,
            assign: Y,
            last: X,
            each: K,
            sortBy: G,
            uniqueBy: J,
            clamp: tt,
            noop: et,
            intersectRect: nt,
            pointInRect: it,
            Dimensions: rt,
            MouseTracker: En,
            mergeOptions: An,
            parseOptions: Nn,
            Player: Dn,
            Promise: ae,
            Deferred: se,
            IntersectionObserver: Kn,
            query: xt,
            queryAll: Ct,
            find: kt,
            findAll: Et,
            matches: Mt,
            closest: Bt,
            parent: Ot,
            escape: Pt,
            css: Re,
            getStyles: We,
            getStyle: Ve,
            getCssVar: Ze,
            propName: Ye,
            isInView: $n,
            scrollTop: Bn,
            scrollIntoView: On,
            scrolledOver: jn,
            scrollParents: Pn,
            getViewport: Hn
        }), Jn.data = "__uikit__", Jn.prefix = "uk-", Jn.options = {}, Jn.version = "3.4.6", Wn = (Fn = Jn).data, Fn.use = function(t) {
            if (!t.installed) return t.call(null, this), t.installed = !0, this
        }, Fn.mixin = function(t, e) {
            (e = ($(e) ? Fn.component(e) : e) || this).options = An(e.options, t)
        }, Fn.extend = function(t) {
            function e(t) {
                this._init(t)
            }
            return t = t || {}, ((e.prototype = Object.create(this.prototype)).constructor = e).options = An(this.options, t), e.super = this, e.extend = this.extend, e
        }, Fn.update = function(t, e) {
            Ut(t = t ? F(t) : document.body).reverse().forEach((function(t) {
                return ti(t[Wn], e)
            })), Ae(t, (function(t) {
                return ti(t[Wn], e)
            }))
        }, Object.defineProperty(Fn, "container", {
            get: function() {
                return Rn || document.body
            },
            set: function(t) {
                Rn = Ne(t)
            }
        }), (Vn = Jn).prototype._callHook = function(t) {
            var e = this,
                n = this.$options[t];
            n && n.forEach((function(t) {
                return t.call(e)
            }))
        }, Vn.prototype._callConnected = function() {
            this._connected || (this._data = {}, this._computeds = {}, this._frames = {
                reads: {},
                writes: {}
            }, this._initProps(), this._callHook("beforeConnect"), this._connected = !0, this._initEvents(), this._initObserver(), this._callHook("connected"), this._callUpdate())
        }, Vn.prototype._callDisconnected = function() {
            this._connected && (this._callHook("beforeDisconnect"), this._observer && (this._observer.disconnect(), this._observer = null), this._unbindEvents(), this._callHook("disconnected"), this._connected = !1)
        }, Vn.prototype._callUpdate = function(t) {
            var e = this;
            void 0 === t && (t = "update");
            var n = t.type || t;
            y(["update", "resize"], n) && this._callWatches();
            var i = this.$options.update,
                r = this._frames,
                o = r.reads,
                s = r.writes;
            i && i.forEach((function(t, i) {
                var r = t.read,
                    a = t.write;
                "update" !== n && !y(t.events, n) || (r && !y(bn.reads, o[i]) && (o[i] = bn.read((function() {
                    var t = e._connected && r.call(e, e._data, n);
                    !1 === t && a ? bn.clear(s[i]) : T(t) && Y(e._data, t)
                }))), a && !y(bn.writes, s[i]) && (s[i] = bn.write((function() {
                    return e._connected && a.call(e, e._data, n)
                }))))
            }))
        }, Vn.prototype._callWatches = function() {
            var t, e = this,
                i = this._frames;
            i._watch || (t = !n(i, "_watch"), i._watch = bn.read((function() {
                if (e._connected) {
                    var r = e.$options.computed,
                        o = e._computeds;
                    for (var s in r) {
                        var a = n(o, s),
                            l = o[s];
                        delete o[s];
                        var c = r[s],
                            h = c.watch;
                        h && (t && c.immediate || a && !Z(l, e[s])) && h.call(e, e[s], l)
                    }
                    i._watch = null
                }
            })))
        }, Zn = 0, (Un = Jn).prototype._init = function(t) {
            (t = t || {}).data = function(t, e) {
                var n = t.data,
                    i = e.args,
                    r = e.props;
                if (void 0 === r && (r = {}), n = C(n) ? j(i) ? void 0 : n.slice(0, i.length).reduce((function(t, e, n) {
                        return T(e) ? Y(t, e) : t[i[n]] = e, t
                    }), {}) : n)
                    for (var o in n) P(n[o]) ? delete n[o] : n[o] = r[o] ? oi(r[o], n[o]) : n[o];
                return n
            }(t, this.constructor.options), this.$options = An(this.constructor.options, t, this), this.$el = null, this.$props = {}, this._uid = Zn++, this._initData(), this._initMethods(), this._initComputeds(), this._callHook("created"), t.el && this.$mount(t.el)
        }, Un.prototype._initData = function() {
            var t = this.$options.data;
            for (var e in void 0 === t && (t = {}), t) this.$props[e] = this[e] = t[e]
        }, Un.prototype._initMethods = function() {
            var t = this.$options.methods;
            if (t)
                for (var e in t) this[e] = t[e].bind(this)
        }, Un.prototype._initComputeds = function() {
            var t = this.$options.computed;
            if (this._computeds = {}, t)
                for (var e in t) ni(this, e, t[e])
        }, Un.prototype._initProps = function(t) {
            var e;
            for (e in t = t || ei(this.$options, this.$name)) P(t[e]) || (this.$props[e] = t[e]);
            var n = [this.$options.computed, this.$options.methods];
            for (e in this.$props) e in t && ri(n, e) && (this[e] = this.$props[e])
        }, Un.prototype._initEvents = function() {
            var t = this;
            this._events = [];
            var e = this.$options.events;
            e && e.forEach((function(e) {
                if (n(e, "handler")) ii(t, e);
                else
                    for (var i in e) ii(t, e[i], i)
            }))
        }, Un.prototype._unbindEvents = function() {
            this._events.forEach((function(t) {
                return t()
            })), delete this._events
        }, Un.prototype._initObserver = function() {
            var t, e = this,
                n = this.$options,
                i = n.attrs,
                r = n.props,
                s = n.el;
            !this._observer && r && !1 !== i && (i = C(i) ? i : Object.keys(r), this._observer = new MutationObserver((function(t) {
                var n = ei(e.$options, e.$name);
                t.some((function(t) {
                    var r = t.attributeName.replace("data-", "");
                    return (r === e.$name ? i : [a(r)]).some((function(t) {
                        return !P(n[t]) && n[t] !== e.$props[t]
                    }))
                })) && e.$reset()
            })), t = i.map(o).concat(this.$name), this._observer.observe(s, {
                attributes: !0,
                attributeFilter: t.concat(t.map((function(t) {
                    return "data-" + t
                })))
            }))
        }, Yn = (Qn = Jn).data, Xn = {}, Qn.component = function(t, e) {
            var n = o(t);
            if (t = a(n), !e) return T(Xn[t]) && (Xn[t] = Qn.extend(Xn[t])), Xn[t];
            Qn[t] = function(e, n) {
                for (var i = arguments.length, r = Array(i); i--;) r[i] = arguments[i];
                var o = Qn.component(t);
                return o.options.functional ? new o({
                    data: T(e) ? e : [].concat(r)
                }) : e ? De(e).map(s)[0] : s(e);

                function s(e) {
                    var i = Qn.getComponent(e, t);
                    if (i) {
                        if (!n) return i;
                        i.$destroy()
                    }
                    return new o({
                        el: e,
                        data: n
                    })
                }
            };
            var i = T(e) ? Y({}, e) : e.options;
            return i.name = t, i.install && i.install(Qn, i, t), Qn._initialized && !i.functional && bn.read((function() {
                return Qn[t]("[uk-" + n + "],[data-uk-" + n + "]")
            })), Xn[t] = T(e) ? i : e
        }, Qn.getComponents = function(t) {
            return t && t[Yn] || {}
        }, Qn.getComponent = function(t, e) {
            return Qn.getComponents(t)[e]
        }, Qn.connect = function(t) {
            if (t[Yn])
                for (var e in t[Yn]) t[Yn][e]._callConnected();
            for (var n = 0; n < t.attributes.length; n++) {
                var i = Gn(t.attributes[n].name);
                i && i in Xn && Qn[i](t)
            }
        }, Qn.disconnect = function(t) {
            for (var e in t[Yn]) t[Yn][e]._callDisconnected()
        },
        function(t) {
            var e = t.data;
            t.prototype.$create = function(e, n, i) {
                return t[e](n, i)
            }, t.prototype.$mount = function(t) {
                var n = this.$options.name;
                t[e] || (t[e] = {}), t[e][n] || ((t[e][n] = this).$el = this.$options.el = this.$options.el || t, Vt(t, document) && this._callConnected())
            }, t.prototype.$reset = function() {
                this._callDisconnected(), this._callConnected()
            }, t.prototype.$destroy = function(t) {
                void 0 === t && (t = !1);
                var n = this.$options,
                    i = n.el,
                    r = n.name;
                i && this._callDisconnected(), this._callHook("destroy"), i && i[e] && (delete i[e][r], j(i[e]) || delete i[e], t && Ce(this.$el))
            }, t.prototype.$emit = function(t) {
                this._callUpdate(t)
            }, t.prototype.$update = function(e, n) {
                void 0 === e && (e = this.$el), t.update(e, n)
            }, t.prototype.$getComponent = t.getComponent;
            var n = {};
            Object.defineProperties(t.prototype, {
                $container: Object.getOwnPropertyDescriptor(t, "container"),
                $name: {
                    get: function() {
                        var e = this.$options.name;
                        return n[e] || (n[e] = t.prefix + o(e)), n[e]
                    }
                }
            })
        }(Jn);
    var si = {
            connected: function() {
                je(this.$el, this.$name) || Me(this.$el, this.$name)
            }
        },
        ai = {
            props: {
                cls: Boolean,
                animation: "list",
                duration: Number,
                origin: String,
                transition: String
            },
            data: {
                cls: !1,
                animation: [!1],
                duration: 200,
                origin: !1,
                transition: "linear",
                initProps: {
                    overflow: "",
                    height: "",
                    paddingTop: "",
                    paddingBottom: "",
                    marginTop: "",
                    marginBottom: ""
                },
                hideProps: {
                    overflow: "hidden",
                    height: 0,
                    paddingTop: 0,
                    paddingBottom: 0,
                    marginTop: 0,
                    marginBottom: 0
                }
            },
            computed: {
                hasAnimation: function(t) {
                    return !!t.animation[0]
                },
                hasTransition: function(t) {
                    return this.hasAnimation && !0 === t.animation[0]
                }
            },
            methods: {
                toggleElement: function(t, e, n) {
                    var i = this;
                    return ae.all(R(t).map((function(t) {
                        return new ae((function(r) {
                            return i._toggleElement(t, e, n).then(r, et)
                        }))
                    })))
                },
                isToggled: function(t) {
                    var e = R(t || this.$el);
                    return this.cls ? je(e, this.cls.split(" ")[0]) : !st(e, "hidden")
                },
                updateAria: function(t) {
                    !1 === this.cls && ot(t, "aria-hidden", !this.isToggled(t))
                },
                _toggleElement: function(t, e, n) {
                    var i = this;
                    if (e = M(e) ? e : nn.inProgress(t) ? je(t, "uk-animation-leave") : Ge.inProgress(t) ? "0px" === t.style.height : !this.isToggled(t), !Kt(t, "before" + (e ? "show" : "hide"), [this])) return ae.reject();
                    var r, o = (_(n) ? n : !1 !== n && this.hasAnimation ? this.hasTransition ? li(this) : (r = this, function(t, e) {
                        nn.cancel(t);
                        var n = r.animation,
                            i = r.duration,
                            o = r._toggle;
                        return e ? (o(t, !0), nn.in(t, n[0], i, r.origin)) : nn.out(t, n[1] || n[0], i, r.origin).then((function() {
                            return o(t, !1)
                        }))
                    }) : this._toggle)(t, e);

                    function s() {
                        Kt(t, e ? "shown" : "hidden", [i]), i.$update(t)
                    }
                    return Kt(t, e ? "show" : "hide", [this]), o ? o.then(s) : ae.resolve(s())
                },
                _toggle: function(t, e) {
                    var n;
                    t && (e = Boolean(e), this.cls ? (n = y(this.cls, " ") || e !== je(t, this.cls)) && Pe(t, this.cls, y(this.cls, " ") ? void 0 : e) : (n = e === st(t, "hidden")) && ot(t, "hidden", e ? null : ""), De("[autofocus]", t).some((function(t) {
                        return qt(t) ? t.focus() || !0 : t.blur()
                    })), this.updateAria(t), n && (Kt(t, "toggled", [this]), this.$update(t)))
                }
            }
        };

    function li(t) {
        var e = t.isToggled,
            n = t.duration,
            i = t.initProps,
            r = t.hideProps,
            o = t.transition,
            s = t._toggle;
        return function(t, a) {
            var l = Ge.inProgress(t),
                c = t.hasChildNodes ? q(Re(t.firstElementChild, "marginTop")) + q(Re(t.lastElementChild, "marginBottom")) : 0,
                h = qt(t) ? hn(t) + (l ? 0 : c) : 0;
            Ge.cancel(t), e(t) || s(t, !0), hn(t, ""), bn.flush();
            var u = hn(t) + (l ? 0 : c);
            return hn(t, h), (a ? Ge.start(t, Y({}, i, {
                overflow: "hidden",
                height: u
            }), Math.round(n * (1 - h / u)), o) : Ge.start(t, r, Math.round(n * (h / u)), o).then((function() {
                return s(t, !1)
            }))).then((function() {
                return Re(t, i)
            }))
        }
    }
    var ci = {
        mixins: [si, ai],
        props: {
            targets: String,
            active: null,
            collapsible: Boolean,
            multiple: Boolean,
            toggle: String,
            content: String,
            transition: String,
            offset: Number
        },
        data: {
            targets: "> *",
            active: !1,
            animation: [!0],
            collapsible: !0,
            multiple: !1,
            clsOpen: "uk-open",
            toggle: "> .uk-accordion-title",
            content: "> .uk-accordion-content",
            transition: "ease",
            offset: 0
        },
        computed: {
            items: {
                get: function(t, e) {
                    return De(t.targets, e)
                },
                watch: function(t, e) {
                    var n, i = this;
                    t.forEach((function(t) {
                        return hi(Ne(i.content, t), !je(t, i.clsOpen))
                    })), e || je(t, this.clsOpen) || (n = !1 !== this.active && t[Number(this.active)] || !this.collapsible && t[0]) && this.toggle(n, !1)
                },
                immediate: !0
            }
        },
        events: [{
            name: "click",
            delegate: function() {
                return this.targets + " " + this.$props.toggle
            },
            handler: function(t) {
                t.preventDefault(), this.toggle(pe(De(this.targets + " " + this.$props.toggle, this.$el), t.current))
            }
        }],
        methods: {
            toggle: function(t, e) {
                var n = this,
                    i = [this.items[ge(t, this.items)]],
                    r = Wt(this.items, "." + this.clsOpen);
                this.multiple || y(r, i[0]) || (i = i.concat(r)), (this.collapsible || Wt(i, ":not(." + this.clsOpen + ")").length) && i.forEach((function(t) {
                    return n.toggleElement(t, !je(t, n.clsOpen), (function(t, i) {
                        Pe(t, n.clsOpen, i);
                        var r = Ne((t._wrapper ? "> * " : "") + n.content, t);
                        if (!1 !== e && n.hasTransition) return t._wrapper || (t._wrapper = _e(r, "<div" + (i ? " hidden" : "") + ">")), hi(r, !1), li(n)(t._wrapper, i).then((function() {
                            var e;
                            hi(r, !i), delete t._wrapper, Ee(r), i && ($n(e = Ne(n.$props.toggle, t)) || On(e, {
                                offset: n.offset
                            }))
                        }));
                        hi(r, !i)
                    }))
                }))
            }
        }
    };

    function hi(t, e) {
        ot(t, "hidden", e ? "" : null)
    }
    var ui, di = {
            mixins: [si, ai],
            args: "animation",
            props: {
                close: String
            },
            data: {
                animation: [!0],
                selClose: ".uk-alert-close",
                duration: 150,
                hideProps: Y({
                    opacity: 0
                }, ai.data.hideProps)
            },
            events: [{
                name: "click",
                delegate: function() {
                    return this.selClose
                },
                handler: function(t) {
                    t.preventDefault(), this.close()
                }
            }],
            methods: {
                close: function() {
                    var t = this;
                    this.toggleElement(this.$el).then((function() {
                        return t.$destroy(!0)
                    }))
                }
            }
        },
        fi = {
            args: "autoplay",
            props: {
                automute: Boolean,
                autoplay: Boolean
            },
            data: {
                automute: !1,
                autoplay: !0
            },
            computed: {
                inView: function(t) {
                    return "inview" === t.autoplay
                }
            },
            connected: function() {
                this.inView && !st(this.$el, "preload") && (this.$el.preload = "none"), this.player = new Dn(this.$el), this.automute && this.player.mute()
            },
            update: {
                read: function() {
                    return !!this.player && {
                        visible: qt(this.$el) && "hidden" !== Re(this.$el, "visibility"),
                        inView: this.inView && $n(this.$el)
                    }
                },
                write: function(t) {
                    var e = t.inView;
                    !t.visible || this.inView && !e ? this.player.pause() : (!0 === this.autoplay || this.inView && e) && this.player.play()
                },
                events: ["resize", "scroll"]
            }
        },
        pi = {
            mixins: [si, fi],
            props: {
                width: Number,
                height: Number
            },
            data: {
                automute: !0
            },
            update: {
                read: function() {
                    var t = this.$el,
                        e = function(t) {
                            for (; t = Ot(t);)
                                if ("static" !== Re(t, "position")) return t
                        }(t) || t.parentNode,
                        n = e.offsetHeight,
                        i = e.offsetWidth,
                        r = rt.cover({
                            width: this.width || t.naturalWidth || t.videoWidth || t.clientWidth,
                            height: this.height || t.naturalHeight || t.videoHeight || t.clientHeight
                        }, {
                            width: i + (i % 2 ? 1 : 0),
                            height: n + (n % 2 ? 1 : 0)
                        });
                    return !(!r.width || !r.height) && r
                },
                write: function(t) {
                    Re(this.$el, {
                        height: t.height,
                        width: t.width
                    })
                },
                events: ["resize"]
            }
        },
        gi = {
            props: {
                pos: String,
                offset: null,
                flip: Boolean,
                clsPos: String
            },
            data: {
                pos: "bottom-" + (ut ? "right" : "left"),
                flip: !0,
                offset: !1,
                clsPos: ""
            },
            computed: {
                pos: function(t) {
                    var e = t.pos;
                    return (e + (y(e, "-") ? "" : "-center")).split("-")
                },
                dir: function() {
                    return this.pos[0]
                },
                align: function() {
                    return this.pos[1]
                }
            },
            methods: {
                positionAt: function(t, e, n) {
                    var i;
                    Be(t, this.clsPos + "-(top|bottom|left|right)(-[a-z]+)?"), Re(t, {
                        top: "",
                        left: ""
                    });
                    var r = this.offset,
                        o = this.getAxis();
                    O(r) || (r = (i = Ne(r)) ? sn(i)["x" === o ? "left" : "top"] - sn(e)["x" === o ? "right" : "bottom"] : 0);
                    var s = on(t, e, "x" === o ? mn(this.dir) + " " + this.align : this.align + " " + mn(this.dir), "x" === o ? this.dir + " " + this.align : this.align + " " + this.dir, "x" === o ? "" + ("left" === this.dir ? -r : r) : " " + ("top" === this.dir ? -r : r), null, this.flip, n).target,
                        a = s.x,
                        l = s.y;
                    this.dir = "x" === o ? a : l, this.align = "x" === o ? l : a, Pe(t, this.clsPos + "-" + this.dir + "-" + this.align, !1 === this.offset)
                },
                getAxis: function() {
                    return "top" === this.dir || "bottom" === this.dir ? "y" : "x"
                }
            }
        },
        vi = {
            mixins: [gi, ai],
            args: "pos",
            props: {
                mode: "list",
                toggle: Boolean,
                boundary: Boolean,
                boundaryAlign: Boolean,
                delayShow: Number,
                delayHide: Number,
                clsDrop: String
            },
            data: {
                mode: ["click", "hover"],
                toggle: "- *",
                boundary: ct && window,
                boundaryAlign: !1,
                delayShow: 0,
                delayHide: 800,
                clsDrop: !1,
                animation: ["uk-animation-fade"],
                cls: "uk-open"
            },
            computed: {
                boundary: function(t, e) {
                    return xt(t.boundary, e)
                },
                clsDrop: function(t) {
                    return t.clsDrop || "uk-" + this.$options.name
                },
                clsPos: function() {
                    return this.clsDrop
                }
            },
            created: function() {
                this.tracker = new En
            },
            connected: function() {
                Me(this.$el, this.clsDrop);
                var t = this.$props.toggle;
                this.toggle = t && this.$create("toggle", xt(t, this.$el), {
                    target: this.$el,
                    mode: this.mode
                }), this.toggle || Kt(this.$el, "updatearia")
            },
            disconnected: function() {
                this.isActive() && (ui = null)
            },
            events: [{
                name: "click",
                delegate: function() {
                    return "." + this.clsDrop + "-close"
                },
                handler: function(t) {
                    t.preventDefault(), this.hide(!1)
                }
            }, {
                name: "click",
                delegate: function() {
                    return 'a[href^="#"]'
                },
                handler: function(t) {
                    var e = t.current.hash;
                    t.defaultPrevented || !e || Vt(e, this.$el) || this.hide(!1)
                }
            }, {
                name: "beforescroll",
                handler: function() {
                    this.hide(!1)
                }
            }, {
                name: "toggle",
                self: !0,
                handler: function(t, e) {
                    t.preventDefault(), this.isToggled() ? this.hide(!1) : this.show(e, !1)
                }
            }, {
                name: "toggleshow",
                self: !0,
                handler: function(t, e) {
                    t.preventDefault(), this.show(e)
                }
            }, {
                name: "togglehide",
                self: !0,
                handler: function(t) {
                    t.preventDefault(), this.hide()
                }
            }, {
                name: wt,
                filter: function() {
                    return y(this.mode, "hover")
                },
                handler: function(t) {
                    re(t) || this.clearTimers()
                }
            }, {
                name: yt,
                filter: function() {
                    return y(this.mode, "hover")
                },
                handler: function(t) {
                    re(t) || this.hide()
                }
            }, {
                name: "toggled",
                self: !0,
                handler: function() {
                    this.isToggled() && (this.clearTimers(), nn.cancel(this.$el), this.position())
                }
            }, {
                name: "show",
                self: !0,
                handler: function() {
                    var t = this;
                    (ui = this).tracker.init(), Kt(this.$el, "updatearia"), Xt(this.$el, "hide", Qt(document, gt, (function(e) {
                        var n = e.target;
                        return !Vt(n, t.$el) && Xt(document, mt + " " + bt + " scroll", (function(e) {
                            e.defaultPrevented || e.type !== mt || n !== e.target || t.toggle && Vt(n, t.toggle.$el) || t.hide(!1)
                        }), !0)
                    })), {
                        self: !0
                    }), Xt(this.$el, "hide", Qt(document, "keydown", (function(e) {
                        27 === e.keyCode && (e.preventDefault(), t.hide(!1))
                    })), {
                        self: !0
                    })
                }
            }, {
                name: "beforehide",
                self: !0,
                handler: function() {
                    this.clearTimers()
                }
            }, {
                name: "hide",
                handler: function(t) {
                    var e = t.target;
                    this.$el === e ? (ui = this.isActive() ? null : ui, Kt(this.$el, "updatearia"), this.tracker.cancel()) : ui = null === ui && Vt(e, this.$el) && this.isToggled() ? this : ui
                }
            }, {
                name: "updatearia",
                self: !0,
                handler: function(t, e) {
                    t.preventDefault(), this.updateAria(this.$el), (e || this.toggle) && (ot((e || this.toggle).$el, "aria-expanded", this.isToggled()), Pe(this.toggle.$el, this.cls, this.isToggled()))
                }
            }],
            update: {
                write: function() {
                    this.isToggled() && !nn.inProgress(this.$el) && this.position()
                },
                events: ["resize"]
            },
            methods: {
                show: function(t, e) {
                    var n = this;
                    if (void 0 === t && (t = this.toggle), void 0 === e && (e = !0), this.isToggled() && t && this.toggle && t.$el !== this.toggle.$el && this.hide(!1), this.toggle = t, this.clearTimers(), !this.isActive()) {
                        if (ui) {
                            if (e && ui.isDelaying) return void(this.showTimer = setTimeout(this.show, 10));
                            for (; ui && !Vt(this.$el, ui.$el);) ui.hide(!1)
                        }
                        this.showTimer = setTimeout((function() {
                            return !n.isToggled() && n.toggleElement(n.$el, !0)
                        }), e && this.delayShow || 0)
                    }
                },
                hide: function(t) {
                    var e, n = this;

                    function i() {
                        return n.toggleElement(n.$el, !1, !1)
                    }
                    void 0 === t && (t = !0), this.clearTimers(), this.isDelaying = (e = [], Ae(this.$el, (function(t) {
                        return "static" !== Re(t, "position") && e.push(t)
                    })), e.some((function(t) {
                        return n.tracker.movesTo(t)
                    }))), t && this.isDelaying ? this.hideTimer = setTimeout(this.hide, 50) : t && this.delayHide ? this.hideTimer = setTimeout(i, this.delayHide) : i()
                },
                clearTimers: function() {
                    clearTimeout(this.showTimer), clearTimeout(this.hideTimer), this.showTimer = null, this.hideTimer = null, this.isDelaying = !1
                },
                isActive: function() {
                    return ui === this
                },
                position: function() {
                    Be(this.$el, this.clsDrop + "-(stack|boundary)"), Pe(this.$el, this.clsDrop + "-boundary", this.boundaryAlign);
                    var t, e = sn(this.boundary),
                        n = this.boundaryAlign ? e : sn(this.toggle.$el);
                    "justify" === this.align ? (t = "y" === this.getAxis() ? "width" : "height", Re(this.$el, t, n[t])) : this.$el.offsetWidth > Math.max(e.right - n.left, n.right - e.left) && Me(this.$el, this.clsDrop + "-stack"), this.positionAt(this.$el, this.boundaryAlign ? this.boundary : this.toggle.$el, this.boundary)
                }
            }
        },
        mi = {
            mixins: [si],
            args: "target",
            props: {
                target: Boolean
            },
            data: {
                target: !1
            },
            computed: {
                input: function(t, e) {
                    return Ne(Ft, e)
                },
                state: function() {
                    return this.input.nextElementSibling
                },
                target: function(t, e) {
                    var n = t.target;
                    return n && (!0 === n && this.input.parentNode === e && this.input.nextElementSibling || xt(n, e))
                }
            },
            update: function() {
                var t, e, n, i = this.target,
                    r = this.input;
                !i || i[e = Rt(i) ? "value" : "textContent"] !== (n = r.files && r.files[0] ? r.files[0].name : Mt(r, "select") && (t = De("option", r).filter((function(t) {
                    return t.selected
                }))[0]) ? t.textContent : r.value) && (i[e] = n)
            },
            events: [{
                name: "change",
                handler: function() {
                    this.$update()
                }
            }, {
                name: "reset",
                el: function() {
                    return Bt(this.$el, "form")
                },
                handler: function() {
                    this.$update()
                }
            }]
        },
        wi = {
            update: {
                read: function(t) {
                    var e = $n(this.$el);
                    if (!e || t.isInView === e) return !1;
                    t.isInView = e
                },
                write: function() {
                    this.$el.src = this.$el.src
                },
                events: ["scroll", "resize"]
            }
        },
        yi = {
            props: {
                margin: String,
                firstColumn: Boolean
            },
            data: {
                margin: "uk-margin-small-top",
                firstColumn: "uk-first-column"
            },
            update: {
                read: function() {
                    return {
                        columns: (t = this.$el.children, e = xi(t, "left", "right"), ut ? e.reverse() : e),
                        rows: bi(this.$el.children)
                    };
                    var t, e
                },
                write: function(t) {
                    var e = this,
                        n = t.columns;
                    t.rows.forEach((function(t, i) {
                        return t.forEach((function(t) {
                            Pe(t, e.margin, 0 !== i), Pe(t, e.firstColumn, y(n[0], t))
                        }))
                    }))
                },
                events: ["resize"]
            }
        };

    function bi(t) {
        return xi(t, "top", "bottom")
    }

    function xi(t, e, n) {
        for (var i = [
                []
            ], r = 0; r < t.length; r++) {
            var o = t[r];
            if (qt(o))
                for (var s = Ci(o), a = i.length - 1; 0 <= a; a--) {
                    var l = i[a];
                    if (!l[0]) {
                        l.push(o);
                        break
                    }
                    var c = l[0].offsetParent === o.offsetParent ? Ci(l[0]) : (s = Ci(o, !0), Ci(l[0], !0));
                    if (s[e] >= c[n] - 1 && s[e] !== c[e]) {
                        i.push([o]);
                        break
                    }
                    if (s[n] - 1 > c[e] || s[e] === c[e]) {
                        l.push(o);
                        break
                    }
                    if (0 === a) {
                        i.unshift([o]);
                        break
                    }
                }
        }
        return i
    }

    function Ci(t, e) {
        var n;
        void 0 === e && (e = !1);
        var i = t.offsetTop,
            r = t.offsetLeft,
            o = t.offsetHeight,
            s = t.offsetWidth;
        return e && (i = (n = cn(t))[0], r = n[1]), {
            top: i,
            left: r,
            bottom: i + o,
            right: r + s
        }
    }
    var _i = {
            extends: yi,
            mixins: [si],
            name: "grid",
            props: {
                masonry: Boolean,
                parallax: Number
            },
            data: {
                margin: "uk-grid-margin",
                clsStack: "uk-grid-stack",
                masonry: !1,
                parallax: 0
            },
            connected: function() {
                this.masonry && Me(this.$el, "uk-flex-top uk-flex-wrap-top")
            },
            update: [{
                write: function(t) {
                    Pe(this.$el, this.clsStack, t.columns.length < 2)
                },
                events: ["resize"]
            }, {
                read: function(t) {
                    var e = t.columns,
                        n = t.rows,
                        i = Zt(this.$el);
                    if (!i.length || !this.masonry && !this.parallax) return !1;
                    var r, o, s, a, l, c, h, u = i.some(Ge.inProgress),
                        d = !1,
                        f = "",
                        p = Math.abs(this.parallax);
                    return this.masonry && (r = (e = e.map((function(t) {
                        return G(t, "offsetTop")
                    }))).map((function(t) {
                        return t.reduce((function(t, e) {
                            return t + e.offsetHeight
                        }), 0)
                    })), c = this.margin, o = q((h = (l = i).filter((function(t) {
                        return je(t, c)
                    }))[0]) ? Re(h, "marginTop") : Re(l[0], "paddingLeft")) * (n.length - 1), s = e, a = n.map((function(t) {
                        return Math.max.apply(Math, t.map((function(t) {
                            return t.offsetHeight
                        })))
                    })), d = s.map((function(t) {
                        var e = 0;
                        return t.map((function(n, i) {
                            return e += i ? a[i - 1] - t[i - 1].offsetHeight : 0
                        }))
                    })), f = Math.max.apply(Math, r) + o, p = p && r.reduce((function(t, e, n) {
                        return Math.max(t, e + o + (n % 2 ? p : p / 8) - f)
                    }), 0)), {
                        padding: p,
                        columns: e,
                        translates: d,
                        height: !u && f
                    }
                },
                write: function(t) {
                    var e = t.height;
                    Re(this.$el, "paddingBottom", t.padding || ""), !1 !== e && Re(this.$el, "height", e)
                },
                events: ["resize"]
            }, {
                read: function(t) {
                    var e = t.height;
                    return {
                        scrolled: !!this.parallax && jn(this.$el, e ? e - hn(this.$el) : 0) * Math.abs(this.parallax)
                    }
                },
                write: function(t) {
                    var e = t.scrolled,
                        n = t.translates;
                    !1 === e && !n || t.columns.forEach((function(t, i) {
                        return t.forEach((function(t, r) {
                            return Re(t, "transform", e || n ? "translateY(" + ((n && -n[i][r]) + (e ? i % 2 ? e : e / 8 : 0)) + "px)" : "")
                        }))
                    }))
                },
                events: ["scroll", "resize"]
            }]
        },
        ki = ht ? {
            props: {
                selMinHeight: String
            },
            data: {
                selMinHeight: !1,
                forceHeight: !1
            },
            computed: {
                elements: function(t, e) {
                    var n = t.selMinHeight;
                    return n ? De(n, e) : [e]
                }
            },
            update: [{
                read: function() {
                    Re(this.elements, "height", "")
                },
                order: -5,
                events: ["resize"]
            }, {
                write: function() {
                    var t = this;
                    this.elements.forEach((function(e) {
                        var n = q(Re(e, "minHeight"));
                        n && (t.forceHeight || Math.round(n + fn(e, "height", "content-box")) >= e.offsetHeight) && Re(e, "height", n)
                    }))
                },
                order: 5,
                events: ["resize"]
            }]
        } : {},
        Ei = {
            mixins: [ki],
            args: "target",
            props: {
                target: String,
                row: Boolean
            },
            data: {
                target: "> *",
                row: !0,
                forceHeight: !0
            },
            computed: {
                elements: function(t, e) {
                    return De(t.target, e)
                }
            },
            update: {
                read: function() {
                    return {
                        rows: (this.row ? bi(this.elements) : [this.elements]).map(Ti)
                    }
                },
                write: function(t) {
                    t.rows.forEach((function(t) {
                        var e = t.heights;
                        return t.elements.forEach((function(t, n) {
                            return Re(t, "minHeight", e[n])
                        }))
                    }))
                },
                events: ["resize"]
            }
        };

    function Ti(t) {
        var e;
        if (t.length < 2) return {
            heights: [""],
            elements: t
        };
        var n = Li(t),
            i = n.heights,
            r = n.max,
            o = t.some((function(t) {
                return t.style.minHeight
            })),
            s = t.some((function(t, e) {
                return !t.style.minHeight && i[e] < r
            }));
        return o && s && (Re(t, "minHeight", ""), e = Li(t), i = e.heights, r = e.max), {
            heights: i = t.map((function(t, e) {
                return i[e] === r && q(t.style.minHeight).toFixed(2) !== r.toFixed(2) ? "" : r
            })),
            elements: t
        }
    }

    function Li(t) {
        var e = t.map((function(t) {
            return sn(t).height - fn(t, "height", "content-box")
        }));
        return {
            heights: e,
            max: Math.max.apply(null, e)
        }
    }
    var Si = {
        mixins: [ki],
        props: {
            expand: Boolean,
            offsetTop: Boolean,
            offsetBottom: Boolean,
            minHeight: Number
        },
        data: {
            expand: !1,
            offsetTop: !1,
            offsetBottom: !1,
            minHeight: 0
        },
        update: {
            read: function(t) {
                var e = t.minHeight;
                if (!qt(this.$el)) return !1;
                var n = "",
                    i = fn(this.$el, "height", "content-box");
                if (this.expand) {
                    if (this.$el.dataset.heightExpand = "", Ne("[data-height-expand]") !== this.$el) return !1;
                    n = hn(window) - (Ai(document.documentElement) - Ai(this.$el)) - i || ""
                } else {
                    var r;
                    n = "calc(100vh", this.offsetTop && (n += 0 < (r = sn(this.$el).top) && r < hn(window) / 2 ? " - " + r + "px" : ""), !0 === this.offsetBottom ? n += " - " + Ai(this.$el.nextElementSibling) + "px" : O(this.offsetBottom) ? n += " - " + this.offsetBottom + "vh" : this.offsetBottom && p(this.offsetBottom, "px") ? n += " - " + q(this.offsetBottom) + "px" : $(this.offsetBottom) && (n += " - " + Ai(xt(this.offsetBottom, this.$el)) + "px"), n += (i ? " - " + i + "px" : "") + ")"
                }
                return {
                    minHeight: n,
                    prev: e
                }
            },
            write: function(t) {
                var e = t.minHeight,
                    n = t.prev;
                Re(this.$el, {
                    minHeight: e
                }), e !== n && this.$update(this.$el, "resize"), this.minHeight && q(Re(this.$el, "minHeight")) < this.minHeight && Re(this.$el, "minHeight", this.minHeight)
            },
            events: ["resize"]
        }
    };

    function Ai(t) {
        return t && sn(t).height || 0
    }
    var Ni = {
            args: "src",
            props: {
                id: Boolean,
                icon: String,
                src: String,
                style: String,
                width: Number,
                height: Number,
                ratio: Number,
                class: String,
                strokeAnimation: Boolean,
                focusable: Boolean,
                attributes: "list"
            },
            data: {
                ratio: 1,
                include: ["style", "class", "focusable"],
                class: "",
                strokeAnimation: !1
            },
            beforeConnect: function() {
                this.class += " uk-svg"
            },
            connected: function() {
                var t, e = this;
                !this.icon && y(this.src, "#") && (t = this.src.split("#"), this.src = t[0], this.icon = t[1]), this.svg = this.getSvg().then((function(t) {
                    return e.applyAttributes(t), e.svgEl = function(t, e) {
                        if (zt(e) || "CANVAS" === e.tagName) {
                            ot(e, "hidden", !0);
                            var n = e.nextElementSibling;
                            return Bi(t, n) ? n : be(e, t)
                        }
                        var i = e.lastElementChild;
                        return Bi(t, i) ? i : we(e, t)
                    }(t, e.$el)
                }), et)
            },
            disconnected: function() {
                var t = this;
                zt(this.$el) && ot(this.$el, "hidden", null), this.svg && this.svg.then((function(e) {
                    return (!t._connected || e !== t.svgEl) && Ce(e)
                }), et), this.svg = this.svgEl = null
            },
            update: {
                read: function() {
                    return !!(this.strokeAnimation && this.svgEl && qt(this.svgEl))
                },
                write: function() {
                    var t, e;
                    (e = $i(t = this.svgEl)) && t.style.setProperty("--uk-animation-stroke", e)
                },
                type: ["resize"]
            },
            methods: {
                getSvg: function() {
                    var t = this;
                    return function(t) {
                        return Di[t] ? Di[t] : Di[t] = new ae((function(e, n) {
                            t ? d(t, "data:") ? e(decodeURIComponent(t.split(",")[1])) : ue(t).then((function(t) {
                                return e(t.response)
                            }), (function() {
                                return n("SVG not found.")
                            })) : n()
                        }))
                    }(this.src).then((function(e) {
                        return function(t, e) {
                            return e && y(t, "<symbol") && (t = function(t, e) {
                                var n;
                                if (!Mi[t])
                                    for (Mi[t] = {}, Ii.lastIndex = 0; n = Ii.exec(t);) Mi[t][n[3]] = '<svg xmlns="http://www.w3.org/2000/svg"' + n[1] + "svg>";
                                return Mi[t][e]
                            }(t, e) || t), (t = Ne(t.substr(t.indexOf("<svg")))) && t.hasChildNodes() && t
                        }(e, t.icon) || ae.reject("SVG not found.")
                    }))
                },
                applyAttributes: function(t) {
                    var e = this;
                    for (var n in this.$options.props) this[n] && y(this.include, n) && ot(t, n, this[n]);
                    for (var i in this.attributes) {
                        var r = this.attributes[i].split(":", 2);
                        ot(t, r[0], r[1])
                    }
                    this.id || at(t, "id");
                    var o = ["width", "height"],
                        s = [this.width, this.height];
                    s.some((function(t) {
                        return t
                    })) || (s = o.map((function(e) {
                        return ot(t, e)
                    })));
                    var a = ot(t, "viewBox");
                    a && !s.some((function(t) {
                        return t
                    })) && (s = a.split(" ").slice(2)), s.forEach((function(n, i) {
                        (n = (0 | n) * e.ratio) && ot(t, o[i], n), n && !s[1 ^ i] && at(t, o[1 ^ i])
                    })), ot(t, "data-svg", this.icon || this.src)
                }
            }
        },
        Di = {},
        Ii = /<symbol([^]*?id=(['"])(.+?)\2[^]*?<\/)symbol>/g,
        Mi = {};

    function $i(t) {
        return Math.ceil(Math.max.apply(Math, [0].concat(De("[stroke]", t).map((function(t) {
            try {
                return t.getTotalLength()
            } catch (t) {
                return 0
            }
        })))))
    }

    function Bi(t, e) {
        return ot(t, "data-svg") === ot(e, "data-svg")
    }
    var Oi = {
            spinner: '<svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" cx="15" cy="15" r="14"/></svg>',
            totop: '<svg width="18" height="10" viewBox="0 0 18 10" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 9 9 1 17 9 "/></svg>',
            marker: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="9" y="4" width="1" height="11"/><rect x="4" y="9" width="11" height="1"/></svg>',
            "close-icon": '<svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"/><line fill="none" stroke="#000" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"/></svg>',
            "close-large": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.4" x1="1" y1="1" x2="19" y2="19"/><line fill="none" stroke="#000" stroke-width="1.4" x1="19" y1="1" x2="1" y2="19"/></svg>',
            "navbar-toggle-icon": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect y="9" width="20" height="2"/><rect y="3" width="20" height="2"/><rect y="15" width="20" height="2"/></svg>',
            "overlay-icon": '<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><rect x="19" y="0" width="1" height="40"/><rect x="0" y="19" width="40" height="1"/></svg>',
            "pagination-next": '<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 1 6 6 1 11"/></svg>',
            "pagination-previous": '<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="6 1 1 6 6 11"/></svg>',
            "search-icon": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"/></svg>',
            "search-large": '<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.8" cx="17.5" cy="17.5" r="16.5"/><line fill="none" stroke="#000" stroke-width="1.8" x1="38" y1="39" x2="29" y2="30"/></svg>',
            "search-navbar": '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10.5" cy="10.5" r="9.5"/><line fill="none" stroke="#000" stroke-width="1.1" x1="23" y1="23" x2="17" y2="17"/></svg>',
            "slidenav-next": '<svg width="14px" height="24px" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="1.225,23 12.775,12 1.225,1 "/></svg>',
            "slidenav-next-large": '<svg width="25px" height="40px" viewBox="0 0 25 40" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="2" points="4.002,38.547 22.527,20.024 4,1.5 "/></svg>',
            "slidenav-previous": '<svg width="14px" height="24px" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="12.775,1 1.225,12 12.775,23 "/></svg>',
            "slidenav-previous-large": '<svg width="25px" height="40px" viewBox="0 0 25 40" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="2" points="20.527,1.5 2,20.024 20.525,38.547 "/></svg>'
        },
        ji = {
            install: function(t) {
                t.icon.add = function(e, n) {
                    var i, r = $(e) ? ((i = {})[e] = n, i) : e;
                    K(r, (function(t, e) {
                        Oi[e] = t, delete Ri[e]
                    })), t._initialized && Ae(document.body, (function(e) {
                        return K(t.getComponents(e), (function(t) {
                            t.$options.isIcon && t.icon in r && t.$reset()
                        }))
                    }))
                }
            },
            extends: Ni,
            args: "icon",
            props: ["icon"],
            data: {
                include: ["focusable"]
            },
            isIcon: !0,
            beforeConnect: function() {
                Me(this.$el, "uk-icon")
            },
            methods: {
                getSvg: function() {
                    var t = function(t) {
                        return Oi[t] ? (Ri[t] || (Ri[t] = Ne((Oi[function(t) {
                            return ut ? Q(Q(t, "left", "right"), "previous", "next") : t
                        }(t)] || Oi[t]).trim())), Ri[t].cloneNode(!0)) : null
                    }(this.icon);
                    return t ? ae.resolve(t) : ae.reject("Icon not found.")
                }
            }
        },
        Pi = {
            args: !1,
            extends: ji,
            data: function(t) {
                return {
                    icon: o(t.constructor.options.name)
                }
            },
            beforeConnect: function() {
                Me(this.$el, this.$name)
            }
        },
        Hi = {
            extends: Pi,
            beforeConnect: function() {
                Me(this.$el, "uk-slidenav")
            },
            computed: {
                icon: function(t, e) {
                    var n = t.icon;
                    return je(e, "uk-slidenav-large") ? n + "-large" : n
                }
            }
        },
        zi = {
            extends: Pi,
            computed: {
                icon: function(t, e) {
                    var n = t.icon;
                    return je(e, "uk-search-icon") && Ut(e, ".uk-search-large").length ? "search-large" : Ut(e, ".uk-search-navbar").length ? "search-navbar" : n
                }
            }
        },
        qi = {
            extends: Pi,
            computed: {
                icon: function() {
                    return "close-" + (je(this.$el, "uk-close-large") ? "large" : "icon")
                }
            }
        },
        Fi = {
            extends: Pi,
            connected: function() {
                var t = this;
                this.svg.then((function(e) {
                    return 1 !== t.ratio && Re(Ne("circle", e), "strokeWidth", 1 / t.ratio)
                }), et)
            }
        },
        Ri = {},
        Wi = {
            args: "dataSrc",
            props: {
                dataSrc: String,
                dataSrcset: Boolean,
                sizes: String,
                width: Number,
                height: Number,
                offsetTop: String,
                offsetLeft: String,
                target: String
            },
            data: {
                dataSrc: "",
                dataSrcset: !1,
                sizes: !1,
                width: !1,
                height: !1,
                offsetTop: "50vh",
                offsetLeft: 0,
                target: !1
            },
            computed: {
                cacheKey: function(t) {
                    return this.$name + "." + t.dataSrc
                },
                width: function(t) {
                    return t.width || t.dataWidth
                },
                height: function(t) {
                    return t.height || t.dataHeight
                },
                sizes: function(t) {
                    return t.sizes || t.dataSizes
                },
                isImg: function(t, e) {
                    return Ki(e)
                },
                target: {
                    get: function(t) {
                        return [this.$el].concat(Ct(t.target, this.$el))
                    },
                    watch: function() {
                        this.observe()
                    }
                },
                offsetTop: function(t) {
                    return wn(t.offsetTop, "height")
                },
                offsetLeft: function(t) {
                    return wn(t.offsetLeft, "width")
                }
            },
            connected: function() {
                Ji[this.cacheKey] ? Vi(this.$el, Ji[this.cacheKey] || this.dataSrc, this.dataSrcset, this.sizes) : this.isImg && this.width && this.height && Vi(this.$el, function(t, e, n) {
                    var i;
                    return n && (t = (i = rt.ratio({
                        width: t,
                        height: e
                    }, "width", wn(Zi(n)))).width, e = i.height), 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="' + t + '" height="' + e + '"></svg>'
                }(this.width, this.height, this.sizes)), this.observer = new Kn(this.load, {
                    rootMargin: this.offsetTop + "px " + this.offsetLeft + "px"
                }), requestAnimationFrame(this.observe)
            },
            disconnected: function() {
                this.observer.disconnect()
            },
            update: {
                read: function(t) {
                    var e = this,
                        n = t.image;
                    if (n || "complete" !== document.readyState || this.load(this.observer.takeRecords()), this.isImg) return !1;
                    n && n.then((function(t) {
                        return t && "" !== t.currentSrc && Vi(e.$el, Gi(t))
                    }))
                },
                write: function(t) {
                    var e, n, i, r;
                    this.dataSrcset && 1 !== window.devicePixelRatio && (!(e = Re(this.$el, "backgroundSize")).match(/^(auto\s?)+$/) && q(e) !== t.bgSize || (t.bgSize = (n = this.dataSrcset, i = wn(Zi(this.sizes)), (r = (n.match(Xi) || []).map(q).sort((function(t, e) {
                        return t - e
                    }))).filter((function(t) {
                        return i <= t
                    }))[0] || r.pop() || ""), Re(this.$el, "backgroundSize", t.bgSize + "px")))
                },
                events: ["resize"]
            },
            methods: {
                load: function(t) {
                    var e = this;
                    t.some((function(t) {
                        return P(t.isIntersecting) || t.isIntersecting
                    })) && (this._data.image = de(this.dataSrc, this.dataSrcset, this.sizes).then((function(t) {
                        return Vi(e.$el, Gi(t), t.srcset, t.sizes), Ji[e.cacheKey] = Gi(t), t
                    }), et), this.observer.disconnect())
                },
                observe: function() {
                    var t = this;
                    this._connected && !this._data.image && this.target.forEach((function(e) {
                        return t.observer.observe(e)
                    }))
                }
            }
        };

    function Vi(t, e, n, i) {
        Ki(t) ? (i && (t.sizes = i), n && (t.srcset = n), e && (t.src = e)) : e && !y(t.style.backgroundImage, e) && (Re(t, "backgroundImage", "url(" + Pt(e) + ")"), Kt(t, Gt("load", !1)))
    }
    var Ui = /\s*(.*?)\s*(\w+|calc\(.*?\))\s*(?:,|$)/g;

    function Zi(t) {
        var e, n;
        for (Ui.lastIndex = 0; e = Ui.exec(t);)
            if (!e[1] || window.matchMedia(e[1]).matches) {
                e = d(n = e[2], "calc") ? n.substring(5, n.length - 1).replace(Qi, (function(t) {
                    return wn(t)
                })).replace(/ /g, "").match(Yi).reduce((function(t, e) {
                    return t + +e
                }), 0) : n;
                break
            }
        return e || "100vw"
    }
    var Qi = /\d+(?:\w+|%)/g,
        Yi = /[+-]?(\d+)/g,
        Xi = /\s+\d+w\s*(?:,|$)/g;

    function Ki(t) {
        return "IMG" === t.tagName
    }

    function Gi(t) {
        return t.currentSrc || t.src
    }
    var Ji, tr = "__test__";
    try {
        (Ji = window.sessionStorage || {})[tr] = 1, delete Ji[tr]
    } catch (t) {
        Ji = {}
    }
    var er = {
            props: {
                media: Boolean
            },
            data: {
                media: !1
            },
            computed: {
                matchMedia: function() {
                    var t = function(t) {
                        if ($(t))
                            if ("@" === t[0]) t = q(Ze("breakpoint-" + t.substr(1)));
                            else if (isNaN(t)) return t;
                        return !(!t || isNaN(t)) && "(min-width: " + t + "px)"
                    }(this.media);
                    return !t || window.matchMedia(t).matches
                }
            }
        },
        nr = {
            props: {
                container: Boolean
            },
            data: {
                container: !0
            },
            computed: {
                container: function(t) {
                    var e = t.container;
                    return !0 === e && this.$container || e && Ne(e)
                }
            }
        },
        ir = [],
        rr = {
            mixins: [si, nr, ai],
            props: {
                selPanel: String,
                selClose: String,
                escClose: Boolean,
                bgClose: Boolean,
                stack: Boolean
            },
            data: {
                cls: "uk-open",
                escClose: !0,
                bgClose: !0,
                overlay: !0,
                stack: !1
            },
            computed: {
                panel: function(t, e) {
                    return Ne(t.selPanel, e)
                },
                transitionElement: function() {
                    return this.panel
                },
                bgClose: function(t) {
                    return t.bgClose && this.panel
                }
            },
            beforeDisconnect: function() {
                this.isToggled() && this.toggleElement(this.$el, !1, !1)
            },
            events: [{
                name: "click",
                delegate: function() {
                    return this.selClose
                },
                handler: function(t) {
                    t.preventDefault(), this.hide()
                }
            }, {
                name: "toggle",
                self: !0,
                handler: function(t) {
                    t.defaultPrevented || (t.preventDefault(), this.isToggled() === y(ir, this) && this.toggle())
                }
            }, {
                name: "beforeshow",
                self: !0,
                handler: function(t) {
                    if (y(ir, this)) return !1;
                    !this.stack && ir.length ? (ae.all(ir.map((function(t) {
                        return t.hide()
                    }))).then(this.show), t.preventDefault()) : ir.push(this)
                }
            }, {
                name: "show",
                self: !0,
                handler: function() {
                    var t = this;
                    un(window) - un(document) && this.overlay && Re(document.body, "overflowY", "scroll"), this.stack && Re(this.$el, "zIndex", Re(this.$el, "zIndex") + ir.length), Me(document.documentElement, this.clsPage), this.bgClose && Xt(this.$el, "hide", Qt(document, gt, (function(e) {
                        var n = e.target;
                        X(ir) !== t || t.overlay && !Vt(n, t.$el) || Vt(n, t.panel) || Xt(document, mt + " " + bt + " scroll", (function(e) {
                            e.defaultPrevented || e.type !== mt || n !== e.target || t.hide()
                        }), !0)
                    })), {
                        self: !0
                    }), this.escClose && Xt(this.$el, "hide", Qt(document, "keydown", (function(e) {
                        27 === e.keyCode && X(ir) === t && (e.preventDefault(), t.hide())
                    })), {
                        self: !0
                    })
                }
            }, {
                name: "hidden",
                self: !0,
                handler: function() {
                    var t = this;
                    ir.splice(ir.indexOf(this), 1), ir.length || Re(document.body, "overflowY", ""), Re(this.$el, "zIndex", ""), ir.some((function(e) {
                        return e.clsPage === t.clsPage
                    })) || $e(document.documentElement, this.clsPage)
                }
            }],
            methods: {
                toggle: function() {
                    return this.isToggled() ? this.hide() : this.show()
                },
                show: function() {
                    var t = this;
                    return this.container && this.$el.parentNode !== this.container ? (we(this.container, this.$el), new ae((function(e) {
                        return requestAnimationFrame((function() {
                            return t.show().then(e)
                        }))
                    }))) : this.toggleElement(this.$el, !0, or(this))
                },
                hide: function() {
                    return this.toggleElement(this.$el, !1, or(this))
                }
            }
        };

    function or(t) {
        var e = t.transitionElement,
            n = t._toggle;
        return function(t, i) {
            return new ae((function(r, o) {
                return Xt(t, "show hide", (function() {
                    t._reject && t._reject(), t._reject = o, n(t, i);
                    var s = Xt(e, "transitionstart", (function() {
                            Xt(e, "transitionend transitioncancel", r, {
                                self: !0
                            }), clearTimeout(a)
                        }), {
                            self: !0
                        }),
                        a = setTimeout((function() {
                            s(), r()
                        }), U(Re(e, "transitionDuration")))
                }))
            }))
        }
    }
    var sr = {
            mixins: [si, ki],
            props: {
                dropdown: String,
                mode: "list",
                align: String,
                offset: Number,
                boundary: Boolean,
                boundaryAlign: Boolean,
                clsDrop: String,
                delayShow: Number,
                delayHide: Number,
                dropbar: Boolean,
                dropbarMode: String,
                dropbarAnchor: Boolean,
                duration: Number
            },
            data: {
                dropdown: ".uk-navbar-nav > li",
                align: ut ? "right" : "left",
                clsDrop: "uk-navbar-dropdown",
                mode: void 0,
                offset: void 0,
                delayShow: void 0,
                delayHide: void 0,
                boundaryAlign: void 0,
                flip: "x",
                boundary: !0,
                dropbar: !1,
                dropbarMode: "slide",
                dropbarAnchor: !1,
                duration: 200,
                forceHeight: !0,
                selMinHeight: ".uk-navbar-nav > li > a, .uk-navbar-item, .uk-navbar-toggle"
            },
            computed: {
                boundary: function(t, e) {
                    var n = t.boundary;
                    return !0 === n || t.boundaryAlign ? e : n
                },
                dropbarAnchor: function(t, e) {
                    return xt(t.dropbarAnchor, e)
                },
                pos: function(t) {
                    return "bottom-" + t.align
                },
                dropbar: {
                    get: function(t) {
                        var e = t.dropbar;
                        return e ? (e = this._dropbar || xt(e, this.$el) || Ne("+ .uk-navbar-dropbar", this.$el)) || (this._dropbar = Ne("<div></div>")) : null
                    },
                    watch: function(t) {
                        Me(t, "uk-navbar-dropbar")
                    },
                    immediate: !0
                },
                dropdowns: {
                    get: function(t, e) {
                        return De(t.dropdown + " ." + t.clsDrop, e)
                    },
                    watch: function(t) {
                        var e = this;
                        this.$create("drop", t.filter((function(t) {
                            return !e.getDropdown(t)
                        })), Y({}, this.$props, {
                            boundary: this.boundary,
                            pos: this.pos,
                            offset: this.dropbar || this.offset
                        }))
                    },
                    immediate: !0
                }
            },
            disconnected: function() {
                this.dropbar && Ce(this.dropbar), delete this._dropbar
            },
            events: [{
                name: "mouseover",
                delegate: function() {
                    return this.dropdown
                },
                handler: function(t) {
                    var e = t.current,
                        n = this.getActive();
                    n && n.toggle && !Vt(n.toggle.$el, e) && !n.tracker.movesTo(n.$el) && n.hide(!1)
                }
            }, {
                name: "mouseleave",
                el: function() {
                    return this.dropbar
                },
                handler: function() {
                    var t = this.getActive();
                    t && !this.dropdowns.some((function(t) {
                        return Mt(t, ":hover")
                    })) && t.hide()
                }
            }, {
                name: "beforeshow",
                capture: !0,
                filter: function() {
                    return this.dropbar
                },
                handler: function() {
                    this.dropbar.parentNode || be(this.dropbarAnchor || this.$el, this.dropbar)
                }
            }, {
                name: "show",
                capture: !0,
                filter: function() {
                    return this.dropbar
                },
                handler: function(t, e) {
                    var n = e.$el,
                        i = e.dir;
                    Pe(this.dropbar, "uk-navbar-dropbar-slide", "slide" === this.dropbarMode || Ut(this.$el).some((function(t) {
                        return "static" !== Re(t, "position")
                    }))), this.clsDrop && Me(n, this.clsDrop + "-dropbar"), "bottom" === i && this.transitionTo(n.offsetHeight + q(Re(n, "marginTop")) + q(Re(n, "marginBottom")), n)
                }
            }, {
                name: "beforehide",
                filter: function() {
                    return this.dropbar
                },
                handler: function(t, e) {
                    var n = e.$el,
                        i = this.getActive();
                    Mt(this.dropbar, ":hover") && i && i.$el === n && t.preventDefault()
                }
            }, {
                name: "hide",
                filter: function() {
                    return this.dropbar
                },
                handler: function(t, e) {
                    var n = e.$el,
                        i = this.getActive();
                    (!i || i && i.$el === n) && this.transitionTo(0)
                }
            }],
            methods: {
                getActive: function() {
                    var t = this.dropdowns.map(this.getDropdown).filter((function(t) {
                        return t && t.isActive()
                    }))[0];
                    return t && y(t.mode, "hover") && Vt(t.toggle.$el, this.$el) && t
                },
                transitionTo: function(t, e) {
                    var n = this,
                        i = this.dropbar,
                        r = qt(i) ? hn(i) : 0;
                    return Re(e = r < t && e, "clip", "rect(0," + e.offsetWidth + "px," + r + "px,0)"), hn(i, r), Ge.cancel([e, i]), ae.all([Ge.start(i, {
                        height: t
                    }, this.duration), Ge.start(e, {
                        clip: "rect(0," + e.offsetWidth + "px," + t + "px,0)"
                    }, this.duration)]).catch(et).then((function() {
                        Re(e, {
                            clip: ""
                        }), n.$update(i)
                    }))
                },
                getDropdown: function(t) {
                    return this.$getComponent(t, "drop") || this.$getComponent(t, "dropdown")
                }
            }
        },
        ar = {
            mixins: [rr],
            args: "mode",
            props: {
                mode: String,
                flip: Boolean,
                overlay: Boolean
            },
            data: {
                mode: "slide",
                flip: !1,
                overlay: !1,
                clsPage: "uk-offcanvas-page",
                clsContainer: "uk-offcanvas-container",
                selPanel: ".uk-offcanvas-bar",
                clsFlip: "uk-offcanvas-flip",
                clsContainerAnimation: "uk-offcanvas-container-animation",
                clsSidebarAnimation: "uk-offcanvas-bar-animation",
                clsMode: "uk-offcanvas",
                clsOverlay: "uk-offcanvas-overlay",
                selClose: ".uk-offcanvas-close",
                container: !1
            },
            computed: {
                clsFlip: function(t) {
                    return t.flip ? t.clsFlip : ""
                },
                clsOverlay: function(t) {
                    return t.overlay ? t.clsOverlay : ""
                },
                clsMode: function(t) {
                    return t.clsMode + "-" + t.mode
                },
                clsSidebarAnimation: function(t) {
                    var e = t.mode;
                    return "none" === e || "reveal" === e ? "" : t.clsSidebarAnimation
                },
                clsContainerAnimation: function(t) {
                    var e = t.mode;
                    return "push" !== e && "reveal" !== e ? "" : t.clsContainerAnimation
                },
                transitionElement: function(t) {
                    return "reveal" === t.mode ? this.panel.parentNode : this.panel
                }
            },
            events: [{
                name: "click",
                delegate: function() {
                    return 'a[href^="#"]'
                },
                handler: function(t) {
                    var e = t.current.hash;
                    !t.defaultPrevented && e && Ne(e, document.body) && this.hide()
                }
            }, {
                name: "touchstart",
                passive: !0,
                el: function() {
                    return this.panel
                },
                handler: function(t) {
                    var e = t.targetTouches;
                    1 === e.length && (this.clientY = e[0].clientY)
                }
            }, {
                name: "touchmove",
                self: !0,
                passive: !1,
                filter: function() {
                    return this.overlay
                },
                handler: function(t) {
                    t.cancelable && t.preventDefault()
                }
            }, {
                name: "touchmove",
                passive: !1,
                el: function() {
                    return this.panel
                },
                handler: function(t) {
                    var e, n, i, r, o;
                    1 === t.targetTouches.length && (e = event.targetTouches[0].clientY - this.clientY, i = (n = this.panel).scrollTop, ((r = n.scrollHeight) <= (o = n.clientHeight) || 0 === i && 0 < e || r - i <= o && e < 0) && t.cancelable && t.preventDefault())
                }
            }, {
                name: "show",
                self: !0,
                handler: function() {
                    "reveal" !== this.mode || je(this.panel.parentNode, this.clsMode) || (_e(this.panel, "<div>"), Me(this.panel.parentNode, this.clsMode)), Re(document.documentElement, "overflowY", this.overlay ? "hidden" : ""), Me(document.body, this.clsContainer, this.clsFlip), Re(document.body, "touch-action", "pan-y pinch-zoom"), Re(this.$el, "display", "block"), Me(this.$el, this.clsOverlay), Me(this.panel, this.clsSidebarAnimation, "reveal" !== this.mode ? this.clsMode : ""), hn(document.body), Me(document.body, this.clsContainerAnimation), this.clsContainerAnimation && (lr().content += ",user-scalable=0")
                }
            }, {
                name: "hide",
                self: !0,
                handler: function() {
                    $e(document.body, this.clsContainerAnimation), Re(document.body, "touch-action", "")
                }
            }, {
                name: "hidden",
                self: !0,
                handler: function() {
                    var t;
                    this.clsContainerAnimation && ((t = lr()).content = t.content.replace(/,user-scalable=0$/, "")), "reveal" === this.mode && Ee(this.panel), $e(this.panel, this.clsSidebarAnimation, this.clsMode), $e(this.$el, this.clsOverlay), Re(this.$el, "display", ""), $e(document.body, this.clsContainer, this.clsFlip), Re(document.documentElement, "overflowY", "")
                }
            }, {
                name: "swipeLeft swipeRight",
                handler: function(t) {
                    this.isToggled() && p(t.type, "Left") ^ this.flip && this.hide()
                }
            }]
        };

    function lr() {
        return Ne('meta[name="viewport"]', document.head) || we(document.head, '<meta name="viewport">')
    }
    var cr = {
            args: "cls",
            props: {
                cls: String,
                target: String,
                hidden: Boolean,
                offsetTop: Number,
                offsetLeft: Number,
                repeat: Boolean,
                delay: Number
            },
            data: function() {
                return {
                    cls: !1,
                    target: !1,
                    hidden: !0,
                    offsetTop: 0,
                    offsetLeft: 0,
                    repeat: !1,
                    delay: 0,
                    inViewClass: "uk-scrollspy-inview"
                }
            },
            computed: {
                elements: {
                    get: function(t, e) {
                        var n = t.target;
                        return n ? De(n, e) : [e]
                    },
                    watch: function(t) {
                        this.hidden && Re(Wt(t, ":not(." + this.inViewClass + ")"), "visibility", "hidden")
                    },
                    immediate: !0
                }
            },
            update: [{
                read: function(t) {
                    var e = this;
                    t.update && this.elements.forEach((function(t) {
                        var n = t._ukScrollspyState;
                        (n = n || {
                            cls: lt(t, "uk-scrollspy-class") || e.cls
                        }).show = $n(t, e.offsetTop, e.offsetLeft), t._ukScrollspyState = n
                    }))
                },
                write: function(t) {
                    var e = this;
                    if (!t.update) return this.$emit(), t.update = !0;
                    this.elements.forEach((function(n) {
                        function i(t) {
                            Re(n, "visibility", !t && e.hidden ? "hidden" : ""), Pe(n, e.inViewClass, t), Pe(n, r.cls), Kt(n, t ? "inview" : "outview"), r.inview = t, e.$update(n)
                        }
                        var r = n._ukScrollspyState;
                        !r.show || r.inview || r.queued ? !r.show && r.inview && !r.queued && e.repeat && i(!1) : (r.queued = !0, t.promise = (t.promise || ae.resolve()).then((function() {
                            return new ae((function(t) {
                                return setTimeout(t, e.delay)
                            }))
                        })).then((function() {
                            i(!0), setTimeout((function() {
                                r.queued = !1, e.$emit()
                            }), 300)
                        })))
                    }))
                },
                events: ["scroll", "resize"]
            }]
        },
        hr = {
            props: {
                cls: String,
                closest: String,
                scroll: Boolean,
                overflow: Boolean,
                offset: Number
            },
            data: {
                cls: "uk-active",
                closest: !1,
                scroll: !1,
                overflow: !0,
                offset: 0
            },
            computed: {
                links: {
                    get: function(t, e) {
                        return De('a[href^="#"]', e).filter((function(t) {
                            return t.hash
                        }))
                    },
                    watch: function(t) {
                        this.scroll && this.$create("scroll", t, {
                            offset: this.offset || 0
                        })
                    },
                    immediate: !0
                },
                targets: function() {
                    return De(this.links.map((function(t) {
                        return Pt(t.hash).substr(1)
                    })).join(","))
                },
                elements: function(t) {
                    return Bt(this.links, t.closest || "*")
                }
            },
            update: [{
                read: function() {
                    var t = this,
                        e = this.targets.length;
                    if (!e || !qt(this.$el)) return !1;
                    var n = X(Pn(this.targets[0])),
                        i = n.scrollTop,
                        r = n.scrollHeight,
                        o = Hn(n),
                        s = r - sn(o).height,
                        a = !1;
                    return i === s ? a = e - 1 : (this.targets.every((function(e, n) {
                        if (ln(e, o).top - t.offset <= 0) return a = n, !0
                    })), !1 === a && this.overflow && (a = 0)), {
                        active: a
                    }
                },
                write: function(t) {
                    var e = t.active;
                    this.links.forEach((function(t) {
                        return t.blur()
                    })), $e(this.elements, this.cls), !1 !== e && Kt(this.$el, "active", [e, Me(this.elements[e], this.cls)])
                },
                events: ["scroll", "resize"]
            }]
        },
        ur = {
            mixins: [si, er],
            props: {
                top: null,
                bottom: Boolean,
                offset: String,
                animation: String,
                clsActive: String,
                clsInactive: String,
                clsFixed: String,
                clsBelow: String,
                selTarget: String,
                widthElement: Boolean,
                showOnUp: Boolean,
                targetOffset: Number
            },
            data: {
                top: 0,
                bottom: !1,
                offset: 0,
                animation: "",
                clsActive: "uk-active",
                clsInactive: "",
                clsFixed: "uk-sticky-fixed",
                clsBelow: "uk-sticky-below",
                selTarget: "",
                widthElement: !1,
                showOnUp: !1,
                targetOffset: !1
            },
            computed: {
                offset: function(t) {
                    return wn(t.offset)
                },
                selTarget: function(t, e) {
                    var n = t.selTarget;
                    return n && Ne(n, e) || e
                },
                widthElement: function(t, e) {
                    return xt(t.widthElement, e) || this.placeholder
                },
                isActive: {
                    get: function() {
                        return je(this.selTarget, this.clsActive)
                    },
                    set: function(t) {
                        t && !this.isActive ? (Oe(this.selTarget, this.clsInactive, this.clsActive), Kt(this.$el, "active")) : t || je(this.selTarget, this.clsInactive) || (Oe(this.selTarget, this.clsActive, this.clsInactive), Kt(this.$el, "inactive"))
                    }
                }
            },
            connected: function() {
                this.placeholder = Ne("+ .uk-sticky-placeholder", this.$el) || Ne('<div class="uk-sticky-placeholder"></div>'), this.isFixed = !1, this.isActive = !1
            },
            disconnected: function() {
                this.isFixed && (this.hide(), $e(this.selTarget, this.clsInactive)), Ce(this.placeholder), this.placeholder = null, this.widthElement = null
            },
            events: [{
                name: "load hashchange popstate",
                el: ct && window,
                handler: function() {
                    var t, e = this;
                    !1 !== this.targetOffset && location.hash && 0 < window.pageYOffset && (t = Ne(location.hash)) && bn.read((function() {
                        var n = sn(t).top,
                            i = sn(e.$el).top,
                            r = e.$el.offsetHeight;
                        e.isFixed && n <= i + r && i <= n + t.offsetHeight && Bn(window, n - r - (O(e.targetOffset) ? e.targetOffset : 0) - e.offset)
                    }))
                }
            }],
            update: [{
                read: function(t, e) {
                    var n = t.height;
                    this.isActive && "update" !== e && (this.hide(), n = this.$el.offsetHeight, this.show()), n = this.isActive ? n : this.$el.offsetHeight, this.topOffset = sn(this.isFixed ? this.placeholder : this.$el).top, this.bottomOffset = this.topOffset + n;
                    var i = dr("bottom", this);
                    return this.top = Math.max(q(dr("top", this)), this.topOffset) - this.offset, this.bottom = i && i - this.$el.offsetHeight, this.inactive = !this.matchMedia, {
                        lastScroll: !1,
                        height: n,
                        margins: Re(this.$el, ["marginTop", "marginBottom", "marginLeft", "marginRight"])
                    }
                },
                write: function(t) {
                    var e = this.placeholder;
                    Re(e, Y({
                        height: t.height
                    }, t.margins)), Vt(e, document) || (be(this.$el, e), ot(e, "hidden", "")), this.isActive = this.isActive
                },
                events: ["resize"]
            }, {
                read: function(t) {
                    var e = t.scroll;
                    return void 0 === e && (e = 0), this.width = sn(qt(this.widthElement) ? this.widthElement : this.$el).width, this.scroll = window.pageYOffset, {
                        dir: e <= this.scroll ? "down" : "up",
                        scroll: this.scroll,
                        visible: qt(this.$el),
                        top: cn(this.placeholder)[0]
                    }
                },
                write: function(t, e) {
                    var n = this,
                        i = t.initTimestamp;
                    void 0 === i && (i = 0);
                    var r = t.dir,
                        o = t.lastDir,
                        s = t.lastScroll,
                        a = t.scroll,
                        l = t.top,
                        c = t.visible,
                        h = performance.now();
                    if (!((t.lastScroll = a) < 0 || a === s || !c || this.disabled || this.showOnUp && "scroll" !== e || ((300 < h - i || r !== o) && (t.initScroll = a, t.initTimestamp = h), t.lastDir = r, this.showOnUp && !this.isFixed && Math.abs(t.initScroll - a) <= 30 && Math.abs(s - a) <= 10)))
                        if (this.inactive || a < this.top || this.showOnUp && (a <= this.top || "down" === r || "up" === r && !this.isFixed && a <= this.bottomOffset)) {
                            if (!this.isFixed) return void(nn.inProgress(this.$el) && a < l && (nn.cancel(this.$el), this.hide()));
                            this.isFixed = !1, this.animation && a > this.topOffset ? (nn.cancel(this.$el), nn.out(this.$el, this.animation).then((function() {
                                return n.hide()
                            }), et)) : this.hide()
                        } else this.isFixed ? this.update() : this.animation ? (nn.cancel(this.$el), this.show(), nn.in(this.$el, this.animation).catch(et)) : this.show()
                },
                events: ["resize", "scroll"]
            }],
            methods: {
                show: function() {
                    this.isFixed = !0, this.update(), ot(this.placeholder, "hidden", null)
                },
                hide: function() {
                    this.isActive = !1, $e(this.$el, this.clsFixed, this.clsBelow), Re(this.$el, {
                        position: "",
                        top: "",
                        width: ""
                    }), ot(this.placeholder, "hidden", "")
                },
                update: function() {
                    var t = 0 !== this.top || this.scroll > this.top,
                        e = Math.max(0, this.offset);
                    O(this.bottom) && this.scroll > this.bottom - this.offset && (e = this.bottom - this.scroll), Re(this.$el, {
                        position: "fixed",
                        top: e + "px",
                        width: this.width
                    }), this.isActive = t, Pe(this.$el, this.clsBelow, this.scroll > this.bottomOffset), Me(this.$el, this.clsFixed)
                }
            }
        };

    function dr(t, e) {
        var n = e.$el,
            i = e[t + "Offset"],
            r = e.$props[t];
        if (r) return $(r) && r.match(/^-?\d/) ? i + wn(r) : sn(!0 === r ? n.parentNode : xt(r, n)).bottom
    }
    var fr, pr, gr, vr = {
            mixins: [ai],
            args: "connect",
            props: {
                connect: String,
                toggle: String,
                active: Number,
                swiping: Boolean
            },
            data: {
                connect: "~.uk-switcher",
                toggle: "> * > :first-child",
                active: 0,
                swiping: !0,
                cls: "uk-active",
                clsContainer: "uk-switcher",
                attrItem: "uk-switcher-item"
            },
            computed: {
                connects: {
                    get: function(t, e) {
                        return Ct(t.connect, e)
                    },
                    watch: function(t) {
                        var e = this;
                        t.forEach((function(t) {
                            return e.updateAria(t.children)
                        })), this.swiping && Re(t, "touch-action", "pan-y pinch-zoom")
                    },
                    immediate: !0
                },
                toggles: {
                    get: function(t, e) {
                        return De(t.toggle, e).filter((function(t) {
                            return !Mt(t, ".uk-disabled *, .uk-disabled, [disabled]")
                        }))
                    },
                    watch: function(t) {
                        var e = this.index();
                        this.show(~e && e || t[this.active] || t[0])
                    },
                    immediate: !0
                },
                children: function() {
                    var t = this;
                    return Zt(this.$el).filter((function(e) {
                        return t.toggles.some((function(t) {
                            return Vt(t, e)
                        }))
                    }))
                }
            },
            events: [{
                name: "click",
                delegate: function() {
                    return this.toggle
                },
                handler: function(t) {
                    y(this.toggles, t.current) && (t.preventDefault(), this.show(t.current))
                }
            }, {
                name: "click",
                el: function() {
                    return this.connects
                },
                delegate: function() {
                    return "[" + this.attrItem + "],[data-" + this.attrItem + "]"
                },
                handler: function(t) {
                    t.preventDefault(), this.show(lt(t.current, this.attrItem))
                }
            }, {
                name: "swipeRight swipeLeft",
                filter: function() {
                    return this.swiping
                },
                el: function() {
                    return this.connects
                },
                handler: function(t) {
                    this.show(p(t.type, "Left") ? "next" : "previous")
                }
            }],
            methods: {
                index: function() {
                    var t = this;
                    return x(this.children, (function(e) {
                        return je(e, t.cls)
                    }))
                },
                show: function(t) {
                    var e = this,
                        n = this.index(),
                        i = ge(t, this.toggles, n);
                    this.children.forEach((function(t, n) {
                        Pe(t, e.cls, i === n), ot(e.toggles[n], "aria-expanded", i === n)
                    })), this.connects.forEach((function(t) {
                        var r = t.children;
                        return e.toggleElement(R(r).filter((function(t, n) {
                            return n !== i && e.isToggled(t)
                        })), !1, 0 <= n).then((function() {
                            return e.toggleElement(r[i], !0, 0 <= n)
                        }))
                    }))
                }
            }
        },
        mr = {
            mixins: [si],
            extends: vr,
            props: {
                media: Boolean
            },
            data: {
                media: 960,
                attrItem: "uk-tab-item"
            },
            connected: function() {
                var t = je(this.$el, "uk-tab-left") ? "uk-tab-left" : !!je(this.$el, "uk-tab-right") && "uk-tab-right";
                t && this.$create("toggle", this.$el, {
                    cls: t,
                    mode: "media",
                    media: this.media
                })
            }
        },
        wr = {
            mixins: [er, ai],
            args: "target",
            props: {
                href: String,
                target: null,
                mode: "list",
                queued: Boolean
            },
            data: {
                href: !1,
                target: !1,
                mode: "click",
                queued: !0
            },
            computed: {
                target: {
                    get: function(t, e) {
                        var n = t.target;
                        return (n = Ct(n || t.href, e)).length && n || [e]
                    },
                    watch: function() {
                        Kt(this.target, "updatearia", [this])
                    },
                    immediate: !0
                }
            },
            events: [{
                name: wt + " " + yt,
                filter: function() {
                    return y(this.mode, "hover")
                },
                handler: function(t) {
                    re(t) || this.toggle("toggle" + (t.type === wt ? "show" : "hide"))
                }
            }, {
                name: "click",
                filter: function() {
                    return y(this.mode, "click") || pt && y(this.mode, "hover")
                },
                handler: function(t) {
                    var e;
                    (Bt(t.target, 'a[href="#"], a[href=""]') || (e = Bt(t.target, "a[href]")) && (this.cls && !je(this.target, this.cls.split(" ")[0]) || !qt(this.target) || e.hash && Mt(this.target, e.hash))) && t.preventDefault(), this.toggle()
                }
            }],
            update: {
                read: function() {
                    return !(!y(this.mode, "media") || !this.media) && {
                        match: this.matchMedia
                    }
                },
                write: function(t) {
                    var e = t.match,
                        n = this.isToggled(this.target);
                    (e ? !n : n) && this.toggle()
                },
                events: ["resize"]
            },
            methods: {
                toggle: function(t) {
                    var e, n = this;
                    Kt(this.target, t || "toggle", [this]) && (this.queued ? (e = this.target.filter(this.isToggled), this.toggleElement(e, !1).then((function() {
                        return n.toggleElement(n.target.filter((function(t) {
                            return !y(e, t)
                        })), !0)
                    }))) : this.toggleElement(this.target))
                }
            }
        };
    K(Object.freeze({
        __proto__: null,
        Accordion: ci,
        Alert: di,
        Cover: pi,
        Drop: vi,
        Dropdown: vi,
        FormCustom: mi,
        Gif: wi,
        Grid: _i,
        HeightMatch: Ei,
        HeightViewport: Si,
        Icon: ji,
        Img: Wi,
        Leader: {
            mixins: [si, er],
            props: {
                fill: String
            },
            data: {
                fill: "",
                clsWrapper: "uk-leader-fill",
                clsHide: "uk-leader-hide",
                attrFill: "data-fill"
            },
            computed: {
                fill: function(t) {
                    return t.fill || Ze("leader-fill-content")
                }
            },
            connected: function() {
                var t = ke(this.$el, '<span class="' + this.clsWrapper + '">');
                this.wrapper = t[0]
            },
            disconnected: function() {
                Ee(this.wrapper.childNodes)
            },
            update: {
                read: function(t) {
                    var e = t.changed,
                        n = t.width,
                        i = n;
                    return {
                        width: n = Math.floor(this.$el.offsetWidth / 2),
                        fill: this.fill,
                        changed: e || i !== n,
                        hide: !this.matchMedia
                    }
                },
                write: function(t) {
                    Pe(this.wrapper, this.clsHide, t.hide), t.changed && (t.changed = !1, ot(this.wrapper, this.attrFill, new Array(t.width).join(t.fill)))
                },
                events: ["resize"]
            }
        },
        Margin: yi,
        Modal: {
            install: function(t) {
                var e = t.modal;

                function n(t, n, i, r) {
                    n = Y({
                        bgClose: !1,
                        escClose: !0,
                        labels: e.labels
                    }, n);
                    var o = e.dialog(t(n), n),
                        s = new se,
                        a = !1;
                    return Qt(o.$el, "submit", "form", (function(t) {
                        t.preventDefault(), s.resolve(r && r(o)), a = !0, o.hide()
                    })), Qt(o.$el, "hide", (function() {
                        return !a && i(s)
                    })), s.promise.dialog = o, s.promise
                }
                e.dialog = function(t, n) {
                    var i = e('<div class="uk-modal"> <div class="uk-modal-dialog">' + t + "</div> </div>", n);
                    return i.show(), Qt(i.$el, "hidden", (function() {
                        return ae.resolve().then((function() {
                            return i.$destroy(!0)
                        }))
                    }), {
                        self: !0
                    }), i
                }, e.alert = function(t, e) {
                    return n((function(e) {
                        var n = e.labels;
                        return '<div class="uk-modal-body">' + ($(t) ? t : me(t)) + '</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-primary uk-modal-close" autofocus>' + n.ok + "</button> </div>"
                    }), e, (function(t) {
                        return t.resolve()
                    }))
                }, e.confirm = function(t, e) {
                    return n((function(e) {
                        var n = e.labels;
                        return '<form> <div class="uk-modal-body">' + ($(t) ? t : me(t)) + '</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">' + n.cancel + '</button> <button class="uk-button uk-button-primary" autofocus>' + n.ok + "</button> </div> </form>"
                    }), e, (function(t) {
                        return t.reject()
                    }))
                }, e.prompt = function(t, e, i) {
                    return n((function(n) {
                        var i = n.labels;
                        return '<form class="uk-form-stacked"> <div class="uk-modal-body"> <label>' + ($(t) ? t : me(t)) + '</label> <input class="uk-input" value="' + (e || "") + '" autofocus> </div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">' + i.cancel + '</button> <button class="uk-button uk-button-primary">' + i.ok + "</button> </div> </form>"
                    }), i, (function(t) {
                        return t.resolve(null)
                    }), (function(t) {
                        return Ne("input", t.$el).value
                    }))
                }, e.labels = {
                    ok: "Ok",
                    cancel: "Cancel"
                }
            },
            mixins: [rr],
            data: {
                clsPage: "uk-modal-page",
                selPanel: ".uk-modal-dialog",
                selClose: ".uk-modal-close, .uk-modal-close-default, .uk-modal-close-outside, .uk-modal-close-full"
            },
            events: [{
                name: "show",
                self: !0,
                handler: function() {
                    je(this.panel, "uk-margin-auto-vertical") ? Me(this.$el, "uk-flex") : Re(this.$el, "display", "block"), hn(this.$el)
                }
            }, {
                name: "hidden",
                self: !0,
                handler: function() {
                    Re(this.$el, "display", ""), $e(this.$el, "uk-flex")
                }
            }]
        },
        Nav: {
            extends: ci,
            data: {
                targets: "> .uk-parent",
                toggle: "> a",
                content: "> ul"
            }
        },
        Navbar: sr,
        Offcanvas: ar,
        OverflowAuto: {
            mixins: [si],
            props: {
                selContainer: String,
                selContent: String
            },
            data: {
                selContainer: ".uk-modal",
                selContent: ".uk-modal-dialog"
            },
            computed: {
                container: function(t, e) {
                    return Bt(e, t.selContainer)
                },
                content: function(t, e) {
                    return Bt(e, t.selContent)
                }
            },
            connected: function() {
                Re(this.$el, "minHeight", 150)
            },
            update: {
                read: function() {
                    return !(!this.content || !this.container) && {
                        current: q(Re(this.$el, "maxHeight")),
                        max: Math.max(150, hn(this.container) - (sn(this.content).height - hn(this.$el)))
                    }
                },
                write: function(t) {
                    var e = t.current,
                        n = t.max;
                    Re(this.$el, "maxHeight", n), Math.round(e) !== Math.round(n) && Kt(this.$el, "resize")
                },
                events: ["resize"]
            }
        },
        Responsive: {
            props: ["width", "height"],
            connected: function() {
                Me(this.$el, "uk-responsive-width")
            },
            update: {
                read: function() {
                    return !!(qt(this.$el) && this.width && this.height) && {
                        width: un(this.$el.parentNode),
                        height: this.height
                    }
                },
                write: function(t) {
                    hn(this.$el, rt.contain({
                        height: this.height,
                        width: this.width
                    }, t).height)
                },
                events: ["resize"]
            }
        },
        Scroll: {
            props: {
                offset: Number
            },
            data: {
                offset: 0
            },
            methods: {
                scrollTo: function(t) {
                    var e = this;
                    t = t && Ne(t) || document.body, Kt(this.$el, "beforescroll", [this, t]) && On(t, {
                        offset: this.offset
                    }).then((function() {
                        return Kt(e.$el, "scrolled", [e, t])
                    }))
                }
            },
            events: {
                click: function(t) {
                    t.defaultPrevented || (t.preventDefault(), this.scrollTo(Pt(decodeURIComponent(this.$el.hash)).substr(1)))
                }
            }
        },
        Scrollspy: cr,
        ScrollspyNav: hr,
        Sticky: ur,
        Svg: Ni,
        Switcher: vr,
        Tab: mr,
        Toggle: wr,
        Video: fi,
        Close: qi,
        Spinner: Fi,
        SlidenavNext: Hi,
        SlidenavPrevious: Hi,
        SearchIcon: zi,
        Marker: Pi,
        NavbarToggleIcon: Pi,
        OverlayIcon: Pi,
        PaginationNext: Pi,
        PaginationPrevious: Pi,
        Totop: Pi
    }), (function(t, e) {
        return Jn.component(e, t)
    })), Jn.use((function(t) {
        ct && fe((function() {
            var e;
            t.update(), Qt(window, "load resize", (function() {
                return t.update(null, "resize")
            })), Qt(document, "loadedmetadata load", (function(e) {
                return t.update(e.target, "resize")
            }), !0), Qt(window, "scroll", (function(n) {
                e || (e = !0, bn.write((function() {
                    return e = !1
                })), t.update(null, n.type))
            }), {
                passive: !0,
                capture: !0
            });
            var n, i = 0;
            Qt(document, "animationstart", (function(t) {
                var e = t.target;
                (Re(e, "animationName") || "").match(/^uk-.*(left|right)/) && (i++, Re(document.body, "overflowX", "hidden"), setTimeout((function() {
                    --i || Re(document.body, "overflowX", "")
                }), U(Re(e, "animationDuration")) + 100))
            }), !0), Qt(document, gt, (function(t) {
                var e, i;
                n && n(), re(t) && (e = oe(t), i = "tagName" in t.target ? t.target : t.target.parentNode, n = Xt(document, mt + " " + bt, (function(t) {
                    var n = oe(t),
                        r = n.x,
                        o = n.y;
                    (i && r && 100 < Math.abs(e.x - r) || o && 100 < Math.abs(e.y - o)) && setTimeout((function() {
                        var t, n, s, a;
                        Kt(i, "swipe"), Kt(i, "swipe" + (t = e.x, n = e.y, s = r, a = o, Math.abs(t - s) >= Math.abs(n - a) ? 0 < t - s ? "Left" : "Right" : 0 < n - a ? "Up" : "Down"))
                    }))
                })))
            }), {
                passive: !0
            })
        }))
    })), pr = (fr = Jn).connect, gr = fr.disconnect, ct && window.MutationObserver && bn.read((function() {
        document.body && Ae(document.body, pr), new MutationObserver((function(t) {
            var e = [];
            t.forEach((function(t) {
                return i = e, r = (n = t).target, void(("attributes" !== n.type ? function(t) {
                    for (var e = t.addedNodes, n = t.removedNodes, i = 0; i < e.length; i++) Ae(e[i], pr);
                    for (var r = 0; r < n.length; r++) Ae(n[r], gr);
                    return !0
                } : function(t) {
                    var e = t.target,
                        n = t.attributeName;
                    if ("href" === n) return !0;
                    var i = Gn(n);
                    if (i && i in fr) {
                        if (st(e, n)) return fr[i](e), !0;
                        var r = fr.getComponent(e, i);
                        return r ? (r.$destroy(), !0) : void 0
                    }
                })(n) && !i.some((function(t) {
                    return t.contains(r)
                })) && i.push(r.contains ? r : r.parentNode));
                var n, i, r
            })), e.forEach((function(t) {
                return fr.update(t)
            }))
        })).observe(document, {
            childList: !0,
            subtree: !0,
            characterData: !0,
            attributes: !0
        }), fr._initialized = !0
    }));
    var yr, br = {
            mixins: [si],
            props: {
                date: String,
                clsWrapper: String
            },
            data: {
                date: "",
                clsWrapper: ".uk-countdown-%unit%"
            },
            computed: {
                date: function(t) {
                    return Date.parse(t.date)
                },
                days: function(t, e) {
                    return Ne(t.clsWrapper.replace("%unit%", "days"), e)
                },
                hours: function(t, e) {
                    return Ne(t.clsWrapper.replace("%unit%", "hours"), e)
                },
                minutes: function(t, e) {
                    return Ne(t.clsWrapper.replace("%unit%", "minutes"), e)
                },
                seconds: function(t, e) {
                    return Ne(t.clsWrapper.replace("%unit%", "seconds"), e)
                },
                units: function() {
                    var t = this;
                    return ["days", "hours", "minutes", "seconds"].filter((function(e) {
                        return t[e]
                    }))
                }
            },
            connected: function() {
                this.start()
            },
            disconnected: function() {
                var t = this;
                this.stop(), this.units.forEach((function(e) {
                    return ve(t[e])
                }))
            },
            events: [{
                name: "visibilitychange",
                el: ct && document,
                handler: function() {
                    document.hidden ? this.stop() : this.start()
                }
            }],
            update: {
                write: function() {
                    var t, e = this,
                        n = {
                            total: t = this.date - Date.now(),
                            seconds: t / 1e3 % 60,
                            minutes: t / 1e3 / 60 % 60,
                            hours: t / 1e3 / 60 / 60 % 24,
                            days: t / 1e3 / 60 / 60 / 24
                        };
                    n.total <= 0 && (this.stop(), n.days = n.hours = n.minutes = n.seconds = 0), this.units.forEach((function(t) {
                        var i = (i = String(Math.floor(n[t]))).length < 2 ? "0" + i : i,
                            r = e[t];
                        r.textContent !== i && ((i = i.split("")).length !== r.children.length && me(r, i.map((function() {
                            return "<span></span>"
                        })).join("")), i.forEach((function(t, e) {
                            return r.children[e].textContent = t
                        })))
                    }))
                }
            },
            methods: {
                start: function() {
                    this.stop(), this.date && this.units.length && (this.$update(), this.timer = setInterval(this.$update, 1e3))
                },
                stop: function() {
                    this.timer && (clearInterval(this.timer), this.timer = null)
                }
            }
        },
        xr = "uk-animation-target",
        Cr = {
            props: {
                animation: Number
            },
            data: {
                animation: 150
            },
            computed: {
                target: function() {
                    return this.$el
                }
            },
            methods: {
                animate: function(t) {
                    var e = this;
                    yr || (yr = we(document.head, "<style>").sheet).insertRule("." + xr + " > * {\n            margin-top: 0 !important;\n            transform: none !important;\n        }", 0);
                    var n = Zt(this.target),
                        i = n.map((function(t) {
                            return _r(t, !0)
                        })),
                        r = hn(this.target),
                        o = window.pageYOffset;
                    t(), Ge.cancel(this.target), n.forEach(Ge.cancel), kr(this.target), this.$update(this.target, "resize"), bn.flush();
                    var s = hn(this.target),
                        a = (n = n.concat(Zt(this.target).filter((function(t) {
                            return !y(n, t)
                        })))).map((function(t, e) {
                            return !(!t.parentNode || !(e in i)) && (i[e] ? qt(t) ? Er(t) : {
                                opacity: 0
                            } : {
                                opacity: qt(t) ? 1 : 0
                            })
                        }));
                    return i = a.map((function(t, r) {
                        var o = n[r].parentNode === e.target && (i[r] || _r(n[r]));
                        return o && (t ? "opacity" in t || (o.opacity % 1 ? t.opacity = 1 : delete o.opacity) : delete o.opacity), o
                    })), Me(this.target, xr), n.forEach((function(t, e) {
                        return i[e] && Re(t, i[e])
                    })), Re(this.target, {
                        height: r,
                        display: "block"
                    }), Bn(window, o), ae.all(n.map((function(t, n) {
                        return ["top", "left", "height", "width"].some((function(t) {
                            return i[n][t] !== a[n][t]
                        })) && Ge.start(t, a[n], e.animation, "ease")
                    })).concat(r !== s && Ge.start(this.target, {
                        height: s
                    }, this.animation, "ease"))).then((function() {
                        n.forEach((function(t, e) {
                            return Re(t, {
                                display: 0 === a[e].opacity ? "none" : "",
                                zIndex: ""
                            })
                        })), kr(e.target), e.$update(e.target, "resize"), bn.flush()
                    }), et)
                }
            }
        };

    function _r(t, e) {
        var n = Re(t, "zIndex");
        return !!qt(t) && Y({
            display: "",
            opacity: e ? Re(t, "opacity") : "0",
            pointerEvents: "none",
            position: "absolute",
            zIndex: "auto" === n ? pe(t) : n
        }, Er(t))
    }

    function kr(t) {
        Re(t.children, {
            height: "",
            left: "",
            opacity: "",
            pointerEvents: "",
            position: "",
            top: "",
            width: ""
        }), $e(t, xr), Re(t, {
            height: "",
            display: ""
        })
    }

    function Er(t) {
        var e = sn(t),
            n = e.height,
            i = e.width,
            r = ln(t);
        return {
            top: r.top,
            left: r.left,
            height: n,
            width: i
        }
    }
    var Tr = {
        mixins: [Cr],
        args: "target",
        props: {
            target: Boolean,
            selActive: Boolean
        },
        data: {
            target: null,
            selActive: !1,
            attrItem: "uk-filter-control",
            cls: "uk-active",
            animation: 250
        },
        computed: {
            toggles: {
                get: function(t, e) {
                    return De("[" + this.attrItem + "],[data-" + this.attrItem + "]", e)
                },
                watch: function() {
                    var t, e = this;
                    this.updateState(), !1 !== this.selActive && (t = De(this.selActive, this.$el), this.toggles.forEach((function(n) {
                        return Pe(n, e.cls, y(t, n))
                    })))
                },
                immediate: !0
            },
            target: function(t, e) {
                return Ne(t.target, e)
            },
            children: {
                get: function() {
                    return Zt(this.target)
                },
                watch: function(t, e) {
                    var n, i;
                    (n = t).length === (i = e).length && n.every((function(t) {
                        return ~i.indexOf(t)
                    })) || this.updateState()
                }
            }
        },
        events: [{
            name: "click",
            delegate: function() {
                return "[" + this.attrItem + "],[data-" + this.attrItem + "]"
            },
            handler: function(t) {
                t.preventDefault(), this.apply(t.current)
            }
        }],
        methods: {
            apply: function(t) {
                this.setState(Sr(t, this.attrItem, this.getState()))
            },
            getState: function() {
                var t = this;
                return this.toggles.filter((function(e) {
                    return je(e, t.cls)
                })).reduce((function(e, n) {
                    return Sr(n, t.attrItem, e)
                }), {
                    filter: {
                        "": ""
                    },
                    sort: []
                })
            },
            setState: function(t, e) {
                var n = this;
                void 0 === e && (e = !0), t = Y({
                    filter: {
                        "": ""
                    },
                    sort: []
                }, t), Kt(this.$el, "beforeFilter", [this, t]);
                var i = this.children;

                function r() {
                    var e, r = (e = "", K(t.filter, (function(t) {
                        return e += t || ""
                    })), e);
                    i.forEach((function(t) {
                        return Re(t, "display", r && !Mt(t, r) ? "none" : "")
                    }));
                    var o, s, a, l = t.sort,
                        c = l[0];
                    c && (s = c, a = l[1], Z(o = Y([], i).sort((function(t, e) {
                        return lt(t, s).localeCompare(lt(e, s), void 0, {
                            numeric: !0
                        }) * ("asc" === a || -1)
                    })), i) || o.forEach((function(t) {
                        return we(n.target, t)
                    })))
                }
                this.toggles.forEach((function(e) {
                    return Pe(e, n.cls, !! function(t, e, n) {
                        var i = n.filter;
                        void 0 === i && (i = {
                            "": ""
                        });
                        var r = n.sort,
                            o = r[0],
                            s = r[1],
                            a = Lr(t, e),
                            l = a.filter;
                        void 0 === l && (l = "");
                        var c = a.group;
                        void 0 === c && (c = "");
                        var h = a.sort,
                            u = a.order;
                        return void 0 === u && (u = "asc"), P(h) ? c in i && l === i[c] || !l && c && !(c in i) && !i[""] : o === h && s === u
                    }(e, n.attrItem, t))
                })), e ? this.animate(r).then((function() {
                    return Kt(n.$el, "afterFilter", [n])
                })) : (r(), Kt(this.$el, "afterFilter", [this]))
            },
            updateState: function() {
                var t = this;
                bn.write((function() {
                    return t.setState(t.getState(), !1)
                }))
            }
        }
    };

    function Lr(t, e) {
        return Nn(lt(t, e), ["filter"])
    }

    function Sr(t, e, n) {
        var i = Lr(t, e),
            r = i.filter,
            o = i.group,
            s = i.sort,
            a = i.order;
        return void 0 === a && (a = "asc"), (r || P(s)) && (o ? r ? (delete n.filter[""], n.filter[o] = r) : (delete n.filter[o], (j(n.filter) || "" in n.filter) && (n.filter = {
            "": r || ""
        })) : n.filter = {
            "": r || ""
        }), P(s) || (n.sort = [s, a]), n
    }
    var Ar = {
        slide: {
            show: function(t) {
                return [{
                    transform: Dr(-100 * t)
                }, {
                    transform: Dr()
                }]
            },
            percent: Nr,
            translate: function(t, e) {
                return [{
                    transform: Dr(-100 * e * t)
                }, {
                    transform: Dr(100 * e * (1 - t))
                }]
            }
        }
    };

    function Nr(t) {
        return Math.abs(Re(t, "transform").split(",")[4] / t.offsetWidth) || 0
    }

    function Dr(t, e) {
        return void 0 === t && (t = 0), void 0 === e && (e = "%"), t += t ? e : "", ht ? "translateX(" + t + ")" : "translate3d(" + t + ", 0, 0)"
    }

    function Ir(t) {
        return "scale3d(" + t + ", " + t + ", 1)"
    }
    var Mr = Y({}, Ar, {
        fade: {
            show: function() {
                return [{
                    opacity: 0
                }, {
                    opacity: 1
                }]
            },
            percent: function(t) {
                return 1 - Re(t, "opacity")
            },
            translate: function(t) {
                return [{
                    opacity: 1 - t
                }, {
                    opacity: t
                }]
            }
        },
        scale: {
            show: function() {
                return [{
                    opacity: 0,
                    transform: Ir(.8)
                }, {
                    opacity: 1,
                    transform: Ir(1)
                }]
            },
            percent: function(t) {
                return 1 - Re(t, "opacity")
            },
            translate: function(t) {
                return [{
                    opacity: 1 - t,
                    transform: Ir(1 - .2 * t)
                }, {
                    opacity: t,
                    transform: Ir(.8 + .2 * t)
                }]
            }
        }
    });

    function $r(t, e, n) {
        Kt(t, Gt(e, !1, !1, n))
    }
    var Br = {
        mixins: [{
            props: {
                autoplay: Boolean,
                autoplayInterval: Number,
                pauseOnHover: Boolean
            },
            data: {
                autoplay: !1,
                autoplayInterval: 7e3,
                pauseOnHover: !0
            },
            connected: function() {
                this.autoplay && this.startAutoplay()
            },
            disconnected: function() {
                this.stopAutoplay()
            },
            update: function() {
                ot(this.slides, "tabindex", "-1")
            },
            events: [{
                name: "visibilitychange",
                el: ct && document,
                filter: function() {
                    return this.autoplay
                },
                handler: function() {
                    document.hidden ? this.stopAutoplay() : this.startAutoplay()
                }
            }],
            methods: {
                startAutoplay: function() {
                    var t = this;
                    this.stopAutoplay(), this.interval = setInterval((function() {
                        return (!t.draggable || !Ne(":focus", t.$el)) && (!t.pauseOnHover || !Mt(t.$el, ":hover")) && !t.stack.length && t.show("next")
                    }), this.autoplayInterval)
                },
                stopAutoplay: function() {
                    this.interval && clearInterval(this.interval)
                }
            }
        }, {
            props: {
                draggable: Boolean
            },
            data: {
                draggable: !0,
                threshold: 10
            },
            created: function() {
                var t = this;
                ["start", "move", "end"].forEach((function(e) {
                    var n = t[e];
                    t[e] = function(e) {
                        var i = oe(e).x * (ut ? -1 : 1);
                        t.prevPos = i !== t.pos ? t.pos : t.prevPos, t.pos = i, n(e)
                    }
                }))
            },
            events: [{
                name: gt,
                delegate: function() {
                    return this.selSlides
                },
                handler: function(t) {
                    var e;
                    !this.draggable || !re(t) && !(e = t.target).children.length && e.childNodes.length || Bt(t.target, Ft) || 0 < t.button || this.length < 2 || this.start(t)
                }
            }, {
                name: "touchmove",
                passive: !1,
                handler: "move",
                filter: function() {
                    return "touchmove" == vt
                },
                delegate: function() {
                    return this.selSlides
                }
            }, {
                name: "dragstart",
                handler: function(t) {
                    t.preventDefault()
                }
            }],
            methods: {
                start: function() {
                    var t = this;
                    this.drag = this.pos, this._transitioner ? (this.percent = this._transitioner.percent(), this.drag += this._transitioner.getDistance() * this.percent * this.dir, this._transitioner.cancel(), this._transitioner.translate(this.percent), this.dragging = !0, this.stack = []) : this.prevIndex = this.index;
                    var e = "touchmove" != vt ? Qt(document, vt, this.move, {
                        passive: !1
                    }) : et;
                    this.unbindMove = function() {
                        e(), t.unbindMove = null
                    }, Qt(window, "scroll", this.unbindMove), Qt(window.visualViewport, "resize", this.unbindMove), Qt(document, mt + " " + bt, this.end, !0), Re(this.list, "userSelect", "none")
                },
                move: function(t) {
                    var e = this;
                    if (this.unbindMove) {
                        var n = this.pos - this.drag;
                        if (!(0 == n || this.prevPos === this.pos || !this.dragging && Math.abs(n) < this.threshold)) {
                            Re(this.list, "pointerEvents", "none"), t.cancelable && t.preventDefault(), this.dragging = !0, this.dir = n < 0 ? 1 : -1;
                            for (var i = this.slides, r = this.prevIndex, o = Math.abs(n), s = this.getIndex(r + this.dir, r), a = this._getDistance(r, s) || i[r].offsetWidth; s !== r && a < o;) this.drag -= a * this.dir, o -= a, s = this.getIndex((r = s) + this.dir, r), a = this._getDistance(r, s) || i[r].offsetWidth;
                            this.percent = o / a;
                            var l, c = i[r],
                                h = i[s],
                                u = this.index !== s,
                                d = r === s;
                            [this.index, this.prevIndex].filter((function(t) {
                                return !y([s, r], t)
                            })).forEach((function(t) {
                                Kt(i[t], "itemhidden", [e]), d && (l = !0, e.prevIndex = r)
                            })), (this.index === r && this.prevIndex !== r || l) && Kt(i[this.index], "itemshown", [this]), u && (this.prevIndex = r, this.index = s, d || Kt(c, "beforeitemhide", [this]), Kt(h, "beforeitemshow", [this])), this._transitioner = this._translate(Math.abs(this.percent), c, !d && h), u && (d || Kt(c, "itemhide", [this]), Kt(h, "itemshow", [this]))
                        }
                    }
                },
                end: function() {
                    var t;
                    Yt(window, "scroll", this.unbindMove), Yt(window.visualViewport, "resize", this.unbindMove), this.unbindMove && this.unbindMove(), Yt(document, mt, this.end, !0), this.dragging && (this.dragging = null, this.index === this.prevIndex ? (this.percent = 1 - this.percent, this.dir *= -1, this._show(!1, this.index, !0), this._transitioner = null) : (this.index = (t = (ut ? this.dir * (ut ? 1 : -1) : this.dir) < 0 == this.prevPos > this.pos) ? this.index : this.prevIndex, t && (this.percent = 1 - this.percent), this.show(0 < this.dir && !t || this.dir < 0 && t ? "next" : "previous", !0))), Re(this.list, {
                        userSelect: "",
                        pointerEvents: ""
                    }), this.drag = this.percent = null
                }
            }
        }, {
            data: {
                selNav: !1
            },
            computed: {
                nav: function(t, e) {
                    return Ne(t.selNav, e)
                },
                selNavItem: function(t) {
                    var e = t.attrItem;
                    return "[" + e + "],[data-" + e + "]"
                },
                navItems: function(t, e) {
                    return De(this.selNavItem, e)
                }
            },
            update: {
                write: function() {
                    var t = this;
                    this.nav && this.length !== this.nav.children.length && me(this.nav, this.slides.map((function(e, n) {
                        return "<li " + t.attrItem + '="' + n + '"><a href></a></li>'
                    })).join("")), Pe(De(this.selNavItem, this.$el).concat(this.nav), "uk-hidden", !this.maxIndex), this.updateNav()
                },
                events: ["resize"]
            },
            events: [{
                name: "click",
                delegate: function() {
                    return this.selNavItem
                },
                handler: function(t) {
                    t.preventDefault(), this.show(lt(t.current, this.attrItem))
                }
            }, {
                name: "itemshow",
                handler: "updateNav"
            }],
            methods: {
                updateNav: function() {
                    var t = this,
                        e = this.getValidIndex();
                    this.navItems.forEach((function(n) {
                        var i = lt(n, t.attrItem);
                        Pe(n, t.clsActive, z(i) === e), Pe(n, "uk-invisible", t.finite && ("previous" === i && 0 === e || "next" === i && e >= t.maxIndex))
                    }))
                }
            }
        }],
        props: {
            clsActivated: Boolean,
            easing: String,
            index: Number,
            finite: Boolean,
            velocity: Number,
            selSlides: String
        },
        data: function() {
            return {
                easing: "ease",
                finite: !1,
                velocity: 1,
                index: 0,
                prevIndex: -1,
                stack: [],
                percent: 0,
                clsActive: "uk-active",
                clsActivated: !1,
                Transitioner: !1,
                transitionOptions: {}
            }
        },
        connected: function() {
            this.prevIndex = -1, this.index = this.getValidIndex(this.index), this.stack = []
        },
        disconnected: function() {
            $e(this.slides, this.clsActive)
        },
        computed: {
            duration: function(t, e) {
                return Or(e.offsetWidth / t.velocity)
            },
            list: function(t, e) {
                return Ne(t.selList, e)
            },
            maxIndex: function() {
                return this.length - 1
            },
            selSlides: function(t) {
                return t.selList + " " + (t.selSlides || "> *")
            },
            slides: {
                get: function() {
                    return De(this.selSlides, this.$el)
                },
                watch: function() {
                    this.$reset()
                }
            },
            length: function() {
                return this.slides.length
            }
        },
        events: {
            itemshown: function() {
                this.$update(this.list)
            }
        },
        methods: {
            show: function(t, e) {
                var n = this;
                if (void 0 === e && (e = !1), !this.dragging && this.length) {
                    var i = this.stack,
                        r = e ? 0 : i.length,
                        o = function() {
                            i.splice(r, 1), i.length && n.show(i.shift(), !0)
                        };
                    if (i[e ? "unshift" : "push"](t), !e && 1 < i.length) 2 === i.length && this._transitioner.forward(Math.min(this.duration, 200));
                    else {
                        var s, a = this.getIndex(this.index),
                            l = je(this.slides, this.clsActive) && this.slides[a],
                            c = this.getIndex(t, this.index),
                            h = this.slides[c];
                        if (l !== h) {
                            if (this.dir = "next" !== (s = t) && ("previous" === s || s < a) ? -1 : 1, this.prevIndex = a, this.index = c, l && !Kt(l, "beforeitemhide", [this]) || !Kt(h, "beforeitemshow", [this, l])) return this.index = this.prevIndex, void o();
                            var u = this._show(l, h, e).then((function() {
                                return l && Kt(l, "itemhidden", [n]), Kt(h, "itemshown", [n]), new ae((function(t) {
                                    bn.write((function() {
                                        i.shift(), i.length ? n.show(i.shift(), !0) : n._transitioner = null, t()
                                    }))
                                }))
                            }));
                            return l && Kt(l, "itemhide", [this]), Kt(h, "itemshow", [this]), u
                        }
                        o()
                    }
                }
            },
            getIndex: function(t, e) {
                return void 0 === t && (t = this.index), void 0 === e && (e = this.index), tt(ge(t, this.slides, e, this.finite), 0, this.maxIndex)
            },
            getValidIndex: function(t, e) {
                return void 0 === t && (t = this.index), void 0 === e && (e = this.prevIndex), this.getIndex(t, e)
            },
            _show: function(t, e, n) {
                if (this._transitioner = this._getTransitioner(t, e, this.dir, Y({
                        easing: n ? e.offsetWidth < 600 ? "cubic-bezier(0.25, 0.46, 0.45, 0.94)" : "cubic-bezier(0.165, 0.84, 0.44, 1)" : this.easing
                    }, this.transitionOptions)), !n && !t) return this._translate(1), ae.resolve();
                var i = this.stack.length;
                return this._transitioner[1 < i ? "forward" : "show"](1 < i ? Math.min(this.duration, 75 + 75 / (i - 1)) : this.duration, this.percent)
            },
            _getDistance: function(t, e) {
                return this._getTransitioner(t, t !== e && e).getDistance()
            },
            _translate: function(t, e, n) {
                void 0 === e && (e = this.prevIndex), void 0 === n && (n = this.index);
                var i = this._getTransitioner(e !== n && e, n);
                return i.translate(t), i
            },
            _getTransitioner: function(t, e, n, i) {
                return void 0 === t && (t = this.prevIndex), void 0 === e && (e = this.index), void 0 === n && (n = this.dir || 1), void 0 === i && (i = this.transitionOptions), new this.Transitioner(B(t) ? this.slides[t] : t, B(e) ? this.slides[e] : e, n * (ut ? -1 : 1), i)
            }
        }
    };

    function Or(t) {
        return .5 * t + 300
    }
    var jr = {
            mixins: [Br],
            props: {
                animation: String
            },
            data: {
                animation: "slide",
                clsActivated: "uk-transition-active",
                Animations: Ar,
                Transitioner: function(t, e, n, i) {
                    var r = i.animation,
                        o = i.easing,
                        s = r.percent,
                        a = r.translate,
                        l = r.show;
                    void 0 === l && (l = et);
                    var c = l(n),
                        h = new se;
                    return {
                        dir: n,
                        show: function(i, r, s) {
                            var a = this;
                            void 0 === r && (r = 0);
                            var l = s ? "linear" : o;
                            return i -= Math.round(i * tt(r, -1, 1)), this.translate(r), $r(e, "itemin", {
                                percent: r,
                                duration: i,
                                timing: l,
                                dir: n
                            }), $r(t, "itemout", {
                                percent: 1 - r,
                                duration: i,
                                timing: l,
                                dir: n
                            }), ae.all([Ge.start(e, c[1], i, l), Ge.start(t, c[0], i, l)]).then((function() {
                                a.reset(), h.resolve()
                            }), et), h.promise
                        },
                        stop: function() {
                            return Ge.stop([e, t])
                        },
                        cancel: function() {
                            Ge.cancel([e, t])
                        },
                        reset: function() {
                            for (var n in c[0]) Re([e, t], n, "")
                        },
                        forward: function(n, i) {
                            return void 0 === i && (i = this.percent()), Ge.cancel([e, t]), this.show(n, i, !0)
                        },
                        translate: function(i) {
                            this.reset();
                            var r = a(i, n);
                            Re(e, r[1]), Re(t, r[0]), $r(e, "itemtranslatein", {
                                percent: i,
                                dir: n
                            }), $r(t, "itemtranslateout", {
                                percent: 1 - i,
                                dir: n
                            })
                        },
                        percent: function() {
                            return s(t || e, e, n)
                        },
                        getDistance: function() {
                            return t && t.offsetWidth
                        }
                    }
                }
            },
            computed: {
                animation: function(t) {
                    var e = t.animation,
                        n = t.Animations;
                    return Y(n[e] || n.slide, {
                        name: e
                    })
                },
                transitionOptions: function() {
                    return {
                        animation: this.animation
                    }
                }
            },
            events: {
                "itemshow itemhide itemshown itemhidden": function(t) {
                    this.$update(t.target)
                },
                beforeitemshow: function(t) {
                    Me(t.target, this.clsActive)
                },
                itemshown: function(t) {
                    Me(t.target, this.clsActivated)
                },
                itemhidden: function(t) {
                    $e(t.target, this.clsActive, this.clsActivated)
                }
            }
        },
        Pr = {
            mixins: [nr, rr, ai, jr],
            functional: !0,
            props: {
                delayControls: Number,
                preload: Number,
                videoAutoplay: Boolean,
                template: String
            },
            data: function() {
                return {
                    preload: 1,
                    videoAutoplay: !1,
                    delayControls: 3e3,
                    items: [],
                    cls: "uk-open",
                    clsPage: "uk-lightbox-page",
                    selList: ".uk-lightbox-items",
                    attrItem: "uk-lightbox-item",
                    selClose: ".uk-close-large",
                    selCaption: ".uk-lightbox-caption",
                    pauseOnHover: !1,
                    velocity: 2,
                    Animations: Mr,
                    template: '<div class="uk-lightbox uk-overflow-hidden"> <ul class="uk-lightbox-items"></ul> <div class="uk-lightbox-toolbar uk-position-top uk-text-right uk-transition-slide-top uk-transition-opaque"> <button class="uk-lightbox-toolbar-icon uk-close-large" type="button" uk-close></button> </div> <a class="uk-lightbox-button uk-position-center-left uk-position-medium uk-transition-fade" href uk-slidenav-previous uk-lightbox-item="previous"></a> <a class="uk-lightbox-button uk-position-center-right uk-position-medium uk-transition-fade" href uk-slidenav-next uk-lightbox-item="next"></a> <div class="uk-lightbox-toolbar uk-lightbox-caption uk-position-bottom uk-text-center uk-transition-slide-bottom uk-transition-opaque"></div> </div>'
                }
            },
            created: function() {
                var t = Ne(this.template),
                    e = Ne(this.selList, t);
                this.items.forEach((function() {
                    return we(e, "<li>")
                })), this.$mount(we(this.container, t))
            },
            computed: {
                caption: function(t, e) {
                    return Ne(".uk-lightbox-caption", e)
                }
            },
            events: [{
                name: vt + " " + gt + " keydown",
                handler: "showControls"
            }, {
                name: "click",
                self: !0,
                delegate: function() {
                    return this.selSlides
                },
                handler: function(t) {
                    t.defaultPrevented || this.hide()
                }
            }, {
                name: "shown",
                self: !0,
                handler: function() {
                    this.showControls()
                }
            }, {
                name: "hide",
                self: !0,
                handler: function() {
                    this.hideControls(), $e(this.slides, this.clsActive), Ge.stop(this.slides)
                }
            }, {
                name: "hidden",
                self: !0,
                handler: function() {
                    this.$destroy(!0)
                }
            }, {
                name: "keyup",
                el: ct && document,
                handler: function(t) {
                    if (this.isToggled(this.$el) && this.draggable) switch (t.keyCode) {
                        case 37:
                            this.show("previous");
                            break;
                        case 39:
                            this.show("next")
                    }
                }
            }, {
                name: "beforeitemshow",
                handler: function(t) {
                    this.isToggled() || (this.draggable = !1, t.preventDefault(), this.toggleElement(this.$el, !0, !1), this.animation = Mr.scale, $e(t.target, this.clsActive), this.stack.splice(1, 0, this.index))
                }
            }, {
                name: "itemshow",
                handler: function() {
                    me(this.caption, this.getItem().caption || "");
                    for (var t = -this.preload; t <= this.preload; t++) this.loadItem(this.index + t)
                }
            }, {
                name: "itemshown",
                handler: function() {
                    this.draggable = this.$props.draggable
                }
            }, {
                name: "itemload",
                handler: function(t, e) {
                    var n = this,
                        i = e.source,
                        r = e.type,
                        o = e.alt;
                    void 0 === o && (o = "");
                    var s, a, l, c = e.poster,
                        h = e.attrs;
                    void 0 === h && (h = {}), this.setItem(e, "<span uk-spinner></span>"), i && (a = {
                        frameborder: "0",
                        allow: "autoplay",
                        allowfullscreen: "",
                        style: "max-width: 100%; box-sizing: border-box;",
                        "uk-responsive": "",
                        "uk-video": "" + this.videoAutoplay
                    }, "image" === r || i.match(/\.(jpe?g|png|gif|svg|webp)($|\?)/i) ? de(i, h.srcset, h.size).then((function(t) {
                        return n.setItem(e, Hr("img", Y({
                            src: i,
                            width: t.width,
                            height: t.height,
                            alt: o
                        }, h)))
                    }), (function() {
                        return n.setError(e)
                    })) : "video" === r || i.match(/\.(mp4|webm|ogv)($|\?)/i) ? (Qt(l = Hr("video", Y({
                        src: i,
                        poster: c,
                        controls: "",
                        playsinline: "",
                        "uk-video": "" + this.videoAutoplay
                    }, h)), "loadedmetadata", (function() {
                        ot(l, {
                            width: l.videoWidth,
                            height: l.videoHeight
                        }), n.setItem(e, l)
                    })), Qt(l, "error", (function() {
                        return n.setError(e)
                    }))) : "iframe" === r || i.match(/\.(html|php)($|\?)/i) ? this.setItem(e, Hr("iframe", Y({
                        src: i,
                        frameborder: "0",
                        allowfullscreen: "",
                        class: "uk-lightbox-iframe"
                    }, h))) : (s = i.match(/\/\/(?:.*?youtube(-nocookie)?\..*?[?&]v=|youtu\.be\/)([\w-]{11})[&?]?(.*)?/)) ? this.setItem(e, Hr("iframe", Y({
                        src: "https://www.youtube" + (s[1] || "") + ".com/embed/" + s[2] + (s[3] ? "?" + s[3] : ""),
                        width: 1920,
                        height: 1080
                    }, a, h))) : (s = i.match(/\/\/.*?vimeo\.[a-z]+\/(\d+)[&?]?(.*)?/)) && ue("https://vimeo.com/api/oembed.json?maxwidth=1920&url=" + encodeURI(i), {
                        responseType: "json",
                        withCredentials: !1
                    }).then((function(t) {
                        var i = t.response;
                        return n.setItem(e, Hr("iframe", Y({
                            src: "https://player.vimeo.com/video/" + s[1] + (s[2] ? "?" + s[2] : ""),
                            width: i.width,
                            height: i.height
                        }, a, h)))
                    }), (function() {
                        return n.setError(e)
                    })))
                }
            }],
            methods: {
                loadItem: function(t) {
                    void 0 === t && (t = this.index);
                    var e = this.getItem(t);
                    this.getSlide(e).childElementCount || Kt(this.$el, "itemload", [e])
                },
                getItem: function(t) {
                    return void 0 === t && (t = this.index), this.items[ge(t, this.slides)]
                },
                setItem: function(t, e) {
                    Kt(this.$el, "itemloaded", [this, me(this.getSlide(t), e)])
                },
                getSlide: function(t) {
                    return this.slides[this.items.indexOf(t)]
                },
                setError: function(t) {
                    this.setItem(t, '<span uk-icon="icon: bolt; ratio: 2"></span>')
                },
                showControls: function() {
                    clearTimeout(this.controlsTimer), this.controlsTimer = setTimeout(this.hideControls, this.delayControls), Me(this.$el, "uk-active", "uk-transition-active")
                },
                hideControls: function() {
                    $e(this.$el, "uk-active", "uk-transition-active")
                }
            }
        };

    function Hr(t, e) {
        var n = Se("<" + t + ">");
        return ot(n, e), n
    }
    var zr, qr = {
        install: function(t, e) {
            t.lightboxPanel || t.component("lightboxPanel", Pr), Y(e.props, t.component("lightboxPanel").options.props)
        },
        props: {
            toggle: String
        },
        data: {
            toggle: "a"
        },
        computed: {
            toggles: {
                get: function(t, e) {
                    return De(t.toggle, e)
                },
                watch: function() {
                    this.hide()
                }
            }
        },
        disconnected: function() {
            this.hide()
        },
        events: [{
            name: "click",
            delegate: function() {
                return this.toggle + ":not(.uk-disabled)"
            },
            handler: function(t) {
                t.preventDefault(), this.show(t.current)
            }
        }],
        methods: {
            show: function(t) {
                var e, n = this,
                    i = J(this.toggles.map(Fr), "source");
                return D(t) && (e = Fr(t).source, t = x(i, (function(t) {
                    return e === t.source
                }))), this.panel = this.panel || this.$create("lightboxPanel", Y({}, this.$props, {
                    items: i
                })), Qt(this.panel.$el, "hidden", (function() {
                    return n.panel = !1
                })), this.panel.show(t)
            },
            hide: function() {
                return this.panel && this.panel.hide()
            }
        }
    };

    function Fr(t) {
        var e = {};
        return ["href", "caption", "type", "poster", "alt", "attrs"].forEach((function(n) {
            e["href" === n ? "source" : n] = lt(t, n)
        })), e.attrs = Nn(e.attrs), e
    }
    var Rr = {
            functional: !0,
            args: ["message", "status"],
            data: {
                message: "",
                status: "",
                timeout: 5e3,
                group: null,
                pos: "top-center",
                clsContainer: "uk-notification",
                clsClose: "uk-notification-close",
                clsMsg: "uk-notification-message"
            },
            install: function(t) {
                t.notification.closeAll = function(e, n) {
                    Ae(document.body, (function(i) {
                        var r = t.getComponent(i, "notification");
                        !r || e && e !== r.group || r.close(n)
                    }))
                }
            },
            computed: {
                marginProp: function(t) {
                    return "margin" + (d(t.pos, "top") ? "Top" : "Bottom")
                },
                startProps: function() {
                    var t = {
                        opacity: 0
                    };
                    return t[this.marginProp] = -this.$el.offsetHeight, t
                }
            },
            created: function() {
                var t = Ne("." + this.clsContainer + "-" + this.pos, this.$container) || we(this.$container, '<div class="' + this.clsContainer + " " + this.clsContainer + "-" + this.pos + '" style="display: block"></div>');
                this.$mount(we(t, '<div class="' + this.clsMsg + (this.status ? " " + this.clsMsg + "-" + this.status : "") + '"> <a href class="' + this.clsClose + '" data-uk-close></a> <div>' + this.message + "</div> </div>"))
            },
            connected: function() {
                var t, e = this,
                    n = q(Re(this.$el, this.marginProp));
                Ge.start(Re(this.$el, this.startProps), ((t = {
                    opacity: 1
                })[this.marginProp] = n, t)).then((function() {
                    e.timeout && (e.timer = setTimeout(e.close, e.timeout))
                }))
            },
            events: ((zr = {
                click: function(t) {
                    Bt(t.target, 'a[href="#"],a[href=""]') && t.preventDefault(), this.close()
                }
            })[wt] = function() {
                this.timer && clearTimeout(this.timer)
            }, zr[yt] = function() {
                this.timeout && (this.timer = setTimeout(this.close, this.timeout))
            }, zr),
            methods: {
                close: function(t) {
                    function e() {
                        var t = n.$el.parentNode;
                        Kt(n.$el, "close", [n]), Ce(n.$el), t && !t.hasChildNodes() && Ce(t)
                    }
                    var n = this;
                    this.timer && clearTimeout(this.timer), t ? e() : Ge.start(this.$el, this.startProps).then(e)
                }
            }
        },
        Wr = ["x", "y", "bgx", "bgy", "rotate", "scale", "color", "backgroundColor", "borderColor", "opacity", "blur", "hue", "grayscale", "invert", "saturate", "sepia", "fopacity", "stroke"],
        Vr = {
            mixins: [er],
            props: Wr.reduce((function(t, e) {
                return t[e] = "list", t
            }), {}),
            data: Wr.reduce((function(t, e) {
                return t[e] = void 0, t
            }), {}),
            computed: {
                props: function(t, e) {
                    var n = this;
                    return Wr.reduce((function(i, r) {
                        if (P(t[r])) return i;
                        var o, s, a = r.match(/color/i),
                            l = a || "opacity" === r,
                            c = t[r].slice(0);
                        l && Re(e, r, ""), c.length < 2 && c.unshift(("scale" === r ? 1 : l ? Re(e, r) : 0) || 0);
                        var h, u, f, p, g, v, m = c.reduce((function(t, e) {
                            return $(e) && e.replace(/-|\d/g, "").trim() || t
                        }), "");
                        if (a ? (h = e.style.color, c = c.map((function(t) {
                                return Re(Re(e, "color", t), "color").split(/[(),]/g).slice(1, -1).concat(1).slice(0, 4).map(q)
                            })), e.style.color = h) : d(r, "bg") ? (u = "bgy" === r ? "height" : "width", c = c.map((function(t) {
                                return wn(t, u, n.$el)
                            })), Re(e, "background-position-" + r[2], ""), s = Re(e, "backgroundPosition").split(" ")["x" === r[2] ? 0 : 1], o = n.covers ? (f = Math.min.apply(Math, c), p = Math.max.apply(Math, c), g = c.indexOf(f) < c.indexOf(p), v = p - f, c = c.map((function(t) {
                                return t - (g ? f : p)
                            })), (g ? -v : 0) + "px") : s) : c = c.map(q), "stroke" === r) {
                            if (!c.some((function(t) {
                                    return t
                                }))) return i;
                            var w = $i(n.$el);
                            Re(e, "strokeDasharray", w), "%" === m && (c = c.map((function(t) {
                                return t * w / 100
                            }))), c = c.reverse(), r = "strokeDashoffset"
                        }
                        return i[r] = {
                            steps: c,
                            unit: m,
                            pos: o,
                            bgPos: s,
                            diff: v
                        }, i
                    }), {})
                },
                bgProps: function() {
                    var t = this;
                    return ["bgx", "bgy"].filter((function(e) {
                        return e in t.props
                    }))
                },
                covers: function(t, e) {
                    return i = (n = e).style.backgroundSize, r = "cover" === Re(Re(n, "backgroundSize", ""), "backgroundSize"), n.style.backgroundSize = i, r;
                    var n, i, r
                }
            },
            disconnected: function() {
                delete this._image
            },
            update: {
                read: function(t) {
                    var e, n, i, r, o, s, a = this;
                    t.active = this.matchMedia, t.active && (t.image || !this.covers || !this.bgProps.length || (e = Re(this.$el, "backgroundImage").replace(/^none|url\(["']?(.+?)["']?\)$/, "$1")) && ((n = new Image).src = e, (t.image = n).naturalWidth || (n.onload = function() {
                        return a.$update()
                    })), (i = t.image) && i.naturalWidth && (s = rt.cover(o = {
                        width: i.naturalWidth,
                        height: i.naturalHeight
                    }, r = {
                        width: this.$el.offsetWidth,
                        height: this.$el.offsetHeight
                    }), this.bgProps.forEach((function(t) {
                        var e, n = a.props[t],
                            i = n.diff,
                            l = n.bgPos,
                            c = n.steps,
                            h = "bgy" === t ? "height" : "width",
                            u = s[h] - r[h];
                        u < i ? r[h] = s[h] + i - u : i < u && (e = r[h] / wn(l, h, a.$el)) && (a.props[t].steps = c.map((function(t) {
                            return t - (u - i) / e
                        }))), s = rt.cover(o, r)
                    })), t.dim = s))
                },
                write: function(t) {
                    var e = t.dim;
                    t.active ? e && Re(this.$el, {
                        backgroundSize: e.width + "px " + e.height + "px",
                        backgroundRepeat: "no-repeat"
                    }) : Re(this.$el, {
                        backgroundSize: "",
                        backgroundRepeat: ""
                    })
                },
                events: ["resize"]
            },
            methods: {
                reset: function() {
                    var t = this;
                    K(this.getCss(0), (function(e, n) {
                        return Re(t.$el, n, "")
                    }))
                },
                getCss: function(t) {
                    var e = this.props;
                    return Object.keys(e).reduce((function(n, i) {
                        var r = e[i],
                            o = r.steps,
                            s = r.unit,
                            a = r.pos,
                            l = function(t, e, n) {
                                void 0 === n && (n = 2);
                                var i = Ur(t, e),
                                    r = i[0],
                                    o = i[1],
                                    s = i[2];
                                return (B(r) ? r + Math.abs(r - o) * s * (r < o ? 1 : -1) : +o).toFixed(n)
                            }(o, t);
                        switch (i) {
                            case "x":
                            case "y":
                                s = s || "px", n.transform += " translate" + c(i) + "(" + q(l).toFixed("px" === s ? 0 : 2) + s + ")";
                                break;
                            case "rotate":
                                n.transform += " rotate(" + (l + (s = s || "deg")) + ")";
                                break;
                            case "scale":
                                n.transform += " scale(" + l + ")";
                                break;
                            case "bgy":
                            case "bgx":
                                n["background-position-" + i[2]] = "calc(" + a + " + " + l + "px)";
                                break;
                            case "color":
                            case "backgroundColor":
                            case "borderColor":
                                var h = Ur(o, t),
                                    u = h[1],
                                    d = h[2];
                                n[i] = "rgba(" + h[0].map((function(t, e) {
                                    return t += d * (u[e] - t), 3 === e ? q(t) : parseInt(t, 10)
                                })).join(",") + ")";
                                break;
                            case "blur":
                                n.filter += " blur(" + (l + (s = s || "px")) + ")";
                                break;
                            case "hue":
                                n.filter += " hue-rotate(" + (l + (s = s || "deg")) + ")";
                                break;
                            case "fopacity":
                                n.filter += " opacity(" + (l + (s = s || "%")) + ")";
                                break;
                            case "grayscale":
                            case "invert":
                            case "saturate":
                            case "sepia":
                                n.filter += " " + i + "(" + (l + (s = s || "%")) + ")";
                                break;
                            default:
                                n[i] = l
                        }
                        return n
                    }), {
                        transform: "",
                        filter: ""
                    })
                }
            }
        };

    function Ur(t, e) {
        var n = t.length - 1,
            i = Math.min(Math.floor(n * e), n - 1),
            r = t.slice(i, i + 2);
        return r.push(1 === e ? 1 : e % (1 / n) * n), r
    }
    var Zr = {
            mixins: [Vr],
            props: {
                target: String,
                viewport: Number,
                easing: Number
            },
            data: {
                target: !1,
                viewport: 1,
                easing: 1
            },
            computed: {
                target: function(t, e) {
                    var n = t.target;
                    return function t(e) {
                        return e ? "offsetTop" in e ? e : t(e.parentNode) : document.body
                    }(n && xt(n, e) || e)
                }
            },
            update: {
                read: function(t, e) {
                    var n = t.percent;
                    if ("scroll" !== e && (n = !1), t.active) {
                        var i, r, o = n;
                        return {
                            percent: n = tt((i = jn(this.target) / (this.viewport || 1)) * (1 - ((r = this.easing) - r * i))),
                            style: o !== n && this.getCss(n)
                        }
                    }
                },
                write: function(t) {
                    var e = t.style;
                    t.active ? e && Re(this.$el, e) : this.reset()
                },
                events: ["scroll", "resize"]
            }
        },
        Qr = {
            update: {
                write: function() {
                    var t;
                    this.stack.length || this.dragging || (t = this.getValidIndex(this.index), ~this.prevIndex && this.index === t || this.show(t))
                },
                events: ["resize"]
            }
        };

    function Yr(t, e, n) {
        var i, r = Gr(t, e);
        return n ? r - (i = t, sn(e).width / 2 - sn(i).width / 2) : Math.min(r, Xr(e))
    }

    function Xr(t) {
        return Math.max(0, Kr(t) - sn(t).width)
    }

    function Kr(t) {
        return to(t).reduce((function(t, e) {
            return sn(e).width + t
        }), 0)
    }

    function Gr(t, e) {
        return (ln(t).left + (ut ? sn(t).width - sn(e).width : 0)) * (ut ? -1 : 1)
    }

    function Jr(t, e, n) {
        Kt(t, Gt(e, !1, !1, n))
    }

    function to(t) {
        return Zt(t)
    }
    var eo = {
            mixins: [si, Br, Qr],
            props: {
                center: Boolean,
                sets: Boolean
            },
            data: {
                center: !1,
                sets: !1,
                attrItem: "uk-slider-item",
                selList: ".uk-slider-items",
                selNav: ".uk-slider-nav",
                clsContainer: "uk-slider-container",
                Transitioner: function(t, e, n, i) {
                    var r = i.center,
                        o = i.easing,
                        s = i.list,
                        a = new se,
                        l = t ? Yr(t, s, r) : Yr(e, s, r) + sn(e).width * n,
                        c = e ? Yr(e, s, r) : l + sn(t).width * n * (ut ? -1 : 1);
                    return {
                        dir: n,
                        show: function(e, i, r) {
                            void 0 === i && (i = 0);
                            var l = r ? "linear" : o;
                            return e -= Math.round(e * tt(i, -1, 1)), this.translate(i), t && this.updateTranslates(), i = t ? i : tt(i, 0, 1), Jr(this.getItemIn(), "itemin", {
                                percent: i,
                                duration: e,
                                timing: l,
                                dir: n
                            }), t && Jr(this.getItemIn(!0), "itemout", {
                                percent: 1 - i,
                                duration: e,
                                timing: l,
                                dir: n
                            }), Ge.start(s, {
                                transform: Dr(-c * (ut ? -1 : 1), "px")
                            }, e, l).then(a.resolve, et), a.promise
                        },
                        stop: function() {
                            return Ge.stop(s)
                        },
                        cancel: function() {
                            Ge.cancel(s)
                        },
                        reset: function() {
                            Re(s, "transform", "")
                        },
                        forward: function(t, e) {
                            return void 0 === e && (e = this.percent()), Ge.cancel(s), this.show(t, e, !0)
                        },
                        translate: function(e) {
                            var i = this.getDistance() * n * (ut ? -1 : 1);
                            Re(s, "transform", Dr(tt(i - i * e - c, -Kr(s), sn(s).width) * (ut ? -1 : 1), "px")), this.updateTranslates(), t && (e = tt(e, -1, 1), Jr(this.getItemIn(), "itemtranslatein", {
                                percent: e,
                                dir: n
                            }), Jr(this.getItemIn(!0), "itemtranslateout", {
                                percent: 1 - e,
                                dir: n
                            }))
                        },
                        percent: function() {
                            return Math.abs((Re(s, "transform").split(",")[4] * (ut ? -1 : 1) + l) / (c - l))
                        },
                        getDistance: function() {
                            return Math.abs(c - l)
                        },
                        getItemIn: function(e) {
                            void 0 === e && (e = !1);
                            var i = this.getActives(),
                                r = G(to(s), "offsetLeft"),
                                o = pe(r, i[0 < n * (e ? -1 : 1) ? i.length - 1 : 0]);
                            return ~o && r[o + (t && !e ? n : 0)]
                        },
                        getActives: function() {
                            var n = Yr(t || e, s, r);
                            return G(to(s).filter((function(t) {
                                var e = Gr(t, s);
                                return n <= e && e + sn(t).width <= sn(s).width + n
                            })), "offsetLeft")
                        },
                        updateTranslates: function() {
                            var t = this.getActives();
                            to(s).forEach((function(n) {
                                var i = y(t, n);
                                Jr(n, "itemtranslate" + (i ? "in" : "out"), {
                                    percent: i ? 1 : 0,
                                    dir: n.offsetLeft <= e.offsetLeft ? 1 : -1
                                })
                            }))
                        }
                    }
                }
            },
            computed: {
                avgWidth: function() {
                    return Kr(this.list) / this.length
                },
                finite: function(t) {
                    return t.finite || Math.ceil(Kr(this.list)) < sn(this.list).width + to(this.list).reduce((function(t, e) {
                        return Math.max(t, sn(e).width)
                    }), 0) + this.center
                },
                maxIndex: function() {
                    if (!this.finite || this.center && !this.sets) return this.length - 1;
                    if (this.center) return X(this.sets);
                    Re(this.slides, "order", "");
                    for (var t = Xr(this.list), e = this.length; e--;)
                        if (Gr(this.list.children[e], this.list) < t) return Math.min(e + 1, this.length - 1);
                    return 0
                },
                sets: function(t) {
                    var e = this,
                        n = t.sets,
                        i = sn(this.list).width / (this.center ? 2 : 1),
                        r = 0,
                        o = i,
                        s = 0;
                    return !j(n = n && this.slides.reduce((function(t, n, a) {
                        var l, c = sn(n).width;
                        return r < s + c && (!e.center && a > e.maxIndex && (a = e.maxIndex), y(t, a) || (l = e.slides[a + 1], e.center && l && c < o - sn(l).width / 2 ? o -= c : (o = i, t.push(a), r = s + i + (e.center ? c / 2 : 0)))), s += c, t
                    }), [])) && n
                },
                transitionOptions: function() {
                    return {
                        center: this.center,
                        list: this.list
                    }
                }
            },
            connected: function() {
                Pe(this.$el, this.clsContainer, !Ne("." + this.clsContainer, this.$el))
            },
            update: {
                write: function() {
                    var t = this;
                    De("[" + this.attrItem + "],[data-" + this.attrItem + "]", this.$el).forEach((function(e) {
                        var n = lt(e, t.attrItem);
                        t.maxIndex && Pe(e, "uk-hidden", O(n) && (t.sets && !y(t.sets, q(n)) || n > t.maxIndex))
                    })), !this.length || this.dragging || this.stack.length || (this.reorder(), this._translate(1));
                    var e = this._getTransitioner(this.index).getActives();
                    this.slides.forEach((function(n) {
                        return Pe(n, t.clsActive, y(e, n))
                    })), this.sets && !y(this.sets, q(this.index)) || this.slides.forEach((function(n) {
                        return Pe(n, t.clsActivated, y(e, n))
                    }))
                },
                events: ["resize"]
            },
            events: {
                beforeitemshow: function(t) {
                    !this.dragging && this.sets && this.stack.length < 2 && !y(this.sets, this.index) && (this.index = this.getValidIndex());
                    var e = Math.abs(this.index - this.prevIndex + (0 < this.dir && this.index < this.prevIndex || this.dir < 0 && this.index > this.prevIndex ? (this.maxIndex + 1) * this.dir : 0));
                    if (!this.dragging && 1 < e) {
                        for (var n = 0; n < e; n++) this.stack.splice(1, 0, 0 < this.dir ? "next" : "previous");
                        t.preventDefault()
                    } else this.duration = Or(this.avgWidth / this.velocity) * (sn(this.dir < 0 || !this.slides[this.prevIndex] ? this.slides[this.index] : this.slides[this.prevIndex]).width / this.avgWidth), this.reorder()
                },
                itemshow: function() {
                    ~this.prevIndex && Me(this._getTransitioner().getItemIn(), this.clsActive)
                }
            },
            methods: {
                reorder: function() {
                    var t = this;
                    if (this.finite) Re(this.slides, "order", "");
                    else {
                        var e = 0 < this.dir && this.slides[this.prevIndex] ? this.prevIndex : this.index;
                        if (this.slides.forEach((function(n, i) {
                                return Re(n, "order", 0 < t.dir && i < e ? 1 : t.dir < 0 && i >= t.index ? -1 : "")
                            })), this.center)
                            for (var n = this.slides[e], i = sn(this.list).width / 2 - sn(n).width / 2, r = 0; 0 < i;) {
                                var o = this.getIndex(--r + e, e),
                                    s = this.slides[o];
                                Re(s, "order", e < o ? -2 : -1), i -= sn(s).width
                            }
                    }
                },
                getValidIndex: function(t, e) {
                    if (void 0 === t && (t = this.index), void 0 === e && (e = this.prevIndex), t = this.getIndex(t, e), !this.sets) return t;
                    var n;
                    do {
                        if (y(this.sets, t)) return t;
                        n = t, t = this.getIndex(t + this.dir, e)
                    } while (t !== n);
                    return t
                }
            }
        },
        no = {
            mixins: [Vr],
            data: {
                selItem: "!li"
            },
            computed: {
                item: function(t, e) {
                    return xt(t.selItem, e)
                }
            },
            events: [{
                name: "itemshown",
                self: !0,
                el: function() {
                    return this.item
                },
                handler: function() {
                    Re(this.$el, this.getCss(.5))
                }
            }, {
                name: "itemin itemout",
                self: !0,
                el: function() {
                    return this.item
                },
                handler: function(t) {
                    var e = t.type,
                        n = t.detail,
                        i = n.percent,
                        r = n.duration,
                        o = n.timing,
                        s = n.dir;
                    Ge.cancel(this.$el), Re(this.$el, this.getCss(ro(e, s, i))), Ge.start(this.$el, this.getCss(io(e) ? .5 : 0 < s ? 1 : 0), r, o).catch(et)
                }
            }, {
                name: "transitioncanceled transitionend",
                self: !0,
                el: function() {
                    return this.item
                },
                handler: function() {
                    Ge.cancel(this.$el)
                }
            }, {
                name: "itemtranslatein itemtranslateout",
                self: !0,
                el: function() {
                    return this.item
                },
                handler: function(t) {
                    var e = t.type,
                        n = t.detail,
                        i = n.percent,
                        r = n.dir;
                    Ge.cancel(this.$el), Re(this.$el, this.getCss(ro(e, r, i)))
                }
            }]
        };

    function io(t) {
        return p(t, "in")
    }

    function ro(t, e, n) {
        return n /= 2, io(t) ? e < 0 ? 1 - n : n : e < 0 ? n : 1 - n
    }
    var oo, so, ao = Y({}, Ar, {
            fade: {
                show: function() {
                    return [{
                        opacity: 0,
                        zIndex: 0
                    }, {
                        zIndex: -1
                    }]
                },
                percent: function(t) {
                    return 1 - Re(t, "opacity")
                },
                translate: function(t) {
                    return [{
                        opacity: 1 - t,
                        zIndex: 0
                    }, {
                        zIndex: -1
                    }]
                }
            },
            scale: {
                show: function() {
                    return [{
                        opacity: 0,
                        transform: Ir(1.5),
                        zIndex: 0
                    }, {
                        zIndex: -1
                    }]
                },
                percent: function(t) {
                    return 1 - Re(t, "opacity")
                },
                translate: function(t) {
                    return [{
                        opacity: 1 - t,
                        transform: Ir(1 + .5 * t),
                        zIndex: 0
                    }, {
                        zIndex: -1
                    }]
                }
            },
            pull: {
                show: function(t) {
                    return t < 0 ? [{
                        transform: Dr(30),
                        zIndex: -1
                    }, {
                        transform: Dr(),
                        zIndex: 0
                    }] : [{
                        transform: Dr(-100),
                        zIndex: 0
                    }, {
                        transform: Dr(),
                        zIndex: -1
                    }]
                },
                percent: function(t, e, n) {
                    return n < 0 ? 1 - Nr(e) : Nr(t)
                },
                translate: function(t, e) {
                    return e < 0 ? [{
                        transform: Dr(30 * t),
                        zIndex: -1
                    }, {
                        transform: Dr(-100 * (1 - t)),
                        zIndex: 0
                    }] : [{
                        transform: Dr(100 * -t),
                        zIndex: 0
                    }, {
                        transform: Dr(30 * (1 - t)),
                        zIndex: -1
                    }]
                }
            },
            push: {
                show: function(t) {
                    return t < 0 ? [{
                        transform: Dr(100),
                        zIndex: 0
                    }, {
                        transform: Dr(),
                        zIndex: -1
                    }] : [{
                        transform: Dr(-30),
                        zIndex: -1
                    }, {
                        transform: Dr(),
                        zIndex: 0
                    }]
                },
                percent: function(t, e, n) {
                    return 0 < n ? 1 - Nr(e) : Nr(t)
                },
                translate: function(t, e) {
                    return e < 0 ? [{
                        transform: Dr(100 * t),
                        zIndex: 0
                    }, {
                        transform: Dr(-30 * (1 - t)),
                        zIndex: -1
                    }] : [{
                        transform: Dr(-30 * t),
                        zIndex: -1
                    }, {
                        transform: Dr(100 * (1 - t)),
                        zIndex: 0
                    }]
                }
            }
        }),
        lo = {
            mixins: [si, jr, Qr],
            props: {
                ratio: String,
                minHeight: Number,
                maxHeight: Number
            },
            data: {
                ratio: "16:9",
                minHeight: !1,
                maxHeight: !1,
                selList: ".uk-slideshow-items",
                attrItem: "uk-slideshow-item",
                selNav: ".uk-slideshow-nav",
                Animations: ao
            },
            update: {
                read: function() {
                    var t = this.ratio.split(":").map(Number),
                        e = (e = t[1]) * this.list.offsetWidth / t[0] || 0;
                    return this.minHeight && (e = Math.max(this.minHeight, e)), this.maxHeight && (e = Math.min(this.maxHeight, e)), {
                        height: e - fn(this.list, "height", "content-box")
                    }
                },
                write: function(t) {
                    var e = t.height;
                    0 < e && Re(this.list, "minHeight", e)
                },
                events: ["resize"]
            }
        },
        co = {
            mixins: [si, Cr],
            props: {
                group: String,
                threshold: Number,
                clsItem: String,
                clsPlaceholder: String,
                clsDrag: String,
                clsDragState: String,
                clsBase: String,
                clsNoDrag: String,
                clsEmpty: String,
                clsCustom: String,
                handle: String
            },
            data: {
                group: !1,
                threshold: 5,
                clsItem: "uk-sortable-item",
                clsPlaceholder: "uk-sortable-placeholder",
                clsDrag: "uk-sortable-drag",
                clsDragState: "uk-drag",
                clsBase: "uk-sortable",
                clsNoDrag: "uk-sortable-nodrag",
                clsEmpty: "uk-sortable-empty",
                clsCustom: "",
                handle: !1,
                pos: {}
            },
            created: function() {
                var t = this;
                ["init", "start", "move", "end"].forEach((function(e) {
                    var n = t[e];
                    t[e] = function(e) {
                        Y(t.pos, oe(e)), n(e)
                    }
                }))
            },
            events: {
                name: gt,
                passive: !1,
                handler: "init"
            },
            computed: {
                target: function() {
                    return (this.$el.tBodies || [this.$el])[0]
                },
                items: function() {
                    return Zt(this.target)
                },
                isEmpty: {
                    get: function() {
                        return j(this.items)
                    },
                    watch: function(t) {
                        Pe(this.target, this.clsEmpty, t)
                    },
                    immediate: !0
                },
                handles: {
                    get: function(t, e) {
                        var n = t.handle;
                        return n ? De(n, e) : this.items
                    },
                    watch: function(t, e) {
                        Re(e, {
                            touchAction: "",
                            userSelect: ""
                        }), Re(t, {
                            touchAction: pt ? "none" : "",
                            userSelect: "none"
                        })
                    },
                    immediate: !0
                }
            },
            update: {
                write: function() {
                    if (this.drag && Ot(this.placeholder)) {
                        var t = this.pos,
                            e = t.x,
                            n = t.y,
                            i = this.origin,
                            r = i.offsetTop,
                            o = i.offsetLeft,
                            s = this.drag,
                            a = s.offsetHeight,
                            l = s.offsetWidth,
                            c = sn(window),
                            h = c.right,
                            u = c.bottom,
                            d = document.elementFromPoint(e, n);
                        Re(this.drag, {
                            top: tt(n - r, 0, u - a),
                            left: tt(e - o, 0, h - l)
                        });
                        var f = this.getSortable(d),
                            p = this.getSortable(this.placeholder),
                            g = f !== p;
                        if (f && !Vt(d, this.placeholder) && (!g || f.group && f.group === p.group)) {
                            if (d = f.target === d.parentNode && d || f.items.filter((function(t) {
                                    return Vt(d, t)
                                }))[0], g) p.remove(this.placeholder);
                            else if (!d) return;
                            f.insert(this.placeholder, d), y(this.touched, f) || this.touched.push(f)
                        }
                    }
                },
                events: ["move"]
            },
            methods: {
                init: function(t) {
                    var e = t.target,
                        n = t.button,
                        i = t.defaultPrevented,
                        r = this.items.filter((function(t) {
                            return Vt(e, t)
                        }))[0];
                    !r || i || 0 < n || Rt(e) || Vt(e, "." + this.clsNoDrag) || this.handle && !Vt(e, this.handle) || (t.preventDefault(), this.touched = [this], this.placeholder = r, this.origin = Y({
                        target: e,
                        index: pe(r)
                    }, this.pos), Qt(document, vt, this.move), Qt(document, mt, this.end), this.threshold || this.start(t))
                },
                start: function(t) {
                    var e, n;
                    this.drag = (ot(n = we(this.$container, (e = this.placeholder).outerHTML.replace(/(^<)(?:li|tr)|(?:li|tr)(\/>$)/g, "$1div$2")), "style", ot(n, "style") + ";margin:0!important"), Re(n, Y({
                        boxSizing: "border-box",
                        width: e.offsetWidth,
                        height: e.offsetHeight,
                        overflow: "hidden"
                    }, Re(e, ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom"]))), hn(n.firstElementChild, hn(e.firstElementChild)), n);
                    var i, r, o = this.placeholder.getBoundingClientRect();
                    Y(this.origin, {
                        offsetLeft: this.pos.x - o.left,
                        offsetTop: this.pos.y - o.top
                    }), Me(this.drag, this.clsDrag, this.clsCustom), Me(this.placeholder, this.clsPlaceholder), Me(this.items, this.clsItem), Me(document.documentElement, this.clsDragState), Kt(this.$el, "start", [this, this.placeholder]), i = this.pos, r = Date.now(), oo = setInterval((function() {
                        var t = i.x,
                            e = i.y;
                        e += window.pageYOffset;
                        var n = .3 * (Date.now() - r);
                        r = Date.now(), Pn(document.elementFromPoint(t, i.y)).some((function(t) {
                            var i = t.scrollTop,
                                r = t.scrollHeight,
                                o = sn(Hn(t)),
                                s = o.top,
                                a = o.bottom;
                            if (s < e && e < s + 30) i -= n;
                            else {
                                if (!(e < a && a - 30 < e)) return;
                                i += n
                            }
                            if (0 < i && i < r - o.height) return Bn(t, i), !0
                        }))
                    }), 15), this.move(t)
                },
                move: function(t) {
                    this.drag ? this.$emit("move") : (Math.abs(this.pos.x - this.origin.x) > this.threshold || Math.abs(this.pos.y - this.origin.y) > this.threshold) && this.start(t)
                },
                end: function(t) {
                    var e, n;
                    Yt(document, vt, this.move), Yt(document, mt, this.end), Yt(window, "scroll", this.scroll), this.drag ? (clearInterval(oo), this === (e = this.getSortable(this.placeholder)) ? this.origin.index !== pe(this.placeholder) && Kt(this.$el, "moved", [this, this.placeholder]) : (Kt(e.$el, "added", [e, this.placeholder]), Kt(this.$el, "removed", [this, this.placeholder])), Kt(this.$el, "stop", [this, this.placeholder]), Ce(this.drag), this.drag = null, n = this.touched.map((function(t) {
                        return t.clsPlaceholder + " " + t.clsItem
                    })).join(" "), this.touched.forEach((function(t) {
                        return $e(t.items, n)
                    })), $e(document.documentElement, this.clsDragState)) : "touchend" === t.type && t.target.click()
                },
                insert: function(t, e) {
                    var n = this;

                    function i() {
                        var i, r;
                        e ? (!Vt(t, n.target) || (i = t).parentNode === (r = e).parentNode && pe(i) > pe(r) ? ye : be)(e, t) : we(n.target, t)
                    }
                    Me(this.items, this.clsItem), this.animation ? this.animate(i) : i()
                },
                remove: function(t) {
                    Vt(t, this.target) && (this.animation ? this.animate((function() {
                        return Ce(t)
                    })) : Ce(t))
                },
                getSortable: function(t) {
                    return t && (this.$getComponent(t, "sortable") || this.getSortable(t.parentNode))
                }
            }
        },
        ho = [],
        uo = {
            mixins: [nr, ai, gi],
            args: "title",
            props: {
                delay: Number,
                title: String
            },
            data: {
                pos: "top",
                title: "",
                delay: 0,
                animation: ["uk-animation-scale-up"],
                duration: 100,
                cls: "uk-active",
                clsPos: "uk-tooltip"
            },
            beforeConnect: function() {
                this._hasTitle = st(this.$el, "title"), ot(this.$el, {
                    title: "",
                    "aria-expanded": !1
                })
            },
            disconnected: function() {
                this.hide(), ot(this.$el, {
                    title: this._hasTitle ? this.title : null,
                    "aria-expanded": null
                })
            },
            methods: {
                show: function() {
                    var t = this;
                    !this.isActive() && this.title && (ho.forEach((function(t) {
                        return t.hide()
                    })), ho.push(this), this._unbind = Qt(document, mt, (function(e) {
                        return !Vt(e.target, t.$el) && t.hide()
                    })), clearTimeout(this.showTimer), this.showTimer = setTimeout(this._show, this.delay))
                },
                hide: function() {
                    var t = this;
                    this.isActive() && !Mt(this.$el, "input:focus") && this.toggleElement(this.tooltip, !1, !1).then((function() {
                        ho.splice(ho.indexOf(t), 1), clearTimeout(t.showTimer), t.tooltip = Ce(t.tooltip), t._unbind()
                    }))
                },
                _show: function() {
                    var t = this;
                    this.tooltip = we(this.container, '<div class="' + this.clsPos + '"> <div class="' + this.clsPos + '-inner">' + this.title + "</div> </div>"), Qt(this.tooltip, "toggled", (function() {
                        var e = t.isToggled(t.tooltip);
                        ot(t.$el, "aria-expanded", e), e && (t.positionAt(t.tooltip, t.$el), t.origin = "y" === t.getAxis() ? mn(t.dir) + "-" + t.align : t.align + "-" + mn(t.dir))
                    })), this.toggleElement(this.tooltip, !0)
                },
                isActive: function() {
                    return y(ho, this)
                }
            },
            events: ((so = {
                focus: "show",
                blur: "hide"
            })[wt + " " + yt] = function(t) {
                re(t) || (t.type === wt ? this.show() : this.hide())
            }, so[gt] = function(t) {
                re(t) && (this.isActive() ? this.hide() : this.show())
            }, so)
        },
        fo = {
            props: {
                allow: String,
                clsDragover: String,
                concurrent: Number,
                maxSize: Number,
                method: String,
                mime: String,
                msgInvalidMime: String,
                msgInvalidName: String,
                msgInvalidSize: String,
                multiple: Boolean,
                name: String,
                params: Object,
                type: String,
                url: String
            },
            data: {
                allow: !1,
                clsDragover: "uk-dragover",
                concurrent: 1,
                maxSize: 0,
                method: "POST",
                mime: !1,
                msgInvalidMime: "Invalid File Type: %s",
                msgInvalidName: "Invalid File Name: %s",
                msgInvalidSize: "Invalid File Size: %s Kilobytes Max",
                multiple: !1,
                name: "files[]",
                params: {},
                type: "",
                url: "",
                abort: et,
                beforeAll: et,
                beforeSend: et,
                complete: et,
                completeAll: et,
                error: et,
                fail: et,
                load: et,
                loadEnd: et,
                loadStart: et,
                progress: et
            },
            events: {
                change: function(t) {
                    Mt(t.target, 'input[type="file"]') && (t.preventDefault(), t.target.files && this.upload(t.target.files), t.target.value = "")
                },
                drop: function(t) {
                    go(t);
                    var e = t.dataTransfer;
                    e && e.files && ($e(this.$el, this.clsDragover), this.upload(e.files))
                },
                dragenter: function(t) {
                    go(t)
                },
                dragover: function(t) {
                    go(t), Me(this.$el, this.clsDragover)
                },
                dragleave: function(t) {
                    go(t), $e(this.$el, this.clsDragover)
                }
            },
            methods: {
                upload: function(t) {
                    var e = this;
                    if (t.length) {
                        Kt(this.$el, "upload", [t]);
                        for (var n = 0; n < t.length; n++) {
                            if (this.maxSize && 1e3 * this.maxSize < t[n].size) return void this.fail(this.msgInvalidSize.replace("%s", this.maxSize));
                            if (this.allow && !po(this.allow, t[n].name)) return void this.fail(this.msgInvalidName.replace("%s", this.allow));
                            if (this.mime && !po(this.mime, t[n].type)) return void this.fail(this.msgInvalidMime.replace("%s", this.mime))
                        }
                        this.multiple || (t = [t[0]]), this.beforeAll(this, t);
                        var i = function(t, e) {
                                for (var n = [], i = 0; i < t.length; i += e) {
                                    for (var r = [], o = 0; o < e; o++) r.push(t[i + o]);
                                    n.push(r)
                                }
                                return n
                            }(t, this.concurrent),
                            r = function(t) {
                                var n = new FormData;
                                for (var o in t.forEach((function(t) {
                                        return n.append(e.name, t)
                                    })), e.params) n.append(o, e.params[o]);
                                ue(e.url, {
                                    data: n,
                                    method: e.method,
                                    responseType: e.type,
                                    beforeSend: function(t) {
                                        var n = t.xhr;
                                        n.upload && Qt(n.upload, "progress", e.progress), ["loadStart", "load", "loadEnd", "abort"].forEach((function(t) {
                                            return Qt(n, t.toLowerCase(), e[t])
                                        })), e.beforeSend(t)
                                    }
                                }).then((function(t) {
                                    e.complete(t), i.length ? r(i.shift()) : e.completeAll(t)
                                }), (function(t) {
                                    return e.error(t)
                                }))
                            };
                        r(i.shift())
                    }
                }
            }
        };

    function po(t, e) {
        return e.match(new RegExp("^" + t.replace(/\//g, "\\/").replace(/\*\*/g, "(\\/[^\\/]+)*").replace(/\*/g, "[^\\/]+").replace(/((?!\\))\?/g, "$1.") + "$", "i"))
    }

    function go(t) {
        t.preventDefault(), t.stopPropagation()
    }
    return K(Object.freeze({
        __proto__: null,
        Countdown: br,
        Filter: Tr,
        Lightbox: qr,
        LightboxPanel: Pr,
        Notification: Rr,
        Parallax: Zr,
        Slider: eo,
        SliderParallax: no,
        Slideshow: lo,
        SlideshowParallax: no,
        Sortable: co,
        Tooltip: uo,
        Upload: fo
    }), (function(t, e) {
        return Jn.component(e, t)
    })), Jn
})),
function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("uikiticons", e) : (t = t || self).UIkitIcons = e()
}(this, (function() {
    "use strict";

    function t(e) {
        t.installed || e.icon.add({
            "500px": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.624,11.866c-0.141,0.132,0.479,0.658,0.662,0.418c0.051-0.046,0.607-0.61,0.662-0.664c0,0,0.738,0.719,0.814,0.719 c0.1,0,0.207-0.055,0.322-0.17c0.27-0.269,0.135-0.416,0.066-0.495l-0.631-0.616l0.658-0.668c0.146-0.156,0.021-0.314-0.1-0.449 c-0.182-0.18-0.359-0.226-0.471-0.125l-0.656,0.654l-0.654-0.654c-0.033-0.034-0.08-0.045-0.124-0.045 c-0.079,0-0.191,0.068-0.307,0.181c-0.202,0.202-0.247,0.351-0.133,0.462l0.665,0.665L9.624,11.866z"/><path d="M11.066,2.884c-1.061,0-2.185,0.248-3.011,0.604c-0.087,0.034-0.141,0.106-0.15,0.205C7.893,3.784,7.919,3.909,7.982,4.066 c0.05,0.136,0.187,0.474,0.452,0.372c0.844-0.326,1.779-0.507,2.633-0.507c0.963,0,1.9,0.191,2.781,0.564 c0.695,0.292,1.357,0.719,2.078,1.34c0.051,0.044,0.105,0.068,0.164,0.068c0.143,0,0.273-0.137,0.389-0.271 c0.191-0.214,0.324-0.395,0.135-0.575c-0.686-0.654-1.436-1.138-2.363-1.533C13.24,3.097,12.168,2.884,11.066,2.884z"/><path d="M16.43,15.747c-0.092-0.028-0.242,0.05-0.309,0.119l0,0c-0.652,0.652-1.42,1.169-2.268,1.521 c-0.877,0.371-1.814,0.551-2.779,0.551c-0.961,0-1.896-0.189-2.775-0.564c-0.848-0.36-1.612-0.879-2.268-1.53 c-0.682-0.688-1.196-1.455-1.529-2.268c-0.325-0.799-0.471-1.643-0.471-1.643c-0.045-0.24-0.258-0.249-0.567-0.203 c-0.128,0.021-0.519,0.079-0.483,0.36v0.01c0.105,0.644,0.289,1.284,0.545,1.895c0.417,0.969,1.002,1.849,1.756,2.604 c0.757,0.754,1.636,1.34,2.604,1.757C8.901,18.785,9.97,19,11.088,19c1.104,0,2.186-0.215,3.188-0.645 c1.838-0.896,2.604-1.757,2.604-1.757c0.182-0.204,0.227-0.317-0.1-0.643C16.779,15.956,16.525,15.774,16.43,15.747z"/><path d="M5.633,13.287c0.293,0.71,0.723,1.341,1.262,1.882c0.54,0.54,1.172,0.971,1.882,1.264c0.731,0.303,1.509,0.461,2.298,0.461 c0.801,0,1.578-0.158,2.297-0.461c0.711-0.293,1.344-0.724,1.883-1.264c0.543-0.541,0.971-1.172,1.264-1.882 c0.314-0.721,0.463-1.5,0.463-2.298c0-0.79-0.148-1.569-0.463-2.289c-0.293-0.699-0.721-1.329-1.264-1.881 c-0.539-0.541-1.172-0.959-1.867-1.263c-0.721-0.303-1.5-0.461-2.299-0.461c-0.802,0-1.613,0.159-2.322,0.461 c-0.577,0.25-1.544,0.867-2.119,1.454v0.012V2.108h8.16C15.1,2.104,15.1,1.69,15.1,1.552C15.1,1.417,15.1,1,14.809,1H5.915 C5.676,1,5.527,1.192,5.527,1.384v6.84c0,0.214,0.273,0.372,0.529,0.428c0.5,0.105,0.614-0.056,0.737-0.224l0,0 c0.18-0.273,0.776-0.884,0.787-0.894c0.901-0.905,2.117-1.408,3.416-1.408c1.285,0,2.5,0.501,3.412,1.408 c0.914,0.914,1.408,2.122,1.408,3.405c0,1.288-0.508,2.496-1.408,3.405c-0.9,0.896-2.152,1.406-3.438,1.406 c-0.877,0-1.711-0.229-2.433-0.671v-4.158c0-0.553,0.237-1.151,0.643-1.614c0.462-0.519,1.094-0.799,1.782-0.799 c0.664,0,1.293,0.253,1.758,0.715c0.459,0.459,0.709,1.071,0.709,1.723c0,1.385-1.094,2.468-2.488,2.468 c-0.273,0-0.769-0.121-0.781-0.125c-0.281-0.087-0.405,0.306-0.438,0.436c-0.159,0.496,0.079,0.585,0.123,0.607 c0.452,0.137,0.743,0.157,1.129,0.157c1.973,0,3.572-1.6,3.572-3.57c0-1.964-1.6-3.552-3.572-3.552c-0.97,0-1.872,0.36-2.546,1.038 c-0.656,0.631-1.027,1.487-1.027,2.322v3.438v-0.011c-0.372-0.42-0.732-1.041-0.981-1.682c-0.102-0.248-0.315-0.202-0.607-0.113 c-0.135,0.035-0.519,0.157-0.44,0.439C5.372,12.799,5.577,13.164,5.633,13.287z"/></svg>',
            album: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="2" width="10" height="1"/><rect x="3" y="4" width="14" height="1"/><rect fill="none" stroke="#000" x="1.5" y="6.5" width="17" height="11"/></svg>',
            "arrow-down": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="10.5,16.08 5.63,10.66 6.37,10 10.5,14.58 14.63,10 15.37,10.66"/><line fill="none" stroke="#000" x1="10.5" y1="4" x2="10.5" y2="15"/></svg>',
            "arrow-left": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="10 14 5 9.5 10 5"/><line fill="none" stroke="#000" x1="16" y1="9.5" x2="5" y2="9.52"/></svg>',
            "arrow-right": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="10 5 15 9.5 10 14"/><line fill="none" stroke="#000" x1="4" y1="9.5" x2="15" y2="9.5"/></svg>',
            "arrow-up": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="10.5,4 15.37,9.4 14.63,10.08 10.5,5.49 6.37,10.08 5.63,9.4"/><line fill="none" stroke="#000" x1="10.5" y1="16" x2="10.5" y2="5"/></svg>',
            ban: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"/><line fill="none" stroke="#000" stroke-width="1.1" x1="4" y1="3.5" x2="16" y2="16.5"/></svg>',
            behance: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.5,10.6c-0.4-0.5-0.9-0.9-1.6-1.1c1.7-1,2.2-3.2,0.7-4.7C7.8,4,6.3,4,5.2,4C3.5,4,1.7,4,0,4v12c1.7,0,3.4,0,5.2,0 c1,0,2.1,0,3.1-0.5C10.2,14.6,10.5,12.3,9.5,10.6L9.5,10.6z M5.6,6.1c1.8,0,1.8,2.7-0.1,2.7c-1,0-2,0-2.9,0V6.1H5.6z M2.6,13.8v-3.1 c1.1,0,2.1,0,3.2,0c2.1,0,2.1,3.2,0.1,3.2L2.6,13.8z"/><path d="M19.9,10.9C19.7,9.2,18.7,7.6,17,7c-4.2-1.3-7.3,3.4-5.3,7.1c0.9,1.7,2.8,2.3,4.7,2.1c1.7-0.2,2.9-1.3,3.4-2.9h-2.2 c-0.4,1.3-2.4,1.5-3.5,0.6c-0.4-0.4-0.6-1.1-0.6-1.7H20C20,11.7,19.9,10.9,19.9,10.9z M13.5,10.6c0-1.6,2.3-2.7,3.5-1.4 c0.4,0.4,0.5,0.9,0.6,1.4H13.5L13.5,10.6z"/><rect x="13" y="4" width="5" height="1.4"/></svg>',
            bell: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.1" d="M17,15.5 L3,15.5 C2.99,14.61 3.79,13.34 4.1,12.51 C4.58,11.3 4.72,10.35 5.19,7.01 C5.54,4.53 5.89,3.2 7.28,2.16 C8.13,1.56 9.37,1.5 9.81,1.5 L9.96,1.5 C9.96,1.5 11.62,1.41 12.67,2.17 C14.08,3.2 14.42,4.54 14.77,7.02 C15.26,10.35 15.4,11.31 15.87,12.52 C16.2,13.34 17.01,14.61 17,15.5 L17,15.5 Z"/><path fill="none" stroke="#000" d="M12.39,16 C12.39,17.37 11.35,18.43 9.91,18.43 C8.48,18.43 7.42,17.37 7.42,16"/></svg>',
            bold: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5,15.3 C5.66,15.3 5.9,15 5.9,14.53 L5.9,5.5 C5.9,4.92 5.56,4.7 5,4.7 L5,4 L8.95,4 C12.6,4 13.7,5.37 13.7,6.9 C13.7,7.87 13.14,9.17 10.86,9.59 L10.86,9.7 C13.25,9.86 14.29,11.28 14.3,12.54 C14.3,14.47 12.94,16 9,16 L5,16 L5,15.3 Z M9,9.3 C11.19,9.3 11.8,8.5 11.85,7 C11.85,5.65 11.3,4.8 9,4.8 L7.67,4.8 L7.67,9.3 L9,9.3 Z M9.185,15.22 C11.97,15 12.39,14 12.4,12.58 C12.4,11.15 11.39,10 9,10 L7.67,10 L7.67,15 L9.18,15 Z"/></svg>',
            bolt: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4.74,20 L7.73,12 L3,12 L15.43,1 L12.32,9 L17.02,9 L4.74,20 L4.74,20 L4.74,20 Z M9.18,11 L7.1,16.39 L14.47,10 L10.86,10 L12.99,4.67 L5.61,11 L9.18,11 L9.18,11 L9.18,11 Z"/></svg>',
            bookmark: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" stroke="#000" points="5.5 1.5 15.5 1.5 15.5 17.5 10.5 12.5 5.5 17.5"/></svg>',
            calendar: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M 2,3 2,17 18,17 18,3 2,3 Z M 17,16 3,16 3,8 17,8 17,16 Z M 17,7 3,7 3,4 17,4 17,7 Z"/><rect width="1" height="3" x="6" y="2"/><rect width="1" height="3" x="13" y="2"/></svg>',
            camera: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10.8" r="3.8"/><path fill="none" stroke="#000" d="M1,4.5 C0.7,4.5 0.5,4.7 0.5,5 L0.5,17 C0.5,17.3 0.7,17.5 1,17.5 L19,17.5 C19.3,17.5 19.5,17.3 19.5,17 L19.5,5 C19.5,4.7 19.3,4.5 19,4.5 L13.5,4.5 L13.5,2.9 C13.5,2.6 13.3,2.5 13,2.5 L7,2.5 C6.7,2.5 6.5,2.6 6.5,2.9 L6.5,4.5 L1,4.5 L1,4.5 Z"/></svg>',
            cart: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="7.3" cy="17.3" r="1.4"/><circle cx="13.3" cy="17.3" r="1.4"/><polyline fill="none" stroke="#000" points="0 2 3.2 4 5.3 12.5 16 12.5 18 6.5 8 6.5"/></svg>',
            check: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.1" points="4,10 8,15 17,4"/></svg>',
            "chevron-double-left": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.03" points="10 14 6 10 10 6"/><polyline fill="none" stroke="#000" stroke-width="1.03" points="14 14 10 10 14 6"/></svg>',
            "chevron-double-right": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.03" points="10 6 14 10 10 14"/><polyline fill="none" stroke="#000" stroke-width="1.03" points="6 6 10 10 6 14"/></svg>',
            "chevron-down": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.03" points="16 7 10 13 4 7"/></svg>',
            "chevron-left": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.03" points="13 16 7 10 13 4"/></svg>',
            "chevron-right": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.03" points="7 4 13 10 7 16"/></svg>',
            "chevron-up": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.03" points="4 13 10 7 16 13"/></svg>',
            clock: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"/><rect x="9" y="4" width="1" height="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M13.018,14.197 L9.445,10.625"/></svg>',
            close: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.06" d="M16,16 L4,4"/><path fill="none" stroke="#000" stroke-width="1.06" d="M16,4 L4,16"/></svg>',
            "cloud-download": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.1" d="M6.5,14.61 L3.75,14.61 C1.96,14.61 0.5,13.17 0.5,11.39 C0.5,9.76 1.72,8.41 3.3,8.2 C3.38,5.31 5.75,3 8.68,3 C11.19,3 13.31,4.71 13.89,7.02 C14.39,6.8 14.93,6.68 15.5,6.68 C17.71,6.68 19.5,8.45 19.5,10.64 C19.5,12.83 17.71,14.6 15.5,14.6 L12.5,14.6"/><polyline fill="none" stroke="#000" points="11.75 16 9.5 18.25 7.25 16"/><path fill="none" stroke="#000" d="M9.5,18 L9.5,9.5"/></svg>',
            "cloud-upload": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.1" d="M6.5,14.61 L3.75,14.61 C1.96,14.61 0.5,13.17 0.5,11.39 C0.5,9.76 1.72,8.41 3.31,8.2 C3.38,5.31 5.75,3 8.68,3 C11.19,3 13.31,4.71 13.89,7.02 C14.39,6.8 14.93,6.68 15.5,6.68 C17.71,6.68 19.5,8.45 19.5,10.64 C19.5,12.83 17.71,14.6 15.5,14.6 L12.5,14.6"/><polyline fill="none" stroke="#000" points="7.25 11.75 9.5 9.5 11.75 11.75"/><path fill="none" stroke="#000" d="M9.5,18 L9.5,9.5"/></svg>',
            code: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.01" points="13,4 19,10 13,16"/><polyline fill="none" stroke="#000" stroke-width="1.01" points="7,4 1,10 7,16"/></svg>',
            cog: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" cx="9.997" cy="10" r="3.31"/><path fill="none" stroke="#000" d="M18.488,12.285 L16.205,16.237 C15.322,15.496 14.185,15.281 13.303,15.791 C12.428,16.289 12.047,17.373 12.246,18.5 L7.735,18.5 C7.938,17.374 7.553,16.299 6.684,15.791 C5.801,15.27 4.655,15.492 3.773,16.237 L1.5,12.285 C2.573,11.871 3.317,10.999 3.317,9.991 C3.305,8.98 2.573,8.121 1.5,7.716 L3.765,3.784 C4.645,4.516 5.794,4.738 6.687,4.232 C7.555,3.722 7.939,2.637 7.735,1.5 L12.263,1.5 C12.072,2.637 12.441,3.71 13.314,4.22 C14.206,4.73 15.343,4.516 16.225,3.794 L18.487,7.714 C17.404,8.117 16.661,8.988 16.67,10.009 C16.672,11.018 17.415,11.88 18.488,12.285 L18.488,12.285 Z"/></svg>',
            comment: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6,18.71 L6,14 L1,14 L1,1 L19,1 L19,14 L10.71,14 L6,18.71 L6,18.71 Z M2,13 L7,13 L7,16.29 L10.29,13 L18,13 L18,2 L2,2 L2,13 L2,13 Z"/></svg>',
            commenting: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" stroke="#000" points="1.5,1.5 18.5,1.5 18.5,13.5 10.5,13.5 6.5,17.5 6.5,13.5 1.5,13.5"/><circle cx="10" cy="8" r="1"/><circle cx="6" cy="8" r="1"/><circle cx="14" cy="8" r="1"/></svg>',
            comments: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="2 0.5 19.5 0.5 19.5 13"/><path d="M5,19.71 L5,15 L0,15 L0,2 L18,2 L18,15 L9.71,15 L5,19.71 L5,19.71 L5,19.71 Z M1,14 L6,14 L6,17.29 L9.29,14 L17,14 L17,3 L1,3 L1,14 L1,14 L1,14 Z"/></svg>',
            copy: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#000" x="3.5" y="2.5" width="12" height="16"/><polyline fill="none" stroke="#000" points="5 0.5 17.5 0.5 17.5 17"/></svg>',
            "credit-card": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#000" x="1.5" y="4.5" width="17" height="12"/><rect x="1" y="7" width="18" height="3"/></svg>',
            database: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><ellipse fill="none" stroke="#000" cx="10" cy="4.64" rx="7.5" ry="3.14"/><path fill="none" stroke="#000" d="M17.5,8.11 C17.5,9.85 14.14,11.25 10,11.25 C5.86,11.25 2.5,9.84 2.5,8.11"/><path fill="none" stroke="#000" d="M17.5,11.25 C17.5,12.99 14.14,14.39 10,14.39 C5.86,14.39 2.5,12.98 2.5,11.25"/><path fill="none" stroke="#000" d="M17.49,4.64 L17.5,14.36 C17.5,16.1 14.14,17.5 10,17.5 C5.86,17.5 2.5,16.09 2.5,14.36 L2.5,4.64"/></svg>',
            desktop: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="15" width="1" height="2"/><rect x="11" y="15" width="1" height="2"/><rect x="5" y="16" width="10" height="1"/><rect fill="none" stroke="#000" x="1.5" y="3.5" width="17" height="11"/></svg>',
            download: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="14,10 9.5,14.5 5,10"/><rect x="3" y="17" width="13" height="1"/><line fill="none" stroke="#000" x1="9.5" y1="13.91" x2="9.5" y2="3"/></svg>',
            dribbble: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.4" d="M1.3,8.9c0,0,5,0.1,8.6-1c1.4-0.4,2.6-0.9,4-1.9 c1.4-1.1,2.5-2.5,2.5-2.5"/><path fill="none" stroke="#000" stroke-width="1.4" d="M3.9,16.6c0,0,1.7-2.8,3.5-4.2 c1.8-1.3,4-2,5.7-2.2C16,10,19,10.6,19,10.6"/><path fill="none" stroke="#000" stroke-width="1.4" d="M6.9,1.6c0,0,3.3,4.6,4.2,6.8 c0.4,0.9,1.3,3.1,1.9,5.2c0.6,2,0.9,4.4,0.9,4.4"/><circle fill="none" stroke="#000" stroke-width="1.4" cx="10" cy="10" r="9"/></svg>',
            etsy: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M8,4.26C8,4.07,8,4,8.31,4h4.46c.79,0,1.22.67,1.53,1.91l.25,1h.76c.14-2.82.26-4,.26-4S13.65,3,12.52,3H6.81L3.75,2.92v.84l1,.2c.73.11.9.27,1,1,0,0,.06,2,.06,5.17s-.06,5.14-.06,5.14c0,.59-.23.81-1,.94l-1,.2v.84l3.06-.1h5.11c1.15,0,3.82.1,3.82.1,0-.7.45-3.88.51-4.22h-.73l-.76,1.69a2.25,2.25,0,0,1-2.45,1.47H9.4c-1,0-1.44-.4-1.44-1.24V10.44s2.16,0,2.86.06c.55,0,.85.19,1.06,1l.23,1H13L12.9,9.94,13,7.41h-.85l-.28,1.13c-.16.74-.28.84-1,1-1,.1-2.89.09-2.89.09Z"/></svg>',
            expand: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="13 2 18 2 18 7 17 7 17 3 13 3"/><polygon points="2 13 3 13 3 17 7 17 7 18 2 18"/><path fill="none" stroke="#000" stroke-width="1.1" d="M11,9 L17,3"/><path fill="none" stroke="#000" stroke-width="1.1" d="M3,17 L9,11"/></svg>',
            facebook: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11,10h2.6l0.4-3H11V5.3c0-0.9,0.2-1.5,1.5-1.5H14V1.1c-0.3,0-1-0.1-2.1-0.1C9.6,1,8,2.4,8,5v2H5.5v3H8v8h3V10z"/></svg>',
            "file-edit": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" d="M18.65,1.68 C18.41,1.45 18.109,1.33 17.81,1.33 C17.499,1.33 17.209,1.45 16.98,1.68 L8.92,9.76 L8,12.33 L10.55,11.41 L18.651,3.34 C19.12,2.87 19.12,2.15 18.65,1.68 L18.65,1.68 L18.65,1.68 Z"/><polyline fill="none" stroke="#000" points="16.5 8.482 16.5 18.5 3.5 18.5 3.5 1.5 14.211 1.5"/></svg>',
            "file-pdf": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#000" width="13" height="17" x="3.5" y="1.5"/><path d="M14.65 11.67c-.48.3-1.37-.19-1.79-.37a4.65 4.65 0 0 1 1.49.06c.35.1.36.28.3.31zm-6.3.06l.43-.79a14.7 14.7 0 0 0 .75-1.64 5.48 5.48 0 0 0 1.25 1.55l.2.15a16.36 16.36 0 0 0-2.63.73zM9.5 5.32c.2 0 .32.5.32.97a1.99 1.99 0 0 1-.23 1.04 5.05 5.05 0 0 1-.17-1.3s0-.71.08-.71zm-3.9 9a4.35 4.35 0 0 1 1.21-1.46l.24-.22a4.35 4.35 0 0 1-1.46 1.68zm9.23-3.3a2.05 2.05 0 0 0-1.32-.3 11.07 11.07 0 0 0-1.58.11 4.09 4.09 0 0 1-.74-.5 5.39 5.39 0 0 1-1.32-2.06 10.37 10.37 0 0 0 .28-2.62 1.83 1.83 0 0 0-.07-.25.57.57 0 0 0-.52-.4H9.4a.59.59 0 0 0-.6.38 6.95 6.95 0 0 0 .37 3.14c-.26.63-1 2.12-1 2.12-.3.58-.57 1.08-.82 1.5l-.8.44A3.11 3.11 0 0 0 5 14.16a.39.39 0 0 0 .15.42l.24.13c1.15.56 2.28-1.74 2.66-2.42a23.1 23.1 0 0 1 3.59-.85 4.56 4.56 0 0 0 2.91.8.5.5 0 0 0 .3-.21 1.1 1.1 0 0 0 .12-.75.84.84 0 0 0-.14-.25z"/></svg>',
            "file-text": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#000" width="13" height="17" x="3.5" y="1.5"/><line fill="none" stroke="#000" x1="6" x2="12" y1="12.5" y2="12.5"/><line fill="none" stroke="#000" x1="6" x2="14" y1="8.5" y2="8.5"/><line fill="none" stroke="#000" x1="6" x2="14" y1="6.5" y2="6.5"/><line fill="none" stroke="#000" x1="6" x2="14" y1="10.5" y2="10.5"/></svg>',
            file: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#000" x="3.5" y="1.5" width="13" height="17"/></svg>',
            flickr: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="5.5" cy="9.5" r="3.5"/><circle cx="14.5" cy="9.5" r="3.5"/></svg>',
            folder: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" stroke="#000" points="9.5 5.5 8.5 3.5 1.5 3.5 1.5 16.5 18.5 16.5 18.5 5.5"/></svg>',
            forward: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.47,13.11 C4.02,10.02 6.27,7.85 9.04,6.61 C9.48,6.41 10.27,6.13 11,5.91 L11,2 L18.89,9 L11,16 L11,12.13 C9.25,12.47 7.58,13.19 6.02,14.25 C3.03,16.28 1.63,18.54 1.63,18.54 C1.63,18.54 1.38,15.28 2.47,13.11 L2.47,13.11 Z M5.3,13.53 C6.92,12.4 9.04,11.4 12,10.92 L12,13.63 L17.36,9 L12,4.25 L12,6.8 C11.71,6.86 10.86,7.02 9.67,7.49 C6.79,8.65 4.58,10.96 3.49,13.08 C3.18,13.7 2.68,14.87 2.49,16 C3.28,15.05 4.4,14.15 5.3,13.53 L5.3,13.53 Z"/></svg>',
            foursquare: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.23,2 C15.96,2 16.4,2.41 16.5,2.86 C16.57,3.15 16.56,3.44 16.51,3.73 C16.46,4.04 14.86,11.72 14.75,12.03 C14.56,12.56 14.16,12.82 13.61,12.83 C13.03,12.84 11.09,12.51 10.69,13 C10.38,13.38 7.79,16.39 6.81,17.53 C6.61,17.76 6.4,17.96 6.08,17.99 C5.68,18.04 5.29,17.87 5.17,17.45 C5.12,17.28 5.1,17.09 5.1,16.91 C5.1,12.4 4.86,7.81 5.11,3.31 C5.17,2.5 5.81,2.12 6.53,2 L15.23,2 L15.23,2 Z M9.76,11.42 C9.94,11.19 10.17,11.1 10.45,11.1 L12.86,11.1 C13.12,11.1 13.31,10.94 13.36,10.69 C13.37,10.64 13.62,9.41 13.74,8.83 C13.81,8.52 13.53,8.28 13.27,8.28 C12.35,8.29 11.42,8.28 10.5,8.28 C9.84,8.28 9.83,7.69 9.82,7.21 C9.8,6.85 10.13,6.55 10.5,6.55 C11.59,6.56 12.67,6.55 13.76,6.55 C14.03,6.55 14.23,6.4 14.28,6.14 C14.34,5.87 14.67,4.29 14.67,4.29 C14.67,4.29 14.82,3.74 14.19,3.74 L7.34,3.74 C7,3.75 6.84,4.02 6.84,4.33 C6.84,7.58 6.85,14.95 6.85,14.99 C6.87,15 8.89,12.51 9.76,11.42 L9.76,11.42 Z"/></svg>',
            future: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline points="19 2 18 2 18 6 14 6 14 7 19 7 19 2"/><path fill="none" stroke="#000" stroke-width="1.1" d="M18,6.548 C16.709,3.29 13.354,1 9.6,1 C4.6,1 0.6,5 0.6,10 C0.6,15 4.6,19 9.6,19 C14.6,19 18.6,15 18.6,10"/><rect x="9" y="4" width="1" height="7"/><path d="M13.018,14.197 L9.445,10.625" fill="none" stroke="#000" stroke-width="1.1"/></svg>',
            "git-branch": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.2" cx="7" cy="3" r="2"/><circle fill="none" stroke="#000" stroke-width="1.2" cx="14" cy="6" r="2"/><circle fill="none" stroke="#000" stroke-width="1.2" cx="7" cy="17" r="2"/><path fill="none" stroke="#000" stroke-width="2" d="M14,8 C14,10.41 12.43,10.87 10.56,11.25 C9.09,11.54 7,12.06 7,15 L7,5"/></svg>',
            "git-fork": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.2" cx="5.79" cy="2.79" r="1.79"/><circle fill="none" stroke="#000" stroke-width="1.2" cx="14.19" cy="2.79" r="1.79"/><circle fill="none" stroke="#000" stroke-width="1.2" cx="10.03" cy="16.79" r="1.79"/><path fill="none" stroke="#000" stroke-width="2" d="M5.79,4.57 L5.79,6.56 C5.79,9.19 10.03,10.22 10.03,13.31 C10.03,14.86 10.04,14.55 10.04,14.55 C10.04,14.37 10.04,14.86 10.04,13.31 C10.04,10.22 14.2,9.19 14.2,6.56 L14.2,4.57"/></svg>',
            "github-alt": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10,0.5 C4.75,0.5 0.5,4.76 0.5,10.01 C0.5,15.26 4.75,19.51 10,19.51 C15.24,19.51 19.5,15.26 19.5,10.01 C19.5,4.76 15.25,0.5 10,0.5 L10,0.5 Z M12.81,17.69 C12.81,17.69 12.81,17.7 12.79,17.69 C12.47,17.75 12.35,17.59 12.35,17.36 L12.35,16.17 C12.35,15.45 12.09,14.92 11.58,14.56 C12.2,14.51 12.77,14.39 13.26,14.21 C13.87,13.98 14.36,13.69 14.74,13.29 C15.42,12.59 15.76,11.55 15.76,10.17 C15.76,9.25 15.45,8.46 14.83,7.8 C15.1,7.08 15.07,6.29 14.75,5.44 L14.51,5.42 C14.34,5.4 14.06,5.46 13.67,5.61 C13.25,5.78 12.79,6.03 12.31,6.35 C11.55,6.16 10.81,6.05 10.09,6.05 C9.36,6.05 8.61,6.15 7.88,6.35 C7.28,5.96 6.75,5.68 6.26,5.54 C6.07,5.47 5.9,5.44 5.78,5.44 L5.42,5.44 C5.06,6.29 5.04,7.08 5.32,7.8 C4.7,8.46 4.4,9.25 4.4,10.17 C4.4,11.94 4.96,13.16 6.08,13.84 C6.53,14.13 7.05,14.32 7.69,14.43 C8.03,14.5 8.32,14.54 8.55,14.55 C8.07,14.89 7.82,15.42 7.82,16.16 L7.82,17.51 C7.8,17.69 7.7,17.8 7.51,17.8 C4.21,16.74 1.82,13.65 1.82,10.01 C1.82,5.5 5.49,1.83 10,1.83 C14.5,1.83 18.17,5.5 18.17,10.01 C18.18,13.53 15.94,16.54 12.81,17.69 L12.81,17.69 Z"/></svg>',
            github: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10,1 C5.03,1 1,5.03 1,10 C1,13.98 3.58,17.35 7.16,18.54 C7.61,18.62 7.77,18.34 7.77,18.11 C7.77,17.9 7.76,17.33 7.76,16.58 C5.26,17.12 4.73,15.37 4.73,15.37 C4.32,14.33 3.73,14.05 3.73,14.05 C2.91,13.5 3.79,13.5 3.79,13.5 C4.69,13.56 5.17,14.43 5.17,14.43 C5.97,15.8 7.28,15.41 7.79,15.18 C7.87,14.6 8.1,14.2 8.36,13.98 C6.36,13.75 4.26,12.98 4.26,9.53 C4.26,8.55 4.61,7.74 5.19,7.11 C5.1,6.88 4.79,5.97 5.28,4.73 C5.28,4.73 6.04,4.49 7.75,5.65 C8.47,5.45 9.24,5.35 10,5.35 C10.76,5.35 11.53,5.45 12.25,5.65 C13.97,4.48 14.72,4.73 14.72,4.73 C15.21,5.97 14.9,6.88 14.81,7.11 C15.39,7.74 15.73,8.54 15.73,9.53 C15.73,12.99 13.63,13.75 11.62,13.97 C11.94,14.25 12.23,14.8 12.23,15.64 C12.23,16.84 12.22,17.81 12.22,18.11 C12.22,18.35 12.38,18.63 12.84,18.54 C16.42,17.35 19,13.98 19,10 C19,5.03 14.97,1 10,1 L10,1 Z"/></svg>',
            gitter: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="3.5" y="1" width="1.531" height="11.471"/><rect x="7.324" y="4.059" width="1.529" height="15.294"/><rect x="11.148" y="4.059" width="1.527" height="15.294"/><rect x="14.971" y="4.059" width="1.529" height="8.412"/></svg>',
            "google-plus": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12.9,9c0,2.7-0.6,5-3.2,6.3c-3.7,1.8-8.1,0.2-9.4-3.6C-1.1,7.6,1.9,3.3,6.1,3c1.7-0.1,3.2,0.3,4.6,1.3 c0.1,0.1,0.3,0.2,0.4,0.4c-0.5,0.5-1.2,1-1.7,1.6c-1-0.8-2.1-1.1-3.5-0.9C5,5.6,4.2,6,3.6,6.7c-1.3,1.3-1.5,3.4-0.5,5 c1,1.7,2.6,2.3,4.6,1.9c1.4-0.3,2.4-1.2,2.6-2.6H6.9V9H12.9z"/><polygon points="20,9 20,11 18,11 18,13 16,13 16,11 14,11 14,9 16,9 16,7 18,7 18,9"/></svg>',
            google: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.86,9.09 C18.46,12.12 17.14,16.05 13.81,17.56 C9.45,19.53 4.13,17.68 2.47,12.87 C0.68,7.68 4.22,2.42 9.5,2.03 C11.57,1.88 13.42,2.37 15.05,3.65 C15.22,3.78 15.37,3.93 15.61,4.14 C14.9,4.81 14.23,5.45 13.5,6.14 C12.27,5.08 10.84,4.72 9.28,4.98 C8.12,5.17 7.16,5.76 6.37,6.63 C4.88,8.27 4.62,10.86 5.76,12.82 C6.95,14.87 9.17,15.8 11.57,15.25 C13.27,14.87 14.76,13.33 14.89,11.75 L10.51,11.75 L10.51,9.09 L17.86,9.09 L17.86,9.09 Z"/></svg>',
            grid: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="3" height="3"/><rect x="8" y="2" width="3" height="3"/><rect x="14" y="2" width="3" height="3"/><rect x="2" y="8" width="3" height="3"/><rect x="8" y="8" width="3" height="3"/><rect x="14" y="8" width="3" height="3"/><rect x="2" y="14" width="3" height="3"/><rect x="8" y="14" width="3" height="3"/><rect x="14" y="14" width="3" height="3"/></svg>',
            happy: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="13" cy="7" r="1"/><circle cx="7" cy="7" r="1"/><circle fill="none" stroke="#000" cx="10" cy="10" r="8.5"/><path fill="none" stroke="#000" d="M14.6,11.4 C13.9,13.3 12.1,14.5 10,14.5 C7.9,14.5 6.1,13.3 5.4,11.4"/></svg>',
            hashtag: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.431,8 L15.661,7 L12.911,7 L13.831,3 L12.901,3 L11.98,7 L9.29,7 L10.21,3 L9.281,3 L8.361,7 L5.23,7 L5,8 L8.13,8 L7.21,12 L4.23,12 L4,13 L6.98,13 L6.061,17 L6.991,17 L7.911,13 L10.601,13 L9.681,17 L10.611,17 L11.531,13 L14.431,13 L14.661,12 L11.76,12 L12.681,8 L15.431,8 Z M10.831,12 L8.141,12 L9.061,8 L11.75,8 L10.831,12 Z"/></svg>',
            heart: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.03" d="M10,4 C10,4 8.1,2 5.74,2 C3.38,2 1,3.55 1,6.73 C1,8.84 2.67,10.44 2.67,10.44 L10,18 L17.33,10.44 C17.33,10.44 19,8.84 19,6.73 C19,3.55 16.62,2 14.26,2 C11.9,2 10,4 10,4 L10,4 Z"/></svg>',
            history: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="#000" points="1 2 2 2 2 6 6 6 6 7 1 7 1 2"/><path fill="none" stroke="#000" stroke-width="1.1" d="M2.1,6.548 C3.391,3.29 6.746,1 10.5,1 C15.5,1 19.5,5 19.5,10 C19.5,15 15.5,19 10.5,19 C5.5,19 1.5,15 1.5,10"/><rect x="9" y="4" width="1" height="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M13.018,14.197 L9.445,10.625"/></svg>',
            home: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="18.65 11.35 10 2.71 1.35 11.35 0.65 10.65 10 1.29 19.35 10.65"/><polygon points="15 4 18 4 18 7 17 7 17 5 15 5"/><polygon points="3 11 4 11 4 18 7 18 7 12 12 12 12 18 16 18 16 11 17 11 17 19 11 19 11 13 8 13 8 19 3 19"/></svg>',
            image: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="16.1" cy="6.1" r="1.1"/><rect fill="none" stroke="#000" x=".5" y="2.5" width="19" height="15"/><polyline fill="none" stroke="#000" stroke-width="1.01" points="4,13 8,9 13,14"/><polyline fill="none" stroke="#000" stroke-width="1.01" points="11,12 12.5,10.5 16,14"/></svg>',
            info: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12.13,11.59 C11.97,12.84 10.35,14.12 9.1,14.16 C6.17,14.2 9.89,9.46 8.74,8.37 C9.3,8.16 10.62,7.83 10.62,8.81 C10.62,9.63 10.12,10.55 9.88,11.32 C8.66,15.16 12.13,11.15 12.14,11.18 C12.16,11.21 12.16,11.35 12.13,11.59 C12.08,11.95 12.16,11.35 12.13,11.59 L12.13,11.59 Z M11.56,5.67 C11.56,6.67 9.36,7.15 9.36,6.03 C9.36,5 11.56,4.54 11.56,5.67 L11.56,5.67 Z"/><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"/></svg>',
            instagram: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13.55,1H6.46C3.45,1,1,3.44,1,6.44v7.12c0,3,2.45,5.44,5.46,5.44h7.08c3.02,0,5.46-2.44,5.46-5.44V6.44 C19.01,3.44,16.56,1,13.55,1z M17.5,14c0,1.93-1.57,3.5-3.5,3.5H6c-1.93,0-3.5-1.57-3.5-3.5V6c0-1.93,1.57-3.5,3.5-3.5h8 c1.93,0,3.5,1.57,3.5,3.5V14z"/><circle cx="14.87" cy="5.26" r="1.09"/><path d="M10.03,5.45c-2.55,0-4.63,2.06-4.63,4.6c0,2.55,2.07,4.61,4.63,4.61c2.56,0,4.63-2.061,4.63-4.61 C14.65,7.51,12.58,5.45,10.03,5.45L10.03,5.45L10.03,5.45z M10.08,13c-1.66,0-3-1.34-3-2.99c0-1.65,1.34-2.99,3-2.99s3,1.34,3,2.99 C13.08,11.66,11.74,13,10.08,13L10.08,13L10.08,13z"/></svg>',
            italic: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12.63,5.48 L10.15,14.52 C10,15.08 10.37,15.25 11.92,15.3 L11.72,16 L6,16 L6.2,15.31 C7.78,15.26 8.19,15.09 8.34,14.53 L10.82,5.49 C10.97,4.92 10.63,4.76 9.09,4.71 L9.28,4 L15,4 L14.81,4.69 C13.23,4.75 12.78,4.91 12.63,5.48 L12.63,5.48 Z"/></svg>',
            joomla: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7.8,13.4l1.7-1.7L5.9,8c-0.6-0.5-0.6-1.5,0-2c0.6-0.6,1.4-0.6,2,0l1.7-1.7c-1-1-2.3-1.3-3.6-1C5.8,2.2,4.8,1.4,3.7,1.4 c-1.3,0-2.3,1-2.3,2.3c0,1.1,0.8,2,1.8,2.3c-0.4,1.3-0.1,2.8,1,3.8L7.8,13.4L7.8,13.4z"/><path d="M10.2,4.3c1-1,2.5-1.4,3.8-1c0.2-1.1,1.1-2,2.3-2c1.3,0,2.3,1,2.3,2.3c0,1.2-0.9,2.2-2,2.3c0.4,1.3,0,2.8-1,3.8L13.9,8 c0.6-0.5,0.6-1.5,0-2c-0.5-0.6-1.5-0.6-2,0L8.2,9.7L6.5,8"/><path d="M14.1,16.8c-1.3,0.4-2.8,0.1-3.8-1l1.7-1.7c0.6,0.6,1.5,0.6,2,0c0.5-0.6,0.6-1.5,0-2l-3.7-3.7L12,6.7l3.7,3.7 c1,1,1.3,2.4,1,3.6c1.1,0.2,2,1.1,2,2.3c0,1.3-1,2.3-2.3,2.3C15.2,18.6,14.3,17.8,14.1,16.8"/><path d="M13.2,12.2l-3.7,3.7c-1,1-2.4,1.3-3.6,1c-0.2,1-1.2,1.8-2.2,1.8c-1.3,0-2.3-1-2.3-2.3c0-1.1,0.8-2,1.8-2.3 c-0.3-1.3,0-2.7,1-3.7l1.7,1.7c-0.6,0.6-0.6,1.5,0,2c0.6,0.6,1.4,0.6,2,0l3.7-3.7"/></svg>',
            laptop: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect y="16" width="20" height="1"/><rect fill="none" stroke="#000" x="2.5" y="4.5" width="15" height="10"/></svg>',
            lifesaver: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10,0.5 C4.76,0.5 0.5,4.76 0.5,10 C0.5,15.24 4.76,19.5 10,19.5 C15.24,19.5 19.5,15.24 19.5,10 C19.5,4.76 15.24,0.5 10,0.5 L10,0.5 Z M10,1.5 C11.49,1.5 12.89,1.88 14.11,2.56 L11.85,4.82 C11.27,4.61 10.65,4.5 10,4.5 C9.21,4.5 8.47,4.67 7.79,4.96 L5.58,2.75 C6.87,1.95 8.38,1.5 10,1.5 L10,1.5 Z M4.96,7.8 C4.67,8.48 4.5,9.21 4.5,10 C4.5,10.65 4.61,11.27 4.83,11.85 L2.56,14.11 C1.88,12.89 1.5,11.49 1.5,10 C1.5,8.38 1.95,6.87 2.75,5.58 L4.96,7.79 L4.96,7.8 L4.96,7.8 Z M10,18.5 C8.25,18.5 6.62,17.97 5.27,17.06 L7.46,14.87 C8.22,15.27 9.08,15.5 10,15.5 C10.79,15.5 11.53,15.33 12.21,15.04 L14.42,17.25 C13.13,18.05 11.62,18.5 10,18.5 L10,18.5 Z M10,14.5 C7.52,14.5 5.5,12.48 5.5,10 C5.5,7.52 7.52,5.5 10,5.5 C12.48,5.5 14.5,7.52 14.5,10 C14.5,12.48 12.48,14.5 10,14.5 L10,14.5 Z M15.04,12.21 C15.33,11.53 15.5,10.79 15.5,10 C15.5,9.08 15.27,8.22 14.87,7.46 L17.06,5.27 C17.97,6.62 18.5,8.25 18.5,10 C18.5,11.62 18.05,13.13 17.25,14.42 L15.04,12.21 L15.04,12.21 Z"/></svg>',
            link: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.1" d="M10.625,12.375 L7.525,15.475 C6.825,16.175 5.925,16.175 5.225,15.475 L4.525,14.775 C3.825,14.074 3.825,13.175 4.525,12.475 L7.625,9.375"/><path fill="none" stroke="#000" stroke-width="1.1" d="M9.325,7.375 L12.425,4.275 C13.125,3.575 14.025,3.575 14.724,4.275 L15.425,4.975 C16.125,5.675 16.125,6.575 15.425,7.275 L12.325,10.375"/><path fill="none" stroke="#000" stroke-width="1.1" d="M7.925,11.875 L11.925,7.975"/></svg>',
            linkedin: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5.77,17.89 L5.77,7.17 L2.21,7.17 L2.21,17.89 L5.77,17.89 L5.77,17.89 Z M3.99,5.71 C5.23,5.71 6.01,4.89 6.01,3.86 C5.99,2.8 5.24,2 4.02,2 C2.8,2 2,2.8 2,3.85 C2,4.88 2.77,5.7 3.97,5.7 L3.99,5.7 L3.99,5.71 L3.99,5.71 Z"/><path d="M7.75,17.89 L11.31,17.89 L11.31,11.9 C11.31,11.58 11.33,11.26 11.43,11.03 C11.69,10.39 12.27,9.73 13.26,9.73 C14.55,9.73 15.06,10.71 15.06,12.15 L15.06,17.89 L18.62,17.89 L18.62,11.74 C18.62,8.45 16.86,6.92 14.52,6.92 C12.6,6.92 11.75,7.99 11.28,8.73 L11.3,8.73 L11.3,7.17 L7.75,7.17 C7.79,8.17 7.75,17.89 7.75,17.89 L7.75,17.89 L7.75,17.89 Z"/></svg>',
            list: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="4" width="12" height="1"/><rect x="6" y="9" width="12" height="1"/><rect x="6" y="14" width="12" height="1"/><rect x="2" y="4" width="2" height="1"/><rect x="2" y="9" width="2" height="1"/><rect x="2" y="14" width="2" height="1"/></svg>',
            location: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.01" d="M10,0.5 C6.41,0.5 3.5,3.39 3.5,6.98 C3.5,11.83 10,19 10,19 C10,19 16.5,11.83 16.5,6.98 C16.5,3.39 13.59,0.5 10,0.5 L10,0.5 Z"/><circle fill="none" stroke="#000" cx="10" cy="6.8" r="2.3"/></svg>',
            lock: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#000" height="10" width="13" y="8.5" x="3.5"/><path fill="none" stroke="#000" d="M6.5,8 L6.5,4.88 C6.5,3.01 8.07,1.5 10,1.5 C11.93,1.5 13.5,3.01 13.5,4.88 L13.5,8"/></svg>',
            mail: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="1.4,6.5 10,11 18.6,6.5"/><path d="M 1,4 1,16 19,16 19,4 1,4 Z M 18,15 2,15 2,5 18,5 18,15 Z"/></svg>',
            menu: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="4" width="16" height="1"/><rect x="2" y="9" width="16" height="1"/><rect x="2" y="14" width="16" height="1"/></svg>',
            microphone: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" x1="10" x2="10" y1="16.44" y2="18.5"/><line fill="none" stroke="#000" x1="7" x2="13" y1="18.5" y2="18.5"/><path fill="none" stroke="#000" stroke-width="1.1" d="M13.5 4.89v5.87a3.5 3.5 0 0 1-7 0V4.89a3.5 3.5 0 0 1 7 0z"/><path fill="none" stroke="#000" stroke-width="1.1" d="M15.5 10.36V11a5.5 5.5 0 0 1-11 0v-.6"/></svg>',
            "minus-circle": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9.5" cy="9.5" r="9"/><line fill="none" stroke="#000" x1="5" y1="9.5" x2="14" y2="9.5"/></svg>',
            minus: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect height="1" width="18" y="9" x="1"/></svg>',
            "more-vertical": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="3" r="2"/><circle cx="10" cy="10" r="2"/><circle cx="10" cy="17" r="2"/></svg>',
            more: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="3" cy="10" r="2"/><circle cx="10" cy="10" r="2"/><circle cx="17" cy="10" r="2"/></svg>',
            move: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="4,5 1,5 1,9 2,9 2,6 4,6"/><polygon points="1,16 2,16 2,18 4,18 4,19 1,19"/><polygon points="14,16 14,19 11,19 11,18 13,18 13,16"/><rect fill="none" stroke="#000" x="5.5" y="1.5" width="13" height="13"/><rect x="1" y="11" width="1" height="3"/><rect x="6" y="18" width="3" height="1"/></svg>',
            nut: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" stroke="#000" points="2.5,5.7 10,1.3 17.5,5.7 17.5,14.3 10,18.7 2.5,14.3"/><circle fill="none" stroke="#000" cx="10" cy="10" r="3.5"/></svg>',
            pagekit: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="3,1 17,1 17,16 10,16 10,13 14,13 14,4 6,4 6,16 10,16 10,19 3,19"/></svg>',
            "paint-bucket": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.21,1 L0,11.21 L8.1,19.31 L18.31,9.1 L10.21,1 L10.21,1 Z M16.89,9.1 L15,11 L1.7,11 L10.21,2.42 L16.89,9.1 Z"/><path fill="none" stroke="#000" stroke-width="1.1" d="M6.42,2.33 L11.7,7.61"/><path d="M18.49,12 C18.49,12 20,14.06 20,15.36 C20,16.28 19.24,17 18.49,17 L18.49,17 C17.74,17 17,16.28 17,15.36 C17,14.06 18.49,12 18.49,12 L18.49,12 Z"/></svg>',
            pencil: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" d="M17.25,6.01 L7.12,16.1 L3.82,17.2 L5.02,13.9 L15.12,3.88 C15.71,3.29 16.66,3.29 17.25,3.88 C17.83,4.47 17.83,5.42 17.25,6.01 L17.25,6.01 Z"/><path fill="none" stroke="#000" d="M15.98,7.268 L13.851,5.148"/></svg>',
            "phone-landscape": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" d="M17,5.5 C17.8,5.5 18.5,6.2 18.5,7 L18.5,14 C18.5,14.8 17.8,15.5 17,15.5 L3,15.5 C2.2,15.5 1.5,14.8 1.5,14 L1.5,7 C1.5,6.2 2.2,5.5 3,5.5 L17,5.5 L17,5.5 L17,5.5 Z"/><circle cx="3.8" cy="10.5" r=".8"/></svg>',
            phone: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" d="M15.5,17 C15.5,17.8 14.8,18.5 14,18.5 L7,18.5 C6.2,18.5 5.5,17.8 5.5,17 L5.5,3 C5.5,2.2 6.2,1.5 7,1.5 L14,1.5 C14.8,1.5 15.5,2.2 15.5,3 L15.5,17 L15.5,17 L15.5,17 Z"/><circle cx="10.5" cy="16.5" r=".8"/></svg>',
            pinterest: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.21,1 C5.5,1 3,4.16 3,7.61 C3,9.21 3.85,11.2 5.22,11.84 C5.43,11.94 5.54,11.89 5.58,11.69 C5.62,11.54 5.8,10.8 5.88,10.45 C5.91,10.34 5.89,10.24 5.8,10.14 C5.36,9.59 5,8.58 5,7.65 C5,5.24 6.82,2.91 9.93,2.91 C12.61,2.91 14.49,4.74 14.49,7.35 C14.49,10.3 13,12.35 11.06,12.35 C9.99,12.35 9.19,11.47 9.44,10.38 C9.75,9.08 10.35,7.68 10.35,6.75 C10.35,5.91 9.9,5.21 8.97,5.21 C7.87,5.21 6.99,6.34 6.99,7.86 C6.99,8.83 7.32,9.48 7.32,9.48 C7.32,9.48 6.24,14.06 6.04,14.91 C5.7,16.35 6.08,18.7 6.12,18.9 C6.14,19.01 6.26,19.05 6.33,18.95 C6.44,18.81 7.74,16.85 8.11,15.44 C8.24,14.93 8.79,12.84 8.79,12.84 C9.15,13.52 10.19,14.09 11.29,14.09 C14.58,14.09 16.96,11.06 16.96,7.3 C16.94,3.7 14,1 10.21,1"/></svg>',
            "play-circle": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" stroke="#000" stroke-width="1.1" points="8.5 7 13.5 10 8.5 13"/><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"/></svg>',
            play: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" stroke="#000" points="6.5,5 14.5,10 6.5,15"/></svg>',
            "plus-circle": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9.5" cy="9.5" r="9"/><line fill="none" stroke="#000" x1="9.5" y1="5" x2="9.5" y2="14"/><line fill="none" stroke="#000" x1="5" y1="9.5" x2="14" y2="9.5"/></svg>',
            plus: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="9" y="1" width="1" height="17"/><rect x="1" y="9" width="17" height="1"/></svg>',
            print: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="4.5 13.5 1.5 13.5 1.5 6.5 18.5 6.5 18.5 13.5 15.5 13.5"/><polyline fill="none" stroke="#000" points="15.5 6.5 15.5 2.5 4.5 2.5 4.5 6.5"/><rect fill="none" stroke="#000" width="11" height="6" x="4.5" y="11.5"/><rect width="8" height="1" x="6" y="13"/><rect width="8" height="1" x="6" y="15"/></svg>',
            pull: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="6.85,8 9.5,10.6 12.15,8 12.85,8.7 9.5,12 6.15,8.7"/><line fill="none" stroke="#000" x1="9.5" y1="11" x2="9.5" y2="2"/><polyline fill="none" stroke="#000" points="6,5.5 3.5,5.5 3.5,18.5 15.5,18.5 15.5,5.5 13,5.5"/></svg>',
            push: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="12.15,4 9.5,1.4 6.85,4 6.15,3.3 9.5,0 12.85,3.3"/><line fill="none" stroke="#000" x1="9.5" y1="10" x2="9.5" y2="1"/><polyline fill="none" stroke="#000" points="6 5.5 3.5 5.5 3.5 18.5 15.5 18.5 15.5 5.5 13 5.5"/></svg>',
            question: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"/><circle cx="10.44" cy="14.42" r="1.05"/><path fill="none" stroke="#000" stroke-width="1.2" d="M8.17,7.79 C8.17,4.75 12.72,4.73 12.72,7.72 C12.72,8.67 11.81,9.15 11.23,9.75 C10.75,10.24 10.51,10.73 10.45,11.4 C10.44,11.53 10.43,11.64 10.43,11.75"/></svg>',
            "quote-right": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.27,7.79 C17.27,9.45 16.97,10.43 15.99,12.02 C14.98,13.64 13,15.23 11.56,15.97 L11.1,15.08 C12.34,14.2 13.14,13.51 14.02,11.82 C14.27,11.34 14.41,10.92 14.49,10.54 C14.3,10.58 14.09,10.6 13.88,10.6 C12.06,10.6 10.59,9.12 10.59,7.3 C10.59,5.48 12.06,4 13.88,4 C15.39,4 16.67,5.02 17.05,6.42 C17.19,6.82 17.27,7.27 17.27,7.79 L17.27,7.79 Z"/><path d="M8.68,7.79 C8.68,9.45 8.38,10.43 7.4,12.02 C6.39,13.64 4.41,15.23 2.97,15.97 L2.51,15.08 C3.75,14.2 4.55,13.51 5.43,11.82 C5.68,11.34 5.82,10.92 5.9,10.54 C5.71,10.58 5.5,10.6 5.29,10.6 C3.47,10.6 2,9.12 2,7.3 C2,5.48 3.47,4 5.29,4 C6.8,4 8.08,5.02 8.46,6.42 C8.6,6.82 8.68,7.27 8.68,7.79 L8.68,7.79 Z"/></svg>',
            receiver: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.01" d="M6.189,13.611C8.134,15.525 11.097,18.239 13.867,18.257C16.47,18.275 18.2,16.241 18.2,16.241L14.509,12.551L11.539,13.639L6.189,8.29L7.313,5.355L3.76,1.8C3.76,1.8 1.732,3.537 1.7,6.092C1.667,8.809 4.347,11.738 6.189,13.611"/></svg>',
            reddit: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M19 9.05a2.56 2.56 0 0 0-2.56-2.56 2.59 2.59 0 0 0-1.88.82 10.63 10.63 0 0 0-4.14-1v-.08c.58-1.62 1.58-3.89 2.7-4.1.38-.08.77.12 1.19.57a1.15 1.15 0 0 0-.06.37 1.48 1.48 0 1 0 1.51-1.45 1.43 1.43 0 0 0-.76.19A2.29 2.29 0 0 0 12.91 1c-2.11.43-3.39 4.38-3.63 5.19 0 0 0 .11-.06.11a10.65 10.65 0 0 0-3.75 1A2.56 2.56 0 0 0 1 9.05a2.42 2.42 0 0 0 .72 1.76A5.18 5.18 0 0 0 1.24 13c0 3.66 3.92 6.64 8.73 6.64s8.74-3 8.74-6.64a5.23 5.23 0 0 0-.46-2.13A2.58 2.58 0 0 0 19 9.05zm-16.88 0a1.44 1.44 0 0 1 2.27-1.19 7.68 7.68 0 0 0-2.07 1.91 1.33 1.33 0 0 1-.2-.72zM10 18.4c-4.17 0-7.55-2.4-7.55-5.4S5.83 7.53 10 7.53 17.5 10 17.5 13s-3.38 5.4-7.5 5.4zm7.69-8.61a7.62 7.62 0 0 0-2.09-1.91 1.41 1.41 0 0 1 .84-.28 1.47 1.47 0 0 1 1.44 1.45 1.34 1.34 0 0 1-.21.72z"/><path d="M6.69 12.58a1.39 1.39 0 1 1 1.39-1.39 1.38 1.38 0 0 1-1.38 1.39z"/><path d="M14.26 11.2a1.39 1.39 0 1 1-1.39-1.39 1.39 1.39 0 0 1 1.39 1.39z"/><path d="M13.09 14.88a.54.54 0 0 1-.09.77 5.3 5.3 0 0 1-3.26 1.19 5.61 5.61 0 0 1-3.4-1.22.55.55 0 1 1 .73-.83 4.09 4.09 0 0 0 5.25 0 .56.56 0 0 1 .77.09z"/></svg>',
            refresh: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.1" d="M17.08,11.15 C17.09,11.31 17.1,11.47 17.1,11.64 C17.1,15.53 13.94,18.69 10.05,18.69 C6.16,18.68 3,15.53 3,11.63 C3,7.74 6.16,4.58 10.05,4.58 C10.9,4.58 11.71,4.73 12.46,5"/><polyline fill="none" stroke="#000" points="9.9 2 12.79 4.89 9.79 7.9"/></svg>',
            reply: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.7,13.11 C16.12,10.02 13.84,7.85 11.02,6.61 C10.57,6.41 9.75,6.13 9,5.91 L9,2 L1,9 L9,16 L9,12.13 C10.78,12.47 12.5,13.19 14.09,14.25 C17.13,16.28 18.56,18.54 18.56,18.54 C18.56,18.54 18.81,15.28 17.7,13.11 L17.7,13.11 Z M14.82,13.53 C13.17,12.4 11.01,11.4 8,10.92 L8,13.63 L2.55,9 L8,4.25 L8,6.8 C8.3,6.86 9.16,7.02 10.37,7.49 C13.3,8.65 15.54,10.96 16.65,13.08 C16.97,13.7 17.48,14.86 17.68,16 C16.87,15.05 15.73,14.15 14.82,13.53 L14.82,13.53 Z"/></svg>',
            rss: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="3.12" cy="16.8" r="1.85"/><path fill="none" stroke="#000" stroke-width="1.1" d="M1.5,8.2 C1.78,8.18 2.06,8.16 2.35,8.16 C7.57,8.16 11.81,12.37 11.81,17.57 C11.81,17.89 11.79,18.19 11.76,18.5"/><path fill="none" stroke="#000" stroke-width="1.1" d="M1.5,2.52 C1.78,2.51 2.06,2.5 2.35,2.5 C10.72,2.5 17.5,9.24 17.5,17.57 C17.5,17.89 17.49,18.19 17.47,18.5"/></svg>',
            search: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"/></svg>',
            server: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="1" height="2"/><rect x="5" y="3" width="1" height="2"/><rect x="7" y="3" width="1" height="2"/><rect x="16" y="3" width="1" height="1"/><rect x="16" y="10" width="1" height="1"/><circle fill="none" stroke="#000" cx="9.9" cy="17.4" r="1.4"/><rect x="3" y="10" width="1" height="2"/><rect x="5" y="10" width="1" height="2"/><rect x="9.5" y="14" width="1" height="2"/><rect x="3" y="17" width="6" height="1"/><rect x="11" y="17" width="6" height="1"/><rect fill="none" stroke="#000" x="1.5" y="1.5" width="17" height="5"/><rect fill="none" stroke="#000" x="1.5" y="8.5" width="17" height="5"/></svg>',
            settings: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><ellipse fill="none" stroke="#000" cx="6.11" cy="3.55" rx="2.11" ry="2.15"/><ellipse fill="none" stroke="#000" cx="6.11" cy="15.55" rx="2.11" ry="2.15"/><circle fill="none" stroke="#000" cx="13.15" cy="9.55" r="2.15"/><rect x="1" y="3" width="3" height="1"/><rect x="10" y="3" width="8" height="1"/><rect x="1" y="9" width="8" height="1"/><rect x="15" y="9" width="3" height="1"/><rect x="1" y="15" width="3" height="1"/><rect x="10" y="15" width="8" height="1"/></svg>',
            shrink: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="11 4 12 4 12 8 16 8 16 9 11 9"/><polygon points="4 11 9 11 9 16 8 16 8 12 4 12"/><path fill="none" stroke="#000" stroke-width="1.1" d="M12,8 L18,2"/><path fill="none" stroke="#000" stroke-width="1.1" d="M2,18 L8,12"/></svg>',
            "sign-in": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="7 2 17 2 17 17 7 17 7 16 16 16 16 3 7 3"/><polygon points="9.1 13.4 8.5 12.8 11.28 10 4 10 4 9 11.28 9 8.5 6.2 9.1 5.62 13 9.5"/></svg>',
            "sign-out": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="13.1 13.4 12.5 12.8 15.28 10 8 10 8 9 15.28 9 12.5 6.2 13.1 5.62 17 9.5"/><polygon points="13 2 3 2 3 17 13 17 13 16 4 16 4 3 13 3"/></svg>',
            social: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.1" x1="13.4" y1="14" x2="6.3" y2="10.7"/><line fill="none" stroke="#000" stroke-width="1.1" x1="13.5" y1="5.5" x2="6.5" y2="8.8"/><circle fill="none" stroke="#000" stroke-width="1.1" cx="15.5" cy="4.6" r="2.3"/><circle fill="none" stroke="#000" stroke-width="1.1" cx="15.5" cy="14.8" r="2.3"/><circle fill="none" stroke="#000" stroke-width="1.1" cx="4.5" cy="9.8" r="2.3"/></svg>',
            soundcloud: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.2,9.4c-0.4,0-0.8,0.1-1.101,0.2c-0.199-2.5-2.399-4.5-5-4.5c-0.6,0-1.2,0.1-1.7,0.3C9.2,5.5,9.1,5.6,9.1,5.6V15h8 c1.601,0,2.801-1.2,2.801-2.8C20,10.7,18.7,9.4,17.2,9.4L17.2,9.4z"/><rect x="6" y="6.5" width="1.5" height="8.5"/><rect x="3" y="8" width="1.5" height="7"/><rect y="10" width="1.5" height="5"/></svg>',
            star: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" stroke="#000" stroke-width="1.01" points="10 2 12.63 7.27 18.5 8.12 14.25 12.22 15.25 18 10 15.27 4.75 18 5.75 12.22 1.5 8.12 7.37 7.27"/></svg>',
            strikethrough: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6,13.02 L6.65,13.02 C7.64,15.16 8.86,16.12 10.41,16.12 C12.22,16.12 12.92,14.93 12.92,13.89 C12.92,12.55 11.99,12.03 9.74,11.23 C8.05,10.64 6.23,10.11 6.23,7.83 C6.23,5.5 8.09,4.09 10.4,4.09 C11.44,4.09 12.13,4.31 12.72,4.54 L13.33,4 L13.81,4 L13.81,7.59 L13.16,7.59 C12.55,5.88 11.52,4.89 10.07,4.89 C8.84,4.89 7.89,5.69 7.89,7.03 C7.89,8.29 8.89,8.78 10.88,9.45 C12.57,10.03 14.38,10.6 14.38,12.91 C14.38,14.75 13.27,16.93 10.18,16.93 C9.18,16.93 8.17,16.69 7.46,16.39 L6.52,17 L6,17 L6,13.02 L6,13.02 Z"/><rect x="3" y="10" width="15" height="1"/></svg>',
            table: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="3" width="18" height="1"/><rect x="1" y="7" width="18" height="1"/><rect x="1" y="11" width="18" height="1"/><rect x="1" y="15" width="18" height="1"/></svg>',
            "tablet-landscape": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" d="M1.5,5 C1.5,4.2 2.2,3.5 3,3.5 L17,3.5 C17.8,3.5 18.5,4.2 18.5,5 L18.5,16 C18.5,16.8 17.8,17.5 17,17.5 L3,17.5 C2.2,17.5 1.5,16.8 1.5,16 L1.5,5 L1.5,5 L1.5,5 Z"/><circle cx="3.7" cy="10.5" r=".8"/></svg>',
            tablet: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" d="M5,18.5 C4.2,18.5 3.5,17.8 3.5,17 L3.5,3 C3.5,2.2 4.2,1.5 5,1.5 L16,1.5 C16.8,1.5 17.5,2.2 17.5,3 L17.5,17 C17.5,17.8 16.8,18.5 16,18.5 L5,18.5 L5,18.5 L5,18.5 Z"/><circle cx="10.5" cy="16.3" r=".8"/></svg>',
            tag: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.1" d="M17.5,3.71 L17.5,7.72 C17.5,7.96 17.4,8.2 17.21,8.39 L8.39,17.2 C7.99,17.6 7.33,17.6 6.93,17.2 L2.8,13.07 C2.4,12.67 2.4,12.01 2.8,11.61 L11.61,2.8 C11.81,2.6 12.08,2.5 12.34,2.5 L16.19,2.5 C16.52,2.5 16.86,2.63 17.11,2.88 C17.35,3.11 17.48,3.4 17.5,3.71 L17.5,3.71 Z"/><circle cx="14" cy="6" r="1"/></svg>',
            thumbnails: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#000" x="3.5" y="3.5" width="5" height="5"/><rect fill="none" stroke="#000" x="11.5" y="3.5" width="5" height="5"/><rect fill="none" stroke="#000" x="11.5" y="11.5" width="5" height="5"/><rect fill="none" stroke="#000" x="3.5" y="11.5" width="5" height="5"/></svg>',
            trash: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="6.5 3 6.5 1.5 13.5 1.5 13.5 3"/><polyline fill="none" stroke="#000" points="4.5 4 4.5 18.5 15.5 18.5 15.5 4"/><rect x="8" y="7" width="1" height="9"/><rect x="11" y="7" width="1" height="9"/><rect x="2" y="3" width="16" height="1"/></svg>',
            "triangle-down": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="5 7 15 7 10 12"/></svg>',
            "triangle-left": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="12 5 7 10 12 15"/></svg>',
            "triangle-right": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="8 5 13 10 8 15"/></svg>',
            "triangle-up": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="5 13 10 8 15 13"/></svg>',
            tripadvisor: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M19.021,7.866C19.256,6.862,20,5.854,20,5.854h-3.346C14.781,4.641,12.504,4,9.98,4C7.363,4,4.999,4.651,3.135,5.876H0\tc0,0,0.738,0.987,0.976,1.988c-0.611,0.837-0.973,1.852-0.973,2.964c0,2.763,2.249,5.009,5.011,5.009\tc1.576,0,2.976-0.737,3.901-1.879l1.063,1.599l1.075-1.615c0.475,0.611,1.1,1.111,1.838,1.451c1.213,0.547,2.574,0.612,3.825,0.15\tc2.589-0.963,3.913-3.852,2.964-6.439c-0.175-0.463-0.4-0.876-0.675-1.238H19.021z M16.38,14.594\tc-1.002,0.371-2.088,0.328-3.06-0.119c-0.688-0.317-1.252-0.817-1.657-1.438c-0.164-0.25-0.313-0.52-0.417-0.811\tc-0.124-0.328-0.186-0.668-0.217-1.014c-0.063-0.689,0.037-1.396,0.339-2.043c0.448-0.971,1.251-1.71,2.25-2.079\tc2.075-0.765,4.375,0.3,5.14,2.366c0.762,2.066-0.301,4.37-2.363,5.134L16.38,14.594L16.38,14.594z M8.322,13.066\tc-0.72,1.059-1.935,1.76-3.309,1.76c-2.207,0-4.001-1.797-4.001-3.996c0-2.203,1.795-4.002,4.001-4.002\tc2.204,0,3.999,1.8,3.999,4.002c0,0.137-0.024,0.261-0.04,0.396c-0.067,0.678-0.284,1.313-0.648,1.853v-0.013H8.322z M2.472,10.775\tc0,1.367,1.112,2.479,2.476,2.479c1.363,0,2.472-1.11,2.472-2.479c0-1.359-1.11-2.468-2.472-2.468\tC3.584,8.306,2.473,9.416,2.472,10.775L2.472,10.775z M12.514,10.775c0,1.367,1.104,2.479,2.471,2.479\tc1.363,0,2.474-1.108,2.474-2.479c0-1.359-1.11-2.468-2.474-2.468c-1.364,0-2.477,1.109-2.477,2.468H12.514z M3.324,10.775\tc0-0.893,0.726-1.618,1.614-1.618c0.889,0,1.625,0.727,1.625,1.618c0,0.898-0.725,1.627-1.625,1.627\tc-0.901,0-1.625-0.729-1.625-1.627H3.324z M13.354,10.775c0-0.893,0.726-1.618,1.627-1.618c0.886,0,1.61,0.727,1.61,1.618\tc0,0.898-0.726,1.627-1.626,1.627s-1.625-0.729-1.625-1.627H13.354z M9.977,4.875c1.798,0,3.425,0.324,4.849,0.968\tc-0.535,0.015-1.061,0.108-1.586,0.3c-1.264,0.463-2.264,1.388-2.815,2.604c-0.262,0.551-0.398,1.133-0.448,1.72\tC9.79,7.905,7.677,5.873,5.076,5.82C6.501,5.208,8.153,4.875,9.94,4.875H9.977z"/></svg>',
            tumblr: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.885,8.598c0,0,0,3.393,0,4.996c0,0.282,0,0.66,0.094,0.942c0.377,1.509,1.131,2.545,2.545,3.11 c1.319,0.472,2.356,0.472,3.676,0c0.565-0.188,1.132-0.659,1.132-0.659l-0.849-2.263c0,0-1.036,0.378-1.603,0.283 c-0.565-0.094-1.226-0.66-1.226-1.508c0-1.603,0-4.902,0-4.902h2.828V5.771h-2.828V2H8.205c0,0-0.094,0.66-0.188,0.942 C7.828,3.791,7.262,4.733,6.603,5.394C5.848,6.147,5,6.43,5,6.43v2.168H6.885z"/></svg>',
            tv: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="7" y="16" width="6" height="1"/><rect fill="none" stroke="#000" x=".5" y="3.5" width="19" height="11"/></svg>',
            twitter: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M19,4.74 C18.339,5.029 17.626,5.229 16.881,5.32 C17.644,4.86 18.227,4.139 18.503,3.28 C17.79,3.7 17.001,4.009 16.159,4.17 C15.485,3.45 14.526,3 13.464,3 C11.423,3 9.771,4.66 9.771,6.7 C9.771,6.99 9.804,7.269 9.868,7.539 C6.795,7.38 4.076,5.919 2.254,3.679 C1.936,4.219 1.754,4.86 1.754,5.539 C1.754,6.82 2.405,7.95 3.397,8.61 C2.79,8.589 2.22,8.429 1.723,8.149 L1.723,8.189 C1.723,9.978 2.997,11.478 4.686,11.82 C4.376,11.899 4.049,11.939 3.713,11.939 C3.475,11.939 3.245,11.919 3.018,11.88 C3.49,13.349 4.852,14.419 6.469,14.449 C5.205,15.429 3.612,16.019 1.882,16.019 C1.583,16.019 1.29,16.009 1,15.969 C2.635,17.019 4.576,17.629 6.662,17.629 C13.454,17.629 17.17,12 17.17,7.129 C17.17,6.969 17.166,6.809 17.157,6.649 C17.879,6.129 18.504,5.478 19,4.74"/></svg>',
            uikit: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="14.4,3.1 11.3,5.1 15,7.3 15,12.9 10,15.7 5,12.9 5,8.5 2,6.8 2,14.8 9.9,19.5 18,14.8 18,5.3"/><polygon points="9.8,4.2 6.7,2.4 9.8,0.4 12.9,2.3"/></svg>',
            unlock: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#000" x="3.5" y="8.5" width="13" height="10"/><path fill="none" stroke="#000" d="M6.5,8.5 L6.5,4.9 C6.5,3 8.1,1.5 10,1.5 C11.9,1.5 13.5,3 13.5,4.9"/></svg>',
            upload: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="5 8 9.5 3.5 14 8"/><rect x="3" y="17" width="13" height="1"/><line fill="none" stroke="#000" x1="9.5" y1="15" x2="9.5" y2="4"/></svg>',
            user: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9.9" cy="6.4" r="4.4"/><path fill="none" stroke="#000" stroke-width="1.1" d="M1.5,19 C2.3,14.5 5.8,11.2 10,11.2 C14.2,11.2 17.7,14.6 18.5,19.2"/></svg>',
            users: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="7.7" cy="8.6" r="3.5"/><path fill="none" stroke="#000" stroke-width="1.1" d="M1,18.1 C1.7,14.6 4.4,12.1 7.6,12.1 C10.9,12.1 13.7,14.8 14.3,18.3"/><path fill="none" stroke="#000" stroke-width="1.1" d="M11.4,4 C12.8,2.4 15.4,2.8 16.3,4.7 C17.2,6.6 15.7,8.9 13.6,8.9 C16.5,8.9 18.8,11.3 19.2,14.1"/></svg>',
            "video-camera": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" stroke="#000" points="17.5 6.9 17.5 13.1 13.5 10.4 13.5 14.5 2.5 14.5 2.5 5.5 13.5 5.5 13.5 9.6 17.5 6.9"/></svg>',
            vimeo: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.065,7.59C1.84,7.367,1.654,7.082,1.468,6.838c-0.332-0.42-0.137-0.411,0.274-0.772c1.026-0.91,2.004-1.896,3.127-2.688 c1.017-0.713,2.365-1.173,3.286-0.039c0.849,1.045,0.869,2.629,1.084,3.891c0.215,1.309,0.421,2.648,0.88,3.901 c0.127,0.352,0.37,1.018,0.81,1.074c0.567,0.078,1.145-0.917,1.408-1.289c0.684-0.987,1.611-2.317,1.494-3.587 c-0.115-1.349-1.572-1.095-2.482-0.773c0.146-1.514,1.555-3.216,2.912-3.792c1.439-0.597,3.579-0.587,4.302,1.036 c0.772,1.759,0.078,3.802-0.763,5.396c-0.918,1.731-2.1,3.333-3.363,4.829c-1.114,1.329-2.432,2.787-4.093,3.422 c-1.897,0.723-3.021-0.686-3.667-2.318c-0.705-1.777-1.056-3.771-1.565-5.621C4.898,8.726,4.644,7.836,4.136,7.191 C3.473,6.358,2.72,7.141,2.065,7.59C1.977,7.502,2.115,7.551,2.065,7.59L2.065,7.59z"/></svg>',
            warning: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="14" r="1"/><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"/><path d="M10.97,7.72 C10.85,9.54 10.56,11.29 10.56,11.29 C10.51,11.87 10.27,12 9.99,12 C9.69,12 9.49,11.87 9.43,11.29 C9.43,11.29 9.16,9.54 9.03,7.72 C8.96,6.54 9.03,6 9.03,6 C9.03,5.45 9.46,5.02 9.99,5 C10.53,5.01 10.97,5.44 10.97,6 C10.97,6 11.04,6.54 10.97,7.72 L10.97,7.72 Z"/></svg>',
            whatsapp: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M16.7,3.3c-1.8-1.8-4.1-2.8-6.7-2.8c-5.2,0-9.4,4.2-9.4,9.4c0,1.7,0.4,3.3,1.3,4.7l-1.3,4.9l5-1.3c1.4,0.8,2.9,1.2,4.5,1.2 l0,0l0,0c5.2,0,9.4-4.2,9.4-9.4C19.5,7.4,18.5,5,16.7,3.3 M10.1,17.7L10.1,17.7c-1.4,0-2.8-0.4-4-1.1l-0.3-0.2l-3,0.8l0.8-2.9 l-0.2-0.3c-0.8-1.2-1.2-2.7-1.2-4.2c0-4.3,3.5-7.8,7.8-7.8c2.1,0,4.1,0.8,5.5,2.3c1.5,1.5,2.3,3.4,2.3,5.5 C17.9,14.2,14.4,17.7,10.1,17.7 M14.4,11.9c-0.2-0.1-1.4-0.7-1.6-0.8c-0.2-0.1-0.4-0.1-0.5,0.1c-0.2,0.2-0.6,0.8-0.8,0.9 c-0.1,0.2-0.3,0.2-0.5,0.1c-0.2-0.1-1-0.4-1.9-1.2c-0.7-0.6-1.2-1.4-1.3-1.6c-0.1-0.2,0-0.4,0.1-0.5C8,8.8,8.1,8.7,8.2,8.5 c0.1-0.1,0.2-0.2,0.2-0.4c0.1-0.2,0-0.3,0-0.4C8.4,7.6,7.9,6.5,7.7,6C7.5,5.5,7.3,5.6,7.2,5.6c-0.1,0-0.3,0-0.4,0 c-0.2,0-0.4,0.1-0.6,0.3c-0.2,0.2-0.8,0.8-0.8,2c0,1.2,0.8,2.3,1,2.4c0.1,0.2,1.7,2.5,4,3.5c0.6,0.2,1,0.4,1.3,0.5 c0.6,0.2,1.1,0.2,1.5,0.1c0.5-0.1,1.4-0.6,1.6-1.1c0.2-0.5,0.2-1,0.1-1.1C14.8,12.1,14.6,12,14.4,11.9"/></svg>',
            wordpress: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10,0.5c-5.2,0-9.5,4.3-9.5,9.5s4.3,9.5,9.5,9.5c5.2,0,9.5-4.3,9.5-9.5S15.2,0.5,10,0.5L10,0.5L10,0.5z M15.6,3.9h-0.1 c-0.8,0-1.4,0.7-1.4,1.5c0,0.7,0.4,1.3,0.8,1.9c0.3,0.6,0.7,1.3,0.7,2.3c0,0.7-0.3,1.5-0.6,2.7L14.1,15l-3-8.9 c0.5,0,0.9-0.1,0.9-0.1C12.5,6,12.5,5.3,12,5.4c0,0-1.3,0.1-2.2,0.1C9,5.5,7.7,5.4,7.7,5.4C7.2,5.3,7.2,6,7.6,6c0,0,0.4,0.1,0.9,0.1 l1.3,3.5L8,15L5,6.1C5.5,6.1,5.9,6,5.9,6C6.4,6,6.3,5.3,5.9,5.4c0,0-1.3,0.1-2.2,0.1c-0.2,0-0.3,0-0.5,0c1.5-2.2,4-3.7,6.9-3.7 C12.2,1.7,14.1,2.6,15.6,3.9L15.6,3.9L15.6,3.9z M2.5,6.6l3.9,10.8c-2.7-1.3-4.6-4.2-4.6-7.4C1.8,8.8,2,7.6,2.5,6.6L2.5,6.6L2.5,6.6 z M10.2,10.7l2.5,6.9c0,0,0,0.1,0.1,0.1C11.9,18,11,18.2,10,18.2c-0.8,0-1.6-0.1-2.3-0.3L10.2,10.7L10.2,10.7L10.2,10.7z M14.2,17.1 l2.5-7.3c0.5-1.2,0.6-2.1,0.6-2.9c0-0.3,0-0.6-0.1-0.8c0.6,1.2,1,2.5,1,4C18.3,13,16.6,15.7,14.2,17.1L14.2,17.1L14.2,17.1z"/></svg>',
            world: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" d="M1,10.5 L19,10.5"/><path fill="none" stroke="#000" d="M2.35,15.5 L17.65,15.5"/><path fill="none" stroke="#000" d="M2.35,5.5 L17.523,5.5"/><path fill="none" stroke="#000" d="M10,19.46 L9.98,19.46 C7.31,17.33 5.61,14.141 5.61,10.58 C5.61,7.02 7.33,3.83 10,1.7 C10.01,1.7 9.99,1.7 10,1.7 L10,1.7 C12.67,3.83 14.4,7.02 14.4,10.58 C14.4,14.141 12.67,17.33 10,19.46 L10,19.46 L10,19.46 L10,19.46 Z"/><circle fill="none" stroke="#000" cx="10" cy="10.5" r="9"/></svg>',
            xing: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4.4,4.56 C4.24,4.56 4.11,4.61 4.05,4.72 C3.98,4.83 3.99,4.97 4.07,5.12 L5.82,8.16 L5.82,8.17 L3.06,13.04 C2.99,13.18 2.99,13.33 3.06,13.44 C3.12,13.55 3.24,13.62 3.4,13.62 L6,13.62 C6.39,13.62 6.57,13.36 6.71,13.12 C6.71,13.12 9.41,8.35 9.51,8.16 C9.49,8.14 7.72,5.04 7.72,5.04 C7.58,4.81 7.39,4.56 6.99,4.56 L4.4,4.56 L4.4,4.56 Z"/><path d="M15.3,1 C14.91,1 14.74,1.25 14.6,1.5 C14.6,1.5 9.01,11.42 8.82,11.74 C8.83,11.76 12.51,18.51 12.51,18.51 C12.64,18.74 12.84,19 13.23,19 L15.82,19 C15.98,19 16.1,18.94 16.16,18.83 C16.23,18.72 16.23,18.57 16.16,18.43 L12.5,11.74 L12.5,11.72 L18.25,1.56 C18.32,1.42 18.32,1.27 18.25,1.16 C18.21,1.06 18.08,1 17.93,1 L15.3,1 L15.3,1 Z"/></svg>',
            yelp: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.175,14.971c-0.112,0.77-1.686,2.767-2.406,3.054c-0.246,0.1-0.487,0.076-0.675-0.069\tc-0.122-0.096-2.446-3.859-2.446-3.859c-0.194-0.293-0.157-0.682,0.083-0.978c0.234-0.284,0.581-0.393,0.881-0.276\tc0.016,0.01,4.21,1.394,4.332,1.482c0.178,0.148,0.263,0.379,0.225,0.646L17.175,14.971L17.175,14.971z M11.464,10.789\tc-0.203-0.307-0.199-0.666,0.009-0.916c0,0,2.625-3.574,2.745-3.657c0.203-0.135,0.452-0.141,0.69-0.025\tc0.691,0.335,2.085,2.405,2.167,3.199v0.027c0.024,0.271-0.082,0.491-0.273,0.623c-0.132,0.083-4.43,1.155-4.43,1.155\tc-0.322,0.096-0.68-0.06-0.882-0.381L11.464,10.789z M9.475,9.563C9.32,9.609,8.848,9.757,8.269,8.817c0,0-3.916-6.16-4.007-6.351\tc-0.057-0.212,0.011-0.455,0.202-0.65C5.047,1.211,8.21,0.327,9.037,0.529c0.27,0.069,0.457,0.238,0.522,0.479\tc0.047,0.266,0.433,5.982,0.488,7.264C10.098,9.368,9.629,9.517,9.475,9.563z M9.927,19.066c-0.083,0.225-0.273,0.373-0.54,0.421\tc-0.762,0.13-3.15-0.751-3.647-1.342c-0.096-0.131-0.155-0.262-0.167-0.394c-0.011-0.095,0-0.189,0.036-0.272\tc0.061-0.155,2.917-3.538,2.917-3.538c0.214-0.272,0.595-0.355,0.952-0.213c0.345,0.13,0.56,0.428,0.536,0.749\tC10.014,14.479,9.977,18.923,9.927,19.066z M3.495,13.912c-0.235-0.009-0.444-0.148-0.568-0.382c-0.089-0.17-0.151-0.453-0.19-0.794\tC2.63,11.701,2.761,10.144,3.07,9.648c0.145-0.226,0.357-0.345,0.592-0.336c0.154,0,4.255,1.667,4.255,1.667\tc0.321,0.118,0.521,0.453,0.5,0.833c-0.023,0.37-0.236,0.655-0.551,0.738L3.495,13.912z"/></svg>',
            youtube: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15,4.1c1,0.1,2.3,0,3,0.8c0.8,0.8,0.9,2.1,0.9,3.1C19,9.2,19,10.9,19,12c-0.1,1.1,0,2.4-0.5,3.4c-0.5,1.1-1.4,1.5-2.5,1.6 c-1.2,0.1-8.6,0.1-11,0c-1.1-0.1-2.4-0.1-3.2-1c-0.7-0.8-0.7-2-0.8-3C1,11.8,1,10.1,1,8.9c0-1.1,0-2.4,0.5-3.4C2,4.5,3,4.3,4.1,4.2 C5.3,4.1,12.6,4,15,4.1z M8,7.5v6l5.5-3L8,7.5z"/></svg>'
        })
    }
    return "undefined" != typeof window && window.UIkit && window.UIkit.use(t), t
}));