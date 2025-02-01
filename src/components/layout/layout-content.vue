<template>
  <div :class="clsLayoutContent" :style="styleContent">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { getClsPrefix } from '@/components/_utils/global-config'
import {  type LayoutContentProps } from './interface'

defineOptions({
  name: 'LayoutContent',
})

const props = withDefaults(defineProps<LayoutContentProps>(), {
  height: '30px',
  backgroundColor: 'transparent',
})

const styleContent = `height:${props.height};background-color:${props.backgroundColor}`

const clsLayoutContent: string = `${getClsPrefix()}layout-content`
</script>

<style lang="less" src="./style/index.less"></style>
