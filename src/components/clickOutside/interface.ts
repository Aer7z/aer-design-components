//Button的事件列表
export interface clickOutsideEmits {
  [key: string]: any // 添加索引签名
  // click: (ev: MouseEvent) => true
}

//Button的参数列表
export interface clickOutsideProps {
  clickOutside?: (ev: MouseEvent) => {}
}
