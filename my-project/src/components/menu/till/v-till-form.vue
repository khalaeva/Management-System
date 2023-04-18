<template>
    <div class="storageName" style="width: 90%; margin: auto;">
        <h1>{{ this.$route.params.storageName }}</h1>
    </div>
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
                        <span><button class="btn btn-secondary btn-sm" @click="prodCart.quantity-- ">-</button></span>
                        <p class="till-form-main__cart_product_description_block_text"> {{ prodCart.quantity }} </p>
                        <span><button class="btn btn-secondary btn-sm" @click="prodCart.quantity++">+</button></span>
                    </div>
                    <div class="till-form-main__cart_product_description_block">
                        <input 
                            class="till-form-main__cart_product_description_block_text"
                            style="width: 50px;"
                            v-model="prodCart.sale">
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
                    <tbody >
                        <tr 
                            @click="showCart(product)" 
                            v-for="product in CART" 
                            :key="product.id"
                            class="table-tr">
                                <th scope="row">{{ product.id }}</th>
                                <td>{{ product.name }}</td>
                                <td>{{ product.quantity }} {{ product.unit }}</td>
                                <td>{{ product.sale}} %</td>
                                <td>{{ product.priceSale }} Р</td>
                        </tr>
                    </tbody>
                  </table>
            </div>
        </div>
        <div class="till-form-check">
            <p>Цена без скидки: {{ preSum }} Р</p>
            <p>Скидка: {{ totalSale }} Р</p>
            <p>Итого: {{ totalSum }} Р</p>
            <div class="type" style="margin-bottom: 20px">
                <p style="margin-bottom: 10px;">Способ оплаты:</p>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" v-model="payment" value="card" id="flexCheckDefault" checked>
                    <label class="form-check-label" for="flexCheckDefault">
                      Карта
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" v-model="payment" value="cash" id="flexCheckChecked">
                    <label class="form-check-label" for="flexCheckChecked">
                      Наличные
                    </label>
                </div>
            </div>
            <div style="margin-bottom: 15px">
                <select class="form-select" aria-label="Default select example" v-model="buyer">
                    <option 
                        v-for="buyer in BUYERS"
                        :key="buyer.id"
                        :value="buyer"> {{ buyer.name }} {{ buyer.lastName }} </option>
                </select>
            </div>
            <button @click="addOrder" class="btn btn-secondary">Сохранить</button>
        </div>
    </div>
</template>

<script>
import vSearch from '@/components/v-search-prod.vue';
import { mapActions, mapGetters } from 'vuex';
import axios from 'axios';

export default {
    name: 'v-till-form',
    components: {
        vSearch
    },
    data() {
        return {
            buyer: {
                id: 1,
                name: "Неизвестный",
                lastName: "Покупатель",
                phone: "",
                email: ""
            },
            prodCart: {
                name: 'Наименование',
                sellingPrice: '0',
                quantity: 1
            },
            payment: ['card'],
            preSum: 0,
            totalSum: 0,
            totalSale: 0,
        }
    },
    computed: {
        ...mapGetters([
            'CART',
            'BUYERS'
        ])
    },
    methods: {
        ...mapActions([
            'ADD_TO_CART',
            'GET_BUYERS_FROM_API'
        ]),
        showCart(prod) {
            this.prodCart = prod;
            if (!this.prodCart.quantity) {this.prodCart.quantity = 1}
            if (!this.prodCart.sale) {
                this.prodCart.sale = 0;
            }
        },
        addToCart(prod) {
            console.log(this.prodCart.quantity)
            prod.priceSale = (prod.sellingPrice * prod.quantity) * (1 - prod.sale / 100); // Считаем сумму со скидкой каждого товара
            this.preSum += prod.quantity * prod.sellingPrice; // Цена без скидки
            this.totalSale += prod.sellingPrice * prod.quantity - prod.priceSale; // Итоговая скидка
            this.totalSum = this.preSum - this.totalSale; // Итоговая сумма
            this.ADD_TO_CART(prod);
        },
        addOrder(){
            let order = {
                cart: this.CART,
                buyer: this.buyer,
                preSum: this.preSum,
                totalSum: this.totalSum,
                totalSale: this.totalSale,
                data: {
                    day: new Date().getDate(),
                    month: new Date().getMonth(),
                    year: new Date().getFullYear()
                },
                storageName: this.$route.params.storageName
            }
            axios.post('http://localhost:3000/orders', order);
            console.log(order);
            document.location.reload();
        }
    },
    mounted() {
        this.GET_BUYERS_FROM_API()
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

.table-tr {
    &:hover {
        background-color: lightgray;
    }
}
</style>