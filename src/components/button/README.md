# API

## `<Button>` Props说明

|  参数名  |                          描述                           |      类型      |   默认值    |
| :------: | :-----------------------------------------------------: | :------------: | :---------: |
| disabled |                     是否为禁用状态                      |   `boolean`    |   `false`   |
| loading  |                     是否为加载状态                      |   `boolean`    |   `false`   |
|   size   |       按钮尺寸`('mini','small','medium','large')`       |  `ButtonSize`  | `'medium'`  |
|  shape   |          按钮形状`('square','circle','round')`          | `ButtonShape`  | `'square'`  |
|  status  | 按钮状态`('normal' , 'warning' , 'success' , 'danger')` | `ButtonStatus` | `'normal'`  |
|  target  |                  link 类型按钮跳转链接                  |    `string`    |      -      |
|   type   |                      按钮的类型。                       |  `ButtonType`  | `'default'` |

## `<Button>` Event说明

| 事件名 | 描述           | 参数             |
| ------ | -------------- | ---------------- |
| click  | 点击按钮时触发 | ev: `MouseEvent` |

## `<button>` Slots说明

| 插槽名 | 描述 | 参数 |
| ------ | :--: | ---- |
| icon   | 图标 | -    |
