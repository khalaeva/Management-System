<template>
    <Header/>
    <br>
    <Catalog :products="products"/>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import api from '@/api';

import Header from '@/components/Header.vue';
import Catalog from '@/components/Catalog.vue';

const products = ref([])

onMounted(async () => {
    products.value = await api.getProducts();
})
</script>