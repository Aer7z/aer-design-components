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
  <Trigger position="top">
    <button>Open</button>
    <template #content>
      <select>
        <option>1</option>
        <option>二</option>
        <option>three</option>
      </select>
    </template>
  </Trigger>
  <Trigger position="bottom">
    <button>Open</button>
    <template #content>
      <select>
        <option>1</option>
        <option>二</option>
        <option>three</option>
      </select>
    </template>
  </Trigger>
  <Trigger position="left">
    <button>Open</button>
    <template #content>
      <select>
        <option>1</option>
        <option>二</option>
        <option>three</option>
      </select>
    </template>
  </Trigger>
  <Trigger position="right">
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
