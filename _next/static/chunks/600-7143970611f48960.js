"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [600],
  {
    3480: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return s;
        },
      });
      var n = r(2265),
        i = {
          xmlns: "http://www.w3.org/2000/svg",
          width: 24,
          height: 24,
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: 2,
          strokeLinecap: "round",
          strokeLinejoin: "round",
        };
      /**
       * @license lucide-react v0.373.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let o = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
        s = (e, t) => {
          let r = (0, n.forwardRef)((r, s) => {
            let {
              color: a = "currentColor",
              size: l = 24,
              strokeWidth: u = 2,
              absoluteStrokeWidth: c,
              className: d = "",
              children: h,
              ...p
            } = r;
            return (0, n.createElement)(
              "svg",
              {
                ref: s,
                ...i,
                width: l,
                height: l,
                stroke: a,
                strokeWidth: c ? (24 * Number(u)) / Number(l) : u,
                className: ["lucide", "lucide-".concat(o(e)), d].join(" "),
                ...p,
              },
              [
                ...t.map((e) => {
                  let [t, r] = e;
                  return (0, n.createElement)(t, r);
                }),
                ...(Array.isArray(h) ? h : [h]),
              ]
            );
          });
          return (r.displayName = "".concat(e)), r;
        };
    },
    2421: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      /**
       * @license lucide-react v0.373.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let n = (0, r(3480).Z)("ChevronDown", [
        ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
      ]);
    },
    7138: function (e, t, r) {
      r.d(t, {
        default: function () {
          return i.a;
        },
      });
      var n = r(231),
        i = r.n(n);
    },
    844: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "addLocale", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        r(8157);
      let n = function (e) {
        for (
          var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1;
          n < t;
          n++
        )
          r[n - 1] = arguments[n];
        return e;
      };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    5944: function (e, t, r) {
      function n(e, t, r, n) {
        return !1;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getDomainLocale", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        r(8157),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    8173: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "Image", {
          enumerable: !0,
          get: function () {
            return b;
          },
        });
      let n = r(9920),
        i = r(1452),
        o = r(7437),
        s = i._(r(2265)),
        a = n._(r(4887)),
        l = n._(r(8321)),
        u = r(497),
        c = r(7103),
        d = r(3938);
      r(2301);
      let h = r(291),
        p = n._(r(1241)),
        f = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !1,
        };
      function m(e, t, r, n, i, o, s) {
        let a = null == e ? void 0 : e.src;
        e &&
          e["data-loaded-src"] !== a &&
          ((e["data-loaded-src"] = a),
          ("decode" in e ? e.decode() : Promise.resolve())
            .catch(() => {})
            .then(() => {
              if (e.parentElement && e.isConnected) {
                if (("empty" !== t && i(!0), null == r ? void 0 : r.current)) {
                  let t = new Event("load");
                  Object.defineProperty(t, "target", {
                    writable: !1,
                    value: e,
                  });
                  let n = !1,
                    i = !1;
                  r.current({
                    ...t,
                    nativeEvent: t,
                    currentTarget: e,
                    target: e,
                    isDefaultPrevented: () => n,
                    isPropagationStopped: () => i,
                    persist: () => {},
                    preventDefault: () => {
                      (n = !0), t.preventDefault();
                    },
                    stopPropagation: () => {
                      (i = !0), t.stopPropagation();
                    },
                  });
                }
                (null == n ? void 0 : n.current) && n.current(e);
              }
            }));
      }
      function g(e) {
        let [t, r] = s.version.split(".", 2),
          n = parseInt(t, 10),
          i = parseInt(r, 10);
        return n > 18 || (18 === n && i >= 3)
          ? { fetchPriority: e }
          : { fetchpriority: e };
      }
      "undefined" == typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
      let v = (0, s.forwardRef)((e, t) => {
        let {
          src: r,
          srcSet: n,
          sizes: i,
          height: a,
          width: l,
          decoding: u,
          className: c,
          style: d,
          fetchPriority: h,
          placeholder: p,
          loading: f,
          unoptimized: v,
          fill: y,
          onLoadRef: b,
          onLoadingCompleteRef: x,
          setBlurComplete: w,
          setShowAltText: P,
          sizesInput: S,
          onLoad: E,
          onError: T,
          ...A
        } = e;
        return (0, o.jsx)("img", {
          ...A,
          ...g(h),
          loading: f,
          width: l,
          height: a,
          decoding: u,
          "data-nimg": y ? "fill" : "1",
          className: c,
          style: d,
          sizes: i,
          srcSet: n,
          src: r,
          ref: (0, s.useCallback)(
            (e) => {
              t &&
                ("function" == typeof t
                  ? t(e)
                  : "object" == typeof t && (t.current = e)),
                e &&
                  (T && (e.src = e.src), e.complete && m(e, p, b, x, w, v, S));
            },
            [r, p, b, x, w, T, v, S, t]
          ),
          onLoad: (e) => {
            m(e.currentTarget, p, b, x, w, v, S);
          },
          onError: (e) => {
            P(!0), "empty" !== p && w(!0), T && T(e);
          },
        });
      });
      function y(e) {
        let { isAppRouter: t, imgAttributes: r } = e,
          n = {
            as: "image",
            imageSrcSet: r.srcSet,
            imageSizes: r.sizes,
            crossOrigin: r.crossOrigin,
            referrerPolicy: r.referrerPolicy,
            ...g(r.fetchPriority),
          };
        return t && a.default.preload
          ? (a.default.preload(r.src, n), null)
          : (0, o.jsx)(l.default, {
              children: (0, o.jsx)(
                "link",
                { rel: "preload", href: r.srcSet ? void 0 : r.src, ...n },
                "__nimg-" + r.src + r.srcSet + r.sizes
              ),
            });
      }
      let b = (0, s.forwardRef)((e, t) => {
        let r = (0, s.useContext)(h.RouterContext),
          n = (0, s.useContext)(d.ImageConfigContext),
          i = (0, s.useMemo)(() => {
            let e = f || n || c.imageConfigDefault,
              t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
              r = e.deviceSizes.sort((e, t) => e - t);
            return { ...e, allSizes: t, deviceSizes: r };
          }, [n]),
          { onLoad: a, onLoadingComplete: l } = e,
          m = (0, s.useRef)(a);
        (0, s.useEffect)(() => {
          m.current = a;
        }, [a]);
        let g = (0, s.useRef)(l);
        (0, s.useEffect)(() => {
          g.current = l;
        }, [l]);
        let [b, x] = (0, s.useState)(!1),
          [w, P] = (0, s.useState)(!1),
          { props: S, meta: E } = (0, u.getImgProps)(e, {
            defaultLoader: p.default,
            imgConf: i,
            blurComplete: b,
            showAltText: w,
          });
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(v, {
              ...S,
              unoptimized: E.unoptimized,
              placeholder: E.placeholder,
              fill: E.fill,
              onLoadRef: m,
              onLoadingCompleteRef: g,
              setBlurComplete: x,
              setShowAltText: P,
              sizesInput: e.sizes,
              ref: t,
            }),
            E.priority
              ? (0, o.jsx)(y, { isAppRouter: !r, imgAttributes: S })
              : null,
          ],
        });
      });
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    231: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return x;
          },
        });
      let n = r(9920),
        i = r(7437),
        o = n._(r(2265)),
        s = r(8016),
        a = r(8029),
        l = r(1142),
        u = r(3461),
        c = r(844),
        d = r(291),
        h = r(4467),
        p = r(3106),
        f = r(5944),
        m = r(4897),
        g = r(1507),
        v = new Set();
      function y(e, t, r, n, i, o) {
        if ("undefined" != typeof window && (o || (0, a.isLocalURL)(t))) {
          if (!n.bypassPrefetchedCheck) {
            let i =
              t +
              "%" +
              r +
              "%" +
              (void 0 !== n.locale
                ? n.locale
                : "locale" in e
                ? e.locale
                : void 0);
            if (v.has(i)) return;
            v.add(i);
          }
          Promise.resolve(o ? e.prefetch(t, i) : e.prefetch(t, r, n)).catch(
            (e) => {}
          );
        }
      }
      function b(e) {
        return "string" == typeof e ? e : (0, l.formatUrl)(e);
      }
      let x = o.default.forwardRef(function (e, t) {
        let r, n;
        let {
          href: l,
          as: v,
          children: x,
          prefetch: w = null,
          passHref: P,
          replace: S,
          shallow: E,
          scroll: T,
          locale: A,
          onClick: C,
          onMouseEnter: R,
          onTouchStart: M,
          legacyBehavior: k = !1,
          ...j
        } = e;
        (r = x),
          k &&
            ("string" == typeof r || "number" == typeof r) &&
            (r = (0, i.jsx)("a", { children: r }));
        let V = o.default.useContext(d.RouterContext),
          O = o.default.useContext(h.AppRouterContext),
          D = null != V ? V : O,
          _ = !V,
          L = !1 !== w,
          I = null === w ? g.PrefetchKind.AUTO : g.PrefetchKind.FULL,
          { href: N, as: F } = o.default.useMemo(() => {
            if (!V) {
              let e = b(l);
              return { href: e, as: v ? b(v) : e };
            }
            let [e, t] = (0, s.resolveHref)(V, l, !0);
            return { href: e, as: v ? (0, s.resolveHref)(V, v) : t || e };
          }, [V, l, v]),
          B = o.default.useRef(N),
          z = o.default.useRef(F);
        k && (n = o.default.Children.only(r));
        let U = k ? n && "object" == typeof n && n.ref : t,
          [$, W, X] = (0, p.useIntersection)({ rootMargin: "200px" }),
          H = o.default.useCallback(
            (e) => {
              (z.current !== F || B.current !== N) &&
                (X(), (z.current = F), (B.current = N)),
                $(e),
                U &&
                  ("function" == typeof U
                    ? U(e)
                    : "object" == typeof U && (U.current = e));
            },
            [F, U, N, X, $]
          );
        o.default.useEffect(() => {
          D && W && L && y(D, N, F, { locale: A }, { kind: I }, _);
        }, [F, N, W, A, L, null == V ? void 0 : V.locale, D, _, I]);
        let G = {
          ref: H,
          onClick(e) {
            k || "function" != typeof C || C(e),
              k &&
                n.props &&
                "function" == typeof n.props.onClick &&
                n.props.onClick(e),
              D &&
                !e.defaultPrevented &&
                (function (e, t, r, n, i, s, l, u, c) {
                  let { nodeName: d } = e.currentTarget;
                  if (
                    "A" === d.toUpperCase() &&
                    ((function (e) {
                      let t = e.currentTarget.getAttribute("target");
                      return (
                        (t && "_self" !== t) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      );
                    })(e) ||
                      (!c && !(0, a.isLocalURL)(r)))
                  )
                    return;
                  e.preventDefault();
                  let h = () => {
                    let e = null == l || l;
                    "beforePopState" in t
                      ? t[i ? "replace" : "push"](r, n, {
                          shallow: s,
                          locale: u,
                          scroll: e,
                        })
                      : t[i ? "replace" : "push"](n || r, { scroll: e });
                  };
                  c ? o.default.startTransition(h) : h();
                })(e, D, N, F, S, E, T, A, _);
          },
          onMouseEnter(e) {
            k || "function" != typeof R || R(e),
              k &&
                n.props &&
                "function" == typeof n.props.onMouseEnter &&
                n.props.onMouseEnter(e),
              D &&
                (L || !_) &&
                y(
                  D,
                  N,
                  F,
                  { locale: A, priority: !0, bypassPrefetchedCheck: !0 },
                  { kind: I },
                  _
                );
          },
          onTouchStart: function (e) {
            k || "function" != typeof M || M(e),
              k &&
                n.props &&
                "function" == typeof n.props.onTouchStart &&
                n.props.onTouchStart(e),
              D &&
                (L || !_) &&
                y(
                  D,
                  N,
                  F,
                  { locale: A, priority: !0, bypassPrefetchedCheck: !0 },
                  { kind: I },
                  _
                );
          },
        };
        if ((0, u.isAbsoluteUrl)(F)) G.href = F;
        else if (!k || P || ("a" === n.type && !("href" in n.props))) {
          let e = void 0 !== A ? A : null == V ? void 0 : V.locale,
            t =
              (null == V ? void 0 : V.isLocaleDomain) &&
              (0, f.getDomainLocale)(
                F,
                e,
                null == V ? void 0 : V.locales,
                null == V ? void 0 : V.domainLocales
              );
          G.href =
            t ||
            (0, m.addBasePath)(
              (0, c.addLocale)(F, e, null == V ? void 0 : V.defaultLocale)
            );
        }
        return k
          ? o.default.cloneElement(n, G)
          : (0, i.jsx)("a", { ...j, ...G, children: r });
      });
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    9189: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          cancelIdleCallback: function () {
            return n;
          },
          requestIdleCallback: function () {
            return r;
          },
        });
      let r =
          ("undefined" != typeof self &&
            self.requestIdleCallback &&
            self.requestIdleCallback.bind(window)) ||
          function (e) {
            let t = Date.now();
            return self.setTimeout(function () {
              e({
                didTimeout: !1,
                timeRemaining: function () {
                  return Math.max(0, 50 - (Date.now() - t));
                },
              });
            }, 1);
          },
        n =
          ("undefined" != typeof self &&
            self.cancelIdleCallback &&
            self.cancelIdleCallback.bind(window)) ||
          function (e) {
            return clearTimeout(e);
          };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    8016: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "resolveHref", {
          enumerable: !0,
          get: function () {
            return d;
          },
        });
      let n = r(8323),
        i = r(1142),
        o = r(5519),
        s = r(3461),
        a = r(8157),
        l = r(8029),
        u = r(9195),
        c = r(20);
      function d(e, t, r) {
        let d;
        let h = "string" == typeof t ? t : (0, i.formatWithValidation)(t),
          p = h.match(/^[a-zA-Z]{1,}:\/\//),
          f = p ? h.slice(p[0].length) : h;
        if ((f.split("?", 1)[0] || "").match(/(\/\/|\\)/)) {
          console.error(
            "Invalid href '" +
              h +
              "' passed to next/router in page: '" +
              e.pathname +
              "'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href."
          );
          let t = (0, s.normalizeRepeatedSlashes)(f);
          h = (p ? p[0] : "") + t;
        }
        if (!(0, l.isLocalURL)(h)) return r ? [h] : h;
        try {
          d = new URL(h.startsWith("#") ? e.asPath : e.pathname, "http://n");
        } catch (e) {
          d = new URL("/", "http://n");
        }
        try {
          let e = new URL(h, d);
          e.pathname = (0, a.normalizePathTrailingSlash)(e.pathname);
          let t = "";
          if ((0, u.isDynamicRoute)(e.pathname) && e.searchParams && r) {
            let r = (0, n.searchParamsToUrlQuery)(e.searchParams),
              { result: s, params: a } = (0, c.interpolateAs)(
                e.pathname,
                e.pathname,
                r
              );
            s &&
              (t = (0, i.formatWithValidation)({
                pathname: s,
                hash: e.hash,
                query: (0, o.omit)(r, a),
              }));
          }
          let s =
            e.origin === d.origin ? e.href.slice(e.origin.length) : e.href;
          return r ? [s, t || s] : s;
        } catch (e) {
          return r ? [h] : h;
        }
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    3106: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "useIntersection", {
          enumerable: !0,
          get: function () {
            return l;
          },
        });
      let n = r(2265),
        i = r(9189),
        o = "function" == typeof IntersectionObserver,
        s = new Map(),
        a = [];
      function l(e) {
        let { rootRef: t, rootMargin: r, disabled: l } = e,
          u = l || !o,
          [c, d] = (0, n.useState)(!1),
          h = (0, n.useRef)(null),
          p = (0, n.useCallback)((e) => {
            h.current = e;
          }, []);
        return (
          (0, n.useEffect)(() => {
            if (o) {
              if (u || c) return;
              let e = h.current;
              if (e && e.tagName)
                return (function (e, t, r) {
                  let {
                    id: n,
                    observer: i,
                    elements: o,
                  } = (function (e) {
                    let t;
                    let r = {
                        root: e.root || null,
                        margin: e.rootMargin || "",
                      },
                      n = a.find(
                        (e) => e.root === r.root && e.margin === r.margin
                      );
                    if (n && (t = s.get(n))) return t;
                    let i = new Map();
                    return (
                      (t = {
                        id: r,
                        observer: new IntersectionObserver((e) => {
                          e.forEach((e) => {
                            let t = i.get(e.target),
                              r = e.isIntersecting || e.intersectionRatio > 0;
                            t && r && t(r);
                          });
                        }, e),
                        elements: i,
                      }),
                      a.push(r),
                      s.set(r, t),
                      t
                    );
                  })(r);
                  return (
                    o.set(e, t),
                    i.observe(e),
                    function () {
                      if ((o.delete(e), i.unobserve(e), 0 === o.size)) {
                        i.disconnect(), s.delete(n);
                        let e = a.findIndex(
                          (e) => e.root === n.root && e.margin === n.margin
                        );
                        e > -1 && a.splice(e, 1);
                      }
                    }
                  );
                })(e, (e) => e && d(e), {
                  root: null == t ? void 0 : t.current,
                  rootMargin: r,
                });
            } else if (!c) {
              let e = (0, i.requestIdleCallback)(() => d(!0));
              return () => (0, i.cancelIdleCallback)(e);
            }
          }, [u, r, t, c, h.current]),
          [
            p,
            c,
            (0, n.useCallback)(() => {
              d(!1);
            }, []),
          ]
        );
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    2901: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "AmpStateContext", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let n = r(9920)._(r(2265)).default.createContext({});
    },
    687: function (e, t) {
      function r(e) {
        let {
          ampFirst: t = !1,
          hybrid: r = !1,
          hasQuery: n = !1,
        } = void 0 === e ? {} : e;
        return t || (r && n);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isInAmpMode", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
    },
    1943: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "escapeStringRegexp", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let r = /[|\\{}()[\]^$+*?.-]/,
        n = /[|\\{}()[\]^$+*?.-]/g;
      function i(e) {
        return r.test(e) ? e.replace(n, "\\$&") : e;
      }
    },
    497: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImgProps", {
          enumerable: !0,
          get: function () {
            return a;
          },
        }),
        r(2301);
      let n = r(1564),
        i = r(7103);
      function o(e) {
        return void 0 !== e.default;
      }
      function s(e) {
        return void 0 === e
          ? e
          : "number" == typeof e
          ? Number.isFinite(e)
            ? e
            : NaN
          : "string" == typeof e && /^[0-9]+$/.test(e)
          ? parseInt(e, 10)
          : NaN;
      }
      function a(e, t) {
        var r;
        let a,
          l,
          u,
          {
            src: c,
            sizes: d,
            unoptimized: h = !1,
            priority: p = !1,
            loading: f,
            className: m,
            quality: g,
            width: v,
            height: y,
            fill: b = !1,
            style: x,
            overrideSrc: w,
            onLoad: P,
            onLoadingComplete: S,
            placeholder: E = "empty",
            blurDataURL: T,
            fetchPriority: A,
            layout: C,
            objectFit: R,
            objectPosition: M,
            lazyBoundary: k,
            lazyRoot: j,
            ...V
          } = e,
          { imgConf: O, showAltText: D, blurComplete: _, defaultLoader: L } = t,
          I = O || i.imageConfigDefault;
        if ("allSizes" in I) a = I;
        else {
          let e = [...I.deviceSizes, ...I.imageSizes].sort((e, t) => e - t),
            t = I.deviceSizes.sort((e, t) => e - t);
          a = { ...I, allSizes: e, deviceSizes: t };
        }
        if (void 0 === L)
          throw Error(
            "images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"
          );
        let N = V.loader || L;
        delete V.loader, delete V.srcSet;
        let F = "__next_img_default" in N;
        if (F) {
          if ("custom" === a.loader)
            throw Error(
              'Image with src "' +
                c +
                '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'
            );
        } else {
          let e = N;
          N = (t) => {
            let { config: r, ...n } = t;
            return e(n);
          };
        }
        if (C) {
          "fill" === C && (b = !0);
          let e = {
            intrinsic: { maxWidth: "100%", height: "auto" },
            responsive: { width: "100%", height: "auto" },
          }[C];
          e && (x = { ...x, ...e });
          let t = { responsive: "100vw", fill: "100vw" }[C];
          t && !d && (d = t);
        }
        let B = "",
          z = s(v),
          U = s(y);
        if ("object" == typeof (r = c) && (o(r) || void 0 !== r.src)) {
          let e = o(c) ? c.default : c;
          if (!e.src)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " +
                JSON.stringify(e)
            );
          if (!e.height || !e.width)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " +
                JSON.stringify(e)
            );
          if (
            ((l = e.blurWidth),
            (u = e.blurHeight),
            (T = T || e.blurDataURL),
            (B = e.src),
            !b)
          ) {
            if (z || U) {
              if (z && !U) {
                let t = z / e.width;
                U = Math.round(e.height * t);
              } else if (!z && U) {
                let t = U / e.height;
                z = Math.round(e.width * t);
              }
            } else (z = e.width), (U = e.height);
          }
        }
        let $ = !p && ("lazy" === f || void 0 === f);
        (!(c = "string" == typeof c ? c : B) ||
          c.startsWith("data:") ||
          c.startsWith("blob:")) &&
          ((h = !0), ($ = !1)),
          a.unoptimized && (h = !0),
          F && c.endsWith(".svg") && !a.dangerouslyAllowSVG && (h = !0),
          p && (A = "high");
        let W = s(g),
          X = Object.assign(
            b
              ? {
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: R,
                  objectPosition: M,
                }
              : {},
            D ? {} : { color: "transparent" },
            x
          ),
          H =
            _ || "empty" === E
              ? null
              : "blur" === E
              ? 'url("data:image/svg+xml;charset=utf-8,' +
                (0, n.getImageBlurSvg)({
                  widthInt: z,
                  heightInt: U,
                  blurWidth: l,
                  blurHeight: u,
                  blurDataURL: T || "",
                  objectFit: X.objectFit,
                }) +
                '")'
              : 'url("' + E + '")',
          G = H
            ? {
                backgroundSize: X.objectFit || "cover",
                backgroundPosition: X.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: H,
              }
            : {},
          K = (function (e) {
            let {
              config: t,
              src: r,
              unoptimized: n,
              width: i,
              quality: o,
              sizes: s,
              loader: a,
            } = e;
            if (n) return { src: r, srcSet: void 0, sizes: void 0 };
            let { widths: l, kind: u } = (function (e, t, r) {
                let { deviceSizes: n, allSizes: i } = e;
                if (r) {
                  let e = /(^|\s)(1?\d?\d)vw/g,
                    t = [];
                  for (let n; (n = e.exec(r)); n) t.push(parseInt(n[2]));
                  if (t.length) {
                    let e = 0.01 * Math.min(...t);
                    return {
                      widths: i.filter((t) => t >= n[0] * e),
                      kind: "w",
                    };
                  }
                  return { widths: i, kind: "w" };
                }
                return "number" != typeof t
                  ? { widths: n, kind: "w" }
                  : {
                      widths: [
                        ...new Set(
                          [t, 2 * t].map(
                            (e) => i.find((t) => t >= e) || i[i.length - 1]
                          )
                        ),
                      ],
                      kind: "x",
                    };
              })(t, i, s),
              c = l.length - 1;
            return {
              sizes: s || "w" !== u ? s : "100vw",
              srcSet: l
                .map(
                  (e, n) =>
                    a({ config: t, src: r, quality: o, width: e }) +
                    " " +
                    ("w" === u ? e : n + 1) +
                    u
                )
                .join(", "),
              src: a({ config: t, src: r, quality: o, width: l[c] }),
            };
          })({
            config: a,
            src: c,
            unoptimized: h,
            width: z,
            quality: W,
            sizes: d,
            loader: N,
          });
        return {
          props: {
            ...V,
            loading: $ ? "lazy" : f,
            fetchPriority: A,
            width: z,
            height: U,
            decoding: "async",
            className: m,
            style: { ...X, ...G },
            sizes: K.sizes,
            srcSet: K.srcSet,
            src: w || K.src,
          },
          meta: { unoptimized: h, priority: p, placeholder: E, fill: b },
        };
      }
    },
    8321: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          default: function () {
            return m;
          },
          defaultHead: function () {
            return d;
          },
        });
      let n = r(9920),
        i = r(1452),
        o = r(7437),
        s = i._(r(2265)),
        a = n._(r(5960)),
        l = r(2901),
        u = r(6590),
        c = r(687);
      function d(e) {
        void 0 === e && (e = !1);
        let t = [(0, o.jsx)("meta", { charSet: "utf-8" })];
        return (
          e ||
            t.push(
              (0, o.jsx)("meta", {
                name: "viewport",
                content: "width=device-width",
              })
            ),
          t
        );
      }
      function h(e, t) {
        return "string" == typeof t || "number" == typeof t
          ? e
          : t.type === s.default.Fragment
          ? e.concat(
              s.default.Children.toArray(t.props.children).reduce(
                (e, t) =>
                  "string" == typeof t || "number" == typeof t
                    ? e
                    : e.concat(t),
                []
              )
            )
          : e.concat(t);
      }
      r(2301);
      let p = ["name", "httpEquiv", "charSet", "itemProp"];
      function f(e, t) {
        let { inAmpMode: r } = t;
        return e
          .reduce(h, [])
          .reverse()
          .concat(d(r).reverse())
          .filter(
            (function () {
              let e = new Set(),
                t = new Set(),
                r = new Set(),
                n = {};
              return (i) => {
                let o = !0,
                  s = !1;
                if (
                  i.key &&
                  "number" != typeof i.key &&
                  i.key.indexOf("$") > 0
                ) {
                  s = !0;
                  let t = i.key.slice(i.key.indexOf("$") + 1);
                  e.has(t) ? (o = !1) : e.add(t);
                }
                switch (i.type) {
                  case "title":
                  case "base":
                    t.has(i.type) ? (o = !1) : t.add(i.type);
                    break;
                  case "meta":
                    for (let e = 0, t = p.length; e < t; e++) {
                      let t = p[e];
                      if (i.props.hasOwnProperty(t)) {
                        if ("charSet" === t) r.has(t) ? (o = !1) : r.add(t);
                        else {
                          let e = i.props[t],
                            r = n[t] || new Set();
                          ("name" !== t || !s) && r.has(e)
                            ? (o = !1)
                            : (r.add(e), (n[t] = r));
                        }
                      }
                    }
                }
                return o;
              };
            })()
          )
          .reverse()
          .map((e, t) => {
            let n = e.key || t;
            if (
              !r &&
              "link" === e.type &&
              e.props.href &&
              [
                "https://fonts.googleapis.com/css",
                "https://use.typekit.net/",
              ].some((t) => e.props.href.startsWith(t))
            ) {
              let t = { ...(e.props || {}) };
              return (
                (t["data-href"] = t.href),
                (t.href = void 0),
                (t["data-optimized-fonts"] = !0),
                s.default.cloneElement(e, t)
              );
            }
            return s.default.cloneElement(e, { key: n });
          });
      }
      let m = function (e) {
        let { children: t } = e,
          r = (0, s.useContext)(l.AmpStateContext),
          n = (0, s.useContext)(u.HeadManagerContext);
        return (0, o.jsx)(a.default, {
          reduceComponentsToState: f,
          headManager: n,
          inAmpMode: (0, c.isInAmpMode)(r),
          children: t,
        });
      };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    1564: function (e, t) {
      function r(e) {
        let {
            widthInt: t,
            heightInt: r,
            blurWidth: n,
            blurHeight: i,
            blurDataURL: o,
            objectFit: s,
          } = e,
          a = n ? 40 * n : t,
          l = i ? 40 * i : r,
          u = a && l ? "viewBox='0 0 " + a + " " + l + "'" : "";
        return (
          "%3Csvg xmlns='http://www.w3.org/2000/svg' " +
          u +
          "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" +
          (u
            ? "none"
            : "contain" === s
            ? "xMidYMid"
            : "cover" === s
            ? "xMidYMid slice"
            : "none") +
          "' style='filter: url(%23b);' href='" +
          o +
          "'/%3E%3C/svg%3E"
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImageBlurSvg", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
    },
    3938: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ImageConfigContext", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let n = r(9920)._(r(2265)),
        i = r(7103),
        o = n.default.createContext(i.imageConfigDefault);
    },
    7103: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          VALID_LOADERS: function () {
            return r;
          },
          imageConfigDefault: function () {
            return n;
          },
        });
      let r = ["default", "imgix", "cloudinary", "akamai", "custom"],
        n = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          loaderFile: "",
          domains: [],
          disableStaticImages: !1,
          minimumCacheTTL: 60,
          formats: ["image/webp"],
          dangerouslyAllowSVG: !1,
          contentSecurityPolicy:
            "script-src 'none'; frame-src 'none'; sandbox;",
          contentDispositionType: "inline",
          remotePatterns: [],
          unoptimized: !1,
        };
    },
    1241: function (e, t) {
      function r(e) {
        let { config: t, src: r, width: n, quality: i } = e;
        return (
          encodeURIComponent(r)
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        (r.__next_img_default = !0);
      let n = r;
    },
    291: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "RouterContext", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let n = r(9920)._(r(2265)).default.createContext(null);
    },
    1142: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          formatUrl: function () {
            return o;
          },
          formatWithValidation: function () {
            return a;
          },
          urlObjectKeys: function () {
            return s;
          },
        });
      let n = r(1452)._(r(8323)),
        i = /https?|ftp|gopher|file/;
      function o(e) {
        let { auth: t, hostname: r } = e,
          o = e.protocol || "",
          s = e.pathname || "",
          a = e.hash || "",
          l = e.query || "",
          u = !1;
        (t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : ""),
          e.host
            ? (u = t + e.host)
            : r &&
              ((u = t + (~r.indexOf(":") ? "[" + r + "]" : r)),
              e.port && (u += ":" + e.port)),
          l &&
            "object" == typeof l &&
            (l = String(n.urlQueryToSearchParams(l)));
        let c = e.search || (l && "?" + l) || "";
        return (
          o && !o.endsWith(":") && (o += ":"),
          e.slashes || ((!o || i.test(o)) && !1 !== u)
            ? ((u = "//" + (u || "")), s && "/" !== s[0] && (s = "/" + s))
            : u || (u = ""),
          a && "#" !== a[0] && (a = "#" + a),
          c && "?" !== c[0] && (c = "?" + c),
          "" +
            o +
            u +
            (s = s.replace(/[?#]/g, encodeURIComponent)) +
            (c = c.replace("#", "%23")) +
            a
        );
      }
      let s = [
        "auth",
        "hash",
        "host",
        "hostname",
        "href",
        "path",
        "pathname",
        "port",
        "protocol",
        "query",
        "search",
        "slashes",
      ];
      function a(e) {
        return o(e);
      }
    },
    9195: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          getSortedRoutes: function () {
            return n.getSortedRoutes;
          },
          isDynamicRoute: function () {
            return i.isDynamicRoute;
          },
        });
      let n = r(9089),
        i = r(8083);
    },
    20: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "interpolateAs", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let n = r(1533),
        i = r(3169);
      function o(e, t, r) {
        let o = "",
          s = (0, i.getRouteRegex)(e),
          a = s.groups,
          l = (t !== e ? (0, n.getRouteMatcher)(s)(t) : "") || r;
        o = e;
        let u = Object.keys(a);
        return (
          u.every((e) => {
            let t = l[e] || "",
              { repeat: r, optional: n } = a[e],
              i = "[" + (r ? "..." : "") + e + "]";
            return (
              n && (i = (t ? "" : "/") + "[" + i + "]"),
              r && !Array.isArray(t) && (t = [t]),
              (n || e in l) &&
                (o =
                  o.replace(
                    i,
                    r
                      ? t.map((e) => encodeURIComponent(e)).join("/")
                      : encodeURIComponent(t)
                  ) || "/")
            );
          }) || (o = ""),
          { params: u, result: o }
        );
      }
    },
    8083: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isDynamicRoute", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let n = r(2269),
        i = /\/\[[^/]+?\](?=\/|$)/;
      function o(e) {
        return (
          (0, n.isInterceptionRouteAppPath)(e) &&
            (e = (0, n.extractInterceptionRouteInformation)(
              e
            ).interceptedRoute),
          i.test(e)
        );
      }
    },
    8029: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isLocalURL", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let n = r(3461),
        i = r(9404);
      function o(e) {
        if (!(0, n.isAbsoluteUrl)(e)) return !0;
        try {
          let t = (0, n.getLocationOrigin)(),
            r = new URL(e, t);
          return r.origin === t && (0, i.hasBasePath)(r.pathname);
        } catch (e) {
          return !1;
        }
      }
    },
    5519: function (e, t) {
      function r(e, t) {
        let r = {};
        return (
          Object.keys(e).forEach((n) => {
            t.includes(n) || (r[n] = e[n]);
          }),
          r
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "omit", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
    },
    8323: function (e, t) {
      function r(e) {
        let t = {};
        return (
          e.forEach((e, r) => {
            void 0 === t[r]
              ? (t[r] = e)
              : Array.isArray(t[r])
              ? t[r].push(e)
              : (t[r] = [t[r], e]);
          }),
          t
        );
      }
      function n(e) {
        return "string" != typeof e &&
          ("number" != typeof e || isNaN(e)) &&
          "boolean" != typeof e
          ? ""
          : String(e);
      }
      function i(e) {
        let t = new URLSearchParams();
        return (
          Object.entries(e).forEach((e) => {
            let [r, i] = e;
            Array.isArray(i)
              ? i.forEach((e) => t.append(r, n(e)))
              : t.set(r, n(i));
          }),
          t
        );
      }
      function o(e) {
        for (
          var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1;
          n < t;
          n++
        )
          r[n - 1] = arguments[n];
        return (
          r.forEach((t) => {
            Array.from(t.keys()).forEach((t) => e.delete(t)),
              t.forEach((t, r) => e.append(r, t));
          }),
          e
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          assign: function () {
            return o;
          },
          searchParamsToUrlQuery: function () {
            return r;
          },
          urlQueryToSearchParams: function () {
            return i;
          },
        });
    },
    1533: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getRouteMatcher", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let n = r(3461);
      function i(e) {
        let { re: t, groups: r } = e;
        return (e) => {
          let i = t.exec(e);
          if (!i) return !1;
          let o = (e) => {
              try {
                return decodeURIComponent(e);
              } catch (e) {
                throw new n.DecodeError("failed to decode param");
              }
            },
            s = {};
          return (
            Object.keys(r).forEach((e) => {
              let t = r[e],
                n = i[t.pos];
              void 0 !== n &&
                (s[e] = ~n.indexOf("/")
                  ? n.split("/").map((e) => o(e))
                  : t.repeat
                  ? [o(n)]
                  : o(n));
            }),
            s
          );
        };
      }
    },
    3169: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          getNamedMiddlewareRegex: function () {
            return h;
          },
          getNamedRouteRegex: function () {
            return d;
          },
          getRouteRegex: function () {
            return l;
          },
        });
      let n = r(2269),
        i = r(1943),
        o = r(7741);
      function s(e) {
        let t = e.startsWith("[") && e.endsWith("]");
        t && (e = e.slice(1, -1));
        let r = e.startsWith("...");
        return r && (e = e.slice(3)), { key: e, repeat: r, optional: t };
      }
      function a(e) {
        let t = (0, o.removeTrailingSlash)(e).slice(1).split("/"),
          r = {},
          a = 1;
        return {
          parameterizedRoute: t
            .map((e) => {
              let t = n.INTERCEPTION_ROUTE_MARKERS.find((t) => e.startsWith(t)),
                o = e.match(/\[((?:\[.*\])|.+)\]/);
              if (t && o) {
                let { key: e, optional: n, repeat: l } = s(o[1]);
                return (
                  (r[e] = { pos: a++, repeat: l, optional: n }),
                  "/" + (0, i.escapeStringRegexp)(t) + "([^/]+?)"
                );
              }
              if (!o) return "/" + (0, i.escapeStringRegexp)(e);
              {
                let { key: e, repeat: t, optional: n } = s(o[1]);
                return (
                  (r[e] = { pos: a++, repeat: t, optional: n }),
                  t ? (n ? "(?:/(.+?))?" : "/(.+?)") : "/([^/]+?)"
                );
              }
            })
            .join(""),
          groups: r,
        };
      }
      function l(e) {
        let { parameterizedRoute: t, groups: r } = a(e);
        return { re: RegExp("^" + t + "(?:/)?$"), groups: r };
      }
      function u(e) {
        let {
            interceptionMarker: t,
            getSafeRouteKey: r,
            segment: n,
            routeKeys: o,
            keyPrefix: a,
          } = e,
          { key: l, optional: u, repeat: c } = s(n),
          d = l.replace(/\W/g, "");
        a && (d = "" + a + d);
        let h = !1;
        (0 === d.length || d.length > 30) && (h = !0),
          isNaN(parseInt(d.slice(0, 1))) || (h = !0),
          h && (d = r()),
          a ? (o[d] = "" + a + l) : (o[d] = l);
        let p = t ? (0, i.escapeStringRegexp)(t) : "";
        return c
          ? u
            ? "(?:/" + p + "(?<" + d + ">.+?))?"
            : "/" + p + "(?<" + d + ">.+?)"
          : "/" + p + "(?<" + d + ">[^/]+?)";
      }
      function c(e, t) {
        let r;
        let s = (0, o.removeTrailingSlash)(e).slice(1).split("/"),
          a =
            ((r = 0),
            () => {
              let e = "",
                t = ++r;
              for (; t > 0; )
                (e += String.fromCharCode(97 + ((t - 1) % 26))),
                  (t = Math.floor((t - 1) / 26));
              return e;
            }),
          l = {};
        return {
          namedParameterizedRoute: s
            .map((e) => {
              let r = n.INTERCEPTION_ROUTE_MARKERS.some((t) => e.startsWith(t)),
                o = e.match(/\[((?:\[.*\])|.+)\]/);
              if (r && o) {
                let [r] = e.split(o[0]);
                return u({
                  getSafeRouteKey: a,
                  interceptionMarker: r,
                  segment: o[1],
                  routeKeys: l,
                  keyPrefix: t ? "nxtI" : void 0,
                });
              }
              return o
                ? u({
                    getSafeRouteKey: a,
                    segment: o[1],
                    routeKeys: l,
                    keyPrefix: t ? "nxtP" : void 0,
                  })
                : "/" + (0, i.escapeStringRegexp)(e);
            })
            .join(""),
          routeKeys: l,
        };
      }
      function d(e, t) {
        let r = c(e, t);
        return {
          ...l(e),
          namedRegex: "^" + r.namedParameterizedRoute + "(?:/)?$",
          routeKeys: r.routeKeys,
        };
      }
      function h(e, t) {
        let { parameterizedRoute: r } = a(e),
          { catchAll: n = !0 } = t;
        if ("/" === r) return { namedRegex: "^/" + (n ? ".*" : "") + "$" };
        let { namedParameterizedRoute: i } = c(e, !1);
        return { namedRegex: "^" + i + (n ? "(?:(/.*)?)" : "") + "$" };
      }
    },
    9089: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getSortedRoutes", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      class r {
        insert(e) {
          this._insert(e.split("/").filter(Boolean), [], !1);
        }
        smoosh() {
          return this._smoosh();
        }
        _smoosh(e) {
          void 0 === e && (e = "/");
          let t = [...this.children.keys()].sort();
          null !== this.slugName && t.splice(t.indexOf("[]"), 1),
            null !== this.restSlugName && t.splice(t.indexOf("[...]"), 1),
            null !== this.optionalRestSlugName &&
              t.splice(t.indexOf("[[...]]"), 1);
          let r = t
            .map((t) => this.children.get(t)._smoosh("" + e + t + "/"))
            .reduce((e, t) => [...e, ...t], []);
          if (
            (null !== this.slugName &&
              r.push(
                ...this.children
                  .get("[]")
                  ._smoosh(e + "[" + this.slugName + "]/")
              ),
            !this.placeholder)
          ) {
            let t = "/" === e ? "/" : e.slice(0, -1);
            if (null != this.optionalRestSlugName)
              throw Error(
                'You cannot define a route with the same specificity as a optional catch-all route ("' +
                  t +
                  '" and "' +
                  t +
                  "[[..." +
                  this.optionalRestSlugName +
                  ']]").'
              );
            r.unshift(t);
          }
          return (
            null !== this.restSlugName &&
              r.push(
                ...this.children
                  .get("[...]")
                  ._smoosh(e + "[..." + this.restSlugName + "]/")
              ),
            null !== this.optionalRestSlugName &&
              r.push(
                ...this.children
                  .get("[[...]]")
                  ._smoosh(e + "[[..." + this.optionalRestSlugName + "]]/")
              ),
            r
          );
        }
        _insert(e, t, n) {
          if (0 === e.length) {
            this.placeholder = !1;
            return;
          }
          if (n) throw Error("Catch-all must be the last part of the URL.");
          let i = e[0];
          if (i.startsWith("[") && i.endsWith("]")) {
            let r = i.slice(1, -1),
              s = !1;
            if (
              (r.startsWith("[") &&
                r.endsWith("]") &&
                ((r = r.slice(1, -1)), (s = !0)),
              r.startsWith("...") && ((r = r.substring(3)), (n = !0)),
              r.startsWith("[") || r.endsWith("]"))
            )
              throw Error(
                "Segment names may not start or end with extra brackets ('" +
                  r +
                  "')."
              );
            if (r.startsWith("."))
              throw Error(
                "Segment names may not start with erroneous periods ('" +
                  r +
                  "')."
              );
            function o(e, r) {
              if (null !== e && e !== r)
                throw Error(
                  "You cannot use different slug names for the same dynamic path ('" +
                    e +
                    "' !== '" +
                    r +
                    "')."
                );
              t.forEach((e) => {
                if (e === r)
                  throw Error(
                    'You cannot have the same slug name "' +
                      r +
                      '" repeat within a single dynamic path'
                  );
                if (e.replace(/\W/g, "") === i.replace(/\W/g, ""))
                  throw Error(
                    'You cannot have the slug names "' +
                      e +
                      '" and "' +
                      r +
                      '" differ only by non-word symbols within a single dynamic path'
                  );
              }),
                t.push(r);
            }
            if (n) {
              if (s) {
                if (null != this.restSlugName)
                  throw Error(
                    'You cannot use both an required and optional catch-all route at the same level ("[...' +
                      this.restSlugName +
                      ']" and "' +
                      e[0] +
                      '" ).'
                  );
                o(this.optionalRestSlugName, r),
                  (this.optionalRestSlugName = r),
                  (i = "[[...]]");
              } else {
                if (null != this.optionalRestSlugName)
                  throw Error(
                    'You cannot use both an optional and required catch-all route at the same level ("[[...' +
                      this.optionalRestSlugName +
                      ']]" and "' +
                      e[0] +
                      '").'
                  );
                o(this.restSlugName, r), (this.restSlugName = r), (i = "[...]");
              }
            } else {
              if (s)
                throw Error(
                  'Optional route parameters are not yet supported ("' +
                    e[0] +
                    '").'
                );
              o(this.slugName, r), (this.slugName = r), (i = "[]");
            }
          }
          this.children.has(i) || this.children.set(i, new r()),
            this.children.get(i)._insert(e.slice(1), t, n);
        }
        constructor() {
          (this.placeholder = !0),
            (this.children = new Map()),
            (this.slugName = null),
            (this.restSlugName = null),
            (this.optionalRestSlugName = null);
        }
      }
      function n(e) {
        let t = new r();
        return e.forEach((e) => t.insert(e)), t.smoosh();
      }
    },
    5960: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let n = r(2265),
        i = "undefined" == typeof window,
        o = i ? () => {} : n.useLayoutEffect,
        s = i ? () => {} : n.useEffect;
      function a(e) {
        let { headManager: t, reduceComponentsToState: r } = e;
        function a() {
          if (t && t.mountedInstances) {
            let i = n.Children.toArray(
              Array.from(t.mountedInstances).filter(Boolean)
            );
            t.updateHead(r(i, e));
          }
        }
        if (i) {
          var l;
          null == t || null == (l = t.mountedInstances) || l.add(e.children),
            a();
        }
        return (
          o(() => {
            var r;
            return (
              null == t ||
                null == (r = t.mountedInstances) ||
                r.add(e.children),
              () => {
                var r;
                null == t ||
                  null == (r = t.mountedInstances) ||
                  r.delete(e.children);
              }
            );
          }),
          o(
            () => (
              t && (t._pendingUpdate = a),
              () => {
                t && (t._pendingUpdate = a);
              }
            )
          ),
          s(
            () => (
              t &&
                t._pendingUpdate &&
                (t._pendingUpdate(), (t._pendingUpdate = null)),
              () => {
                t &&
                  t._pendingUpdate &&
                  (t._pendingUpdate(), (t._pendingUpdate = null));
              }
            )
          ),
          null
        );
      }
    },
    3461: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          DecodeError: function () {
            return f;
          },
          MiddlewareNotFoundError: function () {
            return y;
          },
          MissingStaticPage: function () {
            return v;
          },
          NormalizeError: function () {
            return m;
          },
          PageNotFoundError: function () {
            return g;
          },
          SP: function () {
            return h;
          },
          ST: function () {
            return p;
          },
          WEB_VITALS: function () {
            return r;
          },
          execOnce: function () {
            return n;
          },
          getDisplayName: function () {
            return l;
          },
          getLocationOrigin: function () {
            return s;
          },
          getURL: function () {
            return a;
          },
          isAbsoluteUrl: function () {
            return o;
          },
          isResSent: function () {
            return u;
          },
          loadGetInitialProps: function () {
            return d;
          },
          normalizeRepeatedSlashes: function () {
            return c;
          },
          stringifyError: function () {
            return b;
          },
        });
      let r = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
      function n(e) {
        let t,
          r = !1;
        return function () {
          for (var n = arguments.length, i = Array(n), o = 0; o < n; o++)
            i[o] = arguments[o];
          return r || ((r = !0), (t = e(...i))), t;
        };
      }
      let i = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
        o = (e) => i.test(e);
      function s() {
        let { protocol: e, hostname: t, port: r } = window.location;
        return e + "//" + t + (r ? ":" + r : "");
      }
      function a() {
        let { href: e } = window.location,
          t = s();
        return e.substring(t.length);
      }
      function l(e) {
        return "string" == typeof e ? e : e.displayName || e.name || "Unknown";
      }
      function u(e) {
        return e.finished || e.headersSent;
      }
      function c(e) {
        let t = e.split("?");
        return (
          t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") +
          (t[1] ? "?" + t.slice(1).join("?") : "")
        );
      }
      async function d(e, t) {
        let r = t.res || (t.ctx && t.ctx.res);
        if (!e.getInitialProps)
          return t.ctx && t.Component
            ? { pageProps: await d(t.Component, t.ctx) }
            : {};
        let n = await e.getInitialProps(t);
        if (r && u(r)) return n;
        if (!n)
          throw Error(
            '"' +
              l(e) +
              '.getInitialProps()" should resolve to an object. But found "' +
              n +
              '" instead.'
          );
        return n;
      }
      let h = "undefined" != typeof performance,
        p =
          h &&
          ["mark", "measure", "getEntriesByName"].every(
            (e) => "function" == typeof performance[e]
          );
      class f extends Error {}
      class m extends Error {}
      class g extends Error {
        constructor(e) {
          super(),
            (this.code = "ENOENT"),
            (this.name = "PageNotFoundError"),
            (this.message = "Cannot find module for page: " + e);
        }
      }
      class v extends Error {
        constructor(e, t) {
          super(),
            (this.message =
              "Failed to load static file for page: " + e + " " + t);
        }
      }
      class y extends Error {
        constructor() {
          super(),
            (this.code = "ENOENT"),
            (this.message = "Cannot find the middleware module");
        }
      }
      function b(e) {
        return JSON.stringify({ message: e.message, stack: e.stack });
      }
    },
    2666: function (e, t, r) {
      function n() {
        return (n = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      r.d(t, {
        VY: function () {
          return ep;
        },
        h4: function () {
          return ed;
        },
        ck: function () {
          return ec;
        },
        fC: function () {
          return eu;
        },
        xz: function () {
          return eh;
        },
      });
      var i = r(2265),
        o = r.t(i, 2);
      function s(e, t = []) {
        let r = [],
          n = () => {
            let t = r.map((e) => (0, i.createContext)(e));
            return function (r) {
              let n = (null == r ? void 0 : r[e]) || t;
              return (0, i.useMemo)(
                () => ({ [`__scope${e}`]: { ...r, [e]: n } }),
                [r, n]
              );
            };
          };
        return (
          (n.scopeName = e),
          [
            function (t, n) {
              let o = (0, i.createContext)(n),
                s = r.length;
              function a(t) {
                let { scope: r, children: n, ...a } = t,
                  l = (null == r ? void 0 : r[e][s]) || o,
                  u = (0, i.useMemo)(() => a, Object.values(a));
                return (0, i.createElement)(l.Provider, { value: u }, n);
              }
              return (
                (r = [...r, n]),
                (a.displayName = t + "Provider"),
                [
                  a,
                  function (r, a) {
                    let l = (null == a ? void 0 : a[e][s]) || o,
                      u = (0, i.useContext)(l);
                    if (u) return u;
                    if (void 0 !== n) return n;
                    throw Error(`\`${r}\` must be used within \`${t}\``);
                  },
                ]
              );
            },
            (function (...e) {
              let t = e[0];
              if (1 === e.length) return t;
              let r = () => {
                let r = e.map((e) => ({
                  useScope: e(),
                  scopeName: e.scopeName,
                }));
                return function (e) {
                  let n = r.reduce((t, { useScope: r, scopeName: n }) => {
                    let i = r(e)[`__scope${n}`];
                    return { ...t, ...i };
                  }, {});
                  return (0, i.useMemo)(
                    () => ({ [`__scope${t.scopeName}`]: n }),
                    [n]
                  );
                };
              };
              return (r.scopeName = t.scopeName), r;
            })(n, ...t),
          ]
        );
      }
      function a(...e) {
        return (t) =>
          e.forEach((e) => {
            "function" == typeof e ? e(t) : null != e && (e.current = t);
          });
      }
      function l(...e) {
        return (0, i.useCallback)(a(...e), e);
      }
      let u = (0, i.forwardRef)((e, t) => {
        let { children: r, ...o } = e,
          s = i.Children.toArray(r),
          a = s.find(h);
        if (a) {
          let e = a.props.children,
            r = s.map((t) =>
              t !== a
                ? t
                : i.Children.count(e) > 1
                ? i.Children.only(null)
                : (0, i.isValidElement)(e)
                ? e.props.children
                : null
            );
          return (0, i.createElement)(
            c,
            n({}, o, { ref: t }),
            (0, i.isValidElement)(e) ? (0, i.cloneElement)(e, void 0, r) : null
          );
        }
        return (0, i.createElement)(c, n({}, o, { ref: t }), r);
      });
      u.displayName = "Slot";
      let c = (0, i.forwardRef)((e, t) => {
        let { children: r, ...n } = e;
        return (0, i.isValidElement)(r)
          ? (0, i.cloneElement)(r, {
              ...(function (e, t) {
                let r = { ...t };
                for (let n in t) {
                  let i = e[n],
                    o = t[n];
                  /^on[A-Z]/.test(n)
                    ? i && o
                      ? (r[n] = (...e) => {
                          o(...e), i(...e);
                        })
                      : i && (r[n] = i)
                    : "style" === n
                    ? (r[n] = { ...i, ...o })
                    : "className" === n &&
                      (r[n] = [i, o].filter(Boolean).join(" "));
                }
                return { ...e, ...r };
              })(n, r.props),
              ref: t ? a(t, r.ref) : r.ref,
            })
          : i.Children.count(r) > 1
          ? i.Children.only(null)
          : null;
      });
      c.displayName = "SlotClone";
      let d = ({ children: e }) => (0, i.createElement)(i.Fragment, null, e);
      function h(e) {
        return (0, i.isValidElement)(e) && e.type === d;
      }
      function p(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
        return function (n) {
          if ((null == e || e(n), !1 === r || !n.defaultPrevented))
            return null == t ? void 0 : t(n);
        };
      }
      function f(e) {
        let t = (0, i.useRef)(e);
        return (
          (0, i.useEffect)(() => {
            t.current = e;
          }),
          (0, i.useMemo)(
            () =>
              (...e) => {
                var r;
                return null === (r = t.current) || void 0 === r
                  ? void 0
                  : r.call(t, ...e);
              },
            []
          )
        );
      }
      function m({ prop: e, defaultProp: t, onChange: r = () => {} }) {
        let [n, o] = (function ({ defaultProp: e, onChange: t }) {
            let r = (0, i.useState)(e),
              [n] = r,
              o = (0, i.useRef)(n),
              s = f(t);
            return (
              (0, i.useEffect)(() => {
                o.current !== n && (s(n), (o.current = n));
              }, [n, o, s]),
              r
            );
          })({ defaultProp: t, onChange: r }),
          s = void 0 !== e,
          a = s ? e : n,
          l = f(r);
        return [
          a,
          (0, i.useCallback)(
            (t) => {
              if (s) {
                let r = "function" == typeof t ? t(e) : t;
                r !== e && l(r);
              } else o(t);
            },
            [s, e, o, l]
          ),
        ];
      }
      var g = r(4887);
      let v = [
          "a",
          "button",
          "div",
          "form",
          "h2",
          "h3",
          "img",
          "input",
          "label",
          "li",
          "nav",
          "ol",
          "p",
          "span",
          "svg",
          "ul",
        ].reduce((e, t) => {
          let r = (0, i.forwardRef)((e, r) => {
            let { asChild: o, ...s } = e,
              a = o ? u : t;
            return (
              (0, i.useEffect)(() => {
                window[Symbol.for("radix-ui")] = !0;
              }, []),
              (0, i.createElement)(a, n({}, s, { ref: r }))
            );
          });
          return (r.displayName = `Primitive.${t}`), { ...e, [t]: r };
        }, {}),
        y = (null == globalThis ? void 0 : globalThis.document)
          ? i.useLayoutEffect
          : () => {},
        b = (e) => {
          let { present: t, children: r } = e,
            n = (function (e) {
              var t, r;
              let [n, o] = (0, i.useState)(),
                s = (0, i.useRef)({}),
                a = (0, i.useRef)(e),
                l = (0, i.useRef)("none"),
                [u, c] =
                  ((t = e ? "mounted" : "unmounted"),
                  (r = {
                    mounted: {
                      UNMOUNT: "unmounted",
                      ANIMATION_OUT: "unmountSuspended",
                    },
                    unmountSuspended: {
                      MOUNT: "mounted",
                      ANIMATION_END: "unmounted",
                    },
                    unmounted: { MOUNT: "mounted" },
                  }),
                  (0, i.useReducer)((e, t) => {
                    let n = r[e][t];
                    return null != n ? n : e;
                  }, t));
              return (
                (0, i.useEffect)(() => {
                  let e = x(s.current);
                  l.current = "mounted" === u ? e : "none";
                }, [u]),
                y(() => {
                  let t = s.current,
                    r = a.current;
                  if (r !== e) {
                    let n = l.current,
                      i = x(t);
                    e
                      ? c("MOUNT")
                      : "none" === i ||
                        (null == t ? void 0 : t.display) === "none"
                      ? c("UNMOUNT")
                      : r && n !== i
                      ? c("ANIMATION_OUT")
                      : c("UNMOUNT"),
                      (a.current = e);
                  }
                }, [e, c]),
                y(() => {
                  if (n) {
                    let e = (e) => {
                        let t = x(s.current).includes(e.animationName);
                        e.target === n &&
                          t &&
                          (0, g.flushSync)(() => c("ANIMATION_END"));
                      },
                      t = (e) => {
                        e.target === n && (l.current = x(s.current));
                      };
                    return (
                      n.addEventListener("animationstart", t),
                      n.addEventListener("animationcancel", e),
                      n.addEventListener("animationend", e),
                      () => {
                        n.removeEventListener("animationstart", t),
                          n.removeEventListener("animationcancel", e),
                          n.removeEventListener("animationend", e);
                      }
                    );
                  }
                  c("ANIMATION_END");
                }, [n, c]),
                {
                  isPresent: ["mounted", "unmountSuspended"].includes(u),
                  ref: (0, i.useCallback)((e) => {
                    e && (s.current = getComputedStyle(e)), o(e);
                  }, []),
                }
              );
            })(t),
            o =
              "function" == typeof r
                ? r({ present: n.isPresent })
                : i.Children.only(r),
            s = l(n.ref, o.ref);
          return "function" == typeof r || n.isPresent
            ? (0, i.cloneElement)(o, { ref: s })
            : null;
        };
      function x(e) {
        return (null == e ? void 0 : e.animationName) || "none";
      }
      b.displayName = "Presence";
      let w = o["useId".toString()] || (() => void 0),
        P = 0;
      function S(e) {
        let [t, r] = i.useState(w());
        return (
          y(() => {
            e || r((e) => (null != e ? e : String(P++)));
          }, [e]),
          e || (t ? `radix-${t}` : "")
        );
      }
      let E = "Collapsible",
        [T, A] = s(E),
        [C, R] = T(E),
        M = (0, i.forwardRef)((e, t) => {
          let {
              __scopeCollapsible: r,
              open: o,
              defaultOpen: s,
              disabled: a,
              onOpenChange: l,
              ...u
            } = e,
            [c = !1, d] = m({ prop: o, defaultProp: s, onChange: l });
          return (0, i.createElement)(
            C,
            {
              scope: r,
              disabled: a,
              contentId: S(),
              open: c,
              onOpenToggle: (0, i.useCallback)(() => d((e) => !e), [d]),
            },
            (0, i.createElement)(
              v.div,
              n({ "data-state": D(c), "data-disabled": a ? "" : void 0 }, u, {
                ref: t,
              })
            )
          );
        }),
        k = (0, i.forwardRef)((e, t) => {
          let { __scopeCollapsible: r, ...o } = e,
            s = R("CollapsibleTrigger", r);
          return (0, i.createElement)(
            v.button,
            n(
              {
                type: "button",
                "aria-controls": s.contentId,
                "aria-expanded": s.open || !1,
                "data-state": D(s.open),
                "data-disabled": s.disabled ? "" : void 0,
                disabled: s.disabled,
              },
              o,
              { ref: t, onClick: p(e.onClick, s.onOpenToggle) }
            )
          );
        }),
        j = "CollapsibleContent",
        V = (0, i.forwardRef)((e, t) => {
          let { forceMount: r, ...o } = e,
            s = R(j, e.__scopeCollapsible);
          return (0, i.createElement)(
            b,
            { present: r || s.open },
            ({ present: e }) =>
              (0, i.createElement)(O, n({}, o, { ref: t, present: e }))
          );
        }),
        O = (0, i.forwardRef)((e, t) => {
          let { __scopeCollapsible: r, present: o, children: s, ...a } = e,
            u = R(j, r),
            [c, d] = (0, i.useState)(o),
            h = (0, i.useRef)(null),
            p = l(t, h),
            f = (0, i.useRef)(0),
            m = f.current,
            g = (0, i.useRef)(0),
            b = g.current,
            x = u.open || c,
            w = (0, i.useRef)(x),
            P = (0, i.useRef)();
          return (
            (0, i.useEffect)(() => {
              let e = requestAnimationFrame(() => (w.current = !1));
              return () => cancelAnimationFrame(e);
            }, []),
            y(() => {
              let e = h.current;
              if (e) {
                (P.current = P.current || {
                  transitionDuration: e.style.transitionDuration,
                  animationName: e.style.animationName,
                }),
                  (e.style.transitionDuration = "0s"),
                  (e.style.animationName = "none");
                let t = e.getBoundingClientRect();
                (f.current = t.height),
                  (g.current = t.width),
                  w.current ||
                    ((e.style.transitionDuration =
                      P.current.transitionDuration),
                    (e.style.animationName = P.current.animationName)),
                  d(o);
              }
            }, [u.open, o]),
            (0, i.createElement)(
              v.div,
              n(
                {
                  "data-state": D(u.open),
                  "data-disabled": u.disabled ? "" : void 0,
                  id: u.contentId,
                  hidden: !x,
                },
                a,
                {
                  ref: p,
                  style: {
                    "--radix-collapsible-content-height": m ? `${m}px` : void 0,
                    "--radix-collapsible-content-width": b ? `${b}px` : void 0,
                    ...e.style,
                  },
                }
              ),
              x && s
            )
          );
        });
      function D(e) {
        return e ? "open" : "closed";
      }
      let _ = (0, i.createContext)(void 0),
        L = "Accordion",
        I = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
        [N, F, B] = (function (e) {
          let t = e + "CollectionProvider",
            [r, n] = s(t),
            [o, a] = r(t, {
              collectionRef: { current: null },
              itemMap: new Map(),
            }),
            c = e + "CollectionSlot",
            d = i.forwardRef((e, t) => {
              let { scope: r, children: n } = e,
                o = l(t, a(c, r).collectionRef);
              return i.createElement(u, { ref: o }, n);
            }),
            h = e + "CollectionItemSlot",
            p = "data-radix-collection-item";
          return [
            {
              Provider: (e) => {
                let { scope: t, children: r } = e,
                  n = i.useRef(null),
                  s = i.useRef(new Map()).current;
                return i.createElement(
                  o,
                  { scope: t, itemMap: s, collectionRef: n },
                  r
                );
              },
              Slot: d,
              ItemSlot: i.forwardRef((e, t) => {
                let { scope: r, children: n, ...o } = e,
                  s = i.useRef(null),
                  c = l(t, s),
                  d = a(h, r);
                return (
                  i.useEffect(
                    () => (
                      d.itemMap.set(s, { ref: s, ...o }),
                      () => void d.itemMap.delete(s)
                    )
                  ),
                  i.createElement(u, { [p]: "", ref: c }, n)
                );
              }),
            },
            function (t) {
              let r = a(e + "CollectionConsumer", t);
              return i.useCallback(() => {
                let e = r.collectionRef.current;
                if (!e) return [];
                let t = Array.from(e.querySelectorAll(`[${p}]`));
                return Array.from(r.itemMap.values()).sort(
                  (e, r) => t.indexOf(e.ref.current) - t.indexOf(r.ref.current)
                );
              }, [r.collectionRef, r.itemMap]);
            },
            n,
          ];
        })(L),
        [z, U] = s(L, [B, A]),
        $ = A(),
        W = i.forwardRef((e, t) => {
          let { type: r, ...o } = e;
          return i.createElement(
            N.Provider,
            { scope: e.__scopeAccordion },
            "multiple" === r
              ? i.createElement(Z, n({}, o, { ref: t }))
              : i.createElement(Y, n({}, o, { ref: t }))
          );
        });
      W.propTypes = {
        type(e) {
          let t = e.value || e.defaultValue;
          return e.type && !["single", "multiple"].includes(e.type)
            ? Error(
                "Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`."
              )
            : "multiple" === e.type && "string" == typeof t
            ? Error(
                "Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`."
              )
            : "single" === e.type && Array.isArray(t)
            ? Error(
                "Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`."
              )
            : null;
        },
      };
      let [X, H] = z(L),
        [G, K] = z(L, { collapsible: !1 }),
        Y = i.forwardRef((e, t) => {
          let {
              value: r,
              defaultValue: o,
              onValueChange: s = () => {},
              collapsible: a = !1,
              ...l
            } = e,
            [u, c] = m({ prop: r, defaultProp: o, onChange: s });
          return i.createElement(
            X,
            {
              scope: e.__scopeAccordion,
              value: u ? [u] : [],
              onItemOpen: c,
              onItemClose: i.useCallback(() => a && c(""), [a, c]),
            },
            i.createElement(
              G,
              { scope: e.__scopeAccordion, collapsible: a },
              i.createElement(J, n({}, l, { ref: t }))
            )
          );
        }),
        Z = i.forwardRef((e, t) => {
          let {
              value: r,
              defaultValue: o,
              onValueChange: s = () => {},
              ...a
            } = e,
            [l = [], u] = m({ prop: r, defaultProp: o, onChange: s }),
            c = i.useCallback((e) => u((t = []) => [...t, e]), [u]),
            d = i.useCallback(
              (e) => u((t = []) => t.filter((t) => t !== e)),
              [u]
            );
          return i.createElement(
            X,
            {
              scope: e.__scopeAccordion,
              value: l,
              onItemOpen: c,
              onItemClose: d,
            },
            i.createElement(
              G,
              { scope: e.__scopeAccordion, collapsible: !0 },
              i.createElement(J, n({}, a, { ref: t }))
            )
          );
        }),
        [q, Q] = z(L),
        J = i.forwardRef((e, t) => {
          let {
              __scopeAccordion: r,
              disabled: o,
              dir: s,
              orientation: a = "vertical",
              ...u
            } = e,
            c = l(i.useRef(null), t),
            d = F(r),
            h =
              "ltr" ===
              (function (e) {
                let t = (0, i.useContext)(_);
                return e || t || "ltr";
              })(s),
            f = p(e.onKeyDown, (e) => {
              var t;
              if (!I.includes(e.key)) return;
              let r = e.target,
                n = d().filter((e) => {
                  var t;
                  return !(
                    null !== (t = e.ref.current) &&
                    void 0 !== t &&
                    t.disabled
                  );
                }),
                i = n.findIndex((e) => e.ref.current === r),
                o = n.length;
              if (-1 === i) return;
              e.preventDefault();
              let s = i,
                l = o - 1,
                u = () => {
                  (s = i + 1) > l && (s = 0);
                },
                c = () => {
                  (s = i - 1) < 0 && (s = l);
                };
              switch (e.key) {
                case "Home":
                  s = 0;
                  break;
                case "End":
                  s = l;
                  break;
                case "ArrowRight":
                  "horizontal" === a && (h ? u() : c());
                  break;
                case "ArrowDown":
                  "vertical" === a && u();
                  break;
                case "ArrowLeft":
                  "horizontal" === a && (h ? c() : u());
                  break;
                case "ArrowUp":
                  "vertical" === a && c();
              }
              null === (t = n[s % o].ref.current) || void 0 === t || t.focus();
            });
          return i.createElement(
            q,
            { scope: r, disabled: o, direction: s, orientation: a },
            i.createElement(
              N.Slot,
              { scope: r },
              i.createElement(
                v.div,
                n({}, u, {
                  "data-orientation": a,
                  ref: c,
                  onKeyDown: o ? void 0 : f,
                })
              )
            )
          );
        }),
        ee = "AccordionItem",
        [et, er] = z(ee),
        en = i.forwardRef((e, t) => {
          let { __scopeAccordion: r, value: o, ...s } = e,
            a = Q(ee, r),
            l = H(ee, r),
            u = $(r),
            c = S(),
            d = (o && l.value.includes(o)) || !1,
            h = a.disabled || e.disabled;
          return i.createElement(
            et,
            { scope: r, open: d, disabled: h, triggerId: c },
            i.createElement(
              M,
              n(
                { "data-orientation": a.orientation, "data-state": el(d) },
                u,
                s,
                {
                  ref: t,
                  disabled: h,
                  open: d,
                  onOpenChange: (e) => {
                    e ? l.onItemOpen(o) : l.onItemClose(o);
                  },
                }
              )
            )
          );
        }),
        ei = i.forwardRef((e, t) => {
          let { __scopeAccordion: r, ...o } = e,
            s = Q(L, r),
            a = er("AccordionHeader", r);
          return i.createElement(
            v.h3,
            n(
              {
                "data-orientation": s.orientation,
                "data-state": el(a.open),
                "data-disabled": a.disabled ? "" : void 0,
              },
              o,
              { ref: t }
            )
          );
        }),
        eo = "AccordionTrigger",
        es = i.forwardRef((e, t) => {
          let { __scopeAccordion: r, ...o } = e,
            s = Q(L, r),
            a = er(eo, r),
            l = K(eo, r),
            u = $(r);
          return i.createElement(
            N.ItemSlot,
            { scope: r },
            i.createElement(
              k,
              n(
                {
                  "aria-disabled": (a.open && !l.collapsible) || void 0,
                  "data-orientation": s.orientation,
                  id: a.triggerId,
                },
                u,
                o,
                { ref: t }
              )
            )
          );
        }),
        ea = i.forwardRef((e, t) => {
          let { __scopeAccordion: r, ...o } = e,
            s = Q(L, r),
            a = er("AccordionContent", r),
            l = $(r);
          return i.createElement(
            V,
            n(
              {
                role: "region",
                "aria-labelledby": a.triggerId,
                "data-orientation": s.orientation,
              },
              l,
              o,
              {
                ref: t,
                style: {
                  "--radix-accordion-content-height":
                    "var(--radix-collapsible-content-height)",
                  "--radix-accordion-content-width":
                    "var(--radix-collapsible-content-width)",
                  ...e.style,
                },
              }
            )
          );
        });
      function el(e) {
        return e ? "open" : "closed";
      }
      let eu = W,
        ec = en,
        ed = ei,
        eh = es,
        ep = ea;
    },
    4839: function (e, t, r) {
      r.d(t, {
        W: function () {
          return n;
        },
      });
      function n() {
        for (var e, t, r = 0, n = "", i = arguments.length; r < i; r++)
          (e = arguments[r]) &&
            (t = (function e(t) {
              var r,
                n,
                i = "";
              if ("string" == typeof t || "number" == typeof t) i += t;
              else if ("object" == typeof t) {
                if (Array.isArray(t)) {
                  var o = t.length;
                  for (r = 0; r < o; r++)
                    t[r] && (n = e(t[r])) && (i && (i += " "), (i += n));
                } else for (n in t) t[n] && (i && (i += " "), (i += n));
              }
              return i;
            })(e)) &&
            (n && (n += " "), (n += t));
        return n;
      }
    },
    7403: function (e, t, r) {
      r.d(t, {
        v: function () {
          return u;
        },
      });
      var n = r(3653),
        i = r(4097),
        o = r(9047),
        s = r(3646);
      let a = (e, t) =>
        "zIndex" !== t &&
        !!(
          "number" == typeof e ||
          Array.isArray(e) ||
          ("string" == typeof e &&
            (s.P.test(e) || "0" === e) &&
            !e.startsWith("url("))
        );
      var l = r(7533);
      class u {
        constructor({
          autoplay: e = !0,
          delay: t = 0,
          type: r = "keyframes",
          repeat: n = 0,
          repeatDelay: i = 0,
          repeatType: o = "loop",
          ...s
        }) {
          (this.isStopped = !1),
            (this.hasAttemptedResolve = !1),
            (this.options = {
              autoplay: e,
              delay: t,
              type: r,
              repeat: n,
              repeatDelay: i,
              repeatType: o,
              ...s,
            }),
            this.updateFinishedPromise();
        }
        get resolved() {
          return (
            this._resolved || this.hasAttemptedResolve || (0, n.m)(),
            this._resolved
          );
        }
        onKeyframesResolved(e, t) {
          this.hasAttemptedResolve = !0;
          let {
            name: r,
            type: n,
            velocity: s,
            delay: u,
            onComplete: c,
            onUpdate: d,
            isGenerator: h,
          } = this.options;
          if (
            !h &&
            !(function (e, t, r, n) {
              let i = e[0];
              if (null === i) return !1;
              let s = e[e.length - 1],
                l = a(i, t),
                u = a(s, t);
              return (
                (0, o.K)(
                  l === u,
                  `You are trying to animate ${t} from "${i}" to "${s}". ${i} is not an animatable value - to enable this animation set ${i} to a value animatable to ${s} via the \`style\` property.`
                ),
                !!l &&
                  !!u &&
                  ((function (e) {
                    let t = e[0];
                    if (1 === e.length) return !0;
                    for (let r = 0; r < e.length; r++)
                      if (e[r] !== t) return !0;
                  })(e) ||
                    ("spring" === r && n))
              );
            })(e, r, n, s)
          ) {
            if (i.c.current || !u) {
              null == d || d((0, l.$)(e, this.options, t)),
                null == c || c(),
                this.resolveFinishedPromise();
              return;
            }
            this.options.duration = 0;
          }
          let p = this.initPlayback(e, t);
          !1 !== p &&
            ((this._resolved = { keyframes: e, finalKeyframe: t, ...p }),
            this.onPostResolved());
        }
        onPostResolved() {}
        then(e, t) {
          return this.currentFinishedPromise.then(e, t);
        }
        updateFinishedPromise() {
          this.currentFinishedPromise = new Promise((e) => {
            this.resolveFinishedPromise = e;
          });
        }
      }
    },
    2332: function (e, t, r) {
      r.d(t, {
        s: function () {
          return U;
        },
        y: function () {
          return $;
        },
      });
      var n = r(3653),
        i = r(557),
        o = r(3476);
      function s(e, t, r) {
        let n = Math.max(t - 5, 0);
        return (0, o.R)(r - e(n), t - n);
      }
      var a = r(9047),
        l = r(1506);
      function u(e, t) {
        return e * Math.sqrt(1 - t * t);
      }
      let c = ["duration", "bounce"],
        d = ["stiffness", "damping", "mass"];
      function h(e, t) {
        return t.some((t) => void 0 !== e[t]);
      }
      function p({ keyframes: e, restDelta: t, restSpeed: r, ...n }) {
        let o;
        let p = e[0],
          f = e[e.length - 1],
          m = { done: !1, value: p },
          {
            stiffness: g,
            damping: v,
            mass: y,
            duration: b,
            velocity: x,
            isResolvedFromDuration: w,
          } = (function (e) {
            let t = {
              velocity: 0,
              stiffness: 100,
              damping: 10,
              mass: 1,
              isResolvedFromDuration: !1,
              ...e,
            };
            if (!h(e, d) && h(e, c)) {
              let r = (function ({
                duration: e = 800,
                bounce: t = 0.25,
                velocity: r = 0,
                mass: n = 1,
              }) {
                let o, s;
                (0, a.K)(
                  e <= (0, i.w)(10),
                  "Spring duration must be 10 seconds or less"
                );
                let c = 1 - t;
                (c = (0, l.u)(0.05, 1, c)),
                  (e = (0, l.u)(0.01, 10, (0, i.X)(e))),
                  c < 1
                    ? ((o = (t) => {
                        let n = t * c,
                          i = n * e;
                        return 0.001 - ((n - r) / u(t, c)) * Math.exp(-i);
                      }),
                      (s = (t) => {
                        let n = t * c * e,
                          i = Math.pow(c, 2) * Math.pow(t, 2) * e,
                          s = u(Math.pow(t, 2), c);
                        return (
                          ((n * r + r - i) *
                            Math.exp(-n) *
                            (-o(t) + 0.001 > 0 ? -1 : 1)) /
                          s
                        );
                      }))
                    : ((o = (t) =>
                        -0.001 + Math.exp(-t * e) * ((t - r) * e + 1)),
                      (s = (t) => e * e * (r - t) * Math.exp(-t * e)));
                let d = (function (e, t, r) {
                  let n = r;
                  for (let r = 1; r < 12; r++) n -= e(n) / t(n);
                  return n;
                })(o, s, 5 / e);
                if (((e = (0, i.w)(e)), isNaN(d)))
                  return { stiffness: 100, damping: 10, duration: e };
                {
                  let t = Math.pow(d, 2) * n;
                  return {
                    stiffness: t,
                    damping: 2 * c * Math.sqrt(n * t),
                    duration: e,
                  };
                }
              })(e);
              (t = { ...t, ...r, mass: 1 }).isResolvedFromDuration = !0;
            }
            return t;
          })({ ...n, velocity: -(0, i.X)(n.velocity || 0) }),
          P = x || 0,
          S = v / (2 * Math.sqrt(g * y)),
          E = f - p,
          T = (0, i.X)(Math.sqrt(g / y)),
          A = 5 > Math.abs(E);
        if ((r || (r = A ? 0.01 : 2), t || (t = A ? 0.005 : 0.5), S < 1)) {
          let e = u(T, S);
          o = (t) =>
            f -
            Math.exp(-S * T * t) *
              (((P + S * T * E) / e) * Math.sin(e * t) + E * Math.cos(e * t));
        } else if (1 === S)
          o = (e) => f - Math.exp(-T * e) * (E + (P + T * E) * e);
        else {
          let e = T * Math.sqrt(S * S - 1);
          o = (t) => {
            let r = Math.exp(-S * T * t),
              n = Math.min(e * t, 300);
            return (
              f -
              (r * ((P + S * T * E) * Math.sinh(n) + e * E * Math.cosh(n))) / e
            );
          };
        }
        return {
          calculatedDuration: (w && b) || null,
          next: (e) => {
            let n = o(e);
            if (w) m.done = e >= b;
            else {
              let i = P;
              0 !== e && (i = S < 1 ? s(o, e, n) : 0);
              let a = Math.abs(i) <= r,
                l = Math.abs(f - n) <= t;
              m.done = a && l;
            }
            return (m.value = m.done ? f : n), m;
          },
        };
      }
      function f({
        keyframes: e,
        velocity: t = 0,
        power: r = 0.8,
        timeConstant: n = 325,
        bounceDamping: i = 10,
        bounceStiffness: o = 500,
        modifyTarget: a,
        min: l,
        max: u,
        restDelta: c = 0.5,
        restSpeed: d,
      }) {
        let h, f;
        let m = e[0],
          g = { done: !1, value: m },
          v = (e) => (void 0 !== l && e < l) || (void 0 !== u && e > u),
          y = (e) =>
            void 0 === l
              ? u
              : void 0 === u
              ? l
              : Math.abs(l - e) < Math.abs(u - e)
              ? l
              : u,
          b = r * t,
          x = m + b,
          w = void 0 === a ? x : a(x);
        w !== x && (b = w - m);
        let P = (e) => -b * Math.exp(-e / n),
          S = (e) => w + P(e),
          E = (e) => {
            let t = P(e),
              r = S(e);
            (g.done = Math.abs(t) <= c), (g.value = g.done ? w : r);
          },
          T = (e) => {
            v(g.value) &&
              ((h = e),
              (f = p({
                keyframes: [g.value, y(g.value)],
                velocity: s(S, e, g.value),
                damping: i,
                stiffness: o,
                restDelta: c,
                restSpeed: d,
              })));
          };
        return (
          T(0),
          {
            calculatedDuration: null,
            next: (e) => {
              let t = !1;
              return (f || void 0 !== h || ((t = !0), E(e), T(e)),
              void 0 !== h && e >= h)
                ? f.next(e - h)
                : (t || E(e), g);
            },
          }
        );
      }
      var m = r(9276);
      let g = (e, t, r) =>
        (((1 - 3 * r + 3 * t) * e + (3 * r - 6 * t)) * e + 3 * t) * e;
      function v(e, t, r, n) {
        if (e === t && r === n) return m.Z;
        let i = (t) =>
          (function (e, t, r, n, i) {
            let o, s;
            let a = 0;
            do (o = g((s = t + (r - t) / 2), n, i) - e) > 0 ? (r = s) : (t = s);
            while (Math.abs(o) > 1e-7 && ++a < 12);
            return s;
          })(t, 0, 1, e, r);
        return (e) => (0 === e || 1 === e ? e : g(i(e), t, n));
      }
      let y = v(0.42, 0, 1, 1),
        b = v(0, 0, 0.58, 1),
        x = v(0.42, 0, 0.58, 1),
        w = (e) => Array.isArray(e) && "number" != typeof e[0];
      var P = r(8536),
        S = r(3108),
        E = r(2718);
      let T = v(0.33, 1.53, 0.69, 0.99),
        A = (0, E.M)(T),
        C = (0, S.o)(A),
        R = {
          linear: m.Z,
          easeIn: y,
          easeInOut: x,
          easeOut: b,
          circIn: P.Z7,
          circInOut: P.X7,
          circOut: P.Bn,
          backIn: A,
          backInOut: C,
          backOut: T,
          anticipate: (e) =>
            (e *= 2) < 1 ? 0.5 * A(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
        },
        M = (e) => {
          if (Array.isArray(e)) {
            (0, a.k)(
              4 === e.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            let [t, r, n, i] = e;
            return v(t, r, n, i);
          }
          return "string" == typeof e
            ? ((0, a.k)(void 0 !== R[e], `Invalid easing type '${e}'`), R[e])
            : e;
        };
      var k = r(2548),
        j = r(839);
      function V({
        duration: e = 300,
        keyframes: t,
        times: r,
        ease: n = "easeInOut",
      }) {
        let i = w(n) ? n.map(M) : M(n),
          o = { done: !1, value: t[0] },
          s = (r && r.length === t.length ? r : (0, j.Y)(t)).map((t) => t * e),
          a = (0, k.s)(s, t, {
            ease: Array.isArray(i)
              ? i
              : t.map(() => i || x).splice(0, t.length - 1),
          });
        return {
          calculatedDuration: e,
          next: (t) => ((o.value = a(t)), (o.done = t >= e), o),
        };
      }
      var O = r(7403),
        D = r(9654),
        _ = r(1215),
        L = r(9993),
        I = r(6219);
      let N = (e) => {
        let t = ({ timestamp: t }) => e(t);
        return {
          start: () => I.Wi.update(t, !0),
          stop: () => (0, I.Pn)(t),
          now: () =>
            I.frameData.isProcessing ? I.frameData.timestamp : L.X.now(),
        };
      };
      var F = r(7533);
      let B = { decay: f, inertia: f, tween: V, keyframes: V, spring: p },
        z = (e) => e / 100;
      class U extends O.v {
        constructor({ KeyframeResolver: e = n.e, ...t }) {
          super(t),
            (this.holdTime = null),
            (this.startTime = null),
            (this.cancelTime = null),
            (this.currentTime = 0),
            (this.playbackSpeed = 1),
            (this.pendingPlayState = "running"),
            (this.state = "idle"),
            (this.stop = () => {
              if (
                (this.resolver.cancel(),
                (this.isStopped = !0),
                "idle" === this.state)
              )
                return;
              this.teardown();
              let { onStop: e } = this.options;
              e && e();
            });
          let { name: r, motionValue: i, keyframes: o } = this.options,
            s = (e, t) => this.onKeyframesResolved(e, t);
          r && i && i.owner
            ? (this.resolver = i.owner.resolveKeyframes(o, s, r, i))
            : (this.resolver = new e(o, s, r, i)),
            this.resolver.scheduleResolve();
        }
        initPlayback(e) {
          let t, r;
          let {
              type: n = "keyframes",
              repeat: i = 0,
              repeatDelay: o = 0,
              repeatType: s,
              velocity: a = 0,
            } = this.options,
            l = B[n] || V;
          l !== V &&
            "number" != typeof e[0] &&
            ((t = (0, D.z)(z, (0, _.C)(e[0], e[1]))), (e = [0, 100]));
          let u = l({ ...this.options, keyframes: e });
          "mirror" === s &&
            (r = l({
              ...this.options,
              keyframes: [...e].reverse(),
              velocity: -a,
            })),
            null === u.calculatedDuration &&
              (u.calculatedDuration = (function (e) {
                let t = 0,
                  r = e.next(t);
                for (; !r.done && t < 2e4; ) (t += 50), (r = e.next(t));
                return t >= 2e4 ? 1 / 0 : t;
              })(u));
          let { calculatedDuration: c } = u,
            d = c + o;
          return {
            generator: u,
            mirroredGenerator: r,
            mapPercentToKeyframes: t,
            calculatedDuration: c,
            resolvedDuration: d,
            totalDuration: d * (i + 1) - o,
          };
        }
        onPostResolved() {
          let { autoplay: e = !0 } = this.options;
          this.play(),
            "paused" !== this.pendingPlayState && e
              ? (this.state = this.pendingPlayState)
              : this.pause();
        }
        tick(e, t = !1) {
          let { resolved: r } = this;
          if (!r) {
            let { keyframes: e } = this.options;
            return { done: !0, value: e[e.length - 1] };
          }
          let {
            finalKeyframe: n,
            generator: i,
            mirroredGenerator: o,
            mapPercentToKeyframes: s,
            keyframes: a,
            calculatedDuration: u,
            totalDuration: c,
            resolvedDuration: d,
          } = r;
          if (null === this.startTime) return i.next(0);
          let {
            delay: h,
            repeat: p,
            repeatType: f,
            repeatDelay: m,
            onUpdate: g,
          } = this.options;
          this.speed > 0
            ? (this.startTime = Math.min(this.startTime, e))
            : this.speed < 0 &&
              (this.startTime = Math.min(e - c / this.speed, this.startTime)),
            t
              ? (this.currentTime = e)
              : null !== this.holdTime
              ? (this.currentTime = this.holdTime)
              : (this.currentTime =
                  Math.round(e - this.startTime) * this.speed);
          let v = this.currentTime - h * (this.speed >= 0 ? 1 : -1),
            y = this.speed >= 0 ? v < 0 : v > c;
          (this.currentTime = Math.max(v, 0)),
            "finished" === this.state &&
              null === this.holdTime &&
              (this.currentTime = c);
          let b = this.currentTime,
            x = i;
          if (p) {
            let e = Math.min(this.currentTime, c) / d,
              t = Math.floor(e),
              r = e % 1;
            !r && e >= 1 && (r = 1),
              1 === r && t--,
              (t = Math.min(t, p + 1)) % 2 &&
                ("reverse" === f
                  ? ((r = 1 - r), m && (r -= m / d))
                  : "mirror" === f && (x = o)),
              (b = (0, l.u)(0, 1, r) * d);
          }
          let w = y ? { done: !1, value: a[0] } : x.next(b);
          s && (w.value = s(w.value));
          let { done: P } = w;
          y ||
            null === u ||
            (P =
              this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
          let S =
            null === this.holdTime &&
            ("finished" === this.state || ("running" === this.state && P));
          return (
            S && void 0 !== n && (w.value = (0, F.$)(a, this.options, n)),
            g && g(w.value),
            S && this.finish(),
            w
          );
        }
        get duration() {
          let { resolved: e } = this;
          return e ? (0, i.X)(e.calculatedDuration) : 0;
        }
        get time() {
          return (0, i.X)(this.currentTime);
        }
        set time(e) {
          (e = (0, i.w)(e)),
            (this.currentTime = e),
            null !== this.holdTime || 0 === this.speed
              ? (this.holdTime = e)
              : this.driver &&
                (this.startTime = this.driver.now() - e / this.speed);
        }
        get speed() {
          return this.playbackSpeed;
        }
        set speed(e) {
          let t = this.playbackSpeed !== e;
          (this.playbackSpeed = e),
            t && (this.time = (0, i.X)(this.currentTime));
        }
        play() {
          if (
            (this.resolver.isScheduled || this.resolver.resume(),
            !this._resolved)
          ) {
            this.pendingPlayState = "running";
            return;
          }
          if (this.isStopped) return;
          let { driver: e = N, onPlay: t } = this.options;
          this.driver || (this.driver = e((e) => this.tick(e))), t && t();
          let r = this.driver.now();
          null !== this.holdTime
            ? (this.startTime = r - this.holdTime)
            : (this.startTime && "finished" !== this.state) ||
              (this.startTime = r),
            "finished" === this.state && this.updateFinishedPromise(),
            (this.cancelTime = this.startTime),
            (this.holdTime = null),
            (this.state = "running"),
            this.driver.start();
        }
        pause() {
          var e;
          if (!this._resolved) {
            this.pendingPlayState = "paused";
            return;
          }
          (this.state = "paused"),
            (this.holdTime =
              null !== (e = this.currentTime) && void 0 !== e ? e : 0);
        }
        complete() {
          "running" !== this.state && this.play(),
            (this.pendingPlayState = this.state = "finished"),
            (this.holdTime = null);
        }
        finish() {
          this.teardown(), (this.state = "finished");
          let { onComplete: e } = this.options;
          e && e();
        }
        cancel() {
          null !== this.cancelTime && this.tick(this.cancelTime),
            this.teardown(),
            this.updateFinishedPromise();
        }
        teardown() {
          (this.state = "idle"),
            this.stopDriver(),
            this.resolveFinishedPromise(),
            this.updateFinishedPromise(),
            (this.startTime = this.cancelTime = null),
            this.resolver.cancel();
        }
        stopDriver() {
          this.driver && (this.driver.stop(), (this.driver = void 0));
        }
        sample(e) {
          return (this.startTime = 0), this.tick(e, !0);
        }
      }
      function $(e) {
        return new U(e);
      }
    },
    7533: function (e, t, r) {
      r.d(t, {
        $: function () {
          return i;
        },
      });
      let n = (e) => null !== e;
      function i(e, { repeat: t, repeatType: r = "loop" }, i) {
        let o = e.filter(n),
          s = t && "loop" !== r && t % 2 == 1 ? 0 : o.length - 1;
        return s && void 0 !== i ? i : o[s];
      }
    },
    9791: function (e, t, r) {
      r.d(t, {
        _: function () {
          return n;
        },
      });
      let n = (0, r(2265).createContext)({
        transformPagePoint: (e) => e,
        isStatic: !1,
        reducedMotion: "never",
      });
    },
    8536: function (e, t, r) {
      r.d(t, {
        Bn: function () {
          return s;
        },
        X7: function () {
          return a;
        },
        Z7: function () {
          return o;
        },
      });
      var n = r(3108),
        i = r(2718);
      let o = (e) => 1 - Math.sin(Math.acos(e)),
        s = (0, i.M)(o),
        a = (0, n.o)(o);
    },
    3108: function (e, t, r) {
      r.d(t, {
        o: function () {
          return n;
        },
      });
      let n = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2;
    },
    2718: function (e, t, r) {
      r.d(t, {
        M: function () {
          return n;
        },
      });
      let n = (e) => (t) => 1 - e(1 - t);
    },
    2981: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return s;
        },
      });
      var n = r(565);
      class i {
        constructor() {
          (this.order = []), (this.scheduled = new Set());
        }
        add(e) {
          if (!this.scheduled.has(e))
            return this.scheduled.add(e), this.order.push(e), !0;
        }
        remove(e) {
          let t = this.order.indexOf(e);
          -1 !== t && (this.order.splice(t, 1), this.scheduled.delete(e));
        }
        clear() {
          (this.order.length = 0), this.scheduled.clear();
        }
      }
      let o = [
        "read",
        "resolveKeyframes",
        "update",
        "preRender",
        "render",
        "postRender",
      ];
      function s(e, t) {
        let r = !1,
          s = !0,
          a = { delta: 0, timestamp: 0, isProcessing: !1 },
          l = o.reduce(
            (e, t) => (
              (e[t] = (function (e) {
                let t = new i(),
                  r = new i(),
                  n = 0,
                  o = !1,
                  s = !1,
                  a = new WeakSet(),
                  l = {
                    schedule: (e, i = !1, s = !1) => {
                      let l = s && o,
                        u = l ? t : r;
                      return (
                        i && a.add(e),
                        u.add(e) && l && o && (n = t.order.length),
                        e
                      );
                    },
                    cancel: (e) => {
                      r.remove(e), a.delete(e);
                    },
                    process: (i) => {
                      if (o) {
                        s = !0;
                        return;
                      }
                      if (
                        ((o = !0),
                        ([t, r] = [r, t]),
                        r.clear(),
                        (n = t.order.length))
                      )
                        for (let r = 0; r < n; r++) {
                          let n = t.order[r];
                          a.has(n) && (l.schedule(n), e()), n(i);
                        }
                      (o = !1), s && ((s = !1), l.process(i));
                    },
                  };
                return l;
              })(() => (r = !0))),
              e
            ),
            {}
          ),
          u = (e) => {
            l[e].process(a);
          },
          c = () => {
            let i = n.c.useManualTiming ? a.timestamp : performance.now();
            (r = !1),
              (a.delta = s
                ? 1e3 / 60
                : Math.max(Math.min(i - a.timestamp, 40), 1)),
              (a.timestamp = i),
              (a.isProcessing = !0),
              o.forEach(u),
              (a.isProcessing = !1),
              r && t && ((s = !1), e(c));
          },
          d = () => {
            (r = !0), (s = !0), a.isProcessing || e(c);
          };
        return {
          schedule: o.reduce((e, t) => {
            let n = l[t];
            return (
              (e[t] = (e, t = !1, i = !1) => (r || d(), n.schedule(e, t, i))), e
            );
          }, {}),
          cancel: (e) => o.forEach((t) => l[t].cancel(e)),
          state: a,
          steps: l,
        };
      }
    },
    6219: function (e, t, r) {
      r.d(t, {
        Pn: function () {
          return o;
        },
        S6: function () {
          return a;
        },
        Wi: function () {
          return i;
        },
        frameData: function () {
          return s;
        },
      });
      var n = r(9276);
      let {
        schedule: i,
        cancel: o,
        state: s,
        steps: a,
      } = (0, r(2981).Z)(
        "undefined" != typeof requestAnimationFrame
          ? requestAnimationFrame
          : n.Z,
        !0
      );
    },
    9993: function (e, t, r) {
      let n;
      r.d(t, {
        X: function () {
          return a;
        },
      });
      var i = r(565),
        o = r(6219);
      function s() {
        n = void 0;
      }
      let a = {
        now: () => (
          void 0 === n &&
            a.set(
              o.frameData.isProcessing || i.c.useManualTiming
                ? o.frameData.timestamp
                : performance.now()
            ),
          n
        ),
        set: (e) => {
          (n = e), queueMicrotask(s);
        },
      };
    },
    6956: function (e, t, r) {
      let n;
      r.d(t, {
        E: function () {
          return nk;
        },
      });
      var i,
        o,
        s = r(7437),
        a = r(2265),
        l = r(9791);
      let u = (0, a.createContext)({}),
        c = (0, a.createContext)(null);
      var d = r(9033);
      let h = (0, a.createContext)({ strict: !1 }),
        p = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
        f = "data-" + p("framerAppearId"),
        { schedule: m, cancel: g } = (0, r(2981).Z)(queueMicrotask, !1);
      function v(e) {
        return (
          e &&
          "object" == typeof e &&
          Object.prototype.hasOwnProperty.call(e, "current")
        );
      }
      function y(e) {
        return "string" == typeof e || Array.isArray(e);
      }
      function b(e) {
        return (
          null !== e && "object" == typeof e && "function" == typeof e.start
        );
      }
      let x = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        w = ["initial", ...x];
      function P(e) {
        return b(e.animate) || w.some((t) => y(e[t]));
      }
      function S(e) {
        return !!(P(e) || e.variants);
      }
      function E(e) {
        return Array.isArray(e) ? e.join(" ") : e;
      }
      let T = {
          animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
          ],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"],
        },
        A = {};
      for (let e in T) A[e] = { isEnabled: (t) => T[e].some((e) => !!t[e]) };
      var C = r(7282);
      let R = (0, a.createContext)({}),
        M = (0, a.createContext)({}),
        k = Symbol.for("motionComponentSymbol"),
        j = [
          "animate",
          "circle",
          "defs",
          "desc",
          "ellipse",
          "g",
          "image",
          "line",
          "filter",
          "marker",
          "mask",
          "metadata",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "rect",
          "stop",
          "switch",
          "symbol",
          "svg",
          "text",
          "tspan",
          "use",
          "view",
        ];
      function V(e) {
        if ("string" != typeof e || e.includes("-"));
        else if (j.indexOf(e) > -1 || /[A-Z]/u.test(e)) return !0;
        return !1;
      }
      let O = {};
      var D = r(6019);
      function _(e, { layout: t, layoutId: r }) {
        return (
          D.G.has(e) ||
          e.startsWith("origin") ||
          ((t || void 0 !== r) && (!!O[e] || "opacity" === e))
        );
      }
      var L = r(8322);
      let I = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        N = D._.length;
      var F = r(1534);
      let B = (e, t) => (t && "number" == typeof e ? t.transform(e) : e);
      var z = r(783),
        U = r(5480);
      let $ = { ...z.Rx, transform: Math.round },
        W = {
          borderWidth: U.px,
          borderTopWidth: U.px,
          borderRightWidth: U.px,
          borderBottomWidth: U.px,
          borderLeftWidth: U.px,
          borderRadius: U.px,
          radius: U.px,
          borderTopLeftRadius: U.px,
          borderTopRightRadius: U.px,
          borderBottomRightRadius: U.px,
          borderBottomLeftRadius: U.px,
          width: U.px,
          maxWidth: U.px,
          height: U.px,
          maxHeight: U.px,
          size: U.px,
          top: U.px,
          right: U.px,
          bottom: U.px,
          left: U.px,
          padding: U.px,
          paddingTop: U.px,
          paddingRight: U.px,
          paddingBottom: U.px,
          paddingLeft: U.px,
          margin: U.px,
          marginTop: U.px,
          marginRight: U.px,
          marginBottom: U.px,
          marginLeft: U.px,
          rotate: U.RW,
          rotateX: U.RW,
          rotateY: U.RW,
          rotateZ: U.RW,
          scale: z.bA,
          scaleX: z.bA,
          scaleY: z.bA,
          scaleZ: z.bA,
          skew: U.RW,
          skewX: U.RW,
          skewY: U.RW,
          distance: U.px,
          translateX: U.px,
          translateY: U.px,
          translateZ: U.px,
          x: U.px,
          y: U.px,
          z: U.px,
          perspective: U.px,
          transformPerspective: U.px,
          opacity: z.Fq,
          originX: U.$C,
          originY: U.$C,
          originZ: U.px,
          zIndex: $,
          backgroundPositionX: U.px,
          backgroundPositionY: U.px,
          fillOpacity: z.Fq,
          strokeOpacity: z.Fq,
          numOctaves: $,
        };
      function X(e, t, r, n) {
        let { style: i, vars: o, transform: s, transformOrigin: a } = e,
          l = !1,
          u = !1,
          c = !0;
        for (let e in t) {
          let r = t[e];
          if ((0, F.f)(e)) {
            o[e] = r;
            continue;
          }
          let n = W[e],
            d = B(r, n);
          if (D.G.has(e)) {
            if (((l = !0), (s[e] = d), !c)) continue;
            r !== (n.default || 0) && (c = !1);
          } else e.startsWith("origin") ? ((u = !0), (a[e] = d)) : (i[e] = d);
        }
        if (
          (!t.transform &&
            (l || n
              ? (i.transform = (function (
                  e,
                  {
                    enableHardwareAcceleration: t = !0,
                    allowTransformNone: r = !0,
                  },
                  n,
                  i
                ) {
                  let o = "";
                  for (let t = 0; t < N; t++) {
                    let r = D._[t];
                    if (void 0 !== e[r]) {
                      let t = I[r] || r;
                      o += `${t}(${e[r]}) `;
                    }
                  }
                  return (
                    t && !e.z && (o += "translateZ(0)"),
                    (o = o.trim()),
                    i ? (o = i(e, n ? "" : o)) : r && n && (o = "none"),
                    o
                  );
                })(e.transform, r, c, n))
              : i.transform && (i.transform = "none")),
          u)
        ) {
          let { originX: e = "50%", originY: t = "50%", originZ: r = 0 } = a;
          i.transformOrigin = `${e} ${t} ${r}`;
        }
      }
      let H = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {},
      });
      function G(e, t, r) {
        for (let n in t) (0, L.i)(t[n]) || _(n, r) || (e[n] = t[n]);
      }
      let K = new Set([
        "animate",
        "exit",
        "variants",
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "custom",
        "inherit",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "_dragX",
        "_dragY",
        "onHoverStart",
        "onHoverEnd",
        "onViewportEnter",
        "onViewportLeave",
        "globalTapTarget",
        "ignoreStrict",
        "viewport",
      ]);
      function Y(e) {
        return (
          e.startsWith("while") ||
          (e.startsWith("drag") && "draggable" !== e) ||
          e.startsWith("layout") ||
          e.startsWith("onTap") ||
          e.startsWith("onPan") ||
          e.startsWith("onLayout") ||
          K.has(e)
        );
      }
      let Z = (e) => !Y(e);
      try {
        (i = require("@emotion/is-prop-valid").default) &&
          (Z = (e) => (e.startsWith("on") ? !Y(e) : i(e)));
      } catch (e) {}
      function q(e, t, r) {
        return "string" == typeof e ? e : U.px.transform(t + r * e);
      }
      let Q = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        J = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function ee(
        e,
        {
          attrX: t,
          attrY: r,
          attrScale: n,
          originX: i,
          originY: o,
          pathLength: s,
          pathSpacing: a = 1,
          pathOffset: l = 0,
          ...u
        },
        c,
        d,
        h
      ) {
        if ((X(e, u, c, h), d)) {
          e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
          return;
        }
        (e.attrs = e.style), (e.style = {});
        let { attrs: p, style: f, dimensions: m } = e;
        p.transform && (m && (f.transform = p.transform), delete p.transform),
          m &&
            (void 0 !== i || void 0 !== o || f.transform) &&
            (f.transformOrigin = (function (e, t, r) {
              let n = q(t, e.x, e.width),
                i = q(r, e.y, e.height);
              return `${n} ${i}`;
            })(m, void 0 !== i ? i : 0.5, void 0 !== o ? o : 0.5)),
          void 0 !== t && (p.x = t),
          void 0 !== r && (p.y = r),
          void 0 !== n && (p.scale = n),
          void 0 !== s &&
            (function (e, t, r = 1, n = 0, i = !0) {
              e.pathLength = 1;
              let o = i ? Q : J;
              e[o.offset] = U.px.transform(-n);
              let s = U.px.transform(t),
                a = U.px.transform(r);
              e[o.array] = `${s} ${a}`;
            })(p, s, a, l, !1);
      }
      let et = () => ({ ...H(), attrs: {} }),
        er = (e) => "string" == typeof e && "svg" === e.toLowerCase();
      function en(e, { style: t, vars: r }, n, i) {
        for (let o in (Object.assign(e.style, t, i && i.getProjectionStyles(n)),
        r))
          e.style.setProperty(o, r[o]);
      }
      let ei = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]);
      function eo(e, t, r, n) {
        for (let r in (en(e, t, void 0, n), t.attrs))
          e.setAttribute(ei.has(r) ? r : p(r), t.attrs[r]);
      }
      function es(e, t, r) {
        var n;
        let { style: i } = e,
          o = {};
        for (let s in i)
          ((0, L.i)(i[s]) ||
            (t.style && (0, L.i)(t.style[s])) ||
            _(s, e) ||
            (null === (n = null == r ? void 0 : r.getValue(s)) || void 0 === n
              ? void 0
              : n.liveStyle) !== void 0) &&
            (o[s] = i[s]);
        return o;
      }
      function ea(e, t, r) {
        let n = es(e, t, r);
        for (let r in e)
          ((0, L.i)(e[r]) || (0, L.i)(t[r])) &&
            (n[
              -1 !== D._.indexOf(r)
                ? "attr" + r.charAt(0).toUpperCase() + r.substring(1)
                : r
            ] = e[r]);
        return n;
      }
      function el(e, t, r, n = {}, i = {}) {
        return (
          "function" == typeof t && (t = t(void 0 !== r ? r : e.custom, n, i)),
          "string" == typeof t && (t = e.variants && e.variants[t]),
          "function" == typeof t && (t = t(void 0 !== r ? r : e.custom, n, i)),
          t
        );
      }
      var eu = r(458);
      let ec = (e) => Array.isArray(e),
        ed = (e) => !!(e && "object" == typeof e && e.mix && e.toValue),
        eh = (e) => (ec(e) ? e[e.length - 1] || 0 : e);
      function ep(e) {
        let t = (0, L.i)(e) ? e.get() : e;
        return ed(t) ? t.toValue() : t;
      }
      let ef = (e) => (t, r) => {
        let n = (0, a.useContext)(u),
          i = (0, a.useContext)(c),
          o = () =>
            (function (
              {
                scrapeMotionValuesFromProps: e,
                createRenderState: t,
                onMount: r,
              },
              n,
              i,
              o
            ) {
              let s = {
                latestValues: (function (e, t, r, n) {
                  let i = {},
                    o = n(e, {});
                  for (let e in o) i[e] = ep(o[e]);
                  let { initial: s, animate: a } = e,
                    l = P(e),
                    u = S(e);
                  t &&
                    u &&
                    !l &&
                    !1 !== e.inherit &&
                    (void 0 === s && (s = t.initial),
                    void 0 === a && (a = t.animate));
                  let c = !!r && !1 === r.initial,
                    d = (c = c || !1 === s) ? a : s;
                  return (
                    d &&
                      "boolean" != typeof d &&
                      !b(d) &&
                      (Array.isArray(d) ? d : [d]).forEach((t) => {
                        let r = el(e, t);
                        if (!r) return;
                        let { transitionEnd: n, transition: o, ...s } = r;
                        for (let e in s) {
                          let t = s[e];
                          if (Array.isArray(t)) {
                            let e = c ? t.length - 1 : 0;
                            t = t[e];
                          }
                          null !== t && (i[e] = t);
                        }
                        for (let e in n) i[e] = n[e];
                      }),
                    i
                  );
                })(n, i, o, e),
                renderState: t(),
              };
              return r && (s.mount = (e) => r(n, e, s)), s;
            })(e, t, n, i);
        return r ? o() : (0, eu.h)(o);
      };
      var em = r(6219);
      let eg = {
          useVisualState: ef({
            scrapeMotionValuesFromProps: ea,
            createRenderState: et,
            onMount: (e, t, { renderState: r, latestValues: n }) => {
              em.Wi.read(() => {
                try {
                  r.dimensions =
                    "function" == typeof t.getBBox
                      ? t.getBBox()
                      : t.getBoundingClientRect();
                } catch (e) {
                  r.dimensions = { x: 0, y: 0, width: 0, height: 0 };
                }
              }),
                em.Wi.render(() => {
                  ee(
                    r,
                    n,
                    { enableHardwareAcceleration: !1 },
                    er(t.tagName),
                    e.transformTemplate
                  ),
                    eo(t, r);
                });
            },
          }),
        },
        ev = {
          useVisualState: ef({
            scrapeMotionValuesFromProps: es,
            createRenderState: H,
          }),
        };
      function ey(e, t, r, n = { passive: !0 }) {
        return e.addEventListener(t, r, n), () => e.removeEventListener(t, r);
      }
      let eb = (e) =>
        "mouse" === e.pointerType
          ? "number" != typeof e.button || e.button <= 0
          : !1 !== e.isPrimary;
      function ex(e, t = "page") {
        return { point: { x: e[`${t}X`], y: e[`${t}Y`] } };
      }
      let ew = (e) => (t) => eb(t) && e(t, ex(t));
      function eP(e, t, r, n) {
        return ey(e, t, ew(r), n);
      }
      var eS = r(9654);
      function eE(e) {
        let t = null;
        return () =>
          null === t &&
          ((t = e),
          () => {
            t = null;
          });
      }
      let eT = eE("dragHorizontal"),
        eA = eE("dragVertical");
      function eC(e) {
        let t = !1;
        if ("y" === e) t = eA();
        else if ("x" === e) t = eT();
        else {
          let e = eT(),
            r = eA();
          e && r
            ? (t = () => {
                e(), r();
              })
            : (e && e(), r && r());
        }
        return t;
      }
      function eR() {
        let e = eC(!0);
        return !e || (e(), !1);
      }
      class eM {
        constructor(e) {
          (this.isMounted = !1), (this.node = e);
        }
        update() {}
      }
      function ek(e, t) {
        let r = t ? "onHoverStart" : "onHoverEnd";
        return eP(
          e.current,
          t ? "pointerenter" : "pointerleave",
          (n, i) => {
            if ("touch" === n.pointerType || eR()) return;
            let o = e.getProps();
            e.animationState &&
              o.whileHover &&
              e.animationState.setActive("whileHover", t);
            let s = o[r];
            s && s(n, i);
          },
          { passive: !e.getProps()[r] }
        );
      }
      class ej extends eM {
        mount() {
          this.unmount = (0, eS.z)(ek(this.node, !0), ek(this.node, !1));
        }
        unmount() {}
      }
      class eV extends eM {
        constructor() {
          super(...arguments), (this.isActive = !1);
        }
        onFocus() {
          let e = !1;
          try {
            e = this.node.current.matches(":focus-visible");
          } catch (t) {
            e = !0;
          }
          e &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !0),
            (this.isActive = !0));
        }
        onBlur() {
          this.isActive &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !1),
            (this.isActive = !1));
        }
        mount() {
          this.unmount = (0, eS.z)(
            ey(this.node.current, "focus", () => this.onFocus()),
            ey(this.node.current, "blur", () => this.onBlur())
          );
        }
        unmount() {}
      }
      let eO = (e, t) => !!t && (e === t || eO(e, t.parentElement));
      var eD = r(9276);
      function e_(e, t) {
        if (!t) return;
        let r = new PointerEvent("pointer" + e);
        t(r, ex(r));
      }
      class eL extends eM {
        constructor() {
          super(...arguments),
            (this.removeStartListeners = eD.Z),
            (this.removeEndListeners = eD.Z),
            (this.removeAccessibleListeners = eD.Z),
            (this.startPointerPress = (e, t) => {
              if (this.isPressing) return;
              this.removeEndListeners();
              let r = this.node.getProps(),
                n = eP(
                  window,
                  "pointerup",
                  (e, t) => {
                    if (!this.checkPressEnd()) return;
                    let {
                      onTap: r,
                      onTapCancel: n,
                      globalTapTarget: i,
                    } = this.node.getProps();
                    i || eO(this.node.current, e.target)
                      ? r && r(e, t)
                      : n && n(e, t);
                  },
                  { passive: !(r.onTap || r.onPointerUp) }
                ),
                i = eP(
                  window,
                  "pointercancel",
                  (e, t) => this.cancelPress(e, t),
                  { passive: !(r.onTapCancel || r.onPointerCancel) }
                );
              (this.removeEndListeners = (0, eS.z)(n, i)),
                this.startPress(e, t);
            }),
            (this.startAccessiblePress = () => {
              let e = ey(this.node.current, "keydown", (e) => {
                  "Enter" !== e.key ||
                    this.isPressing ||
                    (this.removeEndListeners(),
                    (this.removeEndListeners = ey(
                      this.node.current,
                      "keyup",
                      (e) => {
                        "Enter" === e.key &&
                          this.checkPressEnd() &&
                          e_("up", (e, t) => {
                            let { onTap: r } = this.node.getProps();
                            r && r(e, t);
                          });
                      }
                    )),
                    e_("down", (e, t) => {
                      this.startPress(e, t);
                    }));
                }),
                t = ey(this.node.current, "blur", () => {
                  this.isPressing &&
                    e_("cancel", (e, t) => this.cancelPress(e, t));
                });
              this.removeAccessibleListeners = (0, eS.z)(e, t);
            });
        }
        startPress(e, t) {
          this.isPressing = !0;
          let { onTapStart: r, whileTap: n } = this.node.getProps();
          n &&
            this.node.animationState &&
            this.node.animationState.setActive("whileTap", !0),
            r && r(e, t);
        }
        checkPressEnd() {
          return (
            this.removeEndListeners(),
            (this.isPressing = !1),
            this.node.getProps().whileTap &&
              this.node.animationState &&
              this.node.animationState.setActive("whileTap", !1),
            !eR()
          );
        }
        cancelPress(e, t) {
          if (!this.checkPressEnd()) return;
          let { onTapCancel: r } = this.node.getProps();
          r && r(e, t);
        }
        mount() {
          let e = this.node.getProps(),
            t = eP(
              e.globalTapTarget ? window : this.node.current,
              "pointerdown",
              this.startPointerPress,
              { passive: !(e.onTapStart || e.onPointerStart) }
            ),
            r = ey(this.node.current, "focus", this.startAccessiblePress);
          this.removeStartListeners = (0, eS.z)(t, r);
        }
        unmount() {
          this.removeStartListeners(),
            this.removeEndListeners(),
            this.removeAccessibleListeners();
        }
      }
      let eI = new WeakMap(),
        eN = new WeakMap(),
        eF = (e) => {
          let t = eI.get(e.target);
          t && t(e);
        },
        eB = (e) => {
          e.forEach(eF);
        },
        ez = { some: 0, all: 1 };
      class eU extends eM {
        constructor() {
          super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
        }
        startObserver() {
          this.unmount();
          let { viewport: e = {} } = this.node.getProps(),
            { root: t, margin: r, amount: n = "some", once: i } = e,
            o = {
              root: t ? t.current : void 0,
              rootMargin: r,
              threshold: "number" == typeof n ? n : ez[n],
            };
          return (function (e, t, r) {
            let n = (function ({ root: e, ...t }) {
              let r = e || document;
              eN.has(r) || eN.set(r, {});
              let n = eN.get(r),
                i = JSON.stringify(t);
              return (
                n[i] ||
                  (n[i] = new IntersectionObserver(eB, { root: e, ...t })),
                n[i]
              );
            })(t);
            return (
              eI.set(e, r),
              n.observe(e),
              () => {
                eI.delete(e), n.unobserve(e);
              }
            );
          })(this.node.current, o, (e) => {
            let { isIntersecting: t } = e;
            if (
              this.isInView === t ||
              ((this.isInView = t), i && !t && this.hasEnteredView)
            )
              return;
            t && (this.hasEnteredView = !0),
              this.node.animationState &&
                this.node.animationState.setActive("whileInView", t);
            let { onViewportEnter: r, onViewportLeave: n } =
                this.node.getProps(),
              o = t ? r : n;
            o && o(e);
          });
        }
        mount() {
          this.startObserver();
        }
        update() {
          if ("undefined" == typeof IntersectionObserver) return;
          let { props: e, prevProps: t } = this.node;
          ["amount", "margin", "root"].some(
            (function ({ viewport: e = {} }, { viewport: t = {} } = {}) {
              return (r) => e[r] !== t[r];
            })(e, t)
          ) && this.startObserver();
        }
        unmount() {}
      }
      function e$(e, t) {
        if (!Array.isArray(t)) return !1;
        let r = t.length;
        if (r !== e.length) return !1;
        for (let n = 0; n < r; n++) if (t[n] !== e[n]) return !1;
        return !0;
      }
      function eW(e, t, r) {
        let n = e.getProps();
        return el(
          n,
          t,
          void 0 !== r ? r : n.custom,
          (function (e) {
            let t = {};
            return e.values.forEach((e, r) => (t[r] = e.get())), t;
          })(e),
          (function (e) {
            let t = {};
            return e.values.forEach((e, r) => (t[r] = e.getVelocity())), t;
          })(e)
        );
      }
      var eX = r(557);
      let eH = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        eG = (e) => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === e ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        eK = { type: "keyframes", duration: 0.8 },
        eY = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        eZ = (e, { keyframes: t }) =>
          t.length > 2
            ? eK
            : D.G.has(e)
            ? e.startsWith("scale")
              ? eG(t[1])
              : eH
            : eY;
      function eq(e, t) {
        return e[t] || e.default || e;
      }
      var eQ = r(565),
        eJ = r(4097),
        e0 = r(7533),
        e1 = r(9993);
      let e2 = (e) => /^0[^.\s]+$/u.test(e);
      var e3 = r(9047);
      let e5 = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
        e9 = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
      var e4 = r(5014);
      let e6 = (e) => (t) => t.test(e),
        e8 = [
          z.Rx,
          U.px,
          U.aQ,
          U.RW,
          U.vw,
          U.vh,
          { test: (e) => "auto" === e, parse: (e) => e },
        ],
        e7 = (e) => e8.find(e6(e));
      var te = r(3653),
        tt = r(3646),
        tr = r(7292);
      let tn = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function ti(e) {
        let [t, r] = e.slice(0, -1).split("(");
        if ("drop-shadow" === t) return e;
        let [n] = r.match(tr.KP) || [];
        if (!n) return e;
        let i = r.replace(n, ""),
          o = tn.has(t) ? 1 : 0;
        return n !== r && (o *= 100), t + "(" + o + i + ")";
      }
      let to = /\b([a-z-]*)\(.*?\)/gu,
        ts = {
          ...tt.P,
          getAnimatableNone: (e) => {
            let t = e.match(to);
            return t ? t.map(ti).join(" ") : e;
          },
        };
      var ta = r(146);
      let tl = {
          ...W,
          color: ta.$,
          backgroundColor: ta.$,
          outlineColor: ta.$,
          fill: ta.$,
          stroke: ta.$,
          borderColor: ta.$,
          borderTopColor: ta.$,
          borderRightColor: ta.$,
          borderBottomColor: ta.$,
          borderLeftColor: ta.$,
          filter: ts,
          WebkitFilter: ts,
        },
        tu = (e) => tl[e];
      function tc(e, t) {
        let r = tu(e);
        return (
          r !== ts && (r = tt.P),
          r.getAnimatableNone ? r.getAnimatableNone(t) : void 0
        );
      }
      class td extends te.e {
        constructor(e, t, r, n) {
          super(e, t, r, n, null == n ? void 0 : n.owner, !0);
        }
        readKeyframes() {
          let { unresolvedKeyframes: e, element: t, name: r } = this;
          if (!t.current) return;
          super.readKeyframes();
          for (let r = 0; r < e.length; r++) {
            let n = e[r];
            if ("string" == typeof n && (0, F.t)(n)) {
              let i = (function e(t, r, n = 1) {
                (0, e3.k)(
                  n <= 4,
                  `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`
                );
                let [i, o] = (function (e) {
                  let t = e9.exec(e);
                  if (!t) return [,];
                  let [, r, n, i] = t;
                  return [`--${null != r ? r : n}`, i];
                })(t);
                if (!i) return;
                let s = window.getComputedStyle(r).getPropertyValue(i);
                if (s) {
                  let e = s.trim();
                  return e5(e) ? parseFloat(e) : e;
                }
                return (0, F.t)(o) ? e(o, r, n + 1) : o;
              })(n, t.current);
              void 0 !== i && (e[r] = i),
                r === e.length - 1 && (this.finalKeyframe = n);
            }
          }
          if (!e4.z2.has(r) || 2 !== e.length)
            return this.resolveNoneKeyframes();
          let [n, i] = e,
            o = e7(n),
            s = e7(i);
          if (o !== s) {
            if ((0, e4.mP)(o) && (0, e4.mP)(s))
              for (let t = 0; t < e.length; t++) {
                let r = e[t];
                "string" == typeof r && (e[t] = parseFloat(r));
              }
            else this.needsMeasurement = !0;
          }
        }
        resolveNoneKeyframes() {
          let { unresolvedKeyframes: e, name: t } = this,
            r = [];
          for (let t = 0; t < e.length; t++) {
            var n;
            ("number" == typeof (n = e[t])
              ? 0 === n
              : null === n || "none" === n || "0" === n || e2(n)) && r.push(t);
          }
          r.length &&
            (function (e, t, r) {
              let n,
                i = 0;
              for (; i < e.length && !n; )
                "string" == typeof e[i] &&
                  "none" !== e[i] &&
                  "0" !== e[i] &&
                  (n = e[i]),
                  i++;
              if (n && r) for (let i of t) e[i] = tc(r, n);
            })(e, r, t);
        }
        measureInitialState() {
          let { element: e, unresolvedKeyframes: t, name: r } = this;
          if (!e.current) return;
          "height" === r && (this.suspendedScrollY = window.pageYOffset),
            (this.measuredOrigin = e4.lw[r](
              e.measureViewportBox(),
              window.getComputedStyle(e.current)
            )),
            (t[0] = this.measuredOrigin);
          let n = t[t.length - 1];
          void 0 !== n && e.getValue(r, n).jump(n, !1);
        }
        measureEndState() {
          var e;
          let { element: t, name: r, unresolvedKeyframes: n } = this;
          if (!t.current) return;
          let i = t.getValue(r);
          i && i.jump(this.measuredOrigin, !1);
          let o = n.length - 1,
            s = n[o];
          (n[o] = e4.lw[r](
            t.measureViewportBox(),
            window.getComputedStyle(t.current)
          )),
            null !== s &&
              void 0 === this.finalKeyframe &&
              (this.finalKeyframe = s),
            (null === (e = this.removedTransforms) || void 0 === e
              ? void 0
              : e.length) &&
              this.removedTransforms.forEach(([e, r]) => {
                t.getValue(e).set(r);
              }),
            this.resolveNoneKeyframes();
        }
      }
      var th = r(7403),
        tp = r(2332);
      let tf = (e) => Array.isArray(e) && "number" == typeof e[0],
        tm = ([e, t, r, n]) => `cubic-bezier(${e}, ${t}, ${r}, ${n})`,
        tg = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: tm([0, 0.65, 0.55, 1]),
          circOut: tm([0.55, 0, 1, 0.45]),
          backIn: tm([0.31, 0.01, 0.66, -0.59]),
          backOut: tm([0.33, 1.53, 0.69, 0.99]),
        };
      function tv(e) {
        return ty(e) || tg.easeOut;
      }
      function ty(e) {
        if (e) return tf(e) ? tm(e) : Array.isArray(e) ? e.map(tv) : tg[e];
      }
      let tb =
          ((o = () => Object.hasOwnProperty.call(Element.prototype, "animate")),
          () => (void 0 === n && (n = o()), n)),
        tx = new Set(["opacity", "clipPath", "filter", "transform"]);
      class tw extends th.v {
        constructor(e) {
          super(e);
          let { name: t, motionValue: r, keyframes: n } = this.options;
          (this.resolver = new td(
            n,
            (e, t) => this.onKeyframesResolved(e, t),
            t,
            r
          )),
            this.resolver.scheduleResolve();
        }
        initPlayback(e, t) {
          var r, n;
          let {
            duration: i = 300,
            times: o,
            ease: s,
            type: a,
            motionValue: l,
            name: u,
          } = this.options;
          if (!(null === (r = l.owner) || void 0 === r ? void 0 : r.current))
            return !1;
          if (
            "spring" === (n = this.options).type ||
            "backgroundColor" === n.name ||
            !(function e(t) {
              return !!(
                !t ||
                ("string" == typeof t && t in tg) ||
                tf(t) ||
                (Array.isArray(t) && t.every(e))
              );
            })(n.ease)
          ) {
            let {
                onComplete: t,
                onUpdate: r,
                motionValue: n,
                ...l
              } = this.options,
              u = (function (e, t) {
                let r = new tp.s({
                    ...t,
                    keyframes: e,
                    repeat: 0,
                    delay: 0,
                    isGenerator: !0,
                  }),
                  n = { done: !1, value: e[0] },
                  i = [],
                  o = 0;
                for (; !n.done && o < 2e4; )
                  i.push((n = r.sample(o)).value), (o += 10);
                return {
                  times: void 0,
                  keyframes: i,
                  duration: o - 10,
                  ease: "linear",
                };
              })(e, l);
            1 === (e = u.keyframes).length && (e[1] = e[0]),
              (i = u.duration),
              (o = u.times),
              (s = u.ease),
              (a = "keyframes");
          }
          let c = (function (
            e,
            t,
            r,
            {
              delay: n = 0,
              duration: i = 300,
              repeat: o = 0,
              repeatType: s = "loop",
              ease: a,
              times: l,
            } = {}
          ) {
            let u = { [t]: r };
            l && (u.offset = l);
            let c = ty(a);
            return (
              Array.isArray(c) && (u.easing = c),
              e.animate(u, {
                delay: n,
                duration: i,
                easing: Array.isArray(c) ? "linear" : c,
                fill: "both",
                iterations: o + 1,
                direction: "reverse" === s ? "alternate" : "normal",
              })
            );
          })(l.owner.current, u, e, {
            ...this.options,
            duration: i,
            times: o,
            ease: s,
          });
          return (
            (c.startTime = e1.X.now()),
            this.pendingTimeline
              ? ((c.timeline = this.pendingTimeline),
                (this.pendingTimeline = void 0))
              : (c.onfinish = () => {
                  let { onComplete: r } = this.options;
                  l.set((0, e0.$)(e, this.options, t)),
                    r && r(),
                    this.cancel(),
                    this.resolveFinishedPromise();
                }),
            {
              animation: c,
              duration: i,
              times: o,
              type: a,
              ease: s,
              keyframes: e,
            }
          );
        }
        get duration() {
          let { resolved: e } = this;
          if (!e) return 0;
          let { duration: t } = e;
          return (0, eX.X)(t);
        }
        get time() {
          let { resolved: e } = this;
          if (!e) return 0;
          let { animation: t } = e;
          return (0, eX.X)(t.currentTime || 0);
        }
        set time(e) {
          let { resolved: t } = this;
          if (!t) return;
          let { animation: r } = t;
          r.currentTime = (0, eX.w)(e);
        }
        get speed() {
          let { resolved: e } = this;
          if (!e) return 1;
          let { animation: t } = e;
          return t.playbackRate;
        }
        set speed(e) {
          let { resolved: t } = this;
          if (!t) return;
          let { animation: r } = t;
          r.playbackRate = e;
        }
        get state() {
          let { resolved: e } = this;
          if (!e) return "idle";
          let { animation: t } = e;
          return t.playState;
        }
        attachTimeline(e) {
          if (this._resolved) {
            let { resolved: t } = this;
            if (!t) return eD.Z;
            let { animation: r } = t;
            (r.timeline = e), (r.onfinish = null);
          } else this.pendingTimeline = e;
          return eD.Z;
        }
        play() {
          if (this.isStopped) return;
          let { resolved: e } = this;
          if (!e) return;
          let { animation: t } = e;
          "finished" === t.playState && this.updateFinishedPromise(), t.play();
        }
        pause() {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: t } = e;
          t.pause();
        }
        stop() {
          if (
            (this.resolver.cancel(),
            (this.isStopped = !0),
            "idle" === this.state)
          )
            return;
          let { resolved: e } = this;
          if (!e) return;
          let {
            animation: t,
            keyframes: r,
            duration: n,
            type: i,
            ease: o,
            times: s,
          } = e;
          if ("idle" !== t.playState && "finished" !== t.playState) {
            if (this.time) {
              let {
                  motionValue: e,
                  onUpdate: t,
                  onComplete: a,
                  ...l
                } = this.options,
                u = new tp.s({
                  ...l,
                  keyframes: r,
                  duration: n,
                  type: i,
                  ease: o,
                  times: s,
                  isGenerator: !0,
                }),
                c = (0, eX.w)(this.time);
              e.setWithVelocity(u.sample(c - 10).value, u.sample(c).value, 10);
            }
            this.cancel();
          }
        }
        complete() {
          let { resolved: e } = this;
          e && e.animation.finish();
        }
        cancel() {
          let { resolved: e } = this;
          e && e.animation.cancel();
        }
        static supports(e) {
          let {
            motionValue: t,
            name: r,
            repeatDelay: n,
            repeatType: i,
            damping: o,
            type: s,
          } = e;
          return (
            tb() &&
            r &&
            tx.has(r) &&
            t &&
            t.owner &&
            t.owner.current instanceof HTMLElement &&
            !t.owner.getProps().onUpdate &&
            !n &&
            "mirror" !== i &&
            0 !== o &&
            "inertia" !== s
          );
        }
      }
      let tP =
        (e, t, r, n = {}, i, o) =>
        (s) => {
          let a = eq(n, e) || {},
            l = a.delay || n.delay || 0,
            { elapsed: u = 0 } = n;
          u -= (0, eX.w)(l);
          let c = {
            keyframes: Array.isArray(r) ? r : [null, r],
            ease: "easeOut",
            velocity: t.getVelocity(),
            ...a,
            delay: -u,
            onUpdate: (e) => {
              t.set(e), a.onUpdate && a.onUpdate(e);
            },
            onComplete: () => {
              s(), a.onComplete && a.onComplete();
            },
            name: e,
            motionValue: t,
            element: o ? void 0 : i,
          };
          !(function ({
            when: e,
            delay: t,
            delayChildren: r,
            staggerChildren: n,
            staggerDirection: i,
            repeat: o,
            repeatType: s,
            repeatDelay: a,
            from: l,
            elapsed: u,
            ...c
          }) {
            return !!Object.keys(c).length;
          })(a) && (c = { ...c, ...eZ(e, c) }),
            c.duration && (c.duration = (0, eX.w)(c.duration)),
            c.repeatDelay && (c.repeatDelay = (0, eX.w)(c.repeatDelay)),
            void 0 !== c.from && (c.keyframes[0] = c.from);
          let d = !1;
          if (
            ((!1 !== c.type && (0 !== c.duration || c.repeatDelay)) ||
              ((c.duration = 0), 0 !== c.delay || (d = !0)),
            (eJ.c.current || eQ.c.skipAnimations) &&
              ((d = !0), (c.duration = 0), (c.delay = 0)),
            d && !o && void 0 !== t.get())
          ) {
            let e = (0, e0.$)(c.keyframes, a);
            if (void 0 !== e) {
              em.Wi.update(() => {
                c.onUpdate(e), c.onComplete();
              });
              return;
            }
          }
          return !o && tw.supports(c) ? new tw(c) : new tp.s(c);
        };
      function tS(e) {
        return !!((0, L.i)(e) && e.add);
      }
      var tE = r(804);
      function tT(e, t, { delay: r = 0, transitionOverride: n, type: i } = {}) {
        var o;
        let {
            transition: s = e.getDefaultTransition(),
            transitionEnd: a,
            ...l
          } = t,
          u = e.getValue("willChange");
        n && (s = n);
        let c = [],
          d = i && e.animationState && e.animationState.getState()[i];
        for (let t in l) {
          let n = e.getValue(
              t,
              null !== (o = e.latestValues[t]) && void 0 !== o ? o : null
            ),
            i = l[t];
          if (
            void 0 === i ||
            (d &&
              (function ({ protectedKeys: e, needsAnimating: t }, r) {
                let n = e.hasOwnProperty(r) && !0 !== t[r];
                return (t[r] = !1), n;
              })(d, t))
          )
            continue;
          let a = { delay: r, elapsed: 0, ...eq(s || {}, t) },
            h = !1;
          if (window.HandoffAppearAnimations) {
            let r = e.getProps()[f];
            if (r) {
              let e = window.HandoffAppearAnimations(r, t);
              null !== e && ((a.elapsed = e), (h = !0));
            }
          }
          n.start(
            tP(
              t,
              n,
              i,
              e.shouldReduceMotion && D.G.has(t) ? { type: !1 } : a,
              e,
              h
            )
          );
          let p = n.animation;
          p && (tS(u) && (u.add(t), p.then(() => u.remove(t))), c.push(p));
        }
        return (
          a &&
            Promise.all(c).then(() => {
              em.Wi.update(() => {
                a &&
                  (function (e, t) {
                    let {
                      transitionEnd: r = {},
                      transition: n = {},
                      ...i
                    } = eW(e, t) || {};
                    for (let t in (i = { ...i, ...r })) {
                      let r = eh(i[t]);
                      e.hasValue(t)
                        ? e.getValue(t).set(r)
                        : e.addValue(t, (0, tE.BX)(r));
                    }
                  })(e, a);
              });
            }),
          c
        );
      }
      function tA(e, t, r = {}) {
        var n;
        let i = eW(
            e,
            t,
            "exit" === r.type
              ? null === (n = e.presenceContext) || void 0 === n
                ? void 0
                : n.custom
              : void 0
          ),
          { transition: o = e.getDefaultTransition() || {} } = i || {};
        r.transitionOverride && (o = r.transitionOverride);
        let s = i ? () => Promise.all(tT(e, i, r)) : () => Promise.resolve(),
          a =
            e.variantChildren && e.variantChildren.size
              ? (n = 0) => {
                  let {
                    delayChildren: i = 0,
                    staggerChildren: s,
                    staggerDirection: a,
                  } = o;
                  return (function (e, t, r = 0, n = 0, i = 1, o) {
                    let s = [],
                      a = (e.variantChildren.size - 1) * n,
                      l = 1 === i ? (e = 0) => e * n : (e = 0) => a - e * n;
                    return (
                      Array.from(e.variantChildren)
                        .sort(tC)
                        .forEach((e, n) => {
                          e.notify("AnimationStart", t),
                            s.push(
                              tA(e, t, { ...o, delay: r + l(n) }).then(() =>
                                e.notify("AnimationComplete", t)
                              )
                            );
                        }),
                      Promise.all(s)
                    );
                  })(e, t, i + n, s, a, r);
                }
              : () => Promise.resolve(),
          { when: l } = o;
        if (!l) return Promise.all([s(), a(r.delay)]);
        {
          let [e, t] = "beforeChildren" === l ? [s, a] : [a, s];
          return e().then(() => t());
        }
      }
      function tC(e, t) {
        return e.sortNodePosition(t);
      }
      let tR = [...x].reverse(),
        tM = x.length;
      function tk(e = !1) {
        return {
          isActive: e,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      class tj extends eM {
        constructor(e) {
          super(e),
            e.animationState ||
              (e.animationState = (function (e) {
                let t = (t) =>
                    Promise.all(
                      t.map(({ animation: t, options: r }) =>
                        (function (e, t, r = {}) {
                          let n;
                          if ((e.notify("AnimationStart", t), Array.isArray(t)))
                            n = Promise.all(t.map((t) => tA(e, t, r)));
                          else if ("string" == typeof t) n = tA(e, t, r);
                          else {
                            let i =
                              "function" == typeof t ? eW(e, t, r.custom) : t;
                            n = Promise.all(tT(e, i, r));
                          }
                          return n.then(() => {
                            em.Wi.postRender(() => {
                              e.notify("AnimationComplete", t);
                            });
                          });
                        })(e, t, r)
                      )
                    ),
                  r = {
                    animate: tk(!0),
                    whileInView: tk(),
                    whileHover: tk(),
                    whileTap: tk(),
                    whileDrag: tk(),
                    whileFocus: tk(),
                    exit: tk(),
                  },
                  n = !0,
                  i = (t) => (r, n) => {
                    var i;
                    let o = eW(
                      e,
                      n,
                      "exit" === t
                        ? null === (i = e.presenceContext) || void 0 === i
                          ? void 0
                          : i.custom
                        : void 0
                    );
                    if (o) {
                      let { transition: e, transitionEnd: t, ...n } = o;
                      r = { ...r, ...n, ...t };
                    }
                    return r;
                  };
                function o(o) {
                  let s = e.getProps(),
                    a = e.getVariantContext(!0) || {},
                    l = [],
                    u = new Set(),
                    c = {},
                    d = 1 / 0;
                  for (let t = 0; t < tM; t++) {
                    var h;
                    let p = tR[t],
                      f = r[p],
                      m = void 0 !== s[p] ? s[p] : a[p],
                      g = y(m),
                      v = p === o ? f.isActive : null;
                    !1 === v && (d = t);
                    let x = m === a[p] && m !== s[p] && g;
                    if (
                      (x && n && e.manuallyAnimateOnMount && (x = !1),
                      (f.protectedKeys = { ...c }),
                      (!f.isActive && null === v) ||
                        (!m && !f.prevProp) ||
                        b(m) ||
                        "boolean" == typeof m)
                    )
                      continue;
                    let w =
                        ((h = f.prevProp),
                        ("string" == typeof m
                          ? m !== h
                          : !!Array.isArray(m) && !e$(m, h)) ||
                          (p === o && f.isActive && !x && g) ||
                          (t > d && g)),
                      P = !1,
                      S = Array.isArray(m) ? m : [m],
                      E = S.reduce(i(p), {});
                    !1 === v && (E = {});
                    let { prevResolvedValues: T = {} } = f,
                      A = { ...T, ...E },
                      C = (t) => {
                        (w = !0),
                          u.has(t) && ((P = !0), u.delete(t)),
                          (f.needsAnimating[t] = !0);
                        let r = e.getValue(t);
                        r && (r.liveStyle = !1);
                      };
                    for (let e in A) {
                      let t = E[e],
                        r = T[e];
                      if (!c.hasOwnProperty(e))
                        (ec(t) && ec(r) ? e$(t, r) : t === r)
                          ? void 0 !== t && u.has(e)
                            ? C(e)
                            : (f.protectedKeys[e] = !0)
                          : null != t
                          ? C(e)
                          : u.add(e);
                    }
                    (f.prevProp = m),
                      (f.prevResolvedValues = E),
                      f.isActive && (c = { ...c, ...E }),
                      n && e.blockInitialAnimation && (w = !1),
                      w &&
                        (!x || P) &&
                        l.push(
                          ...S.map((e) => ({
                            animation: e,
                            options: { type: p },
                          }))
                        );
                  }
                  if (u.size) {
                    let t = {};
                    u.forEach((r) => {
                      let n = e.getBaseTarget(r),
                        i = e.getValue(r);
                      i && (i.liveStyle = !0), (t[r] = null != n ? n : null);
                    }),
                      l.push({ animation: t });
                  }
                  let p = !!l.length;
                  return (
                    n &&
                      (!1 === s.initial || s.initial === s.animate) &&
                      !e.manuallyAnimateOnMount &&
                      (p = !1),
                    (n = !1),
                    p ? t(l) : Promise.resolve()
                  );
                }
                return {
                  animateChanges: o,
                  setActive: function (t, n) {
                    var i;
                    if (r[t].isActive === n) return Promise.resolve();
                    null === (i = e.variantChildren) ||
                      void 0 === i ||
                      i.forEach((e) => {
                        var r;
                        return null === (r = e.animationState) || void 0 === r
                          ? void 0
                          : r.setActive(t, n);
                      }),
                      (r[t].isActive = n);
                    let s = o(t);
                    for (let e in r) r[e].protectedKeys = {};
                    return s;
                  },
                  setAnimateFunction: function (r) {
                    t = r(e);
                  },
                  getState: () => r,
                };
              })(e));
        }
        updateAnimationControlsSubscription() {
          let { animate: e } = this.node.getProps();
          this.unmount(), b(e) && (this.unmount = e.subscribe(this.node));
        }
        mount() {
          this.updateAnimationControlsSubscription();
        }
        update() {
          let { animate: e } = this.node.getProps(),
            { animate: t } = this.node.prevProps || {};
          e !== t && this.updateAnimationControlsSubscription();
        }
        unmount() {}
      }
      let tV = 0;
      class tO extends eM {
        constructor() {
          super(...arguments), (this.id = tV++);
        }
        update() {
          if (!this.node.presenceContext) return;
          let { isPresent: e, onExitComplete: t } = this.node.presenceContext,
            { isPresent: r } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || e === r) return;
          let n = this.node.animationState.setActive("exit", !e);
          t && !e && n.then(() => t(this.id));
        }
        mount() {
          let { register: e } = this.node.presenceContext || {};
          e && (this.unmount = e(this.id));
        }
        unmount() {}
      }
      let tD = (e, t) => Math.abs(e - t);
      class t_ {
        constructor(
          e,
          t,
          {
            transformPagePoint: r,
            contextWindow: n,
            dragSnapToOrigin: i = !1,
          } = {}
        ) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.contextWindow = window),
            (this.updatePoint = () => {
              var e, t;
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              let r = tN(this.lastMoveEventInfo, this.history),
                n = null !== this.startEvent,
                i =
                  ((e = r.offset),
                  (t = { x: 0, y: 0 }),
                  Math.sqrt(tD(e.x, t.x) ** 2 + tD(e.y, t.y) ** 2) >= 3);
              if (!n && !i) return;
              let { point: o } = r,
                { timestamp: s } = em.frameData;
              this.history.push({ ...o, timestamp: s });
              let { onStart: a, onMove: l } = this.handlers;
              n ||
                (a && a(this.lastMoveEvent, r),
                (this.startEvent = this.lastMoveEvent)),
                l && l(this.lastMoveEvent, r);
            }),
            (this.handlePointerMove = (e, t) => {
              (this.lastMoveEvent = e),
                (this.lastMoveEventInfo = tL(t, this.transformPagePoint)),
                em.Wi.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (e, t) => {
              this.end();
              let {
                onEnd: r,
                onSessionEnd: n,
                resumeAnimation: i,
              } = this.handlers;
              if (
                (this.dragSnapToOrigin && i && i(),
                !(this.lastMoveEvent && this.lastMoveEventInfo))
              )
                return;
              let o = tN(
                "pointercancel" === e.type
                  ? this.lastMoveEventInfo
                  : tL(t, this.transformPagePoint),
                this.history
              );
              this.startEvent && r && r(e, o), n && n(e, o);
            }),
            !eb(e))
          )
            return;
          (this.dragSnapToOrigin = i),
            (this.handlers = t),
            (this.transformPagePoint = r),
            (this.contextWindow = n || window);
          let o = tL(ex(e), this.transformPagePoint),
            { point: s } = o,
            { timestamp: a } = em.frameData;
          this.history = [{ ...s, timestamp: a }];
          let { onSessionStart: l } = t;
          l && l(e, tN(o, this.history)),
            (this.removeListeners = (0, eS.z)(
              eP(this.contextWindow, "pointermove", this.handlePointerMove),
              eP(this.contextWindow, "pointerup", this.handlePointerUp),
              eP(this.contextWindow, "pointercancel", this.handlePointerUp)
            ));
        }
        updateHandlers(e) {
          this.handlers = e;
        }
        end() {
          this.removeListeners && this.removeListeners(),
            (0, em.Pn)(this.updatePoint);
        }
      }
      function tL(e, t) {
        return t ? { point: t(e.point) } : e;
      }
      function tI(e, t) {
        return { x: e.x - t.x, y: e.y - t.y };
      }
      function tN({ point: e }, t) {
        return {
          point: e,
          delta: tI(e, tF(t)),
          offset: tI(e, t[0]),
          velocity: (function (e, t) {
            if (e.length < 2) return { x: 0, y: 0 };
            let r = e.length - 1,
              n = null,
              i = tF(e);
            for (
              ;
              r >= 0 &&
              ((n = e[r]), !(i.timestamp - n.timestamp > (0, eX.w)(0.1)));

            )
              r--;
            if (!n) return { x: 0, y: 0 };
            let o = (0, eX.X)(i.timestamp - n.timestamp);
            if (0 === o) return { x: 0, y: 0 };
            let s = { x: (i.x - n.x) / o, y: (i.y - n.y) / o };
            return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
          })(t, 0),
        };
      }
      function tF(e) {
        return e[e.length - 1];
      }
      var tB = r(3217),
        tz = r(5004);
      function tU(e) {
        return e.max - e.min;
      }
      function t$(e, t = 0, r = 0.01) {
        return Math.abs(e - t) <= r;
      }
      function tW(e, t, r, n = 0.5) {
        (e.origin = n),
          (e.originPoint = (0, tz.t)(t.min, t.max, e.origin)),
          (e.scale = tU(r) / tU(t)),
          (t$(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
          (e.translate = (0, tz.t)(r.min, r.max, e.origin) - e.originPoint),
          (t$(e.translate) || isNaN(e.translate)) && (e.translate = 0);
      }
      function tX(e, t, r, n) {
        tW(e.x, t.x, r.x, n ? n.originX : void 0),
          tW(e.y, t.y, r.y, n ? n.originY : void 0);
      }
      function tH(e, t, r) {
        (e.min = r.min + t.min), (e.max = e.min + tU(t));
      }
      function tG(e, t, r) {
        (e.min = t.min - r.min), (e.max = e.min + tU(t));
      }
      function tK(e, t, r) {
        tG(e.x, t.x, r.x), tG(e.y, t.y, r.y);
      }
      var tY = r(1506);
      function tZ(e, t, r) {
        return {
          min: void 0 !== t ? e.min + t : void 0,
          max: void 0 !== r ? e.max + r - (e.max - e.min) : void 0,
        };
      }
      function tq(e, t) {
        let r = t.min - e.min,
          n = t.max - e.max;
        return (
          t.max - t.min < e.max - e.min && ([r, n] = [n, r]), { min: r, max: n }
        );
      }
      function tQ(e, t, r) {
        return { min: tJ(e, t), max: tJ(e, r) };
      }
      function tJ(e, t) {
        return "number" == typeof e ? e : e[t] || 0;
      }
      let t0 = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        t1 = () => ({ x: t0(), y: t0() }),
        t2 = () => ({ min: 0, max: 0 }),
        t3 = () => ({ x: t2(), y: t2() });
      function t5(e) {
        return [e("x"), e("y")];
      }
      function t9({ top: e, left: t, right: r, bottom: n }) {
        return { x: { min: t, max: r }, y: { min: e, max: n } };
      }
      function t4(e) {
        return void 0 === e || 1 === e;
      }
      function t6({ scale: e, scaleX: t, scaleY: r }) {
        return !t4(e) || !t4(t) || !t4(r);
      }
      function t8(e) {
        return (
          t6(e) ||
          t7(e) ||
          e.z ||
          e.rotate ||
          e.rotateX ||
          e.rotateY ||
          e.skewX ||
          e.skewY
        );
      }
      function t7(e) {
        var t, r;
        return ((t = e.x) && "0%" !== t) || ((r = e.y) && "0%" !== r);
      }
      function re(e, t, r, n, i) {
        return void 0 !== i && (e = n + i * (e - n)), n + r * (e - n) + t;
      }
      function rt(e, t = 0, r = 1, n, i) {
        (e.min = re(e.min, t, r, n, i)), (e.max = re(e.max, t, r, n, i));
      }
      function rr(e, { x: t, y: r }) {
        rt(e.x, t.translate, t.scale, t.originPoint),
          rt(e.y, r.translate, r.scale, r.originPoint);
      }
      function rn(e) {
        return Number.isInteger(e)
          ? e
          : e > 1.0000000000001 || e < 0.999999999999
          ? e
          : 1;
      }
      function ri(e, t) {
        (e.min = e.min + t), (e.max = e.max + t);
      }
      function ro(e, t, [r, n, i]) {
        let o = void 0 !== t[i] ? t[i] : 0.5,
          s = (0, tz.t)(e.min, e.max, o);
        rt(e, t[r], t[n], s, t.scale);
      }
      let rs = ["x", "scaleX", "originX"],
        ra = ["y", "scaleY", "originY"];
      function rl(e, t) {
        ro(e.x, t, rs), ro(e.y, t, ra);
      }
      function ru(e, t) {
        return t9(
          (function (e, t) {
            if (!t) return e;
            let r = t({ x: e.left, y: e.top }),
              n = t({ x: e.right, y: e.bottom });
            return { top: r.y, left: r.x, bottom: n.y, right: n.x };
          })(e.getBoundingClientRect(), t)
        );
      }
      let rc = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
        rd = new WeakMap();
      class rh {
        constructor(e) {
          (this.openGlobalLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = t3()),
            (this.visualElement = e);
        }
        start(e, { snapToCursor: t = !1 } = {}) {
          let { presenceContext: r } = this.visualElement;
          if (r && !1 === r.isPresent) return;
          let { dragSnapToOrigin: n } = this.getProps();
          this.panSession = new t_(
            e,
            {
              onSessionStart: (e) => {
                let { dragSnapToOrigin: r } = this.getProps();
                r ? this.pauseAnimation() : this.stopAnimation(),
                  t && this.snapToCursor(ex(e, "page").point);
              },
              onStart: (e, t) => {
                let {
                  drag: r,
                  dragPropagation: n,
                  onDragStart: i,
                } = this.getProps();
                if (
                  r &&
                  !n &&
                  (this.openGlobalLock && this.openGlobalLock(),
                  (this.openGlobalLock = eC(r)),
                  !this.openGlobalLock)
                )
                  return;
                (this.isDragging = !0),
                  (this.currentDirection = null),
                  this.resolveConstraints(),
                  this.visualElement.projection &&
                    ((this.visualElement.projection.isAnimationBlocked = !0),
                    (this.visualElement.projection.target = void 0)),
                  t5((e) => {
                    let t = this.getAxisMotionValue(e).get() || 0;
                    if (U.aQ.test(t)) {
                      let { projection: r } = this.visualElement;
                      if (r && r.layout) {
                        let n = r.layout.layoutBox[e];
                        if (n) {
                          let e = tU(n);
                          t = (parseFloat(t) / 100) * e;
                        }
                      }
                    }
                    this.originPoint[e] = t;
                  }),
                  i && i(e, t);
                let { animationState: o } = this.visualElement;
                o && o.setActive("whileDrag", !0);
              },
              onMove: (e, t) => {
                let {
                  dragPropagation: r,
                  dragDirectionLock: n,
                  onDirectionLock: i,
                  onDrag: o,
                } = this.getProps();
                if (!r && !this.openGlobalLock) return;
                let { offset: s } = t;
                if (n && null === this.currentDirection) {
                  (this.currentDirection = (function (e, t = 10) {
                    let r = null;
                    return (
                      Math.abs(e.y) > t
                        ? (r = "y")
                        : Math.abs(e.x) > t && (r = "x"),
                      r
                    );
                  })(s)),
                    null !== this.currentDirection &&
                      i &&
                      i(this.currentDirection);
                  return;
                }
                this.updateAxis("x", t.point, s),
                  this.updateAxis("y", t.point, s),
                  this.visualElement.render(),
                  o && o(e, t);
              },
              onSessionEnd: (e, t) => this.stop(e, t),
              resumeAnimation: () =>
                t5((e) => {
                  var t;
                  return (
                    "paused" === this.getAnimationState(e) &&
                    (null === (t = this.getAxisMotionValue(e).animation) ||
                    void 0 === t
                      ? void 0
                      : t.play())
                  );
                }),
            },
            {
              transformPagePoint: this.visualElement.getTransformPagePoint(),
              dragSnapToOrigin: n,
              contextWindow: rc(this.visualElement),
            }
          );
        }
        stop(e, t) {
          let r = this.isDragging;
          if ((this.cancel(), !r)) return;
          let { velocity: n } = t;
          this.startAnimation(n);
          let { onDragEnd: i } = this.getProps();
          i && i(e, t);
        }
        cancel() {
          this.isDragging = !1;
          let { projection: e, animationState: t } = this.visualElement;
          e && (e.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            (this.panSession = void 0);
          let { dragPropagation: r } = this.getProps();
          !r &&
            this.openGlobalLock &&
            (this.openGlobalLock(), (this.openGlobalLock = null)),
            t && t.setActive("whileDrag", !1);
        }
        updateAxis(e, t, r) {
          let { drag: n } = this.getProps();
          if (!r || !rp(e, n, this.currentDirection)) return;
          let i = this.getAxisMotionValue(e),
            o = this.originPoint[e] + r[e];
          this.constraints &&
            this.constraints[e] &&
            (o = (function (e, { min: t, max: r }, n) {
              return (
                void 0 !== t && e < t
                  ? (e = n ? (0, tz.t)(t, e, n.min) : Math.max(e, t))
                  : void 0 !== r &&
                    e > r &&
                    (e = n ? (0, tz.t)(r, e, n.max) : Math.min(e, r)),
                e
              );
            })(o, this.constraints[e], this.elastic[e])),
            i.set(o);
        }
        resolveConstraints() {
          var e;
          let { dragConstraints: t, dragElastic: r } = this.getProps(),
            n =
              this.visualElement.projection &&
              !this.visualElement.projection.layout
                ? this.visualElement.projection.measure(!1)
                : null === (e = this.visualElement.projection) || void 0 === e
                ? void 0
                : e.layout,
            i = this.constraints;
          t && v(t)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : t && n
            ? (this.constraints = (function (
                e,
                { top: t, left: r, bottom: n, right: i }
              ) {
                return { x: tZ(e.x, r, i), y: tZ(e.y, t, n) };
              })(n.layoutBox, t))
            : (this.constraints = !1),
            (this.elastic = (function (e = 0.35) {
              return (
                !1 === e ? (e = 0) : !0 === e && (e = 0.35),
                { x: tQ(e, "left", "right"), y: tQ(e, "top", "bottom") }
              );
            })(r)),
            i !== this.constraints &&
              n &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              t5((e) => {
                !1 !== this.constraints &&
                  this.getAxisMotionValue(e) &&
                  (this.constraints[e] = (function (e, t) {
                    let r = {};
                    return (
                      void 0 !== t.min && (r.min = t.min - e.min),
                      void 0 !== t.max && (r.max = t.max - e.min),
                      r
                    );
                  })(n.layoutBox[e], this.constraints[e]));
              });
        }
        resolveRefConstraints() {
          var e;
          let { dragConstraints: t, onMeasureDragConstraints: r } =
            this.getProps();
          if (!t || !v(t)) return !1;
          let n = t.current;
          (0, e3.k)(
            null !== n,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
          );
          let { projection: i } = this.visualElement;
          if (!i || !i.layout) return !1;
          let o = (function (e, t, r) {
              let n = ru(e, r),
                { scroll: i } = t;
              return i && (ri(n.x, i.offset.x), ri(n.y, i.offset.y)), n;
            })(n, i.root, this.visualElement.getTransformPagePoint()),
            s = { x: tq((e = i.layout.layoutBox).x, o.x), y: tq(e.y, o.y) };
          if (r) {
            let e = r(
              (function ({ x: e, y: t }) {
                return { top: t.min, right: e.max, bottom: t.max, left: e.min };
              })(s)
            );
            (this.hasMutatedConstraints = !!e), e && (s = t9(e));
          }
          return s;
        }
        startAnimation(e) {
          let {
              drag: t,
              dragMomentum: r,
              dragElastic: n,
              dragTransition: i,
              dragSnapToOrigin: o,
              onDragTransitionEnd: s,
            } = this.getProps(),
            a = this.constraints || {};
          return Promise.all(
            t5((s) => {
              if (!rp(s, t, this.currentDirection)) return;
              let l = (a && a[s]) || {};
              o && (l = { min: 0, max: 0 });
              let u = {
                type: "inertia",
                velocity: r ? e[s] : 0,
                bounceStiffness: n ? 200 : 1e6,
                bounceDamping: n ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...i,
                ...l,
              };
              return this.startAxisValueAnimation(s, u);
            })
          ).then(s);
        }
        startAxisValueAnimation(e, t) {
          let r = this.getAxisMotionValue(e);
          return r.start(tP(e, r, 0, t, this.visualElement));
        }
        stopAnimation() {
          t5((e) => this.getAxisMotionValue(e).stop());
        }
        pauseAnimation() {
          t5((e) => {
            var t;
            return null === (t = this.getAxisMotionValue(e).animation) ||
              void 0 === t
              ? void 0
              : t.pause();
          });
        }
        getAnimationState(e) {
          var t;
          return null === (t = this.getAxisMotionValue(e).animation) ||
            void 0 === t
            ? void 0
            : t.state;
        }
        getAxisMotionValue(e) {
          let t = `_drag${e.toUpperCase()}`,
            r = this.visualElement.getProps();
          return (
            r[t] ||
            this.visualElement.getValue(
              e,
              (r.initial ? r.initial[e] : void 0) || 0
            )
          );
        }
        snapToCursor(e) {
          t5((t) => {
            let { drag: r } = this.getProps();
            if (!rp(t, r, this.currentDirection)) return;
            let { projection: n } = this.visualElement,
              i = this.getAxisMotionValue(t);
            if (n && n.layout) {
              let { min: r, max: o } = n.layout.layoutBox[t];
              i.set(e[t] - (0, tz.t)(r, o, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: e, dragConstraints: t } = this.getProps(),
            { projection: r } = this.visualElement;
          if (!v(t) || !r || !this.constraints) return;
          this.stopAnimation();
          let n = { x: 0, y: 0 };
          t5((e) => {
            let t = this.getAxisMotionValue(e);
            if (t && !1 !== this.constraints) {
              let r = t.get();
              n[e] = (function (e, t) {
                let r = 0.5,
                  n = tU(e),
                  i = tU(t);
                return (
                  i > n
                    ? (r = (0, tB.Y)(t.min, t.max - n, e.min))
                    : n > i && (r = (0, tB.Y)(e.min, e.max - i, t.min)),
                  (0, tY.u)(0, 1, r)
                );
              })({ min: r, max: r }, this.constraints[e]);
            }
          });
          let { transformTemplate: i } = this.visualElement.getProps();
          (this.visualElement.current.style.transform = i ? i({}, "") : "none"),
            r.root && r.root.updateScroll(),
            r.updateLayout(),
            this.resolveConstraints(),
            t5((t) => {
              if (!rp(t, e, null)) return;
              let r = this.getAxisMotionValue(t),
                { min: i, max: o } = this.constraints[t];
              r.set((0, tz.t)(i, o, n[t]));
            });
        }
        addListeners() {
          if (!this.visualElement.current) return;
          rd.set(this.visualElement, this);
          let e = eP(this.visualElement.current, "pointerdown", (e) => {
              let { drag: t, dragListener: r = !0 } = this.getProps();
              t && r && this.start(e);
            }),
            t = () => {
              let { dragConstraints: e } = this.getProps();
              v(e) && (this.constraints = this.resolveRefConstraints());
            },
            { projection: r } = this.visualElement,
            n = r.addEventListener("measure", t);
          r && !r.layout && (r.root && r.root.updateScroll(), r.updateLayout()),
            t();
          let i = ey(window, "resize", () =>
              this.scalePositionWithinConstraints()
            ),
            o = r.addEventListener(
              "didUpdate",
              ({ delta: e, hasLayoutChanged: t }) => {
                this.isDragging &&
                  t &&
                  (t5((t) => {
                    let r = this.getAxisMotionValue(t);
                    r &&
                      ((this.originPoint[t] += e[t].translate),
                      r.set(r.get() + e[t].translate));
                  }),
                  this.visualElement.render());
              }
            );
          return () => {
            i(), e(), n(), o && o();
          };
        }
        getProps() {
          let e = this.visualElement.getProps(),
            {
              drag: t = !1,
              dragDirectionLock: r = !1,
              dragPropagation: n = !1,
              dragConstraints: i = !1,
              dragElastic: o = 0.35,
              dragMomentum: s = !0,
            } = e;
          return {
            ...e,
            drag: t,
            dragDirectionLock: r,
            dragPropagation: n,
            dragConstraints: i,
            dragElastic: o,
            dragMomentum: s,
          };
        }
      }
      function rp(e, t, r) {
        return (!0 === t || t === e) && (null === r || r === e);
      }
      class rf extends eM {
        constructor(e) {
          super(e),
            (this.removeGroupControls = eD.Z),
            (this.removeListeners = eD.Z),
            (this.controls = new rh(e));
        }
        mount() {
          let { dragControls: e } = this.node.getProps();
          e && (this.removeGroupControls = e.subscribe(this.controls)),
            (this.removeListeners = this.controls.addListeners() || eD.Z);
        }
        unmount() {
          this.removeGroupControls(), this.removeListeners();
        }
      }
      let rm = (e) => (t, r) => {
        e && e(t, r);
      };
      class rg extends eM {
        constructor() {
          super(...arguments), (this.removePointerDownListener = eD.Z);
        }
        onPointerDown(e) {
          this.session = new t_(e, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: rc(this.node),
          });
        }
        createPanHandlers() {
          let {
            onPanSessionStart: e,
            onPanStart: t,
            onPan: r,
            onPanEnd: n,
          } = this.node.getProps();
          return {
            onSessionStart: rm(e),
            onStart: rm(t),
            onMove: r,
            onEnd: (e, t) => {
              delete this.session, n && n(e, t);
            },
          };
        }
        mount() {
          this.removePointerDownListener = eP(
            this.node.current,
            "pointerdown",
            (e) => this.onPointerDown(e)
          );
        }
        update() {
          this.session && this.session.updateHandlers(this.createPanHandlers());
        }
        unmount() {
          this.removePointerDownListener(), this.session && this.session.end();
        }
      }
      let rv = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function ry(e, t) {
        return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
      }
      let rb = {
        correct: (e, t) => {
          if (!t.target) return e;
          if ("string" == typeof e) {
            if (!U.px.test(e)) return e;
            e = parseFloat(e);
          }
          let r = ry(e, t.target.x),
            n = ry(e, t.target.y);
          return `${r}% ${n}%`;
        },
      };
      class rx extends a.Component {
        componentDidMount() {
          let {
              visualElement: e,
              layoutGroup: t,
              switchLayoutGroup: r,
              layoutId: n,
            } = this.props,
            { projection: i } = e;
          Object.assign(O, rP),
            i &&
              (t.group && t.group.add(i),
              r && r.register && n && r.register(i),
              i.root.didUpdate(),
              i.addEventListener("animationComplete", () => {
                this.safeToRemove();
              }),
              i.setOptions({
                ...i.options,
                onExitComplete: () => this.safeToRemove(),
              })),
            (rv.hasEverUpdated = !0);
        }
        getSnapshotBeforeUpdate(e) {
          let {
              layoutDependency: t,
              visualElement: r,
              drag: n,
              isPresent: i,
            } = this.props,
            o = r.projection;
          return (
            o &&
              ((o.isPresent = i),
              n || e.layoutDependency !== t || void 0 === t
                ? o.willUpdate()
                : this.safeToRemove(),
              e.isPresent === i ||
                (i
                  ? o.promote()
                  : o.relegate() ||
                    em.Wi.postRender(() => {
                      let e = o.getStack();
                      (e && e.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { projection: e } = this.props.visualElement;
          e &&
            (e.root.didUpdate(),
            m.postRender(() => {
              !e.currentAnimation && e.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let {
              visualElement: e,
              layoutGroup: t,
              switchLayoutGroup: r,
            } = this.props,
            { projection: n } = e;
          n &&
            (n.scheduleCheckAfterUnmount(),
            t && t.group && t.group.remove(n),
            r && r.deregister && r.deregister(n));
        }
        safeToRemove() {
          let { safeToRemove: e } = this.props;
          e && e();
        }
        render() {
          return null;
        }
      }
      function rw(e) {
        let [t, r] = (function () {
            let e = (0, a.useContext)(c);
            if (null === e) return [!0, null];
            let { isPresent: t, onExitComplete: r, register: n } = e,
              i = (0, a.useId)();
            return (
              (0, a.useEffect)(() => n(i), []),
              !t && r ? [!1, () => r && r(i)] : [!0]
            );
          })(),
          n = (0, a.useContext)(R);
        return (0, s.jsx)(rx, {
          ...e,
          layoutGroup: n,
          switchLayoutGroup: (0, a.useContext)(M),
          isPresent: t,
          safeToRemove: r,
        });
      }
      let rP = {
        borderRadius: {
          ...rb,
          applyTo: [
            "borderTopLeftRadius",
            "borderTopRightRadius",
            "borderBottomLeftRadius",
            "borderBottomRightRadius",
          ],
        },
        borderTopLeftRadius: rb,
        borderTopRightRadius: rb,
        borderBottomLeftRadius: rb,
        borderBottomRightRadius: rb,
        boxShadow: {
          correct: (e, { treeScale: t, projectionDelta: r }) => {
            let n = tt.P.parse(e);
            if (n.length > 5) return e;
            let i = tt.P.createTransformer(e),
              o = "number" != typeof n[0] ? 1 : 0,
              s = r.x.scale * t.x,
              a = r.y.scale * t.y;
            (n[0 + o] /= s), (n[1 + o] /= a);
            let l = (0, tz.t)(s, a, 0.5);
            return (
              "number" == typeof n[2 + o] && (n[2 + o] /= l),
              "number" == typeof n[3 + o] && (n[3 + o] /= l),
              i(n)
            );
          },
        },
      };
      var rS = r(2428),
        rE = r(8536);
      let rT = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        rA = rT.length,
        rC = (e) => ("string" == typeof e ? parseFloat(e) : e),
        rR = (e) => "number" == typeof e || U.px.test(e);
      function rM(e, t) {
        return void 0 !== e[t] ? e[t] : e.borderRadius;
      }
      let rk = rV(0, 0.5, rE.Bn),
        rj = rV(0.5, 0.95, eD.Z);
      function rV(e, t, r) {
        return (n) => (n < e ? 0 : n > t ? 1 : r((0, tB.Y)(e, t, n)));
      }
      function rO(e, t) {
        (e.min = t.min), (e.max = t.max);
      }
      function rD(e, t) {
        rO(e.x, t.x), rO(e.y, t.y);
      }
      function r_(e, t, r, n, i) {
        return (
          (e -= t),
          (e = n + (1 / r) * (e - n)),
          void 0 !== i && (e = n + (1 / i) * (e - n)),
          e
        );
      }
      function rL(e, t, [r, n, i], o, s) {
        !(function (e, t = 0, r = 1, n = 0.5, i, o = e, s = e) {
          if (
            (U.aQ.test(t) &&
              ((t = parseFloat(t)),
              (t = (0, tz.t)(s.min, s.max, t / 100) - s.min)),
            "number" != typeof t)
          )
            return;
          let a = (0, tz.t)(o.min, o.max, n);
          e === o && (a -= t),
            (e.min = r_(e.min, t, r, a, i)),
            (e.max = r_(e.max, t, r, a, i));
        })(e, t[r], t[n], t[i], t.scale, o, s);
      }
      let rI = ["x", "scaleX", "originX"],
        rN = ["y", "scaleY", "originY"];
      function rF(e, t, r, n) {
        rL(e.x, t, rI, r ? r.x : void 0, n ? n.x : void 0),
          rL(e.y, t, rN, r ? r.y : void 0, n ? n.y : void 0);
      }
      function rB(e) {
        return 0 === e.translate && 1 === e.scale;
      }
      function rz(e) {
        return rB(e.x) && rB(e.y);
      }
      function rU(e, t) {
        return (
          Math.round(e.x.min) === Math.round(t.x.min) &&
          Math.round(e.x.max) === Math.round(t.x.max) &&
          Math.round(e.y.min) === Math.round(t.y.min) &&
          Math.round(e.y.max) === Math.round(t.y.max)
        );
      }
      function r$(e) {
        return tU(e.x) / tU(e.y);
      }
      var rW = r(8746);
      class rX {
        constructor() {
          this.members = [];
        }
        add(e) {
          (0, rW.y4)(this.members, e), e.scheduleRender();
        }
        remove(e) {
          if (
            ((0, rW.cl)(this.members, e),
            e === this.prevLead && (this.prevLead = void 0),
            e === this.lead)
          ) {
            let e = this.members[this.members.length - 1];
            e && this.promote(e);
          }
        }
        relegate(e) {
          let t;
          let r = this.members.findIndex((t) => e === t);
          if (0 === r) return !1;
          for (let e = r; e >= 0; e--) {
            let r = this.members[e];
            if (!1 !== r.isPresent) {
              t = r;
              break;
            }
          }
          return !!t && (this.promote(t), !0);
        }
        promote(e, t) {
          let r = this.lead;
          if (e !== r && ((this.prevLead = r), (this.lead = e), e.show(), r)) {
            r.instance && r.scheduleRender(),
              e.scheduleRender(),
              (e.resumeFrom = r),
              t && (e.resumeFrom.preserveOpacity = !0),
              r.snapshot &&
                ((e.snapshot = r.snapshot),
                (e.snapshot.latestValues =
                  r.animationValues || r.latestValues)),
              e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
            let { crossfade: n } = e.options;
            !1 === n && r.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((e) => {
            let { options: t, resumingFrom: r } = e;
            t.onExitComplete && t.onExitComplete(),
              r && r.options.onExitComplete && r.options.onExitComplete();
          });
        }
        scheduleRender() {
          this.members.forEach((e) => {
            e.instance && e.scheduleRender(!1);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
      }
      function rH(e, t, r) {
        let n = "",
          i = e.x.translate / t.x,
          o = e.y.translate / t.y,
          s = (null == r ? void 0 : r.z) || 0;
        if (
          ((i || o || s) && (n = `translate3d(${i}px, ${o}px, ${s}px) `),
          (1 !== t.x || 1 !== t.y) && (n += `scale(${1 / t.x}, ${1 / t.y}) `),
          r)
        ) {
          let {
            transformPerspective: e,
            rotate: t,
            rotateX: i,
            rotateY: o,
            skewX: s,
            skewY: a,
          } = r;
          e && (n = `perspective(${e}px) ${n}`),
            t && (n += `rotate(${t}deg) `),
            i && (n += `rotateX(${i}deg) `),
            o && (n += `rotateY(${o}deg) `),
            s && (n += `skewX(${s}deg) `),
            a && (n += `skewY(${a}deg) `);
        }
        let a = e.x.scale * t.x,
          l = e.y.scale * t.y;
        return (1 !== a || 1 !== l) && (n += `scale(${a}, ${l})`), n || "none";
      }
      let rG = (e, t) => e.depth - t.depth;
      class rK {
        constructor() {
          (this.children = []), (this.isDirty = !1);
        }
        add(e) {
          (0, rW.y4)(this.children, e), (this.isDirty = !0);
        }
        remove(e) {
          (0, rW.cl)(this.children, e), (this.isDirty = !0);
        }
        forEach(e) {
          this.isDirty && this.children.sort(rG),
            (this.isDirty = !1),
            this.children.forEach(e);
        }
      }
      let rY = ["", "X", "Y", "Z"],
        rZ = { visibility: "hidden" },
        rq = 0,
        rQ = {
          type: "projectionFrame",
          totalNodes: 0,
          resolvedTargetDeltas: 0,
          recalculatedProjection: 0,
        };
      function rJ(e, t, r, n) {
        let { latestValues: i } = t;
        i[e] && ((r[e] = i[e]), t.setStaticValue(e, 0), n && (n[e] = 0));
      }
      function r0({
        attachResizeListener: e,
        defaultParent: t,
        measureScroll: r,
        checkIsScrollRoot: n,
        resetTransform: i,
      }) {
        return class {
          constructor(e = {}, r = null == t ? void 0 : t()) {
            (this.id = rq++),
              (this.animationId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isProjectionDirty = !1),
              (this.isSharedProjectionDirty = !1),
              (this.isTransformDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.hasTreeAnimated = !1),
              (this.updateScheduled = !1),
              (this.projectionUpdateScheduled = !1),
              (this.checkUpdateFailed = () => {
                this.isUpdating &&
                  ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                (this.projectionUpdateScheduled = !1),
                  (rQ.totalNodes =
                    rQ.resolvedTargetDeltas =
                    rQ.recalculatedProjection =
                      0),
                  this.nodes.forEach(r3),
                  this.nodes.forEach(ne),
                  this.nodes.forEach(nt),
                  this.nodes.forEach(r5),
                  window.MotionDebug && window.MotionDebug.record(rQ);
              }),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = e),
              (this.root = r ? r.root || r : this),
              (this.path = r ? [...r.path, r] : []),
              (this.parent = r),
              (this.depth = r ? r.depth + 1 : 0);
            for (let e = 0; e < this.path.length; e++)
              this.path[e].shouldResetTransform = !0;
            this.root === this && (this.nodes = new rK());
          }
          addEventListener(e, t) {
            return (
              this.eventHandlers.has(e) ||
                this.eventHandlers.set(e, new rS.L()),
              this.eventHandlers.get(e).add(t)
            );
          }
          notifyListeners(e, ...t) {
            let r = this.eventHandlers.get(e);
            r && r.notify(...t);
          }
          hasListeners(e) {
            return this.eventHandlers.has(e);
          }
          mount(t, r = this.root.hasTreeAnimated) {
            if (this.instance) return;
            (this.isSVG = t instanceof SVGElement && "svg" !== t.tagName),
              (this.instance = t);
            let { layoutId: n, layout: i, visualElement: o } = this.options;
            if (
              (o && !o.current && o.mount(t),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              r && (i || n) && (this.isLayoutDirty = !0),
              e)
            ) {
              let r;
              let n = () => (this.root.updateBlockedByResize = !1);
              e(t, () => {
                (this.root.updateBlockedByResize = !0),
                  r && r(),
                  (r = (function (e, t) {
                    let r = e1.X.now(),
                      n = ({ timestamp: t }) => {
                        let i = t - r;
                        i >= 250 && ((0, em.Pn)(n), e(i - 250));
                      };
                    return em.Wi.read(n, !0), () => (0, em.Pn)(n);
                  })(n, 0)),
                  rv.hasAnimatedSinceResize &&
                    ((rv.hasAnimatedSinceResize = !1), this.nodes.forEach(r7));
              });
            }
            n && this.root.registerSharedNode(n, this),
              !1 !== this.options.animate &&
                o &&
                (n || i) &&
                this.addEventListener(
                  "didUpdate",
                  ({
                    delta: e,
                    hasLayoutChanged: t,
                    hasRelativeTargetChanged: r,
                    layout: n,
                  }) => {
                    if (this.isTreeAnimationBlocked()) {
                      (this.target = void 0), (this.relativeTarget = void 0);
                      return;
                    }
                    let i =
                        this.options.transition ||
                        o.getDefaultTransition() ||
                        na,
                      {
                        onLayoutAnimationStart: s,
                        onLayoutAnimationComplete: a,
                      } = o.getProps(),
                      l = !this.targetLayout || !rU(this.targetLayout, n) || r,
                      u = !t && r;
                    if (
                      this.options.layoutRoot ||
                      (this.resumeFrom && this.resumeFrom.instance) ||
                      u ||
                      (t && (l || !this.currentAnimation))
                    ) {
                      this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0)),
                        this.setAnimationOrigin(e, u);
                      let t = { ...eq(i, "layout"), onPlay: s, onComplete: a };
                      (o.shouldReduceMotion || this.options.layoutRoot) &&
                        ((t.delay = 0), (t.type = !1)),
                        this.startAnimation(t);
                    } else
                      t || r7(this),
                        this.isLead() &&
                          this.options.onExitComplete &&
                          this.options.onExitComplete();
                    this.targetLayout = n;
                  }
                );
          }
          unmount() {
            this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this);
            let e = this.getStack();
            e && e.remove(this),
              this.parent && this.parent.children.delete(this),
              (this.instance = void 0),
              (0, em.Pn)(this.updateProjection);
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0;
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1;
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }
          isTreeAnimationBlocked() {
            return (
              this.isAnimationBlocked ||
              (this.parent && this.parent.isTreeAnimationBlocked()) ||
              !1
            );
          }
          startUpdate() {
            !this.isUpdateBlocked() &&
              ((this.isUpdating = !0),
              this.nodes && this.nodes.forEach(nr),
              this.animationId++);
          }
          getTransformTemplate() {
            let { visualElement: e } = this.options;
            return e && e.getProps().transformTemplate;
          }
          willUpdate(e = !0) {
            if (
              ((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())
            ) {
              this.options.onExitComplete && this.options.onExitComplete();
              return;
            }
            if (
              (this.root.isUpdating || this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return;
            this.isLayoutDirty = !0;
            for (let e = 0; e < this.path.length; e++) {
              let t = this.path[e];
              (t.shouldResetTransform = !0),
                t.updateScroll("snapshot"),
                t.options.layoutRoot && t.willUpdate(!1);
            }
            let { layoutId: t, layout: r } = this.options;
            if (void 0 === t && !r) return;
            let n = this.getTransformTemplate();
            (this.prevTransformTemplateValue = n
              ? n(this.latestValues, "")
              : void 0),
              this.updateSnapshot(),
              e && this.notifyListeners("willUpdate");
          }
          update() {
            if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
              this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(r4);
              return;
            }
            this.isUpdating || this.nodes.forEach(r6),
              (this.isUpdating = !1),
              window.HandoffCancelAllAnimations &&
                window.HandoffCancelAllAnimations(),
              this.nodes.forEach(r8),
              this.nodes.forEach(r1),
              this.nodes.forEach(r2),
              this.clearAllSnapshots();
            let e = e1.X.now();
            (em.frameData.delta = (0, tY.u)(
              0,
              1e3 / 60,
              e - em.frameData.timestamp
            )),
              (em.frameData.timestamp = e),
              (em.frameData.isProcessing = !0),
              em.S6.update.process(em.frameData),
              em.S6.preRender.process(em.frameData),
              em.S6.render.process(em.frameData),
              (em.frameData.isProcessing = !1);
          }
          didUpdate() {
            this.updateScheduled ||
              ((this.updateScheduled = !0), m.read(() => this.update()));
          }
          clearAllSnapshots() {
            this.nodes.forEach(r9), this.sharedNodes.forEach(nn);
          }
          scheduleUpdateProjection() {
            this.projectionUpdateScheduled ||
              ((this.projectionUpdateScheduled = !0),
              em.Wi.preRender(this.updateProjection, !1, !0));
          }
          scheduleCheckAfterUnmount() {
            em.Wi.postRender(() => {
              this.isLayoutDirty
                ? this.root.didUpdate()
                : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure());
          }
          updateLayout() {
            if (
              !this.instance ||
              (this.updateScroll(),
              !(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty)
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let e = 0; e < this.path.length; e++)
                this.path[e].updateScroll();
            let e = this.layout;
            (this.layout = this.measure(!1)),
              (this.layoutCorrected = t3()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners("measure", this.layout.layoutBox);
            let { visualElement: t } = this.options;
            t &&
              t.notify(
                "LayoutMeasure",
                this.layout.layoutBox,
                e ? e.layoutBox : void 0
              );
          }
          updateScroll(e = "measure") {
            let t = !!(this.options.layoutScroll && this.instance);
            this.scroll &&
              this.scroll.animationId === this.root.animationId &&
              this.scroll.phase === e &&
              (t = !1),
              t &&
                (this.scroll = {
                  animationId: this.root.animationId,
                  phase: e,
                  isRoot: n(this.instance),
                  offset: r(this.instance),
                });
          }
          resetTransform() {
            if (!i) return;
            let e = this.isLayoutDirty || this.shouldResetTransform,
              t = this.projectionDelta && !rz(this.projectionDelta),
              r = this.getTransformTemplate(),
              n = r ? r(this.latestValues, "") : void 0,
              o = n !== this.prevTransformTemplateValue;
            e &&
              (t || t8(this.latestValues) || o) &&
              (i(this.instance, n),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure(e = !0) {
            var t;
            let r = this.measurePageBox(),
              n = this.removeElementScroll(r);
            return (
              e && (n = this.removeTransform(n)),
              nc((t = n).x),
              nc(t.y),
              {
                animationId: this.root.animationId,
                measuredBox: r,
                layoutBox: n,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            let { visualElement: e } = this.options;
            if (!e) return t3();
            let t = e.measureViewportBox(),
              { scroll: r } = this.root;
            return r && (ri(t.x, r.offset.x), ri(t.y, r.offset.y)), t;
          }
          removeElementScroll(e) {
            let t = t3();
            rD(t, e);
            for (let r = 0; r < this.path.length; r++) {
              let n = this.path[r],
                { scroll: i, options: o } = n;
              if (n !== this.root && i && o.layoutScroll) {
                if (i.isRoot) {
                  rD(t, e);
                  let { scroll: r } = this.root;
                  r && (ri(t.x, -r.offset.x), ri(t.y, -r.offset.y));
                }
                ri(t.x, i.offset.x), ri(t.y, i.offset.y);
              }
            }
            return t;
          }
          applyTransform(e, t = !1) {
            let r = t3();
            rD(r, e);
            for (let e = 0; e < this.path.length; e++) {
              let n = this.path[e];
              !t &&
                n.options.layoutScroll &&
                n.scroll &&
                n !== n.root &&
                rl(r, { x: -n.scroll.offset.x, y: -n.scroll.offset.y }),
                t8(n.latestValues) && rl(r, n.latestValues);
            }
            return t8(this.latestValues) && rl(r, this.latestValues), r;
          }
          removeTransform(e) {
            let t = t3();
            rD(t, e);
            for (let e = 0; e < this.path.length; e++) {
              let r = this.path[e];
              if (!r.instance || !t8(r.latestValues)) continue;
              t6(r.latestValues) && r.updateSnapshot();
              let n = t3();
              rD(n, r.measurePageBox()),
                rF(
                  t,
                  r.latestValues,
                  r.snapshot ? r.snapshot.layoutBox : void 0,
                  n
                );
            }
            return t8(this.latestValues) && rF(t, this.latestValues), t;
          }
          setTargetDelta(e) {
            (this.targetDelta = e),
              this.root.scheduleUpdateProjection(),
              (this.isProjectionDirty = !0);
          }
          setOptions(e) {
            this.options = {
              ...this.options,
              ...e,
              crossfade: void 0 === e.crossfade || e.crossfade,
            };
          }
          clearMeasurements() {
            (this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1);
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent &&
              this.relativeParent.resolvedRelativeTargetAt !==
                em.frameData.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta(e = !1) {
            var t, r, n, i;
            let o = this.getLead();
            this.isProjectionDirty ||
              (this.isProjectionDirty = o.isProjectionDirty),
              this.isTransformDirty ||
                (this.isTransformDirty = o.isTransformDirty),
              this.isSharedProjectionDirty ||
                (this.isSharedProjectionDirty = o.isSharedProjectionDirty);
            let s = !!this.resumingFrom || this !== o;
            if (
              !(
                e ||
                (s && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                (null === (t = this.parent) || void 0 === t
                  ? void 0
                  : t.isProjectionDirty) ||
                this.attemptToResolveRelativeTarget
              )
            )
              return;
            let { layout: a, layoutId: l } = this.options;
            if (this.layout && (a || l)) {
              if (
                ((this.resolvedRelativeTargetAt = em.frameData.timestamp),
                !this.targetDelta && !this.relativeTarget)
              ) {
                let e = this.getClosestProjectingParent();
                e && e.layout && 1 !== this.animationProgress
                  ? ((this.relativeParent = e),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = t3()),
                    (this.relativeTargetOrigin = t3()),
                    tK(
                      this.relativeTargetOrigin,
                      this.layout.layoutBox,
                      e.layout.layoutBox
                    ),
                    rD(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (this.relativeTarget || this.targetDelta) {
                if (
                  ((this.target ||
                    ((this.target = t3()), (this.targetWithTransforms = t3())),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.relativeParent &&
                    this.relativeParent.target)
                    ? (this.forceRelativeParentToResolveTarget(),
                      (r = this.target),
                      (n = this.relativeTarget),
                      (i = this.relativeParent.target),
                      tH(r.x, n.x, i.x),
                      tH(r.y, n.y, i.y))
                    : this.targetDelta
                    ? (this.resumingFrom
                        ? (this.target = this.applyTransform(
                            this.layout.layoutBox
                          ))
                        : rD(this.target, this.layout.layoutBox),
                      rr(this.target, this.targetDelta))
                    : rD(this.target, this.layout.layoutBox),
                  this.attemptToResolveRelativeTarget)
                ) {
                  this.attemptToResolveRelativeTarget = !1;
                  let e = this.getClosestProjectingParent();
                  e &&
                  !!e.resumingFrom == !!this.resumingFrom &&
                  !e.options.layoutScroll &&
                  e.target &&
                  1 !== this.animationProgress
                    ? ((this.relativeParent = e),
                      this.forceRelativeParentToResolveTarget(),
                      (this.relativeTarget = t3()),
                      (this.relativeTargetOrigin = t3()),
                      tK(this.relativeTargetOrigin, this.target, e.target),
                      rD(this.relativeTarget, this.relativeTargetOrigin))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
                rQ.resolvedTargetDeltas++;
              }
            }
          }
          getClosestProjectingParent() {
            return !this.parent ||
              t6(this.parent.latestValues) ||
              t7(this.parent.latestValues)
              ? void 0
              : this.parent.isProjecting()
              ? this.parent
              : this.parent.getClosestProjectingParent();
          }
          isProjecting() {
            return !!(
              (this.relativeTarget ||
                this.targetDelta ||
                this.options.layoutRoot) &&
              this.layout
            );
          }
          calcProjection() {
            var e;
            let t = this.getLead(),
              r = !!this.resumingFrom || this !== t,
              n = !0;
            if (
              ((this.isProjectionDirty ||
                (null === (e = this.parent) || void 0 === e
                  ? void 0
                  : e.isProjectionDirty)) &&
                (n = !1),
              r &&
                (this.isSharedProjectionDirty || this.isTransformDirty) &&
                (n = !1),
              this.resolvedRelativeTargetAt === em.frameData.timestamp &&
                (n = !1),
              n)
            )
              return;
            let { layout: i, layoutId: o } = this.options;
            if (
              ((this.isTreeAnimating = !!(
                (this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(i || o))
            )
              return;
            rD(this.layoutCorrected, this.layout.layoutBox);
            let s = this.treeScale.x,
              a = this.treeScale.y;
            !(function (e, t, r, n = !1) {
              let i, o;
              let s = r.length;
              if (s) {
                t.x = t.y = 1;
                for (let a = 0; a < s; a++) {
                  o = (i = r[a]).projectionDelta;
                  let s = i.instance;
                  (!s || !s.style || "contents" !== s.style.display) &&
                    (n &&
                      i.options.layoutScroll &&
                      i.scroll &&
                      i !== i.root &&
                      rl(e, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
                    o && ((t.x *= o.x.scale), (t.y *= o.y.scale), rr(e, o)),
                    n && t8(i.latestValues) && rl(e, i.latestValues));
                }
                (t.x = rn(t.x)), (t.y = rn(t.y));
              }
            })(this.layoutCorrected, this.treeScale, this.path, r),
              t.layout &&
                !t.target &&
                (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
                ((t.target = t.layout.layoutBox),
                (t.targetWithTransforms = t3()));
            let { target: l } = t;
            if (!l) {
              this.projectionTransform &&
                ((this.projectionDelta = t1()),
                (this.projectionTransform = "none"),
                this.scheduleRender());
              return;
            }
            this.projectionDelta ||
              ((this.projectionDelta = t1()),
              (this.projectionDeltaWithTransform = t1()));
            let u = this.projectionTransform;
            tX(
              this.projectionDelta,
              this.layoutCorrected,
              l,
              this.latestValues
            ),
              (this.projectionTransform = rH(
                this.projectionDelta,
                this.treeScale
              )),
              (this.projectionTransform !== u ||
                this.treeScale.x !== s ||
                this.treeScale.y !== a) &&
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", l)),
              rQ.recalculatedProjection++;
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(e = !0) {
            if (
              (this.options.scheduleRender && this.options.scheduleRender(), e)
            ) {
              let e = this.getStack();
              e && e.scheduleRender();
            }
            this.resumingFrom &&
              !this.resumingFrom.instance &&
              (this.resumingFrom = void 0);
          }
          setAnimationOrigin(e, t = !1) {
            let r;
            let n = this.snapshot,
              i = n ? n.latestValues : {},
              o = { ...this.latestValues },
              s = t1();
            (this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !t);
            let a = t3(),
              l =
                (n ? n.source : void 0) !==
                (this.layout ? this.layout.source : void 0),
              u = this.getStack(),
              c = !u || u.members.length <= 1,
              d = !!(
                l &&
                !c &&
                !0 === this.options.crossfade &&
                !this.path.some(ns)
              );
            (this.animationProgress = 0),
              (this.mixTargetDelta = (t) => {
                let n = t / 1e3;
                if (
                  (ni(s.x, e.x, n),
                  ni(s.y, e.y, n),
                  this.setTargetDelta(s),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout)
                ) {
                  var u, h, p, f;
                  tK(
                    a,
                    this.layout.layoutBox,
                    this.relativeParent.layout.layoutBox
                  ),
                    (p = this.relativeTarget),
                    (f = this.relativeTargetOrigin),
                    no(p.x, f.x, a.x, n),
                    no(p.y, f.y, a.y, n),
                    r &&
                      ((u = this.relativeTarget),
                      (h = r),
                      u.x.min === h.x.min &&
                        u.x.max === h.x.max &&
                        u.y.min === h.y.min &&
                        u.y.max === h.y.max) &&
                      (this.isProjectionDirty = !1),
                    r || (r = t3()),
                    rD(r, this.relativeTarget);
                }
                l &&
                  ((this.animationValues = o),
                  (function (e, t, r, n, i, o) {
                    i
                      ? ((e.opacity = (0, tz.t)(
                          0,
                          void 0 !== r.opacity ? r.opacity : 1,
                          rk(n)
                        )),
                        (e.opacityExit = (0, tz.t)(
                          void 0 !== t.opacity ? t.opacity : 1,
                          0,
                          rj(n)
                        )))
                      : o &&
                        (e.opacity = (0, tz.t)(
                          void 0 !== t.opacity ? t.opacity : 1,
                          void 0 !== r.opacity ? r.opacity : 1,
                          n
                        ));
                    for (let i = 0; i < rA; i++) {
                      let o = `border${rT[i]}Radius`,
                        s = rM(t, o),
                        a = rM(r, o);
                      (void 0 !== s || void 0 !== a) &&
                        (s || (s = 0),
                        a || (a = 0),
                        0 === s || 0 === a || rR(s) === rR(a)
                          ? ((e[o] = Math.max((0, tz.t)(rC(s), rC(a), n), 0)),
                            (U.aQ.test(a) || U.aQ.test(s)) && (e[o] += "%"))
                          : (e[o] = a));
                    }
                    (t.rotate || r.rotate) &&
                      (e.rotate = (0, tz.t)(t.rotate || 0, r.rotate || 0, n));
                  })(o, i, this.latestValues, n, d, c)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = n);
              }),
              this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
          }
          startAnimation(e) {
            this.notifyListeners("animationStart"),
              this.currentAnimation && this.currentAnimation.stop(),
              this.resumingFrom &&
                this.resumingFrom.currentAnimation &&
                this.resumingFrom.currentAnimation.stop(),
              this.pendingAnimation &&
                ((0, em.Pn)(this.pendingAnimation),
                (this.pendingAnimation = void 0)),
              (this.pendingAnimation = em.Wi.update(() => {
                (rv.hasAnimatedSinceResize = !0),
                  (this.currentAnimation = (function (e, t, r) {
                    let n = (0, L.i)(0) ? 0 : (0, tE.BX)(0);
                    return n.start(tP("", n, 1e3, r)), n.animation;
                  })(0, 0, {
                    ...e,
                    onUpdate: (t) => {
                      this.mixTargetDelta(t), e.onUpdate && e.onUpdate(t);
                    },
                    onComplete: () => {
                      e.onComplete && e.onComplete(), this.completeAnimation();
                    },
                  })),
                  this.resumingFrom &&
                    (this.resumingFrom.currentAnimation =
                      this.currentAnimation),
                  (this.pendingAnimation = void 0);
              }));
          }
          completeAnimation() {
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0));
            let e = this.getStack();
            e && e.exitAnimationComplete(),
              (this.resumingFrom =
                this.currentAnimation =
                this.animationValues =
                  void 0),
              this.notifyListeners("animationComplete");
          }
          finishAnimation() {
            this.currentAnimation &&
              (this.mixTargetDelta && this.mixTargetDelta(1e3),
              this.currentAnimation.stop()),
              this.completeAnimation();
          }
          applyTransformsToTarget() {
            let e = this.getLead(),
              {
                targetWithTransforms: t,
                target: r,
                layout: n,
                latestValues: i,
              } = e;
            if (t && r && n) {
              if (
                this !== e &&
                this.layout &&
                n &&
                nd(
                  this.options.animationType,
                  this.layout.layoutBox,
                  n.layoutBox
                )
              ) {
                r = this.target || t3();
                let t = tU(this.layout.layoutBox.x);
                (r.x.min = e.target.x.min), (r.x.max = r.x.min + t);
                let n = tU(this.layout.layoutBox.y);
                (r.y.min = e.target.y.min), (r.y.max = r.y.min + n);
              }
              rD(t, r),
                rl(t, i),
                tX(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  t,
                  i
                );
            }
          }
          registerSharedNode(e, t) {
            this.sharedNodes.has(e) || this.sharedNodes.set(e, new rX()),
              this.sharedNodes.get(e).add(t);
            let r = t.options.initialPromotionConfig;
            t.promote({
              transition: r ? r.transition : void 0,
              preserveFollowOpacity:
                r && r.shouldPreserveFollowOpacity
                  ? r.shouldPreserveFollowOpacity(t)
                  : void 0,
            });
          }
          isLead() {
            let e = this.getStack();
            return !e || e.lead === this;
          }
          getLead() {
            var e;
            let { layoutId: t } = this.options;
            return (
              (t &&
                (null === (e = this.getStack()) || void 0 === e
                  ? void 0
                  : e.lead)) ||
              this
            );
          }
          getPrevLead() {
            var e;
            let { layoutId: t } = this.options;
            return t
              ? null === (e = this.getStack()) || void 0 === e
                ? void 0
                : e.prevLead
              : void 0;
          }
          getStack() {
            let { layoutId: e } = this.options;
            if (e) return this.root.sharedNodes.get(e);
          }
          promote({
            needsReset: e,
            transition: t,
            preserveFollowOpacity: r,
          } = {}) {
            let n = this.getStack();
            n && n.promote(this, r),
              e && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              t && this.setOptions({ transition: t });
          }
          relegate() {
            let e = this.getStack();
            return !!e && e.relegate(this);
          }
          resetSkewAndRotation() {
            let { visualElement: e } = this.options;
            if (!e) return;
            let t = !1,
              { latestValues: r } = e;
            if (
              ((r.z ||
                r.rotate ||
                r.rotateX ||
                r.rotateY ||
                r.rotateZ ||
                r.skewX ||
                r.skewY) &&
                (t = !0),
              !t)
            )
              return;
            let n = {};
            r.z && rJ("z", e, n, this.animationValues);
            for (let t = 0; t < rY.length; t++)
              rJ(`rotate${rY[t]}`, e, n, this.animationValues),
                rJ(`skew${rY[t]}`, e, n, this.animationValues);
            for (let t in (e.render(), n))
              e.setStaticValue(t, n[t]),
                this.animationValues && (this.animationValues[t] = n[t]);
            e.scheduleRender();
          }
          getProjectionStyles(e) {
            var t, r;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return rZ;
            let n = { visibility: "" },
              i = this.getTransformTemplate();
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (n.opacity = ""),
                (n.pointerEvents =
                  ep(null == e ? void 0 : e.pointerEvents) || ""),
                (n.transform = i ? i(this.latestValues, "") : "none"),
                n
              );
            let o = this.getLead();
            if (!this.projectionDelta || !this.layout || !o.target) {
              let t = {};
              return (
                this.options.layoutId &&
                  ((t.opacity =
                    void 0 !== this.latestValues.opacity
                      ? this.latestValues.opacity
                      : 1),
                  (t.pointerEvents =
                    ep(null == e ? void 0 : e.pointerEvents) || "")),
                this.hasProjected &&
                  !t8(this.latestValues) &&
                  ((t.transform = i ? i({}, "") : "none"),
                  (this.hasProjected = !1)),
                t
              );
            }
            let s = o.animationValues || o.latestValues;
            this.applyTransformsToTarget(),
              (n.transform = rH(
                this.projectionDeltaWithTransform,
                this.treeScale,
                s
              )),
              i && (n.transform = i(s, n.transform));
            let { x: a, y: l } = this.projectionDelta;
            for (let e in ((n.transformOrigin = `${100 * a.origin}% ${
              100 * l.origin
            }% 0`),
            o.animationValues
              ? (n.opacity =
                  o === this
                    ? null !==
                        (r =
                          null !== (t = s.opacity) && void 0 !== t
                            ? t
                            : this.latestValues.opacity) && void 0 !== r
                      ? r
                      : 1
                    : this.preserveOpacity
                    ? this.latestValues.opacity
                    : s.opacityExit)
              : (n.opacity =
                  o === this
                    ? void 0 !== s.opacity
                      ? s.opacity
                      : ""
                    : void 0 !== s.opacityExit
                    ? s.opacityExit
                    : 0),
            O)) {
              if (void 0 === s[e]) continue;
              let { correct: t, applyTo: r } = O[e],
                i = "none" === n.transform ? s[e] : t(s[e], o);
              if (r) {
                let e = r.length;
                for (let t = 0; t < e; t++) n[r[t]] = i;
              } else n[e] = i;
            }
            return (
              this.options.layoutId &&
                (n.pointerEvents =
                  o === this
                    ? ep(null == e ? void 0 : e.pointerEvents) || ""
                    : "none"),
              n
            );
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            this.root.nodes.forEach((e) => {
              var t;
              return null === (t = e.currentAnimation) || void 0 === t
                ? void 0
                : t.stop();
            }),
              this.root.nodes.forEach(r4),
              this.root.sharedNodes.clear();
          }
        };
      }
      function r1(e) {
        e.updateLayout();
      }
      function r2(e) {
        var t;
        let r =
          (null === (t = e.resumeFrom) || void 0 === t ? void 0 : t.snapshot) ||
          e.snapshot;
        if (e.isLead() && e.layout && r && e.hasListeners("didUpdate")) {
          let { layoutBox: t, measuredBox: n } = e.layout,
            { animationType: i } = e.options,
            o = r.source !== e.layout.source;
          "size" === i
            ? t5((e) => {
                let n = o ? r.measuredBox[e] : r.layoutBox[e],
                  i = tU(n);
                (n.min = t[e].min), (n.max = n.min + i);
              })
            : nd(i, r.layoutBox, t) &&
              t5((n) => {
                let i = o ? r.measuredBox[n] : r.layoutBox[n],
                  s = tU(t[n]);
                (i.max = i.min + s),
                  e.relativeTarget &&
                    !e.currentAnimation &&
                    ((e.isProjectionDirty = !0),
                    (e.relativeTarget[n].max = e.relativeTarget[n].min + s));
              });
          let s = t1();
          tX(s, t, r.layoutBox);
          let a = t1();
          o
            ? tX(a, e.applyTransform(n, !0), r.measuredBox)
            : tX(a, t, r.layoutBox);
          let l = !rz(s),
            u = !1;
          if (!e.resumeFrom) {
            let n = e.getClosestProjectingParent();
            if (n && !n.resumeFrom) {
              let { snapshot: i, layout: o } = n;
              if (i && o) {
                let s = t3();
                tK(s, r.layoutBox, i.layoutBox);
                let a = t3();
                tK(a, t, o.layoutBox),
                  rU(s, a) || (u = !0),
                  n.options.layoutRoot &&
                    ((e.relativeTarget = a),
                    (e.relativeTargetOrigin = s),
                    (e.relativeParent = n));
              }
            }
          }
          e.notifyListeners("didUpdate", {
            layout: t,
            snapshot: r,
            delta: a,
            layoutDelta: s,
            hasLayoutChanged: l,
            hasRelativeTargetChanged: u,
          });
        } else if (e.isLead()) {
          let { onExitComplete: t } = e.options;
          t && t();
        }
        e.options.transition = void 0;
      }
      function r3(e) {
        rQ.totalNodes++,
          e.parent &&
            (e.isProjecting() ||
              (e.isProjectionDirty = e.parent.isProjectionDirty),
            e.isSharedProjectionDirty ||
              (e.isSharedProjectionDirty = !!(
                e.isProjectionDirty ||
                e.parent.isProjectionDirty ||
                e.parent.isSharedProjectionDirty
              )),
            e.isTransformDirty ||
              (e.isTransformDirty = e.parent.isTransformDirty));
      }
      function r5(e) {
        e.isProjectionDirty =
          e.isSharedProjectionDirty =
          e.isTransformDirty =
            !1;
      }
      function r9(e) {
        e.clearSnapshot();
      }
      function r4(e) {
        e.clearMeasurements();
      }
      function r6(e) {
        e.isLayoutDirty = !1;
      }
      function r8(e) {
        let { visualElement: t } = e.options;
        t &&
          t.getProps().onBeforeLayoutMeasure &&
          t.notify("BeforeLayoutMeasure"),
          e.resetTransform();
      }
      function r7(e) {
        e.finishAnimation(),
          (e.targetDelta = e.relativeTarget = e.target = void 0),
          (e.isProjectionDirty = !0);
      }
      function ne(e) {
        e.resolveTargetDelta();
      }
      function nt(e) {
        e.calcProjection();
      }
      function nr(e) {
        e.resetSkewAndRotation();
      }
      function nn(e) {
        e.removeLeadSnapshot();
      }
      function ni(e, t, r) {
        (e.translate = (0, tz.t)(t.translate, 0, r)),
          (e.scale = (0, tz.t)(t.scale, 1, r)),
          (e.origin = t.origin),
          (e.originPoint = t.originPoint);
      }
      function no(e, t, r, n) {
        (e.min = (0, tz.t)(t.min, r.min, n)),
          (e.max = (0, tz.t)(t.max, r.max, n));
      }
      function ns(e) {
        return e.animationValues && void 0 !== e.animationValues.opacityExit;
      }
      let na = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
        nl = (e) =>
          "undefined" != typeof navigator &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().includes(e),
        nu = nl("applewebkit/") && !nl("chrome/") ? Math.round : eD.Z;
      function nc(e) {
        (e.min = nu(e.min)), (e.max = nu(e.max));
      }
      function nd(e, t, r) {
        return (
          "position" === e ||
          ("preserve-aspect" === e && !t$(r$(t), r$(r), 0.2))
        );
      }
      let nh = r0({
          attachResizeListener: (e, t) => ey(e, "resize", t),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        np = { current: void 0 },
        nf = r0({
          measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
          defaultParent: () => {
            if (!np.current) {
              let e = new nh({});
              e.mount(window),
                e.setOptions({ layoutScroll: !0 }),
                (np.current = e);
            }
            return np.current;
          },
          resetTransform: (e, t) => {
            e.style.transform = void 0 !== t ? t : "none";
          },
          checkIsScrollRoot: (e) =>
            "fixed" === window.getComputedStyle(e).position,
        }),
        nm = { current: null },
        ng = { current: !1 },
        nv = new WeakMap(),
        ny = [...e8, ta.$, tt.P],
        nb = (e) => ny.find(e6(e)),
        nx = Object.keys(A),
        nw = nx.length,
        nP = [
          "AnimationStart",
          "AnimationComplete",
          "Update",
          "BeforeLayoutMeasure",
          "LayoutMeasure",
          "LayoutAnimationStart",
          "LayoutAnimationComplete",
        ],
        nS = w.length;
      class nE {
        scrapeMotionValuesFromProps(e, t, r) {
          return {};
        }
        constructor(
          {
            parent: e,
            props: t,
            presenceContext: r,
            reducedMotionConfig: n,
            blockInitialAnimation: i,
            visualState: o,
          },
          s = {}
        ) {
          (this.resolveKeyframes = (e, t, r, n) =>
            new this.KeyframeResolver(e, t, r, n, this)),
            (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.KeyframeResolver = te.e),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify("Update", this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection
                ));
            }),
            (this.scheduleRender = () => em.Wi.render(this.render, !1, !0));
          let { latestValues: a, renderState: l } = o;
          (this.latestValues = a),
            (this.baseTarget = { ...a }),
            (this.initialValues = t.initial ? { ...a } : {}),
            (this.renderState = l),
            (this.parent = e),
            (this.props = t),
            (this.presenceContext = r),
            (this.depth = e ? e.depth + 1 : 0),
            (this.reducedMotionConfig = n),
            (this.options = s),
            (this.blockInitialAnimation = !!i),
            (this.isControllingVariants = P(t)),
            (this.isVariantNode = S(t)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(e && e.current));
          let { willChange: u, ...c } = this.scrapeMotionValuesFromProps(
            t,
            {},
            this
          );
          for (let e in c) {
            let t = c[e];
            void 0 !== a[e] &&
              (0, L.i)(t) &&
              (t.set(a[e], !1), tS(u) && u.add(e));
          }
        }
        mount(e) {
          (this.current = e),
            nv.set(e, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(e),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((e, t) => this.bindToMotionValue(t, e)),
            ng.current ||
              (function () {
                if (((ng.current = !0), C.j)) {
                  if (window.matchMedia) {
                    let e = window.matchMedia("(prefers-reduced-motion)"),
                      t = () => (nm.current = e.matches);
                    e.addListener(t), t();
                  } else nm.current = !1;
                }
              })(),
            (this.shouldReduceMotion =
              "never" !== this.reducedMotionConfig &&
              ("always" === this.reducedMotionConfig || nm.current)),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext);
        }
        unmount() {
          var e;
          for (let e in (nv.delete(this.current),
          this.projection && this.projection.unmount(),
          (0, em.Pn)(this.notifyUpdate),
          (0, em.Pn)(this.render),
          this.valueSubscriptions.forEach((e) => e()),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent && this.parent.children.delete(this),
          this.events))
            this.events[e].clear();
          for (let t in this.features)
            null === (e = this.features[t]) || void 0 === e || e.unmount();
          this.current = null;
        }
        bindToMotionValue(e, t) {
          let r = D.G.has(e),
            n = t.on("change", (t) => {
              (this.latestValues[e] = t),
                this.props.onUpdate && em.Wi.preRender(this.notifyUpdate),
                r && this.projection && (this.projection.isTransformDirty = !0);
            }),
            i = t.on("renderRequest", this.scheduleRender);
          this.valueSubscriptions.set(e, () => {
            n(), i(), t.owner && t.stop();
          });
        }
        sortNodePosition(e) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === e.type
            ? this.sortInstanceNodePosition(this.current, e.current)
            : 0;
        }
        loadFeatures({ children: e, ...t }, r, n, i) {
          let o, s;
          for (let e = 0; e < nw; e++) {
            let r = nx[e],
              {
                isEnabled: n,
                Feature: i,
                ProjectionNode: a,
                MeasureLayout: l,
              } = A[r];
            a && (o = a),
              n(t) &&
                (!this.features[r] && i && (this.features[r] = new i(this)),
                l && (s = l));
          }
          if (
            ("html" === this.type || "svg" === this.type) &&
            !this.projection &&
            o
          ) {
            this.projection = new o(
              this.latestValues,
              (function e(t) {
                if (t)
                  return !1 !== t.options.allowProjection
                    ? t.projection
                    : e(t.parent);
              })(this.parent)
            );
            let {
              layoutId: e,
              layout: r,
              drag: n,
              dragConstraints: s,
              layoutScroll: a,
              layoutRoot: l,
            } = t;
            this.projection.setOptions({
              layoutId: e,
              layout: r,
              alwaysMeasureLayout: !!n || (s && v(s)),
              visualElement: this,
              scheduleRender: () => this.scheduleRender(),
              animationType: "string" == typeof r ? r : "both",
              initialPromotionConfig: i,
              layoutScroll: a,
              layoutRoot: l,
            });
          }
          return s;
        }
        updateFeatures() {
          for (let e in this.features) {
            let t = this.features[e];
            t.isMounted ? t.update() : (t.mount(), (t.isMounted = !0));
          }
        }
        triggerBuild() {
          this.build(
            this.renderState,
            this.latestValues,
            this.options,
            this.props
          );
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : t3();
        }
        getStaticValue(e) {
          return this.latestValues[e];
        }
        setStaticValue(e, t) {
          this.latestValues[e] = t;
        }
        update(e, t) {
          (e.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = e),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = t);
          for (let t = 0; t < nP.length; t++) {
            let r = nP[t];
            this.propEventSubscriptions[r] &&
              (this.propEventSubscriptions[r](),
              delete this.propEventSubscriptions[r]);
            let n = e["on" + r];
            n && (this.propEventSubscriptions[r] = this.on(r, n));
          }
          (this.prevMotionValues = (function (e, t, r) {
            let { willChange: n } = t;
            for (let i in t) {
              let o = t[i],
                s = r[i];
              if ((0, L.i)(o)) e.addValue(i, o), tS(n) && n.add(i);
              else if ((0, L.i)(s))
                e.addValue(i, (0, tE.BX)(o, { owner: e })),
                  tS(n) && n.remove(i);
              else if (s !== o) {
                if (e.hasValue(i)) {
                  let t = e.getValue(i);
                  !0 === t.liveStyle ? t.jump(o) : t.hasAnimated || t.set(o);
                } else {
                  let t = e.getStaticValue(i);
                  e.addValue(i, (0, tE.BX)(void 0 !== t ? t : o, { owner: e }));
                }
              }
            }
            for (let n in r) void 0 === t[n] && e.removeValue(n);
            return t;
          })(
            this,
            this.scrapeMotionValuesFromProps(e, this.prevProps, this),
            this.prevMotionValues
          )),
            this.handleChildMotionValue && this.handleChildMotionValue();
        }
        getProps() {
          return this.props;
        }
        getVariant(e) {
          return this.props.variants ? this.props.variants[e] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
            ? this.parent.getClosestVariantNode()
            : void 0;
        }
        getVariantContext(e = !1) {
          if (e) return this.parent ? this.parent.getVariantContext() : void 0;
          if (!this.isControllingVariants) {
            let e = (this.parent && this.parent.getVariantContext()) || {};
            return (
              void 0 !== this.props.initial && (e.initial = this.props.initial),
              e
            );
          }
          let t = {};
          for (let e = 0; e < nS; e++) {
            let r = w[e],
              n = this.props[r];
            (y(n) || !1 === n) && (t[r] = n);
          }
          return t;
        }
        addVariantChild(e) {
          let t = this.getClosestVariantNode();
          if (t)
            return (
              t.variantChildren && t.variantChildren.add(e),
              () => t.variantChildren.delete(e)
            );
        }
        addValue(e, t) {
          let r = this.values.get(e);
          t !== r &&
            (r && this.removeValue(e),
            this.bindToMotionValue(e, t),
            this.values.set(e, t),
            (this.latestValues[e] = t.get()));
        }
        removeValue(e) {
          this.values.delete(e);
          let t = this.valueSubscriptions.get(e);
          t && (t(), this.valueSubscriptions.delete(e)),
            delete this.latestValues[e],
            this.removeValueFromRenderState(e, this.renderState);
        }
        hasValue(e) {
          return this.values.has(e);
        }
        getValue(e, t) {
          if (this.props.values && this.props.values[e])
            return this.props.values[e];
          let r = this.values.get(e);
          return (
            void 0 === r &&
              void 0 !== t &&
              ((r = (0, tE.BX)(null === t ? void 0 : t, { owner: this })),
              this.addValue(e, r)),
            r
          );
        }
        readValue(e, t) {
          var r;
          let n =
            void 0 === this.latestValues[e] && this.current
              ? null !== (r = this.getBaseTargetFromProps(this.props, e)) &&
                void 0 !== r
                ? r
                : this.readValueFromInstance(this.current, e, this.options)
              : this.latestValues[e];
          return (
            null != n &&
              ("string" == typeof n && (e5(n) || e2(n))
                ? (n = parseFloat(n))
                : !nb(n) && tt.P.test(t) && (n = tc(e, t)),
              this.setBaseTarget(e, (0, L.i)(n) ? n.get() : n)),
            (0, L.i)(n) ? n.get() : n
          );
        }
        setBaseTarget(e, t) {
          this.baseTarget[e] = t;
        }
        getBaseTarget(e) {
          var t;
          let r;
          let { initial: n } = this.props;
          if ("string" == typeof n || "object" == typeof n) {
            let i = el(
              this.props,
              n,
              null === (t = this.presenceContext) || void 0 === t
                ? void 0
                : t.custom
            );
            i && (r = i[e]);
          }
          if (n && void 0 !== r) return r;
          let i = this.getBaseTargetFromProps(this.props, e);
          return void 0 === i || (0, L.i)(i)
            ? void 0 !== this.initialValues[e] && void 0 === r
              ? void 0
              : this.baseTarget[e]
            : i;
        }
        on(e, t) {
          return (
            this.events[e] || (this.events[e] = new rS.L()),
            this.events[e].add(t)
          );
        }
        notify(e, ...t) {
          this.events[e] && this.events[e].notify(...t);
        }
      }
      class nT extends nE {
        constructor() {
          super(...arguments), (this.KeyframeResolver = td);
        }
        sortInstanceNodePosition(e, t) {
          return 2 & e.compareDocumentPosition(t) ? 1 : -1;
        }
        getBaseTargetFromProps(e, t) {
          return e.style ? e.style[t] : void 0;
        }
        removeValueFromRenderState(e, { vars: t, style: r }) {
          delete t[e], delete r[e];
        }
      }
      class nA extends nT {
        constructor() {
          super(...arguments), (this.type = "html");
        }
        readValueFromInstance(e, t) {
          if (D.G.has(t)) {
            let e = tu(t);
            return (e && e.default) || 0;
          }
          {
            let r = window.getComputedStyle(e),
              n = ((0, F.f)(t) ? r.getPropertyValue(t) : r[t]) || 0;
            return "string" == typeof n ? n.trim() : n;
          }
        }
        measureInstanceViewportBox(e, { transformPagePoint: t }) {
          return ru(e, t);
        }
        build(e, t, r, n) {
          X(e, t, r, n.transformTemplate);
        }
        scrapeMotionValuesFromProps(e, t, r) {
          return es(e, t, r);
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          let { children: e } = this.props;
          (0, L.i)(e) &&
            (this.childSubscription = e.on("change", (e) => {
              this.current && (this.current.textContent = `${e}`);
            }));
        }
        renderInstance(e, t, r, n) {
          en(e, t, r, n);
        }
      }
      class nC extends nT {
        constructor() {
          super(...arguments), (this.type = "svg"), (this.isSVGTag = !1);
        }
        getBaseTargetFromProps(e, t) {
          return e[t];
        }
        readValueFromInstance(e, t) {
          if (D.G.has(t)) {
            let e = tu(t);
            return (e && e.default) || 0;
          }
          return (t = ei.has(t) ? t : p(t)), e.getAttribute(t);
        }
        measureInstanceViewportBox() {
          return t3();
        }
        scrapeMotionValuesFromProps(e, t, r) {
          return ea(e, t, r);
        }
        build(e, t, r, n) {
          ee(e, t, r, this.isSVGTag, n.transformTemplate);
        }
        renderInstance(e, t, r, n) {
          eo(e, t, r, n);
        }
        mount(e) {
          (this.isSVGTag = er(e.tagName)), super.mount(e);
        }
      }
      let nR = (e, t) =>
          V(e)
            ? new nC(t, { enableHardwareAcceleration: !1 })
            : new nA(t, {
                allowProjection: e !== a.Fragment,
                enableHardwareAcceleration: !0,
              }),
        nM = {
          animation: { Feature: tj },
          exit: { Feature: tO },
          inView: { Feature: eU },
          tap: { Feature: eL },
          focus: { Feature: eV },
          hover: { Feature: ej },
          pan: { Feature: rg },
          drag: { Feature: rf, ProjectionNode: nf, MeasureLayout: rw },
          layout: { ProjectionNode: nf, MeasureLayout: rw },
        },
        nk = (function (e) {
          function t(t, r = {}) {
            return (function ({
              preloadedFeatures: e,
              createVisualElement: t,
              useRender: r,
              useVisualState: n,
              Component: i,
            }) {
              e &&
                (function (e) {
                  for (let t in e) A[t] = { ...A[t], ...e[t] };
                })(e);
              let o = (0, a.forwardRef)(function (o, p) {
                var g;
                let b;
                let x = {
                    ...(0, a.useContext)(l._),
                    ...o,
                    layoutId: (function ({ layoutId: e }) {
                      let t = (0, a.useContext)(R).id;
                      return t && void 0 !== e ? t + "-" + e : e;
                    })(o),
                  },
                  { isStatic: w } = x,
                  S = (function (e) {
                    let { initial: t, animate: r } = (function (e, t) {
                      if (P(e)) {
                        let { initial: t, animate: r } = e;
                        return {
                          initial: !1 === t || y(t) ? t : void 0,
                          animate: y(r) ? r : void 0,
                        };
                      }
                      return !1 !== e.inherit ? t : {};
                    })(e, (0, a.useContext)(u));
                    return (0, a.useMemo)(
                      () => ({ initial: t, animate: r }),
                      [E(t), E(r)]
                    );
                  })(o),
                  T = n(o, w);
                if (!w && C.j) {
                  S.visualElement = (function (e, t, r, n) {
                    let { visualElement: i } = (0, a.useContext)(u),
                      o = (0, a.useContext)(h),
                      s = (0, a.useContext)(c),
                      p = (0, a.useContext)(l._).reducedMotion,
                      g = (0, a.useRef)();
                    (n = n || o.renderer),
                      !g.current &&
                        n &&
                        (g.current = n(e, {
                          visualState: t,
                          parent: i,
                          props: r,
                          presenceContext: s,
                          blockInitialAnimation: !!s && !1 === s.initial,
                          reducedMotionConfig: p,
                        }));
                    let v = g.current;
                    (0, a.useInsertionEffect)(() => {
                      v && v.update(r, s);
                    });
                    let y = (0, a.useRef)(!!(r[f] && !window.HandoffComplete));
                    return (
                      (0, d.L)(() => {
                        v &&
                          (m.postRender(v.render),
                          y.current &&
                            v.animationState &&
                            v.animationState.animateChanges());
                      }),
                      (0, a.useEffect)(() => {
                        v &&
                          (v.updateFeatures(),
                          !y.current &&
                            v.animationState &&
                            v.animationState.animateChanges(),
                          y.current &&
                            ((y.current = !1), (window.HandoffComplete = !0)));
                      }),
                      v
                    );
                  })(i, T, x, t);
                  let r = (0, a.useContext)(M),
                    n = (0, a.useContext)(h).strict;
                  S.visualElement &&
                    (b = S.visualElement.loadFeatures(x, n, e, r));
                }
                return (0, s.jsxs)(u.Provider, {
                  value: S,
                  children: [
                    b && S.visualElement
                      ? (0, s.jsx)(b, { visualElement: S.visualElement, ...x })
                      : null,
                    r(
                      i,
                      o,
                      ((g = S.visualElement),
                      (0, a.useCallback)(
                        (e) => {
                          e && T.mount && T.mount(e),
                            g && (e ? g.mount(e) : g.unmount()),
                            p &&
                              ("function" == typeof p
                                ? p(e)
                                : v(p) && (p.current = e));
                        },
                        [g]
                      )),
                      T,
                      w,
                      S.visualElement
                    ),
                  ],
                });
              });
              return (o[k] = i), o;
            })(e(t, r));
          }
          if ("undefined" == typeof Proxy) return t;
          let r = new Map();
          return new Proxy(t, {
            get: (e, n) => (r.has(n) || r.set(n, t(n)), r.get(n)),
          });
        })((e, t) =>
          (function (e, { forwardMotionProps: t = !1 }, r, n) {
            return {
              ...(V(e) ? eg : ev),
              preloadedFeatures: r,
              useRender: (function (e = !1) {
                return (t, r, n, { latestValues: i }, o) => {
                  let s = (
                      V(t)
                        ? function (e, t, r, n) {
                            let i = (0, a.useMemo)(() => {
                              let r = et();
                              return (
                                ee(
                                  r,
                                  t,
                                  { enableHardwareAcceleration: !1 },
                                  er(n),
                                  e.transformTemplate
                                ),
                                { ...r.attrs, style: { ...r.style } }
                              );
                            }, [t]);
                            if (e.style) {
                              let t = {};
                              G(t, e.style, e),
                                (i.style = { ...t, ...i.style });
                            }
                            return i;
                          }
                        : function (e, t, r) {
                            let n = {},
                              i = (function (e, t, r) {
                                let n = e.style || {},
                                  i = {};
                                return (
                                  G(i, n, e),
                                  Object.assign(
                                    i,
                                    (function ({ transformTemplate: e }, t, r) {
                                      return (0, a.useMemo)(() => {
                                        let n = H();
                                        return (
                                          X(
                                            n,
                                            t,
                                            { enableHardwareAcceleration: !r },
                                            e
                                          ),
                                          Object.assign({}, n.vars, n.style)
                                        );
                                      }, [t]);
                                    })(e, t, r)
                                  ),
                                  i
                                );
                              })(e, t, r);
                            return (
                              e.drag &&
                                !1 !== e.dragListener &&
                                ((n.draggable = !1),
                                (i.userSelect =
                                  i.WebkitUserSelect =
                                  i.WebkitTouchCallout =
                                    "none"),
                                (i.touchAction =
                                  !0 === e.drag
                                    ? "none"
                                    : `pan-${"x" === e.drag ? "y" : "x"}`)),
                              void 0 === e.tabIndex &&
                                (e.onTap || e.onTapStart || e.whileTap) &&
                                (n.tabIndex = 0),
                              (n.style = i),
                              n
                            );
                          }
                    )(r, i, o, t),
                    l = (function (e, t, r) {
                      let n = {};
                      for (let i in e)
                        ("values" !== i || "object" != typeof e.values) &&
                          (Z(i) ||
                            (!0 === r && Y(i)) ||
                            (!t && !Y(i)) ||
                            (e.draggable && i.startsWith("onDrag"))) &&
                          (n[i] = e[i]);
                      return n;
                    })(r, "string" == typeof t, e),
                    u = t !== a.Fragment ? { ...l, ...s, ref: n } : {},
                    { children: c } = r,
                    d = (0, a.useMemo)(() => ((0, L.i)(c) ? c.get() : c), [c]);
                  return (0, a.createElement)(t, { ...u, children: d });
                };
              })(t),
              createVisualElement: n,
              Component: e,
            };
          })(e, t, nM, nR)
        );
    },
    1534: function (e, t, r) {
      r.d(t, {
        f: function () {
          return i;
        },
        t: function () {
          return s;
        },
      });
      let n = (e) => (t) => "string" == typeof t && t.startsWith(e),
        i = n("--"),
        o = n("var(--"),
        s = (e) => !!o(e) && a.test(e.split("/*")[0].trim()),
        a =
          /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
    },
    5014: function (e, t, r) {
      r.d(t, {
        Ei: function () {
          return h;
        },
        lw: function () {
          return p;
        },
        mP: function () {
          return a;
        },
        z2: function () {
          return s;
        },
      });
      var n = r(6019),
        i = r(783),
        o = r(5480);
      let s = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
          "translateX",
          "translateY",
        ]),
        a = (e) => e === i.Rx || e === o.px,
        l = (e, t) => parseFloat(e.split(", ")[t]),
        u =
          (e, t) =>
          (r, { transform: n }) => {
            if ("none" === n || !n) return 0;
            let i = n.match(/^matrix3d\((.+)\)$/u);
            if (i) return l(i[1], t);
            {
              let t = n.match(/^matrix\((.+)\)$/u);
              return t ? l(t[1], e) : 0;
            }
          },
        c = new Set(["x", "y", "z"]),
        d = n._.filter((e) => !c.has(e));
      function h(e) {
        let t = [];
        return (
          d.forEach((r) => {
            let n = e.getValue(r);
            void 0 !== n &&
              (t.push([r, n.get()]), n.set(r.startsWith("scale") ? 1 : 0));
          }),
          t
        );
      }
      let p = {
        width: ({ x: e }, { paddingLeft: t = "0", paddingRight: r = "0" }) =>
          e.max - e.min - parseFloat(t) - parseFloat(r),
        height: ({ y: e }, { paddingTop: t = "0", paddingBottom: r = "0" }) =>
          e.max - e.min - parseFloat(t) - parseFloat(r),
        top: (e, { top: t }) => parseFloat(t),
        left: (e, { left: t }) => parseFloat(t),
        bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
        right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
        x: u(4, 13),
        y: u(5, 14),
      };
      (p.translateX = p.x), (p.translateY = p.y);
    },
    6019: function (e, t, r) {
      r.d(t, {
        G: function () {
          return i;
        },
        _: function () {
          return n;
        },
      });
      let n = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        i = new Set(n);
    },
    3653: function (e, t, r) {
      r.d(t, {
        e: function () {
          return d;
        },
        m: function () {
          return c;
        },
      });
      var n = r(5014),
        i = r(6219);
      let o = new Set(),
        s = !1,
        a = !1;
      function l() {
        if (a) {
          let e = Array.from(o).filter((e) => e.needsMeasurement),
            t = new Set(e.map((e) => e.element)),
            r = new Map();
          t.forEach((e) => {
            let t = (0, n.Ei)(e);
            t.length && (r.set(e, t), e.render());
          }),
            e.forEach((e) => e.measureInitialState()),
            t.forEach((e) => {
              e.render();
              let t = r.get(e);
              t &&
                t.forEach(([t, r]) => {
                  var n;
                  null === (n = e.getValue(t)) || void 0 === n || n.set(r);
                });
            }),
            e.forEach((e) => e.measureEndState()),
            e.forEach((e) => {
              void 0 !== e.suspendedScrollY &&
                window.scrollTo(0, e.suspendedScrollY);
            });
        }
        (a = !1), (s = !1), o.forEach((e) => e.complete()), o.clear();
      }
      function u() {
        o.forEach((e) => {
          e.readKeyframes(), e.needsMeasurement && (a = !0);
        });
      }
      function c() {
        u(), l();
      }
      class d {
        constructor(e, t, r, n, i, o = !1) {
          (this.isComplete = !1),
            (this.isAsync = !1),
            (this.needsMeasurement = !1),
            (this.isScheduled = !1),
            (this.unresolvedKeyframes = [...e]),
            (this.onComplete = t),
            (this.name = r),
            (this.motionValue = n),
            (this.element = i),
            (this.isAsync = o);
        }
        scheduleResolve() {
          (this.isScheduled = !0),
            this.isAsync
              ? (o.add(this),
                s || ((s = !0), i.Wi.read(u), i.Wi.resolveKeyframes(l)))
              : (this.readKeyframes(), this.complete());
        }
        readKeyframes() {
          let {
            unresolvedKeyframes: e,
            name: t,
            element: r,
            motionValue: n,
          } = this;
          for (let i = 0; i < e.length; i++)
            if (null === e[i]) {
              if (0 === i) {
                let i = null == n ? void 0 : n.get(),
                  o = e[e.length - 1];
                if (void 0 !== i) e[0] = i;
                else if (r && t) {
                  let n = r.readValue(t, o);
                  null != n && (e[0] = n);
                }
                void 0 === e[0] && (e[0] = o), n && void 0 === i && n.set(e[0]);
              } else e[i] = e[i - 1];
            }
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete() {
          (this.isComplete = !0),
            this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
            o.delete(this);
        }
        cancel() {
          this.isComplete || ((this.isScheduled = !1), o.delete(this));
        }
        resume() {
          this.isComplete || this.scheduleResolve();
        }
      }
    },
    565: function (e, t, r) {
      r.d(t, {
        c: function () {
          return n;
        },
      });
      let n = { skipAnimations: !1, useManualTiming: !1 };
    },
    8746: function (e, t, r) {
      function n(e, t) {
        -1 === e.indexOf(t) && e.push(t);
      }
      function i(e, t) {
        let r = e.indexOf(t);
        r > -1 && e.splice(r, 1);
      }
      r.d(t, {
        cl: function () {
          return i;
        },
        y4: function () {
          return n;
        },
      });
    },
    1506: function (e, t, r) {
      r.d(t, {
        u: function () {
          return n;
        },
      });
      let n = (e, t, r) => (r > t ? t : r < e ? e : r);
    },
    9047: function (e, t, r) {
      r.d(t, {
        K: function () {
          return i;
        },
        k: function () {
          return o;
        },
      });
      var n = r(9276);
      let i = n.Z,
        o = n.Z;
    },
    2548: function (e, t, r) {
      r.d(t, {
        s: function () {
          return u;
        },
      });
      var n = r(9047),
        i = r(1506),
        o = r(9654),
        s = r(3217),
        a = r(9276),
        l = r(1215);
      function u(e, t, { clamp: r = !0, ease: u, mixer: c } = {}) {
        let d = e.length;
        if (
          ((0, n.k)(
            d === t.length,
            "Both input and output ranges must be the same length"
          ),
          1 === d)
        )
          return () => t[0];
        if (2 === d && e[0] === e[1]) return () => t[1];
        e[0] > e[d - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
        let h = (function (e, t, r) {
            let n = [],
              i = r || l.C,
              s = e.length - 1;
            for (let r = 0; r < s; r++) {
              let s = i(e[r], e[r + 1]);
              if (t) {
                let e = Array.isArray(t) ? t[r] || a.Z : t;
                s = (0, o.z)(e, s);
              }
              n.push(s);
            }
            return n;
          })(t, u, c),
          p = h.length,
          f = (t) => {
            let r = 0;
            if (p > 1) for (; r < e.length - 2 && !(t < e[r + 1]); r++);
            let n = (0, s.Y)(e[r], e[r + 1], t);
            return h[r](n);
          };
        return r ? (t) => f((0, i.u)(e[0], e[d - 1], t)) : f;
      }
    },
    7282: function (e, t, r) {
      r.d(t, {
        j: function () {
          return n;
        },
      });
      let n = "undefined" != typeof document;
    },
    1215: function (e, t, r) {
      r.d(t, {
        C: function () {
          return E;
        },
      });
      var n = r(5004),
        i = r(9047);
      function o(e, t, r) {
        return (r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6)
          ? e + (t - e) * 6 * r
          : r < 0.5
          ? t
          : r < 2 / 3
          ? e + (t - e) * (2 / 3 - r) * 6
          : e;
      }
      var s = r(5778),
        a = r(1583),
        l = r(598);
      let u = (e, t, r) => {
          let n = e * e,
            i = r * (t * t - n) + n;
          return i < 0 ? 0 : Math.sqrt(i);
        },
        c = [s.$, a.m, l.J],
        d = (e) => c.find((t) => t.test(e));
      function h(e) {
        let t = d(e);
        (0, i.k)(
          !!t,
          `'${e}' is not an animatable color. Use the equivalent color code instead.`
        );
        let r = t.parse(e);
        return (
          t === l.J &&
            (r = (function ({ hue: e, saturation: t, lightness: r, alpha: n }) {
              (e /= 360), (r /= 100);
              let i = 0,
                s = 0,
                a = 0;
              if ((t /= 100)) {
                let n = r < 0.5 ? r * (1 + t) : r + t - r * t,
                  l = 2 * r - n;
                (i = o(l, n, e + 1 / 3)),
                  (s = o(l, n, e)),
                  (a = o(l, n, e - 1 / 3));
              } else i = s = a = r;
              return {
                red: Math.round(255 * i),
                green: Math.round(255 * s),
                blue: Math.round(255 * a),
                alpha: n,
              };
            })(r)),
          r
        );
      }
      let p = (e, t) => {
        let r = h(e),
          i = h(t),
          o = { ...r };
        return (e) => (
          (o.red = u(r.red, i.red, e)),
          (o.green = u(r.green, i.green, e)),
          (o.blue = u(r.blue, i.blue, e)),
          (o.alpha = (0, n.t)(r.alpha, i.alpha, e)),
          a.m.transform(o)
        );
      };
      var f = r(9654),
        m = r(146),
        g = r(3646),
        v = r(1534);
      function y(e, t) {
        return (r) => (r > 0 ? t : e);
      }
      function b(e, t) {
        return (r) => (0, n.t)(e, t, r);
      }
      function x(e) {
        return "number" == typeof e
          ? b
          : "string" == typeof e
          ? (0, v.t)(e)
            ? y
            : m.$.test(e)
            ? p
            : S
          : Array.isArray(e)
          ? w
          : "object" == typeof e
          ? m.$.test(e)
            ? p
            : P
          : y;
      }
      function w(e, t) {
        let r = [...e],
          n = r.length,
          i = e.map((e, r) => x(e)(e, t[r]));
        return (e) => {
          for (let t = 0; t < n; t++) r[t] = i[t](e);
          return r;
        };
      }
      function P(e, t) {
        let r = { ...e, ...t },
          n = {};
        for (let i in r)
          void 0 !== e[i] && void 0 !== t[i] && (n[i] = x(e[i])(e[i], t[i]));
        return (e) => {
          for (let t in n) r[t] = n[t](e);
          return r;
        };
      }
      let S = (e, t) => {
        let r = g.P.createTransformer(t),
          n = (0, g.V)(e),
          o = (0, g.V)(t);
        return n.indexes.var.length === o.indexes.var.length &&
          n.indexes.color.length === o.indexes.color.length &&
          n.indexes.number.length >= o.indexes.number.length
          ? (0, f.z)(
              w(
                (function (e, t) {
                  var r;
                  let n = [],
                    i = { color: 0, var: 0, number: 0 };
                  for (let o = 0; o < t.values.length; o++) {
                    let s = t.types[o],
                      a = e.indexes[s][i[s]],
                      l = null !== (r = e.values[a]) && void 0 !== r ? r : 0;
                    (n[o] = l), i[s]++;
                  }
                  return n;
                })(n, o),
                o.values
              ),
              r
            )
          : ((0, i.K)(
              !0,
              `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
            ),
            y(e, t));
      };
      function E(e, t, r) {
        return "number" == typeof e &&
          "number" == typeof t &&
          "number" == typeof r
          ? (0, n.t)(e, t, r)
          : x(e)(e, t);
      }
    },
    5004: function (e, t, r) {
      r.d(t, {
        t: function () {
          return n;
        },
      });
      let n = (e, t, r) => e + (t - e) * r;
    },
    9276: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      let n = (e) => e;
    },
    839: function (e, t, r) {
      r.d(t, {
        Y: function () {
          return o;
        },
      });
      var n = r(5004),
        i = r(3217);
      function o(e) {
        let t = [0];
        return (
          !(function (e, t) {
            let r = e[e.length - 1];
            for (let o = 1; o <= t; o++) {
              let s = (0, i.Y)(0, t, o);
              e.push((0, n.t)(r, 1, s));
            }
          })(t, e.length - 1),
          t
        );
      }
    },
    9654: function (e, t, r) {
      r.d(t, {
        z: function () {
          return i;
        },
      });
      let n = (e, t) => (r) => t(e(r)),
        i = (...e) => e.reduce(n);
    },
    3217: function (e, t, r) {
      r.d(t, {
        Y: function () {
          return n;
        },
      });
      let n = (e, t, r) => {
        let n = t - e;
        return 0 === n ? 1 : (r - e) / n;
      };
    },
    2428: function (e, t, r) {
      r.d(t, {
        L: function () {
          return i;
        },
      });
      var n = r(8746);
      class i {
        constructor() {
          this.subscriptions = [];
        }
        add(e) {
          return (
            (0, n.y4)(this.subscriptions, e),
            () => (0, n.cl)(this.subscriptions, e)
          );
        }
        notify(e, t, r) {
          let n = this.subscriptions.length;
          if (n) {
            if (1 === n) this.subscriptions[0](e, t, r);
            else
              for (let i = 0; i < n; i++) {
                let n = this.subscriptions[i];
                n && n(e, t, r);
              }
          }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
    },
    557: function (e, t, r) {
      r.d(t, {
        X: function () {
          return i;
        },
        w: function () {
          return n;
        },
      });
      let n = (e) => 1e3 * e,
        i = (e) => e / 1e3;
    },
    458: function (e, t, r) {
      r.d(t, {
        h: function () {
          return i;
        },
      });
      var n = r(2265);
      function i(e) {
        let t = (0, n.useRef)(null);
        return null === t.current && (t.current = e()), t.current;
      }
    },
    4097: function (e, t, r) {
      r.d(t, {
        c: function () {
          return n;
        },
      });
      let n = { current: !1 };
    },
    9033: function (e, t, r) {
      r.d(t, {
        L: function () {
          return i;
        },
      });
      var n = r(2265);
      let i = r(7282).j ? n.useLayoutEffect : n.useEffect;
    },
    3476: function (e, t, r) {
      r.d(t, {
        R: function () {
          return n;
        },
      });
      function n(e, t) {
        return t ? (1e3 / t) * e : 0;
      }
    },
    804: function (e, t, r) {
      r.d(t, {
        BX: function () {
          return c;
        },
        S1: function () {
          return l;
        },
      });
      var n = r(2428),
        i = r(3476),
        o = r(9993),
        s = r(6219);
      let a = (e) => !isNaN(parseFloat(e)),
        l = { current: void 0 };
      class u {
        constructor(e, t = {}) {
          (this.version = "11.1.7"),
            (this.canTrackVelocity = !1),
            (this.events = {}),
            (this.updateAndNotify = (e, t = !0) => {
              let r = o.X.now();
              this.updatedAt !== r && this.setPrevFrameValue(),
                (this.prev = this.current),
                this.setCurrent(e),
                this.current !== this.prev &&
                  this.events.change &&
                  this.events.change.notify(this.current),
                t &&
                  this.events.renderRequest &&
                  this.events.renderRequest.notify(this.current);
            }),
            (this.hasAnimated = !1),
            this.setCurrent(e),
            (this.canTrackVelocity = a(this.current)),
            (this.owner = t.owner);
        }
        setCurrent(e) {
          (this.current = e), (this.updatedAt = o.X.now());
        }
        setPrevFrameValue(e = this.current) {
          (this.prevFrameValue = e), (this.prevUpdatedAt = this.updatedAt);
        }
        onChange(e) {
          return this.on("change", e);
        }
        on(e, t) {
          this.events[e] || (this.events[e] = new n.L());
          let r = this.events[e].add(t);
          return "change" === e
            ? () => {
                r(),
                  s.Wi.read(() => {
                    this.events.change.getSize() || this.stop();
                  });
              }
            : r;
        }
        clearListeners() {
          for (let e in this.events) this.events[e].clear();
        }
        attach(e, t) {
          (this.passiveEffect = e), (this.stopPassiveEffect = t);
        }
        set(e, t = !0) {
          t && this.passiveEffect
            ? this.passiveEffect(e, this.updateAndNotify)
            : this.updateAndNotify(e, t);
        }
        setWithVelocity(e, t, r) {
          this.set(t),
            (this.prev = void 0),
            (this.prevFrameValue = e),
            (this.prevUpdatedAt = this.updatedAt - r);
        }
        jump(e, t = !0) {
          this.updateAndNotify(e),
            (this.prev = e),
            (this.prevUpdatedAt = this.prevFrameValue = void 0),
            t && this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
        get() {
          return l.current && l.current.push(this), this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          let e = o.X.now();
          if (
            !this.canTrackVelocity ||
            void 0 === this.prevFrameValue ||
            e - this.updatedAt > 30
          )
            return 0;
          let t = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
          return (0, i.R)(
            parseFloat(this.current) - parseFloat(this.prevFrameValue),
            t
          );
        }
        start(e) {
          return (
            this.stop(),
            new Promise((t) => {
              (this.hasAnimated = !0),
                (this.animation = e(t)),
                this.events.animationStart &&
                  this.events.animationStart.notify();
            }).then(() => {
              this.events.animationComplete &&
                this.events.animationComplete.notify(),
                this.clearAnimation();
            })
          );
        }
        stop() {
          this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation();
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
      }
      function c(e, t) {
        return new u(e, t);
      }
    },
    5778: function (e, t, r) {
      r.d(t, {
        $: function () {
          return i;
        },
      });
      var n = r(1583);
      let i = {
        test: (0, r(3338).i)("#"),
        parse: function (e) {
          let t = "",
            r = "",
            n = "",
            i = "";
          return (
            e.length > 5
              ? ((t = e.substring(1, 3)),
                (r = e.substring(3, 5)),
                (n = e.substring(5, 7)),
                (i = e.substring(7, 9)))
              : ((t = e.substring(1, 2)),
                (r = e.substring(2, 3)),
                (n = e.substring(3, 4)),
                (i = e.substring(4, 5)),
                (t += t),
                (r += r),
                (n += n),
                (i += i)),
            {
              red: parseInt(t, 16),
              green: parseInt(r, 16),
              blue: parseInt(n, 16),
              alpha: i ? parseInt(i, 16) / 255 : 1,
            }
          );
        },
        transform: n.m.transform,
      };
    },
    598: function (e, t, r) {
      r.d(t, {
        J: function () {
          return a;
        },
      });
      var n = r(783),
        i = r(5480),
        o = r(7292),
        s = r(3338);
      let a = {
        test: (0, s.i)("hsl", "hue"),
        parse: (0, s.d)("hue", "saturation", "lightness"),
        transform: ({ hue: e, saturation: t, lightness: r, alpha: s = 1 }) =>
          "hsla(" +
          Math.round(e) +
          ", " +
          i.aQ.transform((0, o.Nw)(t)) +
          ", " +
          i.aQ.transform((0, o.Nw)(r)) +
          ", " +
          (0, o.Nw)(n.Fq.transform(s)) +
          ")",
      };
    },
    146: function (e, t, r) {
      r.d(t, {
        $: function () {
          return a;
        },
      });
      var n = r(7292),
        i = r(5778),
        o = r(598),
        s = r(1583);
      let a = {
        test: (e) => s.m.test(e) || i.$.test(e) || o.J.test(e),
        parse: (e) =>
          s.m.test(e)
            ? s.m.parse(e)
            : o.J.test(e)
            ? o.J.parse(e)
            : i.$.parse(e),
        transform: (e) =>
          (0, n.HD)(e)
            ? e
            : e.hasOwnProperty("red")
            ? s.m.transform(e)
            : o.J.transform(e),
      };
    },
    1583: function (e, t, r) {
      r.d(t, {
        m: function () {
          return u;
        },
      });
      var n = r(1506),
        i = r(783),
        o = r(7292),
        s = r(3338);
      let a = (e) => (0, n.u)(0, 255, e),
        l = { ...i.Rx, transform: (e) => Math.round(a(e)) },
        u = {
          test: (0, s.i)("rgb", "red"),
          parse: (0, s.d)("red", "green", "blue"),
          transform: ({ red: e, green: t, blue: r, alpha: n = 1 }) =>
            "rgba(" +
            l.transform(e) +
            ", " +
            l.transform(t) +
            ", " +
            l.transform(r) +
            ", " +
            (0, o.Nw)(i.Fq.transform(n)) +
            ")",
        };
    },
    3338: function (e, t, r) {
      r.d(t, {
        d: function () {
          return o;
        },
        i: function () {
          return i;
        },
      });
      var n = r(7292);
      let i = (e, t) => (r) =>
          !!(
            ((0, n.HD)(r) && n.mj.test(r) && r.startsWith(e)) ||
            (t && Object.prototype.hasOwnProperty.call(r, t))
          ),
        o = (e, t, r) => (i) => {
          if (!(0, n.HD)(i)) return i;
          let [o, s, a, l] = i.match(n.KP);
          return {
            [e]: parseFloat(o),
            [t]: parseFloat(s),
            [r]: parseFloat(a),
            alpha: void 0 !== l ? parseFloat(l) : 1,
          };
        };
    },
    3646: function (e, t, r) {
      r.d(t, {
        P: function () {
          return h;
        },
        V: function () {
          return l;
        },
      });
      var n = r(146),
        i = r(7292);
      let o = "number",
        s = "color",
        a =
          /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
      function l(e) {
        let t = e.toString(),
          r = [],
          i = { color: [], number: [], var: [] },
          l = [],
          u = 0,
          c = t
            .replace(
              a,
              (e) => (
                n.$.test(e)
                  ? (i.color.push(u), l.push(s), r.push(n.$.parse(e)))
                  : e.startsWith("var(")
                  ? (i.var.push(u), l.push("var"), r.push(e))
                  : (i.number.push(u), l.push(o), r.push(parseFloat(e))),
                ++u,
                "${}"
              )
            )
            .split("${}");
        return { values: r, split: c, indexes: i, types: l };
      }
      function u(e) {
        return l(e).values;
      }
      function c(e) {
        let { split: t, types: r } = l(e),
          a = t.length;
        return (e) => {
          let l = "";
          for (let u = 0; u < a; u++)
            if (((l += t[u]), void 0 !== e[u])) {
              let t = r[u];
              t === o
                ? (l += (0, i.Nw)(e[u]))
                : t === s
                ? (l += n.$.transform(e[u]))
                : (l += e[u]);
            }
          return l;
        };
      }
      let d = (e) => ("number" == typeof e ? 0 : e),
        h = {
          test: function (e) {
            var t, r;
            return (
              isNaN(e) &&
              (0, i.HD)(e) &&
              ((null === (t = e.match(i.KP)) || void 0 === t
                ? void 0
                : t.length) || 0) +
                ((null === (r = e.match(i.dA)) || void 0 === r
                  ? void 0
                  : r.length) || 0) >
                0
            );
          },
          parse: u,
          createTransformer: c,
          getAnimatableNone: function (e) {
            let t = u(e);
            return c(e)(t.map(d));
          },
        };
    },
    783: function (e, t, r) {
      r.d(t, {
        Fq: function () {
          return o;
        },
        Rx: function () {
          return i;
        },
        bA: function () {
          return s;
        },
      });
      var n = r(1506);
      let i = {
          test: (e) => "number" == typeof e,
          parse: parseFloat,
          transform: (e) => e,
        },
        o = { ...i, transform: (e) => (0, n.u)(0, 1, e) },
        s = { ...i, default: 1 };
    },
    5480: function (e, t, r) {
      r.d(t, {
        $C: function () {
          return c;
        },
        RW: function () {
          return o;
        },
        aQ: function () {
          return s;
        },
        px: function () {
          return a;
        },
        vh: function () {
          return l;
        },
        vw: function () {
          return u;
        },
      });
      var n = r(7292);
      let i = (e) => ({
          test: (t) =>
            (0, n.HD)(t) && t.endsWith(e) && 1 === t.split(" ").length,
          parse: parseFloat,
          transform: (t) => `${t}${e}`,
        }),
        o = i("deg"),
        s = i("%"),
        a = i("px"),
        l = i("vh"),
        u = i("vw"),
        c = {
          ...s,
          parse: (e) => s.parse(e) / 100,
          transform: (e) => s.transform(100 * e),
        };
    },
    7292: function (e, t, r) {
      r.d(t, {
        HD: function () {
          return a;
        },
        KP: function () {
          return i;
        },
        Nw: function () {
          return n;
        },
        dA: function () {
          return o;
        },
        mj: function () {
          return s;
        },
      });
      let n = (e) => Math.round(1e5 * e) / 1e5,
        i = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
        o =
          /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
        s =
          /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
      function a(e) {
        return "string" == typeof e;
      }
    },
    8322: function (e, t, r) {
      r.d(t, {
        i: function () {
          return n;
        },
      });
      let n = (e) => !!(e && e.getVelocity);
    },
    6164: function (e, t, r) {
      r.d(t, {
        m6: function () {
          return L;
        },
      });
      let n = /^\[(.+)\]$/;
      function i(e, t) {
        let r = e;
        return (
          t.split("-").forEach((e) => {
            r.nextPart.has(e) ||
              r.nextPart.set(e, { nextPart: new Map(), validators: [] }),
              (r = r.nextPart.get(e));
          }),
          r
        );
      }
      let o = /\s+/;
      function s() {
        let e,
          t,
          r = 0,
          n = "";
        for (; r < arguments.length; )
          (e = arguments[r++]) &&
            (t = (function e(t) {
              let r;
              if ("string" == typeof t) return t;
              let n = "";
              for (let i = 0; i < t.length; i++)
                t[i] && (r = e(t[i])) && (n && (n += " "), (n += r));
              return n;
            })(e)) &&
            (n && (n += " "), (n += t));
        return n;
      }
      function a(e) {
        let t = (t) => t[e] || [];
        return (t.isThemeGetter = !0), t;
      }
      let l = /^\[(?:([a-z-]+):)?(.+)\]$/i,
        u = /^\d+\/\d+$/,
        c = new Set(["px", "full", "screen"]),
        d = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
        h =
          /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
        p = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
        f = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
        m =
          /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
      function g(e) {
        return y(e) || c.has(e) || u.test(e);
      }
      function v(e) {
        return j(e, "length", V);
      }
      function y(e) {
        return !!e && !Number.isNaN(Number(e));
      }
      function b(e) {
        return j(e, "number", y);
      }
      function x(e) {
        return !!e && Number.isInteger(Number(e));
      }
      function w(e) {
        return e.endsWith("%") && y(e.slice(0, -1));
      }
      function P(e) {
        return l.test(e);
      }
      function S(e) {
        return d.test(e);
      }
      let E = new Set(["length", "size", "percentage"]);
      function T(e) {
        return j(e, E, O);
      }
      function A(e) {
        return j(e, "position", O);
      }
      let C = new Set(["image", "url"]);
      function R(e) {
        return j(e, C, _);
      }
      function M(e) {
        return j(e, "", D);
      }
      function k() {
        return !0;
      }
      function j(e, t, r) {
        let n = l.exec(e);
        return (
          !!n &&
          (n[1] ? ("string" == typeof t ? n[1] === t : t.has(n[1])) : r(n[2]))
        );
      }
      function V(e) {
        return h.test(e) && !p.test(e);
      }
      function O() {
        return !1;
      }
      function D(e) {
        return f.test(e);
      }
      function _(e) {
        return m.test(e);
      }
      let L = (function (e, ...t) {
        let r, a, l;
        let u = function (o) {
          var s;
          return (
            (a = (r = {
              cache: (function (e) {
                if (e < 1) return { get: () => void 0, set: () => {} };
                let t = 0,
                  r = new Map(),
                  n = new Map();
                function i(i, o) {
                  r.set(i, o), ++t > e && ((t = 0), (n = r), (r = new Map()));
                }
                return {
                  get(e) {
                    let t = r.get(e);
                    return void 0 !== t
                      ? t
                      : void 0 !== (t = n.get(e))
                      ? (i(e, t), t)
                      : void 0;
                  },
                  set(e, t) {
                    r.has(e) ? r.set(e, t) : i(e, t);
                  },
                };
              })((s = t.reduce((e, t) => t(e), e())).cacheSize),
              splitModifiers: (function (e) {
                let t = e.separator,
                  r = 1 === t.length,
                  n = t[0],
                  i = t.length;
                return function (e) {
                  let o;
                  let s = [],
                    a = 0,
                    l = 0;
                  for (let u = 0; u < e.length; u++) {
                    let c = e[u];
                    if (0 === a) {
                      if (c === n && (r || e.slice(u, u + i) === t)) {
                        s.push(e.slice(l, u)), (l = u + i);
                        continue;
                      }
                      if ("/" === c) {
                        o = u;
                        continue;
                      }
                    }
                    "[" === c ? a++ : "]" === c && a--;
                  }
                  let u = 0 === s.length ? e : e.substring(l),
                    c = u.startsWith("!"),
                    d = c ? u.substring(1) : u;
                  return {
                    modifiers: s,
                    hasImportantModifier: c,
                    baseClassName: d,
                    maybePostfixModifierPosition: o && o > l ? o - l : void 0,
                  };
                };
              })(s),
              ...(function (e) {
                let t = (function (e) {
                    var t;
                    let { theme: r, prefix: n } = e,
                      o = { nextPart: new Map(), validators: [] };
                    return (
                      ((t = Object.entries(e.classGroups)),
                      n
                        ? t.map(([e, t]) => [
                            e,
                            t.map((e) =>
                              "string" == typeof e
                                ? n + e
                                : "object" == typeof e
                                ? Object.fromEntries(
                                    Object.entries(e).map(([e, t]) => [
                                      n + e,
                                      t,
                                    ])
                                  )
                                : e
                            ),
                          ])
                        : t).forEach(([e, t]) => {
                        (function e(t, r, n, o) {
                          t.forEach((t) => {
                            if ("string" == typeof t) {
                              ("" === t ? r : i(r, t)).classGroupId = n;
                              return;
                            }
                            if ("function" == typeof t) {
                              if (t.isThemeGetter) {
                                e(t(o), r, n, o);
                                return;
                              }
                              r.validators.push({
                                validator: t,
                                classGroupId: n,
                              });
                              return;
                            }
                            Object.entries(t).forEach(([t, s]) => {
                              e(s, i(r, t), n, o);
                            });
                          });
                        })(t, o, e, r);
                      }),
                      o
                    );
                  })(e),
                  {
                    conflictingClassGroups: r,
                    conflictingClassGroupModifiers: o,
                  } = e;
                return {
                  getClassGroupId: function (e) {
                    let r = e.split("-");
                    return (
                      "" === r[0] && 1 !== r.length && r.shift(),
                      (function e(t, r) {
                        if (0 === t.length) return r.classGroupId;
                        let n = t[0],
                          i = r.nextPart.get(n),
                          o = i ? e(t.slice(1), i) : void 0;
                        if (o) return o;
                        if (0 === r.validators.length) return;
                        let s = t.join("-");
                        return r.validators.find(({ validator: e }) => e(s))
                          ?.classGroupId;
                      })(r, t) ||
                        (function (e) {
                          if (n.test(e)) {
                            let t = n.exec(e)[1],
                              r = t?.substring(0, t.indexOf(":"));
                            if (r) return "arbitrary.." + r;
                          }
                        })(e)
                    );
                  },
                  getConflictingClassGroupIds: function (e, t) {
                    let n = r[e] || [];
                    return t && o[e] ? [...n, ...o[e]] : n;
                  },
                };
              })(s),
            }).cache.get),
            (l = r.cache.set),
            (u = c),
            c(o)
          );
        };
        function c(e) {
          let t = a(e);
          if (t) return t;
          let n = (function (e, t) {
            let {
                splitModifiers: r,
                getClassGroupId: n,
                getConflictingClassGroupIds: i,
              } = t,
              s = new Set();
            return e
              .trim()
              .split(o)
              .map((e) => {
                let {
                    modifiers: t,
                    hasImportantModifier: i,
                    baseClassName: o,
                    maybePostfixModifierPosition: s,
                  } = r(e),
                  a = n(s ? o.substring(0, s) : o),
                  l = !!s;
                if (!a) {
                  if (!s || !(a = n(o)))
                    return { isTailwindClass: !1, originalClassName: e };
                  l = !1;
                }
                let u = (function (e) {
                  if (e.length <= 1) return e;
                  let t = [],
                    r = [];
                  return (
                    e.forEach((e) => {
                      "[" === e[0]
                        ? (t.push(...r.sort(), e), (r = []))
                        : r.push(e);
                    }),
                    t.push(...r.sort()),
                    t
                  );
                })(t).join(":");
                return {
                  isTailwindClass: !0,
                  modifierId: i ? u + "!" : u,
                  classGroupId: a,
                  originalClassName: e,
                  hasPostfixModifier: l,
                };
              })
              .reverse()
              .filter((e) => {
                if (!e.isTailwindClass) return !0;
                let {
                    modifierId: t,
                    classGroupId: r,
                    hasPostfixModifier: n,
                  } = e,
                  o = t + r;
                return (
                  !s.has(o) &&
                  (s.add(o), i(r, n).forEach((e) => s.add(t + e)), !0)
                );
              })
              .reverse()
              .map((e) => e.originalClassName)
              .join(" ");
          })(e, r);
          return l(e, n), n;
        }
        return function () {
          return u(s.apply(null, arguments));
        };
      })(function () {
        let e = a("colors"),
          t = a("spacing"),
          r = a("blur"),
          n = a("brightness"),
          i = a("borderColor"),
          o = a("borderRadius"),
          s = a("borderSpacing"),
          l = a("borderWidth"),
          u = a("contrast"),
          c = a("grayscale"),
          d = a("hueRotate"),
          h = a("invert"),
          p = a("gap"),
          f = a("gradientColorStops"),
          m = a("gradientColorStopPositions"),
          E = a("inset"),
          C = a("margin"),
          j = a("opacity"),
          V = a("padding"),
          O = a("saturate"),
          D = a("scale"),
          _ = a("sepia"),
          L = a("skew"),
          I = a("space"),
          N = a("translate"),
          F = () => ["auto", "contain", "none"],
          B = () => ["auto", "hidden", "clip", "visible", "scroll"],
          z = () => ["auto", P, t],
          U = () => [P, t],
          $ = () => ["", g, v],
          W = () => ["auto", y, P],
          X = () => [
            "bottom",
            "center",
            "left",
            "left-bottom",
            "left-top",
            "right",
            "right-bottom",
            "right-top",
            "top",
          ],
          H = () => ["solid", "dashed", "dotted", "double", "none"],
          G = () => [
            "normal",
            "multiply",
            "screen",
            "overlay",
            "darken",
            "lighten",
            "color-dodge",
            "color-burn",
            "hard-light",
            "soft-light",
            "difference",
            "exclusion",
            "hue",
            "saturation",
            "color",
            "luminosity",
          ],
          K = () => [
            "start",
            "end",
            "center",
            "between",
            "around",
            "evenly",
            "stretch",
          ],
          Y = () => ["", "0", P],
          Z = () => [
            "auto",
            "avoid",
            "all",
            "avoid-page",
            "page",
            "left",
            "right",
            "column",
          ],
          q = () => [y, b],
          Q = () => [y, P];
        return {
          cacheSize: 500,
          separator: ":",
          theme: {
            colors: [k],
            spacing: [g, v],
            blur: ["none", "", S, P],
            brightness: q(),
            borderColor: [e],
            borderRadius: ["none", "", "full", S, P],
            borderSpacing: U(),
            borderWidth: $(),
            contrast: q(),
            grayscale: Y(),
            hueRotate: Q(),
            invert: Y(),
            gap: U(),
            gradientColorStops: [e],
            gradientColorStopPositions: [w, v],
            inset: z(),
            margin: z(),
            opacity: q(),
            padding: U(),
            saturate: q(),
            scale: q(),
            sepia: Y(),
            skew: Q(),
            space: U(),
            translate: U(),
          },
          classGroups: {
            aspect: [{ aspect: ["auto", "square", "video", P] }],
            container: ["container"],
            columns: [{ columns: [S] }],
            "break-after": [{ "break-after": Z() }],
            "break-before": [{ "break-before": Z() }],
            "break-inside": [
              {
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"],
              },
            ],
            "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
            box: [{ box: ["border", "content"] }],
            display: [
              "block",
              "inline-block",
              "inline",
              "flex",
              "inline-flex",
              "table",
              "inline-table",
              "table-caption",
              "table-cell",
              "table-column",
              "table-column-group",
              "table-footer-group",
              "table-header-group",
              "table-row-group",
              "table-row",
              "flow-root",
              "grid",
              "inline-grid",
              "contents",
              "list-item",
              "hidden",
            ],
            float: [{ float: ["right", "left", "none", "start", "end"] }],
            clear: [
              { clear: ["left", "right", "both", "none", "start", "end"] },
            ],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [
              { object: ["contain", "cover", "fill", "none", "scale-down"] },
            ],
            "object-position": [{ object: [...X(), P] }],
            overflow: [{ overflow: B() }],
            "overflow-x": [{ "overflow-x": B() }],
            "overflow-y": [{ "overflow-y": B() }],
            overscroll: [{ overscroll: F() }],
            "overscroll-x": [{ "overscroll-x": F() }],
            "overscroll-y": [{ "overscroll-y": F() }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{ inset: [E] }],
            "inset-x": [{ "inset-x": [E] }],
            "inset-y": [{ "inset-y": [E] }],
            start: [{ start: [E] }],
            end: [{ end: [E] }],
            top: [{ top: [E] }],
            right: [{ right: [E] }],
            bottom: [{ bottom: [E] }],
            left: [{ left: [E] }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{ z: ["auto", x, P] }],
            basis: [{ basis: z() }],
            "flex-direction": [
              { flex: ["row", "row-reverse", "col", "col-reverse"] },
            ],
            "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
            flex: [{ flex: ["1", "auto", "initial", "none", P] }],
            grow: [{ grow: Y() }],
            shrink: [{ shrink: Y() }],
            order: [{ order: ["first", "last", "none", x, P] }],
            "grid-cols": [{ "grid-cols": [k] }],
            "col-start-end": [{ col: ["auto", { span: ["full", x, P] }, P] }],
            "col-start": [{ "col-start": W() }],
            "col-end": [{ "col-end": W() }],
            "grid-rows": [{ "grid-rows": [k] }],
            "row-start-end": [{ row: ["auto", { span: [x, P] }, P] }],
            "row-start": [{ "row-start": W() }],
            "row-end": [{ "row-end": W() }],
            "grid-flow": [
              {
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"],
              },
            ],
            "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", P] }],
            "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", P] }],
            gap: [{ gap: [p] }],
            "gap-x": [{ "gap-x": [p] }],
            "gap-y": [{ "gap-y": [p] }],
            "justify-content": [{ justify: ["normal", ...K()] }],
            "justify-items": [
              { "justify-items": ["start", "end", "center", "stretch"] },
            ],
            "justify-self": [
              { "justify-self": ["auto", "start", "end", "center", "stretch"] },
            ],
            "align-content": [{ content: ["normal", ...K(), "baseline"] }],
            "align-items": [
              { items: ["start", "end", "center", "baseline", "stretch"] },
            ],
            "align-self": [
              {
                self: ["auto", "start", "end", "center", "stretch", "baseline"],
              },
            ],
            "place-content": [{ "place-content": [...K(), "baseline"] }],
            "place-items": [
              {
                "place-items": [
                  "start",
                  "end",
                  "center",
                  "baseline",
                  "stretch",
                ],
              },
            ],
            "place-self": [
              { "place-self": ["auto", "start", "end", "center", "stretch"] },
            ],
            p: [{ p: [V] }],
            px: [{ px: [V] }],
            py: [{ py: [V] }],
            ps: [{ ps: [V] }],
            pe: [{ pe: [V] }],
            pt: [{ pt: [V] }],
            pr: [{ pr: [V] }],
            pb: [{ pb: [V] }],
            pl: [{ pl: [V] }],
            m: [{ m: [C] }],
            mx: [{ mx: [C] }],
            my: [{ my: [C] }],
            ms: [{ ms: [C] }],
            me: [{ me: [C] }],
            mt: [{ mt: [C] }],
            mr: [{ mr: [C] }],
            mb: [{ mb: [C] }],
            ml: [{ ml: [C] }],
            "space-x": [{ "space-x": [I] }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{ "space-y": [I] }],
            "space-y-reverse": ["space-y-reverse"],
            w: [
              { w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", P, t] },
            ],
            "min-w": [{ "min-w": [P, t, "min", "max", "fit"] }],
            "max-w": [
              {
                "max-w": [
                  P,
                  t,
                  "none",
                  "full",
                  "min",
                  "max",
                  "fit",
                  "prose",
                  { screen: [S] },
                  S,
                ],
              },
            ],
            h: [
              { h: [P, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] },
            ],
            "min-h": [
              { "min-h": [P, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
            ],
            "max-h": [
              { "max-h": [P, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
            ],
            size: [{ size: [P, t, "auto", "min", "max", "fit"] }],
            "font-size": [{ text: ["base", S, v] }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [
              {
                font: [
                  "thin",
                  "extralight",
                  "light",
                  "normal",
                  "medium",
                  "semibold",
                  "bold",
                  "extrabold",
                  "black",
                  b,
                ],
              },
            ],
            "font-family": [{ font: [k] }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
            tracking: [
              {
                tracking: [
                  "tighter",
                  "tight",
                  "normal",
                  "wide",
                  "wider",
                  "widest",
                  P,
                ],
              },
            ],
            "line-clamp": [{ "line-clamp": ["none", y, b] }],
            leading: [
              {
                leading: [
                  "none",
                  "tight",
                  "snug",
                  "normal",
                  "relaxed",
                  "loose",
                  g,
                  P,
                ],
              },
            ],
            "list-image": [{ "list-image": ["none", P] }],
            "list-style-type": [{ list: ["none", "disc", "decimal", P] }],
            "list-style-position": [{ list: ["inside", "outside"] }],
            "placeholder-color": [{ placeholder: [e] }],
            "placeholder-opacity": [{ "placeholder-opacity": [j] }],
            "text-alignment": [
              { text: ["left", "center", "right", "justify", "start", "end"] },
            ],
            "text-color": [{ text: [e] }],
            "text-opacity": [{ "text-opacity": [j] }],
            "text-decoration": [
              "underline",
              "overline",
              "line-through",
              "no-underline",
            ],
            "text-decoration-style": [{ decoration: [...H(), "wavy"] }],
            "text-decoration-thickness": [
              { decoration: ["auto", "from-font", g, v] },
            ],
            "underline-offset": [{ "underline-offset": ["auto", g, P] }],
            "text-decoration-color": [{ decoration: [e] }],
            "text-transform": [
              "uppercase",
              "lowercase",
              "capitalize",
              "normal-case",
            ],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
            indent: [{ indent: U() }],
            "vertical-align": [
              {
                align: [
                  "baseline",
                  "top",
                  "middle",
                  "bottom",
                  "text-top",
                  "text-bottom",
                  "sub",
                  "super",
                  P,
                ],
              },
            ],
            whitespace: [
              {
                whitespace: [
                  "normal",
                  "nowrap",
                  "pre",
                  "pre-line",
                  "pre-wrap",
                  "break-spaces",
                ],
              },
            ],
            break: [{ break: ["normal", "words", "all", "keep"] }],
            hyphens: [{ hyphens: ["none", "manual", "auto"] }],
            content: [{ content: ["none", P] }],
            "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
            "bg-clip": [
              { "bg-clip": ["border", "padding", "content", "text"] },
            ],
            "bg-opacity": [{ "bg-opacity": [j] }],
            "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
            "bg-position": [{ bg: [...X(), A] }],
            "bg-repeat": [
              {
                bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }],
              },
            ],
            "bg-size": [{ bg: ["auto", "cover", "contain", T] }],
            "bg-image": [
              {
                bg: [
                  "none",
                  {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"],
                  },
                  R,
                ],
              },
            ],
            "bg-color": [{ bg: [e] }],
            "gradient-from-pos": [{ from: [m] }],
            "gradient-via-pos": [{ via: [m] }],
            "gradient-to-pos": [{ to: [m] }],
            "gradient-from": [{ from: [f] }],
            "gradient-via": [{ via: [f] }],
            "gradient-to": [{ to: [f] }],
            rounded: [{ rounded: [o] }],
            "rounded-s": [{ "rounded-s": [o] }],
            "rounded-e": [{ "rounded-e": [o] }],
            "rounded-t": [{ "rounded-t": [o] }],
            "rounded-r": [{ "rounded-r": [o] }],
            "rounded-b": [{ "rounded-b": [o] }],
            "rounded-l": [{ "rounded-l": [o] }],
            "rounded-ss": [{ "rounded-ss": [o] }],
            "rounded-se": [{ "rounded-se": [o] }],
            "rounded-ee": [{ "rounded-ee": [o] }],
            "rounded-es": [{ "rounded-es": [o] }],
            "rounded-tl": [{ "rounded-tl": [o] }],
            "rounded-tr": [{ "rounded-tr": [o] }],
            "rounded-br": [{ "rounded-br": [o] }],
            "rounded-bl": [{ "rounded-bl": [o] }],
            "border-w": [{ border: [l] }],
            "border-w-x": [{ "border-x": [l] }],
            "border-w-y": [{ "border-y": [l] }],
            "border-w-s": [{ "border-s": [l] }],
            "border-w-e": [{ "border-e": [l] }],
            "border-w-t": [{ "border-t": [l] }],
            "border-w-r": [{ "border-r": [l] }],
            "border-w-b": [{ "border-b": [l] }],
            "border-w-l": [{ "border-l": [l] }],
            "border-opacity": [{ "border-opacity": [j] }],
            "border-style": [{ border: [...H(), "hidden"] }],
            "divide-x": [{ "divide-x": [l] }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{ "divide-y": [l] }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{ "divide-opacity": [j] }],
            "divide-style": [{ divide: H() }],
            "border-color": [{ border: [i] }],
            "border-color-x": [{ "border-x": [i] }],
            "border-color-y": [{ "border-y": [i] }],
            "border-color-t": [{ "border-t": [i] }],
            "border-color-r": [{ "border-r": [i] }],
            "border-color-b": [{ "border-b": [i] }],
            "border-color-l": [{ "border-l": [i] }],
            "divide-color": [{ divide: [i] }],
            "outline-style": [{ outline: ["", ...H()] }],
            "outline-offset": [{ "outline-offset": [g, P] }],
            "outline-w": [{ outline: [g, v] }],
            "outline-color": [{ outline: [e] }],
            "ring-w": [{ ring: $() }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{ ring: [e] }],
            "ring-opacity": [{ "ring-opacity": [j] }],
            "ring-offset-w": [{ "ring-offset": [g, v] }],
            "ring-offset-color": [{ "ring-offset": [e] }],
            shadow: [{ shadow: ["", "inner", "none", S, M] }],
            "shadow-color": [{ shadow: [k] }],
            opacity: [{ opacity: [j] }],
            "mix-blend": [
              { "mix-blend": [...G(), "plus-lighter", "plus-darker"] },
            ],
            "bg-blend": [{ "bg-blend": G() }],
            filter: [{ filter: ["", "none"] }],
            blur: [{ blur: [r] }],
            brightness: [{ brightness: [n] }],
            contrast: [{ contrast: [u] }],
            "drop-shadow": [{ "drop-shadow": ["", "none", S, P] }],
            grayscale: [{ grayscale: [c] }],
            "hue-rotate": [{ "hue-rotate": [d] }],
            invert: [{ invert: [h] }],
            saturate: [{ saturate: [O] }],
            sepia: [{ sepia: [_] }],
            "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
            "backdrop-blur": [{ "backdrop-blur": [r] }],
            "backdrop-brightness": [{ "backdrop-brightness": [n] }],
            "backdrop-contrast": [{ "backdrop-contrast": [u] }],
            "backdrop-grayscale": [{ "backdrop-grayscale": [c] }],
            "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [d] }],
            "backdrop-invert": [{ "backdrop-invert": [h] }],
            "backdrop-opacity": [{ "backdrop-opacity": [j] }],
            "backdrop-saturate": [{ "backdrop-saturate": [O] }],
            "backdrop-sepia": [{ "backdrop-sepia": [_] }],
            "border-collapse": [{ border: ["collapse", "separate"] }],
            "border-spacing": [{ "border-spacing": [s] }],
            "border-spacing-x": [{ "border-spacing-x": [s] }],
            "border-spacing-y": [{ "border-spacing-y": [s] }],
            "table-layout": [{ table: ["auto", "fixed"] }],
            caption: [{ caption: ["top", "bottom"] }],
            transition: [
              {
                transition: [
                  "none",
                  "all",
                  "",
                  "colors",
                  "opacity",
                  "shadow",
                  "transform",
                  P,
                ],
              },
            ],
            duration: [{ duration: Q() }],
            ease: [{ ease: ["linear", "in", "out", "in-out", P] }],
            delay: [{ delay: Q() }],
            animate: [
              { animate: ["none", "spin", "ping", "pulse", "bounce", P] },
            ],
            transform: [{ transform: ["", "gpu", "none"] }],
            scale: [{ scale: [D] }],
            "scale-x": [{ "scale-x": [D] }],
            "scale-y": [{ "scale-y": [D] }],
            rotate: [{ rotate: [x, P] }],
            "translate-x": [{ "translate-x": [N] }],
            "translate-y": [{ "translate-y": [N] }],
            "skew-x": [{ "skew-x": [L] }],
            "skew-y": [{ "skew-y": [L] }],
            "transform-origin": [
              {
                origin: [
                  "center",
                  "top",
                  "top-right",
                  "right",
                  "bottom-right",
                  "bottom",
                  "bottom-left",
                  "left",
                  "top-left",
                  P,
                ],
              },
            ],
            accent: [{ accent: ["auto", e] }],
            appearance: [{ appearance: ["none", "auto"] }],
            cursor: [
              {
                cursor: [
                  "auto",
                  "default",
                  "pointer",
                  "wait",
                  "text",
                  "move",
                  "help",
                  "not-allowed",
                  "none",
                  "context-menu",
                  "progress",
                  "cell",
                  "crosshair",
                  "vertical-text",
                  "alias",
                  "copy",
                  "no-drop",
                  "grab",
                  "grabbing",
                  "all-scroll",
                  "col-resize",
                  "row-resize",
                  "n-resize",
                  "e-resize",
                  "s-resize",
                  "w-resize",
                  "ne-resize",
                  "nw-resize",
                  "se-resize",
                  "sw-resize",
                  "ew-resize",
                  "ns-resize",
                  "nesw-resize",
                  "nwse-resize",
                  "zoom-in",
                  "zoom-out",
                  P,
                ],
              },
            ],
            "caret-color": [{ caret: [e] }],
            "pointer-events": [{ "pointer-events": ["none", "auto"] }],
            resize: [{ resize: ["none", "y", "x", ""] }],
            "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
            "scroll-m": [{ "scroll-m": U() }],
            "scroll-mx": [{ "scroll-mx": U() }],
            "scroll-my": [{ "scroll-my": U() }],
            "scroll-ms": [{ "scroll-ms": U() }],
            "scroll-me": [{ "scroll-me": U() }],
            "scroll-mt": [{ "scroll-mt": U() }],
            "scroll-mr": [{ "scroll-mr": U() }],
            "scroll-mb": [{ "scroll-mb": U() }],
            "scroll-ml": [{ "scroll-ml": U() }],
            "scroll-p": [{ "scroll-p": U() }],
            "scroll-px": [{ "scroll-px": U() }],
            "scroll-py": [{ "scroll-py": U() }],
            "scroll-ps": [{ "scroll-ps": U() }],
            "scroll-pe": [{ "scroll-pe": U() }],
            "scroll-pt": [{ "scroll-pt": U() }],
            "scroll-pr": [{ "scroll-pr": U() }],
            "scroll-pb": [{ "scroll-pb": U() }],
            "scroll-pl": [{ "scroll-pl": U() }],
            "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
            "snap-stop": [{ snap: ["normal", "always"] }],
            "snap-type": [{ snap: ["none", "x", "y", "both"] }],
            "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
            touch: [{ touch: ["auto", "none", "manipulation"] }],
            "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
            "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{ select: ["none", "text", "all", "auto"] }],
            "will-change": [
              { "will-change": ["auto", "scroll", "contents", "transform", P] },
            ],
            fill: [{ fill: [e, "none"] }],
            "stroke-w": [{ stroke: [g, v, b] }],
            stroke: [{ stroke: [e, "none"] }],
            sr: ["sr-only", "not-sr-only"],
            "forced-color-adjust": [
              { "forced-color-adjust": ["auto", "none"] },
            ],
          },
          conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: [
              "inset-x",
              "inset-y",
              "start",
              "end",
              "top",
              "right",
              "bottom",
              "left",
            ],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": [
              "fvn-ordinal",
              "fvn-slashed-zero",
              "fvn-figure",
              "fvn-spacing",
              "fvn-fraction",
            ],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: [
              "rounded-s",
              "rounded-e",
              "rounded-t",
              "rounded-r",
              "rounded-b",
              "rounded-l",
              "rounded-ss",
              "rounded-se",
              "rounded-ee",
              "rounded-es",
              "rounded-tl",
              "rounded-tr",
              "rounded-br",
              "rounded-bl",
            ],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": [
              "border-w-s",
              "border-w-e",
              "border-w-t",
              "border-w-r",
              "border-w-b",
              "border-w-l",
            ],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": [
              "border-color-t",
              "border-color-r",
              "border-color-b",
              "border-color-l",
            ],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": [
              "scroll-mx",
              "scroll-my",
              "scroll-ms",
              "scroll-me",
              "scroll-mt",
              "scroll-mr",
              "scroll-mb",
              "scroll-ml",
            ],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": [
              "scroll-px",
              "scroll-py",
              "scroll-ps",
              "scroll-pe",
              "scroll-pt",
              "scroll-pr",
              "scroll-pb",
              "scroll-pl",
            ],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"],
          },
          conflictingClassGroupModifiers: { "font-size": ["leading"] },
        };
      });
    },
  },
]);
