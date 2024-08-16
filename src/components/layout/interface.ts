import type {} from './constants'

//Button的事件列表
export interface LayoutEmits {
  [key: string]: any // 添加索引签名
  // click: (ev: MouseEvent) => true
}

//Button的参数列表
export interface LayoutProps {}

export interface LayoutSidebarProps {
  width?: string
}

export const DEFAULT_LAYOUT_SIDEBAR_PROPS: LayoutSidebarProps = {
  width: '20%',
}

// export const DEFAULT_Layout_PROPS: LayoutProps = {
// }
