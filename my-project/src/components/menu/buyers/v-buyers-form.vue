<template>
    <form class="row g-3 add-storage">
        <h4 class="user_login__i">Добавить покупателя</h4>
        <div class="col-md-6">
          <label for="name" class="form-label">Имя</label>
          <input type="text" class="form-control" id="name" v-model="buyer.name">
        </div>
        <div class="col-md-6">
          <label for="unit" class="form-label">Фамилия</label>
          <input type="text" class="form-control" id="unit" v-model="buyer.lastName">
        </div>
        <div class="col-6">
          <label for="desc" class="form-label">Номер телефона</label>
          <input type="text" class="form-control" id="desc" v-model="buyer.phone">
        </div>
        <div class="col-md-6">
          <label for="purchPr" class="form-label">Email</label>
          <input type="text" class="form-control" id="purchPr" v-model="buyer.email">
        </div>
        <div class="col-12">
          <RouterLink to="buyers">
            <button @click="addBuyer" class="btn btn-secondary">Сохранить</button>
          </RouterLink>
        </div>
      </form>
</template>

<script>
import axios from 'axios'

export default {
    name: 'v-buyers-form',
    data() {
      return {
        buyer: {
          name: '',
          lastName: '',
          phone: '',
          email: '', 
        }
      }
    },
    methods: {
      addBuyer() {
        axios.post('http://localhost:3000/buyers', this.buyer)
      }
    }
}
</script>

<style>
.add-storage {
    margin: 40px;
}
</style>