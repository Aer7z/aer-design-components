<template>
  <div :class="clsLayoutFooter">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { ComputedRef } from 'vue'
import type {} from './interface'
import { getClsPrefix } from '../_utils/global-config'

defineOptions({
  name: 'LayoutFooter',
})

const clsLayoutFooter: ComputedRef<string[]> = computed(() => [`${getClsPrefix()}layout-footer`])
</script>

<style lang="less" src="./style/index.less"></style>
