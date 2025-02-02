<template>
  <TriggerContent>
    <template v-slot:default>
      <PlacementContent>
        <div :class="[cls]">
          <slot></slot>
        </div>
      </PlacementContent>
    </template>
  </TriggerContent>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { ComputedRef } from 'vue'
import { TriggerContent } from '@/components/trigger/index'
import { PlacementContent } from '@/components/placement/index'
import { getClsPrefix } from '@/components/_utils/global-config'

defineOptions({
  name: 'DropdownTriggerContent',
})

const cls: ComputedRef<string[]> = computed(() => [`${getClsPrefix()}dropdown-trigger-popup`])
</script>

<style lang="less" src="./style/index.less"></style>
