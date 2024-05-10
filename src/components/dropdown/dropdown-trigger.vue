<template>
  <Trigger>
    <template v-slot:default>
      <slot></slot>
    </template>
  </Trigger>
</template>

<script lang="ts" setup>
import Trigger from '../trigger/index'
import { ref, computed,inject } from 'vue'
import type { Ref } from 'vue'
import type { PopupPosRec } from '../trigger/constants'
// import type { DialogEmits, DialogProps } from './interface'
import { getClsPrefix } from '../_utils/global-config'

defineOptions({
  name: 'DropdownTrigger'
})

const triggerPopupPosRec: Ref<PopupPosRec | undefined> = ref(
  inject('triggerPopupPosRec', undefined)
)
const popupVisible: Ref<boolean> = ref(inject('triggerPopupVisible', false))

// const props = withDefaults(defineProps<DialogProps>(), {
//   title: '暂无内容',
//   body: '暂无内容'
// })

// const emits = defineEmits<DialogEmits>()
</script>

<style lang="less" src="./style/index.less"></style>
