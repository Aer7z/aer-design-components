<template>
  <div :class="[clsModalBody]">
    <slot name="default"></slot>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import type { ComputedRef } from 'vue'
import type { ModalEmits, ModalProps } from './interface'
import { getClsPrefix } from '../_utils/global-config'
import Trigger from '../trigger/index'

defineOptions({
  name: 'ModalBody'
})

let visible = ref(false)

const emits = defineEmits<ModalEmits>()

const clsModalBody: ComputedRef<string[]> = computed(() => [`${getClsPrefix()}modal-body`])
</script>

<style lang="less" src="./style/modal.less"></style>
