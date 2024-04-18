<!-- <template>
  <div class="dialogWrapper" v-show="visibleDialog">
    包裹
    <div class="dialog">
      <div class="dialogHeader">
        <span class="dialogHeaderTitle">{{ title }}</span
        ><button class="dialogHeaderButton" @click="visibleDialog = !visibleDialog">x</button>
      </div>
      <div class="dialogBody">
        <div>{{ value }}</div>
      </div>
      <div class="dialogFooter">
        <button class="dialogFooterButton">取消</button>
        <button class="dialogFooterButton">确定</button>
      </div>
    </div>
    <div>对照</div>
  </div>
</template> -->

<template>
  <button @click="handleClick(true)">Open Modal</button>
  <div :class="[dialogWrapper]" v-show="visible" tabindex="-1">
    <!-- 包裹 -->
    <div :class="[dialogContent]">
      <button :class="[dialogHeaderButton]" @click="handleClick(false)">x</button>
      <div :class="[dialogHeader]">
        {{ title }}
      </div>
      <div :class="[dialogBody]">
        {{ body }}
      </div>
      <div :class="[dialogFooter]">
        <button :class="[dialogFooterButton]" @click="handleOk">取消</button>
        <button :class="[dialogFooterButton]" @click="handleCancel">确定</button>
      </div>
    </div>
    <!-- <div>对照</div> -->
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import type { DialogEmits, DialogProps } from './interface'
import { getComponentsClassPrefix } from '../_utils/global-config'

defineOptions({
  name: 'Dialog'
})

const props = withDefaults(defineProps<DialogProps>(), {
  title: '暂无内容',
  body: '暂无内容'
})

let visible = ref(false)

const dialogWrapper: Array<string> = computed(() => [
  `${getComponentsClassPrefix()}dialog-wrapper`
]).value

const dialogContent: Array<string> = computed(() => [
  `${getComponentsClassPrefix()}dialog-content`
]).value
const dialogHeader: Array<string> = computed(() => [
  `${getComponentsClassPrefix()}dialog-header`
]).value
const dialogHeaderButton: Array<string> = computed(() => [
  `${getComponentsClassPrefix()}dialog-header-button`
]).value
const dialogBody: Array<string> = computed(() => [`${getComponentsClassPrefix()}dialog-body`]).value
const dialogFooter: Array<string> = computed(() => [
  `${getComponentsClassPrefix()}dialog-footer`
]).value
const dialogFooterButton: Array<string> = computed(() => [
  `${getComponentsClassPrefix()}dialog-footer-button`
]).value

const handleClick = (isVisible: boolean = true) => {
  visible.value = isVisible
}
const emits = defineEmits<DialogEmits>()

const handleOk = (ev: MouseEvent) => {
  visible.value = false
  emits('ok', ev)
}
const handleCancel = (ev: MouseEvent) => {
  visible.value = false
  emits('cancel', ev)
}
</script>

<style lang="less" src="./style/dialog.less"></style>
