<template>
  <div :class="[clsModalWrapper]">
    <div :class="[clsModalContent]">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { ComputedRef } from 'vue'
import { getClsPrefix } from '../_utils/global-config'

defineOptions({
  name: 'ModalContent',
})

const clsModalWrapper: ComputedRef<string[]> = computed(() => [`${getClsPrefix() + 'modal-wrapper'} `])
const clsModalContent: ComputedRef<string[]> = computed(() => [`${getClsPrefix()}modal-content`])
</script>

<style lang="less" src="./style/index.less"></style>
