<template>
    <slot name="trigger" />
    <slot name="triggerContent" />
    <div>23123</div>
</template>

<script lang="ts" setup>
import { ref, computed, provide } from 'vue'
import type { Ref } from 'vue'
import type { PopupPosRec } from '../trigger/constants'

defineOptions({
  name: 'Dropdown'
})

const triggerPopupPosRec: Ref<PopupPosRec> = ref({
  top: '',
  left: '',
  bottom: '',
  right: ''
})
provide('triggerPopupPosRec', triggerPopupPosRec)
const popupVisible: Ref<boolean> = ref(false)
provide('triggerPopupVisible', popupVisible)

// const cls = computed(() => [`${getClsPrefix()}dropdown`])

// const props = withDefaults(defineProps<DialogProps>(), {
//   title: '暂无内容',
//   body: '暂无内容'
// })

// const emits = defineEmits<DialogEmits>()
</script>

<style lang="less" src="./style/index.less"></style>
