<template>
    <StackLayout>
        <Label class="h2 text-center" text="Shopping Cart"/>
        <Label class="h2 text-center" text="(Tap a product to remove it)" />
        <ListView for="product in cart" @itemTap="onItemTap">
            <v-template>
                <StackLayout>
                    <Label :text="product.title" />
                    <Label :text="`price: ${product.price}`" />
                </StackLayout>
            </v-template>
        </ListView>
        <TextField hint="name" v-model="name" />
        <TextField hint="Address" v-model="address" />
        <Button @tap="submitOrder" text="Submit Order" />
    </StackLayout>
</template>

<script>
export default {
    props: ["cart"],
    data() {
        return {};
    },
    methods: {
        checkForm() {
            this.errors = [];

            if (this.order.firstName && this.order.phoneNumber) 
                return;

            if (!this.order.firstName) {
                this.errors.push('Please enter your first name.');
            }
            if (!this.order.phoneNumber) {
                this.errors.push('Please enter your phone number name');
            }
        },

        removeOrder(order) {
            services.removeOrder(order, (data) => {
                console.log(data);
            });
        },
        onItemTap(event) {
            this.$emit("removeProduct", event.item);
        },
        submitOrder() {
            alert ("An order is placed by " + this.name + " at " + this.address )
        }
    },
        resetOrder() {
        this.carts = [];
        this.order.firstName = null;
        this.order.phoneNumber = null;
        },

    submitForm(e) {
            e.preventDefault();

            this.checkForm();

            if (this.errors.length > 0) 
                return;

            const payload = {
                customer: {
                firstName: this.order.firstName,
                phoneNumber: this.order.address,
                },
                lessons: [
                    ...this.carts
                ]
            };

            this.checkouting = true;

            services.postOrder(payload, () => {
                this.carts.forEach((cart) => {
                    const payloadLesson = {
                        id: cart.id,
                        total: cart.count
                    };

                    services.putLesson(payloadLesson, () => {
                        this.checkouted = true;
                        this.checkouting = false;
                    });
                });
            });
        },
};
</script>