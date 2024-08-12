<template>
  <div ref="triggerRef" v-on="EventList" :class="clsTrigger" @click.stop>
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue'
import type { Ref, ComputedRef } from 'vue'
import { getClsPrefix } from '../_utils/global-config'
import { DEFAULT_TRIGGER_PROPS, type TriggerEmits, type TriggerProps } from './interface'
import type { TriggerPopupPosRec } from './interface'
import { useTriggerContext } from './context'

const { triggerPopupPosRec, triggerPopupVisible } = useTriggerContext()

//获取元素，力求计算出元素的位置，从而计算下拉框的位置
const triggerRef: Ref = ref<HTMLElement>()

defineOptions({
  name: 'Trigger',
})

const props = withDefaults(defineProps<TriggerProps>(), DEFAULT_TRIGGER_PROPS)

const emits = defineEmits<TriggerEmits>()

// 改变可见性的函数
const changeVisible = (ev: MouseEvent): void => {
  // 切换可见性状态
  triggerPopupVisible.value = !triggerPopupVisible.value
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
const getTriggerPositionRec: () => DOMRect = () => {
  return (triggerRef.value as HTMLElement).getBoundingClientRect()
}

// 根据placement计算不同的位置
const getPopupRecWithPositionOfPlacement = (triggerRec: DOMRect) => {
  let position: TriggerPopupPosRec = {
    top: '',
    left: '',
    bottom: '',
    right: '',
  }
  // position样式里的bottom和DomRect里的bottom，代表的是不同的计算距离方式
  // position里写的是浏览器布局中的top/left什么的，DomRect里的就不是了
  // 参考链接：https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect
  switch (props.position) {
    case 'bottom': {
      Object.assign(position, {
        top: `${triggerRec.bottom}px`,
        left: `${triggerRec.left}px`,
      })
      break
    }
    case 'top': {
      Object.assign(position, {
        top: `${triggerRec.top - triggerRec.height}px`,
        left: `${triggerRec.left}px`,
      })
      break
    }
    //默认下左
    case 'left': {
      Object.assign(position, {
        top: `${triggerRec.bottom}px`,
        left: `${0}px`,
      })
      break
    }
    //默认下右
    case 'right': {
      Object.assign(position, {
        top: `${triggerRec.bottom}px`,
        right: `${0}px`,
      })
      break
    }
  }
  return position
}

//根据参数position调整获得的数据的函数
const setPopupRecWithPosition = (triggerRec: DOMRect) => {
  let position: TriggerPopupPosRec = getPopupRecWithPositionOfPlacement(triggerRec)
  triggerPopupPosRec.value = position
}

const clsTrigger: ComputedRef<string[]> = computed(() => [`${getClsPrefix()}trigger`])

onMounted(() => {
  const triggerPositionRec: DOMRect = getTriggerPositionRec()
  // 获得逻辑判断过后的应该具备的下拉框位置样式信息，根据触发器位置大小信息
  setPopupRecWithPosition(triggerPositionRec)
})
</script>
