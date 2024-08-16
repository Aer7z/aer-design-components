<template>
  <!-- <div :class="clsTest1"> -->
  <!-- <div v-if="isShowHeader">
    <slot name="Header"></slot>
  </div> -->
  <div :class="clsLayout">
    <slot></slot>
  </div>
  <!-- <div v-if="isShowFooter">
    <slot name="Footer"></slot>
  </div> -->
  <!-- </div> -->
</template>

<script lang="ts" setup>
import { getCurrentInstance } from 'vue'

import { computed } from 'vue'
import type { ComputedRef } from 'vue'
// import type { } from './interface'
import { getClsPrefix } from '../_utils/global-config'

defineOptions({
  name: 'Layout',
})

const instance = getCurrentInstance()
const isShowHeader = !!instance?.slots.Header
const isShowFooter = !!instance?.slots.Footer
const clsTest1 = 'testCls1'
const clsTest2 = 'testCls2'
// const clsFooter: ComputedRef<string[]> = computed(() => [`${getClsPrefix()}modal-footer`])

const clsLayout: ComputedRef<string[]> = computed(() => [`${getClsPrefix()}layout`])
</script>

<style lang="less" src="./style/index.less"></style>
