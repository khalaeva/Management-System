<template>
    <div class="v-analysis">
        <h3 class="v-products-add__text">Продажи</h3>
        <div class="btns">
            <button class="btn btn-outline-secondary">Неделя</button>
            <button class="btn btn-outline-secondary">Месяц</button>
            <button class="btn btn-outline-secondary">Год</button>
        </div>
        <div class="sell">
            <p>Сегодня, понедельник 17</p>
            <div class="money">
                <p>Продаж: 0</p>
                <p>Руб: 0</p>
                <p>По сравнению с воскресеньем: 0</p>
            </div>
        </div>
        <div class="sell-data">
            <p>На этой неделе</p>
            <div class="money">
                <p>Продаж: 0</p>
                <p>Руб: 0</p>
                <p>По сравнению с воскресеньем: 0</p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'v-analysis'
}
</script>

<style lang="scss" scoped>
.btn {
    margin-right: 5px;
}
.v-analysis {
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