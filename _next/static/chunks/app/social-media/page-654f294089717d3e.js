(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [40],
  {
    6778: function (e, t, r) {
      Promise.resolve().then(r.bind(r, 2745)),
        Promise.resolve().then(r.bind(r, 6723)),
        Promise.resolve().then(r.t.bind(r, 8173, 23)),
        Promise.resolve().then(r.t.bind(r, 231, 23)),
        Promise.resolve().then(r.t.bind(r, 3003, 23));
    },
    2745: function (e, t, r) {
      "use strict";
      var n = r(7437),
        i = r(2265),
        o = r(1942);
      let l = [
        "https://twitter.com/",
        "twitter.com/",
        "https://x.com/",
        "x.com/",
        "https://t.me/",
        "t.me/",
        "https://telegram.me/",
        "telegram.me/",
        "https://t.me/",
        "https://telegram.me/",
        "BANK_KRYPTO",
        "https://t.me/",
        "t.me/",
        "everethdev",
        "https://telegram.me/",
        "telegram.me/",
        "https://t.me/",
        "https://telegram.me/",
        "berlingoose",
        "EverETHofficial",
        "https://evereth.net/",
        "https://evereth.net/reflect",
        "https://t.me/",
        "morpheusETH",
      ];
      t.default = () => {
        let [e, t] = (0, i.useState)(""),
          [r, c] = (0, i.useState)(null);
        return (0, n.jsx)("section", {
          className: "flex flex-col items-center justify-center mb-8",
          children: (0, n.jsxs)("div", {
            className: "max-w-md w-full",
            children: [
              (0, n.jsx)("h2", {
                className: "text-3xl font-bold text-center mb-6",
                children: "Link/Username Validator",
              }),
              (0, n.jsx)("p", {
                className:
                  "underline decoration-red-500 text-center text-neutral-300 mb-6",
                children:
                  "Avoid getting scammed by checking if you are in the right social media groups and talking with the right people.",
              }),
              (0, n.jsxs)("form", {
                onSubmit: (t) => {
                  t.preventDefault(), c(l.includes(e));
                },
                className: "flex items-center justify-center",
                children: [
                  (0, n.jsx)("input", {
                    type: "text",
                    value: e,
                    onChange: (e) => {
                      t(e.target.value), c(null);
                    },
                    placeholder: "Enter a link to validate",
                    className:
                      "w-full rounded-l-xl border border-gray-300 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500",
                  }),
                  (0, n.jsx)("button", {
                    type: "submit",
                    className:
                      "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-xl",
                    children: "Check Authenticity",
                  }),
                ],
              }),
              (0, n.jsx)("div", {
                className: "mt-4 flex items-center justify-center",
                children:
                  null === r
                    ? (0, n.jsx)("span", {
                        children:
                          "Enter a link or Telegram username to validate",
                      })
                    : r
                    ? (0, n.jsxs)("div", {
                        className: "flex items-center text-green-500",
                        children: [
                          (0, n.jsx)(o.l_A, { className: "mr-2" }),
                          " Valid Link/Username",
                        ],
                      })
                    : (0, n.jsxs)("div", {
                        className: "flex items-center text-red-500",
                        children: [
                          (0, n.jsx)(o.aHS, { className: "mr-2" }),
                          " Invalid Link/Username",
                        ],
                      }),
              }),
            ],
          }),
        });
      };
    },
    1810: function (e, t, r) {
      "use strict";
      r.d(t, {
        w_: function () {
          return m;
        },
      });
      var n = r(2265),
        i = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        o = n.createContext && n.createContext(i),
        l = ["attr", "size", "title"];
      function c() {
        return (c = Object.assign
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
      function s(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function a(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? s(Object(r), !0).forEach(function (t) {
                var n, i;
                (n = t),
                  (i = r[t]),
                  (n = (function (e) {
                    var t = (function (e, t) {
                      if ("object" != typeof e || !e) return e;
                      var r = e[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" != typeof n) return n;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === t ? String : Number)(e);
                    })(e, "string");
                    return "symbol" == typeof t ? t : t + "";
                  })(n)) in e
                    ? Object.defineProperty(e, n, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (e[n] = i);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : s(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function m(e) {
        return (t) =>
          n.createElement(
            f,
            c({ attr: a({}, e.attr) }, t),
            (function e(t) {
              return (
                t &&
                t.map((t, r) =>
                  n.createElement(t.tag, a({ key: r }, t.attr), e(t.child))
                )
              );
            })(e.child)
          );
      }
      function f(e) {
        var t = (t) => {
          var r,
            { attr: i, size: o, title: s } = e,
            m = (function (e, t) {
              if (null == e) return {};
              var r,
                n,
                i = (function (e, t) {
                  if (null == e) return {};
                  var r = {};
                  for (var n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                      if (t.indexOf(n) >= 0) continue;
                      r[n] = e[n];
                    }
                  return r;
                })(e, t);
              if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (n = 0; n < o.length; n++)
                  (r = o[n]),
                    !(t.indexOf(r) >= 0) &&
                      Object.prototype.propertyIsEnumerable.call(e, r) &&
                      (i[r] = e[r]);
              }
              return i;
            })(e, l),
            f = o || t.size || "1em";
          return (
            t.className && (r = t.className),
            e.className && (r = (r ? r + " " : "") + e.className),
            n.createElement(
              "svg",
              c(
                {
                  stroke: "currentColor",
                  fill: "currentColor",
                  strokeWidth: "0",
                },
                t.attr,
                i,
                m,
                {
                  className: r,
                  style: a(a({ color: e.color || t.color }, t.style), e.style),
                  height: f,
                  width: f,
                  xmlns: "http://www.w3.org/2000/svg",
                }
              ),
              s && n.createElement("title", null, s),
              e.children
            )
          );
        };
        return void 0 !== o
          ? n.createElement(o.Consumer, null, (e) => t(e))
          : t(i);
      }
    },
  },
  function (e) {
    e.O(0, [265, 699, 600, 984, 971, 23, 744], function () {
      return e((e.s = 6778));
    }),
      (_N_E = e.O());
  },
]);
