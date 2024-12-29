if (function(e) {
        function t() {
            for (var e, t, i = ["transform", "msTransform", "WebkitTransform", "MozTransform", "OTransform", "KhtmlTransform"]; e = i.shift();)
                if ("undefined" != typeof n.dumy.style[e] && (n.dumy.style.position = "absolute", t = n.dumy.getBoundingClientRect().left, n.dumy.style[e] = "translate3d(500px, 0px, 0px)", t = Math.abs(n.dumy.getBoundingClientRect().left - t), t > 100 && 900 > t)) {
                    try {
                        document.documentElement.removeChild(n.dumy)
                    } catch (o) {}
                    return !0
                }
            try {
                document.documentElement.removeChild(n.dumy)
            } catch (o) {}
            return !1
        }

        function o() {
            for (var e, t = ["transform", "msTransform", "WebkitTransform", "MozTransform", "OTransform", "KhtmlTransform"]; e = t.shift();)
                if ("undefined" != typeof n.dumy.style[e]) return !0;
            try {
                document.documentElement.removeChild(n.dumy)
            } catch (i) {}
            return !1
        }
        var n = function() {};
        n.dumy = document.createElement("div"), n.trim = function(e) {
            return e.replace(/\s/gi, "")
        }, n.splitAndTrim = function(e, t) {
            for (var i = e.split(","), o = i.length, s = 0; o > s; s++) t && (i[s] = n.trim(i[s]));
            return i
        }, n.indexOfArray = function(e, t) {
            for (var i = e.length, o = 0; i > o; o++)
                if (e[o] === t) return o;
            return -1
        }, n.randomizeArray = function(e) {
            for (var t = [], i = e.concat(), o = i.length, n = 0; o > n; n++) {
                var s = Math.floor(Math.random() * i.length);
                t.push(i[s]), i.splice(s, 1)
            }
            return t
        }, n.parent = function(e, t) {
            for (void 0 === t && (t = 1); t-- && e;) e = e.parentNode;
            return e && 1 === e.nodeType ? e : null
        }, n.sibling = function(e, t) {
            for (; e && 0 !== t;)
                if (t > 0) {
                    if (e.nextElementSibling) e = e.nextElementSibling;
                    else
                        for (var e = e.nextSibling; e && 1 !== e.nodeType; e = e.nextSibling);
                    t--
                } else {
                    if (e.previousElementSibling) e = e.previousElementSibling;
                    else
                        for (var e = e.previousSibling; e && 1 !== e.nodeType; e = e.previousSibling);
                    t++
                }
            return e
        }, n.getChildAt = function(e, t) {
            var i = n.getChildren(e);
            return 0 > t && (t += i.length), 0 > t ? null : i[t]
        }, n.getChildById = function(e) {
            return document.getElementById(e) || void 0
        }, n.getChildren = function(e, t) {
            for (var i = [], o = e.firstChild; null != o; o = o.nextSibling) t ? i.push(o) : 1 === o.nodeType && i.push(o);
            return i
        }, n.getChildrenFromAttribute = function(e, t, i) {
            for (var o = [], s = e.firstChild; null != s; s = s.nextSibling) i && n.hasAttribute(s, t) ? o.push(s) : 1 === s.nodeType && n.hasAttribute(s, t) && o.push(s);
            return 0 == o.length ? void 0 : o
        }, n.getChildFromNodeListFromAttribute = function(e, t, i) {
            for (var o = e.firstChild; null != o; o = o.nextSibling) {
                if (i && n.hasAttribute(o, t)) return o;
                if (1 === o.nodeType && n.hasAttribute(o, t)) return o
            }
            return void 0
        }, n.getAttributeValue = function(e, t) {
            return n.hasAttribute(e, t) ? e.getAttribute(t) : void 0
        }, n.hasAttribute = function(e, t) {
            if (e.hasAttribute) return e.hasAttribute(t);
            var i = e.getAttribute(t);
            return i ? !0 : !1
        }, n.insertNodeAt = function(e, t, i) {
            var o = n.children(e);
            if (0 > i || i > o.length) throw new Error("invalid index!");
            e.insertBefore(t, o[i])
        }, n.hasCanvas = function() {
            return Boolean(document.createElement("canvas"))
        }, n.hitTest = function(e, t, i) {
            if (!e) throw Error("Hit test target is null!");
            var o = e.getBoundingClientRect();
            return t >= o.left && t <= o.left + (o.right - o.left) && i >= o.top && i <= o.top + (o.bottom - o.top) ? !0 : !1
        }, n.getScrollOffsets = function() {
            return null != e.pageXOffset ? {
                x: e.pageXOffset,
                y: e.pageYOffset
            } : "CSS1Compat" == document.compatMode ? {
                x: document.documentElement.scrollLeft,
                y: document.documentElement.scrollTop
            } : void 0
        }, n.getViewportSize = function() {
            return n.hasPointerEvent && navigator.msMaxTouchPoints > 1 ? {
                w: document.documentElement.clientWidth || e.innerWidth,
                h: document.documentElement.clientHeight || e.innerHeight
            } : n.isMobile ? {
                w: e.innerWidth,
                h: e.innerHeight
            } : {
                w: document.documentElement.clientWidth || e.innerWidth,
                h: document.documentElement.clientHeight || e.innerHeight
            }
        }, n.getViewportMouseCoordinates = function(e) {
            var t = n.getScrollOffsets();
            return e.touches ? {
                screenX: void 0 == e.touches[0] ? e.touches.pageX - t.x : e.touches[0].pageX - t.x,
                screenY: void 0 == e.touches[0] ? e.touches.pageY - t.y : e.touches[0].pageY - t.y
            } : {
                screenX: void 0 == e.clientX ? e.pageX - t.x : e.clientX,
                screenY: void 0 == e.clientY ? e.pageY - t.y : e.clientY
            }
        }, n.hasPointerEvent = function() {
            return Boolean(e.navigator.msPointerEnabled) || Boolean(e.navigator.pointerEnabled)
        }(), n.isMobile = function() {
            if (n.hasPointerEvent && navigator.msMaxTouchPoints > 1 || n.hasPointerEvent && navigator.maxTouchPoints > 1) return !0;
            var e = ["android", "webos", "iphone", "ipad", "blackberry", "kfsowi"];
            for (i in e)
                if (-1 != String(navigator.userAgent).toLowerCase().indexOf(String(e[i]).toLowerCase())) return !0;
            return !1
        }(), n.isAndroid = function() {
            return -1 != navigator.userAgent.toLowerCase().indexOf("android".toLowerCase())
        }(), n.isChrome = function() {
            return -1 != navigator.userAgent.toLowerCase().indexOf("chrome")
        }(), n.isSafari = function() {
            return -1 != navigator.userAgent.toLowerCase().indexOf("safari") && -1 == navigator.userAgent.toLowerCase().indexOf("chrome")
        }(), n.isOpera = function() {
            return -1 != navigator.userAgent.toLowerCase().indexOf("opera") && -1 == navigator.userAgent.toLowerCase().indexOf("chrome")
        }(), n.isFirefox = function() {
            return -1 != navigator.userAgent.toLowerCase().indexOf("firefox")
        }(), n.isIE = function() {
            var e = Boolean(-1 != navigator.userAgent.toLowerCase().indexOf("msie")) || Boolean(-1 != navigator.userAgent.toLowerCase().indexOf("edge"));
            return Boolean(e || document.documentElement.msRequestFullscreen)
        }(), n.isIE11 = function() {
            return Boolean(!n.isIE && document.documentElement.msRequestFullscreen)
        }(), n.isIEAndLessThen9 = function() {
            return -1 != navigator.userAgent.toLowerCase().indexOf("msie 7") || -1 != navigator.userAgent.toLowerCase().indexOf("msie 8")
        }(), n.isIEAndLessThen10 = function() {
            return -1 != navigator.userAgent.toLowerCase().indexOf("msie 7") || -1 != navigator.userAgent.toLowerCase().indexOf("msie 8") || -1 != navigator.userAgent.toLowerCase().indexOf("msie 9")
        }(), n.isIE7 = function() {
            return -1 != navigator.userAgent.toLowerCase().indexOf("msie 7")
        }(), n.isIOS = function() {
            return navigator.userAgent.match(/(iPad|iPhone|iPod)/g)
        }(), n.isIphone = function() {
            return navigator.userAgent.match(/(iPhone|iPod)/g)
        }(), n.isApple = function() {
            return -1 != navigator.appVersion.toLowerCase().indexOf("mac")
        }(), n.isLocal = function() {
            return -1 != location.href.indexOf("file:")
        }(), n.hasFullScreen = function() {
            return n.dumy.requestFullScreen || n.dumy.mozRequestFullScreen || n.dumy.webkitRequestFullScreen || n.dumy.msieRequestFullScreen
        }(), n.onReady = function(e) {
            document.addEventListener ? document.addEventListener("DOMContentLoaded", function() {
                n.checkIfHasTransofrms(), e()
            }) : document.onreadystatechange = function() {
                n.checkIfHasTransofrms(), "complete" == document.readyState && e()
            }
        }, n.checkIfHasTransofrms = function() {
            document.documentElement.appendChild(n.dumy), n.hasTransform3d = t(), n.hasTransform2d = o(), n.isReadyMethodCalled_bl = !0
        }, n.disableElementSelection = function(e) {
            try {
                e.style.userSelect = "none"
            } catch (e) {}
            try {
                e.style.MozUserSelect = "none"
            } catch (e) {}
            try {
                e.style.webkitUserSelect = "none"
            } catch (e) {}
            try {
                e.style.khtmlUserSelect = "none"
            } catch (e) {}
            try {
                e.style.oUserSelect = "none"
            } catch (e) {}
            try {
                e.style.msUserSelect = "none"
            } catch (e) {}
            try {
                e.msUserSelect = "none"
            } catch (e) {}
            e.onselectstart = function() {
                return !1
            }
        }, n.getSearchArgs = function(e) {
            for (var t = {}, i = e.substr(e.indexOf("?") + 1) || location.search.substring(1), o = i.split("&"), n = 0; n < o.length; n++) {
                var s = o[n].indexOf("="),
                    r = o[n].substring(0, s),
                    a = o[n].substring(s + 1);
                a = decodeURIComponent(a), t[r] = a
            }
            return t
        }, n.getHashArgs = function(e) {
            for (var t = {}, i = e.substr(e.indexOf("#") + 1) || location.hash.substring(1), o = i.split("&"), n = 0; n < o.length; n++) {
                var s = o[n].indexOf("="),
                    r = o[n].substring(0, s),
                    a = o[n].substring(s + 1);
                a = decodeURIComponent(a), t[r] = a
            }
            return t
        }, n.isReadyMethodCalled_bl = !1, e.FWDRLUtils = n
    }(window), function(e) {
        var t = function(i) {
            var o = this;
            o.init = function() {
                if (TweenLite.ticker.useRAF(!1), o.props_obj = i, !o.props_obj) return void alert("FWDRL constructor properties object is not defined!");
                this.stageContainer = document.getElementsByTagName("body")[0], this.stageContainer || (this.stageContainer = document.documentElement), this.listeners = {
                    events_ar: []
                }, this.buttons_ar = null, this.buttonsMaxW_ar = null, this.ws = null, this.so = null, this.data = null, this.customContextMenu_do = null, this.thumbnailsManager_do = null, this.info_do = null, this.hider = null, this.main_do = null, this.bk_do = null, this.preloader_do = null, this.playlist_ar = null, this.mainItemHolder_do = null, this.itemBk_do = null, this.itemBorder_do = null, this.itemHolder_do = null, this.curItem_do = null, this.prevItem_do = null, this.image_img = null, this.closeButton_do = null, this.zoomButton_do = null, this.descButton_do = null, this.slideShowButton_do = null, this.nextButton_do = null, this.prevButton_do = null, this.hsThumbanilsButton_do = null, this.video_do = null, this.videoHolder_do = null, this.audioHolder_do = null, this.audio_do = null, this.rightClickContextMenu_str = this.props_obj.rightClickContextMenu || "developer";
                var e = "developer" == this.rightClickContextMenu_str || "disabled" == this.rightClickContextMenu_str || "default" == this.rightClickContextMenu_str;
                e || (this.rightClickContextMenu_str = "developer"), this.buttonsAlignment_str = this.props_obj.buttonsAlignment || "in";
                var e = "in" == this.buttonsAlignment_str || "out" == this.buttonsAlignment_str;
                e || (this.buttonsAlignment_str = "in"), this.DFButtonsAlignment_str = this.buttonsAlignment_str, this.descriptionWindowPosition_str = this.props_obj.descriptionWindowPosition || "top", e = "top" == this.descriptionWindowPosition_str || "bottom" == this.descriptionWindowPosition_str, e || (this.descriptionWindowPosition_str = "top"), this.DFDescriptionWindowPosition_str = this.descriptionWindowPosition_str, this.descriptionAnimationType_str = this.props_obj.descriptionWindowAnimationType || "motion", e = "motion" == this.descriptionAnimationType_str || "opacity" == this.descriptionAnimationType_str, e || (this.descriptionAnimationType_str = "motion"), this.DFDescriptionAnimationType_str = this.descriptionAnimationType_str, this.descriptionAnimationType_str = this.props_obj.descriptionWindowAnimationType || "motion", e = "motion" == this.descriptionAnimationType_str || "opacity" == this.descriptionAnimationType_str, e || (this.descriptionAnimationType_str = "motion"), this.DFDescriptionAnimationType_str = this.descriptionAnimationType_str, this.thumbnailsHoverEffect_str = this.props_obj.thumbnailsHoverEffect || "scale", e = "scale" == this.thumbnailsHoverEffect_str || "opacity" == this.thumbnailsHoverEffect_str, e || (this.thumbnailsHoverEffect_str = "opacity"), this.DFThumbnailsHoverEffect_str = this.thumbnailsHoverEffect_str, this.facebookAppId_str = o.props_obj.facebookAppId || void 0, this.googleMapsAPIKey_str = "AIzaSyDYlgLIneg_UOd8STBfJEgq2JgmT5nNJKU", this.backgroundColor_str = this.props_obj.backgroundColor || "#000000", this.DFBackgroundColor_str = o.backgroundColor_str, this.playlistDOMOrObject = null, this.type_str, this.itemBorderColor_str = this.props_obj.itemBorderColor || "transparent", this.DFitemBorderColor_str = this.itemBorderColor_str, this.itemBkColor_str = this.props_obj.itemBackgroundColor || "transparent", this.DFItemBkColor_str = this.itemBkColor_str, this.playlistDomOrObj_str = void 0, this.itemBoxShadow_str = this.props_obj.itemBoxShadow || "none", this.DFItemBoxShadow_str = this.itemBoxShadow_str, this.thumbnailsBorderNormalColor_str = this.props_obj.thumbnailsBorderNormalColor || "#FF0000", this.DFThumbnailsBorderNormalColor = this.thumbnailsBorderNormalColor_str, this.thumbnailsBorderSelectedColor_str = this.props_obj.thumbnailsBorderSelectedColor || "#FF0000", this.DFThumbnailsBorderSelectedColor_str = this.thumbnailsBorderSelectedColor_str, this.descriptionWindowBackgroundColor_str = this.props_obj.descriptionWindowBackgroundColor || "#FF0000", this.DFDescriptionWindowBackgroundColor = this.descriptionWindowBackgroundColor_str, this.thumbnailsOverlayColor_str = this.props_obj.thumbnailsOverlayColor || "#FF0000", this.DFThumbnailsOverlayColor_str = this.thumbnailsOverlayColor_str, this.posterPath_str, this.DFVideoControllerBackgroundColor_str, this.DFVideoPosterBackgroundColor_str, this.DFTimeColor_str, this.descriptionWindowBackgroundOpacity = this.props_obj.descriptionWindowBackgroundOpacity || 1, this.DFDescriptionWindowBackgroundOpacity = this.descriptionWindowBackgroundOpacity, this.backgroundOpacity = this.props_obj.backgroundOpacity || .8, this.DFBackgroundOpacity = this.backgroundOpacity, this.buttonsOffsetIn = o.buttonsAlignment_str == t.BUTTONS_IN ? this.props_obj.buttonsOffsetIn || 0 : this.props_obj.buttonsOffsetOut || 0, this.DFButtonsOffsetIn = this.buttonsOffsetIn, this.buttonsOffsetOut = o.buttonsAlignment_str == t.BUTTONS_IN ? this.props_obj.buttonsOffsetOut || 0 : this.props_obj.buttonsOffsetIn || 0, this.DFButtonsOffsetOut = this.buttonsOffsetOut, this.audioPlayerMarginsOffset = 20, this.itemBorderRadius = this.props_obj.itemBorderRadius || 0, this.DFItemBorderRadius = this.itemBorderRadius, this.itemBorderSize = this.props_obj.itemBorderSize || 0, 0 == this.itemBorderSize && (this.itemBorderColor_str = "transparent"), this.DFItemBorderSize = this.itemBorderSize, this.spaceBetweenButtons = this.props_obj.spaceBetweenButtons || 0, this.DFSpaceBetweenButtons = this.spaceBetweenButtons, this.buttonsHideDelay = this.props_obj.buttonsHideDelay || 3, this.buttonsHideDelay *= 1e3, this.DFbuttonsHideDelay = this.buttonsHideDelay, this.defaultItemW = this.props_obj.defaultItemWidth || 640, this.defaultItemH = this.props_obj.defaultItemHeight || 380, this.DFDefaultItemW = this.defaultItemW, this.DFDefaultItemH = this.defaultItemH, this.thumbnailsOffsetBottom = this.props_obj.thumbnailsOffsetBottom || 0, this.DFThumbnailsOffsetBottom = this.thumbnailsOffsetBottom, this.thumbnailsBorderSize = this.props_obj.thumbnailsBorderSize || 0, this.DFThumbnailsBorderSize = this.thumbnailsBorderSize, this.thumbnailsBorderRadius = this.props_obj.thumbnailsBorderRadius || 0, this.DFThumbnailsBorderRadius = this.thumbnailsBorderRadius, this.thumbnailH = this.props_obj.thumbnailsImageHeight || 50, this.thumbnailH += 2 * this.thumbnailsBorderSize + this.thumbnailsOffsetBottom, this.DFThumbnailH = this.thumbnailH, this.spaceBetweenThumbnailsAndItem = this.props_obj.spaceBetweenThumbnailsAndItem || 0, this.spaceBetweenThumbnails = this.props_obj.spaceBetweenThumbnails || 0, this.DFSpaceBetweenThumbnails = this.spaceBetweenThumbnails, this.itemOffsetH = this.props_obj.itemOffsetHeight || 0, this.DFItemOffsetH = this.itemOffsetH, this.spaceBetweenThumbnailsAndItem = this.props_obj.spaceBetweenThumbnailsAndItem || 0, this.DFSpaceBetweenThumbnailsAndItem = this.spaceBetweenThumbnailsAndItem, this.slideShowDelay = 1e3 * parseInt(this.props_obj.slideShowDelay), this.slideShowDelay < .001 && (this.slideShowDelay = 1e3), this.DFSlideShowDelay = this.slideShowDelay, this.thumbnailsOverlayOpacity = this.props_obj.thumbnailsOverlayOpacity || 1, this.DFThumbnailsOverlayOpacity = this.thumbnailsOverlayOpacity, this.id = -1, this.prevId = -2, this.stageWidth = 0, this.stageHeight = 0, this.totalItems = 0, this.originalW = 0, this.originalH = 0, this.maxButtonW = 0, this.finalW = 0, this.finalH = 0, this.prevVideoW = 0, this.prevVideoH = 0, this.finalX = 0, this.finalY = 0, this.gmx = 0, this.gmy = 0, this.lastPresedX = 0, this.lastPresedY = 0, this.friction = .9, this.vx = 0, this.vy = 0, this.dif = 0, this.mouseX = 0, this.mouseY = 0, this.resizeHandlerId_to, this.showOrHideCompleteId_to, this.hideCompleteId_to, this.animId_to, this.maximizeCompleteTimeOutId_to, this.minimizeCompleteTimeOutId_to, this.disableClickId_to, this.doNotAllowToHideId_to, this.updateImageWhenMaximized_int, this.isAnimForVideoAndAudioPlayersDone_bl = !1, this.isMobile_bl = FWDRLUtils.isMobile, this.useDeepLinking_bl = this.props_obj.useDeepLinking, this.useDeepLinking_bl = "yes" == this.useDeepLinking_bl ? !0 : !1, FWDRLUtils.isLocal && (this.useDeepLinking_bl = !1), this.showCloseButton_bl = this.props_obj.showCloseButton, this.showCloseButton_bl = "no" == this.showCloseButton_bl ? !1 : !0, this.DFShowCloseButton_bl = this.showCloseButton_bl, this.defaultShowZoomButton_bl = this.props_obj.showZoomButton, this.defaultShowZoomButton_bl = "no" == this.defaultShowZoomButton_bl ? !1 : !0, this.DFShowZoomButton = this.defaultShowZoomButton_bl, this.showZoomButton_bl = !1, this.defaultShowNextAndPrevButtons_bl = this.props_obj.showNextAndPrevButtons, this.defaultShowNextAndPrevButtons_bl = "no" == this.defaultShowNextAndPrevButtons_bl ? !1 : !0, "no" == this.props_obj.showNextAndPrevButtonsOnMobile && o.isMobile_bl && (this.defaultShowNextAndPrevButtons_bl = !1), this.DFSefaultShowNextAndPrevButtons_bl = this.defaultShowNextAndPrevButtons_bl, this.defaultHideDescriptionButtons_bl = this.props_obj.showDescriptionButton, this.defaultHideDescriptionButtons_bl = "yes" == this.defaultHideDescriptionButtons_bl ? !0 : !1, this.DFDefaultHideDescriptionButtons_bl = this.defaultHideDescriptionButtons_bl, this.showDescriptionButton_bl = !1, this.hasItemDescription_bl = !1, this.defaultShowDescriptionByDefault_bl = this.props_obj.showDescriptionByDefault, this.defaultShowDescriptionByDefault_bl = "yes" == this.defaultShowDescriptionByDefault_bl ? !0 : !1, this.DFDefaultShowDescriptionByDefault_bl = this.defaultShowDescriptionByDefault_bl, this.showDescription_bl = this.defaultShowDescriptionByDefault_bl, this.addKeyboardSupport_bl = this.props_obj.addKeyboardSupport, this.addKeyboardSupport_bl = "yes" == this.addKeyboardSupport_bl ? !0 : !1, this.DFSddKeyboardSupport_bl = this.addKeyboardSupport_bl, this.slideShowAutoPlay_bl = this.props_obj.slideShowAutoPlay, this.slideShowAutoPlay_bl = "yes" == this.slideShowAutoPlay_bl ? !0 : !1, this.DFSlideShowAutoPlay_bl = this.slideShowAutoPlay_bl, this.videoAutoPlay_bl = this.props_obj.videoAutoPlay, this.videoAutoPlay_bl = "yes" == this.videoAutoPlay_bl ? !0 : !1, o.isMobile_bl && (o.videoAutoPlay_bl = !1), this.DFVideoAutoPlay_bl = this.videoAutoPlay_bl, this.audioAutoPlay_bl = this.props_obj.audioAutoPlay, this.audioAutoPlay_bl = "yes" == this.audioAutoPlay_bl ? !0 : !1, o.isMobile_bl && (o.audioAutoPlay_bl = !1), this.DFAudioAutoPlay_bl = this.audioAutoPlay_bl, this.nextVideoOrAudioAutoPlay_bl = this.props_obj.nextVideoOrAudioAutoPlay, this.nextVideoOrAudioAutoPlay_bl = "yes" == this.nextVideoOrAudioAutoPlay_bl ? !0 : !1, o.isMobile_bl && (o.nextVideoOrAudioAutoPlay_bl = !1), this.DFNextVideoOrAudioAutoPlay_bl = this.nextVideoOrAudioAutoPlay_bl, this.defaultShowThumbnails_bl = this.props_obj.showThumbnails, this.defaultShowThumbnails_bl = "yes" == this.defaultShowThumbnails_bl ? !0 : !1, this.DFDefaultThumbnails_bl = this.defaultShowThumbnails_bl, this.showThumbnailsByDefault_bl = this.props_obj.showThumbnailsByDefault, this.showThumbnailsByDefault_bl = "yes" == this.showThumbnailsByDefault_bl ? !0 : !1, this.DFShowThumbnailsByDefault_bl = this.showThumbnailsByDefault_bl, this.defaultShowThumbnailsHideOrShowButton_bl = this.props_obj.showThumbnailsHideOrShowButton, this.defaultShowThumbnailsHideOrShowButton_bl = "yes" == this.defaultShowThumbnailsHideOrShowButton_bl ? !0 : !1, this.DFDefaultShowThumbnailsHideOrShowButton_bl = this.defaultShowThumbnailsHideOrShowButton_bl, this.showSlideShowButton_bl = this.props_obj.showSlideShowButton, this.showSlideShowButton_bl = "yes" == this.showSlideShowButton_bl ? !0 : !1, this.DFShowSlideShowButton_bl = this.showSlideShowButton_bl, this.defaultShowSlideShowAnimation_bl = this.props_obj.showSlideShowAnimation, this.defaultShowSlideShowAnimation_bl = "yes" == this.defaultShowSlideShowAnimation_bl ? !0 : !1, this.DFSefaultShowSlideShowAnimation_bl = this.defaultShowSlideShowAnimation_bl, this.showSlideShowAnimation_bl = !1, this.useAsModal_bl = this.props_obj.useAsModal, this.useAsModal_bl = "yes" == this.useAsModal_bl ? !0 : !1, this.DFUseAsModal_bl = this.useAsModal_bl, this.showFacebookButton_bl = this.props_obj.showFacebookButton, this.showFacebookButton_bl = "yes" == this.showFacebookButton_bl ? !0 : !1, this.DFShowFacebookButton_bl = this.showFacebookButton_bl, this.showThumbnailsOverlay_bl = this.props_obj.showThumbnailsOverlay, this.showThumbnailsOverlay_bl = "yes" == this.showThumbnailsOverlay_bl ? !0 : !1, this.DFShowThumbnailsOverlay_bl = this.showThumbnailsOverlay_bl, this.showThumbnailsSmallIcon_bl = this.props_obj.showThumbnailsSmallIcon, this.showThumbnailsSmallIcon_bl = "yes" == this.showThumbnailsSmallIcon_bl ? !0 : !1, this.DFShowThumbnailsSmallIcon_bl = this.showThumbnailsSmallIcon_bl, this.doNotAllowToHide_bl = !1, this.isVideoFullScreen_bl = !1, this.hasKeyboardSupport_bl = !1, this.isClickedDisabled_bl = !1, this.showThumbnails_bl = !1, this.areThumbnailsShowed_bl = !1, this.showThumbnailsHideOrShowButton_bl = !1, this.isDragging_bl = !1, this.isAnimMaximizeOrMinimize_bl = !1, this.swipeMoved_bl = !1, this.isAPIReady_bl = !1, this.isLoading_bl = !1, this.isShowed_bl = !1, o.isReady_bl = !1, this.isAnim_bl = !1, this.isFirstItemShowed_bl = !1, this.firstVideoOrAudioAdded_bl = !1, this.isMaximized_bl = !1, this.useVideo_bl = !1, this.hasPointerEvent_bl = FWDRLUtils.hasPointerEvent, this.initiallize()
            }, o.initiallize = function() {
                o.main_do = new FWDRLDisplayObject("div"), o.main_do.screen.setAttribute("id", "RL"), o.main_do.getStyle().msTouchAction = "none", o.main_do.getStyle().webkitTapHighlightColor = "rgba(0, 0, 0, 0)", o.main_do.setBackfaceVisibility(), !o.isMobile_bl && FWDRLUtils.isChrome && (o.main_do.hasTransform3d_bl = !1, o.main_do.hasTransform2d_bl = !1), o.main_do.getStyle().width = "100%", o.main_do.getStyle().zIndex = "100000000000000000", o.bk_do = new FWDRLDisplayObject("div"), o.bk_do.getStyle().width = "100%", o.bk_do.getStyle().height = "100%", o.bk_do.getStyle().backgroundColor = o.backgroundColor_str, o.bk_do.setAlpha(0), o.mainItemHolder_do = new FWDRLDisplayObject("div"), FWDRLDescriptionWindow.setPrototype(), o.desc_do = new FWDRLDescriptionWindow(o, o.descriptionAnimationType_str, o.descriptionWindowPosition_str, o.itemBorderSize, o.descriptionWindowBackgroundColor_str, o.descriptionWindowBackgroundOpacity), o.itemBorder_do = new FWDRLDisplayObject("div"), o.itemBorder_do.getStyle().backgroundColor = o.itemBorderColor_str, !o.isMobile_bl && FWDRLUtils.isChrome && (o.itemBorder_do.hasTransform3d_bl = !1, o.itemBorder_do.hasTransform2d_bl = !1, o.itemBorder_do.setBackfaceVisibility()), o.itemBk_do = new FWDRLDisplayObject("div"), o.itemBk_do.getStyle().backgroundColor = o.itemBkColor_str, o.itemHolder_do = new FWDRLDisplayObject("div"), o.itemHolder_do.setOverflow("visible"), o.mainItemHolder_do.addChild(o.itemBorder_do), o.mainItemHolder_do.addChild(o.itemBk_do), o.mainItemHolder_do.addChild(o.itemHolder_do), o.mainItemHolder_do.addChild(o.desc_do), o.main_do.addChild(o.bk_do), o.main_do.addChild(o.mainItemHolder_do), o.stageContainer.appendChild(o.main_do.screen), (!FWDRLUtils.isMobile || FWDRLUtils.isMobile && FWDRLUtils.hasPointerEvent) && o.main_do.setSelectable(!1), o.isMobile_bl || o.setupContextMenu(), o.setupInfoWindow(), o.setupHider(), o.setupDisableClick(), o.setupData(), o.useDeepLinking_bl && (o.setupDL(), setTimeout(function() {
                    var e = FWDAddress.getParameter("rl_playlist"),
                        i = FWDAddress.getParameter("rl_id");
                    o.propsObjVariableName_str = FWDAddress.getParameter("rl_propsobj"), location.href.indexOf("RL?") && e && i && t.show(e, i, o.propsObjVariableName_str)
                }, 100))
            }, o.setupInfoWindow = function() {
                FWDRLInfo.setPrototype(), o.info_do = new FWDRLInfo(o)
            }, o.setupContextMenu = function() {
                o.customContextMenu_do = new FWDRLContextMenu(o.main_do, o.rightClickContextMenu_str)
            }, this.setupHider = function() {
                FWDRLHider.setPrototype(), o.hider = new FWDRLHider(o.main_do, o.buttonsHideDelay), o.hider.addListener(FWDRLHider.SHOW, o.hiderShowHandler), o.hider.addListener(FWDRLHider.HIDE, o.hiderHideHandler)
            }, this.hiderShowHandler = function() {
                o.showButtonsWithFade(!0), o.positionButtons(!0)
            }, this.hiderHideHandler = function() {
                if (!o.isMobile_bl) {
                    if (o.showCloseButton_bl && FWDRLUtils.hitTest(o.closeButton_do.screen, o.hider.globalX, o.hider.globalY)) return void o.hider.reset();
                    if (o.showNextAndPrevButtons_bl && (FWDRLUtils.hitTest(o.nextButton_do.screen, o.hider.globalX, o.hider.globalY) || FWDRLUtils.hitTest(o.prevButton_do.screen, o.hider.globalX, o.hider.globalY))) return void o.hider.reset();
                    if (o.showZoomButton_bl && FWDRLUtils.hitTest(o.zoomButton_do.screen, o.hider.globalX, o.hider.globalY)) return void o.hider.reset();
                    if (o.showDescriptionButton_bl && FWDRLUtils.hitTest(o.descButton_do.screen, o.hider.globalX, o.hider.globalY)) return void o.hider.reset();
                    if (o.showSlideShowButton_bl && FWDRLUtils.hitTest(o.slideShowButton_do.screen, o.hider.globalX, o.hider.globalY)) return void o.hider.reset();
                    if (o.showFacebookButton_bl && FWDRLUtils.hitTest(o.fbButton_do.screen, o.hider.globalX, o.hider.globalY)) return void o.hider.reset();
                    if (o.showThumbnailsHideOrShowButton_bl && FWDRLUtils.hitTest(o.hsThumbanilsButton_do.screen, o.hider.globalX, o.hider.globalY)) return void o.hider.reset()
                }
                o.showSlideShowAnimation_bl && (o.buttonsAlignment_str == t.BUTTONS_IN ? FWDRLTweenMax.to(o.slp_do, .8, {
                    y: o.finalY,
                    ease: Expo.easeInOut
                }) : FWDRLTweenMax.to(o.slp_do, .8, {
                    y: o.buttonsOffsetIn,
                    ease: Expo.easeInOut
                })), o.hideButtonsWithFade(!0)
            }, o.setupDisableClick = function() {
                o.disableClick_do = new FWDRLDisplayObject("div"), FWDRLUtils.isIE && (o.disableClick_do.setBkColor("#FFFFFF"), o.disableClick_do.setAlpha(1e-5))
            }, o.disableClick = function() {
                o.showDisable(), o.disableClickId_to = setTimeout(function() {
                    o.hideDisable()
                }, 100)
            }, o.showDisable = function() {
                o.isClickedDisabled_bl || (o.isClickedDisabled_bl = !0, o.disableClick_do.setWidth(o.stageWidth), o.disableClick_do.setHeight(o.stageHeight))
            }, o.hideDisable = function() {
                o.isClickedDisabled_bl && (o.isClickedDisabled_bl = !1, o.disableClick_do.setWidth(0), o.disableClick_do.setHeight(0))
            }, o.startResizeHandler = function() {
                e.addEventListener ? (e.addEventListener("resize", o.onResizeHandler), e.addEventListener("scroll", o.scrollHandler), e.addEventListener("mousewheel", o.mouseDummyHandler), e.addEventListener("DOMMouseScroll", o.mouseDummyHandler), o.isMobile_bl && e.addEventListener("touchmove", o.mouseDummyHandler)) : e.attachEvent && (e.attachEvent("onresize", o.onResizeHandler), e.attachEvent("onscroll", o.scrollHandler), document.attachEvent("onmousewheel", o.mouseDummyHandler)), o.onResizeHandler(), setTimeout(o.scrollHandler, 200), setTimeout(o.scrollHandler, 500)
            }, o.stopResizeHandler = function() {
                clearTimeout(o.resizeHandlerId_to), e.removeEventListener ? (e.removeEventListener("resize", o.onResizeHandler), e.removeEventListener("scroll", o.scrollHandler), o.isMobile_bl && e.removeEventListener("touchmove", o.mouseDummyHandler)) : e.detachEvent && (e.detachEvent("onresize", o.onResizeHandler), e.detachEvent("onscroll", o.scrollHandler), document.detachEvent("onmousewheel", o.mouseDummyHandler))
            }, o.onResizeHandler = function() {
                o.resizeHandler()
            }, o.scrollHandler = function(e) {
                o.so = FWDRLUtils.getScrollOffsets(), o.isShowed_bl && (o.main_do.setX(o.so.x), o.main_do.setY(o.so.y), e && e.preventDefault && e.preventDefault())
            }, o.addPreventMouseWheel = function() {
                e.addEventListener ? (e.addEventListener("mousewheel", o.mouseDummyHandler), e.addEventListener("DOMMouseScroll", o.mouseDummyHandler)) : document.attachEvent && document.attachEvent("onmousewheel", o.mouseDummyHandler)
            }, o.removePreventMouseWheel = function() {
                e.removeEventListener ? (e.removeEventListener("mousewheel", o.mouseDummyHandler), e.removeEventListener("DOMMouseScroll", o.mouseDummyHandler)) : document.detachEvent && document.detachEvent("onmousewheel", o.mouseDummyHandler)
            }, this.mouseDummyHandler = function(e) {
                return e.preventDefault ? void e.preventDefault() : !1
            }, o.resizeHandler = function() {
                o.isShowed_bl && (o.ws = FWDRLUtils.getViewportSize(), o.stageWidth = o.ws.w, o.stageHeight = o.ws.h, o.isMobile_bl && (o.main_do.setWidth(o.stageWidth), o.main_do.setHeight(o.stageHeight)), o.preloader_do && o.positionPreloader(), o.info_do && o.info_do.isShowed_bl && o.info_do.positionAndResize(), o.resizeCurrentItem(), o.positionButtons(), o.main_do.setX(o.so.x), o.main_do.setY(o.so.y), o.main_do.setHeight(o.stageHeight), o.thumbnailsManager_do && o.showThumbnails_bl && o.thumbnailsManager_do.positionAndResize(), clearTimeout(o.resizeHandlerId_to), o.resizeHandlerId_to = setTimeout(o.checkStageSizeAndResize, 50))
            }, o.checkStageSizeAndResize = function() {
                o.ws = FWDRLUtils.getViewportSize(), o.stageWidth != o.ws.w && o.resizeHandler()
            }, o.setupData = function() {
                FWDRLData.setPrototype(), o.data = new FWDRLData(o.props_obj, o.rootElement_el, o), o.DFVideoControllerBackgroundColor_str = o.data.videoControllerBackgroundColor_str, o.DFVideoPosterBackgroundColor_str = o.data.videoPosterBackgroundColor_str, o.DFAudioControllerBackgroundColor_str = o.data.audioControllerBackgroundColor_str, o.data.addListener(FWDRLData.PRELOADER_LOAD_DONE, o.onPreloaderLoadDone), o.data.addListener(FWDRLData.LOAD_ERROR, o.dataLoadError), o.data.addListener(FWDRLData.SKIN_LOAD_COMPLETE, o.dataSkinLoadComplete)
            }, o.onPreloaderLoadDone = function() {
                o.setupPreloader(), o.isShowed_bl && (o.positionPreloader(), o.preloader_do.show(!0), o.resizeHandler())
            }, o.dataLoadError = function(e) {
                o.preloader_do && o.preloader_do.hide(!1), o.main_do.addChild(o.info_do), o.info_do.showText(e.text), setTimeout(o.resizeHandler, 200), t.dispatchEvent(t.ERROR, {
                    error: e.text
                })
            }, o.dataSkinLoadComplete = function() {
                o.isReady_bl = !0, o.useVideo_bl = o.data.useVideo_bl, o.useAudio_bl = o.data.useAudio_bl, o.setupMainStuff(), clearTimeout(o.showOrHideCompleteId_to), o.showOrHideCompleteId_to = setTimeout(o.showComplete, 401), setTimeout(function() {
                    t.dispatchEvent(t.READY)
                }, 401)
            }, o.setupMainStuff = function() {
                o.setupButtons(), o.setupTimerManager(), o.setupFacebook(), o.data.useVideo_bl && o.setupVideoPlayer(), o.data.useAudio_bl && o.setupAudioPlayer(), o.hideStuffForGood()
            }, o.setupVideoPlayer = function() {
                o.videoHolder_do = new FWDRLDisplayObject("div"), o.videoHolder_do.setWidth(500), o.videoHolder_do.setHeight(500), o.mainItemHolder_do.addChildAt(o.videoHolder_do, 3), o.video_do = new FWDRLEVPlayer(o.videoHolder_do.screen, o.data), o.video_do.addListener(FWDRLEVPlayer.ERROR, o.videoErrorHandler), o.video_do.addListener(FWDRLEVPlayer.GO_FULLSCREEN, o.videoFullScreenHandler), o.video_do.addListener(FWDRLEVPlayer.GO_NORMALSCREEN, o.videoNormalScreenHandler)
            }, o.videoErrorHandler = function(e) {
                o.main_do.addChild(o.info_do), o.info_do.showText(e.error)
            }, o.videoFullScreenHandler = function() {
                o.isVideoFullScreen_bl = !0, o.resizeCurrentItem(), o.mainItemHolder_do.getStyle().overflow = "visible", o.setButtonsInvisible(), o.addKeyboardSupport_bl && o.removeKeyboardSupport(), o.isMobile_bl && o.removeSwipeSupport()
            }, o.videoNormalScreenHandler = function() {
                o.isVideoFullScreen_bl = !1, o.resizeCurrentItem(), o.mainItemHolder_do.getStyle().overflow = "hidden", o.setButtonsVisible(), o.addKeyboardSupport_bl && o.addKeyboardSupport(), o.isMobile_bl && o.addSwipeSupport()
            }, o.setupAudioPlayer = function() {
                o.audioHolder_do = new FWDRLDisplayObject("div"), o.audioHolder_do.hasTransform3d_bl = !1, o.audioHolder_do.hasTransform2d_bl = !1, o.audioHolder_do.setWidth(500), o.audioHolder_do.setHeight(500), o.audioHolder_do.setHeight(o.data.audioControllerHeight), o.mainItemHolder_do.addChildAt(o.audioHolder_do, 3), o.mainItemHolder_do.addChildAt(o.audioHolder_do, 3), o.audio_do = new FWDRLEAP(o.audioHolder_do.screen, o.data), o.audio_do.addListener(FWDRLEAP.ERROR, o.videoErrorHandler)
            }, o.setupTimerManager = function() {
                FWDRLTimerManager.setProtptype(), o.tm = new FWDRLTimerManager(o.slideShowDelay), o.tm.addListener(FWDRLTimerManager.STOP, o.tmStopHandler), o.tm.addListener(FWDRLTimerManager.START, o.tmStartHandler), o.tm.addListener(FWDRLTimerManager.PAUSE, o.tmPauseHandler), o.tm.addListener(FWDRLTimerManager.RESUME, o.tmResumeHandler), o.tm.addListener(FWDRLTimerManager.TIME, o.tmTimeHandler)
            }, o.tmStopHandler = function() {
                o.slideShowButton_do.setButtonState(1), o.showSlideShowAnimation_bl && (o.hideSlideShowAnimation(), o.positionButtons(!0)), o.showSlideShowAnimation_bl = !1
            }, o.tmStartHandler = function() {
                o.slideShowButton_do.setButtonState(0), o.showSlideShowAnimation_bl || (o.showSlideShowAnimation(), o.positionButtons(!0), o.slp_do.animShow()), o.showSlideShowAnimation_bl = !0
            }, o.tmPauseHandler = function() {
                o.showSlideShowAnimation_bl && o.slp_do.animHide()
            }, o.tmResumeHandler = function() {
                o.showSlideShowAnimation_bl && o.slp_do.animShow()
            }, o.tmTimeHandler = function() {
                o.gotoNextItem(), o.showSlideShowAnimation_bl && o.slp_do.animHide()
            }, o.setupDL = function() {
                FWDAddress.onChange = o.dlChangeHandler, o.dlChangeHandler()
            }, o.dlChangeHandler = function() {
                if (o.isReady_bl && !o.isAnim_bl && !o.isAnimMaximizeOrMinimize_bl && o.useDeepLinking_bl) {
                    if (o.isMaximized_bl) return void o.maximizeOrMinimize();
                    var e = FWDAddress.getParameter("rl_playlist"),
                        i = FWDAddress.getParameter("rl_id");
                    if (o.propsObjVariableName_str = FWDAddress.getParameter("rl_propsobj"), !o.isShowed_bl) return void(-1 != location.href.indexOf("RL?") && e && i && t.show(e, i, o.propsObjVariableName_str));
                    if (-1 == location.href.indexOf("RL?") || !e || !i) return void o.hide();
                    if (o.id = parseInt(FWDAddress.getParameter("rl_id")), o.id != o.prevId) {
                        if (o.id < 0) return o.id = 0, void FWDAddress.setValue(o.propsObjVariableName_str ? "RL?rl_playlist=" + o.playlistDomOrObj_str + "&rl_id=" + o.id + "&rl_propsobj=" + o.propsObjVariableName_str : "RL?rl_playlist=" + o.playlistDomOrObj_str + "&rl_id=" + o.id);
                        if (o.id > o.totalItems - 1) return o.id = o.totalItems - 1, void FWDAddress.setValue(o.propsObjVariableName_str ? "RL?rl_playlist=" + o.playlistDomOrObj_str + "&rl_id=" + o.id + "&rl_propsobj=" + o.propsObjVariableName_str : "RL?rl_playlist=" + o.playlistDomOrObj_str + "&rl_id=" + o.id);
                        o.createAndShowItem(), o.prevId = o.id
                    }
                }
            }, o.setupPreloader = function() {
                FWDRLPreloader.setPrototype(), o.preloader_do = new FWDRLPreloader(o.data.mainPreloader_img, 38, 38, 30, 36, !0), o.main_do.addChild(o.preloader_do)
            }, o.positionPreloader = function() {
                o.preloader_do.setX(parseInt((o.stageWidth - o.preloader_do.w) / 2)), o.preloader_do.setY(o.thumbnailsManager_do && o.thumbnailsManager_do.areThumbnailsCreated_bl && o.areThumbnailsShowed_bl ? parseInt((o.stageHeight - o.preloader_do.h - o.thumbnailH) / 2) : parseInt((o.stageHeight - o.preloader_do.h) / 2))
            }, o.setupFacebook = function() {
                "file:" != document.location.protocol && o.showFacebookButton_bl && (o.facebookShare = new FWDRLFacebookShare(o.facebookAppId_str))
            }, o.setupThumbnailManager = function() {
                o.thumbnailsManager_do || (FWDRLThumbnailsManager.setPrototype(), o.thumbnailsManager_do = new FWDRLThumbnailsManager(o), o.thumbnailsManager_do.addListener(FWDRLThumb.CLICK, o.thumbClickHandler), o.main_do.addChildAt(o.thumbnailsManager_do, 1))
            }, o.hideOrShowThumbnails = function() {
                o.areThumbnailsShowed_bl ? (o.hsThumbanilsButton_do.setButtonState(0), o.thumbnailsManager_do.hide(!0), o.areThumbnailsShowed_bl = !1) : (o.hsThumbanilsButton_do.setButtonState(1), o.thumbnailsManager_do.show(!0), o.areThumbnailsShowed_bl = !0), o.resizeCurrentItem(!1, !0), o.positionButtons(!0), o.startAnim(801)
            }, o.thumbClickHandler = function(e) {
                o.gotoToItem(e.id)
            }, o.setupThumbnails = function(e) {
                setTimeout(function() {
                    o.thumbnailsManager_do && o.showThumbnails_bl && o.thumbnailsManager_do.setupThumbnails()
                }, e)
            }, o.setupButtons = function() {
                o.buttons_ar = [], o.buttonsMaxW_ar = [], FWDRLSimpleButton.setPrototype(), o.closeButton_do = new FWDRLSimpleButton(o.data.closeN_img, o.data.closeSPath_str), o.closeButton_do.addListener(FWDRLSimpleButton.MOUSE_UP, o.closeButtonOnMouseUpHandler), o.buttonsMaxW_ar.push(o.closeButton_do), o.main_do.addChild(o.closeButton_do), FWDRLComplexButton.setPrototype(), o.zoomButton_do = new FWDRLComplexButton(o.data.maximizeN_img, o.data.maximizeSPath_str, o.data.minimizeN_img, o.data.minimizeSPath_str, !0), o.zoomButton_do.addListener(FWDRLComplexButton.MOUSE_UP, o.zoomButtonOnMouseUpHandler), o.buttonsMaxW_ar.push(o.zoomButton_do), o.main_do.addChild(o.zoomButton_do), FWDRLComplexButton.setPrototype(), o.descButton_do = new FWDRLComplexButton(o.data.infoOpenN_img, o.data.infoOpenS_str, o.data.infoCloseN_img, o.data.infoCloseS_str, !0), o.descButton_do.addListener(FWDRLComplexButton.MOUSE_UP, o.descButtonOnMouseUpHandler), o.buttonsMaxW_ar.push(o.descButton_do), o.main_do.addChild(o.descButton_do), FWDRLComplexButton.setPrototype(), o.slideShowButton_do = new FWDRLComplexButton(o.data.playN_img, o.data.playS_str, o.data.pauseN_img, o.data.pauseS_str, !0), o.slideShowButton_do.addListener(FWDRLComplexButton.MOUSE_UP, o.slideshowButtonOnMouseUpHandler), o.buttonsMaxW_ar.push(o.slideShowButton_do), o.main_do.addChild(o.slideShowButton_do), FWDRLSlideShowPreloader.setPrototype(), o.slp_do = new FWDRLSlideShowPreloader(o.data.slideSwowImage_img, 30, 29, 60, o.slideShowDelay), o.buttonsMaxW_ar.push(o.slp_do), o.main_do.addChild(o.slp_do), FWDRLSimpleButton.setPrototype(), o.fbButton_do = new FWDRLSimpleButton(o.data.facebookImage_img, o.data.facebookImageSPath_str), o.fbButton_do.addListener(FWDRLSimpleButton.MOUSE_UP, o.facebookButtonOnMouseUpHandler), o.buttonsMaxW_ar.push(o.fbButton_do), o.main_do.addChild(o.fbButton_do), FWDRLSimpleButton.setPrototype(), o.nextButton_do = new FWDRLSimpleButton(o.data.nextN_img, o.data.nextSPath_str), o.nextButton_do.addListener(FWDRLSimpleButton.MOUSE_UP, o.nextButtonOnMouseUpHandler), o.buttonsMaxW_ar.push(o.nextButton_do), o.main_do.addChild(o.nextButton_do), FWDRLSimpleButton.setPrototype(), o.prevButton_do = new FWDRLSimpleButton(o.data.prevN_img, o.data.prevSPath_str), o.prevButton_do.addListener(FWDRLSimpleButton.MOUSE_UP, o.prevButtonOnMouseUpHandler), o.buttonsMaxW_ar.push(o.prevButton_do), o.main_do.addChild(o.prevButton_do), FWDRLComplexButton.setPrototype(), o.hsThumbanilsButton_do = new FWDRLComplexButton(o.data.hideThumbnailsN_img, o.data.hideThumbnailsSPath_str, o.data.showThumbnailsN_img, o.data.showThumbnailsSPath_str, !0), o.hsThumbanilsButton_do.addListener(FWDRLComplexButton.MOUSE_UP, o.hsButtonOnMouseUpHandler), o.buttonsMaxW_ar.push(o.hsThumbanilsButton_do), o.main_do.addChild(o.hsThumbanilsButton_do);
                for (var e = 0; e < o.buttonsMaxW_ar.length; e++) o.maxButtonW < o.buttonsMaxW_ar[e].h && (o.maxButtonW = o.buttonsMaxW_ar[e].w)
            }, o.closeButtonOnMouseUpHandler = function() {
                o.hide()
            }, o.zoomButtonOnMouseUpHandler = function() {
                o.maximizeOrMinimize()
            }, o.facebookButtonOnMouseUpHandler = function() {
                if (FWDRLUtils.isLocal) return o.main_do.addChild(o.info_do), void o.info_do.showText("Sharing locally is not allowed or possible! Please test online.");
                var e = location.href,
                    t = o.playlist_ar[o.id].thumbnailPath_str,
                    i = o.playlist_ar[o.id].descriptionText;
                if (t && -1 == t.indexOf("//")) {
                    var n = location.pathname;
                    n = location.protocol + "//" + location.host + n.substring(0, n.lastIndexOf("/") + 1), t = n + t
                }
                o.facebookShare.share(e, t, i)
            }, o.nextButtonOnMouseUpHandler = function() {
                o.gotoNextItem()
            }, o.prevButtonOnMouseUpHandler = function() {
                o.gotoPrevItem()
            }, o.descButtonOnMouseUpHandler = function() {
                o.isAnim_bl || (o.showDescription_bl ? (o.showDescription_bl = !1, o.descButton_do.setButtonState(1), o.desc_do.hide(!0)) : (o.showDescription_bl = !0, o.descButton_do.setButtonState(0), o.desc_do.show(!0)))
            }, o.slideshowButtonOnMouseUpHandler = function() {
                o.tm.isStopped_bl ? o.tm.start() : o.tm.stop()
            }, o.hsButtonOnMouseUpHandler = function() {
                (!o.isMobile_bl && o.stageWidth < o.thumbnailsManager_do.totalW + 2 * (o.hsThumbanilsButton_do.w + o.buttonsOffsetIn) || o.buttonsAlignment_str == t.BUTTONS_IN) && o.disableClick(), o.hideOrShowThumbnails()
            }, o.showCloseButton = function() {
                o.showCloseButton_bl && -1 == FWDRLUtils.indexOfArray(o.buttons_ar, o.closeButton_do) && o.buttons_ar.splice(0, 0, o.closeButton_do)
            }, o.hideCloseButton = function() {
                -1 != FWDRLUtils.indexOfArray(o.buttons_ar, o.closeButton_do) && (FWDRLTweenMax.killTweensOf(o.zoomButton_do), o.closeButton_do.setX(-5e3), o.buttons_ar.splice(FWDRLUtils.indexOfArray(o.buttons_ar, o.closeButton_do), 1))
            }, o.hideZoomButton = function() {
                -1 != FWDRLUtils.indexOfArray(o.buttons_ar, o.zoomButton_do) && (FWDRLTweenMax.killTweensOf(o.zoomButton_do), o.zoomButton_do.setX(-5e3), o.buttons_ar.splice(FWDRLUtils.indexOfArray(o.buttons_ar, o.zoomButton_do), 1))
            }, o.showZoomButton = function() {
                o.defaultShowZoomButton_bl && -1 == FWDRLUtils.indexOfArray(o.buttons_ar, o.zoomButton_do) && (FWDRLTweenMax.killTweensOf(o.zoomButton_do), -1 != FWDRLUtils.indexOfArray(o.buttons_ar, o.closeButton_do) ? (o.zoomButton_do.setX(o.closeButton_do.x), o.zoomButton_do.setY(o.closeButton_do.y + o.closeButton_do.h + o.spaceBetweenButtons), o.buttons_ar.splice(FWDRLUtils.indexOfArray(o.buttons_ar, o.closeButton_do) + 1, 0, o.zoomButton_do)) : (o.isFirstItemShowed_bl && (o.zoomButton_do.setX(o.mainItemHolder_do.x + o.mainItemHolder_do.w + o.buttonsOffsetIn), o.zoomButton_do.setY(o.mainItemHolder_do.y)), o.buttons_ar.splice(0, 0, o.zoomButton_do)))
            }, o.showDescriptionButton = function() {
                o.defaultHideDescriptionButtons_bl && (o.showDescriptionButton_bl = !0, -1 == FWDRLUtils.indexOfArray(o.buttons_ar, o.descButton_do) && (FWDRLTweenMax.killTweensOf(o.descButton_do), -1 != FWDRLUtils.indexOfArray(o.buttons_ar, o.zoomButton_do) ? (o.descButton_do.setX(o.zoomButton_do.x), o.descButton_do.setY(o.zoomButton_do.y + o.zoomButton_do.h + o.spaceBetweenButtons), o.buttons_ar.splice(FWDRLUtils.indexOfArray(o.buttons_ar, o.zoomButton_do) + 1, 0, o.descButton_do)) : -1 != FWDRLUtils.indexOfArray(o.buttons_ar, o.closeButton_do) ? (o.descButton_do.setX(o.closeButton_do.x), o.descButton_do.setY(o.closeButton_do.y + o.closeButton_do.h + o.spaceBetweenButtons), o.buttons_ar.splice(FWDRLUtils.indexOfArray(o.buttons_ar, o.closeButton_do) + 1, 0, o.descButton_do)) : (o.isFirstItemShowed_bl && (o.descButton_do.setX(o.mainItemHolder_do.x + o.mainItemHolder_do.w + o.buttonsOffsetIn), o.descButton_do.setY(o.mainItemHolder_do.y)), o.buttons_ar.splice(0, 0, o.descButton_do))))
            }, o.hideDescriptionButton = function() {
                -1 != FWDRLUtils.indexOfArray(o.buttons_ar, o.descButton_do) && (o.showDescriptionButton_bl = !1, FWDRLTweenMax.killTweensOf(o.descButton_do), o.descButton_do.setX(-5e3), o.buttons_ar.splice(FWDRLUtils.indexOfArray(o.buttons_ar, o.descButton_do), 1))
            }, o.hideSlideshowButton = function() {
                -1 != FWDRLUtils.indexOfArray(o.buttons_ar, o.slideShowButton_do) && (FWDRLTweenMax.killTweensOf(o.slideShowButton_do), o.slideShowButton_do.setX(-5e3), o.buttons_ar.splice(FWDRLUtils.indexOfArray(o.buttons_ar, o.slideShowButton_do), 1))
            }, o.showSlideshowButton = function() {
                o.showSlideShowButton_bl && -1 == FWDRLUtils.indexOfArray(o.buttons_ar, o.slideShowButton_do) && (FWDRLTweenMax.killTweensOf(o.slideShowButton_do), -1 != FWDRLUtils.indexOfArray(o.buttons_ar, o.descButton_do) ? (o.slideShowButton_do.setX(o.descButton_do.x), o.slideShowButton_do.setY(o.descButton_do.y + o.descButton_do.h + o.spaceBetweenButtons), o.buttons_ar.splice(FWDRLUtils.indexOfArray(o.buttons_ar, o.descButton_do) + 1, 0, o.slideShowButton_do)) : -1 != FWDRLUtils.indexOfArray(o.buttons_ar, o.zoomButton_do) ? (o.slideShowButton_do.setX(o.zoomButton_do.x), o.slideShowButton_do.setY(o.zoomButton_do.y + o.zoomButton_do.h + o.spaceBetweenButtons), o.buttons_ar.splice(FWDRLUtils.indexOfArray(o.buttons_ar, o.zoomButton_do) + 1, 0, o.slideShowButton_do)) : -1 != FWDRLUtils.indexOfArray(o.buttons_ar, o.closeButton_do) ? (o.slideShowButton_do.setX(o.closeButton_do.x), o.slideShowButton_do.setY(o.closeButton_do.y + o.closeButton_do.h + o.spaceBetweenButtons), o.buttons_ar.splice(FWDRLUtils.indexOfArray(o.buttons_ar, o.closeButton_do) + 1, 0, o.slideShowButton_do)) : (o.isFirstItemShowed_bl && (o.slideShowButton_do.setX(o.mainItemHolder_do.x + o.mainItemHolder_do.w + o.buttonsOffsetIn), o.slideShowButton_do.setY(o.mainItemHolder_do.y)), o.buttons_ar.splice(0, 0, o.slideShowButton_do)))
            }, o.hideSlideShowAnimation = function() {
                -1 != FWDRLUtils.indexOfArray(o.buttons_ar, o.slp_do) && (FWDRLTweenMax.killTweensOf(o.slp_do), o.slp_do.setX(-5e3), o.buttons_ar.splice(FWDRLUtils.indexOfArray(o.buttons_ar, o.slp_do), 1))
            }, o.showSlideShowAnimation = function() {
                o.defaultShowSlideShowAnimation_bl && -1 == FWDRLUtils.indexOfArray(o.buttons_ar, o.slp_do) && (FWDRLTweenMax.killTweensOf(o.slp_do), -1 != FWDRLUtils.indexOfArray(o.buttons_ar, o.slideShowButton_do) ? (o.slp_do.setX(o.slideShowButton_do.x), o.slp_do.setY(o.slideShowButton_do.y + o.slideShowButton_do.h + o.spaceBetweenButtons), o.buttons_ar.splice(FWDRLUtils.indexOfArray(o.buttons_ar, o.slideShowButton_do) + 1, 0, o.slp_do)) : -1 != FWDRLUtils.indexOfArray(o.buttons_ar, o.descButton_do) ? (o.slp_do.setX(o.descButton_do.x), o.slp_do.setY(o.descButton_do.y + o.descButton_do.h + o.spaceBetweenButtons), o.buttons_ar.splice(FWDRLUtils.indexOfArray(o.buttons_ar, o.descButton_do) + 1, 0, o.slp_do)) : -1 != FWDRLUtils.indexOfArray(o.buttons_ar, o.zoomButton_do) ? (o.slp_do.setX(o.zoomButton_do.x), o.slp_do.setY(o.zoomButton_do.y + o.zoomButton_do.h + o.spaceBetweenButtons), o.buttons_ar.splice(FWDRLUtils.indexOfArray(o.buttons_ar, o.zoomButton_do) + 1, 0, o.slp_do)) : -1 != FWDRLUtils.indexOfArray(o.buttons_ar, o.closeButton_do) ? (o.slp_do.setX(o.closeButton_do.x), o.slp_do.setY(o.closeButton_do.y + o.closeButton_do.h + o.spaceBetweenButtons), o.buttons_ar.splice(FWDRLUtils.indexOfArray(o.buttons_ar, o.closeButton_do) + 1, 0, o.slp_do)) : (o.isFirstItemShowed_bl && (o.slp_do.setX(o.mainItemHolder_do.x + o.mainItemHolder_do.w + o.buttonsOffsetIn), o.slp_do.setY(o.mainItemHolder_do.y)), o.buttons_ar.splice(0, 0, o.slp_do)))
            }, o.hideFacebookButton = function() {
                -1 != FWDRLUtils.indexOfArray(o.buttons_ar, o.fbButton_do) && (FWDRLTweenMax.killTweensOf(o.fbButton_do), o.fbButton_do.setX(-5e3), o.buttons_ar.splice(FWDRLUtils.indexOfArray(o.buttons_ar, o.fbButton_do), 1))
            }, o.showFacebookButton = function() {
                o.showFacebookButton_bl && -1 == FWDRLUtils.indexOfArray(o.buttons_ar, o.fbButton_do) && (-1 != FWDRLUtils.indexOfArray(o.buttons_ar, o.slp_do) ? o.buttons_ar.splice(FWDRLUtils.indexOfArray(o.buttons_ar, o.slp_do) + 1, 0, o.fbButton_do) : -1 != FWDRLUtils.indexOfArray(o.buttons_ar, o.slideShowButton_do) ? o.buttons_ar.splice(FWDRLUtils.indexOfArray(o.buttons_ar, o.slideShowButton_do) + 1, 0, o.fbButton_do) : -1 != FWDRLUtils.indexOfArray(o.buttons_ar, o.descButton_do) ? o.buttons_ar.splice(FWDRLUtils.indexOfArray(o.buttons_ar, o.descButton_do) + 1, 0, o.fbButton_do) : -1 != FWDRLUtils.indexOfArray(o.buttons_ar, o.zoomButton_do) ? o.buttons_ar.splice(FWDRLUtils.indexOfArray(o.buttons_ar, o.zoomButton_do) + 1, 0, o.fbButton_do) : -1 != FWDRLUtils.indexOfArray(o.buttons_ar, o.closeButton_do) ? o.buttons_ar.splice(FWDRLUtils.indexOfArray(o.buttons_ar, o.closeButton_do) + 1, 0, o.fbButton_do) : o.buttons_ar.splice(0, 0, o.fbButton_do))
            }, o.hideNextAndPrevButtons = function() {
                -1 != FWDRLUtils.indexOfArray(o.buttons_ar, o.nextButton_do) && (FWDRLTweenMax.killTweensOf(o.nextButton_do), FWDRLTweenMax.killTweensOf(o.prevButton_do), o.prevButton_do.setX(-5e3), o.nextButton_do.setX(-5e3), o.buttons_ar.splice(FWDRLUtils.indexOfArray(o.buttons_ar, o.nextButton_do), 1))
            }, o.showNextAndPrevButtons = function() {
                o.defaultShowNextAndPrevButtons_bl && o.showNextAndPrevButtons_bl && -1 == FWDRLUtils.indexOfArray(o.buttons_ar, o.nextButton_do) && (-1 != FWDRLUtils.indexOfArray(o.buttons_ar, o.fbButton_do) ? o.buttons_ar.splice(FWDRLUtils.indexOfArray(o.buttons_ar, o.fbButton_do) + 1, 0, o.nextButton_do) : -1 != FWDRLUtils.indexOfArray(o.buttons_ar, o.slp_do) ? o.buttons_ar.splice(FWDRLUtils.indexOfArray(o.buttons_ar, o.slp_do) + 1, 0, o.nextButton_do) : -1 != FWDRLUtils.indexOfArray(o.buttons_ar, o.slideShowButton_do) ? o.buttons_ar.splice(FWDRLUtils.indexOfArray(o.buttons_ar, o.slideShowButton_do) + 1, 0, o.nextButton_do) : -1 != FWDRLUtils.indexOfArray(o.buttons_ar, o.descButton_do) ? o.buttons_ar.splice(FWDRLUtils.indexOfArray(o.buttons_ar, o.descButton_do) + 1, 0, o.nextButton_do) : -1 != FWDRLUtils.indexOfArray(o.buttons_ar, o.zoomButton_do) ? o.buttons_ar.splice(FWDRLUtils.indexOfArray(o.buttons_ar, o.zoomButton_do) + 1, 0, o.nextButton_do) : -1 != FWDRLUtils.indexOfArray(o.buttons_ar, o.closeButton_do) ? o.buttons_ar.splice(FWDRLUtils.indexOfArray(o.buttons_ar, o.closeButton_do) + 1, 0, o.nextButton_do) : o.buttons_ar.splice(0, 0, o.nextButton_do))
            }, o.hideHsThumbnailButton = function() {
                -1 != FWDRLUtils.indexOfArray(o.buttons_ar, o.hsThumbanilsButton_do) && (FWDRLTweenMax.killTweensOf(o.hsThumbanilsButton_do), o.hsThumbanilsButton_do.setX(-5e3), o.buttons_ar.splice(FWDRLUtils.indexOfArray(o.buttons_ar, o.hsThumbanilsButton_do), 1))
            }, o.showHsThumbnailButton = function() {
                o.showThumbnailsHideOrShowButton_bl && -1 == FWDRLUtils.indexOfArray(o.buttons_ar, o.hsThumbanilsButton_do) && o.buttons_ar.splice(o.buttons_ar.length, 0, o.hsThumbanilsButton_do)
            }, o.positionButtons = function(e) {
                if (o.isFirstItemShowed_bl && o.isShowed_bl && o.isReady_bl) {
                    var i = 0,
                        n = 0;
                    o.areThumbnailsShowed_bl && (i = Math.round((o.thumbnailH + o.spaceBetweenThumbnailsAndItem) / 2 - o.spaceBetweenThumbnailsAndItem / 2)), o.showNextAndPrevButtons_bl && (o.prevButton_do.finalX = o.buttonsAlignment_str == t.BUTTONS_IN ? o.finalX - o.prevButton_do.w - o.buttonsOffsetIn : o.buttonsOffsetIn, o.prevButton_do.finalY = parseInt((o.stageHeight - o.prevButton_do.h) / 2) - i, void 0 == o.prevButton_do.finalX && (o.prevButton_do.finalX = -5e3), void 0 == o.prevButton_do.finalY && (o.prevButton_do.finalY = -5e3));
                    for (var s, r, a = o.buttons_ar.length, l = 0; a > l; l++) s = o.buttons_ar[l], n += s.h + o.spaceBetweenButtons;
                    n -= o.spaceBetweenButtons;
                    for (var d = 0; a > d; d++) {
                        if (s = o.buttons_ar[d], 0 != d && (r = o.buttons_ar[d - 1]), s.finalX = o.buttonsAlignment_str == t.BUTTONS_IN ? o.finalX + o.finalW + o.buttonsOffsetIn : o.stageWidth - s.w - o.buttonsOffsetIn, n > o.finalH && o.buttonsAlignment_str == t.BUTTONS_IN ? s.finalY = 0 == d ? o.buttonsAlignment_str == t.BUTTONS_IN ? parseInt(o.areThumbnailsShowed_bl ? (o.stageHeight - n - o.thumbnailH) / 2 : (o.stageHeight - n) / 2) : o.buttonsOffsetIn : r.finalY + r.h + o.spaceBetweenButtons : (s.finalY = o.buttonsAlignment_str == t.BUTTONS_IN ? o.finalY : o.buttonsOffsetIn, r ? (s.finalY = r.finalY + r.h + o.spaceBetweenButtons, s == o.nextButton_do ? s.finalY < o.prevButton_do.finalY && (s.finalY = o.prevButton_do.finalY) : s == o.hsThumbanilsButton_do && (s.finalY = o.finalY + o.finalH - s.h, s.finalY < r.finalY + r.h + o.spaceBetweenButtons && o.stageWidth < o.thumbnailsManager_do.totalW + 2 * (s.w + o.buttonsOffsetIn) && (s.finalY = r.finalY + r.h + o.spaceBetweenButtons))) : s == o.nextButton_do ? s.finalY < o.prevButton_do.finalY && (s.finalY = o.prevButton_do.finalY) : s == o.hsThumbanilsButton_do && (s.finalY = o.finalY + o.finalH - s.h)), s == o.zoomButton_do && o.isMaximized_bl && (s.finalX = o.stageWidth - s.w - 1, s.finalY = 1), s == o.hsThumbanilsButton_do)
                            if (o.buttonsAlignment_str == t.BUTTONS_IN) {
                                if (s.finalY + s.h > o.stageHeight - o.thumbnailH && o.areThumbnailsShowed_bl && (s.finalX = o.finalX - s.w - o.buttonsOffsetIn, s.finalY = o.finalY + o.finalH - s.h, o.showNextAndPrevButtons_bl && s.finalY < o.prevButton_do.finalY + o.prevButton_do.h + o.spaceBetweenButtons && (s.finalY = o.prevButton_do.finalY + o.prevButton_do.h + o.spaceBetweenButtons), d == a - 1))
                                    for (var u = 0; a - 1 > u; u++) o.buttons_ar[u].finalY += parseInt(o.hsThumbanilsButton_do.h / 2)
                            } else s.finalY = o.areThumbnailsShowed_bl ? o.thumbnailsManager_do && o.stageWidth > o.thumbnailsManager_do.totalW + 2 * (s.w + o.buttonsOffsetIn) ? o.stageHeight - s.h - o.buttonsOffsetIn : o.stageHeight - s.h - o.thumbnailH - o.buttonsOffsetIn : o.stageHeight - s.h - o.buttonsOffsetIn, r && r.finalY + r.h + s.h + o.spaceBetweenButtons + o.buttonsOffsetIn > o.stageHeight - o.thumbnailH && o.areThumbnailsShowed_bl && o.stageWidth < o.thumbnailsManager_do.totalW + 2 * (s.w + o.buttonsOffsetIn) && (s.finalX = o.buttonsOffsetIn);
                        o.hider.isHidden_bl && s == o.slp_do && (s.finalY = o.buttonsAlignment_str == t.BUTTONS_IN ? o.finalY : o.buttonsOffsetIn)
                    }
                    o.showNextAndPrevButtons_bl && (e ? (FWDRLTweenMax.killTweensOf(o.prevButton_do), FWDRLTweenMax.to(o.prevButton_do, .8, {
                        x: o.prevButton_do.finalX,
                        y: o.prevButton_do.finalY,
                        ease: Expo.easeInOut
                    })) : (FWDRLTweenMax.killTweensOf(o.prevButton_do), o.prevButton_do.setX(o.prevButton_do.finalX), o.prevButton_do.setY(o.prevButton_do.finalY)));
                    for (var d = 0; a > d; d++) s = o.buttons_ar[d], (s.x != s.finalX || s.y != s.finalY) && (FWDRLTweenMax.killTweensOf(s), e ? FWDRLTweenMax.to(s, .8, {
                        x: s.finalX,
                        y: s.finalY,
                        ease: Expo.easeInOut
                    }) : (s.setX(s.finalX), s.setY(s.finalY)))
                }
            }, o.hideButtons = function(e) {
                if (o.isReady_bl) {
                    var t, i = o.buttons_ar.length;
                    o.showNextAndPrevButtons_bl && (o.prevButton_do.finalX = -o.prevButton_do.w, void 0 == o.prevButton_do.finalX && (o.prevButton_do.finalX = -1), void 0 == o.prevButton_do.finalY && (o.prevButton_do.finalY = -1));
                    for (var n = 0; i > n; n++) t = o.buttons_ar[n], isNaN(t.finalX) || (t.finalX = t.finalX > o.stageWidth / 2 ? o.stageWidth : -t.w), void 0 === t.finalX && (t.finalX = -5e3), void 0 === t.finalY && (t.finalY = -5e3), e ? (0 == n && o.showNextAndPrevButtons_bl && (FWDRLTweenMax.killTweensOf(o.prevButton_do), FWDRLTweenMax.to(o.prevButton_do, .8, {
                        alpha: 1,
                        x: o.prevButton_do.finalX,
                        y: o.prevButton_do.finalY,
                        ease: Expo.easeInOut
                    })), FWDRLTweenMax.killTweensOf(t), FWDRLTweenMax.to(t, .8, {
                        alpha: 1,
                        x: t.finalX,
                        y: t.finalY,
                        ease: Expo.easeInOut
                    })) : (0 == n && o.showNextAndPrevButtons_bl && (FWDRLTweenMax.killTweensOf(o.prevButton_do), o.prevButton_do.setX(o.prevButton_do.finalX), o.prevButton_do.setY(o.prevButton_do.finalY)), FWDRLTweenMax.killTweensOf(t), t.setAlpha(1), t.setX(t.finalX), t.setY(t.finalY))
                }
            }, o.hideStuffForGood = function() {
                o.fbButton_do.setX(-5e3), o.prevButton_do.setX(-5e3), o.nextButton_do.setX(-5e3), o.closeButton_do.setX(-5e3), o.zoomButton_do.setX(-5e3), o.descButton_do.setX(-5e3), o.slideShowButton_do.setX(-5e3), o.slp_do.setX(-5e3), o.hsThumbanilsButton_do.setX(-5e3), o.videoHolder_do && (o.video_do.stop(), o.videoHolder_do.setX(-5e3), o.videoHolder_do.w = 1, o.videoHolder_do.h = 1), o.audioHolder_do && (o.audio_do.stop(), o.audioHolder_do.setX(-5e3), o.audioHolder_do.w = 1, o.audioHolder_do.h = 1)
            }, o.showButtonsWithFade = function(e) {
                o.isReady_bl && (e ? (FWDRLTweenMax.to(o.nextButton_do.buttonsHolder_do, .8, {
                    alpha: 1,
                    ease: Quint.easeOut
                }), FWDRLTweenMax.to(o.prevButton_do.buttonsHolder_do, .8, {
                    alpha: 1,
                    ease: Quint.easeOut
                }), FWDRLTweenMax.to(o.closeButton_do.buttonsHolder_do, .8, {
                    alpha: 1,
                    ease: Quint.easeOut
                }), FWDRLTweenMax.to(o.zoomButton_do.buttonsHolder_do, .8, {
                    alpha: 1,
                    ease: Quint.easeOut
                }), FWDRLTweenMax.to(o.hsThumbanilsButton_do.buttonsHolder_do, .8, {
                    alpha: 1,
                    ease: Quint.easeOut
                }), FWDRLTweenMax.to(o.descButton_do.buttonsHolder_do, .8, {
                    alpha: 1,
                    ease: Quint.easeOut
                }), FWDRLTweenMax.to(o.slideShowButton_do.buttonsHolder_do, .8, {
                    alpha: 1,
                    ease: Quint.easeOut
                }), FWDRLTweenMax.to(o.fbButton_do.buttonsHolder_do, .8, {
                    alpha: 1,
                    ease: Quint.easeOut
                })) : (FWDRLTweenMax.killTweensOf(o.nextButton_do.buttonsHolder_do), FWDRLTweenMax.killTweensOf(o.prevButton_do.buttonsHolder_do), o.nextButton_do.buttonsHolder_do.setAlpha(1), o.prevButton_do.buttonsHolder_do.setAlpha(1), FWDRLTweenMax.killTweensOf(o.nextButton_do.closeButton_do), o.closeButton_do.buttonsHolder_do.setAlpha(1), FWDRLTweenMax.killTweensOf(o.zoomButton_do.closeButton_do), o.zoomButton_do.buttonsHolder_do.setAlpha(1), FWDRLTweenMax.killTweensOf(o.hsThumbanilsButton_do.hsThumbanilsButton_do), o.hsThumbanilsButton_do.buttonsHolder_do.setAlpha(1), FWDRLTweenMax.killTweensOf(o.descButton_do.descButton_do), o.descButton_do.buttonsHolder_do.setAlpha(1), FWDRLTweenMax.killTweensOf(o.fbButton_do.descButton_do), o.fbButton_do.buttonsHolder_do.setAlpha(1)))
            }, o.hideButtonsWithFade = function(e) {
                e ? (FWDRLTweenMax.to(o.nextButton_do.buttonsHolder_do, .8, {
                    alpha: 0,
                    ease: Quint.easeOut
                }), FWDRLTweenMax.to(o.prevButton_do.buttonsHolder_do, .8, {
                    alpha: 0,
                    ease: Quint.easeOut
                }), FWDRLTweenMax.to(o.closeButton_do.buttonsHolder_do, .8, {
                    alpha: 0,
                    ease: Quint.easeOut
                }), FWDRLTweenMax.to(o.zoomButton_do.buttonsHolder_do, .8, {
                    alpha: 0,
                    ease: Quint.easeOut
                }), FWDRLTweenMax.to(o.hsThumbanilsButton_do.buttonsHolder_do, .8, {
                    alpha: 0,
                    ease: Quint.easeOut
                }), FWDRLTweenMax.to(o.descButton_do.buttonsHolder_do, .8, {
                    alpha: 0,
                    ease: Quint.easeOut
                }), FWDRLTweenMax.to(o.slideShowButton_do.buttonsHolder_do, .8, {
                    alpha: 0,
                    ease: Quint.easeOut
                }), FWDRLTweenMax.to(o.fbButton_do.buttonsHolder_do, .8, {
                    alpha: 0,
                    ease: Quint.easeOut
                })) : (FWDRLTweenMax.killTweensOf(o.nextButton_do.buttonsHolder_do), FWDRLTweenMax.killTweensOf(o.prevButton_do.buttonsHolder_do), o.nextButton_do.buttonsHolder_do.setAlpha(0), o.prevButton_do.buttonsHolder_do.setAlpha(0), FWDRLTweenMax.killTweensOf(o.nextButton_do.closeButton_do), o.closeButton_do.buttonsHolder_do.setAlpha(0), FWDRLTweenMax.killTweensOf(o.zoomButton_do.closeButton_do), o.zoomButton_do.buttonsHolder_do.setAlpha(0), FWDRLTweenMax.killTweensOf(o.hsThumbanilsButton_do.hsThumbanilsButton_do), o.hsThumbanilsButton_do.buttonsHolder_do.setAlpha(0), FWDRLTweenMax.killTweensOf(o.hsThumbanilsButton_do.descButton_do), o.descButton_do.buttonsHolder_do.setAlpha(0), FWDRLTweenMax.killTweensOf(o.slideShowButton_do.descButton_do), o.slideShowButton_do.buttonsHolder_do.setAlpha(0), FWDRLTweenMax.killTweensOf(o.fbButton_do.descButton_do), o.fbButton_do.buttonsHolder_do.setAlpha(0))
            }, this.parsePlaylistObject = function(e, i) {
                if (0 == i && e.thumbnailPath_str && (o.areThumbnailsShowed_bl = !1, o.setupThumbnailManager(), o.showThumbnailsByDefault_bl ? (o.thumbnailsManager_do.show(!1), o.areThumbnailsShowed_bl = !0) : (o.thumbnailsManager_do.hide(!1), o.areThumbnailsShowed_bl = !1), o.defaultShowThumbnails_bl ? o.showThumbnails_bl = !0 : (o.showThumbnails_bl = !1, o.areThumbnailsShowed_bl = !1), o.showThumbnailsHideOrShowButton_bl = o.defaultShowThumbnailsHideOrShowButton_bl && o.defaultShowThumbnails_bl ? !0 : !1), 0 != i || e.thumbnailPath_str || (o.areThumbnailsShowed_bl = !1, o.showThumbnails_bl = !1, o.showThumbnailsHideOrShowButton_bl = !1), /\.jpg|\.jpeg|\.png/i.test(e.type_str) ? (e.iconType_str = FWDRLThumb.IMAGE, e.type_str = t.IMAGE_TYPE, e.width = void 0, e.height = void 0) : /\.mp4/i.test(e.type_str) ? (e.iconType_str = FWDRLThumb.VIDEO, e.type_str = t.VIDEO_TYPE) : /\.mp3/i.test(e.type_str) ? (e.type_str = t.AUDIO_TYPE, e.iconType_str = FWDRLThumb.AUDIO) : /\.swf/i.test(e.type_str) ? (e.type_str = t.FLASH_TYPE, e.iconType_str = FWDRLThumb.FLASH) : /youtube\.|vimeo\./i.test(e.type_str) ? (e.iconType_str = -1 != e.type_str.indexOf("youtube.") ? FWDRLThumb.YOUTUBE : FWDRLThumb.VIMEO, e.type_str = t.IFRAME_TYPE) : (e.iconType_str = -1 != e.type_str.indexOf("google.") ? FWDRLThumb.MAPS : -1 != e.type_str.indexOf("RL_AJAX") ? FWDRLThumb.AJAX : -1 != e.type_str.indexOf("RL_HTML") ? FWDRLThumb.HTML : FWDRLThumb.IFRAME, e.type_str = t.IFRAME_TYPE), e.type_str == t.IMAGE_TYPE || e.type_str == t.VIDEO_TYPE) {
                    var n = encodeURI(e.url.substr(0, e.url.lastIndexOf("/") + 1)),
                        s = e.url.substr(e.url.lastIndexOf("/") + 1);
                    e.url = n + s
                }
                o.playlist_ar[i] = e
            }, t.show = function(i, n, s) {
                if (!o.isShowed_bl) {
                    if (t.dispatchEvent(t.SHOW_START, {
                            obj: i
                        }), !i) {
                        return void alert("Revolution lightbox error! Please specify a playlist in the FWDRL.show() method.")
                    }
                    if (o.setDefaultSettings(), s && e[s]) {
                        var r = e[s];
                        o.setObjectPropsSettings(r)
                    } else o.setDefaultSettings();
                    if (o.playlistDomOrObj_str = i, o.playlist_ar = [], -1 != i.indexOf("rlobj_")) {
                        var a = e[i];
                        if (!a) return void alert('Revolution lightbox error! The playlist JSON object with the label "' + i + "\" doesn't exist!");
                        o.totalItems = a.playlistItems.length;
                        for (var l = document.createElement("div"), d = 0; d < o.totalItems; d++) {
                            var u = {},
                                h = a.playlistItems[d];
                            u.url = h.url, u.thumbnailPath_str = h.thumbnailPath, u.type_str = h.url, u.description = h.description, -1 == u.url.indexOf("RL_HTML") ? (u.description && (l.innerHTML = u.description), u.description && (l.innerHTML = u.description, u.descriptionText = l.innerText)) : (l.innerHTML = h.html, u.html = l.innerHTML), u.width = h.width, u.height = h.height, o.parsePlaylistObject(u, d, !0), u.type_str == t.AUDIO_TYPE && (u.height = o.data.audioControllerHeight + 2 * o.itemBorderSize)
                        }
                        l = null
                    } else {
                        var c = document.getElementById(i);
                        if (!c) return void alert('Revolution lightbox error! The HTML element with the id "' + i + "\" doesn't exist!");
                        var _ = FWDRLUtils.getChildren(c);
                        if (o.totalItems = _.length, 0 == o.totalItems) return void alert('Revolution lightbox error! The playlist with the id "' + i + '" must contain at least one entry.');
                        for (var d = 0; d < o.totalItems; d++) {
                            var u = {},
                                h = _[d];
                            if (!FWDRLUtils.hasAttribute(h, "data-url")) return void alert('Revolution lightbox error! Attribute "data-url" is not found in the playlist at position nr: "' + d + '".');
                            if (u.url = String(FWDRLUtils.getAttributeValue(h, "data-url")), u.posterPath = FWDRLUtils.getAttributeValue(h, "data-poster-path"), u.type_str = FWDRLUtils.getAttributeValue(h, "data-url"), u.width = FWDRLUtils.getAttributeValue(h, "data-width"), u.height = FWDRLUtils.getAttributeValue(h, "data-height"), FWDRLUtils.hasAttribute(h, "data-thumbnail-path") && (u.thumbnailPath_str = FWDRLUtils.getAttributeValue(h, "data-thumbnail-path")), -1 == u.url.indexOf("RL_HTML")) try {
                                0 != FWDRLUtils.getChildren(h).length && (u.description = h.innerHTML, u.descriptionText = h.innerText)
                            } catch (b) {} else try {
                                u.html = h.innerHTML
                            } catch (b) {}
                            o.parsePlaylistObject(u, d, !1), u.type_str == t.AUDIO_TYPE && (u.height = o.data.audioControllerHeight + 2 * o.itemBorderSize)
                        }
                    }
                    o.showNextAndPrevButtons_bl = 1 == o.totalItems ? !1 : o.defaultShowNextAndPrevButtons_bl ? !0 : !1, n ? (o.id = parseInt(n), o.id < 0 ? o.id = 0 : o.id > o.totalItems - 1 && (o.id = o.totalItems - 1)) : o.id = 0, o.prevId = o.id, o.so = FWDRLUtils.getScrollOffsets(), o.useDeepLinking_bl && (location.hash = s ? "RL?rl_playlist=" + o.playlistDomOrObj_str + "&rl_id=" + o.id + "&rl_propsobj=" + s : "RL?rl_playlist=" + o.playlistDomOrObj_str + "&rl_id=" + o.id), o.isShowed_bl = !0, o.isAnim_bl = !0, o.showSlideShowAnimation_bl = !1, o.showDescription_bl = o.defaultShowDescriptionByDefault_bl, o.startResizeHandler(), o.addPreventMouseWheel(), clearTimeout(o.showOrHideCompleteId_to), o.showOrHideCompleteId_to = setTimeout(o.showComplete, 401), FWDRLTweenMax.to(o.bk_do, .8, {
                        alpha: o.backgroundOpacity,
                        ease: Quint.easeOut
                    }), o.preloader_do && (o.positionPreloader(), o.preloader_do.show(!0)), o.main_do.addChild(o.disableClick_do), o.isReady_bl && (o.hideButtons(), o.hideStuffForGood()), o.desc_do.hide(!1, !0, !0), o.thumbnailsManager_do && o.thumbnailsManager_do.destoryThumbnails()
                }
            }, o.showComplete = function() {
                o.isReady_bl && -1 != o.id && !o.curItem_do && (o.positionPreloader(), o.preloader_do.show(!0), o.showCloseButton_bl ? o.showCloseButton() : o.hideCloseButton(), o.playlist_ar[o.id].type_str == t.IMAGE_TYPE && o.defaultShowZoomButton_bl ? o.showZoomButton() : o.hideZoomButton(), o.playlist_ar[o.id].description && o.defaultHideDescriptionButtons_bl ? (o.hasItemDescription_bl = !0, o.showDescriptionButton()) : (o.hasItemDescription_bl = !1, o.hideDescriptionButton()), o.showSlideShowButton_bl ? o.showSlideshowButton() : o.hideSlideshowButton(), o.showFacebookButton_bl ? o.showFacebookButton() : o.hideFacebookButton(), o.showNextAndPrevButtons_bl ? o.showNextAndPrevButtons() : o.hideNextAndPrevButtons(), o.showThumbnailsHideOrShowButton_bl && o.showThumbnails_bl ? (o.showHsThumbnailButton(), o.hsThumbanilsButton_do.setButtonState(o.showThumbnailsByDefault_bl ? 1 : 0)) : o.hideHsThumbnailButton(), o.descButton_do.setButtonState(o.showDescription_bl ? 0 : 1), o.hideButtons(), o.createAndShowItem(), o.useAsModal_bl ? o.removeCloseEventsWhenBkIsPressed() : o.addCloseEventsWhenBkIsPressed(), o.isMobile_bl && o.addSwipeSupport(), o.startAnim(801))
            }, o.hide = function() {
                o.isAnim_bl || !o.isShowed_bl || o.isAnimMaximizeOrMinimize_bl || o.isMaximized_bl || o.swipeMoved_bl || o.isMobile_bl && o.closeButton_do && FWDRLTweenMax.isTweening(o.closeButton_do.buttonsHolder_do) || (FWDRLTweenMax.to(o.bk_do, .8, {
                    alpha: 0,
                    delay: .4,
                    ease: Quint.easeOut
                }), o.curItem_do && o.curItem_do.screen && (FWDRLTweenMax.to(o.curItem_do, .6, {
                    alpha: 0,
                    ease: Quint.easeOut
                }), FWDRLTweenMax.to(o.curItem_do, .8, {
                    x: 0,
                    y: 0,
                    w: 0,
                    h: 0,
                    delay: .1,
                    ease: Expo.easeInOut
                })), FWDRLTweenMax.to(o.mainItemHolder_do, .8, {
                    x: o.stageWidth / 2,
                    y: o.stageHeight / 2,
                    w: 0,
                    h: 0,
                    delay: .1,
                    ease: Expo.easeInOut
                }), FWDRLTweenMax.to(o.itemBorder_do, .8, {
                    w: 0,
                    h: 0,
                    alpha: 0,
                    delay: .1,
                    ease: Expo.easeInOut
                }), FWDRLTweenMax.to(o.itemBk_do, .8, {
                    x: 0,
                    y: 0,
                    w: 0,
                    h: 0,
                    delay: .1,
                    ease: Expo.easeInOut
                }), o.isShowed_bl = !1, o.isFirstItemShowed_bl = !1, -1 == o.id, o.curItem_do = null, o.prevItem_do = null, o.isAnimForVideoAndAudioPlayersDone_bl = !1, o.stopResizeHandler(), o.closeAjax(), o.tm.stop(), o.thumbnailsManager_do && o.thumbnailsManager_do.hide(!0), o.main_do.contains(o.info_do) && o.main_do.removeChild(o.info_do), o.closeImage(), o.useAsModal_bl || o.removeCloseEventsWhenBkIsPressed(), o.hider.stop(), o.preloader_do.hide(!0), o.hideButtons(!0), o.videoHolder_do && (o.video_do.stop(), o.video_do.setPosterSource(""), o.videoHolder_do.setX(-5e3), o.videoHolder_do.w = 1, o.videoHolder_do.h = 1), o.audioHolder_do && (o.audio_do.stop(), o.audioHolder_do.setX(-5e3), o.audioHolder_do.w = 1, o.audioHolder_do.h = 1), o.desc_do.descriptionAnimationType_str = "opacity", t.dispatchEvent(t.HIDE_START), o.hasItemDescription_bl && o.showDescription_bl && o.desc_do.hide(!0), clearTimeout(o.showOrHideCompleteId_to), o.showOrHideCompleteId_to = setTimeout(o.hideComplete, 1200), o.isMobile_bl && o.removeSwipeSupport(), o.startAnim(1202))
            }, o.hideComplete = function() {
                o.useDeepLinking_bl && (location.hash = "RL"), o.removePreventMouseWheel(), o.isFirstItemShowed_bl = !1, o.firstVideoOrAudioAdded_bl = !1, o.curItem_do = null, o.prevItem_do = null, o.removeItems(0), o.thumbnailsManager_do && (o.thumbnailsManager_do.destoryThumbnails(), o.thumbnailsManager_do.hideForGood()), o.video_do && RLVideoPlayer && RLVideoPlayer.setPosterSource(""), o.isMobile_bl && o.removeSwipeSupport(), o.main_do.setX(-5e3), t.dispatchEvent(t.HIDE_COMPLETE)
            }, o.startAnim = function(e) {
                o.stopAnim(), o.isAnim_bl = !0, o.animId_to = setTimeout(o.animationDone, e)
            }, o.stopAnim = function() {
                o.isAnim_bl = !1, o.tm && o.tm.pause(), clearTimeout(o.animId_to)
            }, o.animationDone = function() {
                o.isAnim_bl = !1, o.tm.resume(), o.removeItems(1), o.dlChangeHandler(), o.hasItemDescription_bl && o.showDescription_bl && o.desc_do.show(!0)
            }, o.addCloseEventsWhenBkIsPressed = function() {
                o.isMobile_bl ? o.hasPointerEvent_bl ? o.bk_do.screen.addEventListener("pointerup", o.onBkMouseUp) : (o.bk_do.screen.addEventListener("touchend", o.onBkMouseUp), o.bk_do.screen.addEventListener("touchmove", o.onBkTouchMove)) : o.bk_do.screen.addEventListener ? o.bk_do.screen.addEventListener("click", o.onBkMouseUp) : o.bk_do.screen.attachEvent && o.bk_do.screen.attachEvent("onclick", o.onBkMouseUp)
            }, o.removeCloseEventsWhenBkIsPressed = function() {
                o.isMobile_bl ? o.hasPointerEvent_bl ? o.bk_do.screen.removeEventListener("pointerup", o.onBkMouseUp) : (o.bk_do.screen.removeEventListener("touchend", o.onBkMouseUp), o.bk_do.screen.removeEventListener("touchmove", o.onBkTouchMove)) : o.bk_do.screen.removeEventListener ? o.bk_do.screen.removeEventListener("click", o.onBkMouseUp) : o.bk_do.screen.detachEvent && o.bk_do.screen.detachEvent("onclick", o.onBkMouseUp)
            }, o.onBkTouchMove = function() {
                clearTimeout(o.doNotAllowToHideId_to), o.doNotAllowToHideId_to = setTimeout(function() {
                    o.doNotAllowToHide_bl = !1
                }, 100), o.doNotAllowToHide_bl = !0
            }, o.onBkMouseUp = function() {
                o.doNotAllowToHide_bl || o.hide()
            }, o.createAndShowItem = function() {
                var e = o.playlist_ar[o.id];
                if (o.type_str = e.type_str, o.url = e.url, o.posterPath_str = e.posterPath, o.closeAjax(), o.tm.pause(), o.closeImage(), o.preloader_do.hide(!0), o.main_do.contains(o.info_do) && o.main_do.removeChild(o.info_do), o.thumbnailsManager_do && o.thumbnailsManager_do.disableOrEnableThumbnails(), o.prevItem_do && o.prevItem_do.type_str != t.IMAGE_TYPE && (o.removeItems(0), o.prevItem_do = null), o.playlist_ar[o.id].description ? (o.hasItemDescription_bl = !0, o.showDescriptionButton()) : (o.hasItemDescription_bl = !1, o.hideDescriptionButton(), o.desc_do.hide(!1, !1, !0)), o.videoHolder_do && (o.video_do.stop(), o.type_str != t.VIDEO_TYPE && (o.videoHolder_do.setX(-5e3), o.videoHolder_do.w = 1, o.videoHolder_do.h = 1)), o.audioHolder_do && (o.audio_do.stop(), o.type_str == t.AUDIO_TYPE && o.isFirstItemShowed_bl || (o.audioHolder_do.setX(-5e3), o.audioHolder_do.w = 1, o.audioHolder_do.h = 1)), o.isAnimForVideoAndAudioPlayersDone_bl = !1, o.type_str == t.IMAGE_TYPE) o.loadImage(), o.firstVideoOrAudioAdded_bl = !0;
                else if (o.type_str == t.IFRAME_TYPE || o.type_str == t.FLASH_TYPE || o.type_str == t.VIDEO_TYPE || o.type_str == t.AUDIO_TYPE) {
                    if (o.originalW = e.width || o.defaultItemW, o.originalH = e.height || o.defaultItemH, o.prevItem_do && (o.resizeCurrentItem(!0), FWDRLTweenMax.to(o.prevItem_do, .8, {
                            alpha: 0,
                            ease: Quint.easeOut
                        }), FWDRLTweenMax.to(o.prevItem_do, .8, {
                            x: parseInt((o.finalW - o.prevItem_do.w) / 2),
                            y: parseInt((o.finalH - o.prevItem_do.h) / 2),
                            ease: Expo.easeInOut
                        })), o.curItem_do = new FWDRLDisplayObject("div"), o.curItem_do.type_str = o.type_str, o.prevItem_do = o.curItem_do, o.isMobile_bl && (o.curItem_do.getStyle().overflow = "scroll", o.curItem_do.getStyle().webkitOverflowScrolling = "touch"), o.itemHolder_do.addChild(o.curItem_do), o.isFirstItemShowed_bl ? o.resizeCurrentItem(!1, !0) : (o.resizeCurrentItem(!1), o.showItemFirstTime(), o.positionButtons(!1), o.hideButtons(), o.setupThumbnails(800)), o.hideZoomButton(), o.playlist_ar[o.id].description ? (o.hasItemDescription_bl = !0, o.desc_do.setText(o.playlist_ar[o.id].description), o.showDescriptionButton()) : (o.hasItemDescription_bl = !1, o.hideDescriptionButton()), "opacity" == o.descriptionAnimationType_str && o.hasItemDescription_bl && o.desc_do.hide(!1, !0, !1), o.positionButtons(!0), o.type_str == t.VIDEO_TYPE) {
                        if (!o.data.DFUseVideo_bl) return o.main_do.addChild(o.info_do), void o.info_do.showText("To play video mp4 files please set <font color='#FFFFFF'>useVideo:\"yes\"</font>.");
                        if (!FWDRLFlashTest.hasFlashPlayerVersion("9.0.18") && !FWDRLUtils.isLocal && !o.isMobile_bl) return o.main_do.addChild(o.info_do), void o.info_do.showText("Please install Adobe flash player! <a href='http://www.adobe.com/go/getflashplayer'>Click here to install.</a> to play this mp4 video file.");
                        if (!o.videoHolder_do && FWDRLUtils.isLocal) return o.main_do.addChild(o.info_do), void o.info_do.showText("This browser can't play mp4 video files locally, please use a different browser like Chrome, IE9+, Firefox(WIN), Safari(MAC). It will work on all browsers when tested online.");
                        o.videoHolder_do.w == o.finalW - 2 * o.itemBorderSize && o.videoHolder_do.h == o.finalH - 2 * o.itemBorderSize ? (setTimeout(o.addContent, 200), o.startAnim(201), o.showSlideShowAnimation_bl && o.slp_do.animReset()) : (setTimeout(o.addContent, 800), o.startAnim(801))
                    } else if (o.type_str == t.AUDIO_TYPE) {
                        if (!o.data.DFUseAudio_bl) return o.main_do.addChild(o.info_do), void o.info_do.showText("To play audio mp3 files please set <font color='#FFFFFF'>useAudio:\"yes\"</font>.");
                        if (!FWDRLFlashTest.hasFlashPlayerVersion("9.0.18") && !FWDRLUtils.isLocal && !o.isMobile_bl) return o.main_do.addChild(o.info_do), void o.info_do.showText("Please install Adobe flash player! <a href='http://www.adobe.com/go/getflashplayer'>Click here to install.</a> to play this mp3 audio file.");
                        if (!o.audioHolder_do && FWDRLUtils.isLocal) return o.main_do.addChild(o.info_do), void o.info_do.showText("This browser can't play mp3 audio files locally, please use a different browser like Chrome, IE9+, Firefox(WIN), Safari(MAC). It will work on all browsers when tested online.");
                        o.audioHolder_do.w == o.finalW - 2 * o.itemBorderSize && o.audioHolder_do.h == o.finalH - 2 * o.itemBorderSize ? (setTimeout(o.addContent, 200), o.startAnim(201), o.showSlideShowAnimation_bl && o.slp_do.animReset()) : (setTimeout(o.addContent, 800), o.startAnim(801))
                    } else if (o.type_str == t.IFRAME_TYPE) setTimeout(o.addContent, 800), o.startAnim(801);
                    else if (o.type_str == t.FLASH_TYPE) {
                        if (!FWDRLFlashTest.hasFlashPlayerVersion("9.0.18") && !o.isMobile_bl) return o.main_do.addChild(o.info_do), o.info_do.showText("Please install Adobe flash player! <a href='http://www.adobe.com/go/getflashplayer'>Click here to install.</a> to view this flash content."), void o.startAnim(801);
                        if (o.isMobile_bl) return o.main_do.addChild(o.info_do), o.info_do.showText("Adobe flash player is not supported on mobile devices, to view this content please use a desktop machine."), void o.startAnim(801);
                        setTimeout(o.addContent, 800), o.startAnim(801)
                    }
                    o.videoHolder_do && (o.videoHolder_do.w != o.finalW - 2 * o.itemBorderSize || o.videoHolder_do.h != o.finalH - 2 * o.itemBorderSize) && (o.videoHolder_do.setX(-5e3), o.videoHolder_do.w = 1, o.videoHolder_do.h = 1)
                }
                t.dispatchEvent(t.UPDATE, {
                    curId: o.id
                })
            }, o.addContent = function() {
                if (o.type_str == t.VIDEO_TYPE) return o.isAnimForVideoAndAudioPlayersDone_bl = !0, RLVideoPlayer.setVideoSource(o.url), RLVideoPlayer.setPosterSource(o.posterPath_str), o.videoAutoPlay_bl && !o.firstVideoOrAudioAdded_bl ? RLVideoPlayer.play() : o.nextVideoOrAudioAutoPlay_bl && o.firstVideoOrAudioAdded_bl && RLVideoPlayer.play(), o.resizeCurrentItem(), o.prevVideoW = o.finalW, o.prevVideoH = o.finalH, o.firstVideoOrAudioAdded_bl = !0, o.videoAutoPlay_bl = !1, void(o.audioAutoPlay_bl = !1);
                if (o.type_str == t.AUDIO_TYPE) return o.isAnimForVideoAndAudioPlayersDone_bl = !0, RLAudioPlayer.setSource(o.url), o.audioAutoPlay_bl && !o.firstVideoOrAudioAdded_bl ? RLAudioPlayer.play() : o.nextVideoOrAudioAutoPlay_bl && o.firstVideoOrAudioAdded_bl && RLAudioPlayer.play(), o.resizeCurrentItem(), o.firstVideoOrAudioAdded_bl = !0, o.audioAutoPlay_bl = !1, void(o.videoAutoPlay_bl = !1);
                if (o.type_str == t.FLASH_TYPE) {
                    var e = '<object id="RL_swf_' + parseInt(99999999999 * Math.random()) + '" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="100%" height="100%"><param name="movie" value="' + o.url + '"/><param name="wmode" value="opaque"/><param name="scale" value="noscale"/><object type="application/x-shockwave-flash" data="' + o.url + '" width="100%" height="100%"><param name="movie" value="' + o.url + '"/><param name="wmode" value="opaque"/><param name="scale" value="noscale"/></object></object>';
                    return o.curItem_do.setInnerHTML(e), void o.resizeCurrentItem()
                }
                if (-1 != o.url.indexOf("RL_HTML")) return o.addInnerHTMLContent(o.playlist_ar[o.id].html), void o.resizeCurrentItem();
                if (-1 == o.url.indexOf("RL_AJAX:")) {
                    var i, n = "http://"; - 1 != o.url.indexOf("https") && (n = "https://"), o.nextVideoOrAudioAutoPlay_bl && o.firstVideoOrAudioAdded_bl && (o.videoAutoPlay_bl = !0);
                    var s = o.videoAutoPlay_bl ? "1" : "0";
                    o.firstVideoOrAudioAdded_bl = !0;
                    var r;
                    i = document.createElement("iframe"), i.width = "100%", i.height = "100%", i.allowFullScreen = 1, i.setAttribute("allowFullScreen", ""), i.frameBorder = 0, -1 != o.url.indexOf("youtube.") || -1 != o.url.indexOf("vimeo.") ? (-1 != o.url.indexOf("youtube.") ? (r = o.url.replace(/.*\?v=|&.*/gi, ""), i.src = n + "www.youtube.com/embed/" + r + "?wmode=transparent&autoplay=" + s) : -1 != o.url.indexOf("vimeo.") && (r = o.url.replace(/.*\/|\?.*/gi, ""), i.src = n + "player.vimeo.com/video/" + r + "?autoplay=" + s), o.videoAutoPlay_bl = !1) : -1 != o.url.indexOf("google.") ? (o.url = o.url.replace(/&key=\.*|key=\.*|&key=*/gi, ""), o.url += "&key=" + o.googleMapsAPIKey_str, i.src = o.url) : i.src = o.url, o.curItem_do.screen.appendChild(i), o.resizeCurrentItem()
                } else {
                    if (FWDRLUtils.isLocal) return void o.ajaxLoadError("Using ajax locally is not possible or allowed, please test online.");
                    o.url = o.url.substr(o.url.indexOf(":") + 1), o.xmlhttp = new XMLHttpRequest, o.xmlhttp.onerror = function() {
                        o.ajaxLoadError("Ajax error with code: " + o.xmlhttp.status)
                    }, o.xmlhttp.onreadystatechange = function() {
                        4 === o.xmlhttp.readyState && (200 == o.xmlhttp.status ? o.addInnerHTMLContent(o.xmlhttp.responseText) : o.ajaxLoadError("Ajax error with code: " + o.xmlhttp.status))
                    }, o.xmlhttp.open("GET", o.url, !0);
                    try {
                        o.xmlhttp.send()
                    } catch (a) {
                        a.message && o.ajaxLoadError(a.message)
                    }
                }
            }, o.addInnerHTMLContent = function(e) {
                o.curItem_do.getStyle().overflow = "auto", o.curItem_do.setInnerHTML(e), o.curItem_do.screen.addEventListener && (o.curItem_do.screen.addEventListener("mousewheel", function(e) {
                    e.stopImmediatePropagation && e.stopImmediatePropagation()
                }), o.curItem_do.screen.addEventListener("DOMMouseScroll", function(e) {
                    e.stopImmediatePropagation && e.stopImmediatePropagation()
                }), o.curItem_do.screen.addEventListener("touchmove", function(e) {
                    o.curItem_do.screen.scrollHeight > o.finalH - 2 * o.itemBorderSize && e.stopImmediatePropagation()
                }))
            }, o.ajaxLoadError = function(e) {
                o.tm.stop(), o.stopAnim(), o.preloader_do.hide(!0), o.main_do.addChild(o.info_do), o.info_do.showText(e)
            }, o.closeAjax = function() {
                o.xmlhttp && (o.xmlhttp.onerror = null, o.xmlhttp.onreadystatechange = null, o.xmlhttp.abort(), o.xmlhttp = null)
            }, o.closeImage = function() {
                o.image_img && (o.image_img.onload = null, o.image_img.onerror = null, o.image_img = null)
            }, o.loadImage = function() {
                o.isLoading_bl = !0, o.stopAnim(), o.positionPreloader(), o.preloader_do.show(!0), o.image_img = new Image, o.image_img.onload = o.imageLoadComplete, o.image_img.onerror = o.imageLoadError, o.image_img.src = o.url
            }, o.imageLoadComplete = function() {
                o.originalW = o.image_img.width, o.originalH = o.image_img.height, o.curItem_do = new FWDRLDisplayObject("img"), o.curItem_do.setScreen(o.image_img), o.curItem_do.type_str = t.IMAGE_TYPE, o.isFirstItemShowed_bl ? (o.resizeCurrentItem(!0, !1), o.prevItem_do && o.prevItem_do.type_str == t.IMAGE_TYPE && (FWDRLTweenMax.to(o.prevItem_do, .8, {
                    alpha: 0,
                    ease: Quint.easeOut
                }), FWDRLTweenMax.to(o.prevItem_do, .8, {
                    x: parseInt((o.finalW - o.prevItem_do.w) / 2),
                    y: parseInt((o.finalH - o.prevItem_do.h) / 2),
                    ease: Expo.easeInOut
                })), o.curItem_do.setWidth(o.finalW - 2 * o.itemBorderSize), o.curItem_do.setHeight(o.finalH - 2 * o.itemBorderSize), o.curItem_do.setAlpha(0), o.resizeCurrentItem(!1, !0), FWDRLTweenMax.to(o.curItem_do, .8, {
                    alpha: 1,
                    delay: .8,
                    ease: Quint.easeOut
                })) : (o.resizeCurrentItem(!1), o.showItemFirstTime(), o.positionButtons(!1), o.hideButtons(), o.setupThumbnails(800)), o.startAnim(801), o.isLoading_bl = !1, o.prevItem_do = o.curItem_do, o.preloader_do.hide(!0), o.showZoomButton(), o.hasItemDescription_bl && ("opacity" == o.descriptionAnimationType_str && o.hasItemDescription_bl && o.desc_do.hide(!1, !0, !1), o.showDescriptionButton(), o.desc_do.setText(o.playlist_ar[o.id].description)), o.positionButtons(!0), o.itemHolder_do.addChild(o.curItem_do)
            }, o.imageLoadError = function() {
                o.tm.stop(), o.stopAnim(), o.preloader_do.hide(!0), o.main_do.addChild(o.info_do), o.info_do.showText("Image with path <span style='color:#FFFFFF;'>" + decodeURIComponent(o.url) + "</span> can't be loaded, probably the path is incorrect.")
            }, this.maximizeOrMinimize = function() {
                if (!o.isLoading_bl && !o.isAnim_bl) {
                    var e, t, i, n, s, r, a;
                    o.isAnimMaximizeOrMinimize_bl = !0, clearTimeout(o.maximizeCompleteTimeOutId_to), clearTimeout(o.minimizeCompleteTimeOutId_to), o.isMaximized_bl ? (o.isMaximized_bl = !1, o.zoomButton_do.setButtonState(1), o.isMobile_bl ? o.removeEventsForScrollngImageOnMobile() : o.removeEventsForScrollngImageOnDesktop(), FWDRLTweenMax.to(o.curItem_do, .8, {
                        x: o.finalX + o.itemBorderSize,
                        y: o.finalY + o.itemBorderSize,
                        w: o.finalW - 2 * o.itemBorderSize,
                        h: o.finalH - 2 * o.itemBorderSize,
                        ease: Expo.easeInOut
                    }), o.setButtonsVisible(!0), o.positionButtons(!0), o.minimizeCompleteTimeOutId_to = setTimeout(o.minimizeCompleteHandler, 801)) : (o.isMaximized_bl = !0, o.zoomButton_do.setButtonState(0), o.tm.pause(), e = o.stageWidth / o.originalW, t = o.stageHeight / o.originalH, a = 0, e >= t ? a = e : t >= e && (a = t), s = parseInt(o.originalW * a), r = parseInt(o.originalH * a), i = parseInt((o.stageWidth - s) / 2), n = parseInt((o.stageHeight - r) / 2), 1 != o.curItem_do.alpha && o.curItem_do.setAlpha(1), o.curItem_do.setX(o.curItem_do.getGlobalX()), o.curItem_do.setY(o.curItem_do.getGlobalY()), FWDRLTweenMax.to(o.zoomButton_do, .8, {
                        x: o.stageWidth - o.zoomButton_do.w - 1,
                        y: 1,
                        ease: Expo.easeInOut
                    }), o.isMobile_bl ? FWDRLTweenMax.to(o.curItem_do, .8, {
                        x: i,
                        y: n,
                        w: s,
                        h: r,
                        ease: Expo.easeInOut
                    }) : (e >= t ? FWDRLTweenMax.to(o.curItem_do, .8, {
                        x: i,
                        w: s,
                        h: r,
                        ease: Expo.easeInOut
                    }) : t > e && FWDRLTweenMax.to(o.curItem_do, .8, {
                        y: n,
                        w: s,
                        h: r,
                        ease: Expo.easeInOut
                    }), o.addEventsForScrollngImageOnDesktop()), o.itemHolder_do.contains(o.imteHolder_do) && o.itemHolder_do.removeChild(o.curItem_do), o.main_do.addChild(o.curItem_do), o.main_do.addChild(o.zoomButton_do), o.maximizeCompleteTimeOutId_to = setTimeout(o.maximizeCompleteHandler, 801))
                }
            }, o.minimizeCompleteHandler = function() {
                o.isAnimMaximizeOrMinimize_bl = !1, o.isTweening_bl = !1, o.itemHolder_do.addChild(o.curItem_do), o.resizeCurrentItem(), o.tm.resume(), o.hasItemDescription_bl && o.showDescription_bl && o.desc_do.show(!0), o.main_do.addChild(o.zoomButton_do), o.useDeepLinking_bl && o.dlChangeHandler()
            }, o.maximizeCompleteHandler = function() {
                o.isAnimMaximizeOrMinimize_bl = !1, o.setButtonsInvisible(!0), o.isMobile_bl && o.addEventsForScrollngImageOnMobile(), o.hasItemDescription_bl && o.showDescription_bl && o.desc_do.hide(!1)
            }, o.setButtonsInvisible = function(e) {
                o.showCloseButton_bl && o.closeButton_do.setVisible(!1), o.showNextAndPrevButtons_bl && (o.nextButton_do.setVisible(!1), o.prevButton_do.setVisible(!1)), o.showThumbnailsHideOrShowButton_bl && o.hsThumbanilsButton_do.setVisible(!1), o.showThumbnails_bl && o.thumbnailsManager_do.setVisible(!1), o.showDescriptionButton_bl && o.descButton_do.setVisible(!1), o.showSlideShowButton_bl && o.slideShowButton_do.setVisible(!1), o.showFacebookButton_bl && o.fbButton_do.setVisible(!1), o.showSlideShowAnimation_bl && o.slp_do.setVisible(!1), o.showDescription_bl && o.desc_do.setVisible(!1), e && o.mainItemHolder_do.setVisible(!1)
            }, o.setButtonsVisible = function(e) {
                o.showCloseButton_bl && o.closeButton_do.setVisible(!0), o.showNextAndPrevButtons_bl && (o.nextButton_do.setVisible(!0), o.prevButton_do.setVisible(!0)), o.showThumbnailsHideOrShowButton_bl && o.hsThumbanilsButton_do.setVisible(!0), o.showThumbnails_bl && o.thumbnailsManager_do.setVisible(!0), o.showDescriptionButton_bl && o.descButton_do.setVisible(!0), o.showSlideShowButton_bl && o.slideShowButton_do.setVisible(!0), o.showFacebookButton_bl && o.fbButton_do.setVisible(!0), o.showSlideShowAnimation_bl && o.slp_do.setVisible(!0), o.showDescription_bl && o.desc_do.setVisible(!0), e && o.mainItemHolder_do.setVisible(!0)
            }, this.addEventsForScrollngImageOnDesktop = function() {
                o.updateImageWhenMaximized_int = setInterval(o.updateMaximizedImageHandler, 16), e.addEventListener ? e.addEventListener("mousemove", o.updateMaximizeImageOnMouseMovedHandler) : document.attachEvent("onmousemove", o.updateMaximizeImageOnMouseMovedHandler), o.hider.stop()
            }, this.removeEventsForScrollngImageOnDesktop = function() {
                clearInterval(o.updateImageWhenMaximized_int), e.addEventListener ? e.removeEventListener("mousemove", o.updateMaximizeImageOnMouseMovedHandler) : document.detachEvent("onmousemove", o.updateMaximizeImageOnMouseMovedHandler), o.hider.start()
            }, this.updateMaximizeImageOnMouseMovedHandler = function(e) {
                var t = FWDRLUtils.getViewportMouseCoordinates(e);
                o.gmx = t.screenX, o.gmy = t.screenY
            }, o.updateMaximizedImageHandler = function() {
                var e, t;
                o.percentX = o.gmx / o.stageWidth, o.percentY = o.gmy / o.stageHeight, o.percentX > 1 && (o.percentX = 1), o.percentY > 1 && (o.percentY = 1);
                var i = o.stageWidth / o.originalW,
                    n = o.stageHeight / o.originalH;
                if (n >= i) {
                    if (e = Math.round((o.stageWidth - o.curItem_do.w) * o.percentX), isNaN(e)) return;
                    FWDRLTweenMax.to(o.curItem_do, .4, {
                        x: e
                    })
                } else {
                    if (t = Math.round((o.stageHeight - o.curItem_do.h) * o.percentY), isNaN(t)) return;
                    FWDRLTweenMax.to(o.curItem_do, .4, {
                        y: t
                    })
                }
            }, o.addEventsForScrollngImageOnMobile = function() {
                o.hasPointerEvent_bl ? (e.addEventListener("pointerdown", o.onTouchStartScrollImage), e.addEventListener("pointerup", o.onTouchEndScrollImage)) : (e.addEventListener("touchstart", o.onTouchStartScrollImage), e.addEventListener("touchend", o.onTouchEndScrollImage)), clearInterval(o.updateImageWhenMaximized_int), o.updateImageWhenMaximized_int = setInterval(o.updateMaximizedImageMobileHandler, 16)
            }, o.removeEventsForScrollngImageOnMobile = function() {
                clearInterval(o.updateImageWhenMaximized_int), o.hasPointerEvent_bl ? (e.removeEventListener("pointerdown", o.onTouchStartScrollImage), e.removeEventListener("pointerup", o.onTouchEndScrollImage), e.removeEventListener("pointermove", o.onTouchMoveScrollImage)) : (e.removeEventListener("touchstart", o.onTouchStartScrollImage), e.removeEventListener("touchend", o.onTouchEndScrollImage), e.removeEventListener("touchmove", o.onTouchMoveScrollImage)), o.isDragging_bl = !1
            }, o.onTouchStartScrollImage = function(t) {
                var i = FWDRLUtils.getViewportMouseCoordinates(t);
                o.hasPointerEvent_bl ? e.addEventListener("pointermove", o.onTouchMoveScrollImage) : e.addEventListener("touchmove", o.onTouchMoveScrollImage), o.lastPresedX = i.screenX, o.lastPresedY = i.screenY, t.preventDefault()
            }, o.onTouchEndScrollImage = function() {
                o.hasPointerEvent_bl ? e.removeEventListener("pointermove", o.onTouchMoveScrollImage) : e.removeEventListener("touchmove", o.onTouchMoveScrollImage), o.isDragging_bl = !1
            }, o.onTouchMoveScrollImage = function(e) {
                e.preventDefault && e.preventDefault();
                var t = FWDRLUtils.getViewportMouseCoordinates(e),
                    i = o.stageWidth / o.originalW,
                    n = o.stageHeight / o.originalH,
                    s = 0,
                    r = 0;
                o.isDragging_bl = !0, n > i ? (s = t.screenX - o.lastPresedX, o.lastPresedX = t.screenX, o.curItem_do.setX(o.curItem_do.x + s)) : i > n ? (r = t.screenY - o.lastPresedY, o.lastPresedY = t.screenY, o.curItem_do.setY(o.curItem_do.y + r)) : (s = t.screenX - o.lastPresedX, o.lastPresedX = t.screenX, o.curItem_do.setX(o.curItem_do.x + s), r = t.screenY - o.lastPresedY, o.lastPresedY = t.screenY, o.curItem_do.setY(o.curItem_do.y + r)), o.vx = 2 * s, o.vy = 2 * r
            }, o.updateMaximizedImageMobileHandler = function() {
                var e, t, i, n, s, r;
                if (!o.isDragging_bl) {
                    if (o.vy *= o.friction, o.vx *= o.friction, i = o.curItem_do.x, n = o.curItem_do.y, e = i + o.vx, t = n + o.vy, s = o.curItem_do.w, r = o.curItem_do.h, isNaN(e) || isNaN(t)) return;
                    o.curItem_do.setX(e), o.curItem_do.setY(t), n >= 0 ? (o.vy2 = .3 * (0 - n), o.vy *= o.friction, o.curItem_do.setY(n + o.vy2)) : n <= o.stageHeight - r && (o.vy2 = .3 * (o.stageHeight - r - n), o.vy *= o.friction, o.curItem_do.setY(n + o.vy2)), i >= 0 ? (o.vx2 = .3 * (0 - i), o.vx *= o.friction, o.curItem_do.setX(i + o.vx2)) : i <= o.stageWidth - s && (o.vx2 = .3 * (o.stageWidth - s - i), o.vx *= o.friction, o.curItem_do.setX(i + o.vx2))
                }
            }, o.resizeCurrentItem = function(e, i) {
                if (o.curItem_do) {
                    var n = o.stageWidth - 2 * o.maxButtonW - 2 * (o.buttonsOffsetIn + o.buttonsOffsetOut) - 2 * o.itemBorderSize,
                        s = o.stageHeight - o.itemOffsetH - 2 * o.itemBorderSize,
                        r = 0;
                    o.areThumbnailsShowed_bl && (s -= o.thumbnailH + o.spaceBetweenThumbnailsAndItem, r = Math.round((o.thumbnailH + o.spaceBetweenThumbnailsAndItem) / 2 - o.spaceBetweenThumbnailsAndItem / 2));
                    var a = n / o.originalW,
                        l = s / o.originalH,
                        d = 0;
                    l >= a ? d = a : a >= l && (d = l), a >= 1 && l >= 1 && (d = 1), o.finalW = Math.round(o.originalW * d) + 2 * o.itemBorderSize, o.finalH = Math.round(o.originalH * d) + 2 * o.itemBorderSize, o.finalW < 2 * o.itemBorderSize && (o.finalW = 2 * o.itemBorderSize), o.finalH < 2 * o.itemBorderSize && (o.finalH = 2 * o.itemBorderSize), FWDRLUtils.isIEAndLessThen9 && (o.finalW < 150 && (o.finalW = 150), o.finalH < 150 && (o.finalH = 150)), o.type_str == t.AUDIO_TYPE && o.audioHolder_do && (o.finalH = o.data.audioControllerHeight + 2 * o.itemBorderSize), o.finalX = Math.round((o.stageWidth - o.finalW) / 2), o.finalY = Math.round((o.stageHeight - o.finalH) / 2) - r, e || (FWDRLTweenMax.killTweensOf(o.mainItemHolder_do), FWDRLTweenMax.killTweensOf(o.itemBk_do), FWDRLTweenMax.killTweensOf(o.itemBorder_do), i ? (FWDRLTweenMax.to(o.mainItemHolder_do, .8, {
                        x: o.finalX,
                        y: o.finalY,
                        w: o.finalW,
                        h: o.finalH,
                        ease: Expo.easeInOut
                    }), FWDRLTweenMax.to(o.itemBk_do, .8, {
                        x: o.itemBorderSize,
                        y: o.itemBorderSize,
                        w: o.finalW - 2 * o.itemBorderSize,
                        h: o.finalH - 2 * o.itemBorderSize,
                        ease: Expo.easeInOut
                    }), FWDRLTweenMax.to(o.itemBorder_do, .8, {
                        x: 0,
                        y: 0,
                        w: o.finalW,
                        h: o.finalH,
                        ease: Expo.easeInOut
                    }), o.desc_do && FWDRLTweenMax.to(o.desc_do, .8, {
                        finalW: o.finalW - 2 * o.itemBorderSize,
                        onUpdate: o.desc_do.resizeAndPosition,
                        ease: Expo.easeInOut
                    }), o.type_str == t.VIDEO_TYPE && o.videoHolder_do && o.isAnimForVideoAndAudioPlayersDone_bl && FWDRLTweenMax.to(o.videoHolder_do, .8, {
                        x: o.itemBorderSize,
                        y: o.itemBorderSize,
                        w: o.finalW - 2 * o.itemBorderSize,
                        h: o.finalH - 2 * o.itemBorderSize,
                        onUpdate: RLVideoPlayer.resizeHandler,
                        ease: Expo.easeInOut
                    })) : (o.mainItemHolder_do.setX(o.finalX), o.mainItemHolder_do.setY(o.finalY), o.mainItemHolder_do.setWidth(o.finalW), o.mainItemHolder_do.setHeight(o.finalH), o.itemBk_do.setX(o.itemBorderSize), o.itemBk_do.setY(o.itemBorderSize), o.itemBk_do.setWidth(o.finalW - 2 * o.itemBorderSize), o.itemBk_do.setHeight(o.finalH - 2 * o.itemBorderSize), o.itemBorder_do.setX(0), o.itemBorder_do.setY(0), o.itemBorder_do.setWidth(o.finalW), o.itemBorder_do.setHeight(o.finalH), 1 != o.itemBorder_do.alpha && o.itemBorder_do.setAlpha(1), o.desc_do && o.desc_do.resizeAndPosition(o.finalW - 2 * o.itemBorderSize), o.type_str == t.VIDEO_TYPE && o.videoHolder_do ? o.isAnimForVideoAndAudioPlayersDone_bl && (o.isVideoFullScreen_bl ? (o.videoHolder_do.setX(-o.finalX), o.videoHolder_do.setY(-o.finalY)) : (o.videoHolder_do.setX(o.itemBorderSize), o.videoHolder_do.setY(o.itemBorderSize)), o.videoHolder_do.setWidth(o.finalW - 2 * o.itemBorderSize), o.videoHolder_do.setHeight(o.finalH - 2 * o.itemBorderSize), RLVideoPlayer.resizeHandler()) : o.type_str == t.AUDIO_TYPE && o.audioHolder_do && o.isAnimForVideoAndAudioPlayersDone_bl && (o.audioHolder_do.setX(o.itemBorderSize), o.audioHolder_do.setY(o.itemBorderSize), o.audioHolder_do.setWidth(o.finalW - 2 * o.itemBorderSize), o.audioHolder_do.setHeight(o.finalH - 2 * o.itemBorderSize), RLAudioPlayer.resizeHandler())), FWDRLTweenMax.killTweensOf(o.curItem_do), o.isMaximized_bl ? (a = o.stageWidth / o.originalW, l = o.stageHeight / o.originalH, a >= l ? d = a : l >= a && (d = l), o.curItem_do.setX(parseInt((o.stageWidth - o.originalW * d) / 2)), o.curItem_do.setY(parseInt((o.stageHeight - o.originalH * d) / 2)), o.curItem_do.setWidth(Math.max(0, parseInt(o.originalW * d))), o.curItem_do.setHeight(Math.max(0, parseInt(o.originalH * d)))) : i ? FWDRLTweenMax.to(o.curItem_do, .8, {
                        x: o.itemBorderSize,
                        y: o.itemBorderSize,
                        w: o.finalW - 2 * o.itemBorderSize,
                        h: o.finalH - 2 * o.itemBorderSize,
                        ease: Expo.easeInOut
                    }) : (o.type_str == t.IMAGE_TYPE && o.curItem_do.setAlpha(1), o.curItem_do.setX(o.itemBorderSize), o.curItem_do.setY(o.itemBorderSize), o.curItem_do.setWidth(o.finalW - 2 * o.itemBorderSize), o.curItem_do.setHeight(o.finalH - 2 * o.itemBorderSize)))
                }
            }, o.showItemFirstTime = function() {
                o.isFirstItemShowed_bl = !0, o.mainItemHolder_do.setX(o.stageWidth / 2), o.mainItemHolder_do.setY(o.stageHeight / 2), o.mainItemHolder_do.setWidth(0), o.mainItemHolder_do.setHeight(0), o.itemBk_do.setX(0), o.itemBk_do.setY(0), o.itemBk_do.setWidth(0), o.itemBk_do.setHeight(0), o.curItem_do.type_str == t.IMAGE_TYPE && (o.curItem_do.setAlpha(0), o.curItem_do.setX(-o.finalW / 2 + o.itemBorderSize), o.curItem_do.setY(-o.finalH / 2 + o.itemBorderSize), FWDRLTweenMax.to(o.curItem_do, .8, {
                    alpha: 1,
                    delay: .8,
                    ease: Quint.easeOut
                }), FWDRLTweenMax.to(o.curItem_do, .8, {
                    x: o.itemBorderSize,
                    y: o.itemBorderSize,
                    ease: Expo.easeInOut
                }), o.startAnim(1601)), FWDRLTweenMax.to(o.mainItemHolder_do, .8, {
                    x: o.finalX,
                    y: o.finalY,
                    w: o.finalW,
                    h: o.finalH,
                    ease: Expo.easeInOut
                }), o.itemBorder_do.setAlpha(0), FWDRLTweenMax.to(o.itemBorder_do, .8, {
                    alpha: 1,
                    x: 0,
                    y: 0,
                    w: o.finalW,
                    h: o.finalH,
                    ease: Expo.easeInOut
                }), FWDRLTweenMax.to(o.itemBk_do, .8, {
                    x: o.itemBorderSize,
                    y: o.itemBorderSize,
                    w: o.finalW - 2 * o.itemBorderSize,
                    h: o.finalH - 2 * o.itemBorderSize,
                    ease: Expo.easeInOut
                }), o.hider.start(), setTimeout(function() {
                    o.slideShowAutoPlay_bl && o.tm.start(), t.dispatchEvent(t.SHOW_COMPLETE)
                }, 800), o.addKeyboardSupport_bl ? o.addKeyboardSupport() : o.removeKeyboardSupport()
            }, o.gotoToItem = function(e) {
                o.isReady_bl && o.isFirstItemShowed_bl && !o.isAnim_bl && (o.isMobile_bl || o.disableClick(), o.id = e, o.useDeepLinking_bl ? FWDAddress.setValue(o.propsObjVariableName_str ? "RL?rl_playlist=" + o.playlistDomOrObj_str + "&rl_id=" + o.id + "&rl_propsobj=" + o.propsObjVariableName_str : "RL?rl_playlist=" + o.playlistDomOrObj_str + "&rl_id=" + o.id) : o.createAndShowItem())
            }, o.gotoNextItem = function() {
                o.isReady_bl && o.isFirstItemShowed_bl && !o.isAnim_bl && (o.isMobile_bl || o.disableClick(), o.id++, o.id < 0 ? o.id = o.totalItems - 1 : o.id > o.totalItems - 1 && (o.id = 0), o.useDeepLinking_bl ? FWDAddress.setValue(o.propsObjVariableName_str ? "RL?rl_playlist=" + o.playlistDomOrObj_str + "&rl_id=" + o.id + "&rl_propsobj=" + o.propsObjVariableName_str : "RL?rl_playlist=" + o.playlistDomOrObj_str + "&rl_id=" + o.id) : o.createAndShowItem())
            }, o.gotoPrevItem = function() {
                o.isReady_bl && o.isFirstItemShowed_bl && !o.isAnim_bl && (o.isMobile_bl || o.disableClick(), o.id--, o.id < 0 ? o.id = o.totalItems - 1 : o.id > o.totalItems - 1 && (o.id = 0), o.useDeepLinking_bl ? FWDAddress.setValue(o.propsObjVariableName_str ? "RL?rl_playlist=" + o.playlistDomOrObj_str + "&rl_id=" + o.id + "&rl_propsobj=" + o.propsObjVariableName_str : "RL?rl_playlist=" + o.playlistDomOrObj_str + "&rl_id=" + o.id) : o.createAndShowItem())
            }, o.removeItems = function(e) {
                for (var t; o.itemHolder_do.getNumChildren() > e;) t = o.itemHolder_do.getChildAt(0), FWDRLTweenMax.killTweensOf(t), o.itemHolder_do.removeChild(t), t.destroy();
                t = null
            }, o.addSwipeSupport = function() {
                o.hasPointerEvent_bl ? o.main_do.screen.addEventListener("pointerdown", o.swipeStartHandler) : o.main_do.screen.addEventListener("touchstart", o.swipeStartHandler)
            }, o.removeSwipeSupport = function() {
                o.hasPointerEvent_bl ? (e.removeEventListener("pointerdown", o.swipeStartHandler), e.removeEventListener("pointerup", o.swipeUpHandler), e.removeEventListener("pointermove", o.swipeMoveHandler)) : (e.removeEventListener("touchstart", o.swipeStartHandler), e.removeEventListener("touchend", o.swipeUpHandler), e.removeEventListener("touchmove", o.swipeMoveHandler)), o.swipeMoved_bl = !1
            }, this.swipeStartHandler = function(t) {
                if (!t.touches || 1 == t.touches.length) {
                    var i = FWDRLUtils.getViewportMouseCoordinates(t);
                    o.swipeMoved_bl = !1, o.mouseX = i.screenX, o.mouseY = i.screenY, o.hasPointerEvent_bl ? (e.addEventListener("pointerup", o.swipeUpHandler), e.addEventListener("pointermove", o.swipeMoveHandler)) : (e.addEventListener("touchend", o.swipeUpHandler), e.addEventListener("touchmove", o.swipeMoveHandler))
                }
            }, o.swipeMoveHandler = function(e) {
                if (e.preventDefault && e.preventDefault(), !(o.isClickedDisabled_bl || e.touches && 1 != e.touches.length)) {
                    o.swipeMoved_bl = !0;
                    var t = FWDRLUtils.getViewportMouseCoordinates(e);
                    o.dif = o.mouseX - t.screenX, o.mouseX = t.screenX, o.mouseY = t.screenY
                }
            }, o.swipeUpHandler = function() {
                if (!(o.isAnim_bl || o.isAnimMaximizeOrMinimize_bl || o.isMaximized_bl)) {
                    var t;
                    t = FWDRLUtils.isApple ? 20 : 4, o.dif > t ? o.isClickedDisabled_bl || o.gotoNextItem() : o.dif < -t && (o.isClickedDisabled_bl || o.gotoPrevItem()), o.dif = 0, o.hasPointerEvent_bl ? (e.removeEventListener("pointerup", o.swipeUpHandler), e.removeEventListener("pointermove", o.swipeMoveHandler)) : (e.removeEventListener("touchend", o.swipeUpHandler), e.removeEventListener("touchmove", o.swipeMoveHandler))
                }
            }, o.addKeyboardSupport = function() {
                o.hasKeyboardSupport_bl || (o.hasKeyboardSupport_bl = !0, document.addEventListener ? (document.addEventListener("keydown", o.onKeyDownHandler), document.addEventListener("keyup", o.onKeyUpHandler)) : (document.attachEvent("onkeydown", o.onKeyDownHandler), document.attachEvent("onkeyup", o.onKeyUpHandler)))
            }, o.removeKeyboardSupport = function() {
                o.hasKeyboardSupport_bl && (o.hasKeyboardSupport_bl = !1, document.removeEventListener ? (document.removeEventListener("keydown", o.onKeyDownHandler), document.removeEventListener("keyup", o.onKeyUpHandler)) : (document.detachEvent("onkeydown", o.onKeyDownHandler), document.detachEvent("onkeyup", o.onKeyUpHandler)))
            }, o.onKeyDownHandler = function(e) {
                return document.removeEventListener ? document.removeEventListener("keydown", o.onKeyDownHandler) : document.detachEvent("onkeydown", o.onKeyDownHandler), 39 == e.keyCode ? (o.gotoNextItem(), e.preventDefault && e.preventDefault(), !1) : 37 == e.keyCode ? (o.gotoPrevItem(), e.preventDefault && e.preventDefault(), !1) : void 0
            }, this.onKeyUpHandler = function() {
                document.addEventListener ? document.addEventListener("keydown", o.onKeyDownHandler) : document.attachEvent("onkeydown", o.onKeyDownHandler)
            }, o.setDefaultSettings = function() {
                o.buttonsAlignment_str = o.DFButtonsAlignment_str, o.defaultItemW = o.DFDefaultItemW, o.defaultItemH = o.DFDefaultItemH, o.descriptionWindowPosition_str = o.DFDescriptionWindowPosition_str, o.desc_do && (o.desc_do.position_str = o.descriptionWindowPosition_str), o.descriptionAnimationType_str = o.DFDescriptionAnimationType_str, o.desc_do && (o.desc_do.descriptionAnimationType_str = o.descriptionAnimationType_str), o.backgroundColor_str = o.DFBackgroundColor_str, o.bk_do.getStyle().backgroundColor = o.backgroundColor_str, o.itemBorderColor_str = o.DFitemBorderColor_str, o.itemBorder_do && (o.itemBorder_do.getStyle().backgroundColor = o.DFitemBorderColor_str), o.spaceBetweenButtons = o.DFSpaceBetweenButtons, o.buttonsHideDelay = o.DFbuttonsHideDelay, o.hider && (o.hider.hideDelay = o.buttonsHideDelay), o.nextVideoOrAudioAutoPlay_bl = o.DFNextVideoOrAudioAutoPlay_bl, o.useAsModal_bl = o.DFUseAsModal_bl, o.slideShowAutoPlay_bl = o.DFSlideShowAutoPlay_bl, o.videoAutoPlay_bl = o.DFVideoAutoPlay_bl, o.audioAutoPlay_bl = o.DFAudioAutoPlay_bl, o.addKeyboardSupport_bl = o.DFSddKeyboardSupport_bl, o.showCloseButton_bl = o.DFShowCloseButton_bl, o.showFacebookButton_bl = o.DFShowFacebookButton_bl, o.defaultShowZoomButton_bl = o.DFShowZoomButton, o.showSlideShowButton_bl = o.DFShowSlideShowButton_bl, o.defaultShowSlideShowAnimation_bl = o.DFSefaultShowSlideShowAnimation_bl, o.defaultShowNextAndPrevButtons_bl = o.DFSefaultShowNextAndPrevButtons_bl, o.slideShowDelay = o.DFSlideShowDelay, o.tm && (o.tm.delay = o.slideShowDelay), o.slp_do && (o.slp_do.duration = o.slideShowDelay / 1e3), o.itemOffsetH = o.DFItemOffsetH, o.buttonsOffsetIn = o.DFButtonsOffsetIn, o.buttonsOffsetOut = o.DFButtonsOffsetOut, o.itemBorderSize = o.DFItemBorderSize, o.desc_do && (o.desc_do.margins = o.itemBorderSize), o.itemBorderRadius = o.DFItemBorderRadius, o.mainItemHolder_do.getStyle().borderRadius = o.itemBorderRadius ? o.itemBorderRadius + "px" : "", o.backgroundOpacity = o.DFBackgroundOpacity, o.itemBoxShadow_str = o.DFItemBoxShadow_str, o.mainItemHolder_do.getStyle().boxShadow = "none" == o.itemBoxShadow_str ? "none" : o.itemBoxShadow_str, o.itemBkColor_str = o.DFItemBkColor_str, o.itemBk_do.getStyle().backgroundColor = o.itemBkColor_str, o.defaultShowThumbnails_bl = o.DFDefaultThumbnails_bl, o.defaultShowThumbnailsHideOrShowButton_bl = o.DFDefaultShowThumbnailsHideOrShowButton_bl, o.showThumbnailsByDefault_bl = o.DFShowThumbnailsByDefault_bl, o.showThumbnailsOverlay_bl = o.DFShowThumbnailsOverlay_bl, o.thumbnailsManager_do && (o.thumbnailsManager_do.showThumbnailsOverlay_bl = o.showThumbnailsOverlay_bl), o.showThumbnailsSmallIcon_bl = o.DFShowThumbnailsSmallIcon_bl, o.thumbnailsManager_do && (o.thumbnailsManager_do.showThumbnailsSmallIcon_bl = o.showThumbnailsSmallIcon_bl), o.thumbnailsOffsetBottom = o.DFThumbnailsOffsetBottom, o.thumbnailH = o.DFThumbnailH, o.thumbnailsManager_do && (o.thumbnailsManager_do.thumbnailsOffsetBottom = o.thumbnailsOffsetBottom, o.thumbnailsManager_do.thumbnailH = o.thumbnailH - o.thumbnailsOffsetBottom, o.thumbnailsManager_do.stageHeight = o.thumbnailH), o.thumbnailsBorderSize = o.DFThumbnailsBorderSize, o.thumbnailsManager_do && (o.thumbnailsManager_do.thumbnailsBorderSize = o.thumbnailsBorderSize), o.thumbnailsBorderRadius = o.DFThumbnailsBorderRadius, o.thumbnailsManager_do && (o.thumbnailsManager_do.thumbnailsBorderRadius = o.thumbnailsBorderRadius), o.spaceBetweenThumbnailsAndItem = o.DFSpaceBetweenThumbnailsAndItem, o.spaceBetweenThumbnails = o.DFSpaceBetweenThumbnails, o.thumbnailsManager_do && (o.thumbnailsManager_do.spaceBetweenThumbnails = o.spaceBetweenThumbnails), o.thumbnailsOverlayOpacity = o.DFThumbnailsOverlayOpacity, o.thumbnailsManager_do && (o.thumbnailsManager_do.thumbnailsOverlayOpacity = o.thumbnailsOverlayOpacity), o.thumbnailsOverlayColor_str = o.DFThumbnailsOverlayColor_str, o.thumbnailsManager_do && (o.thumbnailsManager_do.thumbnailsOverlayColor_str = o.thumbnailsOverlayColor_str), o.thumbnailsBorderNormalColor_str = o.DFThumbnailsBorderNormalColor, o.thumbnailsManager_do && (o.thumbnailsManager_do.thumbnailsBorderNormalColor_str = o.thumbnailsBorderNormalColor_str), o.thumbnailsBorderSelectedColor_str = o.DFThumbnailsBorderSelectedColor_str, o.thumbnailsManager_do && (o.thumbnailsManager_do.thumbnailsBorderSelectedColor_str = o.thumbnailsBorderNormalColor_str), o.defaultHideDescriptionButtons_bl = o.DFDefaultHideDescriptionButtons_bl, o.defaultShowDescriptionByDefault_bl = o.DFDefaultShowDescriptionByDefault_bl, o.showDescription_bl = o.defaultShowDescriptionByDefault_bl, o.descriptionWindowBackgroundColor_str = o.DFDescriptionWindowBackgroundColor, o.desc_do && (o.desc_do.backgroundColor_str = o.descriptionWindowBackgroundColor_str, o.desc_do.bk_do.setBkColor(o.descriptionWindowBackgroundColor_str)), o.descriptionWindowBackgroundOpacity = o.DFDescriptionWindowBackgroundOpacity, o.desc_do && (o.desc_do.backgroundOpacity = o.descriptionWindowBackgroundOpacity, o.desc_do.bk_do.setAlpha(o.desc_do.backgroundOpacity)), o.data.videoControllerBackgroundColor_str = o.DFVideoControllerBackgroundColor_str, o.data.videoPosterBackgroundColor_str = o.DFVideoPosterBackgroundColor_str, o.data.videoPosterBackgroundColor_str = o.DFVideoPosterBackgroundColor_str, o.video_do && o.video_do.controller_do && (o.video_do.controller_do.mainHolder_do.getStyle().backgroundColor = o.data.videoControllerBackgroundColor_str, o.video_do.videoPoster_do.getStyle().backgroundColor = o.data.videoPosterBackgroundColor_str), o.data.audioControllerBackgroundColor_str = o.DFAudioControllerBackgroundColor_str, o.audio_do && o.audio_do.controller_do && (o.audio_do.controller_do.getStyle().backgroundColor = o.data.audioControllerBackgroundColor_str)
            }, o.setObjectPropsSettings = function(e) {
                var i;
                for (var n in e) switch (n) {
                    case "defaultItemWidth":
                        o.defaultItemW = e.defaultItemWidth || 640;
                        break;
                    case "defaultItemHeight":
                        o.defaultItemH = e.defaultItemHeight || 380;
                        break;
                    case "buttonsAlignment":
                        o.buttonsAlignment_str = e.buttonsAlignment || "in";
                        var i = "in" == o.buttonsAlignment_str || "out" == o.buttonsAlignment_str;
                        i || (o.buttonsAlignment_str = "in");
                        break;
                    case "descriptionWindowPosition":
                        o.descriptionWindowPosition_str = e.descriptionWindowPosition || "top", i = "top" == o.descriptionWindowPosition_str || "bottom" == o.descriptionWindowPosition_str, i || (o.descriptionWindowPosition_str = "top"), o.desc_do && (o.desc_do.position_str = o.descriptionWindowPosition_str);
                        break;
                    case "showDescriptionButton":
                        o.defaultHideDescriptionButtons_bl = e.showDescriptionButton, o.defaultHideDescriptionButtons_bl = "yes" == o.defaultHideDescriptionButtons_bl ? !0 : !1;
                        break;
                    case "showDescriptionByDefault":
                        o.defaultShowDescriptionByDefault_bl = e.showDescriptionByDefault, o.defaultShowDescriptionByDefault_bl = "yes" == o.defaultShowDescriptionByDefault_bl ? !0 : !1, o.showDescription_bl = o.defaultShowDescriptionByDefault_bl;
                        break;
                    case "descriptionWindowAnimationType":
                        o.descriptionAnimationType_str = e.descriptionWindowAnimationType || "motion", i = "motion" == o.descriptionAnimationType_str || "opacity" == o.descriptionAnimationType_str, i || (o.descriptionAnimationType_str = "motion"), o.desc_do && (o.desc_do.descriptionAnimationType_str = o.descriptionAnimationType_str);
                        break;
                    case "descriptionWindowBackgroundColor":
                        o.descriptionWindowBackgroundColor_str = e.descriptionWindowBackgroundColor || "#FF0000", o.desc_do && (o.desc_do.backgroundColor_str = o.descriptionWindowBackgroundColor_str, o.desc_do.bk_do.setBkColor(o.descriptionWindowBackgroundColor_str));
                        break;
                    case "descriptionWindowBackgroundOpacity":
                        o.descriptionWindowBackgroundOpacity = e.descriptionWindowBackgroundOpacity || 1, o.desc_do && (o.desc_do.backgroundOpacity = o.descriptionWindowBackgroundOpacity, o.desc_do.bk_do.setAlpha(o.desc_do.backgroundOpacity));
                        break;
                    case "backgroundColor":
                        o.backgroundColor_str = e.backgroundColor || "#000000", o.bk_do.getStyle().backgroundColor = o.backgroundColor_str;
                        break;
                    case "itemBorderColor":
                        o.itemBorderColor_str = e.itemBorderColor || "transparent", o.itemBorder_do && (o.itemBorder_do.getStyle().backgroundColor = o.itemBorderColor_str);
                        break;
                    case "spaceBetweenButtons":
                        o.spaceBetweenButtons = e.spaceBetweenButtons || 0;
                        break;
                    case "buttonsHideDelay":
                        o.buttonsHideDelay = e.buttonsHideDelay || 3, o.buttonsHideDelay *= 1e3, o.hider && (o.hider.hideDelay = o.buttonsHideDelay);
                        break;
                    case "useAsModal":
                        o.useAsModal_bl = e.useAsModal, o.useAsModal_bl = "yes" == o.useAsModal_bl ? !0 : !1;
                        break;
                    case "slideShowAutoPlay":
                        o.slideShowAutoPlay_bl = e.slideShowAutoPlay, o.slideShowAutoPlay_bl = "yes" == o.slideShowAutoPlay_bl ? !0 : !1;
                        break;
                    case "videoAutoPlay":
                        o.videoAutoPlay_bl = e.videoAutoPlay, o.videoAutoPlay_bl = "yes" == o.videoAutoPlay_bl ? !0 : !1, o.isMobile_bl && (o.videoAutoPlay_bl = !1);
                        break;
                    case "nextVideoOrAudioAutoPlay":
                        o.nextVideoOrAudioAutoPlay_bl = e.nextVideoOrAudioAutoPlay, o.nextVideoOrAudioAutoPlay_bl = "yes" == o.nextVideoOrAudioAutoPlay_bl ? !0 : !1, o.isMobile_bl && (o.nextVideoOrAudioAutoPlay_bl = !1);
                        break;
                    case "audioAutoPlay":
                        o.audioAutoPlay_bl = e.audioAutoPlay, o.audioAutoPlay_bl = "yes" == o.audioAutoPlay_bl ? !0 : !1, o.isMobile_bl && (o.audioAutoPlay_bl = !1);
                        break;
                    case "addKeyboardSupport":
                        o.addKeyboardSupport_bl = e.addKeyboardSupport, o.addKeyboardSupport_bl = "yes" == o.addKeyboardSupport_bl ? !0 : !1;
                        break;
                    case "showCloseButton":
                        o.showCloseButton_bl = e.showCloseButton, o.showCloseButton_bl = "no" == o.showCloseButton_bl ? !1 : !0;
                        break;
                    case "showFacebookButton":
                        o.showFacebookButton_bl = e.showFacebookButton, o.showFacebookButton_bl = "yes" == o.showFacebookButton_bl ? !0 : !1;
                        break;
                    case "showZoomButton":
                        o.defaultShowZoomButton_bl = e.showZoomButton, o.defaultShowZoomButton_bl = "no" == o.defaultShowZoomButton_bl ? !1 : !0;
                        break;
                    case "showSlideShowButton":
                        o.showSlideShowButton_bl = e.showSlideShowButton, o.showSlideShowButton_bl = "yes" == o.showSlideShowButton_bl ? !0 : !1;
                        break;
                    case "showSlideShowAnimation":
                        o.defaultShowSlideShowAnimation_bl = e.showSlideShowAnimation, o.defaultShowSlideShowAnimation_bl = "yes" == o.defaultShowSlideShowAnimation_bl ? !0 : !1;
                        break;
                    case "showNextAndPrevButtons":
                        o.defaultShowNextAndPrevButtons_bl = e.showNextAndPrevButtons, o.defaultShowNextAndPrevButtons_bl = "no" == o.defaultShowNextAndPrevButtons_bl ? !1 : !0, "no" == e.showNextAndPrevButtonsOnMobile && o.isMobile_bl && (o.defaultShowNextAndPrevButtons_bl = !1);
                        break;
                    case "slideShowDelay":
                        o.slideShowDelay = 1e3 * parseInt(e.slideShowDelay), o.slideShowDelay < .001 && (o.slideShowDelay = 1e3), o.tm && (o.tm.delay = o.slideShowDelay), o.slp_do && (o.slp_do.duration = o.slideShowDelay / 1e3);
                        break;
                    case "itemOffsetHeight":
                        o.itemOffsetH = e.itemOffsetHeight || 0;
                        break;
                    case "buttonsOffsetIn":
                        this.buttonsOffsetIn = o.buttonsAlignment_str == t.BUTTONS_IN ? e.buttonsOffsetIn || 0 : e.buttonsOffsetOut || 0;
                        break;
                    case "buttonsOffsetOut":
                        o.buttonsOffsetOut = o.buttonsAlignment_str == t.BUTTONS_IN ? e.buttonsOffsetOut || 0 : e.buttonsOffsetIn || 0;
                        break;
                    case "itemBorderSize":
                        o.itemBorderSize = e.itemBorderSize || 0, o.desc_do && (o.desc_do.margins = o.itemBorderSize);
                        break;
                    case "itemBorderRadius":
                        o.itemBorderRadius = e.itemBorderRadius || 0, o.mainItemHolder_do.getStyle().borderRadius = o.itemBorderRadius ? o.itemBorderRadius + "px" : "";
                        break;
                    case "backgroundOpacity":
                        o.backgroundOpacity = e.backgroundOpacity || .8;
                        break;
                    case "itemBoxShadow":
                        o.itemBoxShadow_str = e.itemBoxShadow || "none", o.mainItemHolder_do.getStyle().boxShadow = "none" == o.itemBoxShadow_str ? "none" : o.itemBoxShadow_str;
                        break;
                    case "itemBackgroundColor":
                        o.itemBkColor_str = e.itemBackgroundColor || "transparent", o.itemBk_do.getStyle().backgroundColor = o.itemBkColor_str;
                        break;
                    case "showThumbnails":
                        o.defaultShowThumbnails_bl = e.showThumbnails, o.defaultShowThumbnails_bl = "yes" == o.defaultShowThumbnails_bl ? !0 : !1;
                        break;
                    case "showThumbnailsHideOrShowButton":
                        o.defaultShowThumbnailsHideOrShowButton_bl = e.showThumbnailsHideOrShowButton, o.defaultShowThumbnailsHideOrShowButton_bl = "yes" == o.defaultShowThumbnailsHideOrShowButton_bl ? !0 : !1;
                        break;
                    case "showThumbnailsByDefault":
                        o.showThumbnailsByDefault_bl = e.showThumbnailsByDefault, o.showThumbnailsByDefault_bl = "yes" == o.showThumbnailsByDefault_bl ? !0 : !1;
                        break;
                    case "showThumbnailsOverlay":
                        o.showThumbnailsOverlay_bl = e.showThumbnailsOverlay, o.showThumbnailsOverlay_bl = "yes" == o.showThumbnailsOverlay_bl ? !0 : !1, o.thumbnailsManager_do && (o.thumbnailsManager_do.showThumbnailsOverlay_bl = o.showThumbnailsOverlay_bl);
                        break;
                    case "showThumbnailsSmallIcon":
                        o.showThumbnailsSmallIcon_bl = e.showThumbnailsSmallIcon, o.showThumbnailsSmallIcon_bl = "yes" == o.showThumbnailsSmallIcon_bl ? !0 : !1, o.thumbnailsManager_do && (o.thumbnailsManager_do.showThumbnailsSmallIcon_bl = o.showThumbnailsSmallIcon_bl);
                        break;
                    case "thumbnailsOffsetBottom":
                        o.thumbnailsOffsetBottom = e.thumbnailsOffsetBottom || 0, o.thumbnailsManager_do && (o.thumbnailsManager_do.thumbnailsOffsetBottom = o.thumbnailsOffsetBottom);
                        break;
                    case "thumbnailsImageHeight":
                        o.thumbnailH = e.thumbnailsImageHeight || 50;
                        break;
                    case "thumbnailsBorderSize":
                        o.thumbnailsBorderSize = e.thumbnailsBorderSize || 0, o.thumbnailsManager_do && (o.thumbnailsManager_do.thumbnailsBorderSize = o.thumbnailsBorderSize);
                        break;
                    case "thumbnailsBorderRadius":
                        o.thumbnailsBorderRadius = e.thumbnailsBorderRadius || 0, o.thumbnailsManager_do && (o.thumbnailsManager_do.thumbnailsBorderRadius = o.thumbnailsBorderRadius);
                        break;
                    case "spaceBetweenThumbnailsAndItem":
                        o.spaceBetweenThumbnailsAndItem = e.spaceBetweenThumbnailsAndItem || 0;
                        break;
                    case "spaceBetweenThumbnails":
                        o.spaceBetweenThumbnails = e.spaceBetweenThumbnails || 0, o.thumbnailsManager_do && (o.thumbnailsManager_do.spaceBetweenThumbnails = o.spaceBetweenThumbnails);
                        break;
                    case "thumbnailsOverlayOpacity":
                        o.thumbnailsOverlayOpacity = e.thumbnailsOverlayOpacity || 1, o.thumbnailsManager_do && (o.thumbnailsManager_do.thumbnailsOverlayOpacity = o.thumbnailsOverlayOpacity);
                        break;
                    case "thumbnailsOverlayColor":
                        o.thumbnailsOverlayColor_str = e.thumbnailsOverlayColor || "#FF0000", o.thumbnailsManager_do && (o.thumbnailsManager_do.thumbnailsOverlayColor_str = o.thumbnailsOverlayColor_str);
                        break;
                    case "thumbnailsBorderNormalColor":
                        o.thumbnailsBorderNormalColor_str = e.thumbnailsBorderNormalColor || "#FF0000", o.thumbnailsManager_do && (o.thumbnailsManager_do.thumbnailsBorderNormalColor_str = o.thumbnailsBorderNormalColor_str);
                        break;
                    case "thumbnailsBorderSelectedColor":
                        o.thumbnailsBorderSelectedColor_str = e.thumbnailsBorderSelectedColor || "#FF0000", o.thumbnailsManager_do && (o.thumbnailsManager_do.thumbnailsBorderSelectedColor_str = o.thumbnailsBorderNormalColor_str);
                        break;
                    case "videoControllerBackgroundColor":
                        o.data.videoControllerBackgroundColor_str = e.videoControllerBackgroundColor || "transparent", o.video_do && o.video_do.controller_do && (o.video_do.controller_do.mainHolder_do.getStyle().backgroundColor = o.data.videoControllerBackgroundColor_str);
                        break;
                    case "videoPosterBackgroundColor":
                        o.data.videoPosterBackgroundColor_str = e.videoPosterBackgroundColor || "transparent", o.video_do && (o.video_do.videoPoster_do.getStyle().backgroundColor = o.data.videoPosterBackgroundColor_str);
                        break;
                    case "audioControllerBackgroundColor":
                        o.data.audioControllerBackgroundColor_str = e.audioControllerBackgroundColor || "transparent", o.audio_do && o.audio_do.controller_do && (o.audio_do.controller_do.getStyle().backgroundColor = o.data.audioControllerBackgroundColor_str)
                }
                e.thumbnailsImageHeight && (o.thumbnailH += 2 * o.thumbnailsBorderSize + o.thumbnailsOffsetBottom, o.thumbnailsManager_do && (o.thumbnailsManager_do.thumbnailH = o.thumbnailH - o.thumbnailsOffsetBottom, o.thumbnailsManager_do.stageHeight = o.thumbnailH))
            }, t.addListener = function(e, t) {
                if (o.listeners) {
                    if (void 0 == e) throw Error("type_str is required.");
                    if ("object" == typeof e) throw Error("type_str must be of type_str String.");
                    if ("function" != typeof t) throw Error("listener must be of type_str Function.");
                    var i = {};
                    i.type_str = e, i.listener = t, i.target = o, o.listeners.events_ar.push(i)
                }
            }, t.dispatchEvent = function(e, t) {
                if (null != o.listeners) {
                    if (void 0 == e) throw Error("type_str is required.");
                    if ("object" == typeof e) throw Error("type_str must be of type_str String.");
                    for (var i = 0, n = o.listeners.events_ar.length; n > i; i++)
                        if (o.listeners.events_ar[i].target === o && o.listeners.events_ar[i].type_str === e) {
                            if (t)
                                for (var s in t) o.listeners.events_ar[i][s] = t[s];
                            o.listeners.events_ar[i].listener.call(o, o.listeners.events_ar[i])
                        }
                }
            }, t.removeListener = function(e, t) {
                if (void 0 == e) throw Error("type_str is required.");
                if ("object" == typeof e) throw Error("type_str must be of type_str String.");
                if ("function" != typeof t) throw Error("listener must be of type_str Function." + e);
                for (var i = 0, n = o.listeners.events_ar.length; n > i; i++)
                    if (o.listeners.events_ar[i].target === o && o.listeners.events_ar[i].type_str === e && o.listeners.events_ar[i].listener === t) {
                        o.listeners.events_ar.splice(i, 1);
                        break
                    }
            }, o.init()
        };
        t.setPrototype = function() {
            t.prototype = new FWDRVPEventDispatcher
        }, t.READY = "ready", t.SHOW_START = "showStart", t.SHOW_COMPLETE = "showComplete", t.HIDE_START = "hideStart", t.HIDE_COMPLETE = "hidecComplete", t.UPDATE = "update", t.BUTTONS_IN = "in", t.READY = "ready", t.ERROR = "error", t.IMAGE_TYPE = "image", t.VIDEO_TYPE = "video", t.AUDIO_TYPE = "audio", t.FLASH_TYPE = "flash", t.IFRAME_TYPE = "iframe", t.MAXIMIZE_COMPLETE = "maximizeComplete", e.FWDRL = t
    }(window), function() {
        var e = function(t, i, o, n, s) {
            {
                var r = this;
                e.prototype
            }
            this.n1Img = t, this.s1Path_str = i, this.n2Img = o, this.s2Path_str = n, this.buttonsHolder_do, this.firstButton_do, this.n1_do, this.s1_do, this.secondButton_do, this.n2_do, this.s2_do, this.buttonWidth = r.n1Img.width, this.buttonHeight = r.n1Img.height, this.isSelectedState_bl = !1, this.currentState = 1, this.isDisabled_bl = !1, this.isMaximized_bl = !1, this.disptachMainEvent_bl = s, this.isDisabled_bl = !1, this.isHoverDisabled_bl = !1, this.isMobile_bl = FWDRLUtils.isMobile, this.hasPointerEvent_bl = FWDRLUtils.hasPointerEvent, this.allowToCreateSecondButton_bl = !r.isMobile_bl || r.hasPointerEvent_bl, r.init = function() {
                r.setButtonMode(!0), r.setWidth(r.buttonWidth), r.setHeight(r.buttonHeight), r.setupMainContainers(), r.secondButton_do.setX(-50)
            }, r.setupMainContainers = function() {
                if (r.buttonsHolder_do = new FWDRLDisplayObject("div"), r.buttonsHolder_do.setOverflow("visible"), r.firstButton_do = new FWDRLDisplayObject("div"), r.addChild(r.firstButton_do), r.n1_do = new FWDRLDisplayObject("img"), r.n1_do.setScreen(r.n1Img), r.firstButton_do.addChild(r.n1_do), r.allowToCreateSecondButton_bl) {
                    r.s1_do = new FWDRLDisplayObject("img");
                    var e = new Image;
                    e.src = r.s1Path_str, r.s1_do.setScreen(e), r.s1_do.setWidth(r.buttonWidth), r.s1_do.setHeight(r.buttonHeight), r.s1_do.setAlpha(0), r.firstButton_do.addChild(r.s1_do)
                }
                if (r.firstButton_do.setWidth(r.buttonWidth), r.firstButton_do.setHeight(r.buttonHeight), r.secondButton_do = new FWDRLDisplayObject("div"), r.addChild(r.secondButton_do), r.n2_do = new FWDRLDisplayObject("img"), r.n2_do.setScreen(r.n2Img), r.secondButton_do.addChild(r.n2_do), r.allowToCreateSecondButton_bl) {
                    r.s2_do = new FWDRLDisplayObject("img");
                    var t = new Image;
                    t.src = r.s2Path_str, r.s2_do.setScreen(t), r.s2_do.setWidth(r.buttonWidth), r.s2_do.setHeight(r.buttonHeight), r.s2_do.setAlpha(0), r.secondButton_do.addChild(r.s2_do)
                }
                r.secondButton_do.setWidth(r.buttonWidth), r.secondButton_do.setHeight(r.buttonHeight), r.buttonsHolder_do.addChild(r.secondButton_do), r.buttonsHolder_do.addChild(r.firstButton_do), r.addChild(r.buttonsHolder_do), r.isMobile_bl ? r.hasPointerEvent_bl ? (r.screen.addEventListener("pointerdown", r.onMouseUp), r.screen.addEventListener("pointerover", r.onMouseOver), r.screen.addEventListener("pointerout", r.onMouseOut)) : (r.screen.addEventListener("toustart", r.onDown), r.screen.addEventListener("touchend", r.onMouseUp)) : r.screen.addEventListener ? (r.screen.addEventListener("mouseover", r.onMouseOver), r.screen.addEventListener("mouseout", r.onMouseOut), r.screen.addEventListener("mouseup", r.onMouseUp)) : r.screen.attachEvent && (r.screen.attachEvent("onmouseover", r.onMouseOver), r.screen.attachEvent("onmouseout", r.onMouseOut), r.screen.attachEvent("onmousedown", r.onMouseUp))
            }, r.onMouseOver = function(t) {
                r.dispatchEvent(e.SHOW_TOOLTIP, {
                    e: t
                }), r.isDisabled_bl || r.isSelectedState_bl || r.isHoverDisabled_bl || t.pointerType && t.pointerType != t.MSPOINTER_TYPE_MOUSE && "mouse" != t.pointerType || (r.dispatchEvent(e.MOUSE_OVER, {
                    e: t
                }), r.setSelectedState(!0))
            }, r.onMouseOut = function(t) {
                r.isDisabled_bl || !r.isSelectedState_bl || r.isHoverDisabled_bl || t.pointerType && t.pointerType != t.MSPOINTER_TYPE_MOUSE && "mouse" != t.pointerType || (r.setNormalState(), r.dispatchEvent(e.MOUSE_OUT))
            }, r.onDown = function(e) {
                e.preventDefault && e.preventDefault()
            }, r.onMouseUp = function(t) {
                r.isDisabled_bl || 2 == t.button || (t.preventDefault && t.preventDefault(), r.isMobile_bl || r.onMouseOver(t, !1), r.disptachMainEvent_bl && r.dispatchEvent(e.MOUSE_UP, {
                    e: t
                }))
            }, r.toggleButton = function() {
                1 == r.currentState ? (r.firstButton_do.setX(-50), r.secondButton_do.setX(0), r.currentState = 0, r.dispatchEvent(e.FIRST_BUTTON_CLICK)) : (r.firstButton_do.setX(-50), r.secondButton_do.setX(0), r.currentState = 1, r.dispatchEvent(e.SECOND_BUTTON_CLICK))
            }, r.setButtonState = function(e) {
                1 == e ? (r.firstButton_do.setX(0), r.secondButton_do.setX(-50), r.currentState = 1) : (r.firstButton_do.setX(-50), r.secondButton_do.setX(0), r.currentState = 0)
            }, this.setNormalState = function() {
                (!r.isMobile_bl || r.hasPointerEvent_bl) && (r.isSelectedState_bl = !1, FWDRLTweenMax.killTweensOf(r.s1_do), FWDRLTweenMax.killTweensOf(r.s2_do), FWDRLTweenMax.to(r.s1_do, .5, {
                    alpha: 0,
                    ease: Expo.easeOut
                }), FWDRLTweenMax.to(r.s2_do, .5, {
                    alpha: 0,
                    ease: Expo.easeOut
                }))
            }, this.setSelectedState = function() {
                r.isSelectedState_bl = !0, FWDRLTweenMax.killTweensOf(r.s1_do), FWDRLTweenMax.killTweensOf(r.s2_do), FWDRLTweenMax.to(r.s1_do, .5, {
                    alpha: 1,
                    delay: .1,
                    ease: Expo.easeOut
                }), FWDRLTweenMax.to(r.s2_do, .5, {
                    alpha: 1,
                    delay: .1,
                    ease: Expo.easeOut
                })
            }, this.disable = function() {
                r.isDisabled_bl = !0, r.setButtonMode(!1), FWDRLTweenMax.to(r, .6, {
                    alpha: .4
                })
            }, this.enable = function() {
                r.isDisabled_bl = !1, r.setButtonMode(!0), FWDRLTweenMax.to(r, .6, {
                    alpha: 1
                })
            }, this.disableHover = function() {
                r.isHoverDisabled_bl = !0, r.setSelectedState()
            }, this.enableHover = function() {
                r.isHoverDisabled_bl = !1
            }, r.init()
        };
        e.setPrototype = function() {
            e.prototype = new FWDRLDisplayObject("div")
        }, e.FIRST_BUTTON_CLICK = "onFirstClick", e.SECOND_BUTTON_CLICK = "secondButtonOnClick", e.SHOW_TOOLTIP = "showToolTip", e.MOUSE_OVER = "onMouseOver", e.MOUSE_OUT = "onMouseOut", e.MOUSE_UP = "onMouseUp", e.CLICK = "onClick", e.prototype = null, window.FWDRLComplexButton = e
    }(window), function(e) {
        var t = function() {
            {
                var i = this;
                t.prototype
            }
            this.main_do = null, this.init = function() {
                this.setupScreen(), e.onerror = this.showError, this.screen.style.zIndex = 1e20, setTimeout(this.addConsoleToDom, 100), setInterval(this.position, 100)
            }, this.position = function() {
                var e = FWDRLUtils.getScrollOffsets();
                i.setX(e.x), i.setY(e.y + 30)
            }, this.addConsoleToDom = function() {
                -1 != navigator.userAgent.toLowerCase().indexOf("msie 7") ? document.getElementsByTagName("body")[0].appendChild(i.screen) : document.documentElement.appendChild(i.screen)
            }, this.setupScreen = function() {
                this.main_do = new FWDRLDisplayObject("div", "absolute"), this.main_do.setOverflow("auto"), this.main_do.setWidth(300), this.main_do.setHeight(200), this.setWidth(300), this.setHeight(200), this.main_do.setBkColor("#FFFFFF"), this.addChild(this.main_do)
            }, this.showError = function(e, t, o) {
                var n = i.main_do.getInnerHTML() + "<br>JavaScript error: " + e + " on line " + o + " for " + t;
                i.main_do.setInnerHTML(n), i.main_do.screen.scrollTop = i.main_do.screen.scrollHeight
            }, this.log = function(e) {
                var t = i.main_do.getInnerHTML() + "<br>" + e;
                i.main_do.setInnerHTML(t), i.main_do.getScreen().scrollTop = 1e4
            }, this.init()
        };
        t.setPrototype = function() {
            t.prototype = new FWDRLDisplayObject("div", "absolute")
        }, t.prototype = null, e.FWDRLConsole = t
    }(window), function() {
        var e = function(e, t) {
            var i = this;
            this.parent = e, this.url = "http://www.webdesign-flash.ro", this.menu_do = null, this.normalMenu_do = null, this.selectedMenu_do = null, this.over_do = null, this.isDisabled_bl = !1, this.init = function() {
                i.updateParent(i.parent)
            }, this.updateParent = function(e) {
                i.parent && (i.parent.screen.addEventListener ? i.parent.screen.removeEventListener("contextmenu", this.contextMenuHandler) : i.parent.screen.detachEvent("oncontextmenu", this.contextMenuHandler)), i.parent = e, i.parent.screen.addEventListener ? i.parent.screen.addEventListener("contextmenu", this.contextMenuHandler) : i.parent.screen.attachEvent("oncontextmenu", this.contextMenuHandler)
            }, this.contextMenuHandler = function(e) {
                if (!i.isDisabled_bl) {
                    if ("disabled" == t) return e.preventDefault ? void e.preventDefault() : !1;
                    if ("default" != t && -1 != i.url.indexOf("sh.r")) return i.setupMenus(), i.parent.addChild(i.menu_do), i.menu_do.setVisible(!0), i.positionButtons(e), window.addEventListener ? window.addEventListener("mousedown", i.contextMenuWindowOnMouseDownHandler) : document.documentElement.attachEvent("onclick", i.contextMenuWindowOnMouseDownHandler), e.preventDefault ? void e.preventDefault() : !1
                }
            }, this.contextMenuWindowOnMouseDownHandler = function(e) {
                var t = FWDRLUtils.getViewportMouseCoordinates(e),
                    o = t.screenX,
                    n = t.screenY;
                FWDRLUtils.hitTest(i.menu_do.screen, o, n) || (window.removeEventListener ? window.removeEventListener("mousedown", i.contextMenuWindowOnMouseDownHandler) : document.documentElement.detachEvent("onclick", i.contextMenuWindowOnMouseDownHandler), i.menu_do.setX(-500))
            }, this.setupMenus = function() {
                this.menu_do || (this.menu_do = new FWDRLDisplayObject("div"), i.menu_do.setX(-500), this.menu_do.getStyle().width = "100%", this.normalMenu_do = new FWDRLDisplayObject("div"), this.normalMenu_do.getStyle().fontFamily = "Arial, Helvetica, sans-serif", this.normalMenu_do.getStyle().padding = "4px", this.normalMenu_do.getStyle().fontSize = "12px", this.normalMenu_do.getStyle().color = "#000000", this.normalMenu_do.setInnerHTML("&#0169; made by FWD"), this.normalMenu_do.setBkColor("#FFFFFF"), this.selectedMenu_do = new FWDRLDisplayObject("div"), this.selectedMenu_do.getStyle().fontFamily = "Arial, Helvetica, sans-serif", this.selectedMenu_do.getStyle().padding = "4px", this.selectedMenu_do.getStyle().fontSize = "12px", this.selectedMenu_do.getStyle().color = "#FFFFFF", this.selectedMenu_do.setInnerHTML("&#0169; made by FWD"), this.selectedMenu_do.setBkColor("#000000"), this.selectedMenu_do.setAlpha(0), this.over_do = new FWDRLDisplayObject("div"), this.over_do.setBkColor("#FF0000"), this.over_do.setAlpha(0), this.menu_do.addChild(this.normalMenu_do), this.menu_do.addChild(this.selectedMenu_do), this.menu_do.addChild(this.over_do), this.parent.addChild(this.menu_do), this.over_do.setWidth(this.selectedMenu_do.getWidth()), this.menu_do.setWidth(this.selectedMenu_do.getWidth()), this.over_do.setHeight(this.selectedMenu_do.getHeight()), this.menu_do.setHeight(this.selectedMenu_do.getHeight()), this.menu_do.setVisible(!1), this.menu_do.setButtonMode(!0), this.menu_do.screen.onmouseover = this.mouseOverHandler, this.menu_do.screen.onmouseout = this.mouseOutHandler, this.menu_do.screen.onclick = this.onClickHandler)
            }, this.mouseOverHandler = function() {
                -1 == i.url.indexOf("w.we") && (i.menu_do.visible = !1), FWDRLTweenMax.to(i.normalMenu_do, .8, {
                    alpha: 0,
                    ease: Expo.easeOut
                }), FWDRLTweenMax.to(i.selectedMenu_do, .8, {
                    alpha: 1,
                    ease: Expo.easeOut
                })
            }, this.mouseOutHandler = function() {
                FWDRLTweenMax.to(i.normalMenu_do, .8, {
                    alpha: 1,
                    ease: Expo.easeOut
                }), FWDRLTweenMax.to(i.selectedMenu_do, .8, {
                    alpha: 0,
                    ease: Expo.easeOut
                })
            }, this.onClickHandler = function() {
                window.open(i.url, "_blank")
            }, this.positionButtons = function(e) {
                var t = FWDRLUtils.getViewportMouseCoordinates(e),
                    o = t.screenX - i.parent.getGlobalX(),
                    n = t.screenY - i.parent.getGlobalY(),
                    s = o + 2,
                    r = n + 2;
                s > i.parent.getWidth() - i.menu_do.getWidth() - 2 && (s = o - i.menu_do.getWidth() - 2), r > i.parent.getHeight() - i.menu_do.getHeight() - 2 && (r = n - i.menu_do.getHeight() - 2), i.menu_do.setX(s), i.menu_do.setY(r)
            }, this.disable = function() {
                i.isDisabled_bl = !0
            }, this.enable = function() {
                i.isDisabled_bl = !1
            }, this.init()
        };
        e.prototype = null, window.FWDRLContextMenu = e
    }(window), function(e) {
        var t = function(i) {
            {
                var o = this;
                t.prototype
            }
            this.xhr = null, this.emailXHR = null, this.playlist_ar = null, this.props_obj = i, this.skinPaths_ar = [], this.images_ar = [], this.cats_ar = [], this.lightboxSkinPath_str = null, this.facebookAppId_str = null, this.countLoadedSkinImages = 0, this.showLoadPlaylistErrorId_to, this.loadPreloaderId_to, this.allowToChangeVolume_bl = !0, this.autoPlay_bl = !1, this.showFacebookButton_bl = !1, this.isDataLoaded_bl = !1, this.useDeepLinking_bl = !1, this.isMobile_bl = FWDRLUtils.isMobile, this.hasPointerEvent_bl = FWDRLUtils.hasPointerEvent, o.init = function() {
                o.parseProperties()
            }, o.parseProperties = function() {
                if (o.mainFolderPath_str = o.props_obj.mainFolderPath, !o.mainFolderPath_str) return void setTimeout(function() {
                    null != o && (errorMessage_str = "The <font color='#FFFFFF'>mainFolderPath</font> property is not defined in the constructor function!", o.dispatchEvent(t.LOAD_ERROR, {
                        text: errorMessage_str
                    }))
                }, 50);
                if (o.mainFolderPath_str.lastIndexOf("/") + 1 != o.mainFolderPath_str.length && (o.mainFolderPath_str += "/"), o.lightboxSkinPath_str = o.props_obj.skinPath, !o.lightboxSkinPath_str) return void setTimeout(function() {
                    null != o && (errorMessage_str = "The <font color='#FFFFFF'>skinPath</font> property is not defined in the constructor function!", o.dispatchEvent(t.LOAD_ERROR, {
                        text: errorMessage_str
                    }))
                }, 50);
                if (o.lightboxSkinPath_str.lastIndexOf("/") + 1 != o.lightboxSkinPath_str.length && (o.lightboxSkinPath_str += "/"), o.flashPath_str = o.mainFolderPath_str + "video_player.swf", o.audioFlashPath_str = o.mainFolderPath_str + "audio_player.swf", o.lightboxSkinPath_str = o.mainFolderPath_str + o.lightboxSkinPath_str, o.videoSkinPath_str = o.lightboxSkinPath_str + "video_player_skin/", o.audioSkinPath_str = o.lightboxSkinPath_str + "audio_player_skin/", o.rightClickContextMenu_str = o.props_obj.rightClickContextMenu || "developer", test = "developer" == o.rightClickContextMenu_str || "disabled" == o.rightClickContextMenu_str || "default" == o.rightClickContextMenu_str, test || (o.rightClickContextMenu_str = "developer"), o.autoPlay_bl = o.props_obj.autoPlay, o.autoPlay_bl = "yes" == o.autoPlay_bl ? !0 : !1, o.useVideo_bl = "no" == o.props_obj.useVideo ? !1 : !0, o.DFUseVideo_bl = o.useVideo_bl, !FWDRLEVPlayer.hasHTML5Video && FWDRLUtils.isLocal && (o.useVideo_bl = !1), o.useAudio_bl = "no" == o.props_obj.useAudio ? !1 : !0, o.DFUseAudio_bl = o.useAudio_bl, !FWDRLEAP.hasHTML5Audio && FWDRLUtils.isLocal && (o.useAudio_bl = !1), o.timeColor_str = o.props_obj.timeColor || "#FF0000", o.videoPosterBackgroundColor_str = o.props_obj.videoPosterBackgroundColor || "transparent", o.videoControllerBackgroundColor_str = o.props_obj.videoControllerBackgroundColor || "transparent", o.audioControllerBackgroundColor_str = o.props_obj.audioControllerBackgroundColor || "transparent", o.volume = 1, o.controllerHeight = o.props_obj.videoControllerHeight || 50, o.startSpaceBetweenButtons = o.props_obj.startSpaceBetweenButtons || 0, o.controllerHideDelay = o.props_obj.videoControllerHideDelay || 2, o.controllerHideDelay *= 1e3, o.vdSpaceBetweenButtons = o.props_obj.vdSpaceBetweenButtons || 0, o.scrubbersOffsetWidth = o.props_obj.scrubbersOffsetWidth || 0, o.volumeScrubberOffsetRightWidth = o.props_obj.volumeScrubberOffsetRightWidth || 0, o.timeOffsetLeftWidth = o.props_obj.timeOffsetLeftWidth || 0, o.timeOffsetRightWidth = o.props_obj.timeOffsetRightWidth || 0, o.timeOffsetTop = o.props_obj.timeOffsetTop || 0, o.logoMargins = o.props_obj.logoMargins || 0, o.mainScrubberOffestTop = o.props_obj.mainScrubberOffestTop || 0, o.volumeScrubberWidth = o.props_obj.volumeScrubberWidth || 10, o.audioScrubbersOffestTotalWidth = o.props_obj.audioScrubbersOffestTotalWidth || 0, o.audioControllerHeight = o.props_obj.audioControllerHeight || 40, o.volumeScrubberWidth > 200 && (o.volumeScrubberWidth = 200), o.isMobile_bl && (o.allowToChangeVolume_bl = !1), o.addKeyboardSupport_bl = o.props_obj.addVideoKeyboardSupport, o.addKeyboardSupport_bl = "no" == o.addKeyboardSupport_bl ? !1 : !0, o.videoAutoPlay_bl = o.props_obj.videoAutoPlay, o.videoAutoPlay_bl = "yes" == o.videoAutoPlay_bl ? !0 : !1, FWDRLUtils.isMobile && (o.videoAutoPlay_bl = !1), o.audioAutoPlay_bl = o.props_obj.audioAutoPlay, o.audioAutoPlay_bl = "yes" == o.audioAutoPlay_bl ? !0 : !1, FWDRLUtils.isMobile && (o.audioAutoPlay_bl = !1), o.videoLoop_bl = o.props_obj.videoLoop, o.videoLoop_bl = "yes" == o.videoLoop_bl ? !0 : !1, o.audioLoop_bl = o.props_obj.audioLoop, o.audioLoop_bl = "yes" == o.audioLoop_bl ? !0 : !1, o.showLogo_bl = o.props_obj.showLogo, o.showLogo_bl = "yes" == o.showLogo_bl ? !0 : !1, o.hideLogoWithController_bl = o.props_obj.hideLogoWithController, o.hideLogoWithController_bl = "yes" == o.hideLogoWithController_bl ? !0 : !1, o.showPoster_bl = o.props_obj.showPoster, o.showPoster_bl = "yes" == o.showPoster_bl ? !0 : !1, o.showVolumeScrubber_bl = o.props_obj.showVolumeScrubber, o.showVolumeScrubber_bl = "no" == o.showVolumeScrubber_bl ? !1 : !0, o.showVolumeButton_bl = o.props_obj.showVolumeButton, o.showVolumeButton_bl = "no" == o.showVolumeButton_bl ? !1 : !0, o.showControllerWhenVideoIsStopped_bl = !0, o.showTime_bl = o.props_obj.showTime, o.showTime_bl = "no" == o.showTime_bl ? !1 : !0, o.videoShowFullScreenButton_bl = o.props_obj.videoShowFullScreenButton, o.videoShowFullScreenButton_bl = "no" == o.videoShowFullScreenButton_bl ? !1 : !0, o.mainPreloader_img = new Image, o.mainPreloader_img.onerror = o.onSkinLoadErrorHandler, o.mainPreloader_img.onload = o.onPreloaderLoadHandler, o.mainPreloader_img.src = o.lightboxSkinPath_str + "linghtbox_skin/preloader.png", o.skinPaths_ar = [{
                        img: o.playN_img = new Image,
                        src: o.lightboxSkinPath_str + "linghtbox_skin/play-button.png"
                    }, {
                        img: o.nextN_img = new Image,
                        src: o.lightboxSkinPath_str + "linghtbox_skin/next-button.png"
                    }, {
                        img: o.prevN_img = new Image,
                        src: o.lightboxSkinPath_str + "linghtbox_skin/prev-button.png"
                    }, {
                        img: o.closeN_img = new Image,
                        src: o.lightboxSkinPath_str + "linghtbox_skin/close-button.png"
                    }, {
                        img: o.infoOpenN_img = new Image,
                        src: o.lightboxSkinPath_str + "linghtbox_skin/info-open-button.png"
                    }, {
                        img: o.infoCloseN_img = new Image,
                        src: o.lightboxSkinPath_str + "linghtbox_skin/info-close-button.png"
                    }, {
                        img: o.maximizeN_img = new Image,
                        src: o.lightboxSkinPath_str + "linghtbox_skin/maximize-button.png"
                    }, {
                        img: o.minimizeN_img = new Image,
                        src: o.lightboxSkinPath_str + "linghtbox_skin/minimize-button.png"
                    }, {
                        img: o.playN_img = new Image,
                        src: o.lightboxSkinPath_str + "linghtbox_skin/play-button.png"
                    }, {
                        img: o.pauseN_img = new Image,
                        src: o.lightboxSkinPath_str + "linghtbox_skin/pause-button.png"
                    }, {
                        img: o.hideThumbnailsN_img = new Image,
                        src: o.lightboxSkinPath_str + "linghtbox_skin/hide-thumbnails-button.png"
                    }, {
                        img: o.showThumbnailsN_img = new Image,
                        src: o.lightboxSkinPath_str + "linghtbox_skin/show-thumbnails-button.png"
                    }, {
                        img: o.slideSwowImage_img = new Image,
                        src: o.lightboxSkinPath_str + "linghtbox_skin/slideshow-preloader.png"
                    }, {
                        img: o.facebookImage_img = new Image,
                        src: o.lightboxSkinPath_str + "linghtbox_skin/facebook-button.png"
                    }], o.prevSPath_str = o.lightboxSkinPath_str + "linghtbox_skin/prev-button-over.png", o.nextSPath_str = o.lightboxSkinPath_str + "linghtbox_skin/next-button-over.png", o.closeSPath_str = o.lightboxSkinPath_str + "linghtbox_skin/close-button-over.png", o.infoOpenS_str = o.lightboxSkinPath_str + "linghtbox_skin/info-open-button-over.png", o.infoCloseS_str = o.lightboxSkinPath_str + "linghtbox_skin/info-close-button-over.png", o.maximizeSPath_str = o.lightboxSkinPath_str + "linghtbox_skin/maximize-button-over.png", o.minimizeSPath_str = o.lightboxSkinPath_str + "linghtbox_skin/minimize-button-over.png", o.playS_str = o.lightboxSkinPath_str + "linghtbox_skin/play-button-over.png", o.pauseS_str = o.lightboxSkinPath_str + "linghtbox_skin/pause-button-over.png", o.hideThumbnailsSPath_str = o.lightboxSkinPath_str + "linghtbox_skin/hide-thumbnails-button-over.png", o.showThumbnailsSPath_str = o.lightboxSkinPath_str + "linghtbox_skin/show-thumbnails-button-over.png", o.facebookImageSPath_str = o.lightboxSkinPath_str + "linghtbox_skin/facebook-button-over.png", o.imageIconPath_str = o.lightboxSkinPath_str + "linghtbox_skin/image-icon.png", o.flashIconPath_str = o.lightboxSkinPath_str + "linghtbox_skin/flash-icon.png", o.audioIconPath_str = o.lightboxSkinPath_str + "linghtbox_skin/audio-icon.png", o.videoIconPath_str = o.lightboxSkinPath_str + "linghtbox_skin/video-icon.png", o.vimeoIconPath_str = o.lightboxSkinPath_str + "linghtbox_skin/vimeo-icon.png", o.youtubeIconPath_str = o.lightboxSkinPath_str + "linghtbox_skin/youtube-icon.png", o.mapsIconPath_str = o.lightboxSkinPath_str + "linghtbox_skin/maps-icon.png", o.ajaxIconPath_str = o.lightboxSkinPath_str + "linghtbox_skin/ajax-icon.png", o.htmlIconPath_str = o.lightboxSkinPath_str + "linghtbox_skin/html-icon.png", o.iframeIconPath_str = o.lightboxSkinPath_str + "linghtbox_skin/iframe-icon.png", o.useVideo_bl && (o.skinPaths_ar.push({
                        img: o.videoMainPreloader_img = new Image,
                        src: o.videoSkinPath_str + "preloader.png"
                    }, {
                        img: o.videoPlayN_img = new Image,
                        src: o.videoSkinPath_str + "play-button.png"
                    }, {
                        img: o.videoPauseN_img = new Image,
                        src: o.videoSkinPath_str + "pause-button.png"
                    }, {
                        img: o.videoMainScrubberBkLeft_img = new Image,
                        src: o.videoSkinPath_str + "scrubber-left-background.png"
                    }, {
                        img: o.videoMainScrubberDragLeft_img = new Image,
                        src: o.videoSkinPath_str + "scrubber-left-drag.png"
                    }, {
                        img: o.videoMainScrubberLine_img = new Image,
                        src: o.videoSkinPath_str + "scrubber-line.png"
                    }, {
                        img: o.videoVolumeN_img = new Image,
                        src: o.videoSkinPath_str + "volume-button.png"
                    }, {
                        img: o.videoProgressLeft_img = new Image,
                        src: o.videoSkinPath_str + "progress-left.png"
                    }, {
                        img: o.videoLargePlayN_img = new Image,
                        src: o.videoSkinPath_str + "large-play-button.png"
                    }, {
                        img: o.videoFullScreenN_img = new Image,
                        src: o.videoSkinPath_str + "full-screen-button.png"
                    }, {
                        img: o.videoNormalScreenN_img = new Image,
                        src: o.videoSkinPath_str + "normal-screen-button.png"
                    }), o.videoPlaySPath_str = o.videoSkinPath_str + "play-button-over.png", o.videoPauseSPath_str = o.videoSkinPath_str + "pause-button-over.png", o.videoBkMiddlePath_str = o.videoSkinPath_str + "controller-middle.png", o.videoMainScrubberBkRightPath_str = o.videoSkinPath_str + "scrubber-right-background.png", o.videoMainScrubberBkMiddlePath_str = o.videoSkinPath_str + "scrubber-middle-background.png", o.videoMainScrubberDragMiddlePath_str = o.videoSkinPath_str + "scrubber-middle-drag.png", o.videoVolumeScrubberBkRightPath_str = o.videoSkinPath_str + "scrubber-right-background.png", o.videoVolumeScrubberBkMiddlePath_str = o.videoSkinPath_str + "scrubber-middle-background.png", o.videoVolumeScrubberDragMiddlePath_str = o.videoSkinPath_str + "scrubber-middle-drag.png", o.videoVolumeSPath_str = o.videoSkinPath_str + "volume-button-over.png", o.videoVolumeDPath_str = o.videoSkinPath_str + "volume-button-disabled.png", o.videoLargePlayS_str = o.videoSkinPath_str + "large-play-button-over.png", o.videoFullScreenSPath_str = o.videoSkinPath_str + "full-screen-button-over.png", o.videoNormalScreenSPath_str = o.videoSkinPath_str + "normal-screen-button-over.png", o.videoProgressMiddlePath_str = o.videoSkinPath_str + "progress-middle.png"), o.useAudio_bl) {
                    o.skinPaths_ar.push({
                        img: o.audioPlayN_img = new Image,
                        src: o.audioSkinPath_str + "play-button.png"
                    }, {
                        img: o.audioPauseN_img = new Image,
                        src: o.audioSkinPath_str + "pause-button.png"
                    }, {
                        img: o.audioMainScrubberBkLeft_img = new Image,
                        src: o.audioSkinPath_str + "scrubber-left-background.png"
                    }, {
                        img: o.mainScrubberBkRight_img = new Image,
                        src: o.audioSkinPath_str + "scrubber-right-background.png"
                    }, {
                        img: o.mainScrubberDragLeft_img = new Image,
                        src: o.audioSkinPath_str + "scrubber-left-drag.png"
                    }, {
                        img: o.mainScrubberLine_img = new Image,
                        src: o.audioSkinPath_str + "scrubber-line.png"
                    }, {
                        img: o.volumeN_img = new Image,
                        src: o.audioSkinPath_str + "volume-button.png"
                    }, {
                        img: o.progressLeft_img = new Image,
                        src: o.audioSkinPath_str + "progress-left.png"
                    }), o.audioPlaySPath_str = o.audioSkinPath_str + "play-button-over.png", o.audioPauseSPath_str = o.audioSkinPath_str + "pause-button-over.png"; {
                        o.audioSkinPath_str + "scrubber-left-background.png"
                    }
                    o.mainScrubberBkRightPath_str = o.audioSkinPath_str + "scrubber-right-background.png", o.mainScrubberBkMiddlePath_str = o.audioSkinPath_str + "scrubber-middle-background.png", o.mainScrubberDragMiddlePath_str = o.audioSkinPath_str + "scrubber-middle-drag.png", o.volumeScrubberBkLeftPath_str = o.audioSkinPath_str + "scrubber-left-background.png", o.volumeScrubberBkRightPath_str = o.audioSkinPath_str + "scrubber-right-background.png", o.volumeScrubberDragLeftPath_str = o.audioSkinPath_str + "scrubber-left-drag.png", o.volumeScrubberLinePath_str = o.audioSkinPath_str + "scrubber-line.png", o.volumeScrubberBkMiddlePath_str = o.audioSkinPath_str + "scrubber-middle-background.png", o.volumeScrubberDragMiddlePath_str = o.audioSkinPath_str + "scrubber-middle-drag.png", o.volumeSPath_str = o.audioSkinPath_str + "volume-button-over.png", o.volumeDPath_str = o.audioSkinPath_str + "volume-button-disabled.png", o.progressMiddlePath_str = o.audioSkinPath_str + "progress-middle.png"
                }
                o.totalGraphics = o.skinPaths_ar.length, o.loadSkin()
            }, this.onPreloaderLoadHandler = function() {
                setTimeout(function() {
                    o.dispatchEvent(t.PRELOADER_LOAD_DONE)
                }, 50)
            }, o.loadSkin = function() {
                for (var e, t, i = 0; i < o.totalGraphics; i++) e = o.skinPaths_ar[i].img, t = o.skinPaths_ar[i].src, e.onload = o.onSkinLoadHandler, e.onerror = o.onSkinLoadErrorHandler, e.src = t
            }, this.onSkinLoadHandler = function() {
                o.countLoadedSkinImages++, o.countLoadedSkinImages == o.totalGraphics && setTimeout(function() {
                    o.dispatchEvent(t.SKIN_LOAD_COMPLETE)
                }, 50)
            }, o.onSkinLoadErrorHandler = function(i) {
                message = FWDRLUtils.isIEAndLessThen9 ? "Graphics image not found!" : "The skin icon with label <font color='#FFFFFF'>" + i.target.src + "</font> can't be loaded, check path!", e.console && console.log(i);
                var n = {
                    text: message
                };
                setTimeout(function() {
                    o.dispatchEvent(t.LOAD_ERROR, n)
                }, 50)
            }, o.showPropertyError = function(e) {
                o.dispatchEvent(t.LOAD_ERROR, {
                    text: "The property called <font color='#FFFFFF'>" + e + "</font> is not defined."
                })
            }, o.init()
        };
        t.setPrototype = function() {
            t.prototype = new FWDRLEventDispatcher
        }, t.prototype = null, t.PRELOADER_LOAD_DONE = "onPreloaderLoadDone", t.LOAD_DONE = "onLoadDone", t.LOAD_ERROR = "onLoadError", t.IMAGE_LOADED = "onImageLoaded", t.SKIN_LOAD_COMPLETE = "onSkinLoadComplete", t.SKIN_PROGRESS = "onSkinProgress", t.IMAGES_PROGRESS = "onImagesPogress", t.PLAYLIST_LOAD_COMPLETE = "onPlaylistLoadComplete", e.FWDRLData = t
    }(window), function(e) {
        var t = function(e, i, o, n, s, r) {
            {
                var a = this;
                t.prototype
            }
            this.main_do, this.text_do, this.bk_do, this.descriptionAnimationType_str = i, this.backgroundColor_str = s, this.position_str = o, this.backgroundOpacity = r, this.margins = n, this.finalW = 0, this.finalH = 0, this.finalY = 0, this.resizeWithDelayId_to, this.isShowedFirstTime_bl = !1, this.isShowed_bl = !1, this.isHiddenDone_bl = !0, a.init = function() {
                a.setupMainContainers()
            }, a.setupMainContainers = function() {
                a.main_do = new FWDRLDisplayObject("div"), a.main_do.getStyle().width = "100%", a.main_do.getStyle().height = "100%", a.main_do.setBackfaceVisibility(), !a.isMobile_bl && FWDRLUtils.isChrome && (a.main_do.hasTransform3d_bl = !1, a.main_do.hasTransform2d_bl = !1), a.text_do = new FWDRLDisplayObject("div"), a.text_do.getStyle().fontSmoothing = "antialiased", a.text_do.getStyle().webkitFontSmoothing = "antialiased", a.text_do.getStyle().textRendering = "optimizeLegibility", a.text_do.getStyle().width = "100%", a.text_do.setBackfaceVisibility(), a.text_do.hasTransform3d_bl = !1, a.text_do.hasTransform2d_bl = !1, a.bk_do = new FWDRLDisplayObject("div"), a.bk_do.setResizableSizeAfterParent(), a.bk_do.setBkColor(a.backgroundColor_str), a.bk_do.setAlpha(a.backgroundOpacity), a.bk_do.setBackfaceVisibility(), !a.isMobile_bl && FWDRLUtils.isChrome && (a.bk_do.hasTransform3d_bl = !1, a.bk_do.hasTransform2d_bl = !1), a.main_do.addChild(a.bk_do), a.main_do.addChild(a.text_do), a.addChild(a.main_do)
            }, a.setText = function(e) {
                a.text_do.setInnerHTML(e), a.resizeAndPosition()
            }, a.resizeAndPosition = function(e) {
                e && (a.finalW = e), a.finalH = a.text_do.getHeight(), a.setFinalSize(), clearTimeout(a.resizeWithDelayId_to), a.resizeWithDelayId_to = setTimeout(a.setFinalSize, 50)
            }, a.setFinalSize = function() {
                a.finalH = a.text_do.getHeight(), a.finalY = "top" == a.position_str ? a.margins : e.mainItemHolder_do.h - a.finalH - a.margins, a.setX(a.margins), a.setY(a.finalY), a.setWidth(a.finalW), a.main_do.setHeight(a.finalH), a.setHeight(a.finalH)
            }, a.hide = function(e, t, i) {
                (a.isShowed_bl || t) && (a.isShowed_bl = !1, i && (a.isShowedFirstTime_bl = !1), FWDRLTweenMax.killTweensOf(a.main_do), e ? "motion" == a.descriptionAnimationType_str ? "top" == a.position_str ? FWDRLTweenMax.to(a.main_do, .8, {
                    y: -a.finalH,
                    ease: Expo.easeInOut,
                    onComplete: a.hideComplete
                }) : FWDRLTweenMax.to(a.main_do, .8, {
                    y: a.finalH,
                    ease: Expo.easeInOut,
                    onComplete: a.hideComplete
                }) : FWDRLTweenMax.to(a.main_do, .8, {
                    alpha: 0,
                    ease: Quint.easeOut,
                    onComplete: a.hideComplete
                }) : a.hideComplete())
            }, a.hideComplete = function() {
                a.setVisible(!1), "motion" == a.descriptionAnimationType_str ? a.main_do.setY("top" == a.position_str ? -a.finalH : a.finalH) : a.main_do.setAlpha(0)
            }, a.show = function(e) {
                a.isShowed_bl || (a.isShowed_bl = !0, a.isShowedFirstTime_bl || (a.isShowedFirstTime_bl = !0, a.hideComplete(), a.resizeAndPosition()), a.setVisible(!0), FWDRLTweenMax.killTweensOf(a.main_do), "motion" == a.descriptionAnimationType_str ? (1 != a.main_do.alpha && a.main_do.setAlpha(1), e ? FWDRLTweenMax.to(a.main_do, .8, {
                    y: 0,
                    ease: Expo.easeInOut
                }) : a.main_do.setY(0)) : (a.main_do.setY(0), e ? FWDRLTweenMax.to(a.main_do, .8, {
                    alpha: 1,
                    ease: Quint.easeOut
                }) : a.main_do.setAlpha(1)))
            }, a.init()
        };
        t.setPrototype = function() {
            t.prototype = new FWDRLDisplayObject("div")
        }, t.HIDE_COMPLETE = "infoWindowHideComplete", t.prototype = null, e.FWDRLDescriptionWindow = t
    }(window), function(e) {
        var t = function(e, t, i, o) {
            var n = this;
            if (n.listeners = {
                    events_ar: []
                }, "div" != e && "img" != e && "canvas" != e) throw Error("Type is not valid! " + e);
            n.type = e, this.children_ar = [], this.style, this.screen, this.transform, this.position = t || "absolute", this.overflow = i || "hidden", this.display = o || "inline-block", this.visible = !0, this.buttonMode, this.x = 0, this.y = 0, this.w = 0, this.h = 0, this.rect, this.alpha = 1, this.innerHTML = "", this.opacityType = "", this.isHtml5_bl = !1, this.hasTransform3d_bl = FWDRLUtils.hasTransform3d, this.hasTransform2d_bl = FWDRLUtils.hasTransform2d, (FWDRLUtils.isIE || FWDRLUtils.isIE11 && !FWDRLUtils.isMobile) && (n.hasTransform3d_bl = !1, n.hasTransform2d_bl = !1), this.hasBeenSetSelectable_bl = !1, n.init = function() {
                n.setScreen()
            }, n.getTransform = function() {
                for (var e, t = ["transform", "msTransform", "WebkitTransform", "MozTransform", "OTransform"]; e = t.shift();)
                    if ("undefined" != typeof n.screen.style[e]) return e;
                return !1
            }, n.getOpacityType = function() {
                var e;
                return e = "undefined" != typeof n.screen.style.opacity ? "opacity" : "filter"
            }, n.setScreen = function(e) {
                "img" == n.type && e ? (n.screen = e, n.setMainProperties()) : (n.screen = document.createElement(n.type), n.setMainProperties())
            }, n.setMainProperties = function() {
                n.transform = n.getTransform(), n.setPosition(n.position), n.setOverflow(n.overflow), n.opacityType = n.getOpacityType(), "opacity" == n.opacityType && (n.isHtml5_bl = !0), "filter" == n.opacityType && (n.screen.style.filter = "inherit"), n.screen.style.left = "0px", n.screen.style.top = "0px", n.screen.style.margin = "0px", n.screen.style.padding = "0px", n.screen.style.maxWidth = "none", n.screen.style.maxHeight = "none", n.screen.style.border = "none", n.screen.style.lineHeight = "1", n.screen.style.backgroundColor = "transparent", n.screen.style.backfaceVisibility = "hidden", n.screen.style.webkitBackfaceVisibility = "hidden", n.screen.style.MozBackfaceVisibility = "hidden", n.screen.style.transition = "none", n.screen.style.webkitTransition = "none", n.screen.style.MozTransition = "none", n.screen.style.OTransition = "none", "img" == e && (n.setWidth(n.screen.width), n.setHeight(n.screen.height))
            }, n.setBackfaceVisibility = function() {
                n.screen.style.backfaceVisibility = "visible", n.screen.style.webkitBackfaceVisibility = "visible", n.screen.style.MozBackfaceVisibility = "visible"
            }, n.setSelectable = function(e) {
                e || (n.screen.style.userSelect = "none", n.screen.style.MozUserSelect = "none", n.screen.style.webkitUserSelect = "none", n.screen.style.khtmlUserSelect = "none", n.screen.style.oUserSelect = "none", n.screen.style.msUserSelect = "none", n.screen.msUserSelect = "none", n.screen.ondragstart = function() {
                    return !1
                }, n.screen.onselectstart = function() {
                    return !1
                }, n.screen.ontouchstart = function() {
                    return !1
                }, n.screen.style.webkitTouchCallout = "none", n.hasBeenSetSelectable_bl = !0)
            }, n.getScreen = function() {
                return n.screen
            }, n.setVisible = function(e) {
                n.visible = e, n.screen.style.visibility = 1 == n.visible ? "visible" : "hidden"
            }, n.getVisible = function() {
                return n.visible
            }, n.setResizableSizeAfterParent = function() {
                n.screen.style.width = "100%", n.screen.style.height = "100%"
            }, n.getStyle = function() {
                return n.screen.style
            }, n.setOverflow = function(e) {
                n.overflow = e, n.screen.style.overflow = n.overflow
            }, n.setPosition = function(e) {
                n.position = e, n.screen.style.position = n.position
            }, n.setDisplay = function(e) {
                n.display = e, n.screen.style.display = n.display
            }, n.setButtonMode = function(e) {
                n.buttonMode = e, n.screen.style.cursor = 1 == n.buttonMode ? "pointer" : "default"
            }, n.setBkColor = function(e) {
                n.screen.style.backgroundColor = e
            }, n.setInnerHTML = function(e) {
                n.innerHTML = e, n.screen.innerHTML = n.innerHTML
            }, n.getInnerHTML = function() {
                return n.innerHTML
            }, n.getRect = function() {
                return n.screen.getBoundingClientRect()
            }, n.setAlpha = function(e) {
                n.alpha = e, "opacity" == n.opacityType ? n.screen.style.opacity = n.alpha : "filter" == n.opacityType && (n.screen.style.filter = "alpha(opacity=" + 100 * n.alpha + ")", n.screen.style.filter = "progid:DXImageTransform.Microsoft.Alpha(Opacity=" + Math.round(100 * n.alpha) + ")")
            }, n.getAlpha = function() {
                return n.alpha
            }, n.getRect = function() {
                return n.screen.getBoundingClientRect()
            }, n.getGlobalX = function() {
                return n.getRect().left
            }, n.getGlobalY = function() {
                return n.getRect().top
            }, n.setX = function(e) {
                n.x = e, n.hasTransform3d_bl ? n.screen.style[n.transform] = "translate3d(" + n.x + "px," + n.y + "px,0)" : n.hasTransform2d_bl ? n.screen.style[n.transform] = "translate(" + n.x + "px," + n.y + "px)" : n.screen.style.left = n.x + "px"
            }, n.getX = function() {
                return n.x
            }, n.setY = function(e) {
                n.y = e, n.hasTransform3d_bl ? n.screen.style[n.transform] = "translate3d(" + n.x + "px," + n.y + "px,0)" : n.hasTransform2d_bl ? n.screen.style[n.transform] = "translate(" + n.x + "px," + n.y + "px)" : n.screen.style.top = n.y + "px"
            }, n.getY = function() {
                return n.y
            }, n.setWidth = function(e) {
                n.w = e, "img" == n.type ? (n.screen.width = n.w, n.screen.style.width = n.w + "px") : n.screen.style.width = n.w + "px"
            }, n.getWidth = function() {
                return "div" == n.type ? 0 != n.screen.offsetWidth ? n.screen.offsetWidth : n.w : "img" == n.type ? 0 != n.screen.offsetWidth ? n.screen.offsetWidth : 0 != n.screen.width ? n.screen.width : n._w : "canvas" == n.type ? 0 != n.screen.offsetWidth ? n.screen.offsetWidth : n.w : void 0
            }, n.setHeight = function(e) {
                n.h = e, "img" == n.type ? (n.screen.height = n.h, n.screen.style.height = n.h + "px") : n.screen.style.height = n.h + "px"
            }, n.getHeight = function() {
                return "div" == n.type ? 0 != n.screen.offsetHeight ? n.screen.offsetHeight : n.h : "img" == n.type ? 0 != n.screen.offsetHeight ? n.screen.offsetHeight : 0 != n.screen.height ? n.screen.height : n.h : "canvas" == n.type ? 0 != n.screen.offsetHeight ? n.screen.offsetHeight : n.h : void 0
            }, n.addChild = function(e) {
                n.contains(e) ? (n.children_ar.splice(FWDRLUtils.indexOfArray(n.children_ar, e), 1), n.children_ar.push(e), n.screen.appendChild(e.screen)) : (n.children_ar.push(e), n.screen.appendChild(e.screen))
            }, n.removeChild = function(e) {
                if (!n.contains(e)) throw Error("##removeChild()## Child dose't exist, it can't be removed!");
                n.children_ar.splice(FWDRLUtils.indexOfArray(n.children_ar, e), 1), n.screen.removeChild(e.screen)
            }, n.contains = function(e) {
                return -1 == FWDRLUtils.indexOfArray(n.children_ar, e) ? !1 : !0
            }, n.addChildAt = function(e, t) {
                if (0 == n.getNumChildren()) n.children_ar.push(e), n.screen.appendChild(e.screen);
                else if (1 == t) n.screen.insertBefore(e.screen, n.children_ar[0].screen), n.screen.insertBefore(n.children_ar[0].screen, e.screen), n.contains(e) ? n.children_ar.splice(FWDRLUtils.indexOfArray(n.children_ar, e), 1, e) : n.children_ar.splice(FWDRLUtils.indexOfArray(n.children_ar, e), 0, e);
                else {
                    if (0 > t || t > n.getNumChildren() - 1) throw Error("##getChildAt()## Index out of bounds!");
                    n.screen.insertBefore(e.screen, n.children_ar[t].screen), n.contains(e) ? n.children_ar.splice(FWDRLUtils.indexOfArray(n.children_ar, e), 1, e) : n.children_ar.splice(FWDRLUtils.indexOfArray(n.children_ar, e), 0, e)
                }
            }, n.getChildAt = function(e) {
                if (0 > e || e > n.getNumChildren() - 1) throw Error("##getChildAt()## Index out of bounds!");
                if (0 == n.getNumChildren()) throw Errror("##getChildAt## Child dose not exist!");
                return n.children_ar[e]
            }, n.removeChildAtZero = function() {
                n.screen.removeChild(n.children_ar[0].screen), n.children_ar.shift()
            }, n.getNumChildren = function() {
                return n.children_ar.length
            }, n.addListener = function(e, t) {
                if (void 0 == e) throw Error("type is required.");
                if ("object" == typeof e) throw Error("type must be of type String.");
                if ("function" != typeof t) throw Error("listener must be of type Function.");
                var i = {};
                i.type = e, i.listener = t, i.target = this, this.listeners.events_ar.push(i)
            }, n.dispatchEvent = function(e, t) {
                if (null != this.listeners) {
                    if (void 0 == e) throw Error("type is required.");
                    if ("object" == typeof e) throw Error("type must be of type String.");
                    for (var i = 0, o = this.listeners.events_ar.length; o > i; i++)
                        if (this.listeners.events_ar[i].target === this && this.listeners.events_ar[i].type === e) {
                            if (t)
                                for (var n in t) this.listeners.events_ar[i][n] = t[n];
                            this.listeners.events_ar[i].listener.call(this, this.listeners.events_ar[i])
                        }
                }
            }, n.removeListener = function(e, t) {
                if (void 0 == e) throw Error("type is required.");
                if ("object" == typeof e) throw Error("type must be of type String.");
                if ("function" != typeof t) throw Error("listener must be of type Function." + e);
                for (var i = 0, o = this.listeners.events_ar.length; o > i; i++)
                    if (this.listeners.events_ar[i].target === this && this.listeners.events_ar[i].type === e && this.listeners.events_ar[i].listener === t) {
                        this.listeners.events_ar.splice(i, 1);
                        break
                    }
            }, n.disposeImage = function() {
                "img" == n.type && (n.screen.src = null)
            }, n.destroy = function() {
                n.hasBeenSetSelectable_bl && (n.screen.ondragstart = null, n.screen.onselectstart = null, n.screen.ontouchstart = null), n.screen.removeAttribute("style"), n.listeners = [], n.listeners = null, n.children_ar = [], n.children_ar = null, n.style = null, n.screen = null, n.transform = null, n.position = null, n.overflow = null, n.display = null, n.visible = null, n.buttonMode = null, n.x = null, n.y = null, n.w = null, n.h = null, n.rect = null, n.alpha = null, n.innerHTML = null, n.opacityType = null, n.isHtml5_bl = null, n.hasTransform3d_bl = null, n.hasTransform2d_bl = null, n = null
            }, n.init()
        };
        e.FWDRLDisplayObject = t
    }(window), "undefined" == typeof asual) var asual = {};
"undefined" == typeof asual.util && (asual.util = {}), asual.util.Browser = new function() {
    var e = navigator.userAgent.toLowerCase(),
        t = /webkit/.test(e),
        i = /opera/.test(e),
        o = /msie/.test(e) && !/opera/.test(e),
        n = /mozilla/.test(e) && !/(compatible|webkit)/.test(e),
        s = parseFloat(o ? e.substr(e.indexOf("msie") + 4) : (e.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [0, "0"])[1]);
    this.toString = function() {
        return "[class Browser]"
    }, this.getVersion = function() {
        return s
    }, this.isMSIE = function() {
        return o
    }, this.isSafari = function() {
        return t
    }, this.isOpera = function() {
        return i
    }, this.isMozilla = function() {
        return n
    }
}, asual.util.Events = new function() {
    var e = "DOMContentLoaded",
        t = "onstop",
        i = window,
        o = document,
        n = [],
        s = asual.util,
        r = s.Browser,
        a = r.isMSIE(),
        l = r.isSafari();
    this.toString = function() {
        return "[class Events]"
    }, this.addListener = function(t, i, o) {
        n.push({
            o: t,
            t: i,
            l: o
        }), (i != e || !a && !l) && (t.addEventListener ? t.addEventListener(i, o, !1) : t.attachEvent && t.attachEvent("on" + i, o))
    }, this.removeListener = function(t, i, o) {
        for (var s, r = 0; s = n[r]; r++)
            if (s.o == t && s.t == i && s.l == o) {
                n.splice(r, 1);
                break
            }(i != e || !a && !l) && (t.removeEventListener ? t.removeEventListener(i, o, !1) : t.detachEvent && t.detachEvent("on" + i, o))
    };
    var d = function() {
            for (var t, i = 0; t = n[i]; i++) t.t != e && s.Events.removeListener(t.o, t.t, t.l)
        },
        u = function() {
            function e() {
                o.detachEvent(t, e), d()
            }
            "interactive" == o.readyState && (o.attachEvent(t, e), i.setTimeout(function() {
                o.detachEvent(t, e)
            }, 0))
        };
    (a || l) && ! function() {
        try {
            (a && o.body || !/loaded|complete/.test(o.readyState)) && o.documentElement.doScroll("left")
        } catch (t) {
            return setTimeout(arguments.callee, 0)
        }
        for (var t, i = 0; t = n[i]; i++) t.t == e && t.l.call(null)
    }(), a && i.attachEvent && i.attachEvent("onbeforeunload", u), this.addListener(i, "unload", d)
}, asual.util.Functions = new function() {
    this.toString = function() {
        return "[class Functions]"
    }, this.bind = function(e, t) {
        for (var i, o = 2, n = []; i = arguments[o]; o++) n.push(i);
        return function() {
            return e.apply(t, n)
        }
    }
};
var FWDAddressEvent = function(e) {
    this.toString = function() {
        return "[object FWDAddressEvent]"
    }, this.type = e, this.target = [FWDAddress][0], this.value = FWDAddress.getValue(), this.path = FWDAddress.getPath(), this.pathNames = FWDAddress.getPathNames(), this.parameters = {};
    for (var t = FWDAddress.getParameterNames(), i = 0, o = t.length; o > i; i++) this.parameters[t[i]] = FWDAddress.getParameter(t[i]);
    this.parameterNames = t
};
FWDAddressEvent.INIT = "init", FWDAddressEvent.CHANGE = "change", FWDAddressEvent.INTERNAL_CHANGE = "internalChange", FWDAddressEvent.EXTERNAL_CHANGE = "externalChange";
var FWDAddress = new function() {
    var _getHash = function() {
            var e = _l.href.indexOf("#");
            return -1 != e ? _ec(_dc(_l.href.substr(e + 1))) : ""
        },
        _getWindow = function() {
            try {
                return top.document, top
            } catch (e) {
                return window
            }
        },
        _strictCheck = function(e, t) {
            return _opts.strict && (e = t ? "/" != e.substr(0, 1) ? "/" + e : e : "" == e ? "/" : e), e
        },
        _ieLocal = function(e, t) {
            return _msie && "file:" == _l.protocol ? t ? _value.replace(/\?/, "%3F") : _value.replace(/%253F/, "?") : e
        },
        _searchScript = function(e) {
            if (e.childNodes)
                for (var t, i = 0, o = e.childNodes.length; o > i; i++)
                    if (e.childNodes[i].src && (_url = String(e.childNodes[i].src)), t = _searchScript(e.childNodes[i])) return t
        },
        _titleCheck = function() {
            _d.title != _title && -1 != _d.title.indexOf("#") && (_d.title = _title)
        },
        _listen = function() {
            if (!_silent) {
                var e = _getHash(),
                    t = !(_value == e);
                _safari && 523 > _version ? _length != _h.length && (_length = _h.length, typeof _stack[_length - 1] != UNDEFINED && (_value = _stack[_length - 1]), _update.call(this, !1)) : _msie && t ? 7 > _version ? _l.reload() : this.setValue(e) : t && (_value = e, _update.call(this, !1)), _msie && _titleCheck.call(this)
            }
        },
        _bodyClick = function(e) {
            if (_popup.length > 0) {
                var popup = window.open(_popup[0], _popup[1], eval(_popup[2]));
                typeof _popup[3] != UNDEFINED && eval(_popup[3])
            }
            _popup = []
        },
        _swfChange = function() {
            for (var e, t, i = 0, o = FWDAddress.getValue(), n = "setFWDAddressValue"; e = _ids[i]; i++)
                if (t = document.getElementById(e))
                    if (t.parentNode && typeof t.parentNode.so != UNDEFINED) t.parentNode.so.call(n, o);
                    else {
                        if (!t || typeof t[n] == UNDEFINED) {
                            var s = t.getElementsByTagName("object"),
                                r = t.getElementsByTagName("embed");
                            t = s[0] && typeof s[0][n] != UNDEFINED ? s[0] : r[0] && typeof r[0][n] != UNDEFINED ? r[0] : null
                        }
                        t && t[n](o)
                    } else(t = document[e]) && typeof t[n] != UNDEFINED && t[n](o)
        },
        _jsDispatch = function(e) {
            this.dispatchEvent(new FWDAddressEvent(e)), e = e.substr(0, 1).toUpperCase() + e.substr(1), typeof this["on" + e] == FUNCTION && this["on" + e]()
        },
        _jsInit = function() {
            _util.Browser.isSafari() && _d.body.addEventListener("click", _bodyClick), _jsDispatch.call(this, "init")
        },
        _jsChange = function() {
            _swfChange(), _jsDispatch.call(this, "change")
        },
        _update = function(e) {
            _jsChange.call(this), e ? _jsDispatch.call(this, "internalChange") : _jsDispatch.call(this, "externalChange"), _st(_functions.bind(_track, this), 10)
        },
        _track = function() {
            var e = (_l.pathname + (/\/$/.test(_l.pathname) ? "" : "/") + this.getValue()).replace(/\/\//, "/").replace(/^\/$/, ""),
                t = _t[_opts.tracker];
            typeof t == FUNCTION ? t(e) : typeof _t.pageTracker != UNDEFINED && typeof _t.pageTracker._trackPageview == FUNCTION ? _t.pageTracker._trackPageview(e) : typeof _t.urchinTracker == FUNCTION && _t.urchinTracker(e)
        },
        _htmlWrite = function() {
            var e = _frame.contentWindow.document;
            e.open(), e.write("<html><head><title>" + _d.title + "</title><script>var " + ID + ' = "' + _getHash() + '";</script></head></html>'), e.close()
        },
        _htmlLoad = function() {
            {
                var e = _frame.contentWindow;
                e.location.href
            }
            _value = typeof e[ID] != UNDEFINED ? e[ID] : "", _value != _getHash() && (_update.call(FWDAddress, !1), _l.hash = _ieLocal(_value, TRUE))
        },
        _load = function() {
            if (!_loaded) {
                if (_loaded = TRUE, _msie && 8 > _version) {
                    var e = _d.getElementsByTagName("frameset")[0];
                    _frame = _d.createElement((e ? "" : "i") + "frame"), e ? (e.insertAdjacentElement("beforeEnd", _frame), e[e.cols ? "cols" : "rows"] += ",0", _frame.src = "javascript:false", _frame.noResize = !0, _frame.frameBorder = _frame.frameSpacing = 0) : (_frame.src = "javascript:false", _frame.style.display = "none", _d.body.insertAdjacentElement("afterBegin", _frame)), _st(function() {
                        _events.addListener(_frame, "load", _htmlLoad), typeof _frame.contentWindow[ID] == UNDEFINED && _htmlWrite()
                    }, 50)
                } else _safari && (418 > _version && (_d.body.innerHTML += '<form id="' + ID + '" style="position:absolute;top:-9999px;" method="get"></form>', _form = _d.getElementById(ID)), typeof _l[ID] == UNDEFINED && (_l[ID] = {}), typeof _l[ID][_l.pathname] != UNDEFINED && (_stack = _l[ID][_l.pathname].split(",")));
                _st(_functions.bind(function() {
                    _jsInit.call(this), _jsChange.call(this), _track.call(this)
                }, this), 1), _msie && _version >= 8 ? (_d.body.onhashchange = _functions.bind(_listen, this), _si(_functions.bind(_titleCheck, this), 50)) : _si(_functions.bind(_listen, this), 50)
            }
        },
        ID = "swfaddress",
        FUNCTION = "function",
        UNDEFINED = "undefined",
        TRUE = !0,
        FALSE = !1,
        _util = asual.util,
        _browser = _util.Browser,
        _events = _util.Events,
        _functions = _util.Functions,
        _version = _browser.getVersion(),
        _msie = _browser.isMSIE(),
        _mozilla = _browser.isMozilla(),
        _opera = _browser.isOpera(),
        _safari = _browser.isSafari(),
        _supported = FALSE,
        _t = _getWindow(),
        _d = _t.document,
        _h = _t.history,
        _l = _t.location,
        _si = setInterval,
        _st = setTimeout,
        _dc = decodeURI,
        _ec = encodeURI,
        _frame, _form, _url, _title = _d.title,
        _length = _h.length,
        _silent = FALSE,
        _loaded = FALSE,
        _justset = TRUE,
        _juststart = TRUE,
        _ref = this,
        _stack = [],
        _ids = [],
        _popup = [],
        _listeners = {},
        _value = _getHash(),
        _opts = {
            history: TRUE,
            strict: TRUE
        };
    if (_msie && _d.documentMode && _d.documentMode != _version && (_version = 8 != _d.documentMode ? 7 : 8), _supported = _mozilla && _version >= 1 || _msie && _version >= 6 || _opera && _version >= 9.5 || _safari && _version >= 312) {
        _opera && (history.navigationMode = "compatible");
        for (var i = 1; _length > i; i++) _stack.push("");
        _stack.push(_getHash()), _msie && _l.hash != _getHash() && (_l.hash = "#" + _ieLocal(_getHash(), TRUE)), _searchScript(document);
        var _qi = _url ? _url.indexOf("?") : -1;
        if (-1 != _qi)
            for (var param, params = _url.substr(_qi + 1).split("&"), i = 0, p; p = params[i]; i++) param = p.split("="), /^(history|strict)$/.test(param[0]) && (_opts[param[0]] = isNaN(param[1]) ? /^(true|yes)$/i.test(param[1]) : 0 != parseInt(param[1])), /^tracker$/.test(param[0]) && (_opts[param[0]] = param[1]);
        _msie && _titleCheck.call(this), window == _t && _events.addListener(document, "DOMContentLoaded", _functions.bind(_load, this)), _events.addListener(_t, "load", _functions.bind(_load, this))
    } else !_supported && -1 != _l.href.indexOf("#") || _safari && 418 > _version && -1 != _l.href.indexOf("#") && "" != _l.search ? (_d.open(), _d.write('<html><head><meta http-equiv="refresh" content="0;url=' + _l.href.substr(0, _l.href.indexOf("#")) + '" /></head></html>'), _d.close()) : _track();
    this.toString = function() {
            return "[class FWDAddress]"
        }, this.back = function() {
            _h.back()
        }, this.forward = function() {
            _h.forward()
        }, this.up = function() {
            var e = this.getPath();
            this.setValue(e.substr(0, e.lastIndexOf("/", e.length - 2) + ("/" == e.substr(e.length - 1) ? 1 : 0)))
        }, this.go = function(e) {
            _h.go(e)
        }, this.href = function(e, t) {
            t = typeof t != UNDEFINED ? t : "_self", "_self" == t ? self.location.href = e : "_top" == t ? _l.href = e : "_blank" == t ? window.open(e) : _t.frames[t].location.href = e
        }, this.popup = function(url, name, options, handler) {
            try {
                var popup = window.open(url, name, eval(options));
                typeof handler != UNDEFINED && eval(handler)
            } catch (ex) {}
            _popup = arguments
        }, this.getIds = function() {
            return _ids
        }, this.getId = function() {
            return _ids[0]
        }, this.setId = function(e) {
            _ids[0] = e
        }, this.addId = function(e) {
            this.removeId(e), _ids.push(e)
        }, this.removeId = function(e) {
            for (var t = 0; t < _ids.length; t++)
                if (e == _ids[t]) {
                    _ids.splice(t, 1);
                    break
                }
        }, this.addEventListener = function(e, t) {
            typeof _listeners[e] == UNDEFINED && (_listeners[e] = []), _listeners[e].push(t)
        }, this.removeEventListener = function(e, t) {
            if (typeof _listeners[e] != UNDEFINED) {
                for (var i, o = 0;
                    (i = _listeners[e][o]) && i != t; o++);
                _listeners[e].splice(o, 1)
            }
        }, this.dispatchEvent = function(e) {
            if (this.hasEventListener(e.type)) {
                e.target = this;
                for (var t, i = 0; t = _listeners[e.type][i]; i++) t(e);
                return TRUE
            }
            return FALSE
        }, this.hasEventListener = function(e) {
            return typeof _listeners[e] != UNDEFINED && _listeners[e].length > 0
        }, this.getBaseURL = function() {
            var e = _l.href;
            return -1 != e.indexOf("#") && (e = e.substr(0, e.indexOf("#"))), "/" == e.substr(e.length - 1) && (e = e.substr(0, e.length - 1)), e
        }, this.getStrict = function() {
            return _opts.strict
        }, this.setStrict = function(e) {
            _opts.strict = e
        }, this.getHistory = function() {
            return _opts.history
        }, this.setHistory = function(e) {
            _opts.history = e
        }, this.getTracker = function() {
            return _opts.tracker
        }, this.setTracker = function(e) {
            _opts.tracker = e
        }, this.getTitle = function() {
            return _d.title
        }, this.setTitle = function(e) {
            return _supported ? void(typeof e != UNDEFINED && ("null" == e && (e = ""), e = _dc(e), _st(function() {
                _title = _d.title = e, _juststart && _frame && _frame.contentWindow && _frame.contentWindow.document && (_frame.contentWindow.document.title = e, _juststart = FALSE), !_justset && _mozilla && _l.replace(-1 != _l.href.indexOf("#") ? _l.href : _l.href + "#"), _justset = FALSE
            }, 10))) : null
        }, this.getStatus = function() {
            return _t.status
        }, this.setStatus = function(e) {
            if (!_supported) return null;
            if (typeof e != UNDEFINED && ("null" == e && (e = ""), e = _dc(e), !_safari)) {
                if (e = _strictCheck("null" != e ? e : "", TRUE), "/" == e && (e = ""), !/http(s)?:\/\//.test(e)) {
                    var t = _l.href.indexOf("#");
                    e = (-1 == t ? _l.href : _l.href.substr(0, t)) + "#" + e
                }
                _t.status = e
            }
        }, this.resetStatus = function() {
            _t.status = ""
        }, this.getValue = function() {
            return _supported ? _dc(_strictCheck(_ieLocal(_value, FALSE), FALSE)) : null
        }, this.setValue = function(e) {
            if (!_supported) return null;
            if (typeof e != UNDEFINED && ("null" == e && (e = ""), e = _ec(_dc(_strictCheck(e, TRUE))), "/" == e && (e = ""), _value != e)) {
                if (_justset = TRUE, _value = e, _silent = TRUE, _update.call(FWDAddress, !0), _stack[_h.length] = _value, _safari)
                    if (_opts.history)
                        if (_l[ID][_l.pathname] = _stack.toString(), _length = _h.length + 1, 418 > _version) "" == _l.search && (_form.action = "#" + _value, _form.submit());
                        else if (523 > _version || "" == _value) {
                    var t = _d.createEvent("MouseEvents");
                    t.initEvent("click", TRUE, TRUE);
                    var i = _d.createElement("a");
                    i.href = "#" + _value, i.dispatchEvent(t)
                } else _l.hash = "#" + _value;
                else _l.replace("#" + _value);
                else _value != _getHash() && (_opts.history ? _l.hash = "#" + _dc(_ieLocal(_value, TRUE)) : _l.replace("#" + _dc(_value)));
                _msie && 8 > _version && _opts.history && _st(_htmlWrite, 50), _safari ? _st(function() {
                    _silent = FALSE
                }, 1) : _silent = FALSE
            }
        }, this.getPath = function() {
            var e = this.getValue();
            return -1 != e.indexOf("?") ? e.split("?")[0] : -1 != e.indexOf("#") ? e.split("#")[0] : e
        }, this.getPathNames = function() {
            var e = this.getPath(),
                t = e.split("/");
            return ("/" == e.substr(0, 1) || 0 == e.length) && t.splice(0, 1), "/" == e.substr(e.length - 1, 1) && t.splice(t.length - 1, 1), t
        }, this.getQueryString = function() {
            var e = this.getValue(),
                t = e.indexOf("?");
            return -1 != t && t < e.length ? e.substr(t + 1) : void 0
        }, this.getParameter = function(e) {
            var t = this.getValue(),
                i = t.indexOf("?");
            if (-1 != i) {
                t = t.substr(i + 1);
                for (var o, n = t.split("&"), s = n.length, r = []; s--;) o = n[s].split("="), o[0] == e && r.push(o[1]);
                if (0 != r.length) return 1 != r.length ? r : r[0]
            }
        }, this.getParameterNames = function() {
            var e = this.getValue(),
                t = e.indexOf("?"),
                i = [];
            if (-1 != t && (e = e.substr(t + 1), "" != e && -1 != e.indexOf("=")))
                for (var o = e.split("&"), n = 0; n < o.length;) i.push(o[n].split("=")[0]), n++;
            return i
        }, this.onInit = null, this.onChange = null, this.onInternalChange = null, this.onExternalChange = null,
        function() {
            var e;
            if (typeof FlashObject != UNDEFINED && (SWFObject = FlashObject), typeof SWFObject != UNDEFINED && SWFObject.prototype && SWFObject.prototype.write) {
                var t = SWFObject.prototype.write;
                SWFObject.prototype.write = function() {
                    e = arguments, this.getAttribute("version").major < 8 && (this.addVariable("$swfaddress", FWDAddress.getValue()), ("string" == typeof e[0] ? document.getElementById(e[0]) : e[0]).so = this);
                    var i;
                    return (i = t.apply(this, e)) && _ref.addId(this.getAttribute("id")), i
                }
            }
            if (typeof swfobject != UNDEFINED) {
                var i = swfobject.registerObject;
                swfobject.registerObject = function() {
                    e = arguments, i.apply(this, e), _ref.addId(e[0])
                };
                var o = swfobject.createSWF;
                swfobject.createSWF = function() {
                    e = arguments;
                    var t = o.apply(this, e);
                    return t && _ref.addId(e[0].id), t
                };
                var n = swfobject.embedSWF;
                swfobject.embedSWF = function() {
                    e = arguments, typeof e[8] == UNDEFINED && (e[8] = {}), typeof e[8].id == UNDEFINED && (e[8].id = e[1]), n.apply(this, e), _ref.addId(e[8].id)
                }
            }
            if (typeof UFO != UNDEFINED) {
                var s = UFO.create;
                UFO.create = function() {
                    e = arguments, s.apply(this, e), _ref.addId(e[0].id)
                }
            }
            if (typeof AC_FL_RunContent != UNDEFINED) {
                var r = AC_FL_RunContent;
                AC_FL_RunContent = function() {
                    e = arguments, r.apply(this, e);
                    for (var t = 0, i = e.length; i > t; t++) "id" == e[t] && _ref.addId(e[t + 1])
                }
            }
        }()
};
! function(e) {
    var t = function(i, o) {
        var n = this;
        n.init = function() {
            e.RLAudioPlayer = this, n.instanceName_str = "RLAudioPlayer", this.data = o, this.stageContainer = i, this.listeners = {
                events_ar: []
            }, this.main_do = null, this.controller_do = null, this.audioScreen_do = null, this.flash_do = null, this.flashObject = null, this.backgroundColor_str = n.data.audioControllerBackgroundColor_str || "transparent", this.flashObjectMarkup_str = null, this.sourcePath_str, this.stageWidth = 0, this.stageHeight = 0, this.isAPIReady_bl = !1, this.isFlashScreenReady_bl = !1, this.orintationChangeComplete_bl = !0, this.isMobile_bl = FWDRLUtils.isMobile, this.hasPointerEvent_bl = FWDRLUtils.hasPointerEvent, this.hasLoadingSkinError_bl = !1, this.setupMainDo(), t.hasHTML5Audio ? (this.setupAudioScreen(n.data), this.setupController(), this.isAPIReady_bl = !0, this.dispatchEvent(t.READY)) : this.setupFlashScreen()
        }, n.setupMainDo = function() {
            n.main_do = new FWDRLDisplayObject("div", "relative"), n.main_do.getStyle().msTouchAction = "none", n.main_do.setBackfaceVisibility(), n.main_do.setBkColor(n.backgroundColor_str), (!FWDRLUtils.isMobile || FWDRLUtils.isMobile && FWDRLUtils.hasPointerEvent) && n.main_do.setSelectable(!1), n.stageContainer.appendChild(n.main_do.screen), setTimeout(n.resizeHandler, 300)
        }, n.resizeHandler = function() {
            n.stageWidth = n.stageContainer.offsetWidth, n.stageHeight = n.stageContainer.offsetHeight, n.main_do.setWidth(n.stageWidth), n.main_do.setHeight(n.stageHeight), n.controller_do && n.controller_do.resizeAndPosition()
        }, this.setupController = function() {
            FWDRLEAPController.setPrototype(), n.controller_do = new FWDRLEAPController(n.data, n), n.controller_do.addListener(FWDRLEAPController.PLAY, n.controllerOnPlayHandler), n.controller_do.addListener(FWDRLEAPController.PAUSE, n.controllerOnPauseHandler), n.controller_do.addListener(FWDRLEAPController.START_TO_SCRUB, n.controllerStartToScrubbHandler), n.controller_do.addListener(FWDRLEAPController.SCRUB, n.controllerScrubbHandler), n.controller_do.addListener(FWDRLEAPController.STOP_TO_SCRUB, n.controllerStopToScrubbHandler), n.controller_do.addListener(FWDRLEAPController.CHANGE_VOLUME, n.controllerChangeVolumeHandler), n.main_do.addChild(n.controller_do)
        }, this.controllerOnPlayHandler = function() {
            n.play()
        }, this.controllerOnPauseHandler = function() {
            t.hasHTML5Audio ? n.audioScreen_do.pause() : n.isFlashScreenReady_bl && n.flashObject.pauseAudio()
        }, this.controllerStartToScrubbHandler = function() {
            t.hasHTML5Audio ? n.audioScreen_do.startToScrub() : n.isFlashScreenReady_bl && (n.pause(), n.flashObject.startToScrub())
        }, this.controllerScrubbHandler = function(e) {
            t.hasHTML5Audio ? n.audioScreen_do.scrub(e.percent) : n.isFlashScreenReady_bl && n.flashObject.scrub(e.percent)
        }, this.controllerStopToScrubbHandler = function() {
            t.hasHTML5Audio ? n.audioScreen_do.stopToScrub() : n.isFlashScreenReady_bl && n.flashObject.stopToScrub()
        }, this.controllerChangeVolumeHandler = function(e) {
            t.hasHTML5Audio ? n.audioScreen_do.setVolume(e.percent) : n.isFlashScreenReady_bl && n.flashObject.setVolume(e.percent)
        }, this.setupAudioScreen = function() {
            FWDRLEAPAudioScreen.setPrototype(), n.audioScreen_do = new FWDRLEAPAudioScreen(n, n.data), n.audioScreen_do.addListener(FWDRLEAPAudioScreen.START, n.audioScreenStartHandler), n.audioScreen_do.addListener(FWDRLEAPAudioScreen.ERROR, n.audioScreenErrorHandler), n.audioScreen_do.addListener(FWDRLEAPAudioScreen.SAFE_TO_SCRUBB, n.audioScreenSafeToScrubbHandler), n.audioScreen_do.addListener(FWDRLEAPAudioScreen.STOP, n.audioScreenStopHandler), n.audioScreen_do.addListener(FWDRLEAPAudioScreen.PLAY, n.audioScreenPlayHandler), n.audioScreen_do.addListener(FWDRLEAPAudioScreen.PAUSE, n.audioScreenPauseHandler), n.audioScreen_do.addListener(FWDRLEAPAudioScreen.UPDATE, n.audioScreenUpdateHandler), n.audioScreen_do.addListener(FWDRLEAPAudioScreen.UPDATE_TIME, n.audioScreenUpdateTimeHandler), n.audioScreen_do.addListener(FWDRLEAPAudioScreen.LOAD_PROGRESS, n.audioScreenLoadProgressHandler), n.audioScreen_do.addListener(FWDRLEAPAudioScreen.PLAY_COMPLETE, n.audioScreenPlayCompleteHandler), n.main_do.addChild(n.audioScreen_do)
        }, this.audioScreenStartHandler = function() {
            n.dispatchEvent(t.START)
        }, this.audioScreenErrorHandler = function(i) {
            var o;
            n.hasLoadingSkinError_bl = !0, t.hasHTML5Audio ? (o = i.text, e.console && console.log(i)) : o = i, n.dispatchEvent(t.ERROR, {
                error: o
            })
        }, this.audioScreenSafeToScrubbHandler = function() {
            n.controller_do && n.controller_do.enableMainScrubber()
        }, this.audioScreenStopHandler = function() {
            n.controller_do && (n.controller_do.disableMainScrubber(), n.controller_do.showPlayButton()), n.dispatchEvent(t.STOP)
        }, this.audioScreenPlayHandler = function() {
            n.controller_do && n.controller_do.showPauseButton(), n.dispatchEvent(t.PLAY)
        }, this.audioScreenPauseHandler = function() {
            n.controller_do && n.controller_do.showPlayButton(), n.dispatchEvent(t.PAUSE)
        }, this.audioScreenUpdateHandler = function(e) {
            var i;
            t.hasHTML5Audio ? (i = e.percent, n.controller_do && n.controller_do.updateMainScrubber(i)) : (i = e, n.controller_do && n.controller_do.updateMainScrubber(i)), n.dispatchEvent(t.UPDATE, {
                percent: i
            })
        }, this.audioScreenUpdateTimeHandler = function(e) {
            var i;
            t.hasHTML5Audio ? (i = e.time, n.controller_do && n.controller_do.updateTime(i)) : (i = e, n.controller_do && n.controller_do.updateTime(i)), n.dispatchEvent(t.UPDATE_TIME, {
                time: i
            })
        }, this.audioScreenLoadProgressHandler = function(e) {
            t.hasHTML5Audio ? n.controller_do && n.controller_do.updatePreloaderBar(e.percent) : n.controller_do && n.controller_do.updatePreloaderBar(e)
        }, this.audioScreenPlayCompleteHandler = function() {
            n.dispatchEvent(t.PLAY_COMPLETE)
        }, this.setupFlashScreen = function() {
            if (!FWDRLFlashTest.hasFlashPlayerVersion("9.0.18")) {
                var e = "Please install Adobe flash player! <a href='http://www.adobe.com/go/getflashplayer'>Click here to install.</a>";
                return void n.dispatchEvent(t.ERROR, {
                    error: e
                })
            }
            n.flash_do = new FWDRLDisplayObject("div"), n.flash_do.setBackfaceVisibility(), n.flash_do.setResizableSizeAfterParent(), n.main_do.addChild(n.flash_do), n.flashObjectMarkup_str = '<object id="' + n.instanceName_str + '"classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="100%" height="100%"><param name="movie" value="' + n.data.audioFlashPath_str + '"/><param name="wmode" value="opaque"/><param name="scale" value="noscale"/><param name=FlashVars value="instanceName=' + n.instanceName_str + "&volume=" + n.data.volume + "&loop=" + n.data.audioLoop_bl + '"/><object type="application/x-shockwave-flash" data="' + n.data.audioFlashPath_str + '" width="100%" height="100%"><param name="movie" value="' + n.data.audioFlashPath_str + '"/><param name="wmode" value="opaque"/><param name="scale" value="noscale"/><param name=FlashVars value="instanceName=' + n.instanceName_str + "&volume=" + n.data.volume + "&loop=" + n.data.audioLoop_bl + '"/></object></object>', n.flash_do.screen.innerHTML = n.flashObjectMarkup_str, n.flashObject = n.flash_do.screen.firstChild, FWDRLUtils.isIE || (n.flashObject = n.flashObject.getElementsByTagName("object")[0])
        }, this.flashScreenIsReady = function() {
            console && console.dir("flash  audio is ready " + n.instanceName_str), n.isFlashScreenReady_bl = !0, n.setupController(), n.isAPIReady_bl = !0, n.dispatchEvent(t.READY)
        }, this.flashScreenFail = function() {
            var e = "External interface error!";
            n.dispatchEvent(t.ERROR, {
                error: e
            })
        }, this.play = function() {
            n.isAPIReady_bl && (t.hasHTML5Audio ? n.audioScreen_do.play() : n.isFlashScreenReady_bl && n.flashObject.playAudio())
        }, this.pause = function() {
            n.isAPIReady_bl && (t.hasHTML5Audio ? n.audioScreen_do && n.audioScreen_do.pause() : n.isFlashScreenReady_bl && n.flashObject.pauseAudio())
        }, this.stop = function() {
            n.isAPIReady_bl && (n.hasLoadingSkinError_bl = !1, t.hasHTML5Audio ? n.audioScreen_do && n.audioScreen_do.stop() : n.isFlashScreenReady_bl && n.flashObject.stopAudio())
        }, this.startToScrub = function() {
            n.isAPIReady_bl && (t.hasHTML5Audio ? n.audioScreen_do && n.audioScreen_do.startToScrub() : n.isFlashScreenReady_bl && n.flashObject.startToScrub())
        }, this.stopToScrub = function() {
            n.isAPIReady_bl && (t.hasHTML5Audio ? n.audioScreen_do && n.audioScreen_do.stopToScrub() : n.isFlashScreenReady_bl && n.flashObject.stopToScrub())
        }, this.scrub = function(e) {
            n.isAPIReady_bl && (isNaN(e) || (0 > e ? e = 0 : e > 1 && (e = 1), t.hasHTML5Audio ? n.audioScreen_do && n.audioScreen_do.scrub(e) : n.isFlashScreenReady_bl && n.flashObject.scrub(e)))
        }, this.stopToScrub = function() {
            n.isAPIReady_bl && (t.hasHTML5Audio ? n.audioScreen_do && n.audioScreen_do.stopToScrub() : n.isFlashScreenReady_bl && n.flashObject.stopToScrub())
        }, this.setSource = function(e) {
            n.isAPIReady_bl && (n.hasLoadingSkinError_bl = !1, n.sourcePath_str = e, t.hasHTML5Audio ? n.audioScreen_do && n.audioScreen_do.setSource(e) : n.isFlashScreenReady_bl && n.flashObject.setSource(e))
        }, this.getSourcePath = function() {
            return n.isAPIReady_bl ? n.sourcePath_str : void 0
        }, this.setVolume = function(e) {
            n.isAPIReady_bl && (n.controller_do && n.controller_do.updateVolume(e), t.hasHTML5Audio ? n.audioScreen_do && n.audioScreen_do.setVolume(e) : n.isFlashScreenReady_bl && n.flashObject.setVolume(e))
        }, this.getIsAPIReady = function() {
            return n.isAPIReady_bl
        }, this.addListener = function(e, t) {
            if (void 0 == e) throw Error("type is required.");
            if ("object" == typeof e) throw Error("type must be of type String.");
            if ("function" != typeof t) throw Error("listener must be of type Function.");
            var i = {};
            i.type = e, i.listener = t, i.target = this, this.listeners.events_ar.push(i)
        }, this.dispatchEvent = function(e, t) {
            if (null != this.listeners) {
                if (void 0 == e) throw Error("type is required.");
                if ("object" == typeof e) throw Error("type must be of type String.");
                for (var i = 0, o = this.listeners.events_ar.length; o > i; i++)
                    if (this.listeners.events_ar[i].target === this && this.listeners.events_ar[i].type === e) {
                        if (t)
                            for (var n in t) this.listeners.events_ar[i][n] = t[n];
                        this.listeners.events_ar[i].listener.call(this, this.listeners.events_ar[i])
                    }
            }
        }, this.removeListener = function(e, t) {
            if (void 0 == e) throw Error("type is required.");
            if ("object" == typeof e) throw Error("type must be of type String.");
            if ("function" != typeof t) throw Error("listener must be of type Function." + e);
            for (var i = 0, o = this.listeners.events_ar.length; o > i; i++)
                if (this.listeners.events_ar[i].target === this && this.listeners.events_ar[i].type === e && this.listeners.events_ar[i].listener === t) {
                    this.listeners.events_ar.splice(i, 1);
                    break
                }
        }, n.init()
    };
    t.setPrototype = function() {
        t.prototype = new FWDRLEventDispatcher
    }, t.hasHTML5Audio = function() {
        var e = document.createElement("audio"),
            t = !1;
        return e.canPlayType && (t = Boolean("probably" == e.canPlayType("audio/mpeg") || "maybe" == e.canPlayType("audio/mpeg"))), self.isMobile_bl ? !0 : t
    }(), t.getAudioFormats = function() {
        var e = document.createElement("audio");
        if (e.canPlayType) {
            var t = "",
                i = [];
            return ("probably" == e.canPlayType("audio/mpeg") || "maybe" == e.canPlayType("audio/mpeg")) && (t += ".mp3"), ("probably" == e.canPlayType("audio/ogg") || "maybe" == e.canPlayType("audio/ogg")) && (t += ".ogg"), ("probably" == e.canPlayType("audio/mp4") || "maybe" == e.canPlayType("audio/mp4")) && (t += ".webm"), i = t.split("."), i.shift(), e = null, i
        }
    }(), t.instaces_ar = [], t.START = "start", t.READY = "ready", t.STOP = "stop", t.PLAY = "play", t.PAUSE = "pause", t.UPDATE = "update", t.UPDATE_TIME = "updateTime", t.ERROR = "error", t.PLAY_COMPLETE = "playComplete", e.FWDRLEAP = t
}(window),
function(e) {
    var t = function(i, o) {
        var n = this,
            s = t.prototype;
        this.audio_el = null, this.sourcePath_str = o.sourcePath_str, this.prevSourcePath_str = "none", this.volume = o.volume, this.countShoutCastErrors = 0, this.maxCountShoutCastErrors = 5, this.testShoutCastId_to, n.preload_bl = !1, this.autoPlay_bl = o.autoPlay_bl, this.loop_bl = o.audioLoop_bl, this.allowScrubing_bl = !1, this.hasError_bl = !0, this.isPlaying_bl = !1, this.isStopped_bl = !0, this.hasPlayedOnce_bl = !1, this.isSafeToBeControlled_bl = !1, this.isShoutcast_bl = !1, this.isStartEventDispatched_bl = !1, this.init = function() {
            n.setHeight(0)
        }, this.setupAudio = function() {
            null == n.audio_el && (n.audio_el = document.createElement("audio"), n.screen.appendChild(n.audio_el), n.audio_el.controls = !1, n.audio_el.preload = "auto", n.audio_el.volume = n.volume), n.audio_el.addEventListener("error", n.errorHandler), n.audio_el.addEventListener("canplay", n.safeToBeControlled), n.audio_el.addEventListener("canplaythrough", n.safeToBeControlled), n.audio_el.addEventListener("progress", n.updateProgress), n.audio_el.addEventListener("timeupdate", n.updateAudio), n.audio_el.addEventListener("pause", n.pauseHandler), n.audio_el.addEventListener("play", n.playHandler), n.audio_el.addEventListener("ended", n.endedHandler)
        }, this.destroyAudio = function() {
            n.audio_el && (n.audio_el.removeEventListener("error", n.errorHandler), n.audio_el.removeEventListener("canplay", n.safeToBeControlled), n.audio_el.removeEventListener("canplaythrough", n.safeToBeControlled), n.audio_el.removeEventListener("progress", n.updateProgress), n.audio_el.removeEventListener("timeupdate", n.updateAudio), n.audio_el.removeEventListener("pause", n.pauseHandler), n.audio_el.removeEventListener("play", n.playHandler), n.audio_el.removeEventListener("ended", n.endedHandler), n.audio_el.src = "", n.audio_el.load())
        }, this.errorHandler = function(i) {
            if (n.isShoutcast_bl && n.countShoutCastErrors <= n.maxCountShoutCastErrors && 0 == n.audio_el.networkState) return n.testShoutCastId_to = setTimeout(n.play, 200), void n.countShoutCastErrors++;
            var o;
            n.hasError_bl = !0, n.stop(), o = 0 == n.audio_el.networkState ? "error 'self.audio_el.networkState = 1'" : 1 == n.audio_el.networkState ? "error 'self.audio_el.networkState = 1'" : 2 == n.audio_el.networkState ? "'self.audio_el.networkState = 2'" : 3 == n.audio_el.networkState ? "Audio source not found <font color='#FFFFFF'>" + n.sourcePath_str + "</font>" : i, e.console && e.console.log(n.audio_el.networkState), n.dispatchEvent(t.ERROR, {
                text: o
            })
        }, this.setSource = function(e) {
            n.sourcePath_str = e;
            for (var t = n.sourcePath_str.split(","), o = FWDRLEAP.getAudioFormats, s = 0; s < t.length; s++) {
                var r = t[s];
                t[s] = FWDRLUtils.trim(r)
            }
            e: for (var a = 0; a < t.length; a++)
                for (var r = t[a], s = 0; s < o.length; s++) {
                    var l = o[s];
                    if (-1 != r.indexOf(l)) {
                        n.sourcePath_str = r;
                        break e
                    }
                }
            clearTimeout(n.testShoutCastId_to), -1 != n.sourcePath_str.indexOf(";") && FWDRLUtils.isChrome ? (n.isShoutcast_bl = !0, n.countShoutCastErrors = 0) : n.isShoutcast_bl = !1, i.sourcePath_str = n.sourcePath_str, n.audio_el && n.stop(!0)
        }, this.play = function(e) {
            if (n.isStopped_bl) n.isPlaying_bl = !1, n.hasError_bl = !1, n.allowScrubing_bl = !1, n.isStopped_bl = !1, n.setupAudio(), n.audio_el.src = n.sourcePath_str, n.play();
            else if (!n.audio_el.ended || e) try {
                n.isPlaying_bl = !0, n.hasPlayedOnce_bl = !0, n.audio_el.play(), FWDRLUtils.isIE && n.dispatchEvent(t.PLAY)
            } catch (i) {}
        }, this.pause = function() {
            if (null != n && null != n.audio_el && !n.audio_el.ended) try {
                n.audio_el.pause(), n.isPlaying_bl = !1, FWDRLUtils.isIE && n.dispatchEvent(t.PAUSE)
            } catch (e) {}
        }, this.pauseHandler = function() {
            n.allowScrubing_bl || n.dispatchEvent(t.PAUSE)
        }, this.playHandler = function() {
            n.allowScrubing_bl || (n.isStartEventDispatched_bl || (n.dispatchEvent(t.START), n.isStartEventDispatched_bl = !0), n.dispatchEvent(t.PLAY))
        }, this.endedHandler = function() {
            n.loop_bl ? (n.scrub(0), n.play()) : n.stop(), n.dispatchEvent(t.PLAY_COMPLETE)
        }, this.stop = function(e) {
            (null != n && null != n.audio_el && !n.isStopped_bl || e) && (n.isPlaying_bl = !1, n.isStopped_bl = !0, n.hasPlayedOnce_bl = !0, n.isSafeToBeControlled_bl = !1, n.isStartEventDispatched_bl = !1, clearTimeout(n.testShoutCastId_to), n.audio_el.pause(), n.destroyAudio(), n.dispatchEvent(t.STOP), n.dispatchEvent(t.UPDATE_TIME, {
                time: "00:00/00:00"
            }), n.dispatchEvent(t.LOAD_PROGRESS, {
                percent: 0
            }))
        }, this.safeToBeControlled = function() {
            n.isSafeToBeControlled_bl || (n.isPlaying_bl = !0, n.isSafeToBeControlled_bl = !0, n.dispatchEvent(t.SAFE_TO_SCRUBB), n.dispatchEvent(t.SAFE_TO_UPDATE_VOLUME))
        }, this.updateProgress = function() {
            var e, i = 0;
            n.audio_el.buffered.length > 0 && (e = n.audio_el.buffered.end(n.audio_el.buffered.length - 1), i = e.toFixed(1) / n.audio_el.duration.toFixed(1), (isNaN(i) || !i) && (i = 0)), 1 == i && n.audio_el.removeEventListener("progress", n.updateProgress), n.dispatchEvent(t.LOAD_PROGRESS, {
                percent: i
            })
        }, this.updateAudio = function() {
            var e;
            n.allowScrubing_bl || (e = n.audio_el.currentTime / n.audio_el.duration, n.dispatchEvent(t.UPDATE, {
                percent: e
            })), n.dispatchEvent(t.UPDATE_TIME, {
                time: n.formatTime(n.audio_el.currentTime) + "/" + n.formatTime(n.audio_el.duration)
            })
        }, this.formatTime = function(e) {
            return e = Math.round(e), minutes = Math.floor(e / 60), minutes = minutes >= 10 ? minutes : "0" + minutes, e = Math.floor(e % 60), e = e >= 10 ? e : "0" + e, isNaN(e) ? "00:00" : minutes + ":" + e
        }, this.startToScrub = function() {
            n.allowScrubing_bl = !0
        }, this.stopToScrub = function() {
            n.allowScrubing_bl = !1
        }, this.scrub = function(e, i) {
            if (null != n.audio_el && n.audio_el.duration) {
                i && n.startToScrub();
                try {
                    n.audio_el.currentTime = n.audio_el.duration * e, n.dispatchEvent(t.UPDATE_TIME, {
                        time: n.formatTime(n.audio_el.currentTime) + "/" + n.formatTime(n.audio_el.duration)
                    })
                } catch (i) {}
            }
        }, this.setVolume = function(e) {
            e && (n.volume = e), n.audio_el && (n.audio_el.volume = n.volume)
        }, this.destroy = function() {
            n.audio_el && n.audio_el.pause(), n.destroyAudio(), n.audio_el = null, i = null, n.setInnerHTML(""), n = null, s.destroy(), s = null, t.prototype = null
        }, this.init()
    };
    t.setPrototype = function() {
        t.prototype = new FWDRLDisplayObject("div")
    }, t.ERROR = "error", t.UPDATE = "update", t.UPDATE_TIME = "updateTime", t.SAFE_TO_SCRUBB = "safeToControll", t.SAFE_TO_UPDATE_VOLUME = "safeToUpdateVolume", t.LOAD_PROGRESS = "loadProgress", t.START = "start", t.PLAY = "play", t.PAUSE = "pause", t.STOP = "stop", t.PLAY_COMPLETE = "playComplete", e.FWDRLEAPAudioScreen = t
}(window),
function() {
    var e = function(t, i) {
        {
            var o = this;
            e.prototype
        }
        this.bkPath_img = t.bkPath_img, this.playN_img = t.audioPlayN_img, this.pauseN_img = t.audioPauseN_img, this.audioMainScrubberBkLeft_img = t.audioMainScrubberBkLeft_img, this.mainScrubberBkRight_img = t.mainScrubberBkRight_img, this.mainScrubberDragLeft_img = t.mainScrubberDragLeft_img, this.mainScrubberLine_img = t.mainScrubberLine_img, this.volumeScrubberBkLeft_img = t.volumeScrubberBkLeft_img, this.volumeScrubberBkRight_img = t.volumeScrubberBkRight_img, this.volumeScrubberDragLeft_img = t.volumeScrubberDragLeft_img, this.volumeScrubberLine_img = t.volumeScrubberLine_img, this.timeBk_img = t.timeBk_img, this.volumeN_img = t.volumeN_img, this.volumeS_img = t.volumeS_img, this.volumeD_img = t.volumeD_img, this.progressLeft_img = t.progressLeft_img, this.buttons_ar = [], this.disable_do = null, this.mainHolder_do = null, this.bk_do = null, this.playPauseButton_do = null, this.mainScrubber_do = null, this.mainScrubberBkLeft_do = null, this.mainScrubberBkMiddle_do = null, this.mainScrubberBkRight_do = null, this.mainScrubberDrag_do = null, this.mainScrubberDragLeft_do = null, this.mainScrubberDragMiddle_do = null, this.mainScrubberBarLine_do = null, this.mainProgress_do = null, this.progressLeft_do = null, this.progressMiddle_do = null, this.time_do = null, this.volumeButton_do = null, this.volumeScrubber_do = null, this.volumeScrubberBkLeft_do = null, this.volumeScrubberBkMiddle_do = null, this.volumeScrubberBkRight_do = null, this.volumeScrubberDrag_do = null, this.volumeScrubberDragLeft_do = null, this.volumeScrubberDragMiddle_do = null, this.volumeScrubberBarLine_do = null, this.bkMiddlePath_str = t.bkMiddlePath_str, this.mainScrubberBkMiddlePath_str = t.mainScrubberBkMiddlePath_str, this.volumeScrubberBkMiddlePath_str = t.volumeScrubberBkMiddlePath_str, this.mainScrubberDragMiddlePath_str = t.mainScrubberDragMiddlePath_str, this.volumeScrubberDragMiddlePath_str = t.volumeScrubberDragMiddlePath_str, this.timeColor_str = t.timeColor_str, this.progressMiddlePath_str = t.progressMiddlePath_str, this.audioControllerBackgroundColor_str = t.audioControllerBackgroundColor_str, this.stageWidth = 0, this.scrubbersBkLeftAndRightWidth = this.audioMainScrubberBkLeft_img.width, this.mainScrubberWidth = 0, this.mainScrubberMinWidth = 150, this.volumeScrubberWidth = t.volumeScrubberWidth, this.scrubbersHeight = this.audioMainScrubberBkLeft_img.height, this.mainScrubberDragLeftWidth = o.mainScrubberDragLeft_img.width, this.scrubbersOffsetWidth = t.scrubbersOffsetWidth, this.scrubbersOffestTotalWidth = t.audioScrubbersOffestTotalWidth, this.volume = t.volume, this.lastVolume = o.volume, this.startSpaceBetweenButtons = t.startSpaceBetweenButtons, this.spaceBetweenButtons = t.vdSpaceBetweenButtons, this.timeOffestTotalWidth = 0, this.percentPlayed = 0, this.timeOffestLeftWidth = t.timeOffsetLeftWidth, this.timeOffsetRightWidth = t.timeOffsetRightWidth, this.lastTimeLength = 0, this.showAnimationIntroId_to, this.allowToChangeVolume_bl = t.allowToChangeVolume_bl, this.isMainScrubberScrubbing_bl = !1, this.isMainScrubberDisabled_bl = !1, this.isVolumeScrubberDisabled_bl = !1, this.isMainScrubberLineVisible_bl = !1, this.isVolumeScrubberLineVisible_bl = !1, this.isMute_bl = !1, this.isMobile_bl = FWDRLUtils.isMobile, this.hasPointerEvent_bl = FWDRLUtils.hasPointerEvent, o.init = function() {
            o.mainHolder_do = new FWDRLDisplayObject("div"), o.mainHolder_do.setOverflow("visible"), o.setBkColor(o.audioControllerBackgroundColor_str), o.addChild(o.mainHolder_do), o.setupPlayPauseButton(), o.setupMainScrubber(), o.setupTime(), o.setupVolumeButton(), o.setupVolumeScrubber(), o.isMobile_bl || o.setupDisable()
        }, o.resizeAndPosition = function(e) {
            (i.stageWidth != o.stageWidth || i.stageHeight != o.stageHeight || e) && (o.stageWidth = i.stageWidth, o.stageHeight = i.stageHeight, o.positionButtons())
        }, o.positionButtons = function() {
            var e, t;
            if (o.stageWidth) {
                o.bk_do && o.bk_do.setWidth(o.stageWidth), o.playPauseButton_do && (FWDRLTweenMax.killTweensOf(o.mainHolder_do), o.mainHolder_do.setWidth(o.stageWidth), o.mainHolder_do.setHeight(o.stageHeight), o.setWidth(o.stageWidth), o.setHeight(o.stageHeight));
                for (var n = [], s = 0; s < o.buttons_ar.length; s++) n[s] = o.buttons_ar[s];
                o.mainScrubberWidth = o.stageWidth - 2 * o.startSpaceBetweenButtons;
                for (var s = 0; s < n.length; s++) e = n[s], e != o.mainScrubber_do && (o.mainScrubberWidth -= e.w + o.spaceBetweenButtons);
                for (; o.mainScrubberWidth < o.mainScrubberMinWidth && n.length > 3;) {
                    o.mainScrubberWidth = o.stageWidth - 2 * o.startSpaceBetweenButtons, o.volumeScrubber_do && -1 != FWDRLUtils.indexOfArray(n, o.volumeScrubber_do) ? (n.splice(FWDRLUtils.indexOfArray(n, o.volumeScrubber_do), 1), o.volumeScrubber_do.setX(-1e3)) : o.time_do && -1 != FWDRLUtils.indexOfArray(n, o.time_do) ? (n.splice(FWDRLUtils.indexOfArray(n, o.time_do), 1), o.time_do.setX(-1e3)) : o.mainScrubber_do && -1 != FWDRLUtils.indexOfArray(n, o.mainScrubber_do) ? (n.splice(FWDRLUtils.indexOfArray(n, o.mainScrubber_do), 1), o.mainScrubber_do.setX(-1e3)) : o.volumeButton_do && -1 != FWDRLUtils.indexOfArray(n, o.volumeButton_do) && (n.splice(FWDRLUtils.indexOfArray(n, o.volumeButton_do), 1), o.volumeButton_do.setX(-1e3));
                    for (var s = 0; s < n.length; s++) e = n[s], e != o.mainScrubber_do && (o.mainScrubberWidth -= e.w + o.spaceBetweenButtons)
                }(n[n.length - 1] == o.volumeScrubber_do || n[n.length - 1] == o.mainScrubber_do) && (o.mainScrubberWidth -= o.scrubbersOffestTotalWidth), n[n.length - 1] == o.time_do && (o.mainScrubberWidth -= o.timeOffestTotalWidth);
                for (var s = 0; s < n.length; s++) e = n[s], FWDRLTweenMax.killTweensOf(e), 0 == s ? e.setX(o.startSpaceBetweenButtons) : e == o.mainScrubber_do ? (t = n[s - 1], o.mainScrubber_do.setX(t.x + t.w + o.spaceBetweenButtons), o.mainScrubber_do.setWidth(o.mainScrubberWidth), o.mainScrubberBkMiddle_do.setWidth(o.mainScrubberWidth - 2 * o.scrubbersBkLeftAndRightWidth), o.mainScrubberBkRight_do.setX(o.mainScrubberWidth - o.scrubbersBkLeftAndRightWidth), o.mainScrubberDragMiddle_do.setWidth(o.mainScrubberWidth - o.scrubbersBkLeftAndRightWidth - o.scrubbersOffsetWidth)) : (t = n[s - 1], e.setX(t.x + t.w + o.spaceBetweenButtons)), e.setY(parseInt((o.stageHeight - e.h) / 2));
                o.disable_do && (o.disable_do.setWidth(o.stageWidth), o.disable_do.setHeight(o.stageHeight)), (!o.mainScrubber_do || o.mainScrubber_do && o.mainScrubber_do.x < 0) && e && (i.stageWidth = e.x + e.w + o.startSpaceBetweenButtons, o.stageWidth = i.stageWidth, i.resizeHandler(!0)), o.progressMiddle_do && o.progressMiddle_do.setWidth(o.mainScrubberWidth - o.scrubbersBkLeftAndRightWidth - o.scrubbersOffsetWidth), o.updateMainScrubber(o.percentPlayed)
            }
        }, this.setupDisable = function() {
            o.disable_do = new FWDRLDisplayObject("div"), FWDRLUtils.isIE && (o.disable_do.setBkColor("#FFFFFF"), o.disable_do.setAlpha(0))
        }, this.setupMainScrubber = function() {
            o.mainScrubber_do = new FWDRLDisplayObject("div"), o.mainScrubber_do.setHeight(o.scrubbersHeight), o.mainScrubberBkLeft_do = new FWDRLDisplayObject("img"), o.mainScrubberBkLeft_do.setScreen(o.audioMainScrubberBkLeft_img), o.mainScrubberBkRight_do = new FWDRLDisplayObject("img");
            var e = new Image;
            e.src = t.mainScrubberBkRightPath_str, o.mainScrubberBkRight_do.setScreen(e), o.mainScrubberBkRight_do.setWidth(o.mainScrubberBkLeft_do.w), o.mainScrubberBkRight_do.setHeight(o.mainScrubberBkLeft_do.h);
            var i = new Image;
            i.src = o.mainScrubberBkMiddlePath_str, o.isMobile_bl ? (o.mainScrubberBkMiddle_do = new FWDRLDisplayObject("div"), o.mainScrubberBkMiddle_do.getStyle().background = "url('" + o.mainScrubberBkMiddlePath_str + "') repeat-x") : (o.mainScrubberBkMiddle_do = new FWDRLDisplayObject("img"), o.mainScrubberBkMiddle_do.setScreen(i)), o.mainScrubberBkMiddle_do.setHeight(o.scrubbersHeight), o.mainScrubberBkMiddle_do.setX(o.scrubbersBkLeftAndRightWidth), o.mainProgress_do = new FWDRLDisplayObject("div"), o.mainProgress_do.setHeight(o.scrubbersHeight), o.progressLeft_do = new FWDRLDisplayObject("img"), o.progressLeft_do.setScreen(o.progress), i = new Image, i.src = o.progressMiddlePath_str, o.progressMiddle_do = new FWDRLDisplayObject("div"), o.progressMiddle_do.getStyle().background = "url('" + o.progressMiddlePath_str + "') repeat-x", o.progressMiddle_do.setHeight(o.scrubbersHeight), o.progressMiddle_do.setX(o.mainScrubberDragLeftWidth), o.mainScrubberDrag_do = new FWDRLDisplayObject("div"), o.mainScrubberDrag_do.setHeight(o.scrubbersHeight), o.mainScrubberDragLeft_do = new FWDRLDisplayObject("img"), o.mainScrubberDragLeft_do.setScreen(o.mainScrubberDragLeft_img), i = new Image, i.src = o.mainScrubberDragMiddlePath_str, o.isMobile_bl ? (o.mainScrubberDragMiddle_do = new FWDRLDisplayObject("div"), o.mainScrubberDragMiddle_do.getStyle().background = "url('" + o.mainScrubberDragMiddlePath_str + "') repeat-x") : (o.mainScrubberDragMiddle_do = new FWDRLDisplayObject("img"), o.mainScrubberDragMiddle_do.setScreen(i)), o.mainScrubberDragMiddle_do.setHeight(o.scrubbersHeight), o.mainScrubberDragMiddle_do.setX(o.mainScrubberDragLeftWidth), o.mainScrubberBarLine_do = new FWDRLDisplayObject("img"), o.mainScrubberBarLine_do.setScreen(o.mainScrubberLine_img), o.mainScrubberBarLine_do.setAlpha(0), o.mainScrubberBarLine_do.hasTransform3d_bl = !1, o.mainScrubberBarLine_do.hasTransform2d_bl = !1, o.buttons_ar.push(o.mainScrubber_do), o.mainScrubber_do.addChild(o.mainScrubberBkLeft_do), o.mainScrubber_do.addChild(o.mainScrubberBkMiddle_do), o.mainScrubber_do.addChild(o.mainScrubberBkRight_do), o.mainScrubber_do.addChild(o.mainScrubberBarLine_do), o.mainScrubberDrag_do.addChild(o.mainScrubberDragLeft_do), o.mainScrubberDrag_do.addChild(o.mainScrubberDragMiddle_do), o.mainProgress_do.addChild(o.progressLeft_do), o.mainProgress_do.addChild(o.progressMiddle_do), o.mainScrubber_do.addChild(o.mainProgress_do), o.mainScrubber_do.addChild(o.mainScrubberDrag_do), o.mainScrubber_do.addChild(o.mainScrubberBarLine_do), o.mainHolder_do.addChild(o.mainScrubber_do), o.isMobile_bl ? o.hasPointerEvent_bl ? (o.mainScrubber_do.screen.addEventListener("pointerover", o.mainScrubberOnOverHandler), o.mainScrubber_do.screen.addEventListener("pointerout", o.mainScrubberOnOutHandler), o.mainScrubber_do.screen.addEventListener("pointerdown", o.mainScrubberOnDownHandler)) : o.mainScrubber_do.screen.addEventListener("touchstart", o.mainScrubberOnDownHandler) : o.screen.addEventListener ? (o.mainScrubber_do.screen.addEventListener("mouseover", o.mainScrubberOnOverHandler), o.mainScrubber_do.screen.addEventListener("mouseout", o.mainScrubberOnOutHandler), o.mainScrubber_do.screen.addEventListener("mousedown", o.mainScrubberOnDownHandler)) : o.screen.attachEvent && (o.mainScrubber_do.screen.attachEvent("onmouseover", o.mainScrubberOnOverHandler), o.mainScrubber_do.screen.attachEvent("onmouseout", o.mainScrubberOnOutHandler), o.mainScrubber_do.screen.attachEvent("onmousedown", o.mainScrubberOnDownHandler)), o.disableMainScrubber(), o.updateMainScrubber(0)
        }, this.mainScrubberOnOverHandler = function() {
            o.isMainScrubberDisabled_bl
        }, this.mainScrubberOnOutHandler = function() {
            o.isMainScrubberDisabled_bl
        }, this.mainScrubberOnDownHandler = function(t) {
            if (!o.isMainScrubberDisabled_bl) {
                t.preventDefault && t.preventDefault(), o.isMainScrubberScrubbing_bl = !0;
                var i = FWDRLUtils.getViewportMouseCoordinates(t),
                    n = i.screenX - o.mainScrubber_do.getGlobalX();
                0 > n ? n = 0 : n > o.mainScrubberWidth - o.scrubbersOffsetWidth && (n = o.mainScrubberWidth - o.scrubbersOffsetWidth);
                var s = n / o.mainScrubberWidth;
                o.disable_do && o.addChild(o.disable_do), o.updateMainScrubber(s), o.dispatchEvent(e.START_TO_SCRUB), o.dispatchEvent(e.SCRUB, {
                    percent: s
                }), o.isMobile_bl ? o.hasPointerEvent_bl ? (window.addEventListener("pointermove", o.mainScrubberMoveHandler), window.addEventListener("pointerup", o.mainScrubberEndHandler)) : (window.addEventListener("touchmove", o.mainScrubberMoveHandler), window.addEventListener("touchend", o.mainScrubberEndHandler)) : window.addEventListener ? (window.addEventListener("mousemove", o.mainScrubberMoveHandler), window.addEventListener("mouseup", o.mainScrubberEndHandler)) : document.attachEvent && (document.attachEvent("onmousemove", o.mainScrubberMoveHandler), document.attachEvent("onmouseup", o.mainScrubberEndHandler))
            }
        }, this.mainScrubberMoveHandler = function(t) {
            t.preventDefault && t.preventDefault();
            var i = FWDRLUtils.getViewportMouseCoordinates(t),
                n = i.screenX - o.mainScrubber_do.getGlobalX();
            0 > n ? n = 0 : n > o.mainScrubberWidth - o.scrubbersOffsetWidth && (n = o.mainScrubberWidth - o.scrubbersOffsetWidth);
            var s = n / o.mainScrubberWidth;
            o.updateMainScrubber(s), o.dispatchEvent(e.SCRUB, {
                percent: s
            })
        }, this.mainScrubberEndHandler = function() {
            o.disable_do && o.contains(o.disable_do) && o.removeChild(o.disable_do), o.dispatchEvent(e.STOP_TO_SCRUB), o.isMobile_bl ? o.hasPointerEvent_bl ? (window.removeEventListener("pointermove", o.mainScrubberMoveHandler), window.removeEventListener("pointerup", o.mainScrubberEndHandler)) : (window.removeEventListener("touchmove", o.mainScrubberMoveHandler), window.removeEventListener("touchend", o.mainScrubberEndHandler)) : window.removeEventListener ? (window.removeEventListener("mousemove", o.mainScrubberMoveHandler), window.removeEventListener("mouseup", o.mainScrubberEndHandler)) : document.detachEvent && (document.detachEvent("onmousemove", o.mainScrubberMoveHandler), document.detachEvent("onmouseup", o.mainScrubberEndHandler))
        }, this.disableMainScrubber = function() {
            o.mainScrubber_do && (o.isMainScrubberDisabled_bl = !0, o.mainScrubber_do.setButtonMode(!1), o.mainScrubberEndHandler(), o.updateMainScrubber(0), o.updatePreloaderBar(0))
        }, this.enableMainScrubber = function() {
            o.mainScrubber_do && (o.isMainScrubberDisabled_bl = !1, o.mainScrubber_do.setButtonMode(!0))
        }, this.updateMainScrubber = function(e) {
            if (o.mainScrubber_do && !isNaN(e)) {
                var t = parseInt(e * o.mainScrubberWidth);
                o.percentPlayed = e, !FWDRLEAP.hasHTML5Audio && t >= o.mainProgress_do.w && (t = o.mainProgress_do.w), 1 > t && o.isMainScrubberLineVisible_bl ? (o.isMainScrubberLineVisible_bl = !1, FWDRLTweenMax.to(o.mainScrubberBarLine_do, .5, {
                    alpha: 0
                })) : t > 1 && !o.isMainScrubberLineVisible_bl && (o.isMainScrubberLineVisible_bl = !0, FWDRLTweenMax.to(o.mainScrubberBarLine_do, .5, {
                    alpha: 1
                })), (isNaN(t) || 0 > t) && (t = 0), o.mainScrubberDrag_do.setWidth(t), t > o.mainScrubberWidth - o.scrubbersOffsetWidth && (t = o.mainScrubberWidth - o.scrubbersOffsetWidth), FWDRLTweenMax.to(o.mainScrubberBarLine_do, .8, {
                    x: t + 1,
                    ease: Expo.easeOut
                })
            }
        }, this.updatePreloaderBar = function(e) {
            if (o.mainProgress_do && !isNaN(e)) {
                var t = parseInt(e * o.mainScrubberWidth);
                1 == e ? o.mainProgress_do.setY(-30) : 0 != o.mainProgress_do.y && 1 != e && o.mainProgress_do.setY(0), t > o.mainScrubberWidth - o.scrubbersOffsetWidth && (t = o.mainScrubberWidth - o.scrubbersOffsetWidth), (isNaN(t) || 0 > t) && (t = 0), o.mainProgress_do.setWidth(t)
            }
        }, this.setupPlayPauseButton = function() {
            FWDRLComplexButton.setPrototype(), o.playPauseButton_do = new FWDRLComplexButton(o.playN_img, t.audioPlaySPath_str, o.pauseN_img, t.audioPauseSPath_str, !0), o.buttons_ar.push(o.playPauseButton_do), o.playPauseButton_do.addListener(FWDRLComplexButton.MOUSE_UP, o.playButtonMouseUpHandler), o.mainHolder_do.addChild(o.playPauseButton_do)
        }, this.showPlayButton = function() {
            o.playPauseButton_do && o.playPauseButton_do.setButtonState(1)
        }, this.showPauseButton = function() {
            o.playPauseButton_do && o.playPauseButton_do.setButtonState(0)
        }, this.playButtonMouseUpHandler = function() {
            o.dispatchEvent(0 == o.playPauseButton_do.currentState ? e.PAUSE : e.PLAY)
        }, this.setupTime = function() {
            o.time_do = new FWDRLDisplayObject("div"), o.time_do.hasTransform3d_bl = !1, o.time_do.hasTransform2d_bl = !1, o.time_do.setBackfaceVisibility(), o.time_do.getStyle().paddingLeft = o.timeOffestLeftWidth + "px", o.time_do.getStyle().paddingRight = o.timeOffsetRightWidth + "px", o.time_do.getStyle().fontFamily = "Arial", o.time_do.getStyle().fontSize = "12px", o.time_do.getStyle().whiteSpace = "nowrap", o.time_do.getStyle().textAlign = "center", o.time_do.getStyle().color = o.timeColor_str, o.time_do.getStyle().fontSmoothing = "antialiased", o.time_do.getStyle().webkitFontSmoothing = "antialiased", o.time_do.getStyle().textRendering = "optimizeLegibility", o.mainHolder_do.addChild(o.time_do), o.updateTime("00:00/00:00"), o.buttons_ar.push(o.time_do)
        }, this.updateTime = function(e) {
            o.time_do && (o.time_do.setInnerHTML(e), o.lastTimeLength != e.length && (o.time_do.w = o.time_do.getWidth(), o.positionButtons(), setTimeout(function() {
                o.time_do.w = o.time_do.getWidth(), o.time_do.h = o.time_do.getHeight(), o.positionButtons()
            }, 50), o.lastTimeLength = e.length))
        }, this.setupVolumeButton = function() {
            FWDRLEVPVolumeButton.setPrototype(), o.volumeButton_do = new FWDRLEVPVolumeButton(o.volumeN_img, t.volumeSPath_str, t.volumeDPath_str), o.volumeButton_do.addListener(FWDRLEVPVolumeButton.MOUSE_UP, o.volumeOnMouseUpHandler), o.buttons_ar.push(o.volumeButton_do), o.mainHolder_do.addChild(o.volumeButton_do), o.allowToChangeVolume_bl || o.volumeButton_do.disable()
        }, this.volumeOnMouseUpHandler = function() {
            var e = o.lastVolume;
            o.isMute_bl ? (e = o.lastVolume, o.isMute_bl = !1) : (e = 1e-6, o.isMute_bl = !0), o.updateVolume(e)
        }, this.setupVolumeScrubber = function() {
            o.volumeScrubber_do = new FWDRLDisplayObject("div"), o.volumeScrubber_do.setHeight(o.scrubbersHeight), o.volumeScrubberBkLeft_do = new FWDRLDisplayObject("img");
            var e = new Image;
            e.src = t.volumeScrubberBkLeftPath_str, o.volumeScrubberBkLeft_do.setScreen(e), o.volumeScrubberBkLeft_do.setWidth(o.audioMainScrubberBkLeft_img.width), o.volumeScrubberBkLeft_do.setHeight(o.audioMainScrubberBkLeft_img.height), o.volumeScrubberBkRight_do = new FWDRLDisplayObject("img");
            var i = new Image;
            i.src = t.volumeScrubberBkRightPath_str, o.volumeScrubberBkRight_do.setScreen(i), o.volumeScrubberBkRight_do.setWidth(o.mainScrubberBkRight_img.width), o.volumeScrubberBkRight_do.setHeight(o.mainScrubberBkRight_img.height);
            var n = new Image;
            n.src = o.volumeScrubberBkMiddlePath_str, o.isMobile_bl ? (o.volumeScrubberBkMiddle_do = new FWDRLDisplayObject("div"), o.volumeScrubberBkMiddle_do.getStyle().background = "url('" + o.volumeScrubberBkMiddlePath_str + "') repeat-x") : (o.volumeScrubberBkMiddle_do = new FWDRLDisplayObject("img"), o.volumeScrubberBkMiddle_do.setScreen(n)), o.volumeScrubberBkMiddle_do.setHeight(o.scrubbersHeight), o.volumeScrubberBkMiddle_do.setX(o.scrubbersBkLeftAndRightWidth), o.volumeScrubberDrag_do = new FWDRLDisplayObject("div"), o.volumeScrubberDrag_do.setHeight(o.scrubbersHeight), o.volumeScrubberDragLeft_do = new FWDRLDisplayObject("img");
            var s = new Image;
            s.src = t.volumeScrubberDragLeftPath_str, o.volumeScrubberDragLeft_do.setScreen(s), o.volumeScrubberDragLeft_do.setWidth(o.mainScrubberDragLeft_img.width), o.volumeScrubberDragLeft_do.setHeight(o.mainScrubberDragLeft_img.height), n = new Image, n.src = o.volumeScrubberDragMiddlePath_str, o.isMobile_bl ? (o.volumeScrubberDragMiddle_do = new FWDRLDisplayObject("div"), o.volumeScrubberDragMiddle_do.getStyle().background = "url('" + o.volumeScrubberDragMiddlePath_str + "') repeat-x") : (o.volumeScrubberDragMiddle_do = new FWDRLDisplayObject("img"), o.volumeScrubberDragMiddle_do.setScreen(n)), o.volumeScrubberDragMiddle_do.setHeight(o.scrubbersHeight), o.volumeScrubberDragMiddle_do.setX(o.mainScrubberDragLeftWidth), o.volumeScrubberBarLine_do = new FWDRLDisplayObject("img");
            var r = new Image;
            r.src = t.volumeScrubberLinePath_str, o.volumeScrubberBarLine_do.setScreen(r), o.volumeScrubberBarLine_do.setWidth(o.mainScrubberLine_img.width), o.volumeScrubberBarLine_do.setHeight(o.mainScrubberLine_img.height), o.volumeScrubberBarLine_do.setAlpha(0), o.volumeScrubberBarLine_do.hasTransform3d_bl = !1, o.volumeScrubberBarLine_do.hasTransform2d_bl = !1, o.volumeScrubber_do.setWidth(o.volumeScrubberWidth), o.volumeScrubberBkMiddle_do.setWidth(o.volumeScrubberWidth - 2 * o.scrubbersBkLeftAndRightWidth), o.volumeScrubberBkRight_do.setX(o.volumeScrubberWidth - o.scrubbersBkLeftAndRightWidth), o.volumeScrubberDragMiddle_do.setWidth(o.volumeScrubberWidth - o.scrubbersBkLeftAndRightWidth - o.scrubbersOffsetWidth), o.volumeScrubber_do.addChild(o.volumeScrubberBkLeft_do), o.volumeScrubber_do.addChild(o.volumeScrubberBkMiddle_do), o.volumeScrubber_do.addChild(o.volumeScrubberBkRight_do), o.volumeScrubber_do.addChild(o.volumeScrubberBarLine_do), o.volumeScrubberDrag_do.addChild(o.volumeScrubberDragLeft_do), o.volumeScrubberDrag_do.addChild(o.volumeScrubberDragMiddle_do), o.volumeScrubber_do.addChild(o.volumeScrubberDrag_do), o.volumeScrubber_do.addChild(o.volumeScrubberBarLine_do), o.buttons_ar.push(o.volumeScrubber_do), o.mainHolder_do.addChild(o.volumeScrubber_do), o.allowToChangeVolume_bl && (o.isMobile_bl ? o.hasPointerEvent_bl ? (o.volumeScrubber_do.screen.addEventListener("pointerover", o.volumeScrubberOnOverHandler), o.volumeScrubber_do.screen.addEventListener("pointerout", o.volumeScrubberOnOutHandler), o.volumeScrubber_do.screen.addEventListener("pointerdown", o.volumeScrubberOnDownHandler)) : o.volumeScrubber_do.screen.addEventListener("touchstart", o.volumeScrubberOnDownHandler) : o.screen.addEventListener ? (o.volumeScrubber_do.screen.addEventListener("mouseover", o.volumeScrubberOnOverHandler), o.volumeScrubber_do.screen.addEventListener("mouseout", o.volumeScrubberOnOutHandler), o.volumeScrubber_do.screen.addEventListener("mousedown", o.volumeScrubberOnDownHandler)) : o.screen.attachEvent && (o.volumeScrubber_do.screen.attachEvent("onmouseover", o.volumeScrubberOnOverHandler), o.volumeScrubber_do.screen.attachEvent("onmouseout", o.volumeScrubberOnOutHandler), o.volumeScrubber_do.screen.attachEvent("onmousedown", o.volumeScrubberOnDownHandler))), o.enableVolumeScrubber(), o.updateVolumeScrubber(o.volume)
        }, this.volumeScrubberOnOverHandler = function() {
            o.isVolumeScrubberDisabled_bl
        }, this.volumeScrubberOnOutHandler = function() {
            o.isVolumeScrubberDisabled_bl
        }, this.volumeScrubberOnDownHandler = function(e) {
            if (!o.isVolumeScrubberDisabled_bl) {
                e.preventDefault && e.preventDefault();
                var t = FWDRLUtils.getViewportMouseCoordinates(e),
                    i = t.screenX - o.volumeScrubber_do.getGlobalX();
                0 > i ? i = 0 : i > o.volumeScrubberWidth - o.scrubbersOffsetWidth && (i = o.volumeScrubberWidth - o.scrubbersOffsetWidth);
                var n = i / o.volumeScrubberWidth;
                o.disable_do && o.addChild(o.disable_do), o.lastVolume = n, o.updateVolume(n), o.isMobile_bl ? o.hasPointerEvent_bl ? (window.addEventListener("pointermove", o.volumeScrubberMoveHandler), window.addEventListener("pointerup", o.volumeScrubberEndHandler)) : (window.addEventListener("touchmove", o.volumeScrubberMoveHandler), window.addEventListener("touchend", o.volumeScrubberEndHandler)) : window.addEventListener ? (window.addEventListener("mousemove", o.volumeScrubberMoveHandler), window.addEventListener("mouseup", o.volumeScrubberEndHandler)) : document.attachEvent && (document.attachEvent("onmousemove", o.volumeScrubberMoveHandler), document.attachEvent("onmouseup", o.volumeScrubberEndHandler))
            }
        }, this.volumeScrubberMoveHandler = function(e) {
            if (!o.isVolumeScrubberDisabled_bl) {
                e.preventDefault && e.preventDefault();
                var t = FWDRLUtils.getViewportMouseCoordinates(e),
                    i = t.screenX - o.volumeScrubber_do.getGlobalX();
                0 > i ? i = 0 : i > o.volumeScrubberWidth - o.scrubbersOffsetWidth && (i = o.volumeScrubberWidth - o.scrubbersOffsetWidth);
                var n = i / o.volumeScrubberWidth;
                o.lastVolume = n, o.updateVolume(n)
            }
        }, this.volumeScrubberEndHandler = function() {
            o.disable_do && o.contains(o.disable_do) && o.removeChild(o.disable_do), o.isMobile_bl ? o.hasPointerEvent_bl ? (window.removeEventListener("pointermove", o.volumeScrubberMoveHandler), window.removeEventListener("pointerup", o.volumeScrubberEndHandler)) : (window.removeEventListener("touchmove", o.volumeScrubberMoveHandler), window.removeEventListener("touchend", o.volumeScrubberEndHandler)) : window.removeEventListener ? (window.removeEventListener("mousemove", o.volumeScrubberMoveHandler), window.removeEventListener("mouseup", o.volumeScrubberEndHandler)) : document.detachEvent && (document.detachEvent("onmousemove", o.volumeScrubberMoveHandler), document.detachEvent("onmouseup", o.volumeScrubberEndHandler))
        }, this.disableVolumeScrubber = function() {
            o.isVolumeScrubberDisabled_bl = !0, o.volumeScrubber_do.setButtonMode(!1), o.volumeScrubberEndHandler()
        }, this.enableVolumeScrubber = function() {
            o.isVolumeScrubberDisabled_bl = !1, o.volumeScrubber_do.setButtonMode(!0)
        }, this.updateVolumeScrubber = function(e) {
            var t = parseInt(e * o.volumeScrubberWidth);
            o.volumeScrubberDrag_do.setWidth(t), 1 > t && o.isVolumeScrubberLineVisible_bl ? (o.isVolumeScrubberLineVisible_bl = !1, FWDRLTweenMax.to(o.volumeScrubberBarLine_do, .5, {
                alpha: 0
            })) : t > 1 && !o.isVolumeScrubberLineVisible_bl && (o.isVolumeScrubberLineVisible_bl = !0, FWDRLTweenMax.to(o.volumeScrubberBarLine_do, .5, {
                alpha: 1
            })), t > o.volumeScrubberWidth - o.scrubbersOffsetWidth && (t = o.volumeScrubberWidth - o.scrubbersOffsetWidth), FWDRLTweenMax.to(o.volumeScrubberBarLine_do, .8, {
                x: t + 1,
                ease: Expo.easeOut
            })
        }, this.updateVolume = function(t) {
            o.volume = t, o.volume <= 1e-6 ? (o.isMute_bl = !0, o.volume = 1e-6) : o.voume >= 1 ? (o.isMute_bl = !1, o.volume = 1) : o.isMute_bl = !1, 1e-6 == o.volume ? o.volumeButton_do && o.volumeButton_do.setDisabledState() : o.volumeButton_do && o.volumeButton_do.setEnabledState(), o.volumeScrubberBarLine_do && o.updateVolumeScrubber(o.volume), o.dispatchEvent(e.CHANGE_VOLUME, {
                percent: o.volume
            })
        }, this.cleanMainEvents = function() {}, this.init()
    };
    e.setPrototype = function() {
        e.prototype = new FWDRLDisplayObject("div")
    }, e.PLAY = "play", e.PAUSE = "pause", e.START_TO_SCRUB = "startToScrub", e.SCRUB = "scrub", e.STOP_TO_SCRUB = "stopToScrub", e.CHANGE_VOLUME = "changeVolume", e.prototype = null, window.FWDRLEAPController = e
}(),
function() {
    var e = function() {
        this.listeners = {
            events_ar: []
        }, this.addListener = function(e, t) {
            if (void 0 == e) throw Error("type is required.");
            if ("object" == typeof e) throw Error("type must be of type String.");
            if ("function" != typeof t) throw Error("listener must be of type Function.");
            var i = {};
            i.type = e, i.listener = t, i.target = this, this.listeners.events_ar.push(i)
        }, this.dispatchEvent = function(e, t) {
            if (null != this.listeners) {
                if (void 0 == e) throw Error("type is required.");
                if ("object" == typeof e) throw Error("type must be of type String.");
                for (var i = 0, o = this.listeners.events_ar.length; o > i; i++)
                    if (this.listeners.events_ar[i].target === this && this.listeners.events_ar[i].type === e) {
                        if (t)
                            for (var n in t) this.listeners.events_ar[i][n] = t[n];
                        this.listeners.events_ar[i].listener.call(this, this.listeners.events_ar[i])
                    }
            }
        }, this.removeListener = function(e, t) {
            if (void 0 == e) throw Error("type is required.");
            if ("object" == typeof e) throw Error("type must be of type String.");
            if ("function" != typeof t) throw Error("listener must be of type Function." + e);
            for (var i = 0, o = this.listeners.events_ar.length; o > i; i++)
                if (this.listeners.events_ar[i].target === this && this.listeners.events_ar[i].type === e && this.listeners.events_ar[i].listener === t) {
                    this.listeners.events_ar.splice(i, 1);
                    break
                }
        }, this.destroy = function() {
            this.listeners = null, this.addListener = null, this.dispatchEvent = null, this.removeListener = null
        }
    };
    window.FWDRLEventDispatcher = e
}(window),
function() {
    var e = function(t, i) {
        {
            var o = this;
            e.prototype
        }
        this.bkLeft_img = t.bkLeft_img, this.bkRight_img = t.bkRight_img, this.videoPlayN_img = t.videoPlayN_img, this.playS_img = t.playS_img, this.videoPauseN_img = t.videoPauseN_img, this.pauseS_img = t.pauseS_img, this.videoMainScrubberBkLeft_img = t.videoMainScrubberBkLeft_img, this.videoMainScrubberDragLeft_img = t.videoMainScrubberDragLeft_img, this.videoMainScrubberLine_img = t.videoMainScrubberLine_img, this.volumeScrubberBkLeft_img = t.volumeScrubberBkLeft_img, this.volumeScrubberDragLeft_img = t.volumeScrubberDragLeft_img, this.volumeScrubberLine_img = t.volumeScrubberLine_img, this.videoProgressLeft_img = t.videoProgressLeft_img, this.videoVolumeN_img = t.videoVolumeN_img, this.volumeS_img = t.volumeS_img, this.volumeD_img = t.volumeD_img, this.videoFullScreenN_img = t.videoFullScreenN_img, this.videoNormalScreenN_img = t.videoNormalScreenN_img, this.buttons_ar = [], this.pointer_do, this.disable_do = null, this.mainHolder_do = null, this.playPauseButton_do = null, this.mainScrubber_do = null, this.mainScrubberBkLeft_do = null, this.mainScrubberBkMiddle_do = null, this.mainScrubberBkRight_do = null, this.mainScrubberDrag_do = null, this.mainScrubberDragLeft_do = null, this.mainScrubberDragMiddle_do = null, this.mainScrubberBarLine_do = null, this.mainProgress_do = null, this.progressLeft_do = null, this.progressMiddle_do = null, this.time_do = null, this.volumeButton_do = null, this.volumeScrubber_do = null, this.volumeScrubberBkLeft_do = null, this.volumeScrubberBkMiddle_do = null, this.volumeScrubberBkRight_do = null, this.volumeScrubberDrag_do = null, this.volumeScrubberDragLeft_do = null, this.volumeScrubberDragMiddle_do = null, this.volumeScrubberBarLine_do = null, this.fullScreenButton_do = null, this.bk_do = null, this.isMainScrubberOnTop_bl = !0, this.videoControllerBackgroundColor_str = t.videoControllerBackgroundColor_str, this.videoBkMiddlePath_str = t.videoBkMiddlePath_str, this.videoMainScrubberBkMiddlePath_str = t.videoMainScrubberBkMiddlePath_str, this.videoVolumeScrubberBkMiddlePath_str = t.videoVolumeScrubberBkMiddlePath_str, this.videoMainScrubberDragMiddlePath_str = t.videoMainScrubberDragMiddlePath_str, this.videoVolumeScrubberDragMiddlePath_str = t.videoVolumeScrubberDragMiddlePath_str, this.timeColor_str = t.timeColor_str, this.videoProgressMiddlePath_str = t.videoProgressMiddlePath_str, this.mainScrubberOffestTop = t.mainScrubberOffestTop, this.stageWidth = 0, this.stageHeight = t.controllerHeight, this.scrubbersBkLeftAndRightWidth = this.videoMainScrubberBkLeft_img.width, this.mainScrubberWidth = 0, this.mainScrubberMinWidth = 100, this.volumeScrubberWidth = t.volumeScrubberWidth, this.scrubbersHeight = this.videoMainScrubberBkLeft_img.height, this.mainScrubberDragLeftWidth = o.videoMainScrubberDragLeft_img.width, this.scrubbersOffsetWidth = t.scrubbersOffsetWidth, this.volumeScrubberOffsetRightWidth = t.volumeScrubberOffsetRightWidth, this.volume = t.volume, this.lastVolume = o.volume, this.startSpaceBetweenButtons = t.startSpaceBetweenButtons, this.vdSpaceBetweenButtons = t.vdSpaceBetweenButtons, this.percentPlayed = 0, this.percentLoaded = 0, this.lastTimeLength = 0, this.pointerWidth = 8, this.pointerHeight = 5, this.timeOffsetLeftWidth = t.timeOffsetLeftWidth, this.timeOffsetRightWidth = t.timeOffsetRightWidth, this.videoShowFullScreenButton_bl = t.videoShowFullScreenButton_bl, this.showVolumeScrubber_bl = t.showVolumeScrubber_bl, this.allowToChangeVolume_bl = t.allowToChangeVolume_bl, this.showTime_bl = t.showTime_bl, this.showVolumeButton_bl = t.showVolumeButton_bl, this.showControllerWhenVideoIsStopped_bl = t.showControllerWhenVideoIsStopped_bl, this.isMainScrubberScrubbing_bl = !1, this.isMainScrubberDisabled_bl = !1, this.isVolumeScrubberDisabled_bl = !1, this.isMainScrubberLineVisible_bl = !1, this.isVolumeScrubberLineVisible_bl = !1, this.isMute_bl = !1, this.isShowed_bl = !0, this.repeatBackground_bl = t.repeatBackground_bl, this.isMobile_bl = FWDRLUtils.isMobile, this.hasPointerEvent_bl = FWDRLUtils.hasPointerEvent, o.init = function() {
            o.setOverflow("visible"), o.mainHolder_do = new FWDRLDisplayObject("div"), o.mainHolder_do.getStyle().backgroundColor = o.videoControllerBackgroundColor_str, o.mainHolder_do.setOverflow("visible"), o.addChild(o.mainHolder_do), o.setupPlayPauseButton(), o.setupMainScrubber(), o.showTime_bl && o.setupTime(), o.showVolumeButton_bl && o.setupVolumeButton(), o.showVolumeScrubber_bl && o.setupVolumeScrubber(), o.videoShowFullScreenButton_bl && o.setupFullscreenButton(), o.isMobile_bl || o.setupDisable(), o.hide(!1, !0), o.showControllerWhenVideoIsStopped_bl && o.show(!0)
        }, o.resizeAndPosition = function() {
            o.stageWidth = i.stageWidth, o.positionButtons(), o.setY(i.stageHeight - o.stageHeight)
        }, o.positionButtons = function() {
            if (o.stageWidth) {
                var e, t, i = o.showTime_bl,
                    n = o.volumeScrubber_do;
                o.mainHolder_do.setWidth(o.stageWidth), o.mainHolder_do.setHeight(o.stageHeight), o.setWidth(o.stageWidth), o.setHeight(o.stageHeight);
                for (var s = [], r = 0; r < o.buttons_ar.length; r++) s[r] = o.buttons_ar[r];
                o.mainScrubberWidth = o.stageWidth - 2 * o.startSpaceBetweenButtons;
                for (var r = 0; r < s.length; r++) e = s[r], e != o.mainScrubber_do && (o.mainScrubberWidth -= e.w + o.vdSpaceBetweenButtons);
                for (var a = 3; o.mainScrubberWidth < o.mainScrubberMinWidth && s.length > a;) {
                    o.mainScrubberWidth = o.stageWidth - 2 * o.startSpaceBetweenButtons, o.volumeScrubber_do && -1 != FWDRLUtils.indexOfArray(s, o.volumeScrubber_do) ? (s.splice(FWDRLUtils.indexOfArray(s, o.volumeScrubber_do), 1), o.volumeScrubber_do.setX(-1e3)) : o.time_do && -1 != FWDRLUtils.indexOfArray(s, o.time_do) ? (s.splice(FWDRLUtils.indexOfArray(s, o.time_do), 1), o.time_do.setX(-1e3), i = !1) : o.volumeButton_do && -1 != FWDRLUtils.indexOfArray(s, o.volumeButton_do) ? (s.splice(FWDRLUtils.indexOfArray(s, o.volumeButton_do), 1), o.volumeButton_do.setX(-1e3)) : o.volumeScrubber_do && -1 != FWDRLUtils.indexOfArray(s, o.volumeScrubber_do) && (s.splice(FWDRLUtils.indexOfArray(s, o.volumeScrubber_do), 1), o.volumeScrubber_do.setX(-1e3), n = !1);
                    for (var r = 0; r < s.length; r++) e = s[r], e != o.mainScrubber_do && (o.mainScrubberWidth -= e.w + o.vdSpaceBetweenButtons)
                }
                i && (o.mainScrubberWidth -= 2 * o.timeOffsetLeftWidth), n && (o.mainScrubberWidth -= o.volumeScrubberOffsetRightWidth);
                for (var r = 0; r < s.length; r++) e = s[r], 0 == r ? e.setX(o.startSpaceBetweenButtons) : e == o.mainScrubber_do ? (t = s[r - 1], FWDRLTweenMax.killTweensOf(o.mainScrubber_do), o.mainScrubber_do.setX(t.x + t.w + o.vdSpaceBetweenButtons), o.mainScrubber_do.setY(parseInt((o.stageHeight - o.scrubbersHeight) / 2)), o.mainScrubber_do.setWidth(o.mainScrubberWidth), o.mainScrubberBkMiddle_do.setWidth(o.mainScrubberWidth - 2 * o.scrubbersBkLeftAndRightWidth), o.mainScrubberBkRight_do.setX(o.mainScrubberWidth - o.scrubbersBkLeftAndRightWidth), o.mainScrubberDragMiddle_do.setWidth(o.mainScrubberWidth - o.scrubbersBkLeftAndRightWidth - o.scrubbersOffsetWidth)) : e == o.time_do ? (t = s[r - 1], e.setX(t.x + t.w + o.vdSpaceBetweenButtons + o.timeOffsetLeftWidth)) : e == o.volumeButton_do && i ? (t = s[r - 1], e.setX(t.x + t.w + o.vdSpaceBetweenButtons + o.timeOffsetRightWidth)) : (t = s[r - 1], e.setX(n && t == o.volumeScrubber_do ? t.x + t.w + o.vdSpaceBetweenButtons + o.volumeScrubberOffsetRightWidth : t.x + t.w + o.vdSpaceBetweenButtons));
                o.disable_do && (o.disable_do.setWidth(o.stageWidth), o.disable_do.setHeight(o.stageHeight)), o.bk_do && (o.bk_do.setWidth(o.stageWidth), o.bk_do.setHeight(o.stageHeight)), o.isShowed_bl ? o.isMainScrubberOnTop_bl = !1 : (o.isMainScrubberOnTop_bl = !0, o.positionScrollBarOnTopOfTheController()), o.progressMiddle_do && o.progressMiddle_do.setWidth(o.mainScrubberWidth - o.scrubbersBkLeftAndRightWidth - o.scrubbersOffsetWidth), o.updateMainScrubber(o.percentPlayed), o.updatePreloaderBar(o.percentLoaded)
            }
        }, this.positionScrollBarOnTopOfTheController = function() {
            o.mainScrubberWidth = o.stageWidth, o.updatePreloaderBar(o.percentLoaded), o.mainScrubber_do.setWidth(o.mainScrubberWidth), o.mainScrubberBkMiddle_do.setWidth(o.mainScrubberWidth - 2 * o.scrubbersBkLeftAndRightWidth), o.mainScrubberBkRight_do.setX(o.mainScrubberWidth - o.scrubbersBkLeftAndRightWidth), o.mainScrubberDragMiddle_do.setWidth(o.mainScrubberWidth - o.scrubbersBkLeftAndRightWidth - o.scrubbersOffsetWidth), FWDRLTweenMax.killTweensOf(o.mainScrubber_do), o.mainScrubber_do.setX(0), o.isMainScrubberOnTop_bl || o.isShowed_bl ? o.mainScrubber_do.setY(-o.mainScrubberOffestTop) : o.mainScrubber_do.y != -o.mainScrubberOffestTop && (o.mainScrubber_do.setY(o.mainScrubber_do.h), FWDRLTweenMax.to(o.mainScrubber_do, .8, {
                y: -o.mainScrubberOffestTop,
                ease: Expo.easeOut
            })), o.isMainScrubberOnTop_bl = !0
        }, this.setupDisable = function() {
            o.disable_do = new FWDRLDisplayObject("div"), FWDRLUtils.isIE && (o.disable_do.setBkColor("#FFFFFF"), o.disable_do.setAlpha(0))
        }, this.setupMainScrubber = function() {
            o.mainScrubber_do = new FWDRLDisplayObject("div"), o.mainScrubber_do.setHeight(o.scrubbersHeight), o.mainScrubberBkLeft_do = new FWDRLDisplayObject("img"), o.mainScrubberBkLeft_do.setScreen(o.videoMainScrubberBkLeft_img);
            var e = new Image;
            e.src = t.videoMainScrubberBkRightPath_str, o.mainScrubberBkRight_do = new FWDRLDisplayObject("img"), o.mainScrubberBkRight_do.setScreen(e), o.mainScrubberBkRight_do.setWidth(o.mainScrubberBkLeft_do.w), o.mainScrubberBkRight_do.setHeight(o.mainScrubberBkLeft_do.h);
            var i = new Image;
            i.src = o.videoMainScrubberBkMiddlePath_str, o.isMobile_bl ? (o.mainScrubberBkMiddle_do = new FWDRLDisplayObject("div"), o.mainScrubberBkMiddle_do.getStyle().background = "url('" + o.videoMainScrubberBkMiddlePath_str + "') repeat-x") : (o.mainScrubberBkMiddle_do = new FWDRLDisplayObject("img"), o.mainScrubberBkMiddle_do.setScreen(i)), o.mainScrubberBkMiddle_do.setHeight(o.scrubbersHeight), o.mainScrubberBkMiddle_do.setX(o.scrubbersBkLeftAndRightWidth), o.mainProgress_do = new FWDRLDisplayObject("div"), o.mainProgress_do.setHeight(o.scrubbersHeight), o.progressLeft_do = new FWDRLDisplayObject("img"), o.progressLeft_do.setScreen(o.videoProgressLeft_img), i = new Image, i.src = o.videoProgressMiddlePath_str, o.progressMiddle_do = new FWDRLDisplayObject("div"), o.progressMiddle_do.getStyle().background = "url('" + o.videoProgressMiddlePath_str + "') repeat-x", o.progressMiddle_do.setHeight(o.scrubbersHeight), o.progressMiddle_do.setX(o.mainScrubberDragLeftWidth), o.mainScrubberDrag_do = new FWDRLDisplayObject("div"), o.mainScrubberDrag_do.setHeight(o.scrubbersHeight), o.mainScrubberDragLeft_do = new FWDRLDisplayObject("img"), o.mainScrubberDragLeft_do.setScreen(o.videoMainScrubberDragLeft_img), i = new Image, i.src = o.videoMainScrubberDragMiddlePath_str, o.isMobile_bl ? (o.mainScrubberDragMiddle_do = new FWDRLDisplayObject("div"), o.mainScrubberDragMiddle_do.getStyle().background = "url('" + o.videoMainScrubberDragMiddlePath_str + "') repeat-x") : (o.mainScrubberDragMiddle_do = new FWDRLDisplayObject("img"), o.mainScrubberDragMiddle_do.setScreen(i)), o.mainScrubberDragMiddle_do.setHeight(o.scrubbersHeight), o.mainScrubberDragMiddle_do.setX(o.mainScrubberDragLeftWidth), o.mainScrubberBarLine_do = new FWDRLDisplayObject("img"), o.mainScrubberBarLine_do.setScreen(o.videoMainScrubberLine_img), o.mainScrubberBarLine_do.setAlpha(0), o.mainScrubberBarLine_do.hasTransform3d_bl = !1, o.mainScrubberBarLine_do.hasTransform2d_bl = !1, o.buttons_ar.push(o.mainScrubber_do), o.mainScrubber_do.addChild(o.mainScrubberBkLeft_do), o.mainScrubber_do.addChild(o.mainScrubberBkMiddle_do), o.mainScrubber_do.addChild(o.mainScrubberBkRight_do), o.mainScrubber_do.addChild(o.mainScrubberBarLine_do), o.mainScrubberDrag_do.addChild(o.mainScrubberDragLeft_do), o.mainScrubberDrag_do.addChild(o.mainScrubberDragMiddle_do), o.mainProgress_do.addChild(o.progressLeft_do), o.mainProgress_do.addChild(o.progressMiddle_do), o.mainScrubber_do.addChild(o.mainProgress_do), o.mainScrubber_do.addChild(o.mainScrubberDrag_do), o.mainScrubber_do.addChild(o.mainScrubberBarLine_do), o.mainHolder_do.addChild(o.mainScrubber_do), o.isMobile_bl ? o.hasPointerEvent_bl ? (o.mainScrubber_do.screen.addEventListener("pointerover", o.mainScrubberOnOverHandler), o.mainScrubber_do.screen.addEventListener("pointerout", o.mainScrubberOnOutHandler), o.mainScrubber_do.screen.addEventListener("pointerdown", o.mainScrubberOnDownHandler)) : o.mainScrubber_do.screen.addEventListener("touchstart", o.mainScrubberOnDownHandler) : o.screen.addEventListener ? (o.mainScrubber_do.screen.addEventListener("mouseover", o.mainScrubberOnOverHandler), o.mainScrubber_do.screen.addEventListener("mouseout", o.mainScrubberOnOutHandler), o.mainScrubber_do.screen.addEventListener("mousedown", o.mainScrubberOnDownHandler)) : o.screen.attachEvent && (o.mainScrubber_do.screen.attachEvent("onmouseover", o.mainScrubberOnOverHandler), o.mainScrubber_do.screen.attachEvent("onmouseout", o.mainScrubberOnOutHandler), o.mainScrubber_do.screen.attachEvent("onmousedown", o.mainScrubberOnDownHandler)), o.disableMainScrubber(), o.updateMainScrubber(0)
        }, this.mainScrubberOnOverHandler = function() {
            o.isMainScrubberDisabled_bl
        }, this.mainScrubberOnOutHandler = function() {
            o.isMainScrubberDisabled_bl
        }, this.mainScrubberOnDownHandler = function(t) {
            if (!o.isMainScrubberDisabled_bl && 2 != t.button) {
                t.preventDefault && t.preventDefault(), o.isMainScrubberScrubbing_bl = !0;
                var i = FWDRLUtils.getViewportMouseCoordinates(t),
                    n = i.screenX - o.mainScrubber_do.getGlobalX();
                0 > n ? n = 0 : n > o.mainScrubberWidth - o.scrubbersOffsetWidth && (n = o.mainScrubberWidth - o.scrubbersOffsetWidth);
                var s = n / o.mainScrubberWidth;
                o.disable_do && o.addChild(o.disable_do), o.updateMainScrubber(s), o.dispatchEvent(e.START_TO_SCRUB), o.dispatchEvent(e.SCRUB, {
                    percent: s
                }), o.isMobile_bl ? o.hasPointerEvent_bl ? (window.addEventListener("pointermove", o.mainScrubberMoveHandler), window.addEventListener("pointerup", o.mainScrubberEndHandler)) : (window.addEventListener("touchmove", o.mainScrubberMoveHandler), window.addEventListener("touchend", o.mainScrubberEndHandler)) : window.addEventListener ? (window.addEventListener("mousemove", o.mainScrubberMoveHandler), window.addEventListener("mouseup", o.mainScrubberEndHandler)) : document.attachEvent && (document.attachEvent("onmousemove", o.mainScrubberMoveHandler), document.attachEvent("onmouseup", o.mainScrubberEndHandler))
            }
        }, this.mainScrubberMoveHandler = function(t) {
            t.preventDefault && t.preventDefault();
            var i = FWDRLUtils.getViewportMouseCoordinates(t),
                n = i.screenX - o.mainScrubber_do.getGlobalX();
            0 > n ? n = 0 : n > o.mainScrubberWidth - o.scrubbersOffsetWidth && (n = o.mainScrubberWidth - o.scrubbersOffsetWidth);
            var s = n / o.mainScrubberWidth;
            o.updateMainScrubber(s), o.dispatchEvent(e.SCRUB, {
                percent: s
            })
        }, this.mainScrubberEndHandler = function() {
            o.disable_do && o.contains(o.disable_do) && o.removeChild(o.disable_do), o.dispatchEvent(e.STOP_TO_SCRUB), o.isMobile_bl ? o.hasPointerEvent_bl ? (window.removeEventListener("pointermove", o.mainScrubberMoveHandler), window.removeEventListener("pointerup", o.mainScrubberEndHandler)) : (window.removeEventListener("touchmove", o.mainScrubberMoveHandler), window.removeEventListener("touchend", o.mainScrubberEndHandler)) : window.removeEventListener ? (window.removeEventListener("mousemove", o.mainScrubberMoveHandler), window.removeEventListener("mouseup", o.mainScrubberEndHandler)) : document.detachEvent && (document.detachEvent("onmousemove", o.mainScrubberMoveHandler), document.detachEvent("onmouseup", o.mainScrubberEndHandler))
        }, this.disableMainScrubber = function() {
            o.mainScrubber_do && (o.isMainScrubberDisabled_bl = !0, o.mainScrubber_do.setButtonMode(!1), o.mainScrubberEndHandler(), o.updateMainScrubber(0), o.updatePreloaderBar(0))
        }, this.enableMainScrubber = function() {
            o.mainScrubber_do && (o.isMainScrubberDisabled_bl = !1, o.mainScrubber_do.setButtonMode(!0))
        }, this.updateMainScrubber = function(e) {
            if (o.mainScrubber_do) {
                var t = parseInt(e * o.mainScrubberWidth);
                isNaN(t) || (o.percentPlayed = e, !FWDRLEVPlayer.hasHTML5Video && t >= o.mainProgress_do.w && (t = o.mainProgress_do.w), 1 > t && o.isMainScrubberLineVisible_bl ? (o.isMainScrubberLineVisible_bl = !1, FWDRLTweenMax.to(o.mainScrubberBarLine_do, .5, {
                    alpha: 0
                })) : t > 1 && !o.isMainScrubberLineVisible_bl && (o.isMainScrubberLineVisible_bl = !0, FWDRLTweenMax.to(o.mainScrubberBarLine_do, .5, {
                    alpha: 1
                })), o.mainScrubberDrag_do.setWidth(t), t > o.mainScrubberWidth - o.scrubbersOffsetWidth && (t = o.mainScrubberWidth - o.scrubbersOffsetWidth), FWDRLTweenMax.to(o.mainScrubberBarLine_do, .8, {
                    x: t + 1,
                    ease: Expo.easeOut
                }))
            }
        }, this.updatePreloaderBar = function(e) {
            if (o.mainProgress_do) {
                o.percentLoaded = e;
                var t = parseInt(Math.max(0, o.percentLoaded * o.mainScrubberWidth));
                o.percentLoaded >= .98 ? o.mainProgress_do.setY(-30) : 0 != o.mainProgress_do.y && 1 != o.percentLoaded && o.mainProgress_do.setY(0), t > o.mainScrubberWidth - o.scrubbersOffsetWidth && (t = Math.max(0, o.mainScrubberWidth - o.scrubbersOffsetWidth)), 0 > t && (t = 0), o.mainProgress_do.setWidth(t)
            }
        }, this.setupPlayPauseButton = function() {
            FWDRLComplexButton.setPrototype(), o.playPauseButton_do = new FWDRLComplexButton(o.videoPlayN_img, t.videoPlaySPath_str, o.videoPauseN_img, t.videoPauseSPath_str, !0), o.buttons_ar.push(o.playPauseButton_do), o.playPauseButton_do.setY(parseInt((o.stageHeight - o.playPauseButton_do.buttonHeight) / 2)), o.playPauseButton_do.addListener(FWDRLComplexButton.MOUSE_UP, o.playButtonMouseUpHandler), o.mainHolder_do.addChild(o.playPauseButton_do)
        }, this.showPlayButton = function() {
            o.playPauseButton_do && o.playPauseButton_do.setButtonState(1)
        }, this.showPauseButton = function() {
            o.playPauseButton_do && o.playPauseButton_do.setButtonState(0)
        }, this.playButtonMouseUpHandler = function() {
            o.dispatchEvent(0 == o.playPauseButton_do.currentState ? e.PAUSE : e.PLAY)
        }, this.setupFullscreenButton = function() {
            FWDRLComplexButton.setPrototype(), o.fullScreenButton_do = new FWDRLComplexButton(o.videoFullScreenN_img, t.videoFullScreenSPath_str, o.videoNormalScreenN_img, t.videoNormalScreenSPath_str, !0), o.buttons_ar.push(o.fullScreenButton_do), o.fullScreenButton_do.setY(parseInt((o.stageHeight - o.fullScreenButton_do.buttonHeight) / 2)), o.fullScreenButton_do.addListener(FWDRLComplexButton.MOUSE_UP, o.fullScreenButtonMouseUpHandler), o.mainHolder_do.addChild(o.fullScreenButton_do)
        }, this.showFullScreenButton = function() {
            o.fullScreenButton_do && o.fullScreenButton_do.setButtonState(1)
        }, this.showNormalScreenButton = function() {
            o.fullScreenButton_do && o.fullScreenButton_do.setButtonState(0)
        }, this.setNormalStateToFullScreenButton = function() {
            o.fullScreenButton_do && o.fullScreenButton_do.setNormalState()
        }, this.fullScreenButtonMouseUpHandler = function() {
            o.dispatchEvent(1 == o.fullScreenButton_do.currentState ? e.FULL_SCREEN : e.NORMAL_SCREEN)
        }, this.setupTime = function() {
            o.time_do = new FWDRLDisplayObject("div"), o.time_do.hasTransform3d_bl = !1, o.time_do.hasTransform2d_bl = !1, o.time_do.setBackfaceVisibility(), o.time_do.getStyle().fontFamily = "Arial", o.time_do.getStyle().fontSize = "12px", o.time_do.getStyle().whiteSpace = "nowrap", o.time_do.getStyle().textAlign = "center", o.time_do.getStyle().color = o.timeColor_str, o.time_do.getStyle().fontSmoothing = "antialiased", o.time_do.getStyle().webkitFontSmoothing = "antialiased", o.time_do.getStyle().textRendering = "optimizeLegibility", o.mainHolder_do.addChild(o.time_do), o.updateTime("00:00/00:00"), o.buttons_ar.push(o.time_do)
        }, this.updateTime = function(e) {
            o.time_do && (o.time_do.setInnerHTML(e), o.lastTimeLength != e.length && (o.time_do.w = o.time_do.getWidth(), o.positionButtons(), setTimeout(function() {
                o.time_do.w = o.time_do.getWidth(), o.time_do.h = o.time_do.getHeight(), o.time_do.setY(parseInt((o.stageHeight - o.time_do.h) / 2) + 1), o.positionButtons()
            }, 50), o.lastTimeLength = e.length))
        }, this.setupVolumeButton = function() {
            FWDRLEVPVolumeButton.setPrototype(), o.volumeButton_do = new FWDRLEVPVolumeButton(o.videoVolumeN_img, t.videoVolumeSPath_str, t.videoVolumeDPath_str), o.volumeButton_do.addListener(FWDRLEVPVolumeButton.MOUSE_UP, o.volumeOnMouseUpHandler), o.volumeButton_do.setY(parseInt((o.stageHeight - o.volumeButton_do.h) / 2)), o.buttons_ar.push(o.volumeButton_do), o.mainHolder_do.addChild(o.volumeButton_do), o.allowToChangeVolume_bl || o.volumeButton_do.disable()
        }, this.volumeOnMouseUpHandler = function() {
            var e = o.lastVolume;
            o.isMute_bl ? (e = o.lastVolume, o.isMute_bl = !1) : (e = 1e-6, o.isMute_bl = !0), o.updateVolume(e)
        }, this.setupVolumeScrubber = function() {
            o.volumeScrubber_do = new FWDRLDisplayObject("div"), o.volumeScrubber_do.setHeight(o.scrubbersHeight), o.volumeScrubber_do.setY(parseInt((o.stageHeight - o.scrubbersHeight) / 2)), o.volumeScrubberBkLeft_do = new FWDRLDisplayObject("img");
            var e = new Image;
            e.src = o.mainScrubberBkLeft_do.screen.src, o.volumeScrubberBkLeft_do.setScreen(e), o.volumeScrubberBkLeft_do.setWidth(o.mainScrubberBkLeft_do.w), o.volumeScrubberBkLeft_do.setHeight(o.mainScrubberBkLeft_do.h);
            var i = new Image;
            i.src = t.videoVolumeScrubberBkRightPath_str, o.volumeScrubberBkRight_do = new FWDRLDisplayObject("img"), o.volumeScrubberBkRight_do.setScreen(i), o.volumeScrubberBkRight_do.setWidth(o.volumeScrubberBkLeft_do.w), o.volumeScrubberBkRight_do.setHeight(o.volumeScrubberBkLeft_do.h);
            var n = new Image;
            n.src = o.videoVolumeScrubberBkMiddlePath_str, o.isMobile_bl ? (o.volumeScrubberBkMiddle_do = new FWDRLDisplayObject("div"), o.volumeScrubberBkMiddle_do.getStyle().background = "url('" + o.videoVolumeScrubberBkMiddlePath_str + "') repeat-x") : (o.volumeScrubberBkMiddle_do = new FWDRLDisplayObject("img"), o.volumeScrubberBkMiddle_do.setScreen(n)), o.volumeScrubberBkMiddle_do.setHeight(o.scrubbersHeight), o.volumeScrubberBkMiddle_do.setX(o.scrubbersBkLeftAndRightWidth), o.volumeScrubberDrag_do = new FWDRLDisplayObject("div"), o.volumeScrubberDrag_do.setHeight(o.scrubbersHeight), o.volumeScrubberDragLeft_do = new FWDRLDisplayObject("img");
            var s = new Image;
            s.src = o.mainScrubberDragLeft_do.screen.src, o.volumeScrubberDragLeft_do.setScreen(s), o.volumeScrubberDragLeft_do.setWidth(o.mainScrubberDragLeft_do.w), o.volumeScrubberDragLeft_do.setHeight(o.mainScrubberDragLeft_do.h), n = new Image, n.src = o.videoVolumeScrubberDragMiddlePath_str, o.isMobile_bl ? (o.volumeScrubberDragMiddle_do = new FWDRLDisplayObject("div"), o.volumeScrubberDragMiddle_do.getStyle().background = "url('" + o.videoVolumeScrubberDragMiddlePath_str + "') repeat-x") : (o.volumeScrubberDragMiddle_do = new FWDRLDisplayObject("img"), o.volumeScrubberDragMiddle_do.setScreen(n)), o.volumeScrubberDragMiddle_do.setHeight(o.scrubbersHeight), o.volumeScrubberDragMiddle_do.setX(o.mainScrubberDragLeftWidth), o.volumeScrubberBarLine_do = new FWDRLDisplayObject("img");
            var r = new Image;
            r.src = o.mainScrubberBarLine_do.screen.src, o.volumeScrubberBarLine_do.setScreen(r), o.volumeScrubberBarLine_do.setWidth(o.mainScrubberBarLine_do.w), o.volumeScrubberBarLine_do.setHeight(o.mainScrubberBarLine_do.h), o.volumeScrubberBarLine_do.setAlpha(0), o.volumeScrubberBarLine_do.hasTransform3d_bl = !1, o.volumeScrubberBarLine_do.hasTransform2d_bl = !1, o.volumeScrubber_do.setWidth(o.volumeScrubberWidth), o.volumeScrubberBkMiddle_do.setWidth(o.volumeScrubberWidth - 2 * o.scrubbersBkLeftAndRightWidth), o.volumeScrubberBkRight_do.setX(o.volumeScrubberWidth - o.scrubbersBkLeftAndRightWidth), o.volumeScrubberDragMiddle_do.setWidth(o.volumeScrubberWidth - o.scrubbersBkLeftAndRightWidth - o.scrubbersOffsetWidth), o.volumeScrubber_do.addChild(o.volumeScrubberBkLeft_do), o.volumeScrubber_do.addChild(o.volumeScrubberBkMiddle_do), o.volumeScrubber_do.addChild(o.volumeScrubberBkRight_do), o.volumeScrubber_do.addChild(o.volumeScrubberBarLine_do), o.volumeScrubberDrag_do.addChild(o.volumeScrubberDragLeft_do), o.volumeScrubberDrag_do.addChild(o.volumeScrubberDragMiddle_do), o.volumeScrubber_do.addChild(o.volumeScrubberDrag_do), o.volumeScrubber_do.addChild(o.volumeScrubberBarLine_do), o.buttons_ar.push(o.volumeScrubber_do), o.mainHolder_do.addChild(o.volumeScrubber_do), o.allowToChangeVolume_bl && (o.isMobile_bl ? o.hasPointerEvent_bl ? (o.volumeScrubber_do.screen.addEventListener("pointerover", o.volumeScrubberOnOverHandler), o.volumeScrubber_do.screen.addEventListener("pointerout", o.volumeScrubberOnOutHandler), o.volumeScrubber_do.screen.addEventListener("pointerdown", o.volumeScrubberOnDownHandler)) : o.volumeScrubber_do.screen.addEventListener("touchstart", o.volumeScrubberOnDownHandler) : o.screen.addEventListener ? (o.volumeScrubber_do.screen.addEventListener("mouseover", o.volumeScrubberOnOverHandler), o.volumeScrubber_do.screen.addEventListener("mouseout", o.volumeScrubberOnOutHandler), o.volumeScrubber_do.screen.addEventListener("mousedown", o.volumeScrubberOnDownHandler)) : o.screen.attachEvent && (o.volumeScrubber_do.screen.attachEvent("onmouseover", o.volumeScrubberOnOverHandler), o.volumeScrubber_do.screen.attachEvent("onmouseout", o.volumeScrubberOnOutHandler), o.volumeScrubber_do.screen.attachEvent("onmousedown", o.volumeScrubberOnDownHandler))), o.enableVolumeScrubber(), o.updateVolumeScrubber(o.volume)
        }, this.volumeScrubberOnOverHandler = function() {
            o.isVolumeScrubberDisabled_bl
        }, this.volumeScrubberOnOutHandler = function() {
            o.isVolumeScrubberDisabled_bl
        }, this.volumeScrubberOnDownHandler = function(e) {
            if (!o.isVolumeScrubberDisabled_bl && 2 != e.button) {
                e.preventDefault && e.preventDefault();
                var t = FWDRLUtils.getViewportMouseCoordinates(e),
                    i = t.screenX - o.volumeScrubber_do.getGlobalX();
                0 > i ? i = 0 : i > o.volumeScrubberWidth - o.scrubbersOffsetWidth && (i = o.volumeScrubberWidth - o.scrubbersOffsetWidth);
                var n = i / o.volumeScrubberWidth;
                o.disable_do && o.addChild(o.disable_do), o.lastVolume = n, o.updateVolume(n), o.isMobile_bl ? o.hasPointerEvent_bl ? (window.addEventListener("pointermove", o.volumeScrubberMoveHandler), window.addEventListener("pointerup", o.volumeScrubberEndHandler)) : (window.addEventListener("touchmove", o.volumeScrubberMoveHandler), window.addEventListener("touchend", o.volumeScrubberEndHandler)) : window.addEventListener ? (window.addEventListener("mousemove", o.volumeScrubberMoveHandler), window.addEventListener("mouseup", o.volumeScrubberEndHandler)) : document.attachEvent && (document.attachEvent("onmousemove", o.volumeScrubberMoveHandler), document.attachEvent("onmouseup", o.volumeScrubberEndHandler))
            }
        }, this.volumeScrubberMoveHandler = function(e) {
            if (!o.isVolumeScrubberDisabled_bl) {
                e.preventDefault && e.preventDefault();
                var t = FWDRLUtils.getViewportMouseCoordinates(e),
                    i = t.screenX - o.volumeScrubber_do.getGlobalX();
                0 > i ? i = 0 : i > o.volumeScrubberWidth - o.scrubbersOffsetWidth && (i = o.volumeScrubberWidth - o.scrubbersOffsetWidth);
                var n = i / o.volumeScrubberWidth;
                o.lastVolume = n, o.updateVolume(n)
            }
        }, this.volumeScrubberEndHandler = function() {
            o.disable_do && o.contains(o.disable_do) && o.removeChild(o.disable_do), o.isMobile_bl ? o.hasPointerEvent_bl ? (window.removeEventListener("pointermove", o.volumeScrubberMoveHandler), window.removeEventListener("pointerup", o.volumeScrubberEndHandler)) : (window.removeEventListener("touchmove", o.volumeScrubberMoveHandler), window.removeEventListener("touchend", o.volumeScrubberEndHandler)) : window.removeEventListener ? (window.removeEventListener("mousemove", o.volumeScrubberMoveHandler), window.removeEventListener("mouseup", o.volumeScrubberEndHandler)) : document.detachEvent && (document.detachEvent("onmousemove", o.volumeScrubberMoveHandler), document.detachEvent("onmouseup", o.volumeScrubberEndHandler))
        }, this.disableVolumeScrubber = function() {
            o.isVolumeScrubberDisabled_bl = !0, o.volumeScrubber_do.setButtonMode(!1), o.volumeScrubberEndHandler()
        }, this.enableVolumeScrubber = function() {
            o.isVolumeScrubberDisabled_bl = !1, o.volumeScrubber_do.setButtonMode(!0)
        }, this.updateVolumeScrubber = function(e) {
            var t = parseInt(e * o.volumeScrubberWidth);
            o.volumeScrubberDrag_do.setWidth(t), 1 > t && o.isVolumeScrubberLineVisible_bl ? (o.isVolumeScrubberLineVisible_bl = !1, FWDRLTweenMax.to(o.volumeScrubberBarLine_do, .5, {
                alpha: 0
            })) : t > 1 && !o.isVolumeScrubberLineVisible_bl && (o.isVolumeScrubberLineVisible_bl = !0, FWDRLTweenMax.to(o.volumeScrubberBarLine_do, .5, {
                alpha: 1
            })), t > o.volumeScrubberWidth - o.scrubbersOffsetWidth && (t = o.volumeScrubberWidth - o.scrubbersOffsetWidth), FWDRLTweenMax.to(o.volumeScrubberBarLine_do, .8, {
                x: t + 1,
                ease: Expo.easeOut
            })
        }, this.updateVolume = function(t, i) {
            o.showVolumeScrubber_bl && (o.volume = t, o.volume <= 1e-6 ? (o.isMute_bl = !0, o.volume = 1e-6) : o.voume >= 1 ? (o.isMute_bl = !1, o.volume = 1) : o.isMute_bl = !1, 1e-6 == o.volume ? o.volumeButton_do && o.volumeButton_do.setDisabledState() : o.volumeButton_do && o.volumeButton_do.setEnabledState(), o.volumeScrubberBarLine_do && o.updateVolumeScrubber(o.volume), i || o.dispatchEvent(e.CHANGE_VOLUME, {
                percent: o.volume
            }))
        }, this.show = function(e) {
            o.isShowed_bl || (o.isShowed_bl = !0, e ? FWDRLTweenMax.to(o.mainHolder_do, .8, {
                y: 0,
                ease: Expo.easeInOut
            }) : (FWDRLTweenMax.killTweensOf(o.mainHolder_do), o.mainHolder_do.setY(0)), setTimeout(o.positionButtons, 200))
        }, this.hide = function(e, t) {
            if (o.isShowed_bl || t) {
                o.isShowed_bl = !1;
                var i = 0;
                t && (i = o.mainScrubberOffestTop), e ? FWDRLTweenMax.to(o.mainHolder_do, .8, {
                    y: o.stageHeight + i,
                    ease: Expo.easeInOut
                }) : (FWDRLTweenMax.killTweensOf(o.mainHolder_do), o.mainHolder_do.setY(o.stageHeight + i))
            }
        }, this.init()
    };
    e.setPrototype = function() {
        e.prototype = new FWDRLDisplayObject("div")
    }, e.FACEBOOK_SHARE = "share", e.FULL_SCREEN = "fullScreen", e.NORMAL_SCREEN = "normalScreen", e.PLAY = "play", e.PAUSE = "pause", e.START_TO_SCRUB = "startToScrub", e.SCRUB = "scrub", e.STOP_TO_SCRUB = "stopToScrub", e.CHANGE_VOLUME = "changeVolume", e.prototype = null, window.FWDRLEVPController = e
}(),
function(e) {
    var t = function(i, o) {
        var n = this;
        n.displayType = t.AFTER_PARENT, n.init = function() {
            this.mustHaveHolderDiv_bl = !1, e.RLVideoPlayer = this, n.instanceName_str = "RLVideoPlayer", n.displayType == t.AFTER_PARENT && (n.mustHaveHolderDiv_bl = !0), this.body = document.getElementsByTagName("body")[0], this.stageContainer = i, this.data = o, this.listeners = {
                events_ar: []
            }, this.main_do = null, this.preloader_do = null, this.controller_do = null, this.videoScreen_do = null, this.flash_do = null, this.flashObject = null, this.videoPoster_do = null, this.largePlayButton_do = null, this.hider = null, this.backgroundColor_str = "#000000", this.videoBackgroundColor_str = "#000000", this.flashObjectMarkup_str = null, this.lastX = 0, this.lastY = 0, this.stageWidth = 0, this.stageHeight = 0, this.firstTapX, this.firstTapY, this.curTime, this.totalTime, this.videoSourcePath_str, this.prevVideoSourcePath_str, this.posterPath_str, this.videoType_str, this.videoStartBehaviour_str, this.prevVideoSource_str, this.prevPosterSource_str, this.finalVideoPath_str, this.resizeHandlerId_to, this.hidePreloaderId_to, this.orientationChangeId_to, this.disableClickId_to, this.clickDelayId_to, this.secondTapId_to, this.isVideoPlayingWhenOpenWindows_bl = !1, this.isSpaceDown_bl = !1, this.isPlaying_bl = !1, this.firstTapPlaying_bl = !1, this.stickOnCurrentInstanceKey_bl = !1, this.isFullScreen_bl = !1, this.isFlashScreenReady_bl = !1, this.orintationChangeComplete_bl = !0, this.disableClick_bl = !1, this.isAPIReady_bl = !1, this.isInstantiate_bl = !0, this.isMobile_bl = FWDRLUtils.isMobile, this.hasPointerEvent_bl = FWDRLUtils.hasPointerEvent, this.setupMainDo(), this.setupNormalVideoPlayers()
        }, n.setupMainDo = function() {
            n.main_do = new FWDRLDisplayObject("div"), n.main_do.getStyle().msTouchAction = "none", n.main_do.getStyle().webkitTapHighlightColor = "rgba(0, 0, 0, 0)", n.main_do.getStyle().webkitFocusRingColor = "rgba(0, 0, 0, 0)", n.main_do.getStyle().width = "100%", n.main_do.getStyle().height = "100%", n.main_do.setBackfaceVisibility(), n.main_do.setBkColor(n.backgroundColor_str), (!FWDRLUtils.isMobile || FWDRLUtils.isMobile && FWDRLUtils.hasPointerEvent) && n.main_do.setSelectable(!1), n.stageContainer.style.overflow = "visible", n.stageContainer.appendChild(n.main_do.screen), setTimeout(n.resizeHandler, 300)
        }, n.resizeHandler = function() {
            if (n.isFullScreen_bl || n.displayType == t.FULL_SCREEN) {
                var e = FWDRLUtils.getViewportSize();
                n.main_do.setX(0), n.main_do.setY(0), n.stageWidth = e.w, n.stageHeight = e.h
            } else n.stageWidth = n.stageContainer.offsetWidth, n.stageHeight = n.stageContainer.offsetHeight;
            n.main_do.setWidth(n.stageWidth), n.main_do.setHeight(n.stageHeight), n.isFlashScreenReady_bl && n.videoType_str == t.VIDEO && (n.flash_do.setWidth(n.stageWidth), n.flash_do.setHeight(n.stageHeight)), n.controller_do && n.controller_do.resizeAndPosition(), n.videoScreen_do && n.videoType_str == t.VIDEO && n.videoScreen_do.resizeAndPosition(n.stageWidth, n.stageHeight), n.preloader_do && n.positionPreloader(), n.dumyClick_do && (n.dumyClick_do.setWidth(n.stageWidth), n.dumyClick_do.setHeight(n.isMobile_bl ? n.stageHeight : n.stageHeight)), n.largePlayButton_do && n.positionLargePlayButton(), n.videoPoster_do && n.videoPoster_do.allowToShow_bl && n.videoPoster_do.positionAndResize()
        }, this.setupClickScreen = function() {
            n.dumyClick_do = new FWDRLDisplayObject("div"), FWDRLUtils.isIE && (n.dumyClick_do.setBkColor("#00FF00"), n.dumyClick_do.setAlpha(1e-4)), n.dumyClick_do.screen.addEventListener ? n.dumyClick_do.screen.addEventListener("click", n.playPauseClickHandler) : n.dumyClick_do.screen.attachEvent && n.dumyClick_do.screen.attachEvent("onclick", n.playPauseClickHandler), n.hideClickScreen(), n.main_do.addChild(n.dumyClick_do)
        }, this.playPauseClickHandler = function(e) {
            2 != e.button && (n.disableClick_bl || (n.firstTapPlaying_bl = n.isPlaying_bl, t.keyboardCurInstance = n, 0 != n.controller_do.mainHolder_do.y && n.isMobile_bl || (t.hasHTML5Video ? n.videoScreen_do && n.videoScreen_do.togglePlayPause() : n.isFlashScreenReady_bl && n.flashObject.togglePlayPause())))
        }, this.showClickScreen = function() {
            n.dumyClick_do.setVisible(!0)
        }, this.hideClickScreen = function() {
            n.dumyClick_do.setVisible(!1)
        }, this.disableClick = function() {
            n.disableClick_bl = !0, clearTimeout(n.disableClickId_to), n.disableClickId_to = setTimeout(function() {
                n.disableClick_bl = !1
            }, 500)
        }, this.addDoubleClickSupport = function() {
            !n.isMobile_bl && n.dumyClick_do.screen.addEventListener ? (n.dumyClick_do.screen.addEventListener("mousedown", n.onFirstDown), FWDRLUtils.isIEWebKit && n.dumyClick_do.screen.addEventListener("dblclick", n.onSecondDown)) : n.isMobile_bl ? n.dumyClick_do.screen.addEventListener("touchstart", n.onFirstDown) : n.dumyClick_do.screen.addEventListener && n.dumyClick_do.screen.addEventListener("mousedown", n.onFirstDown)
        }, this.onFirstDown = function(e) {
            if (2 != e.button) {
                n.isFullscreen_bl && e.preventDefault && e.preventDefault();
                var t = FWDRLUtils.getViewportMouseCoordinates(e);
                n.firstTapX = t.screenX, n.firstTapY = t.screenY, n.firstTapPlaying_bl = n.isPlaying_bl, FWDRLUtils.isIEWebKit || (n.isMobile_bl ? (n.dumyClick_do.screen.addEventListener("touchstart", n.onSecondDown), n.dumyClick_do.screen.removeEventListener("touchstart", n.onFirstDown)) : n.dumyClick_do.screen.addEventListener && (n.dumyClick_do.screen.addEventListener("mousedown", n.onSecondDown), n.dumyClick_do.screen.removeEventListener("mousedown", n.onFirstDown)), clearTimeout(n.secondTapId_to), n.secondTapId_to = setTimeout(n.doubleTapExpired, 250))
            }
        }, this.doubleTapExpired = function() {
            clearTimeout(n.secondTapId_to), n.isMobile_bl ? (n.dumyClick_do.screen.removeEventListener("touchstart", n.onSecondDown), n.dumyClick_do.screen.addEventListener("touchstart", n.onFirstDown)) : n.dumyClick_do.screen.addEventListener && (n.dumyClick_do.screen.removeEventListener("mousedown", n.onSecondDown), n.dumyClick_do.screen.addEventListener("mousedown", n.onFirstDown))
        }, this.onSecondDown = function(e) {
            e.preventDefault && e.preventDefault();
            var t, i, o = FWDRLUtils.getViewportMouseCoordinates(e);
            FWDRLUtils.isIEWebKit && (n.firstTapPlaying_bl = n.isPlaying_bl), e.touches && 1 != e.touches.length || (t = Math.abs(o.screenX - n.firstTapX), i = Math.abs(o.screenY - n.firstTapY), n.isMobile_bl && (t > 10 || i > 10) || (n.isMobile_bl || !(t > 2 || i > 2)) && (n.switchFullScreenOnDoubleClick(), FWDRLUtils.isIEWebKit || (n.firstTapPlaying_bl ? n.play() : n.pause())))
        }, this.switchFullScreenOnDoubleClick = function() {
            n.disableClick(), n.isFullScreen_bl ? n.goNormalScreen() : n.goFullScreen()
        }, this.setupNormalVideoPlayers = function() {
            n.setupPreloader(), t.hasHTML5Video ? (n.isAPIReady_bl = !0, n.setupVideoScreen(), n.setupVideoPoster(), n.main_do.addChild(n.preloader_do), n.setupClickScreen(), n.addDoubleClickSupport(), n.setupController(), n.setupLargePlayPauseButton(), n.setupHider(), n.dispatchEvent(t.READY), n.setPosterSource(n.posterPath_str)) : n.setupFlashScreen(), n.resizeHandler()
        }, this.setupPreloader = function() {
            FWDRLPreloader.setPrototype(), n.preloader_do = new FWDRLPreloader(n.data.videoMainPreloader_img, 30, 30, 30, 40), n.preloader_do.show(!0), n.main_do.addChild(n.preloader_do)
        }, this.positionPreloader = function() {
            n.preloader_do.setX(parseInt((n.stageWidth - n.preloader_do.w) / 2)), n.preloader_do.setY(parseInt((n.stageHeight - n.preloader_do.h) / 2))
        }, this.setupVideoPoster = function() {
            FWDRLEVPPoster.setPrototype(), n.videoPoster_do = new FWDRLEVPPoster(n, n.data.videoPosterBackgroundColor_str, n.data.show), n.main_do.addChild(n.videoPoster_do)
        }, this.setupLargePlayPauseButton = function() {
            FWDRLSimpleButton.setPrototype(!0), n.largePlayButton_do = new FWDRLSimpleButton(n.data.videoLargePlayN_img, n.data.videoLargePlayS_str), n.largePlayButton_do.addListener(FWDRLSimpleButton.MOUSE_UP, n.largePlayButtonUpHandler), n.largePlayButton_do.setOverflow("visible"), n.largePlayButton_do.hide(!1), n.main_do.addChild(n.largePlayButton_do)
        }, this.largePlayButtonUpHandler = function() {
            n.disableClick(), n.largePlayButton_do.hide(), n.play()
        }, this.positionLargePlayButton = function() {
            n.largePlayButton_do.setX(parseInt((n.stageWidth - n.largePlayButton_do.w) / 2)), n.largePlayButton_do.setY(parseInt((n.stageHeight - n.largePlayButton_do.h) / 2))
        }, this.setupController = function() {
            FWDRLEVPController.setPrototype(), n.controller_do = new FWDRLEVPController(n.data, n), n.controller_do.addListener(FWDRLEVPController.PLAY, n.controllerOnPlayHandler), n.controller_do.addListener(FWDRLEVPController.PAUSE, n.controllerOnPauseHandler), n.controller_do.addListener(FWDRLEVPController.START_TO_SCRUB, n.controllerStartToScrubbHandler), n.controller_do.addListener(FWDRLEVPController.SCRUB, n.controllerScrubbHandler), n.controller_do.addListener(FWDRLEVPController.STOP_TO_SCRUB, n.controllerStopToScrubbHandler), n.controller_do.addListener(FWDRLEVPController.CHANGE_VOLUME, n.controllerChangeVolumeHandler), n.controller_do.addListener(FWDRLEVPController.FULL_SCREEN, n.controllerFullScreenHandler), n.controller_do.addListener(FWDRLEVPController.NORMAL_SCREEN, n.controllerNormalScreenHandler), n.main_do.addChild(n.controller_do)
        }, this.controllerOnPlayHandler = function() {
            n.play()
        }, this.controllerOnPauseHandler = function() {
            n.pause()
        }, this.controllerStartToScrubbHandler = function() {
            n.startToScrub()
        }, this.controllerScrubbHandler = function(e) {
            n.scrub(e.percent)
        }, this.controllerStopToScrubbHandler = function() {
            n.stopToScrub()
        }, this.controllerChangeVolumeHandler = function(e) {
            n.setVolume(e.percent)
        }, this.controllerFullScreenHandler = function() {
            n.goFullScreen()
        }, this.controllerNormalScreenHandler = function() {
            n.goNormalScreen()
        }, this.setupVideoScreen = function() {
            FWDRLEVPVideoScreen.setPrototype(), n.videoScreen_do = new FWDRLEVPVideoScreen(n, n.backgroundColor_str, n.data.volume), n.videoScreen_do.addListener(FWDRLEVPVideoScreen.ERROR, n.videoScreenErrorHandler), n.videoScreen_do.addListener(FWDRLEVPVideoScreen.SAFE_TO_SCRUBB, n.videoScreenSafeToScrubbHandler), n.videoScreen_do.addListener(FWDRLEVPVideoScreen.STOP, n.videoScreenStopHandler), n.videoScreen_do.addListener(FWDRLEVPVideoScreen.PLAY, n.videoScreenPlayHandler), n.videoScreen_do.addListener(FWDRLEVPVideoScreen.PAUSE, n.videoScreenPauseHandler), n.videoScreen_do.addListener(FWDRLEVPVideoScreen.UPDATE, n.videoScreenUpdateHandler), n.videoScreen_do.addListener(FWDRLEVPVideoScreen.UPDATE_TIME, n.videoScreenUpdateTimeHandler), n.videoScreen_do.addListener(FWDRLEVPVideoScreen.LOAD_PROGRESS, n.videoScreenLoadProgressHandler), n.videoScreen_do.addListener(FWDRLEVPVideoScreen.START_TO_BUFFER, n.videoScreenStartToBuferHandler), n.videoScreen_do.addListener(FWDRLEVPVideoScreen.STOP_TO_BUFFER, n.videoScreenStopToBuferHandler), n.videoScreen_do.addListener(FWDRLEVPVideoScreen.PLAY_COMPLETE, n.videoScreenPlayCompleteHandler), n.main_do.addChild(n.videoScreen_do)
        }, this.videoScreenErrorHandler = function(i) {
            var o;
            n.isPlaying_bl = !1, o = i.text, e.console && console.log(i.text), n.controller_do && (n.controller_do.disableMainScrubber(), n.data.showControllerWhenVideoIsStopped_bl || n.controller_do.hide(!n.isMobile_bl, !0), n.largePlayButton_do.hide(), n.hideClickScreen(), n.hider.stop()), FWDRLUtils.isIphone && n.videoScreen_do && n.videoScreen_do.setX(-5e3), n.preloader_do.hide(!1), n.showCursor(), n.stop(), n.dispatchEvent(t.ERROR, {
                error: o
            })
        }, this.videoScreenSafeToScrubbHandler = function() {
            n.controller_do && (n.controller_do.enableMainScrubber(), n.controller_do.show(!0), n.hider.start()), n.data.addKeyboardSupport_bl && n.addKeyboardSupport(), n.showClickScreen()
        }, this.videoScreenStopHandler = function() {
            n.videoPoster_do.allowToShow_bl = !0, n.isPlaying_bl = !1, n.controller_do && (n.controller_do.disableMainScrubber(), n.controller_do.showPlayButton(), n.data.showControllerWhenVideoIsStopped_bl ? n.controller_do.show(!n.isMobile_bl) : n.controller_do.hide(!n.isMobile_bl, !0), n.hider.stop()), n.hideClickScreen(), n.hider.reset(), n.showCursor(), n.dispatchEvent(t.STOP)
        }, this.videoScreenPlayHandler = function() {
            t.keyboardCurInstance = n, n.isPlaying_bl = !0, n.controller_do && (n.controller_do.showPauseButton(), n.controller_do.show(!0)), n.largePlayButton_do.hide(), n.hider.start(), n.showCursor(), n.dispatchEvent(t.PLAY)
        }, this.videoScreenPauseHandler = function() {
            n.isPlaying_bl = !1, n.controller_do && n.controller_do.showPlayButton(), FWDRLUtils.isIphone || n.largePlayButton_do.show(), n.controller_do.show(!0), n.hider.stop(), n.hider.reset(), n.showCursor(), n.showClickScreen(), n.dispatchEvent(t.PAUSE)
        }, this.videoScreenUpdateHandler = function(e) {
            var i;
            t.hasHTML5Video ? (i = e.percent, n.controller_do && n.controller_do.updateMainScrubber(i)) : (i = e, n.controller_do && n.controller_do.updateMainScrubber(i)), n.dispatchEvent(t.UPDATE, {
                percent: i
            })
        }, this.videoScreenUpdateTimeHandler = function(e, i) {
            var o;
            t.hasHTML5Video ? (n.curTime = e.curTime, n.totalTime = e.totalTime, o = n.curTime + "/" + n.totalTime, n.controller_do && n.controller_do.updateTime(o)) : (n.curTime = e, n.totalTime = i, o = n.curTime + "/" + n.totalTime, (void 0 == e || void 0 == i) && (o = "00:00/00:00"), n.controller_do && n.controller_do.updateTime(o)), n.dispatchEvent(t.UPDATE_TIME, {
                currentTime: n.curTime,
                totalTime: n.totalTime
            })
        }, this.videoScreenLoadProgressHandler = function(e) {
            t.hasHTML5Video ? n.controller_do && n.controller_do.updatePreloaderBar(e.percent) : n.controller_do && n.controller_do.updatePreloaderBar(e)
        }, this.videoScreenStartToBuferHandler = function() {
            n.preloader_do.show()
        }, this.videoScreenStopToBuferHandler = function() {
            n.preloader_do.hide(!0)
        }, this.videoScreenPlayCompleteHandler = function() {
            n.data.videoLoop_bl ? (n.scrub(0), n.play()) : n.stop(), n.hider.reset(), n.dispatchEvent(t.PLAY_COMPLETE)
        }, this.setupFlashScreen = function() {
            if (!n.flash_do) {
                if (!FWDRLFlashTest.hasFlashPlayerVersion("9.0.18")) {
                    var e = "Please install Adobe flash player! <a href='http://www.adobe.com/go/getflashplayer'>Click here to install.</a>";
                    return void n.dispatchEvent(t.ERROR, {
                        error: e
                    })
                }
                n.flash_do = new FWDRLDisplayObject("div"), n.flash_do.setBackfaceVisibility(), n.flash_do.setResizableSizeAfterParent(), n.main_do.addChild(n.flash_do), n.flashObjectMarkup_str = '<object id="' + n.instanceName_str + '"classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="100%" height="100%"><param name="movie" value="' + n.data.flashPath_str + '"/><param name="wmode" value="opaque"/><param name="scale" value="noscale"/><param name=FlashVars value="instanceName=' + n.instanceName_str + "&volume=" + n.data.volume + "&bkColor_str=" + n.videoBackgroundColor_str + '"/><object type="application/x-shockwave-flash" data="' + n.data.flashPath_str + '" width="100%" height="100%"><param name="movie" value="' + n.data.flashPath_str + '"/><param name="wmode" value="opaque"/><param name="scale" value="noscale"/><param name=FlashVars value="instanceName=' + n.instanceName_str + "&volume=" + n.data.volume + "&bkColor_str=" + n.videoBackgroundColor_str + '"/></object></object>', n.flash_do.screen.innerHTML = n.flashObjectMarkup_str, n.flashObject = n.flash_do.screen.firstChild, FWDRLUtils.isIE || (n.flashObject = n.flashObject.getElementsByTagName("object")[0])
            }
        }, this.flashScreenIsReady = function() {
            console && console.dir("flash video ready " + n.instanceName_str), n.isFlashScreenReady_bl = !0, n.isAPIReady_bl = !0, n.setupVideoPoster(), n.main_do.addChild(n.preloader_do), n.setupClickScreen(), n.addDoubleClickSupport(), n.setupController(), n.setupLargePlayPauseButton(), n.setupHider(), n.setPosterSource(n.posterPath_str), n.dispatchEvent(t.READY)
        }, this.flashScreenFail = function() {
            n.dispatchEvent(t.ERROR, {
                error: error
            })
        }, this.addKeyboardSupport = function() {
            document.addEventListener ? (document.addEventListener("keydown", this.onKeyDownHandler), document.addEventListener("keyup", this.onKeyUpHandler)) : document.attachEvent && (document.attachEvent("onkeydown", this.onKeyDownHandler), document.attachEvent("onkeyup", this.onKeyUpHandler))
        }, this.removeKeyboardSupport = function() {
            document.removeEventListener ? (document.removeEventListener("keydown", this.onKeyDownHandler), document.removeEventListener("keyup", this.onKeyUpHandler)) : document.detachEvent && (document.detachEvent("onkeydown", this.onKeyDownHandler), document.detachEvent("onkeyup", this.onKeyUpHandler))
        }, this.onKeyDownHandler = function(e) {
            if (!n.isSpaceDown_bl && (n.isSpaceDown_bl = !0, 32 == e.keyCode)) {
                if (n != t.keyboardCurInstance && ("pause" == t.videoStartBehaviour || "none" == t.videoStartBehaviour)) return;
                if (n.stickOnCurrentInstanceKey_bl = !0, t.hasHTML5Video) {
                    if (!n.videoScreen_do.isSafeToBeControlled_bl) return;
                    n.videoScreen_do.togglePlayPause()
                } else n.isFlashScreenReady_bl && n.flashObject.togglePlayPause();
                return e.preventDefault && e.preventDefault(), !1
            }
        }, this.onKeyUpHandler = function() {
            n.isSpaceDown_bl = !1
        }, this.setupHider = function() {
            FWDRLHider.setPrototype(), n.hider = new FWDRLHider(n.main_do, n.data.controllerHideDelay), n.hider.addListener(FWDRLHider.SHOW, n.hiderShowHandler), n.hider.addListener(FWDRLHider.HIDE, n.hiderHideHandler), n.hider.addListener(FWDRLHider.HIDE_COMPLETE, n.hiderHideCompleteHandler)
        }, this.hiderShowHandler = function() {
            n.isPlaying_bl && n.controller_do.show(!0), n.showCursor()
        }, this.hiderHideHandler = function() {
            if (!FWDRLUtils.isIphone) {
                if (FWDRLUtils.hitTest(n.controller_do.screen, n.hider.globalX, n.hider.globalY)) return void n.hider.reset();
                n.controller_do.hide(!0), n.isFullScreen_bl && n.hideCursor()
            }
        }, this.hiderHideCompleteHandler = function() {
            n.controller_do.positionScrollBarOnTopOfTheController()
        }, this.play = function() {
            n.isAPIReady_bl && (FWDRLUtils.isIphone && n.videoScreen_do.setX(0), t.hasHTML5Video ? n.videoScreen_do && n.videoScreen_do.play() : n.isFlashScreenReady_bl && n.flashObject.playVideo(), t.keyboardCurInstance = n, n.videoPoster_do.allowToShow_bl = !1, n.largePlayButton_do.hide(), n.videoPoster_do.hide())
        }, this.pause = function() {
            n.isAPIReady_bl && (FWDRLUtils.isIphone && n.videoScreen_do.setX(0), t.hasHTML5Video ? n.videoScreen_do && n.videoScreen_do.pause() : n.isFlashScreenReady_bl && n.flashObject.pauseVideo())
        }, this.resume = function() {
            n.isAPIReady_bl && (FWDRLUtils.isIphone && n.videoScreen_do.setX(0), t.hasHTML5Video && n.videoScreen_do && n.videoScreen_do.resume())
        }, this.stop = function(e) {
            n.isAPIReady_bl && (n.isPlaying_bl = !1, n.hider.reset(), FWDRLUtils.isIphone && n.videoScreen_do.setX(-5e3), t.hasHTML5Video ? n.videoScreen_do.stop() : n.isFlashScreenReady_bl && n.flashObject.stopVideo(), n.isMobile_bl ? e && -1 != e.indexOf(".") ? (n.data.showControllerWhenVideoIsStopped_bl && n.controller_do.show(!0), n.videoPoster_do.show(), n.largePlayButton_do.show()) : e || (n.videoPoster_do.show(), n.largePlayButton_do.show()) : (n.data.showControllerWhenVideoIsStopped_bl && n.controller_do.show(!0), n.videoPoster_do.show(), n.largePlayButton_do.show()), n.data.addKeyboardSupport_bl && n.removeKeyboardSupport())
        }, this.startToScrub = function() {
            n.isAPIReady_bl && (t.hasHTML5Video ? n.videoScreen_do && n.videoScreen_do.startToScrub() : n.isFlashScreenReady_bl && n.flashObject.startToScrub())
        }, this.stopToScrub = function() {
            n.isAPIReady_bl && (t.hasHTML5Video ? n.videoScreen_do && n.videoScreen_do.stopToScrub() : n.isFlashScreenReady_bl && n.flashObject.stopToScrub())
        }, this.scrub = function(e) {
            n.isAPIReady_bl && (isNaN(e) || (0 > e ? e = 0 : e > 1 && (e = 1), t.hasHTML5Video ? n.videoScreen_do && n.videoScreen_do.scrub(e) : n.isFlashScreenReady_bl && n.flashObject.scrub(e)))
        }, this.setVolume = function(e) {
            n.isAPIReady_bl && !n.isMobile_bl && (n.controller_do.updateVolume(e, !0), t.hasHTML5Video && n.videoScreen_do && n.videoScreen_do.setVolume(e), n.isFlashScreenReady_bl && n.flashObject.setVolume(e), n.dispatchEvent(t.VOLUME_SET, {
                volume: e
            }))
        }, this.setPosterSource = function(e) {
            if (n.isAPIReady_bl && e) {
                var i = e.split(",");
                e = n.isMobile_bl && void 0 != i[1] ? i[1] : i[0], n.posterPath_str = e, n.videoPoster_do.setPoster(n.posterPath_str), n.prevPosterSource_str != e && n.dispatchEvent(t.UPDATE_POSTER_SOURCE), n.prevPosterSource_str = e
            }
        }, this.setVideoSource = function(e, i) {
            if (n.isAPIReady_bl && (e != n.prevVideoSource_str || i)) {
                if (n.prevVideoSource_str = e, !e) return void n.dispatchEvent(t.ERROR, {
                    error: "Video source is not defined!"
                });
                n.stop(e), n.videoSourcePath_str = e, n.finalVideoPath_str = e, n.videoType_str = t.VIDEO;
                var o = e.split(",");
                e = n.isMobile_bl && void 0 != o[1] ? o[1] : o[0], n.finalVideoPath_str = e, t.hasHTML5Video && n.videoType_str == t.VIDEO ? (n.setPosterSource(n.posterPath_str), n.videoPoster_do.show(), n.largePlayButton_do.show(), FWDRLUtils.isIphone && n.videoScreen_do.setX(-5e3), n.videoScreen_do.setVisible(!0), n.videoScreen_do && (n.videoScreen_do.setSource(e), n.data.videoAutoPlay_bl && n.play())) : n.isFlashScreenReady_bl && n.videoType_str == t.VIDEO && (-1 == e.indexOf("://") && 1 != e.indexOf("/") && (e = e.substr(e.indexOf("/") + 1)), n.videoPoster_do.show(), n.largePlayButton_do.show(), n.flashObject.setSource(e), n.data.videoAutoPlay_bl && n.play()), n.prevVideoSourcePath_str = n.videoSourcePath_str, n.resizeHandler(), n.getVideoSource() && n.dispatchEvent(t.UPDATE_VIDEO_SOURCE)
            }
        }, this.goFullScreen = function() {
            if (n.isAPIReady_bl) {
                document.addEventListener && (document.addEventListener("fullscreenchange", n.onFullScreenChange), document.addEventListener("mozfullscreenchange", n.onFullScreenChange), document.addEventListener("webkitfullscreenchange", n.onFullScreenChange), document.addEventListener("MSFullscreenChange", n.onFullScreenChange)), n.main_do.screen.requestFullScreen ? n.main_do.screen.requestFullScreen() : n.main_do.screen.mozRequestFullScreen ? n.main_do.screen.mozRequestFullScreen() : n.main_do.screen.webkitRequestFullScreen ? n.main_do.screen.webkitRequestFullScreen() : n.main_do.screen.msRequestFullscreen && n.main_do.screen.msRequestFullscreen(), n.disableClick(), document.documentElement.style.overflow = "hidden", n.main_do.getStyle().zIndex = 1e19, n.stageContainer.style.overflow = "visible", n.isFullScreen_bl = !0, n.controller_do.showNormalScreenButton(), n.controller_do.setNormalStateToFullScreenButton();
                var i = FWDRLUtils.getScrollOffsets();
                n.lastX = i.x, n.lastY = i.y, n.isMobile_bl && e.addEventListener("touchmove", n.disableFullScreenOnMobileHandler), n.dispatchEvent(t.GO_FULLSCREEN), setTimeout(n.resizeHandler, 50)
            }
        }, this.disableFullScreenOnMobileHandler = function(e) {
            e.preventDefault && e.preventDefault()
        }, this.goNormalScreen = function() {
            n.isAPIReady_bl && (document.cancelFullScreen ? document.cancelFullScreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen ? document.webkitCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen(), n.addMainDoToTheOriginalParent(), n.isFullScreen_bl = !1)
        }, this.addMainDoToTheOriginalParent = function() {
            n.isFullScreen_bl && (document.removeEventListener && (document.removeEventListener("fullscreenchange", n.onFullScreenChange), document.removeEventListener("mozfullscreenchange", n.onFullScreenChange), document.removeEventListener("webkitfullscreenchange", n.onFullScreenChange), document.removeEventListener("MSFullscreenChange", n.onFullScreenChange)), n.controller_do.setNormalStateToFullScreenButton(), document.documentElement.style.overflow = FWDRLUtils.isIEAndLessThen9 ? "auto" : "visible", n.main_do.getStyle().position = "relative", n.main_do.getStyle().zIndex = 0, n.controller_do.showFullScreenButton(), setTimeout(function() {
                n.resizeHandler()
            }, 50), n.isMobile_bl && e.removeEventListener("touchmove", n.disableFullScreenOnMobileHandler), n.dispatchEvent(t.GO_NORMALSCREEN))
        }, this.onFullScreenChange = function() {
            document.fullScreen || document.msFullscreenElement || document.mozFullScreen || document.webkitIsFullScreen || document.msieFullScreen || (n.controller_do.showNormalScreenButton(), n.addMainDoToTheOriginalParent(), n.isFullScreen_bl = !1)
        }, this.getVideoSource = function() {
            return n.isAPIReady_bl ? n.finalVideoPath_str : void 0
        }, this.getPosterSource = function() {
            return n.isAPIReady_bl ? n.posterPath_str : void 0
        }, this.getCurrentTime = function() {
            var e;
            return e = n.curTime ? n.curTime : "00:00"
        }, this.getTotalTime = function() {
            var e;
            return e = n.totalTime ? n.totalTime : "00:00"
        }, this.hideCursor = function() {
            document.documentElement.style.cursor = "none", document.getElementsByTagName("body")[0].style.cursor = "none"
        }, this.showCursor = function() {
            document.documentElement.style.cursor = "auto", document.getElementsByTagName("body")[0].style.cursor = "auto"
        }, this.addListener = function(e, t) {
            if (void 0 == e) throw Error("type is required.");
            if ("object" == typeof e) throw Error("type must be of type String.");
            if ("function" != typeof t) throw Error("listener must be of type Function.");
            var i = {};
            i.type = e, i.listener = t, i.target = this, this.listeners.events_ar.push(i)
        }, this.dispatchEvent = function(e, t) {
            if (null != this.listeners) {
                if (void 0 == e) throw Error("type is required.");
                if ("object" == typeof e) throw Error("type must be of type String.");
                for (var i = 0, o = this.listeners.events_ar.length; o > i; i++)
                    if (this.listeners.events_ar[i].target === this && this.listeners.events_ar[i].type === e) {
                        if (t)
                            for (var n in t) this.listeners.events_ar[i][n] = t[n];
                        this.listeners.events_ar[i].listener.call(this, this.listeners.events_ar[i])
                    }
            }
        }, this.removeListener = function(e, t) {
            if (void 0 == e) throw Error("type is required.");
            if ("object" == typeof e) throw Error("type must be of type String.");
            if ("function" != typeof t) throw Error("listener must be of type Function." + e);
            for (var i = 0, o = this.listeners.events_ar.length; o > i; i++)
                if (this.listeners.events_ar[i].target === this && this.listeners.events_ar[i].type === e && this.listeners.events_ar[i].listener === t) {
                    this.listeners.events_ar.splice(i, 1);
                    break
                }
        }, n.init()
    };
    t.setPrototype = function() {
        t.prototype = new FWDRLEventDispatcher
    }, t.hasHTML5Video = function() {
        var e = document.createElement("video"),
            i = !1;
        return e.canPlayType && (i = Boolean("probably" == e.canPlayType("video/mp4") || "maybe" == e.canPlayType("video/mp4")), t.canPlayMp4 = Boolean("probably" == e.canPlayType("video/mp4") || "maybe" == e.canPlayType("video/mp4"))), self.isMobile_bl ? !0 : i
    }(), t.instaces_ar = [], t.curInstance = null, t.keyboardCurInstance = null, t.areInstancesCreated_bl = null, t.PAUSE_ALL_VIDEOS = "pause", t.STOP_ALL_VIDEOS = "stop", t.DO_NOTHING = "none", t.VIDEO = "video", t.READY = "ready", t.STOP = "stop", t.PLAY = "play", t.PAUSE = "pause", t.UPDATE = "update", t.UPDATE_TIME = "updateTime", t.UPDATE_VIDEO_SOURCE = "updateVideoSource", t.UPDATE_POSTER_SOURCE = "udpatePosterSource", t.ERROR = "error", t.PLAY_COMPLETE = "playComplete", t.VOLUME_SET = "volumeSet", t.GO_FULLSCREEN = "goFullScreen", t.GO_NORMALSCREEN = "goNormalScreen", t.RESPONSIVE = "responsive", t.FULL_SCREEN = "fullscreen", t.AFTER_PARENT = "afterparent", e.FWDRLEVPlayer = t
}(window),
function(e) {
    var t = function(e, i, o) {
        {
            var n = this;
            t.prototype
        }
        this.img_img = new Image, this.img_do = null, this.imgW = 0, this.imgH = 0, this.finalW = 0, this.finalH = 0, this.finalX = 0, this.finalY = 0, this.curPath_str, this.backgroundColor_str = i, this.isTransparent_bl = !1, this.showPoster_bl = o, this.showOrLoadOnMobile_bl = !1, this.isShowed_bl = !0, this.allowToShow_bl = !0, this.isMobile_bl = FWDRLUtils.isMobile, this.init = function() {
            n.img_img = new Image, n.img_do = new FWDRLDisplayObject("img"), n.hide(), n.setBkColor(n.backgroundColor_str)
        }, this.positionAndResize = function() {
            if (e.stageWidth && (n.setWidth(e.stageWidth), n.setHeight(e.stageHeight), n.imgW)) {
                var t, i = e.stageWidth / n.imgW,
                    o = e.stageHeight / n.imgH;
                t = o >= i ? i : o, n.finalW = Math.round(t * n.imgW), n.finalH = Math.round(t * n.imgH), n.finalX = parseInt((e.stageWidth - n.finalW) / 2), n.finalY = parseInt((e.stageHeight - n.finalH) / 2), n.img_do.setX(n.finalX), n.img_do.setY(n.finalY), n.img_do.setWidth(n.finalW), n.img_do.setHeight(n.finalH)
            }
        }, this.setPoster = function(e) {
            return e && "" == FWDRLUtils.trim(e) || "none" == e ? (n.showOrLoadOnMobile_bl = !0, n.isTransparent_bl = !0, void n.show()) : "youtubemobile" == e ? (n.isTransparent_bl = !1, n.showOrLoadOnMobile_bl = !1, n.img_img.src = null, void(n.imgW = 0)) : e == n.curPath_str ? (n.isTransparent_bl = !1, n.showOrLoadOnMobile_bl = !0, void n.show()) : (n.isTransparent_bl = !1, n.showOrLoadOnMobile_bl = !0, n.curPath_str = e, n.allowToShow_bl && (n.isShowed_bl = !1), void(e && (n.img_do && (n.img_do.src = ""), n.img_img.onload = n.posterLoadHandler, n.img_img.src = n.curPath_str)))
        }, this.posterLoadHandler = function() {
            n.imgW = n.img_img.width, n.imgH = n.img_img.height, n.img_do.setScreen(n.img_img), n.addChild(n.img_do), n.show(), n.positionAndResize()
        }, this.show = function() {
            n.allowToShow_bl && !n.isShowed_bl && n.showOrLoadOnMobile_bl && (n.isShowed_bl = !0, n.isTransparent_bl ? 0 != n.alpha && n.setAlpha(0) : 1 != n.alpha && n.setAlpha(1), n.setVisible(!0), n.isMobile_bl || n.isTransparent_bl || (FWDRLTweenMax.killTweensOf(n), n.setAlpha(0), FWDRLTweenMax.to(n, .6, {
                alpha: 1,
                delay: .4
            })), n.positionAndResize())
        }, this.hide = function() {
            n.isShowed_bl && (n.isShowed_bl = !1, n.setVisible(!1))
        }, this.init()
    };
    t.setPrototype = function() {
        t.prototype = new FWDRLDisplayObject("div")
    }, t.prototype = null, e.FWDRLEVPPoster = t
}(window),
function(e) {
    var t = function(i, o, n) {
        {
            var s = this;
            t.prototype
        }
        this.video_el = null, this.sourcePath_str = null, this.backgroundColor_str = o, this.controllerHeight = i.data.controllerHeight, this.stageWidth = 0, this.stageHeight = 0, this.lastPercentPlayed = 0, this.volume = n, this.curDuration = 0, this.countNormalMp3Errors = 0, this.countShoutCastErrors = 0, this.maxShoutCastCountErrors = 5, this.maxNormalCountErrors = 1, this.disableClickForAWhileId_to, this.disableClick_bl = !1, this.allowScrubing_bl = !1, this.hasError_bl = !0, this.isPlaying_bl = !1, this.isStopped_bl = !0, this.hasPlayedOnce_bl = !1, this.isStartEventDispatched_bl = !1, this.isSafeToBeControlled_bl = !1, this.isMobile_bl = FWDRLUtils.isMobile, this.init = function() {
            s.setupVideo(), s.setBkColor(s.backgroundColor_str)
        }, this.setupVideo = function() {
            null == s.video_el && (s.video_el = document.createElement("video"), s.screen.appendChild(s.video_el), s.video_el.controls = !1, s.video_el.volume = s.volume, s.video_el.style.position = "relative", s.video_el.style.left = "0px", s.video_el.style.top = "0px", s.video_el.style.width = "100%", s.video_el.style.height = "100%", s.video_el.style.margin = "0px", s.video_el.style.padding = "0px", s.video_el.style.maxWidth = "none", s.video_el.style.maxHeight = "none", s.video_el.style.border = "none", s.video_el.style.lineHeight = "0", s.video_el.style.msTouchAction = "none", s.screen.appendChild(s.video_el)), s.video_el.addEventListener("error", s.errorHandler), s.video_el.addEventListener("canplay", s.safeToBeControlled), s.video_el.addEventListener("canplaythrough", s.safeToBeControlled), s.video_el.addEventListener("progress", s.updateProgress), s.video_el.addEventListener("timeupdate", s.updateVideo), s.video_el.addEventListener("pause", s.pauseHandler), s.video_el.addEventListener("play", s.playHandler), FWDRLUtils.isIE || s.video_el.addEventListener("waiting", s.startToBuffer), s.video_el.addEventListener("playing", s.stopToBuffer), s.video_el.addEventListener("ended", s.endedHandler), s.resizeAndPosition()
        }, this.destroyVideo = function() {
            s.video_el && (s.video_el.removeEventListener("error", s.errorHandler), s.video_el.removeEventListener("canplay", s.safeToBeControlled), s.video_el.removeEventListener("canplaythrough", s.safeToBeControlled), s.video_el.removeEventListener("progress", s.updateProgress), s.video_el.removeEventListener("timeupdate", s.updateVideo), s.video_el.removeEventListener("pause", s.pauseHandler), s.video_el.removeEventListener("play", s.playHandler), FWDRLUtils.isIE || s.video_el.removeEventListener("waiting", s.startToBuffer), s.video_el.removeEventListener("playing", s.stopToBuffer), s.video_el.removeEventListener("ended", s.endedHandler), s.isMobile_bl ? (s.screen.removeChild(s.video_el), s.video_el = null) : (s.video_el.style.visibility = "hidden", s.video_el.src = "", s.video_el.load()))
        }, this.startToBuffer = function() {
            s.dispatchEvent(t.START_TO_BUFFER)
        }, this.stopToBuffer = function() {
            s.dispatchEvent(t.STOP_TO_BUFFER)
        }, this.errorHandler = function(i) {
            var o;
            s.hasError_bl = !0, o = 0 == s.video_el.networkState ? "error 'self.video_el.networkState = 0'" : 1 == s.video_el.networkState ? "error 'self.video_el.networkState = 1'" : 2 == s.video_el.networkState ? "'self.video_el.networkState = 2'" : 3 == s.video_el.networkState ? "Video source not found <font color='#FFFFFF'>" + s.sourcePath_str + "</font>" : i, e.console && e.console.log(s.video_el.networkState), s.dispatchEvent(t.ERROR, {
                text: o
            })
        }, this.resizeAndPosition = function(e, t) {
            e && (s.stageWidth = e, s.stageHeight = t), s.setWidth(s.stageWidth), s.setHeight(FWDRLUtils.isIphone ? s.stageHeight - s.controllerHeight : s.stageHeight)
        }, this.setSource = function(e) {
            s.sourcePath_str = e, s.video_el && s.stop()
        }, this.play = function(e) {
            if (FWDRLEVPlayer.curInstance = i, s.isStopped_bl) s.isPlaying_bl = !1, s.hasError_bl = !1, s.allowScrubing_bl = !1, s.isStopped_bl = !1, s.setupVideo(), s.setVolume(), s.video_el.src = s.sourcePath_str, s.play(), s.startToBuffer(!0), s.isPlaying_bl = !0;
            else if (!s.video_el.ended || e) try {
                s.isPlaying_bl = !0, s.hasPlayedOnce_bl = !0, s.video_el.play(), FWDRLUtils.isIE && s.dispatchEvent(t.PLAY)
            } catch (o) {}
        }, this.pause = function() {
            if (null != s && !s.isStopped_bl && !s.hasError_bl && !s.video_el.ended) try {
                s.video_el.pause(), s.isPlaying_bl = !1, FWDRLUtils.isIE && s.dispatchEvent(t.PAUSE)
            } catch (e) {}
        }, this.togglePlayPause = function() {
            null != s && s.isSafeToBeControlled_bl && (s.isPlaying_bl ? s.pause() : s.play())
        }, this.pauseHandler = function() {
            s.allowScrubing_bl || s.dispatchEvent(t.PAUSE)
        }, this.playHandler = function() {
            s.allowScrubing_bl || (s.isStartEventDispatched_bl || (s.dispatchEvent(t.START), s.isStartEventDispatched_bl = !0), s.dispatchEvent(t.PLAY))
        }, this.endedHandler = function() {
            s.dispatchEvent(t.PLAY_COMPLETE)
        }, this.resume = function() {
            s.isStopped_bl || s.play()
        }, this.stop = function(e) {
            (null != s && null != s.video_el && !s.isStopped_bl || e) && (s.isPlaying_bl = !1, s.isStopped_bl = !0, s.hasPlayedOnce_bl = !0, s.isSafeToBeControlled_bl = !1, s.isStartEventDispatched_bl = !1, s.destroyVideo(), s.dispatchEvent(t.LOAD_PROGRESS, {
                percent: 0
            }), s.dispatchEvent(t.UPDATE_TIME, {
                curTime: "00:00",
                totalTime: "00:00"
            }), s.dispatchEvent(t.STOP), s.stopToBuffer())
        }, this.safeToBeControlled = function() {
            s.stopToScrub(), s.isSafeToBeControlled_bl || (s.hasHours_bl = Math.floor(s.video_el.duration / 3600) > 0, s.isPlaying_bl = !0, s.isSafeToBeControlled_bl = !0, s.video_el.style.visibility = "visible", s.dispatchEvent(t.SAFE_TO_SCRUBB))
        }, this.updateProgress = function() {
            var e, i = 0;
            s.video_el.buffered.length > 0 && (e = s.video_el.buffered.end(s.video_el.buffered.length - 1), i = e.toFixed(1) / s.video_el.duration.toFixed(1), (isNaN(i) || !i) && (i = 0)), 1 == i && s.video_el.removeEventListener("progress", s.updateProgress), s.dispatchEvent(t.LOAD_PROGRESS, {
                percent: i
            })
        }, this.updateVideo = function() {
            var e;
            s.allowScrubing_bl || (e = s.video_el.currentTime / s.video_el.duration, s.dispatchEvent(t.UPDATE, {
                percent: e
            }));
            var i = s.formatTime(s.video_el.duration),
                o = s.formatTime(s.video_el.currentTime);
            isNaN(s.video_el.duration) ? s.dispatchEvent(t.UPDATE_TIME, {
                curTime: "00:00",
                totalTime: "00:00"
            }) : s.dispatchEvent(t.UPDATE_TIME, {
                curTime: o,
                totalTime: i
            }), s.lastPercentPlayed = e, s.curDuration = o
        }, this.startToScrub = function() {
            s.allowScrubing_bl = !0
        }, this.stopToScrub = function() {
            s.allowScrubing_bl = !1
        }, this.scrub = function(e, i) {
            i && s.startToScrub();
            try {
                s.video_el.currentTime = s.video_el.duration * e;
                var o = s.formatTime(s.video_el.duration),
                    n = s.formatTime(s.video_el.currentTime);
                s.dispatchEvent(t.UPDATE_TIME, {
                    curTime: n,
                    totalTime: o
                })
            } catch (i) {}
        }, this.replay = function() {
            s.scrub(0), s.play()
        }, this.setVolume = function(e) {
            e && (s.volume = e), s.video_el && (s.video_el.volume = s.volume)
        }, this.formatTime = function(e) {
            var t = Math.floor(e / 3600),
                i = e % 3600,
                o = Math.floor(i / 60),
                n = i % 60,
                r = Math.ceil(n);
            return o = o >= 10 ? o : "0" + o, r = r >= 10 ? r : "0" + r, isNaN(r) ? "00:00" : s.hasHours_bl ? t + ":" + o + ":" + r : o + ":" + r
        }, this.init()
    };
    t.setPrototype = function() {
        t.prototype = new FWDRLDisplayObject("div")
    }, t.ERROR = "error", t.UPDATE = "update", t.UPDATE_TIME = "updateTime", t.SAFE_TO_SCRUBB = "safeToControll", t.LOAD_PROGRESS = "loadProgress", t.START = "start", t.PLAY = "play", t.PAUSE = "pause", t.STOP = "stop", t.PLAY_COMPLETE = "playComplete", t.START_TO_BUFFER = "startToBuffer", t.STOP_TO_BUFFER = "stopToBuffer", e.FWDRLEVPVideoScreen = t
}(window),
function(e) {
    var t = function(e, i, o) {
        var n = this,
            s = t.prototype;
        this.nImg = e, this.sPath_str = i, this.dPath_str = o, this.n_sdo, this.s_sdo, this.d_sdo, this.toolTipLabel_str, this.totalWidth = this.nImg.width, this.totalHeight = this.nImg.height, this.isSetToDisabledState_bl = !1, this.isDisabled_bl = !1, this.isSelectedFinal_bl = !1, this.isActive_bl = !1, this.isMobile_bl = FWDRLUtils.isMobile, this.hasPointerEvent_bl = FWDRLUtils.hasPointerEvent, this.allowToCreateSecondButton_bl = !n.isMobile_bl || n.hasPointerEvent_bl, n.init = function() {
            n.setupMainContainers()
        }, n.setupMainContainers = function() {
            if (n.n_sdo = new FWDRLDisplayObject("img"), n.n_sdo.setScreen(n.nImg), n.addChild(n.n_sdo), n.allowToCreateSecondButton_bl) {
                var e = new Image;
                if (e.src = n.sPath_str, n.s_sdo = new FWDRLDisplayObject("img"), n.s_sdo.setScreen(e), n.s_sdo.setWidth(n.totalWidth), n.s_sdo.setHeight(n.totalHeight), n.s_sdo.setAlpha(0), n.addChild(n.s_sdo), n.dPath_str) {
                    var t = new Image;
                    t.src = n.dPath_str, n.d_sdo = new FWDRLDisplayObject("img"), n.d_sdo.setScreen(t), n.d_sdo.setWidth(n.totalWidth), n.d_sdo.setHeight(n.totalHeight), n.isMobile_bl ? n.d_sdo.setX(-100) : n.d_sdo.setAlpha(0), n.addChild(n.d_sdo)
                }
            }
            n.setWidth(n.totalWidth), n.setHeight(n.totalHeight), n.setButtonMode(!0), n.isMobile_bl ? n.hasPointerEvent_bl ? (n.screen.addEventListener("pointerdown", n.onMouseUp), n.screen.addEventListener("pointerover", n.onMouseOver), n.screen.addEventListener("pointerout", n.onMouseOut)) : n.screen.addEventListener("touchend", n.onMouseUp) : n.screen.addEventListener ? (n.screen.addEventListener("mouseover", n.onMouseOver), n.screen.addEventListener("mouseout", n.onMouseOut), n.screen.addEventListener("mousedown", n.onMouseUp)) : n.screen.attachEvent && (n.screen.attachEvent("onmouseover", n.onMouseOver), n.screen.attachEvent("onmouseout", n.onMouseOut), n.screen.attachEvent("onmousedown", n.onMouseUp))
        }, n.onMouseOver = function(e) {
            if (!e.pointerType || e.pointerType == e.MSPOINTER_TYPE_MOUSE) {
                if (n.isDisabled_bl || n.isSelectedFinal_bl) return;
                n.dispatchEvent(t.MOUSE_OVER, {
                    e: e
                }), FWDRLTweenMax.killTweensOf(n.s_sdo), FWDRLTweenMax.to(n.s_sdo, .5, {
                    alpha: 1,
                    delay: .1,
                    ease: Expo.easeOut
                })
            }
        }, n.onMouseOut = function(e) {
            if (!e.pointerType || e.pointerType == e.MSPOINTER_TYPE_MOUSE) {
                if (n.isDisabled_bl || n.isSelectedFinal_bl) return;
                n.dispatchEvent(t.MOUSE_OUT, {
                    e: e
                }), FWDRLTweenMax.killTweensOf(n.s_sdo), FWDRLTweenMax.to(n.s_sdo, .5, {
                    alpha: 0,
                    ease: Expo.easeOut
                })
            }
        }, n.onMouseUp = function(e) {
            e.preventDefault && e.preventDefault(), n.isDisabled_bl || 2 == e.button || n.isSelectedFinal_bl || n.dispatchEvent(t.MOUSE_UP, {
                e: e
            })
        }, n.setSelctedFinal = function() {
            n.isSelectedFinal_bl = !0, FWDRLTweenMax.killTweensOf(n.s_sdo), FWDRLTweenMax.to(n.s_sdo, .8, {
                alpha: 1,
                ease: Expo.easeOut
            }), n.setButtonMode(!1)
        }, n.setUnselctedFinal = function() {
            n.isSelectedFinal_bl = !1, FWDRLTweenMax.to(n.s_sdo, .8, {
                alpha: 0,
                delay: .1,
                ease: Expo.easeOut
            }), n.setButtonMode(!0)
        }, this.setDisabledState = function() {
            n.isSetToDisabledState_bl || (n.isSetToDisabledState_bl = !0, n.isMobile_bl ? n.d_sdo.setX(0) : (FWDRLTweenMax.killTweensOf(n.d_sdo), FWDRLTweenMax.to(n.d_sdo, .8, {
                alpha: 1,
                ease: Expo.easeOut
            })))
        }, this.setEnabledState = function() {
            n.isSetToDisabledState_bl && (n.isSetToDisabledState_bl = !1, n.isMobile_bl ? n.d_sdo.setX(-100) : (FWDRLTweenMax.killTweensOf(n.d_sdo), FWDRLTweenMax.to(n.d_sdo, .8, {
                alpha: 0,
                delay: .1,
                ease: Expo.easeOut
            })))
        }, this.disable = function() {
            n.isDisabled_bl = !0, n.setButtonMode(!1)
        }, this.enable = function() {
            n.isDisabled_bl = !1, n.setButtonMode(!0)
        }, n.destroy = function() {
            n.isMobile_bl ? n.hasPointerEvent_bl ? (n.screen.removeEventListener("pointerdown", n.onMouseUp), n.screen.removeEventListener("pointerover", n.onMouseOver), n.screen.removeEventListener("pointerout", n.onMouseOut)) : n.screen.removeEventListener("touchend", n.onMouseUp) : n.screen.removeEventListener ? (n.screen.removeEventListener("mouseover", n.onMouseOver), n.screen.removeEventListener("mouseout", n.onMouseOut), n.screen.removeEventListener("mousedown", n.onMouseUp)) : n.screen.detachEvent && (n.screen.detachEvent("onmouseover", n.onMouseOver), n.screen.detachEvent("onmouseout", n.onMouseOut), n.screen.detachEvent("onmousedown", n.onMouseUp)), FWDRLTweenMax.killTweensOf(n.s_sdo), n.n_sdo.destroy(), n.s_sdo.destroy(), n.d_sdo && (FWDRLTweenMax.killTweensOf(n.d_sdo), n.d_sdo.destroy()), n.nImg = null, n.sImg = null, n.dImg = null, n.n_sdo = null, n.s_sdo = null, n.d_sdo = null, e = null, sImg = null, dImg = null, n.toolTipLabel_str = null, n.init = null, n.setupMainContainers = null, n.onMouseOver = null, n.onMouseOut = null, n.onClick = null, n.onMouseDown = null, n.setSelctedFinal = null, n.setUnselctedFinal = null, n.setInnerHTML(""), s.destroy(), n = null, s = null, t.prototype = null
        }, n.init()
    };
    t.setPrototype = function() {
        t.prototype = null, t.prototype = new FWDRLDisplayObject("div")
    }, t.CLICK = "onClick", t.MOUSE_OVER = "onMouseOver", t.MOUSE_OUT = "onMouseOut", t.MOUSE_UP = "onMouseDown", t.prototype = null, e.FWDRLEVPVolumeButton = t
}(window),
function(e) {
    var t = function(i) {
        {
            var o = this;
            t.prototype
        }
        this.appId = parseInt(i);
        o.init = function() {
            o.checkFBRoot(), e.fbAsyncInit || o.connect()
        }, this.checkFBRoot = function() {
            var e = Boolean(document.getElementById("fb-root"));
            e || (e = document.createElement("div"), e.id = "fb-root", document.getElementsByTagName("body")[0].appendChild(e))
        }, this.connect = function() {
            o.hasStartedToConnect_bl || (o.hasStartedToConnect_bl = !0, e.fbAsyncInit = function() {
                FB.init({
                    appId: o.appId,
                    status: !0,
                    cookie: !0,
                    xfbml: !0,
                    oauth: !0
                }), FB.Event.subscribe("auth.authResponseChange", function(e) {
                    "connected" === e.status || FB.login()
                })
            }, function(e) {
                var t, i = "facebook-jssdk";
                e.getElementById(i) || (t = e.createElement("script"), t.id = i, t.async = !0, t.src = "//connect.facebook.net/en_US/all.js", e.getElementsByTagName("body")[0].appendChild(t))
            }(document))
        }, this.share = function(e, t, i) {
            i && t ? FB.ui({
                method: "feed",
                link: e,
                caption: i,
                picture: t
            }, function() {}) : i ? FB.ui({
                method: "feed",
                link: e,
                caption: i
            }, function() {}) : t ? FB.ui({
                method: "feed",
                link: e,
                picture: t
            }, function() {}) : FB.ui({
                method: "feed",
                link: e
            }, function() {})
        }, o.init()
    };
    t.setPrototype = function() {
        t.prototype = new FWDRLEventDispatcher
    }, t.prototype = null, e.FWDRLFacebookShare = t
}(window);
var FWDRLFlashTest = function() {
    function e(e) {
        var t = u.pv,
            i = e.split(".");
        return i[0] = parseInt(i[0], 10), i[1] = parseInt(i[1], 10) || 0, i[2] = parseInt(i[2], 10) || 0, t[0] > i[0] || t[0] == i[0] && t[1] > i[1] || t[0] == i[0] && t[1] == i[1] && t[2] >= i[2] ? !0 : !1
    }
    var t = "undefined",
        i = "object",
        o = "Shockwave Flash",
        n = "ShockwaveFlash.ShockwaveFlash",
        s = "application/x-shockwave-flash",
        r = window,
        a = document,
        l = navigator,
        d = !1,
        u = function() {
            var e = typeof a.getElementById != t && typeof a.getElementsByTagName != t && typeof a.createElement != t,
                u = l.userAgent.toLowerCase(),
                h = l.platform.toLowerCase(),
                c = /win/.test(h ? h : u),
                _ = /mac/.test(h ? h : u),
                b = /webkit/.test(u) ? parseFloat(u.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : !1,
                m = !1,
                p = [0, 0, 0],
                f = null;
            if (typeof l.plugins != t && typeof l.plugins[o] == i) f = l.plugins[o].description, !f || typeof l.mimeTypes != t && l.mimeTypes[s] && !l.mimeTypes[s].enabledPlugin || (d = !0, m = !1, f = f.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), p[0] = parseInt(f.replace(/^(.*)\..*$/, "$1"), 10), p[1] = parseInt(f.replace(/^.*\.(.*)\s.*$/, "$1"), 10), p[2] = /[a-zA-Z]/.test(f) ? parseInt(f.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0);
            else if (typeof r.ActiveXObject != t) try {
                var v = new ActiveXObject(n);
                v && (f = v.GetVariable("$version"), f && (m = !0, f = f.split(" ")[1].split(","), p = [parseInt(f[0], 10), parseInt(f[1], 10), parseInt(f[2], 10)]))
            } catch (g) {}
            return {
                w3: e,
                pv: p,
                wk: b,
                ie: m,
                win: c,
                mac: _
            }
        }();
    return {
        hasFlashPlayerVersion: e
    }
}();
! function(e) {
    var t = function(i, o) {
        {
            var n = this;
            t.prototype
        }
        this.screenToTest = i, this.hideDelay = o, this.globalX = 0, this.globalY = 0, this.currentTime, this.checkIntervalId_int, this.hideCompleteId_to, this.hasInitialTestEvents_bl = !1, this.addSecondTestEvents_bl = !1, this.dispatchOnceShow_bl = !0, this.dispatchOnceHide_bl = !1, this.isStopped_bl = !0, this.isHidden_bl = !1, this.isMobile_bl = FWDRLUtils.isMobile, this.hasPointerEvent_bl = FWDRLUtils.hasPointerEvent, n.init = function() {}, n.start = function() {
            n.currentTime = (new Date).getTime(), clearInterval(n.checkIntervalId_int), n.checkIntervalId_int = setInterval(n.update, 100), n.addMouseOrTouchCheck(), n.isStopped_bl = !1
        }, n.stop = function() {
            clearInterval(n.checkIntervalId_int), n.isStopped_bl = !0, n.removeMouseOrTouchCheck(), n.removeMouseOrTouchCheck2()
        }, n.addMouseOrTouchCheck = function() {
            n.hasInitialTestEvents_bl || (n.hasInitialTestEvents_bl = !0, n.isMobile_bl ? n.hasPointerEvent_bl ? (n.screenToTest.screen.addEventListener("pointerdown", n.onMouseOrTouchUpdate), n.screenToTest.screen.addEventListener("pointermove", n.onMouseOrTouchUpdate)) : n.screenToTest.screen.addEventListener("touchstart", n.onMouseOrTouchUpdate) : e.addEventListener ? e.addEventListener("mousemove", n.onMouseOrTouchUpdate) : document.attachEvent && document.attachEvent("onmousemove", n.onMouseOrTouchUpdate))
        }, n.removeMouseOrTouchCheck = function() {
            n.hasInitialTestEvents_bl && (n.hasInitialTestEvents_bl = !1, n.isMobile_bl ? n.hasPointerEvent_bl ? (n.screenToTest.screen.removeEventListener("pointerdown", n.onMouseOrTouchUpdate), n.screenToTest.screen.removeEventListener("pointermove", n.onMouseOrTouchUpdate)) : n.screenToTest.screen.removeEventListener("touchstart", n.onMouseOrTouchUpdate) : e.removeEventListener ? e.removeEventListener("mousemove", n.onMouseOrTouchUpdate) : document.detachEvent && document.detachEvent("onmousemove", n.onMouseOrTouchUpdate))
        }, n.addMouseOrTouchCheck2 = function() {
            n.addSecondTestEvents_bl || (n.addSecondTestEvents_bl = !0, n.screenToTest.screen.addEventListener ? n.screenToTest.screen.addEventListener("mousemove", n.secondTestMoveDummy) : n.screenToTest.screen.attachEvent && n.screenToTest.screen.attachEvent("onmousemove", n.secondTestMoveDummy))
        }, n.removeMouseOrTouchCheck2 = function() {
            n.addSecondTestEvents_bl && (n.addSecondTestEvents_bl = !1, n.screenToTest.screen.removeEventListener ? n.screenToTest.screen.removeEventListener("mousemove", n.secondTestMoveDummy) : n.screenToTest.screen.detachEvent && n.screenToTest.screen.detachEvent("onmousemove", n.secondTestMoveDummy))
        }, this.secondTestMoveDummy = function() {
            n.removeMouseOrTouchCheck2(), n.addMouseOrTouchCheck()
        }, n.onMouseOrTouchUpdate = function(e) {
            var t = FWDRLUtils.getViewportMouseCoordinates(e);
            n.globalX != t.screenX && n.globalY != t.screenY && (n.currentTime = (new Date).getTime()), n.globalX = t.screenX, n.globalY = t.screenY, n.isMobile_bl || FWDRLUtils.hitTest(n.screenToTest.screen, n.globalX, n.globalY) || (n.removeMouseOrTouchCheck(), n.addMouseOrTouchCheck2())
        }, n.update = function() {
            (new Date).getTime() > n.currentTime + n.hideDelay ? n.dispatchOnceShow_bl && (n.dispatchOnceHide_bl = !0, n.dispatchOnceShow_bl = !1, n.isHidden_bl = !0, n.dispatchEvent(t.HIDE), clearTimeout(n.hideCompleteId_to), n.hideCompleteId_to = setTimeout(function() {
                n.dispatchEvent(t.HIDE_COMPLETE)
            }, 1e3)) : n.dispatchOnceHide_bl && (clearTimeout(n.hideCompleteId_to), n.dispatchOnceHide_bl = !1, n.dispatchOnceShow_bl = !0, n.isHidden_bl = !1, n.dispatchEvent(t.SHOW))
        }, n.reset = function() {
            n.isHidden_bl = !1, clearTimeout(n.hideCompleteId_to), n.currentTime = (new Date).getTime(), n.dispatchEvent(t.SHOW)
        }, n.init()
    };
    t.HIDE = "hide", t.SHOW = "show", t.HIDE_COMPLETE = "hideComplete", t.setPrototype = function() {
        t.prototype = new FWDRLEventDispatcher
    }, e.FWDRLHider = t
}(window),
function(e) {
    var t = function(e) {
        {
            var i = this;
            t.prototype
        }
        this.bk_do = null, this.textHolder_do = null, this.show_to = null, this.isShowed_bl = !1, this.isShowedOnce_bl = !1, this.allowToRemove_bl = !0, this.init = function() {
            i.setResizableSizeAfterParent(), i.bk_do = new FWDRLDisplayObject("div"), i.bk_do.setBkColor("#FF0000"), i.getStyle().width = "80%", i.addChild(i.bk_do), i.textHolder_do = new FWDRLDisplayObject("div"), i.textHolder_do.getStyle().wordWrap = "break-word", i.textHolder_do.getStyle().padding = "10px", i.textHolder_do.getStyle().paddingBottom = "0px", i.textHolder_do.getStyle().lineHeight = "18px", i.textHolder_do.getStyle().color = "#000000", i.addChild(i.textHolder_do)
        }, this.showText = function(e) {
            i.isShowedOnce_bl || (i.screen.addEventListener ? i.screen.addEventListener("click", i.closeWindow) : i.screen.attachEvent && i.screen.attachEvent("onclick", i.closeWindow), i.isShowedOnce_bl = !0), i.setVisible(!1), i.textHolder_do.getStyle().paddingBottom = "10px", i.textHolder_do.setInnerHTML(e), clearTimeout(i.show_to), i.show_to = setTimeout(i.show, 60), setTimeout(function() {
                i.positionAndResize()
            }, 10)
        }, this.show = function() {
            i.isShowed_bl = !0, i.setVisible(!0), i.positionAndResize()
        }, this.positionAndResize = function() {
            finalX = 0, finalY = 0, i.bk_do.setWidth(i.textHolder_do.getWidth()), i.bk_do.setHeight(i.textHolder_do.getHeight()), i.setHeight(i.textHolder_do.getHeight()), i.textHolder_do.setX(finalX), i.textHolder_do.setY(finalY)
        }, this.closeWindow = function() {
            if (i.allowToRemove_bl) {
                i.isShowed_bl = !1, clearTimeout(i.show_to);
                try {
                    e.main_do.removeChild(i)
                } catch (t) {}
            }
        }, this.init()
    };
    t.setPrototype = function() {
        t.prototype = new FWDRLDisplayObject("div", "relative")
    }, t.prototype = null, e.FWDRLInfo = t
}(window),
function(e) {
    var t = function(e, i, o, n, s, r) {
        {
            var a = this;
            t.prototype
        }
        this.imageSource_img = e, this.image_sdo = null, this.segmentWidth = i, this.segmentHeight = o, this.totalSegments = n, this.animDelay = s || 300, this.count = 0, this.delayTimerId_int, this.isShowed_bl = !0, this.skipFirstFrame_bl = r, a.init = function() {
            a.getStyle().pointerEvents = "none", a.setWidth(a.segmentWidth), a.setHeight(a.segmentHeight), a.image_sdo = new FWDRLDisplayObject("img"), a.image_sdo.setScreen(a.imageSource_img), a.image_sdo.hasTransform3d_bl = !1, a.image_sdo.hasTransform2d_bl = !1, a.addChild(a.image_sdo), a.hide(!1)
        }, a.start = function() {
            null != a && (clearInterval(a.delayTimerId_int), a.delayTimerId_int = setInterval(a.updatePreloader, a.animDelay))
        }, a.stop = function() {
            clearInterval(a.delayTimerId_int), a.image_sdo.setX(0)
        }, a.updatePreloader = function() {
            if (null != a) {
                a.count++, a.count > a.totalSegments - 1 && (a.count = a.skipFirstFrame_bl ? 1 : 0);
                var e = a.count * a.segmentWidth;
                a.image_sdo.setX(-e)
            }
        }, a.show = function() {
            a.setVisible(!0), a.start(), FWDRLTweenMax.killTweensOf(a), FWDRLTweenMax.to(a, .8, {
                alpha: 1,
                ease: Quart.easeOut
            }), a.isShowed_bl = !0
        }, a.hide = function(e) {
            a.isShowed_bl && (FWDRLTweenMax.killTweensOf(a), e ? FWDRLTweenMax.to(a, .8, {
                alpha: 0,
                onComplete: a.onHideComplete,
                ease: Quart.easeOut
            }) : (a.setVisible(!1), a.setAlpha(0)), a.isShowed_bl = !1)
        }, a.onHideComplete = function() {
            a.stop(), a.setVisible(!1), a.dispatchEvent(t.HIDE_COMPLETE)
        }, a.init()
    };
    t.setPrototype = function() {
        t.prototype = new FWDRLDisplayObject("div")
    }, t.HIDE_COMPLETE = "hideComplete", t.prototype = null, e.FWDRLPreloader = t
}(window),
function(e) {
    var t = function(e, i, o, n) {
        {
            var s = this;
            t.prototype
        }
        this.nImg = e, this.sPath_str = i, this.dPath_str = o, this.buttonsHolder_do, this.n_sdo, this.s_sdo, this.d_sdo, this.toolTipLabel_str, this.totalWidth = this.nImg.width, this.totalHeight = this.nImg.height, this.isShowed_bl = !0, this.isSetToDisabledState_bl = !1, this.isDisabled_bl = !1, this.isDisabledForGood_bl = !1, this.isSelectedFinal_bl = !1, this.isActive_bl = !1, this.isMobile_bl = FWDRLUtils.isMobile, this.hasPointerEvent_bl = FWDRLUtils.hasPointerEvent, this.allowToCreateSecondButton_bl = !s.isMobile_bl || s.hasPointerEvent_bl || n, s.init = function() {
            s.setupMainContainers()
        }, s.setupMainContainers = function() {
            if (s.buttonsHolder_do = new FWDRLDisplayObject("div"), s.buttonsHolder_do.setOverflow("visible"), s.n_sdo = new FWDRLDisplayObject("img"), s.n_sdo.setScreen(s.nImg), s.buttonsHolder_do.addChild(s.n_sdo), s.allowToCreateSecondButton_bl) {
                var e = new Image;
                if (e.src = s.sPath_str, s.s_sdo = new FWDRLDisplayObject("img"), s.s_sdo.setScreen(e), s.s_sdo.setWidth(s.totalWidth), s.s_sdo.setHeight(s.totalHeight), s.s_sdo.setAlpha(0), s.buttonsHolder_do.addChild(s.s_sdo), s.dPath_str) {
                    var t = new Image;
                    t.src = s.dPath_str, s.d_sdo = new FWDRLDisplayObject("img"), s.d_sdo.setScreen(t), s.d_sdo.setWidth(s.totalWidth), s.d_sdo.setHeight(s.totalHeight), s.d_sdo.setX(-100), s.buttonsHolder_do.addChild(s.d_sdo)
                }
            }
            s.setWidth(s.totalWidth), s.setHeight(s.totalHeight), s.setButtonMode(!0), s.screen.style.yellowOverlayPointerEvents = "none", s.addChild(s.buttonsHolder_do), s.isMobile_bl ? s.hasPointerEvent_bl ? (s.screen.addEventListener("pointerup", s.onMouseUp), s.screen.addEventListener("pointerover", s.onMouseOver), s.screen.addEventListener("pointerout", s.onMouseOut)) : s.screen.addEventListener("touchend", s.onMouseUp) : s.screen.addEventListener ? (s.screen.addEventListener("mouseover", s.onMouseOver), s.screen.addEventListener("mouseout", s.onMouseOut), s.screen.addEventListener("mouseup", s.onMouseUp)) : s.screen.attachEvent && (s.screen.attachEvent("onmouseover", s.onMouseOver), s.screen.attachEvent("onmouseout", s.onMouseOut), s.screen.attachEvent("onmouseup", s.onMouseUp))
        }, s.onMouseOver = function(e) {
            if (s.dispatchEvent(t.SHOW_TOOLTIP, {
                    e: e
                }), !(s.isDisabledForGood_bl || e.pointerType && e.pointerType != e.MSPOINTER_TYPE_MOUSE && "mouse" != e.pointerType)) {
                if (s.isDisabled_bl || s.isSelectedFinal_bl) return;
                s.dispatchEvent(t.MOUSE_OVER, {
                    e: e
                }), s.setSelectedState()
            }
        }, s.onMouseOut = function(e) {
            if (!(s.isDisabledForGood_bl || e.pointerType && e.pointerType != e.MSPOINTER_TYPE_MOUSE && "mouse" != e.pointerType)) {
                if (s.isDisabled_bl || s.isSelectedFinal_bl) return;
                s.dispatchEvent(t.MOUSE_OUT, {
                    e: e
                }), s.setNormalState()
            }
        }, s.onMouseUp = function(e) {
            s.isDisabledForGood_bl || (e.preventDefault && e.preventDefault(), s.isDisabled_bl || 2 == e.button || s.dispatchEvent(t.MOUSE_UP, {
                e: e
            }))
        }, s.setSelected = function() {
            s.isSelectedFinal_bl = !0, s.s_sdo && (FWDRLTweenMax.killTweensOf(s.s_sdo), FWDRLTweenMax.to(s.s_sdo, .8, {
                alpha: 1,
                ease: Expo.easeOut
            }))
        }, s.setUnselected = function() {
            s.isSelectedFinal_bl = !1, s.s_sdo && FWDRLTweenMax.to(s.s_sdo, .8, {
                alpha: 0,
                delay: .1,
                ease: Expo.easeOut
            })
        }, this.setNormalState = function() {
            s.s_sdo && (FWDRLTweenMax.killTweensOf(s.s_sdo), FWDRLTweenMax.to(s.s_sdo, .5, {
                alpha: 0,
                ease: Expo.easeOut
            }))
        }, this.setSelectedState = function() {
            s.s_sdo && (FWDRLTweenMax.killTweensOf(s.s_sdo), FWDRLTweenMax.to(s.s_sdo, .5, {
                alpha: 1,
                delay: .1,
                ease: Expo.easeOut
            }))
        }, this.setDisabledState = function() {
            s.isSetToDisabledState_bl || (s.isSetToDisabledState_bl = !0, s.d_sdo && s.d_sdo.setX(0))
        }, this.setEnabledState = function() {
            s.isSetToDisabledState_bl && (s.isSetToDisabledState_bl = !1, s.d_sdo && s.d_sdo.setX(-100))
        }, this.disable = function(e) {
            s.isDisabledForGood_bl || s.isDisabled_bl || (s.isDisabled_bl = !0, s.setButtonMode(!1), FWDRLTweenMax.to(s, .6, {
                alpha: .4
            }), e || s.setNormalState())
        }, this.enable = function() {
            !s.isDisabledForGood_bl && s.isDisabled_bl && (s.isDisabled_bl = !1, s.setButtonMode(!0), FWDRLTweenMax.to(s, .6, {
                alpha: 1
            }))
        }, this.disableForGood = function() {
            s.isDisabledForGood_bl = !0, s.setButtonMode(!1)
        }, this.showDisabledState = function() {
            0 != s.d_sdo.x && s.d_sdo.setX(0)
        }, this.hideDisabledState = function() {
            -100 != s.d_sdo.x && s.d_sdo.setX(-100)
        }, this.show = function() {
            s.isShowed_bl || (s.isShowed_bl = !0, FWDRLTweenMax.killTweensOf(s), FWDRLUtils.isIEAndLessThen9 ? FWDRLUtils.isIEAndLessThen9 ? s.setVisible(!0) : (s.setAlpha(0), FWDRLTweenMax.to(s, .4, {
                alpha: 1,
                delay: .4
            }), s.setVisible(!0)) : FWDRLUtils.isIEWebKit ? (FWDRLTweenMax.killTweensOf(s.n_sdo), s.n_sdo.setScale2(0), FWDRLTweenMax.to(s.n_sdo, .8, {
                scale: 1,
                delay: .4,
                onStart: function() {
                    s.setVisible(!0)
                },
                ease: Elastic.easeOut
            })) : (s.setScale2(0), FWDRLTweenMax.to(s, .8, {
                scale: 1,
                delay: .4,
                onStart: function() {
                    s.setVisible(!0)
                },
                ease: Elastic.easeOut
            })))
        }, this.hide = function() {
            s.isShowed_bl && (s.isShowed_bl = !1, FWDRLTweenMax.killTweensOf(s), FWDRLTweenMax.killTweensOf(s.n_sdo), s.setVisible(!1))
        }, s.init()
    };
    t.setPrototype = function(e) {
        t.prototype = null, t.prototype = e ? new FWDRLTransformDisplayObject("div") : new FWDRLDisplayObject("div")
    }, t.CLICK = "onClick", t.MOUSE_OVER = "onMouseOver", t.SHOW_TOOLTIP = "showTooltip", t.MOUSE_OUT = "onMouseOut", t.MOUSE_UP = "onMouseDown", t.prototype = null, e.FWDRLSimpleButton = t
}(window),
function(e) {
    var t = function(e, i, o, n, s) {
        {
            var r = this;
            t.prototype
        }
        this.imageSource_img = e, this.image_do = null, this.tweenObj = {
            currentPos: 0
        }, this.segmentWidth = i, this.segmentHeight = o, this.totalSegments = n, this.duration = s / 1e3, this.delayTimerId_int, r.init = function() {
            r.setWidth(r.segmentWidth), r.setHeight(r.segmentHeight), r.image_do = new FWDRLDisplayObject("img"), r.image_do.setScreen(r.imageSource_img), r.addChild(r.image_do), r.onUpdateHandler()
        }, r.animShow = function() {
            FWDRLTweenMax.killTweensOf(r.tweenObj), r.currentPos = 0, FWDRLTweenMax.to(r.tweenObj, r.duration, {
                currentPos: 1,
                ease: Linear.easeNone,
                onUpdate: r.onUpdateHandler
            })
        }, r.animHide = function() {
            FWDRLTweenMax.killTweensOf(r.tweenObj), FWDRLTweenMax.to(r.tweenObj, .8, {
                currentPos: 0,
                onUpdate: r.onUpdateHandler
            })
        }, r.animReset = function() {
            FWDRLTweenMax.killTweensOf(r.tweenObj), r.tweenObj.currentPos = 0, r.onUpdateHandler()
        }, r.onUpdateHandler = function() {
            var e = Math.round(r.tweenObj.currentPos / 1 * (r.totalSegments - 1)) * r.segmentWidth;
            r.image_do.setX(-e)
        }, r.show = function() {
            r.setVisible(!0), "opacity" == r.opacityType ? (FWDRLTweenMax.killTweensOf(r.image_do), FWDRLTweenMax.to(r.image_do, 1, {
                alpha: 1
            })) : r.setWidth(r.segmentWidth)
        }, r.hide = function(e) {
            e ? "opacity" == r.opacityType ? (FWDRLTweenMax.killTweensOf(r.image_do), FWDRLTweenMax.to(r.image_do, 1, {
                alpha: 0,
                onComplete: hideCompleteHandler
            })) : r.setWidth(0) : (r.setVisible(!1), "opacity" == r.opacityType ? (FWDRLTweenMax.killTweensOf(r.image_do), r.image_do.setAlpha(0)) : r.setWidth(0))
        }, r.hideCompleteHandler = function() {
            r.setVisible(!1)
        }, r.init()
    };
    t.setPrototype = function() {
        t.prototype = new FWDRLDisplayObject("div")
    }, t.prototype = null, e.FWDRLSlideShowPreloader = t
}(window),
function(e) {
    var t = function(i, o, n, s, r, a, l, d, u, h, c, _, b, m) {
        var p = this,
            f = t.prototype;
        this.background_do = null, this.image_do = null, this.overlay_do = null, this.icon_do = null, this.iconImg_img = null, this.borderNormalColor_str = d || data.thumbnailBorderNormalColor_str, this.borderSelectedColor_str = u || data.thumbnailBorderSelectedColor_str, this.thumbnailsOverlayColor_str = h, this.iconPath_str = _, this.thumbnailsHoverEffect_str = c, this.id = o, this.borderSize = r, this.borderRadius = a, this.thumbnailH = n, this.thumbnailsOffsetBottom = s, this.overlayOpacity = l, this.isSelected_bl = !0, this.isDisabled_bl = !1, this.hasPointerEvent_bl = FWDRLUtils.hasPointerEvent, this.isMobile_bl = FWDRLUtils.isMobile, this.showOverlay_bl = b, this.isMobile_bl && (this.showOverlay_bl = !1), this.showIcon_bl = m, this.isMobile_bl && (this.showIcon_bl = !1), p.init = function() {
            p.setButtonMode(!0), p.setupScreen()
        }, p.setupScreen = function() {
            p.background_do = new FWDRLDisplayObject("div"), p.borderRadius && (p.getStyle().borderRadius = p.borderRadius + "px"), p.setNormalState(!1), 0 != p.borderRadius && (p.background_do.getStyle().borderRadius = p.borderRadius + "px"), p.addChild(p.background_do)
        }, p.setImage = function(e) {
            p.image_do = new FWDRLDisplayObject("img"), p.image_do.setScreen(e);
            var t = e.width,
                o = e.height,
                n = p.thumbnailH - 2 * p.borderSize,
                s = n / o,
                r = parseInt(n + 2 * p.borderSize),
                a = parseInt(t * s + 2 * p.borderSize);
            p.background_do && (p.background_do.setWidth(a), p.background_do.setHeight(r)), p.image_do.setX(p.borderSize), p.image_do.setY(p.borderSize), p.image_do.setWidth(parseInt(a - 2 * p.borderSize)), p.image_do.setHeight(n), p.setWidth(a), p.setHeight(r), p.isMobile_bl ? (p.hasPointerEvent_bl && p.screen.addEventListener("pointerup", p.onMouseClickHandler), p.screen.addEventListener("click", p.onMouseClickHandler)) : p.screen.addEventListener ? (p.screen.addEventListener("mouseover", p.onMouseOverHandler), p.screen.addEventListener("click", p.onMouseClickHandler)) : p.screen.attachEvent && (p.screen.attachEvent("onmouseover", p.onMouseOverHandler), p.screen.attachEvent("onclick", p.onMouseClickHandler)), p.addChild(p.image_do), p.isMobile_bl || (p.showOverlay_bl && (p.overlay_do = new FWDRLDisplayObject("div"), p.overlay_do.setX(p.borderSize), p.overlay_do.setY(p.borderSize), p.overlay_do.setWidth(a - 2 * p.borderSize), p.overlay_do.setHeight(r - 2 * p.borderSize), p.overlay_do.setBkColor(this.thumbnailsOverlayColor_str), p.addChild(p.overlay_do), setTimeout(function() {
                p && p.overlay_do.setAlpha(0)
            }, 50)), p.showIcon_bl && (p.icon_do = new FWDRLTransformDisplayObject("img"), p.iconImg_img = new Image, p.iconImg_img.onload = function() {
                p.icon_do.setScreen(p.iconImg_img), p.icon_do.setX(parseInt((a - p.icon_do.w) / 2)), p.icon_do.setY(parseInt((r - p.icon_do.h) / 2)), p.addChild(p.icon_do), setTimeout(function() {
                    p && p.icon_do.setAlpha(0)
                }, 50)
            }, p.iconImg_img.src = p.iconPath_str)), p.hide(!1), p.show(!0), i.id == p.id && p.disable()
        }, p.onMouseOverHandler = function(e) {
            p.dispatchEvent(t.HOVER), p.isDisabled_bl || (e.pointerType && e.pointerType != e.MSPOINTER_TYPE_MOUSE || p.setSelectedState(!0), p.startToCheckTest())
        }, p.startToCheckTest = function() {
            e.addEventListener ? e.addEventListener("mousemove", p.checkHitTest) : document.attachEvent && (document.detachEvent("onmousemove", p.checkHitTest), document.attachEvent("onmousemove", p.checkHitTest))
        }, p.stopToCheckTest = function() {
            e.removeEventListener ? e.removeEventListener("mousemove", p.checkHitTest) : document.detachEvent && document.detachEvent("onmousemove", p.checkHitTest)
        }, p.checkHitTest = function(e) {
            var t = FWDRLUtils.getViewportMouseCoordinates(e);
            FWDRLUtils.hitTest(p.screen, t.screenX, t.screenY) || (p.onMouseOutHandler(e), p.stopToCheckTest())
        }, p.onMouseOutHandler = function(e) {
            p.isDisabled_bl || e.pointerType && e.pointerType != e.MSPOINTER_TYPE_MOUSE || p.setNormalState(!0)
        }, p.onMouseClickHandler = function() {
            p.isDisabled_bl || p.dispatchEvent(t.CLICK, {
                id: p.id
            })
        }, p.setNormalState = function(e) {
            p.isSelected_bl && (p.isSelected_bl = !1, FWDRLTweenMax.killTweensOf(p.background_do.screen), p.overlay_do && p.showOverlay_bl && FWDRLTweenMax.to(p.overlay_do, .8, {
                alpha: 0,
                ease: Expo.easeOut
            }), p.icon_do && p.showIcon_bl && (FWDRLTweenMax.killTweensOf(p.icon_do), p.icon_do.hasTransform2d_bl && "scale" == p.thumbnailsHoverEffect_str ? FWDRLTweenMax.to(p.icon_do, .5, {
                scale: 1,
                alpha: 0,
                ease: Expo.easeOut
            }) : FWDRLTweenMax.to(p.icon_do, .8, {
                alpha: 0,
                ease: Expo.easeOut
            })), e ? 0 != p.borderSize && FWDRLTweenMax.to(p.background_do.screen, .8, {
                css: {
                    backgroundColor: p.borderNormalColor_str
                },
                ease: Expo.easeOut
            }) : 0 != p.borderSize && (p.background_do.getStyle().backgroundColor = p.borderNormalColor_str))
        }, p.setSelectedState = function(e) {
            p.isSelected_bl || (p.isSelected_bl = !0, p.overlay_do && p.showOverlay_bl && FWDRLTweenMax.to(p.overlay_do, .8, {
                alpha: p.overlayOpacity,
                ease: Expo.easeOut
            }), p.icon_do && p.showIcon_bl && (FWDRLTweenMax.killTweensOf(p.icon_do), p.icon_do.hasTransform2d_bl && "scale" == p.thumbnailsHoverEffect_str ? (p.icon_do.setAlpha(0), p.icon_do.setScale2(3), FWDRLTweenMax.to(p.icon_do, .5, {
                scale: 1,
                alpha: 1,
                ease: Expo.easeInOut
            })) : FWDRLTweenMax.to(p.icon_do, .8, {
                alpha: 1,
                ease: Expo.easeOut
            })), e ? 0 != p.borderSize && FWDRLTweenMax.to(p.background_do.screen, .8, {
                css: {
                    backgroundColor: p.borderSelectedColor_str
                },
                ease: Expo.easeOut
            }) : 0 != p.borderSize && (p.background_do.getStyle().backgroundColor = p.borderSelectedColor_str))
        }, p.show = function(e) {
            FWDRLTweenMax.killTweensOf(p), e ? FWDRLTweenMax.to(p, .8, {
                y: 0,
                ease: Expo.easeInOut
            }) : p.setY(0)
        }, p.hide = function(e) {
            FWDRLTweenMax.killTweensOf(p), e ? FWDRLTweenMax.to(p, .8, {
                y: p.thumbnailsOffsetBottom + p.thumbnailH + 2
            }) : p.setY(p.thumbnailsOffsetBottom + p.thumbnailH + 2)
        }, p.enable = function() {
            p.isDisabled_bl && (p.isDisabled_bl = !1, FWDRLTweenMax.to(p.background_do, .8, {
                alpha: 1,
                ease: Quint.easeOut
            }), p.icon_do && FWDRLTweenMax.to(p.icon_do, .8, {
                alpha: 1,
                ease: Quint.easeOut
            }), p.image_do && FWDRLTweenMax.to(p.image_do, .8, {
                alpha: 1,
                ease: Quint.easeOut
            }), p.overlay_do && FWDRLTweenMax.to(p.overlay_do, .8, {
                alpha: 0,
                ease: Quint.easeOut
            }), p.setNormalState(!0), p.setButtonMode(!0))
        }, p.disable = function() {
            p.isDisabled_bl = !0, FWDRLTweenMax.to(p.background_do, .8, {
                alpha: .4,
                ease: Quint.easeOut
            }), p.setSelectedState(!0), p.icon_do && FWDRLTweenMax.to(p.icon_do, .8, {
                alpha: 0,
                ease: Quint.easeOut
            }), p.image_do && FWDRLTweenMax.to(p.image_do, .8, {
                alpha: .4,
                ease: Quint.easeOut
            }), p.overlay_do && FWDRLTweenMax.to(p.overlay_do, .8, {
                alpha: 0,
                ease: Quint.easeOut
            }), p.stopToCheckTest(), p.setButtonMode(!1)
        }, p.destroy = function() {
            p.iconImg_img && (p.iconImg_img.onload = null, p.iconImg_img.onerror = null), FWDRLTweenMax.killTweensOf(p.background_do), p.background_do.destroy(), p.image_do && (FWDRLTweenMax.killTweensOf(p.image_do), p.image_do.destroy()), p.overlay_do && (FWDRLTweenMax.killTweensOf(p.overlay_do), p.overlay_do.destroy()), p.icon_do && (FWDRLTweenMax.killTweensOf(p.icon_do), p.icon_do.destroy()), p.isMobile_bl ? p.hasPointerEvent_bl ? (p.screen.removeEventListener("pointerover", p.onMouseOverHandler), p.screen.removeEventListener("pointerup", p.onMouseClickHandler)) : p.screen.removeEventListener("touchend", p.onMouseClickHandler) : p.screen.removeEventListener ? (p.screen.removeEventListener("mouseover", p.onMouseOverHandler), p.screen.removeEventListener("click", p.onMouseClickHandler), e.removeEventListener("mousemove", p.checkHitTest)) : p.screen.detachEvent && (p.screen.detachEvent("onmouseover", p.onMouseOverHandler), p.screen.detachEvent("onclick", p.onMouseClickHandler), document.detachEvent("onmousemove", p.checkHitTest)), p.iconImg_img = null, p.background_do = null, p.image_do = null, p.overlay_do = null, p.icon_do = null, p.setInnerHTML(""), f.destroy(), f = null, p = null, t.prototype = null
        }, p.init()
    };
    t.setPrototype = function() {
        t.prototype = new FWDRLDisplayObject("div")
    }, t.HOVER = "onHover", t.CLICK = "onClick", t.IFRAME = "iframe", t.IMAGE = "image", t.FLASH = "flash", t.AUDIO = "audio", t.VIDEO = "video", t.VIMEO = "vimeo", t.YOUTUBE = "youtube", t.MAPS = "maps", t.AJAX = "ajax", t.HTML = "html", t.prototype = null, e.FWDRLThumb = t
}(window),
function(e) {
    var t = function(i) {
        {
            var o = this;
            t.prototype
        }
        this.playlist_ar = null, this.thumbs_ar = null, this.mainHolder_do = null, this.thumbnailsHolder_do = null, this.thumbnailsBorderNormalColor_str = i.thumbnailsBorderNormalColor_str, this.thumbnailsBorderSelectedColor_str = i.thumbnailsBorderSelectedColor_str, this.thumbnailsOverlayColor_str = i.thumbnailsOverlayColor_str, this.thumbnailsHoverEffect_str = i.thumbnailsHoverEffect_str, this.stageWidth = 0, this.stageHeight = i.thumbnailH, this.thumbnailsBorderSize = i.thumbnailsBorderSize, this.thumbnailsBorderRadius = i.thumbnailsBorderRadius, this.thumbnailsOffsetBottom = i.thumbnailsOffsetBottom, this.thumbnailH = i.thumbnailH - this.thumbnailsOffsetBottom, this.spaceBetweenThumbnails = i.spaceBetweenThumbnails, this.totalW = 0, this.spaceBetweenThumbnails = i.spaceBetweenThumbnails, this.thumbnailsOverlayOpacity = i.thumbnailsOverlayOpacity, this.vx = 0, this.vx2 = 0, this.friction = .9, this.lastPresedX = 0, this.totalThumbnails = 0, this.countLoadedThumbs = 0, this.id = 0, this.loadWithDelayId_to, this.disableOnMoveId_to, this.updateMobileScrollBarId_int, this.showThumbnailsOverlay_bl = i.showThumbnailsOverlay_bl, this.showThumbnailsSmallIcon_bl = i.showThumbnailsSmallIcon_bl, this.areThumbnailTouched_bl = !1, this.isScrolling_bl = !1, this.isShowed_bl = !1, this.areButtonsPositioned_bl = !1, this.areThumbnailsCreated_bl = !1, this.hasSupportForDesktopScroll_bl = !1, this.isMobile_bl = FWDRLUtils.isMobile, this.hasPointerEvent_bl = FWDRLUtils.hasPointerEvent, o.init = function() {
            o.setOverflow("visible"), o.mainHolder_do = new FWDRLDisplayObject("div"), o.mainHolder_do.setOverflow("visible"), o.thumbnailsHolder_do = new FWDRLDisplayObject("div"), o.thumbnailsHolder_do.setOverflow("visible"), o.mainHolder_do.addChild(o.thumbnailsHolder_do), o.addChild(o.mainHolder_do)
        }, o.positionAndResize = function() {
            o.areButtonsPositioned_bl = !1, o.stageWidth = i.stageWidth, o.setY(i.stageHeight), o.mainHolder_do.setWidth(o.stageWidth), o.mainHolder_do.setHeight(o.stageHeight), o.areThumbnailsCreated_bl && o.positionThumbnails(!1)
        }, o.setupThumbnails = function() {
            o.areThumbnailsCreated_bl = !0, o.areButtonsPositioned_bl = !1, o.thumbs_ar = [], o.playlist_ar = i.playlist_ar, o.totalThumbnails = o.playlist_ar.length, o.countLoadedThumbs = 0, o.loadThumbnails(), o.isMobile_bl && o.addMobileScrollSupport()
        }, o.loadThumbnails = function() {
            o.countLoadedThumbs > o.totalThumbnails - 1 || (o.image_img = new Image, o.image_img.onload = o.onThumbnailLoadComplete, o.image_img.src = o.playlist_ar[o.countLoadedThumbs].thumbnailPath_str)
        }, o.onThumbnailLoadComplete = function() {
            var e, t = i.playlist_ar[o.countLoadedThumbs].iconType_str;
            t == FWDRLThumb.IMAGE ? e = i.data.imageIconPath_str : t == FWDRLThumb.FLASH ? e = i.data.flashIconPath_str : t == FWDRLThumb.AUDIO ? e = i.data.audioIconPath_str : t == FWDRLThumb.VIDEO ? e = i.data.videoIconPath_str : t == FWDRLThumb.VIMEO ? e = i.data.vimeoIconPath_str : t == FWDRLThumb.YOUTUBE ? e = i.data.youtubeIconPath_str : t == FWDRLThumb.MAPS ? e = i.data.mapsIconPath_str : t == FWDRLThumb.AJAX ? e = i.data.ajaxIconPath_str : t == FWDRLThumb.HTML ? e = i.data.htmlIconPath_str : t == FWDRLThumb.IFRAME && (e = i.data.iframeIconPath_str), FWDRLThumb.setPrototype();
            var n = new FWDRLThumb(o, o.countLoadedThumbs, o.thumbnailH, o.thumbnailsOffsetBottom, o.thumbnailsBorderSize, o.thumbnailsBorderRadius, o.thumbnailsOverlayOpacity, o.thumbnailsBorderNormalColor_str, o.thumbnailsBorderSelectedColor_str, o.thumbnailsOverlayColor_str, o.thumbnailsHoverEffect_str, e, o.showThumbnailsOverlay_bl, o.showThumbnailsSmallIcon_bl);
            o.thumbs_ar[o.countLoadedThumbs] = n, n.addListener(FWDRLThumb.HOVER, o.thumbHoverHandler), n.addListener(FWDRLThumb.CLICK, o.thumbClickHandler), n.setImage(o.image_img), o.totalW += n.w + o.spaceBetweenThumbnails, o.countLoadedThumbs == o.totalThumbnails - 1 && (o.totalW -= o.spaceBetweenThumbnails), 0 != o.countLoadedThumbs && n.setX(o.thumbs_ar[o.countLoadedThumbs - 1].x + o.thumbs_ar[o.countLoadedThumbs - 1].w + o.spaceBetweenThumbnails), 0 == o.countLoadedThumbs && o.thumbnailsHolder_do.setX(parseInt(o.stageWidth - n.w) / 2), o.thumbnailsHolder_do.addChild(n), o.isScrolling_bl || o.areThumbnailTouched_bl || o.positionThumbnails(!0), o.totalW > i.stageWidth && !o.areButtonsPositioned_bl && i.buttonsAlignment_str != FWDRL.BUTTONS_IN && (i.positionButtons(!0), o.areButtonsPositioned_bl = !0), o.countLoadedThumbs++, o.loadWithDelayId_to = setTimeout(o.loadThumbnails, 100)
        }, o.stopToLoadThumbanils = function() {
            o.image_img && (o.image_img.onload = null, o.image_img.onerror = null, o.image_img.src = "", o.image_img = null), clearTimeout(o.loadWithDelayId_to)
        }, o.thumbClickHandler = function(e) {
            i.isShowed_bl && o.dispatchEvent(FWDRLThumb.CLICK, {
                id: e.id
            })
        }, o.thumbHoverHandler = function() {
            i.isShowed_bl && o.addDesktopScrollSupport()
        }, o.positionThumbnails = function(e) {
            if (!(!o.areThumbnailsCreated_bl && i.showThumbnails_bl || o.isScrolling_bl)) {
                o.finalX;
                var t = o.thumbs_ar[o.id],
                    n = o.thumbs_ar[o.thumbs_ar.length - 1];
                o.totalW <= o.stageWidth ? o.finalX = parseInt((o.stageWidth - o.totalW) / 2) : (o.finalX = parseInt(t ? -t.x + (o.stageWidth - t.w) / 2 : -n.x + (o.stageWidth - n.w) / 2), o.finalX > 0 ? o.finalX = 0 : o.finalX < o.stageWidth - o.totalW && (o.finalX = o.stageWidth - o.totalW)), FWDRLTweenMax.killTweensOf(o.thumbnailsHolder_do), e ? FWDRLTweenMax.to(o.thumbnailsHolder_do, .7, {
                    x: o.finalX,
                    ease: Expo.easeOut
                }) : o.thumbnailsHolder_do.setX(o.finalX)
            }
        }, o.addMobileScrollSupport = function() {
            o.hasPointerEvent_bl ? o.mainHolder_do.screen.addEventListener("pointerdown", o.scrollBarTouchStartHandler) : o.mainHolder_do.screen.addEventListener("touchstart", o.scrollBarTouchStartHandler), o.mainHolder_do.screen.addEventListener("mousedown", o.scrollBarTouchStartHandler), o.updateMobileScrollBarId_int = setInterval(o.updateMobileScrollBar, 16)
        }, o.removeMobileScrollSupport = function() {
            o.hasPointerEvent_bl ? (o.mainHolder_do.screen.removeEventListener("pointerdown", o.scrollBarTouchStartHandler), e.removeEventListener("pointerup", o.scrollBarTouchEndHandler), e.removeEventListener("pointermove", o.scrollBarTouchMoveHandler)) : (o.mainHolder_do.screen.removeEventListener("touchstart", o.scrollBarTouchStartHandler), e.removeEventListener("touchend", o.scrollBarTouchEndHandler), e.removeEventListener("touchmove", o.scrollBarTouchMoveHandler)), clearInterval(o.updateMobileScrollBarId_int), clearInterval(o.updateMoveMobileScrollbarId_int)
        }, o.scrollBarTouchStartHandler = function(t) {
            if (!(o.stageWidth > o.totalW)) {
                var i = FWDRLUtils.getViewportMouseCoordinates(t);
                o.areThumbnailTouched_bl = !0, FWDRLTweenMax.killTweensOf(o.thumbnailsHolder_do), o.isScrolling_bl = !0, o.finalX = o.thumbnailsHolder_do.x, o.lastPresedX = i.screenX, o.hasPointerEvent_bl ? (e.addEventListener("pointerup", o.scrollBarTouchEndHandler), e.addEventListener("pointermove", o.scrollBarTouchMoveHandler)) : (e.addEventListener("touchend", o.scrollBarTouchEndHandler), e.addEventListener("touchmove", o.scrollBarTouchMoveHandler)), clearInterval(o.updateMoveMobileScrollbarId_int), o.updateMoveMobileScrollbarId_int = setInterval(o.updateMoveMobileScrollbar, 16)
            }
        }, o.scrollBarTouchMoveHandler = function(e) {
            if (e.preventDefault && e.preventDefault(), !(o.stageWidth > o.totalW)) {
                var t = FWDRLUtils.getViewportMouseCoordinates(e),
                    n = t.screenX - o.lastPresedX;
                o.finalX += n, o.finalX = Math.round(o.finalX), o.lastPresedX = t.screenX, o.vx = 2 * n, i.showDisable()
            }
        }, o.scrollBarTouchEndHandler = function() {
            o.isScrolling_bl = !1, i.hider.globalY < i.stageHeight - o.stageHeight && (o.areThumbnailTouched_bl = !1), clearInterval(o.updateMoveMobileScrollbarId_int), clearTimeout(o.disableOnMoveId_to), o.disableOnMoveId_to = setTimeout(function() {
                i.hideDisable()
            }, 100), o.hasPointerEvent_bl ? (e.removeEventListener("pointerup", o.scrollBarTouchEndHandler), e.removeEventListener("pointermove", o.scrollBarTouchMoveHandler)) : (e.removeEventListener("touchend", o.scrollBarTouchEndHandler), e.removeEventListener("touchmove", o.scrollBarTouchMoveHandler))
        }, o.updateMoveMobileScrollbar = function() {
            o.thumbnailsHolder_do.setX(o.finalX)
        }, o.updateMobileScrollBar = function() {
            o.stageWidth > o.totalW || o.finalX == o.prevX || o.isScrolling_bl || (o.vx *= o.friction, o.finalX += o.vx, o.finalX > 0 ? (o.vx2 = .3 * (0 - o.finalX), o.vx *= o.friction, o.finalX += o.vx2) : o.finalX < o.stageWidth - o.totalW && (o.vx2 = .3 * (o.stageWidth - o.totalW - o.finalX), o.vx *= o.friction, o.finalX += o.vx2), o.finalX = Math.round(o.finalX), o.prevX = o.thumbnailsHolder_do.x, FWDRLTweenMax.killTweensOf(o.thumbnailsHolder_do), FWDRLTweenMax.to(o.thumbnailsHolder_do, .3, {
                x: o.finalX,
                ease: Expo.easeOut
            }))
        }, o.addDesktopScrollSupport = function() {
            o.hasSupportForDesktopScroll_bl || o.totalW < o.stageWidth || (o.hasSupportForDesktopScroll_bl = !0, o.isScrolling_bl = !0, e.addEventListener ? e.addEventListener("mousemove", o.checkHitTest) : document.attachEvent && (document.detachEvent("onmousemove", o.checkHitTest), document.attachEvent("onmousemove", o.checkHitTest)))
        }, o.removeDesktopScrollSupport = function() {
            o.hasSupportForDesktopScroll_bl && (o.hasSupportForDesktopScroll_bl = !1, e.removeEventListener ? e.removeEventListener("mousemove", o.checkHitTest) : document.detachEvent && document.detachEvent("onmousemove", o.checkHitTest))
        }, o.checkHitTest = function(e) {
            FWDRLUtils.getViewportMouseCoordinates(e);
            o.scrollOnDesktop(), i.hider.globalY < i.stageHeight - o.stageHeight && (o.isScrolling_bl = !1, o.removeDesktopScrollSupport(), o.positionThumbnails(!0))
        }, o.scrollOnDesktop = function() {
            var e = (i.hider.globalX - 100) / (o.stageWidth - 200);
            0 > e ? e = 0 : e > 1 && (e = 1), o.finalX = parseInt((o.stageWidth - o.totalW) * e), FWDRLTweenMax.killTweensOf(o.thumbnailsHolder_do), FWDRLTweenMax.to(o.thumbnailsHolder_do, .4, {
                x: o.finalX,
                ease: Expo.easeOut
            })
        }, o.disableOrEnableThumbnails = function() {
            if (o.id = i.id, o.thumbs_ar) {
                for (var e, t = o.thumbs_ar.length, n = 0; t > n; n++) e = o.thumbs_ar[n], n == i.id ? e.disable() : e.enable();
                o.positionThumbnails(!0)
            }
        }, o.destoryThumbnails = function() {
            if (o.areThumbnailsCreated_bl || o.thumbs_ar) {
                o.areThumbnailsCreated_bl = !1, o.areThumbnailTouched_bl = !1;
                for (var e, t = o.thumbs_ar.length, i = 0; t > i; i++) e = o.thumbs_ar[i], FWDRLTweenMax.killTweensOf(e), o.thumbnailsHolder_do.removeChild(e), e.destroy();
                o.thumbs_ar = null, o.totalW = 0, o.stopToLoadThumbanils(), o.removeDesktopScrollSupport(), o.isMobile_bl && o.removeMobileScrollSupport()
            }
        }, o.show = function(e) {
            o.isShowed_bl = !0, FWDRLTweenMax.killTweensOf(o.mainHolder_do), e ? FWDRLTweenMax.to(o.mainHolder_do, .8, {
                y: -o.stageHeight,
                ease: Expo.easeInOut
            }) : o.mainHolder_do.setY(-o.stageHeight)
        }, o.hide = function(e) {
            o.isShowed_bl = !1, FWDRLTweenMax.killTweensOf(o.mainHolder_do), e ? FWDRLTweenMax.to(o.mainHolder_do, .8, {
                y: 0,
                ease: Expo.easeInOut
            }) : o.mainHolder_do.setY(0)
        }, o.hideForGood = function() {
            o.mainHolder_do.setY(-5e3)
        }, o.init()
    };
    t.setPrototype = function() {
        t.prototype = new FWDRLDisplayObject("div", "relative")
    }, t.prototype = null, e.FWDRLThumbnailsManager = t
}(window),
function(e) {
    var t = function(e) {
        {
            var i = this;
            t.prototype
        }
        this.timeOutId, this.delay = e, this.isStopped_bl = !0, i.stop = function() {
            i.isStopped_bl || (i.pause(), i.isStopped_bl = !0, i.dispatchEvent(t.STOP))
        }, i.start = function() {
            i.isStopped_bl && (i.isStopped_bl = !1, i.timeOutId = setTimeout(i.onTimeHanlder, i.delay), i.dispatchEvent(t.START))
        }, i.pause = function() {
            i.isStopped_bl || (clearTimeout(i.timeOutId), i.dispatchEvent(t.PAUSE))
        }, i.resume = function() {
            i.isStopped_bl || (clearTimeout(i.timeOutId), i.timeOutId = setTimeout(i.onTimeHanlder, i.delay), i.dispatchEvent(t.RESUME))
        }, i.onTimeHanlder = function() {
            i.dispatchEvent(t.TIME)
        }
    };
    t.setProtptype = function() {
        t.prototype = new FWDRLEventDispatcher
    }, t.START = "start", t.STOP = "stop", t.RESUME = "resume", t.PAUSE = "pause", t.TIME = "time", t.prototype = null, e.FWDRLTimerManager = t
}(window),
function(e) {
    var t = function(e, t, i, o) {
        this.listeners = {
            events_ar: []
        };
        var n = this;
        if ("div" != e && "img" != e && "canvas" != e) throw Error("Type is not valid! " + e);
        this.type = e, this.children_ar = [], this.style, this.screen, this.numChildren, this.transform, this.position = t || "absolute", this.overflow = i || "hidden", this.display = o || "block", this.visible = !0, this.buttonMode, this.x = 0, this.y = 0, this.scale = 1, this.rotation = 0, this.w = 0, this.h = 0, this.rect, this.alpha = 1, this.innerHTML = "", this.opacityType = "", this.isHtml5_bl = !1, this.hasTransform2d_bl = FWDRLUtils.hasTransform2d, this.init = function() {
            this.setScreen()
        }, this.getTransform = function() {
            for (var e, t = ["transform", "msTransform", "WebkitTransform", "MozTransform", "OTransform"]; e = t.shift();)
                if ("undefined" != typeof this.screen.style[e]) return e;
            return !1
        }, this.getOpacityType = function() {
            var e;
            return e = "undefined" != typeof this.screen.style.opacity ? "opacity" : "filter"
        }, this.setScreen = function(e) {
            "img" == this.type && e ? (this.screen = e, this.setMainProperties()) : (this.screen = document.createElement(this.type), this.setMainProperties())
        }, this.setMainProperties = function() {
            this.transform = this.getTransform(), this.setPosition(this.position), this.setOverflow(this.overflow), this.opacityType = this.getOpacityType(), "opacity" == this.opacityType && (this.isHtml5_bl = !0), "filter" == n.opacityType && (n.screen.style.filter = "inherit"), this.screen.style.left = "0px", this.screen.style.top = "0px", this.screen.style.margin = "0px", this.screen.style.padding = "0px", this.screen.style.maxWidth = "none", this.screen.style.maxHeight = "none", this.screen.style.border = "none", this.screen.style.lineHeight = "1", this.screen.style.backgroundColor = "transparent", this.screen.style.backfaceVisibility = "hidden", this.screen.style.webkitBackfaceVisibility = "hidden", this.screen.style.MozBackfaceVisibility = "hidden", this.screen.style.MozImageRendering = "optimizeSpeed", this.screen.style.WebkitImageRendering = "optimizeSpeed", n.screen.style.transition = "none", n.screen.style.webkitTransition = "none", n.screen.style.MozTransition = "none", n.screen.style.OTransition = "none", "img" == e && (this.setWidth(this.screen.width), this.setHeight(this.screen.height), this.screen.onmousedown = function() {
                return !1
            })
        }, n.setBackfaceVisibility = function() {
            n.screen.style.backfaceVisibility = "visible", n.screen.style.webkitBackfaceVisibility = "visible", n.screen.style.MozBackfaceVisibility = "visible"
        }, n.removeBackfaceVisibility = function() {
            n.screen.style.backfaceVisibility = "hidden", n.screen.style.webkitBackfaceVisibility = "hidden", n.screen.style.MozBackfaceVisibility = "hidden"
        }, this.setSelectable = function(e) {
            if (!e) {
                try {
                    this.screen.style.userSelect = "none"
                } catch (t) {}
                try {
                    this.screen.style.MozUserSelect = "none"
                } catch (t) {}
                try {
                    this.screen.style.webkitUserSelect = "none"
                } catch (t) {}
                try {
                    this.screen.style.khtmlUserSelect = "none"
                } catch (t) {}
                try {
                    this.screen.style.oUserSelect = "none"
                } catch (t) {}
                try {
                    this.screen.style.msUserSelect = "none"
                } catch (t) {}
                try {
                    this.screen.msUserSelect = "none"
                } catch (t) {}
                this.screen.ondragstart = function() {
                    return !1
                }, this.screen.onselectstart = function() {
                    return !1
                }, this.screen.style.webkitTouchCallout = "none"
            }
        }, this.getScreen = function() {
            return n.screen
        }, this.setVisible = function(e) {
            this.visible = e, this.screen.style.visibility = 1 == this.visible ? "visible" : "hidden"
        }, this.getVisible = function() {
            return this.visible
        }, this.setResizableSizeAfterParent = function() {
            this.screen.style.width = "100%", this.screen.style.height = "100%"
        }, this.getStyle = function() {
            return this.screen.style
        }, this.setOverflow = function(e) {
            n.overflow = e, n.screen.style.overflow = n.overflow
        }, this.setPosition = function(e) {
            n.position = e, n.screen.style.position = n.position
        }, this.setDisplay = function(e) {
            this.display = e, this.screen.style.display = this.display
        }, this.setButtonMode = function(e) {
            this.buttonMode = e, this.screen.style.cursor = 1 == this.buttonMode ? "pointer" : "default"
        }, this.setBkColor = function(e) {
            n.screen.style.backgroundColor = e
        }, this.setInnerHTML = function(e) {
            n.innerHTML = e, n.screen.innerHTML = n.innerHTML
        }, this.getInnerHTML = function() {
            return n.innerHTML
        }, this.getRect = function() {
            return n.screen.getBoundingClientRect()
        }, this.setAlpha = function(e) {
            n.alpha = e, "opacity" == n.opacityType ? n.screen.style.opacity = n.alpha : "filter" == n.opacityType && (n.screen.style.filter = "alpha(opacity=" + 100 * n.alpha + ")", n.screen.style.filter = "progid:DXImageTransform.Microsoft.Alpha(Opacity=" + Math.round(100 * n.alpha) + ")")
        }, this.getAlpha = function() {
            return n.alpha
        }, this.getRect = function() {
            return this.screen.getBoundingClientRect()
        }, this.getGlobalX = function() {
            return this.getRect().left
        }, this.getGlobalY = function() {
            return this.getRect().top
        }, this.setX = function(e) {
            n.x = e, n.hasTransform2d_bl ? n.screen.style[n.transform] = "translate(" + n.x + "px," + n.y + "px) scale(" + n.scale + " , " + n.scale + ") rotate(" + n.rotation + "deg)" : n.screen.style.left = n.x + "px"
        }, this.getX = function() {
            return n.x
        }, this.setY = function(e) {
            n.y = e, n.hasTransform2d_bl ? n.screen.style[n.transform] = "translate(" + n.x + "px," + n.y + "px) scale(" + n.scale + " , " + n.scale + ") rotate(" + n.rotation + "deg)" : n.screen.style.top = n.y + "px"
        }, this.getY = function() {
            return n.y
        }, this.setScale2 = function(e) {
            n.scale = e, n.hasTransform2d_bl && (n.screen.style[n.transform] = "translate(" + n.x + "px," + n.y + "px) scale(" + n.scale + " , " + n.scale + ") rotate(" + n.rotation + "deg)")
        }, this.getScale = function() {
            return n.scale
        }, this.setRotation = function(e) {
            n.rotation = e, n.hasTransform2d_bl && (n.screen.style[n.transform] = "translate(" + n.x + "px," + n.y + "px) scale(" + n.scale + " , " + n.scale + ") rotate(" + n.rotation + "deg)")
        }, this.setWidth = function(e) {
            n.w = e, "img" == n.type ? n.screen.width = n.w : n.screen.style.width = n.w + "px"
        }, this.getWidth = function() {
            return "div" == n.type ? 0 != n.screen.offsetWidth ? n.screen.offsetWidth : n.w : "img" == n.type ? 0 != n.screen.offsetWidth ? n.screen.offsetWidth : 0 != n.screen.width ? n.screen.width : n._w : "canvas" == n.type ? 0 != n.screen.offsetWidth ? n.screen.offsetWidth : n.w : void 0
        }, this.setHeight = function(e) {
            n.h = e, "img" == n.type ? n.screen.height = n.h : n.screen.style.height = n.h + "px"
        }, this.getHeight = function() {
            return "div" == n.type ? 0 != n.screen.offsetHeight ? n.screen.offsetHeight : n.h : "img" == n.type ? 0 != n.screen.offsetHeight ? n.screen.offsetHeight : 0 != n.screen.height ? n.screen.height : n.h : "canvas" == n.type ? 0 != n.screen.offsetHeight ? n.screen.offsetHeight : n.h : void 0
        }, this.getNumChildren = function() {
            return n.children_ar.length
        }, this.addChild = function(e) {
            this.contains(e) ? (this.children_ar.splice(FWDRLUtils.indexOfArray(this.children_ar, e), 1), this.children_ar.push(e), this.screen.appendChild(e.screen)) : (this.children_ar.push(e), this.screen.appendChild(e.screen))
        }, this.removeChild = function(e) {
            if (!this.contains(e)) throw Error("##removeChild()## Child doesn't exist, it can't be removed!");
            this.children_ar.splice(FWDRLUtils.indexOfArray(this.children_ar, e), 1), this.screen.removeChild(e.screen)
        }, this.contains = function(e) {
            return -1 == FWDRLUtils.indexOfArray(this.children_ar, e) ? !1 : !0
        }, this.addChildAtZero = function(e) {
            0 == this.numChildren ? (this.children_ar.push(e), this.screen.appendChild(e.screen)) : (this.screen.insertBefore(e.screen, this.children_ar[0].screen), this.contains(e) && this.children_ar.splice(FWDRLUtils.indexOfArray(this.children_ar, e), 1), this.children_ar.unshift(e))
        }, this.getChildAt = function(e) {
            if (0 > e || e > this.numChildren - 1) throw Error("##getChildAt()## Index out of bounds!");
            if (0 == this.numChildren) throw Errror("##getChildAt## Child dose not exist!");
            return this.children_ar[e]
        }, this.removeChildAtZero = function() {
            this.screen.removeChild(this.children_ar[0].screen), this.children_ar.shift()
        }, this.addListener = function(e, t) {
            if (void 0 == e) throw Error("type is required.");
            if ("object" == typeof e) throw Error("type must be of type String.");
            if ("function" != typeof t) throw Error("listener must be of type Function.");
            var i = {};
            i.type = e, i.listener = t, i.target = this, this.listeners.events_ar.push(i)
        }, this.dispatchEvent = function(e, t) {
            if (void 0 == e) throw Error("type is required.");
            if ("object" == typeof e) throw Error("type must be of type String.");
            for (var i = 0, o = this.listeners.events_ar.length; o > i; i++)
                if (this.listeners.events_ar[i].target === this && this.listeners.events_ar[i].type === e) {
                    if (t)
                        for (var n in t) this.listeners.events_ar[i][n] = t[n];
                    this.listeners.events_ar[i].listener.call(this, this.listeners.events_ar[i]);
                    break
                }
        }, this.removeListener = function(e, t) {
            if (void 0 == e) throw Error("type is required.");
            if ("object" == typeof e) throw Error("type must be of type String.");
            if ("function" != typeof t) throw Error("listener must be of type Function." + e);
            for (var i = 0, o = this.listeners.events_ar.length; o > i; i++)
                if (this.listeners.events_ar[i].target === this && this.listeners.events_ar[i].type === e && this.listeners.events_ar[i].listener === t) {
                    this.listeners.events_ar.splice(i, 1);
                    break
                }
        }, this.disposeImage = function() {
            "img" == this.type && (this.screen.src = null)
        }, this.destroy = function() {
            try {
                this.screen.parentNode.removeChild(this.screen)
            } catch (e) {}
            this.screen.onselectstart = null, this.screen.ondragstart = null, this.screen.ontouchstart = null, this.screen.ontouchmove = null, this.screen.ontouchend = null, this.screen.onmouseover = null, this.screen.onmouseout = null, this.screen.onmouseup = null, this.screen.onmousedown = null, this.screen.onmousemove = null, this.screen.onclick = null, delete this.screen, delete this.style, delete this.rect, delete this.selectable, delete this.buttonMode, delete this.position, delete this.overflow, delete this.visible, delete this.innerHTML, delete this.numChildren, delete this.x, delete this.y, delete this.w, delete this.h, delete this.opacityType, delete this.isHtml5_bl, delete this.hasTransform2d_bl, this.children_ar = null, this.style = null, this.screen = null, this.numChildren = null, this.transform = null, this.position = null, this.overflow = null, this.display = null, this.visible = null, this.buttonMode = null, this.globalX = null, this.globalY = null, this.x = null, this.y = null, this.w = null, this.h = null, this.rect = null, this.alpha = null, this.innerHTML = null, this.opacityType = null, this.isHtml5_bl = null, this.hasTransform3d_bl = null, this.hasTransform2d_bl = null, n = null
        }, this.init()
    };
    e.FWDRLTransformDisplayObject = t
}(window), (window._gsQueue || (window._gsQueue = [])).push(function() {
        "use strict";
        window._gsDefine("FWDRLTweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(e, t, i) {
                var o = [].slice,
                    n = function(e, t, o) {
                        i.call(this, e, t, o), this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0
                    },
                    s = function(e) {
                        return e.jquery || e.length && e[0] && e[0].nodeType && e[0].style
                    },
                    r = n.prototype = i.to({}, .1, {}),
                    a = [];
                n.version = "1.9.7", r.constructor = n, r.kill()._gc = !1, n.killTweensOf = n.killDelayedCallsTo = i.killTweensOf, n.getTweensOf = i.getTweensOf, n.ticker = i.ticker, r.invalidate = function() {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), i.prototype.invalidate.call(this)
                }, r.updateTo = function(e, t) {
                    var o, n = this.ratio;
                    t && this.timeline && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
                    for (o in e) this.vars[o] = e[o];
                    if (this._initted)
                        if (t) this._initted = !1;
                        else if (this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                        var s = this._time;
                        this.render(0, !0, !1), this._initted = !1, this.render(s, !0, !1)
                    } else if (this._time > 0) {
                        this._initted = !1, this._init();
                        for (var r, a = 1 / (1 - n), l = this._firstPT; l;) r = l.s + l.c, l.c *= a, l.s = r - l.c, l = l._next
                    }
                    return this
                }, r.render = function(e, t, i) {
                    var o, n, s, r, l, d, u, h = this._dirty ? this.totalDuration() : this._totalDuration,
                        c = this._time,
                        _ = this._totalTime,
                        b = this._cycle;
                    if (e >= h ? (this._totalTime = h, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = this._duration, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (o = !0, n = "onComplete"), 0 === this._duration && ((0 === e || this._rawPrevTime < 0) && this._rawPrevTime !== e && (i = !0, this._rawPrevTime > 0 && (n = "onReverseComplete", t && (e = -1))), this._rawPrevTime = e)) : 1e-7 > e ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== _ || 0 === this._duration && this._rawPrevTime > 0) && (n = "onReverseComplete", o = this._reversed), 0 > e ? (this._active = !1, 0 === this._duration && (this._rawPrevTime >= 0 && (i = !0), this._rawPrevTime = e)) : this._initted || (i = !0)) : (this._totalTime = this._time = e, 0 !== this._repeat && (r = this._duration + this._repeatDelay, this._cycle = this._totalTime / r >> 0, 0 !== this._cycle && this._cycle === this._totalTime / r && this._cycle--, this._time = this._totalTime - this._cycle * r, this._yoyo && 0 !== (1 & this._cycle) && (this._time = this._duration - this._time), this._time > this._duration ? this._time = this._duration : this._time < 0 && (this._time = 0)), this._easeType ? (l = this._time / this._duration, d = this._easeType, u = this._easePower, (1 === d || 3 === d && l >= .5) && (l = 1 - l), 3 === d && (l *= 2), 1 === u ? l *= l : 2 === u ? l *= l * l : 3 === u ? l *= l * l * l : 4 === u && (l *= l * l * l * l), this.ratio = 1 === d ? 1 - l : 2 === d ? l : this._time / this._duration < .5 ? l / 2 : 1 - l / 2) : this.ratio = this._ease.getRatio(this._time / this._duration)), c === this._time && !i) return void(_ !== this._totalTime && this._onUpdate && (t || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || a)));
                    if (!this._initted) {
                        if (this._init(), !this._initted) return;
                        this._time && !o ? this.ratio = this._ease.getRatio(this._time / this._duration) : o && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._active || this._paused || (this._active = !0), 0 === _ && (this._startAt && (e >= 0 ? this._startAt.render(e, t, i) : n || (n = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === this._duration) && (t || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || a))), s = this._firstPT; s;) {
                        if (s.f) s.t[s.p](s.c * this.ratio + s.s);
                        else {
                            var m = s.c * this.ratio + s.s;
                            "x" == s.p ? s.t.setX(m) : "y" == s.p ? s.t.setY(m) : "z" == s.p ? s.t.setZ(m) : "w" == s.p ? s.t.setWidth(m) : "h" == s.p ? s.t.setHeight(m) : "alpha" == s.p ? s.t.setAlpha(m) : "scale" == s.p ? s.t.setScale2(m) : s.t[s.p] = m
                        }
                        s = s._next
                    }
                    this._onUpdate && (0 > e && this._startAt && this._startAt.render(e, t, i), t || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || a)), this._cycle !== b && (t || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || a)), n && (this._gc || (0 > e && this._startAt && !this._onUpdate && this._startAt.render(e, t, i), o && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[n] && this.vars[n].apply(this.vars[n + "Scope"] || this, this.vars[n + "Params"] || a)))
                }, n.to = function(e, t, i) {
                    return new n(e, t, i)
                }, n.from = function(e, t, i) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new n(e, t, i)
                }, n.fromTo = function(e, t, i, o) {
                    return o.startAt = i, o.immediateRender = 0 != o.immediateRender && 0 != i.immediateRender, new n(e, t, o)
                }, n.staggerTo = n.allTo = function(e, t, r, l, d, u, h) {
                    l = l || 0;
                    var c, _, b, m, p = r.delay || 0,
                        f = [],
                        v = function() {
                            r.onComplete && r.onComplete.apply(r.onCompleteScope || this, r.onCompleteParams || a), d.apply(h || this, u || a)
                        };
                    for (e instanceof Array || ("string" == typeof e && (e = i.selector(e) || e), s(e) && (e = o.call(e, 0))), c = e.length, b = 0; c > b; b++) {
                        _ = {};
                        for (m in r) _[m] = r[m];
                        _.delay = p, b === c - 1 && d && (_.onComplete = v), f[b] = new n(e[b], t, _), p += l
                    }
                    return f
                }, n.staggerFrom = n.allFrom = function(e, t, i, o, s, r, a) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, n.staggerTo(e, t, i, o, s, r, a)
                }, n.staggerFromTo = n.allFromTo = function(e, t, i, o, s, r, a, l) {
                    return o.startAt = i, o.immediateRender = 0 != o.immediateRender && 0 != i.immediateRender, n.staggerTo(e, t, o, s, r, a, l)
                }, n.delayedCall = function(e, t, i, o, s) {
                    return new n(t, 0, {
                        delay: e,
                        onComplete: t,
                        onCompleteParams: i,
                        onCompleteScope: o,
                        onReverseComplete: t,
                        onReverseCompleteParams: i,
                        onReverseCompleteScope: o,
                        immediateRender: !1,
                        useFrames: s,
                        overwrite: 0
                    })
                }, n.set = function(e, t) {
                    return new n(e, 0, t)
                }, n.isTweening = function(e) {
                    for (var t, o = i.getTweensOf(e), n = o.length; --n > -1;)
                        if (t = o[n], t._active || t._startTime === t._timeline._time && t._timeline._active) return !0;
                    return !1
                };
                var l = function(e, t) {
                        for (var o = [], n = 0, s = e._first; s;) s instanceof i ? o[n++] = s : (t && (o[n++] = s), o = o.concat(l(s, t)), n = o.length), s = s._next;
                        return o
                    },
                    d = n.getAllTweens = function(t) {
                        return l(e._rootTimeline, t).concat(l(e._rootFramesTimeline, t))
                    };
                n.killAll = function(e, i, o, n) {
                    null == i && (i = !0), null == o && (o = !0);
                    var s, r, a, l = d(0 != n),
                        u = l.length,
                        h = i && o && n;
                    for (a = 0; u > a; a++) r = l[a], (h || r instanceof t || (s = r.target === r.vars.onComplete) && o || i && !s) && (e ? r.totalTime(r.totalDuration()) : r._enabled(!1, !1))
                }, n.killChildTweensOf = function(e, t) {
                    if (null != e) {
                        var r, a, l, d, u, h = i._tweenLookup;
                        if ("string" == typeof e && (e = i.selector(e) || e), s(e) && (e = o(e, 0)), e instanceof Array)
                            for (d = e.length; --d > -1;) n.killChildTweensOf(e[d], t);
                        else {
                            r = [];
                            for (l in h)
                                for (a = h[l].target.parentNode; a;) a === e && (r = r.concat(h[l].tweens)), a = a.parentNode;
                            for (u = r.length, d = 0; u > d; d++) t && r[d].totalTime(r[d].totalDuration()), r[d]._enabled(!1, !1)
                        }
                    }
                };
                var u = function(e, i, o, n) {
                    void 0 === i && (i = !0), void 0 === o && (o = !0);
                    for (var s, r, a = d(n), l = i && o && n, u = a.length; --u > -1;) r = a[u], (l || r instanceof t || (s = r.target === r.vars.onComplete) && o || i && !s) && r.paused(e)
                };
                return n.pauseAll = function(e, t, i) {
                    u(!0, e, t, i)
                }, n.resumeAll = function(e, t, i) {
                    u(!1, e, t, i)
                }, r.progress = function(e) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - e : e) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
                }, r.totalProgress = function(e) {
                    return arguments.length ? this.totalTime(this.totalDuration() * e, !1) : this._totalTime / this.totalDuration()
                }, r.time = function(e, t) {
                    return arguments.length ? (this._dirty && this.totalDuration(), e > this._duration && (e = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? e = this._duration - e + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (e += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(e, t)) : this._time
                }, r.duration = function(t) {
                    return arguments.length ? e.prototype.duration.call(this, t) : this._duration
                }, r.totalDuration = function(e) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
                }, r.repeat = function(e) {
                    return arguments.length ? (this._repeat = e, this._uncache(!0)) : this._repeat
                }, r.repeatDelay = function(e) {
                    return arguments.length ? (this._repeatDelay = e, this._uncache(!0)) : this._repeatDelay
                }, r.yoyo = function(e) {
                    return arguments.length ? (this._yoyo = e, this) : this._yoyo
                }, n
            }, !0), window._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(e, t, i) {
                var o = function(e) {
                        t.call(this, e), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                        for (var i, o, s = this.vars, r = n.length; --r > -1;)
                            if (o = s[n[r]])
                                for (i = o.length; --i > -1;) "{self}" === o[i] && (o = s[n[r]] = o.concat(), o[i] = this);
                        s.tweens instanceof Array && this.add(s.tweens, 0, s.align, s.stagger)
                    },
                    n = ["onStartParams", "onUpdateParams", "onCompleteParams", "onReverseCompleteParams", "onRepeatParams"],
                    s = [],
                    r = function(e) {
                        var t, i = {};
                        for (t in e) i[t] = e[t];
                        return i
                    },
                    a = s.slice,
                    l = o.prototype = new t;
                return o.version = "1.9.7", l.constructor = o, l.kill()._gc = !1, l.to = function(e, t, o, n) {
                    return t ? this.add(new i(e, t, o), n) : this.set(e, o, n)
                }, l.from = function(e, t, o, n) {
                    return this.add(i.from(e, t, o), n)
                }, l.fromTo = function(e, t, o, n, s) {
                    return t ? this.add(i.fromTo(e, t, o, n), s) : this.set(e, n, s)
                }, l.staggerTo = function(e, t, n, s, l, d, u, h) {
                    var c, _ = new o({
                        onComplete: d,
                        onCompleteParams: u,
                        onCompleteScope: h
                    });
                    for ("string" == typeof e && (e = i.selector(e) || e), !(e instanceof Array) && e.length && e[0] && e[0].nodeType && e[0].style && (e = a.call(e, 0)), s = s || 0, c = 0; c < e.length; c++) n.startAt && (n.startAt = r(n.startAt)), _.to(e[c], t, r(n), c * s);
                    return this.add(_, l)
                }, l.staggerFrom = function(e, t, i, o, n, s, r, a) {
                    return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(e, t, i, o, n, s, r, a)
                }, l.staggerFromTo = function(e, t, i, o, n, s, r, a, l) {
                    return o.startAt = i, o.immediateRender = 0 != o.immediateRender && 0 != i.immediateRender, this.staggerTo(e, t, o, n, s, r, a, l)
                }, l.call = function(e, t, o, n) {
                    return this.add(i.delayedCall(0, e, t, o), n)
                }, l.set = function(e, t, o) {
                    return o = this._parseTimeOrLabel(o, 0, !0), null == t.immediateRender && (t.immediateRender = o === this._time && !this._paused), this.add(new i(e, 0, t), o)
                }, o.exportRoot = function(e, t) {
                    e = e || {}, null == e.smoothChildTiming && (e.smoothChildTiming = !0);
                    var n, s, r = new o(e),
                        a = r._timeline;
                    for (null == t && (t = !0), a._remove(r, !0), r._startTime = 0, r._rawPrevTime = r._time = r._totalTime = a._time, n = a._first; n;) s = n._next, t && n instanceof i && n.target === n.vars.onComplete || r.add(n, n._startTime - n._delay), n = s;
                    return a.add(r, 0), r
                }, l.add = function(n, s, r, a) {
                    var l, d, u, h, c;
                    if ("number" != typeof s && (s = this._parseTimeOrLabel(s, 0, !0, n)), !(n instanceof e)) {
                        if (n instanceof Array) {
                            for (r = r || "normal", a = a || 0, l = s, d = n.length, u = 0; d > u; u++)(h = n[u]) instanceof Array && (h = new o({
                                tweens: h
                            })), this.add(h, l), "string" != typeof h && "function" != typeof h && ("sequence" === r ? l = h._startTime + h.totalDuration() / h._timeScale : "start" === r && (h._startTime -= h.delay())), l += a;
                            return this._uncache(!0)
                        }
                        if ("string" == typeof n) return this.addLabel(n, s);
                        if ("function" != typeof n) throw "Cannot add " + n + " into the timeline; it is neither a tween, timeline, function, nor a string.";
                        n = i.delayedCall(0, n)
                    }
                    if (t.prototype.add.call(this, n, s), this._gc && !this._paused && this._time === this._duration && this._time < this.duration())
                        for (c = this; c._gc && c._timeline;) c._timeline.smoothChildTiming ? c.totalTime(c._totalTime, !0) : c._enabled(!0, !1), c = c._timeline;
                    return this
                }, l.remove = function(t) {
                    if (t instanceof e) return this._remove(t, !1);
                    if (t instanceof Array) {
                        for (var i = t.length; --i > -1;) this.remove(t[i]);
                        return this
                    }
                    return "string" == typeof t ? this.removeLabel(t) : this.kill(null, t)
                }, l.append = function(e, t) {
                    return this.add(e, this._parseTimeOrLabel(null, t, !0, e))
                }, l.insert = l.insertMultiple = function(e, t, i, o) {
                    return this.add(e, t || 0, i, o)
                }, l.appendMultiple = function(e, t, i, o) {
                    return this.add(e, this._parseTimeOrLabel(null, t, !0, e), i, o)
                }, l.addLabel = function(e, t) {
                    return this._labels[e] = this._parseTimeOrLabel(t), this
                }, l.removeLabel = function(e) {
                    return delete this._labels[e], this
                }, l.getLabelTime = function(e) {
                    return null != this._labels[e] ? this._labels[e] : -1
                }, l._parseTimeOrLabel = function(t, i, o, n) {
                    var s;
                    if (n instanceof e && n.timeline === this) this.remove(n);
                    else if (n instanceof Array)
                        for (s = n.length; --s > -1;) n[s] instanceof e && n[s].timeline === this && this.remove(n[s]);
                    if ("string" == typeof i) return this._parseTimeOrLabel(i, o && "number" == typeof t && null == this._labels[i] ? t - this.duration() : 0, o);
                    if (i = i || 0, "string" != typeof t || !isNaN(t) && null == this._labels[t]) null == t && (t = this.duration());
                    else {
                        if (s = t.indexOf("="), -1 === s) return null == this._labels[t] ? o ? this._labels[t] = this.duration() + i : i : this._labels[t] + i;
                        i = parseInt(t.charAt(s - 1) + "1", 10) * Number(t.substr(s + 1)), t = s > 1 ? this._parseTimeOrLabel(t.substr(0, s - 1), 0, o) : this.duration()
                    }
                    return Number(t) + i
                }, l.seek = function(e, t) {
                    return this.totalTime("number" == typeof e ? e : this._parseTimeOrLabel(e), t !== !1)
                }, l.stop = function() {
                    return this.paused(!0)
                }, l.gotoAndPlay = function(e, t) {
                    return this.play(e, t)
                }, l.gotoAndStop = function(e, t) {
                    return this.pause(e, t)
                }, l.render = function(e, t, i) {
                    this._gc && this._enabled(!0, !1), this._active = !this._paused;
                    var o, n, r, a, l, d = this._dirty ? this.totalDuration() : this._totalDuration,
                        u = this._time,
                        h = this._startTime,
                        c = this._timeScale,
                        _ = this._paused;
                    if (e >= d ? (this._totalTime = this._time = d, this._reversed || this._hasPausedChild() || (n = !0, a = "onComplete", 0 === this._duration && (0 === e || this._rawPrevTime < 0) && this._rawPrevTime !== e && this._first && (l = !0, this._rawPrevTime > 0 && (a = "onReverseComplete"))), this._rawPrevTime = e, e = d + 1e-6) : 1e-7 > e ? (this._totalTime = this._time = 0, (0 !== u || 0 === this._duration && this._rawPrevTime > 0) && (a = "onReverseComplete", n = this._reversed), 0 > e ? (this._active = !1, 0 === this._duration && this._rawPrevTime >= 0 && this._first && (l = !0)) : this._initted || (l = !0), this._rawPrevTime = e, e = 0) : this._totalTime = this._time = this._rawPrevTime = e, this._time !== u && this._first || i || l) {
                        if (this._initted || (this._initted = !0), 0 === u && this.vars.onStart && 0 !== this._time && (t || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || s)), this._time >= u)
                            for (o = this._first; o && (r = o._next, !this._paused || _);)(o._active || o._startTime <= this._time && !o._paused && !o._gc) && (o._reversed ? o.render((o._dirty ? o.totalDuration() : o._totalDuration) - (e - o._startTime) * o._timeScale, t, i) : o.render((e - o._startTime) * o._timeScale, t, i)), o = r;
                        else
                            for (o = this._last; o && (r = o._prev, !this._paused || _);)(o._active || o._startTime <= u && !o._paused && !o._gc) && (o._reversed ? o.render((o._dirty ? o.totalDuration() : o._totalDuration) - (e - o._startTime) * o._timeScale, t, i) : o.render((e - o._startTime) * o._timeScale, t, i)), o = r;
                        this._onUpdate && (t || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || s)), a && (this._gc || (h === this._startTime || c !== this._timeScale) && (0 === this._time || d >= this.totalDuration()) && (n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[a] && this.vars[a].apply(this.vars[a + "Scope"] || this, this.vars[a + "Params"] || s)))
                    }
                }, l._hasPausedChild = function() {
                    for (var e = this._first; e;) {
                        if (e._paused || e instanceof o && e._hasPausedChild()) return !0;
                        e = e._next
                    }
                    return !1
                }, l.getChildren = function(e, t, o, n) {
                    n = n || -9999999999;
                    for (var s = [], r = this._first, a = 0; r;) r._startTime < n || (r instanceof i ? t !== !1 && (s[a++] = r) : (o !== !1 && (s[a++] = r), e !== !1 && (s = s.concat(r.getChildren(!0, t, o)), a = s.length))), r = r._next;
                    return s
                }, l.getTweensOf = function(e, t) {
                    for (var o = i.getTweensOf(e), n = o.length, s = [], r = 0; --n > -1;)(o[n].timeline === this || t && this._contains(o[n])) && (s[r++] = o[n]);
                    return s
                }, l._contains = function(e) {
                    for (var t = e.timeline; t;) {
                        if (t === this) return !0;
                        t = t.timeline
                    }
                    return !1
                }, l.shiftChildren = function(e, t, i) {
                    i = i || 0;
                    for (var o, n = this._first, s = this._labels; n;) n._startTime >= i && (n._startTime += e), n = n._next;
                    if (t)
                        for (o in s) s[o] >= i && (s[o] += e);
                    return this._uncache(!0)
                }, l._kill = function(e, t) {
                    if (!e && !t) return this._enabled(!1, !1);
                    for (var i = t ? this.getTweensOf(t) : this.getChildren(!0, !0, !1), o = i.length, n = !1; --o > -1;) i[o]._kill(e, t) && (n = !0);
                    return n
                }, l.clear = function(e) {
                    var t = this.getChildren(!1, !0, !0),
                        i = t.length;
                    for (this._time = this._totalTime = 0; --i > -1;) t[i]._enabled(!1, !1);
                    return e !== !1 && (this._labels = {}), this._uncache(!0)
                }, l.invalidate = function() {
                    for (var e = this._first; e;) e.invalidate(), e = e._next;
                    return this
                }, l._enabled = function(e, i) {
                    if (e === this._gc)
                        for (var o = this._first; o;) o._enabled(e, !0), o = o._next;
                    return t.prototype._enabled.call(this, e, i)
                }, l.progress = function(e) {
                    return arguments.length ? this.totalTime(this.duration() * e, !1) : this._time / this.duration()
                }, l.duration = function(e) {
                    return arguments.length ? (0 !== this.duration() && 0 !== e && this.timeScale(this._duration / e), this) : (this._dirty && this.totalDuration(), this._duration)
                }, l.totalDuration = function(e) {
                    if (!arguments.length) {
                        if (this._dirty) {
                            for (var t, i, o = 0, n = this._last, s = 999999999999; n;) t = n._prev, n._dirty && n.totalDuration(), n._startTime > s && this._sortChildren && !n._paused ? this.add(n, n._startTime - n._delay) : s = n._startTime, n._startTime < 0 && !n._paused && (o -= n._startTime, this._timeline.smoothChildTiming && (this._startTime += n._startTime / this._timeScale), this.shiftChildren(-n._startTime, !1, -9999999999), s = 0), i = n._startTime + n._totalDuration / n._timeScale, i > o && (o = i), n = t;
                            this._duration = this._totalDuration = o, this._dirty = !1
                        }
                        return this._totalDuration
                    }
                    return 0 !== this.totalDuration() && 0 !== e && this.timeScale(this._totalDuration / e), this
                }, l.usesFrames = function() {
                    for (var t = this._timeline; t._timeline;) t = t._timeline;
                    return t === e._rootFramesTimeline
                }, l.rawTime = function() {
                    return this._paused || 0 !== this._totalTime && this._totalTime !== this._totalDuration ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
                }, o
            }, !0), window._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(e, t, i) {
                var o = function(t) {
                        e.call(this, t), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0
                    },
                    n = [],
                    s = new i(null, null, 1, 0),
                    r = function(e) {
                        for (; e;) {
                            if (e._paused) return !0;
                            e = e._timeline
                        }
                        return !1
                    },
                    a = o.prototype = new e;
                return a.constructor = o, a.kill()._gc = !1, o.version = "1.9.7", a.invalidate = function() {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), e.prototype.invalidate.call(this)
                }, a.addCallback = function(e, i, o, n) {
                    return this.add(t.delayedCall(0, e, o, n), i)
                }, a.removeCallback = function(e, t) {
                    if (null == t) this._kill(null, e);
                    else
                        for (var i = this.getTweensOf(e, !1), o = i.length, n = this._parseTimeOrLabel(t); --o > -1;) i[o]._startTime === n && i[o]._enabled(!1, !1);
                    return this
                }, a.tweenTo = function(e, i) {
                    i = i || {};
                    var o, r, a = {
                        ease: s,
                        overwrite: 2,
                        useFrames: this.usesFrames(),
                        immediateRender: !1
                    };
                    for (o in i) a[o] = i[o];
                    return a.time = this._parseTimeOrLabel(e), r = new t(this, Math.abs(Number(a.time) - this._time) / this._timeScale || .001, a), a.onStart = function() {
                        r.target.paused(!0), r.vars.time !== r.target.time() && r.duration(Math.abs(r.vars.time - r.target.time()) / r.target._timeScale), i.onStart && i.onStart.apply(i.onStartScope || r, i.onStartParams || n)
                    }, r
                }, a.tweenFromTo = function(e, t, i) {
                    i = i || {}, e = this._parseTimeOrLabel(e), i.startAt = {
                        onComplete: this.seek,
                        onCompleteParams: [e],
                        onCompleteScope: this
                    }, i.immediateRender = i.immediateRender !== !1;
                    var o = this.tweenTo(t, i);
                    return o.duration(Math.abs(o.vars.time - e) / this._timeScale || .001)
                }, a.render = function(e, t, i) {
                    this._gc && this._enabled(!0, !1), this._active = !this._paused;
                    var o, s, r, a, l, d, u = this._dirty ? this.totalDuration() : this._totalDuration,
                        h = this._duration,
                        c = this._time,
                        _ = this._totalTime,
                        b = this._startTime,
                        m = this._timeScale,
                        p = this._rawPrevTime,
                        f = this._paused,
                        v = this._cycle;
                    if (e >= u ? (this._locked || (this._totalTime = u, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (s = !0, a = "onComplete", 0 === h && (0 === e || this._rawPrevTime < 0) && this._rawPrevTime !== e && this._first && (l = !0, this._rawPrevTime > 0 && (a = "onReverseComplete"))), this._rawPrevTime = e, this._yoyo && 0 !== (1 & this._cycle) ? this._time = e = 0 : (this._time = h, e = h + 1e-6)) : 1e-7 > e ? (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== c || 0 === h && this._rawPrevTime > 0 && !this._locked) && (a = "onReverseComplete", s = this._reversed), 0 > e ? (this._active = !1, 0 === h && this._rawPrevTime >= 0 && this._first && (l = !0)) : this._initted || (l = !0), this._rawPrevTime = e, e = 0) : (this._time = this._rawPrevTime = e, this._locked || (this._totalTime = e, 0 !== this._repeat && (d = h + this._repeatDelay, this._cycle = this._totalTime / d >> 0, 0 !== this._cycle && this._cycle === this._totalTime / d && this._cycle--, this._time = this._totalTime - this._cycle * d, this._yoyo && 0 !== (1 & this._cycle) && (this._time = h - this._time), this._time > h ? (this._time = h, e = h + 1e-6) : this._time < 0 ? this._time = e = 0 : e = this._time))), this._cycle !== v && !this._locked) {
                        var g = this._yoyo && 0 !== (1 & v),
                            S = g === (this._yoyo && 0 !== (1 & this._cycle)),
                            y = this._totalTime,
                            w = this._cycle,
                            T = this._rawPrevTime,
                            D = this._time;
                        this._totalTime = v * h, this._cycle < v ? g = !g : this._totalTime += h, this._time = c, this._rawPrevTime = 0 === h ? p - 1e-5 : p, this._cycle = v, this._locked = !0, c = g ? 0 : h, this.render(c, t, 0 === h), t || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || n), S && (c = g ? h + 1e-6 : -1e-6, this.render(c, !0, !1)), this._time = D, this._totalTime = y, this._cycle = w, this._rawPrevTime = T, this._locked = !1
                    }
                    if (!(this._time !== c && this._first || i || l)) return void(_ !== this._totalTime && this._onUpdate && (t || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || n)));
                    if (this._initted || (this._initted = !0), 0 === _ && this.vars.onStart && 0 !== this._totalTime && (t || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || n)), this._time >= c)
                        for (o = this._first; o && (r = o._next, !this._paused || f);)(o._active || o._startTime <= this._time && !o._paused && !o._gc) && (o._reversed ? o.render((o._dirty ? o.totalDuration() : o._totalDuration) - (e - o._startTime) * o._timeScale, t, i) : o.render((e - o._startTime) * o._timeScale, t, i)), o = r;
                    else
                        for (o = this._last; o && (r = o._prev, !this._paused || f);)(o._active || o._startTime <= c && !o._paused && !o._gc) && (o._reversed ? o.render((o._dirty ? o.totalDuration() : o._totalDuration) - (e - o._startTime) * o._timeScale, t, i) : o.render((e - o._startTime) * o._timeScale, t, i)), o = r;
                    this._onUpdate && (t || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || n)), a && (this._locked || this._gc || (b === this._startTime || m !== this._timeScale) && (0 === this._time || u >= this.totalDuration()) && (s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[a] && this.vars[a].apply(this.vars[a + "Scope"] || this, this.vars[a + "Params"] || n)))
                }, a.getActive = function(e, t, i) {
                    null == e && (e = !0), null == t && (t = !0), null == i && (i = !1);
                    var o, n, s = [],
                        a = this.getChildren(e, t, i),
                        l = 0,
                        d = a.length;
                    for (o = 0; d > o; o++) n = a[o], n._paused || n._timeline._time >= n._startTime && n._timeline._time < n._startTime + n._totalDuration / n._timeScale && (r(n._timeline) || (s[l++] = n));
                    return s
                }, a.getLabelAfter = function(e) {
                    e || 0 !== e && (e = this._time);
                    var t, i = this.getLabelsArray(),
                        o = i.length;
                    for (t = 0; o > t; t++)
                        if (i[t].time > e) return i[t].name;
                    return null
                }, a.getLabelBefore = function(e) {
                    null == e && (e = this._time);
                    for (var t = this.getLabelsArray(), i = t.length; --i > -1;)
                        if (t[i].time < e) return t[i].name;
                    return null
                }, a.getLabelsArray = function() {
                    var e, t = [],
                        i = 0;
                    for (e in this._labels) t[i++] = {
                        time: this._labels[e],
                        name: e
                    };
                    return t.sort(function(e, t) {
                        return e.time - t.time
                    }), t
                }, a.progress = function(e) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - e : e) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
                }, a.totalProgress = function(e) {
                    return arguments.length ? this.totalTime(this.totalDuration() * e, !1) : this._totalTime / this.totalDuration()
                }, a.totalDuration = function(t) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (e.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
                }, a.time = function(e, t) {
                    return arguments.length ? (this._dirty && this.totalDuration(), e > this._duration && (e = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? e = this._duration - e + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (e += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(e, t)) : this._time
                }, a.repeat = function(e) {
                    return arguments.length ? (this._repeat = e, this._uncache(!0)) : this._repeat
                }, a.repeatDelay = function(e) {
                    return arguments.length ? (this._repeatDelay = e, this._uncache(!0)) : this._repeatDelay
                }, a.yoyo = function(e) {
                    return arguments.length ? (this._yoyo = e, this) : this._yoyo
                }, a.currentLabel = function(e) {
                    return arguments.length ? this.seek(e, !0) : this.getLabelBefore(this._time + 1e-8)
                }, o
            }, !0),
            function() {
                var e = 180 / Math.PI,
                    t = Math.PI / 180,
                    i = [],
                    o = [],
                    n = [],
                    s = {},
                    r = function(e, t, i, o) {
                        this.a = e, this.b = t, this.c = i, this.d = o, this.da = o - e, this.ca = i - e, this.ba = t - e
                    },
                    a = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
                    l = function(e, t, i, o) {
                        var n = {
                                a: e
                            },
                            s = {},
                            r = {},
                            a = {
                                c: o
                            },
                            l = (e + t) / 2,
                            d = (t + i) / 2,
                            u = (i + o) / 2,
                            h = (l + d) / 2,
                            c = (d + u) / 2,
                            _ = (c - h) / 8;
                        return n.b = l + (e - l) / 4, s.b = h + _, n.c = s.a = (n.b + s.b) / 2, s.c = r.a = (h + c) / 2, r.b = c - _, a.b = u + (o - u) / 4, r.c = a.a = (r.b + a.b) / 2, [n, s, r, a]
                    },
                    d = function(e, t, s, r, a) {
                        var d, u, h, c, _, b, m, p, f, v, g, S, y, w = e.length - 1,
                            T = 0,
                            D = e[0].a;
                        for (d = 0; w > d; d++) _ = e[T], u = _.a, h = _.d, c = e[T + 1].d, a ? (g = i[d], S = o[d], y = (S + g) * t * .25 / (r ? .5 : n[d] || .5), b = h - (h - u) * (r ? .5 * t : 0 !== g ? y / g : 0), m = h + (c - h) * (r ? .5 * t : 0 !== S ? y / S : 0), p = h - (b + ((m - b) * (3 * g / (g + S) + .5) / 4 || 0))) : (b = h - (h - u) * t * .5, m = h + (c - h) * t * .5, p = h - (b + m) / 2), b += p, m += p, _.c = f = b, _.b = 0 !== d ? D : D = _.a + .6 * (_.c - _.a), _.da = h - u, _.ca = f - u, _.ba = D - u, s ? (v = l(u, D, f, h), e.splice(T, 1, v[0], v[1], v[2], v[3]), T += 4) : T++, D = m;
                        _ = e[T], _.b = D, _.c = D + .4 * (_.d - D), _.da = _.d - _.a, _.ca = _.c - _.a, _.ba = D - _.a, s && (v = l(_.a, D, _.c, _.d), e.splice(T, 1, v[0], v[1], v[2], v[3]))
                    },
                    u = function(e, t, n, s) {
                        var a, l, d, u, h, c, _ = [];
                        if (s)
                            for (e = [s].concat(e), l = e.length; --l > -1;) "string" == typeof(c = e[l][t]) && "=" === c.charAt(1) && (e[l][t] = s[t] + Number(c.charAt(0) + c.substr(2)));
                        if (a = e.length - 2, 0 > a) return _[0] = new r(e[0][t], 0, 0, e[-1 > a ? 0 : 1][t]), _;
                        for (l = 0; a > l; l++) d = e[l][t], u = e[l + 1][t], _[l] = new r(d, 0, 0, u), n && (h = e[l + 2][t], i[l] = (i[l] || 0) + (u - d) * (u - d), o[l] = (o[l] || 0) + (h - u) * (h - u));
                        return _[l] = new r(e[l][t], 0, 0, e[l + 1][t]), _
                    },
                    h = function(e, t, r, l, h, c) {
                        var _, b, m, p, f, v, g, S, y = {},
                            w = [],
                            T = c || e[0];
                        h = "string" == typeof h ? "," + h + "," : a, null == t && (t = 1);
                        for (b in e[0]) w.push(b);
                        if (e.length > 1) {
                            for (S = e[e.length - 1], g = !0, _ = w.length; --_ > -1;)
                                if (b = w[_], Math.abs(T[b] - S[b]) > .05) {
                                    g = !1;
                                    break
                                }
                            g && (e = e.concat(), c && e.unshift(c), e.push(e[1]), c = e[e.length - 3])
                        }
                        for (i.length = o.length = n.length = 0, _ = w.length; --_ > -1;) b = w[_], s[b] = -1 !== h.indexOf("," + b + ","), y[b] = u(e, b, s[b], c);
                        for (_ = i.length; --_ > -1;) i[_] = Math.sqrt(i[_]), o[_] = Math.sqrt(o[_]);
                        if (!l) {
                            for (_ = w.length; --_ > -1;)
                                if (s[b])
                                    for (m = y[w[_]], v = m.length - 1, p = 0; v > p; p++) f = m[p + 1].da / o[p] + m[p].da / i[p], n[p] = (n[p] || 0) + f * f;
                            for (_ = n.length; --_ > -1;) n[_] = Math.sqrt(n[_])
                        }
                        for (_ = w.length, p = r ? 4 : 1; --_ > -1;) b = w[_], m = y[b], d(m, t, r, l, s[b]), g && (m.splice(0, p), m.splice(m.length - p, p));
                        return y
                    },
                    c = function(e, t, i) {
                        t = t || "soft";
                        var o, n, s, a, l, d, u, h, c, _, b, m = {},
                            p = "cubic" === t ? 3 : 2,
                            f = "soft" === t,
                            v = [];
                        if (f && i && (e = [i].concat(e)), null == e || e.length < p + 1) throw "invalid Bezier data";
                        for (c in e[0]) v.push(c);
                        for (d = v.length; --d > -1;) {
                            for (c = v[d], m[c] = l = [], _ = 0, h = e.length, u = 0; h > u; u++) o = null == i ? e[u][c] : "string" == typeof(b = e[u][c]) && "=" === b.charAt(1) ? i[c] + Number(b.charAt(0) + b.substr(2)) : Number(b), f && u > 1 && h - 1 > u && (l[_++] = (o + l[_ - 2]) / 2), l[_++] = o;
                            for (h = _ - p + 1, _ = 0, u = 0; h > u; u += p) o = l[u], n = l[u + 1], s = l[u + 2], a = 2 === p ? 0 : l[u + 3], l[_++] = b = 3 === p ? new r(o, n, s, a) : new r(o, (2 * n + o) / 3, (2 * n + s) / 3, s);
                            l.length = _
                        }
                        return m
                    },
                    _ = function(e, t, i) {
                        for (var o, n, s, r, a, l, d, u, h, c, _, b = 1 / i, m = e.length; --m > -1;)
                            for (c = e[m], s = c.a, r = c.d - s, a = c.c - s, l = c.b - s, o = n = 0, u = 1; i >= u; u++) d = b * u, h = 1 - d, o = n - (n = (d * d * r + 3 * h * (d * a + h * l)) * d), _ = m * i + u - 1, t[_] = (t[_] || 0) + o * o
                    },
                    b = function(e, t) {
                        t = t >> 0 || 6;
                        var i, o, n, s, r = [],
                            a = [],
                            l = 0,
                            d = 0,
                            u = t - 1,
                            h = [],
                            c = [];
                        for (i in e) _(e[i], r, t);
                        for (n = r.length, o = 0; n > o; o++) l += Math.sqrt(r[o]), s = o % t, c[s] = l, s === u && (d += l, s = o / t >> 0, h[s] = c, a[s] = d, l = 0, c = []);
                        return {
                            length: d,
                            lengths: a,
                            segments: h
                        }
                    },
                    m = window._gsDefine.plugin({
                        propName: "bezier",
                        priority: -1,
                        API: 2,
                        global: !0,
                        init: function(e, t, i) {
                            this._target = e, t instanceof Array && (t = {
                                values: t
                            }), this._func = {}, this._round = {}, this._props = [], this._timeRes = null == t.timeResolution ? 6 : parseInt(t.timeResolution, 10);
                            var o, n, s, r, a, l = t.values || [],
                                d = {},
                                u = l[0],
                                _ = t.autoRotate || i.vars.orientToBezier;
                            this._autoRotate = _ ? _ instanceof Array ? _ : [
                                ["x", "y", "rotation", _ === !0 ? 0 : Number(_) || 0]
                            ] : null;
                            for (o in u) this._props.push(o);
                            for (s = this._props.length; --s > -1;) o = this._props[s], this._overwriteProps.push(o), n = this._func[o] = "function" == typeof e[o], d[o] = n ? e[o.indexOf("set") || "function" != typeof e["get" + o.substr(3)] ? o : "get" + o.substr(3)]() : parseFloat(e[o]), a || d[o] !== l[0][o] && (a = d);
                            if (this._beziers = "cubic" !== t.type && "quadratic" !== t.type && "soft" !== t.type ? h(l, isNaN(t.curviness) ? 1 : t.curviness, !1, "thruBasic" === t.type, t.correlate, a) : c(l, t.type, d), this._segCount = this._beziers[o].length, this._timeRes) {
                                var m = b(this._beziers, this._timeRes);
                                this._length = m.length, this._lengths = m.lengths, this._segments = m.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                            }
                            if (_ = this._autoRotate)
                                for (_[0] instanceof Array || (this._autoRotate = _ = [_]), s = _.length; --s > -1;)
                                    for (r = 0; 3 > r; r++) o = _[s][r], this._func[o] = "function" == typeof e[o] ? e[o.indexOf("set") || "function" != typeof e["get" + o.substr(3)] ? o : "get" + o.substr(3)] : !1;
                            return !0
                        },
                        set: function(t) {
                            var i, o, n, s, r, a, l, d, u, h, c = this._segCount,
                                _ = this._func,
                                b = this._target;
                            if (this._timeRes) {
                                if (u = this._lengths, h = this._curSeg, t *= this._length, n = this._li, t > this._l2 && c - 1 > n) {
                                    for (d = c - 1; d > n && (this._l2 = u[++n]) <= t;);
                                    this._l1 = u[n - 1], this._li = n, this._curSeg = h = this._segments[n], this._s2 = h[this._s1 = this._si = 0]
                                } else if (t < this._l1 && n > 0) {
                                    for (; n > 0 && (this._l1 = u[--n]) >= t;);
                                    0 === n && t < this._l1 ? this._l1 = 0 : n++, this._l2 = u[n], this._li = n, this._curSeg = h = this._segments[n], this._s1 = h[(this._si = h.length - 1) - 1] || 0, this._s2 = h[this._si]
                                }
                                if (i = n, t -= this._l1, n = this._si, t > this._s2 && n < h.length - 1) {
                                    for (d = h.length - 1; d > n && (this._s2 = h[++n]) <= t;);
                                    this._s1 = h[n - 1], this._si = n
                                } else if (t < this._s1 && n > 0) {
                                    for (; n > 0 && (this._s1 = h[--n]) >= t;);
                                    0 === n && t < this._s1 ? this._s1 = 0 : n++, this._s2 = h[n], this._si = n
                                }
                                a = (n + (t - this._s1) / (this._s2 - this._s1)) * this._prec
                            } else i = 0 > t ? 0 : t >= 1 ? c - 1 : c * t >> 0, a = (t - i * (1 / c)) * c;
                            for (o = 1 - a, n = this._props.length; --n > -1;) s = this._props[n], r = this._beziers[s][i], l = (a * a * r.da + 3 * o * (a * r.ca + o * r.ba)) * a + r.a, this._round[s] && (l = l + (l > 0 ? .5 : -.5) >> 0), _[s] ? b[s](l) : "x" == s ? b.setX(l) : "y" == s ? b.setY(l) : "z" == s ? b.setZ(l) : "angleX" == s ? b.setAngleX(l) : "angleY" == s ? b.setAngleY(l) : "angleZ" == s ? b.setAngleZ(l) : "w" == s ? b.setWidth(l) : "h" == s ? b.setHeight(l) : "alpha" == s ? b.setAlpha(l) : "scale" == s ? b.setScale2(l) : b[s] = l;
                            if (this._autoRotate) {
                                var m, p, f, v, g, S, y, w = this._autoRotate;
                                for (n = w.length; --n > -1;) s = w[n][2], S = w[n][3] || 0, y = w[n][4] === !0 ? 1 : e, r = this._beziers[w[n][0]], m = this._beziers[w[n][1]], r && m && (r = r[i], m = m[i], p = r.a + (r.b - r.a) * a, v = r.b + (r.c - r.b) * a, p += (v - p) * a, v += (r.c + (r.d - r.c) * a - v) * a, f = m.a + (m.b - m.a) * a, g = m.b + (m.c - m.b) * a, f += (g - f) * a, g += (m.c + (m.d - m.c) * a - g) * a, l = Math.atan2(g - f, v - p) * y + S, _[s] ? b[s](l) : b[s] = l)
                            }
                        }
                    }),
                    p = m.prototype;
                m.bezierThrough = h, m.cubicToQuadratic = l, m._autoCSS = !0, m.quadraticToCubic = function(e, t, i) {
                    return new r(e, (2 * t + e) / 3, (2 * t + i) / 3, i)
                }, m._cssRegister = function() {
                    var e = window._gsDefine.globals.CSSPlugin;
                    if (e) {
                        var i = e._internals,
                            o = i._parseToProxy,
                            n = i._setPluginRatio,
                            s = i.CSSPropTween;
                        i._registerComplexSpecialProp("bezier", {
                            parser: function(e, i, r, a, l, d) {
                                i instanceof Array && (i = {
                                    values: i
                                }), d = new m;
                                var u, h, c, _ = i.values,
                                    b = _.length - 1,
                                    p = [],
                                    f = {};
                                if (0 > b) return l;
                                for (u = 0; b >= u; u++) c = o(e, _[u], a, l, d, b !== u), p[u] = c.end;
                                for (h in i) f[h] = i[h];
                                return f.values = p, l = new s(e, "bezier", 0, 0, c.pt, 2), l.data = c, l.plugin = d, l.setRatio = n, 0 === f.autoRotate && (f.autoRotate = !0), !f.autoRotate || f.autoRotate instanceof Array || (u = f.autoRotate === !0 ? 0 : Number(f.autoRotate) * t, f.autoRotate = null != c.end.left ? [
                                    ["left", "top", "rotation", u, !0]
                                ] : null != c.end.x ? [
                                    ["x", "y", "rotation", u, !0]
                                ] : !1), f.autoRotate && (a._transform || a._enableTransforms(!1), c.autoRotate = a._target._gsTransform), d._onInitTween(c.proxy, f, a._tween), l
                            }
                        })
                    }
                }, p._roundProps = function(e, t) {
                    for (var i = this._overwriteProps, o = i.length; --o > -1;)(e[i[o]] || e.bezier || e.bezierThrough) && (this._round[i[o]] = t)
                }, p._kill = function(e) {
                    var t, i, o = this._props;
                    for (t in this._beziers)
                        if (t in e)
                            for (delete this._beziers[t], delete this._func[t], i = o.length; --i > -1;) o[i] === t && o.splice(i, 1);
                    return this._super._kill.call(this, e)
                }
            }(), window._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(e, t) {
                var i, o, n, s, r = function() {
                        e.call(this, "css"), this._overwriteProps.length = 0
                    },
                    a = {},
                    l = r.prototype = new e("css");
                l.constructor = r, r.version = "1.9.7", r.API = 2, r.defaultTransformPerspective = 0, l = "px", r.suffixMap = {
                    top: l,
                    right: l,
                    bottom: l,
                    left: l,
                    width: l,
                    height: l,
                    fontSize: l,
                    padding: l,
                    margin: l,
                    perspective: l
                };
                var d, u, h, c, _, b, m = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
                    p = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                    f = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                    v = /[^\d\-\.]/g,
                    g = /(?:\d|\-|\+|=|#|\.)*/g,
                    S = /opacity *= *([^)]*)/,
                    y = /opacity:([^;]*)/,
                    w = /alpha\(opacity *=.+?\)/i,
                    T = /^(rgb|hsl)/,
                    D = /([A-Z])/g,
                    L = /-([a-z])/gi,
                    B = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                    E = function(e, t) {
                        return t.toUpperCase()
                    },
                    O = /(?:Left|Right|Width)/i,
                    P = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                    M = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                    F = /,(?=[^\)]*(?:\(|$))/gi,
                    R = Math.PI / 180,
                    W = 180 / Math.PI,
                    x = {},
                    H = document,
                    k = H.createElement("div"),
                    C = H.createElement("img"),
                    A = r._internals = {
                        _specialProps: a
                    },
                    I = navigator.userAgent,
                    U = function() {
                        var e, t = I.indexOf("Android"),
                            i = H.createElement("div");
                        return h = -1 !== I.indexOf("Safari") && -1 === I.indexOf("Chrome") && (-1 === t || Number(I.substr(t + 8, 1)) > 3), _ = h && Number(I.substr(I.indexOf("Version/") + 8, 1)) < 6, c = -1 !== I.indexOf("Firefox"), /MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(I), b = parseFloat(RegExp.$1), i.innerHTML = "<a style='top:1px;opacity:.55;'>a</a>", e = i.getElementsByTagName("a")[0], e ? /^0.55/.test(e.style.opacity) : !1
                    }(),
                    V = function(e) {
                        return S.test("string" == typeof e ? e : (e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                    },
                    N = function(e) {
                        window.console && console.log(e)
                    },
                    z = "",
                    j = "",
                    X = function(e, t) {
                        t = t || k;
                        var i, o, n = t.style;
                        if (void 0 !== n[e]) return e;
                        for (e = e.charAt(0).toUpperCase() + e.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], o = 5; --o > -1 && void 0 === n[i[o] + e];);
                        return o >= 0 ? (j = 3 === o ? "ms" : i[o], z = "-" + j.toLowerCase() + "-", j + e) : null
                    },
                    Y = H.defaultView ? H.defaultView.getComputedStyle : function() {},
                    K = r.getStyle = function(e, t, i, o, n) {
                        var s;
                        return U || "opacity" !== t ? (!o && e.style[t] ? s = e.style[t] : (i = i || Y(e, null)) ? (e = i.getPropertyValue(t.replace(D, "-$1").toLowerCase()), s = e || i.length ? e : i[t]) : e.currentStyle && (i = e.currentStyle, s = i[t]), null == n || s && "none" !== s && "auto" !== s && "auto auto" !== s ? s : n) : V(e)
                    },
                    G = function(e, t, i, o, n) {
                        if ("px" === o || !o) return i;
                        if ("auto" === o || !i) return 0;
                        var s, r = O.test(t),
                            a = e,
                            l = k.style,
                            d = 0 > i;
                        return d && (i = -i), "%" === o && -1 !== t.indexOf("border") ? s = i / 100 * (r ? e.clientWidth : e.clientHeight) : (l.cssText = "border-style:solid; border-width:0; position:absolute; line-height:0;", "%" !== o && a.appendChild ? l[r ? "borderLeftWidth" : "borderTopWidth"] = i + o : (a = e.parentNode || H.body, l[r ? "width" : "height"] = i + o), a.appendChild(k), s = parseFloat(k[r ? "offsetWidth" : "offsetHeight"]), a.removeChild(k), 0 !== s || n || (s = G(e, t, i, o, !0))), d ? -s : s
                    },
                    q = function(e, t, i) {
                        if ("absolute" !== K(e, "position", i)) return 0;
                        var o = "left" === t ? "Left" : "Top",
                            n = K(e, "margin" + o, i);
                        return e["offset" + o] - (G(e, t, parseFloat(n), n.replace(g, "")) || 0)
                    },
                    Z = function(e, t) {
                        var i, o, n = {};
                        if (t = t || Y(e, null))
                            if (i = t.length)
                                for (; --i > -1;) n[t[i].replace(L, E)] = t.getPropertyValue(t[i]);
                            else
                                for (i in t) n[i] = t[i];
                        else if (t = e.currentStyle || e.style)
                            for (i in t) n[i.replace(L, E)] = t[i];
                        return U || (n.opacity = V(e)), o = Tt(e, t, !1), n.rotation = o.rotation * W, n.skewX = o.skewX * W, n.scaleX = o.scaleX, n.scaleY = o.scaleY, n.x = o.x, n.y = o.y, wt && (n.z = o.z, n.rotationX = o.rotationX * W, n.rotationY = o.rotationY * W, n.scaleZ = o.scaleZ), n.filters && delete n.filters, n
                    },
                    Q = function(e, t, i, o, n) {
                        var s, r, a, l = {},
                            d = e.style;
                        for (r in i) "cssText" !== r && "length" !== r && isNaN(r) && (t[r] !== (s = i[r]) || n && n[r]) && -1 === r.indexOf("Origin") && ("number" == typeof s || "string" == typeof s) && (l[r] = "auto" !== s || "left" !== r && "top" !== r ? "" !== s && "auto" !== s && "none" !== s || "string" != typeof t[r] || "" === t[r].replace(v, "") ? s : 0 : q(e, r), void 0 !== d[r] && (a = new ht(d, r, d[r], a)));
                        if (o)
                            for (r in o) "className" !== r && (l[r] = o[r]);
                        return {
                            difs: l,
                            firstMPT: a
                        }
                    },
                    $ = {
                        width: ["Left", "Right"],
                        height: ["Top", "Bottom"]
                    },
                    J = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                    et = function(e, t, i) {
                        var o = parseFloat("width" === t ? e.offsetWidth : e.offsetHeight),
                            n = $[t],
                            s = n.length;
                        for (i = i || Y(e, null); --s > -1;) o -= parseFloat(K(e, "padding" + n[s], i, !0)) || 0, o -= parseFloat(K(e, "border" + n[s] + "Width", i, !0)) || 0;
                        return o
                    },
                    tt = function(e, t) {
                        (null == e || "" === e || "auto" === e || "auto auto" === e) && (e = "0 0");
                        var i = e.split(" "),
                            o = -1 !== e.indexOf("left") ? "0%" : -1 !== e.indexOf("right") ? "100%" : i[0],
                            n = -1 !== e.indexOf("top") ? "0%" : -1 !== e.indexOf("bottom") ? "100%" : i[1];
                        return null == n ? n = "0" : "center" === n && (n = "50%"), ("center" === o || isNaN(parseFloat(o))) && (o = "50%"), t && (t.oxp = -1 !== o.indexOf("%"), t.oyp = -1 !== n.indexOf("%"), t.oxr = "=" === o.charAt(1), t.oyr = "=" === n.charAt(1), t.ox = parseFloat(o.replace(v, "")), t.oy = parseFloat(n.replace(v, ""))), o + " " + n + (i.length > 2 ? " " + i[2] : "")
                    },
                    it = function(e, t) {
                        return "string" == typeof e && "=" === e.charAt(1) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) : parseFloat(e) - parseFloat(t)
                    },
                    ot = function(e, t) {
                        return null == e ? t : "string" == typeof e && "=" === e.charAt(1) ? parseInt(e.charAt(0) + "1", 10) * Number(e.substr(2)) + t : parseFloat(e)
                    },
                    nt = function(e, t, i, o) {
                        var n, s, r, a, l = 1e-6;
                        return null == e ? a = t : "number" == typeof e ? a = e * R : (n = 2 * Math.PI, s = e.split("_"), r = Number(s[0].replace(v, "")) * (-1 === e.indexOf("rad") ? R : 1) - ("=" === e.charAt(1) ? 0 : t), s.length && (o && (o[i] = t + r), -1 !== e.indexOf("short") && (r %= n, r !== r % (n / 2) && (r = 0 > r ? r + n : r - n)), -1 !== e.indexOf("_cw") && 0 > r ? r = (r + 9999999999 * n) % n - (r / n | 0) * n : -1 !== e.indexOf("ccw") && r > 0 && (r = (r - 9999999999 * n) % n - (r / n | 0) * n)), a = t + r), l > a && a > -l && (a = 0), a
                    },
                    st = {
                        aqua: [0, 255, 255],
                        lime: [0, 255, 0],
                        silver: [192, 192, 192],
                        black: [0, 0, 0],
                        maroon: [128, 0, 0],
                        teal: [0, 128, 128],
                        blue: [0, 0, 255],
                        navy: [0, 0, 128],
                        white: [255, 255, 255],
                        fuchsia: [255, 0, 255],
                        olive: [128, 128, 0],
                        yellow: [255, 255, 0],
                        orange: [255, 165, 0],
                        gray: [128, 128, 128],
                        purple: [128, 0, 128],
                        green: [0, 128, 0],
                        red: [255, 0, 0],
                        pink: [255, 192, 203],
                        cyan: [0, 255, 255],
                        transparent: [255, 255, 255, 0]
                    },
                    rt = function(e, t, i) {
                        return e = 0 > e ? e + 1 : e > 1 ? e - 1 : e, 255 * (1 > 6 * e ? t + (i - t) * e * 6 : .5 > e ? i : 2 > 3 * e ? t + (i - t) * (2 / 3 - e) * 6 : t) + .5 | 0
                    },
                    at = function(e) {
                        var t, i, o, n, s, r;
                        return e && "" !== e ? "number" == typeof e ? [e >> 16, e >> 8 & 255, 255 & e] : ("," === e.charAt(e.length - 1) && (e = e.substr(0, e.length - 1)), st[e] ? st[e] : "#" === e.charAt(0) ? (4 === e.length && (t = e.charAt(1), i = e.charAt(2), o = e.charAt(3), e = "#" + t + t + i + i + o + o), e = parseInt(e.substr(1), 16), [e >> 16, e >> 8 & 255, 255 & e]) : "hsl" === e.substr(0, 3) ? (e = e.match(m), n = Number(e[0]) % 360 / 360, s = Number(e[1]) / 100, r = Number(e[2]) / 100, i = .5 >= r ? r * (s + 1) : r + s - r * s, t = 2 * r - i, e.length > 3 && (e[3] = Number(e[3])), e[0] = rt(n + 1 / 3, t, i), e[1] = rt(n, t, i), e[2] = rt(n - 1 / 3, t, i), e) : (e = e.match(m) || st.transparent, e[0] = Number(e[0]), e[1] = Number(e[1]), e[2] = Number(e[2]), e.length > 3 && (e[3] = Number(e[3])), e)) : st.black
                    },
                    lt = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
                for (l in st) lt += "|" + l + "\\b";
                lt = new RegExp(lt + ")", "gi");
                var dt = function(e, t, i, o) {
                        if (null == e) return function(e) {
                            return e
                        };
                        var n, s = t ? (e.match(lt) || [""])[0] : "",
                            r = e.split(s).join("").match(f) || [],
                            a = e.substr(0, e.indexOf(r[0])),
                            l = ")" === e.charAt(e.length - 1) ? ")" : "",
                            d = -1 !== e.indexOf(" ") ? " " : ",",
                            u = r.length,
                            h = u > 0 ? r[0].replace(m, "") : "";
                        return u ? n = t ? function(e) {
                            var t, c, _, b;
                            if ("number" == typeof e) e += h;
                            else if (o && F.test(e)) {
                                for (b = e.replace(F, "|").split("|"), _ = 0; _ < b.length; _++) b[_] = n(b[_]);
                                return b.join(",")
                            }
                            if (t = (e.match(lt) || [s])[0], c = e.split(t).join("").match(f) || [], _ = c.length, u > _--)
                                for (; ++_ < u;) c[_] = i ? c[(_ - 1) / 2 | 0] : r[_];
                            return a + c.join(d) + d + t + l + (-1 !== e.indexOf("inset") ? " inset" : "")
                        } : function(e) {
                            var t, s, c;
                            if ("number" == typeof e) e += h;
                            else if (o && F.test(e)) {
                                for (s = e.replace(F, "|").split("|"), c = 0; c < s.length; c++) s[c] = n(s[c]);
                                return s.join(",")
                            }
                            if (t = e.match(f) || [], c = t.length, u > c--)
                                for (; ++c < u;) t[c] = i ? t[(c - 1) / 2 | 0] : r[c];
                            return a + t.join(d) + l
                        } : function(e) {
                            return e
                        }
                    },
                    ut = function(e) {
                        return e = e.split(","),
                            function(t, i, o, n, s, r, a) {
                                var l, d = (i + "").split(" ");
                                for (a = {}, l = 0; 4 > l; l++) a[e[l]] = d[l] = d[l] || d[(l - 1) / 2 >> 0];
                                return n.parse(t, a, s, r)
                            }
                    },
                    ht = (A._setPluginRatio = function(e) {
                        this.plugin.setRatio(e);
                        for (var t, i, o, n, s = this.data, r = s.proxy, a = s.firstMPT, l = 1e-6; a;) t = r[a.v], a.r ? t = t > 0 ? t + .5 | 0 : t - .5 | 0 : l > t && t > -l && (t = 0), a.t[a.p] = t, a = a._next;
                        if (s.autoRotate && (s.autoRotate.rotation = r.rotation), 1 === e)
                            for (a = s.firstMPT; a;) {
                                if (i = a.t, i.type) {
                                    if (1 === i.type) {
                                        for (n = i.xs0 + i.s + i.xs1, o = 1; o < i.l; o++) n += i["xn" + o] + i["xs" + (o + 1)];
                                        i.e = n
                                    }
                                } else i.e = i.s + i.xs0;
                                a = a._next
                            }
                    }, function(e, t, i, o, n) {
                        this.t = e, this.p = t, this.v = i, this.r = n, o && (o._prev = this, this._next = o)
                    }),
                    ct = (A._parseToProxy = function(e, t, i, o, n, s) {
                        var r, a, l, d, u, h = o,
                            c = {},
                            _ = {},
                            b = i._transform,
                            m = x;
                        for (i._transform = null, x = t, o = u = i.parse(e, t, o, n), x = m, s && (i._transform = b, h && (h._prev = null, h._prev && (h._prev._next = null))); o && o !== h;) {
                            if (o.type <= 1 && (a = o.p, _[a] = o.s + o.c, c[a] = o.s, s || (d = new ht(o, "s", a, d, o.r), o.c = 0), 1 === o.type))
                                for (r = o.l; --r > 0;) l = "xn" + r, a = o.p + "_" + l, _[a] = o.data[l], c[a] = o[l], s || (d = new ht(o, l, a, d, o.rxp[l]));
                            o = o._next
                        }
                        return {
                            proxy: c,
                            end: _,
                            firstMPT: d,
                            pt: u
                        }
                    }, A.CSSPropTween = function(e, t, o, n, r, a, l, d, u, h, c) {
                        this.t = e, this.p = t, this.s = o, this.c = n, this.n = l || "css_" + t, e instanceof ct || s.push(this.n), this.r = d, this.type = a || 0, u && (this.pr = u, i = !0), this.b = void 0 === h ? o : h, this.e = void 0 === c ? o + n : c, r && (this._next = r, r._prev = this)
                    }),
                    _t = r.parseComplex = function(e, t, i, o, n, s, r, a, l, u) {
                        i = i || s || "", r = new ct(e, t, 0, 0, r, u ? 2 : 1, null, !1, a, i, o), o += "";
                        var h, c, _, b, f, v, g, S, y, w, D, L, B = i.split(", ").join(",").split(" "),
                            E = o.split(", ").join(",").split(" "),
                            O = B.length,
                            P = d !== !1;
                        for ((-1 !== o.indexOf(",") || -1 !== i.indexOf(",")) && (B = B.join(" ").replace(F, ", ").split(" "), E = E.join(" ").replace(F, ", ").split(" "), O = B.length), O !== E.length && (B = (s || "").split(" "), O = B.length), r.plugin = l, r.setRatio = u, h = 0; O > h; h++)
                            if (b = B[h], f = E[h], S = parseFloat(b), S || 0 === S) r.appendXtra("", S, it(f, S), f.replace(p, ""), P && -1 !== f.indexOf("px"), !0);
                            else if (n && ("#" === b.charAt(0) || st[b] || T.test(b))) L = "," === f.charAt(f.length - 1) ? ")," : ")", b = at(b), f = at(f), y = b.length + f.length > 6, y && !U && 0 === f[3] ? (r["xs" + r.l] += r.l ? " transparent" : "transparent", r.e = r.e.split(E[h]).join("transparent")) : (U || (y = !1), r.appendXtra(y ? "rgba(" : "rgb(", b[0], f[0] - b[0], ",", !0, !0).appendXtra("", b[1], f[1] - b[1], ",", !0).appendXtra("", b[2], f[2] - b[2], y ? "," : L, !0), y && (b = b.length < 4 ? 1 : b[3], r.appendXtra("", b, (f.length < 4 ? 1 : f[3]) - b, L, !1)));
                        else if (v = b.match(m)) {
                            if (g = f.match(p), !g || g.length !== v.length) return r;
                            for (_ = 0, c = 0; c < v.length; c++) D = v[c], w = b.indexOf(D, _), r.appendXtra(b.substr(_, w - _), Number(D), it(g[c], D), "", P && "px" === b.substr(w + D.length, 2), 0 === c), _ = w + D.length;
                            r["xs" + r.l] += b.substr(_)
                        } else r["xs" + r.l] += r.l ? " " + b : b;
                        if (-1 !== o.indexOf("=") && r.data) {
                            for (L = r.xs0 + r.data.s, h = 1; h < r.l; h++) L += r["xs" + h] + r.data["xn" + h];
                            r.e = L + r["xs" + h]
                        }
                        return r.l || (r.type = -1, r.xs0 = r.e), r.xfirst || r
                    },
                    bt = 9;
                for (l = ct.prototype, l.l = l.pr = 0; --bt > 0;) l["xn" + bt] = 0, l["xs" + bt] = "";
                l.xs0 = "", l._next = l._prev = l.xfirst = l.data = l.plugin = l.setRatio = l.rxp = null, l.appendXtra = function(e, t, i, o, n, s) {
                    var r = this,
                        a = r.l;
                    return r["xs" + a] += s && a ? " " + e : e || "", i || 0 === a || r.plugin ? (r.l++, r.type = r.setRatio ? 2 : 1, r["xs" + r.l] = o || "", a > 0 ? (r.data["xn" + a] = t + i, r.rxp["xn" + a] = n, r["xn" + a] = t, r.plugin || (r.xfirst = new ct(r, "xn" + a, t, i, r.xfirst || r, 0, r.n, n, r.pr), r.xfirst.xs0 = 0), r) : (r.data = {
                        s: t + i
                    }, r.rxp = {}, r.s = t, r.c = i, r.r = n, r)) : (r["xs" + a] += t + (o || ""), r)
                };
                var mt = function(e, t) {
                        t = t || {}, this.p = t.prefix ? X(e) || e : e, a[e] = a[this.p] = this, this.format = t.formatter || dt(t.defaultValue, t.color, t.collapsible, t.multi), t.parser && (this.parse = t.parser), this.clrs = t.color, this.multi = t.multi, this.keyword = t.keyword, this.dflt = t.defaultValue, this.pr = t.priority || 0
                    },
                    pt = A._registerComplexSpecialProp = function(e, t, i) {
                        "object" != typeof t && (t = {
                            parser: i
                        });
                        var o, n, s = e.split(","),
                            r = t.defaultValue;
                        for (i = i || [r], o = 0; o < s.length; o++) t.prefix = 0 === o && t.prefix, t.defaultValue = i[o] || r, n = new mt(s[o], t)
                    },
                    ft = function(e) {
                        if (!a[e]) {
                            var t = e.charAt(0).toUpperCase() + e.substr(1) + "Plugin";
                            pt(e, {
                                parser: function(e, i, o, n, s, r, l) {
                                    var d = (window.GreenSockGlobals || window).com.greensock.plugins[t];
                                    return d ? (d._cssRegister(), a[o].parse(e, i, o, n, s, r, l)) : (N("Error: " + t + " js file not loaded."), s)
                                }
                            })
                        }
                    };
                l = mt.prototype, l.parseComplex = function(e, t, i, o, n, s) {
                    var r, a, l, d, u, h, c = this.keyword;
                    if (this.multi && (F.test(i) || F.test(t) ? (a = t.replace(F, "|").split("|"), l = i.replace(F, "|").split("|")) : c && (a = [t], l = [i])), l) {
                        for (d = l.length > a.length ? l.length : a.length, r = 0; d > r; r++) t = a[r] = a[r] || this.dflt, i = l[r] = l[r] || this.dflt, c && (u = t.indexOf(c), h = i.indexOf(c), u !== h && (i = -1 === h ? l : a, i[r] += " " + c));
                        t = a.join(", "), i = l.join(", ")
                    }
                    return _t(e, this.p, t, i, this.clrs, this.dflt, o, this.pr, n, s)
                }, l.parse = function(e, t, i, o, s, r) {
                    return this.parseComplex(e.style, this.format(K(e, this.p, n, !1, this.dflt)), this.format(t), s, r)
                }, r.registerSpecialProp = function(e, t, i) {
                    pt(e, {
                        parser: function(e, o, n, s, r, a) {
                            var l = new ct(e, n, 0, 0, r, 2, n, !1, i);
                            return l.plugin = a, l.setRatio = t(e, o, s._tween, n), l
                        },
                        priority: i
                    })
                };
                var vt = "scaleX,scaleY,scaleZ,x,y,z,skewX,rotation,rotationX,rotationY,perspective".split(","),
                    gt = X("transform"),
                    St = z + "transform",
                    yt = X("transformOrigin"),
                    wt = null !== X("perspective"),
                    Tt = function(e, t, i) {
                        var o, n, s, a, l, d, u, h, c, _, b, m, p, f = i ? e._gsTransform || {
                                skewY: 0
                            } : {
                                skewY: 0
                            },
                            v = f.scaleX < 0,
                            g = 2e-5,
                            S = 1e5,
                            y = -Math.PI + 1e-4,
                            w = Math.PI - 1e-4,
                            T = wt ? parseFloat(K(e, yt, t, !1, "0 0 0").split(" ")[2]) || f.zOrigin || 0 : 0;
                        if (gt) o = K(e, St, t, !0);
                        else if (e.currentStyle)
                            if (o = e.currentStyle.filter.match(P), o && 4 === o.length) o = [o[0].substr(4), Number(o[2].substr(4)), Number(o[1].substr(4)), o[3].substr(4), f.x || 0, f.y || 0].join(",");
                            else {
                                if (null != f.x) return f;
                                o = ""
                            }
                        for (n = (o || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], s = n.length; --s > -1;) a = Number(n[s]), n[s] = (l = a - (a |= 0)) ? (l * S + (0 > l ? -.5 : .5) | 0) / S + a : a;
                        if (16 === n.length) {
                            var D = n[8],
                                L = n[9],
                                B = n[10],
                                E = n[12],
                                O = n[13],
                                M = n[14];
                            if (f.zOrigin && (M = -f.zOrigin, E = D * M - n[12], O = L * M - n[13], M = B * M + f.zOrigin - n[14]), !i || null == f.rotationX) {
                                var F, R, W, x, H, k, C, A = n[0],
                                    I = n[1],
                                    U = n[2],
                                    V = n[3],
                                    N = n[4],
                                    z = n[5],
                                    j = n[6],
                                    X = n[7],
                                    Y = n[11],
                                    G = f.rotationX = Math.atan2(j, B),
                                    q = y > G || G > w;
                                G && (x = Math.cos(-G), H = Math.sin(-G), F = N * x + D * H, R = z * x + L * H, W = j * x + B * H, D = N * -H + D * x, L = z * -H + L * x, B = j * -H + B * x, Y = X * -H + Y * x, N = F, z = R, j = W), G = f.rotationY = Math.atan2(D, A), G && (k = y > G || G > w, x = Math.cos(-G), H = Math.sin(-G), F = A * x - D * H, R = I * x - L * H, W = U * x - B * H, L = I * H + L * x, B = U * H + B * x, Y = V * H + Y * x, A = F, I = R, U = W), G = f.rotation = Math.atan2(I, z), G && (C = y > G || G > w, x = Math.cos(-G), H = Math.sin(-G), A = A * x + N * H, R = I * x + z * H, z = I * -H + z * x, j = U * -H + j * x, I = R), C && q ? f.rotation = f.rotationX = 0 : C && k ? f.rotation = f.rotationY = 0 : k && q && (f.rotationY = f.rotationX = 0), f.scaleX = (Math.sqrt(A * A + I * I) * S + .5 | 0) / S, f.scaleY = (Math.sqrt(z * z + L * L) * S + .5 | 0) / S, f.scaleZ = (Math.sqrt(j * j + B * B) * S + .5 | 0) / S, f.skewX = 0, f.perspective = Y ? 1 / (0 > Y ? -Y : Y) : 0, f.x = E, f.y = O, f.z = M
                            }
                        } else if (!(wt && 0 !== n.length && f.x === n[4] && f.y === n[5] && (f.rotationX || f.rotationY) || void 0 !== f.x && "none" === K(e, "display", t))) {
                            var Z = n.length >= 6,
                                Q = Z ? n[0] : 1,
                                $ = n[1] || 0,
                                J = n[2] || 0,
                                et = Z ? n[3] : 1;
                            f.x = n[4] || 0, f.y = n[5] || 0, d = Math.sqrt(Q * Q + $ * $), u = Math.sqrt(et * et + J * J), h = Q || $ ? Math.atan2($, Q) : f.rotation || 0, c = J || et ? Math.atan2(J, et) + h : f.skewX || 0, _ = d - Math.abs(f.scaleX || 0), b = u - Math.abs(f.scaleY || 0), Math.abs(c) > Math.PI / 2 && Math.abs(c) < 1.5 * Math.PI && (v ? (d *= -1, c += 0 >= h ? Math.PI : -Math.PI, h += 0 >= h ? Math.PI : -Math.PI) : (u *= -1, c += 0 >= c ? Math.PI : -Math.PI)), m = (h - f.rotation) % Math.PI, p = (c - f.skewX) % Math.PI, (void 0 === f.skewX || _ > g || -g > _ || b > g || -g > b || m > y && w > m && m * S | !1 || p > y && w > p && p * S | !1) && (f.scaleX = d, f.scaleY = u, f.rotation = h, f.skewX = c), wt && (f.rotationX = f.rotationY = f.z = 0, f.perspective = parseFloat(r.defaultTransformPerspective) || 0, f.scaleZ = 1)
                        }
                        f.zOrigin = T;
                        for (s in f) f[s] < g && f[s] > -g && (f[s] = 0);
                        return i && (e._gsTransform = f), f
                    },
                    Dt = function(e) {
                        var t, i, o = this.data,
                            n = -o.rotation,
                            s = n + o.skewX,
                            r = 1e5,
                            a = (Math.cos(n) * o.scaleX * r | 0) / r,
                            l = (Math.sin(n) * o.scaleX * r | 0) / r,
                            d = (Math.sin(s) * -o.scaleY * r | 0) / r,
                            u = (Math.cos(s) * o.scaleY * r | 0) / r,
                            h = this.t.style,
                            c = this.t.currentStyle;
                        if (c) {
                            i = l, l = -d, d = -i, t = c.filter, h.filter = "";
                            var _, m, p = this.t.offsetWidth,
                                f = this.t.offsetHeight,
                                v = "absolute" !== c.position,
                                y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + l + ", M21=" + d + ", M22=" + u,
                                w = o.x,
                                T = o.y;
                            if (null != o.ox && (_ = (o.oxp ? p * o.ox * .01 : o.ox) - p / 2, m = (o.oyp ? f * o.oy * .01 : o.oy) - f / 2, w += _ - (_ * a + m * l), T += m - (_ * d + m * u)), v) _ = p / 2, m = f / 2, y += ", Dx=" + (_ - (_ * a + m * l) + w) + ", Dy=" + (m - (_ * d + m * u) + T) + ")";
                            else {
                                var D, L, B, E = 8 > b ? 1 : -1;
                                for (_ = o.ieOffsetX || 0, m = o.ieOffsetY || 0, o.ieOffsetX = Math.round((p - ((0 > a ? -a : a) * p + (0 > l ? -l : l) * f)) / 2 + w), o.ieOffsetY = Math.round((f - ((0 > u ? -u : u) * f + (0 > d ? -d : d) * p)) / 2 + T), bt = 0; 4 > bt; bt++) L = J[bt], D = c[L], i = -1 !== D.indexOf("px") ? parseFloat(D) : G(this.t, L, parseFloat(D), D.replace(g, "")) || 0, B = i !== o[L] ? 2 > bt ? -o.ieOffsetX : -o.ieOffsetY : 2 > bt ? _ - o.ieOffsetX : m - o.ieOffsetY, h[L] = (o[L] = Math.round(i - B * (0 === bt || 2 === bt ? 1 : E))) + "px";
                                y += ", sizingMethod='auto expand')"
                            }
                            h.filter = -1 !== t.indexOf("DXImageTransform.Microsoft.Matrix(") ? t.replace(M, y) : y + " " + t, (0 === e || 1 === e) && 1 === a && 0 === l && 0 === d && 1 === u && (v && -1 === y.indexOf("Dx=0, Dy=0") || S.test(t) && 100 !== parseFloat(RegExp.$1) || -1 === t.indexOf("gradient(") && h.removeAttribute("filter"))
                        }
                    },
                    Lt = function() {
                        var e, t, i, o, n, s, r, a, l, d = this.data,
                            u = this.t.style,
                            h = d.perspective,
                            _ = d.scaleX,
                            b = 0,
                            m = 0,
                            p = 0,
                            f = 0,
                            v = d.scaleY,
                            g = 0,
                            S = 0,
                            y = 0,
                            w = 0,
                            T = d.scaleZ,
                            D = 0,
                            L = 0,
                            B = 0,
                            E = h ? -1 / h : 0,
                            O = d.rotation,
                            P = d.zOrigin,
                            M = 1e5;
                        c && (r = u.top ? "top" : u.bottom ? "bottom" : parseFloat(K(this.t, "top", null, !1)) ? "bottom" : "top", i = K(this.t, r, null, !1), a = parseFloat(i) || 0, l = i.substr((a + "").length) || "px", d._ffFix = !d._ffFix, u[r] = (d._ffFix ? a + .05 : a - .05) + l), (O || d.skewX) && (i = _ * Math.cos(O), o = v * Math.sin(O), O -= d.skewX, b = _ * -Math.sin(O), v *= Math.cos(O), _ = i, f = o), O = d.rotationY, O && (e = Math.cos(O), t = Math.sin(O), i = _ * e, o = f * e, n = T * -t, s = E * -t, m = _ * t, g = f * t, T *= e, E *= e, _ = i, f = o, y = n, L = s), O = d.rotationX, O && (e = Math.cos(O), t = Math.sin(O), i = b * e + m * t, o = v * e + g * t, n = w * e + T * t, s = B * e + E * t, m = b * -t + m * e, g = v * -t + g * e, T = w * -t + T * e, E = B * -t + E * e, b = i, v = o, w = n, B = s), P && (D -= P, p = m * D, S = g * D, D = T * D + P), p = (i = (p += d.x) - (p |= 0)) ? (i * M + (0 > i ? -.5 : .5) | 0) / M + p : p, S = (i = (S += d.y) - (S |= 0)) ? (i * M + (0 > i ? -.5 : .5) | 0) / M + S : S, D = (i = (D += d.z) - (D |= 0)) ? (i * M + (0 > i ? -.5 : .5) | 0) / M + D : D, u[gt] = "matrix3d(" + [(_ * M | 0) / M, (f * M | 0) / M, (y * M | 0) / M, (L * M | 0) / M, (b * M | 0) / M, (v * M | 0) / M, (w * M | 0) / M, (B * M | 0) / M, (m * M | 0) / M, (g * M | 0) / M, (T * M | 0) / M, (E * M | 0) / M, p, S, D, h ? 1 + -D / h : 1].join(",") + ")"
                    },
                    Bt = function() {
                        var e, t, i, o, n, s, r, a, l, d = this.data,
                            u = this.t,
                            h = u.style;
                        c && (e = h.top ? "top" : h.bottom ? "bottom" : parseFloat(K(u, "top", null, !1)) ? "bottom" : "top", t = K(u, e, null, !1), i = parseFloat(t) || 0, o = t.substr((i + "").length) || "px", d._ffFix = !d._ffFix, h[e] = (d._ffFix ? i + .05 : i - .05) + o), d.rotation || d.skewX ? (n = d.rotation, s = n - d.skewX, r = 1e5, a = d.scaleX * r, l = d.scaleY * r, h[gt] = "matrix(" + (Math.cos(n) * a | 0) / r + "," + (Math.sin(n) * a | 0) / r + "," + (Math.sin(s) * -l | 0) / r + "," + (Math.cos(s) * l | 0) / r + "," + d.x + "," + d.y + ")") : h[gt] = "matrix(" + d.scaleX + ",0,0," + d.scaleY + "," + d.x + "," + d.y + ")"
                    };
                pt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation", {
                    parser: function(e, t, i, o, s, r, a) {
                        if (o._transform) return s;
                        var l, d, u, h, c, _, b, m = o._transform = Tt(e, n, !0),
                            p = e.style,
                            f = 1e-6,
                            v = vt.length,
                            g = a,
                            S = {};
                        if ("string" == typeof g.transform && gt) u = p.cssText, p[gt] = g.transform, p.display = "block", l = Tt(e, null, !1), p.cssText = u;
                        else if ("object" == typeof g) {
                            if (l = {
                                    scaleX: ot(null != g.scaleX ? g.scaleX : g.scale, m.scaleX),
                                    scaleY: ot(null != g.scaleY ? g.scaleY : g.scale, m.scaleY),
                                    scaleZ: ot(null != g.scaleZ ? g.scaleZ : g.scale, m.scaleZ),
                                    x: ot(g.x, m.x),
                                    y: ot(g.y, m.y),
                                    z: ot(g.z, m.z),
                                    perspective: ot(g.transformPerspective, m.perspective)
                                }, b = g.directionalRotation, null != b)
                                if ("object" == typeof b)
                                    for (u in b) g[u] = b[u];
                                else g.rotation = b;
                            l.rotation = nt("rotation" in g ? g.rotation : "shortRotation" in g ? g.shortRotation + "_short" : "rotationZ" in g ? g.rotationZ : m.rotation * W, m.rotation, "rotation", S), wt && (l.rotationX = nt("rotationX" in g ? g.rotationX : "shortRotationX" in g ? g.shortRotationX + "_short" : m.rotationX * W || 0, m.rotationX, "rotationX", S), l.rotationY = nt("rotationY" in g ? g.rotationY : "shortRotationY" in g ? g.shortRotationY + "_short" : m.rotationY * W || 0, m.rotationY, "rotationY", S)), l.skewX = null == g.skewX ? m.skewX : nt(g.skewX, m.skewX), l.skewY = null == g.skewY ? m.skewY : nt(g.skewY, m.skewY), (d = l.skewY - m.skewY) && (l.skewX += d, l.rotation += d)
                        }
                        for (c = m.z || m.rotationX || m.rotationY || l.z || l.rotationX || l.rotationY || l.perspective, c || null == g.scale || (l.scaleZ = 1); --v > -1;) i = vt[v], h = l[i] - m[i], (h > f || -f > h || null != x[i]) && (_ = !0, s = new ct(m, i, m[i], h, s), i in S && (s.e = S[i]), s.xs0 = 0, s.plugin = r, o._overwriteProps.push(s.n));
                        return h = g.transformOrigin, (h || wt && c && m.zOrigin) && (gt ? (_ = !0, h = (h || K(e, i, n, !1, "50% 50%")) + "", i = yt, s = new ct(p, i, 0, 0, s, -1, "css_transformOrigin"), s.b = p[i], s.plugin = r, wt ? (u = m.zOrigin, h = h.split(" "), m.zOrigin = (h.length > 2 ? parseFloat(h[2]) : u) || 0, s.xs0 = s.e = p[i] = h[0] + " " + (h[1] || "50%") + " 0px", s = new ct(m, "zOrigin", 0, 0, s, -1, s.n), s.b = u, s.xs0 = s.e = m.zOrigin) : s.xs0 = s.e = p[i] = h) : tt(h + "", m)), _ && (o._transformType = c || 3 === this._transformType ? 3 : 2), s
                    },
                    prefix: !0
                }), pt("boxShadow", {
                    defaultValue: "0px 0px 0px 0px #999",
                    prefix: !0,
                    color: !0,
                    multi: !0,
                    keyword: "inset"
                }), pt("borderRadius", {
                    defaultValue: "0px",
                    parser: function(e, t, i, s, r) {
                        t = this.format(t);
                        var a, l, d, u, h, c, _, b, m, p, f, v, g, S, y, w, T = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                            D = e.style;
                        for (m = parseFloat(e.offsetWidth), p = parseFloat(e.offsetHeight), a = t.split(" "), l = 0; l < T.length; l++) this.p.indexOf("border") && (T[l] = X(T[l])), h = u = K(e, T[l], n, !1, "0px"), -1 !== h.indexOf(" ") && (u = h.split(" "), h = u[0], u = u[1]), c = d = a[l], _ = parseFloat(h), v = h.substr((_ + "").length), g = "=" === c.charAt(1), g ? (b = parseInt(c.charAt(0) + "1", 10), c = c.substr(2), b *= parseFloat(c), f = c.substr((b + "").length - (0 > b ? 1 : 0)) || "") : (b = parseFloat(c), f = c.substr((b + "").length)), "" === f && (f = o[i] || v), f !== v && (S = G(e, "borderLeft", _, v), y = G(e, "borderTop", _, v), "%" === f ? (h = S / m * 100 + "%", u = y / p * 100 + "%") : "em" === f ? (w = G(e, "borderLeft", 1, "em"), h = S / w + "em", u = y / w + "em") : (h = S + "px", u = y + "px"), g && (c = parseFloat(h) + b + f, d = parseFloat(u) + b + f)), r = _t(D, T[l], h + " " + u, c + " " + d, !1, "0px", r);
                        return r
                    },
                    prefix: !0,
                    formatter: dt("0px 0px 0px 0px", !1, !0)
                }), pt("backgroundPosition", {
                    defaultValue: "0 0",
                    parser: function(e, t, i, o, s, r) {
                        var a, l, d, u, h, c, _ = "background-position",
                            m = n || Y(e, null),
                            p = this.format((m ? b ? m.getPropertyValue(_ + "-x") + " " + m.getPropertyValue(_ + "-y") : m.getPropertyValue(_) : e.currentStyle.backgroundPositionX + " " + e.currentStyle.backgroundPositionY) || "0 0"),
                            f = this.format(t);
                        if (-1 !== p.indexOf("%") != (-1 !== f.indexOf("%")) && (c = K(e, "backgroundImage").replace(B, ""), c && "none" !== c)) {
                            for (a = p.split(" "), l = f.split(" "), C.setAttribute("src", c), d = 2; --d > -1;) p = a[d], u = -1 !== p.indexOf("%"), u !== (-1 !== l[d].indexOf("%")) && (h = 0 === d ? e.offsetWidth - C.width : e.offsetHeight - C.height, a[d] = u ? parseFloat(p) / 100 * h + "px" : parseFloat(p) / h * 100 + "%");
                            p = a.join(" ")
                        }
                        return this.parseComplex(e.style, p, f, s, r)
                    },
                    formatter: tt
                }), pt("backgroundSize", {
                    defaultValue: "0 0",
                    formatter: tt
                }), pt("perspective", {
                    defaultValue: "0px",
                    prefix: !0
                }), pt("perspectiveOrigin", {
                    defaultValue: "50% 50%",
                    prefix: !0
                }), pt("transformStyle", {
                    prefix: !0
                }), pt("backfaceVisibility", {
                    prefix: !0
                }), pt("margin", {
                    parser: ut("marginTop,marginRight,marginBottom,marginLeft")
                }), pt("padding", {
                    parser: ut("paddingTop,paddingRight,paddingBottom,paddingLeft")
                }), pt("clip", {
                    defaultValue: "rect(0px,0px,0px,0px)",
                    parser: function(e, t, i, o, s, r) {
                        var a, l, d;
                        return 9 > b ? (l = e.currentStyle, d = 8 > b ? " " : ",", a = "rect(" + l.clipTop + d + l.clipRight + d + l.clipBottom + d + l.clipLeft + ")", t = this.format(t).split(",").join(d)) : (a = this.format(K(e, this.p, n, !1, this.dflt)), t = this.format(t)), this.parseComplex(e.style, a, t, s, r)
                    }
                }), pt("textShadow", {
                    defaultValue: "0px 0px 0px #999",
                    color: !0,
                    multi: !0
                }), pt("autoRound,strictUnits", {
                    parser: function(e, t, i, o, n) {
                        return n
                    }
                }), pt("border", {
                    defaultValue: "0px solid #000",
                    parser: function(e, t, i, o, s, r) {
                        return this.parseComplex(e.style, this.format(K(e, "borderTopWidth", n, !1, "0px") + " " + K(e, "borderTopStyle", n, !1, "solid") + " " + K(e, "borderTopColor", n, !1, "#000")), this.format(t), s, r)
                    },
                    color: !0,
                    formatter: function(e) {
                        var t = e.split(" ");
                        return t[0] + " " + (t[1] || "solid") + " " + (e.match(lt) || ["#000"])[0]
                    }
                }), pt("float,cssFloat,styleFloat", {
                    parser: function(e, t, i, o, n) {
                        var s = e.style,
                            r = "cssFloat" in s ? "cssFloat" : "styleFloat";
                        return new ct(s, r, 0, 0, n, -1, i, !1, 0, s[r], t)
                    }
                });
                var Et = function(e) {
                    var t, i = this.t,
                        o = i.filter,
                        n = this.s + this.c * e | 0;
                    100 === n && (-1 === o.indexOf("atrix(") && -1 === o.indexOf("radient(") ? (i.removeAttribute("filter"), t = !K(this.data, "filter")) : (i.filter = o.replace(w, ""), t = !0)), t || (this.xn1 && (i.filter = o = o || "alpha(opacity=100)"), -1 === o.indexOf("opacity") ? i.filter += " alpha(opacity=" + n + ")" : i.filter = o.replace(S, "opacity=" + n))
                };
                pt("opacity,alpha,autoAlpha", {
                    defaultValue: "1",
                    parser: function(e, t, i, o, s, r) {
                        var a, l = parseFloat(K(e, "opacity", n, !1, "1")),
                            d = e.style;
                        return t = parseFloat(t), "autoAlpha" === i && (a = K(e, "visibility", n), 1 === l && "hidden" === a && 0 !== t && (l = 0), s = new ct(d, "visibility", 0, 0, s, -1, null, !1, 0, 0 !== l ? "visible" : "hidden", 0 === t ? "hidden" : "visible"), s.xs0 = "visible", o._overwriteProps.push(s.n)), U ? s = new ct(d, "opacity", l, t - l, s) : (s = new ct(d, "opacity", 100 * l, 100 * (t - l), s), s.xn1 = "autoAlpha" === i ? 1 : 0, d.zoom = 1, s.type = 2, s.b = "alpha(opacity=" + s.s + ")", s.e = "alpha(opacity=" + (s.s + s.c) + ")", s.data = e, s.plugin = r, s.setRatio = Et), s
                    }
                });
                var Ot = function(e, t) {
                        t && (e.removeProperty ? e.removeProperty(t.replace(D, "-$1").toLowerCase()) : e.removeAttribute(t))
                    },
                    Pt = function(e) {
                        if (this.t._gsClassPT = this, 1 === e || 0 === e) {
                            this.t.className = 0 === e ? this.b : this.e;
                            for (var t = this.data, i = this.t.style; t;) t.v ? i[t.p] = t.v : Ot(i, t.p), t = t._next;
                            1 === e && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                        } else this.t.className !== this.e && (this.t.className = this.e)
                    };
                pt("className", {
                    parser: function(e, t, o, s, r, a, l) {
                        var d, u, h, c, _, b = e.className,
                            m = e.style.cssText;
                        if (r = s._classNamePT = new ct(e, o, 0, 0, r, 2), r.setRatio = Pt, r.pr = -11, i = !0, r.b = b, u = Z(e, n), h = e._gsClassPT) {
                            for (c = {}, _ = h.data; _;) c[_.p] = 1, _ = _._next;
                            h.setRatio(1)
                        }
                        return e._gsClassPT = r, r.e = "=" !== t.charAt(1) ? t : b.replace(new RegExp("\\s*\\b" + t.substr(2) + "\\b"), "") + ("+" === t.charAt(0) ? " " + t.substr(2) : ""), s._tween._duration && (e.className = r.e, d = Q(e, u, Z(e), l, c), e.className = b, r.data = d.firstMPT, e.style.cssText = m, r = r.xfirst = s.parse(e, d.difs, r, a)), r
                    }
                });
                var Mt = function(e) {
                    if ((1 === e || 0 === e) && this.data._totalTime === this.data._totalDuration)
                        for (var t, i = "all" === this.e, o = this.t.style, n = i ? o.cssText.split(";") : this.e.split(","), s = n.length, r = a.transform.parse; --s > -1;) t = n[s], i && (t = t.substr(0, t.indexOf(":")).split(" ").join("")), a[t] && (t = a[t].parse === r ? gt : a[t].p), Ot(o, t)
                };
                for (pt("clearProps", {
                        parser: function(e, t, o, n, s) {
                            return s = new ct(e, o, 0, 0, s, 2), s.setRatio = Mt, s.e = t, s.pr = -10, s.data = n._tween, i = !0, s
                        }
                    }), l = "bezier,throwProps,physicsProps,physics2D".split(","), bt = l.length; bt--;) ft(l[bt]);
                l = r.prototype, l._firstPT = null, l._onInitTween = function(e, t, a) {
                    if (!e.nodeType) return !1;
                    this._target = e, this._tween = a, this._vars = t, d = t.autoRound, i = !1, o = t.suffixMap || r.suffixMap, n = Y(e, ""), s = this._overwriteProps;
                    var l, c, b, m, p, f, v, g, S, w = e.style;
                    if (u && "" === w.zIndex && (l = K(e, "zIndex", n), ("auto" === l || "" === l) && (w.zIndex = 0)), "string" == typeof t && (m = w.cssText, l = Z(e, n), w.cssText = m + ";" + t, l = Q(e, l, Z(e)).difs, !U && y.test(t) && (l.opacity = parseFloat(RegExp.$1)), t = l, w.cssText = m), this._firstPT = c = this.parse(e, t, null), this._transformType) {
                        for (S = 3 === this._transformType, gt ? h && (u = !0, "" === w.zIndex && (v = K(e, "zIndex", n), ("auto" === v || "" === v) && (w.zIndex = 0)), _ && (w.WebkitBackfaceVisibility = this._vars.WebkitBackfaceVisibility || (S ? "visible" : "hidden"))) : w.zoom = 1, b = c; b && b._next;) b = b._next;
                        g = new ct(e, "transform", 0, 0, null, 2), this._linkCSSP(g, null, b), g.setRatio = S && wt ? Lt : gt ? Bt : Dt, g.data = this._transform || Tt(e, n, !0), s.pop()
                    }
                    if (i) {
                        for (; c;) {
                            for (f = c._next, b = m; b && b.pr > c.pr;) b = b._next;
                            (c._prev = b ? b._prev : p) ? c._prev._next = c: m = c, (c._next = b) ? b._prev = c : p = c, c = f
                        }
                        this._firstPT = m
                    }
                    return !0
                }, l.parse = function(e, t, i, s) {
                    var r, l, u, h, c, _, b, m, p, f, v = e.style;
                    for (r in t) _ = t[r], l = a[r], l ? i = l.parse(e, _, r, this, i, s, t) : (c = K(e, r, n) + "", p = "string" == typeof _, "color" === r || "fill" === r || "stroke" === r || -1 !== r.indexOf("Color") || p && T.test(_) ? (p || (_ = at(_), _ = (_.length > 3 ? "rgba(" : "rgb(") + _.join(",") + ")"), i = _t(v, r, c, _, !0, "transparent", i, 0, s)) : !p || -1 === _.indexOf(" ") && -1 === _.indexOf(",") ? (u = parseFloat(c), b = u || 0 === u ? c.substr((u + "").length) : "", ("" === c || "auto" === c) && ("width" === r || "height" === r ? (u = et(e, r, n), b = "px") : "left" === r || "top" === r ? (u = q(e, r, n), b = "px") : (u = "opacity" !== r ? 0 : 1, b = "")), f = p && "=" === _.charAt(1), f ? (h = parseInt(_.charAt(0) + "1", 10), _ = _.substr(2), h *= parseFloat(_), m = _.replace(g, "")) : (h = parseFloat(_), m = p ? _.substr((h + "").length) || "" : ""), "" === m && (m = o[r] || b), _ = h || 0 === h ? (f ? h + u : h) + m : t[r], b !== m && "" !== m && (h || 0 === h) && (u || 0 === u) && (u = G(e, r, u, b), "%" === m ? (u /= G(e, r, 100, "%") / 100, u > 100 && (u = 100), t.strictUnits !== !0 && (c = u + "%")) : "em" === m ? u /= G(e, r, 1, "em") : (h = G(e, r, h, m), m = "px"), f && (h || 0 === h) && (_ = h + u + m)), f && (h += u), !u && 0 !== u || !h && 0 !== h ? void 0 !== v[r] && (_ || _ + "" != "NaN" && null != _) ? (i = new ct(v, r, h || u || 0, 0, i, -1, "css_" + r, !1, 0, c, _), i.xs0 = "none" !== _ || "display" !== r && -1 === r.indexOf("Style") ? _ : c) : N("invalid " + r + " tween value: " + t[r]) : (i = new ct(v, r, u, h - u, i, 0, "css_" + r, d !== !1 && ("px" === m || "zIndex" === r), 0, c, _), i.xs0 = m)) : i = _t(v, r, c, _, !0, null, i, 0, s)), s && i && !i.plugin && (i.plugin = s);
                    return i
                }, l.setRatio = function(e) {
                    var t, i, o, n = this._firstPT,
                        s = 1e-6;
                    if (1 !== e || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                        if (e || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                            for (; n;) {
                                if (t = n.c * e + n.s, n.r ? t = t > 0 ? t + .5 | 0 : t - .5 | 0 : s > t && t > -s && (t = 0), n.type)
                                    if (1 === n.type)
                                        if (o = n.l, 2 === o) n.t[n.p] = n.xs0 + t + n.xs1 + n.xn1 + n.xs2;
                                        else if (3 === o) n.t[n.p] = n.xs0 + t + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3;
                                else if (4 === o) n.t[n.p] = n.xs0 + t + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3 + n.xn3 + n.xs4;
                                else if (5 === o) n.t[n.p] = n.xs0 + t + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3 + n.xn3 + n.xs4 + n.xn4 + n.xs5;
                                else {
                                    for (i = n.xs0 + t + n.xs1, o = 1; o < n.l; o++) i += n["xn" + o] + n["xs" + (o + 1)];
                                    n.t[n.p] = i
                                } else -1 === n.type ? n.t[n.p] = n.xs0 : n.setRatio && n.setRatio(e);
                                else n.t[n.p] = t + n.xs0;
                                n = n._next
                            } else
                                for (; n;) 2 !== n.type ? n.t[n.p] = n.b : n.setRatio(e), n = n._next;
                        else
                            for (; n;) 2 !== n.type ? n.t[n.p] = n.e : n.setRatio(e), n = n._next
                }, l._enableTransforms = function(e) {
                    this._transformType = e || 3 === this._transformType ? 3 : 2
                }, l._linkCSSP = function(e, t, i, o) {
                    return e && (t && (t._prev = e), e._next && (e._next._prev = e._prev), i ? i._next = e : o || null !== this._firstPT || (this._firstPT = e), e._prev ? e._prev._next = e._next : this._firstPT === e && (this._firstPT = e._next), e._next = t, e._prev = i), e
                }, l._kill = function(t) {
                    var i, o, n, s = t;
                    if (t.css_autoAlpha || t.css_alpha) {
                        s = {};
                        for (o in t) s[o] = t[o];
                        s.css_opacity = 1, s.css_autoAlpha && (s.css_visibility = 1)
                    }
                    return t.css_className && (i = this._classNamePT) && (n = i.xfirst, n && n._prev ? this._linkCSSP(n._prev, i._next, n._prev._prev) : n === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, n._prev), this._classNamePT = null), e.prototype._kill.call(this, s)
                };
                var Ft = function(e, t, i) {
                    var o, n, s, r;
                    if (e.slice)
                        for (n = e.length; --n > -1;) Ft(e[n], t, i);
                    else
                        for (o = e.childNodes, n = o.length; --n > -1;) s = o[n], r = s.type, s.style && (t.push(Z(s)), i && i.push(s)), 1 !== r && 9 !== r && 11 !== r || !s.childNodes.length || Ft(s, t, i)
                };
                return r.cascadeTo = function(e, i, o) {
                    var n, s, r, a = t.to(e, i, o),
                        l = [a],
                        d = [],
                        u = [],
                        h = [],
                        c = t._internals.reservedProps;
                    for (e = a._targets || a.target, Ft(e, d, h), a.render(i, !0), Ft(e, u), a.render(0, !0), a._enabled(!0), n = h.length; --n > -1;)
                        if (s = Q(h[n], d[n], u[n]), s.firstMPT) {
                            s = s.difs;
                            for (r in o) c[r] && (s[r] = o[r]);
                            l.push(t.to(h[n], i, s))
                        }
                    return l
                }, e.activate([r]), r
            }, !0),
            function() {
                var e = window._gsDefine.plugin({
                        propName: "roundProps",
                        priority: -1,
                        API: 2,
                        init: function(e, t, i) {
                            return this._tween = i, !0
                        }
                    }),
                    t = e.prototype;
                t._onInitAllProps = function() {
                    for (var e, t, i, o = this._tween, n = o.vars.roundProps instanceof Array ? o.vars.roundProps : o.vars.roundProps.split(","), s = n.length, r = {}, a = o._propLookup.roundProps; --s > -1;) r[n[s]] = 1;
                    for (s = n.length; --s > -1;)
                        for (e = n[s], t = o._firstPT; t;) i = t._next, t.pg ? t.t._roundProps(r, !0) : t.n === e && (this._add(t.t, e, t.s, t.c), i && (i._prev = t._prev), t._prev ? t._prev._next = i : o._firstPT === t && (o._firstPT = i), t._next = t._prev = null, o._propLookup[e] = a), t = i;
                    return !1
                }, t._add = function(e, t, i, o) {
                    this._addTween(e, t, i, i + o, t, !0), this._overwriteProps.push(t)
                }
            }(), window._gsDefine.plugin({
                propName: "attr",
                API: 2,
                init: function(e, t) {
                    var i;
                    if ("function" != typeof e.setAttribute) return !1;
                    this._target = e, this._proxy = {};
                    for (i in t) this._addTween(this._proxy, i, parseFloat(e.getAttribute(i)), t[i], i), this._overwriteProps.push(i);
                    return !0
                },
                set: function(e) {
                    this._super.setRatio.call(this, e);
                    for (var t, i = this._overwriteProps, o = i.length; --o > -1;) t = i[o], this._target.setAttribute(t, this._proxy[t] + "")
                }
            }), window._gsDefine.plugin({
                propName: "directionalRotation",
                API: 2,
                init: function(e, t) {
                    "object" != typeof t && (t = {
                        rotation: t
                    }), this.finals = {};
                    var i, o, n, s, r, a, l = t.useRadians === !0 ? 2 * Math.PI : 360,
                        d = 1e-6;
                    for (i in t) "useRadians" !== i && (a = (t[i] + "").split("_"), o = a[0], n = parseFloat("function" != typeof e[i] ? e[i] : e[i.indexOf("set") || "function" != typeof e["get" + i.substr(3)] ? i : "get" + i.substr(3)]()), s = this.finals[i] = "string" == typeof o && "=" === o.charAt(1) ? n + parseInt(o.charAt(0) + "1", 10) * Number(o.substr(2)) : Number(o) || 0, r = s - n, a.length && (o = a.join("_"), -1 !== o.indexOf("short") && (r %= l, r !== r % (l / 2) && (r = 0 > r ? r + l : r - l)), -1 !== o.indexOf("_cw") && 0 > r ? r = (r + 9999999999 * l) % l - (r / l | 0) * l : -1 !== o.indexOf("ccw") && r > 0 && (r = (r - 9999999999 * l) % l - (r / l | 0) * l)), (r > d || -d > r) && (this._addTween(e, i, n, n + r, i), this._overwriteProps.push(i)));
                    return !0
                },
                set: function(e) {
                    var t;
                    if (1 !== e) this._super.setRatio.call(this, e);
                    else
                        for (t = this._firstPT; t;) t.f ? t.t[t.p](this.finals[t.p]) : t.t[t.p] = this.finals[t.p], t = t._next
                }
            })._autoCSS = !0, window._gsDefine("easing.Back", ["easing.Ease"], function(e) {
                var t, i, o, n = window.GreenSockGlobals || window,
                    s = n.com.greensock,
                    r = 2 * Math.PI,
                    a = Math.PI / 2,
                    l = s._class,
                    d = function(t, i) {
                        var o = l("easing." + t, function() {}, !0),
                            n = o.prototype = new e;
                        return n.constructor = o, n.getRatio = i, o
                    },
                    u = e.register || function() {},
                    h = function(e, t, i, o) {
                        var n = l("easing." + e, {
                            easeOut: new t,
                            easeIn: new i,
                            easeInOut: new o
                        }, !0);
                        return u(n, e), n
                    },
                    c = function(e, t, i) {
                        this.t = e, this.v = t, i && (this.next = i, i.prev = this, this.c = i.v - t, this.gap = i.t - e)
                    },
                    _ = function(t, i) {
                        var o = l("easing." + t, function(e) {
                                this._p1 = e || 0 === e ? e : 1.70158, this._p2 = 1.525 * this._p1
                            }, !0),
                            n = o.prototype = new e;
                        return n.constructor = o, n.getRatio = i, n.config = function(e) {
                            return new o(e)
                        }, o
                    },
                    b = h("Back", _("BackOut", function(e) {
                        return (e -= 1) * e * ((this._p1 + 1) * e + this._p1) + 1
                    }), _("BackIn", function(e) {
                        return e * e * ((this._p1 + 1) * e - this._p1)
                    }), _("BackInOut", function(e) {
                        return (e *= 2) < 1 ? .5 * e * e * ((this._p2 + 1) * e - this._p2) : .5 * ((e -= 2) * e * ((this._p2 + 1) * e + this._p2) + 2)
                    })),
                    m = l("easing.SlowMo", function(e, t, i) {
                        t = t || 0 === t ? t : .7, null == e ? e = .7 : e > 1 && (e = 1), this._p = 1 !== e ? t : 0, this._p1 = (1 - e) / 2, this._p2 = e, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0
                    }, !0),
                    p = m.prototype = new e;
                return p.constructor = m, p.getRatio = function(e) {
                    var t = e + (.5 - e) * this._p;
                    return e < this._p1 ? this._calcEnd ? 1 - (e = 1 - e / this._p1) * e : t - (e = 1 - e / this._p1) * e * e * e * t : e > this._p3 ? this._calcEnd ? 1 - (e = (e - this._p3) / this._p1) * e : t + (e - t) * (e = (e - this._p3) / this._p1) * e * e * e : this._calcEnd ? 1 : t
                }, m.ease = new m(.7, .7), p.config = m.config = function(e, t, i) {
                    return new m(e, t, i)
                }, t = l("easing.SteppedEase", function(e) {
                    e = e || 1, this._p1 = 1 / e, this._p2 = e + 1
                }, !0), p = t.prototype = new e, p.constructor = t, p.getRatio = function(e) {
                    return 0 > e ? e = 0 : e >= 1 && (e = .999999999), (this._p2 * e >> 0) * this._p1
                }, p.config = t.config = function(e) {
                    return new t(e)
                }, i = l("easing.RoughEase", function(t) {
                    t = t || {};
                    for (var i, o, n, s, r, a, l = t.taper || "none", d = [], u = 0, h = 0 | (t.points || 20), _ = h, b = t.randomize !== !1, m = t.clamp === !0, p = t.template instanceof e ? t.template : null, f = "number" == typeof t.strength ? .4 * t.strength : .4; --_ > -1;) i = b ? Math.random() : 1 / h * _, o = p ? p.getRatio(i) : i, "none" === l ? n = f : "out" === l ? (s = 1 - i, n = s * s * f) : "in" === l ? n = i * i * f : .5 > i ? (s = 2 * i, n = s * s * .5 * f) : (s = 2 * (1 - i), n = s * s * .5 * f), b ? o += Math.random() * n - .5 * n : _ % 2 ? o += .5 * n : o -= .5 * n, m && (o > 1 ? o = 1 : 0 > o && (o = 0)), d[u++] = {
                        x: i,
                        y: o
                    };
                    for (d.sort(function(e, t) {
                            return e.x - t.x
                        }), a = new c(1, 1, null), _ = h; --_ > -1;) r = d[_], a = new c(r.x, r.y, a);
                    this._prev = new c(0, 0, 0 !== a.t ? a : a.next)
                }, !0), p = i.prototype = new e, p.constructor = i, p.getRatio = function(e) {
                    var t = this._prev;
                    if (e > t.t) {
                        for (; t.next && e >= t.t;) t = t.next;
                        t = t.prev
                    } else
                        for (; t.prev && e <= t.t;) t = t.prev;
                    return this._prev = t, t.v + (e - t.t) / t.gap * t.c
                }, p.config = function(e) {
                    return new i(e)
                }, i.ease = new i, h("Bounce", d("BounceOut", function(e) {
                    return 1 / 2.75 > e ? 7.5625 * e * e : 2 / 2.75 > e ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : 2.5 / 2.75 > e ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
                }), d("BounceIn", function(e) {
                    return (e = 1 - e) < 1 / 2.75 ? 1 - 7.5625 * e * e : 2 / 2.75 > e ? 1 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : 2.5 / 2.75 > e ? 1 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 1 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
                }), d("BounceInOut", function(e) {
                    var t = .5 > e;
                    return e = t ? 1 - 2 * e : 2 * e - 1, e = 1 / 2.75 > e ? 7.5625 * e * e : 2 / 2.75 > e ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : 2.5 / 2.75 > e ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375, t ? .5 * (1 - e) : .5 * e + .5
                })), h("Circ", d("CircOut", function(e) {
                    return Math.sqrt(1 - (e -= 1) * e)
                }), d("CircIn", function(e) {
                    return -(Math.sqrt(1 - e * e) - 1)
                }), d("CircInOut", function(e) {
                    return (e *= 2) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
                })), o = function(t, i, o) {
                    var n = l("easing." + t, function(e, t) {
                            this._p1 = e || 1, this._p2 = t || o, this._p3 = this._p2 / r * (Math.asin(1 / this._p1) || 0)
                        }, !0),
                        s = n.prototype = new e;
                    return s.constructor = n, s.getRatio = i, s.config = function(e, t) {
                        return new n(e, t)
                    }, n
                }, h("Elastic", o("ElasticOut", function(e) {
                    return this._p1 * Math.pow(2, -10 * e) * Math.sin((e - this._p3) * r / this._p2) + 1
                }, .3), o("ElasticIn", function(e) {
                    return -(this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * r / this._p2))
                }, .3), o("ElasticInOut", function(e) {
                    return (e *= 2) < 1 ? -.5 * this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * r / this._p2) : this._p1 * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - this._p3) * r / this._p2) * .5 + 1
                }, .45)), h("Expo", d("ExpoOut", function(e) {
                    return 1 - Math.pow(2, -10 * e)
                }), d("ExpoIn", function(e) {
                    return Math.pow(2, 10 * (e - 1)) - .001
                }), d("ExpoInOut", function(e) {
                    return (e *= 2) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
                })), h("Sine", d("SineOut", function(e) {
                    return Math.sin(e * a)
                }), d("SineIn", function(e) {
                    return -Math.cos(e * a) + 1
                }), d("SineInOut", function(e) {
                    return -.5 * (Math.cos(Math.PI * e) - 1)
                })), l("easing.EaseLookup", {
                    find: function(t) {
                        return e.map[t]
                    }
                }, !0), u(n.SlowMo, "SlowMo", "ease,"), u(i, "RoughEase", "ease,"), u(t, "SteppedEase", "ease,"), b
            }, !0)
    }),
    function(e) {
        "use strict";
        var t, i, o, n, s, r = e.GreenSockGlobals || e,
            a = function(e) {
                var t, i = e.split("."),
                    o = r;
                for (t = 0; t < i.length; t++) o[i[t]] = o = o[i[t]] || {};
                return o
            },
            l = a("com.greensock"),
            d = [].slice,
            u = function() {},
            h = {},
            c = function(t, i, o, n) {
                this.sc = h[t] ? h[t].sc : [], h[t] = this, this.gsClass = null, this.func = o;
                var s = [];
                this.check = function(l) {
                    for (var d, u, _, b, m = i.length, p = m; --m > -1;)(d = h[i[m]] || new c(i[m], [])).gsClass ? (s[m] = d.gsClass, p--) : l && d.sc.push(this);
                    if (0 === p && o)
                        for (u = ("com.greensock." + t).split("."), _ = u.pop(), b = a(u.join("."))[_] = this.gsClass = o.apply(o, s), n && (r[_] = b, "function" == typeof define && define.amd ? define((e.GreenSockAMDPath ? e.GreenSockAMDPath + "/" : "") + t.split(".").join("/"), [], function() {
                                return b
                            }) : "undefined" != typeof module && module.exports && (module.exports = b)), m = 0; m < this.sc.length; m++) this.sc[m].check()
                }, this.check(!0)
            },
            _ = e._gsDefine = function(e, t, i, o) {
                return new c(e, t, i, o)
            },
            b = l._class = function(e, t, i) {
                return t = t || function() {}, _(e, [], function() {
                    return t
                }, i), t
            };
        _.globals = r;
        var m = [0, 0, 1, 1],
            p = [],
            f = b("easing.Ease", function(e, t, i, o) {
                this._func = e, this._type = i || 0, this._power = o || 0, this._params = t ? m.concat(t) : m
            }, !0),
            v = f.map = {},
            g = f.register = function(e, t, i, o) {
                for (var n, s, r, a, d = t.split(","), u = d.length, h = (i || "easeIn,easeOut,easeInOut").split(","); --u > -1;)
                    for (s = d[u], n = o ? b("easing." + s, null, !0) : l.easing[s] || {}, r = h.length; --r > -1;) a = h[r], v[s + "." + a] = v[a + s] = n[a] = e.getRatio ? e : e[a] || new e
            };
        for (o = f.prototype, o._calcEnd = !1, o.getRatio = function(e) {
                if (this._func) return this._params[0] = e, this._func.apply(null, this._params);
                var t = this._type,
                    i = this._power,
                    o = 1 === t ? 1 - e : 2 === t ? e : .5 > e ? 2 * e : 2 * (1 - e);
                return 1 === i ? o *= o : 2 === i ? o *= o * o : 3 === i ? o *= o * o * o : 4 === i && (o *= o * o * o * o), 1 === t ? 1 - o : 2 === t ? o : .5 > e ? o / 2 : 1 - o / 2
            }, t = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], i = t.length; --i > -1;) o = t[i] + ",Power" + i, g(new f(null, null, 1, i), o, "easeOut", !0), g(new f(null, null, 2, i), o, "easeIn" + (0 === i ? ",easeNone" : "")), g(new f(null, null, 3, i), o, "easeInOut");
        v.linear = l.easing.Linear.easeIn, v.swing = l.easing.Quad.easeInOut;
        var S = b("events.EventDispatcher", function(e) {
            this._listeners = {}, this._eventTarget = e || this
        });
        o = S.prototype, o.addEventListener = function(e, t, i, o, r) {
            r = r || 0;
            var a, l, d = this._listeners[e],
                u = 0;
            for (null == d && (this._listeners[e] = d = []), l = d.length; --l > -1;) a = d[l], a.c === t && a.s === i ? d.splice(l, 1) : 0 === u && a.pr < r && (u = l + 1);
            d.splice(u, 0, {
                c: t,
                s: i,
                up: o,
                pr: r
            }), this !== n || s || n.wake()
        }, o.removeEventListener = function(e, t) {
            var i, o = this._listeners[e];
            if (o)
                for (i = o.length; --i > -1;)
                    if (o[i].c === t) return void o.splice(i, 1)
        }, o.dispatchEvent = function(e) {
            var t, i, o, n = this._listeners[e];
            if (n)
                for (t = n.length, i = this._eventTarget; --t > -1;) o = n[t], o.up ? o.c.call(o.s || i, {
                    type: e,
                    target: i
                }) : o.c.call(o.s || i)
        };
        var y = e.requestAnimationFrame,
            w = e.cancelAnimationFrame,
            T = Date.now || function() {
                return (new Date).getTime()
            };
        for (t = ["ms", "moz", "webkit", "o"], i = t.length; --i > -1 && !y;) y = e[t[i] + "RequestAnimationFrame"], w = e[t[i] + "CancelAnimationFrame"] || e[t[i] + "CancelRequestAnimationFrame"];
        b("Ticker", function(e, t) {
            var i, o, r, a, l, d = this,
                h = T(),
                c = t !== !1 && y,
                _ = function(e) {
                    d.time = (T() - h) / 1e3;
                    var t = r,
                        n = d.time - l;
                    (!i || n > 0 || e === !0) && (d.frame++, l += n + (n >= a ? .004 : a - n), d.dispatchEvent("tick")), e !== !0 && t === r && (r = o(_))
                };
            S.call(d), this.time = this.frame = 0, this.tick = function() {
                _(!0)
            }, this.sleep = function() {
                null != r && (c && w ? w(r) : clearTimeout(r), o = u, r = null, d === n && (s = !1))
            }, this.wake = function() {
                null !== r && d.sleep(), o = 0 === i ? u : c && y ? y : function(e) {
                    return setTimeout(e, 1e3 * (l - d.time) + 1 | 0)
                }, d === n && (s = !0), _(2)
            }, this.fps = function(e) {
                return arguments.length ? (i = e, a = 1 / (i || 60), l = this.time + a, void d.wake()) : i
            }, this.useRAF = function(e) {
                return arguments.length ? (d.sleep(), c = e, void d.fps(i)) : c
            }, d.fps(e), setTimeout(function() {
                c && (!r || d.frame < 5) && d.useRAF(!1)
            }, 1500)
        }), o = l.Ticker.prototype = new l.events.EventDispatcher, o.constructor = l.Ticker;
        var D = b("core.Animation", function(e, t) {
            if (this.vars = t || {}, this._duration = this._totalDuration = e || 0, this._delay = Number(this.vars.delay) || 0, this._timeScale = 1, this._active = this.vars.immediateRender === !0, this.data = this.vars.data, this._reversed = this.vars.reversed === !0, k) {
                s || n.wake();
                var i = this.vars.useFrames ? H : k;
                i.add(this, i._time), this.vars.paused && this.paused(!0)
            }
        });
        n = D.ticker = new l.Ticker, o = D.prototype, o._dirty = o._gc = o._initted = o._paused = !1, o._totalTime = o._time = 0, o._rawPrevTime = -1, o._next = o._last = o._onUpdate = o._timeline = o.timeline = null, o._paused = !1, o.play = function(e, t) {
            return arguments.length && this.seek(e, t), this.reversed(!1).paused(!1)
        }, o.pause = function(e, t) {
            return arguments.length && this.seek(e, t), this.paused(!0)
        }, o.resume = function(e, t) {
            return arguments.length && this.seek(e, t), this.paused(!1)
        }, o.seek = function(e, t) {
            return this.totalTime(Number(e), t !== !1)
        }, o.restart = function(e, t) {
            return this.reversed(!1).paused(!1).totalTime(e ? -this._delay : 0, t !== !1, !0)
        }, o.reverse = function(e, t) {
            return arguments.length && this.seek(e || this.totalDuration(), t), this.reversed(!0).paused(!1)
        }, o.render = function() {}, o.invalidate = function() {
            return this
        }, o._enabled = function(e, t) {
            return s || n.wake(), this._gc = !e, this._active = e && !this._paused && this._totalTime > 0 && this._totalTime < this._totalDuration, t !== !0 && (e && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !e && this.timeline && this._timeline._remove(this, !0)), !1
        }, o._kill = function() {
            return this._enabled(!1, !1)
        }, o.kill = function(e, t) {
            return this._kill(e, t), this
        }, o._uncache = function(e) {
            for (var t = e ? this : this.timeline; t;) t._dirty = !0, t = t.timeline;
            return this
        }, o.eventCallback = function(e, t, i, o) {
            if (null == e) return null;
            if ("on" === e.substr(0, 2)) {
                var n, s = this.vars;
                if (1 === arguments.length) return s[e];
                if (null == t) delete s[e];
                else if (s[e] = t, s[e + "Params"] = i, s[e + "Scope"] = o, i)
                    for (n = i.length; --n > -1;) "{self}" === i[n] && (i = s[e + "Params"] = i.concat(), i[n] = this);
                "onUpdate" === e && (this._onUpdate = t)
            }
            return this
        }, o.delay = function(e) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + e - this._delay), this._delay = e, this) : this._delay
        }, o.duration = function(e) {
            return arguments.length ? (this._duration = this._totalDuration = e, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== e && this.totalTime(this._totalTime * (e / this._duration), !0), this) : (this._dirty = !1, this._duration)
        }, o.totalDuration = function(e) {
            return this._dirty = !1, arguments.length ? this.duration(e) : this._totalDuration
        }, o.time = function(e, t) {
            return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(e > this._duration ? this._duration : e, t)) : this._time
        }, o.totalTime = function(e, t, i) {
            if (s || n.wake(), !arguments.length) return this._totalTime;
            if (this._timeline) {
                if (0 > e && !i && (e += this.totalDuration()), this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var o = this._totalDuration,
                        r = this._timeline;
                    if (e > o && !i && (e = o), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? o - e : e) / this._timeScale, r._dirty || this._uncache(!1), !r._active)
                        for (; r._timeline;) r.totalTime(r._totalTime, !0), r = r._timeline
                }
                this._gc && this._enabled(!0, !1), this._totalTime !== e && this.render(e, t, !1)
            }
            return this
        }, o.startTime = function(e) {
            return arguments.length ? (e !== this._startTime && (this._startTime = e, this.timeline && this.timeline._sortChildren && this.timeline.add(this, e - this._delay)), this) : this._startTime
        }, o.timeScale = function(e) {
            if (!arguments.length) return this._timeScale;
            if (e = e || 1e-6, this._timeline && this._timeline.smoothChildTiming) {
                var t = this._pauseTime,
                    i = t || 0 === t ? t : this._timeline.totalTime();
                this._startTime = i - (i - this._startTime) * this._timeScale / e
            }
            return this._timeScale = e, this._uncache(!1)
        }, o.reversed = function(e) {
            return arguments.length ? (e != this._reversed && (this._reversed = e, this.totalTime(this._totalTime, !0)), this) : this._reversed
        }, o.paused = function(e) {
            if (!arguments.length) return this._paused;
            if (e != this._paused && this._timeline) {
                s || e || n.wake();
                var t = this._timeline.rawTime(),
                    i = t - this._pauseTime;
                !e && this._timeline.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = e ? t : null, this._paused = e, this._active = !e && this._totalTime > 0 && this._totalTime < this._totalDuration, e || 0 === i || 0 === this._duration || this.render(this._totalTime, !0, !0)
            }
            return this._gc && !e && this._enabled(!0, !1), this
        };
        var L = b("core.SimpleTimeline", function(e) {
            D.call(this, 0, e), this.autoRemoveChildren = this.smoothChildTiming = !0
        });
        o = L.prototype = new D, o.constructor = L, o.kill()._gc = !1, o._first = o._last = null, o._sortChildren = !1, o.add = o.insert = function(e, t) {
            var i, o;
            if (e._startTime = Number(t || 0) + e._delay, e._paused && this !== e._timeline && (e._pauseTime = e._startTime + (this.rawTime() - e._startTime) / e._timeScale), e.timeline && e.timeline._remove(e, !0), e.timeline = e._timeline = this, e._gc && e._enabled(!0, !0), i = this._last, this._sortChildren)
                for (o = e._startTime; i && i._startTime > o;) i = i._prev;
            return i ? (e._next = i._next, i._next = e) : (e._next = this._first, this._first = e), e._next ? e._next._prev = e : this._last = e, e._prev = i, this._timeline && this._uncache(!0), this
        }, o._remove = function(e, t) {
            return e.timeline === this && (t || e._enabled(!1, !0), e.timeline = null, e._prev ? e._prev._next = e._next : this._first === e && (this._first = e._next), e._next ? e._next._prev = e._prev : this._last === e && (this._last = e._prev), this._timeline && this._uncache(!0)), this
        }, o.render = function(e, t, i) {
            var o, n = this._first;
            for (this._totalTime = this._time = this._rawPrevTime = e; n;) o = n._next, (n._active || e >= n._startTime && !n._paused) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (e - n._startTime) * n._timeScale, t, i) : n.render((e - n._startTime) * n._timeScale, t, i)), n = o
        }, o.rawTime = function() {
            return s || n.wake(), this._totalTime
        };
        var B = b("TweenLite", function(e, t, i) {
                if (D.call(this, t, i), null == e) throw "Cannot tween a null target.";
                this.target = e = "string" != typeof e ? e : B.selector(e) || e;
                var o, n, s, r = e.jquery || e.length && e[0] && e[0].nodeType && e[0].style,
                    a = this.vars.overwrite;
                if (this._overwrite = a = null == a ? x[B.defaultOverwrite] : "number" == typeof a ? a >> 0 : x[a], (r || e instanceof Array) && "number" != typeof e[0])
                    for (this._targets = s = d.call(e, 0), this._propLookup = [], this._siblings = [], o = 0; o < s.length; o++) n = s[o], n ? "string" != typeof n ? n.length && n[0] && n[0].nodeType && n[0].style ? (s.splice(o--, 1), this._targets = s = s.concat(d.call(n, 0))) : (this._siblings[o] = C(n, this, !1), 1 === a && this._siblings[o].length > 1 && A(n, this, null, 1, this._siblings[o])) : (n = s[o--] = B.selector(n), "string" == typeof n && s.splice(o + 1, 1)) : s.splice(o--, 1);
                else this._propLookup = {}, this._siblings = C(e, this, !1), 1 === a && this._siblings.length > 1 && A(e, this, null, 1, this._siblings);
                (this.vars.immediateRender || 0 === t && 0 === this._delay && this.vars.immediateRender !== !1) && this.render(-this._delay, !1, !0)
            }, !0),
            E = function(e) {
                return e.length && e[0] && e[0].nodeType && e[0].style
            },
            O = function(e, t) {
                var i, o = {};
                for (i in e) W[i] || i in t && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i || !(!M[i] || M[i] && M[i]._autoCSS) || (o[i] = e[i], delete e[i]);
                e.css = o
            };
        o = B.prototype = new D, o.constructor = B, o.kill()._gc = !1, o.ratio = 0, o._firstPT = o._targets = o._overwrittenProps = o._startAt = null, o._notifyPluginsOfEnabled = !1, B.version = "1.9.7", B.defaultEase = o._ease = new f(null, null, 1, 1), B.defaultOverwrite = "auto", B.ticker = n, B.autoSleep = !0, B.selector = e.$ || e.jQuery || function(t) {
            return e.$ ? (B.selector = e.$, e.$(t)) : e.document ? e.document.getElementById("#" === t.charAt(0) ? t.substr(1) : t) : t
        };
        var P = B._internals = {},
            M = B._plugins = {},
            F = B._tweenLookup = {},
            R = 0,
            W = P.reservedProps = {
                ease: 1,
                delay: 1,
                overwrite: 1,
                onComplete: 1,
                onCompleteParams: 1,
                onCompleteScope: 1,
                useFrames: 1,
                runBackwards: 1,
                startAt: 1,
                onUpdate: 1,
                onUpdateParams: 1,
                onUpdateScope: 1,
                onStart: 1,
                onStartParams: 1,
                onStartScope: 1,
                onReverseComplete: 1,
                onReverseCompleteParams: 1,
                onReverseCompleteScope: 1,
                onRepeat: 1,
                onRepeatParams: 1,
                onRepeatScope: 1,
                easeParams: 1,
                yoyo: 1,
                immediateRender: 1,
                repeat: 1,
                repeatDelay: 1,
                data: 1,
                paused: 1,
                reversed: 1,
                autoCSS: 1
            },
            x = {
                none: 0,
                all: 1,
                auto: 2,
                concurrent: 3,
                allOnStart: 4,
                preexisting: 5,
                "true": 1,
                "false": 0
            },
            H = D._rootFramesTimeline = new L,
            k = D._rootTimeline = new L;
        k._startTime = n.time, H._startTime = n.frame, k._active = H._active = !0, D._updateRoot = function() {
            if (k.render((n.time - k._startTime) * k._timeScale, !1, !1), H.render((n.frame - H._startTime) * H._timeScale, !1, !1), !(n.frame % 120)) {
                var e, t, i;
                for (i in F) {
                    for (t = F[i].tweens, e = t.length; --e > -1;) t[e]._gc && t.splice(e, 1);
                    0 === t.length && delete F[i]
                }
                if (i = k._first, (!i || i._paused) && B.autoSleep && !H._first && 1 === n._listeners.tick.length) {
                    for (; i && i._paused;) i = i._next;
                    i || n.sleep()
                }
            }
        }, n.addEventListener("tick", D._updateRoot);
        var C = function(e, t, i) {
                var o, n, s = e._gsTweenID;
                if (F[s || (e._gsTweenID = s = "t" + R++)] || (F[s] = {
                        target: e,
                        tweens: []
                    }), t && (o = F[s].tweens, o[n = o.length] = t, i))
                    for (; --n > -1;) o[n] === t && o.splice(n, 1);
                return F[s].tweens
            },
            A = function(e, t, i, o, n) {
                var s, r, a, l;
                if (1 === o || o >= 4) {
                    for (l = n.length, s = 0; l > s; s++)
                        if ((a = n[s]) !== t) a._gc || a._enabled(!1, !1) && (r = !0);
                        else if (5 === o) break;
                    return r
                }
                var d, u = t._startTime + 1e-10,
                    h = [],
                    c = 0,
                    _ = 0 === t._duration;
                for (s = n.length; --s > -1;)(a = n[s]) === t || a._gc || a._paused || (a._timeline !== t._timeline ? (d = d || I(t, 0, _), 0 === I(a, d, _) && (h[c++] = a)) : a._startTime <= u && a._startTime + a.totalDuration() / a._timeScale + 1e-10 > u && ((_ || !a._initted) && u - a._startTime <= 2e-10 || (h[c++] = a)));
                for (s = c; --s > -1;) a = h[s], 2 === o && a._kill(i, e) && (r = !0), (2 !== o || !a._firstPT && a._initted) && a._enabled(!1, !1) && (r = !0);
                return r
            },
            I = function(e, t, i) {
                for (var o = e._timeline, n = o._timeScale, s = e._startTime, r = 1e-10; o._timeline;) {
                    if (s += o._startTime, n *= o._timeScale, o._paused) return -100;
                    o = o._timeline
                }
                return s /= n, s > t ? s - t : i && s === t || !e._initted && 2 * r > s - t ? r : (s += e.totalDuration() / e._timeScale / n) > t + r ? 0 : s - t - r
            };
        o._init = function() {
            var e, t, i, o, n = this.vars,
                s = this._overwrittenProps,
                r = this._duration,
                a = n.ease;
            if (n.startAt) {
                if (n.startAt.overwrite = 0, n.startAt.immediateRender = !0, this._startAt = B.to(this.target, 0, n.startAt), n.immediateRender && (this._startAt = null, 0 === this._time && 0 !== r)) return
            } else if (n.runBackwards && n.immediateRender && 0 !== r)
                if (this._startAt) this._startAt.render(-1, !0), this._startAt = null;
                else if (0 === this._time) {
                i = {};
                for (o in n) W[o] && "autoCSS" !== o || (i[o] = n[o]);
                return i.overwrite = 0, void(this._startAt = B.to(this.target, 0, i))
            }
            if (this._ease = a ? a instanceof f ? n.easeParams instanceof Array ? a.config.apply(a, n.easeParams) : a : "function" == typeof a ? new f(a, n.easeParams) : v[a] || B.defaultEase : B.defaultEase, this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                for (e = this._targets.length; --e > -1;) this._initProps(this._targets[e], this._propLookup[e] = {}, this._siblings[e], s ? s[e] : null) && (t = !0);
            else t = this._initProps(this.target, this._propLookup, this._siblings, s);
            if (t && B._onPluginEvent("_onInitAllProps", this), s && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), n.runBackwards)
                for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
            this._onUpdate = n.onUpdate, this._initted = !0
        }, o._initProps = function(e, t, i, o) {
            var n, s, r, a, l, d, u;
            if (null == e) return !1;
            this.vars.css || e.style && e.nodeType && M.css && this.vars.autoCSS !== !1 && O(this.vars, e);
            for (n in this.vars) {
                if (W[n]) {
                    if (("onStartParams" === n || "onUpdateParams" === n || "onCompleteParams" === n || "onReverseCompleteParams" === n || "onRepeatParams" === n) && (l = this.vars[n]))
                        for (s = l.length; --s > -1;) "{self}" === l[s] && (l = this.vars[n] = l.concat(), l[s] = this)
                } else if (M[n] && (a = new M[n])._onInitTween(e, this.vars[n], this)) {
                    for (this._firstPT = d = {
                            _next: this._firstPT,
                            t: a,
                            p: "setRatio",
                            s: 0,
                            c: 1,
                            f: !0,
                            n: n,
                            pg: !0,
                            pr: a._priority
                        }, s = a._overwriteProps.length; --s > -1;) t[a._overwriteProps[s]] = this._firstPT;
                    (a._priority || a._onInitAllProps) && (r = !0), (a._onDisable || a._onEnable) && (this._notifyPluginsOfEnabled = !0)
                } else this._firstPT = t[n] = d = {
                    _next: this._firstPT,
                    t: e,
                    p: n,
                    f: "function" == typeof e[n],
                    n: n,
                    pg: !1,
                    pr: 0
                }, d.s = d.f ? e[n.indexOf("set") || "function" != typeof e["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(e[n]), u = this.vars[n], d.c = "string" == typeof u && "=" === u.charAt(1) ? parseInt(u.charAt(0) + "1", 10) * Number(u.substr(2)) : Number(u) - d.s || 0;
                d && d._next && (d._next._prev = d)
            }
            return o && this._kill(o, e) ? this._initProps(e, t, i, o) : this._overwrite > 1 && this._firstPT && i.length > 1 && A(e, this, t, this._overwrite, i) ? (this._kill(t, e), this._initProps(e, t, i, o)) : r
        }, o.render = function(e, t, i) {
            var o, n, s, r = this._time;
            if (e >= this._duration) this._totalTime = this._time = this._duration, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (o = !0, n = "onComplete"), 0 === this._duration && ((0 === e || this._rawPrevTime < 0) && this._rawPrevTime !== e && (i = !0, this._rawPrevTime > 0 && (n = "onReverseComplete", t && (e = -1))), this._rawPrevTime = e);
            else if (1e-7 > e) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== r || 0 === this._duration && this._rawPrevTime > 0) && (n = "onReverseComplete", o = this._reversed), 0 > e ? (this._active = !1, 0 === this._duration && (this._rawPrevTime >= 0 && (i = !0), this._rawPrevTime = e)) : this._initted || (i = !0);
            else if (this._totalTime = this._time = e, this._easeType) {
                var a = e / this._duration,
                    l = this._easeType,
                    d = this._easePower;
                (1 === l || 3 === l && a >= .5) && (a = 1 - a), 3 === l && (a *= 2), 1 === d ? a *= a : 2 === d ? a *= a * a : 3 === d ? a *= a * a * a : 4 === d && (a *= a * a * a * a), this.ratio = 1 === l ? 1 - a : 2 === l ? a : e / this._duration < .5 ? a / 2 : 1 - a / 2
            } else this.ratio = this._ease.getRatio(e / this._duration);
            if (this._time !== r || i) {
                if (!this._initted) {
                    if (this._init(), !this._initted) return;
                    this._time && !o ? this.ratio = this._ease.getRatio(this._time / this._duration) : o && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                for (this._active || this._paused || (this._active = !0), 0 === r && (this._startAt && (e >= 0 ? this._startAt.render(e, t, i) : n || (n = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === this._duration) && (t || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || p))), s = this._firstPT; s;) s.f ? s.t[s.p](s.c * this.ratio + s.s) : s.t[s.p] = s.c * this.ratio + s.s, s = s._next;
                this._onUpdate && (0 > e && this._startAt && this._startAt.render(e, t, i), t || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || p)), n && (this._gc || (0 > e && this._startAt && !this._onUpdate && this._startAt.render(e, t, i), o && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[n] && this.vars[n].apply(this.vars[n + "Scope"] || this, this.vars[n + "Params"] || p)))
            }
        }, o._kill = function(e, t) {
            if ("all" === e && (e = null), null == e && (null == t || t === this.target)) return this._enabled(!1, !1);
            t = "string" != typeof t ? t || this._targets || this.target : B.selector(t) || t;
            var i, o, n, s, r, a, l, d;
            if ((t instanceof Array || E(t)) && "number" != typeof t[0])
                for (i = t.length; --i > -1;) this._kill(e, t[i]) && (a = !0);
            else {
                if (this._targets) {
                    for (i = this._targets.length; --i > -1;)
                        if (t === this._targets[i]) {
                            r = this._propLookup[i] || {}, this._overwrittenProps = this._overwrittenProps || [], o = this._overwrittenProps[i] = e ? this._overwrittenProps[i] || {} : "all";
                            break
                        }
                } else {
                    if (t !== this.target) return !1;
                    r = this._propLookup, o = this._overwrittenProps = e ? this._overwrittenProps || {} : "all"
                }
                if (r) {
                    l = e || r, d = e !== o && "all" !== o && e !== r && (null == e || e._tempKill !== !0);
                    for (n in l)(s = r[n]) && (s.pg && s.t._kill(l) && (a = !0), s.pg && 0 !== s.t._overwriteProps.length || (s._prev ? s._prev._next = s._next : s === this._firstPT && (this._firstPT = s._next), s._next && (s._next._prev = s._prev), s._next = s._prev = null), delete r[n]), d && (o[n] = 1);
                    !this._firstPT && this._initted && this._enabled(!1, !1)
                }
            }
            return a
        }, o.invalidate = function() {
            return this._notifyPluginsOfEnabled && B._onPluginEvent("_onDisable", this), this._firstPT = null, this._overwrittenProps = null, this._onUpdate = null, this._startAt = null, this._initted = this._active = this._notifyPluginsOfEnabled = !1, this._propLookup = this._targets ? {} : [], this
        }, o._enabled = function(e, t) {
            if (s || n.wake(), e && this._gc) {
                var i, o = this._targets;
                if (o)
                    for (i = o.length; --i > -1;) this._siblings[i] = C(o[i], this, !0);
                else this._siblings = C(this.target, this, !0)
            }
            return D.prototype._enabled.call(this, e, t), this._notifyPluginsOfEnabled && this._firstPT ? B._onPluginEvent(e ? "_onEnable" : "_onDisable", this) : !1
        }, B.to = function(e, t, i) {
            return new B(e, t, i)
        }, B.from = function(e, t, i) {
            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new B(e, t, i)
        }, B.fromTo = function(e, t, i, o) {
            return o.startAt = i, o.immediateRender = 0 != o.immediateRender && 0 != i.immediateRender, new B(e, t, o)
        }, B.delayedCall = function(e, t, i, o, n) {
            return new B(t, 0, {
                delay: e,
                onComplete: t,
                onCompleteParams: i,
                onCompleteScope: o,
                onReverseComplete: t,
                onReverseCompleteParams: i,
                onReverseCompleteScope: o,
                immediateRender: !1,
                useFrames: n,
                overwrite: 0
            })
        }, B.set = function(e, t) {
            return new B(e, 0, t)
        }, B.killTweensOf = B.killDelayedCallsTo = function(e, t) {
            for (var i = B.getTweensOf(e), o = i.length; --o > -1;) i[o]._kill(t, e)
        }, B.getTweensOf = function(e) {
            if (null == e) return [];
            e = "string" != typeof e ? e : B.selector(e) || e;
            var t, i, o, n;
            if ((e instanceof Array || E(e)) && "number" != typeof e[0]) {
                for (t = e.length, i = []; --t > -1;) i = i.concat(B.getTweensOf(e[t]));
                for (t = i.length; --t > -1;)
                    for (n = i[t], o = t; --o > -1;) n === i[o] && i.splice(t, 1)
            } else
                for (i = C(e).concat(), t = i.length; --t > -1;) i[t]._gc && i.splice(t, 1);
            return i
        };
        var U = b("plugins.TweenPlugin", function(e, t) {
            this._overwriteProps = (e || "").split(","), this._propName = this._overwriteProps[0], this._priority = t || 0, this._super = U.prototype
        }, !0);
        if (o = U.prototype, U.version = "1.9.1", U.API = 2, o._firstPT = null, o._addTween = function(e, t, i, o, n, s) {
                var r, a;
                null != o && (r = "number" == typeof o || "=" !== o.charAt(1) ? Number(o) - i : parseInt(o.charAt(0) + "1", 10) * Number(o.substr(2))) && (this._firstPT = a = {
                    _next: this._firstPT,
                    t: e,
                    p: t,
                    s: i,
                    c: r,
                    f: "function" == typeof e[t],
                    n: n || t,
                    r: s
                }, a._next && (a._next._prev = a))
            }, o.setRatio = function(e) {
                for (var t, i = this._firstPT, o = 1e-6; i;) t = i.c * e + i.s, i.r ? t = t + (t > 0 ? .5 : -.5) >> 0 : o > t && t > -o && (t = 0), i.f ? i.t[i.p](t) : i.t[i.p] = t, i = i._next
            }, o._kill = function(e) {
                var t, i = this._overwriteProps,
                    o = this._firstPT;
                if (null != e[this._propName]) this._overwriteProps = [];
                else
                    for (t = i.length; --t > -1;) null != e[i[t]] && i.splice(t, 1);
                for (; o;) null != e[o.n] && (o._next && (o._next._prev = o._prev), o._prev ? (o._prev._next = o._next, o._prev = null) : this._firstPT === o && (this._firstPT = o._next)), o = o._next;
                return !1
            }, o._roundProps = function(e, t) {
                for (var i = this._firstPT; i;)(e[this._propName] || null != i.n && e[i.n.split(this._propName + "_").join("")]) && (i.r = t), i = i._next
            }, B._onPluginEvent = function(e, t) {
                var i, o, n, s, r, a = t._firstPT;
                if ("_onInitAllProps" === e) {
                    for (; a;) {
                        for (r = a._next, o = n; o && o.pr > a.pr;) o = o._next;
                        (a._prev = o ? o._prev : s) ? a._prev._next = a: n = a, (a._next = o) ? o._prev = a : s = a, a = r
                    }
                    a = t._firstPT = n
                }
                for (; a;) a.pg && "function" == typeof a.t[e] && a.t[e]() && (i = !0), a = a._next;
                return i
            }, U.activate = function(e) {
                for (var t = e.length; --t > -1;) e[t].API === U.API && (M[(new e[t])._propName] = e[t]);
                return !0
            }, _.plugin = function(e) {
                if (!(e && e.propName && e.init && e.API)) throw "illegal plugin definition.";
                var t, i = e.propName,
                    o = e.priority || 0,
                    n = e.overwriteProps,
                    s = {
                        init: "_onInitTween",
                        set: "setRatio",
                        kill: "_kill",
                        round: "_roundProps",
                        initAll: "_onInitAllProps"
                    },
                    r = b("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                        U.call(this, i, o), this._overwriteProps = n || []
                    }, e.global === !0),
                    a = r.prototype = new U(i);
                a.constructor = r, r.API = e.API;
                for (t in s) "function" == typeof e[t] && (a[s[t]] = e[t]);
                return r.version = e.version, U.activate([r]), r
            }, t = e._gsQueue) {
            for (i = 0; i < t.length; i++) t[i]();
            for (o in h) h[o].func || e.console.log("GSAP encountered missing dependency: com.greensock." + o)
        }
        s = !1
    }(window);