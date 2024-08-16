<template>
  <div :class="clsLayoutContent">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { ComputedRef } from 'vue'
import { getClsPrefix } from '../_utils/global-config'

defineOptions({
  name: 'LayoutContent',
})

const clsLayoutContent: ComputedRef<string[]> = computed(() => [`${getClsPrefix()}layout-content`])
</script>

<style lang="less" src="./style/index.less"></style>
