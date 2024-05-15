<template>
    <TriggerPopup >
      <template v-slot:default>
        <slot></slot>
      </template>
    </TriggerPopup>
</template>

<script lang="ts" setup>
import { TriggerPopup } from '../trigger/index'
import { ref, computed, inject } from 'vue'
import type { Ref } from 'vue'
import type { PopupPosRec } from '../trigger/constants'
// import type { DialogEmits, DialogProps } from './interface'
import { getClsPrefix } from '../_utils/global-config'

defineOptions({
  name: 'DropdownContent'
})

const triggerPopupPosRec: Ref<PopupPosRec | undefined> = ref(
  inject('triggerPopupPosRec', undefined)
)
const popupVisible: Ref<boolean> = ref(inject('triggerPopupVisible', false))

</script>

<style lang="less" src="./style/index.less"></style>
