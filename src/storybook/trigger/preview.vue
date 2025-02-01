<template>
  <TriggerProvider>
    <PlacementProvider>
      <Trigger>
        <PlacementReference placement="top">
          <button>按钮</button>
        </PlacementReference>
      </Trigger>
      <TriggerPopup :teleportToBody="false">
        <Placement><span>展示页面</span> </Placement>
      </TriggerPopup>
    </PlacementProvider>
  </TriggerProvider>
  <br />
  <br />
  <br />
  <TriggerProvider>
    <PlacementProvider>
      <Trigger>
        <PlacementReference>
          <button>按钮</button>
        </PlacementReference>
      </Trigger>
      <TriggerPopup :teleportToBody="false">
        <Placement><span>展示页面</span> </Placement>
      </TriggerPopup>
    </PlacementProvider>
  </TriggerProvider>
</template>

<script lang="ts" setup>
import { TriggerProvider, Trigger, TriggerPopup } from '@/components/trigger/index'
import { PlacementProvider, PlacementReference, Placement } from '@/components/placement/index'
</script>
