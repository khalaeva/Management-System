<template>
    <div class="product"> 
        <img class="product__image" src="/img/1.jpeg">
        <div class="product-about">
            <p>Name of product</p>
            <p>About product sdfsflsdfkal sdflsdhf sdjfh dflskdjf clvh</p>
        </div>
        <div class="product-status">
            <p>In stock</p>
        </div>
        <div class="product-price">
            <p>1000 $</p>
            <button type="button" class="btn btn-primary">В корзину</button>
        </div>
    </div>
    <div class="product"> 
        <img class="product__image" src="/img/2.jpeg">
    </div>
    <div class="product"> 
        <img class="product__image" src="/img/3.jpeg">
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
    .product { 
        display: flex; 
        margin-bottom: 15px;
        height: 250px; 
        &-about {
            padding: 20px;
            width: 600px;
        }
        &-status {
            padding: 20px;
        }
        &-price {
            padding: 20px;
        }
        &__image {
            margin-left: 50px;
            width: auto;
            height: 230px;
            vertical-align: middle;
        }
    } 
</style>