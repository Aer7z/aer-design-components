<template>
  <span>
    <slot></slot>
  </span>
</template>

<script lang="ts" setup>
import { placementContext } from './context'
import { provide } from 'vue'

// import type { ComputedRef } from 'vue'
// import type { } from './interface'
// import { getClsPrefix } from '../_utils/global-config'

defineOptions({
  name: 'PlacementProvider',
})

// const placementContextSymbol = Symbol('placementContext')
const placementContextObject = new placementContext()

provide('placementContextObject', placementContextObject)

placementContextObject.createPlacementContext.call(placementContextObject)
</script>

<style lang="less" src="./style/index.less"></style>
