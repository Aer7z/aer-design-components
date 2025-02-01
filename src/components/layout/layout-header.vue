<template>
  <div :class="clsLayoutHeader" :style="styleHeader">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import {  type LayoutHeaderProps } from './interface'
import { getClsPrefix } from '@/components/_utils/global-config'

defineOptions({
  name: 'LayoutHeader',
})

const props = withDefaults(defineProps<LayoutHeaderProps>(), {
  height: '30px',
  backgroundColor: 'transparent',
})

const styleHeader = `height:${props.height};background-color:${props.backgroundColor}`

const clsLayoutHeader: string = `${getClsPrefix()}layout-header`
</script>

<style lang="less" src="./style/index.less"></style>
