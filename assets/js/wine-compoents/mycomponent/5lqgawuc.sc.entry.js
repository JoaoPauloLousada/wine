const s=window.mycomponent.h;class a{render(){return s("div",null,s("div",{class:"row"},s("header",{class:"header-featured-products"},s("ul",null,s("li",{class:"featured-options--active"},s("a",{href:"#"},"Em destaque")),s("li",{class:"featured-options"},s("a",{href:"#"},"Lançamentos")),s("li",{class:"featured-options"},s("a",{href:"#"},"Mais Vendidos")),s("li",{class:"featured-options"},s("a",{href:"#"},"Mais Buscados")),s("li",{class:"featured-options"},s("a",{href:"#"},"Pontuados"))))),s("div",{class:"row products"},s("div",{class:"single-product"},s("img",{src:"./assets/images/first-featured/img-1.png",alt:""}),s("h2",{class:"product__title"},"Nederburg 56 Hundred Chenin Blanc 2017"),s("div",{class:"product-info"},s("div",{class:"product__country"},s("img",{src:"assets/images/countries/áfrica_do sul.svg",alt:""}),s("span",null,"África Do Sul")),s("div",{class:"product__type"},s("span",{class:"product__color product__color--branco"}),s("span",null,"Branco"))),s("div",{class:"product-actions"},s("div",{class:"price"},s("div",{class:"price__normal"},"R$ 40,00"),s("div",{class:"price__sale"},"R$ 33,00")),s("button",{class:"btn btn-primary"},"Adicionar"))),s("div",{class:"single-product"},s("img",{src:"./assets/images/first-featured/img-2.png",alt:""}),s("h2",{class:"product__title"},"5 Oros Vendimia Seleccionada D.O.Ca. Rioja 2016"),s("div",{class:"product-info"},s("div",{class:"product__country"},s("img",{src:"assets/images/countries/espanha.svg",alt:""}),s("span",null,"Espanha")),s("div",{class:"product__type"},s("span",{class:"product__color product__color--tinto"}),s("span",null,"Tinto"))),s("div",{class:"product-actions"},s("div",{class:"price"},s("div",{class:"price__normal"},"$ 109,00"),s("div",{class:"price__sale"},"R$ 84,90")),s("button",{class:"btn btn-primary"},"Adicionar"))),s("div",{class:"single-product"},s("img",{src:"./assets/images/first-featured/img-3.png",alt:""}),s("h2",{class:"product__title"},"Espumante Château Beausoleil Reserve A.O.C. Crémant ..."),s("div",{class:"product-info"},s("div",{class:"product__country"},s("img",{src:"assets/images/countries/franca.svg",alt:""}),s("span",null,"França")),s("div",{class:"product__type"},s("span",{class:"product__color product__color--espumante"}),s("span",null,"Espumante"))),s("div",{class:"product-actions"},s("div",{class:"price"},s("div",{class:"price__normal"},"$ 65,00"),s("div",{class:"price__sale"},"R$ 51,94")),s("button",{class:"btn btn-primary"},"Adicionar"))),s("div",{class:"single-product"},s("img",{src:"./assets/images/first-featured/img-4.png",alt:""}),s("h2",{class:"product__title"},"Dancing Bull Califórnia Zinfandel 2015"),s("div",{class:"product-info"},s("div",{class:"product__country"},s("img",{src:"assets/images/countries/estados_unidos.svg",alt:""}),s("span",null,"Estados Unidos")),s("div",{class:"product__type"},s("span",{class:"product__color product__color--tinto"}),s("span",null,"Tinto"))),s("div",{class:"product-actions"},s("div",{class:"price"},s("div",{class:"price__normal"},"R$ 108,00"),s("div",{class:"price__sale"},"R$ 91,90")),s("button",{class:"btn btn-primary"},"Adicionar")))))}static get is(){return"wine-featured-products"}static get encapsulation(){return"shadow"}static get properties(){return{first:{type:String,attr:"first"},last:{type:String,attr:"last"},middle:{type:String,attr:"middle"}}}static get style(){return"a.sc-wine-featured-products{text-decoration:none;color:unset}div.sc-wine-featured-products{-webkit-box-sizing:border-box;box-sizing:border-box}.row.sc-wine-featured-products{width:100%;max-width:1200px;margin:0 auto}.header-featured-products.sc-wine-featured-products{height:40px;margin-top:40px}.header-featured-products.sc-wine-featured-products   ul.sc-wine-featured-products{border-bottom:1px solid #e5e5e5;display:-ms-flexbox;display:flex;height:100%;margin:0}.header-featured-products.sc-wine-featured-products   ul.sc-wine-featured-products   li.sc-wine-featured-products{list-style:none;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;padding:0 30px;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;color:#333;font-size:17px}.header-featured-products.sc-wine-featured-products   ul.sc-wine-featured-products   li.sc-wine-featured-products   a.sc-wine-featured-products{display:block;height:100%;font-family:Arial,Helvetica,sans-serif}.header-featured-products.sc-wine-featured-products   .featured-options.sc-wine-featured-products:hover{color:#e43fa0;border-bottom:2px solid #e43fa0}.header-featured-products.sc-wine-featured-products   .featured-options--active.sc-wine-featured-products{color:#a82372;border-bottom:4px solid #a82372}.products.sc-wine-featured-products{-ms-flex-pack:justify;justify-content:space-between;-ms-flex-positive:1;flex-grow:1;height:calc(100% - 80px);padding:20px 0}.products.sc-wine-featured-products, .single-product.sc-wine-featured-products{display:-ms-flexbox;display:flex;min-height:390px}.single-product.sc-wine-featured-products{max-width:300px;width:100%;height:100%;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-align:center;align-items:center;margin:0 15px;cursor:pointer}.single-product.sc-wine-featured-products   .product__title.sc-wine-featured-products{font-size:16px}.single-product.sc-wine-featured-products   img.sc-wine-featured-products{max-height:220px}.single-product.sc-wine-featured-products   .product-actions.sc-wine-featured-products{background-color:#e5e5e5;width:100%;height:65px;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;padding:0 10px;border-bottom-left-radius:5px;border-bottom-right-radius:5px}.product-info.sc-wine-featured-products{width:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start;color:#888;margin-bottom:10px;text-transform:uppercase;font-size:10px}.product-info.sc-wine-featured-products   .product__country.sc-wine-featured-products{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin-right:25%}.product-info.sc-wine-featured-products   .product__country.sc-wine-featured-products   img.sc-wine-featured-products{width:16px;margin-right:10px;margin-left:5px}.product-info.sc-wine-featured-products   .product__type.sc-wine-featured-products{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.product-info.sc-wine-featured-products   .product__type.sc-wine-featured-products   .product__color.sc-wine-featured-products{width:16px;height:16px;border-radius:8px;margin-right:10px}.product-info.sc-wine-featured-products   .product__type.sc-wine-featured-products   .product__color--branco.sc-wine-featured-products{background-color:#e0d291}.product-info.sc-wine-featured-products   .product__type.sc-wine-featured-products   .product__color--tinto.sc-wine-featured-products{background-color:#75194f}.product-info.sc-wine-featured-products   .product__type.sc-wine-featured-products   .product__color--espumante.sc-wine-featured-products{background-color:transparent}.price.sc-wine-featured-products{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.price.sc-wine-featured-products   .price__normal.sc-wine-featured-products{text-decoration:line-through;color:#746566;font-size:14px}.price--big.sc-wine-featured-products   .price__normal.sc-wine-featured-products, .price.sc-wine-featured-products   .price__sale.sc-wine-featured-products{font-size:20px}.price--big.sc-wine-featured-products   .price__sale.sc-wine-featured-products{font-size:40px}.btn.sc-wine-featured-products, .price--big.sc-wine-featured-products   .price__sale.sc-wine-featured-products   small.sc-wine-featured-products{font-size:14px}.btn.sc-wine-featured-products{border-radius:5px;text-transform:uppercase;padding:10px 20px;border:none}.btn--large.sc-wine-featured-products{padding-right:40px;padding-left:40px}.btn-primary.sc-wine-featured-products{background-color:#7fbb44;color:#fff;cursor:pointer}.btn-primary.sc-wine-featured-products:hover{background-color:#5d8932}"}}export{a as WineFeaturedProducts};