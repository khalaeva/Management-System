<template>
    <form class="row g-3 add-storage">
        <h4 class="user_login__i">Добавить склад</h4>
        <div class="col-md-6">
          <label for="name" class="form-label">Наименование</label>
          <input type="text" class="form-control" id="name" v-model="storage.name">
        </div>
        <div class="col-md-6">
          <label for="adress" class="form-label">Адрес</label>
          <input type="text" class="form-control" id="adress" v-model="storage.adress">
        </div>
        <div class="col-12">
          <label for="commAdress" class="form-label">Комментарий к адресу</label>
          <input type="text" class="form-control" id="commAdress" v-model="storage.commAdress">
        </div>
        <div class="col-12">
          <label for="comment" class="form-label">Комментарий</label>
          <input type="text" class="form-control" id="comment" v-model="storage.comment">
        </div>
        <div class="col-md-6">
          <label for="id" class="form-label">Код</label>
          <input type="text" class="form-control" id="id" v-model="storage.id">
        </div>
        <div class="col-md-6">
          <label for="index" class="form-label">Индекс</label>
          <input type="text" class="form-control" id="index" v-model="storage.index">
        </div>
        <div class="col-12">
          <RouterLink to="storages">
            <button @click="addStorage" class="btn btn-secondary">Сохранить</button>
          </RouterLink>
        </div>
      </form>
</template>

<script>
import axios from 'axios'

export default {
    name: 'v-storage-from',
    data() {
      return {
        storage: {
          name: '',
          adress: '',
          commAdress: '',
          comment: '', 
          id: '', 
          index: '',
        }
      }
    },
    methods: {
      addStorage() {
        axios.post('http://localhost:3000/storages', this.storage)
      }
    }
}
</script>

<style>
.add-storage {
    margin: 40px;
}
</style>