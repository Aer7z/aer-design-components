<template>
  <div :class="clsLayoutContent" :style="styleContent">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { ComputedRef } from 'vue'
import { getClsPrefix } from '../_utils/global-config'
import { DEFAULT_LAYOUT_CONTENT_PROPS, type LayoutContentProps } from './interface'

defineOptions({
  name: 'LayoutContent',
})

const props = withDefaults(defineProps<LayoutContentProps>(), DEFAULT_LAYOUT_CONTENT_PROPS)

const styleContent = `height:${props.height};background-color:${props.backgroundColor}`

const clsLayoutContent: ComputedRef<string[]> = computed(() => [`${getClsPrefix()}layout-content`])
</script>

<style lang="less" src="./style/index.less"></style>
