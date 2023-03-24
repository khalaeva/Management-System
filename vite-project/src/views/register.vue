<template>
    <Header/>
    <div class="mb-5 mb-lg-0">
        <div class="card cascading-right" style="
                width: 50%;
                margin-left: auto;
                margin-right: auto;
                border: none;
                ">
          <div class="card-body p-5 shadow-5 text-center">
            <h2 class="fw-bold mb-5">Sign up now</h2>
            <form action="http://localhost:3000/users" method="post">
              <!-- 2 column grid layout with text inputs for the first and last names -->
              <div class="row">
                <div class="col-md-6 mb-4">
                  <div class="form-outline">
                    <input type="text" id="form3Example1" class="form-control">
                    <label class="form-label" for="form3Example1" style="margin-left: 0px;">First name</label>
                  <div class="form-notch"><div class="form-notch-leading" style="width: 9px;"></div><div class="form-notch-middle" style="width: 68.8px;"></div><div class="form-notch-trailing"></div></div></div>
                </div>
                <div class="col-md-6 mb-4">
                  <div class="form-outline">
                    <input type="text" id="form3Example2" class="form-control">
                    <label class="form-label" for="form3Example2" style="margin-left: 0px;">Last name</label>
                  <div class="form-notch"><div class="form-notch-leading" style="width: 9px;"></div><div class="form-notch-middle" style="width: 68px;"></div><div class="form-notch-trailing"></div></div></div>
                </div>
              </div>

              <!-- Email input -->
              <div class="form-outline mb-4">
                <input type="email" id="form3Example3" class="form-control">
                <label class="form-label" for="form3Example3" style="margin-left: 0px;">Email address</label>
              <div class="form-notch"><div class="form-notch-leading" style="width: 9px;"></div><div class="form-notch-middle" style="width: 88.8px;"></div><div class="form-notch-trailing"></div></div></div>

              <!-- Password input -->
              <div class="form-outline mb-4">
                <input type="password" id="form3Example4" class="form-control">
                <label class="form-label" for="form3Example4" style="margin-left: 0px;">Password</label>
              <div class="form-notch"><div class="form-notch-leading" style="width: 9px;"></div><div class="form-notch-middle" style="width: 64.8px;"></div><div class="form-notch-trailing"></div></div></div>


              <!-- Submit button -->
              <button type="submit" class="btn btn-primary btn-block mb-4">
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
</template>

<script setup>
import Header from '@/components/Header.vue';

import { ref } from "vue"

const props = defineProps({
    products: {
        required: true
    }
})
</script>