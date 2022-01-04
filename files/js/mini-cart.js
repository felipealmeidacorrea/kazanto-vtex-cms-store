var $ = $;
var codeFunctionsStoreMiniCart = {
  openMiniCart: function () {
    $(".btn-cart > a.js-btn-modal-cart, .cart__head a.close-tooltip").on(
      "click",
      function () {
        $(".btn-cart").toggleClass("open");
      }
    );
  },
  getQtd: function (orderForm) {
    var qtd = orderForm.items.length;
    var qtd = qtd > 0 ? qtd : 0;
    $(".btn-cart").find(".qty-cart").html(qtd);
  },
  getItens: function (options) {
    var $miniCartItens = $(".cart__body .cart__content");
    vtexjs.checkout.getOrderForm().done(function (orderForm) {
      if (orderForm.items.length > 0) {
        $miniCartItens.find(".product-small").remove();
        jQuery.each(orderForm.items, function (i, val) {
          var sku = val.id;
          var imagem = val.imageUrl;
          var preco_de = val.price;
          preco_de = preco_de / 100;
          preco_de = "R$ " + preco_de.toFixed(2).replace(".", ",");
          var preco_por = val.sellingPrice;
          preco_por = preco_por / 100;
          preco_por = "R$ " + preco_por.toFixed(2).replace(".", ",");
          var class_price = "price-of";
          if (val.price == val.sellingPrice) {
            preco_de = "";
            class_price = "price-empty";
          }
          var qtd = val.quantity;
          var nome = val.name;
          $miniCartItens.append(
            options.htmlItem
              .replace(/\{{IMAGEM}}/g, imagem)
              .replace(/\{{SKU}}/g, sku)
              .replace(/\{{NOME}}/g, nome)
              .replace(/\{{CLASS}}/g, class_price)
              .replace(/\{{PRECODE}}/g, preco_de)
              .replace(/\{{PRECOPOR}}/g, preco_por)
              .replace(/\{{QTD}}/g, qtd)
              .replace(/\{{ID}}/g, i)
          );
        });
      }
      codeFunctionsStoreMiniCart.getQtd(orderForm);
      codeFunctionsStoreMiniCart.getTotal(orderForm);
      codeFunctionsStoreMiniCart.updateQtyProd();
      codeFunctionsStoreMiniCart.removeItemsCart();
    });
  },
  getTotal: function (orderForm) {
    if (typeof orderForm.value !== "undefined" && orderForm.value.length > 0) {
      $(".cart__foot .valor-total").html("R$ 0,00");
    } else {
      var total = orderForm.value / 100;
      total = "R$ " + total.toFixed(2).replace(".", ",");
      $(".cart__foot .valor-total").html(total);
    }
  },
  removeItemsCart: function () {
    $(".product-small .btn-delete").on("click", function () {
      var sku = $(this).closest(".product-small").attr("id");
      var data_index = parseInt($(this).attr("data-index"));
      vtexjs.checkout
        .getOrderForm()
        .then(function (orderForm) {
          var itemIndex = 0;
          var item = orderForm.items[itemIndex];
          var itemsToRemove = [
            { index: codeFunctionsStoreMiniCart.getProductIndex(sku) },
          ];
          return vtexjs.checkout.removeItems(itemsToRemove);
        })
        .done(function (orderForm) {
          vtexjs.checkout.getOrderForm();
          $(".product-" + data_index).remove();
          setTimeout(function () {
            codeFunctionsStoreMiniCart.getQtd(orderForm);
            codeFunctionsStoreMiniCart.getTotal(orderForm);
          }, 3e3);
        });
    });
  },
  getProductIndex: function (sku) {
    var items = vtexjs.checkout.orderForm.items;
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      if (item.id == sku) {
        return i;
      }
    }
  },
  montarURLCart: function () {
    $(".modal--cart .cart__actions .cart__btn").live("click", function () {
      var url = "/checkout/#/cart";
      var i = 1;
      $(".cart__content .product-small").each(function () {
        if (i == 1) {
          url = "/checkout/cart/add?sc=1";
          i++;
        }
        var sku_id = $(this).attr("id");
        var qty_itens_cart = parseInt($(this).find("#spinner").val());
        url += "&sku=" + sku_id + "&qty=" + qty_itens_cart + "&seller=1";
      });
      window.location.href = url;
    });
  },
  buyProductVitrine: function () {
    $(".product__actions a.btn.btn--small:not(.mz-active)")
      .click(function (e) {
        e.preventDefault();
        var currentSKU = $(this);
        var sku_val = $(this).closest(".product").attr("data-sku");
        var urlCart =
          "/checkout/cart/add?&sku=" +
          sku_val +
          "&qty=1&seller=1&sc=1&redirect=false";
        $.ajax({
          url: urlCart,
          type: "GET",
          success: function () {
            currentSKU.find("span").html("Produto adicionado");
            vtexjs.checkout.getOrderForm();
            setTimeout(function () {
              codeFunctionsStoreMiniCart.init();
            }, 500);
          },
          error: function () {
            console.log("erro");
          },
        });
      })
      .addClass("mz-active");
  },
  updateQtyProd: function () {
    $(".quantity-spinner").on("click", "a", function (event) {
      event.preventDefault();
      var $this = $(this);
      var sku = $(this).closest(".product-small").attr("id");
      var data_index = codeFunctionsStoreMiniCart.getProductIndex(sku);
      var $qtyField = $this.closest(".quantity-spinner").find("#spinner");
      var fieldVal = parseInt($qtyField.val(), 10) || 0;
      var min = $qtyField.attr("min");
      var max = $qtyField.attr("max");
      if ($this.hasClass("btn--down")) {
        if (fieldVal != min) {
          fieldVal--;
          codeFunctionsStoreMiniCart.updateCart(data_index, fieldVal);
        }
      } else {
        if (fieldVal < max) {
          fieldVal++;
          codeFunctionsStoreMiniCart.updateCart(data_index, fieldVal);
        }
      }
      $qtyField.val(fieldVal);
    });
  },
  updateCart: function (data_index, qtd) {
    vtexjs.checkout
      .getOrderForm()
      .then(function (orderForm) {
        var itemIndex = data_index;
        var item = orderForm.items[itemIndex];
        var updateItem = { index: itemIndex, quantity: qtd };
        return vtexjs.checkout.updateItems([updateItem], null, false);
      })
      .done(function (orderForm) {
        if (
          typeof orderForm.value !== "undefined" &&
          orderForm.value.length > 0
        ) {
          $(".cart__foot .valor-total").html("R$ 0,00");
        } else {
          var total = orderForm.value / 100;
          total = "R$ " + total.toFixed(2).replace(".", ",");
          $(".cart__foot .valor-total").html(total);
        }
      });
  },
  purchaseProduct: function () {
    $(".product__actions a.btn.btn--large:not(.mz-active)")
      .click(function () {
        var linkDoProduto = $(".buy-button.buy-button-ref").attr("href");
        var currentSKU = $(this);
        if (
          linkDoProduto ==
          "javascript:alert('Por favor, selecione o modelo desejado.');"
        ) {
          alert("Por favor, selecione a cor desejada.");
        } else {
          var id_sku = linkDoProduto.split("sku=")[1].split("&")[0];
          var qty = $(".quatity__prod .list-count").find(".qty-field").val();
          setTimeout(function () {
            $("#ajaxBusy").removeAttr("style").addClass("hide");
          }, 500);
          var urlCart =
            "/checkout/cart/add?sku=" +
            id_sku +
            "&qty=" +
            qty +
            "&seller=1&sc=1&redirect=false";
          currentSKU.text("Aguarde...");
          $.ajax({
            url: urlCart,
            type: "GET",
            success: function () {
              currentSKU.html("Adicionado");
              setTimeout(function () {
                codeFunctionsStoreMiniCart.init();
              }, 500);
            },
            error: function () {
              console.log("erro");
              currentSKU.html("Comprar");
            },
          });
        }
      })
      .addClass(".mz-active");
  },
  init: function () {
    var options = jQuery.extend({
      htmlItem:
        '<div id="{{SKU}}" class="product-small product-{{ID}}">' +
        '<div class="product__image">' +
        '<img src="{{IMAGEM}}" alt="{{NOME}}"/>' +
        "</div>\x3c!-- /.product__image --\x3e" +
        '<div class="product__content">' +
        "<h5>" +
        "{{NOME}}" +
        "</h5>" +
        '<div class="product__actions">' +
        '<h3 class="product__price">' +
        '<p class="{{CLASS}}">De <span>{{PRECODE}}</span></p>' +
        "Por {{PRECOPOR}}" +
        "</h3>\x3c!-- /.product__price --\x3e" +
        '<div class="quantity-spinner quantity-spinner--small">' +
        '<a title="Adicionar" data-number="1" class="btn--up">+</a>' +
        '<input type="number/" value="{{QTD}}" id="spinner" min="1" max="9999">' +
        '<a title="Remover" data-number="-1" class="btn--down">-</a>' +
        "</div>\x3c!-- /.quantity-spinner --\x3e" +
        "</div>\x3c!-- /.product__actions --\x3e" +
        '<a href="javascript:void(0);" class="btn-delete" data-index="{{ID}}"><span class="ico-delete" style="color:#191919";>Excluir</span></a>' +
        "</div>\x3c!-- /.product__content --\x3e" +
        "</div>\x3c!-- /.product-small --\x3e",
    });
    codeFunctionsStoreMiniCart.getItens(options);
    codeFunctionsStoreMiniCart.montarURLCart();
    codeFunctionsStoreMiniCart.buyProductVitrine();
  },
};
$(document).ajaxStop(function () {
  $(".modal--cart").removeClass("complete-sku");
});
$(document).ready(function () {
  codeFunctionsStoreMiniCart.init();
  codeFunctionsStoreMiniCart.openMiniCart();
  codeFunctionsStoreMiniCart.purchaseProduct();
});