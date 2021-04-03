<template>
    <StackLayout>
        <Label class="h2 p-10" textWrap="true" :text="sitename" />
        <ListView for='product in products' @itemTap='onItemTap' > 
            <v-template>
                <StackLayout>
                    <Label :text='product.title' />
                    <Label :text="`description: ${product.description}`" />
                    <Label :text="`price: £${product.price}`" />
                    <Label :text="`inventory: ${product.availableInventory}`" />
                </StackLayout>
            </v-template>
        </ListView>
    </StackLayout>
</template>

<script>
const baseUri = 'https://mevncw2.herokuapp.com';
const services = {
    getLessons: (cb) => {
        const options = {
            method: 'GET',
            headers: new Headers(),
            mode: 'cors',
            cache: 'default'
        };
        
        fetch(`${baseUri}/api/lessons`, options)
            .then((response) => response.json())
            .then((data) => cb(data));
    },

    postOrder: (payload, cb) => {
        const options = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        };

        fetch(`${baseUri}/api/orders`, options)
            .then((data) => cb(data));
    },

    putLesson: (payload, cb) => {
        const options = {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        };

        fetch(`${baseUri}/api/lessons/${payload.id}`, options)
            .then((data) => cb(data));
    },

    removeOrder: (payload, cb) => {
        const options = {
            method: 'DELETE',
            headers: new Headers(),
            mode: 'cors',
            cache: 'default',
        };

        fetch(`${baseUri}/api/orders/${payload.id}`, options)
            .then((data) => cb(data));
    }
}


export default {
    props: ["cart"],
    data: {
        showProduct: true,
           products: [],
            errors: [],
            checkouted: false,
            loading: false,
            checkouting: false,
            order: {},
            sitename: "Classes & Activities",
            carts: []
    },
        mounted() {
        this.loadProducts();
        },
        methods: {
            onItemTap(event) {
                this.$emit('addProduct',event.item);
                alert(event.item.title + ` has been added to the cart.`)
        },

        loadProducts() {
            this.loading = true;
            services.getLessons((data) => {
            this.products = data;
            this.loading = false;
            });
        },

        addToCart(product) {
            const existsProduct = this.carts.find(item => item.title === product.title);

            if (!existsProduct) {
                this.carts.push(product,{ title: product.title, count: 0, id: product.id });
            }

            this.carts.forEach((item) => {
                if (item.id === product.id) {
                    item.count++;
                    product.availableInventory--;
                }
            });
        },

        showCheckout() {
            this.showProduct = !this.showProduct;

            if (!!this.showProduct) {
                this.loadProducts();
            }
        },
    }
};
</script>