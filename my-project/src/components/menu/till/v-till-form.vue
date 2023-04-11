<template>
    <div class="till-form">
        <div class="till-form-main">
            <div class="till-form-main__cart_product">
                <h3>Наименование</h3>
                <div class="till-form-main__cart_product_description">
                    <p>Цена</p>
                    <p>Количество</p>
                    <p>Скидка</p>
                </div>
            </div>
            <div class="till-form-main__table_products">
                <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">Код</th>
                        <th scope="col">Наименование</th>
                        <th scope="col">Количество</th>
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
        </div>
        <div class="till-form-check">
            <p>Цена без скидки</p>
            <p>Скидка</p>
            <p>Итого</p>
            <p>Карта/Наличные</p>
            <button class="btn btn-secondary">Сохранить</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'v-till-form'
}
</script>

<style lang="scss" scoped>
.till-form {
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    &-main {
        width: 70%;
        &__cart_product {
            margin-bottom: 30px;
            padding: 10px;
            border: 2px solid lightgray;
            &_description {
                display: flex;
                justify-content: space-between;
                width: 50%;
            }
        }
    }
    &-check {
        width: 20%;
    }
}
</style>