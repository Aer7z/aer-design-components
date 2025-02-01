<template>
  <input
    v-model="inputModel"
    :class="[cls]"
    :disabled="disabled"
    :placeholder="placeholder"
    :type="variant"
    @blur="handleBlur"
    @change="handleChange"
    @focus="handleFocus"
    @input="handleInput"
    @keydown.enter="handlePressEnter"
  />
</template>

<script lang="ts" setup>
import { getClsPrefix } from '@/components/_utils/global-config'
import { InputNewProps, InputNewEmits } from './interface'

defineOptions({
  name: 'InputNew',
})

const inputModel = defineModel()

const props = withDefaults(defineProps<InputNewProps>(), {
  disabled: false,
  showClear: false,
  placeholder: '',
  size: 'medium',
  variant: 'text',
})

const emits = defineEmits<InputNewEmits>()

const cls: string[] = [`${getClsPrefix()}input-new`]

//失焦的时候触发的回调函数
const handleBlur = (ev: FocusEvent): void => {
  emits('blur', ev)
}
//修改的时候触发的回调函数
const handleChange = (ev: Event): void => {
  const value = (ev.target as HTMLInputElement).value
  emits('change', value, ev)
}
//点击清除按钮的时候触发的回调函数
const handleClear = (ev: MouseEvent): void => {
  if (!props.disabled) {
    inputModel.value = ''
    emits('clear', ev)
  }
}
//聚焦的时候触发的回调函数
const handleFocus = (ev: FocusEvent): void => {
  emits('focus', ev)
}
//输入完毕的时候触发的回调函数
const handleInput = (ev: Event): void => {
  const value = (ev.target as HTMLInputElement).value
  emits('input', value, ev)
}
//按下回车的时候触发的回调函数
const handlePressEnter = (ev: KeyboardEvent): void => {
  emits('pressEnter', ev)
}
</script>

<style lang="less" src="./style/index.less"></style>
