<template>
<h2>{{ storeName }}</h2>
<table class="table" style="margin-bottom: 100px">
    <thead>
      <tr>
        <th scope="col">№</th>
        <th scope="col">Время</th>
        <th scope="col">Покупатель</th>
        <th scope="col">Сумма</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="order in ORDERS" :key="order.id">
        <th v-if="order.storageName === storeName" scope="row">{{ order.id }}</th>
        <td v-if="order.storageName === storeName">{{ order.data.day }}/{{ order.data.month }}/{{ order.data.year }}</td>
        <td v-if="order.storageName === storeName">{{ order.buyer.name }} {{ order.buyer.lastName }}</td>
        <td v-if="order.storageName === storeName">{{ order.totalSum }} </td>
      </tr>
    </tbody>
</table>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'v-till-tables',
    props: {
        storeName: String
    },
    data() {
        return {}
    },
    methods: {
        ...mapActions([
            'GET_ORDERS_FROM_API'
        ])
    },
    computed: {
        ...mapGetters([
            'ORDERS'
        ])
    },
    mounted() {
        this.GET_ORDERS_FROM_API()
    }
}
</script>

<style lang="scss" scoped>

</style>