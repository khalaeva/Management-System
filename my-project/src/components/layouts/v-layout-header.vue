<template>
    <div class="v-layout-header">
        <div class="v-layout-header-left">
            <p>Анализ</p>
            <p>Товары</p>
            <p>Склады</p>
            <p>Касса</p>
        </div>
        <div class="v-layout-header-right">
            <p>Настройки</p>
            <p>Вход</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'vLayoutHeader'
}
</script>

<style lang="scss" scoped>
.v-layout-header {
    display: flex;
    height: 100px;
    justify-content: space-around;
    align-items: center;
    background-color: antiquewhite;
    &-left {
        width: 50%;
        display: flex;
        justify-content: space-around;
    }
    &-right {
        width: 20%;
        display: flex;
        justify-content: space-around;
    }
}
</style>