<template>
  <div :class="clsLayoutHeader">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { ComputedRef } from 'vue'
import type {} from './interface'
import { getClsPrefix } from '../_utils/global-config'

defineOptions({
  name: 'LayoutHeader',
})

const clsLayoutHeader: ComputedRef<string[]> = computed(() => [`${getClsPrefix()}layout-header`])
</script>

<style lang="less" src="./style/index.less"></style>
