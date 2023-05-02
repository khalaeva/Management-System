<template>
    <div class="border">
        <h5>{{ txt() }}</h5>
        <p>Продаж: {{ orders }}</p>
        <p>Руб: {{ sum }} P</p>
        <p v-if="Math.round(diffSumm/sum * 100)">По сравнению с {{ diffTxt }}: {{ diffSumm }} ({{ Math.round(diffSumm/sum * 100) }} %)</p>
    </div>
    <div class="diagramma" v-if="time === 'week'">
        <ChartLine
            :chartOptions="chartOptionsWeek"
            :chartData="chartDataWeek"
        />
    </div>
    <div class="diagramma" v-if="time === 'month'">
        <ChartLine
            :chartOptions="chartOptionsMonth"
            :chartData="chartDataMonth"
        />
    </div>
    <div class="diagramma" v-if="time === 'year'">
        <ChartLine
            :chartOptions="chartOptionsYear"
            :chartData="chartDataYear"
        />
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ChartLine from './ChartLine.vue'

export default {
    name: 'v-analysis-by-time',
    components: {
        ChartLine
    },
    props: {
        time: String
    },
    data() {
        return {
            chartDataWeek: {
                labels: [ 'пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
                datasets: [ {
                    label: 'Продажи за неделю',
                    data: [],
                }]
            },
            chartOptionsWeek: {
                responsive: true
            },

            chartDataMonth: {
                labels: [ '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19','20','21', '22','23','24', '25','26','27', '28','29','30', '31'],
                datasets: [ { 
                    label: 'Продажи за месяц',
                    data: [],
                } ]
            },
            chartOptionsMonth: {
                responsive: true
            },

            chartDataYear: {
                labels: [ 'янв', 'фев', 'мар', 'апр', 'май', 'июнь', 'июль', 'авг', 'сен', 'окт', 'ноя', 'дек'],
                datasets: [ { 
                    label: 'Продажи за год',
                    data: [] } ]
            },
            chartOptionsYear: {
                responsive: true
            },

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
    },
    watch: {
        time(value) {
            if (value === 'week') {
                const datasetsByDay = []
                const date = new Date();
                let data = this.selectWeek(date);
                for (let i in data) {
                    let j = data[i];
                    datasetsByDay.push(this.summSellWeek(j))
                }
                this.chartDataWeek.datasets[0].data = datasetsByDay
            }
            else if (value === 'month') {
                const datasetsByMonth = []
                for (let i = 1; i < 32; i++) {
                    const date = new Date()
                    date.setDate(i)
                    datasetsByMonth.push(this.summSellWeek(date))
                }
                console.log(datasetsByMonth)
                this.chartDataMonth.datasets[0].data = datasetsByMonth
            }
            else if (value === 'year') {
                const datasetsByYear = []
                for (let i = 0; i < 12; i++) {
                    const date = new Date()
                    date.setMonth(i)
                    console.log(date)
                    datasetsByYear.push(this.summSellMonth(date))
                }
                console.log(datasetsByYear)
                this.chartDataYear.datasets[0].data = datasetsByYear
            }
        }

    }
}
</script>

<style lang="scss" scoped>
.diagramma {
    width: 850px;
    position: absolute;
    right: 150px;
    top: 100px;
}
.border{
    width: 500px;
    padding: 10px;
    border: 1px solid lightgray;
}
</style>