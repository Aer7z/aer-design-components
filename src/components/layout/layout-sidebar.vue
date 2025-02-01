<template>
  <div :style="styleSidebar">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { type LayoutSidebarProps } from './interface'

defineOptions({
  name: 'LayoutSidebar',
})

const props = withDefaults(defineProps<LayoutSidebarProps>(), {
  width: '20%',
  backgroundColor: 'transparent',
})

const styleSidebar = `width:${props.width};background-color:${props.backgroundColor}`
</script>

<style lang="less" src="./style/index.less"></style>
