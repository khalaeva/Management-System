<template>
  <div class="user">
    <h3 style="margin-bottom: 40px">Личный кабинет</h3>
    <form class="user-form">
      <div class="form-group row">
        <label for="inputEmail3" class="col-sm-2 col-form-label">Логин</label>
        <div class="col-sm-10">
          <input type="email" class="form-control" id="inputEmail3" v-model="user.email">
          <small style="color:red" v-if="errors[1]">{{ errors[0] }}</small>
        </div>
      </div>
      <div class="form-group row">
        <label for="inputPassword3" class="col-sm-2 col-form-label">Пароль</label>
        <div class="col-sm-10">
          <input type="password" class="form-control" id="inputPassword3" v-model="user.password">
        </div>
      </div>
      <div class="form-group row">
        <label for="inputName3" class="col-sm-2 col-form-label">Имя</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="inputName3" v-model="user.name">
        </div>
      </div>
      <div class="form-group row">
        <label for="inputLastName" class="col-sm-2 col-form-label">Фамилия</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="inputLastName" v-model="user.lastName">
        </div>
      </div>
      <div class="form-group row">
        <label for="inputFathName" class="col-sm-2 col-form-label">Отчество</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="inputFathName" v-model="user.fathName">
        </div>
      </div>
      <div class="form-group row">
        <label for="inputPhone" class="col-sm-2 col-form-label">Телефон</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="inputPhone" v-model="user.phone">
          <small style="color:red" v-if="errors[1]">{{ errors[1] }}</small>
        </div>
      </div>
      <div>
        <button type="button" @click="checkForm" class="btn btn-secondary">Сохранить</button>
        <p style="color: green">{{ res }}</p>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

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
        },
        errors: [],
        res: ''
      }
    },
    computed: {
      ...mapGetters([
        'USER'
      ])
    },
    methods: {
      ...mapActions([
        'SET_USER_TO_STATE'
      ]),
      checkForm() {
        this.errors = [];
        if (!this.validEmail(this.user.email)) {
          this.errors.push('Укажите корректный E-mail')
        } 
        else {this.errors.push(null)}

        if (this.user.phone != '') {
          if (!this.validPhone(this.user.phone)) {
          this.errors.push('Укажите корректный телефон')
          }
          else{this.errors.push(null)}
        }
        else {this.errors.push(null)}

        if (!this.errors.reduce((a,b)=>a+b)) {
          this.SET_USER_TO_STATE(this.user)
          this.res = 'Данные успешно изменены!'
        }
      },
      validEmail(email) {
          var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return re.test(email);
      },
      validPhone(phone) {
        var re = /^((\+7|7|8)+([0-9]){10})$/;
        return re.test(phone);
      }
    },
    mounted() {
      console.log(this.USER[0])
      // this.user = this.USER[0]
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
