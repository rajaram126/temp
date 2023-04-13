"use strict";
(self.webpackChunkcmd_ux_cloudpc_portal = self.webpackChunkcmd_ux_cloudpc_portal || []).push([[179], {
    7248: function(e, n, a) {
        var r, o, i = a(7853), c = a(4531), s = a(3430), l = a(8489), u = a(9081), d = new u.SyncBailHook([]), p = a(852), m = a.n(p), f = a(6222), v = a(3714);
        !function(e) {
            e[e.NONE = 0] = "NONE",
            e[e.Default = 1] = "Default",
            e[e.FLEX = 2] = "FLEX"
        }(r || (r = {}));
        var E = function(e) {
            return [{
                target: "#workspace-label",
                directionalHint: v.b.rightCenter,
                gapSpace: 10,
                bubbleTitle: t("workspace-bubble-title"),
                bubbleText: t("workspace-bubble-text"),
                minPagePadding: 48,
                hasCloseButton: !0,
                ariaLabel: "".concat(t("workspace-bubble-title"), ". ").concat(t("workspace-bubble-text"), ". ").concat(t("page-index", {
                    current: 1,
                    total: 4
                })),
                ariaLabelInit: "".concat(t("workspace-bubble-text"), ". ").concat(t("page-index", {
                    current: 1,
                    total: 4
                }))
            }, {
                target: "#connectButton0",
                directionalHint: v.b.rightCenter,
                bubbleTitle: t("windows-connectBubble-title"),
                bubbleText: t("windows-connectBubble-text"),
                hasCloseButton: !0,
                ariaLabel: "".concat(t("windows-connectBubble-title"), ". ").concat(t("windows-connectBubble-text"), ". ").concat(t("page-index", {
                    current: 2,
                    total: 4
                }))
            }, {
                target: "#moreOperationButton0",
                directionalHint: v.b.rightCenter,
                bubbleTitle: t("workspace-thirdBubble-title"),
                bubbleText: t("workspace-thirdBubble-text"),
                hasCloseButton: !0,
                ariaLabel: "".concat(t("workspace-thirdBubble-title"), ". ").concat(t("workspace-thirdBubble-text"), ". ").concat(t("page-index", {
                    current: 3,
                    total: 4
                }))
            }, {
                target: "#windows-feedback",
                directionalHint: v.b.bottomCenter,
                gapSpace: 10,
                bubbleTitle: t("windows-feedbackBubble-title"),
                bubbleText: t("windows-feedbackBubble-text"),
                hasCloseButton: !0,
                ariaLabel: "".concat(t("windows-feedbackBubble-title"), ". ").concat(t("windows-feedbackBubble-text"), ". ").concat(t("page-index", {
                    current: 4,
                    total: 4
                }))
            }]
        }
          , g = function(e) {
            var n = e.brandName;
            return [{
                target: "#workspace-label",
                directionalHint: v.b.rightCenter,
                gapSpace: 10,
                bubbleTitle: t("windows-flex-bubble1-title"),
                bubbleText: t("windows-flex-bubble1-text"),
                minPagePadding: 48,
                hasCloseButton: !0,
                ariaLabel: "".concat(t("windows-flex-bubble1-title"), ". ").concat(t("windows-flex-bubble1-text"), ". ").concat(t("page-index", {
                    current: 1,
                    total: 5
                })),
                ariaLabelInit: "".concat(t("windows-flex-bubble1-text"), ". ").concat(t("page-index", {
                    current: 1,
                    total: 5
                }))
            }, {
                target: "#connectButton0",
                directionalHint: v.b.rightCenter,
                bubbleTitle: t("windows-flex-bubble2-title"),
                bubbleText: t("windows-flex-bubble2-text"),
                hasCloseButton: !0,
                ariaLabel: "".concat(t("windows-flex-bubble2-title"), ". ").concat(t("windows-flex-bubble2-text"), ". ").concat(t("page-index", {
                    current: 2,
                    total: 5
                }))
            }, {
                target: "#moreOperationButton0",
                directionalHint: v.b.rightCenter,
                bubbleTitle: t("windows-flex-bubble3-title"),
                bubbleText: t("windows-flex-bubble3-text"),
                hasCloseButton: !0,
                ariaLabel: "".concat(t("windows-flex-bubble3-title"), ". ").concat(t("windows-flex-bubble3-text"), ". ").concat(t("page-index", {
                    current: 3,
                    total: 5
                }))
            }, {
                target: "#windows-feedback",
                directionalHint: v.b.bottomCenter,
                gapSpace: 10,
                bubbleTitle: t("windows-flex-bubble4-title"),
                bubbleText: t("windows-flex-bubble4-text", {
                    brandName: n
                }),
                hasCloseButton: !0,
                ariaLabel: "".concat(t("windows-flex-bubble4-title"), ". ").concat(t("windows-flex-bubble4-text", {
                    brandName: n
                }), ". ").concat(t("page-index", {
                    current: 4,
                    total: 5
                }))
            }, {
                target: "#windows-settings",
                directionalHint: v.b.bottomCenter,
                gapSpace: 5,
                bubbleTitle: t("windows-flex-bubble5-title", {
                    brandName: n
                }),
                bubbleText: t("windows-flex-bubble5-text"),
                hasCloseButton: !0,
                ariaLabel: "".concat(t("windows-flex-bubble5-title", {
                    brandName: n
                }), ". ").concat(t("windows-flex-bubble5-text"), ". ").concat(t("page-index", {
                    current: 5,
                    total: 5
                }))
            }]
        }
          , h = (o = {},
        (0,
        f.Z)(o, r.Default, E),
        (0,
        f.Z)(o, r.FLEX, g),
        (0,
        f.Z)(o, r.FLEX | r.Default, g),
        o);
        var b, w = "SET_LOGIN_INFO", y = "SET_SELECTED_NAV_KEY", _ = "SET_SELECTED_DEVICE_NAV_KEY", C = "SET_NAV_TO_DOWNLOAD_DISABLE_HOME", k = "INIT_HOMEPAGE_DATA_ASYNC", I = "INIT_REMOTE_URL_ASYNC", S = "CHECK_USER_LICENSE_TYPE_ASYNC", x = "CHECKED_USER_LICENSE_TYPE", N = "INIT_HOMEPAGE_DATA", R = "SHOW_FEED_URL_DIALOG", T = "HIDE_FEED_URL_DIALOG", P = "SHOW_WAKEUP_DIALOG", A = "HIDE_WAKEUP_DIALOG", D = "SHOW_WELCOME_PAGE", L = "HIDE_WELCOME_PAGE", O = "SHOW_WORKSPACE_BUBBLE_DIALOG", F = "HIDE_WORKSPACE_BUBBLE_DIALOG", M = "SHOW_RESET_DIALOG", U = "HIDE_RESET_DIALOG", Z = "SHOW_RENAME_DIALOG", H = "HIDE_RENAME_DIALOG", B = "SHOW_RESTART_DIALOG", W = "HIDE_RESTART_DIALOG", V = "SHOW_DOWNLOAD_DIALOG", G = "HIDE_DOWNLOAD_DIALOG", z = "SHOW_SYSTEM_INFORMATION_DIALOG", Y = "HIDE_SYSTEM_INFORMATION_DIALOG", q = "SHOW_PROVISION_FAIL_DIALOG", K = "HIDE_PROVISION_FAIL_DIALOG", j = "SHOW_RESTORE_DIALOG", X = "HIDE_RESTORE_DIALOG", $ = "SHOW_TROUBLESHOOT_DIALOG", Q = "HIDE_TROUBLESHOOT_DIALOG", J = "DELETE_MESSAGE", ee = "ADD_MESSAGE", te = "SET_DSS_USER_INFO", ne = "SET_USER_RESTORE_POLICY", ae = "SET_SERVICE_CONFIG_INFO", re = "SET_IN_TEAMS", oe = "DISMISS_QUICK_ACTION", ie = "SET_FRE_STATE", ce = "SET_SHOULD_RUN_FRE_ON_WINDOWS", se = "SET_SHOULD_RUN_FLEX_FRE_ON_WINDOWS", le = "NAVIGATE_TO_ADD_USER", ue = "PERFORM_TAKE_THE_TOUR", de = "SET_FIRST_LOGIN_FALSE", pe = "SET_FLEX_FIRST_LOGIN_FALSE", me = "SET_THEME", fe = "SeahawkPlugin", ve = .9;
        !function(e) {
            e.Default = "Default",
            e.Teams = "Teams",
            e.NativeWindows = "NativeWindows"
        }(b || (b = {}));
        var Ee = a(9675)
          , ge = a(1616)
          , he = a(418)
          , be = a(161)
          , we = "GET_DEVICE_LIST_ASYNC"
          , ye = "GET_DEVICE_NEW_ASYNC"
          , _e = "HANDLE_DEVICE_NEW"
          , Ce = "CHECK_CPC_AVAILABILITY_ASYNC"
          , ke = "CHECK_CPC_STATE_ASYNC"
          , Ie = "INIT_DEVICE_DATA"
          , Se = "START_DEVICE_LIST_POLLING"
          , xe = "DISABLE_DEVICE_OPERATION"
          , Ne = "ENABLE_DEVICE_OPERATION"
          , Re = "ENABLE_CONNECTING"
          , Te = "DISABLE_CONNECTING"
          , Pe = "ENABLE_RDP_CONNECTING"
          , Ae = "DISABLE_RDP_CONNECTING"
          , De = "SET_FLEX_STATE"
          , Le = "SET_FLEX_RDP_STATE"
          , Oe = "DISABLE_DEVICE_OPERATION_ENABLE_CONNECT"
          , Fe = "REQUEST_FLEX_CPC_RDP_ASYNC"
          , Me = "GET_FLEX_CPC_STATUS_RDP_ASYNC"
          , Ue = "UPDATE_DEVICE"
          , Ze = "UPDATE_DEVICE_LIST"
          , He = "REMOVE_DEVICE"
          , Be = "UPDATE_SELECTED_DEVICE"
          , We = "POST_ACTION_DEVICE_ASYNC"
          , Ve = "CHECK_ACTION_STATUS_ASYNC"
          , Ge = "DISABLE_DIAGNOSE_OPERATION"
          , ze = "ENABLE_DIAGNOSE_OPERATION"
          , Ye = "SET_ONGOING_ACTION_TYPE"
          , qe = "CLEAR_ONGOING_ACTION_TYPE"
          , Ke = "ADD_DEVICE_STATE_TIP"
          , je = "REMOVE_DEVICE_STATE_TIP"
          , Xe = "GET_LAST_LOGIN_TIME_ASYNC"
          , $e = "SET_LAST_LOGIN_MAP"
          , Qe = "GET_DEVICE_SNAPSHOTS_ASYNC"
          , Je = "SET_DEVICE_SNAPSHOTS"
          , et = {
            deviceList: [],
            servicePlanMap: {},
            remoteUrl: "",
            selectedDevice: {},
            nextServicePlanId: "",
            stateTipsMap: {},
            lastLoginMap: {},
            connectingStateMap: {},
            flexStateMap: {},
            deviceListInitialized: !1,
            flexRDPStateMap: {},
            flexRDPConnectingStateMap: {}
        };
        function tt(e, t, n, a) {
            for (var r = 0; r < e.length; r++) {
                var o = e[r];
                if (o.workspaceId == t) {
                    e[r] = (0,
                    l.Z)((0,
                    l.Z)({}, o), {}, (0,
                    f.Z)({}, n, a));
                    break
                }
            }
            return e
        }
        function nt(e, t) {
            for (var n = 0; n < e.length; n++) {
                var a = e[n];
                if (a.workspaceId == t.workspaceId) {
                    e[n] = (0,
                    l.Z)((0,
                    l.Z)({}, a), t);
                    break
                }
            }
            return e
        }
        var at, rt, ot = a(9472);
        !function(e) {
            e.INT = "INT",
            e.SH = "SH",
            e.PPE = "PPE",
            e.Prod = "PROD",
            e.GHB = "GHB",
            e.GHP = "GHP"
        }(at || (at = {})),
        function(e) {
            e.INT = "INT",
            e.SH = "SH",
            e.PPE = "PPE",
            e.Prod = "PROD",
            e.GHB = "GHB",
            e.GHP = "GHP",
            e.GCB = "GCB",
            e.GCP = "GCP"
        }(rt || (rt = {}));
        var it, ct = {
            name: "microsoft.graph.canary",
            endpoint: "https://canary.graph.microsoft.com/"
        }, st = {
            name: "microsoft.graph",
            endpoint: "https://graph.microsoft.com/"
        }, lt = {
            name: "microsoft.graph.us",
            endpoint: "https://graph.microsoft.us/"
        };
        !function(e) {
            e.INT = "testprodbeta_cpc_int",
            e.Selfhost = "testprodbeta_cpc_sh",
            e.Canary = "testprodbeta_cpc_ctip",
            e.TestProd = "testprodbeta_cpc_testprod",
            e.Prod = "beta",
            e.Prod_STAGING = "stagingbeta"
        }(it || (it = {}));
        var ut, dt, pt = "SET_CONTROL_LIST", mt = "SET_CONTROL_LIST_ASYNC", ft = "SET_FLIGHTING_LIST", vt = "SET_FLIGHTING_LIST_ASYNC", Et = "SET_EXPERIMENT_LIST", gt = "INIT_PREVIEW_FEATURE_LIST", ht = ["Nighthwark_File_Transfer", "NH_HighDPI", "IWP_Fidalgo", "IWP_EnableThirdPartyPartner", "Feedback_IWP", "Feedback_IWP_Prod", "IWP_NPS_Enable", "IWP_Power_Automate", "IWP_NH_FLW"], bt = function(e) {
            return userInfo.env !== at.GHB && userInfo.env !== at.GHP && userInfo.tenantEnvironment !== rt.GCB && userInfo.tenantEnvironment !== rt.GCP && userInfo.tenantEnvironment !== rt.GHB && userInfo.tenantEnvironment !== rt.GHP || ht.forEach((function(t) {
                e[t] = !1
            }
            )),
            e
        }, wt = {
            ControlData: {
                NH_UseLatestRDPLib: !1
            },
            controlFinished: !1,
            FlightingData: {
                OpenInNativeApp_IWP: !1,
                EnableTeamsApp_IWP: !1,
                DSSAdminManagement_IWP: !1,
                NH_HighDPI: !1,
                NH_OnCanvasPos: !1,
                IWP_NPS_Enable: !1,
                IWP_NPS_EnableCVSurvey: !1,
                IWP_NPS_CVFormId: "",
                IWP_NPS_Admin_CVFormId: "",
                IWP_NPS_NominationPercentage_Numerator: 25,
                IWP_NPS_AppUsageTimeInSecond: 300,
                IWP_NPS_NominationPeriodInSecond: 1296e3,
                IWP_NPS_CooldownPeriodInSecond: 7776e3,
                IWP_NPS_EnableProductionAppId: !1,
                IWP_NPS_EnableSendDataToProdEnv: !1,
                IWP_NPS_EnableStandardChannel: !1,
                IWP_NPS_Enable_Debug: !1,
                IWP_NPS_Admin_Enable: !1,
                Feedback_IWP: !1,
                Feedback_IWP_Prod: !1,
                previewFeatures: {},
                previewFeaturesInitialized: !1,
                MFA_IWP: !1,
                Nighthwark_File_Transfer: !1,
                IWP_EnableFlexFRE: !1,
                Native_EnableFlexFRE: !1,
                IWP_Fidalgo: !1,
                SPA_AUTH_IWP: !1,
                IWP_EnableThirdPartyPartner: !1,
                EnableSetAppIntelligenceData: !1,
                IWP_PiT_Remove_Preview: !1,
                Nighthawk_Deprecate_Device_ID: !1,
                Nighthawk_Deprecate_Time: -1,
                IWP_Telemetry_EnablePrivacyGuard: !1,
                IWPEnableRestore: !1,
                IWPEnableRestart: !1,
                IWPEnableTroubleshoot: !1,
                IWPEnableRename: !1,
                Windows_Download_IWP: !1,
                FIRST_PAINT_OPT_IWP: !1,
                Context_Menu_IWP: !1,
                IWP_Use_AVD: !1,
                IWP_Power_Automate: !1,
                IWP_Power_Automate_Portal: "/",
                IWP_Power_Automate_EnableRestart: !1,
                IWP_Power_Automate_EnableRestore: !1,
                IWP_Power_Automate_EnableRename: !1,
                IWP_Power_Automate_EnableTroubleshoot: !1,
                IWP_Enable_FlexUnavailableMessage: !1,
                IWP_Enable_FlexOpenInRDP: !1,
                IWP_NH_FLW: !1,
                IWP_FLW_EnableRestart: !1,
                IWP_FLW_EnableReset: !1,
                IWP_FLW_EnableRestore: !1,
                IWP_FLW_EnableRename: !1,
                IWP_FLW_EnableTroubleshoot: !1,
                IWP_Feedback_V2: !1,
                IWP_Enable_Experiment: !1,
                IWP_Front_End_Ocps: !1,
                IWP_Enable_Local_First_Login_Flag: !1,
                IWP_Enable_FlexIndicator: !1,
                IWP_Enable_Dark_Mode: !1
            },
            flightingFinished: !1,
            ExperimentData: {
                sessionId: void 0,
                ExpHideQuickActionDownloadButton: !1,
                configIDs: ""
            },
            expFinished: !1
        };
        !function(e) {
            e.unCatchedError = "unCatchedError",
            e.unCatchedRDPError = "unCatchedRDPError",
            e.serverError = "serverError",
            e.unAuthorizedError = "unAuthorizedError",
            e.NoDevicesError = "NoDevicesError",
            e.LicenseExpireError = "LicenseExpireError",
            e.PIEError = "PIEError",
            e.HeaderError = "HeaderError",
            e.MACError = "MACError"
        }(ut || (ut = {})),
        function(e) {
            e[e.Continue = 100] = "Continue",
            e[e.SwitchingProtocols = 101] = "SwitchingProtocols",
            e[e.Ok = 200] = "Ok",
            e[e.Created = 201] = "Created",
            e[e.Accepted = 202] = "Accepted",
            e[e.NonAuthoritativeInformation = 203] = "NonAuthoritativeInformation",
            e[e.NoContent = 204] = "NoContent",
            e[e.ResetContent = 205] = "ResetContent",
            e[e.PartialContent = 206] = "PartialContent",
            e[e.Ambiguous = 300] = "Ambiguous",
            e[e.MultipleChoices = 300] = "MultipleChoices",
            e[e.Moved = 301] = "Moved",
            e[e.MovedPermanently = 301] = "MovedPermanently",
            e[e.Found = 302] = "Found",
            e[e.Redirect = 302] = "Redirect",
            e[e.RedirectMethod = 303] = "RedirectMethod",
            e[e.SeeOther = 303] = "SeeOther",
            e[e.NotModified = 304] = "NotModified",
            e[e.UseProxy = 305] = "UseProxy",
            e[e.Unused = 306] = "Unused",
            e[e.RedirectKeepVerb = 307] = "RedirectKeepVerb",
            e[e.TemporaryRedirect = 307] = "TemporaryRedirect",
            e[e.BadRequest = 400] = "BadRequest",
            e[e.Unauthorized = 401] = "Unauthorized",
            e[e.PaymentRequired = 402] = "PaymentRequired",
            e[e.Forbidden = 403] = "Forbidden",
            e[e.NotFound = 404] = "NotFound",
            e[e.MethodNotAllowed = 405] = "MethodNotAllowed",
            e[e.NotAcceptable = 406] = "NotAcceptable",
            e[e.ProxyAuthenticationRequired = 407] = "ProxyAuthenticationRequired",
            e[e.RequestTimeout = 408] = "RequestTimeout",
            e[e.Conflict = 409] = "Conflict",
            e[e.Gone = 410] = "Gone",
            e[e.LengthRequired = 411] = "LengthRequired",
            e[e.PreconditionFailed = 412] = "PreconditionFailed",
            e[e.RequestEntityTooLarge = 413] = "RequestEntityTooLarge",
            e[e.RequestUriTooLong = 414] = "RequestUriTooLong",
            e[e.UnsupportedMediaType = 415] = "UnsupportedMediaType",
            e[e.RequestedRangeNotSatisfiable = 416] = "RequestedRangeNotSatisfiable",
            e[e.ExpectationFailed = 417] = "ExpectationFailed",
            e[e.UpgradeRequired = 426] = "UpgradeRequired",
            e[e.TooManyRequests = 429] = "TooManyRequests",
            e[e.InternalServerError = 500] = "InternalServerError",
            e[e.NotImplemented = 501] = "NotImplemented",
            e[e.BadGateway = 502] = "BadGateway",
            e[e.ServiceUnavailable = 503] = "ServiceUnavailable",
            e[e.GatewayTimeout = 504] = "GatewayTimeout",
            e[e.HttpVersionNotSupported = 505] = "HttpVersionNotSupported"
        }(dt || (dt = {}));
        var yt, _t = "SET_INTERFACE_ERROR", Ct = "SET_NO_DEVICE_ERROR", kt = "SET_UNCATCHED_ERROR", It = "SET_SERVER_ERROR", St = "CLEAR_ERROR", xt = {
            hasError: !1,
            errorType: ut.serverError
        };
        function Nt(e, t) {
            for (var n = 0; n < e.length; n++) {
                var a = e[n]
                  , r = a.createTime
                  , o = a.duration
                  , i = a.id;
                ((new Date).getTime() - r.getTime() > o || i === (null === t || void 0 === t ? void 0 : t.id)) && (e.splice(n, 1),
                n--)
            }
        }
        !function(e) {
            e.Mac = "Mac",
            e.IOS = "IOS",
            e.Android = "Android",
            e.WindowsARM64 = "Windows arm64",
            e.Windows32Bit = "Windows 32-bit",
            e.Windows64Bit = "Windows 64-bit",
            e.Windows = "Windows",
            e.Linux = "Linux",
            e.ChromeOS = "ChromeOS",
            e.Other = "Other",
            e.Windows365 = "Windows365"
        }(yt || (yt = {}));
        var Rt, Tt = function() {
            var e = t("download-MS-Corp");
            return [{
                platform: yt.Windows365,
                showDialog: !1,
                title: t("download-title-Windows365-Windows"),
                downloadOptions: [{
                    title: t("download-option-Windows365-Windows"),
                    url: "ms-windows-store://pdp/?productid=9N1F85V9T8BN",
                    isOpenInNewTab: !1
                }],
                subtitle: e,
                getURLText: "",
                getURLAriaLabel: ""
            }]
        }, Pt = function() {
            var e = t("download-MS-Corp")
              , n = function(e) {
                return t("download-title-Microsoft-".concat(e))
            }
              , a = function(e) {
                return t("download-option-Microsoft-".concat(e))
            };
            return [{
                platform: yt.Windows,
                showDialog: !0,
                title: n(yt.Windows),
                downloadOptions: [{
                    platform: yt.Windows64Bit,
                    title: a("Windows-64bit"),
                    url: "https://go.microsoft.com/fwlink/?linkid=2068602",
                    isOpenInNewTab: !1
                }, {
                    platform: yt.Windows32Bit,
                    title: a("Windows-32bit"),
                    url: "https://go.microsoft.com/fwlink/?linkid=2098960",
                    isOpenInNewTab: !1
                }, {
                    platform: yt.WindowsARM64,
                    title: a("Windows-arm64"),
                    url: "https://go.microsoft.com/fwlink/?linkid=2098961",
                    isOpenInNewTab: !1
                }]
            }, {
                platform: yt.Mac,
                showDialog: !1,
                title: n(yt.Mac),
                downloadOptions: [{
                    title: a(yt.Mac),
                    url: "https://apps.apple.com/app/microsoft-remote-desktop/id1295203466?mt=12",
                    isOpenInNewTab: !0
                }]
            }, {
                platform: yt.IOS,
                showDialog: !1,
                title: n(yt.IOS),
                downloadOptions: [{
                    title: a(yt.IOS),
                    url: "https://aka.ms/rdios",
                    isOpenInNewTab: !0
                }]
            }, {
                platform: yt.Android,
                showDialog: !1,
                title: n(yt.Android),
                downloadOptions: [{
                    title: a(yt.Android),
                    url: "https://play.google.com/store/apps/details?id=com.microsoft.rdc.androidx",
                    isOpenInNewTab: !0
                }]
            }].map((function(n) {
                return (0,
                l.Z)((0,
                l.Z)({}, n), {}, {
                    subtitle: e,
                    getURLText: (n.platform,
                    t("download-get-url")),
                    getURLAriaLabel: (a = n.platform,
                    t("download-get-url-aria-label-microsoft-".concat(a.toLocaleLowerCase())))
                });
                var a
            }
            ))
        };
        !function(e) {
            e.Light = "Light",
            e.Dark = "Dark"
        }(Rt || (Rt = {}));
        var At, Dt = {
            palette: {
                themePrimary: "#60cdff",
                themeLighterAlt: "#04080a",
                themeLighter: "#102129",
                themeLight: "#1d3d4d",
                themeTertiary: "#3a7b99",
                themeSecondary: "#55b4e0",
                themeDarkAlt: "rgba(96, 205, 255, 0.9)",
                themeDark: "rgba(96, 205, 255, 0.8)",
                themeDarker: "#a6e3ff",
                neutralLighterAlt: "#0b0b0b",
                neutralLighter: "rgba(255, 255, 255, 0.1581)",
                neutralLight: "#252525",
                neutralQuaternaryAlt: "#2f2f2f",
                neutralQuaternary: "rgba(255, 255, 255, 0.5302)",
                neutralTertiaryAlt: "#595959",
                neutralTertiary: "rgba(255, 255, 255, 0.36)",
                neutralSecondary: "#d0d0d0",
                neutralSecondaryAlt: "#d0d0d0",
                neutralPrimaryAlt: "#dadada",
                neutralPrimary: "#ffffff",
                neutralDark: "#f4f4f4",
                black: "#f8f8f8",
                white: "#141414"
            }
        }, Lt = {
            palette: {
                themePrimary: "#0078d4",
                themeLighterAlt: "#eff6fc",
                themeLighter: "#deecf9",
                themeLight: "#c7e0f4",
                themeTertiary: "#71afe5",
                themeSecondary: "#2b88d8",
                themeDarkAlt: "#106ebe",
                themeDark: "#005a9e",
                themeDarker: "#004578",
                neutralLighterAlt: "#faf9f8",
                neutralLighter: "#f3f2f1",
                neutralLight: "#edebe9",
                neutralQuaternaryAlt: "#e1dfdd",
                neutralQuaternary: "#d0d0d0",
                neutralTertiaryAlt: "#c8c6c4",
                neutralTertiary: "#a19f9d",
                neutralSecondary: "#605e5c",
                neutralSecondaryAlt: "#8a8886",
                neutralPrimaryAlt: "#3b3a39",
                neutralPrimary: "#323130",
                neutralDark: "#201f1e",
                black: "#000000",
                white: "#ffffff"
            }
        }, Ot = a(2190), Ft = a.n(Ot);
        !function(e) {
            e[e.MainPage = 0] = "MainPage",
            e[e.Windows365WebClientPage = 1] = "Windows365WebClientPage",
            e[e.Seahawk = 2] = "Seahawk",
            e[e.Unknown = 3] = "Unknown"
        }(At || (At = {}));
        var Mt, Ut, Zt = "/webclient/";
        function Ht() {
            var e = navigator.userAgent.toLowerCase();
            return e.indexOf("iphone") > -1 || e.indexOf("ipad") > -1 || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1 ? yt.IOS : e.indexOf("mac") > -1 ? yt.Mac : e.indexOf("android") > -1 ? yt.Android : /windows|win|wow32|wow64/g.test(e) ? yt.Windows : /Linux/g.test(navigator.platform) ? yt.Linux : /CrOS/g.test(e) ? yt.ChromeOS : yt.Other
        }
        !function(e) {
            e.SELF_HOST_ARM = "selfhostarm",
            e.AVD_ARM = "avdarm",
            e.US_GOV = "usgov",
            e.CHINA_GOV = "chinagov"
        }(Ut || (Ut = {}));
        var Bt = (Mt = {},
        (0,
        f.Z)(Mt, at.INT, Ut.SELF_HOST_ARM),
        (0,
        f.Z)(Mt, at.SH, Ut.AVD_ARM),
        (0,
        f.Z)(Mt, at.PPE, Ut.AVD_ARM),
        (0,
        f.Z)(Mt, at.Prod, Ut.AVD_ARM),
        (0,
        f.Z)(Mt, at.GHB, Ut.US_GOV),
        (0,
        f.Z)(Mt, at.GHP, Ut.US_GOV),
        Mt);
        function Wt(e) {
            var t = e.email
              , n = e.directLaunchURL
              , a = e.env
              , r = Reflect.has(Bt, a)
              , o = function(e) {
                var t = /^.*?tenants\/(.*)\/resources\/(.*?)$/
                  , n = null === e || void 0 === e ? void 0 : e.match(t);
                if (!n || n.length < 3)
                    return {
                        workspaceid: "",
                        resourceid: ""
                    };
                var a = (0,
                s.Z)(n, 3)
                  , r = a[1]
                  , o = a[2];
                return {
                    workspaceid: r,
                    resourceid: o
                }
            }(n)
              , i = o.workspaceid
              , c = o.resourceid;
            if (r && i && c) {
                var l = "ms-avd:connect?env=".concat(Bt[a], "&workspaceid=").concat(i, "&resourceid=").concat(c, "&username=").concat(t, "&version=0&preview=yes");
                window.location.assign(l)
            } else
                window.location.assign("ms-rd:")
        }
        function Vt() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(e) {
                var t = 16 * Math.random() | 0;
                return ("x" == e ? t : 3 & t | 8).toString(16)
            }
            ))
        }
        function Gt(e) {
            return "string" !== typeof e ? "" : e.replace(/[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+/, "******@*****")
        }
        function zt(e) {
            return /^[a-z]{2}(?:-[A-Z]{2,})?(?:_[A-Z]{2,})?$/.test(e) ? e : ""
        }
        var Yt = /[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}/gi;
        function qt(e) {
            return "True" === e.isAdmin
        }
        function Kt(e) {
            return "True" === e.isWindows365Admin
        }
        function jt(e, t) {
            var n;
            return function() {
                for (var a = this, r = arguments.length, o = new Array(r), i = 0; i < r; i++)
                    o[i] = arguments[i];
                n || (n = setTimeout((function() {
                    n = null,
                    e.apply(a, o)
                }
                ), t))
            }
        }
        function Xt(e) {
            var t, n;
            return "ghb" === (null === (t = e.env) || void 0 === t ? void 0 : t.toLowerCase()) || "ghp" === (null === (n = e.env) || void 0 === n ? void 0 : n.toLowerCase())
        }
        function $t(e) {
            var t, n = 0;
            if (0 === e.length)
                return n;
            for (t = 0; t < e.length; t++)
                n = (n << 5) - n + e.charCodeAt(t),
                n |= 0;
            return n
        }
        function Qt() {
            for (var e = {}, t = arguments.length, n = new Array(t), a = 0; a < t; a++)
                n[a] = arguments[a];
            for (var r = 0, o = n; r < o.length; r++) {
                var i = o[r];
                if (!Ft().isObject(i))
                    throw new TypeError("All arguments must be of type object");
                var c, l = new Headers(i), u = (0,
                ot.Z)(l.entries());
                try {
                    for (u.s(); !(c = u.n()).done; ) {
                        var d = (0,
                        s.Z)(c.value, 2)
                          , p = d[0]
                          , m = d[1];
                        void 0 === m || "undefined" === m ? delete e[p] : e[p] = m
                    }
                } catch (f) {
                    u.e(f)
                } finally {
                    u.f()
                }
            }
            return new Headers(e)
        }
        function Jt(e) {
            var t;
            return "int" === (null === (t = e.env) || void 0 === t ? void 0 : t.toLowerCase()) ? "Internal" : "Production"
        }
        function en(e) {
            for (var t = document.cookie.split(";"), n = 0; n < t.length; n++) {
                var a = t[n].split("=");
                if (e === a[0])
                    return a[1].split("|")[0]
            }
            return "AAAAAAAAAAAAAAAAAAAAAA"
        }
        function tn(e) {
            for (var t = "", n = 0; n < e.length; n++) {
                var a = e.charCodeAt(n).toString(16);
                a.length < 2 && (a = "0" + a),
                t += a
            }
            return t
        }
        function nn(e) {
            return e.slice(0, 8) + "-" + e.slice(8, 12) + "-" + e.slice(12, 16) + "-" + e.slice(16, 20) + "-" + e.slice(20)
        }
        var an, rn, on, cn, sn = a(2996), ln = "GET_MAC_TOKEN", un = "GET_MAC_TOKEN_ASYNC", dn = "REFRESH_MAC_TOKEN_ASYNC", pn = "MOUNT_SIMPLE_USER_LIST", mn = "UNMOUNT_SIMPLE_USER_LIST", fn = "SET_INITIAL_MAC_PATHNAME", vn = "CHECK_MAC_CONSENT", En = "iwp_experiment_state", gn = ["ExpHideQuickActionDownloadButton"];
        !function(e) {
            e.PageView = "PageView",
            e.PageAction = "PageAction"
        }(an || (an = {})),
        function(e) {
            e.View = "View",
            e.Click = "Click"
        }(rn || (rn = {})),
        function(e) {
            e.HomePage = "home page"
        }(on || (on = {})),
        function(e) {
            e.OpenInBrowser = "open in browser",
            e.OpenInDesktopApp = "open in desktop app"
        }(cn || (cn = {}));
        var hn = function(e, t, n) {
            return !!function(e, t) {
                return !!(null === e || void 0 === e ? void 0 : e.IWP_Enable_Experiment) && !!t
            }(e, t) && (null === n || void 0 === n ? void 0 : n.ExpHideQuickActionDownloadButton)
        }
          , bn = function() {
            var e = window.localStorage.getItem(En);
            if (e) {
                var t = JSON.parse(e);
                return t.sessionId ? t : void 0
            }
        }
          , wn = function(e) {
            var t = JSON.stringify(e);
            window.localStorage.setItem(En, t)
        }
          , yn = void 0
          , _n = function() {
            if (yn)
                return yn;
            var e = bn();
            return e && e.sessionId ? (yn = e.sessionId,
            e.sessionId) : yn = Vt()
        }
          , Cn = void 0;
        function kn() {
            return serviceConfig
        }
        var In, Sn, xn = function() {
            var e;
            return (null === (e = userInfo) || void 0 === e ? void 0 : e.MACBaseUri) || "https://admin.microsoft.com"
        }();
        function Nn(e, n, a, r, o) {
            var i = e.isDSS
              , c = qt(e)
              , s = i ? c ? In.DSS_ADMIN : In.DSS_END_USER : c ? In.DMM_ADMIN : In.DMM_END_USER
              , u = kn().brandName
              , d = {
                type: "quick action",
                value: ""
            }
              , p = [{
                title: t("quick-actions-manage-title"),
                desc: t("quick-actions-manage-desc"),
                icon: "manage",
                action: function() {
                    return function() {
                        Zv((0,
                        l.Z)((0,
                        l.Z)({}, d), {}, {
                            value: "manage"
                        })),
                        window.open("".concat(xn, "/Adminportal/Home#/homepage"))
                    }
                },
                type: [In.DSS_ADMIN],
                contentType: Sn.MANAGE
            }, {
                title: t("quick-actions-download-title"),
                desc: t("quick-actions-download-desc"),
                icon: "download",
                action: function(e) {
                    return function() {
                        Zv((0,
                        l.Z)((0,
                        l.Z)({}, d), {}, {
                            value: "download"
                        })),
                        e({
                            type: y,
                            payload: "Download"
                        })
                    }
                },
                type: [In.DMM_ADMIN, In.DMM_END_USER, In.DSS_ADMIN, In.DSS_END_USER],
                contentType: Sn.DOWNLOAD,
                disabled: hn(a, o, r)
            }, {
                title: t("quick-actions-morepc-title"),
                desc: t("quick-actions-morepc-desc"),
                icon: "morepc",
                action: function() {
                    return function() {
                        Zv((0,
                        l.Z)((0,
                        l.Z)({}, d), {}, {
                            value: "more pc"
                        })),
                        window.open("".concat(xn, "/Adminportal/Home#/catalog"))
                    }
                },
                type: [In.DSS_ADMIN],
                contentType: Sn.MORE_PC
            }, {
                title: t("quick-actions-newuser-title"),
                desc: t("quick-actions-newuser-desc"),
                icon: "newuser",
                action: function(e) {
                    return function() {
                        Zv((0,
                        l.Z)((0,
                        l.Z)({}, d), {}, {
                            value: "new user"
                        })),
                        e({
                            type: vn
                        }),
                        e({
                            type: le
                        })
                    }
                },
                type: [In.DSS_ADMIN],
                contentType: Sn.NEW_USER
            }, {
                title: t("quick-actions-tour-title"),
                desc: t("quick-actions-tour-desc", {
                    brandName: u
                }),
                icon: "tour",
                action: function(e) {
                    return function() {
                        Zv((0,
                        l.Z)((0,
                        l.Z)({}, d), {}, {
                            value: "tour"
                        })),
                        e({
                            type: ue
                        })
                    }
                },
                type: [In.DMM_ADMIN, In.DMM_END_USER, In.DSS_ADMIN, In.DSS_END_USER],
                contentType: Sn.TOUR
            }, {
                title: t("quick-actions-helpdesk-title"),
                desc: t("quick-actions-helpdesk-desc"),
                icon: "help",
                action: function() {
                    return function() {
                        Zv((0,
                        l.Z)((0,
                        l.Z)({}, d), {}, {
                            value: "help desk"
                        })),
                        window.open("".concat(xn, "/Adminportal/Home#/Settings/OrganizationProfile/:/Settings/L1/CustomHelpDesk"))
                    }
                },
                type: [In.DSS_ADMIN],
                contentType: Sn.HELP_DESK
            }, {
                title: t("quick-actions-help-title"),
                desc: t("quick-actions-help-desc"),
                icon: "desk",
                action: function() {
                    return function() {
                        Zv((0,
                        l.Z)((0,
                        l.Z)({}, d), {}, {
                            value: "help"
                        })),
                        window.open("".concat(xn, "/adminportal/home?searchSolutions=cloud PC"))
                    }
                },
                type: [In.DSS_ADMIN],
                contentType: Sn.HELP
            }];
            return 0 === n.length && (p = p.filter((function(e) {
                return e.contentType !== Sn.TOUR
            }
            ))),
            p.filter((function(e) {
                return e.type.indexOf(s) > -1
            }
            )).filter((function(e) {
                return 1 != !!e.disabled
            }
            ))
        }
        !function(e) {
            e[e.DSS_ADMIN = 0] = "DSS_ADMIN",
            e[e.DSS_END_USER = 1] = "DSS_END_USER",
            e[e.DMM_ADMIN = 2] = "DMM_ADMIN",
            e[e.DMM_END_USER = 3] = "DMM_END_USER"
        }(In || (In = {})),
        function(e) {
            e.MANAGE = "MANAGE",
            e.DOWNLOAD = "DOWNLOAD",
            e.MORE_PC = "MORE_PC",
            e.NEW_USER = "NEW_USER",
            e.TOUR = "TOUR",
            e.HELP_DESK = "HELP_DESK",
            e.HELP = "HELP"
        }(Sn || (Sn = {}));
        var Rn, Tn, Pn = function(e) {
            return e !== Sn.DOWNLOAD && e !== Sn.TOUR
        };
        !function(e) {
            e.Home = "Home",
            e.Download = "Download"
        }(Rn || (Rn = {})),
        function(e) {
            e.Own = "Own",
            e.Organization = "Organization"
        }(Tn || (Tn = {}));
        var An = {
            selectedNavKey: Rn.Home,
            selectedDeviceNavKey: Tn.Own,
            homeNavDisabled: !1,
            feedUrl: "",
            loginFinished: !1,
            showLoadingPage: !0,
            showWelcome: !1,
            freType: 0,
            isFirstLogin: !1,
            showWorkspaceBubble: !1,
            userInfo: {
                name: "",
                email: "",
                sid: "",
                language: "",
                translation: "",
                version: "",
                env: at.Prod,
                tid: "",
                isAdmin: "False",
                isWindows365Admin: "False",
                isDSS: !1,
                uid: "uid",
                userRestoreEnabled: !1
            },
            shouldRunFREOnWindows: !0,
            shouldRunFlexFREOnWindows: !0,
            showFeedUrlDialog: !1,
            showWakeUpDialog: !1,
            showResetDialog: !1,
            showRenameDialog: !1,
            showRestartDialog: !1,
            showDownloadDialog: !1,
            clientVariant: function(e) {
                return e && e.enableSSO ? b.NativeWindows : b.Default
            }(userInfo),
            showSystemInformationDialog: !1,
            showProvisionFailDialog: !1,
            showRestoreDialog: !1,
            showTroubleshootDialog: !1,
            showTroubleshootDetailDialog: !1,
            showFeedUrlDialogPlatform: yt.Windows,
            showDownloadDialogPlatform: yt.Windows,
            messageList: [],
            serviceConfig: {
                brandName: ""
            },
            dismissedQuickActions: {},
            checkedUserLicenseType: !1,
            theme: Rt.Light
        };
        var Dn = {
            0: function(e) {
                return (0,
                l.Z)((0,
                l.Z)({}, e), {}, {
                    dismissedQuickActions: {},
                    shouldRunFREOnWindows: !0,
                    shouldRunFlexFREOnWindows: !0
                })
            }
        }
          , Ln = (0,
        he.OJ)({
            key: "home",
            storage: sn.Z,
            whitelist: ["dismissedQuickActions", "shouldRunFREOnWindows", "shouldRunFlexFREOnWindows"],
            version: 0,
            migrate: (0,
            he.yv)(Dn, {
                debug: !1
            })
        }, (function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : An
              , t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
            case w:
                return (0,
                l.Z)((0,
                l.Z)({}, e), {}, {
                    userInfo: t.payload,
                    loginFinished: !0
                });
            case y:
                return (0,
                l.Z)((0,
                l.Z)({}, e), {}, {
                    selectedNavKey: t.payload
                });
            case _:
                return (0,
                l.Z)((0,
                l.Z)({}, e), {}, {
                    selectedDeviceNavKey: t.payload
                });
            case C:
                return (0,
                l.Z)((0,
                l.Z)({}, e), {}, {
                    selectedNavKey: Rn.Download,
                    homeNavDisabled: !0
                });
            case N:
                return (0,
                l.Z)((0,
                l.Z)({}, e), t.payload);
            case ie:
                var n = t.payload.enable
                  , a = t.payload.freType;
                return (0,
                l.Z)((0,
                l.Z)({}, e), {}, {
                    isFirstLogin: n,
                    showWelcome: n,
                    freType: a
                });
            case me:
                return (0,
                l.Z)((0,
                l.Z)({}, e), {}, {
                    theme: t.payload.theme
                });
            case R:
                return t.payload ? (0,
                l.Z)((0,
                l.Z)({}, e), {}, {
                    showFeedUrlDialog: !0,
                    showFeedUrlDialogPlatform: t.payload
                }) : (0,
                l.Z)((0,
                l.Z)({}, e), {}, {
                    showFeedUrlDialog: !0
                });
            case T:
                return (0,
                l.Z)((0,
                l.Z)({}, e), {}, {
                    showFeedUrlDialog: !1
                });
            case A:
                return (0,
                l.Z)((0,
                l.Z)({}, e), {}, {
                    showWakeUpDialog: !1
                });
            case P:
                return (0,
                l.Z)((0,
                l.Z)({}, e), {}, {
                    showWakeUpDialog: !0
                });
            case D:
                return (0,
                l.Z)((0,
                l.Z)({}, e), {}, {
                    showWelcome: !0
                });
            case L:
                return (0,
                l.Z)((0,
                l.Z)({}, e), {}, {
                    showWelcome: !1,
                    showWorkspaceBubble: !0
                });
            case O:
                return (0,
                l.Z)((0,
                l.Z)({}, e), {}, {
                    showWorkspaceBubble: !0
                });
            case F:
                return (0,
                l.Z)((0,
                l.Z)({}, e), {}, {
                    showWorkspaceBubble: !1
                });
            case M:
                return (0,
                l.Z)((0,
                l.Z)({}, e), {}, {
                    showResetDialog: !0
                });
            case U:
                return (0,
                l.Z)((0,
                l.Z)({}, e), {}, {
                    showResetDialog: !1
                });
            case Z:
                return (0,
                l.Z)((0,
                l.Z)({}, e), {}, {
                    showRenameDialog: !0
                });
            case H:
                return (0,
                l.Z)((0,
                l.Z)({}, e), {}, {
                    showRenameDialog: !1
                });
            case B:
                return (0,
                l.Z)((0,
                l.Z)({}, e), {}, {
                    showRestartDialog: !0
                });
            case W:
                return (0,
                l.Z)((0,
                l.Z)({}, e), {}, {
                    showRestartDialog: !1
                });
            case V:
                return (0,
                l.Z)((0,
                l.Z)({}, e), {}, {
                    showDownloadDialog: !0,
                    showDownloadDialogPlatform: t.payload
                });
            case G:
                return (0,
                l.Z)((0,
                l.Z)({}, e), {}, {
                    showDownloadDialog: !1
                });
            case z:
                return (0,
                l.Z)((0,
                l.Z)({}, e), {}, {
                    showSystemInformationDialog: !0
                });
            case Y:
                return (0,
                l.Z)((0,
                l.Z)({}, e), {}, {
                    showSystemInformationDialog: !1
                });
            case q:
                return (0,
                l.Z)((0,
                l.Z)({}, e), {}, {
                    showProvisionFailDialog: !0
                });
            case K:
                return (0,
                l.Z)((0,
                l.Z)({}, e), {}, {
                    showProvisionFailDialog: !1
                });
            case j:
                return (0,
                l.Z)((0,
                l.Z)({}, e), {}, {
                    showRestoreDialog: !0
                });
            case X:
                return (0,
                l.Z)((0,
                l.Z)({}, e), {}, {
                    showRestoreDialog: !1
                });
            case $:
                return (0,
                l.Z)((0,
                l.Z)({}, e), {}, {
                    showTroubleshootDialog: !0
                });
            case Q:
                return (0,
                l.Z)((0,
                l.Z)({}, e), {}, {
                    showTroubleshootDialog: !1
                });
            case ee:
                var r = t.payload
                  , o = e.messageList;
                return (0,
                l.Z)((0,
                l.Z)({}, e), {}, {
                    messageList: o.concat([r])
                });
            case J:
                var i = t.payload
                  , c = e.messageList;
                return Nt(c, i),
                (0,
                l.Z)((0,
                l.Z)({}, e), {}, {
                    messageList: c.concat([])
                });
            case te:
                return (0,
                l.Z)((0,
                l.Z)({}, e), {}, {
                    userInfo: (0,
                    l.Z)((0,
                    l.Z)({}, e.userInfo), {}, {
                        isDSS: !0
                    })
                });
            case x:
                return (0,
                l.Z)((0,
                l.Z)({}, e), {}, {
                    checkedUserLicenseType: !0
                });
            case ne:
                return (0,
                l.Z)((0,
                l.Z)({}, e), {}, {
                    userInfo: (0,
                    l.Z)((0,
                    l.Z)({}, e.userInfo), {}, {
                        userRestoreEnabled: !0
                    })
                });
            case ae:
                return (0,
                l.Z)((0,
                l.Z)({}, e), {}, {
                    serviceConfig: t.payload
                });
            case re:
                var s = e.clientVariant;
                return t.payload ? s = b.Teams : s === b.Teams && (s = b.Default),
                (0,
                l.Z)((0,
                l.Z)({}, e), {}, {
                    clientVariant: s
                });
            case oe:
                var u, d = (null === (u = e.userInfo) || void 0 === u ? void 0 : u.uid) ? $t("".concat(e.userInfo.uid)) : void 0, p = (0,
                l.Z)({}, e.dismissedQuickActions);
                if (!d)
                    return e;
                var m = p[d] = p[d] || [];
                return m = m.some((function(e) {
                    return e === t.payload.actionContentType
                }
                )) || Pn(t.payload.actionContentType) ? m : m.concat([t.payload.actionContentType]),
                p[d] = m,
                (0,
                l.Z)((0,
                l.Z)({}, e), {}, {
                    dismissedQuickActions: p
                });
            case ce:
                return (0,
                l.Z)((0,
                l.Z)({}, e), {}, {
                    shouldRunFREOnWindows: t.payload
                });
            case se:
                return (0,
                l.Z)((0,
                l.Z)({}, e), {}, {
                    shouldRunFlexFREOnWindows: t.payload
                });
            default:
                return e
            }
        }
        ))
          , On = {
            token: {
                token: "",
                expiresOn: -1
            },
            initialPathname: void 0
        };
        var Fn, Mn, Un, Zn, Hn, Bn, Wn, Vn, Gn, zn, Yn, qn = a(4322), Kn = a.n(qn), jn = a(3032), Xn = a(7747), $n = a(6589);
        !function(e) {
            e.Light = "Light",
            e.Dark = "Dark",
            e.OSTheme = "OSTheme"
        }(Fn || (Fn = {})),
        function(e) {
            e.SHMSFT = "SHMSFT",
            e.INT = "INT",
            e.SH = "SH",
            e.PPE = "PPE",
            e.PROD = "PROD",
            e.GCCH = "GCCH"
        }(Mn || (Mn = {})),
        function(e) {
            e.DERIVED = "DERIVED",
            e.PERSISTED_GLOBAL = "PERSISTED_GLOBAL",
            e.PERSISTED_USER = "PERSISTED_USER"
        }(Un || (Un = {})),
        function(e) {
            e.BOOLEAN = "BOOLEAN",
            e.DOUBLE = "DOUBLE",
            e.INTEGER = "INTEGER",
            e.STRING = "STRING",
            e.EEnvironmentType = "EEnvironmentType",
            e.EThemeType = "EThemeType"
        }(Zn || (Zn = {})),
        function(e) {
            e.PIN_TO_TASKBAR = "PIN_TO_TASKBAR",
            e.UNPIN_FROM_TASKBAR = "UNPIN_FROM_TASKBAR"
        }(Hn || (Hn = {})),
        function(e) {
            e.System = "System",
            e.GraphApi = "GraphApi",
            e.OneAuth = "OneAuth",
            e.WebView2 = "WebView2",
            e.Configuration = "Configuration",
            e.Ecs = "Ecs",
            e.Network = "Network",
            e.Localization = "Localization",
            e.Window = "Window",
            e.Store = "Store",
            e.AVDHostApp = "AVDHostApp",
            e.Auth = "Auth",
            e.ExpiredSubscription = "ExpiredSubscription",
            e.NoCloudPcAssigned = "NoCloudPcAssigned"
        }(Bn || (Bn = {})),
        function(e) {
            e.IWP = "IWP",
            e.GraphAPI = "GraphAPI"
        }(Wn || (Wn = {})),
        function(e) {
            e.AVDAppInstalling = "AVDAppInstalling",
            e.AVDAppInstallCompleted = "AVDAppInstallCompleted",
            e.AVDAppInstallErrored = "AVDAppInstallErrored",
            e.AVDAppAlreadyInstalled = "AVDAppAlreadyInstalled"
        }(Vn || (Vn = {})),
        function(e) {
            e.Initializing = "Initializing",
            e.Authenticating = "Authenticating",
            e.Finalizing = "Finalizing",
            e.Connected = "Connected",
            e.Disconnected = "Disconnected"
        }(Gn || (Gn = {})),
        function(e) {
            e.Succeeded = "Succeeded",
            e.Failed = "Failed",
            e.InProgress = "InProgress"
        }(zn || (zn = {})),
        function(e) {
            e.IsPinnedToTaskbar = "IsPinnedToTaskbar"
        }(Yn || (Yn = {}));
        var Qn = {
            collection: Un.DERIVED,
            name: "environment_type",
            type: Zn.EEnvironmentType
        }
          , Jn = (Un.PERSISTED_GLOBAL,
        Zn.BOOLEAN,
        Un.PERSISTED_GLOBAL,
        Zn.INTEGER,
        {
            collection: Un.DERIVED,
            name: "language",
            type: Zn.STRING
        })
          , ea = {
            collection: Un.DERIVED,
            name: "package_version",
            type: Zn.STRING
        }
          , ta = {
            collection: Un.DERIVED,
            name: "header_height",
            type: Zn.INTEGER
        }
          , na = {
            collection: Un.DERIVED,
            name: "header_right_offset",
            type: Zn.INTEGER
        }
          , aa = (Un.DERIVED,
        Zn.DOUBLE,
        Un.PERSISTED_GLOBAL,
        Zn.INTEGER,
        Un.PERSISTED_USER,
        Zn.EThemeType,
        {
            collection: Un.DERIVED,
            name: "enable_pin_to_taskbar",
            type: Zn.BOOLEAN
        })
          , ra = {
            collection: Un.DERIVED,
            name: "enable_preview_text",
            type: Zn.BOOLEAN
        }
          , oa = function() {
            function e() {
                (0,
                i.Z)(this, e)
            }
            return (0,
            c.Z)(e, null, [{
                key: "ArrayOfSettingInfoProcessor",
                value: function() {
                    return e.ArrayOfSettingInfoValue || (e.ArrayOfSettingInfoValue = {
                        process: function(t) {
                            for (var n = e.SettingInfoProcessor(), a = 0; a < t.length; a++)
                                n.process ? n.process(t[a]) : n.convert && (t[a] = n.convert(t[a]))
                        }
                    }),
                    e.ArrayOfSettingInfoValue
                }
            }, {
                key: "ArrayOfSettingEntryProcessor",
                value: function() {
                    return e.ArrayOfSettingEntryValue || (e.ArrayOfSettingEntryValue = {
                        process: function(t) {
                            for (var n = e.SettingEntryProcessor(), a = 0; a < t.length; a++)
                                n.process ? n.process(t[a]) : n.convert && (t[a] = n.convert(t[a]))
                        }
                    }),
                    e.ArrayOfSettingEntryValue
                }
            }, {
                key: "ArrayOfUserSettingsCollectionProcessor",
                value: function() {
                    return e.ArrayOfUserSettingsCollectionValue || (e.ArrayOfUserSettingsCollectionValue = {
                        process: function(t) {
                            for (var n = e.UserSettingsCollectionProcessor(), a = 0; a < t.length; a++)
                                n.process ? n.process(t[a]) : n.convert && (t[a] = n.convert(t[a]))
                        }
                    }),
                    e.ArrayOfUserSettingsCollectionValue
                }
            }, {
                key: "EThemeTypeProcessor",
                value: function() {
                    return e.EThemeTypeValue || (e.EThemeTypeValue = {
                        convert: function(e) {
                            return e
                        }
                    }),
                    e.EThemeTypeValue
                }
            }, {
                key: "EEnvironmentTypeProcessor",
                value: function() {
                    return e.EEnvironmentTypeValue || (e.EEnvironmentTypeValue = {
                        convert: function(e) {
                            return e
                        }
                    }),
                    e.EEnvironmentTypeValue
                }
            }, {
                key: "ESettingsCollectionProcessor",
                value: function() {
                    return e.ESettingsCollectionValue || (e.ESettingsCollectionValue = {
                        convert: function(e) {
                            return e
                        }
                    }),
                    e.ESettingsCollectionValue
                }
            }, {
                key: "ESupportedTypesProcessor",
                value: function() {
                    return e.ESupportedTypesValue || (e.ESupportedTypesValue = {
                        convert: function(e) {
                            return e
                        }
                    }),
                    e.ESupportedTypesValue
                }
            }, {
                key: "EActionProcessor",
                value: function() {
                    return e.EActionValue || (e.EActionValue = {
                        convert: function(e) {
                            return e
                        }
                    }),
                    e.EActionValue
                }
            }, {
                key: "ErrorTypeProcessor",
                value: function() {
                    return e.ErrorTypeValue || (e.ErrorTypeValue = {
                        convert: function(e) {
                            return e
                        }
                    }),
                    e.ErrorTypeValue
                }
            }, {
                key: "TokenTargetProcessor",
                value: function() {
                    return e.TokenTargetValue || (e.TokenTargetValue = {
                        convert: function(e) {
                            return e
                        }
                    }),
                    e.TokenTargetValue
                }
            }, {
                key: "HomePageMessageBarStateProcessor",
                value: function() {
                    return e.HomePageMessageBarStateValue || (e.HomePageMessageBarStateValue = {
                        convert: function(e) {
                            return e
                        }
                    }),
                    e.HomePageMessageBarStateValue
                }
            }, {
                key: "ConnectionStatusCheckpointProcessor",
                value: function() {
                    return e.ConnectionStatusCheckpointValue || (e.ConnectionStatusCheckpointValue = {
                        convert: function(e) {
                            return e
                        }
                    }),
                    e.ConnectionStatusCheckpointValue
                }
            }, {
                key: "ActionStatusProcessor",
                value: function() {
                    return e.ActionStatusValue || (e.ActionStatusValue = {
                        convert: function(e) {
                            return e
                        }
                    }),
                    e.ActionStatusValue
                }
            }, {
                key: "DeviceStateProcessor",
                value: function() {
                    return e.DeviceStateValue || (e.DeviceStateValue = {
                        convert: function(e) {
                            return e
                        }
                    }),
                    e.DeviceStateValue
                }
            }, {
                key: "SettingDataProcessor",
                value: function() {
                    return {}
                }
            }, {
                key: "SettingInfoProcessor",
                value: function() {
                    return e.SettingInfoValue || (e.SettingInfoValue = {
                        process: function(t) {
                            var n = e.ESettingsCollectionProcessor();
                            n.process ? n.process(t.collection) : n.convert && (t.collection = n.convert(t.collection));
                            var a = void 0 === t.type ? {} : e.ESupportedTypesProcessor();
                            a.process ? a.process(t.type) : a.convert && (t.type = a.convert(t.type))
                        }
                    }),
                    e.SettingInfoValue
                }
            }, {
                key: "SettingEntryProcessor",
                value: function() {
                    return e.SettingEntryValue || (e.SettingEntryValue = {
                        process: function(t) {
                            var n = e.SettingInfoProcessor();
                            n.process ? n.process(t.info) : n.convert && (t.info = n.convert(t.info));
                            var a = e.SettingDataProcessor();
                            a.process ? a.process(t.data) : a.convert && (t.data = a.convert(t.data))
                        }
                    }),
                    e.SettingEntryValue
                }
            }, {
                key: "TokenProcessor",
                value: function() {
                    return {}
                }
            }, {
                key: "ConnectionStatusProcessor",
                value: function() {
                    return e.ConnectionStatusValue || (e.ConnectionStatusValue = {
                        process: function(t) {
                            var n = e.ConnectionStatusCheckpointProcessor();
                            n.process ? n.process(t.status) : n.convert && (t.status = n.convert(t.status))
                        }
                    }),
                    e.ConnectionStatusValue
                }
            }, {
                key: "DeviceProcessor",
                value: function() {
                    return {}
                }
            }, {
                key: "ActionParamsProcessor",
                value: function() {
                    return e.ActionParamsValue || (e.ActionParamsValue = {
                        process: function(t) {
                            var n = e.DeviceProcessor();
                            n.process ? n.process(t.device) : n.convert && (t.device = n.convert(t.device))
                        }
                    }),
                    e.ActionParamsValue
                }
            }, {
                key: "ActionResponseProcessor",
                value: function() {
                    return e.ActionResponseValue || (e.ActionResponseValue = {
                        process: function(t) {
                            var n = e.ActionStatusProcessor();
                            n.process ? n.process(t.status) : n.convert && (t.status = n.convert(t.status))
                        }
                    }),
                    e.ActionResponseValue
                }
            }, {
                key: "StateResponseProcessor",
                value: function() {
                    return {}
                }
            }, {
                key: "AccountProcessor",
                value: function() {
                    return {}
                }
            }, {
                key: "CreateConnectionParamsProcessor",
                value: function() {
                    return {}
                }
            }, {
                key: "GetSettingParamsProcessor",
                value: function() {
                    return e.GetSettingParamsValue || (e.GetSettingParamsValue = {
                        process: function(t) {
                            var n = e.SettingInfoProcessor();
                            n.process ? n.process(t.setting) : n.convert && (t.setting = n.convert(t.setting))
                        }
                    }),
                    e.GetSettingParamsValue
                }
            }, {
                key: "GetSettingsParamsProcessor",
                value: function() {
                    return e.GetSettingsParamsValue || (e.GetSettingsParamsValue = {
                        process: function(t) {
                            var n = e.ArrayOfSettingInfoProcessor();
                            n.process ? n.process(t.settings) : n.convert && (t.settings = n.convert(t.settings))
                        }
                    }),
                    e.GetSettingsParamsValue
                }
            }, {
                key: "GetTokenParamsProcessor",
                value: function() {
                    return e.GetTokenParamsValue || (e.GetTokenParamsValue = {
                        process: function(t) {
                            var n = e.TokenTargetProcessor();
                            n.process ? n.process(t.target) : n.convert && (t.target = n.convert(t.target))
                        }
                    }),
                    e.GetTokenParamsValue
                }
            }, {
                key: "OpenLinkWithDefaultBrowserParamsProcessor",
                value: function() {
                    return {}
                }
            }, {
                key: "SignInParamsProcessor",
                value: function() {
                    return {}
                }
            }, {
                key: "UpdateSettingFromWebPortalParamsProcessor",
                value: function() {
                    return e.UpdateSettingFromWebPortalParamsValue || (e.UpdateSettingFromWebPortalParamsValue = {
                        process: function(t) {
                            var n = e.SettingEntryProcessor();
                            n.process ? n.process(t.setting) : n.convert && (t.setting = n.convert(t.setting))
                        }
                    }),
                    e.UpdateSettingFromWebPortalParamsValue
                }
            }, {
                key: "GetDeviceStateParamsProcessor",
                value: function() {
                    return e.GetDeviceStateParamsValue || (e.GetDeviceStateParamsValue = {
                        process: function(t) {
                            var n = e.DeviceProcessor();
                            n.process ? n.process(t.device) : n.convert && (t.device = n.convert(t.device));
                            var a = e.DeviceStateProcessor();
                            a.process ? a.process(t.state) : a.convert && (t.state = a.convert(t.state))
                        }
                    }),
                    e.GetDeviceStateParamsValue
                }
            }, {
                key: "DeviceActionParamsProcessor",
                value: function() {
                    return e.DeviceActionParamsValue || (e.DeviceActionParamsValue = {
                        process: function(t) {
                            var n = e.EActionProcessor();
                            n.process ? n.process(t.action) : n.convert && (t.action = n.convert(t.action));
                            var a = e.ActionParamsProcessor();
                            a.process ? a.process(t.actionParams) : a.convert && (t.actionParams = a.convert(t.actionParams))
                        }
                    }),
                    e.DeviceActionParamsValue
                }
            }, {
                key: "AccountFoundParamsProcessor",
                value: function() {
                    return e.AccountFoundParamsValue || (e.AccountFoundParamsValue = {
                        process: function(t) {
                            var n = e.AccountProcessor();
                            n.process ? n.process(t.account) : n.convert && (t.account = n.convert(t.account))
                        }
                    }),
                    e.AccountFoundParamsValue
                }
            }, {
                key: "UpdateSettingFromNativeClientParamsProcessor",
                value: function() {
                    return e.UpdateSettingFromNativeClientParamsValue || (e.UpdateSettingFromNativeClientParamsValue = {
                        process: function(t) {
                            var n = e.SettingEntryProcessor();
                            n.process ? n.process(t.setting) : n.convert && (t.setting = n.convert(t.setting))
                        }
                    }),
                    e.UpdateSettingFromNativeClientParamsValue
                }
            }, {
                key: "SetErrorParamsProcessor",
                value: function() {
                    return e.SetErrorParamsValue || (e.SetErrorParamsValue = {
                        process: function(t) {
                            var n = e.ErrorTypeProcessor();
                            n.process ? n.process(t.type) : n.convert && (t.type = n.convert(t.type))
                        }
                    }),
                    e.SetErrorParamsValue
                }
            }, {
                key: "UpdateHomePageMessageBarStatusParamsProcessor",
                value: function() {
                    return e.UpdateHomePageMessageBarStatusParamsValue || (e.UpdateHomePageMessageBarStatusParamsValue = {
                        process: function(t) {
                            var n = e.HomePageMessageBarStateProcessor();
                            n.process ? n.process(t.status) : n.convert && (t.status = n.convert(t.status))
                        }
                    }),
                    e.UpdateHomePageMessageBarStatusParamsValue
                }
            }, {
                key: "UpdateConnectionStatusParamsProcessor",
                value: function() {
                    return e.UpdateConnectionStatusParamsValue || (e.UpdateConnectionStatusParamsValue = {
                        process: function(t) {
                            var n = e.ConnectionStatusProcessor();
                            n.process ? n.process(t.status) : n.convert && (t.status = n.convert(t.status))
                        }
                    }),
                    e.UpdateConnectionStatusParamsValue
                }
            }, {
                key: "DerivedSettingsCollectionProcessor",
                value: function() {
                    return {}
                }
            }, {
                key: "GlobalSettingsCollectionProcessor",
                value: function() {
                    return {}
                }
            }, {
                key: "UserSettingsCollectionProcessor",
                value: function() {
                    return e.UserSettingsCollectionValue || (e.UserSettingsCollectionValue = {
                        process: function(t) {
                            var n = e.EThemeTypeProcessor();
                            n.process ? n.process(t.themeType) : n.convert && (t.themeType = n.convert(t.themeType))
                        }
                    }),
                    e.UserSettingsCollectionValue
                }
            }, {
                key: "StoredAppSettingsCollectionProcessor",
                value: function() {
                    return e.StoredAppSettingsCollectionValue || (e.StoredAppSettingsCollectionValue = {
                        process: function(t) {
                            var n = e.GlobalSettingsCollectionProcessor();
                            n.process ? n.process(t.globalSettings) : n.convert && (t.globalSettings = n.convert(t.globalSettings));
                            var a = e.ArrayOfUserSettingsCollectionProcessor();
                            a.process ? a.process(t.userSettingsList) : a.convert && (t.userSettingsList = a.convert(t.userSettingsList))
                        }
                    }),
                    e.StoredAppSettingsCollectionValue
                }
            }, {
                key: "SettingsProcessor",
                value: function() {
                    return e.SettingsValue || (e.SettingsValue = {
                        process: function(t) {
                            var n = e.StoredAppSettingsCollectionProcessor();
                            n.process ? n.process(t.persistedSettings) : n.convert && (t.persistedSettings = n.convert(t.persistedSettings));
                            var a = e.DerivedSettingsCollectionProcessor();
                            a.process ? a.process(t.derivedSettings) : a.convert && (t.derivedSettings = a.convert(t.derivedSettings))
                        }
                    }),
                    e.SettingsValue
                }
            }, {
                key: "UpdateSettingsParamsProcessor",
                value: function() {
                    return e.UpdateSettingsParamsValue || (e.UpdateSettingsParamsValue = {
                        process: function(t) {
                            var n = e.SettingsProcessor();
                            n.process ? n.process(t.settings) : n.convert && (t.settings = n.convert(t.settings))
                        }
                    }),
                    e.UpdateSettingsParamsValue
                }
            }]),
            e
        }();
        function ia(e, t, n) {
            return ca.apply(this, arguments)
        }
        function ca() {
            return (ca = (0,
            jn.Z)(Kn().mark((function e(t, n, a) {
                var r;
                return Kn().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return r = {
                                launchUrl: t,
                                workspaceId: n,
                                launchCount: a
                            },
                            e.abrupt("return", Xn.HostBridge.invokeHost("Windows365PieSchema.CreateConnection", r, Xn.NoopPostProcessingFactory()));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        function sa(e) {
            return la.apply(this, arguments)
        }
        function la() {
            return (la = (0,
            jn.Z)(Kn().mark((function e(t) {
                var n;
                return Kn().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = {
                                setting: t
                            },
                            e.abrupt("return", Xn.HostBridge.invokeHost("Windows365PieSchema.GetSetting", n, oa.SettingDataProcessor()));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        function ua(e) {
            return da.apply(this, arguments)
        }
        function da() {
            return (da = (0,
            jn.Z)(Kn().mark((function e(t) {
                var n;
                return Kn().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = {
                                settings: t
                            },
                            e.abrupt("return", Xn.HostBridge.invokeHost("Windows365PieSchema.GetSettings", n, oa.ArrayOfSettingEntryProcessor()));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        function pa() {
            return ma.apply(this, arguments)
        }
        function ma() {
            return (ma = (0,
            jn.Z)(Kn().mark((function e() {
                return Kn().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.abrupt("return", Xn.HostBridge.invokeHost("Windows365PieSchema.GetIWPToken", {}, Xn.NoopPostProcessingFactory()));
                        case 1:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        function fa() {
            return va.apply(this, arguments)
        }
        function va() {
            return (va = (0,
            jn.Z)(Kn().mark((function e() {
                return Kn().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.abrupt("return", Xn.HostBridge.invokeHost("Windows365PieSchema.GetGraphAPIToken", {}, Xn.NoopPostProcessingFactory()));
                        case 1:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        function Ea(e) {
            return ga.apply(this, arguments)
        }
        function ga() {
            return (ga = (0,
            jn.Z)(Kn().mark((function e(t) {
                var n;
                return Kn().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = {
                                url: t
                            },
                            e.abrupt("return", Xn.HostBridge.invokeHost("Windows365PieSchema.OpenLinkWithDefaultBrowser", n, Xn.NoopPostProcessingFactory()));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        function ha() {
            return ba.apply(this, arguments)
        }
        function ba() {
            return (ba = (0,
            jn.Z)(Kn().mark((function e() {
                return Kn().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.abrupt("return", Xn.HostBridge.invokeHost("Windows365PieSchema.SignalIWPLoad", {}, Xn.NoopPostProcessingFactory()));
                        case 1:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        function wa() {
            return ya.apply(this, arguments)
        }
        function ya() {
            return (ya = (0,
            jn.Z)(Kn().mark((function e() {
                return Kn().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.abrupt("return", Xn.HostBridge.invokeHost("Windows365PieSchema.SignOut", {}, Xn.NoopPostProcessingFactory()));
                        case 1:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        function _a() {
            return (_a = (0,
            jn.Z)(Kn().mark((function e() {
                return Kn().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.abrupt("return", Xn.HostBridge.invokeHost("Windows365PieSchema.OpenThirdPartyNotice", {}, Xn.NoopPostProcessingFactory()));
                        case 1:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        function Ca() {
            return (Ca = (0,
            jn.Z)(Kn().mark((function e(t, n) {
                var a;
                return Kn().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return a = {
                                device: t,
                                state: n
                            },
                            e.abrupt("return", Xn.HostBridge.invokeHost("Windows365PieSchema.GetDeviceState", a, oa.StateResponseProcessor()));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        function ka(e, t) {
            return Ia.apply(this, arguments)
        }
        function Ia() {
            return (Ia = (0,
            jn.Z)(Kn().mark((function e(t, n) {
                var a;
                return Kn().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return a = {
                                action: t,
                                actionParams: n
                            },
                            e.abrupt("return", Xn.HostBridge.invokeHost("Windows365PieSchema.DeviceAction", a, oa.ActionResponseProcessor()));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        function Sa() {
            return xa.apply(this, arguments)
        }
        function xa() {
            return (xa = (0,
            jn.Z)(Kn().mark((function e() {
                return Kn().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.abrupt("return", Xn.HostBridge.invokeHost("Windows365PieSchema.GetInitialSettings", {}, oa.SettingsProcessor()));
                        case 1:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        function Na(e) {
            return Xn.HostBridge.registerForEvent("Windows365PieSchema.UpdateSettingFromNativeClient", (function(t) {
                if (t) {
                    var n = oa.UpdateSettingFromNativeClientParamsProcessor();
                    n.process ? n.process(t) : n.convert && (t = n.convert(t)),
                    e(t.setting)
                }
            }
            ))
        }
        function Ra(e) {
            return Xn.HostBridge.registerForEvent("Windows365PieSchema.UpdateHomePageMessageBarStatus", (function(t) {
                if (t) {
                    var n = oa.UpdateHomePageMessageBarStatusParamsProcessor();
                    n.process ? n.process(t) : n.convert && (t = n.convert(t)),
                    e(t.status)
                }
            }
            ))
        }
        function Ta(e) {
            return Xn.HostBridge.registerForEvent("Windows365PieSchema.UpdateConnectionStatus", (function(t) {
                if (t) {
                    var n = oa.UpdateConnectionStatusParamsProcessor();
                    n.process ? n.process(t) : n.convert && (t = n.convert(t)),
                    e(t.status)
                }
            }
            ))
        }
        function Pa(e) {
            return window.devicePixelRatio && e ? Math.floor(e / window.devicePixelRatio) : e
        }
        function Aa(e) {
            return Da.apply(this, arguments)
        }
        function Da() {
            return (Da = (0,
            jn.Z)(Kn().mark((function e(t) {
                var n;
                return Kn().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0,
                            e.next = 3,
                            La();
                        case 3:
                            return n = e.sent,
                            e.abrupt("return", n >= t);
                        case 7:
                            return e.prev = 7,
                            e.t0 = e.catch(0),
                            console.warn(e.t0),
                            e.abrupt("return", !1);
                        case 11:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[0, 7]])
            }
            )))).apply(this, arguments)
        }
        function La() {
            return Oa.apply(this, arguments)
        }
        function Oa() {
            return (Oa = (0,
            jn.Z)(Kn().mark((function e() {
                var t;
                return Kn().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (e.prev = 0,
                            !(0,
                            $n.Gz)()) {
                                e.next = 9;
                                break
                            }
                            return "Windows365PieSchema",
                            e.next = 5,
                            Xn.HostBridge.getNamespaceVersion("Windows365PieSchema");
                        case 5:
                            return t = e.sent,
                            e.abrupt("return", t);
                        case 9:
                            console.warn("PIE helper function called outside native context");
                        case 10:
                            e.next = 15;
                            break;
                        case 12:
                            e.prev = 12,
                            e.t0 = e.catch(0),
                            Vv({
                                error: new Error(ut.PIEError),
                                errorType: ut.PIEError,
                                key: "PIE",
                                msg: "Failed to get namespace version. Error:" + e.t0
                            });
                        case 15:
                            return e.abrupt("return", 0);
                        case 16:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[0, 12]])
            }
            )))).apply(this, arguments)
        }
        function Fa(e, t) {
            switch (t.info.type) {
            case Zn.EEnvironmentType:
                e.environment_type = t.data.value;
                break;
            default:
                t.info.name !== ta.name && t.info.name !== na.name || (t.data.value = Pa(t.data.value)),
                Reflect.has(e, t.info.name) && Reflect.set(e, t.info.name, t.data.value)
            }
            return e
        }
        function Ma() {
            return Ua.apply(this, arguments)
        }
        function Ua() {
            return (Ua = (0,
            jn.Z)(Kn().mark((function e() {
                var t, n, a, r, o, i, c, s;
                return Kn().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return t = [Qn, Jn, ta, na, ea],
                            n = {
                                environment_type: Mn.SHMSFT,
                                language: "",
                                header_height: 48,
                                header_right_offset: 138,
                                package_version: "...",
                                enable_pin_to_taskbar: !1,
                                enable_preview_text: !0
                            },
                            e.prev = 2,
                            e.next = 5,
                            ua(t);
                        case 5:
                            a = e.sent,
                            r = (0,
                            ot.Z)(a);
                            try {
                                for (r.s(); !(o = r.n()).done; )
                                    i = o.value,
                                    Fa(n, i)
                            } catch (l) {
                                r.e(l)
                            } finally {
                                r.f()
                            }
                            e.next = 13;
                            break;
                        case 10:
                            e.prev = 10,
                            e.t0 = e.catch(2),
                            Vv({
                                error: new Error(ut.PIEError),
                                errorType: ut.PIEError,
                                key: "PIE",
                                msg: "Error while applying config from client. Error:" + e.t0
                            });
                        case 13:
                            return e.next = 15,
                            Aa(ve);
                        case 15:
                            if (!e.sent) {
                                e.next = 26;
                                break
                            }
                            return e.prev = 16,
                            e.next = 19,
                            sa(aa);
                        case 19:
                            c = e.sent,
                            Fa(n, {
                                info: aa,
                                data: c
                            }),
                            e.next = 26;
                            break;
                        case 23:
                            e.prev = 23,
                            e.t1 = e.catch(16),
                            Vv({
                                error: new Error(ut.PIEError),
                                errorType: ut.PIEError,
                                key: "PinToTaskbarSetting",
                                msg: "Failed to fetch pin to taskbar setting value. Error:" + e.t1
                            });
                        case 26:
                            return e.next = 28,
                            Aa(1.4);
                        case 28:
                            if (!e.sent) {
                                e.next = 40;
                                break
                            }
                            return e.prev = 29,
                            e.next = 32,
                            sa(ra);
                        case 32:
                            s = e.sent,
                            console.log(s),
                            Fa(n, {
                                info: ra,
                                data: s
                            }),
                            e.next = 40;
                            break;
                        case 37:
                            e.prev = 37,
                            e.t2 = e.catch(29),
                            Vv({
                                error: new Error(ut.PIEError),
                                errorType: ut.PIEError,
                                key: "EnablePreviewTextSetting",
                                msg: "Failed to fetch enable preview text setting value. Error:" + e.t2
                            });
                        case 40:
                            return e.abrupt("return", n);
                        case 41:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[2, 10], [16, 23], [29, 37]])
            }
            )))).apply(this, arguments)
        }
        function Za(e, t) {
            var n = Mn.SHMSFT;
            switch (t.env) {
            case at.INT:
                n = Mn.INT;
                break;
            case at.SH:
                n = Mn.SHMSFT;
                break;
            case at.PPE:
                n = Mn.PPE;
                break;
            case at.Prod:
                n = Mn.PROD
            }
            return {
                environment_type: n,
                language: e.derivedSettings.language,
                header_height: Pa(e.derivedSettings.headerHeight),
                header_right_offset: Pa(e.derivedSettings.headerRightOffset),
                package_version: e.derivedSettings.packageVersion,
                enable_pin_to_taskbar: !1,
                enable_preview_text: !0
            }
        }
        oa.ArrayOfSettingInfoValue = void 0,
        oa.ArrayOfSettingEntryValue = void 0,
        oa.ArrayOfUserSettingsCollectionValue = void 0,
        oa.EThemeTypeValue = void 0,
        oa.EEnvironmentTypeValue = void 0,
        oa.ESettingsCollectionValue = void 0,
        oa.ESupportedTypesValue = void 0,
        oa.EActionValue = void 0,
        oa.ErrorTypeValue = void 0,
        oa.TokenTargetValue = void 0,
        oa.HomePageMessageBarStateValue = void 0,
        oa.ConnectionStatusCheckpointValue = void 0,
        oa.ActionStatusValue = void 0,
        oa.DeviceStateValue = void 0,
        oa.SettingInfoValue = void 0,
        oa.SettingEntryValue = void 0,
        oa.ConnectionStatusValue = void 0,
        oa.ActionParamsValue = void 0,
        oa.ActionResponseValue = void 0,
        oa.GetSettingParamsValue = void 0,
        oa.GetSettingsParamsValue = void 0,
        oa.GetTokenParamsValue = void 0,
        oa.UpdateSettingFromWebPortalParamsValue = void 0,
        oa.GetDeviceStateParamsValue = void 0,
        oa.DeviceActionParamsValue = void 0,
        oa.AccountFoundParamsValue = void 0,
        oa.UpdateSettingFromNativeClientParamsValue = void 0,
        oa.SetErrorParamsValue = void 0,
        oa.UpdateHomePageMessageBarStatusParamsValue = void 0,
        oa.UpdateConnectionStatusParamsValue = void 0,
        oa.UserSettingsCollectionValue = void 0,
        oa.StoredAppSettingsCollectionValue = void 0,
        oa.SettingsValue = void 0,
        oa.UpdateSettingsParamsValue = void 0;
        var Ha = "INIT_NATIVE_CLIENT_ASYNC"
          , Ba = "INIT_NATIVE_CLIENT"
          , Wa = "SET_NATIVE_CLIENT_READY"
          , Va = "SET_NATIVE_CLIENT_CONFIG"
          , Ga = "NATIVE_CLIENT_SHOW_ACCOUNT"
          , za = "NATIVE_CLIENT_HIDE_ACCOUNT"
          , Ya = "NATIVE_CLIENT_SHOW_FEEDBACK"
          , qa = "NATIVE_CLIENT_HIDE_FEEDBACK"
          , Ka = "NATIVE_CLIENT_SHOW_SETTINGS"
          , ja = "NATIVE_CLIENT_HIDE_SETTINGS"
          , Xa = "SET_PROFILE_PICTURE_URL"
          , $a = "SET_PROFILE_PICTURE_URL_ASYNC"
          , Qa = "NATIVE_CLIENT_LOGOUT_ASYNC"
          , Ja = "SET_NATIVE_CLIENT_CONNECTION_STATUS"
          , er = "NATIVE_CLIENT_CONNECTION_STARTING_ASYNC"
          , tr = "NATIVE_CLIENT_SHOW_CONNECTION_ERROR"
          , nr = "NATIVE_CLIENT_HIDE_CONNECTION_ERROR"
          , ar = "NATIVE_CLIENT_INCREMENT_LAUNCH_COUNT"
          , rr = "NATIVE_CLIENT_HIDE_HOMEPAGE_MESSAGE_BAR"
          , or = "SET_NATIVE_CLIENT_HOMEPAGE_MESSAGE_BAR_STATUS"
          , ir = "SHOW_FLEX_DIALOG"
          , cr = "SET_FLEX_DIALOG_CONFIRMED"
          , sr = "SHOW_PIN_TO_TASKBAR"
          , lr = "SHOW_UNPIN_FROM_TASKBAR"
          , ur = "SET_PIE_VERSION"
          , dr = {
            config: {
                language: "",
                environment_type: Mn.SHMSFT,
                package_version: "...",
                header_height: 48,
                header_right_offset: 135,
                enable_pin_to_taskbar: !1,
                enable_preview_text: !1
            },
            pieVersion: 0,
            nativeClientReady: !1,
            showAccountUI: !1,
            showSettingsUI: !1,
            showFeedbackUI: !1,
            profilePictureUrl: void 0,
            connectionStatus: {},
            connectionErrorWorkspaceId: null,
            launchCount: 0,
            homepageMessageBar: null,
            flexStatus: {},
            deviceState: {}
        };
        var pr = "SET_IWP_Feedback_Initialized"
          , mr = "SET_IWP_Feedback_V2_Initialized"
          , fr = "SET_COMPLIANCE_CHECK"
          , vr = {
            iwpFeedbackInitialized: !1,
            iwpFeedbackV2Initialized: !1,
            complianceCheckInitialized: !1
        };
        var Er = "SET_IWP_TOKEN"
          , gr = "SSO_REFRESH_TOKEN_ASYNC"
          , hr = "SIGNOUT_CURRENT_USER"
          , br = "SIGNOUT_COMPLETE"
          , wr = {
            token: null,
            isSignedOut: !1,
            isSignedOutComplete: !0,
            isSSOEnabled: !!userInfo.enableSSO
        };
        var yr = "INIT_THIRD_PARTY_PARTNER_DATA_ASYNC"
          , _r = "INIT_THIRD_PARTY_PARTNER_DATA"
          , Cr = {
            plugin: void 0
        };
        var kr = (0,
        be.UY)({
            Device: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : et
                  , n = arguments.length > 1 ? arguments[1] : void 0
                  , a = e.deviceList
                  , r = e.stateTipsMap
                  , o = e.connectingStateMap
                  , i = e.flexRDPConnectingStateMap
                  , c = e.flexStateMap
                  , s = e.flexRDPStateMap;
                switch (n.type) {
                case Ie:
                case Be:
                    return (0,
                    l.Z)((0,
                    l.Z)({}, e), n.payload);
                case xe:
                    return tt(a, n.payload, "operationDisabled", !0),
                    (0,
                    l.Z)((0,
                    l.Z)({}, e), {}, {
                        deviceList: a.concat([])
                    });
                case Ne:
                    return tt(a, n.payload, "operationDisabled", !1),
                    (0,
                    l.Z)((0,
                    l.Z)({}, e), {}, {
                        deviceList: a.concat([])
                    });
                case Oe:
                    return tt(a, n.payload, "operationDisabledConnectEnabled", !0),
                    (0,
                    l.Z)((0,
                    l.Z)({}, e), {}, {
                        deviceList: a.concat([])
                    });
                case Ye:
                    var u = n.payload
                      , d = u.workspaceId
                      , p = u.actionType;
                    return tt(a, d, "ongoingActionType", p),
                    (0,
                    l.Z)((0,
                    l.Z)({}, e), {}, {
                        deviceList: a.concat([])
                    });
                case qe:
                    return tt(a, n.payload, "ongoingActionType", void 0),
                    (0,
                    l.Z)((0,
                    l.Z)({}, e), {}, {
                        deviceList: a.concat([])
                    });
                case Ue:
                    return nt(a, n.payload),
                    (0,
                    l.Z)((0,
                    l.Z)({}, e), {}, {
                        deviceList: a.concat([])
                    });
                case Ze:
                    var m = []
                      , f = n.payload.deviceList || [];
                    return f.forEach((function(e) {
                        nt(a, e)
                    }
                    )),
                    m = f.map((function(e) {
                        return a.find((function(t) {
                            return t.workspaceId === e.workspaceId
                        }
                        )) || e
                    }
                    )),
                    (0,
                    l.Z)((0,
                    l.Z)({}, e), {}, {
                        deviceList: m.concat([])
                    });
                case He:
                    var v = a.filter((function(e) {
                        return e.workspaceId != n.payload
                    }
                    ));
                    return (0,
                    l.Z)((0,
                    l.Z)({}, e), {}, {
                        deviceList: v.concat([])
                    });
                case Ge:
                    return tt(a, n.payload, "diagnoseDisabled", !0),
                    (0,
                    l.Z)((0,
                    l.Z)({}, e), {}, {
                        deviceList: a.concat([])
                    });
                case ze:
                    return tt(a, n.payload, "diagnoseDisabled", !1),
                    (0,
                    l.Z)((0,
                    l.Z)({}, e), {}, {
                        deviceList: a.concat([])
                    });
                case Ke:
                    return r[n.payload.workspaceId] = n.payload.deviceStateTip,
                    (0,
                    l.Z)((0,
                    l.Z)({}, e), {}, {
                        stateTipsMap: (0,
                        l.Z)({}, r)
                    });
                case Je:
                    return tt(a, n.payload.workspaceId, "snapshots", n.payload.snapshots),
                    (0,
                    l.Z)((0,
                    l.Z)({}, e), {}, {
                        deviceList: a.concat([])
                    });
                case je:
                    return delete r[n.payload.workspaceId],
                    (0,
                    l.Z)((0,
                    l.Z)({}, e), {}, {
                        stateTipsMap: (0,
                        l.Z)({}, r)
                    });
                case $e:
                    return (0,
                    l.Z)((0,
                    l.Z)({}, e), {}, {
                        lastLoginMap: n.payload
                    });
                case Re:
                    return o[n.payload.workspaceId] = {
                        text: t("connection-status-generic")
                    },
                    (0,
                    l.Z)((0,
                    l.Z)({}, e), {}, {
                        connectingStateMap: (0,
                        l.Z)({}, o)
                    });
                case Te:
                    return o[n.payload.workspaceId] = void 0,
                    (0,
                    l.Z)((0,
                    l.Z)({}, e), {}, {
                        connectingStateMap: (0,
                        l.Z)({}, o)
                    });
                case Pe:
                    return i[n.payload.workspaceId] = {
                        text: t("connection-status-generic")
                    },
                    (0,
                    l.Z)((0,
                    l.Z)({}, e), {}, {
                        flexRDPConnectingStateMap: (0,
                        l.Z)({}, i)
                    });
                case Ae:
                    return i[n.payload.workspaceId] = void 0,
                    (0,
                    l.Z)((0,
                    l.Z)({}, e), {}, {
                        flexRDPConnectingStateMap: (0,
                        l.Z)({}, i)
                    });
                case De:
                    return c[n.payload.workspaceId] = {
                        state: n.payload.accessState
                    },
                    (0,
                    l.Z)((0,
                    l.Z)({}, e), {}, {
                        flexStateMap: (0,
                        l.Z)({}, c)
                    });
                case Le:
                    return s[n.payload.workspaceId] = {
                        state: n.payload.accessState
                    },
                    (0,
                    l.Z)((0,
                    l.Z)({}, e), {}, {
                        flexRDPStateMap: (0,
                        l.Z)({}, s)
                    });
                default:
                    return e
                }
            },
            Home: Ln,
            Error: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xt
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                case _t:
                    var n = t.payload.statusCode
                      , a = ut.serverError;
                    return n == dt.NotFound ? a = ut.unAuthorizedError : n == dt.Forbidden && (a = ut.LicenseExpireError),
                    (0,
                    l.Z)((0,
                    l.Z)({}, e), {}, {
                        hasError: !0,
                        clientRequestId: t.payload.clientRequestId,
                        errorType: a
                    });
                case Ct:
                    return (0,
                    l.Z)((0,
                    l.Z)({}, e), {}, {
                        hasError: !0,
                        errorType: ut.NoDevicesError
                    });
                case kt:
                    return (0,
                    l.Z)((0,
                    l.Z)({}, e), {}, {
                        hasError: !0,
                        errorType: ut.unCatchedError
                    });
                case It:
                    return (0,
                    l.Z)((0,
                    l.Z)({}, e), {}, {
                        hasError: !0,
                        errorType: ut.serverError
                    });
                case St:
                    return (0,
                    l.Z)((0,
                    l.Z)({}, e), {}, {
                        clientRequestId: void 0,
                        hasError: !1
                    });
                default:
                    return e
                }
            },
            EcsConfiguration: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wt
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                case ft:
                    return (0,
                    l.Z)((0,
                    l.Z)({}, e), {}, {
                        FlightingData: (0,
                        l.Z)((0,
                        l.Z)({}, e.FlightingData), bt(t.payload)),
                        flightingFinished: !0
                    });
                case pt:
                    return (0,
                    l.Z)((0,
                    l.Z)({}, e), {}, {
                        ControlData: (0,
                        l.Z)((0,
                        l.Z)({}, e.ControlData), t.payload),
                        controlFinished: !0
                    });
                case Et:
                    return (0,
                    l.Z)((0,
                    l.Z)({}, e), {}, {
                        ExperimentData: (0,
                        l.Z)((0,
                        l.Z)({}, e.ExperimentData), t.payload),
                        expFinished: !0
                    });
                case gt:
                    var n = e.FlightingData.previewFeatures;
                    for (var a in n)
                        if (Object.prototype.hasOwnProperty.call(n, a)) {
                            var r, o = n[a], i = !0, c = (0,
                            ot.Z)(o.flightingDependencies);
                            try {
                                for (c.s(); !(r = c.n()).done; ) {
                                    var s = r.value;
                                    if ("boolean" === typeof e.FlightingData[s] && !e.FlightingData[s]) {
                                        i = !1;
                                        break
                                    }
                                }
                            } catch (u) {
                                c.e(u)
                            } finally {
                                c.f()
                            }
                            o.dependenciesMet = i,
                            i || (o.enabled = !1)
                        }
                    return (0,
                    l.Z)((0,
                    l.Z)({}, e), {}, {
                        FlightingData: (0,
                        l.Z)((0,
                        l.Z)({}, e.FlightingData), {}, {
                            previewFeatures: n,
                            previewFeaturesInitialized: !0
                        })
                    });
                default:
                    return e
                }
            },
            Mac: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : On
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                case ln:
                    return (0,
                    l.Z)((0,
                    l.Z)({}, e), t.payload);
                case fn:
                    return (0,
                    l.Z)((0,
                    l.Z)({}, e), {}, {
                        initialPathname: t.payload
                    });
                default:
                    return e
                }
            },
            SSO: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wr
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                case Er:
                    return (0,
                    l.Z)((0,
                    l.Z)({}, e), {}, {
                        token: t.payload.token,
                        isSignedOut: !t.payload.token && e.isSignedOut,
                        isSignedOutComplete: !!t.payload.token || e.isSignedOutComplete
                    });
                case hr:
                    return (0,
                    l.Z)((0,
                    l.Z)({}, e), {}, {
                        token: null,
                        isSignedOut: !0,
                        isSignedOutComplete: !1
                    });
                case br:
                    return (0,
                    l.Z)((0,
                    l.Z)({}, e), {}, {
                        token: null,
                        isSignedOut: !0,
                        isSignedOutComplete: !0
                    });
                default:
                    return e
                }
            },
            Ocv: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vr
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                case pr:
                    return (0,
                    l.Z)((0,
                    l.Z)({}, e), {}, {
                        iwpFeedbackInitialized: !0
                    });
                case mr:
                    return (0,
                    l.Z)((0,
                    l.Z)({}, e), {}, {
                        iwpFeedbackV2Initialized: !0
                    });
                case fr:
                    return (0,
                    l.Z)((0,
                    l.Z)({}, e), {}, {
                        complianceCheck: t.payload,
                        complianceCheckInitialized: !0
                    });
                default:
                    return e
                }
            },
            NativeClient: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : dr
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                case Ba:
                    return (0,
                    l.Z)((0,
                    l.Z)({}, e), {}, {
                        config: (0,
                        l.Z)({}, t.payload)
                    });
                case Va:
                    var n = Fa(e.config, t.payload);
                    return (0,
                    l.Z)((0,
                    l.Z)({}, e), {}, {
                        config: n
                    });
                case Wa:
                    return (0,
                    l.Z)((0,
                    l.Z)({}, e), {}, {
                        nativeClientReady: t.payload
                    });
                case Ga:
                    return (0,
                    l.Z)((0,
                    l.Z)({}, e), {}, {
                        showAccountUI: !0
                    });
                case za:
                    return (0,
                    l.Z)((0,
                    l.Z)({}, e), {}, {
                        showAccountUI: !1
                    });
                case Ya:
                    return (0,
                    l.Z)((0,
                    l.Z)({}, e), {}, {
                        showFeedbackUI: !0
                    });
                case qa:
                    return (0,
                    l.Z)((0,
                    l.Z)({}, e), {}, {
                        showFeedbackUI: !1
                    });
                case Ka:
                    return (0,
                    l.Z)((0,
                    l.Z)({}, e), {}, {
                        showSettingsUI: !0
                    });
                case ja:
                    return (0,
                    l.Z)((0,
                    l.Z)({}, e), {}, {
                        showSettingsUI: !1
                    });
                case Xa:
                    return (0,
                    l.Z)((0,
                    l.Z)({}, e), {}, {
                        profilePictureUrl: t.payload
                    });
                case Ja:
                    return (0,
                    l.Z)((0,
                    l.Z)({}, e), {}, {
                        connectionStatus: (0,
                        l.Z)((0,
                        l.Z)({}, e.connectionStatus), {}, (0,
                        f.Z)({}, t.payload.workspaceId, t.payload))
                    });
                case tr:
                    return (0,
                    l.Z)((0,
                    l.Z)({}, e), {}, {
                        connectionErrorWorkspaceId: t.payload
                    });
                case nr:
                    return (0,
                    l.Z)((0,
                    l.Z)({}, e), {}, {
                        connectionErrorWorkspaceId: null
                    });
                case ar:
                    return (0,
                    l.Z)((0,
                    l.Z)({}, e), {}, {
                        launchCount: e.launchCount + 1
                    });
                case rr:
                    return (0,
                    l.Z)((0,
                    l.Z)({}, e), {}, {
                        homepageMessageBar: null
                    });
                case or:
                    return (0,
                    l.Z)((0,
                    l.Z)({}, e), {}, {
                        homepageMessageBar: t.payload
                    });
                case ir:
                    return (0,
                    l.Z)((0,
                    l.Z)({}, e), {}, {
                        flexStatus: (0,
                        l.Z)((0,
                        l.Z)({}, e.flexStatus), {}, (0,
                        f.Z)({}, t.payload, {
                            workspaceId: t.payload,
                            flexDialogConfirmed: !1,
                            showFlexDialog: !0
                        }))
                    });
                case cr:
                    return (0,
                    l.Z)((0,
                    l.Z)({}, e), {}, {
                        flexStatus: (0,
                        l.Z)((0,
                        l.Z)({}, e.flexStatus), {}, (0,
                        f.Z)({}, t.payload.workspaceId, t.payload))
                    });
                case sr:
                    return (0,
                    l.Z)((0,
                    l.Z)({}, e), {}, {
                        deviceState: (0,
                        l.Z)((0,
                        l.Z)({}, e.deviceState), {}, (0,
                        f.Z)({}, t.payload, (0,
                        l.Z)((0,
                        l.Z)({}, e.deviceState[t.payload]), {}, {
                            isPinnedToTaskbar: !1
                        })))
                    });
                case lr:
                    return (0,
                    l.Z)((0,
                    l.Z)({}, e), {}, {
                        deviceState: (0,
                        l.Z)((0,
                        l.Z)({}, e.deviceState), {}, (0,
                        f.Z)({}, t.payload, (0,
                        l.Z)((0,
                        l.Z)({}, e.deviceState[t.payload]), {}, {
                            isPinnedToTaskbar: !0
                        })))
                    });
                case ur:
                    return (0,
                    l.Z)((0,
                    l.Z)({}, e), {}, {
                        pieVersion: t.payload
                    });
                default:
                    return e
                }
            },
            ThirdPartyPartner: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Cr
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                case _r:
                    return (0,
                    l.Z)((0,
                    l.Z)({}, e), t.payload);
                default:
                    return e
                }
            }
        })
          , Ir = function(e) {
            var t = $t(e.uid);
            return "".concat("iwp_theme.", "_").concat(t)
        }
          , Sr = function(e, t) {
            window.localStorage.setItem(Ir(e), t)
        }
          , xr = function(e) {
            return e === Rt.Dark
        }
          , Nr = function(e, t) {
            if (t == b.Default) {
                var n = function(e) {
                    return window.localStorage.getItem(Ir(e)) || void 0
                }(e);
                return n || (Rr() ? Rt.Dark : Rt.Light)
            }
            return Rt.Light
        }
          , Rr = function() {
            return !(!window.matchMedia || !window.matchMedia("(prefers-color-scheme: dark)").matches)
        }
          , Tr = function(e) {
            var t;
            return null === e || void 0 === e || null === (t = e.EcsConfiguration) || void 0 === t ? void 0 : t.flightingFinished
        }
          , Pr = function(e) {
            var t;
            return null === e || void 0 === e || null === (t = e.EcsConfiguration) || void 0 === t ? void 0 : t.FlightingData
        }
          , Ar = function(e) {
            return e.Device
        }
          , Dr = function(e) {
            return e.Device.deviceList
        }
          , Lr = function(e) {
            var t, n;
            return null === e || void 0 === e || null === (t = e.Home) || void 0 === t || null === (n = t.userInfo) || void 0 === n ? void 0 : n.language
        }
          , Or = function(e) {
            return null === e || void 0 === e ? void 0 : e.Mac
        }
          , Fr = function(e) {
            var t;
            return null === e || void 0 === e || null === (t = e.Home) || void 0 === t ? void 0 : t.userInfo
        }
          , Mr = function(e) {
            return e.Home.selectedDeviceNavKey
        }
          , Ur = function(e) {
            return null === e || void 0 === e ? void 0 : e.SSO
        }
          , Zr = function(e) {
            return null === e || void 0 === e ? void 0 : e.NativeClient
        }
          , Hr = function(e) {
            return e.Ocv.complianceCheck
        }
          , Br = function(e) {
            return null === e || void 0 === e ? void 0 : e.Home
        }
          , Wr = a(4964)
          , Vr = Kn().mark(Gr);
        function Gr(e) {
            var t, n, a, r, o, i, c;
            return Kn().wrap((function(s) {
                for (; ; )
                    switch (s.prev = s.next) {
                    case 0:
                        return console.log("handleTheme saga: type=", e),
                        s.next = 3,
                        (0,
                        Wr.Ys)(Tr);
                    case 3:
                        return t = s.sent,
                        s.next = 6,
                        (0,
                        Wr.Ys)(Br);
                    case 6:
                        return n = s.sent,
                        a = n.clientVariant,
                        s.next = 10,
                        (0,
                        Wr.Ys)(Fr);
                    case 10:
                        if (r = s.sent,
                        o = {
                            needUpdateTheme: !1,
                            themeToRender: void 0
                        },
                        !t) {
                            s.next = 20;
                            break
                        }
                        return s.next = 15,
                        (0,
                        Wr.Ys)(Pr);
                    case 15:
                        i = s.sent,
                        i.IWP_Enable_Dark_Mode || (o.needUpdateTheme = !0,
                        o.themeToRender = Rt.Light),
                        s.next = 22;
                        break;
                    case 20:
                        o.needUpdateTheme = !0,
                        o.themeToRender = Nr(r, a);
                    case 22:
                        if (!o.needUpdateTheme) {
                            s.next = 28;
                            break
                        }
                        if (!(c = o.themeToRender)) {
                            s.next = 28;
                            break
                        }
                        return s.next = 27,
                        (0,
                        Wr.gz)({
                            type: me,
                            payload: {
                                theme: c
                            }
                        });
                    case 27:
                        Sr(r, c);
                    case 28:
                    case "end":
                        return s.stop()
                    }
            }
            ), Vr)
        }
        var zr = a(5371)
          , Yr = a(5557)
          , qr = a(8676)
          , Kr = "/loc/{{lng}}/{{ns}}.".concat(userInfo.version, ".json");
        Yr.ZP.use(zr.Z).use(qr.Db).init({
            lng: userInfo.translation,
            fallbackLng: "en",
            debug: !1,
            react: {
                useSuspense: !1
            },
            backend: {
                loadPath: Kr
            },
            interpolation: {
                escapeValue: !1
            },
            load: "currentOnly"
        });
        function jr() {
            userInfo.uid && (fv.dispatch({
                type: w,
                payload: userInfo
            }),
            Pv())
        }
        function Xr() {
            return fv.getState().Home.userInfo
        }
        var $r, Qr = Xt(userInfo) ? "https://webshell.suite.office365.us/.default" : "https://webshell.suite.office.com/.default", Jr = "https://admin.microsoft.com/M365AdminPortal.Centro.Read", eo = "3b511579-5e00-46e1-a89e-a6f0870e2f5a", to = a(6258), no = function() {
            return "True" === userInfo.enableSpaAuth
        }, ao = function() {
            var e;
            return window.features && "True" === (null === (e = features) || void 0 === e ? void 0 : e.enableEUDB)
        }, ro = ["Emitting event: msal:handleRedirectStart", "Emitting event: msal:handleRedirectEnd", "Emitting event: msal:loginStart"], oo = {
            auth: (0,
            l.Z)((0,
            l.Z)({}, Xt(userInfo) ? {
                authority: "https://login.microsoftonline.us/common"
            } : {}), {}, {
                clientId: eo,
                redirectUri: "".concat(window.location.origin, "/spa-signin-oidc"),
                postLogoutRedirectUri: "/"
            }),
            cache: {
                cacheLocation: "True" === userInfo.enableSessionStorage ? "sessionStorage" : "localStorage"
            },
            system: {
                iframeHashTimeout: 1e4,
                loggerOptions: {
                    loggerCallback: function(e, t, n) {
                        if (!n)
                            switch (e) {
                            case to.i.Error:
                                return void (io(t) || Gv("@azure/msal-browser ".concat(t)));
                            case to.i.Info:
                            case to.i.Verbose:
                            case to.i.Warning:
                                return void Hv("@azure/msal-browser ".concat(t), "web", function(e) {
                                    return "string" === typeof e && ro.some((function(t) {
                                        return e.indexOf(t) >= 0
                                    }
                                    ))
                                }(t) ? 3 : void 0)
                            }
                    },
                    piiLoggingEnabled: !1
                }
            }
        }, io = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            return !!e.includes("popup_window_error")
        }, co = function() {
            var e = (0,
            jn.Z)(Kn().mark((function e(t) {
                var n, a;
                return Kn().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (no()) {
                                e.next = 2;
                                break
                            }
                            return e.abrupt("return");
                        case 2:
                            if ((n = t.getActiveAccount()) && n.idTokenClaims) {
                                e.next = 5;
                                break
                            }
                            return e.abrupt("return");
                        case 5:
                            if (userInfo.tid = uo(n.idTokenClaims, ["tid", "http://schemas.microsoft.com/identity/claims/tenantid"], userInfo.tid),
                            userInfo.uid = uo(n.idTokenClaims, ["oid", "http://schemas.microsoft.com/identity/claims/objectidentifier", "UserIdentifier"], userInfo.uid),
                            userInfo.name = uo(n.idTokenClaims, ["name", "preferred_username"], userInfo.name),
                            userInfo.language = vo(uo(n.idTokenClaims, ["xms_pl", "xms_tpl"], userInfo.language)),
                            userInfo.translation = mo(userInfo.language),
                            userInfo.email = uo(n.idTokenClaims, ["preferred_username", "name"], userInfo.email),
                            userInfo.sid = uo(n.idTokenClaims, ["sid"], userInfo.sid),
                            a = uo(n.idTokenClaims, ["wids"], []),
                            userInfo.isAdmin = a.some((function(e) {
                                return "62e90394-69f5-4237-9190-012177145e10" === e
                            }
                            )) ? "True" : "False",
                            userInfo.isWindows365Admin = a.some((function(e) {
                                return "11451d60-acb2-45eb-a7d6-43d0f0125c13" === e
                            }
                            )) ? "True" : "False",
                            Yr.ZP.changeLanguage(userInfo.translation),
                            ao()) {
                                e.next = 19;
                                break
                            }
                            return e.next = 19,
                            lo();
                        case 19:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(), so = null, lo = function() {
            var e = (0,
            jn.Z)(Kn().mark((function e() {
                return Kn().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (!so) {
                                e.next = 6;
                                break
                            }
                            return e.next = 3,
                            so;
                        case 3:
                            return e.abrupt("return", e.sent);
                        case 6:
                            return so = ji().then((function(e) {
                                try {
                                    var t, n = (null === (t = e.headers) || void 0 === t ? void 0 : t.get("preference-applied")) || "", a = /env=(.*),su=(.*)/g.exec(n);
                                    if (!a || !a[1])
                                        throw Error("Could not load tenant environment");
                                    userInfo.tenantEnvironment = a[1]
                                } catch (r) {
                                    so = null,
                                    console.error(r)
                                }
                                return userInfo.tenantEnvironment
                            }
                            )),
                            e.next = 9,
                            so;
                        case 9:
                            return e.abrupt("return", e.sent);
                        case 10:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function() {
                return e.apply(this, arguments)
            }
        }(), uo = function(e, t, n) {
            for (var a = 0; a < t.length; a++)
                if (e[t[a]])
                    return e[t[a]];
            return n
        }, po = ($r = {},
        (0,
        f.Z)($r, "pt-br", "pt-BR"),
        (0,
        f.Z)($r, "pt-pt", "pt-PT"),
        (0,
        f.Z)($r, "zh-cn", "zh-Hans"),
        (0,
        f.Z)($r, "zh-sg", "zh-Hans"),
        (0,
        f.Z)($r, "zh-chs", "zh-Hans"),
        (0,
        f.Z)($r, "zh-hans", "zh-Hans"),
        (0,
        f.Z)($r, "zh-hk", "zh-Hant"),
        (0,
        f.Z)($r, "zh-mo", "zh-Hant"),
        (0,
        f.Z)($r, "zh-tw", "zh-Hant"),
        (0,
        f.Z)($r, "zh-cht", "zh-Hant"),
        $r), mo = function(e) {
            return po[e.toLowerCase()] || e.split(/[-_]+/)[0].toLowerCase()
        }, fo = "en-US", vo = function(e) {
            try {
                var t = zt(e.replace("_", "-"));
                return t || fo
            } catch (n) {
                return fo
            }
        }, Eo = new u.SyncBailHook(["errorType", "errorCode"]), go = {
            errorPageStyle: {}
        }, ho = new u.SyncWaterfallHook(["homePageConfig", "state"]), bo = function(e) {
            return ho.call(go, e)
        }, wo = new u.SyncBailHook;
        function yo(e) {
            return gv() ? function(e) {
                e({
                    type: C
                }),
                e({
                    type: St
                })
            }(e) : function() {
                var e = "https://docs.microsoft.com/windows-365/end-user-hardware-requirements";
                window.open(e, "_blank")
            }()
        }
        function _o(e, n) {
            var a = kn().brandName
              , r = Eo.call(e, n);
            if (null === r || void 0 === r ? void 0 : r.errorConfig)
                return r.errorConfig;
            switch (e) {
            case ut.unCatchedError:
                return {
                    title: t("error-unCatchedError-title"),
                    info: t("error-unCatchedError-text"),
                    image: "/img/error/unCatched.png"
                };
            case ut.unCatchedRDPError:
                return {
                    title: t("general-rdp-error-title"),
                    info: t("general-rdp-error-message"),
                    supportButtonText: t("support-button-text"),
                    image: "/img/error/server-error.svg",
                    showLogDownload: !0
                };
            case ut.serverError:
                return {
                    title: t("error-serverError-title", {
                        brandName: a
                    }),
                    info: t("error-serverError-text"),
                    infoLink: t("error-serverError-textLink"),
                    infoLinkClick: yo,
                    image: "/img/error/server-error.svg"
                };
            case ut.unAuthorizedError:
                return {
                    title: t("error-unAuthorizedError-title", {
                        brandName: a
                    }),
                    info: t("error-unAuthorizedError-info"),
                    image: "/img/error/unAuth.svg"
                };
            case ut.NoDevicesError:
                return {
                    title: t("error-noDevices-title"),
                    info: t("error-noDevices-text"),
                    image: "/img/error/no-devices.svg"
                };
            case ut.LicenseExpireError:
                return function(e) {
                    return qt(userInfo) ? {
                        title: t("error-licenseExpire-title", {
                            brandName: e
                        }),
                        info: t("error-licenseExpire-admin-text"),
                        infoLink: t("error-licenseExpire-admin-textLink"),
                        infoLinkClick: Co,
                        image: "/img/error/license-expire.svg"
                    } : {
                        title: t("error-licenseExpire-title", {
                            brandName: e
                        }),
                        info: t("error-licenseExpire-enduser-text"),
                        image: "/img/error/license-expire.svg"
                    }
                }(a);
            default:
                return {
                    title: t("error-unCatchedError-title"),
                    info: t("error-unCatchedError-text"),
                    image: "/img/error/unCatched.png"
                }
            }
        }
        function Co() {
            window.open("https://admin.microsoft.com/#/subscriptions", "_blank")
        }
        var ko = a(851)
          , Io = a(1832)
          , So = a(8275)
          , xo = a(7404)
          , No = a(2243)
          , Ro = new Io.L(oo);
        window.app = Ro;
        var To = function() {
            var e = (0,
            jn.Z)(Kn().mark((function e() {
                var t;
                return Kn().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (no()) {
                                e.next = 2;
                                break
                            }
                            return e.abrupt("return");
                        case 2:
                            if (Ro.addEventCallback(function() {
                                var e = (0,
                                jn.Z)(Kn().mark((function e(t) {
                                    return Kn().wrap((function(e) {
                                        for (; ; )
                                            switch (e.prev = e.next) {
                                            case 0:
                                                if (t.eventType !== So.t.LOGIN_SUCCESS || !t.payload.account) {
                                                    e.next = 6;
                                                    break
                                                }
                                                return Ro.setActiveAccount(t.payload.account),
                                                e.next = 4,
                                                co(Ro);
                                            case 4:
                                                jr(),
                                                Fv(userInfo);
                                            case 6:
                                            case "end":
                                                return e.stop()
                                            }
                                    }
                                    ), e)
                                }
                                )));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }()),
                            1 !== (t = Ro.getAllAccounts()).length) {
                                e.next = 11;
                                break
                            }
                            return Ro.setActiveAccount(t[0]),
                            e.next = 8,
                            co(Ro);
                        case 8:
                            jr(),
                            e.next = 12;
                            break;
                        case 11:
                            if (t.length > 1) {
                                Pv();
                                try {
                                    Ro.browserStorage.removeAllAccounts()
                                } catch (n) {
                                    console.error(n)
                                }
                            } else
                                Pv();
                        case 12:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function() {
                return e.apply(this, arguments)
            }
        }()
          , Po = function(e) {
            return e && !e.success && ("IWPERR_400" === (t = e.data.errorCode) || "IWPERR_401" === t || "IWPERR_402" === t || "IWPERR_407" === t || "IWPERR_408" === t || "IWPERR_409" === t || "IWPERR_410" === t || "IWPERR_411" === t);
            var t
        }
          , Ao = function(e) {
            var t = function(e) {
                var t = (0,
                ko.v9)(Fr);
                return (0,
                No.useCallback)((function() {
                    return Ro.acquireTokenPopup({
                        scopes: e,
                        loginHint: t.email
                    })
                }
                ), [e ? e.join("/") : "", t.email])
            }(e)
              , n = (0,
            No.useState)(!1)
              , a = (0,
            s.Z)(n, 2)
              , r = a[0]
              , o = a[1]
              , i = (0,
            No.useCallback)((function(e) {
                Po(e) && o(!0)
            }
            ), [])
              , c = (0,
            No.useCallback)((function(e) {
                e instanceof xo.U && o(!0)
            }
            ), []);
            return {
                handleResponse: i,
                triggerConsent: (0,
                No.useCallback)(function() {
                    var e = (0,
                    jn.Z)(Kn().mark((function e(n) {
                        var a;
                        return Kn().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (!r) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.next = 3,
                                    t();
                                case 3:
                                    (a = e.sent) && a.accessToken && n(a.accessToken, (function() {
                                        o(!1)
                                    }
                                    ));
                                case 5:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(), [t, r]),
                handleBrowserAuthError: c
            }
        }
          , Do = function() {
            var e = (0,
            jn.Z)(Kn().mark((function e(t) {
                return Kn().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.abrupt("return", Ro.acquireTokenPopup({
                                scopes: t,
                                loginHint: userInfo.email
                            }));
                        case 1:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }()
          , Lo = a(9492)
          , Oo = function(e) {
            var t = Ro.getActiveAccount();
            return t ? Ro.acquireTokenSilent({
                scopes: e.scopes,
                account: t
            }).then((function(e) {
                return e
            }
            )).catch((function(t) {
                return "none" === e.interactionType ? t : t instanceof Lo.Yo ? Ro.acquireTokenPopup({
                    scopes: e.scopes,
                    loginHint: userInfo.email
                }).then((function(e) {
                    return e
                }
                )).catch((function(e) {
                    return console.error(e),
                    e
                }
                )) : (console.error(t),
                t)
            }
            )) : null
        }
          , Fo = "72f988bf-86f1-41af-91ab-2d7cd011db47"
          , Mo = "Windows365Portal"
          , Uo = "Frontline";
        var Zo = function() {
            var e = {};
            return userInfo.tid === Fo && userInfo.env === at.SH && (e["x-ms-client-msft-env"] = "selfhost"),
            e
        }
          , Ho = function(e) {
            return "".concat(function() {
                if (userInfo.tid === Fo)
                    return st;
                switch (userInfo.env) {
                case at.INT:
                case at.SH:
                case at.PPE:
                    return ct;
                case at.Prod:
                    return st;
                case at.GHB:
                case at.GHP:
                    return lt;
                default:
                    return ct
                }
            }().endpoint).concat(function() {
                if (userInfo.tid === Fo)
                    return it.Prod;
                switch (userInfo.env) {
                case at.INT:
                    return it.INT;
                case at.SH:
                    return it.Selfhost;
                case at.PPE:
                    return it.Canary;
                case at.GHB:
                case at.GHP:
                case at.Prod:
                    return it.Prod;
                default:
                    return it.INT
                }
            }(), "/").concat(e)
        }
          , Bo = function() {
            var e = (0,
            jn.Z)(Kn().mark((function e() {
                var t, n;
                return Kn().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return t = ["CloudPC.Read.All"],
                            e.next = 3,
                            Oo({
                                scopes: t,
                                interactionType: "none"
                            });
                        case 3:
                            return n = e.sent,
                            e.abrupt("return", null === n || void 0 === n ? void 0 : n.accessToken);
                        case 5:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function() {
                return e.apply(this, arguments)
            }
        }();
        function Wo(e) {
            var t;
            return t = userInfo.env === at.INT ? "https://sip.clients.config.office.net/user/v1.0/web/policies" : "https://clients.config.office.net/user/v1.0/web/policies",
            e ? "".concat(t, "?PoliciesHash=").concat(e) : t
        }
        var Vo = !1;
        try {
            var Go = new URLSearchParams(window.location.search);
            Vo = "True" === Go.get("isEU") || "true" === Go.get("isEU")
        } catch (Sg) {
            Vo = !1
        }
        var zo, Yo, qo = function() {
            return Vo
        }, Ko = (0,
        a(9773).lX)(), jo = function() {
            var e;
            return Ur(null === (e = zo) || void 0 === e ? void 0 : e.getState()) || wr
        }, Xo = null, $o = {
            setRefreshTokenHandler: function(e) {
                Xo = e
            },
            setToken: function(e) {
                var t, n = this.getToken();
                if (null === (t = zo) || void 0 === t || t.dispatch({
                    type: Er,
                    payload: {
                        token: e
                    }
                }),
                !n && e)
                    try {
                        var a = new URLSearchParams(Ko.location.search).get("path");
                        a ? Ko.push(a) : Ko.push("/")
                    } catch (Sg) {
                        console.error(Sg),
                        Ko.push("/")
                    }
            },
            getToken: function() {
                return jo().token
            },
            getRefreshHandler: function() {
                return Xo
            },
            isSSOEnabled: function() {
                return !!jo().isSSOEnabled
            },
            logout: function() {
                var e;
                null === (e = zo) || void 0 === e || e.dispatch({
                    type: hr
                }),
                Ko.push("/sso/signout")
            },
            logoutComplete: function() {
                var e;
                null === (e = zo) || void 0 === e || e.dispatch({
                    type: br
                }),
                Ko.push("/sso/signout")
            }
        };
        function Qo(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 864e5
              , a = new Date
              , r = {
                data: t,
                expire: a.getTime() + n
            };
            localStorage.setItem(e, JSON.stringify(r))
        }
        function Jo(e) {
            var t = localStorage.getItem(e);
            if (!t)
                return null;
            try {
                var n = JSON.parse(t);
                return (new Date).getTime() > n.expire ? (localStorage.removeItem(e),
                null) : n.data
            } catch (a) {
                return localStorage.removeItem(e),
                null
            }
        }
        window.SSO = $o,
        function(e) {
            e.GET = "GET",
            e.POST = "POST"
        }(Yo || (Yo = {}));
        var ei = {
            success: !1,
            data: null,
            statusCode: 500
        };
        function ti(e) {
            return ni.apply(this, arguments)
        }
        function ni() {
            return (ni = (0,
            jn.Z)(Kn().mark((function e(t) {
                var n, a, r, o, i, c;
                return Kn().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (!(r = t.cacheOptions) || !r.key) {
                                e.next = 5;
                                break
                            }
                            if (!(o = Jo(r.key))) {
                                e.next = 5;
                                break
                            }
                            return e.abrupt("return", o);
                        case 5:
                            return !$o.isSSOEnabled() || (null === (n = t.customHeaders) || void 0 === n ? void 0 : n.get("Authorization")) || (null === (a = t.customHeaders) || void 0 === a ? void 0 : a.get("authorization")) || (i = $o.getToken()) && (t.customHeaders = t.customHeaders || new Headers,
                            t.customHeaders.set("Authorization", i)),
                            e.next = 8,
                            ai(t);
                        case 8:
                            return c = e.sent,
                            r && r.key && c.success && Qo(r.key, c, r.expiry),
                            e.abrupt("return", c);
                        case 11:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        function ai(e) {
            return ri.apply(this, arguments)
        }
        function ri() {
            return (ri = (0,
            jn.Z)(Kn().mark((function e(t) {
                var n, a, r, o, i, c, s, u, d, p, m, f, v, E, g, h, b, w, y, _, C, k, I, S;
                return Kn().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (n = Date.now(),
                            a = t.requestUrl,
                            r = t.params,
                            o = t.defaultValue,
                            i = t.requestMethod,
                            c = t.customHeaders,
                            s = t.credentials,
                            u = t.redirect,
                            d = t.mode,
                            p = t.expectImage,
                            m = t.scenarioName,
                            f = t.swFetchPolicy,
                            v = "manual",
                            E = Vt(),
                            g = i === Yo.GET ? {
                                method: "GET",
                                headers: new Headers({
                                    "content-type": "application/json;charset=UTF-8",
                                    "client-request-id": E
                                }),
                                redirect: v
                            } : {
                                method: "POST",
                                headers: new Headers({
                                    "content-type": "application/json;charset=UTF-8",
                                    "client-request-id": E
                                }),
                                body: JSON.stringify(r),
                                redirect: v
                            },
                            c && g.headers && (g.headers = Qt(g.headers, c)),
                            h = c && (c.get("Authorization") || c.get("authorization")),
                            !no() || !Ro.getActiveAccount() || h) {
                                e.next = 27;
                                break
                            }
                            return b = "",
                            w = ["".concat(eo, "/.default")],
                            e.prev = 10,
                            e.next = 13,
                            Ro.acquireTokenSilent({
                                scopes: w
                            });
                        case 13:
                            y = e.sent,
                            b = y.accessToken,
                            g.headers.set("Authorization", "Bearer ".concat(b)),
                            e.next = 27;
                            break;
                        case 18:
                            if (e.prev = 18,
                            e.t0 = e.catch(10),
                            !(e.t0 instanceof Lo.Yo)) {
                                e.next = 26;
                                break
                            }
                            return e.next = 23,
                            Ro.acquireTokenRedirect({
                                scopes: w,
                                loginHint: userInfo.email
                            });
                        case 23:
                            throw e.t0;
                        case 26:
                            Vv({
                                error: e.t0,
                                errorType: ut.unCatchedError,
                                key: "acquireTokenSilent",
                                msg: "failed to get IWP access token"
                            });
                        case 27:
                            return (ao() || qo()) && (void 0 === userInfo.isEU || userInfo.isEU || qo()) && g.headers.set("cpc-data-boundary", "EU"),
                            "cache-first" === f && (null === (_ = g.headers) || void 0 === _ || _.set("sw-cache-first", "true")),
                            s && (g.credentials = s),
                            u && (g.redirect = u),
                            d && (g.mode = d),
                            C = new URL(a),
                            r && i == Yo.GET && (C.search = new URLSearchParams(r).toString()),
                            e.prev = 34,
                            e.next = 37,
                            fetch(C.toString(), g);
                        case 37:
                            if ("opaqueredirect" !== (k = e.sent).type) {
                                e.next = 44;
                                break
                            }
                            return m && Wv(m, k.status, new Error("Opaque Redirect")),
                            location.reload(),
                            e.abrupt("return", ei);
                        case 44:
                            if (k.status !== dt.Ok && k.status !== dt.Accepted && k.status !== dt.PartialContent && k.status !== dt.NoContent) {
                                e.next = 64;
                                break
                            }
                            if (I = {},
                            k.status !== dt.NoContent) {
                                e.next = 49;
                                break
                            }
                            return m && Bv(m, Date.now() - n, k.status),
                            e.abrupt("return", {
                                success: !0,
                                data: I,
                                statusCode: k.status,
                                headers: k.headers
                            });
                        case 49:
                            if (1 != p) {
                                e.next = 57;
                                break
                            }
                            return e.t1 = URL || webkitURL,
                            e.next = 53,
                            k.blob();
                        case 53:
                            e.t2 = e.sent,
                            I = e.t1.createObjectURL.call(e.t1, e.t2),
                            e.next = 60;
                            break;
                        case 57:
                            return e.next = 59,
                            k.json();
                        case 59:
                            I = e.sent;
                        case 60:
                            return m && Bv(m, Date.now() - n, k.status),
                            e.abrupt("return", {
                                success: !0,
                                data: I,
                                statusCode: 200,
                                headers: k.headers
                            });
                        case 64:
                            return e.next = 66,
                            k.text();
                        case 66:
                            return S = e.sent,
                            ei.data = o || ("" === S ? {} : JSON.parse(S)),
                            ei.statusCode = k.status,
                            ei.headers = k.headers,
                            m && Wv(m, k.status, new Error(S)),
                            e.abrupt("return", (0,
                            l.Z)((0,
                            l.Z)({}, ei), {}, {
                                clientRequestId: E
                            }));
                        case 72:
                            e.next = 79;
                            break;
                        case 74:
                            return e.prev = 74,
                            e.t3 = e.catch(34),
                            ei.data = o,
                            m && Wv(m, 500, e.t3),
                            e.abrupt("return", (0,
                            l.Z)((0,
                            l.Z)({}, ei), {}, {
                                clientRequestId: E
                            }));
                        case 79:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[10, 18], [34, 74]])
            }
            )))).apply(this, arguments)
        }
        function oi(e) {
            return ii.apply(this, arguments)
        }
        function ii() {
            return (ii = (0,
            jn.Z)(Kn().mark((function e(t) {
                var n, a;
                return Kn().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0,
                            e.next = 3,
                            fetch(t);
                        case 3:
                            if ((n = e.sent).status !== dt.Ok && n.status !== dt.Accepted && n.status !== dt.PartialContent) {
                                e.next = 11;
                                break
                            }
                            return e.next = 7,
                            n.json();
                        case 7:
                            return a = e.sent,
                            e.abrupt("return", {
                                success: !0,
                                data: a,
                                statusCode: 200
                            });
                        case 11:
                            return ei.data = {},
                            ei.statusCode = n.status,
                            e.abrupt("return", ei);
                        case 14:
                            e.next = 20;
                            break;
                        case 16:
                            return e.prev = 16,
                            e.t0 = e.catch(0),
                            ei.data = {},
                            e.abrupt("return", ei);
                        case 20:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[0, 16]])
            }
            )))).apply(this, arguments)
        }
        var ci = "".concat(location.origin, "/");
        function si(e) {
            return li.apply(this, arguments)
        }
        function li() {
            return (li = (0,
            jn.Z)(Kn().mark((function e(t) {
                var n, a;
                return Kn().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = ci + "api/iws/workspaces",
                            e.next = 3,
                            ti({
                                requestUrl: n,
                                requestMethod: Yo.GET,
                                defaultValue: [],
                                swFetchPolicy: (null === t || void 0 === t ? void 0 : t.isStartUp) ? "cache-first" : void 0
                            });
                        case 3:
                            return a = e.sent,
                            e.abrupt("return", a);
                        case 5:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        function ui(e) {
            return di.apply(this, arguments)
        }
        function di() {
            return (di = (0,
            jn.Z)(Kn().mark((function e(t) {
                var n, a;
                return Kn().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = "".concat(ci, "api/iws/workspaces/").concat(t),
                            e.next = 3,
                            ti({
                                requestUrl: n,
                                requestMethod: Yo.GET,
                                defaultValue: null
                            });
                        case 3:
                            return a = e.sent,
                            e.abrupt("return", a);
                        case 5:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        function pi(e, t) {
            return mi.apply(this, arguments)
        }
        function mi() {
            return (mi = (0,
            jn.Z)(Kn().mark((function e(t, n) {
                var a, r;
                return Kn().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return a = "".concat(ci, "api/iws/flexcloudpcs/").concat(t, "/request"),
                            e.next = 3,
                            ti({
                                requestUrl: a,
                                requestMethod: Yo.POST,
                                params: {
                                    servicePlanId: n
                                },
                                defaultValue: null
                            });
                        case 3:
                            return r = e.sent,
                            e.abrupt("return", r);
                        case 5:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        function fi(e) {
            return vi.apply(this, arguments)
        }
        function vi() {
            return (vi = (0,
            jn.Z)(Kn().mark((function e(t) {
                var n, a;
                return Kn().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = ci + "api/iws/user/firstLogin",
                            e.next = 3,
                            ti({
                                requestUrl: n,
                                requestMethod: Yo.GET,
                                params: {
                                    version: t
                                },
                                defaultValue: {
                                    isFirstLogin: !1
                                }
                            });
                        case 3:
                            return a = e.sent,
                            e.abrupt("return", a);
                        case 5:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        function Ei() {
            return gi.apply(this, arguments)
        }
        function gi() {
            return (gi = (0,
            jn.Z)(Kn().mark((function e() {
                var t, n;
                return Kn().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return t = ci + "api/iws/user",
                            e.next = 3,
                            ti({
                                requestUrl: t,
                                requestMethod: Yo.GET,
                                params: {
                                    version: "1.0"
                                }
                            });
                        case 3:
                            return n = e.sent,
                            e.abrupt("return", n);
                        case 5:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        var hi = {
            actionResultCode: 0
        };
        function bi(e) {
            return wi.apply(this, arguments)
        }
        function wi() {
            return (wi = (0,
            jn.Z)(Kn().mark((function e(t) {
                var n, a;
                return Kn().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = "".concat(ci, "api/iws/workspaces/").concat(t, "/reboot"),
                            e.next = 3,
                            ti({
                                requestUrl: n,
                                requestMethod: Yo.POST,
                                params: {},
                                defaultValue: hi
                            });
                        case 3:
                            return a = e.sent,
                            e.abrupt("return", a);
                        case 5:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        function yi(e) {
            return _i.apply(this, arguments)
        }
        function _i() {
            return (_i = (0,
            jn.Z)(Kn().mark((function e(t) {
                var n, a;
                return Kn().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = "".concat(ci, "api/iws/workspaces/").concat(t, "/troubleshoot"),
                            e.next = 3,
                            ti({
                                requestUrl: n,
                                requestMethod: Yo.POST,
                                params: {},
                                defaultValue: hi
                            });
                        case 3:
                            return a = e.sent,
                            e.abrupt("return", a);
                        case 5:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        function Ci(e, t) {
            return ki.apply(this, arguments)
        }
        function ki() {
            return (ki = (0,
            jn.Z)(Kn().mark((function e(t, n) {
                var a, r;
                return Kn().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return a = "".concat(ci, "api/iws/workspaces/").concat(t, "/rename"),
                            e.next = 3,
                            ti({
                                requestUrl: a,
                                requestMethod: Yo.POST,
                                params: {
                                    workspaceName: n
                                },
                                defaultValue: hi
                            });
                        case 3:
                            return r = e.sent,
                            e.abrupt("return", r);
                        case 5:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        function Ii(e) {
            return Si.apply(this, arguments)
        }
        function Si() {
            return (Si = (0,
            jn.Z)(Kn().mark((function e(t) {
                var n, a;
                return Kn().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = "".concat(ci, "api/iws/workspaces/").concat(t, "/reset"),
                            e.next = 3,
                            ti({
                                requestUrl: n,
                                requestMethod: Yo.POST,
                                params: {},
                                defaultValue: hi
                            });
                        case 3:
                            return a = e.sent,
                            e.abrupt("return", a);
                        case 5:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        function xi(e, t) {
            return Ni.apply(this, arguments)
        }
        function Ni() {
            return (Ni = (0,
            jn.Z)(Kn().mark((function e(t, n) {
                var a, r;
                return Kn().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return a = "".concat(ci, "api/iws/workspaces/").concat(t, "/restore"),
                            e.next = 3,
                            ti({
                                requestUrl: a,
                                requestMethod: Yo.POST,
                                params: {
                                    snapshotId: n
                                },
                                defaultValue: hi
                            });
                        case 3:
                            return r = e.sent,
                            e.abrupt("return", r);
                        case 5:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        function Ri(e) {
            return Ti.apply(this, arguments)
        }
        function Ti() {
            return (Ti = (0,
            jn.Z)(Kn().mark((function e(t) {
                var n, a;
                return Kn().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = ci + "api/iws/devices/servicePlans",
                            e.next = 3,
                            ti({
                                requestUrl: n,
                                requestMethod: Yo.GET,
                                defaultValue: [],
                                swFetchPolicy: (null === t || void 0 === t ? void 0 : t.isStartUp) ? "cache-first" : void 0
                            });
                        case 3:
                            return a = e.sent,
                            e.abrupt("return", a);
                        case 5:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        function Pi() {
            return Ai.apply(this, arguments)
        }
        function Ai() {
            return (Ai = (0,
            jn.Z)(Kn().mark((function e() {
                var t, n;
                return Kn().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return t = ci + "api/getConfig/remoteurl",
                            e.next = 3,
                            ti({
                                requestUrl: t,
                                requestMethod: Yo.GET,
                                params: {},
                                defaultValue: {
                                    feedUrl: "",
                                    pageUrl: ""
                                }
                            });
                        case 3:
                            return n = e.sent,
                            e.abrupt("return", n);
                        case 5:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        function Di() {
            return Li.apply(this, arguments)
        }
        function Li() {
            return (Li = (0,
            jn.Z)(Kn().mark((function e() {
                var t, n;
                return Kn().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return t = ci + "api/iws/externalPartners",
                            e.next = 3,
                            ti({
                                requestUrl: t,
                                requestMethod: Yo.GET,
                                params: {},
                                defaultValue: []
                            });
                        case 3:
                            return n = e.sent,
                            e.abrupt("return", n);
                        case 5:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        function Oi(e, t) {
            return Fi.apply(this, arguments)
        }
        function Fi() {
            return (Fi = (0,
            jn.Z)(Kn().mark((function e(t, n) {
                var a, r, o;
                return Kn().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0,
                            a = n ? "?language=".concat(n) : "",
                            r = ci + "api/getO365HeaderData" + a,
                            e.next = 5,
                            ti({
                                requestUrl: r,
                                requestMethod: Yo.GET,
                                defaultValue: null,
                                customHeaders: t ? new Headers({
                                    "x-o365header-token": t
                                }) : void 0
                            });
                        case 5:
                            return o = e.sent,
                            e.abrupt("return", o);
                        case 9:
                            return e.prev = 9,
                            e.t0 = e.catch(0),
                            e.abrupt("return", {
                                success: !1,
                                data: null
                            });
                        case 12:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[0, 9]])
            }
            )))).apply(this, arguments)
        }
        function Mi() {
            return Ui.apply(this, arguments)
        }
        function Ui() {
            return (Ui = (0,
            jn.Z)(Kn().mark((function e() {
                var t, n;
                return Kn().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0,
                            t = ci + "api/getOcpsPolicy",
                            e.next = 4,
                            ti({
                                requestUrl: t,
                                requestMethod: Yo.GET,
                                defaultValue: null
                            });
                        case 4:
                            return n = e.sent,
                            e.abrupt("return", n);
                        case 8:
                            return e.prev = 8,
                            e.t0 = e.catch(0),
                            e.abrupt("return", {
                                success: !1,
                                data: null
                            });
                        case 11:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[0, 8]])
            }
            )))).apply(this, arguments)
        }
        function Zi() {
            return Hi.apply(this, arguments)
        }
        function Hi() {
            return (Hi = (0,
            jn.Z)(Kn().mark((function e() {
                var t, n;
                return Kn().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return t = ci + "api/iws/devices/lastLogin",
                            e.next = 3,
                            ti({
                                requestUrl: t,
                                requestMethod: Yo.GET,
                                params: {},
                                defaultValue: []
                            });
                        case 3:
                            return n = e.sent,
                            e.abrupt("return", n);
                        case 5:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        function Bi() {
            return Wi.apply(this, arguments)
        }
        function Wi() {
            return (Wi = (0,
            jn.Z)(Kn().mark((function e() {
                var t, n;
                return Kn().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return t = ci + "api/macwebresources/accesstoken",
                            e.next = 3,
                            ti({
                                requestUrl: t,
                                requestMethod: Yo.GET
                            });
                        case 3:
                            return n = e.sent,
                            e.abrupt("return", n);
                        case 5:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        function Vi(e) {
            return Gi.apply(this, arguments)
        }
        function Gi() {
            return (Gi = (0,
            jn.Z)(Kn().mark((function e(t) {
                var n, a;
                return Kn().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = "".concat(ci, "api/iws/workspaces/").concat(t, "/snapshots"),
                            e.next = 3,
                            ti({
                                requestUrl: n,
                                requestMethod: Yo.GET,
                                params: {},
                                defaultValue: {
                                    snapshots: []
                                }
                            });
                        case 3:
                            return a = e.sent,
                            e.abrupt("return", a);
                        case 5:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        function zi() {
            return Yi.apply(this, arguments)
        }
        function Yi() {
            return (Yi = (0,
            jn.Z)(Kn().mark((function e() {
                var t, n;
                return Kn().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return t = "".concat(ci, "api/iws/user/restore/policy"),
                            e.next = 3,
                            ti({
                                requestUrl: t,
                                requestMethod: Yo.GET,
                                defaultValue: {}
                            });
                        case 3:
                            return n = e.sent,
                            e.abrupt("return", n);
                        case 5:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        function qi() {
            return Ki.apply(this, arguments)
        }
        function Ki() {
            return (Ki = (0,
            jn.Z)(Kn().mark((function e() {
                var t, n;
                return Kn().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return t = "",
                            e.prev = 1,
                            e.next = 4,
                            fa();
                        case 4:
                            t = e.sent,
                            e.next = 11;
                            break;
                        case 7:
                            throw e.prev = 7,
                            e.t0 = e.catch(1),
                            Vv({
                                error: new Error(ut.PIEError),
                                errorType: ut.PIEError,
                                key: "PIE",
                                msg: "Failed to get graph api token. Error:" + e.t0
                            }),
                            e.t0;
                        case 11:
                            return e.next = 13,
                            ti({
                                requestUrl: "https://graph.microsoft.com/v1.0/me/photo/$value",
                                requestMethod: Yo.GET,
                                defaultValue: [],
                                expectImage: !0,
                                customHeaders: new Headers({
                                    Authorization: "Bearer ".concat(t)
                                })
                            });
                        case 13:
                            return n = e.sent,
                            e.abrupt("return", n);
                        case 15:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[1, 7]])
            }
            )))).apply(this, arguments)
        }
        function ji() {
            return Xi.apply(this, arguments)
        }
        function Xi() {
            return (Xi = (0,
            jn.Z)(Kn().mark((function e() {
                var t, n, a;
                return Kn().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            Bo();
                        case 2:
                            return t = e.sent,
                            n = Zo(),
                            e.next = 6,
                            ti({
                                requestUrl: "".concat(Ho("me/cloudPCs")),
                                requestMethod: Yo.GET,
                                defaultValue: [],
                                customHeaders: t ? new Headers((0,
                                l.Z)((0,
                                l.Z)({}, n), {}, {
                                    Authorization: "Bearer ".concat(t),
                                    Prefer: "ReturnEnvironment"
                                })) : void 0
                            });
                        case 6:
                            return a = e.sent,
                            e.abrupt("return", a);
                        case 8:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        function $i(e) {
            return Qi.apply(this, arguments)
        }
        function Qi() {
            return (Qi = (0,
            jn.Z)(Kn().mark((function e(t) {
                var n, a;
                return Kn().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            Oo({
                                scopes: ["https://clients.config.office.net/.default"]
                            });
                        case 2:
                            if (!(n = e.sent) || !n.accessToken) {
                                e.next = 10;
                                break
                            }
                            return e.next = 6,
                            ti({
                                requestUrl: Wo(t),
                                requestMethod: Yo.GET,
                                customHeaders: new Headers({
                                    Authorization: "Bearer ".concat(n.accessToken)
                                }),
                                scenarioName: "OCPS.IWP"
                            });
                        case 6:
                            return a = e.sent,
                            e.abrupt("return", a);
                        case 10:
                            return e.abrupt("return", {
                                success: !1,
                                data: null
                            });
                        case 11:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        var Ji = new Map([["windows", yt.Windows], ["mac", yt.Mac], ["chormeos", yt.ChromeOS], ["linux", yt.Linux], ["ios", yt.IOS], ["android", yt.Android]]);
        function ec(e) {
            var n = new Map(e.clientAppDownloadUrls.map((function(e) {
                return [Ji.get(e.platform), e.url]
            }
            )))
              , a = t("download-third-party-partner-Corp", {
                name: e.corpName
            })
              , r = function(n) {
                return t("download-title-third-party-partner-".concat(n), {
                    name: e.appName
                })
            }
              , o = function(n) {
                return t("download-option-third-party-partner-".concat(n), {
                    name: e.displayName
                })
            }
              , i = function(e) {
                var t;
                return null !== (t = n.get(e)) && void 0 !== t ? t : "#"
            }
              , c = function(n) {
                return t("download-get-url-aria-label-third-party-partner", {
                    name: e.appName,
                    platform: n
                })
            }
              , s = Array.from(Ji.values());
            return function() {
                return {
                    title: t("download-page-title-third-party-partner", {
                        name: e.appName
                    }),
                    subtitle: t("download-page-subTitle-third-party-partner", {
                        name: e.appName
                    }),
                    items: s.map((function(n) {
                        return {
                            platform: n,
                            showDialog: !1,
                            title: r(n),
                            subtitle: a,
                            getURLText: t("download-get-url-third-party-partner", {
                                name: e.appName
                            }),
                            getURLAriaLabel: c(n),
                            downloadOptions: [{
                                title: o(n),
                                url: i(n),
                                isOpenInNewTab: !0
                            }]
                        }
                    }
                    ))
                }
            }
        }
        function tc(e) {
            return function() {
                return t("feed-title-third-party-partner", {
                    name: e.appName
                })
            }
        }
        function nc(e) {
            return function() {
                return t("feed-info-third-party-partner", {
                    name: e.appName
                })
            }
        }
        function ac(e) {
            return function() {
                return e.pageUrl
            }
        }
        var rc = a(5489)
          , oc = !1;
        function ic(e) {
            return function(t) {
                return !!function(t) {
                    var n, a;
                    return null !== (n = null === (a = t.thirdPartyPartnerIds) || void 0 === a ? void 0 : a.some((function(t) {
                        return t === e.id
                    }
                    ))) && void 0 !== n && n
                }(t)
            }
        }
        function cc(e) {
            return function(n, a, r) {
                (function(t) {
                    var n, a;
                    return null !== (n = null === (a = t.thirdPartyPartnerIds) || void 0 === a ? void 0 : a.some((function(t) {
                        return t === e.id
                    }
                    ))) && void 0 !== n && n
                }
                )(n) && (oc || ((0,
                rc.fm)({
                    icons: {
                        OpenIcon: No.createElement("svg", {
                            width: "16",
                            height: "16",
                            viewBox: "0 0 120 120",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }, No.createElement("g", {
                            clipPath: "url(#clip0_4376_84091)"
                        }, No.createElement("path", {
                            d: "M59.9231 66.9919C63.8429 67.0079 66.9349 63.9529 66.9577 60.043C66.9803 56.1618 63.8723 53.0061 60.0049 52.9816C56.1432 52.9575 52.9899 56.0858 52.9719 59.961C52.954 63.8756 56.02 66.9761 59.9231 66.9919L59.9203 67.6895L59.9231 66.9919ZM59.9621 93.2808C41.6951 93.2262 26.81 78.3973 26.7421 60.1696C26.6747 41.9207 41.3961 26.8918 59.4777 26.7574C64.0919 26.7236 67.3752 30.3955 66.5394 34.7139C65.9147 37.9436 63.2585 40.0319 59.7032 40.1302C50.8081 40.376 43.2496 46.0848 40.936 54.3758C38.6989 62.3931 40.6732 69.3544 46.7888 74.8081C52.9614 80.3124 60.1623 81.5011 67.7268 78.2472C75.3756 74.9571 79.4421 68.8505 79.8322 60.2747C79.9672 57.307 81.175 55.1991 83.6348 54.0121C85.9927 52.8743 88.3878 53.1121 90.5188 54.6841C92.2375 55.9516 93.1358 57.7395 93.1854 59.922C93.5609 76.4575 80.0948 91.5119 63.5771 93.0231C62.9087 93.0841 62.3467 93.1246 61.1933 93.2C60.5727 93.2405 60.3237 93.2571 60.0135 93.2791L59.9642 92.5831L59.9621 93.2808ZM-0.00078232 59.9091C0.124362 26.9957 26.7518 0.143884 59.4135 -0.000155462C63.5457 -0.0183385 66.5986 2.7616 66.6126 6.61235C66.6267 10.4792 63.6589 13.2415 59.4955 13.2963C34.4563 13.6256 14.5529 33.0621 13.2474 58.4692C12.0274 82.2085 30.3587 103.554 54.4672 106.453C81.9459 109.756 106.229 88.4374 106.707 60.5844C106.788 55.885 110.223 52.7247 114.491 53.506C117.795 54.1112 119.961 56.8965 119.929 60.4549C119.697 85.7675 103.701 108.134 79.7917 116.576C40.9659 130.286 -0.15606 101.082 -0.00078232 59.9091L0.697324 59.9117L-0.00078232 59.9091Z",
                            fill: "#05758A"
                        })), No.createElement("defs", null, No.createElement("clipPath", {
                            id: "clip0_4376_84091"
                        }, No.createElement("rect", {
                            width: "120",
                            height: "120",
                            fill: "white"
                        }))))
                    }
                }),
                oc = !0),
                r.openNativeApp = !1,
                r.openText = t("open-in-third-party-partner", {
                    appName: e.displayName
                }),
                r.openIcon = {
                    iconName: "OpenIcon"
                },
                null !== e.launchUrl && void 0 !== e.launchUrl && e.launchUrl.length > 0 ? r.openURL = function(t, n) {
                    var a = n.uid
                      , r = t.deviceId;
                    return "".concat(e.launchUrl, "?userId=").concat(a, "&machineId=").concat(r)
                }(n, a) : r.openURL = e.pageUrl)
            }
        }
        var sc = "198d71c0-80bb-4843-8cc4-811377a49a92";
        var lc = [function(e) {
            var n = e.find((function(e) {
                return e.id === sc
            }
            ));
            return n ? {
                id: sc,
                getDownloadPageConfig: ec(n),
                modifyDeviceOpenRemoteButton: cc(n),
                getFeedURL: ac(n),
                getFeedTitle: tc(n),
                getFeedURLDialogLabelText: nc(n),
                actionListModifier: function(e) {
                    return e.contentType === Sn.DOWNLOAD ? (0,
                    l.Z)((0,
                    l.Z)({}, e), {}, {
                        title: t("quick-actions-download-title-citrix"),
                        desc: t("quick-actions-download-desc-citrix")
                    }) : e
                },
                navLinkListModifier: function(e) {
                    return e.key === Rn.Download ? (0,
                    l.Z)((0,
                    l.Z)({}, e), {}, {
                        name: t("nav-download-hover-text-citrix")
                    }) : e
                },
                hideLastLogin: ic(n)
            } : null
        }
        ]
          , uc = {
            getDownloadPageConfig: function() {
                return null
            },
            modifyDeviceOpenRemoteButton: function(e, t, n) {},
            getFeedURL: function() {
                return null
            },
            getFeedTitle: function() {
                return null
            },
            getFeedURLDialogLabelText: function() {
                return null
            },
            actionListModifier: function(e) {
                return e
            },
            navLinkListModifier: function(e) {
                return e
            },
            hideLastLogin: function(e) {
                return !1
            },
            id: null
        };
        var dc = {
            build: function(e, t) {
                return lc.map((function(t) {
                    return t(e)
                }
                )).filter((function(e) {
                    return null !== e
                }
                )).filter((function(e) {
                    return t.some((function(t) {
                        var n;
                        return null === (n = t.thirdPartyPartnerIds) || void 0 === n ? void 0 : n.some((function(t) {
                            return t === (null === e || void 0 === e ? void 0 : e.id)
                        }
                        ))
                    }
                    ))
                }
                )).map((function(e) {
                    return (0,
                    l.Z)((0,
                    l.Z)({}, uc), e)
                }
                ))[0]
            },
            checkEnable: function(e) {
                return e.some((function(e) {
                    var t;
                    return null === (t = e.thirdPartyPartnerIds) || void 0 === t ? void 0 : t.some((function(e) {
                        return e
                    }
                    ))
                }
                ))
            }
        }
          , pc = Kn().mark(mc);
        function mc() {
            var e, t, n;
            return Kn().wrap((function(a) {
                for (; ; )
                    switch (a.prev = a.next) {
                    case 0:
                        return a.next = 2,
                        (0,
                        Wr.Ys)(Dr);
                    case 2:
                        return e = a.sent,
                        a.next = 5,
                        (0,
                        Wr.Ys)(Pr);
                    case 5:
                        if (a.sent.IWP_EnableThirdPartyPartner) {
                            a.next = 8;
                            break
                        }
                        return a.abrupt("return");
                    case 8:
                        if (dc.checkEnable(e)) {
                            a.next = 10;
                            break
                        }
                        return a.abrupt("return");
                    case 10:
                        return a.next = 12,
                        (0,
                        Wr.RE)(Di);
                    case 12:
                        return t = a.sent,
                        n = t.data,
                        a.next = 16,
                        (0,
                        Wr.gz)({
                            type: _r,
                            payload: {
                                plugin: dc.build(n, e)
                            }
                        });
                    case 16:
                    case "end":
                        return a.stop()
                    }
            }
            ), pc)
        }
        var fc, vc, Ec, gc, hc = Kn().mark(bc);
        function bc(e) {
            var t;
            return Kn().wrap((function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        if (!$n.Gz()) {
                            e.next = 21;
                            break
                        }
                        return e.prev = 1,
                        e.next = 4,
                        (0,
                        Wr.RE)(pa);
                    case 4:
                        return t = e.sent,
                        console.log("set sso token"),
                        window.SSO.setToken("Bearer ".concat(t)),
                        e.next = 9,
                        (0,
                        Wr.gw)(12e4);
                    case 9:
                        return e.next = 11,
                        (0,
                        Wr.gz)({
                            type: gr
                        });
                    case 11:
                        e.next = 19;
                        break;
                    case 13:
                        return e.prev = 13,
                        e.t0 = e.catch(1),
                        e.next = 17,
                        (0,
                        Wr.gw)(1e3);
                    case 17:
                        return e.next = 19,
                        (0,
                        Wr.gz)({
                            type: gr
                        });
                    case 19:
                        e.next = 25;
                        break;
                    case 21:
                        return e.next = 23,
                        (0,
                        Wr.gw)(1e3);
                    case 23:
                        return e.next = 25,
                        (0,
                        Wr.gz)({
                            type: gr
                        });
                    case 25:
                    case "end":
                        return e.stop()
                    }
            }
            ), hc, null, [[1, 13]])
        }
        !function(e) {
            e.Restart = "Restart",
            e.Reset = "Reset",
            e.Rename = "Rename",
            e.Diagnose = "Diagnose",
            e.SystemInformation = "SystemInformation",
            e.Restore = "Restore"
        }(fc || (fc = {})),
        function(e) {
            e.Resize = "Resize",
            e.PlaceUnderReview = "PlaceUnderReview",
            e.Move = "Move"
        }(vc || (vc = {})),
        function(e) {
            e.Provision = "Provision",
            e.ChangeUserAccountType = "ChangeUserAccountType"
        }(Ec || (Ec = {})),
        function(e) {
            e[e.InternalError = 0] = "InternalError",
            e[e.Succeed = 1] = "Succeed",
            e[e.CheckFailedUserWorkspaceDontMatch = 2] = "CheckFailedUserWorkspaceDontMatch",
            e[e.FailedServiceUnavailable = 3] = "FailedServiceUnavailable",
            e[e.CheckFailDeviceIdOperating = 4] = "CheckFailDeviceIdOperating",
            e[e.Prohibited = 5] = "Prohibited",
            e[e.FLWProhibitedOperation = 6] = "FLWProhibitedOperation",
            e[e.CheckRuleFailed = 2001] = "CheckRuleFailed"
        }(gc || (gc = {}));
        var wc, yc, _c, Cc, kc, Ic, Sc, xc, Nc, Rc = a(3025), Tc = "inGracePeriod", Pc = "provisioned", Ac = "provisionFailed", Dc = "provisionedWithWarnings";
        !function(e) {
            e.CPC = "b1a897df-01c4-41ad-ae06-8278bdc18e7d",
            e.Fidalgo = "e3171dd9-9a5f-e5be-b36c-cc7c4f3f3bcf",
            e.PowerAutomate = "ff708b28-89df-4f82-9b1e-b403b36a9896"
        }(yc || (yc = {})),
        function(e) {
            e.Deallocated = "deallocated",
            e.Hibernated = "hibernated",
            e.Running = "running",
            e.PoweredOff = "poweredOff"
        }(_c || (_c = {})),
        function(e) {
            e.Windows10 = "Windows10",
            e.Windows11 = "Windows11",
            e.Unknown = "Unknown"
        }(Cc || (Cc = {})),
        function(e) {
            e[e.Unknown = 0] = "Unknown",
            e[e.Flex = 1] = "Flex",
            e[e.Dedicated = 2] = "Dedicated"
        }(kc || (kc = {})),
        function(e) {
            e.Unassigned = "unassigned",
            e.NoLicensesAvailable = "noLicensesAvailable",
            e.ActivationFailed = "activationFailed",
            e.Active = "active",
            e.Activating = "activating",
            e.Waitlisted = "waitlisted",
            e.InStandbyMode = "InStandbyMode"
        }(Ic || (Ic = {})),
        function(e) {
            e.Available = "available",
            e.Unavailable = "unavailable",
            e.Unknown = "unknown"
        }(Sc || (Sc = {})),
        function(e) {
            e[e.Error = 0] = "Error",
            e[e.Success = 1] = "Success",
            e[e.Ongoing = 2] = "Ongoing",
            e[e.OngoingWarning = 3] = "OngoingWarning",
            e[e.Blocked = 4] = "Blocked",
            e[e.Info = 5] = "Info"
        }(xc || (xc = {})),
        function(e) {
            e.FrontlineConnecting = "FrontlineConnecting"
        }(Nc || (Nc = {}));
        var Lc, Oc = (wc = {},
        (0,
        f.Z)(wc, xc.Error, Rc.f.error),
        (0,
        f.Z)(wc, xc.Success, Rc.f.success),
        (0,
        f.Z)(wc, xc.Ongoing, Rc.f.info),
        (0,
        f.Z)(wc, xc.OngoingWarning, Rc.f.warning),
        (0,
        f.Z)(wc, xc.Blocked, Rc.f.blocked),
        (0,
        f.Z)(wc, xc.Info, Rc.f.info),
        wc);
        function Fc(e) {
            return e.provisionStatus == Tc
        }
        function Mc(e) {
            return "upgradeFailed" == e.provisionStatus
        }
        function Uc(e) {
            return e.provisionStatus === Ac || "reprovisionFailed" === e.provisionStatus
        }
        function Zc(e) {
            return "pending" === e.provisionStatus
        }
        function Hc(e) {
            return !Bc(e) && function(e) {
                return "provisioning" === e.provisionStatus
            }(e)
        }
        function Bc(e) {
            return "enterprise" === e.servicePlanType
        }
        function Wc(e) {
            return e.partnerId === yc.Fidalgo
        }
        function Vc(e) {
            return e.partnerId === yc.PowerAutomate
        }
        function Gc(e) {
            return e.accessState === Ic.Active
        }
        function zc(e) {
            return e.osNameFromAAD && e.osNameFromAAD !== Cc.Unknown ? e.osNameFromAAD : e.osName ? e.osName : Cc.Unknown
        }
        function Yc(e, t) {
            return t.findIndex((function(t) {
                return t.workspaceId === e.workspaceId
            }
            ))
        }
        function qc(e) {
            return e < 0 ? void 0 : "moreOperationButton".concat(e)
        }
        function Kc(e, t) {
            return null === e || void 0 === e ? void 0 : e.filter((function(e) {
                return t.includes(e.licenseCategory)
            }
            ))
        }
        function jc(e) {
            return [Pc, Tc, Dc].includes(null === e || void 0 === e ? void 0 : e.provisionStatus)
        }
        function Xc(e) {
            return e.licenseCategory === kc.Flex
        }
        function $c(e) {
            return e.flwAvailability === Sc.Unavailable
        }
        !function(e) {
            e.Restricted = "restricted",
            e.Unrestricted = "unrestricted"
        }(Lc || (Lc = {}));
        var Qc = {
            deviceCardClass: "",
            operationMenuItemClass: "",
            deviceActionModalClass: "",
            getMessageBarIconProp: function() {},
            getOperationMenuProp: function(e) {
                return e
            },
            reverseModalFooter: !1
        }
          , Jc = new u.SyncWaterfallHook(["deviceConfig"])
          , es = function() {
            return (0,
            No.useMemo)((function() {
                return Jc.call(Qc)
            }
            ), [])
        };
        function ts(e, t) {
            var n, a = {
                "Y+": t.getFullYear().toString(),
                "m+": (t.getMonth() + 1).toString(),
                "d+": t.getDate().toString(),
                "H+": t.getHours().toString(),
                "M+": t.getMinutes().toString(),
                "S+": t.getSeconds().toString()
            };
            for (var r in a)
                (n = new RegExp("(" + r + ")").exec(e)) && (e = e.replace(n[1], 1 == n[1].length ? a[r] : a[r].padStart(n[1].length, "0")));
            return e
        }
        function ns(e) {
            try {
                return new Intl.DateTimeFormat(userInfo.translation,{
                    hour: "numeric",
                    minute: "numeric",
                    second: "numeric",
                    year: "numeric",
                    month: "numeric",
                    day: "numeric"
                }).format(new Date(e))
            } catch (Sg) {
                console.error("getLocaleDateTime error", Sg);
                var n = ts("mm/dd/YYYY", new Date(e))
                  , a = ts("HH:MM", new Date(e));
                return t("data-with-time", {
                    date: n,
                    time: a
                })
            }
        }
        var as, rs;
        function os(e) {
            return Fc(e) || Uc(e) || Mc(e) ? Uc(e) ? is(e) : {
                type: xc.Error,
                message: Fc(e) ? cs(e) : t("resize-fail-state-tip")
            } : null
        }
        function is(e) {
            return Uc(e) ? {
                type: xc.Blocked,
                message: t("provision-fail-tip-text"),
                actionContext: t("provision-fail-tip-link"),
                actionClick: function(e, t) {
                    t({
                        type: Be,
                        payload: {
                            selectedDevice: e
                        }
                    }),
                    t({
                        type: q
                    })
                }
            } : null
        }
        function cs(e) {
            if (!Fc(e))
                return "";
            var n = e.gracePeriodEndDateTime;
            if (!n)
                return t("in-grace-period-text");
            var a = function(e, t) {
                var n = e.getTime()
                  , a = t.getTime();
                return a <= n ? 0 : Math.floor((a - n) / 864e5)
            }(new Date, new Date(n));
            return a > 1 ? t("in-grace-period-text-days", {
                intervalDays: a
            }) : 1 === a ? t("in-grace-period-text-one-day") : t("in-grace-period-text-less-one-day")
        }
        function ss(e, t, n) {
            var a, r = e.workspaceId, o = function() {
                n({
                    type: xe,
                    payload: r
                })
            };
            return (a = {},
            (0,
            f.Z)(a, fc.Rename, (function() {
                o(),
                n({
                    type: Be,
                    payload: {
                        selectedDevice: e
                    }
                }),
                n({
                    type: Z
                })
            }
            )),
            (0,
            f.Z)(a, fc.Restart, (function() {
                o(),
                n({
                    type: Be,
                    payload: {
                        selectedDevice: e
                    }
                }),
                n({
                    type: B
                })
            }
            )),
            (0,
            f.Z)(a, fc.Reset, (function() {
                o(),
                n({
                    type: Be,
                    payload: {
                        selectedDevice: e
                    }
                }),
                n({
                    type: M
                })
            }
            )),
            (0,
            f.Z)(a, fc.Diagnose, (function() {
                o(),
                n({
                    type: Be,
                    payload: {
                        selectedDevice: e
                    }
                }),
                n({
                    type: $
                })
            }
            )),
            (0,
            f.Z)(a, fc.SystemInformation, (function() {
                o(),
                n({
                    type: Be,
                    payload: {
                        selectedDevice: e
                    }
                }),
                n({
                    type: z
                })
            }
            )),
            (0,
            f.Z)(a, fc.Restore, (function() {
                o(),
                n({
                    type: Be,
                    payload: {
                        selectedDevice: e
                    }
                }),
                n({
                    type: j
                })
            }
            )),
            a)[t]
        }
        !function(e) {
            e.Available = "Available"
        }(as || (as = {})),
        function(e) {
            e.ErrorDomainJoinedFailed = "ErrorDomainJoinedFailed",
            e.ErrorDomainReachableFailed = "ErrorDomainReachableFailed",
            e.ErrorDomainTrustFailed = "ErrorDomainTrustFailed",
            e.ErrorSxsListenerNotReady = "ErrorSxsListenerNotReady",
            e.ErrorUrlsNotAccessible = "ErrorUrlsNotAccessible",
            e.ErrorVMNotRunning = "ErrorVMNotRunning",
            e.ErrorVMTransientState = "ErrorVMTransientState",
            e.ErrorResourceUnavailable = "ErrorResourceUnavailable",
            e.ErrorRDAgentBootLoaderStopped = "ErrorRDAgentBootLoaderStopped",
            e.ErrorDenyTSConnections = "ErrorDenyTSConnections",
            e.ErrorVMAgentUnavailable = "ErrorVMAgentUnavailable",
            e.ErrorVMDNSIssue = "ErrorVMDNSIssue",
            e.ErrorVMNetworkIssue = "ErrorVMNetworkIssue",
            e.ErrorNotEnoughDiskSpace = "ErrorNotEnoughDiskSpace",
            e.ErrorUnknown = "ErrorUnknown"
        }(rs || (rs = {}));
        var ls, us, ds = function(e) {
            return e ? {
                type: xc.OngoingWarning,
                message: t("diagnostic-result-fixing-tips")
            } : {
                type: xc.Ongoing,
                message: t("diagnose-ongoing-state-tip")
            }
        }, ps = function(e) {
            return e == as.Available ? {
                type: xc.Success,
                message: t("diagnostic-result-no-issues-tips"),
                enableClose: !0
            } : {
                type: xc.Success,
                message: t("diagnostic-result-fix-complete-tips"),
                enableClose: !0
            }
        }, ms = function(e) {
            var n = function(e) {
                return Object.values(rs).find((function(t) {
                    return t === e
                }
                ))
            }(e) || rs.ErrorUnknown
              , a = t("troubleshoot-result-v2-fail-" + n);
            return {
                type: xc.Error,
                message: a
            }
        };
        !function(e) {
            e.Resize = "Resize",
            e.Reprovision = "Reprovision",
            e.Rename = "Rename",
            e.Restart = "Restart",
            e.Troubleshoot = "Troubleshoot",
            e.Restore = "Restore",
            e.ChangeUserAccountType = "ChangeUserAccountType",
            e.PlaceUnderReview = "PlaceUnderReview",
            e.Move = "Move"
        }(ls || (ls = {})),
        function(e) {
            e.None = "none",
            e.Pending = "pending",
            e.Canceled = "canceled",
            e.Active = "active",
            e.Done = "done",
            e.Failed = "failed",
            e.NotSupported = "notSupported"
        }(us || (us = {}));
        var fs = 6e4;
        function vs(e) {
            switch (e) {
            case fc.Restart:
                return 3e4;
            case fc.Reset:
                return 6e4;
            case fc.Diagnose:
                return 3e4;
            case Ec.Provision:
            case Ec.ChangeUserAccountType:
            case vc.Resize:
            case vc.Move:
                return 6e4;
            default:
                return fs
            }
        }
        function Es(e) {
            switch (e) {
            case fc.Restart:
                return 3e5;
            case fc.Reset:
            case fc.Diagnose:
            case fc.Restore:
            case Ec.Provision:
                return 36e5;
            case Ec.ChangeUserAccountType:
                return 6e5;
            case vc.Resize:
                return 12e5;
            case vc.Move:
                return 216e5;
            default:
                return 6e5
            }
        }
        var gs = function(e) {
            return e.actionResultCode === gc.Succeed
        }
          , hs = function(e, n, a) {
            if (gs(n))
                return e === fc.Rename ? ys(e, a) : ws(e);
            var r = n.actionResultCode;
            return n.actionResultCode === gc.FLWProhibitedOperation ? {
                type: xc.Error,
                message: t("flw-error-message-tip")
            } : e === fc.Rename && r === gc.CheckRuleFailed ? {
                type: xc.Error,
                message: t("rename-fail-rule-check-state-tip")
            } : e === fc.Restore && r === gc.Prohibited ? {
                type: xc.Error,
                message: t("restore-prohibted-state-tip")
            } : r === gc.CheckFailDeviceIdOperating || r === gc.CheckFailedUserWorkspaceDontMatch ? bs() : {
                type: xc.Error,
                message: t("tip_wait_try")
            }
        };
        function bs() {
            var e = Jc.call(Qc);
            return (null === e || void 0 === e ? void 0 : e.deviceRefreshAndTryTip) ? {
                type: xc.Error,
                message: e.deviceRefreshAndTryTip
            } : {
                type: xc.Error,
                message: t("tip_refresh_try")
            }
        }
        function ws(e, n) {
            var a = Cs(e);
            return e === fc.Diagnose ? ds(n) : {
                type: xc.Ongoing,
                message: t("".concat(a, "-ongoing-state-tip"))
            }
        }
        function ys(e, n) {
            var a, r, o = Cs(e);
            return e === fc.Diagnose ? ps(null === (a = n.lastRemoteActionResult) || void 0 === a || null === (r = a.statusDetails) || void 0 === r ? void 0 : r.code) : {
                type: xc.Success,
                message: t("".concat(o, "-success-state-tip")),
                enableClose: !0
            }
        }
        function _s(e, n) {
            var a, r, o = Cs(e);
            return e === fc.Diagnose ? ms(null === (a = n.lastRemoteActionResult) || void 0 === a || null === (r = a.statusDetails) || void 0 === r ? void 0 : r.code) : function(e) {
                return e !== vc.Resize && e !== Ec.Provision
            }(e) ? {
                type: xc.Error,
                message: t("".concat(o, "-fail-state-tip")),
                actionContext: t("try-again"),
                actionClick: function(t, n) {
                    var a = t.workspaceId;
                    n({
                        type: je,
                        payload: {
                            workspaceId: a
                        }
                    }),
                    ss(t, e, n)()
                }
            } : e === Ec.Provision ? is(n) : {
                type: xc.Error,
                message: t("".concat(o, "-fail-state-tip"))
            }
        }
        function Cs(e) {
            return e.toLowerCase()
        }
        var ks = function(e) {
            var n = Cs(e);
            return {
                type: xc.Ongoing,
                message: t("".concat(n, "-expire-state-tip"))
            }
        }
          , Is = Kn().mark(xs)
          , Ss = Kn().mark(Ns);
        function xs(e) {
            var t, n, a, r, o, i, c, s, l, u, d, p;
            return Kn().wrap((function(m) {
                for (; ; )
                    switch (m.prev = m.next) {
                    case 0:
                        if (t = e.payload,
                        n = t.device,
                        a = t.actionType,
                        r = t.hideDialogActionType,
                        o = t.snapshotId,
                        i = t.newWorkspaceName,
                        c = n.workspaceId,
                        s = {
                            success: !1,
                            data: null
                        },
                        a !== fc.Restart) {
                            m.next = 9;
                            break
                        }
                        return m.next = 6,
                        bi(c);
                    case 6:
                        s = m.sent,
                        m.next = 34;
                        break;
                    case 9:
                        if (a !== fc.Diagnose) {
                            m.next = 15;
                            break
                        }
                        return m.next = 12,
                        yi(c);
                    case 12:
                        s = m.sent,
                        m.next = 34;
                        break;
                    case 15:
                        if (a !== fc.Rename || !i) {
                            m.next = 21;
                            break
                        }
                        return m.next = 18,
                        Ci(c, i);
                    case 18:
                        s = m.sent,
                        m.next = 34;
                        break;
                    case 21:
                        if (a !== fc.Reset) {
                            m.next = 27;
                            break
                        }
                        return m.next = 24,
                        Ii(c);
                    case 24:
                        s = m.sent,
                        m.next = 34;
                        break;
                    case 27:
                        if (a !== fc.Restore || !o) {
                            m.next = 33;
                            break
                        }
                        return m.next = 30,
                        xi(c, o);
                    case 30:
                        s = m.sent,
                        m.next = 34;
                        break;
                    case 33:
                        return m.abrupt("return");
                    case 34:
                        if (!r) {
                            m.next = 37;
                            break
                        }
                        return m.next = 37,
                        (0,
                        Wr.gz)({
                            type: r
                        });
                    case 37:
                        return l = s.success ? s.data : {
                            actionResultCode: gc.InternalError
                        },
                        u = hs(a, l, n),
                        m.next = 41,
                        (0,
                        Wr.gz)({
                            type: Ke,
                            payload: {
                                workspaceId: c,
                                deviceStateTip: u
                            }
                        });
                    case 41:
                        if (d = a == fc.Reset && Uc(n),
                        p = gs(l),
                        a != fc.Rename) {
                            m.next = 51;
                            break
                        }
                        return m.next = 46,
                        (0,
                        Wr.gz)({
                            type: Ne,
                            payload: c
                        });
                    case 46:
                        if (!p) {
                            m.next = 49;
                            break
                        }
                        return m.next = 49,
                        (0,
                        Wr.gz)({
                            type: ye,
                            payload: {
                                workspaceId: c
                            }
                        });
                    case 49:
                        m.next = 63;
                        break;
                    case 51:
                        if (!p) {
                            m.next = 60;
                            break
                        }
                        return m.next = 54,
                        (0,
                        Wr.gz)({
                            type: Ye,
                            payload: {
                                workspaceId: c,
                                actionType: a
                            }
                        });
                    case 54:
                        return m.next = 56,
                        (0,
                        Wr.gz)({
                            type: xe,
                            payload: c
                        });
                    case 56:
                        return m.next = 58,
                        (0,
                        Wr.gz)({
                            type: Ve,
                            payload: {
                                workspaceId: c,
                                actionType: a,
                                isResetActionWhenProvisioningFail: d
                            }
                        });
                    case 58:
                        m.next = 63;
                        break;
                    case 60:
                        if (d) {
                            m.next = 63;
                            break
                        }
                        return m.next = 63,
                        (0,
                        Wr.gz)({
                            type: Ne,
                            payload: c
                        });
                    case 63:
                    case "end":
                        return m.stop()
                    }
            }
            ), Is)
        }
        function Ns(e) {
            var t, n, a, r, o, i, c, s, l, u;
            return Kn().wrap((function(d) {
                for (; ; )
                    switch (d.prev = d.next) {
                    case 0:
                        return t = e.payload,
                        n = t.workspaceId,
                        a = t.actionType,
                        r = t.intervalTime,
                        o = void 0 === r ? vs(a) : r,
                        i = t.maxQueryTime,
                        c = void 0 === i ? Es(a) : i,
                        s = t.remainingTimes,
                        l = void 0 === s ? c / o : s,
                        u = t.isResetActionWhenProvisioningFail,
                        d.next = 3,
                        (0,
                        Wr.gw)(o);
                    case 3:
                        return d.next = 5,
                        (0,
                        Wr.gz)({
                            type: ye,
                            payload: {
                                workspaceId: n,
                                timerRemainingTimes: l,
                                isResetActionWhenProvisioningFail: u
                            }
                        });
                    case 5:
                    case "end":
                        return d.stop()
                    }
            }
            ), Ss)
        }
        var Rs, Ts = function(e, t) {
            var n = e.map((function(e) {
                return new Promise((function(t) {
                    navigator.serviceWorker.addEventListener("message", (function n(a) {
                        try {
                            var r, o = JSON.parse(a.data);
                            "refresh" === (null === o || void 0 === o ? void 0 : o.type) && (null === o || void 0 === o || null === (r = o.payload) || void 0 === r ? void 0 : r.indexOf) && o.payload.indexOf(e) >= 0 && t(n)
                        } catch (i) {
                            console.error(i),
                            t(n)
                        }
                    }
                    ))
                }
                ))
            }
            ));
            Promise.all(n).then((function(e) {
                t(),
                e.forEach((function(e) {
                    navigator.serviceWorker.removeEventListener("message", e)
                }
                ))
            }
            ))
        };
        !function(e) {
            e[e.None = 0] = "None",
            e[e.DSS = 1] = "DSS",
            e[e.DMM = 2] = "DMM",
            e[e.Mixed = 3] = "Mixed"
        }(Rs || (Rs = {}));
        var Ps = new u.SyncBailHook(["closeWelcome", "freType"])
          , As = new u.SyncBailHook([])
          , Ds = new u.SyncBailHook([])
          , Ls = "fre_dedicated_first_login"
          , Os = "fre_flw_first_login"
          , Fs = new Map([[Ls, "1.0"], [Os, "flex"]])
          , Ms = function(e) {
            var t = $t(userInfo.uid);
            return "".concat(e, "_").concat(t)
        }
          , Us = function(e) {
            var t = Ms(e)
              , n = localStorage.getItem(t);
            return null == n ? null : "true" === n || "True" === n || "false" !== n && "False" !== n && (console.warn("invalid value for ", t),
            localStorage.removeItem(t),
            null)
        }
          , Zs = function(e, t) {
            if (e) {
                var n = Ms(e);
                localStorage.setItem(n, t.toString())
            }
        }
          , Hs = function() {
            var e = (0,
            jn.Z)(Kn().mark((function e(t) {
                var n, a, r, o, i, c = arguments;
                return Kn().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (!(n = !(c.length > 1 && void 0 !== c[1]) || c[1])) {
                                e.next = 5;
                                break
                            }
                            if (null == (a = Us(t))) {
                                e.next = 5;
                                break
                            }
                            return e.abrupt("return", a);
                        case 5:
                            return r = Fs.get(t) || t,
                            e.next = 8,
                            fi(r);
                        case 8:
                            if (!(o = e.sent).success) {
                                e.next = 13;
                                break
                            }
                            return !(i = o.data.isFirstLogin) && n && Zs(t, !1),
                            e.abrupt("return", i);
                        case 13:
                            return e.abrupt("return", null);
                        case 14:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }()
          , Bs = function() {
            var e = (0,
            jn.Z)(Kn().mark((function e(t) {
                return Kn().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.abrupt("return", Hs(Ls, t));
                        case 1:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }()
          , Ws = function() {
            var e = (0,
            jn.Z)(Kn().mark((function e(t) {
                return Kn().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (t) {
                                e.next = 2;
                                break
                            }
                            return e.abrupt("return");
                        case 2:
                            Zs(Ls, !1);
                        case 3:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }()
          , Vs = function() {
            var e = (0,
            jn.Z)(Kn().mark((function e() {
                return Kn().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            Hs(Os);
                        case 2:
                            return e.t0 = e.sent,
                            e.abrupt("return", 0 != e.t0);
                        case 4:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function() {
                return e.apply(this, arguments)
            }
        }()
          , Gs = function() {
            Zs(Os, !1)
        }
          , zs = function(e, t) {
            return (e & t) > 0
        }
          , Ys = function() {
            var e = (0,
            jn.Z)(Kn().mark((function e(t, n, a) {
                var o, i, c, s;
                return Kn().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (t) {
                                e.next = 2;
                                break
                            }
                            return e.abrupt("return", {
                                showWelcome: n,
                                freType: r.Default
                            });
                        case 2:
                            if (c = r.NONE,
                            s = r.NONE,
                            (null === (o = Kc(a, [kc.Unknown, kc.Dedicated])) || void 0 === o ? void 0 : o.length) > 0 && (n && (c |= r.Default),
                            s |= r.Default),
                            !((null === (i = Kc(a, [kc.Flex])) || void 0 === i ? void 0 : i.length) > 0)) {
                                e.next = 13;
                                break
                            }
                            return e.next = 10,
                            Vs();
                        case 10:
                            if (!e.sent) {
                                e.next = 12;
                                break
                            }
                            c |= r.FLEX;
                        case 12:
                            s |= r.FLEX;
                        case 13:
                            return e.abrupt("return", {
                                showWelcome: !!c,
                                freType: c || s
                            });
                        case 14:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t, n, a) {
                return e.apply(this, arguments)
            }
        }()
          , qs = Kn().mark(nl)
          , Ks = Kn().mark(al)
          , js = Kn().mark(rl)
          , Xs = Kn().mark(ol)
          , $s = Kn().mark(il)
          , Qs = Kn().mark(cl)
          , Js = Kn().mark(sl)
          , el = Kn().mark(ll)
          , tl = Kn().mark(ul);
        function nl(e) {
            var t, n, a, r, o, i, c, l, u, d, p, m, f, v, E, g, h;
            return Kn().wrap((function(b) {
                for (; ; )
                    switch (b.prev = b.next) {
                    case 0:
                        return b.next = 2,
                        (0,
                        Wr.Ys)(Pr);
                    case 2:
                        if (a = b.sent,
                        r = !!(null === e || void 0 === e || null === (t = e.payload) || void 0 === t ? void 0 : t.isStartUp) && a.IWP_SW_Cache_Workspace,
                        o = null,
                        i = null,
                        a.FIRST_PAINT_OPT_IWP) {
                            b.next = 12;
                            break
                        }
                        return b.next = 9,
                        (0,
                        Wr.RE)(si);
                    case 9:
                        o = b.sent,
                        b.next = 19;
                        break;
                    case 12:
                        return r && Ts(["/api/iws/workspaces", "/api/iws/devices/servicePlans"], (function() {
                            return fv.dispatch({
                                type: we
                            })
                        }
                        )),
                        b.next = 15,
                        (0,
                        Wr.$6)([(0,
                        Wr.RE)(si, {
                            isStartUp: r
                        }), (0,
                        Wr.RE)(Ri, {
                            isStartUp: r
                        })]);
                    case 15:
                        c = b.sent,
                        l = (0,
                        s.Z)(c, 2),
                        o = l[0],
                        i = l[1];
                    case 19:
                        if (o) {
                            b.next = 21;
                            break
                        }
                        return b.abrupt("return");
                    case 21:
                        if (o.success) {
                            b.next = 28;
                            break
                        }
                        return u = o.statusCode,
                        b.next = 25,
                        (0,
                        Wr.gz)({
                            type: _t,
                            payload: {
                                statusCode: u,
                                clientRequestId: o.clientRequestId
                            }
                        });
                    case 25:
                        return b.next = 27,
                        (0,
                        Wr.gz)({
                            type: N,
                            payload: {
                                showLoadingPage: !1
                            }
                        });
                    case 27:
                        return b.abrupt("return");
                    case 28:
                        if (d = o.data,
                        !(0 == d.length)) {
                            b.next = 51;
                            break
                        }
                        if (a.FIRST_PAINT_OPT_IWP) {
                            b.next = 36;
                            break
                        }
                        return b.next = 34,
                        (0,
                        Wr.gz)({
                            type: Ct
                        });
                    case 34:
                        b.next = 48;
                        break;
                    case 36:
                        return b.next = 38,
                        (0,
                        Wr.Ys)(Br);
                    case 38:
                        if (b.sent.checkedUserLicenseType) {
                            b.next = 42;
                            break
                        }
                        return b.next = 42,
                        (0,
                        Wr.qn)(x);
                    case 42:
                        return b.next = 44,
                        (0,
                        Wr.Ys)(Fr);
                    case 44:
                        if ((p = b.sent).isDSS && (qt(p) || Kt(p))) {
                            b.next = 48;
                            break
                        }
                        return b.next = 48,
                        (0,
                        Wr.gz)({
                            type: Ct
                        });
                    case 48:
                        return b.next = 50,
                        (0,
                        Wr.gz)({
                            type: N,
                            payload: {
                                showLoadingPage: !1
                            }
                        });
                    case 50:
                        return b.abrupt("return");
                    case 51:
                        if (a.FIRST_PAINT_OPT_IWP) {
                            b.next = 55;
                            break
                        }
                        return b.next = 54,
                        (0,
                        Wr.RE)(Ri);
                    case 54:
                        i = b.sent;
                    case 55:
                        return m = null === (n = i) || void 0 === n ? void 0 : n.data,
                        f = m.reduce((function(e, t) {
                            return e[t.servicePlanId] = t,
                            e
                        }
                        ), {}),
                        b.next = 59,
                        (0,
                        Wr.gz)({
                            type: Ie,
                            payload: {
                                servicePlanMap: f,
                                deviceList: d,
                                deviceListInitialized: !0
                            }
                        });
                    case 59:
                        return b.next = 61,
                        (0,
                        Wr.gz)({
                            type: Se
                        });
                    case 61:
                        v = (0,
                        ot.Z)(d),
                        b.prev = 62,
                        v.s();
                    case 64:
                        if ((E = v.n()).done) {
                            b.next = 70;
                            break
                        }
                        return g = E.value,
                        b.next = 68,
                        (0,
                        Wr.gz)({
                            type: _e,
                            payload: {
                                device: g,
                                triggeredBySingleDevice: !1
                            }
                        });
                    case 68:
                        b.next = 64;
                        break;
                    case 70:
                        b.next = 75;
                        break;
                    case 72:
                        b.prev = 72,
                        b.t0 = b.catch(62),
                        v.e(b.t0);
                    case 75:
                        return b.prev = 75,
                        v.f(),
                        b.finish(75);
                    case 78:
                        return b.next = 80,
                        (0,
                        Wr.gz)({
                            type: k
                        });
                    case 80:
                        return b.next = 82,
                        (0,
                        Wr.gz)({
                            type: yr
                        });
                    case 82:
                        return b.next = 84,
                        (0,
                        Wr.RE)(zi);
                    case 84:
                        if (!(h = b.sent).success || !h.data.userRestoreEnabled) {
                            b.next = 88;
                            break
                        }
                        return b.next = 88,
                        (0,
                        Wr.gz)({
                            type: ne
                        });
                    case 88:
                    case "end":
                        return b.stop()
                    }
            }
            ), qs, null, [[62, 72, 75, 78]])
        }
        function al() {
            return Kn().wrap((function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2,
                        (0,
                        Wr.RE)(rl);
                    case 2:
                        return e.next = 4,
                        (0,
                        Wr.gz)({
                            type: N,
                            payload: {
                                loginFinished: !0
                            }
                        });
                    case 4:
                    case "end":
                        return e.stop()
                    }
            }
            ), Ks)
        }
        function rl() {
            var e, t, n, a, r, o, i, c, s, l, u, d;
            return Kn().wrap((function(p) {
                for (; ; )
                    switch (p.prev = p.next) {
                    case 0:
                        return p.next = 2,
                        (0,
                        Wr.Ys)(Pr);
                    case 2:
                        if (e = p.sent,
                        !Ds.call()) {
                            p.next = 17;
                            break
                        }
                        return p.next = 6,
                        (0,
                        Wr.gz)({
                            type: N,
                            payload: {
                                showWorkspaceBubble: !1,
                                showLoadingPage: !1
                            }
                        });
                    case 6:
                        return p.next = 8,
                        (0,
                        Wr.Ys)(Dr);
                    case 8:
                        return t = p.sent,
                        p.next = 11,
                        (0,
                        Wr.Ys)(Br);
                    case 11:
                        return n = p.sent,
                        a = As.call(),
                        r = a(e, n, t),
                        o = r.showWelcome,
                        i = r.freType,
                        p.next = 16,
                        (0,
                        Wr.gz)({
                            type: ie,
                            payload: {
                                enable: o,
                                freType: i
                            }
                        });
                    case 16:
                        return p.abrupt("return");
                    case 17:
                        return p.next = 19,
                        (0,
                        Wr.RE)(Bs, e.IWP_Enable_Local_First_Login_Flag);
                    case 19:
                        if (c = p.sent,
                        e.IWP_EnableFlexFRE || null !== c) {
                            p.next = 22;
                            break
                        }
                        return p.abrupt("return");
                    case 22:
                        return p.next = 24,
                        (0,
                        Wr.Ys)(Dr);
                    case 24:
                        return s = p.sent,
                        p.next = 27,
                        (0,
                        Wr.RE)(Ys, e.IWP_EnableFlexFRE, !!c, s);
                    case 27:
                        return l = p.sent,
                        u = l.showWelcome,
                        d = l.freType,
                        p.next = 32,
                        (0,
                        Wr.gz)({
                            type: N,
                            payload: {
                                showWorkspaceBubble: !1,
                                showLoadingPage: !1
                            }
                        });
                    case 32:
                        return p.next = 34,
                        (0,
                        Wr.gz)({
                            type: ie,
                            payload: {
                                enable: u,
                                freType: d
                            }
                        });
                    case 34:
                    case "end":
                        return p.stop()
                    }
            }
            ), js)
        }
        function ol() {
            var e, t;
            return Kn().wrap((function(n) {
                for (; ; )
                    switch (n.prev = n.next) {
                    case 0:
                        return n.next = 2,
                        (0,
                        Wr.RE)(Pi);
                    case 2:
                        if ((e = n.sent).success) {
                            n.next = 5;
                            break
                        }
                        return n.abrupt("return");
                    case 5:
                        return t = e.data,
                        n.next = 8,
                        (0,
                        Wr.gz)({
                            type: Ie,
                            payload: {
                                remoteUrl: t.pageUrl
                            }
                        });
                    case 8:
                        return n.next = 10,
                        (0,
                        Wr.gz)({
                            type: N,
                            payload: {
                                feedUrl: t.feedUrl
                            }
                        });
                    case 10:
                    case "end":
                        return n.stop()
                    }
            }
            ), Xs)
        }
        function il() {
            var e, t, n;
            return Kn().wrap((function(a) {
                for (; ; )
                    switch (a.prev = a.next) {
                    case 0:
                        return a.prev = 0,
                        a.next = 3,
                        (0,
                        Wr.RE)(Ei);
                    case 3:
                        if (!(e = a.sent).success) {
                            a.next = 11;
                            break
                        }
                        if (!(t = e.data) || t.licenseType !== Rs.DSS && t.licenseType !== Rs.Mixed) {
                            a.next = 9;
                            break
                        }
                        return a.next = 9,
                        (0,
                        Wr.gz)({
                            type: te
                        });
                    case 9:
                        a.next = 16;
                        break;
                    case 11:
                        return n = e.statusCode,
                        a.next = 14,
                        (0,
                        Wr.gz)({
                            type: _t,
                            payload: {
                                statusCode: n,
                                clientRequestId: e.clientRequestId
                            }
                        });
                    case 14:
                        return a.next = 16,
                        (0,
                        Wr.gz)({
                            type: N,
                            payload: {
                                showLoadingPage: !1
                            }
                        });
                    case 16:
                        return a.next = 18,
                        (0,
                        Wr.gz)({
                            type: x
                        });
                    case 18:
                        a.next = 22;
                        break;
                    case 20:
                        a.prev = 20,
                        a.t0 = a.catch(0);
                    case 22:
                    case "end":
                        return a.stop()
                    }
            }
            ), $s, null, [[0, 20]])
        }
        function cl() {
            return Kn().wrap((function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2,
                        (0,
                        Wr.Ys)(Mr);
                    case 2:
                        if (e.sent === Tn.Own) {
                            e.next = 6;
                            break
                        }
                        return e.next = 6,
                        (0,
                        Wr.gz)({
                            type: _,
                            payload: Tn.Own
                        });
                    case 6:
                        return e.next = 8,
                        (0,
                        Wr.gz)({
                            type: O
                        });
                    case 8:
                    case "end":
                        return e.stop()
                    }
            }
            ), Qs)
        }
        function sl() {
            var e, t, n, a, r, o, i, c, s, l, u, d;
            return Kn().wrap((function(p) {
                for (; ; )
                    switch (p.prev = p.next) {
                    case 0:
                        return p.next = 2,
                        (0,
                        Wr.Ys)(Pr);
                    case 2:
                        return e = p.sent,
                        p.next = 5,
                        (0,
                        Wr.Ys)(Br);
                    case 5:
                        if (t = p.sent,
                        n = e.DEVICE_LIST_POLLING_CLIENT_TYPE,
                        a = e.DEVICE_LIST_POLLING_MAX_TIMES || 100,
                        r = e.DEVICE_LIST_POLLING_INTERVAL || 3e4,
                        o = 0,
                        "*" == n || n == t.clientVariant) {
                            p.next = 12;
                            break
                        }
                        return p.abrupt("return");
                    case 12:
                        i = function() {
                            o = 0
                        }
                        ,
                        window.addEventListener("focus", i),
                        p.prev = 14;
                    case 15:
                        return p.next = 18,
                        (0,
                        Wr.gw)(r);
                    case 18:
                        if (!(o < a)) {
                            p.next = 51;
                            break
                        }
                        return o++,
                        p.next = 22,
                        (0,
                        Wr.gz)({
                            type: Xe
                        });
                    case 22:
                        return p.next = 24,
                        (0,
                        Wr.RE)(si);
                    case 24:
                        if (!(null === (c = p.sent) || void 0 === c ? void 0 : c.success)) {
                            p.next = 51;
                            break
                        }
                        if (0 !== (s = c.data).length) {
                            p.next = 32;
                            break
                        }
                        return p.next = 30,
                        (0,
                        Wr.gz)({
                            type: Ct
                        });
                    case 30:
                        p.next = 51;
                        break;
                    case 32:
                        return p.next = 34,
                        (0,
                        Wr.gz)({
                            type: Ze,
                            payload: {
                                deviceList: s
                            }
                        });
                    case 34:
                        l = (0,
                        ot.Z)(s),
                        p.prev = 35,
                        l.s();
                    case 37:
                        if ((u = l.n()).done) {
                            p.next = 43;
                            break
                        }
                        return d = u.value,
                        p.next = 41,
                        (0,
                        Wr.gz)({
                            type: _e,
                            payload: {
                                device: d,
                                ignoreActionStatusCheck: !0,
                                triggeredBySingleDevice: !1,
                                keepCurrentDeviceTip: !0
                            }
                        });
                    case 41:
                        p.next = 37;
                        break;
                    case 43:
                        p.next = 48;
                        break;
                    case 45:
                        p.prev = 45,
                        p.t0 = p.catch(35),
                        l.e(p.t0);
                    case 48:
                        return p.prev = 48,
                        l.f(),
                        p.finish(48);
                    case 51:
                        p.next = 15;
                        break;
                    case 53:
                        return p.prev = 53,
                        p.next = 56,
                        (0,
                        Wr.By)();
                    case 56:
                        if (!p.sent) {
                            p.next = 58;
                            break
                        }
                        window.removeEventListener("focus", i);
                    case 58:
                        return p.finish(53);
                    case 59:
                    case "end":
                        return p.stop()
                    }
            }
            ), Js, null, [[14, , 53, 59], [35, 45, 48, 51]])
        }
        function ll() {
            var e;
            return Kn().wrap((function(t) {
                for (; ; )
                    switch (t.prev = t.next) {
                    case 0:
                        return t.next = 2,
                        (0,
                        Wr.Ys)(Pr);
                    case 2:
                        return e = t.sent,
                        t.next = 5,
                        (0,
                        Wr.RE)(Ws, e.IWP_Enable_Local_First_Login_Flag);
                    case 5:
                    case "end":
                        return t.stop()
                    }
            }
            ), el)
        }
        function ul() {
            return Kn().wrap((function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2,
                        (0,
                        Wr.RE)(Gs);
                    case 2:
                    case "end":
                        return e.stop()
                    }
            }
            ), tl)
        }
        var dl, pl = Kn().mark(hl), ml = Kn().mark(bl), fl = Kn().mark(wl), vl = Kn().mark(yl), El = Kn().mark(_l), gl = Kn().mark(Cl);
        function hl() {
            var e, t, n;
            return Kn().wrap((function(a) {
                for (; ; )
                    switch (a.prev = a.next) {
                    case 0:
                        return a.next = 2,
                        (0,
                        Wr.RE)(Zi);
                    case 2:
                        if ((e = a.sent).success) {
                            a.next = 5;
                            break
                        }
                        return a.abrupt("return");
                    case 5:
                        return t = e.data,
                        n = t.reduce((function(e, t) {
                            return e[t.deviceId] = t,
                            e
                        }
                        ), {}),
                        a.next = 9,
                        (0,
                        Wr.gz)({
                            type: $e,
                            payload: n
                        });
                    case 9:
                    case "end":
                        return a.stop()
                    }
            }
            ), pl)
        }
        function bl(e) {
            var t, n;
            return Kn().wrap((function(a) {
                for (; ; )
                    switch (a.prev = a.next) {
                    case 0:
                        return t = e.payload.workspaceId,
                        a.next = 3,
                        (0,
                        Wr.RE)(Vi, t);
                    case 3:
                        return n = a.sent,
                        a.next = 6,
                        (0,
                        Wr.gz)({
                            type: Je,
                            payload: {
                                workspaceId: t,
                                snapshots: n.data.snapshots
                            }
                        });
                    case 6:
                    case "end":
                        return a.stop()
                    }
            }
            ), ml)
        }
        function wl(e) {
            var t, n, a, r, o, i;
            return Kn().wrap((function(c) {
                for (; ; )
                    switch (c.prev = c.next) {
                    case 0:
                        return t = e.payload,
                        n = t.workspaceId,
                        a = t.servicePlan,
                        r = t.interval,
                        c.next = 3,
                        (0,
                        Wr.RE)(pi, n, a);
                    case 3:
                        return o = c.sent,
                        i = o.success ? o.data.accessState : Ic.NoLicensesAvailable,
                        c.next = 7,
                        (0,
                        Wr.gz)({
                            type: De,
                            payload: {
                                workspaceId: n,
                                accessState: i
                            }
                        });
                    case 7:
                        i !== Ic.NoLicensesAvailable && r && clearInterval(r);
                    case 8:
                    case "end":
                        return c.stop()
                    }
            }
            ), fl)
        }
        function yl(e) {
            var n, a, r, o, i, c, s, l;
            return Kn().wrap((function(u) {
                for (; ; )
                    switch (u.prev = u.next) {
                    case 0:
                        return n = e.payload,
                        a = n.workspaceId,
                        r = n.interval,
                        u.next = 3,
                        (0,
                        Wr.RE)(ui, a);
                    case 3:
                        if (o = u.sent,
                        i = o.data,
                        !userInfo || "NativeWindows" !== userInfo.client) {
                            u.next = 8;
                            break
                        }
                        return u.next = 8,
                        (0,
                        Wr.gz)({
                            type: Ue,
                            payload: i
                        });
                    case 8:
                        if (Hv("Requested FLW device status is ".concat(i.deviceStatus, "\n  and accessState is ").concat(i.accessState)),
                        !(i.accessState === Ic.Active || i.accessState === Ic.Unassigned || i.accessState === Ic.ActivationFailed || i.deviceStatus && i.deviceStatus === _c.Running)) {
                            u.next = 24;
                            break
                        }
                        return clearInterval(r),
                        u.next = 13,
                        (0,
                        Wr.gz)({
                            type: Te,
                            payload: {
                                workspaceId: a
                            }
                        });
                    case 13:
                        return u.next = 15,
                        (0,
                        Wr.Ys)(Ar);
                    case 15:
                        if ((null === (l = u.sent) || void 0 === l || null === (c = l.stateTipsMap) || void 0 === c || null === (s = c[i.workspaceId]) || void 0 === s ? void 0 : s.actionFrom) !== Nc.FrontlineConnecting) {
                            u.next = 21;
                            break
                        }
                        return u.next = 19,
                        (0,
                        Wr.gz)({
                            type: je,
                            payload: {
                                workspaceId: a
                            }
                        });
                    case 19:
                        return u.next = 21,
                        (0,
                        Wr.gz)({
                            type: Ne,
                            payload: a
                        });
                    case 21:
                        if (i.accessState !== Ic.ActivationFailed) {
                            u.next = 24;
                            break
                        }
                        return u.next = 24,
                        (0,
                        Wr.gz)({
                            type: Ke,
                            payload: {
                                workspaceId: a,
                                deviceStateTip: {
                                    type: xc.Error,
                                    message: t("flw-activation-failed-message-tip")
                                }
                            }
                        });
                    case 24:
                    case "end":
                        return u.stop()
                    }
            }
            ), vl)
        }
        function _l(e) {
            var t, n, a, r, o;
            return Kn().wrap((function(i) {
                for (; ; )
                    switch (i.prev = i.next) {
                    case 0:
                        return t = e.payload,
                        n = t.workspaceId,
                        a = t.servicePlanId,
                        i.next = 3,
                        (0,
                        Wr.RE)(pi, n, a);
                    case 3:
                        return r = i.sent,
                        o = r.success ? r.data.accessState : Ic.ActivationFailed,
                        i.next = 7,
                        (0,
                        Wr.gz)({
                            type: Le,
                            payload: {
                                workspaceId: n,
                                accessState: o
                            }
                        });
                    case 7:
                    case "end":
                        return i.stop()
                    }
            }
            ), El)
        }
        function Cl(e) {
            var t, n, a, r, o;
            return Kn().wrap((function(i) {
                for (; ; )
                    switch (i.prev = i.next) {
                    case 0:
                        return n = e.payload.workspaceId,
                        i.next = 3,
                        (0,
                        Wr.RE)(ui, n);
                    case 3:
                        return a = i.sent,
                        r = a.data,
                        o = (null === a || void 0 === a ? void 0 : a.success) ? null === a || void 0 === a || null === (t = a.data) || void 0 === t ? void 0 : t.accessState : Ic.ActivationFailed,
                        r.deviceStatus === _c.Running && (o = Ic.Active),
                        o || (o = Ic.ActivationFailed),
                        i.next = 10,
                        (0,
                        Wr.gz)({
                            type: Le,
                            payload: {
                                workspaceId: n,
                                accessState: o
                            }
                        });
                    case 10:
                    case "end":
                        return i.stop()
                    }
            }
            ), gl)
        }
        function kl(e) {
            var t = {
                actionType: void 0
            }
              , n = e.lastRemoteActionResult
              , a = e.ongoingActionType;
            if (function(e) {
                var t = Hc(e)
                  , n = e.lastRemoteActionResult;
                return !((null === n || void 0 === n ? void 0 : n.actionName) === ls.Reprovision && ((null === n || void 0 === n ? void 0 : n.actionState) === us.Pending || (null === n || void 0 === n ? void 0 : n.actionState) === us.Active)) && t
            }(e))
                return t.actionType = Ec.Provision,
                t.actionStatus = dl.Ongoing,
                t.isEqualToOngoingActionFromDevice = Il(e, t.actionType),
                t;
            if (function(e) {
                return e.provisionStatus === Ac
            }(e))
                return t.actionType = Ec.Provision,
                t.actionStatus = dl.Failed,
                t.isEqualToOngoingActionFromDevice = Il(e, t.actionType),
                t;
            if ((function(e) {
                return e.provisionStatus === Pc
            }(e) || function(e) {
                return e.provisionStatus === Dc
            }(e)) && a === Ec.Provision && (t.actionType = Ec.Provision,
            t.actionStatus = dl.Succeed),
            !function(e) {
                return "upgrading" == e.provisionStatus
            }(e) ? Mc(e) ? (t.actionType = vc.Resize,
            t.actionStatus = dl.Failed) : function(e) {
                return "upgraded" == e.provisionStatus
            }(e) && a === vc.Resize && (t.actionType = vc.Resize,
            t.actionStatus = dl.Succeed) : (t.actionType = vc.Resize,
            t.actionStatus = dl.Ongoing),
            !function(e) {
                return "moving" === e.provisionStatus
            }(e) ? !function(e) {
                return "moveFailed" === e.provisionStatus
            }(e) ? function(e) {
                return "moved" === e.provisionStatus
            }(e) && a === vc.Move && (t.actionType = vc.Move,
            t.actionStatus = dl.Succeed) : (t.actionType = vc.Move,
            t.actionStatus = dl.Failed) : (t.actionType = vc.Move,
            t.actionStatus = dl.Ongoing),
            n && n.actionName && n.actionState) {
                var r = n.actionName
                  , o = n.actionState
                  , i = function(e) {
                    switch (e) {
                    case ls.Resize:
                        return vc.Resize;
                    case ls.ChangeUserAccountType:
                        return Ec.ChangeUserAccountType;
                    case ls.Reprovision:
                        return fc.Reset;
                    case ls.Rename:
                        return fc.Rename;
                    case ls.Restart:
                        return fc.Restart;
                    case ls.Troubleshoot:
                        return fc.Diagnose;
                    case ls.Restore:
                        return fc.Restore;
                    case ls.PlaceUnderReview:
                        return vc.PlaceUnderReview;
                    case ls.Move:
                        return vc.Move;
                    default:
                        return
                    }
                }(r);
                o === us.Pending || o === us.Active ? t.actionStatus = dl.Ongoing : o === us.Failed ? t.actionStatus = dl.Failed : o === us.Done ? t.actionStatus = dl.Succeed : o != us.None && (t.actionStatus = dl.Unknown),
                t.actionType = i
            }
            return t.isEqualToOngoingActionFromDevice = Il(e, t.actionType),
            t
        }
        function Il(e, t) {
            var n = e.ongoingActionType;
            return null != t && t === n
        }
        !function(e) {
            e.Ongoing = "Ongoing",
            e.Failed = "Failed",
            e.Succeed = "Succeed",
            e.Unknown = "Unknown"
        }(dl || (dl = {}));
        var Sl = Kn().mark(Nl)
          , xl = Kn().mark(Rl);
        function Nl(e) {
            var t, n, a, r, o, i, c, s, u, d, p, m, f;
            return Kn().wrap((function(v) {
                for (; ; )
                    switch (v.prev = v.next) {
                    case 0:
                        return t = e.payload,
                        n = t.workspaceId,
                        a = t.timerRemainingTimes,
                        r = t.isResetActionWhenProvisioningFail,
                        v.next = 3,
                        (0,
                        Wr.RE)(ui, n);
                    case 3:
                        if ((o = v.sent).success) {
                            v.next = 11;
                            break
                        }
                        if (r) {
                            v.next = 8;
                            break
                        }
                        return v.next = 8,
                        (0,
                        Wr.gz)({
                            type: Ne,
                            payload: n
                        });
                    case 8:
                        return v.next = 10,
                        (0,
                        Wr.gz)({
                            type: Ke,
                            payload: {
                                workspaceId: n,
                                deviceStateTip: bs()
                            }
                        });
                    case 10:
                        return v.abrupt("return");
                    case 11:
                        if (i = o.data) {
                            v.next = 25;
                            break
                        }
                        return v.next = 15,
                        (0,
                        Wr.gz)({
                            type: He,
                            payload: n
                        });
                    case 15:
                        return v.next = 17,
                        (0,
                        Wr.Ys)(Dr);
                    case 17:
                        if (c = v.sent,
                        s = c.length,
                        u = 0 == s,
                        d = 1 == s && c[0].workspaceId === n,
                        !u && !d) {
                            v.next = 24;
                            break
                        }
                        return v.next = 24,
                        (0,
                        Wr.gz)({
                            type: Ct
                        });
                    case 24:
                        return v.abrupt("return");
                    case 25:
                        return v.next = 27,
                        (0,
                        Wr.gz)({
                            type: Ue,
                            payload: i
                        });
                    case 27:
                        return v.next = 29,
                        (0,
                        Wr.Ys)(Dr);
                    case 29:
                        return p = v.sent,
                        m = p.find((function(e) {
                            return e.workspaceId === n
                        }
                        )),
                        f = (0,
                        l.Z)((0,
                        l.Z)({}, m), i),
                        v.next = 34,
                        (0,
                        Wr.gz)({
                            type: _e,
                            payload: {
                                device: f,
                                timerRemainingTimes: a,
                                isResetActionWhenProvisioningFail: r,
                                triggeredBySingleDevice: !0
                            }
                        });
                    case 34:
                    case "end":
                        return v.stop()
                    }
            }
            ), Sl)
        }
        function Rl(e) {
            var n, a, r, o, i, c, s, l, u, d, p, m, f, v, E, g, h, b, w, y, _, C, k, I, S;
            return Kn().wrap((function(x) {
                for (; ; )
                    switch (x.prev = x.next) {
                    case 0:
                        if (n = e.payload,
                        a = n.device,
                        r = n.timerRemainingTimes,
                        o = n.isResetActionWhenProvisioningFail,
                        i = n.triggeredBySingleDevice,
                        c = n.ignoreActionStatusCheck,
                        s = n.keepCurrentDeviceTip,
                        l = a.workspaceId,
                        u = a.lastRemoteActionResult,
                        d = !1,
                        !(p = a.reviewStatus && a.reviewStatus.userAccessLevel === Lc.Restricted)) {
                            x.next = 11;
                            break
                        }
                        return x.next = 7,
                        (0,
                        Wr.gz)({
                            type: Ke,
                            payload: {
                                workspaceId: l,
                                deviceStateTip: {
                                    type: xc.Blocked,
                                    message: t("restricted-tip")
                                }
                            }
                        });
                    case 7:
                        return x.next = 9,
                        (0,
                        Wr.gz)({
                            type: xe,
                            payload: l
                        });
                    case 9:
                        return d = !0,
                        x.abrupt("return");
                    case 11:
                        return x.next = 13,
                        (0,
                        Wr.Ys)(Pr);
                    case 13:
                        if (!(x.sent.IWP_Enable_FlexUnavailableMessage && Xc(a) && $c(a))) {
                            x.next = 20;
                            break
                        }
                        return x.next = 17,
                        (0,
                        Wr.gz)({
                            type: Ke,
                            payload: {
                                workspaceId: l,
                                deviceStateTip: {
                                    type: xc.Info,
                                    message: t("frontline-unavailable-tip")
                                }
                            }
                        });
                    case 17:
                        return x.next = 19,
                        (0,
                        Wr.gz)({
                            type: xe,
                            payload: l
                        });
                    case 19:
                        return x.abrupt("return");
                    case 20:
                        if (m = void 0,
                        (f = kl(a)).actionStatus !== dl.Ongoing) {
                            x.next = 48;
                            break
                        }
                        if (f.actionType !== vc.PlaceUnderReview || !a.reviewStatus || a.reviewStatus.userAccessLevel !== Lc.Unrestricted) {
                            x.next = 27;
                            break
                        }
                        return x.next = 26,
                        (0,
                        Wr.gz)({
                            type: Oe,
                            payload: l
                        });
                    case 26:
                        return x.abrupt("return");
                    case 27:
                        if (m = f.actionType,
                        v = !!r && r <= 1,
                        E = f.isEqualToOngoingActionFromDevice && r ? r - 1 : void 0,
                        d = !0,
                        !f.isEqualToOngoingActionFromDevice || !v) {
                            x.next = 37;
                            break
                        }
                        return g = ks(m),
                        x.next = 35,
                        (0,
                        Wr.gz)({
                            type: Ke,
                            payload: {
                                workspaceId: l,
                                deviceStateTip: g
                            }
                        });
                    case 35:
                        x.next = 46;
                        break;
                    case 37:
                        return x.next = 39,
                        (0,
                        Wr.gz)({
                            type: Ye,
                            payload: {
                                workspaceId: l,
                                actionType: m
                            }
                        });
                    case 39:
                        if (c) {
                            x.next = 42;
                            break
                        }
                        return x.next = 42,
                        (0,
                        Wr.gz)({
                            type: Ve,
                            payload: {
                                workspaceId: l,
                                remainingTimes: E,
                                actionType: m,
                                isResetActionWhenProvisioningFail: o
                            }
                        });
                    case 42:
                        if (!m) {
                            x.next = 46;
                            break
                        }
                        return b = ws(m, null === u || void 0 === u || null === (h = u.statusDetails) || void 0 === h ? void 0 : h.code),
                        x.next = 46,
                        (0,
                        Wr.gz)({
                            type: Ke,
                            payload: {
                                workspaceId: l,
                                deviceStateTip: b
                            }
                        });
                    case 46:
                        x.next = 70;
                        break;
                    case 48:
                        if (f.actionStatus !== dl.Failed || !i) {
                            x.next = 60;
                            break
                        }
                        return w = _s(f.actionType, a),
                        x.next = 52,
                        (0,
                        Wr.gz)({
                            type: Ke,
                            payload: {
                                workspaceId: l,
                                deviceStateTip: w
                            }
                        });
                    case 52:
                        if (d = !0,
                        o) {
                            x.next = 56;
                            break
                        }
                        return x.next = 56,
                        (0,
                        Wr.gz)({
                            type: Ne,
                            payload: l
                        });
                    case 56:
                        return x.next = 58,
                        (0,
                        Wr.gz)({
                            type: qe,
                            payload: l
                        });
                    case 58:
                        x.next = 70;
                        break;
                    case 60:
                        if (f.actionStatus !== dl.Succeed || !i) {
                            x.next = 70;
                            break
                        }
                        if (f.actionType !== fc.Reset) {
                            x.next = 64;
                            break
                        }
                        return x.next = 64,
                        (0,
                        Wr.gz)({
                            type: Je,
                            payload: {
                                workspaceId: l,
                                snapshots: []
                            }
                        });
                    case 64:
                        return y = ys(f.actionType, a),
                        x.next = 67,
                        (0,
                        Wr.gz)({
                            type: Ke,
                            payload: {
                                workspaceId: l,
                                deviceStateTip: y
                            }
                        });
                    case 67:
                        return d = !0,
                        x.next = 70,
                        (0,
                        Wr.gz)({
                            type: qe,
                            payload: l
                        });
                    case 70:
                        if (!(_ = Zc(a))) {
                            x.next = 75;
                            break
                        }
                        return x.next = 74,
                        (0,
                        Wr.gz)({
                            type: Ke,
                            payload: {
                                workspaceId: l,
                                deviceStateTip: {
                                    type: xc.Blocked,
                                    message: t("pending-tip")
                                }
                            }
                        });
                    case 74:
                        d = !0;
                    case 75:
                        if (C = Uc(a),
                        !(m && m != vc.Move || C || p || _)) {
                            x.next = 82;
                            break
                        }
                        return x.next = 80,
                        (0,
                        Wr.gz)({
                            type: xe,
                            payload: l
                        });
                    case 80:
                        x.next = 89;
                        break;
                    case 82:
                        if (m !== vc.Move) {
                            x.next = 87;
                            break
                        }
                        return x.next = 85,
                        (0,
                        Wr.gz)({
                            type: Oe,
                            payload: l
                        });
                    case 85:
                        x.next = 89;
                        break;
                    case 87:
                        return x.next = 89,
                        (0,
                        Wr.gz)({
                            type: Ne,
                            payload: l
                        });
                    case 89:
                        if (!(k = os(a))) {
                            x.next = 94;
                            break
                        }
                        return x.next = 93,
                        (0,
                        Wr.gz)({
                            type: Ke,
                            payload: {
                                workspaceId: l,
                                deviceStateTip: k
                            }
                        });
                    case 93:
                        d = !0;
                    case 94:
                        if (d) {
                            x.next = 107;
                            break
                        }
                        if (!s) {
                            x.next = 105;
                            break
                        }
                        return x.next = 98,
                        (0,
                        Wr.Ys)(Ar);
                    case 98:
                        if (I = x.sent,
                        !(S = I.stateTipsMap[a.workspaceId]) || S.type === xc.Error || S.type === xc.Success) {
                            x.next = 103;
                            break
                        }
                        return x.next = 103,
                        (0,
                        Wr.gz)({
                            type: je,
                            payload: {
                                workspaceId: l
                            }
                        });
                    case 103:
                        x.next = 107;
                        break;
                    case 105:
                        return x.next = 107,
                        (0,
                        Wr.gz)({
                            type: je,
                            payload: {
                                workspaceId: l
                            }
                        });
                    case 107:
                    case "end":
                        return x.stop()
                    }
            }
            ), xl)
        }
        var Tl = {
            it: "https://go.microsoft.com/fwlink/?linkid=2121429"
        }
          , Pl = new Set(Object.keys(Tl))
          , Al = a(4106)
          , Dl = (0,
        ko.$j)((function(e) {
            return {
                clientVariant: e.Home.clientVariant
            }
        }
        ))((function(e) {
            var n = e.translateFun;
            if (e.clientVariant !== b.Default)
                return null;
            var a = function(e) {
                var t = e.translation.toLocaleLowerCase();
                return Pl.has(t) ? Tl[t] : null
            }(userInfo);
            if (!a)
                return null;
            var r = n || t;
            return r ? No.createElement(Al.r, {
                href: a,
                target: "_blank",
                underline: !1
            }, r("accessibility-label")) : null
        }
        ))
          , Ll = a(8932)
          , Ol = a(2625)
          , Fl = function(e, t) {
            var n = document.createElement("div")
              , a = "speak-" + Date.now();
            n.setAttribute("id", a),
            n.setAttribute("aria-live", t || "polite"),
            n.classList.add("sr-only"),
            document.body.appendChild(n),
            window.setTimeout((function() {
                var t = document.getElementById(a);
                null !== t && void 0 !== t && (t.innerHTML = e)
            }
            ), 100),
            window.setTimeout((function() {
                var e = document.getElementById(a);
                null !== e && void 0 !== e && document.body.removeChild(e)
            }
            ), 1e3)
        }
          , Ml = a(7270)
          , Ul = a(8660);
        function Zl(e) {
            var n = e.data
              , a = e.dispatch
              , r = e.style
              , o = e.clientRequestId
              , i = n.info
              , c = n.title
              , s = n.image
              , l = n.infoLink
              , u = n.infoLinkClick
              , d = wo.call();
            return No.useEffect((function() {
                var e = [c, i, l].filter((function(e) {
                    return !!e
                }
                )).join(",");
                e && Fl(e, "assertive")
            }
            ), [c]),
            No.createElement("div", {
                className: "errormsg",
                style: r
            }, No.createElement("img", {
                className: "errormsg-img",
                src: s,
                role: "presentation"
            }), No.createElement(Ml._, {
                className: m()("errormsg-title", null === d || void 0 === d ? void 0 : d.titleClass),
                "aria-label": c
            }, c), No.createElement(Ml._, {
                className: m()("errormsg-text", null === d || void 0 === d ? void 0 : d.textClass),
                "aria-label": i
            }, i, l && No.createElement(Ul.K, {
                className: "link",
                onClick: function() {
                    u && u(a)
                },
                ariaLabel: l
            }, l)), o ? No.createElement(Ml._, {
                className: m()("errormsg-text", null === d || void 0 === d ? void 0 : d.textClass, "mt-4"),
                "aria-label": "".concat(t("correlation-id"), ": ").concat(o, ")")
            }, "".concat(t("correlation-id"), ": ").concat(o)) : null)
        }
        var Hl, Bl = {}, Wl = function(e, t) {
            var n = Bl[e];
            if (n)
                for (var a = 0; a < n.length; a++)
                    n[a](t)
        }, Vl = function(e, t) {
            Bl[e] || (Bl[e] = []),
            Bl[e].push(t)
        };
        !function(e) {
            e.LoginFinish = "login finish",
            e.CatchError = "catch error"
        }(Hl || (Hl = {}));
        var Gl = a(9511);
        function zl(e) {
            return function(t) {
                function n(n) {
                    var a = Object.assign({}, n)
                      , r = (0,
                    Gl.$)(e, a)
                      , o = (0,
                    s.Z)(r, 3)
                      , i = o[0]
                      , c = o[1]
                      , u = o[2]
                      , d = (0,
                    l.Z)((0,
                    l.Z)({}, a), {}, {
                        t: function(e, t) {
                            var n = i(e, (0,
                            l.Z)((0,
                            l.Z)({}, t), {}, {
                                returnObjects: !0
                            }));
                            return "object" === (0,
                            Ee.Z)(n) ? n.value : n
                        },
                        i18n: c,
                        tReady: u
                    });
                    return No.createElement(t, d)
                }
                var a;
                return n.displayName = "withI18nextTranslation(".concat((a = t).displayName || a.name || ("string" === typeof a && a.length > 0 ? a : "Unknown"), ")"),
                n.WrappedComponent = t,
                n
            }
        }
        var Yl, ql, Kl, jl, Xl, $l, Ql, Jl, eu = (0,
        ko.$j)((function(e) {
            var t;
            return {
                showErrorPage: e.Error.hasError,
                errorType: e.Error.errorType,
                clientRequestId: e.Error.clientRequestId,
                flighting: null === (t = e.EcsConfiguration) || void 0 === t ? void 0 : t.FlightingData,
                account: e.Home.userInfo,
                checkedUserLicenseType: e.Home.checkedUserLicenseType,
                errorPageContainerConfig: bo(e)
            }
        }
        )), tu = function(e) {
            (0,
            Ll.Z)(n, e);
            var t = (0,
            Ol.Z)(n);
            function n(e) {
                var a;
                (0,
                i.Z)(this, n),
                (a = t.call(this, e)).errorHandler = function(e) {
                    switch (Vv(e, "IWPortal"),
                    e.errorType) {
                    case ut.NoDevicesError:
                        return void a.props.dispatch({
                            type: Ct
                        });
                    case ut.unAuthorizedError:
                        return void a.props.dispatch({
                            type: "SET_NO_AUTH_ERROR"
                        });
                    case ut.serverError:
                        return void a.props.dispatch({
                            type: It
                        });
                    default:
                        a.props.dispatch({
                            type: kt
                        })
                    }
                }
                ;
                var r = e.t;
                return window.t = r,
                a
            }
            return (0,
            c.Z)(n, [{
                key: "componentDidMount",
                value: function() {
                    Vl(Hl.CatchError, this.errorHandler),
                    this.props.dispatch({
                        type: S
                    }),
                    this.props.dispatch({
                        type: I
                    })
                }
            }, {
                key: "componentDidCatch",
                value: function(e, t) {
                    Vv({
                        error: e,
                        errorType: ut.unCatchedError,
                        key: "render",
                        msg: t.componentStack
                    }),
                    this.props.dispatch({
                        type: kt
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.showErrorPage
                      , n = e.errorType
                      , a = e.dispatch
                      , r = e.checkedUserLicenseType
                      , o = e.flighting
                      , i = e.clientRequestId;
                    if (!r && !o.FIRST_PAINT_OPT_IWP)
                        return null;
                    var c = !(!t || !n);
                    if (!o.FIRST_PAINT_OPT_IWP && n === ut.NoDevicesError && this.props.account.isDSS && (qt(this.props.account) || Kt(this.props.account)) && (c = !1),
                    c) {
                        var s, l, u = _o(n);
                        return Vv({
                            error: new Error(n),
                            errorType: n,
                            key: u.title,
                            msg: u.info
                        }),
                        No.createElement("div", {
                            className: "errorpage",
                            style: (null === (s = this.props.errorPageContainerConfig) || void 0 === s ? void 0 : s.errorPageStyle) || {},
                            role: "main"
                        }, No.createElement(Zl, {
                            data: u,
                            dispatch: a,
                            clientRequestId: i,
                            style: (null === (l = this.props.errorPageContainerConfig) || void 0 === l ? void 0 : l.errorMessageStyle) || {}
                        }))
                    }
                    return this.props.children
                }
            }]),
            n
        }(No.Component), nu = eu(zl()(tu));
        !function(e) {
            e.Smile = "Smile",
            e.Frown = "Frown",
            e.Idea = "Idea"
        }(Yl || (Yl = {})),
        function(e) {
            e.Undefined = "Undefined",
            e.MinorWithoutParentalConsent = "MinorWithoutParentalConsent",
            e.MinorWithParentalConsent = "MinorWithParentalConsent",
            e.NotAdult = "NotAdult",
            e.Adult = "Adult",
            e.MinorNoParentalConsentRequired = "MinorNoParentalConsentRequired"
        }(ql || (ql = {})),
        function(e) {
            e.MSA = "MSA",
            e.AAD = "AAD",
            e.Unauthenticated = "Unauthenticated"
        }(Kl || (Kl = {})),
        function(e) {
            e.Enabled = "Enabled",
            e.Disabled = "Disabled",
            e.NotConfigured = "Not Configured"
        }(jl || (jl = {})),
        function(e) {
            e.JPEG = "jpeg",
            e.PNG = "png"
        }(Xl || (Xl = {})),
        function(e) {
            e.AutoCapture = "AutoCapture",
            e.ProvidedAtInitialization = "ProvidedAtInitialization",
            e.DynamicallyProvided = "DynamicallyProvided"
        }($l || ($l = {})),
        function(e) {
            e.SidePane = "SidePane",
            e.Modal = "Modal",
            e.NoSurface = "NoSurface",
            e.CallOut = "CallOut"
        }(Ql || (Ql = {})),
        function(e) {
            e.Windows = "Windows",
            e.iOS = "iOS",
            e.Android = "Android",
            e.WacTaskPane = "WacTaskPane",
            e.MacOS = "MacOS",
            e.Web = "Web"
        }(Jl || (Jl = {}));
        var au = a(5856)
          , ru = a(4017)
          , ou = {
            policyAllowFeedback: !0,
            policyAllowSurvey: !0,
            connectedExperiences: !0
        };
        function iu(e) {
            var t, n, a;
            return su(null === e || void 0 === e || null === (t = e.data) || void 0 === t || null === (n = t.value) || void 0 === n || null === (a = n[0]) || void 0 === a ? void 0 : a.policiesPayload)
        }
        function cu(e) {
            var t, n, a, r = ou;
            "noContent" !== e.data && (r = su(null === (t = e.data) || void 0 === t || null === (n = t.value) || void 0 === n || null === (a = n[0]) || void 0 === a ? void 0 : a.policiesPayload));
            return r
        }
        function su() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
              , t = ou;
            return e.forEach((function(e) {
                "common\\feedback" === e.key && "Web" === e.platform && ("office16;L_SendFeedback" === e.settingId ? t.policyAllowFeedback = "1" === e.value : "office16;L_SendSurvey" === e.settingId ? t.policyAllowSurvey = "1" === e.value : "office16;L_Screenshot" === e.settingId ? t.policyAllowScreenshot = "1" === e.value : "office16;L_EmailCollection" === e.settingId ? t.policyAllowContact = "1" === e.value : "office16;L_LogCollection" === e.settingId ? t.policyAllowContent = "1" === e.value : -1 !== e.settingId.indexOf("L_ConnectedOfficeExperiences") && (t.connectedExperiences = "1" === e.value))
            }
            )),
            t
        }
        function lu(e) {
            return !0 === e ? jl.Enabled : !1 === e ? jl.Disabled : jl.NotConfigured
        }
        function uu(e, t, n) {
            return t ? e.reduce((function(e, t) {
                var a = t.servicePlanId
                  , r = n[a];
                return r && e.push(r.servicePlanName),
                e
            }
            ), []).join(";") : ""
        }
        var du = "AppUsageTime"
          , pu = "AppResume"
          , mu = 2567
          , fu = "/static/js/officebrowserfeedback_floodgate.js?v=" + userInfo.version
          , vu = "https://feedbackportal.microsoft.com/feedback/mycontent/";
        function Eu(e) {
            console.log("isFeedbackSent : ", e)
        }
        function gu(e) {
            console.log("error in sending feedback : ", e)
        }
        function hu(e) {
            console.log("clientFeedbackId : ", e)
        }
        var bu = nn(tn(window.atob(en(" ai_session"))))
          , wu = {
            adminInfo: qt(userInfo) ? "is admin" : "isn't admin",
            buildVersion: userInfo.version,
            surveyLanguage: userInfo.translation
        }
          , yu = function(e) {
            var t = xr(e) ? Dt : Lt;
            return {
                baseTheme: xr(e) ? ru.R.WindowsDark : ru.R.WindowsLight,
                colorScheme: (0,
                au.j)(t)
            }
        };
        function _u(e, t, n, a, r, o) {
            return {
                appId: t ? mu : 50053,
                clientName: Mo,
                authenticationType: Kl.AAD,
                ageGroup: ql.Adult,
                callbackFunctions: {
                    onDismiss: Eu,
                    onSuccess: hu,
                    onError: gu
                },
                isProduction: t,
                feedbackConfig: {
                    appData: JSON.stringify(wu),
                    email: userInfo.email,
                    feedbackUiType: Ql.Modal,
                    isDisplayed: !1,
                    isEmailCollectionEnabled: !0,
                    myFeedbackUrl: vu,
                    isMyFeedbackEnabled: !0,
                    isScreenshotEnabled: !0,
                    isScreenRecordingEnabled: !0,
                    isFileUploadEnabled: !0,
                    retentionDurationDays: 30,
                    complianceChecks: {
                        connectedExperiences: lu(null === o || void 0 === o ? void 0 : o.connectedExperiences),
                        policyAllowFeedback: lu(null === o || void 0 === o ? void 0 : o.policyAllowFeedback),
                        policyAllowSurvey: lu(null === o || void 0 === o ? void 0 : o.policyAllowFeedback),
                        policyAllowScreenshot: lu(null === o || void 0 === o ? void 0 : o.policyAllowScreenshot),
                        policyAllowContact: lu(null === o || void 0 === o ? void 0 : o.policyAllowContact),
                        policyAllowContent: lu(null === o || void 0 === o ? void 0 : o.policyAllowContent)
                    }
                },
                telemetry: {
                    audienceGroup: Jt(userInfo),
                    channel: "CC",
                    processSessionId: bu,
                    sourceContext: "Soruce",
                    sku: uu(n, a, r)
                },
                userId: "a:" + userInfo.uid,
                tenantId: userInfo.tid,
                themeOptions: yu(e)
            }
        }
        var Cu = {
            appId: mu,
            feedbackConfig: {
                feedbackUiType: Ql.Modal,
                complianceChecks: {
                    connectedExperiences: jl.Enabled,
                    policyAllowFeedback: jl.Enabled,
                    policyAllowSurvey: jl.Enabled,
                    policyAllowScreenshot: jl.Disabled,
                    policyAllowContact: jl.Disabled,
                    policyAllowContent: jl.Disabled
                }
            },
            ageGroup: ql.Adult,
            authenticationType: Kl.Unauthenticated
        }
          , ku = function() {
            var e = [];
            return {
                register: function(t) {
                    return t && e.push(t),
                    Cu
                },
                unregister: function(t) {
                    var n = e.indexOf(t);
                    n > -1 && e.splice(n, 1)
                },
                updateFeedbackObject: function(t) {
                    Object.assign(Cu, t),
                    e.forEach((function(e) {
                        return e(Cu)
                    }
                    ))
                }
            }
        }()
          , Iu = "START_NPS_ASYNC"
          , Su = "START_FEEDBACK"
          , xu = "INIT_COMPLIANCE_CHECK"
          , Nu = a(1435);
        function Ru(e, t) {
            var n = (0,
            ko.v9)(Tu, ko.wU)
              , a = t ? [n].concat(t) : [n];
            return No.useMemo((function() {
                return e(n)
            }
            ), a)
        }
        function Tu(e) {
            return {
                Flighting: e.EcsConfiguration.FlightingData,
                PreviewFeatures: e.EcsConfiguration.FlightingData.previewFeatures,
                ClientVariant: e.Home.clientVariant
            }
        }
        var Pu, Au = function() {
            function e() {
                (0,
                i.Z)(this, e)
            }
            return (0,
            c.Z)(e, null, [{
                key: "startPerfLogEvent",
                value: function(t) {
                    var n = (new Date).getTime()
                      , a = !1;
                    return {
                        cancelPerfLogEvent: function() {
                            a = !0
                        },
                        endPerfLogEvent: function() {
                            var r = e.TIMER_CANCELED;
                            if (!a) {
                                var o = (new Date).getTime();
                                (function(e, t) {
                                    Nv.isInitialized() && Nv.trackPageViewPerformance({
                                        name: dd(),
                                        uri: e,
                                        perfTotal: "".concat(t)
                                    })
                                }
                                )(t, r = o - n)
                            }
                            return r
                        }
                    }
                }
            }, {
                key: "startPerfLogEventOnce",
                value: function(e) {
                    void 0 == this.onceMap[e] && !1 !== this.onceMap[e] && (this.onceMap[e] = this.startPerfLogEvent(e))
                }
            }, {
                key: "endPerfLogEventOnce",
                value: function(e) {
                    var t = this.onceMap[e];
                    t && (t.endPerfLogEvent(),
                    this.onceMap[e] = !1)
                }
            }]),
            e
        }();
        Au.TIMER_CANCELED = -1,
        Au.onceMap = {},
        function(e) {
            e.HomePageShow = "HomePageShow",
            e.HeaderRender = "HeaderRender"
        }(Pu || (Pu = {}));
        var Du = (0,
        ko.$j)((function(e) {
            return {
                showLoadingPage: e.Home.showLoadingPage,
                enableFeedback: e.EcsConfiguration.FlightingData.Feedback_IWP,
                feedbackInitialized: e.Ocv.iwpFeedbackInitialized,
                feedbackV2Initialized: e.Ocv.iwpFeedbackV2Initialized,
                complianceCheckInitialized: e.Ocv.complianceCheckInitialized,
                complianceCheck: e.Ocv.complianceCheck,
                useProdFeedbackAppId: e.EcsConfiguration.FlightingData.IWP_NPS_EnableProductionAppId,
                useFeedbackV2: e.EcsConfiguration.FlightingData.IWP_Feedback_V2,
                deviceList: e.Device.deviceList,
                deviceListInitialized: e.Device.deviceListInitialized,
                servicePlanMap: e.Device.servicePlanMap,
                enableIWPDarkMode: e.EcsConfiguration.FlightingData.IWP_Enable_Dark_Mode,
                theme: e.Home.theme
            }
        }
        ));
        var Lu = No.memo(Du((function(e) {
            var t = e.showLoadingPage
              , n = e.complianceCheckInitialized
              , a = e.useProdFeedbackAppId
              , r = e.complianceCheck
              , o = e.useFeedbackV2
              , i = e.dispatch
              , c = e.t
              , l = e.deviceList
              , u = e.deviceListInitialized
              , d = e.servicePlanMap
              , p = e.enableIWPDarkMode
              , m = e.theme
              , f = Ru((function(e) {
                return e
            }
            ))
              , v = Ao([Qr])
              , E = v.handleResponse
              , g = v.triggerConsent
              , h = v.handleBrowserAuthError
              , b = (0,
            Nu.Fp)().instance
              , w = (0,
            No.useMemo)((function() {
                return Au.startPerfLogEvent(Pu.HeaderRender)
            }
            ), [])
              , y = function() {
                w.endPerfLogEvent(),
                Hv("shell header rendered successfully")
            }
              , _ = function() {
                Hv("shell header loaded successfully")
            }
              , C = function(e) {
                var t = e.IsDarkMode ? Rt.Dark : Rt.Light;
                Zv({
                    type: "theme change from O365 header",
                    value: t
                }),
                i({
                    type: me,
                    payload: {
                        theme: t
                    }
                }),
                Sr(userInfo, t)
            }
              , k = (0,
            No.useCallback)((function() {
                p ? window.O365Shell.Theme.OnThemeChanged(C, !1) : window.O365Shell.Theme.RemoveOnThemeChanged(C, !1)
            }
            ), [p])
              , I = (0,
            No.useState)(!1)
              , S = (0,
            s.Z)(I, 2)
              , x = S[0]
              , N = S[1]
              , R = (0,
            No.useCallback)((function() {
                e.enableFeedback && (o && e.feedbackV2Initialized || !o && e.feedbackInitialized) && window.O365Shell.Extensibility.AddOrUpdateCustomHeaderButton({
                    affordanceMenuItemText: c("feedback-label"),
                    ariaLabel: c("feedback-label"),
                    iconFontFamily: "FabricMDL2Icons",
                    iconFontName: "\ued15",
                    id: "feedbackbutton",
                    onShow: function() {
                        Zv("Feedback"),
                        o && e.feedbackV2Initialized ? N(!0) : !o && e.feedbackInitialized && window.OfficeBrowserFeedback.multiFeedback()
                    },
                    isStateless: !0
                })
            }
            ), [e.enableFeedback, e.feedbackInitialized, e.feedbackV2Initialized]);
            (0,
            No.useEffect)((function() {
                x ? function(e, t, n, a, r, o) {
                    var i = _u(e, t, n, a, r, o);
                    i.feedbackConfig.feedbackUiType = Ql.SidePane,
                    i.feedbackConfig.isDisplayed = !0,
                    ku.updateFeedbackObject(i)
                }(m, a, l, u, d, r) : function(e, t, n, a, r, o) {
                    var i = _u(e, t, n, a, r, o);
                    i.feedbackConfig.feedbackUiType = Ql.SidePane,
                    i.feedbackConfig.isDisplayed = !1,
                    ku.updateFeedbackObject(i)
                }(m, a, l, u, d, r)
            }
            ), [x, r, d, a, l, u, m]),
            (0,
            No.useEffect)((function() {
                if (window.O365Shell && !t) {
                    var e = Xr()
                      , n = e.isDSS && qt(e) ? {
                        Id: "HelpLink",
                        MenuName: null,
                        SubLinks: null,
                        TargetWindow: "_blank",
                        Text: c("quick-actions-help-title"),
                        Url: "https://admin.microsoft.com/adminportal/home?searchSolutions=cloud PC"
                    } : null;
                    try {
                        window.O365Shell.RenderAsync({
                            top: "o365-header",
                            isThinHeader: !0,
                            disableHelpSearch: !0,
                            workloadHelpSubLinks: [],
                            darkAccent: p ? xr(m) ? "#60cdff" : "#0078d4" : void 0,
                            initialRenderData: {
                                IsConsumer: !1,
                                Culture: e.language,
                                WorkloadId: "CloudPC",
                                UserDisplayName: e.name,
                                UPN: e.email,
                                ShellBootHost: "https://shellprod.msocdn.com",
                                IsThirdParty: !1,
                                Language: e.language,
                                UserID: e.sid
                            },
                            shellDataOverrides: {
                                HelpPaneDisabled: !n,
                                HelpLink: n,
                                FeedbackLink: null,
                                CommunityLink: null,
                                SignOutLink: no() ? null : {
                                    id: "signout",
                                    Text: "Sign out",
                                    Url: "/home/signout"
                                }
                            }
                        }, y, _)
                    } catch (r) {
                        Vv({
                            error: r,
                            errorType: ut.HeaderError,
                            key: "O365Shell.RenderAsync",
                            msg: "O365 shell rendering falied"
                        })
                    }
                    window.O365Shell.OnSignOut((function() {
                        no() ? b.logoutRedirect() : window.location.href = "/home/signout"
                    }
                    )),
                    function() {
                        a.apply(this, arguments)
                    }()
                }
                function a() {
                    return (a = (0,
                    jn.Z)(Kn().mark((function e() {
                        var t, n, a, r;
                        return Kn().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (!no()) {
                                        e.next = 12;
                                        break
                                    }
                                    return e.next = 3,
                                    Oo({
                                        scopes: [Qr]
                                    });
                                case 3:
                                    if (!((n = e.sent)instanceof xo.U && f.Flighting.MFA_IWP)) {
                                        e.next = 7;
                                        break
                                    }
                                    return h(n),
                                    e.abrupt("return");
                                case 7:
                                    if (t = null === n || void 0 === n ? void 0 : n.accessToken) {
                                        e.next = 12;
                                        break
                                    }
                                    return console.error("o365 Access token is empty"),
                                    n instanceof Error && Gv("Unkown error when get o365 access token."),
                                    e.abrupt("return");
                                case 12:
                                    return a = Xr(),
                                    e.next = 15,
                                    Oi(t, a.language);
                                case 15:
                                    (r = e.sent) && r.success && "object" === (0,
                                    Ee.Z)(r.data) ? (window.O365Shell.SetData(r.data),
                                    R(),
                                    k()) : f.Flighting.MFA_IWP && E(r);
                                case 17:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))).apply(this, arguments)
                }
            }
            ), [t, R, k]);
            var T = (0,
            No.useRef)(null);
            return (0,
            No.useEffect)((function() {
                n && i({
                    type: Su,
                    payload: {
                        entry: T.current
                    }
                })
            }
            ), [n]),
            (0,
            No.useEffect)((function() {
                var e = function(e) {
                    var t;
                    x && !(null === (t = T.current) || void 0 === t ? void 0 : t.contains(e.target)) && N(!1)
                };
                return x && document.addEventListener("click", e),
                function() {
                    document.removeEventListener("click", e)
                }
            }
            ), [x, T]),
            (0,
            No.useEffect)((function() {
                var e = 0
                  , t = setInterval((function() {
                    if (e > 10)
                        clearInterval(t);
                    else {
                        var n = document.getElementById("CenterRegion");
                        if (n) {
                            var a = "calc(100% - 96px)";
                            n.style.width === a ? clearInterval(t) : n.style.width = a
                        }
                        e++
                    }
                }
                ), 2e3);
                return function() {
                    return clearInterval(t)
                }
            }
            )),
            No.createElement(No.Fragment, null, No.createElement("header", {
                id: "o365-header",
                className: "o365-header",
                onClick: function() {
                    f.Flighting.MFA_IWP && g(function() {
                        var e = (0,
                        jn.Z)(Kn().mark((function e(t, n) {
                            var a, r;
                            return Kn().wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return a = Xr(),
                                        e.next = 3,
                                        Oi(t, a.language);
                                    case 3:
                                        (r = e.sent) && r.success && "object" === (0,
                                        Ee.Z)(r.data) && (window.O365Shell.SetData(r.data),
                                        R(),
                                        k(),
                                        n());
                                    case 5:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e)
                        }
                        )));
                        return function(t, n) {
                            return e.apply(this, arguments)
                        }
                    }())
                }
            }), n && No.createElement("div", {
                ref: T
            }))
        }
        )))
          , Ou = function(e) {
            var t = e.key;
            return "Enter" === t || " " === t
        }
          , Fu = {
            root: {
                display: "inline-block",
                position: "absolute",
                width: 25,
                height: 25,
                top: 0,
                right: 0
            }
        }
          , Mu = a(8350)
          , Uu = a(5471)
          , Zu = a(9038)
          , Hu = (0,
        ko.$j)()((function(e) {
            var n = e.dispatch
              , a = e.item
              , r = e.isVisible
              , o = (0,
            Mu.M)("cancelTooltip")
              , i = function() {
                n({
                    type: oe,
                    payload: {
                        actionContentType: a.contentType
                    }
                })
            };
            return !Pn(a.contentType) ? No.createElement(Uu.G, {
                content: t("remove"),
                id: o,
                styles: Fu
            }, No.createElement(Zu.h, {
                iconProps: {
                    iconName: "Cancel"
                },
                "aria-roledescription": t("remove-button"),
                className: m()("normal-icon-button", "action-card-more-operation-cancel"),
                ariaLabel: t("remove-the-action-card"),
                onClick: function(e) {
                    e.stopPropagation(),
                    i()
                },
                onKeyDown: function(e) {
                    e.stopPropagation(),
                    Ou(e) && i()
                },
                tabIndex: r ? 0 : -1
            })) : null
        }
        ));
        Hu.displayName = "MoreOperationButton";
        var Bu = Hu
          , Wu = a(2949)
          , Vu = {
            hideHeader: !1,
            hideLeftNavigation: !1,
            hideActionCardIcon: !1,
            hideDSSAdmin: !1,
            quickActionsHeaderClassName: "",
            quickActionsLabelClassName: "",
            quickActionsWrapperClassName: "",
            actionCardClassName: "",
            actionCardBannerClassName: "",
            actionCardTitleClassName: "",
            actionCardDescClassName: "",
            deviceListLabelClassName: "",
            deviceListClassName: "",
            customDialogs: []
        }
          , Gu = new u.SyncWaterfallHook(["homePageConfig"])
          , zu = function() {
            return (0,
            No.useMemo)((function() {
                return Gu.call(Vu)
            }
            ), [])
        }
          , Yu = (0,
        ko.$j)((function() {
            return {}
        }
        ))((function(e) {
            var n = e.item
              , a = e.isVisible
              , r = e.dispatch
              , o = n.title
              , i = n.desc
              , c = n.icon
              , s = n.action
              , l = zu()
              , u = function() {
                s(r)()
            }
              , d = t("quick-actions-title") + ": ".concat(o, ", ").concat(i);
            return No.createElement("div", {
                className: m()("action-card", l.actionCardClassName),
                onClick: u,
                onKeyDown: function(e) {
                    Ou(e) && u()
                },
                "aria-label": d,
                role: "application",
                "aria-roledescription": t("button"),
                tabIndex: a ? 0 : -1
            }, No.createElement("div", {
                className: m()("action-banner", l.actionCardBannerClassName ? l.actionCardBannerClassName : "action-bannel-color")
            }), l.hideActionCardIcon ? No.createElement("div", {
                className: "w-7"
            }) : No.createElement(Wu.Q, {
                className: "action-icon",
                src: "/img/action/action_".concat(c, ".svg"),
                "aria-hidden": "true"
            }), No.createElement("div", {
                className: "action-content"
            }, No.createElement(Ml._, {
                className: m()("action-title", l.actionCardTitleClassName),
                title: o
            }, o), No.createElement(Ml._, {
                className: m()("action-desc", l.actionCardDescClassName),
                title: i
            }, i)), No.createElement(Bu, {
                item: n,
                isVisible: a
            }))
        }
        ));
        var qu = a(1578);
        var Ku = (0,
        ko.$j)((function(e) {
            var t;
            return {
                deviceList: e.Device.deviceList,
                userInfo: e.Home.userInfo,
                thirdPartyPartnerPlugin: null === (t = e.ThirdPartyPartner) || void 0 === t ? void 0 : t.plugin,
                ExperimentData: e.EcsConfiguration.ExperimentData,
                expFinished: e.EcsConfiguration.expFinished
            }
        }
        ))((function(e) {
            var n = e.deviceList
              , a = e.userInfo
              , r = e.thirdPartyPartnerPlugin
              , o = e.ExperimentData
              , i = e.expFinished
              , c = Ru((function(e) {
                var t = e.Flighting;
                return {
                    actionList: Nn(a, n, t, o, i)
                }
            }
            ), [n, o, i])
              , l = zu()
              , u = c.actionList;
            (null === r || void 0 === r ? void 0 : r.actionListModifier) && (u = u.map(r.actionListModifier)),
            l.actionListFilter && (u = u.filter(l.actionListFilter));
            var d = (u = (0,
            ko.v9)(function(e) {
                return function(t) {
                    return e.filter((function(e) {
                        return (t.Home.dismissedQuickActions[$t("".concat(t.Home.userInfo.uid))] || []).indexOf(e.contentType) < 0
                    }
                    ))
                }
            }(u))).length
              , p = function(e) {
                var t = No.useState({
                    width: window.document.body.offsetWidth,
                    height: window.document.body.offsetHeight
                })
                  , n = (0,
                s.Z)(t, 2)
                  , a = n[0]
                  , r = n[1];
                return No.useEffect((function() {
                    var t = !0
                      , n = jt((function() {
                        t && r({
                            width: window.document.body.offsetWidth,
                            height: window.document.body.offsetHeight
                        })
                    }
                    ), e);
                    return window.addEventListener("resize", n),
                    setTimeout((function() {
                        n()
                    }
                    ), 4e3),
                    function() {
                        window.removeEventListener("resize", n),
                        t = !1
                    }
                }
                ), []),
                a
            }(500).width
              , f = p < 375 ? p - 68 - 48 + 24 : 266
              , v = function(e, t, n) {
                return e > 952 ? Math.min(3, n) : e - 136 < 2 * t ? 1 : Math.floor((e - 136 - 100) / t)
            }(p, f, d)
              , E = v < d
              , g = (0,
            No.useState)(0)
              , h = (0,
            s.Z)(g, 2)
              , b = h[0]
              , w = h[1]
              , y = (0,
            No.useState)(0)
              , _ = (0,
            s.Z)(y, 2)
              , C = _[0]
              , k = _[1];
            return E || 0 === b ? C * f != Math.abs(b) && w(-C * f) : (w(0),
            k(0)),
            0 === u.length ? null : No.createElement(qu.K, {
                className: m()("quick-actions-wrapper", l.quickActionsWrapperClassName)
            }, No.createElement(qu.K, {
                horizontal: !0,
                className: m()("quick-actions-header", l.quickActionsHeaderClassName)
            }, No.createElement("h2", null, No.createElement(Ml._, {
                className: m()("quick-actions-label", l.quickActionsLabelClassName),
                "aria-label": t("quick-actions-title")
            }, t("quick-actions-title"))), E ? No.createElement("div", {
                className: "action-swiper-container"
            }, No.createElement(Zu.h, {
                className: "normal-icon-button action-swiper-arrow arrow-left",
                id: "button-arrow-left",
                title: t("left"),
                ariaLabel: t("left"),
                disabled: 0 === C,
                onClick: function() {
                    k(C - 1),
                    w(b + f)
                },
                iconProps: {
                    iconName: "ChevronLeft"
                }
            }), No.createElement(Zu.h, {
                className: "normal-icon-button action-swiper-arrow arrow-right",
                id: "button-arrow-right",
                title: t("right"),
                ariaLabel: t("right"),
                disabled: v + C >= d,
                onClick: function() {
                    k(C + 1),
                    w(b - f)
                },
                iconProps: {
                    iconName: "ChevronRight"
                }
            })) : null), No.createElement("div", {
                className: "quick-actions-container"
            }, No.createElement("div", {
                className: "quick-actions-list",
                style: {
                    left: "".concat(b, "px")
                }
            }, u.map((function(e, t) {
                var n = t >= C && t < v + C;
                return No.createElement(Yu, {
                    item: e,
                    key: e.title,
                    isVisible: n
                })
            }
            ))), p > 492 ? No.createElement("div", {
                className: "quick-actions-mask"
            }) : null))
        }
        ));
        function ju(e) {
            var n = e.findIndex((function(e) {
                return Xc(e)
            }
            ))
              , a = "workspace0";
            if (n >= 0) {
                var r = e[n];
                a = "frontline-indicator-".concat(r.deviceId)
            } else
                n = 0;
            return [{
                target: "#".concat(a),
                directionalHint: v.b.leftCenter,
                bubbleTitle: t("workspace-flw-bubble-title1"),
                bubbleText: t("workspace-flw-bubble-text1"),
                minPagePadding: 48,
                hasCloseButton: !1
            }, {
                target: "#connectButton".concat(n),
                directionalHint: v.b.bottomCenter,
                bubbleTitle: t("workspace-flw-bubble-title2"),
                bubbleText: t("workspace-flw-bubble-text2"),
                hasCloseButton: !1
            }, {
                target: "#moreOperationButton".concat(n),
                directionalHint: v.b.rightCenter,
                bubbleTitle: t("workspace-flw-bubble-title3"),
                bubbleText: t("workspace-flw-bubble-text3"),
                hasCloseButton: !0
            }]
        }
        var Xu, $u = a(1765), Qu = a(1097), Ju = (0,
        ko.$j)((function(e) {
            return {
                show: e.Home.showWorkspaceBubble,
                freType: e.Home.freType,
                devices: e.Device.deviceList,
                theme: e.Home.theme
            }
        }
        ))((function(e) {
            var n = e.dispatch
              , a = e.show
              , o = e.freType
              , i = e.devices
              , c = e.theme;
            if (!a)
                return null;
            var l = (0,
            No.useState)(1)
              , u = (0,
            s.Z)(l, 2)
              , d = u[0]
              , p = u[1]
              , m = function() {
                return n({
                    type: F
                })
            }
              , E = {
                id: "button-next",
                text: t("next"),
                ariaLabel: t("next"),
                onClick: function() {
                    return p(d + 1)
                },
                className: "bubble-primaryButton"
            }
              , g = {
                id: "button-done",
                text: t("got-it"),
                ariaLabel: t("got-it"),
                onClick: m,
                className: "bubble-primaryButton"
            }
              , h = {
                id: "button-previous",
                text: t("previous"),
                ariaLabel: t("previous"),
                onClick: function() {
                    return p(d - 1)
                },
                className: "bubble-secondaryButton"
            }
              , b = (0,
            No.useMemo)((function() {
                var e;
                return (e = {},
                (0,
                f.Z)(e, r.Default, (function() {
                    return [{
                        target: "#workspace0",
                        directionalHint: v.b.leftCenter,
                        bubbleTitle: t("workspace-bubble-title"),
                        bubbleText: t("workspace-bubble-text"),
                        minPagePadding: 48,
                        hasCloseButton: !1,
                        ariaLabel: "".concat(t("workspace-bubble-title"), ". ").concat(t("workspace-bubble-text"), ". ").concat(t("page-index", {
                            current: 1,
                            total: 3
                        })),
                        ariaLabelInit: "".concat(t("workspace-bubble-text"), ". ").concat(t("page-index", {
                            current: 1,
                            total: 3
                        }))
                    }, {
                        target: "#connectButton0",
                        directionalHint: v.b.bottomCenter,
                        bubbleTitle: t("workspace-secondBubble-title"),
                        bubbleText: t("workspace-secondBubble-text"),
                        hasCloseButton: !1,
                        ariaLabel: "".concat(t("workspace-secondBubble-title"), ". ").concat(t("workspace-secondBubble-text"), ". ").concat(t("page-index", {
                            current: 2,
                            total: 3
                        }))
                    }, {
                        target: "#moreOperationButton0",
                        directionalHint: v.b.rightCenter,
                        bubbleTitle: t("workspace-thirdBubble-title"),
                        bubbleText: t("workspace-thirdBubble-text"),
                        hasCloseButton: !0,
                        ariaLabel: "".concat(t("workspace-thirdBubble-title"), ". ").concat(t("workspace-thirdBubble-text"), ". ").concat(t("page-index", {
                            current: 3,
                            total: 3
                        }))
                    }]
                }
                )),
                (0,
                f.Z)(e, r.FLEX, (function() {
                    return ju(i)
                }
                )),
                (0,
                f.Z)(e, r.FLEX | r.Default, (function() {
                    return ju(i)
                }
                )),
                e)[o]()
            }
            ), [i, o])
              , w = b[d - 1]
              , y = function() {
                return No.createElement($u.l, {
                    key: d,
                    target: w.target,
                    calloutProps: {
                        directionalHint: w.directionalHint,
                        minPagePadding: w.minPagePadding,
                        className: "bubble-callout"
                    },
                    primaryButtonProps: d < b.length ? E : g,
                    secondaryButtonProps: d > 1 ? h : void 0,
                    onDismiss: m,
                    headline: w.bubbleTitle,
                    hasCloseButton: w.hasCloseButton,
                    closeButtonAriaLabel: t("close")
                }, w.bubbleText, No.createElement("div", {
                    className: "bubble-index"
                }, t("page-index", {
                    current: d,
                    total: 3
                })))
            };
            return xr(c) ? No.createElement(Qu.f, {
                theme: {
                    palette: {
                        themePrimary: "rgba(40,40,40,1)"
                    }
                }
            }, No.createElement(y, null)) : No.createElement(y, null)
        }
        )), ed = function() {
            return d.call() || No.createElement(Ju, null)
        }, td = a(5602), nd = function(e, n, a, r) {
            return {
                item: {
                    id: "button-restart",
                    key: "restart",
                    className: n,
                    text: t("restart"),
                    iconProps: {
                        iconName: "Refresh"
                    },
                    disabled: !!e.operationDisabled || !!e.operationDisabledConnectEnabled,
                    onClick: function() {
                        Zv("open restart panel"),
                        ss(e, fc.Restart, a)()
                    }
                },
                isShown: Xc(e) ? r.IWP_FLW_EnableRestart && Gc(e) : Wc(e) ? !r.IWP_Fidalgo || r.IWPEnableRestart : !Vc(e) || !r.IWP_Power_Automate || r.IWP_Power_Automate_EnableRestart
            }
        }, ad = function(e, n, a, r) {
            return {
                item: {
                    id: "button-reset",
                    key: "reset",
                    text: t("reset-button-text"),
                    onRenderIcon: function() {
                        return No.createElement(Wu.Q, {
                            className: "svg-icon",
                            src: "/img/reset.svg",
                            "aria-hidden": "true"
                        })
                    },
                    disabled: function() {
                        var t = !!e.operationDisabled || !!e.operationDisabledConnectEnabled;
                        return Uc(e) ? (function(e) {
                            return e.ongoingActionType == fc.Reset
                        }(e) || !!function(e) {
                            return e.ongoingActionType === vc.PlaceUnderReview
                        }(e)) && t : t
                    }(),
                    onClick: function() {
                        Zv("open reset panel"),
                        ss(e, fc.Reset, a)()
                    },
                    className: m()("reset-button", n)
                },
                isShown: !Bc(e)
            }
        }, rd = function(e, n, a, r, o) {
            return {
                item: {
                    id: "button-restore",
                    key: "restore",
                    className: n,
                    text: o.IWP_PiT_Remove_Preview ? t("restore-dialog-restore") : t("restore-button-text"),
                    iconProps: {
                        iconName: "History"
                    },
                    disabled: !!e.operationDisabled || !!e.operationDisabledConnectEnabled,
                    onClick: function() {
                        Zv("open restore panel"),
                        ss(e, fc.Restore, a)()
                    }
                },
                isShown: !(Bc(e) && !r) && (Xc(e) ? o.IWP_FLW_EnableRestore && Gc(e) : Wc(e) ? !o.IWP_Fidalgo || o.IWPEnableRestore : !Vc(e) || !o.IWP_Power_Automate || o.IWP_Power_Automate_EnableRestore)
            }
        }, od = function(e, n, a, r) {
            return {
                item: {
                    id: "button-rename",
                    key: "rename",
                    className: n,
                    text: t("rename-button-text"),
                    iconProps: {
                        iconName: "Rename"
                    },
                    disabled: !!e.operationDisabled || !!e.operationDisabledConnectEnabled,
                    onClick: function() {
                        Zv("open rename panel"),
                        ss(e, fc.Rename, a)()
                    }
                },
                isShown: Xc(e) ? r.IWP_FLW_EnableRename && function(e) {
                    return (null === e || void 0 === e ? void 0 : e.flwAvailability) === Sc.Available
                }(e) : Wc(e) ? !r.IWP_Fidalgo || r.IWPEnableRename : !Vc(e) || !r.IWP_Power_Automate || r.IWP_Power_Automate_EnableRename
            }
        }, id = function(e, n, a, r) {
            return {
                item: {
                    id: "button-diagnose",
                    key: "diagnose",
                    className: n,
                    text: t("diagnostic-button-text"),
                    iconProps: {
                        iconName: "NetworkTower"
                    },
                    ariaLabel: t("diagnostic-button-text"),
                    disabled: !!e.operationDisabled || !!e.diagnoseDisabled || !!e.operationDisabledConnectEnabled,
                    onClick: function() {
                        Zv("open troubleshoot panel"),
                        ss(e, fc.Diagnose, a)()
                    }
                },
                isShown: Xc(e) ? r.IWP_FLW_EnableTroubleshoot && Gc(e) : Wc(e) ? !r.IWP_Fidalgo || r.IWPEnableTroubleshoot : !Vc(e) || !r.IWP_Power_Automate || r.IWP_Power_Automate_EnableTroubleshoot
            }
        }, cd = function(e, n, a) {
            return {
                item: {
                    id: "button-systemInformation",
                    key: "systemInformation",
                    className: n,
                    text: t("system-information-button-text"),
                    iconProps: {
                        iconName: "Info"
                    },
                    ariaLabel: t("system-information-button-text"),
                    disabled: !1,
                    onClick: function() {
                        Zv("open system information panel"),
                        ss(e, fc.SystemInformation, a)()
                    }
                },
                isShown: !0
            }
        }, sd = function(e, t, n, a, r) {
            return [nd(n, r = r || "", a, t), ad(n, r, a), rd(n, r, a, e, t), od(n, r, a, t), id(n, r, a, t), cd(n, r, a)].filter((function(e) {
                return e.isShown
            }
            )).map((function(e) {
                return e.item
            }
            ))
        }, ld = new u.SyncBailHook(["t", "device", "nativeClientData", "dispatch"]), ud = (0,
        ko.$j)((function(e) {
            return {
                userRestoreEnabled: e.Home.userInfo.userRestoreEnabled
            }
        }
        ))((function(e) {
            var n = e.device
              , a = e.index
              , r = e.userRestoreEnabled
              , o = e.dispatch
              , i = es()
              , c = function(e, t, n) {
                var a = (0,
                ko.v9)(Zr, ko.wU);
                return ld.call(e, t, a, n)
            }(t, n, o)
              , s = Ru((function(e) {
                var a = e.Flighting
                  , s = {
                    className: "device-more-operation-menu",
                    directionalHint: v.b.bottomLeftEdge,
                    items: sd(r, a, n, o, i.operationMenuItemClass),
                    ariaLabel: t("remote-action-list"),
                    isBeakVisible: !1
                };
                return s = i.getOperationMenuProp(s),
                c && (s.items = s.items.concat(c.getMenuListItems(i.operationMenuItemClass))),
                s
            }
            ), [n, i, c, o, r])
              , l = i.moreIconProp || {
                iconName: "MoreVertical"
            };
            return s.items.length > 0 ? No.createElement(Qu.f, {
                theme: i.operationMenuTheme
            }, No.createElement(Uu.G, {
                content: t("manage-this-cloud-pc")
            }, No.createElement(Zu.h, {
                className: m()("normal-icon-button", "more-operation"),
                menuIconProps: l,
                styles: {
                    root: {
                        height: "44px",
                        width: "44px"
                    }
                },
                "aria-roledescription": t("menu-button"),
                menuProps: s,
                ariaLabel: t("more-operation"),
                id: qc(a),
                onMenuClick: function() {
                    null === c || void 0 === c || c.IsDevicePinned()
                }
            }))) : null
        }
        ));
        function dd() {
            var e = "CloudPC_IWP_";
            switch (Ev()) {
            case At.Seahawk:
                return "CloudPC_ConnectionCenter_WindowsClient";
            case At.MainPage:
                return "".concat(e, "Index");
            case At.Windows365WebClientPage:
                return "".concat(e, "Windows365WebClient");
            default:
                return "".concat(e, "Unknown")
            }
        }
        !function(e) {
            e.Enterprise = "Enterprise",
            e.Vsb = "Vsb",
            e.Frontline = "Frontline",
            e.Fidalgo = "Fidalgo",
            e.PowerAutomate = "PowerAutomate"
        }(Xu || (Xu = {}));
        var pd = [[function(e) {
            return Bc(e)
        }
        , Xu.Enterprise], [function(e) {
            return function(e) {
                return "vsb" === e.servicePlanType
            }(e)
        }
        , Xu.Vsb], [function(e) {
            return Xc(e)
        }
        , Xu.Frontline], [function(e) {
            return Wc(e)
        }
        , Xu.Fidalgo], [function(e) {
            return Vc(e)
        }
        , Xu.PowerAutomate]];
        function md(e) {
            var t = [];
            return pd.forEach((function(n) {
                var a = (0,
                s.Z)(n, 2)
                  , r = a[0]
                  , o = a[1];
                r(e) && t.push(o)
            }
            )),
            t
        }
        var fd = a(8891)
          , vd = function() {
            var e = userInfo.env;
            return e === at.INT || "development" === e.toLocaleLowerCase() ? "6b87b23699224746baee28d796a420d5-65fe6319-8be4-4723-ba02-1e9f48f82cee-7660" : "218df62cd60f40068192f09545778faf-551a1c71-95fe-4518-a6ef-eb85c76d2dfd-7238"
        }
          , Ed = new fd.K
          , gd = function() {
            if (!Xt(userInfo) && gv()) {
                var e = {
                    instrumentationKey: vd(),
                    channelConfiguration: {
                        eventsLimitInMem: 5e3
                    },
                    propertyConfiguration: {
                        populateBrowserInfo: !0,
                        populateOperatingSystemInfo: !0,
                        enableApplicationInsightsUser: !0
                    },
                    webAnalyticsConfiguration: {
                        autoCapture: {
                            scroll: !1,
                            pageView: !1,
                            onLoad: !1,
                            onUnload: !1,
                            click: !1,
                            resize: !1,
                            jsError: !1
                        }
                    }
                };
                Ed.initialize(e, [])
            }
        };
        function hd(e, t, n, a) {
            Ed.isInitialized() && Ed.trackEvent({
                name: "iwp_exp_telemetry",
                data: {
                    randomization_unit_id: _n(),
                    assignment_context: a || "",
                    event_id: Vt(),
                    event_type: n,
                    session_id: _n(),
                    impression_id: (Cn || (Cn = Vt()),
                    Cn),
                    env: userInfo.env.toLowerCase(),
                    sign_in: !!userInfo.tid,
                    user_action: e,
                    target: t,
                    page_name: dd()
                }
            })
        }
        var bd = function() {
            var e = vv().EcsConfiguration;
            return !!e.FlightingData.IWP_Enable_Experiment && !!e.expFinished
        }
          , wd = function() {
            return vv().EcsConfiguration.ExperimentData.configIDs
        };
        function yd(e) {
            bd() && hd(rn.Click.toString(), e, an.PageAction.toString(), wd())
        }
        var _d = new u.SyncBailHook(["device", "index"])
          , Cd = {
            root: {
                height: "32px",
                background: "var(--button-bg-color)",
                border: "1px solid var(--button-border-color)",
                borderRadius: "2px"
            }
        }
          , kd = (0,
        l.Z)({}, Cd)
          , Id = {
            root: (0,
            l.Z)((0,
            l.Z)({}, Cd.root), {}, {
                borderRight: "none",
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0
            })
        }
          , Sd = {
            root: (0,
            l.Z)((0,
            l.Z)({}, Cd.root), {}, {
                borderLeft: "none",
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0
            })
        }
          , xd = a(4372)
          , Nd = a(9834)
          , Rd = a(7840)
          , Td = (0,
        ko.$j)((function(e) {
            return {
                remoteUrl: e.Device.remoteUrl,
                thirdPartyPartnerPlugin: e.ThirdPartyPartner.plugin,
                userInfo: e.Home.userInfo,
                connectingStateMap: e.Device.connectingStateMap,
                flexStateMap: e.Device.flexStateMap,
                enableFLW: e.EcsConfiguration.FlightingData.IWP_NH_FLW
            }
        }
        ))((function(e) {
            var n, a, r = e.device, o = e.index, i = e.remoteUrl, c = e.dispatch, l = e.thirdPartyPartnerPlugin, u = e.userInfo, d = e.connectingStateMap, p = e.enableFLW, f = e.flexStateMap, E = r.operationDisabled, g = void 0 !== E && E, h = r.workspaceName, w = Xc(r), y = w && $c(r), _ = No.useState(void 0), C = (0,
            s.Z)(_, 2), k = C[0], I = C[1], S = No.useState(void 0), x = (0,
            s.Z)(S, 2), N = x[0], R = x[1], T = No.useState(void 0), A = (0,
            s.Z)(T, 2), D = A[0], L = A[1], O = Ru((function(e) {
                var n = e.Flighting
                  , a = e.ClientVariant
                  , o = r.directLaunchURL
                  , c = {
                    connectionTarget: "",
                    openText: "",
                    openAriaLabel: "",
                    openURL: "",
                    openNativeApp: !1,
                    openIcon: {
                        iconName: "OpenInNewTab"
                    }
                };
                return a === b.Teams ? (c.connectionTarget = "_self",
                c.openText = t("open"),
                c.openAriaLabel = t("open-in-browser-aria-label", {
                    workspaceName: h
                })) : (c.connectionTarget = "_blank",
                c.openText = t("open-in-browser"),
                c.openAriaLabel = t("open-in-browser-aria-label", {
                    workspaceName: h
                })),
                a === b.NativeWindows || n.IWP_Use_AVD ? c.openURL = o || i : c.openURL = Zt + r.workspaceId,
                Ht() === yt.Windows && n.OpenInNativeApp_IWP && a !== b.NativeWindows ? c.openNativeApp = !0 : c.openNativeApp = !1,
                !w || n.IWP_Enable_FlexOpenInRDP && !y || (c.openNativeApp = !1),
                null === l || void 0 === l || l.modifyDeviceOpenRemoteButton(r, u, c),
                c
            }
            ), [r, i, l, u]);
            No.useEffect((function() {
                (0,
                rc.fm)({
                    icons: {
                        "Spinner-Icon": No.createElement(xd.$, {
                            size: Nd.E.small
                        })
                    }
                })
            }
            ), []);
            var F = es()
              , M = function(e, t) {
                return _d.call(e, t)
            }(r, o)
              , U = No.useCallback((function() {
                c({
                    type: Be,
                    payload: {
                        selectedDevice: r
                    }
                })
            }
            ), [r]);
            No.useEffect((function() {
                return function() {
                    w && (c({
                        type: De,
                        payload: {
                            workspaceId: r.workspaceId,
                            accessState: void 0
                        }
                    }),
                    c({
                        type: Te,
                        payload: {
                            workspaceId: r.workspaceId
                        }
                    }),
                    [N, D].forEach((function(e) {
                        e && clearInterval(e)
                    }
                    )))
                }
            }
            ), []),
            No.useEffect((function() {
                if (f[r.workspaceId] && k !== f[r.workspaceId].state)
                    if (I(f[r.workspaceId].state),
                    f[r.workspaceId].state === Ic.Active || f[r.workspaceId].state === Ic.Unassigned || f[r.workspaceId].state === Ic.Activating) {
                        Hv("Flex Cloud PC is attempting connection"),
                        F.connectClickHandler ? F.connectClickHandler((null === r || void 0 === r ? void 0 : r.directLaunchURL) || i) : (O.openURL.startsWith(Zt) ? Zv("connect with windows365 web client") : Zv("connect with wvd web client"),
                        M || (window.open(O.openURL, O.connectionTarget),
                        I(void 0))),
                        r.deviceStatus !== _c.Running && c({
                            type: Ke,
                            payload: {
                                workspaceId: r.workspaceId,
                                deviceStateTip: {
                                    type: xc.Ongoing,
                                    message: t("flw-success-message-tip"),
                                    enableClose: void 0,
                                    actionContext: void 0,
                                    actionFrom: Nc.FrontlineConnecting,
                                    actionClick: function(e, t) {}
                                }
                            }
                        });
                        var e = setInterval((function() {
                            c({
                                type: ke,
                                payload: {
                                    workspaceId: r.workspaceId,
                                    interval: e
                                }
                            })
                        }
                        ), 1e4);
                        L(e)
                    } else if (f[r.workspaceId].state === Ic.NoLicensesAvailable) {
                        Hv("Flex Cloud PC has no more licenses available"),
                        c({
                            type: Ke,
                            payload: {
                                workspaceId: r.workspaceId,
                                deviceStateTip: {
                                    type: xc.Error,
                                    message: t("flw-error-message-tip"),
                                    enableClose: void 0,
                                    actionContext: void 0,
                                    actionClick: function(e, t) {}
                                }
                            }
                        }),
                        c({
                            type: Te,
                            payload: {
                                workspaceId: r.workspaceId
                            }
                        }),
                        c({
                            type: xe,
                            payload: r.workspaceId
                        });
                        var n = setInterval((function() {
                            c({
                                type: Ce,
                                payload: {
                                    workspaceId: r.workspaceId,
                                    servicePlan: r.servicePlanId,
                                    interval: n
                                }
                            })
                        }
                        ), 1e4);
                        setTimeout((function() {
                            f[r.workspaceId].state === Ic.NoLicensesAvailable && (clearInterval(n),
                            R(void 0))
                        }
                        ), 18e4),
                        R(n)
                    }
            }
            ), [f[r.workspaceId]]);
            var Z = function() {
                var e = {
                    className: "device-open-remote-menu",
                    items: [],
                    directionalHint: v.b.bottomRightEdge
                };
                return O.openNativeApp && e.items.push({
                    key: "openApp",
                    text: t("open-native-app"),
                    ariaLabel: t("open-native-app"),
                    iconProps: {
                        iconName: "Remote"
                    },
                    onClick: function() {
                        Zv("open in desktop app"),
                        U(),
                        c({
                            type: P
                        }),
                        yd(cn.OpenInDesktopApp)
                    }
                }),
                e
            }()
              , H = F.openIconProp || O.openIcon
              , B = F.openOperationButtonStyle || kd
              , W = F.openDeviceText || O.openText
              , V = F.openDeviceText || O.openAriaLabel;
            return No.createElement("section", {
                className: "open-remote"
            }, M || No.createElement(Rd.a, {
                id: "connectButton".concat(o),
                text: p && w && (null === (n = d[r.workspaceId]) || void 0 === n ? void 0 : n.text) ? null === (a = d[r.workspaceId]) || void 0 === a ? void 0 : a.text : W,
                iconProps: p && w && d[r.workspaceId] ? {
                    iconName: "Spinner-Icon"
                } : H,
                styles: Z.items.length > 0 ? Id : B,
                ariaLabel: V,
                onClick: function() {
                    Mv(r.licenseCategory),
                    Zv("connect"),
                    yd(cn.OpenInBrowser),
                    p && w ? (f[r.workspaceId] && c({
                        type: je,
                        payload: {
                            workspaceId: r.workspaceId
                        }
                    }),
                    I(void 0),
                    c({
                        type: Ce,
                        payload: {
                            workspaceId: r.workspaceId,
                            servicePlan: r.servicePlanId
                        }
                    }),
                    c({
                        type: Re,
                        payload: {
                            workspaceId: r.workspaceId
                        }
                    }),
                    Hv("Requesting a Flex Cloud PC")) : w || (F.connectClickHandler ? F.connectClickHandler((null === r || void 0 === r ? void 0 : r.directLaunchURL) || i) : (O.openURL.startsWith(Zt) ? Zv("connect with windows365 web client") : Zv("connect with wvd web client"),
                    M || window.open(O.openURL, O.connectionTarget)))
                },
                disabled: g
            }), Z.items.length > 0 ? No.createElement(Zu.h, {
                menuIconProps: {
                    iconName: "ChevronDown"
                },
                styles: Sd,
                "aria-roledescription": t("open-native-app"),
                menuProps: Z,
                ariaLabel: t("open-native-app"),
                disabled: g,
                className: m()("open-native-app-more-operation", "normal-icon-button")
            }) : null)
        }
        ))
          , Pd = (0,
        ko.$j)((function(e) {
            return {
                lastLoginMap: e.Device.lastLoginMap,
                thirdPartyPartnerPlugin: e.ThirdPartyPartner.plugin
            }
        }
        ))((function(e) {
            var n, a = e.lastLoginMap, r = e.device, o = e.thirdPartyPartnerPlugin;
            if (null === o || void 0 === o ? void 0 : o.hideLastLogin(r))
                return null;
            var i = null !== (n = function(e) {
                var n, a = null === e || void 0 === e ? void 0 : e.lastLoginTime;
                if (!a)
                    return "";
                var r = (new Date).getTime() - new Date(a).getTime();
                if (isNaN(r))
                    return "";
                return null !== (n = Ad.filter((function(e, t) {
                    return e.base * e.maxValue > r || t === Ad.length - 1
                }
                )).map((function(e) {
                    return t(e.text, {
                        number: Math.max(Math.floor(r / e.base), 1)
                    })
                }
                ))[0]) && void 0 !== n ? n : ""
            }(a[r.deviceId])) && void 0 !== n ? n : "";
            return No.createElement("span", {
                className: "device-lastLoginTip",
                title: i,
                "aria-label": i
            }, i)
        }
        ))
          , Ad = [{
            base: 6e4,
            text: "last-login-minute-tip",
            maxValue: 2
        }, {
            base: 6e4,
            text: "last-login-minutes-tip",
            maxValue: 60
        }, {
            base: 36e5,
            text: "last-login-hour-tip",
            maxValue: 2
        }, {
            base: 36e5,
            text: "last-login-hours-tip",
            maxValue: 24
        }, {
            base: 864e5,
            text: "last-login-day-tip",
            maxValue: 2
        }, {
            base: 864e5,
            text: "last-login-days-tip",
            maxValue: 7
        }, {
            base: 6048e5,
            text: "last-login-week-tip",
            maxValue: 2
        }, {
            base: 6048e5,
            text: "last-login-weeks-tip",
            maxValue: 30 / 7
        }, {
            base: 2592e6,
            text: "last-login-month-tip",
            maxValue: 2
        }, {
            base: 2592e6,
            text: "last-login-months-tip",
            maxValue: 1
        }];
        var Dd, Ld = a(1504), Od = a(5080), Fd = a(4616), Md = (0,
        ko.$j)((function(e) {
            return {
                stateTipsMap: e.Device.stateTipsMap,
                flightingData: e.EcsConfiguration.FlightingData,
                theme: e.Home.theme
            }
        }
        ))((function(e) {
            var n = e.device
              , a = e.servicePlan
              , r = e.stateTipsMap
              , o = e.index
              , i = e.dispatch
              , c = e.flightingData
              , l = e.theme
              , u = es()
              , d = Ru((function(e) {
                var t = e.Flighting
                  , a = xr(l)
                  , r = zc(n)
                  , o = function(e) {
                    return zc(e) === Cc.Windows11
                }(n)
                  , i = {
                    wallpaperPath: "/img/device/wallpaper-win10".concat(a ? "-dark-theme" : "", ".png"),
                    deviceOSIcon: function() {
                        return null
                    },
                    isFidalgo: !1,
                    isPowerAutomate: !1
                };
                if (t.IWP_Fidalgo && Wc(n) ? (i.wallpaperPath = "/img/device/wallpaper-win11-dark.png",
                i.isFidalgo = !0) : t.IWP_Power_Automate && Vc(n) ? (i.wallpaperPath = "/img/device/wallpaper-win11-dark.png",
                i.isPowerAutomate = !0) : o && (i.wallpaperPath = a ? "/img/device/wallpaper-win11-dark-theme.png" : "/img/device/wallpaper-win11.jpg"),
                o || r === Cc.Windows10) {
                    var c = o ? "Windows 11" : "Windows 10";
                    i.deviceOSIcon = function() {
                        return No.createElement("div", {
                            className: "device-os-info"
                        }, No.createElement(Wu.Q, {
                            className: "device-os-logo",
                            src: "/img/device/".concat(o ? "win11" : "win10", "-logo.svg"),
                            "aria-hidden": "true"
                        }), No.createElement("span", {
                            className: "os-name",
                            "aria-label": c
                        }, c))
                    }
                }
                return i
            }
            ), [n, l])
              , p = n.servicePlanId
              , f = n.workspaceName
              , v = n.workspaceId
              , E = function(e) {
                var n = e.servicePlan
                  , a = void 0 === n ? {} : n
                  , r = a.numvCPUs
                  , o = void 0 === r ? 0 : r
                  , i = a.ramInGB
                  , c = void 0 === i ? 0 : i
                  , s = a.osDiskSizeInGB
                  , l = void 0 === s ? 0 : s
                  , u = a.userProfileDiskSizeInGB;
                return o && c && l && void 0 !== u && u ? [t("device-storage-detail", {
                    OSDiskSize: l
                }), t("device-cpu-detail", {
                    cpuNumber: o
                }), t("device-ram-detail", {
                    ramInGB: c
                })] : ["", "", ""]
            }(a)
              , g = (0,
            s.Z)(E, 3)
              , h = g[0]
              , b = g[1]
              , w = g[2]
              , y = Xc(n)
              , _ = y && c.IWP_NH_FLW
              , C = function() {
                return i({
                    type: je,
                    payload: {
                        workspaceId: v
                    }
                })
            };
            return No.createElement(td.Z, {
                className: m()("device", u.deviceCardClass),
                key: p,
                "aria-label": f,
                id: "workspace".concat(o)
            }, No.createElement("div", {
                className: "device-top"
            }, No.createElement("img", {
                className: "device-pic",
                src: d.wallpaperPath,
                alt: t("wallpaper-logo")
            }), d.isFidalgo && No.createElement(Uu.G, {
                content: t("fidalgo-tooltip"),
                calloutProps: {
                    target: "#fidalgo-badge-".concat(n.deviceId)
                }
            }, No.createElement("a", {
                id: "fidalgo-badge-".concat(n.deviceId),
                className: "device-badge",
                role: "button",
                target: "_blank",
                href: "https://go.microsoft.com/fwlink/?linkid=2190019",
                "aria-label": t("fidalgo-badge-aria-label"),
                rel: "noreferrer"
            }, No.createElement("div", {
                className: "text-xs font-semibold"
            }, t("fidalgo-text")))), d.isPowerAutomate && No.createElement(Uu.G, {
                content: t("power-automate-tooltip"),
                calloutProps: {
                    target: "#power-automate-badge-".concat(n.deviceId)
                }
            }, No.createElement("a", {
                id: "power-automate-badge-".concat(n.deviceId),
                className: "device-badge",
                role: "button",
                target: "_blank",
                href: c.IWP_Power_Automate_Portal,
                "aria-label": t("power-automate-badge-aria-label"),
                rel: "noreferrer"
            }, No.createElement("div", {
                className: "text-xs font-semibold"
            }, t("power-automate-text")))), c.IWP_Enable_FlexIndicator && y && No.createElement(Uu.G, {
                content: t("frontline-indicator-hover-text", {
                    FrontlineGAName: Uo
                }),
                calloutProps: {
                    target: "#frontline-indicator-".concat(n.deviceId),
                    calloutMaxWidth: 200
                },
                className: "px-5 leading-5"
            }, No.createElement("div", {
                className: "frontline-indicator absolute bottom-3 right-3 px-2 py-0.5 h-4 rounded text-xs font-semibold",
                id: "frontline-indicator-".concat(n.deviceId),
                "aria-label": t("frontline-indicator-aria-label", {
                    FrontlineGAName: Uo
                })
            }, Uo)), function() {
                var e = r[v];
                if (!e)
                    return null;
                var a = e.type
                  , o = e.message
                  , c = e.actionContext
                  , s = e.actionClick
                  , l = e.enableClose
                  , d = e.hiddenLinksText
                  , p = e.hiddenLinksClick
                  , m = function(e) {
                    return e === xc.Ongoing || e === xc.OngoingWarning
                }(a)
                  , E = u.getMessageBarIconProp ? u.getMessageBarIconProp(a) : void 0
                  , g = !(!d || !d.length) && !(!p || !p.length)
                  , h = "".concat(o, ", ").concat(t("close"));
                return No.createElement(Ld.c, {
                    className: "device-tips",
                    dismissButtonAriaLabel: h,
                    onDismiss: l ? C : void 0,
                    messageBarType: Oc[a],
                    messageBarIconProps: E || (m ? {
                        iconName: ""
                    } : void 0),
                    truncated: g,
                    overflowButtonAriaLabel: t("expand-device-state-tips-button-label", {
                        workspaceName: f
                    }),
                    actions: c && s ? No.createElement("div", null, No.createElement(Od.f, {
                        onClick: function() {
                            s && s(n, i)
                        }
                    }, c)) : void 0
                }, No.createElement("div", {
                    className: g ? "device-tips-content-hidden-link" : "device-tips-content"
                }, No.createElement("span", {
                    className: "device-tips-message-container"
                }, m ? No.createElement(xd.$, {
                    size: Nd.E.small,
                    styles: u.deviceTipsStyle,
                    className: "device-tips-spinner"
                }) : null, No.createElement("span", null, o)), g && function() {
                    var e = r[v]
                      , t = e.hiddenLinksText
                      , a = e.hiddenLinksClick
                      , o = [];
                    if (t && t.length && a && a.length)
                        for (var c = function(e) {
                            var r = _ && 0 === e;
                            o.push(No.createElement(Al.r, {
                                key: v + "-hidden-link-" + e,
                                className: "device-tips-link",
                                "aria-label": t[e],
                                onClick: function() {
                                    a[e](n, i)
                                },
                                autoFocus: r
                            }, t[e])),
                            e < t.length - 1 && o.push(No.createElement("div", {
                                key: v + "-hidden-link-separator-" + e,
                                className: "device-tips-link-separator"
                            }, " | "))
                        }, s = 0; s < t.length; s++)
                            c(s);
                    return o
                }()))
            }()), No.createElement("div", {
                className: m()("device-content", u.deviceContentNativeClient)
            }, No.createElement("div", {
                className: "device-title"
            }, No.createElement("span", {
                className: m()("device-name", u.deviceNameNativeClient),
                title: f,
                "aria-label": f
            }, f), No.createElement(ud, {
                device: n,
                index: o
            })), No.createElement("div", {
                className: m()("device-details", u.deviceDetailsNativeClient)
            }, No.createElement("div", {
                className: "device-info"
            }, No.createElement(Pd, {
                device: n
            })), No.createElement(d.deviceOSIcon, null), No.createElement("div", {
                className: "device-cpu"
            }, No.createElement(Wu.Q, {
                className: "cpu-image",
                src: "/img/device/CPU.svg",
                "aria-hidden": "true"
            }), No.createElement("span", {
                "aria-label": b
            }, b)), No.createElement("div", {
                className: "device-ram"
            }, No.createElement(Wu.Q, {
                className: "ram-image",
                src: "/img/device/RAM.svg",
                "aria-hidden": "true"
            }), No.createElement("span", {
                "aria-label": w
            }, w)), No.createElement("div", {
                className: "device-storage"
            }, No.createElement(Fd.J, {
                iconName: "OfflineStorage",
                className: "storage-icon"
            }), No.createElement("span", {
                "aria-label": h
            }, h)))), No.createElement("div", {
                className: "device-operation"
            }, No.createElement(Td, {
                device: n,
                index: o
            })))
        }
        )), Ud = (0,
        ko.$j)((function(e) {
            return {
                deviceList: e.Device.deviceList,
                servicePlanMap: e.Device.servicePlanMap,
                enableFlex: e.EcsConfiguration.FlightingData.IWP_NH_FLW
            }
        }
        ))((function(e) {
            var n = e.deviceListFilter
              , a = e.servicePlanMap
              , r = e.enableFlex
              , o = e.showWorkspaceLabel
              , i = void 0 === o || o
              , c = e.deviceList;
            n && (c = c.filter(n));
            var s = zu();
            return No.createElement("div", {
                className: "main-content"
            }, i ? No.createElement("h3", null, No.createElement(Ml._, {
                className: m()("workspace-label", s.deviceListLabelClassName),
                id: "workspace-label"
            }, t("workspace-label"))) : null, No.createElement("div", {
                className: m()("device-list", s.deviceListClassName)
            }, c.map((function(e) {
                var t = a[e.servicePlanId]
                  , n = Yc(e, c);
                if (r && e.licenseCategory === kc.Flex || e.licenseCategory !== kc.Flex)
                    return No.createElement(Md, {
                        device: e,
                        servicePlan: t,
                        index: n,
                        key: n
                    })
            }
            ))))
        }
        )), Zd = (0,
        ko.$j)((function(e) {
            return {
                theme: e.Home.theme
            }
        }
        )), Hd = Ht(), Bd = function(e) {
            return Hd === e
        }, Wd = Zd((function(e) {
            var t = e.item
              , n = t.platform
              , a = t.title
              , r = t.subtitle
              , o = t.downloadOptions
              , i = t.showDialog
              , c = t.getURLText
              , s = t.getURLAriaLabel
              , l = e.theme
              , u = e.dispatch;
            return No.createElement("div", {
                className: "download-card"
            }, No.createElement(Vd, {
                title: a,
                subtitle: r,
                platform: n,
                theme: l
            }), No.createElement(Gd, {
                platform: n,
                downloadOptions: o,
                showDialog: i,
                dispatch: u,
                getURLText: c,
                getURLAriaLabel: s
            }))
        }
        )), Vd = function(e) {
            var t = e.title
              , n = e.platform
              , a = e.subtitle
              , r = e.theme
              , o = Bd(n) ? " active" : ""
              , i = xr(r) ? "-dark-theme" : ""
              , c = "img/platform/".concat(n).concat(o).concat(i, ".png");
            return No.createElement("div", {
                className: "download-card-top"
            }, No.createElement("img", {
                className: "app-icon",
                src: c,
                alt: t
            }), No.createElement("div", {
                className: "download-card-content"
            }, No.createElement(Ml._, {
                className: "download-card-title"
            }, t), No.createElement(Ml._, {
                className: "download-card-subtitle"
            }, a)))
        }, Gd = function(e) {
            var t = e.platform
              , n = e.downloadOptions
              , a = e.showDialog
              , r = e.dispatch
              , o = e.getURLText
              , i = e.getURLAriaLabel
              , c = function(e, t) {
                return function() {
                    Zv({
                        type: "download app",
                        value: e
                    }),
                    window.open(t),
                    a && r({
                        type: V,
                        payload: e
                    })
                }
            };
            return No.createElement("div", {
                className: "download-card-operation"
            }, o && No.createElement(Al.r, {
                className: "download-card-operation-url",
                onClick: function() {
                    Zv({
                        type: "show dialog",
                        value: "feedURL"
                    }),
                    r({
                        type: R,
                        payload: t
                    })
                },
                "aria-label": i
            }, o), 1 == n.length ? No.createElement(zd, {
                platform: t,
                downloadOptions: n,
                showDialog: a,
                onClickDownload: c,
                isSplitButton: !1
            }) : No.createElement(Yd, {
                platform: t,
                downloadOptions: n,
                showDialog: a,
                onClickDownload: c,
                isSplitButton: !0
            }))
        }, zd = function(e) {
            var t = e.platform
              , n = e.downloadOptions
              , a = e.ariaLabel
              , r = e.isSplitButton
              , o = e.onClickDownload
              , i = n[0];
            return No.createElement(Rd.a, {
                primary: Bd(t),
                text: i.title,
                ariaLabel: a || i.title,
                className: ["download-card-button", Bd(t) ? "download-card-button-primary" : "download-card-button-normal", r ? "download-card-button-without-right-border" : ""].join(" "),
                iconProps: i.isOpenInNewTab ? {
                    iconName: "OpenInNewWindow"
                } : {},
                onClick: o(i.platform || t, i.url)
            })
        }, Yd = function(e) {
            var n, a = e.platform, r = e.downloadOptions, o = e.showDialog, i = e.isSplitButton, c = e.onClickDownload;
            return No.createElement("div", {
                className: "download-card-with-more-operation"
            }, No.createElement(zd, {
                platform: a,
                downloadOptions: r,
                showDialog: o,
                onClickDownload: c,
                ariaLabel: null === (n = r[0]) || void 0 === n ? void 0 : n.title,
                isSplitButton: i
            }), No.createElement(Zu.h, {
                primary: Bd(a),
                menuIconProps: {
                    iconName: "ChevronDown"
                },
                "aria-roledescription": t("more-operation"),
                menuProps: {
                    items: r.map((function(e, t) {
                        return {
                            ariaLabel: e.title,
                            key: "".concat(t),
                            text: e.title,
                            onClick: c(e.platform || a, e.url)
                        }
                    }
                    ))
                },
                ariaLabel: t("more-operation"),
                className: ["more-button", Bd(a) ? "more-button-primary" : "more-button-normal"].join(" ")
            }))
        }, qd = (0,
        ko.$j)((function(e) {
            return {
                thirdPartyPartnerPlugin: e.ThirdPartyPartner.plugin,
                flighting: e.EcsConfiguration.FlightingData
            }
        }
        ))((function(e) {
            var n, a = e.thirdPartyPartnerPlugin, r = e.flighting.Windows_Download_IWP, o = null !== (n = null === a || void 0 === a ? void 0 : a.getDownloadPageConfig()) && void 0 !== n ? n : {
                title: t("download-page-title-Microsoft"),
                subtitle: r ? t("download-page-subTitle-RD-apps") : t("download-page-subTitle-Microsoft"),
                items: Pt()
            }, i = o.title, c = o.subtitle, s = o.items, l = (0,
            No.useMemo)(Tt, []);
            return r ? No.createElement("div", {
                className: "download-rdapp",
                role: "main"
            }, No.createElement("h1", null, No.createElement(Ml._, {
                tabIndex: -1,
                className: "download-title",
                "aria-label": t("download-page-title-download")
            }, t("download-page-title-download"))), No.createElement("div", null, No.createElement("h2", null, No.createElement("label", {
                "aria-label": t("download-page-title-Windows365"),
                className: "mt-10 pd-0 leading-4 text-lg font-semibold block"
            }, t("download-page-title-Windows365"))), No.createElement("p", null, No.createElement(Ml._, {
                "aria-label": t("download-page-subTitle-Windows365"),
                className: "mt-3 pd-0 leading-4 text-xs font-normal block"
            }, t("download-page-subTitle-Windows365"))), No.createElement("div", {
                className: "w-full mt-6 mb-6 grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] sm:grid-cols-[repeat(auto-fill,_minmax(348px,_1fr))] gap-12"
            }, l.map((function(e, t) {
                return No.createElement(Wd, {
                    item: e,
                    key: t
                })
            }
            )))), No.createElement("div", null, No.createElement("h2", null, No.createElement("label", {
                "aria-label": i,
                className: "mt-10 pd-0 leading-4 text-lg font-semibold block"
            }, i)), No.createElement("p", null, No.createElement(Ml._, {
                "aria-label": c,
                className: "mt-3 pd-0 leading-4 text-xs font-normal block"
            }, c)), No.createElement("div", {
                className: "w-full mt-6 mb-6 grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] sm:grid-cols-[repeat(auto-fill,_minmax(348px,_1fr))] gap-12"
            }, s.map((function(e, t) {
                return No.createElement(Wd, {
                    item: e,
                    key: t
                })
            }
            ))))) : No.createElement("div", {
                className: "download-rdapp",
                role: "main"
            }, No.createElement("h1", null, No.createElement(Ml._, {
                tabIndex: -1,
                className: "download-title",
                "aria-label": i
            }, i)), No.createElement(Ml._, {
                className: "download-subtitle"
            }, c), No.createElement("div", {
                className: "download-items-stack"
            }, s.map((function(e, t) {
                return No.createElement(Wd, {
                    item: e,
                    key: t
                })
            }
            ))))
        }
        )), Kd = a(1411), jd = {
            root: {
                marginTop: 5,
                color: "#605E5C",
                marginLeft: 41
            }
        }, Xd = a(9602), $d = a(3557), Qd = a(7440), Jd = (0,
        c.Z)((function e(t, n, a, r) {
            var o;
            (0,
            i.Z)(this, e),
            this.id = void 0,
            this.messageText = void 0,
            this.messageDetail = void 0,
            this.messageType = void 0,
            this.createTime = void 0,
            this.duration = void 0,
            this.id = (o = 6,
            Number(Math.random().toString().substr(3, o) + Date.now()).toString(36)),
            this.messageText = t,
            this.messageDetail = n,
            this.messageType = a,
            this.createTime = new Date,
            this.duration = r || 1e4
        }
        ));
        !function(e) {
            e.Loading = "loading",
            e.Success = "success",
            e.Fail = "fail"
        }(Dd || (Dd = {}));
        var ep = {
            loading: {
                hasSpinner: !0
            },
            success: {
                iconName: "Completed",
                iconColor: "green"
            },
            fail: {
                iconName: "ErrorBadge",
                iconColor: "red"
            }
        }
          , tp = (0,
        ko.$j)((function(e) {
            return {
                show: e.Home.showDownloadDialog,
                platform: e.Home.showDownloadDialogPlatform,
                feedUrl: e.Home.feedUrl
            }
        }
        ))((function(e) {
            var n = e.dispatch
              , a = e.show
              , r = e.feedUrl
              , o = e.platform;
            if (!a)
                return null;
            var i = (0,
            No.useState)(0)
              , c = (0,
            s.Z)(i, 2)
              , l = c[0]
              , u = c[1]
              , d = function() {
                return n({
                    type: G
                })
            }
              , p = function(e) {
                return function() {
                    return u(e)
                }
            }
              , m = 0 !== l ? t("done") : t("next")
              , f = o.toLocaleLowerCase().indexOf("windows") > -1
              , v = t("download-dialog-sub-fail") + t("download-dialog-sub-link");
            return No.createElement(Xd.u, {
                titleAriaId: "downloadDialog",
                isOpen: a,
                isBlocking: !1,
                onDismiss: d,
                containerClassName: "download-modal-container"
            }, No.createElement("div", {
                className: "download-header"
            }, No.createElement("h1", null, No.createElement(Ml._, {
                className: "download-title"
            }, t("download-dialog-title"))), No.createElement(Zu.h, {
                styles: jd,
                iconProps: {
                    iconName: "Cancel"
                },
                ariaLabel: t("dialog-close-ariaLabel", {
                    dialogName: "download"
                }),
                onClick: d,
                className: "modal-close-button"
            })), 0 == l ? No.createElement(qu.K, null, No.createElement(Ml._, {
                className: "download-info"
            }, t("download-dialog-step1-info")), No.createElement("img", {
                className: "download-pic",
                src: "img/download/download-info.png"
            })) : No.createElement(qu.K, {
                className: "download-content"
            }, No.createElement(Ml._, {
                className: "download-info"
            }, t("download-dialog-step2-info")), f ? No.createElement("div", {
                className: "download-subscribe-container"
            }, No.createElement(Ml._, {
                className: "download-subscribe-title"
            }, t("download-dialog-sub-title")), No.createElement(Ml._, {
                className: "download-subscribe-detail"
            }, t("download-dialog-sub-detail")), No.createElement(Ml._, {
                className: "download-subscribe-fail"
            }, t("download-dialog-sub-fail"), No.createElement(Al.r, {
                onClick: function() {
                    d(),
                    n({
                        type: R
                    })
                },
                "aria-label": v
            }, t("download-dialog-sub-link")))) : No.createElement("div", {
                className: "download-subscribe-container"
            }, No.createElement(Ml._, {
                className: "download-subscribe-title"
            }, t("download-dialog-url-title")), No.createElement(Ml._, {
                className: "download-subscribe-detail"
            }, t("download-dialog-url-detail")), No.createElement(qu.K, {
                horizontal: !0,
                className: "download-copy"
            }, No.createElement($d.n, {
                ariaLabel: t("download-input"),
                value: r,
                className: "download-input",
                readOnly: !0
            }), No.createElement(Kd.CopyToClipboard, {
                text: r
            }, No.createElement(Qd.K, {
                disabled: !r,
                text: t("feed-copy"),
                ariaLabel: t("feed-copy"),
                onClick: function() {
                    n({
                        type: ee,
                        payload: new Jd(t("feed-copy-successfully"),"",Dd.Success)
                    })
                }
            }))))), No.createElement("div", {
                className: "download-footer"
            }, No.createElement(Rd.a, {
                onClick: p(l - 1),
                disabled: 1 !== l,
                className: "download-button",
                ariaLabel: t("back")
            }, t("back")), No.createElement(Qd.K, {
                onClick: function() {
                    0 === l ? p(l + 1)() : d()
                },
                className: "download-button",
                ariaLabel: m
            }, m)))
        }
        ))
          , np = ["constructor", "render", "replaceState", "setState", "isMounted", "replaceState", "componentWillMount", "componentDidMount", "componentWillUnmount"];
        function ap(e, t, n) {
            Wl(Hl.CatchError, {
                error: e,
                errorType: n || ut.unCatchedError,
                key: t,
                msg: e.msg || ""
            })
        }
        function rp(e) {
            return function(t) {
                return Object.defineProperty(this, e, {
                    configurable: !0,
                    writable: !0,
                    enumerable: !0,
                    value: t
                }),
                t
            }
        }
        function op(e, t, n) {
            if ("function" !== typeof n.value)
                return n;
            var a = e.constructor
              , r = n.configurable
              , o = n.enumerable
              , i = n.value;
            return {
                configurable: r,
                enumerable: o,
                get: function() {
                    if (this === e)
                        return i;
                    if (this.constructor !== a && Object.getPrototypeOf(this).constructor === a)
                        return i;
                    var n = function(e, t) {
                        return function() {
                            try {
                                return e.apply(void 0, arguments)
                            } catch (n) {
                                t ? t(n) : ap(n)
                            }
                        }
                    }(i.bind(this), (function(e) {
                        return ap(e, t)
                    }
                    ));
                    return Object.defineProperty(this, t, {
                        configurable: !0,
                        writable: !0,
                        enumerable: !1,
                        value: n
                    }),
                    n.bound = !0,
                    n
                },
                set: rp(t)
            }
        }
        function ip(e, t) {
            return "function" === typeof t.value && !np.includes(e) && t.configurable && t.writable && !t.value.bound
        }
        var cp = {
            root: {
                marginTop: 5,
                color: "#605E5C",
                marginLeft: 41
            }
        }
          , sp = (0,
        ko.$j)((function(e) {
            return {
                show: e.Home.showFeedUrlDialog,
                platform: e.Home.showFeedUrlDialogPlatform,
                feedUrl: e.Home.feedUrl,
                thirdPartyPartnerPlugin: e.ThirdPartyPartner.plugin
            }
        }
        ))
          , lp = sp((function(e) {
            var n = e.dispatch
              , a = e.show
              , r = No.useState(!1)
              , o = (0,
            s.Z)(r, 2)
              , i = o[0]
              , c = o[1]
              , l = No.useState(0)
              , u = (0,
            s.Z)(l, 2)
              , d = u[0]
              , p = u[1]
              , m = function() {
                n({
                    type: T
                }),
                c(!1)
            }
              , f = function(e) {
                var t = e.feedUrl
                  , n = e.thirdPartyPartnerPlugin;
                return (null === n || void 0 === n ? void 0 : n.getFeedURL()) || t
            }(e)
              , v = function(e) {
                var n = e.thirdPartyPartnerPlugin;
                return (null === n || void 0 === n ? void 0 : n.getFeedTitle()) || t("feed-title")
            }(e);
            return No.createElement(Xd.u, {
                titleAriaId: "feedModal",
                isOpen: a,
                isBlocking: !1,
                onDismiss: m,
                containerClassName: "feed-modal-container"
            }, No.createElement("div", {
                className: "feed-header"
            }, No.createElement("h1", null, No.createElement(Ml._, {
                className: "feed-title"
            }, v)), No.createElement(Zu.h, {
                styles: cp,
                iconProps: {
                    iconName: "Cancel"
                },
                ariaLabel: t("dialog-close-ariaLabel", {
                    dialogName: "subscribe"
                }),
                onClick: m,
                className: "modal-close-button"
            })), i && No.createElement("div", {
                className: "feed-message"
            }, No.createElement(Ld.c, {
                key: d,
                "aria-label": t("feed-copy-successfully"),
                messageBarType: Rc.f.success
            }, t("feed-copy-successfully"))), No.createElement(qu.K, null, No.createElement(Ml._, {
                className: "feed-info"
            }, function(e) {
                var n = e.platform
                  , a = e.thirdPartyPartnerPlugin;
                return (null === a || void 0 === a ? void 0 : a.getFeedURLDialogLabelText()) || (n.toLocaleLowerCase().indexOf("windows") > -1 ? t("feed-info") : t("download-dialog-url-detail"))
            }(e)), No.createElement(qu.K, {
                horizontal: !0,
                className: "feed-copy"
            }, No.createElement($d.n, {
                ariaLabel: t("feed-input"),
                value: f,
                className: "feed-input",
                readOnly: !0
            }), No.createElement(Kd.CopyToClipboard, {
                text: f
            }, No.createElement(Qd.K, {
                disabled: !f,
                text: t("feed-copy"),
                ariaLabel: t("feed-copy"),
                onClick: function() {
                    c(!0),
                    p((function(e) {
                        return e + 1
                    }
                    ))
                }
            })))))
        }
        ))
          , up = {
            root: {
                marginTop: 48,
                width: 54,
                position: "fixed",
                overflow: "visible"
            },
            group: {
                width: 48
            }
        }
          , dp = {
            root: {
                width: 54,
                position: "fixed",
                backgroundColor: "#FAF9F8",
                overflow: "visible"
            },
            navItem: {
                background: "white",
                color: "#000"
            },
            group: {
                width: 48
            }
        };
        function pp(e) {
            return {
                iconName: e,
                styles: {
                    root: {
                        margin: "0 8px",
                        fontSize: "24px",
                        width: "24px",
                        height: "24px",
                        lineHeight: "24px"
                    }
                }
            }
        }
        var mp, fp, vp = a(2520), Ep = (0,
        ko.$j)((function(e) {
            var t;
            return {
                selectedKey: e.Home.selectedNavKey,
                userName: e.Home.userInfo.name,
                homeNavdisabled: e.Home.homeNavDisabled,
                thirdPartyPartnerPlugin: null === (t = e.ThirdPartyPartner) || void 0 === t ? void 0 : t.plugin
            }
        }
        ))((function(e) {
            var n = e.selectedKey
              , a = e.userName
              , r = e.homeNavdisabled
              , o = e.thirdPartyPartnerPlugin
              , i = Ru((function(e) {
                var t = e.ClientVariant
                  , n = {
                    navStyles: up
                };
                return t === b.Teams && (n.navStyles = dp),
                n
            }
            ))
              , c = [{
                id: "nav-home",
                name: t("nav-home-hover-text"),
                url: "",
                iconProps: pp("Home"),
                key: Rn.Home,
                ariaLabel: n == Rn.Home ? t("nav-home-ariaLabel", {
                    name: a
                }) : t("nav-home-unselected-ariaLabel"),
                disabled: r
            }, {
                id: "nav-download",
                name: t("nav-download-hover-text"),
                url: "",
                iconProps: pp("Download"),
                key: Rn.Download,
                ariaLabel: n == Rn.Download ? t("nav-download-ariaLabel") : t("nav-download-unselected-ariaLabel")
            }];
            (null === o || void 0 === o ? void 0 : o.actionListModifier) && (c = c.map(o.navLinkListModifier));
            var s = [{
                links: c
            }]
              , l = zu();
            return No.useEffect((function() {
                var e, t, n, a, r, o, i;
                null === (e = document.getElementById("nav-home")) || void 0 === e || null === (t = e.parentElement) || void 0 === t || t.setAttribute("role", "presentation"),
                null === (n = document.getElementById("nav-home")) || void 0 === n || null === (a = n.parentElement) || void 0 === a || null === (r = a.parentElement) || void 0 === r || r.setAttribute("role", "presentation"),
                null === (o = document.getElementById("nav-download")) || void 0 === o || null === (i = o.parentElement) || void 0 === i || i.setAttribute("role", "presentation")
            }
            ), []),
            l.hideLeftNavigation ? null : No.createElement(vp.J, {
                className: "home-nav",
                onLinkClick: function(t, n) {
                    Zv({
                        type: "change nav",
                        value: (null === n || void 0 === n ? void 0 : n.key) || ""
                    }),
                    e.dispatch({
                        type: y,
                        payload: null === n || void 0 === n ? void 0 : n.key
                    })
                },
                selectedKey: n,
                ariaLabel: t("nav-ariaLabel"),
                styles: i.navStyles,
                groups: s
            })
        }
        )), gp = a(6558), hp = (0,
        ko.$j)()((function(e) {
            var n = e.message
              , a = e.dispatch
              , r = n.messageText
              , o = n.messageDetail
              , i = n.messageType
              , c = n.createTime
              , s = n.duration
              , l = (new Date).getTime() - c.getTime() > s
              , u = ep[i]
              , d = function() {
                return a({
                    type: J,
                    payload: n
                })
            };
            return No.useEffect((function() {
                var e = setTimeout((function() {
                    d()
                }
                ), s);
                return function() {
                    return clearTimeout(e)
                }
            }
            ), [s]),
            l ? null : No.createElement("div", {
                className: "notification",
                role: "alert",
                "aria-label": t("notification")
            }, No.createElement("div", {
                className: "left-section ".concat(i, "-section")
            }), No.createElement("div", {
                className: "right-section"
            }, No.createElement("div", {
                className: "info-container"
            }, u.hasSpinner ? No.createElement(xd.$, {
                className: "info-icon",
                ariaLabel: t("icon"),
                size: Nd.E.small
            }) : No.createElement(Fd.J, {
                iconName: "".concat(u.iconName),
                className: "info-icon ".concat(u.iconColor, "-icon"),
                ariaLabel: t("icon")
            }), No.createElement("div", {
                className: "content-container"
            }, No.createElement("span", {
                className: "title",
                "aria-label": r
            }, r), o && No.createElement("span", {
                className: "detail",
                "aria-label": o
            }, o), No.createElement("span", {
                className: "time"
            }, t("just-now")))), No.createElement("div", {
                className: "icon-container"
            }, No.createElement(Fd.J, {
                iconName: "Clear",
                className: "close-icon",
                ariaLabel: t("close"),
                onClick: d
            }))))
        }
        )), bp = (0,
        ko.$j)((function(e) {
            return {
                messageList: e.Home.messageList
            }
        }
        ))((function(e) {
            var t = e.messageList;
            return No.createElement(gp.m, null, No.createElement("div", {
                className: "notification-contianer"
            }, t.map((function(e) {
                return No.createElement(hp, {
                    key: e.id,
                    message: e
                })
            }
            ))))
        }
        )), wp = {
            theme: ru.R.M365Light
        }, yp = function() {
            var e = [];
            return {
                register: function(t) {
                    return t && e.push(t),
                    wp
                },
                unregister: function(t) {
                    var n = e.indexOf(t);
                    n > -1 && e.splice(n, 1)
                },
                updateMacTheme: function(t) {
                    var n = {
                        theme: xr(t) ? ru.R.M365Dark : ru.R.M365Light
                    };
                    Object.assign(wp, n),
                    e.forEach((function(e) {
                        return e(wp)
                    }
                    ))
                }
            }
        }(), _p = (0,
        ko.$j)((function(e) {
            return {
                theme: e.Home.theme
            }
        }
        ))((function(e) {
            var t = e.dispatch
              , n = e.theme
              , a = void 0 === n ? Rt.Light : n
              , r = (0,
            No.useRef)(null);
            return (0,
            No.useEffect)((function() {
                return t({
                    type: pn,
                    payload: {
                        entry: r.current,
                        theme: a
                    }
                }),
                function() {
                    t({
                        type: mn
                    })
                }
            }
            ), [t]),
            (0,
            No.useEffect)((function() {
                yp.updateMacTheme(a)
            }
            ), [a]),
            No.createElement("div", {
                ref: r,
                className: "mac-simplified-user-list"
            })
        }
        ));
        !function(e) {
            e.BulkToken_InvalidRequest = "bulkToken_InvalidRequest",
            e.BulkToken_DeleteBPRTUser = "bulkToken_DeleteBPRTUser",
            e.BulkToken_ResetBPRTPassword = "bulkToken_ResetBPRTPassword",
            e.BulkToken_ADAL_RequireUserInteraction = "bulkToken_ADAL_RequireUserInteraction",
            e.BulkToken_MDM_MessageFormatError = "bulkToken_MDM_MessageFormatError",
            e.BulkToken_MDM_AuthenticationError = "bulkToken_MDM_AuthenticationError",
            e.BulkToken_MDM_AuthorizationError = "bulkToken_MDM_AuthorizationError",
            e.BulkToken_MDM_ConfigMgrServerError = "bulkToken_MDM_ConfigMgrServerError",
            e.BulkToken_MDM_DeviceNotSupported = "bulkToken_MDM_DeviceNotSupported",
            e.BulkToken_MDM_UserLicenseError = "bulkToken_MDM_UserLicenseError",
            e.CountryNotSupported = "countryNotSupported",
            e.IntuneEnrollFailed = "intuneEnrollFailed",
            e.IntuneEnroll_BlockedByEnrollmentRestriction = "intuneEnroll_BlockedByEnrollmentRestriction",
            e.IntuneEnroll_MdmDiscoveryUrlMisconfigured = "intuneEnroll_MdmDiscoveryUrlMisconfigured",
            e.GeneralError = "GeneralError"
        }(fp || (fp = {}));
        var Cp = (mp = {},
        (0,
        f.Z)(mp, fp.IntuneEnrollFailed, "provision-fail-dialog-content-intune-enroll-failed-v2"),
        (0,
        f.Z)(mp, fp.IntuneEnroll_BlockedByEnrollmentRestriction, "provision-fail-dialog-content-intune-enroll-blocked-by-enrollment-restriction-v2"),
        (0,
        f.Z)(mp, fp.IntuneEnroll_MdmDiscoveryUrlMisconfigured, "provision-fail-dialog-content-intune-enroll-mdm-discovery-url-misconfigured-v2"),
        mp)
          , kp = new Set(Object.keys(Cp))
          , Ip = function(e) {
            return t(Cp[e])
        };
        function Sp(e) {
            return e === fp.BulkToken_InvalidRequest ? [{
                item: [{
                    text: t("provision-fail-dialog-content-1-1")
                }, {
                    text: t("provision-fail-dialog-content-1-2-link"),
                    isLink: !0,
                    linkUrl: "https://go.microsoft.com/fwlink/?linkid=2172547"
                }]
            }] : e === fp.BulkToken_DeleteBPRTUser || e === fp.BulkToken_ResetBPRTPassword ? [{
                item: [{
                    text: t("provision-fail-dialog-content-2-1")
                }, {
                    text: t("provision-fail-dialog-content-2-2-link"),
                    isLink: !0,
                    linkUrl: "https://windows365.microsoft.com/"
                }, {
                    text: t("provision-fail-dialog-content-2-3")
                }, {
                    text: t("provision-fail-dialog-content-2-4-link"),
                    isLink: !0,
                    linkUrl: "https://go.microsoft.com/fwlink/?linkid=2172841"
                }]
            }] : e === fp.BulkToken_ADAL_RequireUserInteraction ? [{
                item: [{
                    text: t("provision-fail-dialog-content-3and4-1")
                }, {
                    text: t("provision-fail-dialog-content-3and4-2-link"),
                    isLink: !0,
                    linkUrl: "https://go.microsoft.com/fwlink/?linkid=2172842"
                }]
            }] : e === fp.BulkToken_MDM_MessageFormatError || e === fp.BulkToken_MDM_AuthenticationError || e === fp.BulkToken_MDM_AuthorizationError || e === fp.BulkToken_MDM_ConfigMgrServerError || e === fp.BulkToken_MDM_DeviceNotSupported || e === fp.BulkToken_MDM_UserLicenseError ? [{
                item: [{
                    text: t("provision-fail-dialog-content-5-1")
                }, {
                    text: t("provision-fail-dialog-content-5-2-link"),
                    isLink: !0,
                    linkUrl: "https://go.microsoft.com/fwlink/?linkid=2172549"
                }]
            }] : function(e) {
                return kp.has(e)
            }(e) ? [{
                item: [{
                    text: Ip(e)
                }, {
                    text: t("provision-fail-dialog-content-6-2-link"),
                    isLink: !0,
                    linkUrl: "https://learn.microsoft.com/windows-365/business/troubleshoot-windows-365-business"
                }]
            }] : e === fp.CountryNotSupported ? [{
                item: [{
                    text: t("provision-fail-dialog-content-6-1")
                }, {
                    text: t("provision-fail-dialog-content-6-2-link"),
                    isLink: !0,
                    linkUrl: "https://go.microsoft.com/fwlink/?linkid=2172622"
                }]
            }] : [{
                item: [{
                    text: t("provision-fail-dialog-content-general-1")
                }]
            }]
        }
        var xp = (0,
        ko.$j)((function(e) {
            return {
                show: e.Home.showProvisionFailDialog,
                selectedDevice: e.Device.selectedDevice
            }
        }
        ))((function(e) {
            var n = e.dispatch
              , a = e.show
              , r = e.selectedDevice;
            if (!a)
                return null;
            var o = r.errorCode
              , i = void 0 === o ? fp.GeneralError : o;
            if (!Uc(r))
                return null;
            var c = function() {
                n({
                    type: K
                })
            };
            return No.createElement(Xd.u, {
                titleAriaId: "provisionFailModal",
                isOpen: a,
                onDismiss: c,
                isBlocking: !1,
                containerClassName: "provision-fail-modal"
            }, No.createElement("div", {
                className: "provision-fail-header"
            }, No.createElement(Ml._, {
                className: "provision-fail-header-text",
                title: t("provision-fail-dialog-title")
            }, t("provision-fail-dialog-title")), No.createElement(Zu.h, {
                iconProps: {
                    iconName: "Cancel"
                },
                styles: {
                    root: {
                        marginTop: 5,
                        color: "#605E5C"
                    }
                },
                ariaLabel: t("close"),
                onClick: c
            })), No.createElement("div", {
                className: "provision-fail-content"
            }, No.createElement(Ml._, {
                className: "provision-fail-content-header"
            }, t("provision-fail-dialog-content-header")), No.createElement("div", {
                className: "provision-fail-content-list"
            }, function() {
                var e = [];
                return Sp(i).forEach((function(t, n) {
                    var a = [];
                    t.item.forEach((function(e, t) {
                        var n = e.text
                          , r = e.isLink
                          , o = e.linkUrl;
                        a.push(r ? No.createElement(Al.r, {
                            className: "provision-fail-content-text provision-fail-content-text-link",
                            href: o,
                            target: "_blank",
                            key: "provision-fail-content-text-link-".concat(t)
                        }, n) : No.createElement(Ml._, {
                            className: "provision-fail-content-text",
                            key: "provision-fail-content-text-".concat(t)
                        }, n))
                    }
                    )),
                    a.push(No.createElement(Ml._, {
                        className: "provision-fail-content-text",
                        key: "provision-fail-content-text-ending"
                    }, ".")),
                    e.push(No.createElement("li", {
                        className: "provision-fail-content-item",
                        key: "provision-fail-content-".concat(n)
                    }, a))
                }
                )),
                No.createElement("ul", {
                    style: {
                        listStyleType: "disc",
                        paddingLeft: "36px"
                    }
                }, e)
            }()), No.createElement(Ml._, {
                className: "provision-fail-content-footer"
            }, t("provision-fail-dialog-content-footer"))), No.createElement("div", {
                className: "provision-fail-footer"
            }, No.createElement(qu.K, {
                horizontal: !0,
                tokens: {
                    childrenGap: 10
                }
            }, No.createElement(Qd.K, {
                className: "cancel-button",
                onClick: c
            }, t("provision-fail-dialog-cancel")))))
        }
        ))
          , Np = a(1489);
        function Rp(e) {
            var t = es();
            return No.createElement(Qu.f, {
                theme: t.actionModalCheckboxTheme
            }, No.createElement(Xd.u, {
                titleAriaId: e.titleAriaId,
                isOpen: e.isOpen,
                onDismiss: e.onDismiss,
                containerClassName: (0,
                Np.i)(e.containerClassName, "device-action-modal", t.deviceActionModalClass),
                styles: {
                    main: {
                        width: e.width || 443
                    }
                }
            }, e.titleAriaId && No.createElement("label", {
                className: "hidden",
                id: e.titleAriaId
            }, e.modalLabelText), e.children))
        }
        var Tp = (0,
        ko.$j)((function(e) {
            return {
                show: e.Home.showRenameDialog,
                devices: e.Device.deviceList,
                selectedDevice: e.Device.selectedDevice
            }
        }
        ))
          , Pp = Tp((function(e) {
            var n = e.show
              , a = e.selectedDevice
              , r = e.devices
              , o = e.dispatch;
            if (!n)
                return null;
            var i = a.workspaceId
              , c = No.useState(a.workspaceName)
              , l = (0,
            s.Z)(c, 2)
              , u = l[0]
              , d = l[1]
              , p = No.useState(!1)
              , f = (0,
            s.Z)(p, 2)
              , v = f[0]
              , E = f[1]
              , g = No.useState("")
              , h = (0,
            s.Z)(g, 2)
              , b = h[0]
              , w = h[1]
              , y = No.useState(!1)
              , _ = (0,
            s.Z)(y, 2)
              , C = _[0]
              , k = _[1]
              , I = No.useState(!1)
              , S = (0,
            s.Z)(I, 2)
              , x = S[0]
              , N = S[1]
              , R = es()
              , T = No.useState(!1)
              , P = (0,
            s.Z)(T, 2)
              , A = P[0]
              , D = P[1]
              , L = No.useCallback((function(e, t) {
                var n;
                v || E(!0),
                t = null !== (n = t) && void 0 !== n ? n : "",
                d(t)
            }
            ), [v])
              , O = function() {
                o({
                    type: H
                }),
                w(""),
                k(!1),
                o({
                    type: Ne,
                    payload: a.workspaceId
                })
            };
            No.useEffect((function() {
                !function(e) {
                    var t = e.match(/\./g)
                      , n = t ? t.length : 0;
                    return !e.startsWith(".") && n <= 1 && !e.match(/[\\/<>?:|*"\\&]/g) && e.length >= 1 && e.length <= 64
                }(u.trim()) ? (w(t("rename-error-name-not-meet-requirement")),
                N(!1)) : (w(""),
                N(!0))
            }
            ), [u]);
            var F = No.useMemo((function() {
                return C || !x || !v || A
            }
            ), [C, x, v, A])
              , M = No.useCallback((function() {
                D(!0)
            }
            ), [])
              , U = No.useCallback((function() {
                void 0 !== window.mozInnerScreenX ? setTimeout((function() {
                    D(!1)
                }
                ), 0) : D(!1)
            }
            ), [])
              , Z = function(e) {
                Ou(e) && (B(e),
                W())
            }
              , B = function(e) {
                e.stopPropagation(),
                e.preventDefault()
            }
              , W = function() {
                O(),
                G()
            }
              , V = function() {
                !function() {
                    var e = u.trim();
                    Zv("click rename button"),
                    k(!0),
                    e === a.workspaceName ? (O(),
                    o({
                        type: Ke,
                        payload: {
                            workspaceId: i,
                            deviceStateTip: {
                                type: xc.Error,
                                message: t("rename-same-msg")
                            }
                        }
                    })) : r.some((function(t) {
                        return t.workspaceName === e
                    }
                    )) ? (O(),
                    o({
                        type: Ke,
                        payload: {
                            workspaceId: i,
                            deviceStateTip: {
                                type: xc.Error,
                                message: t("rename-conflict-msg")
                            }
                        }
                    })) : (o({
                        type: xe,
                        payload: a.workspaceId
                    }),
                    o({
                        type: We,
                        payload: {
                            device: a,
                            actionType: fc.Rename,
                            newWorkspaceName: e,
                            hideDialogActionType: H
                        }
                    }))
                }(),
                G()
            }
              , G = function() {
                var e = function(e, t) {
                    return qc(Yc(e, t))
                }(a, r);
                if (e) {
                    var t = document.getElementById(e);
                    null === t || void 0 === t || t.focus()
                }
            }
              , z = [No.createElement(Rd.a, {
                id: "button-cancel",
                key: "button-cancel",
                className: m()("cancel-button", "modal-cancel-button"),
                onClick: W,
                onKeyDown: Z,
                ariaLabel: t("rename-modal-button-cancel")
            }, t("rename-modal-button-cancel")), No.createElement(Qd.K, {
                id: "button-rename",
                key: "button-rename",
                className: "action-button",
                disabled: F,
                onClick: V,
                onKeyDown: function(e) {
                    Ou(e) && (B(e),
                    V())
                },
                ariaLabel: t("rename-modal-button-rename")
            }, t("rename-modal-button-rename"))]
              , Y = R.reverseModalFooter ? z.slice().reverse() : z
              , q = t("rename-modal-title", {
                workspaceName: a.workspaceName
            });
            return No.createElement(Rp, {
                titleAriaId: "renameModal",
                isOpen: n,
                isBlocking: !1,
                onDismiss: W,
                modalLabelText: q
            }, No.createElement(qu.K, {
                className: "rename-modal-header device-action-modal-header"
            }, No.createElement("h1", null, No.createElement(Ml._, {
                className: "rename-modal-title device-action-modal-header-title"
            }, q)), No.createElement(Zu.h, {
                styles: {
                    root: {
                        marginTop: 5,
                        marginLeft: 22
                    }
                },
                iconProps: {
                    iconName: "Cancel"
                },
                ariaLabel: t("rename-modal-iconBtn-ariaLabel"),
                onClick: W,
                onKeyDown: Z,
                className: m()("device-action-modal-close", "modal-close-button")
            })), No.createElement(qu.K, {
                className: "rename-modal-text device-action-modal-content"
            }, No.createElement("h2", null, No.createElement(Ml._, {
                className: "rename-text-title"
            }, t("rename-text-title"))), No.createElement(Ml._, {
                className: "rename-text-subtitle"
            }, t("rename-text-subTitle")), function() {
                for (var e = [], n = 1; n <= 5; n++)
                    e.push(No.createElement("li", {
                        key: "rename-text-tip-".concat(n)
                    }, t("rename-text-tip-".concat(n))));
                return No.createElement("ul", {
                    style: {
                        listStyleType: "disc",
                        paddingLeft: "36px"
                    }
                }, e)
            }()), No.createElement("div", {
                className: m()("input-container", b ? "rename-input-invalid" : "")
            }, No.createElement($d.n, Object.assign({
                className: "rename-text-field",
                errorMessage: b,
                placeholder: a.workspaceName,
                onChange: L,
                value: u,
                onCompositionStart: M,
                onCompositionEnd: U,
                autoFocus: !0
            }, R.renameModalTextareaProps || {}))), No.createElement("div", {
                className: "rename-footer device-action-modal-footer"
            }, No.createElement(qu.K, {
                horizontal: !0,
                tokens: {
                    childrenGap: 10
                },
                className: "device-action-button-container"
            }, Y)))
        }
        ))
          , Ap = a(4110)
          , Dp = (0,
        ko.$j)((function(e) {
            return {
                show: e.Home.showResetDialog,
                selectedDevice: e.Device.selectedDevice,
                userRestoreEnabled: e.Home.userInfo.userRestoreEnabled
            }
        }
        ))((function(e) {
            var n = e.dispatch
              , a = e.show
              , r = e.selectedDevice
              , o = e.userRestoreEnabled;
            if (!a)
                return null;
            var i = No.useState(!0)
              , c = (0,
            s.Z)(i, 2)
              , l = c[0]
              , u = c[1]
              , d = es()
              , p = function() {
                n({
                    type: U
                }),
                u(!0),
                Uc(r) || n({
                    type: Ne,
                    payload: r.workspaceId
                })
            }
              , f = [No.createElement(Rd.a, {
                id: "button-cancel",
                key: "button-cancel",
                className: m()("cancel-button", "modal-cancel-button"),
                onClick: p,
                ariaLabel: t("reset-dialog-cancel")
            }, t("reset-dialog-cancel")), No.createElement(Qd.K, {
                id: "button-reset",
                key: "button-reset",
                className: "action-button",
                onClick: function() {
                    Zv("click reset button"),
                    n({
                        type: xe,
                        payload: r.workspaceId
                    }),
                    n({
                        type: We,
                        payload: {
                            device: r,
                            actionType: fc.Reset,
                            hideDialogActionType: U
                        }
                    }),
                    u(!0)
                },
                disabled: l,
                ariaLabel: t("reset-dialog-reset")
            }, t("reset-dialog-reset"))]
              , v = d.reverseModalFooter ? f.slice().reverse() : f
              , E = t("reset-dialog-title", {
                workspaceName: r.workspaceName
            });
            return No.createElement(Rp, {
                titleAriaId: "resetModal",
                isOpen: a,
                onDismiss: p,
                isBlocking: !1,
                containerClassName: "reset-modal",
                modalLabelText: E
            }, No.createElement("div", {
                className: "reset-header device-action-modal-header"
            }, No.createElement("h1", null, No.createElement(Ml._, {
                className: "reset-header-text device-action-modal-header-title"
            }, E)), No.createElement(Zu.h, {
                iconProps: {
                    iconName: "Cancel"
                },
                styles: {
                    root: {
                        marginTop: 5,
                        marginLeft: 22
                    }
                },
                ariaLabel: t("dialog-close-ariaLabel", {
                    dialogName: "reset"
                }),
                onClick: p,
                className: m()("device-action-modal-close", "modal-close-button")
            })), No.createElement("div", {
                className: "reset-content device-action-modal-content"
            }, No.createElement(Ml._, {
                className: "reset-content-prefix"
            }, t("reset-dialog-text-prefix")), No.createElement("div", {
                className: "reset-content-list"
            }, function() {
                for (var e = [], n = 1; n <= 4; n++)
                    e.push(No.createElement("li", {
                        key: "reset-dialog-content-".concat(n)
                    }, t("reset-dialog-content-".concat(n))));
                return No.createElement("ul", {
                    style: {
                        listStyleType: "disc",
                        paddingLeft: "36px"
                    }
                }, e)
            }()), (Bc(r) && o || !Bc(r)) && No.createElement(Ml._, {
                className: "reset-content-postfix"
            }, t("reset-dialog-warning")), No.createElement(Ml._, {
                className: "reset-content-postfix"
            }, t("reset-dialog-text-postfix")), No.createElement(Ap.X, {
                id: "checkbox-reset",
                label: t("reset-dialog-text-checkbox"),
                onChange: function(e, t) {
                    u(!t)
                },
                className: "reset-checkbox device-action-modal-checkbox"
            })), No.createElement("div", {
                className: "reset-footer device-action-modal-footer"
            }, No.createElement(qu.K, {
                horizontal: !0,
                tokens: {
                    childrenGap: 10
                },
                className: "device-action-button-container"
            }, v)))
        }
        ))
          , Lp = (0,
        ko.$j)((function(e) {
            return {
                show: e.Home.showRestartDialog,
                selectedDevice: e.Device.selectedDevice
            }
        }
        ))((function(e) {
            var n = e.show
              , a = e.selectedDevice
              , r = e.dispatch;
            if (!n)
                return null;
            var o = es()
              , i = (0,
            No.useState)(!1)
              , c = (0,
            s.Z)(i, 2)
              , l = c[0]
              , u = c[1]
              , d = function() {
                u(!1),
                r({
                    type: W
                }),
                r({
                    type: Ne,
                    payload: a.workspaceId
                })
            }
              , p = [No.createElement(Rd.a, {
                id: "button-cancel",
                key: "button-cancel",
                className: m()("cancel-button", "modal-cancel-button"),
                onClick: d,
                ariaLabel: t("restart-dialog-button-cancel")
            }, t("restart-dialog-button-cancel")), No.createElement(Qd.K, {
                id: "button-restart",
                key: "button-restart",
                className: "action-button",
                disabled: l,
                onClick: function() {
                    Zv("click restart button"),
                    u(!0),
                    r({
                        type: xe,
                        payload: a.workspaceId
                    }),
                    r({
                        type: We,
                        payload: {
                            device: a,
                            actionType: fc.Restart,
                            hideDialogActionType: W
                        }
                    })
                },
                ariaLabel: t("restart-dialog-button-restart")
            }, t("restart-dialog-button-restart"))]
              , f = o.reverseModalFooter ? p.slice().reverse() : p
              , v = t("restart-dialog-title", {
                workspaceName: a.workspaceName
            });
            return No.createElement(Rp, {
                titleAriaId: "restartModal",
                isOpen: n,
                isBlocking: !1,
                onDismiss: d,
                modalLabelText: v
            }, No.createElement("div", {
                className: "restart-modal-header device-action-modal-header"
            }, No.createElement("h1", null, No.createElement(Ml._, {
                className: "restart-header-title device-action-modal-header-title"
            }, v)), No.createElement(Zu.h, {
                styles: {
                    root: {
                        marginTop: 5,
                        marginLeft: 22
                    }
                },
                iconProps: {
                    iconName: "Cancel"
                },
                ariaLabel: t("dialog-close-ariaLabel", {
                    dialogName: "restart"
                }),
                onClick: d,
                className: m()("device-action-modal-close", "modal-close-button")
            })), No.createElement("div", {
                className: "restart-modal-text device-action-modal-content"
            }, No.createElement(Ml._, {
                className: "restart-text-title"
            }, t("restart-dialog-text"))), No.createElement("div", {
                className: "restart-modal-footer device-action-modal-footer"
            }, No.createElement(qu.K, {
                horizontal: !0,
                tokens: {
                    childrenGap: 10
                },
                className: "device-action-button-container"
            }, f)))
        }
        ))
          , Op = a(6361)
          , Fp = (0,
        ko.$j)((function(e) {
            return {
                show: e.Home.showRestoreDialog,
                selectedDevice: e.Device.selectedDevice,
                deviceList: e.Device.deviceList
            }
        }
        ))((function(e) {
            var n, a = e.show, r = e.selectedDevice, o = e.deviceList, i = e.dispatch;
            if (!a)
                return null;
            var c = (0,
            No.useState)(!1)
              , l = (0,
            s.Z)(c, 2)
              , u = l[0]
              , d = l[1]
              , p = (0,
            No.useState)(!1)
              , f = (0,
            s.Z)(p, 2)
              , v = f[0]
              , E = f[1]
              , g = {
                root: {
                    color: "#605E5C",
                    float: "right"
                }
            }
              , h = null === (n = o.find((function(e) {
                return e.workspaceId === r.workspaceId
            }
            ))) || void 0 === n ? void 0 : n.snapshots
              , b = es();
            (0,
            No.useEffect)((function() {
                h || i({
                    type: Qe,
                    payload: {
                        workspaceId: r.workspaceId
                    }
                })
            }
            ), []);
            var w = function() {
                E(!1),
                i({
                    type: X
                }),
                i({
                    type: Ne,
                    payload: r.workspaceId
                })
            }
              , y = (null === h || void 0 === h ? void 0 : h.map((function(e) {
                return {
                    key: e.id,
                    text: ns(e.createdDateTime)
                }
            }
            ))) || []
              , _ = (0,
            No.useState)()
              , C = (0,
            s.Z)(_, 2)
              , k = C[0]
              , I = C[1];
            if (!h)
                return No.createElement(Rp, {
                    titleAriaId: "restoreModal",
                    isOpen: a,
                    onDismiss: w
                }, No.createElement(Zu.h, {
                    styles: g,
                    iconProps: {
                        iconName: "Cancel"
                    },
                    ariaLabel: t("dialog-close-ariaLabel", {
                        dialogName: "restore"
                    }),
                    onClick: w
                }), No.createElement("div", {
                    className: "loading-container"
                }, No.createElement(xd.$, {
                    size: Nd.E.large
                }), No.createElement("div", {
                    style: {
                        marginTop: 11
                    }
                }, t("restore-dialog-fetcing"))));
            var S = [No.createElement(Rd.a, {
                id: "button-cancel",
                key: "button-cancel",
                className: m()("cancel-button", "modal-cancel-button"),
                onClick: w,
                ariaLabel: t("restore-dialog-cancel")
            }, t("restore-dialog-cancel")), No.createElement(Qd.K, {
                id: "button-restore",
                key: "button-restore",
                className: "action-button",
                disabled: !k || v || !u,
                onClick: function() {
                    Zv("click restore button"),
                    E(!0),
                    i({
                        type: xe,
                        payload: r.workspaceId
                    }),
                    i({
                        type: We,
                        payload: {
                            device: r,
                            actionType: fc.Restore,
                            hideDialogActionType: X,
                            snapshotId: k
                        }
                    })
                },
                ariaLabel: t("restore-dialog-restore")
            }, t("restore-dialog-restore"))]
              , x = b.reverseModalFooter ? S.slice().reverse() : S
              , N = t("restore-dialog-title", {
                workspaceName: r.workspaceName
            });
            return No.createElement(Rp, {
                titleAriaId: "restoreModal",
                isOpen: a,
                onDismiss: w,
                modalLabelText: N
            }, No.createElement("div", {
                className: "restore-modal-header device-action-modal-header"
            }, No.createElement("h1", null, No.createElement("span", {
                className: "dialog-h1 device-action-modal-header-title overflow-hidden text-ellipsis"
            }, N)), No.createElement(Zu.h, {
                styles: g,
                iconProps: {
                    iconName: "Cancel"
                },
                ariaLabel: t("dialog-close-ariaLabel", {
                    dialogName: "restore"
                }),
                onClick: w,
                className: m()("device-action-modal-close", "modal-close-button")
            })), 0 === h.length && No.createElement(Mp, null), No.createElement("div", {
                className: "device-action-modal-content"
            }, No.createElement("div", {
                className: "dialog-h2-container"
            }, No.createElement("h2", null, No.createElement("span", {
                className: "dialog-h2"
            }, t("restore-dialog-text-prefix")))), No.createElement("ul", {
                className: "description-list"
            }, No.createElement("li", null, t("restore-dialog-content-1")), No.createElement("li", null, t("restore-dialog-content-2"))), No.createElement("div", {
                className: "restore-text-suffix"
            }, t("restore-dialog-text-postfix")), No.createElement(Ap.X, {
                label: t("restore-dialog-text-checkbox"),
                id: "restore-dialog-checkbox",
                checked: u,
                onChange: function() {
                    d(!u)
                },
                styles: {
                    label: {
                        fontWeight: "bold"
                    }
                },
                disabled: 0 === h.length,
                className: "restore-dialog-checkbox device-action-modal-checkbox"
            }), No.createElement(Op.L, {
                id: "dropdown-restore",
                disabled: !u,
                onChange: function(e, t) {
                    var n;
                    I(null === t || void 0 === t || null === (n = t.key) || void 0 === n ? void 0 : n.toString())
                },
                ariaLabel: t("restore-dropdown-label"),
                placeholder: t("restore-dropdown-label"),
                options: y,
                styles: {
                    root: {
                        width: "315px",
                        marginTop: "16px"
                    },
                    dropdownItem: {
                        fontSize: "12px",
                        color: "#666666"
                    }
                }
            })), No.createElement("div", {
                className: "restore-action-buttons device-action-modal-footer"
            }, No.createElement(qu.K, {
                horizontal: !0,
                tokens: {
                    childrenGap: 10
                },
                className: "device-action-button-container"
            }, x)))
        }
        ));
        function Mp() {
            return No.createElement(Ld.c, {
                messageBarType: Rc.f.blocked,
                messageBarIconProps: {
                    iconName: "StatusErrorFull"
                },
                "aria-label": t("no-snapshots-message"),
                styles: {
                    root: {
                        marginTop: 16
                    }
                }
            }, t("no-snapshots-message"))
        }
        var Up = (0,
        ko.$j)((function(e) {
            return {
                show: e.Home.showSystemInformationDialog,
                selectedDevice: e.Device.selectedDevice,
                servicePlans: e.Device.servicePlanMap,
                lastLoginMap: e.Device.lastLoginMap,
                thirdPartyPartnerPlugin: e.ThirdPartyPartner.plugin
            }
        }
        ))((function(e) {
            var n = e.dispatch
              , a = e.show
              , r = e.selectedDevice
              , o = e.servicePlans
              , i = e.lastLoginMap
              , c = e.thirdPartyPartnerPlugin;
            if (!a)
                return null;
            var s = r.deviceId
              , l = r.servicePlanId
              , u = r.systemName
              , d = void 0 === u ? "" : u
              , p = r.installedRedirectorVersion
              , f = void 0 === p ? t("system-information-dialog-webrtc-redirector-version-unknown") : p
              , E = es()
              , g = o[l].displayName
              , h = function(e) {
                var t = null === e || void 0 === e ? void 0 : e.lastLoginTime;
                if (!t)
                    return "";
                try {
                    return ns(t)
                } catch (Sg) {
                    return console.log("getLastLoginString error", Sg),
                    ""
                }
            }(i[s])
              , b = {
                gapSpace: 0
            }
              , w = {
                root: {
                    display: "inline-block"
                }
            }
              , y = (0,
            rc.y0)({
                fontSize: 12,
                height: 12,
                width: 12,
                margin: "0 4px"
            })
              , _ = Ru((function(e) {
                var t = {
                    showWebRtcRedirectorVersion: !1
                };
                return e.Flighting.EnableSetAppIntelligenceData ? t.showWebRtcRedirectorVersion = !0 : t.showWebRtcRedirectorVersion = !1,
                t
            }
            ))
              , C = function() {
                n({
                    type: Y
                }),
                n({
                    type: Ne,
                    payload: r.workspaceId
                })
            }
              , k = t("system-information-dialog-title");
            return No.createElement(Rp, {
                titleAriaId: "systemInformationModal",
                isOpen: a,
                onDismiss: C,
                isBlocking: !1,
                width: 568,
                modalLabelText: k
            }, No.createElement("div", {
                className: "system-information-header device-action-modal-header"
            }, No.createElement("h1", null, No.createElement(Ml._, {
                className: "system-information-header-text device-action-modal-header-title",
                title: k
            }, k)), No.createElement(Zu.h, {
                iconProps: {
                    iconName: "Cancel"
                },
                styles: {
                    root: {
                        marginTop: 5,
                        marginLeft: 50
                    }
                },
                ariaLabel: t("dialog-close-ariaLabel", {
                    dialogName: "system information"
                }),
                onClick: C,
                className: m()("device-action-modal-close", "modal-close-button")
            })), No.createElement("div", {
                className: "system-information-content device-action-modal-content"
            }, function() {
                var e = [];
                return [{
                    data: {
                        title: t("system-information-dialog-device-name"),
                        text: d
                    },
                    flightingEnabled: !0
                }, {
                    data: {
                        title: t("system-information-dialog-cloudpc-name"),
                        titleHasDescription: !0,
                        titleDescription: t("system-information-dialog-cloudpc-name-tip"),
                        text: r.workspaceName
                    },
                    flightingEnabled: !0
                }, {
                    data: {
                        title: t("system-information-dialog-license"),
                        text: g,
                        textClassName: "license"
                    },
                    flightingEnabled: !0
                }, {
                    data: {
                        title: t("system-information-dialog-last-sign-in"),
                        text: h
                    },
                    flightingEnabled: !0,
                    pluginDisabled: null === c || void 0 === c ? void 0 : c.hideLastLogin(r)
                }, {
                    data: {
                        title: t("system-information-dialog-webrtc-redirector-version"),
                        text: f
                    },
                    flightingEnabled: _.showWebRtcRedirectorVersion
                }].filter((function(e) {
                    return e.flightingEnabled
                }
                )).filter((function(e) {
                    return !e.pluginDisabled
                }
                )).map((function(e) {
                    return e.data
                }
                )).forEach((function(t, n) {
                    var a = (0,
                    Mu.M)("tooltip" + n)
                      , r = t.title
                      , o = t.titleHasDescription
                      , i = void 0 !== o && o
                      , c = t.titleDescription
                      , s = t.text
                      , l = t.textClassName
                      , u = No.createElement("div", {
                        className: "system-information-content-cube",
                        key: "system-information-cube-".concat(n)
                    }, i ? No.createElement(Uu.G, {
                        content: c,
                        id: a,
                        calloutProps: b,
                        styles: w,
                        className: "system-information-content-tip",
                        directionalHint: v.b.rightBottomEdge
                    }, No.createElement("h2", null, No.createElement(Ml._, {
                        className: "system-information-content-title"
                    }, r), No.createElement(Fd.J, {
                        className: y,
                        iconName: "Info",
                        "aria-label": c,
                        "aria-describedby": a,
                        tabIndex: 0
                    }))) : No.createElement("h2", null, No.createElement(Ml._, {
                        className: "system-information-content-title"
                    }, r)), No.createElement(Ml._, {
                        className: ["system-information-content-text", l || ""].join(" ")
                    }, s));
                    e.push(u)
                }
                )),
                e
            }()), No.createElement("div", {
                className: "system-information-footer device-action-modal-footer"
            }, No.createElement(qu.K, {
                horizontal: !0,
                reversed: E.reverseModalFooter,
                tokens: {
                    childrenGap: 10
                },
                className: "device-action-button-container"
            }, No.createElement(Rd.a, {
                id: "button-close",
                className: m()("cancel-button", "modal-cancel-button"),
                onClick: C
            }, t("system-information-dialog-cancel")))))
        }
        ))
          , Zp = (0,
        ko.$j)((function(e) {
            return {
                show: e.Home.showTroubleshootDialog,
                selectedDevice: e.Device.selectedDevice
            }
        }
        ))((function(e) {
            var n = e.dispatch
              , a = e.show
              , r = e.selectedDevice;
            if (!a)
                return null;
            var o = es()
              , i = No.useState(!0)
              , c = (0,
            s.Z)(i, 2)
              , l = c[0]
              , u = c[1]
              , d = function() {
                n({
                    type: Q
                }),
                u(!0),
                n({
                    type: Ne,
                    payload: r.workspaceId
                })
            }
              , p = [No.createElement(Rd.a, {
                id: "button-cancel",
                key: "button-cancel",
                className: m()("cancel-button", "modal-cancel-button"),
                onClick: d,
                ariaLabel: t("troubleshoot-dialog-cancel")
            }, t("troubleshoot-dialog-cancel")), No.createElement(Qd.K, {
                id: "button-troubleshoot",
                key: "button-troubleshoot",
                className: "action-button",
                onClick: function() {
                    Zv("click troubleshoot button"),
                    n({
                        type: xe,
                        payload: r.workspaceId
                    }),
                    n({
                        type: We,
                        payload: {
                            device: r,
                            actionType: fc.Diagnose,
                            hideDialogActionType: Q
                        }
                    }),
                    u(!0)
                },
                disabled: l,
                ariaLabel: t("troubleshoot-dialog-start")
            }, t("troubleshoot-dialog-start"))]
              , f = o.reverseModalFooter ? p.slice().reverse() : p
              , v = t("troubleshoot-dialog-title", {
                workspaceName: r.workspaceName
            });
            return No.createElement(Rp, {
                titleAriaId: "troubleshootModal",
                isOpen: a,
                onDismiss: d,
                isBlocking: !1,
                modalLabelText: v
            }, No.createElement("div", {
                className: "troubleshoot-header device-action-modal-header"
            }, No.createElement("h1", null, No.createElement(Ml._, {
                className: "troubleshoot-header-text device-action-modal-header-title",
                title: v
            }, v)), No.createElement(Zu.h, {
                iconProps: {
                    iconName: "Cancel"
                },
                styles: {
                    root: {
                        color: "#605E5C",
                        marginTop: 5
                    }
                },
                ariaLabel: t("dialog-close-ariaLabel", {
                    dialogName: "troubleshooting"
                }),
                onClick: d,
                className: "device-action-modal-close"
            })), No.createElement("div", {
                className: "troubleshoot-content device-action-modal-content"
            }, No.createElement(Ml._, {
                className: "troubleshoot-content-prefix"
            }, t("troubleshoot-dialog-text-prefix")), No.createElement("div", {
                className: "troubleshoot-content-list"
            }, function() {
                for (var e = [], n = 1; n <= 3; n++)
                    e.push(No.createElement("li", {
                        key: "troubleshoot-dialog-content-".concat(n)
                    }, t("troubleshoot-dialog-content-".concat(n))));
                return No.createElement("ul", {
                    style: {
                        listStyleType: "disc",
                        paddingLeft: "25px"
                    }
                }, e)
            }()), No.createElement(Ml._, {
                className: "troubleshoot-content-postfix"
            }, t("troubleshoot-dialog-text-postfix")), No.createElement(Ap.X, {
                id: "checkbox-troubleshoot",
                label: t("troubleshoot-dialog-text-checkbox"),
                onChange: function(e, t) {
                    u(!t)
                },
                className: "troubleshoot-checkbox device-action-modal-checkbox"
            })), No.createElement("div", {
                className: "troubleshoot-footer device-action-modal-footer"
            }, No.createElement(qu.K, {
                horizontal: !0,
                tokens: {
                    childrenGap: 10
                },
                className: "device-action-button-container"
            }, f)))
        }
        ))
          , Hp = (0,
        ko.$j)((function(e) {
            return {
                userName: e.Home.userInfo.name
            }
        }
        ))((function(e) {
            var n = e.userName
              , a = e.hideWelcomeButton
              , r = Ru((function(e) {
                var t = {
                    welcomeLabelClass: "welcome-label-container"
                };
                return e.ClientVariant === b.Teams && (t.welcomeLabelClass = "welcome-label-container in-teams"),
                t
            }
            ))
              , o = t("homepage-mainTitle", {
                name: n
            });
            return No.createElement("div", {
                className: "welcome-wrapper"
            }, No.createElement("div", {
                className: r.welcomeLabelClass
            }, No.createElement("h1", null, No.createElement(Ml._, {
                className: "welcome-label",
                "aria-label": o
            }, o))), !a && No.createElement("div", {
                className: "welcome-button-container"
            }, No.createElement("div", {
                className: "w-40"
            })))
        }
        ))
          , Bp = {
            title: {
                padding: 0
            },
            inner: {
                paddingLeft: "16px"
            },
            subText: {
                fontSize: "14px",
                color: "#605E5C"
            },
            topButton: {
                paddingTop: "18px"
            },
            button: {},
            content: {},
            header: {},
            innerContent: {}
        }
          , Wp = a(7384)
          , Vp = a(2202)
          , Gp = a(9052)
          , zp = (0,
        ko.$j)((function(e) {
            return {
                show: e.Home.showWakeUpDialog,
                userInfo: e.Home.userInfo,
                selectedDevice: e.Device.selectedDevice,
                flexRDPStateMap: e.Device.flexRDPStateMap,
                flexRDPConnectingStateMap: e.Device.flexRDPConnectingStateMap
            }
        }
        ))((function(e) {
            var n, a = e.show, r = e.userInfo, o = e.selectedDevice, i = e.dispatch, c = e.flexRDPStateMap, l = e.flexRDPConnectingStateMap, u = o.directLaunchURL, d = void 0 === u ? "" : u, p = r.email, m = void 0 === p ? "" : p, f = r.env, v = void 0 === f ? at.INT : f, E = Xc(o), g = (0,
            No.useState)(void 0), h = (0,
            s.Z)(g, 2), b = h[0], w = h[1], y = (0,
            No.useState)(void 0), _ = (0,
            s.Z)(y, 2), C = _[0], k = _[1], I = E && (null === l || void 0 === l || null === (n = l[o.workspaceId]) || void 0 === n ? void 0 : n.text);
            (0,
            No.useEffect)((function() {
                E && (0,
                rc.fm)({
                    icons: {
                        "Spinner-Icon": No.createElement(xd.$, {
                            size: Nd.E.small
                        })
                    }
                })
            }
            ), [E]);
            var S = function() {
                Wt({
                    email: m,
                    directLaunchURL: d,
                    env: v
                })
            }
              , x = function() {
                i({
                    type: A
                })
            };
            function N() {
                i({
                    type: Me,
                    payload: {
                        workspaceId: o.workspaceId
                    }
                })
            }
            function R() {
                C && (clearInterval(C),
                k(void 0)),
                i({
                    type: Ae,
                    payload: {
                        workspaceId: o.workspaceId
                    }
                }),
                i({
                    type: Le,
                    payload: {
                        workspaceId: o.workspaceId,
                        accessState: void 0
                    }
                })
            }
            (0,
            No.useEffect)((function() {
                return R
            }
            ), [a]),
            (0,
            No.useEffect)((function() {
                var e;
                if (E) {
                    var n = null === c || void 0 === c || null === (e = c[o.workspaceId]) || void 0 === e ? void 0 : e.state;
                    if (n && b !== n)
                        switch (w(n),
                        n) {
                        case Ic.Active:
                        case Ic.InStandbyMode:
                            S(),
                            x();
                            break;
                        case Ic.Activating:
                            N();
                            var a = setInterval(N, 1e4);
                            k(a);
                            break;
                        case Ic.NoLicensesAvailable:
                            i({
                                type: Ke,
                                payload: {
                                    workspaceId: o.workspaceId,
                                    deviceStateTip: {
                                        type: xc.Error,
                                        message: t("flw-error-message-tip")
                                    }
                                }
                            }),
                            i({
                                type: xe,
                                payload: o.workspaceId
                            }),
                            x();
                            break;
                        default:
                            i({
                                type: Ke,
                                payload: {
                                    workspaceId: o.workspaceId,
                                    deviceStateTip: {
                                        type: xc.Error,
                                        message: t("flw-activation-failed-message-tip")
                                    }
                                }
                            }),
                            x()
                        }
                }
            }
            ), [c, o]);
            return No.createElement(Vp.V, {
                hidden: !a,
                onDismiss: x,
                dialogContentProps: {
                    type: Wp.i.close,
                    title: No.createElement("div", {
                        className: "header"
                    }, No.createElement("div", {
                        className: "border"
                    }), No.createElement("span", {
                        className: "title"
                    }, t("open-client-title"))),
                    closeButtonAriaLabel: t("dialog-close-ariaLabel", {
                        dialogName: "open in Remote Desktop app"
                    }),
                    styles: Bp
                },
                modalProps: {
                    className: "install-app-dialog"
                },
                maxWidth: "480px"
            }, No.createElement("div", null, No.createElement(Ml._, {
                "aria-label": t("open-client-description"),
                className: "inline"
            }, t("open-client-description")), No.createElement(Al.r, {
                "aria-label": t("open-client-link-text"),
                href: "https://docs.microsoft.com/windows-server/remote/remote-desktop-services/clients/windowsdesktop#install-the-client",
                target: "_blank",
                className: "inline"
            }, t("open-client-link-text")), No.createElement(Ml._, {
                "aria-label": t("period"),
                className: "inline"
            }, t("period"))), No.createElement(Gp.c, null, No.createElement(Qd.K, {
                id: "continue-button",
                onClick: function() {
                    if (Zv("continue to open in desktop app"),
                    !E)
                        return x(),
                        void S();
                    C || (w(void 0),
                    i({
                        type: Fe,
                        payload: {
                            workspaceId: o.workspaceId,
                            servicePlanId: o.servicePlanId
                        }
                    }),
                    i({
                        type: Pe,
                        payload: {
                            workspaceId: o.workspaceId
                        }
                    }))
                },
                text: I || t("open-client-button-text"),
                iconProps: I ? {
                    iconName: "Spinner-Icon"
                } : void 0,
                ariaLabel: I || t("open-client-button-text")
            })))
        }
        ));
        function Yp(e) {
            var n = e.step
              , a = e.total
              , r = e.showPrevious
              , o = e.showNext
              , i = e.closeWelcome;
            return n === a ? No.createElement(Qd.K, {
                className: "tour-button",
                onClick: i
            }, t("tour-buttonText")) : No.createElement(qu.K, {
                className: "button-stack"
            }, No.createElement(Rd.a, {
                className: "back-button",
                ariaLabel: t("back"),
                disabled: n <= 1,
                onClick: r
            }, t("back")), No.createElement(Qd.K, {
                className: "next-button",
                ariaLabel: t("next"),
                onClick: o
            }, t("next")))
        }
        var qp = a(2903)
          , Kp = {
            circle: {
                width: "22px",
                height: "22px",
                borderWidth: "3px"
            }
        };
        function jp(e) {
            var n = e.titles
              , a = e.descriptions
              , r = e.device
              , o = e.total
              , i = e.closeWelcome
              , c = (0,
            No.useState)(1)
              , l = (0,
            s.Z)(c, 2)
              , u = l[0]
              , d = l[1]
              , p = jc(r)
              , m = 1 === u
              , f = (null === r || void 0 === r ? void 0 : r.workspaceName) || "";
            return No.createElement(gp.m, {
                className: "welcome-layer"
            }, No.createElement(qp.a, {
                className: "welcome-overlay"
            }, No.createElement("div", {
                className: "introduction"
            }, No.createElement("div", {
                className: "user-profile-row"
            }, No.createElement("img", {
                hidden: !m,
                className: "user-profile-img",
                src: "img/profile.svg",
                role: "presentation"
            }), No.createElement(Ml._, {
                className: "welcome-intro-label step-".concat(u)
            }, n[u - 1])), No.createElement(Ml._, {
                className: "intro-text-label"
            }, a[u - 1]), No.createElement(Yp, {
                step: u,
                total: o,
                showPrevious: function() {
                    return d((function(e) {
                        return e - 1
                    }
                    ))
                },
                showNext: function() {
                    return d((function(e) {
                        return e + 1
                    }
                    ))
                },
                closeWelcome: i
            }), No.createElement("img", {
                className: "logo-img",
                src: "img/ms-logo.png",
                role: "presentation"
            })), No.createElement("div", {
                className: "vpc-status"
            }, No.createElement("img", {
                className: "status-img",
                src: "img/status-device.svg",
                role: "presentation"
            }), No.createElement(Ml._, {
                className: "status-label"
            }, p ? [No.createElement("span", {
                key: "text1"
            }, t("welcome-readyText1"), ", "), No.createElement("span", {
                className: "vpc1-span",
                key: "text2"
            }, f), No.createElement("span", {
                key: "text3"
            }, ", ", t("welcome-readyText2"))] : [No.createElement("span", {
                key: "text4"
            }, t("welcome-statusText")), No.createElement("span", {
                className: "vpc1-span new-line",
                key: "text5"
            }, f)]), p ? No.createElement(Fd.J, {
                iconName: "Completed",
                className: "info-icon",
                ariaLabel: t("icon")
            }) : No.createElement(xd.$, {
                size: Nd.E.large,
                styles: Kp,
                ariaLabel: t("loading-spinner")
            }))))
        }
        var Xp, $p, Qp, Jp, em = (0,
        ko.$j)((function(e) {
            return {
                userInfo: e.Home.userInfo,
                deviceList: e.Device.deviceList,
                serviceConfig: e.Home.serviceConfig
            }
        }
        ))((function(e) {
            var n = e.userInfo
              , a = e.deviceList
              , r = e.serviceConfig
              , o = e.closeWelcome
              , i = r.brandName
              , c = jc(null === a || void 0 === a ? void 0 : a[0])
              , s = (0,
            No.useMemo)((function() {
                return [t("welcome-introTitle1", {
                    brandName: i,
                    userName: n.name
                }), t("welcome-introTitle2"), t("welcome-introTitle3"), c ? t("welcome-introTitle5") : t("welcome-introTitle4")]
            }
            ), [i, c, n.name])
              , l = (0,
            No.useMemo)((function() {
                return [t("welcome-introText1", {
                    brandName: i
                }), t("welcome-introText2", {
                    brandName: i
                }), t("welcome-introText3"), c ? t("welcome-introText5") : t("welcome-introText4")]
            }
            ), [i, c]);
            return No.createElement(jp, {
                closeWelcome: o,
                titles: s,
                descriptions: l,
                device: null === a || void 0 === a ? void 0 : a[0],
                total: s.length
            })
        }
        )), tm = (0,
        ko.$j)((function(e) {
            return {
                deviceList: e.Device.deviceList,
                serviceConfig: e.Home.serviceConfig
            }
        }
        ))((function(e) {
            var n, a = e.deviceList, r = e.closeWelcome, o = e.serviceConfig, i = null === (n = Kc(a, [kc.Flex])) || void 0 === n ? void 0 : n[0], c = (0,
            No.useMemo)((function() {
                return [t("welcome-flw-introTitle1", {
                    brandName: o.brandName
                }), t("welcome-flw-introTitle2"), t("welcome-flw-introTitle3"), t("welcome-flw-introTitle4"), t("welcome-flw-introTitle5")]
            }
            ), [o.brandName]), s = (0,
            No.useMemo)((function() {
                return [t("welcome-flw-introText1"), t("welcome-flw-introText2"), t("welcome-flw-introText3", {
                    brandName: o.brandName
                }), t("welcome-flw-introText4", {
                    brandName: o.brandName
                }), t("welcome-flw-introText5")]
            }
            ), [o.brandName]);
            return No.createElement(jp, {
                closeWelcome: r,
                titles: c,
                descriptions: s,
                device: i,
                total: c.length
            })
        }
        )), nm = (0,
        ko.$j)((function(e) {
            return {
                show: e.Home.showWelcome,
                freType: e.Home.freType,
                userInfo: e.Home.userInfo,
                enableFlexFRE: e.EcsConfiguration.FlightingData.IWP_EnableFlexFRE
            }
        }
        ))((function(e) {
            var t = e.dispatch
              , n = e.show
              , a = e.freType
              , o = e.enableFlexFRE
              , i = (0,
            No.useMemo)((function() {
                var e;
                return e = {},
                (0,
                f.Z)(e, r.Default, em),
                (0,
                f.Z)(e, r.FLEX, tm),
                (0,
                f.Z)(e, r.FLEX | r.Default, tm),
                e
            }
            ), [])
              , c = function() {
                t({
                    type: L
                }),
                zs(a, r.Default) && (t({
                    type: de
                }),
                t({
                    type: ce,
                    payload: !1
                })),
                zs(a, r.FLEX) && (t({
                    type: pe
                }),
                t({
                    type: se,
                    payload: !1
                }))
            };
            return n ? function(e) {
                var t = function(e, t) {
                    return Ps.call(e, t)
                }(c, e);
                if (t)
                    return t;
                var n = o && i[e] || em;
                return No.createElement(n, {
                    closeWelcome: c
                })
            }(a) : null
        }
        )), am = a(7641), rm = a(3589), om = (0,
        ko.$j)((function(e) {
            return {
                variations: Tu(e),
                account: e.Home.userInfo,
                deviceList: e.Device.deviceList,
                isFirstLogIn: e.Home.showWelcome,
                selectedKey: e.Home.selectedNavKey,
                selectedDeviceNavKey: e.Home.selectedDeviceNavKey,
                homeNavdisabled: e.Home.homeNavDisabled,
                nativeClientHeaderHeight: e.NativeClient.config.header_height,
                complianceCheckInitialized: e.Ocv.complianceCheckInitialized,
                deviceListInitialized: e.Device.deviceListInitialized,
                homePageMessageBar: e.NativeClient.homepageMessageBar
            }
        }
        )), im = !1, cm = !0, sm = [], lm = function(e) {
            for (var t = e.prototype || e, n = Object.getOwnPropertyDescriptors(t), a = 0, r = Object.entries(n); a < r.length; a++) {
                var o = (0,
                s.Z)(r[a], 2)
                  , i = o[0];
                ip(i, o[1]) && Object.defineProperty(t, i, op(t, i, n[i]))
            }
        }(Xp = function(e) {
            (0,
            Ll.Z)(n, e);
            var t = (0,
            Ol.Z)(n);
            function n(e) {
                var a;
                (0,
                i.Z)(this, n),
                (a = t.call(this, e)).processVariations = function() {
                    var e, t, n, r = a.props.variations, o = r.Flighting, i = r.ClientVariant, c = Gu.call(Vu), s = a.props.nativeClientHeaderHeight;
                    i === b.Teams ? (e = "0px",
                    t = "0px") : i === b.NativeWindows ? (a.props.homePageMessageBar && a.props.homePageMessageBar !== Vn.AVDAppAlreadyInstalled ? (e = "48px 0 0 50px",
                    s += 44) : e = "0 0 0 50px",
                    t = "0px") : (e = "50px 0 0 68px",
                    t = "50px 68px 0 68px"),
                    i === b.NativeWindows ? (n = "calc(100vh - ".concat(s, "px)"),
                    cm = !1) : n = "100vh",
                    $p = {
                        padding: e
                    },
                    Qp = {
                        padding: t
                    },
                    Jp = {
                        minHeight: n
                    },
                    o.DSSAdminManagement_IWP && !c.hideDSSAdmin && (im = !0),
                    c.hideLeftNavigation && (cm = !1),
                    c.customDialogs && (sm = c.customDialogs)
                }
                ,
                a.onRenderItemLink = function(e) {
                    return function(t, n) {
                        return t && n ? No.createElement("span", {
                            className: "home-pivot-item"
                        }, e, n((0,
                        l.Z)((0,
                        l.Z)({}, t), {}, {
                            itemIcon: void 0
                        }))) : null
                    }
                }
                ,
                a.DownloadPage = [No.createElement("div", {
                    className: "download-container",
                    key: "download",
                    style: Qp
                }, No.createElement(qd, null)), No.createElement(lp, {
                    key: "FeedURLDialog"
                }), No.createElement(tp, {
                    key: "DownloadDialog"
                })],
                a.showPage = function(e) {
                    switch (e) {
                    case Rn.Home:
                        return a.renderHomePage();
                    case Rn.Download:
                        return a.DownloadPage
                    }
                }
                ,
                a.handleChangeDeviceNav = function(e) {
                    e && a.props.dispatch({
                        type: _,
                        payload: e
                    })
                }
                ,
                a.handleCheckMacConsent = function() {
                    a.props.dispatch({
                        type: vn
                    })
                }
                ;
                var r = a.props.t;
                return window.t = r,
                a
            }
            return (0,
            c.Z)(n, [{
                key: "componentDidMount",
                value: function() {
                    this.processVariations();
                    var e = this.props.dispatch;
                    this.props.homeNavdisabled || e({
                        type: we,
                        payload: {
                            isStartUp: !0
                        }
                    }),
                    !this.props.homeNavdisabled && this.props.complianceCheckInitialized && this.props.deviceListInitialized && e({
                        type: Iu
                    })
                }
            }, {
                key: "componentDidUpdate",
                value: function(e) {
                    (0,
                    ko.wU)(e.variations, this.props.variations) && e.nativeClientHeaderHeight === this.props.nativeClientHeaderHeight && e.homePageMessageBar === this.props.homePageMessageBar || (this.processVariations(),
                    this.forceUpdate());
                    var t = this.props.dispatch;
                    this.props.homeNavdisabled || !this.props.complianceCheckInitialized || !this.props.deviceListInitialized || !e.homeNavdisabled && e.complianceCheckInitialized && e.deviceListInitialized || t({
                        type: Iu
                    })
                }
            }, {
                key: "renderHomePage",
                value: function() {
                    var e = this
                      , t = this.props.deviceList && this.props.deviceList.length > 0;
                    return No.createElement(No.Fragment, null, No.createElement("div", {
                        className: "home",
                        key: "Home",
                        style: $p
                    }, No.createElement(qu.K, {
                        verticalFill: !0,
                        role: "main"
                    }, No.createElement(Hp, null), No.createElement(qu.K, {
                        horizontal: !0,
                        horizontalAlign: "center",
                        className: "home-stack"
                    }, No.createElement("div", {
                        className: "home-content"
                    }, No.createElement("div", {
                        className: "home-width-spacer"
                    }), No.createElement(Ku, null), im && this.props.account.isDSS && (qt(this.props.account) || Kt(this.props.account)) ? No.createElement(am.o, {
                        className: "home-pivot",
                        selectedKey: t ? this.props.selectedDeviceNavKey : Tn.Organization,
                        onLinkClick: function(t) {
                            (null === t || void 0 === t ? void 0 : t.props.itemKey) === Tn.Organization && e.handleCheckMacConsent(),
                            e.handleChangeDeviceNav(null === t || void 0 === t ? void 0 : t.props.itemKey)
                        }
                    }, t ? No.createElement(rm.M, {
                        itemKey: Tn.Own,
                        headerText: this.props.t("workspace-label"),
                        onRenderItemLink: this.onRenderItemLink(No.createElement(Wu.Q, {
                            className: "pcs-img",
                            src: "/img/pcs.svg",
                            "aria-hidden": "true",
                            role: "presentation"
                        }))
                    }, No.createElement(Ud, {
                        showWorkspaceLabel: !1
                    })) : null, No.createElement(rm.M, {
                        itemKey: Tn.Organization,
                        headerText: this.props.t("MAC-tab-label"),
                        onRenderItemLink: this.onRenderItemLink(No.createElement(Wu.Q, {
                            className: "org-pcs-img",
                            src: "/img/org-pcs.svg",
                            "aria-hidden": "true",
                            role: "presentation"
                        })),
                        alwaysRender: !0
                    }, No.createElement(_p, null))) : No.createElement(Ud, null))))), n.renderDialogs(), sm)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.isFirstLogIn
                      , n = e.selectedKey;
                    return t ? No.createElement(nm, null) : No.createElement("div", {
                        className: "top-container"
                    }, cm && No.createElement(Ep, {
                        key: "home-nav"
                    }), No.createElement(bp, null), No.createElement("div", {
                        className: "Home",
                        style: Jp
                    }, this.showPage(n)))
                }
            }], [{
                key: "renderDialogs",
                value: function() {
                    return No.createElement(No.Fragment, null, No.createElement(zp, {
                        key: "WakeUpDialog"
                    }), No.createElement(ed, {
                        key: "Bubble"
                    }), No.createElement(Dp, {
                        key: "ResetDialog"
                    }), No.createElement(Pp, {
                        key: "RenameDialog"
                    }), No.createElement(Lp, {
                        key: "RestartDialog"
                    }), No.createElement(Fp, {
                        key: "RestoreDialog"
                    }), No.createElement(Up, {
                        key: "SystemInformationDialog"
                    }), No.createElement(xp, {
                        key: "ProvisionFailDialog"
                    }), No.createElement(Zp, {
                        key: "TroubleshootDialog"
                    }))
                }
            }]),
            n
        }(No.Component)) || Xp, um = om(zl()(lm)), dm = new u.SyncBailHook(["t", "headerHeight"]), pm = new u.SyncWaterfallHook(["routes"]), mm = a(5786), fm = function() {
            return "".concat(userInfo.uid, ".tenantEnvironment_v1")
        }, vm = function() {
            try {
                var e = localStorage.getItem(fm());
                if (e) {
                    var t = JSON.parse(e);
                    if (t.timestamp > Date.now() - 864e5)
                        return t.value;
                    localStorage.removeItem(fm())
                }
            } catch (n) {
                localStorage.removeItem(fm()),
                console.error(n)
            }
        }, Em = function() {
            if (!ao())
                return {
                    isFetched: !0
                };
            var e = (0,
            No.useMemo)(vm, [userInfo.uid])
              , t = (0,
            mm.useQuery)(["userTenantEnviroment"], (function() {
                return ji()
            }
            ), {
                enabled: !e
            })
              , n = (0,
            No.useState)(void 0)
              , a = (0,
            s.Z)(n, 2)
              , r = a[0]
              , o = a[1]
              , i = (0,
            No.useState)(void 0)
              , c = (0,
            s.Z)(i, 2)
              , l = c[0]
              , u = c[1]
              , d = function(e) {
                try {
                    var t = /env=(.*),su=(.*),eusu=(.*)/g.exec(e);
                    t && t[1] ? (userInfo.tenantEnvironment = t[1],
                    o(t[1])) : (o(void 0),
                    userInfo.tenantEnvironment = void 0),
                    t && t[3] && (u("True" === t[3]),
                    userInfo.isEU = "True" === t[3])
                } catch (Sg) {
                    o(void 0),
                    userInfo.tenantEnvironment = void 0,
                    userInfo.isEU = !0
                }
            };
            return (0,
            No.useEffect)((function() {
                !1 === l ? xv() : Sv()
            }
            ), [l]),
            (0,
            No.useEffect)((function() {
                if (e)
                    d(e);
                else if (t.isFetched && t.data)
                    try {
                        var n, a = (null === (n = t.data.headers) || void 0 === n ? void 0 : n.get("preference-applied")) || "";
                        a && (d(a),
                        function(e) {
                            if (e)
                                try {
                                    localStorage.setItem(fm(), JSON.stringify({
                                        value: e,
                                        timestamp: Date.now()
                                    }))
                                } catch (Sg) {
                                    console.error(Sg)
                                }
                        }(a))
                    } catch (Sg) {
                        console.error(Sg)
                    }
            }
            ), [e, t.data, t.isFetched]),
            {
                userTenantEnviroment: r,
                isFetched: t.isFetched || !!e,
                isEU: l
            }
        }, gm = a(8103), hm = a(3573), bm = (0,
        ko.$j)((function(e) {
            return {
                loginFinished: e.Home.loginFinished,
                showLoadingPage: e.Home.showLoadingPage,
                flightingFinished: e.EcsConfiguration.flightingFinished,
                flighting: e.EcsConfiguration.FlightingData,
                controlFinished: e.EcsConfiguration.controlFinished,
                nativeClientHeaderHeight: e.NativeClient.config.header_height
            }
        }
        ))(zl()((function(e) {
            var t = e.tReady
              , n = e.loginFinished
              , a = e.showLoadingPage
              , r = e.flightingFinished
              , o = e.flighting
              , i = e.controlFinished
              , c = e.dispatch
              , s = e.t
              , l = function(e) {
                var t, n = (0,
                ko.v9)(Zr).homepageMessageBar, a = null === (t = dr.config) || void 0 === t ? void 0 : t.header_height;
                return n !== Vn.AVDAppInstallCompleted && n !== Vn.AVDAppInstallErrored && n !== Vn.AVDAppInstalling || (a += 48),
                dm.call(e, a)
            }(s);
            No.useEffect((function() {
                (null === l || void 0 === l ? void 0 : l.contentEffect) && l.contentEffect(c)
            }
            ), []),
            No.useEffect((function() {
                (null === l || void 0 === l ? void 0 : l.loadingEffect) && l.loadingEffect(a)
            }
            ), [a]);
            var u = (0,
            No.useMemo)((function() {
                return pm.call({
                    routes: []
                })
            }
            ), []).routes
              , d = Em().isFetched;
            No.useEffect((function() {
                d && c(r ? {
                    type: gt
                } : {
                    type: vt
                })
            }
            ), [c, r, d]),
            No.useEffect((function() {
                d && (i || c({
                    type: mt
                }))
            }
            ), [c, i, d]),
            No.useEffect((function() {
                r && c({
                    type: xu
                })
            }
            ), [r]);
            var p = Ru((function(e) {
                var t = e.Flighting
                  , n = e.ClientVariant
                  , a = {
                    inTeams: !1,
                    enableIWPInTeams: !1
                };
                return t.EnableTeamsApp_IWP && (a.enableIWPInTeams = !0),
                n === b.Teams && (a.inTeams = !0),
                a
            }
            ), [c]);
            return No.useEffect((function() {
                p.enableIWPInTeams ? !p.inTeams && (window.parent === window.self && window.nativeInterface || "embedded-page-container" === window.name || "extension-tab-frame" === window.name) && (console.log("Teams flighting enabled. In Teams."),
                c({
                    type: re,
                    payload: !0
                })) : console.log("Teams flighting disabled")
            }
            ), [p.enableIWPInTeams, p.inTeams, c]),
            No.useEffect((function() {
                p.inTeams && (console.log("initializing teams"),
                hm.initialize())
            }
            ), [p.inTeams]),
            No.createElement("div", {
                className: ["content", a ? "noshow" : "show"].join(" "),
                style: null === l || void 0 === l ? void 0 : l.contentStyles
            }, n && t && r && [No.createElement(gm.F0, {
                history: Ko,
                key: "router"
            }, No.createElement(gm.rs, null, No.createElement(gm.AW, {
                exact: !0,
                path: "/"
            }, l ? l.component : !p.inTeams && No.createElement(Lu, {
                key: "header",
                t: s
            }), No.createElement(nu, {
                key: "errorContainer"
            }, No.createElement(um, null)), No.createElement("div", {
                className: "A11y-block"
            }, No.createElement(Dl, null))), o.SPA_REDIRECT_OPT_IWP ? No.createElement(gm.AW, {
                exact: !0,
                path: "/spa-signin-oidc"
            }, No.createElement("div", null)) : null, u, No.createElement(gm.AW, {
                path: "*"
            }, No.createElement(gm.l_, {
                to: "/"
            }))))])
        }
        ))), wm = a(6787), ym = a(5387), _m = a(2348), Cm = Kn().mark(Pm), km = Kn().mark(Am), Im = Kn().mark(Dm), Sm = Kn().mark(Lm), xm = Kn().mark(Om), Nm = Vt(), Rm = "IWP_", Tm = "simplified-user-list";
        function Pm() {
            var e, t, n, a, r;
            return Kn().wrap((function(o) {
                for (; ; )
                    switch (o.prev = o.next) {
                    case 0:
                        return o.next = 2,
                        (0,
                        Wr.Ys)(Pr);
                    case 2:
                        if (e = o.sent,
                        t = null,
                        no()) {
                            o.next = 30;
                            break
                        }
                        return o.next = 7,
                        (0,
                        Wr.RE)(Bi);
                    case 7:
                        if (n = o.sent,
                        !Po(n) || !e.MFA_IWP) {
                            o.next = 27;
                            break
                        }
                        a = null;
                    case 10:
                        if (a) {
                            o.next = 25;
                            break
                        }
                        return o.next = 13,
                        (0,
                        Wr.qn)(vn);
                    case 13:
                        return o.prev = 13,
                        o.next = 16,
                        (0,
                        Wr.RE)(Do, [Jr]);
                    case 16:
                        (a = o.sent) && a.accessToken && a.expiresOn && (t = {
                            token: a.accessToken,
                            expiresOn: +a.expiresOn
                        }),
                        o.next = 23;
                        break;
                    case 20:
                        o.prev = 20,
                        o.t0 = o.catch(13),
                        console.error(o.t0);
                    case 23:
                        o.next = 10;
                        break;
                    case 25:
                        o.next = 28;
                        break;
                    case 27:
                        n.success && (t = n.data);
                    case 28:
                        o.next = 34;
                        break;
                    case 30:
                        return o.next = 32,
                        (0,
                        Wr.RE)(Oo, {
                            scopes: [Jr]
                        });
                    case 32:
                        r = o.sent,
                        t = {
                            token: r.accessToken,
                            expiresOn: +r.expiresOn
                        };
                    case 34:
                        if (!t) {
                            o.next = 42;
                            break
                        }
                        return t.token = "Bearer ".concat(t.token),
                        o.next = 38,
                        (0,
                        Wr.gz)({
                            type: ln,
                            payload: {
                                token: t
                            }
                        });
                    case 38:
                        return o.next = 40,
                        (0,
                        Wr.gw)(6e4);
                    case 40:
                        return o.next = 42,
                        (0,
                        Wr.gz)({
                            type: dn,
                            payload: {
                                exp: t.expiresOn
                            }
                        });
                    case 42:
                    case "end":
                        return o.stop()
                    }
            }
            ), Cm, null, [[13, 20]])
        }
        function Am(e) {
            var t, n, a, r;
            return Kn().wrap((function(o) {
                for (; ; )
                    switch (o.prev = o.next) {
                    case 0:
                        if (t = e.payload.exp,
                        n = Date.parse(t),
                        a = 24e4,
                        !((r = n - Date.now()) > a)) {
                            o.next = 7;
                            break
                        }
                        return o.next = 7,
                        (0,
                        Wr.gw)(r - a);
                    case 7:
                        return o.next = 9,
                        (0,
                        Wr.gz)({
                            type: un
                        });
                    case 9:
                    case "end":
                        return o.stop()
                    }
            }
            ), km)
        }
        function Dm(e, t) {
            var n, a, r, o, i, c, s, l, u, d;
            return Kn().wrap((function(p) {
                for (; ; )
                    switch (p.prev = p.next) {
                    case 0:
                        return n = t.payload.entry,
                        p.prev = 1,
                        p.next = 4,
                        (0,
                        Wr.gz)({
                            type: un
                        });
                    case 4:
                        return p.next = 6,
                        (0,
                        Wr.qn)(ln);
                    case 6:
                        if (!(a = p.sent)) {
                            p.next = 39;
                            break
                        }
                        if (!(r = a.payload.token) || !r.token) {
                            p.next = 39;
                            break
                        }
                        return p.next = 12,
                        (0,
                        Wr.RE)(Lm, r.token, e);
                    case 12:
                        if (!(o = p.sent) || !o.result) {
                            p.next = 39;
                            break
                        }
                        return p.next = 16,
                        (0,
                        Wr.RE)(wm.zV, {
                            featureName: Tm,
                            localMode: !1
                        });
                    case 16:
                        return p.next = 18,
                        (0,
                        Wr.RE)(wm.A8, {
                            featureName: Tm,
                            setAdditionalDataSource: function(e) {
                                e("centro.hvc.feature", yp),
                                e("centro.hvc.userdetailpanel", (0,
                                ym.R)({
                                    userDetailPanelType: _m.R.Simplified
                                }))
                            }
                        });
                    case 18:
                        return i = p.sent,
                        p.next = 21,
                        (0,
                        Wr.RE)(i.main, n);
                    case 21:
                        return c = p.sent,
                        p.next = 24,
                        (0,
                        Wr.rM)(Kn().mark((function e() {
                            return Kn().wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2,
                                        (0,
                                        Wr.qn)(mn);
                                    case 2:
                                        return e.next = 4,
                                        c();
                                    case 4:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e)
                        }
                        )));
                    case 24:
                        if (!(s = o.hvcHistoryChannel)) {
                            p.next = 39;
                            break
                        }
                        return p.next = 28,
                        (0,
                        Wr.qn)(s);
                    case 28:
                        return l = p.sent,
                        p.next = 31,
                        (0,
                        Wr.Ys)(Or);
                    case 31:
                        if (u = p.sent,
                        !l) {
                            p.next = 39;
                            break
                        }
                        return (d = u.initialPathname) && l.push(d),
                        p.next = 37,
                        (0,
                        Wr.gz)({
                            type: fn,
                            payload: void 0
                        });
                    case 37:
                        return p.next = 39,
                        (0,
                        Wr.Fm)(fn, Kn().mark((function e(t) {
                            return Kn().wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        if (!l || !t.payload) {
                                            e.next = 4;
                                            break
                                        }
                                        return l.push(t.payload),
                                        e.next = 4,
                                        (0,
                                        Wr.gz)({
                                            type: fn,
                                            payload: void 0
                                        });
                                    case 4:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e)
                        }
                        )));
                    case 39:
                        p.next = 44;
                        break;
                    case 41:
                        p.prev = 41,
                        p.t0 = p.catch(1),
                        Vv({
                            error: p.t0,
                            errorType: ut.MACError,
                            key: "mountSimpleUserList",
                            msg: "Fail to setup simplified user list"
                        });
                    case 44:
                    case "end":
                        return p.stop()
                    }
            }
            ), Im, null, [[1, 41]])
        }
        function Lm(e, t) {
            var n, a, r, o;
            return Kn().wrap((function(i) {
                for (; ; )
                    switch (i.prev = i.next) {
                    case 0:
                        if (e) {
                            i.next = 2;
                            break
                        }
                        return i.abrupt("return", {
                            result: !1,
                            hvcHistoryChannel: null
                        });
                    case 2:
                        return i.next = 4,
                        (0,
                        Wr.Ys)(Lr);
                    case 4:
                        return n = i.sent,
                        i.next = 7,
                        (0,
                        Wr.Ys)(Pr);
                    case 7:
                        return a = i.sent,
                        o = (0,
                        ge.GG)((function(e) {
                            return r = e,
                            function() {
                                r = void 0
                            }
                        }
                        ), ge.Ef.dropping(1)),
                        i.next = 11,
                        (0,
                        wm.j2)({
                            centroEnvironmentBaseUrl: xn,
                            centroAdapters: {
                                runtimeStaticConfig: {
                                    hostName: "Windows365Portal",
                                    locale: n,
                                    appId: Nm,
                                    perfPrefix: Rm
                                },
                                historyConfig: {
                                    callback: function(e) {
                                        r && r(e),
                                        Ko.push("".concat(window.location.pathname, "#/"))
                                    }
                                },
                                request: function(n) {
                                    var r, o, i, c = n.replaceHeader, s = a.MAC_Refresh_Token_IWP ? null === (r = t()) || void 0 === r || null === (o = r.Mac) || void 0 === o || null === (i = o.token) || void 0 === i ? void 0 : i.token : e, u = {};
                                    return c && (u = c({
                                        headers: {
                                            "content-type": "application/json;charset=UTF-8",
                                            Authorization: s
                                        }
                                    })),
                                    {
                                        promise: fetch("".concat(xn).concat(n.url), {
                                            method: n.type,
                                            headers: new Headers((0,
                                            l.Z)({}, u)),
                                            body: JSON.stringify(n.data)
                                        }).then((function(e) {
                                            return e.json()
                                        }
                                        )).catch((function(e) {
                                            return {}
                                        }
                                        )).then((function(e) {
                                            return {
                                                statusCode: 200,
                                                data: e
                                            }
                                        }
                                        )),
                                        cancel: function() {}
                                    }
                                }
                            }
                        });
                    case 11:
                        return i.abrupt("return", {
                            result: !0,
                            hvcHistoryChannel: o
                        });
                    case 12:
                    case "end":
                        return i.stop()
                    }
            }
            ), Sm)
        }
        function Om() {
            return Kn().wrap((function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2,
                        (0,
                        Wr.gz)({
                            type: fn,
                            payload: "//:/adduser"
                        });
                    case 2:
                        return e.next = 4,
                        (0,
                        Wr.gz)({
                            type: _,
                            payload: Tn.Organization
                        });
                    case 4:
                    case "end":
                        return e.stop()
                    }
            }
            ), xm)
        }
        var Fm = Kn().mark(Bm)
          , Mm = Kn().mark(Wm)
          , Um = Kn().mark(Vm)
          , Zm = Kn().mark(Gm)
          , Hm = Kn().mark(zm);
        function Bm(e) {
            var t, n, a, r;
            return Kn().wrap((function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        if (!$n.Gz()) {
                            e.next = 46;
                            break
                        }
                        return e.prev = 1,
                        e.next = 4,
                        (0,
                        Wr.RE)(La);
                    case 4:
                        return t = e.sent,
                        e.next = 7,
                        (0,
                        Wr.gz)({
                            type: ur,
                            payload: t
                        });
                    case 7:
                        return e.next = 9,
                        (0,
                        Wr.RE)(Aa, .2);
                    case 9:
                        if (!e.sent) {
                            e.next = 16;
                            break
                        }
                        return e.next = 13,
                        (0,
                        Wr.RE)(Ma);
                    case 13:
                        n = e.sent,
                        e.next = 32;
                        break;
                    case 16:
                        return e.prev = 16,
                        e.next = 19,
                        (0,
                        Wr.RE)(Sa);
                    case 19:
                        a = e.sent,
                        e.next = 26;
                        break;
                    case 22:
                        throw e.prev = 22,
                        e.t0 = e.catch(16),
                        Vv({
                            error: new Error(ut.PIEError),
                            errorType: ut.PIEError,
                            key: "PIE",
                            msg: "Failed to get initial settings. Error:" + e.t0
                        }),
                        e.t0;
                    case 26:
                        return e.next = 28,
                        (0,
                        Wr.Ys)(Fr);
                    case 28:
                        return r = e.sent,
                        e.next = 31,
                        (0,
                        Wr.RE)(Za, a, r);
                    case 31:
                        n = e.sent;
                    case 32:
                        return e.next = 34,
                        (0,
                        Wr.gz)({
                            type: Ba,
                            payload: n
                        });
                    case 34:
                        return e.next = 36,
                        (0,
                        Wr.gz)({
                            type: Wa,
                            payload: !0
                        });
                    case 36:
                        e.next = 44;
                        break;
                    case 38:
                        return e.prev = 38,
                        e.t1 = e.catch(1),
                        e.next = 42,
                        (0,
                        Wr.gw)(1e3);
                    case 42:
                        return e.next = 44,
                        (0,
                        Wr.gz)({
                            type: Ha
                        });
                    case 44:
                        e.next = 50;
                        break;
                    case 46:
                        return e.next = 48,
                        (0,
                        Wr.gw)(1e3);
                    case 48:
                        return e.next = 50,
                        (0,
                        Wr.gz)({
                            type: Ha
                        });
                    case 50:
                    case "end":
                        return e.stop()
                    }
            }
            ), Fm, null, [[1, 38], [16, 22]])
        }
        function Wm(e) {
            var t;
            return Kn().wrap((function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        if (!$n.Gz()) {
                            e.next = 22;
                            break
                        }
                        return e.prev = 1,
                        e.next = 4,
                        (0,
                        Wr.RE)(qi);
                    case 4:
                        if ((t = e.sent).statusCode != dt.Ok) {
                            e.next = 10;
                            break
                        }
                        return e.next = 8,
                        (0,
                        Wr.gz)({
                            type: Xa,
                            payload: t.data
                        });
                    case 8:
                        e.next = 12;
                        break;
                    case 10:
                        return e.next = 12,
                        (0,
                        Wr.gz)({
                            type: Xa,
                            payload: void 0
                        });
                    case 12:
                        e.next = 20;
                        break;
                    case 14:
                        return e.prev = 14,
                        e.t0 = e.catch(1),
                        e.next = 18,
                        (0,
                        Wr.gw)(5e3);
                    case 18:
                        return e.next = 20,
                        (0,
                        Wr.gz)({
                            type: $a
                        });
                    case 20:
                        e.next = 26;
                        break;
                    case 22:
                        return e.next = 24,
                        (0,
                        Wr.gw)(5e3);
                    case 24:
                        return e.next = 26,
                        (0,
                        Wr.gz)({
                            type: $a
                        });
                    case 26:
                    case "end":
                        return e.stop()
                    }
            }
            ), Mm, null, [[1, 14]])
        }
        function Vm(e) {
            var t, n, a;
            return Kn().wrap((function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        if (!$n.Gz()) {
                            e.next = 23;
                            break
                        }
                        return e.next = 3,
                        (0,
                        Wr.RE)(Aa, .3);
                    case 3:
                        if (t = e.sent,
                        n = window.SSO,
                        !t || !n) {
                            e.next = 23;
                            break
                        }
                        return e.next = 8,
                        (0,
                        Wr.RE)(n.getToken);
                    case 8:
                        return a = e.sent,
                        e.prev = 9,
                        e.next = 12,
                        (0,
                        Wr.RE)(n.logout);
                    case 12:
                        return e.next = 14,
                        (0,
                        Wr.RE)(wa);
                    case 14:
                        e.next = 23;
                        break;
                    case 16:
                        return e.prev = 16,
                        e.t0 = e.catch(9),
                        Vv({
                            error: new Error(ut.PIEError),
                            errorType: ut.PIEError,
                            key: "PIE",
                            msg: "Failed to sign out. Error:" + e.t0
                        }),
                        e.next = 21,
                        (0,
                        Wr.gw)(1e3);
                    case 21:
                        return e.next = 23,
                        (0,
                        Wr.RE)(n.setToken, a);
                    case 23:
                    case "end":
                        return e.stop()
                    }
            }
            ), Um, null, [[9, 16]])
        }
        function Gm(e) {
            var t;
            return Kn().wrap((function(n) {
                for (; ; )
                    switch (n.prev = n.next) {
                    case 0:
                        return n.next = 3,
                        (0,
                        Wr.qn)(Ja);
                    case 3:
                        if ((t = n.sent).payload.workspaceId !== e || t.payload.status !== Gn.Connected && t.payload.status !== Gn.Disconnected) {
                            n.next = 6;
                            break
                        }
                        return n.abrupt("return");
                    case 6:
                        n.next = 0;
                        break;
                    case 8:
                    case "end":
                        return n.stop()
                    }
            }
            ), Zm)
        }
        function zm(e) {
            var n, a, r, o;
            return Kn().wrap((function(i) {
                for (; ; )
                    switch (i.prev = i.next) {
                    case 0:
                        if (n = e.payload,
                        a = {
                            status: Gn.Connected,
                            avdActivityId: t("native-client-activity-id-unavailable"),
                            timestamp: "",
                            workspaceId: n
                        },
                        r = {
                            status: Gn.Disconnected,
                            avdActivityId: t("native-client-activity-id-unavailable"),
                            timestamp: "",
                            workspaceId: n,
                            statusSymbolic: "CustomTimeout"
                        },
                        !$n.Gz()) {
                            i.next = 26;
                            break
                        }
                        return i.next = 6,
                        (0,
                        Wr.RE)(Aa, .6);
                    case 6:
                        if (!i.sent) {
                            i.next = 20;
                            break
                        }
                        return 6e4,
                        i.next = 11,
                        (0,
                        Wr.S3)({
                            success: (0,
                            Wr.RE)(Gm, n),
                            timeout: (0,
                            Wr.gw)(6e4)
                        });
                    case 11:
                        if (o = i.sent,
                        !o.timeout) {
                            i.next = 18;
                            break
                        }
                        return r.timestamp = (new Date).toISOString(),
                        i.next = 17,
                        (0,
                        Wr.gz)({
                            type: Ja,
                            payload: r
                        });
                    case 17:
                        Vv({
                            error: new Error(ut.PIEError),
                            errorType: ut.PIEError,
                            key: "PIE",
                            msg: "Timeout: Did not receive connected/disconnected status after starting connection"
                        });
                    case 18:
                        i.next = 26;
                        break;
                    case 20:
                        return 15e3,
                        i.next = 23,
                        (0,
                        Wr.gw)(15e3);
                    case 23:
                        return a.timestamp = (new Date).toISOString(),
                        i.next = 26,
                        (0,
                        Wr.gz)({
                            type: Ja,
                            payload: a
                        });
                    case 26:
                    case "end":
                        return i.stop()
                    }
            }
            ), Hm)
        }
        var Ym = Kn().mark(jm)
          , qm = Kn().mark(Xm)
          , Km = "ocv-inapp-feedback";
        function jm() {
            var e, t, n;
            return Kn().wrap((function(a) {
                for (; ; )
                    switch (a.prev = a.next) {
                    case 0:
                        return a.next = 2,
                        (0,
                        Wr.Ys)(Lr);
                    case 2:
                        return e = a.sent,
                        a.next = 5,
                        (0,
                        Wr.Ys)(Pr);
                    case 5:
                        return t = a.sent,
                        n = {
                            centroEnvironmentBaseUrl: t.IWP_NPS_EnableProductionAppId ? "https://admin.microsoft.com" : "https://admin-ignite.microsoft.com",
                            centroAdapters: {
                                runtimeStaticConfig: {
                                    hostName: Mo,
                                    locale: e,
                                    appId: Nm,
                                    perfPrefix: Rm
                                },
                                request: function() {}
                            },
                            centroHvcData: "",
                            forHostVersion: t.IWP_Feedback_V2_Host_Version_V2 ? "v2" : void 0
                        },
                        a.next = 9,
                        (0,
                        Wr.RE)(wm.j2, n);
                    case 9:
                    case "end":
                        return a.stop()
                    }
            }
            ), Ym)
        }
        function Xm(e) {
            var t, n;
            return Kn().wrap((function(a) {
                for (; ; )
                    switch (a.prev = a.next) {
                    case 0:
                        return t = function(e) {
                            e("centro.hvc.feedback.initOptions", ku)
                        }
                        ,
                        a.next = 3,
                        (0,
                        Wr.RE)(jm);
                    case 3:
                        return a.next = 5,
                        (0,
                        wm.zV)({
                            featureName: Km
                        });
                    case 5:
                        return a.next = 7,
                        (0,
                        wm.A8)({
                            featureName: Km,
                            setAdditionalDataSource: t
                        });
                    case 7:
                        return n = a.sent,
                        a.next = 10,
                        n.main(e);
                    case 10:
                        return a.next = 12,
                        (0,
                        Wr.gz)({
                            type: mr
                        });
                    case 12:
                    case "end":
                        return a.stop()
                    }
            }
            ), qm)
        }
        var $m = {
            isDisabled: !1
        }
          , Qm = new u.SyncWaterfallHook(["NPSConfig"])
          , Jm = userInfo.isDSS
          , ef = function(e, t, n, a, r, o, i, c) {
            var s = "4c37aa98-a773-4293-8ed2-b1ff1ac8fb0d"
              , l = c;
            return 0 != qt(userInfo) && 0 != Jm && 0 != i || (s = "432fd8d7-2a5c-4973-bae1-d3d9143351b8",
            l = r),
            [{
                CampaignId: s,
                LauncherType: "customervoice",
                StartTimeUtc: "2021-10-11T00:00:00Z",
                EndTimeUtc: null,
                GovernedChannelType: o ? 0 : 1,
                Scope: {
                    Type: 0
                },
                AdditionalDataRequested: ["EmailAddress"],
                NominationScheme: {
                    Type: 0,
                    PercentageNumerator: e,
                    PercentageDenominator: 100,
                    NominationPeriod: {
                        Type: 0,
                        IntervalSeconds: t
                    },
                    CooldownPeriod: {
                        Type: 0,
                        IntervalSeconds: n
                    },
                    FallbackSurveyDurationSeconds: t
                },
                SurveyTemplate: {
                    Type: 4,
                    ActivationEvent: {
                        Type: 1,
                        Sequence: [{
                            Type: 0,
                            IsAggregate: !0,
                            Activity: du,
                            Count: a
                        }, {
                            Type: 0,
                            IsAggregate: !1,
                            Activity: pu,
                            Count: 1
                        }]
                    },
                    Content: {
                        Prompt: {
                            Title: "NPS_Prompt_Title",
                            Question: "NPS_Prompt_Question",
                            YesLabel: "NPS_Prompt_YesLabel",
                            NoLabel: "NPS_Prompt_NoLabel"
                        },
                        Rating: {
                            Question: "NPS_Rating_Question",
                            RatingValuesAscending: ["NPS_Rating_Values_1", "NPS_Rating_Values_2", "NPS_Rating_Values_3", "NPS_Rating_Values_4", "NPS_Rating_Values_5"]
                        },
                        Question: {
                            Question: "NPS_Question_Question"
                        },
                        CVSurveyParams: {
                            CustomerVoiceFormId: l
                        }
                    }
                }
            }]
        }
          , tf = a(5531)
          , nf = a(3479)
          , af = null
          , rf = !0;
        function of(e) {
            return e ? mu : 50053
        }
        var cf = function() {
            return nn(tn(window.atob(en(" ai_session"))))
        };
        function sf() {
            var e = window.innerWidth
              , t = window.innerHeight;
            return console.log("windowWidth=", e, ", windowHeight=", t),
            e < 650 || t < 550
        }
        var lf, uf = function(e) {
            window.OfficeBrowserFeedback.floodgate && (pf(),
            af = setTimeout((function() {
                ff(),
                mf(rf)
            }
            ), 1e3 * e))
        }, df = jt((function() {
            sf() && window.OfficeBrowserFeedback.floodgate && (console.log("calling floodgate stop() due to screen limitation"),
            clearTimeout(af),
            ff(),
            window.OfficeBrowserFeedback.floodgate.stop())
        }
        ), 1e3), pf = function() {
            vf() && (rf && console.log("start AppUsageTime"),
            vf().logActivityStartTime(du))
        }, mf = function(e) {
            vf() && (e && console.log("AppResume"),
            vf().logActivity(pu))
        }, ff = function() {
            vf() && (rf && console.log("stop AppUsageTime, timerId=", af),
            vf().logActivityStopTime(du))
        }, vf = function() {
            var e, t, n;
            return null === (e = window.OfficeBrowserFeedback) || void 0 === e || null === (t = e.floodgate) || void 0 === t || null === (n = t.getEngine()) || void 0 === n ? void 0 : n.getActivityListener()
        }, Ef = a(8601), gf = function() {
            return {
                sendTelemetryEvent: function(e) {
                    var t = function(e) {
                        return [].concat((0,
                        tf.Z)(nf.n5.getFields({
                            primaryIdentityHash: userInfo.uid,
                            primaryIdentitySpace: "UserObjectId",
                            tenantId: userInfo.tid,
                            isAnonymous: !1
                        })), (0,
                        tf.Z)(nf.gV.getFields({
                            name: "Windows 365 End User Portal",
                            platform: "Web",
                            version: userInfo.version
                        })), (0,
                        tf.Z)(nf.z_.getFields({
                            id: e
                        })))
                    }(cf())
                      , n = new Ef.h(t,{}).getOneDSTelemetryEvent(e);
                    n && function(e) {
                        Nv.isInitialized() && Nv.track(e)
                    }(n)
                }
            }
        };
        function hf() {
            if (!lf) {
                console.log("loadScript, url=", fu);
                var e = document.createElement("script");
                e.async = !0,
                e.src = fu;
                var t = document.getElementsByTagName("script")[0];
                t.parentNode.insertBefore(e, t),
                lf = new Promise((function(t) {
                    e.onload = e.onreadystatechange = function() {
                        e.readyState && !/complete|loaded/.test(e.readyState) || (t(),
                        e.onload = null,
                        e.onreadystatechange = null)
                    }
                }
                ))
            }
            return lf
        }
        var bf = !1
          , wf = !1
          , yf = !0
          , _f = 10;
        function Cf(e, t) {
            return hf().then((function() {
                If(of(e), e, t)
            }
            )).catch((function(e) {
                console.log("Failed to load/init SDK: " + e.toString()),
                Gv("Failed to load/init SDK")
            }
            ))
        }
        function kf(e, n) {
            return hf().then((function() {
                If(of(n.IWP_NPS_EnableProductionAppId), n.IWP_NPS_EnableProductionAppId, e),
                function(e) {
                    if (wf)
                        return;
                    var n = e.IWP_NPS_EnableCVSurvey
                      , a = e.IWP_NPS_CVFormId
                      , r = e.IWP_NPS_NominationPercentage_Numerator
                      , o = e.IWP_NPS_AppUsageTimeInSecond
                      , i = e.IWP_NPS_NominationPeriodInSecond
                      , c = e.IWP_NPS_CooldownPeriodInSecond
                      , s = e.IWP_NPS_EnableStandardChannel
                      , l = e.IWP_NPS_Admin_Enable
                      , u = e.IWP_NPS_Admin_CVFormId
                      , d = e.IWP_NPS_Enable_Debug;
                    yf = d,
                    _f = o;
                    var p = ef(r, i, c, o, a, s, l, u);
                    window.OfficeBrowserFeedback.floodgate.initOptions = {
                        campaignDefinitions: p,
                        onDismiss: function(e, t) {
                            var n = {
                                campaignId: e,
                                submitted: t
                            };
                            console.log("Floodgate survey dismissed", n)
                        },
                        uIStringGetter: function(e) {
                            return t(e)
                        },
                        customerVoiceSurveyParams: {
                            isCVSurveyEnabled: n,
                            cvFlights: "string",
                            uiHost: "testtest",
                            productName: "IWPortal"
                        }
                    },
                    OfficeBrowserFeedback.floodgate.initialize().then((function() {
                        OfficeBrowserFeedback.floodgate.start().then((function() {
                            sf() ? (console.log("calling floodgate stop() due to screen limitation"),
                            OfficeBrowserFeedback.floodgate.stop()) : uf(_f)
                        }
                        ))
                    }
                    )),
                    function(e, t) {
                        rf = e,
                        window.addEventListener("resize", df),
                        window.onfocus = function() {
                            console.log("onfocus -> triggered."),
                            window.OfficeBrowserFeedback.floodgate && (sf() ? (console.log("calling floodgate stop() due to screen limitation"),
                            window.OfficeBrowserFeedback.floodgate.stop()) : (clearTimeout(af),
                            window.OfficeBrowserFeedback.floodgate.start(),
                            uf(t)))
                        }
                        ,
                        window.onblur = function() {
                            console.log("onblur -> triggered."),
                            window.OfficeBrowserFeedback.floodgate && (rf && console.log("onblur - calling floodgate stop()"),
                            clearTimeout(af),
                            ff(),
                            window.OfficeBrowserFeedback.floodgate.stop())
                        }
                        ,
                        window.onunload = function() {
                            console.log("onunload -> triggered."),
                            window.OfficeBrowserFeedback.floodgate && (rf && console.log("onunload - calling floodgate stop()"),
                            clearTimeout(af),
                            ff(),
                            window.OfficeBrowserFeedback.floodgate.stop(),
                            window.removeEventListener("resize", df))
                        }
                    }(yf, _f),
                    wf = !0
                }(n)
            }
            )).catch((function(e) {
                console.log("Failed to load/init SDK: " + e.toString()),
                Gv("Failed to load/init SDK")
            }
            ))
        }
        function If(e, t, n) {
            if (!bf) {
                var a = userInfo.translation ? userInfo.translation : "en";
                window.OfficeBrowserFeedback = window.OfficeBrowserFeedback || {};
                var r = {
                    adminInfo: qt(userInfo) ? "is admin" : "isn't admin",
                    buildVersion: userInfo.version,
                    surveyLanguage: userInfo.translation
                }
                  , o = JSON.stringify(r)
                  , i = cf();
                OfficeBrowserFeedback.initOptions = {
                    appId: e,
                    myFeedbackForumUrl: vu,
                    stylesUrl: "/static/js/customized_officebrowserfeedback.css",
                    intlUrl: "/static/js/officebrowserfeedback/intl/",
                    environment: t ? 0 : 1,
                    sessionId: i,
                    build: userInfo.version,
                    locale: a,
                    onError: function(e) {
                        Gv("Floodgate SDK encountered an error: " + e)
                    },
                    primaryColour: "#0078D4",
                    secondaryColour: "#0091ff",
                    applicationGroup: {
                        appData: o,
                        feedbackTenant: userInfo.tid
                    },
                    telemetryGroup: {
                        audienceGroup: Jt(userInfo),
                        tenantId: userInfo.tid,
                        loggableUserId: "a:" + userInfo.uid,
                        processSessionId: i,
                        channel: "CC"
                    },
                    screenshot: n.policyAllowScreenshot,
                    showEmailAddress: n.policyAllowContact,
                    userEmail: userInfo.email,
                    telemetrySink: gf()
                },
                fv.dispatch({
                    type: pr
                }),
                bf = !0
            }
        }
        var Sf = Kn().mark(Rf)
          , xf = Kn().mark(Tf)
          , Nf = Kn().mark(Ff);
        function Rf() {
            var e, t, n;
            return Kn().wrap((function(a) {
                for (; ; )
                    switch (a.prev = a.next) {
                    case 0:
                        return a.next = 2,
                        (0,
                        Wr.Ys)(Dr);
                    case 2:
                        if (e = a.sent,
                        0 != e.length) {
                            a.next = 6;
                            break
                        }
                        return a.abrupt("return");
                    case 6:
                        return a.next = 8,
                        (0,
                        Wr.Ys)(Pr);
                    case 8:
                        if ((t = a.sent).IWP_NPS_Enable) {
                            a.next = 11;
                            break
                        }
                        return a.abrupt("return");
                    case 11:
                        if (!Qm.call($m).isDisabled) {
                            a.next = 14;
                            break
                        }
                        return a.abrupt("return");
                    case 14:
                        return a.next = 16,
                        (0,
                        Wr.Ys)(Hr);
                    case 16:
                        (n = a.sent).policyAllowSurvey && kf(n, t);
                    case 18:
                    case "end":
                        return a.stop()
                    }
            }
            ), Sf)
        }
        function Tf(e) {
            var t, n, a;
            return Kn().wrap((function(r) {
                for (; ; )
                    switch (r.prev = r.next) {
                    case 0:
                        return t = e.payload.entry,
                        r.next = 3,
                        (0,
                        Wr.Ys)(Pr);
                    case 3:
                        if ((n = r.sent).Feedback_IWP) {
                            r.next = 6;
                            break
                        }
                        return r.abrupt("return");
                    case 6:
                        if (!Qm.call($m).isDisabled) {
                            r.next = 9;
                            break
                        }
                        return r.abrupt("return");
                    case 9:
                        return r.next = 11,
                        (0,
                        Wr.Ys)(Hr);
                    case 11:
                        if (!(a = r.sent).policyAllowFeedback) {
                            r.next = 25;
                            break
                        }
                        if (r.prev = 13,
                        !n.IWP_Feedback_V2) {
                            r.next = 19;
                            break
                        }
                        return r.next = 17,
                        (0,
                        Wr.RE)(Xm, t);
                    case 17:
                        r.next = 20;
                        break;
                    case 19:
                        Cf(n.IWP_NPS_EnableProductionAppId, a);
                    case 20:
                        r.next = 25;
                        break;
                    case 22:
                        r.prev = 22,
                        r.t0 = r.catch(13),
                        Vv({
                            error: r.t0,
                            errorType: ut.MACError,
                            key: "initializeFeedback",
                            msg: "Fail to setup feedback"
                        });
                    case 25:
                    case "end":
                        return r.stop()
                    }
            }
            ), xf, null, [[13, 22]])
        }
        var Pf = function() {
            return "".concat(userInfo.uid, ".ocps")
        }
          , Af = function(e, t, n) {
            try {
                localStorage.setItem(Pf(), JSON.stringify({
                    complianceCheck: e,
                    expireTime: t,
                    policiesHash: n
                }))
            } catch (Sg) {
                console.error(Sg)
            }
        }
          , Df = 864e5
          , Lf = 54e5
          , Of = function() {
            try {
                var e = localStorage.getItem(Pf());
                if (e) {
                    var t = JSON.parse(e);
                    return t.expireTime > Date.now() ? {
                        complianceCheck: t.complianceCheck,
                        isExpired: !1
                    } : (localStorage.removeItem(Pf()),
                    {
                        policiesHash: t.policiesHash,
                        isExpired: !0,
                        complianceCheck: t.complianceCheck
                    })
                }
            } catch (n) {
                localStorage.removeItem(Pf()),
                console.error(n)
            }
        };
        function Ff() {
            var e, t, n, a, r, o, i, c, s;
            return Kn().wrap((function(l) {
                for (; ; )
                    switch (l.prev = l.next) {
                    case 0:
                        return l.next = 2,
                        (0,
                        Wr.Ys)(Pr);
                    case 2:
                        if (!(e = l.sent).Feedback_IWP && !e.IWP_NPS_Enable) {
                            l.next = 32;
                            break
                        }
                        if (!(t = Of())) {
                            l.next = 13;
                            break
                        }
                        if (t.isExpired || !t.complianceCheck) {
                            l.next = 12;
                            break
                        }
                        return l.next = 9,
                        (0,
                        Wr.gz)({
                            type: fr,
                            payload: t.complianceCheck
                        });
                    case 9:
                        return l.abrupt("return");
                    case 12:
                        t.isExpired && t.policiesHash && t.complianceCheck && (n = t.policiesHash,
                        a = t.complianceCheck);
                    case 13:
                        if (!e.IWP_Front_End_Ocps) {
                            l.next = 24;
                            break
                        }
                        return l.next = 16,
                        (0,
                        Wr.RE)($i, n);
                    case 16:
                        if (!(r = l.sent).success) {
                            l.next = 22;
                            break
                        }
                        return o = r.data.policiesHash === n && a ? a : iu(r),
                        l.next = 21,
                        (0,
                        Wr.gz)({
                            type: fr,
                            payload: o
                        });
                    case 21:
                        r.statusCode === dt.NoContent ? Af(o, Date.now() + Df) : Af(o, Date.now() + Lf, null === (i = r.data) || void 0 === i ? void 0 : i.policiesHash);
                    case 22:
                        l.next = 32;
                        break;
                    case 24:
                        return l.next = 26,
                        (0,
                        Wr.RE)(Mi);
                    case 26:
                        if (!(c = l.sent).success) {
                            l.next = 32;
                            break
                        }
                        return s = cu(c),
                        l.next = 31,
                        (0,
                        Wr.gz)({
                            type: fr,
                            payload: s
                        });
                    case 31:
                        "noContent" === c.data ? Af(s, Date.now() + Df) : Af(s, Date.now() + Lf, c.data.policiesHash);
                    case 32:
                    case "end":
                        return l.stop()
                    }
            }
            ), Nf)
        }
        var Mf = ["s2s.config.skype.com", "ecs.office.com"]
          , Uf = ["config.ecs.gov.teams.microsoft.us"]
          , Zf = function() {
            var e = userInfo.env.toLowerCase();
            return userInfo.tenantEnvironment !== rt.GCB && userInfo.tenantEnvironment !== rt.GCP || (e = userInfo.tenantEnvironment.toLowerCase()),
            e
        }
          , Hf = function(e) {
            var t = Zf();
            return e.map((function(e) {
                return {
                    url: "https://".concat(e, "/config/v1/CMD/1.0.0.0/Deschutes?Environment=").concat(t, "&RolloutType=Configuration"),
                    endpoint: e
                }
            }
            ))
        }
          , Bf = function(e) {
            var t = Zf()
              , n = userInfo.tid;
            return e.map((function(e) {
                return {
                    url: "https://".concat(e, "/config/v1/CMD/1.0.0.0/Deschutes?Environment=").concat(t, "&TenantId=").concat(n, "&type=client"),
                    endpoint: e
                }
            }
            ))
        }
          , Wf = function(e) {
            return Xt(userInfo) ? Vf(Uf, e) : Vf(Mf, e)
        }
          , Vf = function(e, t) {
            var n = Zf()
              , a = userInfo.tid;
            return e.map((function(e) {
                return {
                    url: "https://".concat(e, "/config/v1/CMD/1.0.0.0?agents=Deschutes&Environment=").concat(n, "&TenantId=").concat(a, "&userId=").concat(t),
                    endpoint: e
                }
            }
            ))
        }
          , Gf = Kn().mark(Kf)
          , zf = Kn().mark(jf)
          , Yf = Kn().mark(Xf)
          , qf = Kn().mark(Qf);
        function Kf() {
            var e, t, n, a, r, o, i;
            return Kn().wrap((function(c) {
                for (; ; )
                    switch (c.prev = c.next) {
                    case 0:
                        if (Hv("begin getFlighting"),
                        !no() || ao()) {
                            c.next = 4;
                            break
                        }
                        return c.next = 4,
                        (0,
                        Wr.RE)(lo);
                    case 4:
                        e = Xt(userInfo) ? Bf(Uf) : Bf(Mf),
                        t = {
                            success: !1,
                            data: null
                        },
                        n = (0,
                        ot.Z)(e),
                        c.prev = 7,
                        n.s();
                    case 9:
                        if ((a = n.n()).done) {
                            c.next = 21;
                            break
                        }
                        return r = a.value,
                        c.next = 13,
                        (0,
                        Wr.RE)(oi, r.url);
                    case 13:
                        if (!(t = c.sent).success) {
                            c.next = 18;
                            break
                        }
                        return c.abrupt("break", 21);
                    case 18:
                        Jf(t, r.endpoint);
                    case 19:
                        c.next = 9;
                        break;
                    case 21:
                        c.next = 26;
                        break;
                    case 23:
                        c.prev = 23,
                        c.t0 = c.catch(7),
                        n.e(c.t0);
                    case 26:
                        return c.prev = 26,
                        n.f(),
                        c.finish(26);
                    case 29:
                        if (!t.success) {
                            c.next = 42;
                            break
                        }
                        return Hv("getFlighting succeed"),
                        c.next = 33,
                        (0,
                        Wr.gz)({
                            type: ft,
                            payload: t.data
                        });
                    case 33:
                        return c.next = 35,
                        (0,
                        Wr.gz)({
                            type: Xe
                        });
                    case 35:
                        if (i = t.data.IWP_Telemetry_EnablePrivacyGuard,
                        Uv(i),
                        !(null === (o = t.data) || void 0 === o ? void 0 : o.IWP_Enable_Experiment)) {
                            c.next = 40;
                            break
                        }
                        return c.next = 40,
                        (0,
                        Wr.RE)(Xf);
                    case 40:
                        c.next = 45;
                        break;
                    case 42:
                        return Hv("getFlighting failed"),
                        c.next = 45,
                        (0,
                        Wr.gz)({
                            type: ft,
                            payload: {}
                        });
                    case 45:
                    case "end":
                        return c.stop()
                    }
            }
            ), Gf, null, [[7, 23, 26, 29]])
        }
        function jf() {
            var e, t, n, a, r;
            return Kn().wrap((function(o) {
                for (; ; )
                    switch (o.prev = o.next) {
                    case 0:
                        if (Hv("Initializing ecs control acquisition."),
                        !no() || ao()) {
                            o.next = 4;
                            break
                        }
                        return o.next = 4,
                        (0,
                        Wr.RE)(lo);
                    case 4:
                        e = Xt(userInfo) ? Hf(Uf) : Hf(Mf),
                        t = {
                            success: !1,
                            data: null
                        },
                        n = (0,
                        ot.Z)(e),
                        o.prev = 7,
                        n.s();
                    case 9:
                        if ((a = n.n()).done) {
                            o.next = 21;
                            break
                        }
                        return r = a.value,
                        o.next = 13,
                        (0,
                        Wr.RE)(oi, r.url);
                    case 13:
                        if (!(t = o.sent).success) {
                            o.next = 18;
                            break
                        }
                        return o.abrupt("break", 21);
                    case 18:
                        Jf(t, r.endpoint);
                    case 19:
                        o.next = 9;
                        break;
                    case 21:
                        o.next = 26;
                        break;
                    case 23:
                        o.prev = 23,
                        o.t0 = o.catch(7),
                        n.e(o.t0);
                    case 26:
                        return o.prev = 26,
                        n.f(),
                        o.finish(26);
                    case 29:
                        if (!t.success) {
                            o.next = 35;
                            break
                        }
                        return Hv("Ecs control acquisition successful."),
                        o.next = 33,
                        (0,
                        Wr.gz)({
                            type: pt,
                            payload: t.data
                        });
                    case 33:
                        o.next = 38;
                        break;
                    case 35:
                        return Hv("Ecs control acquisition failed"),
                        o.next = 38,
                        (0,
                        Wr.gz)({
                            type: pt,
                            payload: {}
                        });
                    case 38:
                    case "end":
                        return o.stop()
                    }
            }
            ), zf, null, [[7, 23, 26, 29]])
        }
        function Xf() {
            var e, t, n, a, r, o, i, c;
            return Kn().wrap((function(s) {
                for (; ; )
                    switch (s.prev = s.next) {
                    case 0:
                        return s.next = 2,
                        (0,
                        Wr.Ys)(Pr);
                    case 2:
                        if (s.sent.IWP_Enable_Experiment) {
                            s.next = 5;
                            break
                        }
                        return s.abrupt("return");
                    case 5:
                        if (gv()) {
                            s.next = 8;
                            break
                        }
                        return s.abrupt("return");
                    case 8:
                        if (!(e = bn())) {
                            s.next = 13;
                            break
                        }
                        return s.next = 12,
                        (0,
                        Wr.RE)(Qf, e);
                    case 12:
                        return s.abrupt("return");
                    case 13:
                        if (Hv("Initializing ecs experiment acquisition."),
                        !no() || ao()) {
                            s.next = 17;
                            break
                        }
                        return s.next = 17,
                        (0,
                        Wr.RE)(lo);
                    case 17:
                        t = _n(),
                        n = Wf(t),
                        a = {
                            success: !1,
                            data: null
                        },
                        r = (0,
                        ot.Z)(n),
                        s.prev = 21,
                        r.s();
                    case 23:
                        if ((o = r.n()).done) {
                            s.next = 35;
                            break
                        }
                        return i = o.value,
                        s.next = 27,
                        (0,
                        Wr.RE)(oi, i.url);
                    case 27:
                        if (!(a = s.sent).success) {
                            s.next = 32;
                            break
                        }
                        return s.abrupt("break", 35);
                    case 32:
                        Jf(a, i.endpoint);
                    case 33:
                        s.next = 23;
                        break;
                    case 35:
                        s.next = 40;
                        break;
                    case 37:
                        s.prev = 37,
                        s.t0 = s.catch(21),
                        r.e(s.t0);
                    case 40:
                        return s.prev = 40,
                        r.f(),
                        s.finish(40);
                    case 43:
                        if (!a.success) {
                            s.next = 51;
                            break
                        }
                        return Hv("Ecs experiment acquisition successful."),
                        c = $f(t, a),
                        wn(c),
                        s.next = 49,
                        (0,
                        Wr.RE)(Qf, c);
                    case 49:
                        s.next = 54;
                        break;
                    case 51:
                        return Hv("Ecs experiment acquisition failed"),
                        s.next = 54,
                        (0,
                        Wr.gz)({
                            type: Et,
                            payload: {}
                        });
                    case 54:
                    case "end":
                        return s.stop()
                    }
            }
            ), Yf, null, [[21, 37, 40, 43]])
        }
        var $f = function(e, t) {
            var n, a, r, o, i = function(e) {
                var t = Ft().split(e, ",")
                  , n = Ft().filter(t, (function(e) {
                    return Ft().includes(e, ":")
                }
                ));
                return Ft().join(n, ",")
            }(null === (n = t.data) || void 0 === n || null === (a = n.ConfigIDs) || void 0 === a ? void 0 : a.Deschutes), c = null === (r = t.data) || void 0 === r ? void 0 : r.Deschutes, s = (o = c) ? Object.keys(o).filter((function(e) {
                return gn.includes(e)
            }
            )).reduce((function(e, t) {
                return Object.assign(e, (0,
                f.Z)({}, t, o[t]))
            }
            ), {}) : {};
            return (0,
            l.Z)({
                sessionId: e,
                configIDs: i
            }, s)
        };
        function Qf(e) {
            return Kn().wrap((function(t) {
                for (; ; )
                    switch (t.prev = t.next) {
                    case 0:
                        return t.next = 2,
                        (0,
                        Wr.gz)({
                            type: Et,
                            payload: e
                        });
                    case 2:
                        gd(),
                        bd() && hd(rn.View.toString(), on.HomePage.toString(), an.PageView.toString(), wd());
                    case 4:
                    case "end":
                        return t.stop()
                    }
            }
            ), qf)
        }
        function Jf(e, t) {
            Vv({
                error: new Error("Error: Configuration acquisition failed."),
                errorType: ut.unCatchedError,
                key: "Configuration acuisition failed from ".concat(t),
                msg: "statusCode=" + e.statusCode
            })
        }
        var ev = Kn().mark(rv)
          , tv = Kn().mark(ov)
          , nv = Kn().mark(iv)
          , av = Kn().mark(cv);
        function rv(e) {
            return Kn().wrap((function(t) {
                for (; ; )
                    switch (t.prev = t.next) {
                    case 0:
                        return t.next = 2,
                        (0,
                        Wr.ib)(we, nl);
                    case 2:
                        return t.next = 4,
                        (0,
                        Wr.ib)(ye, Nl);
                    case 4:
                        return t.next = 6,
                        (0,
                        Wr.ib)(_e, Rl);
                    case 6:
                        return t.next = 8,
                        (0,
                        Wr.ib)(k, al);
                    case 8:
                        return t.next = 10,
                        (0,
                        Wr.ib)(I, ol);
                    case 10:
                        return t.next = 12,
                        (0,
                        Wr.ib)(S, il);
                    case 12:
                        return t.next = 14,
                        (0,
                        Wr.ib)(We, xs);
                    case 14:
                        return t.next = 16,
                        (0,
                        Wr.ib)(Ve, Ns);
                    case 16:
                        return t.next = 18,
                        (0,
                        Wr.ib)(vt, Kf);
                    case 18:
                        return t.next = 20,
                        (0,
                        Wr.ib)(mt, jf);
                    case 20:
                        return t.next = 22,
                        (0,
                        Wr.ib)("SET_EXPERIEMEN_ASYNC", Xf);
                    case 22:
                        return t.next = 24,
                        (0,
                        Wr.ib)(Xe, hl);
                    case 24:
                        return t.next = 26,
                        (0,
                        Wr.ib)(Iu, Rf);
                    case 26:
                        return t.next = 28,
                        (0,
                        Wr.ib)(Su, Tf);
                    case 28:
                        return t.next = 30,
                        (0,
                        Wr.ib)(xu, Ff);
                    case 30:
                        return t.next = 32,
                        (0,
                        Wr.ib)(ue, cl);
                    case 32:
                        return t.next = 34,
                        (0,
                        Wr.ib)(Ce, wl);
                    case 34:
                        return t.next = 36,
                        (0,
                        Wr.ib)(ke, yl);
                    case 36:
                        return t.next = 38,
                        (0,
                        Wr.ib)(Fe, _l);
                    case 38:
                        return t.next = 40,
                        (0,
                        Wr.ib)(Me, Cl);
                    case 40:
                        return t.next = 42,
                        (0,
                        Wr.ib)(un, Pm);
                    case 42:
                        return t.next = 44,
                        (0,
                        Wr.ib)(dn, Am);
                    case 44:
                        return t.next = 46,
                        (0,
                        Wr.Fm)(pn, Dm, e);
                    case 46:
                        return t.next = 48,
                        (0,
                        Wr.ib)(le, Om);
                    case 48:
                        return t.next = 50,
                        (0,
                        Wr.ib)(Qe, bl);
                    case 50:
                        return t.next = 52,
                        (0,
                        Wr.ib)(Ha, Bm);
                    case 52:
                        return t.next = 54,
                        (0,
                        Wr.Fm)($a, Wm);
                    case 54:
                        return t.next = 56,
                        (0,
                        Wr.Fm)(gr, bc);
                    case 56:
                        return t.next = 58,
                        (0,
                        Wr.ib)(Qa, Vm);
                    case 58:
                        return t.next = 60,
                        (0,
                        Wr.ib)(er, zm);
                    case 60:
                        return t.next = 62,
                        (0,
                        Wr.ib)(yr, mc);
                    case 62:
                        return t.next = 64,
                        (0,
                        Wr.Fm)(Se, sl);
                    case 64:
                        return t.next = 66,
                        (0,
                        Wr.Fm)(de, ll);
                    case 66:
                        return t.next = 68,
                        (0,
                        Wr.Fm)(pe, ul);
                    case 68:
                    case "end":
                        return t.stop()
                    }
            }
            ), ev)
        }
        function ov() {
            return Kn().wrap((function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2,
                        (0,
                        Wr.Fm)(ft, Gr);
                    case 2:
                    case "end":
                        return e.stop()
                    }
            }
            ), tv)
        }
        function iv() {
            return Kn().wrap((function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2,
                        (0,
                        Wr.Fm)(w, Gr);
                    case 2:
                    case "end":
                        return e.stop()
                    }
            }
            ), nv)
        }
        function cv(e) {
            return Kn().wrap((function(t) {
                for (; ; )
                    switch (t.prev = t.next) {
                    case 0:
                        return t.next = 2,
                        (0,
                        Wr.rM)(rv, e);
                    case 2:
                        return t.next = 4,
                        (0,
                        Wr.rM)(ov);
                    case 4:
                        return t.next = 6,
                        (0,
                        Wr.rM)(iv);
                    case 6:
                    case "end":
                        return t.stop()
                    }
            }
            ), av)
        }
        var sv = a(8002)
          , lv = a.n(sv);
        var uv = (0,
        ge.ZP)()
          , dv = ("object" === ("undefined" === typeof window ? "undefined" : (0,
        Ee.Z)(window)) && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : be.qC)((0,
        be.md)(uv), (function(e) {
            return function(t, n) {
                var a = e(t, n);
                return zo = a,
                a
            }
        }
        ))
          , pv = (0,
        be.MT)(kr, dv);
        pv.subscribe(lv()((function() {
            pv.getState().Home.loginFinished && function(e) {
                try {
                    var t = JSON.stringify(e);
                    localStorage.setItem("CloudPC_PersistentState", t)
                } catch (n) {
                    console.warn(n)
                }
            }({
                EcsConfiguration: {
                    FlightingData: {
                        previewFeatures: pv.getState().EcsConfiguration.FlightingData.previewFeatures
                    }
                }
            })
        }
        ), 1e3)),
        uv.run(cv, pv.getState);
        var mv = (0,
        he.p5)(pv)
          , fv = pv;
        function vv() {
            return fv.getState()
        }
        function Ev() {
            var e = fv.getState().Home.clientVariant;
            if (b.NativeWindows === e)
                return At.Seahawk;
            var t = location.pathname || "";
            return "/" == t ? At.MainPage : t.startsWith(Zt) ? At.Windows365WebClientPage : At.Unknown
        }
        function gv() {
            return Ev() === At.MainPage
        }
        var hv, bv = a(8143), wv = a(5508), yv = a(4526), _v = a(3001), Cv = a(6977), kv = new fd.K, Iv = new fd.K, Sv = function() {
            Nv = Iv;
            try {
                Nv.isInitialized() || Pv(),
                kv.isInitialized() && kv.unload()
            } catch (Sg) {
                console.error(Sg)
            }
        }, xv = function() {
            Nv = kv;
            try {
                Nv.isInitialized() || Pv(),
                Iv.isInitialized() && Iv.unload()
            } catch (Sg) {
                console.error(Sg)
            }
        }, Nv = kv, Rv = function() {
            return function(e) {
                var t, n, a;
                return "prod" === (null === (t = e.env) || void 0 === t ? void 0 : t.toLowerCase()) || "ppe" === (null === (n = e.env) || void 0 === n ? void 0 : n.toLowerCase()) || "sh" === (null === (a = e.env) || void 0 === a ? void 0 : a.toLowerCase())
            }(userInfo) ? "76a1adf006dd454883d3633f42c6fccc-3ab26b86-779f-4017-933e-6b213886fd65-7449" : "8e241632446947a19a765bc1b7c17162-661c702d-41b1-428a-add8-dc6f0a8862a5-7406"
        }, Tv = function() {
            var e = userInfo.language ? userInfo.language : "en"
              , t = dd()
              , n = ao() ? null : function() {
                var e = new yv.j
                  , t = {
                    authType: _v.G.AAD,
                    loggedInStatusCallback: function() {
                        return !0
                    }
                };
                return {
                    plugin: e,
                    config: t
                }
            }()
              , a = function(e, t) {
                var n = new bv.Z;
                n.setProperty("userLanguage", zt(t)),
                n.setProperty("custom_env", Gt(e.env.toLowerCase())),
                n.setProperty("custom_userId", {
                    value: e.uid,
                    kind: wv.mh.Pii_Identity
                }),
                n.setProperty("custom_licenseCategory", Object.keys(kc)[Ov]);
                var a = null;
                try {
                    a = new URLSearchParams(window.location.search).get("correlationId")
                } catch (Sg) {
                    a = null
                }
                "string" == typeof a && a.length > 0 && n.setProperty("correlationId", a);
                return hv = n,
                {
                    plugin: n,
                    config: {}
                }
            }(userInfo, e)
              , r = function() {
                var e = fv.getState().EcsConfiguration.FlightingData.IWP_Telemetry_EnablePrivacyGuard
                  , t = new Cv.q
                  , n = {
                    context: {
                        UserName: "",
                        UserAlias: "",
                        MachineIds: [],
                        OutOfScopeIdentifiers: []
                    },
                    notificationEventName: "PrivacyConcern",
                    summaryEventName: "PrivacyGuardSummary",
                    iKey: Rv(),
                    enabled: e,
                    scanForUrls: !1,
                    disableAdvancedScans: !1
                };
                return Lv = t,
                {
                    plugin: t,
                    config: n
                }
            }()
              , o = !ao() && n ? [n.plugin, a.plugin] : [a.plugin]
              , i = !ao() && n ? {
                AuthPlugin: n.config,
                PropertiesPlugin: a.config,
                PrivacyGuardPlugin: r.config
            } : {
                PropertiesPlugin: a.config,
                PrivacyGuardPlugin: r.config
            };
            return {
                insightsConfig: {
                    instrumentationKey: Rv(),
                    extensions: o,
                    extensionConfig: i,
                    channelConfiguration: {
                        eventsLimitInMem: 5e3
                    },
                    propertyConfiguration: {
                        populateBrowserInfo: !0,
                        populateOperatingSystemInfo: !0,
                        enableApplicationInsightsUser: !0,
                        serviceName: "CloudPC_IWP",
                        env: userInfo.env.toLowerCase()
                    },
                    webAnalyticsConfiguration: {
                        autoCapture: {
                            scroll: !0,
                            pageView: !0,
                            onLoad: !0,
                            onUnload: !0,
                            click: !1,
                            resize: !0,
                            jsError: !0
                        },
                        coreData: {
                            pageName: t,
                            referrerUri: Av(),
                            requestUri: Dv()
                        },
                        shareAuthStatus: !0,
                        useDefaultContentName: !0,
                        autoPopulateParentIdAndParentName: !0
                    }
                },
                privacyGuard: r
            }
        };
        function Pv() {
            if (!Xt(userInfo)) {
                var e = Tv()
                  , t = e.insightsConfig
                  , n = e.privacyGuard;
                if (ao() || qo()) {
                    if (Nv === kv && kv.initialize(t, [n.plugin]),
                    Nv === Iv) {
                        var a = Tv()
                          , r = a.insightsConfig
                          , o = a.privacyGuard;
                        Iv.initialize((0,
                        l.Z)((0,
                        l.Z)({}, r), {}, {
                            endpointUrl: "https://eu-mobile.events.data.microsoft.com/OneCollector/1.0/"
                        }), [o.plugin])
                    }
                } else
                    Nv.initialize(t, [n.plugin])
            }
        }
        function Av() {
            var e = document.referrer;
            return e && !e.startsWith("https://login.microsoftonline.com/") || (e = "".concat(window.location.origin, "/")),
            Gt(e)
        }
        function Dv() {
            var e = window.location.href;
            return Ev() == At.Windows365WebClientPage && (e = e.replace(Yt, "*****")),
            e
        }
        var Lv, Ov = kc.Unknown;
        function Fv(e) {
            var t;
            null === (t = hv) || void 0 === t || t.setProperty("custom_userId", {
                value: e.uid,
                kind: wv.mh.Pii_Identity
            })
        }
        function Mv(e) {
            var t;
            Ov = e,
            null === (t = hv) || void 0 === t || t.setProperty("custom_licenseCategory", Object.keys(kc)[Ov])
        }
        var Uv = function(e) {
            var t;
            null === (t = Lv) || void 0 === t || t.setEnabled(e)
        };
        function Zv(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "web"
              , n = arguments.length > 2 ? arguments[2] : void 0;
            Nv.isInitialized() && Nv.trackPageAction({
                actionType: "CL",
                pageType: t,
                name: dd()
            }, {
                baseData_content: JSON.stringify(e),
                baseData_deviceTags: n ? md(n).join("") : ""
            })
        }
        function Hv(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "web"
              , n = arguments.length > 2 ? arguments[2] : void 0;
            Nv.isInitialized() && Nv.trackPageAction({
                actionType: "Normal",
                pageType: t,
                name: dd(),
                sync: n
            }, {
                baseData_content: JSON.stringify(e)
            })
        }
        function Bv(e, t, n) {
            Nv.isInitialized() && Nv.track({
                name: e,
                data: {
                    duration: t,
                    statusCode: n
                }
            })
        }
        function Wv(e, t, n) {
            Nv.isInitialized() && Nv.trackException({
                exception: n
            }, {
                name: e,
                statusCode: t
            })
        }
        function Vv(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "web";
            Nv.isInitialized() && Nv.trackException({
                exception: e.error
            }, {
                pageType: t,
                name: dd(),
                errorDetail: "Type: ".concat(e.errorType, ", key: ").concat(e.key, " ").concat(e.msg)
            })
        }
        function Gv(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "web";
            if (Nv.isInitialized()) {
                var n = new Error("Console Error");
                Nv.trackException({
                    exception: n
                }, {
                    pageType: t,
                    name: dd(),
                    errorDetail: e
                })
            }
        }
        (qo() || ao() && !1 !== userInfo.isEU) && Sv();
        var zv = (0,
        ko.$j)((function(e) {
            return {
                show: e.Home.showWorkspaceBubble,
                freType: e.Home.freType,
                serviceConfig: e.Home.serviceConfig
            }
        }
        ))
          , Yv = "#F9F9F9"
          , qv = "rgba(0, 0, 0, 0.8956)"
          , Kv = "1px solid rgba(117, 117, 117, 0.4)"
          , jv = {
            palette: {
                themePrimary: "#005FB8"
            }
        }
          , Xv = {
            content: {
                borderRadius: 7,
                background: Yv
            },
            header: {
                marginBottom: "0 !important"
            },
            headline: {
                color: qv,
                marginRight: 30
            },
            subText: {
                color: qv
            },
            root: {
                boxShadow: "unset",
                borderRadius: 7
            },
            bodyContent: {
                padding: "10px 10px 11px 12px"
            },
            subComponentStyles: {
                callout: {
                    beak: {
                        background: Yv,
                        zIndex: 1
                    },
                    calloutMain: {
                        background: Yv,
                        borderRadius: 7,
                        boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.14)",
                        border: Kv
                    },
                    beakCurtain: {
                        backgroundColor: Yv,
                        borderRadius: 7
                    }
                }
            }
        }
          , $v = {
            root: (0,
            l.Z)({
                height: 30,
                width: 30,
                minWidth: "unset",
                padding: 0,
                background: "rgba(255, 255, 255, 0.7)",
                marginRight: 5
            }, {
                border: "1px solid",
                borderImageSource: "linear-gradient(180deg, rgba(0, 0, 0, 0.0578) 90.58%, rgba(0, 0, 0, 0.1622) 100%)",
                borderRadius: 3
            })
        }
          , Qv = {
            styles: {
                root: (0,
                l.Z)((0,
                l.Z)({}, $v.root), {}, {
                    marginRight: 10
                })
            },
            iconProps: {
                iconName: "ChevronLeft"
            }
        }
          , Jv = {
            iconName: "Cancel"
        }
          , eE = {
            root: {
                color: qv,
                width: 30,
                height: 30
            },
            rootHovered: {
                color: qv
            },
            rootPressed: {
                color: qv
            }
        }
          , tE = zv((function(e) {
            var n = e.dispatch
              , a = e.show
              , r = e.freType
              , o = e.serviceConfig;
            if (!a)
                return null;
            var i = (0,
            No.useState)(1)
              , c = (0,
            s.Z)(i, 2)
              , u = c[0]
              , d = c[1]
              , p = (0,
            No.useState)({})
              , f = (0,
            s.Z)(p, 2)
              , v = f[0]
              , g = f[1]
              , b = o.brandName
              , w = (0,
            No.useMemo)((function() {
                return function(e) {
                    return h[e] || E
                }(r)({
                    brandName: b
                })
            }
            ), [b, r])
              , y = w.length
              , _ = function() {
                Zv("Workspace FRE Click Previous " + u),
                d(u - 1)
            }
              , C = function() {
                n({
                    type: F
                })
            }
              , k = function() {
                Zv("Skip Workspace FRE " + u),
                C()
            }
              , I = function() {
                Zv("Finish Workspace FRE"),
                C()
            }
              , S = {
                id: "button-next",
                ariaLabel: t("next"),
                onClick: function() {
                    Zv("Workspace FRE Click Next " + u),
                    d(u + 1)
                },
                styles: $v,
                iconProps: {
                    iconName: "ChevronRight"
                }
            }
              , x = w[u - 1];
            return (0,
            No.useEffect)((function() {
                var e = document.querySelector(".ms-Callout-beak");
                console.log("beakDom", e)
            }
            ), [x]),
            No.createElement($u.l, {
                key: u,
                target: x.target,
                calloutProps: {
                    gapSpace: x.gapSpace,
                    directionalHint: x.directionalHint,
                    minPagePadding: x.minPagePadding
                },
                hasSmallHeadline: !0,
                styles: (0,
                l.Z)((0,
                l.Z)({}, Xv), {}, {
                    subComponentStyles: (0,
                    l.Z)((0,
                    l.Z)({}, Xv.subComponentStyles), {}, {
                        callout: (0,
                        l.Z)((0,
                        l.Z)({}, Xv.subComponentStyles.callout), {}, {
                            beak: (0,
                            l.Z)((0,
                            l.Z)({}, Xv.subComponentStyles.callout.beak), v)
                        })
                    })
                }),
                onDismiss: k,
                headline: x.bubbleTitle,
                hasCloseButton: !1
            }, No.createElement("div", {
                className: "mr-[40px]"
            }, x.bubbleText), No.createElement("div", {
                className: m()("h-[40px] flex justify-between items-center text-black mt-[9px]", u === y ? "ml-px mr-1" : "ml-[7px]")
            }, t("page-index", {
                current: u,
                total: y
            }), No.createElement("div", {
                className: "flex items-center"
            }, No.createElement(Uu.G, {
                content: t("previous")
            }, No.createElement(Rd.a, Object.assign({}, Qv, {
                id: "button-previous",
                ariaLabel: t("previous"),
                onClick: _,
                disabled: 1 === u
            }))), u === y ? No.createElement(Qu.f, {
                theme: jv
            }, No.createElement(Qd.K, {
                id: "button-done",
                ariaLabel: t("done"),
                onClick: I
            }, t("done"))) : No.createElement(Uu.G, {
                content: t("next")
            }, No.createElement(Rd.a, S)))), No.createElement("div", {
                className: "absolute top-[5px] right-[5px]"
            }, No.createElement(Uu.G, {
                content: t("close")
            }, No.createElement(Zu.h, {
                iconProps: Jv,
                onClick: k,
                styles: eE,
                ariaLabel: t("close")
            }))), No.createElement(rE, {
                setBeakBorderStyles: g
            }))
        }
        ))
          , nE = function() {
            d.tap(fe, (function() {
                return No.createElement(tE, null)
            }
            ))
        }
          , aE = {
            TOP: {
                borderLeft: Kv,
                borderTop: Kv
            },
            LEFT: {
                borderLeft: Kv,
                borderBottom: Kv
            },
            RIGHT: {
                borderTop: Kv,
                borderRight: Kv,
                right: "-10px !important"
            },
            BOTTOM: {
                borderRight: Kv,
                borderBottom: Kv
            }
        }
          , rE = function(e) {
            var t = e.setBeakBorderStyles;
            return (0,
            No.useEffect)((function() {
                var e = document.querySelector(".ms-Callout-beak")
                  , n = new MutationObserver((function() {
                    var n = (null === e || void 0 === e ? void 0 : e.getAttribute("style")) || "";
                    /right: *-.*?/.test(n) ? t(aE.RIGHT) : /bottom: *-.*?/.test(n) ? t(aE.BOTTOM) : /left: *-.*?/.test(n) ? t(aE.LEFT) : /top: *-.*?/.test(n) && t(aE.TOP)
                }
                ));
                return n.observe(e, {
                    attributes: !0
                }),
                function() {
                    return n.disconnect()
                }
            }
            ), [t]),
            No.createElement(No.Fragment, null)
        }
          , oE = "AndroidPlugin"
          , iE = (0,
        ko.$j)((function(e, t) {
            return {
                device: t.device,
                index: t.index,
                deviceStatus: e.NativeClient.connectionStatus,
                remoteUrl: e.Device.remoteUrl,
                launchCount: e.NativeClient.launchCount,
                homepageMessageBar: e.NativeClient.homepageMessageBar,
                deviceStateTips: e.Device.stateTipsMap,
                flexStateMap: e.Device.flexStateMap
            }
        }
        ))((function(e) {
            var n = e.index
              , a = e.device
              , r = No.useCallback((function() {
                a.operationDisabled || (a.directLaunchURL ? ia(a.directLaunchURL, a.workspaceId).then((function() {
                    console.log("CreateConnection sent")
                }
                )).catch((function(e) {
                    console.error("Failed to connect cloudPC. Error:" + e)
                }
                )) : console.error("directLaunchUrl is undefined"))
            }
            ), [a]);
            return No.createElement(No.Fragment, null, No.createElement("div", {
                className: "flex-shrink-0"
            }, No.createElement(Rd.a, {
                className: "bg-blue-500 hover:bg-blue-700 text-white hover:text-white font-bold rounded",
                text: t("connect"),
                id: "connectButton".concat(n),
                onClick: r
            })))
        }
        ))
          , cE = function() {
            function e() {
                var t = this;
                (0,
                i.Z)(this, e),
                this.messageFromHostCallback = void 0,
                this.callbackAdded = !1,
                this.messageFromHostCallback = function(e) {}
                ,
                window.addEventListener("message_from_android", (function(e) {
                    var n = e;
                    t.messageFromHostCallback(n.detail)
                }
                ))
            }
            return (0,
            c.Z)(e, [{
                key: "sendMessageToHost",
                value: function(e) {
                    var t;
                    null === (t = this.getNativeAndroid()) || void 0 === t || t.onMessageFromJS(JSON.stringify(e))
                }
            }, {
                key: "addHostMessageHandler",
                value: function(e) {
                    this.messageFromHostCallback = e,
                    this.callbackAdded = !0
                }
            }, {
                key: "getNativeAndroid",
                value: function() {
                    return "object" !== ("undefined" === typeof window ? "undefined" : (0,
                    Ee.Z)(window)) ? null : window.nativeAndroid || null
                }
            }, {
                key: "isInitialized",
                value: function() {
                    return this.callbackAdded && null != this.getNativeAndroid()
                }
            }]),
            e
        }()
          , sE = function() {
            function e() {
                (0,
                i.Z)(this, e)
            }
            return (0,
            c.Z)(e, null, [{
                key: "isInitialized",
                value: function() {
                    return e.theInstance && e.theInstance.isInitialized() && !Xn.HostBridge.isInitializationNeeded(e.theInstance)
                }
            }]),
            e
        }();
        sE.theInstance = new cE;
        var lE = function() {
            dm.tap(oE, (function(e, t) {
                return {
                    contentStyles: {
                        marginTop: t,
                        height: "calc(100% - ".concat(t, "px)"),
                        overflowY: "auto",
                        position: "absolute"
                    },
                    contentEffect: function(e) {
                        e({
                            type: Ha
                        }),
                        e({
                            type: $a
                        }),
                        Na((function(t) {
                            e({
                                type: Va,
                                payload: t
                            })
                        }
                        )),
                        Ta((function(t) {
                            e({
                                type: Ja,
                                payload: t
                            })
                        }
                        )),
                        Ra((function(t) {
                            e({
                                type: or,
                                payload: t
                            })
                        }
                        ))
                    },
                    loadingEffect: function(e) {
                        setTimeout((function() {
                            sE.isInitialized() && !e && ha().catch((function(e) {
                                Vv({
                                    error: new Error(ut.PIEError),
                                    errorType: ut.PIEError,
                                    key: "PIE",
                                    msg: "Failed to signal IWP load. Error:" + e
                                })
                            }
                            ))
                        }
                        ), 1e3)
                    },
                    component: No.createElement(No.Fragment, null)
                }
            }
            ))
        }
          , uE = function() {
            function e() {
                (0,
                i.Z)(this, e)
            }
            return (0,
            c.Z)(e, [{
                key: "apply",
                value: function() {
                    Xn.HostBridge.isInitializationNeeded(sE.theInstance) && Xn.HostBridge.initialize(sE.theInstance),
                    a(8004),
                    nE(),
                    _d.tap(oE, (function(e, t) {
                        return No.createElement(iE, {
                            device: e,
                            index: t
                        })
                    }
                    )),
                    lE()
                }
            }]),
            e
        }()
          , dE = function() {
            function e() {
                (0,
                i.Z)(this, e)
            }
            return (0,
            c.Z)(e, null, [{
                key: "connectWorkspace",
                value: function(e, t) {
                    window.webkit.messageHandlers.connectWorkspace.postMessage({
                        directLaunchUrl: e,
                        workspaceId: t
                    })
                }
            }]),
            e
        }()
          , pE = (0,
        ko.$j)((function(e, t) {
            return {
                device: t.device,
                index: t.index,
                deviceStatus: e.NativeClient.connectionStatus,
                remoteUrl: e.Device.remoteUrl,
                launchCount: e.NativeClient.launchCount,
                homepageMessageBar: e.NativeClient.homepageMessageBar,
                deviceStateTips: e.Device.stateTipsMap,
                flexStateMap: e.Device.flexStateMap
            }
        }
        ))((function(e) {
            var n = e.index
              , a = e.device
              , r = No.useCallback((function() {
                a.operationDisabled || (console.log("directLaunchUrl: " + a.directLaunchURL + " workspaceId: " + a.workspaceId),
                a.directLaunchURL ? dE.connectWorkspace(a.directLaunchURL, a.workspaceId) : console.error("directLaunchUrl is undefined"))
            }
            ), [a]);
            return No.createElement(No.Fragment, null, No.createElement("div", {
                className: "flex-shrink-0"
            }, No.createElement(Rd.a, {
                className: "bg-blue-500 hover:bg-blue-700 text-white hover:text-white font-bold rounded",
                text: t("connect"),
                id: "connectButton".concat(n),
                onClick: r
            })))
        }
        ))
          , mE = function() {
            function e() {
                (0,
                i.Z)(this, e)
            }
            return (0,
            c.Z)(e, [{
                key: "apply",
                value: function() {
                    a(9370),
                    _d.tap("ApplePlugin", (function(e, t) {
                        return No.createElement(pE, {
                            device: e,
                            index: t
                        })
                    }
                    ))
                }
            }]),
            e
        }();
        var fE = (0,
        ko.$j)((function(e, t) {
            return {
                monitoredWorkspaceId: t.workspaceId,
                startConnection: t.startConnection,
                workspaceId: e.NativeClient.connectionErrorWorkspaceId,
                connectionStatus: e.NativeClient.connectionStatus
            }
        }
        ))((function(e) {
            var n = e.workspaceId
              , a = e.connectionStatus
              , r = e.monitoredWorkspaceId
              , o = e.startConnection
              , i = e.dispatch
              , c = No.useState(!1)
              , l = (0,
            s.Z)(c, 2)
              , u = l[0]
              , d = l[1]
              , p = No.useState(t("disconnect-code-generic"))
              , f = (0,
            s.Z)(p, 2)
              , v = f[0]
              , E = f[1]
              , g = No.useState("")
              , h = (0,
            s.Z)(g, 2)
              , b = h[0]
              , w = h[1]
              , y = No.useState("")
              , _ = (0,
            s.Z)(y, 2)
              , C = _[0]
              , k = _[1]
              , I = No.useState("")
              , S = (0,
            s.Z)(I, 2)
              , x = S[0]
              , N = S[1]
              , R = No.useState("")
              , T = (0,
            s.Z)(R, 2)
              , P = T[0]
              , A = T[1];
            No.useEffect((function() {
                if (n && n === r && Object.prototype.hasOwnProperty.call(a, n)) {
                    var e = a[n];
                    if (e.status === Gn.Disconnected && !1 !== e.showToUser) {
                        var o = function(e, t) {
                            switch (t) {
                            case "CustomPIEFailed":
                                return e("disconnect-code-custom-pie-failed");
                            case "CustomTimeout":
                                return e("disconnect-code-custom-timeout");
                            case "UserInitiatedDisconnect":
                            case "StackInitiatedDisconnect":
                            case "TS_ERRINFO_LOGOFF_BY_USER":
                                return e("disconnect-code-user-initiated");
                            case "UI_ERR_SYSTEM_SUSPENDED":
                                return e("disconnect-code-hibernate-sleep");
                            case "TS_ERRINFO_RPC_INITIATED_DISCONNECT":
                            case "TS_ERRINFO_RPC_INITIATED_LOGOFF":
                                return e("disconnect-code-server-tool");
                            case "TS_ERRINFO_IDLE_TIMEOUT":
                                return e("disconnect-code-idle-timeout");
                            case "TS_ERRINFO_LOGON_TIMEOUT":
                                return e("disconnect-code-logon-timeout");
                            case "TS_ERRINFO_DISCONNECTED_BY_OTHERCONNECTION":
                                return e("disconnect-code-replaced-by-other-connection");
                            case "TS_ERRINFO_OUT_OF_MEMORY":
                                return e("disconnect-code-server-out-of-memory");
                            case "TS_ERRINFO_SERVER_DENIED_CONNECTION":
                            case "TS_ERRINFO_SERVER_DENIED_CONNECTION_FIPS":
                                return e("disconnect-code-server-denied-connection");
                            case "TS_ERRINFO_SERVER_INSUFFICIENT_PRIVILEGES":
                                return e("disconnect-code-server-insufficient-privileges");
                            case "TS_ERRINFO_SERVER_FRESH_CREDS_REQUIRED":
                                return e("disconnect-code-fresh-creds-required");
                            case "TS_ERRINFO_LICENSE_NO_LICENSE_SERVER":
                                return e("disconnect-code-no-license-server");
                            case "TS_ERRINFO_LICENSE_NO_LICENSE":
                                return e("disconnect-code-no-license-available");
                            case "TS_ERRINFO_LICENSE_NO_REMOTE_CONNECTIONS":
                                return e("disconnect-code-no-remote-connection-license");
                            case "TS_ERRINFO_LICENSE_BAD_CLIENT_LICENSE":
                                return e("disconnect-code-invalid-license");
                            case "TS_ERRINFO_LICENSE_BAD_CLIENT_MSG":
                            case "TS_ERRINFO_LICENSE_INTERNAL":
                            case "TS_ERRINFO_LICENSE_HWID_DOESNT_MATCH_LICENSE":
                            case "TS_ERRINFO_LICENSE_CANT_FINISH_PROTOCOL":
                            case "TS_ERRINFO_LICENSE_CLIENT_ENDED_PROTOCOL":
                            case "TS_ERRINFO_LICENSE_BAD_CLIENT_ENCRYPTION":
                            case "TS_ERRINFO_LICENSE_CANT_UPGRADE_LICENSE":
                            case "TS_ERRINFO_LICENSE_CREATING_LICSTORE_ACCESS_DENIED":
                                return e("disconnect-code-generic-license-error");
                            case "TS_ERRINFO_SB_DESTINATION_NOT_FOUND":
                                return e("disconnect-code-destination-not-found");
                            case "TS_ERRINFO_SB_LOADING_DESTINATION":
                                return e("disconnect-code-loading-destination");
                            case "TS_ERRINFO_SB_REDIRECTING_TO_DESTINATION":
                                return e("disconnect-code-redirecting-to-destination");
                            case "TS_ERRINFO_SB_SESSION_ONLINE_VM_WAKE":
                                return e("disconnect-code-vm-wake");
                            case "TS_ERRINFO_SB_SESSION_ONLINE_VM_BOOT":
                                return e("disconnect-code-vm-boot");
                            case "TS_ERRINFO_SB_SESSION_ONLINE_VM_NO_DNS":
                                return e("disconnect-code-vm-no-dns");
                            case "TS_ERRINFO_SB_DESTINATION_POOL_NOT_FREE":
                                return e("disconnect-code-pool-not-free");
                            case "TS_ERRINFO_SB_CONNECTION_CANCELLED":
                                return e("disconnect-code-connection-cancelled");
                            case "TS_ERRINFO_SB_CONNECTION_ERROR_INVALID_SETTINGS":
                                return e("disconnect-code-invalid-settings");
                            case "TS_ERRINFO_SB_SESSION_ONLINE_VM_BOOT_TIMEOUT":
                                return e("disconnect-code-boot-timeout");
                            case "TS_ERRINFO_SB_SESSION_ONLINE_VM_SESSMON_FAILED":
                                return e("disconnect-code-sessmon-failed");
                            case "DnsLookupFailed":
                            case "UI_ERR_DNSLOOKUPFAILED":
                                return e("disconnect-code-server-name-lookup-failed");
                            case "TransportClosedUnexpectedly":
                            case "ClientNetworkUnavailable":
                                return e("disconnect-code-connection-broken");
                            case "NL_ERR_TDONCALLTOSEND":
                            case "NL_ERR_TDONCALLTORECV":
                            case "SocketConnectionTimedOut":
                                return e("disconnect-code-socket-connection-failed");
                            case "NL_ERR_TDGHBNFAILED":
                            case "NL_ERR_TDBADIPADDRESS":
                            case "UI_ERR_GHBNFAILED":
                            case "UI_ERR_BADIPADDRESS":
                                return e("disconnect-code-bad-ip");
                            case "SocketConnectionClosed":
                                return e("disconnect-code-websocket-normal-disconnect");
                            case "NL_ERR_TDANSICONVERT":
                            case "UI_ERR_ANSICONVERT":
                                return e("disconnect-code-ansi-conversion");
                            case "NL_ERR_XTBADTPKTVERSION":
                            case "NL_ERR_XTBADHEADER":
                            case "NL_ERR_XTUNEXPECTEDDATA":
                            case "NL_ERR_MCSUNEXPECTEDPDU":
                            case "NL_ERR_MCSNOTCRPDU":
                            case "NL_ERR_MCSBADCRLENGTH":
                            case "NL_ERR_MCSBADCRFIELDS":
                            case "NL_ERR_MCSNOUSERIDINAUC":
                            case "NL_ERR_MCSNOCHANNELIDINCJC":
                            case "NL_ERR_MCSINVALIDPACKETFORMAT":
                            case "NL_ERR_MCSSENDCIFAILED":
                            case "NL_ERR_NCBADMCSRESULT":
                            case "NL_ERR_NCNOUSERDATA":
                            case "NL_ERR_NCINVALIDH221KEY":
                            case "NL_ERR_NCNONETDATA":
                            case "NL_ERR_NCJOINBADCHANNEL":
                            case "NL_ERR_NCNOCOREDATA":
                                return e("disconnect-code-generic-protocol-error");
                            case "NL_ERR_MCSBADMCSREASON":
                            case "NL_ERR_NCVERSIONMISMATCH":
                                return e("disconnect-code-version-mismatch");
                            case "SL_ERR_NOMEMFORSENDUD":
                            case "SL_ERR_NOMEMFORRECVUD":
                            case "SL_ERR_NOMEMFORSECPACKET":
                                return e("disconnect-code-server-out-of-memory");
                            case "SL_ERR_NOSECURITYUSERDATA":
                            case "SL_ERR_INVALIDENCMETHOD":
                            case "SL_ERR_INVALIDSRVRAND":
                            case "SL_ERR_INVALIDSRVCERT":
                            case "SL_ERR_GENSRVRANDFAILED":
                            case "SL_ERR_MKSESSKEYFAILED":
                            case "SL_ERR_ENCCLNTRANDFAILED":
                                return e("disconnect-code-generic-security-error");
                            case "SL_ERR_ENCRYPTFAILED":
                            case "SL_ERR_DECRYPTFAILED":
                            case "SSL_ERR_ENCRYPTION_FAILED":
                            case "SSL_ERR_DECRYPTION_FAILED":
                                return e("disconnect-code-encryption-failed");
                            case "SL_ERR_INVALIDPACKETFORMAT":
                                return e("disconnect-code-invalid-packet-format");
                            case "SL_ERR_INITFIPSFAILED":
                                return e("disconnect-code-init-fips-failed");
                            case "SL_ERR_LICENSINGTIMEOUT":
                                return e("disconnect-code-generic-license-error");
                            case "SL_ERR_NOTIMER":
                            case "UI_ERR_NOTIMER":
                                return e("disconnect-code-timer-error");
                            case "SSL_ERR_CERT_VALIDATION_FAILED":
                                return e("disconnect-code-cert-validation-failed");
                            case "SSL_ERR_HANDSHAKE_FAILED":
                                return e("disconnect-code-ssl-handshake-failed");
                            case "SSL_ERR_INITIALIZATION_FAILED":
                            case "SSL_ERR_INVALID_STATE":
                            case "SSL_ERR_RCVBUFFER_RESIZE_FAILED":
                            case "SSL_ERR_WRONG_PRINCIPAL":
                            case "SSL_ERR_DELEGATION_POLICY":
                            case "NTLMOnlyNotAllowed":
                            case "NoAuthenticatingAuthority":
                            case "SSL_ERR_NO_SC_AUTHENTICATING_AUTHORITY":
                            case "SSL_ERR_NO_PASSWD_AUTHENTICATING_AUTHORITY":
                            case "SSL_ERR_DOWNGRADE_DETECTED":
                            case "SSL_ERR_NO_CREDENTIAL":
                            case "SSL_ERR_NO_CREDENTIAL_RECONNECT":
                            case "SSL_ERR_SMARTCARD_BLOCKED":
                            case "SSL_ERR_LOGON_FAILURE_RELAUNCH_APP":
                            case "SSL_ERR_CREDENTIAL_PROMPT_FAILED":
                            case "SSL_ERR_PKINIT_NAME_MISMATCH":
                            case "NEG_ERR_SSLREQUIRED":
                            case "NEG_ERR_NOSERVERSSLSUPPORT":
                            case "NEG_ERR_NEGFLAGSMISMATCH":
                            case "NEG_ERR_SSLCERTNOTONSERVER":
                            case "NEG_ERR_SSLWITHUSERAUTHREQUIRED":
                                return e("disconnect-code-generic-security-error");
                            case "SSL_ERR_USER2USER_REQUIRED":
                                return e("disconnect-code-kerberos-user2user-required");
                            case "SSL_ERR_TIME_SKEW":
                                return e("disconnect-code-time-skew");
                            case "AuthenticationLogonFailed":
                                return e("disconnect-code-logon-failed");
                            case "SSL_ERR_CERT_MISMATCH":
                                return e("disconnect-code-cert-mismatch");
                            case "InvalidUserName":
                                return e("disconnect-code-invalid-username");
                            case "AccountDisabled":
                                return e("disconnect-code-account-disabled");
                            case "RestrictedAccountAccess":
                                return e("disconnect-code-account-restricted");
                            case "AccountLockedOut":
                                return e("disconnect-code-account-locked-out");
                            case "AccountExpired":
                                return e("disconnect-code-account-expired");
                            case "PasswordExpired":
                                return e("disconnect-code-password-expired");
                            case "InvalidLogonHours":
                                return e("disconnect-code-invalid-logon-hours");
                            case "LogonRestrictedToMachine":
                                return e("disconnect-code-invalid-workstation");
                            case "PasswordMustChange":
                                return e("disconnect-code-password-must-change");
                            case "LogonTypeNotGranted":
                                return e("disconnect-code-logon-type-not-granted");
                            case "SSL_ERR_CERT_EXPIRED":
                                return e("disconnect-code-cert-expired");
                            case "IncorrectSmartcardPIN":
                                return e("disconnect-code-invalid-pin");
                            case "FreshCredsRequired":
                                return e("disconnect-code-fresh-creds-required");
                            case "SSL_ERR_NO_AUTH_AUTHORITY_NLA_REQUIRED":
                                return e("disconnect-code-no-auth-authority");
                            case "SSL_ERR_ACCESS_DENIED":
                                return e("disconnect-code-server-insufficient-privileges");
                            case "SSL_ERR_UNSUPPORTED_CREDENTIAL_TYPE":
                                return e("disconnect-code-unsupported-cred-type");
                            case "SSL_ERR_INVALID_UPN_NAME":
                                return e("disconnect-code-invalid-upn-name");
                            case "NetworkDisconnectTimeout":
                                return e("disconnect-code-network-disconnect-timeout");
                            case "UI_ERR_LOOPBACK_CONSOLE_CONNECT":
                                return e("disconnect-code-loopback-unsupported");
                            case "LicensingNegotiationFailed":
                                return e("disconnect-code-no-license-available");
                            case "UI_ERR_LICENSING_TIMEOUT":
                                return e("disconnect-code-generic-license-error");
                            case "UI_ERR_UNEXPECTED_DISCONNECT":
                                return e("disconnect-code-socket-connection-failed");
                            case "UI_ERR_NORMAL_DISCONNECT":
                                return e("disconnect-code-websocket-normal-disconnect");
                            case "UI_ERR_DECOMPRESSION_FAILURE":
                                return e("disconnect-code-decompression-failed");
                            case "OutOfMemory":
                                return e("disconnect-code-server-out-of-memory");
                            case "UI_ERR_ARC_FAILED":
                                return e("disconnect-code-auto-reconnect-failed");
                            case "UI_ERR_POLICY_PROHIBITS_CONNECTION":
                                return e("disconnect-code-prohibited-by-policy");
                            case "UI_ERR_LOW_VIDEO_MEMORY":
                                return e("disconnect-code-server-out-of-memory");
                            case "UI_ERR_RDP_FILE_TAMPERED":
                                return e("disconnect-code-rdp-tampered");
                            case "UI_ERR_RDP_FILE_UNSIGNED":
                                return e("disconnect-code-rdp-unsigned");
                            case "UI_ERR_RDP_FILE_CERT_UNTRUSTED":
                                return e("disconnect-code-trusted-relationship-failure");
                            case "UI_ERR_RDP_FILE_CERT_EXPIRED":
                                return e("disconnect-code-rdp-expired");
                            case "UI_ERR_RDP_FILE_CERT_GENERAL_FAILURE":
                                return e("disconnect-code-rdp-cert-invalid");
                            case "SmartCardRedirectionDisabled":
                                return e("disconnect-code-smartcard-disabled");
                            case "ServerRequiresHybridProtocol":
                                return e("disconnect-code-hybrid-auth-required");
                            case "NEG_ERR_INCOMPATIBLESERVER":
                                return e("disconnect-code-cred-ssp-required");
                            case "NEG_ERR_RESTRICTEDLOGONNOTSUPPORTED":
                                return e("disconnect-code-restricted-logon-not-supported");
                            case "SC_ERR_NO_SERVICE":
                                return e("disconnect-code-smartcard-no-service");
                            case "SC_ERR_NO_READERS_AVAILABLE":
                                return e("disconnect-code-smartcard-no-reader");
                            case "SC_ERR_NO_SMARTCARD":
                                return e("disconnect-code-smartcard-no-card");
                            case "SC_ERR_GENERIC_SMARTCARD_ERROR":
                                return e("disconnect-code-smartcard-generic");
                            case "ConnectionBrokenMissedHeartbeatThresholdExceeded":
                                return e("disconnect-code-connection-broken-missed-heartbeat");
                            case "RAIL_ERR_ARC_FAILED":
                                return e("disconnect-code-auto-reconnect-failed");
                            case "RAIL_ERR_INVALID_RAIL_CAPS":
                                return e("disconnect-code-rail-unsupported");
                            case "PROXY_ERR_LOGONFAILED":
                                return e("disconnect-code-gateway-auth-failure");
                            case "PROXY_ERR_CERTREVFAILED":
                                return e("disconnect-code-gateway-cert-revocation-check-failed");
                            case "PROXY_ERR_INVALIDCERT":
                                return e("disconnect-code-gateway-cert-invalid");
                            case "PROXY_ERR_CERTREVOKED":
                                return e("disconnect-code-gateway-cert-revoked");
                            case "PROXY_ERR_INVALIDCA":
                                return e("disconnect-code-gateway-cert-invalid-ca");
                            case "PROXY_ERR_CERTCNINVALID":
                                return e("disconnect-code-gateway-cert-name-mismatch");
                            case "PROXY_ERR_CERTDATEINVALID":
                                return e("disconnect-code-gateway-cert-expired");
                            case "GenericTransportFailure":
                            case "PROXY_ERR_FAILEDSENDDATA":
                            case "PROXY_ERR_FAILEDREADDATA":
                                return e("disconnect-code-gateway-transport-failure");
                            case "PROXY_ERR_AUTHSUPPORT":
                                return e("disconnect-code-gateway-auth-failure");
                            case "PROXY_ERR_BADURI":
                                return e("disconnect-code-gateway-server-not-found");
                            case "GatewayUnreachable":
                                return e("disconnect-code-gateway-timeout");
                            case "GatewayServiceUnavailable":
                                return e("disconnect-code-gateway-server-unavailable");
                            case "PROXY_ERR_DLLLOADFAILED":
                                return e("disconnect-code-dll-load-failed");
                            case "PROXY_ERR_RPCNOSUPPORT":
                                return e("disconnect-code-rpc-no-support");
                            case "PROXY_ERR_NOSCARDSERVICE":
                                return e("disconnect-code-smartcard-no-service");
                            case "PROXY_ERR_REMOVEDCARD":
                                return e("disconnect-code-smartcard-removed");
                            case "PROXY_ERR_NOSMARTCARD":
                                return e("disconnect-code-smartcard-no-card");
                            case "PROXY_ERR_ERRORSMARTCARD":
                                return e("disconnect-code-gateway-internal-error");
                            case "PROXY_ERR_INVALIDAUTHID":
                                return e("disconnect-code-invalid-host-authid");
                            case "PROXY_ERR_TSHOSTNOTFOUND":
                                return e("disconnect-code-host-not-found");
                            case "PROXY_ERR_SECURITYPACKAGE":
                                return e("disconnect-code-security-package");
                            case "GatewayConnectionAborted":
                                return e("disconnect-code-gateway-connection-aborted");
                            case "PROXY_ERR_NEEDCREDENTIALS":
                                return e("disconnect-code-need-credentials");
                            case "PROXY_ERR_RAP_ACCESSDENIED":
                                return e("disconnect-code-access-denied");
                            case "PROXY_ERR_NAP_ACCESSDENIED":
                                return e("disconnect-code-gateway-nap-access-denied");
                            case "PROXY_ERR_USERCANCELED":
                                return e("disconnect-code-gateway-user-cancelled");
                            case "PROXY_ERR_DISCONNECTBYCORE":
                                return e("disconnect-code-disconnected-by-core");
                            case "PROXY_ERR_NOTALLOWEDBYGP":
                                return e("disconnect-code-not-allowed-by-gp");
                            case "PROXY_ERR_OUTGOINGPROXYAUTH":
                                return e("disconnect-code-outgoing-proxy-auth");
                            case "PROXY_ERR_PASSWORDEXPIRED":
                                return e("disconnect-code-password-expired");
                            case "PROXY_ERR_MAXCONNECTIONSREACHED":
                                return e("disconnect-code-max-connections-reached");
                            case "PROXY_ERR_NOTSUPPORTED":
                                return e("disconnect-code-gateway-not-supported");
                            case "PROXY_ERR_CAPABILITYMISMATCH":
                                return e("disconnect-code-gateway-capability-mismatch");
                            case "PROXY_ERR_INCOMPATIBLE":
                                return e("disconnect-code-gateway-incompatible");
                            case "PROXY_ERR_INVALIDSCPIN":
                                return e("disconnect-code-invalid-pin");
                            case "PROXY_ERR_QUARANTINE_ACCESSDENIED":
                                return e("disconnect-code-quarantine-failure");
                            case "PROXY_ERR_NOCERTAVAILABLE":
                                return e("disconnect-code-gateway-no-cert");
                            case "PROXY_ERR_UNTRUSTEDSERVER":
                                return e("disconnect-code-gateway-not-trusted");
                            case "PROXY_ERR_INVALIDSERVERCERT":
                                return e("disconnect-code-gateway-cert-invalid");
                            case "PROXY_ERR_INCORRECTCREDTYPEPWD":
                                return e("disconnect-code-gateway-incorrect-auth-type-pwd");
                            case "PROXY_ERR_INCORRECTCREDTYPESC":
                                return e("disconnect-code-gateway-incorrect-auth-type-sc");
                            case "PROXY_ERR_NOSCARDREADER":
                                return e("disconnect-code-smartcard-no-reader");
                            case "ClientNetworkLost":
                                return e("disconnect-code-generic-network-error");
                            case "PROXY_ERR_NOPREAUTHCOOKIE":
                                return e("disconnect-code-gateway-no-cookie");
                            case "PROXY_ERR_INVALIDPREAUTHCOOKIE":
                                return e("disconnect-code-gateway-invalid-preauth-cookie");
                            case "PROXY_ERR_BLOCKED_SMARTCARD":
                                return e("disconnect-code-smartcard-blocked");
                            case "PROXY_ERR_IDLETIMEOUT":
                                return e("disconnect-code-idle-timeout");
                            case "PROXY_ERR_SESSIONTIMEOUT":
                                return e("disconnect-code-logon-timeout");
                            case "PROXY_ERR_COOKIE_BADPACKET":
                                return e("disconnect-code-gateway-invalid-cookie");
                            case "PROXY_ERR_COOKIE_AUTH_ACCESSDENIED":
                                return e("disconnect-code-cookie-denied");
                            case "PROXY_ERR_CONSENT_DECLINED":
                                return e("disconnect-code-consent-declined");
                            case "PROXY_ERR_UNSUPPORTED_AUTHENTICATION_METHOD":
                                return e("disconnect-code-unsupported-auth-method");
                            case "PROXY_ERR_REAUTH_AUTHN_FAILED":
                                return e("disconnect-code-reauth-failed");
                            case "PROXY_ERR_REAUTH_CAP_FAILED":
                                return e("disconnect-code-reauth-cap-failed");
                            case "PROXY_ERR_REAUTH_RAP_FAILED":
                                return e("disconnect-code-reauth-rap-failed");
                            case "PROXY_ERR_SDR_NOT_SUPPORTED_BY_TS":
                                return e("disconnect-code-sdr-not-supported");
                            case "PROXY_ERR_SCCERTNOTFOUND":
                                return e("disconnect-code-smartcard-cert-not-found");
                            case "PROXY_ERR_COOKIE_NOT_PRESENT":
                                return e("disconnect-code-cookie-not-present");
                            case "PROXY_ERR_COOKIE_NOT_PRESENT_INSECURE":
                                return e("disconnect-code-cookie-not-present-insecure");
                            case "PROXY_ERR_COOKIE_EXPIRED":
                                return e("disconnect-code-cookie-expired");
                            case "PROXY_ERR_COOKIE_EXPIRED_INSECURE":
                                return e("disconnect-code-cookie-expired-insecure");
                            case "PROXY_ERR_REAUTH_NAP_FAILED":
                                return e("disconnect-code-nap-failed");
                            case "PROXY_ERR_COOKIE_LENGTH_EXCEEDED":
                                return e("disconnect-code-cookie-length");
                            case "ErrorLoadingSslLibraries":
                                return e("disconnect-code-error-loading-ssl-libraries");
                            case "PROXY_ERR_FORWARD_PROXY_ERROR":
                                return e("disconnect-code-forward-proxy-error");
                            case "PROXY_ERR_RESOURCE_CAPACITY_REACHED":
                                return e("disconnect-code-resource-capacity-reached");
                            case "AutoreconnectFailedBecauseSessionEnded":
                                return e("disconnect-code-autoreconnect-failed-session-ended");
                            case "NL_ERR_NCATTACHUSERFAILED":
                            case "NL_ERR_NCCHANNELJOINFAILED":
                            case "NL_ERR_TDLOCALINITCONNECT":
                            case "PROXY_ERR_RESOURCE_ACCESS_DENIED":
                            case "PROXY_ERR_RESOURCE_NOT_AVALIABLE":
                            case "PROXY_ERR_USER_NOT_CONNECTED_TO_PRIVATE_ENDPOINT":
                            case "PROXY_ERR_RESOURCE_UNKOWN_FAILURE":
                            case "PROXY_ERR_SIDETRANSPORT_DISCONNECTED":
                            case "PROXY_ERR_UNSUPPORTED_CLIENT":
                            case "PROXY_ERR_DUALCHANNEL_WEBPROXY_ISSUE":
                            case "PROXY_ERR_RESOURCE_CREATION_PENDING":
                            case "PROXY_ERR_UNEXPECTED_USERNAME":
                            case "PROXY_ERR_DEMO_RESOURCE_NOT_AVAILABLE":
                            case "TS_ERRINFO_RDPENC_INVALID_CREDENTIALS":
                            case "TS_ERRINFO_RDPENC_INTERNALERROR":
                            case "TS_ERRINFO_SALEM_INVALIDHELPSESSION":
                            case "UI_ERR_INTERNAL_TRIGGER_RECONNECT":
                            case "NEG_ERR_BADNEGHEADER":
                            case "NEG_ERR_NEGFLAGNOTPRESENT":
                            case "NEG_ERR_UNKNOWNFAILURECODE":
                            case "NEG_ERR_INCONSISTENTFLAGS":
                            case "SC_ERR_CANCEL_SMARTCARD_DIALOG":
                            case "PROXY_ERR_GRACEFULDISCONNECT":
                            case void 0:
                            case "":
                            default:
                                return e("disconnect-code-generic")
                            }
                        }(t, e.statusSymbolic);
                        return E(o),
                        o === t("disconnect-code-generic") && e.disconnectMessage && k(e.disconnectMessage),
                        e.disconnectCode && w(e.disconnectCode),
                        N(e.timestamp),
                        A(e.avdActivityId),
                        void d(!0)
                    }
                }
                n || d(!1)
            }
            ), [n, a]);
            var D = function() {
                i({
                    type: nr
                })
            }
              , L = t("native-client-connection-error-dialog-title");
            return No.createElement(Rp, {
                titleAriaId: "connectionErrorModal",
                isOpen: u,
                isBlocking: !1,
                onDismiss: D,
                modalLabelText: L
            }, No.createElement("div", {
                className: "connection-error-modal-header device-action-modal-header"
            }, No.createElement(qu.K, {
                horizontal: !0,
                verticalAlign: "center"
            }, No.createElement("div", {
                className: "connection-error-icon"
            }, No.createElement(Fd.J, {
                iconName: "StatusErrorFull"
            })), No.createElement("h2", null, No.createElement(Ml._, {
                className: "connection-error-modal-title device-action-modal-header-title"
            }, L)))), No.createElement("div", {
                className: "connection-error-modal-text device-action-modal-content"
            }, v, No.createElement("div", {
                className: "connection-error-modal-details"
            }, b && No.createElement("div", null, t("native-client-connection-error-dialog-error-code") + b), C && No.createElement("div", null, t("native-client-connection-error-dialog-error-message") + C), No.createElement("div", null, t("native-client-connection-error-dialog-timestamp") + x), No.createElement("div", null, t("native-client-connection-error-dialog-activity-id") + P))), No.createElement("div", {
                className: "connection-error-footer device-action-modal-footer"
            }, No.createElement(qu.K, {
                horizontal: !0,
                tokens: {
                    childrenGap: 10
                },
                className: "device-action-button-container",
                reversed: !0,
                horizontalAlign: "space-between",
                verticalAlign: "center"
            }, No.createElement(Rd.a, {
                id: "button-cancel",
                className: m()("cancel-button", "modal-cancel-button"),
                onClick: D,
                onKeyDown: function(e) {
                    Ou(e) && D()
                },
                ariaLabel: t("native-client-connection-error-dialog-cancel")
            }, t("native-client-connection-error-dialog-cancel")), No.createElement(Qd.K, {
                id: "button-retry",
                key: "button-retry",
                className: "action-button",
                onClick: function() {
                    o(),
                    D()
                },
                ariaLabel: t("native-client-connection-error-dialog-retry")
            }, t("native-client-connection-error-dialog-retry")))))
        }
        ))
          , vE = (0,
        ko.$j)((function(e, t) {
            return {
                monitoredWorkspaceId: t.workspaceId,
                device: t.device,
                workspaceId: t.device.workspaceId,
                workspaceName: t.device.workspaceName,
                startConnection: t.startConnection,
                flexStatus: e.NativeClient.flexStatus,
                flexStateMap: e.Device.flexStateMap
            }
        }
        ))((function(e) {
            var n = e.flexStatus
              , a = e.flexStateMap
              , r = e.workspaceId
              , o = e.workspaceName
              , i = e.monitoredWorkspaceId
              , c = e.device
              , l = e.startConnection
              , u = e.dispatch
              , d = es()
              , p = No.useState(!1)
              , m = (0,
            s.Z)(p, 2)
              , f = m[0]
              , v = m[1]
              , E = (0,
            No.useState)(!1)
              , g = (0,
            s.Z)(E, 2)
              , h = g[0]
              , b = g[1];
            No.useEffect((function() {
                if (Object.prototype.hasOwnProperty.call(a, r) && a[r]) {
                    var e = a[r];
                    e.state !== Ic.Active && e.state !== Ic.Activating || u({
                        type: ir,
                        payload: r
                    })
                }
            }
            ), [a[r]]),
            No.useEffect((function() {
                if (r && r === i && Object.prototype.hasOwnProperty.call(n, r) && n[r] && Object.prototype.hasOwnProperty.call(a, r) && a[r]) {
                    var e = n[r]
                      , t = a[r].state;
                    if (e.showFlexDialog && (t === Ic.Active || c.deviceStatus === _c.Running) && !1 === e.flexDialogConfirmed)
                        return v(!0),
                        b(!1),
                        void Hv("Flex Device acquired for user, launching reminder dialog.");
                    v(!1)
                }
            }
            ), [r, n, a, c]);
            var w = function() {
                v(!1),
                b(!1),
                u({
                    type: cr,
                    payload: {
                        workspaceId: r,
                        flexDialogConfirmed: !1,
                        showFlexDialog: !1
                    }
                }),
                u({
                    type: je,
                    payload: {
                        workspaceId: r
                    }
                }),
                u({
                    type: Ne,
                    payload: r
                }),
                Zv("click cancel button with flex, license was acquired but user did not connect");
                var e = {
                    status: Gn.Disconnected,
                    avdActivityId: t("native-client-activity-id-unavailable"),
                    timestamp: (new Date).toISOString(),
                    workspaceId: r,
                    showToUser: !1
                };
                u({
                    type: Ja,
                    payload: e
                })
            }
              , y = [No.createElement(Rd.a, {
                id: "button-cancel",
                key: "button-cancel",
                className: "native-client-flex-cancel-button",
                onClick: w,
                ariaLabel: t("flex-dialog-button-cancel")
            }, t("flex-dialog-button-cancel")), No.createElement(Qd.K, {
                id: "button-connect",
                key: "button-connect",
                className: "native-client-flex-connect-button",
                disabled: h,
                onClick: function() {
                    b(!0),
                    Zv("click connect button with flex"),
                    l(),
                    u({
                        type: cr,
                        payload: {
                            workspaceId: r,
                            flexDialogConfirmed: !0,
                            showFlexDialog: !1
                        }
                    }),
                    v(!1)
                },
                ariaLabel: t("flex-dialog-button-connect")
            }, t("flex-dialog-button-connect"))]
              , _ = d.reverseModalFooter ? y.slice().reverse() : y
              , C = t("flex-dialog-title");
            return No.createElement(Rp, {
                titleAriaId: "flexModal",
                isOpen: f,
                isBlocking: !0,
                modalLabelText: C
            }, No.createElement("div", {
                className: "flex-modal-header device-action-modal-header"
            }, No.createElement(Ml._, {
                className: "flex-header-title device-action-modal-header-title",
                role: "heading"
            }, C), No.createElement(Zu.h, {
                styles: {
                    root: {
                        marginTop: 5,
                        color: "#605E5C",
                        marginLeft: 41
                    }
                },
                iconProps: {
                    iconName: "Cancel"
                },
                ariaLabel: t("close"),
                onClick: w,
                className: "device-action-modal-close"
            })), No.createElement("div", {
                className: "flex-modal-text device-action-modal-content"
            }, No.createElement(Ml._, {
                className: "flex-text-title"
            }, t("flex-dialog-text", {
                workspaceName: o
            }))), No.createElement("div", {
                className: "flex-modal-footer device-action-modal-footer"
            }, No.createElement(qu.K, {
                horizontal: !0,
                tokens: {
                    childrenGap: 10
                },
                className: "device-action-button-container"
            }, _)))
        }
        ))
          , EE = (0,
        ko.$j)((function(e) {
            return {
                Flighting: e.EcsConfiguration.FlightingData
            }
        }
        ))
          , gE = function(e) {
            var t = e.dispatch
              , n = e.Flighting
              , a = (0,
            gm.UO)()
              , r = (0,
            No.useCallback)((function(e) {
                return e.workspaceId === a.id
            }
            ), [a.id]);
            return No.useMemo((function() {
                window.t = e.t
            }
            ), [e.t]),
            No.useEffect((function() {
                t({
                    type: we
                })
            }
            ), [t]),
            n.Context_Menu_IWP ? No.createElement("div", {
                className: "w-fill flex flex-col items-center"
            }, No.createElement("div", null, No.createElement("div", {
                className: "mb-7 mx-auto"
            }, No.createElement(Hp, {
                hideWelcomeButton: !0
            })), No.createElement(Ud, {
                deviceListFilter: r
            }), lm.renderDialogs())) : null
        };
        gE.displayName = "ContextMenuPage";
        var hE = EE(zl()(gE))
          , bE = !1
          , wE = (0,
        ko.$j)((function(e, t) {
            return {
                device: t.device,
                index: t.index,
                deviceStatus: e.NativeClient.connectionStatus,
                remoteUrl: e.Device.remoteUrl,
                launchCount: e.NativeClient.launchCount,
                enableFLW: e.EcsConfiguration.FlightingData.IWP_NH_FLW,
                homepageMessageBar: e.NativeClient.homepageMessageBar,
                deviceStateTips: e.Device.stateTipsMap,
                flexStateMap: e.Device.flexStateMap
            }
        }
        ))((function(e) {
            var n = e.index
              , a = e.device
              , r = e.deviceStatus
              , o = e.remoteUrl
              , i = e.launchCount
              , c = e.enableFLW
              , u = e.homepageMessageBar
              , d = e.deviceStateTips
              , p = e.flexStateMap
              , m = e.dispatch;
            bE || ((0,
            rc.fm)({
                icons: {
                    "Spinner-Icon": No.createElement(xd.$, {
                        size: Nd.E.small
                    }),
                    "open-icon-svg": No.createElement(Wu.Q, {
                        src: "/img/windows/openIcon.svg",
                        style: {
                            width: "16px",
                            height: "16px",
                            fontSize: "16px"
                        }
                    })
                }
            }),
            bE = !0);
            var f = {}
              , v = (0,
            l.Z)((0,
            l.Z)({}, kd), {}, {
                textContainer: {
                    flexGrow: 0
                },
                root: {
                    borderRadius: 4
                }
            })
              , E = No.useState(void 0)
              , g = (0,
            s.Z)(E, 2)
              , h = g[0]
              , b = g[1]
              , w = No.useState(void 0)
              , y = (0,
            s.Z)(w, 2)
              , _ = y[0]
              , C = y[1]
              , k = No.useState("native-client-initializing-status")
              , I = (0,
            s.Z)(k, 2)
              , S = I[0]
              , x = I[1]
              , N = No.useState("open-icon-svg")
              , R = (0,
            s.Z)(N, 2)
              , T = R[0]
              , P = R[1]
              , A = No.useState(t("connect"))
              , D = (0,
            s.Z)(A, 2)
              , L = D[0]
              , O = D[1]
              , F = No.useRef(!1)
              , M = No.useState(f)
              , U = (0,
            s.Z)(M, 2)
              , Z = U[0]
              , H = U[1]
              , B = No.useState(v)
              , W = (0,
            s.Z)(B, 2)
              , V = W[0]
              , G = W[1]
              , z = a.workspaceId
              , Y = a.licenseCategory === kc.Flex
              , q = Y && c
              , K = L === t("native-client-initializing-status") ? t("native-client-aria-label-initializing-status") : L
              , j = function() {
                var e;
                return null === (e = (0,
                gm.TH)().pathname) || void 0 === e ? void 0 : e.startsWith("/windows/context-menu")
            }()
              , X = {
                root: ["centered-icon", {
                    paddingLeft: 5,
                    marginLeft: 0,
                    marginRight: 0
                }]
            }
              , $ = {
                root: {
                    paddingLeft: 5,
                    marginLeft: 0,
                    marginRight: 0
                }
            }
              , Q = {
                root: ["sliding-left-icon", {
                    paddingLeft: 5,
                    marginLeft: 0,
                    marginRight: 0
                }]
            }
              , J = (0,
            l.Z)((0,
            l.Z)({}, kd), {}, {
                textContainer: {
                    flexGrow: 1,
                    textAlign: "left",
                    paddingLeft: 5
                },
                root: {
                    borderRadius: 4
                }
            })
              , ee = (0,
            l.Z)((0,
            l.Z)({}, kd), {}, {
                textContainer: ["ms-fadeIn400", {
                    flexGrow: 1,
                    textAlign: "left",
                    paddingLeft: 5
                }],
                root: {
                    borderRadius: 4
                }
            })
              , te = function(e) {
                return (0,
                l.Z)((0,
                l.Z)({}, e), {}, {
                    flexContainer: ["ms-fadeIn400"]
                })
            }
              , ne = No.useRef([])
              , ae = No.useRef();
            No.useEffect((function() {
                return function() {
                    var e, t = (0,
                    ot.Z)(ne.current);
                    try {
                        for (t.s(); !(e = t.n()).done; ) {
                            var n = e.value;
                            clearTimeout(n)
                        }
                    } catch (a) {
                        t.e(a)
                    } finally {
                        t.f()
                    }
                    ae.current && clearTimeout(ae.current)
                }
            }
            ), []),
            No.useEffect((function() {
                if (Object.prototype.hasOwnProperty.call(r, z)) {
                    var e = r[z];
                    if (h !== e.status) {
                        var n, a = (0,
                        ot.Z)(ne.current);
                        try {
                            for (a.s(); !(n = a.n()).done; ) {
                                var o = n.value;
                                clearTimeout(o)
                            }
                        } catch (d) {
                            a.e(d)
                        } finally {
                            a.f()
                        }
                        switch (ne.current = [],
                        e.status) {
                        case Gn.Initializing:
                            ie(),
                            G((u = v,
                            (0,
                            l.Z)((0,
                            l.Z)({}, u), {}, {
                                flexContainer: ["ms-fadeOut400"]
                            }))),
                            F.current = !0;
                            var i = setTimeout((function() {
                                P("Spinner-Icon"),
                                O(" "),
                                G(te(J)),
                                F.current = !0,
                                H(X)
                            }
                            ), 400)
                              , c = setTimeout((function() {
                                P("Spinner-Icon"),
                                O(" "),
                                G(te(J)),
                                F.current = !0,
                                H(Q)
                            }
                            ), 800)
                              , s = setTimeout((function() {
                                P("Spinner-Icon"),
                                O(t(S)),
                                G(ee),
                                F.current = !0,
                                H($)
                            }
                            ), 1800);
                            ne.current = [i, c, s];
                            break;
                        case Gn.Authenticating:
                            ie(),
                            P("Spinner-Icon"),
                            O(t("native-client-authenticating-status")),
                            F.current = !0,
                            H($),
                            G(J);
                            break;
                        case Gn.Finalizing:
                            ie(),
                            P("Spinner-Icon"),
                            O(t("native-client-finalizing-status")),
                            F.current = !0,
                            H($),
                            G(J);
                            break;
                        case Gn.Connected:
                            ie(),
                            P("open-icon-svg"),
                            O(t("connect")),
                            F.current = !1,
                            H(f),
                            G(v);
                            break;
                        case Gn.Disconnected:
                            P("open-icon-svg"),
                            O(t("connect")),
                            F.current = !1,
                            H(f),
                            G(v),
                            !1 !== e.showToUser && ce()
                        }
                        b(e.status)
                    }
                }
                var u
            }
            ), [r, z]);
            var re = {
                iconName: T,
                className: "open-icon-in-native-windows",
                styles: Z
            }
              , oe = a.directLaunchURL || o
              , ie = function() {
                Object.prototype.hasOwnProperty.call(d, z) && d[z] && (d[z].message === t("native-client-connection-error-tip") && m({
                    type: je,
                    payload: {
                        workspaceId: z
                    }
                }))
            }
              , ce = function() {
                var e = {
                    message: t("native-client-connection-error-tip"),
                    type: xc.Error,
                    hiddenLinksText: [t("native-client-connection-error-tip-retry"), t("native-client-connection-error-details")],
                    hiddenLinkShown: !0,
                    hiddenLinksClick: [se, function(e, t) {
                        t({
                            type: tr,
                            payload: e.workspaceId
                        })
                    }
                    ]
                };
                m({
                    type: Ke,
                    payload: {
                        workspaceId: a.workspaceId,
                        deviceStateTip: e
                    }
                })
            }
              , se = function() {
                Mv(a.licenseCategory),
                q ? de() : le()
            }
              , le = No.useCallback((function() {
                a.operationDisabled || F.current || $n.Gz() && (Zv({
                    type: "connect",
                    value: "",
                    launchCount: i.toString()
                }),
                Aa(.6).then((function(e) {
                    var n = {
                        status: Gn.Disconnected,
                        avdActivityId: t("native-client-activity-id-unavailable"),
                        timestamp: (new Date).toISOString(),
                        workspaceId: z,
                        statusSymbolic: "CustomPIEFailed"
                    }
                      , r = {
                        status: Gn.Initializing,
                        avdActivityId: t("native-client-activity-id-unavailable"),
                        timestamp: (new Date).toISOString(),
                        workspaceId: z
                    };
                    m({
                        type: Ja,
                        payload: r
                    }),
                    e ? ia(oe, a.workspaceId, i).then((function() {
                        m({
                            type: er,
                            payload: a.workspaceId
                        })
                    }
                    )).catch((function(e) {
                        m({
                            type: Ja,
                            payload: n
                        }),
                        Vv({
                            error: new Error(ut.PIEError),
                            errorType: ut.PIEError,
                            key: "PIE",
                            msg: "Failed to connect cloudPC. Error:" + e
                        })
                    }
                    )) : ia(oe).then((function() {
                        m({
                            type: er,
                            payload: a.workspaceId
                        })
                    }
                    )).catch((function(e) {
                        m({
                            type: Ja,
                            payload: n
                        }),
                        Vv({
                            error: new Error(ut.PIEError),
                            errorType: ut.PIEError,
                            key: "PIE",
                            msg: "Failed to connect cloudPC. Error:" + e
                        })
                    }
                    )),
                    m({
                        type: ar
                    })
                }
                )))
            }
            ), [a, i])
              , ue = No.useCallback((function() {
                F.current = !1,
                O(t(S)),
                le()
            }
            ), []);
            No.useEffect((function() {
                q && a.deviceStatus && a.deviceStatus !== _c.Running ? x("native-client-starting-status") : x("native-client-initializing-status")
            }
            ), [a]),
            No.useEffect((function() {
                if (q && p && Object.prototype.hasOwnProperty.call(p, z) && p[z] && _ !== p[z].state)
                    if (C(p[z].state),
                    p[z].state === Ic.NoLicensesAvailable) {
                        var e = {
                            status: Gn.Disconnected,
                            avdActivityId: t("native-client-activity-id-unavailable"),
                            timestamp: (new Date).toISOString(),
                            workspaceId: z,
                            showToUser: !1
                        };
                        m({
                            type: Ja,
                            payload: e
                        })
                    } else if (p[z].state !== Ic.NoLicensesAvailable) {
                        m({
                            type: Re,
                            payload: {
                                workspaceId: a.workspaceId
                            }
                        }),
                        m({
                            type: Ne,
                            payload: a.workspaceId
                        });
                        var n = {
                            status: Gn.Initializing,
                            avdActivityId: t("native-client-activity-id-unavailable"),
                            timestamp: (new Date).toISOString(),
                            workspaceId: z
                        };
                        m({
                            type: Ja,
                            payload: n
                        })
                    }
            }
            ), [p]);
            var de = No.useCallback((function() {
                var e = setInterval((function() {
                    m({
                        type: Ce,
                        payload: {
                            workspaceId: a.workspaceId,
                            servicePlan: a.servicePlanId,
                            interval: e
                        }
                    })
                }
                ), 1e4);
                ae.current = e;
                var n = {
                    status: Gn.Initializing,
                    avdActivityId: t("native-client-activity-id-unavailable"),
                    timestamp: (new Date).toISOString(),
                    workspaceId: z
                };
                m({
                    type: Ja,
                    payload: n
                })
            }
            ), []);
            return j ? null : No.createElement(No.Fragment, null, No.createElement("div", {
                className: "native-client-connect-button-container"
            }, No.createElement(Rd.a, {
                className: "native-client-connect-button",
                id: "connectButton".concat(n),
                text: L,
                iconProps: re,
                styles: V,
                ariaLabel: K,
                onClick: se,
                disabled: a.operationDisabled || u === Vn.AVDAppInstalling || u == Vn.AVDAppInstallErrored || Y && a.flwAvailability === Sc.Unavailable
            })), No.createElement(vE, {
                workspaceId: a.workspaceId,
                device: a,
                startConnection: ue
            }), No.createElement(fE, {
                workspaceId: z,
                startConnection: se
            }))
        }
        ))
          , yE = a(3663)
          , _E = function() {
            ld.tap(fe, (function(e, t, n, a) {
                var r = function() {
                    n.pieVersion >= ve && n.config.enable_pin_to_taskbar && t.licenseCategory != kc.Flex && $n.Gz() && function(e, t) {
                        return Ca.apply(this, arguments)
                    }(t, Yn.IsPinnedToTaskbar).then((function(e) {
                        var n = e.data;
                        a(n ? {
                            type: lr,
                            payload: t.workspaceId
                        } : {
                            type: sr,
                            payload: t.workspaceId
                        })
                    }
                    )).catch((function(e) {
                        Vv({
                            error: new Error(ut.PIEError),
                            errorType: ut.PIEError,
                            key: "PinToTaskbarState",
                            msg: "Failed to fetch pin to taskbar state value. Error:" + e
                        })
                    }
                    ))
                };
                No.useEffect((function() {
                    r()
                }
                ), []);
                return {
                    IsDevicePinned: function() {
                        r()
                    },
                    getMenuListItems: function(r) {
                        var o = [];
                        return o = o.concat(function(t, n, r) {
                            var o, i, c = n.pieVersion >= ve && n.config.enable_pin_to_taskbar && t.licenseCategory != kc.Flex;
                            return [{
                                item: {
                                    id: "divider-pin",
                                    key: "pin_divider",
                                    itemType: yE.n.Divider
                                },
                                show: c
                            }, {
                                item: {
                                    id: "button-unpinFromTaskbar",
                                    key: "pin",
                                    className: r,
                                    text: e("native-client-unpin-from-taskbar"),
                                    disabled: !!t.operationDisabled || !!t.operationDisabledConnectEnabled,
                                    onRenderIcon: function() {
                                        return No.createElement(Wu.Q, {
                                            className: "svg-icon",
                                            src: "/img/windows/unpinFromTaskbar.svg",
                                            "aria-hidden": "true"
                                        })
                                    },
                                    onClick: function() {
                                        Zv({
                                            type: "UnpinFromTaskbar",
                                            value: "",
                                            workspaceId: t.workspaceId
                                        }),
                                        $n.Gz() && ka(Hn.UNPIN_FROM_TASKBAR, {
                                            device: t
                                        }).then((function(n) {
                                            n.status == zn.Succeeded ? (a({
                                                type: sr,
                                                payload: t.workspaceId
                                            }),
                                            a({
                                                type: Ke,
                                                payload: {
                                                    workspaceId: t.workspaceId,
                                                    deviceStateTip: {
                                                        type: xc.Success,
                                                        message: e("native-client-unpin-from-taskbar-success-tip"),
                                                        enableClose: !0
                                                    }
                                                }
                                            }),
                                            Hv({
                                                type: "UnpinFromTaskbar",
                                                value: "Succeeded",
                                                workspaceId: t.workspaceId
                                            })) : (a({
                                                type: Ke,
                                                payload: {
                                                    workspaceId: t.workspaceId,
                                                    deviceStateTip: {
                                                        type: xc.Error,
                                                        message: e("native-client-unpin-from-taskbar-failed-tip"),
                                                        enableClose: !0
                                                    }
                                                }
                                            }),
                                            Vv({
                                                error: new Error(ut.PIEError),
                                                errorType: ut.PIEError,
                                                key: "PinToTaskbarAction",
                                                msg: "Failed to unpin cloud pc from taskbar. WorkSpaceId: " + t.workspaceId + " response:" + n
                                            }))
                                        }
                                        )).catch((function(e) {
                                            Vv({
                                                error: new Error(ut.PIEError),
                                                errorType: ut.PIEError,
                                                key: "PinToTaskbarAction",
                                                msg: "Failed to unpin cloud pc from taskbar. WorkSpaceId: " + t.workspaceId + " Error:" + e
                                            })
                                        }
                                        ))
                                    }
                                },
                                show: c && (null === (o = n.deviceState[t.workspaceId]) || void 0 === o ? void 0 : o.isPinnedToTaskbar)
                            }, {
                                item: {
                                    id: "button-pinToTaskbar",
                                    key: "pin",
                                    className: r,
                                    text: e("native-client-pin-to-taskbar"),
                                    disabled: !!t.operationDisabled || !!t.operationDisabledConnectEnabled,
                                    onRenderIcon: function() {
                                        return No.createElement(Wu.Q, {
                                            className: "svg-icon",
                                            src: "/img/windows/pinToTaskbar.svg",
                                            "aria-hidden": "true"
                                        })
                                    },
                                    onClick: function() {
                                        Zv({
                                            type: "PinToTaskbar",
                                            value: "",
                                            workspaceId: t.workspaceId
                                        }),
                                        $n.Gz() && ka(Hn.PIN_TO_TASKBAR, {
                                            device: t
                                        }).then((function(n) {
                                            n.status == zn.Succeeded ? (a({
                                                type: lr,
                                                payload: t.workspaceId
                                            }),
                                            a({
                                                type: Ke,
                                                payload: {
                                                    workspaceId: t.workspaceId,
                                                    deviceStateTip: {
                                                        type: xc.Success,
                                                        message: e("native-client-pin-to-taskbar-success-tip"),
                                                        enableClose: !0
                                                    }
                                                }
                                            }),
                                            Hv({
                                                type: "PinToTaskbar",
                                                value: "Succeeded",
                                                workspaceId: t.workspaceId
                                            })) : (a({
                                                type: Ke,
                                                payload: {
                                                    workspaceId: t.workspaceId,
                                                    deviceStateTip: {
                                                        type: xc.Error,
                                                        message: e("native-client-pin-to-taskbar-failed-tip"),
                                                        enableClose: !0
                                                    }
                                                }
                                            }),
                                            Vv({
                                                error: new Error(ut.PIEError),
                                                errorType: ut.PIEError,
                                                key: "PinToTaskbarAction",
                                                msg: "Failed to pin cloud pc to taskbar. WorkSpaceId: " + t.workspaceId + " response:" + n
                                            }))
                                        }
                                        )).catch((function(e) {
                                            Vv({
                                                error: new Error(ut.PIEError),
                                                errorType: ut.PIEError,
                                                key: "PinToTaskbarAction",
                                                msg: "Failed to pin cloud pc to taskbar. WorkSpaceId: " + t.workspaceId + " Error:" + e
                                            })
                                        }
                                        ))
                                    }
                                },
                                show: c && !(null === (i = n.deviceState[t.workspaceId]) || void 0 === i ? void 0 : i.isPinnedToTaskbar)
                            }]
                        }(t, n, r).filter((function(e) {
                            return e.show
                        }
                        )).map((function(e) {
                            return e.item
                        }
                        )))
                    }
                }
            }
            ))
        }
          , CE = {
            palette: {
                themePrimary: "#323130",
                themeLighterAlt: "#e7e6e5",
                themeLighter: "#d0cfce",
                themeLight: "#bab8b7",
                themeTertiary: "#a3a2a0",
                themeSecondary: "#8d8b8a",
                themeDarkAlt: "#767573",
                themeDark: "#605e5d",
                themeDarker: "#494847",
                neutralLighterAlt: "#faf9f8",
                neutralLighter: "#f3f2f1",
                neutralLight: "#edebe9",
                neutralQuaternaryAlt: "#e1dfdd",
                neutralQuaternary: "#d0d0d0",
                neutralTertiaryAlt: "#c8c6c4",
                neutralTertiary: "#a19f9d",
                neutralSecondary: "#605e5c",
                neutralPrimaryAlt: "#3b3a39",
                neutralPrimary: "#323130",
                neutralDark: "#201f1e",
                black: "#000000",
                white: "#ffffff"
            }
        }
          , kE = {
            palette: {
                themePrimary: "#005fb8",
                themeLighterAlt: "#f2f7fc",
                themeLighter: "#cde1f4",
                themeLight: "#a4c8ea",
                themeTertiary: "#5597d4",
                themeSecondary: "#176ec0",
                themeDarkAlt: "#0055a5",
                themeDark: "#005fb8",
                themeDarker: "#003567",
                black: "#323130",
                white: "#ffffff"
            }
        }
          , IE = (0,
        ko.$j)((function(e, t) {
            return {
                t: t.t,
                homepageMessageBar: e.NativeClient.homepageMessageBar
            }
        }
        ))((function(e) {
            var t = e.homepageMessageBar
              , n = e.t
              , a = e.dispatch;
            if (!t || t === Vn.AVDAppAlreadyInstalled)
                return null;
            var r = n("avd-app-microsoft-store")
              , o = t === Vn.AVDAppInstalling;
            return t === Vn.AVDAppInstallCompleted && setTimeout((function() {
                a({
                    type: or,
                    payload: Vn.AVDAppAlreadyInstalled
                })
            }
            ), 1e4),
            No.createElement(No.Fragment, null, No.createElement(Ld.c, {
                key: "home-page-message-bar-key",
                "aria-label": n("home-page-message-bar"),
                isMultiline: !1,
                messageBarType: function() {
                    if (t)
                        switch (t) {
                        case Vn.AVDAppInstallCompleted:
                            return Rc.f.success;
                        case Vn.AVDAppInstallErrored:
                            return Rc.f.error;
                        case Vn.AVDAppInstalling:
                            return Rc.f.info;
                        default:
                            return
                        }
                }(),
                messageBarIconProps: function() {
                    if (t)
                        return o ? {
                            iconName: ""
                        } : t === Vn.AVDAppInstallCompleted ? {
                            iconName: "SkypeCircleCheck"
                        } : t === Vn.AVDAppInstallErrored ? {
                            iconName: "StatusErrorFull"
                        } : {
                            iconName: ""
                        }
                }(),
                onDismiss: function() {
                    if (t === Vn.AVDAppInstallCompleted)
                        return function() {
                            a({
                                type: or,
                                payload: Vn.AVDAppAlreadyInstalled
                            })
                        }
                }(),
                dismissButtonAriaLabel: function() {
                    if (t === Vn.AVDAppInstallCompleted)
                        return n("close")
                }(),
                className: "home-page-message-bar-container"
            }, No.createElement("span", null, o ? No.createElement(xd.$, {
                size: Nd.E.small,
                className: "home-page-message-bar-spinner"
            }) : null, No.createElement("span", {
                className: "home-page-message-bar-text"
            }, function(e, a, r) {
                if (!t)
                    return No.createElement(No.Fragment, null);
                switch (t) {
                case Vn.AVDAppInstallCompleted:
                    return No.createElement(No.Fragment, null, n("avd-app-installed"));
                case Vn.AVDAppInstallErrored:
                    return No.createElement(No.Fragment, null, No.createElement("b", null, n("avd-app-installation-failed")), n("avd-app-try-install-again"), No.createElement(Al.r, {
                        onClick: function() {
                            return function(e, t) {
                                Zv("click ".concat(t, " in AVD install message bar")),
                                Ea(e)
                            }(e, r)
                        }
                    }, a));
                case Vn.AVDAppInstalling:
                    return No.createElement(No.Fragment, null, n("avd-app-currently-installing"));
                default:
                    return No.createElement(No.Fragment, null)
                }
            }("ms-windows-store://pdp/?productid=9NRNM1N926MN", r, "Microsoft Store")))))
        }
        ))
          , SE = a(8115)
          , xE = (0,
        ko.$j)((function(e, t) {
            var n;
            return {
                disabled: t.disabled,
                children: t.children,
                onClose: t.onClose,
                panelRef: null !== (n = t.panelRef) && void 0 !== n ? n : No.createRef(),
                styles: t.styles,
                className: t.className,
                ariaLabel: t.ariaLabel
            }
        }
        ))((function(e) {
            var t = e.children
              , n = e.disabled
              , a = e.onClose
              , r = e.panelRef
              , o = e.styles
              , i = e.className
              , c = e.ariaLabel
              , s = function(e) {
                var t;
                n || (null === (t = r.current) || void 0 === t ? void 0 : t.contains(e.target)) || a && a()
            };
            return No.useEffect((function() {
                return n || document.addEventListener("click", s),
                function() {
                    document.removeEventListener("click", s)
                }
            }
            ), [n]),
            No.createElement("div", {
                className: ["popup-menu-container", i, n && "hide"].join(" "),
                style: o,
                role: "dialog",
                "aria-hidden": n,
                "aria-label": c
            }, No.createElement(SE.P, {
                disabled: n,
                forceFocusInsideTrap: !0,
                isClickableOutsideFocusTrap: !0,
                onKeyDown: function(e) {
                    "Escape" !== e.key && 27 !== e.keyCode || a && a()
                }
            }, No.createElement("div", {
                className: "popup-menu-inner-container",
                ref: r
            }, t)))
        }
        ))
          , NE = (0,
        ko.$j)((function(e, t) {
            return {
                t: t.t,
                showSettings: e.NativeClient.showSettingsUI,
                showAccount: e.NativeClient.showAccountUI,
                height: e.NativeClient.config.header_height,
                account: e.Home.userInfo,
                initials: t.initials,
                imgurl: e.NativeClient.profilePictureUrl,
                packageVersion: e.NativeClient.config.package_version,
                envType: e.NativeClient.config.environment_type,
                nativeClientReady: e.NativeClient.nativeClientReady,
                enablePreviewText: e.NativeClient.config.enable_preview_text
            }
        }
        ))((function(e) {
            var t = e.t
              , n = e.dispatch
              , a = e.showSettings
              , r = e.showAccount
              , o = e.height
              , i = e.account
              , c = e.initials
              , l = e.imgurl
              , u = e.packageVersion
              , d = e.envType
              , p = e.nativeClientReady
              , m = e.enablePreviewText
              , f = No.useState(!1)
              , v = (0,
            s.Z)(f, 2)
              , E = v[0]
              , g = v[1];
            No.useEffect((function() {
                $n.Gz() && Aa(.7).then((function(e) {
                    g(e)
                }
                ))
            }
            ), [$n.Gz()]);
            var h = function(e) {
                $n.Gz() && Ea(e).catch((function(e) {
                    Vv({
                        error: new Error(ut.PIEError),
                        errorType: ut.PIEError,
                        key: "PIE",
                        msg: "Failed to open link with default browser. Error:" + e
                    })
                }
                ))
            }
              , b = p && d != Mn.PROD ? " ".concat("(".concat(d, ")")) : "";
            return No.createElement("div", {
                className: "native-client-header-menus"
            }, No.createElement(xE, {
                disabled: !a,
                onClose: function() {
                    n({
                        type: ja
                    })
                },
                styles: {
                    top: o + 8,
                    right: 20
                },
                className: "settings-menu",
                ariaLabel: t("native-client-settings-title")
            }, No.createElement(qu.K, null, No.createElement("h1", null, No.createElement("div", {
                className: "title"
            }, t("native-client-settings-title"))), No.createElement(qu.K, {
                horizontal: !0
            }, No.createElement(qu.K, {
                className: "text-container"
            }, No.createElement("div", {
                className: "subtitle"
            }, No.createElement("div", null, t("product-name")), m && No.createElement("div", {
                style: {
                    color: "rgba(0, 0, 0, 0.6063)"
                }
            }, t("preview-tag"))), No.createElement("div", {
                className: "text"
            }, t("native-client-settings-version").concat(" ", u, b)), No.createElement("div", {
                className: "text"
            }, t("copyright-microsoft-corporation")), No.createElement("div", {
                className: "text"
            }, t("rights-reserved")), No.createElement("div", {
                className: "text",
                "aria-hidden": "true"
            }, "\xa0"), No.createElement(Al.r, {
                id: "link-license-terms",
                className: "text",
                onClick: function() {
                    Zv("Software License Term"),
                    h("https://aka.ms/FW1")
                }
            }, t("software-license-terms-link-text")), No.createElement(Al.r, {
                id: "link-privacy-statement",
                className: "text",
                onClick: function() {
                    Zv("Privacy Statement"),
                    h("https://aka.ms/FW2")
                }
            }, t("privacy-statement-link-text")), E && No.createElement(Al.r, {
                id: "link-third-party-notice",
                className: "text",
                onClick: function() {
                    Zv("Third Party Notice"),
                    function() {
                        _a.apply(this, arguments)
                    }()
                }
            }, t("third-party-notice-link-text")))))), No.createElement(xE, {
                disabled: !r,
                onClose: function() {
                    n({
                        type: za
                    })
                },
                styles: {
                    top: o + 8,
                    right: 20
                },
                className: "account-menu",
                ariaLabel: t("account-button")
            }, No.createElement(qu.K, {
                horizontal: !0,
                verticalFill: !0,
                verticalAlign: "start",
                horizontalAlign: "start"
            }, l ? No.createElement("img", {
                className: "user-icon",
                src: l
            }) : No.createElement("div", {
                className: "user-icon",
                "aria-hidden": "true"
            }, c), No.createElement(qu.K, {
                horizontalAlign: "start"
            }, No.createElement("div", {
                className: "text-container"
            }, No.createElement("div", {
                className: "name selectable"
            }, i.name), No.createElement("div", {
                className: "email selectable"
            }, i.email), No.createElement(Al.r, {
                id: "my-account",
                onClick: function() {
                    Zv("My Account"),
                    h("https://myaccount.microsoft.com/")
                },
                className: "account-link"
            }, t("my-account")), No.createElement(Al.r, {
                id: "sign-out",
                onClick: function() {
                    Zv("Sign Out"),
                    n({
                        type: Qa
                    })
                },
                className: "account-link"
            }, t("sign-out")))))))
        }
        ))
          , RE = {
            palette: {
                themePrimary: "#000000e4",
                themeLighterAlt: "#767676",
                themeLighter: "#a6a6a6",
                themeLight: "#c8c8c8",
                themeTertiary: "#d0d0d0",
                themeSecondary: "#dadada",
                themeDarkAlt: "#000000e4",
                themeDark: "#f4f4f4",
                themeDarker: "#f8f8f8",
                neutralLight: "#E6E9EF",
                neutralLighter: "rgba(0, 0, 0, 0.04)",
                black: "#f8f8f8",
                white: "rgba(56, 56, 56, 0.0)"
            }
        }
          , TE = (0,
        ko.$j)((function(e, t) {
            return {
                t: t.t,
                height: e.NativeClient.config.header_height,
                rightOffset: e.NativeClient.config.header_right_offset,
                account: e.Home.userInfo,
                showAccount: e.NativeClient.showAccountUI,
                showSettings: e.NativeClient.showSettingsUI,
                imgurl: e.NativeClient.profilePictureUrl,
                homePageMessageBar: e.NativeClient.homepageMessageBar,
                enablePreviewText: e.NativeClient.config.enable_preview_text
            }
        }
        ))((function(e) {
            var t = e.height
              , n = e.rightOffset
              , a = e.account
              , r = e.homePageMessageBar
              , o = e.showAccount
              , i = e.showSettings
              , c = e.imgurl
              , u = e.enablePreviewText
              , d = e.t
              , p = e.dispatch
              , m = No.useState("MS")
              , f = (0,
            s.Z)(m, 2)
              , v = f[0]
              , E = f[1]
              , g = t
              , h = 0;
            r !== Vn.AVDAppInstallCompleted && r !== Vn.AVDAppInstallErrored && r !== Vn.AVDAppInstalling || (g += 48,
            h = -42);
            var b = No.useRef(null);
            No.useEffect((function() {
                window.t = d
            }
            ), [d]);
            var w = No.useMemo((function() {
                return {
                    wideButtonWidth: Math.floor(1.25 * t),
                    accountButtonHeight: Math.floor(.75 * t) - 2,
                    accountIconFontSize: t < 50 ? Math.floor(.34 * t) : Math.floor(.25 * t)
                }
            }
            ), [t])
              , y = w.wideButtonWidth
              , _ = w.accountButtonHeight
              , C = w.accountIconFontSize;
            No.useEffect((function() {
                b.current && (b.current.style.height = _ + "px",
                b.current.style.width = _ + "px",
                b.current.style.borderRadius = _ + "px",
                b.current.style.lineHeight = _ + "px",
                b.current.style.fontSize = C + "px")
            }
            ), [_, C]),
            No.useEffect((function() {
                k()
            }
            ), [a]);
            var k = function() {
                if (a.name) {
                    var e, t = a.name.split(" ");
                    t.filter((function(e) {
                        return e
                    }
                    )),
                    e = t.length > 1 ? t[0].substring(0, 1).toUpperCase() + t[t.length - 1].substring(0, 1).toUpperCase() : 1 == t.length && t[0].length >= 2 ? t[0].substring(0, 2).toUpperCase() : 1 == t.length && 1 == t[0].length ? t[0].substring(0, 1).toUpperCase() : "MS",
                    E(e);
                    var n = No.createElement(No.Fragment, null, No.createElement("div", {
                        className: "icon-container"
                    }, No.createElement("div", {
                        ref: b,
                        className: "user-icon",
                        style: {
                            width: _,
                            height: _,
                            borderRadius: _,
                            lineHeight: _ + "px",
                            fontSize: C + "px"
                        }
                    }, e)));
                    (0,
                    rc.fm)({
                        icons: {
                            "Account-Circle": n,
                            "feedback-svg": No.createElement(Wu.Q, {
                                src: "img/windows/feedbackIcon.svg",
                                style: {
                                    width: "16px",
                                    height: "16px",
                                    fontSize: "16px"
                                }
                            })
                        }
                    })
                }
            }
              , I = c ? {
                styles: {
                    root: {
                        display: "flex",
                        justifyContent: "Center",
                        alignItems: "Center"
                    }
                },
                imageProps: {
                    src: c,
                    styles: {
                        root: {
                            display: "flex",
                            justifyContent: "Center"
                        },
                        image: {
                            borderRadius: "20px",
                            width: .5 * t,
                            height: .5 * t
                        }
                    }
                }
            } : {
                iconName: "Account-Circle"
            }
              , S = {
                root: [{
                    height: t
                }]
            }
              , x = "rgb(255, 255, 255)"
              , N = {
                styles: {
                    beak: {
                        background: x
                    },
                    beakCurtain: {
                        background: x
                    }
                }
            }
              , R = No.useCallback((function() {
                p(o ? {
                    type: za
                } : {
                    type: Ga
                }),
                Zv("Account")
            }
            ), [o, p])
              , T = No.useCallback((function() {
                $n.Gz() && (Zv("Feedback"),
                Ea("feedback-hub:///?tabid=2&categoryid=75").catch((function(e) {
                    Vv({
                        error: new Error(ut.PIEError),
                        errorType: ut.PIEError,
                        key: "PIE",
                        msg: "Failed to open link with default browser. Error:" + e
                    })
                }
                )))
            }
            ), [])
              , P = No.useCallback((function() {
                p(i ? {
                    type: ja
                } : {
                    type: Ka
                }),
                Zv("Setting")
            }
            ), [i, p])
              , A = {
                root: {
                    width: y,
                    height: t
                },
                flexContainer: {
                    flexDirection: "column",
                    height: "unset",
                    position: "relative"
                }
            };
            return No.createElement(No.Fragment, null, No.createElement("div", {
                className: "native-client-header",
                style: {
                    marginTop: -1 * g
                }
            }, No.createElement(Qu.f, {
                theme: RE
            }, No.createElement(qu.K, {
                horizontal: !0,
                styles: S,
                verticalAlign: "center",
                verticalFill: !0
            }, No.createElement("img", {
                className: "logo-icon",
                src: "img/favicon.png"
            }), No.createElement("div", {
                className: "product-name"
            }, No.createElement("div", null, d("product-name")), u && No.createElement("div", {
                style: {
                    color: "rgba(0, 0, 0, 0.6063)"
                }
            }, d("preview-tag"))), No.createElement(qu.K.Item, {
                grow: !0,
                styles: {
                    root: {
                        display: "flex"
                    }
                }
            }, No.createElement("div", null)), No.createElement("div", {
                id: "native-client-buttons"
            }, No.createElement(qu.K, {
                horizontal: !0,
                styles: S,
                verticalAlign: "center",
                verticalFill: !0
            }, No.createElement(Uu.G, {
                content: d("feedback-button"),
                calloutProps: (0,
                l.Z)((0,
                l.Z)({}, N), {}, {
                    gapSpace: 10
                })
            }, No.createElement(Zu.h, {
                id: "windows-feedback",
                "aria-label": d("feedback-button"),
                iconProps: {
                    iconName: "feedback-svg"
                },
                className: "button-up",
                onClick: T,
                styles: A,
                text: d("feedback-button"),
                role: "button"
            })), No.createElement(Uu.G, {
                content: d("native-client-settings-button"),
                calloutProps: (0,
                l.Z)((0,
                l.Z)({}, N), {}, {
                    gapSpace: 10
                })
            }, No.createElement(Zu.h, {
                id: "windows-settings",
                "aria-label": d("native-client-settings-button"),
                iconProps: {
                    iconName: "info"
                },
                className: i ? "button-down" : "button-up",
                onClick: P,
                styles: A,
                text: d("native-client-settings-button"),
                role: "button"
            })), No.createElement("div", {
                className: "vertical-line"
            }), No.createElement(Uu.G, {
                content: d("account-button"),
                calloutProps: N
            }, No.createElement(Zu.h, {
                id: "windows-account",
                "aria-label": d("account-button"),
                iconProps: I,
                className: o ? "account-button-down" : "account-button-up",
                styles: {
                    root: {
                        width: t,
                        height: t,
                        padding: 0,
                        display: "flex",
                        justifyContent: "center"
                    },
                    icon: {
                        width: .75 * t,
                        height: .67 * t
                    }
                },
                onClick: R,
                text: d("account-button"),
                role: "button"
            })))), No.createElement("div", {
                style: {
                    width: n,
                    display: "block"
                }
            })))), No.createElement("div", {
                className: "popup-menus"
            }, No.createElement(NE, {
                t: d,
                initials: v
            })), No.createElement("div", {
                className: "home-page-message-bar",
                style: {
                    marginTop: h
                }
            }, No.createElement(IE, {
                t: d
            })))
        }
        ))
          , PE = function() {
            dm.tap(fe, (function(e, t) {
                var n = (0,
                ko.v9)(Fr);
                return {
                    contentStyles: {
                        marginTop: t,
                        height: "calc(100% - ".concat(t, "px)"),
                        overflowY: "auto",
                        position: "absolute"
                    },
                    contentEffect: function(e) {
                        e({
                            type: Ha
                        }),
                        e({
                            type: $a
                        }),
                        Aa(.2).then((function(t) {
                            var a;
                            t ? Na((function(t) {
                                e({
                                    type: Va,
                                    payload: t
                                })
                            }
                            )) : (a = function(t) {
                                e({
                                    type: Ba,
                                    payload: Za(t, n)
                                })
                            }
                            ,
                            Xn.HostBridge.registerForEvent("Windows365PieSchema.UpdateSettings", (function(e) {
                                if (e) {
                                    var t = oa.UpdateSettingsParamsProcessor();
                                    t.process ? t.process(e) : t.convert && (e = t.convert(e)),
                                    a(e.settings)
                                }
                            }
                            )))
                        }
                        )),
                        Aa(.6).then((function(t) {
                            t && Ta((function(t) {
                                e({
                                    type: Ja,
                                    payload: t
                                })
                            }
                            ))
                        }
                        )),
                        Aa(.8).then((function(t) {
                            t && Ra((function(t) {
                                e({
                                    type: or,
                                    payload: t
                                })
                            }
                            ))
                        }
                        ))
                    },
                    loadingEffect: function(e) {
                        setTimeout((function() {
                            $n.Gz() && !e && ha().catch((function(e) {
                                Vv({
                                    error: new Error(ut.PIEError),
                                    errorType: ut.PIEError,
                                    key: "PIE",
                                    msg: "Failed to signal IWP load. Error:" + e
                                })
                            }
                            ))
                        }
                        ), 1e3)
                    },
                    component: No.createElement(TE, {
                        t: e
                    })
                }
            }
            ))
        }
          , AE = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return No.createElement("svg", Object.assign({
                width: "216",
                height: "42",
                viewBox: "0 0 216 42",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), No.createElement("g", {
                clipPath: "url(#clip0_868_232469)"
            }, No.createElement("path", {
                d: "M215.5 0.867188H0.5V41.8672H215.5V0.867188Z",
                fill: "white"
            }), No.createElement("path", {
                d: "M214.5 1.86719V40.8672H1.5V1.86719H214.5ZM215.5 0.867188H0.5V41.8672H215.5V0.867188Z",
                fill: "#8C8C8C"
            }), No.createElement("path", {
                d: "M46.3124 25.9485V24.1545C46.4872 24.3111 46.6807 24.4454 46.8884 24.5545C47.1151 24.6745 47.3516 24.7749 47.5954 24.8545C47.8397 24.9342 48.0893 24.9967 48.3424 25.0415C48.5694 25.0832 48.7996 25.1049 49.0304 25.1065C49.5999 25.1466 50.1688 25.0197 50.6674 24.7415C50.8417 24.6266 50.983 24.4682 51.0774 24.282C51.1717 24.0957 51.2159 23.8881 51.2054 23.6795C51.2112 23.4503 51.1489 23.2244 51.0264 23.0305C50.892 22.8345 50.7225 22.665 50.5264 22.5305C50.2863 22.3652 50.0332 22.2197 49.7694 22.0955C49.4781 21.9562 49.1664 21.8109 48.8344 21.6595C48.4784 21.4695 48.1474 21.2765 47.8344 21.0815C47.5431 20.8979 47.2745 20.6804 47.0344 20.4335C46.8104 20.2006 46.6296 19.9297 46.5004 19.6335C46.3642 19.3017 46.2981 18.9452 46.3064 18.5865C46.2952 18.1355 46.4106 17.6904 46.6394 17.3015C46.8606 16.939 47.1612 16.6313 47.5184 16.4015C47.8997 16.1569 48.3196 15.9784 48.7604 15.8735C49.225 15.759 49.7019 15.7013 50.1804 15.7015C50.998 15.6528 51.8164 15.7803 52.5804 16.0755V17.7965C51.902 17.342 51.0962 17.116 50.2804 17.1515C50.021 17.1517 49.7622 17.1765 49.5074 17.2255C49.2666 17.2695 49.0341 17.3508 48.8184 17.4665C48.6238 17.5726 48.4551 17.7205 48.3244 17.8995C48.194 18.0858 48.1274 18.3093 48.1344 18.5365C48.129 18.7485 48.1794 18.9581 48.2804 19.1445C48.3896 19.3284 48.5357 19.4878 48.7094 19.6125C48.9252 19.7718 49.1556 19.9104 49.3974 20.0265C49.6684 20.1605 49.9814 20.3065 50.3394 20.4625C50.7041 20.6525 51.0494 20.8525 51.3754 21.0625C51.6863 21.2627 51.9735 21.4975 52.2314 21.7625C52.4738 22.0089 52.672 22.295 52.8174 22.6085C52.9671 22.9408 53.0412 23.3022 53.0344 23.6665C53.0493 24.1366 52.9381 24.602 52.7124 25.0145C52.4993 25.3776 52.2015 25.6836 51.8444 25.9065C51.4585 26.1467 51.0328 26.316 50.5874 26.4065C50.0945 26.5122 49.5915 26.5641 49.0874 26.5615C48.9114 26.5615 48.6954 26.5475 48.4384 26.5215C48.1814 26.4955 47.9204 26.4545 47.6514 26.4045C47.3948 26.355 47.1408 26.2926 46.8904 26.2175C46.6866 26.154 46.4923 26.0635 46.3124 25.9485Z",
                fill: "#5E5E5E"
            }), No.createElement("path", {
                d: "M55.6285 17.2938C55.3643 17.299 55.1083 17.2015 54.9145 17.0218C54.8174 16.9358 54.7403 16.8298 54.6884 16.7109C54.6366 16.5921 54.6114 16.4634 54.6145 16.3338C54.6114 16.2024 54.6366 16.0719 54.6883 15.9511C54.7401 15.8303 54.8172 15.7221 54.9145 15.6338C55.1066 15.4507 55.3632 15.3508 55.6285 15.3558C55.8994 15.3494 56.1621 15.4492 56.3605 15.6338C56.4582 15.7218 56.5356 15.83 56.5874 15.9508C56.6392 16.0717 56.6641 16.2023 56.6605 16.3338C56.6615 16.4616 56.6353 16.5882 56.5836 16.7051C56.5318 16.822 56.4558 16.9265 56.3605 17.0118C56.163 17.1983 55.9001 17.2996 55.6285 17.2938ZM56.4705 26.3678H54.7705V18.8678H56.4705V26.3678Z",
                fill: "#5E5E5E"
            }), No.createElement("path", {
                d: "M65.5169 25.7665C65.5169 28.5205 64.1326 29.8975 61.3639 29.8975C60.4867 29.9169 59.6155 29.7496 58.8079 29.4065V27.8525C59.5122 28.2864 60.3181 28.5277 61.1449 28.5525C61.5045 28.607 61.8718 28.577 62.2177 28.4649C62.5637 28.3528 62.8788 28.1617 63.1381 27.9067C63.3974 27.6517 63.5937 27.3398 63.7115 26.9958C63.8293 26.6517 63.8654 26.2849 63.8169 25.9245V25.1065H63.7879C63.5499 25.505 63.2211 25.8416 62.8283 26.089C62.4356 26.3363 61.9899 26.4874 61.5277 26.5299C61.0655 26.5724 60.5998 26.5051 60.1685 26.3335C59.7373 26.1619 59.3526 25.8909 59.0459 25.5425C58.4543 24.777 58.1569 23.8247 58.2079 22.8585C58.1499 21.7719 58.4677 20.6984 59.1079 19.8185C59.4025 19.4487 59.7804 19.1537 60.2107 18.9577C60.641 18.7617 61.1115 18.6701 61.5839 18.6905C62.0275 18.6682 62.4685 18.7702 62.8572 18.985C63.2459 19.1999 63.5669 19.519 63.7839 19.9065H63.8129V18.8665H65.5129L65.5169 25.7665ZM63.8329 22.9315V21.9585C63.8427 21.4565 63.6545 20.9708 63.3089 20.6065C63.1434 20.425 62.941 20.2811 62.7151 20.1845C62.4893 20.0879 62.2454 20.0409 61.9999 20.0465C61.7088 20.0337 61.419 20.0921 61.1556 20.2165C60.8921 20.3409 60.663 20.5276 60.4879 20.7605C60.0902 21.3487 59.8982 22.0519 59.9419 22.7605C59.9096 23.3927 60.0945 24.0169 60.4659 24.5295C60.6276 24.7424 60.8379 24.9135 61.0792 25.0287C61.3204 25.1438 61.5857 25.1996 61.8529 25.1915C62.1232 25.2 62.392 25.1476 62.6393 25.0382C62.8867 24.9288 63.1063 24.7652 63.2819 24.5595C63.6612 24.1037 63.8576 23.5231 63.8329 22.9305V22.9315Z",
                fill: "#5E5E5E"
            }), No.createElement("path", {
                d: "M74.4075 26.3679H72.7075V22.1409C72.7075 20.7409 72.2122 20.0409 71.2215 20.0409C70.9778 20.0353 70.736 20.0848 70.5141 20.1855C70.2921 20.2863 70.0957 20.4358 69.9395 20.6229C69.5968 21.0338 69.4187 21.5572 69.4395 22.0919V26.3679H67.7285V18.8679H69.4355V20.1129H69.4645C69.6977 19.6727 70.0492 19.3064 70.4794 19.0553C70.9097 18.8042 71.4016 18.6783 71.8995 18.6919C72.2513 18.6699 72.6033 18.7304 72.9276 18.8684C73.2519 19.0064 73.5395 19.2182 73.7675 19.4869C74.2399 20.1569 74.4673 20.969 74.4115 21.7869L74.4075 26.3679Z",
                fill: "#5E5E5E"
            }), No.createElement("path", {
                d: "M81.4615 17.2938C81.1973 17.299 80.9413 17.2015 80.7475 17.0218C80.6504 16.9358 80.5733 16.8298 80.5215 16.7109C80.4696 16.5921 80.4444 16.4634 80.4475 16.3338C80.4444 16.2024 80.4696 16.0719 80.5213 15.9511C80.5731 15.8303 80.6502 15.7221 80.7475 15.6338C80.9397 15.4507 81.1962 15.3508 81.4615 15.3558C81.7324 15.3494 81.9951 15.4492 82.1935 15.6338C82.2912 15.7218 82.3686 15.83 82.4204 15.9508C82.4722 16.0717 82.4971 16.2023 82.4935 16.3338C82.4945 16.4616 82.4683 16.5882 82.4166 16.7051C82.3649 16.822 82.2888 16.9265 82.1935 17.0118C81.996 17.1983 81.7331 17.2996 81.4615 17.2938ZM82.2995 26.3678H80.5995V18.8678H82.2995V26.3678Z",
                fill: "#5E5E5E"
            }), No.createElement("path", {
                d: "M91.2004 26.3679H89.5004V22.1409C89.5004 20.7409 89.0051 20.0409 88.0144 20.0409C87.7707 20.0353 87.5289 20.0848 87.307 20.1855C87.085 20.2863 86.8887 20.4358 86.7324 20.6229C86.3871 21.0327 86.2068 21.5564 86.2264 22.0919V26.3679H84.5234V18.8679H86.2304V20.1129H86.2604C86.4933 19.6733 86.8442 19.3074 87.2737 19.0563C87.7031 18.8053 88.1941 18.6791 88.6914 18.6919C89.0432 18.6699 89.3952 18.7304 89.7195 18.8684C90.0438 19.0064 90.3314 19.2182 90.5594 19.4869C91.0318 20.1569 91.2592 20.969 91.2034 21.7869L91.2004 26.3679Z",
                fill: "#5E5E5E"
            }), No.createElement("path", {
                d: "M107.484 18.8672L105.272 26.3672H103.492L102.131 21.2842C102.075 21.0686 102.042 20.8477 102.031 20.6252H102C101.98 20.8439 101.936 21.0598 101.869 21.2692L100.389 26.3692H98.6454L96.4395 18.8672H98.2004L99.5635 24.2722C99.6146 24.4836 99.6437 24.6998 99.6505 24.9172H99.7004C99.7176 24.6942 99.7568 24.4734 99.8175 24.2582L101.332 18.8672H102.932L104.279 24.2952C104.33 24.5067 104.362 24.7222 104.374 24.9392H104.426C104.442 24.7215 104.479 24.5058 104.536 24.2952L105.865 18.8672H107.484Z",
                fill: "#5E5E5E"
            }), No.createElement("path", {
                d: "M109.6 17.2938C109.336 17.2992 109.08 17.2017 108.886 17.0218C108.789 16.936 108.712 16.83 108.66 16.7111C108.608 16.5922 108.583 16.4634 108.586 16.3338C108.583 16.2023 108.608 16.0718 108.66 15.9509C108.711 15.8301 108.789 15.7219 108.886 15.6338C109.078 15.4505 109.335 15.3506 109.6 15.3558C109.871 15.3494 110.134 15.4492 110.332 15.6338C110.43 15.7219 110.507 15.8301 110.559 15.9509C110.611 16.0718 110.636 16.2023 110.632 16.3338C110.633 16.4616 110.607 16.5882 110.555 16.7051C110.504 16.822 110.428 16.9265 110.332 17.0118C110.135 17.1983 109.872 17.2996 109.6 17.2938ZM110.441 26.3678H108.741V18.8678H110.441V26.3678Z",
                fill: "#5E5E5E"
            }), No.createElement("path", {
                d: "M116.617 26.2874C116.205 26.4688 115.757 26.5536 115.307 26.5354C113.852 26.5354 113.125 25.8374 113.124 24.4414V20.2004H111.871V18.8674H113.124V17.1314L114.824 16.6484V18.8674H116.618V20.2004H114.824V23.9504C114.794 24.2859 114.879 24.6217 115.065 24.9024C115.17 25.0064 115.297 25.0858 115.437 25.135C115.576 25.1843 115.725 25.2022 115.872 25.1874C116.142 25.1935 116.406 25.1059 116.618 24.9394L116.617 26.2874Z",
                fill: "#5E5E5E"
            }), No.createElement("path", {
                d: "M124.748 26.3676H123.048V22.2676C123.048 20.7836 122.552 20.0416 121.561 20.0416C121.315 20.0417 121.073 20.1001 120.854 20.2121C120.635 20.324 120.445 20.4863 120.301 20.6856C119.945 21.1595 119.764 21.7422 119.788 22.3346V26.3676H118.081V15.2676H119.788V20.1166H119.817C120.051 19.6777 120.402 19.3125 120.832 19.0616C121.261 18.8107 121.752 18.684 122.249 18.6956C123.916 18.6956 124.749 19.7139 124.749 21.7506L124.748 26.3676Z",
                fill: "#5E5E5E"
            }), No.createElement("path", {
                d: "M142.407 26.3672H140.679V19.5672C140.679 19.0105 140.712 18.3295 140.779 17.5242H140.75C140.679 17.8601 140.584 18.1903 140.465 18.5122L137.331 26.3672H136.131L132.988 18.5742C132.87 18.2326 132.777 17.8826 132.711 17.5272H132.682C132.72 17.9472 132.739 18.6332 132.74 19.5852V26.3672H131.129V15.8672H133.582L136.344 22.8672C136.504 23.2589 136.641 23.6596 136.754 24.0672H136.79C136.971 23.5162 137.117 23.1052 137.23 22.8372L140.041 15.8672H142.407V26.3672Z",
                fill: "#5E5E5E"
            }), No.createElement("path", {
                d: "M145.658 17.2937C145.394 17.2988 145.138 17.2013 144.944 17.0217C144.847 16.9358 144.77 16.8297 144.718 16.7109C144.666 16.5921 144.641 16.4633 144.644 16.3337C144.641 16.2024 144.666 16.0719 144.718 15.9511C144.769 15.8303 144.847 15.7221 144.944 15.6337C145.136 15.4508 145.393 15.3509 145.658 15.3557C145.929 15.3496 146.192 15.4493 146.391 15.6337C146.488 15.7219 146.566 15.8301 146.617 15.9509C146.669 16.0717 146.694 16.2023 146.691 16.3337C146.692 16.4616 146.666 16.5882 146.614 16.7051C146.562 16.822 146.486 16.9265 146.391 17.0117C146.193 17.1981 145.93 17.2994 145.658 17.2937ZM146.5 26.3677H144.8V18.8677H146.5V26.3677Z",
                fill: "#5E5E5E"
            }), No.createElement("path", {
                d: "M154.089 26.0239C153.437 26.3829 152.702 26.5624 151.958 26.5439C151.461 26.5652 150.965 26.4834 150.501 26.3037C150.037 26.124 149.616 25.8504 149.263 25.4999C148.918 25.1412 148.65 24.7167 148.474 24.2516C148.297 23.7866 148.217 23.2908 148.237 22.7939C148.211 22.2491 148.296 21.7048 148.485 21.1932C148.674 20.6816 148.963 20.2133 149.337 19.8159C149.724 19.4357 150.186 19.1397 150.694 18.9463C151.201 18.7529 151.743 18.6663 152.285 18.6919C152.907 18.6795 153.525 18.8023 154.095 19.0519V20.6339C153.618 20.2594 153.031 20.0533 152.425 20.0479C152.096 20.0369 151.768 20.0962 151.463 20.2217C151.159 20.3472 150.885 20.5362 150.659 20.7759C150.187 21.2964 149.94 21.9821 149.971 22.6839C149.952 23.0179 150 23.3522 150.111 23.6676C150.222 23.9831 150.395 24.2734 150.619 24.5219C150.846 24.7495 151.117 24.927 151.417 25.0431C151.717 25.1592 152.037 25.2112 152.358 25.1959C152.993 25.1873 153.604 24.9566 154.087 24.5439L154.089 26.0239Z",
                fill: "#5E5E5E"
            }), No.createElement("path", {
                d: "M160.125 20.4855C159.865 20.3073 159.553 20.2221 159.238 20.2436C158.989 20.2444 158.743 20.3072 158.523 20.4262C158.303 20.5452 158.117 20.7168 157.979 20.9255C157.615 21.472 157.438 22.1218 157.473 22.7775V26.3665H155.773V18.8665H157.473V20.4115H157.5C157.634 19.9363 157.899 19.5087 158.266 19.1785C158.583 18.893 158.994 18.7348 159.42 18.7345C159.662 18.7214 159.903 18.7695 160.12 18.8745L160.125 20.4855Z",
                fill: "#5E5E5E"
            }), No.createElement("path", {
                d: "M164.52 26.5424C164.01 26.5667 163.501 26.486 163.024 26.3052C162.547 26.1244 162.112 25.8474 161.747 25.4914C161.396 25.1203 161.123 24.6823 160.945 24.2034C160.767 23.7245 160.687 23.2147 160.711 22.7044C160.663 22.1673 160.734 21.6263 160.917 21.1192C161.1 20.6122 161.392 20.1513 161.772 19.769C162.153 19.3866 162.612 19.092 163.118 18.9056C163.624 18.7193 164.164 18.6459 164.702 18.6904C165.205 18.6611 165.709 18.7379 166.181 18.9159C166.653 19.0938 167.082 19.3689 167.441 19.7234C168.132 20.5117 168.485 21.5407 168.423 22.5874C168.448 23.1131 168.367 23.6384 168.185 24.1323C168.003 24.6261 167.724 25.0784 167.364 25.4624C166.99 25.8286 166.544 26.1135 166.055 26.2994C165.565 26.4852 165.043 26.568 164.52 26.5424ZM164.6 20.0424C164.301 20.0296 164.003 20.0862 163.73 20.2076C163.457 20.3291 163.215 20.5121 163.025 20.7424C162.611 21.2934 162.406 21.9733 162.446 22.6614C162.408 23.3309 162.616 23.9911 163.032 24.5174C163.225 24.7411 163.467 24.9183 163.738 25.0357C164.01 25.1531 164.304 25.2077 164.6 25.1954C164.891 25.2123 165.182 25.1609 165.45 25.0452C165.717 24.9296 165.954 24.7529 166.142 24.5294C166.534 23.9764 166.723 23.3056 166.68 22.6294C166.722 21.9498 166.533 21.2758 166.142 20.7184C165.956 20.493 165.719 20.3146 165.451 20.1979C165.183 20.0811 164.892 20.0292 164.6 20.0464V20.0424Z",
                fill: "#5E5E5E"
            }), No.createElement("path", {
                d: "M169.682 26.1341V24.5591C170.28 25.0297 171.02 25.285 171.782 25.2841C172.808 25.2841 173.32 24.9814 173.32 24.3761C173.324 24.2203 173.278 24.0671 173.188 23.9401C173.091 23.8122 172.97 23.7042 172.833 23.6221C172.666 23.5206 172.49 23.4368 172.306 23.3721C172.106 23.3001 171.88 23.2174 171.629 23.1241C171.343 23.0127 171.065 22.8827 170.797 22.7351C170.569 22.6122 170.362 22.4554 170.182 22.2701C170.02 22.1003 169.894 21.8996 169.812 21.6801C169.723 21.4336 169.681 21.1729 169.687 20.9111C169.68 20.575 169.769 20.2438 169.943 19.9561C170.118 19.6742 170.353 19.435 170.633 19.2561C170.934 19.062 171.265 18.9184 171.613 18.8311C171.984 18.7354 172.365 18.6873 172.749 18.6881C173.383 18.6784 174.013 18.7852 174.609 19.0031V20.4901C174.074 20.1265 173.439 19.9372 172.793 19.9481C172.597 19.9454 172.401 19.9676 172.211 20.0141C172.054 20.0505 171.904 20.1123 171.768 20.1971C171.652 20.268 171.554 20.3645 171.482 20.4791C171.414 20.588 171.38 20.714 171.382 20.8421C171.376 20.9854 171.411 21.1274 171.482 21.2521C171.557 21.3739 171.66 21.4766 171.782 21.5521C171.934 21.6462 172.096 21.7246 172.265 21.7861C172.453 21.8561 172.669 21.9328 172.914 22.0161C173.209 22.1347 173.499 22.2682 173.781 22.4161C174.02 22.5397 174.241 22.6963 174.437 22.8811C174.615 23.0506 174.757 23.2548 174.854 23.4811C174.957 23.7383 175.007 24.0139 175.001 24.2911C175.01 24.6428 174.918 24.9897 174.737 25.2911C174.559 25.5745 174.32 25.8138 174.037 25.9911C173.724 26.1845 173.381 26.3241 173.022 26.4041C172.624 26.4966 172.218 26.5423 171.81 26.5401C171.079 26.5583 170.354 26.4198 169.682 26.1341Z",
                fill: "#5E5E5E"
            }), No.createElement("path", {
                d: "M179.943 26.5424C179.433 26.5667 178.924 26.486 178.447 26.3052C177.97 26.1244 177.536 25.8474 177.171 25.4914C176.819 25.1205 176.546 24.6825 176.368 24.2036C176.19 23.7247 176.111 23.2147 176.135 22.7044C176.087 22.1673 176.157 21.6263 176.341 21.1192C176.524 20.6122 176.816 20.1513 177.196 19.769C177.576 19.3866 178.036 19.092 178.542 18.9056C179.048 18.7193 179.588 18.6459 180.126 18.6904C180.629 18.6611 181.133 18.7379 181.605 18.9159C182.077 19.0938 182.506 19.3689 182.865 19.7234C183.556 20.5117 183.909 21.5407 183.847 22.5874C183.871 23.1131 183.791 23.6384 183.609 24.1323C183.427 24.6261 183.148 25.0784 182.788 25.4624C182.413 25.8287 181.967 26.1137 181.478 26.2996C180.988 26.4854 180.466 26.5681 179.943 26.5424ZM180.023 20.0424C179.724 20.0296 179.426 20.0862 179.153 20.2077C178.88 20.3291 178.639 20.5121 178.449 20.7424C178.034 21.2932 177.829 21.9733 177.87 22.6614C177.831 23.3309 178.04 23.9913 178.456 24.5174C178.649 24.741 178.89 24.9182 179.162 25.0356C179.433 25.1529 179.727 25.2076 180.023 25.1954C180.314 25.2124 180.605 25.1611 180.873 25.0455C181.14 24.9298 181.377 24.7531 181.565 24.5294C181.957 23.9768 182.148 23.3058 182.104 22.6294C182.147 21.9496 181.957 21.2754 181.565 20.7184C181.379 20.4929 181.142 20.3145 180.874 20.1978C180.606 20.081 180.314 20.0291 180.023 20.0464V20.0424Z",
                fill: "#5E5E5E"
            }), No.createElement("path", {
                d: "M189.567 16.6479C189.329 16.5123 189.058 16.4432 188.783 16.448C187.959 16.448 187.546 16.9146 187.546 17.848V18.8669H189.289V20.1999H187.553V26.367H185.853V20.1999H184.571V18.8669H185.853V17.651C185.836 17.301 185.897 16.9515 186.031 16.6279C186.165 16.3043 186.37 16.0147 186.63 15.7799C187.168 15.3158 187.861 15.0715 188.57 15.0959C188.909 15.0827 189.248 15.1294 189.57 15.2339L189.567 16.6479Z",
                fill: "#5E5E5E"
            }), No.createElement("path", {
                d: "M194.73 26.2874C194.318 26.4688 193.87 26.5536 193.42 26.5354C191.966 26.5354 191.238 25.8374 191.237 24.4414V20.2004H189.984V18.8674H191.237V17.1314L192.937 16.6484V18.8674H194.73V20.2004H192.937V23.9504C192.907 24.2859 192.992 24.6217 193.178 24.9024C193.283 25.0066 193.41 25.0861 193.549 25.1354C193.689 25.1847 193.837 25.2025 193.984 25.1874C194.254 25.1937 194.518 25.106 194.73 24.9394V26.2874Z",
                fill: "#5E5E5E"
            }), No.createElement("path", {
                d: "M22.5 11.8672H13.5V20.8672H22.5V11.8672Z",
                fill: "#F25022"
            }), No.createElement("path", {
                d: "M22.5 21.8672H13.5V30.8672H22.5V21.8672Z",
                fill: "#00A4EF"
            }), No.createElement("path", {
                d: "M32.5 11.8672H23.5V20.8672H32.5V11.8672Z",
                fill: "#7FBA00"
            }), No.createElement("path", {
                d: "M32.5 21.8672H23.5V30.8672H32.5V21.8672Z",
                fill: "#FFB900"
            })), No.createElement("defs", null, No.createElement("clipPath", {
                id: "clip0_868_232469"
            }, No.createElement("rect", {
                width: "215",
                height: "41",
                fill: "white",
                transform: "translate(0.5 0.867188)"
            }))))
        }
          , DE = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return No.createElement("svg", Object.assign({
                width: "170",
                height: "105",
                viewBox: "0 0 170 105",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), No.createElement("path", {
                d: "M15.833 10.0762C15.833 5.6579 19.4147 2.07617 23.833 2.07617H146.166C150.585 2.07617 154.166 5.65789 154.166 10.0762V96.8345H15.833V10.0762Z",
                fill: "url(#paint0_linear_868_232429)"
            }), No.createElement("g", {
                filter: "url(#filter0_f_868_232429)"
            }, No.createElement("path", {
                d: "M2 102.367L2.76674 101.676H167.233L168 102.367H2Z",
                fill: "black",
                fillOpacity: "0.6"
            })), No.createElement("g", {
                filter: "url(#filter1_f_868_232429)"
            }, No.createElement("path", {
                d: "M2 102.367L2.76674 101.676H167.233L168 102.367H2Z",
                fill: "black",
                fillOpacity: "0.5"
            })), No.createElement("g", {
                filter: "url(#filter2_ii_868_232429)"
            }, No.createElement("rect", {
                x: "2",
                y: "96.834",
                width: "166",
                height: "4.84167",
                rx: "1.10855",
                fill: "url(#paint1_linear_868_232429)"
            })), No.createElement("rect", {
                x: "19.5391",
                y: "5.6582",
                width: "130.921",
                height: "87.4088",
                rx: "4",
                fill: "url(#paint2_radial_868_232429)"
            }), No.createElement("g", {
                filter: "url(#filter3_dd_868_232429)"
            }, No.createElement("rect", {
                x: "51.7998",
                y: "24.207",
                width: "65.7083",
                height: "54.4898",
                rx: "4.63415",
                fill: "white"
            })), No.createElement("g", {
                filter: "url(#filter4_ii_868_232429)"
            }, No.createElement("rect", {
                x: "51.7998",
                y: "24.207",
                width: "65.7083",
                height: "54.4898",
                rx: "4.63415",
                fill: "white",
                fillOpacity: "0.6"
            })), No.createElement("g", {
                filter: "url(#filter5_i_868_232429)"
            }, No.createElement("line", {
                x1: "63.3509",
                y1: "35.3795",
                x2: "90.9434",
                y2: "35.3795",
                stroke: "#DEDEDE",
                strokeWidth: "9.26829",
                strokeLinecap: "round"
            })), No.createElement("g", {
                filter: "url(#filter6_i_868_232429)"
            }, No.createElement("line", {
                x1: "82.0257",
                y1: "63.1471",
                x2: "104.009",
                y2: "63.1471",
                stroke: "#2D78DD",
                strokeWidth: "9.26829",
                strokeLinecap: "round"
            })), No.createElement("g", {
                filter: "url(#filter7_i_868_232429)"
            }, No.createElement("line", {
                x1: "63.3509",
                y1: "49.3151",
                x2: "90.9434",
                y2: "49.3151",
                stroke: "#DEDEDE",
                strokeWidth: "9.26829",
                strokeLinecap: "round"
            })), No.createElement("g", {
                filter: "url(#filter8_dii_868_232429)"
            }, No.createElement("g", {
                filter: "url(#filter9_ddii_868_232429)"
            }, No.createElement("path", {
                d: "M134.801 33.8932C134.801 24.3433 127.059 16.6016 117.509 16.6016C107.959 16.6016 100.217 24.3433 100.217 33.8932C100.217 43.4432 107.959 51.1849 117.509 51.1849C127.059 51.1849 134.801 43.4432 134.801 33.8932Z",
                fill: "url(#paint3_linear_868_232429)"
            }))), No.createElement("g", {
                filter: "url(#filter10_ddii_868_232429)"
            }, No.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M120.127 25.7344C118.656 25.7344 117.245 26.3188 116.205 27.3592C115.164 28.3996 114.58 29.8106 114.58 31.2819C114.579 31.7247 114.631 32.166 114.737 32.5961L109.3 38.0273C109.213 38.1134 109.144 38.2157 109.097 38.3285C109.05 38.4413 109.026 38.5623 109.026 38.6844V41.4582C109.028 41.7039 109.127 41.9391 109.301 42.1123C109.475 42.2856 109.711 42.3828 109.957 42.3828H113.655C113.9 42.3828 114.136 42.2854 114.309 42.112C114.482 41.9386 114.58 41.7034 114.58 41.4582V40.5336H115.504C115.75 40.5336 115.985 40.4362 116.158 40.2628C116.331 40.0894 116.429 39.8542 116.429 39.609V38.6844H117.353C117.599 38.6829 117.834 38.5842 118.008 38.4099C118.181 38.2356 118.278 37.9998 118.278 37.754V36.5154C119.04 36.7831 119.85 36.8814 120.654 36.8035C121.457 36.7256 122.234 36.4733 122.929 36.0643C123.625 35.6553 124.223 35.0994 124.682 34.4354C125.141 33.7714 125.449 33.0152 125.586 32.2197C125.722 31.4242 125.683 30.6085 125.472 29.8296C125.261 29.0506 124.882 28.3272 124.362 27.7097C123.843 27.0921 123.194 26.5955 122.463 26.2543C121.731 25.9132 120.934 25.7357 120.127 25.7344ZM121.517 31.2819C121.242 31.2831 120.972 31.2024 120.743 31.0501C120.513 30.8978 120.334 30.6808 120.228 30.4267C120.122 30.1725 120.094 29.8926 120.148 29.6224C120.201 29.3523 120.334 29.1041 120.529 28.9094C120.723 28.7147 120.971 28.5822 121.242 28.5288C121.512 28.4753 121.792 28.5033 122.046 28.6092C122.3 28.7152 122.517 28.8942 122.669 29.1236C122.821 29.3531 122.902 29.6226 122.901 29.8979C122.899 30.2645 122.753 30.6156 122.494 30.8749C122.235 31.1341 121.884 31.2804 121.517 31.2819Z",
                fill: "white"
            })), No.createElement("defs", null, No.createElement("filter", {
                id: "filter0_f_868_232429",
                x: "0",
                y: "99.6758",
                width: "170",
                height: "4.69141",
                filterUnits: "userSpaceOnUse",
                colorInterpolationFilters: "sRGB"
            }, No.createElement("feFlood", {
                floodOpacity: "0",
                result: "BackgroundImageFix"
            }), No.createElement("feBlend", {
                mode: "normal",
                in: "SourceGraphic",
                in2: "BackgroundImageFix",
                result: "shape"
            }), No.createElement("feGaussianBlur", {
                stdDeviation: "1",
                result: "effect1_foregroundBlur_868_232429"
            })), No.createElement("filter", {
                id: "filter1_f_868_232429",
                x: "0",
                y: "99.6758",
                width: "170",
                height: "4.69141",
                filterUnits: "userSpaceOnUse",
                colorInterpolationFilters: "sRGB"
            }, No.createElement("feFlood", {
                floodOpacity: "0",
                result: "BackgroundImageFix"
            }), No.createElement("feBlend", {
                mode: "normal",
                in: "SourceGraphic",
                in2: "BackgroundImageFix",
                result: "shape"
            }), No.createElement("feGaussianBlur", {
                stdDeviation: "1",
                result: "effect1_foregroundBlur_868_232429"
            })), No.createElement("filter", {
                id: "filter2_ii_868_232429",
                x: "2",
                y: "96.4183",
                width: "166",
                height: "5.53464",
                filterUnits: "userSpaceOnUse",
                colorInterpolationFilters: "sRGB"
            }, No.createElement("feFlood", {
                floodOpacity: "0",
                result: "BackgroundImageFix"
            }), No.createElement("feBlend", {
                mode: "normal",
                in: "SourceGraphic",
                in2: "BackgroundImageFix",
                result: "shape"
            }), No.createElement("feColorMatrix", {
                in: "SourceAlpha",
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                result: "hardAlpha"
            }), No.createElement("feOffset", {
                dy: "-0.415704"
            }), No.createElement("feGaussianBlur", {
                stdDeviation: "0.207852"
            }), No.createElement("feComposite", {
                in2: "hardAlpha",
                operator: "arithmetic",
                k2: "-1",
                k3: "1"
            }), No.createElement("feColorMatrix", {
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
            }), No.createElement("feBlend", {
                mode: "normal",
                in2: "shape",
                result: "effect1_innerShadow_868_232429"
            }), No.createElement("feColorMatrix", {
                in: "SourceAlpha",
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                result: "hardAlpha"
            }), No.createElement("feOffset", {
                dy: "0.415704"
            }), No.createElement("feGaussianBlur", {
                stdDeviation: "0.138568"
            }), No.createElement("feComposite", {
                in2: "hardAlpha",
                operator: "arithmetic",
                k2: "-1",
                k3: "1"
            }), No.createElement("feColorMatrix", {
                type: "matrix",
                values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"
            }), No.createElement("feBlend", {
                mode: "normal",
                in2: "effect1_innerShadow_868_232429",
                result: "effect2_innerShadow_868_232429"
            })), No.createElement("filter", {
                id: "filter3_dd_868_232429",
                x: "35.1169",
                y: "14.9387",
                width: "99.0739",
                height: "87.8561",
                filterUnits: "userSpaceOnUse",
                colorInterpolationFilters: "sRGB"
            }, No.createElement("feFlood", {
                floodOpacity: "0",
                result: "BackgroundImageFix"
            }), No.createElement("feColorMatrix", {
                in: "SourceAlpha",
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                result: "hardAlpha"
            }), No.createElement("feOffset", {
                dy: "1.39024"
            }), No.createElement("feGaussianBlur", {
                stdDeviation: "2.08537"
            }), No.createElement("feColorMatrix", {
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
            }), No.createElement("feBlend", {
                mode: "normal",
                in2: "BackgroundImageFix",
                result: "effect1_dropShadow_868_232429"
            }), No.createElement("feColorMatrix", {
                in: "SourceAlpha",
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                result: "hardAlpha"
            }), No.createElement("feOffset", {
                dy: "7.41463"
            }), No.createElement("feGaussianBlur", {
                stdDeviation: "8.34146"
            }), No.createElement("feColorMatrix", {
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
            }), No.createElement("feBlend", {
                mode: "normal",
                in2: "effect1_dropShadow_868_232429",
                result: "effect2_dropShadow_868_232429"
            }), No.createElement("feBlend", {
                mode: "normal",
                in: "SourceGraphic",
                in2: "effect2_dropShadow_868_232429",
                result: "shape"
            })), No.createElement("filter", {
                id: "filter4_ii_868_232429",
                x: "51.7998",
                y: "23.0485",
                width: "65.708",
                height: "57.9658",
                filterUnits: "userSpaceOnUse",
                colorInterpolationFilters: "sRGB"
            }, No.createElement("feFlood", {
                floodOpacity: "0",
                result: "BackgroundImageFix"
            }), No.createElement("feBlend", {
                mode: "normal",
                in: "SourceGraphic",
                in2: "BackgroundImageFix",
                result: "shape"
            }), No.createElement("feColorMatrix", {
                in: "SourceAlpha",
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                result: "hardAlpha"
            }), No.createElement("feOffset", {
                dy: "2.31707"
            }), No.createElement("feGaussianBlur", {
                stdDeviation: "1.15854"
            }), No.createElement("feComposite", {
                in2: "hardAlpha",
                operator: "arithmetic",
                k2: "-1",
                k3: "1"
            }), No.createElement("feColorMatrix", {
                type: "matrix",
                values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
            }), No.createElement("feBlend", {
                mode: "normal",
                in2: "shape",
                result: "effect1_innerShadow_868_232429"
            }), No.createElement("feColorMatrix", {
                in: "SourceAlpha",
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                result: "hardAlpha"
            }), No.createElement("feOffset", {
                dy: "-1.15854"
            }), No.createElement("feGaussianBlur", {
                stdDeviation: "0.579268"
            }), No.createElement("feComposite", {
                in2: "hardAlpha",
                operator: "arithmetic",
                k2: "-1",
                k3: "1"
            }), No.createElement("feColorMatrix", {
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
            }), No.createElement("feBlend", {
                mode: "normal",
                in2: "effect1_innerShadow_868_232429",
                result: "effect2_innerShadow_868_232429"
            })), No.createElement("filter", {
                id: "filter5_i_868_232429",
                x: "58.7168",
                y: "29.5876",
                width: "36.8604",
                height: "10.4261",
                filterUnits: "userSpaceOnUse",
                colorInterpolationFilters: "sRGB"
            }, No.createElement("feFlood", {
                floodOpacity: "0",
                result: "BackgroundImageFix"
            }), No.createElement("feBlend", {
                mode: "normal",
                in: "SourceGraphic",
                in2: "BackgroundImageFix",
                result: "shape"
            }), No.createElement("feColorMatrix", {
                in: "SourceAlpha",
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                result: "hardAlpha"
            }), No.createElement("feOffset", {
                dy: "-1.15854"
            }), No.createElement("feGaussianBlur", {
                stdDeviation: "1.15854"
            }), No.createElement("feComposite", {
                in2: "hardAlpha",
                operator: "arithmetic",
                k2: "-1",
                k3: "1"
            }), No.createElement("feColorMatrix", {
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
            }), No.createElement("feBlend", {
                mode: "normal",
                in2: "shape",
                result: "effect1_innerShadow_868_232429"
            })), No.createElement("filter", {
                id: "filter6_i_868_232429",
                x: "77.3916",
                y: "54.1041",
                width: "31.252",
                height: "13.6772",
                filterUnits: "userSpaceOnUse",
                colorInterpolationFilters: "sRGB"
            }, No.createElement("feFlood", {
                floodOpacity: "0",
                result: "BackgroundImageFix"
            }), No.createElement("feBlend", {
                mode: "normal",
                in: "SourceGraphic",
                in2: "BackgroundImageFix",
                result: "shape"
            }), No.createElement("feColorMatrix", {
                in: "SourceAlpha",
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                result: "hardAlpha"
            }), No.createElement("feOffset", {
                dy: "-6.6144"
            }), No.createElement("feGaussianBlur", {
                stdDeviation: "2.2048"
            }), No.createElement("feComposite", {
                in2: "hardAlpha",
                operator: "arithmetic",
                k2: "-1",
                k3: "1"
            }), No.createElement("feColorMatrix", {
                type: "matrix",
                values: "0 0 0 0 0.227257 0 0 0 0 0.334163 0 0 0 0 0.708333 0 0 0 0.45 0"
            }), No.createElement("feBlend", {
                mode: "normal",
                in2: "shape",
                result: "effect1_innerShadow_868_232429"
            })), No.createElement("filter", {
                id: "filter7_i_868_232429",
                x: "58.7168",
                y: "43.5231",
                width: "36.8604",
                height: "10.4261",
                filterUnits: "userSpaceOnUse",
                colorInterpolationFilters: "sRGB"
            }, No.createElement("feFlood", {
                floodOpacity: "0",
                result: "BackgroundImageFix"
            }), No.createElement("feBlend", {
                mode: "normal",
                in: "SourceGraphic",
                in2: "BackgroundImageFix",
                result: "shape"
            }), No.createElement("feColorMatrix", {
                in: "SourceAlpha",
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                result: "hardAlpha"
            }), No.createElement("feOffset", {
                dy: "-1.15854"
            }), No.createElement("feGaussianBlur", {
                stdDeviation: "1.15854"
            }), No.createElement("feComposite", {
                in2: "hardAlpha",
                operator: "arithmetic",
                k2: "-1",
                k3: "1"
            }), No.createElement("feColorMatrix", {
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
            }), No.createElement("feBlend", {
                mode: "normal",
                in2: "shape",
                result: "effect1_innerShadow_868_232429"
            })), No.createElement("filter", {
                id: "filter8_dii_868_232429",
                x: "99.9098",
                y: "15.2157",
                width: "34.891",
                height: "36.8937",
                filterUnits: "userSpaceOnUse",
                colorInterpolationFilters: "sRGB"
            }, No.createElement("feFlood", {
                floodOpacity: "0",
                result: "BackgroundImageFix"
            }), No.createElement("feColorMatrix", {
                in: "SourceAlpha",
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                result: "hardAlpha"
            }), No.createElement("feOffset", {
                dx: "-0.153984",
                dy: "0.307968"
            }), No.createElement("feGaussianBlur", {
                stdDeviation: "0.076992"
            }), No.createElement("feComposite", {
                in2: "hardAlpha",
                operator: "out"
            }), No.createElement("feColorMatrix", {
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
            }), No.createElement("feBlend", {
                mode: "normal",
                in2: "BackgroundImageFix",
                result: "effect1_dropShadow_868_232429"
            }), No.createElement("feBlend", {
                mode: "normal",
                in: "SourceGraphic",
                in2: "effect1_dropShadow_868_232429",
                result: "shape"
            }), No.createElement("feColorMatrix", {
                in: "SourceAlpha",
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                result: "hardAlpha"
            }), No.createElement("feOffset", {
                dy: "-1.38586"
            }), No.createElement("feGaussianBlur", {
                stdDeviation: "0.76992"
            }), No.createElement("feComposite", {
                in2: "hardAlpha",
                operator: "arithmetic",
                k2: "-1",
                k3: "1"
            }), No.createElement("feColorMatrix", {
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
            }), No.createElement("feBlend", {
                mode: "normal",
                in2: "shape",
                result: "effect2_innerShadow_868_232429"
            }), No.createElement("feColorMatrix", {
                in: "SourceAlpha",
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                result: "hardAlpha"
            }), No.createElement("feOffset", {
                dy: "0.923904"
            }), No.createElement("feGaussianBlur", {
                stdDeviation: "0.615936"
            }), No.createElement("feComposite", {
                in2: "hardAlpha",
                operator: "arithmetic",
                k2: "-1",
                k3: "1"
            }), No.createElement("feColorMatrix", {
                type: "matrix",
                values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.17 0"
            }), No.createElement("feBlend", {
                mode: "normal",
                in2: "effect2_innerShadow_868_232429",
                result: "effect3_innerShadow_868_232429"
            })), No.createElement("filter", {
                id: "filter9_ddii_868_232429",
                x: "99.6001",
                y: "14.877",
                width: "37.3513",
                height: "38.7151",
                filterUnits: "userSpaceOnUse",
                colorInterpolationFilters: "sRGB"
            }, No.createElement("feFlood", {
                floodOpacity: "0",
                result: "BackgroundImageFix"
            }), No.createElement("feColorMatrix", {
                in: "SourceAlpha",
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                result: "hardAlpha"
            }), No.createElement("feOffset", {
                dy: "0.233664"
            }), No.createElement("feGaussianBlur", {
                stdDeviation: "0.148831"
            }), No.createElement("feComposite", {
                in2: "hardAlpha",
                operator: "out"
            }), No.createElement("feColorMatrix", {
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            }), No.createElement("feBlend", {
                mode: "normal",
                in2: "BackgroundImageFix",
                result: "effect1_dropShadow_868_232429"
            }), No.createElement("feColorMatrix", {
                in: "SourceAlpha",
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                result: "hardAlpha"
            }), No.createElement("feOffset", {
                dx: "0.766459",
                dy: "1.02247"
            }), No.createElement("feGaussianBlur", {
                stdDeviation: "0.692062"
            }), No.createElement("feComposite", {
                in2: "hardAlpha",
                operator: "out"
            }), No.createElement("feColorMatrix", {
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
            }), No.createElement("feBlend", {
                mode: "normal",
                in2: "effect1_dropShadow_868_232429",
                result: "effect2_dropShadow_868_232429"
            }), No.createElement("feBlend", {
                mode: "normal",
                in: "SourceGraphic",
                in2: "effect2_dropShadow_868_232429",
                result: "shape"
            }), No.createElement("feColorMatrix", {
                in: "SourceAlpha",
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                result: "hardAlpha"
            }), No.createElement("feOffset", {
                dy: "-1.72453"
            }), No.createElement("feGaussianBlur", {
                stdDeviation: "0.958074"
            }), No.createElement("feComposite", {
                in2: "hardAlpha",
                operator: "arithmetic",
                k2: "-1",
                k3: "1"
            }), No.createElement("feColorMatrix", {
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
            }), No.createElement("feBlend", {
                mode: "normal",
                in2: "shape",
                result: "effect3_innerShadow_868_232429"
            }), No.createElement("feColorMatrix", {
                in: "SourceAlpha",
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                result: "hardAlpha"
            }), No.createElement("feOffset", {
                dy: "1.14969"
            }), No.createElement("feGaussianBlur", {
                stdDeviation: "0.766459"
            }), No.createElement("feComposite", {
                in2: "hardAlpha",
                operator: "arithmetic",
                k2: "-1",
                k3: "1"
            }), No.createElement("feColorMatrix", {
                type: "matrix",
                values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
            }), No.createElement("feBlend", {
                mode: "normal",
                in2: "effect3_innerShadow_868_232429",
                result: "effect4_innerShadow_868_232429"
            })), No.createElement("filter", {
                id: "filter10_ddii_868_232429",
                x: "108.227",
                y: "24.791",
                width: "19.4689",
                height: "19.9503",
                filterUnits: "userSpaceOnUse",
                colorInterpolationFilters: "sRGB"
            }, No.createElement("feFlood", {
                floodOpacity: "0",
                result: "BackgroundImageFix"
            }), No.createElement("feColorMatrix", {
                in: "SourceAlpha",
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                result: "hardAlpha"
            }), No.createElement("feOffset", {
                dx: "-0.153984",
                dy: "0.307968"
            }), No.createElement("feGaussianBlur", {
                stdDeviation: "0.076992"
            }), No.createElement("feComposite", {
                in2: "hardAlpha",
                operator: "out"
            }), No.createElement("feColorMatrix", {
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            }), No.createElement("feBlend", {
                mode: "normal",
                in2: "BackgroundImageFix",
                result: "effect1_dropShadow_868_232429"
            }), No.createElement("feColorMatrix", {
                in: "SourceAlpha",
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                result: "hardAlpha"
            }), No.createElement("feOffset", {
                dx: "0.615936",
                dy: "0.943396"
            }), No.createElement("feGaussianBlur", {
                stdDeviation: "0.707547"
            }), No.createElement("feComposite", {
                in2: "hardAlpha",
                operator: "out"
            }), No.createElement("feColorMatrix", {
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
            }), No.createElement("feBlend", {
                mode: "normal",
                in2: "effect1_dropShadow_868_232429",
                result: "effect2_dropShadow_868_232429"
            }), No.createElement("feBlend", {
                mode: "normal",
                in: "SourceGraphic",
                in2: "effect2_dropShadow_868_232429",
                result: "shape"
            }), No.createElement("feColorMatrix", {
                in: "SourceAlpha",
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                result: "hardAlpha"
            }), No.createElement("feOffset", {
                dy: "-0.943396"
            }), No.createElement("feGaussianBlur", {
                stdDeviation: "0.76992"
            }), No.createElement("feComposite", {
                in2: "hardAlpha",
                operator: "arithmetic",
                k2: "-1",
                k3: "1"
            }), No.createElement("feColorMatrix", {
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
            }), No.createElement("feBlend", {
                mode: "normal",
                in2: "shape",
                result: "effect3_innerShadow_868_232429"
            }), No.createElement("feColorMatrix", {
                in: "SourceAlpha",
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                result: "hardAlpha"
            }), No.createElement("feOffset", {
                dy: "0.923904"
            }), No.createElement("feGaussianBlur", {
                stdDeviation: "0.615936"
            }), No.createElement("feComposite", {
                in2: "hardAlpha",
                operator: "arithmetic",
                k2: "-1",
                k3: "1"
            }), No.createElement("feColorMatrix", {
                type: "matrix",
                values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
            }), No.createElement("feBlend", {
                mode: "normal",
                in2: "effect3_innerShadow_868_232429",
                result: "effect4_innerShadow_868_232429"
            })), No.createElement("linearGradient", {
                id: "paint0_linear_868_232429",
                x1: "84.9997",
                y1: "2.07617",
                x2: "84.9997",
                y2: "96.8345",
                gradientUnits: "userSpaceOnUse"
            }, No.createElement("stop", {
                stopColor: "#99A5B0"
            }), No.createElement("stop", {
                offset: "1",
                stopColor: "#8897A4"
            })), No.createElement("linearGradient", {
                id: "paint1_linear_868_232429",
                x1: "168",
                y1: "96.834",
                x2: "2",
                y2: "96.834",
                gradientUnits: "userSpaceOnUse"
            }, No.createElement("stop", {
                stopColor: "#A8B5BF"
            }), No.createElement("stop", {
                offset: "0.0357143",
                stopColor: "#BFCDD9"
            }), No.createElement("stop", {
                offset: "0.0714286",
                stopColor: "#B4C1CC"
            }), No.createElement("stop", {
                offset: "0.500018",
                stopColor: "#B4C1CC"
            }), No.createElement("stop", {
                offset: "0.928571",
                stopColor: "#B4C1CC"
            }), No.createElement("stop", {
                offset: "0.964286",
                stopColor: "#BFCDD9"
            }), No.createElement("stop", {
                offset: "1",
                stopColor: "#A8B5BF"
            })), No.createElement("radialGradient", {
                id: "paint2_radial_868_232429",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(84.9998 93.067) rotate(-90) scale(87.4088 86.0717)"
            }, No.createElement("stop", {
                stopColor: "#E7E7E7"
            }), No.createElement("stop", {
                offset: "1",
                stopColor: "#F0F0F0"
            })), No.createElement("linearGradient", {
                id: "paint3_linear_868_232429",
                x1: "117.509",
                y1: "16.6016",
                x2: "117.509",
                y2: "51.1849",
                gradientUnits: "userSpaceOnUse"
            }, No.createElement("stop", {
                stopColor: "#0773C7"
            }), No.createElement("stop", {
                offset: "1",
                stopColor: "#5B41D3"
            }))))
        }
          , LE = function() {
            return No.createElement("svg", {
                width: "64",
                height: "65",
                viewBox: "0 0 64 65",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                className: "animate-spin"
            }, No.createElement("mask", {
                maskUnits: "userSpaceOnUse",
                x: "0",
                y: "0.5",
                width: "64",
                height: "64",
                fill: "black"
            }, No.createElement("rect", {
                fill: "white",
                y: "0.5",
                width: "64",
                height: "64"
            }), No.createElement("path", {
                d: "M32 3.49465C32 2.94532 32.4455 2.49828 32.9945 2.51648C38.5798 2.70169 44.0097 4.4439 48.6671 7.55591C53.6006 10.8524 57.4458 15.5377 59.7164 21.0195C61.987 26.5013 62.5811 32.5333 61.4236 38.3527C60.266 44.1721 57.4088 49.5176 53.2132 53.7132C49.0176 57.9088 43.6721 60.766 37.8527 61.9236C32.0333 63.0811 26.0013 62.487 20.5195 60.2164C15.0377 57.9458 10.3524 54.1006 7.05591 49.1671C3.9439 44.5097 2.20169 39.0798 2.01648 33.4945C1.99828 32.9455 2.44532 32.5 2.99465 32.5C3.54397 32.5 3.98745 32.9455 4.00695 33.4945C4.19134 38.6862 5.81653 43.7316 8.70995 48.0619C11.7878 52.6683 16.1625 56.2585 21.2808 58.3785C26.3991 60.4986 32.0311 61.0533 37.4646 59.9725C42.8982 58.8917 47.8892 56.2239 51.8066 52.3066C55.7239 48.3892 58.3917 43.3982 59.4725 37.9646C60.5533 32.5311 59.9986 26.8991 57.8785 21.7808C55.7585 16.6625 52.1683 12.2878 47.5619 9.20995C43.2316 6.31653 38.1862 4.69134 32.9945 4.50695C32.4455 4.48745 32 4.04397 32 3.49465Z"
            })), No.createElement("path", {
                d: "M32 3.49465C32 2.94532 32.4455 2.49828 32.9945 2.51648C38.5798 2.70169 44.0097 4.4439 48.6671 7.55591C53.6006 10.8524 57.4458 15.5377 59.7164 21.0195C61.987 26.5013 62.5811 32.5333 61.4236 38.3527C60.266 44.1721 57.4088 49.5176 53.2132 53.7132C49.0176 57.9088 43.6721 60.766 37.8527 61.9236C32.0333 63.0811 26.0013 62.487 20.5195 60.2164C15.0377 57.9458 10.3524 54.1006 7.05591 49.1671C3.9439 44.5097 2.20169 39.0798 2.01648 33.4945C1.99828 32.9455 2.44532 32.5 2.99465 32.5C3.54397 32.5 3.98745 32.9455 4.00695 33.4945C4.19134 38.6862 5.81653 43.7316 8.70995 48.0619C11.7878 52.6683 16.1625 56.2585 21.2808 58.3785C26.3991 60.4986 32.0311 61.0533 37.4646 59.9725C42.8982 58.8917 47.8892 56.2239 51.8066 52.3066C55.7239 48.3892 58.3917 43.3982 59.4725 37.9646C60.5533 32.5311 59.9986 26.8991 57.8785 21.7808C55.7585 16.6625 52.1683 12.2878 47.5619 9.20995C43.2316 6.31653 38.1862 4.69134 32.9945 4.50695C32.4455 4.48745 32 4.04397 32 3.49465Z",
                fill: "#005FB8"
            }), No.createElement("path", {
                d: "M32 3.49465C32 2.94532 32.4455 2.49828 32.9945 2.51648C38.5798 2.70169 44.0097 4.4439 48.6671 7.55591C53.6006 10.8524 57.4458 15.5377 59.7164 21.0195C61.987 26.5013 62.5811 32.5333 61.4236 38.3527C60.266 44.1721 57.4088 49.5176 53.2132 53.7132C49.0176 57.9088 43.6721 60.766 37.8527 61.9236C32.0333 63.0811 26.0013 62.487 20.5195 60.2164C15.0377 57.9458 10.3524 54.1006 7.05591 49.1671C3.9439 44.5097 2.20169 39.0798 2.01648 33.4945C1.99828 32.9455 2.44532 32.5 2.99465 32.5C3.54397 32.5 3.98745 32.9455 4.00695 33.4945C4.19134 38.6862 5.81653 43.7316 8.70995 48.0619C11.7878 52.6683 16.1625 56.2585 21.2808 58.3785C26.3991 60.4986 32.0311 61.0533 37.4646 59.9725C42.8982 58.8917 47.8892 56.2239 51.8066 52.3066C55.7239 48.3892 58.3917 43.3982 59.4725 37.9646C60.5533 32.5311 59.9986 26.8991 57.8785 21.7808C55.7585 16.6625 52.1683 12.2878 47.5619 9.20995C43.2316 6.31653 38.1862 4.69134 32.9945 4.50695C32.4455 4.48745 32 4.04397 32 3.49465Z",
                stroke: "#005FB8",
                strokeWidth: "4",
                mask: "url(#path-1-outside-1_854_202366)"
            }))
        }
          , OE = function() {
            var e, n = (0,
            ko.v9)(Ur), a = (0,
            ko.v9)(Zr);
            return No.createElement("div", {
                className: "w-screen h-screen flex flex-col justify-center items-center bg-white",
                style: {
                    height: "calc(100vh - ".concat((null === (e = a.config) || void 0 === e ? void 0 : e.header_height) || 0, "px)")
                }
            }, n.isSignedOutComplete ? No.createElement(No.Fragment, null, No.createElement(DE, null), No.createElement("div", {
                className: "mt-7 font-semibold text-xl text-[#323130]",
                "aria-label": t("signout-message")
            }, t("signout-message")), No.createElement("div", {
                className: "text-sm mb-9 text-[#242424]",
                "aria-label": t("signout-again-message")
            }, t("signin-again-message")), No.createElement(AE, {
                className: "cursor-pointer",
                "aria-label": t("login-img")
            })) : n.isSignedOut && !n.isSignedOutComplete ? No.createElement(No.Fragment, null, No.createElement(LE, {
                "aria-label": t("loading-spinner")
            }), No.createElement("div", {
                className: "text-xl mt-4 text-black font-semibold",
                "aria-label": t("signout-hang-on")
            }, t("signout-hang-on"))) : null)
        };
        OE.displayName = "SignoutPage";
        var FE = (0,
        ko.$j)()(OE)
          , ME = {
            palette: {
                themePrimary: "#005FB8"
            }
        }
          , UE = {
            border: "1px solid",
            borderImageSource: "linear-gradient(180deg, rgba(0, 0, 0, 0.0578) 90.58%, rgba(0, 0, 0, 0.1622) 100%)",
            borderRadius: 3
        }
          , ZE = {
            root: (0,
            l.Z)({
                height: 30,
                width: 30,
                minWidth: "unset",
                padding: 0,
                background: "rgba(255, 255, 255, 0.7)"
            }, UE)
        }
          , HE = {
            iconName: "Home"
        }
          , BE = {
            iconName: "ChevronLeft"
        }
          , WE = {
            iconName: "ChevronRight"
        }
          , VE = {
            childrenGap: 10
        }
          , GE = function(e) {
            var n = e.closeWelcome
              , a = e.step
              , r = e.showNext
              , o = e.showPrevious
              , i = e.total
              , c = e.skipButtonRef
              , s = e.doneButtonRef;
            No.useEffect((function() {
                var e, t;
                1 === a && (null === c || void 0 === c || null === (e = c.current) || void 0 === e || e.focus());
                a === i && (null === s || void 0 === s || null === (t = s.current) || void 0 === t || t.focus())
            }
            ), [a]);
            var l = function() {
                Zv("Skip Welcome FRE " + a),
                n()
            }
              , u = function(e) {
                return t("windows-welcome-stepinfo-button-aria-label", {
                    current: a,
                    total: i,
                    buttonText: e
                })
            }
              , d = function() {
                Zv("Finish Welcome FRE"),
                n()
            };
            return No.createElement("div", {
                className: "w-screen windows-welcome-footer"
            }, No.createElement("div", {
                className: "flex justify-between items-center relative px-[16px]",
                style: {
                    height: 56
                }
            }, 0 === a ? No.createElement(Rd.a, {
                id: "button-home",
                ariaLabel: t("home"),
                iconProps: HE,
                onClick: l,
                styles: ZE
            }) : No.createElement(Rd.a, {
                id: "button-skip",
                ariaLabel: u(t("skip")),
                className: a === i ? "invisible" : "",
                onClick: l,
                styles: {
                    root: UE
                },
                componentRef: c
            }, t("skip")), No.createElement("div", {
                className: "absolute left-1/2 step-info"
            }, 0 === a ? t("page-index", {
                current: 1,
                total: 5
            }) : t("page-index", {
                current: a,
                total: i
            })), No.createElement(qu.K, {
                horizontal: !0,
                tokens: VE
            }, No.createElement(Uu.G, {
                content: t("previous")
            }, No.createElement(Rd.a, {
                id: "button-back",
                ariaLabel: u(t("previous")),
                iconProps: BE,
                disabled: 0 === a || 1 === a,
                onClick: o,
                styles: ZE
            })), a === i ? No.createElement(Qu.f, {
                theme: ME
            }, No.createElement(Qd.K, {
                id: "button-done",
                ariaLabel: u(t("done")),
                className: "next-button",
                onClick: d,
                componentRef: s
            }, t("done"))) : No.createElement(Uu.G, {
                content: t("next")
            }, No.createElement(Rd.a, {
                id: "button-next",
                ariaLabel: u(t("next")),
                iconProps: WE,
                onClick: r,
                styles: ZE
            })))))
        }
          , zE = function(e) {
            var t, n = e.wrapClassName, a = e.children, r = void 0 === a ? null : a, o = (0,
            ko.v9)(Zr);
            return No.createElement("div", {
                className: m()("w-screen flex items-center justify-center", n)
            }, No.createElement("div", {
                className: "w-screen flex items-center justify-between",
                style: {
                    minHeight: "calc(100vh - ".concat((null === (t = o.config) || void 0 === t ? void 0 : t.header_height) || 0, "px - ").concat(56, "px)")
                }
            }, r))
        }
          , YE = function() {
            return No.createElement(zE, {
                wrapClassName: "windows-welcome-loading"
            }, No.createElement("div", {
                className: "h-[504px] ml-[87px] ms-motion-fadeIn"
            }, No.createElement("div", null, No.createElement("div", {
                className: "w-[321px] h-[37px] mt-[74px] bg-[#EBECED] rounded-[4px]"
            }), No.createElement("div", {
                className: "w-[375px] h-[37px] mt-[9px] bg-[#EBECED] rounded-[4px]"
            })), No.createElement("div", null, No.createElement("div", {
                className: "w-[189px] h-[21px] mt-[23px] bg-[#c4c4c44d] rounded-[4px]"
            }), No.createElement("div", {
                className: "w-[266px] h-[21px] mt-[9px] bg-[#c4c4c44d] rounded-[4px]"
            }), No.createElement("div", {
                className: "w-[240px] h-[21px] mt-[9px] bg-[#c4c4c44d] rounded-[4px]"
            }))), No.createElement("div", {
                className: "w-[115px] grow shrink-0"
            }), No.createElement("div", {
                className: "w-[534px] h-[504px] mr-[87px] bg-[#EBECED] rounded-[8px] focus-zone ms-motion-slideLeftIn"
            }))
        }
          , qE = function() {
            var e = t("windows-welcome-cloudPCTitle");
            return No.useEffect((function() {
                e && Fl(e, "assertive")
            }
            )),
            No.createElement(zE, null, No.createElement("div", {
                className: "mt-[-81px] ml-[35px] md:ml-[74px] ms-motion-fadeIn"
            }, No.createElement(Ml._, {
                "aria-label": e,
                className: "max-w-[500px] min-w-[283px] grow basis-[460px] title-row"
            }, e), No.createElement(Ml._, {
                "aria-label": t("windows-welcome-cloudPCText"),
                className: "mt-[28px] max-w-[500px] min-w-[283px] grow basis-[380px] mt-px md:mt-4 des-row"
            }, t("windows-welcome-cloudPCText"))), No.createElement("div", {
                className: "basis-[40px] min-w-[20px]"
            }), No.createElement("div", {
                className: "mt-px ms-motion-slideLeftIn"
            }, No.createElement("img", {
                src: "/img/windows/cloudPC.png",
                alt: t("windows-welcome-cloudPCImg"),
                "aria-label": t("windows-welcome-cloudPCImg"),
                className: "w-[50vw] lg:w-[649px]"
            })))
        }
          , KE = function() {
            var e = t("windows-welcome-customizationTitle");
            return No.useEffect((function() {
                e && Fl(e, "assertive")
            }
            )),
            No.createElement(zE, null, No.createElement("div", {
                className: "mt-[-41px] ml-[35px] md:ml-[74px] ms-motion-fadeIn"
            }, No.createElement(Ml._, {
                "aria-label": e,
                className: "max-w-[500px] min-w-[283px] grow basis-[460px] title-row"
            }, e), No.createElement(Ml._, {
                "aria-label": t("windows-welcome-customizationText"),
                className: "max-w-[500px] min-w-[283px] grow basis-[380px] mt-px md:mt-4 des-row"
            }, t("windows-welcome-customizationText"))), No.createElement("div", {
                className: "basis-[80] min-w-[20px]"
            }), No.createElement("div", {
                className: "mr-[33px] mt-[45px] ms-motion-slideLeftIn"
            }, No.createElement("img", {
                src: "/img/windows/customization.svg",
                alt: t("windows-welcome-customizationImg"),
                "aria-label": t("windows-welcome-customizationImg"),
                className: "w-[60vw] lg:w-[548px]"
            })))
        }
          , jE = function() {
            var e = t("windows-welcome-MicrosoftCloudTitle");
            return No.useEffect((function() {
                e && Fl(e, "assertive")
            }
            )),
            No.createElement(zE, null, No.createElement("div", {
                className: "mt-[5px] ml-[35px] md:ml-[74px] ms-motion-fadeIn"
            }, No.createElement(Ml._, {
                "aria-label": e,
                className: "max-w-[600px] min-w-[283px] grow basis-[390px] title-row"
            }, e), No.createElement(Ml._, {
                "aria-label": t("windows-welcome-MicrosoftCloudText"),
                className: "mt-px md:mt-[11px] max-w-[600px] min-w-[283px] grow basis-[380px] des-row"
            }, t("windows-welcome-MicrosoftCloudText"))), No.createElement("div", {
                className: "min-w-[20px] grow basis-[111px]"
            }), No.createElement("div", {
                className: "mr-[59px] mt-[21px] ms-motion-slideLeftIn"
            }, No.createElement("img", {
                src: "/img/windows/MicrosoftCloud.svg",
                alt: t("windows-welcome-MicrosoftCloudImg"),
                "aria-label": t("windows-welcome-MicrosoftCloudImg"),
                className: "w-[50vw] lg:w-[548px]"
            })))
        }
          , XE = function() {
            var e = t("windows-welcome-win365Title");
            return No.useEffect((function() {
                e && Fl(e, "assertive")
            }
            )),
            No.createElement(zE, null, No.createElement("div", {
                className: "mt-[26px] ml-[35px] md:ml-[76px] ms-motion-fadeIn text-wrap"
            }, No.createElement(Ml._, {
                "aria-label": e,
                className: "max-w-[600px] min-w-[270px] grow basis-[390px] title-row"
            }, e), No.createElement(Ml._, {
                "aria-label": t("windows-welcome-win365Text"),
                className: "max-w-[600px] min-w-[270px] grow basis-[390px] mt-px md:mt-[32px] des-row"
            }, t("windows-welcome-win365Text"))), No.createElement("div", {
                className: "basis-[151px] min-w-[20px]"
            }), No.createElement("div", {
                className: "mt-[61px] ms-motion-slideLeftIn pic-wrap"
            }, No.createElement("img", {
                src: "/img/windows/win365.png",
                alt: t("windows-welcome-win365Img"),
                "aria-label": t("windows-welcome-win365Img"),
                className: "w-[50vw] lg:w-[551px]"
            })))
        }
          , $E = ["/img/windows/win365.png", "/img/windows/MicrosoftCloud.svg", "/img/windows/customization.svg", "/img/windows/cloudPC.png"];
        function QE(e) {
            var t = e.step
              , n = (0,
            No.useMemo)((function() {
                return [XE, jE, KE, qE]
            }
            ), [])[t - 1];
            return No.createElement(n, null)
        }
        var JE = (0,
        ko.$j)((function(e) {
            return {
                serviceConfig: e.Home.serviceConfig
            }
        }
        ))((function(e) {
            var n = e.serviceConfig.brandName
              , a = t("windows-flex-welcome-s".concat(e.stepNumber, "Title"), {
                brandName: n
            })
              , r = t("windows-flex-welcome-s".concat(e.stepNumber, "Text"), {
                brandName: n
            });
            return No.useEffect((function() {
                a && Fl(a, "assertive")
            }
            )),
            No.createElement(zE, null, No.createElement("div", {
                className: "mt-[-81px] ml-[35px] md:ml-[74px] ms-motion-fadeIn"
            }, No.createElement(Ml._, {
                "aria-label": a,
                className: "max-w-[500px] min-w-[283px] grow basis-[460px] title-row"
            }, a), No.createElement(Ml._, {
                "aria-label": r,
                className: "mt-[28px] max-w-[500px] min-w-[283px] grow basis-[380px] mt-px md:mt-4 des-row"
            }, r)), No.createElement("div", {
                className: "basis-[40px] min-w-[20px]"
            }), No.createElement("div", {
                className: "mt-px ms-motion-slideLeftIn"
            }, No.createElement("img", {
                src: e.img,
                alt: t("windows-flex-welcome-s".concat(e.stepNumber, "Img"), {
                    FrontlineGAName: Uo
                }),
                "aria-label": t("windows-flex-welcome-s".concat(e.stepNumber, "Img"), {
                    FrontlineGAName: Uo
                }),
                className: "w-[50vw] lg:w-[649px]"
            })))
        }
        ))
          , eg = ["/img/windows/win365.png", "/img/windows/frontline.png", "/img/windows/MicrosoftCloud.svg", "/img/windows/customization.svg", "/img/windows/cloudPC.png"];
        function tg(e) {
            var t = e.step;
            return No.createElement(JE, {
                img: eg[t - 1],
                stepNumber: t
            })
        }
        var ng = function(e) {
            var t, n = e.closeWelcome, a = e.freType, o = (0,
            No.useMemo)((function() {
                var e, t = {
                    WelcomeContent: QE,
                    imgs: $E
                }, n = {
                    WelcomeContent: tg,
                    imgs: eg
                };
                return e = {},
                (0,
                f.Z)(e, r.Default, t),
                (0,
                f.Z)(e, r.FLEX, n),
                (0,
                f.Z)(e, r.Default | r.FLEX, n),
                e
            }
            ), [])[a], i = o.WelcomeContent, c = o.imgs, l = c.length, u = (0,
            No.useState)(0), d = (0,
            s.Z)(u, 2), p = d[0], m = d[1];
            (0,
            No.useEffect)((function() {
                0 === p && Promise.all(c.map((function(e) {
                    new Promise((function(t) {
                        var n = new Image;
                        n.src = e,
                        n.onload = function() {
                            t("success")
                        }
                    }
                    ))
                }
                ))).then((function() {
                    return m((function(e) {
                        return e || 1
                    }
                    ))
                }
                ))
            }
            ), [c, p]);
            var v = (0,
            ko.v9)(Zr)
              , E = No.useRef(null)
              , g = No.useRef(null);
            return No.createElement("div", {
                className: "w-screen relative windows-welcome",
                style: {
                    height: "calc(100vh - ".concat((null === (t = v.config) || void 0 === t ? void 0 : t.header_height) || 0, "px)")
                }
            }, p > 0 ? No.createElement(i, {
                step: p
            }) : No.createElement(YE, null), No.createElement(GE, {
                closeWelcome: n,
                step: p,
                showNext: function() {
                    Zv("Welcome FRE Click Next " + p),
                    m((function(e) {
                        return e + 1
                    }
                    ))
                },
                showPrevious: function() {
                    Zv("Welcome FRE Click Previous " + p),
                    m((function(e) {
                        return e - 1
                    }
                    ))
                },
                total: l,
                skipButtonRef: E,
                doneButtonRef: g
            }))
        }
          , ag = function() {
            function e() {
                (0,
                i.Z)(this, e)
            }
            return (0,
            c.Z)(e, [{
                key: "apply",
                value: function() {
                    a(8875),
                    La().then((function(e) {
                        Hv({
                            type: "PIEVersion",
                            value: "",
                            NamespaceVersion: e.toString(),
                            IwpScriptVersion: 1.4.toString()
                        })
                    }
                    )).catch((function(e) {
                        Vv({
                            error: new Error(ut.PIEError),
                            errorType: ut.PIEError,
                            key: "PIE",
                            msg: "Failed to get PIE version. Error:" + e
                        })
                    }
                    )),
                    nE(),
                    Ps.tap(fe, (function(e, t) {
                        return No.createElement(ng, {
                            closeWelcome: e,
                            freType: t
                        })
                    }
                    )),
                    As.tap(fe, (function() {
                        return function(e, t, n) {
                            var a, o;
                            if (!e.Native_EnableFlexFRE)
                                return {
                                    showWelcome: "NativeWindows" === t.userInfo.client && t.shouldRunFREOnWindows,
                                    freType: r.Default
                                };
                            var i = r.NONE
                              , c = r.NONE;
                            return (null === (a = Kc(n, [kc.Unknown, kc.Dedicated])) || void 0 === a ? void 0 : a.length) > 0 && (t.shouldRunFREOnWindows && (i |= r.Default),
                            c |= r.Default),
                            (null === (o = Kc(n, [kc.Flex])) || void 0 === o ? void 0 : o.length) > 0 && (t.shouldRunFlexFREOnWindows && (i |= r.FLEX),
                            c |= r.FLEX),
                            {
                                showWelcome: !!i,
                                freType: i || c
                            }
                        }
                    }
                    )),
                    Ds.tap(fe, (function() {
                        return !0
                    }
                    )),
                    Gu.tap(fe, (function(e) {
                        return e.hideHeader = !0,
                        e.hideLeftNavigation = !0,
                        e.hideActionCardIcon = !0,
                        e.hideDSSAdmin = !0,
                        e.quickActionsHeaderClassName = "mt-7",
                        e.quickActionsLabelClassName = "quick-actions-label-native-client",
                        e.quickActionsWrapperClassName = "mb-5",
                        e.actionCardClassName = "border border-solid border-[#f0f0f0] shadow-[0_2px_4px_rgba(0,0,0,0.04)]",
                        e.actionCardBannerClassName = "mt-4 mb-[9px] relative left-[6.5px] h-[50px] rounded",
                        e.actionCardTitleClassName = "action-title-native-client",
                        e.actionCardDescClassName = "action-desc-native-client",
                        e.deviceListLabelClassName = "workspace-label-native-client",
                        e.deviceListClassName = "device-list-in-native-client",
                        e.actionListFilter = function(e) {
                            return e.contentType === Sn.TOUR
                        }
                        ,
                        Ft().clone(e)
                    }
                    )),
                    pm.tap(fe, (function(e) {
                        return e.routes.push(No.createElement(gm.AW, {
                            path: "/sso/signout",
                            key: "NativeWindowsSignout",
                            exact: !0
                        }, No.createElement(FE, null))),
                        e.routes.push(No.createElement(gm.AW, {
                            path: "/windows/context-menu/:id",
                            key: "NativeWindowsContextMenu",
                            exact: !0
                        }, No.createElement(hE, null))),
                        e
                    }
                    )),
                    Jc.tap(fe, (function(e) {
                        return e.openIconProp = {
                            imageProps: {
                                src: "/img/windows/connectIcon.svg",
                                styles: {
                                    image: {
                                        width: "14px",
                                        height: "14px"
                                    }
                                }
                            }
                        },
                        e.openOperationButtonStyle = {
                            root: {
                                padding: "4px 11px",
                                width: "98px",
                                height: "30px",
                                background: "rgba(255, 255, 255, 0.7)",
                                borderRadius: "3px",
                                borderBottomColor: "rgba(0, 0, 0, 0.1622)",
                                borderLeftColor: "rgba(0, 0, 0, 0.0578)",
                                borderRightColor: "rgba(0, 0, 0, 0.0578)",
                                borderTopColor: "rgba(0, 0, 0, 0.0578)"
                            }
                        },
                        e.deviceCardClass = "device-in-native-windows",
                        e.deviceTipsStyle = {
                            circle: {
                                borderColor: "#005FB8 #005FB8 rgba(246, 246, 246, 0.5)"
                            }
                        },
                        e.getMessageBarIconProp = function(e) {
                            return e === xc.Success ? {
                                iconName: "CompletedSolid",
                                style: {
                                    color: "#0F7B0F"
                                }
                            } : e === xc.Error ? {
                                iconName: "StatusErrorFull"
                            } : e === xc.Blocked ? {
                                iconName: "Blocked2Solid"
                            } : e === xc.Ongoing ? {
                                iconName: ""
                            } : void 0
                        }
                        ,
                        e.getOperationMenuProp = function(e) {
                            return e.styles = {
                                subComponentStyles: {
                                    menuItem: {
                                        item: {
                                            padding: "4px 4px 0px 4px"
                                        },
                                        root: {
                                            borderRadius: "4px"
                                        }
                                    }
                                }
                            },
                            e.calloutProps = {
                                styles: {
                                    root: {
                                        borderRadius: "7px"
                                    },
                                    calloutMain: {
                                        borderRadius: "7px",
                                        paddingBottom: "4px"
                                    }
                                }
                            },
                            e
                        }
                        ,
                        e.operationMenuTheme = CE,
                        e.operationMenuItemClass = "device-operation-menu-item-in-native-windows",
                        e.deviceActionModalClass = "device-action-modal-in-native-windows",
                        e.renameModalTextareaProps = {
                            underlined: !0
                        },
                        e.reverseModalFooter = !0,
                        e.actionModalCheckboxTheme = kE,
                        e.moreIconProp = {
                            iconName: "MoreVertical"
                        },
                        e.deviceContentNativeClient = "device-content-native-client",
                        e.deviceDetailsNativeClient = "device-details-native-client",
                        e.deviceNameNativeClient = "device-name-native-client",
                        e.deviceRefreshAndTryTip = t("tip_wait_try"),
                        Ft().clone(e)
                    }
                    )),
                    _E(),
                    Eo.tap(fe, (function(e) {
                        var n, a = kn().brandName;
                        switch (e) {
                        case ut.unCatchedError:
                            n = {
                                title: t("error-unCatchedError-title"),
                                info: t("error-unCatchedError-text"),
                                image: "/img/error/unCatched-windows.svg"
                            };
                            break;
                        case ut.serverError:
                            n = {
                                title: t("error-serverError-title", {
                                    brandName: a
                                }),
                                info: t("error-serverError-text"),
                                infoLink: t("error-serverError-textLink"),
                                infoLinkClick: yo,
                                image: "/img/error/server-error-windows.svg"
                            };
                            break;
                        case ut.unAuthorizedError:
                            n = {
                                title: t("error-unAuthorizedError-title", {
                                    brandName: a
                                }),
                                info: t("error-unAuthorizedError-info"),
                                image: "/img/error/unAuth-windows.svg"
                            };
                            break;
                        case ut.NoDevicesError:
                            n = {
                                title: t("error-noDevices-title"),
                                info: t("error-noDevices-text"),
                                image: "/img/error/no-devices-windows.png"
                            };
                            break;
                        default:
                            n = void 0
                        }
                        return {
                            errorConfig: n
                        }
                    }
                    )),
                    wo.tap(fe, (function() {
                        return {
                            titleClass: "mt-5 pb-0 text-[#323130]",
                            textClass: "pt-0 text-[#323130]"
                        }
                    }
                    )),
                    ho.tap(fe, (function(e, t) {
                        var n, a = "calc(100vh - ".concat((null === (n = t.NativeClient.config) || void 0 === n ? void 0 : n.header_height) || 0, "px)");
                        return (0,
                        l.Z)((0,
                        l.Z)({}, e), {}, {
                            errorPageStyle: {
                                minHeight: a
                            },
                            errorMessageStyle: {
                                minHeight: a
                            }
                        })
                    }
                    )),
                    PE(),
                    Qm.tap(fe, (function(e) {
                        return e.isDisabled = !0,
                        e
                    }
                    )),
                    _d.tap(fe, (function(e, t) {
                        return No.createElement(wE, {
                            device: e,
                            index: t
                        })
                    }
                    ))
                }
            }]),
            e
        }()
          , rg = a(3502);
        var og = a(6276)
          , ig = a(2557)
          , cg = function() {
            if (function() {
                var e;
                return window.features && "True" === (null === (e = features) || void 0 === e ? void 0 : e.enableSW)
            }() && userInfo.enableSSO) {
                if (userInfo) {
                    var e = $t(userInfo.uid);
                    try {
                        "serviceWorker"in navigator && navigator.serviceWorker.register("/service-worker.js?cache=".concat(e), {
                            scope: "/"
                        }).then((function(e) {
                            console.log("Service Worker registered: ", e)
                        }
                        )).catch((function(e) {
                            console.error("Error registering the Service Worker: ", e)
                        }
                        ))
                    } catch (Sg) {
                        console.error("Error registering the Service Worker: ", Sg)
                    }
                }
            } else
                try {
                    navigator.serviceWorker.getRegistrations().then((function(e) {
                        var t, n = (0,
                        ot.Z)(e);
                        try {
                            for (n.s(); !(t = n.n()).done; ) {
                                t.value.unregister()
                            }
                        } catch (a) {
                            n.e(a)
                        } finally {
                            n.f()
                        }
                    }
                    ))
                } catch (t) {
                    console.error(t)
                }
        }
          , sg = a(2227)
          , lg = "Win365-"
          , ug = "-theme"
          , dg = new RegExp("".concat(lg) + "\\w*" + "".concat(ug),"g")
          , pg = function(e) {
            mg(document.body, e)
        }
          , mg = function(e, t) {
            var n = function(e) {
                return "".concat(lg).concat(e.toString().toLocaleLowerCase()).concat(ug)
            }(t);
            if (!e.classList.contains(n))
                if (e.className.match(dg)) {
                    var a = e.className.replace(dg, n);
                    e.className = a
                } else
                    e.classList.add(n)
        }
          , fg = function(e) {
            var t = vg(e);
            Eg(t)
        }
          , vg = function(e) {
            var t, n, a, r = "--button-border-color", o = "--card-bg-color", i = "--button-bg-color", c = "--icon-menu-color", s = "--split-border-color", u = xr(e), d = u ? Dt.palette : Lt.palette, p = (t = {},
            (0,
            f.Z)(t, "--main-bg-color", null === d || void 0 === d ? void 0 : d.white),
            (0,
            f.Z)(t, "--main-color", null === d || void 0 === d ? void 0 : d.neutralPrimary),
            (0,
            f.Z)(t, "--highlight-color", null === d || void 0 === d ? void 0 : d.themePrimary),
            (0,
            f.Z)(t, "--button-bg-hovered-disabled", null === d || void 0 === d ? void 0 : d.neutralLighter),
            (0,
            f.Z)(t, "--primary-button-bg-hovered", null === d || void 0 === d ? void 0 : d.themeDarkAlt),
            (0,
            f.Z)(t, "--icon-color-disabled", null === d || void 0 === d ? void 0 : d.neutralTertiary),
            t), m = {};
            Object.keys(p).forEach((function(e) {
                var t = p[e];
                t && (m[e] = t)
            }
            ));
            var v = (n = {},
            (0,
            f.Z)(n, o, "#FFFFFF"),
            (0,
            f.Z)(n, i, "#FFFFFF"),
            (0,
            f.Z)(n, r, "rgb(138, 136, 134)"),
            (0,
            f.Z)(n, c, "#605E5C"),
            (0,
            f.Z)(n, s, "#C8C6C4"),
            n)
              , E = (a = {},
            (0,
            f.Z)(a, o, "rgba(255, 255, 255, 0.0512)"),
            (0,
            f.Z)(a, i, "rgb(255,255,255,0.0605)"),
            (0,
            f.Z)(a, r, "rgba(255, 255, 255, 0.06)"),
            (0,
            f.Z)(a, c, "#FFFFFF"),
            (0,
            f.Z)(a, s, "#FFFFFF"),
            a)
              , g = u ? E : v;
            return (0,
            l.Z)((0,
            l.Z)({}, m), g)
        }
          , Eg = function(e) {
            gg(document.body, e)
        }
          , gg = function(e, t) {
            e && Object.keys(t).forEach((function(n) {
                e.style.setProperty(n, t[n])
            }
            ))
        }
          , hg = function(e) {
            var t = function(e) {
                var t, n, a = "--modal-bg-color-cancel-button", r = "--modal-border-color-cancel-button", o = "--modal-color-close-button", i = (t = {},
                (0,
                f.Z)(t, a, "#E8E8E8"),
                (0,
                f.Z)(t, r, "#E8E8E8"),
                (0,
                f.Z)(t, o, "#605E5C"),
                t), c = (n = {},
                (0,
                f.Z)(n, a, "#1F1F1F"),
                (0,
                f.Z)(n, r, "#6B6B6B"),
                (0,
                f.Z)(n, o, "#BEBBB8"),
                n);
                return xr(e) ? c : i
            }(e);
            Eg(t)
        }
          , bg = {
            circle: {
                width: "80px",
                height: "80px",
                borderWidth: "3px"
            }
        }
          , wg = (0,
        ko.$j)((function(e) {
            return {
                showLoadingPage: e.Home.showLoadingPage
            }
        }
        ))(zl()((function(e) {
            var t = e.showLoadingPage
              , n = e.t
              , a = e.tReady
              , r = t && !window.location.pathname.startsWith("/webclient");
            return No.useEffect((function() {
                r && a && Fl(n("loading-page")),
                r || Au.endPerfLogEventOnce(Pu.HomePageShow)
            }
            ), [r, n, a]),
            No.createElement("div", {
                className: ["page-loading", !r && "hide"].join(" ")
            }, No.createElement("div", {
                className: "loading-wrapper"
            }, No.createElement("img", {
                src: "/img/loading/product-logo.png",
                className: "product-logo",
                "aria-label": n("product-logo"),
                alt: n("product-logo")
            }), No.createElement("div", {
                className: "bottom-wrapper"
            }, No.createElement(xd.$, {
                size: Nd.E.large,
                styles: bg,
                ariaLabel: n("loading-spinner")
            }), No.createElement("img", {
                src: "/img/loading/microsoft-logo.png",
                className: "microsoft-logo",
                "aria-label": n("microsoft-logo"),
                alt: n("microsoft-logo")
            }), r && a && No.createElement("div", {
                className: "m-10"
            }, No.createElement(Dl, {
                translateFun: n
            })))))
        }
        )))
          , yg = (0,
        ko.$j)((function(e) {
            return {
                theme: e.Home.theme
            }
        }
        ))((function(e) {
            var t = e.theme;
            return (0,
            No.useEffect)((function() {
                var e;
                pg(e = t),
                fg(e),
                hg(e)
            }
            ), [t]),
            No.createElement(Qu.f, {
                theme: xr(t) ? Dt : Lt
            }, No.createElement(qu.K, {
                id: "maincontent"
            }, No.createElement(wg, {
                key: "loading"
            }), No.createElement(bm, {
                key: "content"
            })))
        }
        ))
          , _g = new mm.QueryClient({
            defaultOptions: {
                queries: {
                    retry: 3,
                    refetchOnWindowFocus: !1
                }
            }
        });
        function Cg() {
            return Au.startPerfLogEventOnce(Pu.HomePageShow),
            no() ? ao() ? No.createElement(Nu.rL, {
                instance: Ro
            }, No.createElement(mm.QueryClientProvider, {
                client: _g
            }, No.createElement(kg, null))) : No.createElement(Nu.rL, {
                instance: Ro
            }, No.createElement(kg, null)) : No.createElement(Ig, null)
        }
        var kg = (0,
        ko.$j)()((function() {
            var e = function(e) {
                return e.result ? No.createElement(Ig, null) : null
            };
            return No.createElement(Nu.Kv, {
                interactionType: sg.s_.Redirect,
                authenticationRequest: {
                    scopes: ["".concat(eo, "/.default")]
                }
            }, e)
        }
        ));
        function Ig() {
            var e = (0,
            ko.v9)(Ur)
              , t = (0,
            ko.I0)();
            return (0,
            No.useEffect)((function() {
                !e.isSSOEnabled || e.token || e.isSignedOut || t({
                    type: gr
                })
            }
            ), [e.isSSOEnabled, e.token, e.isSignedOut, t]),
            !e.isSSOEnabled || e.token || e.isSignedOut ? No.createElement(yg, null) : null
        }
        "NativeWindows" !== userInfo.client && window.WcpConsent && window.WcpConsent.init(userInfo.language, "cookie-banner", (function() {}
        ), (function() {}
        )),
        no() ? To() : jr(),
        fv.dispatch({
            type: ae,
            payload: serviceConfig
        }),
        function() {
            var e = new ag
              , t = new mE;
            if ("NativeWindows" === userInfo.client)
                e.apply();
            else if ("NativeMac" == userInfo.client)
                t.apply();
            else if ("NativeAndroid" === userInfo.client) {
                (new uE).apply()
            }
        }(),
        (0,
        rg.l)(),
        cg(),
        window.React = No,
        window.ReactDOM = ig,
        ig.render(No.createElement(No.StrictMode, null, No.createElement(ko.zt, {
            store: fv
        }, No.createElement(og.r, {
            loading: null,
            persistor: mv
        }, No.createElement(Cg, null)))), document.getElementById("root"))
    },
    8004: function(e, t, n) {
        n.r(t),
        t.default = {}
    },
    9370: function(e, t, n) {
        n.r(t),
        t.default = {}
    },
    8875: function(e, t, n) {
        n.r(t),
        t.default = {}
    }
}, function(e) {
    e.O(0, [656], (function() {
        return t = 7248,
        e(e.s = t);
        var t
    }
    ));
    e.O()
}
]);
