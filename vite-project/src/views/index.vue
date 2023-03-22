<template>
    <Header/>
    <Catalog/>
</template>

<script setup>
import { onMounted } from 'vue';
import api from '@/api'
import Header from '@/components/Header.vue';
import Catalog from '@/components/Catalog.vue';

onMounted(() => {
    api.getPopularProducts();
})
</script>