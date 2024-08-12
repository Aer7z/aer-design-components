<template>
  <span v-if="isVisible" ref="clickOutsideRef" @click="handleClick"><slot></slot></span>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { Ref } from 'vue'
import type { clickOutsideProps } from './interface'

const { clickOutside } = defineProps<clickOutsideProps>()

const clickOutsideRef: Ref<HTMLElement | undefined> = ref<HTMLElement>()
const isVisible: Ref<boolean> = ref(true)

// 判断是否点击外部，点击则关闭销毁元素
const turnoff = (ev: MouseEvent) => {
  //点击区域是否包含内部元素，不包含则是外部区域
  const isClickOutSide = !(clickOutsideRef.value as HTMLElement).contains(ev.target as HTMLElement)
  if (isClickOutSide) {
    isVisible.value = false
  }
}
//处理点击事件，附带传入需处理事件
const handleClick = (ev: MouseEvent) => {
  // 额外的外部传入的点击事件有就执行
  clickOutside ? clickOutside(ev) : undefined
  turnoff(ev)
}
</script>

<style lang="less"></style>
