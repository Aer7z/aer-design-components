<template>
  <div>各种位置的click点击方式触发</div>
  <div>
    <Trigger>
      <button>Open</button>
      <template #content>
        <select>
          <option>1</option>
          <option>二</option>
          <option>three</option>
        </select>
      </template>
    </Trigger>
    <Trigger position="top">
      <button>Open</button>
      <template #content>
        <select>
          <option>1</option>
          <option>二</option>
          <option>three</option>
        </select>
      </template>
    </Trigger>
    <Trigger position="bottom">
      <button>Open</button>
      <template #content>
        <select>
          <option>1</option>
          <option>二</option>
          <option>three</option>
        </select>
      </template>
    </Trigger>
    <Trigger position="left">
      <button>Open</button>
      <template #content>
        <select>
          <option>1</option>
          <option>二</option>
          <option>three</option>
        </select>
      </template>
    </Trigger>
    <Trigger position="right">
      <button>Open</button>
      <template #content>
        <select>
          <option>1</option>
          <option>二</option>
          <option>three</option>
        </select>
      </template>
    </Trigger>
  </div>
  <br /><br />
  <div>不同触发方式的触发器 Button</div>
  <div>
    <Trigger trigger="click">
      <button>Open</button>
      <template #content>
        <select>
          <option>1</option>
          <option>二</option>
          <option>three</option>
        </select>
      </template>
    </Trigger>
    <Trigger trigger="hover">
      <button>Open</button>
      <template #content>
        <select>
          <option>1</option>
          <option>二</option>
          <option>three</option>
        </select>
      </template>
    </Trigger>
    <Trigger trigger="focus">
      <button>Open</button>
      <template #content>
        <select>
          <option>1</option>
          <option>二</option>
          <option>three</option>
        </select>
      </template>
    </Trigger>
  </div>
  <br /><br />
  <div>不同触发方式的触发器 Input</div>
  <div>
    <Trigger trigger="click">
      <input placeholder="click" />
      <template #content>
        <select>
          <option>1</option>
          <option>二</option>
          <option>three</option>
        </select>
      </template>
    </Trigger>
    <Trigger trigger="hover">
      <input placeholder="hover" />
      <template #content>
        <select>
          <option>1</option>
          <option>二</option>
          <option>three</option>
        </select>
      </template>
    </Trigger>
    <Trigger trigger="focus">
      <input placeholder="focus" />
      <template #content>
        <select>
          <option>1</option>
          <option>二</option>
          <option>three</option>
        </select>
      </template>
    </Trigger>
  </div>
  <button>我是</button>
</template>

<script setup lang="ts">
import Trigger from '../components/trigger/index'
</script>

<style></style>
