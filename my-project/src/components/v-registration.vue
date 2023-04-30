<template>
    <div class="v-layout-header">
        <div class="v-layout-header-left">
            <img class="logo" src="../../public/svg/free-icon-process-4149677.png">
            <h1>MY business</h1>
        </div>
    </div>
    <div class="user">
      <form class="user-form">
        <h4 class="user_login__i">Регистрация</h4>
        <div class="user_login__i form-group">
            <label for="InputEmail">E-mail</label>
            <input 
              type="email" 
              class="form-control" 
              id="InputEmail"
              v-model="user.email"> 
              <small style="color:red" v-if="errors[0]">{{ errors[0] }}!</small> 
        </div>
        <div class="user_login__i form-group">
            <label for="InputLogin">Пароль</label>
            <input 
              type="password" 
              class="form-control" 
              id="InputLogin" 
              v-model="user.password">
              <small style="color:red" v-if="errors[1]">{{ errors[1] }}!</small>
        </div>
        <div class="user_login__i form-group">
            <label for="InputLogin">Имя</label>
            <input 
              type="text" 
              class="form-control" 
              id="InputLogin"
              v-model="user.name"> 
              <small style="color:red" v-if="errors[2]">{{ errors[2] }}!</small>
        </div>
        <div class="user_login__i form-group">
            <label for="InputLogin">Фамилия</label>
            <input 
              type="text" 
              class="form-control" 
              id="InputLogin" 
              v-model="user.lastName">
              <small style="color:red" v-if="errors[3]">{{ errors[3] }}!</small>
        </div>
        <button type="button" @click="checkForm" class="btn btn-secondary">Сохранить</button>
        <RouterLink to="/" style="color: gray; margin-left: 20px">Вход</RouterLink>
      </form>
    </div>
  </template>
  
  <script>
  import router from '@/router/router'
  import axios from 'axios'
  
  export default {
      name: 'v-registration',
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
          errors: []
        }
      },
      methods: {
        checkForm() {
                this.errors = [];
                if (!this.user.email) {
                    this.errors.push('Требуется указать E-mail')
                } else if (!this.validEmail(this.user.email)) {
                    this.errors.push('Укажите корректный E-mail')
                }
                else (this.errors.push(0))

                if (!this.user.password) {
                    this.errors.push('Требуется указать пароль')
                }
                else (this.errors.push(0))

                if (!this.user.name) {
                    this.errors.push('Требуется указать имя')
                }
                else (this.errors.push(0))

                if (!this.user.lastName) {
                    this.errors.push('Требуется указать фамилию')
                }
                else (this.errors.push(0))

                if (!this.errors.reduce((a,b)=>a+b)) {
                    axios.post('http://localhost:3000/login', this.user)
                    router.push("/")
                }
            },
            validEmail(email) {
                var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(email);
            }
      },
      mounted() {
        console.log(this.EMAIL)
      }
  }
  </script>
  
  <style scoped lang="scss">
    .logo {
    width: 50px;
    height: 50px;
    }
    .v-layout-header {
        display: flex;
        height: 100px;
        justify-content: space-around;
        align-items: center;
        background-color: lightgray;
        margin-bottom: 30px;
        &-left {
            display: grid;
            grid-template-columns: 1fr 3fr;
        }
        &-right {
            width: 30%;
            display: flex;
            justify-content: space-around;
        }
    }
    .user{
        width: 500px;
        padding: 50px;
        border: 1px solid lightgrey;
        position: fixed; top: 50%; left: 50%;
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        &__i {
            margin-bottom: 20px;
        }
    }
    .user-form > div {
        margin-bottom: 20px;
    }
  </style>
  