<template>
  <div :class="[clsModalHeader]">
    <div v-if="isCancelShow" :class="clsModalHeaderButton" @click="handleCancel">
      <slot name="cancel"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { getCurrentInstance } from 'vue'
import type { ModalEmits } from './interface'
import { getClsPrefix } from '@/components/_utils/global-config'

defineOptions({
  name: 'ModalHeader',
})
const emits = defineEmits<ModalEmits>()

const instance = getCurrentInstance()
const isCancelShow = !!instance?.slots.cancel

const handleCancel = (ev: MouseEvent) => {
  emits('cancel', ev)
}

const clsModalHeader: string = `${getClsPrefix()}modal-header`
const clsModalHeaderButton: string = `${getClsPrefix()}modal-header-button`
</script>

<style lang="less" src="./style/index.less"></style>
