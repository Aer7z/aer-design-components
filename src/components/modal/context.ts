import { provide, inject } from 'vue'
import type { ModalContext, ModalProps } from './interface'

export {
  useTriggerContext as useModalTriggerContext,
  createTriggerContext as createModalTriggerContext,
} from '../trigger/context'

const modalPropsContextKey = Symbol('modalPropsContextKey')

export function createModalPropsContext(props: ModalProps) {
  provide<ModalContext>(modalPropsContextKey, {
    isMaskShow: props.isMaskShow,
    maskClosable: props.maskClosable,
  })
}

export function useModalPropsContext() {
  const context: ModalContext | undefined = inject(modalPropsContextKey)
  if (!context) {
    throw new Error('请在Modal组件的子组件中使用该函数')
  }
  return context
}
