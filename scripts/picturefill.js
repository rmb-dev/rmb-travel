! function(e) {
  var t = navigator.userAgent;
  e.HTMLPictureElement && /ecko/.test(t) && t.match(/rv\:(\d+)/) && RegExp.$1 < 45 && addEventListener("resize", function() {
    var t, r = document.createElement("source"),
      s = function(e) {
        var t, s, n = e.parentNode;
        "PICTURE" === n.nodeName.toUpperCase() ? (t = r.cloneNode(), n.insertBefore(t, n.firstElementChild), setTimeout(function() {
          n.removeChild(t)
        })) : (!e._pfLastSize || e.offsetWidth > e._pfLastSize) && (e._pfLastSize = e.offsetWidth, s = e.sizes, e.sizes += ",100vw", setTimeout(function() {
          e.sizes = s
        }))
      },
      n = function() {
        var e, t = document.querySelectorAll("picture > img, img[srcset][sizes]");
        for (e = 0; e < t.length; e++) s(t[e])
      },
      i = function() {
        clearTimeout(t), t = setTimeout(n, 99)
      },
      c = e.matchMedia && matchMedia("(orientation: landscape)"),
      a = function() {
        i(), c && c.addListener && c.addListener(i)
      };
    return r.srcset = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", /^[c|i]|d$/.test(document.readyState || "") ? a() : document.addEventListener("DOMContentLoaded", a), i
  }())
}(window),
function(e, t, r) {
  "use strict";

  function s(e) {
    return " " === e || "\t" === e || "\n" === e || "\f" === e || "\r" === e
  }

  function n() {
    B = !1, $ = e.devicePixelRatio, I = {}, U = {}, h.DPR = $ || 1, k.width = Math.max(e.innerWidth || 0, E.clientWidth), k.height = Math.max(e.innerHeight || 0, E.clientHeight), k.vw = k.width / 100, k.vh = k.height / 100, m = [k.height, k.width, $].join("-"), k.em = h.getEmValue(), k.rem = k.em
  }

  function i(e, t, r, s) {
    var n, i, c;
    return "saveData" === b.algorithm ? e > 2.7 ? c = r + 1 : (i = (t - r) * (n = Math.pow(e - .6, 1.5)), s && (i += .1 * n), c = e + i) : c = r > 1 ? Math.sqrt(e * t) : e, c > r
  }

  function c(e) {
    var t, r = h.getSet(e),
      s = !1;
    "pending" !== r && (s = m, r && (t = h.setRes(r), h.applySetCandidate(t, e))), e[h.ns].evaled = s
  }

  function a(e, t) {
    return e.res - t.res
  }

  function u(e, t, r) {
    var s;
    return !r && t && (r = (r = e[h.ns].sets) && r[r.length - 1]), (s = o(t, r)) && (t = h.makeUrl(t), e[h.ns].curSrc = t, e[h.ns].curCan = s, s.res || K(s, s.set.sizes)), s
  }

  function o(e, t) {
    var r, s, n;
    if (e && t)
      for (n = h.parseSet(t), e = h.makeUrl(e), r = 0; r < n.length; r++)
        if (e === h.makeUrl(n[r].url)) {
          s = n[r];
          break
        }
    return s
  }

  function l(e, t) {
    var r, s, n, i, c = e.getElementsByTagName("source");
    for (r = 0, s = c.length; r < s; r++)(n = c[r])[h.ns] = !0, (i = n.getAttribute("srcset")) && t.push({
      srcset: i,
      media: n.getAttribute("media"),
      type: n.getAttribute("type"),
      sizes: n.getAttribute("sizes")
    })
  }

  function f(e, t) {
    function r(t) {
      var r, s = t.exec(e.substring(f));
      if (s) return r = s[0], f += r.length, r
    }

    function n() {
      var e, r, s, n, a, u, o, l, f, p = !1,
        A = {};
      for (n = 0; n < c.length; n++) u = (a = c[n])[a.length - 1], o = a.substring(0, a.length - 1), l = parseInt(o, 10), f = parseFloat(o), O.test(o) && "w" === u ? ((e || r) && (p = !0), 0 === l ? p = !0 : e = l) : q.test(o) && "x" === u ? ((e || r || s) && (p = !0), f < 0 ? p = !0 : r = f) : O.test(o) && "h" === u ? ((s || r) && (p = !0), 0 === l ? p = !0 : s = l) : p = !0;
      p || (A.url = i, e && (A.w = e), r && (A.d = r), s && (A.h = s), s || r || e || (A.d = 1), 1 === A.d && (t.has1x = !0), A.set = t, d.push(A))
    }
    for (var i, c, a, u, o, l = e.length, f = 0, d = [];;) {
      if (r(H), f >= l) return d;
      i = r(F), c = [], "," === i.slice(-1) ? (i = i.replace(N, ""), n()) : function() {
        for (r(G), a = "", u = "in descriptor";;) {
          if (o = e.charAt(f), "in descriptor" === u)
            if (s(o)) a && (c.push(a), a = "", u = "after descriptor");
            else {
              if ("," === o) return f += 1, a && c.push(a), void n();
              if ("(" === o) a += o, u = "in parens";
              else {
                if ("" === o) return a && c.push(a), void n();
                a += o
              }
            }
          else if ("in parens" === u)
            if (")" === o) a += o, u = "in descriptor";
            else {
              if ("" === o) return c.push(a), void n();
              a += o
            }
          else if ("after descriptor" === u)
            if (s(o));
            else {
              if ("" === o) return void n();
              u = "in descriptor", f -= 1
            }
          f += 1
        }
      }()
    }
  }

  function d(e) {
    var t, r, n, i, c, a, u = /^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,
      o = /^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;
    for (n = (r = function(e) {
        function t() {
          i && (c.push(i), i = "")
        }

        function r() {
          c[0] && (a.push(c), c = [])
        }
        for (var n, i = "", c = [], a = [], u = 0, o = 0, l = !1;;) {
          if ("" === (n = e.charAt(o))) return t(), r(), a;
          if (l) {
            if ("*" === n && "/" === e[o + 1]) {
              l = !1, o += 2, t();
              continue
            }
            o += 1
          } else {
            if (s(n)) {
              if (e.charAt(o - 1) && s(e.charAt(o - 1)) || !i) {
                o += 1;
                continue
              }
              if (0 === u) {
                t(), o += 1;
                continue
              }
              n = " "
            } else if ("(" === n) u += 1;
            else if (")" === n) u -= 1;
            else {
              if ("," === n) {
                t(), r(), o += 1;
                continue
              }
              if ("/" === n && "*" === e.charAt(o + 1)) {
                l = !0, o += 2;
                continue
              }
            }
            i += n, o += 1
          }
        }
      }(e)).length, t = 0; t < n; t++)
      if (i = r[t], c = i[i.length - 1], function(e) {
          return !!(u.test(e) && parseFloat(e) >= 0) || !!o.test(e) || "0" === e || "-0" === e || "+0" === e
        }(c)) {
        if (a = c, i.pop(), 0 === i.length) return a;
        if (i = i.join(" "), h.matchesMedia(i)) return a
      }
    return "100vw"
  }
  t.createElement("picture");
  var p, A, m, h = {},
    g = !1,
    v = function() {},
    w = t.createElement("img"),
    S = w.getAttribute,
    x = w.setAttribute,
    y = w.removeAttribute,
    E = t.documentElement,
    z = {},
    b = {
      algorithm: ""
    },
    T = navigator.userAgent,
    C = /rident/.test(T) || /ecko/.test(T) && T.match(/rv\:(\d+)/) && RegExp.$1 > 35,
    R = "currentSrc",
    L = /\s+\+?\d+(e\d+)?w/,
    M = /(\([^)]+\))?\s*(.+)/,
    P = e.picturefillCFG,
    D = "font-size:100%!important;",
    B = !0,
    I = {},
    U = {},
    $ = e.devicePixelRatio,
    k = {
      px: 1,
      in: 96
    },
    W = t.createElement("a"),
    Q = !1,
    G = /^[ \t\n\r\u000c]+/,
    H = /^[, \t\n\r\u000c]+/,
    F = /^[^ \t\n\r\u000c]+/,
    N = /[,]+$/,
    O = /^\d+$/,
    q = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,
    j = function(e, t, r, s) {
      e.addEventListener ? e.addEventListener(t, r, s || !1) : e.attachEvent && e.attachEvent("on" + t, r)
    },
    V = function(e) {
      var t = {};
      return function(r) {
        return r in t || (t[r] = e(r)), t[r]
      }
    },
    _ = function() {
      var e = /^([\d\.]+)(em|vw|px)$/,
        t = function() {
          for (var e = arguments, t = 0, r = e[0]; ++t in e;) r = r.replace(e[t], e[++t]);
          return r
        },
        r = V(function(e) {
          return "return " + t((e || "").toLowerCase(), /\band\b/g, "&&", /,/g, "||", /min-([a-z-\s]+):/g, "e.$1>=", /max-([a-z-\s]+):/g, "e.$1<=", /calc([^)]+)/g, "($1)", /(\d+[\.]*[\d]*)([a-z]+)/g, "($1 * e.$2)", /^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi, "") + ";"
        });
      return function(t, s) {
        var n;
        if (!(t in I))
          if (I[t] = !1, s && (n = t.match(e))) I[t] = n[1] * k[n[2]];
          else try {
            I[t] = new Function("e", r(t))(k)
          } catch (e) {}
        return I[t]
      }
    }(),
    K = function(e, t) {
      return e.w ? (e.cWidth = h.calcListLength(t || "100vw"), e.res = e.w / e.cWidth) : e.res = e.d, e
    },
    J = function(e) {
      if (g) {
        var r, s, n, i = e || {};
        if (i.elements && 1 === i.elements.nodeType && ("IMG" === i.elements.nodeName.toUpperCase() ? i.elements = [i.elements] : (i.context = i.elements, i.elements = null)), r = i.elements || h.qsa(i.context || t, i.reevaluate || i.reselect ? h.sel : h.selShort), n = r.length) {
          for (h.setupRun(i), Q = !0, s = 0; s < n; s++) h.fillImg(r[s], i);
          h.teardownRun(i)
        }
      }
    };
  e.console && console.warn, R in w || (R = "src"), z["image/jpeg"] = !0, z["image/gif"] = !0, z["image/png"] = !0, z["image/svg+xml"] = t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1"), h.ns = ("pf" + (new Date).getTime()).substr(0, 9), h.supSrcset = "srcset" in w, h.supSizes = "sizes" in w, h.supPicture = !!e.HTMLPictureElement, h.supSrcset && h.supPicture && !h.supSizes && function(e) {
    w.srcset = "data:,a", e.src = "data:,a", h.supSrcset = w.complete === e.complete, h.supPicture = h.supSrcset && h.supPicture
  }(t.createElement("img")), h.supSrcset && !h.supSizes ? function() {
    var e = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
      r = t.createElement("img"),
      s = function() {
        2 === r.width && (h.supSizes = !0), A = h.supSrcset && !h.supSizes, g = !0, setTimeout(J)
      };
    r.onload = s, r.onerror = s, r.setAttribute("sizes", "9px"), r.srcset = e + " 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w", r.src = e
  }() : g = !0, h.selShort = "picture>img,img[srcset]", h.sel = h.selShort, h.cfg = b, h.DPR = $ || 1, h.u = k, h.types = z, h.setSize = v, h.makeUrl = V(function(e) {
    return W.href = e, W.href
  }), h.qsa = function(e, t) {
    return "querySelector" in e ? e.querySelectorAll(t) : []
  }, h.matchesMedia = function() {
    return e.matchMedia && (matchMedia("(min-width: 0.1em)") || {}).matches ? h.matchesMedia = function(e) {
      return !e || matchMedia(e).matches
    } : h.matchesMedia = h.mMQ, h.matchesMedia.apply(this, arguments)
  }, h.mMQ = function(e) {
    return !e || _(e)
  }, h.calcLength = function(e) {
    var t = _(e, !0) || !1;
    return t < 0 && (t = !1), t
  }, h.supportsType = function(e) {
    return !e || z[e]
  }, h.parseSize = V(function(e) {
    var t = (e || "").match(M);
    return {
      media: t && t[1],
      length: t && t[2]
    }
  }), h.parseSet = function(e) {
    return e.cands || (e.cands = f(e.srcset, e)), e.cands
  }, h.getEmValue = function() {
    var e;
    if (!p && (e = t.body)) {
      var r = t.createElement("div"),
        s = E.style.cssText,
        n = e.style.cssText;
      r.style.cssText = "position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)", E.style.cssText = D, e.style.cssText = D, e.appendChild(r), p = r.offsetWidth, e.removeChild(r), p = parseFloat(p, 10), E.style.cssText = s, e.style.cssText = n
    }
    return p || 16
  }, h.calcListLength = function(e) {
    if (!(e in U) || b.uT) {
      var t = h.calcLength(d(e));
      U[e] = t || k.width
    }
    return U[e]
  }, h.setRes = function(e) {
    var t;
    if (e)
      for (var r = 0, s = (t = h.parseSet(e)).length; r < s; r++) K(t[r], e.sizes);
    return t
  }, h.setRes.res = K, h.applySetCandidate = function(e, t) {
    if (e.length) {
      var r, s, n, c, o, l, f, d, p, A = t[h.ns],
        m = h.DPR;
      if (l = A.curSrc || t[R], (f = A.curCan || u(t, l, e[0].set)) && f.set === e[0].set && ((p = C && !t.complete && f.res - .1 > m) || (f.cached = !0, f.res >= m && (o = f))), !o)
        for (e.sort(a), o = e[(c = e.length) - 1], s = 0; s < c; s++)
          if ((r = e[s]).res >= m) {
            o = e[n = s - 1] && (p || l !== h.makeUrl(r.url)) && i(e[n].res, r.res, m, e[n].cached) ? e[n] : r;
            break
          }
      o && (d = h.makeUrl(o.url), A.curSrc = d, A.curCan = o, d !== l && h.setSrc(t, o), h.setSize(t))
    }
  }, h.setSrc = function(e, t) {
    var r;
    e.src = t.url, "image/svg+xml" === t.set.type && (r = e.style.width, e.style.width = e.offsetWidth + 1 + "px", e.offsetWidth + 1 && (e.style.width = r))
  }, h.getSet = function(e) {
    var t, r, s, n = !1,
      i = e[h.ns].sets;
    for (t = 0; t < i.length && !n; t++)
      if ((r = i[t]).srcset && h.matchesMedia(r.media) && (s = h.supportsType(r.type))) {
        "pending" === s && (r = s), n = r;
        break
      }
    return n
  }, h.parseSets = function(e, t, r) {
    var s, n, i, c, a = t && "PICTURE" === t.nodeName.toUpperCase(),
      u = e[h.ns];
    (void 0 === u.src || r.src) && (u.src = S.call(e, "src"), u.src ? x.call(e, "data-pfsrc", u.src) : y.call(e, "data-pfsrc")), (void 0 === u.srcset || r.srcset || !h.supSrcset || e.srcset) && (s = S.call(e, "srcset"), u.srcset = s, c = !0), u.sets = [], a && (u.pic = !0, l(t, u.sets)), u.srcset ? (n = {
      srcset: u.srcset,
      sizes: S.call(e, "sizes")
    }, u.sets.push(n), (i = (A || u.src) && L.test(u.srcset || "")) || !u.src || o(u.src, n) || n.has1x || (n.srcset += ", " + u.src, n.cands.push({
      url: u.src,
      d: 1,
      set: n
    }))) : u.src && u.sets.push({
      srcset: u.src,
      sizes: null
    }), u.curCan = null, u.curSrc = void 0, u.supported = !(a || n && !h.supSrcset || i && !h.supSizes), c && h.supSrcset && !u.supported && (s ? (x.call(e, "data-pfsrcset", s), e.srcset = "") : y.call(e, "data-pfsrcset")), u.supported && !u.srcset && (!u.src && e.src || e.src !== h.makeUrl(u.src)) && (null === u.src ? e.removeAttribute("src") : e.src = u.src), u.parsed = !0
  }, h.fillImg = function(e, t) {
    var r, s = t.reselect || t.reevaluate;
    e[h.ns] || (e[h.ns] = {}), r = e[h.ns], (s || r.evaled !== m) && (r.parsed && !t.reevaluate || h.parseSets(e, e.parentNode, t), r.supported ? r.evaled = m : c(e))
  }, h.setupRun = function() {
    Q && !B && $ === e.devicePixelRatio || n()
  }, h.supPicture ? (J = v, h.fillImg = v) : function() {
    var r, s = e.attachEvent ? /d$|^c/ : /d$|^c|^i/,
      n = function() {
        var e = t.readyState || "";
        i = setTimeout(n, "loading" === e ? 200 : 999), t.body && (h.fillImgs(), (r = r || s.test(e)) && clearTimeout(i))
      },
      i = setTimeout(n, t.body ? 9 : 99),
      c = E.clientHeight;
    j(e, "resize", function(e, t) {
      var r, s, n = function() {
        var i = new Date - s;
        i < t ? r = setTimeout(n, t - i) : (r = null, e())
      };
      return function() {
        s = new Date, r || (r = setTimeout(n, t))
      }
    }(function() {
      B = Math.max(e.innerWidth || 0, E.clientWidth) !== k.width || E.clientHeight !== c, c = E.clientHeight, B && h.fillImgs()
    }, 99)), j(t, "readystatechange", n)
  }(), h.picturefill = J, h.fillImgs = J, h.teardownRun = v, J._ = h, e.picturefillCFG = {
    pf: h,
    push: function(e) {
      var t = e.shift();
      "function" == typeof h[t] ? h[t].apply(h, e) : (b[t] = e[0], Q && h.fillImgs({
        reselect: !0
      }))
    }
  };
  for (; P && P.length;) e.picturefillCFG.push(P.shift());
  e.picturefill = J, "object" == typeof module && "object" == typeof module.exports ? module.exports = J : "function" == typeof define && define.amd && define("picturefill", function() {
    return J
  }), h.supPicture || (z["image/webp"] = function(t, r) {
    var s = new e.Image;
    return s.onerror = function() {
      z[t] = !1, J()
    }, s.onload = function() {
      z[t] = 1 === s.width, J()
    }, s.src = r, "pending"
  }("image/webp", "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="))
}(window, document);
