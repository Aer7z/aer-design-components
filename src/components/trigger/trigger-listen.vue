<template>
  <span v-on="EventList">
    <slot></slot>
  </span>
</template>

<script lang="ts" setup>
import { type TriggerEmits, type TriggerProps } from './interface'
import { useTriggerContext } from './context'

const triggerContext = useTriggerContext()

defineOptions({
  name: 'TriggerListen',
})

const props = withDefaults(defineProps<TriggerProps>(), {
  disabled: false,
  triggerMode: 'click',
})
const emits = defineEmits<TriggerEmits>()

// 改变可见性的函数
const changeVisible = () => {
  // 切换可见性状态
  triggerContext!.triggerContentVisible.value = !triggerContext!.triggerContentVisible.value
}

// 不同触发事件对应的处理函数
const EventList = {
  click: props.triggerMode === 'click' ? changeVisible : undefined,
  mouseenter: props.triggerMode === 'hover' ? changeVisible : undefined,
  mouseleave: props.triggerMode === 'hover' ? changeVisible : undefined,
  focusin: props.triggerMode === 'focus' ? changeVisible : undefined,
  focusout: props.triggerMode === 'focus' ? changeVisible : undefined,
}
</script>
