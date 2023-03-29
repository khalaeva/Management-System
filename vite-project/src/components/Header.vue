<template>
    <header class="header">
        <div class="header-top">
            <div class="header-top-menu">
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="/svg/menu.svg" alt="menu">
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><router-link to="/phones" class="dropdown-item">Phones</router-link></li>
                      <li><router-link to="/acces" class="dropdown-item">Accessories</router-link></li>
                      <li><router-link to="/audio" class="dropdown-item">Audio</router-link></li>
                    </ul>
                </div>
            </div>
            <router-link to="/" class="header-logo">Online Shop</router-link>
            <div class="header-top-right">
                    <router-link to="/cart" class="header-top-right__cart">
                        <img src="/svg/cart.svg" alt="cart">
                        <p class="header-top-right__cart_count">(0)</p>
                    </router-link>
                <div class="header-top-right__profile">
                    <router-link to="/auth">
                        <img src="/svg/user.svg" alt="user">
                    </router-link>
                </div>
            </div>
        </div>
    </header>

    
</template>

<script setup>

</script>

<style lang="scss">
.header img {
    height: 40px;
    width: 40px;
}
.header {
    height: 132px;
    background: #fff;
    &-top {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        height: 70px;
        align-items: center;
        border-bottom: 1px solid rgba(0, 0, 0, 1);
        margin: 0 28px;
        &-right {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            &__cart {
                text-decoration: none;
                display: flex;
                margin-right: 16px;
                &_count{
                    font-size: 20px;
                    color: black;
                    font-family: var(--clash);
                    margin: auto;
                }
            }
        }
    }
    &-logo{
        color: black;
        font-size: 24px;
        text-decoration: none;
        font-family: var(--clash);
        text-align: center;
        &:hover {
            text-decoration: underline;
            color: black;
        }
    }
    &-menu {
        height: 62px;
        display: flex;
        justify-content: center;
        align-items: center;
        &__link {
            margin: 0 22px;
            color: #726E8D;
            text-decoration: none;
            &:hover {
                text-decoration: underline;
            }
        }
    }
}
</style>