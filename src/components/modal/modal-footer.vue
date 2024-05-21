<template>
  <div :class="[clsModalFooter]">
    <slot></slot>

    <div v-if="isOkShow" :class="clsModalFooterButton" @click.stop="handleOk">
      <slot name="ok"></slot>
    </div>
    <div v-if="isCancelShow" :class="clsModalFooterButton" @click.stop="handleCancel">
      <slot name="cancel"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, getCurrentInstance, inject } from 'vue'
import type { ComputedRef, Ref } from 'vue'
import type { ModalEmits, ModalProps } from './interface'
import { getClsPrefix } from '../_utils/global-config'
import Trigger from '../trigger/index'

defineOptions({
  name: 'ModalFooter'
})

// let visible = ref(false)

const popupVisible: Ref<boolean> = ref(inject('triggerPopupVisible', false))

const emits = defineEmits<ModalEmits>()

const clsModalFooter: ComputedRef<string[]> = computed(() => [`${getClsPrefix()}modal-footer`])
const clsModalFooterButton: ComputedRef<string[]> = computed(() => [
  `${getClsPrefix()}modal-footer-button`
])
const instance = getCurrentInstance()
const isOkShow: ComputedRef<boolean> = computed(() => {
  // console.log(!!instance?.slots.ok)
  return !!instance?.slots.ok
})
const isCancelShow: ComputedRef<boolean> = computed(() => {
  // console.log(!!instance?.slots.cancel)
  return !!instance?.slots.cancel
})
const handleOk: (ev: MouseEvent) => void = (ev: MouseEvent): void => {
  popupVisible.value = false
  emits('ok', ev)
}
const handleCancel: (ev: MouseEvent) => void = (ev: MouseEvent): void => {
  popupVisible.value = false
  emits('cancel', ev)
}
</script>

<style lang="less" src="./style/modal.less"></style>
