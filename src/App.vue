<template>
  <!-- <Button> </Button> -->
  <div>
    <button><router-link to="/Button">Button</router-link></button>
    <button><router-link to="/ButtonSimple">ButtonSimple</router-link></button>
    <button><router-link to="/Dropdown">Dropdown</router-link></button>
    <button><router-link to="/Input">Input</router-link></button>
    <button><router-link to="/Modal">Modal</router-link></button>
    <button><router-link to="/Radio">Radio</router-link></button>
    <button><router-link to="/Trigger">Trigger</router-link></button>
    <button><router-link to="/Test">Test</router-link></button>
    <AerButton>我</AerButton>
    <!-- <Aer></Aer> -->
    <!-- <Aer_Button></Aer_Button> -->
  </div>
  <br /><br />
  <router-view></router-view>
</template>

<script setup lang="ts"></script>

<style scoped></style>
