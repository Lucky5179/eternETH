(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [984],
    {
        6723: function (e, t, r) {
            "use strict";
            r.d(t, {
                NavbarDemo: function () {
                    return f;
                },
            });
            var s = r(7437),
                n = r(2265),
                i = r(6956),
                l = r(7138);
            let c = {
                    type: "spring",
                    mass: 0.5,
                    damping: 11.5,
                    stiffness: 100,
                    restDelta: 0.001,
                    restSpeed: 0.001,
                },
                d = (e) => {
                    let {
                        setActive: t,
                        active: r,
                        item: l,
                        children: d
                    } = e,
                    [o, a] = (0, n.useState)(!1);
                    return (0, s.jsxs)("li", {
                        onMouseEnter: () => t(l),
                        className: "relative",
                        children: [
                            (0, s.jsx)(i.E.p, {
                                transition: {
                                    duration: 0.3
                                },
                                className: "cursor-pointer text-black hover:opacity-[0.9] dark:text-white md:py-2",
                                onClick: () => {
                                    a(!o);
                                },
                                children: l,
                            }),
                            (r === l || o) &&
                            (0, s.jsx)(i.E.div, {
                                initial: {
                                    opacity: 0,
                                    scale: 0.85,
                                    y: 10
                                },
                                animate: {
                                    opacity: 1,
                                    scale: 1,
                                    y: 0
                                },
                                transition: c,
                                children: (0, s.jsx)("div", {
                                    className: "md:absolute md:top-[calc(100%_+_1.2rem)] md:left-1/2 md:transform md:-translate-x-1/2 md:pt-4",
                                    children: (0, s.jsx)(i.E.div, {
                                        transition: c,
                                        layoutId: "active",
                                        className: "bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl",
                                        children: (0, s.jsx)(i.E.div, {
                                            layout: !0,
                                            className: "w-max h-full p-4",
                                            children: d,
                                        }),
                                    }),
                                }),
                            }),
                        ],
                    });
                },
                o = (e) => {
                    let {
                        setActive: t,
                        children: r
                    } = e;
                    return (0, s.jsx)("nav", {
                        onMouseLeave: () => t(null),
                        className: "md:relative md:rounded-full md:border md:border-transparent md:dark:bg-black md:dark:border-white/[0.2] md:bg-white md:shadow-input md:flex md:justify-center md:space-x-4 md:px-8 md:py-6",
                        children: (0, s.jsx)("ul", {
                            className: "flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4",
                            children: r,
                        }),
                    });
                },
                a = (e) => {
                    let {
                        title: t,
                        description: r,
                        href: n,
                        src: i
                    } = e,
                    c = n.startsWith("http");
                    return (0, s.jsx)(l.default, {
                        href: n,
                        target: c ? "_blank" : void 0,
                        rel: c ? "noopener noreferrer" : void 0,
                        className: "flex space-x-2 p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition duration-200",
                        children: (0, s.jsxs)("div", {
                            children: [
                                (0, s.jsx)("h4", {
                                    className: "text-xl font-bold mb-1 text-black dark:text-white",
                                    children: t,
                                }),
                                (0, s.jsx)("p", {
                                    className: "text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300",
                                    children: r,
                                }),
                            ],
                        }),
                    });
                },
                h = (e) => {
                    let {
                        children: t,
                        ...r
                    } = e,
                    n = r.href.startsWith("http");
                    return (0, s.jsx)(l.default, {
                        ...r,
                        target: n ? "_blank" : void 0,
                        rel: n ? "noopener noreferrer" : void 0,
                        className: "text-neutral-700 dark:text-neutral-200 hover:text-black hover:bg-neutral-100 dark:hover:bg-neutral-800 px-2 py-1 rounded-lg transition duration-200",
                        children: t,
                    });
                };
            var x = r(7934),
                u = r(1698);
            let m = (e) => {
                let {
                    toggleMobileMenu: t
                } = e,
                [r, i] = (0, n.useState)(null),
                l = (e) => {
                    i(e === r ? null : e);
                };
                return (0, s.jsx)("div", {
                    className: "fixed inset-0 bg-black bg-opacity-80 z-40 md:hidden",
                    children: (0, s.jsxs)("div", {
                        className: "mt-16 p-4 relative",
                        children: [
                            (0, s.jsx)("button", {
                                onClick: t,
                                className: "absolute top-0 right-0 mt-2 mr-2 text-white focus:outline-none",
                                children: (0, s.jsx)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "h-6 w-6",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: (0, s.jsx)("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M6 18L18 6M6 6l12 12",
                                    }),
                                }),
                            }),
                            (0, s.jsx)("nav", {
                                children: (0, s.jsxs)(u.Accordion, {
                                    type: "single",
                                    collapsible: !0,
                                    children: [
                                        (0, s.jsxs)(u.AccordionItem, {
                                            value: "products",
                                            children: [
                                                (0, s.jsx)(u.AccordionTrigger, {
                                                    onClick: () => l("products"),
                                                    children: "Products",
                                                }),
                                                (0, s.jsx)(u.AccordionContent, {
                                                    children: (0, s.jsxs)("div", {
                                                        className: "flex flex-col space-y-2",
                                                        children: [
                                                            (0, s.jsx)(a, {
                                                                title: "Reflect",
                                                                href: "/reflect",
                                                                src: "/reflect.png",
                                                                description: "Rewards system protocol running on Binance Chain.",
                                                            }),
                                                            (0, s.jsx)(a, {
                                                                title: "Dividends",
                                                                href: "/dividends",
                                                                src: "/dividends.png",
                                                                description: "Dividend Payouts for the EETH token holders.",
                                                            }),
                                                            (0, s.jsx)(a, {
                                                                title: "Stake ↗",
                                                                href: "https://app.evereth.net/stake",
                                                                src: "/stake.png",
                                                                description: "Liquid staking protocol.",
                                                            }),
                                                        ],
                                                    }),
                                                }),
                                            ],
                                        }),
                                        (0, s.jsxs)(u.AccordionItem, {
                                            value: "community",
                                            children: [
                                                (0, s.jsx)(u.AccordionTrigger, {
                                                    onClick: () => l("community"),
                                                    children: "Community",
                                                }),
                                                (0, s.jsx)(u.AccordionContent, {
                                                    children: (0, s.jsxs)("div", {
                                                        className: "flex flex-col space-y-2",
                                                        children: [
                                                            (0, s.jsx)(h, {
                                                                href: "/everbuddies",
                                                                children: "EverBuddies",
                                                            }),
                                                            (0, s.jsx)(h, {
                                                                href: "/blog",
                                                                children: "Blog",
                                                            }),
                                                            (0, s.jsx)(h, {
                                                                href: "/faq",
                                                                children: "FAQ"
                                                            }),
                                                        ],
                                                    }),
                                                }),
                                            ],
                                        }),
                                        (0, s.jsxs)(u.AccordionItem, {
                                            value: "documentation",
                                            children: [
                                                (0, s.jsx)(u.AccordionTrigger, {
                                                    onClick: () => l("documentation"),
                                                    children: "Documentation",
                                                }),
                                                (0, s.jsx)(u.AccordionContent, {
                                                    children: (0, s.jsxs)("div", {
                                                        className: "flex flex-col space-y-2",
                                                        children: [
                                                            (0, s.jsx)(h, {
                                                                href: "https://docs.eternethai.com",
                                                                children: "Docs ↗",
                                                            }),
                                                            (0, s.jsx)(h, {
                                                                href: "https://www.youtube.com/@EverETHofficial",
                                                                children: "EverLearn Episodes ↗",
                                                            }),
                                                        ],
                                                    }),
                                                }),
                                            ],
                                        }),
                                        (0, s.jsxs)(u.AccordionItem, {
                                            value: "dao",
                                            children: [
                                                (0, s.jsx)(u.AccordionTrigger, {
                                                    onClick: () => l("dao"),
                                                    children: "DAO",
                                                }),
                                                (0, s.jsx)(u.AccordionContent, {
                                                    children: (0, s.jsx)("div", {
                                                        className: "flex flex-col space-y-2",
                                                        children: (0, s.jsx)(h, {
                                                            href: "https://snapshot.org/#/everethdao.eth",
                                                            children: "Governance ↗",
                                                        }),
                                                    }),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    }),
                });
            };

            function f() {
                return (0, s.jsx)("div", {
                    className: "relative w-full flex items-center justify-between px-20",
                    children: (0, s.jsx)(p, {
                        className: "top-2"
                    }),
                });
            }

            function p(e) {
                let {
                    className: t
                } = e,
                [r, i] = (0, n.useState)(null),
                [l, c] = (0, n.useState)(!1),
                u = () => {
                    c(!l);
                };
                return (0, s.jsxs)("div", {
                    className: (0, x.cn)("fixed top-4 right-4 z-50", t),
                    children: [
                        (0, s.jsx)("div", {
                            className: "md:hidden",
                            children: (0, s.jsx)("button", {
                                onClick: u,
                                className: "text-white focus:outline-none",
                                children: l ?
                                    (0, s.jsx)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "h-6 w-6",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        children: (0, s.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M6 18L18 6M6 6l12 12",
                                        }),
                                    }) : (0, s.jsx)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "h-6 w-6",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        children: (0, s.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M4 6h16M4 12h16M4 18h16",
                                        }),
                                    }),
                            }),
                        }),
                        (0, s.jsx)("div", {
                            className: "hidden md:block",
                            children: (0, s.jsxs)(o, {
                                setActive: i,
                                children: [
                                    (0, s.jsx)(d, {
                                        setActive: i,
                                        active: r,
                                        item: "Products",
                                        children: (0, s.jsxs)("div", {
                                            className: "text-sm grid grid-cols-1 gap-10 p-4",
                                            children: [
                                                (0, s.jsx)(a, {
                                                    title: "UniFlash ↗",
                                                    href: "https://app.eternethai.com",
                                                    src: "/stake.png",
                                                    description: "Decentralized trading platform.",
                                                }),
                                                (0, s.jsx)(a, {
                                                    title: "Reflect",
                                                    href: "/reflect",
                                                    src: "/reflect.png",
                                                    description: "Rewards system protocol running on Binance Chain.",
                                                }),
                                                (0, s.jsx)(a, {
                                                    title: "Dividends",
                                                    href: "/dividends",
                                                    src: "/dividends.png",
                                                    description: "Dividend Payouts for the EETH token holders.",
                                                }),
                                            ],
                                        }),
                                    }),
                                    (0, s.jsx)(d, {
                                        setActive: i,
                                        active: r,
                                        item: "Community",
                                        children: (0, s.jsxs)("div", {
                                            className: "flex flex-col space-y-4 text-sm",
                                            children: [
                                                (0, s.jsx)(h, {
                                                    href: "/everbuddies",
                                                    children: "EverBuddies",
                                                }),
                                                (0, s.jsx)(h, {
                                                    href: "/blog",
                                                    children: "Blog"
                                                }),
                                                (0, s.jsx)(h, {
                                                    href: "/faq",
                                                    children: "FAQ"
                                                }),
                                            ],
                                        }),
                                    }),
                                    (0, s.jsx)(d, {
                                        setActive: i,
                                        active: r,
                                        item: "Documentation",
                                        children: (0, s.jsxs)("div", {
                                            className: "flex flex-col space-y-4 text-sm",
                                            children: [
                                                (0, s.jsx)(h, {
                                                    href: "https://docs.eternethai.com",
                                                    children: "Docs ↗",
                                                }),
                                            ],
                                        }),
                                    }),
                                ],
                            }),
                        }),
                        l && (0, s.jsx)(m, {
                            toggleMobileMenu: u
                        }),
                    ],
                });
            }
        },
        1698: function (e, t, r) {
            "use strict";
            r.r(t),
                r.d(t, {
                    Accordion: function () {
                        return a;
                    },
                    AccordionContent: function () {
                        return u;
                    },
                    AccordionItem: function () {
                        return h;
                    },
                    AccordionTrigger: function () {
                        return x;
                    },
                });
            var s = r(7437),
                n = r(2265),
                i = r(2666),
                l = r(2421),
                c = r(4839),
                d = r(6164);

            function o() {
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                    t[r] = arguments[r];
                return (0, d.m6)((0, c.W)(t));
            }
            let a = i.fC,
                h = n.forwardRef((e, t) => {
                    let {
                        className: r,
                        ...n
                    } = e;
                    return (0, s.jsx)(i.ck, {
                        ref: t,
                        className: o("border-b", r),
                        ...n,
                    });
                });
            h.displayName = "AccordionItem";
            let x = n.forwardRef((e, t) => {
                let {
                    className: r,
                    children: n,
                    ...c
                } = e;
                return (0, s.jsx)(i.h4, {
                    className: "flex",
                    children: (0, s.jsxs)(i.xz, {
                        ref: t,
                        className: o(
                            "flex flex-1 items-center justify-between py-4 text-xl font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
                            r
                        ),
                        ...c,
                        children: [
                            n,
                            (0, s.jsx)(l.Z, {
                                className: "h-4 w-4 shrink-0 transition-transform duration-200",
                            }),
                        ],
                    }),
                });
            });
            x.displayName = i.xz.displayName;
            let u = n.forwardRef((e, t) => {
                let {
                    className: r,
                    children: n,
                    ...l
                } = e;
                return (0, s.jsx)(i.VY, {
                    ref: t,
                    className: o(
                        "overflow-hidden text-md transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down text-neutral-400",
                        r
                    ),
                    ...l,
                    children: (0, s.jsx)("div", {
                        className: "pb-4 pt-0",
                        children: n
                    }),
                });
            });
            u.displayName = i.VY.displayName;
        },
        7934: function (e, t, r) {
            "use strict";
            r.d(t, {
                cn: function () {
                    return i;
                },
            });
            var s = r(4839),
                n = r(6164);

            function i() {
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                    t[r] = arguments[r];
                return (0, n.m6)((0, s.W)(t));
            }
        },
        3003: function () {},
    },
]);