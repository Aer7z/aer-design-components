<template>
  <Dropdown>
    <template v-slot:trigger>
      <DropdownTrigger>
        <button>test</button>
      </DropdownTrigger>
    </template>
    <template v-slot:triggerPopup>
      <DropdownTriggerPopup>
        <label style="background-color: aliceblue">测试</label>
      </DropdownTriggerPopup>
    </template>
  </Dropdown>
  <div>233</div>
</template>

<script setup lang="ts">
import Dropdown from '../components/dropdown/index'
import { DropdownTrigger, DropdownTriggerPopup } from '../components/dropdown/index'

// import Button from '../components/button/index'
</script>

<style></style>
