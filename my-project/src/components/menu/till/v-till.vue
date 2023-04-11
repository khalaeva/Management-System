<template>
    <div class="v-till">
        <div class="v-till-add">
            <h3 class="v-till-add__text">Заказы</h3>
            <RouterLink to="addTill" class="v-till-add__link"><button type="button" class="btn btn-secondary">Открыть кассу</button></RouterLink>    
        </div>
        <table class="table">
            <thead>
              <tr>
                <th scope="col">№</th>
                <th scope="col">Время</th>
                <th scope="col">Покупатель</th>
                <th scope="col">Сумма</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'v-till'
}
</script>

<style lang="scss" scoped>
.v-till {
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