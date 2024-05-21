<template>
  <TriggerPopup :clickOutsideToClose="maskClosable" :innerElementRef="triggerPopupRef">
    <template v-slot:default>
      <div :class="[clsModalWrapper, clsModalWrapperMask]" tabindex="-1">
        <div :class="[clsModalContent]" ref="triggerPopupRef">
          <button :class="[clsModalHeaderButton]" @click.stop="handleClick(false)">x</button>
          <slot></slot>
        </div>
      </div>
    </template>
  </TriggerPopup>
</template>

<script lang="ts" setup>
import { TriggerPopup } from '../trigger/index'
import { ref, computed, inject } from 'vue'
import type { ComputedRef, Ref } from 'vue'
import type { ModalEmits, ModalProps } from './interface'
import { getClsPrefix } from '../_utils/global-config'

defineOptions({
  name: 'ModalTriggerPopup'
})

const isMaskshow: Ref<boolean> = ref(inject('modalProps', { mask: true }).mask)
const maskClosable: Ref<boolean> = ref(inject('modalProps', { maskClosable: false }).maskClosable)

//获取内部元素最外层，这样传给triggerPopup之后，可以确定点击的区域是否在内部，避免遮蔽层也是内部
const triggerPopupRef: Ref<HTMLElement | undefined> = ref<HTMLElement>()

const popupVisible: Ref<boolean> = ref(inject('triggerPopupVisible', false))

const handleClick: (isVisible: boolean) => void = (isVisible: boolean): void => {
  popupVisible.value = isVisible
}
const emits = defineEmits<ModalEmits>()

// const clsModalWrapper: ComputedRef<string[]> = computed(() => [
//   `${isMaskshow.value ? getClsPrefix() + 'modal-wrapper' : ''} `
// ])
const clsModalWrapper: ComputedRef<string[]> = computed(() => [
  `${getClsPrefix() + 'modal-wrapper'} `
])

const clsModalWrapperMask: ComputedRef<string[]> = computed(() => [
  `${isMaskshow.value ? getClsPrefix() + 'modal-wrapper-mask' : ''}`
])

const clsModalContent: ComputedRef<string[]> = computed(() => [`${getClsPrefix()}modal-content`])
const clsModalHeaderButton: ComputedRef<string[]> = computed(() => [
  `${getClsPrefix()}modal-header-button`
])
</script>

<style lang="less" src="./style/modal.less"></style>
