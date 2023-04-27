<template>
  <div class="postingToStorage" style="width: 90%; margin: auto;">
      <h1>{{ STORAGES[this.$route.params.productPosting - 1].name }}</h1>
  </div>
  <div class="till-form">
    <div class="till-form-main">
        <div class="till-form-main__cart_product">
            <h3 style="margin-bottom: 30px">{{ prodCart.name }}</h3>
            <div class="till-form-main__cart_product_description">
                <div class="till-form-main__cart_product_description_block">
                    <p style="margin-bottom: 0;">Цена закупки:</p>
                    <p class="till-form-main__cart_product_description_block_text"> {{ prodCart.purchasePrice }}</p> 
                    <span>Р</span>
                </div>
                <div class="till-form-main__cart_product_description_block">
                    <p style="margin-bottom: 0;">Цена продажи:</p>
                    <p class="till-form-main__cart_product_description_block_text"> {{ prodCart.sellingPrice }}</p> 
                    <span>Р</span>
                </div>
                <div class="till-form-main__cart_product_description_block">
                    <span><button class="btn btn-secondary btn-sm" @click="prodCart.quantity-- ">-</button></span>
                    <p class="till-form-main__cart_product_description_block_text"> {{ prodCart.quantity }} </p>
                    <span><button class="btn btn-secondary btn-sm" @click="prodCart.quantity++">+</button></span>
                </div>
                <button 
                    class="btn btn-secondary btn-sm till-form-main__cart_product_description_block"
                    @click="addToCart(prodCart)">Добавить</button>
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
                      <th scope="col">Цена</th>
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
                              <td>{{ product.sellingPrice}} Р</td>
                              <td>{{ product.quantity * product.sellingPrice}} Р</td>
                      </tr>
                  </tbody>
                </table>
          </div>
      </div>
      <div class="till-form-check">
          <h3 style="margin-bottom: 15px">Итого: {{ totalSum }} Р</h3>
          <h5>Количество: {{ totalQuan }}</h5>
          <RouterLink to="/productPosting"><button @click="addPost" class="btn btn-secondary">Сохранить</button></RouterLink>
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
          prodCart: {
              name: 'Наименование',
              sellingPrice: '0',
              purchasePrice: '0',
              quantity: 1
          },
          totalSum: 0,
          totalQuan: 0
      }
  },
  computed: {
      ...mapGetters([
          'CART',
          'STORAGES'
      ])
  },
  methods: {
      ...mapActions([
          'ADD_TO_CART',
          'GET_STORAGES_FROM_API',
          'CLEAR_CART'
      ]),
      showCart(prod) {
          this.prodCart = prod;
          if (!this.prodCart.quantity) {this.prodCart.quantity = 1}
      },
      addToCart(prod) {
          console.log(this.prodCart.quantity)
          this.totalQuan += prod.quantity
          this.totalSum += prod.quantity * prod.sellingPrice; // Итоговая сумма
          this.ADD_TO_CART(prod);
      },
      addPost(){
          let post = {
              products: this.CART,
              totalSum: this.totalSum,
              totalQuan: this.totalQuan,
              data: new Date(),
              storageName: this.STORAGES[this.$route.params.productPosting - 1].name
          }
          axios.post('http://localhost:3000/posts', post);
          this.CLEAR_CART()
      }
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
              width: 80%;
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