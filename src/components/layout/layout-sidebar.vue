<template>
  <div :style="styleSidebar">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { DEFAULT_LAYOUT_SIDEBAR_PROPS, type LayoutSidebarProps } from './interface'

defineOptions({
  name: 'LayoutSidebar',
})

const props = withDefaults(defineProps<LayoutSidebarProps>(), DEFAULT_LAYOUT_SIDEBAR_PROPS)

const styleSidebar = `width:${props.width};background-color:${props.backgroundColor}`
</script>

<style lang="less" src="./style/index.less"></style>
