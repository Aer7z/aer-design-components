<template>
  <Trigger>
    <button>Open</button>
    <template #content>
      <select>
        <option>1</option>
        <option>二</option>
        <option>three</option>
      </select>
    </template>
  </Trigger>
  <button>我是</button>
</template>

<script setup lang="ts">
import Trigger from '../components/trigger/index'
</script>

<style></style>
