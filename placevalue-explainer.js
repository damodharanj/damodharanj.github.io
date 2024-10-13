import De, { forwardRef as hr, createElement as $e, useState as ue, useEffect as pr } from "react";
var ce = { exports: {} }, B = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ie;
function mr() {
  if (Ie) return B;
  Ie = 1;
  var _ = De, O = Symbol.for("react.element"), P = Symbol.for("react.fragment"), b = Object.prototype.hasOwnProperty, T = _.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, v = { key: !0, ref: !0, __self: !0, __source: !0 };
  function j(c, f, w) {
    var p, x = {}, R = null, D = null;
    w !== void 0 && (R = "" + w), f.key !== void 0 && (R = "" + f.key), f.ref !== void 0 && (D = f.ref);
    for (p in f) b.call(f, p) && !v.hasOwnProperty(p) && (x[p] = f[p]);
    if (c && c.defaultProps) for (p in f = c.defaultProps, f) x[p] === void 0 && (x[p] = f[p]);
    return { $$typeof: O, type: c, key: R, ref: D, props: x, _owner: T.current };
  }
  return B.Fragment = P, B.jsx = j, B.jsxs = j, B;
}
var U = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ae;
function br() {
  return Ae || (Ae = 1, process.env.NODE_ENV !== "production" && function() {
    var _ = De, O = Symbol.for("react.element"), P = Symbol.for("react.portal"), b = Symbol.for("react.fragment"), T = Symbol.for("react.strict_mode"), v = Symbol.for("react.profiler"), j = Symbol.for("react.provider"), c = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), D = Symbol.for("react.offscreen"), q = Symbol.iterator, G = "@@iterator";
    function X(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = q && e[q] || e[G];
      return typeof r == "function" ? r : null;
    }
    var N = _.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function s(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        g("error", e, t);
      }
    }
    function g(e, r, t) {
      {
        var n = N.ReactDebugCurrentFrame, l = n.getStackAddendum();
        l !== "" && (r += "%s", t = t.concat([l]));
        var u = t.map(function(o) {
          return String(o);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var Z = !1, Q = !1, k = !1, $ = !1, S = !1, F;
    F = Symbol.for("react.module.reference");
    function Le(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === b || e === v || S || e === T || e === w || e === p || $ || e === D || Z || Q || k || typeof e == "object" && e !== null && (e.$$typeof === R || e.$$typeof === x || e.$$typeof === j || e.$$typeof === c || e.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === F || e.getModuleId !== void 0));
    }
    function We(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var l = r.displayName || r.name || "";
      return l !== "" ? t + "(" + l + ")" : t;
    }
    function fe(e) {
      return e.displayName || "Context";
    }
    function C(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && s("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case b:
          return "Fragment";
        case P:
          return "Portal";
        case v:
          return "Profiler";
        case T:
          return "StrictMode";
        case w:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            var r = e;
            return fe(r) + ".Consumer";
          case j:
            var t = e;
            return fe(t._context) + ".Provider";
          case f:
            return We(e, e.render, "ForwardRef");
          case x:
            var n = e.displayName || null;
            return n !== null ? n : C(e.type) || "Memo";
          case R: {
            var l = e, u = l._payload, o = l._init;
            try {
              return C(o(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var I = Object.assign, W = 0, de, ve, he, pe, me, be, ge;
    function ye() {
    }
    ye.__reactDisabledLog = !0;
    function Ve() {
      {
        if (W === 0) {
          de = console.log, ve = console.info, he = console.warn, pe = console.error, me = console.group, be = console.groupCollapsed, ge = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ye,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        W++;
      }
    }
    function Ye() {
      {
        if (W--, W === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: I({}, e, {
              value: de
            }),
            info: I({}, e, {
              value: ve
            }),
            warn: I({}, e, {
              value: he
            }),
            error: I({}, e, {
              value: pe
            }),
            group: I({}, e, {
              value: me
            }),
            groupCollapsed: I({}, e, {
              value: be
            }),
            groupEnd: I({}, e, {
              value: ge
            })
          });
        }
        W < 0 && s("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ee = N.ReactCurrentDispatcher, re;
    function H(e, r, t) {
      {
        if (re === void 0)
          try {
            throw Error();
          } catch (l) {
            var n = l.stack.trim().match(/\n( *(at )?)/);
            re = n && n[1] || "";
          }
        return `
` + re + e;
      }
    }
    var te = !1, J;
    {
      var Be = typeof WeakMap == "function" ? WeakMap : Map;
      J = new Be();
    }
    function xe(e, r) {
      if (!e || te)
        return "";
      {
        var t = J.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      te = !0;
      var l = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = ee.current, ee.current = null, Ve();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (y) {
              n = y;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (y) {
              n = y;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (y) {
            n = y;
          }
          e();
        }
      } catch (y) {
        if (y && n && typeof y.stack == "string") {
          for (var i = y.stack.split(`
`), m = n.stack.split(`
`), d = i.length - 1, h = m.length - 1; d >= 1 && h >= 0 && i[d] !== m[h]; )
            h--;
          for (; d >= 1 && h >= 0; d--, h--)
            if (i[d] !== m[h]) {
              if (d !== 1 || h !== 1)
                do
                  if (d--, h--, h < 0 || i[d] !== m[h]) {
                    var E = `
` + i[d].replace(" at new ", " at ");
                    return e.displayName && E.includes("<anonymous>") && (E = E.replace("<anonymous>", e.displayName)), typeof e == "function" && J.set(e, E), E;
                  }
                while (d >= 1 && h >= 0);
              break;
            }
        }
      } finally {
        te = !1, ee.current = u, Ye(), Error.prepareStackTrace = l;
      }
      var L = e ? e.displayName || e.name : "", A = L ? H(L) : "";
      return typeof e == "function" && J.set(e, A), A;
    }
    function Ue(e, r, t) {
      return xe(e, !1);
    }
    function qe(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function K(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return xe(e, qe(e));
      if (typeof e == "string")
        return H(e);
      switch (e) {
        case w:
          return H("Suspense");
        case p:
          return H("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return Ue(e.render);
          case x:
            return K(e.type, r, t);
          case R: {
            var n = e, l = n._payload, u = n._init;
            try {
              return K(u(l), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var V = Object.prototype.hasOwnProperty, Ee = {}, Re = N.ReactDebugCurrentFrame;
    function z(e) {
      if (e) {
        var r = e._owner, t = K(e.type, e._source, r ? r.type : null);
        Re.setExtraStackFrame(t);
      } else
        Re.setExtraStackFrame(null);
    }
    function He(e, r, t, n, l) {
      {
        var u = Function.call.bind(V);
        for (var o in e)
          if (u(e, o)) {
            var i = void 0;
            try {
              if (typeof e[o] != "function") {
                var m = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw m.name = "Invariant Violation", m;
              }
              i = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (d) {
              i = d;
            }
            i && !(i instanceof Error) && (z(l), s("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof i), z(null)), i instanceof Error && !(i.message in Ee) && (Ee[i.message] = !0, z(l), s("Failed %s type: %s", t, i.message), z(null));
          }
      }
    }
    var Je = Array.isArray;
    function ne(e) {
      return Je(e);
    }
    function Ke(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function ze(e) {
      try {
        return _e(e), !1;
      } catch {
        return !0;
      }
    }
    function _e(e) {
      return "" + e;
    }
    function Te(e) {
      if (ze(e))
        return s("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ke(e)), _e(e);
    }
    var Y = N.ReactCurrentOwner, Ge = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, je, we, ae;
    ae = {};
    function Xe(e) {
      if (V.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ze(e) {
      if (V.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Qe(e, r) {
      if (typeof e.ref == "string" && Y.current && r && Y.current.stateNode !== r) {
        var t = C(Y.current.type);
        ae[t] || (s('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C(Y.current.type), e.ref), ae[t] = !0);
      }
    }
    function er(e, r) {
      {
        var t = function() {
          je || (je = !0, s("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function rr(e, r) {
      {
        var t = function() {
          we || (we = !0, s("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var tr = function(e, r, t, n, l, u, o) {
      var i = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: O,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return i._store = {}, Object.defineProperty(i._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(i, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(i, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: l
      }), Object.freeze && (Object.freeze(i.props), Object.freeze(i)), i;
    };
    function nr(e, r, t, n, l) {
      {
        var u, o = {}, i = null, m = null;
        t !== void 0 && (Te(t), i = "" + t), Ze(r) && (Te(r.key), i = "" + r.key), Xe(r) && (m = r.ref, Qe(r, l));
        for (u in r)
          V.call(r, u) && !Ge.hasOwnProperty(u) && (o[u] = r[u]);
        if (e && e.defaultProps) {
          var d = e.defaultProps;
          for (u in d)
            o[u] === void 0 && (o[u] = d[u]);
        }
        if (i || m) {
          var h = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          i && er(o, h), m && rr(o, h);
        }
        return tr(e, i, m, l, n, Y.current, o);
      }
    }
    var ie = N.ReactCurrentOwner, ke = N.ReactDebugCurrentFrame;
    function M(e) {
      if (e) {
        var r = e._owner, t = K(e.type, e._source, r ? r.type : null);
        ke.setExtraStackFrame(t);
      } else
        ke.setExtraStackFrame(null);
    }
    var oe;
    oe = !1;
    function se(e) {
      return typeof e == "object" && e !== null && e.$$typeof === O;
    }
    function Se() {
      {
        if (ie.current) {
          var e = C(ie.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function ar(e) {
      return "";
    }
    var Ce = {};
    function ir(e) {
      {
        var r = Se();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Oe(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ir(r);
        if (Ce[t])
          return;
        Ce[t] = !0;
        var n = "";
        e && e._owner && e._owner !== ie.current && (n = " It was passed a child from " + C(e._owner.type) + "."), M(e), s('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), M(null);
      }
    }
    function Pe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (ne(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            se(n) && Oe(n, r);
          }
        else if (se(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var l = X(e);
          if (typeof l == "function" && l !== e.entries)
            for (var u = l.call(e), o; !(o = u.next()).done; )
              se(o.value) && Oe(o.value, r);
        }
      }
    }
    function or(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === x))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = C(r);
          He(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !oe) {
          oe = !0;
          var l = C(r);
          s("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", l || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && s("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function sr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            M(e), s("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), M(null);
            break;
          }
        }
        e.ref !== null && (M(e), s("Invalid attribute `ref` supplied to `React.Fragment`."), M(null));
      }
    }
    var Ne = {};
    function Fe(e, r, t, n, l, u) {
      {
        var o = Le(e);
        if (!o) {
          var i = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var m = ar();
          m ? i += m : i += Se();
          var d;
          e === null ? d = "null" : ne(e) ? d = "array" : e !== void 0 && e.$$typeof === O ? (d = "<" + (C(e.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : d = typeof e, s("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", d, i);
        }
        var h = nr(e, r, t, l, u);
        if (h == null)
          return h;
        if (o) {
          var E = r.children;
          if (E !== void 0)
            if (n)
              if (ne(E)) {
                for (var L = 0; L < E.length; L++)
                  Pe(E[L], e);
                Object.freeze && Object.freeze(E);
              } else
                s("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Pe(E, e);
        }
        if (V.call(r, "key")) {
          var A = C(e), y = Object.keys(r).filter(function(vr) {
            return vr !== "key";
          }), le = y.length > 0 ? "{key: someKey, " + y.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ne[A + le]) {
            var dr = y.length > 0 ? "{" + y.join(": ..., ") + ": ...}" : "{}";
            s(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, le, A, dr, A), Ne[A + le] = !0;
          }
        }
        return e === b ? sr(h) : or(h), h;
      }
    }
    function lr(e, r, t) {
      return Fe(e, r, t, !0);
    }
    function ur(e, r, t) {
      return Fe(e, r, t, !1);
    }
    var cr = ur, fr = lr;
    U.Fragment = b, U.jsx = cr, U.jsxs = fr;
  }()), U;
}
process.env.NODE_ENV === "production" ? ce.exports = mr() : ce.exports = br();
var a = ce.exports;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var gr = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yr = (_) => _.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), Me = (_, O) => {
  const P = hr(
    ({
      color: b = "currentColor",
      size: T = 24,
      strokeWidth: v = 2,
      absoluteStrokeWidth: j,
      className: c = "",
      children: f,
      ...w
    }, p) => $e(
      "svg",
      {
        ref: p,
        ...gr,
        width: T,
        height: T,
        stroke: b,
        strokeWidth: j ? Number(v) * 24 / Number(T) : v,
        className: ["lucide", `lucide-${yr(_)}`, c].join(" "),
        ...w
      },
      [
        ...O.map(([x, R]) => $e(x, R)),
        ...Array.isArray(f) ? f : [f]
      ]
    )
  );
  return P.displayName = `${_}`, P;
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xr = Me("Moon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Er = Me("Sun", [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
]), _r = ({
  initialNumber: _ = "359468421",
  initialMethod: O = "indian",
  initialDarkMode: P = !1
}) => {
  const [b, T] = ue(_), [v, j] = ue(O), [c, f] = ue(P);
  pr(() => {
    c ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark");
  }, [c]);
  const w = (s) => v === "indian" ? s.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,") : s.replace(/\B(?=(\d{3})+(?!\d))/g, ","), p = (s) => {
    const g = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"], Z = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"], Q = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
    if (s === "0") return "Zero";
    let k = "";
    for (let $ = 0; $ < s.length; $++) {
      const S = parseInt(s[$]), F = s.length - $ - 1;
      if (S !== 0)
        if (F === 9) k += g[S] + " Billion ";
        else if (F === 6) k += g[S] + " Million ";
        else if (F === 3) k += g[S] + " Thousand ";
        else if (F === 2) k += g[S] + " Hundred ";
        else if (F === 1)
          if (S === 1) {
            k += Z[parseInt(s[$ + 1])] + " ";
            break;
          } else
            k += Q[S] + " ";
        else
          k += g[S] + " ";
    }
    return k.trim();
  }, x = ["Crores", "Lakhs", "Thousands", "Ones"], R = ["TC", "C", "TL", "L", "T Th", "Th", "H", "T", "O"], D = ["Billions", "Millions", "Thousands", "Ones"], q = ["HB", "TB", "B", "HM", "TM", "M", "HT", "T Th", "Th", "H", "T", "O"], G = v === "indian" ? x : D, X = v === "indian" ? R : q, N = b.padStart(v === "indian" ? 9 : 12, "0");
  return /* @__PURE__ */ a.jsx("div", { className: `min-h-screen py-8 px-4 ${c ? "bg-gray-900 text-white" : "bg-blue-50 text-black"}`, children: /* @__PURE__ */ a.jsxs("div", { className: "max-w-4xl mx-auto", children: [
    /* @__PURE__ */ a.jsxs("div", { className: "flex justify-between items-center mb-8", children: [
      /* @__PURE__ */ a.jsx("h1", { className: `text-4xl font-bold ${c ? "text-blue-300" : "text-blue-800"}`, children: "Place Value Methods" }),
      /* @__PURE__ */ a.jsx(
        "button",
        {
          onClick: () => f(!c),
          className: `p-2 rounded-full ${c ? "bg-yellow-400 text-gray-900" : "bg-gray-800 text-yellow-400"}`,
          children: c ? /* @__PURE__ */ a.jsx(Er, { size: 24 }) : /* @__PURE__ */ a.jsx(xr, { size: 24 })
        }
      )
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "space-y-8", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "mb-6", children: [
        /* @__PURE__ */ a.jsxs("label", { className: "inline-flex items-center mr-4", children: [
          /* @__PURE__ */ a.jsx(
            "input",
            {
              type: "radio",
              className: "form-radio dark:bg-gray-700 dark:border-gray-600",
              name: "method",
              value: "indian",
              checked: v === "indian",
              onChange: () => j("indian")
            }
          ),
          /* @__PURE__ */ a.jsx("span", { className: "ml-2", children: "Indian Method" })
        ] }),
        /* @__PURE__ */ a.jsxs("label", { className: "inline-flex items-center", children: [
          /* @__PURE__ */ a.jsx(
            "input",
            {
              type: "radio",
              className: "form-radio dark:bg-gray-700 dark:border-gray-600",
              name: "method",
              value: "international",
              checked: v === "international",
              onChange: () => j("international")
            }
          ),
          /* @__PURE__ */ a.jsx("span", { className: "ml-2", children: "International Method" })
        ] })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "mb-6", children: [
        /* @__PURE__ */ a.jsx("label", { htmlFor: "number-input", className: "block text-sm font-medium mb-2", children: "Enter a number:" }),
        /* @__PURE__ */ a.jsx(
          "input",
          {
            id: "number-input",
            type: "text",
            value: b,
            onChange: (s) => T(s.target.value.replace(/\D/g, "")),
            className: "shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white",
            placeholder: "Enter a number"
          }
        )
      ] }),
      /* @__PURE__ */ a.jsx("div", { className: `p-4 rounded-lg shadow-lg mb-6 overflow-x-auto ${c ? "bg-gray-800" : "bg-white"}`, children: /* @__PURE__ */ a.jsxs("table", { className: "w-full border-collapse", children: [
        /* @__PURE__ */ a.jsx("thead", { children: /* @__PURE__ */ a.jsxs("tr", { children: [
          /* @__PURE__ */ a.jsx("th", { className: `border p-2 ${c ? "bg-green-800" : "bg-green-200"}`, children: "Periods" }),
          G.map((s, g) => /* @__PURE__ */ a.jsx("th", { className: `border p-2 ${c ? "bg-green-800" : "bg-green-200"}`, colSpan: v === "indian" ? g === 3 ? 3 : 2 : 3, children: s }, g))
        ] }) }),
        /* @__PURE__ */ a.jsxs("tbody", { children: [
          /* @__PURE__ */ a.jsxs("tr", { children: [
            /* @__PURE__ */ a.jsx("td", { className: "border p-2 font-bold", children: "Place Value" }),
            X.map((s, g) => /* @__PURE__ */ a.jsx("td", { className: "border p-2 text-center", children: s }, g))
          ] }),
          /* @__PURE__ */ a.jsxs("tr", { children: [
            /* @__PURE__ */ a.jsx("td", { className: "border p-2 font-bold", children: "Number" }),
            N.split("").map((s, g) => /* @__PURE__ */ a.jsx("td", { className: `border p-2 text-center font-bold ${c ? "text-blue-300" : "text-blue-600"}`, children: s }, g))
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ a.jsxs("div", { className: `p-4 rounded-lg shadow-lg ${c ? "bg-gray-800" : "bg-white"}`, children: [
        /* @__PURE__ */ a.jsx("h2", { className: `text-xl font-bold mb-4 ${c ? "text-blue-300" : "text-blue-800"}`, children: "Explanation" }),
        /* @__PURE__ */ a.jsxs("p", { className: "mb-4", children: [
          "The ",
          v === "indian" ? "Indian" : "International",
          " Method uses a unique system of place values and periods. Let's break down the number ",
          b,
          ":"
        ] }),
        /* @__PURE__ */ a.jsxs("p", { className: "mb-4", children: [
          "In the ",
          v === "indian" ? "Indian" : "International",
          " System, we group digits ",
          v === "indian" ? "in pairs from right to left, except for the last group which can have one or two digits" : "in sets of three from right to left",
          "."
        ] }),
        /* @__PURE__ */ a.jsxs("p", { className: "mb-4", children: [
          "The formatted number is: ",
          /* @__PURE__ */ a.jsx("span", { className: `font-bold ${c ? "text-green-400" : "text-green-600"}`, children: w(b) })
        ] }),
        /* @__PURE__ */ a.jsx("p", { className: "mb-4", children: "We read this number as:" }),
        /* @__PURE__ */ a.jsx("p", { className: `font-bold mb-4 ${c ? "text-blue-300" : "text-blue-600"}`, children: p(b) }),
        /* @__PURE__ */ a.jsxs("p", { children: [
          "The commas in the formatted number separate the periods: ",
          v === "indian" ? "Crores, Lakhs, Thousands, and Ones" : "Billions, Millions, Thousands, and Ones",
          ". This grouping helps in reading and understanding large numbers easily in the ",
          v === "indian" ? "Indian" : "International",
          " numbering system."
        ] })
      ] })
    ] })
  ] }) });
};
export {
  _r as default
};
