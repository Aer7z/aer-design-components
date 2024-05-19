<template>
  <TriggerPopup>
    <template v-slot:default>
      <div :class="[clsModalWrapper]" tabindex="-1">
        <div :class="[clsModalContent]">
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
const popupVisible: Ref<boolean> = ref(inject('triggerPopupVisible', false))

const handleClick: (isVisible: boolean) => void = (isVisible: boolean): void => {
  popupVisible.value = isVisible
}
const emits = defineEmits<ModalEmits>()

const clsModalWrapper: ComputedRef<string[]> = computed(() => [`${getClsPrefix()}modal-wrapper`])

const clsModalContent: ComputedRef<string[]> = computed(() => [`${getClsPrefix()}modal-content`])
const clsModalHeaderButton: ComputedRef<string[]> = computed(() => [
  `${getClsPrefix()}modal-header-button`
])
</script>

<style lang="less" src="./style/modal.less"></style>
