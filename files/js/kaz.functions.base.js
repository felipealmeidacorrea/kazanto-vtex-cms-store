"function" !== typeof String.prototype.trim &&
  (String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/g, "");
  });
"function" != typeof String.prototype.capitalize &&
  (String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
  });
"function" !== typeof String.prototype.replaceSpecialChars &&
  (String.prototype.replaceSpecialChars = function () {
    var b = {
      ç: "c",
      æ: "ae",
      œ: "oe",
      á: "a",
      é: "e",
      í: "i",
      ó: "o",
      ú: "u",
      à: "a",
      è: "e",
      ì: "i",
      ò: "o",
      ù: "u",
      ä: "a",
      ë: "e",
      ï: "i",
      ö: "o",
      ü: "u",
      ÿ: "y",
      â: "a",
      ê: "e",
      î: "i",
      ô: "o",
      û: "u",
      å: "a",
      ã: "a",
      ø: "o",
      õ: "o",
      u: "u",
      Á: "A",
      É: "E",
      Í: "I",
      Ó: "O",
      Ú: "U",
      Ê: "E",
      Ô: "O",
      Ü: "U",
      Ã: "A",
      Õ: "O",
      À: "A",
      Ç: "C",
    };
    return this.replace(/[\u00e0-\u00fa]/gi, function (a) {
      return "undefined" != typeof b[a] ? b[a] : a;
    });
  });
(function () {
  "function" !== typeof $.cookie &&
    (function (c) {
      "function" === typeof define && define.amd
        ? define(["jquery"], c)
        : "object" === typeof exports
        ? c(require("jquery"))
        : c(jQuery);
    })(function (c) {
      function p(a) {
        a = e.json ? JSON.stringify(a) : String(a);
        return e.raw ? a : encodeURIComponent(a);
      }
      function n(a, g) {
        var b;
        if (e.raw) b = a;
        else
          a: {
            var d = a;
            0 === d.indexOf('"') &&
              (d = d.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
            try {
              d = decodeURIComponent(d.replace(l, " "));
              b = e.json ? JSON.parse(d) : d;
              break a;
            } catch (h) {}
            b = void 0;
          }
        return c.isFunction(g) ? g(b) : b;
      }
      var l = /\+/g,
        e = (c.cookie = function (a, g, b) {
          if (1 < arguments.length && !c.isFunction(g)) {
            b = c.extend({}, e.defaults, b);
            if ("number" === typeof b.expires) {
              var d = b.expires,
                h = (b.expires = new Date());
              h.setTime(+h + 864e5 * d);
            }
            return (document.cookie = [
              e.raw ? a : encodeURIComponent(a),
              "=",
              p(g),
              b.expires ? "; expires=" + b.expires.toUTCString() : "",
              b.path ? "; path=" + b.path : "",
              b.domain ? "; domain=" + b.domain : "",
              b.secure ? "; secure" : "",
            ].join(""));
          }
          for (
            var d = a ? void 0 : {},
              h = document.cookie ? document.cookie.split("; ") : [],
              m = 0,
              l = h.length;
            m < l;
            m++
          ) {
            var f = h[m].split("="),
              k;
            k = f.shift();
            k = e.raw ? k : decodeURIComponent(k);
            f = f.join("=");
            if (a && a === k) {
              d = n(f, g);
              break;
            }
            a || void 0 === (f = n(f)) || (d[k] = f);
          }
          return d;
        });
      e.defaults = {};
      c.removeCookie = function (a, e) {
        if (void 0 === c.cookie(a)) return !1;
        c.cookie(a, "", c.extend({}, e, { expires: -1 }));
        return !c.cookie(a);
      };
    });
})();
(function (t) {
  var a = jQuery;
  if ("function" !== typeof a.fn.QD_smartShootingStar) {
    var p = function (a, b) {
        if (
          "object" === typeof console &&
          "undefined" !== typeof console.error &&
          "undefined" !== typeof console.info &&
          "undefined" !== typeof console.warn
        ) {
          if ("object" == typeof a && "function" == typeof a.unshift) {
            a.unshift("[Quatro Digital - Smart Shooting Star]\n");
            var d = a;
          } else d = ["[Quatro Digital - Smart Shooting Star]\n", a];
          if (
            "undefined" == typeof b ||
            ("alerta" !== b.toLowerCase() && "aviso" !== b.toLowerCase())
          )
            if ("undefined" != typeof b && "info" == b.toLowerCase())
              try {
                console.info.apply(console, d);
              } catch (l) {
                try {
                  console.info(d.join("\n"));
                } catch (h) {}
              }
            else
              try {
                console.error.apply(console, d);
              } catch (l) {
                try {
                  console.error(d.join("\n"));
                } catch (h) {}
              }
          else
            try {
              console.warn.apply(console, d);
            } catch (l) {
              try {
                console.warn(d.join("\n"));
              } catch (h) {}
            }
        }
      },
      m = {
        wishlistItemWrapper: "li[layout]",
        wishlistButton: ".qd-sss-wishlist-button",
        wishlistDeleteButton: ".qd-sss-wishlist-delete-button",
        dataEntityName: "wishlist",
        schemaName: "qd-sss-wishlist",
        cookieName: "qd_sss_wishlist_id",
        isProductPage: !1,
        shelfSelectors: {
          id: ".qd_productId",
          name: ".qd_productName",
          url: ".qd_productUrl",
          tagImg: "img",
        },
        list: function (a) {},
      },
      n = function (g, b) {
        function d(c) {
          h(c, l);
          g.find(b.wishlistButton)
            .not(".qd-sss-on")
            .addClass("qd-sss-on")
            .click(function (b) {
              b.preventDefault();
              h(c, m, a(this));
            });
          g.find(b.wishlistDeleteButton)
            .not(".qd-sss-on")
            .addClass("qd-sss-on")
            .click(function (b) {
              b.preventDefault();
              h(c, n, a(this));
            });
        }
        function l(c, f) {
          var e = Object.keys(f);
          if (e.length)
            if ((a("body").addClass("qd-hasFavorites"), b.isProductPage))
              -1 < e.indexOf(skuJson.productId.toString()) &&
                g.addClass("qd-favorited");
            else
              for (var k = 0; k < e.length; k++)
                g.find("a[data-id=" + e[k] + "]")
                  .parent()
                  .addClass("qd-favorited");
          else a("body").addClass("qd-noFavorites");
        }
        function h(c, f, e) {
          e = e || null;
          a.ajax({
            url:
              "/api/dataentities/" +
              b.dataEntityName +
              "/documents/" +
              c +
              "?_schema=" +
              b.schemaName +
              "&_fields=items",
            type: "GET",
            dataType: "json",
            headers: {
              Accept: "application/vnd.vtex.ds.v10+json",
              "Content-Type": "application/json; charset=utf-8",
            },
          })
            .done(function (a) {
              a = a ? a.items : {};
              f(c, a, e);
              b.list(a);
            })
            .error(function (a, b, c) {
              p("Erro!" + b + c);
            });
        }
        function q(c, f, e, k) {
          a.ajax({
            url:
              "/api/dataentities/" +
              b.dataEntityName +
              "/documents/" +
              c +
              "?_schema=" +
              b.schemaName,
            type: "PATCH",
            dataType: "json",
            headers: {
              Accept: "application/vnd.vtex.ds.v10+json",
              "Content-Type": "application/json; charset=utf-8",
            },
            data: JSON.stringify({ id: c, items: f }),
          })
            .done(function (c) {
              a(window).trigger(k, [f, c]);
              Object.keys(f).length
                ? (a("body").removeClass("qd-noFavorites"),
                  a("body").addClass("qd-hasFavorites"))
                : (a("body").removeClass("qd-hasFavorites"),
                  a("body").addClass("qd-noFavorites"));
              b.isProductPage
                ? g.toggleClass("qd-favorited")
                : e.parent().toggleClass("qd-favorited");
            })
            .error(function () {
              p("Erro!");
            });
        }
        function m(a, f, e) {
          if (b.isProductPage)
            f[skuJson.productId] = {
              sku: [],
              productId: skuJson.productId,
              productUrl: window.location.href,
              image: skuJson.skus[0].image,
              productName: skuJson.name,
              deleted: !1,
              insertedDate: new Date().toISOString(),
            };
          else {
            var c = e.closest("li[layout]"),
              d = b.shelfSelectors;
            f[c.find(d.id).val() || 0] = {
              sku: [],
              productId: c.find(d.id).val() || "",
              productUrl: c.find(d.url).val() || "",
              image: c.find(d.tagImg).attr("src") || "",
              productName: c.find(d.name).val() || "",
              deleted: !1,
              insertedDate: new Date().toISOString(),
            };
          }
          q(a, f, e, "QD_SSS_ProductAdded");
        }
        function n(a, d, e) {
          b.isProductPage
            ? delete d[skuJson.productId]
            : delete d[e.attr("data-id") || 0];
          q(a, d, e, "QD_SSS_ProductRemoved");
        }
        function r(c) {
          if (c) return c + jsnomeLoja;
          c = a.cookie(b.cookieName);
          c ||
            ((c =
              new Date().getTime() +
              "-" +
              Math.round(98999 * Math.random() + 1e3)),
            a.cookie(b.cookieName, c, { path: "/" }));
          return c;
        }
        "undefined" === typeof vtexjs.checkout.orderForm
          ? vtexjs.checkout.getOrderForm().done(function (a) {
              d(r(a.userProfileId));
            })
          : d(r(vtexjs.checkout.orderForm.userProfileId));
      };
    a.fn.QD_smartShootingStar = function (g) {
      var b = a(this);
      if (!b.length) return b;
      b.QD_smartShootingStarOptions = new n(b, a.extend({}, m, g));
      return b;
    };
    a(function () {
      a(".qd_auto_smart_shooting_star").QD_smartShootingStar();
    });
  }
})(this);
Array.prototype.indexOf ||
  (Array.prototype.indexOf = function (d, e) {
    var a;
    if (null == this) throw new TypeError('"this" is null or not defined');
    var c = Object(this),
      b = c.length >>> 0;
    if (0 === b) return -1;
    a = +e || 0;
    Infinity === Math.abs(a) && (a = 0);
    if (a >= b) return -1;
    for (a = Math.max(0 <= a ? a : b - Math.abs(a), 0); a < b; ) {
      if (a in c && c[a] === d) return a;
      a++;
    }
    return -1;
  });
try {
  var Common = {
    run: function () {},
    init: function () {
      Common.topBarSlick();
      Common.vtexBindQuickViewDestroy();
      Common.toggleSearch();
      Common.toggleSearchMobile();
      Common.setDataScrollToggle();
      Common.openModalVideoInstitutional();
      Common.applyCarouselShelf();
      Common.showHideMenuFloat();
      Common.applySmartShootingStar();
      Common.applyTipBarCarousel();
      Common.footerMobileActions();
      Common.cookieWarning();
      Common.flagDescontoPrateleira();
      Common.bindFlagDescontoPrateleira();
      Common.fixGiftListFunctions();
    },
    ajaxStop: function () {
      Common.applySmartShootingStar();
    },
    windowOnload: function () {},
    footerMobileActions: function () {
      $(".footer-qd-v1-title-underline").click(function (e) {
        $(this).parent().toggleClass("qd-on-links");
      });
    },
    qdOverlayClass: "qd-am-on qd-cart-show qd-sn-on",
    qdOverlay: function () {
      $(".components-qd-v1-overlay").click(function () {
        $(document.body).removeClass(Common.qdOverlayClass);
      });
    },
    showHideMenuFloat: function () {
      $(".header-qd-v1-float-menu-trigger").click(function () {
        $(".header-qd-v1-amazing-menu").toggleClass("qd-nav-float-on");
      });
    },
    vtexBindQuickViewDestroy: function () {
      window.bindQuickView = function () {};
    },
    applySmartCart: function () {
      $(".header-qd-v1-cart").append(
        '<div class="smart-cart-qd-v1-wrapper"><div class="qd-sc-wrapper"></div></div>'
      );
      $(document.body).append(
        '<div class="smart-cart-qd-v2-wrapper"><div class="qd-sc-wrapper"></div></div>'
      );
      var wrapper = $(".qd-sc-wrapper");
      $.QD_smartCart({
        selector: wrapper,
        dropDown: {
          texts: {
            linkCart: "Finalizar Compra",
            cartTotal:
              '<span class="qd-infoTotalItems">Itens: #items</span><span class="qd-infoTotalValue">Total: #value</span>',
          },
          updateOnlyHover: false,
          smartCheckout: true,
          callback: function () {
            $(".qd-ddc-wrapper3").prepend(
              '<div class="qd-cartTitle"><h3>Meu carrinho</h3></div>'
            );
            wrapper
              .find(".qd_ddc_continueShopping")
              .after(wrapper.find(".qd-ddc-viewCart"));
          },
          skuName: function (data) {
            return data.name + " - " + data.skuName.replace(data.name, "");
          },
          callbackProductsList: function () {
            wrapper.find(".qd-ddc-prodQtt").each(function () {
              var $t = $(this);
              $t.add($t.next(".qd-ddc-prodRemove")).wrapAll(
                '<div class="qd-ddc-prodAction"></div>'
              );
            });
          },
        },
        buyButton: {
          buyButton:
            ".product-qd-v1-buy-button .buy-button, .product-qd-v1-buy-button-float",
        },
      });
      window._QuatroDigital_prodBuyCallback = function (
        jqXHR,
        textStatus,
        prodLink,
        skus
      ) {
        $.fn.simpleCart(true);
        $(".shelf-qd-v1-buy-button-modal").modal("hide");
        $(window).trigger("QuatroDigital.qd_bb_prod_add", [
          new $(),
          skus[0] || 0,
        ]);
      };
      $(".header-qd-v1-cart-link").click(function (evt) {
        evt.preventDefault();
        $(document.body).toggleClass("qd-cart-show");
        wrapper.height($(window).height());
        wrapper
          .find(".qd-ddc-prodWrapper")
          .css("max-height", $(window).height() - 193);
      });
      $(".qd_ddc_lightBoxClose, .qd_ddc_continueShopping").click(function (
        evt
      ) {
        $(document.body).removeClass(Common.qdOverlayClass);
      });
    },
    fixGiftListFunctions: function () {
      var ConfigList = {
        GiftListId: function () {
          return $("input#gid").val() || "0";
        },
        ImageTypeId: function () {
          return $("input#iid").val() || "3";
        },
        ShowPopup: function () {
          return $("input#spu").val() || "false";
        },
        UrlOrder: function () {
          if ($("input#uor").length == 0 || $("input#uor").val() == "") {
            return "false";
          } else {
            return encodeURIComponent($("input#uor").val());
          }
        },
        PageSize: function () {
          if (
            $("input#pgs") === "undefined" ||
            ($("input#pgs").val() || "") == ""
          ) {
            return "10";
          } else {
            return $("input#pgs").val();
          }
        },
      };
    },
    setDataScrollToggle: function () {
      $(document.body).attr("data-qd-scroll-limit", "100");
      $(window).scroll(function () {
        if (
          $(window).scrollTop() >
          ($(".product-qd-v1-find-store").offset() || { top: 0 }).top + 40
        )
          $(document.body).attr("data-qd-filter-scroll", "1");
        else $(document.body).attr("data-qd-filter-scroll", "0");
      });
    },
    toggleSearch: function () {
      $(".header-qd-v1-search-trigger").click(function (e) {
        if ($(this).parent().is(".header-qd-v1-floating-bar")) {
          $(".header-qd-v1-search-box").toggleClass("qd-active-floating-bar");
        } else {
          $(".header-qd-v1-search-box").toggleClass("qd-active");
        }
        e.preventDefault();
      });
      $(".header-qd-v1-search-box-close").click(function () {
        $(".header-qd-v1-search-box").removeClass(
          "qd-active qd-active-floating-bar"
        );
      });
    },
    toggleSearchMobile: function () {
      $(
        ".header-qd-v1-search-trigger-fixed-bar, .header-qd-v2-search .header-qd-v1-search-trigger"
      ).click(function () {
        $(".mobile-qd-v1-search-wrap").toggleClass("qd-on");
        return false;
      });
      $(".header-qd-v1-user-actions .header-qd-v1-user-search").click(
        function () {
          $(".header-qd-v1-user-actions").toggleClass("qd-s-on");
          return false;
        }
      );
    },
    openModalVideoInstitutional: function () {
      var modal = $(".modal-qd-v1-home-video");
      var video = $(".modal-qd-v1-home-video-wrapper").html();
      $('a[href*="#youtube"]').click(function (e) {
        e.preventDefault();
        modal
          .find("iframe")
          .attr("src", $(this).attr("href").replace("#youtube", ""));
        modal.modal("show");
        return false;
      });
      $("body").on("hidden.bs.modal", ".modal", function () {
        modal.remove();
        modal.find(".modal-title").remove();
        $(".modal-qd-v1-home-video-wrapper").append(video);
      });
    },
    applyCarouselShelf: function () {
      var wrapper = $(".carousel-qd-v1-shelf .prateleira");
      if (!wrapper.length) return false;
      wrapper.each(function () {
        var $t = $(this);
        $t.find("h2").prependTo($t.parent());
      });
      wrapper.slick({
        prevArrow:
          '<button type="button" class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
        nextArrow:
          '<button type="button" class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
        slidesToShow: 6,
        slidesToScroll: 6,
        infinite: true,
        draggable: false,
        speed: 700,
        responsive: [
          {
            breakpoint: 1200,
            settings: { slidesToShow: 4, slidesToScroll: 4 },
          },
          { breakpoint: 991, settings: { slidesToShow: 2, slidesToScroll: 2 } },
        ],
      });
    },
    topBarSlick: function () {
      var topBar = $(".header-qd-v1-topbar ul");
      if (!topBar.length) {
        return;
      }
      var options = {
        arrows: false,
        autoplay: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        draggable: false,
        dots: false,
        autoplaySpeed: 4e3,
        speed: 700,
        responsive: [
          {
            breakpoint: 1200,
            settings: { slidesToShow: 1, slidesToScroll: 1, autoplay: true },
          },
        ],
      };
      topBar.slick(options);
      topBar.closest(".mz-topbar").show();
    },
    applyTipBarCarousel: function () {
      var wrapper = $(
        ".tip-bar-qd-v1-carousel, .tip-bar-qd-v1-carousel-home >ul"
      );
      if (!wrapper.length) return;
      var options = {
        arrows: false,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        draggable: false,
        dots: true,
        autoplaySpeed: 4e3,
        speed: 800,
        responsive: [
          {
            breakpoint: 1200,
            settings: { slidesToShow: 2, slidesToScroll: 2 },
          },
          { breakpoint: 767, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        ],
      };
      wrapper.slick(
        $.extend(
          true,
          options,
          (function () {
            if (wrapper.closest(".product-qd-v1-tip-bar").length)
              return { slidesToShow: 2 };
            return {};
          })()
        )
      );
    },
    checkLogin: function () {
      $.qdAjax({
        url: "/no-cache/profileSystem/getProfile",
        dataType: "json",
        clearQueueDelay: null,
        success: function (data) {
          try {
            if (data.IsUserDefined) {
              if (!data.FirstName) {
                $(".header-qd-v2-user-message").prepend(
                  '<div class="header-qd-v2-user-name">Olá, visitante <a href="/logout">sair</a></div>'
                );
                $(document.body).removeClass("not-logged-user");
              } else {
                $(".header-qd-v2-user-message").prepend(
                  '<div class="header-qd-v2-user-name">Olá, ' +
                    data.FirstName +
                    ' <a href="/logout">sair</a></div>'
                );
                $(document.body).removeClass("not-logged-user");
              }
            }
          } catch (e) {
            if (
              typeof console !== "undefined" &&
              typeof console.info === "function"
            )
              console.info("Ops, algo saiu errado com o login.", e.message);
          }
        },
      });
    },
    showIfHasWishes: function (data) {
      var qtt = Object.keys(data).length;
      if (qtt > 0) {
        $(".header-qd-v1-user-wishlist i").addClass("has-favorites");
      } else {
        $(".header-qd-v1-user-wishlist i").removeClass("has-favorites");
      }
    },
    applySmartShootingStar: function () {
      $(".MZa__wishlist a").on("click", function (e) {
        e.preventDefault();
        window.location = "/lista-de-desejos";
      });
      $(".prateleira")
        .not(".qd-wishlist-started")
        .addClass("qd-wishlist-started")
        .QD_smartShootingStar({ list: Common.showIfHasWishes });
    },
    cookieWarning: function () {
      if ($.cookie("acceptCokkieWrn") === undefined) {
        $(".qd-v1-cookie-warning").show(500);
      }
      $(".qd-v1-cookie-warning #acceptBtn").on("click", function () {
        $(".qd-v1-cookie-warning").hide(500);
        $.cookie("acceptCokkieWrn", 1);
      });
    },
    flagDescontoPrateleira: function () {
      showDiscount();
      function showDiscount() {
        $(".search-qd-v1-result ul:not(.mz-flag-shelf) ").each(function () {
          try {
            $(this).addClass(".mz-flag-shelf");
            if (!$(this).find(".desconto-porcentagem-prateleira").length) {
              return;
            }
            if ($(this).find(".qd-product-is-in-stock-false").length) {
              return;
            }
            var valorDiv = $(".desconto-porcentagem-prateleira", this).html();
            var valor = valorDiv.split(",");
            valor = valor[0].split("%");
            if (valor <= 0) {
              return;
            }
            $(this)
              .find(".desconto-porcentagem-prateleira")
              .replaceWith(
                "<div class='desconto-porcentagem-prateleira'>" +
                  valor[0] +
                  "%OFF</div>"
              );
          } catch (err) {
            console.log(err);
          }
        });
      }
    },
    bindFlagDescontoPrateleira: function () {
      $(window).on("QuatroDigital.sr_shelfCallback", function () {
        Common.flagDescontoPrateleira();
      });
    },
  };
  var Wishlist = {
    init: function () {
      Wishlist.bootstrapCssFix();
      Wishlist.getWishlist();
    },
    ajaxStop: function () {
      Wishlist.bootstrapCssFix();
    },
    windowOnload: function () {},
    bootstrapCssFix: function () {
      var styleSheets = document.styleSheets;
      for (var i = 0; i < styleSheets.length; i++) {
        if (
          (styleSheets[i].href || "").indexOf(
            "io.vtex.com.br/front-libs/bootstrap/2.3.2/css/bootstrap.min.css"
          ) > -1 ||
          (styleSheets[i].href || "").indexOf(
            "io.vtex.com.br/front-libs/bootstrap/2.3.2/css/bootstrap-responsive.min.css"
          ) > -1
        ) {
          styleSheets[i].disabled = true;
        }
      }
    },
    getWishlist: function () {
      $(".wishlist-qd-v1-shelf")
        .not(".qd-wishlist-started")
        .addClass("qd-wishlist-started")
        .QD_smartShootingStar({ list: showWishlist });
      function showEmptyListMessage() {
        var wrapper = $(".wishlist-qd-v1-shelf");
        wrapper.addClass("ready qd-empty");
        return wrapper.append(
          $("<h3>Lista Vazia</h3><p>Navegue pela loja e adicione produtos</p>")
        );
      }
      function showWishlist(data) {
        var shelfLayout = "5621566c-8520-4b82-a0fa-6592ed2fdcef";
        var productsIds = Object.keys(data);
        var qteItems = productsIds.length;
        var wrapper = $(".wishlist-qd-v1-shelf");
        if (!qteItems) {
          showEmptyListMessage();
          return;
        }
        while (productsIds.length) {
          var pack = productsIds.splice(0, 50);
          var url =
            "/buscapagina?fq=productId:" +
            pack.join("&fq=productId:") +
            "&PS=50&sl=" +
            shelfLayout +
            "&cc=1&sm=0";
          getProductPage(url, activateRemoveButtons);
        }
        function getProductPage(url, callback) {
          $.ajax({
            url: url,
            success: function (html) {
              wrapper.append(html);
              callback();
            },
            error: function () {
              getProductPage(url, callback);
            },
          });
        }
        function activateRemoveButtons() {
          wrapper.addClass("ready");
          Common.applySmartShootingStar();
          $("a.qd-sss-wishlist-delete-button").on("click", function () {
            $(this)
              .closest("ul")
              .hide("slow", function () {
                var items = $(this)
                  .closest(".prateleira")
                  .find(' > ul:not(".deleted")').length;
                if (!items) showEmptyListMessage();
              });
            $(this).closest("ul").addClass("deleted");
          });
        }
      }
    },
  };
  var Home = {
    init: function () {
      Home.categoriesQdV1Banners();
      Home.sliderFull();
      Home.applyCarouselShelf();
      Home.sendNewsletter();
      Home.bannerFix();
    },
    ajaxStop: function () {},
    windowOnload: function () {},
    categoriesQdV1Banners: function () {
      $(".box-banner")
        .parent()
        .each(function () {
          var $t = $(this);
          $t.addClass("qdBannerCount-" + $t.find(".box-banner").length);
        });
    },
    sliderFull: function () {
      var wrapper = $(".slider-qd-v1-full");
      wrapper.slick({
        autoplay: true,
        dots: true,
        fade: true,
        cssEase: "linear",
        infinite: true,
        speed: 500,
        draggable: false,
      });
      wrapper.each(function () {
        $(this).find(".slick-arrow").wrapAll('<div class="slick-nav" />');
      });
    },
    sendNewsletter: function () {
      var form = $("#form-newsletter");
      var jsnomeLoja = "mundialcalcados";
      var entity = "NL";
      var emailInput = form.find("[name=qd_email]");
      form.validate({
        rules: { email: { email: true } },
        submitHandler: function (form) {
          var $form = $(form);
          if (!$form.valid()) return;
          var inputs = $form.find("[name]");
          emailInput = emailInput.filter(inputs);
          $form.addClass("qd-loading");
          var saveContact = function (userId) {
            $.ajax({
              url: "//api.ipify.org?format=jsonp",
              dataType: "jsonp",
              success: function (data) {
                sendData(data.ip);
              },
              error: function () {
                $.ajax({
                  url: "//www.telize.com/jsonip",
                  dataType: "jsonp",
                  success: function (data) {
                    sendData(data.ip);
                  },
                  error: function (data) {
                    sendData(null);
                  },
                });
              },
            });
            var formData = $form.serializeObject();
            var sendData = function (ip) {
              formData["userId"] = userId;
              formData["ip"] = ip;
              formData["id"] = (emailInput.val() || "")
                .toLowerCase()
                .replace(/[^a-z0-9]/gi, function (v) {
                  return "-" + v.charCodeAt(0) + "-";
                });
              $.ajax({
                url: "/api/dataentities/" + entity + "/documents",
                type: "PATCH",
                dataType: "json",
                headers: {
                  Accept: "application/vnd.vtex.ds.v10+json",
                  "Content-Type": "application/json; charset=utf-8",
                },
                data: JSON.stringify(formData),
                success: function (data) {
                  $form.addClass("qd-form-success");
                  $form.trigger("QD.crmSuccess", [data]);
                },
                error: function () {
                  alert("Desculpe, não foi possível enviar seu formulário!");
                },
                complete: function () {
                  $form.removeClass("qd-loading");
                },
              });
            };
          };
          $.ajax({
            url:
              "/api/dataentities/CL/search?_fields=id&email=" +
              (emailInput.val() || "---"),
            type: "GET",
            dataType: "json",
            headers: { Accept: "application/vnd.vtex.ds.v10+json" },
            success: function (data) {
              if (data.length) saveContact(data[0].id);
              else saveContact(null);
            },
            error: function () {
              saveContact(null);
            },
          });
          return false;
        },
        errorPlacement: function (error, element) {},
      });
      $(window).on("QD.crmSuccess", function (e, data) {
        var newsletter = $(".home-qd-v1-newsletter");
        newsletter.find(".form-row-success").fadeIn("fast");
      });
    },
    applyCarouselShelf: function () {
      var wrapper = $(".home-qd-v1-links-shelfs .prateleira");
      if (!wrapper.length) return false;
      wrapper.each(function () {
        var $t = $(this);
        $t.find("h2").prependTo($t.parent());
      });
      wrapper.slick({
        prevArrow:
          '<button type="button" class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
        nextArrow:
          '<button type="button" class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        draggable: false,
        speed: 700,
        responsive: [
          {
            breakpoint: 1200,
            settings: { slidesToShow: 3, slidesToScroll: 3 },
          },
          { breakpoint: 991, settings: { slidesToShow: 2, slidesToScroll: 2 } },
          { breakpoint: 550, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        ],
      });
    },
    bannerFix: function () {
      $("[class*='home-qd-v1-highlight-']").each(function () {
        if (!$(this).find(".box-banner").length) {
          $(this).hide();
        }
      });
    },
  };
  var Search = {
    init: function () {},
    ajaxStop: function () {},
    windowOnload: function () {},
    seoTextCollapse: function () {
      $(".search-qd-v1-seo-collapse > div > h2").click(function () {
        $(this).parent().toggleClass("qd-on");
      });
    },
    hideExtendedMenu: function () {
      $(".search-qd-v1-navigator ul").each(function () {
        var t, li, qtt, moreLink, moreLi, click, liHide;
        t = $(this);
        li = t.find(">li");
        qtt = 10;
        if (li.length <= qtt) return;
        liHide = li
          .filter(":gt(" + (qtt - 1) + ")")
          .stop(true, true)
          .hide();
        moreLink = $('<a class="qd-viewMoreMenu">Mostrar mais</a>');
        t.after(moreLink);
        moreLi = $(
          '<li class="qd-viewMoreWrapper"><a class="qd-viewMoreMenu2">Mostrar mais filtros</a></li>'
        );
        t.append(moreLi);
        click = function () {
          liHide.stop(true, true).slideToggle(0, function () {
            if (li.filter(":visible").length > qtt) {
              moreLink.addClass("minus").text("Mostrar menos filtros");
              moreLi.addClass("minus").find("a").text("Mostrar menos filtros");
            } else {
              moreLink.removeClass("minus").text("Mostrar mais filtros");
              moreLi
                .removeClass("minus")
                .find("a")
                .text("Mostrar mais filtros");
            }
          });
        };
        moreLi.bind("click.qd_viewMore", click);
        moreLink.bind("click.qd_viewMore", click);
      });
      var wrapper = $(".search-single-navigator, .search-multiple-navigator");
      wrapper.find("h3, h4, h5").click(function (evt) {
        var $t = $(this);
        if (
          $(evt.target).is(wrapper.find("h3")) ||
          $(evt.target).is(wrapper.find("h4")) ||
          $(evt.target).is(wrapper.find("h5"))
        ) {
          $t.find("+ ul")
            .stop(true, true)
            .slideToggle(0, function () {
              $t.toggleClass("qd-seach-active-menu");
            });
          $t.find("+ div")
            .stop(true, true)
            .slideToggle(0, function () {
              $t.toggleClass("qd-seach-active-menu");
            });
        }
      });
    },
    changeFilterPosition: function () {
      $(".search-single-navigator h5.HideNumero")
        .next("ul.Número")
        .insertAfter($(".search-single-navigator h3").first());
      $(".search-single-navigator h5.HideNumero").insertAfter(
        $(".search-single-navigator h3").first()
      );
      $(".search-single-navigator h5.Numero")
        .next("ul")
        .insertAfter($(".search-single-navigator h3").first());
      $(".search-single-navigator h5.Numero").insertAfter(
        $(".search-single-navigator h3").first()
      );
    },
    smartResearchInit: function () {
      $(
        '<label class="sr_mz-price-filter" title="Filtro de Preço" index="0" style="display: none;"><span class="sr_box"></span><input rel="fq=P:[0+TO+999]" class="multi-search-checkbox" type="checkbox" name="sr_mz-price-filter" value="[0+TO+999]">Filtro de Preço<span class="sr_box2"></span></label>'
      ).appendTo($(".search-qd-v1-sliderPrice"));
      $(
        ".search-qd-v1-navigator input[type='checkbox'], .search-qd-v1-sliderPrice input[type='checkbox']"
      ).QD_SmartResearch({
        filterScrollTop: function (shelfOffset) {
          return shelfOffset.top - 80;
        },
      });
      $(".search-qd-v1-navigator").css("display", "block");
    },
    callSliderFilterPrice: function () {
      var filterPriceSlide = $(
        '<div class="search-filters-qd-v1-price"></div>'
      );
      var filterPrice = $('.search-qd-v1-navigator input[rel*="fq=P:"]').last();
      var pricesInterval = (filterPrice.val() || "").match(
        /([0-9\.]+)[^0-9]+([0-9\.]+)/
      ) || ["", ""];
      var maxPrice = Math.ceil(pricesInterval.pop() / 10) * 10;
      var minPrice = 0;
      var filterTitleMin = $(
        '<span class="search-filters-qd-v1-title">R$ ' + minPrice + "</span>"
      );
      var filterTitleMax = $(
        '<span class="search-filters-qd-v1-title" id="search-filters-qd-v1-title-max">R$' +
          maxPrice +
          "</span>"
      );
      var priceWrapper = $(".search-multiple-navigator .filtro_faixa-de-preco");
      var btnFilter = $('<a class="btn-filter" href="#">Filtrar</a>');
      var sliderWrapper = $('<div class="mz-slider-wrapper"></div>');
      var inputResearchWrapper = $(
        ".search-qd-v1-sliderPrice input[type='checkbox']"
      );
      priceWrapper.find("li").hide();
      priceWrapper.addClass("filtro_faixa-de-preco clearfix");
      priceWrapper.attr("data-qd-class", "faixa-de-preco");
      var urlMatch = /\/de-(.)+\?/;
      filterPrice.parent().hide();
      filterPriceSlide
        .appendTo(priceWrapper)
        .slider({
          range: true,
          min: minPrice,
          max: maxPrice,
          step: 10,
          values: [minPrice, maxPrice],
          slide: function (event, ui) {
            filterTitleMin.text("R$ " + ui.values[0] + ",00");
            filterTitleMax.text("R$ " + ui.values[1] + ",00");
          },
          change: function (event, ui) {
            var min = ui.values[0];
            var max = ui.values[1];
            var urlPrice = $(".filtro_faixa-de-preco li:first a").attr("href")
              ? $(".filtro_faixa-de-preco li:first a")
                  .attr("href")
                  .replace(
                    urlMatch,
                    "/de-" + ui.values[0] + "-a-" + ui.values[1] + "?"
                  )
              : "";
            btnFilter.attr("href", urlPrice);
            inputResearchWrapper.attr("data-sr-min", min);
            inputResearchWrapper.attr("data-sr-max", max);
          },
        })
        .slider("value", maxPrice);
      sliderWrapper.append(
        filterTitleMin,
        filterTitleMax,
        filterPriceSlide,
        btnFilter
      );
      sliderWrapper.insertAfter(priceWrapper.find("h5"));
      var sliderBlock = $(".search-multiple-navigator").parent();
      btnFilter.click(function (e) {
        e.preventDefault();
        $("body").removeClass("qd-sn-on");
        var min = inputResearchWrapper.attr("data-sr-min");
        var max = inputResearchWrapper.attr("data-sr-max");
        inputResearchWrapper.prop("checked", false);
        inputResearchWrapper.attr("data-sr-exec-ajax", false);
        inputResearchWrapper.trigger("change.qd_sr_change");
        inputResearchWrapper.attr("rel", "fq=P:[" + min + "+TO+" + max + "]");
        inputResearchWrapper.attr("value", "[" + min + "+TO+" + max + "]");
        inputResearchWrapper.prop("checked", true);
        inputResearchWrapper.attr("data-sr-exec-ajax", true);
        inputResearchWrapper.trigger("change.qd_sr_change");
        return false;
      });
    },
    openFiltersMenu: function () {
      $(".search-qd-v1-navigator-trigger").click(function (e) {
        e.preventDefault();
        $(document.body).toggleClass("qd-sn-on");
      });
    },
    showOrderBy: function () {
      var orderBy = $(".orderBy:first select");
      orderBy.appendTo(".search-qd-v1-orderby");
      orderBy
        .first()
        .clone()
        .appendTo(
          ".fixed-buttons-qd-v1-search-navigator .search-qd-v1-orderby-fixed"
        );
    },
    shelfLineFix: function () {
      try {
        var exec = function () {
          var curTop;
          var wrapper = $(
            "div[id*='ResultItems_'] >.prateleira:not('.qd-fi-on')"
          ).addClass("qd-fi-on");
          var shelf = wrapper.children("ul").removeClass("qd-first-line");
          shelf.first().addClass("qd-first-line");
          var setFirst = function () {
            shelf.each(function () {
              var $t = $(this);
              if ($t.is(".qd-first-line")) {
                curTop = $t.offset().top;
                shelf = shelf.not($t);
                return;
              }
              var offsetTop = $t.offset().top;
              if (offsetTop >= curTop - 10 && offsetTop <= curTop + 10)
                shelf = shelf.not($t);
              else {
                $t.addClass("qd-first-line");
                return false;
              }
            });
            if (shelf.length) setFirst();
          };
          setFirst();
        };
        exec();
        if (!window.qd_shelf_line_fix_) {
          $(window).on("QuatroDigital.sr_shelfCallback", function () {
            exec();
          });
          window.qd_shelf_line_fix_ = true;
        }
        var resize = $._data(window).events.resize;
        var allowResize = true;
        if (resize)
          for (var i = 0; i < resize.length; i++) {
            if (resize[i].namespace == "qd") {
              allowResize = false;
              break;
            }
          }
        if (allowResize) {
          var timeOut = 0;
          $(window).on("resize.qd", function () {
            clearTimeout(timeOut);
            timeOut = setTimeout(function () {
              $(".qd-first-line").removeClass(".qd-first-line");
              exec();
            }, 20);
          });
        }
      } catch (e) {
        typeof console !== "undefined" &&
          typeof console.error === "function" &&
          console.error("Problemas :( . Detalhes: " + e.message);
      }
    },
    hideNumberShelf: function () {
      var isUnique = true;
      $(".search-multiple-navigator .filtro_numero label").each(function () {
        if (!$(this).is(".sr_unico")) isUnique = false;
      });
      if (isUnique) $(".search-multiple-navigator .filtro_numero").hide();
    },
    removeNumberParentheses: function () {
      $(".search-single-navigator .Número a").each(function () {
        var $t = $(this);
        var text = $t.text();
        $t.text(text.replace(/\(\d+\)/gi, "").trim());
      });
    },
    openOrderBy: function () {
      $(".search-qd-v1-actions li.title-qd-v1-order").click(function (e) {
        e.preventDefault();
        $(document.body).toggleClass("qd-ob-on");
        $(".search-qd-v1-order-close").removeClass("hide");
      });
      $(".search-qd-v1-order").prepend(
        '<span class="search-qd-v1-order-close hide"><i class="fa fa-times-circle" aria-hidden="true"></i></span>'
      );
      $(".search-qd-v1-order-close, .components-qd-v1-overlay").click(
        function () {
          $(document.body).removeClass("qd-ob-on");
          $(".search-qd-v1-order-close").addClass("hide");
        }
      );
    },
    addOrderBy: function () {
      $(".search-qd-v1-order a").click(function (e) {
        e.preventDefault();
        var $t = $(this);
        var value = $t.attr("data-order-parameter");
        location.search = (
          location.search.replace(/O=[^&]+/g, "") +
          "&" +
          value
        )
          .replace("?&", "?")
          .replace(/&{2,}/g, "&");
      });
      var orderBy = (location.search.match(/O=[^&]+/g, "") || [""]).pop();
      if (!orderBy.length) return;
      $(
        '.search-qd-v1-order a[data-order-parameter="' + orderBy + '"]'
      ).addClass("filterActive");
    },
  };
  var Product = {
    run: function () {},
    init: function () {
      Product.clickSkuList();
      Product.discountProductPage();
      Product.applyWishlist();
    },
    ajaxStop: function () {},
    windowOnload: function () {},
    productBuyTogether: function () {
      if (
        $(".product-qd-v1-buy-together-wrap .buy-together-content table").length
      ) {
        $(".product-qd-v1-buy-together-wrap").show();
      }
    },
    hideUniqueSkuOption: function () {
      $(".sku-selector-container [class*='group_']").each(function () {
        var $t = $(this);
        var input = $t.find("input");
        if (input.length !== 1) return;
        input.attr("checked", true).change();
        $t.getParent("ul").hide();
      });
    },
    applyMosaicCategoriesBanners: function () {
      $(".mosaic-categories-qd-v1-wrapper > .box-banner").QD_mosaicBanners({
        bannerColSecurityMargin: 0,
        containerWidth: 1e3,
        classFourColumn: "col-xs-6 col-sm-6 col-md-3",
      });
    },
    productDescriptionCollapse: function () {
      $(".product-qd-v1-collpse-title").click(function () {
        $(this).toggleClass("qd-is-active");
        $(this).next().toggleClass("qd-is-active");
      });
    },
    ContWish: function () {
      $(".product-qd-v1-image").append("<div class='contWhish'>0</div>");
      var cont = $(".qd-sss-wishlist-button");
      var id = skuJson.productId;
      $.ajax({
        url:
          "/api/dataentities/CD/search?_where=idSku=" +
          id +
          "&_fields=qdt_wish,idSku",
        type: "GET",
        method: "GET",
        dataType: "json",
        headers: {
          Accept: "application/vnd.vtex.ds.v10+json",
          "Content-Type": "application/json; charset=utf-8",
        },
        data: JSON.stringify({ idSku: id, qdt_wish: cont }),
        success: function () {
          if (id > 0) {
            $(".contWhish").addClass("qd-favorited");
          } else {
            alert("não favoritou");
          }
        },
      });
      $(".qd-sss-wishlist-button").on("click", function () {
        $(".contWhish").text((cont = parseInt(1)));
        if (
          $(".product-qd-v1-sku-information").hasClass("qd-favorited") === true
        ) {
          $(".contWhish").text((cont = parseInt(1) - 1));
        }
      });
    },
    discountFlagProductPage: function () {
      var dl;
      for (b = 0; b < window.dataLayer.length; b++) {
        console.log("here");
        if ("string" == typeof window.dataLayer[b].pageCategory) {
          dl = window.dataLayer[b];
          break;
        }
      }
      if (!dl || dl.productListPriceTo == dl.productPriceTo) {
        return;
      }
      var listPrice = Number(dl.productListPriceTo);
      var bestPrice = Number(dl.productPriceTo);
      if ($(".price-list-price").hasClass("valor-de")) {
        desconto = ((1 - bestPrice / listPrice) * 100).toFixed(0);
        console.log(listPrice);
        console.log(bestPrice);
        console.log(desconto);
        $(".product-qd-v1-image").append(
          "<div class='porcentagem-desconto'>" + desconto + "%OFF</div>"
        );
      }
    },
    shippingTableFormat: function () {
      window.ajaxShippin = function (method, url, postData, target, callback) {
        $.ajax({
          type: method,
          url: url,
          data: postData,
          success: function (dataResult) {
            var data = $(dataResult.replace(/R\$/gi, "R$ "));
            data.find("tbody tr").each(function () {
              var $t = $(this);
              var tr = $t.find("td:eq(1)");
              var text = tr.text().split(", entrega em");
              tr.clone()
                .insertAfter(tr)
                .text(text[1].split(" para o")[0].toUpperCase() || "");
              tr.text(text[0].replace("Frete ", "").toUpperCase() || "");
              $t.find("td:eq(0)").insertAfter(tr);
            });
            $(target).html(data).show();
          },
          error: function (xhr, status, error) {
            $(target).html(status).show();
          },
        });
      };
    },
    openShipping: function () {
      if (typeof window.ShippingValue === "function") window.ShippingValue();
    },
    shippingSubmitOnEnter: function () {
      console.log("To aqui");
      $("#txtCep").on("keyup", function (e) {
        if (e.keyCode == 13) {
          $("#btnFreteSimulacao").click();
        }
      });
    },
    setAvailableBodyClass: function () {
      function checkVisibleNotify(available) {
        if (available)
          $(document.body)
            .addClass("qd-product-available")
            .removeClass("qd-product-unavailable");
        else
          $(document.body)
            .addClass("qd-product-unavailable")
            .removeClass("qd-product-available");
      }
      $(document).on("skuSelected.vtex", function (e, id, sku) {
        checkVisibleNotify(sku.available);
      });
      checkVisibleNotify(skuJson.available);
    },
    qdCallThumbVideo: function () {
      if (!$("td.value-field.Video:first, td.value-field.VIDEO:first").length)
        return;
      $(".product-qd-v1-image-carrousel").addClass("product-qd-v1-image-video");
      var videoUrl =
        $("td.value-field.Video:first, td.value-field.VIDEO:first")
          .text()
          .replace("?v=", "/")
          .replace("watch", "embed") +
        "?wmode=transparent&rel=0&enablejsapi=1&autoplay=0&mute=0";
      iframe =
        '<iframe id="YTplayer" width="100%" height="500px" src="' +
        videoUrl +
        '"  frameborder="0" allowfullscreen/>';
      videoThumb =
        videoUrl.match(/embed\/(.+)\?/).length > 1
          ? "https://i.ytimg.com/vi_webp/" +
            videoUrl.match(/embed\/(.+)\?/)[1] +
            "/maxresdefault.webp"
          : "/arquivos/qd-playIco.png";
      $(window).on("QD_SPC_beforeImageSlick", function (e, wrapper) {
        $(wrapper).append($("<div>" + iframe + "</div>"));
      });
      $(window).on("QD_SPC_beforeThumbSlick", function (e, wrapper) {
        var thumb = $(
          '<div><div><img style="margin-bottom: 0" src="' +
            videoThumb +
            '"></div><span>Video</span></div>'
        ).appendTo($(wrapper));
        thumb.find("div").css({ padding: "2px 5px", background: "#000" });
        thumb
          .find("span")
          .css({
            "margin-top": "5px",
            "text-transform": "uppercase",
            "font-size": "8px",
            color: "#4d4d4f",
            display: "block",
          });
      });
      $(".product-qd-v1-image").on(
        "afterChange",
        function (e, slick, currentSlideIndex) {
          if (slick.slideCount == currentSlideIndex + 1) {
            if (!$("#YTplayer").attr("src").length)
              $("#YTplayer").attr("src", videoUrl);
          } else {
            $("#YTplayer").attr("src", "");
          }
        }
      );
    },
    applyTrackMouse: function () {
      $.trackMouse({
        text: "Clique para dar zoom",
        target: ".product-qd-v1-wrapper .product-qd-v1-image-carrousel img ",
      });
      $(".jq-mouse-tracker").removeAttr("style");
    },
    applyCarouselThumb: function () {
      $(".product-qd-v1-wrapper").QD_smartPhotoCarousel({
        imageWrapper: ".product-qd-v1-image-carrousel",
        thumbsWrapper: ".product-qd-v1-image-thumbs",
        sizes: { thumb: "155-233", image: "475-714", imagezoom: "1200-1804" },
        slickOptions: {
          images: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: true,
            focusOnSelect: true,
            responsive: [{ breakpoint: 991, settings: { arrows: true } }],
          },
          thumbs: {
            vertical: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: false,
            arrows: true,
            focusOnSelect: true,
          },
        },
      });
    },
    selectSku: function () {
      var wrapper = $(".skuList");
      wrapper.on("selectSku.qd_click", function () {
        try {
          var $t = $(this);
          var buyButton = $t.find(".buy-button");
          if (buyButton.length)
            var skuId = buyButton.attr("href").match(/sku\=([0-9]+)/i)[1];
          else var skuId = $t.find(".sku-notifyme-skuid").val();
          var selectedSku;
          for (var i = 0; i < skuJson.skus.length; i++) {
            if (skuJson.skus[i].sku == skuId) {
              selectedSku = skuJson.skus[i];
              break;
            }
          }
          if (selectedSku)
            $(document).trigger("skuSelected.vtex", [skuId, selectedSku]);
          wrapper.removeClass(
            "qd-sku-list-selected qd-sku-list-selected-by-click"
          );
          $t.addClass("qd-sku-list-selected");
        } catch (e) {
          if (
            typeof console !== "undefined" &&
            typeof console.info === "function"
          )
            console.info("Problemas ao selecionar o SKU", e.message);
        }
      });
      wrapper.click(function () {
        var $t = $(this);
        $t.trigger("selectSku.qd_click");
        $t.addClass("qd-sku-list-selected-by-click");
      });
    },
    toggleNotifyModal: function () {
      if ($(".notifyme-modal-close").length == 0)
        $(
          '<div class="notifyme-modal-close">Fechar <span>X</span></div>'
        ).appendTo(".notifyme");
      $(".notifyme-modal-close").click(function () {
        $(".portal-notify-me-ref").fadeOut();
      });
      $(".portal-notify-me-ref").css("display", $(".notifyme").css("display"));
    },
    showSmartCartOnBuy: function () {
      $(".qd-bb-productAdded").hide();
      $(".buy-button").click(function () {
        if ($(this).attr("href").indexOf("javascript") < 0)
          $(".header-qd-v1-cart-link").first().trigger("click");
      });
    },
    showPopupPurchaseConfirmation: function () {
      $(".qd-bb-productAdded").hide();
      $(".buy-button").click(function () {
        scrollTo(0, 0);
        var buyButton = $(this);
        if (buyButton.length)
          var skuId = buyButton.attr("href").match(/sku\=([0-9]+)/i)[1];
        else var skuId = $t.find(".sku-notifyme-skuid").val();
        var selectedSku;
        for (var i = 0; i < skuJson.skus.length; i++) {
          if (skuJson.skus[i].sku == skuId) {
            selectedSku = skuJson.skus[i];
            break;
          }
        }
        if (selectedSku) {
          var skuData = getSkuData(selectedSku.sku);
          var wrapper =
            '<div class="product-qd-v1-purchase-confirmation"> <div class="purchase-confirmation-close"></div> <div class="row"> <div class="col-md-5 col-xs-12"> <div class="purchase-confirmation-image"> <img src="{{image}}" alt="Imagem do Produto"> </div> </div> <div class="col-md-7 col-xs-12"> <div class="purchase-confirmation-brand"> {{brand}} </div> <div class="purchase-confirmation-product-name"> {{productName}} </div> <div class="purchase-confirmation-product-ref"> Ref. {{reference}} </div> <br> <div class="purchase-confirmation-price"> <p>{{price}}</p> <span>ou {{numberDiscount}}x de R$ {{discount}}</span> </div> <br> <div class="purchase-confirmation-color"> <p>Cor</p> <span>{{color}}</span> </div> <br> <div class="purchase-confirmation-number"> <p>Número</p> <span>{{number}}</span> </div> </div> </div> <hr> <div class="purchase-confirmation-buttons"> <div class="row"> <div class="col-md-6 col-xs-12"> <a class="purchase-confirmation-button purchase-confirmation-buy-more" href="#">Comprar Mais</a> </div> <div class="col-md-6 col-xs-12"> <a class="purchase-confirmation-button purchase-confirmation-checkout" href="/checkout/#/cart">Fechar Pedido</a> </div> </div> </div> </div>';
          wrapper = wrapper.replace("{{brand}}", selectedSku.seller);
          wrapper = wrapper.replace("{{productName}}", skuData.name);
          wrapper = wrapper.replace("{{image}}", selectedSku.image);
          wrapper = wrapper.replace("{{reference}}", skuData.reference);
          wrapper = wrapper.replace("{{price}}", selectedSku.bestPriceFormated);
          wrapper = wrapper.replace(
            "{{numberDiscount}}",
            skuData.bestInstallmentNumber
          );
          wrapper = wrapper.replace(
            "{{discount}}",
            skuData.bestInstallmentValue
          );
          wrapper = wrapper.replace("{{image}}", selectedSku.image);
          wrapper = wrapper.replace("{{number}}", selectedSku.values[0]);
          wrapper = wrapper.replace("{{color}}", selectedSku.values[1]);
          if ($(".product-qd-v1-purchase-confirmation").length > 0)
            $(".product-qd-v1-purchase-confirmation").html(wrapper);
          else $(wrapper).appendTo(".product-qd-v1-sku-information");
          $(".product-qd-v1-purchase-confirmation").fadeIn();
          $(
            ".purchase-confirmation-close, .purchase-confirmation-buy-more"
          ).click(function () {
            $(".product-qd-v1-purchase-confirmation").fadeOut();
          });
        }
      });
    },
    applyColorImages: function () {
      try {
        $(".sku-selector-container-0 .Cor")
          .find(".dimension-Cor")
          .each(function () {
            i = 0;
            var cor = $(this).prev(".input-dimension-Cor").attr("data-value");
            for (var i = 0; i < skuJson.skus.length; i++) {
              if (skuJson.skus[i].dimensions.Cor == cor) {
                $(this)
                  .wrapInner('<span class="product-qd-v1-sku-text"></span>')
                  .prepend(
                    '<span class="product-qd-v1-sku-img"><img src="' +
                      skuJson.skus[i].image.replace(
                        /(ids\/[0-9]+)\-[0-9]+\-[0-9]+/,
                        "$1-100-150"
                      ) +
                      '" /></span>'
                  );
                break;
              }
            }
          });
      } catch (e) {
        typeof console !== "undefined" &&
          typeof console.error === "function" &&
          console.error(
            "Ops, algo saiu errado ao aplicar as imagens das cores :( . Detalhes: " +
              e.message
          );
      }
    },
    checkItemUnavailable: function () {
      try {
        var cor = $(".dimension-Cor.sku-picked").text();
        $(".sku-selector-container-0 .Tamanho")
          .find(".dimension-Tamanho")
          .each(function (i) {
            var $t = $(this);
            var tamanho = $t.text();
            var d = 0;
            for (var i = 0; i < skuJson.skus.length; i++) {
              if (
                skuJson.skus[i].dimensions["Tamanho"] == tamanho &&
                skuJson.skus[i].dimensions.Cor == cor &&
                skuJson.skus[i].availablequantity == 0
              ) {
                $t.addClass("item_unavailable");
                break;
              }
              d++;
            }
          });
      } catch (e) {
        typeof console !== "undefined" &&
          typeof console.error === "function" &&
          console.error(
            "Ops, algo saiu errado ao checar a disponibilidade dos items do produto :( . Detalhes: " +
              e.message
          );
      }
    },
    replyFirstThumbColor: function () {
      var wrapper = $(
        "<ul class='product-qd-v1-color-active'><li><div class='row'><div class='color-in-stock img-responsive'></div></div></li></ul>"
      );
      wrapper
        .find(".color-in-stock")
        .append(
          '<img src="' +
            skuJson.skus[0].image +
            '" width="100" height="145" title="' +
            skuJson.name +
            '">'
        );
      wrapper.find(".color-in-stock").append("<h3>" + skuJson.name + "</h3>");
      wrapper.insertAfter(
        ".product-qd-v1-sku-selection-color-similiar .prateleira h2"
      );
    },
    activatePricePlugin: function () {
      var wrapper = $(".product-qd-v1-price");
      if (!wrapper.find(".plugin-preco").length)
        $('<div class="plugin-preco"></div>')
          .appendTo(wrapper)
          .price(skuJson.productId);
    },
    ImageZoom: function () {
      var wrapper = $(
        '<div class="product-qd-v1-modal-gallery"><div class="container-fluid"><div class="row"><div class="qd-v1-close-button"><button type="button">Fechar</button></div><div class="col-md-1 col-xs-12"><div class="row"><div class="col-xs-12"><div class="product-qd-v1-show"><ul class="product-qd-v1-image-thumbs product-qd-v1-image-thumbs-gallery QD-thumbs img-responsive"></ul></div></div></div></div><div class="col-xs-12 col-md-5 col-md-offset-4"><div class="row"><div class="col-xs-12"><div class="product-qd-v1-image"><div class="product-qd-v1-image-carrousel-wrapper"><div class="product-qd-v1-image-carrousel product-qd-v1-image-carrousel-gallery"></div></div></div></div></div></div></div></div></div>'
      );
      $("main").append(wrapper);
      $(".product-qd-v1-modal-gallery").QD_smartPhotoCarousel({
        imageWrapper: ".product-qd-v1-image-carrousel-gallery",
        thumbsWrapper: ".product-qd-v1-image-thumbs-gallery",
        sizes: { thumb: "155-229", image: "795-995", imagezoom: "1200-1804" },
        slickOptions: {
          images: {
            lazyLoad: "progressive",
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: true,
            infinite: true,
            focusOnSelect: true,
            responsive: [
              { breakpoint: 995, settings: { arrows: false, dots: false } },
            ],
          },
          thumbs: {
            vertical: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
            arrows: true,
            focusOnSelect: true,
          },
        },
      });
    },
    openModalGallery: function () {
      $(".product-qd-v1-wrapper .product-qd-v1-image-carrousel img").on(
        "click",
        function () {
          $(document.body).addClass("image-carrousel-on");
          if ($(window).width() < 991) {
            var image = $(this);
            if (!image.parent().is(".product-qd-v1-zoom-mobile"))
              image
                .wrap(
                  '<span class="product-qd-v1-zoom-mobile" style="display:inline-block"></span>'
                )
                .css("display", "block")
                .parent()
                .zoom({
                  url: image
                    .attr("src")
                    .replace(/(ids\/[0-9]+)[0-9-]+/i, "$1-1200-1804"),
                  on: "toggle",
                  touch: false,
                });
            else
              image.zoom({
                url: image
                  .attr("src")
                  .replace(/(ids\/[0-9]+)[0-9-]+/i, "$1-1200-1804"),
                on: "toggle",
                touch: false,
              });
            return;
          }
          $(".product-qd-v1-modal-gallery").show();
          $(document.body).css("overflow", "hidden");
          $(
            ".product-qd-v1-modal-gallery .product-qd-v1-image-carrousel-gallery"
          ).slick("refresh");
          $(
            ".product-qd-v1-modal-gallery .product-qd-v1-image-thumbs-gallery"
          ).slick("refresh");
        }
      );
      $(".qd-v1-close-button button").on("click", function () {
        $(".product-qd-v1-modal-gallery").hide();
        $(document.body)
          .css("overflow", "auto")
          .removeClass("image-carrousel-on");
      });
      $(".product-qd-v1-modal-gallery .product-qd-v1-image-carrousel").on(
        "afterChange",
        function () {
          $(".product-qd-v1-modal-gallery .product-qd-v1-image-carrousel")
            .find(".slick-slide img")
            .each(function () {
              var image = $(this);
              if (!image.attr("src")) return;
              if (!image.parent().is(".product-qd-v1-zoom-wrapper"))
                image
                  .wrap(
                    '<span class="product-qd-v1-zoom-wrapper" style="display:inline-block"></span>'
                  )
                  .css("display", "block")
                  .parent()
                  .zoom({
                    url: image
                      .attr("src")
                      .replace(/(ids\/[0-9]+)[0-9-]+/i, "$1-1400-2004"),
                    on: "mouseover",
                    touch: false,
                  });
              else
                image.zoom({
                  url: image
                    .attr("src")
                    .replace(/(ids\/[0-9]+)[0-9-]+/i, "$1-1200-1804"),
                  on: "mouseover",
                  touch: false,
                });
            });
        }
      );
    },
    forceImageZoom: function () {
      try {
        if ($(window).width() < 993) return;
        $(".product-qd-v1-image-carrousel")
          .find(".slick-slide img")
          .each(function () {
            var image = $(this);
            if (!image.parent().is(".product-qd-v1-zoom-wrapper"))
              image
                .wrap(
                  '<span class="product-qd-v1-zoom-wrapper" style="display:inline-block"></span>'
                )
                .css("display", "block")
                .parent()
                .zoom({
                  url: image
                    .attr("src")
                    .replace(/(ids\/[0-9]+)[0-9-]+/i, "$1-1200-1804"),
                  on: "mouseover",
                  touch: false,
                });
            else
              image.zoom({
                url: image
                  .attr("src")
                  .replace(/(ids\/[0-9]+)[0-9-]+/i, "$1-1200-1804"),
                on: "mouseover",
                touch: false,
              });
          });
      } catch (e) {
        typeof console !== "undefined" &&
          typeof console.error === "function" &&
          console.error(
            "Ops, algo saiu errado com o zoom :( . Detalhes: " + e.message
          );
      }
    },
    inputPlaceholders: function () {
      $('input[name="notifymeClientName"]').attr("placeholder", "Nome");
      $('input[name="notifymeClientEmail"]').attr("placeholder", "E-mail");
    },
    applyWishlist: function () {
      $(".mz-product").QD_smartShootingStar({
        isProductPage: true,
        list: Common.showIfHasWishes,
      });
    },
    saveAmountFlag: function () {
      var flag = $(".product-qd-v1-stamps-highlight-discount");
      $(window).on("skuSelected.vtex", function (e, sku, data) {
        if (!flag.length)
          flag = $(
            '<div class="product-qd-v1-stamps-highlight-discount"></div>'
          ).prependTo(".product-qd-v1-stamps");
        if (data.listPrice > data.bestPrice)
          flag
            .text(parseInt(100 - (data.bestPrice / data.listPrice) * 100) + "%")
            .show();
        else flag.hide();
      });
      if (skuJson.skus.length >= 1) {
        if (!flag.length)
          flag = $(
            '<div class="product-qd-v1-stamps-highlight-discount"></div>'
          ).prependTo(".product-qd-v1-stamps");
        if (skuJson.skus[0].listPrice > skuJson.skus[0].bestPrice)
          flag
            .text(
              parseInt(
                100 -
                  (skuJson.skus[0].bestPrice / skuJson.skus[0].listPrice) * 100
              ) + "%"
            )
            .show();
      }
    },
    applyStamp: function () {
      var specifications = $(".value-field.Especificacoes")
        .html()
        .split("<br>");
      var target = $(".product-qd-v1-image");
      if (!specifications.length || !target.length) return;
      var specificationsObj = {};
      for (i = 0; i < specifications.length; i++) {
        var key = specifications[i].split(":")[0];
        var value = specifications[i].split(":")[1];
        specificationsObj[key.toLowerCase()] = value.trim();
      }
      if (
        specificationsObj.length < 1 ||
        specificationsObj.material.toLowerCase() !== "couro"
      )
        return;
      var material = specificationsObj.material;
      console.log("material", material);
      target.append(
        '<div class="stamp-material"><span class="couro">' +
          material +
          "</div></div>"
      );
    },
    doubleNumberSku: function () {
      var skuText = $(
        ".product-qd-v1-sku-selection ul.topic .skuList span > label"
      );
      if (skuText.text().indexOf("/") > -1) {
        skuText.addClass("dupla-numeracao");
      }
    },
    clickSkuList: function () {
      for (var i = 0; i < skuJson.skus.length; i++) {
        var name = skuJson.skus[i].skuname;
        var label = $(
          '.skuList.item-dimension-Modelo span input[dimension="Modelo"][data-value="' +
            name +
            '"]+ label'
        );
        var img = skuJson.skus[i].image;
        var thumb = '<img src="' + img + '"/>';
        $(label).append(thumb);
      }
    },
    discountProductPage: function () {
      var oldPrice = skuJson.skus[0].listPrice;
      var newPrice = skuJson.skus[0].bestPrice;
      var discount = skuJson.skus[0].discount;
    },
  };
  var List = {
    run: function () {},
    init: function () {},
    ajaxStop: function () {},
    windowOnload: function () {},
  };
  var Institutional = {
    init: function () {
      Institutional.sidemenuToggle();
      Institutional.accountCustomization();
      Institutional.submitFormTrabalheConosco();
      Institutional.initLpBlackFriday();
      if ($("body").is(".cartao-mundial")) {
        Institutional.collapseAboutMore();
      }
      if ($("body").is(".marcas")) {
        Institutional.menuPersonalization();
        Institutional.brandSearch();
      }
    },
    submitFormTrabalheConosco: function () {
      try {
        if ($("body").hasClass("trabalhe-conosco")) {
          Institutional.formCadastreMask();
          var form = $(".trabalhe-conosco .institucional-qd-v1-form");
          $("#qd_form_pcd")[0].checked == false;
          $("#qd_form_pcd")[0].value = 0;
          var formData = new FormData();
          form.find(".form-qd-v1-submit").on("click", function () {
            $(".form-qd-v1-submit")[0].value = "Enviando...";
            $(".form-qd-v1-submit")[0].style.cursor = "no-drop";
            var objValues = {};
            var error = false;
            form.find(":input").each(function (index, e) {
              var label = $("[for=" + e.id + "]");
              if (label.length > 0) label[0].style.color = "#000";
              e.style.borderColor = "#000";
              if (e.type == "radio")
                if (!$(e).hasClass("not_submit"))
                  objValues[e.name.replace("qd_form_", "")] = $(
                    "input[name='" + e.name + "']:checked"
                  ).val();
              if (e.type == "checkbox")
                if (!$(e).hasClass("not_submit"))
                  objValues[e.name.replace("qd_form_", "")] =
                    $("#qd_form_pcd")[0].checked == ""
                      ? 0
                      : $("#qd_form_pcd")[0].checked;
              if (e.type == "file")
                if (e.files.length > 0) {
                  formData.append(e.name.replace("qd_form_", ""), e.files[0]);
                } else {
                  error = true;
                }
              if (
                $(e).hasClass("required") &&
                (e.value == "" || e.value == null || e.value == "undefined") &&
                e.type != "radio"
              )
                error = true;
              if (error) {
                label[0].style.color = "red";
                e.style.borderColor = "red";
                var lastElementForm =
                  form.children()[form.children().length - 1];
                $(lastElementForm).find("span").remove();
                var html_campo_obrigatorio =
                  "<span style='color: red;'>*Campo " +
                  label[0].innerHTML.replace("*", "") +
                  " é obrigatório</span>";
                $(html_campo_obrigatorio).appendTo(lastElementForm);
                $(".form-qd-v1-submit")[0].value = "Enviar";
                $(".form-qd-v1-submit")[0].style.cursor = "pointer";
                return false;
              } else {
                if (!$(e).hasClass("not_submit"))
                  objValues[e.name.replace("qd_form_", "")] =
                    e.name == "qd_form_rg"
                      ? e.value
                          .replace("-", "")
                          .replace(".", "")
                          .replace(".", "")
                      : e.value;
                if (form.find(":input").length - 1 == index) {
                  if (!error) {
                    var jsonValues = JSON.stringify(objValues);
                    $.ajax({
                      headers: {
                        Accept: "application/vnd.vtex.ds.v10+json",
                        "Content-Type": "application/json",
                      },
                      url: "/api/dataentities/TB/documents",
                      type: "POST",
                      data: jsonValues,
                    }).done(function (res) {
                      var id = res.DocumentId;
                      $.ajax({
                        url:
                          "/api/dataentities/TB/documents/" +
                          id +
                          "/curriculo/attachments",
                        type: "POST",
                        crossDomain: true,
                        data: formData,
                        processData: false,
                        contentType: false,
                        mimeType: "multipart/form-data",
                        headers: { Accept: "application/vnd.vtex.ds.v10+json" },
                      }).done(function (data) {
                        var lastElementForm =
                          form.children()[form.children().length - 1];
                        $(lastElementForm).find("span").remove();
                        var html_campo_obrigatorio =
                          "<span style='color: green;'>Curriculum enviado com sucesso!</span>";
                        $(html_campo_obrigatorio).appendTo(lastElementForm);
                        $(".form-qd-v1-submit")[0].value = "Enviar";
                        $(".form-qd-v1-submit")[0].style.cursor = "pointer";
                        form.find(":input").each(function (index, e) {
                          if (e.type != "button") e.value = "";
                        });
                      });
                    });
                  }
                }
              }
            });
          });
        }
      } catch (e) {
        typeof console !== "undefined" &&
          typeof console.error === "function" &&
          console.error("Problemas :( . Detalhes: " + e.message);
      }
    },
    ajaxStop: function () {},
    windowOnload: function () {},
    sidemenuToggle: function () {
      $(".institucional-qd-v1-menu-toggle").click(function (evt) {
        evt.preventDefault();
        $(document.body).addClass("qd-sn-on");
      });
      $(".institucional-qd-v1-side-menu-wrap-close").click(function () {
        $(document.body).removeClass("qd-sn-on");
      });
    },
    brandSearch: function () {
      var letterWrappers = $(".marcas-qd-v1-results > div");
      var searchBtn = $(".marcas-qd-v1-search-box a");
      var searchInput = $(".marcas-qd-v1-search-box input");
      letterWrappers.each(function () {
        if (!$(this).find("p + ul").length) {
          $(this).addClass("hidden");
        } else {
          $(this).addClass("clearfix");
        }
      });
      searchInput.on("keyup", function () {
        var query = searchInput.val().toLowerCase().replace(/\s/g, "");
        var queryLength = query.length;
        if (queryLength == 0 || queryLength > 2) {
          if (!$(".marcas-qd-v1-results-message").length) {
            $(".marcas-qd-v1-results").append(
              '<p class="marcas-qd-v1-results-message">Desculpe, não encontramos essa marca... <br> Tente novamente!</p>'
            );
          }
          letterWrappers.find("> ul > li > p").each(function () {
            var title = $(this).text().toLowerCase().replace(/\s/g, "");
            if (title === query || query == 0) {
              $(this).closest("ul").show();
              $(this)
                .parents(".clearfix")
                .find("> .marcas-qd-v1-title")
                .addClass("visible");
              $(".marcas-qd-v1-results-message").remove();
            } else {
              $(this).closest("ul").hide();
              $(this).parents(".clearfix").find("> .marcas-qd-v1-title").hide();
            }
          });
        }
      });
      searchBtn.on("click", function (e) {
        e.preventDefault();
        var query = searchInput.val();
        if (query.length > 0) {
          window.location.href = "/" + query.toLowerCase().replace(/\s/g, "-");
        }
      });
    },
    menuPersonalization: function () {
      var wrapper = $(".search-qd-v1-navigator");
      wrapper.find("h3, h4, h5").click(function (evt) {
        var $t = $(this);
        if (
          $(evt.target).is(wrapper.find("h3")) ||
          $(evt.target).is(wrapper.find("h4")) ||
          $(evt.target).is(wrapper.find("h5"))
        ) {
          $t.find("+ ul")
            .stop(true, true)
            .slideToggle(0, function () {
              $t.toggleClass("qd-seach-active-menu");
            });
          $t.find("+ div")
            .stop(true, true)
            .slideToggle(0, function () {
              $t.toggleClass("qd-seach-active-menu");
            });
        }
      });
    },
    accountCustomization: function () {
      var profileWrapper = $(".account-qd-v1-accountUserProfile");
      var profileForm = $("#editar-perfil-conteudo");
      profileForm.appendTo(profileWrapper);
      profileWrapper
        .find(".modal-header, .profile-detail-display,.modal hide fade")
        .remove();
      var accountForm = profileForm
        .find(".modal-body")
        .addClass("account-qd-v1-profile-form")
        .removeClass("modal-body");
      var buttonSave = $(".save-cancel-buttons").removeClass("modal-footer");
      buttonSave.find("#profile-submit").val("Salvar Alterações");
      accountForm.prepend(
        "<p>Altere os campos abaixo para manter seus dados de cadastro atualizado.</p>"
      );
      $(".form-contact-data-email").insertAfter(
        $(".form-personal-data-surname")
      );
      $(".form-contact-data-telephone").appendTo(
        $(".profile-detail-form-personal-data")
      );
      $(".form-contact-data-cellphone").appendTo(
        $(".profile-detail-form-business-data")
      );
      var formProfileWrapper = profileForm.find(
        ".profile-detail-form .control-group"
      );
      var formContentProfile = [];
      formProfileWrapper.find(".control-label").each(function () {
        if ($(this).text() == "Sexo: ") {
          $(this).remove();
          return;
        }
        formContentProfile.push($(this).text().trim().replace(":", ""));
        $(this).remove();
      });
      var inputContentProfile = formProfileWrapper.find(
        "input[name!='gender']"
      );
      var i = 0;
      inputContentProfile.each(function () {
        var t = formContentProfile[i];
        $(this).attr("placeholder", t);
        i++;
      });
      var required = $(
        ".account-qd-v1-profile-form .profile-detail-form-personal-data input"
      );
      var i = 0;
      required.each(function () {
        var profileInput = $(this);
        profileInput.attr("required", true);
        i++;
      });
      $(
        ".account-qd-v1-profile-form .profile-detail-form-personal-data #nickName"
      ).removeAttr("required");
      buttonSave.find("#profile-submit").click(function (e) {
        if ($("#profile").valid()) return;
        e.preventDefault();
        return false;
      });
      var wrapperAddress = $(".account-qd-v1-accountAddress");
      var formAddress = $("#address-edit").find("#form-address");
      formAddress
        .find(".modal-body")
        .addClass("account-qd-v1-profile-form")
        .removeClass(".modal-body");
      wrapperAddress.find(
        $(
          "#address-edit, #address-remove, .address-display-block, .modal-header"
        ).remove()
      );
      wrapperAddress.append(formAddress).html();
      var wrapperFormAddress = formAddress.find(".address-form .control-group");
      var formContentAddress = [];
      wrapperFormAddress.find(".control-label").each(function () {
        if (($(this).text() == "Tipo: ") & ($(this).text() == "Estado: ")) {
          $(this).remove();
          return;
        } else {
          formContentAddress.push($(this).text().trim().replace(":", ""));
          $(this).remove();
          return;
        }
      });
      wrapperFormAddress.find("#addressType, #state").remove();
      var inputContentAddress = wrapperFormAddress.find(
        "input[name!='addressType'||'state']"
      );
      var i = 0;
      inputContentAddress.each(function () {
        var t = formContentAddress[i];
        var addressInput = $(this);
        addressInput.attr("placeholder", t);
        i++;
      });
      var radioOne = $(
        ".profile-detail-form-personal-data .form-personal-data-gender .gender-female-label"
      );
      var radioTwo = $(
        ".profile-detail-form-personal-data .form-personal-data-gender .radio"
      ).first();
      radioOne.insertBefore(radioTwo);
      formProfileWrapper.find("#business-toggle").click(function (e) {
        e.preventDefault();
      });
    },
    collapseAboutMore: function () {
      $(".QDm__action").click(function () {
        $(this).toggleClass("qd-on").next().toggleClass("qd-on");
      });
    },
    checkEmailExist: function (email) {
      window.QD_checkEmailExist_request =
        window.QD_checkEmailExist_request ||
        $.ajax({
          url: "//api.vtexcrm.com.br/" + jsnomeLoja + "/dataentities/CL/search",
          data: { _fields: "id", email: email },
          type: "GET",
          dataType: "json",
          headers: { Accept: "application/vnd.vtex.ds.v10+json" },
          success: function (data) {
            if (data.length)
              alert(
                "Este e-mail já existe em nosso cadastro. Para maiores informações por favor entre em contato com o Atendimento ao Cliente."
              );
          },
          complete: function () {
            window.QD_checkEmailExist_request = undefined;
          },
        });
      return window.QD_checkEmailExist_request;
    },
    checkCnpjExist: function (cnpj) {
      window.QD_checkCnpjExist_request =
        window.QD_checkCnpjExist_request ||
        $.ajax({
          url: "//api.vtexcrm.com.br/" + jsnomeLoja + "/dataentities/CL/search",
          data: {
            _fields: "id",
            corporateDocument: cnpj.replace(/[^0-9]/gi, ""),
          },
          type: "GET",
          dataType: "json",
          headers: { Accept: "application/vnd.vtex.ds.v10+json" },
          success: function (data) {
            if (data.length)
              alert(
                "Este CNPJ já existe em nosso cadastro. Para maiores informações por favor entre em contato com o Atendimento ao Cliente."
              );
          },
          complete: function () {
            window.QD_checkCnpjExist_request = undefined;
          },
        });
      return window.QD_checkCnpjExist_request;
    },
    formCadastreMask: function () {
      var form = $(".form-qd-v1");
      if (!form.length || typeof $.fn.mask !== "function") return;
      form.find("[name=qd_form_cpnj]").mask("00.000.000/0000-00");
      form.find("[name=qd_form_cpf]").mask("000.000.000-00");
      form.find("[name=qd_form_rg]").mask("00.000.000-0");
      form.find("[name=qd_form_phone]").mask("(00) 0000-00009");
      form.find("[name=qd_form_celphone]").mask("(00) 0000-00009");
      form.find("[name=qd_form_tel_1]").mask("(00) 0000-00009");
      form.find("[name=qd_form_tel_2]").mask("(00) 0000-00009");
      form.find("[name=qd_form_zipcode]").mask("00000-000");
      form.find("[name=qd_form_cep]").mask("00000-000");
      form.find("[name=qd_form_ie]").mask("###.###.###.###.###");
      form.find("[name=qd_form_birthdate]").mask("00/00/0000");
      form.find("[name=qd_form_data_nascimento]").mask("00/00/0000");
      var interest = form.find("[name=qd_form_interest]");
      var sector = form.find("[name=qd_form_sector]");
      function populateData(list, target) {
        if (!list || !list.length || !target) return;
        target.empty();
        for (var i = 0; i < list.length; i++) {
          target.append(
            '<option value="' + list[i] + '">' + list[i] + "</option>"
          );
        }
      }
      var sectorOptions = {
        default: [
          "Vendedor (a)",
          "Caixa",
          "Estoquista",
          "Gerente",
          "Supervisor (a)",
          "Coordenador (a)",
          "Menor Aprendiz",
        ],
        administrative: [
          "Fiscal",
          "Contábil",
          "Financeiro",
          "Departamento Pessoal",
          "Gestão de Pessoas",
          "TI",
          "Marketing",
          "Compras",
          "SAC",
        ],
        ecommerce: [
          "Fotógrafo",
          "Gerente",
          "Assistente de e-commerce",
          "Assistente de SAC",
          "Estoquista",
          "Logística",
        ],
      };
      interest.on("change", function (e) {
        if ($(this).val().toLowerCase().indexOf("loja física") >= 0) {
          populateData(sectorOptions.default, sector);
        } else if ($(this).val().toLowerCase().indexOf("administrativo") >= 0) {
          populateData(sectorOptions.administrative, sector);
        } else if ($(this).val().toLowerCase().indexOf("e-commerce") >= 0) {
          populateData(sectorOptions.ecommerce, sector);
        }
      });
    },
    initLpBlackFriday: function () {
      try {
        if ($("body").hasClass("mz-bf")) {
          function initCountDown() {
            var date = $(".mz-bf-countdown-date").html();
            var d = date.split("/")[0];
            var m = date.split("/")[1];
            var a = date.split("/")[2];
            var dateFormat =
              new Date(a + "-" + m + "-" + d + "T00:00:00").getTime() -
              new Date().getTime();
            var upgradeTime = dateFormat / 1e3;
            var seconds = upgradeTime;
            function timer() {
              var days = Math.floor(seconds / 24 / 60 / 60);
              var hoursLeft = Math.floor(seconds - days * 86400);
              var hours = Math.floor(hoursLeft / 3600);
              var minutesLeft = Math.floor(hoursLeft - hours * 3600);
              var minutes = Math.floor(minutesLeft / 60);
              var remainingSeconds = seconds % 60;
              function pad(n) {
                return n < 10 ? "0" + n : n;
              }
              $($(".mz-bf-countdown-item span")[0]).html(pad(days));
              $($(".mz-bf-countdown-item span")[1]).html(pad(hours));
              $($(".mz-bf-countdown-item span")[2]).html(pad(minutes));
              $($(".mz-bf-countdown-item span")[3]).html(
                ("" + pad(remainingSeconds)).split(".")[0]
              );
              if (seconds == 0) {
                clearInterval(countdownTimer);
                document.getElementById("countdown").innerHTML = "Completed";
              } else {
                seconds--;
              }
            }
            var countdownTimer = setInterval(function () {
              timer();
            }, 1e3);
          }
          function slickBanner() {
            var $sliderIntro = $(".mz-bf-banner, .mz-bf-banner-mobile");
            $sliderIntro.slick({
              waitForAnimate: false,
              autoplay: !0,
              autoplaySpeed: 4500,
              infinite: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: true,
              dots: true,
            });
          }
          function slickCollection(element, slidesToShow, slidesToScroll) {
            element.find("li.helperComplement").remove();
            element.slick({
              infinite: true,
              slidesToShow: slidesToShow,
              slidesToScroll: slidesToScroll,
              responsive: [
                {
                  breakpoint: 1e3,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                  },
                },
              ],
            });
          }
          function bf_newsletter() {
            $("#mz-bf-newsletter").on("submit", function (e) {
              e.preventDefault();
              var _this = this;
              var obj_dados = {
                email: $(_this).find('input[name="email"]').val(),
              };
              var json_dados = JSON.stringify(obj_dados);
              $.ajax({
                url: "/api/dataentities/NW/documents",
                type: "PATCH",
                dataType: "json",
                headers: {
                  Accept: "application/vnd.vtex.ds.v10+json",
                  "Content-Type": "application/json",
                },
                data: json_dados,
                success: function (res) {
                  alert("Você está cadastrado na Newsletter!");
                  return false;
                },
                error: function (res) {},
              });
              return false;
            });
          }
          initCountDown();
          slickBanner();
          slickCollection(
            $(".mz-bf-collection-container .prateleira ul"),
            4,
            2
          );
          slickCollection(
            $(".mz-bf-best-discounts-collection .prateleira ul"),
            2,
            1
          );
          bf_newsletter();
        }
      } catch (error) {
        console.log(error);
      }
    },
  };
  var Orders = {
    init: function () {
      Orders.bootstrapCssFix();
      Orders.shippingTracking();
      Orders.ordersCustomization();
      $(window).on("hashchange", function () {
        Orders.shippingTracking();
      });
    },
    ajaxStop: function () {
      Orders.bootstrapCssFix();
    },
    windowOnload: function () {},
    bootstrapCssFix: function () {
      var styleSheets = document.styleSheets;
      for (var i = 0; i < styleSheets.length; i++) {
        if (
          (styleSheets[i].href || "").indexOf(
            "io.vtex.com.br/front-libs/bootstrap/2.3.2/css/bootstrap.min.css"
          ) > -1 ||
          (styleSheets[i].href || "").indexOf(
            "io.vtex.com.br/front-libs/bootstrap/2.3.2/css/bootstrap-responsive.min.css"
          ) > -1
        ) {
          styleSheets[i].disabled = true;
        }
      }
    },
    shippingTracking: function () {
      if ($(".qd-btnRastreo").length) return;
      try {
        if (window.location.pathname.indexOf("account/orders") < 0) return;
        var orderId;
        window.location.hash.split("&").forEach(function (elem) {
          if (elem.indexOf("/v") > -1) orderId = elem.replace("#", "");
        });
        if (!orderId) return;
        if (!vtexjs.checkout.orderForm) {
          setTimeout(function () {
            Orders.shippingTracking();
          }, 100);
          return;
        }
        $.ajax({
          url:
            "/api/oms/user/orders" +
            orderId +
            "?clientEmail=" +
            vtexjs.checkout.orderForm.clientProfileData.email,
          dataType: "json",
          success: function (orderData) {
            if (
              orderData.status !== "invoiced" ||
              !$(".myo-progress-bar").length
            )
              return;
            var btnRastrear = "";
            var isCorreio,
              isTotalExpress = false;
            var trackingCode =
              orderData.packageAttachment.packages["0"].trackingNumber;
            if (/[a-z]{2}[0-9]{9}BR/i.test(trackingCode)) isCorreio = true;
            else if (
              orderData.shippingData.logisticsInfo["0"].selectedSla
                .toLowerCase()
                .indexOf("total express") > -1
            )
              isTotalExpress = true;
            if (isCorreio) {
              btnRastrear = $(
                '<a class="qd-btnRastreo" href="http://www2.correios.com.br/sistemas/rastreamento/resultado.cfm" target="_blank">RASTREAR PEDIDO</a>'
              );
            }
            if (isTotalExpress) {
              btnRastrear = $(
                '<a class="qd-btnRastreo" href="https://tracking.totalexpress.com.br/tracking/0?cpf_cnpj=36128380832" target="_blank">RASTREAR PEDIDO</a>'
              );
            }
            btnWrapper = $(".myo-product-table").prev("div");
            if (!btnWrapper.length) return;
            btnWrapper.append(btnRastrear);
          },
        });
      } catch (e) {
        typeof console !== "undefined" &&
          typeof console.error === "function" &&
          console.error("Problemas :( . Detalhes: " + e.message);
      }
    },
    ordersCustomization: function () {
      $(".orders-qd-v1-orderList").on(
        "click",
        ".myo-order-header",
        function () {
          $(this).next().slideToggle();
        }
      );
    },
  };
} catch (e) {
  typeof console !== "undefined" &&
    typeof console.error === "function" &&
    console.error("Houve um erro nos objetos. Detalhes: " + e.message);
}
try {
  (function () {
    var body, ajaxStop, windowLoad;
    windowLoad = function () {
      Common.windowOnload();
      if (body.is(".home")) Home.windowOnload();
      else if (body.is(".resultado-busca, .departamento, .categoria"))
        Search.windowOnload();
      else if (body.is(".produto")) Product.windowOnload();
      else if (body.is(".listas")) List.windowOnload();
      else if (body.is(".wishlist")) Wishlist.windowOnload();
      else if (body.is(".institucional")) Institutional.windowOnload();
      else if (body.is(".orders")) Orders.windowOnload();
    };
    ajaxStop = function () {
      Common.ajaxStop();
      if (body.is(".home")) Home.ajaxStop();
      else if (body.is(".resultado-busca, .departamento, .categoria"))
        Search.ajaxStop();
      else if (body.is(".produto")) Product.ajaxStop();
      else if (body.is(".listas")) List.ajaxStop();
      else if (body.is(".wishlist")) Wishlist.ajaxStop();
      else if (body.is(".institucional")) Institutional.ajaxStop();
      else if (body.is(".orders")) Orders.ajaxStop();
    };
    $(function () {
      body = $(document.body);
      Common.init();
      if (body.is(".home")) Home.init();
      else if (body.is(".resultado-busca, .departamento, .categoria")) {
        Search.isSearch = $(document.body).is(".resultado-busca");
        Search.isDepartament = $(document.body).is(".departamento");
        Search.isCategory = $(document.body).is(".categoria");
        Search.init();
      } else if (body.is(".produto")) Product.init();
      else if (body.is(".listas")) List.init();
      else if (body.is(".wishlist")) Wishlist.init();
      else if (body.is(".institucional")) Institutional.init();
      else if (body.is(".orders")) Orders.init();
      $(document).ajaxStop(ajaxStop);
      $(window).load(windowLoad);
      body.addClass("jsFullLoaded");
    });
    Common.run();
    if (
      location.pathname.substr(location.pathname.length - 2, 2).toLowerCase() ==
      "/p"
    )
      Product.run();
    else if (location.pathname.search(/^(\/giftlist|\/list\/)/) == 0)
      List.run();
  })();
} catch (e) {
  typeof console !== "undefined" &&
    typeof console.error === "function" &&
    $("body").addClass("jsFullLoaded jsFullLoadedError") &&
    console.error(
      "Houve um erro ao iniciar os objetos. Detalhes: " + e.message
    );
}
(function () {
  "function" !== typeof $.cookie &&
    (function (c) {
      "function" === typeof define && define.amd
        ? define(["jquery"], c)
        : "object" === typeof exports
        ? c(require("jquery"))
        : c(jQuery);
    })(function (c) {
      function p(a) {
        a = e.json ? JSON.stringify(a) : String(a);
        return e.raw ? a : encodeURIComponent(a);
      }
      function n(a, g) {
        var b;
        if (e.raw) b = a;
        else
          a: {
            var d = a;
            0 === d.indexOf('"') &&
              (d = d.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
            try {
              d = decodeURIComponent(d.replace(l, " "));
              b = e.json ? JSON.parse(d) : d;
              break a;
            } catch (h) {}
            b = void 0;
          }
        return c.isFunction(g) ? g(b) : b;
      }
      var l = /\+/g,
        e = (c.cookie = function (a, g, b) {
          if (1 < arguments.length && !c.isFunction(g)) {
            b = c.extend({}, e.defaults, b);
            if ("number" === typeof b.expires) {
              var d = b.expires,
                h = (b.expires = new Date());
              h.setTime(+h + 864e5 * d);
            }
            return (document.cookie = [
              e.raw ? a : encodeURIComponent(a),
              "=",
              p(g),
              b.expires ? "; expires=" + b.expires.toUTCString() : "",
              b.path ? "; path=" + b.path : "",
              b.domain ? "; domain=" + b.domain : "",
              b.secure ? "; secure" : "",
            ].join(""));
          }
          for (
            var d = a ? void 0 : {},
              h = document.cookie ? document.cookie.split("; ") : [],
              m = 0,
              l = h.length;
            m < l;
            m++
          ) {
            var f = h[m].split("="),
              k;
            k = f.shift();
            k = e.raw ? k : decodeURIComponent(k);
            f = f.join("=");
            if (a && a === k) {
              d = n(f, g);
              break;
            }
            a || void 0 === (f = n(f)) || (d[k] = f);
          }
          return d;
        });
      e.defaults = {};
      c.removeCookie = function (a, e) {
        if (void 0 === c.cookie(a)) return !1;
        c.cookie(a, "", c.extend({}, e, { expires: -1 }));
        return !c.cookie(a);
      };
    });
})();
function qd_number_format(b, c, d, e) {
  b = (b + "").replace(/[^0-9+\-Ee.]/g, "");
  b = isFinite(+b) ? +b : 0;
  c = isFinite(+c) ? Math.abs(c) : 0;
  e = "undefined" === typeof e ? "," : e;
  d = "undefined" === typeof d ? "." : d;
  var a = "",
    a = function (a, b) {
      var c = Math.pow(10, b);
      return "" + (Math.round(a * c) / c).toFixed(b);
    },
    a = (c ? a(b, c) : "" + Math.round(b)).split(".");
  3 < a[0].length && (a[0] = a[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, e));
  (a[1] || "").length < c &&
    ((a[1] = a[1] || ""), (a[1] += Array(c - a[1].length + 1).join("0")));
  return a.join(d);
}
(function (a) {
  a.fn.getParent = a.fn.closest;
})(jQuery);
(function (t) {
  "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery);
})(function (t) {
  (t.ui = t.ui || {}), (t.ui.version = "1.12.1");
  var e = 0,
    i = Array.prototype.slice;
  (t.cleanData = (function (e) {
    return function (i) {
      var s, n, o;
      for (o = 0; null != (n = i[o]); o++)
        try {
          (s = t._data(n, "events")),
            s && s.remove && t(n).triggerHandler("remove");
        } catch (a) {}
      e(i);
    };
  })(t.cleanData)),
    (t.widget = function (e, i, s) {
      var n,
        o,
        a,
        r = {},
        l = e.split(".")[0];
      e = e.split(".")[1];
      var h = l + "-" + e;
      return (
        s || ((s = i), (i = t.Widget)),
        t.isArray(s) && (s = t.extend.apply(null, [{}].concat(s))),
        (t.expr[":"][h.toLowerCase()] = function (e) {
          return !!t.data(e, h);
        }),
        (t[l] = t[l] || {}),
        (n = t[l][e]),
        (o = t[l][e] =
          function (t, e) {
            return this._createWidget
              ? (arguments.length && this._createWidget(t, e), void 0)
              : new o(t, e);
          }),
        t.extend(o, n, {
          version: s.version,
          _proto: t.extend({}, s),
          _childConstructors: [],
        }),
        (a = new i()),
        (a.options = t.widget.extend({}, a.options)),
        t.each(s, function (e, s) {
          return t.isFunction(s)
            ? ((r[e] = (function () {
                function t() {
                  return i.prototype[e].apply(this, arguments);
                }
                function n(t) {
                  return i.prototype[e].apply(this, t);
                }
                return function () {
                  var e,
                    i = this._super,
                    o = this._superApply;
                  return (
                    (this._super = t),
                    (this._superApply = n),
                    (e = s.apply(this, arguments)),
                    (this._super = i),
                    (this._superApply = o),
                    e
                  );
                };
              })()),
              void 0)
            : ((r[e] = s), void 0);
        }),
        (o.prototype = t.widget.extend(
          a,
          { widgetEventPrefix: n ? a.widgetEventPrefix || e : e },
          r,
          { constructor: o, namespace: l, widgetName: e, widgetFullName: h }
        )),
        n
          ? (t.each(n._childConstructors, function (e, i) {
              var s = i.prototype;
              t.widget(s.namespace + "." + s.widgetName, o, i._proto);
            }),
            delete n._childConstructors)
          : i._childConstructors.push(o),
        t.widget.bridge(e, o),
        o
      );
    }),
    (t.widget.extend = function (e) {
      for (var s, n, o = i.call(arguments, 1), a = 0, r = o.length; r > a; a++)
        for (s in o[a])
          (n = o[a][s]),
            o[a].hasOwnProperty(s) &&
              void 0 !== n &&
              (e[s] = t.isPlainObject(n)
                ? t.isPlainObject(e[s])
                  ? t.widget.extend({}, e[s], n)
                  : t.widget.extend({}, n)
                : n);
      return e;
    }),
    (t.widget.bridge = function (e, s) {
      var n = s.prototype.widgetFullName || e;
      t.fn[e] = function (o) {
        var a = "string" == typeof o,
          r = i.call(arguments, 1),
          l = this;
        return (
          a
            ? this.length || "instance" !== o
              ? this.each(function () {
                  var i,
                    s = t.data(this, n);
                  return "instance" === o
                    ? ((l = s), !1)
                    : s
                    ? t.isFunction(s[o]) && "_" !== o.charAt(0)
                      ? ((i = s[o].apply(s, r)),
                        i !== s && void 0 !== i
                          ? ((l = i && i.jquery ? l.pushStack(i.get()) : i), !1)
                          : void 0)
                      : t.error(
                          "no such method '" +
                            o +
                            "' for " +
                            e +
                            " widget instance"
                        )
                    : t.error(
                        "cannot call methods on " +
                          e +
                          " prior to initialization; " +
                          "attempted to call method '" +
                          o +
                          "'"
                      );
                })
              : (l = void 0)
            : (r.length && (o = t.widget.extend.apply(null, [o].concat(r))),
              this.each(function () {
                var e = t.data(this, n);
                e
                  ? (e.option(o || {}), e._init && e._init())
                  : t.data(this, n, new s(o, this));
              })),
          l
        );
      };
    }),
    (t.Widget = function () {}),
    (t.Widget._childConstructors = []),
    (t.Widget.prototype = {
      widgetName: "widget",
      widgetEventPrefix: "",
      defaultElement: "<div>",
      options: { classes: {}, disabled: !1, create: null },
      _createWidget: function (i, s) {
        (s = t(s || this.defaultElement || this)[0]),
          (this.element = t(s)),
          (this.uuid = e++),
          (this.eventNamespace = "." + this.widgetName + this.uuid),
          (this.bindings = t()),
          (this.hoverable = t()),
          (this.focusable = t()),
          (this.classesElementLookup = {}),
          s !== this &&
            (t.data(s, this.widgetFullName, this),
            this._on(!0, this.element, {
              remove: function (t) {
                t.target === s && this.destroy();
              },
            }),
            (this.document = t(s.style ? s.ownerDocument : s.document || s)),
            (this.window = t(
              this.document[0].defaultView || this.document[0].parentWindow
            ))),
          (this.options = t.widget.extend(
            {},
            this.options,
            this._getCreateOptions(),
            i
          )),
          this._create(),
          this.options.disabled &&
            this._setOptionDisabled(this.options.disabled),
          this._trigger("create", null, this._getCreateEventData()),
          this._init();
      },
      _getCreateOptions: function () {
        return {};
      },
      _getCreateEventData: t.noop,
      _create: t.noop,
      _init: t.noop,
      destroy: function () {
        var e = this;
        this._destroy(),
          t.each(this.classesElementLookup, function (t, i) {
            e._removeClass(i, t);
          }),
          this.element.off(this.eventNamespace).removeData(this.widgetFullName),
          this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),
          this.bindings.off(this.eventNamespace);
      },
      _destroy: t.noop,
      widget: function () {
        return this.element;
      },
      option: function (e, i) {
        var s,
          n,
          o,
          a = e;
        if (0 === arguments.length) return t.widget.extend({}, this.options);
        if ("string" == typeof e)
          if (((a = {}), (s = e.split(".")), (e = s.shift()), s.length)) {
            for (
              n = a[e] = t.widget.extend({}, this.options[e]), o = 0;
              s.length - 1 > o;
              o++
            )
              (n[s[o]] = n[s[o]] || {}), (n = n[s[o]]);
            if (((e = s.pop()), 1 === arguments.length))
              return void 0 === n[e] ? null : n[e];
            n[e] = i;
          } else {
            if (1 === arguments.length)
              return void 0 === this.options[e] ? null : this.options[e];
            a[e] = i;
          }
        return this._setOptions(a), this;
      },
      _setOptions: function (t) {
        var e;
        for (e in t) this._setOption(e, t[e]);
        return this;
      },
      _setOption: function (t, e) {
        return (
          "classes" === t && this._setOptionClasses(e),
          (this.options[t] = e),
          "disabled" === t && this._setOptionDisabled(e),
          this
        );
      },
      _setOptionClasses: function (e) {
        var i, s, n;
        for (i in e)
          (n = this.classesElementLookup[i]),
            e[i] !== this.options.classes[i] &&
              n &&
              n.length &&
              ((s = t(n.get())),
              this._removeClass(n, i),
              s.addClass(
                this._classes({ element: s, keys: i, classes: e, add: !0 })
              ));
      },
      _setOptionDisabled: function (t) {
        this._toggleClass(
          this.widget(),
          this.widgetFullName + "-disabled",
          null,
          !!t
        ),
          t &&
            (this._removeClass(this.hoverable, null, "ui-state-hover"),
            this._removeClass(this.focusable, null, "ui-state-focus"));
      },
      enable: function () {
        return this._setOptions({ disabled: !1 });
      },
      disable: function () {
        return this._setOptions({ disabled: !0 });
      },
      _classes: function (e) {
        function i(i, o) {
          var a, r;
          for (r = 0; i.length > r; r++)
            (a = n.classesElementLookup[i[r]] || t()),
              (a = e.add
                ? t(t.unique(a.get().concat(e.element.get())))
                : t(a.not(e.element).get())),
              (n.classesElementLookup[i[r]] = a),
              s.push(i[r]),
              o && e.classes[i[r]] && s.push(e.classes[i[r]]);
        }
        var s = [],
          n = this;
        return (
          (e = t.extend(
            { element: this.element, classes: this.options.classes || {} },
            e
          )),
          this._on(e.element, { remove: "_untrackClassesElement" }),
          e.keys && i(e.keys.match(/\S+/g) || [], !0),
          e.extra && i(e.extra.match(/\S+/g) || []),
          s.join(" ")
        );
      },
      _untrackClassesElement: function (e) {
        var i = this;
        t.each(i.classesElementLookup, function (s, n) {
          -1 !== t.inArray(e.target, n) &&
            (i.classesElementLookup[s] = t(n.not(e.target).get()));
        });
      },
      _removeClass: function (t, e, i) {
        return this._toggleClass(t, e, i, !1);
      },
      _addClass: function (t, e, i) {
        return this._toggleClass(t, e, i, !0);
      },
      _toggleClass: function (t, e, i, s) {
        s = "boolean" == typeof s ? s : i;
        var n = "string" == typeof t || null === t,
          o = {
            extra: n ? e : i,
            keys: n ? t : e,
            element: n ? this.element : t,
            add: s,
          };
        return o.element.toggleClass(this._classes(o), s), this;
      },
      _on: function (e, i, s) {
        var n,
          o = this;
        "boolean" != typeof e && ((s = i), (i = e), (e = !1)),
          s
            ? ((i = n = t(i)), (this.bindings = this.bindings.add(i)))
            : ((s = i), (i = this.element), (n = this.widget())),
          t.each(s, function (s, a) {
            function r() {
              return e ||
                (o.options.disabled !== !0 &&
                  !t(this).hasClass("ui-state-disabled"))
                ? ("string" == typeof a ? o[a] : a).apply(o, arguments)
                : void 0;
            }
            "string" != typeof a &&
              (r.guid = a.guid = a.guid || r.guid || t.guid++);
            var l = s.match(/^([\w:-]*)\s*(.*)$/),
              h = l[1] + o.eventNamespace,
              c = l[2];
            c ? n.on(h, c, r) : i.on(h, r);
          });
      },
      _off: function (e, i) {
        (i =
          (i || "").split(" ").join(this.eventNamespace + " ") +
          this.eventNamespace),
          e.off(i).off(i),
          (this.bindings = t(this.bindings.not(e).get())),
          (this.focusable = t(this.focusable.not(e).get())),
          (this.hoverable = t(this.hoverable.not(e).get()));
      },
      _delay: function (t, e) {
        function i() {
          return ("string" == typeof t ? s[t] : t).apply(s, arguments);
        }
        var s = this;
        return setTimeout(i, e || 0);
      },
      _hoverable: function (e) {
        (this.hoverable = this.hoverable.add(e)),
          this._on(e, {
            mouseenter: function (e) {
              this._addClass(t(e.currentTarget), null, "ui-state-hover");
            },
            mouseleave: function (e) {
              this._removeClass(t(e.currentTarget), null, "ui-state-hover");
            },
          });
      },
      _focusable: function (e) {
        (this.focusable = this.focusable.add(e)),
          this._on(e, {
            focusin: function (e) {
              this._addClass(t(e.currentTarget), null, "ui-state-focus");
            },
            focusout: function (e) {
              this._removeClass(t(e.currentTarget), null, "ui-state-focus");
            },
          });
      },
      _trigger: function (e, i, s) {
        var n,
          o,
          a = this.options[e];
        if (
          ((s = s || {}),
          (i = t.Event(i)),
          (i.type = (
            e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e
          ).toLowerCase()),
          (i.target = this.element[0]),
          (o = i.originalEvent))
        )
          for (n in o) n in i || (i[n] = o[n]);
        return (
          this.element.trigger(i, s),
          !(
            (t.isFunction(a) &&
              a.apply(this.element[0], [i].concat(s)) === !1) ||
            i.isDefaultPrevented()
          )
        );
      },
    }),
    t.each({ show: "fadeIn", hide: "fadeOut" }, function (e, i) {
      t.Widget.prototype["_" + e] = function (s, n, o) {
        "string" == typeof n && (n = { effect: n });
        var a,
          r = n ? (n === !0 || "number" == typeof n ? i : n.effect || i) : e;
        (n = n || {}),
          "number" == typeof n && (n = { duration: n }),
          (a = !t.isEmptyObject(n)),
          (n.complete = o),
          n.delay && s.delay(n.delay),
          a && t.effects && t.effects.effect[r]
            ? s[e](n)
            : r !== e && s[r]
            ? s[r](n.duration, n.easing, o)
            : s.queue(function (i) {
                t(this)[e](), o && o.call(s[0]), i();
              });
      };
    }),
    t.widget,
    (t.ui.keyCode = {
      BACKSPACE: 8,
      COMMA: 188,
      DELETE: 46,
      DOWN: 40,
      END: 35,
      ENTER: 13,
      ESCAPE: 27,
      HOME: 36,
      LEFT: 37,
      PAGE_DOWN: 34,
      PAGE_UP: 33,
      PERIOD: 190,
      RIGHT: 39,
      SPACE: 32,
      TAB: 9,
      UP: 38,
    }),
    (t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()));
  var s = !1;
  t(document).on("mouseup", function () {
    s = !1;
  }),
    t.widget("ui.mouse", {
      version: "1.12.1",
      options: {
        cancel: "input, textarea, button, select, option",
        distance: 1,
        delay: 0,
      },
      _mouseInit: function () {
        var e = this;
        this.element
          .on("mousedown." + this.widgetName, function (t) {
            return e._mouseDown(t);
          })
          .on("click." + this.widgetName, function (i) {
            return !0 === t.data(i.target, e.widgetName + ".preventClickEvent")
              ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"),
                i.stopImmediatePropagation(),
                !1)
              : void 0;
          }),
          (this.started = !1);
      },
      _mouseDestroy: function () {
        this.element.off("." + this.widgetName),
          this._mouseMoveDelegate &&
            this.document
              .off("mousemove." + this.widgetName, this._mouseMoveDelegate)
              .off("mouseup." + this.widgetName, this._mouseUpDelegate);
      },
      _mouseDown: function (e) {
        if (!s) {
          (this._mouseMoved = !1),
            this._mouseStarted && this._mouseUp(e),
            (this._mouseDownEvent = e);
          var i = this,
            n = 1 === e.which,
            o =
              "string" == typeof this.options.cancel && e.target.nodeName
                ? t(e.target).closest(this.options.cancel).length
                : !1;
          return n && !o && this._mouseCapture(e)
            ? ((this.mouseDelayMet = !this.options.delay),
              this.mouseDelayMet ||
                (this._mouseDelayTimer = setTimeout(function () {
                  i.mouseDelayMet = !0;
                }, this.options.delay)),
              this._mouseDistanceMet(e) &&
              this._mouseDelayMet(e) &&
              ((this._mouseStarted = this._mouseStart(e) !== !1),
              !this._mouseStarted)
                ? (e.preventDefault(), !0)
                : (!0 ===
                    t.data(e.target, this.widgetName + ".preventClickEvent") &&
                    t.removeData(
                      e.target,
                      this.widgetName + ".preventClickEvent"
                    ),
                  (this._mouseMoveDelegate = function (t) {
                    return i._mouseMove(t);
                  }),
                  (this._mouseUpDelegate = function (t) {
                    return i._mouseUp(t);
                  }),
                  this.document
                    .on("mousemove." + this.widgetName, this._mouseMoveDelegate)
                    .on("mouseup." + this.widgetName, this._mouseUpDelegate),
                  e.preventDefault(),
                  (s = !0),
                  !0))
            : !0;
        }
      },
      _mouseMove: function (e) {
        if (this._mouseMoved) {
          if (
            t.ui.ie &&
            (!document.documentMode || 9 > document.documentMode) &&
            !e.button
          )
            return this._mouseUp(e);
          if (!e.which)
            if (
              e.originalEvent.altKey ||
              e.originalEvent.ctrlKey ||
              e.originalEvent.metaKey ||
              e.originalEvent.shiftKey
            )
              this.ignoreMissingWhich = !0;
            else if (!this.ignoreMissingWhich) return this._mouseUp(e);
        }
        return (
          (e.which || e.button) && (this._mouseMoved = !0),
          this._mouseStarted
            ? (this._mouseDrag(e), e.preventDefault())
            : (this._mouseDistanceMet(e) &&
                this._mouseDelayMet(e) &&
                ((this._mouseStarted =
                  this._mouseStart(this._mouseDownEvent, e) !== !1),
                this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)),
              !this._mouseStarted)
        );
      },
      _mouseUp: function (e) {
        this.document
          .off("mousemove." + this.widgetName, this._mouseMoveDelegate)
          .off("mouseup." + this.widgetName, this._mouseUpDelegate),
          this._mouseStarted &&
            ((this._mouseStarted = !1),
            e.target === this._mouseDownEvent.target &&
              t.data(e.target, this.widgetName + ".preventClickEvent", !0),
            this._mouseStop(e)),
          this._mouseDelayTimer &&
            (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer),
          (this.ignoreMissingWhich = !1),
          (s = !1),
          e.preventDefault();
      },
      _mouseDistanceMet: function (t) {
        return (
          Math.max(
            Math.abs(this._mouseDownEvent.pageX - t.pageX),
            Math.abs(this._mouseDownEvent.pageY - t.pageY)
          ) >= this.options.distance
        );
      },
      _mouseDelayMet: function () {
        return this.mouseDelayMet;
      },
      _mouseStart: function () {},
      _mouseDrag: function () {},
      _mouseStop: function () {},
      _mouseCapture: function () {
        return !0;
      },
    }),
    t.widget("ui.slider", t.ui.mouse, {
      version: "1.12.1",
      widgetEventPrefix: "slide",
      options: {
        animate: !1,
        classes: {
          "ui-slider": "ui-corner-all",
          "ui-slider-handle": "ui-corner-all",
          "ui-slider-range": "ui-corner-all ui-widget-header",
        },
        distance: 0,
        max: 100,
        min: 0,
        orientation: "horizontal",
        range: !1,
        step: 1,
        value: 0,
        values: null,
        change: null,
        slide: null,
        start: null,
        stop: null,
      },
      numPages: 5,
      _create: function () {
        (this._keySliding = !1),
          (this._mouseSliding = !1),
          (this._animateOff = !0),
          (this._handleIndex = null),
          this._detectOrientation(),
          this._mouseInit(),
          this._calculateNewMax(),
          this._addClass(
            "ui-slider ui-slider-" + this.orientation,
            "ui-widget ui-widget-content"
          ),
          this._refresh(),
          (this._animateOff = !1);
      },
      _refresh: function () {
        this._createRange(),
          this._createHandles(),
          this._setupEvents(),
          this._refreshValue();
      },
      _createHandles: function () {
        var e,
          i,
          s = this.options,
          n = this.element.find(".ui-slider-handle"),
          o = "<span tabindex='0'></span>",
          a = [];
        for (
          i = (s.values && s.values.length) || 1,
            n.length > i && (n.slice(i).remove(), (n = n.slice(0, i))),
            e = n.length;
          i > e;
          e++
        )
          a.push(o);
        (this.handles = n.add(t(a.join("")).appendTo(this.element))),
          this._addClass(this.handles, "ui-slider-handle", "ui-state-default"),
          (this.handle = this.handles.eq(0)),
          this.handles.each(function (e) {
            t(this).data("ui-slider-handle-index", e).attr("tabIndex", 0);
          });
      },
      _createRange: function () {
        var e = this.options;
        e.range
          ? (e.range === !0 &&
              (e.values
                ? e.values.length && 2 !== e.values.length
                  ? (e.values = [e.values[0], e.values[0]])
                  : t.isArray(e.values) && (e.values = e.values.slice(0))
                : (e.values = [this._valueMin(), this._valueMin()])),
            this.range && this.range.length
              ? (this._removeClass(
                  this.range,
                  "ui-slider-range-min ui-slider-range-max"
                ),
                this.range.css({ left: "", bottom: "" }))
              : ((this.range = t("<div>").appendTo(this.element)),
                this._addClass(this.range, "ui-slider-range")),
            ("min" === e.range || "max" === e.range) &&
              this._addClass(this.range, "ui-slider-range-" + e.range))
          : (this.range && this.range.remove(), (this.range = null));
      },
      _setupEvents: function () {
        this._off(this.handles),
          this._on(this.handles, this._handleEvents),
          this._hoverable(this.handles),
          this._focusable(this.handles);
      },
      _destroy: function () {
        this.handles.remove(),
          this.range && this.range.remove(),
          this._mouseDestroy();
      },
      _mouseCapture: function (e) {
        var i,
          s,
          n,
          o,
          a,
          r,
          l,
          h,
          c = this,
          u = this.options;
        return u.disabled
          ? !1
          : ((this.elementSize = {
              width: this.element.outerWidth(),
              height: this.element.outerHeight(),
            }),
            (this.elementOffset = this.element.offset()),
            (i = { x: e.pageX, y: e.pageY }),
            (s = this._normValueFromMouse(i)),
            (n = this._valueMax() - this._valueMin() + 1),
            this.handles.each(function (e) {
              var i = Math.abs(s - c.values(e));
              (n > i ||
                (n === i &&
                  (e === c._lastChangedValue || c.values(e) === u.min))) &&
                ((n = i), (o = t(this)), (a = e));
            }),
            (r = this._start(e, a)),
            r === !1
              ? !1
              : ((this._mouseSliding = !0),
                (this._handleIndex = a),
                this._addClass(o, null, "ui-state-active"),
                o.trigger("focus"),
                (l = o.offset()),
                (h = !t(e.target).parents().addBack().is(".ui-slider-handle")),
                (this._clickOffset = h
                  ? { left: 0, top: 0 }
                  : {
                      left: e.pageX - l.left - o.width() / 2,
                      top:
                        e.pageY -
                        l.top -
                        o.height() / 2 -
                        (parseInt(o.css("borderTopWidth"), 10) || 0) -
                        (parseInt(o.css("borderBottomWidth"), 10) || 0) +
                        (parseInt(o.css("marginTop"), 10) || 0),
                    }),
                this.handles.hasClass("ui-state-hover") || this._slide(e, a, s),
                (this._animateOff = !0),
                !0));
      },
      _mouseStart: function () {
        return !0;
      },
      _mouseDrag: function (t) {
        var e = { x: t.pageX, y: t.pageY },
          i = this._normValueFromMouse(e);
        return this._slide(t, this._handleIndex, i), !1;
      },
      _mouseStop: function (t) {
        return (
          this._removeClass(this.handles, null, "ui-state-active"),
          (this._mouseSliding = !1),
          this._stop(t, this._handleIndex),
          this._change(t, this._handleIndex),
          (this._handleIndex = null),
          (this._clickOffset = null),
          (this._animateOff = !1),
          !1
        );
      },
      _detectOrientation: function () {
        this.orientation =
          "vertical" === this.options.orientation ? "vertical" : "horizontal";
      },
      _normValueFromMouse: function (t) {
        var e, i, s, n, o;
        return (
          "horizontal" === this.orientation
            ? ((e = this.elementSize.width),
              (i =
                t.x -
                this.elementOffset.left -
                (this._clickOffset ? this._clickOffset.left : 0)))
            : ((e = this.elementSize.height),
              (i =
                t.y -
                this.elementOffset.top -
                (this._clickOffset ? this._clickOffset.top : 0))),
          (s = i / e),
          s > 1 && (s = 1),
          0 > s && (s = 0),
          "vertical" === this.orientation && (s = 1 - s),
          (n = this._valueMax() - this._valueMin()),
          (o = this._valueMin() + s * n),
          this._trimAlignValue(o)
        );
      },
      _uiHash: function (t, e, i) {
        var s = {
          handle: this.handles[t],
          handleIndex: t,
          value: void 0 !== e ? e : this.value(),
        };
        return (
          this._hasMultipleValues() &&
            ((s.value = void 0 !== e ? e : this.values(t)),
            (s.values = i || this.values())),
          s
        );
      },
      _hasMultipleValues: function () {
        return this.options.values && this.options.values.length;
      },
      _start: function (t, e) {
        return this._trigger("start", t, this._uiHash(e));
      },
      _slide: function (t, e, i) {
        var s,
          n,
          o = this.value(),
          a = this.values();
        this._hasMultipleValues() &&
          ((n = this.values(e ? 0 : 1)),
          (o = this.values(e)),
          2 === this.options.values.length &&
            this.options.range === !0 &&
            (i = 0 === e ? Math.min(n, i) : Math.max(n, i)),
          (a[e] = i)),
          i !== o &&
            ((s = this._trigger("slide", t, this._uiHash(e, i, a))),
            s !== !1 &&
              (this._hasMultipleValues() ? this.values(e, i) : this.value(i)));
      },
      _stop: function (t, e) {
        this._trigger("stop", t, this._uiHash(e));
      },
      _change: function (t, e) {
        this._keySliding ||
          this._mouseSliding ||
          ((this._lastChangedValue = e),
          this._trigger("change", t, this._uiHash(e)));
      },
      value: function (t) {
        return arguments.length
          ? ((this.options.value = this._trimAlignValue(t)),
            this._refreshValue(),
            this._change(null, 0),
            void 0)
          : this._value();
      },
      values: function (e, i) {
        var s, n, o;
        if (arguments.length > 1)
          return (
            (this.options.values[e] = this._trimAlignValue(i)),
            this._refreshValue(),
            this._change(null, e),
            void 0
          );
        if (!arguments.length) return this._values();
        if (!t.isArray(arguments[0]))
          return this._hasMultipleValues() ? this._values(e) : this.value();
        for (
          s = this.options.values, n = arguments[0], o = 0;
          s.length > o;
          o += 1
        )
          (s[o] = this._trimAlignValue(n[o])), this._change(null, o);
        this._refreshValue();
      },
      _setOption: function (e, i) {
        var s,
          n = 0;
        switch (
          ("range" === e &&
            this.options.range === !0 &&
            ("min" === i
              ? ((this.options.value = this._values(0)),
                (this.options.values = null))
              : "max" === i &&
                ((this.options.value = this._values(
                  this.options.values.length - 1
                )),
                (this.options.values = null))),
          t.isArray(this.options.values) && (n = this.options.values.length),
          this._super(e, i),
          e)
        ) {
          case "orientation":
            this._detectOrientation(),
              this._removeClass(
                "ui-slider-horizontal ui-slider-vertical"
              )._addClass("ui-slider-" + this.orientation),
              this._refreshValue(),
              this.options.range && this._refreshRange(i),
              this.handles.css("horizontal" === i ? "bottom" : "left", "");
            break;
          case "value":
            (this._animateOff = !0),
              this._refreshValue(),
              this._change(null, 0),
              (this._animateOff = !1);
            break;
          case "values":
            for (
              this._animateOff = !0, this._refreshValue(), s = n - 1;
              s >= 0;
              s--
            )
              this._change(null, s);
            this._animateOff = !1;
            break;
          case "step":
          case "min":
          case "max":
            (this._animateOff = !0),
              this._calculateNewMax(),
              this._refreshValue(),
              (this._animateOff = !1);
            break;
          case "range":
            (this._animateOff = !0), this._refresh(), (this._animateOff = !1);
        }
      },
      _setOptionDisabled: function (t) {
        this._super(t), this._toggleClass(null, "ui-state-disabled", !!t);
      },
      _value: function () {
        var t = this.options.value;
        return (t = this._trimAlignValue(t));
      },
      _values: function (t) {
        var e, i, s;
        if (arguments.length)
          return (e = this.options.values[t]), (e = this._trimAlignValue(e));
        if (this._hasMultipleValues()) {
          for (i = this.options.values.slice(), s = 0; i.length > s; s += 1)
            i[s] = this._trimAlignValue(i[s]);
          return i;
        }
        return [];
      },
      _trimAlignValue: function (t) {
        if (this._valueMin() >= t) return this._valueMin();
        if (t >= this._valueMax()) return this._valueMax();
        var e = this.options.step > 0 ? this.options.step : 1,
          i = (t - this._valueMin()) % e,
          s = t - i;
        return (
          2 * Math.abs(i) >= e && (s += i > 0 ? e : -e),
          parseFloat(s.toFixed(5))
        );
      },
      _calculateNewMax: function () {
        var t = this.options.max,
          e = this._valueMin(),
          i = this.options.step,
          s = Math.round((t - e) / i) * i;
        (t = s + e),
          t > this.options.max && (t -= i),
          (this.max = parseFloat(t.toFixed(this._precision())));
      },
      _precision: function () {
        var t = this._precisionOf(this.options.step);
        return (
          null !== this.options.min &&
            (t = Math.max(t, this._precisionOf(this.options.min))),
          t
        );
      },
      _precisionOf: function (t) {
        var e = "" + t,
          i = e.indexOf(".");
        return -1 === i ? 0 : e.length - i - 1;
      },
      _valueMin: function () {
        return this.options.min;
      },
      _valueMax: function () {
        return this.max;
      },
      _refreshRange: function (t) {
        "vertical" === t && this.range.css({ width: "", left: "" }),
          "horizontal" === t && this.range.css({ height: "", bottom: "" });
      },
      _refreshValue: function () {
        var e,
          i,
          s,
          n,
          o,
          a = this.options.range,
          r = this.options,
          l = this,
          h = this._animateOff ? !1 : r.animate,
          c = {};
        this._hasMultipleValues()
          ? this.handles.each(function (s) {
              (i =
                100 *
                ((l.values(s) - l._valueMin()) /
                  (l._valueMax() - l._valueMin()))),
                (c["horizontal" === l.orientation ? "left" : "bottom"] =
                  i + "%"),
                t(this).stop(1, 1)[h ? "animate" : "css"](c, r.animate),
                l.options.range === !0 &&
                  ("horizontal" === l.orientation
                    ? (0 === s &&
                        l.range
                          .stop(1, 1)
                          [h ? "animate" : "css"]({ left: i + "%" }, r.animate),
                      1 === s &&
                        l.range[h ? "animate" : "css"](
                          { width: i - e + "%" },
                          { queue: !1, duration: r.animate }
                        ))
                    : (0 === s &&
                        l.range
                          .stop(1, 1)
                          [h ? "animate" : "css"](
                            { bottom: i + "%" },
                            r.animate
                          ),
                      1 === s &&
                        l.range[h ? "animate" : "css"](
                          { height: i - e + "%" },
                          { queue: !1, duration: r.animate }
                        ))),
                (e = i);
            })
          : ((s = this.value()),
            (n = this._valueMin()),
            (o = this._valueMax()),
            (i = o !== n ? 100 * ((s - n) / (o - n)) : 0),
            (c["horizontal" === this.orientation ? "left" : "bottom"] =
              i + "%"),
            this.handle.stop(1, 1)[h ? "animate" : "css"](c, r.animate),
            "min" === a &&
              "horizontal" === this.orientation &&
              this.range
                .stop(1, 1)
                [h ? "animate" : "css"]({ width: i + "%" }, r.animate),
            "max" === a &&
              "horizontal" === this.orientation &&
              this.range
                .stop(1, 1)
                [h ? "animate" : "css"]({ width: 100 - i + "%" }, r.animate),
            "min" === a &&
              "vertical" === this.orientation &&
              this.range
                .stop(1, 1)
                [h ? "animate" : "css"]({ height: i + "%" }, r.animate),
            "max" === a &&
              "vertical" === this.orientation &&
              this.range
                .stop(1, 1)
                [h ? "animate" : "css"]({ height: 100 - i + "%" }, r.animate));
      },
      _handleEvents: {
        keydown: function (e) {
          var i,
            s,
            n,
            o,
            a = t(e.target).data("ui-slider-handle-index");
          switch (e.keyCode) {
            case t.ui.keyCode.HOME:
            case t.ui.keyCode.END:
            case t.ui.keyCode.PAGE_UP:
            case t.ui.keyCode.PAGE_DOWN:
            case t.ui.keyCode.UP:
            case t.ui.keyCode.RIGHT:
            case t.ui.keyCode.DOWN:
            case t.ui.keyCode.LEFT:
              if (
                (e.preventDefault(),
                !this._keySliding &&
                  ((this._keySliding = !0),
                  this._addClass(t(e.target), null, "ui-state-active"),
                  (i = this._start(e, a)),
                  i === !1))
              )
                return;
          }
          switch (
            ((o = this.options.step),
            (s = n = this._hasMultipleValues() ? this.values(a) : this.value()),
            e.keyCode)
          ) {
            case t.ui.keyCode.HOME:
              n = this._valueMin();
              break;
            case t.ui.keyCode.END:
              n = this._valueMax();
              break;
            case t.ui.keyCode.PAGE_UP:
              n = this._trimAlignValue(
                s + (this._valueMax() - this._valueMin()) / this.numPages
              );
              break;
            case t.ui.keyCode.PAGE_DOWN:
              n = this._trimAlignValue(
                s - (this._valueMax() - this._valueMin()) / this.numPages
              );
              break;
            case t.ui.keyCode.UP:
            case t.ui.keyCode.RIGHT:
              if (s === this._valueMax()) return;
              n = this._trimAlignValue(s + o);
              break;
            case t.ui.keyCode.DOWN:
            case t.ui.keyCode.LEFT:
              if (s === this._valueMin()) return;
              n = this._trimAlignValue(s - o);
          }
          this._slide(e, a, n);
        },
        keyup: function (e) {
          var i = t(e.target).data("ui-slider-handle-index");
          this._keySliding &&
            ((this._keySliding = !1),
            this._stop(e, i),
            this._change(e, i),
            this._removeClass(t(e.target), null, "ui-state-active"));
        },
      },
    });
});
(function (q) {
  var e = jQuery;
  if ("function" !== typeof e.fn.QD_mosaicBanners) {
    var k = function (c, b) {
        if (
          "object" === typeof console &&
          "undefined" !== typeof console.error &&
          "undefined" !== typeof console.info &&
          "undefined" !== typeof console.warn
        ) {
          var a;
          "object" === typeof c
            ? (c.unshift("[Quatro Digital - Mosaic Banners]\n"), (a = c))
            : (a = ["[Quatro Digital - Mosaic Banners]\n" + c]);
          if (
            "undefined" === typeof b ||
            ("alerta" !== b.toLowerCase() && "aviso" !== b.toLowerCase())
          )
            if ("undefined" !== typeof b && "info" === b.toLowerCase())
              try {
                console.info.apply(console, a);
              } catch (f) {
                try {
                  console.info(a.join("\n"));
                } catch (d) {}
              }
            else
              try {
                console.error.apply(console, a);
              } catch (f) {
                try {
                  console.error(a.join("\n"));
                } catch (d) {}
              }
          else
            try {
              console.warn.apply(console, a);
            } catch (f) {
              try {
                console.warn(a.join("\n"));
              } catch (d) {}
            }
        }
      },
      l = {
        bannerRowSecurityMargin: 10,
        containerWidth: 1170,
        bannerColSecurityMargin: 15,
        classOneColumn: "col-xs-12",
        classTwoColumn: "col-xs-12 col-sm-6",
        classThreeColumn: "col-xs-12 col-sm-4",
        classFourColumn: "col-xs-6 col-sm-3",
      },
      m = function (c, b) {
        function a(f) {
          var d,
            g = new e();
          f.length &&
            (f.each(function () {
              var f = e(this),
                a = f.offset().top;
              d || (d = a);
              if (
                a >= d - b.bannerRowSecurityMargin &&
                a <= d + b.bannerRowSecurityMargin
              )
                g = g.add(f);
              else return !1;
            }),
            g.wrapAll('<div class="row qd-mb-row"></div>'),
            a(c.find(">div:not(.row)")));
        }
        a(c.find(">div:not(.row)"));
      },
      n = /width\=.?([0-9]+)/i,
      p = function (c, b) {
        var a = e(c);
        a.each(function () {
          var a = e(this);
          if (a.is(".qd-mb-banner"))
            k(["Este banner já esta processado!", a], "info");
          else {
            a.addClass("qd-mb-banner");
            var d = a.find("img").first();
            if (d.length) {
              var c = parseInt,
                d = d.wrap("<span></span>"),
                h = d.parent().html();
              d.unwrap("span");
              d = h.replace(/\n/g, " ");
              c = c((d.match(n) || [1]).pop(), 10) || 1;
              d =
                (b.containerWidth / 2) *
                (1 - b.bannerColSecurityMargin / 2 / 100);
              h =
                (b.containerWidth / 3) *
                (1 - b.bannerColSecurityMargin / 3 / 100);
              c > b.containerWidth * (1 - b.bannerColSecurityMargin / 100)
                ? a.addClass(b.classOneColumn)
                : c > d
                ? a.addClass(b.classTwoColumn)
                : c > h
                ? a.addClass(b.classThreeColumn)
                : a.addClass(b.classFourColumn);
            } else
              k(
                [
                  "Esse elemento não possui nenhuma imagem dentro. Certifique-se que esteja chamando um “.box-banner”. Mas você é burro hein!",
                  a,
                ],
                "info"
              );
          }
        });
        a.parent().each(function () {
          m(e(this), b);
        });
      };
    e.fn.QD_mosaicBanners = function (c) {
      var b = e(this);
      if (!b.length) return b;
      c = e.extend({}, l, c);
      b.qdPlugin = new p(b, c);
      return b;
    };
    e(function () {
      e(".qd_auto_mosaic_banners .box-banner").QD_mosaicBanners();
    });
  }
})(this);
!(function (a) {
  "use strict";
  "function" == typeof define && define.amd
    ? define(["jquery"], a)
    : "undefined" != typeof exports
    ? (module.exports = a(require("jquery")))
    : a(jQuery);
})(function (a) {
  "use strict";
  var b = window.Slick || {};
  (b = (function () {
    function c(c, d) {
      var f,
        e = this;
      (e.defaults = {
        accessibility: !0,
        adaptiveHeight: !1,
        appendArrows: a(c),
        appendDots: a(c),
        arrows: !0,
        asNavFor: null,
        prevArrow:
          '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
        nextArrow:
          '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
        autoplay: !1,
        autoplaySpeed: 3e3,
        centerMode: !1,
        centerPadding: "50px",
        cssEase: "ease",
        customPaging: function (b, c) {
          return a(
            '<button type="button" data-role="none" role="button" tabindex="0" />'
          ).text(c + 1);
        },
        dots: !1,
        dotsClass: "slick-dots",
        draggable: !0,
        easing: "linear",
        edgeFriction: 0.35,
        fade: !1,
        focusOnSelect: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: "ondemand",
        mobileFirst: !1,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        pauseOnDotsHover: !1,
        respondTo: "window",
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: "",
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: !0,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        verticalSwiping: !1,
        waitForAnimate: !0,
        zIndex: 1e3,
      }),
        (e.initials = {
          animating: !1,
          dragging: !1,
          autoPlayTimer: null,
          currentDirection: 0,
          currentLeft: null,
          currentSlide: 0,
          direction: 1,
          $dots: null,
          listWidth: null,
          listHeight: null,
          loadIndex: 0,
          $nextArrow: null,
          $prevArrow: null,
          slideCount: null,
          slideWidth: null,
          $slideTrack: null,
          $slides: null,
          sliding: !1,
          slideOffset: 0,
          swipeLeft: null,
          $list: null,
          touchObject: {},
          transformsEnabled: !1,
          unslicked: !1,
        }),
        a.extend(e, e.initials),
        (e.activeBreakpoint = null),
        (e.animType = null),
        (e.animProp = null),
        (e.breakpoints = []),
        (e.breakpointSettings = []),
        (e.cssTransitions = !1),
        (e.focussed = !1),
        (e.interrupted = !1),
        (e.hidden = "hidden"),
        (e.paused = !0),
        (e.positionProp = null),
        (e.respondTo = null),
        (e.rowCount = 1),
        (e.shouldClick = !0),
        (e.$slider = a(c)),
        (e.$slidesCache = null),
        (e.transformType = null),
        (e.transitionType = null),
        (e.visibilityChange = "visibilitychange"),
        (e.windowWidth = 0),
        (e.windowTimer = null),
        (f = a(c).data("slick") || {}),
        (e.options = a.extend({}, e.defaults, d, f)),
        (e.currentSlide = e.options.initialSlide),
        (e.originalSettings = e.options),
        "undefined" != typeof document.mozHidden
          ? ((e.hidden = "mozHidden"),
            (e.visibilityChange = "mozvisibilitychange"))
          : "undefined" != typeof document.webkitHidden &&
            ((e.hidden = "webkitHidden"),
            (e.visibilityChange = "webkitvisibilitychange")),
        (e.autoPlay = a.proxy(e.autoPlay, e)),
        (e.autoPlayClear = a.proxy(e.autoPlayClear, e)),
        (e.autoPlayIterator = a.proxy(e.autoPlayIterator, e)),
        (e.changeSlide = a.proxy(e.changeSlide, e)),
        (e.clickHandler = a.proxy(e.clickHandler, e)),
        (e.selectHandler = a.proxy(e.selectHandler, e)),
        (e.setPosition = a.proxy(e.setPosition, e)),
        (e.swipeHandler = a.proxy(e.swipeHandler, e)),
        (e.dragHandler = a.proxy(e.dragHandler, e)),
        (e.keyHandler = a.proxy(e.keyHandler, e)),
        (e.instanceUid = b++),
        (e.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
        e.registerBreakpoints(),
        e.init(!0);
    }
    var b = 0;
    return c;
  })()),
    (b.prototype.activateADA = function () {
      var a = this;
      a.$slideTrack
        .find(".slick-active")
        .attr({ "aria-hidden": "false" })
        .find("a, input, button, select")
        .attr({ tabindex: "0" });
    }),
    (b.prototype.addSlide = b.prototype.slickAdd =
      function (b, c, d) {
        var e = this;
        if ("boolean" == typeof c) (d = c), (c = null);
        else if (0 > c || c >= e.slideCount) return !1;
        e.unload(),
          "number" == typeof c
            ? 0 === c && 0 === e.$slides.length
              ? a(b).appendTo(e.$slideTrack)
              : d
              ? a(b).insertBefore(e.$slides.eq(c))
              : a(b).insertAfter(e.$slides.eq(c))
            : d === !0
            ? a(b).prependTo(e.$slideTrack)
            : a(b).appendTo(e.$slideTrack),
          (e.$slides = e.$slideTrack.children(this.options.slide)),
          e.$slideTrack.children(this.options.slide).detach(),
          e.$slideTrack.append(e.$slides),
          e.$slides.each(function (b, c) {
            a(c).attr("data-slick-index", b);
          }),
          (e.$slidesCache = e.$slides),
          e.reinit();
      }),
    (b.prototype.animateHeight = function () {
      var a = this;
      if (
        1 === a.options.slidesToShow &&
        a.options.adaptiveHeight === !0 &&
        a.options.vertical === !1
      ) {
        var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
        a.$list.animate({ height: b }, a.options.speed);
      }
    }),
    (b.prototype.animateSlide = function (b, c) {
      var d = {},
        e = this;
      e.animateHeight(),
        e.options.rtl === !0 && e.options.vertical === !1 && (b = -b),
        e.transformsEnabled === !1
          ? e.options.vertical === !1
            ? e.$slideTrack.animate(
                { left: b },
                e.options.speed,
                e.options.easing,
                c
              )
            : e.$slideTrack.animate(
                { top: b },
                e.options.speed,
                e.options.easing,
                c
              )
          : e.cssTransitions === !1
          ? (e.options.rtl === !0 && (e.currentLeft = -e.currentLeft),
            a({ animStart: e.currentLeft }).animate(
              { animStart: b },
              {
                duration: e.options.speed,
                easing: e.options.easing,
                step: function (a) {
                  (a = Math.ceil(a)),
                    e.options.vertical === !1
                      ? ((d[e.animType] = "translate(" + a + "px, 0px)"),
                        e.$slideTrack.css(d))
                      : ((d[e.animType] = "translate(0px," + a + "px)"),
                        e.$slideTrack.css(d));
                },
                complete: function () {
                  c && c.call();
                },
              }
            ))
          : (e.applyTransition(),
            (b = Math.ceil(b)),
            e.options.vertical === !1
              ? (d[e.animType] = "translate3d(" + b + "px, 0px, 0px)")
              : (d[e.animType] = "translate3d(0px," + b + "px, 0px)"),
            e.$slideTrack.css(d),
            c &&
              setTimeout(function () {
                e.disableTransition(), c.call();
              }, e.options.speed));
    }),
    (b.prototype.getNavTarget = function () {
      var b = this,
        c = b.options.asNavFor;
      return c && null !== c && (c = a(c).not(b.$slider)), c;
    }),
    (b.prototype.asNavFor = function (b) {
      var c = this,
        d = c.getNavTarget();
      null !== d &&
        "object" == typeof d &&
        d.each(function () {
          var c = a(this).slick("getSlick");
          c.unslicked || c.slideHandler(b, !0);
        });
    }),
    (b.prototype.applyTransition = function (a) {
      var b = this,
        c = {};
      b.options.fade === !1
        ? (c[b.transitionType] =
            b.transformType + " " + b.options.speed + "ms " + b.options.cssEase)
        : (c[b.transitionType] =
            "opacity " + b.options.speed + "ms " + b.options.cssEase),
        b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c);
    }),
    (b.prototype.autoPlay = function () {
      var a = this;
      a.autoPlayClear(),
        a.slideCount > a.options.slidesToShow &&
          (a.autoPlayTimer = setInterval(
            a.autoPlayIterator,
            a.options.autoplaySpeed
          ));
    }),
    (b.prototype.autoPlayClear = function () {
      var a = this;
      a.autoPlayTimer && clearInterval(a.autoPlayTimer);
    }),
    (b.prototype.autoPlayIterator = function () {
      var a = this,
        b = a.currentSlide + a.options.slidesToScroll;
      a.paused ||
        a.interrupted ||
        a.focussed ||
        (a.options.infinite === !1 &&
          (1 === a.direction && a.currentSlide + 1 === a.slideCount - 1
            ? (a.direction = 0)
            : 0 === a.direction &&
              ((b = a.currentSlide - a.options.slidesToScroll),
              a.currentSlide - 1 === 0 && (a.direction = 1))),
        a.slideHandler(b));
    }),
    (b.prototype.buildArrows = function () {
      var b = this;
      b.options.arrows === !0 &&
        ((b.$prevArrow = a(b.options.prevArrow).addClass("slick-arrow")),
        (b.$nextArrow = a(b.options.nextArrow).addClass("slick-arrow")),
        b.slideCount > b.options.slidesToShow
          ? (b.$prevArrow
              .removeClass("slick-hidden")
              .removeAttr("aria-hidden tabindex"),
            b.$nextArrow
              .removeClass("slick-hidden")
              .removeAttr("aria-hidden tabindex"),
            b.htmlExpr.test(b.options.prevArrow) &&
              b.$prevArrow.prependTo(b.options.appendArrows),
            b.htmlExpr.test(b.options.nextArrow) &&
              b.$nextArrow.appendTo(b.options.appendArrows),
            b.options.infinite !== !0 &&
              b.$prevArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"))
          : b.$prevArrow
              .add(b.$nextArrow)
              .addClass("slick-hidden")
              .attr({ "aria-disabled": "true", tabindex: "-1" }));
    }),
    (b.prototype.buildDots = function () {
      var c,
        d,
        b = this;
      if (b.options.dots === !0 && b.slideCount > b.options.slidesToShow) {
        for (
          b.$slider.addClass("slick-dotted"),
            d = a("<ul />").addClass(b.options.dotsClass),
            c = 0;
          c <= b.getDotCount();
          c += 1
        )
          d.append(a("<li />").append(b.options.customPaging.call(this, b, c)));
        (b.$dots = d.appendTo(b.options.appendDots)),
          b.$dots
            .find("li")
            .first()
            .addClass("slick-active")
            .attr("aria-hidden", "false");
      }
    }),
    (b.prototype.buildOut = function () {
      var b = this;
      (b.$slides = b.$slider
        .children(b.options.slide + ":not(.slick-cloned)")
        .addClass("slick-slide")),
        (b.slideCount = b.$slides.length),
        b.$slides.each(function (b, c) {
          a(c)
            .attr("data-slick-index", b)
            .data("originalStyling", a(c).attr("style") || "");
        }),
        b.$slider.addClass("slick-slider"),
        (b.$slideTrack =
          0 === b.slideCount
            ? a('<div class="slick-track"/>').appendTo(b.$slider)
            : b.$slides.wrapAll('<div class="slick-track"/>').parent()),
        (b.$list = b.$slideTrack
          .wrap('<div aria-live="polite" class="slick-list"/>')
          .parent()),
        b.$slideTrack.css("opacity", 0),
        (b.options.centerMode === !0 || b.options.swipeToSlide === !0) &&
          (b.options.slidesToScroll = 1),
        a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"),
        b.setupInfinite(),
        b.buildArrows(),
        b.buildDots(),
        b.updateDots(),
        b.setSlideClasses(
          "number" == typeof b.currentSlide ? b.currentSlide : 0
        ),
        b.options.draggable === !0 && b.$list.addClass("draggable");
    }),
    (b.prototype.buildRows = function () {
      var b,
        c,
        d,
        e,
        f,
        g,
        h,
        a = this;
      if (
        ((e = document.createDocumentFragment()),
        (g = a.$slider.children()),
        a.options.rows > 1)
      ) {
        for (
          h = a.options.slidesPerRow * a.options.rows,
            f = Math.ceil(g.length / h),
            b = 0;
          f > b;
          b++
        ) {
          var i = document.createElement("div");
          for (c = 0; c < a.options.rows; c++) {
            var j = document.createElement("div");
            for (d = 0; d < a.options.slidesPerRow; d++) {
              var k = b * h + (c * a.options.slidesPerRow + d);
              g.get(k) && j.appendChild(g.get(k));
            }
            i.appendChild(j);
          }
          e.appendChild(i);
        }
        a.$slider.empty().append(e),
          a.$slider
            .children()
            .children()
            .children()
            .css({
              width: 100 / a.options.slidesPerRow + "%",
              display: "inline-block",
            });
      }
    }),
    (b.prototype.checkResponsive = function (b, c) {
      var e,
        f,
        g,
        d = this,
        h = !1,
        i = d.$slider.width(),
        j = window.innerWidth || a(window).width();
      if (
        ("window" === d.respondTo
          ? (g = j)
          : "slider" === d.respondTo
          ? (g = i)
          : "min" === d.respondTo && (g = Math.min(j, i)),
        d.options.responsive &&
          d.options.responsive.length &&
          null !== d.options.responsive)
      ) {
        f = null;
        for (e in d.breakpoints)
          d.breakpoints.hasOwnProperty(e) &&
            (d.originalSettings.mobileFirst === !1
              ? g < d.breakpoints[e] && (f = d.breakpoints[e])
              : g > d.breakpoints[e] && (f = d.breakpoints[e]));
        null !== f
          ? null !== d.activeBreakpoint
            ? (f !== d.activeBreakpoint || c) &&
              ((d.activeBreakpoint = f),
              "unslick" === d.breakpointSettings[f]
                ? d.unslick(f)
                : ((d.options = a.extend(
                    {},
                    d.originalSettings,
                    d.breakpointSettings[f]
                  )),
                  b === !0 && (d.currentSlide = d.options.initialSlide),
                  d.refresh(b)),
              (h = f))
            : ((d.activeBreakpoint = f),
              "unslick" === d.breakpointSettings[f]
                ? d.unslick(f)
                : ((d.options = a.extend(
                    {},
                    d.originalSettings,
                    d.breakpointSettings[f]
                  )),
                  b === !0 && (d.currentSlide = d.options.initialSlide),
                  d.refresh(b)),
              (h = f))
          : null !== d.activeBreakpoint &&
            ((d.activeBreakpoint = null),
            (d.options = d.originalSettings),
            b === !0 && (d.currentSlide = d.options.initialSlide),
            d.refresh(b),
            (h = f)),
          b || h === !1 || d.$slider.trigger("breakpoint", [d, h]);
      }
    }),
    (b.prototype.changeSlide = function (b, c) {
      var f,
        g,
        h,
        d = this,
        e = a(b.currentTarget);
      switch (
        (e.is("a") && b.preventDefault(),
        e.is("li") || (e = e.closest("li")),
        (h = d.slideCount % d.options.slidesToScroll !== 0),
        (f = h
          ? 0
          : (d.slideCount - d.currentSlide) % d.options.slidesToScroll),
        b.data.message)
      ) {
        case "previous":
          (g = 0 === f ? d.options.slidesToScroll : d.options.slidesToShow - f),
            d.slideCount > d.options.slidesToShow &&
              d.slideHandler(d.currentSlide - g, !1, c);
          break;
        case "next":
          (g = 0 === f ? d.options.slidesToScroll : f),
            d.slideCount > d.options.slidesToShow &&
              d.slideHandler(d.currentSlide + g, !1, c);
          break;
        case "index":
          var i =
            0 === b.data.index
              ? 0
              : b.data.index || e.index() * d.options.slidesToScroll;
          d.slideHandler(d.checkNavigable(i), !1, c),
            e.children().trigger("focus");
          break;
        default:
          return;
      }
    }),
    (b.prototype.checkNavigable = function (a) {
      var c,
        d,
        b = this;
      if (((c = b.getNavigableIndexes()), (d = 0), a > c[c.length - 1]))
        a = c[c.length - 1];
      else
        for (var e in c) {
          if (a < c[e]) {
            a = d;
            break;
          }
          d = c[e];
        }
      return a;
    }),
    (b.prototype.cleanUpEvents = function () {
      var b = this;
      b.options.dots &&
        null !== b.$dots &&
        a("li", b.$dots)
          .off("click.slick", b.changeSlide)
          .off("mouseenter.slick", a.proxy(b.interrupt, b, !0))
          .off("mouseleave.slick", a.proxy(b.interrupt, b, !1)),
        b.$slider.off("focus.slick blur.slick"),
        b.options.arrows === !0 &&
          b.slideCount > b.options.slidesToShow &&
          (b.$prevArrow && b.$prevArrow.off("click.slick", b.changeSlide),
          b.$nextArrow && b.$nextArrow.off("click.slick", b.changeSlide)),
        b.$list.off("touchstart.slick mousedown.slick", b.swipeHandler),
        b.$list.off("touchmove.slick mousemove.slick", b.swipeHandler),
        b.$list.off("touchend.slick mouseup.slick", b.swipeHandler),
        b.$list.off("touchcancel.slick mouseleave.slick", b.swipeHandler),
        b.$list.off("click.slick", b.clickHandler),
        a(document).off(b.visibilityChange, b.visibility),
        b.cleanUpSlideEvents(),
        b.options.accessibility === !0 &&
          b.$list.off("keydown.slick", b.keyHandler),
        b.options.focusOnSelect === !0 &&
          a(b.$slideTrack).children().off("click.slick", b.selectHandler),
        a(window).off(
          "orientationchange.slick.slick-" + b.instanceUid,
          b.orientationChange
        ),
        a(window).off("resize.slick.slick-" + b.instanceUid, b.resize),
        a("[draggable!=true]", b.$slideTrack).off(
          "dragstart",
          b.preventDefault
        ),
        a(window).off("load.slick.slick-" + b.instanceUid, b.setPosition),
        a(document).off("ready.slick.slick-" + b.instanceUid, b.setPosition);
    }),
    (b.prototype.cleanUpSlideEvents = function () {
      var b = this;
      b.$list.off("mouseenter.slick", a.proxy(b.interrupt, b, !0)),
        b.$list.off("mouseleave.slick", a.proxy(b.interrupt, b, !1));
    }),
    (b.prototype.cleanUpRows = function () {
      var b,
        a = this;
      a.options.rows > 1 &&
        ((b = a.$slides.children().children()),
        b.removeAttr("style"),
        a.$slider.empty().append(b));
    }),
    (b.prototype.clickHandler = function (a) {
      var b = this;
      b.shouldClick === !1 &&
        (a.stopImmediatePropagation(), a.stopPropagation(), a.preventDefault());
    }),
    (b.prototype.destroy = function (b) {
      var c = this;
      c.autoPlayClear(),
        (c.touchObject = {}),
        c.cleanUpEvents(),
        a(".slick-cloned", c.$slider).detach(),
        c.$dots && c.$dots.remove(),
        c.$prevArrow &&
          c.$prevArrow.length &&
          (c.$prevArrow
            .removeClass("slick-disabled slick-arrow slick-hidden")
            .removeAttr("aria-hidden aria-disabled tabindex")
            .css("display", ""),
          c.htmlExpr.test(c.options.prevArrow) && c.$prevArrow.remove()),
        c.$nextArrow &&
          c.$nextArrow.length &&
          (c.$nextArrow
            .removeClass("slick-disabled slick-arrow slick-hidden")
            .removeAttr("aria-hidden aria-disabled tabindex")
            .css("display", ""),
          c.htmlExpr.test(c.options.nextArrow) && c.$nextArrow.remove()),
        c.$slides &&
          (c.$slides
            .removeClass(
              "slick-slide slick-active slick-center slick-visible slick-current"
            )
            .removeAttr("aria-hidden")
            .removeAttr("data-slick-index")
            .each(function () {
              a(this).attr("style", a(this).data("originalStyling"));
            }),
          c.$slideTrack.children(this.options.slide).detach(),
          c.$slideTrack.detach(),
          c.$list.detach(),
          c.$slider.append(c.$slides)),
        c.cleanUpRows(),
        c.$slider.removeClass("slick-slider"),
        c.$slider.removeClass("slick-initialized"),
        c.$slider.removeClass("slick-dotted"),
        (c.unslicked = !0),
        b || c.$slider.trigger("destroy", [c]);
    }),
    (b.prototype.disableTransition = function (a) {
      var b = this,
        c = {};
      (c[b.transitionType] = ""),
        b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c);
    }),
    (b.prototype.fadeSlide = function (a, b) {
      var c = this;
      c.cssTransitions === !1
        ? (c.$slides.eq(a).css({ zIndex: c.options.zIndex }),
          c.$slides
            .eq(a)
            .animate({ opacity: 1 }, c.options.speed, c.options.easing, b))
        : (c.applyTransition(a),
          c.$slides.eq(a).css({ opacity: 1, zIndex: c.options.zIndex }),
          b &&
            setTimeout(function () {
              c.disableTransition(a), b.call();
            }, c.options.speed));
    }),
    (b.prototype.fadeSlideOut = function (a) {
      var b = this;
      b.cssTransitions === !1
        ? b.$slides
            .eq(a)
            .animate(
              { opacity: 0, zIndex: b.options.zIndex - 2 },
              b.options.speed,
              b.options.easing
            )
        : (b.applyTransition(a),
          b.$slides.eq(a).css({ opacity: 0, zIndex: b.options.zIndex - 2 }));
    }),
    (b.prototype.filterSlides = b.prototype.slickFilter =
      function (a) {
        var b = this;
        null !== a &&
          ((b.$slidesCache = b.$slides),
          b.unload(),
          b.$slideTrack.children(this.options.slide).detach(),
          b.$slidesCache.filter(a).appendTo(b.$slideTrack),
          b.reinit());
      }),
    (b.prototype.focusHandler = function () {
      var b = this;
      b.$slider
        .off("focus.slick blur.slick")
        .on("focus.slick blur.slick", "*:not(.slick-arrow)", function (c) {
          c.stopImmediatePropagation();
          var d = a(this);
          setTimeout(function () {
            b.options.pauseOnFocus &&
              ((b.focussed = d.is(":focus")), b.autoPlay());
          }, 0);
        });
    }),
    (b.prototype.getCurrent = b.prototype.slickCurrentSlide =
      function () {
        var a = this;
        return a.currentSlide;
      }),
    (b.prototype.getDotCount = function () {
      var a = this,
        b = 0,
        c = 0,
        d = 0;
      if (a.options.infinite === !0)
        for (; b < a.slideCount; )
          ++d,
            (b = c + a.options.slidesToScroll),
            (c +=
              a.options.slidesToScroll <= a.options.slidesToShow
                ? a.options.slidesToScroll
                : a.options.slidesToShow);
      else if (a.options.centerMode === !0) d = a.slideCount;
      else if (a.options.asNavFor)
        for (; b < a.slideCount; )
          ++d,
            (b = c + a.options.slidesToScroll),
            (c +=
              a.options.slidesToScroll <= a.options.slidesToShow
                ? a.options.slidesToScroll
                : a.options.slidesToShow);
      else
        d =
          1 +
          Math.ceil(
            (a.slideCount - a.options.slidesToShow) / a.options.slidesToScroll
          );
      return d - 1;
    }),
    (b.prototype.getLeft = function (a) {
      var c,
        d,
        f,
        b = this,
        e = 0;
      return (
        (b.slideOffset = 0),
        (d = b.$slides.first().outerHeight(!0)),
        b.options.infinite === !0
          ? (b.slideCount > b.options.slidesToShow &&
              ((b.slideOffset = b.slideWidth * b.options.slidesToShow * -1),
              (e = d * b.options.slidesToShow * -1)),
            b.slideCount % b.options.slidesToScroll !== 0 &&
              a + b.options.slidesToScroll > b.slideCount &&
              b.slideCount > b.options.slidesToShow &&
              (a > b.slideCount
                ? ((b.slideOffset =
                    (b.options.slidesToShow - (a - b.slideCount)) *
                    b.slideWidth *
                    -1),
                  (e = (b.options.slidesToShow - (a - b.slideCount)) * d * -1))
                : ((b.slideOffset =
                    (b.slideCount % b.options.slidesToScroll) *
                    b.slideWidth *
                    -1),
                  (e = (b.slideCount % b.options.slidesToScroll) * d * -1))))
          : a + b.options.slidesToShow > b.slideCount &&
            ((b.slideOffset =
              (a + b.options.slidesToShow - b.slideCount) * b.slideWidth),
            (e = (a + b.options.slidesToShow - b.slideCount) * d)),
        b.slideCount <= b.options.slidesToShow &&
          ((b.slideOffset = 0), (e = 0)),
        b.options.centerMode === !0 && b.options.infinite === !0
          ? (b.slideOffset +=
              b.slideWidth * Math.floor(b.options.slidesToShow / 2) -
              b.slideWidth)
          : b.options.centerMode === !0 &&
            ((b.slideOffset = 0),
            (b.slideOffset +=
              b.slideWidth * Math.floor(b.options.slidesToShow / 2))),
        (c =
          b.options.vertical === !1
            ? a * b.slideWidth * -1 + b.slideOffset
            : a * d * -1 + e),
        b.options.variableWidth === !0 &&
          ((f =
            b.slideCount <= b.options.slidesToShow || b.options.infinite === !1
              ? b.$slideTrack.children(".slick-slide").eq(a)
              : b.$slideTrack
                  .children(".slick-slide")
                  .eq(a + b.options.slidesToShow)),
          (c =
            b.options.rtl === !0
              ? f[0]
                ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width())
                : 0
              : f[0]
              ? -1 * f[0].offsetLeft
              : 0),
          b.options.centerMode === !0 &&
            ((f =
              b.slideCount <= b.options.slidesToShow ||
              b.options.infinite === !1
                ? b.$slideTrack.children(".slick-slide").eq(a)
                : b.$slideTrack
                    .children(".slick-slide")
                    .eq(a + b.options.slidesToShow + 1)),
            (c =
              b.options.rtl === !0
                ? f[0]
                  ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width())
                  : 0
                : f[0]
                ? -1 * f[0].offsetLeft
                : 0),
            (c += (b.$list.width() - f.outerWidth()) / 2))),
        c
      );
    }),
    (b.prototype.getOption = b.prototype.slickGetOption =
      function (a) {
        var b = this;
        return b.options[a];
      }),
    (b.prototype.getNavigableIndexes = function () {
      var e,
        a = this,
        b = 0,
        c = 0,
        d = [];
      for (
        a.options.infinite === !1
          ? (e = a.slideCount)
          : ((b = -1 * a.options.slidesToScroll),
            (c = -1 * a.options.slidesToScroll),
            (e = 2 * a.slideCount));
        e > b;

      )
        d.push(b),
          (b = c + a.options.slidesToScroll),
          (c +=
            a.options.slidesToScroll <= a.options.slidesToShow
              ? a.options.slidesToScroll
              : a.options.slidesToShow);
      return d;
    }),
    (b.prototype.getSlick = function () {
      return this;
    }),
    (b.prototype.getSlideCount = function () {
      var c,
        d,
        e,
        b = this;
      return (
        (e =
          b.options.centerMode === !0
            ? b.slideWidth * Math.floor(b.options.slidesToShow / 2)
            : 0),
        b.options.swipeToSlide === !0
          ? (b.$slideTrack.find(".slick-slide").each(function (c, f) {
              return f.offsetLeft - e + a(f).outerWidth() / 2 > -1 * b.swipeLeft
                ? ((d = f), !1)
                : void 0;
            }),
            (c = Math.abs(a(d).attr("data-slick-index") - b.currentSlide) || 1))
          : b.options.slidesToScroll
      );
    }),
    (b.prototype.goTo = b.prototype.slickGoTo =
      function (a, b) {
        var c = this;
        c.changeSlide({ data: { message: "index", index: parseInt(a) } }, b);
      }),
    (b.prototype.init = function (b) {
      var c = this;
      a(c.$slider).hasClass("slick-initialized") ||
        (a(c.$slider).addClass("slick-initialized"),
        c.buildRows(),
        c.buildOut(),
        c.setProps(),
        c.startLoad(),
        c.loadSlider(),
        c.initializeEvents(),
        c.updateArrows(),
        c.updateDots(),
        c.checkResponsive(!0),
        c.focusHandler()),
        b && c.$slider.trigger("init", [c]),
        c.options.accessibility === !0 && c.initADA(),
        c.options.autoplay && ((c.paused = !1), c.autoPlay());
    }),
    (b.prototype.initADA = function () {
      var b = this;
      b.$slides
        .add(b.$slideTrack.find(".slick-cloned"))
        .attr({ "aria-hidden": "true", tabindex: "-1" })
        .find("a, input, button, select")
        .attr({ tabindex: "-1" }),
        b.$slideTrack.attr("role", "listbox"),
        b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function (c) {
          a(this).attr({
            role: "option",
            "aria-describedby": "slick-slide" + b.instanceUid + c,
          });
        }),
        null !== b.$dots &&
          b.$dots
            .attr("role", "tablist")
            .find("li")
            .each(function (c) {
              a(this).attr({
                role: "presentation",
                "aria-selected": "false",
                "aria-controls": "navigation" + b.instanceUid + c,
                id: "slick-slide" + b.instanceUid + c,
              });
            })
            .first()
            .attr("aria-selected", "true")
            .end()
            .find("button")
            .attr("role", "button")
            .end()
            .closest("div")
            .attr("role", "toolbar"),
        b.activateADA();
    }),
    (b.prototype.initArrowEvents = function () {
      var a = this;
      a.options.arrows === !0 &&
        a.slideCount > a.options.slidesToShow &&
        (a.$prevArrow
          .off("click.slick")
          .on("click.slick", { message: "previous" }, a.changeSlide),
        a.$nextArrow
          .off("click.slick")
          .on("click.slick", { message: "next" }, a.changeSlide));
    }),
    (b.prototype.initDotEvents = function () {
      var b = this;
      b.options.dots === !0 &&
        b.slideCount > b.options.slidesToShow &&
        a("li", b.$dots).on("click.slick", { message: "index" }, b.changeSlide),
        b.options.dots === !0 &&
          b.options.pauseOnDotsHover === !0 &&
          a("li", b.$dots)
            .on("mouseenter.slick", a.proxy(b.interrupt, b, !0))
            .on("mouseleave.slick", a.proxy(b.interrupt, b, !1));
    }),
    (b.prototype.initSlideEvents = function () {
      var b = this;
      b.options.pauseOnHover &&
        (b.$list.on("mouseenter.slick", a.proxy(b.interrupt, b, !0)),
        b.$list.on("mouseleave.slick", a.proxy(b.interrupt, b, !1)));
    }),
    (b.prototype.initializeEvents = function () {
      var b = this;
      b.initArrowEvents(),
        b.initDotEvents(),
        b.initSlideEvents(),
        b.$list.on(
          "touchstart.slick mousedown.slick",
          { action: "start" },
          b.swipeHandler
        ),
        b.$list.on(
          "touchmove.slick mousemove.slick",
          { action: "move" },
          b.swipeHandler
        ),
        b.$list.on(
          "touchend.slick mouseup.slick",
          { action: "end" },
          b.swipeHandler
        ),
        b.$list.on(
          "touchcancel.slick mouseleave.slick",
          { action: "end" },
          b.swipeHandler
        ),
        b.$list.on("click.slick", b.clickHandler),
        a(document).on(b.visibilityChange, a.proxy(b.visibility, b)),
        b.options.accessibility === !0 &&
          b.$list.on("keydown.slick", b.keyHandler),
        b.options.focusOnSelect === !0 &&
          a(b.$slideTrack).children().on("click.slick", b.selectHandler),
        a(window).on(
          "orientationchange.slick.slick-" + b.instanceUid,
          a.proxy(b.orientationChange, b)
        ),
        a(window).on(
          "resize.slick.slick-" + b.instanceUid,
          a.proxy(b.resize, b)
        ),
        a("[draggable!=true]", b.$slideTrack).on("dragstart", b.preventDefault),
        a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition),
        a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition);
    }),
    (b.prototype.initUI = function () {
      var a = this;
      a.options.arrows === !0 &&
        a.slideCount > a.options.slidesToShow &&
        (a.$prevArrow.show(), a.$nextArrow.show()),
        a.options.dots === !0 &&
          a.slideCount > a.options.slidesToShow &&
          a.$dots.show();
    }),
    (b.prototype.keyHandler = function (a) {
      var b = this;
      a.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
        (37 === a.keyCode && b.options.accessibility === !0
          ? b.changeSlide({
              data: { message: b.options.rtl === !0 ? "next" : "previous" },
            })
          : 39 === a.keyCode &&
            b.options.accessibility === !0 &&
            b.changeSlide({
              data: { message: b.options.rtl === !0 ? "previous" : "next" },
            }));
    }),
    (b.prototype.lazyLoad = function () {
      function g(c) {
        a("img[data-lazy]", c).each(function () {
          var c = a(this),
            d = a(this).attr("data-lazy"),
            e = document.createElement("img");
          (e.onload = function () {
            c.animate({ opacity: 0 }, 100, function () {
              c.attr("src", d).animate({ opacity: 1 }, 200, function () {
                c.removeAttr("data-lazy").removeClass("slick-loading");
              }),
                b.$slider.trigger("lazyLoaded", [b, c, d]);
            });
          }),
            (e.onerror = function () {
              c
                .removeAttr("data-lazy")
                .removeClass("slick-loading")
                .addClass("slick-lazyload-error"),
                b.$slider.trigger("lazyLoadError", [b, c, d]);
            }),
            (e.src = d);
        });
      }
      var c,
        d,
        e,
        f,
        b = this;
      b.options.centerMode === !0
        ? b.options.infinite === !0
          ? ((e = b.currentSlide + (b.options.slidesToShow / 2 + 1)),
            (f = e + b.options.slidesToShow + 2))
          : ((e = Math.max(
              0,
              b.currentSlide - (b.options.slidesToShow / 2 + 1)
            )),
            (f = 2 + (b.options.slidesToShow / 2 + 1) + b.currentSlide))
        : ((e = b.options.infinite
            ? b.options.slidesToShow + b.currentSlide
            : b.currentSlide),
          (f = Math.ceil(e + b.options.slidesToShow)),
          b.options.fade === !0 && (e > 0 && e--, f <= b.slideCount && f++)),
        (c = b.$slider.find(".slick-slide").slice(e, f)),
        g(c),
        b.slideCount <= b.options.slidesToShow
          ? ((d = b.$slider.find(".slick-slide")), g(d))
          : b.currentSlide >= b.slideCount - b.options.slidesToShow
          ? ((d = b.$slider
              .find(".slick-cloned")
              .slice(0, b.options.slidesToShow)),
            g(d))
          : 0 === b.currentSlide &&
            ((d = b.$slider
              .find(".slick-cloned")
              .slice(-1 * b.options.slidesToShow)),
            g(d));
    }),
    (b.prototype.loadSlider = function () {
      var a = this;
      a.setPosition(),
        a.$slideTrack.css({ opacity: 1 }),
        a.$slider.removeClass("slick-loading"),
        a.initUI(),
        "progressive" === a.options.lazyLoad && a.progressiveLazyLoad();
    }),
    (b.prototype.next = b.prototype.slickNext =
      function () {
        var a = this;
        a.changeSlide({ data: { message: "next" } });
      }),
    (b.prototype.orientationChange = function () {
      var a = this;
      a.checkResponsive(), a.setPosition();
    }),
    (b.prototype.pause = b.prototype.slickPause =
      function () {
        var a = this;
        a.autoPlayClear(), (a.paused = !0);
      }),
    (b.prototype.play = b.prototype.slickPlay =
      function () {
        var a = this;
        a.autoPlay(),
          (a.options.autoplay = !0),
          (a.paused = !1),
          (a.focussed = !1),
          (a.interrupted = !1);
      }),
    (b.prototype.postSlide = function (a) {
      var b = this;
      b.unslicked ||
        (b.$slider.trigger("afterChange", [b, a]),
        (b.animating = !1),
        b.setPosition(),
        (b.swipeLeft = null),
        b.options.autoplay && b.autoPlay(),
        b.options.accessibility === !0 && b.initADA());
    }),
    (b.prototype.prev = b.prototype.slickPrev =
      function () {
        var a = this;
        a.changeSlide({ data: { message: "previous" } });
      }),
    (b.prototype.preventDefault = function (a) {
      a.preventDefault();
    }),
    (b.prototype.progressiveLazyLoad = function (b) {
      b = b || 1;
      var e,
        f,
        g,
        c = this,
        d = a("img[data-lazy]", c.$slider);
      d.length
        ? ((e = d.first()),
          (f = e.attr("data-lazy")),
          (g = document.createElement("img")),
          (g.onload = function () {
            e
              .attr("src", f)
              .removeAttr("data-lazy")
              .removeClass("slick-loading"),
              c.options.adaptiveHeight === !0 && c.setPosition(),
              c.$slider.trigger("lazyLoaded", [c, e, f]),
              c.progressiveLazyLoad();
          }),
          (g.onerror = function () {
            3 > b
              ? setTimeout(function () {
                  c.progressiveLazyLoad(b + 1);
                }, 500)
              : (e
                  .removeAttr("data-lazy")
                  .removeClass("slick-loading")
                  .addClass("slick-lazyload-error"),
                c.$slider.trigger("lazyLoadError", [c, e, f]),
                c.progressiveLazyLoad());
          }),
          (g.src = f))
        : c.$slider.trigger("allImagesLoaded", [c]);
    }),
    (b.prototype.refresh = function (b) {
      var d,
        e,
        c = this;
      (e = c.slideCount - c.options.slidesToShow),
        !c.options.infinite && c.currentSlide > e && (c.currentSlide = e),
        c.slideCount <= c.options.slidesToShow && (c.currentSlide = 0),
        (d = c.currentSlide),
        c.destroy(!0),
        a.extend(c, c.initials, { currentSlide: d }),
        c.init(),
        b || c.changeSlide({ data: { message: "index", index: d } }, !1);
    }),
    (b.prototype.registerBreakpoints = function () {
      var c,
        d,
        e,
        b = this,
        f = b.options.responsive || null;
      if ("array" === a.type(f) && f.length) {
        b.respondTo = b.options.respondTo || "window";
        for (c in f)
          if (
            ((e = b.breakpoints.length - 1),
            (d = f[c].breakpoint),
            f.hasOwnProperty(c))
          ) {
            for (; e >= 0; )
              b.breakpoints[e] &&
                b.breakpoints[e] === d &&
                b.breakpoints.splice(e, 1),
                e--;
            b.breakpoints.push(d), (b.breakpointSettings[d] = f[c].settings);
          }
        b.breakpoints.sort(function (a, c) {
          return b.options.mobileFirst ? a - c : c - a;
        });
      }
    }),
    (b.prototype.reinit = function () {
      var b = this;
      (b.$slides = b.$slideTrack
        .children(b.options.slide)
        .addClass("slick-slide")),
        (b.slideCount = b.$slides.length),
        b.currentSlide >= b.slideCount &&
          0 !== b.currentSlide &&
          (b.currentSlide = b.currentSlide - b.options.slidesToScroll),
        b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0),
        b.registerBreakpoints(),
        b.setProps(),
        b.setupInfinite(),
        b.buildArrows(),
        b.updateArrows(),
        b.initArrowEvents(),
        b.buildDots(),
        b.updateDots(),
        b.initDotEvents(),
        b.cleanUpSlideEvents(),
        b.initSlideEvents(),
        b.checkResponsive(!1, !0),
        b.options.focusOnSelect === !0 &&
          a(b.$slideTrack).children().on("click.slick", b.selectHandler),
        b.setSlideClasses(
          "number" == typeof b.currentSlide ? b.currentSlide : 0
        ),
        b.setPosition(),
        b.focusHandler(),
        (b.paused = !b.options.autoplay),
        b.autoPlay(),
        b.$slider.trigger("reInit", [b]);
    }),
    (b.prototype.resize = function () {
      var b = this;
      a(window).width() !== b.windowWidth &&
        (clearTimeout(b.windowDelay),
        (b.windowDelay = window.setTimeout(function () {
          (b.windowWidth = a(window).width()),
            b.checkResponsive(),
            b.unslicked || b.setPosition();
        }, 50)));
    }),
    (b.prototype.removeSlide = b.prototype.slickRemove =
      function (a, b, c) {
        var d = this;
        return (
          "boolean" == typeof a
            ? ((b = a), (a = b === !0 ? 0 : d.slideCount - 1))
            : (a = b === !0 ? --a : a),
          d.slideCount < 1 || 0 > a || a > d.slideCount - 1
            ? !1
            : (d.unload(),
              c === !0
                ? d.$slideTrack.children().remove()
                : d.$slideTrack.children(this.options.slide).eq(a).remove(),
              (d.$slides = d.$slideTrack.children(this.options.slide)),
              d.$slideTrack.children(this.options.slide).detach(),
              d.$slideTrack.append(d.$slides),
              (d.$slidesCache = d.$slides),
              void d.reinit())
        );
      }),
    (b.prototype.setCSS = function (a) {
      var d,
        e,
        b = this,
        c = {};
      b.options.rtl === !0 && (a = -a),
        (d = "left" == b.positionProp ? Math.ceil(a) + "px" : "0px"),
        (e = "top" == b.positionProp ? Math.ceil(a) + "px" : "0px"),
        (c[b.positionProp] = a),
        b.transformsEnabled === !1
          ? b.$slideTrack.css(c)
          : ((c = {}),
            b.cssTransitions === !1
              ? ((c[b.animType] = "translate(" + d + ", " + e + ")"),
                b.$slideTrack.css(c))
              : ((c[b.animType] = "translate3d(" + d + ", " + e + ", 0px)"),
                b.$slideTrack.css(c)));
    }),
    (b.prototype.setDimensions = function () {
      var a = this;
      a.options.vertical === !1
        ? a.options.centerMode === !0 &&
          a.$list.css({ padding: "0px " + a.options.centerPadding })
        : (a.$list.height(
            a.$slides.first().outerHeight(!0) * a.options.slidesToShow
          ),
          a.options.centerMode === !0 &&
            a.$list.css({ padding: a.options.centerPadding + " 0px" })),
        (a.listWidth = a.$list.width()),
        (a.listHeight = a.$list.height()),
        a.options.vertical === !1 && a.options.variableWidth === !1
          ? ((a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow)),
            a.$slideTrack.width(
              Math.ceil(
                a.slideWidth * a.$slideTrack.children(".slick-slide").length
              )
            ))
          : a.options.variableWidth === !0
          ? a.$slideTrack.width(5e3 * a.slideCount)
          : ((a.slideWidth = Math.ceil(a.listWidth)),
            a.$slideTrack.height(
              Math.ceil(
                a.$slides.first().outerHeight(!0) *
                  a.$slideTrack.children(".slick-slide").length
              )
            ));
      var b = a.$slides.first().outerWidth(!0) - a.$slides.first().width();
      a.options.variableWidth === !1 &&
        a.$slideTrack.children(".slick-slide").width(a.slideWidth - b);
    }),
    (b.prototype.setFade = function () {
      var c,
        b = this;
      b.$slides.each(function (d, e) {
        (c = b.slideWidth * d * -1),
          b.options.rtl === !0
            ? a(e).css({
                position: "relative",
                right: c,
                top: 0,
                zIndex: b.options.zIndex - 2,
                opacity: 0,
              })
            : a(e).css({
                position: "relative",
                left: c,
                top: 0,
                zIndex: b.options.zIndex - 2,
                opacity: 0,
              });
      }),
        b.$slides
          .eq(b.currentSlide)
          .css({ zIndex: b.options.zIndex - 1, opacity: 1 });
    }),
    (b.prototype.setHeight = function () {
      var a = this;
      if (
        1 === a.options.slidesToShow &&
        a.options.adaptiveHeight === !0 &&
        a.options.vertical === !1
      ) {
        var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
        a.$list.css("height", b);
      }
    }),
    (b.prototype.setOption = b.prototype.slickSetOption =
      function () {
        var c,
          d,
          e,
          f,
          h,
          b = this,
          g = !1;
        if (
          ("object" === a.type(arguments[0])
            ? ((e = arguments[0]), (g = arguments[1]), (h = "multiple"))
            : "string" === a.type(arguments[0]) &&
              ((e = arguments[0]),
              (f = arguments[1]),
              (g = arguments[2]),
              "responsive" === arguments[0] && "array" === a.type(arguments[1])
                ? (h = "responsive")
                : "undefined" != typeof arguments[1] && (h = "single")),
          "single" === h)
        )
          b.options[e] = f;
        else if ("multiple" === h)
          a.each(e, function (a, c) {
            b.options[a] = c;
          });
        else if ("responsive" === h)
          for (d in f)
            if ("array" !== a.type(b.options.responsive))
              b.options.responsive = [f[d]];
            else {
              for (c = b.options.responsive.length - 1; c >= 0; )
                b.options.responsive[c].breakpoint === f[d].breakpoint &&
                  b.options.responsive.splice(c, 1),
                  c--;
              b.options.responsive.push(f[d]);
            }
        g && (b.unload(), b.reinit());
      }),
    (b.prototype.setPosition = function () {
      var a = this;
      a.setDimensions(),
        a.setHeight(),
        a.options.fade === !1
          ? a.setCSS(a.getLeft(a.currentSlide))
          : a.setFade(),
        a.$slider.trigger("setPosition", [a]);
    }),
    (b.prototype.setProps = function () {
      var a = this,
        b = document.body.style;
      (a.positionProp = a.options.vertical === !0 ? "top" : "left"),
        "top" === a.positionProp
          ? a.$slider.addClass("slick-vertical")
          : a.$slider.removeClass("slick-vertical"),
        (void 0 !== b.WebkitTransition ||
          void 0 !== b.MozTransition ||
          void 0 !== b.msTransition) &&
          a.options.useCSS === !0 &&
          (a.cssTransitions = !0),
        a.options.fade &&
          ("number" == typeof a.options.zIndex
            ? a.options.zIndex < 3 && (a.options.zIndex = 3)
            : (a.options.zIndex = a.defaults.zIndex)),
        void 0 !== b.OTransform &&
          ((a.animType = "OTransform"),
          (a.transformType = "-o-transform"),
          (a.transitionType = "OTransition"),
          void 0 === b.perspectiveProperty &&
            void 0 === b.webkitPerspective &&
            (a.animType = !1)),
        void 0 !== b.MozTransform &&
          ((a.animType = "MozTransform"),
          (a.transformType = "-moz-transform"),
          (a.transitionType = "MozTransition"),
          void 0 === b.perspectiveProperty &&
            void 0 === b.MozPerspective &&
            (a.animType = !1)),
        void 0 !== b.webkitTransform &&
          ((a.animType = "webkitTransform"),
          (a.transformType = "-webkit-transform"),
          (a.transitionType = "webkitTransition"),
          void 0 === b.perspectiveProperty &&
            void 0 === b.webkitPerspective &&
            (a.animType = !1)),
        void 0 !== b.msTransform &&
          ((a.animType = "msTransform"),
          (a.transformType = "-ms-transform"),
          (a.transitionType = "msTransition"),
          void 0 === b.msTransform && (a.animType = !1)),
        void 0 !== b.transform &&
          a.animType !== !1 &&
          ((a.animType = "transform"),
          (a.transformType = "transform"),
          (a.transitionType = "transition")),
        (a.transformsEnabled =
          a.options.useTransform && null !== a.animType && a.animType !== !1);
    }),
    (b.prototype.setSlideClasses = function (a) {
      var c,
        d,
        e,
        f,
        b = this;
      (d = b.$slider
        .find(".slick-slide")
        .removeClass("slick-active slick-center slick-current")
        .attr("aria-hidden", "true")),
        b.$slides.eq(a).addClass("slick-current"),
        b.options.centerMode === !0
          ? ((c = Math.floor(b.options.slidesToShow / 2)),
            b.options.infinite === !0 &&
              (a >= c && a <= b.slideCount - 1 - c
                ? b.$slides
                    .slice(a - c, a + c + 1)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false")
                : ((e = b.options.slidesToShow + a),
                  d
                    .slice(e - c + 1, e + c + 2)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false")),
              0 === a
                ? d
                    .eq(d.length - 1 - b.options.slidesToShow)
                    .addClass("slick-center")
                : a === b.slideCount - 1 &&
                  d.eq(b.options.slidesToShow).addClass("slick-center")),
            b.$slides.eq(a).addClass("slick-center"))
          : a >= 0 && a <= b.slideCount - b.options.slidesToShow
          ? b.$slides
              .slice(a, a + b.options.slidesToShow)
              .addClass("slick-active")
              .attr("aria-hidden", "false")
          : d.length <= b.options.slidesToShow
          ? d.addClass("slick-active").attr("aria-hidden", "false")
          : ((f = b.slideCount % b.options.slidesToShow),
            (e = b.options.infinite === !0 ? b.options.slidesToShow + a : a),
            b.options.slidesToShow == b.options.slidesToScroll &&
            b.slideCount - a < b.options.slidesToShow
              ? d
                  .slice(e - (b.options.slidesToShow - f), e + f)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")
              : d
                  .slice(e, e + b.options.slidesToShow)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")),
        "ondemand" === b.options.lazyLoad && b.lazyLoad();
    }),
    (b.prototype.setupInfinite = function () {
      var c,
        d,
        e,
        b = this;
      if (
        (b.options.fade === !0 && (b.options.centerMode = !1),
        b.options.infinite === !0 &&
          b.options.fade === !1 &&
          ((d = null), b.slideCount > b.options.slidesToShow))
      ) {
        for (
          e =
            b.options.centerMode === !0
              ? b.options.slidesToShow + 1
              : b.options.slidesToShow,
            c = b.slideCount;
          c > b.slideCount - e;
          c -= 1
        )
          (d = c - 1),
            a(b.$slides[d])
              .clone(!0)
              .attr("id", "")
              .attr("data-slick-index", d - b.slideCount)
              .prependTo(b.$slideTrack)
              .addClass("slick-cloned");
        for (c = 0; e > c; c += 1)
          (d = c),
            a(b.$slides[d])
              .clone(!0)
              .attr("id", "")
              .attr("data-slick-index", d + b.slideCount)
              .appendTo(b.$slideTrack)
              .addClass("slick-cloned");
        b.$slideTrack
          .find(".slick-cloned")
          .find("[id]")
          .each(function () {
            a(this).attr("id", "");
          });
      }
    }),
    (b.prototype.interrupt = function (a) {
      var b = this;
      a || b.autoPlay(), (b.interrupted = a);
    }),
    (b.prototype.selectHandler = function (b) {
      var c = this,
        d = a(b.target).is(".slick-slide")
          ? a(b.target)
          : a(b.target).parents(".slick-slide"),
        e = parseInt(d.attr("data-slick-index"));
      return (
        e || (e = 0),
        c.slideCount <= c.options.slidesToShow
          ? (c.setSlideClasses(e), void c.asNavFor(e))
          : void c.slideHandler(e)
      );
    }),
    (b.prototype.slideHandler = function (a, b, c) {
      var d,
        e,
        f,
        g,
        j,
        h = null,
        i = this;
      return (
        (b = b || !1),
        (i.animating === !0 && i.options.waitForAnimate === !0) ||
        (i.options.fade === !0 && i.currentSlide === a) ||
        i.slideCount <= i.options.slidesToShow
          ? void 0
          : (b === !1 && i.asNavFor(a),
            (d = a),
            (h = i.getLeft(d)),
            (g = i.getLeft(i.currentSlide)),
            (i.currentLeft = null === i.swipeLeft ? g : i.swipeLeft),
            i.options.infinite === !1 &&
            i.options.centerMode === !1 &&
            (0 > a || a > i.getDotCount() * i.options.slidesToScroll)
              ? void (
                  i.options.fade === !1 &&
                  ((d = i.currentSlide),
                  c !== !0
                    ? i.animateSlide(g, function () {
                        i.postSlide(d);
                      })
                    : i.postSlide(d))
                )
              : i.options.infinite === !1 &&
                i.options.centerMode === !0 &&
                (0 > a || a > i.slideCount - i.options.slidesToScroll)
              ? void (
                  i.options.fade === !1 &&
                  ((d = i.currentSlide),
                  c !== !0
                    ? i.animateSlide(g, function () {
                        i.postSlide(d);
                      })
                    : i.postSlide(d))
                )
              : (i.options.autoplay && clearInterval(i.autoPlayTimer),
                (e =
                  0 > d
                    ? i.slideCount % i.options.slidesToScroll !== 0
                      ? i.slideCount - (i.slideCount % i.options.slidesToScroll)
                      : i.slideCount + d
                    : d >= i.slideCount
                    ? i.slideCount % i.options.slidesToScroll !== 0
                      ? 0
                      : d - i.slideCount
                    : d),
                (i.animating = !0),
                i.$slider.trigger("beforeChange", [i, i.currentSlide, e]),
                (f = i.currentSlide),
                (i.currentSlide = e),
                i.setSlideClasses(i.currentSlide),
                i.options.asNavFor &&
                  ((j = i.getNavTarget()),
                  (j = j.slick("getSlick")),
                  j.slideCount <= j.options.slidesToShow &&
                    j.setSlideClasses(i.currentSlide)),
                i.updateDots(),
                i.updateArrows(),
                i.options.fade === !0
                  ? (c !== !0
                      ? (i.fadeSlideOut(f),
                        i.fadeSlide(e, function () {
                          i.postSlide(e);
                        }))
                      : i.postSlide(e),
                    void i.animateHeight())
                  : void (c !== !0
                      ? i.animateSlide(h, function () {
                          i.postSlide(e);
                        })
                      : i.postSlide(e))))
      );
    }),
    (b.prototype.startLoad = function () {
      var a = this;
      a.options.arrows === !0 &&
        a.slideCount > a.options.slidesToShow &&
        (a.$prevArrow.hide(), a.$nextArrow.hide()),
        a.options.dots === !0 &&
          a.slideCount > a.options.slidesToShow &&
          a.$dots.hide(),
        a.$slider.addClass("slick-loading");
    }),
    (b.prototype.swipeDirection = function () {
      var a,
        b,
        c,
        d,
        e = this;
      return (
        (a = e.touchObject.startX - e.touchObject.curX),
        (b = e.touchObject.startY - e.touchObject.curY),
        (c = Math.atan2(b, a)),
        (d = Math.round((180 * c) / Math.PI)),
        0 > d && (d = 360 - Math.abs(d)),
        45 >= d && d >= 0
          ? e.options.rtl === !1
            ? "left"
            : "right"
          : 360 >= d && d >= 315
          ? e.options.rtl === !1
            ? "left"
            : "right"
          : d >= 135 && 225 >= d
          ? e.options.rtl === !1
            ? "right"
            : "left"
          : e.options.verticalSwiping === !0
          ? d >= 35 && 135 >= d
            ? "down"
            : "up"
          : "vertical"
      );
    }),
    (b.prototype.swipeEnd = function (a) {
      var c,
        d,
        b = this;
      if (
        ((b.dragging = !1),
        (b.interrupted = !1),
        (b.shouldClick = b.touchObject.swipeLength > 10 ? !1 : !0),
        void 0 === b.touchObject.curX)
      )
        return !1;
      if (
        (b.touchObject.edgeHit === !0 &&
          b.$slider.trigger("edge", [b, b.swipeDirection()]),
        b.touchObject.swipeLength >= b.touchObject.minSwipe)
      ) {
        switch ((d = b.swipeDirection())) {
          case "left":
          case "down":
            (c = b.options.swipeToSlide
              ? b.checkNavigable(b.currentSlide + b.getSlideCount())
              : b.currentSlide + b.getSlideCount()),
              (b.currentDirection = 0);
            break;
          case "right":
          case "up":
            (c = b.options.swipeToSlide
              ? b.checkNavigable(b.currentSlide - b.getSlideCount())
              : b.currentSlide - b.getSlideCount()),
              (b.currentDirection = 1);
        }
        "vertical" != d &&
          (b.slideHandler(c),
          (b.touchObject = {}),
          b.$slider.trigger("swipe", [b, d]));
      } else
        b.touchObject.startX !== b.touchObject.curX &&
          (b.slideHandler(b.currentSlide), (b.touchObject = {}));
    }),
    (b.prototype.swipeHandler = function (a) {
      var b = this;
      if (
        !(
          b.options.swipe === !1 ||
          ("ontouchend" in document && b.options.swipe === !1) ||
          (b.options.draggable === !1 && -1 !== a.type.indexOf("mouse"))
        )
      )
        switch (
          ((b.touchObject.fingerCount =
            a.originalEvent && void 0 !== a.originalEvent.touches
              ? a.originalEvent.touches.length
              : 1),
          (b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold),
          b.options.verticalSwiping === !0 &&
            (b.touchObject.minSwipe = b.listHeight / b.options.touchThreshold),
          a.data.action)
        ) {
          case "start":
            b.swipeStart(a);
            break;
          case "move":
            b.swipeMove(a);
            break;
          case "end":
            b.swipeEnd(a);
        }
    }),
    (b.prototype.swipeMove = function (a) {
      var d,
        e,
        f,
        g,
        h,
        b = this;
      return (
        (h = void 0 !== a.originalEvent ? a.originalEvent.touches : null),
        !b.dragging || (h && 1 !== h.length)
          ? !1
          : ((d = b.getLeft(b.currentSlide)),
            (b.touchObject.curX = void 0 !== h ? h[0].pageX : a.clientX),
            (b.touchObject.curY = void 0 !== h ? h[0].pageY : a.clientY),
            (b.touchObject.swipeLength = Math.round(
              Math.sqrt(Math.pow(b.touchObject.curX - b.touchObject.startX, 2))
            )),
            b.options.verticalSwiping === !0 &&
              (b.touchObject.swipeLength = Math.round(
                Math.sqrt(
                  Math.pow(b.touchObject.curY - b.touchObject.startY, 2)
                )
              )),
            (e = b.swipeDirection()),
            "vertical" !== e
              ? (void 0 !== a.originalEvent &&
                  b.touchObject.swipeLength > 4 &&
                  a.preventDefault(),
                (g =
                  (b.options.rtl === !1 ? 1 : -1) *
                  (b.touchObject.curX > b.touchObject.startX ? 1 : -1)),
                b.options.verticalSwiping === !0 &&
                  (g = b.touchObject.curY > b.touchObject.startY ? 1 : -1),
                (f = b.touchObject.swipeLength),
                (b.touchObject.edgeHit = !1),
                b.options.infinite === !1 &&
                  ((0 === b.currentSlide && "right" === e) ||
                    (b.currentSlide >= b.getDotCount() && "left" === e)) &&
                  ((f = b.touchObject.swipeLength * b.options.edgeFriction),
                  (b.touchObject.edgeHit = !0)),
                b.options.vertical === !1
                  ? (b.swipeLeft = d + f * g)
                  : (b.swipeLeft =
                      d + f * (b.$list.height() / b.listWidth) * g),
                b.options.verticalSwiping === !0 && (b.swipeLeft = d + f * g),
                b.options.fade === !0 || b.options.touchMove === !1
                  ? !1
                  : b.animating === !0
                  ? ((b.swipeLeft = null), !1)
                  : void b.setCSS(b.swipeLeft))
              : void 0)
      );
    }),
    (b.prototype.swipeStart = function (a) {
      var c,
        b = this;
      return (
        (b.interrupted = !0),
        1 !== b.touchObject.fingerCount ||
        b.slideCount <= b.options.slidesToShow
          ? ((b.touchObject = {}), !1)
          : (void 0 !== a.originalEvent &&
              void 0 !== a.originalEvent.touches &&
              (c = a.originalEvent.touches[0]),
            (b.touchObject.startX = b.touchObject.curX =
              void 0 !== c ? c.pageX : a.clientX),
            (b.touchObject.startY = b.touchObject.curY =
              void 0 !== c ? c.pageY : a.clientY),
            void (b.dragging = !0))
      );
    }),
    (b.prototype.unfilterSlides = b.prototype.slickUnfilter =
      function () {
        var a = this;
        null !== a.$slidesCache &&
          (a.unload(),
          a.$slideTrack.children(this.options.slide).detach(),
          a.$slidesCache.appendTo(a.$slideTrack),
          a.reinit());
      }),
    (b.prototype.unload = function () {
      var b = this;
      a(".slick-cloned", b.$slider).remove(),
        b.$dots && b.$dots.remove(),
        b.$prevArrow &&
          b.htmlExpr.test(b.options.prevArrow) &&
          b.$prevArrow.remove(),
        b.$nextArrow &&
          b.htmlExpr.test(b.options.nextArrow) &&
          b.$nextArrow.remove(),
        b.$slides
          .removeClass("slick-slide slick-active slick-visible slick-current")
          .attr("aria-hidden", "true")
          .css("width", "");
    }),
    (b.prototype.unslick = function (a) {
      var b = this;
      b.$slider.trigger("unslick", [b, a]), b.destroy();
    }),
    (b.prototype.updateArrows = function () {
      var b,
        a = this;
      (b = Math.floor(a.options.slidesToShow / 2)),
        a.options.arrows === !0 &&
          a.slideCount > a.options.slidesToShow &&
          !a.options.infinite &&
          (a.$prevArrow
            .removeClass("slick-disabled")
            .attr("aria-disabled", "false"),
          a.$nextArrow
            .removeClass("slick-disabled")
            .attr("aria-disabled", "false"),
          0 === a.currentSlide
            ? (a.$prevArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"),
              a.$nextArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false"))
            : a.currentSlide >= a.slideCount - a.options.slidesToShow &&
              a.options.centerMode === !1
            ? (a.$nextArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"),
              a.$prevArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false"))
            : a.currentSlide >= a.slideCount - 1 &&
              a.options.centerMode === !0 &&
              (a.$nextArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"),
              a.$prevArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false")));
    }),
    (b.prototype.updateDots = function () {
      var a = this;
      null !== a.$dots &&
        (a.$dots
          .find("li")
          .removeClass("slick-active")
          .attr("aria-hidden", "true"),
        a.$dots
          .find("li")
          .eq(Math.floor(a.currentSlide / a.options.slidesToScroll))
          .addClass("slick-active")
          .attr("aria-hidden", "false"));
    }),
    (b.prototype.visibility = function () {
      var a = this;
      a.options.autoplay &&
        (document[a.hidden] ? (a.interrupted = !0) : (a.interrupted = !1));
    }),
    (a.fn.slick = function () {
      var f,
        g,
        a = this,
        c = arguments[0],
        d = Array.prototype.slice.call(arguments, 1),
        e = a.length;
      for (f = 0; e > f; f++)
        if (
          ("object" == typeof c || "undefined" == typeof c
            ? (a[f].slick = new b(a[f], c))
            : (g = a[f].slick[c].apply(a[f].slick, d)),
          "undefined" != typeof g)
        )
          return g;
      return a;
    });
});
!(function (e) {
  function n(e) {
    var n = e.value || "";
    return n.length || (n = null), n;
  }
  e.fn.serializeObject = function () {
    "use strict";
    var a = {},
      t = function (t, i) {
        var o = a[i.name];
        "undefined" != typeof o && null !== o
          ? e.isArray(o)
            ? o.push(n(i))
            : (a[i.name] = [o, n(i)])
          : (a[i.name] = n(i));
      };
    return e.each(this.serializeArray(), t), a;
  };
})(jQuery);
!(function (a) {
  a.extend(a.fn, {
    validate: function (b) {
      if (!this.length)
        return void (
          b &&
          b.debug &&
          window.console &&
          console.warn("Nothing selected, can't validate, returning nothing.")
        );
      var c = a.data(this[0], "validator");
      return c
        ? c
        : (this.attr("novalidate", "novalidate"),
          (c = new a.validator(b, this[0])),
          a.data(this[0], "validator", c),
          c.settings.onsubmit &&
            (this.validateDelegate(":submit", "click", function (b) {
              c.settings.submitHandler && (c.submitButton = b.target),
                a(b.target).hasClass("cancel") && (c.cancelSubmit = !0),
                void 0 !== a(b.target).attr("formnovalidate") &&
                  (c.cancelSubmit = !0);
            }),
            this.submit(function (b) {
              function d() {
                var d;
                return c.settings.submitHandler
                  ? (c.submitButton &&
                      (d = a("<input type='hidden'/>")
                        .attr("name", c.submitButton.name)
                        .val(a(c.submitButton).val())
                        .appendTo(c.currentForm)),
                    c.settings.submitHandler.call(c, c.currentForm, b),
                    c.submitButton && d.remove(),
                    !1)
                  : !0;
              }
              return (
                c.settings.debug && b.preventDefault(),
                c.cancelSubmit
                  ? ((c.cancelSubmit = !1), d())
                  : c.form()
                  ? c.pendingRequest
                    ? ((c.formSubmitted = !0), !1)
                    : d()
                  : (c.focusInvalid(), !1)
              );
            })),
          c);
    },
    valid: function () {
      var b, c;
      return (
        a(this[0]).is("form")
          ? (b = this.validate().form())
          : ((b = !0),
            (c = a(this[0].form).validate()),
            this.each(function () {
              b = c.element(this) && b;
            })),
        b
      );
    },
    removeAttrs: function (b) {
      var c = {},
        d = this;
      return (
        a.each(b.split(/\s/), function (a, b) {
          (c[b] = d.attr(b)), d.removeAttr(b);
        }),
        c
      );
    },
    rules: function (b, c) {
      var d,
        e,
        f,
        g,
        h,
        i,
        j = this[0];
      if (b)
        switch (
          ((d = a.data(j.form, "validator").settings),
          (e = d.rules),
          (f = a.validator.staticRules(j)),
          b)
        ) {
          case "add":
            a.extend(f, a.validator.normalizeRule(c)),
              delete f.messages,
              (e[j.name] = f),
              c.messages &&
                (d.messages[j.name] = a.extend(d.messages[j.name], c.messages));
            break;
          case "remove":
            return c
              ? ((i = {}),
                a.each(c.split(/\s/), function (b, c) {
                  (i[c] = f[c]),
                    delete f[c],
                    "required" === c && a(j).removeAttr("aria-required");
                }),
                i)
              : (delete e[j.name], f);
        }
      return (
        (g = a.validator.normalizeRules(
          a.extend(
            {},
            a.validator.classRules(j),
            a.validator.attributeRules(j),
            a.validator.dataRules(j),
            a.validator.staticRules(j)
          ),
          j
        )),
        g.required &&
          ((h = g.required),
          delete g.required,
          (g = a.extend({ required: h }, g)),
          a(j).attr("aria-required", "true")),
        g.remote &&
          ((h = g.remote), delete g.remote, (g = a.extend(g, { remote: h }))),
        g
      );
    },
  }),
    a.extend(a.expr[":"], {
      blank: function (b) {
        return !a.trim("" + a(b).val());
      },
      filled: function (b) {
        return !!a.trim("" + a(b).val());
      },
      unchecked: function (b) {
        return !a(b).prop("checked");
      },
    }),
    (a.validator = function (b, c) {
      (this.settings = a.extend(!0, {}, a.validator.defaults, b)),
        (this.currentForm = c),
        this.init();
    }),
    (a.validator.format = function (b, c) {
      return 1 === arguments.length
        ? function () {
            var c = a.makeArray(arguments);
            return c.unshift(b), a.validator.format.apply(this, c);
          }
        : (arguments.length > 2 &&
            c.constructor !== Array &&
            (c = a.makeArray(arguments).slice(1)),
          c.constructor !== Array && (c = [c]),
          a.each(c, function (a, c) {
            b = b.replace(new RegExp("\\{" + a + "\\}", "g"), function () {
              return c;
            });
          }),
          b);
    }),
    a.extend(a.validator, {
      defaults: {
        messages: {},
        groups: {},
        rules: {},
        errorClass: "error",
        validClass: "valid",
        errorElement: "label",
        focusInvalid: !0,
        errorContainer: a([]),
        errorLabelContainer: a([]),
        onsubmit: !0,
        ignore: ":hidden",
        ignoreTitle: !1,
        onfocusin: function (a) {
          (this.lastActive = a),
            this.settings.focusCleanup &&
              !this.blockFocusCleanup &&
              (this.settings.unhighlight &&
                this.settings.unhighlight.call(
                  this,
                  a,
                  this.settings.errorClass,
                  this.settings.validClass
                ),
              this.addWrapper(this.errorsFor(a)).hide());
        },
        onfocusout: function (a) {
          this.checkable(a) ||
            (!(a.name in this.submitted) && this.optional(a)) ||
            this.element(a);
        },
        onkeyup: function (a, b) {
          (9 !== b.which || "" !== this.elementValue(a)) &&
            (a.name in this.submitted || a === this.lastElement) &&
            this.element(a);
        },
        onclick: function (a) {
          a.name in this.submitted
            ? this.element(a)
            : a.parentNode.name in this.submitted && this.element(a.parentNode);
        },
        highlight: function (b, c, d) {
          "radio" === b.type
            ? this.findByName(b.name).addClass(c).removeClass(d)
            : a(b).addClass(c).removeClass(d);
        },
        unhighlight: function (b, c, d) {
          "radio" === b.type
            ? this.findByName(b.name).removeClass(c).addClass(d)
            : a(b).removeClass(c).addClass(d);
        },
      },
      setDefaults: function (b) {
        a.extend(a.validator.defaults, b);
      },
      messages: {
        required: "This field is required.",
        remote: "Please fix this field.",
        email: "Please enter a valid email address.",
        url: "Please enter a valid URL.",
        date: "Please enter a valid date.",
        dateISO: "Please enter a valid date (ISO).",
        number: "Please enter a valid number.",
        digits: "Please enter only digits.",
        creditcard: "Please enter a valid credit card number.",
        equalTo: "Please enter the same value again.",
        maxlength: a.validator.format(
          "Please enter no more than {0} characters."
        ),
        minlength: a.validator.format("Please enter at least {0} characters."),
        rangelength: a.validator.format(
          "Please enter a value between {0} and {1} characters long."
        ),
        range: a.validator.format("Please enter a value between {0} and {1}."),
        max: a.validator.format(
          "Please enter a value less than or equal to {0}."
        ),
        min: a.validator.format(
          "Please enter a value greater than or equal to {0}."
        ),
      },
      autoCreateRanges: !1,
      prototype: {
        init: function () {
          function b(b) {
            var c = a.data(this[0].form, "validator"),
              d = "on" + b.type.replace(/^validate/, ""),
              e = c.settings;
            e[d] && !this.is(e.ignore) && e[d].call(c, this[0], b);
          }
          (this.labelContainer = a(this.settings.errorLabelContainer)),
            (this.errorContext =
              (this.labelContainer.length && this.labelContainer) ||
              a(this.currentForm)),
            (this.containers = a(this.settings.errorContainer).add(
              this.settings.errorLabelContainer
            )),
            (this.submitted = {}),
            (this.valueCache = {}),
            (this.pendingRequest = 0),
            (this.pending = {}),
            (this.invalid = {}),
            this.reset();
          var c,
            d = (this.groups = {});
          a.each(this.settings.groups, function (b, c) {
            "string" == typeof c && (c = c.split(/\s/)),
              a.each(c, function (a, c) {
                d[c] = b;
              });
          }),
            (c = this.settings.rules),
            a.each(c, function (b, d) {
              c[b] = a.validator.normalizeRule(d);
            }),
            a(this.currentForm)
              .validateDelegate(
                ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ",
                "focusin focusout keyup",
                b
              )
              .validateDelegate(
                "[type='radio'], [type='checkbox'], select, option",
                "click",
                b
              ),
            this.settings.invalidHandler &&
              a(this.currentForm).bind(
                "invalid-form.validate",
                this.settings.invalidHandler
              ),
            a(this.currentForm)
              .find("[required], [data-rule-required], .required")
              .attr("aria-required", "true");
        },
        form: function () {
          return (
            this.checkForm(),
            a.extend(this.submitted, this.errorMap),
            (this.invalid = a.extend({}, this.errorMap)),
            this.valid() ||
              a(this.currentForm).triggerHandler("invalid-form", [this]),
            this.showErrors(),
            this.valid()
          );
        },
        checkForm: function () {
          this.prepareForm();
          for (
            var a = 0, b = (this.currentElements = this.elements());
            b[a];
            a++
          )
            this.check(b[a]);
          return this.valid();
        },
        element: function (b) {
          var c = this.clean(b),
            d = this.validationTargetFor(c),
            e = !0;
          return (
            (this.lastElement = d),
            void 0 === d
              ? delete this.invalid[c.name]
              : (this.prepareElement(d),
                (this.currentElements = a(d)),
                (e = this.check(d) !== !1),
                e ? delete this.invalid[d.name] : (this.invalid[d.name] = !0)),
            a(b).attr("aria-invalid", !e),
            this.numberOfInvalids() ||
              (this.toHide = this.toHide.add(this.containers)),
            this.showErrors(),
            e
          );
        },
        showErrors: function (b) {
          if (b) {
            a.extend(this.errorMap, b), (this.errorList = []);
            for (var c in b)
              this.errorList.push({
                message: b[c],
                element: this.findByName(c)[0],
              });
            this.successList = a.grep(this.successList, function (a) {
              return !(a.name in b);
            });
          }
          this.settings.showErrors
            ? this.settings.showErrors.call(this, this.errorMap, this.errorList)
            : this.defaultShowErrors();
        },
        resetForm: function () {
          a.fn.resetForm && a(this.currentForm).resetForm(),
            (this.submitted = {}),
            (this.lastElement = null),
            this.prepareForm(),
            this.hideErrors(),
            this.elements()
              .removeClass(this.settings.errorClass)
              .removeData("previousValue")
              .removeAttr("aria-invalid");
        },
        numberOfInvalids: function () {
          return this.objectLength(this.invalid);
        },
        objectLength: function (a) {
          var b,
            c = 0;
          for (b in a) c++;
          return c;
        },
        hideErrors: function () {
          this.addWrapper(this.toHide).hide();
        },
        valid: function () {
          return 0 === this.size();
        },
        size: function () {
          return this.errorList.length;
        },
        focusInvalid: function () {
          if (this.settings.focusInvalid)
            try {
              a(
                this.findLastActive() ||
                  (this.errorList.length && this.errorList[0].element) ||
                  []
              )
                .filter(":visible")
                .focus()
                .trigger("focusin");
            } catch (b) {}
        },
        findLastActive: function () {
          var b = this.lastActive;
          return (
            b &&
            1 ===
              a.grep(this.errorList, function (a) {
                return a.element.name === b.name;
              }).length &&
            b
          );
        },
        elements: function () {
          var b = this,
            c = {};
          return a(this.currentForm)
            .find("input, select, textarea")
            .not(":submit, :reset, :image, [disabled]")
            .not(this.settings.ignore)
            .filter(function () {
              return (
                !this.name &&
                  b.settings.debug &&
                  window.console &&
                  console.error("%o has no name assigned", this),
                this.name in c || !b.objectLength(a(this).rules())
                  ? !1
                  : ((c[this.name] = !0), !0)
              );
            });
        },
        clean: function (b) {
          return a(b)[0];
        },
        errors: function () {
          var b = this.settings.errorClass.split(" ").join(".");
          return a(this.settings.errorElement + "." + b, this.errorContext);
        },
        reset: function () {
          (this.successList = []),
            (this.errorList = []),
            (this.errorMap = {}),
            (this.toShow = a([])),
            (this.toHide = a([])),
            (this.currentElements = a([]));
        },
        prepareForm: function () {
          this.reset(), (this.toHide = this.errors().add(this.containers));
        },
        prepareElement: function (a) {
          this.reset(), (this.toHide = this.errorsFor(a));
        },
        elementValue: function (b) {
          var c,
            d = a(b),
            e = d.attr("type");
          return "radio" === e || "checkbox" === e
            ? a("input[name='" + d.attr("name") + "']:checked").val()
            : ((c = d.val()), "string" == typeof c ? c.replace(/\r/g, "") : c);
        },
        check: function (b) {
          b = this.validationTargetFor(this.clean(b));
          var c,
            d,
            e,
            f = a(b).rules(),
            g = a.map(f, function (a, b) {
              return b;
            }).length,
            h = !1,
            i = this.elementValue(b);
          for (d in f) {
            e = { method: d, parameters: f[d] };
            try {
              if (
                ((c = a.validator.methods[d].call(this, i, b, e.parameters)),
                "dependency-mismatch" === c && 1 === g)
              ) {
                h = !0;
                continue;
              }
              if (((h = !1), "pending" === c))
                return void (this.toHide = this.toHide.not(this.errorsFor(b)));
              if (!c) return this.formatAndAdd(b, e), !1;
            } catch (j) {
              throw (
                (this.settings.debug &&
                  window.console &&
                  console.log(
                    "Exception occurred when checking element " +
                      b.id +
                      ", check the '" +
                      e.method +
                      "' method.",
                    j
                  ),
                j)
              );
            }
          }
          if (!h) return this.objectLength(f) && this.successList.push(b), !0;
        },
        customDataMessage: function (b, c) {
          return (
            a(b).data(
              "msg" + c[0].toUpperCase() + c.substring(1).toLowerCase()
            ) || a(b).data("msg")
          );
        },
        customMessage: function (a, b) {
          var c = this.settings.messages[a];
          return c && (c.constructor === String ? c : c[b]);
        },
        findDefined: function () {
          for (var a = 0; a < arguments.length; a++)
            if (void 0 !== arguments[a]) return arguments[a];
          return void 0;
        },
        defaultMessage: function (b, c) {
          return this.findDefined(
            this.customMessage(b.name, c),
            this.customDataMessage(b, c),
            (!this.settings.ignoreTitle && b.title) || void 0,
            a.validator.messages[c],
            "<strong>Warning: No message defined for " + b.name + "</strong>"
          );
        },
        formatAndAdd: function (b, c) {
          var d = this.defaultMessage(b, c.method),
            e = /\$?\{(\d+)\}/g;
          "function" == typeof d
            ? (d = d.call(this, c.parameters, b))
            : e.test(d) &&
              (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)),
            this.errorList.push({ message: d, element: b, method: c.method }),
            (this.errorMap[b.name] = d),
            (this.submitted[b.name] = d);
        },
        addWrapper: function (a) {
          return (
            this.settings.wrapper &&
              (a = a.add(a.parent(this.settings.wrapper))),
            a
          );
        },
        defaultShowErrors: function () {
          var a, b, c;
          for (a = 0; this.errorList[a]; a++)
            (c = this.errorList[a]),
              this.settings.highlight &&
                this.settings.highlight.call(
                  this,
                  c.element,
                  this.settings.errorClass,
                  this.settings.validClass
                ),
              this.showLabel(c.element, c.message);
          if (
            (this.errorList.length &&
              (this.toShow = this.toShow.add(this.containers)),
            this.settings.success)
          )
            for (a = 0; this.successList[a]; a++)
              this.showLabel(this.successList[a]);
          if (this.settings.unhighlight)
            for (a = 0, b = this.validElements(); b[a]; a++)
              this.settings.unhighlight.call(
                this,
                b[a],
                this.settings.errorClass,
                this.settings.validClass
              );
          (this.toHide = this.toHide.not(this.toShow)),
            this.hideErrors(),
            this.addWrapper(this.toShow).show();
        },
        validElements: function () {
          return this.currentElements.not(this.invalidElements());
        },
        invalidElements: function () {
          return a(this.errorList).map(function () {
            return this.element;
          });
        },
        showLabel: function (b, c) {
          var d = this.errorsFor(b);
          d.length
            ? (d
                .removeClass(this.settings.validClass)
                .addClass(this.settings.errorClass),
              d.html(c))
            : ((d = a("<" + this.settings.errorElement + ">")
                .attr("for", this.idOrName(b))
                .addClass(this.settings.errorClass)
                .html(c || "")),
              this.settings.wrapper &&
                (d = d
                  .hide()
                  .show()
                  .wrap("<" + this.settings.wrapper + "/>")
                  .parent()),
              this.labelContainer.append(d).length ||
                (this.settings.errorPlacement
                  ? this.settings.errorPlacement(d, a(b))
                  : d.insertAfter(b))),
            !c &&
              this.settings.success &&
              (d.text(""),
              "string" == typeof this.settings.success
                ? d.addClass(this.settings.success)
                : this.settings.success(d, b)),
            (this.toShow = this.toShow.add(d));
        },
        errorsFor: function (b) {
          var c = this.idOrName(b);
          return this.errors().filter(function () {
            return a(this).attr("for") === c;
          });
        },
        idOrName: function (a) {
          return (
            this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name)
          );
        },
        validationTargetFor: function (a) {
          return (
            this.checkable(a) &&
              (a = this.findByName(a.name).not(this.settings.ignore)[0]),
            a
          );
        },
        checkable: function (a) {
          return /radio|checkbox/i.test(a.type);
        },
        findByName: function (b) {
          return a(this.currentForm).find("[name='" + b + "']");
        },
        getLength: function (b, c) {
          switch (c.nodeName.toLowerCase()) {
            case "select":
              return a("option:selected", c).length;
            case "input":
              if (this.checkable(c))
                return this.findByName(c.name).filter(":checked").length;
          }
          return b.length;
        },
        depend: function (a, b) {
          return this.dependTypes[typeof a]
            ? this.dependTypes[typeof a](a, b)
            : !0;
        },
        dependTypes: {
          boolean: function (a) {
            return a;
          },
          string: function (b, c) {
            return !!a(b, c.form).length;
          },
          function: function (a, b) {
            return a(b);
          },
        },
        optional: function (b) {
          var c = this.elementValue(b);
          return (
            !a.validator.methods.required.call(this, c, b) &&
            "dependency-mismatch"
          );
        },
        startRequest: function (a) {
          this.pending[a.name] ||
            (this.pendingRequest++, (this.pending[a.name] = !0));
        },
        stopRequest: function (b, c) {
          this.pendingRequest--,
            this.pendingRequest < 0 && (this.pendingRequest = 0),
            delete this.pending[b.name],
            c && 0 === this.pendingRequest && this.formSubmitted && this.form()
              ? (a(this.currentForm).submit(), (this.formSubmitted = !1))
              : !c &&
                0 === this.pendingRequest &&
                this.formSubmitted &&
                (a(this.currentForm).triggerHandler("invalid-form", [this]),
                (this.formSubmitted = !1));
        },
        previousValue: function (b) {
          return (
            a.data(b, "previousValue") ||
            a.data(b, "previousValue", {
              old: null,
              valid: !0,
              message: this.defaultMessage(b, "remote"),
            })
          );
        },
      },
      classRuleSettings: {
        required: { required: !0 },
        email: { email: !0 },
        url: { url: !0 },
        date: { date: !0 },
        dateISO: { dateISO: !0 },
        number: { number: !0 },
        digits: { digits: !0 },
        creditcard: { creditcard: !0 },
      },
      addClassRules: function (b, c) {
        b.constructor === String
          ? (this.classRuleSettings[b] = c)
          : a.extend(this.classRuleSettings, b);
      },
      classRules: function (b) {
        var c = {},
          d = a(b).attr("class");
        return (
          d &&
            a.each(d.split(" "), function () {
              this in a.validator.classRuleSettings &&
                a.extend(c, a.validator.classRuleSettings[this]);
            }),
          c
        );
      },
      attributeRules: function (b) {
        var c,
          d,
          e = {},
          f = a(b),
          g = b.getAttribute("type");
        for (c in a.validator.methods)
          "required" === c
            ? ((d = b.getAttribute(c)), "" === d && (d = !0), (d = !!d))
            : (d = f.attr(c)),
            /min|max/.test(c) &&
              (null === g || /number|range|text/.test(g)) &&
              (d = Number(d)),
            d || 0 === d ? (e[c] = d) : g === c && "range" !== g && (e[c] = !0);
        return (
          e.maxlength &&
            /-1|2147483647|524288/.test(e.maxlength) &&
            delete e.maxlength,
          e
        );
      },
      dataRules: function (b) {
        var c,
          d,
          e = {},
          f = a(b);
        for (c in a.validator.methods)
          (d = f.data(
            "rule" + c[0].toUpperCase() + c.substring(1).toLowerCase()
          )),
            void 0 !== d && (e[c] = d);
        return e;
      },
      staticRules: function (b) {
        var c = {},
          d = a.data(b.form, "validator");
        return (
          d.settings.rules &&
            (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}),
          c
        );
      },
      normalizeRules: function (b, c) {
        return (
          a.each(b, function (d, e) {
            if (e === !1) return void delete b[d];
            if (e.param || e.depends) {
              var f = !0;
              switch (typeof e.depends) {
                case "string":
                  f = !!a(e.depends, c.form).length;
                  break;
                case "function":
                  f = e.depends.call(c, c);
              }
              f ? (b[d] = void 0 !== e.param ? e.param : !0) : delete b[d];
            }
          }),
          a.each(b, function (d, e) {
            b[d] = a.isFunction(e) ? e(c) : e;
          }),
          a.each(["minlength", "maxlength"], function () {
            b[this] && (b[this] = Number(b[this]));
          }),
          a.each(["rangelength", "range"], function () {
            var c;
            b[this] &&
              (a.isArray(b[this])
                ? (b[this] = [Number(b[this][0]), Number(b[this][1])])
                : "string" == typeof b[this] &&
                  ((c = b[this].split(/[\s,]+/)),
                  (b[this] = [Number(c[0]), Number(c[1])])));
          }),
          a.validator.autoCreateRanges &&
            (b.min &&
              b.max &&
              ((b.range = [b.min, b.max]), delete b.min, delete b.max),
            b.minlength &&
              b.maxlength &&
              ((b.rangelength = [b.minlength, b.maxlength]),
              delete b.minlength,
              delete b.maxlength)),
          b
        );
      },
      normalizeRule: function (b) {
        if ("string" == typeof b) {
          var c = {};
          a.each(b.split(/\s/), function () {
            c[this] = !0;
          }),
            (b = c);
        }
        return b;
      },
      addMethod: function (b, c, d) {
        (a.validator.methods[b] = c),
          (a.validator.messages[b] =
            void 0 !== d ? d : a.validator.messages[b]),
          c.length < 3 &&
            a.validator.addClassRules(b, a.validator.normalizeRule(b));
      },
      methods: {
        required: function (b, c, d) {
          if (!this.depend(d, c)) return "dependency-mismatch";
          if ("select" === c.nodeName.toLowerCase()) {
            var e = a(c).val();
            return e && e.length > 0;
          }
          return this.checkable(c)
            ? this.getLength(b, c) > 0
            : a.trim(b).length > 0;
        },
        email: function (a, b) {
          return (
            this.optional(b) ||
            /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
              a
            )
          );
        },
        url: function (a, b) {
          return (
            this.optional(b) ||
            /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(
              a
            )
          );
        },
        date: function (a, b) {
          return (
            this.optional(b) || !/Invalid|NaN/.test(new Date(a).toString())
          );
        },
        dateISO: function (a, b) {
          return (
            this.optional(b) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(a)
          );
        },
        number: function (a, b) {
          return (
            this.optional(b) ||
            /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)
          );
        },
        digits: function (a, b) {
          return this.optional(b) || /^\d+$/.test(a);
        },
        creditcard: function (a, b) {
          if (this.optional(b)) return "dependency-mismatch";
          if (/[^0-9 \-]+/.test(a)) return !1;
          var c,
            d,
            e = 0,
            f = 0,
            g = !1;
          if (((a = a.replace(/\D/g, "")), a.length < 13 || a.length > 19))
            return !1;
          for (c = a.length - 1; c >= 0; c--)
            (d = a.charAt(c)),
              (f = parseInt(d, 10)),
              g && (f *= 2) > 9 && (f -= 9),
              (e += f),
              (g = !g);
          return e % 10 === 0;
        },
        minlength: function (b, c, d) {
          var e = a.isArray(b) ? b.length : this.getLength(a.trim(b), c);
          return this.optional(c) || e >= d;
        },
        maxlength: function (b, c, d) {
          var e = a.isArray(b) ? b.length : this.getLength(a.trim(b), c);
          return this.optional(c) || d >= e;
        },
        rangelength: function (b, c, d) {
          var e = a.isArray(b) ? b.length : this.getLength(a.trim(b), c);
          return this.optional(c) || (e >= d[0] && e <= d[1]);
        },
        min: function (a, b, c) {
          return this.optional(b) || a >= c;
        },
        max: function (a, b, c) {
          return this.optional(b) || c >= a;
        },
        range: function (a, b, c) {
          return this.optional(b) || (a >= c[0] && a <= c[1]);
        },
        equalTo: function (b, c, d) {
          var e = a(d);
          return (
            this.settings.onfocusout &&
              e
                .unbind(".validate-equalTo")
                .bind("blur.validate-equalTo", function () {
                  a(c).valid();
                }),
            b === e.val()
          );
        },
        remote: function (b, c, d) {
          if (this.optional(c)) return "dependency-mismatch";
          var e,
            f,
            g = this.previousValue(c);
          return (
            this.settings.messages[c.name] ||
              (this.settings.messages[c.name] = {}),
            (g.originalMessage = this.settings.messages[c.name].remote),
            (this.settings.messages[c.name].remote = g.message),
            (d = ("string" == typeof d && { url: d }) || d),
            g.old === b
              ? g.valid
              : ((g.old = b),
                (e = this),
                this.startRequest(c),
                (f = {}),
                (f[c.name] = b),
                a.ajax(
                  a.extend(
                    !0,
                    {
                      url: d,
                      mode: "abort",
                      port: "validate" + c.name,
                      dataType: "json",
                      data: f,
                      context: e.currentForm,
                      success: function (d) {
                        var f,
                          h,
                          i,
                          j = d === !0 || "true" === d;
                        (e.settings.messages[c.name].remote =
                          g.originalMessage),
                          j
                            ? ((i = e.formSubmitted),
                              e.prepareElement(c),
                              (e.formSubmitted = i),
                              e.successList.push(c),
                              delete e.invalid[c.name],
                              e.showErrors())
                            : ((f = {}),
                              (h = d || e.defaultMessage(c, "remote")),
                              (f[c.name] = g.message =
                                a.isFunction(h) ? h(b) : h),
                              (e.invalid[c.name] = !0),
                              e.showErrors(f)),
                          (g.valid = j),
                          e.stopRequest(c, j);
                      },
                    },
                    d
                  )
                ),
                "pending")
          );
        },
      },
    }),
    (a.format = function () {
      throw "$.format has been deprecated. Please use $.validator.format instead.";
    });
})(jQuery),
  (function (a) {
    var b,
      c = {};
    a.ajaxPrefilter
      ? a.ajaxPrefilter(function (a, b, d) {
          var e = a.port;
          "abort" === a.mode && (c[e] && c[e].abort(), (c[e] = d));
        })
      : ((b = a.ajax),
        (a.ajax = function (d) {
          var e = ("mode" in d ? d : a.ajaxSettings).mode,
            f = ("port" in d ? d : a.ajaxSettings).port;
          return "abort" === e
            ? (c[f] && c[f].abort(), (c[f] = b.apply(this, arguments)), c[f])
            : b.apply(this, arguments);
        }));
  })(jQuery),
  (function (a) {
    a.extend(a.fn, {
      validateDelegate: function (b, c, d) {
        return this.bind(c, function (c) {
          var e = a(c.target);
          return e.is(b) ? d.apply(e, arguments) : void 0;
        });
      },
    });
  })(jQuery);
$.validator.addMethod(
  "cpf",
  function (value, element) {
    function valida_cpf(cpf) {
      if (cpf.length < 11) return false;
      var numeros, digitos, soma, i, resultado;
      numeros = cpf.substring(0, 9);
      digitos = cpf.substring(9);
      soma = 0;
      for (i = 10; i > 1; i--) soma += numeros.charAt(10 - i) * i;
      resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
      if (resultado != digitos.charAt(0)) return false;
      numeros = cpf.substring(0, 10);
      soma = 0;
      for (i = 11; i > 1; i--) soma += numeros.charAt(11 - i) * i;
      resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
      if (resultado != digitos.charAt(1)) return false;
      return true;
    }
    return valida_cpf(value.replace(/[^0-9]/gi, ""));
  },
  "Informe um CPF válido."
);
(function (o) {
  var t = {
    url: !1,
    callback: !1,
    target: !1,
    duration: 120,
    on: "mouseover",
    touch: !0,
    onZoomIn: !1,
    onZoomOut: !1,
    magnify: 1,
  };
  (o.zoom = function (t, n, e, i) {
    var u,
      c,
      r,
      a,
      m,
      l,
      s,
      f = o(t),
      h = f.css("position"),
      d = o(n);
    return (
      (t.style.position = /(absolute|fixed)/.test(h) ? h : "relative"),
      (t.style.overflow = "hidden"),
      (e.style.width = e.style.height = ""),
      o(e)
        .addClass("zoomImg")
        .css({
          position: "absolute",
          top: 0,
          left: 0,
          opacity: 0,
          width: e.width * i,
          height: e.height * i,
          border: "none",
          maxWidth: "none",
          maxHeight: "none",
        })
        .appendTo(t),
      {
        init: function () {
          (c = f.outerWidth()),
            (u = f.outerHeight()),
            n === t
              ? ((a = c), (r = u))
              : ((a = d.outerWidth()), (r = d.outerHeight())),
            (m = (e.width - c) / a),
            (l = (e.height - u) / r),
            (s = d.offset());
        },
        move: function (o) {
          var t = o.pageX - s.left,
            n = o.pageY - s.top;
          (n = Math.max(Math.min(n, r), 0)),
            (t = Math.max(Math.min(t, a), 0)),
            (e.style.left = t * -m + "px"),
            (e.style.top = n * -l + "px");
        },
      }
    );
  }),
    (o.fn.zoom = function (n) {
      return this.each(function () {
        var e = o.extend({}, t, n || {}),
          i = (e.target && o(e.target)[0]) || this,
          u = this,
          c = o(u),
          r = document.createElement("img"),
          a = o(r),
          m = "mousemove.zoom",
          l = !1,
          s = !1;
        if (!e.url) {
          var f = u.querySelector("img");
          if (
            (f && (e.url = f.getAttribute("data-src") || f.currentSrc || f.src),
            !e.url)
          )
            return;
        }
        c.one(
          "zoom.destroy",
          function (o, t) {
            c.off(".zoom"),
              (i.style.position = o),
              (i.style.overflow = t),
              (r.onload = null),
              a.remove();
          }.bind(this, i.style.position, i.style.overflow)
        ),
          (r.onload = function () {
            function t(t) {
              f.init(),
                f.move(t),
                a
                  .stop()
                  .fadeTo(
                    o.support.opacity ? e.duration : 0,
                    1,
                    o.isFunction(e.onZoomIn) ? e.onZoomIn.call(r) : !1
                  );
            }
            function n() {
              a.stop().fadeTo(
                e.duration,
                0,
                o.isFunction(e.onZoomOut) ? e.onZoomOut.call(r) : !1
              );
            }
            var f = o.zoom(i, u, r, e.magnify);
            "grab" === e.on
              ? c.on("mousedown.zoom", function (e) {
                  1 === e.which &&
                    (o(document).one("mouseup.zoom", function () {
                      n(), o(document).off(m, f.move);
                    }),
                    t(e),
                    o(document).on(m, f.move),
                    e.preventDefault());
                })
              : "click" === e.on
              ? c.on("click.zoom", function (e) {
                  return l
                    ? void 0
                    : ((l = !0),
                      t(e),
                      o(document).on(m, f.move),
                      o(document).one("click.zoom", function () {
                        n(), (l = !1), o(document).off(m, f.move);
                      }),
                      !1);
                })
              : "toggle" === e.on
              ? c.on("click.zoom", function (o) {
                  l ? n() : t(o), (l = !l);
                })
              : "mouseover" === e.on &&
                (f.init(),
                c
                  .on("mouseenter.zoom", t)
                  .on("mouseleave.zoom", n)
                  .on(m, f.move)),
              e.touch &&
                c
                  .on("touchstart.zoom", function (o) {
                    o.preventDefault(),
                      s
                        ? ((s = !1), n())
                        : ((s = !0),
                          t(
                            o.originalEvent.touches[0] ||
                              o.originalEvent.changedTouches[0]
                          ));
                  })
                  .on("touchmove.zoom", function (o) {
                    o.preventDefault(),
                      f.move(
                        o.originalEvent.touches[0] ||
                          o.originalEvent.changedTouches[0]
                      );
                  })
                  .on("touchend.zoom", function (o) {
                    o.preventDefault(), s && ((s = !1), n());
                  }),
              o.isFunction(e.callback) && e.callback.call(r);
          }),
          r.setAttribute("role", "presentation"),
          (r.src = e.url);
      });
    }),
    (o.fn.zoom.defaults = t);
})(window.jQuery);
