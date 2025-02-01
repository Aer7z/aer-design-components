<template>
  <div :class="[clsOverlayWrapper, clsOverlayMask]" tabindex="-1"><slot></slot></div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { ComputedRef } from 'vue'
import { getClsPrefix } from '@/components/_utils/global-config'
import { type OverlayProps } from './interface'

const props = withDefaults(defineProps<OverlayProps>(), {
  isMaskShow: true,
})

const clsOverlayWrapper: string = `${getClsPrefix() + 'overlay-wrapper'} `
const clsOverlayMask: string = `${props.isMaskShow ? getClsPrefix() + 'overlay-wrapper-mask' : ''}`
</script>

<style lang="less" src="./style/index.less"></style>
