# el-virtual-select

一个基于[vue-virtual-scroller](https://www.npmjs.com/package/vue-virtual-scroller) 和 element ui 选择框[el-select](https://element.eleme.cn/#/zh-CN/component/select)的具有虚拟滚动的下拉选择组件。

## 具体用法

```js
import ElVirtualSelect from 'el-virtual-select'
import 'el-virtual-select/dist/style.css'
```

导入组件及样式

## 属性、事件

| 参数                  | 说明                                   | 默认值 |
| :-------------------- | :------------------------------------- | :----- |
| options               | 需要渲染的下拉数据                     | []     |
| valueKey              | 数据 value 键值                        | value  |
| labelKey              | 数据 label 键值                        | label  |
| filterable            | 是否过滤                               | true   |
| clearable             | 是否展示删除                           | true   |
| minItemSize           | 每一项的最小高度                       | 34     |
| beautifyScrollerStyle | 是否启用美化后的滚动样式               | false  |
| dropdownItemsCount    | 下拉视图中展示的个数                   | 6      |
| listClass             | 可传递给 vue-virtual-scroller 组件属性 | ''     |
| itemClass             | 可传递给 vue-virtual-scroller 组件属性 | ''     |
| listTag               | 可传递给 vue-virtual-scroller 组件属性 | 'div'  |
| itemTag               | 可传递给 vue-virtual-scroller 组件属性 | 'div'  |

el-select 提供的其他属性，事件大多都支持。

## 例子

[demo 源码](https://github.com/bartlian/el-virtual-select/tree/main/packages/demo)

以下例子基于 `vue 2.7x` 举例

### 基本用法

```js
<template>
  <div>
    <ElVirtualSelect v-model="value" :options="list" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ElVirtualSelect from 'el-virtual-select'
import 'el-virtual-select/dist/style.css'

const list = Array.from({ length: 1000 }).map((i, index) => ({
  label: 'label' + index,
  value: 'value' + index
}))
const value = ref('')
</script>
```

### 映射 value、label 的键值

```js
<template>
  <div>
    <ElVirtualSelect
      v-model="value"
      :options="list"
      value-key="code"
      label-key="name"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ElVirtualSelect from 'el-virtual-select'
import 'el-virtual-select/dist/style.css'

const list = Array.from({ length: 1000 }).map((i, index) => ({
  name: 'name' + index,
  code: 'code' + index
}))
const value = ref('')
</script>
```

### 自定义 ElOption label 的插槽

```js
<template>
  <div>
    <ElVirtualSelect v-model="value" :options="list">
      <template #label="{ item }">
        <span>{{ item.value }} &nbsp;&nbsp; {{ item.label }}</span>
      </template>
    </ElVirtualSelect>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ElVirtualSelect from 'el-virtual-select'
import 'el-virtual-select/dist/style.css'

const list = Array.from({ length: 1000 }).map((i, index) => ({
  label: 'label' + index,
  value: 'value' + index
}))
const value = ref('')
</script>
```

### 美化滚动条

```js
<template>
  <div>
    <ElVirtualSelect
      v-model="value"
      :options="list"
      beautify-scroller-style
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ElVirtualSelect from 'el-virtual-select'
import 'el-virtual-select/dist/style.css'

const list = Array.from({ length: 1000 }).map((i, index) => ({
  label: 'label' + index,
  value: 'value' + index
}))
const value = ref('')
</script>
```
