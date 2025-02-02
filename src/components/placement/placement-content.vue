<template>
  <div
    ref="placementReferenceRef"
    :style="['position:absolute', computePopupRec(placementContext?.placementRec.value)]"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, type Ref } from 'vue'
import { usePlacementContext } from './context'
import { PlacementProps, type PlacementRec } from './interface'

defineOptions({
  name: 'PlacementContent',
})

const placementContext = usePlacementContext()

const placementRef: Ref = ref<HTMLElement>()
const props = withDefaults(defineProps<PlacementProps>(), {
  placement: 'bottom',
})

// 根据placement计算不同的位置
const computePopupRec = (placementTriggerRec: DOMRect) => {
  // position样式里的bottom和DomRect里的bottom，代表的是不同的计算距离方式
  // position里写的是浏览器布局中的top/left什么的，DomRect里的就不是了
  // 参考链接：https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect
  const offsetDistance = 6
  const computePosition = {
    bottom: {
      top: `${placementTriggerRec.bottom + offsetDistance}px`,
      left: `${placementTriggerRec.left}px`,
    },
    bottomLeft: {
      top: `${placementTriggerRec.bottom + offsetDistance}px`,
      left: `${placementTriggerRec.left}px`,
    },
    bottomRight: {
      top: `${placementTriggerRec.bottom + offsetDistance}px`,
      right: `${0}px`,
    },
    top: {
      top: `${placementTriggerRec.top - placementTriggerRec.height}px`,
      left: `${placementTriggerRec.left}px`,
    },
    topLeft: {
      top: `${placementTriggerRec.top - placementTriggerRec.height}px`,
      left: `${placementTriggerRec.left}px`,
    },
    topRight: {
      top: `${placementTriggerRec.top - placementTriggerRec.height}px`,
      right: `${0}px`,
    },
    left: {
      top: `${placementTriggerRec.bottom}px`,
      left: `${0}px`,
    },
    leftTop: {
      top: `${placementTriggerRec.top}px`,
      left: `${placementTriggerRec.left - placementTriggerRec.width}px`,
    },
    leftBottom: {
      bottom: `${placementTriggerRec.bottom}px`,
      left: `${placementTriggerRec.left - placementTriggerRec.width}px`,
    },
    right: {
      top: `${placementTriggerRec.bottom}px`,
      right: `${0}px`,
    },
    rightTop: {
      top: `${placementTriggerRec.top}px`,
      right: `${0}px`,
    },
    rightBottom: {
      bottom: `${placementTriggerRec.bottom}px`,
      right: `${0}px`,
    },
  }
  const resultPosition: PlacementRec = {
    top: '',
    left: '',
    bottom: '',
    right: '',
  }
  Object.assign(resultPosition, computePosition[props.placement])
  return resultPosition
}
</script>

<style lang="less" src="./style/index.less"></style>
