<template>
  <span>
    <slot></slot>
  </span>
</template>

<script lang="ts" setup>
import { createPlacementContext } from './context'

// import { computed } from 'vue'
// import type { ComputedRef } from 'vue'
// import type { } from './interface'
// import { getClsPrefix } from '../_utils/global-config'

defineOptions({
  name: 'PlacementProvider',
})

createPlacementContext()
</script>

<style lang="less" src="./style/index.less"></style>
