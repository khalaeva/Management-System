<template>
    <div class="till-form">
        <div class="till-form-main">
            <div class="till-form-main__cart_product">
                <h3 style="margin-bottom: 30px">{{ prodCart.name }}</h3>
                <div class="till-form-main__cart_product_description">
                    <div class="till-form-main__cart_product_description_block">
                        <p class="till-form-main__cart_product_description_block_text">{{ prodCart.sellingPrice }}</p> 
                        <span>Р</span>
                    </div>
                    <div class="till-form-main__cart_product_description_block">
                        <span><button class="btn btn-secondary btn-sm" @click="prodCart.quan-- ">-</button></span>
                        <p class="till-form-main__cart_product_description_block_text"> {{ prodCart.quan }} </p>
                        <span><button class="btn btn-secondary btn-sm" @click="prodCart.quan++">+</button></span>
                    </div>
                    <div class="till-form-main__cart_product_description_block">
                        <p class="till-form-main__cart_product_description_block_text">0</p>
                        <span>%</span>
                    </div>
                    <button 
                        class="btn btn-secondary btn-sm till-form-main__cart_product_description_block"
                        @click="addToCart(prodCart)">В корзину</button>
                </div>
            </div>
            <div class="till-form-main__search">
                <label for="inputSearch" class="form-label">Найти товар:</label>
                <div class="till-form-main__search_type">
                    <vSearch
                        @showCart="showCart"
                    />
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
                        <th scope="col">Скидка</th>
                        <th scope="col">Сумма</th>
                      </tr>
                    </thead>
                    <tbody>
                        <tr v-for="product in CART" :key="product.id">
                            <th scope="row">{{ product.id }}</th>
                            <td>{{ product.name }}</td>
                            <td>{{ product.quantity }} {{ product.unit }}</td>
                            <td>{{ product.sellingPrice * product.quantity}} Р</td>
                          </tr>
                    </tbody>
                  </table>
            </div>
        </div>
        <div class="till-form-check">
            <p>Цена без скидки {{ sum }}</p>
            <p>Скидка</p>
            <p>Итого</p>
            <p>Карта/Наличные</p>
            <button class="btn btn-secondary">Сохранить</button>
        </div>
    </div>
</template>

<script>
import vSearch from '@/components/v-search.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'v-till-form',
    components: {
        vSearch
    },
    data() {
        return {
            prodCart: {
                name: 'Наименование',
                sellingPrice: '0',
                quan: 1,
            },
            sum: 0
        }
    },
    computed: {
        ...mapGetters([
            'CART'
        ])
    },
    methods: {
        ...mapActions([
            'ADD_TO_CART'
        ]),
        showCart(prod) {
            this.prodCart = prod;
            this.prodCart.quan = 1
        },
        addToCart(prod) {
            this.sum += prod.quan * prod.sellingPrice;
            this.ADD_TO_CART(prod);
            
        }
    },

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