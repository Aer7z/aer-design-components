<template>
  <div :class="[clsModalWrapper]">
    <!-- <div :class="[clsModalWrapper, clsModalWrapperMask]" tabindex="-1"> -->
    <div :class="[clsModalContent]">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { TriggerPopup } from '../trigger/index'
import { computed } from 'vue'
import type { ComputedRef, Ref } from 'vue'
import type { ModalEmits, ModalProps } from './interface'
import { getClsPrefix } from '../_utils/global-config'
import { useModalPropsContext } from './context'

defineOptions({
  name: 'ModalContent',
})

// const { isMaskShow } = useModalPropsContext()

// //获取内部元素最外层，这样传给triggerPopup之后，可以确定点击的区域是否在内部，避免遮蔽层也是内部
// const triggerPopupRef: Ref<HTMLElement | undefined> = ref<HTMLElement>()

const clsModalWrapper: ComputedRef<string[]> = computed(() => [`${getClsPrefix() + 'modal-wrapper'} `])
// const clsModalWrapperMask: ComputedRef<string[]> = computed(() => [
//   `${isMaskShow ? getClsPrefix() + 'modal-wrapper-mask' : ''}`,
// ])
const clsModalContent: ComputedRef<string[]> = computed(() => [`${getClsPrefix()}modal-content`])
</script>

<style lang="less" src="./style/modal.less"></style>
