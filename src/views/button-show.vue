<template>
  <Button type="primary" @click="foo">我是primary按钮</Button>
  <Button type="dashed" @click="foo" disabled>我是dashed按钮</Button>
  <Button type="link" target="https://www.baidu.com/" disabled>我是link按钮</Button>
  <Button type="link" target="https://www.baidu.com/">我是link按钮</Button>
  <Button type="text" size="large" @click="foo">我是text按钮</Button>
  <Button type="default" size="small">我是default按钮</Button>
  <h1>test</h1>
  <br />
  <br />
  <Button type="primary" @click="foo" disabled>我是primary按钮</Button>
  <Button type="default" @click="foo" disabled>我是default按钮</Button>
  <Button type="dashed" @click="foo" disabled>我是dashed按钮</Button>
  <Button type="text" @click="foo" disabled>我是text按钮</Button>
  <Button type="link" @click="foo" disabled>我是link按钮</Button>
  <br />
  <br />
  <span class="element">
    <Button type="primary" shape="square">我是primary按钮</Button>
  </span>
  <Button type="primary" shape="square" status="success">我是primary按钮</Button>
  <Button type="primary" shape="circle" status="warning">我是primary按钮</Button>
  <Button type="primary" shape="round" status="danger">我是primary按钮</Button>
  <br />
  <br />
  <Button type="default">我是default按钮</Button>
  <Button type="default" status="success">我是default按钮</Button>
  <Button type="default" status="warning">我是default按钮</Button>
  <Button type="default" status="danger">我是default按钮</Button>
  <br />
  <br />
  <Button type="dashed">我是dashed按钮</Button>
  <Button type="dashed" status="success">我是dashed按钮</Button>
  <Button type="dashed" status="warning">我是dashed按钮</Button>
  <Button type="dashed" status="danger">我是dashed按钮</Button>
  <br />
  <br />
  <Button type="text">我是text按钮</Button>
  <Button type="text" status="success">我是text按钮</Button>
  <Button type="text" status="warning">我是text按钮</Button>
  <Button type="text" status="danger">我是text按钮</Button>

  <br />
  <br />
  <Button type="link">我是link按钮</Button>
  <Button type="link" status="success">我是link按钮</Button>
  <Button type="link" status="warning">我是link按钮</Button>
  <Button type="link" status="danger">我是link按钮</Button>
  <!-- <Button type="default" shape="circle">我是default按钮</Button>
  <Button type="default" shape="round">我</Button> -->
</template>

<script setup lang="ts">
import Button from '../components/button/index'
// import  '../components/button/index'

function foo(): void {
  console.log('我爱你')
}
</script>

<style>
.element {
  background-color: #000000;
}
</style>
