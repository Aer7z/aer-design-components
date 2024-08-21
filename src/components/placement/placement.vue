<template>
  <span :style="['position:absolute', placementContext.placementRec.value]">
    <slot></slot>
  </span>
</template>

<script lang="ts" setup>
import { usePlacementContext } from './context'

// import { computed } from 'vue'
// import type { ComputedRef } from 'vue'
// import type { } from './interface'
// import { getClsPrefix } from '../_utils/global-config'

defineOptions({
  name: 'Placement',
})

const placementContext = usePlacementContext()
</script>

<style lang="less" src="./style/index.less"></style>
