<template>
  <span>
    <slot></slot>
  </span>
</template>

<script lang="ts" setup>
import { createPlacementContext } from './context'

defineOptions({
  name: 'PlacementProvider',
})

createPlacementContext()
</script>

<style lang="less" src="./style/index.less"></style>
