<template>
  <div :class="[clsModalFooter]">
    <slot></slot>
    <div>
      <div v-if="isOkShow" :class="clsModalFooterButton" @click="handleOk">
        <slot name="ok"></slot>
      </div>
      <div v-if="isCancelShow" :class="clsModalFooterButton" @click="handleCancel">
        <slot name="cancel"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getCurrentInstance } from 'vue'
import type { ModalEmits } from './interface'
import { getClsPrefix } from '@/components/_utils/global-config'

defineOptions({
  name: 'ModalFooter',
})

const emits = defineEmits<ModalEmits>()

const instance = getCurrentInstance()
const isOkShow = !!instance?.slots.ok
const isCancelShow = !!instance?.slots.cancel

const handleOk = (ev: MouseEvent) => {
  emits('ok', ev)
}

const handleCancel = (ev: MouseEvent) => {
  emits('cancel', ev)
}

const clsModalFooter: string = `${getClsPrefix()}modal-footer`
const clsModalFooterButton: string = `${getClsPrefix()}modal-footer-button`
</script>

<style lang="less" src="./style/index.less"></style>
