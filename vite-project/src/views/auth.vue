<template>
    <Header/>
    <div class="mb-5 mb-lg-0" style="width: 50%; margin-left: auto;
    margin-right: auto;">
        <div class="card cascading-right" style="
                border: none;
                
                ">
          <div class="card-body p-5 shadow-5 text-center">
            <h2 class="fw-bold mb-5">Authorization</h2>
            <form>
              <!-- Email input -->
              <div class="form-outline mb-4">
                <input type="email" id="form2Example1" class="form-control">
                <label class="form-label" for="form2Example1" style="margin-left: 0px;">Email address</label>
              <div class="form-notch"><div class="form-notch-leading" style="width: 9px;"></div><div class="form-notch-middle" style="width: 88.8px;"></div><div class="form-notch-trailing"></div></div></div>
      
              <!-- Password input -->
              <div class="form-outline mb-4">
                <input type="password" id="form2Example2" class="form-control">
                <label class="form-label" for="form2Example2" style="margin-left: 0px;">Password</label>
              <div class="form-notch"><div class="form-notch-leading" style="width: 9px;"></div><div class="form-notch-middle" style="width: 64.8px;"></div><div class="form-notch-trailing"></div></div></div>
      
              <!-- 2 column grid layout for inline styling -->
              <div class="row mb-4">
                <div class="col d-flex justify-content-center">
                  <!-- Checkbox -->
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked="">
                    <label class="form-check-label" for="form2Example31"> Remember me </label>
                  </div>
                </div>
              </div>
      
              <!-- Submit button -->
              <button type="button" class="btn btn-primary btn-block mb-4">Sign in</button>
      
              <!-- Register buttons -->
              <div class="text-center">
                <p>Not a member? <router-link to="/register">Register</router-link></p>
              </div>
            </form>
          </div>
        </div>
        </div>
</template>

<script setup>
import Header from '@/components/Header.vue';
</script>

<style lang="scss" scoped>

</style>