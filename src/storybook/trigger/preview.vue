<template>
  <Trigger>
    <TriggerListen>
      <button>按钮</button>
    </TriggerListen>
    <TriggerContent :teleportToBody="false">
      <span>展示页面</span>
    </TriggerContent>
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
    <br />
  </Trigger>
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
