<template>
  <span :style="['position:absolute', placementContext?.placementRec.value]">
    <slot></slot>
  </span>
</template>

<script lang="ts" setup>
import { usePlacementContext } from './context'

defineOptions({
  name: 'Placement',
})

const placementContext = usePlacementContext()
</script>

<style lang="less" src="./style/index.less"></style>
