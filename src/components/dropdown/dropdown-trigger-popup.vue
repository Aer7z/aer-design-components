<template>
  <TriggerPopup>
    <template v-slot:default>
      <div :class="[cls]">
        <slot></slot>
      </div>
    </template>
  </TriggerPopup>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { ComputedRef } from 'vue'
import { TriggerPopup } from '../trigger/index'
import { getClsPrefix } from '@/components/_utils/global-config'

defineOptions({
  name: 'DropdownTriggerPopup',
})

const cls: ComputedRef<string[]> = computed(() => [`${getClsPrefix()}dropdown-trigger-popup`])
</script>

<style lang="less" src="./style/index.less"></style>
