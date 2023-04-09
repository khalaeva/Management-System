<template>
    <div class="user_login" >
        <form>
            <h4 class="user_login__i">Log in</h4>
            <div class="user_login__i form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="user_login__i form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
            </div>
            <button type="submit" class="btn btn-primary" style="margin-bottom: 10px">Log In</button>
            <br>
        </form>
    </div>
    </template>
    
    <script>
    export default {
        name: 'v-login',
    }
    </script>
    
    <style lang="scss" scoped>
    .user_login{
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