(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [931],
  {
    7200: function (e, t, s) {
      Promise.resolve().then(s.bind(s, 3158)),
        Promise.resolve().then(s.bind(s, 3362)),
        Promise.resolve().then(s.bind(s, 6723)),
        Promise.resolve().then(s.bind(s, 8609)),
        Promise.resolve().then(s.bind(s, 931)),
        Promise.resolve().then(s.bind(s, 6013)),
        Promise.resolve().then(s.t.bind(s, 8173, 23)),
        Promise.resolve().then(s.t.bind(s, 231, 23)),
        Promise.resolve().then(s.t.bind(s, 3003, 23)),
        Promise.resolve().then(s.t.bind(s, 2268, 23)),
        Promise.resolve().then(s.t.bind(s, 197, 23)),
        Promise.resolve().then(s.t.bind(s, 1083, 23));
    },
    3158: function (e, t, s) {
      "use strict";
      var l = s(7437),
        r = s(2265),
        n = s(6648);
      s(892);
      let i = (e) => {
        let {
            title: t,
            description: s,
            image: i,
            large: a,
            imageWidth: o = 250,
            imageHeight: c = 250,
            imagePosition: d = "self-center",
          } = e,
          u = (0, r.useRef)(null),
          h = (0, r.useRef)(null),
          x = (0, r.useRef)(null),
          [m, p] = (0, r.useState)(!1);
        return (0, l.jsxs)("div", {
          ref: u,
          className: "noti ".concat(
            a ? "2xl:w-[570px]" : "2xl:w-[300px]",
            " h-[400px] p-6 relative flex flex-col"
          ),
          onMouseMove: (e) => {
            let t = u.current,
              s = h.current,
              l = x.current;
            if (t) {
              let r = t.getBoundingClientRect(),
                n = (e.clientX - r.left) / r.width,
                i = (e.clientY - r.top) / r.height;
              (s.style.left = 100 * n + "%"),
                (s.style.top = 100 * i + "%"),
                (l.style.left = 100 * n + "%"),
                (l.style.top = 100 * i + "%"),
                m
                  ? ((s.style.transition =
                      "inset 50ms linear, opacity 300ms ease"),
                    (l.style.transition =
                      "inset 50ms linear, opacity 300ms ease"))
                  : ((s.style.transition = "opacity 300ms ease"),
                    (l.style.transition = "opacity 300ms ease")),
                p(!1);
            }
          },
          onMouseOut: () => {
            p(!0);
          },
          children: [
            (0, l.jsx)("div", { ref: h, className: "notiglow" }),
            (0, l.jsx)("div", { ref: x, className: "notiborderglow" }),
            (0, l.jsxs)("div", {
              className: "z-20 flex-grow",
              children: [
                (0, l.jsx)("h3", { className: "card_title", children: t }),
                (0, l.jsx)("p", {
                  className: "card_describe mt-2",
                  children: s,
                }),
              ],
            }),
            (0, l.jsx)("div", {
              className: "image-container mt-20 ".concat(d),
              children: (0, l.jsx)(n.default, {
                src: i,
                alt: t,
                width: o,
                height: c,
              }),
            }),
          ],
        });
      };
      t.default = () =>
        (0, l.jsxs)("div", {
          className:
            "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-6 justify-center",
          children: [
            (0, l.jsx)("div", {
              className:
                "lg:col-span-1 xl:col-span-1 2xl:col-span-1 md:col-span-1 sm:col-span-1",
              children: (0, l.jsx)(i, {
                title: "Governance.",
                description:
                  "EETH holders can participate in governing the EternETH project and suggest/vote on new proposals in our DAO.",
                image: "/ownership.svg",
              }),
            }),
            (0, l.jsx)("div", {
              className:
                "lg:col-span-2 xl:col-span-2 2xl:col-span-2 md:col-span -2 sm:col-span-2",
              children: (0, l.jsx)(i, {
                title: "Monthly Dividends.",
                description:
                  "Project fees are used monthly to buy EETH tokens from the market and distribute them as dividends to token holders, proportional to each holder's percentage of total supply.",
                image: "/dividends-magic.svg",
                large: !0,
                imageWidth: 400,
                imageHeight: 300,
                imagePosition: "bottom-right",
              }),
            }),
          ],
        });
    },
    3362: function (e, t, s) {
      "use strict";
      s.d(t, {
        GoogleGeminiEffectDemo: function () {
          return u;
        },
      });
      var l = s(7437),
        r = s(1871),
        n = s(847),
        i = s(2265),
        a = s(7934),
        o = s(6956);
      let c = { duration: 0, ease: "linear" },
        d = (e) => {
          let { pathLengths: t, title: s, description: r, className: n } = e;
          return (0, l.jsxs)("div", {
            className: (0, a.cn)("sticky top-80", n),
            children: [
              (0, l.jsx)("p", {
                className:
                  "text-2xl md:text-7xl font-bold font-inter pb-4 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-300 sm:text-4xl",
                children:
                  s ||
                  (0, l.jsxs)(l.Fragment, {
                    children: [
                      "Revenue for the ",
                      (0, l.jsx)("span", {
                        className: "text-teal-500",
                        children: "community.",
                      }),
                    ],
                  }),
              }),
              (0, l.jsx)("p", {
                className:
                  "text-sm md:text-xl font-normal text-center text-neutral-400 mt-4 max-w-lg mx-auto sm:text-lg",
                children:
                  r ||
                  "A portion of EternETH project revenue funds dividend payments for EETH token holders.",
              }),
              (0, l.jsx)("div", {
                className:
                  "w-full h-[890px] -top-60 md:-top-40 flex items-center justify-center bg-transparent absolute",
                children: (0, l.jsx)("button", {
                  className:
                    "font-bold bg-white rounded-full md:px-4 md:py-2 px-2 py-1 md:mt-24 mt-8 z-30 md:text-base text-black text-xs w-fit mx-auto",
                  children: "Dividend Tracker",
                }),
              }),
              (0, l.jsxs)("svg", {
                width: "1440",
                height: "890",
                viewBox: "0 0 1440 890",
                xmlns: "http://www.w3.org/2000/svg",
                className: " absolute -top-60  md:-top-40 w-full",
                children: [
                  (0, l.jsx)(o.E.path, {
                    d: "M0 663C145.5 663 191 666.265 269 647C326.5 630 339.5 621 397.5 566C439 531.5 455 529.5 490 523C509.664 519.348 521 503.736 538 504.236C553.591 504.236 562.429 514.739 584.66 522.749C592.042 525.408 600.2 526.237 607.356 523.019C624.755 515.195 641.446 496.324 657 496.735C673.408 496.735 693.545 519.572 712.903 526.769C718.727 528.934 725.184 528.395 730.902 525.965C751.726 517.115 764.085 497.106 782 496.735C794.831 496.47 804.103 508.859 822.469 518.515C835.13 525.171 850.214 526.815 862.827 520.069C875.952 513.049 889.748 502.706 903.5 503.736C922.677 505.171 935.293 510.562 945.817 515.673C954.234 519.76 963.095 522.792 972.199 524.954C996.012 530.611 1007.42 534.118 1034 549C1077.5 573.359 1082.5 594.5 1140 629C1206 670 1328.5 662.5 1440 662.5",
                    stroke: "#FFB7C5",
                    strokeWidth: "2",
                    fill: "none",
                    initial: { pathLength: 0 },
                    style: { pathLength: t[0] },
                    transition: c,
                  }),
                  (0, l.jsx)(o.E.path, {
                    d: "M0 587.5C147 587.5 277 587.5 310 573.5C348 563 392.5 543.5 408 535C434 523.5 426 526.235 479 515.235C494 512.729 523 510.435 534.5 512.735C554.5 516.735 555.5 523.235 576 523.735C592 523.735 616 496.735 633 497.235C648.671 497.235 661.31 515.052 684.774 524.942C692.004 527.989 700.2 528.738 707.349 525.505C724.886 517.575 741.932 498.33 757.5 498.742C773.864 498.742 791.711 520.623 810.403 527.654C816.218 529.841 822.661 529.246 828.451 526.991C849.246 518.893 861.599 502.112 879.5 501.742C886.47 501.597 896.865 506.047 907.429 510.911C930.879 521.707 957.139 519.639 982.951 520.063C1020.91 520.686 1037.5 530.797 1056.5 537C1102.24 556.627 1116.5 570.704 1180.5 579.235C1257.5 589.5 1279 587 1440 588",
                    stroke: "#FFDDB7",
                    strokeWidth: "2",
                    fill: "none",
                    initial: { pathLength: 0 },
                    style: { pathLength: t[1] },
                    transition: c,
                  }),
                  (0, l.jsx)(o.E.path, {
                    d: "M0 514C147.5 514.333 294.5 513.735 380.5 513.735C405.976 514.94 422.849 515.228 436.37 515.123C477.503 514.803 518.631 506.605 559.508 511.197C564.04 511.706 569.162 512.524 575 513.735C588 516.433 616 521.702 627.5 519.402C647.5 515.402 659 499.235 680.5 499.235C700.5 499.235 725 529.235 742 528.735C757.654 528.735 768.77 510.583 791.793 500.59C798.991 497.465 807.16 496.777 814.423 499.745C832.335 507.064 850.418 524.648 866 524.235C882.791 524.235 902.316 509.786 921.814 505.392C926.856 504.255 932.097 504.674 937.176 505.631C966.993 511.248 970.679 514.346 989.5 514.735C1006.3 515.083 1036.5 513.235 1055.5 513.235C1114.5 513.235 1090.5 513.235 1124 513.235C1177.5 513.235 1178.99 514.402 1241 514.402C1317.5 514.402 1274.5 512.568 1440 513.235",
                    stroke: "#B1C5FF",
                    strokeWidth: "2",
                    fill: "none",
                    initial: { pathLength: 0 },
                    style: { pathLength: t[2] },
                    transition: c,
                  }),
                  (0, l.jsx)(o.E.path, {
                    d: "M0 438.5C150.5 438.5 261 438.318 323.5 456.5C351 464.5 387.517 484.001 423.5 494.5C447.371 501.465 472 503.735 487 507.735C503.786 512.212 504.5 516.808 523 518.735C547 521.235 564.814 501.235 584.5 501.235C604.5 501.235 626 529.069 643 528.569C658.676 528.569 672.076 511.63 695.751 501.972C703.017 499.008 711.231 498.208 718.298 501.617C735.448 509.889 751.454 529.98 767 529.569C783.364 529.569 801.211 507.687 819.903 500.657C825.718 498.469 832.141 499.104 837.992 501.194C859.178 508.764 873.089 523.365 891 523.735C907.8 524.083 923 504.235 963 506.735C1034.5 506.735 1047.5 492.68 1071 481.5C1122.5 457 1142.23 452.871 1185 446.5C1255.5 436 1294 439 1439.5 439",
                    stroke: "#4FABFF",
                    strokeWidth: "2",
                    fill: "none",
                    initial: { pathLength: 0 },
                    style: { pathLength: t[3] },
                    transition: c,
                  }),
                  (0, l.jsx)(o.E.path, {
                    d: "M0.5 364C145.288 362.349 195 361.5 265.5 378C322 391.223 399.182 457.5 411 467.5C424.176 478.649 456.916 491.677 496.259 502.699C498.746 503.396 501.16 504.304 503.511 505.374C517.104 511.558 541.149 520.911 551.5 521.236C571.5 521.236 590 498.736 611.5 498.736C631.5 498.736 652.5 529.236 669.5 528.736C685.171 528.736 697.81 510.924 721.274 501.036C728.505 497.988 736.716 497.231 743.812 500.579C761.362 508.857 778.421 529.148 794 528.736C810.375 528.736 829.35 508.68 848.364 502.179C854.243 500.169 860.624 500.802 866.535 502.718C886.961 509.338 898.141 519.866 916 520.236C932.8 520.583 934.5 510.236 967.5 501.736C1011.5 491 1007.5 493.5 1029.5 480C1069.5 453.5 1072 440.442 1128.5 403.5C1180.5 369.5 1275 360.374 1439 364",
                    stroke: "#076EFF",
                    strokeWidth: "2",
                    fill: "none",
                    initial: { pathLength: 0 },
                    style: { pathLength: t[4] },
                    transition: c,
                  }),
                  (0, l.jsx)("path", {
                    d: "M0 663C145.5 663 191 666.265 269 647C326.5 630 339.5 621 397.5 566C439 531.5 455 529.5 490 523C509.664 519.348 521 503.736 538 504.236C553.591 504.236 562.429 514.739 584.66 522.749C592.042 525.408 600.2 526.237 607.356 523.019C624.755 515.195 641.446 496.324 657 496.735C673.408 496.735 693.545 519.572 712.903 526.769C718.727 528.934 725.184 528.395 730.902 525.965C751.726 517.115 764.085 497.106 782 496.735C794.831 496.47 804.103 508.859 822.469 518.515C835.13 525.171 850.214 526.815 862.827 520.069C875.952 513.049 889.748 502.706 903.5 503.736C922.677 505.171 935.293 510.562 945.817 515.673C954.234 519.76 963.095 522.792 972.199 524.954C996.012 530.611 1007.42 534.118 1034 549C1077.5 573.359 1082.5 594.5 1140 629C1206 670 1328.5 662.5 1440 662.5",
                    stroke: "#FFB7C5",
                    strokeWidth: "2",
                    fill: "none",
                    pathLength: 1,
                    filter: "url(#blurMe)",
                  }),
                  (0, l.jsx)("path", {
                    d: "M0 587.5C147 587.5 277 587.5 310 573.5C348 563 392.5 543.5 408 535C434 523.5 426 526.235 479 515.235C494 512.729 523 510.435 534.5 512.735C554.5 516.735 555.5 523.235 576 523.735C592 523.735 616 496.735 633 497.235C648.671 497.235 661.31 515.052 684.774 524.942C692.004 527.989 700.2 528.738 707.349 525.505C724.886 517.575 741.932 498.33 757.5 498.742C773.864 498.742 791.711 520.623 810.403 527.654C816.218 529.841 822.661 529.246 828.451 526.991C849.246 518.893 861.599 502.112 879.5 501.742C886.47 501.597 896.865 506.047 907.429 510.911C930.879 521.707 957.139 519.639 982.951 520.063C1020.91 520.686 1037.5 530.797 1056.5 537C1102.24 556.627 1116.5 570.704 1180.5 579.235C1257.5 589.5 1279 587 1440 588",
                    stroke: "#FFDDB7",
                    strokeWidth: "2",
                    fill: "none",
                    pathLength: 1,
                    filter: "url(#blurMe)",
                  }),
                  (0, l.jsx)("path", {
                    d: "M0 514C147.5 514.333 294.5 513.735 380.5 513.735C405.976 514.94 422.849 515.228 436.37 515.123C477.503 514.803 518.631 506.605 559.508 511.197C564.04 511.706 569.162 512.524 575 513.735C588 516.433 616 521.702 627.5 519.402C647.5 515.402 659 499.235 680.5 499.235C700.5 499.235 725 529.235 742 528.735C757.654 528.735 768.77 510.583 791.793 500.59C798.991 497.465 807.16 496.777 814.423 499.745C832.335 507.064 850.418 524.648 866 524.235C882.791 524.235 902.316 509.786 921.814 505.392C926.856 504.255 932.097 504.674 937.176 505.631C966.993 511.248 970.679 514.346 989.5 514.735C1006.3 515.083 1036.5 513.235 1055.5 513.235C1114.5 513.235 1090.5 513.235 1124 513.235C1177.5 513.235 1178.99 514.402 1241 514.402C1317.5 514.402 1274.5 512.568 1440 513.235",
                    stroke: "#B1C5FF",
                    strokeWidth: "2",
                    fill: "none",
                    pathLength: 1,
                    filter: "url(#blurMe)",
                  }),
                  (0, l.jsx)("path", {
                    d: "M0 438.5C150.5 438.5 261 438.318 323.5 456.5C351 464.5 387.517 484.001 423.5 494.5C447.371 501.465 472 503.735 487 507.735C503.786 512.212 504.5 516.808 523 518.735C547 521.235 564.814 501.235 584.5 501.235C604.5 501.235 626 529.069 643 528.569C658.676 528.569 672.076 511.63 695.751 501.972C703.017 499.008 711.231 498.208 718.298 501.617C735.448 509.889 751.454 529.98 767 529.569C783.364 529.569 801.211 507.687 819.903 500.657C825.718 498.469 832.141 499.104 837.992 501.194C859.178 508.764 873.089 523.365 891 523.735C907.8 524.083 923 504.235 963 506.735C1034.5 506.735 1047.5 492.68 1071 481.5C1122.5 457 1142.23 452.871 1185 446.5C1255.5 436 1294 439 1439.5 439",
                    stroke: "#4FABFF",
                    strokeWidth: "2",
                    fill: "none",
                    pathLength: 1,
                    filter: "url(#blurMe)",
                  }),
                  (0, l.jsx)("path", {
                    d: "M0.5 364C145.288 362.349 195 361.5 265.5 378C322 391.223 399.182 457.5 411 467.5C424.176 478.649 456.916 491.677 496.259 502.699C498.746 503.396 501.16 504.304 503.511 505.374C517.104 511.558 541.149 520.911 551.5 521.236C571.5 521.236 590 498.736 611.5 498.736C631.5 498.736 652.5 529.236 669.5 528.736C685.171 528.736 697.81 510.924 721.274 501.036C728.505 497.988 736.716 497.231 743.812 500.579C761.362 508.857 778.421 529.148 794 528.736C810.375 528.736 829.35 508.68 848.364 502.179C854.243 500.169 860.624 500.802 866.535 502.718C886.961 509.338 898.141 519.866 916 520.236C932.8 520.583 934.5 510.236 967.5 501.736C1011.5 491 1007.5 493.5 1029.5 480C1069.5 453.5 1072 440.442 1128.5 403.5C1180.5 369.5 1275 360.374 1439 364",
                    stroke: "#076EFF",
                    strokeWidth: "2",
                    fill: "none",
                    pathLength: 1,
                    filter: "url(#blurMe)",
                  }),
                  (0, l.jsx)("defs", {
                    children: (0, l.jsx)("filter", {
                      id: "blurMe",
                      children: (0, l.jsx)("feGaussianBlur", {
                        in: "SourceGraphic",
                        stdDeviation: "5",
                      }),
                    }),
                  }),
                ],
              }),
            ],
          });
        };
      function u() {
        let e = i.useRef(null),
          { scrollYProgress: t } = (0, r.v)({
            target: e,
            offset: ["start start", "end start"],
          }),
          s = (0, n.H)(t, [0, 0.8], [0.2, 1.2]),
          a = (0, n.H)(t, [0, 0.8], [0.15, 1.2]),
          o = (0, n.H)(t, [0, 0.8], [0.1, 1.2]),
          c = (0, n.H)(t, [0, 0.8], [0.05, 1.2]),
          u = (0, n.H)(t, [0, 0.8], [0, 1.2]);
        return (0, l.jsx)("div", {
          className:
            "h-[120vh] bg-black w-full dark:border dark:border-white/[0.1] rounded-md relative pt-40 overflow-clip",
          ref: e,
          children: (0, l.jsx)(d, { pathLengths: [s, a, o, c, u] }),
        });
      }
    },
    8609: function (e, t, s) {
      "use strict";
      var l = s(7437),
        r = s(2265);
      t.default = () => {
        let [e, t] = (0, r.useState)(""),
          [n, i] = (0, r.useState)(null),
          a = async (l) => {
            l.preventDefault();
            let r = await Promise.all([
              s.e(427),
              s.e(224),
              s.e(694),
              s.e(890),
            ]).then(s.t.bind(s, 4694, 23));
            r.setConfig({
              apiKey: "bb7b8fc66260237dadc99faaeec67440-us22",
              server: "us22",
            });
            try {
              let e = await r.ping.get();
              i(e), console.log("Ping response:", e);
            } catch (e) {
              console.error("Error pinging Mailchimp:", e);
            }
            try {
              let s = await r.lists.addListMember("cddc5bccdf", {
                email_address: e,
                status: "subscribed",
              });
              console.log("Successfully subscribed:", s), t("");
            } catch (e) {
              console.error("Error subscribing:", e);
            }
          };
        return (0, l.jsx)("section", {
          className: "relative py-20",
          children: (0, l.jsx)("div", {
            className: "container mx-auto px-4",
            children: (0, l.jsxs)("div", {
              className: "bg-card p-8 rounded-lg shadow-lg",
              children: [
              ],
            }),
          }),
        });
      };
    },
    931: function (e, t, s) {
      "use strict";
      s.d(t, {
        TypewriterEffectSmoothDemo: function () {
          return m;
        },
      });
      var l = s(7437),
        r = s(2265),
        n = s(7934),
        i = s(7451);
      let a = { some: 0, all: 1 };
      var o = s(6956);
      let c = (e) => {
          let { words: t, className: s, cursorClassName: c } = e,
            [u, h] = (0, r.useState)(""),
            x = (0, r.useRef)(null),
            m = (function (
              e,
              { root: t, margin: s, amount: l, once: n = !1 } = {}
            ) {
              let [o, c] = (0, r.useState)(!1);
              return (
                (0, r.useEffect)(() => {
                  if (!e.current || (n && o)) return;
                  let r = {
                    root: (t && t.current) || void 0,
                    margin: s,
                    amount: l,
                  };
                  return (function (
                    e,
                    t,
                    { root: s, margin: l, amount: r = "some" } = {}
                  ) {
                    let n = (0, i.I)(e),
                      o = new WeakMap(),
                      c = new IntersectionObserver(
                        (e) => {
                          e.forEach((e) => {
                            let s = o.get(e.target);
                            if (!!s !== e.isIntersecting) {
                              if (e.isIntersecting) {
                                let s = t(e);
                                "function" == typeof s
                                  ? o.set(e.target, s)
                                  : c.unobserve(e.target);
                              } else s && (s(e), o.delete(e.target));
                            }
                          });
                        },
                        {
                          root: s,
                          rootMargin: l,
                          threshold: "number" == typeof r ? r : a[r],
                        }
                      );
                    return n.forEach((e) => c.observe(e)), () => c.disconnect();
                  })(e.current, () => (c(!0), n ? void 0 : () => c(!1)), r);
                }, [t, e, s, n, l]),
                o
              );
            })(x);
          return (
            (0, r.useEffect)(() => {
              let e = 0,
                t = 0,
                s = null,
                l = () => {
                  if (!m) return;
                  let r = d.targetWords[t];
                  e <= r.length
                    ? (h(r.substring(0, e)),
                      e++,
                      (s = setTimeout(l, 1e3 * d.delayPerLetter)))
                    : (s = setTimeout(() => {
                        (t = (t + 1) % d.targetWords.length), (e = 0), l();
                      }, 1e3 * d.delayBetweenWords));
                };
              return (
                l(),
                () => {
                  s && clearTimeout(s);
                }
              );
            }, [m]),
            (0, l.jsxs)("div", {
              ref: x,
              className: (0, n.cn)("flex space-x-1 my-6", s),
              children: [
                (0, l.jsx)("div", {
                  className: "overflow-hidden pb-2",
                  children: (0, l.jsxs)("div", {
                    className:
                      "text-3xl xs:text-4xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-5xl font-bold",
                    style: { whiteSpace: "nowrap" },
                    children: [
                      t
                        .slice(0, 3)
                        .map((e, t) =>
                          (0, l.jsxs)(
                            "span",
                            {
                              className: e.className,
                              children: [e.text, "\xa0"],
                            },
                            "word-".concat(t)
                          )
                        ),
                      (0, l.jsx)("span", {
                        className: (0, n.cn)(
                          "bg-gradient-to-r from-[#6218FF] to-[#341f97] bg-clip-text text-transparent",
                          t[3].className
                        ),
                        children: u,
                      }),
                    ],
                  }),
                }),
                (0, l.jsx)(o.E.span, {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  transition: {
                    duration: 0.5,
                    repeat: 1 / 0,
                    repeatType: "reverse",
                  },
                  className: (0, n.cn)(
                    "block rounded-sm w-[4px] h-4 sm:h-10 xl:h-12 bg-teal-500",
                    c
                  ),
                }),
              ],
            })
          );
        },
        d = {
          targetWords: [
            "Ethereum.",
            "以太坊.",
            "Et\xe9rium.",
            "اتریوم",
            "Эфириум.",
            "אתריום",
          ],
          delayPerLetter: 0.08,
          delayBetweenWords: 3,
        };
      var u = s(3480);
      /**
       * @license lucide-react v0.373.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let h = (0, u.Z)("ArrowDown", [
          ["path", { d: "M12 5v14", key: "s699le" }],
          ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }],
        ]),
        x = (0, u.Z)("X", [
          ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
          ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
        ]);
      function m() {
        let [e, t] = (0, r.useState)(!1);
        return (0, l.jsxs)("div", {
          className: "flex flex-col items-center justify-center h-[35rem]",
          children: [
            (0, l.jsx)("a", {
              href: "https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0xtttttttttttttttt",
              target: "_blank",
              rel: "noopener noreferrer",
              children: (0, l.jsxs)("button", {
                className:
                  "flex items-center h-6 px-4 py-2 bg-zinc-800 border border-zinc-700 text-white hover:bg-zinc-900 hover:border-teal-500 font-light rounded-lg",
                children: [
                  (0, l.jsx)("img", {
                    src: "/image-buttonicon@2x.png",
                    alt: "Button Icon",
                    className: "mr-2 h-8 w-8",
                  }),
                  "EETH is now live on Uniswap.",
                ],
              }),
            }),
            (0, l.jsx)(c, {
              words: [
                { text: "Web3" },
                { text: "Solutions" },
                { text: "for" },
                {
                  text: "Ethereum.",
                  className: "text-teal-500 dark:text-teal-500",
                },
              ],
            }),
            (0, l.jsxs)("div", {
              className:
                "flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4",
              children: [
                (0, l.jsxs)("button", {
                  onClick: () => {
                    let e = document.getElementById("ecosystem-section");
                    e && e.scrollIntoView({ behavior: "smooth" });
                  },
                  className:
                    "w-40 h-10 rounded-xl bg-black border border-zinc-600 text-white text-sm hover:bg-zinc-900 hover:border-teal-500 hover:text-white hover:shadow-md hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center group",
                  children: [
                    (0, l.jsx)(h, {
                      className:
                        "mr-2 h-4 w-4 transform group-hover:translate-y-1 transition-transform duration-300",
                    }),
                    "Explore",
                  ],
                }),
              ],
            }),
            e &&
              (0, l.jsx)("div", {
                className:
                  "fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4",
                children: (0, l.jsxs)("div", {
                  className:
                    "bg-zinc-900 bg-opacity-90 rounded-lg relative w-full max-w-4xl h-[80vh] flex flex-col",
                  children: [
                    (0, l.jsx)("button", {
                      onClick: () => t(!1),
                      className:
                        "absolute -top-4 -right-4 bg-zinc-700 hover:bg-zinc-600 text-white rounded-full p-2 transition-colors duration-200 z-10",
                      children: (0, l.jsx)(x, { className: "h-6 w-6" }),
                    }),
                    (0, l.jsx)("div", {
                      className: "w-full h-full p-1",
                      children: (0, l.jsx)("iframe", {
                        className: "w-full h-full rounded-lg",
                        src: "https://www.youtube.com/embed/s418p6q_pZk?autoplay=1",
                        title: "YouTube video player",
                        frameBorder: "0",
                        allow:
                          "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                        allowFullScreen: !0,
                      }),
                    }),
                  ],
                }),
              }),
          ],
        });
      }
    },
    6013: function (e, t, s) {
      "use strict";
      s.d(t, {
        default: function () {
          return i;
        },
      });
      var l = s(7437),
        r = s(2265);
      s(417), s(892);
      var n = s(6648);
      function i(e) {
        let {
            title: t,
            description: s,
            demo: i,
            large: a,
            isOnline: o,
            link: c,
            image: d,
          } = e,
          u = (0, r.useRef)(null),
          h = (0, r.useRef)(null),
          x = (0, r.useRef)(null),
          [m, p] = (0, r.useState)(!1);
        return (0, l.jsxs)(l.Fragment, {
          children: [
            a &&
              (0, l.jsx)("div", {
                className: "flex home-card h-[20rem] w-2/3 lg:w-full",
                children: (0, l.jsx)("div", {
                  children: (0, l.jsxs)("div", {
                    className: " flex flex-col gap-3 w-full mx-auto ",
                    children: [
                      (0, l.jsxs)("div", {
                        className: "flex-1 mb-5",
                        children: [
                          (0, l.jsxs)("p", {
                            className: "flex flex-start card_title",
                            children: [" ", t, " "],
                          }),
                          (0, l.jsxs)("p", {
                            className: "card_describe mt-5",
                            children: [" ", s, " "],
                          }),
                        ],
                      }),
                      c,
                    ],
                  }),
                }),
              }),
            !a &&
              (0, l.jsxs)("div", {
                ref: u,
                className:
                  "flex flex-col noti w-[300px] h-[450px] lg:w-[400px] lg:h-[550px] p-2 lg:px-10 lg:col-span-1",
                onMouseMove: (e) => {
                  let t = u.current,
                    s = h.current,
                    l = x.current;
                  if (t) {
                    let r = t.getBoundingClientRect(),
                      n = (e.clientX - r.left) / r.width,
                      i = (e.clientY - r.top) / r.height;
                    console.log(n, i),
                      (s.style.left = 100 * n + "%"),
                      (s.style.top = 100 * i + "%"),
                      (l.style.left = 100 * n + "%"),
                      (l.style.top = 100 * i + "%"),
                      m
                        ? ((s.style.transition =
                            "inset 50ms linear, opacity 300ms ease"),
                          (l.style.transition =
                            "inset 50ms linear, opacity 300ms ease"))
                        : ((s.style.transition = "opacity 300ms ease"),
                          (l.style.transition = "opacity 300ms ease")),
                      p(!1);
                  }
                },
                onMouseOut: () => {
                  p(!0);
                },
                children: [
                  (0, l.jsx)("div", { ref: h, className: "notiglow" }),
                  (0, l.jsx)("div", { ref: x, className: "notiborderglow" }),
                  (0, l.jsx)("div", {
                    className: "image-container",
                    children: (0, l.jsx)(n.default, {
                      src: d,
                      alt: t,
                      width: 160,
                      height: 160,
                    }),
                  }),
                  (0, l.jsx)("div", {
                    className: "z-20 flex-1 w-full items-center justify-center",
                    children: i,
                  }),
                  (0, l.jsxs)("div", {
                    className:
                      "z-20 flex-1 flex flex-col gap-1 w-full mx-auto ",
                    children: [
                      (0, l.jsxs)("div", {
                        className: "flex-1",
                        children: [
                          (0, l.jsxs)("p", {
                            className: "flex flex-start card_title",
                            children: [" ", t, " "],
                          }),
                          (0, l.jsxs)("p", {
                            className: "card_describe mt-3",
                            children: [" ", s, " "],
                          }),
                        ],
                      }),
                      (0, l.jsxs)("div", {
                        className: "flex-1",
                        children: [
                          (0, l.jsxs)("div", {
                            className: "flex items-center gap-1",
                            children: [
                              o &&
                                (0, l.jsxs)(l.Fragment, {
                                  children: [
                                    (0, l.jsx)("span", {
                                      className: "status online",
                                    }),
                                    (0, l.jsx)("p", {
                                      className: "header-text",
                                      children: "Online",
                                    }),
                                  ],
                                }),
                              !o &&
                                (0, l.jsxs)(l.Fragment, {
                                  children: [
                                    (0, l.jsx)("span", {
                                      className: "status offline",
                                    }),
                                    (0, l.jsx)("p", {
                                      className: "header-text",
                                      children: "Offline",
                                    }),
                                  ],
                                }),
                            ],
                          }),
                          (0, l.jsx)("div", {
                            className: "flex-start mt-5",
                            children: c,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
          ],
        });
      }
    },
    1083: function () {},
    417: function () {},
    892: function () {},
    2268: function () {},
    197: function () {},
  },
  function (e) {
    e.O(0, [265, 600, 505, 984, 971, 23, 744], function () {
      return e((e.s = 7200));
    }),
      (_N_E = e.O());
  },
]);
