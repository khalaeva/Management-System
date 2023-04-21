<template>
    <p>{{ txt() }}</p>
    <p>Продаж: {{ orders }}</p>
    <p>Руб: {{ sum }}</p>
    <p>По сравнению с воскресеньем: 0</p>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'v-analysis-by-time',
    props: {
        time: String
    },
    data() {
        return {
            orders: 0, 
            sum: 0
        }
    },
    computed: {
        ...mapGetters([
            'ORDERS'
        ])
    },
    methods: {
        txt() {
            if (this.time === 'week') {
                
                return 'На этой неделе'
            }
            else if (this.time === 'month') {
                console.log (this.counterOrders(new Date().getMonth() + 1))
                return 'В этом месяце'
            }
            else return 'В этом году'
        },
        counterOrders(todayDate) {
            const counter = this.ORDERS.reduce((count, order) => {
            if (order.data.month === todayDate) {
                count++;
            }
            return count;
            }, 0);
            return counter
        },
        // summSell(todayDate) {
        //     const summ = this.ORDERS.reduce((summ, order) => {
        //     if (order.data.day === todayDate) {
        //         summ += order.totalSum;
        //     }
        //     return summ;
        //     }, 0);
        //     return summ
        // }
    }
}
</script>

<style lang="scss" scoped>

</style>