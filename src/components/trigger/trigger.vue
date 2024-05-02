<template>
  <div ref="triggerRef" :class="[clsTrigger]">
    <div v-on="EventList">
      <slot />
    </div>
    <Teleport to="body">
      <div ref="popupRef" v-show="visible" :class="[clsTriggerPopupWrapper]">
        <div :class="[clsTriggerPopup]" :style="[popupStyleRec]">
          <!-- <div :class="[clsTriggerPopupContent]"> -->
          <slot name="content" />
          <!-- </div> -->
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import type { Ref, CSSProperties, ComputedRef } from 'vue'
import { getClsPrefix } from '../_utils/global-config'
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

// const setTriggerWay: Function = () => {}

// 这些计算属性用于生成不同组件的样式类。
// 每个属性都利用 `getClsPrefix()` 函数确保类名前缀的一致性。
// `clsTrigger` 提供了触发器的样式类。
const clsTrigger: ComputedRef<string[]> = computed(() => [`${getClsPrefix()}trigger`])
// `clsTriggerPopup` 提供了触发器弹出窗口的样式类。
const clsTriggerPopup: ComputedRef<string[]> = computed(() => [`${getClsPrefix()}trigger-popup`])
// `clsTriggerPopupWrapper` 提供了触发器弹出窗口的包装器的样式类。
const clsTriggerPopupWrapper: ComputedRef<string[]> = computed(() => [
  `${getClsPrefix()}trigger-popup-wrapper`
])

const emits = defineEmits<TriggerEmits>()

let triggerRec = new DOMRect()

let popupStyleRec = ref<CSSProperties>({})

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

// 定义处理触发器的点击事件的函数
const handleClick: (ev: MouseEvent) => void = (ev: MouseEvent): void => {
  if (props.trigger === 'click') {
    // 切换触发器下拉框的可见性状态
    visible.value = !visible.value
    // 如果可见性为真，则执行显示事件处理函数；否则执行隐藏事件处理函数
    if (visible.value) {
      //添加点击触发器外部区域关闭下拉框的函数
      document.addEventListener('click', closePopupOnClickOutside)
      handleShow(ev)
    } else {
      //移除点击触发器外部区域关闭下拉框的函数
      document.removeEventListener('click', closePopupOnClickOutside)
      handleHide(ev)
    }
    // 执行可见性改变事件处理函数
    handleVisibleChange(ev)
  }
}
// 定义鼠标移入触发器时的函数
const handleMouseEnter: (ev: MouseEvent) => void = (ev: MouseEvent): void => {
  // 切换触发器下拉框的可见性状态
  if (props.trigger === 'hover') {
    // 切换触发器下拉框的可见性状态
    visible.value = !visible.value
    // 如果可见性为真，则执行显示事件处理函数；否则执行隐藏事件处理函数
    if (visible.value) {
      handleShow(ev)
    } else {
      handleHide(ev)
    }
    // 执行可见性改变事件处理函数
    handleVisibleChange(ev)
  }
}
// 定义鼠标移出触发器时的函数
const handleMouseLeave: (ev: MouseEvent) => void = (ev: MouseEvent): void => {
  // 切换触发器下拉框的可见性状态
  if (props.trigger === 'hover') {
    // 切换触发器下拉框的可见性状态
    visible.value = !visible.value
    // 如果可见性为真，则执行显示事件处理函数；否则执行隐藏事件处理函数
    if (visible.value) {
      handleShow(ev)
    } else {
      handleHide(ev)
    }
    // 执行可见性改变事件处理函数
    handleVisibleChange(ev)
  }
}
// 定义触发器聚焦时的函数
const handleFocusIn: (ev: MouseEvent) => void = (ev: MouseEvent): void => {
  // 切换触发器下拉框的可见性状态
  if (props.trigger === 'focus') {
    // 切换触发器下拉框的可见性状态
    visible.value = !visible.value
    // 如果可见性为真，则执行显示事件处理函数；否则执行隐藏事件处理函数
    if (visible.value) {
      handleShow(ev)
    } else {
      handleHide(ev)
    }
    // 执行可见性改变事件处理函数
    handleVisibleChange(ev)
  }
}
// 定义触发器失焦时的函数
const handleFocusOut: (ev: MouseEvent) => void = (ev: MouseEvent): void => {
  // 切换触发器下拉框的可见性状态
  if (props.trigger === 'focus') {
    // 切换触发器下拉框的可见性状态
    visible.value = !visible.value
    // 如果可见性为真，则执行显示事件处理函数；否则执行隐藏事件处理函数
    if (visible.value) {
      handleShow(ev)
    } else {
      handleHide(ev)
    }
    // 执行可见性改变事件处理函数
    handleVisibleChange(ev)
  }
}
// 如果点击了触发器以外的区域则关闭触发器的下拉框
const closePopupOnClickOutside: (ev: MouseEvent) => void = (ev: MouseEvent) => {
  if (!(triggerRef.value as HTMLElement).contains(ev.target as HTMLElement)) {
    visible.value = false
    // console.log(2223)
  }
}

const EventList = {
  click: handleClick,
  mouseenter: handleMouseEnter,
  mouseleave: handleMouseLeave,
  focusin: handleFocusIn,
  focusout: handleFocusOut
}

//获取触发器Trigger的位置大小信息的函数
const getTriggerRec: Function = () => (triggerRef.value as HTMLElement).getBoundingClientRect()
//更新触发器的下拉框的样式信息，内部调用了getTriggerRec
const updatePopupStyle: Function = () => {
  triggerRec = getTriggerRec()

  // console.log(triggerRec)
  // 获得逻辑判断过后的应该具备的下拉框位置样式信息，根据触发器位置大小信息
  const style = getPopupRecWithPosition(triggerRec)
  // 样式赋值
  popupStyleRec.value = {
    top: style.top,
    left: style.left,
    bottom: style.bottom,
    right: style.right
  }
}
//根据参数position调整获得的数据的函数
const getPopupRecWithPosition: Function = (triggerRec: DOMRect) => {
  let style = {}
  // style样式里的bottom和DomRect里的bottom，代表的是不同的计算距离方式
  // style里写的是浏览器布局中的top/left什么的，DomRect里的就不是了
  // 参考链接：https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect
  // console.log(triggerRec)
  switch (props.position) {
    case 'bottom': {
      style = {
        top: `${triggerRec.bottom}px`,
        left: `${triggerRec.left}px`
      }
      break
    }
    case 'top': {
      style = {
        top: `${triggerRec.top - triggerRec.height}px`,
        left: `${triggerRec.left}px`
      }
      break
    }
    //默认下左
    case 'left': {
      style = {
        top: `${triggerRec.bottom}px`,
        left: `${0}px`
      }
      break
    }
    //默认下右
    case 'right': {
      style = {
        top: `${triggerRec.bottom}px`,
        right: `${0}px`
      }
      break
    }
  }
  return style
}

onMounted(() => {
  updatePopupStyle()
})

onBeforeUnmount(() => {
  //在卸载的时候移出事件监听器
  document.removeEventListener('click', closePopupOnClickOutside)
})
</script>

<style lang="less" src="./style/trigger.less"></style>
