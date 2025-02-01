<template>
  <div :class="clsLayoutFooter" :style="styleFooter">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { type LayoutFooterProps } from './interface'
import { getClsPrefix } from '@/components/_utils/global-config'

defineOptions({
  name: 'LayoutFooter',
})
const props = withDefaults(defineProps<LayoutFooterProps>(), {
  height: '30px',
  backgroundColor: 'transparent',
})

const styleFooter = `height:${props.height};background-color:${props.backgroundColor}`

const clsLayoutFooter: string = `${getClsPrefix()}layout-footer`
</script>

<style lang="less" src="./style/index.less"></style>
