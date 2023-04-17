<template>
    <div class="v-layout-header">
        <div class="v-layout-header-left">
            <RouterLink :to="{name: 'analysis'}" class="link-secondary"><h5>Показатели</h5></RouterLink>
            <RouterLink :to="{name: 'products'}" class="link-secondary"><h5>Товары</h5></RouterLink>
            <RouterLink :to="{name: 'storages'}" class="link-secondary"><h5>Склады</h5></RouterLink>
            <RouterLink :to="{name: 'till'}" class="link-secondary"><h5>Продажи</h5></RouterLink>
            <RouterLink :to="{name: 'buyers'}" class="link-secondary"><h5>Покупатели</h5></RouterLink>
        </div>
        <div class="v-layout-header-right">
            <p>Настройки</p>
            <p>Личный кабинет</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'vLayoutHeader',
}
</script>

<style lang="scss" scoped>
.v-layout-header {
    display: flex;
    height: 100px;
    justify-content: space-around;
    align-items: center;
    background-color: lightgray;
    margin-bottom: 30px;
    &-left {
        width: 50%;
        display: flex;
        justify-content: space-around;
    }
    &-right {
        width: 30%;
        display: flex;
        justify-content: space-around;
    }
}
</style>