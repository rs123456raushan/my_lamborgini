(window.webpackJsonp = window.webpackJsonp || []).push([
    [1], {
        0: function(e, t, n) {
            e.exports = n("zUnb")
        },
        1: function(e, t) {},
        10: function(e, t) {},
        11: function(e, t) {},
        12: function(e, t) {},
        13: function(e, t) {},
        14: function(e, t) {},
        15: function(e, t) {},
        16: function(e, t) {},
        17: function(e, t) {},
        18: function(e, t) {},
        19: function(e, t) {},
        "1RkA": function(e) {
            e.exports = JSON.parse('[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"UserAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"Levelno","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"Time","type":"uint256"}],"name":"buyLevelEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"UserAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"UserId","type":"uint256"},{"indexed":true,"internalType":"address","name":"ReferrerAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"ReferrerId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"Levelno","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"LevelPrice","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"Time","type":"uint256"}],"name":"getMoneyForLevelEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"UserAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"UserId","type":"uint256"},{"indexed":true,"internalType":"address","name":"ReferrerAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"ReferrerId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"Levelno","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"LevelPrice","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"Time","type":"uint256"}],"name":"lostMoneyForLevelEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"UserAddress","type":"address"},{"indexed":true,"internalType":"address","name":"ReferrerAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"Time","type":"uint256"}],"name":"regLevelEvent","type":"event"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"EarnedEth","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"LEVEL_PRICE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PERIOD_LENGTH","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"adminFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_level","type":"uint256"},{"internalType":"bytes32[3]","name":"_mrs","type":"bytes32[3]"},{"internalType":"uint8","name":"_v","type":"uint8"}],"name":"buyLevel","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"internalType":"bool","name":"_lockStatus","type":"bool"}],"name":"contractLock","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"createdDate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"currentId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address payable","name":"_toUser","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"failSafe","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"_userAddress","type":"address"}],"name":"findFreeReferrer","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getTotalEarnedEther","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"lockStatus","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"loopCheck","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"oldAlexa","outputs":[{"internalType":"contract OpenAlexalO","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"oldAlexaId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"limit","type":"uint256"}],"name":"oldAlexaSync","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"oldAlexaSyncClosed","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"ownerAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_referrerID","type":"uint256"},{"internalType":"bytes32[3]","name":"_mrs","type":"bytes32[3]"},{"internalType":"uint8","name":"_v","type":"uint8"}],"name":"regUser","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"setOldAlexaID","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_adminFee","type":"uint256"}],"name":"updateFeePercentage","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_level","type":"uint256"},{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"updatePrice","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_newToken","type":"address"}],"name":"updateToken","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"userList","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"users","outputs":[{"internalType":"bool","name":"isExist","type":"bool"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"referrerID","type":"uint256"},{"internalType":"uint256","name":"currentLevel","type":"uint256"},{"internalType":"uint256","name":"totalEarningEth","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"_userAddress","type":"address"},{"internalType":"uint256","name":"_level","type":"uint256"}],"name":"viewUserLevelExpired","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"_userAddress","type":"address"}],"name":"viewUserReferral","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"}]')
        },
        2: function(e, t) {},
        20: function(e, t) {},
        21: function(e, t) {},
        22: function(e, t) {},
        3: function(e, t) {},
        4: function(e, t) {},
        5: function(e, t) {},
        "5xCG": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return u
            })), n.d(t, "b", (function() {
                return p
            }));
            var a = n("jtHE"),
                i = n("xgIS"),
                o = n("Kj3r"),
                r = n("lJxs"),
                s = n("vkgz"),
                l = n("fXoL"),
                c = n("A1CT");
            const u = 576,
                d = [{
                    name: "xs",
                    width: 0
                }, {
                    name: "is",
                    width: 400
                }, {
                    name: "sm",
                    width: 576
                }, {
                    name: "md",
                    width: 768
                }, {
                    name: "lg",
                    width: 992
                }, {
                    name: "xl",
                    width: 1200
                }, {
                    name: "xxl",
                    width: 1400
                }, {
                    name: "xxxl",
                    width: 1600
                }];
            let p = (() => {
                class e {
                    constructor(e, t) {
                        this._window = e, this._utils = t, this.breakpoints = d, this.breakpoint = new a.a, this.breakpoint$ = this.breakpoint.asObservable(), this.isMobile = new a.a, this.isMobile$ = this.isMobile.asObservable(), this.breakpointsMap = d.reduce((e, t) => (e[t.name] = t.width, e), {}), this.isMobile.next(this._utils.isScreenMobile()), this._handleBodyResize()
                    }
                    getIsMobile() {
                        return this.isMobile.asObservable()
                    }
                    checkSize() {
                        this.isMobile.next(this._utils.isScreenMobile())
                    }
                    _handleBodyResize() {
                        if (this._window) return Object(i.a)(this._window, "resize").pipe(Object(o.a)(250), Object(r.a)(e => e.target.innerWidth), Object(r.a)(e => this.breakpoints.find((t, n) => {
                            const a = this.breakpoints[n + 1];
                            return e >= t.width && (!a || e < a.width)
                        })), Object(s.a)(e => {
                            this.breakpoint.next(e)
                        }), Object(r.a)(e => e.width <= u), Object(s.a)(e => {
                            this.isMobile.next(!!e)
                        }))
                    }
                }
                return e.\u0275fac = function(t) {
                    return new(t || e)(l.Ub("WINDOW"), l.Ub(c.a))
                }, e.\u0275prov = l.Gb({
                    token: e,
                    factory: e.\u0275fac,
                    providedIn: "root"
                }), e
            })()
        },
        6: function(e, t) {},
        7: function(e, t) {},
        8: function(e, t) {},
        9: function(e, t) {},
        A1CT: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return c
            }));
            var a = n("a4Kx"),
                i = n("AytR"),
                o = n("kB5k"),
                r = n("5xCG"),
                s = n("fXoL");
            const {
                PREFIX: l
            } = i.a;
            let c = (() => {
                class e {
                    constructor(e, t, n, a, i) {
                        this._document = e, this._navigator = t, this._window = n, this._localStorage = a, this._request = i
                    }
                    fetchLocally(e, t) {
                        if (!this._localStorage) return null;
                        let n = this._localStorage.getItem(l + e);
                        return t && n && (n = JSON.parse(n)), n
                    }
                    scoop(e, t) {
                        let n = {};
                        return Object.keys(e).forEach(a => {
                            t.forEach(t => {
                                if ("string" == typeof t && t == a) n[a] = e[a];
                                else if ("string" != typeof t && t.name == a) switch (t.type) {
                                    case "number":
                                        n[a] = parseInt(e[a]);
                                    case "float":
                                        n[a] = parseFloat(e[a])
                                }
                            })
                        }), n
                    }
                    shuffleArray(e) {
                        for (let t = e.length - 1; t > 0; t--) {
                            const n = Math.floor(Math.random() * (t + 1));
                            [e[t], e[n]] = [e[n], e[t]]
                        }
                        return e
                    }
                    getRandomArbitrary(e, t) {
                        return Math.floor(Math.random() * (t - e) + e)
                    }
                    isScreenMobile() {
                        if (!this._window) return !1;
                        const e = this._document.body.clientWidth <= r.a;
                        return console.log(e), e
                    }
                    generateRandom() {
                        return Math.floor(1e12 * Math.random()).toString()
                    }
                    storeUserDetailsLocally(e) {
                        this._localStorage && Object.keys(e).forEach(t => {
                            this._localStorage.setItem(l + t, e[t])
                        })
                    }
                    hexToRGB(e) {
                        let t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e),
                            {
                                r: n,
                                g: a,
                                b: i
                            } = t ? {
                                r: parseInt(t[1], 16),
                                g: parseInt(t[2], 16),
                                b: parseInt(t[3], 16)
                            } : null;
                        return `rgb(${n},${a},${i})`
                    }
                    manipulateColor(e, t) {
                        return ((e, t) => {
                            let n = parseInt,
                                a = Math.round;
                            var [i, o, t, r] = t.split(",");
                            let s = e < 0,
                                l = s ? 0 : 255 * e;
                            return s = s ? 1 + e : 1 - e, "rgb" + (r ? "a(" : "(") + a(n(i.slice("a" == i[3] ? 5 : 4)) * s + l) + "," + a(n(o) * s + l) + "," + a(n(t) * s + l) + (r ? "," + r : ")")
                        })(t, this.hexToRGB(e))
                    }
                    safeMaths(e, t, n, a) {
                        let i;
                        switch (e) {
                            case "+":
                                i = new o.BigNumber(t).plus(n);
                                break;
                            case "-":
                                i = new o.BigNumber(t).minus(n);
                                break;
                            case "*":
                                i = new o.BigNumber(t).multipliedBy(n);
                                break;
                            case "/":
                                i = new o.BigNumber(t).div(n);
                                break;
                            default:
                                throw new Error("Invalid Operator")
                        }
                        if (a) {
                            if ("number" != typeof a) throw new Error("Invalid Precision");
                            return i.toFixed(a)
                        }
                        return i.toNumber()
                    }
                    fallbackCopyTextToClipboard(e) {
                        var t = document.createElement("textarea");
                        t.value = e, t.setAttribute("readonly", "false"), t.setAttribute("contenteditable", "false"), t.style.position = "absolute", t.style.left = "-9999px";
                        let n = document.createRange();
                        n.selectNodeContents(t);
                        let a = window.getSelection();
                        a.removeAllRanges(), a.addRange(n), t.setSelectionRange(0, 9999999999999), document.body.appendChild(t);
                        try {
                            var i = document.execCommand("copy");
                            console.log("Fallback: Copying text command was " + (i ? "successful" : "unsuccessful"))
                        } catch (o) {
                            console.error("Fallback: Oops, unable to copy", o)
                        }
                        document.body.removeChild(t)
                    }
                    copyToClipboard(e) {
                        this._navigator && (e || (e = ""), this._navigator.clipboard ? this._navigator.clipboard.writeText(e).then((function() {
                            console.log("Async: Copying to clipboard was successful!")
                        }), (function(e) {
                            console.error("Async: Could not copy text: ", e)
                        })) : this.fallbackCopyTextToClipboard(e))
                    }
                    copyxToClipboard(e) {
                        if (!this._document) return;
                        var t = this._document.createElement("textarea");
                        t.value = e, this._document.body.appendChild(t);
                        let n = window.getSelection(),
                            a = this._document.createRange();
                        a.selectNode(t), n.rangeCount > 0 && n.removeAllRanges(), n.addRange(a);
                        try {
                            this._document.execCommand("copy")
                        } catch (i) {
                            throw console.error("Fallback: Oops, unable to copy", i), i
                        }
                        this._document.body.removeChild(t), n.removeAllRanges()
                    }
                    removeLocalDetail(e) {
                        this._localStorage && this._localStorage.removeItem(l + e)
                    }
                    isArrayEmpty(e) {
                        let t = !0;
                        for (let n = 0; n < e.length; n++) e[n] && (t = !1);
                        return t
                    }
                    getTimeInMills(e, t) {
                        switch (e) {
                            case "day":
                                return 60 * t * 60 * 24 * 1e3;
                            case "hours":
                                return 60 * t * 60 * 1e3
                        }
                        return null
                    }
                    formatTimeRemaining(e) {
                        let t = e;
                        var n = Math.floor(t / 1e3 % 60),
                            a = Math.floor(t / 1e3 / 60 % 60),
                            i = Math.floor(t / 36e5 % 24);
                        return `${Math.floor(t/864e5)||""} : ${i||""} : ${a||""} : ${n||""}`
                    }
                    makeShareLink(e, t) {
                        let {
                            id: n
                        } = t, a = `https://portal.openalexa.io/auth?id=${n}`;
                        switch (e) {
                            case "copy":
                                return a;
                            case "telegram":
                                return `https://telegram.me/share/url?url=${a}&text=${a}`;
                            case "twitter":
                                return `https://twitter.com/intent/tweet?text=${a}`;
                            case "facebook":
                                return `https://www.facebook.com/sharer/sharer.php?u=${a}`;
                            default:
                                return a
                        }
                    }
                }
                return e.\u0275fac = function(t) {
                    return new(t || e)(s.Ub("DOCUMENT"), s.Ub("NAVIGATOR"), s.Ub("WINDOW"), s.Ub("LOCALSTORAGE"), s.Ub(a.a, 8))
                }, e.\u0275prov = s.Gb({
                    token: e,
                    factory: e.\u0275fac,
                    providedIn: "root"
                }), e
            })()
        },
        AytR: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            }));
            const a = {
                production: !0,
                PREFIX: "rw",
                name: "production",
                APP_URL: "https://localhost:5000",
                BACKEND: "https://testing2.openalexa.io/backendnew",
                API_BASE: "http://3.7.21.77:4004/v1",
                API_RATE: "https://api.exchangeratesapi.io/latest?base=USD",
                STORAGE_KEYS: {
                    AUTH_TOKEN: "auth_token"
                },
                CONTRACT_ADDRESS: "0xcda949D0415aF93828f91E1b6B130F8eB407D704",
                ALEXA_ADDRESS: "0x80e9540c204c05Be63cfE44b43302780175b60FF",
                POOL_CONTRACT_ADDRESS: "0xB4458CE04eaF845f8f91Ef96F37c6B04CAdC54FC",
                POOL_CONTRACT_ADDRESS_WRITE: "0x7A7613CCDc9a402b00594C6381E74082f6A70834",
                USER_ADDRESS: "",
                GOOGLE_API_KEY: "AIzaSyBnYZ03k3LYjll8RPO6l9lSfLYTlUPplZI",
                NUM_POOLS: 8
            }
        },
        FLxr: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return g
            }));
            var a = n("AytR"),
                i = n("ktc5"),
                o = n.n(i),
                r = n("2Vo4"),
                s = n("LRne"),
                l = n("Kj3r"),
                c = n("lJxs");
            let u = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, {
                "en-es": {
                    Thai: "tailand\xe9s",
                    English: "Ingl\xe9s",
                    FOLLOW: "SEGUIR",
                    Korean: "coreano",
                    Italian: "italiano",
                    "Log in": "Iniciar sesi\xf3n",
                    Russian: "ruso",
                    OR: "O",
                    "welcome!": "\xa1bienvenidos!",
                    "Hello,": "Hola,",
                    Spanish: "Espa\xf1ol",
                    " SIGN UP ": "REG\xcdSTRATE",
                    " Unison pool is live!\n": "Unison pool es en vivo!",
                    Alexa: "Alexa",
                    Filipino: "Filipino",
                    " The most advanced way to invest in blockchain technology ": "La forma m\xe1s avanzada de invertir en tecnolog\xeda blockchain",
                    " Automatically login if you have following wallets: ": "Inicie sesi\xf3n autom\xe1ticamente si tiene las siguientes billeteras:",
                    "Copyright @ Open": "Copyright @ Open",
                    " Smart Contract Address ": "Direcci\xf3n de contrato inteligente",
                    " Login Automatically ": "Iniciar sesi\xf3n autom\xe1ticamente",
                    "\n  window.dataLayer = window.dataLayer || [];\n  function gtag() { dataLayer.push(arguments); }\n  gtag('js', new Date());\n\n  gtag('config', 'UA-166894577-2');\n": "window.dataLayer = window.dataLayer || []; funci\xf3n gtag () {dataLayer.push (argumentos); } gtag ('js', nueva fecha ()); gtag ('config', 'UA-166894577-2');",
                    " ENTER MANUALLY (PREVIEW MODE) ": "ENTRAR MANUALMENTE (MODO DE VISTA PREVIA)",
                    Partners: "Socios",
                    " Dashboard ": "Tablero",
                    "Lost Profits": "Ganancias perdidas",
                    FAQ: "Preguntas m\xe1s frecuentes",
                    Promo: "Promoci\xf3n",
                    "Unison Pool": "Unison Pool",
                    Uplines: "Uplines",
                    "Control Panel": "Panel de control",
                    Logout: "Cerrar sesi\xf3n",
                    Open: "Abierto",
                    "Welcome to ": "Bienvenido a",
                    dollar: "d\xf3lar",
                    euro: "euro",
                    Upgrade: "Potenciar",
                    " Level ": "Nivel",
                    "ETH WALLET ": "ETH WALLET",
                    " ID ": "CARN\xc9 DE IDENTIDAD",
                    "Total Partners/ 24hrs": "Socios totales / 24 horas",
                    "Earning ETH Level": "Ganar nivel ETH",
                    " Upgrade ": "Potenciar",
                    "Earned Ethereum": "Ethereum ganado",
                    "Earned Money": "Dinero ganado",
                    "No Data": "Sin datos",
                    "Growth of Structure": "Crecimiento de estructura",
                    "My Partners": "Mis compa\xf1eros",
                    "New Users": "Usuarios nuevos",
                    "Pool Dashboard": "Tablero de la piscina",
                    "Your levels": "Sus niveles",
                    " Total Income ": "Ingresos totales",
                    " Pool Earning Meter ": "Medidor de ganancia de piscina",
                    "Created with Highcharts 8.1.0": "Creado con Highcharts 8.1.0",
                    " My Directs ": "Mis direcciones",
                    " No Data ": "Sin datos",
                    " Smart Contract ": "Contrato inteligente",
                    " % ": "%",
                    " Copyright \xa9OpenAlexa 2020. All rights reserved ": "Copyright \xa9 OpenAlexa 2020. Todos los derechos reservados",
                    "Extend For 60 days": "Extender por 60 d\xedas",
                    "Level 1": "Nivel 1",
                    " Expires in 97 days ": "Expira en 97 d\xedas",
                    "Eth Profit": "Beneficio de Eth",
                    "Level ": "Nivel",
                    "Total Partners": "Socios totales",
                    "ID  ": "CARN\xc9 DE IDENTIDAD",
                    " Your Affiliate Link ": "Su enlace de afiliado",
                    " Find ": "Encontrar",
                    " Copy ": "Copiar",
                    " Copy your link ": "Copia tu enlace",
                    "Address ": "Habla a",
                    "Id ": "Carn\xe9 de identidad",
                    "Line 2": "L\xednea 2",
                    "Line 3": "L\xednea 3",
                    "Line 1": "L\xednea 1",
                    "Line 4": "L\xednea 4",
                    "Line 5": "L\xednea 5",
                    "Line 8": "L\xednea 8",
                    "Line 7": "L\xednea 7",
                    "Line 6": "L\xednea 6",
                    "Line 9": "Linea 9",
                    " Toggle Tree (expand/collapse) ": "Alternar \xe1rbol (expandir / contraer)",
                    "ID : 0": "ID: 0",
                    " Level 1 ": "Nivel 1",
                    " Level 3 ": "Nivel 3",
                    " Level 2 ": "Nivel 2",
                    " Level 4 ": "Nivel 4",
                    " Level 5 ": "Nivel 5",
                    "ID :1623": "ID: 1623",
                    " Level 6 ": "Nivel 6",
                    "ID :3861": "ID: 3861",
                    "ID :1684": "ID: 1684",
                    "ID :4447": "ID: 4447",
                    "ID :2298": "ID: 2298",
                    "ID :6489": "ID: 6489",
                    "ID :8378": "ID: 8378",
                    "ID :8410": "ID: 8410",
                    "ID :8426": "ID: 8426",
                    "ID :8434": "ID: 8434",
                    "ID :17940": "ID: 17940",
                    "ID :8443": "ID: 8443",
                    Level: "Nivel",
                    "Eth Wallet": "Cartera Eth",
                    Line: "L\xednea",
                    Id: "Carn\xe9 de identidad",
                    ID: "CARN\xc9 DE IDENTIDAD",
                    "Lost Profit Total : 0 ETH": "Total de ganancias perdidas: 0 ETH",
                    "S.No": "S.No",
                    Amount: "Cantidad",
                    " My Sponsor ": "Mi patrocinador",
                    " Pool / Direct Income ": "Pool / Ingresos directos",
                    "Pool 1": "Piscina 1",
                    "Pool 2": "Piscina 2",
                    "Pool 3": "Piscina 3",
                    "Pool 4": "Piscina 4",
                    "Pool 5": "Piscina 5",
                    "Pool 6": "Piscina 6",
                    " Priority Counter ": "Contador prioritario",
                    " Increase in priority will help you to claim your reward early. ": "El aumento de prioridad lo ayudar\xe1 a reclamar su recompensa temprano.",
                    "Pool 7": "Piscina 7",
                    " My Directs : 0 ": "Mis direcciones: 0",
                    "Pool 8": "Piscina 8",
                    "My Unison Pools ": "Mis piscinas al un\xedsono",
                    " Join Pool ": "Unirse al grupo",
                    "Yield Booster ": "Rendimiento de refuerzo",
                    Pool: "Piscina",
                    " Transactions ": "Actas",
                    "Amount(ETH)": "Cantidad (ETH)",
                    Date: "Fecha",
                    Sponsor: "Patrocinador",
                    Receiver: "Receptor",
                    "Pool 4 ": "Piscina 4",
                    "Pool 3 ": "Piscina 3",
                    "Pool 2 ": "Piscina 2",
                    "Pool 1 ": "Piscina 1",
                    " Active ": "Activo",
                    " A smart contract is a computer algorithm that controls the completion of a transaction. It is entered into the blockchain and remembered forever. The conditions are the same for everyone and cannot be changed or deleted by anyone. A smart contract makes financial transactions automatically, without human intervention, according to conditions written in advance. ": "Un contrato inteligente es un algoritmo inform\xe1tico que controla la finalizaci\xf3n de una transacci\xf3n. Se ingresa en la cadena de bloques y se recuerda para siempre. Las condiciones son las mismas para todos y nadie puede cambiarlas ni eliminarlas. Un contrato inteligente realiza transacciones financieras autom\xe1ticamente, sin intervenci\xf3n humana, de acuerdo con las condiciones escritas de antemano.",
                    " The repetition frequency of 60 days. Income can be repeated every 60 days with a ready-made team, earn 4000+ ETH every two months ": "La frecuencia de repetici\xf3n de 60 d\xedas. Los ingresos se pueden repetir cada 60 d\xedas con un equipo listo, gana 4000+ ETH cada dos meses",
                    " A verified smart contract will work as long as the Ethereum blockchain exists. ": "Un contrato inteligente verificado funcionar\xe1 mientras exista la cadena de bloques Ethereum.",
                    " Nobody will deceive anyone, everyone sees the code of the smart contract and understands that it works exactly as it is written in it. A smart contract is not a person, it will not lie and will not hide with money. ": "Nadie enga\xf1ar\xe1 a nadie, todos ven el c\xf3digo del contrato inteligente y entienden que funciona exactamente como est\xe1 escrito en \xe9l. Un contrato inteligente no es una persona, no mentir\xe1 y no se esconder\xe1 con el dinero.",
                    " Payments are made from wallet to participant\u2019s wallet ": "Los pagos se realizan desde la billetera a la billetera del participante",
                    " What is a Smart Contract? ": "\xbfQu\xe9 es un contrato inteligente?",
                    " Data is encrypted and distributed on the blockchain and duplicated many times, it cannot be changed or deleted. ": "Los datos se cifran y distribuyen en la cadena de bloques y se duplican muchas veces, no se pueden cambiar ni eliminar.",
                    " It is impossible to steal money ": "Es imposible robar dinero",
                    " Example 2. You ordered a product through an online store. Payment for the goods is recorded on the blockchain, and only after confirmation by the courier that the goods have been delivered, the money goes to the owner. ": "Ejemplo 2. Usted solicit\xf3 un producto a trav\xe9s de una tienda en l\xednea. El pago de los bienes se registra en la cadena de bloques, y solo despu\xe9s de la confirmaci\xf3n por parte del servicio de mensajer\xeda de que los bienes han sido entregados, el dinero va al propietario.",
                    " Download Presentation ": "Descargar presentaci\xf3n",
                    "Promotional Materials": "Materiales promocionales",
                    " Accessible to everyone. Entrance fee - 0.03 ETH only. ": "Accesible para todos. Tarifa de entrada: solo 0.03 ETH.",
                    " Banner": "Bandera",
                    " #openalexa #smartcontract #ethereum #bitcoin #crypto #blockchain #money # crypto #cryptocurrency #earningonline #btc #eth #investing #finance #profit #wagering #earnings #risklesswork #sales #marketing ": "#openalexa #smartcontract #ethereum #bitcoin #crypto #blockchain #money # crypto #cryptocurrency #earningonline #btc #eth #investing #finance #profit #wagering #earnings #risklesswork #sales #marketing",
                    " Presentation ": "Presentaci\xf3n",
                    " The project has no owner, all conditions are unchanged ": "El proyecto no tiene due\xf1o, todas las condiciones no cambian",
                    " Text ": "Texto",
                    " OpenAlexa Smart Contract : SCAM IMPOSSIBLE ": "OpenAlexa Smart Contract: ESTAFA IMPOSIBLE",
                    " OpenAlexa - Risk-free way of Earning ETH ": "OpenAlexa: forma libre de riesgo de ganar ETH",
                    " Offline Income Pattern ": "Patr\xf3n de ingresos sin conexi\xf3n",
                    Presentation: "Presentaci\xf3n",
                    " Locking and breaking a wallet is not possible ": "No es posible bloquear y romper una billetera",
                    " View ": "Ver",
                    " OpenAlexa - Trust Wallet ": "OpenAlexa - Cartera de confianza",
                    " Example 1. You and a friend bet on the outcome of a football match. You make bets in the blockchain in the form of transactions, which are stored there until the end of the game. When the match ends, the smart contract automatically checks its outcome on one of the sports sites and transfers all the money to the winner. ": "Ejemplo 1. T\xfa y un amigo apostaron por el resultado de un partido de f\xfatbol. Realiza apuestas en la cadena de bloques en forma de transacciones, que se almacenan all\xed hasta el final del juego. Cuando finaliza el partido, el contrato inteligente verifica autom\xe1ticamente su resultado en uno de los sitios deportivos y transfiere todo el dinero al ganador.",
                    " Unable to exclude your account from the structure ": "No se puede excluir su cuenta de la estructura",
                    " THE FASTEST AND SIMPLE SMART CONTRACT ": "EL CONTRATO INTELIGENTE M\xc1S R\xc1PIDO Y SENCILLO",
                    " Text advertising for posts and newsletters ": "Publicidad de texto para publicaciones y boletines",
                    " If you close the site, the smart contract will still work ": "Si cierra el sitio, el contrato inteligente seguir\xe1 funcionando",
                    "OpenAlexa Smart contract is the best that mankind could come up with in recent years.": "El contrato de OpenAlexa Smart es lo mejor que la humanidad podr\xeda tener en los \xfaltimos a\xf1os.",
                    " OpenAlexa - Security Advisory ": "OpenAlexa - Asesor\xeda de seguridad",
                    " Video ": "V\xeddeo",
                    " OpenAlexa - Use with MetaMask ": "OpenAlexa - Usar con MetaMask",
                    " OpenAlexa Explainer Video - EN ": "Video explicativo de OpenAlexa - ES",
                    " For the first time such a simple and convenient marketing. Binary matrix 6 lines - 128 people in a team are enough to go through two cycles and earn 4000+ ETH ": "Por primera vez un marketing tan simple y conveniente. Matriz binaria de 6 l\xedneas: 128 personas en un equipo son suficientes para pasar por dos ciclos y ganar m\xe1s de 4000 ETH",
                    " FAQs ": "Preguntas frecuentes",
                    "What is OpenAlexa?": "\xbfQu\xe9 es OpenAlexa?",
                    " OpenAlexa can be divided into 2 concepts: First - Is a smart contract or application running on a cryptocurrency network Ethereum. The application code is programmed to distribute incoming transfers among participants according to a specific algorithm. Second - Is the site itself, providing an interface for the convenience of working with a smart contract. ": "OpenAlexa se puede dividir en 2 conceptos: Primero: es un contrato o aplicaci\xf3n inteligente que se ejecuta en una red de criptomonedas Ethereum. El c\xf3digo de la aplicaci\xf3n est\xe1 programado para distribuir las transferencias entrantes entre los participantes de acuerdo con un algoritmo espec\xedfico. Segundo: es el sitio en s\xed mismo, que proporciona una interfaz para la conveniencia de trabajar con un contrato inteligente.",
                    "Can a transaction remain on the balance of a smart contract?": "\xbfPuede una transacci\xf3n permanecer en el saldo de un contrato inteligente?",
                    "Who is the Project Administrator?": "\xbfQui\xe9n es el administrador del proyecto?",
                    " Since the smart contract is published Ethereum Blockchain, so participation in the project is possible only with this ETH digital currency. ": "Dado que el contrato inteligente se publica en Ethereum Blockchain, la participaci\xf3n en el proyecto solo es posible con esta moneda digital ETH.",
                    "What is mode of payment in OpenAlexa?": "\xbfQu\xe9 es el modo de pago en OpenAlexa?",
                    " In a project like OpenAlexa there is no administrator. There is a creator who uploaded the contract code to the cryptocurrency blockchain Ethereum. After that, the smart contract has been part of the overall network, which is supported by miners. No one has the right to affect the operation of a smart contract, delete it or stop it. Any attempt to make unauthorised changes will be rejected due to inconsistency with previous copies in the block chain. ": "En un proyecto como OpenAlexa no hay administrador. Hay un creador que subi\xf3 el c\xf3digo del contrato a la cadena de bloques de criptomonedas Ethereum. Despu\xe9s de eso, el contrato inteligente ha sido parte de la red general, que cuenta con el apoyo de los mineros. Nadie tiene derecho a afectar el funcionamiento de un contrato inteligente, eliminarlo o detenerlo. Cualquier intento de hacer cambios no autorizados ser\xe1 rechazado debido a la inconsistencia con copias anteriores en la cadena de bloques.",
                    "What I need to Join OpenAlexa?": "\xbfQu\xe9 necesito para unirme a OpenAlexa?",
                    " It is enough to have a computer or smartphone with Ethereum wallet. We also recommend installing Telegram instant messenger for the convenience of communication with other participants as well as official chats! ": "Es suficiente tener una computadora o tel\xe9fono inteligente con la billetera Ethereum. \xa1Tambi\xe9n recomendamos instalar Telegram Instant Messenger para la conveniencia de la comunicaci\xf3n con otros participantes, as\xed como tambi\xe9n para chats oficiales!",
                    " NO! The contract is programmed to not accumulate funds, but to serve only as a transmitter. The balance of the contract is always zero, anyone can verify this. It simply lacks the function of taking funds from your balance. Any transaction will reach the desired goal safe and sound. ": "\xa1NO! El contrato est\xe1 programado para no acumular fondos, sino para servir solo como transmisor. El saldo del contrato siempre es cero, cualquiera puede verificar esto. Simplemente carece de la funci\xf3n de tomar fondos de su saldo. Cualquier transacci\xf3n alcanzar\xe1 el objetivo deseado sano y salvo.",
                    "How can I be sure that my wallet will not be blocked?": "\xbfC\xf3mo puedo estar seguro de que mi billetera no se bloquear\xe1?",
                    " While registering or upgrading the User need to pay only the amount mentioned for the Level. Then the profit is sent to the uplines after deducting the admin fees. The admin fees consist of 10% operations fees and 6% OAP Token development Fees. The OAP token is airdropped to your wallet automatically with each registration and upgrade transaction. ": "Mientras se registra o actualiza, el Usuario debe pagar solo la cantidad mencionada para el Nivel. Luego, las ganancias se env\xedan a las l\xedneas ascendentes despu\xe9s de deducir las tarifas administrativas. Las tarifas administrativas consisten en un 10% de tarifas de operaciones y un 6% de tarifas de desarrollo de tokens OAP. El token OAP se env\xeda autom\xe1ticamente a su billetera con cada transacci\xf3n de registro y actualizaci\xf3n.",
                    " Again NO! The smart contract is absolutely transparent, all data is recorded in the blockchain chain. No scam or fraud. The project cannot fail. It will work as long as the blockchain exists, even if the site is closed. ": "De nuevo NO! El contrato inteligente es absolutamente transparente, todos los datos se registran en la cadena de blockchain. Sin estafa ni fraude. El proyecto no puede fallar. Funcionar\xe1 mientras exista la cadena de bloques, incluso si el sitio est\xe1 cerrado.",
                    "Are there any fees or charges in OpenAlexa?": "\xbfHay alguna tarifa o cargo en OpenAlexa?",
                    " In the cryptocurrency industry, there is no such thing as wallet blocking. This is technically impossible even by the creators of Ethereum. Created by you the ETH-wallet belongs only to you. ": "En la industria de las criptomonedas, no existe el bloqueo de billetera. Esto es t\xe9cnicamente imposible incluso para los creadores de Ethereum. Creada por usted, la billetera ETH le pertenece solo a usted.",
                    "How to register in OpenAlexa?": "\xbfC\xf3mo registrarse en OpenAlexa?",
                    "Is it possible to earn passively?": "\xbfEs posible ganar pasivamente?",
                    " To do registration, you simply need to make payment of the first level. To do this, Click on 'Register' and follow further instructions. After successful payment, you take a position in the structure and are considered a full member. ": "Para realizar el registro, simplemente debe realizar el pago del primer nivel. Para hacer esto, haga clic en 'Registrarse' y siga las instrucciones adicionales. Despu\xe9s de un pago exitoso, toma una posici\xf3n en la estructura y se lo considera miembro de pleno derecho.",
                    " Overflow is a process that occurs when a participant registers for an upline, in which the first level is filled by two participants. The next new member falls into the structure of this upline below, in the nearest free place. ": "El desbordamiento es un proceso que ocurre cuando un participante se registra para una l\xednea ascendente, en el que dos participantes llenan el primer nivel. El siguiente miembro nuevo cae en la estructura de esta l\xednea ascendente a continuaci\xf3n, en el lugar libre m\xe1s cercano.",
                    " In addition to personal invitations, partners can appear in your structure in two ways: These are \u201cOverflows\u201d and \u201cFree Partners\u201d. Therefore, it can be argued that the system has the possibility of passive earnings. But this does not guarantee you a quick decent income, which other successful participants who are active can receive. ": 'Adem\xe1s de las invitaciones personales, los socios pueden aparecer en su estructura de dos maneras: estos son "Desbordamientos" y "Socios gratuitos". Por lo tanto, se puede argumentar que el sistema tiene la posibilidad de obtener ganancias pasivas. Pero esto no le garantiza un ingreso decente r\xe1pido, que otros participantes exitosos que est\xe1n activos pueden recibir.',
                    "What are overflows?": "\xbfQu\xe9 son los desbordamientos?",
                    "Can I register without an referral link?": "\xbfPuedo registrarme sin un enlace de referencia?",
                    " There are many exchangers. Reliable and proven exchangers can be found on the Google. If this is your first time making an exchange, follow these instructions: ": "Hay muchos intercambiadores. Se pueden encontrar intercambiadores confiables y probados en Google. Si es la primera vez que realiza un intercambio, siga estas instrucciones:",
                    " Yes, such members are called \u201cfree partners.\u201d These are participants who came for any reason WITHOUT an affiliate link. Free partners are distributed evenly across the System (from left to right), starting from those uplines that were previously registered. ": 'S\xed, dichos miembros se denominan "socios libres". Estos son participantes que vinieron por cualquier motivo SIN un enlace de afiliado. Los socios gratuitos se distribuyen de manera uniforme en todo el Sistema (de izquierda a derecha), a partir de las l\xedneas ascendentes que se registraron previamente.',
                    "How to add funds to my ETH wallet?": "\xbfC\xf3mo agregar fondos a mi billetera ETH?",
                    " Level is a status that gives the right to receive remuneration from a partner in its structure of the relevant lines. ": "Nivel es un estado que otorga el derecho a recibir una remuneraci\xf3n de un socio en su estructura de l\xedneas relevantes.",
                    "If I have an 2 level, can I immediately buy the 4 level without having the 3 level?": "Si tengo un nivel 2, \xbfpuedo comprar inmediatamente el nivel 4 sin tener el nivel 3?",
                    " Levels are bought only sequentially and in order. If you try to buy the 4 level without the 3 level, the smart contract will not process such a transfer. Money will not go anywhere and will remain with you. ": "Los niveles se compran solo secuencialmente y en orden. Si intenta comprar el nivel 4 sin el nivel 3, el contrato inteligente no procesar\xe1 dicha transferencia. El dinero no ir\xe1 a ning\xfan lado y permanecer\xe1 con usted.",
                    "What happens if my partner buys a level before me?": "\xbfQu\xe9 sucede si mi compa\xf1ero compra un nivel antes que yo?",
                    "Why do I need to renew levels every 60 days?": "\xbfPor qu\xe9 necesito renovar los niveles cada 60 d\xedas?",
                    " The money will be redirected to your upline of the same line as your partner. If you buy levels on time, this will not happen. If this happened, it\u2019s not scary. If you find this in time, then after activating the level, continue to receive the remaining transfers for this level. ": "El dinero ser\xe1 redirigido a su l\xednea ascendente de la misma l\xednea que su socio. Si compra niveles a tiempo, esto no suceder\xe1. Si esto sucedi\xf3, no da miedo. Si encuentra esto a tiempo, luego de activar el nivel, contin\xfae recibiendo las transferencias restantes para este nivel.",
                    " Your account remains in the System forever, and at any time you can extend the levels and continue to receive income. ": "Su cuenta permanece en el Sistema para siempre, y en cualquier momento puede extender los niveles y continuar recibiendo ingresos.",
                    "What will happen if you do not extend the level and it is deactivated?": "\xbfQu\xe9 pasar\xe1 si no ampl\xedas el nivel y est\xe1 desactivado?",
                    " Thanks to this rule, your profit will be repeated every 60 days, since after your extension the partners in your structure will do the same. ": "Gracias a esta regla, su beneficio se repetir\xe1 cada 60 d\xedas, ya que despu\xe9s de su extensi\xf3n, los socios de su estructura har\xe1n lo mismo.",
                    "And if the project collapses, will I lose money?": "Y si el proyecto se derrumba, \xbfperder\xe9 dinero?",
                    "What are Levels?": "\xbfQu\xe9 son los niveles?"
                }
            }), {
                "en-it": {
                    Filipino: "filippina",
                    English: "Inglese",
                    Korean: "coreano",
                    OR: "O",
                    FOLLOW: "SEGUIRE",
                    Spanish: "spagnolo",
                    "Log in": "Accesso",
                    Thai: "tailandese",
                    Italian: "italiano",
                    " SIGN UP ": "ISCRIVITI",
                    Russian: "russo",
                    " Unison pool is live!\n": "La piscina di Unison \xe8 in diretta!",
                    "Hello,": "Ciao,",
                    "welcome!": "benvenuto!",
                    Alexa: "Alexa",
                    " Automatically login if you have following wallets: ": "Accedi automaticamente se hai i seguenti portafogli:",
                    " Login Automatically ": "Accedi automaticamente",
                    " The most advanced way to invest in blockchain technology ": "Il modo pi\xf9 avanzato di investire nella tecnologia blockchain",
                    " Smart Contract Address ": "Indirizzo del contratto intelligente",
                    " ENTER MANUALLY (PREVIEW MODE) ": "INSERISCI MANUALMENTE (MODALIT\xc0 ANTEPRIMA)",
                    "Copyright @ Open": "Copyright @ Open",
                    "\n  window.dataLayer = window.dataLayer || [];\n  function gtag() { dataLayer.push(arguments); }\n  gtag('js', new Date());\n\n  gtag('config', 'UA-166894577-2');\n": "window.dataLayer = window.dataLayer || []; funzione gtag () {dataLayer.push (argomenti); } gtag ('js', new Date ()); gtag ('config', 'UA-166894577-2');",
                    "Control Panel": "Pannello di controllo",
                    " Dashboard ": "Pannello di controllo",
                    Partners: "Partner",
                    Promo: "Promo",
                    Uplines: "uplines",
                    FAQ: "FAQ",
                    "Lost Profits": "Profitti persi",
                    "Unison Pool": "Piscina all'unisono",
                    "Welcome to ": "Benvenuto a",
                    Logout: "Disconnettersi",
                    Open: "Aperto",
                    dollar: "dollaro",
                    euro: "Euro",
                    "ETH WALLET ": "ETH WALLET",
                    " ID ": "ID",
                    " Level ": "Livello",
                    Upgrade: "Aggiornamento",
                    "Earned Ethereum": "Guadagnato Ethereum",
                    "Earned Money": "Guadagnato",
                    "Total Partners/ 24hrs": "Totale partner / 24 ore",
                    "No Data": "Nessun dato",
                    "Earning ETH Level": "Guadagnare livello ETH",
                    " Upgrade ": "Aggiornamento",
                    "Your levels": "I tuoi livelli",
                    "My Partners": "I miei soci",
                    "New Users": "Nuovi utenti",
                    "Growth of Structure": "Crescita della struttura",
                    "Pool Dashboard": "Pool Dashboard",
                    " My Directs ": "My Directs",
                    " Smart Contract ": "Contratto intelligente",
                    " Total Income ": "Reddito totale",
                    " Copyright \xa9OpenAlexa 2020. All rights reserved ": "Copyright \xa9 OpenAlexa 2020. Tutti i diritti riservati",
                    " Pool Earning Meter ": "Strumento per accumulare guadagni",
                    "Created with Highcharts 8.1.0": "Creato con Highcharts 8.1.0",
                    " % ": "%",
                    " No Data ": "Nessun dato",
                    "Level 1": "Livello 1",
                    "Extend For 60 days": "Estendere per 60 giorni",
                    " Expires in 97 days ": "Scade tra 97 giorni",
                    "Eth Profit": "Et Profit",
                    "Pool 5": "Pool 5",
                    "Pool 6": "Pool 6",
                    "Pool 4": "Pool 4",
                    "Pool 7": "Pool 7",
                    "Pool 8": "Pool 8",
                    "Pool 3": "Pool 3",
                    "Pool 2": "Pool 2",
                    "Pool 1": "Pool 1",
                    "ID  ": "ID",
                    "Total Partners": "Partner totali",
                    "Level ": "Livello",
                    " Find ": "Trova",
                    " Your Affiliate Link ": "Il tuo link di affiliazione",
                    "Address ": "Indirizzo",
                    "Line 1": "Linea 1",
                    "Id ": "Id",
                    "Line 2": "Linea 2",
                    "Line 5": "Linea 5",
                    "Line 7": "Linea 7",
                    " Copy your link ": "Copia il tuo link",
                    "Line 4": "Linea 4",
                    " Copy ": "copia",
                    "Line 3": "Linea 3",
                    "Line 6": "Linea 6",
                    "Line 8": "Linea 8",
                    " Toggle Tree (expand/collapse) ": "Attiva / disattiva albero (espandi / comprimi)",
                    "Line 9": "Riga 9",
                    "ID : 0": "ID: 0",
                    " Level 1 ": "Livello 1",
                    " Level 2 ": "Livello 2",
                    " Level 3 ": "Livello 3",
                    " Level 4 ": "Livello 4",
                    " Level 5 ": "Livello 5",
                    " Level 6 ": "Livello 6",
                    "ID :1623": "ID: 1623",
                    "ID :3861": "ID: 3861",
                    "ID :1684": "ID: 1684",
                    "ID :4447": "ID: 4447",
                    "ID :2298": "ID: 2298",
                    "ID :6489": "ID: 6489",
                    "ID :8378": "ID: 8378",
                    "ID :8410": "ID: 8410",
                    "ID :8426": "ID: 8426",
                    "ID :8434": "ID: 8434",
                    "ID :17940": "ID: 17940",
                    "ID :8443": "ID: 8443",
                    Level: "Livello",
                    Line: "Linea",
                    Id: "Id",
                    "Eth Wallet": "Eth Wallet",
                    "Lost Profit Total : 0 ETH": "Totale utili persi: 0 ETH",
                    Amount: "Quantit\xe0",
                    ID: "ID",
                    "S.No": "S.No",
                    " My Sponsor ": "Il mio sponsor",
                    " Pool / Direct Income ": "Pool / Reddito diretto",
                    " My Directs : 0 ": "Le mie direzioni: 0",
                    " Priority Counter ": "Contatore prioritario",
                    " Increase in priority will help you to claim your reward early. ": "L'aumento della priorit\xe0 ti aiuter\xe0 a richiedere il tuo premio in anticipo.",
                    "My Unison Pools ": "My Unison Pools",
                    " Join Pool ": "Unisciti al Pool",
                    "Yield Booster ": "Booster di rendimento",
                    Pool: "Piscina",
                    Date: "Data",
                    "Amount(ETH)": "Importo (ETH)",
                    " Transactions ": "Le transazioni",
                    Receiver: "Ricevitore",
                    Sponsor: "Sponsor",
                    " Active ": "Attivo",
                    "Pool 4 ": "Pool 4",
                    "Pool 3 ": "Pool 3",
                    "Pool 2 ": "Pool 2",
                    "Pool 1 ": "Pool 1",
                    " OpenAlexa - Trust Wallet ": "OpenAlexa - Portafoglio Trust",
                    " Video ": "video",
                    "Promotional Materials": "Materiale promozionale",
                    Presentation: "Presentazione",
                    " Banner": "bandiera",
                    " Presentation ": "Presentazione",
                    " Download Presentation ": "Scarica la presentazione",
                    " Text ": "Testo",
                    " A smart contract is a computer algorithm that controls the completion of a transaction. It is entered into the blockchain and remembered forever. The conditions are the same for everyone and cannot be changed or deleted by anyone. A smart contract makes financial transactions automatically, without human intervention, according to conditions written in advance. ": "Un contratto intelligente \xe8 un algoritmo informatico che controlla il completamento di una transazione. \xc8 entrato nella blockchain e ricordato per sempre. Le condizioni sono le stesse per tutti e non possono essere modificate o eliminate da nessuno. Un contratto intelligente effettua transazioni finanziarie automaticamente, senza intervento umano, secondo le condizioni scritte in anticipo.",
                    " OpenAlexa - Security Advisory ": "OpenAlexa - Avviso di sicurezza",
                    " Nobody will deceive anyone, everyone sees the code of the smart contract and understands that it works exactly as it is written in it. A smart contract is not a person, it will not lie and will not hide with money. ": "Nessuno inganner\xe0 nessuno, tutti vedranno il codice del contratto intelligente e capiranno che funziona esattamente come \xe8 scritto in esso. Un contratto intelligente non \xe8 una persona, non mentir\xe0 e non si nasconder\xe0 con i soldi.",
                    " Text advertising for posts and newsletters ": "Pubblicit\xe0 testuale per post e newsletter",
                    " What is a Smart Contract? ": "Che cos'\xe8 un contratto intelligente?",
                    " OpenAlexa Smart Contract : SCAM IMPOSSIBLE ": "OpenAlexa Smart Contract: SCAM IMPOSSIBLE",
                    "OpenAlexa Smart contract is the best that mankind could come up with in recent years.": "Il contratto OpenAlexa Smart \xe8 il migliore che l'umanit\xe0 potrebbe trovare negli ultimi anni.",
                    " Payments are made from wallet to participant\u2019s wallet ": "I pagamenti vengono effettuati dal portafoglio al portafoglio del partecipante",
                    " Locking and breaking a wallet is not possible ": "Non \xe8 possibile bloccare e rompere un portafoglio",
                    " Data is encrypted and distributed on the blockchain and duplicated many times, it cannot be changed or deleted. ": "I dati vengono crittografati e distribuiti sulla blockchain e duplicati molte volte, non possono essere modificati o eliminati.",
                    " #openalexa #smartcontract #ethereum #bitcoin #crypto #blockchain #money # crypto #cryptocurrency #earningonline #btc #eth #investing #finance #profit #wagering #earnings #risklesswork #sales #marketing ": "#openalexa #smartcontract #ethereum #bitcoin #crypto #blockchain #money # crypto #cryptocurrency #earningonline #btc #eth #investing #finance #profit #wagering #earnings #risklesswork #sales #marketing",
                    " Example 2. You ordered a product through an online store. Payment for the goods is recorded on the blockchain, and only after confirmation by the courier that the goods have been delivered, the money goes to the owner. ": "Esempio 2. Hai ordinato un prodotto tramite un negozio online. Il pagamento per la merce viene registrato sulla blockchain e solo dopo la conferma da parte del corriere che la merce \xe8 stata consegnata, il denaro va al proprietario.",
                    " Example 1. You and a friend bet on the outcome of a football match. You make bets in the blockchain in the form of transactions, which are stored there until the end of the game. When the match ends, the smart contract automatically checks its outcome on one of the sports sites and transfers all the money to the winner. ": "Esempio 1. Tu e un amico scommettete sull'esito di una partita di calcio. Fai scommesse nella blockchain sotto forma di transazioni, che vengono archiviate l\xec fino alla fine del gioco. Al termine della partita, il contratto intelligente controlla automaticamente il suo esito su uno dei siti sportivi e trasferisce tutti i soldi al vincitore.",
                    " It is impossible to steal money ": "\xc8 impossibile rubare soldi",
                    " If you close the site, the smart contract will still work ": "Se chiudi il sito, il contratto intelligente continuer\xe0 a funzionare",
                    " Unable to exclude your account from the structure ": "Impossibile escludere il tuo account dalla struttura",
                    " The project has no owner, all conditions are unchanged ": "Il progetto non ha proprietario, tutte le condizioni sono invariate",
                    " THE FASTEST AND SIMPLE SMART CONTRACT ": "IL CONTRATTO SMART PI\xd9 VELOCE E SEMPLICE",
                    " Accessible to everyone. Entrance fee - 0.03 ETH only. ": "Accessibile a tutti. Biglietto d'ingresso - solo 0,03 ETH.",
                    " OpenAlexa - Risk-free way of Earning ETH ": "OpenAlexa - Modo senza rischi di guadagnare ETH",
                    " For the first time such a simple and convenient marketing. Binary matrix 6 lines - 128 people in a team are enough to go through two cycles and earn 4000+ ETH ": "Per la prima volta un marketing cos\xec semplice e conveniente. Matrice binaria 6 linee - 128 persone in una squadra sono sufficienti per passare attraverso due cicli e guadagnare oltre 4000 ETH",
                    " The repetition frequency of 60 days. Income can be repeated every 60 days with a ready-made team, earn 4000+ ETH every two months ": "La frequenza di ripetizione di 60 giorni. Le entrate possono essere ripetute ogni 60 giorni con un team gi\xe0 pronto, guadagnando oltre 4000 ETH ogni due mesi",
                    " View ": "Visualizza",
                    " A verified smart contract will work as long as the Ethereum blockchain exists. ": "Un contratto intelligente verificato funzioner\xe0 finch\xe9 esiste la blockchain di Ethereum.",
                    " OpenAlexa Explainer Video - EN ": "OpenAlexa Explainer Video - EN",
                    " OpenAlexa - Use with MetaMask ": "OpenAlexa - Utilizzare con MetaMask",
                    " Offline Income Pattern ": "Modello di reddito offline",
                    "What is OpenAlexa?": "Che cos'\xe8 OpenAlexa?",
                    "Who is the Project Administrator?": "Chi \xe8 l'amministratore del progetto?",
                    " OpenAlexa can be divided into 2 concepts: First - Is a smart contract or application running on a cryptocurrency network Ethereum. The application code is programmed to distribute incoming transfers among participants according to a specific algorithm. Second - Is the site itself, providing an interface for the convenience of working with a smart contract. ": "OpenAlexa pu\xf2 essere diviso in 2 concetti: Primo: \xe8 un contratto intelligente o un'applicazione in esecuzione su una rete di criptovaluta Ethereum. Il codice dell'applicazione \xe8 programmato per distribuire i trasferimenti in entrata tra i partecipanti secondo un algoritmo specifico. Secondo: il sito stesso fornisce un'interfaccia per la comodit\xe0 di lavorare con un contratto intelligente.",
                    " FAQs ": "FAQs",
                    "What is mode of payment in OpenAlexa?": "Qual \xe8 la modalit\xe0 di pagamento in OpenAlexa?",
                    " In a project like OpenAlexa there is no administrator. There is a creator who uploaded the contract code to the cryptocurrency blockchain Ethereum. After that, the smart contract has been part of the overall network, which is supported by miners. No one has the right to affect the operation of a smart contract, delete it or stop it. Any attempt to make unauthorised changes will be rejected due to inconsistency with previous copies in the block chain. ": "In un progetto come OpenAlexa non esiste un amministratore. C'\xe8 un creatore che ha caricato il codice del contratto nella blockchain di criptovaluta Ethereum. Successivamente, il contratto intelligente ha fatto parte dell'intera rete, che \xe8 supportata dai minatori. Nessuno ha il diritto di influire sul funzionamento di un contratto intelligente, eliminarlo o interromperlo. Qualsiasi tentativo di apportare modifiche non autorizzate verr\xe0 rifiutato a causa di incoerenza con le copie precedenti nella catena di blocchi.",
                    " NO! The contract is programmed to not accumulate funds, but to serve only as a transmitter. The balance of the contract is always zero, anyone can verify this. It simply lacks the function of taking funds from your balance. Any transaction will reach the desired goal safe and sound. ": "NO! Il contratto \xe8 programmato per non accumulare fondi, ma per fungere solo da trasmettitore. Il saldo del contratto \xe8 sempre zero, chiunque pu\xf2 verificarlo. Manca semplicemente la funzione di prelevare fondi dal proprio saldo. Qualsiasi transazione raggiunger\xe0 l'obiettivo desiderato, sano e salvo.",
                    " Since the smart contract is published Ethereum Blockchain, so participation in the project is possible only with this ETH digital currency. ": "Poich\xe9 il contratto intelligente \xe8 pubblicato Ethereum Blockchain, quindi la partecipazione al progetto \xe8 possibile solo con questa valuta digitale ETH.",
                    "Can a transaction remain on the balance of a smart contract?": "Una transazione pu\xf2 rimanere sul saldo di un contratto intelligente?",
                    "What I need to Join OpenAlexa?": "Cosa mi serve per iscrivermi a OpenAlexa?",
                    " It is enough to have a computer or smartphone with Ethereum wallet. We also recommend installing Telegram instant messenger for the convenience of communication with other participants as well as official chats! ": "Basta avere un computer o uno smartphone con il portafoglio Ethereum. Ti consigliamo inoltre di installare la messaggistica istantanea di Telegram per la comodit\xe0 della comunicazione con altri partecipanti e per le chat ufficiali!",
                    "And if the project collapses, will I lose money?": "E se il progetto crolla, perdo soldi?",
                    " Again NO! The smart contract is absolutely transparent, all data is recorded in the blockchain chain. No scam or fraud. The project cannot fail. It will work as long as the blockchain exists, even if the site is closed. ": "Ancora NO! Il contratto intelligente \xe8 assolutamente trasparente, tutti i dati sono registrati nella catena blockchain. Nessuna truffa o frode. Il progetto non pu\xf2 fallire. Funzioner\xe0 finch\xe9 esiste la blockchain, anche se il sito \xe8 chiuso.",
                    "How can I be sure that my wallet will not be blocked?": "Come posso essere sicuro che il mio portafoglio non verr\xe0 bloccato?",
                    " While registering or upgrading the User need to pay only the amount mentioned for the Level. Then the profit is sent to the uplines after deducting the admin fees. The admin fees consist of 10% operations fees and 6% OAP Token development Fees. The OAP token is airdropped to your wallet automatically with each registration and upgrade transaction. ": "Durante la registrazione o l'aggiornamento l'utente deve pagare solo l'importo indicato per il livello. Quindi il profitto viene inviato alle upline dopo aver dedotto le commissioni amministrative. Le commissioni di amministrazione sono costituite dal 10% di commissioni operative e dal 6% di commissioni di sviluppo token OAP. Il token OAP viene trasferito automaticamente nel tuo portafoglio con ogni transazione di registrazione e aggiornamento.",
                    "How to register in OpenAlexa?": "Come registrarsi in OpenAlexa?",
                    " In the cryptocurrency industry, there is no such thing as wallet blocking. This is technically impossible even by the creators of Ethereum. Created by you the ETH-wallet belongs only to you. ": "Nel settore delle criptovalute, non esiste il blocco del portafoglio. Ci\xf2 \xe8 tecnicamente impossibile anche dai creatori di Ethereum. Creato da te, il portafoglio ETH appartiene solo a te.",
                    "Are there any fees or charges in OpenAlexa?": "Ci sono commissioni o addebiti in OpenAlexa?",
                    " To do registration, you simply need to make payment of the first level. To do this, Click on 'Register' and follow further instructions. After successful payment, you take a position in the structure and are considered a full member. ": "Per effettuare la registrazione, devi semplicemente effettuare il pagamento di primo livello. Per fare ci\xf2, fare clic su 'Registrati' e seguire ulteriori istruzioni. Dopo il pagamento riuscito, prendi posizione nella struttura e sei considerato un membro a pieno titolo.",
                    "Can I register without an referral link?": "Posso registrarmi senza un link di riferimento?",
                    "Is it possible to earn passively?": "\xc8 possibile guadagnare passivamente?",
                    " In addition to personal invitations, partners can appear in your structure in two ways: These are \u201cOverflows\u201d and \u201cFree Partners\u201d. Therefore, it can be argued that the system has the possibility of passive earnings. But this does not guarantee you a quick decent income, which other successful participants who are active can receive. ": 'Oltre agli inviti personali, i partner possono apparire nella tua struttura in due modi: questi sono "Overflow" e "Partner gratuiti". Pertanto, si pu\xf2 sostenere che il sistema ha la possibilit\xe0 di guadagni passivi. Ma questo non ti garantisce un reddito decente veloce, che possono ricevere altri partecipanti di successo che sono attivi.',
                    "What are overflows?": "Cosa sono gli overflow?",
                    " Overflow is a process that occurs when a participant registers for an upline, in which the first level is filled by two participants. The next new member falls into the structure of this upline below, in the nearest free place. ": "L'overflow \xe8 un processo che si verifica quando un partecipante si registra per una upline, in cui il primo livello viene riempito da due partecipanti. Il prossimo nuovo membro rientra nella struttura di questa upline in basso, nel posto libero pi\xf9 vicino.",
                    "What are Levels?": "Quali sono i livelli?",
                    "If I have an 2 level, can I immediately buy the 4 level without having the 3 level?": "Se ho un livello 2, posso acquistare immediatamente il livello 4 senza avere il livello 3?",
                    " Level is a status that gives the right to receive remuneration from a partner in its structure of the relevant lines. ": "Level \xe8 uno status che d\xe0 il diritto a ricevere una remunerazione da un partner nella sua struttura delle linee pertinenti.",
                    " There are many exchangers. Reliable and proven exchangers can be found on the Google. If this is your first time making an exchange, follow these instructions: ": "Ci sono molti scambiatori. Scambiatori affidabili e comprovati sono disponibili su Google. Se \xe8 la prima volta che effettui uno scambio, segui queste istruzioni:",
                    "How to add funds to my ETH wallet?": "Come aggiungere fondi al mio portafoglio ETH?",
                    " Yes, such members are called \u201cfree partners.\u201d These are participants who came for any reason WITHOUT an affiliate link. Free partners are distributed evenly across the System (from left to right), starting from those uplines that were previously registered. ": 'S\xec, tali membri sono chiamati "partner gratuiti". Questi sono partecipanti che sono venuti per qualsiasi motivo SENZA un link di affiliazione. I partner gratuiti sono distribuiti uniformemente su tutto il sistema (da sinistra a destra), a partire da quelle linee precedentemente registrate.',
                    " Levels are bought only sequentially and in order. If you try to buy the 4 level without the 3 level, the smart contract will not process such a transfer. Money will not go anywhere and will remain with you. ": "I livelli vengono acquistati solo in sequenza e in ordine. Se si tenta di acquistare il livello 4 senza il livello 3, il contratto intelligente non elaborer\xe0 tale trasferimento. Il denaro non andr\xe0 da nessuna parte e rimarr\xe0 con te.",
                    "What happens if my partner buys a level before me?": "Cosa succede se il mio partner acquista un livello prima di me?",
                    " The money will be redirected to your upline of the same line as your partner. If you buy levels on time, this will not happen. If this happened, it\u2019s not scary. If you find this in time, then after activating the level, continue to receive the remaining transfers for this level. ": "Il denaro verr\xe0 reindirizzato alla tua upline della stessa linea del tuo partner. Se acquisti i livelli in tempo, questo non accadr\xe0. Se questo \xe8 successo, non \xe8 spaventoso. Se lo trovi in tempo, dopo aver attivato il livello, continua a ricevere i trasferimenti rimanenti per questo livello.",
                    " Your account remains in the System forever, and at any time you can extend the levels and continue to receive income. ": "Il tuo account rimane nel sistema per sempre e in qualsiasi momento puoi estendere i livelli e continuare a ricevere entrate.",
                    " Thanks to this rule, your profit will be repeated every 60 days, since after your extension the partners in your structure will do the same. ": "Grazie a questa regola, il tuo profitto verr\xe0 ripetuto ogni 60 giorni, poich\xe9 dopo l'estensione i partner della tua struttura faranno lo stesso.",
                    "What will happen if you do not extend the level and it is deactivated?": "Cosa succeder\xe0 se non si estende il livello ed \xe8 disattivato?",
                    "Why do I need to renew levels every 60 days?": "Perch\xe9 devo rinnovare i livelli ogni 60 giorni?"
                }
            }), {
                "en-ko": {
                    " Unison pool is live!\n": "\uc720\ub2c8\uc2a8 \ud480\uc774 \uc0dd\uacbc\uc2b5\ub2c8\ub2e4!",
                    Spanish: "\uc2a4\ud398\uc778\uc758",
                    "welcome!": "\uc5b4\uc11c \uc624\uc2ed\uc2dc\uc624!",
                    Italian: "\uc774\ud0c8\ub9ac\uc544 \uc0ac\ub78c",
                    "Hello,": "\uc5ec\ubcf4\uc138\uc694,",
                    OR: "\ub610\ub294",
                    Korean: "\ud55c\uad6d\uc5b4",
                    " ENTER MANUALLY (PREVIEW MODE) ": "\uc218\ub3d9\uc73c\ub85c \uc785\ub825 (\ubbf8\ub9ac\ubcf4\uae30 \ubaa8\ub4dc)",
                    "Log in": "\ub85c\uadf8\uc778",
                    Russian: "\ub7ec\uc2dc\uc544\uc778",
                    " Login Automatically ": "\uc790\ub3d9 \ub85c\uadf8\uc778",
                    " Automatically login if you have following wallets: ": "\ub2e4\uc74c \uc9c0\uac11\uc774\uc788\ub294 \uacbd\uc6b0 \uc790\ub3d9 \ub85c\uadf8\uc778 :",
                    FOLLOW: "\ub530\ub974\ub2e4",
                    Filipino: "\ud544\ub9ac\ud540\uc5b4",
                    Thai: "\ud0c0\uc774",
                    English: "\uc601\uc5b4",
                    " Smart Contract Address ": "\uc2a4\ub9c8\ud2b8 \uacc4\uc57d \uc8fc\uc18c",
                    " The most advanced way to invest in blockchain technology ": "\ube14\ub85d \uccb4\uc778 \uae30\uc220\uc5d0 \ud22c\uc790\ud558\ub294 \uac00\uc7a5 \uc9c4\ubcf4 \ub41c \ubc29\ubc95",
                    " SIGN UP ": "\uac00\uc785\ud558\uae30",
                    Alexa: "\uc54c\ub809\uc0ac",
                    "\n  window.dataLayer = window.dataLayer || [];\n  function gtag() { dataLayer.push(arguments); }\n  gtag('js', new Date());\n\n  gtag('config', 'UA-166894577-2');\n": "window.dataLayer = window.dataLayer || []; \ud568\uc218 gtag () {dataLayer.push (\uc778\uc218); } gtag ( 'js', \uc0c8\ub85c\uc6b4 \ub0a0\uc9dc ()); gtag ( 'config', 'UA-166894577-2');",
                    "Copyright @ Open": "\uc800\uc791\uad8c @ \uc5f4\uae30",
                    " Dashboard ": "\uacc4\uae30\ubc18",
                    "Control Panel": "\uc81c\uc5b4\ud310",
                    Partners: "\ud30c\ud2b8\ub108",
                    Promo: "\ud504\ub85c\ubaa8\uc158",
                    Uplines: "\uc5c5 \ub77c\uc778",
                    "Lost Profits": "\uc783\uc5b4\ubc84\ub9b0 \uc774\uc775",
                    "Unison Pool": "\uc720\ub2c8\uc2a8 \ud480",
                    Logout: "\ub85c\uadf8 \uc544\uc6c3",
                    FAQ: "\uc790\uc8fc\ud558\ub294 \uc9c8\ubb38",
                    "Welcome to ": "\uc5d0 \uc624\uc2e0 \uac83\uc744 \ud658\uc601\ud569\ub2c8\ub2e4",
                    Open: "\uc5f4\ub2e4",
                    dollar: "\ub2ec\ub7ec",
                    euro: "\uc720\ub85c",
                    " ID ": "\uc2e0\ubd84\uc99d",
                    "Earned Ethereum": "\uc774\ub354 \ub9ac\uc6c0 \ud68d\ub4dd",
                    " Level ": "\uc218\ud3c9",
                    "Earning ETH Level": "ETH \ub808\ubca8 \ud68d\ub4dd",
                    " Upgrade ": "\uc5c5\uadf8\ub808\uc774\ub4dc",
                    "Earned Money": "\uc801\ub9bd \ub41c \ub3c8",
                    Upgrade: "\uc5c5\uadf8\ub808\uc774\ub4dc",
                    "ETH WALLET ": "ETH \uc9c0\uac11",
                    "New Users": "\uc2e0\uaddc \uc0ac\uc6a9\uc790",
                    "No Data": "\ub370\uc774\ud130 \uc5c6\uc74c",
                    "My Partners": "\ub0b4 \ud30c\ud2b8\ub108",
                    "Created with Highcharts 8.1.0": "Highcharts 8.1.0\uc73c\ub85c \uc0dd\uc131",
                    "Pool Dashboard": "\ud480 \ub300\uc2dc \ubcf4\ub4dc",
                    " Total Income ": "\ucd1d \uc218\uc785",
                    "Your levels": "\ub2f9\uc2e0\uc758 \ub808\ubca8",
                    " % ": "%",
                    "Growth of Structure": "\uad6c\uc870\uc758 \uc131\uc7a5",
                    "Total Partners/ 24hrs": "\ucd1d \ud30c\ud2b8\ub108 / 24 \uc2dc\uac04",
                    " My Directs ": "\ub0b4 \uc9c0\uc2dc",
                    " No Data ": "\ub370\uc774\ud130 \uc5c6\uc74c",
                    " Pool Earning Meter ": "\uc218\uc601\uc7a5 \uc218\uc785 \uce21\uc815\uae30",
                    " Copyright \xa9OpenAlexa 2020. All rights reserved ": "\uc800\uc791\uad8c \xa9 OpenAlexa 2020. \ud310\uad8c \uc18c\uc720",
                    " Smart Contract ": "\uc2a4\ub9c8\ud2b8 \uacc4\uc57d",
                    " Expires in 97 days ": "97 \uc77c \ud6c4\uc5d0 \ub9cc\ub8cc",
                    "Extend For 60 days": "60 \uc77c \uc5f0\uc7a5",
                    "Level 1": "\ub808\ubca8 1",
                    "Eth Profit": "\uc218\uc775",
                    "Pool 1": "\uc218\uc601\uc7a5 1",
                    "Pool 5": "\uc218\uc601\uc7a5 5",
                    "Pool 4": "\uc218\uc601\uc7a5 4",
                    "Pool 6": "\uc218\uc601\uc7a5 6",
                    "Pool 2": "\uc218\uc601\uc7a5 2",
                    "Pool 3": "\uc218\uc601\uc7a5 3",
                    "Pool 7": "\uc218\uc601\uc7a5 7",
                    "Pool 8": "\uc218\uc601\uc7a5 8",
                    "Total Partners": "\ucd1d \ud30c\ud2b8\ub108",
                    "ID  ": "\uc2e0\ubd84\uc99d",
                    " Your Affiliate Link ": "\uadc0\ud558\uc758 \uc81c\ud734\uc0ac \ub9c1\ud06c",
                    " Find ": "\ucc3e\uae30",
                    " Copy ": "\ubd80",
                    " Copy your link ": "\ub9c1\ud06c \ubcf5\uc0ac",
                    "Line 1": "1 \ud638\uc120",
                    "Id ": "\uc2e0\ubd84\uc99d",
                    "Level ": "\uc218\ud3c9",
                    "Address ": "\uc8fc\uc18c",
                    "Line 2": "2 \ud638\uc120",
                    "Line 4": "4 \ud638\uc120",
                    "Line 3": "3 \ud638\uc120",
                    "Line 5": "5 \ud638\uc120",
                    "Line 6": "6 \ud638\uc120",
                    "Line 7": "7 \ud638\uc120",
                    "Line 8": "8 \ud638\uc120",
                    " Toggle Tree (expand/collapse) ": "\ud1a0\uae00 \ud2b8\ub9ac (\ud655\uc7a5 / \ucd95\uc18c)",
                    "Line 9": "9 \ud638\uc120",
                    "ID :1623": "\ucf58\ud150\uce20 ID : 1623",
                    "ID : 0": "ID : 0",
                    "ID :3861": "\ucf58\ud150\uce20 ID : 3861",
                    " Level 1 ": "\ub808\ubca8 1",
                    "ID :1684": "\ucf58\ud150\uce20 ID : 1684",
                    " Level 6 ": "\ub808\ubca8 6",
                    " Level 3 ": "\ub808\ubca8 3",
                    " Level 2 ": "2 \ub2e8\uacc4",
                    "ID :2298": "\ucf58\ud150\uce20 ID : 2298",
                    "ID :4447": "\ucf58\ud150\uce20 ID : 4447",
                    "ID :6489": "\ucf58\ud150\uce20 ID : 6489",
                    " Level 4 ": "\ub808\ubca8 4",
                    " Level 5 ": "5 \ub2e8\uacc4",
                    "ID :8378": "\ucf58\ud150\uce20 ID : 8378",
                    "ID :8410": "\ucf58\ud150\uce20 ID : 8410",
                    "ID :8426": "\ucf58\ud150\uce20 ID : 8426",
                    "ID :8434": "\ucf58\ud150\uce20 ID : 8434",
                    "ID :17940": "\ucf58\ud150\uce20 ID : 17940",
                    "ID :8443": "\ucf58\ud150\uce20 ID : 8443",
                    Id: "\uc2e0\ubd84\uc99d",
                    Line: "\uc120",
                    "Eth Wallet": "\uc804\uc790 \uc9c0\uac11",
                    Level: "\uc218\ud3c9",
                    "Lost Profit Total : 0 ETH": "\uc783\uc5b4\ubc84\ub9b0 \uc774\uc775 \ucd1d\uacc4 : 0 ETH",
                    "S.No": "S. \uc544\ub2c8\uc694",
                    ID: "\uc2e0\ubd84\uc99d",
                    Amount: "\uc591",
                    " Join Pool ": "\ud480 \ucc38\uac00",
                    Pool: "\ud480",
                    " Pool / Direct Income ": "\uc218\uc601\uc7a5 / \uc9c1\uc811 \uc18c\ub4dd",
                    Date: "\ub370\uc774\ud2b8",
                    " Increase in priority will help you to claim your reward early. ": "\uc6b0\uc120 \uc21c\uc704\ub97c \ub192\uc774\uba74 \uc870\uae30\uc5d0 \ubcf4\uc0c1\uc744 \uccad\uad6c\ud558\ub294 \ub370 \ub3c4\uc6c0\uc774\ub429\ub2c8\ub2e4.",
                    "My Unison Pools ": "\ub0b4 \uc720\ub2c8\uc2a8 \ud480",
                    " Priority Counter ": "\uc6b0\uc120 \uc21c\uc704 \uce74\uc6b4\ud130",
                    " My Sponsor ": "\ub0b4 \uc2a4\ud3f0\uc11c",
                    " 21 ": "21",
                    " Transactions ": "\uc5c5\ubb34",
                    "Yield Booster ": "\uc218\ud655\ub7c9 \ubd80\uc2a4\ud130",
                    "Amount(ETH)": "\uae08\uc561 (ETH)",
                    Receiver: "\ub9ac\uc2dc\ubc84",
                    Sponsor: "\uc2a4\ud3f0\uc11c",
                    " My Directs : 2 ": "\ub098\uc758 \uc9c0\uc2dc : 2",
                    " Active ": "\uc720\ud6a8\ud55c",
                    "Pool 4 ": "\uc218\uc601\uc7a5 4",
                    "Pool 3 ": "\uc218\uc601\uc7a5 3",
                    "Pool 2 ": "\uc218\uc601\uc7a5 2",
                    "Pool 1 ": "\uc218\uc601\uc7a5 1",
                    " Text ": "\ubcf8\ubb38",
                    " Video ": "\ube44\ub514\uc624",
                    "Promotional Materials": "\ud64d\ubcf4 \uc790\ub8cc",
                    " Banner": "\ubc30\ub108",
                    " Presentation ": "\ud45c\uc2dc",
                    Presentation: "\ud45c\uc2dc",
                    " OpenAlexa - Trust Wallet ": "OpenAlexa-\uc2e0\ud0c1 \uc9c0\uac11",
                    " Download Presentation ": "\ud504\ub9ac\uc820 \ud14c\uc774\uc158 \ub2e4\uc6b4\ub85c\ub4dc",
                    " Offline Income Pattern ": "\uc624\ud504\ub77c\uc778 \uc18c\ub4dd \ud328\ud134",
                    " OpenAlexa - Security Advisory ": "OpenAlexa-\ubcf4\uc548 \uad8c\uace0",
                    " Text advertising for posts and newsletters ": "\uac8c\uc2dc\ubb3c \ubc0f \ub274\uc2a4 \ub808\ud130\ub97c\uc704\ud55c \ud14d\uc2a4\ud2b8 \uad11\uace0",
                    " What is a Smart Contract? ": "\uc2a4\ub9c8\ud2b8 \uacc4\uc57d\uc774\ub780 \ubb34\uc5c7\uc785\ub2c8\uae4c?",
                    " A smart contract is a computer algorithm that controls the completion of a transaction. It is entered into the blockchain and remembered forever. The conditions are the same for everyone and cannot be changed or deleted by anyone. A smart contract makes financial transactions automatically, without human intervention, according to conditions written in advance. ": "\uc2a4\ub9c8\ud2b8 \uacc4\uc57d\uc740 \uac70\ub798 \uc644\ub8cc\ub97c \uc81c\uc5b4\ud558\ub294 \ucef4\ud4e8\ud130 \uc54c\uace0\ub9ac\uc998\uc785\ub2c8\ub2e4. \uadf8\uac83\uc740 \ube14\ub85d \uccb4\uc778\uc5d0 \uc785\ub825\ub418\uc5b4 \uc601\uc6d0\ud788 \uae30\uc5b5\ub429\ub2c8\ub2e4. \uc870\uac74\uc740 \ubaa8\ub4e0 \uc0ac\ub78c\uc5d0\uac8c \ub3d9\uc77c\ud558\uba70 \ub2e4\ub978 \uc0ac\ub78c\uc774 \ubcc0\uacbd\ud558\uac70\ub098 \uc0ad\uc81c\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \ud604\uba85\ud55c \uacc4\uc57d\uc740 \ubbf8\ub9ac \uc791\uc131\ub41c \uc870\uac74\uc5d0 \ub530\ub77c \uc0ac\ub78c\uc758 \uac1c\uc785\uc5c6\uc774 \uc790\ub3d9\uc73c\ub85c \uae08\uc735 \uac70\ub798\ub97c\ud569\ub2c8\ub2e4.",
                    " Example 1. You and a friend bet on the outcome of a football match. You make bets in the blockchain in the form of transactions, which are stored there until the end of the game. When the match ends, the smart contract automatically checks its outcome on one of the sports sites and transfers all the money to the winner. ": "\uc608 1. \ub2f9\uc2e0\uacfc \uce5c\uad6c\ub294 \ucd95\uad6c \uacbd\uae30 \uacb0\uacfc\uc5d0 \ubca0\ud305\ud588\uc2b5\ub2c8\ub2e4. \uac8c\uc784\uc774 \ub05d\ub0a0 \ub54c\uae4c\uc9c0 \uac70\ub798 \ud615\ud0dc\ub85c \ube14\ub85d \uccb4\uc778\uc5d0 \ubca0\ud305\ud569\ub2c8\ub2e4. \uacbd\uae30\uac00 \ub05d\ub098\uba74 \uc2a4\ub9c8\ud2b8 \uacc4\uc57d\uc740 \uc790\ub3d9\uc73c\ub85c \uc2a4\ud3ec\uce20 \uc0ac\uc774\ud2b8 \uc911 \ud558\ub098\uc5d0\uc11c \uacb0\uacfc\ub97c \ud655\uc778\ud558\uace0 \ubaa8\ub4e0 \ub3c8\uc744 \uc6b0\uc2b9\uc790\uc5d0\uac8c \uc774\uccb4\ud569\ub2c8\ub2e4.",
                    " Data is encrypted and distributed on the blockchain and duplicated many times, it cannot be changed or deleted. ": "\ub370\uc774\ud130\ub294 \ube14\ub85d \uccb4\uc778\uc5d0\uc11c \uc554\ud638\ud654 \ubc0f \ubc30\ud3ec\ub418\uba70 \uc5ec\ub7ec \ubc88 \ubcf5\uc81c\ub418\ubbc0\ub85c \ubcc0\uacbd\ud558\uac70\ub098 \uc0ad\uc81c\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
                    " Nobody will deceive anyone, everyone sees the code of the smart contract and understands that it works exactly as it is written in it. A smart contract is not a person, it will not lie and will not hide with money. ": "\ub204\uad6c\ub3c4 \ub204\uad70\uac00\ub97c\uae30\ub9cc\ud558\uc9c0 \uc54a\uc73c\uba70, \ubaa8\ub4e0 \uc0ac\ub78c\ub4e4\uc740 \ud604\uba85\ud55c \uacc4\uc57d\uc11c\uc758 \ucf54\ub4dc\ub97c\ubcf4\uace0 \uadf8\uac83\uc774 \uacc4\uc57d\uc11c\uc5d0 \uae30\ub85d \ub41c \uadf8\ub300\ub85c \uc791\ub3d9\ud55c\ub2e4\ub294 \uac83\uc744 \uc774\ud574\ud569\ub2c8\ub2e4. \ud604\uba85\ud55c \uacc4\uc57d\uc740 \uc0ac\ub78c\uc774 \uc544\ub2c8\uba70 \uac70\uc9d3\ub9d0\ud558\uc9c0 \uc54a\uc73c\uba70 \ub3c8\uc73c\ub85c \uc228\uc9c0 \uc54a\uc744 \uac83\uc785\ub2c8\ub2e4.",
                    " Example 2. You ordered a product through an online store. Payment for the goods is recorded on the blockchain, and only after confirmation by the courier that the goods have been delivered, the money goes to the owner. ": "\uc608 2. \uc628\ub77c\uc778 \uc0c1\uc810\uc744 \ud1b5\ud574 \uc81c\ud488\uc744 \uc8fc\ubb38\ud588\uc2b5\ub2c8\ub2e4. \uc0c1\ud488\uc5d0 \ub300\ud55c \uc9c0\ubd88\uc740 \ube14\ub85d \uccb4\uc778\uc5d0 \uae30\ub85d\ub418\uba70, \uc0c1\ud488\uc774 \ubc30\ub2ec\ub418\uc5c8\ub2e4\ub294 \ud0dd\ubc30\uc758 \ud655\uc778\uc774 \uc788\uc5b4\uc57c\ub9cc \ub3c8\uc774 \uc18c\uc720\uc790\uc5d0\uac8c \uc804\ub2ec\ub429\ub2c8\ub2e4.",
                    " A verified smart contract will work as long as the Ethereum blockchain exists. ": "\ud655\uc778 \ub41c \uc2a4\ub9c8\ud2b8 \uacc4\uc57d\uc740 \uc774\ub354 \ub9ac\uc6c0 \ube14\ub85d \uccb4\uc778\uc774 \uc874\uc7ac\ud558\ub294 \ud55c \uc791\ub3d9\ud569\ub2c8\ub2e4.",
                    " #openalexa #smartcontract #ethereum #bitcoin #crypto #blockchain #money # crypto #cryptocurrency #earningonline #btc #eth #investing #finance #profit #wagering #earnings #risklesswork #sales #marketing ": "#openalexa # \uc2a4\ub9c8\ud2b8 \uacc4\uc57d # \uc774\ub354 \ub9ac\uc6c0 # \ube44\ud2b8 \ucf54\uc778 # \uc554\ud638\ud654 # \ube14\ub85d \uccb4\uc778 # \ub3c8 # \uc554\ud638\ud654 # \uc554\ud638 \ud654\ud3d0 # \uc554\ud638\ud654 \uc628\ub77c\uc778 #btc #eth # \ud22c\uc790 # \uae08\uc735 # \uc774\uc775 # \ubd80\uc0c1 \uae08 # \uc218\uc785 #risklesswork # \ud310\ub9e4 # \ub9c8\ucf00\ud305",
                    " OpenAlexa Smart Contract : SCAM IMPOSSIBLE ": "OpenAlexa Smart Contract : \uc0ac\uae30 \ubd88\uac00\ub2a5",
                    "OpenAlexa Smart contract is the best that mankind could come up with in recent years.": "OpenAlexa Smart \uacc4\uc57d\uc740 \uc778\ub958\uac00 \ucd5c\uadfc\uc5d0 \uc0dd\uac01\ud574 \ub0bc \uc218\uc788\ub294 \ucd5c\uace0\uc785\ub2c8\ub2e4.",
                    " Locking and breaking a wallet is not possible ": "\uc9c0\uac11\uc744 \uc7a0 \uadf8\uac70\ub098 \uae68\ub294 \uac83\uc740 \ubd88\uac00\ub2a5\ud569\ub2c8\ub2e4",
                    " It is impossible to steal money ": "\ub3c8\uc744 \ud6d4\uce58\ub294 \uac83\uc740 \ubd88\uac00\ub2a5\ud569\ub2c8\ub2e4",
                    " Payments are made from wallet to participant\u2019s wallet ": "\uc9c0\uac11\uc5d0\uc11c \ucc38\uac00\uc790\uc758 \uc9c0\uac11\uc73c\ub85c \uacb0\uc81c",
                    " If you close the site, the smart contract will still work ": "\uc0ac\uc774\ud2b8\ub97c \ub2eb\uc544\ub3c4 \uc2a4\ub9c8\ud2b8 \uacc4\uc57d\uc740 \uacc4\uc18d \uc791\ub3d9\ud569\ub2c8\ub2e4",
                    " Unable to exclude your account from the structure ": "\uad6c\uc870\uc5d0\uc11c \uacc4\uc815\uc744 \uc81c\uc678 \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4",
                    " The project has no owner, all conditions are unchanged ": "\ud504\ub85c\uc81d\ud2b8\uc5d0\ub294 \uc18c\uc720\uc790\uac00 \uc5c6\uc73c\uba70 \ubaa8\ub4e0 \uc870\uac74\uc774 \ubcc0\uacbd\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4",
                    " OpenAlexa - Risk-free way of Earning ETH ": "OpenAlexa-\ubb34\uc704\ud5d8 ETH \uc801\ub9bd \ubc29\ubc95",
                    " THE FASTEST AND SIMPLE SMART CONTRACT ": "\uac00\uc7a5 \ube60\ub974\uace0 \uac04\ub2e8\ud55c \uc2a4\ub9c8\ud2b8 \uacc4\uc57d",
                    " Accessible to everyone. Entrance fee - 0.03 ETH only. ": "\ubaa8\ub4e0 \uc0ac\ub78c\uc774 \uc774\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc785\uc7a5\ub8cc-0.03 ETH \ub9cc.",
                    " For the first time such a simple and convenient marketing. Binary matrix 6 lines - 128 people in a team are enough to go through two cycles and earn 4000+ ETH ": "\ucc98\uc74c\uc73c\ub85c \uc774\ub7ec\ud55c \uac04\ub2e8\ud558\uace0 \ud3b8\ub9ac\ud55c \ub9c8\ucf00\ud305. \uc774\uc9c4 \ud589\ub82c 6 \ub77c\uc778-\ud55c \ud300\uc758 128 \uba85\uc73c\ub85c \ub450\uc8fc\uae30\ub97c \uac70\uccd0 4000+ ETH\ub97c \ubc8c \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
                    " View ": "\uc804\ub9dd",
                    " The repetition frequency of 60 days. Income can be repeated every 60 days with a ready-made team, earn 4000+ ETH every two months ": "60 \uc77c\uc758 \ubc18\ubcf5 \ube48\ub3c4 \uae30\uc131\ud488 \ud300\uc5d0\uc11c 60 \uc77c\ub9c8\ub2e4 \uc18c\ub4dd\uc744 \ubc18\ubcf5 \ud560 \uc218 \uc788\uc73c\uba70 2 \uac1c\uc6d4\ub9c8\ub2e4 4000+ ETH\ub97c \ubc8c \uc218 \uc788\uc2b5\ub2c8\ub2e4",
                    " OpenAlexa Explainer Video - EN ": "OpenAlexa Explainer \ube44\ub514\uc624-KO",
                    " OpenAlexa - Use with MetaMask ": "OpenAlexa-MetaMask\uc640 \ud568\uaed8 \uc0ac\uc6a9",
                    "What is OpenAlexa?": "OpenAlexa\ub294 \ubb34\uc5c7\uc785\ub2c8\uae4c?",
                    "Who is the Project Administrator?": "\ud504\ub85c\uc81d\ud2b8 \uad00\ub9ac\uc790\ub294 \ub204\uad6c\uc785\ub2c8\uae4c?",
                    " NO! The contract is programmed to not accumulate funds, but to serve only as a transmitter. The balance of the contract is always zero, anyone can verify this. It simply lacks the function of taking funds from your balance. Any transaction will reach the desired goal safe and sound. ": "\uc544\ub2c8! \uc774 \uacc4\uc57d\uc740 \uc790\uae08\uc744 \ucd95\uc801\ud558\uc9c0 \uc54a\uace0 \uc1a1\uc2e0\uae30 \uc5ed\ud560 \ub9cc\ud558\ub3c4\ub85d \ud504\ub85c\uadf8\ub7a8\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \uacc4\uc57d \uc794\uc561\uc740 \ud56d\uc0c1 0\uc774\uba70 \ub204\uad6c\ub098 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc794\uc561\uc5d0\uc11c \uc790\uae08\uc744 \uc778\ucd9c\ud558\ub294 \uae30\ub2a5\uc774 \ubd80\uc871\ud569\ub2c8\ub2e4. \ubaa8\ub4e0 \uac70\ub798\ub294 \uc548\uc804\ud558\uace0 \uac74\uc804\ud55c \ubaa9\ud45c\uc5d0 \ub3c4\ub2ec\ud569\ub2c8\ub2e4.",
                    "Can a transaction remain on the balance of a smart contract?": "\uac70\ub798\uac00 \ud604\uba85\ud55c \uacc4\uc57d\uc758 \uade0\ud615\uc744 \uc720\uc9c0\ud560 \uc218 \uc788\uc2b5\ub2c8\uae4c?",
                    " In a project like OpenAlexa there is no administrator. There is a creator who uploaded the contract code to the cryptocurrency blockchain Ethereum. After that, the smart contract has been part of the overall network, which is supported by miners. No one has the right to affect the operation of a smart contract, delete it or stop it. Any attempt to make unauthorised changes will be rejected due to inconsistency with previous copies in the block chain. ": "OpenAlexa\uc640 \uac19\uc740 \ud504\ub85c\uc81d\ud2b8\uc5d0\ub294 \uad00\ub9ac\uc790\uac00 \uc5c6\uc2b5\ub2c8\ub2e4. \uacc4\uc57d \ucf54\ub4dc\ub97c cryptocurrency \ube14\ub85d \uccb4\uc778 Ethereum\uc5d0 \uc5c5\ub85c\ub4dc \ud55c \uc791\uc131\uc790\uac00 \uc788\uc2b5\ub2c8\ub2e4. \uadf8 \ud6c4 \uc2a4\ub9c8\ud2b8 \uacc4\uc57d\uc740 \uc804\uccb4 \ub124\ud2b8\uc6cc\ud06c\uc758 \uc77c\ubd80\uc774\uba70 \uad11\ubd80\uc5d0\uc11c \uc9c0\uc6d0\ud569\ub2c8\ub2e4. \uc2a4\ub9c8\ud2b8 \uacc4\uc57d\uc758 \uc6b4\uc601\uc5d0 \uc601\ud5a5\uc744 \ubbf8\uce58\uac70\ub098 \uc0ad\uc81c\ud558\uac70\ub098 \uc911\uc9c0 \ud560 \uad8c\ub9ac\uac00\uc788\ub294 \uc0ac\ub78c\uc740 \uc5c6\uc2b5\ub2c8\ub2e4. \ube14\ub85d \uccb4\uc778\uc758 \uc774\uc804 \uc0ac\ubcf8\uacfc \uc77c\uce58\ud558\uc9c0 \uc54a\uc544 \ubb34\ub2e8\uc73c\ub85c \ubcc0\uacbd\ud558\ub824\ub294 \uc2dc\ub3c4\ub294 \uac70\ubd80\ub429\ub2c8\ub2e4.",
                    " OpenAlexa can be divided into 2 concepts: First - Is a smart contract or application running on a cryptocurrency network Ethereum. The application code is programmed to distribute incoming transfers among participants according to a specific algorithm. Second - Is the site itself, providing an interface for the convenience of working with a smart contract. ": "OpenAlexa\ub294 \ub450 \uac00\uc9c0 \uac1c\ub150\uc73c\ub85c \ub098\ub20c \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uccab \ubc88\uc9f8 \u2013 cryptocurrency \ub124\ud2b8\uc6cc\ud06c Ethereum\uc5d0\uc11c \uc2e4\ud589\ub418\ub294 \uc2a4\ub9c8\ud2b8 \uacc4\uc57d \ub610\ub294 \uc751\uc6a9 \ud504\ub85c\uadf8\ub7a8\uc785\ub2c8\ub2e4. \uc751\uc6a9 \ud504\ub85c\uadf8\ub7a8 \ucf54\ub4dc\ub294 \ud2b9\uc815 \uc54c\uace0\ub9ac\uc998\uc5d0 \ub530\ub77c \ucc38\uac00\uc790\uac04\uc5d0 \uc218\uc2e0 \uc804\uc1a1\uc744 \ubd84\ubc30\ud558\ub3c4\ub85d \ud504\ub85c\uadf8\ub798\ubc0d\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \ub458\uc9f8-\uc0ac\uc774\ud2b8 \uc790\uccb4\ub85c\uc11c \uc2a4\ub9c8\ud2b8 \uacc4\uc57d \uc791\uc5c5\uc758 \ud3b8\uc758\ub97c\uc704\ud55c \uc778\ud130\ud398\uc774\uc2a4\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4.",
                    " FAQs ": "\uc790\uc8fc \ubb3b\ub294 \uc9c8\ubb38",
                    " It is enough to have a computer or smartphone with Ethereum wallet. We also recommend installing Telegram instant messenger for the convenience of communication with other participants as well as official chats! ": "Ethereum \uc9c0\uac11\uc774 \ub2ec\ub9b0 \ucef4\ud4e8\ud130 \ub610\ub294 \uc2a4\ub9c8\ud2b8 \ud3f0\uc73c\ub85c \ucda9\ubd84\ud569\ub2c8\ub2e4. \ub610\ud55c \uacf5\uc2dd \ucc44\ud305\ubfd0\ub9cc \uc544\ub2c8\ub77c \ub2e4\ub978 \ucc38\uac00\uc790\uc640\uc758 \ucee4\ubba4\ub2c8\ucf00\uc774\uc158 \ud3b8\uc758\ub97c \uc704\ud574 Telegram \uc778\uc2a4\ud134\ud2b8 \uba54\uc2e0\uc800\ub97c \uc124\uce58\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4!",
                    "And if the project collapses, will I lose money?": "\uadf8\ub9ac\uace0 \ud504\ub85c\uc81d\ud2b8\uac00 \ubb34\ub108\uc9c0\uba74 \ub3c8\uc744 \uc783\uc744\uae4c\uc694?",
                    "What is mode of payment in OpenAlexa?": "OpenAlexa\uc758 \uacb0\uc81c \ubaa8\ub4dc\ub294 \ubb34\uc5c7\uc785\ub2c8\uae4c?",
                    " Since the smart contract is published Ethereum Blockchain, so participation in the project is possible only with this ETH digital currency. ": "\uc2a4\ub9c8\ud2b8 \uacc4\uc57d\uc740 \uc774\ub354 \ub9ac\uc6c0 \ube14\ub85d \uccb4\uc778 (Ethereum Blockchain)\uc73c\ub85c \uac8c\uc2dc\ub418\ubbc0\ub85c\uc774 ETH \ub514\uc9c0\ud138 \ud1b5\ud654\ub85c\ub9cc \ud504\ub85c\uc81d\ud2b8\uc5d0 \ucc38\uc5ec\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
                    " In the cryptocurrency industry, there is no such thing as wallet blocking. This is technically impossible even by the creators of Ethereum. Created by you the ETH-wallet belongs only to you. ": "cryptocurrency \uc0b0\uc5c5\uc5d0\uc11c\ub294 \uc9c0\uac11 \ucc28\ub2e8\uacfc \uac19\uc740 \uac83\uc774 \uc5c6\uc2b5\ub2c8\ub2e4. \uc774\ub354 \ub9ac\uc6c0 \uc81c\uc791\uc790\uc870\ucc28\ub3c4 \uae30\uc220\uc801\uc73c\ub85c \ubd88\uac00\ub2a5\ud569\ub2c8\ub2e4. \ub2f9\uc2e0\uc774 \ub9cc\ub4e0 ETH- \uc9c0\uac11\uc740 \ub2f9\uc2e0\uc5d0\uac8c\ub9cc \uc18d\ud569\ub2c8\ub2e4.",
                    "What I need to Join OpenAlexa?": "OpenAlexa\uc5d0 \uac00\uc785\ud558\ub824\uba74 \ubb34\uc5c7\uc774 \ud544\uc694\ud569\ub2c8\uae4c?",
                    " Again NO! The smart contract is absolutely transparent, all data is recorded in the blockchain chain. No scam or fraud. The project cannot fail. It will work as long as the blockchain exists, even if the site is closed. ": "\ub2e4\uc2dc NO! \uc2a4\ub9c8\ud2b8 \uacc4\uc57d\uc740 \uc644\uc804\ud788 \ud22c\uba85\ud558\uba70 \ubaa8\ub4e0 \ub370\uc774\ud130\ub294 \ube14\ub85d \uccb4\uc778 \uccb4\uc778\uc5d0 \uae30\ub85d\ub429\ub2c8\ub2e4. \uc0ac\uae30 \ub098 \uc0ac\uae30\uac00 \uc5c6\uc2b5\ub2c8\ub2e4. \ud504\ub85c\uc81d\ud2b8\ub294 \uc2e4\ud328 \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \uc0ac\uc774\ud2b8\uac00 \ub2eb\ud600 \uc788\uc5b4\ub3c4 \ube14\ub85d \uccb4\uc778\uc774 \uc874\uc7ac\ud558\ub294 \ud55c \uc791\ub3d9\ud569\ub2c8\ub2e4.",
                    "How can I be sure that my wallet will not be blocked?": "\uc9c0\uac11\uc774 \ucc28\ub2e8\ub418\uc9c0 \uc54a\ub3c4\ub85d\ud558\ub824\uba74 \uc5b4\ub5bb\uac8c\ud574\uc57c\ud569\ub2c8\uae4c?",
                    "Are there any fees or charges in OpenAlexa?": "OpenAlexa\uc5d0 \uc218\uc218\ub8cc \ub098 \uc694\uae08\uc774 \uc788\uc2b5\ub2c8\uae4c?",
                    " While registering or upgrading the User need to pay only the amount mentioned for the Level. Then the profit is sent to the uplines after deducting the admin fees. The admin fees consist of 10% operations fees and 6% OAP Token development Fees. The OAP token is airdropped to your wallet automatically with each registration and upgrade transaction. ": "\uc0ac\uc6a9\uc790\ub97c \ub4f1\ub85d\ud558\uac70\ub098 \uc5c5\uadf8\ub808\uc774\ub4dc\ud558\ub294 \ub3d9\uc548 \ub808\ubca8\uc5d0 \ub300\ud574 \uc5b8\uae09 \ub41c \uae08\uc561 \ub9cc \uc9c0\ubd88\ud558\uba74\ub429\ub2c8\ub2e4. \uadf8\ub7f0 \ub2e4\uc74c \uad00\ub9ac\uc790 \uc218\uc218\ub8cc\ub97c \uacf5\uc81c \ud55c \ud6c4 \uc218\uc775\uc774 \uc5c5 \ub77c\uc778\uc73c\ub85c \uc804\uc1a1\ub429\ub2c8\ub2e4. \uad00\ub9ac\uc790 \uc218\uc218\ub8cc\ub294 10 % \uc6b4\uc601\ube44\uc640 6 % OAP \ud1a0\ud070 \uac1c\ubc1c\ube44\ub85c \uad6c\uc131\ub429\ub2c8\ub2e4. OAP \ud1a0\ud070\uc740 \uac01 \ub4f1\ub85d \ubc0f \uc5c5\uadf8\ub808\uc774\ub4dc \uac70\ub798\ub9c8\ub2e4 \uc790\ub3d9\uc73c\ub85c \uc9c0\uac11\uc5d0 \uc5d0\uc5b4 \ub4dc\ub78d\ub429\ub2c8\ub2e4.",
                    " To do registration, you simply need to make payment of the first level. To do this, Click on 'Register' and follow further instructions. After successful payment, you take a position in the structure and are considered a full member. ": "\ub4f1\ub85d\uc744\ud558\ub824\uba74 \uccab \ubc88\uc9f8 \ub808\ubca8\uc744 \uc9c0\ubd88\ud558\uba74\ub429\ub2c8\ub2e4. \uc774\ub807\uac8c\ud558\ub824\uba74 '\ub4f1\ub85d'\uc744 \ud074\ub9ad\ud558\uace0 \ucd94\uac00 \uc9c0\uce68\uc744 \ub530\ub974\uc2ed\uc2dc\uc624. \uc131\uacf5\uc801\uc778 \uc9c0\ubd88 \ud6c4, \ub2f9\uc2e0\uc740 \uad6c\uc870\uc5d0\uc11c \uc704\uce58\ub97c \ucc28\uc9c0\ud558\uace0 \uc815\ud68c\uc6d0\uc73c\ub85c \uac04\uc8fc\ub429\ub2c8\ub2e4.",
                    "How to register in OpenAlexa?": "OpenAlexa\uc5d0 \ub4f1\ub85d\ud558\ub294 \ubc29\ubc95?",
                    "Is it possible to earn passively?": "\uc218\ub3d9\uc801\uc73c\ub85c \ubc8c \uc218 \uc788\uc2b5\ub2c8\uae4c?",
                    "What are overflows?": "\uc624\ubc84 \ud50c\ub85c\uc6b0 \ub780 \ubb34\uc5c7\uc785\ub2c8\uae4c?",
                    " In addition to personal invitations, partners can appear in your structure in two ways: These are \u201cOverflows\u201d and \u201cFree Partners\u201d. Therefore, it can be argued that the system has the possibility of passive earnings. But this does not guarantee you a quick decent income, which other successful participants who are active can receive. ": '\uac1c\uc778 \ucd08\ub300 \uc678\uc5d0\ub3c4 \ud30c\ud2b8\ub108\ub294 "\uc624\ubc84\ud50c\ub85c"\ubc0f "\ubb34\ub8cc \ud30c\ud2b8\ub108"\ub77c\ub294 \ub450 \uac00\uc9c0 \ubc29\uc2dd\uc73c\ub85c \uad6c\uc870\uc5d0 \ub098\ud0c0\ub0a0 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub530\ub77c\uc11c \uc2dc\uc2a4\ud15c\uc774 \uc218\ub3d9 \uc218\uc785\uc758 \uac00\ub2a5\uc131\uc774 \uc788\ub2e4\uace0 \uc8fc\uc7a5 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub7ec\ub098 \uc774\uac83\uc774 \uadc0\ud558\uc5d0\uac8c \ud65c\ub3d9\uc801\uc778 \ub2e4\ub978 \uc131\uacf5\uc801\uc778 \ucc38\uac00\uc790\uac00\ubc1b\uc744 \uc218\uc788\ub294 \ube60\ub978 \uc218\uc785\uc744 \ubcf4\uc7a5\ud558\uc9c0\ub294 \uc54a\uc2b5\ub2c8\ub2e4.',
                    "Can I register without an referral link?": "\ucd94\ucc9c \ub9c1\ud06c\uc5c6\uc774 \ub4f1\ub85d \ud560 \uc218 \uc788\uc2b5\ub2c8\uae4c?",
                    " Overflow is a process that occurs when a participant registers for an upline, in which the first level is filled by two participants. The next new member falls into the structure of this upline below, in the nearest free place. ": "\uc624\ubc84\ud50c\ub85c\ub294 \ucc38\uac00\uc790\uac00 \uc5c5 \ub77c\uc778\uc5d0 \ub4f1\ub85d \ud560 \ub54c \ubc1c\uc0dd\ud558\ub294 \ud504\ub85c\uc138\uc2a4\ub85c, \uccab \ubc88\uc9f8 \ub808\ubca8\uc740 \ub450 \uba85\uc758 \ucc38\uac00\uc790\ub85c \ucc44\uc6cc\uc9d1\ub2c8\ub2e4. \ub2e4\uc74c \uc2e0\uc785 \ud68c\uc6d0\uc740 \uac00\uc7a5 \uac00\uae4c\uc6b4 \ubb34\ub8cc \uc7a5\uc18c\uc5d0\uc11c\uc774 \uc5c5 \ub77c\uc778\uc758 \uad6c\uc870\uc5d0 \uc18d\ud569\ub2c8\ub2e4.",
                    " Yes, such members are called \u201cfree partners.\u201d These are participants who came for any reason WITHOUT an affiliate link. Free partners are distributed evenly across the System (from left to right), starting from those uplines that were previously registered. ": '\uc608, \uadf8\ub7ec\ud55c \ud68c\uc6d0\uc744 "\ubb34\ub8cc \ud30c\ud2b8\ub108"\ub77c\uace0\ud569\ub2c8\ub2e4. \uc774\ub4e4\uc740 \uc5b4\ub5a4 \uc774\uc720\ub85c \ub4e0 \uc81c\ud734 \ub9c1\ud06c\uc5c6\uc774 \uc628 \ucc38\uac00\uc790\uc785\ub2c8\ub2e4. \ubb34\ub8cc \ud30c\ud2b8\ub108\ub294 \uc774\uc804\uc5d0 \ub4f1\ub85d \ub41c \uc5c5 \ub77c\uc778\uc5d0\uc11c \uc2dc\uc791\ud558\uc5ec \uc67c\ucabd\uc5d0\uc11c \uc624\ub978\ucabd\uc73c\ub85c \uc2dc\uc2a4\ud15c \uc804\uccb4\uc5d0 \uace0\ub974\uac8c \ubd84\uc0b0\ub429\ub2c8\ub2e4.',
                    "What happens if my partner buys a level before me?": "\ub0b4 \ud30c\ud2b8\ub108\uac00 \ub0b4 \ub808\ubca8\uc744 \uad6c\ub9e4\ud558\uba74 \uc5b4\ub5bb\uac8c\ub429\ub2c8\uae4c?",
                    "What are Levels?": "\ub808\ubca8\uc740 \ubb34\uc5c7\uc785\ub2c8\uae4c?",
                    "How to add funds to my ETH wallet?": "\ub0b4 ETH \uc9c0\uac11\uc5d0 \uc790\uae08\uc744 \ucd94\uac00\ud558\ub294 \ubc29\ubc95\uc740 \ubb34\uc5c7\uc785\ub2c8\uae4c?",
                    " The money will be redirected to your upline of the same line as your partner. If you buy levels on time, this will not happen. If this happened, it\u2019s not scary. If you find this in time, then after activating the level, continue to receive the remaining transfers for this level. ": "\uae08\uc561\uc740 \ud30c\ud2b8\ub108\uc640 \ub3d9\uc77c\ud55c \ub77c\uc778\uc758 \uc5c5 \ub77c\uc778\uc73c\ub85c \ub9ac\ub514\ub809\uc158\ub429\ub2c8\ub2e4. \uc815\uc2dc\uc5d0 \ub808\ubca8\uc744 \uad6c\ub9e4\ud558\uba74 \uc774\ub7f0 \uc77c\uc774 \ubc1c\uc0dd\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uc774\ub7f0 \uc77c\uc774 \ubc1c\uc0dd\ud574\ub3c4 \ubb34\uc12d\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uc2dc\uac04 \ub0b4\uc5d0\uc774 \ub808\ubca8\uc744 \ucc3e\uc73c\uba74 \ub808\ubca8\uc744 \ud65c\uc131\ud654 \ud55c \ud6c4\uc774 \ub808\ubca8\uc5d0 \ub300\ud55c \ub098\uba38\uc9c0 \uc804\uc1a1\uc744 \uacc4\uc18d \uc218\uc2e0\ud558\uc2ed\uc2dc\uc624.",
                    " Level is a status that gives the right to receive remuneration from a partner in its structure of the relevant lines. ": "\ub808\ubca8\uc740 \uad00\ub828 \ub77c\uc778\uc758 \uad6c\uc870\uc5d0\uc11c \ud30c\ud2b8\ub108\ub85c\ubd80\ud130 \ubcf4\uc218\ub97c\ubc1b\uc744 \uad8c\ub9ac\ub97c \ubd80\uc5ec\ud558\ub294 \uc0c1\ud0dc\uc785\ub2c8\ub2e4.",
                    "If I have an 2 level, can I immediately buy the 4 level without having the 3 level?": "\ub808\ubca8\uc774 2 \uc778 \uacbd\uc6b0 3 \ub808\ubca8\uc774 \uc5c6\uc5b4\ub3c4 4 \ub808\ubca8\uc744 \uc989\uc2dc \uad6c\uc785\ud560 \uc218 \uc788\uc2b5\ub2c8\uae4c?",
                    "Why do I need to renew levels every 60 days?": "60 \uc77c\ub9c8\ub2e4 \ub808\ubca8\uc744 \uac31\uc2e0\ud574\uc57c\ud558\ub294 \uc774\uc720\ub294 \ubb34\uc5c7\uc785\ub2c8\uae4c?",
                    " Levels are bought only sequentially and in order. If you try to buy the 4 level without the 3 level, the smart contract will not process such a transfer. Money will not go anywhere and will remain with you. ": "\ub808\ubca8\uc740 \uc21c\uc11c \ub300\ub85c\ub9cc \uad6c\ub9e4\ud569\ub2c8\ub2e4. 3 \ub808\ubca8\uc5c6\uc774 4 \ub808\ubca8\uc744 \uad6c\ub9e4\ud558\ub824\uace0\ud558\uba74 \uc2a4\ub9c8\ud2b8 \uacc4\uc57d\uc740 \uadf8\ub7ec\ud55c \uc591\ub3c4\ub97c \ucc98\ub9ac\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \ub3c8\uc740 \uc5b4\ub514\uc5d0\ub3c4 \uac00\uc9c0 \uc54a\uc744 \uac83\uc774\uba70 \ub2f9\uc2e0\uacfc \ud568\uaed8\uc788\uc744 \uac83\uc785\ub2c8\ub2e4.",
                    " There are many exchangers. Reliable and proven exchangers can be found on the Google. If this is your first time making an exchange, follow these instructions: ": "\ub9ce\uc740 \uad50\ud658\uc790\uac00 \uc788\uc2b5\ub2c8\ub2e4. \uc2e0\ub8b0\ud560 \uc218 \uc788\uace0 \uc785\uc99d \ub41c \uad50\ud658\uae30\ub294 Google\uc5d0\uc11c \ucc3e\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ucc98\uc74c \uad50\ud658\uc744\ud558\ub294 \uacbd\uc6b0 \ub2e4\uc74c \uc9c0\uce68\uc744 \ub530\ub974\uc2ed\uc2dc\uc624.",
                    " Thanks to this rule, your profit will be repeated every 60 days, since after your extension the partners in your structure will do the same. ": "\uc774 \uaddc\uce59 \ub355\ubd84\uc5d0 \uc5f0\uc7a5 \ud6c4 \uad6c\uc870\uc758 \ud30c\ud2b8\ub108\uac00 \ub3d9\uc77c\ud55c \uc791\uc5c5\uc744 \uc218\ud589\ud558\ubbc0\ub85c 60 \uc77c\ub9c8\ub2e4 \uc218\uc775\uc774 \ubc18\ubcf5\ub429\ub2c8\ub2e4.",
                    " Your account remains in the System forever, and at any time you can extend the levels and continue to receive income. ": "\uadc0\ud558\uc758 \uacc4\uc815\uc740 \uc2dc\uc2a4\ud15c\uc5d0 \uc601\uad6c\uc801\uc73c\ub85c \uc720\uc9c0\ub418\uba70 \uc5b8\uc81c\ub4e0\uc9c0 \ub808\ubca8\uc744 \uc5f0\uc7a5\ud558\uace0 \uc218\uc785\uc744 \uacc4\uc18d\ubc1b\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
                    "What will happen if you do not extend the level and it is deactivated?": "\ub808\ubca8\uc744 \ud655\uc7a5\ud558\uc9c0 \uc54a\uace0 \ube44\ud65c\uc131\ud654\ud558\uba74 \uc5b4\ub5bb\uac8c\ub429\ub2c8\uae4c?"
                }
            }), {
                "en-ru": {
                    "Automatically login if you have following wallets:": "\u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0432\u0445\u043e\u0434, \u0435\u0441\u043b\u0438 \u0443 \u0432\u0430\u0441 \u0435\u0441\u0442\u044c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u043a\u043e\u0448\u0435\u043b\u044c\u043a\u0438:",
                    English: "\u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u0438\u0439",
                    OR: "\u0418\u041b\u0418",
                    "Login Automatically": "\u0412\u043e\u0439\u0442\u0438 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438",
                    "Unison pool is live!": "\u0423\u043d\u0438\u0441\u043e\u043d \u043f\u0443\u043b \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430",
                    FOLLOW: "\u0421\u041b\u0415\u0414\u041e\u0412\u0410\u0422\u042c",
                    "Log in": "\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f",
                    Russian: "\u0440\u0443\u0441\u0441\u043a\u0438\u0439",
                    Korean: "\u043a\u043e\u0440\u0435\u0439\u0441\u043a\u0438\u0439 \u044f\u0437\u044b\u043a",
                    "SIGN UP": "\u0417\u0410\u0420\u0415\u0413\u0418\u0421\u0422\u0420\u0418\u0420\u041e\u0412\u0410\u0422\u042c\u0421\u042f",
                    "Hello,": "\u041f\u0440\u0438\u0432\u0435\u0442,",
                    Filipino: "\u0424\u0438\u043b\u0438\u043f\u043f\u0438\u043d\u0441\u043a\u0438\u0439",
                    Italian: "\u0438\u0442\u0430\u043b\u044c\u044f\u043d\u0441\u043a\u0438\u0439",
                    "ENTER MANUALLY (PREVIEW MODE)": "\u0412\u0412\u041e\u0414 \u0412\u0420\u0423\u0427\u041d\u0423\u042e (\u0420\u0415\u0416\u0418\u041c \u041f\u0420\u041e\u0421\u041c\u041e\u0422\u0420\u0410)",
                    "welcome!": "\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c!",
                    Alexa: "Alexa",
                    "Smart Contract Address": "\u0421\u043c\u0430\u0440\u0442 \u041a\u043e\u043d\u0442\u0440\u0430\u043a\u0442 \u0410\u0434\u0440\u0435\u0441",
                    Spanish: "\u0438\u0441\u043f\u0430\u043d\u0441\u043a\u0438\u0439",
                    "The most advanced way to invest in blockchain technology": "\u0421\u0430\u043c\u044b\u0439 \u043f\u0440\u043e\u0434\u0432\u0438\u043d\u0443\u0442\u044b\u0439 \u0441\u043f\u043e\u0441\u043e\u0431 \u0438\u043d\u0432\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432 \u0431\u043b\u043e\u043a\u0447\u0435\u0439\u043d-\u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438",
                    Thai: "\u0442\u0430\u0439\u0441\u043a\u0438\u0439",
                    "Copyright @ Open": "Copyright @ Open",
                    "window.dataLayer = window.dataLayer || [];\n  function gtag() { dataLayer.push(arguments); }\n  gtag('js', new Date());\n\n  gtag('config', 'UA-166894577-2');": "window.dataLayer = window.dataLayer || []; function gtag () {dataLayer.push (arguments); } gtag ('js', new Date ()); gtag (\xabconfig\xbb, \xabUA-166894577-2\xbb);",
                    Dashboard: "\u041f\u0430\u043d\u0435\u043b\u044c \u043f\u0440\u0438\u0431\u043e\u0440\u043e\u0432",
                    "Control Panel": "\u041f\u0430\u043d\u0435\u043b\u044c \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f",
                    Uplines: "Uplines",
                    "Lost Profits": "\u041f\u043e\u0442\u0435\u0440\u044f\u043d\u043d\u0430\u044f \u043f\u0440\u0438\u0431\u044b\u043b\u044c",
                    Promo: "\u0440\u0435\u043a\u043b\u0430\u043c\u043d\u044b\u0439",
                    "Unison Pool": "\u0423\u043d\u0438\u0441\u043e\u043d \u041f\u0443\u043b",
                    Partners: "\u043f\u0430\u0440\u0442\u043d\u0435\u0440\u044b",
                    Logout: "\u0412\u044b\u0439\u0442\u0438",
                    "Welcome to": "\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c \u0432",
                    FAQ: "\u0412\u043e\u043f\u0440\u043e\u0441\u044b-\u041e\u0442\u0432\u0435\u0442\u044b",
                    Open: "\u043e\u0442\u043a\u0440\u044b\u0442\u043e",
                    euro: "\u0435\u0432\u0440\u043e",
                    ID: "ID",
                    "ETH WALLET": "ETH \u043a\u043e\u0448\u0435\u043b\u0435\u043a",
                    dollar: "\u0434\u043e\u043b\u043b\u0430\u0440",
                    Level: "\u0443\u0440\u043e\u0432\u0435\u043d\u044c",
                    "Earned Money": "\u0417\u0430\u0440\u0430\u0431\u043e\u0442\u0430\u043d\u043d\u044b\u0435 \u0434\u0435\u043d\u044c\u0433\u0438",
                    Upgrade: "\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c",
                    "Earning ETH Level": "\u0417\u0430\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c ETH \u0443\u0440\u043e\u0432\u0435\u043d\u044c",
                    "No Data": "\u041d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445",
                    "Growth of Structure": "\u0420\u043e\u0441\u0442 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b",
                    "New Users": "\u041d\u043e\u0432\u044b\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438",
                    "My Partners": "\u041c\u043e\u0438 \u043f\u0430\u0440\u0442\u043d\u0435\u0440\u044b",
                    "Total Income": "\u041e\u0431\u0449\u0430\u044f \u043f\u0440\u0438\u0431\u044b\u043b\u044c",
                    "Earned Ethereum": "\u0417\u0430\u0440\u0430\u0431\u043e\u0442\u0430\u043d\u043d\u044b\u0439 \u042d\u0444\u0438\u0440\u0438\u0443\u043c",
                    "Total Partners/ 24hrs": "\u0412\u0441\u0435\u0433\u043e \u043f\u0430\u0440\u0442\u043d\u0435\u0440\u043e\u0432 / 24 \u0447\u0430\u0441\u0430",
                    "%": "%",
                    "My Directs": "\u041c\u043e\u0438 \u041d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f",
                    "Pool Earning Meter": "\u0421\u0447\u0435\u0442\u0447\u0438\u043a \u0437\u0430\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0431\u0430\u0441\u0441\u0435\u0439\u043d\u0430",
                    "Pool Dashboard": "\u041f\u0430\u043d\u0435\u043b\u044c \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u0431\u0430\u0441\u0441\u0435\u0439\u043d\u0430",
                    "Your levels": "\u0412\u0430\u0448\u0438 \u0443\u0440\u043e\u0432\u043d\u0438",
                    "Created with Highcharts 8.1.0": "\u0421\u043e\u0437\u0434\u0430\u043d\u043e \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e Highcharts 8.1.0",
                    "Copyright \xa9OpenAlexa 2020. All rights reserved": "Copyright \xa9 OpenAlexa 2020. \u0412\u0441\u0435 \u043f\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043d\u044b.",
                    "Smart Contract": "\u0421\u043c\u0430\u0440\u0442 \u041a\u043e\u043d\u0442\u0440\u0430\u043a\u0442",
                    "Extend For 60 days": "\u041f\u0440\u043e\u0434\u043b\u0438\u0442\u044c \u043d\u0430 60 \u0434\u043d\u0435\u0439",
                    "Level 1": "\u0423\u0440\u043e\u0432\u0435\u043d\u044c 1",
                    "Expires in 97 days": "\u0418\u0441\u0442\u0435\u043a\u0430\u0435\u0442 \u0447\u0435\u0440\u0435\u0437 97 \u0434\u043d\u0435\u0439",
                    "Eth Profit": "Eth \u041f\u0440\u043e\u0444\u0438\u0442",
                    "Pool 1": "\u041f\u0443\u043b 1",
                    "Pool 4": "\u041f\u0443\u043b 4",
                    "Pool 2": "\u041f\u0443\u043b  2",
                    "Pool 3": "\u041f\u0443\u043b 3",
                    "Pool 8": "\u041f\u0443\u043b 8",
                    "Pool 7": "\u041f\u0443\u043b 7",
                    "Pool 6": "\u041f\u0443\u043b 6",
                    "Pool 5": "\u041f\u0443\u043b 5",
                    Inactive: "\u041d\u0435\u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0439",
                    "Buy for 7 ETH": "\u041a\u0443\u043f\u0438\u0442\u044c \u0437\u0430 7 ETH",
                    "Expires in 45 days": "\u0418\u0441\u0442\u0435\u043a\u0430\u0435\u0442 \u0447\u0435\u0440\u0435\u0437 45 \u0434\u043d\u0435\u0439",
                    "Buy for 25 ETH": "\u041a\u0443\u043f\u0438\u0442\u044c \u0437\u0430 25 ETH",
                    "Line 3": "\u041b\u0438\u043d\u0438\u044f 3",
                    "Line 5": "\u041b\u0438\u043d\u0438\u044f 5",
                    "Line 6": "\u041b\u0438\u043d\u0438\u044f 6",
                    "Line 7": "\u041b\u0438\u043d\u0438\u044f 7",
                    "Line 8": "\u041b\u0438\u043d\u0438\u044f 8",
                    Find: "\u043d\u0430\u0439\u0442\u0438",
                    "Line 1": "\u041b\u0438\u043d\u0438\u044f 1",
                    Address: "\u0410\u0434\u0440\u0435\u0441",
                    "Line 4": "\u041b\u0438\u043d\u0438\u044f 4",
                    "Line 2": "\u041b\u0438\u043d\u0438\u044f 2",
                    Id: "ID",
                    "Copy your link": "\u0421\u043a\u043e\u043f\u0438\u0440\u0443\u0439\u0442\u0435 \u0432\u0430\u0448\u0443 \u0441\u0441\u044b\u043b\u043a\u0443",
                    "Line 9": "\u041b\u0438\u043d\u0438\u044f 9",
                    Copy: "\u043a\u043e\u043f\u0438\u044f",
                    "Toggle Tree (expand/collapse)": "Toggle Tree (\u0440\u0430\u0437\u0432\u0435\u0440\u043d\u0443\u0442\u044c / \u0441\u0432\u0435\u0440\u043d\u0443\u0442\u044c)",
                    "Your Affiliate Link": "\u0412\u0430\u0448\u0430 \u043f\u0430\u0440\u0442\u043d\u0435\u0440\u0441\u043a\u0430\u044f \u0441\u0441\u044b\u043b\u043a\u0430",
                    "Total Partners": "\u0412\u0441\u0435\u0433\u043e \u043f\u0430\u0440\u0442\u043d\u0435\u0440\u043e\u0432",
                    "ID : 0": "ID: 0",
                    "Level 2": "\u0423\u0440\u043e\u0432\u0435\u043d\u044c 2",
                    "Level 3": "\u0423\u0440\u043e\u0432\u0435\u043d\u044c 3",
                    "Level 4": "\u0423\u0440\u043e\u0432\u0435\u043d\u044c 4",
                    "ID :1623": "ID: 1623",
                    "Level 6": "\u0423\u0440\u043e\u0432\u0435\u043d\u044c 6",
                    "ID :3861": "ID: 3861",
                    "Level 5": "\u0423\u0440\u043e\u0432\u0435\u043d\u044c 5",
                    "ID :1684": "ID: 1684",
                    "ID :2298": "ID: 2298",
                    "ID :6489": "ID: 6489",
                    "ID :8378": "ID: 8378",
                    "ID :8410": "ID: 8410",
                    "ID :4447": "ID: 4447",
                    "ID :8426": "ID: 8426",
                    "ID :8434": "ID: 8434",
                    "ID :17940": "ID: 17940",
                    "ID :8443": "ID: 8443",
                    Line: "\u041b\u0438\u043d\u0438\u044f",
                    "Eth Wallet": "Eth \u043a\u043e\u0448\u0435\u043b\u0435\u043a",
                    "Lost Profit Total : 0 ETH": "\u0412\u0441\u0435\u0433\u043e \u043f\u043e\u0442\u0435\u0440\u044f\u043d\u043d\u043e\u0439 \u043f\u0440\u0438\u0431\u044b\u043b\u0438: 0 ETH",
                    "S.No": "S.No",
                    Amount: "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e",
                    Date: "\u0414\u0430\u0442\u0430",
                    "My Directs : 0": "\u041c\u043e\u0438 \u0443\u043a\u0430\u0437\u0430\u043d\u0438\u044f: 0",
                    "My Sponsor": "\u041c\u043e\u0439 \u0441\u043f\u043e\u043d\u0441\u043e\u0440",
                    "Amount(ETH)": "\u0421\u0443\u043c\u043c\u0430 (ETH)",
                    Pool: "\u041f\u0443\u043b",
                    Receiver: "\u041f\u043e\u043b\u0443\u0447\u0430\u0442\u0435\u043b\u044c",
                    Transactions: "\u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438",
                    Sponsor: "\u0441\u043f\u043e\u043d\u0441\u043e\u0440",
                    "My Unison Pools": "\u041c\u043e\u0438 \u0423\u043d\u0438\u0441\u043e\u043d \u041f\u0443\u043b\u044b",
                    "Join Pool": "\u041f\u0440\u0438\u0441\u043e\u0435\u0434\u0438\u043d\u0438\u0442\u044c\u0441\u044f \u043a \u043f\u0443\u043b\u0443",
                    "Priority Counter": "\u0421\u0447\u0435\u0442\u0447\u0438\u043a \u043f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442\u043e\u0432",
                    "Increase in priority will help you to claim your reward early.": "\u0423\u0432\u0435\u043b\u0438\u0447\u0435\u043d\u0438\u0435 \u043f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442\u0430 \u043f\u043e\u043c\u043e\u0436\u0435\u0442 \u0432\u0430\u043c \u0431\u044b\u0441\u0442\u0440\u043e \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043d\u0430\u0433\u0440\u0430\u0434\u0443.",
                    "Pool / Direct Income": "\u041f\u0443\u043b / \u041f\u0440\u044f\u043c\u043e\u0439 \u0434\u043e\u0445\u043e\u0434",
                    Active: "\u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0439",
                    "Promotional Materials": "\u0420\u0435\u043a\u043b\u0430\u043c\u043d\u044b\u0435 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b",
                    Presentation: "\u043f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044f",
                    "Download Presentation": "\u0421\u043a\u0430\u0447\u0430\u0442\u044c \u043f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u044e",
                    Banner: "\u0431\u0430\u043d\u043d\u0435\u0440",
                    "Offline Income Pattern": "\u041e\u0444\u0444\u043b\u0430\u0439\u043d \u043c\u043e\u0434\u0435\u043b\u044c \u0434\u043e\u0445\u043e\u0434\u0430",
                    "Text advertising for posts and newsletters": "\u0422\u0435\u043a\u0441\u0442\u043e\u0432\u0430\u044f \u0440\u0435\u043a\u043b\u0430\u043c\u0430 \u0434\u043b\u044f \u043f\u043e\u0441\u0442\u043e\u0432 \u0438 \u0440\u0430\u0441\u0441\u044b\u043b\u043e\u043a",
                    Video: "\u0432\u0438\u0434\u0435\u043e",
                    "OpenAlexa - Security Advisory": "OpenAlexa - \u0421\u043e\u0432\u0435\u0442\u044b \u043f\u043e \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u0438",
                    Text: "\u0422\u0435\u043a\u0441\u0442",
                    "A smart contract is a computer algorithm that controls the completion of a transaction. It is entered into the blockchain and remembered forever. The conditions are the same for everyone and cannot be changed or deleted by anyone. A smart contract makes financial transactions automatically, without human intervention, according to conditions written in advance.": "\u0423\u043c\u043d\u044b\u0439 \u043a\u043e\u043d\u0442\u0440\u0430\u043a\u0442 - \u044d\u0442\u043e \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u043d\u044b\u0439 \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u0443\u0435\u0442 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u0435 \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0438. \u041e\u043d \u0432\u0432\u043e\u0434\u0438\u0442\u0441\u044f \u0432 \u0431\u043b\u043e\u043a\u0447\u0435\u0439\u043d \u0438 \u0437\u0430\u043f\u043e\u043c\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u043d\u0430\u0432\u0441\u0435\u0433\u0434\u0430. \u0423\u0441\u043b\u043e\u0432\u0438\u044f \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u044b \u0434\u043b\u044f \u0432\u0441\u0435\u0445 \u0438 \u043d\u0435 \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u044b \u0438\u043b\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u044b \u043a\u0435\u043c-\u043b\u0438\u0431\u043e. \u0418\u043d\u0442\u0435\u043b\u043b\u0435\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0439 \u043a\u043e\u043d\u0442\u0440\u0430\u043a\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442 \u0444\u0438\u043d\u0430\u043d\u0441\u043e\u0432\u044b\u0435 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438, \u0431\u0435\u0437 \u0443\u0447\u0430\u0441\u0442\u0438\u044f \u0447\u0435\u043b\u043e\u0432\u0435\u043a\u0430, \u0432 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0437\u0430\u0440\u0430\u043d\u0435\u0435 \u043e\u0433\u043e\u0432\u043e\u0440\u0435\u043d\u043d\u044b\u043c\u0438 \u0443\u0441\u043b\u043e\u0432\u0438\u044f\u043c\u0438.",
                    "OpenAlexa - Trust Wallet": "OpenAlexa - \u0442\u0440\u0430\u0441\u0442\u043e\u0432\u044b\u0439 \u043a\u043e\u0448\u0435\u043b\u0435\u043a",
                    "What is a Smart Contract?": "\u0427\u0442\u043e \u0442\u0430\u043a\u043e\u0435 \u0441\u043c\u0430\u0440\u0442-\u043a\u043e\u043d\u0442\u0440\u0430\u043a\u0442?",
                    "Example 1. You and a friend bet on the outcome of a football match. You make bets in the blockchain in the form of transactions, which are stored there until the end of the game. When the match ends, the smart contract automatically checks its outcome on one of the sports sites and transfers all the money to the winner.": "\u041f\u0440\u0438\u043c\u0435\u0440 1. \u0412\u044b \u0441 \u0434\u0440\u0443\u0433\u043e\u043c \u0441\u0442\u0430\u0432\u0438\u0442\u0435 \u043d\u0430 \u0438\u0441\u0445\u043e\u0434 \u0444\u0443\u0442\u0431\u043e\u043b\u044c\u043d\u043e\u0433\u043e \u043c\u0430\u0442\u0447\u0430. \u0412\u044b \u0434\u0435\u043b\u0430\u0435\u0442\u0435 \u0441\u0442\u0430\u0432\u043a\u0438 \u0432 \u0431\u043b\u043e\u043a\u0447\u0435\u0439\u043d\u0435 \u0432 \u0432\u0438\u0434\u0435 \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0439, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0445\u0440\u0430\u043d\u044f\u0442\u0441\u044f \u0442\u0430\u043c \u0434\u043e \u043a\u043e\u043d\u0446\u0430 \u0438\u0433\u0440\u044b. \u041a\u043e\u0433\u0434\u0430 \u043c\u0430\u0442\u0447 \u0437\u0430\u043a\u0430\u043d\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044f, \u0443\u043c\u043d\u044b\u0439 \u043a\u043e\u043d\u0442\u0440\u0430\u043a\u0442 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u0442 \u0435\u0433\u043e \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u043d\u0430 \u043e\u0434\u043d\u043e\u043c \u0438\u0437 \u0441\u043f\u043e\u0440\u0442\u0438\u0432\u043d\u044b\u0445 \u0441\u0430\u0439\u0442\u043e\u0432 \u0438 \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u0438\u0442 \u0432\u0441\u0435 \u0434\u0435\u043d\u044c\u0433\u0438 \u043f\u043e\u0431\u0435\u0434\u0438\u0442\u0435\u043b\u044e.",
                    "Example 2. You ordered a product through an online store. Payment for the goods is recorded on the blockchain, and only after confirmation by the courier that the goods have been delivered, the money goes to the owner.": "\u041f\u0440\u0438\u043c\u0435\u0440 2. \u0412\u044b \u0437\u0430\u043a\u0430\u0437\u0430\u043b\u0438 \u0442\u043e\u0432\u0430\u0440 \u0447\u0435\u0440\u0435\u0437 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442-\u043c\u0430\u0433\u0430\u0437\u0438\u043d. \u041e\u043f\u043b\u0430\u0442\u0430 \u0437\u0430 \u0442\u043e\u0432\u0430\u0440 \u0444\u0438\u043a\u0441\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0432 \u0431\u043b\u043e\u043a\u0447\u0435\u0439\u043d\u0435, \u0438 \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u043e\u0441\u043b\u0435 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u044f \u043a\u0443\u0440\u044c\u0435\u0440\u043e\u043c, \u0447\u0442\u043e \u0442\u043e\u0432\u0430\u0440 \u0431\u044b\u043b \u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d, \u0434\u0435\u043d\u044c\u0433\u0438 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u0432\u043b\u0430\u0434\u0435\u043b\u044c\u0446\u0443.",
                    "Nobody will deceive anyone, everyone sees the code of the smart contract and understands that it works exactly as it is written in it. A smart contract is not a person, it will not lie and will not hide with money.": "\u041d\u0438\u043a\u0442\u043e \u043d\u0438\u043a\u043e\u0433\u043e \u043d\u0435 \u043e\u0431\u043c\u0430\u043d\u0435\u0442, \u043a\u0430\u0436\u0434\u044b\u0439 \u0432\u0438\u0434\u0438\u0442 \u043a\u043e\u0434 \u0441\u043c\u0430\u0440\u0442-\u043a\u043e\u043d\u0442\u0440\u0430\u043a\u0442\u0430 \u0438 \u043f\u043e\u043d\u0438\u043c\u0430\u0435\u0442, \u0447\u0442\u043e \u043e\u043d \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0438\u043c\u0435\u043d\u043d\u043e \u0442\u0430\u043a, \u043a\u0430\u043a \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u043e \u0432 \u043d\u0435\u043c. \u0423\u043c\u043d\u044b\u0439 \u043a\u043e\u043d\u0442\u0440\u0430\u043a\u0442 - \u044d\u0442\u043e \u043d\u0435 \u0447\u0435\u043b\u043e\u0432\u0435\u043a, \u043e\u043d \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u043b\u0433\u0430\u0442\u044c \u0438 \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u044f\u0442\u0430\u0442\u044c\u0441\u044f \u0441 \u0434\u0435\u043d\u044c\u0433\u0430\u043c\u0438.",
                    "A verified smart contract will work as long as the Ethereum blockchain exists.": "\u041f\u0440\u043e\u0432\u0435\u0440\u0435\u043d\u043d\u044b\u0439 \u0441\u043c\u0430\u0440\u0442-\u043a\u043e\u043d\u0442\u0440\u0430\u043a\u0442 \u0431\u0443\u0434\u0435\u0442 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c, \u043f\u043e\u043a\u0430 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0431\u043b\u043e\u043a\u0447\u0435\u0439\u043d Ethereum.",
                    "Data is encrypted and distributed on the blockchain and duplicated many times, it cannot be changed or deleted.": "\u0414\u0430\u043d\u043d\u044b\u0435 \u0448\u0438\u0444\u0440\u0443\u044e\u0442\u0441\u044f \u0438 \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u044e\u0442\u0441\u044f \u043f\u043e \u0446\u0435\u043f\u043e\u0447\u043a\u0435 \u0431\u043b\u043e\u043a\u043e\u0432 \u0438 \u0434\u0443\u0431\u043b\u0438\u0440\u0443\u044e\u0442\u0441\u044f \u043c\u043d\u043e\u0433\u043e \u0440\u0430\u0437, \u0438\u0445 \u043d\u0435\u043b\u044c\u0437\u044f \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0438\u043b\u0438 \u0443\u0434\u0430\u043b\u0438\u0442\u044c.",
                    "#openalexa #smartcontract #ethereum #bitcoin #crypto #blockchain #money # crypto #cryptocurrency #earningonline #btc #eth #investing #finance #profit #wagering #earnings #risklesswork #sales #marketing": "#openalexa #smartcontract #ethereum #bitcoin #crypto #blockchain # \u0434\u0435\u043d\u044c\u0433\u0438",
                    "OpenAlexa Smart Contract : SCAM IMPOSSIBLE": "OpenAlexa Smart Contract: \u043c\u043e\u0448\u0435\u043d\u043d\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e",
                    "OpenAlexa Smart contract is the best that mankind could come up with in recent years.": "\u041a\u043e\u043d\u0442\u0440\u0430\u043a\u0442 OpenAlexa Smart - \u043b\u0443\u0447\u0448\u0435\u0435, \u0447\u0442\u043e \u0447\u0435\u043b\u043e\u0432\u0435\u0447\u0435\u0441\u0442\u0432\u043e \u043c\u043e\u0433\u043b\u043e \u043f\u0440\u0438\u0434\u0443\u043c\u0430\u0442\u044c \u0437\u0430 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0435 \u0433\u043e\u0434\u044b.",
                    "Payments are made from wallet to participant\u2019s wallet": "\u0412\u044b\u043f\u043b\u0430\u0442\u044b \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u044f\u0442\u0441\u044f \u0441 \u043a\u043e\u0448\u0435\u043b\u044c\u043a\u0430 \u043d\u0430 \u043a\u043e\u0448\u0435\u043b\u0435\u043a \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0430",
                    "Locking and breaking a wallet is not possible": "\u0411\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u043a\u0430 \u0438 \u0432\u0437\u043b\u043e\u043c \u043a\u043e\u0448\u0435\u043b\u044c\u043a\u0430 \u043d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u044b",
                    "It is impossible to steal money": "\u041d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0443\u043a\u0440\u0430\u0441\u0442\u044c \u0434\u0435\u043d\u044c\u0433\u0438",
                    "Unable to exclude your account from the structure": "\u041d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0432\u0430\u0448 \u0430\u043a\u043a\u0430\u0443\u043d\u0442 \u0438\u0437 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b",
                    "The project has no owner, all conditions are unchanged": "\u0423 \u043f\u0440\u043e\u0435\u043a\u0442\u0430 \u043d\u0435\u0442 \u0432\u043b\u0430\u0434\u0435\u043b\u044c\u0446\u0430, \u0432\u0441\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f \u043d\u0435\u0438\u0437\u043c\u0435\u043d\u043d\u044b",
                    "If you close the site, the smart contract will still work": "\u0415\u0441\u043b\u0438 \u0432\u044b \u0437\u0430\u043a\u0440\u043e\u0435\u0442\u0435 \u0441\u0430\u0439\u0442, \u0443\u043c\u043d\u044b\u0439 \u043a\u043e\u043d\u0442\u0440\u0430\u043a\u0442 \u0432\u0441\u0435 \u0440\u0430\u0432\u043d\u043e \u0431\u0443\u0434\u0435\u0442 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c",
                    "OpenAlexa - Risk-free way of Earning ETH": "OpenAlexa - \u0431\u0435\u0437\u0440\u0438\u0441\u043a\u043e\u0432\u044b\u0439 \u0441\u043f\u043e\u0441\u043e\u0431 \u0437\u0430\u0440\u0430\u0431\u043e\u0442\u043a\u0430 ETH",
                    "THE FASTEST AND SIMPLE SMART CONTRACT": "\u0421\u0430\u043c\u044b\u0439 \u0431\u044b\u0441\u0442\u0440\u044b\u0439 \u0438 \u043f\u0440\u043e\u0441\u0442\u043e\u0439 \u0443\u043c\u043d\u044b\u0439 \u043a\u043e\u043d\u0442\u0440\u0430\u043a\u0442",
                    "The repetition frequency of 60 days. Income can be repeated every 60 days with a ready-made team, earn 4000+ ETH every two months": "\u0427\u0430\u0441\u0442\u043e\u0442\u0430 \u043f\u043e\u0432\u0442\u043e\u0440\u0435\u043d\u0438\u044f 60 \u0434\u043d\u0435\u0439. \u0414\u043e\u0445\u043e\u0434 \u043c\u043e\u0436\u0435\u0442 \u043f\u043e\u0432\u0442\u043e\u0440\u044f\u0442\u044c\u0441\u044f \u043a\u0430\u0436\u0434\u044b\u0435 60 \u0434\u043d\u0435\u0439 \u0441 \u0433\u043e\u0442\u043e\u0432\u043e\u0439 \u043a\u043e\u043c\u0430\u043d\u0434\u043e\u0439, \u0437\u0430\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c 4000+ ETH \u043a\u0430\u0436\u0434\u044b\u0435 \u0434\u0432\u0430 \u043c\u0435\u0441\u044f\u0446\u0430",
                    "Accessible to everyone. Entrance fee - 0.03 ETH only.": "\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u043e \u0434\u043b\u044f \u0432\u0441\u0435\u0445. \u0412\u0445\u043e\u0434\u043d\u0430\u044f \u043f\u043b\u0430\u0442\u0430 - \u0442\u043e\u043b\u044c\u043a\u043e 0,03 ETH.",
                    "For the first time such a simple and convenient marketing. Binary matrix 6 lines - 128 people in a team are enough to go through two cycles and earn 4000+ ETH": "\u0412\u043f\u0435\u0440\u0432\u044b\u0435 \u0442\u0430\u043a\u043e\u0439 \u043f\u0440\u043e\u0441\u0442\u043e\u0439 \u0438 \u0443\u0434\u043e\u0431\u043d\u044b\u0439 \u043c\u0430\u0440\u043a\u0435\u0442\u0438\u043d\u0433. \u0411\u0438\u043d\u0430\u0440\u043d\u0430\u044f \u043c\u0430\u0442\u0440\u0438\u0446\u0430 6 \u0441\u0442\u0440\u043e\u043a - 128 \u0447\u0435\u043b\u043e\u0432\u0435\u043a \u0432 \u043a\u043e\u043c\u0430\u043d\u0434\u0435 \u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e, \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u043e\u0439\u0442\u0438 \u0434\u0432\u0430 \u0446\u0438\u043a\u043b\u0430 \u0438 \u0437\u0430\u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c 4000+ ETH",
                    View: "\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c",
                    "OpenAlexa Explainer Video - EN": "OpenAlexa Explainer Video  - RU",
                    "OpenAlexa - Use with MetaMask": "OpenAlexa - \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0441 MetaMask",
                    FAQs: "\u0412\u043e\u043f\u0440\u043e\u0441\u044b \u0438 \u043e\u0442\u0432\u0435\u0442\u044b",
                    "Can a transaction remain on the balance of a smart contract?": "\u041c\u043e\u0436\u0435\u0442 \u043b\u0438 \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u044f \u043e\u0441\u0442\u0430\u0432\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u0431\u0430\u043b\u0430\u043d\u0441\u0435 \u0443\u043c\u043d\u043e\u0433\u043e \u043a\u043e\u043d\u0442\u0440\u0430\u043a\u0442\u0430?",
                    "What is OpenAlexa?": "\u0427\u0442\u043e \u0442\u0430\u043a\u043e\u0435 OpenAlexa?",
                    "Who is the Project Administrator?": "\u041a\u0442\u043e \u0442\u0430\u043a\u043e\u0439 \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440 \u043f\u0440\u043e\u0435\u043a\u0442\u0430?",
                    "OpenAlexa can be divided into 2 concepts: First - Is a smart contract or application running on a cryptocurrency network Ethereum. The application code is programmed to distribute incoming transfers among participants according to a specific algorithm. Second - Is the site itself, providing an interface for the convenience of working with a smart contract.": "OpenAlexa \u043c\u043e\u0436\u043d\u043e \u0440\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u044c \u043d\u0430 2 \u043f\u043e\u043d\u044f\u0442\u0438\u044f: \u0432\u043e-\u043f\u0435\u0440\u0432\u044b\u0445 - \u044d\u0442\u043e \u0443\u043c\u043d\u044b\u0439 \u043a\u043e\u043d\u0442\u0440\u0430\u043a\u0442 \u0438\u043b\u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435, \u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0449\u0435\u0435 \u0432 \u043a\u0440\u0438\u043f\u0442\u043e\u0432\u0430\u043b\u044e\u0442\u043d\u043e\u0439 \u0441\u0435\u0442\u0438 Ethereum. \u041a\u043e\u0434 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0437\u0430\u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d \u0434\u043b\u044f \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u0432\u0445\u043e\u0434\u044f\u0449\u0438\u0445 \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u043e\u0432 \u043c\u0435\u0436\u0434\u0443 \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0430\u043c\u0438 \u0432 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u043c \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u043e\u043c. \u0412\u0442\u043e\u0440\u043e\u0435 - \u044d\u0442\u043e \u0441\u0430\u043c \u0441\u0430\u0439\u0442, \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u044e\u0449\u0438\u0439 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u0434\u043b\u044f \u0443\u0434\u043e\u0431\u0441\u0442\u0432\u0430 \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0443\u043c\u043d\u044b\u043c \u043a\u043e\u043d\u0442\u0440\u0430\u043a\u0442\u043e\u043c.",
                    "NO! The contract is programmed to not accumulate funds, but to serve only as a transmitter. The balance of the contract is always zero, anyone can verify this. It simply lacks the function of taking funds from your balance. Any transaction will reach the desired goal safe and sound.": "\u041d\u0415\u0422! \u041a\u043e\u043d\u0442\u0440\u0430\u043a\u0442 \u0437\u0430\u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d \u043d\u0435 \u043d\u0430 \u043d\u0430\u043a\u043e\u043f\u043b\u0435\u043d\u0438\u0435 \u0441\u0440\u0435\u0434\u0441\u0442\u0432, \u0430 \u043d\u0430 \u0442\u043e, \u0447\u0442\u043e\u0431\u044b \u0441\u043b\u0443\u0436\u0438\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u0442\u0447\u0438\u043a\u043e\u043c. \u0411\u0430\u043b\u0430\u043d\u0441 \u0434\u043e\u0433\u043e\u0432\u043e\u0440\u0430 \u0432\u0441\u0435\u0433\u0434\u0430 \u0440\u0430\u0432\u0435\u043d \u043d\u0443\u043b\u044e, \u043b\u044e\u0431\u043e\u0439 \u043c\u043e\u0436\u0435\u0442 \u044d\u0442\u043e \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c. \u0415\u043c\u0443 \u043f\u0440\u043e\u0441\u0442\u043e \u043d\u0435 \u0445\u0432\u0430\u0442\u0430\u0435\u0442 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0441\u043d\u044f\u0442\u0438\u044f \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0441 \u0432\u0430\u0448\u0435\u0433\u043e \u0431\u0430\u043b\u0430\u043d\u0441\u0430. \u041b\u044e\u0431\u0430\u044f \u0441\u0434\u0435\u043b\u043a\u0430 \u0434\u043e\u0441\u0442\u0438\u0433\u043d\u0435\u0442 \u0436\u0435\u043b\u0430\u0435\u043c\u043e\u0439 \u0446\u0435\u043b\u0438 \u0432 \u0446\u0435\u043b\u043e\u0441\u0442\u0438 \u0438 \u0441\u043e\u0445\u0440\u0430\u043d\u043d\u043e\u0441\u0442\u0438.",
                    "In a project like OpenAlexa there is no administrator. There is a creator who uploaded the contract code to the cryptocurrency blockchain Ethereum. After that, the smart contract has been part of the overall network, which is supported by miners. No one has the right to affect the operation of a smart contract, delete it or stop it. Any attempt to make unauthorised changes will be rejected due to inconsistency with previous copies in the block chain.": "\u0412 \u0442\u0430\u043a\u043e\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u0435, \u043a\u0430\u043a OpenAlexa, \u043d\u0435\u0442 \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u0430. \u0415\u0441\u0442\u044c \u0441\u043e\u0437\u0434\u0430\u0442\u0435\u043b\u044c, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u043b \u043a\u043e\u0434 \u043a\u043e\u043d\u0442\u0440\u0430\u043a\u0442\u0430 \u0432 \u0431\u043b\u043e\u043a\u0447\u0435\u0439\u043d \u043a\u0440\u0438\u043f\u0442\u043e\u0432\u0430\u043b\u044e\u0442\u044b Ethereum. \u041f\u043e\u0441\u043b\u0435 \u044d\u0442\u043e\u0433\u043e \u0441\u043c\u0430\u0440\u0442-\u043a\u043e\u043d\u0442\u0440\u0430\u043a\u0442 \u0441\u0442\u0430\u043b \u0447\u0430\u0441\u0442\u044c\u044e \u043e\u0431\u0449\u0435\u0439 \u0441\u0435\u0442\u0438, \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044e\u0442 \u043c\u0430\u0439\u043d\u0435\u0440\u044b. \u041d\u0438\u043a\u0442\u043e \u043d\u0435 \u0438\u043c\u0435\u0435\u0442 \u043f\u0440\u0430\u0432\u0430 \u0432\u043b\u0438\u044f\u0442\u044c \u043d\u0430 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0443\u043c\u043d\u043e\u0433\u043e \u043a\u043e\u043d\u0442\u0440\u0430\u043a\u0442\u0430, \u0443\u0434\u0430\u043b\u044f\u0442\u044c \u0435\u0433\u043e \u0438\u043b\u0438 \u043f\u0440\u0435\u043a\u0440\u0430\u0449\u0430\u0442\u044c \u0435\u0433\u043e. \u041b\u044e\u0431\u0430\u044f \u043f\u043e\u043f\u044b\u0442\u043a\u0430 \u0432\u043d\u0435\u0441\u0442\u0438 \u043d\u0435\u0441\u0430\u043d\u043a\u0446\u0438\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0431\u0443\u0434\u0435\u0442 \u043e\u0442\u043a\u043b\u043e\u043d\u0435\u043d\u0430 \u0438\u0437-\u0437\u0430 \u043d\u0435\u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u044f \u0441 \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0438\u043c\u0438 \u043a\u043e\u043f\u0438\u044f\u043c\u0438 \u0432 \u0446\u0435\u043f\u043e\u0447\u043a\u0435 \u0431\u043b\u043e\u043a\u043e\u0432.",
                    "Since the smart contract is published Ethereum Blockchain, so participation in the project is possible only with this ETH digital currency.": "\u041f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u0441\u043c\u0430\u0440\u0442-\u043a\u043e\u043d\u0442\u0440\u0430\u043a\u0442 \u043f\u0443\u0431\u043b\u0438\u043a\u0443\u0435\u0442\u0441\u044f Ethereum Blockchain, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u0443\u0447\u0430\u0441\u0442\u0438\u0435 \u0432 \u043f\u0440\u043e\u0435\u043a\u0442\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0442\u043e\u043b\u044c\u043a\u043e \u0441 \u044d\u0442\u043e\u0439 \u0446\u0438\u0444\u0440\u043e\u0432\u043e\u0439 \u0432\u0430\u043b\u044e\u0442\u043e\u0439 ETH.",
                    "How can I be sure that my wallet will not be blocked?": "\u041a\u0430\u043a \u044f \u043c\u043e\u0433\u0443 \u0431\u044b\u0442\u044c \u0443\u0432\u0435\u0440\u0435\u043d, \u0447\u0442\u043e \u043c\u043e\u0439 \u043a\u043e\u0448\u0435\u043b\u0435\u043a \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u043d?",
                    "Are there any fees or charges in OpenAlexa?": "\u0415\u0441\u0442\u044c \u043b\u0438 \u043a\u0430\u043a\u0438\u0435-\u043b\u0438\u0431\u043e \u0441\u0431\u043e\u0440\u044b \u0438\u043b\u0438 \u0432\u0437\u043d\u043e\u0441\u044b \u0432 OpenAlexa?",
                    "And if the project collapses, will I lose money?": "\u0410 \u0435\u0441\u043b\u0438 \u043f\u0440\u043e\u0435\u043a\u0442 \u0440\u0443\u0445\u043d\u0435\u0442, \u043f\u043e\u0442\u0435\u0440\u044f\u044e \u043b\u0438 \u044f \u0434\u0435\u043d\u044c\u0433\u0438?",
                    "It is enough to have a computer or smartphone with Ethereum wallet. We also recommend installing Telegram instant messenger for the convenience of communication with other participants as well as official chats!": "\u0414\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0438\u043c\u0435\u0442\u044c \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440 \u0438\u043b\u0438 \u0441\u043c\u0430\u0440\u0442\u0444\u043e\u043d \u0441 \u043a\u043e\u0448\u0435\u043b\u044c\u043a\u043e\u043c Ethereum. \u041c\u044b \u0442\u0430\u043a\u0436\u0435 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u043c \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043c\u0435\u0441\u0441\u0435\u043d\u0434\u0436\u0435\u0440 Telegram \u0434\u043b\u044f \u0443\u0434\u043e\u0431\u0441\u0442\u0432\u0430 \u043e\u0431\u0449\u0435\u043d\u0438\u044f \u0441 \u0434\u0440\u0443\u0433\u0438\u043c\u0438 \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0430\u043c\u0438, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0434\u043b\u044f \u043e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0445 \u0447\u0430\u0442\u043e\u0432!",
                    "In addition to personal invitations, partners can appear in your structure in two ways: These are \u201cOverflows\u201d and \u201cFree Partners\u201d. Therefore, it can be argued that the system has the possibility of passive earnings. But this does not guarantee you a quick decent income, which other successful participants who are active can receive.": "\u0412 \u0434\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u043a \u043b\u0438\u0447\u043d\u044b\u043c \u043f\u0440\u0438\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u044f\u043c \u043f\u0430\u0440\u0442\u043d\u0435\u0440\u044b \u043c\u043e\u0433\u0443\u0442 \u043f\u043e\u044f\u0432\u043b\u044f\u0442\u044c\u0441\u044f \u0432 \u0432\u0430\u0448\u0435\u0439 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0435 \u0434\u0432\u0443\u043c\u044f \u0441\u043f\u043e\u0441\u043e\u0431\u0430\u043c\u0438: \u044d\u0442\u043e \xab\u041f\u0435\u0440\u0435\u043b\u0438\u0432\u044b\xbb \u0438 \xab\u0421\u0432\u043e\u0431\u043e\u0434\u043d\u044b\u0435 \u043f\u0430\u0440\u0442\u043d\u0435\u0440\u044b\xbb. \u0422\u0430\u043a\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c, \u043c\u043e\u0436\u043d\u043e \u0443\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u0442\u044c, \u0447\u0442\u043e \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u0438\u043c\u0435\u0435\u0442 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u043f\u0430\u0441\u0441\u0438\u0432\u043d\u043e\u0433\u043e \u0437\u0430\u0440\u0430\u0431\u043e\u0442\u043a\u0430. \u041d\u043e \u044d\u0442\u043e \u043d\u0435 \u0433\u0430\u0440\u0430\u043d\u0442\u0438\u0440\u0443\u0435\u0442 \u0432\u0430\u043c \u0431\u044b\u0441\u0442\u0440\u044b\u0439 \u043f\u0440\u0438\u043b\u0438\u0447\u043d\u044b\u0439 \u0434\u043e\u0445\u043e\u0434, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043c\u043e\u0433\u0443\u0442 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u0440\u0443\u0433\u0438\u0435 \u0443\u0441\u043f\u0435\u0448\u043d\u044b\u0435 \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0430\u043a\u0442\u0438\u0432\u043d\u044b.",
                    "What are Levels?": "\u0427\u0442\u043e \u0442\u0430\u043a\u043e\u0435 \u0443\u0440\u043e\u0432\u043d\u0438?",
                    "What are overflows?": "\u0427\u0442\u043e \u0442\u0430\u043a\u043e\u0435 \u043f\u0435\u0440\u0435\u043b\u0438\u0432\u044b ?",
                    "What I need to Join OpenAlexa?": "\u0427\u0442\u043e \u043c\u043d\u0435 \u043d\u0443\u0436\u043d\u043e, \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u0438\u0441\u043e\u0435\u0434\u0438\u043d\u0438\u0442\u044c\u0441\u044f \u043a OpenAlexa?",
                    "Again NO! The smart contract is absolutely transparent, all data is recorded in the blockchain chain. No scam or fraud. The project cannot fail. It will work as long as the blockchain exists, even if the site is closed.": "\u041e\u043f\u044f\u0442\u044c \u041d\u0415\u0422! \u0421\u043c\u0430\u0440\u0442-\u043a\u043e\u043d\u0442\u0440\u0430\u043a\u0442 \u0430\u0431\u0441\u043e\u043b\u044e\u0442\u043d\u043e \u043f\u0440\u043e\u0437\u0440\u0430\u0447\u0435\u043d, \u0432\u0441\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0437\u0430\u043f\u0438\u0441\u044b\u0432\u0430\u044e\u0442\u0441\u044f \u0432 \u0446\u0435\u043f\u043e\u0447\u043a\u0443 \u0431\u043b\u043e\u043a\u0447\u0435\u0439\u043d\u043e\u0432. \u041d\u0435\u0442 \u043c\u043e\u0448\u0435\u043d\u043d\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u0438\u043b\u0438 \u043e\u0431\u043c\u0430\u043d\u0430. \u041f\u0440\u043e\u0435\u043a\u0442 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u043f\u043e\u0442\u0435\u0440\u043f\u0435\u0442\u044c \u043d\u0435\u0443\u0434\u0430\u0447\u0443. \u041e\u043d \u0431\u0443\u0434\u0435\u0442 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0434\u043e \u0442\u0435\u0445 \u043f\u043e\u0440, \u043f\u043e\u043a\u0430 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0431\u043b\u043e\u043a\u0447\u0435\u0439\u043d, \u0434\u0430\u0436\u0435 \u0435\u0441\u043b\u0438 \u0441\u0430\u0439\u0442 \u0437\u0430\u043a\u0440\u044b\u0442.",
                    "To do registration, you simply need to make payment of the first level. To do this, Click on 'Register' and follow further instructions. After successful payment, you take a position in the structure and are considered a full member.": "\u0427\u0442\u043e\u0431\u044b \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044e, \u0432\u0430\u043c \u043f\u0440\u043e\u0441\u0442\u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0441\u0442\u0438 \u043e\u043f\u043b\u0430\u0442\u0443 \u043f\u0435\u0440\u0432\u043e\u0433\u043e \u0443\u0440\u043e\u0432\u043d\u044f. \u0414\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \xab\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f\xbb \u0438 \u0441\u043b\u0435\u0434\u0443\u0439\u0442\u0435 \u0434\u0430\u043b\u044c\u043d\u0435\u0439\u0448\u0438\u043c \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f\u043c. \u041f\u043e\u0441\u043b\u0435 \u0443\u0441\u043f\u0435\u0448\u043d\u043e\u0439 \u043e\u043f\u043b\u0430\u0442\u044b \u0432\u044b \u0437\u0430\u043d\u0438\u043c\u0430\u0435\u0442\u0435\u0441\u044c \u043f\u043e\u0437\u0438\u0446\u0438\u0435\u0439 \u0432 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0435 \u0438 \u0441\u0447\u0438\u0442\u0430\u0435\u0442\u0435\u0441\u044c \u043f\u043e\u043b\u043d\u043e\u043f\u0440\u0430\u0432\u043d\u044b\u043c \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u043e\u043c.",
                    "Can I register without an referral link?": "\u041c\u043e\u0433\u0443 \u043b\u0438 \u044f \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0431\u0435\u0437 \u0440\u0435\u0444\u0435\u0440\u0430\u043b\u044c\u043d\u043e\u0439 \u0441\u0441\u044b\u043b\u043a\u0438?",
                    "How to register in OpenAlexa?": "\u041a\u0430\u043a \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0432 OpenAlexa?",
                    "In the cryptocurrency industry, there is no such thing as wallet blocking. This is technically impossible even by the creators of Ethereum. Created by you the ETH-wallet belongs only to you.": "\u0412 \u0438\u043d\u0434\u0443\u0441\u0442\u0440\u0438\u0438 \u043a\u0440\u0438\u043f\u0442\u043e\u0432\u0430\u043b\u044e\u0442 \u043d\u0435\u0442 \u0442\u0430\u043a\u043e\u0439 \u0432\u0435\u0449\u0438, \u043a\u0430\u043a \u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u043a\u0430 \u043a\u043e\u0448\u0435\u043b\u044c\u043a\u0430. \u042d\u0442\u043e \u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438 \u043d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0434\u0430\u0436\u0435 \u0441\u043e\u0437\u0434\u0430\u0442\u0435\u043b\u044f\u043c Ethereum. \u0421\u043e\u0437\u0434\u0430\u043d\u043d\u044b\u0439 \u0432\u0430\u043c\u0438 ETH-\u043a\u043e\u0448\u0435\u043b\u0435\u043a \u043f\u0440\u0438\u043d\u0430\u0434\u043b\u0435\u0436\u0438\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u0432\u0430\u043c.",
                    "Is it possible to earn passively?": "\u041c\u043e\u0436\u043d\u043e \u043b\u0438 \u0437\u0430\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c \u043f\u0430\u0441\u0441\u0438\u0432\u043d\u043e?",
                    "What is mode of payment in OpenAlexa?": "\u0427\u0442\u043e \u0442\u0430\u043a\u043e\u0435 \u0441\u043f\u043e\u0441\u043e\u0431 \u043e\u043f\u043b\u0430\u0442\u044b \u0432 OpenAlexa?",
                    "There are many exchangers. Reliable and proven exchangers can be found on the Google. If this is your first time making an exchange, follow these instructions:": "\u0415\u0441\u0442\u044c \u043c\u043d\u043e\u0433\u043e \u043e\u0431\u043c\u0435\u043d\u043d\u0438\u043a\u043e\u0432. \u041d\u0430\u0434\u0435\u0436\u043d\u044b\u0435 \u0438 \u043f\u0440\u043e\u0432\u0435\u0440\u0435\u043d\u043d\u044b\u0435 \u043e\u0431\u043c\u0435\u043d\u043d\u0438\u043a\u0438 \u043c\u043e\u0436\u043d\u043e \u043d\u0430\u0439\u0442\u0438 \u0432 Google. \u0415\u0441\u043b\u0438 \u0432\u044b \u0432\u043f\u0435\u0440\u0432\u044b\u0435 \u0434\u0435\u043b\u0430\u0435\u0442\u0435 \u043e\u0431\u043c\u0435\u043d, \u0441\u043b\u0435\u0434\u0443\u0439\u0442\u0435 \u044d\u0442\u0438\u043c \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f\u043c:",
                    "While registering or upgrading the User need to pay only the amount mentioned for the Level. Then the profit is sent to the uplines after deducting the admin fees. The admin fees consist of 10% operations fees and 6% OAP Token development Fees. The OAP token is airdropped to your wallet automatically with each registration and upgrade transaction.": "\u041f\u0440\u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0438\u043b\u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438 \u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043e\u043f\u043b\u0430\u0442\u0438\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0441\u0443\u043c\u043c\u0443, \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u0443\u044e \u0434\u043b\u044f \u0423\u0440\u043e\u0432\u043d\u044f. \u0417\u0430\u0442\u0435\u043c \u043f\u0440\u0438\u0431\u044b\u043b\u044c \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0432 \u0430\u043f\u043b\u0430\u0439\u043d\u044b \u043f\u043e\u0441\u043b\u0435 \u0432\u044b\u0447\u0435\u0442\u0430 \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u0438\u0432\u043d\u044b\u0445 \u0441\u0431\u043e\u0440\u043e\u0432. \u0410\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u0438\u0432\u043d\u044b\u0435 \u0441\u0431\u043e\u0440\u044b \u0441\u043e\u0441\u0442\u043e\u044f\u0442 \u0438\u0437 10% \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0445 \u0441\u0431\u043e\u0440\u043e\u0432 \u0438 6% \u043f\u043b\u0430\u0442\u044b \u0437\u0430 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u0442\u043e\u043a\u0435\u043d\u043e\u0432 OAP \u0422\u043e\u043a\u0435\u043d OAP \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043f\u043e\u043f\u0430\u0434\u0430\u0435\u0442 \u043d\u0430 \u0432\u0430\u0448 \u043a\u043e\u0448\u0435\u043b\u0435\u043a \u043f\u0440\u0438 \u043a\u0430\u0436\u0434\u043e\u0439 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438 \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0438.",
                    "Level is a status that gives the right to receive remuneration from a partner in its structure of the relevant lines.": "\u0423\u0440\u043e\u0432\u0435\u043d\u044c - \u044d\u0442\u043e \u0441\u0442\u0430\u0442\u0443\u0441, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0434\u0430\u0435\u0442 \u043f\u0440\u0430\u0432\u043e \u043d\u0430 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u0432\u043e\u0437\u043d\u0430\u0433\u0440\u0430\u0436\u0434\u0435\u043d\u0438\u044f \u043e\u0442 \u043f\u0430\u0440\u0442\u043d\u0435\u0440\u0430 \u0432 \u0435\u0433\u043e \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0435 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0445 \u0441\u0442\u0440\u043e\u043a.",
                    "Levels are bought only sequentially and in order. If you try to buy the 4 level without the 3 level, the smart contract will not process such a transfer. Money will not go anywhere and will remain with you.": "\u0423\u0440\u043e\u0432\u043d\u0438 \u043f\u043e\u043a\u0443\u043f\u0430\u044e\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0438 \u043f\u043e \u043f\u043e\u0440\u044f\u0434\u043a\u0443. \u0415\u0441\u043b\u0438 \u0432\u044b \u043f\u043e\u043f\u044b\u0442\u0430\u0435\u0442\u0435\u0441\u044c \u043a\u0443\u043f\u0438\u0442\u044c \u0443\u0440\u043e\u0432\u0435\u043d\u044c 4 \u0431\u0435\u0437 \u0443\u0440\u043e\u0432\u043d\u044f 3, \u0443\u043c\u043d\u044b\u0439 \u043a\u043e\u043d\u0442\u0440\u0430\u043a\u0442 \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c \u0442\u0430\u043a\u043e\u0439 \u043f\u0435\u0440\u0435\u0432\u043e\u0434. \u0414\u0435\u043d\u044c\u0433\u0438 \u043d\u0438\u043a\u0443\u0434\u0430 \u043d\u0435 \u0434\u0435\u043d\u0443\u0442\u0441\u044f \u0438 \u043e\u0441\u0442\u0430\u043d\u0443\u0442\u0441\u044f \u0441 \u0432\u0430\u043c\u0438.",
                    "If I have an 2 level, can I immediately buy the 4 level without having the 3 level?": "\u0415\u0441\u043b\u0438 \u0443 \u043c\u0435\u043d\u044f \u0435\u0441\u0442\u044c \u0443\u0440\u043e\u0432\u0435\u043d\u044c 2, \u043c\u043e\u0433\u0443 \u043b\u0438 \u044f \u0441\u0440\u0430\u0437\u0443 \u043a\u0443\u043f\u0438\u0442\u044c \u0443\u0440\u043e\u0432\u0435\u043d\u044c 4, \u043d\u0435 \u0438\u043c\u0435\u044f \u0443\u0440\u043e\u0432\u043d\u044f 3?",
                    "Thanks to this rule, your profit will be repeated every 60 days, since after your extension the partners in your structure will do the same.": "\u0411\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u044f \u044d\u0442\u043e\u043c\u0443 \u043f\u0440\u0430\u0432\u0438\u043b\u0443 \u0432\u0430\u0448\u0430 \u043f\u0440\u0438\u0431\u044b\u043b\u044c \u0431\u0443\u0434\u0435\u0442 \u043f\u043e\u0432\u0442\u043e\u0440\u044f\u0442\u044c\u0441\u044f \u043a\u0430\u0436\u0434\u044b\u0435 60 \u0434\u043d\u0435\u0439, \u0442\u0430\u043a \u043a\u0430\u043a \u043f\u043e\u0441\u043b\u0435 \u0432\u0430\u0448\u0435\u0433\u043e \u043f\u0440\u043e\u0434\u043b\u0435\u043d\u0438\u044f \u043f\u0430\u0440\u0442\u043d\u0435\u0440\u044b \u0432 \u0432\u0430\u0448\u0435\u0439 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0435 \u0431\u0443\u0434\u0443\u0442 \u0434\u0435\u043b\u0430\u0442\u044c \u0442\u043e \u0436\u0435 \u0441\u0430\u043c\u043e\u0435.",
                    "How to add funds to my ETH wallet?": "\u041a\u0430\u043a \u043f\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u043c\u043e\u0439 ETH \u043a\u043e\u0448\u0435\u043b\u0435\u043a?",
                    "What happens if my partner buys a level before me?": "\u0427\u0442\u043e \u043f\u0440\u043e\u0438\u0437\u043e\u0439\u0434\u0435\u0442, \u0435\u0441\u043b\u0438 \u043c\u043e\u0439 \u043f\u0430\u0440\u0442\u043d\u0435\u0440 \u043a\u0443\u043f\u0438\u0442 \u0443\u0440\u043e\u0432\u0435\u043d\u044c \u0434\u043e \u043c\u0435\u043d\u044f?",
                    "Overflow is a process that occurs when a participant registers for an upline, in which the first level is filled by two participants. The next new member falls into the structure of this upline below, in the nearest free place.": "\u041f\u0435\u0440\u0435\u043b\u0438\u0432 - \u044d\u0442\u043e \u043f\u0440\u043e\u0446\u0435\u0441\u0441, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442, \u043a\u043e\u0433\u0434\u0430 \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u0432\u044b\u0448\u0435\u0441\u0442\u043e\u044f\u0449\u0435\u0433\u043e \u0443\u0440\u043e\u0432\u043d\u044f, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u043f\u0435\u0440\u0432\u044b\u0439 \u0443\u0440\u043e\u0432\u0435\u043d\u044c \u0437\u0430\u043f\u043e\u043b\u043d\u044f\u0435\u0442\u0441\u044f \u0434\u0432\u0443\u043c\u044f \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0430\u043c\u0438. \u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u043d\u043e\u0432\u044b\u0439 \u0447\u043b\u0435\u043d \u043f\u043e\u043f\u0430\u0434\u0430\u0435\u0442 \u0432 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0443 \u044d\u0442\u043e\u0433\u043e \u0432\u0435\u0440\u0445\u043d\u0435\u0433\u043e \u0443\u0440\u043e\u0432\u043d\u044f \u043d\u0438\u0436\u0435, \u0432 \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0435\u043c \u0441\u0432\u043e\u0431\u043e\u0434\u043d\u043e\u043c \u043c\u0435\u0441\u0442\u0435.",
                    "Yes, such members are called \u201cfree partners.\u201d These are participants who came for any reason WITHOUT an affiliate link. Free partners are distributed evenly across the System (from left to right), starting from those uplines that were previously registered.": "\u0414\u0430, \u0442\u0430\u043a\u0438\u0445 \u0447\u043b\u0435\u043d\u043e\u0432 \u043d\u0430\u0437\u044b\u0432\u0430\u044e\u0442 \xab\u0441\u0432\u043e\u0431\u043e\u0434\u043d\u044b\u043c\u0438 \u043f\u0430\u0440\u0442\u043d\u0435\u0440\u0430\u043c\u0438\xbb. \u042d\u0442\u043e \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u0440\u0438\u0448\u043b\u0438 \u043f\u043e \u043b\u044e\u0431\u043e\u0439 \u043f\u0440\u0438\u0447\u0438\u043d\u0435 \u0411\u0415\u0417 \u043f\u0430\u0440\u0442\u043d\u0435\u0440\u0441\u043a\u043e\u0439 \u0441\u0441\u044b\u043b\u043a\u0438. \u0421\u0432\u043e\u0431\u043e\u0434\u043d\u044b\u0435 \u043f\u0430\u0440\u0442\u043d\u0435\u0440\u044b \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u044e\u0442\u0441\u044f \u0440\u0430\u0432\u043d\u043e\u043c\u0435\u0440\u043d\u043e \u043f\u043e \u0432\u0441\u0435\u0439 \u0421\u0438\u0441\u0442\u0435\u043c\u0435 (\u0441\u043b\u0435\u0432\u0430 \u043d\u0430\u043f\u0440\u0430\u0432\u043e), \u043d\u0430\u0447\u0438\u043d\u0430\u044f \u0441 \u0442\u0435\u0445 \u0432\u0435\u0440\u0445\u043d\u0438\u0445 \u0443\u0440\u043e\u0432\u043d\u0435\u0439, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0431\u044b\u043b\u0438 \u0440\u0430\u043d\u0435\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b.",
                    "The money will be redirected to your upline of the same line as your partner. If you buy levels on time, this will not happen. If this happened, it\u2019s not scary. If you find this in time, then after activating the level, continue to receive the remaining transfers for this level.": "\u0414\u0435\u043d\u044c\u0433\u0438 \u0431\u0443\u0434\u0443\u0442 \u043f\u0435\u0440\u0435\u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u044b \u043d\u0430 \u0432\u0430\u0448\u0443 \u043b\u0438\u043d\u0438\u044e \u0441\u0432\u044f\u0437\u0438 \u0442\u043e\u0439 \u0436\u0435 \u043b\u0438\u043d\u0438\u0438, \u0447\u0442\u043e \u0438 \u0432\u0430\u0448 \u043f\u0430\u0440\u0442\u043d\u0435\u0440. \u0415\u0441\u043b\u0438 \u0432\u044b \u043f\u043e\u043a\u0443\u043f\u0430\u0435\u0442\u0435 \u0443\u0440\u043e\u0432\u043d\u0438 \u0432\u043e\u0432\u0440\u0435\u043c\u044f, \u044d\u0442\u043e\u0433\u043e \u043d\u0435 \u043f\u0440\u043e\u0438\u0437\u043e\u0439\u0434\u0435\u0442. \u0415\u0441\u043b\u0438 \u044d\u0442\u043e \u0441\u043b\u0443\u0447\u0438\u043b\u043e\u0441\u044c, \u044d\u0442\u043e \u043d\u0435 \u0441\u0442\u0440\u0430\u0448\u043d\u043e. \u0415\u0441\u043b\u0438 \u0432\u044b \u043d\u0430\u0439\u0434\u0435\u0442\u0435 \u044d\u0442\u043e \u0432\u043e\u0432\u0440\u0435\u043c\u044f, \u0442\u043e \u043f\u043e\u0441\u043b\u0435 \u0430\u043a\u0442\u0438\u0432\u0430\u0446\u0438\u0438 \u0443\u0440\u043e\u0432\u043d\u044f \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0430\u0439\u0442\u0435 \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u043e\u0441\u0442\u0430\u0432\u0448\u0438\u0435\u0441\u044f \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u044b \u0434\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u0443\u0440\u043e\u0432\u043d\u044f.",
                    "Why do I need to renew levels every 60 days?": "\u0417\u0430\u0447\u0435\u043c \u043c\u043d\u0435 \u043e\u0431\u043d\u043e\u0432\u043b\u044f\u0442\u044c \u0443\u0440\u043e\u0432\u043d\u0438 \u043a\u0430\u0436\u0434\u044b\u0435 60 \u0434\u043d\u0435\u0439?",
                    "Your account remains in the System forever, and at any time you can extend the levels and continue to receive income.": "\u0412\u0430\u0448\u0430 \u0443\u0447\u0435\u0442\u043d\u0430\u044f \u0437\u0430\u043f\u0438\u0441\u044c \u043e\u0441\u0442\u0430\u0435\u0442\u0441\u044f \u0432 \u0421\u0438\u0441\u0442\u0435\u043c\u0435 \u043d\u0430\u0432\u0441\u0435\u0433\u0434\u0430, \u0438 \u0432 \u043b\u044e\u0431\u043e\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0440\u043e\u0434\u043b\u0438\u0442\u044c \u0443\u0440\u043e\u0432\u043d\u0438 \u0438 \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0430\u0442\u044c \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u0434\u043e\u0445\u043e\u0434.",
                    "What will happen if you do not extend the level and it is deactivated?": "\u0427\u0442\u043e \u043f\u0440\u043e\u0438\u0437\u043e\u0439\u0434\u0435\u0442, \u0435\u0441\u043b\u0438 \u0432\u044b \u043d\u0435 \u043f\u0440\u043e\u0434\u043b\u0438\u0442\u0435 \u0443\u0440\u043e\u0432\u0435\u043d\u044c \u0438 \u043e\u043d \u0431\u0443\u0434\u0435\u0442 \u0434\u0435\u0430\u043a\u0442\u0438\u0432\u0438\u0440\u043e\u0432\u0430\u043d?"
                }
            }), {
                "en-th": {
                    " Login Automatically ": "\u0e40\u0e02\u0e49\u0e32\u0e2a\u0e39\u0e48\u0e23\u0e30\u0e1a\u0e1a\u0e42\u0e14\u0e22\u0e2d\u0e31\u0e15\u0e42\u0e19\u0e21\u0e31\u0e15\u0e34",
                    "Log in": "\u0e40\u0e02\u0e49\u0e32\u0e2a\u0e39\u0e48\u0e23\u0e30\u0e1a\u0e1a",
                    " Automatically login if you have following wallets: ": "\u0e40\u0e02\u0e49\u0e32\u0e2a\u0e39\u0e48\u0e23\u0e30\u0e1a\u0e1a\u0e42\u0e14\u0e22\u0e2d\u0e31\u0e15\u0e42\u0e19\u0e21\u0e31\u0e15\u0e34\u0e2b\u0e32\u0e01\u0e04\u0e38\u0e13\u0e21\u0e35\u0e01\u0e23\u0e30\u0e40\u0e1b\u0e4b\u0e32\u0e40\u0e07\u0e34\u0e19\u0e15\u0e48\u0e2d\u0e44\u0e1b\u0e19\u0e35\u0e49:",
                    " Unison pool is live!\n": "\u0e2a\u0e23\u0e30\u0e27\u0e48\u0e32\u0e22\u0e19\u0e49\u0e33\u0e1e\u0e23\u0e49\u0e2d\u0e21\u0e01\u0e31\u0e19\u0e17\u0e33\u0e07\u0e32\u0e19\u0e41\u0e25\u0e49\u0e27!",
                    English: "\u0e2d\u0e31\u0e07\u0e01\u0e24\u0e29",
                    Thai: "\u0e44\u0e17\u0e22",
                    Korean: "\u0e40\u0e01\u0e32\u0e2b\u0e25\u0e35",
                    " SIGN UP ": "\u0e25\u0e07\u0e0a\u0e37\u0e48\u0e2d",
                    FOLLOW: "\u0e15\u0e34\u0e14\u0e15\u0e32\u0e21",
                    Russian: "\u0e23\u0e31\u0e2a\u0e40\u0e0b\u0e35\u0e22",
                    "Copyright @ Open": "\u0e25\u0e34\u0e02\u0e2a\u0e34\u0e17\u0e18\u0e34\u0e4c @ Open",
                    Spanish: "\u0e2a\u0e40\u0e1b\u0e19",
                    " The most advanced way to invest in blockchain technology ": "\u0e27\u0e34\u0e18\u0e35\u0e17\u0e35\u0e48\u0e17\u0e31\u0e19\u0e2a\u0e21\u0e31\u0e22\u0e17\u0e35\u0e48\u0e2a\u0e38\u0e14\u0e43\u0e19\u0e01\u0e32\u0e23\u0e25\u0e07\u0e17\u0e38\u0e19\u0e43\u0e19\u0e40\u0e17\u0e04\u0e42\u0e19\u0e42\u0e25\u0e22\u0e35\u0e1a\u0e25\u0e47\u0e2d\u0e01\u0e40\u0e0a\u0e19",
                    "welcome!": "\u0e22\u0e34\u0e19\u0e14\u0e35\u0e15\u0e49\u0e2d\u0e19\u0e23\u0e31\u0e1a!",
                    "Hello,": "\u0e2a\u0e27\u0e31\u0e2a\u0e14\u0e35,",
                    Filipino: "\u0e1f\u0e34\u0e25\u0e34\u0e1b\u0e1b\u0e34\u0e19\u0e2a\u0e4c",
                    Alexa: "Alexa",
                    " Smart Contract Address ": "\u0e17\u0e35\u0e48\u0e2d\u0e22\u0e39\u0e48\u0e2a\u0e31\u0e0d\u0e0d\u0e32\u0e2d\u0e31\u0e08\u0e09\u0e23\u0e34\u0e22\u0e30",
                    " ENTER MANUALLY (PREVIEW MODE) ": "\u0e1b\u0e49\u0e2d\u0e19\u0e14\u0e49\u0e27\u0e22\u0e15\u0e19\u0e40\u0e2d\u0e07 (\u0e42\u0e2b\u0e21\u0e14\u0e14\u0e39\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07)",
                    OR: "\u0e2b\u0e23\u0e37\u0e2d",
                    Italian: "\u0e2d\u0e34\u0e15\u0e32\u0e25\u0e35",
                    "\n  window.dataLayer = window.dataLayer || [];\n  function gtag() { dataLayer.push(arguments); }\n  gtag('js', new Date());\n\n  gtag('config', 'UA-166894577-2');\n": "window.dataLayer = window.dataLayer || []; \u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e19 gtag () {dataLayer.push (\u0e2d\u0e32\u0e23\u0e4c\u0e01\u0e34\u0e27\u0e40\u0e21\u0e19\u0e15\u0e4c); } gtag ('js', \u0e27\u0e31\u0e19\u0e17\u0e35\u0e48\u0e43\u0e2b\u0e21\u0e48 ()); gtag ('config', 'UA-166894577-2');",
                    Uplines: "Uplines",
                    "Lost Profits": "\u0e1c\u0e25\u0e01\u0e33\u0e44\u0e23\u0e17\u0e35\u0e48\u0e2b\u0e32\u0e22\u0e44\u0e1b",
                    "Control Panel": "\u0e41\u0e1c\u0e07\u0e04\u0e27\u0e1a\u0e04\u0e38\u0e21",
                    " Dashboard ": "\u0e41\u0e1c\u0e07\u0e04\u0e27\u0e1a\u0e04\u0e38\u0e21",
                    Partners: "\u0e1e\u0e32\u0e23\u0e4c\u0e17\u0e40\u0e19\u0e2d\u0e23\u0e4c",
                    Logout: "\u0e2d\u0e2d\u0e01\u0e08\u0e32\u0e01\u0e23\u0e30\u0e1a\u0e1a",
                    "Unison Pool": "\u0e1e\u0e23\u0e49\u0e2d\u0e21\u0e40\u0e1e\u0e23\u0e35\u0e22\u0e07\u0e1e\u0e39\u0e25",
                    Promo: "\u0e42\u0e1b\u0e23\u0e42\u0e21\u0e0a\u0e31\u0e48\u0e19",
                    FAQ: "\u0e04\u0e33\u0e16\u0e32\u0e21\u0e17\u0e35\u0e48\u0e1e\u0e1a\u0e1a\u0e48\u0e2d\u0e22",
                    Open: "\u0e40\u0e1b\u0e34\u0e14",
                    "Welcome to ": "\u0e22\u0e34\u0e19\u0e14\u0e35\u0e15\u0e49\u0e2d\u0e19\u0e23\u0e31\u0e1a\u0e2a\u0e39\u0e48",
                    dollar: "\u0e14\u0e2d\u0e25\u0e25\u0e32\u0e23\u0e4c",
                    euro: "\u0e22\u0e39\u0e42\u0e23",
                    "ETH WALLET ": "\u0e01\u0e23\u0e30\u0e40\u0e1b\u0e4b\u0e32\u0e40\u0e07\u0e34\u0e19 ETH",
                    " ID ": "ID",
                    "Earning ETH Level": "\u0e23\u0e31\u0e1a\u0e23\u0e30\u0e14\u0e31\u0e1a ETH",
                    " Level ": "\u0e0a\u0e31\u0e49\u0e19",
                    "Total Partners/ 24hrs": "\u0e04\u0e39\u0e48\u0e04\u0e49\u0e32\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14 / 24 \u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07",
                    Upgrade: "\u0e2d\u0e31\u0e1e\u0e40\u0e01\u0e23\u0e14",
                    "Earned Ethereum": "\u0e44\u0e14\u0e49\u0e23\u0e31\u0e1a Ethereum",
                    " Upgrade ": "\u0e2d\u0e31\u0e1e\u0e40\u0e01\u0e23\u0e14",
                    "Earned Money": "\u0e23\u0e31\u0e1a\u0e40\u0e07\u0e34\u0e19",
                    "No Data": "\u0e44\u0e21\u0e48\u0e21\u0e35\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25",
                    "Growth of Structure": "\u0e01\u0e32\u0e23\u0e40\u0e08\u0e23\u0e34\u0e0d\u0e40\u0e15\u0e34\u0e1a\u0e42\u0e15\u0e02\u0e2d\u0e07\u0e42\u0e04\u0e23\u0e07\u0e2a\u0e23\u0e49\u0e32\u0e07",
                    "New Users": "\u0e1c\u0e39\u0e49\u0e43\u0e0a\u0e49\u0e43\u0e2b\u0e21\u0e48",
                    " % ": "%",
                    " Pool Earning Meter ": "\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e27\u0e31\u0e14\u0e23\u0e32\u0e22\u0e44\u0e14\u0e49\u0e2a\u0e23\u0e30\u0e27\u0e48\u0e32\u0e22\u0e19\u0e49\u0e33",
                    " Total Income ": "\u0e23\u0e32\u0e22\u0e44\u0e14\u0e49\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14",
                    "Pool Dashboard": "\u0e41\u0e14\u0e0a\u0e1a\u0e2d\u0e23\u0e4c\u0e14\u0e1e\u0e39\u0e25",
                    "Your levels": "\u0e23\u0e30\u0e14\u0e31\u0e1a\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13",
                    "My Partners": "\u0e1e\u0e31\u0e19\u0e18\u0e21\u0e34\u0e15\u0e23\u0e02\u0e2d\u0e07\u0e09\u0e31\u0e19",
                    "Created with Highcharts 8.1.0": "\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e14\u0e49\u0e27\u0e22 Highcharts 8.1.0",
                    " My Directs ": "\u0e1c\u0e39\u0e49\u0e01\u0e33\u0e01\u0e31\u0e1a\u0e02\u0e2d\u0e07\u0e09\u0e31\u0e19",
                    " No Data ": "\u0e44\u0e21\u0e48\u0e21\u0e35\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25",
                    " Smart Contract ": "\u0e2a\u0e31\u0e0d\u0e0d\u0e32\u0e2d\u0e31\u0e08\u0e09\u0e23\u0e34\u0e22\u0e30",
                    " Copyright \xa9OpenAlexa 2020. All rights reserved ": "\u0e25\u0e34\u0e02\u0e2a\u0e34\u0e17\u0e18\u0e34\u0e4c\xa9 OpenAlexa 2020 \u0e2a\u0e07\u0e27\u0e19\u0e25\u0e34\u0e02\u0e2a\u0e34\u0e17\u0e18\u0e34\u0e4c",
                    "Level 1": "\u0e23\u0e30\u0e14\u0e31\u0e1a 1",
                    "Extend For 60 days": "\u0e02\u0e22\u0e32\u0e22\u0e40\u0e27\u0e25\u0e32 60 \u0e27\u0e31\u0e19",
                    " Expires in 97 days ": "\u0e2b\u0e21\u0e14\u0e2d\u0e32\u0e22\u0e38\u0e43\u0e19 97 \u0e27\u0e31\u0e19",
                    "Eth Profit": "\u0e01\u0e33\u0e44\u0e23\u0e08\u0e23\u0e34\u0e22\u0e18\u0e23\u0e23\u0e21",
                    "Pool 1": "\u0e2a\u0e23\u0e30\u0e27\u0e48\u0e32\u0e22\u0e19\u0e49\u0e33 1",
                    "Pool 2": "\u0e2a\u0e23\u0e30\u0e27\u0e48\u0e32\u0e22\u0e19\u0e49\u0e33 2",
                    "Pool 3": "\u0e2a\u0e23\u0e30\u0e27\u0e48\u0e32\u0e22\u0e19\u0e49\u0e33 3",
                    "Pool 5": "\u0e2a\u0e23\u0e30\u0e27\u0e48\u0e32\u0e22\u0e19\u0e49\u0e33 5",
                    "Pool 4": "\u0e2a\u0e23\u0e30\u0e27\u0e48\u0e32\u0e22\u0e19\u0e49\u0e33 4",
                    "Pool 6": "\u0e2a\u0e23\u0e30\u0e27\u0e48\u0e32\u0e22\u0e19\u0e49\u0e33 6",
                    "Pool 7": "\u0e2a\u0e23\u0e30\u0e27\u0e48\u0e32\u0e22\u0e19\u0e49\u0e33 7",
                    "Pool 8": "\u0e1e\u0e39\u0e25 8",
                    "Total Partners": "\u0e1e\u0e31\u0e19\u0e18\u0e21\u0e34\u0e15\u0e23\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14",
                    " Find ": "\u0e2b\u0e32",
                    "ID  ": "ID",
                    "Level ": "\u0e0a\u0e31\u0e49\u0e19",
                    "Address ": "\u0e17\u0e35\u0e48\u0e2d\u0e22\u0e39\u0e48",
                    " Your Affiliate Link ": "\u0e25\u0e34\u0e07\u0e04\u0e4c\u0e1e\u0e31\u0e19\u0e18\u0e21\u0e34\u0e15\u0e23\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13",
                    " Copy ": "\u0e2a\u0e33\u0e40\u0e19\u0e32",
                    "Id ": "Id",
                    " Copy your link ": "\u0e04\u0e31\u0e14\u0e25\u0e2d\u0e01\u0e25\u0e34\u0e07\u0e04\u0e4c\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13",
                    "Line 3": "\u0e1a\u0e23\u0e23\u0e17\u0e31\u0e14\u0e17\u0e35\u0e48 3",
                    "Line 1": "\u0e1a\u0e23\u0e23\u0e17\u0e31\u0e14 1",
                    "Line 2": "\u0e1a\u0e23\u0e23\u0e17\u0e31\u0e14 2",
                    "Line 5": "\u0e1a\u0e23\u0e23\u0e17\u0e31\u0e14\u0e17\u0e35\u0e48 5",
                    "Line 9": "\u0e1a\u0e23\u0e23\u0e17\u0e31\u0e14\u0e17\u0e35\u0e48 9",
                    " Toggle Tree (expand/collapse) ": "\u0e2a\u0e25\u0e31\u0e1a\u0e15\u0e49\u0e19\u0e44\u0e21\u0e49 (\u0e02\u0e22\u0e32\u0e22 / \u0e22\u0e38\u0e1a)",
                    "Line 8": "\u0e1a\u0e23\u0e23\u0e17\u0e31\u0e14\u0e17\u0e35\u0e48 8",
                    "Line 7": "\u0e1a\u0e23\u0e23\u0e17\u0e31\u0e14 7",
                    "Line 6": "\u0e1a\u0e23\u0e23\u0e17\u0e31\u0e14\u0e17\u0e35\u0e48 6",
                    "Line 4": "\u0e1a\u0e23\u0e23\u0e17\u0e31\u0e14 4",
                    " Level 1 ": "\u0e23\u0e30\u0e14\u0e31\u0e1a 1",
                    "ID : 0": "ID: 0",
                    " Level 3 ": "\u0e23\u0e30\u0e14\u0e31\u0e1a 3",
                    " Level 2 ": "\u0e23\u0e30\u0e14\u0e31\u0e1a 2",
                    " Level 6 ": "\u0e23\u0e30\u0e14\u0e31\u0e1a 6",
                    " Level 5 ": "\u0e23\u0e30\u0e14\u0e31\u0e1a 5",
                    " Level 4 ": "\u0e23\u0e30\u0e14\u0e31\u0e1a 4",
                    "ID :1623": "ID: 1623",
                    "ID :3861": "ID: 3861",
                    "ID :1684": "ID: 1684",
                    "ID :2298": "ID: 2298",
                    "ID :4447": "ID: 4447",
                    "ID :6489": "ID: 6489",
                    "ID :8378": "ID: 8378",
                    "ID :8410": "ID: 8410",
                    "ID :8426": "ID: 8426",
                    "ID :8434": "ID: 8434",
                    "ID :17940": "ID: 17940",
                    "ID :8443": "ID: 8443",
                    Id: "Id",
                    Line: "\u0e44\u0e25\u0e19\u0e4c",
                    "Eth Wallet": "Eth Wallet",
                    Level: "\u0e0a\u0e31\u0e49\u0e19",
                    Amount: "\u0e08\u0e33\u0e19\u0e27\u0e19",
                    "S.No": "S.No",
                    "Lost Profit Total : 0 ETH": "\u0e01\u0e33\u0e44\u0e23\u0e17\u0e35\u0e48\u0e2a\u0e39\u0e0d\u0e40\u0e2a\u0e35\u0e22\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14: 0 ETH",
                    ID: "ID",
                    " Priority Counter ": "\u0e25\u0e33\u0e14\u0e31\u0e1a\u0e04\u0e27\u0e32\u0e21\u0e2a\u0e33\u0e04\u0e31\u0e0d\u0e02\u0e2d\u0e07\u0e40\u0e04\u0e32\u0e19\u0e4c\u0e40\u0e15\u0e2d\u0e23\u0e4c",
                    " Pool / Direct Income ": "\u0e23\u0e32\u0e22\u0e44\u0e14\u0e49\u0e2a\u0e23\u0e30\u0e27\u0e48\u0e32\u0e22\u0e19\u0e49\u0e33 / \u0e42\u0e14\u0e22\u0e15\u0e23\u0e07",
                    " My Sponsor ": "\u0e2a\u0e1b\u0e2d\u0e19\u0e40\u0e0b\u0e2d\u0e23\u0e4c\u0e02\u0e2d\u0e07\u0e09\u0e31\u0e19",
                    " Increase in priority will help you to claim your reward early. ": "\u0e01\u0e32\u0e23\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e25\u0e33\u0e14\u0e31\u0e1a\u0e04\u0e27\u0e32\u0e21\u0e2a\u0e33\u0e04\u0e31\u0e0d\u0e08\u0e30\u0e0a\u0e48\u0e27\u0e22\u0e43\u0e2b\u0e49\u0e04\u0e38\u0e13\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e23\u0e31\u0e1a\u0e23\u0e32\u0e07\u0e27\u0e31\u0e25\u0e44\u0e14\u0e49\u0e40\u0e23\u0e47\u0e27\u0e02\u0e36\u0e49\u0e19",
                    " Join Pool ": "\u0e40\u0e02\u0e49\u0e32\u0e23\u0e48\u0e27\u0e21\u0e01\u0e25\u0e38\u0e48\u0e21",
                    "My Unison Pools ": "\u0e2a\u0e23\u0e30\u0e02\u0e2d\u0e07\u0e09\u0e31\u0e19\u0e1e\u0e23\u0e49\u0e2d\u0e21\u0e40\u0e1e\u0e23\u0e35\u0e22\u0e07",
                    " My Directs : 0 ": "\u0e04\u0e33\u0e2a\u0e31\u0e48\u0e07\u0e02\u0e2d\u0e07\u0e09\u0e31\u0e19: 0",
                    Date: "\u0e27\u0e31\u0e19\u0e17\u0e35\u0e48",
                    "Yield Booster ": "\u0e1a\u0e39\u0e2a\u0e40\u0e15\u0e2d\u0e23\u0e4c Yield",
                    Sponsor: "\u0e2a\u0e1b\u0e2d\u0e19\u0e40\u0e0b\u0e2d\u0e23\u0e4c",
                    Pool: "\u0e2a\u0e23\u0e30",
                    " Transactions ": "\u0e01\u0e32\u0e23\u0e17\u0e33\u0e18\u0e38\u0e23\u0e01\u0e23\u0e23\u0e21",
                    "Amount(ETH)": "\u0e08\u0e33\u0e19\u0e27\u0e19\u0e40\u0e07\u0e34\u0e19 (ETH)",
                    Receiver: "\u0e1c\u0e39\u0e49\u0e23\u0e31\u0e1a",
                    "Pool 4 ": "\u0e2a\u0e23\u0e30\u0e27\u0e48\u0e32\u0e22\u0e19\u0e49\u0e33 4",
                    "Pool 3 ": "\u0e2a\u0e23\u0e30\u0e27\u0e48\u0e32\u0e22\u0e19\u0e49\u0e33 3",
                    "Pool 2 ": "\u0e2a\u0e23\u0e30\u0e27\u0e48\u0e32\u0e22\u0e19\u0e49\u0e33 2",
                    "Pool 1 ": "\u0e2a\u0e23\u0e30\u0e27\u0e48\u0e32\u0e22\u0e19\u0e49\u0e33 1",
                    " Active ": "\u0e04\u0e25\u0e48\u0e2d\u0e07\u0e41\u0e04\u0e25\u0e48\u0e27",
                    Presentation: "\u0e01\u0e32\u0e23\u0e40\u0e2a\u0e19\u0e2d",
                    "Promotional Materials": "\u0e2a\u0e37\u0e48\u0e2d\u0e2a\u0e48\u0e07\u0e40\u0e2a\u0e23\u0e34\u0e21\u0e01\u0e32\u0e23\u0e02\u0e32\u0e22",
                    " Banner": "\u0e18\u0e07",
                    " Text ": "\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21",
                    " Video ": "\u0e27\u0e35\u0e14\u0e35\u0e42\u0e2d",
                    " Download Presentation ": "\u0e14\u0e32\u0e27\u0e19\u0e4c\u0e42\u0e2b\u0e25\u0e14\u0e40\u0e2d\u0e01\u0e2a\u0e32\u0e23\u0e19\u0e33\u0e40\u0e2a\u0e19\u0e2d",
                    " Presentation ": "\u0e01\u0e32\u0e23\u0e40\u0e2a\u0e19\u0e2d",
                    " Offline Income Pattern ": "\u0e23\u0e39\u0e1b\u0e41\u0e1a\u0e1a\u0e23\u0e32\u0e22\u0e44\u0e14\u0e49\u0e2d\u0e2d\u0e1f\u0e44\u0e25\u0e19\u0e4c",
                    " OpenAlexa - Trust Wallet ": "OpenAlexa - Trust Wallet",
                    " OpenAlexa - Security Advisory ": "OpenAlexa - \u0e04\u0e33\u0e41\u0e19\u0e30\u0e19\u0e33\u0e14\u0e49\u0e32\u0e19\u0e04\u0e27\u0e32\u0e21\u0e1b\u0e25\u0e2d\u0e14\u0e20\u0e31\u0e22",
                    " Text advertising for posts and newsletters ": "\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21\u0e42\u0e06\u0e29\u0e13\u0e32\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e42\u0e1e\u0e2a\u0e15\u0e4c\u0e41\u0e25\u0e30\u0e08\u0e14\u0e2b\u0e21\u0e32\u0e22\u0e02\u0e48\u0e32\u0e27",
                    " Example 1. You and a friend bet on the outcome of a football match. You make bets in the blockchain in the form of transactions, which are stored there until the end of the game. When the match ends, the smart contract automatically checks its outcome on one of the sports sites and transfers all the money to the winner. ": "\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e17\u0e35\u0e48 1 \u0e04\u0e38\u0e13\u0e41\u0e25\u0e30\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e19\u0e40\u0e14\u0e34\u0e21\u0e1e\u0e31\u0e19\u0e43\u0e19\u0e1c\u0e25\u0e01\u0e32\u0e23\u0e41\u0e02\u0e48\u0e07\u0e02\u0e31\u0e19\u0e1f\u0e38\u0e15\u0e1a\u0e2d\u0e25 \u0e04\u0e38\u0e13\u0e17\u0e33\u0e01\u0e32\u0e23\u0e40\u0e14\u0e34\u0e21\u0e1e\u0e31\u0e19\u0e43\u0e19 blockchain \u0e43\u0e19\u0e23\u0e39\u0e1b\u0e41\u0e1a\u0e1a\u0e02\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e17\u0e33\u0e18\u0e38\u0e23\u0e01\u0e23\u0e23\u0e21\u0e0b\u0e36\u0e48\u0e07\u0e08\u0e30\u0e16\u0e39\u0e01\u0e40\u0e01\u0e47\u0e1a\u0e44\u0e27\u0e49\u0e17\u0e35\u0e48\u0e19\u0e31\u0e48\u0e19\u0e08\u0e19\u0e01\u0e23\u0e30\u0e17\u0e31\u0e48\u0e07\u0e2a\u0e34\u0e49\u0e19\u0e2a\u0e38\u0e14\u0e40\u0e01\u0e21 \u0e40\u0e21\u0e37\u0e48\u0e2d\u0e01\u0e32\u0e23\u0e41\u0e02\u0e48\u0e07\u0e02\u0e31\u0e19\u0e2a\u0e34\u0e49\u0e19\u0e2a\u0e38\u0e14\u0e25\u0e07\u0e2a\u0e31\u0e0d\u0e0d\u0e32\u0e2d\u0e31\u0e19\u0e0a\u0e32\u0e0d\u0e09\u0e25\u0e32\u0e14\u0e08\u0e30\u0e15\u0e23\u0e27\u0e08\u0e2a\u0e2d\u0e1a\u0e1c\u0e25\u0e25\u0e31\u0e1e\u0e18\u0e4c\u0e42\u0e14\u0e22\u0e2d\u0e31\u0e15\u0e42\u0e19\u0e21\u0e31\u0e15\u0e34\u0e43\u0e19\u0e40\u0e27\u0e47\u0e1a\u0e44\u0e0b\u0e15\u0e4c\u0e01\u0e35\u0e2c\u0e32\u0e2b\u0e19\u0e36\u0e48\u0e07\u0e41\u0e2b\u0e48\u0e07\u0e41\u0e25\u0e30\u0e42\u0e2d\u0e19\u0e40\u0e07\u0e34\u0e19\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14\u0e43\u0e2b\u0e49\u0e01\u0e31\u0e1a\u0e1c\u0e39\u0e49\u0e0a\u0e19\u0e30",
                    " What is a Smart Contract? ": "\u0e2a\u0e31\u0e0d\u0e0d\u0e32\u0e2d\u0e31\u0e08\u0e09\u0e23\u0e34\u0e22\u0e30\u0e04\u0e37\u0e2d\u0e2d\u0e30\u0e44\u0e23",
                    " A smart contract is a computer algorithm that controls the completion of a transaction. It is entered into the blockchain and remembered forever. The conditions are the same for everyone and cannot be changed or deleted by anyone. A smart contract makes financial transactions automatically, without human intervention, according to conditions written in advance. ": "\u0e2a\u0e31\u0e0d\u0e0d\u0e32\u0e2d\u0e31\u0e08\u0e09\u0e23\u0e34\u0e22\u0e30\u0e04\u0e37\u0e2d\u0e2d\u0e31\u0e25\u0e01\u0e2d\u0e23\u0e34\u0e18\u0e36\u0e21\u0e04\u0e2d\u0e21\u0e1e\u0e34\u0e27\u0e40\u0e15\u0e2d\u0e23\u0e4c\u0e17\u0e35\u0e48\u0e04\u0e27\u0e1a\u0e04\u0e38\u0e21\u0e01\u0e32\u0e23\u0e17\u0e33\u0e18\u0e38\u0e23\u0e01\u0e23\u0e23\u0e21\u0e43\u0e2b\u0e49\u0e40\u0e2a\u0e23\u0e47\u0e08\u0e2a\u0e21\u0e1a\u0e39\u0e23\u0e13\u0e4c \u0e21\u0e31\u0e19\u0e16\u0e39\u0e01\u0e1b\u0e49\u0e2d\u0e19\u0e40\u0e02\u0e49\u0e32\u0e44\u0e1b\u0e43\u0e19 blockchain \u0e41\u0e25\u0e30\u0e08\u0e14\u0e08\u0e33\u0e15\u0e25\u0e2d\u0e14\u0e44\u0e1b \u0e40\u0e07\u0e37\u0e48\u0e2d\u0e19\u0e44\u0e02\u0e40\u0e2b\u0e21\u0e37\u0e2d\u0e19\u0e01\u0e31\u0e19\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e17\u0e38\u0e01\u0e04\u0e19\u0e41\u0e25\u0e30\u0e44\u0e21\u0e48\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e41\u0e1b\u0e25\u0e07\u0e2b\u0e23\u0e37\u0e2d\u0e25\u0e1a\u0e44\u0e14\u0e49\u0e42\u0e14\u0e22\u0e17\u0e38\u0e01\u0e04\u0e19 \u0e2a\u0e31\u0e0d\u0e0d\u0e32\u0e17\u0e35\u0e48\u0e0a\u0e32\u0e0d\u0e09\u0e25\u0e32\u0e14\u0e08\u0e30\u0e17\u0e33\u0e18\u0e38\u0e23\u0e01\u0e23\u0e23\u0e21\u0e17\u0e32\u0e07\u0e01\u0e32\u0e23\u0e40\u0e07\u0e34\u0e19\u0e42\u0e14\u0e22\u0e2d\u0e31\u0e15\u0e42\u0e19\u0e21\u0e31\u0e15\u0e34\u0e42\u0e14\u0e22\u0e44\u0e21\u0e48\u0e21\u0e35\u0e01\u0e32\u0e23\u0e41\u0e17\u0e23\u0e01\u0e41\u0e0b\u0e07\u0e02\u0e2d\u0e07\u0e21\u0e19\u0e38\u0e29\u0e22\u0e4c\u0e15\u0e32\u0e21\u0e40\u0e07\u0e37\u0e48\u0e2d\u0e19\u0e44\u0e02\u0e17\u0e35\u0e48\u0e40\u0e02\u0e35\u0e22\u0e19\u0e44\u0e27\u0e49\u0e25\u0e48\u0e27\u0e07\u0e2b\u0e19\u0e49\u0e32",
                    " Example 2. You ordered a product through an online store. Payment for the goods is recorded on the blockchain, and only after confirmation by the courier that the goods have been delivered, the money goes to the owner. ": "\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e17\u0e35\u0e48 2 \u0e04\u0e38\u0e13\u0e2a\u0e31\u0e48\u0e07\u0e0b\u0e37\u0e49\u0e2d\u0e1c\u0e25\u0e34\u0e15\u0e20\u0e31\u0e13\u0e11\u0e4c\u0e1c\u0e48\u0e32\u0e19\u0e23\u0e49\u0e32\u0e19\u0e04\u0e49\u0e32\u0e2d\u0e2d\u0e19\u0e44\u0e25\u0e19\u0e4c \u0e01\u0e32\u0e23\u0e0a\u0e33\u0e23\u0e30\u0e40\u0e07\u0e34\u0e19\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e2a\u0e34\u0e19\u0e04\u0e49\u0e32\u0e19\u0e31\u0e49\u0e19\u0e08\u0e30\u0e16\u0e39\u0e01\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01\u0e43\u0e19 blockchain \u0e41\u0e25\u0e30\u0e2b\u0e25\u0e31\u0e07\u0e08\u0e32\u0e01\u0e44\u0e14\u0e49\u0e23\u0e31\u0e1a\u0e01\u0e32\u0e23\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19\u0e08\u0e32\u0e01\u0e1c\u0e39\u0e49\u0e08\u0e31\u0e14\u0e2a\u0e48\u0e07\u0e27\u0e48\u0e32\u0e2a\u0e34\u0e19\u0e04\u0e49\u0e32\u0e44\u0e14\u0e49\u0e16\u0e39\u0e01\u0e2a\u0e48\u0e07\u0e44\u0e1b\u0e41\u0e25\u0e49\u0e27\u0e40\u0e07\u0e34\u0e19\u0e08\u0e30\u0e16\u0e39\u0e01\u0e2a\u0e48\u0e07\u0e44\u0e1b\u0e22\u0e31\u0e07\u0e40\u0e08\u0e49\u0e32\u0e02\u0e2d\u0e07",
                    " Nobody will deceive anyone, everyone sees the code of the smart contract and understands that it works exactly as it is written in it. A smart contract is not a person, it will not lie and will not hide with money. ": "\u0e44\u0e21\u0e48\u0e21\u0e35\u0e43\u0e04\u0e23\u0e08\u0e30\u0e2b\u0e25\u0e2d\u0e01\u0e25\u0e27\u0e07\u0e43\u0e04\u0e23\u0e40\u0e25\u0e22\u0e17\u0e38\u0e01\u0e04\u0e19\u0e40\u0e2b\u0e47\u0e19\u0e23\u0e2b\u0e31\u0e2a\u0e02\u0e2d\u0e07\u0e2a\u0e31\u0e0d\u0e0d\u0e32\u0e17\u0e35\u0e48\u0e0a\u0e32\u0e0d\u0e09\u0e25\u0e32\u0e14\u0e41\u0e25\u0e30\u0e40\u0e02\u0e49\u0e32\u0e43\u0e08\u0e27\u0e48\u0e32\u0e21\u0e31\u0e19\u0e17\u0e33\u0e07\u0e32\u0e19\u0e44\u0e14\u0e49\u0e14\u0e35\u0e40\u0e2b\u0e21\u0e37\u0e2d\u0e19\u0e17\u0e35\u0e48\u0e40\u0e02\u0e35\u0e22\u0e19\u0e44\u0e27\u0e49\u0e43\u0e19\u0e19\u0e31\u0e49\u0e19 \u0e2a\u0e31\u0e0d\u0e0d\u0e32\u0e17\u0e35\u0e48\u0e0a\u0e32\u0e0d\u0e09\u0e25\u0e32\u0e14\u0e44\u0e21\u0e48\u0e43\u0e0a\u0e48\u0e04\u0e19\u0e21\u0e31\u0e19\u0e08\u0e30\u0e44\u0e21\u0e48\u0e42\u0e01\u0e2b\u0e01\u0e41\u0e25\u0e30\u0e08\u0e30\u0e44\u0e21\u0e48\u0e0b\u0e48\u0e2d\u0e19\u0e40\u0e07\u0e34\u0e19",
                    " Data is encrypted and distributed on the blockchain and duplicated many times, it cannot be changed or deleted. ": "\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e16\u0e39\u0e01\u0e40\u0e02\u0e49\u0e32\u0e23\u0e2b\u0e31\u0e2a\u0e41\u0e25\u0e30\u0e41\u0e08\u0e01\u0e08\u0e48\u0e32\u0e22\u0e43\u0e19 blockchain \u0e41\u0e25\u0e30\u0e17\u0e33\u0e0b\u0e49\u0e33\u0e2b\u0e25\u0e32\u0e22\u0e04\u0e23\u0e31\u0e49\u0e07\u0e44\u0e21\u0e48\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e41\u0e1b\u0e25\u0e07\u0e2b\u0e23\u0e37\u0e2d\u0e25\u0e1a\u0e44\u0e14\u0e49",
                    " A verified smart contract will work as long as the Ethereum blockchain exists. ": "\u0e2a\u0e31\u0e0d\u0e0d\u0e32\u0e2a\u0e21\u0e32\u0e23\u0e4c\u0e17\u0e17\u0e35\u0e48\u0e1c\u0e48\u0e32\u0e19\u0e01\u0e32\u0e23\u0e15\u0e23\u0e27\u0e08\u0e2a\u0e2d\u0e1a\u0e41\u0e25\u0e49\u0e27\u0e08\u0e30\u0e17\u0e33\u0e07\u0e32\u0e19\u0e44\u0e14\u0e49\u0e15\u0e23\u0e32\u0e1a\u0e40\u0e17\u0e48\u0e32\u0e17\u0e35\u0e48 Ethereum blockchain \u0e21\u0e35\u0e2d\u0e22\u0e39\u0e48",
                    " #openalexa #smartcontract #ethereum #bitcoin #crypto #blockchain #money # crypto #cryptocurrency #earningonline #btc #eth #investing #finance #profit #wagering #earnings #risklesswork #sales #marketing ": "#openalexa #smartcontract #ethereum #bitcoin #crypto #blockchain #money # crypto #cryptocurrency #earningonline #btc #eth #investing #finance # \u0e01\u0e33\u0e44\u0e23 # \u0e01\u0e32\u0e23\u0e27\u0e32\u0e07\u0e40\u0e14\u0e34\u0e21\u0e1e\u0e31\u0e19 #earning # \u0e01\u0e32\u0e23\u0e02\u0e32\u0e22\u0e15\u0e48\u0e33",
                    " OpenAlexa Smart Contract : SCAM IMPOSSIBLE ": "OpenAlexa Smart Contract: SCAM IMPOSSIBLE",
                    " Payments are made from wallet to participant\u2019s wallet ": "\u0e0a\u0e33\u0e23\u0e30\u0e40\u0e07\u0e34\u0e19\u0e08\u0e32\u0e01\u0e01\u0e23\u0e30\u0e40\u0e1b\u0e4b\u0e32\u0e40\u0e07\u0e34\u0e19\u0e44\u0e1b\u0e22\u0e31\u0e07\u0e01\u0e23\u0e30\u0e40\u0e1b\u0e4b\u0e32\u0e40\u0e07\u0e34\u0e19\u0e02\u0e2d\u0e07\u0e1c\u0e39\u0e49\u0e40\u0e02\u0e49\u0e32\u0e23\u0e48\u0e27\u0e21",
                    "OpenAlexa Smart contract is the best that mankind could come up with in recent years.": "OpenAlexa Smart contract \u0e40\u0e1b\u0e47\u0e19\u0e2a\u0e34\u0e48\u0e07\u0e17\u0e35\u0e48\u0e14\u0e35\u0e17\u0e35\u0e48\u0e2a\u0e38\u0e14\u0e17\u0e35\u0e48\u0e21\u0e19\u0e38\u0e29\u0e22\u0e4c\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e17\u0e33\u0e44\u0e14\u0e49\u0e43\u0e19\u0e0a\u0e48\u0e27\u0e07\u0e44\u0e21\u0e48\u0e01\u0e35\u0e48\u0e1b\u0e35\u0e17\u0e35\u0e48\u0e1c\u0e48\u0e32\u0e19\u0e21\u0e32",
                    " Locking and breaking a wallet is not possible ": "\u0e01\u0e32\u0e23\u0e25\u0e47\u0e2d\u0e04\u0e41\u0e25\u0e30\u0e01\u0e32\u0e23\u0e17\u0e33\u0e25\u0e32\u0e22\u0e01\u0e23\u0e30\u0e40\u0e1b\u0e4b\u0e32\u0e40\u0e07\u0e34\u0e19\u0e19\u0e31\u0e49\u0e19\u0e40\u0e1b\u0e47\u0e19\u0e44\u0e1b\u0e44\u0e21\u0e48\u0e44\u0e14\u0e49",
                    " It is impossible to steal money ": "\u0e21\u0e31\u0e19\u0e40\u0e1b\u0e47\u0e19\u0e44\u0e1b\u0e44\u0e21\u0e48\u0e44\u0e14\u0e49\u0e17\u0e35\u0e48\u0e08\u0e30\u0e02\u0e42\u0e21\u0e22\u0e40\u0e07\u0e34\u0e19",
                    " Unable to exclude your account from the structure ": "\u0e44\u0e21\u0e48\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e41\u0e22\u0e01\u0e1a\u0e31\u0e0d\u0e0a\u0e35\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13\u0e2d\u0e2d\u0e01\u0e08\u0e32\u0e01\u0e42\u0e04\u0e23\u0e07\u0e2a\u0e23\u0e49\u0e32\u0e07",
                    " The project has no owner, all conditions are unchanged ": "\u0e42\u0e04\u0e23\u0e07\u0e01\u0e32\u0e23\u0e19\u0e35\u0e49\u0e44\u0e21\u0e48\u0e21\u0e35\u0e40\u0e08\u0e49\u0e32\u0e02\u0e2d\u0e07\u0e44\u0e21\u0e48\u0e21\u0e35\u0e40\u0e07\u0e37\u0e48\u0e2d\u0e19\u0e44\u0e02\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14",
                    " If you close the site, the smart contract will still work ": "\u0e2b\u0e32\u0e01\u0e04\u0e38\u0e13\u0e1b\u0e34\u0e14\u0e44\u0e0b\u0e15\u0e4c\u0e2a\u0e31\u0e0d\u0e0d\u0e32\u0e2d\u0e31\u0e08\u0e09\u0e23\u0e34\u0e22\u0e30\u0e08\u0e30\u0e22\u0e31\u0e07\u0e04\u0e07\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19\u0e44\u0e14\u0e49",
                    " THE FASTEST AND SIMPLE SMART CONTRACT ": "\u0e2a\u0e31\u0e0d\u0e0d\u0e32\u0e2a\u0e21\u0e32\u0e23\u0e4c\u0e17\u0e17\u0e35\u0e48\u0e40\u0e23\u0e47\u0e27\u0e41\u0e25\u0e30\u0e07\u0e48\u0e32\u0e22\u0e17\u0e35\u0e48\u0e2a\u0e38\u0e14",
                    " For the first time such a simple and convenient marketing. Binary matrix 6 lines - 128 people in a team are enough to go through two cycles and earn 4000+ ETH ": "\u0e40\u0e1b\u0e47\u0e19\u0e04\u0e23\u0e31\u0e49\u0e07\u0e41\u0e23\u0e01\u0e40\u0e0a\u0e48\u0e19\u0e01\u0e32\u0e23\u0e15\u0e25\u0e32\u0e14\u0e17\u0e35\u0e48\u0e07\u0e48\u0e32\u0e22\u0e41\u0e25\u0e30\u0e2a\u0e30\u0e14\u0e27\u0e01 \u0e44\u0e1a\u0e19\u0e32\u0e23\u0e35\u0e40\u0e21\u0e17\u0e23\u0e34\u0e01\u0e0b\u0e4c 6 \u0e1a\u0e23\u0e23\u0e17\u0e31\u0e14 - 128 \u0e04\u0e19\u0e43\u0e19\u0e17\u0e35\u0e21\u0e40\u0e1e\u0e35\u0e22\u0e07\u0e1e\u0e2d\u0e17\u0e35\u0e48\u0e08\u0e30\u0e1c\u0e48\u0e32\u0e19\u0e2a\u0e2d\u0e07\u0e23\u0e2d\u0e1a\u0e41\u0e25\u0e30\u0e23\u0e31\u0e1a 4000+ ETH",
                    " OpenAlexa - Risk-free way of Earning ETH ": "OpenAlexa - \u0e27\u0e34\u0e18\u0e35\u0e01\u0e32\u0e23\u0e23\u0e31\u0e1a ETH \u0e17\u0e35\u0e48\u0e44\u0e21\u0e48\u0e21\u0e35\u0e04\u0e27\u0e32\u0e21\u0e40\u0e2a\u0e35\u0e48\u0e22\u0e07",
                    " Accessible to everyone. Entrance fee - 0.03 ETH only. ": "\u0e17\u0e38\u0e01\u0e04\u0e19\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e40\u0e02\u0e49\u0e32\u0e16\u0e36\u0e07\u0e44\u0e14\u0e49 \u0e04\u0e48\u0e32\u0e18\u0e23\u0e23\u0e21\u0e40\u0e19\u0e35\u0e22\u0e21\u0e41\u0e23\u0e01\u0e40\u0e02\u0e49\u0e32 - 0.03 ETH \u0e40\u0e17\u0e48\u0e32\u0e19\u0e31\u0e49\u0e19",
                    " The repetition frequency of 60 days. Income can be repeated every 60 days with a ready-made team, earn 4000+ ETH every two months ": "\u0e04\u0e27\u0e32\u0e21\u0e16\u0e35\u0e48\u0e01\u0e32\u0e23\u0e17\u0e33\u0e0b\u0e49\u0e33 60 \u0e27\u0e31\u0e19 \u0e23\u0e32\u0e22\u0e44\u0e14\u0e49\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e17\u0e33\u0e0b\u0e49\u0e33\u0e44\u0e14\u0e49\u0e17\u0e38\u0e01 \u0e46 60 \u0e27\u0e31\u0e19\u0e01\u0e31\u0e1a\u0e17\u0e35\u0e21\u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08\u0e23\u0e39\u0e1b\u0e23\u0e31\u0e1a 4000+ ETH \u0e17\u0e38\u0e01\u0e2a\u0e2d\u0e07\u0e40\u0e14\u0e37\u0e2d\u0e19",
                    " View ": "\u0e14\u0e39",
                    " OpenAlexa - Use with MetaMask ": "OpenAlexa - \u0e43\u0e0a\u0e49\u0e01\u0e31\u0e1a MetaMask",
                    " OpenAlexa Explainer Video - EN ": "\u0e27\u0e34\u0e14\u0e35\u0e42\u0e2d OpenAlexa Explainer - EN",
                    " OpenAlexa can be divided into 2 concepts: First - Is a smart contract or application running on a cryptocurrency network Ethereum. The application code is programmed to distribute incoming transfers among participants according to a specific algorithm. Second - Is the site itself, providing an interface for the convenience of working with a smart contract. ": "OpenAlexa \u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e41\u0e1a\u0e48\u0e07\u0e2d\u0e2d\u0e01\u0e40\u0e1b\u0e47\u0e19 2 \u0e41\u0e19\u0e27\u0e04\u0e34\u0e14: First - \u0e40\u0e1b\u0e47\u0e19\u0e2a\u0e31\u0e0d\u0e0d\u0e32\u0e2d\u0e31\u0e08\u0e09\u0e23\u0e34\u0e22\u0e30\u0e2b\u0e23\u0e37\u0e2d\u0e41\u0e2d\u0e1b\u0e1e\u0e25\u0e34\u0e40\u0e04\u0e0a\u0e31\u0e19\u0e17\u0e35\u0e48\u0e17\u0e33\u0e07\u0e32\u0e19\u0e1a\u0e19\u0e40\u0e04\u0e23\u0e37\u0e2d\u0e02\u0e48\u0e32\u0e22 cryptocurrency Ethereum \u0e23\u0e2b\u0e31\u0e2a\u0e41\u0e2d\u0e1b\u0e1e\u0e25\u0e34\u0e40\u0e04\u0e0a\u0e31\u0e19\u0e16\u0e39\u0e01\u0e15\u0e31\u0e49\u0e07\u0e42\u0e1b\u0e23\u0e41\u0e01\u0e23\u0e21\u0e43\u0e2b\u0e49\u0e41\u0e08\u0e01\u0e08\u0e48\u0e32\u0e22\u0e01\u0e32\u0e23\u0e16\u0e48\u0e32\u0e22\u0e42\u0e2d\u0e19\u0e02\u0e32\u0e40\u0e02\u0e49\u0e32\u0e23\u0e30\u0e2b\u0e27\u0e48\u0e32\u0e07\u0e1c\u0e39\u0e49\u0e40\u0e02\u0e49\u0e32\u0e23\u0e48\u0e27\u0e21\u0e15\u0e32\u0e21\u0e2d\u0e31\u0e25\u0e01\u0e2d\u0e23\u0e34\u0e17\u0e36\u0e21\u0e40\u0e09\u0e1e\u0e32\u0e30 \u0e1b\u0e23\u0e30\u0e01\u0e32\u0e23\u0e17\u0e35\u0e48\u0e2a\u0e2d\u0e07 - \u0e40\u0e1b\u0e47\u0e19\u0e40\u0e27\u0e47\u0e1a\u0e44\u0e0b\u0e15\u0e4c\u0e02\u0e2d\u0e07\u0e15\u0e31\u0e27\u0e40\u0e2d\u0e07\u0e43\u0e2b\u0e49\u0e1a\u0e23\u0e34\u0e01\u0e32\u0e23\u0e2d\u0e34\u0e19\u0e40\u0e17\u0e2d\u0e23\u0e4c\u0e40\u0e1f\u0e0b\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e04\u0e27\u0e32\u0e21\u0e2a\u0e30\u0e14\u0e27\u0e01\u0e43\u0e19\u0e01\u0e32\u0e23\u0e17\u0e33\u0e07\u0e32\u0e19\u0e01\u0e31\u0e1a\u0e2a\u0e31\u0e0d\u0e0d\u0e32\u0e2d\u0e31\u0e08\u0e09\u0e23\u0e34\u0e22\u0e30",
                    " FAQs ": "\u0e04\u0e33\u0e16\u0e32\u0e21\u0e17\u0e35\u0e48\u0e1e\u0e1a\u0e1a\u0e48\u0e2d\u0e22",
                    "What is OpenAlexa?": "OpenAlexa \u0e04\u0e37\u0e2d\u0e2d\u0e30\u0e44\u0e23",
                    "Who is the Project Administrator?": "\u0e43\u0e04\u0e23\u0e04\u0e37\u0e2d\u0e1c\u0e39\u0e49\u0e14\u0e39\u0e41\u0e25\u0e42\u0e04\u0e23\u0e07\u0e01\u0e32\u0e23",
                    "What is mode of payment in OpenAlexa?": "\u0e42\u0e2b\u0e21\u0e14\u0e01\u0e32\u0e23\u0e0a\u0e33\u0e23\u0e30\u0e40\u0e07\u0e34\u0e19\u0e43\u0e19 OpenAlexa \u0e04\u0e37\u0e2d\u0e2d\u0e30\u0e44\u0e23",
                    " In a project like OpenAlexa there is no administrator. There is a creator who uploaded the contract code to the cryptocurrency blockchain Ethereum. After that, the smart contract has been part of the overall network, which is supported by miners. No one has the right to affect the operation of a smart contract, delete it or stop it. Any attempt to make unauthorised changes will be rejected due to inconsistency with previous copies in the block chain. ": "\u0e43\u0e19\u0e42\u0e04\u0e23\u0e07\u0e01\u0e32\u0e23\u0e40\u0e0a\u0e48\u0e19 OpenAlexa \u0e44\u0e21\u0e48\u0e21\u0e35\u0e1c\u0e39\u0e49\u0e14\u0e39\u0e41\u0e25 \u0e21\u0e35\u0e1c\u0e39\u0e49\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e04\u0e19\u0e2b\u0e19\u0e36\u0e48\u0e07\u0e17\u0e35\u0e48\u0e2d\u0e31\u0e1e\u0e42\u0e2b\u0e25\u0e14\u0e23\u0e2b\u0e31\u0e2a\u0e2a\u0e31\u0e0d\u0e0d\u0e32\u0e44\u0e1b\u0e17\u0e35\u0e48\u0e1a\u0e25\u0e47\u0e2d\u0e01\u0e40\u0e01\u0e2d\u0e23\u0e4c eCertocurrency cryptocurrency \u0e2b\u0e25\u0e31\u0e07\u0e08\u0e32\u0e01\u0e19\u0e31\u0e49\u0e19\u0e2a\u0e31\u0e0d\u0e0d\u0e32\u0e2a\u0e21\u0e32\u0e23\u0e4c\u0e17\u0e40\u0e1b\u0e47\u0e19\u0e2a\u0e48\u0e27\u0e19\u0e2b\u0e19\u0e36\u0e48\u0e07\u0e02\u0e2d\u0e07\u0e40\u0e04\u0e23\u0e37\u0e2d\u0e02\u0e48\u0e32\u0e22\u0e42\u0e14\u0e22\u0e23\u0e27\u0e21\u0e0b\u0e36\u0e48\u0e07\u0e44\u0e14\u0e49\u0e23\u0e31\u0e1a\u0e01\u0e32\u0e23\u0e2a\u0e19\u0e31\u0e1a\u0e2a\u0e19\u0e38\u0e19\u0e08\u0e32\u0e01\u0e04\u0e19\u0e07\u0e32\u0e19\u0e40\u0e2b\u0e21\u0e37\u0e2d\u0e07 \u0e44\u0e21\u0e48\u0e21\u0e35\u0e43\u0e04\u0e23\u0e21\u0e35\u0e2a\u0e34\u0e17\u0e18\u0e34\u0e17\u0e35\u0e48\u0e08\u0e30\u0e2a\u0e48\u0e07\u0e1c\u0e25\u0e01\u0e23\u0e30\u0e17\u0e1a\u0e15\u0e48\u0e2d\u0e01\u0e32\u0e23\u0e17\u0e33\u0e07\u0e32\u0e19\u0e02\u0e2d\u0e07\u0e2a\u0e31\u0e0d\u0e0d\u0e32\u0e2d\u0e31\u0e08\u0e09\u0e23\u0e34\u0e22\u0e30\u0e25\u0e1a\u0e2b\u0e23\u0e37\u0e2d\u0e2b\u0e22\u0e38\u0e14 \u0e04\u0e27\u0e32\u0e21\u0e1e\u0e22\u0e32\u0e22\u0e32\u0e21\u0e43\u0e14 \u0e46 \u0e43\u0e19\u0e01\u0e32\u0e23\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e41\u0e1b\u0e25\u0e07\u0e17\u0e35\u0e48\u0e44\u0e21\u0e48\u0e44\u0e14\u0e49\u0e23\u0e31\u0e1a\u0e2d\u0e19\u0e38\u0e0d\u0e32\u0e15\u0e08\u0e30\u0e16\u0e39\u0e01\u0e1b\u0e0f\u0e34\u0e40\u0e2a\u0e18\u0e40\u0e19\u0e37\u0e48\u0e2d\u0e07\u0e08\u0e32\u0e01\u0e04\u0e27\u0e32\u0e21\u0e44\u0e21\u0e48\u0e2a\u0e2d\u0e14\u0e04\u0e25\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e1a\u0e2a\u0e33\u0e40\u0e19\u0e32\u0e01\u0e48\u0e2d\u0e19\u0e2b\u0e19\u0e49\u0e32\u0e43\u0e19\u0e1a\u0e25\u0e47\u0e2d\u0e01\u0e42\u0e0b\u0e48",
                    "Can a transaction remain on the balance of a smart contract?": "\u0e01\u0e32\u0e23\u0e17\u0e33\u0e18\u0e38\u0e23\u0e01\u0e23\u0e23\u0e21\u0e08\u0e30\u0e22\u0e31\u0e07\u0e04\u0e07\u0e2d\u0e22\u0e39\u0e48\u0e1a\u0e19\u0e22\u0e2d\u0e14\u0e04\u0e07\u0e40\u0e2b\u0e25\u0e37\u0e2d\u0e02\u0e2d\u0e07\u0e2a\u0e31\u0e0d\u0e0d\u0e32\u0e2d\u0e31\u0e08\u0e09\u0e23\u0e34\u0e22\u0e30\u0e2b\u0e23\u0e37\u0e2d\u0e44\u0e21\u0e48?",
                    " Again NO! The smart contract is absolutely transparent, all data is recorded in the blockchain chain. No scam or fraud. The project cannot fail. It will work as long as the blockchain exists, even if the site is closed. ": "\u0e44\u0e21\u0e48\u0e2d\u0e35\u0e01\u0e41\u0e25\u0e49\u0e27! \u0e2a\u0e31\u0e0d\u0e0d\u0e32\u0e17\u0e35\u0e48\u0e0a\u0e32\u0e0d\u0e09\u0e25\u0e32\u0e14\u0e19\u0e31\u0e49\u0e19\u0e42\u0e1b\u0e23\u0e48\u0e07\u0e43\u0e2a\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e22\u0e34\u0e48\u0e07\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14\u0e08\u0e30\u0e16\u0e39\u0e01\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01\u0e44\u0e27\u0e49\u0e43\u0e19\u0e2b\u0e48\u0e27\u0e07\u0e42\u0e0b\u0e48\u0e1a\u0e25\u0e47\u0e2d\u0e01\u0e40\u0e0a\u0e19 \u0e44\u0e21\u0e48\u0e21\u0e35\u0e01\u0e32\u0e23\u0e2b\u0e25\u0e2d\u0e01\u0e25\u0e27\u0e07\u0e2b\u0e23\u0e37\u0e2d\u0e09\u0e49\u0e2d\u0e42\u0e01\u0e07 \u0e42\u0e04\u0e23\u0e07\u0e01\u0e32\u0e23\u0e44\u0e21\u0e48\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e25\u0e49\u0e21\u0e40\u0e2b\u0e25\u0e27 \u0e21\u0e31\u0e19\u0e08\u0e30\u0e17\u0e33\u0e07\u0e32\u0e19\u0e15\u0e23\u0e32\u0e1a\u0e43\u0e14\u0e17\u0e35\u0e48 blockchain \u0e22\u0e31\u0e07\u0e04\u0e07\u0e2d\u0e22\u0e39\u0e48\u0e41\u0e21\u0e49\u0e27\u0e48\u0e32\u0e08\u0e30\u0e1b\u0e34\u0e14\u0e40\u0e27\u0e47\u0e1a\u0e44\u0e0b\u0e15\u0e4c\u0e41\u0e25\u0e49\u0e27\u0e01\u0e47\u0e15\u0e32\u0e21",
                    " Since the smart contract is published Ethereum Blockchain, so participation in the project is possible only with this ETH digital currency. ": "\u0e40\u0e19\u0e37\u0e48\u0e2d\u0e07\u0e08\u0e32\u0e01\u0e2a\u0e31\u0e0d\u0e0d\u0e32\u0e2d\u0e31\u0e08\u0e09\u0e23\u0e34\u0e22\u0e30\u0e16\u0e39\u0e01\u0e40\u0e1c\u0e22\u0e41\u0e1e\u0e23\u0e48 Ethereum Blockchain \u0e14\u0e31\u0e07\u0e19\u0e31\u0e49\u0e19\u0e01\u0e32\u0e23\u0e40\u0e02\u0e49\u0e32\u0e23\u0e48\u0e27\u0e21\u0e43\u0e19\u0e42\u0e04\u0e23\u0e07\u0e01\u0e32\u0e23\u0e08\u0e36\u0e07\u0e40\u0e1b\u0e47\u0e19\u0e44\u0e1b\u0e44\u0e14\u0e49\u0e40\u0e09\u0e1e\u0e32\u0e30\u0e01\u0e31\u0e1a\u0e2a\u0e01\u0e38\u0e25\u0e40\u0e07\u0e34\u0e19\u0e14\u0e34\u0e08\u0e34\u0e17\u0e31\u0e25 ETH \u0e19\u0e35\u0e49",
                    " NO! The contract is programmed to not accumulate funds, but to serve only as a transmitter. The balance of the contract is always zero, anyone can verify this. It simply lacks the function of taking funds from your balance. Any transaction will reach the desired goal safe and sound. ": "NO! \u0e2a\u0e31\u0e0d\u0e0d\u0e32\u0e16\u0e39\u0e01\u0e15\u0e31\u0e49\u0e07\u0e42\u0e1b\u0e23\u0e41\u0e01\u0e23\u0e21\u0e44\u0e27\u0e49\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e44\u0e21\u0e48\u0e43\u0e2b\u0e49\u0e21\u0e35\u0e40\u0e07\u0e34\u0e19\u0e2a\u0e30\u0e2a\u0e21 \u0e41\u0e15\u0e48\u0e17\u0e33\u0e2b\u0e19\u0e49\u0e32\u0e17\u0e35\u0e48\u0e40\u0e1b\u0e47\u0e19\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e2a\u0e48\u0e07\u0e2a\u0e31\u0e0d\u0e0d\u0e32\u0e13\u0e40\u0e17\u0e48\u0e32\u0e19\u0e31\u0e49\u0e19 \u0e22\u0e2d\u0e14\u0e04\u0e07\u0e40\u0e2b\u0e25\u0e37\u0e2d\u0e02\u0e2d\u0e07\u0e2a\u0e31\u0e0d\u0e0d\u0e32\u0e08\u0e30\u0e40\u0e1b\u0e47\u0e19\u0e28\u0e39\u0e19\u0e22\u0e4c\u0e17\u0e38\u0e01\u0e04\u0e19\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e15\u0e23\u0e27\u0e08\u0e2a\u0e2d\u0e1a\u0e44\u0e14\u0e49 \u0e21\u0e31\u0e19\u0e02\u0e32\u0e14\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e43\u0e19\u0e01\u0e32\u0e23\u0e23\u0e31\u0e1a\u0e40\u0e07\u0e34\u0e19\u0e08\u0e32\u0e01\u0e22\u0e2d\u0e14\u0e40\u0e07\u0e34\u0e19\u0e04\u0e07\u0e40\u0e2b\u0e25\u0e37\u0e2d\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13 \u0e01\u0e32\u0e23\u0e17\u0e33\u0e18\u0e38\u0e23\u0e01\u0e23\u0e23\u0e21\u0e43\u0e14 \u0e46 \u0e08\u0e30\u0e1a\u0e23\u0e23\u0e25\u0e38\u0e40\u0e1b\u0e49\u0e32\u0e2b\u0e21\u0e32\u0e22\u0e17\u0e35\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e1b\u0e25\u0e2d\u0e14\u0e20\u0e31\u0e22\u0e41\u0e25\u0e30\u0e21\u0e35\u0e04\u0e38\u0e13\u0e20\u0e32\u0e1e",
                    " It is enough to have a computer or smartphone with Ethereum wallet. We also recommend installing Telegram instant messenger for the convenience of communication with other participants as well as official chats! ": "\u0e21\u0e31\u0e19\u0e40\u0e1e\u0e35\u0e22\u0e07\u0e1e\u0e2d\u0e17\u0e35\u0e48\u0e08\u0e30\u0e21\u0e35\u0e04\u0e2d\u0e21\u0e1e\u0e34\u0e27\u0e40\u0e15\u0e2d\u0e23\u0e4c\u0e2b\u0e23\u0e37\u0e2d\u0e2a\u0e21\u0e32\u0e23\u0e4c\u0e17\u0e42\u0e1f\u0e19\u0e17\u0e35\u0e48\u0e21\u0e35\u0e01\u0e23\u0e30\u0e40\u0e1b\u0e4b\u0e32\u0e40\u0e07\u0e34\u0e19 Ethereum \u0e40\u0e23\u0e32\u0e02\u0e2d\u0e41\u0e19\u0e30\u0e19\u0e33\u0e43\u0e2b\u0e49\u0e15\u0e34\u0e14\u0e15\u0e31\u0e49\u0e07\u0e42\u0e1b\u0e23\u0e41\u0e01\u0e23\u0e21\u0e2a\u0e48\u0e07\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21\u0e42\u0e15\u0e49\u0e15\u0e2d\u0e1a\u0e41\u0e1a\u0e1a\u0e17\u0e31\u0e19\u0e17\u0e35\u0e02\u0e2d\u0e07 Telegram \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e04\u0e27\u0e32\u0e21\u0e2a\u0e30\u0e14\u0e27\u0e01\u0e43\u0e19\u0e01\u0e32\u0e23\u0e15\u0e34\u0e14\u0e15\u0e48\u0e2d\u0e2a\u0e37\u0e48\u0e2d\u0e2a\u0e32\u0e23\u0e01\u0e31\u0e1a\u0e1c\u0e39\u0e49\u0e40\u0e02\u0e49\u0e32\u0e23\u0e48\u0e27\u0e21\u0e04\u0e19\u0e2d\u0e37\u0e48\u0e19 \u0e46 \u0e23\u0e27\u0e21\u0e16\u0e36\u0e07\u0e01\u0e32\u0e23\u0e41\u0e0a\u0e17\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e40\u0e1b\u0e47\u0e19\u0e17\u0e32\u0e07\u0e01\u0e32\u0e23!",
                    "What I need to Join OpenAlexa?": "\u0e09\u0e31\u0e19\u0e15\u0e49\u0e2d\u0e07\u0e40\u0e02\u0e49\u0e32\u0e23\u0e48\u0e27\u0e21 OpenAlexa \u0e2d\u0e22\u0e48\u0e32\u0e07\u0e44\u0e23",
                    "And if the project collapses, will I lose money?": "\u0e41\u0e25\u0e30\u0e16\u0e49\u0e32\u0e42\u0e04\u0e23\u0e07\u0e01\u0e32\u0e23\u0e25\u0e48\u0e21\u0e2a\u0e25\u0e32\u0e22\u0e09\u0e31\u0e19\u0e08\u0e30\u0e40\u0e2a\u0e35\u0e22\u0e40\u0e07\u0e34\u0e19\u0e2b\u0e23\u0e37\u0e2d\u0e44\u0e21\u0e48",
                    " In the cryptocurrency industry, there is no such thing as wallet blocking. This is technically impossible even by the creators of Ethereum. Created by you the ETH-wallet belongs only to you. ": "\u0e43\u0e19\u0e2d\u0e38\u0e15\u0e2a\u0e32\u0e2b\u0e01\u0e23\u0e23\u0e21 cryptocurrency \u0e44\u0e21\u0e48\u0e21\u0e35\u0e2a\u0e34\u0e48\u0e07\u0e40\u0e0a\u0e48\u0e19\u0e01\u0e32\u0e23\u0e1b\u0e34\u0e14\u0e01\u0e31\u0e49\u0e19\u0e01\u0e23\u0e30\u0e40\u0e1b\u0e4b\u0e32\u0e40\u0e07\u0e34\u0e19 \u0e40\u0e17\u0e04\u0e19\u0e34\u0e04\u0e19\u0e35\u0e49\u0e40\u0e1b\u0e47\u0e19\u0e44\u0e1b\u0e44\u0e21\u0e48\u0e44\u0e14\u0e49\u0e41\u0e21\u0e49\u0e42\u0e14\u0e22\u0e1c\u0e39\u0e49\u0e2a\u0e23\u0e49\u0e32\u0e07 Ethereum \u0e2a\u0e23\u0e49\u0e32\u0e07\u0e42\u0e14\u0e22\u0e04\u0e38\u0e13 ETH-wallet \u0e40\u0e1b\u0e47\u0e19\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13\u0e04\u0e19\u0e40\u0e14\u0e35\u0e22\u0e27",
                    "Are there any fees or charges in OpenAlexa?": "\u0e21\u0e35\u0e04\u0e48\u0e32\u0e18\u0e23\u0e23\u0e21\u0e40\u0e19\u0e35\u0e22\u0e21\u0e2b\u0e23\u0e37\u0e2d\u0e04\u0e48\u0e32\u0e43\u0e0a\u0e49\u0e08\u0e48\u0e32\u0e22\u0e43\u0e19 OpenAlexa \u0e2b\u0e23\u0e37\u0e2d\u0e44\u0e21\u0e48?",
                    "How can I be sure that my wallet will not be blocked?": "\u0e09\u0e31\u0e19\u0e08\u0e30\u0e41\u0e19\u0e48\u0e43\u0e08\u0e44\u0e14\u0e49\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e44\u0e23\u0e27\u0e48\u0e32\u0e01\u0e23\u0e30\u0e40\u0e1b\u0e4b\u0e32\u0e40\u0e07\u0e34\u0e19\u0e02\u0e2d\u0e07\u0e09\u0e31\u0e19\u0e08\u0e30\u0e44\u0e21\u0e48\u0e16\u0e39\u0e01\u0e1a\u0e25\u0e47\u0e2d\u0e01",
                    " While registering or upgrading the User need to pay only the amount mentioned for the Level. Then the profit is sent to the uplines after deducting the admin fees. The admin fees consist of 10% operations fees and 6% OAP Token development Fees. The OAP token is airdropped to your wallet automatically with each registration and upgrade transaction. ": "\u0e43\u0e19\u0e02\u0e13\u0e30\u0e17\u0e35\u0e48\u0e25\u0e07\u0e17\u0e30\u0e40\u0e1a\u0e35\u0e22\u0e19\u0e2b\u0e23\u0e37\u0e2d\u0e2d\u0e31\u0e1b\u0e40\u0e01\u0e23\u0e14\u0e1c\u0e39\u0e49\u0e43\u0e0a\u0e49\u0e08\u0e30\u0e15\u0e49\u0e2d\u0e07\u0e08\u0e48\u0e32\u0e22\u0e40\u0e09\u0e1e\u0e32\u0e30\u0e08\u0e33\u0e19\u0e27\u0e19\u0e40\u0e07\u0e34\u0e19\u0e17\u0e35\u0e48\u0e23\u0e30\u0e1a\u0e38\u0e44\u0e27\u0e49\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e23\u0e30\u0e14\u0e31\u0e1a \u0e08\u0e32\u0e01\u0e19\u0e31\u0e49\u0e19\u0e01\u0e33\u0e44\u0e23\u0e08\u0e30\u0e16\u0e39\u0e01\u0e2a\u0e48\u0e07\u0e44\u0e1b\u0e22\u0e31\u0e07\u0e2d\u0e31\u0e1e\u0e44\u0e25\u0e19\u0e4c\u0e2b\u0e25\u0e31\u0e07\u0e08\u0e32\u0e01\u0e2b\u0e31\u0e01\u0e04\u0e48\u0e32\u0e18\u0e23\u0e23\u0e21\u0e40\u0e19\u0e35\u0e22\u0e21\u0e01\u0e32\u0e23\u0e14\u0e39\u0e41\u0e25\u0e23\u0e30\u0e1a\u0e1a\u0e41\u0e25\u0e49\u0e27 \u0e04\u0e48\u0e32\u0e18\u0e23\u0e23\u0e21\u0e40\u0e19\u0e35\u0e22\u0e21\u0e1c\u0e39\u0e49\u0e14\u0e39\u0e41\u0e25\u0e23\u0e30\u0e1a\u0e1a\u0e1b\u0e23\u0e30\u0e01\u0e2d\u0e1a\u0e14\u0e49\u0e27\u0e22\u0e04\u0e48\u0e32\u0e18\u0e23\u0e23\u0e21\u0e40\u0e19\u0e35\u0e22\u0e21\u0e01\u0e32\u0e23\u0e14\u0e33\u0e40\u0e19\u0e34\u0e19\u0e07\u0e32\u0e19 10% \u0e41\u0e25\u0e30\u0e04\u0e48\u0e32\u0e18\u0e23\u0e23\u0e21\u0e40\u0e19\u0e35\u0e22\u0e21\u0e01\u0e32\u0e23\u0e1e\u0e31\u0e12\u0e19\u0e32\u0e42\u0e17\u0e40\u0e04\u0e47\u0e19 OAP 6% \u0e42\u0e17\u0e40\u0e04\u0e47\u0e19 OAP \u0e08\u0e30\u0e16\u0e39\u0e01 airdropped \u0e44\u0e1b\u0e22\u0e31\u0e07\u0e01\u0e23\u0e30\u0e40\u0e1b\u0e4b\u0e32\u0e40\u0e07\u0e34\u0e19\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13\u0e42\u0e14\u0e22\u0e2d\u0e31\u0e15\u0e42\u0e19\u0e21\u0e31\u0e15\u0e34\u0e14\u0e49\u0e27\u0e22\u0e01\u0e32\u0e23\u0e25\u0e07\u0e17\u0e30\u0e40\u0e1a\u0e35\u0e22\u0e19\u0e41\u0e15\u0e48\u0e25\u0e30\u0e04\u0e23\u0e31\u0e49\u0e07\u0e41\u0e25\u0e30\u0e01\u0e32\u0e23\u0e17\u0e33\u0e18\u0e38\u0e23\u0e01\u0e23\u0e23\u0e21\u0e01\u0e32\u0e23\u0e2d\u0e31\u0e1e\u0e40\u0e01\u0e23\u0e14",
                    "How to register in OpenAlexa?": "\u0e08\u0e30\u0e25\u0e07\u0e17\u0e30\u0e40\u0e1a\u0e35\u0e22\u0e19\u0e43\u0e19 OpenAlexa \u0e44\u0e14\u0e49\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e44\u0e23?",
                    "What are overflows?": "\u0e25\u0e49\u0e19\u0e04\u0e37\u0e2d\u0e2d\u0e30\u0e44\u0e23",
                    "Is it possible to earn passively?": "\u0e40\u0e1b\u0e47\u0e19\u0e44\u0e1b\u0e44\u0e14\u0e49\u0e17\u0e35\u0e48\u0e08\u0e30\u0e44\u0e14\u0e49\u0e23\u0e31\u0e1a\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e2d\u0e14\u0e17\u0e19?",
                    " To do registration, you simply need to make payment of the first level. To do this, Click on 'Register' and follow further instructions. After successful payment, you take a position in the structure and are considered a full member. ": "\u0e43\u0e19\u0e01\u0e32\u0e23\u0e25\u0e07\u0e17\u0e30\u0e40\u0e1a\u0e35\u0e22\u0e19\u0e04\u0e38\u0e13\u0e15\u0e49\u0e2d\u0e07\u0e17\u0e33\u0e01\u0e32\u0e23\u0e0a\u0e33\u0e23\u0e30\u0e43\u0e19\u0e23\u0e30\u0e14\u0e31\u0e1a\u0e41\u0e23\u0e01 \u0e43\u0e19\u0e01\u0e32\u0e23\u0e17\u0e33\u0e40\u0e0a\u0e48\u0e19\u0e19\u0e35\u0e49\u0e04\u0e25\u0e34\u0e01\u0e17\u0e35\u0e48 '\u0e25\u0e07\u0e17\u0e30\u0e40\u0e1a\u0e35\u0e22\u0e19' \u0e41\u0e25\u0e30\u0e1b\u0e0f\u0e34\u0e1a\u0e31\u0e15\u0e34\u0e15\u0e32\u0e21\u0e04\u0e33\u0e41\u0e19\u0e30\u0e19\u0e33\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e40\u0e15\u0e34\u0e21 \u0e2b\u0e25\u0e31\u0e07\u0e08\u0e32\u0e01\u0e0a\u0e33\u0e23\u0e30\u0e40\u0e07\u0e34\u0e19\u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08\u0e04\u0e38\u0e13\u0e40\u0e02\u0e49\u0e32\u0e14\u0e33\u0e23\u0e07\u0e15\u0e33\u0e41\u0e2b\u0e19\u0e48\u0e07\u0e43\u0e19\u0e42\u0e04\u0e23\u0e07\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e41\u0e25\u0e30\u0e44\u0e14\u0e49\u0e23\u0e31\u0e1a\u0e01\u0e32\u0e23\u0e1e\u0e34\u0e08\u0e32\u0e23\u0e13\u0e32\u0e27\u0e48\u0e32\u0e40\u0e1b\u0e47\u0e19\u0e2a\u0e21\u0e32\u0e0a\u0e34\u0e01\u0e40\u0e15\u0e47\u0e21\u0e23\u0e39\u0e1b\u0e41\u0e1a\u0e1a",
                    " In addition to personal invitations, partners can appear in your structure in two ways: These are \u201cOverflows\u201d and \u201cFree Partners\u201d. Therefore, it can be argued that the system has the possibility of passive earnings. But this does not guarantee you a quick decent income, which other successful participants who are active can receive. ": '\u0e19\u0e2d\u0e01\u0e40\u0e2b\u0e19\u0e37\u0e2d\u0e08\u0e32\u0e01\u0e04\u0e33\u0e40\u0e0a\u0e34\u0e0d\u0e2a\u0e48\u0e27\u0e19\u0e1a\u0e38\u0e04\u0e04\u0e25\u0e41\u0e25\u0e49\u0e27\u0e1e\u0e31\u0e19\u0e18\u0e21\u0e34\u0e15\u0e23\u0e22\u0e31\u0e07\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e1b\u0e23\u0e32\u0e01\u0e0f\u0e43\u0e19\u0e42\u0e04\u0e23\u0e07\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13\u0e44\u0e14\u0e49\u0e2a\u0e2d\u0e07\u0e27\u0e34\u0e18\u0e35: "\u0e25\u0e49\u0e19" \u0e41\u0e25\u0e30 "\u0e1e\u0e31\u0e19\u0e18\u0e21\u0e34\u0e15\u0e23\u0e1f\u0e23\u0e35" \u0e14\u0e31\u0e07\u0e19\u0e31\u0e49\u0e19\u0e08\u0e36\u0e07\u0e40\u0e1b\u0e47\u0e19\u0e17\u0e35\u0e48\u0e16\u0e01\u0e40\u0e16\u0e35\u0e22\u0e07\u0e01\u0e31\u0e19\u0e2d\u0e22\u0e39\u0e48\u0e27\u0e48\u0e32\u0e23\u0e30\u0e1a\u0e1a\u0e21\u0e35\u0e04\u0e27\u0e32\u0e21\u0e40\u0e1b\u0e47\u0e19\u0e44\u0e1b\u0e44\u0e14\u0e49\u0e02\u0e2d\u0e07\u0e23\u0e32\u0e22\u0e44\u0e14\u0e49\u0e41\u0e1a\u0e1a\u0e1e\u0e32\u0e2a\u0e0b\u0e35\u0e1f \u0e41\u0e15\u0e48\u0e2a\u0e34\u0e48\u0e07\u0e19\u0e35\u0e49\u0e44\u0e21\u0e48\u0e23\u0e31\u0e1a\u0e1b\u0e23\u0e30\u0e01\u0e31\u0e19\u0e27\u0e48\u0e32\u0e04\u0e38\u0e13\u0e08\u0e30\u0e44\u0e14\u0e49\u0e23\u0e31\u0e1a\u0e23\u0e32\u0e22\u0e44\u0e14\u0e49\u0e17\u0e35\u0e48\u0e23\u0e27\u0e14\u0e40\u0e23\u0e47\u0e27\u0e0b\u0e36\u0e48\u0e07\u0e1c\u0e39\u0e49\u0e40\u0e02\u0e49\u0e32\u0e23\u0e48\u0e27\u0e21\u0e17\u0e35\u0e48\u0e1b\u0e23\u0e30\u0e2a\u0e1a\u0e04\u0e27\u0e32\u0e21\u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08\u0e04\u0e19\u0e2d\u0e37\u0e48\u0e19 \u0e46',
                    " Overflow is a process that occurs when a participant registers for an upline, in which the first level is filled by two participants. The next new member falls into the structure of this upline below, in the nearest free place. ": "\u0e42\u0e2d\u0e40\u0e27\u0e2d\u0e23\u0e4c\u0e42\u0e1f\u0e25\u0e27\u0e4c\u0e40\u0e1b\u0e47\u0e19\u0e01\u0e23\u0e30\u0e1a\u0e27\u0e19\u0e01\u0e32\u0e23\u0e17\u0e35\u0e48\u0e40\u0e01\u0e34\u0e14\u0e02\u0e36\u0e49\u0e19\u0e40\u0e21\u0e37\u0e48\u0e2d\u0e1c\u0e39\u0e49\u0e40\u0e02\u0e49\u0e32\u0e23\u0e48\u0e27\u0e21\u0e25\u0e07\u0e17\u0e30\u0e40\u0e1a\u0e35\u0e22\u0e19\u0e2d\u0e31\u0e1e\u0e44\u0e25\u0e19\u0e4c\u0e0b\u0e36\u0e48\u0e07\u0e23\u0e30\u0e14\u0e31\u0e1a\u0e41\u0e23\u0e01\u0e40\u0e15\u0e47\u0e21\u0e44\u0e1b\u0e14\u0e49\u0e27\u0e22\u0e1c\u0e39\u0e49\u0e40\u0e02\u0e49\u0e32\u0e23\u0e48\u0e27\u0e21\u0e2a\u0e2d\u0e07\u0e04\u0e19 \u0e2a\u0e21\u0e32\u0e0a\u0e34\u0e01\u0e43\u0e2b\u0e21\u0e48\u0e23\u0e32\u0e22\u0e15\u0e48\u0e2d\u0e44\u0e1b\u0e15\u0e01\u0e2d\u0e22\u0e39\u0e48\u0e43\u0e19\u0e42\u0e04\u0e23\u0e07\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e02\u0e2d\u0e07\u0e2d\u0e31\u0e1e\u0e44\u0e25\u0e19\u0e4c\u0e14\u0e49\u0e32\u0e19\u0e25\u0e48\u0e32\u0e07\u0e19\u0e35\u0e49\u0e43\u0e19\u0e1e\u0e37\u0e49\u0e19\u0e17\u0e35\u0e48\u0e27\u0e48\u0e32\u0e07\u0e17\u0e35\u0e48\u0e43\u0e01\u0e25\u0e49\u0e17\u0e35\u0e48\u0e2a\u0e38\u0e14",
                    "How to add funds to my ETH wallet?": "\u0e08\u0e30\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e40\u0e07\u0e34\u0e19\u0e43\u0e19\u0e01\u0e23\u0e30\u0e40\u0e1b\u0e4b\u0e32\u0e40\u0e07\u0e34\u0e19 ETH \u0e02\u0e2d\u0e07\u0e09\u0e31\u0e19\u0e44\u0e14\u0e49\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e44\u0e23?",
                    "Can I register without an referral link?": "\u0e09\u0e31\u0e19\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e25\u0e07\u0e17\u0e30\u0e40\u0e1a\u0e35\u0e22\u0e19\u0e42\u0e14\u0e22\u0e44\u0e21\u0e48\u0e21\u0e35\u0e25\u0e34\u0e07\u0e04\u0e4c\u0e1c\u0e39\u0e49\u0e2d\u0e49\u0e32\u0e07\u0e2d\u0e34\u0e07\u0e44\u0e14\u0e49\u0e2b\u0e23\u0e37\u0e2d\u0e44\u0e21\u0e48",
                    " Yes, such members are called \u201cfree partners.\u201d These are participants who came for any reason WITHOUT an affiliate link. Free partners are distributed evenly across the System (from left to right), starting from those uplines that were previously registered. ": '\u0e43\u0e0a\u0e48\u0e2a\u0e21\u0e32\u0e0a\u0e34\u0e01\u0e14\u0e31\u0e07\u0e01\u0e25\u0e48\u0e32\u0e27\u0e16\u0e39\u0e01\u0e40\u0e23\u0e35\u0e22\u0e01\u0e27\u0e48\u0e32 "\u0e2b\u0e38\u0e49\u0e19\u0e2a\u0e48\u0e27\u0e19\u0e1f\u0e23\u0e35" \u0e40\u0e2b\u0e25\u0e48\u0e32\u0e19\u0e35\u0e49\u0e04\u0e37\u0e2d\u0e1c\u0e39\u0e49\u0e40\u0e02\u0e49\u0e32\u0e23\u0e48\u0e27\u0e21\u0e17\u0e35\u0e48\u0e21\u0e32\u0e14\u0e49\u0e27\u0e22\u0e40\u0e2b\u0e15\u0e38\u0e1c\u0e25\u0e43\u0e14\u0e01\u0e47\u0e15\u0e32\u0e21\u0e42\u0e14\u0e22\u0e44\u0e21\u0e48\u0e21\u0e35\u0e25\u0e34\u0e07\u0e04\u0e4c\u0e1e\u0e31\u0e19\u0e18\u0e21\u0e34\u0e15\u0e23 \u0e1e\u0e31\u0e19\u0e18\u0e21\u0e34\u0e15\u0e23\u0e1f\u0e23\u0e35\u0e21\u0e35\u0e01\u0e32\u0e23\u0e01\u0e23\u0e30\u0e08\u0e32\u0e22\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e40\u0e17\u0e48\u0e32\u0e40\u0e17\u0e35\u0e22\u0e21\u0e01\u0e31\u0e19\u0e17\u0e31\u0e48\u0e27\u0e17\u0e31\u0e49\u0e07\u0e23\u0e30\u0e1a\u0e1a (\u0e08\u0e32\u0e01\u0e0b\u0e49\u0e32\u0e22\u0e44\u0e1b\u0e02\u0e27\u0e32) \u0e40\u0e23\u0e34\u0e48\u0e21\u0e15\u0e49\u0e19\u0e08\u0e32\u0e01 upline \u0e17\u0e35\u0e48\u0e25\u0e07\u0e17\u0e30\u0e40\u0e1a\u0e35\u0e22\u0e19\u0e01\u0e48\u0e2d\u0e19\u0e2b\u0e19\u0e49\u0e32\u0e19\u0e35\u0e49',
                    " There are many exchangers. Reliable and proven exchangers can be found on the Google. If this is your first time making an exchange, follow these instructions: ": "\u0e21\u0e35\u0e01\u0e32\u0e23\u0e41\u0e25\u0e01\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e21\u0e32\u0e01\u0e21\u0e32\u0e22 \u0e1c\u0e39\u0e49\u0e41\u0e25\u0e01\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e17\u0e35\u0e48\u0e40\u0e0a\u0e37\u0e48\u0e2d\u0e16\u0e37\u0e2d\u0e44\u0e14\u0e49\u0e41\u0e25\u0e30\u0e1c\u0e48\u0e32\u0e19\u0e01\u0e32\u0e23\u0e1e\u0e34\u0e2a\u0e39\u0e08\u0e19\u0e4c\u0e41\u0e25\u0e49\u0e27\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e1e\u0e1a\u0e44\u0e14\u0e49\u0e43\u0e19 Google \u0e2b\u0e32\u0e01\u0e19\u0e35\u0e48\u0e40\u0e1b\u0e47\u0e19\u0e04\u0e23\u0e31\u0e49\u0e07\u0e41\u0e23\u0e01\u0e17\u0e35\u0e48\u0e04\u0e38\u0e13\u0e41\u0e25\u0e01\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e43\u0e2b\u0e49\u0e17\u0e33\u0e15\u0e32\u0e21\u0e04\u0e33\u0e41\u0e19\u0e30\u0e19\u0e33\u0e40\u0e2b\u0e25\u0e48\u0e32\u0e19\u0e35\u0e49:",
                    " Levels are bought only sequentially and in order. If you try to buy the 4 level without the 3 level, the smart contract will not process such a transfer. Money will not go anywhere and will remain with you. ": "\u0e23\u0e30\u0e14\u0e31\u0e1a\u0e0b\u0e37\u0e49\u0e2d\u0e15\u0e32\u0e21\u0e25\u0e33\u0e14\u0e31\u0e1a\u0e40\u0e17\u0e48\u0e32\u0e19\u0e31\u0e49\u0e19\u0e41\u0e25\u0e30\u0e15\u0e32\u0e21\u0e25\u0e33\u0e14\u0e31\u0e1a \u0e2b\u0e32\u0e01\u0e04\u0e38\u0e13\u0e1e\u0e22\u0e32\u0e22\u0e32\u0e21\u0e0b\u0e37\u0e49\u0e2d 4 \u0e23\u0e30\u0e14\u0e31\u0e1a\u0e42\u0e14\u0e22\u0e44\u0e21\u0e48\u0e21\u0e35\u0e23\u0e30\u0e14\u0e31\u0e1a 3 \u0e2a\u0e31\u0e0d\u0e0d\u0e32\u0e2d\u0e31\u0e08\u0e09\u0e23\u0e34\u0e22\u0e30\u0e08\u0e30\u0e44\u0e21\u0e48\u0e1b\u0e23\u0e30\u0e21\u0e27\u0e25\u0e1c\u0e25\u0e01\u0e32\u0e23\u0e42\u0e2d\u0e19\u0e14\u0e31\u0e07\u0e01\u0e25\u0e48\u0e32\u0e27 \u0e40\u0e07\u0e34\u0e19\u0e08\u0e30\u0e44\u0e21\u0e48\u0e44\u0e1b\u0e44\u0e2b\u0e19\u0e41\u0e25\u0e30\u0e08\u0e30\u0e2d\u0e22\u0e39\u0e48\u0e01\u0e31\u0e1a\u0e04\u0e38\u0e13",
                    "What are Levels?": "\u0e23\u0e30\u0e14\u0e31\u0e1a\u0e04\u0e37\u0e2d\u0e2d\u0e30\u0e44\u0e23",
                    " Level is a status that gives the right to receive remuneration from a partner in its structure of the relevant lines. ": "\u0e23\u0e30\u0e14\u0e31\u0e1a\u0e04\u0e37\u0e2d\u0e2a\u0e16\u0e32\u0e19\u0e30\u0e17\u0e35\u0e48\u0e43\u0e2b\u0e49\u0e2a\u0e34\u0e17\u0e18\u0e34\u0e4c\u0e43\u0e19\u0e01\u0e32\u0e23\u0e23\u0e31\u0e1a\u0e04\u0e48\u0e32\u0e15\u0e2d\u0e1a\u0e41\u0e17\u0e19\u0e08\u0e32\u0e01\u0e04\u0e39\u0e48\u0e04\u0e49\u0e32\u0e43\u0e19\u0e42\u0e04\u0e23\u0e07\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e02\u0e2d\u0e07\u0e2a\u0e32\u0e22\u0e07\u0e32\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07",
                    "What happens if my partner buys a level before me?": "\u0e08\u0e30\u0e40\u0e01\u0e34\u0e14\u0e2d\u0e30\u0e44\u0e23\u0e02\u0e36\u0e49\u0e19\u0e2b\u0e32\u0e01\u0e1e\u0e31\u0e19\u0e18\u0e21\u0e34\u0e15\u0e23\u0e02\u0e2d\u0e07\u0e09\u0e31\u0e19\u0e0b\u0e37\u0e49\u0e2d\u0e23\u0e30\u0e14\u0e31\u0e1a\u0e01\u0e48\u0e2d\u0e19\u0e09\u0e31\u0e19",
                    "Why do I need to renew levels every 60 days?": "\u0e17\u0e33\u0e44\u0e21\u0e09\u0e31\u0e19\u0e15\u0e49\u0e2d\u0e07\u0e15\u0e48\u0e2d\u0e2d\u0e32\u0e22\u0e38\u0e23\u0e30\u0e14\u0e31\u0e1a\u0e17\u0e38\u0e01 \u0e46 60 \u0e27\u0e31\u0e19?",
                    "If I have an 2 level, can I immediately buy the 4 level without having the 3 level?": "\u0e2b\u0e32\u0e01\u0e09\u0e31\u0e19\u0e21\u0e35 2 \u0e23\u0e30\u0e14\u0e31\u0e1a\u0e09\u0e31\u0e19\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e0b\u0e37\u0e49\u0e2d 4 \u0e23\u0e30\u0e14\u0e31\u0e1a\u0e17\u0e31\u0e19\u0e17\u0e35\u0e42\u0e14\u0e22\u0e44\u0e21\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e21\u0e35 3 \u0e23\u0e30\u0e14\u0e31\u0e1a\u0e44\u0e14\u0e49\u0e2b\u0e23\u0e37\u0e2d\u0e44\u0e21\u0e48",
                    " The money will be redirected to your upline of the same line as your partner. If you buy levels on time, this will not happen. If this happened, it\u2019s not scary. If you find this in time, then after activating the level, continue to receive the remaining transfers for this level. ": "\u0e40\u0e07\u0e34\u0e19\u0e08\u0e30\u0e16\u0e39\u0e01\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e40\u0e2a\u0e49\u0e19\u0e17\u0e32\u0e07\u0e44\u0e1b\u0e22\u0e31\u0e07\u0e2d\u0e31\u0e1e\u0e44\u0e25\u0e19\u0e4c\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13\u0e43\u0e19\u0e1a\u0e23\u0e23\u0e17\u0e31\u0e14\u0e40\u0e14\u0e35\u0e22\u0e27\u0e01\u0e31\u0e19\u0e01\u0e31\u0e1a\u0e04\u0e39\u0e48\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13 \u0e2b\u0e32\u0e01\u0e04\u0e38\u0e13\u0e0b\u0e37\u0e49\u0e2d\u0e23\u0e30\u0e14\u0e31\u0e1a\u0e15\u0e23\u0e07\u0e40\u0e27\u0e25\u0e32\u0e2a\u0e34\u0e48\u0e07\u0e19\u0e35\u0e49\u0e08\u0e30\u0e44\u0e21\u0e48\u0e40\u0e01\u0e34\u0e14\u0e02\u0e36\u0e49\u0e19 \u0e2b\u0e32\u0e01\u0e2a\u0e34\u0e48\u0e07\u0e19\u0e35\u0e49\u0e40\u0e01\u0e34\u0e14\u0e02\u0e36\u0e49\u0e19\u0e21\u0e31\u0e19\u0e44\u0e21\u0e48\u0e19\u0e48\u0e32\u0e01\u0e25\u0e31\u0e27 \u0e2b\u0e32\u0e01\u0e04\u0e38\u0e13\u0e1e\u0e1a\u0e2a\u0e34\u0e48\u0e07\u0e19\u0e35\u0e49\u0e17\u0e31\u0e19\u0e40\u0e27\u0e25\u0e32\u0e2b\u0e25\u0e31\u0e07\u0e08\u0e32\u0e01\u0e40\u0e1b\u0e34\u0e14\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19\u0e23\u0e30\u0e14\u0e31\u0e1a\u0e41\u0e25\u0e49\u0e27\u0e43\u0e2b\u0e49\u0e14\u0e33\u0e40\u0e19\u0e34\u0e19\u0e01\u0e32\u0e23\u0e15\u0e48\u0e2d\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e23\u0e31\u0e1a\u0e01\u0e32\u0e23\u0e16\u0e48\u0e32\u0e22\u0e42\u0e2d\u0e19\u0e17\u0e35\u0e48\u0e40\u0e2b\u0e25\u0e37\u0e2d\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e23\u0e30\u0e14\u0e31\u0e1a\u0e19\u0e35\u0e49",
                    " Thanks to this rule, your profit will be repeated every 60 days, since after your extension the partners in your structure will do the same. ": "\u0e15\u0e49\u0e2d\u0e07\u0e02\u0e2d\u0e1a\u0e04\u0e38\u0e13\u0e01\u0e0e\u0e19\u0e35\u0e49\u0e01\u0e33\u0e44\u0e23\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13\u0e08\u0e30\u0e16\u0e39\u0e01\u0e17\u0e33\u0e0b\u0e49\u0e33\u0e17\u0e38\u0e01 \u0e46 60 \u0e27\u0e31\u0e19\u0e40\u0e19\u0e37\u0e48\u0e2d\u0e07\u0e08\u0e32\u0e01\u0e2b\u0e25\u0e31\u0e07\u0e08\u0e32\u0e01\u0e17\u0e35\u0e48\u0e04\u0e38\u0e13\u0e02\u0e22\u0e32\u0e22\u0e1e\u0e31\u0e19\u0e18\u0e21\u0e34\u0e15\u0e23\u0e43\u0e19\u0e42\u0e04\u0e23\u0e07\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13\u0e08\u0e30\u0e17\u0e33\u0e40\u0e0a\u0e48\u0e19\u0e40\u0e14\u0e35\u0e22\u0e27\u0e01\u0e31\u0e19",
                    " Your account remains in the System forever, and at any time you can extend the levels and continue to receive income. ": "\u0e1a\u0e31\u0e0d\u0e0a\u0e35\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13\u0e22\u0e31\u0e07\u0e04\u0e07\u0e2d\u0e22\u0e39\u0e48\u0e43\u0e19\u0e23\u0e30\u0e1a\u0e1a\u0e15\u0e25\u0e2d\u0e14\u0e44\u0e1b\u0e41\u0e25\u0e30\u0e40\u0e21\u0e37\u0e48\u0e2d\u0e43\u0e14\u0e01\u0e47\u0e15\u0e32\u0e21\u0e17\u0e35\u0e48\u0e04\u0e38\u0e13\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e02\u0e22\u0e32\u0e22\u0e23\u0e30\u0e14\u0e31\u0e1a\u0e41\u0e25\u0e30\u0e23\u0e31\u0e1a\u0e23\u0e32\u0e22\u0e44\u0e14\u0e49\u0e15\u0e48\u0e2d\u0e44\u0e1b",
                    "What will happen if you do not extend the level and it is deactivated?": "\u0e08\u0e30\u0e40\u0e01\u0e34\u0e14\u0e2d\u0e30\u0e44\u0e23\u0e02\u0e36\u0e49\u0e19\u0e2b\u0e32\u0e01\u0e04\u0e38\u0e13\u0e44\u0e21\u0e48\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e23\u0e30\u0e14\u0e31\u0e1a\u0e41\u0e25\u0e30\u0e21\u0e31\u0e19\u0e16\u0e39\u0e01\u0e1b\u0e34\u0e14\u0e01\u0e32\u0e23\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19?"
                }
            }), {
                "en-tl": {
                    "The most advanced way to invest in blockchain technology": "Ang pinaka advance na paraan upang mamuhunan sa teknolohiya ng blockchain",
                    "Copyright @ Open": "Copyright @ Open",
                    Thai: "Thai",
                    Filipino: "Filipino (Language) Pilipino (People)",
                    "SIGN UP": "SIGN-UP",
                    "Unison pool is live!": "Live na po ang Unison Pool!",
                    Italian: "Italyano",
                    "welcome!": "Tuloy po kayo!",
                    English: "Ingles",
                    Spanish: "Espanyol",
                    Korean: "Koreano",
                    FOLLOW: "Follow us",
                    "Log in": "Mag Log-In",
                    "Automatically login if you have following wallets:": "Awtomatikong mag-login gamit ang mga sumusunod na wallet:",
                    "ENTER MANUALLY (PREVIEW MODE)": "Manual na pagpasok  (PREVIEW MODE)",
                    Russian: "Russian",
                    "Hello,": "Kamusta,",
                    "Login Automatically": "Awtomatikong Mag-login",
                    "Smart Contract Address": "Address ng Smart Contract",
                    Alexa: "Alexa",
                    OR: "OR",
                    Dashboard: "Dashboard",
                    "Lost Profits": "Mga nawalang kita",
                    "Unison Pool": "Unison Pool",
                    Partners: "Mga kasosyo",
                    "Control Panel": "Control Panel",
                    FAQ: "FAQ",
                    Uplines: "Mga Uplines",
                    Promo: "Promo",
                    Logout: "Logout",
                    "Welcome to": "Welcome po sa ",
                    Open: "Buksan",
                    dollar: "dolyar",
                    euro: "euro",
                    "ETH WALLET": "ETH WALLET",
                    ID: "ID",
                    "Earned Ethereum": "Kinitang Ethereum",
                    Upgrade: "Mag-upgrade",
                    "Earned Money": "Kinitang Pera",
                    "Total Partners/ 24hrs": "bilang ng mga Kasosyo / 24hrs",
                    Level: "Level",
                    "Earning ETH Level": "kinitang ETH Level",
                    "No Data": "Walang Data",
                    "Growth of Structure": "Paglago ng Istraktura",
                    "New Users": "Bagong Myembro",
                    "New Here?": "Baguhan?",
                    "My Partners": "Mga Kasosyo Ko",
                    "Pool Dashboard": "Pool Dashboard",
                    "Pool Earning Meter": "Pool Earning Meter",
                    "Created with Highcharts 8.1.0": "Nilikha gamit ang Highcharts 8.1.0",
                    "Total Income": "Kabuoang Kita",
                    "Your levels": "Ang iyong level",
                    "%": "%",
                    "My Directs": "Mga directs",
                    "Copyright \xa9OpenAlexa 2020. All rights reserved": "Copyright \xa9OpenAlexa 2020. All rights reserved",
                    "Smart Contract": "Smart Contract",
                    "Expires in 98 days": "Nag-expire pagkatapos ng 98 days",
                    "Level 1": "Level 1",
                    "Extend For 60 days": "Mag extend ng 60days",
                    "Eth Profit": "Mga kinitang ETH",
                    "Pool 3": "Pool 3",
                    "Pool 7": "Pool 7",
                    "Pool 4": "Pool 4",
                    "Pool 5": "Pool 5",
                    "Pool 6": "Pool 6",
                    "Pool 8": "Pool 8",
                    "Pool 2": "Pool 2",
                    "Pool 1": "Pool 1",
                    "Line 4": "Linya 4",
                    "Line 9": "Linya 9",
                    "Line 6": "Linya 6",
                    "Line 3": "Linya 3",
                    Find: "Maghanap",
                    "Line 2": "Linya 2",
                    "Total Partners": "Kabuoang bilang Kasosyo",
                    "Your Affiliate Link": "Ang iyong Affiliate Link",
                    "Line 5": "Linya 5",
                    "Toggle Tree (expand/collapse)": "I-togle Tree (palawakin / pagbagsak)",
                    Copy: "Kopya",
                    "Line 7": "Linya 7",
                    "Line 8": "Linya 8",
                    "Copy your link": "Kopyahin ang iyong link",
                    Address: "Address",
                    "Line 1": "Linya 1",
                    Id: "Id",
                    "ID:0": "ID: 0",
                    "Level 2": "Level 2",
                    "Level 4": "Level 4",
                    "Level 3": "Level 3",
                    "Level 6": "Level 6",
                    "Level 5": "Level 5",
                    "ID :1623": "ID: 1623",
                    "ID :3861": "ID: 3861",
                    "ID :1684": "ID: 1684",
                    "ID :8378": "ID: 8378",
                    "ID :2298": "ID: 2298",
                    "ID :6489": "ID: 6489",
                    "ID :4447": "ID: 4447",
                    "ID :8410": "ID: 8410",
                    "ID :8434": "ID: 8434",
                    "ID :8426": "ID: 8426",
                    "ID :17940": "ID: 17940",
                    "ID :8443": "ID: 8443",
                    Line: "Linya",
                    "Eth Wallet": "Eth Wallet",
                    "Lost Profit Total : 0 ETH": "Total na Nawalang Kita: 0 ETH",
                    Amount: "Halaga",
                    "S.No": "S.No",
                    "Priority Counter": "Priority Counter",
                    "My Sponsor": "Sponsor ko",
                    "My Directs : 0": "Mga directs ko: 0",
                    "Pool / Direct Income": "Kinita galing sa Directs",
                    "Increase in priority will help you to claim your reward early.": "Ang pagtaas ng Priority Counter ay makakatulong sa iyo na makuha nang maaga ang iyong rewards",
                    "Join Pool": "Sumali sa Pool",
                    "My Unison Pools": "Ang Aking Unison Pools",
                    "Yield Booster": "Yield Booster",
                    Transactions: "Mga Transaksyon",
                    Pool: "Pool",
                    Date: "Petsa",
                    "Amount(ETH)": "Halaga (ETH)",
                    Sponsor: "Sponsor",
                    Receiver: "Tagatanggap",
                    Active: "Aktibo",
                    Text: "Teksto",
                    "Promotional Materials": "Pang-promosyon na Materyales",
                    Presentation: "Presentation",
                    Banner: "Banner",
                    "Offline Income Pattern": "Pattern ng Offline na Kita",
                    "Download Presentation": "E-download ang Presentation",
                    Video: "Video",
                    "OpenAlexa - Trust Wallet": "OpenAlexa - Trust Wallet",
                    "OpenAlexa - Security Advisory": "OpenAlexa -  Payung seguridad",
                    "What is a Smart Contract?": "Ano ang isang Smart Contract?",
                    "Text advertising for posts and newsletters": "Text advertising para sa mga post at newsletter",
                    "Example 2. You ordered a product through an online store. Payment for the goods is recorded on the blockchain, and only after confirmation by the courier that the goods have been delivered, the money goes to the owner.": "Halimbawa 2. Nag-order ka ng isang produkto sa pamamagitan ng isang online store. Ang pagbabayad para sa mga paninda ay naitala sa blockchain, at pagkatapos lamang kumpirmahin ng courier na nakuha na ang order, saka pa lamang makukuha ang bayad.",
                    "Example 1. You and a friend bet on the outcome of a football match. You make bets in the blockchain in the form of transactions, which are stored there until the end of the game. When the match ends, the smart contract automatically checks its outcome on one of the sports sites and transfers all the money to the winner.": "Halimbawa 1. Ikaw at ang isang kaibigan ay tumaya sa kinalabasan ng isang tugma ng football. Gumagawa ka ng taya sa blockchain sa anyo ng mga transaksyon, na naka-imbak doon hanggang sa pagtatapos ng laro. Kapag natapos ang tugma, awtomatikong sinusuri ng matalinong kontrata ang kinalabasan nito sa isa sa mga site ng palakasan at inililipat ang lahat ng pera sa nagwagi.",
                    "A smart contract is a computer algorithm that controls the completion of a transaction. It is entered into the blockchain and remembered forever. The conditions are the same for everyone and cannot be changed or deleted by anyone. A smart contract makes financial transactions automatically, without human intervention, according to conditions written in advance.": "Ang Smart Contract ay isang computer algorithm na nag ko-kontrol sa mga transaksyon at pinapatakbo ng Ethereum blockchain. Ang mga kondisyon ay pareho para sa lahat. Walang sino man ang pweding mag manipula or magpa shutdown ng system.  Walang taong nagpapatakbo sa smart contract dahil awtomatiko itong gumagawa ng mga transaksyong pinansyal na naayon sa mga kondition nito.",
                    "A verified smart contract will work as long as the Ethereum blockchain exists.": "Ang verified na smart contract ay gagana hanggat nag e-exist ang Ethereum blockchain",
                    "Nobody will deceive anyone, everyone sees the code of the smart contract and understands that it works exactly as it is written in it. A smart contract is not a person, it will not lie and will not hide with money.": "Walang pweding manloko dito dahil open source ang smart contract at nakikita lahat ang code nito. Gagana ito kung ano ang naka programa sa code niya.",
                    "Data is encrypted and distributed on the blockchain and duplicated many times, it cannot be changed or deleted.": "Ang data ay naka-encrypt at ipinamahagi sa blockchain. Hindi ito mababago o matanggal.",
                    "OpenAlexa Smart contract is the best that mankind could come up with in recent years.": "Ang OpenAlexa Smart ay isang smart contract",
                    "OpenAlexa Smart Contract : SCAM IMPOSSIBLE": "OpenAlexa Smart Contract: SCAM IMPOSSIBLE",
                    "#openalexa #smartcontract #ethereum #bitcoin #crypto #blockchain #money. # crypto #cryptocurrency #earningonline #btc #eth #investing #finance #profit #wagering #earnings #risklesswork #sales #marketing": "#openalexa #smartcontract #ethereum #bitcoin #crypto #blockchain #money # crypto #cryptocurrency #earningonline #btc #eth #investing #finance #profit #wagering #earnings #risklesswork #sales #marketing",
                    "Payments are made from wallet to participant\u2019s wallet": "Ang bayad ay wallet to wallet (peer to peer) sa lahat ng members",
                    "It is impossible to steal money": "Imposibleng magnakaw ng pera",
                    "If you close the site, the smart contract will still work": "Kung isasara mo ang site, gagana parin ang smart contract",
                    "Locking and breaking a wallet is not possible": "Hindi locked ang wallet mo dito. Ikaw ang may control ng kita mo.",
                    "Unable to exclude your account from the structure": "Hindi na pwedeng ma edit or mahiwalay ang iyong account sa istraktura",
                    "For the first time such a simple and convenient marketing. Binary matrix 6 lines - 128 people in a team are enough to go through two cycles and earn 4000+ ETH": "Sa unang pagkakataon tulad ng isang simple at madaling marketing. Binary matrix 6 lines - 128 ka tao sa isang team ay sapat na upang dumaan sa dalawang cycle at kumita ng 4000+ ETH",
                    "OpenAlexa - Risk-free way of Earning ETH": "OpenAlexa \u2013 Risk-free na paraan upang kumita ng ETH",
                    "THE FASTEST AND SIMPLE SMART CONTRACT": "ANG PINAKAMABILIS AT SIMPLE NA SMART CONTRACT",
                    "Accessible to everyone. Entrance fee - 0.03 ETH only.": "Pwede ito sa lahat. Bayad sa pagpasok sa program - 0.03 ETH lamang.",
                    "The project has no owner, all conditions are unchanged": "Ang proyekto ay walang may-ari, ang lahat ng mga kondisyon ay hindi nababago?",
                    "The repetition frequency of 60 days. Income can be repeated every 60 days with a ready-made team, earn 4000+ ETH every two months": "Ang repetition frequency na 60 days. Ang kita ay maaaring maulit tuwing 60 days sa isang ready-made na team, pwedeng kumita ng 4000+ ETH bawat dalawang buwan",
                    View: "Tingnan",
                    "OpenAlexa - Use with MetaMask": "OpenAlexa -Gamit ang Metamask",
                    "OpenAlexa Explainer Video - EN": "Video na nagpapaliwanang kung ano ang OpenAlexa - EN",
                    FAQs: "Mga FAQ",
                    "What is OpenAlexa?": "Ano ang OpenAlexa?",
                    "OpenAlexa can be divided into 2 concepts: First - Is a smart contract or application running on a cryptocurrency network Ethereum. The application code is programmed to distribute incoming transfers among participants according to a specific algorithm. Second - Is the site itself, providing an interface for the convenience of working with a smart contract.": "Ang OpenAlexa ay nahahati sa dalawang konsepto: Una - Ay isang smart contract o application na tumatakbo sa isang cryptocurrency network Ethereum. Pangalawa - Ay ang site mismo, na nagbibigay ng isang interface para madali ang pagtatrabaho sa isang smart contract.",
                    "What is mode of payment in OpenAlexa?": "Ano ang mode ng pagbabayad sa OpenAlexa?",
                    "Who is the Project Administrator?": "Sino ang Project Administrator?",
                    "In a project like OpenAlexa there is no administrator. There is a creator who uploaded the contract code to the cryptocurrency blockchain Ethereum. After that, the smart contract has been part of the overall network, which is supported by miners. No one has the right to affect the operation of a smart contract, delete it or stop it. Any attempt to make unauthorised changes will be rejected due to inconsistency with previous copies in the block chain.": "Sa isang proyekto tulad ng OpenAlexa ay walang administrator. May isang tagalikha na nag-upload ng code ng kontrata sa Ethereum blockchain. Pagkatapos nito, ang smart contract ay bahagi na ng pangkalahatang network, na sinusuportahan ng mga miners. Walang sinuman ang may karapatang makaapekto sa pagpapatakbo ng isang smart contract. Walang kayang mag pashutdown or magpatigil nito. Ang anumang pagtatangka na gumawa ng hindi awtorisadong pagbabago ay tatanggihan ang system.",
                    "Can a transaction remain on the balance of a smart contract?": "Maaari bang manatili ang isang transaksyon sa balanse ng isang smart contract?",
                    "Since the smart contract is published Ethereum Blockchain, so participation in the project is possible only with this ETH digital currency.": "Dahil ang smart contract ay nai-published sa Ethereum Blockchain, ang pagsali sa proyekto ay posible lamang sa ETH digital currency.",
                    "And if the project collapses, will I lose money?": "At kung ang proyekto ay gumuho, mawawalan ba ako ng pera?",
                    "How can I be sure that my wallet will not be blocked?": "Paano ako makakasiguro na ang aking wallet ay hindi pweding e blocked?",
                    "What I need to Join OpenAlexa?": "Ano ang kailangan para sumali sa OpenAlexa?",
                    "NO! The contract is programmed to not accumulate funds, but to serve only as a transmitter. The balance of the contract is always zero, anyone can verify this. It simply lacks the function of taking funds from your balance. Any transaction will reach the desired goal safe and sound.": "HINDI! Ang smart contract ay na-program upang hindi makaipon ng mga pondo, ngunit maglingkod lamang bilang isang transmiter. Ang balanse ng smart contract ay palaging zero. Wala itong programa na pweding makuha ang iyong pondo mula sa iyong balanse. Ang anumang transaksyon ay ligtas at makakarating ng maayos.",
                    "Again NO! The smart contract is absolutely transparent, all data is recorded in the blockchain chain. No scam or fraud. The project cannot fail. It will work as long as the blockchain exists, even if the site is closed.": "Uulitin ko, HINDI! Ang SMART CONTRACT ay ganap na transparent, lahat ng data ay naitala sa blockchain. Walang scam o pandaraya. Hindi mabibigo ang proyekto. Ito ay gagana hangga't umiiral ang blockchain, kahit na ang site ay sarado.",
                    "It is enough to have a computer or smartphone with Ethereum wallet. We also recommend installing Telegram instant messenger for the convenience of communication with other participants as well as official chats!": "Computer o smartphone lang na may Ethereum wallet ay sapat na. Inirerekumenda din namin ang pag-install ng Telegram instant messenger para sa kaginhawaan ng komunikasyon sa iba pang mga members pati na rin ang mga opisyal na chat!",
                    "How to register in OpenAlexa?": "Paano magrehistro sa OpenAlexa?",
                    "Are there any fees or charges in OpenAlexa?": "Mayroon bang anumang mga bayarin o singil sa OpenAlexa?",
                    "In the cryptocurrency industry, there is no such thing as wallet blocking. This is technically impossible even by the creators of Ethereum. Created by you the ETH-wallet belongs only to you.": "Sa industriya ng cryptocurrency, walang programa na kayang e-blocked ang wallet mo. Ito ay imposible kahit na sa mga tagalikha ng Ethereum. And ETH-wallet mo ay pagmamay-ari mo lamang.",
                    "While registering or upgrading the User need to pay only the amount mentioned for the Level. Then the profit is sent to the uplines after deducting the admin fees. The admin fees consist of 10% operations fees and 6% OAP Token development Fees. The OAP token is airdropped to your wallet automatically with each registration and upgrade transaction.": "Habang nagrerehistro o nag-upgrade ang isang member ay kailangang lamang bayaran ang halaga para sa isang level. Ang kita ay natatanggap ng mga uplines pagkatapos ma deduct ang admin fees. Ang admin fees ay binubuo ng 10% bayad sa operasyon at 6% OAP Token development Fees. Ang OAP token ay airdropped sa iyong wallet. Ito ay awtomatikong pumapasok sa wallet niyo sa bawat transaksyon at pag-upgrade.",
                    "Is it possible to earn passively?": "Posible bang kumita ng passive?",
                    "To do registration, you simply need to make payment of the first level. To do this, Click on 'Register' and follow further instructions. After successful payment, you take a position in the structure and are considered a full member.": "Upang magrehistro, kailangan mo lamang magbayad para sa level 1. Upang gawin ito, Mag-click sa 'Magrehistro' at sundin ang mga karagdagang tagubilin.",
                    "In addition to personal invitations, partners can appear in your structure in two ways: These are \u201cOverflows\u201d and \u201cFree Partners\u201d. Therefore, it can be argued that the system has the possibility of passive earnings. But this does not guarantee you a quick decent income, which other successful participants who are active can receive.": 'Maliban sa pag i-invite, ang mga kasosyo ay maaaring lumitaw sa iyong istraktura sa dalawang paraan: Ito ang \\"Overflows\\" at \\"Free Partners\\".  Samakatuwid, maaari nating masabi na ang sistema ay may posibilidad na magbigay ng passive income. Ngunit hindi ito ginagarantiyahan ng mabilis na kita, na maaaring matanggap ng iba aktibong myembro.',
                    "What are overflows?": "Ano ang mga overflows?",
                    "Overflow is a process that occurs when a participant registers for an upline, in which the first level is filled by two participants. The next new member falls into the structure of this upline below, in the nearest free place.": "Ang overflow ay isang proseso na nangyayari kapag may isang nagrehistro para sa isang upline na meron ng dalawang members. Ang susunod na bagong miyembro ay nahuhulog sa istraktura ng upline na ito sa ibaba, sa pinakamalapit na libreng lugar.",
                    "Can I register without an referral link?": "Maaari ba akong magparehistro nang walang referral link?",
                    "Yes, such members are called \u201cfree partners.\u201d These are participants who came for any reason WITHOUT an affiliate link. Free partners are distributed evenly across the System (from left to right), starting from those uplines that were previously registered.": 'Oo, ang mga naturang miyembro ay tinawag na \\"free partners.\\" Ito ang mga members na sumali na walang referral link. Ang mga free partners ay ipinamamahagi nang pantay-pantay sa buong System (mula kaliwa hanggang kanan), simula sa mga uplines na dati nang nakarehistro.',
                    "There are many exchangers. Reliable and proven exchangers can be found on the Google. If this is your first time making an exchange, follow these instructions:": "Maraming mga exchanges. Ang maaasahang at napatunayan na mga exchanges ay matatagpuan sa Google. Kung ito ang iyong unang pagkakataon na makipagpalitan, sundin ang mga tagubiling ito:",
                    "How to add funds to my ETH wallet?": "Paano magdagdag ng ETH sa aking wallet?",
                    "What are Levels?": "Ano ang mga Levels?",
                    "Levels are bought only sequentially and in order. If you try to buy the 4 level without the 3 level, the smart contract will not process such a transfer. Money will not go anywhere and will remain with you.": "Ang mga levels ay nabibili lamang sa pagkakasunud-sunod. Kung susubukan mong bilhin ang level 4 nang walang level 3, ang smart contract ay hindi mapoproseso. Ang pera ay hindi pupunta kahit saan at mananatili sa iyo.",
                    "If I have an 2 level, can I immediately buy the 4 level without having the 3 level?": "Kung mayroon akong level 2, maaari ba akong bumili agad ng level 4 nang walang pagkakaroon ng level 3?",
                    "Level is a status that gives the right to receive remuneration from a partner in its structure of the relevant lines.": "Ang level ay isang status na nagbibigay ng karapatang makatanggap ng kita mula sa isang kasosyo sa istruktura.",
                    "Why do I need to renew levels every 60 days?": "Bakit ko kailangang i-renew ang mga levels pagkatapos ng 60 days?",
                    "The money will be redirected to your upline of the same line as your partner. If you buy levels on time, this will not happen. If this happened, it\u2019s not scary. If you find this in time, then after activating the level, continue to receive the remaining transfers for this level.": "Ang pera ay mai-redirect sa iyong upline ng parehong linya tulad ng iyong mga kasosyo. Kung bumili ka ng level bago mag expire ang account mo, hindi ito mangyayari. Kung nangyari ito, hindi nakakatakot dahil pwede ka naman mag extend ng level.",
                    "What happens if my partner buys a level before me?": "Ano ang mangyayari kung ang aking kasosyo ay bumili ng mas mataas pa na level sa akin?",
                    "Thanks to this rule, your profit will be repeated every 60 days, since after your extension the partners in your structure will do the same.": "Good news ito! Dahil dito, ang iyong kita ay pweding ulit ulitin every 60days. Pagkatapos ng iyong extension, ang mga kasosyo mo ay susunod din.",
                    "What will happen if you do not extend the level and it is deactivated?": "Ano ang mangyayari kung hindi kana maka-extend sa level mo at ito ay madeactivate?",
                    "Your account remains in the System forever, and at any time you can extend the levels and continue to receive income.": "Ang iyong account ay mananatili sa system magpakailanman, at anumang oras ay maaari mo itong e-extend upang patuloy na makatanggap ng kita."
                }
            }), {
                "en-cn": {
                    21: 21,
                    "Smart Contract Address": "\u667a\u80fd\u5408\u7ea6\u5730\u5740",
                    "Copyright @ Open": "\u7248\u6743@ Open",
                    "SIGN UP": "\u6ce8\u518c",
                    "Log in": "\u767b\u5f55",
                    "The most advanced way to invest in blockchain technology": "\u6295\u8d44\u533a\u5757\u94fe\u6280\u672f\u7684\u6700\u5148\u8fdb\u65b9\u6cd5",
                    FOLLOW: "\u8ddf\u968f",
                    Chinese: "\u4e2d\u6587",
                    Italian: "\u4e49\u5927\u5229\u6587",
                    "ENTER MANUALLY (PREVIEW MODE)": "\u624b\u52a8\u8f93\u5165\uff08\u9884\u89c8\u6a21\u5f0f\uff09",
                    Filipino: "\u83f2\u5f8b\u5bbe\u8bed",
                    "welcome!": "\u6b22\u8fce\uff01",
                    "Hello,": "\u4f60\u597d\uff0c",
                    Russian: "\u4fc4\u8bed",
                    Korean: "\u97e9\u8bed",
                    Thai: "\u6cf0\u56fd",
                    Alexa: "\u4e9a\u5386\u514b\u65af",
                    Spanish: "\u897f\u73ed\u7259\u6587",
                    OR: "\u8981\u4e48",
                    "Unison pool is live!": "Unison\u6c60\u73b0\u5728\u4e0a\u7ebf\u4e86\uff01",
                    "window.dataLayer = window.dataLayer || [];\n  function gtag() { dataLayer.push(arguments); }\n  gtag('js', new Date());\n\n  gtag('config', 'UA-166894577-2');": "window.dataLayer = window.dataLayer || [];\u51fd\u6570gtag\uff08\uff09{dataLayer.push\uff08arguments\uff09; } gtag\uff08'js'\uff0cnew Date\uff08\uff09\uff09; gtag\uff08'config'\uff0c'UA-166894577-2'\uff09;",
                    "Login Automatically": "\u81ea\u52a8\u767b\u5f55",
                    "Automatically login if you have following wallets:": "\u5982\u679c\u60a8\u6709\u4ee5\u4e0b\u94b1\u5305\uff0c\u5219\u81ea\u52a8\u767b\u5f55\uff1a",
                    "Control Panel": "\u64cd\u4f5c\u53f0",
                    Partners: "\u4f19\u4f34",
                    Dashboard: "\u4eea\u8868\u677f",
                    Uplines: "\u4e0a\u7ebf",
                    "Lost Profits": "\u5229\u6da6\u635f\u5931",
                    Promo: "\u4fc3\u9500",
                    "Unison Pool": "\u7edf\u4e00\u6c60",
                    Logout: "\u767b\u51fa",
                    FAQ: "\u5e38\u95ee\u95ee\u9898",
                    "Welcome to": "\u6b22\u8fce\u6765\u5230",
                    Open: "\u6253\u5f00",
                    dollar: "\u7f8e\u5143",
                    euro: "\u6b27\u5143",
                    ID: "ID",
                    "ETH WALLET": "ETH\u94b1\u5305",
                    Level: "\u4ee3",
                    Upgrade: "\u5347\u7ea7",
                    "Earned Ethereum": "\u8d5a\u53d6\u4ee5\u592a\u574a",
                    "Earned Money": "\u8d5a\u53d6\u91d1\u989d",
                    "Total Partners/ 24hrs": "\u5408\u4f5c\u4f19\u4f34\u603b\u6570/ 24\u5c0f\u65f6",
                    "No Data": "\u6ca1\u6709\u6570\u636e",
                    "Earning ETH Level": "\u8d5a\u53d6ETH\u6c34\u5e73",
                    "Growth of Structure": "\u7ed3\u6784\u7684\u6210\u957f",
                    "New Users": "\u65b0\u7528\u6237",
                    "My Partners": "\u6211\u7684\u4f19\u4f34",
                    "Your levels": "\u60a8\u7684\u6c34\u5e73",
                    "Total Income": "\u603b\u6536\u5165",
                    "Pool Dashboard": "\u6c60\u4eea\u8868\u677f",
                    "Pool Earning Meter": "\u6c60\u6536\u76ca\u8868",
                    "%": "\uff05",
                    "Created with Highcharts 8.1.0": "\u4f7f\u7528Highcharts 8.1.0\u521b\u5efa",
                    "My Directs": "\u6211\u7684\u8d5e\u52a9",
                    "Smart Contract": "\u667a\u80fd\u5408\u7ea6",
                    "Copyright \xa9OpenAlexa 2020. All rights reserved": "\u7248\u6743\u6240\u6709\xa9OpenAlexa2020\u3002\u4fdd\u7559\u6240\u6709\u6743\u5229",
                    "Level 1": "1\u4ee3",
                    "Extend For 60 days": "\u5ef6\u957f60\u5929",
                    "Expires in 97 days": "\u572897\u5929\u540e\u8fc7\u671f",
                    "Eth Profit": "\u4ee5\u592a\u574a\u5229\u6da6",
                    "Pool 3": "\u6c603",
                    "Pool 1": "\u6c601",
                    "Pool 2": "\u6c602",
                    "Pool 4": "\u6c604",
                    "Pool 5": "\u6c605",
                    "Pool 6": "\u6c606",
                    "Pool 7": "\u6c607",
                    "Pool 8": "\u6c608",
                    Inactive: "\u4e0d\u6d3b\u8dc3",
                    "Buy for 7 ETH": "\u8d2d\u4e707 ETH",
                    "Total Partners": "\u5408\u4f5c\u4f19\u4f34\u603b\u6570",
                    "Line 5": "5\u53f7\u7ebf",
                    Id: "ID",
                    "Line 2": "2\u53f7\u7ebf",
                    "Line 6": "6\u53f7\u7ebf",
                    Find: "\u5bfb\u627e",
                    "Line 3": "3\u53f7\u7ebf",
                    "Line 8": "8\u53f7\u7ebf",
                    "Line 4": "4\u53f7\u7ebf",
                    "Toggle Tree (expand/collapse)": "\u62e8\u52a8\u6811\uff08\u5c55\u5f00/\u6298\u53e0\uff09",
                    Copy: "\u590d\u5236",
                    "Line 1": "1\u53f7\u7ebf",
                    Address: "\u5730\u5740",
                    "Line 9": "9\u53f7\u7ebf",
                    "Line 7": "7\u53f7\u7ebf",
                    "Copy your link": "\u590d\u5236\u60a8\u7684\u94fe\u63a5",
                    "Your Affiliate Link": "\u60a8\u7684\u4f1a\u5458\u94fe\u63a5",
                    Line: "\u7ebf",
                    "Eth Wallet": "\u4ee5\u592a\u574a\u94b1\u5305",
                    Amount: "\u603b\u800c",
                    "S.No": "\u5e8f\u53f7",
                    "Lost Profit Total : 0 ETH": "\u4e8f\u635f\u603b\u989d\uff1a0 \u4ee5\u592a\u574a",
                    "My Sponsor": "\u6211\u7684\u76f4\u63a8",
                    "Pool / Direct Income": "\u6c60/\u76f4\u63a5\u6536\u5165",
                    "Priority Counter": "\u4f18\u5148\u8ba1\u6570\u5668",
                    "My Directs : 0": "\u6211\u7684\u76f4\u63a8",
                    "0xD7EDCcE3F7e1469b9B228828ed675DDE53aa0115": "0xD7EDCcE3F7e1469b9B228828ed675DDE53aa0115",
                    "Increase in priority will help you to claim your reward early.": "\u4f18\u5148\u7ea7\u7684\u63d0\u9ad8\u5c06\u5e2e\u52a9\u60a8\u53ca\u65e9\u9886\u53d6\u5956\u52b1\u3002",
                    "My Unison Pools": "\u6211\u7684Unison\u6c60",
                    "0%": "0\uff05",
                    "Join Pool": "\u52a0\u5165\u6c60",
                    "My Pools": "\u6211\u7684\u6c60",
                    "Pool Income": "\u603b\u6c60\u6536\u5165",
                    "Lost Profit": "\u5229\u6da6\u635f\u5931",
                    "Yield Booster": "\u5c48\u670d\u52a9\u63a8\u5668",
                    Active: "\u6d3b\u6027",
                    "My Directs : 2": "\u6211\u7684\u76f4\u63a8\uff1a2",
                    "Pool Join": "\u52a0\u76df\u6c60",
                    Type: "\u603b\u7c7b",
                    "Amount(ETH)": "\u603b\u91d1\u989d\uff08ETH\uff09",
                    "Joined On": "\u52a0\u5165",
                    Pool: "\u6c60",
                    Sponsor: "\u8d5e\u52a9",
                    Date: "\u65e5\u671f",
                    Distribute: "\u5206\u914d",
                    Text: "\u6b63\u6587",
                    Banner: "\u65d7\u5e1c",
                    Presentation: "\u4ecb\u7ecd",
                    Video: "\u89c6\u9891",
                    "Promotional Materials": "\u5ba3\u4f20\u6750\u6599",
                    "Download Presentation": "\u4e0b\u8f7d\u4ecb\u7ecd",
                    "Offline Income Pattern": "\u79bb\u7ebf\u6536\u5165\u6a21\u5f0f",
                    "OpenAlexa - Security Advisory": "OpenAlexa-\u5b89\u5168\u54a8\u8be2",
                    "OpenAlexa - Trust Wallet": "OpenAlexa-Trust\u94b1\u5305",
                    "Text advertising for posts and newsletters": "\u5e16\u5b50\u548c\u65b0\u95fb\u901a\u8baf\u7684\u6587\u5b57\u5e7f\u544a",
                    "What is a Smart Contract?": "\u4ec0\u4e48\u662f\u667a\u80fd\u5408\u7ea6\uff1f",
                    "A smart contract is a computer algorithm that controls the completion of a transaction. It is entered into the blockchain and remembered forever. The conditions are the same for everyone and cannot be changed or deleted by anyone. A smart contract makes financial transactions automatically, without human intervention, according to conditions written in advance.": "\u667a\u80fd\u5408\u7ea6\u662f\u4e00\u79cd\u63a7\u5236\u4ea4\u6613\u5b8c\u6210\u7684\u8ba1\u7b97\u673a\u7b97\u6cd5\u3002 \u5b83\u88ab\u8f93\u5165\u5230\u533a\u5757\u94fe\u4e2d\u5e76\u6c38\u8fdc\u88ab\u8bb0\u4f4f\u3002 \u6bcf\u4e2a\u4eba\u7684\u6761\u4ef6\u90fd\u662f\u76f8\u540c\u7684\uff0c\u4efb\u4f55\u4eba\u90fd\u4e0d\u80fd\u66f4\u6539\u6216\u5220\u9664\u3002 \u667a\u80fd\u5408\u7ea6\u4f1a\u6839\u636e\u4e8b\u5148\u7f16\u5199\u7684\u6761\u4ef6\u81ea\u52a8\u8fdb\u884c\u91d1\u878d\u4ea4\u6613\uff0c\u800c\u65e0\u9700\u4eba\u5de5\u5e72\u9884\u3002",
                    "Example 1. You and a friend bet on the outcome of a football match. You make bets in the blockchain in the form of transactions, which are stored there until the end of the game. When the match ends, the smart contract automatically checks its outcome on one of the sports sites and transfers all the money to the winner.": "\u4f8b\u5b501.\u60a8\u548c\u4e00\u4e2a\u670b\u53cb\u62bc\u6ce8\u4e00\u573a\u8db3\u7403\u6bd4\u8d5b\u7684\u7ed3\u679c\u3002 \u60a8\u4ee5\u4ea4\u6613\u7684\u5f62\u5f0f\u5728\u533a\u5757\u94fe\u4e2d\u4e0b\u6ce8\uff0c\u8fd9\u4e9b\u4ea4\u6613\u5c06\u88ab\u5b58\u50a8\u5728\u90a3\u91cc\u76f4\u5230\u6e38\u620f\u7ed3\u675f\u3002 \u6bd4\u8d5b\u7ed3\u675f\u540e\uff0c\u667a\u80fd\u5408\u7ea6\u4f1a\u5728\u5176\u4e2d\u4e00\u4e2a\u4f53\u80b2\u7f51\u7ad9\u4e0a\u81ea\u52a8\u68c0\u67e5\u5176\u7ed3\u679c\uff0c\u5e76\u5c06\u6240\u6709\u8d44\u91d1\u8f6c\u79fb\u7ed9\u83b7\u80dc\u8005\u3002",
                    "Example 2. You ordered a product through an online store. Payment for the goods is recorded on the blockchain, and only after confirmation by the courier that the goods have been delivered, the money goes to the owner.": "\u4f8b\u5b502.\u60a8\u901a\u8fc7\u5728\u7ebf\u5546\u5e97\u8ba2\u8d2d\u4e86\u4ea7\u54c1\u3002 \u8d27\u7269\u7684\u4ed8\u6b3e\u8bb0\u5f55\u5728\u533a\u5757\u94fe\u4e0a\uff0c\u53ea\u6709\u5728\u5feb\u9012\u5458\u786e\u8ba4\u8d27\u7269\u5df2\u4ea4\u4ed8\u540e\uff0c\u8d44\u91d1\u624d\u5f52\u6240\u6709\u8005\u3002",
                    "Data is encrypted and distributed on the blockchain and duplicated many times, it cannot be changed or deleted.": "\u6570\u636e\u5728\u533a\u5757\u94fe\u4e0a\u8fdb\u884c\u52a0\u5bc6\u548c\u5206\u53d1\uff0c\u5e76\u91cd\u590d\u591a\u6b21\uff0c\u65e0\u6cd5\u66f4\u6539\u6216\u5220\u9664\u3002",
                    "Nobody will deceive anyone, everyone sees the code of the smart contract and understands that it works exactly as it is written in it. A smart contract is not a person, it will not lie and will not hide with money.": "\u6ca1\u6709\u4eba\u4f1a\u6b3a\u9a97\u4efb\u4f55\u4eba\uff0c\u6bcf\u4e2a\u4eba\u90fd\u53ef\u4ee5\u770b\u5230\u667a\u80fd\u5408\u7ea6\u7684\u4ee3\u7801\uff0c\u5e76\u4e14\u77e5\u9053\u5b83\u5b8c\u5168\u6309\u7167\u5176\u7f16\u5199\u7684\u65b9\u5f0f\u5de5\u4f5c\u3002 \u667a\u80fd\u5408\u7ea6\u4e0d\u662f\u4eba\uff0c\u5b83\u4e0d\u4f1a\u6492\u8c0e\uff0c\u4e5f\u4e0d\u4f1a\u7528\u94b1\u85cf\u8d77\u6765\u3002",
                    "A verified smart contract will work as long as the Ethereum blockchain exists.": "\u53ea\u8981\u4ee5\u592a\u574a\u533a\u5757\u94fe\u5b58\u5728\uff0c\u7ecf\u8fc7\u9a8c\u8bc1\u7684\u667a\u80fd\u5408\u7ea6\u5c31\u53ef\u4ee5\u6b63\u5e38\u5de5\u4f5c\u3002",
                    "OpenAlexa Smart Contract : SCAM IMPOSSIBLE": "OpenAlexa\u667a\u80fd\u5408\u7ea6\uff1a\u4e0d\u53ef\u80fd\u8bc8\u9a97",
                    "OpenAlexa Smart contract is the best that mankind could come up with in recent years.": "OpenAlexa Smart\u5408\u540c\u662f\u8fd1\u5e74\u6765\u4eba\u7c7b\u53ef\u4ee5\u60f3\u5230\u7684\u6700\u597d\u7684\u5408\u540c\u3002",
                    "It is impossible to steal money": "\u5077\u94b1\u662f\u4e0d\u53ef\u80fd\u7684",
                    "Locking and breaking a wallet is not possible": "\u4e0d\u80fd\u9501\u5b9a\u548c\u7834\u89e3\u94b1\u5305",
                    "Unable to exclude your account from the structure": "\u65e0\u6cd5\u4ece\u7ed3\u6784\u4e2d\u6392\u9664\u60a8\u7684\u5e10\u6237",
                    "Payments are made from wallet to participant\u2019s wallet": "\u4ed8\u6b3e\u662f\u4ece\u94b1\u5305\u5230\u53c2\u4e0e\u8005\u7684\u94b1\u5305",
                    "If you close the site, the smart contract will still work": "\u5982\u679c\u60a8\u5173\u95ed\u7f51\u7ad9\uff0c\u667a\u80fd\u5408\u7ea6\u4ecd\u5c06\u6709\u6548",
                    "#openalexa #smartcontract #ethereum #bitcoin #crypto #blockchain #money # crypto #cryptocurrency #earningonline #btc #eth #investing #finance #profit #wagering #earnings #risklesswork #sales #marketing": "",
                    "The project has no owner, all conditions are unchanged": "\u8be5\u9879\u76ee\u6ca1\u6709\u8001\u677f\uff0c\u6240\u6709\u6761\u4ef6\u5747\u4e0d\u53d8",
                    "THE FASTEST AND SIMPLE SMART CONTRACT": "\u6700\u5feb\u6700\u7b80\u5355\u7684\u667a\u80fd\u5408\u7ea6",
                    "OpenAlexa - Risk-free way of Earning ETH": "OpenAlexa-\u83b7\u5f97ETH\u7684\u65e0\u98ce\u9669\u65b9\u6cd5",
                    View: "\u89c6\u56fe",
                    "Accessible to everyone. Entrance fee - 0.03 ETH only.": "\u6bcf\u4e2a\u4eba\u90fd\u53ef\u4ee5\u52a0\u5165\u3002\u5165\u573a\u8d39-\u4ec50.03 ETH\u3002",
                    "The repetition frequency of 60 days. Income can be repeated every 60 days with a ready-made team, earn 4000+ ETH every two months": "\u91cd\u590d\u9891\u7387\u4e3a60\u5929\u3002 \u73b0\u6210\u7684\u56e2\u961f\u53ef\u4ee5\u6bcf60\u5929\u91cd\u590d\u6536\u5165\uff0c\u6bcf\u4e24\u4e2a\u6708\u8d5a\u53d64000+ ETH",
                    "For the first time such a simple and convenient marketing. Binary matrix 6 lines - 128 people in a team are enough to go through two cycles and earn 4000+ ETH": "\u7b2c\u4e00\u6b21\u8fd9\u6837\u7b80\u5355\u65b9\u4fbf\u7684\u8425\u9500\u3002 \u53cc\u8f68\u5236\u96356\u884c-\u56e2\u961f\u4e2d\u7684128\u4e2a\u4eba\u8db3\u591f\u7ecf\u5386\u4e24\u4e2a\u5468\u671f\u5e76\u83b7\u5f974000+ ETH",
                    "OpenAlexa - Use with MetaMask": "OpenAlexa-\u80fd\u4f7f\u7528MetaMask",
                    "OpenAlexa Explainer Video - EN": "OpenAlexa\u89e3\u91ca\u5668\u89c6\u9891-ZH",
                    FAQs: "\u5e38\u95ee\u95ee\u9898",
                    "Are there any fees or charges in OpenAlexa?": "OpenAlexa\u662f\u5426\u6709\u4efb\u4f55\u6536\u8d39\uff1f",
                    "What will happen if you do not extend the level and it is deactivated?": "\u5982\u679c\u60a8\u4e0d\u6269\u5c55\u7ea7\u522b\u5e76\u5c06\u5176\u7981\u7528\uff0c\u5c06\u4f1a\u53d1\u751f\u4ec0\u4e48\uff1f",
                    "What is mode of payment in OpenAlexa?": "OpenAlexa\u7684\u4ed8\u6b3e\u65b9\u5f0f\u662f\u4ec0\u4e48\uff1f",
                    "Who is the Project Administrator?": "\u8c01\u662f\u9879\u76ee\u7ba1\u7406\u5458\uff1f",
                    "Level is a status that gives the right to receive remuneration from a partner in its structure of the relevant lines.": "\u7ea7\u522b\u662f\u4e00\u79cd\u6388\u4e88\u5176\u4f19\u4f34\u5728\u5176\u76f8\u5173\u90e8\u95e8\u7ed3\u6784\u4e2d\u6536\u53d6\u62a5\u916c\u7684\u6743\u5229\u7684\u72b6\u6001\u3002",
                    "Is it possible to earn passively?": "\u53ef\u4ee5\u88ab\u52a8\u8d5a\u94b1\u5417\uff1f",
                    "Again NO! The smart contract is absolutely transparent, all data is recorded in the blockchain chain. No scam or fraud. The project cannot fail. It will work as long as the blockchain exists, even if the site is closed.": "\u518d\u6b21\u6ca1\u6709\uff01 \u667a\u80fd\u5408\u7ea6\u662f\u7edd\u5bf9\u900f\u660e\u7684\uff0c\u6240\u6709\u6570\u636e\u90fd\u8bb0\u5f55\u5728\u533a\u5757\u94fe\u94fe\u4e2d\u3002 \u6ca1\u6709\u6b3a\u8bc8\u6216\u6b3a\u8bc8\u884c\u4e3a\u3002 \u8be5\u9879\u76ee\u4e0d\u80fd\u5931\u8d25\u3002 \u53ea\u8981\u8be5\u533a\u5757\u94fe\u5b58\u5728\uff0c\u5b83\u5c31\u5c06\u8d77\u4f5c\u7528\uff0c\u5373\u4f7f\u8be5\u7ad9\u70b9\u5df2\u5173\u95ed\u3002",
                    "If I have an 2 level, can I immediately buy the 4 level without having the 3 level?": "\u5982\u679c\u6211\u67092\u7ea7\uff0c\u662f\u5426\u53ef\u4ee5\u7acb\u5373\u8d2d\u4e704\u7ea7\u800c\u6ca1\u6709\u4e703\u7ea7\uff1f",
                    "What happens if my partner buys a level before me?": "\u5982\u679c\u6211\u7684\u4f19\u4f34\u5728\u6211\u4e4b\u524d\u8d2d\u4e70\u4e86\u4e00\u4e2a\u7b49\u7ea7\uff0c\u4f1a\u600e\u6837\uff1f",
                    "OpenAlexa can be divided into 2 concepts: First - Is a smart contract or application running on a cryptocurrency network Ethereum. The application code is programmed to distribute incoming transfers among participants according to a specific algorithm. Second - Is the site itself, providing an interface for the convenience of working with a smart contract.": "OpenAlexa\u53ef\u4ee5\u5206\u4e3a\u4e24\u4e2a\u6982\u5ff5\uff1a\u9996\u5148-\u662f\u5728\u52a0\u5bc6\u8d27\u5e01\u7f51\u7edc\u4ee5\u592a\u574a\u4e0a\u8fd0\u884c\u7684\u667a\u80fd\u5408\u7ea6\u6216\u5e94\u7528\u7a0b\u5e8f\u3002 \u5bf9\u5e94\u7528\u7a0b\u5e8f\u4ee3\u7801\u8fdb\u884c\u7f16\u7a0b\uff0c\u4ee5\u6839\u636e\u7279\u5b9a\u7b97\u6cd5\u5728\u53c2\u4e0e\u8005\u4e4b\u95f4\u5206\u914d\u4f20\u5165\u7684\u4f20\u8f93\u3002 \u5176\u6b21-\u7f51\u7ad9\u672c\u8eab\uff0c\u5b83\u63d0\u4f9b\u4e86\u4e00\u4e2a\u754c\u9762\uff0c\u4ee5\u65b9\u4fbf\u4f7f\u7528\u667a\u80fd\u5408\u7ea6\u3002",
                    "What is OpenAlexa?": "\u4ec0\u4e48\u662fOpenAlexa\uff1f",
                    "Since the smart contract is published Ethereum Blockchain, so participation in the project is possible only with this ETH digital currency.": "\u7531\u4e8e\u667a\u80fd\u5408\u7ea6\u5df2\u53d1\u5e03\u4ee5\u592a\u574a\u533a\u5757\u94fe\uff0c\u56e0\u6b64\u53ea\u6709\u4f7f\u7528\u6b64ETH\u6570\u5b57\u8d27\u5e01\u624d\u80fd\u53c2\u4e0e\u9879\u76ee\u3002",
                    "Levels are bought only sequentially and in order. If you try to buy the 4 level without the 3 level, the smart contract will not process such a transfer. Money will not go anywhere and will remain with you.": "\u53ea\u6309\u987a\u5e8f\u8d2d\u4e70\u7b49\u7ea7\u3002 \u5982\u679c\u60a8\u5c1d\u8bd5\u5728\u6ca1\u67093\u7ea7\u7684\u60c5\u51b5\u4e0b\u8d2d\u4e704\u7ea7\uff0c\u5219\u667a\u80fd\u5408\u7ea6\u5c06\u4e0d\u4f1a\u5904\u7406\u6b64\u7c7b\u8f6c\u79fb\u3002 \u94b1\u4e0d\u4f1a\u6d41\u5230\u4efb\u4f55\u5730\u65b9\uff0c\u5e76\u4f1a\u7559\u5728\u60a8\u7684\u94b1\u5305\u7406\u3002",
                    "Thanks to this rule, your profit will be repeated every 60 days, since after your extension the partners in your structure will do the same.": "\u7531\u4e8e\u6709\u4e86\u8fd9\u4e2a\u89c4\u5219\uff0c\u60a8\u7684\u5229\u6da6\u5c06\u6bcf60\u5929\u91cd\u590d\u4e00\u6b21\uff0c\u56e0\u4e3a\u5728\u60a8\u8fdb\u884c\u6269\u5c55\u540e\uff0c\u60a8\u6240\u5728\u7ed3\u6784\u4e2d\u7684\u5408\u4f5c\u4f19\u4f34\u4e5f\u4f1a\u8fd9\u6837\u505a\u3002",
                    "What are Levels?": "\u4ec0\u4e48\u662f\u7b49\u7ea7\uff1f",
                    "How to add funds to my ETH wallet?": "\u5982\u4f55\u5411\u6211\u7684ETH\u94b1\u5305\u6dfb\u52a0\u8d44\u91d1\uff1f",
                    "Can I register without an referral link?": "\u6211\u53ef\u4ee5\u5728\u6ca1\u6709\u63a8\u8350\u94fe\u63a5\u7684\u60c5\u51b5\u4e0b\u8fdb\u884c\u6ce8\u518c\u5417\uff1f",
                    "While registering or upgrading the User need to pay only the amount mentioned for the Level. Then the profit is sent to the uplines after deducting the admin fees. The admin fees consist of 10% operations fees and 6% OAP Token development Fees. The OAP token is airdropped to your wallet automatically with each registration and upgrade transaction.": "\u5728\u6ce8\u518c\u6216\u5347\u7ea7\u65f6\uff0c\u7528\u6237\u53ea\u9700\u8981\u652f\u4ed8\u8be5\u7ea7\u522b\u63d0\u5230\u7684\u91d1\u989d\u3002\u7136\u540e\uff0c\u5728\u6263\u9664\u7ba1\u7406\u8d39\u7528\u540e\uff0c\u5229\u6da6\u5c06\u88ab\u53d1\u9001\u5230\u4e0a\u7ebf\u3002\u7ba1\u7406\u8d39\u5305\u62ec10\uff05\u7684\u8fd0\u8425\u8d39\u548c6\uff05\u7684OAP\u4ee3\u5e01\u5f00\u53d1\u8d39\u3002\u6bcf\u6b21\u6ce8\u518c\u548c\u5347\u7ea7\u4ea4\u6613\u65f6\uff0cOAP\u4ee4\u724c\u90fd\u4f1a\u81ea\u52a8\u7a7a\u6295\u5230\u60a8\u7684\u94b1\u5305\u4e2d\u3002",
                    "To do registration, you simply need to make payment of the first level. To do this, Click on 'Register' and follow further instructions. After successful payment, you take a position in the structure and are considered a full member.": "\u8981\u8fdb\u884c\u6ce8\u518c\uff0c\u60a8\u53ea\u9700\u8981\u652f\u4ed8\u7b2c\u4e00\u7ea7\u8d39\u7528\u5373\u53ef\u3002\u4e3a\u6b64\uff0c\u8bf7\u5355\u51fb\u201c\u6ce8\u518c\u201d\uff0c\u7136\u540e\u6309\u7167\u8fdb\u4e00\u6b65\u7684\u8bf4\u660e\u8fdb\u884c\u64cd\u4f5c\u3002\u6210\u529f\u4ed8\u6b3e\u540e\uff0c\u60a8\u5c06\u5728\u7ed3\u6784\u4e2d\u62c5\u4efb\u804c\u4f4d\u5e76\u88ab\u89c6\u4e3a\u6b63\u5f0f\u6210\u5458\u3002",
                    "How can I be sure that my wallet will not be blocked?": "\u5982\u4f55\u786e\u5b9a\u6211\u7684\u94b1\u5305\u4e0d\u4f1a\u88ab\u963b\u6b62\uff1f",
                    "In a project like OpenAlexa there is no administrator. There is a creator who uploaded the contract code to the cryptocurrency blockchain Ethereum. After that, the smart contract has been part of the overall network, which is supported by miners. No one has the right to affect the operation of a smart contract, delete it or stop it. Any attempt to make unauthorised changes will be rejected due to inconsistency with previous copies in the block chain.": "\u5728\u50cfOpenAlexa\u8fd9\u6837\u7684\u9879\u76ee\u4e2d\uff0c\u6ca1\u6709\u7ba1\u7406\u5458\u3002\u6709\u4e00\u4e2a\u521b\u5efa\u8005\u5c06\u5408\u540c\u4ee3\u7801\u4e0a\u4f20\u5230\u52a0\u5bc6\u8d27\u5e01\u533a\u5757\u94fe\u4ee5\u592a\u574a\u3002\u6b64\u540e\uff0c\u667a\u80fd\u5408\u7ea6\u5df2\u6210\u4e3a\u6574\u4e2a\u7f51\u7edc\u7684\u4e00\u90e8\u5206\uff0c\u5e76\u5f97\u5230\u77ff\u5de5\u7684\u652f\u6301\u3002\u6ca1\u6709\u4eba\u6709\u6743\u5f71\u54cd\uff0c\u53d6\u6d88\u6216\u7ec8\u6b62\u667a\u80fd\u5408\u7ea6\u7684\u64cd\u4f5c\u3002\u7531\u4e8e\u4e0e\u533a\u5757\u94fe\u4e2d\u7684\u5148\u524d\u526f\u672c\u4e0d\u4e00\u81f4\uff0c\u4efb\u4f55\u672a\u7ecf\u6388\u6743\u7684\u66f4\u6539\u5c1d\u8bd5\u90fd\u5c06\u88ab\u62d2\u7edd\u3002",
                    "NO! The contract is programmed to not accumulate funds, but to serve only as a transmitter. The balance of the contract is always zero, anyone can verify this. It simply lacks the function of taking funds from your balance. Any transaction will reach the desired goal safe and sound.": "\u6ca1\u6709\uff01\u8be5\u5408\u540c\u88ab\u7f16\u7a0b\u4e3a\u4e0d\u7d2f\u79ef\u8d44\u91d1\uff0c\u800c\u4ec5\u5145\u5f53\u53d1\u9001\u65b9\u3002\u5408\u540c\u7684\u4f59\u989d\u59cb\u7ec8\u4e3a\u96f6\uff0c\u4efb\u4f55\u4eba\u90fd\u53ef\u4ee5\u5bf9\u6b64\u8fdb\u884c\u9a8c\u8bc1\u3002\u5b83\u53ea\u662f\u7f3a\u4e4f\u4ece\u4f59\u989d\u4e2d\u63d0\u53d6\u8d44\u91d1\u7684\u529f\u80fd\u3002\u4efb\u4f55\u4ea4\u6613\u90fd\u5c06\u5b89\u5168\u53ef\u9760\u5730\u8fbe\u5230\u9884\u671f\u76ee\u6807\u3002",
                    "Overflow is a process that occurs when a participant registers for an upline, in which the first level is filled by two participants. The next new member falls into the structure of this upline below, in the nearest free place.": "\u6ea2\u51fa\u662f\u53c2\u4e0e\u8005\u6ce8\u518c\u4e0a\u7ebf\u65f6\u53d1\u751f\u7684\u8fc7\u7a0b\uff0c\u5176\u4e2d\u7b2c\u4e00\u7ea7\u7531\u4e24\u4e2a\u53c2\u4e0e\u8005\u586b\u8865\u3002\u4e0b\u4e00\u4e2a\u65b0\u6210\u5458\u5c06\u5728\u6700\u8fd1\u7684\u514d\u8d39\u4f4d\u7f6e\u8fdb\u5165\u4e0b\u9762\u7684\u4e0a\u7ebf\u7ed3\u6784\u3002",
                    "Yes, such members are called \u201cfree partners.\u201d These are participants who came for any reason WITHOUT an affiliate link. Free partners are distributed evenly across the System (from left to right), starting from those uplines that were previously registered.": "\u662f\u7684\uff0c\u8fd9\u6837\u7684\u6210\u5458\u88ab\u79f0\u4e3a\u201c\u81ea\u7531\u4f19\u4f34\u201d\u3002\u8fd9\u4e9b\u53c2\u4e0e\u8005\u51fa\u4e8e\u4efb\u4f55\u539f\u56e0\u800c\u6ca1\u6709\u4f1a\u5458\u94fe\u63a5\u3002\u4ece\u5148\u524d\u5df2\u6ce8\u518c\u7684\u4e0a\u7ebf\u5f00\u59cb\uff0c\u514d\u8d39\u5408\u4f5c\u4f19\u4f34\u5728\u7cfb\u7edf\u4e2d\u5e73\u5747\u5206\u914d\uff08\u4ece\u5de6\u5230\u53f3\uff09\u3002",
                    "Your account remains in the System forever, and at any time you can extend the levels and continue to receive income.": "\u60a8\u7684\u5e10\u6237\u5c06\u6c38\u8fdc\u4fdd\u7559\u5728\u7cfb\u7edf\u4e2d\uff0c\u60a8\u53ef\u4ee5\u968f\u65f6\u6269\u5c55\u7ea7\u522b\u5e76\u7ee7\u7eed\u83b7\u5f97\u6536\u5165\u3002",
                    "In addition to personal invitations, partners can appear in your structure in two ways: These are \u201cOverflows\u201d and \u201cFree Partners\u201d. Therefore, it can be argued that the system has the possibility of passive earnings. But this does not guarantee you a quick decent income, which other successful participants who are active can receive.": "\u9664\u4e86\u4e2a\u4eba\u9080\u8bf7\u5916\uff0c\u5408\u4f5c\u4f19\u4f34\u8fd8\u53ef\u4ee5\u901a\u8fc7\u4e24\u79cd\u65b9\u5f0f\u51fa\u73b0\u5728\u60a8\u7684\u7ed3\u6784\u4e2d\uff1a\u201c\u6ea2\u51fa\u201d\u548c\u201c\u514d\u8d39\u5408\u4f5c\u4f19\u4f34\u201d\u3002\u56e0\u6b64\uff0c\u53ef\u4ee5\u8ba4\u4e3a\u8be5\u7cfb\u7edf\u5177\u6709\u88ab\u52a8\u6536\u76ca\u7684\u53ef\u80fd\u6027\u3002\u4f46\u8fd9\u4e0d\u80fd\u4fdd\u8bc1\u60a8\u80fd\u83b7\u5f97\u53ef\u89c2\u7684\u6536\u5165\uff0c\u5176\u4ed6\u6d3b\u8dc3\u7684\u6210\u529f\u53c2\u4e0e\u8005\u4e5f\u80fd\u83b7\u5f97\u8fd9\u4e9b\u6536\u5165\u3002",
                    "What are overflows?": "\u4ec0\u4e48\u662f\u6ea2\u51fa\uff1f",
                    "Can a transaction remain on the balance of a smart contract?": "\u4ea4\u6613\u80fd\u5426\u4fdd\u6301\u5728\u667a\u80fd\u5408\u7ea6\u7684\u4f59\u989d\u4e0a\uff1f",
                    "And if the project collapses, will I lose money?": "\u5982\u679c\u9879\u76ee\u5d29\u6e83\uff0c\u6211\u4f1a\u4e8f\u94b1\u5417\uff1f",
                    "Why do I need to renew levels every 60 days?": "\u4e3a\u4ec0\u4e48\u6211\u9700\u8981\u6bcf60\u5929\u66f4\u65b0\u4e00\u6b21\u7b49\u7ea7\uff1f",
                    "What I need to Join OpenAlexa?": "\u6211\u5982\u4f55\u53ef\u4ee5\u52a0\u5165OpenAlexa\uff1f",
                    "In the cryptocurrency industry, there is no such thing as wallet blocking. This is technically impossible even by the creators of Ethereum. Created by you the ETH-wallet belongs only to you.": "\u5728\u52a0\u5bc6\u8d27\u5e01\u884c\u4e1a\u4e2d\uff0c\u6ca1\u6709\u8bf8\u5982\u94b1\u5305\u963b\u585e\u4e4b\u7c7b\u7684\u4e1c\u897f\u3002\u5373\u4f7f\u5728\u4ee5\u592a\u574a\u7684\u521b\u5efa\u8005\u770b\u6765\uff0c\u8fd9\u5728\u6280\u672f\u4e0a\u4e5f\u662f\u4e0d\u53ef\u80fd\u7684\u3002\u7531\u60a8\u521b\u5efa\u7684ETH\u94b1\u5305\u4ec5\u5c5e\u4e8e\u60a8\u81ea\u5df1\u3002",
                    "How to register in OpenAlexa?": "\u5982\u4f55\u5728OpenAlexa\u4e2d\u6ce8\u518c\uff1f",
                    "It is enough to have a computer or smartphone with Ethereum wallet. We also recommend installing Telegram instant messenger for the convenience of communication with other participants as well as official chats!": "\u62e5\u6709\u88c5\u6709\u4ee5\u592a\u574a\u94b1\u5305\u7684\u7535\u8111\u6216\u667a\u80fd\u624b\u673a\u5c31\u8db3\u591f\u4e86\u3002\u6211\u4eec\u8fd8\u5efa\u8bae\u5b89\u88c5Telegram\u5373\u65f6\u901a\u8baf\u7a0b\u5e8f\uff0c\u4ee5\u65b9\u4fbf\u4e0e\u5176\u4ed6\u53c2\u4e0e\u8005\u8fdb\u884c\u4ea4\u6d41\u4ee5\u53ca\u8fdb\u884c\u5b98\u65b9\u804a\u5929\uff01",
                    "There are many exchangers. Reliable and proven exchangers can be found on the Google. If this is your first time making an exchange, follow these instructions:": "\u6709\u5f88\u591a\u4ea4\u6613\u6240\u3002\u5728Google\u4e0a\u53ef\u4ee5\u627e\u5230\u53ef\u9760\u4e14\u7ecf\u8fc7\u9a8c\u8bc1\u7684\u4ea4\u6613\u6240\u3002\u5982\u679c\u8fd9\u662f\u60a8\u7b2c\u4e00\u6b21\u8fdb\u884c\u4ea4\u6d41\uff0c\u8bf7\u6309\u7167\u4ee5\u4e0b\u8bf4\u660e\u8fdb\u884c\u64cd\u4f5c\uff1a",
                    "The money will be redirected to your upline of the same line as your partner. If you buy levels on time, this will not happen. If this happened, it\u2019s not scary. If you find this in time, then after activating the level, continue to receive the remaining transfers for this level.": "\u8fd9\u7b14\u94b1\u5c06\u88ab\u91cd\u5b9a\u5411\u5230\u4e0e\u60a8\u7684\u4f34\u4fa3\u76f8\u540c\u7684\u4e0a\u7ebf\u3002\u5982\u679c\u60a8\u6309\u65f6\u8d2d\u4e70\u7b49\u7ea7\uff0c\u5219\u4e0d\u4f1a\u53d1\u751f\u3002\u5982\u679c\u53d1\u751f\u8fd9\u79cd\u60c5\u51b5\uff0c\u8fd9\u5e76\u4e0d\u53ef\u6015\u3002\u5982\u679c\u60a8\u53ca\u65f6\u53d1\u73b0\u6b64\u95ee\u9898\uff0c\u5219\u5728\u6fc0\u6d3b\u8be5\u7ea7\u522b\u540e\uff0c\u7ee7\u7eed\u63a5\u6536\u8be5\u7ea7\u522b\u7684\u5269\u4f59\u4f20\u8f93\u3002",
                    "Expires in 44 days": "\u572844\u5929\u540e\u8fc7\u671f"
                }
            });
            console.log(u);
            var d = u,
                p = n("fXoL"),
                h = n("tk/3");
            const m = a.a.GOOGLE_API_KEY;
            let y = {};
            Object.keys(d).forEach(e => {
                let t = d[e];
                y[e] = {}, Object.keys(t).forEach(n => {
                    y[e][n.trim()] = t[n]
                })
            }), console.log(y);
            let g = (() => {
                class e {
                    constructor(e, t) {
                        this._http = e, this._storage = t, this.activeLanguageSubject = new r.a(this._storage.getItem("language") || "en"), this.translations = {}, this._init();
                        let n = this._storage.getItem("translations");
                        n && (n = JSON.parse(n)), this.translations = n || {}, console.log(this.translations)
                    }
                    _init() {
                        if (!this._storage) return;
                        let e = this._storage.getItem("language");
                        e && this.activeLanguageSubject.next(e)
                    }
                    getLanguage() {
                        return this.activeLanguageSubject.asObservable()
                    }
                    get language() {
                        return this.activeLanguageSubject.value
                    }
                    setLanguage(e) {
                        this._storage.setItem("language", e), this.activeLanguageSubject.next(e)
                    }
                    translateTextNodes(e, t) {
                        function n(e) {
                            let t = !1;
                            return e.parentElement.hasAttribute("notrans") && (t = !0), parseFloat(e.textContent) >= 0 && !isNaN(parseFloat(e.textContent)) && (t = !0), t
                        }(function(e) {
                            for (var t, a = [], i = document.createTreeWalker(e, NodeFilter.SHOW_TEXT, null, !1); t = i.nextNode();) n(t) || a.push(t);
                            return a
                        })(e).forEach(e => {
                            requestAnimationFrame(() => {
                                requestAnimationFrame(() => {
                                    e.parentElement.getAttribute("trans-en") || "en" != t.source.toLowerCase() || e.parentElement.setAttribute("trans-en", e.textContent), this.translateTextNode(e, t)
                                })
                            })
                        })
                    }
                    getTranslation(e, t) {
                        const {
                            source: n,
                            target: a
                        } = t;
                        let i = e.textContent,
                            o = e.parentElement.getAttribute("trans-en");
                        if (o && (i = o), o && "en" == a.toLowerCase()) return Object(s.a)(o);
                        if (n.toLowerCase() === a.toLowerCase()) return Object(s.a)(e.textContent);
                        if ("" == e.textContent.trim()) return Object(s.a)("");
                        let r = `${n.toLowerCase()}-${a.toLowerCase()}`;
                        return this.translations[r] || (this.translations[r] = {}), this.translations[r][i] ? Object(s.a)(this.translations[r][i]) : y[r] && y[r][i.trim()] ? Object(s.a)(y[r][i.trim()]) : this._http.post(`https://translation.googleapis.com/language/translate/v2?key=${m}`, {
                            q: i,
                            target: t.target.toLowerCase(),
                            source: n.toLowerCase()
                        }).pipe(Object(l.a)(100), Object(c.a)(e => {
                            if (e && e.data && e.data.translations) {
                                let n = this.getValidTranslatedText(e.data.translations),
                                    a = `${t.source.toLowerCase()}-${t.target.toLowerCase()}`;
                                return this.translations[a] || (this.translations[a] = {}), this.translations[a][i] = n, this._storage.setItem("translations", JSON.stringify(this.translations)), n
                            }
                            return null
                        }))
                    }
                    translateTextNode(e, t) {
                        t.source && t.target && t.source.toLowerCase() != t.target.toLowerCase() && "" !== e.textContent && this.getTranslation(e, t).subscribe(t => {
                            t && (e.textContent = t)
                        })
                    }
                    getValidTranslatedText(e) {
                        let t = e.filter(e => e.translatedText && "" != e.translatedText)[0];
                        return t ? (t.translatedText = o.a.decode(t.translatedText), t.translatedText) : ""
                    }
                }
                return e.\u0275fac = function(t) {
                    return new(t || e)(p.Ub(h.b), p.Ub("LOCALSTORAGE"))
                }, e.\u0275prov = p.Gb({
                    token: e,
                    factory: e.\u0275fac,
                    providedIn: "root"
                }), e
            })()
        },
        KSpV: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return c
            }));
            var a = n("mrSG"),
                i = n("AytR"),
                o = n("fXoL"),
                r = n("ZmpF"),
                s = n("OC8m");
            const l = [1, 2, 3];
            let c = (() => {
                class e {
                    constructor(e, t, n) {
                        this._web3 = e, this._notifications = t, this._window = n, this.initialized = !1, this.claimAddressList = [], this.claimUserList = [], this.addressUserMap = {}, this.addressClaimMap = {}
                    }
                    initializePublicVariables() {
                        return Object(a.a)(this, void 0, void 0, (function*() {
                            let e = yield this._web3.getOfferContract();
                            try {
                                let t = yield e.methods.leadersPoolAmt().call();
                                this.leadersPoolAmount = t;
                                let n = yield e.methods.leadersPoolId().call();
                                this.leadersPoolId = n;
                                let a = yield e.methods.leadersPoolMaxUsers().call();
                                this.leadersPoolMaxUsers = a;
                                let i = yield e.methods.levelOneCashBackId().call();
                                this.levelOneCashBackId = i;
                                let o = yield e.methods.levelOneCashBackAmt().call();
                                this.levelOneCashBackAmt = o;
                                let r = yield e.methods.goLevelSixId().call();
                                this.goLevelSixId = r;
                                let s = yield e.methods.goLevelSixAmt().call();
                                this.goLevelSixAmt = s, this.initialized = !0
                            } catch (t) {
                                console.error(t)
                            }
                        }))
                    }
                    checkOfferClaimed(e) {
                        return Object(a.a)(this, void 0, void 0, (function*() {
                            try {
                                let {
                                    address: t
                                } = this._web3.getActiveDetails();
                                if (this.addressClaimMap[t] && this.addressClaimMap[t][e]) return this.addressClaimMap[t][e];
                                let n = yield this._web3.getOfferContract(), a = yield n.methods.checkOfferClaimed([t], e).call();
                                return this.addressClaimMap[t] || (this.addressClaimMap[t] = {}), this.addressClaimMap[t][e] = a, a
                            } catch (t) {
                                throw console.error(t), t
                            }
                        }))
                    }
                    checkOfferExpired(e, t) {
                        return Object(a.a)(this, void 0, void 0, (function*() {
                            try {
                                let n = yield this._web3.getOfferContract(), a = yield n.methods.offerActiveDate(parseInt(t)).call();
                                return +e._createdDate - 1e3 * +a < 0
                            } catch (n) {
                                throw console.error(n), n
                            }
                        }))
                    }
                    getOfferActiveDate(e) {
                        return Object(a.a)(this, void 0, void 0, (function*() {
                            try {
                                let t = yield this._web3.getOfferContract();
                                return 1e3 * +(yield t.methods.offerActiveDate(parseInt(e)).call())
                            } catch (t) {
                                throw console.error(t), t
                            }
                        }))
                    }
                    checkAddressClaimedOffer(e, t) {
                        return Object(a.a)(this, void 0, void 0, (function*() {
                            try {
                                let n = yield this._web3.getOfferContract();
                                return yield n.methods.getOfferClaimedUser(e, t).call()
                            } catch (n) {
                                throw console.error(n), n
                            }
                        }))
                    }
                    getLevelOneCashBackEligible() {
                        return Object(a.a)(this, void 0, void 0, (function*() {
                            try {
                                this.user || (yield this.getUserFromAddress());
                                let {
                                    address: e
                                } = this._web3.getActiveDetails(), t = yield this._web3.getOfferContract(), n = yield t.methods.levelOneCashBackEligible(e).call();
                                return Object.assign(Object.assign({}, n), {
                                    _createdDate: "NaN" != n._createdDate ? (1e3 * +n._createdDate).toString() : null
                                })
                            } catch (e) {
                                throw console.error(e), e
                            }
                        }))
                    }
                    fetchUsersForClaimsList() {
                        return Object(a.a)(this, void 0, void 0, (function*() {
                            try {
                                for (let e = 0; e < this.claimAddressList.length; e++) {
                                    let {
                                        address: t,
                                        offer: n
                                    } = this.claimAddressList[e], a = yield this.addressToUser(t);
                                    "0" !== a._userId && this.claimUserList.push({
                                        offer: n,
                                        user: a
                                    })
                                }
                            } catch (e) {
                                console.error(e)
                            }
                        }))
                    }
                    fetchClaimsAndUsers() {
                        return Object(a.a)(this, void 0, void 0, (function*() {
                            try {
                                for (let t = 0; t < l.length; t++) {
                                    let n = l[t],
                                        {
                                            res: a
                                        } = yield this.getUserByOfferId(n, 0);
                                    if (a && parseInt(a._length)) {
                                        for (var e = 1; e < parseInt(a._length); e++) {
                                            let {
                                                error: t
                                            } = yield this.getUserByOfferId(n, e);
                                            if (!t && this.claimAddressList.length > 30) break
                                        }
                                        if (this.claimAddressList.length > 30) break
                                    }
                                }
                                return yield this.fetchUsersForClaimsList(), this.claimUserList
                            } catch (t) {
                                console.error(t), console.error(this.claimAddressList.length)
                            }
                        }))
                    }
                    getUserByOfferId(e, t) {
                        return new Promise((n, i) => Object(a.a)(this, void 0, void 0, (function*() {
                            try {
                                let a = yield this._web3.getOfferContract(), i = yield a.methods.getUserByOfferId(e, t).call();
                                this.claimAddressList.push({
                                    offer: e,
                                    index: t,
                                    address: i._address
                                }), n({
                                    res: i,
                                    error: null
                                })
                            } catch (a) {
                                console.error(a), n({
                                    error: a,
                                    res: null
                                })
                            }
                        })))
                    }
                    getLeaderspoolEligible() {
                        return Object(a.a)(this, void 0, void 0, (function*() {
                            try {
                                this.user || (yield this.getUserFromAddress());
                                let {
                                    address: e
                                } = this._web3.getActiveDetails(), t = yield this._web3.getOfferContract(), n = yield t.methods.leadersPoolEligible(e).call();
                                return Object.assign(Object.assign({}, n), {
                                    _createdDate: "NaN" != n._createdDate ? (1e3 * +n._createdDate).toString() : null
                                })
                            } catch (e) {
                                throw console.error(e), e
                            }
                        }))
                    }
                    claimLevel2Offer() {
                        return Object(a.a)(this, void 0, void 0, (function*() {
                            try {
                                let e, {
                                        address: t
                                    } = this._web3.getActiveDetails(),
                                    n = yield this._web3.getOfferContract();
                                return e = i.a.production ? yield n.methods.claimLevelOneCashBack().send({
                                    from: t,
                                    gasLimit: this._web3.web3.utils.toHex("210000")
                                }): yield n.methods.claimLevelOneCashBack(t).send({
                                    from: t
                                }), e
                            } catch (e) {
                                throw console.error(e), e
                            }
                        }))
                    }
                    claimLevel6Offer() {
                        return Object(a.a)(this, void 0, void 0, (function*() {
                            try {
                                let e, {
                                        address: t
                                    } = this._web3.getActiveDetails(),
                                    n = yield this._web3.getOfferContract();
                                return e = i.a.production ? yield n.methods.claimGoLevelSix().send({
                                    from: t
                                }): yield n.methods.claimGoLevelSix(t).send({
                                    from: this._window.ethereum.selectedAddress
                                }), e
                            } catch (e) {
                                throw console.error(e), e
                            }
                        }))
                    }
                    claimLeaderspoolOffer() {
                        return Object(a.a)(this, void 0, void 0, (function*() {
                            try {
                                let e, {
                                        address: t
                                    } = this._web3.getActiveDetails(),
                                    n = yield this._web3.getOfferContract();
                                return t = i.a.production ? null : t, e = i.a.production ? yield n.methods.claimLeadersPool().send({
                                    from: t
                                }): yield n.methods.claimLeadersPool(t).send({
                                    from: this._window.ethereum.selectedAddress
                                }), e
                            } catch (e) {
                                throw console.error(e), e
                            }
                        }))
                    }
                    getLevelSixCashBackEligible() {
                        return Object(a.a)(this, void 0, void 0, (function*() {
                            try {
                                this.user || (yield this.getUserFromAddress());
                                let {
                                    address: e
                                } = this._web3.getActiveDetails(), t = yield this._web3.getOfferContract(), n = yield t.methods.goLevelSixEligible(e).call();
                                return Object.assign(Object.assign({}, n), {
                                    _createdDate: "NaN" != n._createdDate ? (1e3 * +n._createdDate).toString() : null
                                })
                            } catch (e) {
                                throw console.error(e), e
                            }
                        }))
                    }
                    addressToUser(e) {
                        return Object(a.a)(this, void 0, void 0, (function*() {
                            if (this.addressUserMap[e]) return this.addressUserMap[e];
                            try {
                                let t = yield this._web3.getOfferContract(), n = yield t.methods.addressToUser(e).call();
                                return this.addressUserMap[e] = n, n
                            } catch (t) {
                                console.error(t)
                            }
                        }))
                    }
                    getUserFromAddress(e) {
                        return Object(a.a)(this, void 0, void 0, (function*() {
                            let {
                                address: e
                            } = this._web3.getActiveDetails();
                            if (e) {
                                let t = yield this._web3.getOfferContract(), n = yield t.methods.addressToUser(e).call();
                                return this.user = Object.assign(Object.assign({}, n), {
                                    _createdDate: (1e3 * +n._createdDate).toString()
                                }), this.user
                            }
                            return null
                        }))
                    }
                    getAddressFromUserID(e) {
                        return Object(a.a)(this, void 0, void 0, (function*() {
                            let t = yield this._web3.getOfferContract();
                            return yield t.methods.userIDtoAddress(e).call()
                        }))
                    }
                    fetchUsersByOfferId(e) {
                        return Object(a.a)(this, void 0, void 0, (function*() {
                            let t = [];
                            try {
                                let a = yield this._web3.getOfferContract(), i = yield a.methods.getUserByOfferId(e, 0).call();
                                if (i && parseInt(i._length)) {
                                    let o = yield this.addressToUser(i._address);
                                    this.user = Object.assign(Object.assign({}, o), {
                                        _createdDate: (1e3 * +o._createdDate).toString()
                                    }), t.push(o);
                                    for (var n = 1; n < parseInt(i._length); n++) {
                                        let i = yield a.methods.getUserByOfferId(e, n).call(), o = yield this.addressToUser(i._address);
                                        this.user = Object.assign(Object.assign({}, o), {
                                            _createdDate: (1e3 * +o._createdDate).toString()
                                        }), t.push(o)
                                    }
                                }
                                return t
                            } catch (a) {
                                return console.error(a), []
                            }
                        }))
                    }
                }
                return e.\u0275fac = function(t) {
                    return new(t || e)(o.Ub(r.a), o.Ub(s.a), o.Ub("WINDOW"))
                }, e.\u0275prov = o.Gb({
                    token: e,
                    factory: e.\u0275fac,
                    providedIn: "root"
                }), e
            })()
        },
        Mryy: function(e) {
            e.exports = JSON.parse('[{"inputs":[{"internalType":"address payable","name":"openAlexaAddress","type":"address"},{"internalType":"address payable","name":"priorityQueueAddress","type":"address"},{"internalType":"address payable","name":"coolOffAddress","type":"address"},{"internalType":"address payable","name":"poolFailSafeAddress","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":true,"internalType":"address","name":"sponsor","type":"address"},{"indexed":true,"internalType":"address","name":"receiver","type":"address"},{"indexed":false,"internalType":"uint256","name":"pool","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"DistributeEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"userId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"referred","type":"uint256"},{"indexed":false,"internalType":"address","name":"referrer","type":"address"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"},{"indexed":true,"internalType":"uint8","name":"pool","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"LostProfitEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"userId","type":"uint256"},{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"address","name":"referrer","type":"address"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"},{"indexed":true,"internalType":"uint8","name":"pool","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"PoolJoinEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":true,"internalType":"address","name":"sponsor","type":"address"},{"indexed":false,"internalType":"uint256","name":"pool","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"slots","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"SlotsLeftEvent","type":"event"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"constant":false,"inputs":[{"internalType":"address","name":"_openalexa","type":"address"},{"internalType":"address","name":"_queue","type":"address"},{"internalType":"address","name":"_coolOff","type":"address"},{"internalType":"address","name":"_poolFailSafe","type":"address"},{"internalType":"uint256","name":"_bulkSlots","type":"uint256"},{"internalType":"uint256","name":"_queue_lastCycle","type":"uint256"}],"name":"changeInternals","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address payable","name":"newowner","type":"address"}],"name":"changeOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"pool","type":"uint256"},{"internalType":"uint256","name":"requiredLevel","type":"uint256"},{"internalType":"uint256","name":"slotPrice","type":"uint256"},{"internalType":"uint256","name":"ticket","type":"uint256"},{"internalType":"uint256","name":"slots","type":"uint256"},{"internalType":"uint256","name":"returnSlots","type":"uint256"},{"internalType":"uint256","name":"boost1returnSlots","type":"uint256"},{"internalType":"uint256","name":"boost2returnSlots","type":"uint256"},{"internalType":"bool","name":"active","type":"bool"}],"name":"changePoolDetails","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"coolOff","outputs":[{"internalType":"address payable","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_queue","type":"uint256"},{"internalType":"uint256","name":"_limit","type":"uint256"}],"name":"coolOffqueue","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"getHighestPriority","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"_userAddress","type":"address"}],"name":"getOpenalexaId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"index","type":"uint256"},{"internalType":"uint256","name":"pool","type":"uint256"}],"name":"getSlots","outputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"slots","type":"uint256"},{"internalType":"uint256","name":"queue","type":"uint256"},{"internalType":"uint256","name":"queuelength","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"idToAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"openAlexa","outputs":[{"internalType":"contract OpenAlexalO","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address payable","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"pid","type":"uint256"},{"internalType":"uint256","name":"_referrerId","type":"uint256"},{"internalType":"bool","name":"isPriority","type":"bool"}],"name":"participatePool","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"poolFailSafe","outputs":[{"internalType":"address payable","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pools","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"requiredLevel","type":"uint256"},{"internalType":"uint256","name":"slotPrice","type":"uint256"},{"internalType":"uint256","name":"ticket","type":"uint256"},{"internalType":"uint256","name":"slots","type":"uint256"},{"internalType":"uint256","name":"returnSlots","type":"uint256"},{"internalType":"uint256","name":"boost1returnSlots","type":"uint256"},{"internalType":"uint256","name":"boost2returnSlots","type":"uint256"},{"internalType":"uint256","name":"totalUsers","type":"uint256"},{"internalType":"bool","name":"active","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"priorityQueue","outputs":[{"internalType":"contract PriorityQueue","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"queue_lastCycle","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"queues","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"setPools","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"slotByID","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"addr","type":"address"},{"internalType":"uint256","name":"pool","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"slotID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint256","name":"_pool","type":"uint256"}],"name":"userPoolDetails","outputs":[{"internalType":"uint256","name":"poolSlots","type":"uint256"},{"internalType":"uint256[2]","name":"booster","type":"uint256[2]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"userReferrals","outputs":[{"internalType":"address[]","name":"referrals","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"users","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"referrerCount","type":"uint256"},{"internalType":"uint256","name":"referrerID","type":"uint256"},{"internalType":"uint256","name":"onPriority","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]')
        },
        OC8m: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return o
            }));
            var a = n("XNiG"),
                i = n("fXoL");
            let o = (() => {
                class e {
                    constructor() {
                        this._newNotification$ = new a.a, this.newNotification$ = this._newNotification$.asObservable()
                    }
                    error(e, t) {
                        this._newNotification$.next({
                            message: e,
                            type: "error",
                            options: t
                        })
                    }
                    success(e, t) {
                        this._newNotification$.next({
                            message: e,
                            type: "success",
                            options: t
                        })
                    }
                    info(e, t) {
                        this._newNotification$.next({
                            message: e,
                            type: "info",
                            options: t
                        })
                    }
                    eth(e, t) {
                        console.log("ETH NOTIFIcation"), this._newNotification$.next({
                            message: e,
                            type: "eth",
                            options: t
                        })
                    }
                    retry() {
                        this._newNotification$.next({
                            message: {
                                title: "Process failed, please try again"
                            },
                            type: "error"
                        })
                    }
                }
                return e.\u0275fac = function(t) {
                    return new(t || e)
                }, e.\u0275prov = i.Gb({
                    token: e,
                    factory: e.\u0275fac,
                    providedIn: "root"
                }), e
            })()
        },
        OEUk: function(e) {
            e.exports = JSON.parse('[{"inputs":[{"internalType":"address","name":"offerStorageAddress","type":"address"},{"internalType":"address payable","name":"openAlexaAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_from","type":"address"},{"indexed":true,"internalType":"address","name":"_to","type":"address"},{"indexed":false,"internalType":"uint256","name":"_offerId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_value","type":"uint256"}],"name":"Claimed","type":"event"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"addressToUser","outputs":[{"internalType":"bool","name":"_isExist","type":"bool"},{"internalType":"uint256","name":"_userId","type":"uint256"},{"internalType":"uint256","name":"_refId","type":"uint256"},{"internalType":"uint256","name":"_currentLevel","type":"uint256"},{"internalType":"uint256","name":"_totalEarningEth","type":"uint256"},{"internalType":"uint256","name":"_createdDate","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"offerId","type":"uint256"},{"internalType":"uint256","name":"_startDate","type":"uint256"}],"name":"changeOfferActive","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_levelOneCashBackAmt","type":"uint256"},{"internalType":"uint256","name":"_goLevelSixAmt","type":"uint256"},{"internalType":"uint256","name":"_leadersPoolAmt","type":"uint256"},{"internalType":"uint256","name":"_leadersPoolMaxUsers","type":"uint256"}],"name":"changeOfferDetails","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"newowner","type":"address"}],"name":"changeOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"user","type":"address[]"},{"internalType":"uint256","name":"offerId","type":"uint256"}],"name":"checkOfferClaimed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimGoLevelSix","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claimLeadersPool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claimLevelOneCashBack","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"},{"internalType":"uint256","name":"offerId","type":"uint256"}],"name":"getOfferClaimedUser","outputs":[{"internalType":"bool","name":"_isClaimed","type":"bool"},{"internalType":"uint256","name":"_userId","type":"uint256"},{"internalType":"uint256","name":"_currentLevel","type":"uint256"},{"internalType":"uint256","name":"_earnedEth","type":"uint256"},{"internalType":"uint256","name":"_createdDate","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"offerId","type":"uint256"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getUserByOfferId","outputs":[{"internalType":"uint256","name":"_length","type":"uint256"},{"internalType":"address","name":"_address","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"goLevelSixAmt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_userAddress","type":"address"}],"name":"goLevelSixEligible","outputs":[{"internalType":"string[4]","name":"_message","type":"string[4]"},{"internalType":"uint256","name":"_userId","type":"uint256"},{"internalType":"uint256","name":"_currentLevel","type":"uint256"},{"internalType":"address[]","name":"_refs","type":"address[]"},{"internalType":"address[]","name":"_lineSixrefs","type":"address[]"},{"internalType":"bool","name":"lineSixComplete","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"goLevelSixId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"leadersPoolAmt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_userAddress","type":"address"}],"name":"leadersPoolEligible","outputs":[{"internalType":"string[4]","name":"_message","type":"string[4]"},{"internalType":"uint256","name":"_userId","type":"uint256"},{"internalType":"uint256","name":"_earnedEth","type":"uint256"},{"internalType":"uint256","name":"_totalClaims","type":"uint256"},{"internalType":"uint256","name":"_maxClaims","type":"uint256"},{"internalType":"uint256","name":"_OfferAmt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"leadersPoolId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"leadersPoolMaxUsers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"levelOneCashBackAmt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_userAddress","type":"address"}],"name":"levelOneCashBackEligible","outputs":[{"internalType":"string[4]","name":"_message","type":"string[4]"},{"internalType":"uint256","name":"_userId","type":"uint256"},{"internalType":"uint256","name":"_userLevel","type":"uint256"},{"internalType":"uint256","name":"_createdDate","type":"uint256"},{"internalType":"address[]","name":"_refs","type":"address[]"},{"internalType":"uint256[4]","name":"_refDates","type":"uint256[4]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"levelOneCashBackId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"offerActiveDate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"offerStorage","outputs":[{"internalType":"contract OfferStorage","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"openAlexa","outputs":[{"internalType":"contract OpenAlexalO","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"userIDtoAddress","outputs":[{"internalType":"address","name":"_userAddress","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]')
        },
        PCNd: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            })), n("mrSG");
            var a = n("fXoL");
            n("VQPA"), n("KSpV"), n("ZmpF"), n("lDCn"), n("tyNb");
            var i = n("ofXK");
            n("jhN1"), n("fDiI"), n("1G5W"), n("ds6q"), n("AytR"), n("2Vo4"), n("tk/3"), n("q6s+");
            var o = n("3Pt+");
            let r = (() => {
                class e {}
                return e.\u0275mod = a.Ib({
                    type: e
                }), e.\u0275inj = a.Hb({
                    factory: function(t) {
                        return new(t || e)
                    },
                    providers: [],
                    imports: [
                        [i.b, o.b]
                    ]
                }), e
            })()
        },
        PIAZ: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return i
            })), n.d(t, "d", (function() {
                return o
            })), n.d(t, "c", (function() {
                return r
            })), n.d(t, "a", (function() {
                return l
            }));
            var a = n("R0Ic");
            Object(a.n)("blockTranslateLeft", [Object(a.k)("in", Object(a.l)({
                opacity: 1,
                transform: "translateX(0)",
                width: "100%"
            })), Object(a.k)("out", Object(a.l)({
                opacity: 0,
                transform: "translateX(-100%)",
                width: "0px"
            })), Object(a.m)("in=>out", [Object(a.e)("0.2s ease-in", Object(a.g)([Object(a.l)({
                opacity: 1,
                transform: "translateX(-40%)",
                width: "40%",
                offset: 0
            }), Object(a.l)({
                opacity: .2,
                transform: "translateX(-90%)",
                width: "10%",
                offset: .3
            }), Object(a.l)({
                opacity: 0,
                transform: "translateX(-100%)",
                width: "0px",
                offset: 1
            })]))]), Object(a.m)("out=>in", [Object(a.e)("0.3s ease-in", Object(a.g)([Object(a.l)({
                opacity: 0,
                transform: "translateX(-100%)",
                width: "0px",
                offset: 0
            }), Object(a.l)({
                opacity: .5,
                transform: "translateX(-50%)",
                width: "50%",
                offset: .5
            }), Object(a.l)({
                opacity: 1,
                transform: "translateX(0)",
                width: "100%",
                offset: 1
            })]))])]);
            const i = Object(a.n)("slide", [Object(a.k)("void", Object(a.l)({
                    opacity: 0,
                    transform: "translateX(100%)"
                })), Object(a.k)("center", Object(a.l)({
                    opacity: 1,
                    transform: "translate(0,0)"
                })), Object(a.k)("left", Object(a.l)({
                    opacity: 0,
                    transform: "translateX(-100%)"
                })), Object(a.k)("right", Object(a.l)({
                    opacity: 0,
                    transform: "translateX(100%)"
                })), Object(a.k)("up", Object(a.l)({
                    opacity: 0,
                    transform: "translateY(-100%)"
                })), Object(a.k)("down", Object(a.l)({
                    opacity: 0,
                    transform: "translateY(100%)"
                })), Object(a.m)("center=>*", [Object(a.e)("0.4s ease-in")]), Object(a.m)("*=>center", [Object(a.e)("0.4s ease-in")])]),
                o = (Object(a.n)("fadeInTop", [Object(a.m)("* => void", [Object(a.h)("*", Object(a.j)("300ms", [Object(a.l)({
                    opacity: 0,
                    transform: "translateY(-100%)"
                })]), {
                    optional: !0
                })]), Object(a.m)("* => *", [Object(a.h)("*", Object(a.j)("300ms", [Object(a.e)("0.3s ease-in", Object(a.g)([Object(a.l)({
                    opacity: 0,
                    transform: "translateY(-75%)",
                    offset: 0
                }), Object(a.l)({
                    opacity: .5,
                    transform: "translateY(35px)",
                    offset: .3
                }), Object(a.l)({
                    opacity: 1,
                    transform: "translateY(0)",
                    offset: 1
                })]))]), {
                    optional: !0
                })])]), Object(a.n)("slideRight", [Object(a.k)("in", Object(a.l)({
                    opacity: 1,
                    transform: "translateX(0)"
                })), Object(a.k)("void, out", Object(a.l)({
                    opacity: 0,
                    transform: "translateX(-100%)",
                    position: "absolute",
                    top: 0
                })), Object(a.m)("in=>out", [Object(a.e)("0.3s ease-in", Object(a.g)([Object(a.l)({
                    opacity: 1,
                    transform: "translateX(40%)",
                    offset: 0
                }), Object(a.l)({
                    opacity: .5,
                    transform: "translateX(90%)",
                    offset: .3
                }), Object(a.l)({
                    opacity: 0,
                    transform: "translateX(100%)",
                    offset: 1
                })]))]), Object(a.m)("*=>in", [Object(a.e)("0.3s ease-in", Object(a.g)([Object(a.l)({
                    opacity: 0,
                    transform: "translateX(100%)",
                    offset: 0,
                    position: "absolute",
                    top: 0
                }), Object(a.l)({
                    opacity: .5,
                    transform: "translateX(90%)",
                    offset: .5,
                    position: "absolute",
                    top: 0
                }), Object(a.l)({
                    opacity: 1,
                    transform: "translateX(40%)",
                    offset: 1,
                    position: "absolute",
                    top: 0
                })]))])]), Object(a.n)("slideLeft", [Object(a.k)("in", Object(a.l)({
                    opacity: 1,
                    transform: "translateX(0)"
                })), Object(a.k)("void, out", Object(a.l)({
                    opacity: 0,
                    transform: "translateX(100%)"
                })), Object(a.m)("in=>out", [Object(a.e)("0.3s ease-in", Object(a.g)([Object(a.l)({
                    opacity: 1,
                    transform: "translateX(-40%)",
                    offset: 0
                }), Object(a.l)({
                    opacity: .5,
                    transform: "translateX(-90%)",
                    offset: .3
                }), Object(a.l)({
                    opacity: 0,
                    transform: "translateX(-100%)",
                    offset: 1
                })]))]), Object(a.m)("*=>in", [Object(a.e)("0.3s ease-in", Object(a.g)([Object(a.l)({
                    opacity: 0,
                    transform: "translateX(100%)",
                    offset: 0
                }), Object(a.l)({
                    opacity: .5,
                    transform: "translateX(90%)",
                    offset: .5
                }), Object(a.l)({
                    opacity: 1,
                    transform: "translateX(40%)",
                    offset: 1
                })]))])])),
                r = Object(a.n)("slideDown", [Object(a.k)("in", Object(a.l)({
                    opacity: 1,
                    transform: "translateY(0)"
                })), Object(a.k)("void, out", Object(a.l)({
                    opacity: 0,
                    transform: "translateY(100%)"
                })), Object(a.m)("in=>out", [Object(a.e)("0.2s ease-in", Object(a.g)([Object(a.l)({
                    opacity: 1,
                    transform: "translateY(40%)",
                    offset: 0
                }), Object(a.l)({
                    opacity: .2,
                    transform: "translateY(90%)",
                    offset: .3
                }), Object(a.l)({
                    opacity: 0,
                    transform: "translateY(100%)",
                    offset: 1
                })]))]), Object(a.m)("*=>in", [Object(a.e)("0.3s ease-in", Object(a.g)([Object(a.l)({
                    opacity: 0,
                    transform: "translateY(-100%)",
                    offset: 0
                }), Object(a.l)({
                    opacity: .5,
                    transform: "translateY(-50%)",
                    offset: .5
                }), Object(a.l)({
                    opacity: 1,
                    transform: "translateY(-0)",
                    offset: 1
                })]))])]);

            function s(e) {
                const t = {
                    optional: !0
                };
                return [Object(a.h)(":enter, :leave", [Object(a.l)({
                    position: "absolute",
                    top: 0,
                    [e]: 0,
                    width: "100%"
                })], t), Object(a.h)(":enter", [Object(a.l)({
                    transform: "translateY(100%)",
                    opacity: 0
                })], t), Object(a.f)([Object(a.h)(":leave", [Object(a.e)("600ms ease", Object(a.l)({
                    transform: "translateY(-100%)",
                    opacity: 0
                }))], t), Object(a.h)(":enter", [Object(a.e)("600ms ease", Object(a.l)({
                    transform: "translateY(0%)",
                    opacity: 1
                }))], t)])]
            }
            Object(a.n)("slideUp", [Object(a.k)("in", Object(a.l)({
                opacity: 1,
                transform: "translateY(0)"
            })), Object(a.k)("void, out", Object(a.l)({
                opacity: 0,
                transform: "translateY(-100%)"
            })), Object(a.m)("in=>out", [Object(a.e)("0.2s ease-in", Object(a.g)([Object(a.l)({
                opacity: 1,
                transform: "translateY(40%)",
                offset: 0
            }), Object(a.l)({
                opacity: .2,
                transform: "translateY(90%)",
                offset: .3
            }), Object(a.l)({
                opacity: 0,
                transform: "translateY(100%)",
                offset: 1
            })]))]), Object(a.m)("*=>in", [Object(a.e)("0.3s ease-in", Object(a.g)([Object(a.l)({
                opacity: 0,
                transform: "translateY(100%)",
                offset: 0
            }), Object(a.l)({
                opacity: .5,
                transform: "translateY(50%)",
                offset: .5
            }), Object(a.l)({
                opacity: 1,
                transform: "translateY(0)",
                offset: 1
            })]))])]), Object(a.n)("routeAnimation", [Object(a.m)("* => *", s("right"))]), Object(a.n)("slide", [Object(a.m)("in => out", s("right")), Object(a.m)("out => in", s("left"))]);
            const l = Object(a.n)("blowUp", [Object(a.k)("void", Object(a.l)({
                opacity: 0,
                transform: "scale(0)"
            })), Object(a.k)("*", Object(a.l)({
                opacity: 1,
                transform: "scale(1)"
            })), Object(a.m)("void=>*", [Object(a.e)("0.3s ease-in", Object(a.g)([Object(a.l)({
                opacity: .5,
                transform: "scale(0.4)",
                offset: 0
            }), Object(a.l)({
                opacity: .8,
                transform: "scale(1.1)",
                offset: .3
            }), Object(a.l)({
                opacity: 1,
                transform: "scale(1)",
                offset: 1
            })]))]), Object(a.m)("*=>void", [Object(a.e)("0.3s ease-in", Object(a.g)([Object(a.l)({
                opacity: 1,
                transform: "scale(1.1)",
                offset: 0
            }), Object(a.l)({
                opacity: .8,
                transform: "scale(0.9)",
                offset: .5
            }), Object(a.l)({
                opacity: 0,
                transform: "scale(0)",
                offset: 1
            })]))])])
        },
        QXf0: function(e) {
            e.exports = JSON.parse('[{"inputs":[{"internalType":"address payable","name":"openAlexaAddress","type":"address"},{"internalType":"address payable","name":"priorityQueueAddress","type":"address"},{"internalType":"address payable","name":"coolOffAddress","type":"address"},{"internalType":"address payable","name":"poolFailSafeAddress","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":true,"internalType":"address","name":"sponsor","type":"address"},{"indexed":true,"internalType":"address","name":"receiver","type":"address"},{"indexed":false,"internalType":"uint256","name":"pool","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"DistributeEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"userId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"referred","type":"uint256"},{"indexed":false,"internalType":"address","name":"referrer","type":"address"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"},{"indexed":true,"internalType":"uint8","name":"pool","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"LostProfitEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"userId","type":"uint256"},{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"address","name":"referrer","type":"address"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"},{"indexed":true,"internalType":"uint8","name":"pool","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"PoolJoinEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":true,"internalType":"address","name":"sponsor","type":"address"},{"indexed":false,"internalType":"uint256","name":"pool","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"slots","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"SlotsLeftEvent","type":"event"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"constant":false,"inputs":[{"internalType":"address","name":"_openalexa","type":"address"},{"internalType":"address","name":"_queue","type":"address"},{"internalType":"address","name":"_coolOff","type":"address"},{"internalType":"address","name":"_poolFailSafe","type":"address"}],"name":"changeInternals","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address payable","name":"newowner","type":"address"}],"name":"changeOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"pool","type":"uint256"},{"internalType":"uint256","name":"requiredLevel","type":"uint256"},{"internalType":"uint256","name":"slotPrice","type":"uint256"},{"internalType":"uint256","name":"ticket","type":"uint256"},{"internalType":"uint256","name":"slots","type":"uint256"},{"internalType":"uint256","name":"returnSlots","type":"uint256"},{"internalType":"uint256","name":"boost1returnSlots","type":"uint256"},{"internalType":"uint256","name":"boost2returnSlots","type":"uint256"},{"internalType":"bool","name":"active","type":"bool"}],"name":"changePoolDetails","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"coolOff","outputs":[{"internalType":"address payable","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_queue","type":"uint256"},{"internalType":"uint256","name":"_limit","type":"uint256"}],"name":"coolOffqueue","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"getHighestPriority","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"_userAddress","type":"address"}],"name":"getOpenalexaId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"index","type":"uint256"},{"internalType":"uint256","name":"pool","type":"uint256"}],"name":"getSlots","outputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"slots","type":"uint256"},{"internalType":"uint256","name":"queue","type":"uint256"},{"internalType":"uint256","name":"queuelength","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"idToAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"openAlexa","outputs":[{"internalType":"contract OpenAlexalO","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address payable","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"pid","type":"uint256"},{"internalType":"uint256","name":"_referrerId","type":"uint256"},{"internalType":"bool","name":"isPriority","type":"bool"}],"name":"participatePool","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"poolFailSafe","outputs":[{"internalType":"address payable","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pools","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"requiredLevel","type":"uint256"},{"internalType":"uint256","name":"slotPrice","type":"uint256"},{"internalType":"uint256","name":"ticket","type":"uint256"},{"internalType":"uint256","name":"slots","type":"uint256"},{"internalType":"uint256","name":"returnSlots","type":"uint256"},{"internalType":"uint256","name":"boost1returnSlots","type":"uint256"},{"internalType":"uint256","name":"boost2returnSlots","type":"uint256"},{"internalType":"uint256","name":"totalUsers","type":"uint256"},{"internalType":"bool","name":"active","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"priorityQueue","outputs":[{"internalType":"contract PriorityQueue","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"queue_lastCycle","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"queues","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"setPools","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"slotByID","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"addr","type":"address"},{"internalType":"uint256","name":"pool","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"slotID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint256","name":"_pool","type":"uint256"}],"name":"userPoolDetails","outputs":[{"internalType":"uint256","name":"poolSlots","type":"uint256"},{"internalType":"uint256[2]","name":"booster","type":"uint256[2]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"userReferrals","outputs":[{"internalType":"address[]","name":"referrals","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"users","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"referrerCount","type":"uint256"},{"internalType":"uint256","name":"referrerID","type":"uint256"},{"internalType":"uint256","name":"onPriority","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]')
        },
        VQPA: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return y
            }));
            var a = n("XNiG"),
                i = n("PIAZ"),
                o = n("fXoL"),
                r = n("ofXK");

            function s(e, t) {
                if (1 & e) {
                    const e = o.Rb();
                    o.Qb(0, "span", 11), o.Yb("click", (function() {
                        return o.jc(e), o.ac().close()
                    })), o.Pb()
                }
            }

            function l(e, t) {
                if (1 & e && o.Lb(0, "i"), 2 & e) {
                    const e = o.ac();
                    o.Ab("uk-icon", "icon: " + e.icon + "; ratio: 1.5")
                }
            }

            function c(e, t) {
                if (1 & e && o.Lb(0, "img", 12), 2 & e) {
                    const e = o.ac();
                    o.dc("src", e.iconUrl, o.kc)
                }
            }

            function u(e, t) {
                if (1 & e) {
                    const e = o.Rb();
                    o.Qb(0, "button", 13), o.Yb("click", (function() {
                        o.jc(e);
                        const n = t.$implicit,
                            a = o.ac();
                        return n.forClose ? a.close() : n.onClick()
                    })), o.pc(1), o.Pb()
                }
                if (2 & e) {
                    const e = t.$implicit;
                    o.zb(1), o.rc(" ", e.title, " ")
                }
            }
            const d = function(e) {
                return [e]
            };
            let p = (() => {
                    class e {
                        constructor(e) {
                            this._modalService = e, this.title = "", this.subTitle = "", this.iconUrl = "", this.persist = !1
                        }
                        get icon() {
                            switch (this.type) {
                                case "mail":
                                    return "mail";
                                case "error":
                                    return "close";
                                case "info":
                                    return "info";
                                case "success":
                                    return "check"
                            }
                        }
                        get iconBg() {
                            switch (this.type) {
                                case "mail":
                                    return "success";
                                case "error":
                                    return "danger";
                                case "info":
                                    return "info";
                                case "success":
                                    return "success"
                            }
                        }
                        ngOnInit() {
                            this.title = this.data.title, this.subTitle = this.data.subTitle, this.actions = this.data.actions, this.type = this.data.type, this.iconUrl = this.data.iconUrl, this.persist = this.data.persist
                        }
                        close() {
                            this.data.persist || (this.data.onClose && this.data.onClose(), this._modalService.removeModal(e))
                        }
                    }
                    return e.\u0275fac = function(t) {
                        return new(t || e)(o.Kb(y))
                    }, e.\u0275cmp = o.Eb({
                        type: e,
                        selectors: [
                            ["life-info-modal"]
                        ],
                        inputs: {
                            title: "title",
                            subTitle: ["subtitle", "subTitle"],
                            actions: "actions",
                            iconUrl: "iconUrl",
                            type: "type",
                            data: "data"
                        },
                        decls: 13,
                        vars: 10,
                        consts: [
                            ["id", "info-alert-modal", "tabindex", "-1", "role", "dialog", 1, "info-modal", "bg"],
                            [1, "modal-header"],
                            ["uk-icon", "icon: close", "class", "close", 3, "click", 4, "ngIf"],
                            [1, "icon-container"],
                            [1, "icon", "bg", 3, "ngClass"],
                            [4, "ngIf"],
                            ["alt", "info", 3, "src", 4, "ngIf"],
                            [1, "title", "text", "ml", "b", "center", "uk-margin"],
                            [1, "subtitle", "text", "center", "grey2", "s", "uk-margin"],
                            [1, "actions", "uk-margin"],
                            ["class", "uk-button primary", 3, "click", 4, "ngFor", "ngForOf"],
                            ["uk-icon", "icon: close", 1, "close", 3, "click"],
                            ["alt", "info", 3, "src"],
                            [1, "uk-button", "primary", 3, "click"]
                        ],
                        template: function(e, t) {
                            1 & e && (o.Qb(0, "div", 0), o.Qb(1, "div", 1), o.nc(2, s, 1, 0, "span", 2), o.Pb(), o.Qb(3, "div", 3), o.Qb(4, "div", 4), o.nc(5, l, 1, 1, "i", 5), o.nc(6, c, 1, 1, "img", 6), o.Pb(), o.Pb(), o.Qb(7, "div", 7), o.pc(8), o.Pb(), o.Qb(9, "div", 8), o.pc(10), o.Pb(), o.Qb(11, "div", 9), o.nc(12, u, 2, 1, "button", 10), o.Pb(), o.Pb()), 2 & e && (o.zb(2), o.dc("ngIf", !t.persist), o.zb(1), o.dc("@blowUp", void 0), o.zb(1), o.dc("ngClass", o.fc(8, d, t.iconBg ? t.iconBg : "")), o.zb(1), o.dc("ngIf", t.icon), o.zb(1), o.dc("ngIf", t.iconUrl), o.zb(2), o.rc(" ", t.title, " "), o.zb(2), o.rc(" ", t.subTitle, " "), o.zb(2), o.dc("ngForOf", t.actions))
                        },
                        directives: [r.k, r.i, r.j],
                        styles: ["[_ngcontent-%COMP%]:root{--sc-bg:#fff;--pm-bg:#fbfcfd;--progress:#dbe0e6;--grey-1:#3d4752;--grey-4:#b6c5d5;--success:#26b7ba;--warning:#ff9f0a;--pm-text:#4a4a4a;--dashboard:#3f567a}.dark-mode[_ngcontent-%COMP%], [_ngcontent-%COMP%]:root{--grey-2:#3f567a;--grey-3:#b0c1d3;--pm-color:#fcbf12;--sc-color:#27b8bc;--danger:#eb5757;--info:#00f;--alt-text:#fafafa}.dark-mode[_ngcontent-%COMP%]{--pm-bg:#1f1f2d;--progress:#1f1f2d;--sc-bg:#232347;--grey-1:#8598ad;--grey-4:#8598ad;--success:#34c759;--warning:#ff0;--dashboard:#d9d9d9;--pm-text:#fff}.icon-container[_ngcontent-%COMP%]{width:100%}.icon-container[_ngcontent-%COMP%], .icon-container[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.icon-container[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{height:6.4rem;width:6.4rem;border-radius:3.2rem;color:#fff}.actions[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;margin-top:1.5rem}.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:10px;flex-grow:1}"],
                        data: {
                            animation: [i.a]
                        }
                    }), e
                })(),
                h = (() => {
                    class e {
                        constructor(e) {
                            this._modalService = e
                        }
                        ngOnInit() {
                            if (!this.data) throw new Error("Invalid data provided to confirmationModalComponent");
                            this.positiveAction = this.data.positiveAction, this.negativeAction = this.data.negativeAction
                        }
                        close() {
                            this._modalService.removeModal(e)
                        }
                    }
                    return e.\u0275fac = function(t) {
                        return new(t || e)(o.Kb(y))
                    }, e.\u0275cmp = o.Eb({
                        type: e,
                        selectors: [
                            ["life-confirmation-modal"]
                        ],
                        decls: 13,
                        vars: 5,
                        consts: [
                            ["id", "confirmation-modal", "tabindex", "-1", "role", "dialog", 1, "confirmation-modal", "bg"],
                            [1, "icon-container"],
                            [1, "icon", "bg", "warning"],
                            [1, "title", "text", "ml", "b", "center", "uk-margin"],
                            [1, "subtitle", "text", "center", "grey2", "s", "uk-margin"],
                            [1, "actions", "uk-margin"],
                            [1, "uk-button", "primary", 3, "click"],
                            [1, "uk-button", "danger", 3, "click"]
                        ],
                        template: function(e, t) {
                            1 & e && (o.Qb(0, "div", 0), o.Qb(1, "div", 1), o.Qb(2, "div", 2), o.Lb(3, "i"), o.Pb(), o.Pb(), o.Qb(4, "div", 3), o.pc(5), o.Pb(), o.Qb(6, "div", 4), o.pc(7), o.Pb(), o.Qb(8, "div", 5), o.Qb(9, "button", 6), o.Yb("click", (function() {
                                return t.positiveAction.forClose ? t.close() : t.positiveAction.onClick()
                            })), o.pc(10), o.Pb(), o.Qb(11, "button", 7), o.Yb("click", (function() {
                                return t.negativeAction.forClose ? t.close() : t.negativeAction.onClick()
                            })), o.pc(12), o.Pb(), o.Pb(), o.Pb()), 2 & e && (o.zb(3), o.Ab("uk-icon", "icon: warning; ratio: 1.5"), o.zb(2), o.rc(" ", t.data.title, " "), o.zb(2), o.rc(" ", t.data.subTitle, " "), o.zb(3), o.rc(" ", t.positiveAction.title, " "), o.zb(2), o.rc(" ", t.negativeAction.title, " "))
                        },
                        styles: ["[_ngcontent-%COMP%]:root{--sc-bg:#fff;--pm-bg:#fbfcfd;--progress:#dbe0e6;--grey-1:#3d4752;--grey-4:#b6c5d5;--success:#26b7ba;--warning:#ff9f0a;--pm-text:#4a4a4a;--dashboard:#3f567a}.dark-mode[_ngcontent-%COMP%], [_ngcontent-%COMP%]:root{--grey-2:#3f567a;--grey-3:#b0c1d3;--pm-color:#fcbf12;--sc-color:#27b8bc;--danger:#eb5757;--info:#00f;--alt-text:#fafafa}.dark-mode[_ngcontent-%COMP%]{--pm-bg:#1f1f2d;--progress:#1f1f2d;--sc-bg:#232347;--grey-1:#8598ad;--grey-4:#8598ad;--success:#34c759;--warning:#ff0;--dashboard:#d9d9d9;--pm-text:#fff}.icon-container[_ngcontent-%COMP%]{width:100%}.icon-container[_ngcontent-%COMP%], .icon-container[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.icon-container[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{height:6.4rem;width:6.4rem;border-radius:3.2rem;color:#fff}.confirmation-modal[_ngcontent-%COMP%]{min-width:35rem}.actions[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;margin-top:1.5rem}.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:10px;flex-grow:1}"]
                    }), e
                })();
            var m = n("A1CT");
            let y = (() => {
                class e {
                    constructor(e, t, n, i, o, r) {
                        this._cfr = e, this._injector = t, this._utils = n, this._rendererFactory = i, this._document = o, this._appRef = r, this.modalDataSubject$ = new a.a, this.modalData = this.modalDataSubject$.asObservable(), this.modalStateSubject$ = new a.a, this.modalState = this.modalStateSubject$.asObservable(), this.modalComponents = []
                    }
                    renderInfoModal(e) {
                        this.renderModal(p, {
                            data: e
                        })
                    }
                    renderConfirmationModal(e) {
                        this.renderModal(h, {
                            data: e
                        })
                    }
                    _toggleModalOpenRouterOutlet(e) {
                        let t = this._rendererFactory.createRenderer(null, null),
                            n = this._document.querySelector(".router-outlet"),
                            a = n.classList.contains("modal-open");
                        e && !0 === e ? a || t.addClass(n, "modal-open") : void 0 === e || 0 != e ? a ? t.removeClass(n, "modal-open") : t.addClass(n, "modal-open") : a && t.removeClass(n, "modal-open")
                    }
                    renderModal(e, t, n) {
                        let a = this._rendererFactory.createRenderer(null, null);
                        const i = this._cfr.resolveComponentFactory(e).create(this._injector);
                        let o = this._utils.generateRandom();
                        i.instance.id = o, t ? (i.instance.data = t.data, i.instance.onClose = (...n) => {
                            t.persist || t.data.persist || (t.onClose ? t.onClose(...n) : this.removeModal(e))
                        }) : (i.instance.data = {}, i.instance.actions = {});
                        let r = this.modalComponents.push(i) - 1;
                        this._appRef.attachView(i.hostView);
                        const s = i.hostView.rootNodes[0];
                        let l = this._document.createElement("div"),
                            c = this._document.querySelector(".app");
                        a.addClass(l, "life-modal-container"), t && t.noPadding && a.addClass(l, "no-padding"), a.addClass(l, `modal-container-${o}`), a.setStyle(l, "z-index", 10002 + r), l.appendChild(s), a.appendChild(c, l);
                        let u = this._document.createElement("div");
                        if (a.addClass(u, "life-modal-overlay"), a.addClass(u, `modal-overlay-${o}`), a.setStyle(u, "z-index", 10001 + r), a.appendChild(c, u), this._toggleModalOpenRouterOutlet(!0), n) {
                            let t = setTimeout(() => {
                                this.removeModal(e), clearTimeout(t)
                            }, n)
                        }
                        return u.addEventListener("click", () => {
                            t.closeOnClickOutside && (t && t.onClose && t.onClose(), this.removeModal(e))
                        }), i.instance
                    }
                    _findModalById(e) {
                        let t;
                        return this.modalComponents.forEach((n, a) => {
                            n.instance.id == e && (t = n)
                        }), t
                    }
                    _removeModalById(e) {
                        let t = this._findModalById(e);
                        this.removeModal(t)
                    }
                    _removeModalComponent(e, t, n) {
                        const a = this._rendererFactory.createRenderer(null, null);
                        this._appRef.detachView(e.hostView), e.destroy(), this.modalComponents.splice(t, 1);
                        let i = this._document.querySelector(`.life-modal-container.modal-container-${n}`),
                            o = this._document.querySelector(`.life-modal-overlay.modal-overlay-${n}`),
                            r = this._document.querySelector(".app");
                        a.removeChild(r, i), a.removeChild(r, o), this._toggleModalOpenRouterOutlet(!1)
                    }
                    removeModal(e) {
                        let t, n, a;
                        this._rendererFactory.createRenderer(null, null), this.modalComponents.forEach((i, o) => {
                            i.instance instanceof e && (t = i, n = o, a = i.instance.id)
                        }), n < 0 || this._removeModalComponent(t, n, a)
                    }
                    _processInfoAlertModalData(e, t) {
                        let n, a, i, o;
                        switch (e) {
                            case "info":
                                n = t.title || "Information", a = "icon-info";
                                break;
                            case "error":
                                n = t.title || "Error", i = "failed.svg";
                                break;
                            case "success":
                                n = t.title || "Success", i = "successful.svg";
                                break;
                            case "email":
                                n = t.title || "Email", i = "mail.svg";
                                break;
                            case "auth":
                                n = t.title || "Auth", i = "password.svg"
                        }
                        o = o || e;
                        let r = Object.assign(Object.assign({}, t), {
                            title: n,
                            body: t.body,
                            extraData: {
                                type: o,
                                icon: a,
                                iconUrl: i
                            }
                        });
                        return console.log(r), r
                    }
                }
                return e.\u0275fac = function(t) {
                    return new(t || e)(o.Ub(o.j), o.Ub(o.r), o.Ub(m.a), o.Ub(o.E), o.Ub("DOCUMENT"), o.Ub(o.g))
                }, e.\u0275prov = o.Gb({
                    token: e,
                    factory: e.\u0275fac,
                    providedIn: "root"
                }), e
            })()
        },
        ZmpF: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return k
            }));
            var a = n("mrSG"),
                i = n("YxRf"),
                o = n.n(i),
                r = n("AytR"),
                s = n("OEUk"),
                l = n("1RkA"),
                c = n("d5+h"),
                u = n("QXf0"),
                d = n("Mryy"),
                p = n("2Vo4"),
                h = n("XNiG"),
                m = n("IzEk"),
                y = n("fXoL"),
                g = n("OC8m"),
                f = n("VQPA"),
                b = n("tyNb"),
                v = n("lGQG");
            const {
                CONTRACT_ADDRESS: w,
                ALEXA_ADDRESS: T,
                POOL_CONTRACT_ADDRESS: O,
                POOL_CONTRACT_ADDRESS_WRITE: A
            } = r.a;
            let k = (() => {
                class e {
                    constructor(e, t, n, a, i, o) {
                        this._window = e, this._localStorage = t, this._notifications = n, this._modalService = a, this._router = i, this._auth = o, this.activeSubject = new p.a(!1), this.activeDetailsSubject = new p.a({
                            address: null
                        }), this.active$ = this.activeSubject.asObservable(), this.activeDetails$ = this.activeDetailsSubject.asObservable(), this.addressChangedSubject = new h.a, this.addressChanged$ = this.addressChangedSubject.asObservable(), this.inPreviewMode = !1, this._localStorage.getItem("preview") ? this.NewPreviewMode(this._localStorage.getItem("preview")) : this._localStorage.getItem("login") && this.init()
                    }
                    showInvalidNetworkModal(e) {
                        this._modalService.renderInfoModal({
                            closeOnClickOutside: !1,
                            persist: !0,
                            onClose: () => {
                                console.log("clseod")
                            },
                            title: `You are not on ${e}`,
                            subTitle: `Please change your network to ${e}`,
                            type: "error"
                        })
                    }
                    initWeb3Provider() {
                        throw this._window.web3 && this._window.web3.currentProvider.isTrust ? this.web3 = new o.a(this._window.web3.currentProvider) : this._window.ethereum && (this.web3 = new o.a(this._window.ethereum)), new Error("No Provider Found")
                    }
                    init() {
                        return Object(a.a)(this, void 0, void 0, (function*() {
                            if (this._window.ethereum) {
                                this.web3 = new o.a(this._window.web3.currentProvider);
                                try {
                                    this.checkActive(), this.inPreviewMode || this.initEvents()
                                } catch (e) {
                                    console.log("ERIIR", e), this._notifications.error({
                                        title: "Metamask error",
                                        subtitle: "Please provide connection permissions " + e.message
                                    })
                                }
                            } else if (this._window.web3) {
                                this.web3 = new o.a(this._window.web3.currentProvider);
                                try {
                                    this.checkActive()
                                } catch (e) {
                                    this._notifications.error({
                                        title: "Metamask error",
                                        subtitle: "Please provide connection permissions " + e.message
                                    })
                                }
                            } else this.inPreviewMode || this._notifications.error({
                                title: "Web3 Error",
                                subtitle: "Metamask not found"
                            })
                        }))
                    }
                    enable() {
                        return Object(a.a)(this, void 0, void 0, (function*() {
                            if (!this.inPreviewMode)
                                if (this._window.web3 && this._window.web3.currentProvider.isTrust) {
                                    this.web3 = new o.a(this._window.web3.currentProvider);
                                    const e = yield this.web3.eth.getAccounts();
                                    yield this.getOfferContract(), yield this.getOpenAlexaContract(), this.activeAddress = this._getAddress(e[0]), this.activeSubject.next(!0), this.activeDetailsSubject.next({
                                        address: this._getAddress(e[0])
                                    })
                                } else if (this._window.ethereum) {
                                this.web3 = new o.a(this._window.web3.currentProvider);
                                try {
                                    const e = yield this._window.ethereum.enable();
                                    console.log(e), yield this.getOfferContract(), yield this.getOpenAlexaContract(), yield this.getAlexaContract(), this.activeSubject.next(!0), this.activeDetailsSubject.next({
                                        address: this._getAddress(this._window.ethereum.selectedAddress)
                                    })
                                } catch (e) {
                                    this._notifications.error({
                                        title: "Metamask error",
                                        subtitle: "Please provide connection permissions" + e.message
                                    })
                                }
                            } else this.inPreviewMode || this._notifications.error({
                                title: "Web3 Error",
                                subtitle: "Web3 not found"
                            })
                        }))
                    }
                    NewPreviewMode(e) {
                        return Object(a.a)(this, void 0, void 0, (function*() {
                            this.inPreviewMode = !0, this.init(), this._localStorage.setItem("preview", e), this.activeSubject.next(!0), this.activeDetailsSubject.next({
                                address: e,
                                previewMode: !0
                            })
                        }))
                    }
                    previewMode(e) {
                        return Object(a.a)(this, void 0, void 0, (function*() {
                            if (this._window.ethereum) {
                                this.web3 = new o.a(this._window.ethereum);
                                try {
                                    yield this._window.ethereum.enable(), yield this.getOfferContract(), yield this.getOpenAlexaContract(), this.activeSubject.next(!0), this.activeDetailsSubject.next({
                                        address: e,
                                        previewMode: !0
                                    })
                                } catch (t) {
                                    console.log("ERIIR", t), this._notifications.error({
                                        title: "Metamask error",
                                        subtitle: "Please provide connection permissions " + t.message
                                    })
                                }
                            } else this.inPreviewMode || this._notifications.error({
                                title: "Web3 Error",
                                subtitle: "Metamask not found"
                            })
                        }))
                    }
                    setupContracts() {
                        return Object(a.a)(this, void 0, void 0, (function*() {
                            const e = yield this.getOfferContract(), t = yield this.getOpenAlexaContract(), n = yield this.getPoolContract(), a = yield this.getPoolWriteContract();
                            this.offerContract = e, this.openAlexaContract = t, this.poolContract = n, this.poolwriteContract = a
                        }))
                    }
                    initEvents() {
                        let e = this._window.ethereum;
                        e && e.on && (e.on("accountsChanged", e => {
                            this.active$.pipe(Object(m.a)(1)).subscribe(t => {
                                t && (console.log(e), this.activeDetailsSubject.next({
                                    address: this._getAddress(e[0])
                                }), this.addressChangedSubject.next(this._getAddress(e[0])))
                            })
                        }), e.on("networkChanged", e => {
                            console.log("Network Changed"), console.log(e)
                        }))
                    }
                    getOfferContract() {
                        return Object(a.a)(this, void 0, void 0, (function*() {
                            try {
                                if (this.offerContract) return this.offerContract;
                                let e = yield new this.web3.eth.Contract(s, w);
                                return this.offerContract = e, e
                            } catch (e) {
                                console.error(e)
                            }
                        }))
                    }
                    getInstance() {
                        return Object(a.a)(this, void 0, void 0, (function*() {
                            return this.web3 || (yield this.init()), this.web3
                        }))
                    }
                    isMainnet() {
                        return Object(a.a)(this, void 0, void 0, (function*() {
                            return console.log(this.web3.currentProvider), 1 == (yield this.web3.eth.net.getId()) || this.web3.currentProvider.chainId == this.web3.utils.toHex("1")
                        }))
                    }
                    checkActive() {
                        var e, t;
                        return Object(a.a)(this, void 0, void 0, (function*() {
                            if (console.log(" THE MODE", this.inPreviewMode), this.inPreviewMode) return this.activeSubject.next(!0), this.activeDetailsSubject.next({
                                address: localStorage.getItem("preview")
                            }), void(yield this.setupContracts());
                            let n = !0;
                            this._window.ethereum || (n = !1), (null === (e = this._window.ethereum) || void 0 === e ? void 0 : e.selectedAddress) || (n = !1);
                            let a = yield this.isMainnet();
                            r.a.production && !a ? (n = !1, this._localStorage.removeItem("login"), this.showInvalidNetworkModal("Ethereum Mainnet")) : r.a.production || this.web3.currentProvider.chainId === this.web3.utils.toHex("3") || (n = !1, this.showInvalidNetworkModal("Ropsten Testnet")), this.activeSubject.next(n), n && (this.getActiveDetails(), this.activeDetailsSubject.next({
                                address: o.a.utils.toChecksumAddress(this._getAddress(null === (t = this._window.ethereum) || void 0 === t ? void 0 : t.selectedAddress))
                            }), this.setupContracts())
                        }))
                    }
                    _getAddress(e) {
                        return console.log(e), !r.a.production && localStorage.getItem("address") ? localStorage.getItem("address") : o.a.utils.toChecksumAddress(e)
                    }
                    getActiveDetails() {
                        return this.activeDetailsSubject.value
                    }
                    getBalance() {
                        return Object(a.a)(this, void 0, void 0, (function*() {
                            let e = yield this.web3.eth.getBalance(w);
                            return this.web3.utils.fromWei(e, "ether")
                        }))
                    }
                    getOpenAlexaContract() {
                        return Object(a.a)(this, void 0, void 0, (function*() {
                            try {
                                if (this.openAlexaContract) return this.openAlexaContract;
                                let e = yield new this.web3.eth.Contract(l, w);
                                return this.openAlexaContract = e, e
                            } catch (e) {
                                console.error(e)
                            }
                        }))
                    }
                    getPoolContract() {
                        return Object(a.a)(this, void 0, void 0, (function*() {
                            if (this.poolContract) return this.poolContract;
                            try {
                                console.log(O);
                                let e = yield new this.web3.eth.Contract(u, O);
                                return this.poolContract = e, e
                            } catch (e) {
                                throw console.error(e), e
                            }
                        }))
                    }
                    getPoolWriteContract() {
                        return Object(a.a)(this, void 0, void 0, (function*() {
                            if (this.poolwriteContract) return this.poolwriteContract;
                            try {
                                console.log(A);
                                let e = yield new this.web3.eth.Contract(d, A);
                                return this.poolwriteContract = e, e
                            } catch (e) {
                                throw console.error(e), e
                            }
                        }))
                    }
                    getAlexaContract() {
                        return Object(a.a)(this, void 0, void 0, (function*() {
                            try {
                                if (this.alexaContract) return this.alexaContract;
                                let e = yield new this.web3.eth.Contract(c, T);
                                return this.alexaContract = e, e
                            } catch (e) {
                                console.error(e)
                            }
                        }))
                    }
                    stop() {}
                    Logout() {
                        this.activeSubject.next(!1), this.activeDetailsSubject.next({
                            address: null
                        }), this._notifications.success({
                            title: "Logout Success"
                        }), this._localStorage.setItem("logout", !0), this._localStorage.removeItem("login"), this._localStorage.removeItem("preview"), this._window.location = "/auth", this._auth.Logout()
                    }
                    SetLoggedIn() {
                        this._localStorage.setItem("login", !0)
                    }
                }
                return e.\u0275fac = function(t) {
                    return new(t || e)(y.Ub("WINDOW"), y.Ub("LOCALSTORAGE"), y.Ub(g.a), y.Ub(f.a), y.Ub(b.a), y.Ub(v.a))
                }, e.\u0275prov = y.Gb({
                    token: e,
                    factory: e.\u0275fac,
                    providedIn: "root"
                }), e
            })()
        },
        "d5+h": function(e) {
            e.exports = JSON.parse('[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"UserAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"Levelno","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"Time","type":"uint256"}],"name":"buyLevelEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"UserAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"UserId","type":"uint256"},{"indexed":true,"internalType":"address","name":"ReferrerAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"ReferrerId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"Levelno","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"LevelPrice","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"Time","type":"uint256"}],"name":"getMoneyForLevelEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"UserAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"UserId","type":"uint256"},{"indexed":true,"internalType":"address","name":"ReferrerAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"ReferrerId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"Levelno","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"LevelPrice","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"Time","type":"uint256"}],"name":"lostMoneyForLevelEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"UserAddress","type":"address"},{"indexed":true,"internalType":"address","name":"ReferrerAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"Time","type":"uint256"}],"name":"regLevelEvent","type":"event"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"EarnedEth","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"LEVEL_PRICE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PERIOD_LENGTH","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"adminFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_level","type":"uint256"},{"internalType":"bytes32[3]","name":"_mrs","type":"bytes32[3]"},{"internalType":"uint8","name":"_v","type":"uint8"}],"name":"buyLevel","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"internalType":"bool","name":"_lockStatus","type":"bool"}],"name":"contractLock","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"createdDate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"currentId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address payable","name":"_toUser","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"failSafe","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"_userAddress","type":"address"}],"name":"findFreeReferrer","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getTotalEarnedEther","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"lockStatus","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"loopCheck","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"oldAlexa","outputs":[{"internalType":"contract OpenAlexalO","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"oldAlexaId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"limit","type":"uint256"}],"name":"oldAlexaSync","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"oldAlexaSyncClosed","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"ownerAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_referrerID","type":"uint256"},{"internalType":"bytes32[3]","name":"_mrs","type":"bytes32[3]"},{"internalType":"uint8","name":"_v","type":"uint8"}],"name":"regUser","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"setOldAlexaID","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_adminFee","type":"uint256"}],"name":"updateFeePercentage","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_level","type":"uint256"},{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"updatePrice","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_newToken","type":"address"}],"name":"updateToken","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"userList","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"users","outputs":[{"internalType":"bool","name":"isExist","type":"bool"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"referrerID","type":"uint256"},{"internalType":"uint256","name":"currentLevel","type":"uint256"},{"internalType":"uint256","name":"totalEarningEth","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"_userAddress","type":"address"},{"internalType":"uint256","name":"_level","type":"uint256"}],"name":"viewUserLevelExpired","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"_userAddress","type":"address"}],"name":"viewUserReferral","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"}]')
        },
        fDiI: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return p
            }));
            var a = n("XNiG"),
                i = n("1G5W"),
                o = n("fXoL"),
                r = n("FLxr"),
                s = n("q6s+"),
                l = n("ofXK");

            function c(e, t) {
                if (1 & e && (o.Qb(0, "span", 6), o.pc(1), o.Pb()), 2 & e) {
                    const e = o.ac();
                    o.zb(1), o.qc(e.activeLanguageName)
                }
            }

            function u(e, t) {
                if (1 & e) {
                    const e = o.Rb();
                    o.Qb(0, "li", 9), o.Yb("click", (function() {
                        o.jc(e);
                        const n = t.$implicit;
                        return o.ac(2).setLanguage(n)
                    })), o.Lb(1, "div", 10), o.Qb(2, "span", 11), o.pc(3), o.Pb(), o.Pb()
                }
                if (2 & e) {
                    const e = t.$implicit,
                        n = o.ac(2);
                    o.Bb("active", e.code == n.activeLanguage), o.zb(1), o.mc("background", "url(assets/countries/" + e.flag.toLowerCase() + ".svg)", o.Db), o.zb(2), o.qc(e.name)
                }
            }

            function d(e, t) {
                if (1 & e) {
                    const e = o.Rb();
                    o.Qb(0, "div", 7), o.Yb("mouseleave", (function(t) {
                        return o.jc(e), o.ac().MouseOut(t)
                    })), o.Qb(1, "ul"), o.nc(2, u, 4, 5, "li", 8), o.Pb(), o.Pb()
                }
                if (2 & e) {
                    const e = o.ac();
                    o.zb(2), o.dc("ngForOf", e.availableLangs)
                }
            }
            let p = (() => {
                class e {
                    constructor(e, t) {
                        this._translator = e, this._themeService = t, this.activeLanguage = "EN", this.activeLanguageName = "English", this.activeFlag = "en", this.showName = !1, this.theme = "light", this.destroy$ = new a.a, this.visible = !1, this.availableLangs = [{
                            flag: "EN",
                            code: "EN",
                            name: "English"
                        }, {
                            flag: "CN",
                            code: "ZH",
                            name: "Chinese"
                        }, {
                            flag: "PH",
                            code: "TL",
                            name: "Filipino"
                        }, {
                            flag: "KR",
                            code: "KO",
                            name: "Korean"
                        }, {
                            flag: "RU",
                            code: "RU",
                            name: "Russian"
                        }]
                    }
                    ngOnInit() {
                        this._translator.getLanguage().subscribe(e => {
                            e = e.toLowerCase(), console.log(" READ ", e), this.activeLanguage = e, this.activeLanguageName = this.availableLangs.filter(t => t.code.toLowerCase() == e)[0].name, console.log(this.activeLanguageName), this.activeFlag = this.availableLangs.filter(t => t.code.toLowerCase() == e)[0].flag, console.log(this.activeFlag)
                        }), this.subscribeTheme()
                    }
                    setLanguage(e) {
                        this._translator.setLanguage(e.code), this.visible = !1
                    }
                    MouseOut(e) {
                        this.visible = !1
                    }
                    subscribeTheme() {
                        this._themeService.getTheme().pipe(Object(i.a)(this.destroy$)).subscribe(e => {
                            console.log(e), this.theme = e
                        })
                    }
                    ngOnDestroy() {
                        this.destroy$.next(!0)
                    }
                }
                return e.\u0275fac = function(t) {
                    return new(t || e)(o.Kb(r.a), o.Kb(s.a))
                }, e.\u0275cmp = o.Eb({
                    type: e,
                    selectors: [
                        ["app-language-select"]
                    ],
                    inputs: {
                        showName: "showName"
                    },
                    decls: 6,
                    vars: 4,
                    consts: [
                        [1, "language-container"],
                        [1, "uk-inline"],
                        [1, "uk-flex", "uk-flex-middle"],
                        [1, "button", 3, "click"],
                        ["class", "text white s name", "noTrans", "", 4, "ngIf"],
                        ["class", "language-dropdown bg sc uk-open uk-dropdown ", 3, "mouseleave", 4, "ngIf"],
                        ["noTrans", "", 1, "text", "white", "s", "name"],
                        [1, "language-dropdown", "bg", "sc", "uk-open", "uk-dropdown", 3, "mouseleave"],
                        [3, "active", "click", 4, "ngFor", "ngForOf"],
                        [3, "click"],
                        [1, "img-flag"],
                        [1, "text"]
                    ],
                    template: function(e, t) {
                        1 & e && (o.Qb(0, "div", 0), o.Qb(1, "div", 1), o.Qb(2, "div", 2), o.Qb(3, "div", 3), o.Yb("click", (function() {
                            return t.visible = !t.visible
                        })), o.Pb(), o.nc(4, c, 2, 1, "span", 4), o.Pb(), o.nc(5, d, 3, 1, "div", 5), o.Pb(), o.Pb()), 2 & e && (o.zb(3), o.mc("background", "url(assets/icons/" + t.theme + "-" + t.activeFlag.toLowerCase() + ".png)", o.Db), o.zb(1), o.dc("ngIf", t.showName), o.zb(1), o.dc("ngIf", t.visible))
                    },
                    directives: [l.k, l.j],
                    styles: [".language-container[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{border:none;outline:none;padding:0;height:38px;width:38px;border-radius:20px;background-repeat:no-repeat!important;background-size:cover!important;background-position:50% 50%!important}.language-container[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:20px;width:20px;border-radius:20px}.language-container[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{margin-left:2rem}.language-container[_ngcontent-%COMP%]   .language-dropdown[_ngcontent-%COMP%]{max-height:30rem;overflow-y:auto;min-width:15rem;padding:1rem;right:0;margin-top:-5px}.language-container[_ngcontent-%COMP%]   .language-dropdown[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding:0}.language-container[_ngcontent-%COMP%]   .language-dropdown[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style:none;padding:1rem .8rem;display:flex;justify-content:space-between;align-items:center;cursor:pointer}.language-container[_ngcontent-%COMP%]   .language-dropdown[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .img-flag[_ngcontent-%COMP%]{height:3.2rem;width:3.2rem;border-radius:1.6rem;background-repeat:no-repeat!important;background-size:cover!important;background-position:50% 50%!important}.language-container[_ngcontent-%COMP%]   .language-dropdown[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{background:var(--sc-color);margin-left:-1rem;margin-right:-1rem;padding-left:2rem;padding-right:2rem;color:#fff}.language-container[_ngcontent-%COMP%]   .language-dropdown[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   span.text[_ngcontent-%COMP%]{color:#fff}"]
                }), e
            })()
        },
        lGQG: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return l
            }));
            var a = n("AytR"),
                i = n("jtHE"),
                o = n("vkgz"),
                r = n("fXoL"),
                s = n("tk/3");
            let l = (() => {
                class e {
                    constructor(e) {
                        this._http = e, this.loggedIn$ = new i.a
                    }
                    getLoggedIn() {
                        return this.loggedIn$.asObservable()
                    }
                    Login(e) {
                        return console.log("Logging in"), this._http.post(a.a.BACKEND + "/v1/user/login", e).pipe(Object(o.a)(() => {
                            console.log("Setting Logged In ture"), this.setLoggedIn(!0)
                        }))
                    }
                    Logout() {
                        this.loggedIn$.next(!1)
                    }
                    setLoggedIn(e) {
                        this.loggedIn$.next(e)
                    }
                }
                return e.\u0275fac = function(t) {
                    return new(t || e)(r.Ub(s.b))
                }, e.\u0275prov = r.Gb({
                    token: e,
                    factory: e.\u0275fac,
                    providedIn: "root"
                }), e
            })()
        },
        "q6s+": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return o
            }));
            var a = n("2Vo4"),
                i = n("fXoL");
            let o = (() => {
                class e {
                    constructor(e) {
                        this._storage = e, this.themeSubject = new a.a("light"), this._init()
                    }
                    _init() {
                        if (!this._storage) return;
                        let e = this._storage.getItem("theme");
                        !e || "light" != e && "dark" != e || this.themeSubject.next(e)
                    }
                    getTheme() {
                        return this.themeSubject.asObservable()
                    }
                    showDarkness() {
                        this.themeSubject.next("dark"), this._storage.setItem("theme", "dark")
                    }
                    showLight() {
                        this.themeSubject.next("light"), this._storage.setItem("theme", "light")
                    }
                    toggleTheme() {
                        let e = "light" == this.themeSubject.value ? "dark" : "light";
                        this._storage.setItem("theme", e), this.themeSubject.next(e)
                    }
                }
                return e.\u0275fac = function(t) {
                    return new(t || e)(i.Ub("LOCALSTORAGE"))
                }, e.\u0275prov = i.Gb({
                    token: e,
                    factory: e.\u0275fac,
                    providedIn: "root"
                }), e
            })()
        },
        yLpj: function(e, t) {
            var n;
            n = function() {
                return this
            }();
            try {
                n = n || new Function("return this")()
            } catch (a) {
                "object" == typeof window && (n = window)
            }
            e.exports = n
        },
        zUnb: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("fXoL"),
                i = n("AytR"),
                o = n("3Pt+"),
                r = n("jhN1"),
                s = n("tk/3"),
                l = n("tyNb");
            const c = [{
                path: "",
                loadChildren: () => n.e(2).then(n.bind(null, "TcYg")).then(e => e.OpalandingModule)
            }];
            let u = (() => {
                class e {}
                return e.\u0275mod = a.Ib({
                    type: e
                }), e.\u0275inj = a.Hb({
                    factory: function(t) {
                        return new(t || e)
                    },
                    imports: [
                        [l.b.forRoot(c, {
                            initialNavigation: "enabled"
                        })], l.b
                    ]
                }), e
            })();
            var d = n("mrSG"),
                p = n("IzEk"),
                h = n("zP0r"),
                m = n("ZmpF"),
                y = n("lGQG"),
                g = n("2Vo4"),
                f = n("HDdC"),
                b = n("LRne"),
                v = n("Cfvw"),
                w = n("pLZG"),
                T = n("lJxs"),
                O = n("eIep"),
                A = n("A1CT");
            const k = ["", "#283593", "#1DE9B6", "#0288D1", "#662D91", "#0BE881", "#0FBCF9", "#FFA801", "#ef5350"];
            let I = (() => {
                class e {
                    constructor(e, t, n) {
                        this._web3 = e, this._utils = t, this._http = n, this._pools = [], this._referrals = null, this.initialized$ = new g.a(!1), this._userPoolDetails = [], this._addressIdMap = {}
                    }
                    get highestPriority() {
                        if (this._highestPriority) return this._highestPriority;
                        throw new Error("Highest priority is not yet initialized")
                    }
                    getContract() {
                        return Object(d.a)(this, void 0, void 0, (function*() {
                            if (this._contract) return this._contract;
                            try {
                                let e = yield this._web3.getPoolContract();
                                return this._contract = e, e
                            } catch (e) {
                                throw console.error(e), new Error("Error in compiling Pool Contract")
                            }
                        }))
                    }
                    fetchPool(e) {
                        return Object(d.a)(this, void 0, void 0, (function*() {
                            if (this._pools && this._pools.length > 0) {
                                let t = this._pools.find(t => t.id == e);
                                if (t) return t
                            }
                            try {
                                let t = yield this.getContract(), n = yield t.methods.pools(e).call(), a = this._utils.scoop(n, ["id", "requiredLevel", "slotPrice", "ticket", "slots", "returnSlots", "boost1returnSlots", "boost2returnSlots", "totalUsers", "active"]);
                                return this._pools.push(Object.assign(Object.assign({}, a), {
                                    name: `Pool ${a.id}`,
                                    color: k[e],
                                    boost: [!1, !1],
                                    joined: !1,
                                    percent: 0
                                })), n
                            } catch (t) {
                                console.error(t)
                            }
                        }))
                    }
                    fetchAllPools() {
                        return Object(d.a)(this, void 0, void 0, (function*() {
                            try {
                                let e = [];
                                for (let t = 1; t <= i.a.NUM_POOLS; t++) e.push(this.fetchPool(t));
                                return yield Promise.all(e), this._pools
                            } catch (e) {
                                throw console.error(e), e
                            }
                        }))
                    }
                    initVariables() {
                        return Object(d.a)(this, void 0, void 0, (function*() {
                            console.log("Initializing Pool Variables");
                            try {
                                let e = yield this.getContract();
                                this._highestPriority = yield e.methods.getHighestPriority().call(), console.log(this._highestPriority), this.initialized$.next(!0), console.log("POOL variables initialized")
                            } catch (e) {
                                console.error(e)
                            }
                        }))
                    }
                    onDistribute() {
                        return this.initialized$.asObservable().pipe(Object(w.a)(e => e), Object(T.a)(e => {
                            let t = this._contract.events.DistributeEvent({
                                fromBlock: 0
                            }, (e, t) => {});
                            return new f.a(e => {
                                t.on("data", t => Object(d.a)(this, void 0, void 0, (function*() {
                                    let n = this._utils.scoop(t.returnValues, ["amount", "sponsor", "receiver", {
                                            name: "pool",
                                            type: "number"
                                        }, {
                                            name: "time",
                                            type: "number"
                                        }]),
                                        {
                                            address: a
                                        } = this._web3.getActiveDetails();
                                    if (n.receiver != a && n.sponsor != a) return;
                                    let i = yield this._web3.getInstance();
                                    n.amount && (n.amount = i.utils.fromWei(n.amount)), n.time && (n.time = 1e3 * parseInt(n.time)), e.next(n)
                                }))), t.on("error", t => {
                                    e.error(t)
                                })
                            })
                        }), Object(O.a)(e => e))
                    }
                    getWaitlist({
                        id: e,
                        address: t
                    }) {
                        return this._http.post("https://testing2.openalexa.io/backend/v1/user/mypool-waitlist", {
                            id: e,
                            address: t
                        }).pipe(Object(T.a)(e => e.data))
                    }
                    onPoolJoin() {
                        console.log(" -======================================== Subcribing to pool join events");
                        let {
                            address: e
                        } = this._web3.getActiveDetails();
                        return this.initialized$.asObservable().pipe(Object(w.a)(e => e), Object(T.a)(t => {
                            let n = this._contract.events.PoolJoinEvent({
                                fromBlock: 0
                            }, (e, t) => {});
                            return console.log(n), new f.a(t => {
                                n.on("data", n => Object(d.a)(this, void 0, void 0, (function*() {
                                    let a = this._utils.scoop(n.returnValues, ["amount", {
                                            name: "pool",
                                            type: "number"
                                        }, "referrer", {
                                            name: "time",
                                            type: "number"
                                        }, "user", {
                                            name: "userId",
                                            type: "number"
                                        }]),
                                        i = yield this.getUserInfo(), o = yield this._web3.getInstance();
                                    a.amount && (a.amount = o.utils.fromWei(a.amount)), i.id != a.userId && e != a.referrer || t.next(a)
                                }))), n.on("error", e => {
                                    t.error(e)
                                })
                            })
                        }), Object(O.a)(e => e))
                    }
                    getReferrals() {
                        return Object(d.a)(this, void 0, void 0, (function*() {
                            if (this._referrals) return this._referrals;
                            try {
                                let e = yield this.getContract(), {
                                    address: t
                                } = yield this._web3.getActiveDetails(), n = yield e.methods.userReferrals(t).call();
                                return this._referrals = n, n
                            } catch (e) {
                                throw console.error(e), e
                            }
                        }))
                    }
                    getUserPoolDetails(e) {
                        return Object(d.a)(this, void 0, void 0, (function*() {
                            if (this._userPoolDetails[e]) return this._userPoolDetails[e];
                            try {
                                let t = yield this.getContract(), {
                                    address: n
                                } = yield this._web3.getActiveDetails(), a = yield t.methods.userPoolDetails(n, e).call();
                                return a.poolSlots = parseInt(a.poolSlots), a.booster = a.booster.map(e => parseInt(e)), this._userPoolDetails[e] = {
                                    booster: a.booster,
                                    poolSlots: a.poolSlots
                                }, a
                            } catch (t) {
                                throw console.error(t), new Error(t)
                            }
                        }))
                    }
                    getUserAllPoolsDetails() {
                        return Object(d.a)(this, void 0, void 0, (function*() {
                            try {
                                let e = [];
                                for (let t = 1; t <= i.a.NUM_POOLS; t++) e.push(this.getUserPoolDetails(t));
                                return yield Promise.all(e), this._userPoolDetails
                            } catch (e) {
                                console.error(e)
                            }
                        }))
                    }
                    getUserInfo() {
                        return Object(d.a)(this, void 0, void 0, (function*() {
                            if (this._userInfo) return this._userInfo;
                            try {
                                let e = yield this.getContract(), {
                                    address: t
                                } = yield this._web3.getActiveDetails(), n = yield e.methods.users(t).call();
                                return n = this._utils.scoop(n, [{
                                    name: "id",
                                    type: "number"
                                }, {
                                    name: "referrerCount",
                                    type: "number"
                                }, {
                                    name: "referrerID",
                                    type: "number"
                                }, {
                                    name: "onPriority",
                                    type: "number"
                                }]), this._userInfo = n, n
                            } catch (e) {
                                throw console.error(e), e
                            }
                        }))
                    }
                    getPrimeRefId() {
                        if (this._primeRefId) return Object(b.a)(this._primeRefId);
                        try {
                            return Object(v.a)(this.getUserInfo()).pipe(Object(O.a)(e => {
                                if (e.referrerID) return Object(b.a)(e.referrerID); {
                                    let {
                                        address: e
                                    } = this._web3.getActiveDetails();
                                    return Object(v.a)(this.getOpenAlexaId()).pipe(Object(O.a)(t => this.getWaitlist({
                                        address: e,
                                        id: t
                                    }).pipe(Object(T.a)(e => e.user && e.user.refId ? e.user.refId : null))))
                                }
                            }))
                        } catch (e) {
                            throw console.error(e), e
                        }
                    }
                    getMultipleOpenAlexaIds(e) {
                        return Object(d.a)(this, void 0, void 0, (function*() {
                            let t = [];
                            for (let n = 0; n < e.length; n++) {
                                let a = yield this.getOpenAlexaId(e[n]);
                                t.push(a)
                            }
                            return t
                        }))
                    }
                    getOpenAlexaId(e) {
                        return Object(d.a)(this, void 0, void 0, (function*() {
                            if (this._addressIdMap[e]) return this._addressIdMap[e];
                            try {
                                let t = yield this.getContract();
                                if (!e) {
                                    let {
                                        address: t
                                    } = yield this._web3.getActiveDetails();
                                    e = t
                                }
                                let n = yield t.methods.getOpenalexaId(e).call();
                                return this._addressIdMap[e] = n, n
                            } catch (t) {
                                throw console.error(t), t
                            }
                        }))
                    }
                    participatePool(e) {
                        return Object(d.a)(this, void 0, void 0, (function*() {
                            try {
                                let t = yield this._web3.getPoolWriteContract(), {
                                    address: n
                                } = yield this._web3.getActiveDetails(), a = {
                                    from: n
                                };
                                this._http.post(i.a.BACKEND + "/v1/user/reset", {
                                    address: n
                                }).subscribe(e => {}), console.log(e.pid, e.referrerId, e.isPriority);
                                const o = yield t.methods.participatePool(e.pid, e.referrerId, e.isPriority).estimateGas({
                                    from: n,
                                    value: e.ticket
                                });
                                return yield t.methods.participatePool(e.pid, e.referrerId, e.isPriority).send(Object.assign(Object.assign({}, a), {
                                    value: e.ticket,
                                    gasLimit: Math.round(o + .1 * o)
                                }))
                            } catch (t) {
                                throw console.error(t), t
                            }
                        }))
                    }
                }
                return e.\u0275fac = function(t) {
                    return new(t || e)(a.Ub(m.a), a.Ub(A.a), a.Ub(s.b))
                }, e.\u0275prov = a.Gb({
                    token: e,
                    factory: e.\u0275fac,
                    providedIn: "root"
                }), e
            })();
            var x = n("KSpV"),
                P = n("5xCG"),
                E = n("OC8m"),
                L = n("q6s+"),
                C = n("FLxr"),
                _ = n("PIAZ"),
                M = n("ofXK");

            function S(e, t) {
                1 & e && a.Mb(0)
            }

            function D(e, t) {
                if (1 & e && (a.Ob(0), a.nc(1, S, 1, 0, "ng-container", 6), a.Nb()), 2 & e) {
                    a.ac(2);
                    const e = a.hc(5);
                    a.zb(1), a.dc("ngTemplateOutlet", e)
                }
            }

            function j(e, t) {
                1 & e && a.Mb(0)
            }

            function N(e, t) {
                if (1 & e && (a.Ob(0), a.nc(1, j, 1, 0, "ng-container", 6), a.Nb()), 2 & e) {
                    a.ac(2);
                    const e = a.hc(3);
                    a.zb(1), a.dc("ngTemplateOutlet", e)
                }
            }

            function U(e, t) {
                if (1 & e) {
                    const e = a.Rb();
                    a.Qb(0, "div", 4), a.Yb("@slideLeft.done", (function(t) {
                        return a.jc(e), a.ac().onCloseAnimationEnd(t)
                    })), a.nc(1, D, 2, 1, "ng-container", 5), a.nc(2, N, 2, 1, "ng-container", 5), a.Pb()
                }
                if (2 & e) {
                    const e = a.ac();
                    a.dc("@slideLeft", e.viewState), a.zb(1), a.dc("ngIf", "eth" != e.type), a.zb(1), a.dc("ngIf", "eth" == e.type)
                }
            }

            function H(e, t) {
                1 & e && a.Mb(0)
            }

            function R(e, t) {
                if (1 & e && (a.Ob(0), a.nc(1, H, 1, 0, "ng-container", 6), a.Nb()), 2 & e) {
                    a.ac(2);
                    const e = a.hc(5);
                    a.zb(1), a.dc("ngTemplateOutlet", e)
                }
            }

            function W(e, t) {
                1 & e && a.Mb(0)
            }

            function F(e, t) {
                if (1 & e && (a.Ob(0), a.nc(1, W, 1, 0, "ng-container", 6), a.Nb()), 2 & e) {
                    a.ac(2);
                    const e = a.hc(3);
                    a.zb(1), a.dc("ngTemplateOutlet", e)
                }
            }

            function z(e, t) {
                if (1 & e) {
                    const e = a.Rb();
                    a.Qb(0, "div", 4), a.Yb("@slideDown.done", (function(t) {
                        return a.jc(e), a.ac().onCloseAnimationEnd(t)
                    })), a.nc(1, R, 2, 1, "ng-container", 5), a.nc(2, F, 2, 1, "ng-container", 5), a.Pb()
                }
                if (2 & e) {
                    const e = a.ac();
                    a.dc("@slideDown", e.viewState), a.zb(1), a.dc("ngIf", "eth" != e.type), a.zb(1), a.dc("ngIf", "eth" == e.type)
                }
            }

            function B(e, t) {
                if (1 & e && (a.Qb(0, "div", 7), a.Qb(1, "div", 8), a.Lb(2, "img", 9), a.Pb(), a.Qb(3, "div", 10), a.Qb(4, "div", 11), a.pc(5), a.Pb(), a.Qb(6, "div", 12), a.pc(7), a.Pb(), a.Pb(), a.Qb(8, "div", 13), a.Lb(9, "img", 14), a.Pb(), a.Pb()), 2 & e) {
                    const e = a.ac();
                    a.zb(5), a.qc(e.message.title), a.zb(2), a.qc(e.message.subtitle)
                }
            }

            function q(e, t) {
                1 & e && a.Mb(0)
            }
            const Y = function(e) {
                    return [e]
                },
                G = function(e) {
                    return {
                        type: e
                    }
                };

            function Q(e, t) {
                if (1 & e && (a.Qb(0, "div", 15), a.Qb(1, "div", 16), a.nc(2, q, 1, 0, "ng-container", 17), a.Pb(), a.Qb(3, "div"), a.Qb(4, "div", 18), a.pc(5), a.Pb(), a.Qb(6, "div", 19), a.pc(7), a.Pb(), a.Pb(), a.Pb()), 2 & e) {
                    const e = a.ac(),
                        t = a.hc(7);
                    a.zb(1), a.dc("ngClass", a.fc(5, Y, e.type ? e.type : "")), a.zb(1), a.dc("ngTemplateOutlet", t)("ngTemplateOutletContext", a.fc(7, G, e.type)), a.zb(3), a.rc(" ", e.message.title, " "), a.zb(2), a.rc(" ", e.message.subtitle, " ")
                }
            }

            function V(e, t) {
                1 & e && a.Lb(0, "span", 24)
            }

            function K(e, t) {
                1 & e && a.Lb(0, "span", 25)
            }

            function $(e, t) {
                1 & e && a.Lb(0, "span", 26)
            }

            function X(e, t) {
                1 & e && (a.Ob(0, 20), a.nc(1, V, 1, 0, "span", 21), a.nc(2, K, 1, 0, "span", 22), a.nc(3, $, 1, 0, "span", 23), a.Nb()), 2 & e && (a.dc("ngSwitch", t.type), a.zb(1), a.dc("ngSwitchCase", "success"), a.zb(1), a.dc("ngSwitchCase", "error"))
            }
            let J = (() => {
                class e {
                    constructor(e, t, n, i) {
                        this._utils = e, this._host = t, this._media = n, this.id = this._utils.generateRandom(), this.type = "info", this.actions = [], this.closed = new a.n, this.onViewInit = new a.n
                    }
                    get top() {
                        return console.log(this.notificationContainer.style.top), parseInt(this.notificationContainer.style.top.replace("px", "")) || 0
                    }
                    get notificationContainer() {
                        return this._host.nativeElement.querySelector(".notification")
                    }
                    ngAfterViewInit() {
                        console.log(this._host.nativeElement)
                    }
                    set top(e) {
                        this.notificationContainer.style.top = e + "px"
                    }
                    close() {
                        this.viewState = "out"
                    }
                    ngOnInit() {
                        this._media.isMobile.subscribe(e => {
                            this.isMobile = e, this.viewState = "in"
                        })
                    }
                    onCloseAnimationEnd(e) {
                        "out" == e.toState && this.closed.emit(!0)
                    }
                }
                return e.\u0275fac = function(t) {
                    return new(t || e)(a.Kb(A.a), a.Kb(a.l), a.Kb(P.b), a.Kb(a.B))
                }, e.\u0275cmp = a.Eb({
                    type: e,
                    selectors: [
                        ["app-notification"]
                    ],
                    inputs: {
                        message: ["mesage", "message"],
                        type: "type",
                        actions: "actions"
                    },
                    outputs: {
                        closed: "closed"
                    },
                    decls: 8,
                    vars: 2,
                    consts: [
                        ["class", "notification", 4, "ngIf"],
                        ["ethNotificationContent", ""],
                        ["notificationContent", ""],
                        ["icon", ""],
                        [1, "notification"],
                        [4, "ngIf"],
                        [4, "ngTemplateOutlet"],
                        [1, "notification__inner", "d-flex", "justify-content-between", "align-items-center"],
                        [1, "avatar"],
                        ["src", "assets/avatar.png"],
                        [1, "message-container"],
                        [1, "text", "title", "b", "pm", "m"],
                        [1, "text", "sub-title", "sm"],
                        [1, "context-image"],
                        ["src", "assets/ethereum.svg"],
                        [1, "notification__inner", "uk-flex", "uk-flex-middle"],
                        [1, "icon", 3, "ngClass"],
                        [4, "ngTemplateOutlet", "ngTemplateOutletContext"],
                        [1, "title", "text", "white", "b", "s"],
                        [1, "subtitle", "text", "white", "xs"],
                        [3, "ngSwitch"],
                        ["uk-icon", "icon: check; ratio: 1.5", 4, "ngSwitchCase"],
                        ["uk-icon", "icon: warning; ratio: 1.5", 4, "ngSwitchCase"],
                        ["uk-icon", "icon: info; ratio: 1.5", 4, "ngSwitchDefault"],
                        ["uk-icon", "icon: check; ratio: 1.5"],
                        ["uk-icon", "icon: warning; ratio: 1.5"],
                        ["uk-icon", "icon: info; ratio: 1.5"]
                    ],
                    template: function(e, t) {
                        1 & e && (a.nc(0, U, 3, 3, "div", 0), a.nc(1, z, 3, 3, "div", 0), a.nc(2, B, 10, 2, "ng-template", null, 1, a.oc), a.nc(4, Q, 8, 9, "ng-template", null, 2, a.oc), a.nc(6, X, 4, 3, "ng-template", null, 3, a.oc)), 2 & e && (a.dc("ngIf", !t.isMobile), a.zb(1), a.dc("ngIf", t.isMobile))
                    },
                    directives: [M.k, M.o, M.i, M.l, M.m, M.n],
                    styles: ["[_ngcontent-%COMP%]:root{--sc-bg:#fff;--pm-bg:#fbfcfd;--progress:#dbe0e6;--grey-1:#3d4752;--grey-4:#b6c5d5;--success:#26b7ba;--warning:#ff9f0a;--pm-text:#4a4a4a;--dashboard:#3f567a}.dark-mode[_ngcontent-%COMP%], [_ngcontent-%COMP%]:root{--grey-2:#3f567a;--grey-3:#b0c1d3;--pm-color:#fcbf12;--sc-color:#27b8bc;--danger:#eb5757;--info:#00f;--alt-text:#fafafa}.dark-mode[_ngcontent-%COMP%]{--pm-bg:#1f1f2d;--progress:#1f1f2d;--sc-bg:#232347;--grey-1:#8598ad;--grey-4:#8598ad;--success:#34c759;--warning:#ff0;--dashboard:#d9d9d9;--pm-text:#fff}.context-image[_ngcontent-%COMP%]{height:100%;margin-top:-2rem}.context-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:8rem}.avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:6rem}.notification[_ngcontent-%COMP%]{position:fixed;left:4%;bottom:5rem;width:auto;padding:.8rem 1.2rem;max-width:100vw;z-index:20000;box-sizing:border-box;background-color:rgba(252,191,18,.2);border-radius:.8rem}.notification__inner[_ngcontent-%COMP%]{position:relative}.notification__inner[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{text-align:left;padding-bottom:.4rem}.notification__inner[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{text-align:left}.notification__inner[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{line-height:2.4rem}.notification__inner[_ngcontent-%COMP%]   .message-container[_ngcontent-%COMP%]{margin:0 1rem}.notification__inner[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]{top:0;right:2rem;position:absolute;color:#b0c1d3;cursor:pointer}.notification__inner[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{border-radius:.8rem;color:#fff;height:4.5rem;width:4.5rem;margin-right:1.2rem;display:flex;align-items:center;justify-content:center}.notification__inner[_ngcontent-%COMP%]   .icon.error[_ngcontent-%COMP%]{background-color:var(--danger)}.notification__inner[_ngcontent-%COMP%]   .icon.info[_ngcontent-%COMP%]{background-color:var(--info)}.notification__inner[_ngcontent-%COMP%]   .icon.success[_ngcontent-%COMP%]{background-color:var(--success)}@media (max-width:768px){.notification[_ngcontent-%COMP%]{position:fixed;bottom:0;right:0;left:0;background-color:#fcbf12;border-radius:0;border-top-left-radius:.8rem;border-top-right-radius:.8rem}.notification__inner[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:1.6rem;color:#fff}.notification__inner[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{font-size:1.1rem}}"],
                    data: {
                        animation: [_.d, _.b, _.c]
                    }
                }), e
            })();
            var Z = n("5+tZ");
            const ee = ["container"];
            let te = (() => {
                    class e {
                        constructor(e, t, n) {
                            this._notifications = e, this._cfr = t, this._mediaQuery = n, this.notificationRefs = [], this.curTop = 0
                        }
                        ngOnInit() {
                            this._notifications.newNotification$.subscribe(e => {
                                this._createNotificationComponent(e)
                            })
                        }
                        _makeDefaultOptions(e) {
                            return e.options = {
                                persist: !1,
                                duration: 4e3
                            }, e
                        }
                        _createNotificationComponent(e) {
                            this.container.clear();
                            let t = this._cfr.resolveComponentFactory(J),
                                n = this.container.createComponent(t);
                            if (n.instance.message = e.message, n.instance.type = e.type, n.instance.closed.pipe(Object(Z.a)(() => this._mediaQuery.isMobile.pipe(Object(T.a)(e => ({
                                    isMobile: e
                                }))))).subscribe(({
                                    isMobile: e
                                }) => {
                                    let t = this.notificationRefs.findIndex(e => e.instance.id == n.instance.id);
                                    n.destroy(), t > 0 && this._removeFromNotificationsRefs(t, e)
                                }), n.instance.onViewInit.pipe(Object(Z.a)(({
                                    height: e
                                }) => this._mediaQuery.isMobile.pipe(Object(T.a)(t => ({
                                    height: e,
                                    isMobile: t
                                }))))).subscribe(({
                                    height: e,
                                    isMobile: t
                                }) => {
                                    t || this._shiftNotificationsDown(e), this.notificationRefs.unshift(n), console.log(this.notificationRefs.map(e => e.instance.id))
                                }), e.options || this._makeDefaultOptions(e), !e.options.persist) {
                                let t = setTimeout(() => {
                                    n.instance.close(), clearTimeout(t)
                                }, e.options.duration)
                            }
                            return n
                        }
                        _shiftNotificationsDown(e) {
                            0 != this.notificationRefs.length && this.notificationRefs.forEach((t, n) => {
                                t.instance.top = t.instance.top + e + 20
                            })
                        }
                        _shiftNotificationsUp(e, t) {
                            console.log(this.notificationRefs.map(e => e.instance.id)), console.log(e);
                            for (let n = e; n < this.notificationRefs.length; n++) {
                                let e = this.notificationRefs[n];
                                console.log(n), e.instance.top = e.instance.top - t - 20
                            }
                        }
                        _removeFromNotificationsRefs(e, t) {
                            console.log(e);
                            let n = this.notificationRefs.splice(e, 1);
                            !t && n && n.length > 0 && this._shiftNotificationsUp(e, n[0].instance.height)
                        }
                    }
                    return e.\u0275fac = function(t) {
                        return new(t || e)(a.Kb(E.a), a.Kb(a.j), a.Kb(P.b))
                    }, e.\u0275cmp = a.Eb({
                        type: e,
                        selectors: [
                            ["app-notification-container"]
                        ],
                        viewQuery: function(e, t) {
                            var n;
                            1 & e && a.sc(ee, !0, a.N), 2 & e && a.gc(n = a.Zb()) && (t.container = n.first)
                        },
                        decls: 3,
                        vars: 0,
                        consts: [
                            [1, "notifications-container"],
                            [1, "notifications-container__inner"],
                            ["container", ""]
                        ],
                        template: function(e, t) {
                            1 & e && (a.Qb(0, "div", 0), a.Lb(1, "div", 1, 2), a.Pb())
                        },
                        styles: [""]
                    }), e
                })(),
                ne = (() => {
                    class e {
                        constructor(e, t, n, a, i, o, r, s) {
                            this._web3 = e, this._auth = t, this._pools = n, this._offers = a, this._mq = i, this._notifications = o, this._theme = r, this._translator = s, this.title = "OpenAlexa Offers Page", this.fethched = !1
                        }
                        ngOnInit() {}
                        setupNotification(e) {
                            return Object(d.a)(this, void 0, void 0, (function*() {
                                if (!e) return;
                                let t = "0",
                                    n = yield this._web3.getInstance(), a = !0;
                                switch (e.offer) {
                                    case 1:
                                    case "1":
                                        this._offers.levelOneCashBackAmt ? t = yield n.utils.fromWei(this._offers.levelOneCashBackAmt): a = !1;
                                        break;
                                    case 2:
                                    case "2":
                                        this._offers.goLevelSixAmt ? t = yield n.utils.fromWei(this._offers.goLevelSixAmt): a = !1;
                                        break;
                                    case 3:
                                    case "3":
                                        this._offers.leadersPoolAmount ? t = yield n.utils.fromWei(this._offers.leadersPoolAmount): a = !1
                                }
                                a && this._notifications.eth({
                                    title: `User ${e.user._userId} got ${t} Eth `
                                })
                            }))
                        }
                        fetchClaimsAndUsers() {
                            return Object(d.a)(this, void 0, void 0, (function*() {
                                this._web3.activeSubject.pipe(Object(p.a)(1)).subscribe(e => Object(d.a)(this, void 0, void 0, (function*() {
                                    const t = [8e3, 5e3, 1e4, 9500, 6500];
                                    if (e) try {
                                        let e = yield this._offers.fetchClaimsAndUsers();
                                        console.log(e);
                                        let n = 0,
                                            a = setInterval(() => {
                                                n == e.length && clearInterval(a), this.setupNotification(e[n]), n++
                                            }, t[0])
                                    } catch (n) {
                                        console.error(n)
                                    }
                                })))
                            }))
                        }
                        initialize() {
                            return Object(d.a)(this, void 0, void 0, (function*() {
                                this._auth.getLoggedIn().subscribe(e => {})
                            }))
                        }
                        subscribeTheme() {
                            this._theme.getTheme().subscribe(e => {
                                this.theme = e, console.log(this.theme)
                            })
                        }
                        subscribeLanguage() {
                            this.activeLanguage = this._translator.language, this._translator.getLanguage().pipe(Object(h.a)(1)).subscribe(e => {
                                this._translator.translateTextNodes(document.body, {
                                    source: this.activeLanguage,
                                    target: e
                                }), this.activeLanguage = e
                            })
                        }
                        ngAfterViewInit() {
                            this.subscribeLanguage(), this.initialize(), this._web3.web3 && setTimeout(() => {
                                this.fetchClaimsAndUsers()
                            }, 4e3), this._mq._handleBodyResize().subscribe(), this.subscribeTheme(), this.observer = new MutationObserver(e => {
                                e.forEach(e => {
                                    if (e.addedNodes.length)
                                        for (let t = 0; t < e.addedNodes.length; t++) this._translator.translateTextNodes(e.addedNodes[t], {
                                            source: "en",
                                            target: this._translator.language
                                        })
                                })
                            }), this.observer.observe(document.body, {
                                subtree: !0,
                                childList: !0
                            })
                        }
                    }
                    return e.\u0275fac = function(t) {
                        return new(t || e)(a.Kb(m.a), a.Kb(y.a), a.Kb(I), a.Kb(x.a), a.Kb(P.b), a.Kb(E.a), a.Kb(L.a), a.Kb(C.a))
                    }, e.\u0275cmp = a.Eb({
                        type: e,
                        selectors: [
                            ["app-root"]
                        ],
                        decls: 4,
                        vars: 2,
                        consts: [
                            [1, "router-outer", "app"],
                            [1, "router-outlet"]
                        ],
                        template: function(e, t) {
                            1 & e && (a.Qb(0, "div", 0), a.Qb(1, "div", 1), a.Lb(2, "router-outlet"), a.Pb(), a.Lb(3, "app-notification-container"), a.Pb()), 2 & e && a.Bb("dark-mode", "dark" == t.theme)
                        },
                        directives: [l.c, te],
                        styles: [".router-outer[_ngcontent-%COMP%]{min-height:100vh}.info[_ngcontent-%COMP%]{padding:1rem;text-align:center;background-color:rgba(248,152,58,.87)!important;color:#fff}"]
                    }), e
                })();
            var ae = n("R1ws"),
                ie = n("PCNd"),
                oe = n("TIDI");
            let re = (() => {
                    class e {
                        intercept(e, t) {
                            const n = e.clone({
                                setHeaders: {
                                    "Cache-Control": "no-cache",
                                    Pragma: "no-cache"
                                }
                            });
                            return t.handle(n)
                        }
                    }
                    return e.\u0275fac = function(t) {
                        return new(t || e)
                    }, e.\u0275prov = a.Gb({
                        token: e,
                        factory: e.\u0275fac
                    }), e
                })(),
                se = (() => {
                    class e {}
                    return e.\u0275mod = a.Ib({
                        type: e,
                        bootstrap: [ne]
                    }), e.\u0275inj = a.Hb({
                        factory: function(t) {
                            return new(t || e)
                        },
                        providers: [{
                            provide: "LOCATION",
                            useFactory: ue
                        }, {
                            provide: "LOCALSTORAGE",
                            useFactory: de
                        }, {
                            provide: "SESSIONSTORAGE",
                            useFactory: ce
                        }, {
                            provide: "WINDOW",
                            useFactory: pe
                        }, {
                            provide: "DOCUMENT",
                            useFactory: he
                        }, {
                            provide: "NAVIGATOR",
                            useFactory: le
                        }, {
                            provide: s.a,
                            useClass: re,
                            multi: !0
                        }],
                        imports: [
                            [r.a.withServerTransition({
                                appId: "serverApp"
                            }), ae.a, u, s.c, o.a, o.b, ie.a, oe.a]
                        ]
                    }), e
                })();

            function le() {
                return "undefined" != typeof navigator ? navigator : null
            }

            function ce() {
                return "undefined" != typeof sessionStorage ? sessionStorage : null
            }

            function ue() {
                return "undefined" != typeof window ? window.location : null
            }

            function de() {
                return "undefined" != typeof window ? window.localStorage : null
            }

            function pe() {
                return "undefined" != typeof window ? window : null
            }

            function he() {
                return "undefined" != typeof document ? document : null
            }
            i.a.production && Object(a.R)(), document.addEventListener("DOMContentLoaded", () => {
                r.c().bootstrapModule(se).catch(e => console.error(e))
            })
        },
        zn8P: function(e, t) {
            function n(e) {
                return Promise.resolve().then((function() {
                    var t = new Error("Cannot find module '" + e + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                }))
            }
            n.keys = function() {
                return []
            }, n.resolve = n, e.exports = n, n.id = "zn8P"
        }
    },
    [
        [0, 0, 6]
    ]
]);