import type {} from './constants'

//Button的事件列表
export interface LayoutEmits {
  [key: string]: any // 添加索引签名
  // click: (ev: MouseEvent) => true
}

//Button的参数列表
export interface LayoutProps {}

export interface LayoutHeaderProps {
  height?: string
  backgroundColor?: string
}

export interface LayoutSidebarProps {
  width?: string
  height?: string
  backgroundColor?: string
}

export interface LayoutContentProps {
  height?: string
  backgroundColor?: string
}

export interface LayoutFooterProps {
  height?: string
  backgroundColor?: string
}
