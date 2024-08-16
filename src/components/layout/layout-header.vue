<template>
  <div :class="clsLayoutHeader" :style="styleHeader">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { DEFAULT_LAYOUT_HEADER_PROPS, type LayoutHeaderProps } from './interface'
import { getClsPrefix } from '../_utils/global-config'

defineOptions({
  name: 'LayoutHeader',
})

const props = withDefaults(defineProps<LayoutHeaderProps>(), DEFAULT_LAYOUT_HEADER_PROPS)

const styleHeader = `height:${props.height};background-color:${props.backgroundColor}`

const clsLayoutHeader: string = `${getClsPrefix()}layout-header`
</script>

<style lang="less" src="./style/index.less"></style>
