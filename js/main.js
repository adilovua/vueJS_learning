var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello ',
        toWhom: 'Umid',
        productName: 'Sock',
        selectedVariant: 0,
        href: '#',
        inventory: 0,
        details: ["10", "20", "30"],
        variants: [{
                variantid: 200,
                variantcolor: "blue",
                variantImage: "https://smartshopper.ru/img/aHR0cHM6Ly9jZG4xLm96b25lLnJ1L211bHRpbWVkaWEvMTAzNjY5MjA3MC5qcGc=.jpg",
                variantsQuontity: 10
            },
            {
                variantid: 201,
                variantcolor: "green",
                variantImage: "https://im0-tub-ru.yandex.net/i?id=8600b744ea1011623972727c1256362c&n=33&w=283&h=188",
                variantsQuontity: 0
            }
        ],
        sizes: ["37", "38", "40"],
        korzinka: 5,
        lineOver: { color: 'red', textDecoration: 'line-through' }
    },
    methods: {
        KorzinkagaQosh() {
            this.korzinka += 1
        },
        ChangeImage(index) {
            this.selectedVariant = index;
            console.log(index)
        },
        removefromkorzinka() {
            if (this.korzinka > 0) { this.korzinka -= 1; }
        }
    },
    computed: {
        hello() {
            return this.message + '  ' + this.toWhom + '!!!';
        },
        productImg() {
            return this.variants[this.selectedVariant].variantImage;
        },
        OnSale() {
            return this.variants[this.selectedVariant].variantsQuontity;
        }
    }
})