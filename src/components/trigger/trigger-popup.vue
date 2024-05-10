<template>
  <Teleport to="body">
    <div ref="popupRef" :class="[clsTriggerPopupWrapper]" v-show="popupVisible">
      <div :class="[clsTriggerPopup]" :style="[triggerPopupPosRec]">
        <!-- <div :class="[clsTriggerPopupContent]"> -->
        <slot></slot>
        <!-- </div> -->
      </div>
    </div>
  </Teleport>
</template>

<!-- <template>
  <slot :turnOnOrOff="click"></slot>l,
</template> -->

<script lang="ts" setup>
import { ref, computed, onMounted, onBeforeUnmount, inject } from 'vue'
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
const popupVisible: Ref<boolean> = ref(inject('triggerPopupVisible', false))

//获取元素，力求计算出元素的位置，从而计算下拉框的位置
// const triggerRef: Ref = ref<HTMLElement>()
const popupRef: Ref = ref<HTMLElement>()
// const visible: Ref = ref(false)
// let triggerPositionRec: DOMRect = new DOMRect()

defineOptions({
  name: 'TriggerPopup'
})

// `clsTriggerPopup` 提供了触发器弹出窗口的样式类。
const clsTriggerPopup: ComputedRef<string[]> = computed(() => [`${getClsPrefix()}trigger-popup`])
// `clsTriggerPopupWrapper` 提供了触发器弹出窗口的包装器的样式类。
const clsTriggerPopupWrapper: ComputedRef<string[]> = computed(() => [
  `${getClsPrefix()}trigger-popup-wrapper`
])

const props = withDefaults(defineProps<TriggerPopupProps>(), {
  // popupPosRec: DOMRect,
  visible: false
})

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
  // document.removeEventListener('click', closePopupWhenClickOutside)
})
</script>
