var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello World!',
        productName: 'Sock',
        productImg: 'https://smartshopper.ru/img/aHR0cHM6Ly9jZG4xLm96b25lLnJ1L211bHRpbWVkaWEvMTAzNjY5MjA3MC5qcGc=.jpg',
        href: '#',
        inventory: 7,
        OnSale: true,
        details: ["10", "20", "30"],
        variants: [{
                variantid: 200,
                variantcolor: "blue",
                variantImage: "https://smartshopper.ru/img/aHR0cHM6Ly9jZG4xLm96b25lLnJ1L211bHRpbWVkaWEvMTAzNjY5MjA3MC5qcGc=.jpg"
            },
            {
                variantid: 201,
                variantcolor: "green",
                variantImage: "https://im0-tub-ru.yandex.net/i?id=8600b744ea1011623972727c1256362c&n=33&w=283&h=188"
            }
        ],
        sizes: ["37", "38", "40"],
        korzinka: 5
    },
    methods: {
        KorzinkagaQosh() {
            this.korzinka += 1
        },
        ChangeImage(variantImage) {
            this.productImg = variantImage
        },
        removefromkorzinka() {
            if (this.korzinka > 0) { this.korzinka -= 1; }
        }
    }
})