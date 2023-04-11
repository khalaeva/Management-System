<template>
    <vLayoutHeader/>
    <RouterView/>
</template>

<script>
import vLayoutHeader from './layouts/v-layout-header.vue';
import { mapActions } from 'vuex';

export default {
    name: 'v-app',
    components: {vLayoutHeader},
    methods: {
        ...mapActions([
            'GET_STORAGES_FROM_API'
        ])
    },
    beforeUpdate() {
        this.GET_STORAGES_FROM_API()
    },
    mounted() {
        this.GET_STORAGES_FROM_API()
    }
}
</script>