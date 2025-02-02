<template>
  对弹出框的位置进行计算，使得弹出框可以根据触发元素的位置进行调整。
  <Trigger>
    <Placement>
      <TriggerListen>
        <PlacementReference placement="top">
          <button>按钮</button>
        </PlacementReference>
      </TriggerListen>
      <TriggerContent :teleportToBody="false">
        <PlacementContent>
          <span>展示页面</span>
        </PlacementContent>
      </TriggerContent>
    </Placement>
  </Trigger>
  <br />
  <Trigger>
    <Placement>
      <TriggerListen>
        <PlacementReference>
          <button>按钮</button>
        </PlacementReference>
      </TriggerListen>
      <TriggerContent :teleportToBody="false">
        <PlacementContent>
          <span>展示页面</span>
        </PlacementContent>
      </TriggerContent>
    </Placement>
  </Trigger>
</template>

<script lang="ts" setup>
import { Trigger, TriggerListen, TriggerContent } from '@/components/trigger/index'
import { Placement, PlacementReference, PlacementContent } from '@/components/placement/index'
</script>
