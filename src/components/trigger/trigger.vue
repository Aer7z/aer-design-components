<template>
  <button >Open Modal</button>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
// import type { DialogEmits, DialogProps } from './interface'
import { getComponentsClassPrefix } from '../_utils/global-config'

defineOptions({
  name: 'Trigger'
})

// const props = withDefaults(defineProps<DialogProps>(), {
//   title: '暂无内容',
//   body: '暂无内容'
// })

// const emits = defineEmits<DialogEmits>()
</script>

<style lang="less" src="./style/trigger.less"></style>
