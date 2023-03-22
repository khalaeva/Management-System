<template>
    <router-link to="/prod1" class="product-link">
        <span class="product"> 
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
        </span>
    </router-link>
    <router-link to="/prod2" class="product-link">
        <span class="product"> 
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
        </span>
    </router-link>
    <router-link to="/prod3" class="product-link">
        <span class="product"> 
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
        </span>
    </router-link>
</template>

<script setup>

</script>

<style lang="scss" scoped>
    .product-link {
        text-decoration: none;
        color: black;
    }
    .product { 
        display: flex; 
        margin-bottom: 10px;
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
            width: 180px;
            height: 230px;
            vertical-align: middle;
        }
    } 
    .product:hover {
        background: rgba(0,0,0,.05);
    }

</style>