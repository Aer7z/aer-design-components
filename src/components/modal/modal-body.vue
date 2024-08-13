<template>
  <div :class="[clsModalBody]">
    <slot name="default"></slot>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { ComputedRef } from 'vue'
import type { ModalEmits } from './interface'
import { getClsPrefix } from '../_utils/global-config'

defineOptions({
  name: 'ModalBody',
})

const emits = defineEmits<ModalEmits>()

const clsModalBody: ComputedRef<string[]> = computed(() => [`${getClsPrefix()}modal-body`])
</script>

<style lang="less" src="./style/modal.less"></style>
