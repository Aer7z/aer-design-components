<template>
  <!-- <span>遮蔽层和z-index测试<Modal :title="modalTitle" :body="modalBody"></Modal></span> -->
  <!-- <span style="z-index: 999">遮蔽层和z-index测试</span> -->
  <!-- <button style="position: relative; z-index: 1001">1</button> -->

  <Modal>
    <Modal.Trigger>
      <button>打开</button>
    </Modal.Trigger>
    <Modal.TriggerPopup>
      <template v-slot:default>
        <Modal.Header>
          <span>标题在此</span>
        </Modal.Header>
        <Modal.Body>
          <div>如果我拿指甲剪剔牙会怎么样</div>
          <div>我是天才</div>
        </Modal.Body>
        <Modal.Footer>
          <template v-slot:ok>
            <button>确定</button>
          </template>
          <!-- <template #cancel>
            <button>取消</button>
          </template> -->
        </Modal.Footer>
      </template>
    </Modal.TriggerPopup>
  </Modal>
  <AerModal>
    <AerModalTrigger>
      <button>打开</button>
    </AerModalTrigger>
    <AerModalTriggerPopup>
      <template v-slot:default>
        <AerModalHeader>
          <span>标题在此</span>
        </AerModalHeader>
        <AerModalBody>
          <div>如果我拿指甲剪剔牙会怎么样</div>
          <div>我是天才</div>
        </AerModalBody>
        <AerModalFooter>
          <template v-slot:ok>
            <button>确定</button>
          </template>
        </AerModalFooter>
      </template>
    </AerModalTriggerPopup>
  </AerModal>
  <div>遮蔽层是否可以关闭显示</div>
  <Modal :mask="false">
    <Modal.Trigger>
      <button>打开</button>
    </Modal.Trigger>
    <Modal.TriggerPopup>
      <template v-slot:default>
        <Modal.Header>
          <span>标题在此</span>
        </Modal.Header>
        <Modal.Body>
          <div>如果我拿指甲剪剔牙会怎么样</div>
          <div>我是天才</div>
        </Modal.Body>
        <Modal.Footer>
          <template v-slot:ok>
            <button>确定</button>
          </template>
          <!-- <template #cancel>
            <button>取消</button>
          </template> -->
        </Modal.Footer>
      </template>
    </Modal.TriggerPopup>
  </Modal>

  <div>点击遮蔽层是否可以关闭弹出框</div>
  <Modal :maskClosable="true">
    <Modal.Trigger>
      <button>打开</button>
    </Modal.Trigger>
    <Modal.TriggerPopup>
      <template v-slot:default>
        <Modal.Header>
          <span>标题在此</span>
        </Modal.Header>
        <Modal.Body>
          <div>如果我拿指甲剪剔牙会怎么样</div>
          <div>我是天才</div>
        </Modal.Body>
        <Modal.Footer>
          <template v-slot:ok>
            <button>确定</button>
          </template>
          <!-- <template #cancel>
            <button>取消</button>
          </template> -->
        </Modal.Footer>
      </template>
    </Modal.TriggerPopup>
  </Modal>
</template>

<script setup lang="ts">
import type AppVue from '@/App.vue'
import Modal from '../components/modal/index'
// import {
//   ModalTrigger,
//   ModalTriggerPopup,
//   ModalHeader,
//   ModalBody,
//   ModalFooter
// } from '../components/modal/index'

const modalTitle: string = '标题在此'
const modalBody: string = '如果我拿指甲剪剔牙会怎么样\n我是天才'
</script>

<style></style>
