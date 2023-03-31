<template>
    <!--<router-link :to="`product${prod.id}`" class="product-link" v-for="prod in products"> -->
         <span class="product" v-for="prod in products"> 
            <img class="product__image" :src="prod.image">
            <div class="product-about">
                <p>{{ prod.name }}</p>
                <p>{{ prod.description }}</p>
            </div>
            <div class="product-status">
                <p>{{ prod.status }} </p>
            </div>
            <div class="product-price">
                <p>{{ prod.price }} $</p>
                <button type="button" class="btn btn-primary" @click="AddToCart()">В корзину</button>
            </div>
        </span>
    <!-- </router-link> -->
    
</template>

<script setup>
const props = defineProps({
    products: {
        required: true
    }
});

function AddToCart(){
    this.$emit('create', this.products)
}
</script>

<style lang="scss" scoped>
    .product-link {
        text-decoration: none;
        color: black;
    }
    .product { 
        margin: 0 100px 10px 100px;
        display: flex; 
        height: 250px; 
        &-about {
            padding: 20px;
            width: 70%;
        }
        &-status {
            width: 20%;
            padding: 20px;
        }
        &-price {
            width: 10%;
            padding: 20px;
        }
        &__image {
            width: 180px;
            height: 230px;
            vertical-align: middle;
        }
    } 
    .product:hover {
        background: rgba(0,0,0,.05);
    }

</style>