**目录**
[toc]

# API

## `<Modal>`

### `<Modal>` Props说明

|    参数名    |          描述          |   类型    | 默认值  |
| :----------: | :--------------------: | :-------: | :-----: |
|     mask     |     是否展示遮蔽层     | `boolean` | `true`  |
| maskClosable | 点击遮蔽层是否允许关闭 | `boolean` | `false` |

### `<Modal>` Event说明

| 事件名 |         描述         |       参数       |
| :----: | :------------------: | :--------------: |
| opened | 模态对话框打开时触发 | ev: `MouseEvent` |
| closed | 模态对话框关闭时触发 | ev: `MouseEvent` |

### `<Modal>` Slots说明

| 插槽名  |            描述            | 参数 |
| :-----: | :------------------------: | :--: |
| default | 承载Trigger 和TriggerPopup | ---- |

## `<ModalTrigger>`

### `<ModalTrigger>` Props说明

| 参数名 | 描述 | 类型 | 默认值 |
| :----: | :--: | :--: | :----: |
|  ----  | ---- | ---- |  ----  |

### `<ModalTrigger>` Event说明

| 事件名 | 描述 | 参数 |
| :----: | :--: | :--: |
|  ----  | ---- | ---- |

### `<ModalTrigger>` slots说明

| 参数名  |       描述       | 参数 |
| :-----: | :--------------: | :--: |
| default | 模态对话框触发器 | ---- |

## `<ModalTriggerPopup>`

### `<ModalTriggerPopup>` Props说明

| 参数名 | 描述 | 类型 | 默认值 |
| :----: | :--: | :--: | :----: |
|  ----  | ---- | ---- |  ----  |

### `<ModalTriggerPopup>` Event说明

| 事件名 | 描述 | 参数 |
| :----: | :--: | :--: |
|  ----  | ---- | ---- |

### `<ModalTriggerPopup>` slots说明

| 参数名  |                    描述                    | 参数 |
| :-----: | :----------------------------------------: | :--: |
| default | 模态对话框弹出框(承载Header、Body、Footer) | ---- |

## `<ModalHeader>`

### `<ModalHeader>` Props说明

| 参数名 | 描述 | 类型 | 默认值 |
| :----: | :--: | :--: | :----: |
|  ----  | ---- | ---- |  ----  |

### `<ModalHeader>` Event说明

| 事件名 | 描述 | 参数 |
| :----: | :--: | :--: |
|  ----  | ---- | ---- |

### `<ModalHeader>` slots说明

| 参数名  |      描述      | 参数 |
| :-----: | :------------: | :--: |
| default | 模态对话框标题 | ---- |

## `<ModalBody>`

### `<ModalBody>` Props说明

| 参数名 | 描述 | 类型 | 默认值 |
| :----: | :--: | :--: | :----: |
|  ----  | ---- | ---- |  ----  |

### `<ModalBody>` Event说明

| 事件名 | 描述 | 参数 |
| :----: | :--: | :--: |
|  ----  | ---- | ---- |

### `<ModalBody>` slots说明

| 参数名  |      描述      | 参数 |
| :-----: | :------------: | :--: |
| default | 模态对话框中部 | ---- |

## `<ModalFooter>`

### `<ModalFooter>` Props说明

| 参数名 | 描述 | 类型 | 默认值 |
| :----: | :--: | :--: | :----: |
|  ----  | ---- | ---- |  ----  |

### `<ModalFooter>` Event说明

| 事件名 | 描述 | 参数 |
| :----: | :--: | :--: |
|  ----  | ---- | ---- |

### `<ModalFooter>` slots说明

| 参数名  |      描述      | 参数 |
| :-----: | :------------: | :--: |
| default | 模态对话框底部 | ---- |
|   ok    |  底部确定按钮  | ---- |
| cancel  |  底部取消按钮  | ---- |

## 样例代码

```html
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
        <div>主体内容</div>
      </Modal.Body>
      <Modal.Footer>
        <template v-slot:ok>
          <button>确定</button>
        </template>
        <template v-slot:cancel>
          <button>取消</button>
        </template>
      </Modal.Footer>
    </template>
  </Modal.TriggerPopup>
</Modal>
```
