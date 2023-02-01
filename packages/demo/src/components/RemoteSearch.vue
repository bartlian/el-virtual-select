<template>
  <div>
    <ElVirtualSelect
      v-model="value"
      :options="list"
      remote
      :remote-method="handleRemoteSearch"
      @change="handleChange"
      @focus="handleFocus"
    ></ElVirtualSelect>
    <p>选中的值：{{ value }}</p>
    <el-button @click="reset">重置</el-button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ElVirtualSelect from 'el-virtual-select'
import 'el-virtual-select/dist/style.css'

const rawList = Array.from({ length: 10000 }).map((i, index) => ({
  label: 'label' + index,
  value: 'value' + index
}))
const list = ref(rawList)
let cachedLastQuery = ''
let currentLabel = ''
const value = ref('')
const handleRemoteSearch = val => {
  cachedLastQuery = val
  list.value = rawList.filter(i => i.label.includes(val))
}
const handleFocus = () => {
  if (!value.value) {
    list.value = rawList
  }

  if (value.value && !currentLabel.includes(cachedLastQuery)) {
    handleRemoteSearch('')
  }
}
const handleChange = val => {
  console.log('current value:', val)
  currentLabel = list.value.find(i => i.value === val)?.label ?? ''
  console.log('current label:', currentLabel)
}
const reset = () => {
  value.value = ''
}
</script>

<style lang="scss" scoped></style>
