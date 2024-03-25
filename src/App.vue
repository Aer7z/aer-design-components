<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import AerButton from './components/button/AerButton.vue'

function foo() {
  console.log('我爱你')
}
</script>

<template>
  <!-- <aer-button type="primary" @click="foo">我是primary按钮</aer-button>
  <aer-button type="dashed" @click="foo" disabled>我是dashed按钮</aer-button>
  <aer-button type="link" target="https://www.baidu.com/" disabled>我是link按钮</aer-button>
  <aer-button type="link" target="https://www.baidu.com/">我是link按钮</aer-button>
  <aer-button type="text" size="large" @click="foo">我是text按钮</aer-button>
  <aer-button type="default" size="small">我是default按钮</aer-button>
  <h1>test</h1> -->

  <aer-button type="primary" shape="square">我是primary按钮</aer-button>
  <aer-button type="primary" shape="square" status="success">我是primary按钮</aer-button>
  <aer-button type="primary" shape="square" status="warning">我是primary按钮</aer-button>
  <aer-button type="primary" shape="square" status="danger">我是primary按钮</aer-button>
  <br />
  <br />
  <aer-button type="default">我是default按钮</aer-button>
  <aer-button type="default" status="success">我是default按钮</aer-button>
  <aer-button type="default" status="warning">我是default按钮</aer-button>
  <aer-button type="default" status="danger">我是default按钮</aer-button>
  <br />
  <br />
  <aer-button type="dashed">我是dashed按钮</aer-button>
  <aer-button type="dashed" status="success">我是dashed按钮</aer-button>
  <aer-button type="dashed" status="warning">我是dashed按钮</aer-button>
  <aer-button type="dashed" status="danger">我是dashed按钮</aer-button>
  <br />
  <br />
  <aer-button type="text">我是text按钮</aer-button>
  <aer-button type="text" status="success">我是text按钮</aer-button>
  <aer-button type="text" status="warning">我是text按钮</aer-button>
  <aer-button type="text" status="danger">我是text按钮</aer-button>

  <br />
  <br />
  <aer-button type="link">我是link按钮</aer-button>
  <aer-button type="link" status="success">我是link按钮</aer-button>
  <aer-button type="link" status="warning">我是link按钮</aer-button>
  <aer-button type="link" status="danger">我是link按钮</aer-button>
  <!-- <aer-button type="default" shape="circle">我是default按钮</aer-button>
  <aer-button type="default" shape="round">我</aer-button> -->
</template>

<style scoped></style>
