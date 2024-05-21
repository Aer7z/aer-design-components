**目录**
[toc]

# API

## `<Dropdown>`

### `<Dropdown>` Props说明

|       参数名        |                   描述                    |   类型    |  默认值  |
| :-----------------: | :---------------------------------------: | :-------: | :------: |
| clickOutsideToClose |      是否在点击外部区域时关闭弹出框       | `boolean` |  `true`  |
|      disabled       |                 是否禁用                  | `boolean` | `false`  |
|      position       | 弹出位置`('top','bottom','left','right')` | `string`  | `bottom` |
|       trigger       |    触发方式`('hover','click','focus')`    | `string`  | `click`  |

### `<Dropdown>` Event说明

| 事件名 |         描述         |       参数       |
| :----: | :------------------: | :--------------: |
| opened | 下拉对话框打开时触发 | ev: `MouseEvent` |
| closed | 下拉对话框关闭时触发 | ev: `MouseEvent` |

### `<Dropdown>` Slots说明

| 插槽名  |   描述   | 参数 |
| :-----: | :------: | :--: |
| default | 默认插槽 | ---- |

## `<DropdownTrigger>`

### `<DropdownTrigger>` Props说明

| 参数名 | 描述 | 类型 | 默认值 |
| :----: | :--: | :--: | :----: |
|   无   |  无  |  无  |   无   |

### `<DropdownTrigger>` Event说明

### `<DropdownTrigger>` Slots说明

| 插槽名  |   描述   | 参数 |
| :-----: | :------: | :--: |
| default | 默认插槽 | ---- |

## `<DropdownTriggerPopup>`

### `<DropdownTriggerPopup>` Props说明

| 参数名 | 描述 | 类型 | 默认值 |
| :----: | :--: | :--: | :----: |
|   无   |  无  |  无  |   无   |

### `<DropdownTriggerPopup>` Event说明

| 事件名 | 描述 | 参数 |
| :----: | :--: | :--: |
|   无   |  无  |  无  |

### `<DropdownTriggerPopup>` Slots说明

| 插槽名  |   描述   | 参数 |
| :-----: | :------: | :--: |
| default | 默认插槽 | ---- |
