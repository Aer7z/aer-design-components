<template>
  <Teleport to="body">
    <div v-if="triggerPopupVisible" :class="[clsTriggerPopup]" :style="[triggerPopupPosRec]">
      <slot></slot>
    </div>
  </Teleport>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { ComputedRef } from 'vue'
import { getClsPrefix } from '../_utils/global-config'
import { DEFAULT_TRIGGER_POPUP_PROPS, type TriggerPopupProps } from './interface'
import { useTriggerContext } from './context'

defineOptions({
  name: 'TriggerPopup',
})

const { triggerPopupPosRec, triggerPopupVisible } = useTriggerContext()

const props = withDefaults(defineProps<TriggerPopupProps>(), DEFAULT_TRIGGER_POPUP_PROPS)

// `clsTriggerPopup` 提供了触发器弹出窗口的样式类。
const clsTriggerPopup: ComputedRef<string[]> = computed(() => [`${getClsPrefix()}trigger-popup`])
</script>
