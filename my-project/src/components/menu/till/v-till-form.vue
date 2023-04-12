<template>
    <div class="till-form">
        <div class="till-form-main">
            <div class="till-form-main__cart_product">
                <h3 style="margin-bottom: 30px">Наименование</h3>
                <div class="till-form-main__cart_product_description">
                    <div class="till-form-main__cart_product_description_block">
                        <p class="till-form-main__cart_product_description_block_text">Цена</p> 
                        <span>Р</span>
                    </div>
                    <div class="till-form-main__cart_product_description_block">
                        <span><button class="btn btn-secondary btn-sm">-</button></span>
                        <p class="till-form-main__cart_product_description_block_text">Количество</p>
                        <span><button class="btn btn-secondary btn-sm">+</button></span>
                    </div>
                    <div class="till-form-main__cart_product_description_block">
                        <p class="till-form-main__cart_product_description_block_text">Скидка</p>
                        <span>%</span>
                    </div>
                </div>
            </div>
            <div class="till-form-main__search">
                <label for="inputSearch" class="form-label">Найти товар:</label>
                <div class="till-form-main__search_type">
                    <!-- <input 
                        type="text" 
                        id="inputSearch" 
                        class="form-control" 
                        aria-describedby="inputHelpSearch" 
                        style="width: 75%"
                        v-model="searchProd"> -->
                    <vSearch/>
                    <!-- <div class="item fruit" v-for="(prod, index) in filteredList()" :key="index">
                        <p>{{ prod }}</p>
                    </div>
                    <div class="item error" v-if="input&&!filteredList().length">
                        <p>No results found!</p>
                    </div> -->
                    <button class="btn btn-secondary">Выбрать из каталога</button>
                </div>
                <div id="inputHelpSearch" class="form-text" style="margin-bottom: 20px">
                    Введите название продукта.
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
import vSearch from '@/components/v-search.vue';

export default {
    name: 'v-till-form',
    components: {
        vSearch
    }
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
        &__search_type {
            display: grid;
            grid-template-columns: 3fr 1fr;
            justify-content: space-between;
            align-items: center;
        }
        &__cart_product {
            margin-bottom: 30px;
            padding: 10px;
            border: 2px solid lightgray;
            &_description {
                display: flex;
                justify-content: space-between;
                width: 50%;
                &_block {
                    display: flex; 
                    justify-content: center; 
                    align-items: center;
                    &_text {
                        border: 1px solid lightgray; 
                        padding: 0 10px 0 10px;
                        margin: 0 10px 0 10px;
                    }
                }
            }
        }
    }
    &-check {
        width: 20%;
    }
}
</style>