<template>
  <!-- <Button> </Button> -->
  <div>
    <button><router-link to="/Button">Button</router-link></button>
    <button><router-link to="/Input">Input</router-link></button>
  </div>

  <br /><br />
  <router-view></router-view>
</template>

<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<style scoped></style>
