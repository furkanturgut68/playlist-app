<template>
  <the-navbar></the-navbar>
  <router-view></router-view>
</template>

<script>
import TheNavbar from './components/TheNavbar.vue';
export default {
  components : {
    TheNavbar
  }
}
</script>

<style>

</style>
