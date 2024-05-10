<template>
  <div>各种位置的click点击方式触发</div>
  <Trigger>
    <template v-slot:default>
      <button>ASD</button>
    </template>
  </Trigger>
  <br /><br />
  <button>我是</button>
</template>

<script setup lang="ts">
import Trigger from '../components/trigger/index'
</script>

<style></style>
