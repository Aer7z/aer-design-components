<template>
  <span :class="[clsTypographyTextSize, clsTypographyTextColor]">
    <slot></slot>
  </span>
</template>

<script lang="ts" setup>
import { getClsPrefix } from '@/components/_utils/global-config'
import { type TypographyTextProps } from './interface'

defineOptions({
  name: 'TypographyText',
})

const props = withDefaults(defineProps<TypographyTextProps>(), {
  size: 'medium',
  color: 'black',
})

const clsTypographyTextSize = `${getClsPrefix()}text-size-${props.size}`
const clsTypographyTextColor = `${getClsPrefix()}text-color-${props.color}`
</script>

<style lang="less" src="./style/index.less"></style>
