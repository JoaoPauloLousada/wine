import { h } from '../mycomponent.core.js';

class MyComponent {
    render() {
        return (h("div", null,
            h("div", { class: "row" },
                h("header", { class: "header-featured-products" },
                    h("ul", null,
                        h("li", { class: "featured-options--active" },
                            h("a", { href: "#" }, "Em destaque")),
                        h("li", { class: "featured-options" },
                            h("a", { href: "#" }, "Lan\u00E7amentos")),
                        h("li", { class: "featured-options" },
                            h("a", { href: "#" }, "Mais Vendidos")),
                        h("li", { class: "featured-options" },
                            h("a", { href: "#" }, "Mais Buscados")),
                        h("li", { class: "featured-options" },
                            h("a", { href: "#" }, "Pontuados"))))),
            h("div", { class: "row products" },
                h("div", { class: "single-product" },
                    h("img", { src: "./assets/images/first-featured/img-1.png", alt: "" }),
                    h("h2", { class: "product__title" }, "Nederburg 56 Hundred Chenin Blanc 2017"),
                    h("div", { class: "product-info" },
                        h("div", { class: "product__country" },
                            h("img", { src: "assets/images/countries/\u00E1frica_do sul.svg", alt: "" }),
                            h("span", null, "\u00C1frica Do Sul")),
                        h("div", { class: "product__type" },
                            h("span", { class: "product__color product__color--branco" }),
                            h("span", null, "Branco"))),
                    h("div", { class: "product-actions" },
                        h("div", { class: "price" },
                            h("div", { class: "price__normal" }, "R$ 40,00"),
                            h("div", { class: "price__sale" }, "R$ 33,00")),
                        h("button", { class: "btn btn-primary" }, "Adicionar"))),
                h("div", { class: "single-product" },
                    h("img", { src: "./assets/images/first-featured/img-2.png", alt: "" }),
                    h("h2", { class: "product__title" }, "5 Oros Vendimia Seleccionada D.O.Ca. Rioja 2016"),
                    h("div", { class: "product-info" },
                        h("div", { class: "product__country" },
                            h("img", { src: "assets/images/countries/espanha.svg", alt: "" }),
                            h("span", null, "Espanha")),
                        h("div", { class: "product__type" },
                            h("span", { class: "product__color product__color--tinto" }),
                            h("span", null, "Tinto"))),
                    h("div", { class: "product-actions" },
                        h("div", { class: "price" },
                            h("div", { class: "price__normal" }, "$ 109,00"),
                            h("div", { class: "price__sale" }, "R$ 84,90")),
                        h("button", { class: "btn btn-primary" }, "Adicionar"))),
                h("div", { class: "single-product" },
                    h("img", { src: "./assets/images/first-featured/img-3.png", alt: "" }),
                    h("h2", { class: "product__title" }, "Espumante Ch\u00E2teau Beausoleil Reserve A.O.C. Cr\u00E9mant ..."),
                    h("div", { class: "product-info" },
                        h("div", { class: "product__country" },
                            h("img", { src: "assets/images/countries/franca.svg", alt: "" }),
                            h("span", null, "Fran\u00E7a")),
                        h("div", { class: "product__type" },
                            h("span", { class: "product__color product__color--espumante" }),
                            h("span", null, "Espumante"))),
                    h("div", { class: "product-actions" },
                        h("div", { class: "price" },
                            h("div", { class: "price__normal" }, "$ 65,00"),
                            h("div", { class: "price__sale" }, "R$ 51,94")),
                        h("button", { class: "btn btn-primary" }, "Adicionar"))),
                h("div", { class: "single-product" },
                    h("img", { src: "./assets/images/first-featured/img-4.png", alt: "" }),
                    h("h2", { class: "product__title" }, "Dancing Bull Calif\u00F3rnia Zinfandel 2015"),
                    h("div", { class: "product-info" },
                        h("div", { class: "product__country" },
                            h("img", { src: "assets/images/countries/estados_unidos.svg", alt: "" }),
                            h("span", null, "Estados Unidos")),
                        h("div", { class: "product__type" },
                            h("span", { class: "product__color product__color--tinto" }),
                            h("span", null, "Tinto"))),
                    h("div", { class: "product-actions" },
                        h("div", { class: "price" },
                            h("div", { class: "price__normal" }, "R$ 108,00"),
                            h("div", { class: "price__sale" }, "R$ 91,90")),
                        h("button", { class: "btn btn-primary" }, "Adicionar"))))));
    }
    static get is() { return "wine-featured-products"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "first": {
            "type": String,
            "attr": "first"
        },
        "last": {
            "type": String,
            "attr": "last"
        },
        "middle": {
            "type": String,
            "attr": "middle"
        }
    }; }
    static get style() { return "a{text-decoration:none;color:unset}div{-webkit-box-sizing:border-box;box-sizing:border-box}.row{width:100%;max-width:1200px;margin:0 auto}.header-featured-products{height:40px;margin-top:40px}.header-featured-products ul{border-bottom:1px solid #e5e5e5;display:-ms-flexbox;display:flex;height:100%;margin:0}.header-featured-products ul li{list-style:none;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;padding:0 30px;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;color:#333;font-size:17px}.header-featured-products ul li a{display:block;height:100%;font-family:Arial,Helvetica,sans-serif}.header-featured-products .featured-options:hover{color:#e43fa0;border-bottom:2px solid #e43fa0}.header-featured-products .featured-options--active{color:#a82372;border-bottom:4px solid #a82372}.products{-ms-flex-pack:justify;justify-content:space-between;-ms-flex-positive:1;flex-grow:1;height:calc(100% - 80px);padding:20px 0}.products,.single-product{display:-ms-flexbox;display:flex;min-height:390px}.single-product{max-width:300px;width:100%;height:100%;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-align:center;align-items:center;margin:0 15px;cursor:pointer}.single-product .product__title{font-size:16px}.single-product img{max-height:220px}.single-product .product-actions{background-color:#e5e5e5;width:100%;height:65px;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;padding:0 10px;border-bottom-left-radius:5px;border-bottom-right-radius:5px}.product-info{width:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start;color:#888;margin-bottom:10px;text-transform:uppercase;font-size:10px}.product-info .product__country{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin-right:25%}.product-info .product__country img{width:16px;margin-right:10px;margin-left:5px}.product-info .product__type{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.product-info .product__type .product__color{width:16px;height:16px;border-radius:8px;margin-right:10px}.product-info .product__type .product__color--branco{background-color:#e0d291}.product-info .product__type .product__color--tinto{background-color:#75194f}.product-info .product__type .product__color--espumante{background-color:transparent}.price{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.price .price__normal{text-decoration:line-through;color:#746566;font-size:14px}.price--big .price__normal,.price .price__sale{font-size:20px}.price--big .price__sale{font-size:40px}.btn,.price--big .price__sale small{font-size:14px}.btn{border-radius:5px;text-transform:uppercase;padding:10px 20px;border:none}.btn--large{padding-right:40px;padding-left:40px}.btn-primary{background-color:#7fbb44;color:#fff;cursor:pointer}.btn-primary:hover{background-color:#5d8932}"; }
}

export { MyComponent as WineFeaturedProducts };
