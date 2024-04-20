# API

## `<Trigger>` Props说明

|       参数名        |                   描述                    |   类型    |  默认值  |
| :-----------------: | :---------------------------------------: | :-------: | :------: |
| clickOutsideToClose |      是否在点击外部区域时关闭弹出框       | `boolean` |  `true`  |
|      disabled       |                 是否禁用                  | `boolean` | `false`  |
|      position       | 弹出位置`('top','bottom','left','right')` | `string`  | `bottom` |
|       trigger       |    触发方式`('hover','click','focus')`    | `string`  | `click`  |

## `<Trigger>` Event说明

| 事件名        | 描述                     | 参数               |
| ------------- | ------------------------ | ------------------ |
| hide          | 弹出框隐藏后触发         | --                 |
| visibleChange | 弹出框显示状态改变时触发 | visible: `boolean` |
| show          | 弹出框显示后触发         | --                 |

## `<Trigger>` Slots说明

| 插槽名  | 描述       | 参数 |
| ------- | ---------- | ---- |
| content | 弹出框内容 | --   |
