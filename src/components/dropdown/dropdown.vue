<template>
  <slot name="trigger" />
  <slot name="triggerPopup" />
  <!-- <div>23123</div> -->
</template>

<script lang="ts" setup>
import { ref, computed, provide, onMounted, onBeforeMount } from 'vue'
import type { Ref } from 'vue'
import type { PopupPosRec } from '../trigger/constants'

defineOptions({
  name: 'Dropdown'
})

// 初始化trigger触发器，提供必要数据
function initTrigger() {
  const triggerPopupPosRec: Ref<PopupPosRec> = ref({
    top: '',
    left: '',
    bottom: '',
    right: ''
  })
  provide('triggerPopupPosRec', triggerPopupPosRec)
  const popupVisible: Ref<boolean> = ref(false)
  provide('triggerPopupVisible', popupVisible)
}

onBeforeMount(() => {
  initTrigger()
})
</script>

<style lang="less" src="./style/index.less"></style>
