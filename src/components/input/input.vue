<template>
  <div :class="[clsInputWrapper]">
    <div v-if="$slots.prepend" :class="[clsInputPrepend]">
      <slot name="prepend" />
    </div>
    <div :class="[clsInputContent]">
      <div v-if="$slots.prefix" :class="[clsInputPrefix]">
        <slot name="prefix" />
      </div>
      <input
        v-model="inputModel"
        :class="[clsInput]"
        :disabled="disabled"
        :placeholder="placeholder"
        :maxlength="maxLength"
        @blur="handleBlur"
        @change="handleChange"
        @focus="handleFocus"
        @input="handleInput"
        @keydown.enter="handlePressEnter"
      />
      <div v-if="showCount" :class="[clsInputCountArea]">{{ countRate }}</div>
      <div v-if="showClear" :class="[clsInputClearBtn]" @click="handleClear($event)">x</div>
      <div v-if="$slots.suffix" :class="[clsInputSuffix]">
        <slot name="suffix" />
      </div>
    </div>
    <div v-if="$slots.append" :class="[clsInputAppend]">
      <slot name="append" />
    </div>
  </div>
</template>

<script setup lang="ts">
// console.log(getCurrentInstance())
import { computed, onMounted } from 'vue'
import type { ComputedRef } from 'vue'
import type { InputEmits, InputProps } from './interface'
import { getClsPrefix } from '../_utils/global-config'

defineOptions({
  name: 'Input'
})
const inputModel = defineModel()
// console.log(inputModel.value)

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
const clsCommon: string[] = [
  // `${getClsPrefix()}input-size-${props.size ?? 'medium'}`,
  `${props.disabled ? getClsPrefix() + 'input-disabled' : ''}`
]
// Input组件最外层包裹层的样式
const clsInputWrapper: ComputedRef<string[]> = computed(() => [
  ...clsCommon,
  `${getClsPrefix()}input-size-${props.size}`,
  `${getClsPrefix()}input-wrapper`
])
// Input组件内层包裹层的样式
const clsInputContent: ComputedRef<string[]> = computed(() => [
  ...clsCommon,
  `${getClsPrefix()}input-size-${props.size}`,
  `${getClsPrefix()}input-content`
])

// Input组件中的input的样式
const clsInput: ComputedRef<string[]> = computed(() => [
  ...clsCommon,
  `${getClsPrefix()}input-font-size-${props.size}`,
  `${getClsPrefix()}input`
])
// Input组件中字数统计的样式
const clsInputCountArea: ComputedRef<string[]> = computed(() => [
  `${getClsPrefix()}input-count-area`
])
// Input组件中字数清零按钮的样式
const clsInputClearBtn: ComputedRef<string[]> = computed(() => [
  `${props.disabled ? getClsPrefix() + 'input-clear-btn-disabled' : ''}`,
  `${getClsPrefix()}input-clear-btn`
])
// Input组件中前缀元素的样式
const clsInputPrefix: ComputedRef<string[]> = computed(() => [`${getClsPrefix()}input-prefix`])
// Input组件中后缀元素的样式
const clsInputSuffix: ComputedRef<string[]> = computed(() => [`${getClsPrefix()}input-suffix`])
// Input组件中前置标签的样式
const clsInputPrepend: ComputedRef<string[]> = computed(() => [`${getClsPrefix()}input-prepend`])
// Input组件中后置标签的样式
const clsInputAppend: ComputedRef<string[]> = computed(() => [`${getClsPrefix()}input-append`])

const countRate: ComputedRef<string> = computed(() => {
  const InputStr: string = String(inputModel.value).replace(/\n|\r/, '') //转换成为字符串，并且去除回车换行符
  return `${InputStr.length}/${props.maxLength}`
})

//失焦的时候触发的回调函数
const handleBlur: (ev: FocusEvent) => void = (ev: FocusEvent): void => {
  emits('blur', ev)
}
//修改的时候触发的回调函数
const handleChange: (ev: Event) => void = (ev: Event): void => {
  const value = (ev.target as HTMLInputElement).value
  emits('change', value, ev)
}
//点击清除按钮的时候触发的回调函数
const handleClear: (ev: MouseEvent) => void = (ev: MouseEvent): void => {
  if (!props.disabled) {
    inputModel.value = ''
    emits('clear', ev)
  }
}
//聚焦的时候触发的回调函数
const handleFocus: (ev: FocusEvent) => void = (ev: FocusEvent): void => {
  emits('focus', ev)
}
//输入完毕的时候触发的回调函数
const handleInput: (ev: Event) => void = (ev: Event): void => {
  const value = (ev.target as HTMLInputElement).value
  emits('input', value, ev)
}
//按下回车的时候触发的回调函数
const handlePressEnter: (ev: KeyboardEvent) => void = (ev: KeyboardEvent): void => {
  emits('pressEnter', ev)
}

const setDefaultValue: () => void = () => {
  inputModel.value = props.defaultValue || inputModel.value

  if (props.maxLength != 100) {
    inputModel.value = String(inputModel.value).slice(0, props.maxLength)
  }
}

onMounted(() => {
  //默认值和双向绑定数值之间该做什么样的取舍?
  //优先选择设置了默认值的默认数值

  //因此，先看看有无设置默认值，有就先将input的内容设置为默认值
  setDefaultValue()
})
</script>

<style lang="less" src="./style/Input.less"></style>
