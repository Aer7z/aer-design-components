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

const clsModalWrapper: ComputedRef<string[]> = computed(() => [`${getClsPrefix() + 'modal-wrapper'} `])
const clsModalContent: ComputedRef<string[]> = computed(() => [`${getClsPrefix()}modal-content`])
</script>

<style lang="less" src="./style/modal.less"></style>
