<template>
  <template v-if="$slots.prepend">
    <span :class="[size]"><slot name="prepend" /></span>
  </template>
  <span :class="[size]" class="newInput">
    <template v-if="$slots.prefix">
      <slot name="prefix" />
    </template>
    <input :type="type" :value="defaultValue" :placeholder="placeholder" />
    <template v-if="allowClear">删除</template>
    <template v-if="$slots.suffix">
      <slot name="suffix" />
    </template>
  </span>
  <template v-if="$slots.append">
    <span :class="[size]"><slot name="append" /></span>
  </template>
</template>

<script setup lang="ts">
// console.log(getCurrentInstance())
defineOptions({
  name: 'AerInput'
})

const props = defineProps({
  placeholder: {
    type: String,
    default: ''
  },
  /**
   * @zh 默认值（非受控状态）
   * @en Default value (uncontrolled state)
   */
  defaultValue: {
    type: String,
    default: ''
  },
  /**
   * @zh 输入框的状态
   * @en input state
   * @values 'normal','error','warning'
   * @defaultValue 'normal'
   */
  status: {
    type: String,
    default: 'normal'
  },
  /**
   * @zh 是否禁用
   * @en Whether to disable
   */
  disabled: {},
  /**
   * @zh 是否为只读状态
   * @en Whether it is read-only
   */
  readonly: {
    type: Boolean,
    default: false
  },
  /**
   * @zh 输入值的最大长度，
   * @en Enter the maximum length of the value
   */
  maxLength: {
    type: Number
  },
  // wordLengh:{},
  /**
   * @zh 输入框类型，
   * @en type of input
   * @values 'email','number','password','search','tel','text','url'
   * @defaultValue 'text'
   */
  type: {
    type: String,
    default: 'text'
  },
  /**
   * @zh 输入框的尺寸
   * @en input size
   * @values 'mini','small','medium','large'
   * @defaultValue 'medium'
   */
  size: { type: String, default: 'medium' },

  //允许清除
  allowClear: { type: Boolean, default: false },
  // filled Outlined Borderless
  variant: {}
})

const emits = defineEmits({
  change: () => true,
  input: () => true,
  pressEnter: () => true,
  clear: () => true,
  focus: () => true,
  blur: () => true
})
</script>

<!-- <style lang="less" src="./style/Input.less" scpoed> -->
<style lang="less" scpoed>

</style>
