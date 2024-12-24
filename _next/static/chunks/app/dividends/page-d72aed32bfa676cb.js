(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1], {
        1869: function (e, t, n) {
            Promise.resolve().then(n.bind(n, 6723)), Promise.resolve().then(n.bind(n, 7202)), Promise.resolve().then(n.bind(n, 1698)), Promise.resolve().then(n.t.bind(n, 8173, 23)), Promise.resolve().then(n.t.bind(n, 231, 23)), Promise.resolve().then(n.t.bind(n, 3003, 23))
        },
        7202: function (e, t, n) {
            "use strict";
            n.d(t, {
                default: function () {
                    return d
                }
            });
            var a = n(7437),
                i = n(2265),
                s = n(3081),
                u = n(625),
                p = n(1581);
            let y = [{
                    inputs: [],
                    stateMutability: "nonpayable",
                    type: "constructor"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "address",
                        name: "owner",
                        type: "address"
                    }, {
                        indexed: !0,
                        internalType: "address",
                        name: "spender",
                        type: "address"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "value",
                        type: "uint256"
                    }],
                    name: "Approval",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "address",
                        name: "account",
                        type: "address"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256"
                    }, {
                        indexed: !0,
                        internalType: "bool",
                        name: "automatic",
                        type: "bool"
                    }],
                    name: "Claim",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "uint256",
                        name: "newValue",
                        type: "uint256"
                    }, {
                        indexed: !0,
                        internalType: "uint256",
                        name: "oldValue",
                        type: "uint256"
                    }],
                    name: "ClaimWaitUpdated",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "weiAmount",
                        type: "uint256"
                    }],
                    name: "DividendWithdrawn",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "address",
                        name: "from",
                        type: "address"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "weiAmount",
                        type: "uint256"
                    }],
                    name: "DividendsDistributed",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !1,
                        internalType: "address",
                        name: "tokenAddress",
                        type: "address"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256"
                    }, {
                        indexed: !1,
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }],
                    name: "ERC20Recovered",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "address",
                        name: "account",
                        type: "address"
                    }],
                    name: "ExcludeFromDividends",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "uint256",
                        name: "newValue",
                        type: "uint256"
                    }, {
                        indexed: !0,
                        internalType: "uint256",
                        name: "oldValue",
                        type: "uint256"
                    }],
                    name: "MinimumHoldPeriodUpdated",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "address",
                        name: "previousOwner",
                        type: "address"
                    }, {
                        indexed: !0,
                        internalType: "address",
                        name: "newOwner",
                        type: "address"
                    }],
                    name: "OwnershipTransferred",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "address",
                        name: "from",
                        type: "address"
                    }, {
                        indexed: !0,
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "value",
                        type: "uint256"
                    }],
                    name: "Transfer",
                    type: "event"
                }, {
                    inputs: [],
                    name: "ADMIN",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "EETH",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "_owner",
                        type: "address"
                    }],
                    name: "accumulativeDividendOf",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "owner",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "spender",
                        type: "address"
                    }],
                    name: "allowance",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "spender",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256"
                    }],
                    name: "approve",
                    outputs: [{
                        internalType: "bool",
                        name: "",
                        type: "bool"
                    }],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "account",
                        type: "address"
                    }],
                    name: "balanceOf",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "account",
                        type: "address"
                    }],
                    name: "canProcessAccount",
                    outputs: [{
                        internalType: "bool",
                        name: "",
                        type: "bool"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "claimWait",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "decimals",
                    outputs: [{
                        internalType: "uint8",
                        name: "",
                        type: "uint8"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "tokenAmount",
                        type: "uint256"
                    }],
                    name: "depositRewardEETH",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256"
                    }],
                    name: "distributeEETHDividends",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "_owner",
                        type: "address"
                    }],
                    name: "dividendOf",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "account",
                        type: "address"
                    }],
                    name: "excludeFromDividends",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    name: "excludedFromDividends",
                    outputs: [{
                        internalType: "bool",
                        name: "",
                        type: "bool"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    name: "firstHoldTime",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "_account",
                        type: "address"
                    }],
                    name: "getAccount",
                    outputs: [{
                        internalType: "address",
                        name: "account",
                        type: "address"
                    }, {
                        internalType: "int256",
                        name: "index",
                        type: "int256"
                    }, {
                        internalType: "uint256",
                        name: "withdrawableDividends",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "totalDividends",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "lastClaimTime",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "nextClaimTime",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "secondsUntilNextClaimAvailable",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "index",
                        type: "uint256"
                    }],
                    name: "getAccountAtIndex",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }, {
                        internalType: "int256",
                        name: "",
                        type: "int256"
                    }, {
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "getCurrentDividendYield",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "account",
                        type: "address"
                    }],
                    name: "getDividendAccountInfo",
                    outputs: [{
                        internalType: "uint256",
                        name: "withdrawableDividends",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "totalDividends",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "lastClaimTime",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "nextClaimTime",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "secondsUntilNextClaimAvailable",
                        type: "uint256"
                    }, {
                        internalType: "bool",
                        name: "isEligibleForClaim",
                        type: "bool"
                    }, {
                        internalType: "uint256",
                        name: "timeUntilEligible",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "account",
                        type: "address"
                    }],
                    name: "getNextDividendPaymentEstimate",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "getNumberOfTokenHolders",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "account",
                        type: "address"
                    }],
                    name: "getTotalDividendsDistributedTo",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "account",
                        type: "address"
                    }],
                    name: "isAccountEligibleForClaim",
                    outputs: [{
                        internalType: "bool",
                        name: "",
                        type: "bool"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    name: "lastClaimTimes",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "minimumHoldPeriod",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "minimumTokenBalanceForDividends",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "name",
                    outputs: [{
                        internalType: "string",
                        name: "",
                        type: "string"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "owner",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address payable",
                        name: "account",
                        type: "address"
                    }, {
                        internalType: "bool",
                        name: "automatic",
                        type: "bool"
                    }],
                    name: "processAccount",
                    outputs: [{
                        internalType: "bool",
                        name: "",
                        type: "bool"
                    }],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "tokenAddress",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "tokenAmount",
                        type: "uint256"
                    }],
                    name: "recoverERC20",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [],
                    name: "recoverETH",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [],
                    name: "renounceOwnership",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address payable",
                        name: "account",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "newBalance",
                        type: "uint256"
                    }],
                    name: "setBalance",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address[]",
                        name: "accounts",
                        type: "address[]"
                    }, {
                        internalType: "uint256[]",
                        name: "newBalance",
                        type: "uint256[]"
                    }],
                    name: "setBalanceMultiple",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [],
                    name: "symbol",
                    outputs: [{
                        internalType: "string",
                        name: "",
                        type: "string"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "account",
                        type: "address"
                    }],
                    name: "timeUntilEligibleForClaim",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "totalDividendsDistributed",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "totalSupply",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "recipient",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256"
                    }],
                    name: "transfer",
                    outputs: [{
                        internalType: "bool",
                        name: "",
                        type: "bool"
                    }],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "sender",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "recipient",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256"
                    }],
                    name: "transferFrom",
                    outputs: [{
                        internalType: "bool",
                        name: "",
                        type: "bool"
                    }],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "newOwner",
                        type: "address"
                    }],
                    name: "transferOwnership",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "newClaimWait",
                        type: "uint256"
                    }],
                    name: "updateClaimWait",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "newMinimumHoldPeriod",
                        type: "uint256"
                    }],
                    name: "updateMinimumHoldPeriod",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "_newMinimumBalance",
                        type: "uint256"
                    }],
                    name: "updateMinimumTokenBalanceForDividends",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [],
                    name: "withdrawDividend",
                    outputs: [],
                    stateMutability: "pure",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "_owner",
                        type: "address"
                    }],
                    name: "withdrawableDividendOf",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "_owner",
                        type: "address"
                    }],
                    name: "withdrawnDividendOf",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }],
                r = [{
                    inputs: [],
                    stateMutability: "nonpayable",
                    type: "constructor"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "address",
                        name: "owner",
                        type: "address"
                    }, {
                        indexed: !0,
                        internalType: "address",
                        name: "spender",
                        type: "address"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "value",
                        type: "uint256"
                    }],
                    name: "Approval",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "address",
                        name: "previousOwner",
                        type: "address"
                    }, {
                        indexed: !0,
                        internalType: "address",
                        name: "newOwner",
                        type: "address"
                    }],
                    name: "OwnershipTransferred",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "address",
                        name: "from",
                        type: "address"
                    }, {
                        indexed: !0,
                        internalType: "address",
                        name: "to",
                        type: "address"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "value",
                        type: "uint256"
                    }],
                    name: "Transfer",
                    type: "event"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "owner",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "spender",
                        type: "address"
                    }],
                    name: "allowance",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "spender",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256"
                    }],
                    name: "approve",
                    outputs: [{
                        internalType: "bool",
                        name: "",
                        type: "bool"
                    }],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "account",
                        type: "address"
                    }],
                    name: "balanceOf",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "claim",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [],
                    name: "decimals",
                    outputs: [{
                        internalType: "uint8",
                        name: "",
                        type: "uint8"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "account",
                        type: "address"
                    }],
                    name: "dividendTokenBalanceOf",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "dividendTracker",
                    outputs: [{
                        internalType: "contract EverETHDividendTracker",
                        name: "",
                        type: "address"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "account",
                        type: "address"
                    }],
                    name: "excludeFromDividends",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "account",
                        type: "address"
                    }],
                    name: "getAccountDividendsInfo",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }, {
                        internalType: "int256",
                        name: "",
                        type: "int256"
                    }, {
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "index",
                        type: "uint256"
                    }],
                    name: "getAccountDividendsInfoAtIndex",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }, {
                        internalType: "int256",
                        name: "",
                        type: "int256"
                    }, {
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "getNumberOfDividendTokenHolders",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "getTotalDividendsDistributed",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "name",
                    outputs: [{
                        internalType: "string",
                        name: "",
                        type: "string"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "owner",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "tokenAddress",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "tokenAmount",
                        type: "uint256"
                    }],
                    name: "recoverERC20",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [],
                    name: "recoverETH",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [],
                    name: "renounceOwnership",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [],
                    name: "symbol",
                    outputs: [{
                        internalType: "string",
                        name: "",
                        type: "string"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "totalSupply",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "recipient",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256"
                    }],
                    name: "transfer",
                    outputs: [{
                        internalType: "bool",
                        name: "",
                        type: "bool"
                    }],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "sender",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "recipient",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256"
                    }],
                    name: "transferFrom",
                    outputs: [{
                        internalType: "bool",
                        name: "",
                        type: "bool"
                    }],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "newOwner",
                        type: "address"
                    }],
                    name: "transferOwnership",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "claimWait",
                        type: "uint256"
                    }],
                    name: "updateClaimWait",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "newAddress",
                        type: "address"
                    }],
                    name: "updateDividendTracker",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "account",
                        type: "address"
                    }],
                    name: "withdrawableDividendOf",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    stateMutability: "payable",
                    type: "receive"
                }];

            function d() {
                let [e, t] = (0, i.useState)(0), [n, d] = (0, i.useState)(null), [l, o] = (0, i.useState)(0);

                function m(e) {
                    let {
                        initValue: t,
                        className: n,
                        decimals: s = 0,
                        suffix: u = ""
                    } = e, [p, y] = (0, i.useState)(0);
                    return (0, i.useEffect)(() => {
                        let e = 0,
                            n = t / 100,
                            a = setInterval(() => {
                                y(e += n), e >= t && (clearInterval(a), y(t))
                            }, 20);
                        return () => {
                            clearInterval(a)
                        }
                    }, [t]), (0, a.jsxs)("p", {
                        className: n,
                        children: [p.toLocaleString(void 0, {
                            maximumFractionDigits: s,
                            minimumFractionDigits: s
                        }), u]
                    })
                }
                return (0, i.useEffect)(() => {
                    (async () => {
                        let e = ["https://eth.public-rpc.com", "https://ethereum.publicnode.com", "https://mainnet.gateway.tenderly.co", "https://rpc.ankr.com/eth"],
                            n = async () => {
                                for (let t of e) try {
                                    let e = new s.r6(t);
                                    return await e.getBlockNumber(), console.log("Connected to ".concat(t)), e
                                } catch (e) {
                                    console.warn("Failed to connect to ".concat(t, ", trying next..."))
                                }
                                throw Error("Failed to connect to any Ethereum node")
                            };
                        try {
                            let e = await n(),
                                a = new u.CH("0x5D87Df89c3bBeB2EBb399DB86aDb288542e9f0bd", y, e),
                                i = await a.totalDividendsDistributed(),
                                s = parseFloat(p.bM(i.toString(), 18));
                            t(s), console.log("Total dividends distributed:", s);
                            let l = new u.CH("0xtttttttttttttttt", r, e),
                                m = await l.getNumberOfDividendTokenHolders(),
                                c = parseInt(m.toString(), 10);
                            o(c), console.log("Number of holders:", c);
                            let T = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd"),
                                b = (await T.json()).ethereum.usd;
                            d(b), console.log("ETH price:", b)
                        } catch (e) {
                            console.error("Error fetching data:", e)
                        }
                    })()
                }, [])
            }
        }
    },
    function (e) {
        e.O(0, [265, 600, 714, 984, 971, 23, 744], function () {
            return e(e.s = 1869)
        }), _N_E = e.O()
    }
]);