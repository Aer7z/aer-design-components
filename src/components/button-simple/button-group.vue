<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { defineOptions } from 'vue'

defineOptions({
  name: 'ButtonGroup'
})
</script>

<style lang="less" src="./style/index.less"></style>
