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

export const DEFAULT_LAYOUT_HEADER_PROPS: LayoutHeaderProps = {
  height: '30px',
  backgroundColor: 'transparent',
}

export const DEFAULT_LAYOUT_SIDEBAR_PROPS: LayoutSidebarProps = {
  width: '20%',
  backgroundColor: 'transparent',
}

export const DEFAULT_LAYOUT_CONTENT_PROPS: LayoutContentProps = {
  height: '30px',
  backgroundColor: 'transparent',
}

export const DEFAULT_LAYOUT_FOOTER_PROPS: LayoutFooterProps = {
  height: '30px',
  backgroundColor: 'transparent',
}
