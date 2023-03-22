<template>
    <header class="header">
        <div class="header-top">
            <div class="header-top-menu">
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="/svg/menu.svg" alt="menu">
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><a class="dropdown-item" href="#">Действие</a></li>
                      <li><a class="dropdown-item" href="#">Другое действие</a></li>
                      <li><a class="dropdown-item" href="#">Что-то еще здесь</a></li>
                    </ul>
                </div>
            </div>
            <a href="#" class="header-logo">Online Shop</a>
            <div class="header-top-right">
                <div class="header-top-right__cart">
                    <a href="#">
                        <img src="/svg/cart.svg" alt="cart">
                    </a>
                </div>
                <div class="header-top-right__profile">
                    <a href="#">
                        <img src="/svg/user.svg" alt="user">
                    </a>
                </div>
            </div>
        </div>
        <div class="header-menu">
            <router-link 
                class="header-menu__link"
                :to="element.path" 
                v-for="(element, i) of menu"
                :key="i">{{ element.name }}</router-link>
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
                margin-right: 16px;
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