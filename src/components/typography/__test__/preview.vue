<template>
  <TypographyText size="xsmall">xsmall </TypographyText>
  <TypographyText size="small">small </TypographyText>
  <TypographyText size="medium">medium </TypographyText>
  <TypographyText size="large">large </TypographyText>
  <TypographyText color="success"> success颜色 </TypographyText>
  <TypographyText color="danger"> danger颜色 </TypographyText>
  <span style="background-color: black">
    <TypographyText color="white">白色</TypographyText>
  </span>
  <TypographyText color="black"> 黑色 </TypographyText>
</template>

<script lang="ts" setup>
import { Typography, TypographyText, TypographyTitle } from '../index'
</script>
