! function(e) {
  "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery"), window, document) : e(jQuery, window, document)
}(function(e, t, i, n) {
  "use strict";
  e.fn.on || (e.fn.on = function(e, t, i, n) {
    return this.delegate(t, e, i, n)
  }), e.extend({
    DirtyForms: {
      message: "You've made changes on this page which aren't saved. If you leave you will lose these changes.",
      title: "Are you sure you want to do that?",
      dirtyClass: "dirty",
      listeningClass: "dirtylisten",
      ignoreClass: "ignoredirty",
      choiceContinue: !1,
      helpers: [],
      dialog: {
        selector: "#facebox .content",
        fire: function(t, i) {
          var n = "<h1>" + i + "</h1><p>" + t + '</p><p><a href="#" class="ignoredirty button medium red continue">Continue</a><a href="#" class="ignoredirty button medium cancel">Stop</a></p>';
          e.facebox(n)
        },
        bind: function() {
          var t = function(t) {
            return function(n) {
              ("keydown" !== n.type || "keydown" === n.type && 27 === n.which) && (o.dialogStash || e(i).trigger("close.facebox"), t(n))
            }
          };
          e(i).bind("keydown.facebox", t(o.decidingCancel)), e("#facebox .cancel, #facebox .close, #facebox_overlay").click(t(o.decidingCancel)), e("#facebox .continue").click(t(o.decidingContinue))
        },
        stash: function() {
          var t = e("#facebox");
          return "" === e.trim(t.html()) || "block" != t.css("display") ? !1 : e("#facebox .content").clone(!0)
        },
        refire: function(t, i) {
          e.facebox(t)
        }
      },
      isDirty: function() {
        return e(":dirtylistening").dirtyForms("isDirty")
      },
      disable: function() {
        e("html").addClass(o.ignoreClass)
      },
      ignoreParentDocs: function() {
        o.watchParentDocs = !1
      },
      choiceCommit: function(t) {
        o.deciding && (e(i).trigger("choicecommit.dirtyforms"), o.choiceContinue ? o.decidingContinue(t) : o.decidingCancel(t), e(i).trigger("choicecommitAfter.dirtyforms"))
      },
      isDeciding: function() {
        return o.deciding
      },
      decidingContinue: function(t) {
        v(), t.preventDefault(), o.dialogStash = !1, e(i).trigger("decidingcontinued.dirtyforms"), C(o.decidingEvent), o.deciding = o.currentForm = o.decidingEvent = !1
      },
      decidingCancel: function(t) {
        t.preventDefault(), e(i).trigger("decidingcancelled.dirtyforms"), o.dialog !== !1 && o.dialogStash !== !1 && "function" == typeof o.dialog.refire && o.dialog.refire(o.dialogStash.html(), t), e(i).trigger("decidingcancelledAfter.dirtyforms"), o.deciding = o.currentForm = o.decidingEvent = o.dialogStash = !1
      }
    }
  }), e.extend(e.expr[":"], {
    dirtylistening: function(t) {
      return e(t).hasClass(o.listeningClass)
    },
    dirty: function(t) {
      return e(t).hasClass(o.dirtyClass)
    }
  });
  var r = {
    init: function() {
      u();
      var t = "textarea,input:not([type='checkbox'],[type='radio'],[type='button'],[type='image'],[type='submit'],[type='reset'],[type='file'],[type='search'])",
        n = e(i.activeElement);
      return n.is(t) && (o.focused.element = n, o.focused.value = n.val()), this.each(function(i) {
        var n = e(this);
        n.is("form") && n.addClass(o.listeningClass).on("focus change", t, c).on("change", "input[type='checkbox'],input[type='radio'],select", a).on("click", "input[type='reset']", s)
      })
    },
    isDirty: function() {
      var t = !1,
        i = this;
      return d() ? (t = !0, !0) : (this.each(function(i) {
        return e(this).hasClass(o.dirtyClass) ? (t = !0, !1) : void 0
      }), t ? !0 : (e.each(o.helpers, function(e, n) {
        return "isDirty" in n && n.isDirty(i) ? (t = !0, !1) : "isNodeDirty" in n && n.isNodeDirty(i) ? (t = !0, !1) : void 0
      }), t))
    },
    setDirty: function() {
      return this.each(function(t) {
        e(this).addClass(o.dirtyClass).parents("form").addClass(o.dirtyClass)
      })
    },
    setClean: function() {
      return o.focused = {
        element: !1,
        value: !1
      }, this.each(function(t) {
        var i = this,
          n = e(this);
        if (n.removeClass(o.dirtyClass), n.is("form")) n.find(":dirty").removeClass(o.dirtyClass);
        else {
          var r = n.parents("form");
          0 === r.find(":dirty").length && r.removeClass(o.dirtyClass)
        }
        e.each(o.helpers, function(e, t) {
          "setClean" in t && t.setClean(i)
        })
      })
    }
  };
  e.fn.dirtyForms = function(t) {
    return r[t] ? r[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist on jQuery.dirtyForms") : r.init.apply(this, arguments)
  }, e.fn.setDirty = function() {
    return this.dirtyForms("setDirty")
  }, e.fn.isDirty = function() {
    return this.dirtyForms("isDirty")
  }, e.fn.cleanDirty = function() {
    return this.dirtyForms("setClean")
  };
  var o = e.DirtyForms = e.extend({
      watchParentDocs: !0,
      exitBound: !1,
      formStash: !1,
      dialogStash: !1,
      deciding: !1,
      decidingEvent: !1,
      currentForm: !1,
      focused: {
        element: !1,
        value: !1
      }
    }, e.DirtyForms),
    s = function() {
      e(this).parents("form").dirtyForms("setClean"), o.onFormCheck && o.onFormCheck()
    },
    a = function() {
      p(e(this)) || (e(this).dirtyForms("setDirty"), o.onFormCheck && o.onFormCheck())
    },
    c = function() {
      var t = e(this);
      d() && !p(t) && (o.focused.element.dirtyForms("setDirty"), o.onFormCheck && o.onFormCheck()), o.focused.element = t, o.focused.value = t.val()
    },
    d = function() {
      return o.focused.element && o.focused.element.val() !== o.focused.value
    },
    u = function() {
      if (!o.exitBound) {
        var n = top !== self;
        e(i).on("click", "a[href]", f).on("submit", "form", g), e(t).bind("beforeunload", h), o.watchParentDocs && n && (e(top.document).on("click", "a[href]", f).on("submit", "form", g), e(top.window).bind("beforeunload", h)), o.exitBound = !0
      }
    },
    l = function() {
      var t = "";
      return e.each(o.helpers, function(e, i) {
        "ignoreAnchorSelector" in i && (t.length > 0 && (t += ","), t += i.ignoreAnchorSelector)
      }), t
    },
    f = function(t) {
      e(this).is(l()) || m(e(this)) || y(t)
    },
    g = function(e) {
      o.currentForm = this, y(e)
    },
    h = function(e) {
      var i = y(e);
      return i && o.doubleunloadfix !== !0 && (o.deciding = !1), o.doubleunloadfix = !0, setTimeout(function() {
        o.doubleunloadfix = !1
      }, 200), "string" == typeof i ? (e = e || t.event, e && (e.returnValue = i), i) : void 0
    },
    y = function(t) {
      var n = e(t.target),
        r = t.type;
      return t.isDefaultPrevented() ? !1 : "beforeunload" == r && o.doubleunloadfix ? (o.doubleunloadfix = !1, !1) : p(n) ? (v(), !1) : o.deciding ? !1 : o.isDirty() ? "submit" == r && n.dirtyForms("isDirty") ? (v(), !0) : (e(i).trigger("defer.dirtyforms"), "beforeunload" == r ? o.message : void(o.dialog && (o.deciding = !0, o.decidingEvent = t, "function" == typeof o.dialog.stash && (o.dialogStash = o.dialog.stash()), t.preventDefault(), t.stopImmediatePropagation(), o.formStash = "string" == typeof o.dialog.selector && n.is("form") && n.parents(o.dialog.selector).length > 0 ? n.clone(!0).hide() : !1, o.dialog.fire(o.message, o.title), "function" == typeof o.dialog.bind && o.dialog.bind()))) : (v(), !1)
    },
    m = function(e) {
      var t = e.attr("target");
      return "string" == typeof t ? "_blank" === t.toLowerCase() : !1
    },
    p = function(e) {
      return e.closest("." + o.ignoreClass).length > 0
    },
    v = function() {
      e(t).unbind("beforeunload", h), t.onbeforeunload = null, e(i).trigger("beforeunload.dirtyforms")
    },
    C = function(t) {
      if (e(i).trigger("beforeRefire.dirtyforms"), "click" === t.type) {
        var n = new e.Event("click");
        if (e(t.target).trigger(n), !n.isDefaultPrevented()) {
          var r = e(t.target).closest("[href]").attr("href");
          return void(location.href = r)
        }
      } else {
        var s;
        o.formStash ? (s = o.formStash, e("body").append(s)) : s = e(t.target).closest("form"), s.trigger(t.type)
      }
    }
});


/*
 * jQuery throttle / debounce - v1.1 - 3/7/2010
 * http://benalman.com/projects/jquery-throttle-debounce-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function(b, c) {
  var $ = b.jQuery || b.Cowboy || (b.Cowboy = {}),
    a;
  $.throttle = a = function(e, f, j, i) {
    var h, d = 0;
    if (typeof f !== "boolean") {
      i = j;
      j = f;
      f = c
    }

    function g() {
      var o = this,
        m = +new Date() - d,
        n = arguments;

      function l() {
        d = +new Date();
        j.apply(o, n)
      }

      function k() {
        h = c
      }
      if (i && !h) {
        l()
      }
      h && clearTimeout(h);
      if (i === c && m > e) {
        l()
      } else {
        if (f !== true) {
          h = setTimeout(i ? k : l, i === c ? e - m : e)
        }
      }
    }
    if ($.guid) {
      g.guid = j.guid = j.guid || $.guid++
    }
    return g
  };
  $.debounce = function(d, e, f) {
    return f === c ? a(d, e, false) : a(d, f, e !== false)
  }
})(this);

/*! BigText - v0.1.8 - 2015-02-28
 * https://github.com/zachleat/bigtext
 * Copyright (c) 2015 Zach Leatherman (@zachleat)
 * MIT License */

(function(window, $) {
  "use strict";

  var counter = 0,
    $headCache = $('head'),
    oldBigText = window.BigText,
    oldjQueryMethod = $.fn.bigtext,
    BigText = {
      DEBUG_MODE: false,
      DEFAULT_MIN_FONT_SIZE_PX: null,
      DEFAULT_MAX_FONT_SIZE_PX: 528,
      GLOBAL_STYLE_ID: 'bigtext-style',
      STYLE_ID: 'bigtext-id',
      LINE_CLASS_PREFIX: 'bigtext-line',
      EXEMPT_CLASS: 'bigtext-exempt',
      noConflict: function(restore) {
        if (restore) {
          $.fn.bigtext = oldjQueryMethod;
          window.BigText = oldBigText;
        }
        return BigText;
      },
      supports: {
        wholeNumberFontSizeOnly: (function() {
          if (!('getComputedStyle' in window)) {
            return true;
          }
          var test = $('<div/>').css({
              position: 'absolute',
              'font-size': '14.1px'
            }).insertBefore($('script').eq(0)),
            computedStyle = window.getComputedStyle(test[0], null);

          var ret = computedStyle && computedStyle.getPropertyValue('font-size') === '14px';
          test.remove();
          return ret;
        })()
      },
      init: function() {
        if (!$('#' + BigText.GLOBAL_STYLE_ID).length) {
          $headCache.append(BigText.generateStyleTag(BigText.GLOBAL_STYLE_ID, ['.bigtext * { white-space: nowrap; } .bigtext > * { display: block; }',
            '.bigtext .' + BigText.EXEMPT_CLASS + ', .bigtext .' + BigText.EXEMPT_CLASS + ' * { white-space: normal; }'
          ]));
        }
      },
      bindResize: function(eventName, resizeFunction) {
        var timeoutId;
        $(window).unbind(eventName).bind(eventName, function() {
          if (timeoutId) {
            clearTimeout(timeoutId);
          }
          timeoutId = setTimeout(resizeFunction, 100);
        });
      },
      getStyleId: function(id) {
        return BigText.STYLE_ID + '-' + id;
      },
      generateStyleTag: function(id, css) {
        return $('<style>' + css.join('\n') + '</style>').attr('id', id);
      },
      clearCss: function(id) {
        var styleId = BigText.getStyleId(id);
        $('#' + styleId).remove();
      },
      generateCss: function(id, linesFontSizes, lineWordSpacings, minFontSizes) {
        var css = [];

        BigText.clearCss(id);

        for (var j = 0, k = linesFontSizes.length; j < k; j++) {
          css.push('#' + id + ' .' + BigText.LINE_CLASS_PREFIX + j + ' {' +
            (minFontSizes[j] ? ' white-space: normal;' : '') +
            (linesFontSizes[j] ? ' font-size: ' + linesFontSizes[j] + 'px;' : '') +
            (lineWordSpacings[j] ? ' word-spacing: ' + lineWordSpacings[j] + 'px;' : '') +
            '}');
        }

        return BigText.generateStyleTag(BigText.getStyleId(id), css);
      },
      jQueryMethod: function(options) {
        BigText.init();

        options = $.extend({
          minfontsize: BigText.DEFAULT_MIN_FONT_SIZE_PX,
          maxfontsize: BigText.DEFAULT_MAX_FONT_SIZE_PX,
          childSelector: '',
          resize: true
        }, options || {});

        this.each(function() {
          var $t = $(this).addClass('bigtext'),
            maxWidth = $t.width(),
            id = $t.attr('id'),
            $children = options.childSelector ? $t.find(options.childSelector) : $t.children();

          if (!id) {
            id = 'bigtext-id' + (counter++);
            $t.attr('id', id);
          }

          if (options.resize) {
            BigText.bindResize('resize.bigtext-event-' + id, function() {
              // TODO only call this if the width has changed.
              BigText.jQueryMethod.call($('#' + id), options);
            });
          }

          BigText.clearCss(id);

          $children.addClass(function(lineNumber, className) {
            // remove existing line classes.
            return [className.replace(new RegExp('\\b' + BigText.LINE_CLASS_PREFIX + '\\d+\\b'), ''),
              BigText.LINE_CLASS_PREFIX + lineNumber
            ].join(' ');
          });

          var sizes = calculateSizes($t, $children, maxWidth, options.maxfontsize, options.minfontsize);
          $headCache.append(BigText.generateCss(id, sizes.fontSizes, sizes.wordSpacings, sizes.minFontSizes));
        });

        return this.trigger('bigtext:complete');
      }
    };

  function testLineDimensions($line, maxWidth, property, size, interval, units, previousWidth) {
    var width;
    previousWidth = typeof previousWidth === 'number' ? previousWidth : 0;
    $line.css(property, size + units);

    width = $line.width();

    if (width >= maxWidth) {
      // console.log(width, ' previous: ' + previousWidth, property + ' at ' + interval, 'prior: ' + (parseFloat(size) - interval), 'new:' + parseFloat(size));
      $line.css(property, '');

      if (width === maxWidth) {
        return {
          match: 'exact',
          size: parseFloat((parseFloat(size) - 0.1).toFixed(3))
        };
      }

      // Since this is an estimate, we calculate how far over the width we went with the new value.
      // If this is word-spacing (our last resort guess) and the over is less than the under, we keep the higher value.
      // Otherwise, we revert to the underestimate.
      var under = maxWidth - previousWidth,
        over = width - maxWidth;

      return {
        match: 'estimate',
        size: parseFloat((parseFloat(size) - (property === 'word-spacing' && previousWidth && (over < under) ? 0 : interval)).toFixed(3))
      };
    }

    return width;
  }

  function calculateSizes($t, $children, maxWidth, maxFontSize, minFontSize) {
    var $c = $t.clone(true)
      .addClass('bigtext-cloned')
      .css({
        fontFamily: $t.css('font-family'),
        textTransform: $t.css('text-transform'),
        wordSpacing: $t.css('word-spacing'),
        letterSpacing: $t.css('letter-spacing'),
        position: 'absolute',
        left: BigText.DEBUG_MODE ? 0 : -9999,
        top: BigText.DEBUG_MODE ? 0 : -9999
      })
      .appendTo(document.body);

    // font-size isn't the only thing we can modify, we can also mess with:
    // word-spacing and letter-spacing. WebKit does not respect subpixel
    // letter-spacing, word-spacing, or font-size.
    // TODO try -webkit-transform: scale() as a workaround.
    var fontSizes = [],
      wordSpacings = [],
      minFontSizes = [],
      ratios = [];

    $children.css('float', 'left').each(function() {
      var $line = $(this),
        // TODO replace 8, 4 with a proportional size to the calculated font-size.
        intervals = BigText.supports.wholeNumberFontSizeOnly ? [8, 4, 1] : [8, 4, 1, 0.1],
        lineMax,
        newFontSize;

      if ($line.hasClass(BigText.EXEMPT_CLASS)) {
        fontSizes.push(null);
        ratios.push(null);
        minFontSizes.push(false);
        return;
      }

      // TODO we can cache this ratio?
      var autoGuessSubtraction = 32, // font size in px
        currentFontSize = parseFloat($line.css('font-size')),
        ratio = ($line.width() / currentFontSize).toFixed(6);

      newFontSize = parseInt(maxWidth / ratio, 10) - autoGuessSubtraction;

      outer: for (var m = 0, n = intervals.length; m < n; m++) {
        inner: for (var j = 1, k = 10; j <= k; j++) {
          if (newFontSize + j * intervals[m] > maxFontSize) {
            newFontSize = maxFontSize;
            break outer;
          }

          lineMax = testLineDimensions($line, maxWidth, 'font-size', newFontSize + j * intervals[m], intervals[m], 'px', lineMax);
          if (typeof lineMax !== 'number') {
            newFontSize = lineMax.size;

            if (lineMax.match === 'exact') {
              break outer;
            }
            break inner;
          }
        }
      }

      ratios.push(maxWidth / newFontSize);

      if (newFontSize > maxFontSize) {
        fontSizes.push(maxFontSize);
        minFontSizes.push(false);
      } else if (!!minFontSize && newFontSize < minFontSize) {
        fontSizes.push(minFontSize);
        minFontSizes.push(true);
      } else {
        fontSizes.push(newFontSize);
        minFontSizes.push(false);
      }
    }).each(function(lineNumber) {
      var $line = $(this),
        wordSpacing = 0,
        interval = 1,
        maxWordSpacing;

      if ($line.hasClass(BigText.EXEMPT_CLASS)) {
        wordSpacings.push(null);
        return;
      }

      // must re-use font-size, even though it was removed above.
      $line.css('font-size', fontSizes[lineNumber] + 'px');

      for (var m = 1, n = 3; m < n; m += interval) {
        maxWordSpacing = testLineDimensions($line, maxWidth, 'word-spacing', m, interval, 'px', maxWordSpacing);
        if (typeof maxWordSpacing !== 'number') {
          wordSpacing = maxWordSpacing.size;
          break;
        }
      }

      $line.css('font-size', '');
      wordSpacings.push(wordSpacing);
    }).removeAttr('style');

    if (!BigText.DEBUG_MODE) {
      $c.remove();
    } else {
      $c.css({
        'background-color': 'rgba(255,255,255,.4)'
      });
    }

    return {
      fontSizes: fontSizes,
      wordSpacings: wordSpacings,
      ratios: ratios,
      minFontSizes: minFontSizes
    };
  }

  $.fn.bigtext = BigText.jQueryMethod;
  window.BigText = BigText;

})(this, jQuery);

/* HTML5 Placeholder jQuery Plugin - v2.1.2
 * Copyright (c)2015 Mathias Bynens
 * 2015-06-09
 */
! function(a) {
  "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof module && module.exports ? require("jquery") : jQuery)
}(function(a) {
  function b(b) {
    var c = {},
      d = /^jQuery\d+$/;
    return a.each(b.attributes, function(a, b) {
      b.specified && !d.test(b.name) && (c[b.name] = b.value)
    }), c
  }

  function c(b, c) {
    var d = this,
      f = a(d);
    if (d.value == f.attr("placeholder") && f.hasClass(m.customClass))
      if (f.data("placeholder-password")) {
        if (f = f.hide().nextAll('input[type="password"]:first').show().attr("id", f.removeAttr("id").data("placeholder-id")), b === !0) return f[0].value = c;
        f.focus()
      } else d.value = "", f.removeClass(m.customClass), d == e() && d.select()
  }

  function d() {
    var d, e = this,
      f = a(e),
      g = this.id;
    if ("" === e.value) {
      if ("password" === e.type) {
        if (!f.data("placeholder-textinput")) {
          try {
            d = f.clone().prop({
              type: "text"
            })
          } catch (h) {
            d = a("<input>").attr(a.extend(b(this), {
              type: "text"
            }))
          }
          d.removeAttr("name").data({
            "placeholder-password": f,
            "placeholder-id": g
          }).bind("focus.placeholder", c), f.data({
            "placeholder-textinput": d,
            "placeholder-id": g
          }).before(d)
        }
        f = f.removeAttr("id").hide().prevAll('input[type="text"]:first').attr("id", g).show()
      }
      f.addClass(m.customClass), f[0].value = f.attr("placeholder")
    } else f.removeClass(m.customClass)
  }

  function e() {
    try {
      return document.activeElement
    } catch (a) {}
  }
  var f, g, h = "[object OperaMini]" == Object.prototype.toString.call(window.operamini),
    i = "placeholder" in document.createElement("input") && !h,
    j = "placeholder" in document.createElement("textarea") && !h,
    k = a.valHooks,
    l = a.propHooks;
  if (i && j) g = a.fn.placeholder = function() {
    return this
  }, g.input = g.textarea = !0;
  else {
    var m = {};
    g = a.fn.placeholder = function(b) {
      var e = {
        customClass: "placeholder"
      };
      m = a.extend({}, e, b);
      var f = this;
      return f.filter((i ? "textarea" : ":input") + "[placeholder]").not("." + m.customClass).bind({
        "focus.placeholder": c,
        "blur.placeholder": d
      }).data("placeholder-enabled", !0).trigger("blur.placeholder"), f
    }, g.input = i, g.textarea = j, f = {
      get: function(b) {
        var c = a(b),
          d = c.data("placeholder-password");
        return d ? d[0].value : c.data("placeholder-enabled") && c.hasClass(m.customClass) ? "" : b.value
      },
      set: function(b, f) {
        var g = a(b),
          h = g.data("placeholder-password");
        return h ? h[0].value = f : g.data("placeholder-enabled") ? ("" === f ? (b.value = f, b != e() && d.call(b)) : g.hasClass(m.customClass) ? c.call(b, !0, f) || (b.value = f) : b.value = f, g) : b.value = f
      }
    }, i || (k.input = f, l.value = f), j || (k.textarea = f, l.value = f), a(function() {
      a(document).delegate("form", "submit.placeholder", function() {
        var b = a("." + m.customClass, this).each(c);
        setTimeout(function() {
          b.each(d)
        }, 10)
      })
    }), a(window).bind("beforeunload.placeholder", function() {
      a("." + m.customClass).each(function() {
        this.value = ""
      })
    })
  }
});

/*! jQuery Validation Plugin - v1.13.1 - 10/14/2014
 * http://jqueryvalidation.org/
 * Copyright (c) 2014 Jörn Zaefferer; Licensed MIT */
! function(a) {
  "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function(a) {
  a.extend(a.fn, {
    validate: function(b) {
      if (!this.length) return void(b && b.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
      var c = a.data(this[0], "validator");
      return c ? c : (this.attr("novalidate", "novalidate"), c = new a.validator(b, this[0]), a.data(this[0], "validator", c), c.settings.onsubmit && (this.validateDelegate(":submit", "click", function(b) {
        c.settings.submitHandler && (c.submitButton = b.target), a(b.target).hasClass("cancel") && (c.cancelSubmit = !0), void 0 !== a(b.target).attr("formnovalidate") && (c.cancelSubmit = !0)
      }), this.submit(function(b) {
        function d() {
          var d, e;
          return c.settings.submitHandler ? (c.submitButton && (d = a("<input type='hidden'/>").attr("name", c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)), e = c.settings.submitHandler.call(c, c.currentForm, b), c.submitButton && d.remove(), void 0 !== e ? e : !1) : !0
        }
        return c.settings.debug && b.preventDefault(), c.cancelSubmit ? (c.cancelSubmit = !1, d()) : c.form() ? c.pendingRequest ? (c.formSubmitted = !0, !1) : d() : (c.focusInvalid(), !1)
      })), c)
    },
    valid: function() {
      var b, c;
      return a(this[0]).is("form") ? b = this.validate().form() : (b = !0, c = a(this[0].form).validate(), this.each(function() {
        b = c.element(this) && b
      })), b
    },
    removeAttrs: function(b) {
      var c = {},
        d = this;
      return a.each(b.split(/\s/), function(a, b) {
        c[b] = d.attr(b), d.removeAttr(b)
      }), c
    },
    rules: function(b, c) {
      var d, e, f, g, h, i, j = this[0];
      if (b) switch (d = a.data(j.form, "validator").settings, e = d.rules, f = a.validator.staticRules(j), b) {
        case "add":
          a.extend(f, a.validator.normalizeRule(c)), delete f.messages, e[j.name] = f, c.messages && (d.messages[j.name] = a.extend(d.messages[j.name], c.messages));
          break;
        case "remove":
          return c ? (i = {}, a.each(c.split(/\s/), function(b, c) {
            i[c] = f[c], delete f[c], "required" === c && a(j).removeAttr("aria-required")
          }), i) : (delete e[j.name], f)
      }
      return g = a.validator.normalizeRules(a.extend({}, a.validator.classRules(j), a.validator.attributeRules(j), a.validator.dataRules(j), a.validator.staticRules(j)), j), g.required && (h = g.required, delete g.required, g = a.extend({
        required: h
      }, g), a(j).attr("aria-required", "true")), g.remote && (h = g.remote, delete g.remote, g = a.extend(g, {
        remote: h
      })), g
    }
  }), a.extend(a.expr[":"], {
    blank: function(b) {
      return !a.trim("" + a(b).val())
    },
    filled: function(b) {
      return !!a.trim("" + a(b).val())
    },
    unchecked: function(b) {
      return !a(b).prop("checked")
    }
  }), a.validator = function(b, c) {
    this.settings = a.extend(!0, {}, a.validator.defaults, b), this.currentForm = c, this.init()
  }, a.validator.format = function(b, c) {
    return 1 === arguments.length ? function() {
      var c = a.makeArray(arguments);
      return c.unshift(b), a.validator.format.apply(this, c)
    } : (arguments.length > 2 && c.constructor !== Array && (c = a.makeArray(arguments).slice(1)), c.constructor !== Array && (c = [c]), a.each(c, function(a, c) {
      b = b.replace(new RegExp("\\{" + a + "\\}", "g"), function() {
        return c
      })
    }), b)
  }, a.extend(a.validator, {
    defaults: {
      messages: {},
      groups: {},
      rules: {},
      errorClass: "error",
      validClass: "valid",
      errorElement: "label",
      focusCleanup: !1,
      focusInvalid: !0,
      errorContainer: a([]),
      errorLabelContainer: a([]),
      onsubmit: !0,
      ignore: ":hidden",
      ignoreTitle: !1,
      onfocusin: function(a) {
        this.lastActive = a, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(a)))
      },
      onfocusout: function(a) {
        this.checkable(a) || !(a.name in this.submitted) && this.optional(a) || this.element(a)
      },
      onkeyup: function(a, b) {
        (9 !== b.which || "" !== this.elementValue(a)) && (a.name in this.submitted || a === this.lastElement) && this.element(a)
      },
      onclick: function(a) {
        a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode)
      },
      highlight: function(b, c, d) {
        "radio" === b.type ? this.findByName(b.name).addClass(c).removeClass(d) : a(b).addClass(c).removeClass(d)
      },
      unhighlight: function(b, c, d) {
        "radio" === b.type ? this.findByName(b.name).removeClass(c).addClass(d) : a(b).removeClass(c).addClass(d)
      }
    },
    setDefaults: function(b) {
      a.extend(a.validator.defaults, b)
    },
    messages: {
      required: "Este campo es requerido.",
      remote: "Please fix this field.",
      email: "Ingrese un email valido",
      url: "Please enter a valid URL.",
      date: "Please enter a valid date.",
      dateISO: "Please enter a valid date ( ISO ).",
      number: "Please enter a valid number.",
      digits: "Please enter only digits.",
      creditcard: "Please enter a valid credit card number.",
      equalTo: "Please enter the same value again.",
      maxlength: a.validator.format("Please enter no more than {0} characters."),
      minlength: a.validator.format("Por favor, introduzca al menos {0} caracteres."),
      rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."),
      range: a.validator.format("Please enter a value between {0} and {1}."),
      max: a.validator.format("Please enter a value less than or equal to {0}."),
      min: a.validator.format("Please enter a value greater than or equal to {0}.")
    },
    autoCreateRanges: !1,
    prototype: {
      init: function() {
        function b(b) {
          var c = a.data(this[0].form, "validator"),
            d = "on" + b.type.replace(/^validate/, ""),
            e = c.settings;
          e[d] && !this.is(e.ignore) && e[d].call(c, this[0], b)
        }
        this.labelContainer = a(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm), this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
        var c, d = this.groups = {};
        a.each(this.settings.groups, function(b, c) {
          "string" == typeof c && (c = c.split(/\s/)), a.each(c, function(a, c) {
            d[c] = b
          })
        }), c = this.settings.rules, a.each(c, function(b, d) {
          c[b] = a.validator.normalizeRule(d)
        }), a(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']", "focusin focusout keyup", b).validateDelegate("select, option, [type='radio'], [type='checkbox']", "click", b), this.settings.invalidHandler && a(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler), a(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
      },
      form: function() {
        return this.checkForm(), a.extend(this.submitted, this.errorMap), this.invalid = a.extend({}, this.errorMap), this.valid() || a(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
      },
      checkForm: function() {
        this.prepareForm();
        for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++) this.check(b[a]);
        return this.valid()
      },
      element: function(b) {
        var c = this.clean(b),
          d = this.validationTargetFor(c),
          e = !0;
        return this.lastElement = d, void 0 === d ? delete this.invalid[c.name] : (this.prepareElement(d), this.currentElements = a(d), e = this.check(d) !== !1, e ? delete this.invalid[d.name] : this.invalid[d.name] = !0), a(b).attr("aria-invalid", !e), this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), e
      },
      showErrors: function(b) {
        if (b) {
          a.extend(this.errorMap, b), this.errorList = [];
          for (var c in b) this.errorList.push({
            message: b[c],
            element: this.findByName(c)[0]
          });
          this.successList = a.grep(this.successList, function(a) {
            return !(a.name in b)
          })
        }
        this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
      },
      resetForm: function() {
        a.fn.resetForm && a(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue").removeAttr("aria-invalid")
      },
      numberOfInvalids: function() {
        return this.objectLength(this.invalid)
      },
      objectLength: function(a) {
        var b, c = 0;
        for (b in a) c++;
        return c
      },
      hideErrors: function() {
        this.hideThese(this.toHide)
      },
      hideThese: function(a) {
        a.not(this.containers).text(""), this.addWrapper(a).hide()
      },
      valid: function() {
        return 0 === this.size()
      },
      size: function() {
        return this.errorList.length
      },
      focusInvalid: function() {
        if (this.settings.focusInvalid) try {
          a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
        } catch (b) {}
      },
      findLastActive: function() {
        var b = this.lastActive;
        return b && 1 === a.grep(this.errorList, function(a) {
          return a.element.name === b.name
        }).length && b
      },
      elements: function() {
        var b = this,
          c = {};
        return a(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled], [readonly]").not(this.settings.ignore).filter(function() {
          return !this.name && b.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in c || !b.objectLength(a(this).rules()) ? !1 : (c[this.name] = !0, !0)
        })
      },
      clean: function(b) {
        return a(b)[0]
      },
      errors: function() {
        var b = this.settings.errorClass.split(" ").join(".");
        return a(this.settings.errorElement + "." + b, this.errorContext)
      },
      reset: function() {
        this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = a([]), this.toHide = a([]), this.currentElements = a([])
      },
      prepareForm: function() {
        this.reset(), this.toHide = this.errors().add(this.containers)
      },
      prepareElement: function(a) {
        this.reset(), this.toHide = this.errorsFor(a)
      },
      elementValue: function(b) {
        var c, d = a(b),
          e = b.type;
        return "radio" === e || "checkbox" === e ? a("input[name='" + b.name + "']:checked").val() : "number" === e && "undefined" != typeof b.validity ? b.validity.badInput ? !1 : d.val() : (c = d.val(), "string" == typeof c ? c.replace(/\r/g, "") : c)
      },
      check: function(b) {
        b = this.validationTargetFor(this.clean(b));
        var c, d, e, f = a(b).rules(),
          g = a.map(f, function(a, b) {
            return b
          }).length,
          h = !1,
          i = this.elementValue(b);
        for (d in f) {
          e = {
            method: d,
            parameters: f[d]
          };
          try {
            if (c = a.validator.methods[d].call(this, i, b, e.parameters), "dependency-mismatch" === c && 1 === g) {
              h = !0;
              continue
            }
            if (h = !1, "pending" === c) return void(this.toHide = this.toHide.not(this.errorsFor(b)));
            if (!c) return this.formatAndAdd(b, e), !1
          } catch (j) {
            throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method.", j), j
          }
        }
        if (!h) return this.objectLength(f) && this.successList.push(b), !0
      },
      customDataMessage: function(b, c) {
        return a(b).data("msg" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()) || a(b).data("msg")
      },
      customMessage: function(a, b) {
        var c = this.settings.messages[a];
        return c && (c.constructor === String ? c : c[b])
      },
      findDefined: function() {
        for (var a = 0; a < arguments.length; a++)
          if (void 0 !== arguments[a]) return arguments[a];
        return void 0
      },
      defaultMessage: function(b, c) {
        return this.findDefined(this.customMessage(b.name, c), this.customDataMessage(b, c), !this.settings.ignoreTitle && b.title || void 0, a.validator.messages[c], "<strong>Warning: No message defined for " + b.name + "</strong>")
      },
      formatAndAdd: function(b, c) {
        var d = this.defaultMessage(b, c.method),
          e = /\$?\{(\d+)\}/g;
        "function" == typeof d ? d = d.call(this, c.parameters, b) : e.test(d) && (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)), this.errorList.push({
          message: d,
          element: b,
          method: c.method
        }), this.errorMap[b.name] = d, this.submitted[b.name] = d
      },
      addWrapper: function(a) {
        return this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper))), a
      },
      defaultShowErrors: function() {
        var a, b, c;
        for (a = 0; this.errorList[a]; a++) c = this.errorList[a], this.settings.highlight && this.settings.highlight.call(this, c.element, this.settings.errorClass, this.settings.validClass), this.showLabel(c.element, c.message);
        if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
          for (a = 0; this.successList[a]; a++) this.showLabel(this.successList[a]);
        if (this.settings.unhighlight)
          for (a = 0, b = this.validElements(); b[a]; a++) this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass);
        this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
      },
      validElements: function() {
        return this.currentElements.not(this.invalidElements())
      },
      invalidElements: function() {
        return a(this.errorList).map(function() {
          return this.element
        })
      },
      showLabel: function(b, c) {
        var d, e, f, g = this.errorsFor(b),
          h = this.idOrName(b),
          i = a(b).attr("aria-describedby");
        g.length ? (g.removeClass(this.settings.validClass).addClass(this.settings.errorClass), g.html(c)) : (g = a("<" + this.settings.errorElement + ">").attr("id", h + "-error").addClass(this.settings.errorClass).html(c || ""), d = g, this.settings.wrapper && (d = g.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(d) : this.settings.errorPlacement ? this.settings.errorPlacement(d, a(b)) : d.insertAfter(b), g.is("label") ? g.attr("for", h) : 0 === g.parents("label[for='" + h + "']").length && (f = g.attr("id").replace(/(:|\.|\[|\])/g, "\\$1"), i ? i.match(new RegExp("\\b" + f + "\\b")) || (i += " " + f) : i = f, a(b).attr("aria-describedby", i), e = this.groups[b.name], e && a.each(this.groups, function(b, c) {
          c === e && a("[name='" + b + "']", this.currentForm).attr("aria-describedby", g.attr("id"))
        }))), !c && this.settings.success && (g.text(""), "string" == typeof this.settings.success ? g.addClass(this.settings.success) : this.settings.success(g, b)), this.toShow = this.toShow.add(g)
      },
      errorsFor: function(b) {
        var c = this.idOrName(b),
          d = a(b).attr("aria-describedby"),
          e = "label[for='" + c + "'], label[for='" + c + "'] *";
        return d && (e = e + ", #" + d.replace(/\s+/g, ", #")), this.errors().filter(e)
      },
      idOrName: function(a) {
        return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name)
      },
      validationTargetFor: function(b) {
        return this.checkable(b) && (b = this.findByName(b.name)), a(b).not(this.settings.ignore)[0]
      },
      checkable: function(a) {
        return /radio|checkbox/i.test(a.type)
      },
      findByName: function(b) {
        return a(this.currentForm).find("[name='" + b + "']")
      },
      getLength: function(b, c) {
        switch (c.nodeName.toLowerCase()) {
          case "select":
            return a("option:selected", c).length;
          case "input":
            if (this.checkable(c)) return this.findByName(c.name).filter(":checked").length
        }
        return b.length
      },
      depend: function(a, b) {
        return this.dependTypes[typeof a] ? this.dependTypes[typeof a](a, b) : !0
      },
      dependTypes: {
        "boolean": function(a) {
          return a
        },
        string: function(b, c) {
          return !!a(b, c.form).length
        },
        "function": function(a, b) {
          return a(b)
        }
      },
      optional: function(b) {
        var c = this.elementValue(b);
        return !a.validator.methods.required.call(this, c, b) && "dependency-mismatch"
      },
      startRequest: function(a) {
        this.pending[a.name] || (this.pendingRequest++, this.pending[a.name] = !0)
      },
      stopRequest: function(b, c) {
        this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[b.name], c && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (a(this.currentForm).submit(), this.formSubmitted = !1) : !c && 0 === this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
      },
      previousValue: function(b) {
        return a.data(b, "previousValue") || a.data(b, "previousValue", {
          old: null,
          valid: !0,
          message: this.defaultMessage(b, "remote")
        })
      }
    },
    classRuleSettings: {
      required: {
        required: !0
      },
      email: {
        email: !0
      },
      url: {
        url: !0
      },
      date: {
        date: !0
      },
      dateISO: {
        dateISO: !0
      },
      number: {
        number: !0
      },
      digits: {
        digits: !0
      },
      creditcard: {
        creditcard: !0
      }
    },
    addClassRules: function(b, c) {
      b.constructor === String ? this.classRuleSettings[b] = c : a.extend(this.classRuleSettings, b)
    },
    classRules: function(b) {
      var c = {},
        d = a(b).attr("class");
      return d && a.each(d.split(" "), function() {
        this in a.validator.classRuleSettings && a.extend(c, a.validator.classRuleSettings[this])
      }), c
    },
    attributeRules: function(b) {
      var c, d, e = {},
        f = a(b),
        g = b.getAttribute("type");
      for (c in a.validator.methods) "required" === c ? (d = b.getAttribute(c), "" === d && (d = !0), d = !!d) : d = f.attr(c), /min|max/.test(c) && (null === g || /number|range|text/.test(g)) && (d = Number(d)), d || 0 === d ? e[c] = d : g === c && "range" !== g && (e[c] = !0);
      return e.maxlength && /-1|2147483647|524288/.test(e.maxlength) && delete e.maxlength, e
    },
    dataRules: function(b) {
      var c, d, e = {},
        f = a(b);
      for (c in a.validator.methods) d = f.data("rule" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()), void 0 !== d && (e[c] = d);
      return e
    },
    staticRules: function(b) {
      var c = {},
        d = a.data(b.form, "validator");
      return d.settings.rules && (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}), c
    },
    normalizeRules: function(b, c) {
      return a.each(b, function(d, e) {
        if (e === !1) return void delete b[d];
        if (e.param || e.depends) {
          var f = !0;
          switch (typeof e.depends) {
            case "string":
              f = !!a(e.depends, c.form).length;
              break;
            case "function":
              f = e.depends.call(c, c)
          }
          f ? b[d] = void 0 !== e.param ? e.param : !0 : delete b[d]
        }
      }), a.each(b, function(d, e) {
        b[d] = a.isFunction(e) ? e(c) : e
      }), a.each(["minlength", "maxlength"], function() {
        b[this] && (b[this] = Number(b[this]))
      }), a.each(["rangelength", "range"], function() {
        var c;
        b[this] && (a.isArray(b[this]) ? b[this] = [Number(b[this][0]), Number(b[this][1])] : "string" == typeof b[this] && (c = b[this].replace(/[\[\]]/g, "").split(/[\s,]+/), b[this] = [Number(c[0]), Number(c[1])]))
      }), a.validator.autoCreateRanges && (null != b.min && null != b.max && (b.range = [b.min, b.max], delete b.min, delete b.max), null != b.minlength && null != b.maxlength && (b.rangelength = [b.minlength, b.maxlength], delete b.minlength, delete b.maxlength)), b
    },
    normalizeRule: function(b) {
      if ("string" == typeof b) {
        var c = {};
        a.each(b.split(/\s/), function() {
          c[this] = !0
        }), b = c
      }
      return b
    },
    addMethod: function(b, c, d) {
      a.validator.methods[b] = c, a.validator.messages[b] = void 0 !== d ? d : a.validator.messages[b], c.length < 3 && a.validator.addClassRules(b, a.validator.normalizeRule(b))
    },
    methods: {
      required: function(b, c, d) {
        if (!this.depend(d, c)) return "dependency-mismatch";
        if ("select" === c.nodeName.toLowerCase()) {
          var e = a(c).val();
          return e && e.length > 0
        }
        return this.checkable(c) ? this.getLength(b, c) > 0 : a.trim(b).length > 0
      },
      email: function(a, b) {
        return this.optional(b) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)
      },
      url: function(a, b) {
        return this.optional(b) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)
      },
      date: function(a, b) {
        return this.optional(b) || !/Invalid|NaN/.test(new Date(a).toString())
      },
      dateISO: function(a, b) {
        return this.optional(b) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)
      },
      number: function(a, b) {
        return this.optional(b) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)
      },
      digits: function(a, b) {
        return this.optional(b) || /^\d+$/.test(a)
      },
      creditcard: function(a, b) {
        if (this.optional(b)) return "dependency-mismatch";
        if (/[^0-9 \-]+/.test(a)) return !1;
        var c, d, e = 0,
          f = 0,
          g = !1;
        if (a = a.replace(/\D/g, ""), a.length < 13 || a.length > 19) return !1;
        for (c = a.length - 1; c >= 0; c--) d = a.charAt(c), f = parseInt(d, 10), g && (f *= 2) > 9 && (f -= 9), e += f, g = !g;
        return e % 10 === 0
      },
      minlength: function(b, c, d) {
        var e = a.isArray(b) ? b.length : this.getLength(b, c);
        return this.optional(c) || e >= d
      },
      maxlength: function(b, c, d) {
        var e = a.isArray(b) ? b.length : this.getLength(b, c);
        return this.optional(c) || d >= e
      },
      rangelength: function(b, c, d) {
        var e = a.isArray(b) ? b.length : this.getLength(b, c);
        return this.optional(c) || e >= d[0] && e <= d[1]
      },
      min: function(a, b, c) {
        return this.optional(b) || a >= c
      },
      max: function(a, b, c) {
        return this.optional(b) || c >= a
      },
      range: function(a, b, c) {
        return this.optional(b) || a >= c[0] && a <= c[1]
      },
      equalTo: function(b, c, d) {
        var e = a(d);
        return this.settings.onfocusout && e.unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
          a(c).valid()
        }), b === e.val()
      },
      remote: function(b, c, d) {
        if (this.optional(c)) return "dependency-mismatch";
        var e, f, g = this.previousValue(c);
        return this.settings.messages[c.name] || (this.settings.messages[c.name] = {}), g.originalMessage = this.settings.messages[c.name].remote, this.settings.messages[c.name].remote = g.message, d = "string" == typeof d && {
          url: d
        } || d, g.old === b ? g.valid : (g.old = b, e = this, this.startRequest(c), f = {}, f[c.name] = b, a.ajax(a.extend(!0, {
          url: d,
          mode: "abort",
          port: "validate" + c.name,
          dataType: "json",
          data: f,
          context: e.currentForm,
          success: function(d) {
            var f, h, i, j = d === !0 || "true" === d;
            e.settings.messages[c.name].remote = g.originalMessage, j ? (i = e.formSubmitted, e.prepareElement(c), e.formSubmitted = i, e.successList.push(c), delete e.invalid[c.name], e.showErrors()) : (f = {}, h = d || e.defaultMessage(c, "remote"), f[c.name] = g.message = a.isFunction(h) ? h(b) : h, e.invalid[c.name] = !0, e.showErrors(f)), g.valid = j, e.stopRequest(c, j)
          }
        }, d)), "pending")
      }
    }
  }), a.format = function() {
    throw "$.format has been deprecated. Please use $.validator.format instead."
  };
  var b, c = {};
  a.ajaxPrefilter ? a.ajaxPrefilter(function(a, b, d) {
    var e = a.port;
    "abort" === a.mode && (c[e] && c[e].abort(), c[e] = d)
  }) : (b = a.ajax, a.ajax = function(d) {
    var e = ("mode" in d ? d : a.ajaxSettings).mode,
      f = ("port" in d ? d : a.ajaxSettings).port;
    return "abort" === e ? (c[f] && c[f].abort(), c[f] = b.apply(this, arguments), c[f]) : b.apply(this, arguments)
  }), a.extend(a.fn, {
    validateDelegate: function(b, c, d) {
      return this.bind(c, function(c) {
        var e = a(c.target);
        return e.is(b) ? d.apply(e, arguments) : void 0
      })
    }
  })
});