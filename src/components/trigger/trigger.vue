<template>
  <div ref="triggerRef" v-on="EventList" >
    <!-- <slot name="trigger" /> -->
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, onBeforeUnmount, inject } from 'vue'
import type { Ref, CSSProperties, ComputedRef } from 'vue'
import { getClsPrefix } from '../_utils/global-config'
import type { TriggerEmits, TriggerProps } from './interface'
import type { PopupPosRec } from './constants'

const triggerPopupPosRec: Ref<PopupPosRec | undefined> = ref(
  inject('triggerPopupPosRec', undefined)
)
const popupVisible: Ref<boolean> = ref(inject('triggerPopupVisible', false))

//获取元素，力求计算出元素的位置，从而计算下拉框的位置
const triggerRef: Ref = ref<HTMLElement>()
const popupRef: Ref = ref<HTMLElement>()
// const visible: Ref = ref(false)
// let triggerPositionRec: DOMRect = new DOMRect()

defineOptions({
  name: 'Trigger'
})

const props = withDefaults(defineProps<TriggerProps>(), {
  clickOutsideToClose: true,
  disabled: false,
  position: 'bottom',
  trigger: 'click'
})

const emits = defineEmits<TriggerEmits>()

// let popupStyleRec: Ref<CSSProperties> = ref<CSSProperties>({})

// 定义处理隐藏事件的函数
const handleHide: (ev: MouseEvent) => void = (ev: MouseEvent): void => {
  // 发射隐藏事件
  emits('hide', ev)
}
// 定义处理可见性改变事件的函数
const handleVisibleChange: (ev: MouseEvent) => void = (ev: MouseEvent): void => {
  // 发射可见性改变事件
  emits('visibleChange', ev)
}
// 定义处理显示事件的函数
const handleShow: (ev: MouseEvent) => void = (ev: MouseEvent): void => {
  // 发射显示事件
  emits('show', ev)
}

// 定义处理点击事件的函数
const handleClick: (ev: MouseEvent) => void = (ev: MouseEvent): void => {
  // 如果触发方式是点击
  if (props.trigger === 'click') {
    // 改变可见性并执行显示和隐藏的函数
    changeVisibleAndExitShowAndHide(ev)
    // 如果可见，则添加点击外部关闭弹出框的事件监听，否则移除监听
    // popupVisible.value === true
    //   ? document.addEventListener('click', closePopupWhenClickOutside)
    //   : document.removeEventListener('click', closePopupWhenClickOutside)
  }
}

// 点击外部关闭弹出框的函数
// const closePopupWhenClickOutside: (ev: MouseEvent) => void = (ev: MouseEvent) => {
//   // 检查点击的区域是否在触发器外部
//   let isClickAreaOutOfPopup = !(triggerRef.value as HTMLElement).contains(ev.target as HTMLElement)
//   // 如果点击的区域不在触发器内部
//   if (isClickAreaOutOfPopup) {
//     // 关闭弹出框
//     popupVisible.value = false
//   }
// }

// 改变可见性并执行显示和隐藏的函数
const changeVisibleAndExitShowAndHide: (ev: MouseEvent) => void = (ev: MouseEvent): void => {
  // 切换可见性状态
  popupVisible.value = !popupVisible.value
  // 根据可见性执行显示或隐藏的函数
  popupVisible.value === true ? handleShow(ev) : handleHide(ev)
  // 处理可见性改变事件
  handleVisibleChange(ev)
}

// 处理鼠标移入和移出触发器的函数
const handleMouseEnterAndLeave: (ev: MouseEvent) => void = (ev: MouseEvent): void => {
  // 如果触发方式是鼠标悬停
  if (props.trigger === 'hover') {
    // 改变可见性并执行显示和隐藏的函数
    changeVisibleAndExitShowAndHide(ev)
  }
}

// 处理触发器聚焦和失焦的函数
const handleFocusInAndOut: (ev: MouseEvent) => void = (ev: MouseEvent): void => {
  // 如果触发方式是聚焦
  if (props.trigger === 'focus') {
    // 改变可见性并执行显示和隐藏的函数
    changeVisibleAndExitShowAndHide(ev)
  }
}

// 不同触发事件对应的处理函数
const EventList = {
  click: handleClick,
  mouseenter: handleMouseEnterAndLeave,
  mouseleave: handleMouseEnterAndLeave,
  focusin: handleFocusInAndOut,
  focusout: handleFocusInAndOut
}

//获取触发器Trigger的位置大小信息的函数
const getTriggerPositionRec: () => DOMRect = () => {
  return (triggerRef.value as HTMLElement).getBoundingClientRect()
}

//根据参数position调整获得的数据的函数
const getPopupRecWithPosition: (triggerRec: DOMRect) => PopupPosRec = (triggerRec: DOMRect) => {
  let position: PopupPosRec = {
    top: '',
    left: '',
    bottom: '',
    right: ''
  }
  // position样式里的bottom和DomRect里的bottom，代表的是不同的计算距离方式
  // position里写的是浏览器布局中的top/left什么的，DomRect里的就不是了
  // 参考链接：https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect
  switch (props.position) {
    case 'bottom': {
      Object.assign(position, {
        top: `${triggerRec.bottom}px`,
        left: `${triggerRec.left}px`
      })
      break
    }
    case 'top': {
      Object.assign(position, {
        top: `${triggerRec.top - triggerRec.height}px`,
        left: `${triggerRec.left}px`
      })
      break
    }
    //默认下左
    case 'left': {
      Object.assign(position, {
        top: `${triggerRec.bottom}px`,
        left: `${0}px`
      })
      break
    }
    //默认下右
    case 'right': {
      Object.assign(position, {
        top: `${triggerRec.bottom}px`,
        right: `${0}px`
      })
      break
    }
  }
  triggerPopupPosRec.value = position
  return position
}

// triggerPopupPosRec = computed(() => getPopupRecWithPosition(getTriggerPositionRec()))

//更新触发器的下拉框的样式信息，内部调用了getTriggerPositionRec
// const updatePopupPostion: () => void = () => {
//   const triggerPositionRec: DOMRect = getTriggerPositionRec()
//   // 获得逻辑判断过后的应该具备的下拉框位置样式信息，根据触发器位置大小信息
//   const position: popupPositionRecType = getPopupRecWithPosition(triggerPositionRec)
//   // 样式赋值
//   Object.assign(popupStyleRec.value, {
//     top: position.top,
//     left: position.left,
//     bottom: position.bottom,
//     right: position.right
//   })
// }

onMounted(() => {
  // updatePopupPostion()
  const triggerPositionRec: DOMRect = getTriggerPositionRec()
  // 获得逻辑判断过后的应该具备的下拉框位置样式信息，根据触发器位置大小信息
  getPopupRecWithPosition(triggerPositionRec)
})

onBeforeUnmount(() => {
  //在卸载的时候移出事件监听器
  // document.removeEventListener('click', closePopupWhenClickOutside)
})
</script>
