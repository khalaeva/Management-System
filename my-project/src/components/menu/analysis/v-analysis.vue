<template>
    <div class="v-analysis">
        <h3 class="v-products-add__text" style="margin-bottom: 30px">Продажи</h3>
        <div class="btns" style="margin-bottom: 30px">
            <div class="form_radio_btn">
                <input id="radio-1" type="radio" name="radio" value="week" v-model="raioTime">
                <label for="radio-1">Неделя</label>
            </div>
            <div class="form_radio_btn">
                <input id="radio-2" type="radio" name="radio" value="month" v-model="raioTime">
                <label for="radio-2">Месяц</label>
            </div>
            <div class="form_radio_btn">
                <input id="radio-3" type="radio" name="radio" value="year" v-model="raioTime">
                <label for="radio-3">Год</label>
            </div>
        </div>
        <div class="sell">
            <h5>Сегодня, {{ getData() }}</h5>
            <div class="money">
                <p>Продаж: {{ counterOrders(new Date().getDate()) }}</p>
                <p>Сумма: {{ summSell(new Date().getDate()) }} Р</p>
                <p >По сравнению с предыдущим днем: {{ summSell(new Date().getDate()) - summSell(new Date().getDate() - 1)}} Р
                    <span v-if="summSell(new Date().getDate())">({{ Math.round((summSell(new Date().getDate()) - summSell(new Date().getDate() - 1))/summSell(new Date().getDate()) * 100) }}%)</span>
                    <span v-else> (-100 %)</span>
                </p>
            </div>
        </div>
        <div class="analysis_by_time">
            <v-analysis-by-time :time="raioTime"/>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import vAnalysisByTime from './v-analysis-by-time.vue';

export default {
    name: 'v-analysis',
    components: { vAnalysisByTime },
    data() {
        return {
            raioTime: 'week'
        }
    },
    methods: {
        ...mapActions([
            'GET_ORDERS_FROM_API'
        ]),
        getData() {
            const months = [
            'января',
            'февраля',
            'марта',
            'aпреля',
            'мая',
            'июня',
            'июля',
            'августа',
            'сентября',
            'октября',
            'ноября',
            'декабря'
            ];
            const weekdays = [
            'воскресенье',
            'понедельник',
            'вторник',
            'среда',
            'четверг',
            'пятница',
            'суббота'
            ];
            const currentDate = new Date();
            return (weekdays[currentDate.getDay()] + ' ' + currentDate.getDate() + ' ' + months[currentDate.getMonth()])
        },
        counterOrders(todayDate) {
            const counter = this.ORDERS.reduce((count, order) => {
            if (order.data.day === todayDate) {
                count++;
            }
            return count;
            }, 0);
            return counter
        },
        summSell(todayDate) {
            const summ = this.ORDERS.reduce((summ, order) => {
            if (order.data.day === todayDate) {
                summ += order.totalSum;
            }
            return summ;
            }, 0);
            return summ
        }
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
.sell{
    width: 500px;
    padding: 10px;
    border: 1px solid lightgray;
    margin-bottom: 20px;
}
.form_radio_btn {
	display: inline-block;
	margin-right: 10px;
}
.form_radio_btn input[type=radio] {
	display: none;
}
.form_radio_btn label {
	display: inline-block;
	cursor: pointer;
	padding: 0px 15px;
	line-height: 34px;
	border: 1px solid #999;
	border-radius: 6px;
	user-select: none;
}
 
/* Checked */
.form_radio_btn input[type=radio]:checked + label {
	background: lightgray;
}
 
/* Hover */
.form_radio_btn label:hover {
	color: #666;
}
 
/* Disabled */
.form_radio_btn input[type=radio]:disabled + label {
	background: #efefef;
	color: #666;
}
.v-analysis {
    position: relative;
    width: 90%;
    margin: auto;
    &-add {
        display: flex;
        &__text {
            margin: 20px;
        }
        &__link {
            margin: 20px;
        }
    }    
}
</style>