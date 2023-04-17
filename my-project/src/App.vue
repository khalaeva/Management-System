<template>
  <VLayoutHeader v-show="!(this.$route.name === 'index')"/>
  <router-view></router-view>
</template>

<script>
import VLayoutHeader from './components/layouts/v-layout-header.vue';

export default {
    name: "App",
    components: { VLayoutHeader },
    data() {
      return {
        Visible: 0
      }
    }
}
</script>

<style>

</style>
