<template>
  <div :class="clsLayout">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { getClsPrefix } from '@/components/_utils/global-config'

defineOptions({
  name: 'Layout',
})

const clsLayout: string = `${getClsPrefix()}layout`
</script>

<style lang="less" src="./style/index.less"></style>
