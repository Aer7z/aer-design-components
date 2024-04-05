<template>
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
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { DialogEmits, DialogProps } from './interface'

defineOptions({
  name: 'Dialog'
})

const props = withDefaults(defineProps<DialogProps>(), {
  // title: '暂无内容',
  // value: '暂无内容',
  visible: true
})

const emits = defineEmits<DialogEmits>()

let visibleDialog = ref(props.visible)
</script>

<style lang="less" src="./style/dialog.less" scoped></style>
