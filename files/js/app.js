/* eduardo - 22/06/2021 17:52:17 GMT */
var $ = $;
var codeFunctionsStore = {
  initStore: function () {
    $(
      ".vitrine ul li.helperComplement, .vitrine-produtos-relacionados ul li.helperComplement"
    ).each(function () {
      $(this).remove();
    });
  },
  verifyLogin: function () {
    $.get("/no-cache/profileSystem/getProfile", function (user) {
      var userStatus = user.IsUserDefined;
      if (userStatus == true) {
        $("body").addClass("user-logged");
        var name_user = user.FirstName;
        if (name_user == null) {
          name_user = user.Email;
        }
        $(".user__logged").find("span").html(name_user);
      } else {
        $("body").addClass("user-disconnected");
      }
    });
  },
  bannerStore: function () {
    $(".slider-intro .box-banner").each(function () {
      var backgroung_img_slider = $(this).find("img").attr("src");
      $(this).find("img").remove();
      $(this)
        .find("a")
        .css("background-image", 'url("' + backgroung_img_slider + '")');
    });
    var $sliderIntro = $(".slider-intro .slider__slides");
    $sliderIntro.slick({
      waitForAnimate: false,
      autoplay: !0,
      autoplaySpeed: 4500,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      appendArrows: $(".slider-intro .slider__arrows"),
      dots: true,
      appendDots: $(".slider-intro .slider__dots"),
    });
  },
  bannerStoreMobile: function () {
    var $sliderIntroMobile = $(".slider-intro-mobile .slider__slides");
    $sliderIntroMobile.slick({
      waitForAnimate: false,
      autoplay: !0,
      autoplaySpeed: 4500,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      appendDots: $(".slider-intro-mobile .slider__dots"),
      arrows: true,
      appendArrows: $(".slider-intro-mobile .slider__arrows"),
    });
  },
  bannerTriplo: function () {
    var $sliderIntroMobile = $(".banner-triplo-natal");
    $sliderIntroMobile.slick({
      waitForAnimate: false,
      autoplay: !0,
      autoplaySpeed: 4500,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      arrows: false,
    });
  },
  sliderEnvironmentsMobile: function () {
    var $sliderEnvironments = $(".list-environments-banners .slider__slides");
    $sliderEnvironments.slick({
      waitForAnimate: false,
      autoplay: !0,
      autoplaySpeed: 4500,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      dots: true,
      appendDots: $(".list-environments-banners .slider__dots"),
      arrows: true,
      appendArrows: $(".list-environments-banners .slider__arrows"),
      responsive: [
        { breakpoint: 370, settings: { slidesToShow: 3, dots: false } },
        { breakpoint: 460, settings: { slidesToShow: 3, dots: false } },
        { breakpoint: 1060, settings: { slidesToShow: 4, dots: false } },
      ],
    });
  },
  corta_titulo: function () {
    var nomeProd, nomeCount, alterNomeProd;
    var qtsChars = [];
    if ($(window).width() < 1024) {
      qtsChars[0] = 40;
    } else {
      qtsChars[0] = 60;
    }
    qtsChars[1] = qtsChars[0] - 3;
    $(".vitrine ul li .product__head h4")
      .find("a")
      .not(".complete")
      .each(function (i) {
        $(this).toggleClass("complete");
        var linha = $(this);
        nomeProd = linha.html().trim();
        nomeCount = nomeProd.length;
        if (nomeCount > qtsChars[0]) {
          alterNomeProd = nomeProd.slice(0, qtsChars[1]).trim();
          linha.html(alterNomeProd + "...");
        }
      });
  },
  bannerDiferenciais: function () {
    $(".diferenciais").slick({
      autoplay: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      arrows: false,
    });
    $(".diferenciais").css("display", "block");
  },
  bannerDiferenciais2: function () {
    if (window.matchMedia("(max-width: 950px)").matches) {
      $("section.section-info-store .info-store ul ").slick({
        infinite: true,
        slidesToShow: 4,
        arrows: false,
        responsive: [
          { breakpoint: 850, settings: { slidesToShow: 3, autoplay: true } },
          { breakpoint: 650, settings: { slidesToShow: 2, autoplay: true } },
          { breakpoint: 500, settings: { slidesToShow: 1, autoplay: true } },
        ],
      });
    }
  },
  bannerDiferenciais3: function () {
    if (window.matchMedia("(max-width: 1023px)").matches) {
      $(".section-info-store").before($(".section-environments"));
    }
  },
  sliderProductsHome: function () {
    var $sliderSection = $(".section--sales .slider-products");
    var $sliderSlides = $sliderSection.find(".slider__slides .vitrine > ul");
    var $sliderArrows = $sliderSection.find(".slider__arrows");
    $sliderSlides.slick({
      waitForAnimate: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      appendDots: $sliderSection.find(".slider__dots"),
      appendArrows: $sliderArrows,
      responsive: [
        { breakpoint: 1023, settings: { slidesToShow: 2, dots: false } },
        { breakpoint: 374, settings: { slidesToShow: 2, dots: false } },
      ],
    });
    var $sliderSectionTwo = $(".section--sales--featured");
    var $sliderSlidesTwo = $sliderSectionTwo.find(
      ".slider__slides .vitrine > ul"
    );
    var $sliderArrowsTwo = $sliderSectionTwo.find(".slider__arrows");
    $sliderSlidesTwo.slick({
      waitForAnimate: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      appendDots: $sliderSectionTwo.find(".slider__dots"),
      appendArrows: $sliderArrowsTwo,
      responsive: [
        { breakpoint: 1023, settings: { slidesToShow: 2, dots: false } },
        { breakpoint: 374, settings: { slidesToShow: 2, dots: false } },
      ],
    });
    var $sliderSectionTree = $(".section--sales--ofertas");
    var $sliderSlidesTree = $sliderSectionTree.find(
      ".slider__slides .vitrine > ul"
    );
    var $sliderArrowsTree = $sliderSectionTree.find(".slider__arrows");
    $sliderSlidesTree.slick({
      waitForAnimate: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      appendDots: $sliderSectionTree.find(".slider__dots"),
      appendArrows: $sliderArrowsTree,
      responsive: [
        { breakpoint: 1023, settings: { slidesToShow: 2, dots: false } },
        { breakpoint: 374, settings: { slidesToShow: 2, dots: false } },
      ],
    });
    var $sliderSectionFour = $(".section--sales--vistos");
    var $sliderSlidesFour = $sliderSectionFour.find(
      ".slider__slides .vitrine > ul"
    );
    var $sliderArrowsFour = $sliderSectionFour.find(".slider__arrows");
    $sliderSlidesFour.slick({
      waitForAnimate: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      appendDots: $sliderSectionFour.find(".slider__dots"),
      appendArrows: $sliderArrowsFour,
      responsive: [
        { breakpoint: 1023, settings: { slidesToShow: 2, dots: false } },
        { breakpoint: 374, settings: { slidesToShow: 2, dots: false } },
      ],
    });
  },
  getNameEnvironmentsImage: function () {
    $(".list-environments-banners .box-banner").each(function () {
      var img_main = $(this).find("img").attr("src");
      var title_img = $(this).find("img").attr("alt");
      img_main = img_main.split("/").pop();
      var ext_img = img_main.split(".").pop();
      var img_hover = img_main.split(".").shift() + "h." + ext_img;
      $(this)
        .find("a")
        .append('<img src="/arquivos/' + img_hover + '" class="img-hover"/>');
      $(this).append('<span class="title-ambient">' + title_img + "</span>");
    });
  },
  sendNewsletter: function () {
    $(".subscribe .subscribe__btn").on("click", function (event) {
      var $this = $(this).closest(".subscribe");
      event.preventDefault();
      var emailUsuario = $this.find("input#mail").val();
      var regex =
        /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
      if (
        emailUsuario == null ||
        emailUsuario == "" ||
        !regex.test(emailUsuario)
      ) {
        $this.find("input#mail").addClass("error");
        $this.find("input#mail").on("click", function () {
          $this.find("input#mail").removeClass("error");
        });
        return false;
      } else {
        var header = {
          Accept: "application/json",
          "Content-Type": "application/json; charset=utf-8",
        };
        var dados = { email: emailUsuario };
        dados = JSON.stringify(dados);
        $.ajax({
          url: "/api/dataentities/NW/documents",
          type: "POST",
          data: dados,
          headers: header,
          success: function (resp) {
            $this
              .find(".box_subscribe__field__email, .subscribe__btn")
              .remove();
            $this
              .find(".subscribe--news")
              .append(
                '<div class="subscribe__controls subscribe_sucess">Obrigado por se cadastrar na Kazanto. <br/> Em breve entraremos em contato oferecendo nossas melhores promoÃ§Ãµes!</div>'
              );
          },
        });
      }
    });
  },
  mobileNav: function () {
    var $nav = $("nav.nav");
    $(".btn-menu").on("click", function () {
      $(".header").toggleClass("nav-open");
      $(".mask_menu").addClass("open");
    });
    $(
      ".nav__body li.has-dropdown, .nav .nav__body .has-dropdown > ul > .back a"
    ).on("click", function () {
      $(this).toggleClass("expanded");
    });
    $(".dropdown-menu .js-has-dd > a").on("click", function (e) {
      e.preventDefault();
      var $this = $(this);
      $this.parent().addClass("dd-show");
      $("nav.nav").addClass("nav--step-one");
    });
    $(".dropdown-menu .js-has-dd > a").click(function () {
      $(".dropdown-menu").animate({ scrollTop: "0" });
    });
    $(".btn-close-nav").on("click touchstart", function (e) {
      e.preventDefault();
      $("header.header").removeClass("nav-open");
      $nav.removeClass("nav--step-one");
      $(".js-has-dd").each(function () {
        $(".js-has-dd").removeClass("dd-show");
      });
      $(".mask_menu").removeClass("open");
    });
    $(".btn-back").on("click", function (e) {
      e.preventDefault();
      $nav.removeClass("nav--step-one");
      $(".js-has-dd").each(function () {
        $(this).removeClass("dd-show");
      });
    });
    $(".open-wish").click(function () {
      $(".wish-list").toggleClass("open");
      $(".open-wish").toggleClass("open");
    });
  },
  menuFiltro: function () {
    $(".search-single-navigator").prepend(
      '</div> <div class="filtro-topo"> <img src="/arquivos/filter-icon.svg" > Filtro<span></span></div>'
    );
    $(".orderBy").prepend('<img src="/arquivos/filter-button.png" >');
    $(".orderBy img").on("click", function () {
      $(".search-single-navigator").toggleClass("open");
      $(".vitrine.resultItemsWrapper").prepend(
        '<div class="background"></div>'
      );
    });
    $(".filtro-topo ").on("click", function () {
      $(".search-single-navigator").removeClass("open");
      $(".vitrine.resultItemsWrapper .background").remove();
    });
  },
  openSearchBox: function () {
    var wrapper = $(".mz-search-box-mobile");
    $(".btn-buscar-mob").click(function (e) {
      e.preventDefault();
      $(".bg").addClass("bg-modal");
    });
    $(".btn-buscar-mob").click(function (e) {
      e.preventDefault();
      $(".search").css("display", "block");
    });
    $(".bg").click(function (e) {
      e.preventDefault();
      $(".bg").removeClass("bg-modal");
      $(".search").css("display", "none");
    });
    $(".close-search").click(function (e) {
      e.preventDefault();
      $(".bg").removeClass("bg-modal");
      $(".search").css("display", "none");
    });
    document.body.click(function (e) {
      if ($(e.target).is(this)) {
        $(document.body).removeClass("bg-modal");
      }
    });
  },
  setMaxInputAutoComplete: function () {
    var max_width = $("fieldset.busca").width() + "px";
    $("ul.ui-autocomplete.ui-menu").css("maxWidth", max_width);
  },
  getTitleBannerBrands: function () {
    $(".section__content__boxes__brands .box_brand_selection").each(
      function () {
        var title_box = $(this).find(".box-banner img").attr("alt");
        var link_brand = $(this).find(".box-banner > a").attr("href");
        $(this).find("h2").html(title_box);
        $(this).find(".btn__see__more").attr("href", link_brand);
      }
    );
  },
  newsletter: function () {
    var options = {
      cookie: "QdSn1",
      cookieExpires: 30,
      cookiePath: "/",
      button: false,
      isOverflowHidden: true,
      code: "",
      email: "",
      iframeCss: "{}",
      displayTimes: 2,
      manual: false,
    };
    var options2 = {
      cookie: "QdSn2",
      cookieExpires: 1,
      cookiePath: "/",
      button: false,
      isOverflowHidden: true,
      code: "",
      email: "",
      iframeCss: "{}",
      displayTimes: 2,
      manual: false,
    };
    var cookie = parseInt($.cookie(options.cookie)) || 0;
    var cookie2 = parseInt($.cookie(options2.cookie)) || 0;
    if (cookie > 0) {
      if (cookie2 > 0) return;
      $(".qd-v1-modal-newsletter").show();
      $(".qd-v1-modal-newsletter .form-cover").addClass("modal-open-second");
      $(".close-button, .mz-components-overlay").on("click", function (e) {
        e.preventDefault();
        var currentCookie = parseInt($.cookie(options2.cookie)) || 0;
        $(".qd-v1-modal-newsletter").hide();
        $(".qd-v1-modal-newsletter .form-cover");
        $.cookie(options2.cookie, currentCookie + 1 || "0", {
          expires: parseInt(options2.cookieExpires),
          path: options2.cookiePath,
        });
      });
      return;
    }
    var modal = $(".qd-v1-modal-newsletter");
    if (!$(".qd-v1-modal-newsletter").length) return;
    $(".qd-v1-modal-newsletter").addClass("modal-open");
    $(".close-button, .mz-components-overlay").on("click", function (e) {
      e.preventDefault();
      var currentCookie = parseInt($.cookie(options.cookie)) || 0;
      $(".qd-v1-modal-newsletter").removeClass("modal-open");
      $.cookie(options.cookie, currentCookie + 1 || "0", {
        expires: parseInt(options.cookieExpires),
        path: options.cookiePath,
      });
    });
  },
  quantEstoqueShelf: function () {
    $(".vitrine.prateleira ul li .product").each(function (index, element) {
      var idProd = $(element).data("id");
      vtexjs.catalog.getProductWithVariations(idProd).done(function (product) {
        var quantProduto = product.skus[0].availablequantity;
        if (quantProduto < 6 && quantProduto > 1) {
          $(element)
            .find(".quant-produto")
            .html("Restam apenas " + quantProduto + " unidades")
            .show();
        }
        if (quantProduto == 1) {
          $(element).find(".quant-produto").html("Ãšltima Unidade").show();
        }
      });
    });
  },
  init: function () {
    codeFunctionsStore.initStore();
    codeFunctionsStore.verifyLogin();
    codeFunctionsStore.corta_titulo();
    codeFunctionsStore.setMaxInputAutoComplete();
    codeFunctionsStore.bannerDiferenciais();
    codeFunctionsStore.bannerDiferenciais2();
    codeFunctionsStore.bannerDiferenciais3();
    if ($("body").hasClass("home")) {
      codeFunctionsStore.newsletter();
      codeFunctionsStore.bannerStore();
      codeFunctionsStore.sliderProductsHome();
      codeFunctionsStore.getNameEnvironmentsImage();
    }
    if ($("body").hasClass("brand-selection")) {
      codeFunctionsStore.getTitleBannerBrands();
    }
    codeFunctionsStore.sendNewsletter();
    if ($(window).width() < 1024) {
      codeFunctionsStore.mobileNav();
      codeFunctionsStore.openSearchBox();
      codeFunctionsStore.menuFiltro();
      codeFunctionsStore.bannerStoreMobile();
      codeFunctionsStore.bannerTriplo();
      codeFunctionsStore.sliderEnvironmentsMobile();
      if ($("body").hasClass("home")) {
        codeFunctionsStore.newsletter();
      }
    }
    if ($("body").is(".resultado-busca, .categoria, .departamento, .produto")) {
      codeFunctionsStore.quantEstoqueShelf();
    }
  },
};
$(document).ready(function () {
  codeFunctionsStore.init();
});
$(document).ajaxStop(function () {
  if ($("body").is(".resultado-busca, .categoria, .departamento")) {
    $(".vitrine.prateleira ul li .product").each(function (index, element) {
      var idProd = $(element).data("id");
      vtexjs.catalog.getProductWithVariations(idProd).done(function (product) {
        var quantProduto = product.skus[0].availablequantity;
        if (quantProduto < 6 && quantProduto > 1) {
          $(element)
            .find(".quant-produto")
            .html("Restam apenas " + quantProduto + " unidades")
            .show();
        }
        if (quantProduto == 1) {
          $(element).find(".quant-produto").html("Ãšltima Unidade").show();
        }
      });
    });
  }
});
