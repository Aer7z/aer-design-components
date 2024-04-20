<template>
  <button @click="handleClick(true)">Open Modal</button>
  <Teleport to="body">
    <div :class="[modalWrapper]" v-show="visible" tabindex="-1">
      <div :class="[modalContent]">
        <button :class="[modalHeaderButton]" @click="handleClick(false)">x</button>
        <div :class="[modalHeader]">
          {{ title }}
        </div>
        <div :class="[modalBody]">
          {{ body }}
        </div>
        <div :class="[modalFooter]">
          <button :class="[modalFooterButton]" @click="handleOk">取消</button>
          <button :class="[modalFooterButton]" @click="handleCancel">确定</button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import type { ModalEmits, ModalProps } from './interface'
import { getComponentsClassPrefix } from '../_utils/global-config'

defineOptions({
  name: 'Modal'
})

const props = withDefaults(defineProps<ModalProps>(), {
  title: '暂无内容',
  body: '暂无内容'
})

let visible = ref(false)

const modalWrapper: Array<string> = computed(() => [
  `${getComponentsClassPrefix()}modal-wrapper`
]).value

const modalContent: Array<string> = computed(() => [
  `${getComponentsClassPrefix()}modal-content`
]).value
const modalHeader: Array<string> = computed(() => [
  `${getComponentsClassPrefix()}modal-header`
]).value
const modalHeaderButton: Array<string> = computed(() => [
  `${getComponentsClassPrefix()}modal-header-button`
]).value
const modalBody: Array<string> = computed(() => [`${getComponentsClassPrefix()}modal-body`]).value
const modalFooter: Array<string> = computed(() => [
  `${getComponentsClassPrefix()}modal-footer`
]).value
const modalFooterButton: Array<string> = computed(() => [
  `${getComponentsClassPrefix()}modal-footer-button`
]).value

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
