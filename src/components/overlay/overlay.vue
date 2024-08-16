<template>
  <div :class="[clsOverlayWrapper, clsOverlayMask]" tabindex="-1"><slot></slot></div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { ComputedRef } from 'vue'
import { getClsPrefix } from '../_utils/global-config'
import { type OverlayProps, DEFAULT_OVERLAY_PROPS } from './interface'

const props = withDefaults(defineProps<OverlayProps>(), DEFAULT_OVERLAY_PROPS)

const clsOverlayWrapper: ComputedRef<string[]> = computed(() => [`${getClsPrefix() + 'overlay-wrapper'} `])
const clsOverlayMask: ComputedRef<string[]> = computed(() => [
  `${props.isMaskShow ? getClsPrefix() + 'overlay-wrapper-mask' : ''}`,
])
</script>

<style lang="less" src="./style/index.less"></style>
