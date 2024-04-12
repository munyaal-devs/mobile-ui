/* eslint-disable */
//prettier-ignore
module.exports = {
  name: "@yarnpkg/plugin-workspace-tools",
  factory: function (require) {
    var plugin = (() => {
      var yr = Object.create;
      var we = Object.defineProperty;
      var _r = Object.getOwnPropertyDescriptor;
      var Er = Object.getOwnPropertyNames;
      var br = Object.getPrototypeOf, xr = Object.prototype.hasOwnProperty;
      var W = (e => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, {get: (r, t) => (typeof require < "u" ? require : r)[t]}) : e)(function (e) {
        if (typeof require < "u") return require.apply(this, arguments);
        throw new Error('Dynamic require of "' + e + '" is not supported')
      });
      var q = (e, r) => () => (r || e((r = {exports: {}}).exports, r), r.exports), Cr = (e, r) => {
        for (var t in r) we(e, t, {get: r[t], enumerable: !0})
      }, Je = (e, r, t, n) => {
        if (r && typeof r == "object" || typeof r == "function") for (let s of Er(r)) !xr.call(e, s) && s !== t && we(e, s, {
          get: () => r[s],
          enumerable: !(n = _r(r, s)) || n.enumerable
        });
        return e
      };
      var Be = (e, r, t) => (t = e != null ? yr(br(e)) : {}, Je(r || !e || !e.__esModule ? we(t, "default", {
        value: e,
        enumerable: !0
      }) : t, e)), wr = e => Je(we({}, "__esModule", {value: !0}), e);
      var ve = q(ee => {
        "use strict";
        ee.isInteger = e => typeof e == "number" ? Number.isInteger(e) : typeof e == "string" && e.trim() !== "" ? Number.isInteger(Number(e)) : !1;
        ee.find = (e, r) => e.nodes.find(t => t.type === r);
        ee.exceedsLimit = (e, r, t = 1, n) => n === !1 || !ee.isInteger(e) || !ee.isInteger(r) ? !1 : (Number(r) - Number(e)) / Number(t) >= n;
        ee.escapeNode = (e, r = 0, t) => {
          let n = e.nodes[r];
          !n || (t && n.type === t || n.type === "open" || n.type === "close") && n.escaped !== !0 && (n.value = "\\" + n.value, n.escaped = !0)
        };
        ee.encloseBrace = e => e.type !== "brace" ? !1 : e.commas >> 0 + e.ranges >> 0 === 0 ? (e.invalid = !0, !0) : !1;
        ee.isInvalidBrace = e => e.type !== "brace" ? !1 : e.invalid === !0 || e.dollar ? !0 : e.commas >> 0 + e.ranges >> 0 === 0 || e.open !== !0 || e.close !== !0 ? (e.invalid = !0, !0) : !1;
        ee.isOpenOrClose = e => e.type === "open" || e.type === "close" ? !0 : e.open === !0 || e.close === !0;
        ee.reduce = e => e.reduce((r, t) => (t.type === "text" && r.push(t.value), t.type === "range" && (t.type = "text"), r), []);
        ee.flatten = (...e) => {
          let r = [], t = n => {
            for (let s = 0; s < n.length; s++) {
              let i = n[s];
              Array.isArray(i) ? t(i, r) : i !== void 0 && r.push(i)
            }
            return r
          };
          return t(e), r
        }
      });
      var He = q((zn, rt) => {
        "use strict";
        var tt = ve();
        rt.exports = (e, r = {}) => {
          let t = (n, s = {}) => {
            let i = r.escapeInvalid && tt.isInvalidBrace(s), a = n.invalid === !0 && r.escapeInvalid === !0, c = "";
            if (n.value) return (i || a) && tt.isOpenOrClose(n) ? "\\" + n.value : n.value;
            if (n.value) return n.value;
            if (n.nodes) for (let p of n.nodes) c += t(p);
            return c
          };
          return t(e)
        }
      });
      var st = q((Vn, nt) => {
        "use strict";
        nt.exports = function (e) {
          return typeof e == "number" ? e - e === 0 : typeof e == "string" && e.trim() !== "" ? Number.isFinite ? Number.isFinite(+e) : isFinite(+e) : !1
        }
      });
      var ht = q((Jn, pt) => {
        "use strict";
        var at = st(), le = (e, r, t) => {
          if (at(e) === !1) throw new TypeError("toRegexRange: expected the first argument to be a number");
          if (r === void 0 || e === r) return String(e);
          if (at(r) === !1) throw new TypeError("toRegexRange: expected the second argument to be a number.");
          let n = {relaxZeros: !0, ...t};
          typeof n.strictZeros == "boolean" && (n.relaxZeros = n.strictZeros === !1);
          let s = String(n.relaxZeros), i = String(n.shorthand), a = String(n.capture), c = String(n.wrap),
            p = e + ":" + r + "=" + s + i + a + c;
          if (le.cache.hasOwnProperty(p)) return le.cache[p].result;
          let m = Math.min(e, r), h = Math.max(e, r);
          if (Math.abs(m - h) === 1) {
            let y = e + "|" + r;
            return n.capture ? `(${y})` : n.wrap === !1 ? y : `(?:${y})`
          }
          let R = ft(e) || ft(r), f = {min: e, max: r, a: m, b: h}, $ = [], _ = [];
          if (R && (f.isPadded = R, f.maxLen = String(f.max).length), m < 0) {
            let y = h < 0 ? Math.abs(h) : 1;
            _ = it(y, Math.abs(m), f, n), m = f.a = 0
          }
          return h >= 0 && ($ = it(m, h, f, n)), f.negatives = _, f.positives = $, f.result = Sr(_, $, n), n.capture === !0 ? f.result = `(${f.result})` : n.wrap !== !1 && $.length + _.length > 1 && (f.result = `(?:${f.result})`), le.cache[p] = f, f.result
        };

        function Sr(e, r, t) {
          let n = Pe(e, r, "-", !1, t) || [], s = Pe(r, e, "", !1, t) || [], i = Pe(e, r, "-?", !0, t) || [];
          return n.concat(i).concat(s).join("|")
        }

        function vr(e, r) {
          let t = 1, n = 1, s = ut(e, t), i = new Set([r]);
          for (; e <= s && s <= r;) i.add(s), t += 1, s = ut(e, t);
          for (s = ct(r + 1, n) - 1; e < s && s <= r;) i.add(s), n += 1, s = ct(r + 1, n) - 1;
          return i = [...i], i.sort(Tr), i
        }

        function Hr(e, r, t) {
          if (e === r) return {pattern: e, count: [], digits: 0};
          let n = $r(e, r), s = n.length, i = "", a = 0;
          for (let c = 0; c < s; c++) {
            let [p, m] = n[c];
            p === m ? i += p : p !== "0" || m !== "9" ? i += kr(p, m, t) : a++
          }
          return a && (i += t.shorthand === !0 ? "\\d" : "[0-9]"), {pattern: i, count: [a], digits: s}
        }

        function it(e, r, t, n) {
          let s = vr(e, r), i = [], a = e, c;
          for (let p = 0; p < s.length; p++) {
            let m = s[p], h = Hr(String(a), String(m), n), R = "";
            if (!t.isPadded && c && c.pattern === h.pattern) {
              c.count.length > 1 && c.count.pop(), c.count.push(h.count[0]), c.string = c.pattern + lt(c.count), a = m + 1;
              continue
            }
            t.isPadded && (R = Lr(m, t, n)), h.string = R + h.pattern + lt(h.count), i.push(h), a = m + 1, c = h
          }
          return i
        }

        function Pe(e, r, t, n, s) {
          let i = [];
          for (let a of e) {
            let {string: c} = a;
            !n && !ot(r, "string", c) && i.push(t + c), n && ot(r, "string", c) && i.push(t + c)
          }
          return i
        }

        function $r(e, r) {
          let t = [];
          for (let n = 0; n < e.length; n++) t.push([e[n], r[n]]);
          return t
        }

        function Tr(e, r) {
          return e > r ? 1 : r > e ? -1 : 0
        }

        function ot(e, r, t) {
          return e.some(n => n[r] === t)
        }

        function ut(e, r) {
          return Number(String(e).slice(0, -r) + "9".repeat(r))
        }

        function ct(e, r) {
          return e - e % Math.pow(10, r)
        }

        function lt(e) {
          let [r = 0, t = ""] = e;
          return t || r > 1 ? `{${r + (t ? "," + t : "")}}` : ""
        }

        function kr(e, r, t) {
          return `[${e}${r - e === 1 ? "" : "-"}${r}]`
        }

        function ft(e) {
          return /^-?(0+)\d/.test(e)
        }

        function Lr(e, r, t) {
          if (!r.isPadded) return e;
          let n = Math.abs(r.maxLen - String(e).length), s = t.relaxZeros !== !1;
          switch (n) {
            case 0:
              return "";
            case 1:
              return s ? "0?" : "0";
            case 2:
              return s ? "0{0,2}" : "00";
            default:
              return s ? `0{0,${n}}` : `0{${n}}`
          }
        }

        le.cache = {};
        le.clearCache = () => le.cache = {};
        pt.exports = le
      });
      var Ue = q((es, Et) => {
        "use strict";
        var Or = W("util"), At = ht(), dt = e => e !== null && typeof e == "object" && !Array.isArray(e),
          Nr = e => r => e === !0 ? Number(r) : String(r),
          Me = e => typeof e == "number" || typeof e == "string" && e !== "", Ae = e => Number.isInteger(+e),
          De = e => {
            let r = `${e}`, t = -1;
            if (r[0] === "-" && (r = r.slice(1)), r === "0") return !1;
            for (; r[++t] === "0";) ;
            return t > 0
          }, Ir = (e, r, t) => typeof e == "string" || typeof r == "string" ? !0 : t.stringify === !0,
          Br = (e, r, t) => {
            if (r > 0) {
              let n = e[0] === "-" ? "-" : "";
              n && (e = e.slice(1)), e = n + e.padStart(n ? r - 1 : r, "0")
            }
            return t === !1 ? String(e) : e
          }, gt = (e, r) => {
            let t = e[0] === "-" ? "-" : "";
            for (t && (e = e.slice(1), r--); e.length < r;) e = "0" + e;
            return t ? "-" + e : e
          }, Pr = (e, r) => {
            e.negatives.sort((a, c) => a < c ? -1 : a > c ? 1 : 0), e.positives.sort((a, c) => a < c ? -1 : a > c ? 1 : 0);
            let t = r.capture ? "" : "?:", n = "", s = "", i;
            return e.positives.length && (n = e.positives.join("|")), e.negatives.length && (s = `-(${t}${e.negatives.join("|")})`), n && s ? i = `${n}|${s}` : i = n || s, r.wrap ? `(${t}${i})` : i
          }, mt = (e, r, t, n) => {
            if (t) return At(e, r, {wrap: !1, ...n});
            let s = String.fromCharCode(e);
            if (e === r) return s;
            let i = String.fromCharCode(r);
            return `[${s}-${i}]`
          }, Rt = (e, r, t) => {
            if (Array.isArray(e)) {
              let n = t.wrap === !0, s = t.capture ? "" : "?:";
              return n ? `(${s}${e.join("|")})` : e.join("|")
            }
            return At(e, r, t)
          }, yt = (...e) => new RangeError("Invalid range arguments: " + Or.inspect(...e)), _t = (e, r, t) => {
            if (t.strictRanges === !0) throw yt([e, r]);
            return []
          }, Mr = (e, r) => {
            if (r.strictRanges === !0) throw new TypeError(`Expected step "${e}" to be a number`);
            return []
          }, Dr = (e, r, t = 1, n = {}) => {
            let s = Number(e), i = Number(r);
            if (!Number.isInteger(s) || !Number.isInteger(i)) {
              if (n.strictRanges === !0) throw yt([e, r]);
              return []
            }
            s === 0 && (s = 0), i === 0 && (i = 0);
            let a = s > i, c = String(e), p = String(r), m = String(t);
            t = Math.max(Math.abs(t), 1);
            let h = De(c) || De(p) || De(m), R = h ? Math.max(c.length, p.length, m.length) : 0,
              f = h === !1 && Ir(e, r, n) === !1, $ = n.transform || Nr(f);
            if (n.toRegex && t === 1) return mt(gt(e, R), gt(r, R), !0, n);
            let _ = {negatives: [], positives: []}, y = T => _[T < 0 ? "negatives" : "positives"].push(Math.abs(T)),
              E = [], S = 0;
            for (; a ? s >= i : s <= i;) n.toRegex === !0 && t > 1 ? y(s) : E.push(Br($(s, S), R, f)), s = a ? s - t : s + t, S++;
            return n.toRegex === !0 ? t > 1 ? Pr(_, n) : Rt(E, null, {wrap: !1, ...n}) : E
          }, Ur = (e, r, t = 1, n = {}) => {
            if (!Ae(e) && e.length > 1 || !Ae(r) && r.length > 1) return _t(e, r, n);
            let s = n.transform || (f => String.fromCharCode(f)), i = `${e}`.charCodeAt(0), a = `${r}`.charCodeAt(0),
              c = i > a, p = Math.min(i, a), m = Math.max(i, a);
            if (n.toRegex && t === 1) return mt(p, m, !1, n);
            let h = [], R = 0;
            for (; c ? i >= a : i <= a;) h.push(s(i, R)), i = c ? i - t : i + t, R++;
            return n.toRegex === !0 ? Rt(h, null, {wrap: !1, options: n}) : h
          }, $e = (e, r, t, n = {}) => {
            if (r == null && Me(e)) return [e];
            if (!Me(e) || !Me(r)) return _t(e, r, n);
            if (typeof t == "function") return $e(e, r, 1, {transform: t});
            if (dt(t)) return $e(e, r, 0, t);
            let s = {...n};
            return s.capture === !0 && (s.wrap = !0), t = t || s.step || 1, Ae(t) ? Ae(e) && Ae(r) ? Dr(e, r, t, s) : Ur(e, r, Math.max(Math.abs(t), 1), s) : t != null && !dt(t) ? Mr(t, s) : $e(e, r, 1, t)
          };
        Et.exports = $e
      });
      var Ct = q((ts, xt) => {
        "use strict";
        var Gr = Ue(), bt = ve(), qr = (e, r = {}) => {
          let t = (n, s = {}) => {
            let i = bt.isInvalidBrace(s), a = n.invalid === !0 && r.escapeInvalid === !0, c = i === !0 || a === !0,
              p = r.escapeInvalid === !0 ? "\\" : "", m = "";
            if (n.isOpen === !0 || n.isClose === !0) return p + n.value;
            if (n.type === "open") return c ? p + n.value : "(";
            if (n.type === "close") return c ? p + n.value : ")";
            if (n.type === "comma") return n.prev.type === "comma" ? "" : c ? n.value : "|";
            if (n.value) return n.value;
            if (n.nodes && n.ranges > 0) {
              let h = bt.reduce(n.nodes), R = Gr(...h, {...r, wrap: !1, toRegex: !0});
              if (R.length !== 0) return h.length > 1 && R.length > 1 ? `(${R})` : R
            }
            if (n.nodes) for (let h of n.nodes) m += t(h, n);
            return m
          };
          return t(e)
        };
        xt.exports = qr
      });
      var vt = q((rs, St) => {
        "use strict";
        var Kr = Ue(), wt = He(), he = ve(), fe = (e = "", r = "", t = !1) => {
          let n = [];
          if (e = [].concat(e), r = [].concat(r), !r.length) return e;
          if (!e.length) return t ? he.flatten(r).map(s => `{${s}}`) : r;
          for (let s of e) if (Array.isArray(s)) for (let i of s) n.push(fe(i, r, t)); else for (let i of r) t === !0 && typeof i == "string" && (i = `{${i}}`), n.push(Array.isArray(i) ? fe(s, i, t) : s + i);
          return he.flatten(n)
        }, Wr = (e, r = {}) => {
          let t = r.rangeLimit === void 0 ? 1e3 : r.rangeLimit, n = (s, i = {}) => {
            s.queue = [];
            let a = i, c = i.queue;
            for (; a.type !== "brace" && a.type !== "root" && a.parent;) a = a.parent, c = a.queue;
            if (s.invalid || s.dollar) {
              c.push(fe(c.pop(), wt(s, r)));
              return
            }
            if (s.type === "brace" && s.invalid !== !0 && s.nodes.length === 2) {
              c.push(fe(c.pop(), ["{}"]));
              return
            }
            if (s.nodes && s.ranges > 0) {
              let R = he.reduce(s.nodes);
              if (he.exceedsLimit(...R, r.step, t)) throw new RangeError("expanded array length exceeds range limit. Use options.rangeLimit to increase or disable the limit.");
              let f = Kr(...R, r);
              f.length === 0 && (f = wt(s, r)), c.push(fe(c.pop(), f)), s.nodes = [];
              return
            }
            let p = he.encloseBrace(s), m = s.queue, h = s;
            for (; h.type !== "brace" && h.type !== "root" && h.parent;) h = h.parent, m = h.queue;
            for (let R = 0; R < s.nodes.length; R++) {
              let f = s.nodes[R];
              if (f.type === "comma" && s.type === "brace") {
                R === 1 && m.push(""), m.push("");
                continue
              }
              if (f.type === "close") {
                c.push(fe(c.pop(), m, p));
                continue
              }
              if (f.value && f.type !== "open") {
                m.push(fe(m.pop(), f.value));
                continue
              }
              f.nodes && n(f, s)
            }
            return m
          };
          return he.flatten(n(e))
        };
        St.exports = Wr
      });
      var $t = q((ns, Ht) => {
        "use strict";
        Ht.exports = {
          MAX_LENGTH: 1024 * 64,
          CHAR_0: "0",
          CHAR_9: "9",
          CHAR_UPPERCASE_A: "A",
          CHAR_LOWERCASE_A: "a",
          CHAR_UPPERCASE_Z: "Z",
          CHAR_LOWERCASE_Z: "z",
          CHAR_LEFT_PARENTHESES: "(",
          CHAR_RIGHT_PARENTHESES: ")",
          CHAR_ASTERISK: "*",
          CHAR_AMPERSAND: "&",
          CHAR_AT: "@",
          CHAR_BACKSLASH: "\\",
          CHAR_BACKTICK: "`",
          CHAR_CARRIAGE_RETURN: "\r",
          CHAR_CIRCUMFLEX_ACCENT: "^",
          CHAR_COLON: ":",
          CHAR_COMMA: ",",
          CHAR_DOLLAR: "$",
          CHAR_DOT: ".",
          CHAR_DOUBLE_QUOTE: '"',
          CHAR_EQUAL: "=",
          CHAR_EXCLAMATION_MARK: "!",
          CHAR_FORM_FEED: "\f",
          CHAR_FORWARD_SLASH: "/",
          CHAR_HASH: "#",
          CHAR_HYPHEN_MINUS: "-",
          CHAR_LEFT_ANGLE_BRACKET: "<",
          CHAR_LEFT_CURLY_BRACE: "{",
          CHAR_LEFT_SQUARE_BRACKET: "[",
          CHAR_LINE_FEED: `
`,
          CHAR_NO_BREAK_SPACE: "\xA0",
          CHAR_PERCENT: "%",
          CHAR_PLUS: "+",
          CHAR_QUESTION_MARK: "?",
          CHAR_RIGHT_ANGLE_BRACKET: ">",
          CHAR_RIGHT_CURLY_BRACE: "}",
          CHAR_RIGHT_SQUARE_BRACKET: "]",
          CHAR_SEMICOLON: ";",
          CHAR_SINGLE_QUOTE: "'",
          CHAR_SPACE: " ",
          CHAR_TAB: "	",
          CHAR_UNDERSCORE: "_",
          CHAR_VERTICAL_LINE: "|",
          CHAR_ZERO_WIDTH_NOBREAK_SPACE: "\uFEFF"
        }
      });
      var Nt = q((ss, Ot) => {
        "use strict";
        var jr = He(), {
          MAX_LENGTH: Tt,
          CHAR_BACKSLASH: Ge,
          CHAR_BACKTICK: Fr,
          CHAR_COMMA: Qr,
          CHAR_DOT: Xr,
          CHAR_LEFT_PARENTHESES: Zr,
          CHAR_RIGHT_PARENTHESES: Yr,
          CHAR_LEFT_CURLY_BRACE: zr,
          CHAR_RIGHT_CURLY_BRACE: Vr,
          CHAR_LEFT_SQUARE_BRACKET: kt,
          CHAR_RIGHT_SQUARE_BRACKET: Lt,
          CHAR_DOUBLE_QUOTE: Jr,
          CHAR_SINGLE_QUOTE: en,
          CHAR_NO_BREAK_SPACE: tn,
          CHAR_ZERO_WIDTH_NOBREAK_SPACE: rn
        } = $t(), nn = (e, r = {}) => {
          if (typeof e != "string") throw new TypeError("Expected a string");
          let t = r || {}, n = typeof t.maxLength == "number" ? Math.min(Tt, t.maxLength) : Tt;
          if (e.length > n) throw new SyntaxError(`Input length (${e.length}), exceeds max characters (${n})`);
          let s = {type: "root", input: e, nodes: []}, i = [s], a = s, c = s, p = 0, m = e.length, h = 0, R = 0, f,
            $ = {}, _ = () => e[h++], y = E => {
              if (E.type === "text" && c.type === "dot" && (c.type = "text"), c && c.type === "text" && E.type === "text") {
                c.value += E.value;
                return
              }
              return a.nodes.push(E), E.parent = a, E.prev = c, c = E, E
            };
          for (y({type: "bos"}); h < m;) if (a = i[i.length - 1], f = _(), !(f === rn || f === tn)) {
            if (f === Ge) {
              y({type: "text", value: (r.keepEscaping ? f : "") + _()});
              continue
            }
            if (f === Lt) {
              y({type: "text", value: "\\" + f});
              continue
            }
            if (f === kt) {
              p++;
              let E = !0, S;
              for (; h < m && (S = _());) {
                if (f += S, S === kt) {
                  p++;
                  continue
                }
                if (S === Ge) {
                  f += _();
                  continue
                }
                if (S === Lt && (p--, p === 0)) break
              }
              y({type: "text", value: f});
              continue
            }
            if (f === Zr) {
              a = y({type: "paren", nodes: []}), i.push(a), y({type: "text", value: f});
              continue
            }
            if (f === Yr) {
              if (a.type !== "paren") {
                y({type: "text", value: f});
                continue
              }
              a = i.pop(), y({type: "text", value: f}), a = i[i.length - 1];
              continue
            }
            if (f === Jr || f === en || f === Fr) {
              let E = f, S;
              for (r.keepQuotes !== !0 && (f = ""); h < m && (S = _());) {
                if (S === Ge) {
                  f += S + _();
                  continue
                }
                if (S === E) {
                  r.keepQuotes === !0 && (f += S);
                  break
                }
                f += S
              }
              y({type: "text", value: f});
              continue
            }
            if (f === zr) {
              R++;
              let E = c.value && c.value.slice(-1) === "$" || a.dollar === !0;
              a = y({
                type: "brace",
                open: !0,
                close: !1,
                dollar: E,
                depth: R,
                commas: 0,
                ranges: 0,
                nodes: []
              }), i.push(a), y({type: "open", value: f});
              continue
            }
            if (f === Vr) {
              if (a.type !== "brace") {
                y({type: "text", value: f});
                continue
              }
              let E = "close";
              a = i.pop(), a.close = !0, y({type: E, value: f}), R--, a = i[i.length - 1];
              continue
            }
            if (f === Qr && R > 0) {
              if (a.ranges > 0) {
                a.ranges = 0;
                let E = a.nodes.shift();
                a.nodes = [E, {type: "text", value: jr(a)}]
              }
              y({type: "comma", value: f}), a.commas++;
              continue
            }
            if (f === Xr && R > 0 && a.commas === 0) {
              let E = a.nodes;
              if (R === 0 || E.length === 0) {
                y({type: "text", value: f});
                continue
              }
              if (c.type === "dot") {
                if (a.range = [], c.value += f, c.type = "range", a.nodes.length !== 3 && a.nodes.length !== 5) {
                  a.invalid = !0, a.ranges = 0, c.type = "text";
                  continue
                }
                a.ranges++, a.args = [];
                continue
              }
              if (c.type === "range") {
                E.pop();
                let S = E[E.length - 1];
                S.value += c.value + f, c = S, a.ranges--;
                continue
              }
              y({type: "dot", value: f});
              continue
            }
            y({type: "text", value: f})
          }
          do if (a = i.pop(), a.type !== "root") {
            a.nodes.forEach(T => {
              T.nodes || (T.type === "open" && (T.isOpen = !0), T.type === "close" && (T.isClose = !0), T.nodes || (T.type = "text"), T.invalid = !0)
            });
            let E = i[i.length - 1], S = E.nodes.indexOf(a);
            E.nodes.splice(S, 1, ...a.nodes)
          } while (i.length > 0);
          return y({type: "eos"}), s
        };
        Ot.exports = nn
      });
      var Pt = q((as, Bt) => {
        "use strict";
        var It = He(), sn = Ct(), an = vt(), on = Nt(), Z = (e, r = {}) => {
          let t = [];
          if (Array.isArray(e)) for (let n of e) {
            let s = Z.create(n, r);
            Array.isArray(s) ? t.push(...s) : t.push(s)
          } else t = [].concat(Z.create(e, r));
          return r && r.expand === !0 && r.nodupes === !0 && (t = [...new Set(t)]), t
        };
        Z.parse = (e, r = {}) => on(e, r);
        Z.stringify = (e, r = {}) => It(typeof e == "string" ? Z.parse(e, r) : e, r);
        Z.compile = (e, r = {}) => (typeof e == "string" && (e = Z.parse(e, r)), sn(e, r));
        Z.expand = (e, r = {}) => {
          typeof e == "string" && (e = Z.parse(e, r));
          let t = an(e, r);
          return r.noempty === !0 && (t = t.filter(Boolean)), r.nodupes === !0 && (t = [...new Set(t)]), t
        };
        Z.create = (e, r = {}) => e === "" || e.length < 3 ? [e] : r.expand !== !0 ? Z.compile(e, r) : Z.expand(e, r);
        Bt.exports = Z
      });
      var me = q((is, qt) => {
        "use strict";
        var un = W("path"), se = "\\\\/", Mt = `[^${se}]`, ie = "\\.", cn = "\\+", ln = "\\?", Te = "\\/", fn = "(?=.)",
          Dt = "[^/]", qe = `(?:${Te}|$)`, Ut = `(?:^|${Te})`, Ke = `${ie}{1,2}${qe}`, pn = `(?!${ie})`,
          hn = `(?!${Ut}${Ke})`, dn = `(?!${ie}{0,1}${qe})`, gn = `(?!${Ke})`, An = `[^.${Te}]`, mn = `${Dt}*?`, Gt = {
            DOT_LITERAL: ie,
            PLUS_LITERAL: cn,
            QMARK_LITERAL: ln,
            SLASH_LITERAL: Te,
            ONE_CHAR: fn,
            QMARK: Dt,
            END_ANCHOR: qe,
            DOTS_SLASH: Ke,
            NO_DOT: pn,
            NO_DOTS: hn,
            NO_DOT_SLASH: dn,
            NO_DOTS_SLASH: gn,
            QMARK_NO_DOT: An,
            STAR: mn,
            START_ANCHOR: Ut
          }, Rn = {
            ...Gt,
            SLASH_LITERAL: `[${se}]`,
            QMARK: Mt,
            STAR: `${Mt}*?`,
            DOTS_SLASH: `${ie}{1,2}(?:[${se}]|$)`,
            NO_DOT: `(?!${ie})`,
            NO_DOTS: `(?!(?:^|[${se}])${ie}{1,2}(?:[${se}]|$))`,
            NO_DOT_SLASH: `(?!${ie}{0,1}(?:[${se}]|$))`,
            NO_DOTS_SLASH: `(?!${ie}{1,2}(?:[${se}]|$))`,
            QMARK_NO_DOT: `[^.${se}]`,
            START_ANCHOR: `(?:^|[${se}])`,
            END_ANCHOR: `(?:[${se}]|$)`
          }, yn = {
            alnum: "a-zA-Z0-9",
            alpha: "a-zA-Z",
            ascii: "\\x00-\\x7F",
            blank: " \\t",
            cntrl: "\\x00-\\x1F\\x7F",
            digit: "0-9",
            graph: "\\x21-\\x7E",
            lower: "a-z",
            print: "\\x20-\\x7E ",
            punct: "\\-!\"#$%&'()\\*+,./:;<=>?@[\\]^_`{|}~",
            space: " \\t\\r\\n\\v\\f",
            upper: "A-Z",
            word: "A-Za-z0-9_",
            xdigit: "A-Fa-f0-9"
          };
        qt.exports = {
          MAX_LENGTH: 1024 * 64,
          POSIX_REGEX_SOURCE: yn,
          REGEX_BACKSLASH: /\\(?![*+?^${}(|)[\]])/g,
          REGEX_NON_SPECIAL_CHARS: /^[^@![\].,$*+?^{}()|\\/]+/,
          REGEX_SPECIAL_CHARS: /[-*+?.^${}(|)[\]]/,
          REGEX_SPECIAL_CHARS_BACKREF: /(\\?)((\W)(\3*))/g,
          REGEX_SPECIAL_CHARS_GLOBAL: /([-*+?.^${}(|)[\]])/g,
          REGEX_REMOVE_BACKSLASH: /(?:\[.*?[^\\]\]|\\(?=.))/g,
          REPLACEMENTS: {"***": "*", "**/**": "**", "**/**/**": "**"},
          CHAR_0: 48,
          CHAR_9: 57,
          CHAR_UPPERCASE_A: 65,
          CHAR_LOWERCASE_A: 97,
          CHAR_UPPERCASE_Z: 90,
          CHAR_LOWERCASE_Z: 122,
          CHAR_LEFT_PARENTHESES: 40,
          CHAR_RIGHT_PARENTHESES: 41,
          CHAR_ASTERISK: 42,
          CHAR_AMPERSAND: 38,
          CHAR_AT: 64,
          CHAR_BACKWARD_SLASH: 92,
          CHAR_CARRIAGE_RETURN: 13,
          CHAR_CIRCUMFLEX_ACCENT: 94,
          CHAR_COLON: 58,
          CHAR_COMMA: 44,
          CHAR_DOT: 46,
          CHAR_DOUBLE_QUOTE: 34,
          CHAR_EQUAL: 61,
          CHAR_EXCLAMATION_MARK: 33,
          CHAR_FORM_FEED: 12,
          CHAR_FORWARD_SLASH: 47,
          CHAR_GRAVE_ACCENT: 96,
          CHAR_HASH: 35,
          CHAR_HYPHEN_MINUS: 45,
          CHAR_LEFT_ANGLE_BRACKET: 60,
          CHAR_LEFT_CURLY_BRACE: 123,
          CHAR_LEFT_SQUARE_BRACKET: 91,
          CHAR_LINE_FEED: 10,
          CHAR_NO_BREAK_SPACE: 160,
          CHAR_PERCENT: 37,
          CHAR_PLUS: 43,
          CHAR_QUESTION_MARK: 63,
          CHAR_RIGHT_ANGLE_BRACKET: 62,
          CHAR_RIGHT_CURLY_BRACE: 125,
          CHAR_RIGHT_SQUARE_BRACKET: 93,
          CHAR_SEMICOLON: 59,
          CHAR_SINGLE_QUOTE: 39,
          CHAR_SPACE: 32,
          CHAR_TAB: 9,
          CHAR_UNDERSCORE: 95,
          CHAR_VERTICAL_LINE: 124,
          CHAR_ZERO_WIDTH_NOBREAK_SPACE: 65279,
          SEP: un.sep,
          extglobChars(e) {
            return {
              "!": {type: "negate", open: "(?:(?!(?:", close: `))${e.STAR})`},
              "?": {type: "qmark", open: "(?:", close: ")?"},
              "+": {type: "plus", open: "(?:", close: ")+"},
              "*": {type: "star", open: "(?:", close: ")*"},
              "@": {type: "at", open: "(?:", close: ")"}
            }
          },
          globChars(e) {
            return e === !0 ? Rn : Gt
          }
        }
      });
      var Re = q(Q => {
        "use strict";
        var _n = W("path"), En = process.platform === "win32", {
          REGEX_BACKSLASH: bn,
          REGEX_REMOVE_BACKSLASH: xn,
          REGEX_SPECIAL_CHARS: Cn,
          REGEX_SPECIAL_CHARS_GLOBAL: wn
        } = me();
        Q.isObject = e => e !== null && typeof e == "object" && !Array.isArray(e);
        Q.hasRegexChars = e => Cn.test(e);
        Q.isRegexChar = e => e.length === 1 && Q.hasRegexChars(e);
        Q.escapeRegex = e => e.replace(wn, "\\$1");
        Q.toPosixSlashes = e => e.replace(bn, "/");
        Q.removeBackslashes = e => e.replace(xn, r => r === "\\" ? "" : r);
        Q.supportsLookbehinds = () => {
          let e = process.version.slice(1).split(".").map(Number);
          return e.length === 3 && e[0] >= 9 || e[0] === 8 && e[1] >= 10
        };
        Q.isWindows = e => e && typeof e.windows == "boolean" ? e.windows : En === !0 || _n.sep === "\\";
        Q.escapeLast = (e, r, t) => {
          let n = e.lastIndexOf(r, t);
          return n === -1 ? e : e[n - 1] === "\\" ? Q.escapeLast(e, r, n - 1) : `${e.slice(0, n)}\\${e.slice(n)}`
        };
        Q.removePrefix = (e, r = {}) => {
          let t = e;
          return t.startsWith("./") && (t = t.slice(2), r.prefix = "./"), t
        };
        Q.wrapOutput = (e, r = {}, t = {}) => {
          let n = t.contains ? "" : "^", s = t.contains ? "" : "$", i = `${n}(?:${e})${s}`;
          return r.negated === !0 && (i = `(?:^(?!${i}).*$)`), i
        }
      });
      var Yt = q((us, Zt) => {
        "use strict";
        var Kt = Re(), {
          CHAR_ASTERISK: We,
          CHAR_AT: Sn,
          CHAR_BACKWARD_SLASH: ye,
          CHAR_COMMA: vn,
          CHAR_DOT: je,
          CHAR_EXCLAMATION_MARK: Fe,
          CHAR_FORWARD_SLASH: Xt,
          CHAR_LEFT_CURLY_BRACE: Qe,
          CHAR_LEFT_PARENTHESES: Xe,
          CHAR_LEFT_SQUARE_BRACKET: Hn,
          CHAR_PLUS: $n,
          CHAR_QUESTION_MARK: Wt,
          CHAR_RIGHT_CURLY_BRACE: Tn,
          CHAR_RIGHT_PARENTHESES: jt,
          CHAR_RIGHT_SQUARE_BRACKET: kn
        } = me(), Ft = e => e === Xt || e === ye, Qt = e => {
          e.isPrefix !== !0 && (e.depth = e.isGlobstar ? 1 / 0 : 1)
        }, Ln = (e, r) => {
          let t = r || {}, n = e.length - 1, s = t.parts === !0 || t.scanToEnd === !0, i = [], a = [], c = [], p = e,
            m = -1, h = 0, R = 0, f = !1, $ = !1, _ = !1, y = !1, E = !1, S = !1, T = !1, L = !1, z = !1, I = !1,
            re = 0, K, g, v = {value: "", depth: 0, isGlob: !1}, k = () => m >= n, l = () => p.charCodeAt(m + 1),
            H = () => (K = g, p.charCodeAt(++m));
          for (; m < n;) {
            g = H();
            let P;
            if (g === ye) {
              T = v.backslashes = !0, g = H(), g === Qe && (S = !0);
              continue
            }
            if (S === !0 || g === Qe) {
              for (re++; k() !== !0 && (g = H());) {
                if (g === ye) {
                  T = v.backslashes = !0, H();
                  continue
                }
                if (g === Qe) {
                  re++;
                  continue
                }
                if (S !== !0 && g === je && (g = H()) === je) {
                  if (f = v.isBrace = !0, _ = v.isGlob = !0, I = !0, s === !0) continue;
                  break
                }
                if (S !== !0 && g === vn) {
                  if (f = v.isBrace = !0, _ = v.isGlob = !0, I = !0, s === !0) continue;
                  break
                }
                if (g === Tn && (re--, re === 0)) {
                  S = !1, f = v.isBrace = !0, I = !0;
                  break
                }
              }
              if (s === !0) continue;
              break
            }
            if (g === Xt) {
              if (i.push(m), a.push(v), v = {value: "", depth: 0, isGlob: !1}, I === !0) continue;
              if (K === je && m === h + 1) {
                h += 2;
                continue
              }
              R = m + 1;
              continue
            }
            if (t.noext !== !0 && (g === $n || g === Sn || g === We || g === Wt || g === Fe) === !0 && l() === Xe) {
              if (_ = v.isGlob = !0, y = v.isExtglob = !0, I = !0, g === Fe && m === h && (z = !0), s === !0) {
                for (; k() !== !0 && (g = H());) {
                  if (g === ye) {
                    T = v.backslashes = !0, g = H();
                    continue
                  }
                  if (g === jt) {
                    _ = v.isGlob = !0, I = !0;
                    break
                  }
                }
                continue
              }
              break
            }
            if (g === We) {
              if (K === We && (E = v.isGlobstar = !0), _ = v.isGlob = !0, I = !0, s === !0) continue;
              break
            }
            if (g === Wt) {
              if (_ = v.isGlob = !0, I = !0, s === !0) continue;
              break
            }
            if (g === Hn) {
              for (; k() !== !0 && (P = H());) {
                if (P === ye) {
                  T = v.backslashes = !0, H();
                  continue
                }
                if (P === kn) {
                  $ = v.isBracket = !0, _ = v.isGlob = !0, I = !0;
                  break
                }
              }
              if (s === !0) continue;
              break
            }
            if (t.nonegate !== !0 && g === Fe && m === h) {
              L = v.negated = !0, h++;
              continue
            }
            if (t.noparen !== !0 && g === Xe) {
              if (_ = v.isGlob = !0, s === !0) {
                for (; k() !== !0 && (g = H());) {
                  if (g === Xe) {
                    T = v.backslashes = !0, g = H();
                    continue
                  }
                  if (g === jt) {
                    I = !0;
                    break
                  }
                }
                continue
              }
              break
            }
            if (_ === !0) {
              if (I = !0, s === !0) continue;
              break
            }
          }
          t.noext === !0 && (y = !1, _ = !1);
          let w = p, B = "", o = "";
          h > 0 && (B = p.slice(0, h), p = p.slice(h), R -= h), w && _ === !0 && R > 0 ? (w = p.slice(0, R), o = p.slice(R)) : _ === !0 ? (w = "", o = p) : w = p, w && w !== "" && w !== "/" && w !== p && Ft(w.charCodeAt(w.length - 1)) && (w = w.slice(0, -1)), t.unescape === !0 && (o && (o = Kt.removeBackslashes(o)), w && T === !0 && (w = Kt.removeBackslashes(w)));
          let u = {
            prefix: B,
            input: e,
            start: h,
            base: w,
            glob: o,
            isBrace: f,
            isBracket: $,
            isGlob: _,
            isExtglob: y,
            isGlobstar: E,
            negated: L,
            negatedExtglob: z
          };
          if (t.tokens === !0 && (u.maxDepth = 0, Ft(g) || a.push(v), u.tokens = a), t.parts === !0 || t.tokens === !0) {
            let P;
            for (let b = 0; b < i.length; b++) {
              let V = P ? P + 1 : h, J = i[b], X = e.slice(V, J);
              t.tokens && (b === 0 && h !== 0 ? (a[b].isPrefix = !0, a[b].value = B) : a[b].value = X, Qt(a[b]), u.maxDepth += a[b].depth), (b !== 0 || X !== "") && c.push(X), P = J
            }
            if (P && P + 1 < e.length) {
              let b = e.slice(P + 1);
              c.push(b), t.tokens && (a[a.length - 1].value = b, Qt(a[a.length - 1]), u.maxDepth += a[a.length - 1].depth)
            }
            u.slashes = i, u.parts = c
          }
          return u
        };
        Zt.exports = Ln
      });
      var er = q((cs, Jt) => {
        "use strict";
        var ke = me(), Y = Re(), {
          MAX_LENGTH: Le,
          POSIX_REGEX_SOURCE: On,
          REGEX_NON_SPECIAL_CHARS: Nn,
          REGEX_SPECIAL_CHARS_BACKREF: In,
          REPLACEMENTS: zt
        } = ke, Bn = (e, r) => {
          if (typeof r.expandRange == "function") return r.expandRange(...e, r);
          e.sort();
          let t = `[${e.join("-")}]`;
          try {
            new RegExp(t)
          } catch {
            return e.map(s => Y.escapeRegex(s)).join("..")
          }
          return t
        }, de = (e, r) => `Missing ${e}: "${r}" - use "\\\\${r}" to match literal characters`, Vt = (e, r) => {
          if (typeof e != "string") throw new TypeError("Expected a string");
          e = zt[e] || e;
          let t = {...r}, n = typeof t.maxLength == "number" ? Math.min(Le, t.maxLength) : Le, s = e.length;
          if (s > n) throw new SyntaxError(`Input length: ${s}, exceeds maximum allowed length: ${n}`);
          let i = {type: "bos", value: "", output: t.prepend || ""}, a = [i], c = t.capture ? "" : "?:",
            p = Y.isWindows(r), m = ke.globChars(p), h = ke.extglobChars(m), {
              DOT_LITERAL: R,
              PLUS_LITERAL: f,
              SLASH_LITERAL: $,
              ONE_CHAR: _,
              DOTS_SLASH: y,
              NO_DOT: E,
              NO_DOT_SLASH: S,
              NO_DOTS_SLASH: T,
              QMARK: L,
              QMARK_NO_DOT: z,
              STAR: I,
              START_ANCHOR: re
            } = m, K = A => `(${c}(?:(?!${re}${A.dot ? y : R}).)*?)`, g = t.dot ? "" : E, v = t.dot ? L : z,
            k = t.bash === !0 ? K(t) : I;
          t.capture && (k = `(${k})`), typeof t.noext == "boolean" && (t.noextglob = t.noext);
          let l = {
            input: e,
            index: -1,
            start: 0,
            dot: t.dot === !0,
            consumed: "",
            output: "",
            prefix: "",
            backtrack: !1,
            negated: !1,
            brackets: 0,
            braces: 0,
            parens: 0,
            quotes: 0,
            globstar: !1,
            tokens: a
          };
          e = Y.removePrefix(e, l), s = e.length;
          let H = [], w = [], B = [], o = i, u, P = () => l.index === s - 1, b = l.peek = (A = 1) => e[l.index + A],
            V = l.advance = () => e[++l.index] || "", J = () => e.slice(l.index + 1), X = (A = "", O = 0) => {
              l.consumed += A, l.index += O
            }, Ee = A => {
              l.output += A.output != null ? A.output : A.value, X(A.value)
            }, mr = () => {
              let A = 1;
              for (; b() === "!" && (b(2) !== "(" || b(3) === "?");) V(), l.start++, A++;
              return A % 2 === 0 ? !1 : (l.negated = !0, l.start++, !0)
            }, be = A => {
              l[A]++, B.push(A)
            }, oe = A => {
              l[A]--, B.pop()
            }, C = A => {
              if (o.type === "globstar") {
                let O = l.braces > 0 && (A.type === "comma" || A.type === "brace"),
                  d = A.extglob === !0 || H.length && (A.type === "pipe" || A.type === "paren");
                A.type !== "slash" && A.type !== "paren" && !O && !d && (l.output = l.output.slice(0, -o.output.length), o.type = "star", o.value = "*", o.output = k, l.output += o.output)
              }
              if (H.length && A.type !== "paren" && (H[H.length - 1].inner += A.value), (A.value || A.output) && Ee(A), o && o.type === "text" && A.type === "text") {
                o.value += A.value, o.output = (o.output || "") + A.value;
                return
              }
              A.prev = o, a.push(A), o = A
            }, xe = (A, O) => {
              let d = {...h[O], conditions: 1, inner: ""};
              d.prev = o, d.parens = l.parens, d.output = l.output;
              let x = (t.capture ? "(" : "") + d.open;
              be("parens"), C({type: A, value: O, output: l.output ? "" : _}), C({
                type: "paren",
                extglob: !0,
                value: V(),
                output: x
              }), H.push(d)
            }, Rr = A => {
              let O = A.close + (t.capture ? ")" : ""), d;
              if (A.type === "negate") {
                let x = k;
                A.inner && A.inner.length > 1 && A.inner.includes("/") && (x = K(t)), (x !== k || P() || /^\)+$/.test(J())) && (O = A.close = `)$))${x}`), A.inner.includes("*") && (d = J()) && /^\.[^\\/.]+$/.test(d) && (O = A.close = `)${d})${x})`), A.prev.type === "bos" && (l.negatedExtglob = !0)
              }
              C({type: "paren", extglob: !0, value: u, output: O}), oe("parens")
            };
          if (t.fastpaths !== !1 && !/(^[*!]|[/()[\]{}"])/.test(e)) {
            let A = !1,
              O = e.replace(In, (d, x, M, j, G, Ie) => j === "\\" ? (A = !0, d) : j === "?" ? x ? x + j + (G ? L.repeat(G.length) : "") : Ie === 0 ? v + (G ? L.repeat(G.length) : "") : L.repeat(M.length) : j === "." ? R.repeat(M.length) : j === "*" ? x ? x + j + (G ? k : "") : k : x ? d : `\\${d}`);
            return A === !0 && (t.unescape === !0 ? O = O.replace(/\\/g, "") : O = O.replace(/\\+/g, d => d.length % 2 === 0 ? "\\\\" : d ? "\\" : "")), O === e && t.contains === !0 ? (l.output = e, l) : (l.output = Y.wrapOutput(O, l, r), l)
          }
          for (; !P();) {
            if (u = V(), u === "\0") continue;
            if (u === "\\") {
              let d = b();
              if (d === "/" && t.bash !== !0 || d === "." || d === ";") continue;
              if (!d) {
                u += "\\", C({type: "text", value: u});
                continue
              }
              let x = /^\\+/.exec(J()), M = 0;
              if (x && x[0].length > 2 && (M = x[0].length, l.index += M, M % 2 !== 0 && (u += "\\")), t.unescape === !0 ? u = V() : u += V(), l.brackets === 0) {
                C({type: "text", value: u});
                continue
              }
            }
            if (l.brackets > 0 && (u !== "]" || o.value === "[" || o.value === "[^")) {
              if (t.posix !== !1 && u === ":") {
                let d = o.value.slice(1);
                if (d.includes("[") && (o.posix = !0, d.includes(":"))) {
                  let x = o.value.lastIndexOf("["), M = o.value.slice(0, x), j = o.value.slice(x + 2), G = On[j];
                  if (G) {
                    o.value = M + G, l.backtrack = !0, V(), !i.output && a.indexOf(o) === 1 && (i.output = _);
                    continue
                  }
                }
              }
              (u === "[" && b() !== ":" || u === "-" && b() === "]") && (u = `\\${u}`), u === "]" && (o.value === "[" || o.value === "[^") && (u = `\\${u}`), t.posix === !0 && u === "!" && o.value === "[" && (u = "^"), o.value += u, Ee({value: u});
              continue
            }
            if (l.quotes === 1 && u !== '"') {
              u = Y.escapeRegex(u), o.value += u, Ee({value: u});
              continue
            }
            if (u === '"') {
              l.quotes = l.quotes === 1 ? 0 : 1, t.keepQuotes === !0 && C({type: "text", value: u});
              continue
            }
            if (u === "(") {
              be("parens"), C({type: "paren", value: u});
              continue
            }
            if (u === ")") {
              if (l.parens === 0 && t.strictBrackets === !0) throw new SyntaxError(de("opening", "("));
              let d = H[H.length - 1];
              if (d && l.parens === d.parens + 1) {
                Rr(H.pop());
                continue
              }
              C({type: "paren", value: u, output: l.parens ? ")" : "\\)"}), oe("parens");
              continue
            }
            if (u === "[") {
              if (t.nobracket === !0 || !J().includes("]")) {
                if (t.nobracket !== !0 && t.strictBrackets === !0) throw new SyntaxError(de("closing", "]"));
                u = `\\${u}`
              } else be("brackets");
              C({type: "bracket", value: u});
              continue
            }
            if (u === "]") {
              if (t.nobracket === !0 || o && o.type === "bracket" && o.value.length === 1) {
                C({type: "text", value: u, output: `\\${u}`});
                continue
              }
              if (l.brackets === 0) {
                if (t.strictBrackets === !0) throw new SyntaxError(de("opening", "["));
                C({type: "text", value: u, output: `\\${u}`});
                continue
              }
              oe("brackets");
              let d = o.value.slice(1);
              if (o.posix !== !0 && d[0] === "^" && !d.includes("/") && (u = `/${u}`), o.value += u, Ee({value: u}), t.literalBrackets === !1 || Y.hasRegexChars(d)) continue;
              let x = Y.escapeRegex(o.value);
              if (l.output = l.output.slice(0, -o.value.length), t.literalBrackets === !0) {
                l.output += x, o.value = x;
                continue
              }
              o.value = `(${c}${x}|${o.value})`, l.output += o.value;
              continue
            }
            if (u === "{" && t.nobrace !== !0) {
              be("braces");
              let d = {
                type: "brace",
                value: u,
                output: "(",
                outputIndex: l.output.length,
                tokensIndex: l.tokens.length
              };
              w.push(d), C(d);
              continue
            }
            if (u === "}") {
              let d = w[w.length - 1];
              if (t.nobrace === !0 || !d) {
                C({type: "text", value: u, output: u});
                continue
              }
              let x = ")";
              if (d.dots === !0) {
                let M = a.slice(), j = [];
                for (let G = M.length - 1; G >= 0 && (a.pop(), M[G].type !== "brace"); G--) M[G].type !== "dots" && j.unshift(M[G].value);
                x = Bn(j, t), l.backtrack = !0
              }
              if (d.comma !== !0 && d.dots !== !0) {
                let M = l.output.slice(0, d.outputIndex), j = l.tokens.slice(d.tokensIndex);
                d.value = d.output = "\\{", u = x = "\\}", l.output = M;
                for (let G of j) l.output += G.output || G.value
              }
              C({type: "brace", value: u, output: x}), oe("braces"), w.pop();
              continue
            }
            if (u === "|") {
              H.length > 0 && H[H.length - 1].conditions++, C({type: "text", value: u});
              continue
            }
            if (u === ",") {
              let d = u, x = w[w.length - 1];
              x && B[B.length - 1] === "braces" && (x.comma = !0, d = "|"), C({type: "comma", value: u, output: d});
              continue
            }
            if (u === "/") {
              if (o.type === "dot" && l.index === l.start + 1) {
                l.start = l.index + 1, l.consumed = "", l.output = "", a.pop(), o = i;
                continue
              }
              C({type: "slash", value: u, output: $});
              continue
            }
            if (u === ".") {
              if (l.braces > 0 && o.type === "dot") {
                o.value === "." && (o.output = R);
                let d = w[w.length - 1];
                o.type = "dots", o.output += u, o.value += u, d.dots = !0;
                continue
              }
              if (l.braces + l.parens === 0 && o.type !== "bos" && o.type !== "slash") {
                C({type: "text", value: u, output: R});
                continue
              }
              C({type: "dot", value: u, output: R});
              continue
            }
            if (u === "?") {
              if (!(o && o.value === "(") && t.noextglob !== !0 && b() === "(" && b(2) !== "?") {
                xe("qmark", u);
                continue
              }
              if (o && o.type === "paren") {
                let x = b(), M = u;
                if (x === "<" && !Y.supportsLookbehinds()) throw new Error("Node.js v10 or higher is required for regex lookbehinds");
                (o.value === "(" && !/[!=<:]/.test(x) || x === "<" && !/<([!=]|\w+>)/.test(J())) && (M = `\\${u}`), C({
                  type: "text",
                  value: u,
                  output: M
                });
                continue
              }
              if (t.dot !== !0 && (o.type === "slash" || o.type === "bos")) {
                C({type: "qmark", value: u, output: z});
                continue
              }
              C({type: "qmark", value: u, output: L});
              continue
            }
            if (u === "!") {
              if (t.noextglob !== !0 && b() === "(" && (b(2) !== "?" || !/[!=<:]/.test(b(3)))) {
                xe("negate", u);
                continue
              }
              if (t.nonegate !== !0 && l.index === 0) {
                mr();
                continue
              }
            }
            if (u === "+") {
              if (t.noextglob !== !0 && b() === "(" && b(2) !== "?") {
                xe("plus", u);
                continue
              }
              if (o && o.value === "(" || t.regex === !1) {
                C({type: "plus", value: u, output: f});
                continue
              }
              if (o && (o.type === "bracket" || o.type === "paren" || o.type === "brace") || l.parens > 0) {
                C({type: "plus", value: u});
                continue
              }
              C({type: "plus", value: f});
              continue
            }
            if (u === "@") {
              if (t.noextglob !== !0 && b() === "(" && b(2) !== "?") {
                C({type: "at", extglob: !0, value: u, output: ""});
                continue
              }
              C({type: "text", value: u});
              continue
            }
            if (u !== "*") {
              (u === "$" || u === "^") && (u = `\\${u}`);
              let d = Nn.exec(J());
              d && (u += d[0], l.index += d[0].length), C({type: "text", value: u});
              continue
            }
            if (o && (o.type === "globstar" || o.star === !0)) {
              o.type = "star", o.star = !0, o.value += u, o.output = k, l.backtrack = !0, l.globstar = !0, X(u);
              continue
            }
            let A = J();
            if (t.noextglob !== !0 && /^\([^?]/.test(A)) {
              xe("star", u);
              continue
            }
            if (o.type === "star") {
              if (t.noglobstar === !0) {
                X(u);
                continue
              }
              let d = o.prev, x = d.prev, M = d.type === "slash" || d.type === "bos",
                j = x && (x.type === "star" || x.type === "globstar");
              if (t.bash === !0 && (!M || A[0] && A[0] !== "/")) {
                C({type: "star", value: u, output: ""});
                continue
              }
              let G = l.braces > 0 && (d.type === "comma" || d.type === "brace"),
                Ie = H.length && (d.type === "pipe" || d.type === "paren");
              if (!M && d.type !== "paren" && !G && !Ie) {
                C({type: "star", value: u, output: ""});
                continue
              }
              for (; A.slice(0, 3) === "/**";) {
                let Ce = e[l.index + 4];
                if (Ce && Ce !== "/") break;
                A = A.slice(3), X("/**", 3)
              }
              if (d.type === "bos" && P()) {
                o.type = "globstar", o.value += u, o.output = K(t), l.output = o.output, l.globstar = !0, X(u);
                continue
              }
              if (d.type === "slash" && d.prev.type !== "bos" && !j && P()) {
                l.output = l.output.slice(0, -(d.output + o.output).length), d.output = `(?:${d.output}`, o.type = "globstar", o.output = K(t) + (t.strictSlashes ? ")" : "|$)"), o.value += u, l.globstar = !0, l.output += d.output + o.output, X(u);
                continue
              }
              if (d.type === "slash" && d.prev.type !== "bos" && A[0] === "/") {
                let Ce = A[1] !== void 0 ? "|$" : "";
                l.output = l.output.slice(0, -(d.output + o.output).length), d.output = `(?:${d.output}`, o.type = "globstar", o.output = `${K(t)}${$}|${$}${Ce})`, o.value += u, l.output += d.output + o.output, l.globstar = !0, X(u + V()), C({
                  type: "slash",
                  value: "/",
                  output: ""
                });
                continue
              }
              if (d.type === "bos" && A[0] === "/") {
                o.type = "globstar", o.value += u, o.output = `(?:^|${$}|${K(t)}${$})`, l.output = o.output, l.globstar = !0, X(u + V()), C({
                  type: "slash",
                  value: "/",
                  output: ""
                });
                continue
              }
              l.output = l.output.slice(0, -o.output.length), o.type = "globstar", o.output = K(t), o.value += u, l.output += o.output, l.globstar = !0, X(u);
              continue
            }
            let O = {type: "star", value: u, output: k};
            if (t.bash === !0) {
              O.output = ".*?", (o.type === "bos" || o.type === "slash") && (O.output = g + O.output), C(O);
              continue
            }
            if (o && (o.type === "bracket" || o.type === "paren") && t.regex === !0) {
              O.output = u, C(O);
              continue
            }
            (l.index === l.start || o.type === "slash" || o.type === "dot") && (o.type === "dot" ? (l.output += S, o.output += S) : t.dot === !0 ? (l.output += T, o.output += T) : (l.output += g, o.output += g), b() !== "*" && (l.output += _, o.output += _)), C(O)
          }
          for (; l.brackets > 0;) {
            if (t.strictBrackets === !0) throw new SyntaxError(de("closing", "]"));
            l.output = Y.escapeLast(l.output, "["), oe("brackets")
          }
          for (; l.parens > 0;) {
            if (t.strictBrackets === !0) throw new SyntaxError(de("closing", ")"));
            l.output = Y.escapeLast(l.output, "("), oe("parens")
          }
          for (; l.braces > 0;) {
            if (t.strictBrackets === !0) throw new SyntaxError(de("closing", "}"));
            l.output = Y.escapeLast(l.output, "{"), oe("braces")
          }
          if (t.strictSlashes !== !0 && (o.type === "star" || o.type === "bracket") && C({
            type: "maybe_slash",
            value: "",
            output: `${$}?`
          }), l.backtrack === !0) {
            l.output = "";
            for (let A of l.tokens) l.output += A.output != null ? A.output : A.value, A.suffix && (l.output += A.suffix)
          }
          return l
        };
        Vt.fastpaths = (e, r) => {
          let t = {...r}, n = typeof t.maxLength == "number" ? Math.min(Le, t.maxLength) : Le, s = e.length;
          if (s > n) throw new SyntaxError(`Input length: ${s}, exceeds maximum allowed length: ${n}`);
          e = zt[e] || e;
          let i = Y.isWindows(r), {
              DOT_LITERAL: a,
              SLASH_LITERAL: c,
              ONE_CHAR: p,
              DOTS_SLASH: m,
              NO_DOT: h,
              NO_DOTS: R,
              NO_DOTS_SLASH: f,
              STAR: $,
              START_ANCHOR: _
            } = ke.globChars(i), y = t.dot ? R : h, E = t.dot ? f : h, S = t.capture ? "" : "?:",
            T = {negated: !1, prefix: ""}, L = t.bash === !0 ? ".*?" : $;
          t.capture && (L = `(${L})`);
          let z = g => g.noglobstar === !0 ? L : `(${S}(?:(?!${_}${g.dot ? m : a}).)*?)`, I = g => {
            switch (g) {
              case"*":
                return `${y}${p}${L}`;
              case".*":
                return `${a}${p}${L}`;
              case"*.*":
                return `${y}${L}${a}${p}${L}`;
              case"*/*":
                return `${y}${L}${c}${p}${E}${L}`;
              case"**":
                return y + z(t);
              case"**/*":
                return `(?:${y}${z(t)}${c})?${E}${p}${L}`;
              case"**/*.*":
                return `(?:${y}${z(t)}${c})?${E}${L}${a}${p}${L}`;
              case"**/.*":
                return `(?:${y}${z(t)}${c})?${a}${p}${L}`;
              default: {
                let v = /^(.*?)\.(\w+)$/.exec(g);
                if (!v) return;
                let k = I(v[1]);
                return k ? k + a + v[2] : void 0
              }
            }
          }, re = Y.removePrefix(e, T), K = I(re);
          return K && t.strictSlashes !== !0 && (K += `${c}?`), K
        };
        Jt.exports = Vt
      });
      var rr = q((ls, tr) => {
        "use strict";
        var Pn = W("path"), Mn = Yt(), Ze = er(), Ye = Re(), Dn = me(),
          Un = e => e && typeof e == "object" && !Array.isArray(e), D = (e, r, t = !1) => {
            if (Array.isArray(e)) {
              let h = e.map(f => D(f, r, t));
              return f => {
                for (let $ of h) {
                  let _ = $(f);
                  if (_) return _
                }
                return !1
              }
            }
            let n = Un(e) && e.tokens && e.input;
            if (e === "" || typeof e != "string" && !n) throw new TypeError("Expected pattern to be a non-empty string");
            let s = r || {}, i = Ye.isWindows(r), a = n ? D.compileRe(e, r) : D.makeRe(e, r, !1, !0), c = a.state;
            delete a.state;
            let p = () => !1;
            if (s.ignore) {
              let h = {...r, ignore: null, onMatch: null, onResult: null};
              p = D(s.ignore, h, t)
            }
            let m = (h, R = !1) => {
              let {isMatch: f, match: $, output: _} = D.test(h, a, r, {glob: e, posix: i}),
                y = {glob: e, state: c, regex: a, posix: i, input: h, output: _, match: $, isMatch: f};
              return typeof s.onResult == "function" && s.onResult(y), f === !1 ? (y.isMatch = !1, R ? y : !1) : p(h) ? (typeof s.onIgnore == "function" && s.onIgnore(y), y.isMatch = !1, R ? y : !1) : (typeof s.onMatch == "function" && s.onMatch(y), R ? y : !0)
            };
            return t && (m.state = c), m
          };
        D.test = (e, r, t, {glob: n, posix: s} = {}) => {
          if (typeof e != "string") throw new TypeError("Expected input to be a string");
          if (e === "") return {isMatch: !1, output: ""};
          let i = t || {}, a = i.format || (s ? Ye.toPosixSlashes : null), c = e === n, p = c && a ? a(e) : e;
          return c === !1 && (p = a ? a(e) : e, c = p === n), (c === !1 || i.capture === !0) && (i.matchBase === !0 || i.basename === !0 ? c = D.matchBase(e, r, t, s) : c = r.exec(p)), {
            isMatch: Boolean(c),
            match: c,
            output: p
          }
        };
        D.matchBase = (e, r, t, n = Ye.isWindows(t)) => (r instanceof RegExp ? r : D.makeRe(r, t)).test(Pn.basename(e));
        D.isMatch = (e, r, t) => D(r, t)(e);
        D.parse = (e, r) => Array.isArray(e) ? e.map(t => D.parse(t, r)) : Ze(e, {...r, fastpaths: !1});
        D.scan = (e, r) => Mn(e, r);
        D.compileRe = (e, r, t = !1, n = !1) => {
          if (t === !0) return e.output;
          let s = r || {}, i = s.contains ? "" : "^", a = s.contains ? "" : "$", c = `${i}(?:${e.output})${a}`;
          e && e.negated === !0 && (c = `^(?!${c}).*$`);
          let p = D.toRegex(c, r);
          return n === !0 && (p.state = e), p
        };
        D.makeRe = (e, r = {}, t = !1, n = !1) => {
          if (!e || typeof e != "string") throw new TypeError("Expected a non-empty string");
          let s = {negated: !1, fastpaths: !0};
          return r.fastpaths !== !1 && (e[0] === "." || e[0] === "*") && (s.output = Ze.fastpaths(e, r)), s.output || (s = Ze(e, r)), D.compileRe(s, r, t, n)
        };
        D.toRegex = (e, r) => {
          try {
            let t = r || {};
            return new RegExp(e, t.flags || (t.nocase ? "i" : ""))
          } catch (t) {
            if (r && r.debug === !0) throw t;
            return /$^/
          }
        };
        D.constants = Dn;
        tr.exports = D
      });
      var sr = q((fs, nr) => {
        "use strict";
        nr.exports = rr()
      });
      var cr = q((ps, ur) => {
        "use strict";
        var ir = W("util"), or = Pt(), ae = sr(), ze = Re(), ar = e => e === "" || e === "./", N = (e, r, t) => {
          r = [].concat(r), e = [].concat(e);
          let n = new Set, s = new Set, i = new Set, a = 0, c = h => {
            i.add(h.output), t && t.onResult && t.onResult(h)
          };
          for (let h = 0; h < r.length; h++) {
            let R = ae(String(r[h]), {...t, onResult: c}, !0), f = R.state.negated || R.state.negatedExtglob;
            f && a++;
            for (let $ of e) {
              let _ = R($, !0);
              !(f ? !_.isMatch : _.isMatch) || (f ? n.add(_.output) : (n.delete(_.output), s.add(_.output)))
            }
          }
          let m = (a === r.length ? [...i] : [...s]).filter(h => !n.has(h));
          if (t && m.length === 0) {
            if (t.failglob === !0) throw new Error(`No matches found for "${r.join(", ")}"`);
            if (t.nonull === !0 || t.nullglob === !0) return t.unescape ? r.map(h => h.replace(/\\/g, "")) : r
          }
          return m
        };
        N.match = N;
        N.matcher = (e, r) => ae(e, r);
        N.isMatch = (e, r, t) => ae(r, t)(e);
        N.any = N.isMatch;
        N.not = (e, r, t = {}) => {
          r = [].concat(r).map(String);
          let n = new Set, s = [], a = N(e, r, {
            ...t, onResult: c => {
              t.onResult && t.onResult(c), s.push(c.output)
            }
          });
          for (let c of s) a.includes(c) || n.add(c);
          return [...n]
        };
        N.contains = (e, r, t) => {
          if (typeof e != "string") throw new TypeError(`Expected a string: "${ir.inspect(e)}"`);
          if (Array.isArray(r)) return r.some(n => N.contains(e, n, t));
          if (typeof r == "string") {
            if (ar(e) || ar(r)) return !1;
            if (e.includes(r) || e.startsWith("./") && e.slice(2).includes(r)) return !0
          }
          return N.isMatch(e, r, {...t, contains: !0})
        };
        N.matchKeys = (e, r, t) => {
          if (!ze.isObject(e)) throw new TypeError("Expected the first argument to be an object");
          let n = N(Object.keys(e), r, t), s = {};
          for (let i of n) s[i] = e[i];
          return s
        };
        N.some = (e, r, t) => {
          let n = [].concat(e);
          for (let s of [].concat(r)) {
            let i = ae(String(s), t);
            if (n.some(a => i(a))) return !0
          }
          return !1
        };
        N.every = (e, r, t) => {
          let n = [].concat(e);
          for (let s of [].concat(r)) {
            let i = ae(String(s), t);
            if (!n.every(a => i(a))) return !1
          }
          return !0
        };
        N.all = (e, r, t) => {
          if (typeof e != "string") throw new TypeError(`Expected a string: "${ir.inspect(e)}"`);
          return [].concat(r).every(n => ae(n, t)(e))
        };
        N.capture = (e, r, t) => {
          let n = ze.isWindows(t), i = ae.makeRe(String(e), {...t, capture: !0}).exec(n ? ze.toPosixSlashes(r) : r);
          if (i) return i.slice(1).map(a => a === void 0 ? "" : a)
        };
        N.makeRe = (...e) => ae.makeRe(...e);
        N.scan = (...e) => ae.scan(...e);
        N.parse = (e, r) => {
          let t = [];
          for (let n of [].concat(e || [])) for (let s of or(String(n), r)) t.push(ae.parse(s, r));
          return t
        };
        N.braces = (e, r) => {
          if (typeof e != "string") throw new TypeError("Expected a string");
          return r && r.nobrace === !0 || !/\{.*\}/.test(e) ? [e] : or(e, r)
        };
        N.braceExpand = (e, r) => {
          if (typeof e != "string") throw new TypeError("Expected a string");
          return N.braces(e, {...r, expand: !0})
        };
        ur.exports = N
      });
      var fr = q((hs, lr) => {
        "use strict";
        lr.exports = (e, ...r) => new Promise(t => {
          t(e(...r))
        })
      });
      var hr = q((ds, Ve) => {
        "use strict";
        var Gn = fr(), pr = e => {
          if (e < 1) throw new TypeError("Expected `concurrency` to be a number from 1 and up");
          let r = [], t = 0, n = () => {
            t--, r.length > 0 && r.shift()()
          }, s = (c, p, ...m) => {
            t++;
            let h = Gn(c, ...m);
            p(h), h.then(n, n)
          }, i = (c, p, ...m) => {
            t < e ? s(c, p, ...m) : r.push(s.bind(null, c, p, ...m))
          }, a = (c, ...p) => new Promise(m => i(c, m, ...p));
          return Object.defineProperties(a, {activeCount: {get: () => t}, pendingCount: {get: () => r.length}}), a
        };
        Ve.exports = pr;
        Ve.exports.default = pr
      });
      var jn = {};
      Cr(jn, {default: () => Wn});
      var Se = W("@yarnpkg/cli"), ne = W("@yarnpkg/core"), et = W("@yarnpkg/core"), ue = W("clipanion"),
        ce = class extends Se.BaseCommand {
          constructor() {
            super(...arguments);
            this.json = ue.Option.Boolean("--json", !1, {description: "Format the output as an NDJSON stream"});
            this.production = ue.Option.Boolean("--production", !1, {description: "Only install regular dependencies by omitting dev dependencies"});
            this.all = ue.Option.Boolean("-A,--all", !1, {description: "Install the entire project"});
            this.workspaces = ue.Option.Rest()
          }

          async execute() {
            let t = await ne.Configuration.find(this.context.cwd, this.context.plugins), {
              project: n,
              workspace: s
            } = await ne.Project.find(t, this.context.cwd), i = await ne.Cache.find(t);
            await n.restoreInstallState({restoreResolutions: !1});
            let a;
            if (this.all) a = new Set(n.workspaces); else if (this.workspaces.length === 0) {
              if (!s) throw new Se.WorkspaceRequiredError(n.cwd, this.context.cwd);
              a = new Set([s])
            } else a = new Set(this.workspaces.map(p => n.getWorkspaceByIdent(et.structUtils.parseIdent(p))));
            for (let p of a) for (let m of this.production ? ["dependencies"] : ne.Manifest.hardDependencies) for (let h of p.manifest.getForScope(m).values()) {
              let R = n.tryWorkspaceByDescriptor(h);
              R !== null && a.add(R)
            }
            for (let p of n.workspaces) a.has(p) ? this.production && p.manifest.devDependencies.clear() : (p.manifest.installConfig = p.manifest.installConfig || {}, p.manifest.installConfig.selfReferences = !1, p.manifest.dependencies.clear(), p.manifest.devDependencies.clear(), p.manifest.peerDependencies.clear(), p.manifest.scripts.clear());
            return (await ne.StreamReport.start({
              configuration: t,
              json: this.json,
              stdout: this.context.stdout,
              includeLogs: !0
            }, async p => {
              await n.install({cache: i, report: p, persistProject: !1})
            })).exitCode()
          }
        };
      ce.paths = [["workspaces", "focus"]], ce.usage = ue.Command.Usage({
        category: "Workspace-related commands",
        description: "install a single workspace and its dependencies",
        details: "\n      This command will run an install as if the specified workspaces (and all other workspaces they depend on) were the only ones in the project. If no workspaces are explicitly listed, the active one will be assumed.\n\n      Note that this command is only very moderately useful when using zero-installs, since the cache will contain all the packages anyway - meaning that the only difference between a full install and a focused install would just be a few extra lines in the `.pnp.cjs` file, at the cost of introducing an extra complexity.\n\n      If the `-A,--all` flag is set, the entire project will be installed. Combine with `--production` to replicate the old `yarn install --production`.\n    "
      });
      var Ne = W("@yarnpkg/cli"), ge = W("@yarnpkg/core"), _e = W("@yarnpkg/core"), F = W("@yarnpkg/core"),
        gr = W("@yarnpkg/plugin-git"), U = W("clipanion"), Oe = Be(cr()), Ar = Be(hr()), te = Be(W("typanion")),
        pe = class extends Ne.BaseCommand {
          constructor() {
            super(...arguments);
            this.recursive = U.Option.Boolean("-R,--recursive", !1, {description: "Find packages via dependencies/devDependencies instead of using the workspaces field"});
            this.from = U.Option.Array("--from", [], {description: "An array of glob pattern idents from which to base any recursion"});
            this.all = U.Option.Boolean("-A,--all", !1, {description: "Run the command on all workspaces of a project"});
            this.verbose = U.Option.Boolean("-v,--verbose", !1, {description: "Prefix each output line with the name of the originating workspace"});
            this.parallel = U.Option.Boolean("-p,--parallel", !1, {description: "Run the commands in parallel"});
            this.interlaced = U.Option.Boolean("-i,--interlaced", !1, {description: "Print the output of commands in real-time instead of buffering it"});
            this.jobs = U.Option.String("-j,--jobs", {
              description: "The maximum number of parallel tasks that the execution will be limited to; or `unlimited`",
              validator: te.isOneOf([te.isEnum(["unlimited"]), te.applyCascade(te.isNumber(), [te.isInteger(), te.isAtLeast(1)])])
            });
            this.topological = U.Option.Boolean("-t,--topological", !1, {description: "Run the command after all workspaces it depends on (regular) have finished"});
            this.topologicalDev = U.Option.Boolean("--topological-dev", !1, {description: "Run the command after all workspaces it depends on (regular + dev) have finished"});
            this.include = U.Option.Array("--include", [], {description: "An array of glob pattern idents; only matching workspaces will be traversed"});
            this.exclude = U.Option.Array("--exclude", [], {description: "An array of glob pattern idents; matching workspaces won't be traversed"});
            this.publicOnly = U.Option.Boolean("--no-private", {description: "Avoid running the command on private workspaces"});
            this.since = U.Option.String("--since", {
              description: "Only include workspaces that have been changed since the specified ref.",
              tolerateBoolean: !0
            });
            this.commandName = U.Option.String();
            this.args = U.Option.Proxy()
          }

          async execute() {
            let t = await ge.Configuration.find(this.context.cwd, this.context.plugins), {
              project: n,
              workspace: s
            } = await ge.Project.find(t, this.context.cwd);
            if (!this.all && !s) throw new Ne.WorkspaceRequiredError(n.cwd, this.context.cwd);
            await n.restoreInstallState();
            let i = this.cli.process([this.commandName, ...this.args]),
              a = i.path.length === 1 && i.path[0] === "run" && typeof i.scriptName < "u" ? i.scriptName : null;
            if (i.path.length === 0) throw new U.UsageError("Invalid subcommand name for iteration - use the 'run' keyword if you wish to execute a script");
            let c = this.all ? n.topLevelWorkspace : s,
              p = this.since ? Array.from(await gr.gitUtils.fetchChangedWorkspaces({
                ref: this.since,
                project: n
              })) : [c, ...this.from.length > 0 ? c.getRecursiveWorkspaceChildren() : []],
              m = g => Oe.default.isMatch(F.structUtils.stringifyIdent(g.locator), this.from),
              h = this.from.length > 0 ? p.filter(m) : p,
              R = new Set([...h, ...h.map(g => [...this.recursive ? this.since ? g.getRecursiveWorkspaceDependents() : g.getRecursiveWorkspaceDependencies() : g.getRecursiveWorkspaceChildren()]).flat()]),
              f = [], $ = !1;
            if (a != null && a.includes(":")) {
              for (let g of n.workspaces) if (g.manifest.scripts.has(a) && ($ = !$, $ === !1)) break
            }
            for (let g of R) a && !g.manifest.scripts.has(a) && !$ && !(await ge.scriptUtils.getWorkspaceAccessibleBinaries(g)).has(a) || a === process.env.npm_lifecycle_event && g.cwd === s.cwd || this.include.length > 0 && !Oe.default.isMatch(F.structUtils.stringifyIdent(g.locator), this.include) || this.exclude.length > 0 && Oe.default.isMatch(F.structUtils.stringifyIdent(g.locator), this.exclude) || this.publicOnly && g.manifest.private === !0 || f.push(g);
            let _ = this.parallel ? this.jobs === "unlimited" ? 1 / 0 : Number(this.jobs) || Math.ceil(F.nodeUtils.availableParallelism() / 2) : 1,
              y = _ === 1 ? !1 : this.parallel, E = y ? this.interlaced : !0, S = (0, Ar.default)(_), T = new Map,
              L = new Set, z = 0, I = null, re = !1, K = await _e.StreamReport.start({
                configuration: t,
                stdout: this.context.stdout,
                includePrefix: !1
              }, async g => {
                let v = async (k, {commandIndex: l}) => {
                  if (re) return -1;
                  !y && this.verbose && l > 1 && g.reportSeparator();
                  let H = qn(k, {configuration: t, verbose: this.verbose, commandIndex: l}), [w, B] = dr(g, {
                    prefix: H,
                    interlaced: E
                  }), [o, u] = dr(g, {prefix: H, interlaced: E});
                  try {
                    this.verbose && g.reportInfo(null, `${H} Process started`);
                    let P = Date.now(),
                      b = await this.cli.run([this.commandName, ...this.args], {cwd: k.cwd, stdout: w, stderr: o}) || 0;
                    w.end(), o.end(), await B, await u;
                    let V = Date.now();
                    if (this.verbose) {
                      let J = t.get("enableTimers") ? `, completed in ${F.formatUtils.pretty(t, V - P, F.formatUtils.Type.DURATION)}` : "";
                      g.reportInfo(null, `${H} Process exited (exit code ${b})${J}`)
                    }
                    return b === 130 && (re = !0, I = b), b
                  } catch (P) {
                    throw w.end(), o.end(), await B, await u, P
                  }
                };
                for (let k of f) T.set(k.anchoredLocator.locatorHash, k);
                for (; T.size > 0 && !g.hasErrors();) {
                  let k = [];
                  for (let [w, B] of T) {
                    if (L.has(B.anchoredDescriptor.descriptorHash)) continue;
                    let o = !0;
                    if (this.topological || this.topologicalDev) {
                      let u = this.topologicalDev ? new Map([...B.manifest.dependencies, ...B.manifest.devDependencies]) : B.manifest.dependencies;
                      for (let P of u.values()) {
                        let b = n.tryWorkspaceByDescriptor(P);
                        if (o = b === null || !T.has(b.anchoredLocator.locatorHash), !o) break
                      }
                    }
                    if (!!o && (L.add(B.anchoredDescriptor.descriptorHash), k.push(S(async () => {
                      let u = await v(B, {commandIndex: ++z});
                      return T.delete(w), L.delete(B.anchoredDescriptor.descriptorHash), u
                    })), !y)) break
                  }
                  if (k.length === 0) {
                    let w = Array.from(T.values()).map(B => F.structUtils.prettyLocator(t, B.anchoredLocator)).join(", ");
                    g.reportError(_e.MessageName.CYCLIC_DEPENDENCIES, `Dependency cycle detected (${w})`);
                    return
                  }
                  let H = (await Promise.all(k)).find(w => w !== 0);
                  I === null && (I = typeof H < "u" ? 1 : I), (this.topological || this.topologicalDev) && typeof H < "u" && g.reportError(_e.MessageName.UNNAMED, "The command failed for workspaces that are depended upon by other workspaces; can't satisfy the dependency graph")
                }
              });
            return I !== null ? I : K.exitCode()
          }
        };
      pe.paths = [["workspaces", "foreach"]], pe.usage = U.Command.Usage({
        category: "Workspace-related commands",
        description: "run a command on all workspaces",
        details: "\n      This command will run a given sub-command on current and all its descendant workspaces. Various flags can alter the exact behavior of the command:\n\n      - If `-p,--parallel` is set, the commands will be ran in parallel; they'll by default be limited to a number of parallel tasks roughly equal to half your core number, but that can be overridden via `-j,--jobs`, or disabled by setting `-j unlimited`.\n\n      - If `-p,--parallel` and `-i,--interlaced` are both set, Yarn will print the lines from the output as it receives them. If `-i,--interlaced` wasn't set, it would instead buffer the output from each process and print the resulting buffers only after their source processes have exited.\n\n      - If `-t,--topological` is set, Yarn will only run the command after all workspaces that it depends on through the `dependencies` field have successfully finished executing. If `--topological-dev` is set, both the `dependencies` and `devDependencies` fields will be considered when figuring out the wait points.\n\n      - If `-A,--all` is set, Yarn will run the command on all the workspaces of a project. By default yarn runs the command only on current and all its descendant workspaces.\n\n      - If `-R,--recursive` is set, Yarn will find workspaces to run the command on by recursively evaluating `dependencies` and `devDependencies` fields, instead of looking at the `workspaces` fields.\n\n      - If `--from` is set, Yarn will use the packages matching the 'from' glob as the starting point for any recursive search.\n\n      - If `--since` is set, Yarn will only run the command on workspaces that have been modified since the specified ref. By default Yarn will use the refs specified by the `changesetBaseRefs` configuration option.\n\n      - The command may apply to only some workspaces through the use of `--include` which acts as a whitelist. The `--exclude` flag will do the opposite and will be a list of packages that mustn't execute the script. Both flags accept glob patterns (if valid Idents and supported by [micromatch](https://github.com/micromatch/micromatch)). Make sure to escape the patterns, to prevent your own shell from trying to expand them.\n\n      Adding the `-v,--verbose` flag will cause Yarn to print more information; in particular the name of the workspace that generated the output will be printed at the front of each line.\n\n      If the command is `run` and the script being run does not exist the child workspace will be skipped without error.\n    ",
        examples: [["Publish current and all descendant packages", "yarn workspaces foreach npm publish --tolerate-republish"], ["Run build script on current and all descendant packages", "yarn workspaces foreach run build"], ["Run build script on current and all descendant packages in parallel, building package dependencies first", "yarn workspaces foreach -pt run build"], ["Run build script on several packages and all their dependencies, building dependencies first", "yarn workspaces foreach -ptR --from '{workspace-a,workspace-b}' run build"]]
      });

      function dr(e, {prefix: r, interlaced: t}) {
        let n = e.createStreamReporter(r), s = new F.miscUtils.DefaultStream;
        s.pipe(n, {end: !1}), s.on("finish", () => {
          n.end()
        });
        let i = new Promise(c => {
          n.on("finish", () => {
            c(s.active)
          })
        });
        if (t) return [s, i];
        let a = new F.miscUtils.BufferStream;
        return a.pipe(s, {end: !1}), a.on("finish", () => {
          s.end()
        }), [a, i]
      }

      function qn(e, {configuration: r, commandIndex: t, verbose: n}) {
        if (!n) return null;
        let i = `[${F.structUtils.stringifyIdent(e.locator)}]:`,
          a = ["#2E86AB", "#A23B72", "#F18F01", "#C73E1D", "#CCE2A3"], c = a[t % a.length];
        return F.formatUtils.pretty(r, i, c)
      }

      var Kn = {commands: [ce, pe]}, Wn = Kn;
      return wr(jn);
    })();
    /*!
 * fill-range <https://github.com/jonschlinkert/fill-range>
 *
 * Copyright (c) 2014-present, Jon Schlinkert.
 * Licensed under the MIT License.
 */
    /*!
 * is-number <https://github.com/jonschlinkert/is-number>
 *
 * Copyright (c) 2014-present, Jon Schlinkert.
 * Released under the MIT License.
 */
    /*!
 * to-regex-range <https://github.com/micromatch/to-regex-range>
 *
 * Copyright (c) 2015-present, Jon Schlinkert.
 * Released under the MIT License.
 */
    return plugin;
  }
};
