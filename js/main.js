Vue.component('product', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }

    },
    template: `
        <div>
            <div class='productImage'>
                <img v-bind:src="productImg " width="300px " height="300px " alt=" ">
            </div>
            <div class='productInfo'>
            <h1>{{ hello }}</h1>
            <a :href="href">This is an anchorHref</a>
            <p v-if="inventory>10">In Stock</p>
            <p v-else-if="inventory<=10 && inventory>0">Almost sold out!</p>
            <p :style=" lineOver " v-else>Out of Stock {{lineOver}}</p>
            <span v-show='OnSale'>On Sale!</span>
            <span v-show='!OnSale'>Out of stock!</span>
            <span v-show='brandSale'>{{ CanSale }}</span>
            <ul>
                <li v-for="detail in details ">{{ detail }}</li>
            </ul>
            <p> Shipping: {{ shipping }}</p>
            <div v-for="(variant, index) in variants " class="color-box " :style="{ backgroundColor : variant.variantcolor } " @mouseover="ChangeImage(index) ">
            

            </div>
            <ul>
                <li v-for="size in sizes ">{{ size }}</li>
            </ul>

            <button v-on:click="KorzinkagaQosh" :disabled="!OnSale ">Korzinkaga qoshish</button>
            <button v-on:click="removefromkorzinka" :disabled="!OnSale ">Korzinkadan olib tashlash!</button>


            </div>

            


    </div>

    `,
    data() {
        return {
            message: "Hello ",
            brand: "Umid",
            productName: "Sorry",
            selectedVariant: 0,
            href: "#",
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
            lineOver: { color: "red", textDecoration: "line-through" },
            brandSale: true
        }
    },
    methods: {
        KorzinkagaQosh() {
            this.$emit('Korzinkaga-qoshish')
        },
        ChangeImage(index) {
            this.selectedVariant = index;
            console.log(index);
        },
        removefromkorzinka() {
            if (this.korzinka > 0) { this.korzinka -= 1; }
        }
    },
    computed: {
        hello() {
            return this.productName + "  " + this.brand + "!!!";
        },
        productImg() {
            return this.variants[this.selectedVariant].variantImage;
        },
        OnSale() {
            return this.variants[this.selectedVariant].variantsQuontity;
        },
        CanSale() {
            return "This " + this.productName + " is made by " + this.brand;
        },
        shipping() {
            if (this.premium) { return "free" }
            return "2.99"
        }
    }
})



var app = new Vue({
    el: '#app',
    data: {
        premium: true,
        detail: 'Silk',
        korzinka: 0
    },
    methods: {
        updateKorzinka() {
            this.korzinka += 1;
            console.log(this.korzinka)
        }
    }
})