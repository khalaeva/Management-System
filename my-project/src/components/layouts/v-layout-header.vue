<template>
    <div class="v-layout-header">
        <div class="v-layout-header-left">
            <RouterLink to="analysis" class="link-secondary"><h5>Анализ</h5></RouterLink>
            <RouterLink to="products" class="link-secondary"><h5>Товары</h5></RouterLink>
            <RouterLink to="storages" class="link-secondary"><h5>Склады</h5></RouterLink>
            <RouterLink to="till" class="link-secondary"><h5>Касса</h5></RouterLink>
        </div>
        <div class="v-layout-header-right">
            <p>Настройки</p>
            <p>Личный кабинет</p>
            <!-- <p>{{ LOGIN[0].name }}</p> -->
        </div>
    </div>
</template>

<script>
//import {  mapActions, mapGetters  } from 'vuex'

export default {
    name: 'vLayoutHeader',
    // computed: {
    //     ...mapGetters([
    //         'LOGIN'
    //     ])
    // },
    // methods: {
    //     ...mapActions([
    //             'GET_LOGIN_FROM_API'
    //         ])
    // },
    // mounted() {
    //     this.GET_LOGIN_FROM_API();
    // }
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