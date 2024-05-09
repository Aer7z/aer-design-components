<template>
  <ButtonSimple @click="foo">
    <span>Click me</span>
  </ButtonSimple>
  <br />
  <br />
  <ButtonSimple variant="primary">
    <span>primary</span>
  </ButtonSimple>
  <ButtonSimple variant="secondary">
    <span>secondary</span>
  </ButtonSimple>
  <ButtonSimple variant="outline">
    <span>outline</span>
  </ButtonSimple>
  <ButtonSimple variant="text">
    <span>text</span>
  </ButtonSimple>
  <ButtonSimple variant="link" target="http://www.baidu.com">
    <span>link</span>
  </ButtonSimple>
  <ButtonSimple variant="destructive">
    <span>destructive</span>
  </ButtonSimple>
  <br />
  <br />
  <ButtonSimple variant="primary" disabled>
    <span>primary</span>
  </ButtonSimple>
  <ButtonSimple variant="secondary" disabled>
    <span>secondary</span>
  </ButtonSimple>
  <ButtonSimple variant="outline" disabled>
    <span>outline</span>
  </ButtonSimple>
  <ButtonSimple variant="text" disabled>
    <span>text</span>
  </ButtonSimple>
  <ButtonSimple variant="link" target="http://www.baidu.com" disabled>
    <span>link</span>
  </ButtonSimple>
  <ButtonSimple variant="destructive" disabled>
    <span>destructive</span>
  </ButtonSimple>
</template>

<script setup lang="ts">
import ButtonSimple from '../components/button-simple/index'
import Button from '../components/button/index'

function foo(): void {
  console.log('我爱你')
}
</script>

<style></style>
