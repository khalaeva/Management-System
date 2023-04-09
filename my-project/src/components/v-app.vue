<template>
    <vLayoutHeader/>
    <RouterView/>
</template>

<script>
import vLayoutHeader from './layouts/v-layout-header.vue';

export default {
    name: 'v-app',
    components: {vLayoutHeader}
}
</script>