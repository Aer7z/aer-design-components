<template>
  <Teleport to="body">
    <div
      :class="[clsTriggerPopup]"
      ref="popupRef"
      :style="[triggerPopupPosRec]"
      v-show="popupVisible"
    >
      <slot></slot>
    </div>
  </Teleport>
</template>

<script lang="ts" setup>
import { ref, computed, watch, onMounted, onBeforeUnmount, inject } from 'vue'
import type { Ref, CSSProperties, ComputedRef } from 'vue'
import { getClsPrefix } from '../_utils/global-config'
import type { TriggerEmits, TriggerPopupProps } from './interface'
import type { PopupPosRec } from './constants'

const triggerPopupPosRec: Ref<PopupPosRec> = ref(
  inject('triggerPopupPosRec', {
    top: '',
    left: '',
    bottom: '',
    right: ''
  })
)

const props = withDefaults(defineProps<TriggerPopupProps>(), {
  clickOutsideToClose: true
})

const popupVisible: Ref<boolean> = ref(inject('triggerPopupVisible', false))

watch(popupVisible, (newVal: boolean, oldVal: boolean) => {
  if (props.clickOutsideToClose === false) {
    return
  }
  if (newVal === true) {
    document.addEventListener('click', closePopupWhenClickOutside)
  } else {
    document.removeEventListener('click', closePopupWhenClickOutside)
  }
})
//获取元素，力求计算出元素的位置，从而计算下拉框的位置
const popupRef: Ref = ref<HTMLElement>()

const closePopupWhenClickOutside: (ev: MouseEvent) => void = (ev: MouseEvent) => {
  // 检查点击的区域是否在触发器外部
  let isClickAreaOutOfPopup = !(popupRef.value as HTMLElement).contains(ev.target as HTMLElement)
  // 如果点击的区域不在触发器内部
  if (isClickAreaOutOfPopup) {
    // 关闭弹出框
    popupVisible.value = false
  }
}

defineOptions({
  name: 'TriggerPopup'
})

// `clsTriggerPopup` 提供了触发器弹出窗口的样式类。
const clsTriggerPopup: ComputedRef<string[]> = computed(() => [`${getClsPrefix()}trigger-popup`])

// let popupStyleRec: Ref<CSSProperties> = ref<CSSProperties>({})

//更新触发器的下拉框的样式信息，内部调用了getTriggerPositionRec
// const updatePopupPostion: (popupPosRec: PopupPosRec) => void = (popupPosRec: PopupPosRec) => {
//   // 获得逻辑判断过后的应该具备的下拉框位置样式信息，根据触发器位置大小信息
//   const style: PopupPosRec = popupPosRec
//   // 样式赋值
//   Object.assign(popupStyleRec.value, {
//     top: style.top,
//     left: style.left,
//     bottom: style.bottom,
//     right: style.right
//   })
// }
// updatePopupPostion(props.popupPosRec)

onMounted(() => {
  // updatePopupPostion(props.popupPosRec)
  // updatePopupPostion(triggerPopupPosRec.value)
})

onBeforeUnmount(() => {
  //在卸载的时候移出事件监听器
  document.removeEventListener('click', closePopupWhenClickOutside)
})
</script>
