<template>
    <div class="v-layout-header">
        <div class="v-layout-header-left">
            <img class="logo" src="../../public/svg/free-icon-process-4149677.png">
            <h1>MY business</h1>
        </div>
    </div>
    <div class="user_login">
        <form>
            <h4 class="user_login__i">Вход</h4>
            <div class="user_login__i form-group">
              <label for="exampleInputEmail1">Введите свой E-mail</label>
              <input 
                type="email" 
                class="form-control" 
                id="exampleInputEmail1" 
                aria-describedby="emailHelp" 
                placeholder="E-mail"
                v-model="user.email">
                <small style="color:red" v-if="errors[0]">{{ errors[0] }}!</small>
            </div>
            <div class="user_login__i form-group">
              <label for="exampleInputPassword1">Введите свой пароль</label>
              <input 
                type="password" 
                class="form-control" 
                id="exampleInputPassword1" 
                placeholder="Пароль"
                v-model="user.password">
                <small style="color:red" v-if="errors[1]">{{ errors[1] }}!</small>
                <small style="color:red" v-if="errors[2]">{{ errors[2] }}!</small>
            </div>
                <button type="button" @click="checkForm" class="btn btn-secondary" style="margin-bottom: 10px">Вход</button>
                <RouterLink to="/registration" style="color: gray; margin-left: 20px">Регистрация</RouterLink>
        </form>
    </div>
    </template>
    
    <script>
    import { mapActions, mapGetters } from 'vuex'
    import router from '@/router/router';

    export default {
        name: 'v-login',
        data() {
            return {
                user: {
                    email: '',
                    password: ''
                },
                errors: []
            }
        },
        computed: {
            ...mapGetters ([
                'USER'
            ])
        },
        methods: {
            ...mapActions ([
                'GET_USER_FROM_API'
            ]),
            checkForm() {
                this.errors = [];
                if (!this.user.email) {
                    this.errors.push('Требуется указать E-mail')
                } else if (!this.validEmail(this.user.email)) {
                    this.errors.push('Укажите корректный E-mail')
                }
                else(this.errors.push(null))

                if (!this.user.password) {
                    this.errors.push('Требуется указать пароль')
                }
                else(this.errors.push(null))

                if (!this.errors.reduce((a,b)=>a+b)) {
                    this.GET_USER_FROM_API(this.user.email)
                    if (!this.USER[0]) {
                        router.push({ name: 'analysis' })
                    }
                    else(this.errors.push('Пользователь не найден'))
                }
            },
            validEmail(email) {
                var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(email);
            }
        },
        
    }
    </script>
    
    <style lang="scss" scoped>
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
    .user_login{
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
    </style>