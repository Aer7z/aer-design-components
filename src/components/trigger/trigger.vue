<template>
  <span v-on="EventList">
    <slot></slot>
  </span>
</template>

<script lang="ts" setup>
import { ref, inject } from 'vue'
import type { Ref } from 'vue'
import { DEFAULT_TRIGGER_PROPS, type TriggerEmits, type TriggerProps } from './interface'
import { useTriggerContext } from './context'

const triggerContext = useTriggerContext()

defineOptions({
  name: 'Trigger',
})

const props = withDefaults(defineProps<TriggerProps>(), DEFAULT_TRIGGER_PROPS)
const emits = defineEmits<TriggerEmits>()

// 改变可见性的函数
const changeVisible = () => {
  // 切换可见性状态
  triggerContext!.triggerPopupVisible.value = !triggerContext!.triggerPopupVisible.value
}

// 不同触发事件对应的处理函数
const EventList = {
  click: props.trigger === 'click' ? changeVisible : undefined,
  mouseenter: props.trigger === 'hover' ? changeVisible : undefined,
  mouseleave: props.trigger === 'hover' ? changeVisible : undefined,
  focusin: props.trigger === 'focus' ? changeVisible : undefined,
  focusout: props.trigger === 'focus' ? changeVisible : undefined,
}
</script>
