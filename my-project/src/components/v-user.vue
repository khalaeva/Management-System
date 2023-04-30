<template>
  <div class="user">
    <h3 style="margin-bottom: 40px">{{user.email}}</h3>
    <form class="user-form">
      <div class="form-group row">
        <label for="inputEmail3" class="col-sm-2 col-form-label">Логин</label>
        <div class="col-sm-10">
          <input type="email" class="form-control" id="inputEmail3" :placeholder="user.email">
        </div>
      </div>
      <div class="form-group row">
        <label for="inputPassword3" class="col-sm-2 col-form-label">Пароль</label>
        <div class="col-sm-10">
          <input type="password" class="form-control" id="inputPassword3" :placeholder="user.password">
        </div>
      </div>
      <div class="form-group row">
        <label for="inputName3" class="col-sm-2 col-form-label">Имя</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="inputName3" :placeholder="user.name">
        </div>
      </div>
      <div class="form-group row">
        <label for="inputLastName" class="col-sm-2 col-form-label">Фамилия</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="inputLastName" :placeholder="user.lastName">
        </div>
      </div>
      <div class="form-group row">
        <label for="inputFathName" class="col-sm-2 col-form-label">Отчество</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="inputFathName" :placeholder="user.fathName">
        </div>
      </div>
      <div class="form-group row">
        <label for="inputPhone" class="col-sm-2 col-form-label">Телефон</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="inputPhone" :placeholder="user.phone">
        </div>
      </div>
      <div>
        <button class="btn btn-secondary">Сохранить</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'v-user',
    data() {
      return {
        user: {
          email: '',
          password: '',
          name: '',
          lastName: '',
          fathName: '',
          phone: ''
        }
      }
    },
    computed: {
      ...mapGetters([
        'USER'
      ])
    },
    mounted() {
      console.log(this.USER)
    }
}
</script>

<style scoped lang="scss">
.user {
    width: 40%;
    margin-left: 100px;
    margin-top: 40px;
}
.user-form > div {
  margin-left: 20px;
  margin-bottom: 20px;
}
</style>
