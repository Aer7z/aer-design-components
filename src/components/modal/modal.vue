<template>
  <slot></slot>
</template>

<script lang="ts" setup>
import { ref, computed, provide, onBeforeMount } from 'vue'
import type { ComputedRef, Ref } from 'vue'
import type { ModalEmits, ModalProps } from './interface'
import { getClsPrefix } from '../_utils/global-config'
import type { PopupPosRec } from '../trigger/constants'

defineOptions({
  name: 'Modal'
})

const props = withDefaults(defineProps<ModalProps>(), {
  mask: true,
  maskClosable: false
})
provide('modalProps', props)

let visible = ref(false)

const handleClick: (isVisible: boolean) => void = (isVisible: boolean = true): void => {
  visible.value = isVisible
}
const emits = defineEmits<ModalEmits>()

function initTrigger() {
  const triggerPopupPosRec: Ref<PopupPosRec> = ref({
    top: '',
    left: '',
    bottom: '',
    right: ''
  })
  provide('triggerPopupPosRec', triggerPopupPosRec)
  const popupVisible: Ref<boolean> = ref(false)
  provide('triggerPopupVisible', popupVisible)
}
onBeforeMount(() => {
  initTrigger()
})
</script>

<style lang="less" src="./style/modal.less"></style>
