<template>
  <!-- <span>遮蔽层和z-index测试<Modal :title="modalTitle" :body="modalBody"></Modal></span> -->
  <!-- <span style="z-index: 999">遮蔽层和z-index测试</span> -->
  <!-- <button style="position: relative; z-index: 1001">1</button> -->

  <Modal>
    <ModalTrigger>
      <button>打开</button>
    </ModalTrigger>
    <ModalTriggerPopup>
      <template v-slot:default>
        <ModalHeader>
          <span>标题在此</span>
        </ModalHeader>
        <ModalBody>
          <div>如果我拿指甲剪剔牙会怎么样</div>
          <div>我是天才</div>
        </ModalBody>
        <ModalFooter>
          <template v-slot:ok>
            <button>确定</button>
          </template>
          <!-- <template #cancel>
            <button>取消</button>
          </template> -->
        </ModalFooter>
      </template>
    </ModalTriggerPopup>
  </Modal>
  <Modal>
    <ModalTrigger>
      <button>打开</button>
    </ModalTrigger>
    <ModalTriggerPopup>
      <template v-slot:default>
        <span>如果我拿指甲剪剔牙会怎么样</span>
        <span>我是天才</span>
      </template>
    </ModalTriggerPopup>
  </Modal>
</template>

<script setup lang="ts">
import Modal from '../components/modal/index'
import {
  ModalTrigger,
  ModalTriggerPopup,
  ModalHeader,
  ModalBody,
  ModalFooter
} from '../components/modal/index'

const modalTitle: string = '标题在此'
const modalBody: string = '如果我拿指甲剪剔牙会怎么样\n我是天才'
</script>

<style></style>
