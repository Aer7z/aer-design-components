<template>
  <span :style="['position:absolute', placementContextObject?.placementRec.value]">
    <slot></slot>
  </span>
</template>

<script lang="ts" setup>
import { placementContext } from './context'

import { inject } from 'vue'
// import type { ComputedRef } from 'vue'
// import type { } from './interface'
// import { getClsPrefix } from '../_utils/global-config'

defineOptions({
  name: 'Placement',
})

// const placementContext = usePlacementContext()
const placementContextObject: placementContext | undefined = inject('placementContextObject')
placementContextObject?.usePlacementContext.call(placementContextObject)
</script>

<style lang="less" src="./style/index.less"></style>
