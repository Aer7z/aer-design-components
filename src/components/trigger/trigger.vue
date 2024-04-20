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
import type { Ref, CSSProperties } from 'vue'
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

// 这些计算属性用于生成不同组件的样式类。
// 每个属性都利用 `getComponentsClassPrefix()` 函数确保类名前缀的一致性。
// `styleClassTrigger` 提供了触发器的样式类。
const styleClassTrigger: Array<string> = computed(() => [
  `${getComponentsClassPrefix()}trigger`
]).value
// `styleClassTriggerPopup` 提供了触发器弹出窗口的样式类。
const styleClassTriggerPopup: Array<string> = computed(() => [
  `${getComponentsClassPrefix()}trigger-popup`
]).value
// `styleClassTriggerPopupWrapper` 提供了触发器弹出窗口的包装器的样式类。
const styleClassTriggerPopupWrapper: Array<string> = computed(() => [
  `${getComponentsClassPrefix()}trigger-popup-wrapper`
]).value

// const styleClassTriggerPopupContent: Array<string> = computed(() => [
//   `${getComponentsClassPrefix()}trigger-popup-content`
// ]).value

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
// 定义处理点击事件的函数
const handleClick: (ev: MouseEvent) => void = (ev: MouseEvent): void => {
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
</script>

<style lang="less" src="./style/trigger.less"></style>
