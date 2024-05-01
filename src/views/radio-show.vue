<template>
  <Radio value="zanwu">暂无</Radio>
  <Radio value="zanwu" size="mini">暂无</Radio>
  <Radio value="zanwu" size="small">暂无</Radio>
  <Radio value="zanwu" size="medium">暂无</Radio>
  <Radio value="zanwu" size="large">暂无</Radio>
  <Radio value="zanwu" disabled>暂无</Radio>
  <br /><br />
  单选框组-水平
  <RadioGroup>
    <Radio value="a">a</Radio>
    <Radio value="b">b</Radio>
    <Radio value="c">c</Radio>
    <Radio value="d">d</Radio>
  </RadioGroup>
  <br /><br />
  单选框组-垂直
  <RadioGroup direction="vertical">
    <Radio value="a">a</Radio>
    <Radio value="b">b</Radio>
    <Radio value="c">c</Radio>
    <Radio value="d">d</Radio>
  </RadioGroup>
  <br /><br />
  <Radio value="zanwu" type="button" size="mini">暂无</Radio>
  <Radio value="zanwu" type="button" size="small">暂无</Radio>
  <Radio value="zanwu" type="button" size="medium">暂无</Radio>
  <Radio value="zanwu" type="button" size="large">暂无</Radio>
  <Radio value="zanwu" type="button" disabled>暂无</Radio>
</template>

<script setup lang="ts">
import Radio from '../components/radio/index'
import { RadioGroup } from '../components/radio/index'
</script>

<style></style>
