<template>
  <Radio value="zanwu">暂无</Radio>
  <Radio value="zanwu" size="mini">暂无</Radio>
  <Radio value="zanwu" size="small">暂无</Radio>
  <Radio value="zanwu" size="medium">暂无</Radio>
  <Radio value="zanwu" size="large">暂无</Radio>
  <Radio value="zanwu" disabled>暂无</Radio>
  <br /><br />
  单选框组-水平
  <RadioGroup v-model="valueTest">
    <Radio value="a">a</Radio>
    <Radio value="b">b</Radio>
    <Radio value="c">c</Radio>
    <Radio value="d">d</Radio>
    {{ valueTest }}
  </RadioGroup>
  <br /><br />
  单选框组-垂直
  <RadioGroup direction="vertical">
    <Radio value="a">a</Radio>
    <Radio value="b">b</Radio>
    <Radio value="c">c</Radio>
    <Radio value="d">d</Radio>
  </RadioGroup>
  单选框组-大小
  <RadioGroup size="large">
    <Radio value="zanwu" size="mini">mini</Radio>
    <Radio value="zanwu" size="small">small</Radio>
    <Radio value="zanwu" size="medium">medium</Radio>
    <Radio value="zanwu" size="large">large</Radio>
  </RadioGroup>
  <br /><br />
  单选框组-混合
  <RadioGroup type="button">
    <Radio value="zanwu" type="button">button</Radio>
    <Radio value="zanwu">radio</Radio>
    <Radio value="zanwu" type="button">button</Radio>
    <Radio value="zanwu">radio</Radio>
  </RadioGroup>
  <br /><br />
  <Radio value="zanwu" type="button" size="mini">暂无</Radio>
  <Radio value="zanwu" type="button" size="small">暂无</Radio>
  <Radio value="zanwu" type="button" size="medium">暂无</Radio>
  <Radio value="zanwu" type="button" size="large">暂无</Radio>
  <Radio value="zanwu" type="button" disabled>暂无</Radio>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Radio from '../components/radio/index'
import { RadioGroup } from '../components/radio/index'

let valueTest = ref('test')
</script>

<style></style>
