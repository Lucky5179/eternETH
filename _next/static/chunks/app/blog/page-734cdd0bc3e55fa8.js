(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [404], {
        12: function (e, t, i) {
            Promise.resolve().then(i.bind(i, 6723)), Promise.resolve().then(i.bind(i, 5651)), Promise.resolve().then(i.t.bind(i, 8173, 23)), Promise.resolve().then(i.t.bind(i, 231, 23)), Promise.resolve().then(i.t.bind(i, 3003, 23))
        },
        5651: function (e, t, i) {
            "use strict";
            i.d(t, {
                TracingBeamDemo: function () {
                    return E
                }
            });
            var n = i(7437),
                r = i(2265),
                s = i(6648),
                o = i(6164),
                a = i(1871),
                d = i(8322),
                l = i(5282),
                c = i(9791),
                h = i(9033),
                u = i(2332),
                p = i(6219);

            function m(e, t = {}) {
                let {
                    isStatic: i
                } = (0, r.useContext)(c._), n = (0, r.useRef)(null), s = (0, l.c)((0, d.i)(e) ? e.get() : e), o = () => {
                    n.current && n.current.stop()
                };
                return (0, r.useInsertionEffect)(() => s.attach((e, r) => {
                    if (i) return r(e);
                    let a = n.current;
                    return a && 0 === a.time && a.sample(p.frameData.delta), o(), n.current = (0, u.y)({
                        keyframes: [s.get(), e],
                        velocity: s.getVelocity(),
                        type: "spring",
                        restDelta: .001,
                        restSpeed: .01,
                        ...t,
                        onUpdate: r
                    }), s.get()
                }, o), [JSON.stringify(t)]), (0, h.L)(() => {
                    if ((0, d.i)(e)) return e.on("change", e => s.set(parseFloat(e)))
                }, [s]), s
            }
            var f = i(847),
                g = i(6956),
                v = i(7934);
            let x = e => {
                let {
                    children: t,
                    className: i
                } = e, s = (0, r.useRef)(null), {
                    scrollYProgress: o
                } = (0, a.v)({
                    target: s,
                    offset: ["start start", "end start"]
                }), d = (0, r.useRef)(null), [l, c] = (0, r.useState)(0);
                (0, r.useEffect)(() => {
                    d.current && c(d.current.offsetHeight)
                }, []);
                let h = m((0, f.H)(o, [0, .8], [50, l]), {
                        stiffness: 500,
                        damping: 90
                    }),
                    u = m((0, f.H)(o, [0, 1], [50, l - 200]), {
                        stiffness: 500,
                        damping: 90
                    });
                return (0, n.jsxs)(g.E.div, {
                    ref: s,
                    className: (0, v.cn)("relative w-full max-w-4xl mx-auto h-full", i),
                    children: [(0, n.jsxs)("div", {
                        className: "absolute -left-4 md:-left-20 top-3",
                        children: [(0, n.jsx)(g.E.div, {
                            transition: {
                                duration: .2,
                                delay: .5
                            },
                            animate: {
                                boxShadow: o.get() > 0 ? "none" : "rgba(0, 0, 0, 0.24) 0px 3px 8px"
                            },
                            className: "ml-[27px] h-4 w-4 rounded-full border border-netural-200 shadow-sm flex items-center justify-center",
                            children: (0, n.jsx)(g.E.div, {
                                transition: {
                                    duration: .2,
                                    delay: .5
                                },
                                animate: {
                                    backgroundColor: o.get() > 0 ? "white" : "var(--emerald-500)",
                                    borderColor: o.get() > 0 ? "white" : "var(--emerald-600)"
                                },
                                className: "h-2 w-2  rounded-full border border-neutral-300 bg-white"
                            })
                        }), (0, n.jsxs)("svg", {
                            viewBox: "0 0 20 ".concat(l),
                            width: "20",
                            height: l,
                            className: " ml-4 block",
                            "aria-hidden": "true",
                            children: [(0, n.jsx)(g.E.path, {
                                d: "M 1 0V -36 l 18 24 V ".concat(.8 * l, " l -18 24V ").concat(l),
                                fill: "none",
                                stroke: "#9091A0",
                                strokeOpacity: "0.16",
                                transition: {
                                    duration: 10
                                }
                            }), (0, n.jsx)(g.E.path, {
                                d: "M 1 0V -36 l 18 24 V ".concat(.8 * l, " l -18 24V ").concat(l),
                                fill: "none",
                                stroke: "url(#gradient)",
                                strokeWidth: "1.25",
                                className: "motion-reduce:hidden",
                                transition: {
                                    duration: 10
                                }
                            }), (0, n.jsx)("defs", {
                                children: (0, n.jsxs)(g.E.linearGradient, {
                                    id: "gradient",
                                    gradientUnits: "userSpaceOnUse",
                                    x1: "0",
                                    x2: "0",
                                    y1: h,
                                    y2: u,
                                    children: [(0, n.jsx)("stop", {
                                        stopColor: "#18CCFC",
                                        stopOpacity: "0"
                                    }), (0, n.jsx)("stop", {
                                        stopColor: "#18CCFC"
                                    }), (0, n.jsx)("stop", {
                                        offset: "0.325",
                                        stopColor: "#6344F5"
                                    }), (0, n.jsx)("stop", {
                                        offset: "1",
                                        stopColor: "#AE48FF",
                                        stopOpacity: "0"
                                    })]
                                })
                            })]
                        })]
                    }), (0, n.jsx)("div", {
                        ref: d,
                        children: t
                    })]
                })
            };

            function E() {
                return (0, n.jsx)(x, {
                    className: "px-6",
                    children: (0, n.jsx)("div", {
                        className: "max-w-2xl mx-auto antialiased pt-4 relative",
                        children: y.map((e, t) => (0, n.jsxs)("div", {
                            className: "mb-10",
                            children: [(0, n.jsx)("h2", {
                                className: "bg-black text-white rounded-full text-base w-fit px-4 py-1 mb-4",
                                children: e.badge
                            }), (0, n.jsx)("p", {
                                className: (0, o.m6)("text-3xl mb-6"),
                                children: e.title
                            }), (0, n.jsxs)("div", {
                                className: "text-lg font-light text-neutral-400 prose prose-lg dark:prose-invert",
                                children: [(null == e ? void 0 : e.image) && (0, n.jsx)(s.default, {
                                    src: e.image,
                                    alt: "blog thumbnail",
                                    height: "1000",
                                    width: "1000",
                                    className: "rounded-lg mb-10 object-cover"
                                }), e.description]
                            })]
                        }, "content-".concat(t)))
                    })
                })
            }
            let y = [{
                title: "EverBuddies: The Driving Force Behind EternETH\uD83D\uDC8E",
                description: (0, n.jsx)(n.Fragment, {
                    children: (0, n.jsxs)("p", {
                        children: ["Almost unnoticed by our community, the EternETH project is being professionalized in the background. In addition to the technical development of various tools, the focus is also on strengthening our community in order to drive adoption and success for the EternETH.", (0, n.jsx)("p", {
                            children: "\xa0"
                        }), (0, n.jsx)("li", {
                            children: "First to Know: EverBuddies are the first to learn about upcoming developments, new features, and strategic moves within the EternETH ecosystem, keeping them ahead of the curve."
                        }), (0, n.jsx)("li", {
                            children: "Special Airdrops and Gifts: EverBuddies receive exclusive airdrops, token rewards, and special gifts as a token of appreciation for their unwavering support."
                        }), (0, n.jsx)("li", {
                            children: "Meetings: Meetings facilitate face-to-face interactions, fostering a strong sense of community and enabling members to share their ideas and suggestions directly with the team."
                        }), (0, n.jsx)("li", {
                            children: "Team-Building and Expo Trips: EverBuddies have the opportunity to participate in team-building events and trips to exciting destinations around the world, strengthening bonds and fostering a sense of camaraderie within the community."
                        })]
                    })
                }),
                badge: "\uD83C\uDF0D Community",
                image: "/EverBuddies.jpg"
            }, {
                title: "EETH Dividend Tracker Successfully Upgraded",
                description: (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)("p", {
                        children: "We are excited to announce that the EETH dividend tracker has been successfully upgraded to distribute dividends in our native EETH token instead of ETH. This pivotal change follows the DAO proposal that received an overwhelming approval vote from the community."
                    }), (0, n.jsx)("p", {
                        children: "\xa0"
                    }), (0, n.jsx)("p", {
                        children: "By transitioning to EETH dividends, we eliminate the previous revenue dependency model and can now provide tokenholders with consistent monthly payouts. This level of reliability and predictability is a major advantage, ensuring that EETH holders receive dividends regularly without uncertainty or delays."
                    }), (0, n.jsx)("p", {
                        children: "\xa0"
                    }), (0, n.jsx)("p", {
                        children: "The specific annual percentage rate (APR) for EETH dividends will be determined in an upcoming DAO proposal. Once finalized, we will immediately configure the dividend tracker for the first EETH deposit payout."
                    }), (0, n.jsx)("p", {
                        children: "\xa0"
                    }), (0, n.jsx)("p", {
                        children: (0, n.jsx)("strong", {
                            children: "To ensure every EETH holder token balance is accurately reflected for dividend calculations, we encourage all holders to trigger a transfer or trade transaction (minimum 1 EETH) on the Ethereum network. This will refresh the dividend tracker record of your current EETH holdings."
                        })
                    }), (0, n.jsx)("p", {
                        children: "\xa0"
                    }), (0, n.jsxs)("p", {
                        children: ["Key Benefits of EETH Dividends:", (0, n.jsx)("li", {
                            children: "Consistent Monthly Payouts: No more waiting for revenues — dividends paid regularly."
                        }), (0, n.jsx)("li", {
                            children: "Increased EETH Buying Pressure: EternETH revenues used for EETH buys to fund dividends."
                        }), (0, n.jsx)("li", {
                            children: "Enhanced Token Utility: EETH now serves as the native dividend currency."
                        }), (0, n.jsx)("li", {
                            children: "Aligned Incentives: EETH dividends tie holder rewards to the token success."
                        })]
                    }), (0, n.jsx)("p", {
                        children: "We are happy to deliver on our promise of unlocking consistent value streams for the EternETH community."
                    }), (0, n.jsx)("p", {
                        children: "Stay tuned for the upcoming DAO proposal to determine the EETH dividend APR percentage. We can not wait to kick off the first monthly EETH dividend payout soon after!"
                    })]
                }),
                badge: "\uD83D\uDCC4 Smart Contract",
                image: "/upgrade-succesfull.jpg"
            }, {
                title: "EETH Token Listed on CoinGecko",
                description: (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)("p", {
                        children: "We are happy to announce that the EETH token has been successfully listed on CoinGecko, one of the leading cryptocurrency data aggregators and tracking platforms."
                    }), (0, n.jsx)("p", {
                        children: "\xa0"
                    }), (0, n.jsx)("p", {
                        children: "This listing represents a significant milestone for the EternETH project, as it brings increased visibility, credibility, and accessibility to our native token within the broader cryptocurrency community."
                    }), (0, n.jsx)("p", {
                        children: "\xa0"
                    }), (0, n.jsx)("p", {
                        children: "With EETH now listed on CoinGecko, users can easily access real-time price data, trading volume, market capitalization, and other key metrics. This transparency and availability of information will undoubtedly contribute to the growth and adoption of EETH among both existing and new users."
                    }), (0, n.jsx)("p", {
                        children: "\xa0"
                    }), (0, n.jsx)("p", {
                        children: "The CoinGecko listing also solidifies EETH's position as a legitimate and reputable cryptocurrency, further strengthening its utility within the EternETH ecosystem and beyond."
                    }), (0, n.jsx)("p", {
                        children: "\xa0"
                    }), (0, n.jsx)("p", {
                        children: "We'd like to extend our gratitude to the CoinGecko team for their diligent review and inclusion of EETH on their platform. This achievement wouldn't have been possible without the unwavering support and belief of our community."
                    }), (0, n.jsx)("p", {
                        children: "\xa0"
                    }), (0, n.jsx)("p", {
                        children: "Stay tuned for more exciting updates as we continue to expand the reach and adoption of EETH across various platforms and exchanges."
                    })]
                }),
                badge: "\uD83C\uDF89 Listing",
                image: "/eeth-gecko.jpg"
            }]
        }
    },
    function (e) {
        e.O(0, [265, 600, 505, 984, 971, 23, 744], function () {
            return e(e.s = 12)
        }), _N_E = e.O()
    }
]);