<template>
  <span :class="[styleClassWrapperAll]">
    <span v-if="$slots.prepend" :class="[styleClassInputPrepend]">
      <slot name="prepend" />
    </span>
    <span :class="[styleClassWrapper]">
      <span v-if="$slots.prefix" :class="[styleClassInputPrefix]">
        <slot name="prefix" />
      </span>
      <input
        v-model="model"
        :class="[styleClassInput]"
        :disabled="disabled"
        :placeholder="placeholder"
        :maxlength="maxLength"
        @blur="handleBlur"
        @change="handleChange"
        @focus="handleFocus"
        @input="handleInput"
        @keydown.enter="handlePressEnter"
      />
      <span v-if="showCount" :class="[styleClassInputCountArea]">{{ countRate }}</span>
      <span v-if="showClear" :class="[styleClassInputClearBtn]" @click="handleClear($event)"
        >x</span
      >
      <span v-if="$slots.suffix" :class="[styleClassInputSuffix]">
        <slot name="suffix" />
      </span>
    </span>
    <span v-if="$slots.append" :class="[styleClassInputAppend]">
      <slot name="append" />
    </span>
  </span>
</template>

<script setup lang="ts">
// console.log(getCurrentInstance())
import { computed, onMounted } from 'vue'
import type { InputEmits, InputProps } from './interface'
import { getComponentsClassPrefix } from '../_utils/global-config'

defineOptions({
  name: 'Input'
})
const model = defineModel()
// console.log(model.value)

const props = withDefaults(defineProps<InputProps>(), {
  disabled: false,
  maxLength: 100,
  readOnly: false,
  showClear: false,
  showCount: false,
  size: 'medium',
  status: 'normal',
  type: 'text'
})

const emits = defineEmits<InputEmits>()

// 普遍适用的class样式，如尺寸、是否禁用
const styleClassCommon: Array<string> = computed(() => [
  `${getComponentsClassPrefix()}input-size-${props.size ?? 'medium'}`,
  `${props.disabled ? getComponentsClassPrefix() + 'input-disabled' : ''}`
]).value
// Input组件包裹层的样式
const styleClassWrapper: Array<string | string[]> = computed(() => [
  styleClassCommon,
  `${getComponentsClassPrefix()}input-wrapper-part`
]).value
// Input组件包裹层的样式
const styleClassWrapperAll: Array<string | string[]> = computed(() => [
  styleClassCommon,
  `${getComponentsClassPrefix()}input-wrapper-all`
]).value
// Input组件中的input的样式
const styleClassInput: Array<string> = computed(() => [
  `${getComponentsClassPrefix()}input-font-size-${props.size ?? 'medium'}`,
  `${getComponentsClassPrefix()}input`
]).value
// Input组件中字数统计的样式
const styleClassInputCountArea: Array<string> = computed(() => [
  // styleClassCommon.value,
  `${getComponentsClassPrefix()}input-count-area`
]).value
// Input组件中字数清零按钮的样式
const styleClassInputClearBtn: Array<string> = computed(() => [
  `${props.disabled ? getComponentsClassPrefix() + 'input-clear-btn-disabled' : ''}`,
  `${getComponentsClassPrefix()}input-clear-btn`
]).value
// Input组件中前缀元素的样式
const styleClassInputPrefix: Array<string> = computed(() => [
  `${getComponentsClassPrefix()}input-prefix`
]).value
// Input组件中后缀元素的样式
const styleClassInputSuffix: Array<string> = computed(() => [
  `${getComponentsClassPrefix()}input-suffix`
]).value
// Input组件中前置标签的样式
const styleClassInputPrepend: Array<string> = computed(() => [
  `${getComponentsClassPrefix()}input-prepend`
]).value
// Input组件中后置标签的样式
const styleClassInputAppend: Array<string> = computed(() => [
  `${getComponentsClassPrefix()}input-append`
]).value

const countRate: string = computed(() => {
  const InputStr: string = String(model.value).replace(/\n|\r/, '') //转换成为字符串，并且去除回车换行符
  return `${InputStr.length}/${props.maxLength}`
}).value

//失焦的时候触发的回调函数
const handleBlur: Function = (ev: FocusEvent) => {
  emits('blur', ev)
}
//修改的时候触发的回调函数
const handleChange: Function = (ev: Event) => {
  const value = (ev.target as HTMLInputElement).value
  emits('change', value, ev)
}
//点击清除按钮的时候触发的回调函数
const handleClear: Function = (ev: MouseEvent) => {
  if (!props.disabled) {
    model.value = ''
    emits('clear', ev)
  }
}
//聚焦的时候触发的回调函数
const handleFocus: Function = (ev: FocusEvent) => {
  emits('focus', ev)
}
//输入完毕的时候触发的回调函数
const handleInput: Function = (ev: Event) => {
  const value = (ev.target as HTMLInputElement).value
  emits('input', value, ev)
}
//按下回车的时候触发的回调函数
const handlePressEnter: Function = (ev: KeyboardEvent) => {
  emits('pressEnter', ev)
}

onMounted(() => {
  //默认值和双向绑定数值之间该做什么样的取舍?
  //优先选择设置了默认值的默认数值

  //因此，先看看有无设置默认值，有就先将input的内容设置为默认值
  model.value = props.defaultValue || model.value

  if (props.maxLength != 100) {
    model.value = String(model.value).slice(0, props.maxLength)
  }
})
</script>

<style lang="less" src="./style/input.less"></style>
