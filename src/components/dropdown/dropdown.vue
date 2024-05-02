<template>
  <Trigger>
    <Button>test</Button>
    <template v-slot:content>
      <label>测试</label>
    </template>
  </Trigger>
</template>

<script lang="ts" setup>
import Trigger from '../trigger/index'
import Button from '../button/index'
import { ref, computed } from 'vue'
// import type { DialogEmits, DialogProps } from './interface'
import { getClsPrefix } from '../_utils/global-config'

defineOptions({
  name: 'Dropdown'
})

// const props = withDefaults(defineProps<DialogProps>(), {
//   title: '暂无内容',
//   body: '暂无内容'
// })

// const emits = defineEmits<DialogEmits>()
</script>

<style lang="less" src="./style/index.less"></style>
