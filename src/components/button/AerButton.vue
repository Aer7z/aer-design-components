<template>
  <template v-if="target">
    <a
      :class="[type, shape, size, status, disabled ? 'disabled' : undefined]"
      class="element"
      :href="target"
      @click="handleclick"
    >
      <slot />
    </a>
  </template>
  <template v-else>
    <button
      :class="[type, shape, size, status, disabled ? 'disabled' : undefined]"
      class="element"
      :disabled="disabled"
      @click="handleclick"
    >
      <span v-if="loading"> </span>
      <slot />
    </button>
  </template>
  <!-- <h3>{{ props }}</h3> -->
</template>

<script setup lang="ts">
// import less from 'less'
import type { PropType } from 'vue'
// import { onMounted, getCurrentInstance, computed } from 'vue';
import type { ButtonType, ButtonShape, ButtonStatus, ButtonSize } from './constant'
//console.log(getCurrentInstance())

const props = defineProps({
  /**
   * @zh 按钮的类型，分为五种：默认按钮、主要按钮、虚框按钮、文字按钮、链接按钮。
   * @en Button types are divided into five types: default, primary, dashed, text and link.
   * @defaultValue 'default'
   */
  type: {
    type: String as PropType<ButtonType>,
    default: 'default'
  },
  /**
   * @zh 按钮的形状
   * @en Button shape
   * @values 'square','circle','round'
   * @defaultValue 'square'
   *
   */
  shape: {
    type: String as PropType<ButtonShape>,
    default: 'square'
  },
  /**
   * @zh 按钮的状态
   * @en Button state
   * @values 'normal','warning','success','danger'
   * @defaultValue 'normal'
   */
  status: {
    type: String as PropType<ButtonStatus>,
    default: 'normal'
  },
  /**
   * @zh 按钮的尺寸
   * @en Button size
   * @values 'mini','small','medium','large'
   * @defaultValue 'medium'
   */
  size: {
    type: String as PropType<ButtonSize>,
    default: 'medium'
  },
  /**
   * @zh 设置跳转链接。设置此属性时，按钮渲染为a标签。
   * @en Set up a jump link. When this property is set, the button is rendered as `<a>`
   */
  target: {
    type: String
  },
  /**
   * @zh 按钮是否为加载中状态
   * @en Whether the button is in the loading state
   */
  loading: {
    type: Boolean,
    default: false
  },
  /**
   * @zh 按钮是否禁用
   * @en Whether the button is disabled
   * @defaultValue false
   */
  disabled: {
    type: Boolean,
    default: false
  },
  icon: {
    type: String
  }
})
const emits = defineEmits({
  click: (ev: MouseEvent) => true
})

// const cls = computed(() => [])

function handleclick(ev: MouseEvent): void {
  if (props.loading || props.disabled) {
    ev.preventDefault()
    return
  }
  ;(ev.currentTarget as HTMLButtonElement).blur()
  emits('click', ev)
}
</script>

<style lang="less" scoped>
@color-white: rgba(248, 247, 240, 1);
@color-text-hover: rgba(248, 247, 240, 1);
@color-text-hover-light: rgba(241, 245, 197);

@color-normal-dark: rgba(91, 164, 174, 1);
@color-normal-light: rgba(91, 164, 174, 0.1);
@color-normal-hover-primary: rgba(91, 164, 174, 0.7);
@color-normal-hover-default-dashed: rgba(91, 164, 174, 0.3);
@color-normal-hover-link: rgba(91, 164, 174, 0.6);

@color-success-dark: rgba(140, 184, 131, 1);
@color-success-light: rgba(140, 184, 131, 0.1);
@color-success-hover-primary: rgba(140, 184, 131, 0.7);
@color-success-hover-default-dashed: rgba(140, 184, 131, 0.3);
@color-success-hover-link: rgba(140, 184, 131, 0.6);

@color-warning-dark: rgba(240, 85, 16, 1);
@color-warning-light: rgba(240, 85, 16, 0.1);
@color-warning-hover-primary: rgba(240, 85, 16, 0.7);
@color-warning-hover-default-dashed: rgba(240, 85, 16, 0.3);
@color-warning-hover-link: rgba(240, 85, 16, 0.6);

@color-danger-dark: rgba(195, 37, 43, 1);
@color-danger-light: rgba(195, 37, 43, 0.1);
@color-danger-hover-primary: rgba(195, 37, 43, 0.7);
@color-danger-hover-default-dashed: rgba(195, 37, 43, 0.3);
@color-danger-hover-link: rgba(195, 37, 43, 0.6);

.element {
  background-color: var(--background-color);
  height: var(--height);
  font-size: var(--font-size);
  color: var(--color);
  border-style: var(--border-style);
  border-color: var(--border-color);

  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  white-space: nowrap;
  margin: 2px;
  cursor: pointer;
  /* 禁止左键选中 */
  user-select: none;
  outline: none;
}

// 针对悬浮时背景颜色变化的样式
.background_hover(@color_hover) {
  &:hover:not(.disabled) {
    --background-color: @color_hover;
  }
}
// 针对悬浮时文本颜色变化的样式
.text_hover(@color_hover) {
  &:hover:not(.disabled) {
    --color: @color_hover;
  }
}
// 针对悬浮时背景颜色变化的样式，三者合一
.focus_hover_active_background(@color_focus, @color_hover, @color_active) {
  &:focus:not(.disabled) {
    // transform: translateY(2px);
    box-shadow: 0 3px 5px @color_focus; /* 在活动状态下改变阴影颜色 */
  }
  .background_hover(@color_hover);
  &:active:not(.disabled) {
    transform: translateY(2px);
    box-shadow: 0 3px 4px @color_active; /* 在活动状态下改变阴影颜色 */
  }
}
// 针对悬浮时文本颜色变化的样式，三者合一
.focus_hover_active_text(@color_focus, @color_hover, @color_active) {
  &:focus:not(.disabled) {
    // transform: translateY(2px);
    box-shadow: 0 3px 5px @color_focus; /* 在活动状态下改变阴影颜色 */
  }
  .text_hover(@color_hover);
  &:active:not(.disabled) {
    transform: translateY(2px);
    box-shadow: 0 3px 4px @color_active; /* 在活动状态下改变阴影颜色 */
  }
}
.status_mixins(@color_status,@background_color_status,@background_color_hover) {
  --color: @color_status;
  --background-color: @background_color_status;
}

.primary {
  --border-style: none;
  &.normal {
    .status_mixins(@color-white,@color-normal-dark,@color-normal-hover-primary);
    .focus_hover_active_background(@color-normal-dark,@color-normal-hover-primary,@color-normal-dark);
  }
  &.success {
    .status_mixins(@color-white,@color-success-dark,@color-success-hover-primary);
    .focus_hover_active_background(@color-success-dark,@color-success-hover-primary,@color-success-dark);
  }
  &.warning {
    .status_mixins(@color-white,@color-warning-dark,@color-warning-hover-primary);
    .focus_hover_active_background(@color-warning-dark,@color-warning-hover-primary,@color-warning-dark);
  }
  &.danger {
    .status_mixins(@color-white,@color-danger-dark,@color-danger-hover-primary);
    .focus_hover_active_background(@color-danger-dark,@color-danger-hover-primary,@color-danger-dark);
  }
}
.default {
  --border-style: solid;
  &.normal {
    .status_mixins(@color-normal-dark,@color-normal-light,@color-normal-hover-default-dashed);
    .focus_hover_active_background(@color-normal-dark,@color-normal-hover-default-dashed,@color-normal-dark);
  }
  &.success {
    .status_mixins(@color-success-dark,@color-success-light,@color-success-hover-default-dashed);
    .focus_hover_active_background(@color-success-dark,@color-success-hover-default-dashed,@color-success-dark);
  }
  &.warning {
    .status_mixins(@color-warning-dark,@color-warning-light,@color-warning-hover-default-dashed);
    .focus_hover_active_background(@color-warning-dark,@color-warning-hover-default-dashed,@color-warning-dark);
  }
  &.danger {
    .status_mixins(@color-danger-dark,@color-danger-light,@color-danger-hover-default-dashed);
    .focus_hover_active_background(@color-danger-dark,@color-danger-hover-default-dashed,@color-danger-dark);
  }
}
.dashed {
  --border-style: dashed;
  &.normal {
    .status_mixins(@color-normal-dark,@color-normal-light,@color-normal-hover-default-dashed);
    .focus_hover_active_background(@color-normal-dark,@color-normal-hover-default-dashed,@color-normal-dark);
  }
  &.success {
    .status_mixins(@color-success-dark,@color-success-light,@color-success-hover-default-dashed);
    .focus_hover_active_background(@color-success-dark,@color-success-hover-default-dashed,@color-success-dark);
  }
  &.warning {
    .status_mixins(@color-warning-dark,@color-warning-light,@color-warning-hover-default-dashed);
    .focus_hover_active_background(@color-warning-dark,@color-warning-hover-default-dashed,@color-warning-dark);
  }
  &.danger {
    .status_mixins(@color-danger-dark,@color-danger-light,@color-danger-hover-default-dashed);
    .focus_hover_active_background(@color-danger-dark,@color-danger-hover-default-dashed,@color-danger-dark);
  }
}
.text {
  --border-style: none;
  // .focus_hover_active(@color-text-hover-light,@color-text-hover,@color-text-hover-light);
  &.normal {
    --color: @color-normal-dark;
    .focus_hover_active_background(@color-normal-dark,@color-text-hover,@color-normal-dark);
  }
  &.success {
    --color: @color-success-dark;
    .focus_hover_active_background(@color-success-dark,@color-text-hover,@color-success-dark);
  }
  &.warning {
    --color: @color-warning-dark;
    .focus_hover_active_background(@color-warning-dark,@color-text-hover,@color-warning-dark);
  }
  &.danger {
    --color: @color-danger-dark;
    .focus_hover_active_background(@color-danger-dark,@color-text-hover,@color-danger-dark);
  }
}
.link {
  --border-style: none;
  &.normal {
    --color: @color-normal-dark;
    .focus_hover_active_text(@color-normal-dark,@color-normal-hover-link,@color-normal-dark);
  }
  &.success {
    --color: @color-success-dark;
    .focus_hover_active_text(@color-success-dark,@color-success-hover-link,@color-success-dark);
  }
  &.warning {
    --color: @color-warning-dark;
    .focus_hover_active_text(@color-warning-dark,@color-warning-hover-link,@color-warning-dark);
  }
  &.danger {
    --color: @color-danger-dark;
    .focus_hover_active_text(@color-danger-dark,@color-danger-hover-link,@color-danger-dark);
  }
}

.square {
  border-radius: 0%;
}
.circle {
  border-radius: 10px;
}
.round {
  border-radius: 50%;
}

.mini {
  --height: 24px;
  --font-size: x-small;
}
.small {
  --height: 28px;
  --font-size: small;
}
.medium {
  --height: 32px;
  --font-size: medium;
}
.large {
  --height: 36px;
  --font-size: large;
}

.disabled {
  opacity: 0.5; /* 降低不透明度 */
  cursor: not-allowed; /* 更改光标样式 */
}
</style>
