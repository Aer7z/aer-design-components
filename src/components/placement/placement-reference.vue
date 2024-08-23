<template>
  <span ref="placementRef">
    <slot></slot>
  </span>
</template>

<script lang="ts" setup>
import { inject, onMounted, ref, type Ref } from 'vue'
import { DEFAULT_PLACEMENT_PROPS, type PlacementProps, type PlacementRec } from './interface'
import type { placementContext } from './context'

// import { computed } from 'vue'
// import type { ComputedRef } from 'vue'
// import type { } from './interface'
// import { getClsPrefix } from '../_utils/global-config'

defineOptions({
  name: 'PlacementReference',
})
//获取元素，力求计算出元素的位置，从而计算下拉框的位置
const placementRef: Ref = ref<HTMLElement>()
const placementContextObject: placementContext | undefined = inject('placementContextObject')
placementContextObject?.usePlacementContext.call(placementContextObject)

const props = withDefaults(defineProps<PlacementProps>(), DEFAULT_PLACEMENT_PROPS)

//获取触发器Trigger的位置大小信息的函数
const getPlacementRec: () => DOMRect = () => {
  return (placementRef.value as HTMLElement).getBoundingClientRect()
}

// 根据placement计算不同的位置
const computePopupRec = (placementRec: DOMRect) => {
  // position样式里的bottom和DomRect里的bottom，代表的是不同的计算距离方式
  // position里写的是浏览器布局中的top/left什么的，DomRect里的就不是了
  // 参考链接：https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect
  const computePosition = {
    bottom: {
      top: `${placementRec.bottom}px`,
      left: `${placementRec.left}px`,
    },
    top: {
      top: `${placementRec.top - placementRec.height}px`,
      left: `${placementRec.left}px`,
    },
    left: {
      top: `${placementRec.bottom}px`,
      left: `${0}px`,
    }, //下左
    right: {
      top: `${placementRec.bottom}px`,
      right: `${0}px`,
    }, //下右
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

//根据参数position调整获得的数据的函数
const setPlacementRec = (placementRec: DOMRect) => {
  let newRec: PlacementRec = computePopupRec(placementRec)
  placementContextObject!.placementRec.value = newRec
}

onMounted(() => {
  const placementRec: DOMRect = getPlacementRec()
  // 获得逻辑判断过后的应该具备的下拉框位置样式信息，根据触发器位置大小信息
  setPlacementRec(placementRec)
})
</script>

<style lang="less" src="./style/index.less"></style>
