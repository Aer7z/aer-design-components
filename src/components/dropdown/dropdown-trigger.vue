<template>
  <TriggerListen>
    <template v-slot:default>
      <PlacementReference>
        <slot></slot>
      </PlacementReference>
    </template>
  </TriggerListen>
</template>

<script lang="ts" setup>
import { TriggerListen } from '@/components/trigger/index'
import { PlacementReference } from '@/components/placement/index'

defineOptions({
  name: 'DropdownTrigger',
})
</script>

<style lang="less" src="./style/index.less"></style>
