<template>
  <Modal>
    <ModalTrigger><button>触发按钮</button></ModalTrigger>
    <ModalTriggerContent>
      <ModalWrapper>
        <ModalHeader
          >头部区域
          <template #cancel>
            <ModalTrigger>
              <button>x</button>
            </ModalTrigger>
          </template>
        </ModalHeader>
        <ModalBody>中间区域</ModalBody>
        <ModalFooter
          >底部
          <template #ok>
            <ModalTrigger>
              <button>确定</button>
            </ModalTrigger>
          </template>
          <template #cancel>
            <ModalTrigger>
              <button>取消</button>
            </ModalTrigger>
          </template>
        </ModalFooter>
      </ModalWrapper>
    </ModalTriggerContent>
  </Modal>
</template>

<script lang="ts" setup>
import {
  Modal,
  ModalTrigger,
  ModalTriggerContent,
  ModalWrapper,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from '@/components/modal/index'
</script>
