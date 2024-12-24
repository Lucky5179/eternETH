(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [66], {
        5970: function (e, t, n) {
            Promise.resolve().then(n.bind(n, 6723)), Promise.resolve().then(n.bind(n, 8792)), Promise.resolve().then(n.bind(n, 1698)), Promise.resolve().then(n.t.bind(n, 8173, 23)), Promise.resolve().then(n.t.bind(n, 231, 23)), Promise.resolve().then(n.t.bind(n, 3003, 23))
        },
        8792: function (e, t, n) {
            "use strict";
            n.d(t, {
                default: function () {
                    return r
                }
            });
            var a = n(7437),
                i = n(2265),
                s = n(3081),
                p = n(625),
                u = n(1581);
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
                    name: "Ethereum",
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
                        internalType: "address",
                        name: "spender",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "subtractedValue",
                        type: "uint256"
                    }],
                    name: "decreaseAllowance",
                    outputs: [{
                        internalType: "bool",
                        name: "",
                        type: "bool"
                    }],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256"
                    }],
                    name: "distributeEthereumDividends",
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
                        internalType: "int256",
                        name: "iterationsUntilProcessed",
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
                        name: "secondsUntilAutoClaimAvailable",
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
                    name: "getLastProcessedIndex",
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
                        name: "spender",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "addedValue",
                        type: "uint256"
                    }],
                    name: "increaseAllowance",
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
                    name: "lastProcessedIndex",
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
                        internalType: "uint256",
                        name: "gas",
                        type: "uint256"
                    }],
                    name: "process",
                    outputs: [{
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
                    stateMutability: "nonpayable",
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
                    inputs: [],
                    name: "withdrawDividend",
                    outputs: [],
                    stateMutability: "nonpayable",
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
                d = [{
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
                        internalType: "bool",
                        name: "isExcluded",
                        type: "bool"
                    }],
                    name: "ExcludeFromFees",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !1,
                        internalType: "address[]",
                        name: "accounts",
                        type: "address[]"
                    }, {
                        indexed: !1,
                        internalType: "bool",
                        name: "isExcluded",
                        type: "bool"
                    }],
                    name: "ExcludeMultipleAccountsFromFees",
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
                    name: "GasForProcessingUpdated",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "address",
                        name: "newLiquidityWallet",
                        type: "address"
                    }, {
                        indexed: !0,
                        internalType: "address",
                        name: "oldLiquidityWallet",
                        type: "address"
                    }],
                    name: "LiquidityWalletUpdated",
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
                        indexed: !1,
                        internalType: "uint256",
                        name: "iterations",
                        type: "uint256"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "claims",
                        type: "uint256"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "lastProcessedIndex",
                        type: "uint256"
                    }, {
                        indexed: !0,
                        internalType: "bool",
                        name: "automatic",
                        type: "bool"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "gas",
                        type: "uint256"
                    }, {
                        indexed: !0,
                        internalType: "address",
                        name: "processor",
                        type: "address"
                    }],
                    name: "ProcessedDividendTracker",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !1,
                        internalType: "uint256",
                        name: "tokensSwapped",
                        type: "uint256"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256"
                    }],
                    name: "SendDividends",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "address",
                        name: "pair",
                        type: "address"
                    }, {
                        indexed: !0,
                        internalType: "bool",
                        name: "value",
                        type: "bool"
                    }],
                    name: "SetAutomatedMarketMakerPair",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !1,
                        internalType: "uint256",
                        name: "tokensSwapped",
                        type: "uint256"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "ethReceived",
                        type: "uint256"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "tokensIntoLiqudity",
                        type: "uint256"
                    }],
                    name: "SwapAndLiquify",
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
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "address",
                        name: "newAddress",
                        type: "address"
                    }, {
                        indexed: !0,
                        internalType: "address",
                        name: "oldAddress",
                        type: "address"
                    }],
                    name: "UpdateDividendTracker",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "address",
                        name: "newAddress",
                        type: "address"
                    }, {
                        indexed: !0,
                        internalType: "address",
                        name: "oldAddress",
                        type: "address"
                    }],
                    name: "UpdateUniswapV2Router",
                    type: "event"
                }, {
                    inputs: [],
                    name: "BuyBackFee",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "Ethereum",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "EthereumRewardsFee",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "_BuyBackWalletAddress",
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
                        name: "",
                        type: "address"
                    }],
                    name: "automatedMarketMakerPairs",
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
                    name: "deadWallet",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
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
                        internalType: "address",
                        name: "spender",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "subtractedValue",
                        type: "uint256"
                    }],
                    name: "decreaseAllowance",
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
                    }, {
                        internalType: "bool",
                        name: "excluded",
                        type: "bool"
                    }],
                    name: "excludeFromFees",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address[]",
                        name: "accounts",
                        type: "address[]"
                    }, {
                        internalType: "bool",
                        name: "excluded",
                        type: "bool"
                    }],
                    name: "excludeMultipleAccountsFromFees",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [],
                    name: "gasForProcessing",
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
                    name: "getClaimWait",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "getLastProcessedIndex",
                    outputs: [{
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
                    inputs: [{
                        internalType: "address",
                        name: "spender",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "addedValue",
                        type: "uint256"
                    }],
                    name: "increaseAllowance",
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
                    name: "isExcludedFromFees",
                    outputs: [{
                        internalType: "bool",
                        name: "",
                        type: "bool"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "liquidityFee",
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
                        internalType: "uint256",
                        name: "gas",
                        type: "uint256"
                    }],
                    name: "processDividendTracker",
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
                        internalType: "address",
                        name: "pair",
                        type: "address"
                    }, {
                        internalType: "bool",
                        name: "value",
                        type: "bool"
                    }],
                    name: "setAutomatedMarketMakerPair",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "value",
                        type: "uint256"
                    }],
                    name: "setBuyBackFee",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address payable",
                        name: "wallet",
                        type: "address"
                    }],
                    name: "setBuyBackWallet",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "value",
                        type: "uint256"
                    }],
                    name: "setEthereumRewardsFee",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "value",
                        type: "uint256"
                    }],
                    name: "setLiquiditFee",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [],
                    name: "swapTokensAtAmount",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
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
                    name: "totalFees",
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
                    inputs: [],
                    name: "uniswapV2Pair",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "uniswapV2Router",
                    outputs: [{
                        internalType: "contract IUniswapV2Router02",
                        name: "",
                        type: "address"
                    }],
                    stateMutability: "view",
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
                        internalType: "uint256",
                        name: "newValue",
                        type: "uint256"
                    }],
                    name: "updateGasForProcessing",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "newAddress",
                        type: "address"
                    }],
                    name: "updateUniswapV2Router",
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

            function r() {
                let [e, t] = (0, i.useState)(0), [n, r] = (0, i.useState)(null), [l, o] = (0, i.useState)(0);

                function m(e) {
                    let {
                        initValue: t,
                        className: n,
                        decimals: s = 0,
                        suffix: p = ""
                    } = e, [u, y] = (0, i.useState)(0);
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
                        children: [u.toLocaleString(void 0, {
                            maximumFractionDigits: s,
                            minimumFractionDigits: s
                        }), p]
                    })
                }
                return (0, i.useEffect)(() => {
                    (async () => {
                        let e = new s.r6("https://bsc-dataseed.binance.org/");
                        try {
                            let n = new p.CH("0x1c54B7fDfd04Ec383B7a00f5D77Ed19b9ea6FE76", y, e),
                                a = await n.totalDividendsDistributed(),
                                i = parseFloat(u.bM(a.toString(), 18));
                            t(i), console.log("Total dividends distributed:", i);
                            let s = new p.CH("0x16dCc0eC78E91e868DCa64bE86aeC62bf7C61037", d, e),
                                l = await s.getNumberOfDividendTokenHolders(),
                                m = parseInt(l.toString(), 10);
                            o(m), console.log("Number of holders:", m);
                            let c = await fetch("https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT"),
                                T = await c.json(),
                                b = parseFloat(T.price);
                            r(b), console.log("ETH price:", b)
                        } catch (e) {
                            console.error("Error fetching data:", e)
                        }
                    })()
                }, []), (0, a.jsxs)("div", {
                    className: "grid grid-cols-1 md:grid-cols-3 gap-8 mt-2",
                    children: []
                })
            }
        }
    },
    function (e) {
        e.O(0, [265, 600, 714, 984, 971, 23, 744], function () {
            return e(e.s = 5970)
        }), _N_E = e.O()
    }
]);