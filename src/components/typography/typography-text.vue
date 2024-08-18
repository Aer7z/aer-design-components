<template>
  <span :class="[clsTypographyTextSize, clsTypographyTextColor]">
    <slot></slot>
  </span>
</template>

<script lang="ts" setup>
import { getClsPrefix } from '../_utils/global-config'
import { DEFAULT_TYPOGRAPHY_TEXT_PROPS, type TypographyTextProps } from './interface'

defineOptions({
  name: 'TypographyText',
})

const props = withDefaults(defineProps<TypographyTextProps>(), DEFAULT_TYPOGRAPHY_TEXT_PROPS)

const clsTypographyTextSize = `${getClsPrefix()}text-size-${props.size}`
const clsTypographyTextColor = `${getClsPrefix()}text-color-${props.color}`
</script>

<style lang="less" src="./style/index.less"></style>
