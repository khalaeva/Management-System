<template>
    <p>{{ txt() }}</p>
    <p>Продаж: {{ orders }}</p>
    <p>Руб: {{ sum }} P</p>
    <p v-if="Math.round(diffSumm/sum * 100)">По сравнению с {{ diffTxt }}: {{ diffSumm }} ({{ Math.round(diffSumm/sum * 100) }} %)</p>
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
            sum: 0,
            diffSumm: 0,
            diffTxt: 'предыдущей неделей'
        }
    },
    computed: {
        ...mapGetters([
            'ORDERS'
        ])
    },
    methods: {
        selectWeek(date) {
                return Array(7).fill(new Date(date)).map((el, idx) =>
                    new Date(el.setDate(el.getDate() - el.getDay() + 1 + idx)))
                },
        txt() {
            if (this.time === 'week') {

                const date = new Date();
                let data = this.selectWeek(date);
                let counter = 0;
                let summ = 0;
                let lastSumm = 0;

                for (let i in data) {
                    let j = data[i];
                    counter += this.counterOrdersWeek(j)
                    summ += this.summSellWeek(j)
                    let m = new Date(j)
                    m.setDate(j.getDate() - 7)
                    lastSumm += this.summSellWeek(m)
                }

                this.orders = counter;
                this.sum = summ;
                this.diffTxt = 'предыдущей неделей'
                this.diffSumm = summ - lastSumm
                // this.diffSumm = Math.round((summSell(new Date().getDate()) - summSell(new Date().getDate() - 1))/summSell(new Date().getDate()) * 100)

                return ('На этой неделе')
            }
            else if (this.time === 'month') {

                this.orders = (this.counterOrdersMonth(new Date()))
                this.sum = this.summSellMonth(new Date())
                this.diffTxt = 'предыдущем месяцем'
                let last = new Date()
                last.setMonth(last.getMonth() - 1)
                this.diffSumm = this.sum - this.summSellMonth(last)

                return 'В этом месяце'
            }
            else {

                this.diffTxt = 'предыдущем годом'
                this.orders = this.counterOrdersYear(new Date())
                this.sum = this.summSellYear(new Date())
                let last = new Date()
                last.setYear(last.getYear() - 1)
                this.diffSumm = this.sum - this.summSellMonth(last)

                return ('В этом году')
            }
        },
        counterOrdersWeek(todayDate) {
            const counter = this.ORDERS.reduce((count, order) => {
            if (order.data.day === todayDate.getDate() && order.data.month === (todayDate.getMonth() + 1) && order.data.year === todayDate.getFullYear()) {
                count++;
            }
            return count;
            }, 0);
            return counter
        },
        summSellWeek(todayDate) {
            const summ = this.ORDERS.reduce((summ, order) => {
            if (order.data.day === todayDate.getDate() && order.data.month === (todayDate.getMonth() + 1) && order.data.year === todayDate.getFullYear()) {
                summ += order.totalSum;
            }
            return summ;
            }, 0);
            return summ
        },
        counterOrdersMonth(todayDate) {
            const counter = this.ORDERS.reduce((count, order) => {
            if (order.data.month === (todayDate.getMonth() + 1) && order.data.year === todayDate.getFullYear()) {
                count++;
            }
            return count;
            }, 0);
            return counter
        },
        summSellMonth(todayDate) {
            const summ = this.ORDERS.reduce((summ, order) => {
            if (order.data.month === (todayDate.getMonth() + 1) && order.data.year === todayDate.getFullYear()) {
                summ += order.totalSum;
            }
            return summ;
            }, 0);
            return summ
        },
        counterOrdersYear(todayDate) {
            const counter = this.ORDERS.reduce((count, order) => {
            if (order.data.year === todayDate.getFullYear()) {
                count++;
            }
            return count;
            }, 0);
            return counter
        },
        summSellYear(todayDate) {
            const summ = this.ORDERS.reduce((summ, order) => {
            if (order.data.year === todayDate.getFullYear()) {
                summ += order.totalSum;
            }
            return summ;
            }, 0);
            return summ
        },
    }
}
</script>

<style lang="scss" scoped>

</style>