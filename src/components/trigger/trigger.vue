<template>
  <div ref="triggerRef" :class="[styleClassTrigger]">
    <div @click="handleClick">
      <slot />
    </div>
    <Teleport to="body">
      <div ref="popupRef" v-show="visible" :class="[styleClassTriggerPopup]">
        <div :class="[styleClassTriggerPopupWrapper]" :style="[popupStyleRec]">
          <!-- <div :class="[styleClassTriggerPopupContent]"> -->
          <slot name="content" />
          <!-- </div> -->
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue'
import type { Ref } from 'vue'
import { getComponentsClassPrefix } from '../_utils/global-config'
import type { TriggerEmits, TriggerProps } from './interface'

//获取元素，力求计算出元素的位置，从而计算下拉框的位置
const triggerRef: Ref = ref<HTMLElement>()
const popupRef: Ref = ref<HTMLElement>()
const visible: Ref = ref(false)

defineOptions({
  name: 'Trigger'
})

const props = withDefaults(defineProps<TriggerProps>(), {
  clickOutsideToClose: true,
  disabled: false,
  position: 'bottom',
  trigger: 'click'
})

const styleClassTrigger: Array<string> = computed(() => [
  `${getComponentsClassPrefix()}trigger`
]).value

const styleClassTriggerPopup: Array<string> = computed(() => [
  `${getComponentsClassPrefix()}trigger-popup`
]).value

const styleClassTriggerPopupWrapper: Array<string> = computed(() => [
  `${getComponentsClassPrefix()}trigger-popup-wrapper`
]).value

// const styleClassTriggerPopupContent: Array<string> = computed(() => [
//   `${getComponentsClassPrefix()}trigger-popup-content`
// ]).value

const emits = defineEmits<TriggerEmits>()

let triggerRec = ref()

let popupStyleRec = {
  top: '',
  left: ''
}

// const handleHide: (ev: MouseEvent) => void = (ev: MouseEvent): void => {
//   emits('hide', ev)
// }
// const handleVisibleChange: (ev: MouseEvent) => void = (ev: MouseEvent): void => {
//   emits('visibleChange', ev)
// }
// const handleShow: (ev: MouseEvent) => void = (ev: MouseEvent): void => {
//   emits('show', ev)
// }

const handleClick: (ev: MouseEvent) => void = (ev: MouseEvent): void => {
  visible.value = !visible.value
}

onMounted(() => {
  triggerRec.value = (triggerRef.value as HTMLElement).getBoundingClientRect()
  console.log(triggerRec.value)

  // let { ...popupStyleRec } = triggerRec
  // console.log(popupStyleRec)

  // console.log(popupRef.value)
  // popupRef.value.style.top = `top:${triggerRec.top}`

  // console.log(popupRef.value)
  popupStyleRec.top = `${triggerRec.value.top}px`
  popupStyleRec.left = `${triggerRec.value.left}px`
})
</script>

<style lang="less" src="./style/trigger.less"></style>
