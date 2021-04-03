<template>
    <Page style="background-color: azure">
        <ActionBar title="Gab's Classes"/>
        <Label text="Welcome to Gabs Classes" class='h2'/>
        <TabView androidTabsPosition='bottom'>
            <TabViewItem title="Product List" class="h2 text-capitalize">
                <ProductList @addProduct="addToCart" />
            </TabViewItem>
            <TabViewItem title="Checkout" class="h2 text-capitalize">
                <Checkout :cart='cart'/>
            </TabViewItem>
        </TabView>
    </Page>
</template>

<script>
import ProductList from './Products1.vue'
import Checkout from './checkout1'

export default {
    data() {
        return {
            cart: [],
        };
    },
    components: {
        ProductList,Checkout
    },
    methods: {
        addToCart(product) {
            const existsProduct = this.carts.find(item => item.title === product.title);

            if (!existsProduct) {
                this.cart.push(product);
                this.carts.push(product,{ title: product.title, count: 0, id: product.id });
                alert("Added to cart: " + product.title);
            }

            this.carts.forEach((item) => {
                if (item.id === product.id) {
                    item.count++;
                    product.availableInventory--;
                }
            });
        },
            canAddToCart(product) {
            return product.availableInventory > this.cartCount(product.id)
        },
            cartCount(id) {
            const count = this.carts.filter(item => item.id === id).length;
            return count;
        },
        removeFromCart(product) {
            for (let i=0; i<this.cart.length; i++) {
                if (this.cart[i] == product) this.cart.splice(i,1)
            }
        }

    },
};
</script>

<style scoped>
</style>