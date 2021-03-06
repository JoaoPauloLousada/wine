export class MyComponent {
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
    static get style() { return "/**style-placeholder:wine-featured-products:**/"; }
}
