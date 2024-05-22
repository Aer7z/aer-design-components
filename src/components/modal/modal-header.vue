<template>
  <div :class="[clsModalHeader]">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import type { ComputedRef } from 'vue'
import type { ModalEmits, ModalProps } from './interface'
import { getClsPrefix } from '../_utils/global-config'
import Trigger from '../trigger/index'

defineOptions({
  name: 'ModalHeader'
})

let visible = ref(false)

const emits = defineEmits<ModalEmits>()

const clsModalHeader: ComputedRef<string[]> = computed(() => [`${getClsPrefix()}modal-header`])
</script>

<style lang="less" src="./style/modal.less"></style>
