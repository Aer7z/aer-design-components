<template>
  <button @click="handleClick(true)">Open Modal</button>
  <Teleport to="body">
    <div :class="[clsModalWrapper]" v-show="visible" tabindex="-1">
      <div :class="[clsModalContent]">
        <button :class="[clsModalHeaderButton]" @click="handleClick(false)">x</button>
        <div :class="[clsModalHeader]">
          {{ title }}
        </div>
        <div :class="[clsModalBody]">
          {{ body }}
        </div>
        <div :class="[clsModalFooter]">
          <button :class="[clsModalFooterButton]" @click="handleOk">取消</button>
          <button :class="[clsModalFooterButton]" @click="handleCancel">确定</button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import type { ComputedRef } from 'vue'
import type { ModalEmits, ModalProps } from './interface'
import { getClsPrefix } from '../_utils/global-config'

defineOptions({
  name: 'Modal'
})

const props = withDefaults(defineProps<ModalProps>(), {
  title: '暂无内容',
  body: '暂无内容'
})

let visible = ref(false)

const clsModalWrapper: ComputedRef<string[]> = computed(() => [`${getClsPrefix()}modal-wrapper`])

const clsModalContent: ComputedRef<string[]> = computed(() => [`${getClsPrefix()}modal-content`])
const clsModalHeader: ComputedRef<string[]> = computed(() => [`${getClsPrefix()}modal-header`])
const clsModalHeaderButton: ComputedRef<string[]> = computed(() => [
  `${getClsPrefix()}modal-header-button`
])
const clsModalBody: ComputedRef<string[]> = computed(() => [`${getClsPrefix()}modal-body`])
const clsModalFooter: ComputedRef<string[]> = computed(() => [`${getClsPrefix()}modal-footer`])
const clsModalFooterButton: ComputedRef<string[]> = computed(() => [
  `${getClsPrefix()}modal-footer-button`
])

const handleClick: (isVisible: boolean) => void = (isVisible: boolean = true): void => {
  visible.value = isVisible
}
const emits = defineEmits<ModalEmits>()

const handleOk: (ev: MouseEvent) => void = (ev: MouseEvent): void => {
  visible.value = false
  emits('ok', ev)
}
const handleCancel: (ev: MouseEvent) => void = (ev: MouseEvent): void => {
  visible.value = false
  emits('cancel', ev)
}
</script>

<style lang="less" src="./style/modal.less"></style>
