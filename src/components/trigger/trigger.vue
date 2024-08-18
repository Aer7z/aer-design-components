<template>
  <span ref="triggerRef" v-on="EventList" @click.stop>
    <slot></slot>
  </span>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import type { Ref } from 'vue'
import { DEFAULT_TRIGGER_PROPS, type TriggerEmits, type TriggerProps } from './interface'
import type { TriggerPopupRec } from './interface'
import { useTriggerContext } from './context'

const triggerContext = useTriggerContext()

//获取元素，力求计算出元素的位置，从而计算下拉框的位置
const triggerRef: Ref = ref<HTMLElement>()

defineOptions({
  name: 'Trigger',
})

const props = withDefaults(defineProps<TriggerProps>(), DEFAULT_TRIGGER_PROPS)
const emits = defineEmits<TriggerEmits>()

// 改变可见性的函数
const changeVisible = () => {
  // 切换可见性状态
  triggerContext.triggerPopupVisible.value = !triggerContext.triggerPopupVisible.value
}

// 不同触发事件对应的处理函数
const EventList = {
  click: props.trigger === 'click' ? changeVisible : undefined,
  mouseenter: props.trigger === 'hover' ? changeVisible : undefined,
  mouseleave: props.trigger === 'hover' ? changeVisible : undefined,
  focusin: props.trigger === 'focus' ? changeVisible : undefined,
  focusout: props.trigger === 'focus' ? changeVisible : undefined,
}

//获取触发器Trigger的位置大小信息的函数
const getTriggerRec: () => DOMRect = () => {
  return (triggerRef.value as HTMLElement).getBoundingClientRect()
}

// 根据placement计算不同的位置
const computePopupRec = (triggerRec: DOMRect) => {
  // position样式里的bottom和DomRect里的bottom，代表的是不同的计算距离方式
  // position里写的是浏览器布局中的top/left什么的，DomRect里的就不是了
  // 参考链接：https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect
  const computePosition = {
    bottom: {
      top: `${triggerRec.bottom}px`,
      left: `${triggerRec.left}px`,
    },
    top: {
      top: `${triggerRec.top - triggerRec.height}px`,
      left: `${triggerRec.left}px`,
    },
    left: {
      top: `${triggerRec.bottom}px`,
      left: `${0}px`,
    }, //下左
    right: {
      top: `${triggerRec.bottom}px`,
      right: `${0}px`,
    }, //下右
  }
  const resultPosition: TriggerPopupRec = {
    top: '',
    left: '',
    bottom: '',
    right: '',
  }
  Object.assign(resultPosition, computePosition[props.position])
  return resultPosition
}

//根据参数position调整获得的数据的函数
const setPopupRec = (triggerRec: DOMRect) => {
  let newRec: TriggerPopupRec = computePopupRec(triggerRec)
  triggerContext.triggerPopupRec.value = newRec
}

onMounted(() => {
  const triggerRec: DOMRect = getTriggerRec()
  // 获得逻辑判断过后的应该具备的下拉框位置样式信息，根据触发器位置大小信息
  setPopupRec(triggerRec)
})
</script>
