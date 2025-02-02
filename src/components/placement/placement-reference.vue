<template>
  <span ref="placementReferenceRef">
    <slot></slot>
  </span>
</template>

<script lang="ts" setup>
import { onMounted, ref, type Ref } from 'vue'
import { type PlacementProps, type PlacementRec } from './interface'
import { usePlacementContext } from './context'

defineOptions({
  name: 'PlacementReference',
})
//获取元素，力求计算出元素的位置，从而计算下拉框的位置
const placementReferenceRef: Ref = ref<HTMLElement>()

const placementContext = usePlacementContext()

const props = withDefaults(defineProps<PlacementProps>(), {
  placement: 'bottom',
})

//获取触发器Trigger的位置大小信息的函数
const getPlacementRec: () => DOMRect = () => {
  return (placementReferenceRef.value as HTMLElement).getBoundingClientRect()
}

// // 根据placement计算不同的位置
// const computePopupRec = (placementRec: DOMRect) => {
//   // position样式里的bottom和DomRect里的bottom，代表的是不同的计算距离方式
//   // position里写的是浏览器布局中的top/left什么的，DomRect里的就不是了
//   // 参考链接：https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect
//   const offsetDistance = 6
//   const computePosition = {
//     bottom: {
//       top: `${placementRec.bottom + offsetDistance}px`,
//       left: `${placementRec.left}px`,
//     },
//     bottomLeft: {
//       top: `${placementRec.bottom + offsetDistance}px`,
//       left: `${placementRec.left}px`,
//     },
//     bottomRight: {
//       top: `${placementRec.bottom + offsetDistance}px`,
//       right: `${0}px`,
//     },
//     top: {
//       top: `${placementRec.top - placementRec.height}px`,
//       left: `${placementRec.left}px`,
//     },
//     topLeft: {
//       top: `${placementRec.top - placementRec.height}px`,
//       left: `${placementRec.left}px`,
//     },
//     topRight: {
//       top: `${placementRec.top - placementRec.height}px`,
//       right: `${0}px`,
//     },
//     left: {
//       top: `${placementRec.bottom}px`,
//       left: `${0}px`,
//     },
//     leftTop: {
//       top: `${placementRec.top}px`,
//       left: `${placementRec.left - placementRec.width}px`,
//     },
//     leftBottom: {
//       bottom: `${placementRec.bottom}px`,
//       left: `${placementRec.left - placementRec.width}px`,
//     },
//     right: {
//       top: `${placementRec.bottom}px`,
//       right: `${0}px`,
//     },
//     rightTop: {
//       top: `${placementRec.top}px`,
//       right: `${0}px`,
//     },
//     rightBottom: {
//       bottom: `${placementRec.bottom}px`,
//       right: `${0}px`,
//     },
//   }
//   const resultPosition: PlacementRec = {
//     top: '',
//     left: '',
//     bottom: '',
//     right: '',
//   }
//   Object.assign(resultPosition, computePosition[props.placement])
//   return resultPosition
// }

//根据参数position调整获得的数据的函数
const setPlacementRec = (placementRec: DOMRect) => {
  // let newRec: PlacementRec = computePopupRec(placementRec)
  placementContext!.placementRec.value = placementRec
}

onMounted(() => {
  const placementRec: DOMRect = getPlacementRec()
  // 获得逻辑判断过后的应该具备的下拉框位置样式信息，根据触发器位置大小信息
  setPlacementRec(placementRec)
})
</script>

<style lang="less" src="./style/index.less"></style>
