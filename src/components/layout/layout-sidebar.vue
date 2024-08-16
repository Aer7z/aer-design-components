<template>
  <div :style="styleSidebar">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { DEFAULT_LAYOUT_SIDEBAR_PROPS, type LayoutSidebarProps } from './interface'

// import { computed } from 'vue'
// import type { ComputedRef } from 'vue'
// import type { } from './interface'
// import { getClsPrefix } from '../_utils/global-config'

defineOptions({
  name: 'LayoutSidebar',
})

const props = withDefaults(defineProps<LayoutSidebarProps>(), DEFAULT_LAYOUT_SIDEBAR_PROPS)

const styleSidebar = `width:${props.width}`
</script>

<style lang="less" src="./style/index.less"></style>
