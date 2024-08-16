<template>
  <div :class="clsLayoutFooter" :style="styleFooter">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { DEFAULT_LAYOUT_FOOTER_PROPS, type LayoutFooterProps } from './interface'
import { getClsPrefix } from '../_utils/global-config'

defineOptions({
  name: 'LayoutFooter',
})
const props = withDefaults(defineProps<LayoutFooterProps>(), DEFAULT_LAYOUT_FOOTER_PROPS)

const styleFooter = `height:${props.height};background-color:${props.backgroundColor}`

const clsLayoutFooter: string = `${getClsPrefix()}layout-footer`
</script>

<style lang="less" src="./style/index.less"></style>
