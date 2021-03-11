!(function (f, d) {
    "object" == typeof exports && "undefined" != typeof module
        ? d(exports, require("jquery"), require("popper.js"))
        : "function" == typeof define && define.amd
        ? define(["exports", "jquery", "popper.js"], d)
        : d(((f = f || self).bootstrap = {}), f.jQuery, f.Popper);
})(this, function (f, d, h) {
    function y(b, a) {
        for (var c = 0; c < a.length; c++) {
            var e = a[c];
            e.enumerable = e.enumerable || !1;
            e.configurable = !0;
            "value" in e && (e.writable = !0);
            Object.defineProperty(b, e.key, e);
        }
    }
    function g(b, a, c) {
        return a && y(b.prototype, a), c && y(b, c), b;
    }
    function z(b) {
        for (var a = 1; a < arguments.length; a++) {
            var c = null != arguments[a] ? arguments[a] : {},
                e = Object.keys(c);
            "function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(c).filter(function (k) {})));
            e.forEach(function (k) {
                var A = c[k];
                k in b ? Object.defineProperty(b, k, { value: A, enumerable: !0, configurable: !0, writable: !0 }) : (b[k] = A);
            });
        }
        return b;
    }
    d = d && d.hasOwnProperty("default") ? d["default"] : d;
    h = h && h.hasOwnProperty("default") ? h["default"] : h;
    h = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function (b) {},
        getSelectorFromElement: function (b) {},
        getTransitionDurationFromElement: function (b) {},
        reflow: function (b) {},
        triggerTransitionEnd: function (b) {},
        supportsTransitionEnd: function () {},
        isElement: function (b) {},
        typeCheckConfig: function (b, a, c) {},
        findShadowRoot: function (b) {},
    };
    d.fn.emulateTransitionEnd = function (b) {};
    d.event.special[h.TRANSITION_END] = { bindType: "transitionend", delegateType: "transitionend", handle: function (b) {} };
    d.fn.alert;
    var n = (function () {
        function b(c) {
            this._element = c;
        }
        var a = b.prototype;
        return (
            (a.close = function (c) {}),
            (a.dispose = function () {}),
            (a._getRootElement = function (c) {}),
            (a._triggerCloseEvent = function (c) {}),
            (a._removeElement = function (c) {}),
            (a._destroyElement = function (c) {}),
            (b._jQueryInterface = function (c) {}),
            (b._handleDismiss = function (c) {
                return function (e) {};
            }),
            g(b, null, [{ key: "VERSION", get: function () {} }]),
            b
        );
    })();
    d(document).on("click.bs.alert.data-api", '[data-dismiss="alert"]', n._handleDismiss(new n()));
    d.fn.alert = n._jQueryInterface;
    d.fn.alert.Constructor = n;
    d.fn.alert.noConflict = function () {};
    d.fn.button;
    var t = (function () {
        function b(c) {}
        var a = b.prototype;
        return (a.toggle = function () {}), (a.dispose = function () {}), (b._jQueryInterface = function (c) {}), g(b, null, [{ key: "VERSION", get: function () {} }]), b;
    })();
    d(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (b) {});
    d.fn.button = t._jQueryInterface;
    d.fn.button.Constructor = t;
    d.fn.button.noConflict = function () {};
    d.fn.carousel;
    var p = (function () {
        function b(c, e) {}
        var a = b.prototype;
        return (
            (a.next = function () {}),
            (a.nextWhenVisible = function () {}),
            (a.prev = function () {}),
            (a.pause = function (c) {}),
            (a.cycle = function (c) {}),
            (a.to = function (c) {}),
            (a.dispose = function () {}),
            (a._getConfig = function (c) {}),
            (a._handleSwipe = function () {}),
            (a._addEventListeners = function () {}),
            (a._addTouchEventListeners = function () {}),
            (a._keydown = function (c) {}),
            (a._getItemIndex = function (c) {}),
            (a._getItemByDirection = function (c, e) {}),
            (a._triggerSlideEvent = function (c, e) {}),
            (a._setActiveIndicatorElement = function (c) {}),
            (a._slide = function (c, e) {}),
            (b._jQueryInterface = function (c) {}),
            (b._dataApiClickHandler = function (c) {}),
            g(b, null, [
                { key: "VERSION", get: function () {} },
                { key: "Default", get: function () {} },
            ]),
            b
        );
    })();
    d(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", p._dataApiClickHandler);
    d(window).on("load.bs.carousel.data-api", function () {
        for (var b = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), a = 0, c = b.length; a < c; a++) {
            var e = d(b[a]);
            p._jQueryInterface.call(e, e.data());
        }
    });
    d.fn.carousel = p._jQueryInterface;
    d.fn.carousel.Constructor = p;
    d.fn.carousel.noConflict = function () {};
    d.fn.collapse;
    var u = (function () {
        function b(c, e) {}
        var a = b.prototype;
        return (
            (a.toggle = function () {}),
            (a.show = function () {}),
            (a.hide = function () {}),
            (a.setTransitioning = function (c) {}),
            (a.dispose = function () {}),
            (a._getConfig = function (c) {}),
            (a._getDimension = function () {}),
            (a._getParent = function () {}),
            (a._addAriaAndCollapsedClass = function (c, e) {}),
            (b._getTargetFromElement = function (c) {}),
            (b._jQueryInterface = function (c) {}),
            g(b, null, [
                { key: "VERSION", get: function () {} },
                { key: "Default", get: function () {} },
            ]),
            b
        );
    })();
    d(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (b) {});
    d.fn.collapse = u._jQueryInterface;
    d.fn.collapse.Constructor = u;
    d.fn.collapse.noConflict = function () {};
    d.fn.dropdown;
    /38|40|27/;
    var m = (function () {
        function b(c, e) {}
        var a = b.prototype;
        return (
            (a.toggle = function () {}),
            (a.show = function () {}),
            (a.hide = function () {}),
            (a.dispose = function () {}),
            (a.update = function () {}),
            (a._addEventListeners = function () {}),
            (a._getConfig = function (c) {}),
            (a._getMenuElement = function () {}),
            (a._getPlacement = function () {}),
            (a._detectNavbar = function () {}),
            (a._getOffset = function () {}),
            (a._getPopperConfig = function () {}),
            (b._jQueryInterface = function (c) {}),
            (b._clearMenus = function (c) {}),
            (b._getParentFromElement = function (c) {}),
            (b._dataApiKeydownHandler = function (c) {}),
            g(b, null, [
                { key: "VERSION", get: function () {} },
                { key: "Default", get: function () {} },
                { key: "DefaultType", get: function () {} },
            ]),
            b
        );
    })();
    d(document)
        .on("keydown.bs.dropdown.data-api", '[data-toggle="dropdown"]', m._dataApiKeydownHandler)
        .on("keydown.bs.dropdown.data-api", ".dropdown-menu", m._dataApiKeydownHandler)
        .on("click.bs.dropdown.data-api keyup.bs.dropdown.data-api", m._clearMenus)
        .on("click.bs.dropdown.data-api", '[data-toggle="dropdown"]', function (b) {});
    d.fn.dropdown = m._jQueryInterface;
    d.fn.dropdown.Constructor = m;
    d.fn.dropdown.noConflict = function () {};
    d.fn.modal;
    var v = (function () {
        function b(c, e) {}
        var a = b.prototype;
        return (
            (a.toggle = function (c) {}),
            (a.show = function (c) {}),
            (a.hide = function (c) {}),
            (a.dispose = function () {}),
            (a.handleUpdate = function () {}),
            (a._getConfig = function (c) {}),
            (a._showElement = function (c) {}),
            (a._enforceFocus = function () {}),
            (a._setEscapeEvent = function () {}),
            (a._setResizeEvent = function () {}),
            (a._hideModal = function () {}),
            (a._removeBackdrop = function () {}),
            (a._showBackdrop = function (c) {}),
            (a._adjustDialog = function () {}),
            (a._resetAdjustments = function () {}),
            (a._checkScrollbar = function () {}),
            (a._setScrollbar = function () {}),
            (a._resetScrollbar = function () {}),
            (a._getScrollbarWidth = function () {}),
            (b._jQueryInterface = function (c, e) {}),
            g(b, null, [
                { key: "VERSION", get: function () {} },
                { key: "Default", get: function () {} },
            ]),
            b
        );
    })();
    d(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (b) {});
    d.fn.modal = v._jQueryInterface;
    d.fn.modal.Constructor = v;
    d.fn.modal.noConflict = function () {};
    d.fn.tooltip;
    RegExp("(^|\\s)bs-tooltip\\S+", "g");
    var B = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string|function)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            whiteList: "object",
        },
        C = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent",
            sanitize: !0,
            sanitizeFn: null,
            whiteList: {
                "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                a: ["target", "href", "title", "rel"],
                area: [],
                b: [],
                br: [],
                col: [],
                code: [],
                div: [],
                em: [],
                hr: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                i: [],
                img: ["src", "alt", "title", "width", "height"],
                li: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                small: [],
                span: [],
                sub: [],
                sup: [],
                strong: [],
                u: [],
                ul: [],
            },
        },
        l = (function () {
            function b(c, e) {}
            var a = b.prototype;
            return (
                (a.enable = function () {}),
                (a.disable = function () {}),
                (a.toggleEnabled = function () {}),
                (a.toggle = function (c) {}),
                (a.dispose = function () {}),
                (a.show = function () {}),
                (a.hide = function (c) {}),
                (a.update = function () {}),
                (a.isWithContent = function () {}),
                (a.addAttachmentClass = function (c) {}),
                (a.getTipElement = function () {}),
                (a.setContent = function () {}),
                (a.setElementContent = function (c, e) {}),
                (a.getTitle = function () {}),
                (a._getOffset = function () {}),
                (a._getContainer = function () {}),
                (a._getAttachment = function (c) {}),
                (a._setListeners = function () {}),
                (a._fixTitle = function () {}),
                (a._enter = function (c, e) {}),
                (a._leave = function (c, e) {}),
                (a._isWithActiveTrigger = function () {}),
                (a._getConfig = function (c) {}),
                (a._getDelegateConfig = function () {}),
                (a._cleanTipClass = function () {}),
                (a._handlePopperPlacementChange = function (c) {}),
                (a._fixTransition = function () {}),
                (b._jQueryInterface = function (c) {}),
                g(b, null, [
                    { key: "VERSION", get: function () {} },
                    {
                        key: "Default",
                        get: function () {
                            return C;
                        },
                    },
                    { key: "NAME", get: function () {} },
                    { key: "DATA_KEY", get: function () {} },
                    { key: "Event", get: function () {} },
                    { key: "EVENT_KEY", get: function () {} },
                    {
                        key: "DefaultType",
                        get: function () {
                            return B;
                        },
                    },
                ]),
                b
            );
        })();
    d.fn.tooltip = l._jQueryInterface;
    d.fn.tooltip.Constructor = l;
    d.fn.tooltip.noConflict = function () {};
    d.fn.popover;
    RegExp("(^|\\s)bs-popover\\S+", "g");
    z({}, l.Default, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' });
    z({}, l.DefaultType, { content: "(string|element|function)" });
    var w = (function (b) {
        function a() {}
        a.prototype = Object.create(l.prototype);
        a.prototype.constructor = a;
        a.__proto__ = l;
        b = a.prototype;
        return (
            (b.isWithContent = function () {}),
            (b.addAttachmentClass = function (c) {}),
            (b.getTipElement = function () {}),
            (b.setContent = function () {}),
            (b._getContent = function () {}),
            (b._cleanTipClass = function () {}),
            (a._jQueryInterface = function (c) {}),
            g(a, null, [
                { key: "VERSION", get: function () {} },
                { key: "Default", get: function () {} },
                { key: "NAME", get: function () {} },
                { key: "DATA_KEY", get: function () {} },
                { key: "Event", get: function () {} },
                { key: "EVENT_KEY", get: function () {} },
                { key: "DefaultType", get: function () {} },
            ]),
            a
        );
    })();
    d.fn.popover = w._jQueryInterface;
    d.fn.popover.Constructor = w;
    d.fn.popover.noConflict = function () {};
    var q = (d.fn.scrollspy, { ACTIVATE: "activate.bs.scrollspy", SCROLL: "scroll.bs.scrollspy", LOAD_DATA_API: "load.bs.scrollspy.data-api" }),
        r = (function () {
            function b(c, e) {}
            var a = b.prototype;
            return (
                (a.refresh = function () {}),
                (a.dispose = function () {}),
                (a._getConfig = function (c) {}),
                (a._getScrollTop = function () {}),
                (a._getScrollHeight = function () {}),
                (a._getOffsetHeight = function () {}),
                (a._process = function () {}),
                (a._activate = function (c) {}),
                (a._clear = function () {}),
                (b._jQueryInterface = function (c) {}),
                g(b, null, [
                    { key: "VERSION", get: function () {} },
                    { key: "Default", get: function () {} },
                ]),
                b
            );
        })();
    d(window).on(q.LOAD_DATA_API, function () {
        for (var b = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), a = b.length; a--; ) {
            var c = d(b[a]);
            r._jQueryInterface.call(c, c.data());
        }
    });
    d.fn.scrollspy = r._jQueryInterface;
    d.fn.scrollspy.Constructor = r;
    d.fn.scrollspy.noConflict = function () {};
    d.fn.tab;
    q = (function () {
        function b(c) {}
        var a = b.prototype;
        return (
            (a.show = function () {}),
            (a.dispose = function () {}),
            (a._activate = function (c, e, k) {}),
            (a._transitionComplete = function (c, e, k) {}),
            (b._jQueryInterface = function (c) {}),
            g(b, null, [{ key: "VERSION", get: function () {} }]),
            b
        );
    })();
    d(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function (b) {});
    d.fn.tab = q._jQueryInterface;
    d.fn.tab.Constructor = q;
    d.fn.tab.noConflict = function () {};
    d.fn.toast;
    var x = (function () {
        function b(c, e) {}
        var a = b.prototype;
        return (
            (a.show = function () {}),
            (a.hide = function (c) {}),
            (a.dispose = function () {}),
            (a._getConfig = function (c) {}),
            (a._setListeners = function () {}),
            (a._close = function () {}),
            (b._jQueryInterface = function (c) {}),
            g(b, null, [
                { key: "VERSION", get: function () {} },
                { key: "DefaultType", get: function () {} },
                { key: "Default", get: function () {} },
            ]),
            b
        );
    })();
    d.fn.toast = x._jQueryInterface;
    d.fn.toast.Constructor = x;
    d.fn.toast.noConflict = function () {};
    (function () {
        if (void 0 === d) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
        var b = d.fn.jquery.split(" ")[0].split(".");
        if ((2 > b[0] && 9 > b[1]) || (1 === b[0] && 9 === b[1] && 1 > b[2]) || 4 <= b[0]) throw Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
    })();
    f.Util = h;
    f.Alert = n;
    f.Button = t;
    f.Carousel = p;
    f.Collapse = u;
    f.Dropdown = m;
    f.Modal = v;
    f.Popover = w;
    f.Scrollspy = r;
    f.Tab = q;
    f.Toast = x;
    f.Tooltip = l;
    Object.defineProperty(f, "__esModule", { value: !0 });
});
