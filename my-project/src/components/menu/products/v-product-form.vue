<template>
    <form class="row g-3 add-storage">
        <h4 class="user_login__i">Добавить товар</h4>
        <div class="col-md-6">
          <label for="name" class="form-label">Наименование товара</label>
          <input type="text" class="form-control" id="name" v-model="product.name">
        </div>
        <div class="col-md-6">
          <label for="unit" class="form-label">Единица измерения</label>
          <input type="text" class="form-control" id="unit" v-model="product.unit">
        </div>
        <div class="col-12">
          <label for="desc" class="form-label">Описание</label>
          <input type="text" class="form-control" id="desc" v-model="product.description">
        </div>
        <div class="col-md-4">
          <label for="purchPr" class="form-label">Закупочная цена</label>
          <input type="text" class="form-control" id="purchPr" v-model="product.purchasePrice">
        </div>
        <div class="col-md-4">
          <label for="sellPr" class="form-label">Цена продажи</label>
          <input type="text" class="form-control" id="sellPr" v-model="product.sellingPrice">
        </div>
        <div class="col-md-4">
            <label for="id" class="form-label">Код товара</label>
            <input type="text" class="form-control" id="id" v-model="product.id">
        </div>
        <div class="col-12">
          <RouterLink to="products">
            <button @click="addProduct" class="btn btn-secondary">Сохранить</button>
          </RouterLink>
        </div>
      </form>
      <RouterView></RouterView>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'

export default {
    name: 'v-storage-from',
    data() {
      return {
        product: {
          name: '',
          description: '',
          unit: '',
          purchasePrice: '', 
          id: '', 
          sellingPrice: '',
          storageName: 'Основной склад',
        }
      }
    },
    methods: {
      addProduct() {
        axios.post('http://localhost:3000/products', this.product)
      }
    },
    computed: {
        ...mapGetters([
            'STORAGES'
        ])
    }
}
</script>

<style>
.add-storage {
    margin: 40px;
}
</style>